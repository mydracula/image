! function (e, t) {
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
