/* prebid.js v2.33.0
Updated : 2019-09-18 */
! function(u) {
    var s = window.pbjsChunk;
    window.pbjsChunk = function(e, t, n) {
        for (var r, i, o, a = 0, c = []; a < e.length; a++) i = e[a], d[i] && c.push(d[i][0]), d[i] = 0;
        for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
        for (s && s(e, t, n); c.length;) c.shift()();
        if (n)
            for (a = 0; a < n.length; a++) o = f(f.s = n[a]);
        return o
    };
    var n = {},
        d = {
            264: 0
        };

    function f(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return u[e].call(t.exports, t, t.exports, f), t.l = !0, t.exports
    }
    f.m = u, f.c = n, f.d = function(e, t, n) {
        f.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, f.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return f.d(t, "a", t), t
    }, f.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, f.p = "", f.oe = function(e) {
        throw console.error(e), e
    }, f(f.s = 662)
}({
    0: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "internal", function() {
            return _
        }), n.d(t, "bind", function() {
            return B
        }), t.replaceTokenInString = function(i, e, o) {
            return re(e, function(e, t) {
                e = void 0 === e ? "" : e;
                var n = o + t.toUpperCase() + o,
                    r = new RegExp(n, "g");
                i = i.replace(r, e)
            }), i
        }, t.getUniqueIdentifierStr = x, t.generateUUID = function e(t) {
            return t ? (t ^ D() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
        }, t.getBidIdParameter = function(e, t) {
            if (t && t[e]) return t[e];
            return ""
        }, t.tryAppendQueryString = function(e, t, n) {
            if (n) return e += t + "=" + encodeURIComponent(n) + "&";
            return e
        }, t.parseQueryStringParameters = function(e) {
            var t = "";
            for (var n in e) e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
            return t
        }, t.transformAdServerTargetingObj = function(t) {
            return t && 0 < Object.getOwnPropertyNames(t).length ? pe(t).map(function(e) {
                return "".concat(e, "=").concat(encodeURIComponent(ge(t, e)))
            }).join("&") : ""
        }, t.getAdUnitSizes = function(e) {
            if (!e) return;
            var t = [];
            if (e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes)) {
                var n = e.mediaTypes.banner.sizes;
                Array.isArray(n[0]) ? t = n : t.push(n)
            } else Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? t = e.sizes : t.push(e.sizes));
            return t
        }, t.parseSizesInput = function(e) {
            var t = [];
            if ("string" == typeof e) {
                var n = e.split(","),
                    r = /^(\d)+x(\d)+$/i;
                if (n)
                    for (var i in n) oe(n, i) && n[i].match(r) && t.push(n[i])
            } else if ("object" === b(e)) {
                var o = e.length;
                if (0 < o)
                    if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) t.push(k(e));
                    else
                        for (var a = 0; a < o; a++) t.push(k(e[a]))
            }
            return t
        }, t.parseGPTSingleSizeArray = k, t.parseGPTSingleSizeArrayToRtbSize = function(e) {
            if (P(e)) return {
                w: e[0],
                h: e[1]
            }
        }, t.getTopWindowLocation = M, t.getTopFrameReferrer = q, t.getAncestorOrigins = G, t.getWindowTop = W, t.getWindowSelf = L, t.getWindowLocation = z, t.getTopWindowUrl = function() {
            var t;
            try {
                t = _.getTopWindowLocation().href
            } catch (e) {
                t = ""
            }
            return t
        }, t.getTopWindowReferrer = function() {
            try {
                return window.top.document.referrer
            } catch (e) {
                return document.referrer
            }
        }, t.logMessage = F, t.logInfo = V, t.logWarn = H, t.logError = K, t.hasConsoleLogger = function() {
            return I
        }, t.debugTurnedOn = Y, t.createInvisibleIframe = function() {
            var e = document.createElement("iframe");
            return e.id = x(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e
        }, t.getParameterByName = function(e) {
            var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
            return null !== t ? decodeURIComponent(t[1].replace(/\+/g, " ")) : ""
        }, t.hasValidBidRequest = function(e, n, t) {
            var r = !1;

            function i(e, t) {
                t === n[o] && (r = !0)
            }
            for (var o = 0; o < n.length; o++)
                if (r = !1, re(e, i), !r) return K("Params are missing for bid request. One of these required paramaters are missing: " + n, t), !1;
            return !0
        }, t.addEventHandler = function(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !0) : e.attachEvent && e.attachEvent("on" + t, n)
        }, t.isA = Q, t.isFn = X, t.isStr = $, t.isArray = Z, t.isNumber = ee, t.isPlainObject = te, t.isBoolean = function(e) {
            return Q(e, A)
        }, t.isEmpty = ne, t.isEmptyStr = function(e) {
            return $(e) && (!e || 0 === e.length)
        }, t._each = re, t.contains = function(e, t) {
            if (ne(e)) return !1;
            if (X(e.indexOf)) return -1 !== e.indexOf(t);
            var n = e.length;
            for (; n--;)
                if (e[n] === t) return !0;
            return !1
        }, n.d(t, "indexOf", function() {
            return ie
        }), t._map = function(n, r) {
            if (ne(n)) return [];
            if (X(n.map)) return n.map(r);
            var i = [];
            return re(n, function(e, t) {
                i.push(r(e, t, n))
            }), i
        }, t.hasOwn = oe, t.insertElement = ae, t.triggerPixel = ce, t.callBurl = function(e) {
            var t = e.source,
                n = e.burl;
            t === y.S2S.SRC && n && _.triggerPixel(n)
        }, t.insertHtmlIntoIframe = function(e) {
            if (!e) return;
            var t = document.createElement("iframe");
            t.id = x(), t.width = 0, t.height = 0, t.hspace = "0", t.vspace = "0", t.marginWidth = "0", t.marginHeight = "0", t.style.display = "none", t.style.height = "0px", t.style.width = "0px", t.scrolling = "no", t.frameBorder = "0", t.allowtransparency = "true", _.insertElement(t, document, "body"), t.contentWindow.document.open(), t.contentWindow.document.write(e), t.contentWindow.document.close()
        }, t.insertUserSyncIframe = ue, t.createTrackPixelHtml = function(e) {
            if (!e) return "";
            var t = encodeURI(e),
                n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
            return n += '<img src="' + t + '"></div>'
        }, t.createTrackPixelIframeHtml = se, t.getIframeDocument = function(e) {
            if (!e) return;
            var t;
            try {
                t = e.contentWindow ? e.contentWindow.document : e.contentDocument.document ? e.contentDocument.document : e.contentDocument
            } catch (e) {
                _.logError("Cannot get iframe document", e)
            }
            return t
        }, t.getValueString = de, t.uniques = fe, t.flatten = le, t.getBidRequest = function(n, e) {
            return n ? (e.some(function(e) {
                var t = c()(e.bids, function(t) {
                    return ["bidId", "adId", "bid_id"].some(function(e) {
                        return t[e] === n
                    })
                });
                return t && (r = t), t
            }), r) : void 0;
            var r
        }, t.getKeys = pe, t.getValue = ge, t.getKeyByValue = function(e, t) {
            for (var n in e)
                if (e.hasOwnProperty(n) && e[n] === t) return n
        }, t.getBidderCodes = function() {
            return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits).map(function(e) {
                return e.bids.map(function(e) {
                    return e.bidder
                }).reduce(le, [])
            }).reduce(le).filter(fe)
        }, t.isGptPubadsDefined = function() {
            if (window.googletag && X(window.googletag.pubads) && X(window.googletag.pubads().getSlots)) return !0
        }, n.d(t, "getHighestCpm", function() {
            return be
        }), n.d(t, "getOldestHighestCpmBid", function() {
            return ye
        }), n.d(t, "getLatestHighestCpmBid", function() {
            return ve
        }), t.shuffle = function(e) {
            var t = e.length;
            for (; 0 < t;) {
                var n = Math.floor(Math.random() * t),
                    r = e[--t];
                e[t] = e[n], e[n] = r
            }
            return e
        }, t.adUnitsFilter = function(e, t) {
            return s()(e, t && t.adUnitCode)
        }, t.isSrcdocSupported = function(e) {
            return e.defaultView && e.defaultView.frameElement && "srcdoc" in e.defaultView.frameElement && !/firefox/i.test(navigator.userAgent)
        }, t.deepClone = me, t.inIframe = Se, t.isSafariBrowser = function() {
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
        }, t.replaceAuctionPrice = function(e, t) {
            if (!e) return;
            return e.replace(/\$\{AUCTION_PRICE\}/g, t)
        }, t.timestamp = function() {
            return (new Date).getTime()
        }, t.checkCookieSupport = Ee, t.cookiesAreEnabled = function() {
            if (_.checkCookieSupport()) return !0;
            return window.document.cookie = "prebid.cookieTest", -1 != window.document.cookie.indexOf("prebid.cookieTest")
        }, t.getCookie = function(e) {
            var t = window.document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)");
            return t ? decodeURIComponent(t[2]) : null
        }, t.setCookie = function(e, t, n) {
            document.cookie = "".concat(e, "=").concat(encodeURIComponent(t)).concat("" !== n ? "; expires=".concat(n) : "", "; path=/")
        }, t.localStorageIsEnabled = function() {
            try {
                return localStorage.setItem("prebid.cookieTest", "1"), "1" === localStorage.getItem("prebid.cookieTest")
            } catch (e) {
                return !1
            }
        }, t.delayExecution = function(e, t) {
            if (t < 1) throw new Error("numRequiredCalls must be a positive number. Got ".concat(t));
            var n = 0;
            return function() {
                ++n === t && e.apply(null, arguments)
            }
        }, t.groupBy = function(e, n) {
            return e.reduce(function(e, t) {
                return (e[t[n]] = e[t[n]] || []).push(t), e
            }, {})
        }, t.createContentToExecuteExtScriptInFriendlyFrame = function(e) {
            return e ? '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--\x3e<script src="'.concat(e, '"><\/script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>') : ""
        }, t.getDefinedParams = function(n, e) {
            return e.filter(function(e) {
                return n[e]
            }).reduce(function(e, t) {
                return g(e, function(e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n;
                    return e
                }({}, t, n[t]))
            }, {})
        }, t.isValidMediaTypes = function(e) {
            var t = ["banner", "native", "video"];
            if (!Object.keys(e).every(function(e) {
                    return s()(t, e)
                })) return !1;
            if (e.video && e.video.context) return s()(["instream", "outstream", "adpod"], e.video.context);
            return !0
        }, t.getBidderRequest = function(e, t, n) {
            return c()(e, function(e) {
                return 0 < e.bids.filter(function(e) {
                    return e.bidder === t && e.adUnitCode === n
                }).length
            }) || {
                start: null,
                auctionId: null
            }
        }, t.getUserConfiguredParams = function(e, t, n) {
            return e.filter(function(e) {
                return e.code === t
            }).map(function(e) {
                return e.bids
            }).reduce(le, []).filter(function(e) {
                return e.bidder === n
            }).map(function(e) {
                return e.params || {}
            })
        }, t.getOrigin = function() {
            return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
        }, t.getDNT = function() {
            return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack
        }, t.isAdUnitCodeMatchingSlot = function(t) {
            return function(e) {
                return Ae(t, e)
            }
        }, t.isSlotMatchingAdUnitCode = function(t) {
            return function(e) {
                return Ae(e, t)
            }
        }, t.unsupportedBidderMessage = function(e, t) {
            var n = Object.keys(e.mediaTypes || {
                banner: "banner"
            }).join(", ");
            return "\n    ".concat(e.code, " is a ").concat(n, " ad unit\n    containing bidders that don't support ").concat(n, ": ").concat(t, ".\n    This bidder won't fetch demand.\n  ")
        }, t.deletePropertyFromObject = function(e, t) {
            var n = g({}, e);
            return delete n[t], n
        }, t.isInteger = Te, t.convertCamelToUnderscore = function(e) {
            return e.replace(/(?:^|\.?)([A-Z])/g, function(e, t) {
                return "_" + t.toLowerCase()
            }).replace(/^_/, "")
        }, t.cleanObj = function(n) {
            return Object.keys(n).reduce(function(e, t) {
                return void 0 !== n[t] && (e[t] = n[t]), e
            }, {})
        }, t.pick = function(a, c) {
            return "object" === b(a) ? c.reduce(function(e, t, n) {
                if ("function" == typeof t) return e;
                var r = t,
                    i = t.match(/^(.+?)\sas\s(.+?)$/i);
                i && (t = i[1], r = i[2]);
                var o = a[t];
                return "function" == typeof c[n + 1] && (o = c[n + 1](o, e)), void 0 !== o && (e[r] = o), e
            }, {}) : {}
        }, t.transformBidderParamKeywords = function(e) {
            var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "keywords",
                i = [];
            return re(e, function(e, t) {
                if (Z(e)) {
                    var n = [];
                    re(e, function(e) {
                        !(e = de(r + "." + t, e)) && "" !== e || n.push(e)
                    }), e = n
                } else {
                    if (!$(e = de(r + "." + t, e))) return;
                    e = [e]
                }
                i.push({
                    key: t,
                    value: e
                })
            }), i
        }, t.convertTypes = function(t, n) {
            return Object.keys(t).forEach(function(e) {
                n[e] && (X(t[e]) ? n[e] = t[e](n[e]) : n[e] = function(e, t) {
                    return "string" === e ? t && t.toString() : "number" === e ? Number(t) : t
                }(t[e], n[e]), isNaN(n[e]) && delete n.key)
            }), n
        }, t.setDataInLocalStorage = function(e, t) {
            Oe() && window.localStorage.setItem(e, t)
        }, t.getDataFromLocalStorage = function(e) {
            if (Oe()) return window.localStorage.getItem(e)
        }, t.hasLocalStorage = Oe, t.isArrayOfNums = function(e, t) {
            return Z(e) && (!t || e.length === t) && e.every(function(e) {
                return Te(e)
            })
        }, t.fill = function(e, t) {
            for (var n = [], r = 0; r < t; r++) {
                var i = te(e) ? me(e) : e;
                n.push(i)
            }
            return n
        }, t.chunk = function(e, t) {
            for (var n = [], r = 0; r < Math.ceil(e.length / t); r++) {
                var i = r * t,
                    o = i + t;
                n.push(e.slice(i, o))
            }
            return n
        }, t.getMinValueFromArray = function(e) {
            return Math.min.apply(Math, p(e))
        }, t.getMaxValueFromArray = function(e) {
            return Math.max.apply(Math, p(e))
        }, t.compareOn = function(n) {
            return function(e, t) {
                return e[n] < t[n] ? 1 : e[n] > t[n] ? -1 : 0
            }
        };
        var r = n(3),
            i = n(88),
            o = n.n(i),
            a = n(12),
            c = n.n(a),
            u = n(9),
            s = n.n(u),
            d = n(10),
            f = n(89);
        n.d(t, "deepAccess", function() {
            return f.a
        });
        var l = n(90);

        function p(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function g() {
            return (g = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function b(e) {
            return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        n.d(t, "deepSetValue", function() {
            return l.a
        });
        var y = n(4),
            v = "Array",
            h = "String",
            m = "Function",
            S = "Number",
            E = "Object",
            A = "Boolean",
            T = Object.prototype.toString,
            O = Boolean(window.console),
            I = Boolean(O && window.console.log),
            w = Boolean(O && window.console.info),
            j = Boolean(O && window.console.warn),
            C = Boolean(O && window.console.error),
            _ = {
                checkCookieSupport: Ee,
                createTrackPixelIframeHtml: se,
                getWindowSelf: L,
                getWindowTop: W,
                getAncestorOrigins: G,
                getTopFrameReferrer: q,
                getWindowLocation: z,
                getTopWindowLocation: M,
                insertUserSyncIframe: ue,
                insertElement: ae,
                isFn: X,
                triggerPixel: ce,
                logError: K,
                logWarn: H,
                logMessage: F,
                logInfo: V
            },
            U = {},
            B = function(e, t) {
                return t
            }.bind(null, 1, U)() === U ? Function.prototype.bind : function(e) {
                var t = this,
                    n = Array.prototype.slice.call(arguments, 1);
                return function() {
                    return t.apply(e, n.concat(Array.prototype.slice.call(arguments)))
                }
            };
        var R, N = (R = 0, function() {
            return ++R
        });

        function x() {
            return N() + Math.random().toString(16).substr(2)
        }

        function D() {
            return window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()
        }

        function k(e) {
            if (P(e)) return e[0] + "x" + e[1]
        }

        function P(e) {
            return Z(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])
        }

        function M() {
            if (Se()) {
                var e;
                try {
                    e = _.getAncestorOrigins() || _.getTopFrameReferrer()
                } catch (e) {
                    V("could not obtain top window location", e)
                }
                if (e) return Object(d.c)(e, {
                    decodeSearchAsString: !0
                })
            }
            return _.getWindowLocation()
        }

        function q() {
            try {
                window.top.location.toString();
                for (var e, t = "";
                    (e = e ? e.parent : window).document && e.document.referrer && (t = e.document.referrer), e !== window.top;);
                return t
            } catch (e) {
                return window.document.referrer
            }
        }

        function G() {
            if (window.document.location && window.document.location.ancestorOrigins && 1 <= window.document.location.ancestorOrigins.length) return window.document.location.ancestorOrigins[window.document.location.ancestorOrigins.length - 1]
        }

        function W() {
            return window.top
        }

        function L() {
            return window.self
        }

        function z() {
            return window.location
        }

        function F() {
            Y() && I && console.log.apply(console, J(arguments, "MESSAGE:"))
        }

        function V() {
            Y() && w && console.info.apply(console, J(arguments, "INFO:"))
        }

        function H() {
            Y() && j && console.warn.apply(console, J(arguments, "WARNING:"))
        }

        function K() {
            Y() && C && console.error.apply(console, J(arguments, "ERROR:"))
        }

        function J(e, t) {
            return e = [].slice.call(e), t && e.unshift(t), e.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"), e.unshift("%cPrebid"), e
        }

        function Y() {
            return !!r.b.getConfig("debug")
        }

        function Q(e, t) {
            return T.call(e) === "[object " + t + "]"
        }

        function X(e) {
            return Q(e, m)
        }

        function $(e) {
            return Q(e, h)
        }

        function Z(e) {
            return Q(e, v)
        }

        function ee(e) {
            return Q(e, S)
        }

        function te(e) {
            return Q(e, E)
        }

        function ne(e) {
            if (!e) return !0;
            if (Z(e) || $(e)) return !(0 < e.length);
            for (var t in e)
                if (hasOwnProperty.call(e, t)) return !1;
            return !0
        }

        function re(e, t) {
            if (!ne(e)) {
                if (X(e.forEach)) return e.forEach(t, this);
                var n = 0,
                    r = e.length;
                if (0 < r)
                    for (; n < r; n++) t(e[n], n, e);
                else
                    for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n)
            }
        }
        var ie = function() {
            if (Array.prototype.indexOf) return Array.prototype.indexOf
        }();

        function oe(e, t) {
            return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t]
        }

        function ae(e, t, n, r) {
            var i;
            t = t || document, i = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head");
            try {
                if ((i = i.length ? i : t.getElementsByTagName("body")).length) {
                    i = i[0];
                    var o = r ? null : i.firstChild;
                    return i.insertBefore(e, o)
                }
            } catch (e) {}
        }

        function ce(e, t) {
            var n = new Image;
            t && _.isFn(t) && (n.addEventListener("load", t), n.addEventListener("error", t)), n.src = e
        }

        function ue(e, t) {
            var n = _.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
                r = document.createElement("div");
            r.innerHTML = n;
            var i = r.firstChild;
            t && _.isFn(t) && (i.addEventListener("load", t), i.addEventListener("error", t)), _.insertElement(i, document, "html", !0)
        }

        function se(e) {
            var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
            return e ? ((!(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]) && (e = encodeURI(e)), t = t && 'sandbox="'.concat(t, '"'), "<iframe ".concat(t, ' id="').concat(x(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : ""
        }

        function de(e, t, n) {
            return null == t ? n : $(t) ? t : ee(t) ? t.toString() : void _.logWarn("Unsuported type for param: " + e + " required type: String")
        }

        function fe(e, t, n) {
            return n.indexOf(e) === t
        }

        function le(e, t) {
            return e.concat(t)
        }

        function pe(e) {
            return Object.keys(e)
        }

        function ge(e, t) {
            return e[t]
        }
        var be = he("timeToRespond", function(e, t) {
                return t < e
            }),
            ye = he("responseTimestamp", function(e, t) {
                return t < e
            }),
            ve = he("responseTimestamp", function(e, t) {
                return e < t
            });

        function he(n, r) {
            return function(e, t) {
                return e.cpm === t.cpm ? r(e[n], t[n]) ? t : e : e.cpm < t.cpm ? t : e
            }
        }

        function me(e) {
            return o()(e)
        }

        function Se() {
            try {
                return _.getWindowSelf() !== _.getWindowTop()
            } catch (e) {
                return !0
            }
        }

        function Ee() {
            if (window.navigator.cookieEnabled || document.cookie.length) return !0
        }
        var Ae = function(e, t) {
            return e.getAdUnitPath() === t || e.getSlotElementId() === t
        };

        function Te(e) {
            return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
        }

        function Oe() {
            try {
                return !!window.localStorage
            } catch (e) {
                K("Local storage api disabled")
            }
        }
    },
    1: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.registerBidder = function(t) {
            var n = Array.isArray(t.supportedMediaTypes) ? {
                supportedMediaTypes: t.supportedMediaTypes
            } : void 0;

            function r(e) {
                var t = I(e);
                a.default.registerBidAdapter(t, e.code, n)
            }
            r(t), Array.isArray(t.aliases) && t.aliases.forEach(function(e) {
                a.default.aliasRegistry[e] = t.code, r(A({}, t, {
                    code: e
                }))
            })
        }, t.newBidder = I, t.preloadBidderMappingFile = w, t.getIabSubCategory = function(t, e) {
            var n = a.default.getBidAdapter(t);
            if (n.getSpec().getMappingFileInfo) {
                var r = n.getSpec().getMappingFileInfo(),
                    i = r.localStorageKey ? r.localStorageKey : n.getBidderCode(),
                    o = Object(h.getDataFromLocalStorage)(i);
                if (o) {
                    try {
                        o = JSON.parse(o)
                    } catch (e) {
                        Object(h.logError)("Failed to parse ".concat(t, " mapping data stored in local storage"))
                    }
                    return o.mapping[e] ? o.mapping[e] : null
                }
            }
        }, t.isValid = j;
        var r = n(41),
            a = n(7),
            i = n(3),
            b = n(23),
            o = n(26),
            c = n(25),
            u = n(31),
            s = n(4),
            y = n.n(s),
            d = n(8),
            v = n.n(d),
            f = n(9),
            l = n.n(f),
            p = n(5),
            h = n(0),
            g = n(2),
            m = n(13);

        function S(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function E(e) {
            return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function A() {
            return (A = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var T = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"],
            O = 1;

        function I(l) {
            return A(new r.a(l.code), {
                getSpec: function() {
                    return Object.freeze(l)
                },
                registerSyncs: p,
                callBids: function(o, a, e, n, c) {
                    if (Array.isArray(o.bids)) {
                        var u = {},
                            s = [],
                            t = o.bids.filter(g);
                        if (0 !== t.length) {
                            var d = {};
                            t.forEach(function(e) {
                                (d[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode)
                            });
                            var r = l.buildRequests(t, o);
                            if (r && 0 !== r.length) {
                                Array.isArray(r) || (r = [r]);
                                var f = Object(h.delayExecution)(i, r.length);
                                r.forEach(function(i) {
                                    switch (i.method) {
                                        case "GET":
                                            n("".concat(i.url).concat(function(e) {
                                                if (e) return "?".concat("object" === E(e) ? Object(h.parseQueryStringParameters)(e) : e);
                                                return ""
                                            }(i.data)), {
                                                success: e,
                                                error: t
                                            }, void 0, A({
                                                method: "GET",
                                                withCredentials: !0
                                            }, i.options));
                                            break;
                                        case "POST":
                                            n(i.url, {
                                                success: e,
                                                error: t
                                            }, "string" == typeof i.data ? i.data : JSON.stringify(i.data), A({
                                                method: "POST",
                                                contentType: "text/plain",
                                                withCredentials: !0
                                            }, i.options));
                                            break;
                                        default:
                                            Object(h.logWarn)("Skipping invalid request from ".concat(l.code, ". Request type ").concat(i.type, " must be GET or POST")), f()
                                    }

                                    function e(e, t) {
                                        c(l.code);
                                        try {
                                            e = JSON.parse(e)
                                        } catch (e) {}
                                        var n;
                                        e = {
                                            body: e,
                                            headers: {
                                                get: t.getResponseHeader.bind(t)
                                            }
                                        }, s.push(e);
                                        try {
                                            n = l.interpretResponse(e, i)
                                        } catch (e) {
                                            return Object(h.logError)("Bidder ".concat(l.code, " failed to interpret the server's response. Continuing without bids"), null, e), void f()
                                        }

                                        function r(e) {
                                            var t = d[e.requestId];
                                            if (t) {
                                                var n = A(Object(b.a)(y.a.STATUS.GOOD, t), e);
                                                ! function(e, t) {
                                                    u[e] = !0, j(e, t, [o]) && a(e, t)
                                                }(t.adUnitCode, n)
                                            } else Object(h.logWarn)("Bidder ".concat(l.code, " made bid for unknown request ID: ").concat(e.requestId, ". Ignoring."))
                                        }
                                        n && (n.forEach ? n.forEach(r) : r(n)), f(n)
                                    }

                                    function t(e) {
                                        c(l.code), Object(h.logError)("Server call for ".concat(l.code, " failed: ").concat(e, ". Continuing without bids.")), f()
                                    }
                                })
                            } else i()
                        } else i()
                    }

                    function i() {
                        e(), v.a.emit(y.a.EVENTS.BIDDER_DONE, o), p(s, o.gdprConsent)
                    }
                }
            });

            function p(e, t) {
                if (l.getUserSyncs) {
                    var n = i.b.getConfig("userSync.filterSettings"),
                        r = l.getUserSyncs({
                            iframeEnabled: !!(i.b.getConfig("userSync.iframeEnabled") || n && (n.iframe || n.all)),
                            pixelEnabled: !!(i.b.getConfig("userSync.pixelEnabled") || n && (n.image || n.all))
                        }, e, t);
                    r && (Array.isArray(r) || (r = [r]), r.forEach(function(e) {
                        o.a.registerSync(e.type, l.code, e.url)
                    }))
                }
            }

            function g(e) {
                return !!l.isBidRequestValid(e) || (Object(h.logWarn)("Invalid bid sent to bidder ".concat(l.code, ": ").concat(JSON.stringify(e))), !1)
            }
        }

        function w(e, t) {
            if (!i.b.getConfig("adpod.brandCategoryExclusion")) return e.call(this, t);
            t.filter(function(e) {
                return Object(h.deepAccess)(e, "mediaTypes.video.context") === g.a
            }).map(function(e) {
                return e.bids.map(function(e) {
                    return e.bidder
                })
            }).reduce(h.flatten, []).filter(h.uniques).forEach(function(n) {
                var e = a.default.getBidAdapter(n);
                if (e.getSpec().getMappingFileInfo) {
                    var t = e.getSpec().getMappingFileInfo(),
                        r = t.refreshInDays ? t.refreshInDays : O,
                        i = t.localStorageKey ? t.localStorageKey : e.getSpec().code,
                        o = Object(h.getDataFromLocalStorage)(i);
                    (!o || Object(h.timestamp)() < o.lastUpdated + 24 * r * 60 * 60 * 1e3) && Object(p.a)(t.url, {
                        success: function(e) {
                            try {
                                e = JSON.parse(e);
                                var t = {
                                    lastUpdated: Object(h.timestamp)(),
                                    mapping: e.mapping
                                };
                                Object(h.setDataInLocalStorage)(i, JSON.stringify(t))
                            } catch (e) {
                                Object(h.logError)("Failed to parse ".concat(n, " bidder translation mapping file"))
                            }
                        },
                        error: function() {
                            Object(h.logError)("Failed to load ".concat(n, " bidder translation file"))
                        }
                    })
                }
            }), e.call(this, t)
        }

        function j(e, t, n) {
            function r(e) {
                return "Invalid bid from ".concat(t.bidderCode, ". Ignoring bid: ").concat(e)
            }
            return e ? t ? (i = Object.keys(t), T.every(function(e) {
                return l()(i, e) && !l()([void 0, null], t[e])
            }) ? "native" !== t.mediaType || Object(c.f)(t, n) ? "video" !== t.mediaType || Object(u.d)(t, n) ? !("banner" === t.mediaType && ! function(e, t, n) {
                if ((t.width || 0 === parseInt(t.width, 10)) && (t.height || 0 === parseInt(t.height, 10))) return t.width = parseInt(t.width, 10), t.height = parseInt(t.height, 10), !0;
                var r = Object(h.getBidderRequest)(n, t.bidderCode, e),
                    i = r && r.bids && r.bids[0] && r.bids[0].sizes,
                    o = Object(h.parseSizesInput)(i);
                if (1 !== o.length) return !1;
                var a = S(o[0].split("x"), 2),
                    c = a[0],
                    u = a[1];
                return t.width = parseInt(c, 10), t.height = parseInt(u, 10), !0
            }(e, t, n)) || (Object(h.logError)(r("Banner bids require a width and height")), !1) : (Object(h.logError)(r("Video bid does not have required vastUrl or renderer property")), !1) : (Object(h.logError)(r("Native bid missing some required properties.")), !1) : (Object(h.logError)(r("Bidder ".concat(t.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))), !1)) : (Object(h.logWarn)("Some adapter tried to add an undefined bid for ".concat(e, ".")), !1) : (Object(h.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
            var i
        }
        Object(m.a)("checkAdUnitSetup").before(w)
    },
    10: function(e, t, n) {
        "use strict";

        function o(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function i(e) {
            return e ? e.replace(/^\?/, "").split("&").reduce(function(e, t) {
                var n = o(t.split("="), 2),
                    r = n[0],
                    i = n[1];
                return /\[\]$/.test(r) ? (e[r = r.replace("[]", "")] = e[r] || [], e[r].push(i)) : e[r] = i || "", e
            }, {}) : {}
        }

        function r(e) {
            return Object.keys(e).map(function(t) {
                return Array.isArray(e[t]) ? e[t].map(function(e) {
                    return "".concat(t, "[]=").concat(e)
                }).join("&") : "".concat(t, "=").concat(e[t])
            }).join("&")
        }
        t.d = i, t.b = r, t.c = function(e, t) {
            var n = document.createElement("a");
            t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
            var r = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
            return {
                href: n.href,
                protocol: (n.protocol || "").replace(/:$/, ""),
                hostname: n.hostname,
                port: +n.port,
                pathname: n.pathname.replace(/^(?!\/)/, "/"),
                search: r ? n.search : i(n.search || ""),
                hash: (n.hash || "").replace(/^#/, ""),
                host: n.host || window.location.host
            }
        }, t.a = function(e) {
            return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(r(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "")
        }
    },
    11: function(e, t, n) {
        "use strict";
        t.a = i, t.c = function(e) {
            return !(!e || !e.url)
        }, t.b = function(e, t) {
            e.render(t)
        };
        var u = n(50),
            s = n(0),
            r = n(12),
            d = n.n(r);

        function i(e) {
            var t = this,
                n = e.url,
                r = e.config,
                i = e.id,
                o = e.callback,
                a = e.loaded,
                c = e.adUnitCode;
            this.url = n, this.config = r, this.handlers = {}, this.id = i, this.loaded = a, this.cmd = [], this.push = function(e) {
                "function" == typeof e ? t.loaded ? e.call() : t.cmd.push(e) : s.logError("Commands given to Renderer.push must be wrapped in a function")
            }, this.callback = o || function() {
                t.loaded = !0, t.process()
            }, ! function(t) {
                var e = pbjs.adUnits,
                    n = d()(e, function(e) {
                        return e.code === t
                    });
                return !!(n && n.renderer && n.renderer.url && n.renderer.render)
            }(c) ? Object(u.b)(n, this.callback, !0) : s.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(c))
        }
        i.install = function(e) {
            return new i({
                url: e.url,
                config: e.config,
                id: e.id,
                callback: e.callback,
                loaded: e.loaded,
                adUnitCode: e.adUnitCode
            })
        }, i.prototype.getConfig = function() {
            return this.config
        }, i.prototype.setRender = function(e) {
            this.render = e
        }, i.prototype.setEventHandlers = function(e) {
            this.handlers = e
        }, i.prototype.handleVideoEvent = function(e) {
            var t = e.id,
                n = e.eventName;
            "function" == typeof this.handlers[n] && this.handlers[n](), s.logMessage("Prebid Renderer event for id ".concat(t, " type ").concat(n))
        }, i.prototype.process = function() {
            for (; 0 < this.cmd.length;) try {
                this.cmd.shift().call()
            } catch (e) {
                s.logError("Error processing Renderer command: ", e)
            }
        }
    },
    12: function(e, t, n) {
        n(80), e.exports = n(16).Array.find
    },
    13: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return o
        }), n.d(t, "a", function() {
            return a
        }), t.d = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 15;
            0 === e.getHooks({
                hook: t
            }).length && e.before(t, n)
        }, t.c = function(e, t) {
            o("async", function(e) {
                e.forEach(function(e) {
                    return t.apply(void 0, function(e) {
                        return function(e) {
                            if (Array.isArray(e)) {
                                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                                return n
                            }
                        }(e) || function(e) {
                            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                        }(e) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance")
                        }()
                    }(e))
                })
            }, e)([])
        }, t.e = function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            a(e).before(function(e, t) {
                t.push(n), e(t)
            })
        };
        var r = n(91),
            i = n.n(r);
        var o = i()({
                ready: i.a.SYNC | i.a.ASYNC | i.a.QUEUE
            }),
            a = o.get
    },
    130: function(e, t, n) {
        "use strict";
        var r = n(15),
            i = n(44)(6),
            o = "findIndex",
            a = !0;
        o in [] && Array(1)[o](function() {
            a = !1
        }), r(r.P + r.F * a, "Array", {
            findIndex: function(e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0)
            }
        }), n(37)(o)
    },
    133: function(e, t, n) {
        "use strict";
        t.a = function() {
            addEventListener("message", p, !1)
        };
        var r = n(8),
            o = n.n(r),
            a = n(25),
            i = n(4),
            d = (n.n(i), n(0)),
            c = n(28),
            u = n(12),
            f = n.n(u),
            l = n(11),
            s = i.EVENTS.BID_WON;

        function p(e) {
            var t = e.message ? "message" : "data",
                n = {};
            try {
                n = JSON.parse(e[t])
            } catch (e) {
                return
            }
            if (n && n.adId) {
                var r = f()(c.a.getBidsReceived(), function(e) {
                    return e.adId === n.adId
                });
                if (r && "Prebid Request" === n.message && (function(e, t, n) {
                        var r = e.adId,
                            i = e.ad,
                            o = e.adUrl,
                            a = e.width,
                            c = e.height,
                            u = e.renderer,
                            s = e.cpm;
                        Object(l.c)(u) ? Object(l.b)(u, e) : r && (function(e) {
                            var r = e.adUnitCode,
                                i = e.width,
                                o = e.height;

                            function a(e) {
                                var t = function(e) {
                                        return window.googletag ? function(e) {
                                            return f()(window.googletag.pubads().getSlots().filter(Object(d.isSlotMatchingAdUnitCode)(e)), function(e) {
                                                return e
                                            }).getSlotElementId()
                                        }(e) : window.apntag ? function(e) {
                                            var t = window.apntag.getTag(e);
                                            return t && t.targetId
                                        }(e) : e
                                    }(r),
                                    n = document.getElementById(t);
                                return n && n.querySelector(e)
                            }["div:last-child", "div:last-child iframe"].forEach(function(e) {
                                var t = a(e);
                                if (t) {
                                    var n = t.style;
                                    n.width = i + "px", n.height = o + "px"
                                } else Object(d.logWarn)("Unable to locate matching page element for adUnitCode ".concat(r, ".  Can't resize it to ad's dimensions.  Please review setup."))
                            })
                        }(e), n.postMessage(JSON.stringify({
                            message: "Prebid Response",
                            ad: Object(d.replaceAuctionPrice)(i, s),
                            adUrl: Object(d.replaceAuctionPrice)(o, s),
                            adId: r,
                            width: a,
                            height: c
                        }), t))
                    }(r, n.adServerDomain, e.source), c.a.addWinningBid(r), o.a.emit(s, r)), r && "Prebid Native" === n.message) {
                    if ("assetRequest" === n.action) {
                        var i = Object(a.c)(n, r);
                        return void e.source.postMessage(JSON.stringify(i), e.origin)
                    }
                    if ("click" === Object(a.b)(n, r)) return;
                    c.a.addWinningBid(r), o.a.emit(s, r)
                }
            }
        }
    },
    134: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t;
            try {
                e = e || window.sessionStorage, t = JSON.parse(e.getItem(u))
            } catch (e) {}
            t && f(t, !0)
        };
        var r = n(3),
            o = n(0),
            i = n(39);

        function a() {
            return (a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var c, u = "pbjs:debugging";

        function s(e) {
            Object(o.logMessage)("DEBUG: " + e)
        }

        function d() {
            i.c.getHooks({
                hook: c
            }).remove()
        }

        function f(e, t) {
            var n = 1 < arguments.length && void 0 !== t && t;
            r.b.setConfig({
                debug: !0
            }), s("bidder overrides enabled".concat(n ? " from session" : "")), d(), c = function(e, r, i) {
                if (Array.isArray(this.bidders) && -1 === this.bidders.indexOf(i.bidderCode)) return void
                function(e) {
                    Object(o.logWarn)("DEBUG: " + e)
                }("bidder '".concat(i.bidderCode, "' excluded from auction by bidder overrides"));
                Array.isArray(this.bids) && this.bids.forEach(function(n) {
                    n.bidder && n.bidder !== i.bidderCode || n.adUnitCode && n.adUnitCode !== r || (i = a({}, i), Object.keys(n).filter(function(e) {
                        return -1 === ["bidder", "adUnitCode"].indexOf(e)
                    }).forEach(function(e) {
                        var t = n[e];
                        s("bidder overrides changed '".concat(r, "/").concat(i.bidderCode, "' bid.").concat(e, " from '").concat(i[e], "' to '").concat(t, "'")), i[e] = t
                    }))
                });
                e(r, i)
            }.bind(e), i.c.before(c, 5)
        }

        function l(e) {
            if (e.enabled) {
                try {
                    window.sessionStorage.setItem(u, JSON.stringify(e))
                } catch (e) {}
                f(e)
            } else {
                d(), s("bidder overrides disabled");
                try {
                    window.sessionStorage.removeItem(u)
                } catch (e) {}
            }
        }
        r.b.getConfig("debugging", function(e) {
            return l(e.debugging)
        })
    },
    135: function(e, t, n) {
        n(136), n(65), n(145), n(147), n(151), n(154), n(156), e.exports = n(16).Set
    },
    136: function(e, t) {},
    137: function(e, t, n) {
        var u = n(46),
            s = n(35);
        e.exports = function(c) {
            return function(e, t) {
                var n, r, i = String(s(e)),
                    o = u(t),
                    a = i.length;
                return o < 0 || a <= o ? c ? "" : void 0 : (n = i.charCodeAt(o)) < 55296 || 56319 < n || o + 1 === a || (r = i.charCodeAt(o + 1)) < 56320 || 57343 < r ? c ? i.charAt(o) : n : c ? i.slice(o, o + 2) : r - 56320 + (n - 55296 << 10) + 65536
            }
        }
    },
    138: function(e, t, n) {
        e.exports = n(21)
    },
    139: function(e, t, n) {
        "use strict";
        var r = n(66),
            i = n(43),
            o = n(53),
            a = {};
        n(21)(a, n(14)("iterator"), function() {
            return this
        }), e.exports = function(e, t, n) {
            e.prototype = r(a, {
                next: i(1, n)
            }), o(e, t + " Iterator")
        }
    },
    14: function(e, t, n) {
        var r = n(57)("wks"),
            i = n(47),
            o = n(19).Symbol,
            a = "function" == typeof o;
        (e.exports = function(e) {
            return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
        }).store = r
    },
    140: function(e, t, n) {
        var a = n(20),
            c = n(29),
            u = n(141);
        e.exports = n(22) ? Object.defineProperties : function(e, t) {
            c(e);
            for (var n, r = u(t), i = r.length, o = 0; o < i;) a.f(e, n = r[o++], t[n]);
            return e
        }
    },
    141: function(e, t, n) {
        var r = n(142),
            i = n(67);
        e.exports = Object.keys || function(e) {
            return r(e, i)
        }
    },
    142: function(e, t, n) {
        var a = n(30),
            c = n(48),
            u = n(59)(!1),
            s = n(52)("IE_PROTO");
        e.exports = function(e, t) {
            var n, r = c(e),
                i = 0,
                o = [];
            for (n in r) n != s && a(r, n) && o.push(n);
            for (; t.length > i;) a(r, n = t[i++]) && (~u(o, n) || o.push(n));
            return o
        }
    },
    143: function(e, t, n) {
        var r = n(19).document;
        e.exports = r && r.documentElement
    },
    144: function(e, t, n) {
        var r = n(30),
            i = n(45),
            o = n(52)("IE_PROTO"),
            a = Object.prototype;
        e.exports = Object.getPrototypeOf || function(e) {
            return e = i(e), r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
        }
    },
    145: function(e, t, n) {
        n(146);
        for (var r = n(19), i = n(21), o = n(32), a = n(14)("toStringTag"), c = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < c.length; u++) {
            var s = c[u],
                d = r[s],
                f = d && d.prototype;
            f && !f[a] && i(f, a, s), o[s] = o.Array
        }
    },
    146: function(e, t, n) {
        "use strict";
        var r = n(37),
            i = n(68),
            o = n(32),
            a = n(48);
        e.exports = n(51)(Array, "Array", function(e, t) {
            this._t = a(e), this._i = 0, this._k = t
        }, function() {
            var e = this._t,
                t = this._k,
                n = this._i++;
            return !e || n >= e.length ? (this._t = void 0, i(1)) : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
        }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
    },
    147: function(e, t, n) {
        "use strict";
        var r = n(148),
            i = n(76);
        e.exports = n(150)("Set", function(t) {
            return function(e) {
                return t(this, 0 < arguments.length ? e : void 0)
            }
        }, {
            add: function(e) {
                return r.def(i(this, "Set"), e = 0 === e ? 0 : e, e)
            }
        }, r)
    },
    148: function(e, t, n) {
        "use strict";

        function a(e, t) {
            var n, r = g(t);
            if ("F" !== r) return e._i[r];
            for (n = e._f; n; n = n.n)
                if (n.k == t) return n
        }
        var c = n(20).f,
            u = n(66),
            s = n(69),
            d = n(24),
            f = n(70),
            l = n(40),
            r = n(51),
            i = n(68),
            o = n(149),
            p = n(22),
            g = n(75).fastKey,
            b = n(76),
            y = p ? "_s" : "size";
        e.exports = {
            getConstructor: function(e, o, n, r) {
                var i = e(function(e, t) {
                    f(e, i, o, "_i"), e._t = o, e._i = u(null), e._f = void 0, e._l = void 0, e[y] = 0, null != t && l(t, n, e[r], e)
                });
                return s(i.prototype, {
                    clear: function() {
                        for (var e = b(this, o), t = e._i, n = e._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), delete t[n.i];
                        e._f = e._l = void 0, e[y] = 0
                    },
                    delete: function(e) {
                        var t = b(this, o),
                            n = a(t, e);
                        if (n) {
                            var r = n.n,
                                i = n.p;
                            delete t._i[n.i], n.r = !0, i && (i.n = r), r && (r.p = i), t._f == n && (t._f = r), t._l == n && (t._l = i), t[y]--
                        }
                        return !!n
                    },
                    forEach: function(e, t) {
                        b(this, o);
                        for (var n, r = d(e, 1 < arguments.length ? t : void 0, 3); n = n ? n.n : this._f;)
                            for (r(n.v, n.k, this); n && n.r;) n = n.p
                    },
                    has: function(e) {
                        return !!a(b(this, o), e)
                    }
                }), p && c(i.prototype, "size", {
                    get: function() {
                        return b(this, o)[y]
                    }
                }), i
            },
            def: function(e, t, n) {
                var r, i, o = a(e, t);
                return o ? o.v = n : (e._l = o = {
                    i: i = g(t, !0),
                    k: t,
                    v: n,
                    p: r = e._l,
                    n: void 0,
                    r: !1
                }, e._f || (e._f = o), r && (r.n = o), e[y]++, "F" !== i && (e._i[i] = o)), e
            },
            getEntry: a,
            setStrong: function(e, n, t) {
                r(e, n, function(e, t) {
                    this._t = b(e, n), this._k = t, this._l = void 0
                }, function() {
                    for (var e = this, t = e._k, n = e._l; n && n.r;) n = n.p;
                    return e._t && (e._l = n = n ? n.n : e._t._f) ? i(0, "keys" == t ? n.k : "values" == t ? n.v : [n.k, n.v]) : (e._t = void 0, i(1))
                }, t ? "entries" : "values", !t, !0), o(n)
            }
        }
    },
    149: function(e, t, n) {
        "use strict";
        var r = n(19),
            i = n(16),
            o = n(20),
            a = n(22),
            c = n(14)("species");
        e.exports = function(e) {
            var t = "function" == typeof i[e] ? i[e] : r[e];
            a && t && !t[c] && o.f(t, c, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    },
    15: function(e, t, n) {
        var b = n(19),
            y = n(16),
            v = n(24),
            h = n(21),
            m = n(30),
            S = "prototype",
            E = function(e, t, n) {
                var r, i, o, a = e & E.F,
                    c = e & E.G,
                    u = e & E.S,
                    s = e & E.P,
                    d = e & E.B,
                    f = e & E.W,
                    l = c ? y : y[t] || (y[t] = {}),
                    p = l[S],
                    g = c ? b : u ? b[t] : (b[t] || {})[S];
                for (r in c && (n = t), n)(i = !a && g && void 0 !== g[r]) && m(l, r) || (o = i ? g[r] : n[r], l[r] = c && "function" != typeof g[r] ? n[r] : d && i ? v(o, b) : f && g[r] == o ? function(r) {
                    function e(e, t, n) {
                        if (this instanceof r) {
                            switch (arguments.length) {
                                case 0:
                                    return new r;
                                case 1:
                                    return new r(e);
                                case 2:
                                    return new r(e, t)
                            }
                            return new r(e, t, n)
                        }
                        return r.apply(this, arguments)
                    }
                    return e[S] = r[S], e
                }(o) : s && "function" == typeof o ? v(Function.call, o) : o, s && ((l.virtual || (l.virtual = {}))[r] = o, e & E.R && p && !p[r] && h(p, r, o)))
            };
        E.F = 1, E.G = 2, E.S = 4, E.P = 8, E.B = 16, E.W = 32, E.U = 64, E.R = 128, e.exports = E
    },
    150: function(e, t, n) {
        "use strict";
        var f = n(19),
            l = n(15),
            p = n(75),
            g = n(33),
            b = n(21),
            y = n(69),
            v = n(40),
            h = n(70),
            m = n(18),
            S = n(53),
            E = n(20).f,
            A = n(44)(0),
            T = n(22);
        e.exports = function(n, e, t, r, i, o) {
            var a = f[n],
                c = a,
                u = i ? "set" : "add",
                s = c && c.prototype,
                d = {};
            return T && "function" == typeof c && (o || s.forEach && !g(function() {
                (new c).entries().next()
            })) ? (c = e(function(e, t) {
                h(e, c, n, "_c"), e._c = new a, null != t && v(t, i, e[u], e)
            }), A("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(r) {
                var i = "add" == r || "set" == r;
                r in s && (!o || "clear" != r) && b(c.prototype, r, function(e, t) {
                    if (h(this, c, r), !i && o && !m(e)) return "get" == r && void 0;
                    var n = this._c[r](0 === e ? 0 : e, t);
                    return i ? this : n
                })
            }), o || E(c.prototype, "size", {
                get: function() {
                    return this._c.size
                }
            })) : (c = r.getConstructor(e, n, i, u), y(c.prototype, t), p.NEED = !0), S(c, n), d[n] = c, l(l.G + l.W + l.F, d), o || r.setStrong(c, n, i), c
        }
    },
    151: function(e, t, n) {
        var r = n(15);
        r(r.P + r.R, "Set", {
            toJSON: n(152)("Set")
        })
    },
    152: function(e, t, n) {
        var r = n(74),
            i = n(153);
        e.exports = function(e) {
            return function() {
                if (r(this) != e) throw TypeError(e + "#toJSON isn't generic");
                return i(this)
            }
        }
    },
    153: function(e, t, n) {
        var r = n(40);
        e.exports = function(e, t) {
            var n = [];
            return r(e, !1, n.push, n, t), n
        }
    },
    154: function(e, t, n) {
        n(155)("Set")
    },
    155: function(e, t, n) {
        "use strict";
        var r = n(15);
        e.exports = function(e) {
            r(r.S, e, {
                of: function() {
                    for (var e = arguments.length, t = new Array(e); e--;) t[e] = arguments[e];
                    return new this(t)
                }
            })
        }
    },
    156: function(e, t, n) {
        n(157)("Set")
    },
    157: function(e, t, n) {
        "use strict";
        var r = n(15),
            u = n(54),
            s = n(24),
            d = n(40);
        e.exports = function(e) {
            r(r.S, e, {
                from: function(e, t, n) {
                    var r, i, o, a, c = t;
                    return u(this), (r = void 0 !== c) && u(c), null == e ? new this : (i = [], r ? (o = 0, a = s(c, n, 2), d(e, !1, function(e) {
                        i.push(a(e, o++))
                    })) : d(e, !1, i.push, i), new this(i))
                }
            })
        }
    },
    158: function(e, t, n) {
        n(65), n(159), e.exports = n(16).Array.from
    },
    159: function(e, t, n) {
        "use strict";
        var g = n(24),
            r = n(15),
            b = n(45),
            y = n(71),
            v = n(72),
            h = n(36),
            m = n(160),
            S = n(73);
        r(r.S + r.F * !n(161)(function(e) {
            Array.from(e)
        }), "Array", {
            from: function(e, t, n) {
                var r, i, o, a, c = b(e),
                    u = "function" == typeof this ? this : Array,
                    s = arguments.length,
                    d = 1 < s ? t : void 0,
                    f = void 0 !== d,
                    l = 0,
                    p = S(c);
                if (f && (d = g(d, 2 < s ? n : void 0, 2)), null == p || u == Array && v(p))
                    for (i = new u(r = h(c.length)); l < r; l++) m(i, l, f ? d(c[l], l) : c[l]);
                else
                    for (a = p.call(c), i = new u; !(o = a.next()).done; l++) m(i, l, f ? y(a, d, [o.value, l], !0) : o.value);
                return i.length = l, i
            }
        })
    },
    16: function(e, t) {
        var n = e.exports = {
            version: "2.6.9"
        };
        "number" == typeof __e && (__e = n)
    },
    160: function(e, t, n) {
        "use strict";
        var r = n(20),
            i = n(43);
        e.exports = function(e, t, n) {
            t in e ? r.f(e, t, i(0, n)) : e[t] = n
        }
    },
    161: function(e, t, n) {
        var o = n(14)("iterator"),
            a = !1;
        try {
            var r = [7][o]();
            r.return = function() {
                a = !0
            }, Array.from(r, function() {
                throw 2
            })
        } catch (e) {}
        e.exports = function(e, t) {
            if (!t && !a) return !1;
            var n = !1;
            try {
                var r = [7],
                    i = r[o]();
                i.next = function() {
                    return {
                        done: n = !0
                    }
                }, r[o] = function() {
                    return i
                }, e(r)
            } catch (e) {}
            return n
        }
    },
    18: function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    },
    19: function(e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    },
    2: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return r
        }), n.d(t, "d", function() {
            return i
        }), n.d(t, "b", function() {
            return o
        }), n.d(t, "a", function() {
            return a
        });
        var r = "native",
            i = "video",
            o = "banner",
            a = "adpod"
    },
    20: function(e, t, n) {
        var r = n(29),
            i = n(81),
            o = n(82),
            a = Object.defineProperty;
        t.f = n(22) ? Object.defineProperty : function(e, t, n) {
            if (r(e), t = o(t, !0), r(n), i) try {
                return a(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    },
    21: function(e, t, n) {
        var r = n(20),
            i = n(43);
        e.exports = n(22) ? function(e, t, n) {
            return r.f(e, t, i(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        }
    },
    22: function(e, t, n) {
        e.exports = !n(33)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    23: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            return new r(e, t)
        };
        var i = n(0);

        function r(e, t) {
            var n = t && t.src || "client",
                r = e || 0;
            this.bidderCode = t && t.bidder || "", this.width = 0, this.height = 0, this.statusMessage = function() {
                switch (r) {
                    case 0:
                        return "Pending";
                    case 1:
                        return "Bid available";
                    case 2:
                        return "Bid returned empty or error response";
                    case 3:
                        return "Bid timed out"
                }
            }(), this.adId = i.getUniqueIdentifierStr(), this.requestId = t && t.bidId, this.mediaType = "banner", this.source = n, this.getStatusCode = function() {
                return r
            }, this.getSize = function() {
                return this.width + "x" + this.height
            }
        }
    },
    24: function(e, t, n) {
        var o = n(54);
        e.exports = function(r, i, e) {
            if (o(r), void 0 === i) return r;
            switch (e) {
                case 1:
                    return function(e) {
                        return r.call(i, e)
                    };
                case 2:
                    return function(e, t) {
                        return r.call(i, e, t)
                    };
                case 3:
                    return function(e, t, n) {
                        return r.call(i, e, t, n)
                    }
            }
            return function() {
                return r.apply(i, arguments)
            }
        }
    },
    25: function(e, t, n) {
        "use strict";
        n.d(t, "e", function() {
            return o
        }), n.d(t, "a", function() {
            return s
        }), t.g = function(e) {
            if (e && e.type && function(e) {
                    return !(!e || !c()(Object.keys(d), e)) || (Object(a.logError)("".concat(e, " nativeParam is not supported")), !1)
                }(e.type)) return d[e.type];
            return e
        }, t.f = function(t, e) {
            var n = Object(a.getBidRequest)(t.requestId, e);
            if (!n) return !1;
            if (!Object(a.deepAccess)(t, "native.clickUrl")) return !1;
            if (Object(a.deepAccess)(t, "native.image") && (!Object(a.deepAccess)(t, "native.image.height") || !Object(a.deepAccess)(t, "native.image.width"))) return !1;
            if (Object(a.deepAccess)(t, "native.icon") && (!Object(a.deepAccess)(t, "native.icon.height") || !Object(a.deepAccess)(t, "native.icon.width"))) return !1;
            var r = n.nativeParams;
            if (!r) return !0;
            var i = Object.keys(r).filter(function(e) {
                    return r[e].required
                }),
                o = Object.keys(t.native).filter(function(e) {
                    return t.native[e]
                });
            return i.every(function(e) {
                return c()(o, e)
            })
        }, t.b = function(e, t) {
            var n;
            "click" === e.action ? n = t.native && t.native.clickTrackers : (n = t.native && t.native.impressionTrackers, t.native && t.native.javascriptTrackers && Object(a.insertHtmlIntoIframe)(t.native.javascriptTrackers));
            return (n || []).forEach(a.triggerPixel), e.action
        }, t.d = function(r, i) {
            var o = {};
            return Object.keys(r.native).forEach(function(e) {
                var t = u.NATIVE_KEYS[e],
                    n = f(r.native[e]);
                Object(a.deepAccess)(i, "mediaTypes.native.".concat(e, ".sendId")) && (n = "".concat(t, ":").concat(r.adId));
                t && n && (o[t] = n)
            }), o
        }, t.c = function(e, r) {
            var i = {
                message: "assetResponse",
                adId: e.adId,
                assets: []
            };
            return e.assets.forEach(function(e) {
                var t = Object(a.getKeyByValue)(u.NATIVE_KEYS, e),
                    n = f(r.native[t]);
                i.assets.push({
                    key: t,
                    value: n
                })
            }), i
        };
        var a = n(0),
            r = n(9),
            c = n.n(r);

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var u = n(4),
            o = [],
            s = Object.keys(u.NATIVE_KEYS).map(function(e) {
                return u.NATIVE_KEYS[e]
            }),
            d = {
                image: {
                    image: {
                        required: !0
                    },
                    title: {
                        required: !0
                    },
                    sponsoredBy: {
                        required: !0
                    },
                    clickUrl: {
                        required: !0
                    },
                    body: {
                        required: !1
                    },
                    icon: {
                        required: !1
                    }
                }
            };

        function f(e) {
            return "object" === i(e) && e.url ? e.url : e
        }
    },
    250: function(e, t, n) {
        n(251), e.exports = n(16).String.includes
    },
    251: function(e, t, n) {
        "use strict";
        var r = n(15),
            i = n(252),
            o = "includes";
        r(r.P + r.F * n(254)(o), "String", {
            includes: function(e, t) {
                return !!~i(this, e, o).indexOf(e, 1 < arguments.length ? t : void 0)
            }
        })
    },
    252: function(e, t, n) {
        var r = n(253),
            i = n(35);
        e.exports = function(e, t, n) {
            if (r(t)) throw TypeError("String#" + n + " doesn't accept regex!");
            return String(i(e))
        }
    },
    253: function(e, t, n) {
        var r = n(18),
            i = n(34),
            o = n(14)("match");
        e.exports = function(e) {
            var t;
            return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e))
        }
    },
    254: function(e, t, n) {
        var r = n(14)("match");
        e.exports = function(t) {
            var n = /./;
            try {
                "/./" [t](n)
            } catch (e) {
                try {
                    return n[r] = !1, !"/./" [t](n)
                } catch (e) {}
            }
            return !0
        }
    },
    26: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return v
        });
        var a = n(0),
            r = n(3),
            i = n(9),
            o = n.n(i);

        function c(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function u() {
            return (u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        r.b.setDefaults({
            userSync: {
                syncEnabled: !0,
                pixelEnabled: !0,
                syncsPerBidder: 5,
                syncDelay: 3e3
            }
        });
        var s, d, f, l, p, g, b, y = !a.isSafariBrowser() && a.cookiesAreEnabled(),
            v = (s = {
                config: r.b.getConfig("userSync"),
                browserSupportsCookies: y
            }, d = {}, f = {
                image: [],
                iframe: []
            }, l = new Set, g = {
                image: !(p = {}),
                iframe: !1
            }, b = s.config, r.b.getConfig("userSync", function(e) {
                b = u(b, e.userSync)
            }), d.registerSync = function(e, t, n) {
                return l.has(t) ? a.logMessage('already fired syncs for "'.concat(t, '", ignoring registerSync call')) : b.syncEnabled && a.isArray(f[e]) ? t ? 0 !== b.syncsPerBidder && Number(p[t]) >= b.syncsPerBidder ? a.logWarn('Number of user syncs exceeded for "'.concat(t, '"')) : d.canBidderRegisterSync(e, t) ? (f[e].push([t, n]), void(p = function(e, t) {
                    return e[t] ? e[t] += 1 : e[t] = 1, e
                }(p, t))) : a.logWarn('Bidder "'.concat(t, '" not permitted to register their "').concat(e, '" userSync pixels.')) : a.logWarn("Bidder is required for registering sync") : a.logWarn('User sync type "'.concat(e, '" not supported'))
            }, d.syncUsers = function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                if (e) return setTimeout(h, Number(e));
                h()
            }, d.triggerUserSyncs = function() {
                b.enableOverride && d.syncUsers()
            }, d.canBidderRegisterSync = function(e, t) {
                if (b.filterSettings) {
                    if (S(e, t)) return !1
                } else {
                    if (b.enabledBidders && b.enabledBidders.length && b.enabledBidders.indexOf(t) < 0) return !1;
                    if ("iframe" === e && !b.iframeEnabled && !g.iframe) return !1;
                    if ("image" === e && !b.pixelEnabled && !g.image) return !1
                }
                return !0
            }, d);

        function h() {
            if (b.syncEnabled && s.browserSupportsCookies) {
                try {
                    ! function() {
                        if (!b.pixelEnabled && !g.image) return;
                        m(f.image, function(e) {
                            var t = c(e, 2),
                                n = t[0],
                                r = t[1];
                            a.logMessage("Invoking image pixel user sync for bidder: ".concat(n)), a.triggerPixel(r)
                        })
                    }(),
                    function() {
                        if (!b.iframeEnabled && !g.iframe) return;
                        m(f.iframe, function(e) {
                            var t = c(e, 2),
                                n = t[0],
                                r = t[1];
                            a.logMessage("Invoking iframe user sync for bidder: ".concat(n)), a.insertUserSyncIframe(r)
                        })
                    }()
                } catch (e) {
                    return a.logError("Error firing user syncs", e)
                }
                f = {
                    image: [],
                    iframe: []
                }
            }
        }

        function m(e, t) {
            a.shuffle(e).forEach(function(e) {
                t(e), l.add(e[0])
            })
        }

        function S(e, t) {
            var n = b.filterSettings;
            if (function(e, t) {
                    if (e.all && e[t]) return a.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(t, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')), !1;
                    var n = e.all ? e.all : e[t],
                        r = e.all ? "all" : t;
                    if (!n) return !1;
                    var i = n.filter,
                        o = n.bidders;
                    if (i && "include" !== i && "exclude" !== i) return a.logWarn('UserSync "filterSettings.'.concat(r, ".filter\" setting '").concat(i, "' is not a valid option; use either 'include' or 'exclude'.")), !1;
                    return !!("*" === o || Array.isArray(o) && 0 < o.length && o.every(function(e) {
                        return a.isStr(e) && "*" !== e
                    })) || (a.logWarn('Detected an invalid setup in userSync "filterSettings.'.concat(r, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")), !1)
                }(n, e)) {
                g[e] = !0;
                var r = n.all ? n.all : n[e],
                    i = "*" === r.bidders ? [t] : r.bidders;
                return {
                    include: function(e, t) {
                        return !o()(e, t)
                    },
                    exclude: function(e, t) {
                        return o()(e, t)
                    }
                }[r.filter || "include"](i, t)
            }
            return !1
        }
    },
    27: function(e, t, n) {
        "use strict";
        t.a = function() {
            return window.pbjs
        }, window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], window.pbjs.que = window.pbjs.que || []
    },
    28: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return d
        });
        var r = n(0),
            u = n(39),
            i = n(12),
            o = n.n(i),
            a = n(4);
        var s, c, d = (s = [], (c = {}).addWinningBid = function(t) {
            var e = o()(s, function(e) {
                return e.getAuctionId() === t.auctionId
            });
            e ? e.addWinningBid(t) : utils.logWarn("Auction not found when adding winning bid")
        }, c.getAllWinningBids = function() {
            return s.map(function(e) {
                return e.getWinningBids()
            }).reduce(r.flatten, [])
        }, c.getBidsRequested = function() {
            return s.map(function(e) {
                return e.getBidRequests()
            }).reduce(r.flatten, [])
        }, c.getNoBids = function() {
            return s.map(function(e) {
                return e.getNoBids()
            }).reduce(r.flatten, [])
        }, c.getBidsReceived = function() {
            return s.map(function(e) {
                if (e.getAuctionStatus() === u.a) return e.getBidsReceived()
            }).reduce(r.flatten, []).filter(function(e) {
                return e
            })
        }, c.getAdUnits = function() {
            return s.map(function(e) {
                return e.getAdUnits()
            }).reduce(r.flatten, [])
        }, c.getAdUnitCodes = function() {
            return s.map(function(e) {
                return e.getAdUnitCodes()
            }).reduce(r.flatten, []).filter(r.uniques)
        }, c.createAuction = function(e) {
            var t = e.adUnits,
                n = e.adUnitCodes,
                r = e.callback,
                i = e.cbTimeout,
                o = e.labels,
                a = e.auctionId,
                c = Object(u.j)({
                    adUnits: t,
                    adUnitCodes: n,
                    callback: r,
                    cbTimeout: i,
                    labels: o,
                    auctionId: a
                });
            return function(e) {
                s.push(e)
            }(c), c
        }, c.findBidByAdId = function(t) {
            return o()(s.map(function(e) {
                return e.getBidsReceived()
            }).reduce(r.flatten, []), function(e) {
                return e.adId === t
            })
        }, c.getStandardBidderAdServerTargeting = function() {
            return Object(u.i)()[a.JSON_MAPPING.ADSERVER_TARGETING]
        }, c.setStatusForBids = function(e, t) {
            var n = c.findBidByAdId(e);
            if (n && (n.status = t), n && t === a.BID_STATUS.BID_TARGETING_SET) {
                var r = o()(s, function(e) {
                    return e.getAuctionId() === n.auctionId
                });
                r && r.setBidTargeting(n)
            }
        }, c.getLastAuctionId = function() {
            return s.length && s[s.length - 1].getAuctionId()
        }, c)
    },
    29: function(e, t, n) {
        var r = n(18);
        e.exports = function(e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e
        }
    },
    3: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return b
        }), n.d(t, "b", function() {
            return A
        });
        var r = n(42),
            i = n(12),
            a = n.n(i),
            o = n(9),
            c = n.n(o),
            u = n(10);

        function s() {
            return (s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function d(e) {
            return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var f = n(0),
            l = n(4),
            p = "TRUE" === (Object(u.d)(window.location.search)[l.DEBUG_MODE] || "").toUpperCase(),
            g = window.location.origin,
            b = "random",
            y = {};
        y[b] = !0, y.fixed = !0;
        var v = b,
            h = {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            };
        var m, S, E, A = (E = [], T(), {
            getConfig: function() {
                if (arguments.length <= 1 && "function" != typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
                    var e = arguments.length <= 0 ? void 0 : arguments[0];
                    return e ? f.deepAccess(S, e) : S
                }
                return function(e, t) {
                    var n = t;
                    return "string" != typeof e && (n = e, e = "*"), "function" == typeof n ? (E.push({
                        topic: e,
                        callback: n
                    }), function() {
                        E.splice(E.indexOf(t), 1)
                    }) : void f.logError("listener must be a function")
                }.apply(void 0, arguments)
            },
            setConfig: function(n) {
                if ("object" === d(n)) {
                    var e = Object.keys(n),
                        r = {};
                    e.forEach(function(e) {
                        var t = n[e];
                        "object" === d(m[e]) && "object" === d(t) && (t = s({}, m[e], t)), r[e] = S[e] = t
                    }), O(r)
                } else f.logError("setConfig options must be an object")
            },
            setDefaults: function(e) {
                "object" === d(m) ? (s(m, e), s(S, e)) : f.logError("defaults must be an object")
            },
            resetConfig: T
        });

        function T() {
            var n = {
                _debug: p,
                get debug() {
                    return this._debug
                },
                set debug(e) {
                    this._debug = e
                },
                _bidderTimeout: 3e3,
                get bidderTimeout() {
                    return this._bidderTimeout
                },
                set bidderTimeout(e) {
                    this._bidderTimeout = e
                },
                _publisherDomain: g,
                get publisherDomain() {
                    return this._publisherDomain
                },
                set publisherDomain(e) {
                    this._publisherDomain = e
                },
                _priceGranularity: h.MEDIUM,
                set priceGranularity(e) {
                    o(e) && ("string" == typeof e ? this._priceGranularity = i(e) ? e : h.MEDIUM : "object" === d(e) && (this._customPriceBucket = e, this._priceGranularity = h.CUSTOM, f.logMessage("Using custom price granularity")))
                },
                get priceGranularity() {
                    return this._priceGranularity
                },
                _customPriceBucket: {},
                get customPriceBucket() {
                    return this._customPriceBucket
                },
                _mediaTypePriceGranularity: {},
                get mediaTypePriceGranularity() {
                    return this._mediaTypePriceGranularity
                },
                set mediaTypePriceGranularity(n) {
                    var r = this;
                    this._mediaTypePriceGranularity = Object.keys(n).reduce(function(e, t) {
                        return o(n[t]) ? "string" == typeof n ? e[t] = i(n[t]) ? n[t] : r._priceGranularity : "object" === d(n) && (e[t] = n[t], f.logMessage("Using custom price granularity for ".concat(t))) : f.logWarn("Invalid price granularity for media type: ".concat(t)), e
                    }, {})
                },
                _sendAllBids: !0,
                get enableSendAllBids() {
                    return this._sendAllBids
                },
                set enableSendAllBids(e) {
                    this._sendAllBids = e
                },
                _useBidCache: !(m = {}),
                get useBidCache() {
                    return this._useBidCache
                },
                set useBidCache(e) {
                    this._useBidCache = e
                },
                _bidderSequence: v,
                get bidderSequence() {
                    return this._bidderSequence
                },
                set bidderSequence(e) {
                    y[e] ? this._bidderSequence = e : f.logWarn("Invalid order: ".concat(e, ". Bidder Sequence was not set."))
                },
                _timeoutBuffer: 400,
                get timeoutBuffer() {
                    return this._timeoutBuffer
                },
                set timeoutBuffer(e) {
                    this._timeoutBuffer = e
                },
                _disableAjaxTimeout: !1,
                get disableAjaxTimeout() {
                    return this._disableAjaxTimeout
                },
                set disableAjaxTimeout(e) {
                    this._disableAjaxTimeout = e
                }
            };

            function i(t) {
                return a()(Object.keys(h), function(e) {
                    return t === h[e]
                })
            }

            function o(e) {
                if (!e) return f.logError("Prebid Error: no value passed to `setPriceGranularity()`"), !1;
                if ("string" == typeof e) i(e) || f.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                else if ("object" === d(e) && !Object(r.b)(e)) return f.logError("Invalid custom price value passed to `setPriceGranularity()`"), !1;
                return !0
            }
            S && O(Object.keys(S).reduce(function(e, t) {
                return S[t] !== n[t] && (e[t] = n[t] || {}), e
            }, {})), S = n
        }

        function O(t) {
            var n = Object.keys(t);
            E.filter(function(e) {
                return c()(n, e.topic)
            }).forEach(function(e) {
                e.callback(function(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }({}, e.topic, t[e.topic]))
            }), E.filter(function(e) {
                return "*" === e.topic
            }).forEach(function(e) {
                return e.callback(t)
            })
        }
    },
    30: function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t)
        }
    },
    31: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return c
        }), n.d(t, "a", function() {
            return u
        }), t.d = function(e, t) {
            var n = Object(o.getBidRequest)(e.requestId, t),
                r = n && Object(o.deepAccess)(n, "mediaTypes.video"),
                i = r && Object(o.deepAccess)(r, "context");
            return s(e, n, r, i)
        }, n.d(t, "c", function() {
            return s
        });
        n(7);
        var o = n(0),
            i = n(3),
            r = n(9),
            a = (n.n(r), n(13)),
            c = "outstream",
            u = "instream";
        var s = Object(a.b)("sync", function(e, t, n, r) {
            return !t || n && r !== c ? i.b.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : (Object(o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), !1) : r !== c || !(!e.renderer && !t.renderer)
        }, "checkVideoBidSetup")
    },
    32: function(e, t) {
        e.exports = {}
    },
    33: function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    },
    34: function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1)
        }
    },
    35: function(e, t) {
        e.exports = function(e) {
            if (null == e) throw TypeError("Can't call method on  " + e);
            return e
        }
    },
    36: function(e, t, n) {
        var r = n(46),
            i = Math.min;
        e.exports = function(e) {
            return 0 < e ? i(r(e), 9007199254740991) : 0
        }
    },
    366: function(e, t, n) {
        n(367), e.exports = n(16).Number.isInteger
    },
    367: function(e, t, n) {
        var r = n(15);
        r(r.S, "Number", {
            isInteger: n(368)
        })
    },
    368: function(e, t, n) {
        var r = n(18),
            i = Math.floor;
        e.exports = function(e) {
            return !r(e) && isFinite(e) && i(e) === e
        }
    },
    37: function(e, t) {
        e.exports = function() {}
    },
    38: function(e, t, n) {
        n(130), e.exports = n(16).Array.findIndex
    },
    39: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return G
        }), n.d(t, "a", function() {
            return W
        }), t.j = function(e) {
            var a, c, u, s, d = e.adUnits,
                t = e.adUnitCodes,
                n = e.callback,
                r = e.cbTimeout,
                i = e.labels,
                o = e.auctionId,
                f = d,
                l = i,
                p = t,
                g = [],
                b = [],
                y = [],
                v = o || D.generateUUID(),
                h = n,
                m = r,
                S = [],
                E = new Set;

            function A() {
                return {
                    auctionId: v,
                    timestamp: a,
                    auctionEnd: c,
                    auctionStatus: u,
                    adUnits: f,
                    adUnitCodes: p,
                    labels: l,
                    bidderRequests: g,
                    noBids: y,
                    bidsReceived: b,
                    winningBids: S,
                    timeout: m
                }
            }

            function T(e, t) {
                if (t && clearTimeout(s), void 0 === c) {
                    var n = [];
                    e && (D.logMessage("Auction ".concat(v, " timedOut")), (n = function(e, t) {
                        return e.map(function(e) {
                            return (e.bids || []).filter(function(e) {
                                return !t.has(e.bidder)
                            })
                        }).reduce(w.flatten, []).map(function(e) {
                            return {
                                bidId: e.bidId,
                                bidder: e.bidder,
                                adUnitCode: e.adUnitCode,
                                auctionId: e.auctionId
                            }
                        })
                    }(g, E)).length && P.emit(M.EVENTS.BID_TIMEOUT, n)), u = W, c = Date.now(), P.emit(M.EVENTS.AUCTION_END, A());
                    try {
                        if (null != h) {
                            var r = p,
                                i = b.filter(D.bind.call(w.adUnitsFilter, this, r)).reduce(Y, {});
                            h.apply(pbjs, [i, e]), h = null
                        }
                    } catch (e) {
                        D.logError("Error executing bidsBackHandler", null, e)
                    } finally {
                        n.length && k.callTimedOutBidders(d, n, m);
                        var o = _.b.getConfig("userSync") || {};
                        o.enableOverride || x(o.syncDelay)
                    }
                }
            }

            function O() {
                D.logInfo("Bids Received for Auction with id: ".concat(v), b), u = W, T(!1, !0)
            }

            function I(e) {
                E.add(e)
            }
            return {
                addBidReceived: function(e) {
                    b = b.concat(e)
                },
                addNoBid: function(e) {
                    y = y.concat(e)
                },
                executeCallback: T,
                callBids: function() {
                    var e = this;
                    u = q, a = Date.now();
                    var t = k.makeBidRequests(f, a, v, m, l);
                    D.logInfo("Bids Requested for Auction with id: ".concat(v), t), t.forEach(function(e) {
                        ! function(e) {
                            g = g.concat(e)
                        }(e)
                    });
                    var n = {};
                    if (t.length < 1) D.logWarn("No valid bid requests returned for auction"), O();
                    else {
                        var r = {
                            bidRequests: t,
                            run: function() {
                                ! function() {
                                    var e = T.bind(null, !0),
                                        t = setTimeout(e, m);
                                    s = t
                                }(), u = G, P.emit(M.EVENTS.AUCTION_INIT, A());
                                var r = function(e, r) {
                                    var i = 0,
                                        t = !1,
                                        n = new Set,
                                        o = {};

                                    function a() {
                                        i--, t && 0 === i && e()
                                    }
                                    return {
                                        addBidResponse: function(e, t) {
                                            o[t.requestId] = !0, i++;
                                            var n = function(e) {
                                                var t = e.adUnitCode,
                                                    n = e.bid,
                                                    r = e.bidderRequest,
                                                    i = e.auctionId,
                                                    o = r.start,
                                                    a = N({}, n, {
                                                        auctionId: i,
                                                        responseTimestamp: Object(w.timestamp)(),
                                                        requestTimestamp: o,
                                                        cpm: parseFloat(n.cpm) || 0,
                                                        bidder: n.bidderCode,
                                                        adUnitCode: t
                                                    });
                                                a.timeToRespond = a.responseTimestamp - a.requestTimestamp, P.emit(M.EVENTS.BID_ADJUSTMENT, a);
                                                var c = r.bids && U()(r.bids, function(e) {
                                                        return e.adUnitCode == t
                                                    }),
                                                    u = c && c.renderer;
                                                u && u.url && (a.renderer = C.a.install({
                                                    url: u.url
                                                }), a.renderer.setRender(u.render));
                                                var s = _.b.getConfig("mediaTypePriceGranularity.".concat(n.mediaType)),
                                                    d = Object(j.a)(a.cpm, "object" === R(s) ? s : _.b.getConfig("customPriceBucket"), _.b.getConfig("currency.granularityMultiplier"));
                                                return a.pbLg = d.low, a.pbMg = d.med, a.pbHg = d.high, a.pbAg = d.auto, a.pbDg = d.dense, a.pbCg = d.custom, a
                                            }({
                                                adUnitCode: e,
                                                bid: t,
                                                bidderRequest: this,
                                                auctionId: r.getAuctionId()
                                            });
                                            "video" === n.mediaType ? function(e, t, n, r) {
                                                var i = !0,
                                                    o = Object(w.getBidRequest)(t.requestId, [n]),
                                                    a = o && Object(w.deepAccess)(o, "mediaTypes.video"),
                                                    c = a && Object(w.deepAccess)(a, "context");
                                                _.b.getConfig("cache.url") && c !== B.b && (t.videoCacheKey ? t.vastUrl || (D.logError("videoCacheKey specified but not required vastUrl for video bid"), i = !1) : (i = !1, J(e, t, r, o)));
                                                i && (K(e, t), r())
                                            }(r, n, this, a) : (K(r, n), a())
                                        },
                                        adapterDone: function() {
                                            n.add(this), t = r.getBidRequests().every(function(e) {
                                                return n.has(e)
                                            }), this.bids.forEach(function(e) {
                                                o[e.bidId] || (r.addNoBid(e), P.emit(M.EVENTS.NO_BID, e))
                                            }), t && 0 === i && e()
                                        }
                                    }
                                }(O, e);
                                k.callBids(f, t, function() {
                                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    H.apply({
                                        dispatch: r.addBidResponse,
                                        bidderRequest: this
                                    }, t)
                                }, r.adapterDone, {
                                    request: function(e, t) {
                                        o(z, t), o(n, e), F[e] || (F[e] = {
                                            SRA: !0,
                                            origin: t
                                        }), 1 < n[e] && (F[e].SRA = !1)
                                    },
                                    done: function(e) {
                                        z[e]--, V[0] && i(V[0]) && V.shift()
                                    }
                                }, m, I)
                            }
                        };
                        i(r) || (D.logWarn("queueing auction due to limited endpoint capacity"), V.push(r))
                    }

                    function i(e) {
                        var r = !0,
                            i = _.b.getConfig("maxRequestsPerOrigin") || L;
                        return e.bidRequests.some(function(e) {
                            var t = 1,
                                n = void 0 !== e.src && e.src === M.S2S.SRC ? "s2s" : e.bidderCode;
                            return F[n] && (!1 === F[n].SRA && (t = Math.min(e.bids.length, i)), z[F[n].origin] + t > i && (r = !1)), !r
                        }), r && e.run(), r
                    }

                    function o(e, t) {
                        void 0 === e[t] ? e[t] = 1 : e[t]++
                    }
                },
                addWinningBid: function(e) {
                    S = S.concat(e), k.callBidWonBidder(e.bidder, e, d)
                },
                setBidTargeting: function(e) {
                    k.callSetTargetingBidder(e.bidder, e)
                },
                getWinningBids: function() {
                    return S
                },
                getTimeout: function() {
                    return m
                },
                getAuctionId: function() {
                    return v
                },
                getAuctionStatus: function() {
                    return u
                },
                getAdUnits: function() {
                    return f
                },
                getAdUnitCodes: function() {
                    return p
                },
                getBidRequests: function() {
                    return g
                },
                getBidsReceived: function() {
                    return b
                },
                getNoBids: function() {
                    return y
                }
            }
        }, n.d(t, "c", function() {
            return H
        }), t.f = s, t.d = K, n.d(t, "e", function() {
            return J
        }), n.d(t, "h", function() {
            return d
        }), n.d(t, "g", function() {
            return f
        }), t.i = l;
        var w = n(0),
            u = n(10),
            j = n(42),
            a = n(25),
            o = n(62),
            C = n(11),
            _ = n(3),
            r = n(26),
            i = n(13),
            c = n(12),
            U = n.n(c),
            B = n(31);

        function R(e) {
            return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function N() {
            return (N = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var x = r.a.syncUsers,
            D = n(0),
            k = n(7).default,
            P = n(8),
            M = n(4),
            q = "started",
            G = "inProgress",
            W = "completed";
        P.on(M.EVENTS.BID_ADJUSTMENT, function(e) {
            ! function(e) {
                var t, n = e.bidderCode,
                    r = e.cpm;
                if (pbjs.bidderSettings && (n && pbjs.bidderSettings[n] && "function" == typeof pbjs.bidderSettings[n].bidCpmAdjustment ? t = pbjs.bidderSettings[n].bidCpmAdjustment : pbjs.bidderSettings[M.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof pbjs.bidderSettings[M.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (t = pbjs.bidderSettings[M.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), t)) try {
                    r = t(e.cpm, N({}, e))
                } catch (e) {
                    D.logError("Error during bid adjustment", "bidmanager.js", e)
                }
                0 <= r && (e.cpm = r)
            }(e)
        });
        var L = 4,
            z = {},
            F = {},
            V = [];
        var H = Object(i.b)("async", function(e, t) {
            this.dispatch.call(this.bidderRequest, e, t)
        }, "addBidResponse");

        function s(e, t) {
            t.timeToRespond > e.getTimeout() + _.b.getConfig("timeoutBuffer") && e.executeCallback(!0)
        }

        function K(e, t) {
            var n = e.getBidRequests(),
                r = U()(n, function(e) {
                    return e.bidderCode === t.bidderCode
                });
            ! function(t, e) {
                var n;
                if (t.bidderCode && (0 < t.cpm || t.dealId)) {
                    var r = U()(e.bids, function(e) {
                        return e.adUnitCode === t.adUnitCode
                    });
                    n = function(e, t, n) {
                        if (!t) return {};
                        var r = {},
                            i = pbjs.bidderSettings;
                        if (i) {
                            var o = l(t.mediaType, e);
                            p(r, o, t), e && i[e] && i[e][M.JSON_MAPPING.ADSERVER_TARGETING] && (p(r, i[e], t), t.sendStandardTargeting = i[e].sendStandardTargeting)
                        }
                        t.native && (r = N({}, r, Object(a.d)(t, n)));
                        return r
                    }(t.bidderCode, t, r)
                }
                t.adserverTargeting = N(t.adserverTargeting || {}, n)
            }(t, r), P.emit(M.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), s(e, t)
        }
        var J = Object(i.b)("async", function(n, r, i, e) {
            Object(o.b)([r], function(e, t) {
                e ? (D.logWarn("Failed to save to the video cache: ".concat(e, ". Video bid must be discarded.")), s(n, r)) : "" === t[0].uuid ? (D.logWarn("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."), s(n, r)) : (r.videoCacheKey = t[0].uuid, r.vastUrl || (r.vastUrl = Object(o.a)(r.videoCacheKey)), K(n, r), i())
            })
        }, "callPrebidCache");
        var d = function(e) {
                var t = _.b.getConfig("mediaTypePriceGranularity.".concat(e));
                return "string" == typeof e && t ? "string" == typeof t ? t : "custom" : _.b.getConfig("priceGranularity")
            },
            f = function(t) {
                return function(e) {
                    return t === M.GRANULARITY_OPTIONS.AUTO ? e.pbAg : t === M.GRANULARITY_OPTIONS.DENSE ? e.pbDg : t === M.GRANULARITY_OPTIONS.LOW ? e.pbLg : t === M.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : t === M.GRANULARITY_OPTIONS.HIGH ? e.pbHg : t === M.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0
                }
            };

        function l(e, t) {
            function n(e, t) {
                return {
                    key: e,
                    val: "function" == typeof t ? function(e) {
                        return t(e)
                    } : function(e) {
                        return Object(w.getValue)(e, t)
                    }
                }
            }
            var r = M.TARGETING_KEYS,
                i = d(e),
                o = pbjs.bidderSettings;
            if (o[M.JSON_MAPPING.BD_SETTING_STANDARD] || (o[M.JSON_MAPPING.BD_SETTING_STANDARD] = {}), o[M.JSON_MAPPING.BD_SETTING_STANDARD][M.JSON_MAPPING.ADSERVER_TARGETING] || (o[M.JSON_MAPPING.BD_SETTING_STANDARD][M.JSON_MAPPING.ADSERVER_TARGETING] = [n(r.BIDDER, "bidderCode"), n(r.AD_ID, "adId"), n(r.PRICE_BUCKET, f(i)), n(r.SIZE, "size"), n(r.DEAL, "dealId"), n(r.SOURCE, "source"), n(r.FORMAT, "mediaType")]), "video" === e) {
                var a = o[M.JSON_MAPPING.BD_SETTING_STANDARD][M.JSON_MAPPING.ADSERVER_TARGETING];
                if ([r.UUID, r.CACHE_ID].forEach(function(t) {
                        void 0 === U()(a, function(e) {
                            return e.key === t
                        }) && a.push(n(t, "videoCacheKey"))
                    }), _.b.getConfig("cache.url") && (!t || !1 !== D.deepAccess(o, "".concat(t, ".sendStandardTargeting")))) {
                    var c = Object(u.c)(_.b.getConfig("cache.url"));
                    void 0 === U()(a, function(e) {
                        return e.key === r.CACHE_HOST
                    }) && a.push(n(r.CACHE_HOST, function(e) {
                        return D.deepAccess(e, "adserverTargeting.".concat(r.CACHE_HOST)) ? e.adserverTargeting[r.CACHE_HOST] : c.hostname
                    }))
                }
            }
            return o[M.JSON_MAPPING.BD_SETTING_STANDARD]
        }

        function p(r, i, o) {
            var e = i[M.JSON_MAPPING.ADSERVER_TARGETING];
            return o.size = o.getSize(), D._each(e, function(e) {
                var t = e.key,
                    n = e.val;
                if (r[t] && D.logWarn("The key: " + t + " is getting ovewritten"), D.isFn(n)) try {
                    n = n(o)
                } catch (e) {
                    D.logError("bidmanager", "ERROR", e)
                }(void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) && t !== M.TARGETING_KEYS.DEAL || !D.isEmptyStr(n) && null != n ? r[t] = n : D.logInfo("suppressing empty key '" + t + "' from adserver targeting")
            }), r
        }

        function Y(e, t) {
            return e[t.adUnitCode] || (e[t.adUnitCode] = {
                bids: []
            }), e[t.adUnitCode].bids.push(t), e
        }
    },
    4: function(e, t) {
        e.exports = {
            JSON_MAPPING: {
                PL_CODE: "code",
                PL_SIZE: "sizes",
                PL_BIDS: "bids",
                BD_BIDDER: "bidder",
                BD_ID: "paramsd",
                BD_PL_ID: "placementId",
                ADSERVER_TARGETING: "adserverTargeting",
                BD_SETTING_STANDARD: "standard"
            },
            DEBUG_MODE: "pbjs_debug",
            STATUS: {
                GOOD: 1,
                NO_BID: 2
            },
            CB: {
                TYPE: {
                    ALL_BIDS_BACK: "allRequestedBidsBack",
                    AD_UNIT_BIDS_BACK: "adUnitBidsBack",
                    BID_WON: "bidWon",
                    REQUEST_BIDS: "requestBids"
                }
            },
            EVENTS: {
                AUCTION_INIT: "auctionInit",
                AUCTION_END: "auctionEnd",
                BID_ADJUSTMENT: "bidAdjustment",
                BID_TIMEOUT: "bidTimeout",
                BID_REQUESTED: "bidRequested",
                BID_RESPONSE: "bidResponse",
                NO_BID: "noBid",
                BID_WON: "bidWon",
                BIDDER_DONE: "bidderDone",
                SET_TARGETING: "setTargeting",
                REQUEST_BIDS: "requestBids",
                ADD_AD_UNITS: "addAdUnits",
                AD_RENDER_FAILED: "adRenderFailed"
            },
            AD_RENDER_FAILED_REASON: {
                PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocuemnt",
                NO_AD: "noAd",
                EXCEPTION: "exception",
                CANNOT_FIND_AD: "cannotFindAd",
                MISSING_DOC_OR_ADID: "missingDocOrAdid"
            },
            EVENT_ID_PATHS: {
                bidWon: "adUnitCode"
            },
            GRANULARITY_OPTIONS: {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            },
            TARGETING_KEYS: {
                BIDDER: "hb_bidder",
                AD_ID: "hb_adid",
                PRICE_BUCKET: "hb_pb",
                SIZE: "hb_size",
                DEAL: "hb_deal",
                SOURCE: "hb_source",
                FORMAT: "hb_format",
                UUID: "hb_uuid",
                CACHE_ID: "hb_cache_id",
                CACHE_HOST: "hb_cache_host"
            },
            NATIVE_KEYS: {
                title: "hb_native_title",
                body: "hb_native_body",
                body2: "hb_native_body2",
                privacyLink: "hb_native_privacy",
                privacyIcon: "hb_native_privicon",
                sponsoredBy: "hb_native_brand",
                image: "hb_native_image",
                icon: "hb_native_icon",
                clickUrl: "hb_native_linkurl",
                displayUrl: "hb_native_displayurl",
                cta: "hb_native_cta",
                rating: "hb_native_rating",
                address: "hb_native_address",
                downloads: "hb_native_downloads",
                likes: "hb_native_likes",
                phone: "hb_native_phone",
                price: "hb_native_price",
                salePrice: "hb_native_saleprice"
            },
            S2S: {
                SRC: "s2s",
                DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
                SYNCED_BIDDERS_KEY: "pbjsSyncs"
            },
            BID_STATUS: {
                BID_TARGETING_SET: "targetingSet",
                RENDERED: "rendered"
            }
        }
    },
    40: function(e, t, n) {
        var l = n(24),
            p = n(71),
            g = n(72),
            b = n(29),
            y = n(36),
            v = n(73),
            h = {},
            m = {};
        (t = e.exports = function(e, t, n, r, i) {
            var o, a, c, u, s = i ? function() {
                    return e
                } : v(e),
                d = l(n, r, t ? 2 : 1),
                f = 0;
            if ("function" != typeof s) throw TypeError(e + " is not iterable!");
            if (g(s)) {
                for (o = y(e.length); f < o; f++)
                    if ((u = t ? d(b(a = e[f])[0], a[1]) : d(e[f])) === h || u === m) return u
            } else
                for (c = s.call(e); !(a = c.next()).done;)
                    if ((u = p(c, d, a.value, t)) === h || u === m) return u
        }).BREAK = h, t.RETURN = m
    },
    41: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = e;
            return {
                callBids: function() {},
                setBidderCode: function(e) {
                    t = e
                },
                getBidderCode: function() {
                    return t
                }
            }
        }
    },
    42: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return l
        }), n.d(t, "b", function() {
            return g
        });
        var r = n(12),
            a = n.n(r),
            i = n(0),
            s = 2,
            o = {
                buckets: [{
                    min: 0,
                    max: 5,
                    increment: .5
                }]
            },
            c = {
                buckets: [{
                    min: 0,
                    max: 20,
                    increment: .1
                }]
            },
            u = {
                buckets: [{
                    min: 0,
                    max: 20,
                    increment: .01
                }]
            },
            d = {
                buckets: [{
                    min: 0,
                    max: 3,
                    increment: .01
                }, {
                    min: 3,
                    max: 8,
                    increment: .05
                }, {
                    min: 8,
                    max: 20,
                    increment: .5
                }]
            },
            f = {
                buckets: [{
                    min: 0,
                    max: 5,
                    increment: .05
                }, {
                    min: 5,
                    max: 10,
                    increment: .1
                }, {
                    min: 10,
                    max: 20,
                    increment: .5
                }]
            };

        function l(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
                r = parseFloat(e);
            return isNaN(r) && (r = ""), {
                low: "" === r ? "" : p(e, o, n),
                med: "" === r ? "" : p(e, c, n),
                high: "" === r ? "" : p(e, u, n),
                auto: "" === r ? "" : p(e, f, n),
                dense: "" === r ? "" : p(e, d, n),
                custom: "" === r ? "" : p(e, t, n)
            }
        }

        function p(n, e, r) {
            var i = "";
            if (!g(e)) return i;
            var o = e.buckets.reduce(function(e, t) {
                    return e.max > t.max ? e : t
                }, {
                    max: 0
                }),
                t = a()(e.buckets, function(e) {
                    if (n > o.max * r) {
                        var t = e.precision;
                        void 0 === t && (t = s), i = (e.max * r).toFixed(t)
                    } else if (n <= e.max * r && n >= e.min * r) return e
                });
            return t && (i = function(e, t, n) {
                var r = void 0 !== t.precision ? t.precision : s,
                    i = t.increment * n,
                    o = t.min * n,
                    a = Math.pow(10, r + 2),
                    c = (e * a - o * a) / (i * a),
                    u = Math.floor(c) * i + o;
                return (u = Number(u.toFixed(10))).toFixed(r)
            }(n, t, r)), i
        }

        function g(e) {
            if (i.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
            var t = !0;
            return e.buckets.forEach(function(e) {
                void 0 !== e.min && e.max && e.increment || (t = !1)
            }), t
        }
    },
    43: function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    },
    44: function(e, t, n) {
        var m = n(24),
            S = n(56),
            E = n(45),
            A = n(36),
            r = n(83);
        e.exports = function(f, e) {
            var l = 1 == f,
                p = 2 == f,
                g = 3 == f,
                b = 4 == f,
                y = 6 == f,
                v = 5 == f || y,
                h = e || r;
            return function(e, t, n) {
                for (var r, i, o = E(e), a = S(o), c = m(t, n, 3), u = A(a.length), s = 0, d = l ? h(e, u) : p ? h(e, 0) : void 0; s < u; s++)
                    if ((v || s in a) && (i = c(r = a[s], s, o), f))
                        if (l) d[s] = i;
                        else if (i) switch (f) {
                    case 3:
                        return !0;
                    case 5:
                        return r;
                    case 6:
                        return s;
                    case 2:
                        d.push(r)
                } else if (b) return !1;
                return y ? -1 : g || b ? b : d
            }
        }
    },
    45: function(e, t, n) {
        var r = n(35);
        e.exports = function(e) {
            return Object(r(e))
        }
    },
    46: function(e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e)
        }
    },
    47: function(e, t) {
        var n = 0,
            r = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
        }
    },
    48: function(e, t, n) {
        var r = n(56),
            i = n(35);
        e.exports = function(e) {
            return r(i(e))
        }
    },
    49: function(e, t, n) {
        "use strict";
        t.a = r, n.d(t, "b", function() {
            return i
        });
        var c = n(0);

        function u() {
            return (u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function r(i) {
            function o() {
                var e = function() {
                        var t, n = [];
                        do {
                            try {
                                t = t ? t.parent : i;
                                try {
                                    var e = t == i.top,
                                        r = {
                                            referrer: t.document.referrer || null,
                                            location: t.location.href || null,
                                            isTop: e
                                        };
                                    e && (r = u(r, {
                                        canonicalUrl: a(t.document)
                                    })), n.push(r)
                                } catch (e) {
                                    n.push({
                                        referrer: null,
                                        location: null,
                                        isTop: t == i.top
                                    }), Object(c.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location")
                                }
                            } catch (e) {
                                return n.push({
                                    referrer: null,
                                    location: null,
                                    isTop: !1
                                }), n
                            }
                        } while (t != i.top);
                        return n
                    }(),
                    t = function() {
                        try {
                            if (!i.location.ancestorOrigins) return;
                            return i.location.ancestorOrigins
                        } catch (e) {}
                    }();
                if (t)
                    for (var n = 0, r = t.length; n < r; n++) e[n].ancestor = t[n];
                return e
            }

            function a(e) {
                try {
                    var t = e.querySelector("link[rel='canonical']");
                    if (null !== t) return t.href
                } catch (e) {}
                return null
            }
            return function() {
                try {
                    var e, t = o(),
                        n = t.length - 1,
                        r = null !== t[n].location || 0 < n && null !== t[n - 1].referrer,
                        i = function(e) {
                            var t, n = [],
                                r = null,
                                i = null,
                                o = null,
                                a = null,
                                c = null;
                            for (t = e.length - 1; 0 <= t; t--) {
                                try {
                                    r = e[t].location
                                } catch (e) {}
                                if (r) n.push(r), c = c || r;
                                else if (0 !== t) {
                                    i = e[t - 1];
                                    try {
                                        o = i.referrer, a = i.ancestor
                                    } catch (e) {}
                                    o ? (n.push(o), c = c || o) : a ? (n.push(a), c = c || a) : n.push(null)
                                } else n.push(null)
                            }
                            return {
                                stack: n,
                                detectedRefererUrl: c
                            }
                        }(t);
                    return t[t.length - 1].canonicalUrl && (e = t[t.length - 1].canonicalUrl), {
                        referer: i.detectedRefererUrl,
                        reachedTop: r,
                        numIframes: n,
                        stack: i.stack,
                        canonicalUrl: e
                    }
                } catch (e) {}
            }
        }
        var i = r(window)
    },
    5: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), t.b = i;
        var l = n(10),
            p = n(3);

        function g() {
            return (g = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function b(e) {
            return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var y = n(0),
            v = 4,
            r = i();

        function i() {
            var s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3,
                e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                d = e.request,
                f = e.done;
            return function(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
                try {
                    var i, o = r.method || (n ? "POST" : "GET"),
                        a = document.createElement("a");
                    a.href = e;
                    var c = "object" === b(t) && null !== t ? t : {
                        success: function() {
                            y.logMessage("xhr success")
                        },
                        error: function(e) {
                            y.logError("xhr error", null, e)
                        }
                    };
                    if ("function" == typeof t && (c.success = t), (i = new window.XMLHttpRequest).onreadystatechange = function() {
                            if (i.readyState === v) {
                                "function" == typeof f && f(a.origin);
                                var e = i.status;
                                200 <= e && e < 300 || 304 === e ? c.success(i.responseText, i) : c.error(i.statusText, i)
                            }
                        }, p.b.getConfig("disableAjaxTimeout") || (i.ontimeout = function() {
                            y.logError("  xhr timeout after ", i.timeout, "ms")
                        }), "GET" === o && n) {
                        var u = Object(l.c)(e, r);
                        g(u.search, n), e = Object(l.a)(u)
                    }
                    i.open(o, e, !0), p.b.getConfig("disableAjaxTimeout") || (i.timeout = s), r.withCredentials && (i.withCredentials = !0), y._each(r.customHeaders, function(e, t) {
                        i.setRequestHeader(t, e)
                    }), r.preflight && i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.setRequestHeader("Content-Type", r.contentType || "text/plain"), "function" == typeof d && d(a.origin), "POST" === o && n ? i.send(n) : i.send()
                } catch (e) {
                    y.logError("xhr construction", e)
                }
            }
        }
    },
    50: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            if (!t || !e) return void o.logError("cannot load external script without url and moduleCode");
            if (!i()(c, t)) return void o.logError("".concat(t, " not whitelisted for loading external JavaScript"));
            if (a[e]) return;
            o.logWarn("module ".concat(t, " is loading external JavaScript"));
            var n = document.createElement("script");
            n.type = "text/javascript", n.async = !0, n.src = e, o.insertElement(n), a[e] = !0
        }, t.b = function(t, e, n) {
            if (!t) return void o.logError("Error attempting to request empty URL", "adloader.js:loadScript");
            n ? a[t] ? e && "function" == typeof e && (a[t].loaded ? e() : a[t].callbacks.push(e)) : (a[t] = {
                loaded: !1,
                callbacks: []
            }, e && "function" == typeof e && a[t].callbacks.push(e), u(t, function() {
                a[t].loaded = !0;
                try {
                    for (var e = 0; e < a[t].callbacks.length; e++) a[t].callbacks[e]()
                } catch (e) {
                    o.logError("Error executing callback", "adloader.js:loadScript", e)
                }
            })) : u(t, e)
        };
        var r = n(9),
            i = n.n(r),
            o = n(0),
            a = {},
            c = ["criteo"];

        function u(e, t) {
            var n = document.createElement("script");
            n.type = "text/javascript", n.async = !0, t && "function" == typeof t && (n.readyState ? n.onreadystatechange = function() {
                "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, t())
            } : n.onload = function() {
                t()
            }), n.src = e;
            var r = document.getElementsByTagName("head");
            (r = r.length ? r : document.getElementsByTagName("body")).length && (r = r[0]).insertBefore(n, r.firstChild)
        }
    },
    51: function(e, t, n) {
        "use strict";

        function m() {
            return this
        }
        var S = n(58),
            E = n(15),
            A = n(138),
            T = n(21),
            O = n(32),
            I = n(139),
            w = n(53),
            j = n(144),
            C = n(14)("iterator"),
            _ = !([].keys && "next" in [].keys()),
            U = "values";
        e.exports = function(e, t, n, r, i, o, a) {
            I(n, t, r);

            function c(e) {
                if (!_ && e in g) return g[e];
                switch (e) {
                    case "keys":
                    case U:
                        return function() {
                            return new n(this, e)
                        }
                }
                return function() {
                    return new n(this, e)
                }
            }
            var u, s, d, f = t + " Iterator",
                l = i == U,
                p = !1,
                g = e.prototype,
                b = g[C] || g["@@iterator"] || i && g[i],
                y = b || c(i),
                v = i ? l ? c("entries") : y : void 0,
                h = "Array" == t && g.entries || b;
            if (h && (d = j(h.call(new e))) !== Object.prototype && d.next && (w(d, f, !0), S || "function" == typeof d[C] || T(d, C, m)), l && b && b.name !== U && (p = !0, y = function() {
                    return b.call(this)
                }), S && !a || !_ && !p && g[C] || T(g, C, y), O[t] = y, O[f] = m, i)
                if (u = {
                        values: l ? y : c(U),
                        keys: o ? y : c("keys"),
                        entries: v
                    }, a)
                    for (s in u) s in g || A(g, s, u[s]);
                else E(E.P + E.F * (_ || p), t, u);
            return u
        }
    },
    52: function(e, t, n) {
        var r = n(57)("keys"),
            i = n(47);
        e.exports = function(e) {
            return r[e] || (r[e] = i(e))
        }
    },
    53: function(e, t, n) {
        var r = n(20).f,
            i = n(30),
            o = n(14)("toStringTag");
        e.exports = function(e, t, n) {
            e && !i(e = n ? e : e.prototype, o) && r(e, o, {
                configurable: !0,
                value: t
            })
        }
    },
    54: function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    },
    55: function(e, t, n) {
        var r = n(18),
            i = n(19).document,
            o = r(i) && r(i.createElement);
        e.exports = function(e) {
            return o ? i.createElement(e) : {}
        }
    },
    56: function(e, t, n) {
        var r = n(34);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == r(e) ? e.split("") : Object(e)
        }
    },
    57: function(e, t, n) {
        var r = n(16),
            i = n(19),
            o = "__core-js_shared__",
            a = i[o] || (i[o] = {});
        (e.exports = function(e, t) {
            return a[e] || (a[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: r.version,
            mode: n(58) ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    },
    58: function(e, t) {
        e.exports = !0
    },
    59: function(e, t, n) {
        var u = n(48),
            s = n(36),
            d = n(87);
        e.exports = function(c) {
            return function(e, t, n) {
                var r, i = u(e),
                    o = s(i.length),
                    a = d(n, o);
                if (c && t != t) {
                    for (; a < o;)
                        if ((r = i[a++]) != r) return !0
                } else
                    for (; a < o; a++)
                        if ((c || a in i) && i[a] === t) return c || a || 0; return !c && -1
            }
        }
    },
    60: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            if (e.labelAll) return {
                labelAll: !0,
                labels: e.labelAll,
                activeLabels: t
            };
            return {
                labelAll: !1,
                labels: e.labelAny,
                activeLabels: t
            }
        }, t.c = function(e) {
            var t = y(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : b);
            return !t.shouldFilter || !!t.sizesSupported[e]
        }, t.b = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.labels,
                n = void 0 === t ? [] : t,
                r = e.labelAll,
                i = void 0 !== r && r,
                o = e.activeLabels,
                a = void 0 === o ? [] : o,
                c = 1 < arguments.length ? arguments[1] : void 0,
                u = 2 < arguments.length ? arguments[2] : void 0,
                s = y(3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : b);
            c = Object(p.isPlainObject)(c) ? Object(p.deepClone)(c) : u ? {
                banner: {
                    sizes: u
                }
            } : {};
            var d = Object(p.deepAccess)(c, "banner.sizes");
            s.shouldFilter && d && (c.banner.sizes = d.filter(function(e) {
                return s.sizesSupported[e]
            }));
            var f = Object.keys(c),
                l = {
                    active: f.every(function(e) {
                        return "banner" !== e
                    }) || f.some(function(e) {
                        return "banner" === e
                    }) && 0 < Object(p.deepAccess)(c, "banner.sizes.length") && (0 === n.length || !i && (n.some(function(e) {
                        return s.labels[e]
                    }) || n.some(function(e) {
                        return g()(a, e)
                    })) || i && n.reduce(function(e, t) {
                        return e ? s.labels[t] || g()(a, t) : e
                    }, !0)),
                    mediaTypes: c
                };
            d && d.length !== c.banner.sizes.length && (l.filterResults = {
                before: d,
                after: c.banner.sizes
            });
            return l
        };
        var r = n(3),
            p = n(0),
            i = n(9),
            g = n.n(i);

        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var b = [];

        function y(e) {
            return e.reduce(function(n, r) {
                if ("object" === o(r) && "string" == typeof r.mediaQuery) {
                    var t = !1;
                    try {
                        t = Object(p.getWindowTop)().matchMedia(r.mediaQuery).matches
                    } catch (e) {
                        Object(p.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"), t = matchMedia(r.mediaQuery).matches
                    }
                    t && (Array.isArray(r.sizesSupported) && (n.shouldFilter = !0), ["labels", "sizesSupported"].forEach(function(t) {
                        return (r[t] || []).forEach(function(e) {
                            return n[t][e] = !0
                        })
                    }))
                } else Object(p.logWarn)('sizeConfig rule missing required property "mediaQuery"');
                return n
            }, {
                labels: {},
                sizesSupported: {},
                shouldFilter: !1
            })
        }
        r.b.getConfig("sizeConfig", function(e) {
            return function(e) {
                b = e
            }(e.sizeConfig)
        })
    },
    61: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var r = n(0),
            i = {};
        var o = {
            incrementCounter: function(e) {
                return i[e] = i[e] || {}, i[e].counter = Object(r.deepAccess)(i, "".concat(e, ".counter")) + 1 || 1, i[e].counter
            },
            getCounter: function(e) {
                return Object(r.deepAccess)(i, "".concat(e, ".counter")) || 0
            }
        }
    },
    62: function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            var n = {
                puts: e.map(o)
            };
            Object(r.a)(i.b.getConfig("cache.url"), function(n) {
                return {
                    success: function(e) {
                        var t;
                        try {
                            t = JSON.parse(e).responses
                        } catch (e) {
                            return void n(e, [])
                        }
                        t ? n(null, t) : n(new Error("The cache server didn't respond with a responses property."), [])
                    },
                    error: function(e, t) {
                        n(new Error("Error storing video ad in the cache: ".concat(e, ": ").concat(JSON.stringify(t))), [])
                    }
                }
            }(t), JSON.stringify(n), {
                contentType: "text/plain",
                withCredentials: !0
            })
        }, t.a = function(e) {
            return "".concat(i.b.getConfig("cache.url"), "?uuid=").concat(e)
        };
        var r = n(5),
            i = n(3);

        function o(e) {
            var t = {
                type: "xml",
                value: e.vastXml ? e.vastXml : function(e, t) {
                    var n = t ? "<![CDATA[".concat(t, "]]>") : "";
                    return '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(e, "]]></VASTAdTagURI>\n        <Impression>").concat(n, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")
                }(e.vastUrl, e.vastImpUrl),
                ttlseconds: Number(e.ttl)
            };
            return "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (t.key = e.customCacheKey), t
        }
    },
    63: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "checkAdUnitSetup", function() {
            return G
        });
        var r = n(27),
            c = n(0),
            i = n(133),
            o = n(26),
            a = n(50),
            d = n(3),
            v = n(28),
            f = n(64),
            u = n(13),
            s = n(134),
            l = n(9),
            p = n.n(l),
            g = n(61),
            h = n(11),
            b = n(23);

        function y(e) {
            return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function m() {
            return (m = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var S = Object(r.a)(),
            E = n(4),
            A = n(0),
            T = n(7).default,
            O = n(8),
            I = o.a.triggerUserSyncs,
            w = E.EVENTS,
            j = w.ADD_AD_UNITS,
            C = w.BID_WON,
            _ = w.REQUEST_BIDS,
            U = w.SET_TARGETING,
            B = w.AD_RENDER_FAILED,
            R = E.AD_RENDER_FAILED_REASON,
            N = R.PREVENT_WRITING_ON_MAIN_DOCUMENT,
            x = R.NO_AD,
            D = R.EXCEPTION,
            k = R.CANNOT_FIND_AD,
            P = R.MISSING_DOC_OR_ADID,
            M = {
                bidWon: function(e) {
                    var t = v.a.getBidsRequested().map(function(e) {
                        return e.bids.map(function(e) {
                            return e.adUnitCode
                        })
                    }).reduce(c.flatten).filter(c.uniques);
                    return !!A.contains(t, e) || void A.logError('The "' + e + '" placement is not defined.')
                }
            };

        function q(e, t, n) {
            e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, e.defaultView.frameElement.height = n)
        }
        Object(s.a)(), S.bidderSettings = S.bidderSettings || {}, S.libLoaded = !0, S.version = "v2.33.0", A.logInfo("Prebid.js v2.33.0 loaded"), S.adUnits = S.adUnits || [], S.triggerUserSyncs = I;
        var G = Object(u.b)("sync", function(e) {
            return e.forEach(function(e) {
                var t = e.mediaTypes,
                    n = A.getAdUnitSizes(e);
                if (t && t.banner) {
                    var r = t.banner;
                    r.sizes ? (r.sizes = n, e.sizes = n) : (A.logError("Detected a mediaTypes.banner object did not include sizes.  This is a required field for the mediaTypes.banner object.  Removing invalid mediaTypes.banner object from request."), delete e.mediaTypes.banner)
                } else e.sizes && (A.logWarn("Usage of adUnits.sizes will eventually be deprecated.  Please define size dimensions within the corresponding area of the mediaTypes.<object> (eg mediaTypes.banner.sizes)."), e.sizes = n);
                if (t && t.video) {
                    var i = t.video;
                    if (i.playerSize)
                        if (Array.isArray(i.playerSize) && 1 === i.playerSize.length && i.playerSize.every(function(e) {
                                return Object(c.isArrayOfNums)(e, 2)
                            })) e.sizes = i.playerSize;
                        else if (Object(c.isArrayOfNums)(i.playerSize, 2)) {
                        var o = [];
                        o.push(i.playerSize), A.logInfo("Transforming video.playerSize from [".concat(i.playerSize, "] to [[").concat(o, "]] so it's in the proper format.")), e.sizes = i.playerSize = o
                    } else A.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), delete e.mediaTypes.video.playerSize
                }
                if (t && t.native) {
                    var a = t.native;
                    a.image && a.image.sizes && !Array.isArray(a.image.sizes) && (A.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), delete e.mediaTypes.native.image.sizes), a.image && a.image.aspect_ratios && !Array.isArray(a.image.aspect_ratios) && (A.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), delete e.mediaTypes.native.image.aspect_ratios), a.icon && a.icon.sizes && !Array.isArray(a.icon.sizes) && (A.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), delete e.mediaTypes.native.icon.sizes)
                }
            }), e
        }, "checkAdUnitSetup");

        function W(e) {
            var n = v.a[e]().filter(A.bind.call(c.adUnitsFilter, this, v.a.getAdUnitCodes())),
                r = v.a.getLastAuctionId();
            return n.map(function(e) {
                return e.adUnitCode
            }).filter(c.uniques).map(function(t) {
                return n.filter(function(e) {
                    return e.auctionId === r && e.adUnitCode === t
                })
            }).filter(function(e) {
                return e && e[0] && e[0].adUnitCode
            }).map(function(e) {
                return function(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }({}, e[0].adUnitCode, {
                    bids: e
                })
            }).reduce(function(e, t) {
                return m(e, t)
            }, {})
        }

        function L(e, t, n) {
            var r = {};
            r.reason = e, r.message = t, n && (r.bid = n), A.logError(t), O.emit(B, r)
        }

        function z(e) {
            e.forEach(function(e) {
                if (void 0 === e.called) try {
                    e.call(), e.called = !0
                } catch (e) {
                    A.logError("Error processing command :", "prebid.js", e)
                }
            })
        }
        S.getAdserverTargetingForAdUnitCodeStr = function(e) {
            if (A.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
                var t = S.getAdserverTargetingForAdUnitCode(e);
                return A.transformAdServerTargetingObj(t)
            }
            A.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
        }, S.getAdserverTargetingForAdUnitCode = function(e) {
            return S.getAdserverTargeting(e)[e]
        }, S.getAdserverTargeting = function(e) {
            return A.logInfo("Invoking pbjs.getAdserverTargeting", arguments), f.b.getAllTargeting(e)
        }, S.getNoBids = function() {
            return A.logInfo("Invoking pbjs.getNoBids", arguments), W("getNoBids")
        }, S.getBidResponses = function() {
            return A.logInfo("Invoking pbjs.getBidResponses", arguments), W("getBidsReceived")
        }, S.getBidResponsesForAdUnitCode = function(t) {
            return {
                bids: v.a.getBidsReceived().filter(function(e) {
                    return e.adUnitCode === t
                })
            }
        }, S.setTargetingForGPTAsync = function(e, t) {
            if (A.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments), Object(c.isGptPubadsDefined)()) {
                var n = f.b.getAllTargeting(e);
                f.b.resetPresetTargeting(e), f.b.setTargetingForGPT(n, t), Object.keys(n).forEach(function(t) {
                    Object.keys(n[t]).forEach(function(e) {
                        "hb_adid" === e && v.a.setStatusForBids(n[t][e], E.BID_STATUS.BID_TARGETING_SET)
                    })
                }), O.emit(U, n)
            } else A.logError("window.googletag is not defined on the page")
        }, S.setTargetingForAst = function(e) {
            A.logInfo("Invoking pbjs.setTargetingForAn", arguments), f.b.isApntagDefined() ? (f.b.setTargetingForAst(e), O.emit(U, f.b.getAllTargeting())) : A.logError("window.apntag is not defined on the page")
        }, S.renderAd = function(e, t) {
            if (A.logInfo("Invoking pbjs.renderAd", arguments), A.logMessage("Calling renderAd with adId :" + t), e && t) try {
                var n = v.a.findBidByAdId(t);
                if (n) {
                    n.status = E.BID_STATUS.RENDERED, n.ad = A.replaceAuctionPrice(n.ad, n.cpm), n.adUrl = A.replaceAuctionPrice(n.adUrl, n.cpm), v.a.addWinningBid(n), O.emit(C, n);
                    var r = n.height,
                        i = n.width,
                        o = n.ad,
                        a = n.mediaType,
                        c = n.adUrl,
                        u = n.renderer,
                        s = document.createComment("Creative ".concat(n.creativeId, " served by ").concat(n.bidder, " Prebid.js Header Bidding"));
                    if (A.insertElement(s, e, "body"), Object(h.c)(u)) Object(h.b)(u, n);
                    else if (e === document && !A.inIframe() || "video" === a) {
                        var d = "Error trying to write ad. Ad render call ad id ".concat(t, " was prevented from writing to the main document.");
                        L(N, d, n)
                    } else if (o) {
                        if (navigator.userAgent && -1 < navigator.userAgent.toLowerCase().indexOf("firefox/")) {
                            var f = navigator.userAgent.toLowerCase().match(/firefox\/([\d\.]+)/)[1];
                            f && parseInt(f, 10) < 67 && e.open("text/html", "replace")
                        }
                        e.write(o), e.close(), q(e, i, r), A.callBurl(n)
                    } else if (c) {
                        var l = A.createInvisibleIframe();
                        l.height = r, l.width = i, l.style.display = "inline", l.style.overflow = "hidden", l.src = c, A.insertElement(l, e, "body"), q(e, i, r), A.callBurl(n)
                    } else {
                        var p = "Error trying to write ad. No ad for bid response id: ".concat(t);
                        L(x, p, n)
                    }
                } else {
                    var g = "Error trying to write ad. Cannot find ad by given id : ".concat(t);
                    L(k, g)
                }
            } catch (e) {
                var b = "Error trying to write ad Id :".concat(t, " to the page:").concat(e.message);
                L(D, b)
            } else {
                var y = "Error trying to write ad Id :".concat(t, " to the page. Missing document or adId");
                L(P, y)
            }
        }, S.removeAdUnit = function(e) {
            (A.logInfo("Invoking pbjs.removeAdUnit", arguments), e) ? (A.isArray(e) ? e : [e]).forEach(function(e) {
                for (var t = S.adUnits.length - 1; 0 <= t; t--) S.adUnits[t].code === e && S.adUnits.splice(t, 1)
            }): S.adUnits = []
        }, S.requestBids = Object(u.b)("async", function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.bidsBackHandler,
                n = e.timeout,
                r = e.adUnits,
                i = e.adUnitCodes,
                o = e.labels,
                a = e.auctionId;
            O.emit(_);
            var c = n || d.b.getConfig("bidderTimeout");
            if (r = r || S.adUnits, A.logInfo("Invoking pbjs.requestBids", arguments), i && i.length ? r = r.filter(function(e) {
                    return p()(i, e.code)
                }) : i = r && r.map(function(e) {
                    return e.code
                }), (r = G(r)).forEach(function(i) {
                    var o = Object.keys(i.mediaTypes || {
                            banner: "banner"
                        }),
                        e = i.bids.map(function(e) {
                            return e.bidder
                        }),
                        a = T.bidderRegistry,
                        t = d.b.getConfig("s2sConfig"),
                        n = t && t.bidders,
                        r = n ? e.filter(function(e) {
                            return !p()(n, e)
                        }) : e;
                    i.transactionId = A.generateUUID(), r.forEach(function(t) {
                        var e = a[t],
                            n = e && e.getSpec && e.getSpec(),
                            r = n && n.supportedMediaTypes || ["banner"];
                        o.some(function(e) {
                            return p()(r, e)
                        }) || (A.logWarn(A.unsupportedBidderMessage(i, t)), i.bids = i.bids.filter(function(e) {
                            return e.bidder !== t
                        }))
                    }), g.a.incrementCounter(i.code)
                }), r && 0 !== r.length) {
                var u = v.a.createAuction({
                        adUnits: r,
                        adUnitCodes: i,
                        callback: t,
                        cbTimeout: c,
                        labels: o,
                        auctionId: a
                    }),
                    s = r.length;
                return 15 < s && A.logInfo("Current auction ".concat(u.getAuctionId(), " contains ").concat(s, " adUnits."), r), i.forEach(function(e) {
                    return f.b.setLatestAuctionForAdUnit(e, u.getAuctionId())
                }), u.callBids(), u
            }
            if (A.logMessage("No adUnits configured. No bids requested."), "function" == typeof t) try {
                t()
            } catch (e) {
                A.logError("Error executing bidsBackHandler", null, e)
            }
        }), S.addAdUnits = function(e) {
            A.logInfo("Invoking pbjs.addAdUnits", arguments), A.isArray(e) ? S.adUnits.push.apply(S.adUnits, e) : "object" === y(e) && S.adUnits.push(e), O.emit(j)
        }, S.onEvent = function(e, t, n) {
            A.logInfo("Invoking pbjs.onEvent", arguments), A.isFn(t) ? !n || M[e].call(null, n) ? O.on(e, t, n) : A.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : A.logError('The event handler provided is not a function and was not set on event "' + e + '".')
        }, S.offEvent = function(e, t, n) {
            A.logInfo("Invoking pbjs.offEvent", arguments), n && !M[e].call(null, n) || O.off(e, t, n)
        }, S.registerBidAdapter = function(e, t) {
            A.logInfo("Invoking pbjs.registerBidAdapter", arguments);
            try {
                T.registerBidAdapter(e(), t)
            } catch (e) {
                A.logError("Error registering bidder adapter : " + e.message)
            }
        }, S.registerAnalyticsAdapter = function(e) {
            A.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
            try {
                T.registerAnalyticsAdapter(e)
            } catch (e) {
                A.logError("Error registering analytics adapter : " + e.message)
            }
        }, S.createBid = function(e) {
            return A.logInfo("Invoking pbjs.createBid", arguments), Object(b.a)(e)
        }, S.loadScript = function(e, t, n) {
            A.logInfo("Invoking pbjs.loadScript", arguments), Object(a.b)(e, t, n)
        }, S.enableAnalytics = function(e) {
            e && !A.isEmpty(e) ? (A.logInfo("Invoking pbjs.enableAnalytics for: ", e), T.enableAnalytics(e)) : A.logError("pbjs.enableAnalytics should be called with option {}")
        }, S.aliasBidder = function(e, t) {
            A.logInfo("Invoking pbjs.aliasBidder", arguments), e && t ? T.aliasBidAdapter(e, t) : A.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder")
        }, S.getAllWinningBids = function() {
            return v.a.getAllWinningBids()
        }, S.getAllPrebidWinningBids = function() {
            return v.a.getBidsReceived().filter(function(e) {
                return e.status === E.BID_STATUS.BID_TARGETING_SET
            })
        }, S.getHighestCpmBids = function(e) {
            var t = Object(f.a)(v.a.getBidsReceived(), c.getLatestHighestCpmBid);
            return f.b.getWinningBids(e, t)
        }, S.markWinningBidAsUsed = function(t) {
            var e = [];
            t.adUnitCode && t.adId ? e = v.a.getBidsReceived().filter(function(e) {
                return e.adId === t.adId && e.adUnitCode === t.adUnitCode
            }) : t.adUnitCode ? e = f.b.getWinningBids(t.adUnitCode) : t.adId ? e = v.a.getBidsReceived().filter(function(e) {
                return e.adId === t.adId
            }) : A.logWarn("Inproper usage of markWinningBidAsUsed. It'll need an adUnitCode and/or adId to function."), 0 < e.length && (e[0].status = E.BID_STATUS.RENDERED)
        }, S.getConfig = d.b.getConfig, S.setConfig = d.b.setConfig, S.que.push(function() {
            return Object(i.a)()
        }), S.cmd.push = function(e) {
            if ("function" == typeof e) try {
                e.call()
            } catch (e) {
                A.logError("Error processing command :", e.message, e.stack)
            } else A.logError("Commands written into pbjs.cmd.push must be wrapped in a function")
        }, S.que.push = S.cmd.push, S.processQueue = function() {
            u.b.ready(), z(S.que), z(S.cmd)
        }, t.default = S
    },
    64: function(e, t, n) {
        "use strict";
        t.a = S, n.d(t, "b", function() {
            return I
        });
        var s = n(0),
            o = n(3),
            a = n(25),
            r = n(28),
            i = n(60),
            c = n(2),
            u = n(9),
            d = n.n(u);

        function f(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function l() {
            return (l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var g = n(0),
            b = n(4),
            y = [],
            v = Object.keys(b.TARGETING_KEYS).map(function(e) {
                return b.TARGETING_KEYS[e]
            }),
            h = function(e) {
                return e.responseTimestamp + 1e3 * e.ttl + 1e3 > Object(s.timestamp)()
            },
            m = function(e) {
                return e && (e.status && !d()([b.BID_STATUS.BID_TARGETING_SET, b.BID_STATUS.RENDERED], e.status) || !e.status)
            };

        function S(e, n) {
            var r = [],
                i = Object(s.groupBy)(e, "adUnitCode");
            return Object.keys(i).forEach(function(e) {
                var t = Object(s.groupBy)(i[e], "bidderCode");
                Object.keys(t).forEach(function(e) {
                    return r.push(t[e].reduce(n))
                })
            }), r
        }

        function E(e, t) {
            return void 0 !== e.adUnitTargeting.hb_deal && void 0 === t.adUnitTargeting.hb_deal ? -1 : void 0 === e.adUnitTargeting.hb_deal && void 0 !== t.adUnitTargeting.hb_deal ? 1 : t.adUnitTargeting.hb_pb - e.adUnitTargeting.hb_pb
        }
        var A, T, O, I = (A = r.a, O = {}, (T = {}).setLatestAuctionForAdUnit = function(e, t) {
            O[e] = t
        }, T.resetPresetTargeting = function(e) {
            if (Object(s.isGptPubadsDefined)()) {
                var t = j(e),
                    r = A.getAdUnits().filter(function(e) {
                        return d()(t, e.code)
                    });
                window.googletag.pubads().getSlots().forEach(function(n) {
                    y.forEach(function(t) {
                        r.forEach(function(e) {
                            e.code !== n.getAdUnitPath() && e.code !== n.getSlotElementId() || n.setTargeting(t, null)
                        })
                    })
                })
            }
        }, T.resetPresetTargetingAST = function(e) {
            j(e).forEach(function(e) {
                var t = window.apntag.getTag(e);
                if (t && t.keywords) {
                    var n = Object.keys(t.keywords),
                        r = {};
                    n.forEach(function(e) {
                        d()(y, e.toLowerCase()) || (r[e] = t.keywords[e])
                    }), window.apntag.modifyTag(e, {
                        keywords: r
                    })
                }
            })
        }, T.getAllTargeting = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : C(),
                n = j(e),
                r = function(e, t) {
                    var n = T.getWinningBids(e, t),
                        r = _();
                    return n = n.map(function(o) {
                        return p({}, o.adUnitCode, Object.keys(o.adserverTargeting).filter(function(e) {
                            return void 0 === o.sendStandardTargeting || o.sendStandardTargeting || -1 === r.indexOf(e)
                        }).reduce(function(e, t) {
                            var n = [o.adserverTargeting[t]],
                                r = p({}, t.substring(0, 20), n);
                            if (t !== b.TARGETING_KEYS.DEAL) return [].concat(f(e), [r]);
                            var i = p({}, "".concat(t, "_").concat(o.bidderCode).substring(0, 20), n);
                            return [].concat(f(e), [r, i])
                        }, []))
                    })
                }(n, t).concat(function(t, e) {
                    return e.filter(function(e) {
                        return d()(t, e.adUnitCode)
                    }).map(function(e) {
                        return l({}, e)
                    }).reduce(U, []).map(R).filter(function(e) {
                        return e
                    })
                }(n, t)).concat(o.b.getConfig("enableSendAllBids") ? function(e, t) {
                    var n = v.concat(a.a);
                    return S(t, s.getHighestCpm).map(function(t) {
                        if (w(t, e)) return p({}, t.adUnitCode, N(t, n.filter(function(e) {
                            return void 0 !== t.adserverTargeting[e]
                        })))
                    }).filter(function(e) {
                        return e
                    })
                }(n, t) : function(e, t) {
                    if (!0 !== o.b.getConfig("targetingControls.alwaysIncludeDeals")) return [];
                    var n = v.concat(a.a);
                    return S(t, s.getHighestCpm).map(function(t) {
                        if (t.dealId && w(t, e)) return p({}, t.adUnitCode, N(t, n.filter(function(e) {
                            return void 0 !== t.adserverTargeting[e]
                        })))
                    }).filter(function(e) {
                        return e
                    })
                }(n, t));
            r.map(function(t) {
                Object.keys(t).map(function(e) {
                    t[e].map(function(e) {
                        -1 === y.indexOf(Object.keys(e)[0]) && (y = Object.keys(e).concat(y))
                    })
                })
            }), r = function(e) {
                return e.map(function(e) {
                    return p({}, Object.keys(e)[0], e[Object.keys(e)[0]].map(function(e) {
                        return p({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "))
                    }).reduce(function(e, t) {
                        return l(t, e)
                    }, {}))
                }).reduce(function(e, t) {
                    var n = Object.keys(t)[0];
                    return e[n] = l({}, e[n], t[n]), e
                }, {})
            }(r);
            var i = o.b.getConfig("targetingControls.auctionKeyMaxChars");
            return i && (Object(s.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(i, " characters.  Running checks on auction keys...")), r = function(e, c) {
                var u = Object(s.deepClone)(e);
                return Object.keys(u).map(function(e) {
                    return {
                        adUnitCode: e,
                        adUnitTargeting: u[e]
                    }
                }).sort(E).reduce(function(e, t, n, r) {
                    var i = function(n) {
                        return Object.keys(n).reduce(function(e, t) {
                            return e + "".concat(t, "%3d").concat(encodeURIComponent(n[t]), "%26")
                        }, "")
                    }(t.adUnitTargeting);
                    n + 1 === r.length && (i = i.slice(0, -3));
                    var o = t.adUnitCode,
                        a = i.length;
                    return a <= c ? (c -= a, Object(s.logInfo)("AdUnit '".concat(o, "' auction keys comprised of ").concat(a, " characters.  Deducted from running threshold; new limit is ").concat(c), u[o]), e[o] = u[o]) : Object(s.logWarn)("The following keys for adUnitCode '".concat(o, "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(a, ", the current allotted amount was ").concat(c, ".\n"), u[o]), n + 1 === r.length && 0 === Object.keys(e).length && Object(s.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."), e
                }, {})
            }(r, i)), n.forEach(function(e) {
                r[e] || (r[e] = {})
            }), r
        }, T.setTargetingForGPT = function(i, e) {
            window.googletag.pubads().getSlots().forEach(function(r) {
                Object.keys(i).filter(e ? e(r) : Object(s.isAdUnitCodeMatchingSlot)(r)).forEach(function(n) {
                    return Object.keys(i[n]).forEach(function(t) {
                        var e = i[n][t].split(",");
                        (e = 1 < e.length ? [e] : e).map(function(e) {
                            return g.logMessage("Attempting to set key value for slot: ".concat(r.getSlotElementId(), " key: ").concat(t, " value: ").concat(e)), e
                        }).forEach(function(e) {
                            r.setTargeting(t, e)
                        })
                    })
                })
            })
        }, T.getWinningBids = function(e) {
            var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : C(),
                t = j(e);
            return n.filter(function(e) {
                return d()(t, e.adUnitCode)
            }).filter(function(e) {
                return 0 < e.cpm
            }).map(function(e) {
                return e.adUnitCode
            }).filter(s.uniques).map(function(t) {
                return n.filter(function(e) {
                    return e.adUnitCode === t ? e : null
                }).reduce(s.getHighestCpm)
            })
        }, T.setTargetingForAst = function(e) {
            var r = T.getAllTargeting(e);
            try {
                T.resetPresetTargetingAST(e)
            } catch (e) {
                g.logError("unable to reset targeting for AST" + e)
            }
            Object.keys(r).forEach(function(n) {
                return Object.keys(r[n]).forEach(function(e) {
                    if (g.logMessage("Attempting to set targeting for targetId: ".concat(n, " key: ").concat(e, " value: ").concat(r[n][e])), g.isStr(r[n][e]) || g.isArray(r[n][e])) {
                        var t = {};
                        e.search(/pt[0-9]/) < 0 ? t[e.toUpperCase()] = r[n][e] : t[e] = r[n][e], window.apntag.setKeywords(n, t, {
                            overrideKeyValue: !0
                        })
                    }
                })
            })
        }, T.isApntagDefined = function() {
            if (window.apntag && g.isFn(window.apntag.setKeywords)) return !0
        }, T);

        function w(e, t) {
            return e.adserverTargeting && t && (g.isArray(t) && d()(t, e.adUnitCode) || "string" == typeof t && e.adUnitCode === t)
        }

        function j(e) {
            return "string" == typeof e ? [e] : g.isArray(e) ? e : A.getAdUnitCodes() || []
        }

        function C() {
            var e = A.getBidsReceived();
            return o.b.getConfig("useBidCache") || (e = e.filter(function(e) {
                return O[e.adUnitCode] === e.auctionId
            })), S(e = e.filter(function(e) {
                return Object(s.deepAccess)(e, "video.context") !== c.a
            }).filter(function(e) {
                return "banner" !== e.mediaType || Object(i.c)([e.width, e.height])
            }).filter(m).filter(h), s.getOldestHighestCpmBid)
        }

        function _() {
            return A.getStandardBidderAdServerTargeting().map(function(e) {
                return e.key
            }).concat(v).filter(s.uniques)
        }

        function U(t, n, e, r) {
            return Object.keys(n.adserverTargeting).filter(B()).forEach(function(e) {
                t.length && t.filter(function(t) {
                    return function(e) {
                        return e.adUnitCode === n.adUnitCode && e.adserverTargeting[t]
                    }
                }(e)).forEach(function(t) {
                    return function(e) {
                        g.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [e.adserverTargeting[t]]), e.adserverTargeting[t] = e.adserverTargeting[t].concat(n.adserverTargeting[t]).filter(s.uniques), delete n.adserverTargeting[t]
                    }
                }(e))
            }), t.push(n), t
        }

        function B() {
            var t = _().concat(a.a);
            return function(e) {
                return -1 === t.indexOf(e)
            }
        }

        function R(t) {
            return p({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(B()).map(function(e) {
                return p({}, e.substring(0, 20), [t.adserverTargeting[e]])
            }))
        }

        function N(t, e) {
            return e.map(function(e) {
                return p({}, "".concat(e, "_").concat(t.bidderCode).substring(0, 20), [t.adserverTargeting[e]])
            })
        }
    },
    65: function(e, t, n) {
        "use strict";
        var r = n(137)(!0);
        n(51)(String, "String", function(e) {
            this._t = String(e), this._i = 0
        }, function() {
            var e, t = this._t,
                n = this._i;
            return n >= t.length ? {
                value: void 0,
                done: !0
            } : (e = r(t, n), this._i += e.length, {
                value: e,
                done: !1
            })
        })
    },
    66: function(e, t, r) {
        function i() {}
        var o = r(29),
            a = r(140),
            c = r(67),
            u = r(52)("IE_PROTO"),
            s = "prototype",
            d = function() {
                var e, t = r(55)("iframe"),
                    n = c.length;
                for (t.style.display = "none", r(143).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), d = e.F; n--;) delete d[s][c[n]];
                return d()
            };
        e.exports = Object.create || function(e, t) {
            var n;
            return null !== e ? (i[s] = o(e), n = new i, i[s] = null, n[u] = e) : n = d(), void 0 === t ? n : a(n, t)
        }
    },
    662: function(e, t, n) {
        e.exports = n(63)
    },
    67: function(e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    68: function(e, t) {
        e.exports = function(e, t) {
            return {
                value: t,
                done: !!e
            }
        }
    },
    69: function(e, t, n) {
        var i = n(21);
        e.exports = function(e, t, n) {
            for (var r in t) n && e[r] ? e[r] = t[r] : i(e, r, t[r]);
            return e
        }
    },
    7: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "gdprDataHandler", function() {
            return B
        }), t.setS2STestingModule = function(e) {
            O = e
        };
        var h = n(0),
            p = n(60),
            g = n(25),
            u = n(1),
            m = n(5),
            y = n(3),
            r = n(9),
            S = n.n(r),
            i = n(12),
            v = n.n(i),
            b = n(61),
            E = n(49);

        function A(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function T() {
            return (T = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var O, I = n(0),
            w = n(4),
            j = n(8),
            s = {},
            C = s.bidderRegistry = {},
            d = s.aliasRegistry = {},
            _ = {};
        y.b.getConfig("s2sConfig", function(e) {
            _ = e.s2sConfig
        });
        var o = {};

        function U(e) {
            var i = e.bidderCode,
                s = e.auctionId,
                d = e.bidderRequestId,
                t = e.adUnits,
                f = e.labels,
                l = e.src;
            return t.reduce(function(e, c) {
                var t = Object(p.b)(Object(p.a)(c, f), c.mediaTypes, c.sizes),
                    n = t.active,
                    u = t.mediaTypes,
                    r = t.filterResults;
                return n ? r && I.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" banner sizes from '), r.before, "to ", r.after) : I.logInfo('Size mapping disabled adUnit "'.concat(c.code, '"')), n && e.push(c.bids.filter(function(e) {
                    return e.bidder === i
                }).reduce(function(e, t) {
                    var n = c.nativeParams || I.deepAccess(c, "mediaTypes.native");
                    n && (t = T({}, t, {
                        nativeParams: Object(g.g)(n)
                    })), t = T({}, t, Object(h.getDefinedParams)(c, ["mediaType", "renderer"]));
                    var r = Object(p.b)(Object(p.a)(t, f), u),
                        i = r.active,
                        o = r.mediaTypes,
                        a = r.filterResults;
                    return i ? a && I.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '" banner sizes from '), a.before, "to ", a.after) : I.logInfo('Size mapping deactivated adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '"')), I.isValidMediaTypes(o) ? t = T({}, t, {
                        mediaTypes: o
                    }) : I.logError("mediaTypes is not correctly configured for adunit ".concat(c.code)), i && e.push(T({}, t, {
                        adUnitCode: c.code,
                        transactionId: c.transactionId,
                        sizes: I.deepAccess(o, "banner.sizes") || I.deepAccess(o, "video.playerSize") || [],
                        bidId: t.bid_id || I.getUniqueIdentifierStr(),
                        bidderRequestId: d,
                        auctionId: s,
                        src: l,
                        bidRequestsCount: b.a.getCounter(c.code)
                    })), e
                }, [])), e
            }, []).reduce(h.flatten, []).filter(function(e) {
                return "" !== e
            })
        }
        var B = {
            consentData: null,
            setConsentData: function(e) {
                B.consentData = e
            },
            getConsentData: function() {
                return B.consentData
            }
        };

        function R() {
            return _ && _.enabled && _.testing && O
        }

        function a(t, n, e) {
            try {
                var r = C[t].getSpec();
                r && r[n] && "function" == typeof r[n] && (I.logInfo("Invoking ".concat(t, ".").concat(n)), r[n](e))
            } catch (e) {
                I.logWarn("Error calling ".concat(n, " of ").concat(t))
            }
        }
        s.makeBidRequests = function(e, i, o, a, c) {
            var u = [],
                t = Object(h.getBidderCodes)(e);
            y.b.getConfig("bidderSequence") === y.a && (t = Object(h.shuffle)(t));
            var n, s = Object(E.b)(),
                r = t,
                d = [];
            if (_.enabled) {
                if (R()) {
                    var f = O.getSourceBidderMap(e);
                    d = f[O.CLIENT]
                }
                var l = _.bidders;
                r = t.filter(function(e) {
                    return !S()(l, e) || S()(d, e)
                });
                Boolean(R() && _.testServerOnly) && (n = e, Boolean(v()(n, function(e) {
                    return v()(e.bids, function(e) {
                        return (e.bidSource || _.bidderControl && _.bidderControl[e.bidder]) && e.finalSource === O.SERVER
                    })
                }))) && (r.length = 0);
                var p = function(e) {
                        var t = _.bidders,
                            n = I.deepClone(e);
                        return n.forEach(function(e) {
                            e.bids = e.bids.filter(function(e) {
                                return S()(t, e.bidder) && (!R() || e.finalSource !== O.CLIENT)
                            }).map(function(e) {
                                return e.bid_id = I.getUniqueIdentifierStr(), e
                            })
                        }), n = n.filter(function(e) {
                            return 0 !== e.bids.length
                        })
                    }(e),
                    g = I.generateUUID();
                l.forEach(function(e) {
                    var t = I.getUniqueIdentifierStr(),
                        n = {
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            tid: g,
                            bids: U({
                                bidderCode: e,
                                auctionId: o,
                                bidderRequestId: t,
                                adUnits: I.deepClone(p),
                                labels: c,
                                src: w.S2S.SRC
                            }),
                            auctionStart: i,
                            timeout: _.timeout,
                            src: w.S2S.SRC,
                            refererInfo: s
                        };
                    0 !== n.bids.length && u.push(n)
                }), p.forEach(function(e) {
                    var t = e.bids.filter(function(t) {
                        return v()(u, function(e) {
                            return v()(e.bids, function(e) {
                                return e.bidId === t.bid_id
                            })
                        })
                    });
                    e.bids = t
                }), u.forEach(function(e) {
                    e.adUnitsS2SCopy = p.filter(function(e) {
                        return 0 < e.bids.length
                    })
                })
            }
            var b = function(e) {
                var t = I.deepClone(e);
                return t.forEach(function(e) {
                    e.bids = e.bids.filter(function(e) {
                        return !R() || e.finalSource !== O.SERVER
                    })
                }), t = t.filter(function(e) {
                    return 0 !== e.bids.length
                })
            }(e);
            return r.forEach(function(e) {
                var t = I.getUniqueIdentifierStr(),
                    n = {
                        bidderCode: e,
                        auctionId: o,
                        bidderRequestId: t,
                        bids: U({
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            adUnits: I.deepClone(b),
                            labels: c,
                            src: "client"
                        }),
                        auctionStart: i,
                        timeout: a,
                        refererInfo: s
                    },
                    r = C[e];
                r || I.logError("Trying to make a request for bidder that does not exist: ".concat(e)), r && n.bids && 0 !== n.bids.length && u.push(n)
            }), B.getConsentData() && u.forEach(function(e) {
                e.gdprConsent = B.getConsentData()
            }), u
        }, s.callBids = function(e, t, r, i, o, a, c) {
            if (t.length) {
                var n = A(t.reduce(function(e, t) {
                        return e[Number(void 0 !== t.src && t.src === w.S2S.SRC)].push(t), e
                    }, [
                        [],
                        []
                    ]), 2),
                    u = n[0],
                    s = n[1];
                if (s.length) {
                    var d = Object(m.b)(a, o ? {
                            request: o.request.bind(null, "s2s"),
                            done: o.done
                        } : void 0),
                        f = _.bidders,
                        l = C[_.adapter],
                        p = s[0].tid,
                        g = s[0].adUnitsS2SCopy;
                    if (l) {
                        var b = {
                            tid: p,
                            ad_units: g
                        };
                        if (b.ad_units.length) {
                            var y = s.map(function(e) {
                                    return e.start = Object(h.timestamp)(), i.bind(e)
                                }),
                                v = b.ad_units.reduce(function(e, t) {
                                    return e.concat((t.bids || []).reduce(function(e, t) {
                                        return e.concat(t.bidder)
                                    }, []))
                                }, []);
                            I.logMessage("CALLING S2S HEADER BIDDERS ==== ".concat(f.filter(function(e) {
                                return S()(v, e)
                            }).join(","))), s.forEach(function(e) {
                                j.emit(w.EVENTS.BID_REQUESTED, e)
                            }), l.callBids(b, s, function(e, t) {
                                var n = Object(h.getBidderRequest)(s, t.bidderCode, e);
                                n && r.call(n, e, t)
                            }, function() {
                                return y.forEach(function(e) {
                                    return e()
                                })
                            }, d)
                        }
                    }
                }
                u.forEach(function(e) {
                    e.start = Object(h.timestamp)();
                    var t = C[e.bidderCode];
                    I.logMessage("CALLING BIDDER ======= ".concat(e.bidderCode)), j.emit(w.EVENTS.BID_REQUESTED, e);
                    var n = Object(m.b)(a, o ? {
                        request: o.request.bind(null, e.bidderCode),
                        done: o.done
                    } : void 0);
                    t.callBids(e, r.bind(e), i.bind(e), n, c)
                })
            } else I.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")
        }, s.videoAdapters = [], s.registerBidAdapter = function(e, t) {
            var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes,
                r = void 0 === n ? [] : n;
            e && t ? "function" == typeof e.callBids ? (C[t] = e, S()(r, "video") && s.videoAdapters.push(t), S()(r, "native") && g.e.push(t)) : I.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : I.logError("bidAdaptor or bidderCode not specified")
        }, s.aliasBidAdapter = function(t, e) {
            if (void 0 === C[e]) {
                var n = C[t];
                if (void 0 === n) {
                    var r = y.b.getConfig("s2sConfig"),
                        i = r && r.bidders;
                    i && S()(i, e) ? d[e] = t : I.logError('bidderCode "' + t + '" is not an existing bidder.', "adapterManager.aliasBidAdapter")
                } else try {
                    var o, a = function(e) {
                        var t = [];
                        return S()(s.videoAdapters, e) && t.push("video"), S()(g.e, e) && t.push("native"), t
                    }(t);
                    if (n.constructor.prototype != Object.prototype)(o = new n.constructor).setBidderCode(e);
                    else {
                        var c = n.getSpec();
                        o = Object(u.newBidder)(T({}, c, {
                            code: e
                        })), d[e] = t
                    }
                    s.registerBidAdapter(o, e, {
                        supportedMediaTypes: a
                    })
                } catch (e) {
                    I.logError(t + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter")
                }
            } else I.logMessage('alias name "' + e + '" has been already specified.')
        }, s.registerAnalyticsAdapter = function(e) {
            var t = e.adapter,
                n = e.code;
            t && n ? "function" == typeof t.enableAnalytics ? (t.code = n, o[n] = t) : I.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(n, '"\n        analytics adapter must implement an enableAnalytics() function')) : I.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")
        }, s.enableAnalytics = function(e) {
            I.isArray(e) || (e = [e]), I._each(e, function(e) {
                var t = o[e.provider];
                t ? t.enableAnalytics(e) : I.logError("Prebid Error: no analytics adapter found in registry for\n        ".concat(e.provider, "."))
            })
        }, s.getBidAdapter = function(e) {
            return C[e]
        }, s.callTimedOutBidders = function(t, n, r) {
            n = n.map(function(e) {
                return e.params = I.getUserConfiguredParams(t, e.adUnitCode, e.bidder), e.timeout = r, e
            }), n = I.groupBy(n, "bidder"), Object.keys(n).forEach(function(e) {
                a(e, "onTimeout", n[e])
            })
        }, s.callBidWonBidder = function(e, t, n) {
            t.params = I.getUserConfiguredParams(n, t.adUnitCode, t.bidder), a(e, "onBidWon", t)
        }, s.callSetTargetingBidder = function(e, t) {
            a(e, "onSetTargeting", t)
        }, t.default = s
    },
    70: function(e, t) {
        e.exports = function(e, t, n, r) {
            if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
            return e
        }
    },
    71: function(e, t, n) {
        var o = n(29);
        e.exports = function(t, e, n, r) {
            try {
                return r ? e(o(n)[0], n[1]) : e(n)
            } catch (e) {
                var i = t.return;
                throw void 0 !== i && o(i.call(t)), e
            }
        }
    },
    72: function(e, t, n) {
        var r = n(32),
            i = n(14)("iterator"),
            o = Array.prototype;
        e.exports = function(e) {
            return void 0 !== e && (r.Array === e || o[i] === e)
        }
    },
    73: function(e, t, n) {
        var r = n(74),
            i = n(14)("iterator"),
            o = n(32);
        e.exports = n(16).getIteratorMethod = function(e) {
            if (null != e) return e[i] || e["@@iterator"] || o[r(e)]
        }
    },
    74: function(e, t, n) {
        var i = n(34),
            o = n(14)("toStringTag"),
            a = "Arguments" == i(function() {
                return arguments
            }());
        e.exports = function(e) {
            var t, n, r;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = Object(e), o)) ? n : a ? i(t) : "Object" == (r = i(t)) && "function" == typeof t.callee ? "Arguments" : r
        }
    },
    75: function(e, t, n) {
        function r(e) {
            c(e, i, {
                value: {
                    i: "O" + ++u,
                    w: {}
                }
            })
        }
        var i = n(47)("meta"),
            o = n(18),
            a = n(30),
            c = n(20).f,
            u = 0,
            s = Object.isExtensible || function() {
                return !0
            },
            d = !n(33)(function() {
                return s(Object.preventExtensions({}))
            }),
            f = e.exports = {
                KEY: i,
                NEED: !1,
                fastKey: function(e, t) {
                    if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                    if (!a(e, i)) {
                        if (!s(e)) return "F";
                        if (!t) return "E";
                        r(e)
                    }
                    return e[i].i
                },
                getWeak: function(e, t) {
                    if (!a(e, i)) {
                        if (!s(e)) return !0;
                        if (!t) return !1;
                        r(e)
                    }
                    return e[i].w
                },
                onFreeze: function(e) {
                    return d && f.NEED && s(e) && !a(e, i) && r(e), e
                }
            }
    },
    76: function(e, t, n) {
        var r = n(18);
        e.exports = function(e, t) {
            if (!r(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
            return e
        }
    },
    77: function(e, t, n) {
        "use strict";
        t.a = function(t, n) {
            o.adServers = o.adServers || {}, o.adServers[t] = o.adServers[t] || {}, Object.keys(n).forEach(function(e) {
                o.adServers[t][e] ? Object(i.logWarn)("Attempting to add an already registered function property ".concat(e, " for AdServer ").concat(t, ".")) : o.adServers[t][e] = n[e]
            })
        };
        var r = n(27),
            i = n(0),
            o = Object(r.a)()
    },
    8: function(e, t, n) {
        function r() {
            return (r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var c, i, u = n(0),
            o = n(4),
            a = Array.prototype.slice,
            s = Array.prototype.push,
            d = u._map(o.EVENTS, function(e) {
                return e
            }),
            f = o.EVENT_ID_PATHS,
            l = [];
        e.exports = (c = {}, (i = {}).on = function(e, t, n) {
            if (function(e) {
                    return u.contains(d, e)
                }(e)) {
                var r = c[e] || {
                    que: []
                };
                n ? (r[n] = r[n] || {
                    que: []
                }, r[n].que.push(t)) : r.que.push(t), c[e] = r
            } else u.logError("Wrong event name : " + e + " Valid event names :" + d)
        }, i.emit = function(e) {
            ! function(e, t) {
                u.logMessage("Emitting event for: " + e);
                var n = t[0] || {},
                    r = n[f[e]],
                    i = c[e] || {
                        que: []
                    },
                    o = u._map(i, function(e, t) {
                        return t
                    }),
                    a = [];
                l.push({
                    eventType: e,
                    args: n,
                    id: r
                }), r && u.contains(o, r) && s.apply(a, i[r].que), s.apply(a, i.que), u._each(a, function(e) {
                    if (e) try {
                        e.apply(null, t)
                    } catch (e) {
                        u.logError("Error executing handler:", "events.js", e)
                    }
                })
            }(e, a.call(arguments, 1))
        }, i.off = function(e, n, r) {
            var i = c[e];
            u.isEmpty(i) || u.isEmpty(i.que) && u.isEmpty(i[r]) || r && (u.isEmpty(i[r]) || u.isEmpty(i[r].que)) || (r ? u._each(i[r].que, function(e) {
                var t = i[r].que;
                e === n && t.splice(u.indexOf.call(t, e), 1)
            }) : u._each(i.que, function(e) {
                var t = i.que;
                e === n && t.splice(u.indexOf.call(t, e), 1)
            }), c[e] = i)
        }, i.get = function() {
            return c
        }, i.getEvents = function() {
            var n = [];
            return u._each(l, function(e) {
                var t = r({}, e);
                n.push(t)
            }), n
        }, i)
    },
    80: function(e, t, n) {
        "use strict";
        var r = n(15),
            i = n(44)(5),
            o = "find",
            a = !0;
        o in [] && Array(1)[o](function() {
            a = !1
        }), r(r.P + r.F * a, "Array", {
            find: function(e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0)
            }
        }), n(37)(o)
    },
    81: function(e, t, n) {
        e.exports = !n(22) && !n(33)(function() {
            return 7 != Object.defineProperty(n(55)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    82: function(e, t, n) {
        var i = n(18);
        e.exports = function(e, t) {
            if (!i(e)) return e;
            var n, r;
            if (t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
            if ("function" == typeof(n = e.valueOf) && !i(r = n.call(e))) return r;
            if (!t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    83: function(e, t, n) {
        var r = n(84);
        e.exports = function(e, t) {
            return new(r(e))(t)
        }
    },
    84: function(e, t, n) {
        var r = n(18),
            i = n(85),
            o = n(14)("species");
        e.exports = function(e) {
            var t;
            return i(e) && ("function" != typeof(t = e.constructor) || t !== Array && !i(t.prototype) || (t = void 0), r(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t
        }
    },
    85: function(e, t, n) {
        var r = n(34);
        e.exports = Array.isArray || function(e) {
            return "Array" == r(e)
        }
    },
    86: function(e, t, n) {
        "use strict";
        var r = n(15),
            i = n(59)(!0);
        r(r.P, "Array", {
            includes: function(e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0)
            }
        }), n(37)("includes")
    },
    87: function(e, t, n) {
        var r = n(46),
            i = Math.max,
            o = Math.min;
        e.exports = function(e, t) {
            return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t)
        }
    },
    88: function(e, t) {
        e.exports = function e(t) {
            var n = Array.isArray(t) ? [] : {};
            for (var r in t) {
                var i = t[r];
                n[r] = i && "object" == typeof i ? e(i) : i
            }
            return n
        }
    },
    89: function(e, t, n) {
        "use strict";
        t.a = function(e, t, n, r, i) {
            for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++) e = e ? e[t[r]] : i;
            return e === i ? n : e
        }
    },
    9: function(e, t, n) {
        n(86), e.exports = n(16).Array.includes
    },
    90: function(e, t, n) {
        "use strict";
        t.a = function(e, t, n) {
            t.split && (t = t.split("."));
            for (var r, i = 0, o = t.length, a = e; i < o; ++i) r = a[t[i]], a = a[t[i]] = i === o - 1 ? n : null != r ? r : !~t[i + 1].indexOf(".") && -1 < +t[i + 1] ? [] : {}
        }
    },
    91: function(e, t) {
        h.SYNC = 1, h.ASYNC = 2, h.QUEUE = 4;
        var g = "fun-hooks";
        var n = Object.freeze({
                useProxy: !0,
                ready: 0
            }),
            b = new WeakMap,
            r = "2,1,0" === [1].reduce(function(e, t, n) {
                return [e, t, n]
            }, 2).toString() ? Array.prototype.reduce : function(e, t) {
                var n, r = Object(this),
                    i = r.length >>> 0,
                    o = 0;
                if (t) n = t;
                else {
                    for (; o < i && !(o in r);) o++;
                    n = r[o++]
                }
                for (; o < i;) o in r && (n = e(n, r[o], o, r)), o++;
                return n
            };

        function y(e, t) {
            return Array.prototype.slice.call(e, t)
        }
        var v = Object.assign || function(e) {
            return r.call(y(arguments, 1), function(t, n) {
                return n && Object.keys(n).forEach(function(e) {
                    t[e] = n[e]
                }), t
            }, e)
        };

        function h(u) {
            var s, e = {},
                d = [];

            function t(e, t) {
                return "function" == typeof e ? f.call(null, "sync", e, t) : "string" == typeof e && "function" == typeof t ? f.apply(null, arguments) : "object" == typeof e ? function(o, e, a) {
                    var t = !0;
                    void 0 === e && (e = Object.getOwnPropertyNames(o), t = !1);
                    var c = {},
                        n = ["constructor"];
                    for (;
                        (e = e.filter(function(e) {
                            return !("function" != typeof o[e] || -1 !== n.indexOf(e) || e.match(/^_/))
                        })).forEach(function(e) {
                            var t = e.split(":"),
                                n = t[0],
                                r = t[1] || "sync";
                            if (!c[n]) {
                                var i = o[n];
                                c[n] = o[n] = f(r, i, a ? [a, n] : void 0)
                            }
                        }), o = Object.getPrototypeOf(o), t && o;);
                    return c
                }.apply(null, arguments) : void 0
            }

            function l(o) {
                var a = Array.isArray(o) ? o : o.split(".");
                return r.call(a, function(t, n, e) {
                    var r = t[n],
                        i = !1;
                    return r || (e === a.length - 1 ? (s || d.push(function() {
                        i || console.warn(g + ": referenced '" + o + "' but it was never created")
                    }), t[n] = p(function(e) {
                        t[n] = e, i = !0
                    })) : t[n] = {})
                }, e)
            }

            function p(r) {
                var o = [],
                    a = [],
                    c = function() {},
                    e = {
                        before: function(e, t) {
                            return n.call(this, o, "before", e, t)
                        },
                        after: function(e, t) {
                            return n.call(this, a, "after", e, t)
                        },
                        getHooks: function(n) {
                            var e = o.concat(a);
                            return "object" == typeof n && (e = e.filter(function(t) {
                                return Object.keys(n).every(function(e) {
                                    return t[e] === n[e]
                                })
                            })), v(e, {
                                remove: function() {
                                    return e.forEach(function(e) {
                                        e.remove()
                                    }), this
                                }
                            })
                        },
                        removeAll: function() {
                            return this.getHooks().remove()
                        }
                    },
                    t = {
                        install: function(e, t, n) {
                            this.type = e, (c = n)(o, a), r && r(t)
                        }
                    };
                return b.set(e.after, t), e;

                function n(t, e, n, r) {
                    var i = {
                        hook: n,
                        type: e,
                        priority: r || 10,
                        remove: function() {
                            var e = t.indexOf(i); - 1 !== e && (t.splice(e, 1), c(o, a))
                        }
                    };
                    return t.push(i), t.sort(function(e, t) {
                        return t.priority - e.priority
                    }), c(o, a), this
                }
            }

            function f(f, e, t) {
                var n = e.after && b.get(e.after);
                if (n) {
                    if (n.type !== f) throw g + ": recreated hookable with different type";
                    return e
                }
                var r, i, o = t ? l(t) : p(),
                    a = {
                        get: function(e, t) {
                            return o[t] || Reflect.get.apply(Reflect, arguments)
                        }
                    };
                return s || d.push(c), u.useProxy && "function" == typeof Proxy && Proxy.revocable ? i = new Proxy(e, a) : v(i = function() {
                    return a.apply ? a.apply(e, this, y(arguments)) : e.apply(this, arguments)
                }, o), b.get(i.after).install(f, i, function(e, t) {
                    var s, d = [];
                    r = e.length || t.length ? (e.forEach(n), s = d.push(void 0) - 1, t.forEach(n), function(n, r, e) {
                        var i, o = 0,
                            a = "async" === f && "function" == typeof e[e.length - 1] && e.pop();

                        function c(e) {
                            "sync" === f ? i = e : a && a.apply(null, arguments)
                        }

                        function u(e) {
                            if (d[o]) {
                                var t = y(arguments);
                                return u.bail = c, t.unshift(u), d[o++].apply(r, t)
                            }
                            "sync" === f ? i = e : a && a.apply(null, arguments)
                        }
                        return d[s] = function() {
                            var e = y(arguments, 1);
                            "async" === f && a && (delete u.bail, e.push(u));
                            var t = n.apply(r, e);
                            "sync" === f && u(t)
                        }, u.apply(null, e), i
                    }) : void 0;

                    function n(e) {
                        d.push(e.hook)
                    }
                    c()
                }), i;

                function c() {
                    !s && ("sync" !== f || u.ready & h.SYNC) && ("async" !== f || u.ready & h.ASYNC) ? "sync" !== f && u.ready & h.QUEUE ? a.apply = function() {
                        var e = arguments;
                        d.push(function() {
                            i.apply(e[1], e[2])
                        })
                    } : a.apply = function() {
                        throw g + ": hooked function not ready"
                    } : a.apply = r
                }
            }
            return (u = v({}, n, u)).ready ? t.ready = function() {
                s = !0,
                    function(e) {
                        for (var t; t = e.shift();) t()
                    }(d)
            } : s = !0, t.get = l, t
        }
        e.exports = h
    }
});
pbjsChunk([263], {
    78: function(t, e, n) {
        t.exports = n(79)
    },
    79: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), n.d(e, "spec", function() {
            return u
        });
        var r = n(1),
            c = n(3),
            p = n(0);

        function l() {
            return (l = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            }).apply(this, arguments)
        }
        var i = "33across",
            h = "https://ssc.33across.com/api/v1/hb",
            s = "https://de.tynt.com/deb/v2?m=xch&rt=html",
            o = {},
            g = "nm";

        function f(t) {
            return ! function() {
                try {
                    return p.getWindowSelf() !== p.getWindowTop()
                } catch (t) {
                    return !0
                }
            }() && null !== t
        }

        function b(t, e, n) {
            var r = 2 < arguments.length && void 0 !== n ? n : {},
                i = r.w,
                o = r.h;
            return "visible" === e.document.visibilityState ? function(t, e) {
                var n, r, i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                    o = i.w,
                    d = i.h,
                    u = function(t) {
                        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.w,
                            r = e.h,
                            i = t.getBoundingClientRect(),
                            o = i.width,
                            d = i.height,
                            u = i.left,
                            a = i.top,
                            s = i.right,
                            c = i.bottom;
                        (0 === o || 0 === d) && n && r && (s = u + (o = n), c = a + (d = r));
                        return {
                            width: o,
                            height: d,
                            left: u,
                            top: a,
                            right: s,
                            bottom: c
                        }
                    }(t, {
                        w: o,
                        h: d
                    }),
                    a = function(t) {
                        for (var e = {
                                left: t[0].left,
                                right: t[0].right,
                                top: t[0].top,
                                bottom: t[0].bottom
                            }, n = 1; n < t.length; ++n) {
                            if (e.left = Math.max(e.left, t[n].left), e.right = Math.min(e.right, t[n].right), e.left >= e.right) return null;
                            if (e.top = Math.max(e.top, t[n].top), e.bottom = Math.min(e.bottom, t[n].bottom), e.top >= e.bottom) return null
                        }
                        return e.width = e.right - e.left, e.height = e.bottom - e.top, e
                    }([{
                        left: 0,
                        top: 0,
                        right: e.innerWidth,
                        bottom: e.innerHeight
                    }, u]);
                return null === a ? 0 : (n = a.width * a.height, r = u.width * u.height, n / r * 100)
            }(t, e, {
                w: i,
                h: o
            }) : 0
        }

        function m(t) {
            return document.getElementById(t) || document.getElementById(function(t) {
                if (p.isGptPubadsDefined())
                    for (var e = googletag.pubads().getSlots(), n = p.isSlotMatchingAdUnitCode(t), r = 0; r < e.length; r++)
                        if (n(e[r])) {
                            var i = e[r].getSlotElementId();
                            return p.logInfo("[33Across Adapter] Map ad unit path to HTML element id: '".concat(t, "' -> ").concat(i)), i
                        }
                return p.logWarn("[33Across Adapter] Unable to locate element for ad unit code: '".concat(t, "'")), null
            }(t))
        }

        function d(t, e) {
            var n = 1 < arguments.length && void 0 !== e ? e : {},
                r = {},
                i = t.params,
                o = m(t.adUnitCode),
                d = function(t) {
                    return !p.isArray(t) || 2 !== t.length || p.isArray(t[0]) ? t.map(v) : [v(t)]
                }(t.sizes),
                u = function(t) {
                    return t.reduce(function(t, e) {
                        return e.h * e.w < t.h * t.w ? e : t
                    })
                }(d),
                a = function(o) {
                    return function(t) {
                        var e = l({}, t),
                            n = e.imp = e.imp.map(function(t) {
                                return l({}, t)
                            }),
                            r = n[0].banner = l({}, n[0].banner),
                            i = r.ext = l({}, r.ext);
                        return (i.ttx = l({}, i.ttx)).viewability = {
                            amount: isNaN(o) ? o : Math.round(o)
                        }, e
                    }
                }(f(o) ? b(o, p.getWindowTop(), u) : g);
            r.imp = [], r.imp[0] = {
                banner: {
                    format: d.map(function(t) {
                        return l(t, {
                            ext: {}
                        })
                    })
                },
                ext: {
                    ttx: {
                        prod: i.productId
                    }
                }
            }, r.site = {
                id: i.siteId
            }, r.id = t.bidId, r.user = {
                ext: {
                    consent: n.consentString
                }
            }, r.regs = {
                ext: {
                    gdpr: !0 === n.gdprApplies ? 1 : 0
                }
            }, r.ext = {
                ttx: {
                    caller: [{
                        name: "prebidjs",
                        version: "2.33.0"
                    }]
                }
            }, 1 === i.test && (r.test = 1);
            var s = c.b.getConfig("ttxSettings");
            return {
                method: "POST",
                url: s && s.url || h,
                data: JSON.stringify(a(r)),
                options: {
                    contentType: "text/plain",
                    withCredentials: !0
                }
            }
        }

        function v(t) {
            return {
                w: parseInt(t[0], 10),
                h: parseInt(t[1], 10)
            }
        }
        var u = {
            NON_MEASURABLE: g,
            code: i,
            isBidRequestValid: function(t) {
                return t.bidder === i && void 0 !== t.params && (void 0 !== t.params.siteId && void 0 !== t.params.productId)
            },
            buildRequests: function(t, e) {
                var n = l({
                    consentString: void 0,
                    gdprApplies: !1
                }, e && e.gdprConsent);
                return o.uniqueSiteIds = t.map(function(t) {
                    return t.params.siteId
                }).filter(p.uniques), t.map(function(t) {
                    return d(t, n)
                })
            },
            interpretResponse: function(t, e) {
                var n = [];
                return 0 < t.body.seatbid.length && 0 < t.body.seatbid[0].bid.length && n.push(function(t) {
                    return {
                        requestId: t.id,
                        bidderCode: i,
                        cpm: t.seatbid[0].bid[0].price,
                        width: t.seatbid[0].bid[0].w,
                        height: t.seatbid[0].bid[0].h,
                        ad: t.seatbid[0].bid[0].adm,
                        ttl: t.seatbid[0].bid[0].ttl || 60,
                        creativeId: t.seatbid[0].bid[0].crid,
                        currency: t.cur,
                        netRevenue: !0
                    }
                }(t.body)), n
            },
            getUserSyncs: function(t, e, n) {
                return t.iframeEnabled ? o.uniqueSiteIds.map(function(t) {
                    return function(t) {
                        var e = t.siteId,
                            n = t.gdprConsent,
                            r = void 0 === n ? {} : n,
                            i = c.b.getConfig("ttxSettings"),
                            o = i && i.syncUrl || s,
                            d = r.consentString,
                            u = r.gdprApplies,
                            a = {
                                type: "iframe",
                                url: "".concat(o, "&id=").concat(e, "&gdpr_consent=").concat(encodeURIComponent(d))
                            };
                        return "boolean" == typeof u && (a.url += "&gdpr=".concat(Number(u))), a
                    }({
                        gdprConsent: n,
                        siteId: t
                    })
                }) : []
            }
        };
        Object(r.registerBidder)(u)
    }
}, [78]);
pbjsChunk([246], {
    131: function(e, t, i) {
        e.exports = i(132)
    },
    132: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.callPrebidCacheHook = O, t.checkAdUnitSetupHook = k, t.checkVideoBidSetupHook = w, t.adpodSetConfig = _, t.callPrebidCacheAfterAuction = R, t.sortByPricePerSecond = K, t.getTargeting = P;
        var l = i(0),
            u = i(39),
            n = i(63),
            a = i(31),
            o = i(13),
            s = i(62),
            f = i(3),
            g = i(2),
            r = i(135),
            d = i.n(r),
            c = i(12),
            v = i.n(c),
            p = i(28),
            b = i(4),
            h = i.n(b);

        function m() {
            return (m = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                }
                return e
            }).apply(this, arguments)
        }

        function y(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e
        }

        function T(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, i = new Array(e.length); t < e.length; t++) i[t] = e[t];
                    return i
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        var C, S = i(158),
            A = "hb_pb_cat_dur",
            E = "hb_cache_id",
            I = 50,
            j = 5,
            B = (C = {}, {
                addBid: function(e) {
                    C[e.auctionId] || U(e.auctionId), C[e.auctionId].bidStorage.add(e)
                },
                removeBid: function(e) {
                    C[e.auctionId].bidStorage.delete(e)
                },
                getBids: function(e) {
                    return C[e.auctionId] && C[e.auctionId].bidStorage.values()
                },
                getQueueDispatcher: function(e) {
                    return C[e.auctionId] && C[e.auctionId].queueDispatcher
                },
                setupInitialCacheKey: function(e) {
                    C[e.auctionId] || (C[e.auctionId] = {}, C[e.auctionId].initialCacheKey = l.generateUUID())
                },
                getInitialCacheKey: function(e) {
                    return C[e.auctionId] && C[e.auctionId].initialCacheKey
                }
            });

        function U(e) {
            C[e] = {}, C[e].bidStorage = new d.a, C[e].queueDispatcher = function(r) {
                var d, c = 1;
                return function(e, t, i, n) {
                    function a() {
                        (function(a, o, r) {
                            (function(e) {
                                for (var t = 0; t < e.length; t++) B.removeBid(e[t])
                            })(o), Object(s.b)(o, function(e, t) {
                                if (e) {
                                    l.logWarn("Failed to save to the video cache: ".concat(e, ". Video bid(s) must be discarded."));
                                    for (var i = 0; i < o.length; i++) Object(u.f)(a, o[i])
                                } else
                                    for (var n = 0; n < t.length; n++) "" !== t[n].uuid ? Object(u.d)(a, o[n]) : l.logInfo("Detected a bid was not cached because the custom key was already registered.  Attempted to use key: ".concat(o[n].customCacheKey, ". Bid was: "), o[n]), r()
                            })
                        }).call(o, e, t, i)
                    }
                    var o = this;
                    clearTimeout(d), n ? c = 1 : c === j ? (c = 1, a()) : (c++, d = setTimeout(a, r))
                }
            }(I), C[e].initialCacheKey = l.generateUUID()
        }

        function D(e, t) {
            var i, n = B.getInitialCacheKey(e),
                a = l.deepAccess(e, "video.durationBucket"),
                o = Object(u.h)(e.mediaType),
                r = Object(u.g)(o)(e);
            if (t) {
                var d = l.deepAccess(e, "meta.adServerCatId");
                i = "".concat(r, "_").concat(d, "_").concat(a, "s")
            } else i = "".concat(r, "_").concat(a, "s");
            e.adserverTargeting || (e.adserverTargeting = {}), e.adserverTargeting[A] = i, e.adserverTargeting[E] = n, e.videoCacheKey = n, e.customCacheKey = "".concat(i, "_").concat(n)
        }

        function O(e, t, i, n, a) {
            var o = l.deepAccess(a, "mediaTypes.video");
            if (o && o.context === g.a) {
                var r = f.b.getConfig("adpod.brandCategoryExclusion");
                !l.deepAccess(i, "meta.adServerCatId") && r ? (l.logWarn("Detected a bid without meta.adServerCatId while setConfig({adpod.brandCategoryExclusion}) was enabled.  This bid has been rejected:", i), n()) : !1 === f.b.getConfig("adpod.deferCaching") ? (B.addBid(i), D(i, r), function(e, t, i) {
                    var n = B.getBids(t);
                    if (n) {
                        var a = S(n),
                            o = B.getQueueDispatcher(t),
                            r = !(e.getAuctionStatus() === u.b);
                        o(e, a, i, r)
                    } else l.logWarn("Attempted to cache a bid from an unknown auction. Bid:", t)
                }(t, i, n)) : (B.setupInitialCacheKey(i), D(i, r), Object(u.d)(t, i), n())
            } else e.call(this, t, i, n, a)
        }

        function k(e, t) {
            t = t.filter(function(e) {
                var t = l.deepAccess(e, "mediaTypes"),
                    i = l.deepAccess(t, "video");
                if (i && i.context === g.a) {
                    if (1 < Object.keys(t).length) return l.logWarn("Detected more than one mediaType in adUnitCode: ".concat(e.code, " while attempting to define an 'adpod' video adUnit.  'adpod' adUnits cannot be mixed with other mediaTypes.  This adUnit will be removed from the auction.")), !1;
                    var n = "Detected missing or incorrectly setup fields for an adpod adUnit.  Please review the following fields of adUnitCode: ".concat(e.code, ".  This adUnit will be removed from the auction."),
                        a = !(!i.playerSize || !l.isArrayOfNums(i.playerSize)),
                        o = !!(i.adPodDurationSec && l.isNumber(i.adPodDurationSec) && 0 < i.adPodDurationSec),
                        r = !!(i.durationRangeSec && l.isArrayOfNums(i.durationRangeSec) && i.durationRangeSec.every(function(e) {
                            return 0 < e
                        }));
                    if (!a || !o || !r) return n += a ? "" : "\nmediaTypes.video.playerSize", n += o ? "" : "\nmediaTypes.video.adPodDurationSec", n += r ? "" : "\nmediaTypes.video.durationRangeSec", l.logWarn(n), !1
                }
                return !0
            }), e.call(this, t)
        }

        function w(e, t, i, n, a) {
            if (a === g.a) {
                var o = !0;
                if (f.b.getConfig("adpod.brandCategoryExclusion") && !l.deepAccess(t, "meta.iabSubCatId") && (o = !1), l.deepAccess(t, "video"))
                    if (l.deepAccess(t, "video.context") && t.video.context === g.a || (o = !1), !l.deepAccess(t, "video.durationSeconds") || t.video.durationSeconds <= 0) o = !1;
                    else(function(e, t) {
                        var i = l.deepAccess(t, "video.durationSeconds"),
                            n = l.deepAccess(e, "mediaTypes.video"),
                            a = n.durationRangeSec;
                        if (a.sort(function(e, t) {
                                return e - t
                            }), n.requireExactDuration) {
                            if (!v()(a, function(e) {
                                    return e === i
                                })) return l.logWarn("Detected a bid with a duration value not part of the list of accepted ranges specified in adUnit.mediaTypes.video.durationRangeSec.  Exact match durations must be used for this adUnit. Rejecting bid: ", t), !1;
                            t.video.durationBucket = i
                        } else {
                            var o = Math.max.apply(Math, T(a));
                            if (!(i <= o + 2)) return l.logWarn("Detected a bid with a duration value outside the accepted ranges specified in adUnit.mediaTypes.video.durationRangeSec.  Rejecting bid: ", t), !1;
                            var r = v()(a, function(e) {
                                return i <= e + 2
                            });
                            t.video.durationBucket = r
                        }
                        return !0
                    })(i, t) || (o = !1);
                f.b.getConfig("cache.url") || !t.vastXml || t.vastUrl || (l.logError('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), o = !1), e.bail(o)
            } else e.call(this, t, i, n, a)
        }

        function _(e) {
            void 0 !== e.bidQueueTimeDelay && ("number" == typeof e.bidQueueTimeDelay && 0 < e.bidQueueTimeDelay ? I = e.bidQueueTimeDelay : l.logWarn("Detected invalid value for adpod.bidQueueTimeDelay in setConfig; must be a positive number.  Using default: ".concat(I))), void 0 !== e.bidQueueSizeLimit && ("number" == typeof e.bidQueueSizeLimit && 0 < e.bidQueueSizeLimit ? j = e.bidQueueSizeLimit : l.logWarn("Detected invalid value for adpod.bidQueueSizeLimit in setConfig; must be a positive number.  Using default: ".concat(j)))
        }

        function R(a, o) {
            Object(s.b)(a, function(e, t) {
                if (e) o(e, null);
                else {
                    for (var i = [], n = 0; n < t.length; n++) "" !== t[n] && i.push(a[n]);
                    o(null, i)
                }
            })
        }

        function K(e, t) {
            return e.adserverTargeting[h.a.TARGETING_KEYS.PRICE_BUCKET] / e.video.durationBucket < t.adserverTargeting[h.a.TARGETING_KEYS.PRICE_BUCKET] / t.video.durationBucket ? 1 : e.adserverTargeting[h.a.TARGETING_KEYS.PRICE_BUCKET] / e.video.durationBucket > t.adserverTargeting[h.a.TARGETING_KEYS.PRICE_BUCKET] / t.video.durationBucket ? -1 : 0
        }

        function P() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.codes,
                n = e.callback;
            if (n) {
                var i = function(t) {
                        return p.a.getAdUnits().filter(function(e) {
                            return l.deepAccess(e, "mediaTypes.video.context") === g.a
                        }).filter(function(e) {
                            return !(0 < t.length) || -1 != t.indexOf(e.code)
                        })
                    }(t = t || []),
                    a = p.a.getBidsReceived(),
                    o = f.b.getConfig("adpod.brandCategoryExclusion"),
                    r = f.b.getConfig("adpod.deferCaching"),
                    d = "boolean" != typeof r || r,
                    c = function(e, t) {
                        var i = t.map(function(e) {
                            return e.code
                        });
                        return e.filter(function(e) {
                            return -1 != i.indexOf(e.adUnitCode) && e.video && e.video.context === g.a
                        })
                    }(a, i);
                (c = o || d ? function(e) {
                    var t = e.map(function(e) {
                        return m({}, e, y({}, A, e.adserverTargeting[A]))
                    });
                    t = l.groupBy(t, A);
                    var i = [];
                    return Object.keys(t).forEach(function(e) {
                        t[e].sort(l.compareOn("responseTimestamp")), i.push(t[e][0])
                    }), i
                }(c) : c).sort(K);
                var u = {};
                if (!1 === d) i.forEach(function(t) {
                    var n = [],
                        a = l.deepAccess(t, "mediaTypes.video.adPodDurationSec");
                    c.filter(function(e) {
                        return e.adUnitCode === t.code
                    }).forEach(function(e, t, i) {
                        e.video.durationBucket <= a && (n.push(y({}, A, e.adserverTargeting[A])), a -= e.video.durationBucket), t === i.length - 1 && 0 < n.length && n.push(y({}, E, e.adserverTargeting[E]))
                    }), u[t.code] = n
                }), n(null, u);
                else {
                    var s = [];
                    i.forEach(function(t) {
                        var i = l.deepAccess(t, "mediaTypes.video.adPodDurationSec");
                        c.filter(function(e) {
                            return e.adUnitCode === t.code
                        }).forEach(function(e) {
                            e.video.durationBucket <= i && (s.push(e), i -= e.video.durationBucket)
                        })
                    }), R(s, function(e, t) {
                        if (e) n(e, null);
                        else {
                            var i = l.groupBy(t, "adUnitCode");
                            Object.keys(i).forEach(function(e) {
                                var n = [];
                                i[e].forEach(function(e, t, i) {
                                    n.push(y({}, A, e.adserverTargeting[A])), t === i.length - 1 && 0 < n.length && n.push(y({}, E, e.adserverTargeting[E]))
                                }), u[e] = n
                            }), n(null, u)
                        }
                    })
                }
                return u
            }
            l.logError("No callback function was defined in the getTargeting call.  Aborting getTargeting().")
        }
        f.b.getConfig("adpod", function(e) {
            return _(e.adpod)
        }), Object(o.d)(u.e, O), Object(o.d)(n.checkAdUnitSetup, k), Object(o.d)(a.c, w);
        var x = {
            TARGETING_KEY_PB_CAT_DUR: A,
            TARGETING_KEY_CACHE_ID: E,
            getTargeting: P
        };
        Object.freeze(x), Object(o.c)("adpod", function(e) {
            l.isPlainObject(arguments.length <= 0 ? void 0 : e) ? function(e, t) {
                for (var i in t) e[i] = t[i]
            }(arguments.length <= 0 ? void 0 : e, x) : l.logError("Adpod module needs plain object to share methods with submodule")
        })
    }
}, [131]);
pbjsChunk([234], {
    190: function(e, r, t) {
        e.exports = t(191)
    },
    191: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "spec", function() {
            return x
        });
        var s = t(0),
            n = t(1),
            i = t(2);

        function o() {
            return (o = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                return e
            }).apply(this, arguments)
        }

        function a() {
            var e = d(["dcn=", "&pos=", "&cmd=bid", ""]);
            return a = function() {
                return e
            }, e
        }

        function c() {
            var e = d(["", "/bidRequest?"]);
            return c = function() {
                return e
            }, e
        }

        function u() {
            var e = d(["", "/pubapi/3.0/", "/", "/", "/", "/ADTECH;v=2;cmd=bid;cors=yes;alias=", ";misc=", ";", ""]);
            return u = function() {
                return e
            }, e
        }

        function d(e, r) {
            return r = r || e.slice(0), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(r)
                }
            }))
        }
        var p = {
                AOL: "aol",
                ONEMOBILE: "onemobile",
                ONEDISPLAY: "onedisplay"
            },
            l = {
                GET: "display-get"
            },
            m = {
                GET: "mobile-get",
                POST: "mobile-post"
            },
            f = {
                TAG: "iframe",
                TYPE: "iframe"
            },
            b = {
                TAG: "img",
                TYPE: "image"
            },
            h = E(u(), "host", "network", "placement", "pageid", "sizeid", "alias", "misc", "dynamicParams"),
            v = E(c(), "host"),
            g = E(a(), "dcn", "pos", "dynamicParams"),
            O = {
                us: "adserver-us.adtech.advertising.com",
                eu: "adserver-eu.adtech.advertising.com",
                as: "adserver-as.adtech.advertising.com"
            },
            y = "https",
            P = 1;

        function E(o) {
            for (var e = arguments.length, t = new Array(1 < e ? e - 1 : 0), r = 1; r < e; r++) t[r - 1] = arguments[r];
            return function() {
                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                var i = n[n.length - 1] || {},
                    a = [o[0]];
                return t.forEach(function(e, r) {
                    var t = s.isInteger(e) ? n[e] : i[e];
                    a.push(t, o[r + 1])
                }), a.join("")
            }
        }

        function I(e) {
            return e === p.AOL || e === p.ONEMOBILE
        }

        function T(e) {
            if (I(e.bidder) && e.params.id && e.params.imp && e.params.imp[0]) {
                var r = e.params.imp[0];
                return r.id && r.tagid && (r.banner && r.banner.w && r.banner.h || r.video && r.video.mimes && r.video.minduration && r.video.maxduration)
            }
        }

        function S(e) {
            return I(e.bidder) && e.params.dcn && e.params.pos
        }

        function R(e) {
            return function(e) {
                return e === p.AOL || e === p.ONEDISPLAY
            }(e.bidder) && e.params.placement && e.params.network
        }
        var x = {
            code: p.AOL,
            aliases: [p.ONEMOBILE, p.ONEDISPLAY],
            supportedMediaTypes: [i.b],
            isBidRequestValid: function(e) {
                return R(e) || function(e) {
                    return S(e) || T(e)
                }(e)
            },
            buildRequests: function(e, r) {
                var t = this,
                    n = r ? r.gdprConsent : null;
                return e.map(function(e) {
                    var r = function(e) {
                        return S(e) ? m.GET : T(e) ? m.POST : R(e) ? l.GET : void 0
                    }(e);
                    if (r) return t.formatBidRequest(r, e, n)
                })
            },
            interpretResponse: function(e, r) {
                var t = e.body;
                if (t) {
                    var n = this._parseBidResponse(t, r);
                    if (n) return n
                } else s.logError("Empty bid response", r.bidderCode, t)
            },
            getUserSyncs: function(e, r) {
                var t = !s.isEmpty(r) && r[0].body;
                return t && t.ext && t.ext.pixels ? this.parsePixelItems(t.ext.pixels) : []
            },
            formatBidRequest: function(e, r, t) {
                var n;
                switch (e) {
                    case l.GET:
                        n = {
                            url: this.buildMarketplaceUrl(r, t),
                            method: "GET",
                            ttl: 60
                        };
                        break;
                    case m.GET:
                        n = {
                            url: this.buildOneMobileGetUrl(r, t),
                            method: "GET",
                            ttl: 3600
                        };
                        break;
                    case m.POST:
                        n = {
                            url: this.buildOneMobileBaseUrl(r),
                            method: "POST",
                            ttl: 3600,
                            data: this.buildOpenRtbRequestData(r, t),
                            options: {
                                contentType: "application/json",
                                customHeaders: {
                                    "x-openrtb-version": "2.2"
                                }
                            }
                        }
                }
                return n.bidderCode = r.bidder, n.bidId = r.bidId, n.userSyncOn = r.params.userSyncOn, n
            },
            buildMarketplaceUrl: function(e, r) {
                var t, n = e.params,
                    i = n.server,
                    a = n.region || "us";
                return O.hasOwnProperty(a) || (s.logWarn("Unknown region '".concat(a, "' for AOL bidder.")), a = "us"), t = i || O[a], n.region = a, this.applyProtocol(h({
                    host: t,
                    network: n.network,
                    placement: parseInt(n.placement),
                    pageid: n.pageId || 0,
                    sizeid: n.sizeId || 0,
                    alias: n.alias || s.getUniqueIdentifierStr(),
                    misc: (new Date).getTime(),
                    dynamicParams: this.formatMarketplaceDynamicParams(n, r)
                }))
            },
            buildOneMobileGetUrl: function(e, r) {
                var t = e.params,
                    n = t.dcn,
                    i = t.pos,
                    a = t.ext,
                    o = this.buildOneMobileBaseUrl(e);
                if (n && i) {
                    var s = this.formatOneMobileDynamicParams(a, r);
                    o += g({
                        dcn: n,
                        pos: i,
                        dynamicParams: s
                    })
                }
                return o
            },
            buildOneMobileBaseUrl: function(e) {
                return this.applyProtocol(v({
                    host: e.params.host || "c2shb.ssp.yahoo.com"
                }))
            },
            applyProtocol: function(e) {
                return /^https?:\/\//i.test(e) ? e : 0 === e.indexOf("//") ? "".concat(y, ":").concat(e) : "".concat(y, "://").concat(e)
            },
            formatMarketplaceDynamicParams: function(e, r) {
                var t = 0 < arguments.length && void 0 !== e ? e : {},
                    n = 1 < arguments.length ? r : void 0,
                    i = {};
                t.bidFloor && (i.bidfloor = t.bidFloor), o(i, this.formatKeyValues(t.keyValues)), o(i, this.formatConsentData(n));
                var a = "";
                return s._each(i, function(e, r) {
                    a += "".concat(r, "=").concat(encodeURIComponent(e), ";")
                }), a
            },
            formatOneMobileDynamicParams: function(e, r) {
                var t = 0 < arguments.length && void 0 !== e ? e : {},
                    n = 1 < arguments.length ? r : void 0;
                this.isSecureProtocol() && (t.secure = P), o(t, this.formatConsentData(n));
                var i = "";
                return s._each(t, function(e, r) {
                    i += "&".concat(r, "=").concat(encodeURIComponent(e))
                }), i
            },
            buildOpenRtbRequestData: function(e, r) {
                var t = {
                    id: e.params.id,
                    imp: e.params.imp
                };
                return this.isConsentRequired(r) && (t.regs = {
                    ext: {
                        gdpr: P
                    }
                }, r.consentString && (t.user = {
                    ext: {
                        consent: r.consentString
                    }
                })), t
            },
            isConsentRequired: function(e) {
                return !(!e || !e.gdprApplies)
            },
            formatKeyValues: function(e) {
                var t = {};
                return s._each(e, function(e, r) {
                    t["kv".concat(r)] = e
                }), t
            },
            formatConsentData: function(e) {
                var r = {};
                return this.isConsentRequired(e) && (r.gdpr = P, e.consentString && (r.euconsent = e.consentString)), r
            },
            parsePixelItems: function(e) {
                var n = /\w*(?=\s)/,
                    i = /src=("|')(.*?)\1/,
                    a = [];
                if (e) {
                    var r = e.match(/(img|iframe)[\s\S]*?src\s*=\s*("|')(.*?)\2/gi);
                    r && r.forEach(function(e) {
                        var r = e.match(n)[0],
                            t = e.match(i)[2];
                        r && r && a.push({
                            type: r === b.TAG ? b.TYPE : f.TYPE,
                            url: t
                        })
                    })
                }
                return a
            },
            _parseBidResponse: function(e, r) {
                var t, n;
                try {
                    t = e.seatbid[0].bid[0]
                } catch (e) {
                    return
                }
                if (t.ext && t.ext.encp) n = t.ext.encp;
                else if (null === (n = t.price) || isNaN(n)) return void s.logError("Invalid price in bid response", p.AOL, bid);
                return {
                    bidderCode: r.bidderCode,
                    requestId: r.bidId,
                    ad: t.adm,
                    cpm: n,
                    width: t.w,
                    height: t.h,
                    creativeId: t.crid || 0,
                    pubapiId: e.id,
                    currency: e.cur || "USD",
                    dealId: t.dealid,
                    netRevenue: !0,
                    ttl: r.ttl
                }
            },
            isOneMobileBidder: I,
            isSecureProtocol: function() {
                return "https:" === document.location.protocol
            }
        };
        Object(n.registerBidder)(x)
    }
}, [190]);
pbjsChunk([232], {
    198: function(e, r, a) {
        e.exports = a(199)
    },
    199: function(e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), a.d(r, "spec", function() {
            return m
        });
        var l = a(11),
            h = a(0),
            _ = a(3),
            f = a(1),
            v = a(2),
            o = a(28),
            t = a(12),
            k = a.n(t),
            n = a(9),
            I = a.n(n),
            g = a(31);

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function y() {
            return (y = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var a = arguments[r];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }).apply(this, arguments)
        }

        function x(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var r = 0, a = new Array(e.length); r < e.length; r++) a[r] = e[r];
                    return a
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        var A = "appnexus",
            w = "//ib.adnxs.com/ut/v3/prebid",
            d = ["id", "mimes", "minduration", "maxduration", "startdelay", "skippable", "playback_method", "frameworks"],
            S = ["age", "externalUid", "segments", "gender", "dnt", "language"],
            C = ["geo", "device_id"],
            T = ["enabled", "dongle", "member_id", "debug_timeout"],
            c = {
                body: "description",
                body2: "desc2",
                cta: "ctatext",
                image: {
                    serverName: "main_image",
                    requiredParams: {
                        required: !0
                    }
                },
                icon: {
                    serverName: "icon",
                    requiredParams: {
                        required: !0
                    }
                },
                sponsoredBy: "sponsored_by",
                privacyLink: "privacy_link",
                salePrice: "saleprice",
                displayUrl: "displayurl"
            },
            s = "<script",
            u = /http:\/\/cdn\.adnxs\.com\/v/,
            p = "trk.js",
            m = {
                code: A,
                aliases: ["appnexusAst", "brealtime", "emxdigital", "pagescience", "defymedia", "gourmetads", "matomy", "featureforward", "oftmedia", "districtm"],
                supportedMediaTypes: [v.b, v.d, v.c],
                isBidRequestValid: function(e) {
                    return !!(e.params.placementId || e.params.member && e.params.invCode)
                },
                buildRequests: function(e, r) {
                    var a, t = e.map(O),
                        n = k()(e, P);
                    n && (a = {}, Object.keys(n.params.user).filter(function(e) {
                        return I()(S, e)
                    }).forEach(function(e) {
                        return a[e] = n.params.user[e]
                    }));
                    var i, s = k()(e, U);
                    s && s.params && s.params.app && (i = {}, Object.keys(s.params.app).filter(function(e) {
                        return I()(C, e)
                    }).forEach(function(e) {
                        return i[e] = s.params.app[e]
                    }));
                    var o, d = k()(e, q);
                    d && d.params && s.params.app && s.params.app.id && (o = {
                        appid: d.params.app.id
                    });
                    var c = {},
                        u = {},
                        p = h.getCookie("apn_prebid_debug") || null;
                    if (p) try {
                        c = JSON.parse(p)
                    } catch (e) {
                        h.logError("AppNexus Debug Auction Cookie Error:\n\n" + e)
                    } else {
                        var m = k()(e, z);
                        m && m.debug && (c = m.debug)
                    }
                    c && c.enabled && Object.keys(c).filter(function(e) {
                        return I()(T, e)
                    }).forEach(function(e) {
                        u[e] = c[e]
                    });
                    var l = k()(e, N),
                        f = l ? parseInt(l.params.member, 10) : 0,
                        v = {
                            tags: x(t),
                            user: a,
                            sdk: {
                                source: "pbjs",
                                version: "2.33.0"
                            }
                        };
                    if (0 < f && (v.member_id = f), s && (v.device = i), d && (v.app = o), _.b.getConfig("adpod.brandCategoryExclusion") && (v.brand_category_uniqueness = !0), u.enabled && (v.debug = u, h.logInfo("AppNexus Debug Auction Settings:\n\n" + JSON.stringify(u, null, 4))), r && r.gdprConsent && (v.gdpr_consent = {
                            consent_string: r.gdprConsent.consentString,
                            consent_required: r.gdprConsent.gdprApplies
                        }), r && r.refererInfo) {
                        var g = {
                            rd_ref: encodeURIComponent(r.refererInfo.referer),
                            rd_top: r.refererInfo.reachedTop,
                            rd_ifs: r.refererInfo.numIframes,
                            rd_stk: r.refererInfo.stack.map(function(e) {
                                return encodeURIComponent(e)
                            }).join(",")
                        };
                        v.referrer_detection = g
                    }
                    k()(e, M) && e.filter(M).forEach(function(r) {
                        var e = function(e, r) {
                                var a = r.mediaTypes.video,
                                    t = a.durationRangeSec,
                                    n = a.requireExactDuration,
                                    i = function(e) {
                                        var r = e.adPodDurationSec,
                                            a = e.durationRangeSec,
                                            t = e.requireExactDuration,
                                            n = h.getMinValueFromArray(a),
                                            i = Math.floor(r / n);
                                        return t ? Math.max(i, a.length) : i
                                    }(r.mediaTypes.video),
                                    s = h.getMaxValueFromArray(t),
                                    o = e.filter(function(e) {
                                        return e.uuid === r.bidId
                                    }),
                                    d = h.fill.apply(h, x(o).concat([i]));
                                if (n) {
                                    var c = Math.ceil(i / t.length),
                                        u = h.chunk(d, c);
                                    t.forEach(function(r, e) {
                                        u[e].map(function(e) {
                                            B(e, "minduration", r), B(e, "maxduration", r)
                                        })
                                    })
                                } else d.map(function(e) {
                                    return B(e, "maxduration", s)
                                });
                                return d
                            }(t, r),
                            a = v.tags.filter(function(e) {
                                return e.uuid !== r.bidId
                            });
                        v.tags = [].concat(x(a), x(e))
                    });
                    var y = h.deepAccess(e[0], "userId.criteortus.".concat(A, ".userid"));
                    if (y) {
                        var b = [];
                        b.push({
                            provider: "criteo",
                            user_id: y
                        }), v.tpuids = b
                    }
                    return function(e, a) {
                        var t = [];
                        if (15 < e.tags.length) {
                            var n = h.deepClone(e);
                            h.chunk(e.tags, 15).forEach(function(e) {
                                n.tags = e;
                                var r = JSON.stringify(n);
                                t.push({
                                    method: "POST",
                                    url: w,
                                    data: r,
                                    bidderRequest: a
                                })
                            })
                        } else {
                            var r = JSON.stringify(e);
                            t = {
                                method: "POST",
                                url: w,
                                data: r,
                                bidderRequest: a
                            }
                        }
                        return t
                    }(v, r)
                },
                interpretResponse: function(e, r) {
                    var t = this,
                        n = r.bidderRequest;
                    e = e.body;
                    var i = [];
                    if (!e || e.error) {
                        var a = "in response for ".concat(n.bidderCode, " adapter");
                        return e && e.error && (a += ": ".concat(e.error)), h.logError(a), i
                    }
                    if (e.tags && e.tags.forEach(function(e) {
                            var r = function(e) {
                                return e && e.ads && e.ads.length && k()(e.ads, function(e) {
                                    return e.rtb
                                })
                            }(e);
                            if (r && 0 !== r.cpm && I()(t.supportedMediaTypes, r.ad_type)) {
                                var a = function(r, e, a) {
                                    var t = h.getBidRequest(r.uuid, [a]),
                                        n = {
                                            requestId: r.uuid,
                                            cpm: e.cpm,
                                            creativeId: e.creative_id,
                                            dealId: e.deal_id,
                                            currency: "USD",
                                            netRevenue: !0,
                                            ttl: 300,
                                            adUnitCode: t.adUnitCode,
                                            appnexus: {
                                                buyerMemberId: e.buyer_member_id,
                                                dealPriority: e.deal_priority,
                                                dealCode: e.deal_code
                                            }
                                        };
                                    e.advertiser_id && (n.meta = y({}, n.meta, {
                                        advertiserId: e.advertiser_id
                                    }));
                                    if (e.rtb.video) {
                                        switch (y(n, {
                                            width: e.rtb.video.player_width,
                                            height: e.rtb.video.player_height,
                                            vastImpUrl: e.notify_url,
                                            ttl: 3600
                                        }), h.deepAccess(t, "mediaTypes.video.context")) {
                                            case v.a:
                                                var i = Object(f.getIabSubCategory)(t.bidder, e.brand_category_id);
                                                n.meta = y({}, n.meta, {
                                                    iabSubCatId: i
                                                }), n.video = {
                                                    context: v.a,
                                                    durationSeconds: Math.floor(e.rtb.video.duration_ms / 1e3)
                                                }, n.vastUrl = e.rtb.video.asset_url;
                                                break;
                                            case g.b:
                                                if (n.adResponse = r, n.adResponse.ad = n.adResponse.ads[0], n.adResponse.ad.video = n.adResponse.ad.rtb.video, n.vastXml = e.rtb.video.content, e.renderer_url) {
                                                    var s = k()(a.bids, function(e) {
                                                            return e.bidId === r.uuid
                                                        }),
                                                        o = h.deepAccess(s, "renderer.options");
                                                    n.renderer = function(e, r) {
                                                        var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                                                            t = l.a.install({
                                                                id: r.renderer_id,
                                                                url: r.renderer_url,
                                                                config: a,
                                                                loaded: !1,
                                                                adUnitCode: e
                                                            });
                                                        try {
                                                            t.setRender(D)
                                                        } catch (e) {
                                                            h.logWarn("Prebid Error calling setRender on renderer", e)
                                                        }
                                                        return t.setEventHandlers({
                                                            impression: function() {
                                                                return h.logMessage("AppNexus outstream video impression event")
                                                            },
                                                            loaded: function() {
                                                                return h.logMessage("AppNexus outstream video loaded event")
                                                            },
                                                            ended: function() {
                                                                h.logMessage("AppNexus outstream renderer video event"), document.querySelector("#".concat(e)).style.display = "none"
                                                            }
                                                        }), t
                                                    }(n.adUnitCode, e, o)
                                                }
                                                break;
                                            case g.a:
                                                n.vastUrl = e.rtb.video.asset_url
                                        }
                                    } else if (e.rtb[v.c]) {
                                        var d = e.rtb[v.c],
                                            c = e.viewability.config.replace("src=", "data-src="),
                                            u = d.javascript_trackers;
                                        null == u ? u = c : h.isStr(u) ? u = [u, c] : u.push(c), n[v.c] = {
                                            title: d.title,
                                            body: d.desc,
                                            body2: d.desc2,
                                            cta: d.ctatext,
                                            rating: d.rating,
                                            sponsoredBy: d.sponsored,
                                            privacyLink: d.privacy_link,
                                            address: d.address,
                                            downloads: d.downloads,
                                            likes: d.likes,
                                            phone: d.phone,
                                            price: d.price,
                                            salePrice: d.saleprice,
                                            clickUrl: d.link.url,
                                            displayUrl: d.displayurl,
                                            clickTrackers: d.link.click_trackers,
                                            impressionTrackers: d.impression_trackers,
                                            javascriptTrackers: u
                                        }, d.main_img && (n.native.image = {
                                            url: d.main_img.url,
                                            height: d.main_img.height,
                                            width: d.main_img.width
                                        }), d.icon && (n.native.icon = {
                                            url: d.icon.url,
                                            height: d.icon.height,
                                            width: d.icon.width
                                        })
                                    } else {
                                        y(n, {
                                            width: e.rtb.banner.width,
                                            height: e.rtb.banner.height,
                                            ad: e.rtb.banner.content
                                        });
                                        try {
                                            var p = e.rtb.trackers[0].impression_urls[0],
                                                m = h.createTrackPixelHtml(p);
                                            n.ad += m
                                        } catch (e) {
                                            h.logError("Error appending tracking pixel", e)
                                        }
                                    }
                                    return n
                                }(e, r, n);
                                a.mediaType = function(e) {
                                    var r = e.ad_type;
                                    return r === v.d ? v.d : r === v.c ? v.c : v.b
                                }(r), i.push(a)
                            }
                        }), e.debug && e.debug.debug_info) {
                        var s = "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info;
                        s = s.replace(/(<td>|<th>)/gm, "\t").replace(/(<\/td>|<\/th>)/gm, "\n").replace(/^<br>/gm, "").replace(/(<br>\n|<br>)/gm, "\n").replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim, ""), h.logMessage("https://console.appnexus.com/docs/understanding-the-debug-auction"), h.logMessage(s)
                    }
                    return i
                },
                getMappingFileInfo: function() {
                    return {
                        url: "//acdn.adnxs.com/prebid/appnexus-mapping/mappings.json",
                        refreshInDays: 7
                    }
                },
                getUserSyncs: function(e) {
                    if (e.iframeEnabled) return [{
                        type: "iframe",
                        url: "//acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html"
                    }]
                },
                transformBidParams: function(a, e) {
                    return a = h.convertTypes({
                        member: "string",
                        invCode: "string",
                        placementId: "number",
                        keywords: h.transformBidderParamKeywords
                    }, a), e && (a.use_pmt_rule = "boolean" == typeof a.usePaymentRule && a.usePaymentRule, a.usePaymentRule && delete a.usePaymentRule, b(a.keywords) && a.keywords.forEach(E), Object.keys(a).forEach(function(e) {
                        var r = h.convertCamelToUnderscore(e);
                        r !== e && (a[r] = a[e], delete a[e])
                    })), a
                },
                onBidWon: function(e) {
                    e.native && function(e) {
                        var r = function(e) {
                            var r;
                            if (h.isStr(e) && R(e)) r = e;
                            else if (h.isArray(e))
                                for (var a = 0; a < e.length; a++) {
                                    var t = e[a];
                                    R(t) && (r = t)
                                }
                            return r
                        }(e.native.javascriptTrackers);
                        if (r)
                            for (var a = "pbjs_adid=" + e.adId + ";pbjs_auc=" + e.adUnitCode, t = function(e) {
                                    var r = e.indexOf('src="') + 5,
                                        a = e.indexOf('"', r);
                                    return e.substring(r, a)
                                }(r), n = t.replace("dom_id=%native_dom_id%", a), i = document.getElementsByTagName("iframe"), s = !1, o = 0; o < i.length && !s; o++) {
                                var d = i[o];
                                try {
                                    var c = d.contentDocument || d.contentWindow.document;
                                    if (c)
                                        for (var u = c.getElementsByTagName("script"), p = 0; p < u.length && !s; p++) {
                                            var m = u[p];
                                            m.getAttribute("data-src") == t && (m.setAttribute("src", n), m.setAttribute("data-src", ""), m.removeAttribute && m.removeAttribute("data-src"), s = !0)
                                        }
                                } catch (e) {
                                    if (!(e instanceof DOMException && "SecurityError" === e.name)) throw e
                                }
                            }
                    }(e)
                }
            };

        function b(e) {
            return !!(h.isArray(e) && 0 < e.length)
        }

        function E(e) {
            b(e.value) && "" === e.value[0] && delete e.value
        }

        function R(e) {
            var r = e.match(u),
                a = null != r && 1 <= r.length,
                t = e.match(p),
                n = null != t && 1 <= t.length;
            return e.startsWith(s) && n && a
        }

        function O(r) {
            var a = {};
            if (a.sizes = j(r.sizes), a.primary_size = a.sizes[0], a.ad_types = [], a.uuid = r.bidId, r.params.placementId ? a.id = parseInt(r.params.placementId, 10) : a.code = r.params.invCode, a.allow_smaller_sizes = r.params.allowSmallerSizes || !1, a.use_pmt_rule = r.params.usePaymentRule || !1, a.prebid = !0, a.disable_psa = !0, r.params.reserve && (a.reserve = r.params.reserve), r.params.position && (a.position = {
                    above: 1,
                    below: 2
                }[r.params.position] || 0), r.params.trafficSourceCode && (a.traffic_source_code = r.params.trafficSourceCode), r.params.privateSizes && (a.private_sizes = j(r.params.privateSizes)), r.params.supplyType && (a.supply_type = r.params.supplyType), r.params.pubClick && (a.pubclick = r.params.pubClick), r.params.extInvCode && (a.ext_inv_code = r.params.extInvCode), r.params.externalImpId && (a.external_imp_id = r.params.externalImpId), !h.isEmpty(r.params.keywords)) {
                var e = h.transformBidderParamKeywords(r.params.keywords);
                0 < e.length && e.forEach(E), a.keywords = e
            }
            if ((r.mediaType === v.c || h.deepAccess(r, "mediaTypes.".concat(v.c))) && (a.ad_types.push(v.c), 0 === a.sizes.length && (a.sizes = j([1, 1])), r.nativeParams)) {
                var t = function(n) {
                    var i = {};
                    return Object.keys(n).forEach(function(e) {
                        var r = c[e] && c[e].serverName || c[e] || e,
                            a = c[e] && c[e].requiredParams;
                        if (i[r] = y({}, a, n[e]), !(r !== c.image.serverName && r !== c.icon.serverName) && i[r].sizes) {
                            var t = i[r].sizes;
                            (h.isArrayOfNums(t) || h.isArray(t) && 0 < t.length && t.every(function(e) {
                                return h.isArrayOfNums(e)
                            })) && (i[r].sizes = j(i[r].sizes))
                        }
                        r === c.privacyLink && (i.privacy_supported = !0)
                    }), i
                }(r.nativeParams);
                a[v.c] = {
                    layouts: [t]
                }
            }
            var n = h.deepAccess(r, "mediaTypes.".concat(v.d)),
                i = h.deepAccess(r, "mediaTypes.video.context");
            r.mediaType !== v.d && !n || a.ad_types.push(v.d), (r.mediaType === v.d || n && "outstream" !== i) && (a.require_asset_url = !0), r.params.video && (a.video = {}, Object.keys(r.params.video).filter(function(e) {
                return I()(d, e)
            }).forEach(function(e) {
                return a.video[e] = r.params.video[e]
            })), r.renderer && (a.video = y({}, a.video, {
                custom_renderer_present: !0
            }));
            var s = k()(o.a.getAdUnits(), function(e) {
                return r.transactionId === e.transactionId
            });
            return s && s.mediaTypes && s.mediaTypes.banner && a.ad_types.push(v.b), 0 === a.ad_types.length && delete a.ad_types, a
        }

        function j(e) {
            var r = [],
                a = {};
            if (h.isArray(e) && 2 === e.length && !h.isArray(e[0])) a.width = parseInt(e[0], 10), a.height = parseInt(e[1], 10), r.push(a);
            else if ("object" === i(e))
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    (a = {}).width = parseInt(n[0], 10), a.height = parseInt(n[1], 10), r.push(a)
                }
            return r
        }

        function P(e) {
            return !!e.params.user
        }

        function N(e) {
            return !!parseInt(e.params.member, 10)
        }

        function U(e) {
            if (e.params) return !!e.params.app
        }

        function q(e) {
            return e.params && e.params.app ? !!e.params.app.id : !!e.params.app
        }

        function z(e) {
            return !!e.debug
        }

        function M(e) {
            return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === v.a
        }

        function B(e, r, a) {
            h.isEmpty(e.video) && (e.video = {}), e.video[r] = a
        }

        function D(e) {
            e.renderer.push(function() {
                window.ANOutstreamVideo.renderAd({
                    tagId: e.adResponse.tag_id,
                    sizes: [e.getSize().split("x")],
                    targetId: e.adUnitCode,
                    uuid: e.adResponse.uuid,
                    adResponse: e.adResponse,
                    rendererOptions: e.renderer.getConfig()
                }, function(e, r, a) {
                    e.renderer.handleVideoEvent({
                        id: r,
                        eventName: a
                    })
                }.bind(null, e))
            })
        }
        Object(f.registerBidder)(m)
    }
}, [198]);
pbjsChunk([202], {
    263: function(e, r, t) {
        e.exports = t(264)
    },
    264: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "spec", function() {
            return m
        });
        var u = t(0),
            a = t(1),
            l = t(2),
            m = {
                code: "cpmstar",
                supportedMediaTypes: [l.b, l.d],
                pageID: Math.floor(1e7 * Math.random()),
                getMediaType: function(e) {
                    return null == e ? l.b : u.deepAccess(e, "mediaTypes.video") ? l.d : l.b
                },
                getPlayerSize: function(e) {
                    var r = u.deepAccess(e, "mediaTypes.video.playerSize");
                    return null == r ? [640, 440] : (null != r[0] && (r = r[0]), null == r || null == r[0] || null == r[1] ? [640, 440] : r)
                },
                isBidRequestValid: function(e) {
                    return "string" == typeof e.params.placementId && !!e.params.placementId.length || "number" == typeof e.params.placementId
                },
                buildRequests: function(e, r) {
                    for (var t = [], a = 0; a < e.length; a++) {
                        var d = e[a],
                            n = encodeURIComponent(r.refererInfo.referer),
                            i = u.getBidIdParameter("endpoint", d.params),
                            s = "dev" == i ? "//dev.server.cpmstar.com/view.aspx" : "staging" == i ? "//staging.server.cpmstar.com/view.aspx" : "//server.cpmstar.com/view.aspx",
                            c = m.getMediaType(d),
                            o = m.getPlayerSize(d),
                            p = "&fv=0" + (o ? "&w=" + o[0] + "&h=" + o[1] : "");
                        t.push({
                            method: "GET",
                            url: s + "?media=" + c + (c == l.d ? p : "") + "&json=c_b&mv=1&poolid=" + u.getBidIdParameter("placementId", d.params) + "&reachedTop=" + encodeURIComponent(r.refererInfo.reachedTop) + "&requestid=" + d.bidId + "&referer=" + n,
                            bidRequest: d
                        })
                    }
                    return t
                },
                interpretResponse: function(e, r) {
                    var t = r.bidRequest,
                        a = m.getMediaType(t),
                        d = [];
                    Array.isArray(e.body) || (e.body = [e.body]);
                    for (var n = 0; n < e.body.length; n++) {
                        var i = e.body[n].creatives[0];
                        if (!i) return void u.logWarn("cpmstarBidAdapter: server response failed check");
                        var s = parseFloat(i.cpm) || 0;
                        if (!s) return void u.logWarn("cpmstarBidAdapter: server response failed check. Missing cpm");
                        var c = {
                            requestId: i.requestid,
                            cpm: s,
                            width: i.width || 0,
                            height: i.height || 0,
                            currency: i.currency ? i.currency : "USD",
                            netRevenue: !i.netRevenue || i.netRevenue,
                            ttl: i.ttl ? i.ttl : 300,
                            creativeId: i.creativeid || 0
                        };
                        if (i.hasOwnProperty("dealId") && (c.dealId = i.dealId), a == l.b && i.code) c.ad = i.code + (i.px_cr ? "\n<img width=0 height=0 src='" + i.px_cr + "' />" : "");
                        else {
                            if (a != l.d || !i.creativemacros || !i.creativemacros.HTML5VID_VASTSTRING) return u.logError("bad response", i);
                            var o = m.getPlayerSize(t);
                            null != o && (c.width = o[0], c.height = o[1]), c.mediaType = l.d, c.vastXml = i.creativemacros.HTML5VID_VASTSTRING
                        }
                        d.push(c)
                    }
                    return d
                }
            };
        Object(a.registerBidder)(m)
    }
}, [263]);
pbjsChunk([200], {
    272: function(e, r, n) {
        e.exports = n(273)
    },
    273: function(e, r, n) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), n.d(r, "currencySupportEnabled", function() {
            return C
        }), n.d(r, "currencyRates", function() {
            return S
        }), r.setConfig = c, r.addBidResponseHook = D;
        var i = n(23),
            s = n(4),
            a = (n.n(s), n(5)),
            u = n(0),
            o = n(3),
            f = n(13);

        function d(e) {
            return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var l, y = "https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json?date=$$TODAY$$",
            g = 4,
            t = [],
            v = {},
            p = !1,
            b = !0,
            h = "USD",
            C = !1,
            S = {},
            m = {};

        function c(e) {
            var r = y;
            if ("object" === d(e.rates) && (S.conversions = e.rates, b = !(p = !0)), "object" === d(e.defaultRates) && (l = e.defaultRates, S.conversions = l, p = !0), "string" == typeof e.adServerCurrency) {
                u.logInfo("enabling currency support", arguments), h = e.adServerCurrency, e.conversionRateFile && (u.logInfo("currency using override conversionRateFile:", e.conversionRateFile), r = e.conversionRateFile);
                var n = r.indexOf("$$TODAY$$");
                if (-1 !== n) {
                    var o = new Date,
                        c = "".concat(o.getMonth() + 1),
                        t = "".concat(o.getDate());
                    c.length < 2 && (c = "0".concat(c)), t.length < 2 && (t = "0".concat(t));
                    var i = "".concat(o.getFullYear()).concat(c).concat(t);
                    r = "".concat(r.substring(0, n)).concat(i).concat(r.substring(n + 9, r.length))
                }! function(e) {
                    v = {}, C = !0, u.logInfo("Installing addBidResponse decorator for currency module", arguments), Object(f.a)("addBidResponse").before(D, 100), b && (b = !1, Object(a.a)(e, {
                        success: function(r) {
                            try {
                                S = JSON.parse(r), u.logInfo("currencyRates set to " + JSON.stringify(S)), p = !0, I()
                            } catch (e) {
                                R("Failed to parse currencyRates response: " + r)
                            }
                        },
                        error: R
                    }))
                }(r)
            } else u.logInfo("disabling currency support"),
                function() {
                    u.logInfo("Uninstalling addBidResponse decorator for currency module", arguments), Object(f.a)("addBidResponse").getHooks({
                        hook: D
                    }).remove(), h = "USD", v = {}, p = C = !1, b = !0, S = {}, m = {}
                }();
            "object" === d(e.bidderCurrencyDefault) && (m = e.bidderCurrencyDefault)
        }

        function R(e) {
            l ? (u.logWarn(e), u.logWarn("Currency failed loading rates, falling back to currency.defaultRates")) : u.logError(e)
        }

        function D(e, r, n) {
            if (!n) return e.call(this, r);
            var o = n.bidderCode || n.bidder;
            if (m[o]) {
                var c = m[o];
                n.currency && c !== n.currency ? u.logWarn("Currency default '".concat(o, ": ").concat(c, "' ignored. adapter specified '").concat(n.currency, "'")) : n.currency = c
            }
            if (n.currency || (u.logWarn('Currency not specified on bid.  Defaulted to "USD"'), n.currency = "USD"), n.getCpmInNewCurrency = function(e) {
                    return (parseFloat(this.cpm) * w(this.currency, e)).toFixed(3)
                }, n.originalCpm = n.cpm, n.originalCurrency = n.currency, n.currency === h) return e.call(this, r, n);
            t.push(function(o, c, t) {
                return function() {
                    var r = t[1];
                    if (void 0 !== r && "currency" in r && "cpm" in r) {
                        var e = r.currency;
                        try {
                            var n = w(e);
                            1 !== n && (r.cpm = (parseFloat(r.cpm) * n).toFixed(4), r.currency = h)
                        } catch (e) {
                            u.logWarn("Returning NO_BID, getCurrencyConversion threw error: ", e), t[1] = Object(i.a)(s.STATUS.NO_BID, {
                                bidder: r.bidderCode || r.bidder,
                                bidId: r.requestId
                            })
                        }
                    }
                    return o.apply(c, t)
                }
            }(e, this, [r, n])), C && !p || I()
        }

        function I() {
            for (; 0 < t.length;) t.shift()()
        }

        function w(e, r) {
            var n, o = 1 < arguments.length && void 0 !== r ? r : h,
                c = null,
                t = "".concat(e, "->").concat(o);
            if (t in v) c = v[t], u.logMessage("Using conversionCache value " + c + " for " + t);
            else if (!1 === C) {
                if ("USD" !== e) throw new Error("Prebid currency support has not been enabled and fromCurrency is not USD");
                c = 1
            } else if (e === o) c = 1;
            else if (e in S.conversions) {
                if (!(o in (n = S.conversions[e]))) throw new Error("Specified adServerCurrency in config '" + o + "' not found in the currency rates file");
                c = n[o], u.logInfo("getCurrencyConversion using direct " + e + " to " + o + " conversionRate " + c)
            } else if (o in S.conversions) {
                if (!(e in (n = S.conversions[o]))) throw new Error("Specified fromCurrency '" + e + "' not found in the currency rates file");
                c = O(1 / n[e], g), u.logInfo("getCurrencyConversion using reciprocal " + e + " to " + o + " conversionRate " + c)
            } else {
                var i = Object.keys(S.conversions)[0];
                if (!(e in S.conversions[i])) throw new Error("Specified fromCurrency '" + e + "' not found in the currency rates file");
                var s = 1 / S.conversions[i][e];
                if (!(o in S.conversions[i])) throw new Error("Specified adServerCurrency in config '" + o + "' not found in the currency rates file");
                c = O(s * S.conversions[i][o], g), u.logInfo("getCurrencyConversion using intermediate " + e + " thru " + i + " to " + o + " conversionRate " + c)
            }
            return t in v || (u.logMessage("Adding conversionCache value " + c + " for " + t), v[t] = c), c
        }

        function O(e, r) {
            for (var n = 1, o = 0; o < r; o++) n += "0";
            return Math.round(e * n) / n
        }
        o.b.getConfig("currency", function(e) {
            return c(e.currency)
        })
    }
}, [272]);
pbjsChunk([196], {
    282: function(e, r, t) {
        e.exports = t(283)
    },
    283: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "adpodUtils", function() {
            return T
        }), r.buildDfpVideoUrl = i, r.notifyTranslationModule = d, r.buildAdpodVideoUrl = u;
        var a = t(77),
            s = t(64),
            p = t(10),
            _ = t(0),
            o = t(3),
            n = t(13),
            c = t(28);

        function b(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t, e
        }

        function f() {
            return (f = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            }).apply(this, arguments)
        }
        var v = {
                env: "vp",
                gdfp_req: 1,
                output: "xml_vast3",
                unviewed_position_start: 1
            },
            T = {};

        function i(e) {
            if (e.params || e.url) {
                var r = e.adUnit,
                    t = e.bid || s.b.getWinningBids(r.code)[0],
                    a = {};
                if (e.url && (a = Object(p.c)(e.url, {
                        noDecodeWholeURL: !0
                    }), Object(_.isEmpty)(e.params))) return function(e, r, t) {
                    var a = l(r, e, "search");
                    a && (e.search.description_url = a);
                    var o = A(r, t);
                    return e.search.cust_params = e.search.cust_params ? e.search.cust_params + "%26" + o : o, Object(p.a)(e)
                }(a, t, e);
                var o = {
                        correlator: Date.now(),
                        sz: Object(_.parseSizesInput)(r.sizes).join("|"),
                        url: encodeURIComponent(location.href)
                    },
                    n = A(t, e),
                    c = f({}, v, a.search, o, e.params, {
                        cust_params: n
                    }),
                    i = l(t, e, "params");
                return i && (c.description_url = i), Object(p.a)({
                    protocol: "https",
                    host: "pubads.g.doubleclick.net",
                    pathname: "/gampad/ads",
                    search: c
                })
            }
            Object(_.logError)("A params object or a url is required to use pbjs.adServers.dfp.buildVideoUrl")
        }

        function d(e) {
            e.call(this, "dfp")
        }

        function u() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                s = e.code,
                d = e.params,
                u = e.callback;
            if (d && u) {
                var r, t, a, l = {
                    correlator: Date.now(),
                    sz: (r = s, t = c.a.getAdUnits().filter(function(e) {
                        return e.code === r
                    }), a = Object(_.deepAccess)(t[0], "mediaTypes.video.playerSize"), Object(_.parseSizesInput)(a).join("|")),
                    url: encodeURIComponent(location.href)
                };
                T.getTargeting({
                    codes: [s],
                    callback: function(e, r) {
                        var t;
                        if (e) return void u(e, null);
                        var a = (b(t = {}, T.TARGETING_KEY_PB_CAT_DUR, void 0), b(t, T.TARGETING_KEY_CACHE_ID, void 0), t),
                            o = {};
                        r[s] && (o = r[s].reduce(function(e, r) {
                            return Object.keys(r)[0] === T.TARGETING_KEY_PB_CAT_DUR ? e[T.TARGETING_KEY_PB_CAT_DUR] = void 0 !== e[T.TARGETING_KEY_PB_CAT_DUR] ? e[T.TARGETING_KEY_PB_CAT_DUR] + "," + r[T.TARGETING_KEY_PB_CAT_DUR] : r[T.TARGETING_KEY_PB_CAT_DUR] : Object.keys(r)[0] === T.TARGETING_KEY_CACHE_ID && (e[T.TARGETING_KEY_CACHE_ID] = r[T.TARGETING_KEY_CACHE_ID]), e
                        }, a));
                        var n = encodeURIComponent(Object(p.b)(o)),
                            c = f({}, v, l, d, {
                                cust_params: n
                            }),
                            i = Object(p.a)({
                                protocol: "https",
                                host: "pubads.g.doubleclick.net",
                                pathname: "/gampad/ads",
                                search: c
                            });
                        u(null, i)
                    }
                })
            } else Object(_.logError)("A params object and a callback is required to use pbjs.adServers.dfp.buildAdpodVideoUrl")
        }

        function l(e, r, t) {
            if (!o.b.getConfig("cache.url"))
                if (Object(_.deepAccess)(r, "".concat(t, ".description_url"))) Object(_.logError)("input cannnot contain description_url");
                else {
                    var a = e && e.vastUrl;
                    if (a) return encodeURIComponent(a)
                }
        }

        function A(e, r) {
            var t = e && e.adserverTargeting || {},
                a = {},
                o = r && r.adUnit;
            if (o) {
                var n = s.b.getAllTargeting(o.code);
                a = n ? n[o.code] : {}
            }
            var c = Object(_.deepAccess)(r, "params.cust_params"),
                i = f({}, {
                    hb_uuid: e && e.videoCacheKey
                }, {
                    hb_cache_id: e && e.videoCacheKey
                }, a, t, c);
            return encodeURIComponent(Object(p.b)(i))
        }
        Object(n.a)("registerAdserver").before(d), Object(a.a)("dfp", {
            buildVideoUrl: i,
            buildAdpodVideoUrl: u,
            getAdpodTargeting: function(e) {
                return T.getTargeting(e)
            }
        }), Object(n.e)("adpod", T)
    }
}, [282]);
pbjsChunk([27], {
    17: function(a, b) {
        var c;
        c = function() {
            return this
        }();
        try {
            c = c || Function("return this")() || eval("this")
        } catch (t) {
            "object" == typeof window && (c = window)
        }
        a.exports = c
    },
    336: function(t, e, r) {
        t.exports = r(337)
    },
    337: function(t, n, i) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            function(f) {
                i.d(n, "spec", function() {
                    return r
                });
                var h = i(0),
                    g = i(3),
                    t = i(9),
                    y = i.n(t),
                    e = i(1);

                function w(t, e) {
                    return function(t) {
                        if (Array.isArray(t)) return t
                    }(t) || function(t, e) {
                        if (!(Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))) return;
                        var r = [],
                            n = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var a, u = t[Symbol.iterator](); !(n = (a = u.next()).done) && (r.push(a.value), !e || r.length !== e); n = !0);
                        } catch (t) {
                            i = !0, o = t
                        } finally {
                            try {
                                n || null == u.return || u.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return r
                    }(t, e) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }()
                }

                function S() {
                    return (S = Object.assign || function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var r = arguments[e];
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                        }
                        return t
                    }).apply(this, arguments)
                }
                var m = {
                        member: "YcXr87z2lpbB"
                    },
                    b = {},
                    I = null;
                var r = {
                    code: "gumgum",
                    aliases: ["gg"],
                    isBidRequestValid: function(t) {
                        var e = t.params,
                            r = t.adUnitCode;
                        switch (!0) {
                            case !!e.inScreen:
                            case !!e.inSlot:
                            case !!e.ICV:
                                break;
                            default:
                                return h.logWarn("[GumGum] No product selected for the placement ".concat(r, ", please check your implementation.")), !1
                        }
                        return !(e.bidfloor && ("number" != typeof e.bidfloor || !isFinite(e.bidfloor))) || (h.logWarn("[GumGum] bidfloor must be a Number"), !1)
                    },
                    buildRequests: function(t, s) {
                        var p = [],
                            l = S({
                                consentString: null,
                                gdprApplies: !0
                            }, s && s.gdprConsent);
                        return h._each(t, function(t) {
                            var e = g.b.getConfig("bidderTimeout"),
                                r = t.bidId,
                                n = t.params,
                                i = void 0 === n ? {} : n,
                                o = t.transactionId,
                                a = t.userId,
                                u = void 0 === a ? {} : a,
                                c = {},
                                d = s && s.refererInfo && s.refererInfo.referer;
                            I && (c.pv = I), i.bidfloor && (c.fp = i.bidfloor), i.inScreen && (c.t = i.inScreen, c.pi = 2), i.inSlot && (c.si = parseInt(i.inSlot, 10), c.pi = 3), i.ICV && (c.ni = parseInt(i.ICV, 10), c.pi = 5), c.gdprApplies = l.gdprApplies ? 1 : 0, l.gdprApplies && (c.gdprConsent = l.consentString), p.push({
                                id: r,
                                tmax: e,
                                tId: o,
                                pi: c.pi,
                                selector: i.selector,
                                sizes: t.sizes || t.mediatype[banner].sizes,
                                url: "https://g2.gumgum.com/hbid/imp",
                                method: "GET",
                                data: S(c, function(t) {
                                    var e, r, n, i, o, a, u, c;
                                    if (b.vw) return b;
                                    try {
                                        r = (e = f.top).screen, n = t || h.getTopWindowUrl()
                                    } catch (t) {
                                        return h.logError(t), b
                                    }
                                    return b = {
                                        vw: e.innerWidth,
                                        vh: e.innerHeight,
                                        sw: r.width,
                                        sh: r.height,
                                        pu: n,
                                        ce: h.cookiesAreEnabled(),
                                        dpr: e.devicePixelRatio || 1,
                                        jcsi: JSON.stringify({
                                            t: 0,
                                            rq: 8
                                        }),
                                        ogu: (a = (document && document.getElementsByTagName("head")[0]).querySelector("meta[property='og:url']"), a ? a.content : null)
                                    }, u = window.navigator && (window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection), (o = (c = u && (u.downlink || u.bandwidth)) ? Math.round(1024 * c) : null) && (b.ns = o), (i = (n.match(/#ggad=(\w+)$/) || [0, 0])[1]) && (b[isNaN(i) ? "eAdBuyId" : "adBuyId"] = i), b
                                }(d), function(t) {
                                    var e = t.digitrustid && t.digitrustid.data;
                                    if (!e) {
                                        var r = window.DigiTrust && window.DigiTrust.getUser ? window.DigiTrust.getUser(m) : {};
                                        e = r && r.success && r.identity || ""
                                    }
                                    return !e || e.privacy && e.privacy.optout ? {} : {
                                        dt: e.id
                                    }
                                }(u), function(t) {
                                    var e = {};
                                    return t.tdid && (e.tdid = t.tdid), e
                                }(u))
                            })
                        }), p
                    },
                    interpretResponse: function(t, e) {
                        var r = [],
                            n = t.body,
                            i = S({
                                ad: {
                                    price: 0,
                                    id: 0,
                                    markup: ""
                                },
                                pag: {
                                    pvid: 0
                                }
                            }, n),
                            o = i.ad,
                            a = o.price,
                            u = o.id,
                            c = o.markup,
                            d = i.cw,
                            s = i.pag.pvid,
                            p = e.data || {},
                            l = p.pi,
                            f = 3 === l && 9 === p.si,
                            g = h.parseSizesInput(e.sizes),
                            m = w(g[0].split("x"), 2),
                            b = m[0],
                            v = m[1];
                        return 5 === l && y()(g, "1x1") && (v = b = "1"), I = s, u && r.push({
                            ad: d ? function(t, e) {
                                return t.replace("AD_JSON", window.btoa(JSON.stringify(e)))
                            }(d, S({}, n, {
                                bidRequest: e
                            })) : c,
                            cpm: f ? .1 : a,
                            creativeId: u,
                            currency: "USD",
                            height: v,
                            netRevenue: !0,
                            requestId: e.id,
                            ttl: 60,
                            width: b
                        }), r
                    },
                    getUserSyncs: function(t, e) {
                        return e.map(function(t) {
                            return t.body && t.body.pxs && t.body.pxs.scr || []
                        }).reduce(function(t, e) {
                            return t.concat(e)
                        }, []).map(function(t) {
                            return {
                                type: "f" === t.t ? "iframe" : "image",
                                url: t.u
                            }
                        })
                    }
                };
                Object(e.registerBidder)(r)
            }.call(n, i(17))
    }
}, [336]);
pbjsChunk([159], {
    364: function(e, r, t) {
        e.exports = t(365)
    },
    365: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "spec", function() {
            return p
        });
        var w = t(0),
            n = t(2),
            I = t(3),
            a = t(366),
            i = t.n(a),
            o = t(1);

        function P(e) {
            return (P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var s = [n.b],
            u = 100,
            c = 35,
            m = !0,
            y = {
                JPY: 1
            };

        function d(e) {
            return Array.isArray(e) && 2 === e.length && i()(e[0]) && i()(e[1])
        }
        var p = {
            code: "ix",
            supportedMediaTypes: s,
            isBidRequestValid: function(e) {
                if (!d(e.params.size)) return !1;
                if (! function(e, r) {
                        if (d(e)) return e[0] === r[0] && e[1] === r[1];
                        for (var t = 0; t < e.length; t++)
                            if (e[t][0] === r[0] && e[t][1] === r[1]) return !0;
                        return !1
                    }(e.sizes, e.params.size)) return !1;
                if (e.hasOwnProperty("mediaType") && "banner" !== e.mediaType) return !1;
                if (e.hasOwnProperty("mediaTypes") && !w.deepAccess(e, "mediaTypes.banner.sizes")) return !1;
                if ("string" != typeof e.params.siteId && "number" != typeof e.params.siteId) return !1;
                var r = e.params.hasOwnProperty("bidFloor"),
                    t = e.params.hasOwnProperty("bidFloorCur");
                return !r && !t || r && t && function(e, r) {
                    return Boolean("number" == typeof e && "string" == typeof r && r.match(/^[A-Z]{3}$/))
                }(e.params.bidFloor, e.params.bidFloorCur)
            },
            buildRequests: function(e, r) {
                for (var t, n, a = [], i = [], o = null, s = null, d = "https://as-sec.casalemedia.com/cygnus", p = 0; p < e.length; p++) o = e[p], n = void 0, (n = {}).id = (t = o).bidId, n.banner = {}, n.banner.w = t.params.size[0], n.banner.h = t.params.size[1], n.banner.topframe = w.inIframe() ? 0 : 1, n.ext = {}, n.ext.siteID = t.params.siteId, !t.params.hasOwnProperty("id") || "string" != typeof t.params.id && "number" != typeof t.params.id ? n.ext.sid = "".concat(t.params.size[0], "x").concat(t.params.size[1]) : n.ext.sid = String(t.params.id), t.params.hasOwnProperty("bidFloor") && t.params.hasOwnProperty("bidFloorCur") && (n.bidfloor = t.params.bidFloor, n.bidfloorcur = t.params.bidFloorCur), s = n, a.push(s);
                if (window.headertag && "function" == typeof window.headertag.getIdentityInfo) {
                    var f = window.headertag.getIdentityInfo();
                    if (f && "object" === P(f))
                        for (var u in f)
                            if (f.hasOwnProperty(u)) {
                                var c = f[u];
                                !c.responsePending && c.data && "object" === P(c.data) && Object.keys(c.data).length && i.push(c.data)
                            }
                }
                var m = {};
                if (m.id = e[0].bidderRequestId, m.imp = a, m.site = {}, m.ext = {}, m.ext.source = "prebid", 0 < i.length && (m.user = {}, m.user.eids = i), document.referrer && "" !== document.referrer && (m.site.ref = document.referrer), r) {
                    if (r.gdprConsent) {
                        var y = r.gdprConsent;
                        y.hasOwnProperty("gdprApplies") && (m.regs = {
                            ext: {
                                gdpr: y.gdprApplies ? 1 : 0
                            }
                        }), y.hasOwnProperty("consentString") && (m.user = m.user || {}, m.user.ext = {
                            consent: y.consentString || ""
                        })
                    }
                    r.refererInfo && (m.site.page = r.refererInfo.referer, r.refererInfo.referer && 0 !== r.refererInfo.referer.indexOf("https") && (d = "http://as.casalemedia.com/cygnus"))
                }
                var b = {},
                    l = I.b.getConfig("ix");
                if (l) {
                    if ("object" === P(l.firstPartyData)) {
                        var h = l.firstPartyData,
                            g = "?";
                        for (var v in h) h.hasOwnProperty(v) && (g += "".concat(encodeURIComponent(v), "=").concat(encodeURIComponent(h[v]), "&"));
                        g = g.slice(0, -1), m.site.page += g
                    }
                    "number" == typeof l.timeout && (b.t = l.timeout)
                }
                return b.s = e[0].params.siteId, b.v = 7.2, b.r = JSON.stringify(m), b.ac = "j", b.sd = 1, {
                    method: "GET",
                    url: d,
                    data: b
                }
            },
            interpretResponse: function(e) {
                var r = [],
                    t = null;
                if (!e.hasOwnProperty("body") || !e.body.hasOwnProperty("seatbid")) return r;
                for (var n, a, i, o = e.body, s = o.seatbid, d = 0; d < s.length; d++)
                    if (s[d].hasOwnProperty("bid"))
                        for (var p = s[d].bid, f = 0; f < p.length; f++) n = p[f], a = o.cur, i = void 0, i = {}, y.hasOwnProperty(a) ? i.cpm = n.price / y[a] : i.cpm = n.price / u, i.requestId = n.impid, i.width = n.w, i.height = n.h, i.ad = n.adm, i.dealId = w.deepAccess(n, "ext.dealid"), i.ttl = c, i.netRevenue = m, i.currency = a, i.creativeId = n.hasOwnProperty("crid") ? n.crid : "-", i.meta = {}, i.meta.networkId = w.deepAccess(n, "ext.dspid"), i.meta.brandId = w.deepAccess(n, "ext.advbrandid"), i.meta.brandName = w.deepAccess(n, "ext.advbrand"), t = i, r.push(t);
                return r
            },
            transformBidParams: function(e, r) {
                return w.convertTypes({
                    siteID: "number"
                }, e)
            }
        };
        Object(o.registerBidder)(p)
    }
}, [364]);
pbjsChunk([150], {
    391: function(e, t, r) {
        e.exports = r(392)
    },
    392: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r.d(t, "spec", function() {
            return s
        });
        var d = r(0),
            n = r(2),
            i = r(1),
            s = {
                code: "lockerdome",
                supportedMediaTypes: [n.b],
                isBidRequestValid: function(e) {
                    return !!e.params.adUnitId
                },
                buildRequests: function(e, t) {
                    var r = {
                        bidRequests: e.map(function(e) {
                            return {
                                requestId: e.bidId,
                                adUnitCode: e.adUnitCode,
                                adUnitId: d.getBidIdParameter("adUnitId", e.params),
                                sizes: e.sizes
                            }
                        }),
                        url: d.getTopWindowLocation().href,
                        referrer: d.getTopWindowReferrer()
                    };
                    return t && t.gdprConsent && (r.gdpr = {
                        applies: t.gdprConsent.gdprApplies,
                        consent: t.gdprConsent.consentString
                    }), {
                        method: "POST",
                        url: "https://lockerdome.com/ladbid/prebid",
                        data: JSON.stringify(r)
                    }
                },
                interpretResponse: function(e, t) {
                    return e && e.body && e.body.bids ? e.body.bids.map(function(e) {
                        return {
                            requestId: e.requestId,
                            cpm: e.cpm,
                            width: e.width,
                            height: e.height,
                            creativeId: e.creativeId,
                            currency: e.currency,
                            netRevenue: e.netRevenue,
                            ad: e.ad,
                            ttl: e.ttl
                        }
                    }) : []
                }
            };
        Object(i.registerBidder)(s)
    }
}, [391]);
pbjsChunk([128], {
    439: function(e, t, n) {
        e.exports = n(440)
    },
    440: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.resetBoPixel = function() {
            f = !0
        }, n.d(t, "spec", function() {
            return h
        });
        var c = n(3),
            r = n(1),
            d = n(0),
            u = n(26),
            p = n(2),
            m = n(10);

        function o(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                var n = [],
                    r = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, a = e
                } finally {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (i) throw a
                    }
                }
                return n
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        var i = [p.b, p.d],
            l = "openx",
            a = "hb_pb",
            s = "2.1.9",
            f = !0;
        var h = {
            code: l,
            supportedMediaTypes: i,
            isBidRequestValid: function(e) {
                var t = e.params.delDomain || e.params.platform;
                return d.deepAccess(e, "mediaTypes.banner") && t ? !!e.params.unit || 0 < d.deepAccess(e, "mediaTypes.banner.sizes.length") : !(!e.params.unit || !t)
            },
            buildRequests: function(e, t) {
                if (0 === e.length) return [];
                var n = [],
                    r = o(function(e) {
                        return e.reduce(function(e, t) {
                            return ! function(e) {
                                return d.deepAccess(e, "mediaTypes.video") && !d.deepAccess(e, "mediaTypes.banner") || e.mediaType === p.d
                            }(t) ? e[1].push(t) : e[0].push(t), e
                        }, [
                            [],
                            []
                        ])
                    }(e), 2),
                    i = r[0],
                    a = r[1];
                return 0 < a.length && n.push(function(e, t) {
                    var r = [],
                        i = !1,
                        n = v(e, t),
                        a = d._map(e, function(e) {
                            return e.params.unit
                        });
                    n.aus = d._map(e, function(e) {
                        return d.parseSizesInput(e.sizes).join(",")
                    }).join("|"), n.divIds = d._map(e, function(e) {
                        return encodeURIComponent(e.adUnitCode)
                    }).join(","), a.some(function(e) {
                        return e
                    }) && (n.auid = a.join(","));
                    e.some(function(e) {
                        return e.params.doNotTrack
                    }) && (n.ns = 1);
                    !0 !== c.b.getConfig("coppa") && !e.some(function(e) {
                        return e.params.coppa
                    }) || (n.tfcd = 1);
                    e.forEach(function(t) {
                        if (t.params.customParams) {
                            var e = d._map(Object.keys(t.params.customParams), function(e) {
                                    return function(e, t) {
                                        var n = t[e];
                                        d.isArray(n) && (n = n.join(","));
                                        return (e.toLowerCase() + "=" + n.toLowerCase()).replace("+", ".").replace("/", "_")
                                    }(e, t.params.customParams)
                                }),
                                n = window.btoa(e.join("&"));
                            i = !0, r.push(n)
                        } else r.push("")
                    }), i && (n.tps = r.join(","));
                    var o = [],
                        s = !1;
                    e.forEach(function(e) {
                        e.params.customFloor ? (o.push(Math.round(100 * e.params.customFloor) / 100 * 1e3), s = !0) : o.push(0)
                    }), s && (n.aumfs = o.join(","));
                    return {
                        method: "GET",
                        url: n.ph ? "//u.openx.net/w/1.0/arj" : "//".concat(e[0].params.delDomain, "/w/1.0/arj"),
                        data: n,
                        payload: {
                            bids: e,
                            startTime: new Date
                        }
                    }
                }(a, t)), 0 < i.length && i.forEach(function(e) {
                    n.push(function(e, t) {
                        var n = function(e, t) {
                            var n, r, i = v([e], t),
                                a = d.deepAccess(e, "params.video") || {},
                                o = d.deepAccess(e, "mediaTypes.video.context"),
                                s = d.deepAccess(e, "mediaTypes.video.playerSize");
                            d.isArray(e.sizes) && 2 === e.sizes.length && !d.isArray(e.sizes[0]) ? (n = parseInt(e.sizes[0], 10), r = parseInt(e.sizes[1], 10)) : d.isArray(e.sizes) && d.isArray(e.sizes[0]) && 2 === e.sizes[0].length ? (n = parseInt(e.sizes[0][0], 10), r = parseInt(e.sizes[0][1], 10)) : d.isArray(s) && 2 === s.length && (n = parseInt(s[0], 10), r = parseInt(s[1], 10));
                            Object.keys(a).forEach(function(e) {
                                "openrtb" === e ? (a[e].w = n || a[e].w, a[e].v = r || a[e].v, i[e] = JSON.stringify(a[e])) : e in i || "url" === e || (i[e] = a[e])
                            }), i.auid = e.params.unit, i.vwd = n || a.vwd, i.vht = r || a.vht, "outstream" === o && (i.vos = "101");
                            a.mimes && (i.vmimes = a.mimes);
                            return i
                        }(e, t);
                        return {
                            method: "GET",
                            url: n.ph ? "//u.openx.net/v/1.0/avjp" : "//".concat(e.params.delDomain, "/v/1.0/avjp"),
                            data: n,
                            payload: {
                                bid: e,
                                startTime: new Date
                            }
                        }
                    }(e, t))
                }), n
            },
            interpretResponse: function(e, t) {
                var n = e.body;
                return function(e) {
                    return /avjp$/.test(e.url) ? p.d : p.b
                }(t) === p.d ? function(e, t) {
                    var n = t.bid,
                        r = t.startTime,
                        i = [];
                    if (void 0 !== e && "" !== e.vastUrl && "" !== e.pub_rev) {
                        var a = Object(m.c)(e.vastUrl).search || {},
                            o = {};
                        o.requestId = n.bidId, o.ttl = 300, o.netRevenue = !0, o.currency = e.currency, o.cpm = Number(e.pub_rev) / 1e3, o.width = e.width, o.height = e.height, o.creativeId = e.adid, o.vastUrl = e.vastUrl, o.mediaType = p.d, e.ph = a.ph, e.colo = a.colo, e.ts = a.ts, i.push(o), g(p.d, e, r)
                    }
                    return i
                }(n, t.payload) : function(e, t) {
                    for (var n = t.bids, r = t.startTime, i = e.ads.ad, a = [], o = 0; o < i.length; o++) {
                        var s = i[o],
                            c = parseInt(s.idx, 10),
                            d = {};
                        if (d.requestId = n[c].bidId, s.pub_rev) {
                            d.cpm = Number(s.pub_rev) / 1e3;
                            var u = s.creative[0];
                            u && (d.width = u.width, d.height = u.height), d.creativeId = u.id, d.ad = s.html, s.deal_id && (d.dealId = s.deal_id), d.ttl = 300, d.netRevenue = !0, d.currency = s.currency, s.tbd && (d.tbd = s.tbd), d.ts = s.ts, d.meta = {}, s.brand_id && (d.meta.brandId = s.brand_id), s.adv_id && (d.meta.dspid = s.adv_id), a.push(d), g(p.b, s, r)
                        }
                    }
                    return a
                }(n, t.payload)
            },
            getUserSyncs: function(e, t) {
                if (e.iframeEnabled || e.pixelEnabled) return [{
                    type: e.iframeEnabled ? "iframe" : "image",
                    url: d.deepAccess(t, "0.body.ads.pixels") || d.deepAccess(t, "0.body.pixels") || "//u.openx.net/w/1.0/pd"
                }]
            },
            transformBidParams: function(e, t) {
                return d.convertTypes({
                    unit: "string",
                    customFloor: "number"
                }, e)
            }
        };

        function b(t) {
            for (var e in t) t.hasOwnProperty(e) && (t[e] || delete t[e]);
            return d._map(Object.keys(t), function(e) {
                return "".concat(e, "=").concat(t[e])
            }).join("&")
        }

        function v(e, t) {
            var n, r = d.inIframe();
            if (n = {
                    ju: c.b.getConfig("pageUrl") || d.getTopWindowUrl(),
                    jr: d.getTopWindowReferrer(),
                    ch: document.charSet || document.characterSet,
                    res: "".concat(screen.width, "x").concat(screen.height, "x").concat(screen.colorDepth),
                    ifr: r,
                    tz: (new Date).getTimezoneOffset(),
                    tws: function(e) {
                        var t, n, r, i = window,
                            a = document,
                            o = a.documentElement;
                        if (e) {
                            try {
                                i = window.top, a = window.top.document
                            } catch (e) {
                                return
                            }
                            o = a.documentElement, r = a.body, t = i.innerWidth || o.clientWidth || r.clientWidth, n = i.innerHeight || o.clientHeight || r.clientHeight
                        } else o = a.documentElement, t = i.innerWidth || o.clientWidth, n = i.innerHeight || o.clientHeight;
                        return "".concat(t, "x").concat(n)
                    }(r),
                    be: 1,
                    bc: e[0].params.bc || "".concat(a, "_").concat(s),
                    dddid: d._map(e, function(e) {
                        return e.transactionId
                    }).join(","),
                    nocache: (new Date).getTime()
                }, e[0].params.platform && (n.ph = e[0].params.platform), d.deepAccess(t, "gdprConsent")) {
                var i = t.gdprConsent;
                void 0 !== i.consentString && (n.gdpr_consent = i.consentString), void 0 !== i.gdprApplies && (n.gdpr = i.gdprApplies ? 1 : 0), "iab" === c.b.getConfig("consentManagement.cmpApi") && (n.x_gdpr_f = 1)
            }
            return e[0].userId && e[0].userId.pubcid ? n.pubcid = e[0].userId.pubcid : e[0].crumbs && e[0].crumbs.pubcid && (n.pubcid = e[0].crumbs.pubcid), e[0].schain && (n.schain = function(e) {
                return "".concat(e.ver, ",").concat(e.complete, "!").concat(function(e) {
                    var n = ["asi", "sid", "hp", "rid", "name", "domain"];
                    return e.map(function(t) {
                        return n.map(function(e) {
                            return t[e] || ""
                        }).join(",")
                    }).join("!")
                }(e.nodes))
            }(e[0].schain)), n
        }

        function g(e, t, n) {
            if (f) {
                f = !1;
                var r, i = c.b.getConfig("bidderTimeout");
                window.PREBID_TIMEOUT && (i = Math.min(window.PREBID_TIMEOUT, i));
                var a = {
                    bd: +new Date - n,
                    bp: t.pub_rev,
                    br: "0",
                    bs: d.getTopWindowLocation().hostname,
                    bt: i,
                    ts: t.ts
                };
                if (a.br = a.bt < a.bd ? "t" : "p", e === p.d) {
                    var o = Object(m.c)(t.colo);
                    a.ph = t.ph, r = "//".concat(o.hostname, "/w/1.0/bo?").concat(b(a))
                } else {
                    var s = d.deepAccess(t, "creative.0.tracking.impression").match(/([^?]+\/)ri\?/);
                    s && 1 < s.length && (r = "".concat(s[1], "bo?").concat(b(a)))
                }
                r && u.a.registerSync("image", l, r)
            }
        }
        Object(r.registerBidder)(h)
    }
}, [439]);
pbjsChunk([111], {
    480: function(e, r, a) {
        e.exports = a(481)
    },
    481: function(e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), a.d(r, "spec", function() {
            return k
        });
        var p = a(0),
            i = a(1),
            c = a(2),
            t = a(3);

        function l(e) {
            return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var u = "PubMatic: ",
            m = "USD",
            s = "nFIn8aLzbd",
            g = void 0,
            h = {
                kadpageurl: "",
                gender: "",
                yob: "",
                lat: "",
                lon: "",
                wiid: "",
                profId: "",
                verId: ""
            },
            n = {
                NUMBER: "number",
                STRING: "string",
                BOOLEAN: "boolean",
                ARRAY: "array",
                OBJECT: "object"
            },
            o = {
                mimes: n.ARRAY,
                minduration: n.NUMBER,
                maxduration: n.NUMBER,
                startdelay: n.NUMBER,
                playbackmethod: n.ARRAY,
                api: n.ARRAY,
                protocols: n.ARRAY,
                w: n.NUMBER,
                h: n.NUMBER,
                battr: n.ARRAY,
                linearity: n.NUMBER,
                placement: n.NUMBER,
                minbitrate: n.NUMBER,
                maxbitrate: n.NUMBER
            },
            f = {
                TITLE: {
                    ID: 1,
                    KEY: "title",
                    TYPE: 0
                },
                IMAGE: {
                    ID: 2,
                    KEY: "image",
                    TYPE: 0
                },
                ICON: {
                    ID: 3,
                    KEY: "icon",
                    TYPE: 0
                },
                SPONSOREDBY: {
                    ID: 4,
                    KEY: "sponsoredBy",
                    TYPE: 1
                },
                BODY: {
                    ID: 5,
                    KEY: "body",
                    TYPE: 2
                },
                CLICKURL: {
                    ID: 6,
                    KEY: "clickUrl",
                    TYPE: 0
                },
                VIDEO: {
                    ID: 7,
                    KEY: "video",
                    TYPE: 0
                },
                EXT: {
                    ID: 8,
                    KEY: "ext",
                    TYPE: 0
                },
                DATA: {
                    ID: 9,
                    KEY: "data",
                    TYPE: 0
                },
                LOGO: {
                    ID: 10,
                    KEY: "logo",
                    TYPE: 0
                },
                SPONSORED: {
                    ID: 11,
                    KEY: "sponsored",
                    TYPE: 1
                },
                DESC: {
                    ID: 12,
                    KEY: "data",
                    TYPE: 2
                },
                RATING: {
                    ID: 13,
                    KEY: "rating",
                    TYPE: 3
                },
                LIKES: {
                    ID: 14,
                    KEY: "likes",
                    TYPE: 4
                },
                DOWNLOADS: {
                    ID: 15,
                    KEY: "downloads",
                    TYPE: 5
                },
                PRICE: {
                    ID: 16,
                    KEY: "price",
                    TYPE: 6
                },
                SALEPRICE: {
                    ID: 17,
                    KEY: "saleprice",
                    TYPE: 7
                },
                PHONE: {
                    ID: 18,
                    KEY: "phone",
                    TYPE: 8
                },
                ADDRESS: {
                    ID: 19,
                    KEY: "address",
                    TYPE: 9
                },
                DESC2: {
                    ID: 20,
                    KEY: "desc2",
                    TYPE: 10
                },
                DISPLAYURL: {
                    ID: 21,
                    KEY: "displayurl",
                    TYPE: 11
                },
                CTA: {
                    ID: 22,
                    KEY: "cta",
                    TYPE: 12
                }
            },
            y = {
                ICON: 1,
                LOGO: 2,
                IMAGE: 3
            },
            E = [{
                id: f.SPONSOREDBY.ID,
                required: !0,
                data: {
                    type: 1
                }
            }, {
                id: f.TITLE.ID,
                required: !0
            }, {
                id: f.IMAGE.ID,
                required: !0
            }],
            d = {
                1: "PMP",
                5: "PREF",
                6: "PMPG"
            },
            v = 0,
            I = !1,
            b = {},
            w = {};

        function T(e, r) {
            if (!p.isStr(r)) return r && p.logWarn(u + "Ignoring param key: " + e + ", expects string-value, found " + l(r)), g;
            switch (e) {
                case "pmzoneid":
                    return r.split(",").slice(0, 50).map(function(e) {
                        return e.trim()
                    }).join();
                case "kadfloor":
                case "lat":
                case "lon":
                    return parseFloat(r) || g;
                case "yob":
                    return parseInt(r) || g;
                default:
                    return r
            }
        }

        function O(e) {
            e.params.adUnit = "", e.params.adUnitIndex = "0", e.params.width = 0, e.params.height = 0, e.params.adSlot = function(e) {
                return p.isStr(e) ? e.replace(/^\s+/g, "").replace(/\s+$/g, "") : ""
            }(e.params.adSlot);
            var r = e.params.adSlot,
                a = r.split(":");
            if (r = a[0], 2 == a.length && (e.params.adUnitIndex = a[1]), a = r.split("@"), e.params.adUnit = a[0], 1 < a.length) {
                if (2 != (a = a[1].split("x")).length) return void p.logWarn(u + "AdSlot Error: adSlot not in required format");
                e.params.width = parseInt(a[0]), e.params.height = parseInt(a[1])
            } else if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(c.b) && e.mediaTypes.banner.hasOwnProperty("sizes")) {
                for (var i = 0, t = []; i < e.mediaTypes.banner.sizes.length; i++) 2 === e.mediaTypes.banner.sizes[i].length && t.push(e.mediaTypes.banner.sizes[i]);
                e.mediaTypes.banner.sizes = t, 1 <= e.mediaTypes.banner.sizes.length && (e.params.width = e.mediaTypes.banner.sizes[0][0], e.params.height = e.mediaTypes.banner.sizes[0][1], e.mediaTypes.banner.sizes = e.mediaTypes.banner.sizes.splice(1, e.mediaTypes.banner.sizes.length - 1))
            }
        }

        function D(e, r, a) {
            var i, t = "Ignoring param key: " + e + ", expects " + a + ", found " + l(r);
            switch (a) {
                case n.BOOLEAN:
                    i = p.isBoolean;
                    break;
                case n.NUMBER:
                    i = p.isNumber;
                    break;
                case n.STRING:
                    i = p.isStr;
                    break;
                case n.ARRAY:
                    i = p.isArray
            }
            return i(r) ? r : (p.logWarn(u + t), g)
        }

        function S(e) {
            var r, a, i, t = {
                assets: []
            };
            for (var s in e) {
                if (e.hasOwnProperty(s)) {
                    var n = {};
                    if (!(t.assets && 0 < t.assets.length && t.assets.hasOwnProperty(s))) switch (s) {
                        case f.TITLE.KEY:
                            e[s].len || e[s].length ? n = {
                                id: f.TITLE.ID,
                                required: e[s].required ? 1 : 0,
                                title: {
                                    len: e[s].len || e[s].length,
                                    ext: e[s].ext
                                }
                            } : p.logWarn(u + "Error: Title Length is required for native ad: " + JSON.stringify(e));
                            break;
                        case f.IMAGE.KEY:
                            e[s].sizes && 0 < e[s].sizes.length ? n = {
                                id: f.IMAGE.ID,
                                required: e[s].required ? 1 : 0,
                                img: {
                                    type: y.IMAGE,
                                    w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : g),
                                    h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : g),
                                    wmin: e[s].wmin || e[s].minimumWidth || (e[s].minsizes ? e[s].minsizes[0] : g),
                                    hmin: e[s].hmin || e[s].minimumHeight || (e[s].minsizes ? e[s].minsizes[1] : g),
                                    mimes: e[s].mimes,
                                    ext: e[s].ext
                                }
                            } : p.logWarn(u + "Error: Image sizes is required for native ad: " + JSON.stringify(e));
                            break;
                        case f.ICON.KEY:
                            e[s].sizes && 0 < e[s].sizes.length ? n = {
                                id: f.ICON.ID,
                                required: e[s].required ? 1 : 0,
                                img: {
                                    type: y.ICON,
                                    w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : g),
                                    h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : g)
                                }
                            } : p.logWarn(u + "Error: Icon sizes is required for native ad: " + JSON.stringify(e));
                            break;
                        case f.VIDEO.KEY:
                            n = {
                                id: f.VIDEO.ID,
                                required: e[s].required ? 1 : 0,
                                video: {
                                    minduration: e[s].minduration,
                                    maxduration: e[s].maxduration,
                                    protocols: e[s].protocols,
                                    mimes: e[s].mimes,
                                    ext: e[s].ext
                                }
                            };
                            break;
                        case f.EXT.KEY:
                            n = {
                                id: f.EXT.ID,
                                required: e[s].required ? 1 : 0
                            };
                            break;
                        case f.LOGO.KEY:
                            n = {
                                id: f.LOGO.ID,
                                required: e[s].required ? 1 : 0,
                                img: {
                                    type: y.LOGO,
                                    w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : g),
                                    h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : g)
                                }
                            };
                            break;
                        case f.SPONSOREDBY.KEY:
                        case f.BODY.KEY:
                        case f.RATING.KEY:
                        case f.LIKES.KEY:
                        case f.DOWNLOADS.KEY:
                        case f.PRICE.KEY:
                        case f.SALEPRICE.KEY:
                        case f.PHONE.KEY:
                        case f.ADDRESS.KEY:
                        case f.DESC2.KEY:
                        case f.DISPLAYURL.KEY:
                        case f.CTA.KEY:
                            r = w[s], a = e, void 0, i = r.KEY, n = {
                                id: r.ID,
                                required: a[i].required ? 1 : 0,
                                data: {
                                    type: r.TYPE,
                                    len: a[i].len,
                                    ext: a[i].ext
                                }
                            }
                    }
                }
                n && n.id && (t.assets[t.assets.length] = n)
            }
            var o = E.length,
                d = 0;
            return E.forEach(function(e) {
                for (var r = t.assets.length, a = 0; a < r; a++)
                    if (e.id == t.assets[a].id) {
                        d++;
                        break
                    }
            }), I = o != d, t
        }

        function Y(e) {
            var r, a = e.mediaTypes.banner.sizes,
                i = [];
            if (a !== g && p.isArray(a)) {
                if (r = {}, e.params.width || e.params.height) r.w = e.params.width, r.h = e.params.height;
                else {
                    if (0 === a.length) return r = g, p.logWarn(u + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), r;
                    r.w = parseInt(a[0][0]), r.h = parseInt(a[0][1]), a = a.splice(1, a.length - 1)
                }
                0 < a.length && (i = [], a.forEach(function(e) {
                    1 < e.length && i.push({
                        w: e[0],
                        h: e[1]
                    })
                }), 0 < i.length && (r.format = i)), r.pos = 0, r.topframe = p.inIframe() ? 0 : 1
            } else p.logWarn(u + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), r = g;
            return r
        }

        function P(e) {
            var r, a = e.params.video;
            if (a !== g) {
                for (var i in r = {}, o) a.hasOwnProperty(i) && (r[i] = D(i, a[i], o[i]));
                p.isArray(e.mediaTypes.video.playerSize[0]) ? (r.w = parseInt(e.mediaTypes.video.playerSize[0][0]), r.h = parseInt(e.mediaTypes.video.playerSize[0][1])) : p.isNumber(e.mediaTypes.video.playerSize[0]) && (r.w = parseInt(e.mediaTypes.video.playerSize[0]), r.h = parseInt(e.mediaTypes.video.playerSize[1])), e.params.video.hasOwnProperty("skippable") && (r.ext = {
                    video_skippable: e.params.video.skippable ? 1 : 0
                })
            } else r = g, p.logWarn(u + "Error: Video config params missing for adunit: " + e.params.adUnit + " with mediaType set as video. Ignoring video impression in the adunit.");
            return r
        }

        function R(e) {
            var r = function(e) {
                var r, a = (r = window.DigiTrust && (t.b.getConfig("digiTrustId") || window.DigiTrust.getUser({
                    member: e
                }))) && r.success && r.identity || null;
                return !a || a.privacy && a.privacy.optout ? null : a
            }(s);
            null !== r && e.push({
                source: "digitru.st",
                uids: [{
                    id: r.id || "",
                    atype: 1,
                    ext: {
                        keyv: parseInt(r.keyv) || 0
                    }
                }]
            })
        }

        function A(e, r) {
            var a = [];
            R(a),
                function(e, r) {
                    var a = null,
                        i = t.b.getConfig("adsrvrOrgId");
                    p.isStr(p.deepAccess(r, "0.userId.tdid")) ? a = r[0].userId.tdid : i && p.isStr(i.TDID) && (a = i.TDID), null !== a && e.push({
                        source: "adserver.org",
                        uids: [{
                            id: a,
                            atype: 1,
                            ext: {
                                rtiPartner: "TDID"
                            }
                        }]
                    })
                }(a, r), 0 < a.length && (e.user.eids = a)
        }
        p._each(f, function(e) {
            b[e.ID] = e.KEY
        }), p._each(f, function(e) {
            w[e.KEY] = e
        });
        var k = {
            code: "pubmatic",
            supportedMediaTypes: [c.b, c.d, c.c],
            isBidRequestValid: function(e) {
                return !(!e || !e.params) && (p.isStr(e.params.publisherId) ? !!(!e.params.hasOwnProperty("video") || e.params.video.hasOwnProperty("mimes") && p.isArray(e.params.video.mimes) && 0 !== e.params.video.mimes.length) || (p.logWarn(u + "Error: For video ads, mimes is mandatory and must specify atlease 1 mime value. Call to OpenBid will not be sent for ad unit:" + JSON.stringify(e)), !1) : (p.logWarn(u + "Error: publisherId is mandatory and cannot be numeric. Call to OpenBid will not be sent for ad unit: " + JSON.stringify(e)), !1))
            },
            buildRequests: function(e, r) {
                var a;
                r && r.refererInfo && (a = r.refererInfo);
                var i, t = function(e) {
                        var r = {};
                        return r.pageURL = p.getTopWindowUrl(), e && e.referer ? r.refURL = e.referer : r.refURL = "", r
                    }(a),
                    s = function(e) {
                        return {
                            id: "" + (new Date).getTime(),
                            at: 1,
                            cur: [m],
                            imp: [],
                            site: {
                                page: e.pageURL,
                                ref: e.refURL,
                                publisher: {}
                            },
                            device: {
                                ua: navigator.userAgent,
                                js: 1,
                                dnt: "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack ? 1 : 0,
                                h: screen.height,
                                w: screen.width,
                                language: navigator.language
                            },
                            user: {},
                            ext: {}
                        }
                    }(t),
                    n = "",
                    o = [],
                    d = [];
                if (e.forEach(function(e) {
                        if ((i = p.deepClone(e)).params.adSlot = i.params.adSlot || "", O(i), i.params.hasOwnProperty("video"));
                        else if (!(i.hasOwnProperty("mediaTypes") && i.mediaTypes.hasOwnProperty(c.c) || 0 !== i.params.width || 0 !== i.params.height)) return void p.logWarn(u + "Skipping the non-standard adslot: ", i.params.adSlot, JSON.stringify(i));
                        t.pubId = t.pubId || i.params.publisherId, (t = function(e, r) {
                            var a, i, t;
                            for (a in r.kadpageurl || (r.kadpageurl = r.pageURL), h) h.hasOwnProperty(a) && (i = e[a]) && ("object" === l(t = h[a]) && (i = t.f(i, r)), p.isStr(i) ? r[a] = i : p.logWarn(u + "Ignoring param : " + a + " with value : " + h[a] + ", expects string-value, found " + l(i)));
                            return r
                        }(i.params, t)).transactionId = i.transactionId, "" === n ? n = i.params.currency || g : i.params.hasOwnProperty("currency") && n !== i.params.currency && p.logWarn(u + "Currency specifier ignored. Only one currency permitted."), i.params.currency = n, i.params.hasOwnProperty("dctr") && p.isStr(i.params.dctr) && o.push(i.params.dctr), i.params.hasOwnProperty("bcat") && p.isArray(i.params.bcat) && (d = d.concat(i.params.bcat));
                        var r = function(e) {
                            var r, a, i = {},
                                t = {},
                                s = e.hasOwnProperty("sizes") ? e.sizes : [],
                                n = "",
                                o = [];
                            if (i = {
                                    id: e.bidId,
                                    tagid: e.params.adUnit || void 0,
                                    bidfloor: T("kadfloor", e.params.kadfloor),
                                    secure: 1,
                                    ext: {
                                        pmZoneId: T("pmzoneid", e.params.pmzoneid)
                                    },
                                    bidfloorcur: e.params.currency ? T("currency", e.params.currency) : m
                                }, e.hasOwnProperty("mediaTypes"))
                                for (n in e.mediaTypes) switch (n) {
                                    case c.b:
                                        (r = Y(e)) !== g && (i.banner = r);
                                        break;
                                    case c.c:
                                        t.request = JSON.stringify(S(e.nativeParams)), I ? p.logWarn(u + "Error: Error in Native adunit " + e.params.adUnit + ". Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details.") : i.native = t;
                                        break;
                                    case c.d:
                                        (a = P(e)) !== g && (i.video = a)
                                } else r = {
                                    pos: 0,
                                    w: e.params.width,
                                    h: e.params.height,
                                    topframe: p.inIframe() ? 0 : 1
                                }, p.isArray(s) && 1 < s.length && ((s = s.splice(1, s.length - 1)).forEach(function(e) {
                                    o.push({
                                        w: e[0],
                                        h: e[1]
                                    })
                                }), r.format = o), i.banner = r;
                            return i.hasOwnProperty(c.b) || i.hasOwnProperty(c.c) || i.hasOwnProperty(c.d) ? i : g
                        }(i);
                        r && s.imp.push(r)
                    }), 0 != s.imp.length) return s.site.publisher.id = t.pubId.trim(), v = t.pubId.trim(), s.ext.wrapper = {}, s.ext.wrapper.profile = parseInt(t.profId) || g, s.ext.wrapper.version = parseInt(t.verId) || g, s.ext.wrapper.wiid = t.wiid || g, s.ext.wrapper.wv = "prebid_prebid_2.33.0", s.ext.wrapper.transactionId = t.transactionId, s.ext.wrapper.wp = "pbjs", s.user.gender = t.gender ? t.gender.trim() : g, s.user.geo = {}, s.user.geo.lat = T("lat", t.lat), s.user.geo.lon = T("lon", t.lon), s.user.yob = T("yob", t.yob), s.device.geo = s.user.geo, s.site.page = t.kadpageurl.trim() || s.site.page.trim(), s.site.domain = function(e) {
                        var r = document.createElement("a");
                        return r.href = e, r.hostname
                    }(s.site.page), e[0].schain && (s.source = {
                        ext: {
                            schain: e[0].schain
                        }
                    }), r && r.gdprConsent && (s.user.ext = {
                        consent: r.gdprConsent.consentString
                    }, s.regs = {
                        ext: {
                            gdpr: r.gdprConsent.gdprApplies ? 1 : 0
                        }
                    }),
                    function(e, r, a) {
                        var i, t = "";
                        if (0 < r.length)
                            if (a[0].params.hasOwnProperty("dctr")) {
                                if (t = a[0].params.dctr, p.isStr(t) && 0 < t.length) {
                                    var s = t.split("|");
                                    t = "", s.forEach(function(e) {
                                        t += 0 < e.length ? e.trim() + "|" : ""
                                    }), i = t.length, "|" === t.substring(i, i - 1) && (t = t.substring(0, i - 1)), e.site.ext = {
                                        key_val: t.trim()
                                    }
                                } else p.logWarn(u + "Ignoring param : dctr with value : " + t + ", expects string-value, found empty or non-string value");
                                1 < r.length && p.logWarn(u + "dctr value found in more than 1 adunits. Value from 1st adunit will be picked. Ignoring values from subsequent adunits")
                            } else p.logWarn(u + "dctr value not found in 1st adunit, ignoring values from subsequent adunits")
                    }(s, o, e), A(s, e),
                    function(e, r) {
                        0 < (r = r.filter(function(e) {
                            return "string" == typeof e || (p.logWarn(u + "bcat: Each category should be a string, ignoring category: " + e), !1)
                        }).map(function(e) {
                            return e.trim()
                        }).filter(function(e, r, a) {
                            if (3 < e.length) return a.indexOf(e) === r;
                            p.logWarn(u + "bcat: Each category should have a value of a length of more than 3 characters, ignoring category: " + e)
                        })).length && (p.logWarn(u + "bcat: Selected: ", r), e.bcat = r)
                    }(s, d), {
                        method: "POST",
                        url: "https://hbopenbid.pubmatic.com/translator?source=prebid-client",
                        data: JSON.stringify(s)
                    }
            },
            interpretResponse: function(e, r) {
                var i = [],
                    t = m,
                    s = JSON.parse(r.data),
                    n = s.site && s.site.ref ? s.site.ref : "";
                try {
                    e.body && e.body.seatbid && p.isArray(e.body.seatbid) && (t = e.body.cur || t, e.body.seatbid.forEach(function(e) {
                        e.bid && p.isArray(e.bid) && e.bid.forEach(function(r) {
                            var a = {
                                requestId: r.impid,
                                cpm: (parseFloat(r.price) || 0).toFixed(2),
                                width: r.w,
                                height: r.h,
                                creativeId: r.crid || r.id,
                                dealId: r.dealid,
                                currency: t,
                                netRevenue: !1,
                                ttl: 300,
                                referrer: n,
                                ad: r.adm
                            };
                            s.imp && 0 < s.imp.length && s.imp.forEach(function(e) {
                                if (r.impid === e.id) switch (function(r, e) {
                                    var a = "",
                                        i = new RegExp(/VAST\s+version/);
                                    if (0 <= r.indexOf('span class="PubAPIAd"')) e.mediaType = c.b;
                                    else if (i.test(r)) e.mediaType = c.d;
                                    else try {
                                        (a = JSON.parse(r.replace(/\\/g, ""))) && a.native && (e.mediaType = c.c)
                                    } catch (e) {
                                        p.logWarn(u + "Error: Cannot parse native reponse for ad response: " + r)
                                    }
                                }(r.adm, a), a.mediaType) {
                                    case c.b:
                                        break;
                                    case c.d:
                                        a.width = r.hasOwnProperty("w") ? r.w : e.video.w, a.height = r.hasOwnProperty("h") ? r.h : e.video.h, a.vastXml = r.adm;
                                        break;
                                    case c.c:
                                        ! function(e, r) {
                                            if (r.native = {}, e.hasOwnProperty("adm")) {
                                                var a = "";
                                                try {
                                                    a = JSON.parse(e.adm.replace(/\\/g, ""))
                                                } catch (e) {
                                                    return p.logWarn(u + "Error: Cannot parse native reponse for ad response: " + r.adm)
                                                }
                                                if (a && a.native && a.native.assets && 0 < a.native.assets.length) {
                                                    r.mediaType = c.c;
                                                    for (var i = 0, t = a.native.assets.length; i < t; i++) switch (a.native.assets[i].id) {
                                                        case f.TITLE.ID:
                                                            r.native.title = a.native.assets[i].title && a.native.assets[i].title.text;
                                                            break;
                                                        case f.IMAGE.ID:
                                                            r.native.image = {
                                                                url: a.native.assets[i].img && a.native.assets[i].img.url,
                                                                height: a.native.assets[i].img && a.native.assets[i].img.h,
                                                                width: a.native.assets[i].img && a.native.assets[i].img.w
                                                            };
                                                            break;
                                                        case f.ICON.ID:
                                                            r.native.icon = {
                                                                url: a.native.assets[i].img && a.native.assets[i].img.url,
                                                                height: a.native.assets[i].img && a.native.assets[i].img.h,
                                                                width: a.native.assets[i].img && a.native.assets[i].img.w
                                                            };
                                                            break;
                                                        case f.SPONSOREDBY.ID:
                                                        case f.BODY.ID:
                                                        case f.LIKES.ID:
                                                        case f.DOWNLOADS.ID:
                                                        case f.PRICE:
                                                        case f.SALEPRICE.ID:
                                                        case f.PHONE.ID:
                                                        case f.ADDRESS.ID:
                                                        case f.DESC2.ID:
                                                        case f.CTA.ID:
                                                        case f.RATING.ID:
                                                        case f.DISPLAYURL.ID:
                                                            r.native[b[a.native.assets[i].id]] = a.native.assets[i].data && a.native.assets[i].data.value
                                                    }
                                                    r.native.clickUrl = a.native.link && a.native.link.url, r.native.clickTrackers = a.native.link && a.native.link.clicktrackers || [], r.native.impressionTrackers = a.native.imptrackers || [], r.native.jstracker = a.native.jstracker || [], r.width || (r.width = 0), r.height || (r.height = 0)
                                                }
                                            }
                                        }(r, a)
                                }
                            }), r.ext && r.ext.deal_channel && (a.dealChannel = d[r.ext.deal_channel] || null), a.meta = {}, r.ext && r.ext.dspid && (a.meta.networkId = r.ext.dspid), r.ext && r.ext.advid && (a.meta.buyerId = r.ext.advid), r.adomain && 0 < r.adomain.length && (a.meta.clickUrl = r.adomain[0]), i.push(a)
                        })
                    }))
                } catch (e) {
                    p.logError(e)
                }
                return i
            },
            getUserSyncs: function(e, r, a) {
                var i = "https://ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p=" + v;
                if (a && (i += "&gdpr=" + (a.gdprApplies ? 1 : 0), i += "&gdpr_consent=" + encodeURIComponent(a.consentString || "")), e.iframeEnabled) return [{
                    type: "iframe",
                    url: i
                }];
                p.logWarn(u + "Please enable iframe based user sync.")
            },
            transformBidParams: function(e, r) {
                return p.convertTypes({
                    publisherId: "string",
                    adSlot: "string"
                }, e)
            }
        };
        Object(i.registerBidder)(k)
    }
}, [480]);
pbjsChunk([109], {
    488: function(e, t, r) {
        e.exports = r(489)
    },
    489: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r.d(t, "spec", function() {
            return o
        });
        var d = r(0),
            n = r(1),
            s = r(11);

        function i() {
            return (i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }).apply(this, arguments)
        }
        var a = {
                TITLE_LEN: 100,
                DESCR_LEN: 200,
                SPONSORED_BY_LEN: 50,
                IMG_MIN: 150,
                ICON_MIN: 50
            },
            u = ["cp", "ct", "cf", "video", "battr", "bcat", "badv", "bidfloor"],
            o = {
                code: "pulsepoint",
                aliases: ["pulseLite", "pulsepointLite"],
                supportedMediaTypes: ["banner", "native", "video"],
                isBidRequestValid: function(e) {
                    return !!(e && e.params && e.params.cp && e.params.ct)
                },
                buildRequests: function(e, t) {
                    return {
                        method: "POST",
                        url: "https://bid.contextweb.com/header/ortb?src=prebid",
                        data: {
                            id: e[0].bidderRequestId,
                            imp: e.map(function(e) {
                                return function(e) {
                                    return {
                                        id: e.bidId,
                                        banner: function(e) {
                                            var t = function(e) {
                                                if (e.params.cf) {
                                                    var t = e.params.cf.toUpperCase().split("X"),
                                                        r = parseInt(e.params.cw || t[0], 10),
                                                        n = parseInt(e.params.ch || t[1], 10);
                                                    return [r, n]
                                                }
                                                return [1, 1]
                                            }(e);
                                            return e.nativeParams || e.params.video ? null : {
                                                w: t[0],
                                                h: t[1],
                                                battr: e.params.battr
                                            }
                                        }(e),
                                        native: function(e) {
                                            if (e.nativeParams) {
                                                var t = [];
                                                return c(t, function(e, t, r) {
                                                    if (t) return {
                                                        id: e,
                                                        required: t.required ? 1 : 0,
                                                        title: {
                                                            len: t.len || r
                                                        }
                                                    };
                                                    return null
                                                }(t.length + 1, e.nativeParams.title, a.TITLE_LEN)), c(t, l(t.length + 1, e.nativeParams.body, 2, a.DESCR_LEN)), c(t, l(t.length + 1, e.nativeParams.sponsoredBy, 1, a.SPONSORED_BY_LEN)), c(t, p(t.length + 1, e.nativeParams.icon, 1, a.ICON_MIN, a.ICON_MIN)), c(t, p(t.length + 1, e.nativeParams.image, 3, a.IMG_MIN, a.IMG_MIN)), {
                                                    request: JSON.stringify({
                                                        assets: t
                                                    }),
                                                    ver: "1.1",
                                                    battr: e.params.battr
                                                }
                                            }
                                            return null
                                        }(e),
                                        tagid: e.params.ct.toString(),
                                        video: function(e) {
                                            if (e.params.video) return i({}, e.params.video, {
                                                battr: e.params.battr
                                            });
                                            return null
                                        }(e),
                                        bidfloor: e.params.bidfloor,
                                        ext: function(t) {
                                            var r = {},
                                                n = {};
                                            return u.forEach(function(e) {
                                                return n[e] = 1
                                            }), Object.keys(t.params).forEach(function(e) {
                                                n[e] || (r[e] = t.params[e])
                                            }), 0 < Object.keys(r).length ? {
                                                prebid: r
                                            } : null
                                        }(e)
                                    }
                                }(e)
                            }),
                            site: function(e) {
                                var t = e && 0 < e.length ? e[0].params.cp : "0";
                                return e[0].params.app ? null : {
                                    publisher: {
                                        id: t.toString()
                                    },
                                    ref: function() {
                                        try {
                                            return window.top.document.referrer
                                        } catch (e) {
                                            return document.referrer
                                        }
                                    }(),
                                    page: d.getTopWindowLocation().href
                                }
                            }(e),
                            app: function(e) {
                                var t = e && 0 < e.length ? e[0].params.cp : "0",
                                    r = e[0].params.app;
                                if (r) return {
                                    publisher: {
                                        id: t.toString()
                                    },
                                    bundle: r.bundle,
                                    storeurl: r.storeUrl,
                                    domain: r.domain
                                };
                                return null
                            }(e),
                            device: {
                                ua: navigator.userAgent,
                                language: navigator.language || navigator.browserLanguage || navigator.userLanguage || navigator.systemLanguage
                            },
                            bcat: e[0].params.bcat,
                            badv: e[0].params.badv,
                            user: function(e, t) {
                                var r = {};
                                t && t.gdprConsent && (r.consent = t.gdprConsent.consentString);
                                e && e.userId && (r.eids = [], f(r.eids, e.userId.pubcid, "pubcommon"), f(r.eids, e.userId.tdid, "ttdid"), f(r.eids, d.deepAccess(e.userId.digitrustid, "data.id"), "digitrust"), f(r.eids, e.userId.id5id, "id5id"));
                                return {
                                    ext: r
                                }
                            }(e[0], t),
                            regs: function(e) {
                                if (e && e.gdprConsent) return {
                                    ext: {
                                        gdpr: e.gdprConsent.gdprApplies ? 1 : 0
                                    }
                                };
                                return null
                            }(t)
                        },
                        bidderRequest: t
                    }
                },
                interpretResponse: function(e, t) {
                    return function(e, t) {
                        var r = {},
                            n = {},
                            i = {},
                            a = t.body;
                        e.data.imp.forEach(function(e) {
                            r[e.id] = e
                        }), a && a.seatbid.forEach(function(e) {
                            return e.bid.forEach(function(e) {
                                n[e.impid] = e
                            })
                        });
                        e.bidderRequest && e.bidderRequest.bids.forEach(function(e) {
                            i[e.bidId] = e
                        });
                        var u = [];
                        return Object.keys(r).forEach(function(e) {
                            if (n[e]) {
                                var t = {
                                    requestId: e,
                                    cpm: n[e].price,
                                    creative_id: n[e].crid,
                                    creativeId: n[e].crid,
                                    adId: e,
                                    ttl: 20,
                                    netRevenue: !0,
                                    currency: "USD"
                                };
                                r[e].native ? (t.native = function(e, t) {
                                        if (e.native) {
                                            var r = function(e) {
                                                    try {
                                                        if (e) return JSON.parse(e)
                                                    } catch (e) {
                                                        d.logError("pulsepointLite.safeParse", "ERROR", e)
                                                    }
                                                    return null
                                                }(t.adm),
                                                n = {};
                                            if (r && r.native && r.native.assets) return r.native.assets.forEach(function(e) {
                                                n.title = e.title ? e.title.text : n.title, n.body = e.data && 2 === e.data.type ? e.data.value : n.body, n.sponsoredBy = e.data && 1 === e.data.type ? e.data.value : n.sponsoredBy, n.image = e.img && 3 === e.img.type ? e.img.url : n.image, n.icon = e.img && 1 === e.img.type ? e.img.url : n.icon
                                            }), r.native.link && (n.clickUrl = encodeURIComponent(r.native.link.url)), n.impressionTrackers = r.native.imptrackers, n
                                        }
                                        return null
                                    }(r[e], n[e]), t.mediaType = "native") : r[e].video ? (i[e] && "outstream" === d.deepAccess(i[e], "mediaTypes.video.context") && (t.renderer = function(r, e) {
                                        var t = s.a.install({
                                            url: e.rendererUrl,
                                            config: {
                                                defaultOptions: e.config,
                                                rendererOptions: r,
                                                type: e.type
                                            },
                                            loaded: !1
                                        });
                                        return t.setRender(function(t) {
                                            t.renderer.push(function() {
                                                var e = t.renderer.getConfig();
                                                (new window.PulsePointOutstreamRenderer).render({
                                                    adUnitCode: t.adUnitCode,
                                                    vastXml: t.vastXml,
                                                    type: e.type,
                                                    defaultOptions: e.defaultOptions,
                                                    rendererOptions: r
                                                })
                                            })
                                        }), t
                                    }(d.deepAccess(i[e], "renderer.options"), d.deepAccess(n[e], "ext.outstream"))), t.vastXml = n[e].adm, t.mediaType = "video", t.width = n[e].w, t.height = n[e].h) : (t.ad = n[e].adm, t.width = r[e].banner.w, t.height = r[e].banner.h),
                                    function(e, t) {
                                        t && t.ext && (e.ttl = t.ext.ttl || e.ttl, e.currency = t.ext.currency || e.currency, e.netRevenue = null != t.ext.netRevenue ? t.ext.netRevenue : e.netRevenue)
                                    }(t, n[e]), u.push(t)
                            }
                        }), u
                    }(t, e)
                },
                getUserSyncs: function(e) {
                    return e.iframeEnabled ? [{
                        type: "iframe",
                        url: "https://bh.contextweb.com/visitormatch"
                    }] : e.pixelEnabled ? [{
                        type: "image",
                        url: "https://bh.contextweb.com/visitormatch/prebid"
                    }] : void 0
                },
                transformBidParams: function(e, t) {
                    return d.convertTypes({
                        cf: "string",
                        cp: "number",
                        ct: "number"
                    }, e)
                }
            };

        function c(e, t) {
            t && e.push(t)
        }

        function p(e, t, r, n, i) {
            return t ? {
                id: e,
                required: t.required ? 1 : 0,
                img: {
                    type: r,
                    wmin: t.wmin || n,
                    hmin: t.hmin || i
                }
            } : null
        }

        function l(e, t, r, n) {
            return t ? {
                id: e,
                required: t.required ? 1 : 0,
                data: {
                    type: r,
                    len: t.len || n
                }
            } : null
        }

        function f(e, t, r) {
            t && e.push({
                source: r,
                uids: [{
                    id: t
                }]
            })
        }
        Object(n.registerBidder)(o)
    }
}, [488]);
pbjsChunk([102], {
    506: function(e, r, a) {
        e.exports = a(507)
    },
    507: function(e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), a.d(r, "spec", function() {
            return i
        });
        var h = a(0),
            t = a(1),
            y = a(2);
        var i = new function() {
            this.code = "rhythmone", this.supportedMediaTypes = [y.d, y.b];
            var i = [2, 3, 5, 6],
                s = ["video/mp4"],
                d = [1, 2, 3, 4],
                n = [1],
                p = [1, 2, 5],
                o = {},
                c = this;

            function m(e) {
                var r = parseInt(e[0]),
                    a = parseInt(e[1]);
                return r == r && a == a && [r, a]
            }

            function v(e) {
                var r = e.sizes;
                e.mediaTypes && e.mediaTypes.banner && (r = e.mediaTypes.banner.sizes);
                var a = h.parseSizesInput(r),
                    t = [];
                return a.forEach(function(e) {
                    if (e) {
                        var r = m(e.split("x"));
                        r && t.push({
                            w: r[0],
                            h: r[1]
                        })
                    }
                }), !!t.length && {
                    format: t
                }
            }

            function l(e) {
                var r = [];
                if (h.deepAccess(e, "mediaTypes.video.playerSize")) {
                    var a = e.mediaTypes.video.playerSize;
                    h.isArray(e.mediaTypes.video.playerSize[0]) && (a = e.mediaTypes.video.playerSize[0]);
                    var t = m(a);
                    t && (r = t)
                }
                return {
                    mimes: h.deepAccess(e, "mediaTypes.video.mimes") || s,
                    protocols: h.deepAccess(e, "mediaTypes.video.protocols") || i,
                    w: r[0],
                    h: r[1],
                    startdelay: h.deepAccess(e, "mediaTypes.video.startdelay") || 0,
                    skip: h.deepAccess(e, "mediaTypes.video.skip") || 0,
                    playbackmethod: h.deepAccess(e, "mediaTypes.video.playbackmethod") || d,
                    delivery: h.deepAccess(e, "mediaTypes.video.delivery") || n,
                    api: h.deepAccess(e, "mediaTypes.video.api") || p
                }
            }

            function u(e, r) {
                return {
                    id: e[0].bidderRequestId,
                    imp: function(e, r) {
                        var a, t = [],
                            i = 0;
                        if (r && r.refererInfo && r.refererInfo.stack.length) {
                            var s = document.createElement("a");
                            s.href = r.refererInfo.stack[0], i = "https:" == s.protocol ? 1 : 0
                        }
                        for (var d = 0; d < e.length; d++) {
                            o[e[d].adUnitCode] = e[d];
                            var n = {};
                            if (n.id = e[d].adUnitCode, n.bidfloor = parseFloat(h.deepAccess(e[d], "params.floor")) || 0, n.secure = i, h.deepAccess(e[d], "mediaTypes.banner") || "banner" === h.deepAccess(e[d], "mediaType")) {
                                var p = v(e[d]);
                                p && (n.banner = p)
                            }!h.deepAccess(e[d], "mediaTypes.video") && "video" !== h.deepAccess(e[d], "mediaType") || (n.video = l(e[d])), (n.banner || n.video) && (n.ext = {
                                bidder: {
                                    placementId: (a = e[d]).params.placementId,
                                    zone: a.params && a.params.zone ? a.params.zone : "1r",
                                    path: a.params && a.params.path ? a.params.path : "mvo"
                                }
                            }, t.push(n))
                        }
                        return t
                    }(e, r),
                    site: function(e) {
                        var r = {
                            domain: "",
                            page: "",
                            ref: ""
                        };
                        if (e && e.refererInfo) {
                            var a = e.refererInfo;
                            if (r.ref = a.referer, a.stack.length) {
                                r.page = a.stack[a.stack.length - 1];
                                var t = document.createElement("a");
                                t.href = a.stack[0], r.domain = t.hostname
                            }
                        }
                        return r
                    }(r),
                    device: {
                        ua: navigator.userAgent,
                        ip: "",
                        dnt: h.getDNT() ? 1 : 0
                    },
                    user: {
                        ext: {
                            consent: h.deepAccess(r, "gdprConsent.gdprApplies") ? r.gdprConsent.consentString : ""
                        }
                    },
                    at: 1,
                    tmax: 1e3,
                    regs: {
                        ext: {
                            gdpr: !!h.deepAccess(r, "gdprConsent.gdprApplies") && Boolean(1 & r.gdprConsent.gdprApplies)
                        }
                    }
                }
            }

            function f(e, r) {
                for (var a = 0; a < r.length; a++)
                    if (r[a].params && r[a].params[e]) return r[a].params[e]
            }
            this.isBidRequestValid = function(e) {
                return !(!e.params || !e.params.placementId)
            }, this.getUserSyncs = function(e, r, a) {
                return []
            }, this.buildRequests = function(e, r) {
                var a = f("placementId", e);
                if (void 0 === a || e.length < 1) return [];
                var t = f("endpoint", e) || "//tag.1rx.io/rmp/{placementId}/0/{path}?z={zone}",
                    i = f("zone", e) || "1r",
                    s = f("path", e) || "mvo";
                t = (t = (t = t.replace(/\{placementId\}/i, a)).replace(/\{zone\}/i, i)).replace(/\{path\}/i, s);
                var d = /(^v|(\.0)+$)/gi;
                t += "&hbv=" + "2.33.0".replace(d, "") + "," + "2.1".replace(d, "");
                var n = u(e, r);
                return n.imp.length ? {
                    method: "POST",
                    url: t,
                    data: JSON.stringify(n)
                } : {}
            }, this.interpretResponse = function(e) {
                var r = e.body || [],
                    a = [],
                    t = 0;
                if (r.seatbid) {
                    var i = [];
                    for (t = 0; t < r.seatbid.length; t++)
                        for (var s = 0; s < r.seatbid[t].bid.length; s++) i.push(r.seatbid[t].bid[s]);
                    r = i
                }
                for (t = 0; t < r.length; t++) {
                    var d = r[t],
                        n = o[d.impid],
                        p = {
                            requestId: n.bidId,
                            bidderCode: c.code,
                            cpm: parseFloat(d.price),
                            width: d.w,
                            height: d.h,
                            creativeId: d.crid,
                            currency: "USD",
                            netRevenue: !0,
                            ttl: 350
                        };
                    n.mediaTypes && n.mediaTypes.video ? (p.vastUrl = d.nurl, p.mediaType = "video", p.ttl = 600) : p.ad = d.adm, a.push(p)
                }
                return a
            }
        };
        Object(t.registerBidder)(i)
    }
}, [506]);
pbjsChunk([12], {
    514: function(e, t, n) {
        e.exports = n(515)
    },
    515: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(6),
            r = n(4),
            a = n.n(r),
            o = n(7),
            s = n(9),
            u = n.n(s),
            c = n(5);

        function d() {
            return (d = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }).apply(this, arguments)
        }
        var f = n(0),
            l = Object(c.b)(0),
            p = "pa.rxthdr.com/v3",
            v = a.a.EVENTS,
            g = v.AUCTION_INIT,
            m = v.AUCTION_END,
            T = v.BID_REQUESTED,
            h = v.BID_ADJUSTMENT,
            y = v.BIDDER_DONE,
            b = v.BID_WON,
            I = {
                RUNNING: "running",
                FINISHED: "finished"
            },
            E = {
                REQUESTED: "requested",
                BID: "bid",
                NO_BID: "noBid",
                TIMEOUT: "timeout"
            },
            D = {
                AUCTION: "a",
                IMPRESSION: "i",
                BID_AFTER_TIMEOUT: "bat"
            },
            N = {},
            U = "roxot_analytics_",
            _ = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"],
            S = "utm_ttl",
            A = "is_new_flag",
            O = 36e5,
            w = {},
            C = 36e5,
            B = [],
            R = null,
            k = 1e3;

        function q() {
            localStorage.setItem(M(S), Date.now())
        }

        function M(e) {
            return U.concat(e)
        }

        function j(e) {
            return !N.adUnits.length || u()(N.adUnits, e)
        }

        function F(e) {
            return e.adUnitCode.toLowerCase()
        }

        function P(e) {
            return e.bidder.toLowerCase()
        }

        function x(e, t) {
            return {
                isNew: function() {
                    var e = M(A),
                        t = Number(localStorage.getItem(e));
                    return localStorage.setItem(e, Date.now()), Date.now() - t > O
                }() ? 1 : 0,
                auction: f.deepClone(e),
                adUnit: F(t),
                bidder: P(t),
                cpm: t.cpm,
                size: {
                    width: t.width,
                    height: t.height
                },
                mediaType: t.mediaType,
                source: t.source || "client"
            }
        }

        function z(e) {
            w[e.auctionId] = function(e) {
                    return {
                        id: e.auctionId,
                        start: e.timestamp,
                        timeout: e.timeout,
                        adUnits: {}
                    }
                }(e),
                function() {
                    for (var e in w) {
                        var t = w[e];
                        Date.now() - t.start > C && delete w[e]
                    }
                }()
        }

        function Q(e) {
            var r = w[e.auctionId];
            e.bids.forEach(function(e) {
                var t = F(e),
                    n = P(e);
                if (j(t)) {
                    r.adUnits[t] = r.adUnits[t] || function(e, t) {
                        return {
                            adUnit: F(t),
                            start: e.start,
                            timeout: e.timeout,
                            finish: 0,
                            status: I.RUNNING,
                            bidders: {}
                        }
                    }(r, e);
                    var i = r.adUnits[t];
                    i.bidders[n] = i.bidders[n] || function(e, t) {
                        return {
                            bidder: P(t),
                            isAfterTimeout: e.status === I.FINISHED ? 1 : 0,
                            start: t.startTime || Date.now(),
                            finish: 0,
                            status: E.REQUESTED,
                            cpm: -1,
                            size: {
                                width: 0,
                                height: 0
                            },
                            mediaType: "-",
                            source: t.source || "client"
                        }
                    }(r, e)
                }
            })
        }

        function G(e) {
            var t = F(e),
                n = P(e);
            if (j(t)) {
                var i = w[e.auctionId].adUnits[t];
                if (i.status !== I.FINISHED) {
                    var r = i.bidders[n];
                    r.cpm < e.cpm && (r.cpm = e.cpm, r.finish = e.responseTimestamp, r.status = 0 === e.cpm ? E.NO_BID : E.BID, r.size.width = e.width || 0, r.size.height = e.height || 0, r.mediaType = e.mediaType || "-", r.source = e.source || "client")
                } else ! function(e, t) {
                    var n = P(t),
                        i = e.bidders[n],
                        r = function(e, t) {
                            return {
                                auction: f.deepClone(e),
                                adUnit: F(t),
                                bidder: P(t),
                                cpm: t.cpm,
                                size: {
                                    width: t.width || 0,
                                    height: t.height || 0
                                },
                                mediaType: t.mediaType || "-",
                                start: t.requestTimestamp,
                                finish: t.responseTimestamp
                            }
                        }(e, t);
                    r.cpm > i.cpm && (i.cpm = r.cpm, i.isAfterTimeout = 1, i.finish = r.finish, i.size = r.size, i.mediaType = r.mediaType, i.status = 0 === r.cpm ? E.NO_BID : E.BID);
                    L(D.BID_AFTER_TIMEOUT, "Bid After Timeout", r)
                }(i, e)
            }
        }
        var H = d(Object(i.a)({
            url: p,
            analyticsType: "endpoint"
        }), {
            track: function(e) {
                var t = e.eventType,
                    n = e.args;
                switch (t) {
                    case g:
                        z(n);
                        break;
                    case T:
                        Q(n);
                        break;
                    case h:
                        G(n);
                        break;
                    case y:
                        ! function(e) {
                            var a = w[e.auctionId];
                            e.bids.forEach(function(e) {
                                var t = F(e),
                                    n = P(e);
                                if (j(t)) {
                                    var i = a.adUnits[t];
                                    if (i.status !== I.FINISHED) {
                                        var r = i.bidders[n];
                                        r.status === E.REQUESTED && (r.finish = Date.now(), r.status = E.NO_BID, r.cpm = 0)
                                    }
                                }
                            })
                        }(n);
                        break;
                    case m:
                        ! function(e) {
                            var t = w[e.auctionId];
                            Object.keys(t.adUnits).length || delete w[e.auctionId];
                            var n = Date.now();
                            for (var i in t.finish = n, t.adUnits) {
                                var r = t.adUnits[i];
                                for (var a in r.finish = n, r.status = I.FINISHED, r.bidders) {
                                    var o = r.bidders[a];
                                    o.status === E.REQUESTED && (o.status = E.TIMEOUT)
                                }
                            }
                            L(D.AUCTION, "Auction", t)
                        }(n);
                        break;
                    case b:
                        ! function(e) {
                            var t = F(e);
                            if (j(t)) {
                                var n = x(w[e.auctionId].adUnits[t], e);
                                L(D.IMPRESSION, "Bid won", n)
                            }
                        }(n);
                        break;
                    default:
                        ! function(e, t) {
                            L(e, e, t)
                        }(t, n)
                }
            }
        });

        function L(e, t, n) {
            var i = {
                eventType: e,
                eventName: t,
                data: n
            };
            B.push(i), K("Register event", i), void 0 === N.serverConfig ? V() : J()
        }

        function J() {
            if (R && (clearTimeout(R), R = null), void 0 !== N.serverConfig)
                for (; B.length;) {
                    var e = B.shift(),
                        t = N.serverConfig[e.eventType] || 0;
                    0 !== Number(t) ? W(e.eventType, e.eventName, e.data) : K("Skip event " + e.eventName, e)
                } else V()
        }

        function V() {
            R = R || setTimeout(J, k)
        }

        function W(e, t, n) {
            var i = "//" + N.server + "/" + e + "?publisherId=" + N.publisherId + "&host=" + N.host,
                r = {
                    event: e,
                    eventName: t,
                    options: N,
                    data: n
                };
            l(i, function() {
                K(t + " sent", r)
            }, JSON.stringify(r), {
                contentType: "text/plain",
                method: "POST",
                withCredentials: !0
            })
        }

        function K(e, t) {
            f.logInfo(X(e), t)
        }

        function X(e) {
            return "Roxot Prebid Analytics: " + e
        }
        H.originEnableAnalytics = H.enableAnalytics, H.enableAnalytics = function(e) {
            this.initConfig(e) && (K("Analytics adapter enabled", N), H.originEnableAnalytics(e))
        }, H.buildUtmTagData = function() {
            var n = {},
                i = !1;
            return _.forEach(function(e) {
                var t = f.getParameterByName(e);
                "" !== t && (i = !0), n[e] = t
            }), _.forEach(function(e) {
                i ? (localStorage.setItem(M(e), n[e]), q()) : function() {
                    var e = localStorage.getItem(M(S));
                    return 36e5 < Date.now() - e
                }() || (n[e] = localStorage.getItem(M(e)) ? localStorage.getItem(M(e)) : "", q())
            }), n
        }, H.initConfig = function(e) {
            var t = !0;
            return (N = {}).options = f.deepClone(e.options), N.publisherId = N.options.publisherId || N.options.publisherIds[0] || null, N.publisherId || (function(e) {
                    f.logError(X(e))
                }('"options.publisherId" is empty'), t = !1), N.adUnits = N.options.adUnits || [], N.adUnits = N.adUnits.map(function(e) {
                    return e.toLowerCase()
                }), N.server = N.options.server || p, N.configServer = N.options.configServer || N.options.server || "pa.rxthdr.com/v3", N.utmTagData = this.buildUtmTagData(), N.host = N.options.host || window.location.hostname, N.device = /ipad|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(navigator.userAgent.toLowerCase()) ? "tablet" : /iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(navigator.userAgent.toLowerCase()) ? "mobile" : "desktop",
                function() {
                    var e = "//" + N.configServer + "/c?publisherId=" + N.publisherId + "&host=" + N.host;
                    l(e, {
                        success: function(e) {
                            N.serverConfig = JSON.parse(e)
                        },
                        error: function() {
                            N.serverConfig = {}, N.serverConfig[D.AUCTION] = 1, N.serverConfig[D.IMPRESSION] = 1, N.serverConfig[D.BID_AFTER_TIMEOUT] = 1, N.serverConfig.isError = 1
                        }
                    }, null, {
                        contentType: "text/json",
                        method: "GET",
                        withCredentials: !0
                    })
                }(), t
        }, H.getOptions = function() {
            return N
        }, o.default.registerAnalyticsAdapter({
            adapter: H,
            code: "roxot"
        }), t.default = H
    },
    6: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var r, a = e.url,
                t = e.analyticsType,
                o = e.global,
                i = e.handler,
                s = [],
                u = 0,
                n = !0;
            t !== O && !w || function() {
                if (n) {
                    for (var e = 0; e < s.length; e++) s[e]();
                    s.push = function(e) {
                        e()
                    }, n = !1
                }
                g.logMessage("event count sent to ".concat(o, ": ").concat(u))
            }();
            return {
                track: function(e) {
                    var t = e.eventType,
                        n = e.args;
                    this.getAdapterType() === w && window[o](i, t, n);
                    this.getAdapterType() === O && function(e) {
                        var t = e.eventType,
                            n = e.args,
                            i = e.callback;
                        Object(f.a)(a, i, JSON.stringify({
                            eventType: t,
                            args: n
                        }))
                    }.apply(void 0, arguments)
                },
                enqueue: c,
                enableAnalytics: d,
                disableAnalytics: function() {
                    g._each(r, function(e, t) {
                        v.off(t, e)
                    }), this.enableAnalytics = this._oldEnable ? this._oldEnable : d
                },
                getAdapterType: function() {
                    return t
                },
                getGlobal: function() {
                    return o
                },
                getHandler: function() {
                    return i
                },
                getUrl: function() {
                    return a
                }
            };

            function c(e) {
                var t = e.eventType,
                    n = e.args,
                    i = this;
                o && window[o] && t && n ? this.track({
                    eventType: t,
                    args: n
                }) : s.push(function() {
                    u++, i.track({
                        eventType: t,
                        args: n
                    })
                })
            }

            function d(t) {
                var e, n = this,
                    i = this;
                "object" !== p(t) || "object" !== p(t.options) || (void 0 === t.options.sampling || Math.random() < parseFloat(t.options.sampling)) ? (v.getEvents().forEach(function(e) {
                    if (e) {
                        var t = e.eventType,
                            n = e.args;
                        t !== b && c.call(i, {
                            eventType: t,
                            args: n
                        })
                    }
                }), l(e = {}, h, function(e) {
                    return n.enqueue({
                        eventType: h,
                        args: e
                    })
                }), l(e, y, function(e) {
                    return n.enqueue({
                        eventType: y,
                        args: e
                    })
                }), l(e, I, function(e) {
                    return n.enqueue({
                        eventType: I,
                        args: e
                    })
                }), l(e, E, function(e) {
                    return n.enqueue({
                        eventType: E,
                        args: e
                    })
                }), l(e, b, function(e) {
                    return n.enqueue({
                        eventType: b,
                        args: e
                    })
                }), l(e, D, function(e) {
                    return n.enqueue({
                        eventType: D,
                        args: e
                    })
                }), l(e, N, function(e) {
                    return n.enqueue({
                        eventType: N,
                        args: e
                    })
                }), l(e, U, function(e) {
                    return n.enqueue({
                        eventType: U,
                        args: e
                    })
                }), l(e, _, function(e) {
                    return n.enqueue({
                        eventType: _,
                        args: e
                    })
                }), l(e, T, function(e) {
                    return n.enqueue({
                        eventType: T,
                        args: e
                    })
                }), l(e, S, function(e) {
                    return n.enqueue({
                        eventType: S,
                        args: e
                    })
                }), l(e, A, function(e) {
                    return n.enqueue({
                        eventType: A,
                        args: e
                    })
                }), l(e, m, function(e) {
                    e.config = "object" === p(t) && t.options || {}, n.enqueue({
                        eventType: m,
                        args: e
                    })
                }), r = e, g._each(r, function(e, t) {
                    v.on(t, e)
                })) : g.logMessage('Analytics adapter for "'.concat(o, '" disabled by sampling'));
                this._oldEnable = this.enableAnalytics, this.enableAnalytics = function() {
                    return g.logMessage('Analytics adapter for "'.concat(o, '" already enabled, unnecessary call to `enableAnalytics`.'))
                }
            }
        };
        var i = n(4),
            r = n.n(i),
            f = n(5);

        function l(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function p(e) {
            return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var v = n(8),
            g = n(0),
            a = r.a.EVENTS,
            m = a.AUCTION_INIT,
            T = a.AUCTION_END,
            h = a.REQUEST_BIDS,
            y = a.BID_REQUESTED,
            b = a.BID_TIMEOUT,
            I = a.BID_RESPONSE,
            E = a.NO_BID,
            D = a.BID_WON,
            N = a.BID_ADJUSTMENT,
            U = a.BIDDER_DONE,
            _ = a.SET_TARGETING,
            S = a.AD_RENDER_FAILED,
            A = a.ADD_AD_UNITS,
            O = "endpoint",
            w = "bundle"
    }
}, [514]);
pbjsChunk([96], {
    524: function(e, r, t) {
        e.exports = t(525)
    },
    525: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "FASTLANE_ENDPOINT", function() {
            return n
        }), t.d(r, "VIDEO_ENDPOINT", function() {
            return a
        }), t.d(r, "SYNC_ENDPOINT", function() {
            return o
        }), t.d(r, "spec", function() {
            return s
        }), r.hasVideoMediaType = I, r.masSizeOrdering = j, r.determineRubiconVideoSizeId = S, r.getPriceGranularity = k, r.hasValidVideoParams = T, r.resetUserSync = function() {
            C = !1
        };
        var c = t(0),
            i = t(1),
            u = t(3),
            d = t(2);

        function p(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t, e
        }

        function l() {
            return (l = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            }).apply(this, arguments)
        }

        function f(e, r) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, r) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                var t = [],
                    i = !0,
                    n = !1,
                    o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (t.push(a.value), !r || t.length !== r); i = !0);
                } catch (e) {
                    n = !0, o = e
                } finally {
                    try {
                        i || null == s.return || s.return()
                    } finally {
                        if (n) throw o
                    }
                }
                return t
            }(e, r) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function v(e) {
            return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function m() {
            return "https:" === location.protocol
        }
        var n = "//fastlane.rubiconproject.com/a/api/fastlane.json",
            a = "//prebid-server.rubiconproject.com/openrtb2/auction",
            o = "https://eus.rubiconproject.com/usync.html",
            g = {
                FASTLANE: {
                    id: "dt.id",
                    keyv: "dt.keyv",
                    pref: "dt.pref"
                },
                PREBID_SERVER: {
                    id: "id",
                    keyv: "keyv"
                }
            },
            b = {
                1: "468x60",
                2: "728x90",
                5: "120x90",
                8: "120x600",
                9: "160x600",
                10: "300x600",
                13: "200x200",
                14: "250x250",
                15: "300x250",
                16: "336x280",
                17: "240x400",
                19: "300x100",
                31: "980x120",
                32: "250x360",
                33: "180x500",
                35: "980x150",
                37: "468x400",
                38: "930x180",
                39: "750x100",
                40: "750x200",
                41: "750x300",
                43: "320x50",
                44: "300x50",
                48: "300x300",
                53: "1024x768",
                54: "300x1050",
                55: "970x90",
                57: "970x250",
                58: "1000x90",
                59: "320x80",
                60: "320x150",
                61: "1000x1000",
                64: "580x500",
                65: "640x480",
                66: "930x600",
                67: "320x480",
                68: "1800x1000",
                72: "320x320",
                73: "320x160",
                78: "980x240",
                79: "980x300",
                80: "980x400",
                83: "480x300",
                94: "970x310",
                96: "970x210",
                101: "480x320",
                102: "768x1024",
                103: "480x280",
                105: "250x800",
                108: "320x240",
                113: "1000x300",
                117: "320x100",
                125: "800x250",
                126: "200x600",
                144: "980x600",
                145: "980x150",
                156: "640x320",
                159: "320x250",
                179: "250x600",
                195: "600x300",
                198: "640x360",
                199: "640x200",
                213: "1030x590",
                214: "980x360",
                229: "320x180",
                232: "580x400",
                257: "400x600",
                264: "970x1000",
                265: "1920x1080",
                278: "320x500",
                288: "640x380"
            };
        c._each(b, function(e, r) {
            return b[e] = r
        });
        var s = {
            code: "rubicon",
            supportedMediaTypes: [d.b, d.d],
            isBidRequestValid: function(e) {
                if ("object" !== v(e.params)) return !1;
                for (var r = 0, t = ["accountId", "siteId", "zoneId"]; r < t.length; r++)
                    if (e.params[t[r]] = parseInt(e.params[t[r]]), isNaN(e.params[t[r]])) return c.logError("Rubicon: wrong format of accountId or siteId or zoneId."), !1;
                var i = A(e, !0);
                return !!i && ("video" !== i || T(e))
            },
            buildRequests: function(e, o) {
                var r = [],
                    t = e.filter(function(e) {
                        return "video" === A(e)
                    }).map(function(e) {
                        e.startTime = (new Date).getTime();
                        var r = {
                                id: e.transactionId,
                                test: u.b.getConfig("debug") ? 1 : 0,
                                cur: ["USD"],
                                source: {
                                    tid: e.transactionId
                                },
                                tmax: u.b.getConfig("TTL") || 1e3,
                                imp: [{
                                    exp: 300,
                                    id: e.adUnitCode,
                                    secure: m() || e.params.secure ? 1 : 0,
                                    ext: {
                                        rubicon: e.params
                                    },
                                    video: c.deepAccess(e, "mediaTypes.video") || {}
                                }],
                                ext: {
                                    prebid: {
                                        cache: {
                                            vastxml: {
                                                returnCreative: !1
                                            }
                                        },
                                        targeting: {
                                            includewinners: !0,
                                            includebidderkeys: !1,
                                            pricegranularity: k(u.b)
                                        }
                                    }
                                }
                            },
                            t = parseFloat(c.deepAccess(e, "params.floor"));
                        isNaN(t) || (r.imp[0].bidfloor = t), r.imp[0].ext.rubicon.video.size_id = S(e),
                            function(r, t, e) {
                                if (!r) return;
                                "object" === v(u.b.getConfig("app")) ? r.app = u.b.getConfig("app") : r.site = {
                                    page: x(t, e)
                                };
                                "object" === v(u.b.getConfig("device")) && (r.device = u.b.getConfig("device"));
                                t.params.video.language && ["site", "device"].forEach(function(e) {
                                    r[e] && (r[e].content = l({
                                        language: t.params.video.language
                                    }, r[e].content))
                                })
                            }(r, e, o),
                            function(e, r) {
                                "object" === v(e.imp[0].video) && void 0 === e.imp[0].video.skip && (e.imp[0].video.skip = r.params.video.skip);
                                "object" === v(e.imp[0].video) && void 0 === e.imp[0].video.skipafter && (e.imp[0].video.skipafter = r.params.video.skipdelay);
                                "object" === v(e.imp[0].video) && void 0 === e.imp[0].video.pos && (e.imp[0].video.pos = "atf" === r.params.position ? 1 : "btf" === r.params.position ? 3 : 0);
                                var t = h(r, "video");
                                e.imp[0].video.w = t[0], e.imp[0].video.h = t[1]
                            }(r, e);
                        var i, n = y(e, "PREBID_SERVER");
                        n && c.deepSetValue(r, "user.ext.digitrust", n), o.gdprConsent && ("boolean" == typeof o.gdprConsent.gdprApplies && (i = o.gdprConsent.gdprApplies ? 1 : 0), r.regs ? r.regs.ext ? r.regs.ext.gdpr = i : r.regs.ext = {
                            gdpr: i
                        } : r.regs = {
                            ext: {
                                gdpr: i
                            }
                        }, c.deepSetValue(r, "user.ext.consent", o.gdprConsent.consentString));
                        return e.userId && "object" === v(e.userId) && (e.userId.tdid || e.userId.pubcid) && (c.deepSetValue(r, "user.ext.eids", []), e.userId.tdid && r.user.ext.eids.push({
                            source: "adserver.org",
                            uids: [{
                                id: e.userId.tdid,
                                ext: {
                                    rtiPartner: "TDID"
                                }
                            }]
                        }), e.userId.pubcid && r.user.ext.eids.push({
                            source: "pubcommon",
                            uids: [{
                                id: e.userId.pubcid
                            }]
                        })), !0 === u.b.getConfig("coppa") && c.deepSetValue(r, "regs.coppa", 1), {
                            method: "POST",
                            url: a,
                            data: r,
                            bidRequest: e
                        }
                    });
                if (!0 !== u.b.getConfig("rubicon.singleRequest")) r = t.concat(e.filter(function(e) {
                    return "banner" === A(e)
                }).map(function(e) {
                    var i = s.createSlotParams(e, o);
                    return {
                        method: "GET",
                        url: n,
                        data: s.getOrderedParams(i).reduce(function(e, r) {
                            var t = i[r];
                            return c.isStr(t) && "" !== t || c.isNumber(t) ? "".concat(e).concat(r, "=").concat(encodeURIComponent(t), "&") : e
                        }, "") + "slots=1&rand=".concat(Math.random()),
                        bidRequest: e
                    }
                }));
                else {
                    var i = e.filter(function(e) {
                        return "banner" === A(e)
                    }).reduce(function(e, r) {
                        return (e[r.params.siteId] = e[r.params.siteId] || []).push(r), e
                    }, {});
                    r = t.concat(Object.keys(i).reduce(function(r, e) {
                        return function(t, i) {
                            return t.map(function(e, r) {
                                return r % i == 0 ? t.slice(r, r + i) : null
                            }).filter(function(e) {
                                return e
                            })
                        }(i[e], 10).forEach(function(e) {
                            var i = s.combineSlotUrlParams(e.map(function(e) {
                                return s.createSlotParams(e, o)
                            }));
                            r.push({
                                method: "GET",
                                url: n,
                                data: s.getOrderedParams(i).reduce(function(e, r) {
                                    var t = i[r];
                                    return c.isStr(t) && "" !== t || c.isNumber(t) ? "".concat(e).concat(r, "=").concat(encodeURIComponent(t), "&") : e
                                }, "") + "slots=".concat(e.length, "&rand=").concat(Math.random()),
                                bidRequest: e
                            })
                        }), r
                    }, []))
                }
                return r
            },
            getOrderedParams: function(e) {
                var r = /^tg_v/,
                    t = /^tg_i/,
                    i = ["tpid_tdid", "account_id", "site_id", "zone_id", "size_id", "alt_size_ids", "p_pos", "gdpr", "gdpr_consent", "rf", "dt.id", "dt.keyv", "dt.pref", "p_geo.latitude", "p_geo.longitude", "kw"].concat(Object.keys(e).filter(function(e) {
                        return r.test(e)
                    })).concat(Object.keys(e).filter(function(e) {
                        return t.test(e)
                    })).concat(["tk_flint", "x_source.tid", "p_screen_res", "rp_floor", "rp_secure", "tk_user_key"]);
                return i.concat(Object.keys(e).filter(function(e) {
                    return -1 === i.indexOf(e)
                }))
            },
            combineSlotUrlParams: function(n) {
                if (1 === n.length) return n[0];
                var i = n.reduce(function(r, t, i) {
                        return Object.keys(t).forEach(function(e) {
                            r.hasOwnProperty(e) || (r[e] = new Array(n.length)), r[e].splice(i, 1, t[e])
                        }), r
                    }, {}),
                    o = new RegExp("^([^;]*)(;\\1)+$");
                return Object.keys(i).forEach(function(e) {
                    var r = i[e].join(";"),
                        t = r.match(o);
                    i[e] = t ? t[1] : r
                }), i
            },
            createSlotParams: function(e, r) {
                e.startTime = (new Date).getTime();
                var t = e.params,
                    i = h(e, "banner"),
                    n = f(t.latLong || [], 2),
                    o = n[0],
                    a = n[1],
                    s = u.b.getConfig("rubicon.int_type"),
                    c = {
                        account_id: t.accountId,
                        site_id: t.siteId,
                        zone_id: t.zoneId,
                        size_id: i[0],
                        alt_size_ids: i.slice(1).join(",") || void 0,
                        p_pos: "atf" === t.position || "btf" === t.position ? t.position : "unknown",
                        rp_floor: .01 < (t.floor = parseFloat(t.floor)) ? t.floor : .01,
                        rp_secure: m() ? "1" : "0",
                        tk_flint: "".concat(s || "pbjs_lite", "_v2.33.0"),
                        "x_source.tid": e.transactionId,
                        p_screen_res: [window.screen.width, window.screen.height].join("x"),
                        kw: Array.isArray(t.keywords) ? t.keywords.join(",") : "",
                        tk_user_key: t.userId,
                        "p_geo.latitude": isNaN(parseFloat(o)) ? void 0 : parseFloat(o).toFixed(4),
                        "p_geo.longitude": isNaN(parseFloat(a)) ? void 0 : parseFloat(a).toFixed(4),
                        "tg_fl.eid": e.code,
                        rf: x(e, r)
                    };
                (e.userId || {}).tdid && (c.tpid_tdid = e.userId.tdid), r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (c.gdpr = Number(r.gdprConsent.gdprApplies)), c.gdpr_consent = r.gdprConsent.consentString), null !== t.visitor && "object" === v(t.visitor) && Object.keys(t.visitor).forEach(function(e) {
                    null != t.visitor[e] && (c["tg_v.".concat(e)] = t.visitor[e].toString())
                }), null !== t.inventory && "object" === v(t.inventory) && Object.keys(t.inventory).forEach(function(e) {
                    null != t.inventory[e] && (c["tg_i.".concat(e)] = t.inventory[e].toString())
                });
                var d = y(e, "FASTLANE");
                return l(c, d), !0 === u.b.getConfig("coppa") && (c.coppa = 1), c
            },
            interpretResponse: function(a, e) {
                var s = e.bidRequest;
                if (!(a = a.body) || "object" !== v(a)) return [];
                if (a.seatbid) {
                    var r = c.deepAccess(a, "ext.errors.rubicon");
                    Array.isArray(r) && 0 < r.length && c.logWarn("Rubicon: Error in video response");
                    var o = [];
                    return a.seatbid.forEach(function(n) {
                        (n.bid || []).forEach(function(e) {
                            var r = {
                                requestId: s.bidId,
                                currency: a.cur || "USD",
                                creativeId: e.crid,
                                cpm: e.price || 0,
                                bidderCode: n.seat,
                                ttl: 300,
                                netRevenue: u.b.getConfig("rubicon.netRevenue") || !1,
                                width: e.w || c.deepAccess(s, "mediaTypes.video.w") || c.deepAccess(s, "params.video.playerWidth"),
                                height: e.h || c.deepAccess(s, "mediaTypes.video.h") || c.deepAccess(s, "params.video.playerHeight")
                            };
                            e.dealid && (r.dealId = e.dealid);
                            var t = c.deepAccess(a, "ext.responsetimemillis.rubicon");
                            if (s && t && (s.serverResponseTimeMs = t), c.deepAccess(e, "ext.prebid.type") === d.d) {
                                r.mediaType = d.d;
                                var i = c.deepAccess(e, "ext.prebid.targeting");
                                i && "object" === v(i) && (r.adserverTargeting = i), e.ext.prebid.cache && "object" === v(e.ext.prebid.cache.vastXml) && e.ext.prebid.cache.vastXml.cacheId && e.ext.prebid.cache.vastXml.url ? (r.videoCacheKey = e.ext.prebid.cache.vastXml.cacheId, r.vastUrl = e.ext.prebid.cache.vastXml.url) : i && i.hb_uuid && i.hb_cache_host && i.hb_cache_path && (r.videoCacheKey = i.hb_uuid, r.vastUrl = "https://".concat(i.hb_cache_host).concat(i.hb_cache_path, "?uuid=").concat(i.hb_uuid)), e.adm && (r.vastXml = e.adm), e.nurl && (r.vastUrl = e.nurl), !r.vastUrl && e.nurl && (r.vastUrl = e.nurl)
                            } else c.logWarn("Rubicon: video response received non-video media type");
                            o.push(r)
                        })
                    }), o
                }
                var t = a.ads;
                return "object" !== v(s) || Array.isArray(s) || "video" !== A(s) || "object" !== v(t) || (t = t[s.adUnitCode]), !Array.isArray(t) || t.length < 1 ? [] : t.reduce(function(e, r, t) {
                    if ("ok" !== r.status) return e;
                    var i = Array.isArray(s) ? s[t] : s;
                    if (i && "object" === v(i)) {
                        var n = {
                            requestId: i.bidId,
                            currency: "USD",
                            creativeId: r.creative_id || "".concat(r.network || "", "-").concat(r.advertiser || ""),
                            cpm: r.cpm || 0,
                            dealId: r.deal,
                            ttl: 300,
                            netRevenue: u.b.getConfig("rubicon.netRevenue") || !1,
                            rubicon: {
                                advertiserId: r.advertiser,
                                networkId: r.network
                            },
                            meta: {
                                advertiserId: r.advertiser,
                                networkId: r.network
                            }
                        };
                        if (r.creative_type && (n.mediaType = r.creative_type), r.creative_type === d.d) n.width = i.params.video.playerWidth, n.height = i.params.video.playerHeight, n.vastUrl = r.creative_depot_url, n.impression_id = r.impression_id, n.videoCacheKey = r.impression_id;
                        else {
                            n.ad = function(e, r) {
                                return "<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='".concat(r, "'>\n<script type='text/javascript'>").concat(e, "<\/script>\n</div>\n</body>\n</html>")
                            }(r.script, r.impression_id);
                            var o = f(b[r.size_id].split("x").map(function(e) {
                                return Number(e)
                            }), 2);
                            n.width = o[0], n.height = o[1]
                        }
                        n.rubiconTargeting = (Array.isArray(r.targeting) ? r.targeting : []).reduce(function(e, r) {
                            return e[r.key] = r.values[0], e
                        }, {
                            rpfl_elemid: i.adUnitCode
                        }), e.push(n)
                    } else c.logError("Rubicon: bidRequest undefined at index position:".concat(t), s, a);
                    return e
                }, []).sort(function(e, r) {
                    return (r.cpm || 0) - (e.cpm || 0)
                })
            },
            getUserSyncs: function(e, r, t) {
                if (!C && e.iframeEnabled) {
                    var i = "";
                    return t && "string" == typeof t.consentString && ("boolean" == typeof t.gdprApplies ? i += "?gdpr=".concat(Number(t.gdprApplies), "&gdpr_consent=").concat(t.consentString) : i += "?gdpr_consent=".concat(t.consentString)), C = !0, {
                        type: "iframe",
                        url: o + i
                    }
                }
            },
            transformBidParams: function(e, r) {
                return c.convertTypes({
                    accountId: "number",
                    siteId: "number",
                    zoneId: "number"
                }, e)
            }
        };

        function y(e, r) {
            var t, i = 0 < arguments.length && void 0 !== e ? e : {},
                n = 1 < arguments.length ? r : void 0;
            if (!n || !g[n]) return null;
            var o = g[n];
            var a = function() {
                var e = c.deepAccess(i, "userId.digitrustid.data");
                if (e) return e;
                var r = window.DigiTrust && (u.b.getConfig("digiTrustId") || window.DigiTrust.getUser({
                    member: "T9QSFKPDN9"
                }));
                return r && r.success && r.identity || null
            }();
            if (!a || a.privacy && a.privacy.optout) return null;
            var s = (p(t = {}, o.id, a.id), p(t, o.keyv, a.keyv), t);
            return o.pref && (s[o.pref] = 0), s
        }

        function x(e, r) {
            var t = u.b.getConfig("pageUrl");
            return t = e.params.referrer ? e.params.referrer : t || r.refererInfo.referer, e.params.secure ? t.replace(/^http:/i, "https:") : t
        }

        function h(e, r) {
            var t = e.params;
            if ("video" === r) {
                var i = [];
                return t.video && t.video.playerWidth && t.video.playerHeight ? i = [t.video.playerWidth, t.video.playerHeight] : Array.isArray(c.deepAccess(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length ? i = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && 0 < e.sizes.length && Array.isArray(e.sizes[0]) && 1 < e.sizes[0].length && (i = e.sizes[0]), i
            }
            var n = [];
            return Array.isArray(t.sizes) ? n = t.sizes : void 0 !== c.deepAccess(e, "mediaTypes.banner.sizes") ? n = _(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && 0 < e.sizes.length ? n = _(e.sizes) : c.logWarn("Rubicon: no sizes are setup or found"), j(n)
        }

        function _(e) {
            return c.parseSizesInput(e).reduce(function(e, r) {
                var t = parseInt(b[r], 10);
                return t && e.push(t), e
            }, [])
        }

        function I(e) {
            return "object" === v(c.deepAccess(e, "params.video")) && void 0 !== c.deepAccess(e, "mediaTypes.".concat(d.d))
        }

        function A(e, r) {
            var t = 1 < arguments.length && void 0 !== r && r;
            return I(e) ? -1 === ["outstream", "instream"].indexOf(c.deepAccess(e, "mediaTypes.".concat(d.d, ".context"))) ? void(t && c.logError("Rubicon: mediaTypes.video.context must be outstream or instream")) : h(e, "video").length < 2 ? void(t && c.logError("Rubicon: could not determine the playerSize of the video")) : (t && c.logMessage("Rubicon: making video request for adUnit", e.adUnitCode), "video") : 0 === h(e, "banner").length ? void(t && c.logError("Rubicon: could not determine the sizes for banner request")) : (t && c.logMessage("Rubicon: making banner request for adUnit", e.adUnitCode), "banner")
        }

        function j(e) {
            var n = [15, 2, 9];
            return e.sort(function(e, r) {
                var t = n.indexOf(e),
                    i = n.indexOf(r);
                return -1 < t || -1 < i ? -1 === t ? 1 : -1 === i ? -1 : t - i : e - r
            })
        }

        function S(e) {
            var r = parseInt(c.deepAccess(e, "params.video.size_id"));
            return isNaN(r) ? "outstream" === c.deepAccess(e, "mediaTypes.".concat(d.d, ".context")) ? 203 : 201 : r
        }

        function k(e) {
            return {
                ranges: {
                    low: [{
                        max: 5,
                        increment: .5
                    }],
                    medium: [{
                        max: 20,
                        increment: .1
                    }],
                    high: [{
                        max: 20,
                        increment: .01
                    }],
                    auto: [{
                        max: 5,
                        increment: .05
                    }, {
                        min: 5,
                        max: 10,
                        increment: .1
                    }, {
                        min: 10,
                        max: 20,
                        increment: .5
                    }],
                    dense: [{
                        max: 3,
                        increment: .01
                    }, {
                        min: 3,
                        max: 8,
                        increment: .05
                    }, {
                        min: 8,
                        max: 20,
                        increment: .5
                    }],
                    custom: e.getConfig("customPriceBucket") && e.getConfig("customPriceBucket").buckets
                }[e.getConfig("priceGranularity")]
            }
        }

        function T(r) {
            var t = !0,
                e = Object.prototype.toString.call([]),
                i = Object.prototype.toString.call(0),
                n = {
                    mimes: e,
                    protocols: e,
                    maxduration: i,
                    linearity: i,
                    api: e
                };
            return Object.keys(n).forEach(function(e) {
                Object.prototype.toString.call(c.deepAccess(r, "mediaTypes.video." + e)) !== n[e] && (t = !1, c.logError("Rubicon: mediaTypes.video." + e + " is required and must be of type: " + n[e]))
            }), t
        }
        var C = !1;
        Object(i.registerBidder)(s)
    }
}, [524]);
pbjsChunk([78], {
    572: function(r, e, t) {
        r.exports = t(573)
    },
    573: function(r, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), t.d(e, "spec", function() {
            return d
        }), t.d(e, "LogError", function() {
            return u
        });
        var o = t(0),
            i = t(1),
            a = t(2);

        function n(r, e) {
            for (var t = 0; t < e.length; t++) {
                var i = e[t];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i)
            }
        }
        var s = [],
            d = {
                code: "sovrn",
                supportedMediaTypes: [a.b],
                isBidRequestValid: function(r) {
                    return !(!r.params.tagid || isNaN(parseFloat(r.params.tagid)) || !isFinite(r.params.tagid))
                },
                buildRequests: function(e, t) {
                    try {
                        var i, r = o.getTopWindowLocation(),
                            n = [];
                        o._each(e, function(r) {
                            i = i || o.getBidIdParameter("iv", r.params), r.sizes = o.isArray(r.sizes) && o.isArray(r.sizes[0]) ? r.sizes : [r.sizes], r.sizes = r.sizes.filter(function(r) {
                                return o.isArray(r)
                            });
                            var e = r.sizes.map(function(r) {
                                return {
                                    w: parseInt(r[0], 10),
                                    h: parseInt(r[1], 10)
                                }
                            });
                            n.push({
                                id: r.bidId,
                                banner: {
                                    format: e,
                                    w: 1,
                                    h: 1
                                },
                                tagid: String(o.getBidIdParameter("tagid", r.params)),
                                bidfloor: o.getBidIdParameter("bidfloor", r.params)
                            })
                        });
                        var a = {
                            id: o.getUniqueIdentifierStr(),
                            imp: n,
                            site: {
                                domain: r.host,
                                page: r.host + r.pathname + r.search + r.hash
                            }
                        };
                        t && t.gdprConsent && (a.regs = {
                            ext: {
                                gdpr: +t.gdprConsent.gdprApplies
                            }
                        }, a.user = {
                            ext: {
                                consent: t.gdprConsent.consentString
                            }
                        });
                        var s = "//ap.lijit.com/rtb/bid?src=prebid_prebid_2.33.0";
                        return i && (s += "&iv=".concat(i)), {
                            method: "POST",
                            url: s,
                            data: JSON.stringify(a),
                            options: {
                                contentType: "text/plain"
                            }
                        }
                    } catch (r) {
                        new u(r, {
                            bidReqs: e,
                            bidderRequest: t
                        }).append()
                    }
                },
                interpretResponse: function(r) {
                    var e = r.body,
                        t = e.id,
                        i = e.seatbid;
                    try {
                        var n = [];
                        return t && i && 0 < i.length && i[0].bid && 0 < i[0].bid.length && i[0].bid.map(function(r) {
                            n.push({
                                requestId: r.impid,
                                cpm: parseFloat(r.price),
                                width: parseInt(r.w),
                                height: parseInt(r.h),
                                creativeId: r.crid || r.id,
                                dealId: r.dealid || null,
                                currency: "USD",
                                netRevenue: !0,
                                mediaType: a.b,
                                ad: decodeURIComponent("".concat(r.adm, '<img src="').concat(r.nurl, '">')),
                                ttl: 60
                            })
                        }), n
                    } catch (r) {
                        new u(r, {
                            id: t,
                            seatbid: i
                        }).append()
                    }
                },
                getUserSyncs: function(e, r, t) {
                    try {
                        var i = [];
                        if (r && 0 !== r.length && e.iframeEnabled) {
                            var n = r.filter(function(r) {
                                    return r.body && r.body.ext && r.body.ext.iid
                                }).map(function(r) {
                                    return r.body.ext.iid
                                }),
                                a = "";
                            t && t.gdprApplies && "string" == typeof t.consentString && (a = t.consentString), n[0] && i.push({
                                type: "iframe",
                                url: "//ap.lijit.com/beacon?informer=" + n[0] + "&gdpr_consent=" + a
                            })
                        }
                        return s.length && e.pixelEnabled && (i = i.concat(s)), i
                    } catch (r) {
                        return e.pixelEnabled ? s : []
                    }
                }
            },
            u = function() {
                function t(r, e) {
                    ! function(r, e) {
                        if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), o.logError(r), this.error = {}, this.error.t = o.timestamp(), this.error.m = r.message, this.error.s = r.stack, this.error.d = e, this.error.v = "prebid_prebid_2.33.0", this.error.u = o.getTopWindowLocation().href, this.error.ua = navigator.userAgent
                }
                return function(r, e, t) {
                    e && n(r.prototype, e), t && n(r, t)
                }(t, [{
                    key: "buildErrorString",
                    value: function(r) {
                        return "https://pcb.aws.lijit.com/c?b=" + btoa(JSON.stringify(r))
                    }
                }, {
                    key: "append",
                    value: function() {
                        var r = this.buildErrorString(this.error);
                        2083 < r.length && (delete this.error.d, 2083 < (r = this.buildErrorString(this.error)).length && (delete this.error.s, 2083 < (r = this.buildErrorString(this.error)).length && (r = this.buildErrorString({
                            m: "unknown error message",
                            t: this.error.t,
                            u: this.error.u
                        }))));
                        var e = {
                            type: "image",
                            url: r
                        };
                        s.push(e)
                    }
                }], [{
                    key: "getErrPxls",
                    value: function() {
                        return s
                    }
                }]), t
            }();
        Object(i.registerBidder)(d)
    }
}, [572]);
pbjsChunk([77], {
    574: function(e, t, r) {
        e.exports = r(575)
    },
    575: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r.d(t, "spec", function() {
            return n
        });
        var P = r(0),
            c = r(11),
            a = r(1),
            u = r(2);

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var d = "spotx",
            n = {
                code: d,
                aliases: ["spotx"],
                supportedMediaTypes: [u.d],
                isBidRequestValid: function(e) {
                    if (e && "object" !== i(e.params)) return P.logError(d + ": params is not defined or is incorrect in the bidder settings."), !1;
                    if (!P.deepAccess(e, "mediaTypes.video")) return P.logError(d + ": mediaTypes.video is not present in the bidder settings."), !1;
                    var t = P.deepAccess(e, "mediaTypes.video.playerSize");
                    if (!t || !P.isArray(t)) return P.logError(d + ": mediaTypes.video.playerSize is not defined in the bidder settings."), !1;
                    if (!P.getBidIdParameter("channel_id", e.params)) return P.logError(d + ": channel_id is not present in bidder params"), !1;
                    if (("outstream" == P.deepAccess(e, "mediaTypes.video.context") || "outstream" == P.deepAccess(e, "params.ad_unit")) && !P.getBidIdParameter("outstream_function", e.params)) {
                        if (!P.getBidIdParameter("outstream_options", e.params)) return P.logError(d + ": please define outstream_options parameter or override the default SpotX outstream rendering by defining your own Outstream function using field outstream_function."), !1;
                        if (!P.getBidIdParameter("slot", e.params.outstream_options)) return P.logError(d + ": please define parameters slot outstream_options object in the configuration."), !1
                    }
                    return !0
                },
                buildRequests: function(e, h) {
                    var b = h.refererInfo.referer,
                        y = !!b.match(/^https:/);
                    return e.map(function(e) {
                        var t = P.getBidIdParameter("channel_id", e.params),
                            r = null,
                            a = P.deepAccess(e, "mediaTypes.video.playerSize"),
                            i = a[0][0],
                            d = a[0][1],
                            n = y || (P.getBidIdParameter("secure", e.params) ? 1 : 0),
                            o = {
                                sdk_name: "Prebid 1+",
                                versionOrtb: "2.3"
                            };
                        if ("" != P.getBidIdParameter("hide_skin", e.params) && (o.hide_skin = +!!P.getBidIdParameter("hide_skin", e.params)), "" != P.getBidIdParameter("ad_volume", e.params) && (o.ad_volume = P.getBidIdParameter("ad_volume", e.params)), "" != P.getBidIdParameter("ad_unit", e.params) && (o.ad_unit = P.getBidIdParameter("ad_unit", e.params)), "" != P.getBidIdParameter("outstream_options", e.params) && (o.outstream_options = P.getBidIdParameter("outstream_options", e.params)), "" != P.getBidIdParameter("outstream_function", e.params) && (o.outstream_function = P.getBidIdParameter("outstream_function", e.params)), "" != P.getBidIdParameter("custom", e.params) && (o.custom = P.getBidIdParameter("custom", e.params)), "" != P.getBidIdParameter("pre_market_bids", e.params) && P.isArray(P.getBidIdParameter("pre_market_bids", e.params))) {
                            var s = P.getBidIdParameter("pre_market_bids", e.params);
                            for (var p in o.pre_market_bids = [], s) {
                                var m = s[p],
                                    c = "";
                                m.vast_url ? c = '<?xml version="1.0" encoding="utf-8"?><VAST version="2.0"><Ad><Wrapper><VASTAdTagURI>' + m.vast_url + "</VASTAdTagURI></Wrapper></Ad></VAST>" : m.vast_string && (c = m.vast_string), o.pre_market_bids.push({
                                    id: m.deal_id,
                                    seatbid: [{
                                        bid: [{
                                            impid: Date.now(),
                                            dealid: m.deal_id,
                                            price: m.price,
                                            adm: c
                                        }]
                                    }],
                                    cur: m.currency,
                                    ext: {
                                        event_log: [{}]
                                    }
                                })
                            }
                        }
                        var u = P.getBidIdParameter("mimes", e.params) || ["application/javascript", "video/mp4", "video/webm"],
                            g = {
                                id: e.bidId,
                                secure: n,
                                video: {
                                    w: i,
                                    h: d,
                                    ext: o,
                                    mimes: u
                                }
                            };
                        "" != P.getBidIdParameter("price_floor", e.params) && (g.bidfloor = P.getBidIdParameter("price_floor", e.params)), "" != P.getBidIdParameter("start_delay", e.params) && (g.video.startdelay = 0 + Boolean(P.getBidIdParameter("start_delay", e.params))), e.crumbs && e.crumbs.pubcid && (r = e.crumbs.pubcid);
                        var l = navigator.language ? "language" : "userLanguage",
                            _ = {
                                h: screen.height,
                                w: screen.width,
                                dnt: P.getDNT() ? 1 : 0,
                                language: navigator[l].split("-")[0],
                                make: navigator.vendor ? navigator.vendor : "",
                                ua: navigator.userAgent
                            },
                            f = {
                                id: t,
                                imp: g,
                                site: {
                                    id: "",
                                    page: b,
                                    content: "content"
                                },
                                device: _,
                                ext: {
                                    wrap_response: 1
                                }
                            };
                        P.getBidIdParameter("number_of_ads", e.params) && (f.ext.number_of_ads = P.getBidIdParameter("number_of_ads", e.params));
                        var v = {};
                        return h && h.gdprConsent && (v.consent = h.gdprConsent.consentString, void 0 !== h.gdprConsent.gdprApplies && (f.regs = {
                            ext: {
                                gdpr: h.gdprConsent.gdprApplies ? 1 : 0
                            }
                        })), r && (v.fpc = r), P.isEmpty(v) || (f.user = {
                            ext: v
                        }), {
                            method: "POST",
                            url: "//search.spotxchange.com/openrtb/2.3/dados/" + t,
                            data: f,
                            bidRequest: h
                        }
                    })
                },
                interpretResponse: function(e, s) {
                    var p = [],
                        m = e.body;
                    return m && P.isArray(m.seatbid) && P._each(m.seatbid, function(e) {
                        P._each(e.bid, function(t) {
                            var e = {};
                            for (var r in s.bidRequest.bids) t.impid == s.bidRequest.bids[r].bidId && (e = s.bidRequest.bids[r]);
                            P._each(e.params.pre_market_bids, function(e) {
                                e.deal_id == t.id && (t.price = e.price, m.cur = e.currency)
                            });
                            var a = {
                                    requestId: e.bidId,
                                    currency: m.cur || "USD",
                                    cpm: t.price,
                                    creativeId: t.crid || "",
                                    ttl: 360,
                                    netRevenue: !0,
                                    channel_id: m.id,
                                    cache_key: t.ext.cache_key,
                                    vastUrl: "//search.spotxchange.com/ad/vast.html?key=" + t.ext.cache_key,
                                    mediaType: u.d,
                                    width: t.w,
                                    height: t.h
                                },
                                i = P.deepAccess(e, "mediaTypes.video.context"),
                                d = P.deepAccess(e, "params.ad_unit");
                            if ("outstream" == i || "outstream" == d) {
                                var n = P.deepAccess(e, "mediaTypes.video.playerSize"),
                                    o = c.a.install({
                                        id: 0,
                                        url: "//",
                                        config: {
                                            adText: "SpotX Outstream Video Ad via Prebid.js",
                                            player_width: n[0][0],
                                            player_height: n[0][1],
                                            content_page_url: P.deepAccess(s, "data.site.page"),
                                            ad_mute: +!!P.deepAccess(e, "params.ad_mute"),
                                            hide_skin: +!!P.deepAccess(e, "params.hide_skin"),
                                            outstream_options: P.deepAccess(e, "params.outstream_options"),
                                            outstream_function: P.deepAccess(e, "params.outstream_function")
                                        }
                                    });
                                try {
                                    o.setRender(g), o.setEventHandlers({
                                        impression: function() {
                                            return P.logMessage("SpotX outstream video impression event")
                                        },
                                        loaded: function() {
                                            return P.logMessage("SpotX outstream video loaded event")
                                        },
                                        ended: function() {
                                            P.logMessage("SpotX outstream renderer video event")
                                        }
                                    })
                                } catch (e) {
                                    P.logWarn("Prebid Error calling setRender or setEve,tHandlers on renderer", e)
                                }
                                a.renderer = o
                            }
                            p.push(a)
                        })
                    }), p
                }
            };

        function g(e) {
            var t = function(e) {
                var t = P.getBidIdParameter("slot", e.renderer.config.outstream_options);
                P.logMessage("[SPOTX][renderer] Handle SpotX outstream renderer");
                var r = window.document.createElement("script");
                r.type = "text/javascript", r.src = "//js.spotx.tv/easi/v1/" + e.channel_id + ".js";
                var a = {};
                a["data-spotx_channel_id"] = "" + e.channel_id, a["data-spotx_vast_url"] = "" + e.vastUrl, a["data-spotx_content_page_url"] = e.renderer.config.content_page_url, a["data-spotx_ad_unit"] = "incontent", P.logMessage("[SPOTX][renderer] Default beahavior"), P.getBidIdParameter("ad_mute", e.renderer.config.outstream_options) && (a["data-spotx_ad_mute"] = "0"), a["data-spotx_collapse"] = "0", a["data-spotx_autoplay"] = "1", a["data-spotx_blocked_autoplay_override_mode"] = "1", a["data-spotx_video_slot_can_autoplay"] = "1";
                var i = P.getBidIdParameter("playersize_auto_adapt", e.renderer.config.outstream_options);
                if (i && P.isBoolean(i) && !0 === i)
                    if (e.width && P.isNumber(e.width) && e.height && P.isNumber(e.height)) {
                        var d = e.width / e.height,
                            n = window.document.getElementById(t).clientWidth,
                            o = e.renderer.config.player_width,
                            s = e.renderer.config.player_height,
                            p = 0,
                            m = 0;
                        n < o && (s = (o = n) / d), m = d <= 1 ? (p = Math.round(s * d), s) : (p = o, Math.round(o / d)), a["data-spotx_content_width"] = "" + p, a["data-spotx_content_height"] = "" + m
                    } else P.logWarn("[SPOTX][renderer] PlayerSize auto adapt: bid.width and bid.height are incorrect");
                var c = P.getBidIdParameter("custom_override", e.renderer.config.outstream_options);
                if (c && P.isPlainObject(c))
                    for (var u in P.logMessage("[SPOTX][renderer] Custom beahavior."), c) c.hasOwnProperty(u) && ("channel_id" === u || "vast_url" === u || "content_page_url" === u || "ad_unit" === u ? P.logWarn("[SPOTX][renderer] Custom beahavior: following option cannot be overrided: " + u) : a["data-spotx_" + u] = c[u]);
                for (var g in a) a.hasOwnProperty(g) && r.setAttribute(g, a[g]);
                return r
            }(e);
            if (null != e.renderer.config.outstream_function && "function" == typeof e.renderer.config.outstream_function) e.renderer.config.outstream_function(e, t);
            else try {
                var r = P.getBidIdParameter("in_iframe", e.renderer.config.outstream_options);
                if (r && "IFRAME" == window.document.getElementById(r).nodeName) {
                    var a = window.document.getElementById(r),
                        i = a.contentDocument;
                    !i && a.contentWindow && (i = a.contentWindow.document), i.body.appendChild(t)
                } else {
                    var d = P.getBidIdParameter("slot", e.renderer.config.outstream_options);
                    d && window.document.getElementById(d) ? window.document.getElementById(d).appendChild(t) : window.document.getElementsByTagName("head")[0].appendChild(t)
                }
            } catch (e) {
                P.logError("[SPOTX][renderer] Error:" + e.message)
            }
        }
        Object(a.registerBidder)(n)
    }
}, [574]);
pbjs.processQueue();
var aiptag = aiptag || {};
aiptag.cmd = aiptag.cmd || [];
aiptag.cmd.display = aiptag.cmd.display || [];
aiptag.cmd.player = aiptag.cmd.player || [];
aiptag.cmd.queue = aiptag.cmd.queue || [];
var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

function aipAPI() {
    try {
        window.console.log.apply(console, '\n %c %c %c AdinPlay 2.0 \u2730 NTC \u2730  %c  %c  ads by http://www.adinplay.com/  %c %c %c%c \n\n,background: #9C0013; padding:5px 0;,background: #9C0013; padding:5px 0;,color: #FFFFFF; background: #030307; padding:5px 0;,background: #9C0013; padding:5px 0;,color: #FFFFFF;background: #DB0028; padding:5px 0;,background: #9C0013; padding:5px 0;,color: #ff2424; background: #fff; padding:5px 0;,color: #ff2424; background: #fff; padding:5px 0;,color: #ff2424; background: #fff; padding:5px 0;,background:url("https://adinplay.com/wp-content/uploads/2013/08/copy-adinplay-logo.png");padding:160px 300px;background-repeat:no-repeat;'.split(","))
    } catch (c) {}
    this.debug = this.validateQueryParams("aip_debug", "true");
    this.aipAds = null;
    this.sdkBlocked = this.gptBlocked = this.gptLoaded = this.started = !1;
    this.timeout_bid_display = 900;
    this.timeout_bid_player = 1500;
    this.timeout_reload_display = 5E3;
    this.queue_ready_display = !0;
    this.hidden_slot_retry = 0;
    this.adUnits = [];
    this.adSlots = [];
    this.adSlot = [];
    this.adUnitsLoaded = [];
    this.adUnitsRefreshed = [];
    this.adUnitsPercentage = [];
    this.adUnitsRefreshFlag = [];
    this.gdpr = [];
    this.gdpr.googleConsent;
    this.gdpr.googleId = 1500;
    this.protocol = (this.useSSL = "https:" === document.location.protocol.toLowerCase()) ? "https://" : "http://";
    this.forceUserFrom = this.validateQueryParams("forceUserFrom", "EEA");
    this.displayBidCpm = [];
    this.aipAPIrewardedSlotId = "/421469808/yohoho.io_preroll-1";
    this.completedTimeoutRewarded = this.aipAPIrewardedSlot = null;
    this.prerollSkipped = !1;
    var a = ("; " + document.cookie).split("; userFromEEA=");
    2 === a.length && (this.userFromEEA = a.pop().split(";").shift());
    !0 === this.forceUserFrom && (this.userFromEEA = !0);
    this.adUnits["yohoho-io_300x250"] = [{
        code: "yohoho-io_300x250",
        mediaTypes: {
            banner: {
                sizes: [300,
                    250
                ]
            }
        },
        bids: [{
            bidder: "appnexus",
            params: {
                placementId: "14506716"
            }
        }, {
            bidder: "openx",
            params: {
                unit: "540728692",
                delDomain: "adinplay-d.openx.net"
            }
        }, {
            bidder: "pubmatic",
            params: {
                publisherId: "156857",
                adSlot: "2082287@300x250"
            }
        }, {
            bidder: "33across",
            params: {
                siteId: "dttE0iDI0r6yHvaKkv7mNO",
                productId: "siab"
            }
        }, {
            bidder: "ix",
            params: {
                siteId: "378494",
                size: [300, 250]
            }
        }, {
            bidder: "rhythmone",
            params: {
                placementId: "83908"
            }
        }, {
            bidder: "sovrn",
            params: {
                tagid: "644089"
            }
        }]
    }];
    this.adSlots["yohoho-io_300x250"] = {
        adunit: "yohoho.io_300x250",
        sizes: [300, 250],
        reload: !0
    };
    this.adUnits["yohoho-io_970x250"] = [{
        code: "yohoho-io_970x250",
        mediaTypes: {
            banner: {
                sizes: [970, 250]
            }
        },
        bids: [{
            bidder: "appnexus",
            params: {
                placementId: "15830192"
            }
        }, {
            bidder: "openx",
            params: {
                unit: "540728694",
                delDomain: "adinplay-d.openx.net"
            }
        }, {
            bidder: "pubmatic",
            params: {
                publisherId: "156857",
                adSlot: "2082289@970x250"
            }
        }, {
            bidder: "33across",
            params: {
                siteId: "dcxIZyDI0r6ykeaKkGJozW",
                productId: "siab"
            }
        }, {
            bidder: "ix",
            params: {
                siteId: "383978",
                size: [300, 250]
            }
        }, {
            bidder: "rhythmone",
            params: {
                placementId: "83908"
            }
        }, {
            bidder: "sovrn",
            params: {
                tagid: "644090"
            }
        }]
    }];
    this.adSlots["yohoho-io_970x250"] = {
        adunit: "yohoho.io_970x250",
        sizes: [970, 250],
        reload: !0
    };
    try {
        window.matchMedia("(max-width: 600px)").matches ? (this.adSlots["yohoho-io_300x250"].sizes = [
            [300, 250],
            [320, 50],
            [320, 100]
        ], this.adUnits["yohoho-io_300x250"][0].mediaTypes.banner.sizes = [
            [300, 250],
            [320, 50],
            [320, 100]
        ], this.adUnits["yohoho-io_300x250"][0].bids.push({
            bidder: "ix",
            params: {
                siteId: "378494",
                size: [320, 50]
            }
        }), this.adUnits["yohoho-io_300x250"][0].bids.push({
            bidder: "ix",
            params: {
                siteId: "378494",
                size: [320, 100]
            }
        })) : window.matchMedia("(min-width: 1150px) and (min-height: 600px)").matches && (this.adSlots["yohoho-io_300x250"].sizes = [
            [300, 250],
            [336, 280],
            [300, 600],
            [160, 600]
        ], this.adUnits["yohoho-io_300x250"][0].mediaTypes.banner.sizes = [
            [300, 250],
            [336, 280],
            [300, 600],
            [160, 600]
        ], this.adUnits["yohoho-io_300x250"][0].bids.push({
            bidder: "ix",
            params: {
                siteId: "378494",
                size: [300, 600]
            }
        }), this.adUnits["yohoho-io_300x250"][0].bids.push({
            bidder: "ix",
            params: {
                siteId: "378494",
                size: [336, 280]
            }
        }), this.adUnits["yohoho-io_300x250"][0].bids.push({
            bidder: "ix",
            params: {
                siteId: "378494",
                size: [160, 600]
            }
        })), window.matchMedia("(max-width: 360px)").matches ? (this.adSlots["yohoho-io_970x250"].sizes = [
            [320, 100],
            [320, 50]
        ], this.adUnits["yohoho-io_970x250"][0].mediaTypes.banner.sizes = [
            [320, 100],
            [320, 50]
        ], this.adUnits["yohoho-io_970x250"][0].bids.push({
            bidder: "ix",
            params: {
                siteId: "383978",
                size: [320, 100]
            }
        }), this.adUnits["yohoho-io_970x250"][0].bids.push({
            bidder: "ix",
            params: {
                siteId: "383978",
                size: [320, 50]
            }
        })) : (window.matchMedia("(max-width: 980px)").matches ? (this.adSlots["yohoho-io_970x250"].sizes = [
            [300, 250],
            [728, 90],
            [336, 280]
        ], this.adUnits["yohoho-io_970x250"][0].mediaTypes.banner.sizes = [
            [300, 250],
            [728, 90],
            [336, 280]
        ], this.adUnits["yohoho-io_970x250"][0].bids.push({
            bidder: "ix",
            params: {
                siteId: "383978",
                size: [300, 250]
            }
        })) : (this.adSlots["yohoho-io_970x250"].sizes = [
            [970, 250],
            [970, 90],
            [300, 250],
            [728, 90],
            [336, 280]
        ], this.adUnits["yohoho-io_970x250"][0].mediaTypes.banner.sizes = [
            [970, 250],
            [970, 90],
            [300, 250],
            [728, 90],
            [336, 280]
        ], this.adUnits["yohoho-io_970x250"][0].bids.push({
            bidder: "ix",
            params: {
                siteId: "383978",
                size: [300, 250]
            }
        }), this.adUnits["yohoho-io_970x250"][0].bids.push({
            bidder: "ix",
            params: {
                siteId: "383978",
                size: [970, 90]
            }
        })), this.adUnits["yohoho-io_970x250"][0].bids.push({
            bidder: "ix",
            params: {
                siteId: "383978",
                size: [728, 90]
            }
        }), this.adUnits["yohoho-io_970x250"][0].bids.push({
            bidder: "ix",
            params: {
                siteId: "383978",
                size: [336, 280]
            }
        })), this.inIframe() || (this.adUnits["yohoho-io_970x250"][0].mediaTypes.video = {
            context: "outstream",
            playerSize: [300, 250]
        })
    } catch (c) {}
}
aipAPI.prototype.detectBlockedAds = function() {
    (function() {
        var a = document.createElement("script");
        a.async = !0;
        a.onerror = function() {
            aipAPItag.gptBlocked = !0
        };
        a.type = "text/javascript";
        a.src = aipAPItag.protocol + "api.adinplay.com/libs/aiptag/assets/adsbygoogle.js";
        var c = document.getElementsByTagName("script")[0];
        c.parentNode.insertBefore(a, c)
    })()
};
aipAPI.prototype.initGPT = function() {
    googletag.cmd.push(function() {
        googletag.pubads().disableInitialLoad()
    });
    aipAPItag.gptLoaded || (function() {
        var a = document.createElement("script");
        a.async = !0;
        a.type = "text/javascript";
        a.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
        var c = document.getElementsByTagName("script")[0];
        c.parentNode.insertBefore(a, c)
    }(), aipAPItag.gptLoaded = !0)
};
aipAPI.prototype.initGDPR = function() {
    !0 === aiptag.gdprShowConsentTool && window.navigator.cookieEnabled ? function(a, c) {
        if ("false" === aipAPItag.userFromEEA) aipAPItag.log("userFromEEA cookie value=false, user not from EEA, start showing ads"), aipAPItag.start();
        else if (a.__cmp) aipAPItag.log("CMP already loaded, start showing ads"), aipAPItag.start();
        else {
            var b = function() {
                    var a = "none";
                    !0 === aiptag.gdprShowConsentToolButton && (a = "block");
                    try {
                        if (!aipAPItag.isInPage(c.getElementById("cmpPersistentLink"))) {
                            var b = c.createElement("div");
                            c.getElementsByTagName("body")[0].appendChild(b);
                            b.id = "cmpPersistentLink";
                            b.style.display = a;
                            b.innerHTML = '<a onclick="window.__cmp(\'showConsentToolSettings\')" class="cmp-persistent-link" style="cursor: pointer; position: fixed; background-color: #1f83be; padding: 5px 15px; color: #ffffff; display: flex; max-height: 30px; z-index: 999994; bottom: 0px; left: 0px; border-top-left-radius: 3px; border-top-right-radius: 3px;"><svg width="16px" height="17px" viewBox="0 0 16 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin-right: 5px; height: 17px;"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="cog" fill="#FFFFFF" fill-rule="nonzero"><path d="M15.596917,9.98326938 L14.5041079,9.33798816 C14.5728064,8.7815386 14.5728064,8.2184614 14.5041079,7.66201184 L15.596917,7.01673062 C15.9178229,6.82726259 16.0726124,6.43742732 15.9670848,6.0741546 C15.5912871,4.78033611 14.9223646,3.61573153 14.0390021,2.66061113 C13.7831755,2.38401797 13.3749053,2.32348965 13.0525249,2.51384881 L11.9613243,3.15813608 C11.5248519,2.81840117 11.0481221,2.53648663 10.542482,2.31910255 L10.542482,1.02991108 C10.542482,0.648438733 10.2860522,0.316869683 9.92305592,0.229024792 C8.66155,-0.07632446 7.33871809,-0.0763587342 6.07694408,0.229024792 C5.71398131,0.316869683 5.457518,0.648404458 5.457518,1.02991108 L5.457518,2.31910255 C4.95187406,2.53647872 4.47514334,2.81839382 4.03867572,3.15813608 L2.94747511,2.51384881 C2.62506122,2.32348965 2.21679094,2.38401797 1.96099786,2.66061113 C1.07763542,3.61573153 0.40871289,4.78037038 0.0329152236,6.0741546 C-0.072612407,6.43742732 0.0821770899,6.82722832 0.403082962,7.01673062 L1.49589212,7.66201184 C1.42719356,8.2184614 1.42719356,8.7815386 1.49589212,9.33798816 L0.403082962,9.98326938 C0.0821770899,10.1727374 -0.072612407,10.5625727 0.0329152236,10.9258454 C0.40871289,12.2196296 1.07763542,13.3842685 1.96099786,14.3393889 C2.21682445,14.615982 2.62509474,14.6765103 2.94747511,14.4861855 L4.03867572,13.8418982 C4.47514096,14.1816349 4.95187243,14.4635389 5.457518,14.6808975 L5.457518,15.9700889 C5.457518,16.3515613 5.7139478,16.6831303 6.07694408,16.7709752 C7.33848351,17.0763245 8.66128191,17.0763587 9.92305592,16.7709752 C10.2860187,16.6831303 10.542482,16.3515955 10.542482,15.9700889 L10.542482,14.6808975 C11.0481183,14.4635198 11.5248475,14.1816171 11.9613243,13.8418982 L13.0525249,14.4861855 C13.3749053,14.6765446 13.7831755,14.6160163 14.0390021,14.3393889 C14.9223646,13.3842685 15.5912871,12.2196296 15.9670848,10.9258454 C16.0726124,10.5625727 15.9178229,10.1727717 15.596917,9.98326938 Z M13.4026193,13.4264943 L11.8507364,12.510001 C10.9463288,13.3007421 10.6255905,13.4997041 9.47011484,13.9172673 L9.47011484,15.7502196 C8.50024808,15.9548373 7.49975192,15.9548373 6.52988516,15.7502196 L6.52988516,13.9172673 C5.4031959,13.5101235 5.07699522,13.3210668 4.14926358,12.510001 L2.59738075,13.4264943 C1.9368696,12.6693763 1.43490124,11.7817076 1.12525522,10.8230912 L2.67780828,9.90659789 C2.4588108,8.69270694 2.45871027,8.30790999 2.67780828,7.09340211 L1.12525522,6.17690879 C1.43490124,5.21829242 1.93690311,4.33058946 2.59738075,3.57312864 L4.14926358,4.49030745 C5.0667072,3.68712478 5.39129933,3.4941265 6.52988516,3.08269846 L6.52988516,1.24978037 C7.49971774,1.04482059 8.50028226,1.04482059 9.47011484,1.24978037 L9.47011484,3.08273274 C10.6087677,3.49419505 10.9333933,3.6872276 11.8507364,4.49034172 L13.4026193,3.57316291 C14.0630969,4.33058946 14.5650988,5.21829242 14.8747448,6.17694306 L13.3221917,7.09343638 C13.5412227,8.3076358 13.5412897,8.69212428 13.3221917,9.90663217 L14.8747448,10.8231255 C14.5650988,11.7817076 14.0631304,12.6694105 13.4026193,13.4264943 Z M8,5.20968958 C6.22607014,5.20968958 4.78289853,6.68570996 4.78289853,8.50001714 C4.78289853,10.3143243 6.22607014,11.7903447 8,11.7903447 C9.77392986,11.7903447 11.2171015,10.3143243 11.2171015,8.50001714 C11.2171015,6.68570996 9.77392986,5.20968958 8,5.20968958 Z M8,10.6935688 C6.81738009,10.6935688 5.85526568,9.70955526 5.85526568,8.50001714 C5.85526568,7.29047902 6.81738009,6.30646543 8,6.30646543 C9.18261991,6.30646543 10.1447343,7.29047902 10.1447343,8.50001714 C10.1447343,9.70955526 9.18261991,10.6935688 8,10.6935688 Z" id="Shape"></path></g></g></svg>Privacy settings</a>'
                        }
                    } catch (u) {}
                },
                d = function() {
                    a.__cmp("getVendorConsents", [aipAPItag.gdpr.googleId], function(a) {
                        a = a.vendorConsents[aipAPItag.gdpr.googleId];
                        aipAPItag.gdpr.googleConsent = a;
                        aipAPItag.log("Google consent: " + a);
                        "undefined" === typeof a || !1 === a ? googletag.cmd.push(function() {
                            aipAPItag.log("Setting DFP to deliver non targeted ads...");
                            googletag.pubads().setRequestNonPersonalizedAds(1)
                        }) : googletag.cmd.push(function() {
                            aipAPItag.log("Setting DFP to deliver targeted ads...");
                            googletag.pubads().setRequestNonPersonalizedAds(0)
                        })
                    })
                },
                g = function() {
                    var a = ("; " + c.cookie).split("; euconsent=");
                    a = 2 === a.length ? a.pop().split(";").shift() : void 0;
                    return "undefined" === typeof a ? !1 : !0
                },
                e = function(b, d, g, e, q) {
                    "undefined" === typeof q && (q = "/");
                    "undefined" === typeof e ? (e = (a && a.location && a.location.hostname || "").split("."), e = ";domain=" + (1 < e.length ? e.slice(-2).join(".") : "")) : e = "";
                    var n = new Date;
                    n.setSeconds(n.getSeconds() + g);
                    c.cookie = b + " = " + d + e + ";path=" + q + ";max-age=" + g + ";Expires=" + n.toUTCString()
                },
                h = function() {
                    aiptag.gdprVendors = {
                        id: aipAPItag.gdpr.googleId,
                        name: "Google LLC",
                        policyUrl: "https://policies.google.com/technologies/ads",
                        purposeIds: [1, 2, 3, 4, 5],
                        legIntPurposeIds: [],
                        featureIds: [1, 2, 3]
                    };
                    a.__cmp = function() {
                        function b() {
                            if (!a.frames.__cmpLocator)
                                if (c.body) {
                                    var d = c.createElement("iframe");
                                    d.style.display = "none";
                                    d.name = "__cmpLocator";
                                    c.body.appendChild(d)
                                } else setTimeout(b, 5)
                        }(a.attachEvent || a.addEventListener)("message", function(b) {
                            a.__cmp.receiveMessage(b)
                        }, !1);
                        b();
                        var d = [],
                            e = function(b, c, e) {
                                "ping" === b ? e && e({
                                    gdprAppliesGlobally: !!(a.__cmp && a.__cmp.config && a.__cmp.config.gdprAppliesGlobally),
                                    cmpLoaded: !1
                                }) : d.push({
                                    command: b,
                                    parameter: c,
                                    callback: e
                                })
                            };
                        e.commandQueue = d;
                        e.receiveMessage = function(a) {
                            var b = a && a.data && a.data.__cmpCall;
                            b && d.push({
                                callId: b.callId,
                                command: b.command,
                                parameter: b.parameter,
                                event: a
                            })
                        };
                        e.config = {
                            gdprAppliesGlobally: !1,
                            storeConsentGlobally: !1,
                            forceLocale: "en-us"
                        };
                        return e
                    }();
                    a.__cmp("addEventListener", "onSubmit", function(a) {
                        d();
                        b();
                        aipAPItag.start()
                    });
                    a.__cmp("addEventListener", "cmpReady", function(e) {
                        try {
                            clearTimeout(aipAPItag.GDPRloadTimeout)
                        } catch (q) {}
                        if ("bottom" === aiptag.gdprConsentToolPosition) try {
                            c.getElementById("aip_gdpr_banner").style.top = "auto", c.getElementById("aip_gdpr_message").style.maxWidth = "none", c.getElementById("aip_gdpr_message").style.paddingTop = "0", c.getElementById("aip_gdpr_message").style.paddingBottom = "0", c.getElementById("aip_gdpr_title").style.fontSize = "19px", c.getElementById("aip_gdpr_title").style.padding = "0", c.getElementById("aip_gdpr_continue").style.height = "40px", c.getElementById("aip_gdpr_continue").style.lineHeight = "40px", c.getElementById("aip_gdpr_learnmore").style.height = "25px", c.getElementById("aip_gdpr_learnmore").style.lineHeight = "25px", c.getElementById("aip_gdpr_banner").style.boxShadow = "0 0 5px #1f83be", c.getElementById("aip_gdpr_banner").style.backgroundColor = "#ffffff", c.getElementById("aip_gdpr_banner").style.fontSize = "medium", c.getElementById("aip_gdpr_banner").style.lineHeight = "normal", c.getElementById("aip_gdpr_title").style.textAlign = "left", c.getElementById("aip_gdpr_consent").style.maxWidth = "100%", c.getElementById("aip_gdpr_content").style.maxWidth = "890px"
                        } catch (q) {}
                        if (g()) {
                            var h;
                            a.__cmp("getVendorList", null, function(a) {
                                h = a.vendorListVersion
                            });
                            var l;
                            a.__cmp("getVendorConsents", null, function(a) {
                                l = a.vendorListVersion
                            });
                            aipAPItag.log("globalVendorListVersion: " + h);
                            aipAPItag.log("consentsVendorListVersion: " + l);
                            h !== l && aipAPItag.log("Global vendor list version does not match consents cookie vendor list version. Starting CMP.");
                            d();
                            b();
                            aipAPItag.start()
                        } else a.__cmp("showConsentTool"), "bottom" === aiptag.gdprConsentToolPosition && (aipAPItag.log("CMP tool used but ads loaded with no consent, start showing ads"), aipAPItag.gdpr.googleConsent = !1, aipAPItag.start())
                    });
                    var e = c.createElement("script");
                    e.async = !0;
                    e.src = aipAPItag.protocol + "api.adinplay.com/libs/gdpr/cmp/cmp.bundle.js";
                    c.getElementsByTagName("head")[0].appendChild(e)
                };
            aipAPItag.GDPRloadTimeout = setTimeout(function() {
                aipAPItag.log("GDPR timeout occured, assuming user from EEA, start showing ads");
                aipAPItag.gdpr.googleConsent = !1;
                aipAPItag.start()
            }, 3E3);
            if (g()) h();
            else if ("true" === aipAPItag.userFromEEA) aipAPItag.log("userFromEEA cookie value=true, user from EEA, GDPR Consent required"),
                h();
            else {
                var l = new XMLHttpRequest;
                l.onreadystatechange = function() {
                    if (l.readyState == XMLHttpRequest.DONE)
                        if (200 == l.status) {
                            var a = l.responseText.toUpperCase();
                            0 <= "CH IS LI NO AT BE BG CY CZ DE DK EE ES FI FR GR HR HU IE IT LT LU LV MT NL PL PT RO SE SI SK GB".split(" ").indexOf(a) ? (e("userFromEEA", "true", "7889229"), aipAPItag.log("GDPR Consent required for " + a), h()) : (e("userFromEEA", "false", "7889229"), aipAPItag.log("GDPR Consent not required for " + a), aipAPItag.start())
                        } else aipAPItag.log("Unknown geo-targeting issue, assuming user from EEA"),
                            h()
                };
                l.ontimeout = function(a) {
                    aipAPItag.log("Geo-targeting timeout occured, assuming user from EEA");
                    h()
                };
                l.open("GET", aipAPItag.protocol + "geo.adinplay.com/geoip/country.php", !0);
                l.timeout = 1500;
                l.send()
            }
        }
    }(window, document) : (aipAPItag.log("CMP tool not used, start showing ads"), aipAPItag.start())
};
aipAPI.prototype.initDisplayTag = function() {
    aiptag.cmd.display.push = function(a) {
        Array.prototype.push.apply(this, arguments);
        aipAPItag.executeDisplayCmd()
    };
    aipAPItag.executeDisplayCmd()
};
aipAPI.prototype.executeDisplayCmd = function() {
    for (k = 0; k < aiptag.cmd.display.length; k++) aiptag.cmd.display[k]();
    aiptag.cmd.display.length = 0
};
aipAPI.prototype.initPlayerTag = function() {
    aiptag.cmd.player.push = function(a) {
        Array.prototype.push.apply(this, arguments);
        aipAPItag.executePlayerCmd()
    };
    aipAPItag.executePlayerCmd()
};
aipAPI.prototype.executePlayerCmd = function() {
    for (k = 0; k < aiptag.cmd.player.length; k++) aiptag.cmd.player[k]();
    aiptag.cmd.player.length = 0
};
aipAPI.prototype.showConsentToolSettings = function() {
    try {
        window.__cmp("showConsentToolSettings")
    } catch (a) {}
};
aipAPI.prototype.showConsentToolButton = function() {
    try {
        document.getElementById("cmpPersistentLink").style.display = "block"
    } catch (a) {}
};
aipAPI.prototype.hideConsentToolButton = function() {
    try {
        document.getElementById("cmpPersistentLink").style.display = "none"
    } catch (a) {}
};
aipAPI.prototype.isHidden = function(a) {
    a = document.getElementById(a);
    var c = !1;
    try {
        null === a && (c = !0), c = null === a.offsetParent
    } catch (b) {}
    return c
};
aipAPI.prototype.validateQueryParams = function(a, c) {
    return -1 !== window.location.href.indexOf(a + "=" + c) ? !0 : !1
};
aipAPI.prototype.urlParamUpdate = function(a, c, b, d) {
    var g = new RegExp("[\\?&]" + c + "=([^&#]*)", "i"),
        e = g.exec(a);
    if (null === e) d = /\?/.test(a), a = a + (d ? "&" : "?") + c + "=" + b;
    else {
        var h = e[0].charAt(0);
        a = !0 === d ? a.replace(g, h + c + "=" + e[1] + "%26" + b) : a.replace(g, h + c + "=" + b)
    }
    return a
};
aipAPI.prototype.restoreLog = function() {
    try {
        if (!("console" in window && "firebug" in console)) {
            console.log = null;
            console.log;
            delete console.log;
            var a = document.createElement("iframe");
            a.style.display = "none";
            document.body.appendChild(a);
            window.console = a.contentWindow.console
        }
    } catch (c) {}
};
aipAPI.prototype.log = function(a, c) {
    if (this.debug) {
        aipAPItag.restoreLog();
        try {
            if ("string" == typeof a) {
                var b = (new Date).toLocaleTimeString();
                b += ":" + (new Date).getMilliseconds();
                window.console.log.apply(console, ["%cAdinPlay", "display: inline-block; color: #fff; background: #DD0420; padding: 1px 4px; border-radius: 3px;", b, a])
            } else console.log(a);
            c && console.log(c)
        } catch (d) {}
    }
};
aipAPI.prototype.getScript = function(a, c) {
    var b = document.head || document.getElementsByTagName("head")[0],
        d = document.createElement("script"),
        g = !0;
    d.async = "async";
    d.type = "text/javascript";
    d.charset = "UTF-8";
    d.src = a;
    d.onerror = d.onload = d.onreadystatechange = function() {
        !g || d.readyState && !/loaded|complete/.test(d.readyState) || (g = !1, c(), d.onerror = d.onload = d.onreadystatechange = null)
    };
    b.appendChild(d)
};
aipAPI.prototype.sdkLoaded = function() {
    return "undefined" != typeof google && google && "undefined" != typeof google.ima && google.ima ? !0 : !1
};
aipAPI.prototype.isInPage = function(a) {
    try {
        return a === document.body ? !1 : document.body.contains(a)
    } catch (c) {
        return !1
    }
};
aipAPI.prototype.isMobile = function() {
    try {
        if (/Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return !0
    } catch (a) {}
    return !1
};
aipAPI.prototype.wait = function(a, c, b, d, g) {
    var e = 0,
        h = function() {
            e += a;
            b() ? d() : e >= c ? g() : setTimeout(h, a)
        };
    h()
};
aipAPI.prototype.inIframe = function() {
    try {
        return window.self !== window.top
    } catch (a) {
        return !0
    }
};
aipAPI.prototype.forceRedraw = function(a) {
    if (a) {
        var c = document.createTextNode(" "),
            b = a.style.display;
        a.appendChild(c);
        a.style.display = "none";
        setTimeout(function() {
            a.style.display = b;
            c.parentNode.removeChild(c)
        }, 20);
        aipAPItag.log("forceRedraw")
    }
};
aipAPI.prototype.inArray = function(a, c) {
    for (var b = 0, d = 0, g = c.length; d < g; d++) {
        if (c[d] == a) return d;
        b++
    }
    return -1
};
aipAPI.prototype.sendEvent = function(a) {
    this.log(a);
    aipSendEvent(a)
};
var aipSendEvent = function(a) {};
aipAPI.prototype.setCurrency = function() {
    pbjs.que.push(function() {
        pbjs.setConfig({
            currency: {
                adServerCurrency: "EUR",
                granularityMultiplier: 1,
                bidderCurrencyDefault: {
                    openx: "EUR"
                }
            }
        })
    })
};
aipAPI.prototype.getAllWinningBids = function() {
    (function() {
        var a = pbjs.getBidResponses(),
            c = pbjs.getAllWinningBids(),
            b = [];
        Object.keys(a).forEach(function(d) {
            a[d].bids.forEach(function(a) {
                b.push({
                    bid: a,
                    adunit: d,
                    adId: a.adId,
                    bidder: a.bidder,
                    time: a.timeToRespond,
                    cpm: a.cpm,
                    msg: a.statusMessage,
                    rendered: !!c.find(function(b) {
                        return b.adId == a.adId
                    })
                })
            })
        });
        if (b.length)
            if (console.table) console.table(b);
            else
                for (var d = 0; d < b.length; d++) console.log(b[d]);
        else console.warn("NO prebid responses")
    })()
};
aipAPI.prototype.getHighestCpmBids = function() {
    for (var a = pbjs.getHighestCpmBids(), c = [], b = 0; b < a.length; b++) {
        var d = a[b];
        c.push({
            adunit: d.adUnitCode,
            adId: d.adId,
            bidder: d.bidder,
            time: d.timeToRespond,
            cpm: d.cpm
        })
    }
    if (c.length)
        if (console.table) console.table(c);
        else
            for (a = 0; a < c.length; a++) console.log(c[a]);
    else console.warn("No prebid winners")
};
aipAPI.prototype.start = function() {
    try {
        clearTimeout(aipAPItag.GDPRloadTimeout)
    } catch (c) {}
    if (!0 !== aipAPItag.started) {
        aipAPItag.started = !0;
        aipDisplayTag = new aipDisplay;
        aipDisplayTag.displayInit();
        aipAPItag.initDisplayTag();
        aipAPItag.sdkLoaded() ? aipAPItag.initPlayerTag() : aipAPItag.getScript("//imasdk.googleapis.com/js/sdkloader/ima3.js", function() {
            aipAPItag.initPlayerTag();
            aipAPItag.sdkLoaded() || (aipAPItag.sdkBlocked = !0)
        });
        try {
            if ("function" === typeof aipGDPRCallback_OnAccept) {
                var a = !0;
                !1 === aipAPItag.getConsent() && (a = !1);
                aipGDPRCallback_OnAccept(a)
            }
        } catch (c) {}
    }
};
aipAPI.prototype.getConsent = function() {
    if ("false" === aipAPItag.userFromEEA) return aipAPItag.log("Consent not needed user not from: EEA"), !0;
    if (!1 === aipAPItag.gdpr.googleConsent) return aipAPItag.log("Consent: not given: aipAPItag.gdpr.googleConsent=false"), !1;
    if (!0 !== aiptag.gdprShowConsentTool && !1 === aiptag.gdprConsent) return aipAPItag.log("Consent: not given: aiptag.gdprShowConsentTool !== true & aiptag.gdprConsent = false"), !1;
    aipAPItag.log("Consent: given");
    return !0
};

function aipDisplay() {}
aipDisplay.prototype.displayInit = function() {};
aipDisplay.prototype.displaySetup = function(a) {
    pbjs.que.push(function() {
        aipAPItag.displayBidCpm.rhythmone = .9;
        aipAPItag.displayBidCpm.rubicon = .62;
        aipAPItag.displayBidCpm.GumGum = .95;
        pbjs.bidderSettings = {
            rhythmone: {
                bidCpmAdjustment: function(a, b) {
                    aipAPItag.log("Bid adjust for: " + b.bidderCode);
                    return a * aipAPItag.displayBidCpm.rhythmone
                }
            },
            rubicon: {
                bidCpmAdjustment: function(a, b) {
                    aipAPItag.log("Bid adjust for: " + b.bidderCode);
                    return a * aipAPItag.displayBidCpm.rubicon
                }
            },
            gumgum: {
                bidCpmAdjustment: function(a, b) {
                    aipAPItag.log("Bid adjust for: " + b.bidderCode);
                    return a * aipAPItag.displayBidCpm.GumGum
                }
            }
        };
        aipAPItag.debug && pbjs.setConfig({
            debug: !0
        });
        pbjs.setConfig({
            userSync: {
                iframeEnabled: !0,
                useBidCache: !0,
                syncsPerBidder: 99999,
                filterSettings: {
                    iframe: {
                        bidders: "*",
                        filter: "include"
                    }
                },
                syncDelay: 6E3
            },
            bidderTimeout: aipAPItag.timeout_bid_display,
            enableSendAllBids: !0,
            bidderSequence: "random",
            priceGranularity: {
                buckets: [{
                    precision: 2,
                    min: 0,
                    max: .5,
                    increment: .01
                }, {
                    precision: 2,
                    min: .5,
                    max: 5,
                    increment: .05
                }, {
                    precision: 2,
                    min: 5,
                    max: 10,
                    increment: .1
                }, {
                    precision: 2,
                    min: 10,
                    max: 20,
                    increment: .5
                }]
            },
            publisherDomain: aipAPItag.protocol + "api.adinplay.com"
        })
    })
};
aipDisplay.prototype.clear = function(a) {
    googletag.cmd.push(function() {
        googletag.pubads().clear([aipAPItag.adSlot[a]]);
        aipAPItag.log("AD SLOT CLEARED: " + a)
    })
};
aipDisplay.prototype.destroy = function(a) {
    googletag.cmd.push(function() {
        googletag.destroySlots([aipAPItag.adSlot[a]]);
        aipAPItag.adUnitsLoaded[a] = null;
        aipAPItag.log("AD SLOT DESTROYED: " + a)
    })
};
aipDisplay.prototype.setReload = function(a) {
    aipAPItag.adSlots[a].reload = !0
};
aipDisplay.prototype.unsetReload = function(a) {
    aipAPItag.adSlots[a].reload = !1
};
aipDisplay.prototype.getReload = function(a) {
    return aipAPItag.adSlots[a].reload
};
aipDisplay.prototype.display = function(a) {
    aipAPItag.log("AD SLOT DISPLAY: " + a);
    aipDisplayTag.refresh(a)
};
aipDisplay.prototype.refresh = function(a) {
    aipAPItag.log("AD SLOT REFRESH: " + a);
    aiptag.cmd.queue.push(aipDisplayTag.wrapFunction(aipDisplayTag.refreshTag, this, [a]));
    aipDisplayTag.nextQueue()
};
aipDisplay.prototype.refreshTag = function(a) {
    aipAPItag.queue_ready_display = !0;
    if (aipDisplayTag.getReload(a)) {
        aipAPItag.adUnitsRefreshed[a] || (aipAPItag.adUnitsRefreshed[a] = 0);
        aipAPItag.adUnitsRefreshed[a]++;
        try {
            aipAPItag.log("aiptag.gdprConsent: " + aiptag.gdprConsent)
        } catch (b) {}!1 === aipAPItag.getConsent() ? googletag.cmd.push(function() {
            aipAPItag.log("Setting DFP to deliver non targeted ads...");
            googletag.pubads().setRequestNonPersonalizedAds(1)
        }) : googletag.cmd.push(function() {
            aipAPItag.log("Setting DFP to deliver targeted ads...");
            googletag.pubads().setRequestNonPersonalizedAds(0)
        });
        if (aipAPItag.inIframe()) {
            aipAPItag.log("iframe display AD");
            googletag.cmd.push(function() {
                googletag.pubads().setTargeting("GS", "Yes")
            });
            try {
                aipAPItag.adUnits[a][0].bids.forEach(function(a, c, g) {
                    "gumgum" === a.bidder && g.splice(c, 1)
                })
            } catch (b) {}
        } else aipAPItag.log("none iframe display Ad"), googletag.cmd.push(function() {
            googletag.pubads().setTargeting("GS", "No")
        });
        aiptag.subid && (aipAPItag.log("Custom SubID"), googletag.cmd.push(function() {
            googletag.pubads().setTargeting("subid", aiptag.subid)
        }));
        googletag.cmd.push(function() {
            try {
                var b = aipAPItag.adUnitsRefreshed[a].toString();
                googletag.pubads().setTargeting("FC", b);
                aipAPItag.log(a + ", FC=" + b)
            } catch (d) {}
        });
        var c = "Other";
        try {
            /(cros)/.test(window.navigator.userAgent.toLowerCase()) && (c = "ChromeOS")
        } catch (b) {}
        googletag.cmd.push(function() {
            googletag.pubads().setTargeting("OS", c);
            aipAPItag.log("OS=" + c)
        });
        aipAPItag.log("AD SLOT REFRESHTAG: " + a + " - " + aipAPItag.adUnitsRefreshed[a]);
        aipAPItag.queue_ready_display = !1;
        pbjs.que.push(function() {
            aipAPItag.adUnitsLoaded[a] || (aipAPItag.adUnitsLoaded[a] = "loaded", googletag.cmd.push(function() {
                aipAPItag.adSlot[a] = googletag.defineSlot("/421469808/" + aipAPItag.adSlots[a].adunit, aipAPItag.adSlots[a].sizes, a).addService(googletag.pubads());
                googletag.enableServices();
                googletag.display(a);
                aipAPItag.log("AD SLOT DEFINED: " + a)
            }));
            aipDisplayTag.unsetReload(a);
            setTimeout(aipDisplayTag.setReload.bind(null, a), aipAPItag.timeout_reload_display);
            aipDisplayTag.displaySetup(a);
            var b = aipAPItag.timeout_bid_display;
            aipAPItag.log("AD REQUEST: " + a);
            pbjs.requestBids({
                timeout: b,
                adUnits: aipAPItag.adUnits[a],
                adUnitCodes: [a],
                bidsBackHandler: function(b) {
                    try {
                        aipAPItag.log("Targeting params:"), aipAPItag.log(JSON.stringify(pbjs.getAdserverTargeting())), aipAPItag.log("All bid objects:"), aipAPItag.log(JSON.stringify(pbjs.getBidResponses()))
                    } catch (g) {}
                    googletag.cmd.push(function() {
                        pbjs.setTargetingForGPTAsync([a]);
                        googletag.pubads().refresh([aipAPItag.adSlot[a]]);
                        aipAPItag.log("AD LOAD: " + a);
                        aipAPItag.queue_ready_display = !0;
                        aipDisplayTag.nextQueue()
                    })
                }
            })
        })
    } else aipAPItag.log("AD REFRESH called to soon for: " + a), aipDisplayTag.nextQueue()
};
aipDisplay.prototype.wrapFunction = function(a, c, b) {
    return function() {
        a.apply(c, b)
    }
};
aipDisplay.prototype.nextQueue = function() {
    1 == aipAPItag.queue_ready_display && 0 < aiptag.cmd.queue.length && (aipAPItag.log("AD SLOT NEXT QUEUE"), aiptag.cmd.queue.shift()())
};

function aipPlayer(a) {
    this.aipConfig = {
        VERSION: "2.0",
        AD_WIDTH: 960,
        AD_HEIGHT: 540,
        LOADING_TEXT: "loading advertisement",
        PREROLL_ELEM: function() {
            return document.getElementById("preroll")
        },
        PREROLL_ELEM_ID: !1,
        PREROLL_CONTAINER: !1,
        AD_FULLSCREEN: !1,
        AD_CENTERPLAYER: !1,
        AD_FADING: !0,
        DESCRIPTION_URL: aipAPItag.protocol + "yohoho.io/"
    };
    a && this.configure(a);
    this.videoAdUnit = [];
    this.videoAdUnit["yohoho.io_preroll"] = {
        code: "prerollUnit",
        mediaTypes: {
            video: {
                context: "instream",
                playerSize: [960, 540]
            }
        },
        bids: [{
            bidder: "appnexus",
            params: {
                placementId: "14506715",
                video: {
                    skippable: !0,
                    mimes: ["video/mp4"],
                    playback_method: ["auto_play_sound_on", "auto_play_sound_off"],
                    playbackmethod: [1, 2],
                    protocols: [2, 3],
                    linearity: 1,
                    startdelay: 0,
                    placement: 1,
                    maxduration: 30,
                    api: [1, 2]
                }
            }
        }, {
            bidder: "openx",
            params: {
                unit: "540746515",
                delDomain: "adinplay-d.openx.net",
                openrtb: {
                    imp: [{
                        video: {
                            mimes: ["video/mp4"],
                            maxduration: 30,
                            playbackmethod: [1, 2],
                            protocols: [2, 3],
                            startdelay: 0,
                            linearity: 1
                        }
                    }]
                }
            }
        }, {
            bidder: "cpmstar",
            params: {
                placementId: "81288",
                video: {
                    mimes: ["video/mp4"],
                    skippable: !0,
                    playbackmethod: [1, 2],
                    protocols: [2, 3],
                    playback_method: ["auto_play_sound_on", "auto_play_sound_off"],
                    linearity: 1,
                    maxduration: 30,
                    startdelay: 0,
                    placement: 1,
                    api: [1, 2]
                }
            }
        }, {
            bidder: "rhythmone",
            params: {
                placementId: "83908",
                video: {
                    mimes: ["video/mp4"],
                    skippable: !0,
                    playbackmethod: [1, 2],
                    protocols: [2, 3],
                    playback_method: ["auto_play_sound_on", "auto_play_sound_off"],
                    linearity: 1,
                    maxduration: 30,
                    startdelay: 0,
                    placement: 1,
                    api: [1, 2]
                }
            }
        }, {
            bidder: "spotx",
            params: {
                channel_id: "268259",
                ad_unit: "instream",
                openrtb: {
                    imp: [{
                        video: {
                            mimes: ["video/mp4"],
                            maxduration: 30,
                            playbackmethod: [1, 2],
                            protocols: [2, 3],
                            startdelay: 0,
                            linearity: 1
                        }
                    }]
                }
            }
        }]
    };
    this.videoAdUnit["yohoho.io_preroll-2"] = {
        code: "prerollUnit",
        mediaTypes: {
            video: {
                context: "instream",
                playerSize: [960, 540]
            }
        },
        bids: [{
            bidder: "appnexus",
            params: {
                placementId: "14506715",
                video: {
                    skippable: !0,
                    mimes: ["video/mp4"],
                    playback_method: ["auto_play_sound_on", "auto_play_sound_off"],
                    playbackmethod: [1, 2],
                    protocols: [2, 3],
                    linearity: 1,
                    startdelay: 0,
                    placement: 1,
                    maxduration: 30,
                    api: [1, 2]
                }
            }
        }, {
            bidder: "openx",
            params: {
                unit: "540746515",
                delDomain: "adinplay-d.openx.net",
                openrtb: {
                    imp: [{
                        video: {
                            mimes: ["video/mp4"],
                            maxduration: 30,
                            playbackmethod: [1, 2],
                            protocols: [2, 3],
                            startdelay: 0,
                            linearity: 1
                        }
                    }]
                }
            }
        }, {
            bidder: "cpmstar",
            params: {
                placementId: "81288",
                video: {
                    mimes: ["video/mp4"],
                    skippable: !0,
                    playbackmethod: [1, 2],
                    protocols: [2, 3],
                    playback_method: ["auto_play_sound_on", "auto_play_sound_off"],
                    linearity: 1,
                    maxduration: 30,
                    startdelay: 0,
                    placement: 1,
                    api: [1, 2]
                }
            }
        }, {
            bidder: "rhythmone",
            params: {
                placementId: "83908",
                video: {
                    mimes: ["video/mp4"],
                    skippable: !0,
                    playbackmethod: [1,
                        2
                    ],
                    protocols: [2, 3],
                    playback_method: ["auto_play_sound_on", "auto_play_sound_off"],
                    linearity: 1,
                    maxduration: 30,
                    startdelay: 0,
                    placement: 1,
                    api: [1, 2]
                }
            }
        }]
    };
    try {
        var c = document.createElement("style");
        this.aipConfig.PREROLL_ELEM_ID = "function" === typeof this.aipConfig.PREROLL_ELEM ? this.aipConfig.PREROLL_ELEM().id : this.aipConfig.PREROLL_ELEM.id;
        c.type = "text/css";
        c.innerHTML = "#" + this.aipConfig.PREROLL_ELEM_ID + " video {left: 0;top: 0;}";
        document.getElementsByTagName("head")[0].appendChild(c)
    } catch (b) {}
}
aipPlayer.prototype.configure = function(a) {
    var c;
    for (c in a) {
        var b = a[c];
        void 0 !== b && a.hasOwnProperty(c) && (this.aipConfig[c] = b)
    }
    return this
};
aipPlayer.prototype.getBidPrerollTag = function(a) {
    pbjs.que.push(function() {
        aipAPItag.debug && pbjs.setConfig({
            debug: !0
        });
        pbjs.setConfig({
            userSync: {
                iframeEnabled: !0,
                useBidCache: !0,
                syncsPerBidder: 99999,
                filterSettings: {
                    iframe: {
                        bidders: "*",
                        filter: "include"
                    }
                },
                syncDelay: 6E3
            },
            cache: {
                url: "https://prebid.adnxs.com/pbc/v1/cache"
            },
            bidderTimeout: aipAPItag.timeout_bid_player,
            enableSendAllBids: !1,
            bidderSequence: "random",
            priceGranularity: {
                buckets: [{
                    precision: 2,
                    min: 0,
                    max: .1,
                    increment: .01
                }, {
                    precision: 2,
                    min: .1,
                    max: 10,
                    increment: .05
                }, {
                    precision: 2,
                    min: 10,
                    max: 15,
                    increment: .25
                }, {
                    precision: 2,
                    min: 15,
                    max: 30,
                    increment: .5
                }, {
                    precision: 2,
                    min: 30,
                    max: 40,
                    increment: 1
                }, {
                    precision: 2,
                    min: 40,
                    max: 75,
                    increment: 5
                }]
            },
            publisherDomain: aipAPItag.protocol + "api.adinplay.com"
        });
        pbjs.requestBids({
            timeout: aipAPItag.timeout_bid_player,
            adUnits: [a.videoAdUnit[a.aipConfig.AD_UNIT_PREROLL]],
            adUnitCodes: ["prerollUnit"],
            bidsBackHandler: function(c) {
                c = pbjs.adServers.dfp.buildVideoUrl({
                    adUnit: a.videoAdUnit[a.aipConfig.AD_UNIT_PREROLL],
                    params: {
                        iu: "/421469808/" + a.aipConfig.AD_UNIT_PREROLL,
                        output: "vast"
                    }
                });
                pbjs.markWinningBidAsUsed({
                    adUnitCode: a.videoAdUnit[a.aipConfig.AD_UNIT_PREROLL].code
                });
                aipAPItag.log(c);
                a.aipConfig.AD_TAG = c;
                a.preparePreRoll()
            }
        })
    })
};
aipPlayer.prototype.preparePreRoll = function() {
    var a = {};
    try {
        aipAPItag.log("aiptag.gdprConsent: " + aiptag.gdprConsent)
    } catch (b) {}!1 === aipAPItag.getConsent() && (a.npa = "1", aipAPItag.log("Preroll consent set to: false"));
    aipAPItag.inIframe() ? (a.GS = "Yes", aipAPItag.log("iframe preroll AD")) : a.GS = "No";
    aiptag.subid && (a.subid = aiptag.subid, aipAPItag.log("Custom SubID"));
    a.FC = aiptag.prerollCount;
    var c = Object.keys(a).map(function(b) {
        return b + "%3D" + a[b]
    }).join("%26");
    if (c) try {
        this.aipConfig.AD_TAG = aipAPItag.urlParamUpdate(this.aipConfig.AD_TAG, "cust_params", c, !0)
    } catch (b) {}
    this.prepareAd()
};
aipPlayer.prototype.startRewardedAd = function() {
    var a = this;
    this.showLoading(!0, !0);
    aipAPItag.completedTimeoutRewarded = setTimeout(function() {
        this.aipRewardComplete("timeout", !0)
    }.bind(this), 3E3);
    googletag.cmd.push(function() {
        aipAPItag.aipAPIrewardedSlot || (googletag.pubads().addEventListener("rewardedSlotReady", function(a) {
            a.makeRewardedVisible();
            aipAPItag.log("Rewarded AD: Slot Ready");
            clearTimeout(aipAPItag.completedTimeoutRewarded);
            this.showLoading(!1)
        }.bind(a)), googletag.pubads().addEventListener("rewardedSlotGranted", function(a) {
            aipAPItag.log("Rewarded AD: Granted")
        }.bind(a)), googletag.pubads().addEventListener("rewardedSlotCanceled", function(a) {
            aipAPItag.log("Rewarded AD: Canceled")
        }.bind(a)), googletag.pubads().addEventListener("slotRenderEnded", function(a) {
            a.slot.getSlotId().getName() == aipAPItag.aipAPIrewardedSlotId && (aipAPItag.log("Rewarded AD: slotRenderEnded"), console.log(a));
            a.slot.getSlotId().getName() == aipAPItag.aipAPIrewardedSlotId && a.isEmpty && (aipAPItag.log("Rewarded AD: Empty"), this.aipRewardComplete("empty", !0))
        }.bind(a)), googletag.pubads().addEventListener("rewardedSlotFailedToLoad", function(a) {
            aipAPItag.log("Rewarded AD: Failed to load!");
            this.aipRewardComplete("failed", !0)
        }.bind(a)), googletag.pubads().addEventListener("rewardedSlotClosed", function(a) {
            this.aipRewardComplete("closed", !1);
            aipAPItag.log("Rewarded AD: Closed")
        }.bind(a)), googletag.pubads().addEventListener("rewardedSlotCompleted", function(a) {
            this.aipRewardComplete("completed", !1);
            aipAPItag.log("Rewarded AD: Completed!")
        }.bind(a)));
        aipAPItag.aipAPIrewardedSlot = googletag.defineOutOfPageSlot(aipAPItag.aipAPIrewardedSlotId, googletag.enums.OutOfPageFormat.REWARDED).addService(googletag.pubads());
        googletag.enableServices();
        googletag.display(aipAPItag.aipAPIrewardedSlot);
        googletag.pubads().refresh([aipAPItag.aipAPIrewardedSlot]);
        aipAPItag.log("Rewarded AD: Start")
    })
};
aipPlayer.prototype.startPreRoll = function(a) {
    this.aipConfig.AD_UNIT_PREROLL = "yohoho.io_preroll";
    a && (this.aipConfig.AD_UNIT_PREROLL = a);
    a = (new Date).getTime();
    var c = encodeURIComponent(window.location.href).replace(/'/g, "%27").replace(/"/g, "%22"),
        b = encodeURIComponent(this.aipConfig.DESCRIPTION_URL).replace(/'/g, "%27").replace(/"/g, "%22");
    this.aipConfig.AD_TAG = "https://pubads.g.doubleclick.net/gampad/ads?sz=960x540&iu=/421469808/" + this.aipConfig.AD_UNIT_PREROLL + "&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&max_ad_duration=30000&url=" + c + "&description_url=" + b + "&correlator=" + a;
    aipAPItag.log(this.aipConfig.AD_TAG);
    aiptag.prerollCount = aiptag.prerollCount + 1 || 1;
    aipAPItag.inIframe() ? (aipAPItag.log("iframe AD - Normal Ad"), this.preparePreRoll()) : (aipAPItag.log("none iframe - Bid Ad"), this.getBidPrerollTag(this))
};
aipPlayer.prototype.prepareAd = function() {
    if (1 == aipAPItag.sdkBlocked) aipAPItag.log("AD BLOCKED"), this.aipComplete("user-has-adblock"), this.aipConfig.AIP_BLOCKED && this.aipConfig.AIP_BLOCKED(), aipAPItag.sendEvent("user-has-adblock");
    else if ("function" === typeof this.aipConfig.PREROLL_ELEM && (this.aipConfig.PREROLL_ELEM = this.aipConfig.PREROLL_ELEM()), aipAPItag.isInPage(this.aipConfig.PREROLL_ELEM)) {
        aipAPItag.isMobile() && (this.aipConfig.AD_FULLSCREEN = !0);
        this.activeViewDetect();
        this.aipConfig.AD_FULLSCREEN && this.aipConfig.AD_CENTERPLAYER && (this.aipConfig.AD_CENTERPLAYER = !1, console.log("***WARNING*** AD_FULLSCREEN and AD_CENTERPLAYER cannot both be set to true, setting AD_CENTERPLAYER to false"));
        if (this.aipConfig.AD_FULLSCREEN) this.aipConfig.PREROLL_CONTAINER = this.aipConfig.PREROLL_ELEM;
        else {
            var a = document.getElementById("aipPrerollContainer");
            if ("undefined" == typeof a || null == a) a = document.createElement("div"), a.id = "aipPrerollContainer", this.aipConfig.PREROLL_ELEM.appendChild(a);
            this.aipConfig.PREROLL_CONTAINER = document.getElementById("aipPrerollContainer");
            try {
                var c = window.getComputedStyle(this.aipConfig.PREROLL_ELEM, null).getPropertyValue("position");
                if ("" == c || "static" == c) this.aipConfig.PREROLL_ELEM.style.position = "relative"
            } catch (d) {}
            try {
                var b = window.getComputedStyle(this.aipConfig.PREROLL_ELEM, null).getPropertyValue("z-index");
                if ("" == b || isNaN(b)) this.aipConfig.PREROLL_ELEM.style.zIndex = "999996"
            } catch (d) {}
            this.aipConfig.AD_CENTERPLAYER && (this.aipConfig.PREROLL_ELEM.style.top = "0", this.aipConfig.PREROLL_ELEM.style.left = "0", this.aipConfig.PREROLL_ELEM.style.bottom = "0", this.aipConfig.PREROLL_ELEM.style.right = "0", this.aipConfig.PREROLL_ELEM.style.width = this.aipConfig.AD_WIDTH + "px", this.aipConfig.PREROLL_ELEM.style.height = this.aipConfig.AD_HEIGHT + 26 + "px", this.aipConfig.PREROLL_ELEM.style.position = "fixed", this.aipConfig.PREROLL_ELEM.style.zIndex = "999996", this.aipConfig.PREROLL_ELEM.style.margin = "auto")
        }
        this.showLoading(!0);
        this.aipConfig.AD_FULLSCREEN ? (this.aipConfig.PREROLL_CONTAINER.style.top = "0", this.aipConfig.PREROLL_CONTAINER.style.left = "0", this.aipConfig.PREROLL_CONTAINER.style.width = "100%", this.aipConfig.PREROLL_CONTAINER.style.height = "100%", this.aipConfig.PREROLL_CONTAINER.style.position = "fixed", this.aipConfig.PREROLL_CONTAINER.style.zIndex = "999996", this.aipConfig.PREROLL_CONTAINER.style.overflow = "hidden", this.aipConfig.PREROLL_CONTAINER.className = "") : (this.aipConfig.PREROLL_CONTAINER.style.width = this.aipConfig.AD_WIDTH + "px", this.aipConfig.PREROLL_CONTAINER.style.height = this.aipConfig.AD_HEIGHT + "px");
        this.aipConfig.PREROLL_CONTAINER.style.backgroundColor = "#000000";
        aipAPItag.sdkLoaded() ? this.startAd() : (aipAPItag.log("Ads lib not ready yet"), aipAPItag.wait(100, 7500, function() {
            return 1 == aipAPItag.sdkBlocked || 1 == aipAPItag.sdkLoaded()
        }.bind(this), function() {
            aipAPItag.log("Ads lib ready after interval");
            this.startAd()
        }.bind(this), function() {
            aipAPItag.log("Ads lib failed to load after interval");
            this.aipComplete("adslib-load-failed")
        }.bind(this)))
    } else console.log("***WARNING*** PREROLL_ELEM does not exists, AD cant be played"), this.aipComplete("preroll_elem-doesnt-exists")
};
aipPlayer.prototype.startAd = function() {
    1 == aipAPItag.sdkBlocked ? (aipAPItag.log("AD BLOCKED"), this.aipComplete("user-has-adblock"), this.aipConfig.AIP_BLOCKED && this.aipConfig.AIP_BLOCKED(), aipAPItag.sendEvent("user-has-adblock")) : (aipAPItag.log("Final vasturl=" + this.aipConfig.AD_TAG), this.requestAd(this, this.aipConfig.AD_TAG, aipAPItag.log, !0))
};
aipPlayer.prototype.aipRewardComplete = function(a, c) {
    clearTimeout(aipAPItag.completedTimeoutRewarded);
    try {
        googletag.destroySlots([aipAPItag.aipAPIrewardedSlot])
    } catch (b) {}
    this.showLoading(!1);
    this.aipConfig.AIP_REWARDEDCOMPLETE && this.aipConfig.AIP_REWARDEDCOMPLETE(a)
};
aipPlayer.prototype.aipComplete = function(a) {
    try {
        this.aipConfig.PREROLL_ELEM.style.display = "none"
    } catch (c) {}
    this.showLoading(!1);
    this.aipConfig.AIP_COMPLETE && setTimeout(function() {
        aipAPItag.prerollSkipped && (a = "video-ad-skipped");
        this.aipConfig.AIP_COMPLETE(a)
    }.bind(this), 300);
    this.aipConfig.AIP_REMOVE && setTimeout(function() {
        aipAPItag.isInPage(this.aipConfig.PREROLL_CONTAINER) || 1 != aipAPItag.sdkBlocked && console.log("***WARNING*** PREROLL_CONTAINER is removed prematurely, please do not remove PREROLL_CONTAINER on AIP_COMPLETE, you can remove it on AIP_REMOVE");
        this.aipConfig.AIP_REMOVE()
    }.bind(this), 3E3);
    try {
        document.getElementById(aipThis.aipConfig.PREROLL_ELEM_ID).removeEventListener("click", handlePaused)
    } catch (c) {}
};
aipPlayer.prototype.showLoading = function(a, c) {
    if (this.aipConfig.AD_FULLSCREEN || c)
        if (a) {
            var b = document.getElementById("divFullscreenLoading");
            if ("undefined" == typeof b || null == b) b = document.createElement("div"), b.id = "divFullscreenLoading", b.style.overflow = "hidden", b.style.position = "fixed", b.style.zIndex = "999997", b.style.margin = "auto", b.style.top = "0", b.style.left = "0", b.style.bottom = "0", b.style.right = "0", b.style.width = "100%", b.style.height = "100%", b.style.backgroundColor = "#000000", b.innerHTML = '<img border="0" style="position: fixed;z-index: 999998;top: 50%;left: 50%;transform: translate(-50%, -50%);" src="//api.adinplay.com/libs/aiptag/assets/loader-red.gif" />',
                document.getElementsByTagName("body")[0].appendChild(b)
        } else b = document.getElementById("divFullscreenLoading"), "undefined" != typeof b && null != b && (b = document.getElementById("divFullscreenLoading"), b.parentNode.removeChild(b));
    else if (a) {
        if (b = document.createElement("div"), b.id = "divFullscreenLoading", b.style.overflow = "hidden", b.style.position = "absolute", b.style.top = "0", b.style.left = "0", b.style.bottom = "0", b.style.right = "0", b.style.zIndex = "999997", b.style.width = this.aipConfig.AD_WIDTH + "px", b.style.height = this.aipConfig.AD_HEIGHT + "px", b.style.backgroundColor = "#000000", b.innerHTML = '<img border="0" style="position: absolute;z-index: 999998;top: 50%;left: 50%;transform: translate(-50%, -50%);" src="//api.adinplay.com/libs/aiptag/assets/loader-red.gif" />', this.aipConfig.PREROLL_ELEM.appendChild(b), b = document.getElementById("aipLoadingText"), "undefined" == typeof b || null == b) b = document.createElement("div"), b.id = "aipLoadingText", b.innerHTML = '<div id="aipLoadingBG" style="line-height: normal;height:auto;position: relative;z-index: 999995;background-color: #000000;border-top: 1px solid #ffffff;text-align: left;width: ' + this.aipConfig.AD_WIDTH + 'px;"><span style="font-size: 16px;font-family: \'open sans\';font-weight: 100;color: #fff;padding-left: 5px;" id="loading-text-aip">' + this.aipConfig.LOADING_TEXT + '<img style="margin-left: 10px;vertical-align: middle;" src="data:image/gif;base64,R0lGODlhEAALAPQAAAAAAP///yQkJC4uLhQUFPj4+P///9DQ0Hx8fJ6enkRERNzc3LS0tHR0dJqamkBAQNjY2Pr6+rCwsBgYGCYmJgoKCsbGxiIiIgwMDEhISF5eXjQ0NBAQEAAAAAAAAAAAACH+GkNyZWF0ZWQgd2l0aCBhamF4bG9hZC5pbmZvACH5BAALAAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAEAALAAAFLSAgjmRpnqSgCuLKAq5AEIM4zDVw03ve27ifDgfkEYe04kDIDC5zrtYKRa2WQgAh+QQACwABACwAAAAAEAALAAAFJGBhGAVgnqhpHIeRvsDawqns0qeN5+y967tYLyicBYE7EYkYAgAh+QQACwACACwAAAAAEAALAAAFNiAgjothLOOIJAkiGgxjpGKiKMkbz7SN6zIawJcDwIK9W/HISxGBzdHTuBNOmcJVCyoUlk7CEAAh+QQACwADACwAAAAAEAALAAAFNSAgjqQIRRFUAo3jNGIkSdHqPI8Tz3V55zuaDacDyIQ+YrBH+hWPzJFzOQQaeavWi7oqnVIhACH5BAALAAQALAAAAAAQAAsAAAUyICCOZGme1rJY5kRRk7hI0mJSVUXJtF3iOl7tltsBZsNfUegjAY3I5sgFY55KqdX1GgIAIfkEAAsABQAsAAAAABAACwAABTcgII5kaZ4kcV2EqLJipmnZhWGXaOOitm2aXQ4g7P2Ct2ER4AMul00kj5g0Al8tADY2y6C+4FIIACH5BAALAAYALAAAAAAQAAsAAAUvICCOZGme5ERRk6iy7qpyHCVStA3gNa/7txxwlwv2isSacYUc+l4tADQGQ1mvpBAAIfkEAAsABwAsAAAAABAACwAABS8gII5kaZ7kRFGTqLLuqnIcJVK0DeA1r/u3HHCXC/aKxJpxhRz6Xi0ANAZDWa+kEAA7AAAAAAAAAAAA"/></span></div>',
            this.aipConfig.PREROLL_ELEM.appendChild(b)
    } else b = document.getElementById("divFullscreenLoading"), "undefined" != typeof b && null != b && (b = document.getElementById("divFullscreenLoading"), b.parentNode.removeChild(b)), b = document.getElementById("aipLoadingText"), "undefined" != typeof b && null != b && (b = document.getElementById("aipLoadingText"), b.parentNode.removeChild(b))
};
aipPlayer.prototype.showBranding = function() {
    if (!this.aipConfig.AD_FULLSCREEN) {
        var a = document.createElement("div");
        a.id = "aipLoadingText";
        a.innerHTML = '<div style="border-top: 1px solid #ffffff;min-height: 25px;background-color: #000000;position: relative;width: ' + this.aipConfig.AD_WIDTH + 'px;"><span style="font-size: 16px;font-family: \'open sans\';font-weight: 100;color: #fff;padding-left: 5px;" id="loading-text-aip"></span><a style="margin-top: 6px;position: absolute;right: 5px;" target="_blank" href="http://www.adinplay.com/"><img style="vertical-align: top;position: relative;" id="aipLogo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAAANCAYAAAC9xdC/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMzgwMTE3NDA3MjA2ODExOEMxNDhFM0M4NkZDN0E4NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBNTg4Q0IyMjJCNzQxMUU3ODJGN0JEMjM2NEI1RjJGNCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBNTg4Q0IyMTJCNzQxMUU3ODJGN0JEMjM2NEI1RjJGNCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDY4MDExNzQwNzIwNjgxMThDMTQ4RTNDODZGQzdBODciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDM4MDExNzQwNzIwNjgxMThDMTQ4RTNDODZGQzdBODciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5jvc/AAAAECElEQVR42uxXW0hUURR1HFMLqewBStCbSiKSiIyKsEgQP3pBFPkzE5ggQkY/RSbRRyj2YRAV9ZNQQgVCT6I+1CDKKXxQpIY6pZMvrBl85CPttrbsC7vjnbnn+tWHGxb33r33Ofecs87eZx+XYRhRs/J/SAxwF8ieQdshYL/L5apy2hAbYAUev9G2y8IWj0eSUI0D/fAdt/BdiAdhFPYe1q1kcyd0k8I3AY8l1J/5X+FryhjQA7sh2tFYaEw/oR/QmFsKHnFAu+kv+piALqD4J+KxQCoOAqPGzOSOQyLmAt3AZyDawp4O/AG+MvqBX8AjYLPie5HHUC10ppQpvh7WN1j4SukBTgufatYXaMxtNTDJ/leF3iv63yn084A21t+THS3iBZqJdAHrNMnIA94CHbQJwpARUnTJwGUmJUuTDBKPJhkfgBqgU+hyZkDGNdF+iHe9aXvGelrjONZdYd136Ss7LOWd+Y9MTEwY9fX1U++BQMBob2+fem9ubjYGBwcN3hGFNoONZRKygHygTocMYSsA+jjl6JBB0Z6mQUYqf0cDD1hX44QM2BcDw7x2TdzmnLAvA36wvgjYSsvK31mROt4BDMhZBYNByqOG3+83vF6vkZGRMfWekpJiVFVVSddGzuVW/dKCEKMuTle9QKYDMmJ4Qoc0yGgSUZusQwbrSlhX65CMQvZ7ChwW/44VPtmsHwNa+P22TjqJB76Yo6Xd73a7pwhRUVtbqwbSNzMURX+061qBo0J3FnijSwbb3wOnNMjYLQihtJgbgYyb3NctYJx1l3TJ4LXqZb99gBvw87dX8a0U//WbUW5HxHV1hUtLS6cR4fF4VLfXFlUK9XmMd/VeXvB0LhwoVNM1IyOaJ60TGal0jlFQi7ysc4CT3KfIdUBGjmhbw226+fsTZQLhu1T4HrEjYiPw0WqEZqqSEClqnHe626JPFw+qjgcqQQfaS00yTnJ1NV+HDP7OFBVOODKKOI1RGlmr/DMiGTy3JpsCJ0tpY0q6es+QTrl4lHFN7ESa6K6CGro+jP0A19Jr1PsC1+AUrtthexdmwnQG5QHngeM69b4p8H3BB2lJBLfH8Guw6Srfovor5jXcAAQBKhZ+C/sF4ARwBniuW/snAg/t6leryCgvL6/ki1qk/n02YX6D7hFh7hmdfOC9ArY5uGekKr4VOge4xdiqIyyJh9MSSbFF2/XCd4tdZLj4ElIBLLcjLRQKRSUmTiuH9wDVESZDaWsTRQ9231gYH0o7q2Bv5ANNpooRIADbsEW7JL6tD8HeyjpzYVugG1Fu9rSDR6BvieSr/IPGEu6Q7RDr1oY+Bq3SPh5zgC7Y+5T/tkI3JMnYpaarcOLz+RLS0tKeOCFjVvTlrwADAEf3iYTQrOkJAAAAAElFTkSuQmCC" border="0" /></a></div></div>';
        this.aipConfig.PREROLL_ELEM.appendChild(a)
    }
};
aipPlayer.prototype.activeViewDetect = function() {
    var a = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    if ((window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) < this.aipConfig.AD_WIDTH || a < this.aipConfig.AD_HEIGHT) this.aipConfig.AD_FULLSCREEN = !0
};
aipPlayer.prototype.requestAd = function(a, c, b, d) {
    null == aipAPItag.aipAds && (b("LOADED FIRST TIME"), aipAPItag.aipAds = new AipAds(a, a.aipConfig.PREROLL_CONTAINER, a.aipConfig.PREROLL_CONTAINER, d));
    try {
        aipAPItag.aipAds.requestAds(c, b), a.aipConfig.PREROLL_ELEM.style.display = "block"
    } catch (g) {
        b("EXCEPTION", {
            name: g.name,
            message: g.message,
            stack: g.stack
        }), a.aipComplete("ad-exception")
    }
};

function AipAds(a, c, b, d) {
    function g() {
        aipAPItag.sendEvent("video-ad-paused");
        try {
            document.getElementById(a.aipConfig.PREROLL_ELEM_ID).addEventListener("click", e)
        } catch (z) {}
    }

    function e() {
        aipAPItag.sendEvent("video-ad-resumed-forced");
        f.resume()
    }

    function h() {
        aipAPItag.sendEvent("video-ad-resumed");
        try {
            document.getElementById(a.aipConfig.PREROLL_ELEM_ID).removeEventListener("click", e)
        } catch (z) {}
    }

    function l(a) {
        m("EXCEPTION", {
            name: a.name,
            message: a.message,
            stack: a.stack
        })
    }

    function B(a) {
        var b = "",
            c = "",
            d = "";
        try {
            b = a.getAd().getContentType(), c = a.getAd().getMinSuggestedDuration(), d = a.getAd().getCreativeId()
        } catch (D) {
            l(D)
        }
        m("CONTENT_PAUSE_REQUESTED", {
            contentType: b,
            creativeId: d,
            minSuggestedDuration: c
        })
    }

    function C(c) {
        n();
        b.style.display = "block";
        a.showLoading(!1);
        a.showBranding();
        a.aipConfig.AIP_STARTED && a.aipConfig.AIP_STARTED();
        try {
            aipAPItag.forceRedraw(document.getElementById(a.aipConfig.PREROLL_ELEM_ID))
        } catch (w) {}
        if (d) try {
            m("MediaUrl: " + c.getAd().getMediaUrl() + "; AdvertiserName: " + c.getAd().getAdvertiserName() + "; Description: " + c.getAd().getDescription() + "; Title: " + c.getAd().getTitle())
        } catch (w) {
            l(w)
        }
        m("STARTED");
        aipAPItag.sendEvent("video-ad-started")
    }

    function u() {
        try {
            clearTimeout(aipAPItag.completedTimeoutPreroll)
        } catch (z) {}
        p.contentComplete();
        f.destroy();
        m("CONTENT_RESUME_REQUESTED");
        r = !1;
        n();
        a.aipComplete("video-ad-completed");
        aipAPItag.sendEvent("video-ad-removed")
    }

    function y(b) {
        n();
        m(b.getError());
        p.contentComplete();
        f && f.destroy();
        var c = (new Date).getTime() - A;
        1012 == b.getError().getErrorCode() && 0 <= c && 800 > c ? (m("AD BLOCKED", {
            timeElapsed: c
        }), a.aipConfig.AIP_BLOCKED && a.aipConfig.AIP_BLOCKED(), aipAPItag.sendEvent("user-has-adblock"), b = "user-has-adblock") : b.getError().getErrorCode() == google.ima.AdError.ErrorCode.VAST_EMPTY_RESPONSE || 901 == b.getError().getErrorCode() && b.getError().getInnerError() && "Error: No ads available" == b.getError().getInnerError().message ? (m("NO ADS", {
            errorCode: b.getError().getErrorCode(),
            message: b.getError().getMessage(),
            innerError: b.getError().getInnerError(),
            vastErrorCode: b.getError().getVastErrorCode(),
            timeElapsed: c
        }), a.aipConfig.AIP_NOADS && a.aipConfig.AIP_NOADS(), aipAPItag.sendEvent("video-ad-empty"), b = "video-ad-empty") : (m("ERROR", {
            errorCode: b.getError().getErrorCode(),
            message: b.getError().getMessage(),
            innerError: b.getError().getInnerError(),
            vastErrorCode: b.getError().getVastErrorCode(),
            timeElapsed: c
        }), a.aipConfig.AIP_NOADS && a.aipConfig.AIP_NOADS(), aipAPItag.sendEvent("video-ad-error"), b = "video-ad-error");
        r = !1;
        n();
        a.aipComplete(b)
    }

    function q() {
        x = !0;
        r = !1;
        p.contentComplete();
        f && f.destroy();
        m("TIMEOUT");
        n();
        a.aipComplete("video-ad-timeout");
        aipAPItag.sendEvent("video-ad-timeout")
    }

    function n() {
        t && (clearTimeout(t), t = null)
    }

    function v() {
        a.aipConfig.AD_FULLSCREEN ? (windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) : (windowWidth = c.offsetWidth, windowHeight = c.offsetHeight);
        return {
            adWidth: windowWidth,
            adHeight: windowHeight
        }
    }
    var p, f, r, A, t, x, m = function() {};
    window.addEventListener("error", function(a) {
        if (r) try {
            m("WINDOW_EXCEPTION", {
                name: "WindowErrorListener: " + a.error.toString(),
                message: a.error.toString(),
                stack: a.error.stack
            })
        } catch (w) {}
    });
    (function() {
        var d = new google.ima.AdDisplayContainer(b);
        d.initialize();
        p = new google.ima.AdsLoader(d);
        p.getSettings().setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.INSECURE);
        p.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function(b) {
            function d(a) {
                return function() {
                    "COMPLETE" == a && (aipAPItag.sendEvent("video-ad-completed"), aipAPItag.completedTimeoutPreroll = setTimeout(u, 1500));
                    "CLICK" == a && aipAPItag.sendEvent("video-ad-clicked");
                    "USER_CLOSE" == a && aipAPItag.sendEvent("video-ad-close");
                    "LOADED" == a && (aipAPItag.sendEvent("video-ad-loaded"), aipAPItag.prerollSkipped = !1);
                    "SKIPPED" == a && (aipAPItag.sendEvent("video-ad-skipped"), aipAPItag.prerollSkipped = !0);
                    m(a);
                    aipAPItag.log("Preroll status: " + a)
                }
            }
            if (!x) {
                var e = new google.ima.AdsRenderingSettings;
                e.loadVideoTimeout = 12E3;
                f = b.getAdsManager(c, e);
                f.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, y);
                f.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, B);
                f.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, u);
                f.addEventListener(google.ima.AdEvent.Type.STARTED, C);
                f.addEventListener(google.ima.AdEvent.Type.SKIPPED, d("SKIPPED"));
                f.addEventListener(google.ima.AdEvent.Type.CLICK, d("CLICK"));
                f.addEventListener(google.ima.AdEvent.Type.PAUSED, g);
                f.addEventListener(google.ima.AdEvent.Type.RESUMED, h);
                f.addEventListener(google.ima.AdEvent.Type.FIRST_QUARTILE, d("FIRST_QUARTILE"));
                f.addEventListener(google.ima.AdEvent.Type.MIDPOINT, d("MIDPOINT"));
                f.addEventListener(google.ima.AdEvent.Type.THIRD_QUARTILE, d("THIRD_QUARTILE"));
                f.addEventListener(google.ima.AdEvent.Type.LOADED, d("LOADED"));
                f.addEventListener(google.ima.AdEvent.Type.COMPLETE, d("COMPLETE"));
                f.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, d("USER_CLOSE"));
                f.addEventListener(google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED, d("SKIPPABLE_STATE_CHANGED"));
                try {
                    var n = v();
                    a.aipConfig.AD_FULLSCREEN ? f.init(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, google.ima.ViewMode.FULLSCREEN) : f.init(n.adWidth, n.adHeight, google.ima.ViewMode.NORMAL);
                    f.start()
                } catch (E) {
                    l(E)
                }
            }
        });
        p.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, y)
    })();
    window.addEventListener("resize", function() {
        if (f && r) {
            var b = v();
            a.aipConfig.AD_FULLSCREEN ? f.resize(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, google.ima.ViewMode.FULLSCREEN) : f.resize(b.adWidth, b.adHeight, google.ima.ViewMode.NORMAL)
        }
    });
    this.requestAds = function(a, b) {
        m = b;
        A = (new Date).getTime();
        var c = new google.ima.AdsRequest;
        c.adTagUrl = a;
        var d = v();
        c.linearAdSlotWidth = d.adWidth;
        c.linearAdSlotHeight = d.adHeight;
        c.nonLinearAdSlotWidth = d.adWidth;
        c.nonLinearAdSlotHeight = d.adHeight;
        c.forceNonLinearFullSlot = !0;
        c.setAdWillAutoPlay(!1);
        c.setAdWillPlayMuted(!1);
        p.requestAds(c);
        t = setTimeout(q, 15E3);
        x = !1;
        r = !0
    }
}
aipAPItag = new aipAPI;
aipAPItag.initGPT();
aipAPItag.setCurrency();
aipAPItag.detectBlockedAds();
aipAPItag.initGDPR();