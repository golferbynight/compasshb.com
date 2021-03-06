/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
"use strict";

!(function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
    } : b(a);
})("undefined" != typeof window ? window : undefined, function (a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = a.document,
        m = "2.1.4",
        n = function n(a, b) {
        return new n.fn.init(a, b);
    },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function r(a, b) {
        return b.toUpperCase();
    };n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function toArray() {
            return d.call(this);
        }, get: function get(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
        }, pushStack: function pushStack(a) {
            var b = n.merge(this.constructor(), a);return (b.prevObject = this, b.context = this.context, b);
        }, each: function each(a, b) {
            return n.each(this, a, b);
        }, map: function map(a) {
            return this.pushStack(n.map(this, function (b, c) {
                return a.call(b, c, b);
            }));
        }, slice: function slice() {
            return this.pushStack(d.apply(this, arguments));
        }, first: function first() {
            return this.eq(0);
        }, last: function last() {
            return this.eq(-1);
        }, eq: function eq(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
        }, end: function end() {
            return this.prevObject || this.constructor(null);
        }, push: f, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function () {
        var a,
            b,
            c,
            d,
            e,
            f,
            g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));return g;
    }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
            throw new Error(a);
        }, noop: function noop() {}, isFunction: function isFunction(a) {
            return "function" === n.type(a);
        }, isArray: Array.isArray, isWindow: function isWindow(a) {
            return null != a && a === a.window;
        }, isNumeric: function isNumeric(a) {
            return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
        }, isPlainObject: function isPlainObject(a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
        }, isEmptyObject: function isEmptyObject(a) {
            var b;for (b in a) return !1;return !0;
        }, type: function type(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a;
        }, globalEval: function globalEval(a) {
            var b,
                c = eval;a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
        }, camelCase: function camelCase(a) {
            return a.replace(p, "ms-").replace(q, r);
        }, nodeName: function nodeName(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        }, each: function each(a, b, c) {
            var d,
                e = 0,
                f = a.length,
                g = s(a);if (c) {
                if (g) {
                    for (; f > e; e++) if ((d = b.apply(a[e], c), d === !1)) break;
                } else for (e in a) if ((d = b.apply(a[e], c), d === !1)) break;
            } else if (g) {
                for (; f > e; e++) if ((d = b.call(a[e], e, a[e]), d === !1)) break;
            } else for (e in a) if ((d = b.call(a[e], e, a[e]), d === !1)) break;return a;
        }, trim: function trim(a) {
            return null == a ? "" : (a + "").replace(o, "");
        }, makeArray: function makeArray(a, b) {
            var c = b || [];return (null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c);
        }, inArray: function inArray(a, b, c) {
            return null == b ? -1 : g.call(b, a, c);
        }, merge: function merge(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];return (a.length = e, a);
        }, grep: function grep(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);return e;
        }, map: function map(a, b, c) {
            var d,
                f = 0,
                g = a.length,
                h = s(a),
                i = [];if (h) for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);else for (f in a) d = b(a[f], f, c), null != d && i.push(d);return e.apply([], i);
        }, guid: 1, proxy: function proxy(a, b) {
            var c, e, f;return ("string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
                return a.apply(b || this, e.concat(d.call(arguments)));
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0);
        }, now: Date.now, support: k }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase();
    });function s(a) {
        var b = "length" in a && a.length,
            c = n.type(a);return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }var t = (function (a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u = "sizzle" + 1 * new Date(),
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function B(a, b) {
            return (a === b && (l = !0), 0);
        },
            C = 1 << 31,
            D = ({}).hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function J(a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;return -1;
        },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = M.replace("w", "w#"),
            O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
            P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
            Q = new RegExp(L + "+", "g"),
            R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            S = new RegExp("^" + L + "*," + L + "*"),
            T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            V = new RegExp(P),
            W = new RegExp("^" + N + "$"),
            X = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M.replace("w", "w*") + ")"), ATTR: new RegExp("^" + O), PSEUDO: new RegExp("^" + P), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            aa = /[+~]/,
            ba = /'|\\/g,
            ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            da = function da(a, b, c) {
            var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        },
            ea = function ea() {
            m();
        };try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
        } catch (fa) {
            H = { apply: E.length ? function (a, b) {
                    G.apply(a, I.call(b));
                } : function (a, b) {
                    var c = a.length,
                        d = 0;while (a[c++] = b[d++]);a.length = c - 1;
                } };
        }function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;if (((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k)) return d;if (!e && p) {
                if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
                    if (9 === k) {
                        if ((h = b.getElementById(j), !h || !h.parentNode)) return d;if (h.id === j) return (d.push(h), d);
                    } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return (d.push(h), d);
                } else {
                    if (f[2]) return (H.apply(d, b.getElementsByTagName(a)), d);if ((j = f[3]) && c.getElementsByClassName) return (H.apply(d, b.getElementsByClassName(j)), d);
                }if (c.qsa && (!q || !q.test(a))) {
                    if ((s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase())) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;while (l--) o[l] = s + ra(o[l]);w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",");
                    }if (x) try {
                        return (H.apply(d, w.querySelectorAll(x)), d);
                    } catch (y) {} finally {
                        r || b.removeAttribute("id");
                    }
                }
            }return i(a.replace(R, "$1"), b, d, e);
        }function ha() {
            var a = [];function b(c, e) {
                return (a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e);
            }return b;
        }function ia(a) {
            return (a[u] = !0, a);
        }function ja(a) {
            var b = n.createElement("div");try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }function ka(a, b) {
            var c = a.split("|"),
                e = a.length;while (e--) d.attrHandle[c[e]] = b;
        }function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);if (d) return d;if (c) while (c = c.nextSibling) if (c === b) return -1;return a ? 1 : -1;
        }function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
            };
        }function na(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
            };
        }function oa(a) {
            return ia(function (b) {
                return (b = +b, ia(function (c, d) {
                    var e,
                        f = a([], c.length, b),
                        g = f.length;while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                }));
            });
        }function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }c = ga.support = {}, f = ga.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
        }, m = ga.setDocument = function (a) {
            var b,
                e,
                g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
                return (a.className = "i", !a.getAttribute("className"));
            }), c.getElementsByTagName = ja(function (a) {
                return (a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length);
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
                return (o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length);
            }), c.getById ? (d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);return c && c.parentNode ? [c] : [];
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(ca, da);return function (a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(ca, da);return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
                };
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
            } : function (a, b) {
                var c,
                    d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);return d;
                }return f;
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return p ? b.getElementsByClassName(a) : void 0;
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
            }), ja(function (a) {
                var b = g.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P);
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function (a, b) {
                if (b) while (b = b.parentNode) if (b === a) return !0;return !1;
            }, B = b ? function (a, b) {
                if (a === b) return (l = !0, 0);var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
            } : function (a, b) {
                if (a === b) return (l = !0, 0);var c,
                    d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) h.unshift(c);c = b;while (c = c.parentNode) i.unshift(c);while (h[d] === i[d]) d++;return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
            }, g) : n;
        }, ga.matches = function (a, b) {
            return ga(a, null, null, b);
        }, ga.matchesSelector = function (a, b) {
            if (((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))) try {
                var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}return ga(b, n, null, [a]).length > 0;
        }, ga.contains = function (a, b) {
            return ((a.ownerDocument || a) !== n && m(a), t(a, b));
        }, ga.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, ga.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, ga.uniqueSort = function (a) {
            var b,
                d = [],
                e = 0,
                f = 0;if ((l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l)) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));while (e--) a.splice(d[e], 1);
            }return (k = null, a);
        }, e = ga.getText = function (a) {
            var b,
                c = "",
                d = 0,
                f = a.nodeType;if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
                } else if (3 === f || 4 === f) return a.nodeValue;
            } else while (b = a[d++]) c += e(b);return c;
        }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: X, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
                    return (a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4));
                }, CHILD: function CHILD(a) {
                    return (a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a);
                }, PSEUDO: function PSEUDO(a) {
                    var b,
                        c = !a[6] && a[2];return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
                } }, filter: { TAG: function TAG(a) {
                    var b = a.replace(ca, da).toLowerCase();return "*" === a ? function () {
                        return !0;
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                }, CLASS: function CLASS(a) {
                    var b = y[a + " "];return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    });
                }, ATTR: function ATTR(a, b, c) {
                    return function (d) {
                        var e = ga.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
                    };
                }, CHILD: function CHILD(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode;
                    } : function (b, c, i) {
                        var j,
                            k,
                            l,
                            m,
                            n,
                            o,
                            p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;if (q) {
                            if (f) {
                                while (p) {
                                    l = b;while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;o = p = "only" === a && !o && "nextSibling";
                                }return !0;
                            }if ((o = [g ? q.firstChild : q.lastChild], g && s)) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [w, n, m];break;
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;return (m -= e, m === d || m % d === 0 && m / d >= 0);
                        }
                    };
                }, PSEUDO: function PSEUDO(a, b) {
                    var c,
                        e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                        var d,
                            f = e(a, b),
                            g = f.length;while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]);
                    }) : function (a) {
                        return e(a, 0, c);
                    }) : e;
                } }, pseudos: { not: ia(function (a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));return d[u] ? ia(function (a, b, c, e) {
                        var f,
                            g = d(a, null, e, []),
                            h = a.length;while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function (a, e, f) {
                        return (b[0] = a, d(b, null, f, c), b[0] = null, !c.pop());
                    };
                }), has: ia(function (a) {
                    return function (b) {
                        return ga(a, b).length > 0;
                    };
                }), contains: ia(function (a) {
                    return (a = a.replace(ca, da), function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    });
                }), lang: ia(function (a) {
                    return (W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), function (b) {
                        var c;do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return (c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-")); while ((b = b.parentNode) && 1 === b.nodeType);return !1;
                    });
                }), target: function target(b) {
                    var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
                }, root: function root(a) {
                    return a === o;
                }, focus: function focus(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                }, enabled: function enabled(a) {
                    return a.disabled === !1;
                }, disabled: function disabled(a) {
                    return a.disabled === !0;
                }, checked: function checked(a) {
                    var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
                }, selected: function selected(a) {
                    return (a.parentNode && a.parentNode.selectedIndex, a.selected === !0);
                }, empty: function empty(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;return !0;
                }, parent: function parent(a) {
                    return !d.pseudos.empty(a);
                }, header: function header(a) {
                    return Z.test(a.nodeName);
                }, input: function input(a) {
                    return Y.test(a.nodeName);
                }, button: function button(a) {
                    var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
                }, text: function text(a) {
                    var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                }, first: oa(function () {
                    return [0];
                }), last: oa(function (a, b) {
                    return [b - 1];
                }), eq: oa(function (a, b, c) {
                    return [0 > c ? c + b : c];
                }), even: oa(function (a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);return a;
                }), odd: oa(function (a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);return a;
                }), lt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);return a;
                }), gt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);return a;
                }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = ma(b);for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);function qa() {}qa.prototype = d.filters = d.pseudos, d.setFilters = new qa(), g = ga.tokenize = function (a, b) {
            var c,
                e,
                f,
                g,
                h,
                i,
                j,
                k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(R, " ") }), h = h.slice(c.length));for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));if (!c) break;
            }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
        };function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;return d;
        }function sa(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;return b.first ? function (b, c, f) {
                while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f);
            } : function (b, c, g) {
                var h,
                    i,
                    j = [w, f];if (g) {
                    while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                } else while (b = b[d]) if (1 === b.nodeType || e) {
                    if ((i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)) return j[2] = h[2];if ((i[d] = j, j[2] = a(b, c, g))) return !0;
                }
            };
        }function ta(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;while (e--) if (!a[e](b, c, d)) return !1;return !0;
            } : a[0];
        }function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);return c;
        }function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));return g;
        }function wa(a, b, c, d, e, f) {
            return (d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
                var j,
                    k,
                    l,
                    m = [],
                    n = [],
                    o = g.length,
                    p = f || ua(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : va(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;if ((c && c(q, r, h, i), d)) {
                    j = va(r, n), d(j, [], h, i), k = j.length;while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                }if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;while (k--) (l = r[k]) && j.push(q[k] = l);e(null, r = [], j, i);
                        }k = r.length;while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                    }
                } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
            }));
        }function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
                return a === b;
            }, h, !0), l = sa(function (a) {
                return J(b, a) > -1;
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return (b = null, e);
            }]; f > i; i++) if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];else {
                if ((c = d.filter[a[i].type].apply(null, a[i].matches), c[u])) {
                    for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a));
                }m.push(c);
            }return ta(m);
        }function ya(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = (function (_f) {
                function f(_x, _x2, _x3, _x4, _x5) {
                    return _f.apply(this, arguments);
                }

                f.toString = function () {
                    return _f.toString();
                };

                return f;
            })(function (f, g, h, i, k) {
                var l,
                    m,
                    o,
                    p = 0,
                    q = "0",
                    r = f && [],
                    s = [],
                    t = j,
                    u = f || e && d.find.TAG("*", k),
                    v = w += null == t ? 1 : Math.random() || 0.1,
                    x = u.length;for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;while (o = a[m++]) if (o(l, g, h)) {
                            i.push(l);break;
                        }k && (w = v);
                    }c && ((l = !o && l) && p--, f && r.push(l));
                }if ((p += q, c && q !== p)) {
                    m = 0;while (o = b[m++]) o(r, s, g, h);if (f) {
                        if (p > 0) while (q--) r[q] || s[q] || (s[q] = F.call(i));s = va(s);
                    }H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
                }return (k && (w = v, j = t), r);
            });return c ? ia(f) : f;
        }return (h = ga.compile = function (a, b) {
            var c,
                d = [],
                e = [],
                f = A[a + " "];if (!f) {
                b || (b = g(a)), c = b.length;while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);f = A(a, ya(e, d)), f.selector = a;
            }return f;
        }, i = ga.select = function (a, b, e, f) {
            var i,
                j,
                k,
                l,
                m,
                n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);if ((e = e || [], 1 === o.length)) {
                if ((j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type])) {
                    if ((b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b)) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
                }i = X.needsContext.test(a) ? 0 : j.length;while (i--) {
                    if ((k = j[i], d.relative[l = k.type])) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if ((j.splice(i, 1), a = f.length && ra(j), !a)) return (H.apply(e, f), e);break;
                    }
                }
            }return ((n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e);
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"));
        }), ja(function (a) {
            return (a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href"));
        }) || ka("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), c.attributes && ja(function (a) {
            return (a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value"));
        }) || ka("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), ja(function (a) {
            return null == a.getAttribute("disabled");
        }) || ka(K, function (a, b, c) {
            var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), ga);
    })(a);n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;var u = n.expr.match.needsContext,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;function x(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c;
        });if (b.nodeType) return n.grep(a, function (a) {
            return a === b !== c;
        });if ("string" == typeof b) {
            if (w.test(b)) return n.filter(b, a, c);b = n.filter(b, a);
        }return n.grep(a, function (a) {
            return g.call(b, a) >= 0 !== c;
        });
    }n.filter = function (a, b, c) {
        var d = b[0];return (c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
            return 1 === a.nodeType;
        })));
    }, n.fn.extend({ find: function find(a) {
            var b,
                c = this.length,
                d = [],
                e = this;if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
                for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
            }));for (b = 0; c > b; b++) n.find(a, e[b], d);return (d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d);
        }, filter: function filter(a) {
            return this.pushStack(x(this, a || [], !1));
        }, not: function not(a) {
            return this.pushStack(x(this, a || [], !0));
        }, is: function is(a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length;
        } });var y,
        z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = n.fn.init = function (a, b) {
        var c, d;if (!a) return this;if ("string" == typeof a) {
            if ((c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b)) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);if (c[1]) {
                if ((b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))) for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);return this;
            }return (d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this);
        }return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
    };A.prototype = n.fn, y = n(l);var B = /^(?:parents|prev(?:Until|All))/,
        C = { children: !0, contents: !0, next: !0, prev: !0 };n.extend({ dir: function dir(a, b, c) {
            var d = [],
                e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
                if (e && n(a).is(c)) break;d.push(a);
            }return d;
        }, sibling: function sibling(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);return c;
        } }), n.fn.extend({ has: function has(a) {
            var b = n(a, this),
                c = b.length;return this.filter(function () {
                for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
            });
        }, closest: function closest(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                f.push(c);break;
            }return this.pushStack(f.length > 1 ? n.unique(f) : f);
        }, index: function index(a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        }, add: function add(a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
        }, addBack: function addBack(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        } });function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);return a;
    }n.each({ parent: function parent(a) {
            var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
        }, parents: function parents(a) {
            return n.dir(a, "parentNode");
        }, parentsUntil: function parentsUntil(a, b, c) {
            return n.dir(a, "parentNode", c);
        }, next: function next(a) {
            return D(a, "nextSibling");
        }, prev: function prev(a) {
            return D(a, "previousSibling");
        }, nextAll: function nextAll(a) {
            return n.dir(a, "nextSibling");
        }, prevAll: function prevAll(a) {
            return n.dir(a, "previousSibling");
        }, nextUntil: function nextUntil(a, b, c) {
            return n.dir(a, "nextSibling", c);
        }, prevUntil: function prevUntil(a, b, c) {
            return n.dir(a, "previousSibling", c);
        }, siblings: function siblings(a) {
            return n.sibling((a.parentNode || {}).firstChild, a);
        }, children: function children(a) {
            return n.sibling(a.firstChild);
        }, contents: function contents(a) {
            return a.contentDocument || n.merge([], a.childNodes);
        } }, function (a, b) {
        n.fn[a] = function (c, d) {
            var e = n.map(this, b, c);return ("Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e));
        };
    });var E = /\S+/g,
        F = {};function G(a) {
        var b = F[a] = {};return (n.each(a.match(E) || [], function (a, c) {
            b[c] = !0;
        }), b);
    }n.Callbacks = function (a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);var b,
            c,
            d,
            e,
            f,
            g,
            h = [],
            i = !a.once && [],
            j = function j(l) {
            for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                b = !1;break;
            }d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable());
        },
            k = { add: function add() {
                if (h) {
                    var c = h.length;!(function g(b) {
                        n.each(b, function (b, c) {
                            var d = n.type(c);"function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c);
                        });
                    })(arguments), d ? f = h.length : b && (e = c, j(b));
                }return this;
            }, remove: function remove() {
                return (h && n.each(arguments, function (a, b) {
                    var c;while ((c = n.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
                }), this);
            }, has: function has(a) {
                return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
            }, empty: function empty() {
                return (h = [], f = 0, this);
            }, disable: function disable() {
                return (h = i = b = void 0, this);
            }, disabled: function disabled() {
                return !h;
            }, lock: function lock() {
                return (i = void 0, b || k.disable(), this);
            }, locked: function locked() {
                return !i;
            }, fireWith: function fireWith(a, b) {
                return (!h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this);
            }, fire: function fire() {
                return (k.fireWith(this, arguments), this);
            }, fired: function fired() {
                return !!c;
            } };return k;
    }, n.extend({ Deferred: function Deferred(a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
                c = "pending",
                d = { state: function state() {
                    return c;
                }, always: function always() {
                    return (e.done(arguments).fail(arguments), this);
                }, then: function then() {
                    var a = arguments;return n.Deferred(function (c) {
                        n.each(b, function (b, f) {
                            var g = n.isFunction(a[b]) && a[b];e[f[1]](function () {
                                var a = g && g.apply(this, arguments);a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
                            });
                        }), a = null;
                    }).promise();
                }, promise: function promise(a) {
                    return null != a ? n.extend(a, d) : d;
                } },
                e = {};return (d.pipe = d.then, n.each(b, function (a, f) {
                var g = f[2],
                    h = f[3];d[f[1]] = g.add, h && g.add(function () {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return (e[f[0] + "With"](this === e ? d : this, arguments), this);
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e);
        }, when: function when(a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function h(a, b, c) {
                return function (e) {
                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
                };
            },
                i,
                j,
                k;if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;return (f || g.resolveWith(k, c), g.promise());
        } });var H;n.fn.ready = function (a) {
        return (n.ready.promise().done(a), this);
    }, n.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
            a ? n.readyWait++ : n.ready(!0);
        }, ready: function ready(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))));
        } });function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready();
    }n.ready.promise = function (b) {
        return (H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b));
    }, n.ready.promise();var J = n.access = function (a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;if ("object" === n.type(c)) {
            e = !0;for (h in c) n.access(a, b, h, c[h], !0, f, g);
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
            return j.call(n(a), c);
        })), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    };n.acceptData = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || ! +a.nodeType;
    };function K() {
        Object.defineProperty(this.cache = {}, 0, { get: function get() {
                return {};
            } }), this.expando = n.expando + K.uid++;
    }K.uid = 1, K.accepts = n.acceptData, K.prototype = { key: function key(a) {
            if (!K.accepts(a)) return 0;var b = {},
                c = a[this.expando];if (!c) {
                c = K.uid++;try {
                    b[this.expando] = { value: c }, Object.defineProperties(a, b);
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b);
                }
            }return (this.cache[c] || (this.cache[c] = {}), c);
        }, set: function set(a, b, c) {
            var d,
                e = this.key(a),
                f = this.cache[e];if ("string" == typeof b) f[b] = c;else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);else for (d in b) f[d] = b[d];return f;
        }, get: function get(a, b) {
            var c = this.cache[this.key(a)];return void 0 === b ? c : c[b];
        }, access: function access(a, b, c) {
            var d;return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
        }, remove: function remove(a, b) {
            var c,
                d,
                e,
                f = this.key(a),
                g = this.cache[f];if (void 0 === b) this.cache[f] = {};else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;while (c--) delete g[d[c]];
            }
        }, hasData: function hasData(a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {});
        }, discard: function discard(a) {
            a[this.expando] && delete this.cache[a[this.expando]];
        } };var L = new K(),
        M = new K(),
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;function P(a, b, c) {
        var d;if (void 0 === c && 1 === a.nodeType) if ((d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c)) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
            } catch (e) {}M.set(a, b, c);
        } else c = void 0;return c;
    }n.extend({ hasData: function hasData(a) {
            return M.hasData(a) || L.hasData(a);
        }, data: function data(a, b, c) {
            return M.access(a, b, c);
        }, removeData: function removeData(a, b) {
            M.remove(a, b);
        }, _data: function _data(a, b, c) {
            return L.access(a, b, c);
        }, _removeData: function _removeData(a, b) {
            L.remove(a, b);
        } }), n.fn.extend({ data: function data(a, b) {
            var c,
                d,
                e,
                f = this[0],
                g = f && f.attributes;if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    c = g.length;while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));L.set(f, "hasDataAttrs", !0);
                }return e;
            }return "object" == typeof a ? this.each(function () {
                M.set(this, a);
            }) : J(this, function (b) {
                var c,
                    d = n.camelCase(a);if (f && void 0 === b) {
                    if ((c = M.get(f, a), void 0 !== c)) return c;if ((c = M.get(f, d), void 0 !== c)) return c;if ((c = P(f, d, void 0), void 0 !== c)) return c;
                } else this.each(function () {
                    var c = M.get(this, d);M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b);
                });
            }, null, b, arguments.length > 1, null, !0);
        }, removeData: function removeData(a) {
            return this.each(function () {
                M.remove(this, a);
            });
        } }), n.extend({ queue: function queue(a, b, c) {
            var d;return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
        }, dequeue: function dequeue(a, b) {
            b = b || "fx";var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function g() {
                n.dequeue(a, b);
            };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        }, _queueHooks: function _queueHooks(a, b) {
            var c = b + "queueHooks";return L.get(a, c) || L.access(a, c, { empty: n.Callbacks("once memory").add(function () {
                    L.remove(a, [b + "queue", c]);
                }) });
        } }), n.fn.extend({ queue: function queue(a, b) {
            var c = 2;return ("string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = n.queue(this, a, b);n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
            }));
        }, dequeue: function dequeue(a) {
            return this.each(function () {
                n.dequeue(this, a);
            });
        }, clearQueue: function clearQueue(a) {
            return this.queue(a || "fx", []);
        }, promise: function promise(a, b) {
            var c,
                d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function h() {
                --d || e.resolveWith(f, [f]);
            };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));return (h(), e.promise(b));
        } });var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        R = ["Top", "Right", "Bottom", "Left"],
        S = function S(a, b) {
        return (a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a));
    },
        T = /^(?:checkbox|radio)$/i;!(function () {
        var a = l.createDocumentFragment(),
            b = a.appendChild(l.createElement("div")),
            c = l.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    })();var U = "undefined";k.focusinBubbles = "onfocusin" in a;var V = /^key/,
        W = /^(?:mouse|pointer|contextmenu)|click/,
        X = /^(?:focusinfocus|focusoutblur)$/,
        Y = /^([^.]*)(?:\.(.+)|)$/;function Z() {
        return !0;
    }function $() {
        return !1;
    }function _() {
        try {
            return l.activeElement;
        } catch (a) {}
    }n.event = { global: {}, add: function add(a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                o,
                p,
                q,
                r = L.get(a);if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
                }), b = (b || "").match(E) || [""], j = b.length;while (j--) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
            }
        }, remove: function remove(a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                o,
                p,
                q,
                r = L.hasData(a) && L.get(a);if (r && (i = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;while (j--) if ((h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o)) {
                    l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
                } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
            }
        }, trigger: function trigger(b, c, d, e) {
            var f,
                g,
                h,
                i,
                k,
                m,
                o,
                p = [d || l],
                q = j.call(b, "type") ? b.type : b,
                r = j.call(b, "namespace") ? b.namespace.split(".") : [];if ((g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1))) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), h = g;h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
                }f = 0;while ((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());return (b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result);
            }
        }, dispatch: function dispatch(a) {
            a = n.event.fix(a);var b,
                c,
                e,
                f,
                g,
                h = [],
                i = d.call(arguments),
                j = (L.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};if ((i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1)) {
                h = n.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
                }return (k.postDispatch && k.postDispatch.call(this, a), a.result);
            }
        }, handlers: function handlers(a, b) {
            var c,
                d,
                e,
                f,
                g = [],
                h = b.delegateCount,
                i = a.target;if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i !== this; i = i.parentNode || this) if (i.disabled !== !0 || "click" !== a.type) {
                for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);d.length && g.push({ elem: i, handlers: d });
            }return (h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g);
        }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(a, b) {
                return (null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a);
            } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(a, b) {
                var c,
                    d,
                    e,
                    f = b.button;return (null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a);
            } }, fix: function fix(a) {
            if (a[n.expando]) return a;var b,
                c,
                d,
                e = a.type,
                f = a,
                g = this.fixHooks[e];g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;while (b--) c = d[b], a[c] = f[c];return (a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a);
        }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0;
                }, delegateType: "focusin" }, blur: { trigger: function trigger() {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0;
                }, delegateType: "focusout" }, click: { trigger: function trigger() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
                }, _default: function _default(a) {
                    return n.nodeName(a.target, "a");
                } }, beforeunload: { postDispatch: function postDispatch(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                } } }, simulate: function simulate(a, b, c, d) {
            var e = n.extend(new n.Event(), c, { type: a, isSimulated: !0, originalEvent: {} });d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        } }, n.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    }, n.Event = function (a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
    }, n.Event.prototype = { isDefaultPrevented: $, isPropagationStopped: $, isImmediatePropagationStopped: $, preventDefault: function preventDefault() {
            var a = this.originalEvent;this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault();
        }, stopPropagation: function stopPropagation() {
            var a = this.originalEvent;this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation();
        }, stopImmediatePropagation: function stopImmediatePropagation() {
            var a = this.originalEvent;this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
        } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
        n.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
                var c,
                    d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;return ((!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c);
            } };
    }), k.focusinBubbles || n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function c(a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0);
        };n.event.special[b] = { setup: function setup() {
                var d = this.ownerDocument || this,
                    e = L.access(d, b);e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
            }, teardown: function teardown() {
                var d = this.ownerDocument || this,
                    e = L.access(d, b) - 1;e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
            } };
    }), n.fn.extend({ on: function on(a, b, c, d, e) {
            var f, g;if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);for (g in a) this.on(g, b, c, a[g], e);return this;
            }if ((null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)) d = $;else if (!d) return this;return (1 === e && (f = d, d = function (a) {
                return (n().off(a), f.apply(this, arguments));
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
                n.event.add(this, a, d, c, b);
            }));
        }, one: function one(a, b, c, d) {
            return this.on(a, b, c, d, 1);
        }, off: function off(a, b, c) {
            var d, e;if (a && a.preventDefault && a.handleObj) return (d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this);if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);return this;
            }return ((b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
                n.event.remove(this, a, c, b);
            }));
        }, trigger: function trigger(a, b) {
            return this.each(function () {
                n.event.trigger(a, b, this);
            });
        }, triggerHandler: function triggerHandler(a, b) {
            var c = this[0];return c ? n.event.trigger(a, b, c, !0) : void 0;
        } });var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ba = /<([\w:]+)/,
        ca = /<|&#?\w+;/,
        da = /<(?:script|style|link)/i,
        ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fa = /^$|\/(?:java|ecma)script/i,
        ga = /^true\/(.*)/,
        ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ia = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;function ja(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }function ka(a) {
        return (a.type = (null !== a.getAttribute("type")) + "/" + a.type, a);
    }function la(a) {
        var b = ga.exec(a.type);return (b ? a.type = b[1] : a.removeAttribute("type"), a);
    }function ma(a, b) {
        for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
    }function na(a, b) {
        var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};for (e in j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
            }M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i));
        }
    }function oa(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
    }function pa(a, b) {
        var c = b.nodeName.toLowerCase();"input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
    }n.extend({ clone: function clone(a, b, c) {
            var d,
                e,
                f,
                g,
                h = a.cloneNode(!0),
                i = n.contains(a.ownerDocument, a);if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) pa(f[d], g[d]);if (b) if (c) for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) na(f[d], g[d]);else na(a, h);return (g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h);
        }, buildFragment: function buildFragment(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) if ((e = a[m], e || 0 === e)) if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);else if (ca.test(e)) {
                f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];while (j--) f = f.lastChild;n.merge(l, f.childNodes), f = k.firstChild, f.textContent = "";
            } else l.push(b.createTextNode(e));k.textContent = "", m = 0;while (e = l[m++]) if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
                j = 0;while (e = f[j++]) fa.test(e.type || "") && c.push(e);
            }return k;
        }, cleanData: function cleanData(a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events) for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);L.cache[e] && delete L.cache[e];
                }delete M.cache[c[M.expando]];
            }
        } }), n.fn.extend({ text: function text(a) {
            return J(this, function (a) {
                return void 0 === a ? n.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
                });
            }, null, a, arguments.length);
        }, append: function append() {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);b.appendChild(a);
                }
            });
        }, prepend: function prepend() {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);b.insertBefore(a, b.firstChild);
                }
            });
        }, before: function before() {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        }, after: function after() {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        }, remove: function remove(a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));return this;
        }, empty: function empty() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");return this;
        }, clone: function clone(a, b) {
            return (a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return n.clone(this, a, b);
            }));
        }, html: function html(a) {
            return J(this, function (a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(aa, "<$1></$2>");try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);b = 0;
                    } catch (e) {}
                }b && this.empty().append(a);
            }, null, a, arguments.length);
        }, replaceWith: function replaceWith() {
            var a = arguments[0];return (this.domManip(arguments, function (b) {
                a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this);
            }), a && (a.length || a.nodeType) ? this : this.remove());
        }, detach: function detach(a) {
            return this.remove(a, !0);
        }, domManip: function domManip(a, b) {
            a = e.apply([], a);var c,
                d,
                f,
                g,
                h,
                i,
                j = 0,
                l = this.length,
                m = this,
                o = l - 1,
                p = a[0],
                q = n.isFunction(p);if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function (c) {
                var d = m.eq(c);q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
            });if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);if (g) for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")));
            }return this;
        } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
        n.fn[a] = function (a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());return this.pushStack(d);
        };
    });var qa,
        ra = {};function sa(b, c) {
        var d,
            e = n(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");return (e.detach(), f);
    }function ta(a) {
        var b = l,
            c = ra[a];return (c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c);
    }var ua = /^margin/,
        va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
        wa = function wa(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
    };function xa(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.style;return (c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g);
    }function ya(a, b) {
        return { get: function get() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            } };
    }!(function () {
        var b,
            c,
            d = l.documentElement,
            e = l.createElement("div"),
            f = l.createElement("div");if (f.style) {
            (function () {
                var g = function () {
                    f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);var g = a.getComputedStyle(f, null);b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e);
                };

                f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);a.getComputedStyle && n.extend(k, { pixelPosition: function pixelPosition() {
                        return (g(), b);
                    }, boxSizingReliable: function boxSizingReliable() {
                        return (null == c && g(), c);
                    }, reliableMarginRight: function reliableMarginRight() {
                        var b,
                            c = f.appendChild(l.createElement("div"));return (c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b);
                    } });
            })();
        }
    })(), n.swap = function (a, b, c, d) {
        var e,
            f,
            g = {};for (f in b) g[f] = a.style[f], a.style[f] = b[f];e = c.apply(a, d || []);for (f in b) a.style[f] = g[f];return e;
    };var za = /^(none|table(?!-c[ea]).+)/,
        Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
        Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
        Ca = { position: "absolute", visibility: "hidden", display: "block" },
        Da = { letterSpacing: "0", fontWeight: "400" },
        Ea = ["Webkit", "O", "Moz", "ms"];function Fa(a, b) {
        if (b in a) return b;var c = b[0].toUpperCase() + b.slice(1),
            d = b,
            e = Ea.length;while (e--) if ((b = Ea[e] + c, b in a)) return b;return d;
    }function Ga(a, b, c) {
        var d = Aa.exec(b);return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }function Ha(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));return g;
    }function Ia(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = wa(a),
            g = "border-box" === n.css(a, "boxSizing", !1, f);if (0 >= e || null == e) {
            if ((e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e))) return e;d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
        }return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }function Ja(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));return a;
    }n.extend({ cssHooks: { opacity: { get: function get(a, b) {
                    if (b) {
                        var c = xa(a, "opacity");return "" === c ? "1" : c;
                    }
                } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e,
                    f,
                    g,
                    h = n.camelCase(b),
                    i = a.style;return (b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0));
            }
        }, css: function css(a, b, c, d) {
            var e,
                f,
                g,
                h = n.camelCase(b);return (b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e);
        } }), n.each(["height", "width"], function (a, b) {
        n.cssHooks[b] = { get: function get(a, c, d) {
                return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function () {
                    return Ia(a, b, d);
                }) : Ia(a, b, d) : void 0;
            }, set: function set(a, c, d) {
                var e = d && wa(a);return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
            } };
    }), n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
        return b ? n.swap(a, { display: "inline-block" }, xa, [a, "marginRight"]) : void 0;
    }), n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
        n.cssHooks[a + b] = { expand: function expand(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];return e;
            } }, ua.test(a) || (n.cssHooks[a + b].set = Ga);
    }), n.fn.extend({ css: function css(a, b) {
            return J(this, function (a, b, c) {
                var d,
                    e,
                    f = {},
                    g = 0;if (n.isArray(b)) {
                    for (d = wa(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);return f;
                }return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
            }, a, b, arguments.length > 1);
        }, show: function show() {
            return Ja(this, !0);
        }, hide: function hide() {
            return Ja(this);
        }, toggle: function toggle(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                S(this) ? n(this).show() : n(this).hide();
            });
        } });function Ka(a, b, c, d, e) {
        return new Ka.prototype.init(a, b, c, d, e);
    }n.Tween = Ka, Ka.prototype = { constructor: Ka, init: function init(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
        }, cur: function cur() {
            var a = Ka.propHooks[this.prop];return a && a.get ? a.get(this) : Ka.propHooks._default.get(this);
        }, run: function run(a) {
            var b,
                c = Ka.propHooks[this.prop];return (this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this);
        } }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = { _default: { get: function get(a) {
                var b;return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop];
            }, set: function set(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            } } }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = { set: function set(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        } }, n.easing = { linear: function linear(a) {
            return a;
        }, swing: function swing(a) {
            return 0.5 - Math.cos(a * Math.PI) / 2;
        } }, n.fx = Ka.prototype.init, n.fx.step = {};var La,
        Ma,
        Na = /^(?:toggle|show|hide)$/,
        Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
        Pa = /queueHooks$/,
        Qa = [Va],
        Ra = { "*": [function (a, b) {
            var c = this.createTween(a, b),
                d = c.cur(),
                e = Oa.exec(b),
                f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
                g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)),
                h = 1,
                i = 20;if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }return (e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c);
        }] };function Sa() {
        return (setTimeout(function () {
            La = void 0;
        }), La = n.now());
    }function Ta(a, b) {
        var c,
            d = 0,
            e = { height: a };for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;return (b && (e.opacity = e.width = a), e);
    }function Ua(a, b, c) {
        for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
    }function Va(a, b, c) {
        var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l = this,
            m = {},
            o = a.style,
            p = a.nodeType && S(a),
            q = L.get(a, "fxshow");c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i();
        }), h.unqueued++, l.always(function () {
            l.always(function () {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
            });
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
        }));for (d in b) if ((e = b[d], Na.exec(e))) {
            if ((delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show"))) {
                if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
            }m[d] = q && q[d] || n.style(a, d);
        } else j = void 0;if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);else {
            q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
                n(a).hide();
            }), l.done(function () {
                var b;L.remove(a, "fxshow");for (b in m) n.style(a, b, m[b]);
            });for (d in m) g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
        }
    }function Wa(a, b) {
        var c, d, e, f, g;for (c in a) if ((d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g)) {
            f = g.expand(f), delete a[d];for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }function Xa(a, b, c) {
        var d,
            e,
            f = 0,
            g = Qa.length,
            h = n.Deferred().always(function () {
            delete i.elem;
        }),
            i = function i() {
            if (e) return !1;for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);return (h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1));
        },
            j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: La || Sa(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return (j.tweens.push(d), d);
            }, stop: function stop(b) {
                var c = 0,
                    d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) j.tweens[c].run(1);return (b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this);
            } }),
            k = j.props;for (Wa(k, j.opts.specialEasing); g > f; f++) if (d = Qa[f].call(j, a, k, j.opts)) return d;return (n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always));
    }n.Animation = n.extend(Xa, { tweener: function tweener(a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b);
        }, prefilter: function prefilter(a, b) {
            b ? Qa.unshift(a) : Qa.push(a);
        } }), n.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b };return (d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
        }, d);
    }, n.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
        }, animate: function animate(a, b, c, d) {
            var e = n.isEmptyObject(a),
                f = n.speed(b, c, d),
                g = function g() {
                var b = Xa(this, n.extend({}, a), f);(e || L.get(this, "finish")) && b.stop(!0);
            };return (g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g));
        }, stop: function stop(a, b, c) {
            var d = function d(a) {
                var b = a.stop;delete a.stop, b(c);
            };return ("string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = n.timers,
                    g = L.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));(b || !c) && n.dequeue(this, a);
            }));
        }, finish: function finish(a) {
            return (a !== !1 && (a = a || "fx"), this.each(function () {
                var b,
                    c = L.get(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = n.timers,
                    g = d ? d.length : 0;for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);delete c.finish;
            }));
        } }), n.each(["toggle", "show", "hide"], function (a, b) {
        var c = n.fn[b];n.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e);
        };
    }), n.each({ slideDown: Ta("show"), slideUp: Ta("hide"), slideToggle: Ta("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
        n.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), n.timers = [], n.fx.tick = function () {
        var a,
            b = 0,
            c = n.timers;for (La = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);c.length || n.fx.stop(), La = void 0;
    }, n.fx.timer = function (a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }, n.fx.interval = 13, n.fx.start = function () {
        Ma || (Ma = setInterval(n.fx.tick, n.fx.interval));
    }, n.fx.stop = function () {
        clearInterval(Ma), Ma = null;
    }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (a, b) {
        return (a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);c.stop = function () {
                clearTimeout(d);
            };
        }));
    }, (function () {
        var a = l.createElement("input"),
            b = l.createElement("select"),
            c = b.appendChild(l.createElement("option"));a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value;
    })();var Ya,
        Za,
        $a = n.expr.attrHandle;n.fn.extend({ attr: function attr(a, b) {
            return J(this, n.attr, a, b, arguments.length > 1);
        }, removeAttr: function removeAttr(a) {
            return this.each(function () {
                n.removeAttr(this, a);
            });
        } }), n.extend({ attr: function attr(a, b, c) {
            var d,
                e,
                f = a.nodeType;if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b));
        }, removeAttr: function removeAttr(a, b) {
            var c,
                d,
                e = 0,
                f = b && b.match(E);if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
        }, attrHooks: { type: { set: function set(a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;return (a.setAttribute("type", b), c && (a.value = c), b);
                    }
                } } } }), Za = { set: function set(a, b, c) {
            return (b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c);
        } }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = $a[b] || n.find.attr;$a[b] = function (a, b, d) {
            var e, f;return (d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e);
        };
    });var _a = /^(?:input|select|textarea|button)$/i;n.fn.extend({ prop: function prop(a, b) {
            return J(this, n.prop, a, b, arguments.length > 1);
        }, removeProp: function removeProp(a) {
            return this.each(function () {
                delete this[n.propFix[a] || a];
            });
        } }), n.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function prop(a, b, c) {
            var d,
                e,
                f,
                g = a.nodeType;if (a && 3 !== g && 8 !== g && 2 !== g) return (f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]);
        }, propHooks: { tabIndex: { get: function get(a) {
                    return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1;
                } } } }), k.optSelected || (n.propHooks.selected = { get: function get(a) {
            var b = a.parentNode;return (b && b.parentNode && b.parentNode.selectedIndex, null);
        } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        n.propFix[this.toLowerCase()] = this;
    });var ab = /[\t\r\n\f]/g;n.fn.extend({ addClass: function addClass(a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h = "string" == typeof a && a,
                i = 0,
                j = this.length;if (n.isFunction(a)) return this.each(function (b) {
                n(this).addClass(a.call(this, b, this.className));
            });if (h) for (b = (a || "").match(E) || []; j > i; i++) if ((c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " "))) {
                f = 0;while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");g = n.trim(d), c.className !== g && (c.className = g);
            }return this;
        }, removeClass: function removeClass(a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h = 0 === arguments.length || "string" == typeof a && a,
                i = 0,
                j = this.length;if (n.isFunction(a)) return this.each(function (b) {
                n(this).removeClass(a.call(this, b, this.className));
            });if (h) for (b = (a || "").match(E) || []; j > i; i++) if ((c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : ""))) {
                f = 0;while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");g = a ? n.trim(d) : "", c.className !== g && (c.className = g);
            }return this;
        }, toggleClass: function toggleClass(a, b) {
            var c = typeof a;return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b);
            } : function () {
                if ("string" === c) {
                    var b,
                        d = 0,
                        e = n(this),
                        f = a.match(E) || [];while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                } else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "");
            });
        }, hasClass: function hasClass(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;return !1;
        } });var bb = /\r/g;n.fn.extend({ val: function val(a) {
            var b,
                c,
                d,
                e = this[0];{
                if (arguments.length) return (d = n.isFunction(a), this.each(function (c) {
                    var e;1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
                        return null == a ? "" : a + "";
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
                }));if (e) return (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c));
            }
        } }), n.extend({ valHooks: { option: { get: function get(a) {
                    var b = n.find.attr(a, "value");return null != b ? b : n.trim(n.text(a));
                } }, select: { get: function get(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if ((c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup")))) {
                        if ((b = n(c).val(), f)) return b;g.push(b);
                    }return g;
                }, set: function set(a, b) {
                    var c,
                        d,
                        e = a.options,
                        f = n.makeArray(b),
                        g = e.length;while (g--) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);return (c || (a.selectedIndex = -1), f);
                } } } }), n.each(["radio", "checkbox"], function () {
        n.valHooks[this] = { set: function set(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0;
            } }, k.checkOn || (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        n.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), n.fn.extend({ hover: function hover(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        }, bind: function bind(a, b, c) {
            return this.on(a, null, b, c);
        }, unbind: function unbind(a, b) {
            return this.off(a, null, b);
        }, delegate: function delegate(a, b, c, d) {
            return this.on(b, a, c, d);
        }, undelegate: function undelegate(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        } });var cb = n.now(),
        db = /\?/;n.parseJSON = function (a) {
        return JSON.parse(a + "");
    }, n.parseXML = function (a) {
        var b, c;if (!a || "string" != typeof a) return null;try {
            c = new DOMParser(), b = c.parseFromString(a, "text/xml");
        } catch (d) {
            b = void 0;
        }return ((!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b);
    };var eb = /#.*$/,
        fb = /([?&])_=[^&]*/,
        gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        ib = /^(?:GET|HEAD)$/,
        jb = /^\/\//,
        kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        lb = {},
        mb = {},
        nb = "*/".concat("*"),
        ob = a.location.href,
        pb = kb.exec(ob.toLowerCase()) || [];function qb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");var d,
                e = 0,
                f = b.toLowerCase().match(E) || [];if (n.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }function rb(a, b, c, d) {
        var e = {},
            f = a === mb;function g(h) {
            var i;return (e[h] = !0, n.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
            }), i);
        }return g(b.dataTypes[0]) || !e["*"] && g("*");
    }function sb(a, b) {
        var c,
            d,
            e = n.ajaxSettings.flatOptions || {};for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);return (d && n.extend(!0, a, d), a);
    }function tb(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.contents,
            i = a.dataTypes;while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);break;
        }if (i[0] in c) f = i[0];else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;break;
                }g || (g = e);
            }f = f || g;
        }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }function ub(a, b, c, d) {
        var e,
            f,
            g,
            h,
            i,
            j = {},
            k = a.dataTypes.slice();if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];f = k.shift();while (f) if ((a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
            if ((g = j[i + " " + f] || j["* " + f], !g)) for (e in j) if ((h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
            }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
                b = g(b);
            } catch (l) {
                return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
            }
        }return { state: "success", data: b };
    }n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: ob, type: "GET", isLocal: hb.test(pb[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": nb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
            return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a);
        }, ajaxPrefilter: qb(lb), ajaxTransport: qb(mb), ajax: function ajax(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};var c,
                d,
                e,
                f,
                g,
                h,
                i,
                j,
                k = n.ajaxSetup({}, b),
                l = k.context || k,
                m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
                o = n.Deferred(),
                p = n.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
                    var b;if (2 === t) {
                        if (!f) {
                            f = {};while (b = gb.exec(e)) f[b[1].toLowerCase()] = b[2];
                        }b = f[a.toLowerCase()];
                    }return null == b ? null : b;
                }, getAllResponseHeaders: function getAllResponseHeaders() {
                    return 2 === t ? e : null;
                }, setRequestHeader: function setRequestHeader(a, b) {
                    var c = a.toLowerCase();return (t || (a = s[c] = s[c] || a, r[a] = b), this);
                }, overrideMimeType: function overrideMimeType(a) {
                    return (t || (k.mimeType = a), this);
                }, statusCode: function statusCode(a) {
                    var b;if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]];else v.always(a[v.status]);return this;
                }, abort: function abort(a) {
                    var b = a || u;return (c && c.abort(b), x(0, b), this);
                } };if ((o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t)) return v;i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);for (j in k.headers) v.setRequestHeader(j, k.headers[j]);if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();u = "abort";for (j in { success: 1, error: 1, complete: 1 }) v[j](k[j]);if (c = rb(mb, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort("timeout");
                }, k.timeout));try {
                    t = 1, c.send(r, x);
                } catch (w) {
                    if (!(2 > t)) throw w;x(-1, w);
                }
            } else x(-1, "No Transport");function x(a, b, f, h) {
                var j,
                    r,
                    s,
                    u,
                    w,
                    x = b;2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")));
            }return v;
        }, getJSON: function getJSON(a, b, c) {
            return n.get(a, b, c, "json");
        }, getScript: function getScript(a, b) {
            return n.get(a, void 0, b, "script");
        } }), n.each(["get", "post"], function (a, b) {
        n[b] = function (a, c, d, e) {
            return (n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({ url: a, type: b, dataType: e, data: c, success: d }));
        };
    }), n._evalUrl = function (a) {
        return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
    }, n.fn.extend({ wrapAll: function wrapAll(a) {
            var b;return n.isFunction(a) ? this.each(function (b) {
                n(this).wrapAll(a.call(this, b));
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;while (a.firstElementChild) a = a.firstElementChild;return a;
            }).append(this)), this);
        }, wrapInner: function wrapInner(a) {
            return this.each(n.isFunction(a) ? function (b) {
                n(this).wrapInner(a.call(this, b));
            } : function () {
                var b = n(this),
                    c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
            });
        }, wrap: function wrap(a) {
            var b = n.isFunction(a);return this.each(function (c) {
                n(this).wrapAll(b ? a.call(this, c) : a);
            });
        }, unwrap: function unwrap() {
            return this.parent().each(function () {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
            }).end();
        } }), n.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }, n.expr.filters.visible = function (a) {
        return !n.expr.filters.hidden(a);
    };var vb = /%20/g,
        wb = /\[\]$/,
        xb = /\r?\n/g,
        yb = /^(?:submit|button|image|reset|file)$/i,
        zb = /^(?:input|select|textarea|keygen)/i;function Ab(a, b, c, d) {
        var e;if (n.isArray(b)) n.each(b, function (b, e) {
            c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) Ab(a + "[" + e + "]", b[e], c, d);
    }n.param = function (a, b) {
        var c,
            d = [],
            e = function e(a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };if ((void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a))) n.each(a, function () {
            e(this.name, this.value);
        });else for (c in a) Ab(c, a[c], b, e);return d.join("&").replace(vb, "+");
    }, n.fn.extend({ serialize: function serialize() {
            return n.param(this.serializeArray());
        }, serializeArray: function serializeArray() {
            return this.map(function () {
                var a = n.prop(this, "elements");return a ? n.makeArray(a) : this;
            }).filter(function () {
                var a = this.type;return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a));
            }).map(function (a, b) {
                var c = n(this).val();return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
                    return { name: b.name, value: a.replace(xb, "\r\n") };
                }) : { name: b.name, value: c.replace(xb, "\r\n") };
            }).get();
        } }), n.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest();
        } catch (a) {}
    };var Bb = 0,
        Cb = {},
        Db = { 0: 200, 1223: 204 },
        Eb = n.ajaxSettings.xhr();a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in Cb) Cb[a]();
    }), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function (a) {
        var b;return k.cors || Eb && !a.crossDomain ? { send: function send(c, d) {
                var e,
                    f = a.xhr(),
                    g = ++Bb;if ((f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)) for (e in a.xhrFields) f[e] = a.xhrFields[e];a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");for (e in c) f.setRequestHeader(e, c[e]);b = function (a) {
                    return function () {
                        b && (delete Cb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? { text: f.responseText } : void 0, f.getAllResponseHeaders()));
                    };
                }, f.onload = b(), f.onerror = b("error"), b = Cb[g] = b("abort");try {
                    f.send(a.hasContent && a.data || null);
                } catch (h) {
                    if (b) throw h;
                }
            }, abort: function abort() {
                b && b();
            } } : void 0;
    }), n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function textScript(a) {
                return (n.globalEval(a), a);
            } } }), n.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), n.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;return { send: function send(d, e) {
                    b = n("<script>").prop({ async: !0, charset: a.scriptCharset, src: a.url }).on("load error", c = function (a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type);
                    }), l.head.appendChild(b[0]);
                }, abort: function abort() {
                    c && c();
                } };
        }
    });var Fb = [],
        Gb = /(=)\?(?=&|$)|\?\?/;n.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
            var a = Fb.pop() || n.expando + "_" + cb++;return (this[a] = !0, a);
        } }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e,
            f,
            g,
            h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return (g || n.error(e + " was not called"), g[0]);
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments;
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
        }), "script") : void 0;
    }), n.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || l;var d = v.exec(a),
            e = !c && [];return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes));
    };var Hb = n.fn.load;n.fn.load = function (a, b, c) {
        if ("string" != typeof a && Hb) return Hb.apply(this, arguments);var d,
            e,
            f,
            g = this,
            h = a.indexOf(" ");return (h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e, dataType: "html", data: b }).done(function (a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
        }).complete(c && function (a, b) {
            g.each(c, f || [a.responseText, b, a]);
        }), this);
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        n.fn[b] = function (a) {
            return this.on(b, a);
        };
    }), n.expr.filters.animated = function (a) {
        return n.grep(n.timers, function (b) {
            return a === b.elem;
        }).length;
    };var Ib = a.document.documentElement;function Jb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }n.offset = { setOffset: function setOffset(a, b, c) {
            var d,
                e,
                f,
                g,
                h,
                i,
                j,
                k = n.css(a, "position"),
                l = n(a),
                m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        } }, n.fn.extend({ offset: function offset(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                n.offset.setOffset(this, a, b);
            });var b,
                c,
                d = this[0],
                e = { top: 0, left: 0 },
                f = d && d.ownerDocument;if (f) return (b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jb(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e);
        }, position: function position() {
            if (this[0]) {
                var a,
                    b,
                    c = this[0],
                    d = { top: 0, left: 0 };return ("fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0) });
            }
        }, offsetParent: function offsetParent() {
            return this.map(function () {
                var a = this.offsetParent || Ib;while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;return a || Ib;
            });
        } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (b, c) {
        var d = "pageYOffset" === c;n.fn[b] = function (e) {
            return J(this, function (b, e, f) {
                var g = Jb(b);return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
            }, b, e, arguments.length, null);
        };
    }), n.each(["top", "left"], function (a, b) {
        n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
            return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0;
        });
    }), n.each({ Height: "height", Width: "width" }, function (a, b) {
        n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
            n.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");return J(this, function (b, c, d) {
                    var e;return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
                }, b, f ? d : void 0, f, null);
            };
        });
    }), n.fn.size = function () {
        return this.length;
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return n;
    });var Kb = a.jQuery,
        Lb = a.$;return (n.noConflict = function (b) {
        return (a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n);
    }, typeof b === U && (a.jQuery = a.$ = n), n);
});
//# sourceMappingURL=jquery.min.map
!(function (a, b, c, d) {
    function e(b, c) {
        b.owlCarousel = { name: "Owl Carousel", author: "Bartosz Wojciechowski", version: "2.0.0-beta.2.1" }, this.settings = null, this.options = a.extend({}, e.Defaults, c), this.itemData = a.extend({}, l), this.dom = a.extend({}, m), this.width = a.extend({}, n), this.num = a.extend({}, o), this.drag = a.extend({}, q), this.state = a.extend({}, r), this.e = a.extend({}, s), this.plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = null, this.dom.el = b, this.dom.$el = a(b);for (var d in e.Plugins) this.plugins[d[0].toLowerCase() + d.slice(1)] = new e.Plugins[d](this);this.init();
    }function f(a) {
        var b,
            d,
            e = c.createElement("div"),
            f = a;for (b in f) if ((d = f[b], "undefined" != typeof e.style[d])) return (e = null, [d, b]);return [!1];
    }function g() {
        return f(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1];
    }function h() {
        return f(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0];
    }function i() {
        return f(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0];
    }function j() {
        return "ontouchstart" in b || !!navigator.msMaxTouchPoints;
    }function k() {
        return b.navigator.msPointerEnabled;
    }var l, m, n, o, p, q, r, s;l = { index: !1, indexAbs: !1, posLeft: !1, clone: !1, active: !1, loaded: !1, lazyLoad: !1, current: !1, width: !1, center: !1, page: !1, hasVideo: !1, playVideo: !1 }, m = { el: null, $el: null, stage: null, $stage: null, oStage: null, $oStage: null, $items: null, $oItems: null, $cItems: null, $content: null }, n = { el: 0, stage: 0, item: 0, prevWindow: 0, cloneLast: 0 }, o = { items: 0, oItems: 0, cItems: 0, active: 0, merged: [] }, q = { start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, offsetX: 0, offsetY: 0, distance: null, startTime: 0, endTime: 0, updatedX: 0, targetEl: null }, r = { isTouch: !1, isScrolling: !1, isSwiping: !1, direction: !1, inMotion: !1 }, s = { _onDragStart: null, _onDragMove: null, _onDragEnd: null, _transitionEnd: null, _resizer: null, _responsiveCall: null, _goToLoop: null, _checkVisibile: null }, e.Defaults = { items: 3, loop: !1, center: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: b, responsiveClass: !1, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", themeClass: "owl-theme", baseClass: "owl-carousel", itemClass: "owl-item", centerClass: "center", activeClass: "active" }, e.Plugins = {}, e.prototype.init = function () {
        if ((this.setResponsiveOptions(), this.trigger("initialize"), this.dom.$el.hasClass(this.settings.baseClass) || this.dom.$el.addClass(this.settings.baseClass), this.dom.$el.hasClass(this.settings.themeClass) || this.dom.$el.addClass(this.settings.themeClass), this.settings.rtl && this.dom.$el.addClass("owl-rtl"), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0)) {
            var a, b, c;if ((a = this.dom.$el.find("img"), b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, c = this.dom.$el.children(b).width(), a.length && 0 >= c)) return (this.preloadAutoWidthImages(a), !1);
        }this.width.prevWindow = this.viewport(), this.createStage(), this.fetchContent(), this.eventsCall(), this.internalEvents(), this.dom.$el.addClass("owl-loading"), this.refresh(!0), this.dom.$el.removeClass("owl-loading").addClass("owl-loaded"), this.trigger("initialized"), this.addTriggerableEvents();
    }, e.prototype.setResponsiveOptions = function () {
        if (this.options.responsive) {
            var b = this.viewport(),
                c = this.options.responsive,
                d = -1;a.each(c, function (a) {
                b >= a && a > d && (d = Number(a));
            }), this.settings = a.extend({}, this.options, c[d]), delete this.settings.responsive, this.settings.responsiveClass && this.dom.$el.attr("class", function (a, b) {
                return b.replace(/\b owl-responsive-\S+/g, "");
            }).addClass("owl-responsive-" + d);
        } else this.settings = a.extend({}, this.options);
    }, e.prototype.optionsLogic = function () {
        this.dom.$el.toggleClass("owl-center", this.settings.center), this.settings.loop && this.num.oItems < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1);
    }, e.prototype.createStage = function () {
        var b = c.createElement("div"),
            d = c.createElement(this.settings.stageElement);b.className = "owl-stage-outer", d.className = "owl-stage", b.appendChild(d), this.dom.el.appendChild(b), this.dom.oStage = b, this.dom.$oStage = a(b), this.dom.stage = d, this.dom.$stage = a(d), b = null, d = null;
    }, e.prototype.createItemContainer = function () {
        var b = c.createElement(this.settings.itemElement);return (b.className = this.settings.itemClass, a(b));
    }, e.prototype.fetchContent = function (b) {
        this.dom.$content = b ? b instanceof jQuery ? b : a(b) : this.settings.nestedItemSelector ? this.dom.$el.find("." + this.settings.nestedItemSelector).not(".owl-stage-outer") : this.dom.$el.children().not(".owl-stage-outer"), this.num.oItems = this.dom.$content.length, 0 !== this.num.oItems && this.initStructure();
    }, e.prototype.initStructure = function () {
        this.createNormalStructure();
    }, e.prototype.createNormalStructure = function () {
        var a, b;for (a = 0; a < this.num.oItems; a++) b = this.createItemContainer(), this.initializeItemContainer(b, this.dom.$content[a]), this.dom.$stage.append(b);this.dom.$content = null;
    }, e.prototype.createCustomStructure = function (a) {
        var b, c;for (b = 0; a > b; b++) c = this.createItemContainer(), this.createItemContainerData(c), this.dom.$stage.append(c);
    }, e.prototype.initializeItemContainer = function (a, b) {
        this.trigger("change", { property: { name: "item", value: a } }), this.createItemContainerData(a), a.append(b), this.trigger("changed", { property: { name: "item", value: a } });
    }, e.prototype.createItemContainerData = function (b, c) {
        var d = a.extend({}, this.itemData);c && a.extend(d, c.data("owl-item")), b.data("owl-item", d);
    }, e.prototype.cloneItemContainer = function (a) {
        var b = a.clone(!0, !0).addClass("cloned");return (this.createItemContainerData(b, b), b.data("owl-item").clone = !0, b);
    }, e.prototype.updateLocalContent = function () {
        var b, c;for (this.dom.$oItems = this.dom.$stage.find("." + this.settings.itemClass).filter(function () {
            return a(this).data("owl-item").clone === !1;
        }), this.num.oItems = this.dom.$oItems.length, b = 0; b < this.num.oItems; b++) c = this.dom.$oItems.eq(b), c.data("owl-item").index = b;
    }, e.prototype.loopClone = function () {
        if (!this.settings.loop || this.num.oItems < this.settings.items) return !1;var b,
            c,
            d,
            e = this.settings.items,
            f = this.num.oItems - 1;for (this.settings.stagePadding && 1 === this.settings.items && (e += 1), this.num.cItems = 2 * e, d = 0; e > d; d++) b = this.cloneItemContainer(this.dom.$oItems.eq(d)), c = this.cloneItemContainer(this.dom.$oItems.eq(f - d)), this.dom.$stage.append(b), this.dom.$stage.prepend(c);this.dom.$cItems = this.dom.$stage.find("." + this.settings.itemClass).filter(function () {
            return a(this).data("owl-item").clone === !0;
        });
    }, e.prototype.reClone = function () {
        null !== this.dom.$cItems && (this.dom.$cItems.remove(), this.dom.$cItems = null, this.num.cItems = 0), this.settings.loop && this.loopClone();
    }, e.prototype.calculate = function () {
        var a,
            b,
            c,
            d,
            e,
            f,
            g,
            h = 0,
            i = 0;for (this.width.el = this.dom.$el.width() - 2 * this.settings.stagePadding, this.width.view = this.dom.$el.width(), c = this.width.el - this.settings.margin * (1 === this.settings.items ? 0 : this.settings.items - 1), this.width.el = this.width.el + this.settings.margin, this.width.item = (c / this.settings.items + this.settings.margin).toFixed(3), this.dom.$items = this.dom.$stage.find(".owl-item"), this.num.items = this.dom.$items.length, this.settings.autoWidth && this.dom.$items.css("width", ""), this._coordinates = [], this.num.merged = [], d = this.settings.rtl ? this.settings.center ? -(this.width.el / 2) : 0 : this.settings.center ? this.width.el / 2 : 0, this.width.mergeStage = 0, a = 0; a < this.num.items; a++) this.settings.merge ? (g = this.dom.$items.eq(a).find("[data-merge]").attr("data-merge") || 1, this.settings.mergeFit && g > this.settings.items && (g = this.settings.items), this.num.merged.push(parseInt(g)), this.width.mergeStage += this.width.item * this.num.merged[a]) : this.num.merged.push(1), f = this.width.item * this.num.merged[a], this.settings.autoWidth && (f = this.dom.$items.eq(a).width() + this.settings.margin, this.settings.rtl ? this.dom.$items[a].style.marginLeft = this.settings.margin + "px" : this.dom.$items[a].style.marginRight = this.settings.margin + "px"), this._coordinates.push(d), this.dom.$items.eq(a).data("owl-item").posLeft = h, this.dom.$items.eq(a).data("owl-item").width = f, this.settings.rtl ? (d += f, h += f) : (d -= f, h -= f), i -= Math.abs(f), this.settings.center && (this._coordinates[a] = this.settings.rtl ? this._coordinates[a] + f / 2 : this._coordinates[a] - f / 2);for (this.width.stage = Math.abs(this.settings.autoWidth ? this.settings.center ? i : d : i), e = this.num.oItems + this.num.cItems, b = 0; e > b; b++) this.dom.$items.eq(b).data("owl-item").indexAbs = b;this.setSizes();
    }, e.prototype.setSizes = function () {
        this.settings.stagePadding !== !1 && (this.dom.oStage.style.paddingLeft = this.settings.stagePadding + "px", this.dom.oStage.style.paddingRight = this.settings.stagePadding + "px"), this.settings.rtl ? b.setTimeout(a.proxy(function () {
            this.dom.stage.style.width = this.width.stage + "px";
        }, this), 0) : this.dom.stage.style.width = this.width.stage + "px";for (var c = 0; c < this.num.items; c++) this.settings.autoWidth || (this.dom.$items[c].style.width = this.width.item - this.settings.margin + "px"), this.settings.rtl ? this.dom.$items[c].style.marginLeft = this.settings.margin + "px" : this.dom.$items[c].style.marginRight = this.settings.margin + "px", 1 === this.num.merged[c] || this.settings.autoWidth || (this.dom.$items[c].style.width = this.width.item * this.num.merged[c] - this.settings.margin + "px");this.width.stagePrev = this.width.stage;
    }, e.prototype.responsive = function () {
        if (!this.num.oItems) return !1;var a = this.isElWidthChanged();return a ? this.trigger("resize").isDefaultPrevented() ? !1 : (this.state.responsive = !0, this.refresh(), this.state.responsive = !1, void this.trigger("resized")) : !1;
    }, e.prototype.refresh = function () {
        var a = this.dom.$oItems && this.dom.$oItems.eq(this.normalize(this.current(), !0));return (this.trigger("refresh"), this.setResponsiveOptions(), this.updateLocalContent(), this.optionsLogic(), 0 === this.num.oItems ? !1 : (this.dom.$stage.addClass("owl-refresh"), this.reClone(), this.calculate(), this.dom.$stage.removeClass("owl-refresh"), a ? this.reset(a.data("owl-item").indexAbs) : (this.dom.oStage.scrollLeft = 0, this.reset(this.dom.$oItems.eq(0).data("owl-item").indexAbs)), this.state.orientation = b.orientation, this.watchVisibility(), void this.trigger("refreshed")));
    }, e.prototype.updateActiveItems = function () {
        this.trigger("change", { property: { name: "items", value: this.dom.$items } });var a, b, c, d, e, f;for (a = 0; a < this.num.items; a++) this.dom.$items.eq(a).data("owl-item").active = !1, this.dom.$items.eq(a).data("owl-item").current = !1, this.dom.$items.eq(a).removeClass(this.settings.activeClass).removeClass(this.settings.centerClass);for (this.num.active = 0, padding = 2 * this.settings.stagePadding, stageX = this.coordinates(this.current()) + padding, view = this.settings.rtl ? this.width.view : -this.width.view, b = 0; b < this.num.items; b++) c = this.dom.$items.eq(b), d = c.data("owl-item").posLeft, e = c.data("owl-item").width, f = this.settings.rtl ? d - e - padding : d - e + padding, (this.op(d, "<=", stageX) && this.op(d, ">", stageX + view) || this.op(f, "<", stageX) && this.op(f, ">", stageX + view)) && (this.num.active++, c.data("owl-item").active = !0, c.data("owl-item").current = !0, c.addClass(this.settings.activeClass), this.settings.lazyLoad || (c.data("owl-item").loaded = !0), this.settings.loop && this.updateClonedItemsState(c.data("owl-item").index));this.settings.center && (this.dom.$items.eq(this.current()).addClass(this.settings.centerClass).data("owl-item").center = !0), this.trigger("changed", { property: { name: "items", value: this.dom.$items } });
    }, e.prototype.updateClonedItemsState = function (a) {
        var b, c, d;for (this.settings.center && (b = this.dom.$items.eq(this.current()).data("owl-item").index), d = 0; d < this.num.items; d++) c = this.dom.$items.eq(d), c.data("owl-item").index === a && (c.data("owl-item").current = !0, c.data("owl-item").index === b && c.addClass(this.settings.centerClass));
    }, e.prototype.eventsCall = function () {
        this.e._onDragStart = a.proxy(function (a) {
            this.onDragStart(a);
        }, this), this.e._onDragMove = a.proxy(function (a) {
            this.onDragMove(a);
        }, this), this.e._onDragEnd = a.proxy(function (a) {
            this.onDragEnd(a);
        }, this), this.e._transitionEnd = a.proxy(function (a) {
            this.transitionEnd(a);
        }, this), this.e._resizer = a.proxy(function () {
            this.responsiveTimer();
        }, this), this.e._responsiveCall = a.proxy(function () {
            this.responsive();
        }, this), this.e._preventClick = a.proxy(function (a) {
            this.preventClick(a);
        }, this);
    }, e.prototype.responsiveTimer = function () {
        return this.viewport() === this.width.prevWindow ? !1 : (b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this.e._responsiveCall, this.settings.responsiveRefreshRate), void (this.width.prevWindow = this.viewport()));
    }, e.prototype.internalEvents = function () {
        var a = j(),
            d = k();this.dragType = a && !d ? ["touchstart", "touchmove", "touchend", "touchcancel"] : a && d ? ["MSPointerDown", "MSPointerMove", "MSPointerUp", "MSPointerCancel"] : ["mousedown", "mousemove", "mouseup"], (a || d) && this.settings.touchDrag ? this.on(c, this.dragType[3], this.e._onDragEnd) : (this.dom.$stage.on("dragstart", function () {
            return !1;
        }), this.settings.mouseDrag ? this.dom.stage.onselectstart = function () {
            return !1;
        } : this.dom.$el.addClass("owl-text-select-on")), this.transitionEndVendor && this.on(this.dom.stage, this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(b, "resize", this.e._resizer, !1), this.dragEvents();
    }, e.prototype.dragEvents = function () {
        !this.settings.touchDrag || "touchstart" !== this.dragType[0] && "MSPointerDown" !== this.dragType[0] ? this.settings.mouseDrag && "mousedown" === this.dragType[0] ? this.on(this.dom.stage, this.dragType[0], this.e._onDragStart, !1) : this.off(this.dom.stage, this.dragType[0], this.e._onDragStart) : this.on(this.dom.stage, this.dragType[0], this.e._onDragStart, !1);
    }, e.prototype.onDragStart = function (a) {
        var d, e, f, g, h;if ((d = a.originalEvent || a || b.event, 3 === d.which)) return !1;if (("mousedown" === this.dragType[0] && this.dom.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = new Date().getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, e = "touchstart" === d.type, f = e ? a.targetTouches[0].pageX : d.pageX || d.clientX, g = e ? a.targetTouches[0].pageY : d.pageY || d.clientY, this.drag.offsetX = this.dom.$stage.position().left - this.settings.stagePadding, this.drag.offsetY = this.dom.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.dom.$stage.position().left + this.width.stage - this.width.el + this.settings.margin), this.state.inMotion && this.support3d)) h = this.getTransformProperty(), this.drag.offsetX = h, this.animate(h), this.state.inMotion = !0;else if (this.state.inMotion && !this.support3d) return (this.state.inMotion = !1, !1);this.drag.startX = f - this.drag.offsetX, this.drag.startY = g - this.drag.offsetY, this.drag.start = f - this.drag.startX, this.drag.targetEl = d.target || d.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), this.on(c, this.dragType[1], this.e._onDragMove, !1), this.on(c, this.dragType[2], this.e._onDragEnd, !1);
    }, e.prototype.onDragMove = function (a) {
        var c, e, f, g, h, i, j;this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event, e = "touchmove" == c.type, f = e ? c.targetTouches[0].pageX : c.pageX || c.clientX, g = e ? c.targetTouches[0].pageY : c.pageY || c.clientY, this.drag.currentX = f - this.drag.startX, this.drag.currentY = g - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this.num.oItems) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this.num.oItems)) : (h = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), j = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j)), (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d ? c.preventDefault() : c.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)));
    }, e.prototype.onDragEnd = function () {
        var a, b, d;if (this.state.isTouch) {
            if (("mousedown" === this.dragType[0] && this.dom.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0)) return (this.state.inMotion = !1, !1);this.drag.endTime = new Date().getTime(), a = this.drag.endTime - this.drag.startTime, b = Math.abs(this.drag.distance), (b > 3 || a > 300) && this.removeClick(this.drag.targetEl), d = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(d), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(d) || this.transitionEnd(), this.drag.distance = 0, this.off(c, this.dragType[1], this.e._onDragMove), this.off(c, this.dragType[2], this.e._onDragEnd);
        }
    }, e.prototype.removeClick = function (c) {
        this.drag.targetEl = c, a(c).on("click.preventClick", this.e._preventClick), b.setTimeout(function () {
            a(c).off("click.preventClick");
        }, 300);
    }, e.prototype.preventClick = function (b) {
        b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation && b.stopPropagation(), a(b.target).off("click.preventClick");
    }, e.prototype.getTransformProperty = function () {
        var a, c;return (a = b.getComputedStyle(this.dom.stage, null).getPropertyValue(this.vendorName + "transform"), a = a.replace(/matrix(3d)?\(|\)/g, "").split(","), c = 16 === a.length, c !== !0 ? a[4] : a[12]);
    }, e.prototype.closest = function (b) {
        var c = 0,
            d = 30;return (this.settings.freeDrag || a.each(this.coordinates(), a.proxy(function (a, e) {
            b > e - d && e + d > b ? c = a : this.op(b, "<", e) && this.op(b, ">", this.coordinates(a + 1) || e - this.width.el) && (c = "left" === this.state.direction ? a + 1 : a);
        }, this)), this.settings.loop || (this.op(b, ">", this.coordinates(this.minimum())) ? c = b = this.minimum() : this.op(b, "<", this.coordinates(this.maximum())) && (c = b = this.maximum())), c);
    }, e.prototype.animate = function (b) {
        this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.dom.$stage.css({ transform: "translate3d(" + b + "px,0px, 0px)", transition: this.speed() / 1000 + "s" }) : this.state.isTouch ? this.dom.$stage.css({ left: b + "px" }) : this.dom.$stage.animate({ left: b }, this.speed() / 1000, this.settings.fallbackEasing, a.proxy(function () {
            this.state.inMotion && this.transitionEnd();
        }, this));
    }, e.prototype.current = function (a) {
        if (a === d) return this._current;if (0 === this.num.oItems) return d;if ((a = this.normalize(a), this._current === a)) this.animate(this.coordinates(this._current));else {
            var b = this.trigger("change", { property: { name: "position", value: a } });b.data !== d && (a = this.normalize(b.data)), this._current = a, this.animate(this.coordinates(this._current)), this.updateActiveItems(), this.trigger("changed", { property: { name: "position", value: this._current } });
        }return this._current;
    }, e.prototype.reset = function (a) {
        this.suppress(["change", "changed"]), this.speed(0), this.current(a), this.release(["change", "changed"]);
    }, e.prototype.normalize = function (a, b) {
        if (a === d || !this.dom.$items) return d;if (this.settings.loop) {
            var c = this.dom.$items.length;a = (a % c + c) % c;
        } else a = Math.max(this.minimum(), Math.min(this.maximum(), a));return b ? this.dom.$items.eq(a).data("owl-item").index : a;
    }, e.prototype.maximum = function () {
        var b,
            c,
            d = this.settings;if (!d.loop && d.center) b = this.num.oItems - 1;else if (d.loop || d.center) if (d.loop || d.center) b = this.num.oItems + d.items;else {
            if (!d.autoWidth && !d.merge) throw "Can not detect maximum absolute position.";revert = d.rtl ? 1 : -1, c = this.dom.$stage.width() - this.$el.width(), a.each(this.coordinates(), function (a, d) {
                return d * revert >= c ? !1 : void (b = a + 1);
            });
        } else b = this.num.oItems - d.items;return b;
    }, e.prototype.minimum = function () {
        return this.dom.$oItems.eq(0).data("owl-item").indexAbs;
    }, e.prototype.speed = function (a) {
        return (a !== d && (this._speed = a), this._speed);
    }, e.prototype.coordinates = function (a) {
        return a !== d ? this._coordinates[a] : this._coordinates;
    }, e.prototype.duration = function (a, b, c) {
        return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
    }, e.prototype.to = function (c, d) {
        if (this.settings.loop) {
            var e = c - this.normalize(this.current(), !0),
                f = this.current(),
                g = this.current(),
                h = this.current() + e,
                i = 0 > g - h ? !0 : !1;h < this.settings.items && i === !1 ? (f = this.num.items - (this.settings.items - g) - this.settings.items, this.reset(f)) : h >= this.num.items - this.settings.items && i === !0 && (f = g - this.num.oItems, this.reset(f)), b.clearTimeout(this.e._goToLoop), this.e._goToLoop = b.setTimeout(a.proxy(function () {
                this.speed(this.duration(this.current(), f + e, d)), this.current(f + e);
            }, this), 30);
        } else this.speed(this.duration(this.current(), c, d)), this.current(c);
    }, e.prototype.next = function (a) {
        a = a || !1, this.to(this.normalize(this.current(), !0) + 1, a);
    }, e.prototype.prev = function (a) {
        a = a || !1, this.to(this.normalize(this.current(), !0) - 1, a);
    }, e.prototype.transitionEnd = function (a) {
        if (a !== d) {
            a.stopPropagation();var b = a.target || a.srcElement || a.originalTarget;if (b !== this.dom.stage) return !1;
        }this.state.inMotion = !1, this.trigger("translated");
    }, e.prototype.isElWidthChanged = function () {
        var a = this.dom.$el.width() - this.settings.stagePadding,
            b = this.width.el + this.settings.margin;return a !== b;
    }, e.prototype.viewport = function () {
        var d;if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();else if (b.innerWidth) d = b.innerWidth;else {
            if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";d = c.documentElement.clientWidth;
        }return d;
    }, e.prototype.insertContent = function (a) {
        this.dom.$stage.empty(), this.fetchContent(a), this.refresh();
    }, e.prototype.addItem = function (a, b) {
        var c = this.createItemContainer();b = b || 0, this.initializeItemContainer(c, a), 0 === this.dom.$oItems.length ? this.dom.$stage.append(c) : -1 !== p ? this.dom.$oItems.eq(b).before(c) : this.dom.$oItems.eq(b).after(c), this.refresh();
    }, e.prototype.removeItem = function (a) {
        this.dom.$oItems.eq(a).remove(), this.refresh();
    }, e.prototype.addTriggerableEvents = function () {
        var b = a.proxy(function (b, c) {
            return a.proxy(function (a) {
                a.relatedTarget !== this && (this.suppress([c]), b.apply(this, [].slice.call(arguments, 1)), this.release([c]));
            }, this);
        }, this);a.each({ next: this.next, prev: this.prev, to: this.to, destroy: this.destroy, refresh: this.refresh, replace: this.insertContent, add: this.addItem, remove: this.removeItem }, a.proxy(function (a, c) {
            this.dom.$el.on(a + ".owl.carousel", b(c, a + ".owl.carousel"));
        }, this));
    }, e.prototype.watchVisibility = function () {
        function c(a) {
            return a.offsetWidth > 0 && a.offsetHeight > 0;
        }function d() {
            c(this.dom.el) && (this.dom.$el.removeClass("owl-hidden"), this.refresh(), b.clearInterval(this.e._checkVisibile));
        }c(this.dom.el) || (this.dom.$el.addClass("owl-hidden"), b.clearInterval(this.e._checkVisibile), this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500));
    }, e.prototype.preloadAutoWidthImages = function (b) {
        var c, d, e, f;c = 0, d = this, b.each(function (g, h) {
            e = a(h), f = new Image(), f.onload = function () {
                c++, e.attr("src", f.src), e.css("opacity", 1), c >= b.length && (d.state.imagesLoaded = !0, d.init());
            }, f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina");
        });
    }, e.prototype.destroy = function () {
        this.dom.$el.hasClass(this.settings.themeClass) && this.dom.$el.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && this.off(b, "resize", this.e._resizer), this.transitionEndVendor && this.off(this.dom.stage, this.transitionEndVendor, this.e._transitionEnd);for (var a in this.plugins) this.plugins[a].destroy();(this.settings.mouseDrag || this.settings.touchDrag) && (this.off(this.dom.stage, this.dragType[0], this.e._onDragStart), this.settings.mouseDrag && this.off(c, this.dragType[3], this.e._onDragStart), this.settings.mouseDrag && (this.dom.$stage.off("dragstart", function () {
            return !1;
        }), this.dom.stage.onselectstart = function () {})), this.dom.$el.off(".owl"), null !== this.dom.$cItems && this.dom.$cItems.remove(), this.e = null, this.dom.$el.data("owlCarousel", null), delete this.dom.el.owlCarousel, this.dom.$stage.unwrap(), this.dom.$items.unwrap(), this.dom.$items.contents().unwrap(), this.dom = null;
    }, e.prototype.op = function (a, b, c) {
        var d = this.settings.rtl;switch (b) {case "<":
                return d ? a > c : c > a;case ">":
                return d ? c > a : a > c;case ">=":
                return d ? c >= a : a >= c;case "<=":
                return d ? a >= c : c >= a;}
    }, e.prototype.on = function (a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
    }, e.prototype.off = function (a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
    }, e.prototype.trigger = function (b, c, d) {
        var e = { item: { count: this.num.oItems, index: this.current() } },
            f = a.camelCase(a.grep(["on", b, d], function (a) {
            return a;
        }).join("-").toLowerCase()),
            g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, e, c));return (this._supress[g.type] || (a.each(this.plugins, function (a, b) {
            b.onTrigger && b.onTrigger(g);
        }), this.dom.$el.trigger(g), "function" == typeof this.settings[f] && this.settings[f].apply(this, g)), g);
    }, e.prototype.suppress = function (b) {
        a.each(b, a.proxy(function (a, b) {
            this._supress[b] = !0;
        }, this));
    }, e.prototype.release = function (b) {
        a.each(b, a.proxy(function (a, b) {
            delete this._supress[b];
        }, this));
    }, e.prototype.browserSupport = function () {
        if ((this.support3d = i(), this.support3d)) {
            this.transformVendor = h();var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];this.transitionEndVendor = a[g()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : "";
        }this.state.orientation = b.orientation;
    }, a.fn.owlCarousel = function (b) {
        return this.each(function () {
            a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this, b));
        });
    }, a.fn.owlCarousel.Constructor = e;
})(window.Zepto || window.jQuery, window, document), (function (a, b) {
    LazyLoad = function (b) {
        this.owl = b, this.owl.options = a.extend({}, LazyLoad.Defaults, this.owl.options), this.handlers = { "changed.owl.carousel": a.proxy(function (a) {
                "items" == a.property.name && a.property.value && !a.property.value.is(":empty") && this.check();
            }, this) }, this.owl.dom.$el.on(this.handlers);
    }, LazyLoad.Defaults = { lazyLoad: !1 }, LazyLoad.prototype.check = function () {
        var a,
            c,
            d,
            e,
            f = b.devicePixelRatio > 1 ? "data-src-retina" : "data-src";for (d = 0; d < this.owl.num.items; d++) e = this.owl.dom.$items.eq(d), e.data("owl-item").current === !0 && e.data("owl-item").loaded === !1 && (c = e.find(".owl-lazy"), a = c.attr(f), a = a || c.attr("data-src"), a && (c.css("opacity", "0"), this.preload(c, e)));
    }, LazyLoad.prototype.preload = function (c, d) {
        var e, f, g;c.each(a.proxy(function (c, h) {
            this.owl.trigger("load", null, "lazy"), e = a(h), f = new Image(), g = e.attr(b.devicePixelRatio > 1 ? "data-src-retina" : "data-src"), g = g || e.attr("data-src"), f.onload = a.proxy(function () {
                d.data("owl-item").loaded = !0, e.is("img") ? e.attr("src", f.src) : e.css("background-image", "url(" + f.src + ")"), e.css("opacity", 1), this.owl.trigger("loaded", null, "lazy");
            }, this), f.src = g;
        }, this));
    }, LazyLoad.prototype.destroy = function () {
        var a, b;for (a in this.handlers) this.owl.dom.$el.off(a, this.handlers[a]);for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
    }, a.fn.owlCarousel.Constructor.Plugins.lazyLoad = LazyLoad;
})(window.Zepto || window.jQuery, window, document), (function (a, b) {
    AutoHeight = function (b) {
        this.owl = b, this.owl.options = a.extend({}, AutoHeight.Defaults, this.owl.options), this.handlers = { "changed.owl.carousel": a.proxy(function (a) {
                "position" == a.property.name && this.owl.settings.autoHeight && this.setHeight();
            }, this) }, this.owl.dom.$el.on(this.handlers);
    }, AutoHeight.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, AutoHeight.prototype.setHeight = function () {
        var a,
            c = this.owl.dom.$items.eq(this.owl.current()),
            d = this.owl.dom.$oStage,
            e = 0;this.owl.dom.$oStage.hasClass(this.owl.settings.autoHeightClass) || this.owl.dom.$oStage.addClass(this.owl.settings.autoHeightClass), a = b.setInterval(function () {
            e += 1, c.data("owl-item").loaded ? (d.height(c.height() + "px"), clearInterval(a)) : 500 === e && clearInterval(a);
        }, 100);
    }, AutoHeight.prototype.destroy = function () {
        var a, b;for (a in this.handlers) this.owl.dom.$el.off(a, this.handlers[a]);for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
    }, a.fn.owlCarousel.Constructor.Plugins.autoHeight = AutoHeight;
})(window.Zepto || window.jQuery, window, document), (function (a, b, c) {
    Video = function (b) {
        this.owl = b, this.owl.options = a.extend({}, Video.Defaults, this.owl.options), this.handlers = { "resize.owl.carousel": a.proxy(function (a) {
                this.owl.settings.video && !this.isInFullScreen() && a.preventDefault();
            }, this), "refresh.owl.carousel changed.owl.carousel": a.proxy(function () {
                this.owl.state.videoPlay && this.stopVideo();
            }, this), "refresh.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
                return this.owl.settings.video ? void (this.refreshing = "refresh" == a.type) : !1;
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                this.refreshing && "items" == a.property.name && a.property.value && !a.property.value.is(":empty") && this.checkVideoLinks();
            }, this) }, this.owl.dom.$el.on(this.handlers), this.owl.dom.$el.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
            this.playVideo(a);
        }, this));
    }, Video.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, Video.prototype.checkVideoLinks = function () {
        var a, b, c;for (c = 0; c < this.owl.num.items; c++) b = this.owl.dom.$items.eq(c), b.data("owl-item").hasVideo || (a = b.find(".owl-video"), a.length && (this.owl.state.hasVideos = !0, this.owl.dom.$items.eq(c).data("owl-item").hasVideo = !0, a.css("display", "none"), this.getVideoInfo(a, b)));
    }, Video.prototype.getVideoInfo = function (a, b) {
        var c,
            d,
            e,
            f,
            g = a.data("vimeo-id"),
            h = a.data("youtube-id"),
            i = a.data("width") || this.owl.settings.videoWidth,
            j = a.data("height") || this.owl.settings.videoHeight,
            k = a.attr("href");if (g) d = "vimeo", e = g;else if (h) d = "youtube", e = h;else {
            if (!k) throw new Error("Missing video link.");e = k.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), e[3].indexOf("youtu") > -1 ? d = "youtube" : e[3].indexOf("vimeo") > -1 && (d = "vimeo"), e = e[6];
        }b.data("owl-item").videoType = d, b.data("owl-item").videoId = e, b.data("owl-item").videoWidth = i, b.data("owl-item").videoHeight = j, c = { type: d, id: e }, f = i && j ? "style=\"width:" + i + "px;height:" + j + "px;\"" : "", a.wrap("<div class=\"owl-video-wrapper\"" + f + "></div>"), this.createVideoTn(a, c);
    }, Video.prototype.createVideoTn = function (b, c) {
        function d(a) {
            f = "<div class=\"owl-video-play-icon\"></div>", e = k.settings.lazyLoad ? "<div class=\"owl-video-tn " + j + "\" " + i + "=\"" + a + "\"></div>" : "<div class=\"owl-video-tn\" style=\"opacity:1;background-image:url(" + a + ")\"></div>", b.after(e), b.after(f);
        }var e,
            f,
            g,
            h = b.find("img"),
            i = "src",
            j = "",
            k = this.owl;return (this.owl.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (d(h.attr(i)), h.remove(), !1) : void ("youtube" === c.type ? (g = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", d(g)) : "vimeo" === c.type && a.ajax({ type: "GET", url: "http://vimeo.com/api/v2/video/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function success(a) {
                g = a[0].thumbnail_large, d(g), k.settings.loop && k.updateActiveItems();
            } })));
    }, Video.prototype.stopVideo = function () {
        this.owl.trigger("stop", null, "video");var a = this.owl.dom.$items.eq(this.owl.state.videoPlayIndex);a.find(".owl-video-frame").remove(), a.removeClass("owl-video-playing"), this.owl.state.videoPlay = !1;
    }, Video.prototype.playVideo = function (b) {
        this.owl.trigger("play", null, "video"), this.owl.state.videoPlay && this.stopVideo();var c,
            d,
            e,
            f = a(b.target || b.srcElement),
            g = f.closest("." + this.owl.settings.itemClass);e = g.data("owl-item").videoType, id = g.data("owl-item").videoId, width = g.data("owl-item").videoWidth || Math.floor(g.data("owl-item").width - this.owl.settings.margin), height = g.data("owl-item").videoHeight || this.owl.dom.$stage.height(), "youtube" === e ? c = "<iframe width=\"" + width + "\" height=\"" + height + "\" src=\"http://www.youtube.com/embed/" + id + "?autoplay=1&v=" + id + "\" frameborder=\"0\" allowfullscreen></iframe>" : "vimeo" === e && (c = "<iframe src=\"http://player.vimeo.com/video/" + id + "?autoplay=1\" width=\"" + width + "\" height=\"" + height + "\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"), g.addClass("owl-video-playing"), this.owl.state.videoPlay = !0, this.owl.state.videoPlayIndex = g.data("owl-item").indexAbs, d = a("<div style=\"height:" + height + "px; width:" + width + "px\" class=\"owl-video-frame\">" + c + "</div>"), f.after(d);
    }, Video.prototype.isInFullScreen = function () {
        var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;return (d && a(d.parentNode).hasClass("owl-video-frame") && (this.owl.speed(0), this.owl.state.isFullScreen = !0), d && this.owl.state.isFullScreen && this.owl.state.videoPlay ? !1 : this.owl.state.isFullScreen ? (this.owl.state.isFullScreen = !1, !1) : this.owl.state.videoPlay && this.owl.state.orientation !== b.orientation ? (this.owl.state.orientation = b.orientation, !1) : !0);
    }, Video.prototype.destroy = function () {
        var a, b;this.owl.dom.$el.off("click.owl.video");for (a in this.handlers) this.owl.dom.$el.off(a, this.handlers[a]);for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
    }, a.fn.owlCarousel.Constructor.Plugins.video = Video;
})(window.Zepto || window.jQuery, window, document), (function (a, b, c, d) {
    Animate = function (b) {
        this.core = b, this.core.options = a.extend({}, Animate.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = { "change.owl.carousel": a.proxy(function (a) {
                "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value);
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
                this.swapping = "translated" == a.type;
            }, this), "translate.owl.carousel": a.proxy(function () {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
            }, this) }, this.core.dom.$el.on(this.handlers);
    }, Animate.Defaults = { animateOut: !1, animateIn: !1 }, Animate.prototype.swap = function () {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);var b,
                c = a.proxy(this.clear, this),
                d = this.core.dom.$items.eq(this.previous),
                e = this.core.dom.$items.eq(this.next),
                f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.css({ left: b + "px" }).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)), f && e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c));
        }
    }, Animate.prototype.clear = function (b) {
        a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd();
    }, Animate.prototype.destroy = function () {
        var a, b;for (a in this.handlers) this.core.dom.$el.off(a, this.handlers[a]);for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
})(window.Zepto || window.jQuery, window, document), (function (a, b, c) {
    Autoplay = function (b) {
        this.core = b, this.core.options = a.extend({}, Autoplay.Defaults, this.core.options), this.handlers = { "translated.owl.carousel refreshed.owl.carousel": a.proxy(function () {
                this.autoplay();
            }, this), "play.owl.autoplay": a.proxy(function (a, b, c) {
                this.play(b, c);
            }, this), "stop.owl.autoplay": a.proxy(function () {
                this.stop();
            }, this), "mouseover.owl.autoplay": a.proxy(function () {
                this.core.settings.autoplayHoverPause && this.pause();
            }, this), "mouseleave.owl.autoplay": a.proxy(function () {
                this.core.settings.autoplayHoverPause && this.autoplay();
            }, this) }, this.core.dom.$el.on(this.handlers);
    }, Autoplay.Defaults = { autoplay: !1, autoplayTimeout: 5000, autoplayHoverPause: !1, autoplaySpeed: !1 }, Autoplay.prototype.autoplay = function () {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval), this.interval = b.setInterval(a.proxy(function () {
            this.play();
        }, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval);
    }, Autoplay.prototype.play = function () {
        return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void b.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed);
    }, Autoplay.prototype.stop = function () {
        b.clearInterval(this.interval);
    }, Autoplay.prototype.pause = function () {
        b.clearInterval(this.interval);
    }, Autoplay.prototype.destroy = function () {
        var a, c;b.clearInterval(this.interval);for (a in this.handlers) this.core.dom.$el.off(a, this.handlers[a]);for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
})(window.Zepto || window.jQuery, window, document), (function (a) {
    "use strict";var b = function b(c) {
        this.core = c, this.initialized = !1, this.pages = [], this.controls = {}, this.template = null, this.$element = this.core.dom.$el, this.overrides = { next: this.core.next, prev: this.core.prev, to: this.core.to }, this.handlers = { "changed.owl.carousel": a.proxy(function (b) {
                "items" == b.property.name && (this.initialized || (this.initialize(), this.initialized = !0), this.update(), this.draw()), this.filling && (b.property.value.data("owl-item").dot = a(":first-child", b.property.value).find("[data-dot]").andSelf().data("dot"));
            }, this), "change.owl.carousel": a.proxy(function (a) {
                if ("position" == a.property.name && !this.core.state.revert && !this.core.settings.loop && this.core.settings.navRewind) {
                    var b = this.core.current(),
                        c = this.core.maximum(),
                        d = this.core.minimum();a.data = a.property.value > c ? b >= c ? d : c : a.property.value < d ? c : a.property.value;
                }this.filling = this.core.settings.dotsData && "item" == a.property.name && a.property.value && a.property.value.is(":empty");
            }, this), "refreshed.owl.carousel": a.proxy(function () {
                this.initialized && (this.update(), this.draw());
            }, this) }, this.core.options = a.extend({}, b.Defaults, this.core.options), this.$element.on(this.handlers);
    };b.Defaults = { nav: !1, navRewind: !0, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotData: !1, dotsSpeed: !1, dotsContainer: !1, controlsClass: "owl-controls" }, b.prototype.initialize = function () {
        var b,
            c,
            d = this.core.settings;d.dotsData || (this.template = a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")), d.navContainer && d.dotsContainer || (this.controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)), this.controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this.controls.$container), this.controls.$indicators.on(this.core.dragType[2], "div", a.proxy(function (b) {
            var c = a(b.target).parent().is(this.controls.$indicators) ? a(b.target).index() : a(b.target).parent().index();b.preventDefault(), this.to(c, d.dotsSpeed);
        }, this)), b = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this.controls.$container), this.controls.$next = a("<" + d.navElement + ">"), this.controls.$previous = this.controls.$next.clone(), this.controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on(this.core.dragType[2], a.proxy(function () {
            this.prev();
        }, this)), this.controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on(this.core.dragType[2], a.proxy(function () {
            this.next();
        }, this));for (c in this.overrides) this.core[c] = a.proxy(this[c], this);
    }, b.prototype.destroy = function () {
        var a, b, c, d;for (a in this.handlers) this.$element.off(a, this.handlers[a]);for (b in this.controls) this.controls[b].remove();for (d in this.overides) this.core[d] = this.overrides[d];for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
    }, b.prototype.update = function () {
        var a,
            b,
            c,
            d = this.core.settings,
            e = this.core.num.cItems / 2,
            f = this.core.num.items - e,
            g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items;if (("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)), d.dots)) for (this.pages = [], a = e, b = 0, c = 0; f > a; a++) (b >= g || 0 === b) && (this.pages.push({ start: a - e, end: a - e + g - 1 }), b = 0, ++c), b += this.core.num.merged[a];
    }, b.prototype.draw = function () {
        var b,
            c,
            d = "",
            e = this.core.settings,
            f = this.core.dom.$oItems,
            g = this.core.normalize(this.core.current(), !0);if ((!e.nav || e.loop || e.navRewind || (this.controls.$previous.toggleClass("disabled", 0 >= g), this.controls.$next.toggleClass("disabled", g >= this.core.maximum())), this.controls.$previous.toggle(e.nav), this.controls.$next.toggle(e.nav), e.dots)) {
            if ((b = this.pages.length - this.controls.$indicators.children().length, b > 0)) {
                for (c = 0; c < Math.abs(b); c++) d += e.dotData ? f.eq(c).data("owl-item").dot : this.template;this.controls.$indicators.append(d);
            } else 0 > b && this.controls.$indicators.children().slice(b).remove();this.controls.$indicators.find(".active").removeClass("active"), this.controls.$indicators.children().eq(a.inArray(this.current(), this.pages)).addClass("active");
        }this.controls.$indicators.toggle(e.dots);
    }, b.prototype.onTrigger = function (b) {
        var c = this.core.settings;b.page = { index: a.inArray(this.current(), this.pages), count: this.pages.length, size: c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items };
    }, b.prototype.current = function () {
        var b = this.core.normalize(this.core.current(), !0);return a.grep(this.pages, function (a) {
            return a.start <= b && a.end >= b;
        }).pop();
    }, b.prototype.getPosition = function (b) {
        var c,
            d,
            e = this.core.settings;return ("page" == e.slideBy ? (c = a.inArray(this.current(), this.pages), d = this.pages.length, b ? ++c : --c, c = this.pages[(c % d + d) % d].start) : (c = this.core.normalize(this.core.current(), !0), d = this.core.num.oItems, b ? c += e.slideBy : c -= e.slideBy), c);
    }, b.prototype.next = function (b) {
        a.proxy(this.overrides.to, this.core)(this.getPosition(!0), b);
    }, b.prototype.prev = function (b) {
        a.proxy(this.overrides.to, this.core)(this.getPosition(!1), b);
    }, b.prototype.to = function (b, c, d) {
        var e;d ? a.proxy(this.overrides.to, this.core)(b, c) : (e = this.pages.length, a.proxy(this.overrides.to, this.core)(this.pages[(b % e + e) % e].start, c));
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = b;
})(window.Zepto || window.jQuery, window, document), (function (a, b, c, d) {
    "use strict";var e = function e(c) {
        this.core = c, this.hashes = {}, this.$element = this.core.dom.$el, this.handlers = { "initialized.owl.carousel": a.proxy(function () {
                b.location.hash.substring(1) && a(b).trigger("hashchange.owl.navigation");
            }, this), "changed.owl.carousel": a.proxy(function (b) {
                this.filling && (b.property.value.data("owl-item").hash = a(":first-child", b.property.value).find("[data-hash]").andSelf().data("hash"), this.hashes[b.property.value.data("owl-item").hash] = b.property.value);
            }, this), "change.owl.carousel": a.proxy(function (a) {
                "position" == a.property.name && this.core.current() === d && "URLHash" == this.core.settings.startPosition && (a.data = this.hashes[b.location.hash.substring(1)]), this.filling = "item" == a.property.name && a.property.value && a.property.value.is(":empty");
            }, this) }, this.core.options = a.extend({}, e.Defaults, this.core.options), this.$element.on(this.handlers), a(b).on("hashchange.owl.navigation", a.proxy(function () {
            var a = b.location.hash.substring(1),
                c = this.core.dom.$oItems,
                d = this.hashes[a] && c.index(this.hashes[a]) || 0;return a ? (this.core.dom.oStage.scrollLeft = 0, void this.core.to(d, !1, !0)) : !1;
        }, this));
    };e.Defaults = { URLhashListener: !1 }, e.prototype.destroy = function () {
        var c, d;a(b).off("hashchange.owl.navigation");for (c in this.handlers) this.owl.dom.$el.off(c, this.handlers[c]);for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null);
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = e;
})(window.Zepto || window.jQuery, window, document);
/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");+(function (a) {
    "use strict";var b = a.fn.jquery.split(" ")[0].split(".");if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher");
})(jQuery), +(function (a) {
    "use strict";function b() {
        var a = document.createElement("bootstrap"),
            b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] };return !1;
    }a.fn.emulateTransitionEnd = function (b) {
        var c = !1,
            d = this;a(this).one("bsTransitionEnd", function () {
            c = !0;
        });var e = function e() {
            c || a(d).trigger(a.support.transition.end);
        };return (setTimeout(e, b), this);
    }, a(function () {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function handle(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0;
            } });
    });
})(jQuery), +(function (a) {
    "use strict";function b(b) {
        return this.each(function () {
            var c = a(this),
                e = c.data("bs.alert");e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
        });
    }var c = "[data-dismiss=\"alert\"]",
        d = function d(b) {
        a(b).on("click", c, this.close);
    };d.VERSION = "3.3.4", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove();
        }var e = a(this),
            f = e.attr("data-target");f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));var g = a(f);b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
    };var e = a.fn.alert;a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
        return (a.fn.alert = e, this);
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
})(jQuery), +(function (a) {
    "use strict";function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
        });
    }var c = function c(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
    };c.VERSION = "3.3.4", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function (b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c));
        }, this), 0);
    }, c.prototype.toggle = function () {
        var a = !0,
            b = this.$element.closest("[data-toggle=\"buttons\"]");if (b.length) {
            var c = this.$element.find("input");"radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change");
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));a && this.$element.toggleClass("active");
    };var d = a.fn.button;a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
        return (a.fn.button = d, this);
    }, a(document).on("click.bs.button.data-api", "[data-toggle^=\"button\"]", function (c) {
        var d = a(c.target);d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault();
    }).on("focus.bs.button.data-api blur.bs.button.data-api", "[data-toggle^=\"button\"]", function (b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type));
    });
})(jQuery), +(function (a) {
    "use strict";function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
        });
    }var c = (function (_c) {
        function c(_x6, _x7) {
            return _c.apply(this, arguments);
        }

        c.toString = function () {
            return _c.toString();
        };

        return c;
    })(function (b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
    });c.VERSION = "3.3.4", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5000, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {case 37:
                    this.prev();break;case 39:
                    this.next();break;default:
                    return;}a.preventDefault();
        }
    }, c.prototype.cycle = function (b) {
        return (b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this);
    }, c.prototype.getItemIndex = function (a) {
        return (this.$items = a.parent().children(".item"), this.$items.index(a || this.$active));
    }, c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;if (d && !this.options.wrap) return b;var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length;return this.$items.eq(f);
    }, c.prototype.to = function (a) {
        var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            b.to(a);
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
    }, c.prototype.pause = function (b) {
        return (b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this);
    }, c.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next");
    }, c.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev");
    }, c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this;if (f.hasClass("active")) return this.sliding = !1;var j = f[0],
            k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });if ((this.$element.trigger(k), !k.isDefaultPrevented())) {
            if ((this.sliding = !0, g && this.pause(), this.$indicators.length)) {
                this.$indicators.find(".active").removeClass("active");var l = a(this.$indicators.children()[this.getItemIndex(f)]);l && l.addClass("active");
            }var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h });return (a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
                    i.$element.trigger(m);
                }, 0);
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this);
        }
    };var d = a.fn.carousel;a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
        return (a.fn.carousel = d, this);
    };var e = function e(c) {
        var d,
            e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
        }
    };a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
        a("[data-ride=\"carousel\"]").each(function () {
            var c = a(this);b.call(c, c.data());
        });
    });
})(jQuery), +(function (a) {
    "use strict";function b(b) {
        var c,
            d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");return a(d);
    }function c(b) {
        return this.each(function () {
            var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]();
        });
    }var d = function d(b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a("[data-toggle=\"collapse\"][href=\"#" + b.id + "\"],[data-toggle=\"collapse\"][data-target=\"#" + b.id + "\"]"), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
    };d.VERSION = "3.3.4", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0 }, d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");return a ? "width" : "height";
    }, d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b,
                e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");if ((this.$element.trigger(f), !f.isDefaultPrevented())) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));var g = this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;var h = function h() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
                    };if (!a.support.transition) return h.call(this);var i = a.camelCase(["scroll", g].join("-"));this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
                }
            }
        }
    }, d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
                var c = this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;var e = function e() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                };return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
            }
        }
    }, d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
    }, d.prototype.getParent = function () {
        return a(this.options.parent).find("[data-toggle=\"collapse\"][data-parent=\"" + this.options.parent + "\"]").each(a.proxy(function (c, d) {
            var e = a(d);this.addAriaAndCollapsedClass(b(e), e);
        }, this)).end();
    }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
    };var e = a.fn.collapse;a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
        return (a.fn.collapse = e, this);
    }, a(document).on("click.bs.collapse.data-api", "[data-toggle=\"collapse\"]", function (d) {
        var e = a(this);e.attr("data-target") || d.preventDefault();var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();c.call(f, h);
    });
})(jQuery), +(function (a) {
    "use strict";function b(b) {
        b && 3 === b.which || (a(e).remove(), a(f).each(function () {
            var d = a(this),
                e = c(d),
                f = { relatedTarget: this };e.hasClass("open") && (e.trigger(b = a.Event("hide.bs.dropdown", f)), b.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f)));
        }));
    }function c(b) {
        var c = b.attr("data-target");c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));var d = c && a(c);return d && d.length ? d : b.parent();
    }function d(b) {
        return this.each(function () {
            var c = a(this),
                d = c.data("bs.dropdown");d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
        });
    }var e = ".dropdown-backdrop",
        f = "[data-toggle=\"dropdown\"]",
        g = function g(b) {
        a(b).on("click.bs.dropdown", this.toggle);
    };g.VERSION = "3.3.4", g.prototype.toggle = function (d) {
        var e = a(this);if (!e.is(".disabled, :disabled")) {
            var f = c(e),
                g = f.hasClass("open");if ((b(), !g)) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a("<div class=\"dropdown-backdrop\"/>").insertAfter(a(this)).on("click", b);var h = { relatedTarget: this };if ((f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented())) return;e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h);
            }return !1;
        }
    }, g.prototype.keydown = function (b) {
        if (/(38|40|27|32)/.test(b.which) && !/input|textarea/i.test(b.target.tagName)) {
            var d = a(this);if ((b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled"))) {
                var e = c(d),
                    g = e.hasClass("open");if (!g && 27 != b.which || g && 27 == b.which) return (27 == b.which && e.find(f).trigger("focus"), d.trigger("click"));var h = " li:not(.disabled):visible a",
                    i = e.find("[role=\"menu\"]" + h + ", [role=\"listbox\"]" + h);if (i.length) {
                    var j = i.index(b.target);38 == b.which && j > 0 && j--, 40 == b.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
                }
            }
        }
    };var h = a.fn.dropdown;a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
        return (a.fn.dropdown = h, this);
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
        a.stopPropagation();
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", "[role=\"menu\"]", g.prototype.keydown).on("keydown.bs.dropdown.data-api", "[role=\"listbox\"]", g.prototype.keydown);
})(jQuery), +(function (a) {
    "use strict";function b(b, d) {
        return this.each(function () {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
        });
    }var c = (function (_c2) {
        function c(_x8, _x9) {
            return _c2.apply(this, arguments);
        }

        c.toString = function () {
            return _c2.toString();
        };

        return c;
    })(function (b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
            this.$element.trigger("loaded.bs.modal");
        }, this));
    });c.VERSION = "3.3.4", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a);
    }, c.prototype.show = function (b) {
        var d = this,
            e = a.Event("show.bs.modal", { relatedTarget: b });this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", "[data-dismiss=\"modal\"]", a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
            });
        }), this.backdrop(function () {
            var e = a.support.transition && d.$element.hasClass("fade");d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in").attr("aria-hidden", !1), d.enforceFocus();var f = a.Event("shown.bs.modal", { relatedTarget: b });e ? d.$dialog.one("bsTransitionEnd", function () {
                d.$element.trigger("focus").trigger(f);
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f);
        }));
    }, c.prototype.hide = function (b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
    }, c.prototype.enforceFocus = function () {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
        }, this));
    }, c.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
            27 == a.which && this.hide();
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
    }, c.prototype.resize = function () {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
    }, c.prototype.hideModal = function () {
        var a = this;this.$element.hide(), this.backdrop(function () {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
        });
    }, c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
    }, c.prototype.backdrop = function (b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;if ((this.$backdrop = a("<div class=\"modal-backdrop " + e + "\" />").appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
            }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b)) return;f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");var g = function g() {
                d.removeBackdrop(), b && b();
            };a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
        } else b && b();
    }, c.prototype.handleUpdate = function () {
        this.adjustDialog();
    }, c.prototype.adjustDialog = function () {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" });
    }, c.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
    }, c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;if (!a) {
            var b = document.documentElement.getBoundingClientRect();a = b.right - Math.abs(b.left);
        }this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar();
    }, c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
    }, c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
    }, c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");a.className = "modal-scrollbar-measure", this.$body.append(a);var b = a.offsetWidth - a.clientWidth;return (this.$body[0].removeChild(a), b);
    };var d = a.fn.modal;a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
        return (a.fn.modal = d, this);
    }, a(document).on("click.bs.modal.data-api", "[data-toggle=\"modal\"]", function (c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
                d.is(":visible") && d.trigger("focus");
            });
        }), b.call(f, g, this);
    });
})(jQuery), +(function (a) {
    "use strict";function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;(e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]());
        });
    }var c = function c(a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", a, b);
    };c.VERSION = "3.3.4", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: "<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\"></div></div>", trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function (b, c, d) {
        if ((this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport), this.$element[0] instanceof document.constructor && !this.options.selector)) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
            }
        }this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle();
    }, c.prototype.getDefaults = function () {
        return c.DEFAULTS;
    }, c.prototype.getOptions = function (b) {
        return (b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b);
    }, c.prototype.getDelegateOptions = function () {
        var b = {},
            c = this.getDefaults();return (this._options && a.each(this._options, function (a, d) {
            c[a] != d && (b[a] = d);
        }), b);
    }, c.prototype.enter = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);return c && c.$tip && c.$tip.is(":visible") ? void (c.hoverState = "in") : (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
            "in" == c.hoverState && c.show();
        }, c.options.delay.show)) : c.show());
    }, c.prototype.leave = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);return (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
            "out" == c.hoverState && c.hide();
        }, c.options.delay.hide)) : c.hide());
    }, c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);if (b.isDefaultPrevented() || !d) return;var e = this,
                f = this.tip(),
                g = this.getUID(this.type);this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element);var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;if (j) {
                var n = h,
                    o = this.options.container ? a(this.options.container) : this.$element.parent(),
                    p = this.getPosition(o);h = "bottom" == h && k.bottom + m > p.bottom ? "top" : "top" == h && k.top - m < p.top ? "bottom" : "right" == h && k.right + l > p.width ? "left" : "left" == h && k.left - l < p.left ? "right" : h, f.removeClass(n).addClass(h);
            }var q = this.getCalculatedOffset(h, k, l, m);this.applyPlacement(q, h);var r = function r() {
                var a = e.hoverState;e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e);
            };a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", r).emulateTransitionEnd(c.TRANSITION_DURATION) : r();
        }
    }, c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({ using: function using(a) {
                d.css({ top: Math.round(a.top), left: Math.round(a.left) });
            } }, b), 0), d.addClass("in");var i = d[0].offsetWidth,
            j = d[0].offsetHeight;"top" == c && j != f && (b.top = b.top + f - j);var k = this.getViewportAdjustedDelta(c, b, i, j);k.left ? b.left += k.left : b.top += k.top;var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";d.offset(b), this.replaceArrow(m, d[0][n], l);
    }, c.prototype.replaceArrow = function (a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "");
    }, c.prototype.setContent = function () {
        var a = this.tip(),
            b = this.getTitle();a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
    }, c.prototype.hide = function (b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b();
        }var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type);return (this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this));
    }, c.prototype.fixTitle = function () {
        var a = this.$element;(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
    }, c.prototype.hasContent = function () {
        return this.getTitle();
    }, c.prototype.getPosition = function (b) {
        b = b || this.$element;var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top }));var f = d ? { top: 0, left: 0 } : b.offset(),
            g = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
            h = d ? { width: a(window).width(), height: a(window).height() } : null;return a.extend({}, e, g, h, f);
    }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
    }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = { top: 0, left: 0 };if (!this.$viewport) return e;var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
        } else {
            var j = b.left - f,
                k = b.left + f + c;j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k);
        }return e;
    }, c.prototype.getTitle = function () {
        var a,
            b = this.$element,
            c = this.options;return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
    }, c.prototype.getUID = function (a) {
        do a += ~ ~(1000000 * Math.random()); while (document.getElementById(a));return a;
    }, c.prototype.tip = function () {
        return this.$tip = this.$tip || a(this.options.template);
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
    }, c.prototype.enable = function () {
        this.enabled = !0;
    }, c.prototype.disable = function () {
        this.enabled = !1;
    }, c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
    }, c.prototype.toggle = function (b) {
        var c = this;b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
    }, c.prototype.destroy = function () {
        var a = this;clearTimeout(this.timeout), this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type);
        });
    };var d = a.fn.tooltip;a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
        return (a.fn.tooltip = d, this);
    };
})(jQuery), +(function (a) {
    "use strict";function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;(e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]());
        });
    }var c = function c(a, b) {
        this.init("popover", a, b);
    };if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");c.VERSION = "3.3.4", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: "<div class=\"popover\" role=\"tooltip\"><div class=\"arrow\"></div><h3 class=\"popover-title\"></h3><div class=\"popover-content\"></div></div>" }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
        return c.DEFAULTS;
    }, c.prototype.setContent = function () {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
    }, c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
    }, c.prototype.getContent = function () {
        var a = this.$element,
            b = this.options;return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow");
    };var d = a.fn.popover;a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
        return (a.fn.popover = d, this);
    };
})(jQuery), +(function (a) {
    "use strict";function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process();
    }function c(c) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
        });
    }b.VERSION = "3.3.4", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
    }, b.prototype.refresh = function () {
        var b = this,
            c = "offset",
            d = 0;this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null;
        }).sort(function (a, b) {
            return a[0] - b[0];
        }).each(function () {
            b.offsets.push(this[0]), b.targets.push(this[1]);
        });
    }, b.prototype.process = function () {
        var a,
            b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;if ((this.scrollHeight != c && this.refresh(), b >= d)) return g != (a = f[f.length - 1]) && this.activate(a);if (g && b < e[0]) return (this.activeTarget = null, this.clear());for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]);
    }, b.prototype.activate = function (b) {
        this.activeTarget = b, this.clear();var c = this.selector + "[data-target=\"" + b + "\"]," + this.selector + "[href=\"" + b + "\"]",
            d = a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
    }, b.prototype.clear = function () {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
    };var d = a.fn.scrollspy;a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
        return (a.fn.scrollspy = d, this);
    }, a(window).on("load.bs.scrollspy.data-api", function () {
        a("[data-spy=\"scroll\"]").each(function () {
            var b = a(this);c.call(b, b.data());
        });
    });
})(jQuery), +(function (a) {
    "use strict";function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.tab");e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
        });
    }var c = function c(b) {
        this.element = a(b);
    };c.VERSION = "3.3.4", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");if ((d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active"))) {
            var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
                g = a.Event("show.bs.tab", { relatedTarget: e[0] });
            if ((e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented())) {
                var h = a(d);this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
                    e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
                });
            }
        }
    }, c.prototype.activate = function (b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find("[data-toggle=\"tab\"]").attr("aria-expanded", !1), b.addClass("active").find("[data-toggle=\"tab\"]").attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find("[data-toggle=\"tab\"]").attr("aria-expanded", !0), e && e();
        }var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in");
    };var d = a.fn.tab;a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
        return (a.fn.tab = d, this);
    };var e = function e(c) {
        c.preventDefault(), b.call(a(this), "show");
    };a(document).on("click.bs.tab.data-api", "[data-toggle=\"tab\"]", e).on("click.bs.tab.data-api", "[data-toggle=\"pill\"]", e);
})(jQuery), +(function (a) {
    "use strict";function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
        });
    }var c = function c(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition();
    };c.VERSION = "3.3.4", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height();if (null != c && "top" == this.affixed) return c > e ? "top" : !1;if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b;return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1;
    }, c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a = this.$target.scrollTop(),
            b = this.$element.offset();return this.pinnedOffset = b.top - a;
    }, c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1);
    }, c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = a(document.body).height();"object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));var h = this.getState(g, b, e, f);if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix");if ((this.$element.trigger(j), j.isDefaultPrevented())) return;this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix");
            }"bottom" == h && this.$element.offset({ top: g - b - f });
        }
    };var d = a.fn.affix;a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
        return (a.fn.affix = d, this);
    }, a(window).on("load", function () {
        a("[data-spy=\"affix\"]").each(function () {
            var c = a(this),
                d = c.data();d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
        });
    });
})(jQuery);
"classList" in document.createElement("_") || !(function (a) {
    "use strict";if ("Element" in a) {
        var b = "classList",
            c = "prototype",
            d = a.Element[c],
            e = Object,
            f = String[c].trim || function () {
            return this.replace(/^\s+|\s+$/g, "");
        },
            g = Array[c].indexOf || function (a) {
            for (var b = 0, c = this.length; c > b; b++) if (b in this && this[b] === a) return b;return -1;
        },
            h = function h(a, b) {
            this.name = a, this.code = DOMException[a], this.message = b;
        },
            i = function i(a, b) {
            if ("" === b) throw new h("SYNTAX_ERR", "An invalid or illegal string was specified");if (/\s/.test(b)) throw new h("INVALID_CHARACTER_ERR", "String contains an invalid character");return g.call(a, b);
        },
            j = function j(a) {
            for (var b = f.call(a.getAttribute("class") || ""), c = b ? b.split(/\s+/) : [], d = 0, e = c.length; e > d; d++) this.push(c[d]);this._updateClassName = function () {
                a.setAttribute("class", this.toString());
            };
        },
            k = j[c] = [],
            l = function l() {
            return new j(this);
        };if ((h[c] = Error[c], k.item = function (a) {
            return this[a] || null;
        }, k.contains = function (a) {
            return (a += "", -1 !== i(this, a));
        }, k.add = function () {
            var a,
                b = arguments,
                c = 0,
                d = b.length,
                e = !1;do a = b[c] + "", -1 === i(this, a) && (this.push(a), e = !0); while (++c < d);e && this._updateClassName();
        }, k.remove = function () {
            var a,
                b,
                c = arguments,
                d = 0,
                e = c.length,
                f = !1;do for (a = c[d] + "", b = i(this, a); -1 !== b;) this.splice(b, 1), f = !0, b = i(this, a); while (++d < e);f && this._updateClassName();
        }, k.toggle = function (a, b) {
            a += "";var c = this.contains(a),
                d = c ? b !== !0 && "remove" : b !== !1 && "add";return (d && this[d](a), b === !0 || b === !1 ? b : !c);
        }, k.toString = function () {
            return this.join(" ");
        }, e.defineProperty)) {
            var m = { get: l, enumerable: !0, configurable: !0 };try {
                e.defineProperty(d, b, m);
            } catch (n) {
                -2146823252 === n.number && (m.enumerable = !1, e.defineProperty(d, b, m));
            }
        } else e[c].__defineGetter__ && d.__defineGetter__(b, l);
    }
})(self), (function (a) {
    "use strict";if ((a.URL = a.URL || a.webkitURL, a.Blob && a.URL)) try {
        return void new Blob();
    } catch (b) {}var c = a.BlobBuilder || a.WebKitBlobBuilder || a.MozBlobBuilder || (function (a) {
        var b = function b(a) {
            return Object.prototype.toString.call(a).match(/^\[object\s(.*)\]$/)[1];
        },
            c = function c() {
            this.data = [];
        },
            d = function d(a, b, c) {
            this.data = a, this.size = a.length, this.type = b, this.encoding = c;
        },
            e = c.prototype,
            f = d.prototype,
            g = a.FileReaderSync,
            h = function h(a) {
            this.code = this[this.name = a];
        },
            i = "NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "),
            j = i.length,
            k = a.URL || a.webkitURL || a,
            l = k.createObjectURL,
            m = k.revokeObjectURL,
            n = k,
            o = a.btoa,
            p = a.atob,
            q = a.ArrayBuffer,
            r = a.Uint8Array,
            s = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;for (d.fake = f.fake = !0; j--;) h.prototype[i[j]] = j + 1;return (k.createObjectURL || (n = a.URL = function (a) {
            var b,
                c = document.createElementNS("http://www.w3.org/1999/xhtml", "a");return (c.href = a, "origin" in c || ("data:" === c.protocol.toLowerCase() ? c.origin = null : (b = a.match(s), c.origin = b && b[1])), c);
        }), n.createObjectURL = function (a) {
            var b,
                c = a.type;return (null === c && (c = "application/octet-stream"), a instanceof d ? (b = "data:" + c, "base64" === a.encoding ? b + ";base64," + a.data : "URI" === a.encoding ? b + "," + decodeURIComponent(a.data) : o ? b + ";base64," + o(a.data) : b + "," + encodeURIComponent(a.data)) : l ? l.call(k, a) : void 0);
        }, n.revokeObjectURL = function (a) {
            "data:" !== a.substring(0, 5) && m && m.call(k, a);
        }, e.append = function (a) {
            var c = this.data;if (r && (a instanceof q || a instanceof r)) {
                for (var e = "", f = new r(a), i = 0, j = f.length; j > i; i++) e += String.fromCharCode(f[i]);c.push(e);
            } else if ("Blob" === b(a) || "File" === b(a)) {
                if (!g) throw new h("NOT_READABLE_ERR");var k = new g();c.push(k.readAsBinaryString(a));
            } else a instanceof d ? "base64" === a.encoding && p ? c.push(p(a.data)) : "URI" === a.encoding ? c.push(decodeURIComponent(a.data)) : "raw" === a.encoding && c.push(a.data) : ("string" != typeof a && (a += ""), c.push(unescape(encodeURIComponent(a))));
        }, e.getBlob = function (a) {
            return (arguments.length || (a = null), new d(this.data.join(""), a, "raw"));
        }, e.toString = function () {
            return "[object BlobBuilder]";
        }, f.slice = function (a, b, c) {
            var e = arguments.length;return (3 > e && (c = null), new d(this.data.slice(a, e > 1 ? b : this.data.length), c, this.encoding));
        }, f.toString = function () {
            return "[object Blob]";
        }, f.close = function () {
            this.size = 0, delete this.data;
        }, c);
    })(a);a.Blob = function (a, b) {
        var d = b ? b.type || "" : "",
            e = new c();if (a) for (var f = 0, g = a.length; g > f; f++) e.append(Uint8Array && a[f] instanceof Uint8Array ? a[f].buffer : a[f]);var h = e.getBlob(d);return (!h.slice && h.webkitSlice && (h.slice = h.webkitSlice), h);
    };var d = Object.getPrototypeOf || function (a) {
        return a.__proto__;
    };a.Blob.prototype = d(new a.Blob());
})("undefined" != typeof self && self || "undefined" != typeof window && window || undefined.content || undefined), (function (a, b) {
    "use strict";"object" == typeof module ? module.exports = b : "function" == typeof define && define.amd ? define(function () {
        return b;
    }) : a.MediumEditor = b;
})(undefined, (function () {
    "use strict";function a(a, b) {
        return this.init(a, b);
    }var b;!(function (a) {
        function c(b, c, d) {
            d || (d = a);try {
                for (var e = 0; e < b.length; e++) {
                    var f = b[e];if (!(f in d)) {
                        if (!c) return;d[f] = {};
                    }d = d[f];
                }return d;
            } catch (g) {}
        }function d(a, b) {
            var c,
                d = Array.prototype.slice.call(arguments, 2);b = b || {};for (var e = 0; e < d.length; e++) {
                var f = d[e];if (f) for (c in f) f.hasOwnProperty(c) && "undefined" != typeof f[c] && (a || b.hasOwnProperty(c) === !1) && (b[c] = f[c]);
            }return b;
        }b = { isIE: "Microsoft Internet Explorer" === navigator.appName || "Netscape" === navigator.appName && null !== new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(navigator.userAgent), isMac: a.navigator.platform.toUpperCase().indexOf("MAC") >= 0, keyCode: { BACKSPACE: 8, TAB: 9, ENTER: 13, ESCAPE: 27, SPACE: 32, DELETE: 46 }, isMetaCtrlKey: function isMetaCtrlKey(a) {
                return this.isMac && a.metaKey || !this.isMac && a.ctrlKey ? !0 : !1;
            }, parentElements: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "pre"], extend: function extend() {
                var a = [!0].concat(Array.prototype.slice.call(arguments));return d.apply(this, a);
            }, defaults: function defaults() {
                var a = [!1].concat(Array.prototype.slice.call(arguments));return d.apply(this, a);
            }, derives: function derives(a, b) {
                function c() {}var e = b.prototype;return (c.prototype = a.prototype, b.prototype = new c(), b.prototype.constructor = a, b.prototype = d(!1, b.prototype, e), b);
            }, findAdjacentTextNodeWithContent: function findAdjacentTextNodeWithContent(a, b, c) {
                var d,
                    e = !1,
                    f = c.createNodeIterator(a, NodeFilter.SHOW_TEXT, null, !1);for (d = f.nextNode(); d;) {
                    if (d === b) e = !0;else if (e && 3 === d.nodeType && d.nodeValue && d.nodeValue.trim().length > 0) break;d = f.nextNode();
                }return d;
            }, isDescendant: function isDescendant(a, b, c) {
                if (!a || !b) return !1;if (c && a === b) return !0;for (var d = b.parentNode; null !== d;) {
                    if (d === a) return !0;d = d.parentNode;
                }return !1;
            }, isElement: function isElement(a) {
                return !(!a || 1 !== a.nodeType);
            }, now: Date.now, throttle: function throttle(a, b) {
                var c,
                    d,
                    e,
                    f = 50,
                    g = null,
                    h = 0,
                    i = function i() {
                    h = Date.now(), g = null, e = a.apply(c, d), g || (c = d = null);
                };return (b || 0 === b || (b = f), function () {
                    var f = Date.now(),
                        j = b - (f - h);return (c = this, d = arguments, 0 >= j || j > b ? (g && (clearTimeout(g), g = null), h = f, e = a.apply(c, d), g || (c = d = null)) : g || (g = setTimeout(i, j)), e);
                });
            }, traverseUp: function traverseUp(a, b) {
                if (!a) return !1;do {
                    if (1 === a.nodeType) {
                        if (b(a)) return a;if (a.getAttribute("data-medium-element")) return !1;
                    }a = a.parentNode;
                } while (a);return !1;
            }, htmlEntities: function htmlEntities(a) {
                return String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
            }, insertHTMLCommand: function insertHTMLCommand(a, b) {
                var c, d, e, f, g, h, i;if (a.queryCommandSupported("insertHTML")) try {
                    return a.execCommand("insertHTML", !1, b);
                } catch (j) {}if ((c = a.defaultView.getSelection(), c.getRangeAt && c.rangeCount)) {
                    if ((d = c.getRangeAt(0), i = d.commonAncestorContainer, 3 === i.nodeType && i.nodeValue === d.toString() || 3 !== i.nodeType && i.innerHTML === d.toString())) {
                        for (; i.parentNode && 1 === i.parentNode.childNodes.length && !i.parentNode.getAttribute("data-medium-element");) i = i.parentNode;d.selectNode(i);
                    }for (d.deleteContents(), e = a.createElement("div"), e.innerHTML = b, f = a.createDocumentFragment(); e.firstChild;) g = e.firstChild, h = f.appendChild(g);d.insertNode(f), h && (d = d.cloneRange(), d.setStartAfter(h), d.collapse(!0), c.removeAllRanges(), c.addRange(d));
                }
            }, getSelectionRange: function getSelectionRange(a) {
                var b = a.getSelection();return 0 === b.rangeCount ? null : b.getRangeAt(0);
            }, getSelectionStart: function getSelectionStart(a) {
                var b = a.getSelection().anchorNode,
                    c = b && 3 === b.nodeType ? b.parentNode : b;return c;
            }, getSelectionData: function getSelectionData(a) {
                var b;for (a && a.tagName && (b = a.tagName.toLowerCase()); a && -1 === this.parentElements.indexOf(b);) a = a.parentNode, a && a.tagName && (b = a.tagName.toLowerCase());return { el: a, tagName: b };
            }, execFormatBlock: function execFormatBlock(a, b) {
                var c = this.getSelectionData(this.getSelectionStart(a));if ("blockquote" === b && c.el && "blockquote" === c.el.parentNode.tagName.toLowerCase()) return a.execCommand("outdent", !1, null);if ((c.tagName === b && (b = "p"), this.isIE)) {
                    if ("blockquote" === b) return a.execCommand("indent", !1, b);b = "<" + b + ">";
                }return a.execCommand("formatBlock", !1, b);
            }, setTargetBlank: function setTargetBlank(a) {
                var b;if ("a" === a.tagName.toLowerCase()) a.target = "_blank";else for (a = a.getElementsByTagName("a"), b = 0; b < a.length; b += 1) a[b].target = "_blank";
            }, addClassToAnchors: function addClassToAnchors(a, b) {
                var c,
                    d,
                    e = b.split(" ");if ("a" === a.tagName.toLowerCase()) for (d = 0; d < e.length; d += 1) a.classList.add(e[d]);else for (a = a.getElementsByTagName("a"), c = 0; c < a.length; c += 1) for (d = 0; d < e.length; d += 1) a[c].classList.add(e[d]);
            }, isListItem: function isListItem(a) {
                if (!a) return !1;if ("li" === a.tagName.toLowerCase()) return !0;for (var b = a.parentNode, c = b.tagName.toLowerCase(); -1 === this.parentElements.indexOf(c) && "div" !== c;) {
                    if ("li" === c) return !0;if ((b = b.parentNode, !b || !b.tagName)) return !1;c = b.tagName.toLowerCase();
                }return !1;
            }, cleanListDOM: function cleanListDOM(a) {
                if ("li" === a.tagName.toLowerCase()) {
                    var b = a.parentElement;"p" === b.parentElement.tagName.toLowerCase() && this.unwrapElement(b.parentElement);
                }
            }, unwrapElement: function unwrapElement(a) {
                var b,
                    c = a.parentNode,
                    d = a.firstChild;do b = d.nextSibling, c.insertBefore(d, a), d = b; while (d);c.removeChild(a);
            }, warn: function warn() {
                void 0 !== a.console && "function" == typeof a.console.warn && a.console.warn.apply(console, arguments);
            }, deprecated: function deprecated(a, c, d) {
                var e = a + " is deprecated, please use " + c + " instead.";d && (e += " Will be removed in " + d), b.warn(e);
            }, deprecatedMethod: function deprecatedMethod(a, c, d, e) {
                b.deprecated(a, c, e), "function" == typeof this[c] && this[c].apply(this, d);
            }, cleanupAttrs: function cleanupAttrs(a, b) {
                b.forEach(function (b) {
                    a.removeAttribute(b);
                });
            }, cleanupTags: function cleanupTags(a, b) {
                b.forEach(function (b) {
                    a.tagName.toLowerCase() === b && a.parentNode.removeChild(a);
                }, this);
            }, getClosestTag: function getClosestTag(a, c) {
                return b.traverseUp(a, function (a) {
                    return a.tagName.toLowerCase() === c.toLowerCase();
                });
            }, unwrap: function unwrap(a, b) {
                for (var c = b.createDocumentFragment(), d = Array.prototype.slice.call(a.childNodes), e = 0; e < d.length; e++) c.appendChild(d[e]);c.childNodes.length ? a.parentNode.replaceChild(c, a) : a.parentNode.removeChild(a);
            }, setObject: function setObject(a, b, d) {
                var e = a.split("."),
                    f = e.pop(),
                    g = c(e, !0, d);return g && f ? g[f] = b : void 0;
            }, getObject: function getObject(a, b, d) {
                return c(a ? a.split(".") : [], b, d);
            } };
    })(window);var c;!(function () {
        c = { bold: { name: "bold", action: "bold", aria: "bold", tagNames: ["b", "strong"], style: { prop: "font-weight", value: "700|bold" }, useQueryState: !0, contentDefault: "<b>B</b>", contentFA: "<i class=\"fa fa-bold\"></i>", key: "b" }, italic: { name: "italic", action: "italic", aria: "italic", tagNames: ["i", "em"], style: { prop: "font-style", value: "italic" }, useQueryState: !0, contentDefault: "<b><i>I</i></b>", contentFA: "<i class=\"fa fa-italic\"></i>", key: "i" }, underline: { name: "underline", action: "underline", aria: "underline", tagNames: ["u"], style: { prop: "text-decoration", value: "underline" }, useQueryState: !0, contentDefault: "<b><u>U</u></b>", contentFA: "<i class=\"fa fa-underline\"></i>", key: "u" }, strikethrough: { name: "strikethrough", action: "strikethrough", aria: "strike through", tagNames: ["strike"], style: { prop: "text-decoration", value: "line-through" }, useQueryState: !0, contentDefault: "<s>A</s>", contentFA: "<i class=\"fa fa-strikethrough\"></i>" }, superscript: { name: "superscript", action: "superscript", aria: "superscript", tagNames: ["sup"], contentDefault: "<b>x<sup>1</sup></b>", contentFA: "<i class=\"fa fa-superscript\"></i>" }, subscript: { name: "subscript", action: "subscript", aria: "subscript", tagNames: ["sub"], contentDefault: "<b>x<sub>1</sub></b>", contentFA: "<i class=\"fa fa-subscript\"></i>" }, image: { name: "image", action: "image", aria: "image", tagNames: ["img"], contentDefault: "<b>image</b>", contentFA: "<i class=\"fa fa-picture-o\"></i>" }, quote: { name: "quote", action: "append-blockquote", aria: "blockquote", tagNames: ["blockquote"], contentDefault: "<b>&ldquo;</b>", contentFA: "<i class=\"fa fa-quote-right\"></i>" }, orderedlist: { name: "orderedlist", action: "insertorderedlist", aria: "ordered list", tagNames: ["ol"], useQueryState: !0, contentDefault: "<b>1.</b>", contentFA: "<i class=\"fa fa-list-ol\"></i>" }, unorderedlist: { name: "unorderedlist", action: "insertunorderedlist", aria: "unordered list", tagNames: ["ul"], useQueryState: !0, contentDefault: "<b>&bull;</b>", contentFA: "<i class=\"fa fa-list-ul\"></i>" }, pre: { name: "pre", action: "append-pre", aria: "preformatted text", tagNames: ["pre"], contentDefault: "<b>0101</b>", contentFA: "<i class=\"fa fa-code fa-lg\"></i>" }, indent: { name: "indent", action: "indent", aria: "indent", tagNames: [], contentDefault: "<b>&rarr;</b>", contentFA: "<i class=\"fa fa-indent\"></i>" }, outdent: { name: "outdent", action: "outdent", aria: "outdent", tagNames: [], contentDefault: "<b>&larr;</b>", contentFA: "<i class=\"fa fa-outdent\"></i>" }, justifyCenter: { name: "justifyCenter", action: "justifyCenter", aria: "center justify", tagNames: [], style: { prop: "text-align", value: "center" }, contentDefault: "<b>C</b>", contentFA: "<i class=\"fa fa-align-center\"></i>" }, justifyFull: { name: "justifyFull", action: "justifyFull", aria: "full justify", tagNames: [], style: { prop: "text-align", value: "justify" }, contentDefault: "<b>J</b>", contentFA: "<i class=\"fa fa-align-justify\"></i>" }, justifyLeft: { name: "justifyLeft", action: "justifyLeft", aria: "left justify", tagNames: [], style: { prop: "text-align", value: "left" }, contentDefault: "<b>L</b>", contentFA: "<i class=\"fa fa-align-left\"></i>" }, justifyRight: { name: "justifyRight", action: "justifyRight", aria: "right justify", tagNames: [], style: { prop: "text-align", value: "right" }, contentDefault: "<b>R</b>", contentFA: "<i class=\"fa fa-align-right\"></i>" }, header1: { name: "header1", action: function action(a) {
                    return "append-" + a.firstHeader;
                }, aria: function aria(a) {
                    return a.firstHeader;
                }, tagNames: function tagNames(a) {
                    return [a.firstHeader];
                }, contentDefault: "<b>H1</b>" }, header2: { name: "header2", action: function action(a) {
                    return "append-" + a.secondHeader;
                }, aria: function aria(a) {
                    return a.secondHeader;
                }, tagNames: function tagNames(a) {
                    return [a.secondHeader];
                }, contentDefault: "<b>H2</b>" }, removeFormat: { name: "removeFormat", aria: "remove formatting", action: "removeFormat", contentDefault: "<b>X</b>", contentFA: "<i class=\"fa fa-eraser\"></i>" } };
    })();var d;!(function () {
        d = { allowMultiParagraphSelection: !0, anchorInputPlaceholder: "Paste or type a link", anchorInputCheckboxLabel: "Open in new window", anchorPreviewHideDelay: 500, buttons: ["bold", "italic", "underline", "anchor", "header1", "header2", "quote"], buttonLabels: !1, checkLinkFormat: !1, delay: 0, diffLeft: 0, diffTop: -10, disableReturn: !1, disableDoubleReturn: !1, disableToolbar: !1, disableAnchorPreview: !1, disableEditing: !1, disablePlaceholders: !1, toolbarAlign: "center", elementsContainer: !1, imageDragging: !0, standardizeSelectionStart: !1, contentWindow: window, ownerDocument: document, firstHeader: "h3", placeholder: "Type your text", secondHeader: "h4", targetBlank: !1, anchorTarget: !1, anchorButton: !1, anchorButtonClass: "btn", extensions: {}, activeButtonClass: "medium-editor-button-active", firstButtonClass: "medium-editor-button-first", lastButtonClass: "medium-editor-button-last", spellcheck: !0, paste: { forcePlainText: !0, cleanPastedHTML: !1, cleanAttrs: ["class", "style", "dir"], cleanTags: ["meta"] } };
    })();var e;!(function () {
        e = function (a) {
            b.extend(this, a);
        }, e.extend = function (a) {
            var c,
                d = this;c = a && a.hasOwnProperty("constructor") ? a.constructor : function () {
                return d.apply(this, arguments);
            }, b.extend(c, d);var e = function e() {
                this.constructor = c;
            };return (e.prototype = d.prototype, c.prototype = new e(), a && b.extend(c.prototype, a), c);
        }, e.prototype = { init: function init() {}, parent: !1, base: null, name: null, checkState: null, getButton: null, queryCommandState: null, isActive: null, isAlreadyApplied: null, setActive: null, setInactive: null, onHide: null };
    })();var f;!(function () {
        f = { findMatchingSelectionParent: function findMatchingSelectionParent(a, c) {
                var d,
                    e,
                    f = c.getSelection();return 0 === f.rangeCount ? !1 : (d = f.getRangeAt(0), e = d.commonAncestorContainer, b.traverseUp(e, a));
            }, getSelectionElement: function getSelectionElement(a) {
                return this.findMatchingSelectionParent(function (a) {
                    return a.getAttribute("data-medium-element");
                }, a);
            }, selectionInContentEditableFalse: function selectionInContentEditableFalse(a) {
                return this.findMatchingSelectionParent(function (a) {
                    return a && "#text" !== a.nodeName && "false" === a.getAttribute("contenteditable");
                }, a);
            }, getSelectionHtml: function getSelectionHtml() {
                var a,
                    b,
                    c,
                    d = "",
                    e = this.options.contentWindow.getSelection();if (e.rangeCount) {
                    for (c = this.options.ownerDocument.createElement("div"), a = 0, b = e.rangeCount; b > a; a += 1) c.appendChild(e.getRangeAt(a).cloneContents());d = c.innerHTML;
                }return d;
            }, getCaretOffsets: function getCaretOffsets(a, b) {
                var c, d;return (b || (b = window.getSelection().getRangeAt(0)), c = b.cloneRange(), d = b.cloneRange(), c.selectNodeContents(a), c.setEnd(b.endContainer, b.endOffset), d.selectNodeContents(a), d.setStart(b.endContainer, b.endOffset), { left: c.toString().length, right: d.toString().length });
            }, rangeSelectsSingleNode: function rangeSelectsSingleNode(a) {
                var b = a.startContainer;return b === a.endContainer && b.hasChildNodes() && a.endOffset === a.startOffset + 1;
            }, getSelectedParentElement: function getSelectedParentElement(a) {
                var b = null;return b = this.rangeSelectsSingleNode(a) && 3 !== a.startContainer.childNodes[a.startOffset].nodeType ? a.startContainer.childNodes[a.startOffset] : 3 === a.startContainer.nodeType ? a.startContainer.parentNode : a.startContainer;
            }, getSelectedElements: function getSelectedElements(a) {
                var b,
                    c,
                    d,
                    e = a.getSelection();if (!e.rangeCount || !e.getRangeAt(0).commonAncestorContainer) return [];if ((b = e.getRangeAt(0), 3 === b.commonAncestorContainer.nodeType)) {
                    for (c = [], d = b.commonAncestorContainer; d.parentNode && 1 === d.parentNode.childNodes.length;) c.push(d.parentNode), d = d.parentNode;return c;
                }return [].filter.call(b.commonAncestorContainer.getElementsByTagName("*"), function (a) {
                    return "function" == typeof e.containsNode ? e.containsNode(a, !0) : !0;
                });
            }, selectNode: function selectNode(a, b) {
                var c = b.createRange(),
                    d = b.getSelection();c.selectNodeContents(a), d.removeAllRanges(), d.addRange(c);
            } };
    })();var g;!(function () {
        g = function (a) {
            this.base = a, this.options = this.base.options, this.events = [], this.customEvents = {}, this.listeners = {};
        }, g.prototype = { attachDOMEvent: function attachDOMEvent(a, b, c, d) {
                a.addEventListener(b, c, d), this.events.push([a, b, c, d]);
            }, detachDOMEvent: function detachDOMEvent(a, b, c, d) {
                var e,
                    f = this.indexOfListener(a, b, c, d);-1 !== f && (e = this.events.splice(f, 1)[0], e[0].removeEventListener(e[1], e[2], e[3]));
            }, indexOfListener: function indexOfListener(a, b, c, d) {
                var e, f, g;for (e = 0, f = this.events.length; f > e; e += 1) if ((g = this.events[e], g[0] === a && g[1] === b && g[2] === c && g[3] === d)) return e;return -1;
            }, detachAllDOMEvents: function detachAllDOMEvents() {
                for (var a = this.events.pop(); a;) a[0].removeEventListener(a[1], a[2], a[3]), a = this.events.pop();
            }, attachCustomEvent: function attachCustomEvent(a, b) {
                this.setupListener(a), this.listeners[a] && (this.customEvents[a] || (this.customEvents[a] = []), this.customEvents[a].push(b));
            }, detachCustomEvent: function detachCustomEvent(a, b) {
                var c = this.indexOfCustomListener(a, b);-1 !== c && this.customEvents[a].splice(c, 1);
            }, indexOfCustomListener: function indexOfCustomListener(a, b) {
                return this.customEvents[a] && this.customEvents[a].length ? this.customEvents[a].indexOf(b) : -1;
            }, detachAllCustomEvents: function detachAllCustomEvents() {
                this.customEvents = {};
            }, triggerCustomEvent: function triggerCustomEvent(a, b, c) {
                this.customEvents[a] && this.customEvents[a].forEach(function (a) {
                    a(b, c);
                });
            }, setupListener: function setupListener(a) {
                if (!this.listeners[a]) switch (a) {case "externalInteraction":
                        this.attachDOMEvent(this.options.ownerDocument.body, "mousedown", this.handleBodyMousedown.bind(this), !0), this.attachDOMEvent(this.options.ownerDocument.body, "click", this.handleBodyClick.bind(this), !0), this.attachDOMEvent(this.options.ownerDocument.body, "focus", this.handleBodyFocus.bind(this), !0), this.listeners[a] = !0;break;case "blur":
                        this.setupListener("externalInteraction"), this.listeners[a] = !0;break;case "focus":
                        this.setupListener("externalInteraction"), this.listeners[a] = !0;break;case "editableClick":
                        this.base.elements.forEach((function (a) {
                            this.attachDOMEvent(a, "click", this.handleClick.bind(this));
                        }).bind(this)), this.listeners[a] = !0;break;case "editableBlur":
                        this.base.elements.forEach((function (a) {
                            this.attachDOMEvent(a, "blur", this.handleBlur.bind(this));
                        }).bind(this)), this.listeners[a] = !0;break;case "editableKeypress":
                        this.base.elements.forEach((function (a) {
                            this.attachDOMEvent(a, "keypress", this.handleKeypress.bind(this));
                        }).bind(this)), this.listeners[a] = !0;break;case "editableKeyup":
                        this.base.elements.forEach((function (a) {
                            this.attachDOMEvent(a, "keyup", this.handleKeyup.bind(this));
                        }).bind(this)), this.listeners[a] = !0;break;case "editableKeydown":
                        this.base.elements.forEach((function (a) {
                            this.attachDOMEvent(a, "keydown", this.handleKeydown.bind(this));
                        }).bind(this)), this.listeners[a] = !0;break;case "editableKeydownEnter":
                        this.setupListener("editableKeydown"), this.listeners[a] = !0;break;case "editableKeydownTab":
                        this.setupListener("editableKeydown"), this.listeners[a] = !0;break;case "editableKeydownDelete":
                        this.setupListener("editableKeydown"), this.listeners[a] = !0;break;case "editableMouseover":
                        this.base.elements.forEach(function (a) {
                            this.attachDOMEvent(a, "mouseover", this.handleMouseover.bind(this));
                        }, this), this.listeners[a] = !0;break;case "editableDrag":
                        this.base.elements.forEach(function (a) {
                            this.attachDOMEvent(a, "dragover", this.handleDragging.bind(this)), this.attachDOMEvent(a, "dragleave", this.handleDragging.bind(this));
                        }, this), this.listeners[a] = !0;break;case "editableDrop":
                        this.base.elements.forEach(function (a) {
                            this.attachDOMEvent(a, "drop", this.handleDrop.bind(this));
                        }, this), this.listeners[a] = !0;break;case "editablePaste":
                        this.base.elements.forEach(function (a) {
                            this.attachDOMEvent(a, "paste", this.handlePaste.bind(this));
                        }, this), this.listeners[a] = !0;}
            }, focusElement: function focusElement(a) {
                a.focus(), this.updateFocus(a, { target: a, type: "focus" });
            }, updateFocus: function updateFocus(a, c) {
                var d,
                    e,
                    f = this.base.toolbar ? this.base.toolbar.getToolbarElement() : null,
                    g = this.base.getExtensionByName("anchor-preview"),
                    h = g && g.getPreviewElement ? g.getPreviewElement() : null;this.base.elements.some(function (a) {
                    return (!d && a.getAttribute("data-medium-focused") && (d = a), !!d);
                }, this), d && "click" === c.type && this.lastMousedownTarget && (b.isDescendant(d, this.lastMousedownTarget, !0) || b.isDescendant(f, this.lastMousedownTarget, !0) || b.isDescendant(h, this.lastMousedownTarget, !0)) && (e = d), e || this.base.elements.some(function (c) {
                    return (!e && b.isDescendant(c, a, !0) && (e = c), !!e);
                }, this);var i = !b.isDescendant(d, a, !0) && !b.isDescendant(f, a, !0) && !b.isDescendant(h, a, !0);e !== d && (d && i && (d.removeAttribute("data-medium-focused"), this.triggerCustomEvent("blur", c, d)), e && (e.setAttribute("data-medium-focused", !0), this.triggerCustomEvent("focus", c, e))), i && this.triggerCustomEvent("externalInteraction", c);
            }, handleBodyClick: function handleBodyClick(a) {
                this.updateFocus(a.target, a);
            }, handleBodyFocus: function handleBodyFocus(a) {
                this.updateFocus(a.target, a);
            }, handleBodyMousedown: function handleBodyMousedown(a) {
                this.lastMousedownTarget = a.target;
            }, handleClick: function handleClick(a) {
                this.triggerCustomEvent("editableClick", a, a.currentTarget);
            }, handleBlur: function handleBlur(a) {
                this.triggerCustomEvent("editableBlur", a, a.currentTarget);
            }, handleKeypress: function handleKeypress(a) {
                this.triggerCustomEvent("editableKeypress", a, a.currentTarget);
            }, handleKeyup: function handleKeyup(a) {
                this.triggerCustomEvent("editableKeyup", a, a.currentTarget);
            }, handleMouseover: function handleMouseover(a) {
                this.triggerCustomEvent("editableMouseover", a, a.currentTarget);
            }, handleDragging: function handleDragging(a) {
                this.triggerCustomEvent("editableDrag", a, a.currentTarget);
            }, handleDrop: function handleDrop(a) {
                this.triggerCustomEvent("editableDrop", a, a.currentTarget);
            }, handlePaste: function handlePaste(a) {
                this.triggerCustomEvent("editablePaste", a, a.currentTarget);
            }, handleKeydown: function handleKeydown(a) {
                switch ((this.triggerCustomEvent("editableKeydown", a, a.currentTarget), a.which)) {case b.keyCode.ENTER:
                        this.triggerCustomEvent("editableKeydownEnter", a, a.currentTarget);break;case b.keyCode.TAB:
                        this.triggerCustomEvent("editableKeydownTab", a, a.currentTarget);break;case b.keyCode.DELETE:case b.keyCode.BACKSPACE:
                        this.triggerCustomEvent("editableKeydownDelete", a, a.currentTarget);}
            } };
    })();var h;!(function () {
        h = function (a, b) {
            this.options = a, this.name = a.name, this.init(b);
        }, h.prototype = { init: function init(a) {
                this.base = a, this.button = this.createButton(), this.base.on(this.button, "click", this.handleClick.bind(this)), this.options.key && this.base.subscribe("editableKeydown", this.handleKeydown.bind(this));
            }, getButton: function getButton() {
                return this.button;
            }, getAction: function getAction() {
                return "function" == typeof this.options.action ? this.options.action(this.base.options) : this.options.action;
            }, getAria: function getAria() {
                return "function" == typeof this.options.aria ? this.options.aria(this.base.options) : this.options.aria;
            }, getTagNames: function getTagNames() {
                return "function" == typeof this.options.tagNames ? this.options.tagNames(this.base.options) : this.options.tagNames;
            }, createButton: function createButton() {
                var a = this.base.options.ownerDocument.createElement("button"),
                    b = this.options.contentDefault,
                    c = this.getAria();return (a.classList.add("medium-editor-action"), a.classList.add("medium-editor-action-" + this.name), a.setAttribute("data-action", this.getAction()), c && (a.setAttribute("title", c), a.setAttribute("aria-label", c)), this.base.options.buttonLabels && ("fontawesome" === this.base.options.buttonLabels && this.options.contentFA ? b = this.options.contentFA : "object" == typeof this.base.options.buttonLabels && this.base.options.buttonLabels[this.name] && (b = this.base.options.buttonLabels[this.options.name])), a.innerHTML = b, a);
            }, handleKeydown: function handleKeydown(a) {
                var c,
                    d = String.fromCharCode(a.which || a.keyCode).toLowerCase();this.options.key === d && b.isMetaCtrlKey(a) && (a.preventDefault(), a.stopPropagation(), c = this.getAction(), c && this.base.execAction(c));
            }, handleClick: function handleClick(a) {
                a.preventDefault(), a.stopPropagation();var b = this.getAction();b && this.base.execAction(b);
            }, isActive: function isActive() {
                return this.button.classList.contains(this.base.options.activeButtonClass);
            }, setInactive: function setInactive() {
                this.button.classList.remove(this.base.options.activeButtonClass), delete this.knownState;
            }, setActive: function setActive() {
                this.button.classList.add(this.base.options.activeButtonClass), delete this.knownState;
            }, queryCommandState: function queryCommandState() {
                var a = null;return (this.options.useQueryState && (a = this.base.queryCommandState(this.getAction())), a);
            }, isAlreadyApplied: function isAlreadyApplied(a) {
                var b,
                    c,
                    d = !1,
                    e = this.getTagNames();return this.knownState === !1 || this.knownState === !0 ? this.knownState : (e && e.length > 0 && a.tagName && (d = -1 !== e.indexOf(a.tagName.toLowerCase())), !d && this.options.style && (b = this.options.style.value.split("|"), c = this.base.options.contentWindow.getComputedStyle(a, null).getPropertyValue(this.options.style.prop), b.forEach(function (a) {
                    this.knownState || (d = -1 !== c.indexOf(a), (d || "text-decoration" !== this.options.style.prop) && (this.knownState = d));
                }, this)), d);
            } };
    })();var i;!(function () {
        function a() {
            return [[new RegExp(/<[^>]*docs-internal-guid[^>]*>/gi), ""], [new RegExp(/<\/b>(<br[^>]*>)?$/gi), ""], [new RegExp(/<span class="Apple-converted-space">\s+<\/span>/g), " "], [new RegExp(/<br class="Apple-interchange-newline">/g), "<br>"], [new RegExp(/<span[^>]*(font-style:italic;font-weight:bold|font-weight:bold;font-style:italic)[^>]*>/gi), "<span class=\"replace-with italic bold\">"], [new RegExp(/<span[^>]*font-style:italic[^>]*>/gi), "<span class=\"replace-with italic\">"], [new RegExp(/<span[^>]*font-weight:bold[^>]*>/gi), "<span class=\"replace-with bold\">"], [new RegExp(/&lt;(\/?)(i|b|a)&gt;/gi), "<$1$2>"], [new RegExp(/&lt;a(?:(?!href).)+href=(?:&quot;|&rdquo;|&ldquo;|"|“|”)(((?!&quot;|&rdquo;|&ldquo;|"|“|”).)*)(?:&quot;|&rdquo;|&ldquo;|"|“|”)(?:(?!&gt;).)*&gt;/gi), "<a href=\"$1\">"], [new RegExp(/<\/p>\n+/gi), "</p>"], [new RegExp(/\n+<p/gi), "<p"], [new RegExp(/<\/?o:[a-z]*>/gi), ""]];
        }i = e.extend({ forcePlainText: !0, cleanPastedHTML: !1, cleanReplacements: [], cleanAttrs: ["class", "style", "dir"], cleanTags: ["meta"], window: window, document: document, targetBlank: !1, disableReturn: !1, parent: !0, init: function init() {
                (this.forcePlainText || this.cleanPastedHTML) && this.base.subscribe("editablePaste", this.handlePaste.bind(this));
            }, handlePaste: function handlePaste(a, c) {
                var d,
                    e,
                    f,
                    g,
                    h = "",
                    i = "text/html",
                    j = "text/plain";if ((this.window.clipboardData && void 0 === a.clipboardData && (a.clipboardData = this.window.clipboardData, i = "Text", j = "Text"), a.clipboardData && a.clipboardData.getData && !a.defaultPrevented)) {
                    if ((a.preventDefault(), f = a.clipboardData.getData(i), g = a.clipboardData.getData(j), f || (f = g), this.cleanPastedHTML && f)) return this.cleanPaste(f);if (this.disableReturn || c.getAttribute("data-disable-return")) h = b.htmlEntities(g);else if ((d = g.split(/[\r\n]+/g), d.length > 1)) for (e = 0; e < d.length; e += 1) "" !== d[e] && (h += "<p>" + b.htmlEntities(d[e]) + "</p>");else h = b.htmlEntities(d[0]);b.insertHTMLCommand(this.document, h);
                }
            }, cleanPaste: function cleanPaste(c) {
                var d,
                    e,
                    g,
                    h = f.getSelectionElement(this.window),
                    i = /<p|<br|<div/.test(c),
                    j = a().concat(this.cleanReplacements || []);for (d = 0; d < j.length; d += 1) c = c.replace(j[d][0], j[d][1]);if (i) {
                    e = c.split("<br><br>"), this.pasteHTML("<p>" + e.join("</p><p>") + "</p>");try {
                        this.document.execCommand("insertText", !1, "\n");
                    } catch (k) {}for (e = h.querySelectorAll("a,p,div,br"), d = 0; d < e.length; d += 1) switch ((g = e[d], g.innerHTML = g.innerHTML.replace(/\n/gi, " "), g.tagName.toLowerCase())) {case "a":
                            this.targetBlank && b.setTargetBlank(g);break;case "p":case "div":
                            this.filterCommonBlocks(g);break;case "br":
                            this.filterLineBreak(g);}
                } else this.pasteHTML(c);
            }, pasteHTML: function pasteHTML(a, c) {
                c = b.defaults({}, c, { cleanAttrs: this.cleanAttrs, cleanTags: this.cleanTags });var d,
                    e,
                    f,
                    g,
                    h = this.document.createDocumentFragment();for (h.appendChild(this.document.createElement("body")), g = h.querySelector("body"), g.innerHTML = a, this.cleanupSpans(g), d = g.querySelectorAll("*"), f = 0; f < d.length; f += 1) e = d[f], b.cleanupAttrs(e, c.cleanAttrs), b.cleanupTags(e, c.cleanTags);b.insertHTMLCommand(this.document, g.innerHTML.replace(/&nbsp;/g, " "));
            }, isCommonBlock: function isCommonBlock(a) {
                return a && ("p" === a.tagName.toLowerCase() || "div" === a.tagName.toLowerCase());
            }, filterCommonBlocks: function filterCommonBlocks(a) {
                /^\s*$/.test(a.textContent) && a.parentNode && a.parentNode.removeChild(a);
            }, filterLineBreak: function filterLineBreak(a) {
                this.isCommonBlock(a.previousElementSibling) ? this.removeWithParent(a) : !this.isCommonBlock(a.parentNode) || a.parentNode.firstChild !== a && a.parentNode.lastChild !== a ? a.parentNode && 1 === a.parentNode.childElementCount && "" === a.parentNode.textContent && this.removeWithParent(a) : this.removeWithParent(a);
            }, removeWithParent: function removeWithParent(a) {
                a && a.parentNode && (a.parentNode.parentNode && 1 === a.parentNode.childElementCount ? a.parentNode.parentNode.removeChild(a.parentNode) : a.parentNode.removeChild(a));
            }, cleanupSpans: function cleanupSpans(a) {
                var c,
                    d,
                    e,
                    f = a.querySelectorAll(".replace-with"),
                    g = function g(a) {
                    return a && "#text" !== a.nodeName && "false" === a.getAttribute("contenteditable");
                };for (c = 0; c < f.length; c += 1) d = f[c], e = this.document.createElement(d.classList.contains("bold") ? "b" : "i"), d.classList.contains("bold") && d.classList.contains("italic") ? e.innerHTML = "<i>" + d.innerHTML + "</i>" : e.innerHTML = d.innerHTML, d.parentNode.replaceChild(e, d);for (f = a.querySelectorAll("span"), c = 0; c < f.length; c += 1) {
                    if ((d = f[c], b.traverseUp(d, g))) return !1;b.unwrap(d, this.document);
                }
            } });
    })();var j;!(function () {
        function a() {
            this.parent = !0, this.options = { name: "anchor", action: "createLink", aria: "link", tagNames: ["a"], contentDefault: "<b>#</b>", contentFA: "<i class=\"fa fa-link\"></i>", key: "k" }, this.name = "anchor", this.hasForm = !0;
        }a.prototype = { formSaveLabel: "&#10003;", formCloseLabel: "&times;", handleClick: function handleClick(a) {
                a.preventDefault(), a.stopPropagation();var c = f.getSelectedParentElement(b.getSelectionRange(this.base.options.ownerDocument));return c.tagName && "a" === c.tagName.toLowerCase() ? this.base.execAction("unlink") : (this.isDisplayed() || this.showForm(), !1);
            }, handleKeydown: function handleKeydown(a) {
                var c = String.fromCharCode(a.which || a.keyCode).toLowerCase();this.options.key === c && b.isMetaCtrlKey(a) && (a.preventDefault(), a.stopPropagation(), this.handleClick(a));
            }, getForm: function getForm() {
                return (this.form || (this.form = this.createForm()), this.form);
            }, getTemplate: function getTemplate() {
                var a = ["<input type=\"text\" class=\"medium-editor-toolbar-input\" placeholder=\"", this.base.options.anchorInputPlaceholder, "\">"];return (a.push("<a href=\"#\" class=\"medium-editor-toolbar-save\">", "fontawesome" === this.base.options.buttonLabels ? "<i class=\"fa fa-check\"></i>" : this.formSaveLabel, "</a>"), a.push("<a href=\"#\" class=\"medium-editor-toolbar-close\">", "fontawesome" === this.base.options.buttonLabels ? "<i class=\"fa fa-times\"></i>" : this.formCloseLabel, "</a>"), this.base.options.anchorTarget && a.push("<input type=\"checkbox\" class=\"medium-editor-toolbar-anchor-target\">", "<label>", this.base.options.anchorInputCheckboxLabel, "</label>"), this.base.options.anchorButton && a.push("<input type=\"checkbox\" class=\"medium-editor-toolbar-anchor-button\">", "<label>Button</label>"), a.join(""));
            }, isDisplayed: function isDisplayed() {
                return "block" === this.getForm().style.display;
            }, hideForm: function hideForm() {
                this.getForm().style.display = "none", this.getInput().value = "";
            }, showForm: function showForm(a) {
                var b = this.getInput();this.base.saveSelection(), this.base.hideToolbarDefaultActions(), this.getForm().style.display = "block", this.base.setToolbarPosition(), b.value = a || "", b.focus();
            }, deactivate: function deactivate() {
                return this.form ? (this.form.parentNode && this.form.parentNode.removeChild(this.form), void delete this.form) : !1;
            }, getFormOpts: function getFormOpts() {
                var a = this.getForm().querySelector(".medium-editor-toolbar-anchor-target"),
                    b = this.getForm().querySelector(".medium-editor-toolbar-anchor-button"),
                    c = { url: this.getInput().value };return (this.base.options.checkLinkFormat && (c.url = this.checkLinkFormat(c.url)), a && a.checked ? c.target = "_blank" : c.target = "_self", b && b.checked && (c.buttonClass = this.base.options.anchorButtonClass), c);
            }, doFormSave: function doFormSave() {
                var a = this.getFormOpts();this.completeFormSave(a);
            }, completeFormSave: function completeFormSave(a) {
                this.base.restoreSelection(), this.base.createLink(a), this.base.checkSelection();
            }, checkLinkFormat: function checkLinkFormat(a) {
                var b = /^(https?|ftps?|rtmpt?):\/\/|mailto:/;return (b.test(a) ? "" : "http://") + a;
            }, doFormCancel: function doFormCancel() {
                this.base.restoreSelection(), this.base.checkSelection();
            }, attachFormEvents: function attachFormEvents(a) {
                var b = a.querySelector(".medium-editor-toolbar-close"),
                    c = a.querySelector(".medium-editor-toolbar-save"),
                    d = a.querySelector(".medium-editor-toolbar-input");this.base.on(a, "click", this.handleFormClick.bind(this)), this.base.on(d, "keyup", this.handleTextboxKeyup.bind(this)), this.base.on(b, "click", this.handleCloseClick.bind(this)), this.base.on(c, "click", this.handleSaveClick.bind(this), !0);
            }, createForm: function createForm() {
                var a = this.base.options.ownerDocument,
                    b = a.createElement("div");return (b.className = "medium-editor-toolbar-form", b.id = "medium-editor-toolbar-form-anchor-" + this.base.id, b.innerHTML = this.getTemplate(), this.attachFormEvents(b), b);
            }, getInput: function getInput() {
                return this.getForm().querySelector("input.medium-editor-toolbar-input");
            }, handleTextboxKeyup: function handleTextboxKeyup(a) {
                return a.keyCode === b.keyCode.ENTER ? (a.preventDefault(), void this.doFormSave()) : void (a.keyCode === b.keyCode.ESCAPE && (a.preventDefault(), this.doFormCancel()));
            }, handleFormClick: function handleFormClick(a) {
                a.stopPropagation();
            }, handleSaveClick: function handleSaveClick(a) {
                a.preventDefault(), this.doFormSave();
            }, handleCloseClick: function handleCloseClick(a) {
                a.preventDefault(), this.doFormCancel();
            } }, j = b.derives(h, a);
    })();var k;!(function () {
        k = function () {
            this.parent = !0, this.name = "anchor-preview";
        }, k.prototype = { previewValueSelector: "a", init: function init(a) {
                this.base = a, this.anchorPreview = this.createPreview(), this.base.options.elementsContainer.appendChild(this.anchorPreview), this.attachToEditables();
            }, getPreviewElement: function getPreviewElement() {
                return this.anchorPreview;
            }, createPreview: function createPreview() {
                var a = this.base.options.ownerDocument.createElement("div");return (a.id = "medium-editor-anchor-preview-" + this.base.id, a.className = "medium-editor-anchor-preview", a.innerHTML = this.getTemplate(), this.base.on(a, "click", this.handleClick.bind(this)), a);
            }, getTemplate: function getTemplate() {
                return "<div class=\"medium-editor-toolbar-anchor-preview\" id=\"medium-editor-toolbar-anchor-preview\">    <a class=\"medium-editor-toolbar-anchor-preview-inner\"></a></div>";
            }, deactivate: function deactivate() {
                this.anchorPreview && (this.anchorPreview.parentNode && this.anchorPreview.parentNode.removeChild(this.anchorPreview), delete this.anchorPreview);
            }, hidePreview: function hidePreview() {
                this.anchorPreview.classList.remove("medium-editor-anchor-preview-active"), this.activeAnchor = null;
            }, showPreview: function showPreview(a) {
                return this.anchorPreview.classList.contains("medium-editor-anchor-preview-active") || a.getAttribute("data-disable-preview") ? !0 : (this.previewValueSelector && (this.anchorPreview.querySelector(this.previewValueSelector).textContent = a.attributes.href.value, this.anchorPreview.querySelector(this.previewValueSelector).href = a.attributes.href.value), this.anchorPreview.classList.add("medium-toolbar-arrow-over"), this.anchorPreview.classList.remove("medium-toolbar-arrow-under"), this.anchorPreview.classList.contains("medium-editor-anchor-preview-active") || this.anchorPreview.classList.add("medium-editor-anchor-preview-active"), this.activeAnchor = a, this.positionPreview(), this.attachPreviewHandlers(), this);
            }, positionPreview: function positionPreview() {
                var a,
                    b,
                    c = this.anchorPreview.offsetHeight,
                    d = this.activeAnchor.getBoundingClientRect(),
                    e = (d.left + d.right) / 2;a = this.anchorPreview.offsetWidth / 2, b = this.base.options.diffLeft - a, this.anchorPreview.style.top = Math.round(c + d.bottom - this.base.options.diffTop + this.base.options.contentWindow.pageYOffset - this.anchorPreview.offsetHeight) + "px", a > e ? this.anchorPreview.style.left = b + a + "px" : this.base.options.contentWindow.innerWidth - e < a ? this.anchorPreview.style.left = this.base.options.contentWindow.innerWidth + b - a + "px" : this.anchorPreview.style.left = b + e + "px";
            }, attachToEditables: function attachToEditables() {
                this.base.subscribe("editableMouseover", this.handleEditableMouseover.bind(this));
            }, handleClick: function handleClick(a) {
                var b = this.base.getExtensionByName("anchor"),
                    c = this.activeAnchor;b && c && (a.preventDefault(), this.base.selectElement(this.activeAnchor), this.base.delay((function () {
                    c && (b.showForm(c.attributes.href.value), c = null);
                }).bind(this))), this.hidePreview();
            }, handleAnchorMouseout: function handleAnchorMouseout() {
                this.anchorToPreview = null, this.base.off(this.activeAnchor, "mouseout", this.instanceHandleAnchorMouseout), this.instanceHandleAnchorMouseout = null;
            }, handleEditableMouseover: function handleEditableMouseover(a) {
                var c = b.getClosestTag(a.target, "a");if (c) {
                    if (!/href=["']\S+["']/.test(c.outerHTML) || /href=["']#\S+["']/.test(c.outerHTML)) return !0;if (this.base.toolbar && this.base.toolbar.isDisplayed()) return !0;this.activeAnchor && this.activeAnchor !== c && this.detachPreviewHandlers(), this.anchorToPreview = c, this.instanceHandleAnchorMouseout = this.handleAnchorMouseout.bind(this), this.base.on(this.anchorToPreview, "mouseout", this.instanceHandleAnchorMouseout), this.base.delay((function () {
                        this.anchorToPreview && this.showPreview(this.anchorToPreview);
                    }).bind(this));
                }
            }, handlePreviewMouseover: function handlePreviewMouseover() {
                this.lastOver = new Date().getTime(), this.hovering = !0;
            }, handlePreviewMouseout: function handlePreviewMouseout(a) {
                a.relatedTarget && /anchor-preview/.test(a.relatedTarget.className) || (this.hovering = !1);
            }, updatePreview: function updatePreview() {
                if (this.hovering) return !0;var a = new Date().getTime() - this.lastOver;a > this.base.options.anchorPreviewHideDelay && this.detachPreviewHandlers();
            }, detachPreviewHandlers: function detachPreviewHandlers() {
                clearInterval(this.intervalTimer), this.instanceHandlePreviewMouseover && (this.base.off(this.anchorPreview, "mouseover", this.instanceHandlePreviewMouseover), this.base.off(this.anchorPreview, "mouseout", this.instanceHandlePreviewMouseout), this.activeAnchor && (this.base.off(this.activeAnchor, "mouseover", this.instanceHandlePreviewMouseover), this.base.off(this.activeAnchor, "mouseout", this.instanceHandlePreviewMouseout))), this.hidePreview(), this.hovering = this.instanceHandlePreviewMouseover = this.instanceHandlePreviewMouseout = null;
            }, attachPreviewHandlers: function attachPreviewHandlers() {
                this.lastOver = new Date().getTime(), this.hovering = !0, this.instanceHandlePreviewMouseover = this.handlePreviewMouseover.bind(this), this.instanceHandlePreviewMouseout = this.handlePreviewMouseout.bind(this), this.intervalTimer = setInterval(this.updatePreview.bind(this), 200), this.base.on(this.anchorPreview, "mouseover", this.instanceHandlePreviewMouseover), this.base.on(this.anchorPreview, "mouseout", this.instanceHandlePreviewMouseout), this.base.on(this.activeAnchor, "mouseover", this.instanceHandlePreviewMouseover), this.base.on(this.activeAnchor, "mouseout", this.instanceHandlePreviewMouseout);
            } };
    })();var l;!(function () {
        function a() {
            this.parent = !0, this.options = { name: "fontsize", action: "fontSize", aria: "increase/decrease font size", contentDefault: "&#xB1;", contentFA: "<i class=\"fa fa-text-height\"></i>" }, this.name = "fontsize", this.hasForm = !0;
        }a.prototype = { handleClick: function handleClick(a) {
                if ((a.preventDefault(), a.stopPropagation(), !this.isDisplayed())) {
                    var b = this.base.options.ownerDocument.queryCommandValue("fontSize") + "";this.showForm(b);
                }return !1;
            }, getForm: function getForm() {
                return (this.form || (this.form = this.createForm()), this.form);
            }, isDisplayed: function isDisplayed() {
                return "block" === this.getForm().style.display;
            }, hideForm: function hideForm() {
                this.getForm().style.display = "none", this.getInput().value = "";
            }, showForm: function showForm(a) {
                var b = this.getInput();this.base.saveSelection(), this.base.hideToolbarDefaultActions(), this.getForm().style.display = "block", this.base.setToolbarPosition(), b.value = a || "", b.focus();
            }, deactivate: function deactivate() {
                return this.form ? (this.form.parentNode && this.form.parentNode.removeChild(this.form), void delete this.form) : !1;
            }, doFormSave: function doFormSave() {
                this.base.restoreSelection(), this.base.checkSelection();
            }, doFormCancel: function doFormCancel() {
                this.base.restoreSelection(), this.clearFontSize(), this.base.checkSelection();
            }, createForm: function createForm() {
                var a = this.base.options.ownerDocument,
                    b = a.createElement("div"),
                    c = a.createElement("input"),
                    d = a.createElement("a"),
                    e = a.createElement("a");return (b.className = "medium-editor-toolbar-form", b.id = "medium-editor-toolbar-form-fontsize-" + this.base.id, this.base.on(b, "click", this.handleFormClick.bind(this)), c.setAttribute("type", "range"), c.setAttribute("min", "1"), c.setAttribute("max", "7"), c.className = "medium-editor-toolbar-input", b.appendChild(c), this.base.on(c, "change", this.handleSliderChange.bind(this)), e.setAttribute("href", "#"), e.className = "medium-editor-toobar-save", e.innerHTML = "fontawesome" === this.base.options.buttonLabels ? "<i class=\"fa fa-check\"></i>" : "&#10003;", b.appendChild(e), this.base.on(e, "click", this.handleSaveClick.bind(this), !0), d.setAttribute("href", "#"), d.className = "medium-editor-toobar-close", d.innerHTML = "fontawesome" === this.base.options.buttonLabels ? "<i class=\"fa fa-times\"></i>" : "&times;", b.appendChild(d), this.base.on(d, "click", this.handleCloseClick.bind(this)), b);
            }, getInput: function getInput() {
                return this.getForm().querySelector("input.medium-editor-toolbar-input");
            }, clearFontSize: function clearFontSize() {
                f.getSelectedElements(this.base.options.ownerDocument).forEach(function (a) {
                    "FONT" === a.tagName && a.hasAttribute("size") && a.removeAttribute("size");
                });
            }, handleSliderChange: function handleSliderChange() {
                var a = this.getInput().value;"4" === a ? this.clearFontSize() : this.base.execAction("fontSize", { size: a });
            }, handleFormClick: function handleFormClick(a) {
                a.stopPropagation();
            }, handleSaveClick: function handleSaveClick(a) {
                a.preventDefault(), this.doFormSave();
            }, handleCloseClick: function handleCloseClick(a) {
                a.preventDefault(), this.doFormCancel();
            } }, l = b.derives(h, a);
    })();var m;!(function () {
        m = function (a) {
            this.base = a, this.options = a.options, this.initThrottledMethods();
        }, m.prototype = { createToolbar: function createToolbar() {
                var a = this.base.options.ownerDocument.createElement("div");return (a.id = "medium-editor-toolbar-" + this.base.id, a.className = "medium-editor-toolbar", this.options.staticToolbar ? a.className += " static-toolbar" : a.className += " stalker-toolbar", a.appendChild(this.createToolbarButtons()), this.base.commands.forEach(function (b) {
                    b.hasForm && a.appendChild(b.getForm());
                }), this.attachEventHandlers(), a);
            }, createToolbarButtons: function createToolbarButtons() {
                var a,
                    c,
                    d,
                    e,
                    f = this.base.options.ownerDocument.createElement("ul");return (f.id = "medium-editor-toolbar-actions" + this.base.id, f.className = "medium-editor-toolbar-actions clearfix", f.style.display = "block", this.base.options.buttons.forEach((function (d) {
                    e = this.base.getExtensionByName(d), "function" == typeof e.getButton && (c = e.getButton(this.base), a = this.base.options.ownerDocument.createElement("li"), b.isElement(c) ? a.appendChild(c) : a.innerHTML = c, f.appendChild(a));
                }).bind(this)), d = f.querySelectorAll("button"), d.length > 0 && (d[0].classList.add(this.options.firstButtonClass), d[d.length - 1].classList.add(this.options.lastButtonClass)), f);
            }, deactivate: function deactivate() {
                this.toolbar && (this.toolbar.parentNode && this.toolbar.parentNode.removeChild(this.toolbar), delete this.toolbar);
            }, getToolbarElement: function getToolbarElement() {
                return (this.toolbar || (this.toolbar = this.createToolbar()), this.toolbar);
            }, getToolbarActionsElement: function getToolbarActionsElement() {
                return this.getToolbarElement().querySelector(".medium-editor-toolbar-actions");
            }, initThrottledMethods: function initThrottledMethods() {
                this.throttledPositionToolbar = b.throttle((function () {
                    this.base.isActive && this.positionToolbarIfShown();
                }).bind(this));
            }, attachEventHandlers: function attachEventHandlers() {
                this.base.subscribe("blur", this.handleBlur.bind(this)), this.base.subscribe("focus", this.handleFocus.bind(this)), this.base.subscribe("editableClick", this.handleEditableClick.bind(this)), this.base.subscribe("editableKeyup", this.handleEditableKeyup.bind(this)), this.base.on(this.options.ownerDocument.documentElement, "mouseup", this.handleDocumentMouseup.bind(this)), this.options.staticToolbar && this.options.stickyToolbar && this.base.on(this.options.contentWindow, "scroll", this.handleWindowScroll.bind(this), !0), this.base.on(this.options.contentWindow, "resize", this.handleWindowResize.bind(this));
            }, handleWindowScroll: function handleWindowScroll() {
                this.positionToolbarIfShown();
            }, handleWindowResize: function handleWindowResize() {
                this.throttledPositionToolbar();
            }, handleDocumentMouseup: function handleDocumentMouseup(a) {
                return a && a.target && b.isDescendant(this.getToolbarElement(), a.target) ? !1 : void this.checkState();
            }, handleEditableClick: function handleEditableClick() {
                setTimeout((function () {
                    this.checkState();
                }).bind(this), 0);
            }, handleEditableKeyup: function handleEditableKeyup() {
                this.checkState();
            }, handleBlur: function handleBlur() {
                clearTimeout(this.hideTimeout), clearTimeout(this.delayShowTimeout), this.hideTimeout = setTimeout((function () {
                    this.hideToolbar();
                }).bind(this), 1);
            }, handleFocus: function handleFocus() {
                this.checkState();
            }, isDisplayed: function isDisplayed() {
                return this.getToolbarElement().classList.contains("medium-editor-toolbar-active");
            }, showToolbar: function showToolbar() {
                clearTimeout(this.hideTimeout), this.isDisplayed() || (this.getToolbarElement().classList.add("medium-editor-toolbar-active"), "function" == typeof this.options.onShowToolbar && this.options.onShowToolbar());
            }, hideToolbar: function hideToolbar() {
                this.isDisplayed() && (this.base.commands.forEach(function (a) {
                    "function" == typeof a.onHide && a.onHide();
                }), this.getToolbarElement().classList.remove("medium-editor-toolbar-active"), "function" == typeof this.options.onHideToolbar && this.options.onHideToolbar());
            }, isToolbarDefaultActionsDisplayed: function isToolbarDefaultActionsDisplayed() {
                return "block" === this.getToolbarActionsElement().style.display;
            }, hideToolbarDefaultActions: function hideToolbarDefaultActions() {
                this.isToolbarDefaultActionsDisplayed() && (this.getToolbarActionsElement().style.display = "none");
            }, showToolbarDefaultActions: function showToolbarDefaultActions() {
                this.hideExtensionForms(), this.isToolbarDefaultActionsDisplayed() || (this.getToolbarActionsElement().style.display = "block"), this.delayShowTimeout = this.base.delay((function () {
                    this.showToolbar();
                }).bind(this));
            }, hideExtensionForms: function hideExtensionForms() {
                this.base.commands.forEach(function (a) {
                    a.hasForm && a.isDisplayed() && a.hideForm();
                });
            }, multipleBlockElementsSelected: function multipleBlockElementsSelected() {
                var a = f.getSelectionHtml.call(this).replace(/<[\S]+><\/[\S]+>/gim, ""),
                    b = a.match(/<(p|h[1-6]|blockquote)[^>]*>/g);return !!b && b.length > 1;
            }, modifySelection: function modifySelection() {
                var a = this.options.contentWindow.getSelection(),
                    c = a.getRangeAt(0);if (this.options.standardizeSelectionStart && c.startContainer.nodeValue && c.startOffset === c.startContainer.nodeValue.length) {
                    var d = b.findAdjacentTextNodeWithContent(f.getSelectionElement(this.options.contentWindow), c.startContainer, this.options.ownerDocument);if (d) {
                        for (var e = 0; 0 === d.nodeValue.substr(e, 1).trim().length;) e += 1;var g = this.options.ownerDocument.createRange();g.setStart(d, e), g.setEnd(c.endContainer, c.endOffset), a.removeAllRanges(), a.addRange(g), c = g;
                    }
                }
            }, checkState: function checkState() {
                if (!this.base.preventSelectionUpdates) {
                    if (!this.getFocusedElement() || f.selectionInContentEditableFalse(this.options.contentWindow)) return void this.hideToolbar();var a = f.getSelectionElement(this.options.contentWindow);if (!a || -1 === this.base.elements.indexOf(a) || a.getAttribute("data-disable-toolbar")) return void this.hideToolbar();if (this.options.updateOnEmptySelection && this.options.staticToolbar) return void this.showAndUpdateToolbar();"" === this.options.contentWindow.getSelection().toString().trim() || this.options.allowMultiParagraphSelection === !1 && this.multipleBlockElementsSelected() ? this.hideToolbar() : this.showAndUpdateToolbar();
                }
            }, getFocusedElement: function getFocusedElement() {
                for (var a = 0; a < this.base.elements.length; a += 1) if (this.base.elements[a].getAttribute("data-medium-focused")) return this.base.elements[a];return null;
            }, showAndUpdateToolbar: function showAndUpdateToolbar() {
                this.modifySelection(), this.setToolbarButtonStates(), this.showToolbarDefaultActions(), this.setToolbarPosition();
            }, setToolbarButtonStates: function setToolbarButtonStates() {
                this.base.commands.forEach((function (a) {
                    "function" == typeof a.isActive && "function" == typeof a.setInactive && a.setInactive();
                }).bind(this)), this.checkActiveButtons();
            }, checkActiveButtons: function checkActiveButtons() {
                var a,
                    c = [],
                    d = null,
                    e = b.getSelectionRange(this.options.ownerDocument),
                    g = function g(b) {
                    "function" == typeof b.checkState ? b.checkState(a) : "function" == typeof b.isActive && "function" == typeof b.isAlreadyApplied && "function" == typeof b.setActive && !b.isActive() && b.isAlreadyApplied(a) && b.setActive();
                };if (e) for (a = f.getSelectedParentElement(e), this.base.commands.forEach(function (a) {
                    return "function" == typeof a.queryCommandState && (d = a.queryCommandState(), null !== d) ? void (d && "function" == typeof a.setActive && a.setActive()) : void c.push(a);
                }); void 0 !== a.tagName && -1 === b.parentElements.indexOf(a.tagName.toLowerCase) && (c.forEach(g), -1 === this.base.elements.indexOf(a));) a = a.parentNode;
            }, positionToolbarIfShown: function positionToolbarIfShown() {
                this.isDisplayed() && this.setToolbarPosition();
            }, setToolbarPosition: function setToolbarPosition() {
                var a,
                    b = this.getFocusedElement(),
                    c = this.options.contentWindow.getSelection();return b ? (this.options.staticToolbar ? (this.showToolbar(), this.positionStaticToolbar(b)) : c.isCollapsed || (this.showToolbar(), this.positionToolbar(c)), a = this.base.getExtensionByName("anchor-preview"), void (a && "function" == typeof a.hidePreview && a.hidePreview())) : this;
            }, positionStaticToolbar: function positionStaticToolbar(a) {
                this.getToolbarElement().style.left = "0";var b,
                    c = this.options.ownerDocument.documentElement && this.options.ownerDocument.documentElement.scrollTop || this.options.ownerDocument.body.scrollTop,
                    d = this.options.contentWindow.innerWidth,
                    e = this.getToolbarElement(),
                    f = a.getBoundingClientRect(),
                    g = f.top + c,
                    h = f.left + f.width / 2,
                    i = e.offsetHeight,
                    j = e.offsetWidth,
                    k = j / 2;this.options.stickyToolbar ? c > g + a.offsetHeight - i ? (e.style.top = g + a.offsetHeight - i + "px", e.classList.remove("sticky-toolbar")) : c > g - i ? (e.classList.add("sticky-toolbar"), e.style.top = "0px") : (e.classList.remove("sticky-toolbar"), e.style.top = g - i + "px") : e.style.top = g - i + "px", "left" === this.options.toolbarAlign ? b = f.left : "center" === this.options.toolbarAlign ? b = h - k : "right" === this.options.toolbarAlign && (b = f.right - j), 0 > b ? b = 0 : b + j > d && (b = d - Math.ceil(j) - 1), e.style.left = b + "px";
            }, positionToolbar: function positionToolbar(a) {
                this.getToolbarElement().style.left = "0";var b = this.options.contentWindow.innerWidth,
                    c = a.getRangeAt(0),
                    d = c.getBoundingClientRect(),
                    e = (d.left + d.right) / 2,
                    f = this.getToolbarElement(),
                    g = f.offsetHeight,
                    h = f.offsetWidth,
                    i = h / 2,
                    j = 50,
                    k = this.options.diffLeft - i;d.top < j ? (f.classList.add("medium-toolbar-arrow-over"), f.classList.remove("medium-toolbar-arrow-under"), f.style.top = j + d.bottom - this.options.diffTop + this.options.contentWindow.pageYOffset - g + "px") : (f.classList.add("medium-toolbar-arrow-under"), f.classList.remove("medium-toolbar-arrow-over"), f.style.top = d.top + this.options.diffTop + this.options.contentWindow.pageYOffset - g + "px"), i > e ? f.style.left = k + i + "px" : i > b - e ? f.style.left = b + k - i + "px" : f.style.left = k + e + "px";
            } };
    })();var n;!(function () {
        n = function (a) {
            this.base = a, this.initPlaceholders(), this.attachEventHandlers();
        }, n.prototype = { initPlaceholders: function initPlaceholders() {
                this.base.elements.forEach(function (a) {
                    this.updatePlaceholder(a);
                }, this);
            }, showPlaceholder: function showPlaceholder(a) {
                a && a.classList.add("medium-editor-placeholder");
            }, hidePlaceholder: function hidePlaceholder(a) {
                a && a.classList.remove("medium-editor-placeholder");
            }, updatePlaceholder: function updatePlaceholder(a) {
                a.querySelector("img") || a.querySelector("blockquote") || "" !== a.textContent.replace(/^\s+|\s+$/g, "") ? this.hidePlaceholder(a) : this.showPlaceholder(a);
            }, attachEventHandlers: function attachEventHandlers() {
                this.base.subscribe("blur", this.handleExternalInteraction.bind(this)), this.base.subscribe("editableBlur", this.handleBlur.bind(this)), this.base.subscribe("editableClick", this.handleHidePlaceholderEvent.bind(this)), this.base.subscribe("editableKeypress", this.handleHidePlaceholderEvent.bind(this)), this.base.subscribe("editablePaste", this.handleHidePlaceholderEvent.bind(this));
            }, handleHidePlaceholderEvent: function handleHidePlaceholderEvent(a, b) {
                this.hidePlaceholder(b);
            }, handleBlur: function handleBlur(a, b) {
                this.updatePlaceholder(b);
            }, handleExternalInteraction: function handleExternalInteraction() {
                this.initPlaceholders();
            } };
    })();var o;return ((function () {
        o = { paste: i };
    })(), (function () {
        function i(a, c) {
            if (this.options.disableReturn || c.getAttribute("data-disable-return")) a.preventDefault();else if (this.options.disableDoubleReturn || c.getAttribute("data-disable-double-return")) {
                var d = b.getSelectionStart(this.options.ownerDocument);d && "" === d.textContent.trim() && a.preventDefault();
            }
        }function p(a) {
            var c = b.getSelectionStart(this.options.ownerDocument),
                d = c && c.tagName.toLowerCase();"pre" === d && (a.preventDefault(), b.insertHTMLCommand(this.options.ownerDocument, "    ")), b.isListItem(c) && (a.preventDefault(), a.shiftKey ? this.options.ownerDocument.execCommand("outdent", !1, null) : this.options.ownerDocument.execCommand("indent", !1, null));
        }function q(a) {
            var c,
                d,
                e,
                g = b.getSelectionStart(this.options.ownerDocument),
                h = g.tagName.toLowerCase(),
                i = /^(\s+|<br\/?>)?$/i,
                j = /h\d/i;(a.which === b.keyCode.BACKSPACE || a.which === b.keyCode.ENTER) && g.previousElementSibling && j.test(h) && 0 === f.getCaretOffsets(g).left ? a.which === b.keyCode.BACKSPACE && i.test(g.previousElementSibling.innerHTML) ? (g.previousElementSibling.parentNode.removeChild(g.previousElementSibling), a.preventDefault()) : a.which === b.keyCode.ENTER && (e = this.options.ownerDocument.createElement("p"), e.innerHTML = "<br>", g.previousElementSibling.parentNode.insertBefore(e, g), a.preventDefault()) : a.which === b.keyCode.DELETE && g.nextElementSibling && g.previousElementSibling && !j.test(h) && i.test(g.innerHTML) && j.test(g.nextElementSibling.tagName) ? (c = this.options.ownerDocument.createRange(), d = this.options.ownerDocument.getSelection(), c.setStart(g.nextElementSibling, 0), c.collapse(!0), d.removeAllRanges(), d.addRange(c), g.previousElementSibling.parentNode.removeChild(g), a.preventDefault()) : a.which !== b.keyCode.BACKSPACE || "li" !== h || !i.test(g.innerHTML) || g.previousElementSibling || g.parentElement.previousElementSibling || "li" !== g.nextElementSibling.tagName.toLowerCase() || (e = this.options.ownerDocument.createElement("p"), e.innerHTML = "<br>", g.parentElement.parentElement.insertBefore(e, g.parentElement), c = this.options.ownerDocument.createRange(), d = this.options.ownerDocument.getSelection(), c.setStart(e, 0), c.collapse(!0), d.removeAllRanges(), d.addRange(c), g.parentElement.removeChild(g), a.preventDefault());
        }function r(a) {
            var b = "medium-editor-dragover";a.preventDefault(), a.dataTransfer.dropEffect = "copy", "dragover" === a.type ? a.target.classList.add(b) : "dragleave" === a.type && a.target.classList.remove(b);
        }function s(a) {
            var c,
                d = "medium-editor-dragover";a.preventDefault(), a.stopPropagation(), a.dataTransfer.files && (c = Array.prototype.slice.call(a.dataTransfer.files, 0), c.some((function (a) {
                if (a.type.match("image")) {
                    var c, d;c = new FileReader(), c.readAsDataURL(a), d = "medium-img-" + +new Date(), b.insertHTMLCommand(this.options.ownerDocument, "<img class=\"medium-image-loading\" id=\"" + d + "\" />"), c.onload = (function () {
                        var a = this.options.ownerDocument.getElementById(d);a && (a.removeAttribute("id"), a.removeAttribute("class"), a.src = c.result);
                    }).bind(this);
                }
            }).bind(this))), a.target.classList.remove(d);
        }function t(a) {
            var c,
                d = b.getSelectionStart(this.options.ownerDocument);d && (d.getAttribute("data-medium-element") && 0 === d.children.length && this.options.ownerDocument.execCommand("formatBlock", !1, "p"), a.which !== b.keyCode.ENTER || b.isListItem(d) || (c = d.tagName.toLowerCase(), "a" === c ? this.options.ownerDocument.execCommand("unlink", !1, null) : a.shiftKey || /h\d/.test(c) || this.options.ownerDocument.execCommand("formatBlock", !1, "p")));
        }function u(a) {
            a || (a = []), "string" == typeof a && (a = this.options.ownerDocument.querySelectorAll(a)), b.isElement(a) && (a = [a]);var c = Array.prototype.slice.apply(a);this.elements = [], c.forEach(function (a) {
                this.elements.push("textarea" === a.tagName.toLowerCase() ? x.call(this, a) : a);
            }, this);
        }function v(a, b, c) {
            return (a.parent && (a.base = c), "function" == typeof a.init && a.init(c), a.name || (a.name = b), a);
        }function w() {
            var a,
                b = !1;if (this.options.disableAnchorPreview) return !1;if (this.options.extensions["anchor-preview"]) return !1;if (this.options.disableToolbar) return !1;for (a = 0; a < this.elements.length; a += 1) if (!this.elements[a].getAttribute("data-disable-toolbar")) {
                b = !0;break;
            }return b;
        }function x(a) {
            var b = this.options.ownerDocument.createElement("div"),
                c = +new Date(),
                d = ["data-disable-editing", "data-disable-toolbar", "data-placeholder", "data-disable-return", "data-disable-double-return", "data-disable-preview", "spellcheck"];return (b.className = a.className, b.id = c, b.innerHTML = a.value, b.setAttribute("medium-editor-textarea-id", c), d.forEach(function (c) {
                a.hasAttribute(c) && b.setAttribute(c, a.getAttribute(c));
            }), a.classList.add("medium-editor-hidden"), a.setAttribute("medium-editor-textarea-id", c), a.parentNode.insertBefore(b, a), b);
        }function y() {
            this.elements.forEach(function (a) {
                this.options.disableEditing || a.getAttribute("data-disable-editing") || (a.setAttribute("contentEditable", !0), a.setAttribute("spellcheck", this.options.spellcheck)), a.getAttribute("data-placeholder") || a.setAttribute("data-placeholder", this.options.placeholder), a.setAttribute("data-medium-element", !0), a.setAttribute("role", "textbox"), a.setAttribute("aria-multiline", !0), a.hasAttribute("medium-editor-textarea-id") && this.on(a, "input", (function (a) {
                    var b = a.target,
                        c = b.parentNode.querySelector("textarea[medium-editor-textarea-id=\"" + b.getAttribute("medium-editor-textarea-id") + "\"]");c && (c.value = this.serialize()[b.id].value);
                }).bind(this));
            }, this);
        }function z() {
            if (this.toolbar || this.options.disableToolbar) return !1;var a = this.elements.some(function (a) {
                return !a.getAttribute("data-disable-toolbar");
            });a && (this.toolbar = new m(this), this.options.elementsContainer.appendChild(this.toolbar.getToolbarElement()));
        }function A() {
            var a;if ((this.subscribe("editableKeydownTab", p.bind(this)), this.subscribe("editableKeydownDelete", q.bind(this)), this.subscribe("editableKeydownEnter", q.bind(this)), this.options.disableReturn || this.options.disableDoubleReturn)) this.subscribe("editableKeydownEnter", i.bind(this));else for (a = 0; a < this.elements.length; a += 1) if (this.elements[a].getAttribute("data-disable-return") || this.elements[a].getAttribute("data-disable-double-return")) {
                this.subscribe("editableKeydownEnter", i.bind(this));break;
            }this.options.disableReturn || this.elements.forEach(function (a) {
                a.getAttribute("data-disable-return") || this.on(a, "keyup", t.bind(this));
            }, this), this.options.imageDragging && (this.subscribe("editableDrag", r.bind(this)), this.subscribe("editableDrop", s.bind(this)));
        }function B(c) {
            var d = { forcePlainText: this.options.forcePlainText, cleanPastedHTML: this.options.cleanPastedHTML, disableReturn: this.options.disableReturn, targetBlank: this.options.targetBlank, window: this.options.contentWindow, document: this.options.ownerDocument };return new a.extensions.paste(b.extend({}, c, d));
        }function C() {
            var a,
                b,
                d = this.options.buttons,
                e = this.options.extensions;this.commands = [], d.forEach(function (b) {
                e[b] ? (a = v(e[b], b, this), this.commands.push(a)) : "anchor" === b ? (a = v(new j(), b, this), this.commands.push(a)) : "fontsize" === b ? (a = v(new l(), b, this), this.commands.push(a)) : c.hasOwnProperty(b) && (a = new h(c[b], this), this.commands.push(a));
            }, this);for (b in e) e.hasOwnProperty(b) && -1 === d.indexOf(b) && (a = v(e[b], b, this), this.commands.push(a));this.options.extensions.paste || this.commands.push(v(B.call(this, this.options.paste), "paste", this)), w.call(this) && this.commands.push(v(new k(), "anchor-preview", this));
        }function D(a, c) {
            c && [["forcePlainText", "paste.forcePlainText"], ["cleanPastedHTML", "paste.cleanPastedHTML"]].forEach(function (a) {
                c.hasOwnProperty(a[0]) && void 0 !== c[a[0]] && b.deprecated(a[0], a[1], "v5.0.0");
            });var d = ["paste"],
                e = b.extend({}, c);return (d.forEach(function (c) {
                e[c] ? e[c] = b.defaults({}, e[c], a[c]) : e[c] = a[c];
            }), b.defaults(e, a));
        }function E(a, c) {
            var d,
                e = /^append-(.+)$/gi;return (d = e.exec(a), d ? b.execFormatBlock(this.options.ownerDocument, d[1]) : "fontSize" === a ? this.options.ownerDocument.execCommand("fontSize", !1, c.size) : "createLink" === a ? this.createLink(c) : "image" === a ? this.options.ownerDocument.execCommand("insertImage", !1, this.options.contentWindow.getSelection()) : this.options.ownerDocument.execCommand(a, !1, null));
        }a.statics = { ButtonsData: c, DefaultButton: h, AnchorExtension: j, FontSizeExtension: l, Toolbar: m, AnchorPreview: k }, a.Extension = e, a.extensions = o, a.util = b, a.selection = f, a.prototype = { defaults: d, init: function init(a, b) {
                var c = 1;if ((this.options = D.call(this, this.defaults, b), u.call(this, a), 0 !== this.elements.length)) {
                    for (this.options.elementsContainer || (this.options.elementsContainer = this.options.ownerDocument.body); this.options.elementsContainer.querySelector("#medium-editor-toolbar-" + c);) c += 1;return (this.id = c, this.setup());
                }
            }, setup: function setup() {
                this.isActive || (this.events = new g(this), this.isActive = !0, y.call(this), C.call(this), z.call(this), A.call(this), this.options.disablePlaceholders || (this.placeholders = new n(this)));
            }, destroy: function destroy() {
                if (this.isActive) {
                    var a;for (this.isActive = !1, void 0 !== this.toolbar && (this.toolbar.deactivate(), delete this.toolbar), a = 0; a < this.elements.length; a += 1) this.elements[a].removeAttribute("contentEditable"), this.elements[a].removeAttribute("spellcheck"), this.elements[a].removeAttribute("data-medium-element");this.commands.forEach(function (a) {
                        "function" == typeof a.deactivate && a.deactivate();
                    }, this), this.events.detachAllDOMEvents(), this.events.detachAllCustomEvents();
                }
            }, on: function on(a, b, c, d) {
                this.events.attachDOMEvent(a, b, c, d);
            }, off: function off(a, b, c, d) {
                this.events.detachDOMEvent(a, b, c, d);
            }, subscribe: function subscribe(a, b) {
                this.events.attachCustomEvent(a, b);
            }, unsubscribe: function unsubscribe(a, b) {
                this.events.detachCustomEvent(a, b);
            }, delay: function delay(a) {
                var b = this;return setTimeout(function () {
                    b.isActive && a();
                }, this.options.delay);
            }, serialize: function serialize() {
                var a,
                    b,
                    c = {};for (a = 0; a < this.elements.length; a += 1) b = "" !== this.elements[a].id ? this.elements[a].id : "element-" + a, c[b] = { value: this.elements[a].innerHTML.trim() };return c;
            }, getExtensionByName: function getExtensionByName(a) {
                var b;return (this.commands && this.commands.length && this.commands.some(function (c) {
                    return c.name === a ? (b = c, !0) : !1;
                }), b);
            }, callExtensions: function callExtensions(a) {
                if (!(arguments.length < 1)) {
                    var b,
                        c,
                        d = Array.prototype.slice.call(arguments, 1);for (c in this.options.extensions) this.options.extensions.hasOwnProperty(c) && (b = this.options.extensions[c], void 0 !== b[a] && b[a].apply(b, d));return this;
                }
            }, stopSelectionUpdates: function stopSelectionUpdates() {
                this.preventSelectionUpdates = !0;
            }, startSelectionUpdates: function startSelectionUpdates() {
                this.preventSelectionUpdates = !1;
            }, checkSelection: function checkSelection() {
                return (this.toolbar && this.toolbar.checkState(), this);
            }, queryCommandState: function queryCommandState(a) {
                var b,
                    c = /^full-(.+)$/gi,
                    d = null;b = c.exec(a), b && (a = b[1]);try {
                    d = this.options.ownerDocument.queryCommandState(a);
                } catch (e) {
                    d = null;
                }return d;
            }, execAction: function execAction(a, c) {
                var d,
                    e,
                    f = /^full-(.+)$/gi;return (d = f.exec(a), d ? (this.saveSelection(), this.selectAllContents(), e = E.call(this, d[1], c), this.restoreSelection()) : e = E.call(this, a, c), ("insertunorderedlist" === a || "insertorderedlist" === a) && b.cleanListDOM(this.getSelectedParentElement()), this.checkSelection(), e);
            }, getSelectedParentElement: function getSelectedParentElement(a) {
                return (void 0 === a && (a = this.options.contentWindow.getSelection().getRangeAt(0)), f.getSelectedParentElement(a));
            }, hideToolbarDefaultActions: function hideToolbarDefaultActions() {
                return (this.toolbar && this.toolbar.hideToolbarDefaultActions(), this);
            }, setToolbarPosition: function setToolbarPosition() {
                this.toolbar && this.toolbar.setToolbarPosition();
            }, selectAllContents: function selectAllContents() {
                var a = f.getSelectionElement(this.options.contentWindow);if (a) {
                    for (; 1 === a.children.length;) a = a.children[0];this.selectElement(a);
                }
            }, selectElement: function selectElement(a) {
                f.selectNode(a, this.options.ownerDocument);var b = f.getSelectionElement(this.options.contentWindow);b && this.events.focusElement(b);
            }, exportSelection: function exportSelection() {
                var a,
                    c,
                    d,
                    e = null,
                    f = this.options.contentWindow.getSelection(),
                    g = -1;return (f.rangeCount > 0 && (a = f.getRangeAt(0), c = a.cloneRange(), this.elements.some(function (c, d) {
                    return c === a.startContainer || b.isDescendant(c, a.startContainer) ? (g = d, !0) : !1;
                }), g > -1 && (c.selectNodeContents(this.elements[g]), c.setEnd(a.startContainer, a.startOffset), d = c.toString().length, e = { start: d, end: d + a.toString().length, editableElementIndex: g })), null !== e && 0 === e.editableElementIndex && delete e.editableElementIndex, e);
            }, saveSelection: function saveSelection() {
                this.selectionState = this.exportSelection();
            }, importSelection: function importSelection(a) {
                if (a) {
                    var b,
                        c,
                        d,
                        e,
                        f = void 0 === a.editableElementIndex ? 0 : a.editableElementIndex,
                        g = {
                        editableElementIndex: f, start: a.start, end: a.end },
                        h = this.elements[g.editableElementIndex],
                        i = 0,
                        j = this.options.ownerDocument.createRange(),
                        k = [h],
                        l = !1,
                        m = !1;for (j.setStart(h, 0), j.collapse(!0), b = k.pop(); !m && b;) {
                        if (3 === b.nodeType) e = i + b.length, !l && g.start >= i && g.start <= e && (j.setStart(b, g.start - i), l = !0), l && g.end >= i && g.end <= e && (j.setEnd(b, g.end - i), m = !0), i = e;else for (c = b.childNodes.length - 1; c >= 0;) k.push(b.childNodes[c]), c -= 1;m || (b = k.pop());
                    }d = this.options.contentWindow.getSelection(), d.removeAllRanges(), d.addRange(j);
                }
            }, restoreSelection: function restoreSelection() {
                this.importSelection(this.selectionState);
            }, createLink: function createLink(a) {
                var c, d;if ((a.url && a.url.trim().length > 0 && (this.options.ownerDocument.execCommand("createLink", !1, a.url), (this.options.targetBlank || "_blank" === a.target) && b.setTargetBlank(b.getSelectionStart(this.options.ownerDocument)), a.buttonClass && b.addClassToAnchors(b.getSelectionStart(this.options.ownerDocument), a.buttonClass)), this.options.targetBlank || "_blank" === a.target || a.buttonClass)) for (c = this.options.ownerDocument.createEvent("HTMLEvents"), c.initEvent("input", !0, !0, this.options.contentWindow), d = 0; d < this.elements.length; d += 1) this.elements[d].dispatchEvent(c);
            }, activate: function activate() {
                b.deprecatedMethod.call(this, "activate", "setup", arguments, "v5.0.0");
            }, deactivate: function deactivate() {
                b.deprecatedMethod.call(this, "deactivate", "destroy", arguments, "v5.0.0");
            }, cleanPaste: function cleanPaste(a) {
                this.getExtensionByName("paste").cleanPaste(a);
            }, pasteHTML: function pasteHTML(a, b) {
                this.getExtensionByName("paste").pasteHTML(a, b);
            } };
    })(), a.version = (function (a, b, c) {
        return { major: parseInt(a, 10), minor: parseInt(b, 10), revision: parseInt(c, 10), toString: function toString() {
                return [a, b, c].join(".");
            } };
    }).apply(this, ({ version: "4.7.3" }).version.split(".")), a);
})());
new MediumEditor(".compasshb-editor", {
    anchorInputPlaceholder: "Type a link",
    buttons: ["bold", "italic", "quote", "removeFormat"],
    diffLeft: 25,
    diffTop: 10,
    firstHeader: "h1",
    secondHeader: "h2",
    delay: 1000,
    targetBlank: true,
    paste: {
        cleanPastedHTML: true,
        cleanAttrs: ["style", "dir"],
        cleanTags: ["label", "meta"]
    }
});
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js");
}
//# sourceMappingURL=all.js.map