<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>防洪系统</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <style>
        :root {
            --primary: #1677ff;
            --primary-dark: #0958d9;
            --bg: #f0f5ff;
            --text: #1f2937;
            --secondary: #64748b;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background: linear-gradient(135deg, var(--bg) 0%, #ffffff 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            line-height: 1.6;
        }

        .container {
            width: 100%;
            max-width: 800px;
            background: white;
            border-radius: 24px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
            overflow: hidden;
            position: relative;
        }

        .header {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            padding: 40px 30px;
            color: white;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%);
            animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        .header h1 {
            font-size: 28px;
            font-weight: 600;
            margin-bottom: 12px;
            position: relative;
        }

        .header p {
            opacity: 0.9;
            font-size: 15px;
            position: relative;
        }

        .content {
            padding: 40px;
        }

        .notice-card {
            background: linear-gradient(to right, #f8fafc, #f0f7ff);
            border-radius: 20px;
            padding: 30px;
            margin-bottom: 30px;
            border: 1px solid rgba(22, 119, 255, 0.1);
            position: relative;
            overflow: hidden;
        }

        .notice-title {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 20px;
            color: var(--primary);
            font-weight: 600;
            font-size: 20px;
        }

        .notice-title i {
            font-size: 24px;
            background: var(--primary);
            color: white;
            padding: 12px;
            border-radius: 12px;
        }

        .notice-text {
            color: var(--secondary);
            font-size: 15px;
            line-height: 1.8;
            position: relative;
            z-index: 1;
        }

        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 24px;
            margin-top: 30px;
        }

        .feature-item {
            background: white;
            padding: 24px;
            border-radius: 16px;
            border: 1px solid #e5e7eb;
            text-align: center;
            transition: all 0.3s ease;
        }

        .feature-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(22, 119, 255, 0.1);
            border-color: var(--primary);
        }

        .feature-item i {
            font-size: 32px;
            color: var(--primary);
            margin-bottom: 16px;
            transition: all 0.3s ease;
        }

        .feature-item:hover i {
            transform: scale(1.1);
        }

        .feature-item h3 {
            font-size: 18px;
            margin-bottom: 10px;
            color: var(--text);
        }

        .feature-item p {
            font-size: 14px;
            color: var(--secondary);
            line-height: 1.6;
        }

        .badge {
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(22, 119, 255, 0.1);
            color: var(--primary);
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 500;
        }

        @media (max-width: 640px) {
            .container {
                margin: 10px;
            }
            
            .content {
                padding: 24px;
            }
            
            .features {
                grid-template-columns: 1fr;
            }

            .header {
                padding: 30px 20px;
            }

            .notice-card {
                padding: 24px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!--<div class="header">-->
        <!--    <h1><i class="fas fa-shield-alt"></i> </h1>-->
        <!--    <p>专业的支付防洪解决方案</p>-->
        <!--</div>-->

        <div class="content">
            <div class="notice-card">
                <div class="badge">最新版本</div>
                <div class="notice-title">
                    <i class="fas fa-info-circle"></i>
                    系统说明
                </div>
                <div class="notice-text">
                    本防洪系统 支持支付宝和微信qq直扫 接口域名采用163.com 系统会有3秒广告展示，但不影响正常使用体验 另外编辑后的客服订单 输入到分享图打开链接不显示 用防洪生成短链接 输入分享图打开链接扫码就显示订单了
                </div>
            </div>

            <div class="features">
                <div class="feature-item">
                    <i class="fas fa-shield-alt"></i>
                    <h3>可靠防护</h3>
                    <p>采用先进防护算法，为您的防洪系统提供全方位保护</p>
                </div>

                <div class="feature-item">
                    <i class="fas fa-bolt"></i>
                    <h3>快速响应</h3>
                    <p>仅需3秒广告等待时间，确保业务快速进行</p>
                </div>

                <div class="feature-item">
                    <i class="fas fa-random"></i>
                    <h3>双通道支持</h3>
                    <p>完美支持支付宝与微信防洪双通道对接</p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>