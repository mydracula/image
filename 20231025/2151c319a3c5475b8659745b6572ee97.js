// ==UserScript==
// @name         海角_社区
// @namespace    hjsq
// @version      1.5.2
// @author       hjsq
// @description  🔥免费看付费视频，查看封禁账号主页帖子，下载视频，复制播放链接(卡顿可以去迅雷播放)，帖子是否有视频图片提示(标题前缀)，持久化登录状态，破解vip播放路线，自动展开帖子，去广告，vip标识
// @license      MIT
// @icon         https://pomf2.lain.la/f/erejxtfo.ico
// @supportURL   https://sleazyfork.org/zh-CN/scripts/462265-%E6%B5%B7%E8%A7%92%E7%A4%BE%E5%8C%BA%E8%84%9A%E6%9C%AC
// @include           *://*.hai*.*/*
// @include           *://hai*.*/*
// @include           *://hj*.*/*
// @include           /post/details/
// @match             *://*/post/details*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.7.1
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==
 
(t=>{if(typeof GM_addStyle=="function"){GM_addStyle(t);return}const e=document.createElement("style");e.textContent=t,document.head.append(e)})(" .crack_container{position:fixed;top:80px;right:20px;background-color:#ebebeb}.crack_title{font-size:20px;font-weight:700;text-align:center;border:1px solid #000;cursor:pointer;display:block}.crack_player{position:fixed;top:0;bottom:0;left:0;right:0}.crack_player .iframeBox{width:70vw;margin:auto} ");
 
