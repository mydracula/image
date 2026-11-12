<?php
/**
 * h.m4a.cn 采集中转（国内机器版）
 * ==========================================================
 * 作用：香港那台服务器被上游 h.m4a.cn 拦，国内这台不拦，
 *       就让这台机器代替香港服务器去抓上游数据，再把结果原样吐回来。
 *
 * 部署：宝塔 → 网站 → 新建一个站点（必须开 SSL）→ 把本文件丢进根目录
 *       访问 https://你的域名/relay.php?ping=1 能看到体检结果就说明成了
 *
 * 用法：
 *   GET  relay.php?url=https%3A%2F%2Fh.m4a.cn%2Findex.php%3Faction%3Dlist%26page%3D1
 *   POST relay.php?url=...&body={"id":"abc"}      （body 走 query，实际仍是 GET，不触发预检）
 *   GET  relay.php?ping=1                          体检：能不能连上游
 * 返回：上游原始内容，带 Access-Control-Allow-Origin: *
 */

/* ---------- 跨域头必须先发，否则报错信息浏览器也读不到 ---------- */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Max-Age: 86400');
header('Cache-Control: no-store');

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'OPTIONS') {
    http_response_code(204);
    exit;
}

header('Content-Type: application/json; charset=utf-8');

$ALLOW_HOSTS = ['h.m4a.cn'];
$UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';

/* ---------- 取内容：优先 curl，没装 curl 扩展就退回 file_get_contents ---------- */
function rl_fetch($url, $body, $ua)
{
    $headers = [
        'Accept: application/json, text/plain, */*',
        'Origin: https://h.m4a.cn',
        'Referer: https://h.m4a.cn/',
    ];
    if ($body !== '') {
        $headers[] = 'Content-Type: text/plain;charset=UTF-8';
    }

    if (function_exists('curl_init')) {
        $ch  = curl_init($url);
        $opt = [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT        => 15,
            CURLOPT_CONNECTTIMEOUT => 6,
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_SSL_VERIFYHOST => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_MAXREDIRS      => 3,
            CURLOPT_ENCODING       => '',
            CURLOPT_USERAGENT      => $ua,
            CURLOPT_HTTPHEADER     => $headers,
        ];
        if ($body !== '') {
            $opt[CURLOPT_POST]       = true;
            $opt[CURLOPT_POSTFIELDS] = $body;
        }
        curl_setopt_array($ch, $opt);
        $out  = curl_exec($ch);
        $err  = curl_error($ch);
        $code = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        return [$out === false ? '' : (string) $out, $err, $code];
    }

    $ctx = stream_context_create([
        'http' => [
            'method'        => $body !== '' ? 'POST' : 'GET',
            'header'        => implode("\r\n", $headers),
            'content'       => $body,
            'timeout'       => 15,
            'ignore_errors' => true,
        ],
        'ssl' => ['verify_peer' => false, 'verify_peer_name' => false],
    ]);
    $out  = @file_get_contents($url, false, $ctx);
    $code = 0;
    if (isset($http_response_header[0]) && preg_match('/\s(\d{3})\s/', $http_response_header[0], $m)) {
        $code = (int) $m[1];
    }
    return [$out === false ? '' : (string) $out, $out === false ? 'file_get_contents 失败' : '', $code];
}

/* ---------- 体检模式：?ping=1 ---------- */
if (isset($_GET['ping'])) {
    $t0  = microtime(true);
    $res = rl_fetch('https://h.m4a.cn/index.php?action=list&page=1', '', $UA);
    $ms  = (int) round((microtime(true) - $t0) * 1000);
    list($out, $err, $code) = $res;

    $ok  = ($code === 200 && $out !== '');
    $flat = preg_replace('/\s+/', ' ', $out);
    $cut  = function_exists('mb_substr') ? mb_substr($flat, 0, 160, 'UTF-8') : substr($flat, 0, 160);

    echo json_encode([
        'ok'      => $ok,
        'php'     => PHP_VERSION,
        'curl'    => function_exists('curl_init'),
        'https'   => (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
                     || (($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https'),
        'upstream' => [
            'code' => $code,
            'ms'   => $ms,
            'head' => $cut,
            'err'  => $err,
        ],
        'hint' => $ok
            ? '这台机器能正常访问上游，把本文件地址填进「自动采集 → 中转地址」即可'
            : '这台机器访问不了上游：' . ($err !== '' ? $err : '上游返回 HTTP ' . $code . '（可能被墙/被拦）'),
    ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
    exit;
}

/* ---------- 正常中转 ---------- */
$url = isset($_GET['url']) ? trim((string) $_GET['url']) : '';
$p   = $url !== '' ? parse_url($url) : false;

if (!$p
    || strtolower((string) ($p['scheme'] ?? '')) !== 'https'
    || !in_array(strtolower((string) ($p['host'] ?? '')), $ALLOW_HOSTS, true)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'message' => 'bad url（只允许 https://h.m4a.cn）'], JSON_UNESCAPED_UNICODE);
    exit;
}

$body = isset($_GET['body']) ? (string) $_GET['body'] : '';
list($out, $err, $code) = rl_fetch($url, $body, $UA);

if ($out === '') {
    http_response_code(502);
    echo json_encode(['ok' => false, 'message' => '中转请求失败：' . ($err !== '' ? $err : '空响应')], JSON_UNESCAPED_UNICODE);
    exit;
}

echo $out;
