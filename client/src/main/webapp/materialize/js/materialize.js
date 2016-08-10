jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (t, e, i, n, a) {
        return jQuery.easing[jQuery.easing.def](t, e, i, n, a)
    },
    easeInQuad: function (t, e, i, n, a) {
        return n * (e /= a) * e + i
    },
    easeOutQuad: function (t, e, i, n, a) {
        return -n * (e /= a) * (e - 2) + i
    },
    easeInOutQuad: function (t, e, i, n, a) {
        return (e /= a / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
    },
    easeInCubic: function (t, e, i, n, a) {
        return n * (e /= a) * e * e + i
    },
    easeOutCubic: function (t, e, i, n, a) {
        return n * ((e = e / a - 1) * e * e + 1) + i
    },
    easeInOutCubic: function (t, e, i, n, a) {
        return (e /= a / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
    },
    easeInQuart: function (t, e, i, n, a) {
        return n * (e /= a) * e * e * e + i
    },
    easeOutQuart: function (t, e, i, n, a) {
        return -n * ((e = e / a - 1) * e * e * e - 1) + i
    },
    easeInOutQuart: function (t, e, i, n, a) {
        return (e /= a / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i
    },
    easeInQuint: function (t, e, i, n, a) {
        return n * (e /= a) * e * e * e * e + i
    },
    easeOutQuint: function (t, e, i, n, a) {
        return n * ((e = e / a - 1) * e * e * e * e + 1) + i
    },
    easeInOutQuint: function (t, e, i, n, a) {
        return (e /= a / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i
    },
    easeInSine: function (t, e, i, n, a) {
        return -n * Math.cos(e / a * (Math.PI / 2)) + n + i
    },
    easeOutSine: function (t, e, i, n, a) {
        return n * Math.sin(e / a * (Math.PI / 2)) + i
    },
    easeInOutSine: function (t, e, i, n, a) {
        return -n / 2 * (Math.cos(Math.PI * e / a) - 1) + i
    },
    easeInExpo: function (t, e, i, n, a) {
        return 0 == e ? i : n * Math.pow(2, 10 * (e / a - 1)) + i
    },
    easeOutExpo: function (t, e, i, n, a) {
        return e == a ? i + n : n * (-Math.pow(2, -10 * e / a) + 1) + i
    },
    easeInOutExpo: function (t, e, i, n, a) {
        return 0 == e ? i : e == a ? i + n : (e /= a / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (-Math.pow(2, -10 * --e) + 2) + i
    },
    easeInCirc: function (t, e, i, n, a) {
        return -n * (Math.sqrt(1 - (e /= a) * e) - 1) + i
    },
    easeOutCirc: function (t, e, i, n, a) {
        return n * Math.sqrt(1 - (e = e / a - 1) * e) + i
    },
    easeInOutCirc: function (t, e, i, n, a) {
        return (e /= a / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
    },
    easeInElastic: function (t, e, i, n, a) {
        var r = 1.70158, o = 0, s = n;
        if (0 == e)return i;
        if (1 == (e /= a))return i + n;
        if (o || (o = .3 * a), s < Math.abs(n)) {
            s = n;
            var r = o / 4
        } else var r = o / (2 * Math.PI) * Math.asin(n / s);
        return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * a - r) * Math.PI / o)) + i
    },
    easeOutElastic: function (t, e, i, n, a) {
        var r = 1.70158, o = 0, s = n;
        if (0 == e)return i;
        if (1 == (e /= a))return i + n;
        if (o || (o = .3 * a), s < Math.abs(n)) {
            s = n;
            var r = o / 4
        } else var r = o / (2 * Math.PI) * Math.asin(n / s);
        return s * Math.pow(2, -10 * e) * Math.sin(2 * (e * a - r) * Math.PI / o) + n + i
    },
    easeInOutElastic: function (t, e, i, n, a) {
        var r = 1.70158, o = 0, s = n;
        if (0 == e)return i;
        if (2 == (e /= a / 2))return i + n;
        if (o || (o = .3 * a * 1.5), s < Math.abs(n)) {
            s = n;
            var r = o / 4
        } else var r = o / (2 * Math.PI) * Math.asin(n / s);
        return 1 > e ? -.5 * s * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * a - r) * Math.PI / o) + i : s * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * a - r) * Math.PI / o) * .5 + n + i
    },
    easeInBack: function (t, e, i, n, a, r) {
        return void 0 == r && (r = 1.70158), n * (e /= a) * e * ((r + 1) * e - r) + i
    },
    easeOutBack: function (t, e, i, n, a, r) {
        return void 0 == r && (r = 1.70158), n * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + i
    },
    easeInOutBack: function (t, e, i, n, a, r) {
        return void 0 == r && (r = 1.70158), (e /= a / 2) < 1 ? n / 2 * e * e * (((r *= 1.525) + 1) * e - r) + i : n / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + i
    },
    easeInBounce: function (t, e, i, n, a) {
        return n - jQuery.easing.easeOutBounce(t, a - e, 0, n, a) + i
    },
    easeOutBounce: function (t, e, i, n, a) {
        return (e /= a) < 1 / 2.75 ? 7.5625 * n * e * e + i : 2 / 2.75 > e ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : 2.5 / 2.75 > e ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
    },
    easeInOutBounce: function (t, e, i, n, a) {
        return a / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, a) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - a, 0, n, a) + .5 * n + i
    }
}), jQuery.extend(jQuery.easing, {
    easeInOutMaterial: function (t, e, i, n, a) {
        return (e /= a / 2) < 1 ? n / 2 * e * e + i : n / 4 * ((e -= 2) * e * e + 2) + i
    }
}), !function (t) {
    function e(t) {
        var e = t.length, n = i.type(t);
        return "function" === n || i.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    if (!t.jQuery) {
        var i = function (t, e) {
            return new i.fn.init(t, e)
        };
        i.isWindow = function (t) {
            return null != t && t == t.window
        }, i.type = function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? a[o.call(t)] || "object" : typeof t
        }, i.isArray = Array.isArray || function (t) {
            return "array" === i.type(t)
        }, i.isPlainObject = function (t) {
            var e;
            if (!t || "object" !== i.type(t) || t.nodeType || i.isWindow(t))return !1;
            try {
                if (t.constructor && !r.call(t, "constructor") && !r.call(t.constructor.prototype, "isPrototypeOf"))return !1
            } catch (n) {
                return !1
            }
            for (e in t);
            return void 0 === e || r.call(t, e)
        }, i.each = function (t, i, n) {
            var a, r = 0, o = t.length, s = e(t);
            if (n) {
                if (s)for (; o > r && (a = i.apply(t[r], n), a !== !1); r++); else for (r in t)if (a = i.apply(t[r], n), a === !1)break
            } else if (s)for (; o > r && (a = i.call(t[r], r, t[r]), a !== !1); r++); else for (r in t)if (a = i.call(t[r], r, t[r]), a === !1)break;
            return t
        }, i.data = function (t, e, a) {
            if (void 0 === a) {
                var r = t[i.expando], o = r && n[r];
                if (void 0 === e)return o;
                if (o && e in o)return o[e]
            } else if (void 0 !== e) {
                var r = t[i.expando] || (t[i.expando] = ++i.uuid);
                return n[r] = n[r] || {}, n[r][e] = a, a
            }
        }, i.removeData = function (t, e) {
            var a = t[i.expando], r = a && n[a];
            r && i.each(e, function (t, e) {
                delete r[e]
            })
        }, i.extend = function () {
            var t, e, n, a, r, o, s = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== i.type(s) && (s = {}), l === u && (s = this, l--); u > l; l++)if (null != (r = arguments[l]))for (a in r)t = s[a], n = r[a], s !== n && (c && n && (i.isPlainObject(n) || (e = i.isArray(n))) ? (e ? (e = !1, o = t && i.isArray(t) ? t : []) : o = t && i.isPlainObject(t) ? t : {}, s[a] = i.extend(c, o, n)) : void 0 !== n && (s[a] = n));
            return s
        }, i.queue = function (t, n, a) {
            function r(t, i) {
                var n = i || [];
                return null != t && (e(Object(t)) ? !function (t, e) {
                    for (var i = +e.length, n = 0, a = t.length; i > n;)t[a++] = e[n++];
                    if (i !== i)for (; void 0 !== e[n];)t[a++] = e[n++];
                    return t.length = a, t
                }(n, "string" == typeof t ? [t] : t) : [].push.call(n, t)), n
            }

            if (t) {
                n = (n || "fx") + "queue";
                var o = i.data(t, n);
                return a ? (!o || i.isArray(a) ? o = i.data(t, n, r(a)) : o.push(a), o) : o || []
            }
        }, i.dequeue = function (t, e) {
            i.each(t.nodeType ? [t] : t, function (t, n) {
                e = e || "fx";
                var a = i.queue(n, e), r = a.shift();
                "inprogress" === r && (r = a.shift()), r && ("fx" === e && a.unshift("inprogress"), r.call(n, function () {
                    i.dequeue(n, e)
                }))
            })
        }, i.fn = i.prototype = {
            init: function (t) {
                if (t.nodeType)return this[0] = t, this;
                throw new Error("Not a DOM node.")
            }, offset: function () {
                var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {top: 0, left: 0};
                return {
                    top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            }, position: function () {
                function t() {
                    for (var t = this.offsetParent || document; t && "html" === !t.nodeType.toLowerCase && "static" === t.style.position;)t = t.offsetParent;
                    return t || document
                }

                var e = this[0], t = t.apply(e), n = this.offset(), a = /^(?:body|html)$/i.test(t.nodeName) ? {
                    top: 0,
                    left: 0
                } : i(t).offset();
                return n.top -= parseFloat(e.style.marginTop) || 0, n.left -= parseFloat(e.style.marginLeft) || 0, t.style && (a.top += parseFloat(t.style.borderTopWidth) || 0, a.left += parseFloat(t.style.borderLeftWidth) || 0), {
                    top: n.top - a.top,
                    left: n.left - a.left
                }
            }
        };
        var n = {};
        i.expando = "velocity" + (new Date).getTime(), i.uuid = 0;
        for (var a = {}, r = a.hasOwnProperty, o = a.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++)a["[object " + s[l] + "]"] = s[l].toLowerCase();
        i.fn.init.prototype = i.fn, t.Velocity = {Utilities: i}
    }
}(window), function (t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : t()
}(function () {
    return function (t, e, i, n) {
        function a(t) {
            for (var e = -1, i = t ? t.length : 0, n = []; ++e < i;) {
                var a = t[e];
                a && n.push(a)
            }
            return n
        }

        function r(t) {
            return v.isWrapped(t) ? t = [].slice.call(t) : v.isNode(t) && (t = [t]), t
        }

        function o(t) {
            var e = p.data(t, "velocity");
            return null === e ? n : e
        }

        function s(t) {
            return function (e) {
                return Math.round(e * t) * (1 / t)
            }
        }

        function l(t, i, n, a) {
            function r(t, e) {
                return 1 - 3 * e + 3 * t
            }

            function o(t, e) {
                return 3 * e - 6 * t
            }

            function s(t) {
                return 3 * t
            }

            function l(t, e, i) {
                return ((r(e, i) * t + o(e, i)) * t + s(e)) * t
            }

            function u(t, e, i) {
                return 3 * r(e, i) * t * t + 2 * o(e, i) * t + s(e)
            }

            function c(e, i) {
                for (var a = 0; v > a; ++a) {
                    var r = u(i, t, n);
                    if (0 === r)return i;
                    var o = l(i, t, n) - e;
                    i -= o / r
                }
                return i
            }

            function d() {
                for (var e = 0; b > e; ++e)k[e] = l(e * w, t, n)
            }

            function p(e, i, a) {
                var r, o, s = 0;
                do o = i + (a - i) / 2, r = l(o, t, n) - e, r > 0 ? a = o : i = o; while (Math.abs(r) > m && ++s < y);
                return o
            }

            function f(e) {
                for (var i = 0, a = 1, r = b - 1; a != r && k[a] <= e; ++a)i += w;
                --a;
                var o = (e - k[a]) / (k[a + 1] - k[a]), s = i + o * w, l = u(s, t, n);
                return l >= g ? c(e, s) : 0 == l ? s : p(e, i, i + w)
            }

            function h() {
                S = !0, (t != i || n != a) && d()
            }

            var v = 4, g = .001, m = 1e-7, y = 10, b = 11, w = 1 / (b - 1), x = "Float32Array"in e;
            if (4 !== arguments.length)return !1;
            for (var C = 0; 4 > C; ++C)if ("number" != typeof arguments[C] || isNaN(arguments[C]) || !isFinite(arguments[C]))return !1;
            t = Math.min(t, 1), n = Math.min(n, 1), t = Math.max(t, 0), n = Math.max(n, 0);
            var k = x ? new Float32Array(b) : new Array(b), S = !1, T = function (e) {
                return S || h(), t === i && n === a ? e : 0 === e ? 0 : 1 === e ? 1 : l(f(e), i, a)
            };
            T.getControlPoints = function () {
                return [{x: t, y: i}, {x: n, y: a}]
            };
            var O = "generateBezier(" + [t, i, n, a] + ")";
            return T.toString = function () {
                return O
            }, T
        }

        function u(t, e) {
            var i = t;
            return v.isString(t) ? b.Easings[t] || (i = !1) : i = v.isArray(t) && 1 === t.length ? s.apply(null, t) : v.isArray(t) && 2 === t.length ? w.apply(null, t.concat([e])) : v.isArray(t) && 4 === t.length ? l.apply(null, t) : !1, i === !1 && (i = b.Easings[b.defaults.easing] ? b.defaults.easing : y), i
        }

        function c(t) {
            if (t) {
                var e = (new Date).getTime(), i = b.State.calls.length;
                i > 1e4 && (b.State.calls = a(b.State.calls));
                for (var r = 0; i > r; r++)if (b.State.calls[r]) {
                    var s = b.State.calls[r], l = s[0], u = s[2], f = s[3], h = !!f, g = null;
                    f || (f = b.State.calls[r][3] = e - 16);
                    for (var m = Math.min((e - f) / u.duration, 1), y = 0, w = l.length; w > y; y++) {
                        var C = l[y], S = C.element;
                        if (o(S)) {
                            var T = !1;
                            if (u.display !== n && null !== u.display && "none" !== u.display) {
                                if ("flex" === u.display) {
                                    var O = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                    p.each(O, function (t, e) {
                                        x.setPropertyValue(S, "display", e)
                                    })
                                }
                                x.setPropertyValue(S, "display", u.display)
                            }
                            u.visibility !== n && "hidden" !== u.visibility && x.setPropertyValue(S, "visibility", u.visibility);
                            for (var P in C)if ("element" !== P) {
                                var A, E = C[P], q = v.isString(E.easing) ? b.Easings[E.easing] : E.easing;
                                if (1 === m)A = E.endValue; else {
                                    var I = E.endValue - E.startValue;
                                    if (A = E.startValue + I * q(m, u, I), !h && A === E.currentValue)continue
                                }
                                if (E.currentValue = A, "tween" === P)g = A; else {
                                    if (x.Hooks.registered[P]) {
                                        var _ = x.Hooks.getRoot(P), V = o(S).rootPropertyValueCache[_];
                                        V && (E.rootPropertyValue = V)
                                    }
                                    var M = x.setPropertyValue(S, P, E.currentValue + (0 === parseFloat(A) ? "" : E.unitType), E.rootPropertyValue, E.scrollData);
                                    x.Hooks.registered[P] && (o(S).rootPropertyValueCache[_] = x.Normalizations.registered[_] ? x.Normalizations.registered[_]("extract", null, M[1]) : M[1]), "transform" === M[0] && (T = !0)
                                }
                            }
                            u.mobileHA && o(S).transformCache.translate3d === n && (o(S).transformCache.translate3d = "(0px, 0px, 0px)", T = !0), T && x.flushTransformCache(S)
                        }
                    }
                    u.display !== n && "none" !== u.display && (b.State.calls[r][2].display = !1), u.visibility !== n && "hidden" !== u.visibility && (b.State.calls[r][2].visibility = !1), u.progress && u.progress.call(s[1], s[1], m, Math.max(0, f + u.duration - e), f, g), 1 === m && d(r)
                }
            }
            b.State.isTicking && k(c)
        }

        function d(t, e) {
            if (!b.State.calls[t])return !1;
            for (var i = b.State.calls[t][0], a = b.State.calls[t][1], r = b.State.calls[t][2], s = b.State.calls[t][4], l = !1, u = 0, c = i.length; c > u; u++) {
                var d = i[u].element;
                if (e || r.loop || ("none" === r.display && x.setPropertyValue(d, "display", r.display), "hidden" === r.visibility && x.setPropertyValue(d, "visibility", r.visibility)), r.loop !== !0 && (p.queue(d)[1] === n || !/\.velocityQueueEntryFlag/i.test(p.queue(d)[1])) && o(d)) {
                    o(d).isAnimating = !1, o(d).rootPropertyValueCache = {};
                    var f = !1;
                    p.each(x.Lists.transforms3D, function (t, e) {
                        var i = /^scale/.test(e) ? 1 : 0, a = o(d).transformCache[e];
                        o(d).transformCache[e] !== n && new RegExp("^\\(" + i + "[^.]").test(a) && (f = !0, delete o(d).transformCache[e])
                    }), r.mobileHA && (f = !0, delete o(d).transformCache.translate3d), f && x.flushTransformCache(d), x.Values.removeClass(d, "velocity-animating")
                }
                if (!e && r.complete && !r.loop && u === c - 1)try {
                    r.complete.call(a, a)
                } catch (h) {
                    setTimeout(function () {
                        throw h
                    }, 1)
                }
                s && r.loop !== !0 && s(a), o(d) && r.loop === !0 && !e && (p.each(o(d).tweensContainer, function (t, e) {
                    /^rotate/.test(t) && 360 === parseFloat(e.endValue) && (e.endValue = 0, e.startValue = 360), /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0, e.startValue = 100)
                }), {loop: !0, delay: r.delay}), r.queue !== !1 && p.dequeue(d, r.queue)
            }
            b.State.calls[t] = !1;
            for (var v = 0, g = b.State.calls.length; g > v; v++)if (b.State.calls[v] !== !1) {
                l = !0;
                break
            }
            l === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = [])
        }

        var p, f = function () {
            if (i.documentMode)return i.documentMode;
            for (var t = 7; t > 4; t--) {
                var e = i.createElement("div");
                if (e.innerHTML = "<!--[if IE " + t + "]><span></span><![endif]-->", e.getElementsByTagName("span").length)return e = null, t
            }
            return n
        }(), h = function () {
            var t = 0;
            return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function (e) {
                    var i, n = (new Date).getTime();
                    return i = Math.max(0, 16 - (n - t)), t = n + i, setTimeout(function () {
                        e(n + i)
                    }, i)
                }
        }(), v = {
            isString: function (t) {
                return "string" == typeof t
            }, isArray: Array.isArray || function (t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }, isFunction: function (t) {
                return "[object Function]" === Object.prototype.toString.call(t)
            }, isNode: function (t) {
                return t && t.nodeType
            }, isNodeList: function (t) {
                return "object" == typeof t && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t)) && t.length !== n && (0 === t.length || "object" == typeof t[0] && t[0].nodeType > 0)
            }, isWrapped: function (t) {
                return t && (t.jquery || e.Zepto && e.Zepto.zepto.isZ(t))
            }, isSVG: function (t) {
                return e.SVGElement && t instanceof e.SVGElement
            }, isEmptyObject: function (t) {
                for (var e in t)return !1;
                return !0
            }
        }, g = !1;
        if (t.fn && t.fn.jquery ? (p = t, g = !0) : p = e.Velocity.Utilities, 8 >= f && !g)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= f)return void(jQuery.fn.velocity = jQuery.fn.animate);
        var m = 400, y = "swing", b = {
            State: {
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                isAndroid: /Android/i.test(navigator.userAgent),
                isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                isChrome: e.chrome,
                isFirefox: /Firefox/i.test(navigator.userAgent),
                prefixElement: i.createElement("div"),
                prefixMatches: {},
                scrollAnchor: null,
                scrollPropertyLeft: null,
                scrollPropertyTop: null,
                isTicking: !1,
                calls: []
            },
            CSS: {},
            Utilities: p,
            Redirects: {},
            Easings: {},
            Promise: e.Promise,
            defaults: {
                queue: "",
                duration: m,
                easing: y,
                begin: n,
                complete: n,
                progress: n,
                display: n,
                visibility: n,
                loop: !1,
                delay: !1,
                mobileHA: !0,
                _cacheValues: !0
            },
            init: function (t) {
                p.data(t, "velocity", {
                    isSVG: v.isSVG(t),
                    isAnimating: !1,
                    computedStyle: null,
                    tweensContainer: null,
                    rootPropertyValueCache: {},
                    transformCache: {}
                })
            },
            hook: null,
            mock: !1,
            version: {major: 1, minor: 2, patch: 2},
            debug: !1
        };
        e.pageYOffset !== n ? (b.State.scrollAnchor = e, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
        var w = function () {
            function t(t) {
                return -t.tension * t.x - t.friction * t.v
            }

            function e(e, i, n) {
                var a = {x: e.x + n.dx * i, v: e.v + n.dv * i, tension: e.tension, friction: e.friction};
                return {dx: a.v, dv: t(a)}
            }

            function i(i, n) {
                var a = {
                    dx: i.v,
                    dv: t(i)
                }, r = e(i, .5 * n, a), o = e(i, .5 * n, r), s = e(i, n, o), l = 1 / 6 * (a.dx + 2 * (r.dx + o.dx) + s.dx), u = 1 / 6 * (a.dv + 2 * (r.dv + o.dv) + s.dv);
                return i.x = i.x + l * n, i.v = i.v + u * n, i
            }

            return function n(t, e, a) {
                var r, o, s, l = {x: -1, v: 0, tension: null, friction: null}, u = [0], c = 0, d = 1e-4, p = .016;
                for (t = parseFloat(t) || 500, e = parseFloat(e) || 20, a = a || null, l.tension = t, l.friction = e, r = null !== a, r ? (c = n(t, e), o = c / a * p) : o = p; s = i(s || l, o), u.push(1 + s.x), c += 16, Math.abs(s.x) > d && Math.abs(s.v) > d;);
                return r ? function (t) {
                    return u[t * (u.length - 1) | 0]
                } : c
            }
        }();
        b.Easings = {
            linear: function (t) {
                return t
            }, swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }, spring: function (t) {
                return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t)
            }
        }, p.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (t, e) {
            b.Easings[e[0]] = l.apply(null, e[1])
        });
        var x = b.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                }, registered: {}, register: function () {
                    for (var t = 0; t < x.Lists.colors.length; t++) {
                        var e = "color" === x.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";
                        x.Hooks.templates[x.Lists.colors[t]] = ["Red Green Blue Alpha", e]
                    }
                    var i, n, a;
                    if (f)for (i in x.Hooks.templates) {
                        n = x.Hooks.templates[i], a = n[0].split(" ");
                        var r = n[1].match(x.RegEx.valueSplit);
                        "Color" === a[0] && (a.push(a.shift()), r.push(r.shift()), x.Hooks.templates[i] = [a.join(" "), r.join(" ")])
                    }
                    for (i in x.Hooks.templates) {
                        n = x.Hooks.templates[i], a = n[0].split(" ");
                        for (var t in a) {
                            var o = i + a[t], s = t;
                            x.Hooks.registered[o] = [i, s]
                        }
                    }
                }, getRoot: function (t) {
                    var e = x.Hooks.registered[t];
                    return e ? e[0] : t
                }, cleanRootPropertyValue: function (t, e) {
                    return x.RegEx.valueUnwrap.test(e) && (e = e.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(e) && (e = x.Hooks.templates[t][1]), e
                }, extractValue: function (t, e) {
                    var i = x.Hooks.registered[t];
                    if (i) {
                        var n = i[0], a = i[1];
                        return e = x.Hooks.cleanRootPropertyValue(n, e), e.toString().match(x.RegEx.valueSplit)[a]
                    }
                    return e
                }, injectValue: function (t, e, i) {
                    var n = x.Hooks.registered[t];
                    if (n) {
                        var a, r, o = n[0], s = n[1];
                        return i = x.Hooks.cleanRootPropertyValue(o, i), a = i.toString().match(x.RegEx.valueSplit), a[s] = e, r = a.join(" ")
                    }
                    return i
                }
            },
            Normalizations: {
                registered: {
                    clip: function (t, e, i) {
                        switch (t) {
                            case"name":
                                return "clip";
                            case"extract":
                                var n;
                                return x.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : (n = i.toString().match(x.RegEx.valueUnwrap), n = n ? n[1].replace(/,(\s+)?/g, " ") : i), n;
                            case"inject":
                                return "rect(" + i + ")"
                        }
                    }, blur: function (t, e, i) {
                        switch (t) {
                            case"name":
                                return b.State.isFirefox ? "filter" : "-webkit-filter";
                            case"extract":
                                var n = parseFloat(i);
                                if (!n && 0 !== n) {
                                    var a = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    n = a ? a[1] : 0
                                }
                                return n;
                            case"inject":
                                return parseFloat(i) ? "blur(" + i + ")" : "none"
                        }
                    }, opacity: function (t, e, i) {
                        if (8 >= f)switch (t) {
                            case"name":
                                return "filter";
                            case"extract":
                                var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                return i = n ? n[1] / 100 : 1;
                            case"inject":
                                return e.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                        } else switch (t) {
                            case"name":
                                return "opacity";
                            case"extract":
                                return i;
                            case"inject":
                                return i
                        }
                    }
                }, register: function () {
                    9 >= f || b.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                    for (var t = 0; t < x.Lists.transformsBase.length; t++)!function () {
                        var e = x.Lists.transformsBase[t];
                        x.Normalizations.registered[e] = function (t, i, a) {
                            switch (t) {
                                case"name":
                                    return "transform";
                                case"extract":
                                    return o(i) === n || o(i).transformCache[e] === n ? /^scale/i.test(e) ? 1 : 0 : o(i).transformCache[e].replace(/[()]/g, "");
                                case"inject":
                                    var r = !1;
                                    switch (e.substr(0, e.length - 1)) {
                                        case"translate":
                                            r = !/(%|px|em|rem|vw|vh|\d)$/i.test(a);
                                            break;
                                        case"scal":
                                        case"scale":
                                            b.State.isAndroid && o(i).transformCache[e] === n && 1 > a && (a = 1), r = !/(\d)$/i.test(a);
                                            break;
                                        case"skew":
                                            r = !/(deg|\d)$/i.test(a);
                                            break;
                                        case"rotate":
                                            r = !/(deg|\d)$/i.test(a)
                                    }
                                    return r || (o(i).transformCache[e] = "(" + a + ")"), o(i).transformCache[e]
                            }
                        }
                    }();
                    for (var t = 0; t < x.Lists.colors.length; t++)!function () {
                        var e = x.Lists.colors[t];
                        x.Normalizations.registered[e] = function (t, i, a) {
                            switch (t) {
                                case"name":
                                    return e;
                                case"extract":
                                    var r;
                                    if (x.RegEx.wrappedValueAlreadyExtracted.test(a))r = a; else {
                                        var o, s = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(a) ? o = s[a] !== n ? s[a] : s.black : x.RegEx.isHex.test(a) ? o = "rgb(" + x.Values.hexToRgb(a).join(" ") + ")" : /^rgba?\(/i.test(a) || (o = s.black), r = (o || a).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return 8 >= f || 3 !== r.split(" ").length || (r += " 1"), r;
                                case"inject":
                                    return 8 >= f ? 4 === a.split(" ").length && (a = a.split(/\s+/).slice(0, 3).join(" ")) : 3 === a.split(" ").length && (a += " 1"), (8 >= f ? "rgb" : "rgba") + "(" + a.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                            }
                        }
                    }()
                }
            },
            Names: {
                camelCase: function (t) {
                    return t.replace(/-(\w)/g, function (t, e) {
                        return e.toUpperCase()
                    })
                }, SVGAttribute: function (t) {
                    var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (f || b.State.isAndroid && !b.State.isChrome) && (e += "|transform"), new RegExp("^(" + e + ")$", "i").test(t)
                }, prefixCheck: function (t) {
                    if (b.State.prefixMatches[t])return [b.State.prefixMatches[t], !0];
                    for (var e = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = e.length; n > i; i++) {
                        var a;
                        if (a = 0 === i ? t : e[i] + t.replace(/^\w/, function (t) {
                                return t.toUpperCase()
                            }), v.isString(b.State.prefixElement.style[a]))return b.State.prefixMatches[t] = a, [a, !0]
                    }
                    return [t, !1]
                }
            },
            Values: {
                hexToRgb: function (t) {
                    var e, i = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return t = t.replace(i, function (t, e, i, n) {
                        return e + e + i + i + n + n
                    }), e = n.exec(t), e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0]
                }, isCSSNullValue: function (t) {
                    return 0 == t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)
                }, getUnitType: function (t) {
                    return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
                }, getDisplayType: function (t) {
                    var e = t && t.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block"
                }, addClass: function (t, e) {
                    t.classList ? t.classList.add(e) : t.className += (t.className.length ? " " : "") + e
                }, removeClass: function (t, e) {
                    t.classList ? t.classList.remove(e) : t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                }
            },
            getPropertyValue: function (t, i, a, r) {
                function s(t, i) {
                    function a() {
                        u && x.setPropertyValue(t, "display", "none")
                    }

                    var l = 0;
                    if (8 >= f)l = p.css(t, i); else {
                        var u = !1;
                        if (/^(width|height)$/.test(i) && 0 === x.getPropertyValue(t, "display") && (u = !0, x.setPropertyValue(t, "display", x.Values.getDisplayType(t))), !r) {
                            if ("height" === i && "border-box" !== x.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                var c = t.offsetHeight - (parseFloat(x.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingBottom")) || 0);
                                return a(), c
                            }
                            if ("width" === i && "border-box" !== x.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                var d = t.offsetWidth - (parseFloat(x.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingRight")) || 0);
                                return a(), d
                            }
                        }
                        var h;
                        h = o(t) === n ? e.getComputedStyle(t, null) : o(t).computedStyle ? o(t).computedStyle : o(t).computedStyle = e.getComputedStyle(t, null), "borderColor" === i && (i = "borderTopColor"), l = 9 === f && "filter" === i ? h.getPropertyValue(i) : h[i], ("" === l || null === l) && (l = t.style[i]), a()
                    }
                    if ("auto" === l && /^(top|right|bottom|left)$/i.test(i)) {
                        var v = s(t, "position");
                        ("fixed" === v || "absolute" === v && /top|left/i.test(i)) && (l = p(t).position()[i] + "px")
                    }
                    return l
                }

                var l;
                if (x.Hooks.registered[i]) {
                    var u = i, c = x.Hooks.getRoot(u);
                    a === n && (a = x.getPropertyValue(t, x.Names.prefixCheck(c)[0])), x.Normalizations.registered[c] && (a = x.Normalizations.registered[c]("extract", t, a)), l = x.Hooks.extractValue(u, a)
                } else if (x.Normalizations.registered[i]) {
                    var d, h;
                    d = x.Normalizations.registered[i]("name", t), "transform" !== d && (h = s(t, x.Names.prefixCheck(d)[0]), x.Values.isCSSNullValue(h) && x.Hooks.templates[i] && (h = x.Hooks.templates[i][1])), l = x.Normalizations.registered[i]("extract", t, h)
                }
                if (!/^[\d-]/.test(l))if (o(t) && o(t).isSVG && x.Names.SVGAttribute(i))if (/^(height|width)$/i.test(i))try {
                    l = t.getBBox()[i]
                } catch (v) {
                    l = 0
                } else l = t.getAttribute(i); else l = s(t, x.Names.prefixCheck(i)[0]);
                return x.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + i + ": " + l), l
            },
            setPropertyValue: function (t, i, n, a, r) {
                var s = i;
                if ("scroll" === i)r.container ? r.container["scroll" + r.direction] = n : "Left" === r.direction ? e.scrollTo(n, r.alternateValue) : e.scrollTo(r.alternateValue, n); else if (x.Normalizations.registered[i] && "transform" === x.Normalizations.registered[i]("name", t))x.Normalizations.registered[i]("inject", t, n), s = "transform", n = o(t).transformCache[i]; else {
                    if (x.Hooks.registered[i]) {
                        var l = i, u = x.Hooks.getRoot(i);
                        a = a || x.getPropertyValue(t, u), n = x.Hooks.injectValue(l, n, a), i = u
                    }
                    if (x.Normalizations.registered[i] && (n = x.Normalizations.registered[i]("inject", t, n), i = x.Normalizations.registered[i]("name", t)), s = x.Names.prefixCheck(i)[0], 8 >= f)try {
                        t.style[s] = n
                    } catch (c) {
                        b.debug && console.log("Browser does not support [" + n + "] for [" + s + "]")
                    } else o(t) && o(t).isSVG && x.Names.SVGAttribute(i) ? t.setAttribute(i, n) : t.style[s] = n;
                    b.debug >= 2 && console.log("Set " + i + " (" + s + "): " + n)
                }
                return [s, n]
            },
            flushTransformCache: function (t) {
                function e(e) {
                    return parseFloat(x.getPropertyValue(t, e))
                }

                var i = "";
                if ((f || b.State.isAndroid && !b.State.isChrome) && o(t).isSVG) {
                    var n = {
                        translate: [e("translateX"), e("translateY")],
                        skewX: [e("skewX")],
                        skewY: [e("skewY")],
                        scale: 1 !== e("scale") ? [e("scale"), e("scale")] : [e("scaleX"), e("scaleY")],
                        rotate: [e("rotateZ"), 0, 0]
                    };
                    p.each(o(t).transformCache, function (t) {
                        /^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"), n[t] && (i += t + "(" + n[t].join(" ") + ") ", delete n[t])
                    })
                } else {
                    var a, r;
                    p.each(o(t).transformCache, function (e) {
                        return a = o(t).transformCache[e], "transformPerspective" === e ? (r = a, !0) : (9 === f && "rotateZ" === e && (e = "rotate"), void(i += e + a + " "))
                    }), r && (i = "perspective" + r + " " + i)
                }
                x.setPropertyValue(t, "transform", i)
            }
        };
        x.Hooks.register(), x.Normalizations.register(), b.hook = function (t, e, i) {
            var a = n;
            return t = r(t), p.each(t, function (t, r) {
                if (o(r) === n && b.init(r), i === n)a === n && (a = b.CSS.getPropertyValue(r, e)); else {
                    var s = b.CSS.setPropertyValue(r, e, i);
                    "transform" === s[0] && b.CSS.flushTransformCache(r), a = s
                }
            }), a
        };
        var C = function () {
            function t() {
                return s ? P.promise || null : l
            }

            function a() {
                function t() {
                    function t(t, e) {
                        var i = n, a = n, o = n;
                        return v.isArray(t) ? (i = t[0], !v.isArray(t[1]) && /^[\d-]/.test(t[1]) || v.isFunction(t[1]) || x.RegEx.isHex.test(t[1]) ? o = t[1] : (v.isString(t[1]) && !x.RegEx.isHex.test(t[1]) || v.isArray(t[1])) && (a = e ? t[1] : u(t[1], s.duration), t[2] !== n && (o = t[2]))) : i = t, e || (a = a || s.easing), v.isFunction(i) && (i = i.call(r, S, k)), v.isFunction(o) && (o = o.call(r, S, k)), [i || 0, a, o]
                    }

                    function d(t, e) {
                        var i, n;
                        return n = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (t) {
                            return i = t, ""
                        }), i || (i = x.Values.getUnitType(t)), [n, i]
                    }

                    function f() {
                        var t = {
                            myParent: r.parentNode || i.body,
                            position: x.getPropertyValue(r, "position"),
                            fontSize: x.getPropertyValue(r, "fontSize")
                        }, n = t.position === M.lastPosition && t.myParent === M.lastParent, a = t.fontSize === M.lastFontSize;
                        M.lastParent = t.myParent, M.lastPosition = t.position, M.lastFontSize = t.fontSize;
                        var s = 100, l = {};
                        if (a && n)l.emToPx = M.lastEmToPx, l.percentToPxWidth = M.lastPercentToPxWidth, l.percentToPxHeight = M.lastPercentToPxHeight; else {
                            var u = o(r).isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                            b.init(u), t.myParent.appendChild(u), p.each(["overflow", "overflowX", "overflowY"], function (t, e) {
                                b.CSS.setPropertyValue(u, e, "hidden")
                            }), b.CSS.setPropertyValue(u, "position", t.position), b.CSS.setPropertyValue(u, "fontSize", t.fontSize), b.CSS.setPropertyValue(u, "boxSizing", "content-box"), p.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (t, e) {
                                b.CSS.setPropertyValue(u, e, s + "%")
                            }), b.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = M.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = M.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = M.lastEmToPx = (parseFloat(x.getPropertyValue(u, "paddingLeft")) || 1) / s, t.myParent.removeChild(u)
                        }
                        return null === M.remToPx && (M.remToPx = parseFloat(x.getPropertyValue(i.body, "fontSize")) || 16), null === M.vwToPx && (M.vwToPx = parseFloat(e.innerWidth) / 100, M.vhToPx = parseFloat(e.innerHeight) / 100), l.remToPx = M.remToPx, l.vwToPx = M.vwToPx, l.vhToPx = M.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), r), l
                    }

                    if (s.begin && 0 === S)try {
                        s.begin.call(h, h)
                    } catch (m) {
                        setTimeout(function () {
                            throw m
                        }, 1)
                    }
                    if ("scroll" === A) {
                        var w, C, T, O = /^x$/i.test(s.axis) ? "Left" : "Top", E = parseFloat(s.offset) || 0;
                        s.container ? v.isWrapped(s.container) || v.isNode(s.container) ? (s.container = s.container[0] || s.container, w = s.container["scroll" + O], T = w + p(r).position()[O.toLowerCase()] + E) : s.container = null : (w = b.State.scrollAnchor[b.State["scrollProperty" + O]], C = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === O ? "Top" : "Left")]], T = p(r).offset()[O.toLowerCase()] + E), l = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: w,
                                currentValue: w,
                                endValue: T,
                                unitType: "",
                                easing: s.easing,
                                scrollData: {container: s.container, direction: O, alternateValue: C}
                            }, element: r
                        }, b.debug && console.log("tweensContainer (scroll): ", l.scroll, r)
                    } else if ("reverse" === A) {
                        if (!o(r).tweensContainer)return void p.dequeue(r, s.queue);
                        "none" === o(r).opts.display && (o(r).opts.display = "auto"), "hidden" === o(r).opts.visibility && (o(r).opts.visibility = "visible"), o(r).opts.loop = !1, o(r).opts.begin = null, o(r).opts.complete = null, y.easing || delete s.easing, y.duration || delete s.duration, s = p.extend({}, o(r).opts, s);
                        var q = p.extend(!0, {}, o(r).tweensContainer);
                        for (var I in q)if ("element" !== I) {
                            var _ = q[I].startValue;
                            q[I].startValue = q[I].currentValue = q[I].endValue, q[I].endValue = _, v.isEmptyObject(y) || (q[I].easing = s.easing), b.debug && console.log("reverse tweensContainer (" + I + "): " + JSON.stringify(q[I]), r)
                        }
                        l = q
                    } else if ("start" === A) {
                        var q;
                        o(r).tweensContainer && o(r).isAnimating === !0 && (q = o(r).tweensContainer), p.each(g, function (e, i) {
                            if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(e)) {
                                var a = t(i, !0), r = a[0], o = a[1], s = a[2];
                                if (x.RegEx.isHex.test(r)) {
                                    for (var l = ["Red", "Green", "Blue"], u = x.Values.hexToRgb(r), c = s ? x.Values.hexToRgb(s) : n, d = 0; d < l.length; d++) {
                                        var p = [u[d]];
                                        o && p.push(o), c !== n && p.push(c[d]), g[e + l[d]] = p
                                    }
                                    delete g[e]
                                }
                            }
                        });
                        for (var V in g) {
                            var $ = t(g[V]), D = $[0], z = $[1], Q = $[2];
                            V = x.Names.camelCase(V);
                            var L = x.Hooks.getRoot(V), F = !1;
                            if (o(r).isSVG || "tween" === L || x.Names.prefixCheck(L)[1] !== !1 || x.Normalizations.registered[L] !== n) {
                                (s.display !== n && null !== s.display && "none" !== s.display || s.visibility !== n && "hidden" !== s.visibility) && /opacity|filter/.test(V) && !Q && 0 !== D && (Q = 0), s._cacheValues && q && q[V] ? (Q === n && (Q = q[V].endValue + q[V].unitType), F = o(r).rootPropertyValueCache[L]) : x.Hooks.registered[V] ? Q === n ? (F = x.getPropertyValue(r, L), Q = x.getPropertyValue(r, V, F)) : F = x.Hooks.templates[L][1] : Q === n && (Q = x.getPropertyValue(r, V));
                                var N, W, R, H = !1;
                                if (N = d(V, Q), Q = N[0], R = N[1], N = d(V, D), D = N[0].replace(/^([+-\/*])=/, function (t, e) {
                                        return H = e, ""
                                    }), W = N[1], Q = parseFloat(Q) || 0, D = parseFloat(D) || 0, "%" === W && (/^(fontSize|lineHeight)$/.test(V) ? (D /= 100, W = "em") : /^scale/.test(V) ? (D /= 100, W = "") : /(Red|Green|Blue)$/i.test(V) && (D = D / 100 * 255, W = "")), /[\/*]/.test(H))W = R; else if (R !== W && 0 !== Q)if (0 === D)W = R; else {
                                    a = a || f();
                                    var X = /margin|padding|left|right|width|text|word|letter/i.test(V) || /X$/.test(V) || "x" === V ? "x" : "y";
                                    switch (R) {
                                        case"%":
                                            Q *= "x" === X ? a.percentToPxWidth : a.percentToPxHeight;
                                            break;
                                        case"px":
                                            break;
                                        default:
                                            Q *= a[R + "ToPx"]
                                    }
                                    switch (W) {
                                        case"%":
                                            Q *= 1 / ("x" === X ? a.percentToPxWidth : a.percentToPxHeight);
                                            break;
                                        case"px":
                                            break;
                                        default:
                                            Q *= 1 / a[W + "ToPx"]
                                    }
                                }
                                switch (H) {
                                    case"+":
                                        D = Q + D;
                                        break;
                                    case"-":
                                        D = Q - D;
                                        break;
                                    case"*":
                                        D = Q * D;
                                        break;
                                    case"/":
                                        D = Q / D
                                }
                                l[V] = {
                                    rootPropertyValue: F,
                                    startValue: Q,
                                    currentValue: Q,
                                    endValue: D,
                                    unitType: W,
                                    easing: z
                                }, b.debug && console.log("tweensContainer (" + V + "): " + JSON.stringify(l[V]), r)
                            } else b.debug && console.log("Skipping [" + L + "] due to a lack of browser support.")
                        }
                        l.element = r
                    }
                    l.element && (x.Values.addClass(r, "velocity-animating"), j.push(l), "" === s.queue && (o(r).tweensContainer = l, o(r).opts = s), o(r).isAnimating = !0, S === k - 1 ? (b.State.calls.push([j, h, s, null, P.resolver]), b.State.isTicking === !1 && (b.State.isTicking = !0, c())) : S++)
                }

                var a, r = this, s = p.extend({}, b.defaults, y), l = {};
                switch (o(r) === n && b.init(r), parseFloat(s.delay) && s.queue !== !1 && p.queue(r, s.queue, function (t) {
                    b.velocityQueueEntryFlag = !0, o(r).delayTimer = {
                        setTimeout: setTimeout(t, parseFloat(s.delay)),
                        next: t
                    }
                }), s.duration.toString().toLowerCase()) {
                    case"fast":
                        s.duration = 200;
                        break;
                    case"normal":
                        s.duration = m;
                        break;
                    case"slow":
                        s.duration = 600;
                        break;
                    default:
                        s.duration = parseFloat(s.duration) || 1
                }
                b.mock !== !1 && (b.mock === !0 ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1, s.delay *= parseFloat(b.mock) || 1)), s.easing = u(s.easing, s.duration), s.begin && !v.isFunction(s.begin) && (s.begin = null), s.progress && !v.isFunction(s.progress) && (s.progress = null), s.complete && !v.isFunction(s.complete) && (s.complete = null), s.display !== n && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(r))), s.visibility !== n && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread, s.queue === !1 ? s.delay ? setTimeout(t, s.delay) : t() : p.queue(r, s.queue, function (e, i) {
                    return i === !0 ? (P.promise && P.resolver(h), !0) : (b.velocityQueueEntryFlag = !0, void t(e))
                }), "" !== s.queue && "fx" !== s.queue || "inprogress" === p.queue(r)[0] || p.dequeue(r)
            }

            var s, l, f, h, g, y, w = arguments[0] && (arguments[0].p || p.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || v.isString(arguments[0].properties));
            if (v.isWrapped(this) ? (s = !1, f = 0, h = this, l = this) : (s = !0, f = 1, h = w ? arguments[0].elements || arguments[0].e : arguments[0]), h = r(h)) {
                w ? (g = arguments[0].properties || arguments[0].p, y = arguments[0].options || arguments[0].o) : (g = arguments[f], y = arguments[f + 1]);
                var k = h.length, S = 0;
                if (!/^(stop|finish)$/i.test(g) && !p.isPlainObject(y)) {
                    var T = f + 1;
                    y = {};
                    for (var O = T; O < arguments.length; O++)v.isArray(arguments[O]) || !/^(fast|normal|slow)$/i.test(arguments[O]) && !/^\d/.test(arguments[O]) ? v.isString(arguments[O]) || v.isArray(arguments[O]) ? y.easing = arguments[O] : v.isFunction(arguments[O]) && (y.complete = arguments[O]) : y.duration = arguments[O]
                }
                var P = {promise: null, resolver: null, rejecter: null};
                s && b.Promise && (P.promise = new b.Promise(function (t, e) {
                    P.resolver = t, P.rejecter = e
                }));
                var A;
                switch (g) {
                    case"scroll":
                        A = "scroll";
                        break;
                    case"reverse":
                        A = "reverse";
                        break;
                    case"finish":
                    case"stop":
                        p.each(h, function (t, e) {
                            o(e) && o(e).delayTimer && (clearTimeout(o(e).delayTimer.setTimeout), o(e).delayTimer.next && o(e).delayTimer.next(), delete o(e).delayTimer)
                        });
                        var E = [];
                        return p.each(b.State.calls, function (t, e) {
                            e && p.each(e[1], function (i, a) {
                                var r = y === n ? "" : y;
                                return r === !0 || e[2].queue === r || y === n && e[2].queue === !1 ? void p.each(h, function (i, n) {
                                    n === a && ((y === !0 || v.isString(y)) && (p.each(p.queue(n, v.isString(y) ? y : ""), function (t, e) {
                                        v.isFunction(e) && e(null, !0)
                                    }), p.queue(n, v.isString(y) ? y : "", [])), "stop" === g ? (o(n) && o(n).tweensContainer && r !== !1 && p.each(o(n).tweensContainer, function (t, e) {
                                        e.endValue = e.currentValue
                                    }), E.push(t)) : "finish" === g && (e[2].duration = 1))
                                }) : !0
                            })
                        }), "stop" === g && (p.each(E, function (t, e) {
                            d(e, !0)
                        }), P.promise && P.resolver(h)), t();
                    default:
                        if (!p.isPlainObject(g) || v.isEmptyObject(g)) {
                            if (v.isString(g) && b.Redirects[g]) {
                                var q = p.extend({}, y), I = q.duration, _ = q.delay || 0;
                                return q.backwards === !0 && (h = p.extend(!0, [], h).reverse()), p.each(h, function (t, e) {
                                    parseFloat(q.stagger) ? q.delay = _ + parseFloat(q.stagger) * t : v.isFunction(q.stagger) && (q.delay = _ + q.stagger.call(e, t, k)), q.drag && (q.duration = parseFloat(I) || (/^(callout|transition)/.test(g) ? 1e3 : m), q.duration = Math.max(q.duration * (q.backwards ? 1 - t / k : (t + 1) / k), .75 * q.duration, 200)), b.Redirects[g].call(e, e, q || {}, t, k, h, P.promise ? P : n)
                                }), t()
                            }
                            var V = "Velocity: First argument (" + g + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return P.promise ? P.rejecter(new Error(V)) : console.log(V), t()
                        }
                        A = "start"
                }
                var M = {
                    lastParent: null,
                    lastPosition: null,
                    lastFontSize: null,
                    lastPercentToPxWidth: null,
                    lastPercentToPxHeight: null,
                    lastEmToPx: null,
                    remToPx: null,
                    vwToPx: null,
                    vhToPx: null
                }, j = [];
                p.each(h, function (t, e) {
                    v.isNode(e) && a.call(e)
                });
                var $, q = p.extend({}, b.defaults, y);
                if (q.loop = parseInt(q.loop), $ = 2 * q.loop - 1, q.loop)for (var D = 0; $ > D; D++) {
                    var z = {delay: q.delay, progress: q.progress};
                    D === $ - 1 && (z.display = q.display, z.visibility = q.visibility, z.complete = q.complete), C(h, "reverse", z)
                }
                return t()
            }
        };
        b = p.extend(C, b), b.animate = C;
        var k = e.requestAnimationFrame || h;
        return b.State.isMobile || i.hidden === n || i.addEventListener("visibilitychange", function () {
            i.hidden ? (k = function (t) {
                return setTimeout(function () {
                    t(!0)
                }, 16)
            }, c()) : k = e.requestAnimationFrame || h
        }), t.Velocity = b, t !== e && (t.fn.velocity = C, t.fn.velocity.defaults = b.defaults), p.each(["Down", "Up"], function (t, e) {
            b.Redirects["slide" + e] = function (t, i, a, r, o, s) {
                var l = p.extend({}, i), u = l.begin, c = l.complete, d = {
                    height: "",
                    marginTop: "",
                    marginBottom: "",
                    paddingTop: "",
                    paddingBottom: ""
                }, f = {};
                l.display === n && (l.display = "Down" === e ? "inline" === b.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"), l.begin = function () {
                    u && u.call(o, o);
                    for (var i in d) {
                        f[i] = t.style[i];
                        var n = b.CSS.getPropertyValue(t, i);
                        d[i] = "Down" === e ? [n, 0] : [0, n]
                    }
                    f.overflow = t.style.overflow, t.style.overflow = "hidden"
                }, l.complete = function () {
                    for (var e in f)t.style[e] = f[e];
                    c && c.call(o, o), s && s.resolver(o)
                }, b(t, d, l)
            }
        }), p.each(["In", "Out"], function (t, e) {
            b.Redirects["fade" + e] = function (t, i, a, r, o, s) {
                var l = p.extend({}, i), u = {opacity: "In" === e ? 1 : 0}, c = l.complete;
                l.complete = a !== r - 1 ? l.begin = null : function () {
                    c && c.call(o, o), s && s.resolver(o)
                }, l.display === n && (l.display = "In" === e ? "auto" : "none"), b(this, u, l)
            }
        }), b
    }(window.jQuery || window.Zepto || window, window, document)
}), !function (t, e, i, n) {
    "use strict";
    function a(t, e, i) {
        return setTimeout(c(t, i), e)
    }

    function r(t, e, i) {
        return Array.isArray(t) ? (o(t, i[e], i), !0) : !1
    }

    function o(t, e, i) {
        var a;
        if (t)if (t.forEach)t.forEach(e, i); else if (t.length !== n)for (a = 0; a < t.length;)e.call(i, t[a], a, t), a++; else for (a in t)t.hasOwnProperty(a) && e.call(i, t[a], a, t)
    }

    function s(t, e, i) {
        for (var a = Object.keys(e), r = 0; r < a.length;)(!i || i && t[a[r]] === n) && (t[a[r]] = e[a[r]]), r++;
        return t
    }

    function l(t, e) {
        return s(t, e, !0)
    }

    function u(t, e, i) {
        var n, a = e.prototype;
        n = t.prototype = Object.create(a), n.constructor = t, n._super = a, i && s(n, i)
    }

    function c(t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }

    function d(t, e) {
        return typeof t == ce ? t.apply(e ? e[0] || n : n, e) : t
    }

    function p(t, e) {
        return t === n ? e : t
    }

    function f(t, e, i) {
        o(m(e), function (e) {
            t.addEventListener(e, i, !1)
        })
    }

    function h(t, e, i) {
        o(m(e), function (e) {
            t.removeEventListener(e, i, !1)
        })
    }

    function v(t, e) {
        for (; t;) {
            if (t == e)return !0;
            t = t.parentNode
        }
        return !1
    }

    function g(t, e) {
        return t.indexOf(e) > -1
    }

    function m(t) {
        return t.trim().split(/\s+/g)
    }

    function y(t, e, i) {
        if (t.indexOf && !i)return t.indexOf(e);
        for (var n = 0; n < t.length;) {
            if (i && t[n][i] == e || !i && t[n] === e)return n;
            n++
        }
        return -1
    }

    function b(t) {
        return Array.prototype.slice.call(t, 0)
    }

    function w(t, e, i) {
        for (var n = [], a = [], r = 0; r < t.length;) {
            var o = e ? t[r][e] : t[r];
            y(a, o) < 0 && n.push(t[r]), a[r] = o, r++
        }
        return i && (n = e ? n.sort(function (t, i) {
            return t[e] > i[e]
        }) : n.sort()), n
    }

    function x(t, e) {
        for (var i, a, r = e[0].toUpperCase() + e.slice(1), o = 0; o < le.length;) {
            if (i = le[o], a = i ? i + r : e, a in t)return a;
            o++
        }
        return n
    }

    function C() {
        return he++
    }

    function k(t) {
        var e = t.ownerDocument;
        return e.defaultView || e.parentWindow
    }

    function S(t, e) {
        var i = this;
        this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function (e) {
            d(t.options.enable, [t]) && i.handler(e)
        }, this.init()
    }

    function T(t) {
        var e, i = t.options.inputClass;
        return new (e = i ? i : me ? Q : ye ? N : ge ? R : z)(t, O)
    }

    function O(t, e, i) {
        var n = i.pointers.length, a = i.changedPointers.length, r = e & Se && 0 === n - a, o = e & (Oe | Pe) && 0 === n - a;
        i.isFirst = !!r, i.isFinal = !!o, r && (t.session = {}), i.eventType = e, P(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
    }

    function P(t, e) {
        var i = t.session, n = e.pointers, a = n.length;
        i.firstInput || (i.firstInput = q(e)), a > 1 && !i.firstMultiple ? i.firstMultiple = q(e) : 1 === a && (i.firstMultiple = !1);
        var r = i.firstInput, o = i.firstMultiple, s = o ? o.center : r.center, l = e.center = I(n);
        e.timeStamp = fe(), e.deltaTime = e.timeStamp - r.timeStamp, e.angle = j(s, l), e.distance = M(s, l), A(i, e), e.offsetDirection = V(e.deltaX, e.deltaY), e.scale = o ? D(o.pointers, n) : 1, e.rotation = o ? $(o.pointers, n) : 0, E(i, e);
        var u = t.element;
        v(e.srcEvent.target, u) && (u = e.srcEvent.target), e.target = u
    }

    function A(t, e) {
        var i = e.center, n = t.offsetDelta || {}, a = t.prevDelta || {}, r = t.prevInput || {};
        (e.eventType === Se || r.eventType === Oe) && (a = t.prevDelta = {
            x: r.deltaX || 0,
            y: r.deltaY || 0
        }, n = t.offsetDelta = {x: i.x, y: i.y}), e.deltaX = a.x + (i.x - n.x), e.deltaY = a.y + (i.y - n.y)
    }

    function E(t, e) {
        var i, a, r, o, s = t.lastInterval || e, l = e.timeStamp - s.timeStamp;
        if (e.eventType != Pe && (l > ke || s.velocity === n)) {
            var u = s.deltaX - e.deltaX, c = s.deltaY - e.deltaY, d = _(l, u, c);
            a = d.x, r = d.y, i = pe(d.x) > pe(d.y) ? d.x : d.y, o = V(u, c), t.lastInterval = e
        } else i = s.velocity, a = s.velocityX, r = s.velocityY, o = s.direction;
        e.velocity = i, e.velocityX = a, e.velocityY = r, e.direction = o
    }

    function q(t) {
        for (var e = [], i = 0; i < t.pointers.length;)e[i] = {
            clientX: de(t.pointers[i].clientX),
            clientY: de(t.pointers[i].clientY)
        }, i++;
        return {timeStamp: fe(), pointers: e, center: I(e), deltaX: t.deltaX, deltaY: t.deltaY}
    }

    function I(t) {
        var e = t.length;
        if (1 === e)return {x: de(t[0].clientX), y: de(t[0].clientY)};
        for (var i = 0, n = 0, a = 0; e > a;)i += t[a].clientX, n += t[a].clientY, a++;
        return {x: de(i / e), y: de(n / e)}
    }

    function _(t, e, i) {
        return {x: e / t || 0, y: i / t || 0}
    }

    function V(t, e) {
        return t === e ? Ae : pe(t) >= pe(e) ? t > 0 ? Ee : qe : e > 0 ? Ie : _e
    }

    function M(t, e, i) {
        i || (i = $e);
        var n = e[i[0]] - t[i[0]], a = e[i[1]] - t[i[1]];
        return Math.sqrt(n * n + a * a)
    }

    function j(t, e, i) {
        i || (i = $e);
        var n = e[i[0]] - t[i[0]], a = e[i[1]] - t[i[1]];
        return 180 * Math.atan2(a, n) / Math.PI
    }

    function $(t, e) {
        return j(e[1], e[0], De) - j(t[1], t[0], De)
    }

    function D(t, e) {
        return M(e[0], e[1], De) / M(t[0], t[1], De)
    }

    function z() {
        this.evEl = Qe, this.evWin = Le, this.allow = !0, this.pressed = !1, S.apply(this, arguments)
    }

    function Q() {
        this.evEl = We, this.evWin = Re, S.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function L() {
        this.evTarget = Xe, this.evWin = Ye, this.started = !1, S.apply(this, arguments)
    }

    function F(t, e) {
        var i = b(t.touches), n = b(t.changedTouches);
        return e & (Oe | Pe) && (i = w(i.concat(n), "identifier", !0)), [i, n]
    }

    function N() {
        this.evTarget = Ge, this.targetIds = {}, S.apply(this, arguments)
    }

    function W(t, e) {
        var i = b(t.touches), n = this.targetIds;
        if (e & (Se | Te) && 1 === i.length)return n[i[0].identifier] = !0, [i, i];
        var a, r, o = b(t.changedTouches), s = [], l = this.target;
        if (r = i.filter(function (t) {
                return v(t.target, l)
            }), e === Se)for (a = 0; a < r.length;)n[r[a].identifier] = !0, a++;
        for (a = 0; a < o.length;)n[o[a].identifier] && s.push(o[a]), e & (Oe | Pe) && delete n[o[a].identifier], a++;
        return s.length ? [w(r.concat(s), "identifier", !0), s] : void 0
    }

    function R() {
        S.apply(this, arguments);
        var t = c(this.handler, this);
        this.touch = new N(this.manager, t), this.mouse = new z(this.manager, t)
    }

    function H(t, e) {
        this.manager = t, this.set(e)
    }

    function X(t) {
        if (g(t, ei))return ei;
        var e = g(t, ii), i = g(t, ni);
        return e && i ? ii + " " + ni : e || i ? e ? ii : ni : g(t, ti) ? ti : Ke
    }

    function Y(t) {
        this.id = C(), this.manager = null, this.options = l(t || {}, this.defaults), this.options.enable = p(this.options.enable, !0), this.state = ai, this.simultaneous = {}, this.requireFail = []
    }

    function B(t) {
        return t & ui ? "cancel" : t & si ? "end" : t & oi ? "move" : t & ri ? "start" : ""
    }

    function G(t) {
        return t == _e ? "down" : t == Ie ? "up" : t == Ee ? "left" : t == qe ? "right" : ""
    }

    function U(t, e) {
        var i = e.manager;
        return i ? i.get(t) : t
    }

    function Z() {
        Y.apply(this, arguments)
    }

    function J() {
        Z.apply(this, arguments), this.pX = null, this.pY = null
    }

    function K() {
        Z.apply(this, arguments)
    }

    function te() {
        Y.apply(this, arguments), this._timer = null, this._input = null
    }

    function ee() {
        Z.apply(this, arguments)
    }

    function ie() {
        Z.apply(this, arguments)
    }

    function ne() {
        Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function ae(t, e) {
        return e = e || {}, e.recognizers = p(e.recognizers, ae.defaults.preset), new re(t, e)
    }

    function re(t, e) {
        e = e || {}, this.options = l(e, ae.defaults), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = t, this.input = T(this), this.touchAction = new H(this, this.options.touchAction), oe(this, !0), o(e.recognizers, function (t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
        }, this)
    }

    function oe(t, e) {
        var i = t.element;
        o(t.options.cssProps, function (t, n) {
            i.style[x(i.style, n)] = e ? t : ""
        })
    }

    function se(t, i) {
        var n = e.createEvent("Event");
        n.initEvent(t, !0, !0), n.gesture = i, i.target.dispatchEvent(n)
    }

    var le = ["", "webkit", "moz", "MS", "ms", "o"], ue = e.createElement("div"), ce = "function", de = Math.round, pe = Math.abs, fe = Date.now, he = 1, ve = /mobile|tablet|ip(ad|hone|od)|android/i, ge = "ontouchstart"in t, me = x(t, "PointerEvent") !== n, ye = ge && ve.test(navigator.userAgent), be = "touch", we = "pen", xe = "mouse", Ce = "kinect", ke = 25, Se = 1, Te = 2, Oe = 4, Pe = 8, Ae = 1, Ee = 2, qe = 4, Ie = 8, _e = 16, Ve = Ee | qe, Me = Ie | _e, je = Ve | Me, $e = ["x", "y"], De = ["clientX", "clientY"];
    S.prototype = {
        handler: function () {
        }, init: function () {
            this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(k(this.element), this.evWin, this.domHandler)
        }, destroy: function () {
            this.evEl && h(this.element, this.evEl, this.domHandler), this.evTarget && h(this.target, this.evTarget, this.domHandler), this.evWin && h(k(this.element), this.evWin, this.domHandler)
        }
    };
    var ze = {mousedown: Se, mousemove: Te, mouseup: Oe}, Qe = "mousedown", Le = "mousemove mouseup";
    u(z, S, {
        handler: function (t) {
            var e = ze[t.type];
            e & Se && 0 === t.button && (this.pressed = !0), e & Te && 1 !== t.which && (e = Oe), this.pressed && this.allow && (e & Oe && (this.pressed = !1), this.callback(this.manager, e, {
                pointers: [t],
                changedPointers: [t],
                pointerType: xe,
                srcEvent: t
            }))
        }
    });
    var Fe = {pointerdown: Se, pointermove: Te, pointerup: Oe, pointercancel: Pe, pointerout: Pe}, Ne = {
        2: be,
        3: we,
        4: xe,
        5: Ce
    }, We = "pointerdown", Re = "pointermove pointerup pointercancel";
    t.MSPointerEvent && (We = "MSPointerDown", Re = "MSPointerMove MSPointerUp MSPointerCancel"), u(Q, S, {
        handler: function (t) {
            var e = this.store, i = !1, n = t.type.toLowerCase().replace("ms", ""), a = Fe[n], r = Ne[t.pointerType] || t.pointerType, o = r == be, s = y(e, t.pointerId, "pointerId");
            a & Se && (0 === t.button || o) ? 0 > s && (e.push(t), s = e.length - 1) : a & (Oe | Pe) && (i = !0), 0 > s || (e[s] = t, this.callback(this.manager, a, {
                pointers: e,
                changedPointers: [t],
                pointerType: r,
                srcEvent: t
            }), i && e.splice(s, 1))
        }
    });
    var He = {
        touchstart: Se,
        touchmove: Te,
        touchend: Oe,
        touchcancel: Pe
    }, Xe = "touchstart", Ye = "touchstart touchmove touchend touchcancel";
    u(L, S, {
        handler: function (t) {
            var e = He[t.type];
            if (e === Se && (this.started = !0), this.started) {
                var i = F.call(this, t, e);
                e & (Oe | Pe) && 0 === i[0].length - i[1].length && (this.started = !1), this.callback(this.manager, e, {
                    pointers: i[0],
                    changedPointers: i[1],
                    pointerType: be,
                    srcEvent: t
                })
            }
        }
    });
    var Be = {
        touchstart: Se,
        touchmove: Te,
        touchend: Oe,
        touchcancel: Pe
    }, Ge = "touchstart touchmove touchend touchcancel";
    u(N, S, {
        handler: function (t) {
            var e = Be[t.type], i = W.call(this, t, e);
            i && this.callback(this.manager, e, {pointers: i[0], changedPointers: i[1], pointerType: be, srcEvent: t})
        }
    }), u(R, S, {
        handler: function (t, e, i) {
            var n = i.pointerType == be, a = i.pointerType == xe;
            if (n)this.mouse.allow = !1; else if (a && !this.mouse.allow)return;
            e & (Oe | Pe) && (this.mouse.allow = !0), this.callback(t, e, i)
        }, destroy: function () {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var Ue = x(ue.style, "touchAction"), Ze = Ue !== n, Je = "compute", Ke = "auto", ti = "manipulation", ei = "none", ii = "pan-x", ni = "pan-y";
    H.prototype = {
        set: function (t) {
            t == Je && (t = this.compute()), Ze && (this.manager.element.style[Ue] = t), this.actions = t.toLowerCase().trim()
        }, update: function () {
            this.set(this.manager.options.touchAction)
        }, compute: function () {
            var t = [];
            return o(this.manager.recognizers, function (e) {
                d(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
            }), X(t.join(" "))
        }, preventDefaults: function (t) {
            if (!Ze) {
                var e = t.srcEvent, i = t.offsetDirection;
                if (this.manager.session.prevented)return void e.preventDefault();
                var n = this.actions, a = g(n, ei), r = g(n, ni), o = g(n, ii);
                return a || r && i & Ve || o && i & Me ? this.preventSrc(e) : void 0
            }
        }, preventSrc: function (t) {
            this.manager.session.prevented = !0, t.preventDefault()
        }
    };
    var ai = 1, ri = 2, oi = 4, si = 8, li = si, ui = 16, ci = 32;
    Y.prototype = {
        defaults: {}, set: function (t) {
            return s(this.options, t), this.manager && this.manager.touchAction.update(), this
        }, recognizeWith: function (t) {
            if (r(t, "recognizeWith", this))return this;
            var e = this.simultaneous;
            return t = U(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
        }, dropRecognizeWith: function (t) {
            return r(t, "dropRecognizeWith", this) ? this : (t = U(t, this), delete this.simultaneous[t.id], this)
        }, requireFailure: function (t) {
            if (r(t, "requireFailure", this))return this;
            var e = this.requireFail;
            return t = U(t, this), -1 === y(e, t) && (e.push(t), t.requireFailure(this)), this
        }, dropRequireFailure: function (t) {
            if (r(t, "dropRequireFailure", this))return this;
            t = U(t, this);
            var e = y(this.requireFail, t);
            return e > -1 && this.requireFail.splice(e, 1), this
        }, hasRequireFailures: function () {
            return this.requireFail.length > 0
        }, canRecognizeWith: function (t) {
            return !!this.simultaneous[t.id]
        }, emit: function (t) {
            function e(e) {
                i.manager.emit(i.options.event + (e ? B(n) : ""), t)
            }

            var i = this, n = this.state;
            si > n && e(!0), e(), n >= si && e(!0)
        }, tryEmit: function (t) {
            return this.canEmit() ? this.emit(t) : void(this.state = ci)
        }, canEmit: function () {
            for (var t = 0; t < this.requireFail.length;) {
                if (!(this.requireFail[t].state & (ci | ai)))return !1;
                t++
            }
            return !0
        }, recognize: function (t) {
            var e = s({}, t);
            return d(this.options.enable, [this, e]) ? (this.state & (li | ui | ci) && (this.state = ai), this.state = this.process(e), void(this.state & (ri | oi | si | ui) && this.tryEmit(e))) : (this.reset(), void(this.state = ci))
        }, process: function () {
        }, getTouchAction: function () {
        }, reset: function () {
        }
    }, u(Z, Y, {
        defaults: {pointers: 1}, attrTest: function (t) {
            var e = this.options.pointers;
            return 0 === e || t.pointers.length === e
        }, process: function (t) {
            var e = this.state, i = t.eventType, n = e & (ri | oi), a = this.attrTest(t);
            return n && (i & Pe || !a) ? e | ui : n || a ? i & Oe ? e | si : e & ri ? e | oi : ri : ci
        }
    }), u(J, Z, {
        defaults: {event: "pan", threshold: 10, pointers: 1, direction: je}, getTouchAction: function () {
            var t = this.options.direction, e = [];
            return t & Ve && e.push(ni), t & Me && e.push(ii), e
        }, directionTest: function (t) {
            var e = this.options, i = !0, n = t.distance, a = t.direction, r = t.deltaX, o = t.deltaY;
            return a & e.direction || (e.direction & Ve ? (a = 0 === r ? Ae : 0 > r ? Ee : qe, i = r != this.pX, n = Math.abs(t.deltaX)) : (a = 0 === o ? Ae : 0 > o ? Ie : _e, i = o != this.pY, n = Math.abs(t.deltaY))), t.direction = a, i && n > e.threshold && a & e.direction
        }, attrTest: function (t) {
            return Z.prototype.attrTest.call(this, t) && (this.state & ri || !(this.state & ri) && this.directionTest(t))
        }, emit: function (t) {
            this.pX = t.deltaX, this.pY = t.deltaY;
            var e = G(t.direction);
            e && this.manager.emit(this.options.event + e, t), this._super.emit.call(this, t)
        }
    }), u(K, Z, {
        defaults: {event: "pinch", threshold: 0, pointers: 2}, getTouchAction: function () {
            return [ei]
        }, attrTest: function (t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & ri)
        }, emit: function (t) {
            if (this._super.emit.call(this, t), 1 !== t.scale) {
                var e = t.scale < 1 ? "in" : "out";
                this.manager.emit(this.options.event + e, t)
            }
        }
    }), u(te, Y, {
        defaults: {event: "press", pointers: 1, time: 500, threshold: 5}, getTouchAction: function () {
            return [Ke]
        }, process: function (t) {
            var e = this.options, i = t.pointers.length === e.pointers, n = t.distance < e.threshold, r = t.deltaTime > e.time;
            if (this._input = t, !n || !i || t.eventType & (Oe | Pe) && !r)this.reset(); else if (t.eventType & Se)this.reset(), this._timer = a(function () {
                this.state = li, this.tryEmit()
            }, e.time, this); else if (t.eventType & Oe)return li;
            return ci
        }, reset: function () {
            clearTimeout(this._timer)
        }, emit: function (t) {
            this.state === li && (t && t.eventType & Oe ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = fe(), this.manager.emit(this.options.event, this._input)))
        }
    }), u(ee, Z, {
        defaults: {event: "rotate", threshold: 0, pointers: 2}, getTouchAction: function () {
            return [ei]
        }, attrTest: function (t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & ri)
        }
    }), u(ie, Z, {
        defaults: {event: "swipe", threshold: 10, velocity: .65, direction: Ve | Me, pointers: 1},
        getTouchAction: function () {
            return J.prototype.getTouchAction.call(this)
        },
        attrTest: function (t) {
            var e, i = this.options.direction;
            return i & (Ve | Me) ? e = t.velocity : i & Ve ? e = t.velocityX : i & Me && (e = t.velocityY), this._super.attrTest.call(this, t) && i & t.direction && t.distance > this.options.threshold && pe(e) > this.options.velocity && t.eventType & Oe
        },
        emit: function (t) {
            var e = G(t.direction);
            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
        }
    }), u(ne, Y, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 2,
            posThreshold: 10
        }, getTouchAction: function () {
            return [ti]
        }, process: function (t) {
            var e = this.options, i = t.pointers.length === e.pointers, n = t.distance < e.threshold, r = t.deltaTime < e.time;
            if (this.reset(), t.eventType & Se && 0 === this.count)return this.failTimeout();
            if (n && r && i) {
                if (t.eventType != Oe)return this.failTimeout();
                var o = this.pTime ? t.timeStamp - this.pTime < e.interval : !0, s = !this.pCenter || M(this.pCenter, t.center) < e.posThreshold;
                this.pTime = t.timeStamp, this.pCenter = t.center, s && o ? this.count += 1 : this.count = 1, this._input = t;
                var l = this.count % e.taps;
                if (0 === l)return this.hasRequireFailures() ? (this._timer = a(function () {
                    this.state = li, this.tryEmit()
                }, e.interval, this), ri) : li
            }
            return ci
        }, failTimeout: function () {
            return this._timer = a(function () {
                this.state = ci
            }, this.options.interval, this), ci
        }, reset: function () {
            clearTimeout(this._timer)
        }, emit: function () {
            this.state == li && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), ae.VERSION = "2.0.4", ae.defaults = {
        domEvents: !1,
        touchAction: Je,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[ee, {enable: !1}], [K, {enable: !1}, ["rotate"]], [ie, {direction: Ve}], [J, {direction: Ve}, ["swipe"]], [ne], [ne, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [te]],
        cssProps: {
            userSelect: "default",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var di = 1, pi = 2;
    re.prototype = {
        set: function (t) {
            return s(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
        }, stop: function (t) {
            this.session.stopped = t ? pi : di
        }, recognize: function (t) {
            var e = this.session;
            if (!e.stopped) {
                this.touchAction.preventDefaults(t);
                var i, n = this.recognizers, a = e.curRecognizer;
                (!a || a && a.state & li) && (a = e.curRecognizer = null);
                for (var r = 0; r < n.length;)i = n[r], e.stopped === pi || a && i != a && !i.canRecognizeWith(a) ? i.reset() : i.recognize(t), !a && i.state & (ri | oi | si) && (a = e.curRecognizer = i), r++
            }
        }, get: function (t) {
            if (t instanceof Y)return t;
            for (var e = this.recognizers, i = 0; i < e.length; i++)if (e[i].options.event == t)return e[i];
            return null
        }, add: function (t) {
            if (r(t, "add", this))return this;
            var e = this.get(t.options.event);
            return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
        }, remove: function (t) {
            if (r(t, "remove", this))return this;
            var e = this.recognizers;
            return t = this.get(t), e.splice(y(e, t), 1), this.touchAction.update(), this
        }, on: function (t, e) {
            var i = this.handlers;
            return o(m(t), function (t) {
                i[t] = i[t] || [], i[t].push(e)
            }), this
        }, off: function (t, e) {
            var i = this.handlers;
            return o(m(t), function (t) {
                e ? i[t].splice(y(i[t], e), 1) : delete i[t]
            }), this
        }, emit: function (t, e) {
            this.options.domEvents && se(t, e);
            var i = this.handlers[t] && this.handlers[t].slice();
            if (i && i.length) {
                e.type = t, e.preventDefault = function () {
                    e.srcEvent.preventDefault()
                };
                for (var n = 0; n < i.length;)i[n](e), n++
            }
        }, destroy: function () {
            this.element && oe(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, s(ae, {
        INPUT_START: Se,
        INPUT_MOVE: Te,
        INPUT_END: Oe,
        INPUT_CANCEL: Pe,
        STATE_POSSIBLE: ai,
        STATE_BEGAN: ri,
        STATE_CHANGED: oi,
        STATE_ENDED: si,
        STATE_RECOGNIZED: li,
        STATE_CANCELLED: ui,
        STATE_FAILED: ci,
        DIRECTION_NONE: Ae,
        DIRECTION_LEFT: Ee,
        DIRECTION_RIGHT: qe,
        DIRECTION_UP: Ie,
        DIRECTION_DOWN: _e,
        DIRECTION_HORIZONTAL: Ve,
        DIRECTION_VERTICAL: Me,
        DIRECTION_ALL: je,
        Manager: re,
        Input: S,
        TouchAction: H,
        TouchInput: N,
        MouseInput: z,
        PointerEventInput: Q,
        TouchMouseInput: R,
        SingleTouchInput: L,
        Recognizer: Y,
        AttrRecognizer: Z,
        Tap: ne,
        Pan: J,
        Swipe: ie,
        Pinch: K,
        Rotate: ee,
        Press: te,
        on: f,
        off: h,
        each: o,
        merge: l,
        extend: s,
        inherit: u,
        bindFn: c,
        prefixed: x
    }), typeof define == ce && define.amd ? define(function () {
        return ae
    }) : "undefined" != typeof module && module.exports ? module.exports = ae : t[i] = ae
}(window, document, "Hammer"), function (t) {
    "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], t) : "object" == typeof exports ? t(require("jquery"), require("hammerjs")) : t(jQuery, Hammer)
}(function (t, e) {
    function i(i, n) {
        var a = t(i);
        a.data("hammer") || a.data("hammer", new e(a[0], n))
    }

    t.fn.hammer = function (t) {
        return this.each(function () {
            i(this, t)
        })
    }, e.Manager.prototype.emit = function (e) {
        return function (i, n) {
            e.call(this, i, n), t(this.element).trigger({type: i, gesture: n})
        }
    }(e.Manager.prototype.emit)
}), Materialize = {}, Materialize.guid = function () {
    function t() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }

    return function () {
        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
    }
}(), Materialize.elementOrParentIsFixed = function (t) {
    var e = $(t), i = e.add(e.parents()), n = !1;
    return i.each(function () {
        return "fixed" === $(this).css("position") ? (n = !0, !1) : void 0
    }), n
};
var Vel;
Vel = $ ? $.Velocity : Velocity, function (t) {
    t.fn.collapsible = function (e) {
        var i = {accordion: void 0};
        return e = t.extend(i, e), this.each(function () {
            function i(e) {
                s = o.find("> li > .collapsible-header"), e.hasClass("active") ? e.parent().addClass("active") : e.parent().removeClass("active"), e.parent().hasClass("active") ? e.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function () {
                        t(this).css("height", "")
                    }
                }) : e.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function () {
                        t(this).css("height", "")
                    }
                }), s.not(e).removeClass("active").parent().removeClass("active"), s.not(e).parent().children(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function () {
                        t(this).css("height", "")
                    }
                })
            }

            function n(e) {
                e.hasClass("active") ? e.parent().addClass("active") : e.parent().removeClass("active"), e.parent().hasClass("active") ? e.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function () {
                        t(this).css("height", "")
                    }
                }) : e.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function () {
                        t(this).css("height", "")
                    }
                })
            }

            function a(t) {
                var e = r(t);
                return e.length > 0
            }

            function r(t) {
                return t.closest("li > .collapsible-header")
            }

            var o = t(this), s = t(this).find("> li > .collapsible-header"), l = o.data("collapsible");
            o.off("click.collapse", ".collapsible-header"), s.off("click.collapse"), e.accordion || "accordion" === l || void 0 === l ? (s = o.find("> li > .collapsible-header"), s.on("click.collapse", function (e) {
                var n = t(e.target);
                a(n) && (n = r(n)), n.toggleClass("active"), i(n)
            }), i(s.filter(".active").first())) : s.each(function () {
                t(this).on("click.collapse", function (e) {
                    var i = t(e.target);
                    a(i) && (i = r(i)), i.toggleClass("active"), n(i)
                }), t(this).hasClass("active") && n(t(this))
            })
        })
    }, t(document).ready(function () {
        t(".collapsible").collapsible()
    })
}(jQuery), function (t) {
    t.fn.scrollTo = function (e) {
        return t(this).scrollTop(t(this).scrollTop() - t(this).offset().top + t(e).offset().top), this
    }, t.fn.dropdown = function (e) {
        var i = {inDuration: 300, outDuration: 225, constrain_width: !0, hover: !1, gutter: 0, belowOrigin: !1};
        this.each(function () {
            function n() {
                void 0 !== o.data("induration") && (s.inDuration = o.data("inDuration")), void 0 !== o.data("outduration") && (s.outDuration = o.data("outDuration")), void 0 !== o.data("constrainwidth") && (s.constrain_width = o.data("constrainwidth")), void 0 !== o.data("hover") && (s.hover = o.data("hover")), void 0 !== o.data("gutter") && (s.gutter = o.data("gutter")), void 0 !== o.data("beloworigin") && (s.belowOrigin = o.data("beloworigin"))
            }

            function a() {
                n(), l.addClass("active"), s.constrain_width === !0 && l.css("width", o.outerWidth());
                var e = 0;
                s.belowOrigin === !0 && (e = o.height());
                var i = o.offset().left, a = 0, r = s.gutter;
                i + l.innerWidth() > t(window).width() && (a = o.innerWidth() - l.innerWidth(), r = -1 * r), l.css({
                    position: "absolute",
                    top: o.position().top + e,
                    left: o.position().left + a + r
                }), l.stop(!0, !0).css("opacity", 0).slideDown({
                    queue: !1,
                    duration: s.inDuration,
                    easing: "easeOutCubic",
                    complete: function () {
                        t(this).css("height", "")
                    }
                }).animate({opacity: 1}, {queue: !1, duration: s.inDuration, easing: "easeOutSine"})
            }

            function r() {
                l.fadeOut(s.outDuration), l.removeClass("active")
            }

            var o = t(this), s = t.extend({}, i, e), l = t("#" + o.attr("data-activates"));
            if (n(), o.after(l), s.hover) {
                var u = !1;
                o.unbind("click." + o.attr("id")), o.on("mouseenter", function () {
                    u === !1 && (a(), u = !0)
                }), o.on("mouseleave", function (e) {
                    var i = e.toElement || e.relatedTarget;
                    t(i).closest(".dropdown-content").is(l) || (l.stop(!0, !0), r(), u = !1)
                }), l.on("mouseleave", function (e) {
                    var i = e.toElement || e.relatedTarget;
                    t(i).closest(".dropdown-button").is(o) || (l.stop(!0, !0), r(), u = !1)
                })
            } else o.unbind("click." + o.attr("id")), o.bind("click." + o.attr("id"), function (e) {
                o[0] == e.currentTarget && 0 === t(e.target).closest(".dropdown-content").length ? (e.preventDefault(), a()) : o.hasClass("active") && (r(), t(document).unbind("click." + l.attr("id"))), l.hasClass("active") && t(document).bind("click." + l.attr("id"), function (e) {
                    !l.is(e.target) && !o.is(e.target) && !o.find(e.target).length > 0 && (r(), t(document).unbind("click." + l.attr("id")))
                })
            });
            o.on("open", a), o.on("close", r)
        })
    }, t(document).ready(function () {
        t(".dropdown-button").dropdown()
    })
}(jQuery), function (t) {
    var e = 0, i = 0, n = function () {
        return i++, "materialize-lean-overlay-" + i
    };
    t.fn.extend({
        openModal: function (i) {
            t("body").css("overflow", "hidden");
            var a = {
                opacity: .5,
                in_duration: 350,
                out_duration: 250,
                ready: void 0,
                complete: void 0,
                dismissible: !0,
                starting_top: "4%"
            }, r = n(), o = t(this), s = t('<div class="lean-overlay"></div>'), l = ++e;
            s.attr("id", r).css("z-index", 1e3 + 2 * l), o.data("overlay-id", r).css("z-index", 1e3 + 2 * l + 1), t("body").append(s), i = t.extend(a, i), i.dismissible && (s.click(function () {
                o.closeModal(i)
            }), t(document).on("keyup.leanModal" + r, function (t) {
                27 === t.keyCode && o.closeModal(i)
            })), o.find(".modal-close").on("click.close", function () {
                o.closeModal(i)
            }), s.css({display: "block", opacity: 0}), o.css({
                display: "block",
                opacity: 0
            }), s.velocity({opacity: i.opacity}, {
                duration: i.in_duration,
                queue: !1,
                ease: "easeOutCubic"
            }), o.data("associated-overlay", s[0]), o.hasClass("bottom-sheet") ? o.velocity({
                bottom: "0",
                opacity: 1
            }, {
                duration: i.in_duration, queue: !1, ease: "easeOutCubic", complete: function () {
                    "function" == typeof i.ready && i.ready()
                }
            }) : (t.Velocity.hook(o, "scaleX", .7), o.css({top: i.starting_top}), o.velocity({
                top: "10%",
                opacity: 1,
                scaleX: "1"
            }, {
                duration: i.in_duration, queue: !1, ease: "easeOutCubic", complete: function () {
                    "function" == typeof i.ready && i.ready()
                }
            }))
        }
    }), t.fn.extend({
        closeModal: function (i) {
            var n = {out_duration: 250, complete: void 0}, a = t(this), r = a.data("overlay-id"), o = t("#" + r);
            i = t.extend(n, i), t("body").css("overflow", ""), a.find(".modal-close").off("click.close"), t(document).off("keyup.leanModal" + r), o.velocity({opacity: 0}, {
                duration: i.out_duration,
                queue: !1,
                ease: "easeOutQuart"
            }), a.hasClass("bottom-sheet") ? a.velocity({bottom: "-100%", opacity: 0}, {
                duration: i.out_duration,
                queue: !1,
                ease: "easeOutCubic",
                complete: function () {
                    o.css({display: "none"}), "function" == typeof i.complete && i.complete(), o.remove(), e--
                }
            }) : a.velocity({top: i.starting_top, opacity: 0, scaleX: .7}, {
                duration: i.out_duration,
                complete: function () {
                    t(this).css("display", "none"), "function" == typeof i.complete && i.complete(), o.remove(), e--
                }
            })
        }
    }), t.fn.extend({
        leanModal: function (e) {
            return this.each(function () {
                var i = {starting_top: "4%"}, n = t.extend(i, e);
                t(this).click(function (e) {
                    n.starting_top = (t(this).offset().top - t(window).scrollTop()) / 1.15;
                    var i = t(this).attr("href") || "#" + t(this).data("target");
                    t(i).openModal(n), e.preventDefault()
                })
            })
        }
    })
}(jQuery), function (t) {
    t.fn.materialbox = function () {
        return this.each(function () {
            function e() {
                n = !1;
                var e = o.parent(".material-placeholder"), a = (window.innerWidth, window.innerHeight, o.data("width")), s = o.data("height");
                o.velocity("stop", !0), t("#materialbox-overlay").velocity("stop", !0), t(".materialbox-caption").velocity("stop", !0), t("#materialbox-overlay").velocity({opacity: 0}, {
                    duration: r, queue: !1, easing: "easeOutQuad", complete: function () {
                        i = !1, t(this).remove()
                    }
                }), o.velocity({width: a, height: s, left: 0, top: 0}, {
                    duration: r,
                    queue: !1,
                    easing: "easeOutQuad"
                }), t(".materialbox-caption").velocity({opacity: 0}, {
                    duration: r,
                    queue: !1,
                    easing: "easeOutQuad",
                    complete: function () {
                        e.css({height: "", width: "", position: "", top: "", left: ""}), o.css({
                            height: "",
                            top: "",
                            left: "",
                            width: "",
                            "max-width": "",
                            position: "",
                            "z-index": ""
                        }), o.removeClass("active"), n = !0, t(this).remove()
                    }
                })
            }

            if (!t(this).hasClass("initialized")) {
                t(this).addClass("initialized");
                var i = !1, n = !0, a = 275, r = 200, o = t(this), s = t("<div></div>").addClass("material-placeholder");
                o.wrap(s), o.on("click", function () {
                    var r = o.parent(".material-placeholder"), s = window.innerWidth, l = window.innerHeight, u = o.width(), c = o.height();
                    if (n === !1)return e(), !1;
                    if (i && n === !0)return e(), !1;
                    n = !1, o.addClass("active"), i = !0, r.css({
                        width: r[0].getBoundingClientRect().width,
                        height: r[0].getBoundingClientRect().height,
                        position: "relative",
                        top: 0,
                        left: 0
                    }), o.css({position: "absolute", "z-index": 1e3}).data("width", u).data("height", c);
                    var d = t('<div id="materialbox-overlay"></div>').css({opacity: 0}).click(function () {
                        n === !0 && e()
                    });
                    if (t("body").append(d), d.velocity({opacity: 1}, {
                            duration: a,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), "" !== o.data("caption")) {
                        var p = t('<div class="materialbox-caption"></div>');
                        p.text(o.data("caption")), t("body").append(p), p.css({display: "inline"}), p.velocity({opacity: 1}, {
                            duration: a,
                            queue: !1,
                            easing: "easeOutQuad"
                        })
                    }
                    var f = 0, h = u / s, v = c / l, g = 0, m = 0;
                    h > v ? (f = c / u, g = .9 * s, m = .9 * s * f) : (f = u / c, g = .9 * l * f, m = .9 * l), o.hasClass("responsive-img") ? o.velocity({
                        "max-width": g,
                        width: u
                    }, {
                        duration: 0, queue: !1, complete: function () {
                            o.css({left: 0, top: 0}).velocity({
                                height: m,
                                width: g,
                                left: t(document).scrollLeft() + s / 2 - o.parent(".material-placeholder").offset().left - g / 2,
                                top: t(document).scrollTop() + l / 2 - o.parent(".material-placeholder").offset().top - m / 2
                            }, {
                                duration: a, queue: !1, easing: "easeOutQuad", complete: function () {
                                    n = !0
                                }
                            })
                        }
                    }) : o.css("left", 0).css("top", 0).velocity({
                        height: m,
                        width: g,
                        left: t(document).scrollLeft() + s / 2 - o.parent(".material-placeholder").offset().left - g / 2,
                        top: t(document).scrollTop() + l / 2 - o.parent(".material-placeholder").offset().top - m / 2
                    }, {
                        duration: a, queue: !1, easing: "easeOutQuad", complete: function () {
                            n = !0
                        }
                    })
                }), t(window).scroll(function () {
                    i && e()
                }), t(document).keyup(function (t) {
                    27 === t.keyCode && n === !0 && i && e()
                })
            }
        })
    }, t(document).ready(function () {
        t(".materialboxed").materialbox()
    })
}(jQuery), function (t) {
    t.fn.parallax = function () {
        var e = t(window).width();
        return this.each(function () {
            function i(i) {
                var a;
                a = 601 > e ? n.height() > 0 ? n.height() : n.children("img").height() : n.height() > 0 ? n.height() : 500;
                var r = n.children("img").first(), o = r.height(), s = o - a, l = n.offset().top + a, u = n.offset().top, c = t(window).scrollTop(), d = window.innerHeight, p = c + d, f = (p - u) / (a + d), h = Math.round(s * f);
                i && r.css("display", "block"), l > c && c + d > u && r.css("transform", "translate3D(-50%," + h + "px, 0)")
            }

            var n = t(this);
            n.addClass("parallax"), n.children("img").one("load", function () {
                i(!0)
            }).each(function () {
                this.complete && t(this).load()
            }), t(window).scroll(function () {
                e = t(window).width(), i(!1)
            }), t(window).resize(function () {
                e = t(window).width(), i(!1)
            })
        })
    }
}(jQuery), function (t) {
    var e = {
        init: function () {
            return this.each(function () {
                {
                    var e = t(this);
                    t(window).width()
                }
                e.width("100%");
                var i = t(this).children("li").length;
                e.children("li").each(function () {
                    t(this).width(100 / i + "%")
                });
                var n, a, r = e.find("li.tab a"), o = e.width(), s = e.find("li").first().outerWidth(), l = 0;
                n = t(r.filter('[href="' + location.hash + '"]')), 0 === n.length && (n = t(this).find("li.tab a.active").first()), 0 === n.length && (n = t(this).find("li.tab a").first()), n.addClass("active"), l = r.index(n), 0 > l && (l = 0), a = t(n[0].hash), e.append('<div class="indicator"></div>');
                var u = e.find(".indicator");
                e.is(":visible") && (u.css({right: o - (l + 1) * s}), u.css({left: l * s})), t(window).resize(function () {
                    o = e.width(), s = e.find("li").first().outerWidth(), 0 > l && (l = 0), 0 !== s && 0 !== o && (u.css({right: o - (l + 1) * s}), u.css({left: l * s}))
                }), r.not(n).each(function () {
                    t(this.hash).hide()
                }), e.on("click", "a", function (i) {
                    if (t(this).parent().hasClass("disabled"))return void i.preventDefault();
                    o = e.width(), s = e.find("li").first().outerWidth(), n.removeClass("active"), a.hide(), n = t(this), a = t(this.hash), r = e.find("li.tab a"), n.addClass("active");
                    var c = l;
                    l = r.index(t(this)), 0 > l && (l = 0), a.show(), l - c >= 0 ? (u.velocity({right: o - (l + 1) * s}, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), u.velocity({left: l * s}, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        delay: 90
                    })) : (u.velocity({left: l * s}, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), u.velocity({right: o - (l + 1) * s}, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        delay: 90
                    })), i.preventDefault()
                })
            })
        }, select_tab: function (t) {
            this.find('a[href="#' + t + '"]').trigger("click")
        }
    };
    t.fn.tabs = function (i) {
        return e[i] ? e[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.tooltip") : e.init.apply(this, arguments)
    }, t(document).ready(function () {
        t("ul.tabs").tabs()
    })
}(jQuery), function (t) {
    t.fn.tooltip = function (e) {
        var i = null, n = !1, a = null, r = 5, o = {delay: 350};
        return e = t.extend(o, e), t(".material-tooltip").remove(), this.each(function () {
            var o = t(this), s = t("<span></span>").text(o.attr("data-tooltip")), l = t("<div></div>");
            l.addClass("material-tooltip").append(s), l.appendTo(t("body"));
            var u = t("<div></div>").addClass("backdrop");
            u.appendTo(l), u.css({
                top: 0,
                left: 0
            }), t(this).off("mouseenter mouseleave"), t(this).on({
                mouseenter: function () {
                    var t = o.data("delay");
                    t = void 0 === t || "" === t ? e.delay : t, i = 0, a = setInterval(function () {
                        if (i += 10, i >= t && n === !1) {
                            n = !0, l.css({
                                display: "block",
                                left: "0px",
                                top: "0px"
                            }), l.children("span").text(o.attr("data-tooltip"));
                            var e = o.outerWidth(), a = o.outerHeight(), s = o.attr("data-position"), c = l.outerHeight(), d = l.outerWidth(), p = "0px", f = "0px", h = 8;
                            "top" === s ? (l.css({
                                top: o.offset().top - c - r,
                                left: o.offset().left + e / 2 - d / 2
                            }), p = "-10px", u.css({
                                borderRadius: "14px 14px 0 0",
                                transformOrigin: "50% 90%",
                                marginTop: c,
                                marginLeft: d / 2 - u.width() / 2
                            })) : "left" === s ? (l.css({
                                top: o.offset().top + a / 2 - c / 2,
                                left: o.offset().left - d - r
                            }), f = "-10px", u.css({
                                width: "14px",
                                height: "14px",
                                borderRadius: "14px 0 0 14px",
                                transformOrigin: "95% 50%",
                                marginTop: c / 2,
                                marginLeft: d
                            })) : "right" === s ? (l.css({
                                top: o.offset().top + a / 2 - c / 2,
                                left: o.offset().left + e + r
                            }), f = "+10px", u.css({
                                width: "14px",
                                height: "14px",
                                borderRadius: "0 14px 14px 0",
                                transformOrigin: "5% 50%",
                                marginTop: c / 2,
                                marginLeft: "0px"
                            })) : (l.css({
                                top: o.offset().top + o.outerHeight() + r,
                                left: o.offset().left + e / 2 - d / 2
                            }), p = "+10px", u.css({marginLeft: d / 2 - u.width() / 2})), h = d / 8, 8 > h && (h = 8), ("right" === s || "left" === s) && (h = d / 10, 6 > h && (h = 6)), l.velocity({
                                opacity: 1,
                                marginTop: p,
                                marginLeft: f
                            }, {duration: 350, queue: !1}), u.css({display: "block"}).velocity({opacity: 1}, {
                                duration: 55,
                                delay: 0,
                                queue: !1
                            }).velocity({scale: h}, {duration: 300, delay: 0, queue: !1, easing: "easeInOutQuad"})
                        }
                    }, 10)
                }, mouseleave: function () {
                    clearInterval(a), i = 0, l.velocity({opacity: 0, marginTop: 0, marginLeft: 0}, {
                        duration: 225,
                        queue: !1,
                        delay: 275
                    }), u.velocity({opacity: 0, scale: 1}, {
                        duration: 225, delay: 275, queue: !1, complete: function () {
                            u.css("display", "none"), l.css("display", "none"), n = !1
                        }
                    })
                }
            })
        })
    }, t(document).ready(function () {
        t(".tooltipped").tooltip()
    })
}(jQuery), function (t) {
    "use strict";
    function e(t) {
        return null !== t && t === t.window
    }

    function i(t) {
        return e(t) ? t : 9 === t.nodeType && t.defaultView
    }

    function n(t) {
        var e, n, a = {top: 0, left: 0}, r = t && t.ownerDocument;
        return e = r.documentElement, "undefined" != typeof t.getBoundingClientRect && (a = t.getBoundingClientRect()), n = i(r), {
            top: a.top + n.pageYOffset - e.clientTop,
            left: a.left + n.pageXOffset - e.clientLeft
        }
    }

    function a(t) {
        var e = "";
        for (var i in t)t.hasOwnProperty(i) && (e += i + ":" + t[i] + ";");
        return e
    }

    function r(t) {
        if (c.allowEvent(t) === !1)return null;
        for (var e = null, i = t.target || t.srcElement; null !== i.parentElement;) {
            if (!(i instanceof SVGElement || -1 === i.className.indexOf("waves-effect"))) {
                e = i;
                break
            }
            if (i.classList.contains("waves-effect")) {
                e = i;
                break
            }
            i = i.parentElement
        }
        return e
    }

    function o(e) {
        var i = r(e);
        null !== i && (u.show(e, i), "ontouchstart"in t && (i.addEventListener("touchend", u.hide, !1), i.addEventListener("touchcancel", u.hide, !1)), i.addEventListener("mouseup", u.hide, !1), i.addEventListener("mouseleave", u.hide, !1))
    }

    var s = s || {}, l = document.querySelectorAll.bind(document), u = {
        duration: 750, show: function (t, e) {
            if (2 === t.button)return !1;
            var i = e || this, r = document.createElement("div");
            r.className = "waves-ripple", i.appendChild(r);
            var o = n(i), s = t.pageY - o.top, l = t.pageX - o.left, c = "scale(" + i.clientWidth / 100 * 10 + ")";
            "touches"in t && (s = t.touches[0].pageY - o.top, l = t.touches[0].pageX - o.left), r.setAttribute("data-hold", Date.now()), r.setAttribute("data-scale", c), r.setAttribute("data-x", l), r.setAttribute("data-y", s);
            var d = {top: s + "px", left: l + "px"};
            r.className = r.className + " waves-notransition", r.setAttribute("style", a(d)), r.className = r.className.replace("waves-notransition", ""), d["-webkit-transform"] = c, d["-moz-transform"] = c, d["-ms-transform"] = c, d["-o-transform"] = c, d.transform = c, d.opacity = "1", d["-webkit-transition-duration"] = u.duration + "ms", d["-moz-transition-duration"] = u.duration + "ms", d["-o-transition-duration"] = u.duration + "ms", d["transition-duration"] = u.duration + "ms", d["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", d["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", d["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", d["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", r.setAttribute("style", a(d))
        }, hide: function (t) {
            c.touchup(t);
            var e = this, i = (1.4 * e.clientWidth, null), n = e.getElementsByClassName("waves-ripple");
            if (!(n.length > 0))return !1;
            i = n[n.length - 1];
            var r = i.getAttribute("data-x"), o = i.getAttribute("data-y"), s = i.getAttribute("data-scale"), l = Date.now() - Number(i.getAttribute("data-hold")), d = 350 - l;
            0 > d && (d = 0), setTimeout(function () {
                var t = {
                    top: o + "px",
                    left: r + "px",
                    opacity: "0",
                    "-webkit-transition-duration": u.duration + "ms",
                    "-moz-transition-duration": u.duration + "ms",
                    "-o-transition-duration": u.duration + "ms",
                    "transition-duration": u.duration + "ms",
                    "-webkit-transform": s,
                    "-moz-transform": s,
                    "-ms-transform": s,
                    "-o-transform": s,
                    transform: s
                };
                i.setAttribute("style", a(t)), setTimeout(function () {
                    try {
                        e.removeChild(i)
                    } catch (t) {
                        return !1
                    }
                }, u.duration)
            }, d)
        }, wrapInput: function (t) {
            for (var e = 0; e < t.length; e++) {
                var i = t[e];
                if ("input" === i.tagName.toLowerCase()) {
                    var n = i.parentNode;
                    if ("i" === n.tagName.toLowerCase() && -1 !== n.className.indexOf("waves-effect"))continue;
                    var a = document.createElement("i");
                    a.className = i.className + " waves-input-wrapper";
                    var r = i.getAttribute("style");
                    r || (r = ""), a.setAttribute("style", r), i.className = "waves-button-input", i.removeAttribute("style"), n.replaceChild(a, i), a.appendChild(i)
                }
            }
        }
    }, c = {
        touches: 0, allowEvent: function (t) {
            var e = !0;
            return "touchstart" === t.type ? c.touches += 1 : "touchend" === t.type || "touchcancel" === t.type ? setTimeout(function () {
                c.touches > 0 && (c.touches -= 1)
            }, 500) : "mousedown" === t.type && c.touches > 0 && (e = !1), e
        }, touchup: function (t) {
            c.allowEvent(t)
        }
    };
    s.displayEffect = function (e) {
        e = e || {}, "duration"in e && (u.duration = e.duration), u.wrapInput(l(".waves-effect")), "ontouchstart"in t && document.body.addEventListener("touchstart", o, !1), document.body.addEventListener("mousedown", o, !1)
    }, s.attach = function (e) {
        e.tagName && ("input" === e.tagName.toLowerCase() && (u.wrapInput([e]), e = e.parentElement), "ontouchstart"in t && e.addEventListener("touchstart", o, !1), e.addEventListener("mousedown", o, !1))
    }, t.Waves = s, document.addEventListener("DOMContentLoaded", function () {
        s.displayEffect()
    }, !1)
}(window), Materialize.toast = function (t, e, i, n) {
    function a(t) {
        var e = document.createElement("div");
        if (e.classList.add("toast"), i)for (var a = i.split(" "), r = 0, o = a.length; o > r; r++)e.classList.add(a[r]);
        e.innerHTML = t;
        var s = new Hammer(e, {prevent_default: !1});
        return s.on("pan", function (t) {
            var i = t.deltaX, n = 80;
            e.classList.contains("panning") || e.classList.add("panning");
            var a = 1 - Math.abs(i / n);
            0 > a && (a = 0), Vel(e, {left: i, opacity: a}, {duration: 50, queue: !1, easing: "easeOutQuad"})
        }), s.on("panend", function (t) {
            var i = t.deltaX, a = 80;
            Math.abs(i) > a ? Vel(e, {marginTop: "-40px"}, {
                duration: 375,
                easing: "easeOutExpo",
                queue: !1,
                complete: function () {
                    "function" == typeof n && n(), e.parentNode.removeChild(e)
                }
            }) : (e.classList.remove("panning"), Vel(e, {left: 0, opacity: 1}, {
                duration: 300,
                easing: "easeOutExpo",
                queue: !1
            }))
        }), e
    }

    i = i || "";
    var r = document.getElementById("toast-container");
    null === r && (r = document.createElement("div"), r.id = "toast-container", document.body.appendChild(r));
    var o = a(t);
    t && r.appendChild(o), o.style.top = "35px", o.style.opacity = 0, Vel(o, {top: "0px", opacity: 1}, {
        duration: 300,
        easing: "easeOutCubic",
        queue: !1
    });
    var s = e, l = setInterval(function () {
        null === o.parentNode && window.clearInterval(l), o.classList.contains("panning") || (s -= 20), 0 >= s && (Vel(o, {
            opacity: 0,
            marginTop: "-40px"
        }, {
            duration: 375, easing: "easeOutExpo", queue: !1, complete: function () {
                "function" == typeof n && n(), this[0].parentNode.removeChild(this[0])
            }
        }), window.clearInterval(l))
    }, 20)
}, function (t) {
    var e = {
        init: function (e) {
            var i = {menuWidth: 240, edge: "left", closeOnClick: !1};
            e = t.extend(i, e), t(this).each(function () {
                function i(i) {
                    r = !1, o = !1, t("body").css("overflow", ""), t("#sidenav-overlay").velocity({opacity: 0}, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function () {
                            t(this).remove()
                        }
                    }), "left" === e.edge ? (t(".drag-target").css({
                        width: "",
                        right: "",
                        left: "0"
                    }), a.velocity({left: -1 * (e.menuWidth + 10)}, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutCubic",
                        complete: function () {
                            i === !0 && (a.removeAttr("style"), a.css("width", e.menuWidth))
                        }
                    })) : (t(".drag-target").css({
                        width: "",
                        right: "0",
                        left: ""
                    }), a.velocity({right: -1 * (e.menuWidth + 10)}, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutCubic",
                        complete: function () {
                            i === !0 && (a.removeAttr("style"), a.css("width", e.menuWidth))
                        }
                    }))
                }

                var n = t(this), a = t("#" + n.attr("data-activates"));
                240 != e.menuWidth && a.css("width", e.menuWidth), t("body").append(t('<div class="drag-target"></div>')), "left" == e.edge ? (a.css("left", -1 * (e.menuWidth + 10)), t(".drag-target").css({left: 0})) : (a.addClass("right-aligned").css("right", -1 * (e.menuWidth + 10)).css("left", ""), t(".drag-target").css({right: 0})), a.hasClass("fixed") && window.innerWidth > 992 && a.css("left", 0), a.hasClass("fixed") && t(window).resize(function () {
                    window.innerWidth > 992 ? 0 !== t("#sidenav-overlay").css("opacity") && o ? i(!0) : (a.removeAttr("style"), a.css("width", e.menuWidth)) : o === !1 && ("left" === e.edge ? a.css("left", -1 * (e.menuWidth + 10)) : a.css("right", -1 * (e.menuWidth + 10)))
                }), e.closeOnClick === !0 && a.on("click.itemclick", "a:not(.collapsible-header)", function () {
                    i()
                });
                var r = !1, o = !1;
                t(".drag-target").on("click", function () {
                    i()
                }), t(".drag-target").hammer({prevent_default: !1}).bind("pan", function (n) {
                    if ("touch" == n.gesture.pointerType) {
                        {
                            var r = (n.gesture.direction, n.gesture.center.x);
                            n.gesture.center.y, n.gesture.velocityX
                        }
                        if (t("body").css("overflow", "hidden"), 0 === t("#sidenav-overlay").length) {
                            var s = t('<div id="sidenav-overlay"></div>');
                            s.css("opacity", 0).click(function () {
                                i()
                            }), t("body").append(s)
                        }
                        if ("left" === e.edge && (r > e.menuWidth ? r = e.menuWidth : 0 > r && (r = 0)), "left" === e.edge)r < e.menuWidth / 2 ? o = !1 : r >= e.menuWidth / 2 && (o = !0), a.css("left", r - e.menuWidth); else {
                            r < window.innerWidth - e.menuWidth / 2 ? o = !0 : r >= window.innerWidth - e.menuWidth / 2 && (o = !1);
                            var l = -1 * (r - e.menuWidth / 2);
                            l > 0 && (l = 0), a.css("right", l)
                        }
                        var u;
                        "left" === e.edge ? (u = r / e.menuWidth, t("#sidenav-overlay").velocity({opacity: u}, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        })) : (u = Math.abs((r - window.innerWidth) / e.menuWidth), t("#sidenav-overlay").velocity({opacity: u}, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }))
                    }
                }).bind("panend", function (i) {
                    if ("touch" == i.gesture.pointerType) {
                        var n = i.gesture.velocityX;
                        r = !1, "left" === e.edge ? o && .3 >= n || -.5 > n ? (a.velocity({left: 0}, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), t("#sidenav-overlay").velocity({opacity: 1}, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), t(".drag-target").css({
                            width: "50%",
                            right: 0,
                            left: ""
                        })) : (!o || n > .3) && (t("body").css("overflow", ""), a.velocity({left: -1 * (e.menuWidth + 10)}, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), t("#sidenav-overlay").velocity({opacity: 0}, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function () {
                                t(this).remove()
                            }
                        }), t(".drag-target").css({
                            width: "10px",
                            right: "",
                            left: 0
                        })) : o && n >= -.3 || n > .5 ? (a.velocity({right: 0}, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), t("#sidenav-overlay").velocity({opacity: 1}, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), t(".drag-target").css({
                            width: "50%",
                            right: "",
                            left: 0
                        })) : (!o || -.3 > n) && (t("body").css("overflow", ""), a.velocity({right: -1 * (e.menuWidth + 10)}, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), t("#sidenav-overlay").velocity({opacity: 0}, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function () {
                                t(this).remove()
                            }
                        }), t(".drag-target").css({width: "10px", right: 0, left: ""}))
                    }
                }), n.click(function () {
                    if (o === !0)o = !1, r = !1, i(); else {
                        t("body").css("overflow", "hidden"), "left" === e.edge ? (t(".drag-target").css({
                            width: "50%",
                            right: 0,
                            left: ""
                        }), a.velocity({left: 0}, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        })) : (t(".drag-target").css({
                            width: "50%",
                            right: "",
                            left: 0
                        }), a.velocity({right: 0}, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), a.css("left", ""));
                        var n = t('<div id="sidenav-overlay"></div>');
                        n.css("opacity", 0).click(function () {
                            o = !1, r = !1, i(), n.velocity({opacity: 0}, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function () {
                                    t(this).remove()
                                }
                            })
                        }), t("body").append(n), n.velocity({opacity: 1}, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function () {
                                o = !0, r = !1
                            }
                        })
                    }
                    return !1
                })
            })
        }, show: function () {
            this.trigger("click")
        }, hide: function () {
            t("#sidenav-overlay").trigger("click")
        }
    };
    t.fn.sideNav = function (i) {
        return e[i] ? e[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.sideNav") : e.init.apply(this, arguments)
    }
}(jQuery), function (t) {
    function e(e, i, n, a) {
        var r = t();
        return t.each(o, function (t, o) {
            if (o.height() > 0) {
                var s = o.offset().top, l = o.offset().left, u = l + o.width(), c = s + o.height(), d = !(l > i || a > u || s > n || e > c);
                d && r.push(o)
            }
        }), r
    }

    function i() {
        ++u;
        var i = r.scrollTop(), n = r.scrollLeft(), a = n + r.width(), o = i + r.height(), l = e(i + c.top + 200, a + c.right, o + c.bottom, n + c.left);
        t.each(l, function (t, e) {
            var i = e.data("scrollSpy:ticks");
            "number" != typeof i && e.triggerHandler("scrollSpy:enter"), e.data("scrollSpy:ticks", u)
        }), t.each(s, function (t, e) {
            var i = e.data("scrollSpy:ticks");
            "number" == typeof i && i !== u && (e.triggerHandler("scrollSpy:exit"), e.data("scrollSpy:ticks", null))
        }), s = l
    }

    function n() {
        r.trigger("scrollSpy:winSize")
    }

    function a(t, e, i) {
        var n, a, r, o = null, s = 0;
        i || (i = {});
        var l = function () {
            s = i.leading === !1 ? 0 : d(), o = null, r = t.apply(n, a), n = a = null
        };
        return function () {
            var u = d();
            s || i.leading !== !1 || (s = u);
            var c = e - (u - s);
            return n = this, a = arguments, 0 >= c ? (clearTimeout(o), o = null, s = u, r = t.apply(n, a), n = a = null) : o || i.trailing === !1 || (o = setTimeout(l, c)), r
        }
    }

    var r = t(window), o = [], s = [], l = !1, u = 0, c = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }, d = Date.now || function () {
            return (new Date).getTime()
        };
    t.scrollSpy = function (e, n) {
        var s = [];
        e = t(e), e.each(function (e, i) {
            o.push(t(i)), t(i).data("scrollSpy:id", e), t("a[href=#" + t(i).attr("id") + "]").click(function (e) {
                e.preventDefault();
                var i = t(this.hash).offset().top + 1;
                t("html, body").animate({scrollTop: i - 200}, {duration: 400, queue: !1, easing: "easeOutCubic"})
            })
        }), n = n || {throttle: 100}, c.top = n.offsetTop || 0, c.right = n.offsetRight || 0, c.bottom = n.offsetBottom || 0, c.left = n.offsetLeft || 0;
        var u = a(i, n.throttle || 100), d = function () {
            t(document).ready(u)
        };
        return l || (r.on("scroll", d), r.on("resize", d), l = !0), setTimeout(d, 0), e.on("scrollSpy:enter", function () {
            s = t.grep(s, function (t) {
                return 0 != t.height()
            });
            var e = t(this);
            s[0] ? (t("a[href=#" + s[0].attr("id") + "]").removeClass("active"), e.data("scrollSpy:id") < s[0].data("scrollSpy:id") ? s.unshift(t(this)) : s.push(t(this))) : s.push(t(this)), t("a[href=#" + s[0].attr("id") + "]").addClass("active")
        }), e.on("scrollSpy:exit", function () {
            if (s = t.grep(s, function (t) {
                    return 0 != t.height()
                }), s[0]) {
                t("a[href=#" + s[0].attr("id") + "]").removeClass("active");
                var e = t(this);
                s = t.grep(s, function (t) {
                    return t.attr("id") != e.attr("id")
                }), s[0] && t("a[href=#" + s[0].attr("id") + "]").addClass("active")
            }
        }), e
    }, t.winSizeSpy = function (e) {
        return t.winSizeSpy = function () {
            return r
        }, e = e || {throttle: 100}, r.on("resize", a(n, e.throttle || 100))
    }, t.fn.scrollSpy = function (e) {
        return t.scrollSpy(t(this), e)
    }
}(jQuery), function (t) {
    t(document).ready(function () {
        function e(e) {
            var i = e.css("font-family"), a = e.css("font-size");
            a && n.css("font-size", a), i && n.css("font-family", i), "off" === e.attr("wrap") && n.css("overflow-wrap", "normal").css("white-space", "pre"), n.text(e.val() + "\n");
            var r = n.html().replace(/\n/g, "<br>");
            n.html(r), e.is(":visible") ? n.css("width", e.width()) : n.css("width", t(window).width() / 2), e.css("height", n.height())
        }

        Materialize.updateTextFields = function () {
            var e = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
            t(e).each(function (e, i) {
                t(i).val().length > 0 || void 0 !== t(this).attr("placeholder") || t(i)[0].validity.badInput === !0 ? t(this).siblings("label, i").addClass("active") : t(this).siblings("label, i").removeClass("active")
            })
        };
        var i = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
        t("input[autofocus]").siblings("label, i").addClass("active"), t(document).on("change", i, function () {
            (0 !== t(this).val().length || void 0 !== t(this).attr("placeholder")) && t(this).siblings("label, i").addClass("active"), validate_field(t(this))
        }), t(document).ready(function () {
            Materialize.updateTextFields()
        }), t(document).on("reset", function (e) {
            var n = t(e.target);
            n.is("form") && (n.find(i).removeClass("valid").removeClass("invalid"), n.find(i).each(function () {
                "" === t(this).attr("value") && t(this).siblings("label, i").removeClass("active")
            }), n.find("select.initialized").each(function () {
                var t = n.find("option[selected]").text();
                n.siblings("input.select-dropdown").val(t)
            }))
        }), t(document).on("focus", i, function () {
            t(this).siblings("label, i").addClass("active")
        }), t(document).on("blur", i, function () {
            var e = t(this);
            0 === e.val().length && e[0].validity.badInput !== !0 && void 0 === e.attr("placeholder") && e.siblings("label, i").removeClass("active"), validate_field(e)
        }), validate_field = function (t) {
            var e = void 0 !== t.attr("length"), i = parseInt(t.attr("length")), n = t.val().length;
            0 === t.val().length && t[0].validity.badInput === !1 ? t.hasClass("validate") && (t.removeClass("valid"), t.removeClass("invalid")) : t.hasClass("validate") && (t.is(":valid") && e && i > n || t.is(":valid") && !e ? (t.removeClass("invalid"), t.addClass("valid")) : (t.removeClass("valid"), t.addClass("invalid")))
        };
        var n = t(".hiddendiv").first();
        n.length || (n = t('<div class="hiddendiv common"></div>'), t("body").append(n));
        var a = ".materialize-textarea";
        t(a).each(function () {
            var i = t(this);
            i.val().length && e(i)
        }), t("body").on("keyup keydown", a, function () {
            e(t(this))
        }), t(".file-field").each(function () {
            var e = t(this).find("input.file-path");
            t(this).find('input[type="file"]').change(function () {
                e.val(t(this)[0].files[0].name), e.trigger("change")
            })
        });
        var r, o = "input[type=range]", s = !1;
        t(o).each(function () {
            var e = t('<span class="thumb"><span class="value"></span></span>');
            t(this).after(e)
        });
        var l = ".range-field";
        t(document).on("change", o, function () {
            var e = t(this).siblings(".thumb");
            e.find(".value").html(t(this).val())
        }), t(document).on("mousedown touchstart", o, function (e) {
            var i = t(this).siblings(".thumb");
            i.length <= 0 && (i = t('<span class="thumb"><span class="value"></span></span>'), t(this).append(i)), i.find(".value").html(t(this).val()), s = !0, t(this).addClass("active"), i.hasClass("active") || i.velocity({
                height: "30px",
                width: "30px",
                top: "-20px",
                marginLeft: "-15px"
            }, {
                duration: 300,
                easing: "easeOutExpo"
            }), r = void 0 === e.pageX || null === e.pageX ? e.originalEvent.touches[0].pageX - t(this).offset().left : e.pageX - t(this).offset().left;
            var n = t(this).outerWidth();
            0 > r ? r = 0 : r > n && (r = n), i.addClass("active").css("left", r), i.find(".value").html(t(this).val())
        }), t(document).on("mouseup touchend", l, function () {
            s = !1, t(this).removeClass("active")
        }), t(document).on("mousemove touchmove", l, function (e) {
            var i, n = t(this).children(".thumb");
            if (s) {
                n.hasClass("active") || n.velocity({
                    height: "30px",
                    width: "30px",
                    top: "-20px",
                    marginLeft: "-15px"
                }, {
                    duration: 300,
                    easing: "easeOutExpo"
                }), i = void 0 === e.pageX || null === e.pageX ? e.originalEvent.touches[0].pageX - t(this).offset().left : e.pageX - t(this).offset().left;
                var a = t(this).outerWidth();
                0 > i ? i = 0 : i > a && (i = a), n.addClass("active").css("left", i)
            }
        }), t(document).on("mouseout touchleave", l, function () {
            if (!s) {
                var e = t(this).children(".thumb");
                e.hasClass("active") && e.velocity({
                    height: "0",
                    width: "0",
                    top: "10px",
                    marginLeft: "-6px"
                }, {duration: 100}), e.removeClass("active")
            }
        })
    }), t.fn.material_select = function (e) {
        t(this).each(function () {
            if ($select = t(this), !$select.hasClass("browser-default")) {
                var i = $select.data("select-id");
                if (i && ($select.parent().find("i").remove(), $select.parent().find("input").remove(), $select.unwrap(), t("ul#select-options-" + i).remove()), "destroy" === e)return void $select.data("select-id", null).removeClass("initialized");
                var n = Materialize.guid();
                $select.data("select-id", n);
                var a = t('<div class="select-wrapper"></div>');
                a.addClass($select.attr("class"));
                var r, o = t('<ul id="select-options-' + n + '" class="dropdown-content select-dropdown"></ul>'), s = $select.children("option");
                r = void 0 !== $select.find("option:selected") ? $select.find("option:selected") : o.first(), s.each(function () {
                    o.append(t('<li class="' + (t(this).is(":disabled") ? "disabled" : "") + '"><span>' + t(this).html() + "</span></li>"))
                }), o.find("li").each(function (i) {
                    var n = $select;
                    t(this).click(function () {
                        t(this).hasClass("disabled") || (n.find("option").eq(i).prop("selected", !0), n.trigger("change"), n.siblings("input.select-dropdown").val(t(this).text()), "undefined" != typeof e && e())
                    })
                }), $select.wrap(a);
                var l = t('<span class="caret">&#9660;</span>');
                $select.is(":disabled") && l.addClass("disabled");
                var u = t('<input type="text" class="select-dropdown" readonly="true" ' + ($select.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + n + '" value="' + r.html() + '"/>');
                $select.before(u), u.before(l), t("body").append(o), $select.is(":disabled") || u.dropdown({hover: !1}), $select.attr("tabindex") && t(u[0]).attr("tabindex", $select.attr("tabindex")), $select.addClass("initialized"), u.on("focus", function () {
                    t(this).trigger("open"), r = t(this).val(), selectedOption = o.find("li").filter(function () {
                        return t(this).text().toLowerCase() === r.toLowerCase()
                    })[0], activateOption(o, selectedOption)
                }), u.on("blur", function () {
                    t(this).trigger("close")
                }), activateOption = function (e, i) {
                    e.find("li.active").removeClass("active"), t(i).addClass("active"), e.scrollTo(i)
                }, filterQuery = [], onKeyDown = function (e) {
                    if (9 == e.which)return void u.trigger("close");
                    if (40 == e.which && !o.is(":visible"))return void u.trigger("open");
                    if (13 != e.which || o.is(":visible")) {
                        e.preventDefault(), letter = String.fromCharCode(e.which).toLowerCase();
                        var i = [9, 13, 27, 38, 40];
                        letter && -1 === i.indexOf(e.which) && (filterQuery.push(letter), string = filterQuery.join(""), newOption = o.find("li").filter(function () {
                            return 0 === t(this).text().toLowerCase().indexOf(string)
                        })[0], newOption && activateOption(o, newOption)), 13 == e.which && (activeOption = o.find("li.active:not(.disabled)")[0], activeOption && (t(activeOption).trigger("click"), u.trigger("close"))), 40 == e.which && (newOption = o.find("li.active").next("li:not(.disabled)")[0], newOption && activateOption(o, newOption)), 27 == e.which && u.trigger("close"), 38 == e.which && (newOption = o.find("li.active").prev("li:not(.disabled)")[0], newOption && activateOption(o, newOption)), setTimeout(function () {
                            filterQuery = []
                        }, 1e3)
                    }
                }, u.on("keydown", onKeyDown)
            }
        })
    }
}(jQuery), function (t) {
    var e = {
        init: function (e) {
            var i = {indicators: !0, height: 400, transition: 500, interval: 6e3};
            return e = t.extend(i, e), this.each(function () {
                function i(t, e) {
                    t.hasClass("center-align") ? t.velocity({opacity: 0, translateY: -100}, {
                        duration: e,
                        queue: !1
                    }) : t.hasClass("right-align") ? t.velocity({opacity: 0, translateX: 100}, {
                        duration: e,
                        queue: !1
                    }) : t.hasClass("left-align") && t.velocity({opacity: 0, translateX: -100}, {
                        duration: e,
                        queue: !1
                    })
                }

                function n(t) {
                    t >= s.length ? t = 0 : 0 > t && (t = s.length - 1), l = o.find(".active").index(), l != t && (a = s.eq(l), $caption = a.find(".caption"), a.removeClass("active"), a.velocity({opacity: 0}, {
                        duration: e.transition,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function () {
                            s.not(".active").velocity({opacity: 0, translateX: 0, translateY: 0}, {
                                duration: 0,
                                queue: !1
                            })
                        }
                    }), i($caption, e.transition), e.indicators && u.eq(l).removeClass("active"), s.eq(t).velocity({opacity: 1}, {
                        duration: e.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), s.eq(t).find(".caption").velocity({
                        opacity: 1,
                        translateX: 0,
                        translateY: 0
                    }, {
                        duration: e.transition,
                        delay: e.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), s.eq(t).addClass("active"), e.indicators && u.eq(t).addClass("active"))
                }

                var a, r = t(this), o = r.find("ul.slides").first(), s = o.find("li"), l = o.find(".active").index();
                if (-1 != l && (a = s.eq(l)), r.hasClass("fullscreen") || (r.height(e.indicators ? e.height + 40 : e.height), o.height(e.height)), s.find(".caption").each(function () {
                        i(t(this), 0)
                    }), s.find("img").each(function () {
                        t(this).css("background-image", "url(" + t(this).attr("src") + ")"), t(this).attr("src", "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==")
                    }), e.indicators) {
                    var u = t('<ul class="indicators"></ul>');
                    s.each(function () {
                        var i = t('<li class="indicator-item"></li>');
                        i.click(function () {
                            var i = o.parent(), a = i.find(t(this)).index();
                            n(a), clearInterval($interval), $interval = setInterval(function () {
                                l = o.find(".active").index(), s.length == l + 1 ? l = 0 : l += 1, n(l)
                            }, e.transition + e.interval)
                        }), u.append(i)
                    }), r.append(u), u = r.find("ul.indicators").find("li.indicator-item")
                }
                a ? a.show() : (s.first().addClass("active").velocity({opacity: 1}, {
                    duration: e.transition,
                    queue: !1,
                    easing: "easeOutQuad"
                }), l = 0, a = s.eq(l), e.indicators && u.eq(l).addClass("active")), a.find("img").each(function () {
                    a.find(".caption").velocity({opacity: 1, translateX: 0, translateY: 0}, {
                        duration: e.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                    })
                }), $interval = setInterval(function () {
                    l = o.find(".active").index(), n(l + 1)
                }, e.transition + e.interval);
                var c = !1, d = !1, p = !1;
                r.hammer({prevent_default: !1}).bind("pan", function (t) {
                    if ("touch" === t.gesture.pointerType) {
                        clearInterval($interval);
                        var e = t.gesture.direction, i = t.gesture.deltaX, n = t.gesture.velocityX;
                        $curr_slide = o.find(".active"), $curr_slide.velocity({translateX: i}, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), 4 === e && (i > r.innerWidth() / 2 || -.65 > n) ? p = !0 : 2 === e && (i < -1 * r.innerWidth() / 2 || n > .65) && (d = !0);
                        var a;
                        d && (a = $curr_slide.next(), 0 === a.length && (a = s.first()), a.velocity({opacity: 1}, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        })), p && (a = $curr_slide.prev(), 0 === a.length && (a = s.last()), a.velocity({opacity: 1}, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }))
                    }
                }).bind("panend", function (t) {
                    "touch" === t.gesture.pointerType && ($curr_slide = o.find(".active"), c = !1, curr_index = o.find(".active").index(), p || d ? d ? (n(curr_index + 1), $curr_slide.velocity({translateX: -1 * r.innerWidth()}, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function () {
                            $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: !1})
                        }
                    })) : p && (n(curr_index - 1), $curr_slide.velocity({translateX: r.innerWidth()}, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function () {
                            $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: !1})
                        }
                    })) : $curr_slide.velocity({translateX: 0}, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), d = !1, p = !1, clearInterval($interval), $interval = setInterval(function () {
                        l = o.find(".active").index(), s.length == l + 1 ? l = 0 : l += 1, n(l)
                    }, e.transition + e.interval))
                }), r.on("sliderPause", function () {
                    clearInterval($interval)
                }), r.on("sliderStart", function () {
                    clearInterval($interval), $interval = setInterval(function () {
                        l = o.find(".active").index(), s.length == l + 1 ? l = 0 : l += 1, n(l)
                    }, e.transition + e.interval)
                })
            })
        }, pause: function () {
            t(this).trigger("sliderPause")
        }, start: function () {
            t(this).trigger("sliderStart")
        }
    };
    t.fn.slider = function (i) {
        return e[i] ? e[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.tooltip") : e.init.apply(this, arguments)
    }
}(jQuery), function (t) {
    t(document).ready(function () {
        t(document).on("click.card", ".card", function (e) {
            t(this).find(".card-reveal").length && (t(e.target).is(t(".card-reveal .card-title")) || t(e.target).is(t(".card-reveal .card-title i")) ? t(this).find(".card-reveal").velocity({translateY: 0}, {
                duration: 225,
                queue: !1,
                easing: "easeInOutQuad",
                complete: function () {
                    t(this).css({display: "none"})
                }
            }) : (t(e.target).is(t(".card .activator")) || t(e.target).is(t(".card .activator i"))) && t(this).find(".card-reveal").css({display: "block"}).velocity("stop", !1).velocity({translateY: "-100%"}, {
                duration: 300,
                queue: !1,
                easing: "easeInOutQuad"
            }))
        })
    })
}(jQuery), function (t) {
    t(document).ready(function () {
        t.fn.pushpin = function (e) {
            var i = {top: 0, bottom: 1 / 0, offset: 0};
            return e = t.extend(i, e), $index = 0, this.each(function () {
                function i(t) {
                    t.removeClass("pin-top"), t.removeClass("pinned"), t.removeClass("pin-bottom")
                }

                function n(n, a) {
                    n.each(function () {
                        e.top <= a && e.bottom >= a && !t(this).hasClass("pinned") && (i(t(this)), t(this).css("top", e.offset), t(this).addClass("pinned")), a < e.top && !t(this).hasClass("pin-top") && (i(t(this)), t(this).css("top", 0), t(this).addClass("pin-top")), a > e.bottom && !t(this).hasClass("pin-bottom") && (i(t(this)), t(this).addClass("pin-bottom"), t(this).css("top", e.bottom - o))
                    })
                }

                var a = Materialize.guid(), r = t(this), o = t(this).offset().top;
                n(r, t(window).scrollTop()), t(window).on("scroll." + a, function () {
                    var i = t(window).scrollTop() + e.offset;
                    n(r, i)
                })
            })
        }
    })
}(jQuery), function (t) {
    t(document).ready(function () {
        t.fn.reverse = [].reverse, t(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn", function () {
            var i = t(this);
            e(i)
        }), t(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn", function () {
            var e = t(this);
            i(e)
        })
    }), t.fn.extend({
        openFAB: function () {
            var i = t(this);
            e(i)
        }, closeFAB: function () {
            i($this)
        }
    });
    var e = function (e) {
        if ($this = e, $this.hasClass("active") === !1) {
            $this.addClass("active"), $this.find("ul .btn-floating").velocity({
                scaleY: ".4",
                scaleX: ".4",
                translateY: "40px"
            }, {duration: 0});
            var i = 0;
            $this.find("ul .btn-floating").reverse().each(function () {
                t(this).velocity({opacity: "1", scaleX: "1", scaleY: "1", translateY: "0"}, {
                    duration: 80,
                    delay: i
                }), i += 40
            })
        }
    }, i = function (t) {
        $this = t, $this.removeClass("active");
        $this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({
            opacity: "0",
            scaleX: ".4",
            scaleY: ".4",
            translateY: "40px"
        }, {duration: 80})
    }
}(jQuery), function (t) {
    Materialize.fadeInImage = function (e) {
        var i = t(e);
        i.css({opacity: 0}), t(i).velocity({opacity: 1}, {
            duration: 650,
            queue: !1,
            easing: "easeOutSine"
        }), t(i).velocity({opacity: 1}, {
            duration: 1300, queue: !1, easing: "swing", step: function (e, i) {
                i.start = 100;
                var n = e / 100, a = 150 - (100 - e) / 1.75;
                100 > a && (a = 100), e >= 0 && t(this).css({
                    "-webkit-filter": "grayscale(" + n + ")brightness(" + a + "%)",
                    filter: "grayscale(" + n + ")brightness(" + a + "%)"
                })
            }
        })
    }, Materialize.showStaggeredList = function (e) {
        var i = 0;
        t(e).find("li").velocity({translateX: "-100px"}, {duration: 0}), t(e).find("li").each(function () {
            t(this).velocity({opacity: "1", translateX: "0"}, {duration: 800, delay: i, easing: [60, 10]}), i += 120
        })
    }, t(document).ready(function () {
        var e = !1, i = !1;
        t(".dismissable").each(function () {
            t(this).hammer({prevent_default: !1}).bind("pan", function (n) {
                if ("touch" === n.gesture.pointerType) {
                    var a = t(this), r = n.gesture.direction, o = n.gesture.deltaX, s = n.gesture.velocityX;
                    a.velocity({translateX: o}, {
                        duration: 50,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), 4 === r && (o > a.innerWidth() / 2 || -.75 > s) && (e = !0), 2 === r && (o < -1 * a.innerWidth() / 2 || s > .75) && (i = !0)
                }
            }).bind("panend", function (n) {
                if (Math.abs(n.gesture.deltaX) < t(this).innerWidth() / 2 && (i = !1, e = !1), "touch" === n.gesture.pointerType) {
                    var a = t(this);
                    if (e || i) {
                        var r;
                        r = e ? a.innerWidth() : -1 * a.innerWidth(), a.velocity({translateX: r}, {
                            duration: 100,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function () {
                                a.css("border", "none"), a.velocity({height: 0, padding: 0}, {
                                    duration: 200,
                                    queue: !1,
                                    easing: "easeOutQuad",
                                    complete: function () {
                                        a.remove()
                                    }
                                })
                            }
                        })
                    } else a.velocity({translateX: 0}, {duration: 100, queue: !1, easing: "easeOutQuad"});
                    e = !1, i = !1
                }
            })
        })
    })
}(jQuery), function () {
    Materialize.scrollFire = function (t) {
        var e = !1;
        window.addEventListener("scroll", function () {
            e = !0
        }), setInterval(function () {
            if (e) {
                e = !1;
                for (var i = window.pageYOffset + window.innerHeight, n = 0; n < t.length; n++) {
                    var a = t[n], r = a.selector, o = a.offset, s = a.callback, l = document.querySelector(r);
                    if (null !== l) {
                        var u = l.getBoundingClientRect().top + document.body.scrollTop;
                        if (i > u + o && a.done !== !0) {
                            var c = new Function(s);
                            c(), a.done = !0
                        }
                    }
                }
            }
        }, 100)
    }
}(jQuery), function (t) {
    "function" == typeof define && define.amd ? define("picker", ["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : this.Picker = t(jQuery)
}(function (t) {
    function e(r, o, l, d) {
        function p() {
            return e._.node("div", e._.node("div", e._.node("div", e._.node("div", S.component.nodes(b.open), x.box), x.wrap), x.frame), x.holder)
        }

        function f() {
            C.data(o, S).addClass(x.input).attr("tabindex", -1).val(C.data("value") ? S.get("select", w.format) : r.value), w.editable || C.on("focus." + b.id + " click." + b.id, function (t) {
                t.preventDefault(), S.$root[0].focus()
            }).on("keydown." + b.id, g), a(r, {haspopup: !0, expanded: !1, readonly: !1, owns: r.id + "_root"})
        }

        function h() {
            S.$root.on({
                keydown: g, focusin: function (t) {
                    S.$root.removeClass(x.focused), t.stopPropagation()
                }, "mousedown click": function (e) {
                    var i = e.target;
                    i != S.$root.children()[0] && (e.stopPropagation(), "mousedown" != e.type || t(i).is("input, select, textarea, button, option") || (e.preventDefault(), S.$root[0].focus()))
                }
            }).on({
                focus: function () {
                    C.addClass(x.target)
                }, blur: function () {
                    C.removeClass(x.target)
                }
            }).on("click","[data-close]", function(e){
                var i = S.$root[0].getAttribute('id');
                var id_input = i.replace("_root", "");
                $("#"+id_input).focus();
            }).on("focus.toOpen", m).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function () {
                var e = t(this), i = e.data(), n = e.hasClass(x.navDisabled) || e.hasClass(x.disabled), a = s();
                a = a && (a.type || a.href), (n || a && !t.contains(S.$root[0], a)) && S.$root[0], !n && i.nav ? S.set("highlight", S.component.item.highlight, {nav: i.nav}) : !n && "pick"in i ? S.set("select", i.pick) : i.clear ? S.clear().close(!0) : i.close && S.close(!0)
            }), a(S.$root[0], "hidden", !0)
        }

        function v() {
            var e;
            w.hiddenName === !0 ? (e = r.name, r.name = "") : (e = ["string" == typeof w.hiddenPrefix ? w.hiddenPrefix : "", "string" == typeof w.hiddenSuffix ? w.hiddenSuffix : "_submit"], e = e[0] + r.name + e[1]), S._hidden = t('<input type=hidden name="' + e + '"' + (C.data("value") || r.value ? ' value="' + S.get("select", w.formatSubmit) + '"' : "") + ">")[0], C.on("change." + b.id, function () {
                S._hidden.value = r.value ? S.get("select", w.formatSubmit) : ""
            }), w.container ? t(w.container).append(S._hidden) : C.after(S._hidden)
        }

        function g(t) {
            var e = t.keyCode, i = /^(8|46)$/.test(e);
            return 27 == e ? (S.close(), !1) : void((32 == e || i || !b.open && S.component.key[e]) && (t.preventDefault(), t.stopPropagation(), i ? S.clear().close() : S.open()))
        }

        function m(t) {
            t.stopPropagation(), "focus" == t.type && S.$root.addClass(x.focused), S.open()
        }

        if (!r)return e;
        var y = !1, b = {id: r.id || "P" + Math.abs(~~(Math.random() * new Date))}, w = l ? t.extend(!0, {}, l.defaults, d) : d || {}, x = t.extend({}, e.klasses(), w.klass), C = t(r), k = function () {
            return this.start()
        }, S = k.prototype = {
            constructor: k, $node: C, start: function () {
                return b && b.start ? S : (b.methods = {}, b.start = !0, b.open = !1, b.type = r.type, r.autofocus = r == s(), r.readOnly = !w.editable, r.id = r.id || b.id, "text" != r.type && (r.type = "text"), S.component = new l(S, w), S.$root = t(e._.node("div", p(), x.picker, 'id="' + r.id + '_root" tabindex="0"')), h(), w.formatSubmit && v(), f(), w.container ? t(w.container).append(S.$root) : C.after(S.$root), S.on({
                    start: S.component.onStart,
                    render: S.component.onRender,
                    stop: S.component.onStop,
                    open: S.component.onOpen,
                    close: S.component.onClose,
                    set: S.component.onSet
                }).on({
                    start: w.onStart,
                    render: w.onRender,
                    stop: w.onStop,
                    open: w.onOpen,
                    close: w.onClose,
                    set: w.onSet
                }), y = i(S.$root.children()[0]), r.autofocus && S.open(), S.trigger("start").trigger("render"))
            }, render: function (t) {
                return t ? S.$root.html(p()) : S.$root.find("." + x.box).html(S.component.nodes(b.open)), S.trigger("render")
            }, stop: function () {
                return b.start ? (S.close(), S._hidden && S._hidden.parentNode.removeChild(S._hidden), S.$root.remove(), C.removeClass(x.input).removeData(o), setTimeout(function () {
                    C.off("." + b.id)
                }, 0), r.type = b.type, r.readOnly = !1, S.trigger("stop"), b.methods = {}, b.start = !1, S) : S
            }, open: function (i) {
                return b.open ? S : (C.addClass(x.active), a(r, "expanded", !0), setTimeout(function () {
                    S.$root.addClass(x.opened), a(S.$root[0], "hidden", !1)
                }, 0), i !== !1 && (b.open = !0, y && c.css("overflow", "hidden").css("padding-right", "+=" + n()), S.$root[0].focus(), u.on("click." + b.id + " focusin." + b.id, function (t) {
                    var e = t.target;
                    e != r && e != document && 3 != t.which && S.close(e === S.$root.children()[0])
                }).on("keydown." + b.id, function (i) {
                    var n = i.keyCode, a = S.component.key[n], r = i.target;
                    27 == n ? S.close(!0) : r != S.$root[0] || !a && 13 != n ? t.contains(S.$root[0], r) && 13 == n && (i.preventDefault(), r.click()) : (i.preventDefault(), a ? e._.trigger(S.component.key.go, S, [e._.trigger(a)]) : S.$root.find("." + x.highlighted).hasClass(x.disabled) || S.set("select", S.component.item.highlight).close())
                })), S.trigger("open"))
            }, close: function (t) {
                return t && (S.$root.off("focus.toOpen")[0].focus(), setTimeout(function () {
                    S.$root.on("focus.toOpen", m)
                }, 0)), C.removeClass(x.active), a(r, "expanded", !1), setTimeout(function () {
                    S.$root.removeClass(x.opened + " " + x.focused), a(S.$root[0], "hidden", !0)
                }, 0), b.open ? (b.open = !1, y && c.css("overflow", "").css("padding-right", "-=" + n()), u.off("." + b.id), S.trigger("close")) : S
            }, clear: function (t) {
                return S.set("clear", null, t)
            }, set: function (e, i, n) {
                var a, r, o = t.isPlainObject(e), s = o ? e : {};
                if (n = o && t.isPlainObject(i) ? i : n || {}, e) {
                    o || (s[e] = i);
                    for (a in s)r = s[a], a in S.component.item && (void 0 === r && (r = null), S.component.set(a, r, n)), ("select" == a || "clear" == a) && C.val("clear" == a ? "" : S.get(a, w.format)).trigger("change");
                    S.render()
                }
                return n.muted ? S : S.trigger("set", s)
            }, get: function (t, i) {
                if (t = t || "value", null != b[t])return b[t];
                if ("valueSubmit" == t) {
                    if (S._hidden)return S._hidden.value;
                    t = "value"
                }
                if ("value" == t)return r.value;
                if (t in S.component.item) {
                    if ("string" == typeof i) {
                        var n = S.component.get(t);
                        return n ? e._.trigger(S.component.formats.toString, S.component, [i, n]) : ""
                    }
                    return S.component.get(t)
                }
            }, on: function (e, i, n) {
                var a, r, o = t.isPlainObject(e), s = o ? e : {};
                if (e) {
                    o || (s[e] = i);
                    for (a in s)r = s[a], n && (a = "_" + a), b.methods[a] = b.methods[a] || [], b.methods[a].push(r)
                }
                return S
            }, off: function () {
                var t, e, i = arguments;
                for (t = 0, namesCount = i.length; t < namesCount; t += 1)e = i[t], e in b.methods && delete b.methods[e];
                return S
            }, trigger: function (t, i) {
                var n = function (t) {
                    var n = b.methods[t];
                    n && n.map(function (t) {
                        e._.trigger(t, S, [i])
                    })
                };
                return n("_" + t), n(t), S
            }
        };
        return new k
    }

    function i(t) {
        var e, i = "position";
        return t.currentStyle ? e = t.currentStyle[i] : window.getComputedStyle && (e = getComputedStyle(t)[i]), "fixed" == e
    }

    function n() {
        if (c.height() <= l.height())return 0;
        var e = t('<div style="visibility:hidden;width:100px" />').appendTo("body"), i = e[0].offsetWidth;
        e.css("overflow", "scroll");
        var n = t('<div style="width:100%" />').appendTo(e), a = n[0].offsetWidth;
        return e.remove(), i - a
    }

    function a(e, i, n) {
        if (t.isPlainObject(i))for (var a in i)r(e, a, i[a]); else r(e, i, n)
    }

    function r(t, e, i) {
        t.setAttribute(("role" == e ? "" : "aria-") + e, i)
    }

    function o(e, i) {
        t.isPlainObject(e) || (e = {attribute: i}), i = "";
        for (var n in e) {
            var a = ("role" == n ? "" : "aria-") + n, r = e[n];
            i += null == r ? "" : a + '="' + e[n] + '"'
        }
        return i
    }

    function s() {
        try {
            return document.activeElement
        } catch (t) {
        }
    }

    var l = t(window), u = t(document), c = t(document.documentElement);
    return e.klasses = function (t) {
        return t = t || "picker", {
            picker: t,
            opened: t + "--opened",
            focused: t + "--focused",
            input: t + "__input",
            active: t + "__input--active",
            target: t + "__input--target",
            holder: t + "__holder",
            frame: t + "__frame",
            wrap: t + "__wrap",
            box: t + "__box"
        }
    }, e._ = {
        group: function (t) {
            for (var i, n = "", a = e._.trigger(t.min, t); a <= e._.trigger(t.max, t, [a]); a += t.i)i = e._.trigger(t.item, t, [a]), n += e._.node(t.node, i[0], i[1], i[2]);
            return n
        }, node: function (e, i, n, a) {
            return i ? (i = t.isArray(i) ? i.join("") : i, n = n ? ' class="' + n + '"' : "", a = a ? " " + a : "", "<" + e + n + a + ">" + i + "</" + e + ">") : ""
        }, lead: function (t) {
            return (10 > t ? "0" : "") + t
        }, trigger: function (t, e, i) {
            return "function" == typeof t ? t.apply(e, i || []) : t
        }, digits: function (t) {
            return /\d/.test(t[1]) ? 2 : 1
        }, isDate: function (t) {
            return {}.toString.call(t).indexOf("Date") > -1 && this.isInteger(t.getDate())
        }, isInteger: function (t) {
            return {}.toString.call(t).indexOf("Number") > -1 && t % 1 === 0
        }, ariaAttr: o
    }, e.extend = function (i, n) {
        t.fn[i] = function (a, r) {
            var o = this.data(i);
            return "picker" == a ? o : o && "string" == typeof a ? e._.trigger(o[a], o, [r]) : this.each(function () {
                var r = t(this);
                r.data(i) || new e(this, i, n, a)
            })
        }, t.fn[i].defaults = n.defaults
    }, e
}), function (t) {
    "function" == typeof define && define.amd ? define(["picker", "jquery"], t) : "object" == typeof exports ? module.exports = t(require("./picker.js"), require("jquery")) : t(Picker, jQuery)
}(function (t, e) {
    function i(t, e) {
        var i = this, n = t.$node[0], a = n.value, r = t.$node.data("value"), o = r || a, s = r ? e.formatSubmit : e.format, l = function () {
            return n.currentStyle ? "rtl" == n.currentStyle.direction : "rtl" == getComputedStyle(t.$root[0]).direction
        };
        i.settings = e, i.$node = t.$node, i.queue = {
            min: "measure create",
            max: "measure create",
            now: "now create",
            select: "parse create validate",
            highlight: "parse navigate create validate",
            view: "parse create validate viewset",
            disable: "deactivate",
            enable: "activate"
        }, i.item = {}, i.item.clear = null, i.item.disable = (e.disable || []).slice(0), i.item.enable = -function (t) {
            return t[0] === !0 ? t.shift() : -1
        }(i.item.disable), i.set("min", e.min).set("max", e.max).set("now"), o ? i.set("select", o, {format: s}) : i.set("select", null).set("highlight", i.item.now), i.key = {
            40: 7,
            38: -7,
            39: function () {
                return l() ? -1 : 1
            },
            37: function () {
                return l() ? 1 : -1
            },
            go: function (t) {
                var e = i.item.highlight, n = new Date(e.year, e.month, e.date + t);
                i.set("highlight", n, {interval: t}), this.render()
            }
        }, t.on("render", function () {
            t.$root.find("." + e.klass.selectMonth).on("change", function () {
                var i = this.value;
                i && (t.set("highlight", [t.get("view").year, i, t.get("highlight").date]), t.$root.find("." + e.klass.selectMonth).trigger("focus"))
            }), t.$root.find("." + e.klass.selectYear).on("change", function () {
                var i = this.value;
                i && (t.set("highlight", [i, t.get("view").month, t.get("highlight").date]), t.$root.find("." + e.klass.selectYear).trigger("focus"))
            })
        }, 1).on("open", function () {
            var n = "";
            i.disabled(i.get("now")) && (n = ":not(." + e.klass.buttonToday + ")"), t.$root.find("button" + n + ", select").attr("disabled", !1)
        }, 1).on("close", function () {
            t.$root.find("button, select").attr("disabled", !0)
        }, 1)
    }

    var n = 7, a = 6, r = t._;
    i.prototype.set = function (t, e, i) {
        var n = this, a = n.item;
        return null === e ? ("clear" == t && (t = "select"), a[t] = e, n) : (a["enable" == t ? "disable" : "flip" == t ? "enable" : t] = n.queue[t].split(" ").map(function (a) {
            return e = n[a](t, e, i)
        }).pop(), "select" == t ? n.set("highlight", a.select, i) : "highlight" == t ? n.set("view", a.highlight, i) : t.match(/^(flip|min|max|disable|enable)$/) && (a.select && n.disabled(a.select) && n.set("select", a.select, i), a.highlight && n.disabled(a.highlight) && n.set("highlight", a.highlight, i)), n)
    }, i.prototype.get = function (t) {
        return this.item[t]
    }, i.prototype.create = function (t, i, n) {
        var a, o = this;
        return i = void 0 === i ? t : i, i == -1 / 0 || 1 / 0 == i ? a = i : e.isPlainObject(i) && r.isInteger(i.pick) ? i = i.obj : e.isArray(i) ? (i = new Date(i[0], i[1], i[2]), i = r.isDate(i) ? i : o.create().obj) : i = r.isInteger(i) || r.isDate(i) ? o.normalize(new Date(i), n) : o.now(t, i, n), {
            year: a || i.getFullYear(),
            month: a || i.getMonth(),
            date: a || i.getDate(),
            day: a || i.getDay(),
            obj: a || i,
            pick: a || i.getTime()
        }
    }, i.prototype.createRange = function (t, i) {
        var n = this, a = function (t) {
            return t === !0 || e.isArray(t) || r.isDate(t) ? n.create(t) : t
        };
        return r.isInteger(t) || (t = a(t)), r.isInteger(i) || (i = a(i)), r.isInteger(t) && e.isPlainObject(i) ? t = [i.year, i.month, i.date + t] : r.isInteger(i) && e.isPlainObject(t) && (i = [t.year, t.month, t.date + i]), {
            from: a(t),
            to: a(i)
        }
    }, i.prototype.withinRange = function (t, e) {
        return t = this.createRange(t.from, t.to), e.pick >= t.from.pick && e.pick <= t.to.pick
    }, i.prototype.overlapRanges = function (t, e) {
        var i = this;
        return t = i.createRange(t.from, t.to), e = i.createRange(e.from, e.to), i.withinRange(t, e.from) || i.withinRange(t, e.to) || i.withinRange(e, t.from) || i.withinRange(e, t.to)
    }, i.prototype.now = function (t, e, i) {
        return e = new Date, i && i.rel && e.setDate(e.getDate() + i.rel), this.normalize(e, i)
    }, i.prototype.navigate = function (t, i, n) {
        var a, r, o, s, l = e.isArray(i), u = e.isPlainObject(i), c = this.item.view;
        if (l || u) {
            for (u ? (r = i.year, o = i.month, s = i.date) : (r = +i[0], o = +i[1], s = +i[2]), n && n.nav && c && c.month !== o && (r = c.year, o = c.month), a = new Date(r, o + (n && n.nav ? n.nav : 0), 1), r = a.getFullYear(), o = a.getMonth(); new Date(r, o, s).getMonth() !== o;)s -= 1;
            i = [r, o, s]
        }
        return i
    }, i.prototype.normalize = function (t) {
        return t.setHours(0, 0, 0, 0), t
    }, i.prototype.measure = function (t, e) {
        var i = this;
        return e ? "string" == typeof e ? e = i.parse(t, e) : r.isInteger(e) && (e = i.now(t, e, {rel: e})) : e = "min" == t ? -1 / 0 : 1 / 0, e
    }, i.prototype.viewset = function (t, e) {
        return this.create([e.year, e.month, 1])
    }, i.prototype.validate = function (t, i, n) {
        var a, o, s, l, u = this, c = i, d = n && n.interval ? n.interval : 1, p = -1 === u.item.enable, f = u.item.min, h = u.item.max, v = p && u.item.disable.filter(function (t) {
                if (e.isArray(t)) {
                    var n = u.create(t).pick;
                    n < i.pick ? a = !0 : n > i.pick && (o = !0)
                }
                return r.isInteger(t)
            }).length;
        if ((!n || !n.nav) && (!p && u.disabled(i) || p && u.disabled(i) && (v || a || o) || !p && (i.pick <= f.pick || i.pick >= h.pick)))for (p && !v && (!o && d > 0 || !a && 0 > d) && (d *= -1); u.disabled(i) && (Math.abs(d) > 1 && (i.month < c.month || i.month > c.month) && (i = c, d = d > 0 ? 1 : -1), i.pick <= f.pick ? (s = !0, d = 1, i = u.create([f.year, f.month, f.date + (i.pick === f.pick ? 0 : -1)])) : i.pick >= h.pick && (l = !0, d = -1, i = u.create([h.year, h.month, h.date + (i.pick === h.pick ? 0 : 1)])), !s || !l);)i = u.create([i.year, i.month, i.date + d]);
        return i
    }, i.prototype.disabled = function (t) {
        var i = this, n = i.item.disable.filter(function (n) {
            return r.isInteger(n) ? t.day === (i.settings.firstDay ? n : n - 1) % 7 : e.isArray(n) || r.isDate(n) ? t.pick === i.create(n).pick : e.isPlainObject(n) ? i.withinRange(n, t) : void 0
        });
        return n = n.length && !n.filter(function (t) {
            return e.isArray(t) && "inverted" == t[3] || e.isPlainObject(t) && t.inverted
        }).length, -1 === i.item.enable ? !n : n || t.pick < i.item.min.pick || t.pick > i.item.max.pick
    }, i.prototype.parse = function (t, e, i) {
        var n = this, a = {};
        return e && "string" == typeof e ? (i && i.format || (i = i || {}, i.format = n.settings.format), n.formats.toArray(i.format).map(function (t) {
            var i = n.formats[t], o = i ? r.trigger(i, n, [e, a]) : t.replace(/^!/, "").length;
            i && (a[t] = e.substr(0, o)), e = e.substr(o)
        }), [a.yyyy || a.yy, +(a.mm || a.m) - 1, a.dd || a.d]) : e
    }, i.prototype.formats = function () {
        function t(t, e, i) {
            var n = t.match(/\w+/)[0];
            return i.mm || i.m || (i.m = e.indexOf(n) + 1), n.length
        }

        function e(t) {
            return t.match(/\w+/)[0].length
        }

        return {
            d: function (t, e) {
                return t ? r.digits(t) : e.date
            }, dd: function (t, e) {
                return t ? 2 : r.lead(e.date)
            }, ddd: function (t, i) {
                return t ? e(t) : this.settings.weekdaysShort[i.day]
            }, dddd: function (t, i) {
                return t ? e(t) : this.settings.weekdaysFull[i.day]
            }, m: function (t, e) {
                return t ? r.digits(t) : e.month + 1
            }, mm: function (t, e) {
                return t ? 2 : r.lead(e.month + 1)
            }, mmm: function (e, i) {
                var n = this.settings.monthsShort;
                return e ? t(e, n, i) : n[i.month]
            }, mmmm: function (e, i) {
                var n = this.settings.monthsFull;
                return e ? t(e, n, i) : n[i.month]
            }, yy: function (t, e) {
                return t ? 2 : ("" + e.year).slice(2)
            }, yyyy: function (t, e) {
                return t ? 4 : e.year
            }, toArray: function (t) {
                return t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
            }, toString: function (t, e) {
                var i = this;
                return i.formats.toArray(t).map(function (t) {
                    return r.trigger(i.formats[t], i, [0, e]) || t.replace(/^!/, "")
                }).join("")
            }
        }
    }(), i.prototype.isDateExact = function (t, i) {
        var n = this;
        return r.isInteger(t) && r.isInteger(i) || "boolean" == typeof t && "boolean" == typeof i ? t === i : (r.isDate(t) || e.isArray(t)) && (r.isDate(i) || e.isArray(i)) ? n.create(t).pick === n.create(i).pick : e.isPlainObject(t) && e.isPlainObject(i) ? n.isDateExact(t.from, i.from) && n.isDateExact(t.to, i.to) : !1
    }, i.prototype.isDateOverlap = function (t, i) {
        var n = this, a = n.settings.firstDay ? 1 : 0;
        return r.isInteger(t) && (r.isDate(i) || e.isArray(i)) ? (t = t % 7 + a, t === n.create(i).day + 1) : r.isInteger(i) && (r.isDate(t) || e.isArray(t)) ? (i = i % 7 + a, i === n.create(t).day + 1) : e.isPlainObject(t) && e.isPlainObject(i) ? n.overlapRanges(t, i) : !1
    }, i.prototype.flipEnable = function (t) {
        var e = this.item;
        e.enable = t || (-1 == e.enable ? 1 : -1)
    }, i.prototype.deactivate = function (t, i) {
        var n = this, a = n.item.disable.slice(0);
        return "flip" == i ? n.flipEnable() : i === !1 ? (n.flipEnable(1), a = []) : i === !0 ? (n.flipEnable(-1), a = []) : i.map(function (t) {
            for (var i, o = 0; o < a.length; o += 1)if (n.isDateExact(t, a[o])) {
                i = !0;
                break
            }
            i || (r.isInteger(t) || r.isDate(t) || e.isArray(t) || e.isPlainObject(t) && t.from && t.to) && a.push(t)
        }), a
    }, i.prototype.activate = function (t, i) {
        var n = this, a = n.item.disable, o = a.length;
        return "flip" == i ? n.flipEnable() : i === !0 ? (n.flipEnable(1), a = []) : i === !1 ? (n.flipEnable(-1), a = []) : i.map(function (t) {
            var i, s, l, u;
            for (l = 0; o > l; l += 1) {
                if (s = a[l], n.isDateExact(s, t)) {
                    i = a[l] = null, u = !0;
                    break
                }
                if (n.isDateOverlap(s, t)) {
                    e.isPlainObject(t) ? (t.inverted = !0, i = t) : e.isArray(t) ? (i = t, i[3] || i.push("inverted")) : r.isDate(t) && (i = [t.getFullYear(), t.getMonth(), t.getDate(), "inverted"]);
                    break
                }
            }
            if (i)for (l = 0; o > l; l += 1)if (n.isDateExact(a[l], t)) {
                a[l] = null;
                break
            }
            if (u)for (l = 0; o > l; l += 1)if (n.isDateOverlap(a[l], t)) {
                a[l] = null;
                break
            }
            i && a.push(i)
        }), a.filter(function (t) {
            return null != t
        })
    }, i.prototype.nodes = function (t) {
        var e = this, i = e.settings, o = e.item, s = o.now, l = o.select, u = o.highlight, c = o.view, d = o.disable, p = o.min, f = o.max, h = function (t, e) {
            return i.firstDay && (t.push(t.shift()), e.push(e.shift())), r.node("thead", r.node("tr", r.group({
                min: 0,
                max: n - 1,
                i: 1,
                node: "th",
                item: function (n) {
                    return [t[n], i.klass.weekdays, 'scope=col title="' + e[n] + '"']
                }
            })))
        }((i.showWeekdaysFull ? i.weekdaysFull : i.weekdaysLetter).slice(0), i.weekdaysFull.slice(0)), v = function (t) {
            return r.node("div", " ", i.klass["nav" + (t ? "Next" : "Prev")] + (t && c.year >= f.year && c.month >= f.month || !t && c.year <= p.year && c.month <= p.month ? " " + i.klass.navDisabled : ""), "data-nav=" + (t || -1) + " " + r.ariaAttr({
                role: "button",
                controls: e.$node[0].id + "_table"
            }) + ' title="' + (t ? i.labelMonthNext : i.labelMonthPrev) + '"')
        }, g = function (n) {
            var a = i.showMonthsShort ? i.monthsShort : i.monthsFull;
            return "short_months" == n && (a = i.monthsShort), i.selectMonths && void 0 == n ? r.node("select", r.group({
                min: 0,
                max: 11,
                i: 1,
                node: "option",
                item: function (t) {
                    return [a[t], 0, "value=" + t + (c.month == t ? " selected" : "") + (c.year == p.year && t < p.month || c.year == f.year && t > f.month ? " disabled" : "")]
                }
            }), i.klass.selectMonth + " browser-default", (t ? "" : "disabled") + " " + r.ariaAttr({controls: e.$node[0].id + "_table"}) + ' title="' + i.labelMonthSelect + '"') : "short_months" == n ? null != l ? r.node("div", a[l.month]) : r.node("div", a[c.month]) : r.node("div", a[c.month], i.klass.month)
        }, m = function (n) {
            var a = c.year, o = i.selectYears === !0 ? 5 : ~~(i.selectYears / 2);
            if (o) {
                var s = p.year, l = f.year, u = a - o, d = a + o;
                if (s > u && (d += s - u, u = s), d > l) {
                    var h = u - s, v = d - l;
                    u -= h > v ? v : h, d = l
                }
                if (i.selectYears && void 0 == n)return r.node("select", r.group({
                    min: u,
                    max: d,
                    i: 1,
                    node: "option",
                    item: function (t) {
                        return [t, 0, "value=" + t + (a == t ? " selected" : "")]
                    }
                }), i.klass.selectYear + " browser-default", (t ? "" : "disabled") + " " + r.ariaAttr({controls: e.$node[0].id + "_table"}) + ' title="' + i.labelYearSelect + '"')
            }
            return "raw" == n ? r.node("div", a) : r.node("div", a, i.klass.year)
        };
        return createDayLabel = function () {
            return null != l ? r.node("div", l.date) : r.node("div", s.date)
        }, createWeekdayLabel = function () {
            var t;
            t = null != l ? l.day : s.day;
            var e = i.weekdaysFull[t];
            return e
        }, r.node("div", r.node("div", createWeekdayLabel(), "picker__weekday-display") + r.node("div", g("short_months"), i.klass.month_display) + r.node("div", createDayLabel(), i.klass.day_display) + r.node("div", m("raw"), i.klass.year_display), i.klass.date_display) + r.node("div", r.node("div", (i.selectYears ? g() + m() : g() + m()) + v() + v(1), i.klass.header) + r.node("table", h + r.node("tbody", r.group({
            min: 0,
            max: a - 1,
            i: 1,
            node: "tr",
            item: function (t) {
                var a = i.firstDay && 0 === e.create([c.year, c.month, 1]).day ? -7 : 0;
                return [r.group({
                    min: n * t - c.day + a + 1, max: function () {
                        return this.min + n - 1
                    }, i: 1, node: "td", item: function (t) {
                        t = e.create([c.year, c.month, t + (i.firstDay ? 1 : 0)]);
                        var n = l && l.pick == t.pick, a = u && u.pick == t.pick, o = d && e.disabled(t) || t.pick < p.pick || t.pick > f.pick, h = r.trigger(e.formats.toString, e, [i.format, t]);
                        return [r.node("div", t.date, function (e) {
                            return e.push(c.month == t.month ? i.klass.infocus : i.klass.outfocus), s.pick == t.pick && e.push(i.klass.now), n && e.push(i.klass.selected), a && e.push(i.klass.highlighted), o && e.push(i.klass.disabled), e.join(" ")
                        }([i.klass.day]), "data-pick=" + t.pick + " " + r.ariaAttr({
                            role: "gridcell",
                            label: h,
                            selected: n && e.$node.val() === h ? !0 : null,
                            activedescendant: a ? !0 : null,
                            disabled: o ? !0 : null
                        })), "", r.ariaAttr({role: "presentation"})]
                    }
                })]
            }
        })), i.klass.table, 'id="' + e.$node[0].id + '_table" ' + r.ariaAttr({
            role: "grid",
            controls: e.$node[0].id,
            readonly: !0
        })), i.klass.calendar_container) + r.node("div", r.node("button", i.today, "btn-flat picker__today", "type=button data-pick=" + s.pick + (t && !e.disabled(s) ? "" : " disabled") + " " + r.ariaAttr({controls: e.$node[0].id})) + r.node("button", i.clear, "btn-flat picker__clear", "type=button data-clear=1" + (t ? "" : " disabled") + " " + r.ariaAttr({controls: e.$node[0].id})) + r.node("button", i.close, "btn-flat picker__close", "type=button data-close=true " + (t ? "" : " disabled") + " " + r.ariaAttr({controls: e.$node[0].id})), i.klass.footer)
    }, i.defaults = function (t) {
        return {
            labelMonthNext: "Próximo mês",
            labelMonthPrev: "Mês Anterior",
            labelMonthSelect: "Selecione um mês",
            labelYearSelect: "Selecione um ano",
            monthsFull: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"],
            monthsShort: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
            weekdaysFull: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"],
            weekdaysShort: ["dom", "seg", "ter", "qua", "qui", "sex", "sab"],
            weekdaysLetter: ["D", "S", "T", "Q", "Q", "S", "S"],
            today: "Hoje",
            clear: "Limpar",
            close: "Aplicar",
            format: "dd/mm/yyyy",
            klass: {
                table: t + "table",
                header: t + "header",
                date_display: t + "date-display",
                day_display: t + "day-display",
                month_display: t + "month-display",
                year_display: t + "year-display",
                calendar_container: t + "calendar-container",
                navPrev: t + "nav--prev",
                navNext: t + "nav--next",
                navDisabled: t + "nav--disabled",
                month: t + "month",
                year: t + "year",
                selectMonth: t + "select--month",
                selectYear: t + "select--year",
                weekdays: t + "weekday",
                day: t + "day",
                disabled: t + "day--disabled",
                selected: t + "day--selected",
                highlighted: t + "day--highlighted",
                now: t + "day--today",
                infocus: t + "day--infocus",
                outfocus: t + "day--outfocus",
                footer: t + "footer",
                buttonClear: t + "button--clear",
                buttonToday: t + "button--today",
                buttonClose: t + "button--close"
            }
        }
    }(t.klasses().picker + "__"), t.extend("pickadate", i)
}), function (t) {
    function e() {
        var e = +t(this).attr("length"), i = +t(this).val().length, n = e >= i;
        t(this).parent().find('span[class="character-counter"]').html(i + "/" + e), a(n, t(this))
    }

    function i(e) {
        var i = t("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1);
        e.parent().append(i)
    }

    function n() {
        t(this).parent().find('span[class="character-counter"]').html("")
    }

    function a(t, e) {
        var i = e.hasClass("invalid");
        t && i ? e.removeClass("invalid") : t || i || (e.removeClass("valid"), e.addClass("invalid"))
    }

    t.fn.characterCounter = function () {
        return this.each(function () {
            var a = void 0 !== t(this).attr("length");
            a && (t(this).on("input", e), t(this).on("focus", e), t(this).on("blur", n), i(t(this)))
        })
    }, t(document).ready(function () {
        t("input, textarea").characterCounter()
    })
}(jQuery);