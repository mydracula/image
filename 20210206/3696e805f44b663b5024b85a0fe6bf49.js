﻿! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("MiniValine", [], t) : "object" == typeof exports ? exports.MiniValine = t() : e.MiniValine = t()
}(window, (function () {
    return function (e) {
        function t(t) {
            for (var n, a, r = t[0], o = t[1], s = 0, l = []; s < r.length; s++) a = r[s], Object.prototype.hasOwnProperty.call(i, a) && i[a] && l.push(i[a][0]), i[a] = 0;
            for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
            for (c && c(t); l.length;) l.shift()()
        }
        var n = {},
            i = {
                0: 0
            };

        function a(t) {
            if (n[t]) return n[t].exports;
            var i = n[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(i.exports, i, i.exports, a), i.l = !0, i.exports
        }
        a.e = function (e) {
            var t, n, r, o, s, c = [],
                l = i[e];
            return 0 !== l && (l ? c.push(l[2]) : (s = new Promise((function (t, n) {
                l = i[e] = [t, n]
            })), c.push(l[2] = s), (t = document.createElement("script")).charset = "utf-8", t.timeout = 120, a.nc && t.setAttribute("nonce", a.nc), t.src = a.p + "MiniValine." + ({
                1: "visitor"
            }[s = e] || s) + ".min.js", n = new Error, r = function (a) {
                t.onerror = t.onload = null, clearTimeout(o);
                var r, s = i[e];
                0 !== s && (s && (r = a && ("load" === a.type ? "missing" : a.type), a = a && a.target && a.target.src, n.message = "Loading chunk " + e + " failed.\n(" + r + ": " + a + ")", n.name = "ChunkLoadError", n.type = r, n.request = a, s[1](n)), i[e] = void 0)
            }, o = setTimeout((function () {
                r({
                    type: "timeout",
                    target: t
                })
            }), 12e4), t.onerror = t.onload = r, document.head.appendChild(t))), Promise.all(c)
        }, a.m = e, a.c = n, a.d = function (e, t, n) {
            a.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, a.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, a.t = function (e, t) {
            if (1 & t && (e = a(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (a.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
                for (var i in e) a.d(n, i, function (t) {
                    return e[t]
                }.bind(null, i));
            return n
        }, a.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return a.d(t, "a", t), t
        }, a.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, a.p = "https://cdn.jsdelivr.net/gh/amehime/MiniValine@v4.2.2-beta10/dist/", a.oe = function (e) {
            throw console.error(e), e
        };
        var r = window.webpackJsonpMiniValine = window.webpackJsonpMiniValine || [],
            o = r.push.bind(r);
        r.push = t, r = r.slice();
        for (var s = 0; s < r.length; s++) t(r[s]);
        var c = o;
        return a(a.s = 10)
    }([function (e, t, n) {
        "use strict";
        var i = {
            on: function (e, t, n, a) {
                for (var r = 0, o = (e = e.split(" ")).length; r < o; r++) i.off(e[r], t, n, a), t.addEventListener ? t.addEventListener(e[r], n, a || !1) : t.attachEvent ? t.attachEvent("on".concat(e[r]), n) : t["on".concat(e[r])] = n
            },
            off: function (e, t, n, i) {
                for (var a = 0, r = (e = e.split(" ")).length; a < r; a++) t.removeEventListener ? t.removeEventListener(e, n, i || !1) : t.detachEvent ? t.detachEvent("on".concat(e), n) : t["on".concat(e)] = null
            }
        };
        e.exports = i
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.VERSION = "4.2.2", t.GBUrl = "https://gravatar.loli.net/avatar/", t.EUrl = ["https://cdn.jsdelivr.net/npm/alus@latest", "https://cdn.jsdelivr.net/gh/MiniValine/qq@master", "https://cdn.jsdelivr.net/gh/MiniValine/Bilibilis@master", "https://cdn.jsdelivr.net/gh/MiniValine/tieba@master", "https://cdn.jsdelivr.net/gh/MiniValine/twemoji@master", "https://cdn.jsdelivr.net/gh/MiniValine/weibo@master"], t.pf = "https://cdn.polyfill.io/v3/polyfill.min.js?features=es6", t.i18nUrl = "https://cdn.jsdelivr.net/gh/MiniValine/minivaline-i18n@latest/", t.DEHash = "9e63c80900d106cbbec5a9f4ea433a3e", t.MaxNL = 6, t.PS = 6, t.C = {
            ip: "",
            comment: "",
            rid: "",
            pid: "",
            at: "",
            nick: "",
            mail: "",
            mailMd5: "",
            link: "",
            ua: navigator.userAgent,
            url: location.pathname
        }
    }, function (e, t, n) {
        "use strict";
        var i = function (e) {
            var t, n = [];
            for (t in e) n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
            return n.push(("v=" + Math.random()).replace(".", "")), n.join("&")
        };
        e.exports = function (e) {

            (e = e || {}).type = (e.type || "GET").toUpperCase(), e.dataType = e.dataType || "json";
            console.log('e', e);
            var t = i(e.data),
                n = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
            console.log('t', t);
            console.log(e.url);
            n.onreadystatechange = function () {
                var t;
                4 === n.readyState && (200 <= (t = n.status) && t < 300 ? e.success && e.success(n.responseText, n.responseXML) : e.fail && e.fail(t))
            }, "GET" == e.type ? (n.open("GET", e.url + "?" + t, !0), n.send(null)) : "POST" == e.type && (n.open("POST", e.url, !0), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n.send(t))
            console.log(t.pathname);
            console.log(("GET", e.url + "?" + t, !0));
        }
    }, function (e, t, n) {
        "use strict";
        var i;
        (i = n(6)) && i.__esModule;
        e.exports = function (e, t) {
            e.TEXT = filterXSS(e.TEXT, {
                onIgnoreTagAttr: function (e, t, n, i) {
                    if ("class" === t || "style" === t || "data-src" === t) return "".concat(t, '="').concat(filterXSS.escapeAttrValue(n), '"')
                },
                onTag: function (e, t, n) {
                    if ("input" === e && (t.match(/<input disabled="" type="checkbox">/) || t.match(/<input checked="" disabled="" type="checkbox">/))) return t
                }
            }), t(e)
        }
    }, function (e, t, n) {
        "use strict";
        var i = function (e) {
            var t = a(e.getDate(), 2),
                n = a(e.getMonth() + 1, 2);
            e = a(e.getFullYear(), 2);
            return "".concat(e, "-").concat(n, "-").concat(t)
        },
            a = function (e, t) {
                for (var n = e.toString(); n.length < t;) n = "0".concat(n);
                return n
            };
        e.exports = function (e, t) {
            try {
                var n = e.getTime(),
                    a = (new Date).getTime() - n;
                return 0 !== (n = Math.floor(a / 864e5)) ? n < 0 ? t.now : n < 365 ? "".concat(n, " ").concat(t.days) : i(e) : (n = a % 864e5, 0 !== (a = Math.floor(n / 36e5)) ? "".concat(a, " ").concat(t.hours) : (a = n % 36e5, 0 !== (n = Math.floor(a / 6e4)) ? "".concat(n, " ").concat(t.minutes) : (a %= 6e4, 0 === (a = Math.round(a / 1e3)) ? t.now : "".concat(a, " ").concat(t.seconds))))
            } catch (e) {
                console.log(e)
            }
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            var t = document.createElement("script");
            t.type = "text/javascript", t.src = e;
            try {
                document.getElementsByTagName("head")[0].appendChild(t)
            } catch (e) { }
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e, t, n) {
            if (n) t();
            else {
                var i = document.createElement("script");
                i.onload = i.onreadystatechange = function (e, n) {
                    !n && i.readyState && !/loaded|complete/.test(i.readyState) || (i.onload = i.onreadystatechange = null, i = void 0, !n && t && setTimeout(t, 0))
                }, i.src = e;
                try {
                    document.getElementsByTagName("head")[0].appendChild(i)
                } catch (e) {
                    console.log(e)
                }
            }
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e, t) {
            var n, i, a;
            document.selection ? (e.focus(), document.selection.createRange().text = t, e.focus()) : e.selectionStart || "0" == e.selectionStart ? (n = e.selectionStart, i = e.selectionEnd, a = e.scrollTop, e.value = e.value.substring(0, n) + t + e.value.substring(i, e.value.length), e.focus(), e.selectionStart = n + t.length, e.selectionEnd = n + t.length, e.scrollTop = a) : (e.focus(), e.value += t)
        }
    }, function (e, t, n) {
        "use strict";
        n(1);
        e.exports = function (e) {
            var t = localStorage && localStorage.getItem("_ValineCache");
            if (t) {
                t = JSON.parse(t);
                for (var n = ["nick", "link", "mail"], i = 0; i < n.length; i++) {
                    var a = n[i];
                    e.el.querySelector(".v".concat(a)).value = t[a], e.C[a] = t[a]
                }
            }
        }
    }, function (e, t, n) {
        "use strict";
        var i, a = (i = n(39)) && i.__esModule ? i : {
            default: i
        };
        e.exports = function (e, t, n) {
            var i = e.C.comment.match(/!\(:(.*?\.\w+):\)/g);
            if (i)
                for (var r = 0; r < i.length; r++) {
                    var o = i[r].match(/!\(:(.*?\.\w+):\)/)[1],
                        s = e.emoticon[o],
                        c = new RegExp("!\\(:" + o.replace(/\./, "\\.") + ":\\)", "g");
                    e.C.comment = e.C.comment.replace(c, '<img src="'.concat(s, '" alt="').concat(o, '" class="emoji">'))
                }
            t.TEXT = e.C.comment, (0, a.default)(e, t, n)
        }
    }, function (e, t, n) {
        "use strict";
        var i, a = (i = n(11)) && i.__esModule ? i : {
            default: i
        },
            r = n(1),
            o = function (e) {
                return window.MV || (window.MV = {}, window.MV.v = r.VERSION), new a.default(e)
            };
        e.exports = o, e.exports.default = o
    }, function (e, t, n) {
        "use strict";
        var i = r(n(12)),
            a = r(n(21));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var o = function (e) {
            var t = this;
            try {
                t.config = e, a.default.Config(t), a.default.ActivateCode(t), a.default.i18n(t), a.default.script(t)
            } catch (e) { }
        };
        o.prototype.initCheck = function () {
            var e = this;
            try {
                var t = setInterval((function () {
                    void 0 !== e.i18n && (clearInterval(t), a.default.setAV(e), a.default.widgets(e), a.default.visitor(e), document.querySelectorAll(e.config.el)[0] && (e.ele = i.default.ele(e), a.default.script(e, 1)))
                }), 5)
            } catch (e) { }
        }, o.prototype.initBody = function () {
            var e = this;
            try {
                i.default.el(e), i.default.loading(e), e.nodata.show(), i.default.smiles(e)
            } catch (e) {
                return
            }
            try {
                a.default.cloudFlag(e), e.loading.hide(e.parentCount), e.loading.show(), a.default.initCount(e), a.default.insertComment(e, i.default), a.default.parentQuery(e), a.default.nestQuery(e), a.default.alert(e), a.default.inputs(e), a.default.previewEvt(e), a.default.smileEvt(e), a.default.getCache(e), a.default.resetForm(e), a.default.uploadImage(e), a.default.cancelReply(e), a.default.smileBtnEvt(e), a.default.previewBtnEvt(e), a.default.atEvt(e), a.default.submitBtnEvt(e), a.default.smile(e)
            } catch (e) { }
        }, e.exports = o
    }, function (e, t, n) {
        "use strict";
        var i = s(n(13)),
            a = s(n(14)),
            r = s(n(15)),
            o = s(n(16));
        n = s(n(19));

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = {
            item: i.default,
            loading: a.default,
            smiles: r.default,
            el: o.default,
            ele: n.default
        }
    }, function (e, t, n) {
        "use strict";
        var i, a = n(1),
            r = (i = n(4)) && i.__esModule ? i : {
                default: i
            };
        e.exports = function (e, t) {
            t.set("nick", t.get("nick").slice(0, 20).trim().replace(/&/g, "&amp;").replace(/\//g, "&#x2F").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;"));
            var n, i = t.get("mailMd5"),
                o = (i = "".concat(a.GBUrl + i, "?size=80&d=").concat(-1 < ["mp", "identicon", "monsterid", "wavatar", "robohash", "retro", ""].indexOf(e.avatar) ? e.avatar : "mp"), t.get("ua") || ""),
                s = "";
            if (o && !e.config.closeUA) {
                o = UAParser(o);
                try {
                    o.browser && o.browser.name ? (s += '<span class="system"><i class="ic i-', n = o.browser.name.toLowerCase(), ["samsung browser"].includes(n) ? s += "mobile-alt" : ["android browser"].includes(n) ? s += "android" : ["mobile safari", "safari"].includes(n) ? s += "safari" : ["ie", "iemobile"].includes(n) ? s += "internet-explorer" : ["wechat"].includes(n) ? s += "weixin" : ["qqbrowser", "qqbrowserlite", "qq"].includes(n) ? s += "qq" : ["baiduboxapp", "baidu"].includes(n) ? s += "paw" : ["chrome", "chromium", "chrome headless", "chrome webview"].includes(n) ? s += "chrome" : ["opera mobi", "opera", "opera coast", "opera mini", "opera tablet"].includes(n) ? s += "opera" : ["firefox", "edge"].includes(n) ? s += n : s += "snapchat-ghost", s += '"></i><span>' + o.browser.name + " " + (o.browser.version ? o.browser.version : "") + "</span></span> ") : s += '<span class="system"><i class="ic i-stars"></i><span>Magical APP</span></span>', o.os && o.os.name ? (s += '<span class="system"><i class="ic i-', n = o.os.name.toLowerCase(), ["mac os", "ios"].includes(n) ? s += "apple" : ["chromium os"].includes(n) ? s += "chrome" : ["firefox os"].includes(n) ? s += "firefox" : ["windows phone", "windows"].includes(n) ? s += "windows" : ["android", "linux", "ubuntu", "suse", "redhat", "fedora", "centos", "blackberry"].includes(n) ? s += n : s += "snapchat-ghost", s += '"></i><span>' + o.os.name + " " + (o.os.version ? o.os.version : "") + "</span></span>") : s += '<span class="system"><i class="ic i-magic"></i><span>Magical OS</span></span>'
                } catch (e) { }
            }
            var c = "";
            if (!e.config.closeFlag && !e.config.cloudflag) try {
                for (var l in e.tagMeta.visitor && (c = '<span class="tag visitor">' + e.tagMeta.visitor + "</span>"), e.tagMember) {
                    var u = e.tagMember[l].map((function (e) {
                        return e.toLowerCase()
                    }));
                    u.includes(t.get("mailMd5").toLowerCase()) && e.tagMeta[l] && (c = '<span class="tag ' + l + '">' + e.tagMeta[l] + "</span>")
                }
            } catch (e) { }
            if (!e.config.closeFlag && e.config.cloudflag) try {
                var d = e.cloudFlag.Roles,
                    f = t.get("mailMd5").toLowerCase();
                c = (f = e.cloudFlag.Users[f]) ? '<span class="tag" style="background:' + "".concat(e.cloudFlag.Roles[f] && e.cloudFlag.Roles[f].color ? e.cloudFlag.Roles[f].color : "#6cf") + ';">' + "".concat(e.cloudFlag.Roles[f] && e.cloudFlag.Roles[f].nick ? e.cloudFlag.Roles[f].nick : "visitor") + "</span>" : '<span class="tag" style="background:' + "".concat(d.visitor && d.visitor.color ? d.visitor.color : "#828282") + ';">' + "".concat(d.visitor && d.visitor.nick ? d.visitor.nick : "visitor") + "</span>"
            } catch (e) { }
            return '<img class="avatar" data-src="'.concat(i, '"/>') + '<div class="main"><div class="head" >' + "".concat(t.get("link") ? '<a class="name" href="'.concat(t.get("link"), '" target="_blank" rel="nofollow" >').concat(t.get("nick"), "</a>") : '<span class="name">'.concat(t.get("nick"), "</span>")) + "".concat(c).concat(s, "</div>") + '<div class="meta">' + "<a".concat(t.get("rid") ? ' rid="'.concat(t.get("rid"), '"') : ' rid="'.concat(t.id, '"'), " at='@").concat(t.get("nick"), '\' class="at" id="at-').concat(t.id, '">').concat(e.i18n.reply, "</a>") + '<span class="time">'.concat((0, r.default)(t.get("createdAt"), e.i18n), "</span>") + "</div>" + '<section class="content" id="comment-'.concat(t.id, '">') + '<div class="inner md">'.concat(t.get("comment"), "</div>") + '</section><div class="children">' + '<ul class="list" id="children-'.concat(t.id, '"></ul>') + "</div></div>"
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            var t = e.el.querySelector(".empty");
            e.nodata = {
                show: function (n) {
                    t.innerHTML = n || e.i18n.noCommentYet, t.setAttribute("style", "display:block;")
                },
                hide: function () {
                    t.setAttribute("style", "display:none;")
                }
            };
            var n = '<div class="spinner"><div class="r1"></div><div class="r2"></div><div class="r3"></div><div class="r4"></div><div class="r5"></div></div>',
                i = e.el.querySelector(".loading");
            i.innerHTML = n, e.loading = {
                show: function () {
                    i.setAttribute("style", "display:block;"), e.nodata.hide()
                },
                hide: function (t) {
                    i.setAttribute("style", "display:none;"), 0 === t && e.nodata.show()
                }
            };
            var a = e.el.querySelector(".submitting");
            a.innerHTML = n, e.submitting = {
                show: function () {
                    a.setAttribute("style", "display:block;")
                },
                hide: function () {
                    a.setAttribute("style", "display:none;"), e.nodata.hide()
                }
            }
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            var t = setInterval((function () {
                if (clearInterval(t), void 0 !== window.MV.emoticonList && 0 != window.MV.emoticonList.length) {
                    for (var n = e.el.querySelector(".smile-icons ul"), i = e.el.querySelector(".smile-bar ul"), a = window.MV.emoticonList || [], r = 0; r < a.length; r++) {
                        for (var o = document.createElement("li"), s = document.createElement("li"), c = 0; c < a[r].length; c++) {
                            var l = document.createElement("img");
                            l.setAttribute("data-src", "".concat(a[r][c]));
                            try {
                                o.appendChild(l)
                            } catch (e) { }
                            if (0 === c) {
                                (l = document.createElement("img")).setAttribute("data-src", "".concat(a[r][0]));
                                try {
                                    s.appendChild(l)
                                } catch (e) { }
                            }
                        }
                        try {
                            n.appendChild(o)
                        } catch (e) { }
                        try {
                            i.appendChild(s)
                        } catch (e) { }
                    }
                    e.config.lazyload && e.config.lazyload.observe();
                    try {
                        e.el.querySelector(".smile-icons > ul > li:nth-child(1)").style.display = "block";
                        for (var u = document.querySelectorAll(".smile-bar > ul > li"), d = document.querySelectorAll(".smile-icons > ul > li"), f = 0; f < u.length; f++) u[f].index = f, u[f].onclick = function () {
                            for (var e = 0; e < u.length; e++) u[e].className = "", d[e].style.display = "none";
                            this.className = "active", d[this.index].style.display = "block"
                        }
                    } catch (e) { }
                }
            }), 10)
        }
    }, function (e, t, n) {
        "use strict";
        var i, a = (i = n(17)) && i.__esModule ? i : {
            default: i
        };
        e.exports = function (e) {
            var t = "[object HTMLDivElement]" === Object.prototype.toString.call(e.config.el) ? e.config.el : document.querySelectorAll(e.config.el)[0];
            "[object HTMLDivElement]" === Object.prototype.toString.call(t) && (e.el = t, e.el.classList.add("v"), e.el.innerHTML = e.ele, e.powerMode && e.el.addEventListener("input", a.default))
        }
    }, function (e, t, n) {
        "use strict";
        var i = document.createElement("canvas");
        i.width = window.innerWidth, i.height = window.innerHeight, i.style.cssText = "position:fixed;top:0;left:0;pointer-events:none;z-index:999999", window.addEventListener("resize", (function () {
            i.width = window.innerWidth, i.height = window.innerHeight
        })), document.body.appendChild(i);
        var a = i.getContext("2d"),
            r = [],
            o = 0,
            s = !1;

        function c(e, t) {
            return Math.random() * (t - e) + e
        }

        function l() {
            var e = c(0, 360);
            return "hsla(" + c(e - 10, e + 10) + ", 100%, " + c(50, 80) + "%, 1)"
        }

        function u() {
            s = !0, a.clearRect(0, 0, i.width, i.height);
            for (var e = !1, t = i.getBoundingClientRect(), n = 0; n < r.length; ++n) {
                var o = r[n];
                o.alpha <= .1 || (o.velocity.y += .075, o.x += o.velocity.x, o.y += o.velocity.y, o.alpha *= .96, a.globalAlpha = o.alpha, a.fillStyle = o.color, a.fillRect(Math.round(o.x - 1.5) - t.left, Math.round(o.y - 1.5) - t.top, 3, 3), e = !0)
            }
            e ? requestAnimationFrame(u) : s = !1
        }
        e.exports = function () {
            for (var e = function () {
                var e = document.activeElement;
                if ("TEXTAREA" === e.tagName || "INPUT" === e.tagName && ("text" === e.getAttribute("type") || "email" === e.getAttribute("type"))) {
                    var t = n(18)(e, e.selectionEnd),
                        i = e.getBoundingClientRect();
                    return {
                        x: t.left + i.left,
                        y: t.top + i.top,
                        color: l()
                    }
                }
                return (e = window.getSelection()).rangeCount ? (t = e.getRangeAt(0), (e = t.startContainer).nodeType === document.TEXT_NODE && (e = e.parentNode), {
                    x: (i = t.getBoundingClientRect()).left,
                    y: i.top,
                    color: l()
                }) : {
                        x: 0,
                        y: 0,
                        color: "transparent"
                    }
            }(), t = 5 + Math.round(10 * Math.random()); t--;) r[o] = {
                x: e.x,
                y: e.y,
                alpha: 1,
                color: e.color,
                velocity: {
                    x: 2 * Math.random() - 1,
                    y: 2 * Math.random() - 3.5
                }
            }, o = (o + 1) % 500;
            s || requestAnimationFrame(u)
        }
    }, function (e, t, n) {
        "use strict";

        function i(e, t, n) {
            var i = n && n.debug || !1;
            !i || (c = document.querySelector("#input-textarea-caret-position-mirror-div")) && c.parentNode.removeChild(c), (n = document.createElement("div")).id = "input-textarea-caret-position-mirror-div", document.body.appendChild(n);
            var o = n.style,
                s = window.getComputedStyle ? getComputedStyle(e) : e.currentStyle;
            o.whiteSpace = "pre-wrap", "INPUT" !== e.nodeName && (o.wordWrap = "break-word"), o.position = "absolute", i || (o.visibility = "hidden"), a.forEach((function (e) {
                o[e] = s[e]
            })), r ? e.scrollHeight > parseInt(s.height) && (o.overflowY = "scroll") : o.overflow = "hidden", n.textContent = e.value.substring(0, t), "INPUT" === e.nodeName && (n.textContent = n.textContent.replace(/\s/g, " "));
            var c = document.createElement("span");
            return c.textContent = e.value.substring(t) || ".", n.appendChild(c), t = {
                top: c.offsetTop + parseInt(s.borderTopWidth),
                left: c.offsetLeft + parseInt(s.borderLeftWidth)
            }, i ? c.style.backgroundColor = "#aaa" : document.body.removeChild(n), t
        }
        var a, r;
        a = ["direction", "boxSizing", "width", "height", "overflowX", "overflowY", "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth", "borderStyle", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "fontStyle", "fontVariant", "fontWeight", "fontStretch", "fontSize", "fontSizeAdjust", "lineHeight", "fontFamily", "textAlign", "textTransform", "textIndent", "textDecoration", "letterSpacing", "wordSpacing", "tabSize", "MozTabSize"], r = null != window.mozInnerScreenX, void 0 !== e.exports ? e.exports = i : window.getCaretCoordinates = i
    }, function (e, t, n) {
        "use strict";
        var i, a = (i = n(20)) && i.__esModule ? i : {
            default: i
        };
        e.exports = function (e) {
            return '<div id="input"><div class="form">' + '<div class="btn cancel-reply" style="display:none" title="'.concat(e.i18n.cancelReply, '" >') + '<i class="ic i-times"></i></div><div class="inner"><section class="auth-section">' + '<div class="input"><input type="text" name="author" class="vnick" placeholder="'.concat(e.i18n.nick, '" value=""></div>') + '<div class="input"><input type="email" name="email" class="vmail" placeholder="'.concat(e.i18n.mail, '" value=""></div>') + '<div class="input"><input type="text" name="website" class="vlink" placeholder="'.concat(e.i18n.link, '" value=""></div>') + '</section><div class="textarea">' + '<textarea placeholder="'.concat(e.placeholder, '" class="veditor"></textarea>') + '<div class="btn-group"><div class="left"><a alt="Markdown is supported" href="https://guides.github.com/features/mastering-markdown/" class="btn" target="_blank">' + '<i class="ic i-markdown"></i></a></div><div class="right"><div class="emojis btn" title="'.concat(e.i18n.emoji, '">') + '<i class="ic i-smile"></i></div>' + '<div class="preview btn" title="'.concat(e.i18n.preview, '">') + '<i class="ic i-preview"></i></div>' + '<button type="button" title="Cmd|Ctrl+Enter" class="vsubmit button">'.concat(e.i18n.submit, "</button>") + '</div></div><div class="vextra-area"><div class="smile-body" style="display:none"><div class="smile-icons"><ul></ul></div><div class="smile-bar"><ul></ul></div></div></div><div class="preview-box md" style="display:none"></div></div><div style="display:none;" class="msg"></div></div><div class="submitting" style="display:none;"></div></div></div><div class="info">' + '<div class="col"> '.concat((0, a.default)(e.i18n.commentCount, '<span class="count">0</span>'), "</div>") + '</div><ul class="list"><li class="empty"></li></ul><div class="loading"></div><div class="next text-center"></div>'
        }
    }, function (e, t, n) {
        (function (t) {
            "use strict";

            function n(e) {
                return (e = new Error(e)).name = "ValueError", e
            }

            function i(e) {
                return function (t) {
                    var i = Array.prototype.slice.call(arguments, 1),
                        a = 0,
                        r = "UNDEFINED";
                    return t.replace(/([{}])\1|[{](.*?)(?:!(.+?))?[}]/g, (function (t, o, s, c) {
                        if (null != o) return o;
                        if (0 < s.length) {
                            if ("IMPLICIT" === r) throw n("cannot switch from implicit to explicit numbering");
                            r = "EXPLICIT"
                        } else {
                            if ("EXPLICIT" === r) throw n("cannot switch from explicit to implicit numbering");
                            r = "IMPLICIT", s = String(a), a += 1
                        }
                        if (s = s.split("."), s = (/^\d+$/.test(s[0]) ? s : ["0"].concat(s)).reduce((function (e, t) {
                            return e.reduce((function (e, n) {
                                return null != n && t in Object(n) ? ["function" == typeof n[t] ? n[t]() : n[t]] : []
                            }), [])
                        }), [i]).reduce((function (e, t) {
                            return t
                        }), ""), null == c) return s;
                        if (Object.prototype.hasOwnProperty.call(e, c)) return e[c](s);
                        throw n('no transformer named "' + c + '"')
                    }))
                }
            }
            var a = i({});
            a.create = i, a.extend = function (e, n) {
                var a = i(n);
                e.format = function () {
                    var e = Array.prototype.slice.call(arguments);
                    return e.unshift(this), a.apply(t, e)
                }
            }, e.exports = a
        }).call(this, this)
    }, function (e, t, n) {
        "use strict";
        var i = N(n(22)),
            a = N(n(23)),
            r = N(n(24)),
            o = N(n(25)),
            s = N(n(26)),
            c = N(n(28)),
            l = N(n(29)),
            u = N(n(8)),
            d = N(n(30)),
            f = N(n(31)),
            g = N(n(32)),
            p = N(n(33)),
            m = N(n(34)),
            v = N(n(35)),
            h = N(n(36)),
            b = N(n(37)),
            y = N(n(38)),
            w = N(n(53)),
            _ = N(n(54)),
            E = N(n(55)),
            M = N(n(56)),
            x = N(n(59)),
            S = N(n(60)),
            C = N(n(61));
        n = N(n(62));

        function N(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = {
            Config: i.default,
            i18n: a.default,
            setAV: r.default,
            smile: o.default,
            script: s.default,
            uploadImage: c.default,
            alert: l.default,
            initCount: d.default,
            smileEvt: f.default,
            resetForm: g.default,
            cancelReply: p.default,
            smileBtnEvt: m.default,
            previewBtnEvt: v.default,
            inputs: h.default,
            atEvt: b.default,
            submitBtnEvt: y.default,
            insertComment: w.default,
            nestQuery: _.default,
            parentQuery: E.default,
            ActivateCode: M.default,
            previewEvt: x.default,
            visitor: S.default,
            cloudFlag: C.default,
            getCache: u.default,
            widgets: n.default
        }
    }, function (e, t, n) {
        "use strict";
        var i = n(1);
        e.exports = function (e) {
            e.emoticonUrl = e.config.emoticonUrl || i.EUrl, e.lang = e.config.lang || navigator.language || navigator.userLanguage, e.pageSize = e.config.pageSize || i.PS, e.adminEmailMd5 = e.config.adminEmailMd5 || "", e.math = e.config.math || !0, e.md = e.config.md || !0, e.powerMode = e.config.powerMode || !0, e.avatar = e.config.avatar || "mp", e.visitor = e.config.visitor, e.tagMeta = e.config.tagMeta || [], e.tagMember = e.config.tagMember || [], e.tagColor = e.config.tagColor || [], e.placeholder = e.config.placeholder || "", e.C = i.C, e.C.url = e.config.pathname || location.pathname || "/", e.role = e.config.role ? e.config.role : "admin"
        }
    }, function (module, exports, __webpack_require__) {
        "use strict";
        var _Default = __webpack_require__(1),
            _ajax = __webpack_require__(2),
            _ajax2 = _interopRequireDefault(_ajax);

        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i18n = function i18n(root) {
            var s;
            window.MV.i18n ? (root.i18n = window.MV.i18n, window.MV.getI18n = 0) : (s = localStorage && localStorage.getItem("_ValineI18n"), s ? (s = JSON.parse(s), s.lang == root.lang ? (root.i18n = s.i18n, window.MV.i18n = root.i18n, window.MV.getI18n = 0) : window.MV.getI18n = 1) : window.MV.getI18n = 1, window.MV.getI18n && (0, _ajax2.default)({
                url: _Default.i18nUrl + root.lang + "/index.json",
                type: "GET",
                success: function success(data) {
                    data = eval("(" + data + ")"), root.i18n = data, window.MV.i18n = root.i18n, localStorage && localStorage.setItem("_ValineI18n", JSON.stringify({
                        lang: root.lang,
                        i18n: root.i18n
                    }))
                }
            }))
        };
        module.exports = i18n
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            var t, n = "https://";
            if (!e.config.serverURLs) switch (e.config.appId.slice(-9)) {
                case "-9Nh9j0Va":
                    n += "tab.leancloud.cn";
                    break;
                case "-MdYXbMMI":
                    n += "console.leancloud.app";
                    break;
                default:
                    n += "avoscloud.com"
            }
            t = e.config.serverURLs || n;
            try {
                window.MV.AVInit || AV.init({
                    appId: e.config.appId,
                    appKey: e.config.appKey,
                    serverURLs: t
                }), window.MV.AVInit = !0
            } catch (e) { }
            e.v = AV
        }
    }, function (module, exports, __webpack_require__) {
        "use strict";
        var _ajax = __webpack_require__(2),
            _ajax2 = _interopRequireDefault(_ajax);

        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var smile = function (e) {
            if (window.MV.emoticonUrl = e.emoticonUrl, window.MV.emoticonList) e.emoticonList = window.MV.emoticonList, e.emoticon = window.MV.emoticon;
            else {
                var t = localStorage && localStorage.getItem("_ValineSmile");
                if (t)
                    if (equar((t = JSON.parse(t)).emoticonUrl, e.emoticonUrl)) {
                        e.emoticonList = t.emoticonList, e.emoticon = [];
                        for (var n = 0; n < e.emoticonList.length; n++)
                            for (var i = 0; i < e.emoticonList[n].length; i++) e.emoticon[e.emoticonList[n][i].split("/")[e.emoticonList[n][i].split("/").length - 1]] = e.emoticonList[n][i];
                        window.MV.emoticonList = e.emoticonList, window.MV.emoticon = e.emoticon, window.MV.getSmile = 0
                    } else window.MV.getSmile = 1;
                else window.MV.getSmile = 1;
                if (window.MV.getSmile) {
                    e.emoticonList = [], e.emoticon = [];
                    for (var a = 0; a < e.emoticonUrl.length; a++) getSmile(e, e.emoticonUrl[a]);
                    window.MV.emoticonList = e.emoticonList, window.MV.emoticon = e.emoticon
                } else e.emoticonList = window.MV.emoticonList, e.emoticon = window.MV.emoticon;
                setTimeout((function () {
                    localStorage && localStorage.setItem("_ValineSmile", JSON.stringify({
                        emoticonUrl: window.MV.emoticonUrl,
                        emoticonList: window.MV.emoticonList
                    }))
                }), 5e3)
            }
        },
            getSmile = function getSmile(root, Url) {
                (0, _ajax2.default)({
                    url: Url + "/index.json",
                    type: "GET",
                    success: function success(data) {
                        data = eval("(" + data + ")");
                        for (var tmp = [], i = 0; i < data[0].length; i++) tmp.push(Url + "/" + data[0][i]), root.emoticon[data[0][i]] = Url + "/" + data[0][i];
                        root.emoticonList.push(tmp)
                    }
                })
            };

        function equar(e, t) {
            if (e.length === t.length) {
                for (var n = 0; n < e.length; n++)
                    if (e[n] !== t[n]) return;
                return 1
            }
        }
        module.exports = smile
    }, function (e, t, n) {
        "use strict";
        n(1), r(n(5));
        var i = r(n(6)),
            a = r(n(27));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = function (e) {
            var t;
            1 < arguments.length && void 0 !== arguments[1] && arguments[1] ? (t = [], window.autosize || t.push("npm/autosize@4.0.2/dist/autosize.min.js"), window.filterXSS || t.push("npm/xss@1.0.8/dist/xss.min.js"), e.config.closeUA || window.UAParser || t.push("npm/ua-parser-js@0.7.22/src/ua-parser.min.js"), !e.math && void 0 !== e.config.math || "undefined" != typeof MathJax || t.push("npm/mathjax@3/es5/tex-svg.js"), !e.md && void 0 !== e.config.md || window.marked || t.push("npm/marked@1.2.0/lib/marked.min.js"), (0, i.default)("https://cdn.jsdelivr.net/combine/" + t.join(","), (function () {
                e.initBody(), window.MV.scriptEle = !0
            }), 1 == window.MV.scriptEle || 0 == t.length)) : (e.config.NoRecordIP || (void 0 === window.MV.ip ? (0, a.default)(e) : e.C.ip = window.MV.ip), t = [], window.md5 || t.push("npm/blueimp-md5@2.18.0/js/md5.min.js"), window.AV || t.push("npm/leancloud-storage@4/dist/av-min.js"), (0, i.default)("https://cdn.jsdelivr.net/combine/" + t.join(","), (function () {
                e.initCheck(), window.MV.scriptInit = !0
            }), 1 == window.MV.scriptInit || 0 == t.length))
        }
    }, function (module, exports, __webpack_require__) {
        "use strict";
        var _ajax = __webpack_require__(2),
            _ajax2 = _interopRequireDefault(_ajax);

        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var GetIP = function GetIP(root) {
            try {
                (0, _ajax2.default)({
                    url: "https://ip.zxinc.org/api.php",
                    type: "GET",
                    data: {
                        type: "json"
                    },
                    success: function success(data) {
                        data = eval("(" + data + ")"), window.MV.fuck = 1, window.MV.region = data, root.C.ip = data.data.myip, window.MV.ip = root.C.ip
                    }
                })
            } catch (e) { }
        };
        module.exports = GetIP
    }, function (e, t, n) {
        "use strict";
        var i = r(n(0)),
            a = r(n(7));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = function (e) {
            var t = e.el.querySelector(".veditor");
            i.default.on("keydown", document, (function (n) {
                var i = (n = event || n).keyCode || n.which || n.charCode;
                (n.ctrlKey || n.metaKey) && 13 === i && e.submitEvt(), 9 === i && "veditor" == (document.activeElement.className || "") && (n.preventDefault(), (0, a.default)(t, "    "))
            }));
            var n = function (n) {
                if (n.length)
                    for (var i = function () {
                        var i = n[o],
                            s = "![Uploading ".concat(i.name, "]()");
                        (0, a.default)(t, s), r(i, (function (n, a) {
                            !n && a && (t.value = t.value.replace(s, "\r\n![".concat(i.name, "](").concat(a.data.url, ")")), e.C.comment = t.value)
                        }))
                    }, o = 0; o < n.length; o++) i()
            };
            i.default.on("paste", document, (function (e) {
                var t = (e = "clipboardData" in e ? e.clipboardData : e.originalEvent && e.originalEvent.clipboardData || window.clipboardData) && e.items,
                    i = [];
                if (t && 0 < t.length) {
                    for (var a = 0; a < t.length; a++)
                        if (-1 !== t[a].type.indexOf("image")) {
                            i.push(t[a].getAsFile());
                            break
                        } n(i)
                }
            }));
            var r = function (e, t) {
                var n = new FormData;
                n.append("image", e);
                var i = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                i.onreadystatechange = function () {
                    if (4 === i.readyState && 200 === i.status) try {
                        var e = JSON.parse(i.responseText);
                        t && t(null, e)
                    } catch (e) {
                        t && t(e)
                    } else t && t(i.status)
                }, i.onerror = function (e) {
                    console.log(e)
                }, i.open("POST", "https://pic.alexhchu.com/api/upload", !0), i.send(n)
            },
                o = document.getElementsByClassName("veditor")[0];
            o.addEventListener("dragover", (function (e) {
                e.preventDefault(), e.stopPropagation()
            })), o.addEventListener("dragenter", (function (e) {
                e.preventDefault(), e.stopPropagation()
            })), o.addEventListener("drop", (function (e) {
                e.preventDefault(), e.stopPropagation(), e = this.files || e.dataTransfer.files, n(e)
            }))
        }
    }, function (e, t, n) {
        "use strict";
        var i, a = (i = n(0)) && i.__esModule ? i : {
            default: i
        };
        e.exports = function (e) {
            var t = e.el.querySelector(".msg");
            e.alert = {
                show: function (n) {
                    t.innerHTML = '<div class="alert text-center"><div class="text">'.concat(n.text, '</div><div class="btns"></div></div>');
                    var i = t.querySelector(".btns"),
                        r = '<button class="cancel button">'.concat(n.ctxt || e.i18n.cancel, "</button>"),
                        o = n.type ? '<button class="sure button">'.concat(n.otxt || e.i18n.continue, "</button>") : "";
                    i.innerHTML = "".concat(r).concat(o), t.querySelector(".cancel").addEventListener("click", (function (t) {
                        e.alert.hide()
                    })), t.setAttribute("style", "display:block;"), n.type && (o = t.querySelector(".sure"), a.default.on("click", o, (function (t) {
                        e.alert.hide(), n.cb && n.cb()
                    })))
                },
                hide: function () {
                    t.setAttribute("style", "display:none;")
                }
            }
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            var t = new e.v.Query("Comment");
            t.doesNotExist("rid");
            var n = new e.v.Query("Comment");
            n.equalTo("rid", ""), (n = AV.Query.or(t, n)).notEqualTo("isSpam", !0), n.equalTo("url", e.C.url), n.count().then((function (t) {
                e.el.querySelector(".count").innerHTML = t, e.parentCount = t, e.parentQuery(1)
            })).catch((function (t) {
                console.log(t), e.el.querySelector(".count").innerHTML = 0
            }))
        }
    }, function (e, t, n) {
        "use strict";
        var i = r(n(0)),
            a = r(n(7));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = function (e) {
            var t = e.el.querySelector(".smile-icons");
            i.default.on("click", t, (function (t) {
                var n = e.el.querySelector(".veditor");
                void 0 !== (t = t.target.src) && (t = "!(:".concat(decodeURI(t).replace(/^.*\/(.*)$/, "$1"), ":)"), (0, a.default)(n, t), e.C.comment = n.value, (n = e.el.querySelector(".vsubmit")).getAttribute("disabled") && n.removeAttribute("disabled"))
            }))
        }
    }, function (e, t, n) {
        "use strict";
        var i, a = (i = n(8)) && i.__esModule ? i : {
            default: i
        };
        e.exports = function (e) {
            var t = e.el.querySelector(".smile-icons"),
                n = e.el.querySelector(".preview-box");
            e.reset = function () {
                for (var i in e.mapping) {
                    var r;
                    e.mapping.hasOwnProperty(i) && (r = e.mapping[i], e.el.querySelector(".".concat(i)).value = "", e.C[r] = "")
                }
                e.C.rid = "", e.C.nick = "", e.C.at = "", (e.el.querySelector(".form textarea").placeholder = "", a.default)(e), e.previewEvt(e), t.getAttribute("triggered") && (t.setAttribute("style", "display:none;"), t.removeAttribute("triggered")), n.getAttribute("triggered") && (n.setAttribute("style", "display:none;"), n.removeAttribute("triggered")), e.el.querySelector(".cancel-reply").setAttribute("style", "display:none");
                try {
                    e.el.querySelector("#input").appendChild(e.el.querySelector(".form"))
                } catch (e) { }
            }
        }
    }, function (e, t, n) {
        "use strict";
        var i, a = (i = n(0)) && i.__esModule ? i : {
            default: i
        };
        e.exports = function (e) {
            a.default.on("click", e.el.querySelector(".cancel-reply"), (function (t) {
                e.reset()
            }))
        }
    }, function (e, t, n) {
        "use strict";
        var i, a = (i = n(0)) && i.__esModule ? i : {
            default: i
        };
        e.exports = function (e) {
            var t = e.el.querySelector(".emojis"),
                n = e.el.querySelector(".preview"),
                i = e.el.querySelector(".preview-box"),
                r = e.el.querySelector(".smile-body");
            a.default.on("click", t, (function (e) {
                i.getAttribute("triggered") && (i.setAttribute("style", "display:none;"), i.removeAttribute("triggered"), n.classList.remove("actived")), r.getAttribute("triggered") ? (r.setAttribute("style", "display:none;"), r.removeAttribute("triggered"), t.classList.remove("actived")) : (r.removeAttribute("style"), r.setAttribute("triggered", 1), t.classList.add("actived"))
            }))
        }
    }, function (e, t, n) {
        "use strict";
        var i, a = (i = n(0)) && i.__esModule ? i : {
            default: i
        };
        e.exports = function (e) {
            var t = e.el.querySelector(".preview"),
                n = e.el.querySelector(".emoji"),
                i = e.el.querySelector(".preview-box"),
                r = e.el.querySelector(".smile-icons");
            a.default.on("click", t, (function (a) {
                if (r.getAttribute("triggered") && (r.setAttribute("style", "display:none;"), r.removeAttribute("triggered"), n.classList.remove("actived")), i.getAttribute("triggered")) i.setAttribute("style", "display:none;"), i.removeAttribute("triggered"), t.classList.remove("actived");
                else {
                    if (t.classList.add("actived"), "" === e.C.comment) return void e.inputs.comment.focus();
                    e.previewEvt(e)
                }
            }))
        }
    }, function (e, t, n) {
        "use strict";
        var i, a = (i = n(0)) && i.__esModule ? i : {
            default: i
        };
        e.exports = function (e) {
            for (var t in e.inputs = {}, e.mapping = {
                veditor: "comment",
                vnick: "nick",
                vlink: "link",
                vmail: "mail"
            }, e.mapping) e.mapping.hasOwnProperty(t) && function () {
                var n = e.mapping[t],
                    i = e.el.querySelector(".".concat(t));
                e.inputs[n] = i, a.default.on("input", i, (function (t) {
                    e.C[n] = i.value, e.previewEvt(e)
                }))
            }()
        }
    }, function (e, t, n) {
        "use strict";
        var i, a = (i = n(0)) && i.__esModule ? i : {
            default: i
        };
        e.exports = function (e) {
            e.AtEvt = function (t) {
                var n = t.getAttribute("id"),
                    i = t.querySelector("#at-".concat(n));
                a.default.on("click", i, (function (a) {
                    var r = i.getAttribute("at"),
                        o = i.getAttribute("rid");
                    e.C.rid = o, e.C.at = r, e.C.pid = i.getAttribute("id").replace("at-", ""), e.el.querySelector(".form textarea").placeholder = r, e.inputs.comment.value = "".concat(e.inputs.comment.value);
                    var s = t.querySelector("#comment-".concat(n));
                    try {
                        s.appendChild(e.el.querySelector(".form"))
                    } catch (a) { }
                    e.el.querySelector(".cancel-reply").removeAttribute("style"), e.inputs.comment.focus()
                }))
            }
        }
    }, function (e, t, n) {
        "use strict";
        var i = o(n(0)),
            a = o(n(9)),
            r = o(n(52));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = function (e) {
            var t = e.el.querySelector(".vsubmit");
            e.submitEvt = function (i) {
                var o;
                t.getAttribute("disabled") ? e.alert.show({
                    type: 0,
                    text: e.i18n.wait + 'ヾ(๑╹◡╹)ﾉ"',
                    ctxt: e.i18n.ok
                }) : "" !== e.C.comment ? "" !== e.C.nick ? (o = function (e) {
                    e.C.comment = e.TEXT, "" !== e.C.at && (i = '<a class="at" href=\'#'.concat(e.C.pid, "'>").concat(e.C.at, "</a>"), new RegExp("^<p>").test(e.C.comment) ? e.C.comment = e.TEXT.replace("<p>", "<p>".concat(i, " , ")) : e.C.comment = i + " , " + e.C.comment);
                    var t = r.default.mail(e.C.mail),
                        i = r.default.link(e.C.link);
                    e.C.mail = t.k ? t.v : "", e.C.link = i.k ? i.v : "", e.C.mailMd5 = md5(e.C.mail), t.k && i.k ? n() : e.alert.show({
                        type: 0,
                        text: e.i18n.inputTips,
                        ctxt: e.i18n.confirm
                    })
                }, (0, a.default)(e, e, o)) : e.inputs.nick.focus() : e.inputs.comment.focus()
            };
            var n = function () {
                t.setAttribute("disabled", !0), e.submitting.show();
                var n, i, a = new (e.v.Object.extend("Comment"));
                for (n in e.C) e.C.hasOwnProperty(n) && "at" !== n && (i = e.C[n], a.set(n, i));
                try {
                    var r = e.C.ip;
                    r && (/^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/.test(r) || /^([\da-fA-F]{1,4}:){7}[\da-fA-F]{1,4}$/.test(r)) && "127.0.0.1" != r || (window.MV.fuck = 0, kill())
                } catch (e) { }
                a.setACL(function () {
                    var t = new e.v.ACL;
                    return t.setWriteAccess("role:" + e.role, !0), t.setPublicReadAccess(!0), t.setPublicWriteAccess(!1), t
                }()), a.save().then((function (n) {
                    localStorage && localStorage.setItem("_ValineCache", JSON.stringify({
                        nick: e.C.nick,
                        link: e.C.link,
                        mail: e.C.mail
                    }));
                    var i = e.el.querySelector(".count");
                    i.innerText = Number(i.innerText) + 1, "" === e.C.rid ? e.insertComment(n, null, !0) : (i = e.el.querySelector("#children-".concat(e.C.rid)), e.insertComment(n, i, !1)), t.removeAttribute("disabled"), e.submitting.hide(), e.nodata.hide(), e.reset()
                })).catch((function (t) {
                    e.submitting.hide()
                }))
            };
            i.default.on("click", t, e.submitEvt)
        }
    }, function (e, t, n) {
        "use strict";
        var i, a = (i = n(3)) && i.__esModule ? i : {
            default: i
        },
            r = n(40);
        e.exports = function (e, t, n) {
            !e.md && void 0 !== e.config.md || (t.TEXT = (0, r.markdown)(t.TEXT)), (0, a.default)(t, n)
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.markdown = function (e) {
            return marked.setOptions({
                gfm: !0,
                tables: !0,
                breaks: !0,
                pedantic: !1,
                sanitize: !1,
                smartLists: !0,
                smartypants: !0,
                highlight: function (e) {
                    return a.default.highlightAuto(e).value
                }
            }), marked(e)
        };
        var i, a = (i = n(41)) && i.__esModule ? i : {
            default: i
        }
    }, function (e, t, n) {
        "use strict";
        var i = n(42);
        i.registerLanguage("css", n(43)), i.registerLanguage("xml", n(44)), i.registerLanguage("json", n(45)), i.registerLanguage("bash", n(46)), i.registerLanguage("shell", n(47)), i.registerLanguage("nginx", n(48)), i.registerLanguage("python", n(49)), i.registerLanguage("javascript", n(50)), i.registerLanguage("java", n(51)), e.exports = i
    }, function (e, t) {
        function n(e) {
            return function (e) {
                if (Array.isArray(e)) return r(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }(e) || a(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function i(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                    var n = [],
                        i = !0,
                        a = !1,
                        r = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); i = !0);
                    } catch (e) {
                        a = !0, r = e
                    } finally {
                        try {
                            i || null == s.return || s.return()
                        } finally {
                            if (a) throw r
                        }
                    }
                    return n
                }
            }(e, t) || a(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function a(e, t) {
            if (e) {
                if ("string" == typeof e) return r(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
            }
        }

        function r(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i
        }

        function o(e, t) {
            return (o = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function s(e) {
            return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function c(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function l(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function u(e, t, n) {
            return t && l(e.prototype, t), n && l(e, n), e
        }

        function d(e) {
            return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var f = function () {
            function e(t) {
                c(this, e), void 0 === t.data && (t.data = {}), this.data = t.data
            }
            return u(e, [{
                key: "ignoreMatch",
                value: function () {
                    this.ignore = !0
                }
            }]), e
        }();

        function g(e) {
            return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
        }

        function p(e) {
            var t, n = {};
            for (t in e) n[t] = e[t];
            for (var i = arguments.length, a = new Array(1 < i ? i - 1 : 0), r = 1; r < i; r++) a[r - 1] = arguments[r];
            return a.forEach((function (e) {
                for (var t in e) n[t] = e[t]
            })), n
        }

        function m(e) {
            return e.nodeName.toLowerCase()
        }
        var v = Object.freeze({
            __proto__: null,
            escapeHTML: g,
            inherit: p,
            nodeStream: function (e) {
                var t = [];
                return function e(n, i) {
                    for (var a = n.firstChild; a; a = a.nextSibling) 3 === a.nodeType ? i += a.nodeValue.length : 1 === a.nodeType && (t.push({
                        event: "start",
                        offset: i,
                        node: a
                    }), i = e(a, i), m(a).match(/br|hr|img|input/) || t.push({
                        event: "stop",
                        offset: i,
                        node: a
                    }));
                    return i
                }(e, 0), t
            },
            mergeStreams: function (e, t, n) {
                var i = 0,
                    a = "",
                    r = [];

                function o() {
                    return e.length && t.length ? e[0].offset !== t[0].offset ? e[0].offset < t[0].offset ? e : t : "start" === t[0].event ? e : t : e.length ? e : t
                }

                function s(e) {
                    a += "<" + m(e) + [].map.call(e.attributes, (function (e) {
                        return " " + e.nodeName + '="' + g(e.value) + '"'
                    })).join("") + ">"
                }

                function c(e) {
                    a += "</" + m(e) + ">"
                }

                function l(e) {
                    ("start" === e.event ? s : c)(e.node)
                }
                for (; e.length || t.length;) {
                    var u = o();
                    if (a += g(n.substring(i, u[0].offset)), i = u[0].offset, u === e) {
                        for (r.reverse().forEach(c); l(u.splice(0, 1)[0]), (u = o()) === e && u.length && u[0].offset === i;);
                        r.reverse().forEach(s)
                    } else "start" === u[0].event ? r.push(u[0].node) : r.pop(), l(u.splice(0, 1)[0])
                }
                return a + g(n.substr(i))
            }
        }),
            h = function (e) {
                return !!e.kind
            },
            b = function () {
                function e(t, n) {
                    c(this, e), this.buffer = "", this.classPrefix = n.classPrefix, t.walk(this)
                }
                return u(e, [{
                    key: "addText",
                    value: function (e) {
                        this.buffer += g(e)
                    }
                }, {
                    key: "openNode",
                    value: function (e) {
                        var t;
                        h(e) && (t = e.kind, e.sublanguage || (t = "".concat(this.classPrefix).concat(t)), this.span(t))
                    }
                }, {
                    key: "closeNode",
                    value: function (e) {
                        h(e) && (this.buffer += "</span>")
                    }
                }, {
                    key: "value",
                    value: function () {
                        return this.buffer
                    }
                }, {
                    key: "span",
                    value: function (e) {
                        this.buffer += '<span class="'.concat(e, '">')
                    }
                }]), e
            }(),
            y = function () {
                function e() {
                    c(this, e), this.rootNode = {
                        children: []
                    }, this.stack = [this.rootNode]
                }
                return u(e, [{
                    key: "add",
                    value: function (e) {
                        this.top.children.push(e)
                    }
                }, {
                    key: "openNode",
                    value: function (e) {
                        e = {
                            kind: e,
                            children: []
                        }, this.add(e), this.stack.push(e)
                    }
                }, {
                    key: "closeNode",
                    value: function () {
                        return 1 < this.stack.length ? this.stack.pop() : void 0
                    }
                }, {
                    key: "closeAllNodes",
                    value: function () {
                        for (; this.closeNode(););
                    }
                }, {
                    key: "toJSON",
                    value: function () {
                        return JSON.stringify(this.rootNode, null, 4)
                    }
                }, {
                    key: "walk",
                    value: function (e) {
                        return this.constructor._walk(e, this.rootNode)
                    }
                }, {
                    key: "top",
                    get: function () {
                        return this.stack[this.stack.length - 1]
                    }
                }, {
                    key: "root",
                    get: function () {
                        return this.rootNode
                    }
                }], [{
                    key: "_walk",
                    value: function (e, t) {
                        var n = this;
                        return "string" == typeof t ? e.addText(t) : t.children && (e.openNode(t), t.children.forEach((function (t) {
                            return n._walk(e, t)
                        })), e.closeNode(t)), e
                    }
                }, {
                    key: "_collapse",
                    value: function (t) {
                        "string" != typeof t && t.children && (t.children.every((function (e) {
                            return "string" == typeof e
                        })) ? t.children = [t.children.join("")] : t.children.forEach((function (t) {
                            e._collapse(t)
                        })))
                    }
                }]), e
            }(),
            w = function () {
                ! function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && o(e, t)
                }(t, y);
                var e = function (e) {
                    var t = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function () { }))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function () {
                        var n, i = s(e);
                        return n = t ? (n = s(this).constructor, Reflect.construct(i, arguments, n)) : i.apply(this, arguments), i = this, !(n = n) || "object" !== d(n) && "function" != typeof n ? function (e) {
                            if (void 0 !== e) return e;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                        }(i) : n
                    }
                }(t);

                function t(n) {
                    var i;
                    return c(this, t), (i = e.call(this)).options = n, i
                }
                return u(t, [{
                    key: "addKeyword",
                    value: function (e, t) {
                        "" !== e && (this.openNode(t), this.addText(e), this.closeNode())
                    }
                }, {
                    key: "addText",
                    value: function (e) {
                        "" !== e && this.add(e)
                    }
                }, {
                    key: "addSublanguage",
                    value: function (e, t) {
                        (e = e.root).kind = t, e.sublanguage = !0, this.add(e)
                    }
                }, {
                    key: "toHTML",
                    value: function () {
                        return new b(this, this.options).value()
                    }
                }, {
                    key: "finalize",
                    value: function () {
                        return !0
                    }
                }]), t
            }();

        function _(e) {
            return e ? "string" == typeof e ? e : e.source : null
        }
        var E = "[a-zA-Z]\\w*",
            M = "[a-zA-Z_]\\w*",
            x = "\\b\\d+(\\.\\d+)?",
            S = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
            C = "\\b(0b[01]+)",
            N = {
                begin: "\\\\[\\s\\S]",
                relevance: 0
            },
            A = {
                className: "string",
                begin: "'",
                end: "'",
                illegal: "\\n",
                contains: [N]
            },
            O = {
                className: "string",
                begin: '"',
                end: '"',
                illegal: "\\n",
                contains: [N]
            },
            k = {
                begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
            },
            T = function (e, t) {
                return (t = p({
                    className: "comment",
                    begin: e,
                    end: t,
                    contains: []
                }, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {})).contains.push(k), t.contains.push({
                    className: "doctag",
                    begin: "(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",
                    relevance: 0
                }), t
            },
            R = T("//", "$"),
            L = T("/\\*", "\\*/"),
            I = T("#", "$"),
            j = {
                className: "number",
                begin: x,
                relevance: 0
            },
            D = {
                className: "number",
                begin: S,
                relevance: 0
            },
            P = {
                className: "number",
                begin: C,
                relevance: 0
            },
            B = {
                className: "number",
                begin: x + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
                relevance: 0
            },
            q = {
                begin: /(?=\/[^/\n]*\/)/,
                contains: [{
                    className: "regexp",
                    begin: /\//,
                    end: /\/[gimuy]*/,
                    illegal: /\n/,
                    contains: [N, {
                        begin: /\[/,
                        end: /\]/,
                        relevance: 0,
                        contains: [N]
                    }]
                }]
            },
            U = {
                className: "title",
                begin: E,
                relevance: 0
            },
            z = {
                className: "title",
                begin: M,
                relevance: 0
            },
            V = {
                begin: "\\.\\s*" + M,
                relevance: 0
            },
            H = Object.freeze({
                __proto__: null,
                IDENT_RE: E,
                UNDERSCORE_IDENT_RE: M,
                NUMBER_RE: x,
                C_NUMBER_RE: S,
                BINARY_NUMBER_RE: C,
                RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
                SHEBANG: function () {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                        t = /^#![ ]*\//;
                    return e.binary && (e.begin = function () {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return t.map(_).join("")
                    }(t, /.*\b/, e.binary, /\b.*/)), p({
                        className: "meta",
                        begin: t,
                        end: /$/,
                        relevance: 0,
                        "on:begin": function (e, t) {
                            0 !== e.index && t.ignoreMatch()
                        }
                    }, e)
                },
                BACKSLASH_ESCAPE: N,
                APOS_STRING_MODE: A,
                QUOTE_STRING_MODE: O,
                PHRASAL_WORDS_MODE: k,
                COMMENT: T,
                C_LINE_COMMENT_MODE: R,
                C_BLOCK_COMMENT_MODE: L,
                HASH_COMMENT_MODE: I,
                NUMBER_MODE: j,
                C_NUMBER_MODE: D,
                BINARY_NUMBER_MODE: P,
                CSS_NUMBER_MODE: B,
                REGEXP_MODE: q,
                TITLE_MODE: U,
                UNDERSCORE_TITLE_MODE: z,
                METHOD_GUARD: V,
                END_SAME_AS_BEGIN: function (e) {
                    return Object.assign(e, {
                        "on:begin": function (e, t) {
                            t.data._beginMatch = e[1]
                        },
                        "on:end": function (e, t) {
                            t.data._beginMatch !== e[1] && t.ignoreMatch()
                        }
                    })
                }
            }),
            F = "of and for in not or if then".split(" ");

        function K(e) {
            function t(t, n) {
                return new RegExp(_(t), "m" + (e.case_insensitive ? "i" : "") + (n ? "g" : ""))
            }
            var a = function () {
                function e() {
                    c(this, e), this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
                }
                return u(e, [{
                    key: "addRule",
                    value: function (e, t) {
                        t.position = this.position++, this.matchIndexes[this.matchAt] = t, this.regexes.push([t, e]), this.matchAt += new RegExp(e.toString() + "|").exec("").length - 1 + 1
                    }
                }, {
                    key: "compile",
                    value: function () {
                        0 === this.regexes.length && (this.exec = function () {
                            return null
                        });
                        var e = this.regexes.map((function (e) {
                            return e[1]
                        }));
                        this.matcherRe = t(function (e, t) {
                            for (var n = 1 < arguments.length && void 0 !== t ? t : "|", i = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./, a = 0, r = "", o = 0; o < e.length; o++) {
                                var s = a += 1,
                                    c = _(e[o]);
                                for (0 < o && (r += n), r += "("; 0 < c.length;) {
                                    var l = i.exec(c);
                                    if (null == l) {
                                        r += c;
                                        break
                                    }
                                    r += c.substring(0, l.index), c = c.substring(l.index + l[0].length), "\\" === l[0][0] && l[1] ? r += "\\" + String(Number(l[1]) + s) : (r += l[0], "(" === l[0] && a++)
                                }
                                r += ")"
                            }
                            return r
                        }(e), !0), this.lastIndex = 0
                    }
                }, {
                    key: "exec",
                    value: function (e) {
                        this.matcherRe.lastIndex = this.lastIndex;
                        var t = this.matcherRe.exec(e);
                        if (!t) return null;
                        var n = t.findIndex((function (e, t) {
                            return 0 < t && void 0 !== e
                        }));
                        e = this.matchIndexes[n];
                        return t.splice(0, n), Object.assign(t, e)
                    }
                }]), e
            }(),
                r = function () {
                    function e() {
                        c(this, e), this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
                    }
                    return u(e, [{
                        key: "getMatcher",
                        value: function (e) {
                            if (this.multiRegexes[e]) return this.multiRegexes[e];
                            var t = new a;
                            return this.rules.slice(e).forEach((function (e) {
                                e = (n = i(e, 2))[0];
                                var n = n[1];
                                return t.addRule(e, n)
                            })), t.compile(), this.multiRegexes[e] = t
                        }
                    }, {
                        key: "resumingScanAtSamePosition",
                        value: function () {
                            return 0 != this.regexIndex
                        }
                    }, {
                        key: "considerAll",
                        value: function () {
                            this.regexIndex = 0
                        }
                    }, {
                        key: "addRule",
                        value: function (e, t) {
                            this.rules.push([e, t]), "begin" === t.type && this.count++
                        }
                    }, {
                        key: "exec",
                        value: function (e) {
                            var t = this.getMatcher(this.regexIndex);
                            return t.lastIndex = this.lastIndex, (e = t.exec(e)) && (this.regexIndex += e.position + 1, this.regexIndex === this.count && (this.regexIndex = 0)), e
                        }
                    }]), e
                }();

            function o(e, t) {
                var n = e.input[e.index - 1];
                e = e.input[e.index + e[0].length];
                "." !== n && "." !== e || t.ignoreMatch()
            }
            if (e.contains && e.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
            return function i(a, s) {
                var c = a;
                if (a.compiled) return c;
                a.compiled = !0, a.__beforeBegin = null, a.keywords = a.keywords || a.beginKeywords;
                var l, u = null;
                if ("object" === d(a.keywords) && (u = a.keywords.$pattern, delete a.keywords.$pattern), a.keywords && (a.keywords = function (e, t) {
                    var n = {};
                    return "string" == typeof e ? i("keyword", e) : Object.keys(e).forEach((function (t) {
                        i(t, e[t])
                    })), n;

                    function i(e, i) {
                        t && (i = i.toLowerCase()), i.split(" ").forEach((function (t) {
                            t = t.split("|"), n[t[0]] = [e, function (e, t) {
                                return t ? Number(t) : function (e) {
                                    return F.includes(e.toLowerCase())
                                }(e) ? 0 : 1
                            }(t[0], t[1])]
                        }))
                    }
                }(a.keywords, e.case_insensitive)), a.lexemes && u) throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");
                return c.keywordPatternRe = t(a.lexemes || u || /\w+/, !0), s && (a.beginKeywords && (a.begin = "\\b(" + a.beginKeywords.split(" ").join("|") + ")(?=\\b|\\s)", a.__beforeBegin = o), a.begin || (a.begin = /\B|\b/), c.beginRe = t(a.begin), a.endSameAsBegin && (a.end = a.begin), a.end || a.endsWithParent || (a.end = /\B|\b/), a.end && (c.endRe = t(a.end)), c.terminator_end = _(a.end) || "", a.endsWithParent && s.terminator_end && (c.terminator_end += (a.end ? "|" : "") + s.terminator_end)), a.illegal && (c.illegalRe = t(a.illegal)), void 0 === a.relevance && (a.relevance = 1), a.contains || (a.contains = []), a.contains = (u = []).concat.apply(u, n(a.contains.map((function (e) {
                    return function (e) {
                        return e.variants && !e.cached_variants && (e.cached_variants = e.variants.map((function (t) {
                            return p(e, {
                                variants: null
                            }, t)
                        }))), e.cached_variants ? e.cached_variants : function e(t) {
                            return !!t && (t.endsWithParent || e(t.starts))
                        }(e) ? p(e, {
                            starts: e.starts ? p(e.starts) : null
                        }) : Object.isFrozen(e) ? p(e) : e
                    }("self" === e ? a : e)
                })))), a.contains.forEach((function (e) {
                    i(e, c)
                })), a.starts && i(a.starts, s), c.matcher = (s = c, l = new r, s.contains.forEach((function (e) {
                    return l.addRule(e.begin, {
                        rule: e,
                        type: "begin"
                    })
                })), s.terminator_end && l.addRule(s.terminator_end, {
                    type: "end"
                }), s.illegal && l.addRule(s.illegal, {
                    type: "illegal"
                }), l), c
            }(e)
        }
        var $ = {
            props: ["language", "code", "autodetect"],
            data: function () {
                return {
                    detectedLanguage: "",
                    unknownLanguage: !1
                }
            },
            computed: {
                className: function () {
                    return this.unknownLanguage ? "" : "hljs " + this.detectedLanguage
                },
                highlighted: function () {
                    return this.autoDetect || hljs.getLanguage(this.language) ? (this.autoDetect ? (e = hljs.highlightAuto(this.code), this.detectedLanguage = e.language) : (e = hljs.highlight(this.language, this.code, this.ignoreIllegals), this.detectectLanguage = this.language), e.value) : (console.warn('The language "'.concat(this.language, '" you specified could not be found.')), this.unknownLanguage = !0, g(this.code));
                    var e
                },
                autoDetect: function () {
                    return !this.language || (e = this.autodetect, Boolean(e || "" === e));
                    var e
                },
                ignoreIllegals: function () {
                    return !0
                }
            },
            render: function (e) {
                return e("pre", {}, [e("code", {
                    class: this.className,
                    domProps: {
                        innerHTML: this.highlighted
                    }
                })])
            }
        },
            G = {
                install: function (e) {
                    e.component("highlightjs", $)
                }
            },
            X = g,
            Q = p,
            J = v.nodeStream,
            Z = v.mergeStreams,
            W = Symbol("nomatch");
        v = function (e) {
            var t = [],
                n = Object.create(null),
                a = Object.create(null),
                r = [],
                o = !0,
                s = /(^(<[^>]+>|\t|)+|\n)/gm,
                c = "Could not find the language '{}', did you forget to load/include a language module?",
                l = {
                    disableAutodetect: !0,
                    name: "Plain text",
                    contains: []
                },
                u = {
                    noHighlightRe: /^(no-?highlight)$/i,
                    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
                    classPrefix: "hljs-",
                    tabReplace: null,
                    useBR: !1,
                    languages: null,
                    __emitter: w
                };

            function g(e) {
                return u.noHighlightRe.test(e)
            }

            function p(e, t, n, i) {
                return S("before:highlight", e = {
                    code: t,
                    language: e
                }), (i = e.result ? e.result : m(e.language, e.code, n, i)).code = e.code, S("after:highlight", i), i
            }

            function m(e, t, a, r) {
                var s = t;

                function l() {
                    if (w.keywords) {
                        var e = 0;
                        w.keywordPatternRe.lastIndex = 0;
                        for (var t = w.keywordPatternRe.exec(x), n = ""; t;) {
                            n += x.substring(e, t.index);
                            var a, r = (r = w, a = t, a = b.case_insensitive ? a[0].toLowerCase() : a[0], Object.prototype.hasOwnProperty.call(r.keywords, a) && r.keywords[a]);
                            r ? (r = (a = i(r, 2))[0], a = a[1], M.addText(n), n = "", S += a, M.addKeyword(t[0], r)) : n += t[0], e = w.keywordPatternRe.lastIndex, t = w.keywordPatternRe.exec(x)
                        }
                        n += x.substr(e), M.addText(n)
                    } else M.addText(x)
                }

                function d() {
                    (null != w.subLanguage ? function () {
                        if ("" !== x) {
                            var e = null;
                            if ("string" == typeof w.subLanguage) {
                                if (!n[w.subLanguage]) return M.addText(x);
                                e = m(w.subLanguage, x, !0, _[w.subLanguage]), _[w.subLanguage] = e.top
                            } else e = v(x, w.subLanguage.length ? w.subLanguage : null);
                            0 < w.relevance && (S += e.relevance), M.addSublanguage(e.emitter, e.language)
                        }
                    } : l)(), x = ""
                }

                function g(e) {
                    return e.className && M.openNode(e.className), w = Object.create(e, {
                        parent: {
                            value: w
                        }
                    })
                }
                var p = {};

                function h(t, n) {
                    var i = n && n[0];
                    if (x += t, null == i) return d(), 0;
                    if ("begin" === p.type && "end" === n.type && p.index === n.index && "" === i) {
                        if (x += s.slice(n.index, n.index + 1), o) return 1;
                        throw (t = new Error("0 width match regex")).languageName = e, t.badRule = p.rule, t
                    }
                    if ("begin" === (p = n).type) return function (e) {
                        for (var t = e[0], n = e.rule, i = new f(n), a = 0, r = [n.__beforeBegin, n["on:begin"]]; a < r.length; a++) {
                            var o = r[a];
                            if (o && (o(e, i), i.ignore)) return o = t, 0 === w.matcher.regexIndex ? (x += o[0], 1) : (A = !0, 0)
                        }
                        return n && n.endSameAsBegin && (n.endRe = new RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "m")), n.skip ? x += t : (n.excludeBegin && (x += t), d(), n.returnBegin || n.excludeBegin || (x = t)), g(n), n.returnBegin ? 0 : t.length
                    }(n);
                    if ("illegal" === n.type && !a) {
                        var r = new Error('Illegal lexeme "' + i + '" for mode "' + (w.className || "<unnamed>") + '"');
                        throw r.mode = w, r
                    }
                    if ("end" === n.type && (r = function (e) {
                        var t = e[0],
                            n = s.substr(e.index),
                            i = function e(t, n, i) {
                                var a, r = (a = i, (a = (r = t.endRe) && r.exec(a)) && 0 === a.index);
                                if (r && (t["on:end"] && (a = new f(t), t["on:end"](n, a), a.ignore && (r = !1)), r)) {
                                    for (; t.endsParent && t.parent;) t = t.parent;
                                    return t
                                }
                                if (t.endsWithParent) return e(t.parent, n, i)
                            }(w, e, n);
                        if (!i) return W;
                        for ((n = w).skip ? x += t : (n.returnEnd || n.excludeEnd || (x += t), d(), n.excludeEnd && (x = t)); w.className && M.closeNode(), w.skip || w.subLanguage || (S += w.relevance), (w = w.parent) !== i.parent;);
                        return i.starts && (i.endSameAsBegin && (i.starts.endRe = i.endRe), g(i.starts)), n.returnEnd ? 0 : t.length
                    }(n)) !== W) return r;
                    if ("illegal" === n.type && "" === i) return 1;
                    if (1e5 < N && N > 3 * n.index) throw new Error("potential infinite loop, way more iterations than matches");
                    return x += i, i.length
                }
                var b = E(e);
                if (!b) throw console.error(c.replace("{}", e)), new Error('Unknown language: "' + e + '"');
                t = K(b);
                var y = "",
                    w = r || t,
                    _ = {},
                    M = new u.__emitter(u);
                ! function () {
                    for (var e = [], t = w; t !== b; t = t.parent) t.className && e.unshift(t.className);
                    e.forEach((function (e) {
                        return M.openNode(e)
                    }))
                }();
                var x = "",
                    S = 0,
                    C = 0,
                    N = 0,
                    A = !1;
                try {
                    for (w.matcher.considerAll(); ;) {
                        N++, A ? A = !1 : (w.matcher.lastIndex = C, w.matcher.considerAll());
                        var O = w.matcher.exec(s);
                        if (O || !w.matcher.resumingScanAtSamePosition()) {
                            if (!O) break;
                            var k = h(s.substring(C, O.index), O);
                            C = O.index + k
                        } else x += s[C], C += 1
                    }
                    return h(s.substr(C)), M.closeAllNodes(), M.finalize(), y = M.toHTML(), {
                        relevance: S,
                        value: y,
                        language: e,
                        illegal: !1,
                        emitter: M,
                        top: w
                    }
                } catch (t) {
                    if (t.message && t.message.includes("Illegal")) return {
                        illegal: !0,
                        illegalBy: {
                            msg: t.message,
                            context: s.slice(C - 100, C + 100),
                            mode: t.mode
                        },
                        sofar: y,
                        relevance: 0,
                        value: X(s),
                        emitter: M
                    };
                    if (o) return {
                        illegal: !1,
                        relevance: 0,
                        value: X(s),
                        emitter: M,
                        language: e,
                        top: w,
                        errorRaised: t
                    };
                    throw t
                }
            }

            function v(e, t) {
                t = t || u.languages || Object.keys(n);
                var i, a, r = (i = e, (a = {
                    relevance: 0,
                    emitter: new u.__emitter(u),
                    value: X(i),
                    illegal: !1,
                    top: l
                }).emitter.addText(i), a),
                    o = r;
                return t.filter(E).filter(x).forEach((function (t) {
                    var n = m(t, e, !1);
                    n.language = t, n.relevance > o.relevance && (o = n), n.relevance > r.relevance && (o = r, r = n)
                })), o.language && (r.second_best = o), r
            }

            function h(e) {
                return u.tabReplace || u.useBR ? e.replace(s, (function (e) {
                    return "\n" === e ? u.useBR ? "<br>" : e : u.tabReplace ? e.replace(/\t/g, u.tabReplace) : e
                })) : e
            }

            function b(e) {
                var t, n, i, r = null,
                    o = function (e) {
                        var t = e.className + " ";
                        t += e.parentNode ? e.parentNode.className : "";
                        var n = u.languageDetectRe.exec(t);
                        if (n) {
                            var i = E(n[1]);
                            return i || (console.warn(c.replace("{}", n[1])), console.warn("Falling back to no-highlight mode for this block.", e)), i ? n[1] : "no-highlight"
                        }
                        return t.split(/\s+/).find((function (e) {
                            return g(e) || E(e)
                        }))
                    }(e);
                g(o) || (S("before:highlightBlock", {
                    block: e,
                    language: o
                }), u.useBR ? (r = document.createElement("div")).innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ /]*>/g, "\n") : r = e, i = r.textContent, t = o ? p(o, i, !0) : v(i), (r = J(r)).length && ((n = document.createElement("div")).innerHTML = t.value, t.value = Z(r, J(n), i)), t.value = h(t.value), S("after:highlightBlock", {
                    block: e,
                    result: t
                }), e.innerHTML = t.value, e.className = (n = e.className, i = o, o = t.language, i = i ? a[i] : o, o = [n.trim()], n.match(/\bhljs\b/) || o.push("hljs"), n.includes(i) || o.push(i), o.join(" ").trim()), e.result = {
                    language: t.language,
                    re: t.relevance,
                    relavance: t.relevance
                }, t.second_best && (e.second_best = {
                    language: t.second_best.language,
                    re: t.second_best.relevance,
                    relavance: t.second_best.relevance
                }))
            }
            var y, _ = function e() {
                var n;
                e.called || (e.called = !0, n = document.querySelectorAll("pre code"), t.forEach.call(n, b))
            };

            function E(e) {
                return e = (e || "").toLowerCase(), n[e] || n[a[e]]
            }

            function M(e, t) {
                var n = t.languageName;
                "string" == typeof e && (e = [e]), e.forEach((function (e) {
                    a[e] = n
                }))
            }

            function x(e) {
                return (e = E(e)) && !e.disableAutodetect
            }

            function S(e, t) {
                var n = e;
                r.forEach((function (e) {
                    e[n] && e[n](t)
                }))
            }
            for (y in Object.assign(e, {
                highlight: p,
                highlightAuto: v,
                fixMarkup: function (e) {
                    return console.warn("fixMarkup is deprecated and will be removed entirely in v11.0"), console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2534"), h(e)
                },
                highlightBlock: b,
                configure: function (e) {
                    u = Q(u, e)
                },
                initHighlighting: _,
                initHighlightingOnLoad: function () {
                    window.addEventListener("DOMContentLoaded", _, !1)
                },
                registerLanguage: function (t, i) {
                    var a = null;
                    try {
                        a = i(e)
                    } catch (e) {
                        if (console.error("Language definition for '{}' could not be registered.".replace("{}", t)), !o) throw e;
                        console.error(e), a = l
                    }
                    a.name || (a.name = t), (n[t] = a).rawDefinition = i.bind(null, e), a.aliases && M(a.aliases, {
                        languageName: t
                    })
                },
                listLanguages: function () {
                    return Object.keys(n)
                },
                getLanguage: E,
                registerAliases: M,
                requireLanguage: function (e) {
                    var t = E(e);
                    if (t) return t;
                    throw new Error("The '{}' language is required, but not loaded.".replace("{}", e))
                },
                autoDetection: x,
                inherit: Q,
                addPlugin: function (e) {
                    r.push(e)
                },
                vuePlugin: G
            }), e.debugMode = function () {
                o = !1
            }, e.safeMode = function () {
                o = !0
            }, e.versionString = "10.2.0", H) "object" === d(H[y]) && function e(t) {
                Object.freeze(t);
                var n = "function" == typeof t;
                return Object.getOwnPropertyNames(t).forEach((function (i) {
                    !Object.hasOwnProperty.call(t, i) || null === t[i] || "object" !== d(t[i]) && "function" != typeof t[i] || n && ("caller" === i || "callee" === i || "arguments" === i) || Object.isFrozen(t[i]) || e(t[i])
                })), t
            }(H[y]);
            return Object.assign(e, H), e
        }({});
        e.exports = v
    }, function (e, t) {
        e.exports = function (e) {
            var t = {
                begin: /(?:[A-Z\_\.\-]+|--[a-zA-Z0-9_-]+)\s*:/,
                returnBegin: !0,
                end: ";",
                endsWithParent: !0,
                contains: [{
                    className: "attribute",
                    begin: /\S/,
                    end: ":",
                    excludeEnd: !0,
                    starts: {
                        endsWithParent: !0,
                        excludeEnd: !0,
                        contains: [{
                            begin: /[\w-]+\(/,
                            returnBegin: !0,
                            contains: [{
                                className: "built_in",
                                begin: /[\w-]+/
                            }, {
                                begin: /\(/,
                                end: /\)/,
                                contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.CSS_NUMBER_MODE]
                            }]
                        }, e.CSS_NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, e.C_BLOCK_COMMENT_MODE, {
                            className: "number",
                            begin: "#[0-9A-Fa-f]+"
                        }, {
                            className: "meta",
                            begin: "!important"
                        }]
                    }
                }]
            };
            return {
                name: "CSS",
                case_insensitive: !0,
                illegal: /[=\/|'\$]/,
                contains: [e.C_BLOCK_COMMENT_MODE, {
                    className: "selector-id",
                    begin: /#[A-Za-z0-9_-]+/
                }, {
                    className: "selector-class",
                    begin: /\.[A-Za-z0-9_-]+/
                }, {
                    className: "selector-attr",
                    begin: /\[/,
                    end: /\]/,
                    illegal: "$",
                    contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
                }, {
                    className: "selector-pseudo",
                    begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
                }, {
                    begin: "@(page|font-face)",
                    lexemes: "@[a-z-]+",
                    keywords: "@page @font-face"
                }, {
                    begin: "@",
                    end: "[{;]",
                    illegal: /:/,
                    returnBegin: !0,
                    contains: [{
                        className: "keyword",
                        begin: /@\-?\w[\w]*(\-\w+)*/
                    }, {
                        begin: /\s/,
                        endsWithParent: !0,
                        excludeEnd: !0,
                        relevance: 0,
                        keywords: "and or not only",
                        contains: [{
                            begin: /[a-z-]+:/,
                            className: "attribute"
                        }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.CSS_NUMBER_MODE]
                    }]
                }, {
                    className: "selector-tag",
                    begin: "[a-zA-Z-][a-zA-Z0-9_-]*",
                    relevance: 0
                }, {
                    begin: "{",
                    end: "}",
                    illegal: /\S/,
                    contains: [e.C_BLOCK_COMMENT_MODE, t]
                }]
            }
        }
    }, function (e, t) {
        e.exports = function (e) {
            var t = {
                className: "symbol",
                begin: "&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;"
            },
                n = {
                    begin: "\\s",
                    contains: [{
                        className: "meta-keyword",
                        begin: "#?[a-z_][a-z1-9_-]+",
                        illegal: "\\n"
                    }]
                },
                i = e.inherit(n, {
                    begin: "\\(",
                    end: "\\)"
                }),
                a = e.inherit(e.APOS_STRING_MODE, {
                    className: "meta-string"
                }),
                r = e.inherit(e.QUOTE_STRING_MODE, {
                    className: "meta-string"
                }),
                o = {
                    endsWithParent: !0,
                    illegal: /</,
                    relevance: 0,
                    contains: [{
                        className: "attr",
                        begin: "[A-Za-z0-9\\._:-]+",
                        relevance: 0
                    }, {
                        begin: /=\s*/,
                        relevance: 0,
                        contains: [{
                            className: "string",
                            endsParent: !0,
                            variants: [{
                                begin: /"/,
                                end: /"/,
                                contains: [t]
                            }, {
                                begin: /'/,
                                end: /'/,
                                contains: [t]
                            }, {
                                begin: /[^\s"'=<>`]+/
                            }]
                        }]
                    }]
                };
            return {
                name: "HTML, XML",
                aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf", "svg"],
                case_insensitive: !0,
                contains: [{
                    className: "meta",
                    begin: "<![a-z]",
                    end: ">",
                    relevance: 10,
                    contains: [n, r, a, i, {
                        begin: "\\[",
                        end: "\\]",
                        contains: [{
                            className: "meta",
                            begin: "<![a-z]",
                            end: ">",
                            contains: [n, i, r, a]
                        }]
                    }]
                }, e.COMMENT("\x3c!--", "--\x3e", {
                    relevance: 10
                }), {
                    begin: "<\\!\\[CDATA\\[",
                    end: "\\]\\]>",
                    relevance: 10
                }, t, {
                    className: "meta",
                    begin: /<\?xml/,
                    end: /\?>/,
                    relevance: 10
                }, {
                    className: "tag",
                    begin: "<style(?=\\s|>)",
                    end: ">",
                    keywords: {
                        name: "style"
                    },
                    contains: [o],
                    starts: {
                        end: "</style>",
                        returnEnd: !0,
                        subLanguage: ["css", "xml"]
                    }
                }, {
                    className: "tag",
                    begin: "<script(?=\\s|>)",
                    end: ">",
                    keywords: {
                        name: "script"
                    },
                    contains: [o],
                    starts: {
                        end: "<\/script>",
                        returnEnd: !0,
                        subLanguage: ["javascript", "handlebars", "xml"]
                    }
                }, {
                    className: "tag",
                    begin: "</?",
                    end: "/?>",
                    contains: [{
                        className: "name",
                        begin: /[^\/><\s]+/,
                        relevance: 0
                    }, o]
                }]
            }
        }
    }, function (e, t) {
        e.exports = function (e) {
            var t = {
                literal: "true false null"
            },
                n = [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
                i = [e.QUOTE_STRING_MODE, e.C_NUMBER_MODE],
                a = {
                    end: ",",
                    endsWithParent: !0,
                    excludeEnd: !0,
                    contains: i,
                    keywords: t
                },
                r = {
                    begin: "{",
                    end: "}",
                    contains: [{
                        className: "attr",
                        begin: /"/,
                        end: /"/,
                        contains: [e.BACKSLASH_ESCAPE],
                        illegal: "\\n"
                    }, e.inherit(a, {
                        begin: /:/
                    })].concat(n),
                    illegal: "\\S"
                };
            a = {
                begin: "\\[",
                end: "\\]",
                contains: [e.inherit(a)],
                illegal: "\\S"
            };
            return i.push(r, a), n.forEach((function (e) {
                i.push(e)
            })), {
                name: "JSON",
                contains: i,
                keywords: t,
                illegal: "\\S"
            }
        }
    }, function (e, t) {
        e.exports = function (e) {
            var t = {},
                n = {
                    begin: /\$\{/,
                    end: /\}/,
                    contains: [{
                        begin: /:-/,
                        contains: [t]
                    }]
                };
            Object.assign(t, {
                className: "variable",
                variants: [{
                    begin: /\$[\w\d#@][\w\d_]*/
                }, n]
            });
            var i = {
                className: "subst",
                begin: /\$\(/,
                end: /\)/,
                contains: [e.BACKSLASH_ESCAPE]
            },
                a = {
                    className: "string",
                    begin: /"/,
                    end: /"/,
                    contains: [e.BACKSLASH_ESCAPE, t, i]
                };
            i.contains.push(a);
            var r = {
                begin: /\$\(\(/,
                end: /\)\)/,
                contains: [{
                    begin: /\d+#[0-9a-f]+/,
                    className: "number"
                }, e.NUMBER_MODE, t]
            };
            n = e.SHEBANG({
                binary: "(".concat(["fish", "bash", "zsh", "sh", "csh", "ksh", "tcsh", "dash", "scsh"].join("|"), ")"),
                relevance: 10
            }), i = {
                className: "function",
                begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
                returnBegin: !0,
                contains: [e.inherit(e.TITLE_MODE, {
                    begin: /\w[\w\d_]*/
                })],
                relevance: 0
            };
            return {
                name: "Bash",
                aliases: ["sh", "zsh"],
                keywords: {
                    $pattern: /\b-?[a-z\._-]+\b/,
                    keyword: "if then else elif fi for while in do done case esac function",
                    literal: "true false",
                    built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
                    _: "-ne -eq -lt -gt -f -d -e -s -l -a"
                },
                contains: [n, e.SHEBANG(), i, r, e.HASH_COMMENT_MODE, a, {
                    className: "",
                    begin: /\\"/
                }, {
                        className: "string",
                        begin: /'/,
                        end: /'/
                    }, t]
            }
        }
    }, function (e, t) {
        e.exports = function (e) {
            return {
                name: "Shell Session",
                aliases: ["console"],
                contains: [{
                    className: "meta",
                    begin: "^\\s{0,3}[/\\w\\d\\[\\]()@-]*[>%$#]",
                    starts: {
                        end: "$",
                        subLanguage: "bash"
                    }
                }]
            }
        }
    }, function (e, t) {
        e.exports = function (e) {
            var t = {
                className: "variable",
                variants: [{
                    begin: /\$\d+/
                }, {
                    begin: /\$\{/,
                    end: /}/
                }, {
                    begin: "[\\$\\@]" + e.UNDERSCORE_IDENT_RE
                }]
            };
            t = {
                endsWithParent: !0,
                keywords: {
                    $pattern: "[a-z/_]+",
                    literal: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
                },
                relevance: 0,
                illegal: "=>",
                contains: [e.HASH_COMMENT_MODE, {
                    className: "string",
                    contains: [e.BACKSLASH_ESCAPE, t],
                    variants: [{
                        begin: /"/,
                        end: /"/
                    }, {
                        begin: /'/,
                        end: /'/
                    }]
                }, {
                    begin: "([a-z]+):/",
                    end: "\\s",
                    endsWithParent: !0,
                    excludeEnd: !0,
                    contains: [t]
                }, {
                    className: "regexp",
                    contains: [e.BACKSLASH_ESCAPE, t],
                    variants: [{
                        begin: "\\s\\^",
                        end: "\\s|{|;",
                        returnEnd: !0
                    }, {
                        begin: "~\\*?\\s+",
                        end: "\\s|{|;",
                        returnEnd: !0
                    }, {
                        begin: "\\*(\\.[a-z\\-]+)+"
                    }, {
                        begin: "([a-z\\-]+\\.)+\\*"
                    }]
                }, {
                    className: "number",
                    begin: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
                }, {
                    className: "number",
                    begin: "\\b\\d+[kKmMgGdshdwy]*\\b",
                    relevance: 0
                }, t]
            };
            return {
                name: "Nginx config",
                aliases: ["nginxconf"],
                contains: [e.HASH_COMMENT_MODE, {
                    begin: e.UNDERSCORE_IDENT_RE + "\\s+{",
                    returnBegin: !0,
                    end: "{",
                    contains: [{
                        className: "section",
                        begin: e.UNDERSCORE_IDENT_RE
                    }],
                    relevance: 0
                }, {
                    begin: e.UNDERSCORE_IDENT_RE + "\\s",
                    end: ";|{",
                    returnBegin: !0,
                    contains: [{
                        className: "attribute",
                        begin: e.UNDERSCORE_IDENT_RE,
                        starts: t
                    }],
                    relevance: 0
                }],
                illegal: "[^\\s\\}]"
            }
        }
    }, function (e, t) {
        e.exports = function (e) {
            var t = {
                keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10",
                built_in: "Ellipsis NotImplemented",
                literal: "False None True"
            },
                n = {
                    className: "meta",
                    begin: /^(>>>|\.\.\.) /
                },
                i = {
                    className: "subst",
                    begin: /\{/,
                    end: /\}/,
                    keywords: t,
                    illegal: /#/
                },
                a = {
                    begin: /\{\{/,
                    relevance: 0
                },
                r = {
                    className: "string",
                    contains: [e.BACKSLASH_ESCAPE],
                    variants: [{
                        begin: /(u|b)?r?'''/,
                        end: /'''/,
                        contains: [e.BACKSLASH_ESCAPE, n],
                        relevance: 10
                    }, {
                        begin: /(u|b)?r?"""/,
                        end: /"""/,
                        contains: [e.BACKSLASH_ESCAPE, n],
                        relevance: 10
                    }, {
                        begin: /(fr|rf|f)'''/,
                        end: /'''/,
                        contains: [e.BACKSLASH_ESCAPE, n, a, i]
                    }, {
                        begin: /(fr|rf|f)"""/,
                        end: /"""/,
                        contains: [e.BACKSLASH_ESCAPE, n, a, i]
                    }, {
                        begin: /(u|r|ur)'/,
                        end: /'/,
                        relevance: 10
                    }, {
                        begin: /(u|r|ur)"/,
                        end: /"/,
                        relevance: 10
                    }, {
                        begin: /(b|br)'/,
                        end: /'/
                    }, {
                        begin: /(b|br)"/,
                        end: /"/
                    }, {
                        begin: /(fr|rf|f)'/,
                        end: /'/,
                        contains: [e.BACKSLASH_ESCAPE, a, i]
                    }, {
                        begin: /(fr|rf|f)"/,
                        end: /"/,
                        contains: [e.BACKSLASH_ESCAPE, a, i]
                    }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
                },
                o = {
                    className: "number",
                    relevance: 0,
                    variants: [{
                        begin: e.BINARY_NUMBER_RE + "[lLjJ]?"
                    }, {
                        begin: "\\b(0o[0-7]+)[lLjJ]?"
                    }, {
                        begin: e.C_NUMBER_RE + "[lLjJ]?"
                    }]
                };
            a = {
                className: "params",
                variants: [{
                    begin: /\(\s*\)/,
                    skip: !0,
                    className: null
                }, {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    contains: ["self", n, o, r, e.HASH_COMMENT_MODE]
                }]
            };
            return i.contains = [r, o, n], {
                name: "Python",
                aliases: ["py", "gyp", "ipython"],
                keywords: t,
                illegal: /(<\/|->|\?)|=>/,
                contains: [n, o, {
                    beginKeywords: "if",
                    relevance: 0
                }, r, e.HASH_COMMENT_MODE, {
                        variants: [{
                            className: "function",
                            beginKeywords: "def"
                        }, {
                            className: "class",
                            beginKeywords: "class"
                        }],
                        end: /:/,
                        illegal: /[${=;\n,]/,
                        contains: [e.UNDERSCORE_TITLE_MODE, a, {
                            begin: /->/,
                            endsWithParent: !0,
                            keywords: "None"
                        }]
                    }, {
                        className: "meta",
                        begin: /^[\t ]*@/,
                        end: /$/
                    }, {
                        begin: /\b(print|exec)\(/
                    }]
            }
        }
    }, function (e, t) {
        var n = "[A-Za-z$_][0-9A-Za-z$_]*",
            i = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"],
            a = ["true", "false", "null", "undefined", "NaN", "Infinity"],
            r = [].concat(["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"], ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"], ["Intl", "DataView", "Number", "Math", "Date", "String", "RegExp", "Object", "Function", "Boolean", "Error", "Symbol", "Set", "Map", "WeakSet", "WeakMap", "Proxy", "Reflect", "JSON", "Promise", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Float32Array", "Array", "Uint8Array", "Uint8ClampedArray", "ArrayBuffer"], ["EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"]);

        function o(e) {
            return s("(?=", e, ")")
        }

        function s() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return t.map((function (e) {
                return (e = e) ? "string" == typeof e ? e : e.source : null
            })).join("")
        }
        e.exports = function (e) {
            var t = n,
                c = {
                    begin: /<[A-Za-z0-9\\._:-]+/,
                    end: /\/[A-Za-z0-9\\._:-]+>|\/>/
                },
                l = {
                    $pattern: n,
                    keyword: i.join(" "),
                    literal: a.join(" "),
                    built_in: r.join(" ")
                },
                u = {
                    className: "number",
                    variants: [{
                        begin: "\\b(0[bB][01]+)n?"
                    }, {
                        begin: "\\b(0[oO][0-7]+)n?"
                    }, {
                        begin: e.C_NUMBER_RE + "n?"
                    }],
                    relevance: 0
                },
                d = {
                    className: "subst",
                    begin: "\\$\\{",
                    end: "\\}",
                    keywords: l,
                    contains: []
                },
                f = {
                    begin: "html`",
                    end: "",
                    starts: {
                        end: "`",
                        returnEnd: !1,
                        contains: [e.BACKSLASH_ESCAPE, d],
                        subLanguage: "xml"
                    }
                },
                g = {
                    begin: "css`",
                    end: "",
                    starts: {
                        end: "`",
                        returnEnd: !1,
                        contains: [e.BACKSLASH_ESCAPE, d],
                        subLanguage: "css"
                    }
                },
                p = {
                    className: "string",
                    begin: "`",
                    end: "`",
                    contains: [e.BACKSLASH_ESCAPE, d]
                };
            d.contains = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, f, g, p, u, e.REGEXP_MODE];
            var m = d.contains.concat([{
                begin: /\(/,
                end: /\)/,
                contains: ["self"].concat(d.contains, [e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE])
            }, e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE]);
            d = {
                className: "params",
                begin: /\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                contains: m
            };
            return {
                name: "JavaScript",
                aliases: ["js", "jsx", "mjs", "cjs"],
                keywords: l,
                contains: [e.SHEBANG({
                    binary: "node",
                    relevance: 5
                }), {
                    className: "meta",
                    relevance: 10,
                    begin: /^\s*['"]use (strict|asm)['"]/
                }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, f, g, p, e.C_LINE_COMMENT_MODE, e.COMMENT("/\\*\\*", "\\*/", {
                    relevance: 0,
                    contains: [{
                        className: "doctag",
                        begin: "@[A-Za-z]+",
                        contains: [{
                            className: "type",
                            begin: "\\{",
                            end: "\\}",
                            relevance: 0
                        }, {
                            className: "variable",
                            begin: t + "(?=\\s*(-)|$)",
                            endsParent: !0,
                            relevance: 0
                        }, {
                            begin: /(?=[^\n])\s/,
                            relevance: 0
                        }]
                    }]
                }), e.C_BLOCK_COMMENT_MODE, u, {
                    begin: s(/[{,\n]\s*/, o(s(/(((\/\/.*$)|(\/\*(.|\n)*\*\/))\s*)*/, t + "\\s*:"))),
                    relevance: 0,
                    contains: [{
                        className: "attr",
                        begin: t + o("\\s*:"),
                        relevance: 0
                    }]
                }, {
                    begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                    keywords: "return throw case",
                    contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.REGEXP_MODE, {
                        className: "function",
                        begin: "(\\([^(]*(\\([^(]*(\\([^(]*\\))?\\))?\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>",
                        returnBegin: !0,
                        end: "\\s*=>",
                        contains: [{
                            className: "params",
                            variants: [{
                                begin: e.UNDERSCORE_IDENT_RE
                            }, {
                                className: null,
                                begin: /\(\s*\)/,
                                skip: !0
                            }, {
                                begin: /\(/,
                                end: /\)/,
                                excludeBegin: !0,
                                excludeEnd: !0,
                                keywords: l,
                                contains: m
                            }]
                        }]
                    }, {
                        begin: /,/,
                        relevance: 0
                    }, {
                        className: "",
                        begin: /\s/,
                        end: /\s*/,
                        skip: !0
                    }, {
                        variants: [{
                            begin: "<>",
                            end: "</>"
                        }, {
                            begin: c.begin,
                            end: c.end
                        }],
                        subLanguage: "xml",
                        contains: [{
                            begin: c.begin,
                            end: c.end,
                            skip: !0,
                            contains: ["self"]
                        }]
                    }],
                    relevance: 0
                }, {
                    className: "function",
                    beginKeywords: "function",
                    end: /\{/,
                    excludeEnd: !0,
                    contains: [e.inherit(e.TITLE_MODE, {
                        begin: t
                    }), d],
                    illegal: /\[|%/
                }, {
                    begin: /\$[(.]/
                }, e.METHOD_GUARD, {
                    className: "class",
                    beginKeywords: "class",
                    end: /[{;=]/,
                    excludeEnd: !0,
                    illegal: /[:"\[\]]/,
                    contains: [{
                        beginKeywords: "extends"
                    }, e.UNDERSCORE_TITLE_MODE]
                }, {
                    beginKeywords: "constructor",
                    end: /\{/,
                    excludeEnd: !0
                }, {
                    begin: "(get|set)\\s+(?=" + t + "\\()",
                    end: /{/,
                    keywords: "get set",
                    contains: [e.inherit(e.TITLE_MODE, {
                        begin: t
                    }), {
                        begin: /\(\)/
                    }, d]
                }],
                illegal: /#(?!!)/
            }
        }
    }, function (e, t) {
        function n(e) {
            return e ? "string" == typeof e ? e : e.source : null
        }

        function i(e) {
            return a("(", e, ")?")
        }

        function a() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            return t.map(n).join("")
        }

        function r() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            return "(" + t.map(n).join("|") + ")"
        }
        e.exports = function (e) {
            var t = "false synchronized int abstract float private char boolean var static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do",
                n = {
                    className: "meta",
                    begin: "@" + "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",
                    contains: [{
                        begin: /\(/,
                        end: /\)/,
                        contains: ["self"]
                    }]
                },
                o = function (e) {
                    return a("[", e, "]+([", e, "_]*[", e, "]+)?")
                },
                s = {
                    className: "number",
                    variants: [{
                        begin: "\\b(0[bB]".concat(o("01"), ")[lL]?")
                    }, {
                        begin: "\\b(0".concat(o("0-7"), ")[dDfFlL]?")
                    }, {
                        begin: a(/\b0[xX]/, r(a(o("a-fA-F0-9"), /\./, o("a-fA-F0-9")), a(o("a-fA-F0-9"), /\.?/), a(/\./, o("a-fA-F0-9"))), /([pP][+-]?(\d+))?/, /[fFdDlL]?/)
                    }, {
                        begin: a(/\b/, r(a(/\d*\./, o("\\d")), o("\\d")), /[eE][+-]?[\d]+[dDfF]?/)
                    }, {
                        begin: a(/\b/, o(/\d/), i(/\.?/), i(o(/\d/)), /[dDfFlL]?/)
                    }],
                    relevance: 0
                };
            return {
                name: "Java",
                aliases: ["jsp"],
                keywords: t,
                illegal: /<\/|#/,
                contains: [e.COMMENT("/\\*\\*", "\\*/", {
                    relevance: 0,
                    contains: [{
                        begin: /\w+@/,
                        relevance: 0
                    }, {
                        className: "doctag",
                        begin: "@[A-Za-z]+"
                    }]
                }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
                    className: "class",
                    beginKeywords: "class interface enum",
                    end: /[{;=]/,
                    excludeEnd: !0,
                    keywords: "class interface enum",
                    illegal: /[:"\[\]]/,
                    contains: [{
                        beginKeywords: "extends implements"
                    }, e.UNDERSCORE_TITLE_MODE]
                }, {
                    beginKeywords: "new throw return else",
                    relevance: 0
                }, {
                    className: "function",
                    begin: "([À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(<[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(\\s*,\\s*[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*)*>)?\\s+)+" + e.UNDERSCORE_IDENT_RE + "\\s*\\(",
                    returnBegin: !0,
                    end: /[{;=]/,
                    excludeEnd: !0,
                    keywords: t,
                    contains: [{
                        begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
                        returnBegin: !0,
                        relevance: 0,
                        contains: [e.UNDERSCORE_TITLE_MODE]
                    }, {
                        className: "params",
                        begin: /\(/,
                        end: /\)/,
                        keywords: t,
                        relevance: 0,
                        contains: [n, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE, e.C_BLOCK_COMMENT_MODE]
                    }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                }, s, n]
            }
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = {
            mail: function (e) {
                return {
                    k: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(e),
                    v: e
                }
            },
            link: function (e) {
                return 0 < e.length && (e = /^(http|https)/.test(e) ? e : "http://".concat(e)), {
                    k: !(0 < e.length) || /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/.test(e),
                    v: e
                }
            }
        }
    }, function (e, t, n) {
        "use strict";
        var i, a = (i = n(0)) && i.__esModule ? i : {
            default: i
        };
        e.exports = function (e, t) {
            e.insertComment = function (i) {
                var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                    r = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                    o = document.createElement("li");
                o.setAttribute("class", "item"), o.setAttribute("id", i.id), o.innerHTML = t.item(e, i), e.ActivateCode(e);
                for (var s = a || e.el.querySelector(".list"), c = (a = s.querySelectorAll("li"), o.querySelectorAll("a")), l = 0, u = c.length; l < u; l++) {
                    var d = c[l];
                    d && "at" !== d.getAttribute("class") && (d.setAttribute("target", "_blank"), d.setAttribute("rel", "nofollow"))
                }
                if (r) s.insertBefore(o, a[0]);
                else try {
                    s.appendChild(o)
                } catch (e) { }
                return a = o.querySelector(".content > .inner"), n(a), e.AtEvt(o), e.config.lazyload && e.config.lazyload.observe(), o
            };
            var n = function (t) {
                180 < t.offsetHeight && (t.classList.add("expand"), t.setAttribute("data-expand", e.i18n.more), a.default.on("click", t, (function (e) {
                    t.setAttribute("class", "inner md")
                })))
            }
        }
    }, function (e, t, n) {
        "use strict";
        a(n(0));
        var i = a(n(3));

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = function (e) {
            e.nestQuery = function (t) {
                e.v.Query.doCloudQuery("select nick, comment, link, rid, isSpam, mailMd5, ua from Comment where rid in (".concat(JSON.stringify(t).replace(/(\[|\])/g, ""), ") order by -createdAt")).then((function (t) {
                    var n = (t = t && t.results || []).length;
                    if (n)
                        for (var a = function (n) {
                            var a;
                            t[n].get("isSpam") || (a = function (i) {
                                t[n].set("comment", i.TEXT), e.insertComment(t[n], e.el.querySelector("#children-" + t[n].get("rid")), !0)
                            }, t[n].TEXT = t[n].get("comment"), (0, i.default)(t[n], a))
                        }, r = 0; r < n; r++) a(r)
                })).catch((function (t) {
                    e.loading.hide(e.parentCount)
                }))
            }
        }
    }, function (e, t, n) {
        "use strict";
        var i = r(n(0)),
            a = r(n(3));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = function (e) {
            var t = 1;
            e.parentCount = 0, e.parentQuery = function () {
                var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1;
                e.loading.show(), e.v.Query.doCloudQuery("select nick, comment, link, rid, isSpam, mailMd5, ua from Comment where (rid='' or rid is not exists) and url='".concat(e.C.url, "' order by -createdAt limit ").concat((n - 1) * e.pageSize, ",").concat(e.pageSize)).then((function (r) {
                    var o = (r = r && r.results || []).length;
                    if (o) {
                        for (var s = [], c = function (t) {
                            if (0 == t && e.loading.hide(e.parentCount), r[t].get("isSpam")) return "continue";
                            r[t].TEXT = r[t].get("comment"), (0, a.default)(r[t], (function (n) {
                                r[t].set("comment", n.TEXT), e.insertComment(r[t], e.el.querySelector(".list"), !1)
                            })), s.push(r[t].id)
                        }, l = 0; l < o; l++) c(l);
                        var u = e.el.querySelector(".next");
                        u.innerHTML = e.pageSize * n < e.parentCount ? '<div id="vmore" class="more">'.concat(e.i18n.more, "</div>") : "";
                        var d = u.querySelector("#vmore");
                        d && i.default.on("click", d, (function (n) {
                            u.innerHTML = "", e.parentQuery(++t)
                        })), e.nestQuery(s)
                    }
                    try {
                        void 0 !== window.MV.barrager.bottom && 1 == e.config.barrager && (window.MV.barrager.enable = 0)
                    } catch (e) { }
                    e.loading.hide(e.parentCount)
                })).catch((function (t) {
                    e.loading.hide(e.parentCount)
                }))
            }
        }
    }, function (e, t, n) {
        "use strict";
        var i = n(57);
        e.exports = function (e) {
            e.ActivateCode = function (e) {
                0 != e.math && (0, i.MathJaxSupport)(e)
            }
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.MathJaxSupport = void 0;
        var i, a = (i = n(58)) && i.__esModule ? i : {
            default: i
        };
        t.MathJaxSupport = function (e) {
            "undefined" != typeof MathJax || !e.math && void 0 !== e.config.math || 1 != e.math && null != e.math || (0, a.default)(), "undefined" != typeof MathJax && r()
        };
        var r = function () {
            try {
                "2" === MathJax.version.substr(0, 1) ? MathJax.Hub.Typeset(document.getElementsByClassName("v")) : "3" === MathJax.version.substr(0, 1) && MathJax.typeset()
            } catch (e) { }
        }
    }, function (e, t, n) {
        "use strict";
        var i;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.initMathJax = function () {
            void 0 === window.MathFinish && (a(), window.MathFinish = !0)
        }, (i = n(5)) && i.__esModule;
        var a = function () {
            var e = document.createElement("script");
            e.text = "\n      window.MathJax = {\n          tex: {\n            inlineMath: [['$','$']],\n            autoload: {\n                verb: ['verb'],\n\t\t\t\tcolor: [],\n                colorV2: ['color'],\n                require:['require']\n            },\n            packages: {'[+]': ['braket']}\n          },\n          loader: {load: ['[tex]/braket']},\n          svg: {\n            fontCache: 'global'\n          }\n      }\n  ";
            try {
                document.getElementsByTagName("body")[0].appendChild(e)
            } catch (e) { }
        }
    }, function (e, t, n) {
        "use strict";
        var i, a = (i = n(9)) && i.__esModule ? i : {
            default: i
        };
        e.exports = function (e) {
            e.previewEvt = function (e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = e.el.querySelector(".preview"),
                    i = e.el.querySelector(".preview-box"),
                    r = e.el.querySelector(".veditor"),
                    o = function (i) {
                        i.innerHTML = i.TEXT, i.removeAttribute("style"), i.setAttribute("triggered", 1), n.classList.add("actived"), r.value ? autosize(r) : autosize.destroy(r), e.ActivateCode(e, t)
                    };
                (0, a.default)(e, i, o)
            }
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            void 0 !== e.visitor && !e.visitor || n.e(1).then(n.t.bind(null, 63, 7)).then((function (t) {
                (0, t.MCo)(e.config)
            }))
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            if (e.config.cloudflag) try {
                e.cloudFlag = {}, AV.Query.doCloudQuery("select * from Roles limit 100000000  order by -createdAt").then((function (t) {
                    e.cloudFlag.Roles = {};
                    for (var n = 0; n < t.results.length; n++) e.cloudFlag.Roles[t.results[n].get("name")] = {
                        nick: t.results[n].get("nick"),
                        color: t.results[n].get("color")
                    }
                }), (function (e) {
                    console.log(e)
                })), AV.Query.doCloudQuery("select * from Users limit 100000000  order by -createdAt").then((function (t) {
                    e.cloudFlag.Users = {};
                    for (var n = 0; n < t.results.length; n++) e.cloudFlag.Users[t.results[n].get("emailhash").toLowerCase()] = t.results[n].get("role")
                }), (function (e) {
                    console.log(e)
                }))
            } catch (e) { }
        }
    }, function (e, t, n) {
        "use strict";
        // var i, a = (i = n(4)) && i.__esModule ? i : {
        //     default: i
        // };
        e.exports = function (e) {
            ! function (e) {
                var t = document.querySelector(".leancloud-recent-comment");
                function renderTime(date) {
                    let myDate = new Date(date).toJSON();
                    return new Date(+new Date(myDate) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
                }
                function formatTime(time) {
                    let d = Math.floor(time / (1000 * 60 * 60 * 24));
                    let h = Math.floor(time / (1000 * 60 * 60) % 24);
                    return d > 0 ? d + ' 天前' : h + ' 小时前'
                }
                let str = ' @ '
                let reg = /<.*?>/ig;
                let date = new Date()
                var t = document.querySelector(".leancloud-recent-comment");
                t && !t.classList.contains("loaded") && fetch('https://waline1.now.sh/comment?type=recent&count=')
                    .then(response => response.json())
                    .then(data => {
                        let arr = data.filter(item => item.mail !== "7393ce11f9eb873b79ac6a74c39f8eca" && item.pid === undefined)
                        arr.splice(10);
                        console.log(arr);
                        let i = arr.length
                        for (var r = "", o = 0; o < i; o++) {
                            let comment = arr[o].comment.replace(reg, '');
                            let gap = formatTime(date - new Date(renderTime(arr[o].updatedAt)))
                            r += `<li class="item"><a href="${arr[o].url + '#' + arr[o].objectId}">
                                <span class="breadcrumb">${arr[o].nick + str + gap}</span>
                                <span>${comment}</span></a></li>`;
                            t.innerHTML = r, t.classList.add("loaded"), e.config.pjax && e.config.pjax.refresh(t)
                        }
                    })
                    .catch(console.error)
            }(e)
        }
    }])
}));