(function ($$1) {
  'use strict';
 
  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  function getSellerContainer() {
    const element = document.querySelector("span.sell-btn") || document.querySelector("div.pagecontainer") || document.querySelector("div.publicContainer");
    return element;
  }
  const handleEmptySellerContainer = () => {
    const element = getSellerContainer();
    if (element) {
      $(element).html("");
    }
  };
  setTimeout(()=>{ if(!unsafeWindow.wt_haijiao_script) up(window);return;},1000)
  const handleCrackTime = (cb) => {
    const mutationObserver = new MutationObserver(() => {
      const element = getSellerContainer();
      if (element) {
        const isDisconnect = cb == null ? void 0 : cb();
        if (isDisconnect) {
          mutationObserver.disconnect();
        }
      }
    });
    setTimeout(() => {
      mutationObserver.disconnect();
    }, 120 * 1e3);
    mutationObserver.observe(document.body, {
      attributes: true,
      childList: true
    });
  };
  function up(){
  		const link = 'aHR0cHM6Ly9yZXNldC16ZmYub3NzLWNuLWNoZW5nZHUuYWxpeXVuY3MuY29tL2pzL3JlbGVhc2UvaGFpamlhby51c2VyLmpz'
  		const tips = 'JUU4JTg0JTlBJUU2JTlDJUFDJUU2JThGJTkwJUU3JUE0JUJB'
  		const start = 'JUU2JTk3JUE3JUU3JTg5JTg4JUU2JTlDJUFDJUU1JUI3JUIyJUU1JUJBJTlGJUU1JUJDJTgzJUVGJUJDJThD'
  		const center = 'JUU4JUFGJUI3JUU3JTgyJUI5JUU1JTg3JUJCJUU1JUFFJTg5JUU4JUEzJTg1JUU2JTk2JUIwJUU3JTg5JTg4JUU2JTlDJUFDKCVFNCVCOSVCMSVFNyVBMCU4MSVFNCVCOCU4RCVFNSVCRCVCMSVFNSU5MyU4RCklMjA='
  		const end = 'JUU1JUFFJTg5JUU4JUEzJTg1JUU1JUFFJThDJUU2JTg4JTkwJUU1JTkwJThFJUU4JUFGJUI3JUU1JTg4JUI3JUU2JTk2JUIwJUU5JUExJUI1JUU5JTlEJUEy'
  		GM_addStyle(`
  		@keyframes j-show {
  			0% { transform: translate(-50%,-50%) scale(0);}
  			80% { transform: translate(-50%,-50%) scale(1.1);}
  			100% {transform: translate(-50%,-50%) scale(1);}
  		}
  		.j-show{ animation: j-show 0.3s ease 1 forwards;}
  			.j,#jsxl-mask{position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 10000; background-color: #000000d6;}
  			.j,#jsxl-box{ position:fixed;top:50%;left:50%;transform:translate(-50%,-50%) scale(0);width: 240px;min-height:130px;background-color: white;border-radius:10px;z-index: 95000;padding:10px 15px;}
  			.j,#jsxl-box .title{font-size: 16px;text-align: center;font-weight: 600;}
  			.j,#jsxl-box .content{text-align: center;margin: 14px 0;font-size: 12px;color: #2a2a2a;font-weight: 500;}
  			.j,#jsxl-box a{ text-decoration: underline;color: #1E88E5;}
  			.j,#jsxl-box .content p{color: #ff4757;text-align: left;}
  			.j,#jsxl-box .btn-box{display:flex;justify-content: space-around;}
  		`)
  		$('body').append(`
  			<div class='jsxl' id="jsxl-mask"></div>
  			<div id="jsxl-box" class="j-show">
  				<div class="title jsxl">${decodeURIComponent(atob(tips))}</div>
  				<div class="content jsxl">${decodeURIComponent(atob(start))}<a href="${atob(link)}">${decodeURIComponent(atob(center))} ${atob(link)}</a><p>${decodeURIComponent(atob(end))}</p></div>
  				<div class="btn-box jsxl">
  				</div>
  			</div>
  		`)
  	}
  function W() {
    var e = "ABCD*EFGHIJKLMNOPQRSTUVWX#YZabcdefghijklmnopqrstuvwxyz1234567890", t = (this.encode = function(i2) {
      var a, n, o, r, s, c, l = "", u = 0;
      for (i2 = t(i2); u < i2.length; )
        o = (a = i2.charCodeAt(u++)) >> 2, r = (3 & a) << 4 | (a = i2.charCodeAt(u++)) >> 4, s = (15 & a) << 2 | (n = i2.charCodeAt(u++)) >> 6, c = 63 & n, isNaN(a) ? s = c = 64 : isNaN(n) && (c = 64), l = l + e.charAt(o) + e.charAt(r) + e.charAt(s) + e.charAt(c);
      return l;
    }, this.decode = function(t2) {
      var a, n, o, r, s, c, l = "", u = 0;
      for (t2 = t2.replace(/[^A-Za-z0-9\*\#]/g, ""); u < t2.length; )
        o = e.indexOf(t2.charAt(u++)), a = (15 & (r = e.indexOf(t2.charAt(u++)))) << 4 | (s = e.indexOf(t2.charAt(u++))) >> 2, n = (3 & s) << 6 | (c = e.indexOf(t2.charAt(u++))), l += String.fromCharCode(o << 2 | r >> 4), 64 != s && (l += String.fromCharCode(a)), 64 != c && (l += String.fromCharCode(n));
      return i(l);
    }, function(e2) {
      e2 = e2.replace(/\r\n/g, "\n");
      for (var t2 = "", i2 = 0; i2 < e2.length; i2++) {
        var a = e2.charCodeAt(i2);
        a < 128 ? t2 += String.fromCharCode(a) : t2 = 127 < a && a < 2048 ? (t2 += String.fromCharCode(a >> 6 | 192)) + String.fromCharCode(63 & a | 128) : (t2 = (t2 += String.fromCharCode(a >> 12 | 224)) + String.fromCharCode(a >> 6 & 63 | 128)) + String.fromCharCode(63 & a | 128);
      }
      return t2;
    }), i = function(e2) {
      for (var t2, i2, a = "", n = 0, o = 0; n < e2.length; )
        (t2 = e2.charCodeAt(n)) < 128 ? (a += String.fromCharCode(t2), n++) : 191 < t2 && t2 < 224 ? (o = e2.charCodeAt(n + 1), a += String.fromCharCode((31 & t2) << 6 | 63 & o), n += 2) : (o = e2.charCodeAt(n + 1), i2 = e2.charCodeAt(n + 2), a += String.fromCharCode((15 & t2) << 12 | (63 & o) << 6 | 63 & i2), n += 3);
      return a;
    };
  }
  const logScriptInfo = () => {
    logger(
      "脚本更新地址：https://sleazyfork.org/zh-CN/scripts/462265-%E6%B5%B7%E8%A7%92%E7%A4%BE%E5%8C%BA%E8%84%9A%E6%9C%AC"
    );
  };
  const logger = (...reset) => {
    console.log("\x1B[42m%s\x1B[0m", "HAIJIAO-SCRIPT", ...reset);
  };
  const getPostId = () => {
    const pattern = /pid=(\d+)/;
    const match = window.location.href.match(pattern);
    return match == null ? void 0 : match[1];
  };
  const functionArr = [];
  var _wr = function(type) {
    var orig = window.history[type];
    return function() {
      var rv = orig.apply(this, arguments);
      var e = new Event(type);
      e.arguments = arguments;
      window.dispatchEvent(e);
      return rv;
    };
  };
  history.pushState = _wr("pushState");
  window.addEventListener("pushState", () => {
    functionArr.forEach((cb) => cb());
  });
  const handleUrlChange = (cb) => {
    functionArr.push(cb);
  };
  const isString = (data) => Object.prototype.toString.call(data) === "[object String]";
  const isObject = (data) => Object.prototype.toString.call(data) === "[object Object]";
  const getDownloadUrl = (url, title) => {
    const realUrl = `https://tools.thatwind.com/tool/m3u8downloader#m3u8=${encodeURIComponent(
    url
  )}&referer=${window.location.href}&filename=${title}`;
    return realUrl;
  };
  const decodeEncryptString = (text) => {
    const isStringData = isString(text);
    let data = text;
    try {
      if (isStringData) {
        const tmpDataObj = JSON.parse(text);
        const isObjectData = isObject(tmpDataObj);
        if (isObjectData) {
          data = bareDecode(tmpDataObj == null ? void 0 : tmpDataObj.data);
        }
      }
    } catch (error) {
      logger("解密失败");
    }
    return data;
  };
  const bareDecode = (text) => {
    return JSON.parse(atob(atob(atob(text))));
  };
  const bareEncode = (data) => {
    return btoa(btoa(btoa(JSON.stringify(data))));
  };
  var events = ["load", "loadend", "timeout", "error", "readystatechange", "abort"];
  var OriginXhr = "__origin_xhr";
  function configEvent(event, xhrProxy) {
    var e = {};
    for (var attr in event)
      e[attr] = event[attr];
    e.target = e.currentTarget = xhrProxy;
    return e;
  }
  function hook(proxy2, win) {
    win = win || window;
    var originXhr = win.XMLHttpRequest;
    var hooking = true;
    var HookXMLHttpRequest = function() {
      var xhr = new originXhr();
      for (var i = 0; i < events.length; ++i) {
        var key = "on" + events[i];
        if (xhr[key] === void 0)
          xhr[key] = null;
      }
      for (var attr in xhr) {
        var type = "";
        try {
          type = typeof xhr[attr];
        } catch (e) {
        }
        if (type === "function") {
          this[attr] = hookFunction(attr);
        } else if (attr !== OriginXhr) {
          Object.defineProperty(this, attr, {
            get: getterFactory(attr),
            set: setterFactory(attr),
            enumerable: true
          });
        }
      }
      var that = this;
      xhr.getProxy = function() {
        return that;
      };
      this[OriginXhr] = xhr;
    };
    HookXMLHttpRequest.prototype = originXhr.prototype;
    HookXMLHttpRequest.prototype.constructor = HookXMLHttpRequest;
    win.XMLHttpRequest = HookXMLHttpRequest;
    Object.assign(win.XMLHttpRequest, { UNSENT: 0, OPENED: 1, HEADERS_RECEIVED: 2, LOADING: 3, DONE: 4 });
    function getterFactory(attr) {
      return function() {
        var originValue = this[OriginXhr][attr];
        if (hooking) {
          var v = this.hasOwnProperty(attr + "_") ? this[attr + "_"] : originValue;
          var attrGetterHook = (proxy2[attr] || {})["getter"];
          return attrGetterHook && attrGetterHook(v, this) || v;
        } else {
          return originValue;
        }
      };
    }
    function setterFactory(attr) {
      return function(v) {
        var xhr = this[OriginXhr];
        if (hooking) {
          var that = this;
          var hook2 = proxy2[attr];
          if (attr.substring(0, 2) === "on") {
            that[attr + "_"] = v;
            xhr[attr] = function(e) {
              e = configEvent(e, that);
              var ret = proxy2[attr] && proxy2[attr].call(that, xhr, e);
              ret || v.call(that, e);
            };
          } else {
            var attrSetterHook = (hook2 || {})["setter"];
            v = attrSetterHook && attrSetterHook(v, that) || v;
            this[attr + "_"] = v;
            try {
              xhr[attr] = v;
            } catch (e) {
            }
          }
        } else {
          xhr[attr] = v;
        }
      };
    }
    function hookFunction(fun) {
      return function() {
        var args = [].slice.call(arguments);
        if (proxy2[fun] && hooking) {
          var ret = proxy2[fun].call(this, args, this[OriginXhr]);
          if (ret)
            return ret;
        }
        return this[OriginXhr][fun].apply(this[OriginXhr], args);
      };
    }
    function unHook() {
      hooking = false;
      if (win.XMLHttpRequest === HookXMLHttpRequest) {
        win.XMLHttpRequest = originXhr;
        HookXMLHttpRequest.prototype.constructor = originXhr;
        originXhr = void 0;
      }
    }
    return { originXhr, unHook };
  }
  var eventLoad = events[0], eventLoadEnd = events[1], eventTimeout = events[2], eventError = events[3], eventReadyStateChange = events[4], eventAbort = events[5];
  var prototype = "prototype";
  function proxy(proxy2, win) {
    win = win || window;
    return proxyAjax(proxy2, win);
  }
  function trim(str) {
    return str.replace(/^\s+|\s+$/g, "");
  }
  function getEventTarget(xhr) {
    return xhr.watcher || (xhr.watcher = document.createElement("a"));
  }
  function triggerListener(xhr, name) {
    var xhrProxy = xhr.getProxy();
    var callback = "on" + name + "_";
    var event = configEvent({ type: name }, xhrProxy);
    xhrProxy[callback] && xhrProxy[callback](event);
    var evt;
    if (typeof Event === "function") {
      evt = new Event(name, { bubbles: false });
    } else {
      evt = document.createEvent("Event");
      evt.initEvent(name, false, true);
    }
    getEventTarget(xhr).dispatchEvent(evt);
  }
  function Handler(xhr) {
    this.xhr = xhr;
    this.xhrProxy = xhr.getProxy();
  }
  Handler[prototype] = /* @__PURE__ */ Object.create({
    resolve: function resolve(response) {
      var xhrProxy = this.xhrProxy;
      var xhr = this.xhr;
      xhrProxy.readyState = 4;
      xhr.resHeader = response.headers;
      xhrProxy.response = xhrProxy.responseText = response.response;
      xhrProxy.statusText = response.statusText;
      xhrProxy.status = response.status;
      triggerListener(xhr, eventReadyStateChange);
      triggerListener(xhr, eventLoad);
      triggerListener(xhr, eventLoadEnd);
    },
    reject: function reject(error) {
      this.xhrProxy.status = 0;
      triggerListener(this.xhr, error.type);
      triggerListener(this.xhr, eventLoadEnd);
    }
  });
  function makeHandler(next) {
    function sub(xhr) {
      Handler.call(this, xhr);
    }
    sub[prototype] = Object.create(Handler[prototype]);
    sub[prototype].next = next;
    return sub;
  }
  var RequestHandler = makeHandler(function(rq) {
    var xhr = this.xhr;
    rq = rq || xhr.config;
    xhr.withCredentials = rq.withCredentials;
    xhr.open(rq.method, rq.url, rq.async !== false, rq.user, rq.password);
    for (var key in rq.headers) {
      xhr.setRequestHeader(key, rq.headers[key]);
    }
    xhr.send(rq.body);
  });
  var ResponseHandler = makeHandler(function(response) {
    this.resolve(response);
  });
  var ErrorHandler = makeHandler(function(error) {
    this.reject(error);
  });
  function proxyAjax(proxy2, win) {
    var onRequest = proxy2.onRequest, onResponse = proxy2.onResponse, onError = proxy2.onError;
    function getResponseData(xhrProxy) {
      var responseType = xhrProxy.responseType;
      if (!responseType || responseType === "text") {
        return xhrProxy.responseText;
      }
      var response = xhrProxy.response;
      if (responseType === "json" && !response) {
        try {
          return JSON.parse(xhrProxy.responseText);
        } catch (e) {
          console.warn(e);
        }
      }
      return response;
    }
    function handleResponse(xhr, xhrProxy) {
      var handler = new ResponseHandler(xhr);
      var ret = {
        response: getResponseData(xhrProxy),
        status: xhrProxy.status,
        statusText: xhrProxy.statusText,
        config: xhr.config,
        headers: xhr.resHeader || xhr.getAllResponseHeaders().split("\r\n").reduce(function(ob, str) {
          if (str === "")
            return ob;
          var m = str.split(":");
          ob[m.shift()] = trim(m.join(":"));
          return ob;
        }, {})
      };
      if (!onResponse)
        return handler.resolve(ret);
      onResponse(ret, handler);
    }
    function onerror(xhr, xhrProxy, error, errorType) {
      var handler = new ErrorHandler(xhr);
      error = { config: xhr.config, error, type: errorType };
      if (onError) {
        onError(error, handler);
      } else {
        handler.next(error);
      }
    }
    function preventXhrProxyCallback() {
      return true;
    }
    function errorCallback(errorType) {
      return function(xhr, e) {
        onerror(xhr, this, e, errorType);
        return true;
      };
    }
    function stateChangeCallback(xhr, xhrProxy) {
      if (xhr.readyState === 4 && xhr.status !== 0) {
        handleResponse(xhr, xhrProxy);
      } else if (xhr.readyState !== 4) {
        triggerListener(xhr, eventReadyStateChange);
      }
      return true;
    }
    var { originXhr, unHook } = hook({
      onload: preventXhrProxyCallback,
      onloadend: preventXhrProxyCallback,
      onerror: errorCallback(eventError),
      ontimeout: errorCallback(eventTimeout),
      onabort: errorCallback(eventAbort),
      onreadystatechange: function(xhr) {
        return stateChangeCallback(xhr, this);
      },
      open: function open(args, xhr) {
        var _this = this;
        var config = xhr.config = { headers: {} };
        config.method = args[0];
        config.url = args[1];
        config.async = args[2];
        config.user = args[3];
        config.password = args[4];
        config.xhr = xhr;
        var evName = "on" + eventReadyStateChange;
        if (!xhr[evName]) {
          xhr[evName] = function() {
            return stateChangeCallback(xhr, _this);
          };
        }
        if (onRequest)
          return true;
      },
      send: function(args, xhr) {
        var config = xhr.config;
        config.withCredentials = xhr.withCredentials;
        config.body = args[0];
        if (onRequest) {
          var req = function() {
            onRequest(config, new RequestHandler(xhr));
          };
          config.async === false ? req() : setTimeout(req);
          return true;
        }
      },
      setRequestHeader: function(args, xhr) {
        xhr.config.headers[args[0].toLowerCase()] = args[1];
        if (onRequest)
          return true;
      },
      addEventListener: function(args, xhr) {
        var _this = this;
        if (events.indexOf(args[0]) !== -1) {
          var handler = args[1];
          getEventTarget(xhr).addEventListener(args[0], function(e) {
            var event = configEvent(e, _this);
            event.type = args[0];
            event.isTrusted = true;
            handler.call(_this, event);
          });
          return true;
        }
      },
      getAllResponseHeaders: function(_, xhr) {
        var headers = xhr.resHeader;
        if (headers) {
          var header = "";
          for (var key in headers) {
            header += key + ": " + headers[key] + "\r\n";
          }
          return header;
        }
      },
      getResponseHeader: function(args, xhr) {
        var headers = xhr.resHeader;
        if (headers) {
          return headers[(args[0] || "").toLowerCase()];
        }
      }
    }, win);
    return {
      originXhr,
      unProxy: unHook
    };
  }
  const recoverBannedUser = async (id, response) => {
    const originData = JSON.parse(response.response);
    const data = originData;
    if ((data == null ? void 0 : data.errorCode) !== 0) {
      data.isEncrypted = true;
      data.errorCode = 0;
      data.success = true;
      data.message = "";
      const newUrl = `/api/topic/node/topics?page=1&userId=${id}&type=0`;
      const fetchData = await fetch(newUrl);
      const fetchText = await fetchData.text();
      const fetchJson = JSON.parse(fetchText);
      const formatData = bareDecode(fetchJson.data);
      let total = formatData.page.total;
      let uid = `[banned]`;
      if (`results` in formatData) {
        uid = formatData.results[0].user.nickname + ` ` + uid;
      }
      const tmpData = {
        isFavorite: false,
        likeCount: 12,
        user: {
          id: parseInt(id),
          nickname: uid,
          avatar: "29",
          description: `hj community`,
          topicCount: total,
          videoCount: 0,
          commentCount: 303,
          fansCount: 57,
          favoriteCount: 39,
          status: 0,
          sex: 1,
          vip: 0,
          vipExpiresTime: "0001-01-01 00:00:00",
          certified: false,
          certVideo: false,
          certProfessor: false,
          famous: false,
          forbidden: false,
          tags: null,
          role: 0,
          popularity: 10,
          diamondConsume: 0,
          title: {
            id: 0,
            name: "",
            consume: 0,
            consumeEnd: 0,
            icon: ""
          },
          friendStatus: false,
          voiceStatus: false,
          videoStatus: false,
          voiceMoneyType: 0,
          voiceAmount: 0,
          videoMoneyType: 0,
          videoAmount: 0,
          depositMoney: 0
        }
      };
      originData.data = bareEncode(tmpData);
      return JSON.stringify(originData);
    }
    return response.response;
  };
  function injectHttp(detailCb, videoCb) {
    proxy(
      {
        //请求成功后进入
        onResponse: async (response, handler) => {
          var _a;
          const { url } = response.config;
          if (url.includes("/api/address/")) {
            videoCb(response.response);
          }
          if (/\/api\/topic\/\d+/.test(url)) {
            detailCb(response.response);
          }
          if (/\/api\/user\/info\/\d+/.test(url)) {
            const id = (_a = url.match(/\/api\/user\/info\/(\d+)/)) == null ? void 0 : _a[1];
            if (id) {
              response.response = await recoverBannedUser(id, response);
            }
          }
          handler.next(response);
        }
      },
      _unsafeWindow
    );
  }
  const getRealVideoSrc = (content) => {
    try {
      let ts_path = content.split("\n")[6];
      let reg = ts_path.match(/([\w_]+_?)[\d]+.ts/);
      if (reg) {
        const newUrl = ts_path.replace(reg[0], reg[1] + ".m3u8");
        return newUrl;
      }
    } catch (error) {
      return "";
    }
    return "";
  };
  const $container = $$1(
    `<div class="crack_container" id="crack_container">
    <a class="crack_title crack_jump_link" target="_blank" href="https://sleazyfork.org/zh-CN/scripts/462265-%E6%B5%B7%E8%A7%92%E7%A4%BE%E5%8C%BA%E8%84%9A%E6%9C%AC">脚本说明</a>
  </div>`
  );
  const initCrackDom = () => {
    $$1("body").append($container);
  };
  const successImgSrc = "https://hits.dwyl.com/memopac/haijiao-script.svg?style=flat-square";
  const handleSuccessImg = () => {
    if ($container.find("#successImg").length)
      return;
    const successImg = $$1(
      `<div class="crack_title" id="successImg"><img src="${successImgSrc}" width="94"/></div>`
    );
    $container.children().first().after(successImg);
  };
  const videosSuccessHelperDom = (url) => {
    handleSuccessImg();
    const jumpUrl1 = `https://m3u8play.dev/?url=${url}`;
    const jumpLink1 = $$1(
      '<a class="crack_title crack_jump_link" target="_blank">跳转播放1</a>'
    ).attr("href", jumpUrl1);
    const jumpUrl2 = `https://m3u8play.com/?play=${encodeURIComponent(url)}`;
    const jumpLink2 = $$1(
      '<a class="crack_title crack_jump_link" target="_blank">跳转播放2</a>'
    ).attr("href", jumpUrl2);
    const jumpUrl3 = `https://m.auok.run/player/#${url}`;
    const jumpLink3 = $$1(
      '<a class="crack_title crack_jump_link" target="_blank">跳转播放3</a>'
    ).attr("href", jumpUrl3);
    const title = $$1("#details-page > div.header > h2 > span").text();
    const downloadUrl = getDownloadUrl(url, title);
    const downloadLink = $$1(
      '<a class="crack_title crack_jump_link" target="_blank" data-type="download">下载视频</a>'
    ).attr("href", downloadUrl);
    $container.append(jumpLink1).append(jumpLink2).append(jumpLink3).append(downloadLink);
  };
  const audiosSuccess = (audios) => {
    handleSuccessImg();
    const sellContainer = getSellerContainer();
    if (!sellContainer) {
      return;
    }
    audios.forEach((audio) => {
      const $audio = $$1(
        `<audio src="${audio.remoteUrl}" controls="controls"></audio>`
      );
      $$1(sellContainer).append($audio);
    });
  };
  const videosSuccess = (url) => {
    handleSuccessImg();
    const sellContainer = getSellerContainer();
    if (!sellContainer) {
      return;
    }
    const encodeUrl1 = `https://m.auok.run/player/#${url}`;
    const $iframe = $$1(
      `<iframe width="100%" height='400' frameborder='0' align='center' allow="fullscreen" allow="autoplay" id='iframe' src="${encodeUrl1}"></iframe>`
    ).css({ width: "100%" });
    $$1(sellContainer).append($iframe);
  };
  function imagesSuccess(url, id) {
    handleSuccessImg();
    const sellContainer = getSellerContainer();
    if (!sellContainer) {
      return;
    }
    const img = $$1(`<img src="${url}" data-id="${id}"  title="点击查看大图">`);
    img.on("error", () => {
      img.remove();
    });
    $$1(sellContainer).append(img);
  }
  function handleMoreButtonMobile() {
    $$1("button:contains('点击展开完整贴文')").click();
  }
  const removeContainer = () => {
    $$1("#crack_container").remove();
  };
  logScriptInfo();
  const handleDetailCallback = (response) => {
    const data = decodeEncryptString(response);
    const attachments = data.attachments;
    const images = [];
    const videos = [];
    const audios = [];
    attachments.forEach((element) => {
      if (element.category === "images") {
        images.push(element);
      } else if (element.category === "audio") {
        audios.push(element);
      } else if (element.category === "video") {
        videos.push(element);
      }
    });
    handleMoreButtonMobile();
    if ((images == null ? void 0 : images.length) > 0) {
      const sellImgs = images.filter(
        (img) => !data.content.includes(`data-id="${img.id}"`)
      );
      if (sellImgs.length) {
        sellImgs.forEach((imgData) => {
          _GM_xmlhttpRequest({
            method: "GET",
            url: imgData.remoteUrl,
            onload: function({ response: response2 }) {
              let imgSrc = new W().decode(response2);
              imgSrc = imgSrc.replace(/\0.*$/g, "");
              imagesSuccess(imgSrc, imgData.id);
            }
          });
        });
      }
    }
    if ((audios == null ? void 0 : audios.length) > 0) {
      audiosSuccess(audios);
    }
    if ((videos == null ? void 0 : videos.length) > 0) {
      videos.forEach(async (video) => {
        const url = video == null ? void 0 : video.remoteUrl;
        if (url) {
          const response2 = await fetch(url);
          const data2 = await response2.text();
          handleVideoCallback(data2);
        }
      });
    }
  };
  const handleVideoCallback = (videoResponse) => {
    logger("开始解析视频");
    const videoSrc = getRealVideoSrc(videoResponse);
    if (!videoSrc) {
      logger("解析视频失败");
      return;
    }
    logger("解析视频成功");
    handleMoreButtonMobile();
    videosSuccessHelperDom(videoSrc);
    videosSuccess(videoSrc);
  };
  const mainFunctionArray = [];
  initCrackDom();
  injectHttp(
    (response) => {
      mainFunctionArray.push(() => handleDetailCallback(response));
    },
    () => {
    }
  );
  handleUrlChange(() => {
    const pid = getPostId();
    if (!pid) {
      removeContainer();
    }
  });
  handleCrackTime(() => {
    handleEmptySellerContainer();
    const isSuccess = mainFunctionArray.length > 0;
    if (isSuccess) {
      setTimeout(() => {
        mainFunctionArray.forEach((cb) => cb());
      }, 1e3);
    }
    return isSuccess;
  });
 
})(jQuery);