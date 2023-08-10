(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    'use strict';
    var r;

    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ca(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var fa = ca(this);

    function t(a, b) {
        if (b) a: {
            var c = fa;a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e]
            }
            a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    t("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.g = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.g
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    });
    t("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = fa[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ha(aa(this))
                }
            })
        }
        return a
    });

    function ha(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        };
        return a
    }

    function u(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        if (b) return b.call(a);
        if ("number" == typeof a.length) return {
            next: aa(a)
        };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    }

    function v(a) {
        if (!(a instanceof Array)) {
            a = u(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }

    function ia(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    var ja = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) ia(d, e) && (a[e] = d[e])
        }
        return a
    };
    t("Object.assign", function(a) {
        return a || ja
    });
    var ka = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        la;
    if ("function" == typeof Object.setPrototypeOf) la = Object.setPrototypeOf;
    else {
        var oa;
        a: {
            var pa = {
                    a: !0
                },
                qa = {};
            try {
                qa.__proto__ = pa;
                oa = qa.a;
                break a
            } catch (a) {}
            oa = !1
        }
        la = oa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ra = la;

    function w(a, b) {
        a.prototype = ka(b.prototype);
        a.prototype.constructor = a;
        if (ra) ra(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.ma = b.prototype
    }

    function sa() {
        this.H = !1;
        this.l = null;
        this.h = void 0;
        this.g = 1;
        this.u = this.s = 0;
        this.W = this.i = null
    }

    function ta(a) {
        if (a.H) throw new TypeError("Generator is already running");
        a.H = !0
    }
    sa.prototype.N = function(a) {
        this.h = a
    };

    function ua(a, b) {
        a.i = {
            ic: b,
            sc: !0
        };
        a.g = a.s || a.u
    }
    sa.prototype.return = function(a) {
        this.i = {
            return: a
        };
        this.g = this.u
    };

    function z(a, b, c) {
        a.g = c;
        return {
            value: b
        }
    }
    sa.prototype.B = function(a) {
        this.g = a
    };

    function va(a, b, c) {
        a.s = b;
        void 0 != c && (a.u = c)
    }

    function wa(a) {
        a.s = 0;
        var b = a.i.ic;
        a.i = null;
        return b
    }

    function xa(a) {
        var b = a.W.splice(0)[0];
        (b = a.i = a.i || b) ? b.sc ? a.g = a.s || a.u : void 0 != b.B && a.u < b.B ? (a.g = b.B, a.i = null) : a.g = a.u: a.g = 0
    }

    function ya(a) {
        this.g = new sa;
        this.h = a
    }

    function za(a, b) {
        ta(a.g);
        var c = a.g.l;
        if (c) return Aa(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.g.return);
        a.g.return(b);
        return Ba(a)
    }

    function Aa(a, b, c, d) {
        try {
            var e = b.call(a.g.l, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.g.H = !1, e;
            var f = e.value
        } catch (g) {
            return a.g.l = null, ua(a.g, g), Ba(a)
        }
        a.g.l = null;
        d.call(a.g, f);
        return Ba(a)
    }

    function Ba(a) {
        for (; a.g.g;) try {
            var b = a.h(a.g);
            if (b) return a.g.H = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.g.h = void 0, ua(a.g, c)
        }
        a.g.H = !1;
        if (a.g.i) {
            b = a.g.i;
            a.g.i = null;
            if (b.sc) throw b.ic;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }

    function Ca(a) {
        this.next = function(b) {
            ta(a.g);
            a.g.l ? b = Aa(a, a.g.l.next, b, a.g.N) : (a.g.N(b), b = Ba(a));
            return b
        };
        this.throw = function(b) {
            ta(a.g);
            a.g.l ? b = Aa(a, a.g.l["throw"], b, a.g.N) : (ua(a.g, b), b = Ba(a));
            return b
        };
        this.return = function(b) {
            return za(a, b)
        };
        this[Symbol.iterator] = function() {
            return this
        }
    }

    function Fa(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        return new Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        })
    }

    function A(a) {
        return Fa(new Ca(new ya(a)))
    }

    function Ga() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    }
    t("Reflect.setPrototypeOf", function(a) {
        return a ? a : ra ? function(b, c) {
            try {
                return ra(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    });
    t("Promise", function(a) {
        function b(g) {
            this.g = 0;
            this.i = void 0;
            this.h = [];
            this.H = !1;
            var h = this.l();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        }

        function c() {
            this.g = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(h) {
                h(g)
            })
        }
        if (a) return a;
        c.prototype.h = function(g) {
            if (null == this.g) {
                this.g = [];
                var h = this;
                this.i(function() {
                    h.s()
                })
            }
            this.g.push(g)
        };
        var e = fa.setTimeout;
        c.prototype.i = function(g) {
            e(g, 0)
        };
        c.prototype.s = function() {
            for (; this.g && this.g.length;) {
                var g = this.g;
                this.g = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.l(l)
                    }
                }
            }
            this.g = null
        };
        c.prototype.l = function(g) {
            this.i(function() {
                throw g;
            })
        };
        b.prototype.l = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.Ic),
                reject: g(this.s)
            }
        };
        b.prototype.Ic = function(g) {
            if (g === this) this.s(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.Lc(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.Jb(g) : this.u(g)
            }
        };
        b.prototype.Jb = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.s(k);
                return
            }
            "function" == typeof h ? this.Mc(h, g) : this.u(g)
        };
        b.prototype.s = function(g) {
            this.N(2, g)
        };
        b.prototype.u = function(g) {
            this.N(1, g)
        };
        b.prototype.N = function(g, h) {
            if (0 != this.g) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.g);
            this.g = g;
            this.i = h;
            2 === this.g && this.Kc();
            this.W()
        };
        b.prototype.Kc = function() {
            var g = this;
            e(function() {
                if (g.Pa()) {
                    var h = fa.console;
                    "undefined" !== typeof h && h.error(g.i)
                }
            }, 1)
        };
        b.prototype.Pa = function() {
            if (this.H) return !1;
            var g = fa.CustomEvent,
                h = fa.Event,
                k = fa.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = fa.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.i;
            return k(g)
        };
        b.prototype.W = function() {
            if (null != this.h) {
                for (var g = 0; g < this.h.length; ++g) f.h(this.h[g]);
                this.h = null
            }
        };
        var f = new c;
        b.prototype.Lc = function(g) {
            var h = this.l();
            g.tb(h.resolve, h.reject)
        };
        b.prototype.Mc = function(g, h) {
            var k = this.l();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        b.prototype.then = function(g, h) {
            function k(q, p) {
                return "function" == typeof q ? function(x) {
                    try {
                        l(q(x))
                    } catch (y) {
                        m(y)
                    }
                } : p
            }
            var l, m, n = new b(function(q, p) {
                l = q;
                m = p
            });
            this.tb(k(g, l), k(h, m));
            return n
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.tb = function(g, h) {
            function k() {
                switch (l.g) {
                    case 1:
                        g(l.i);
                        break;
                    case 2:
                        h(l.i);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.g);
                }
            }
            var l = this;
            null == this.h ? f.h(k) : this.h.push(k);
            this.H = !0
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(h, k) {
                k(g)
            })
        };
        b.race = function(g) {
            return new b(function(h, k) {
                for (var l = u(g), m = l.next(); !m.done; m = l.next()) d(m.value).tb(h, k)
            })
        };
        b.all = function(g) {
            var h = u(g),
                k = h.next();
            return k.done ? d([]) : new b(function(l, m) {
                function n(x) {
                    return function(y) {
                        q[x] = y;
                        p--;
                        0 == p && l(q)
                    }
                }
                var q = [],
                    p = 0;
                do q.push(void 0), p++, d(k.value).tb(n(q.length - 1), m), k = h.next(); while (!k.done)
            })
        };
        return b
    });
    t("WeakMap", function(a) {
        function b(k) {
            this.g = (h += Math.random() + 1).toString();
            if (k) {
                k = u(k);
                for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
            }
        }

        function c() {}

        function d(k) {
            var l = typeof k;
            return "object" === l && null !== k || "function" === l
        }

        function e(k) {
            if (!ia(k, g)) {
                var l = new c;
                ba(k, g, {
                    value: l
                })
            }
        }

        function f(k) {
            var l = Object[k];
            l && (Object[k] = function(m) {
                if (m instanceof c) return m;
                Object.isExtensible(m) && e(m);
                return l(m)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var k = Object.seal({}),
                        l = Object.seal({}),
                        m = new a([
                            [k, 2],
                            [l, 3]
                        ]);
                    if (2 != m.get(k) || 3 != m.get(l)) return !1;
                    m.delete(k);
                    m.set(l, 4);
                    return !m.has(k) && 4 == m.get(l)
                } catch (n) {
                    return !1
                }
            }()) return a;
        var g = "$jscomp_hidden_" + Math.random();
        f("freeze");
        f("preventExtensions");
        f("seal");
        var h = 0;
        b.prototype.set = function(k, l) {
            if (!d(k)) throw Error("Invalid WeakMap key");
            e(k);
            if (!ia(k, g)) throw Error("WeakMap key fail: " + k);
            k[g][this.g] = l;
            return this
        };
        b.prototype.get = function(k) {
            return d(k) && ia(k, g) ? k[g][this.g] : void 0
        };
        b.prototype.has = function(k) {
            return d(k) && ia(k, g) && ia(k[g], this.g)
        };
        b.prototype.delete = function(k) {
            return d(k) && ia(k, g) && ia(k[g], this.g) ? delete k[g][this.g] : !1
        };
        return b
    });
    t("Map", function(a) {
        function b() {
            var h = {};
            return h.previous = h.next = h.head = h
        }

        function c(h, k) {
            var l = h[1];
            return ha(function() {
                if (l) {
                    for (; l.head != h[1];) l = l.previous;
                    for (; l.next != l.head;) return l = l.next, {
                        done: !1,
                        value: k(l)
                    };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(h, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
            var m = h[0][l];
            if (m && ia(h[0], l))
                for (h = 0; h < m.length; h++) {
                    var n = m[h];
                    if (k !== k && n.key !== n.key || k === n.key) return {
                        id: l,
                        list: m,
                        index: h,
                        entry: n
                    }
                }
            return {
                id: l,
                list: m,
                index: -1,
                entry: void 0
            }
        }

        function e(h) {
            this[0] = {};
            this[1] = b();
            this.size = 0;
            if (h) {
                h = u(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(u([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (n) {
                    return !1
                }
            }()) return a;
        var f = new WeakMap;
        e.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this[0][l.id] = []);
            l.entry ? l.entry.value = k : (l.entry = {
                next: this[1],
                previous: this[1].previous,
                head: this[1],
                key: h,
                value: k
            }, l.list.push(l.entry), this[1].previous.next = l.entry, this[1].previous = l.entry, this.size++);
            return this
        };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.entry && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.entry.previous.next = h.entry.next, h.entry.next.previous = h.entry.previous, h.entry.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].previous = b();
            this.size = 0
        };
        e.prototype.has = function(h) {
            return !!d(this, h).entry
        };
        e.prototype.get = function(h) {
            return (h = d(this, h).entry) && h.value
        };
        e.prototype.entries = function() {
            return c(this, function(h) {
                return [h.key, h.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(h) {
                return h.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(h) {
                return h.value
            })
        };
        e.prototype.forEach = function(h, k) {
            for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
        };
        e.prototype[Symbol.iterator] = e.prototype.entries;
        var g = 0;
        return e
    });

    function Ia(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    t("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Ia(this, b, "endsWith");
            b += "";
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    });
    t("Object.setPrototypeOf", function(a) {
        return a || ra
    });
    t("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    t("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Ia(this, b, "startsWith");
            b += "";
            var e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    });
    t("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    });
    t("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ia(b, d) && c.push(b[d]);
            return c
        }
    });
    t("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    t("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    t("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Ia(this, b, "includes").indexOf(b, c || 0)
        }
    });
    t("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    });
    t("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    });
    t("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return Number.isFinite(b) ? b === Math.floor(b) : !1
        }
    });

    function Ja(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    }
    t("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Ja(this, function(b, c) {
                return [b, c]
            })
        }
    });
    t("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    });
    t("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Ja(this, function(b) {
                return b
            })
        }
    });
    t("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Ja(this, function(b, c) {
                return c
            })
        }
    });
    t("Set", function(a) {
        function b(c) {
            this.g = new Map;
            if (c) {
                c = u(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.g.size
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(u([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.g.set(c, c);
            this.size = this.g.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.g.delete(c);
            this.size = this.g.size;
            return c
        };
        b.prototype.clear = function() {
            this.g.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.g.has(c)
        };
        b.prototype.entries = function() {
            return this.g.entries()
        };
        b.prototype.values = function() {
            return this.g.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.g.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    });
    t("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ia(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    var B = this || self;

    function C(a, b) {
        a = a.split(".");
        b = b || B;
        for (var c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function Ka(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function La(a) {
        var b = Ka(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function Ma(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function Na(a) {
        return Object.prototype.hasOwnProperty.call(a, Oa) && a[Oa] || (a[Oa] = ++Qa)
    }
    var Oa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Qa = 0;

    function Ra(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Sa(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function Ta(a, b, c) {
        Ta = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ra : Sa;
        return Ta.apply(null, arguments)
    }

    function D(a, b) {
        a = a.split(".");
        var c = B;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function Ua(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.ma = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Yd = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function Va(a) {
        return a
    };

    function Wa(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Wa);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    Ua(Wa, Error);
    Wa.prototype.name = "CustomError";

    function Xa(a) {
        a = a.url;
        var b = /[?&]dsh=1(&|$)/.test(a);
        this.i = !b && /[?&]ae=1(&|$)/.test(a);
        this.l = !b && /[?&]ae=2(&|$)/.test(a);
        if ((this.g = /[?&]adurl=([^&]*)/.exec(a)) && this.g[1]) {
            try {
                var c = decodeURIComponent(this.g[1])
            } catch (d) {
                c = null
            }
            this.h = c
        }
    };

    function Ya() {}

    function Za(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var $a = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        cb = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        };

    function db(a, b) {
        b = $a(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function eb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function fb(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function gb(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (La(d)) {
                var e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (var g = 0; g < f; g++) a[e + g] = d[g]
            } else a.push(d)
        }
    };

    function hb(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    }

    function ib(a) {
        var b = jb,
            c;
        for (c in b)
            if (a.call(void 0, b[c], c, b)) return c
    }

    function kb(a, b) {
        for (var c in a)
            if (!(c in b) || a[c] !== b[c]) return !1;
        for (var d in b)
            if (!(d in a)) return !1;
        return !0
    }

    function lb(a) {
        if (!a || "object" !== typeof a) return a;
        if ("function" === typeof a.clone) return a.clone();
        if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
        if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
        if (a instanceof Date) return new Date(a.getTime());
        var b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length),
            c;
        for (c in a) b[c] = lb(a[c]);
        return b
    }
    var mb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function nb(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < mb.length; f++) c = mb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var ob;

    function pb() {}

    function qb(a) {
        return new pb(rb, a)
    }
    var rb = {};
    qb("");
    var sb = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        tb = /&/g,
        ub = /</g,
        vb = />/g,
        wb = /"/g,
        xb = /'/g,
        yb = /\x00/g,
        zb = /[\x00&<>"']/;

    function Ab(a) {
        this.g = a
    }
    Ab.prototype.toString = function() {
        return this.g.toString()
    };
    var Bb = {},
        Cb = new Ab("about:invalid#zClosurez", Bb);
    var Db, Eb = C("CLOSURE_FLAGS"),
        Fb = Eb && Eb[610401301];
    Db = null != Fb ? Fb : !1;

    function Gb() {
        var a = B.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Hb, Ib = B.navigator;
    Hb = Ib ? Ib.userAgentData || null : null;

    function Ob(a) {
        return Db ? Hb ? Hb.brands.some(function(b) {
            return (b = b.brand) && -1 != b.indexOf(a)
        }) : !1 : !1
    }

    function F(a) {
        return -1 != Gb().indexOf(a)
    };

    function Pb() {
        return Db ? !!Hb && 0 < Hb.brands.length : !1
    }

    function Qb() {
        return Pb() ? !1 : F("Trident") || F("MSIE")
    }

    function Rb() {
        return Pb() ? Ob("Chromium") : (F("Chrome") || F("CriOS")) && !(Pb() ? 0 : F("Edge")) || F("Silk")
    };

    function Sb(a) {
        this.g = a
    }
    Sb.prototype.toString = function() {
        return this.g.toString()
    };

    function Tb(a) {
        zb.test(a) && (-1 != a.indexOf("&") && (a = a.replace(tb, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(ub, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(vb, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(wb, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(xb, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(yb, "&#0;")));
        return a
    };
    var Ub = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Vb(a) {
        return a ? decodeURI(a) : a
    }

    function Wb(a) {
        return Vb(a.match(Ub)[3] || null)
    }

    function Xb(a) {
        var b = a.match(Ub);
        a = b[1];
        var c = b[2],
            d = b[3];
        b = b[4];
        var e = "";
        a && (e += a + ":");
        d && (e += "//", c && (e += c + "@"), e += d, b && (e += ":" + b));
        return e
    }

    function Yb(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) Yb(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    }

    function Zb(a) {
        var b = [],
            c;
        for (c in a) Yb(c, a[c], b);
        return b.join("&")
    }
    var $b = /#|$/;

    function ac(a, b) {
        var c = a.search($b);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d) return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    };

    function bc(a) {
        B.setTimeout(function() {
            throw a;
        }, 0)
    };

    function cc() {
        return F("iPhone") && !F("iPod") && !F("iPad")
    };

    function dc(a) {
        dc[" "](a);
        return a
    }
    dc[" "] = function() {};
    var ec = Pb() ? !1 : F("Opera"),
        fc = Qb(),
        gc = F("Edge"),
        hc = F("Gecko") && !(-1 != Gb().toLowerCase().indexOf("webkit") && !F("Edge")) && !(F("Trident") || F("MSIE")) && !F("Edge"),
        ic = -1 != Gb().toLowerCase().indexOf("webkit") && !F("Edge");

    function jc() {
        var a = B.document;
        return a ? a.documentMode : void 0
    }
    var kc;
    a: {
        var lc = "",
            mc = function() {
                var a = Gb();
                if (hc) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (gc) return /Edge\/([\d\.]+)/.exec(a);
                if (fc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (ic) return /WebKit\/(\S+)/.exec(a);
                if (ec) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();
        mc && (lc = mc ? mc[1] : "");
        if (fc) {
            var rc = jc();
            if (null != rc && rc > parseFloat(lc)) {
                kc = String(rc);
                break a
            }
        }
        kc = lc
    }
    var sc = kc,
        tc;
    if (B.document && fc) {
        var uc = jc();
        tc = uc ? uc : parseInt(sc, 10) || void 0
    } else tc = void 0;
    var vc = tc;
    var wc = cc() || F("iPod"),
        xc = F("iPad");
    !F("Android") || Rb();
    Rb();
    var yc = F("Safari") && !(Rb() || (Pb() ? 0 : F("Coast")) || (Pb() ? 0 : F("Opera")) || (Pb() ? 0 : F("Edge")) || (Pb() ? Ob("Microsoft Edge") : F("Edg/")) || (Pb() ? Ob("Opera") : F("OPR")) || F("Firefox") || F("FxiOS") || F("Silk") || F("Android")) && !(cc() || F("iPad") || F("iPod"));
    var zc = {},
        Ac = null;

    function Bc(a, b) {
        La(a);
        void 0 === b && (b = 0);
        if (!Ac) {
            Ac = {};
            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                zc[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === Ac[h] && (Ac[h] = g)
                }
            }
        }
        b = zc[b];
        c = Array(Math.floor(a.length / 3));
        d = b[64] || "";
        for (e = f = 0; f < a.length - 2; f += 3) {
            var k = a[f],
                l = a[f + 1];
            h = a[f + 2];
            g = b[k >> 2];
            k = b[(k & 3) << 4 | l >> 4];
            l = b[(l & 15) << 2 | h >> 6];
            h = b[h & 63];
            c[e++] = "" + g + k + l + h
        }
        g = 0;
        h = d;
        switch (a.length -
            f) {
            case 2:
                g = a[f + 1], h = b[(g & 15) << 2] || d;
            case 1:
                a = a[f], c[e] = "" + b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d
        }
        return c.join("")
    };
    var Cc = "undefined" !== typeof Uint8Array,
        Dc = !fc && "function" === typeof btoa;

    function Ec(a) {
        return Array.prototype.slice.call(a)
    };
    var Fc = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0;
    Math.max.apply(Math, v(Object.values({
        Ld: 1,
        Kd: 2,
        Jd: 4,
        Od: 8,
        Nd: 16,
        Md: 32,
        Gd: 64,
        Pd: 128,
        Id: 256,
        Hd: 512
    })));
    var Gc = Fc ? function(a, b) {
        a[Fc] |= b
    } : function(a, b) {
        void 0 !== a.fa ? a.fa |= b : Object.defineProperties(a, {
            fa: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    };

    function Hc(a) {
        var b = G(a);
        1 !== (b & 1) && (Object.isFrozen(a) && (a = Ec(a)), Ic(a, b | 1))
    }
    var Jc = Fc ? function(a, b) {
            a[Fc] &= ~b
        } : function(a, b) {
            void 0 !== a.fa && (a.fa &= ~b)
        },
        G = Fc ? function(a) {
            return a[Fc] | 0
        } : function(a) {
            return a.fa | 0
        },
        Kc = Fc ? function(a) {
            return a[Fc]
        } : function(a) {
            return a.fa
        },
        Ic = Fc ? function(a, b) {
            a[Fc] = b
        } : function(a, b) {
            void 0 !== a.fa ? a.fa = b : Object.defineProperties(a, {
                fa: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        };

    function Lc(a, b) {
        Object.isFrozen(a) && (a = Ec(a));
        Ic(a, b);
        return a
    }

    function Mc(a) {
        Gc(a, 1);
        return a
    }

    function Nc(a, b) {
        Ic(b, (a | 0) & -255)
    }

    function Oc(a, b) {
        Ic(b, (a | 34) & -221)
    }

    function Qc(a) {
        a = a >> 10 & 1023;
        return 0 === a ? 536870912 : a
    };
    var Rc = {};

    function Sc(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var Tc, Uc, Vc = [];
    Ic(Vc, 39);
    Uc = Object.freeze(Vc);

    function Wc(a) {
        if (a & 2) throw Error();
    };

    function Xc(a) {
        return a.displayName || a.name || "unknown type name"
    }

    function Yc(a) {
        if ("boolean" !== typeof a) throw Error("Expected boolean but got " + Ka(a) + ": " + a);
        return !!a
    }

    function Zc(a) {
        if (!("number" === typeof a && !Number.isNaN(a) || a && "string" === typeof a && !isNaN(a))) throw Error("Expected an int64 value encoded as a number or a string but got " + a + " a " + Ka(a));
        return a
    }

    function $c(a) {
        if (null != a && "string" !== typeof a) throw Error();
        return a
    }

    function ad(a) {
        return null == a || "string" === typeof a ? a : void 0
    }

    function bd(a, b) {
        if (!(a instanceof b)) throw Error("Expected instanceof " + Xc(b) + " but got " + (a && Xc(a.constructor)));
        return a
    }

    function cd(a, b, c) {
        var d = !1;
        if (null != a && "object" === typeof a && !(d = Array.isArray(a)) && a.Tb === Rc) return a;
        if (d) {
            var e = d = G(a);
            0 === e && (e |= c & 32);
            e |= c & 2;
            e !== d && Ic(a, e);
            return new b(a)
        }
    };
    var dd;

    function H(a, b, c) {
        null == a && (a = dd);
        dd = void 0;
        if (null == a) {
            var d = 96;
            c ? (a = [c], d |= 512) : a = [];
            b && (d = d & -1047553 | (b & 1023) << 10)
        } else {
            if (!Array.isArray(a)) throw Error();
            d = G(a);
            if (d & 64) return a;
            d |= 64;
            if (c && (d |= 512, c !== a[0])) throw Error();
            a: {
                c = a;
                var e = c.length;
                if (e) {
                    var f = e - 1,
                        g = c[f];
                    if (Sc(g)) {
                        d |= 256;
                        b = (d >> 9 & 1) - 1;
                        e = f - b;
                        1024 <= e && (ed(c, b, g), e = 1023);
                        d = d & -1047553 | (e & 1023) << 10;
                        break a
                    }
                }
                b && (g = (d >> 9 & 1) - 1, b = Math.max(b, e - g), 1024 < b && (ed(c, g, {}), d |= 256, b = 1023), d = d & -1047553 | (b & 1023) << 10)
            }
        }
        Ic(a, d);
        return a
    }

    function ed(a, b, c) {
        for (var d = 1023 + b, e = a.length, f = d; f < e; f++) {
            var g = a[f];
            null != g && g !== c && (c[f - b] = g)
        }
        a.length = d + 1;
        a[d] = c
    };

    function fd(a, b) {
        return jd(b)
    }

    function jd(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a && !Array.isArray(a) && Cc && null != a && a instanceof Uint8Array) {
                    if (Dc) {
                        for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                        a = btoa(b)
                    } else a = Bc(a);
                    return a
                }
        }
        return a
    };

    function kd(a, b, c) {
        a = Ec(a);
        var d = a.length,
            e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (var f in e) b[f] = c(e[f])
        }
        return a
    }

    function ld(a, b, c, d, e, f) {
        if (null != a) {
            if (Array.isArray(a)) a = e && 0 == a.length && G(a) & 1 ? void 0 : f && G(a) & 2 ? a : md(a, b, c, void 0 !== d, e, f);
            else if (Sc(a)) {
                var g = {},
                    h;
                for (h in a) g[h] = ld(a[h], b, c, d, e, f);
                a = g
            } else a = b(a, d);
            return a
        }
    }

    function md(a, b, c, d, e, f) {
        var g = d || c ? G(a) : 0;
        d = d ? !!(g & 32) : void 0;
        a = Ec(a);
        for (var h = 0; h < a.length; h++) a[h] = ld(a[h], b, c, d, e, f);
        c && c(g, a);
        return a
    }

    function nd(a) {
        return a.Tb === Rc ? a.toJSON() : jd(a)
    };

    function od(a, b, c) {
        c = void 0 === c ? Oc : c;
        if (null != a) {
            if (Cc && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = G(a);
                return d & 2 ? a : !b || d & 68 || !(d & 32 || 0 === d) ? md(a, od, d & 4 ? Oc : c, !0, !1, !0) : (Ic(a, d | 34), a)
            }
            a.Tb === Rc && (b = a.o, c = Kc(b), a = c & 2 ? a : pd(a, b, c, !0));
            return a
        }
    }

    function pd(a, b, c, d) {
        a = a.constructor;
        b = qd(b, c, d);
        G(b);
        dd = b;
        b = new a(b);
        dd = void 0;
        return b
    }

    function qd(a, b, c) {
        var d = c || b & 2 ? Oc : Nc,
            e = !!(b & 32);
        a = kd(a, b, function(f) {
            return od(f, e, d)
        });
        Gc(a, 32 | (c ? 2 : 0));
        return a
    };

    function rd(a, b) {
        a = a.o;
        return sd(a, Kc(a), b)
    }

    function sd(a, b, c, d) {
        if (-1 === c) return null;
        if (c >= Qc(b)) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var e = a.length;
            if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
            b = c + ((b >> 9 & 1) - 1);
            if (b < e) return a[b]
        }
    }

    function I(a, b, c) {
        var d = a.o,
            e = Kc(d);
        Wc(e);
        td(d, e, b, c);
        return a
    }

    function td(a, b, c, d, e) {
        Sc(d);
        var f = Qc(b);
        if (c >= f || e) {
            e = b;
            if (b & 256) f = a[a.length - 1];
            else {
                if (null == d) return;
                f = a[f + ((b >> 9 & 1) - 1)] = {};
                e |= 256
            }
            f[c] = d;
            e !== b && Ic(a, e)
        } else a[c + ((b >> 9 & 1) - 1)] = d, b & 256 && (a = a[a.length - 1], c in a && delete a[c])
    }

    function ud(a, b, c, d) {
        var e = b & 2,
            f = sd(a, b, c);
        Array.isArray(f) || (f = Uc);
        var g = G(f);
        g & 1 || Mc(f);
        if (e) g & 2 || Gc(f, 34), d & 1 || Object.freeze(f);
        else {
            e = !(d & 2);
            var h = g & 2;
            d & 1 || !h ? e && g & 32 && !h && Jc(f, 32) : (f = Mc(Ec(f)), td(a, b, c, f))
        }
        return f
    }

    function vd(a, b, c, d) {
        a = a.o;
        var e = Kc(a);
        Wc(e);
        (c = wd(a, e, c)) && c !== b && null != d && td(a, e, c);
        td(a, e, b, d)
    }

    function xd(a, b, c) {
        a = a.o;
        return wd(a, Kc(a), b) === c ? c : -1
    }

    function wd(a, b, c) {
        for (var d = 0, e = 0; e < c.length; e++) {
            var f = c[e];
            null != sd(a, b, f) && (0 !== d && td(a, b, d), d = f)
        }
        return d
    }

    function yd(a, b, c) {
        var d = void 0 === d ? !1 : d;
        var e = a.o;
        var f = Kc(e),
            g = sd(e, f, c, d);
        b = cd(g, b, f);
        b !== g && null != b && td(e, f, c, b, d);
        e = b;
        if (null == e) return e;
        a = a.o;
        f = Kc(a);
        if (!(f & 2)) {
            g = e;
            b = g.o;
            var h = Kc(b);
            g = h & 2 ? pd(g, b, h, !1) : g;
            g !== e && (e = g, td(a, f, c, e, d))
        }
        return e
    }

    function J(a, b, c, d) {
        null != d ? bd(d, b) : d = void 0;
        return I(a, c, d)
    }

    function zd(a, b, c, d, e) {
        null != e ? bd(e, b) : e = void 0;
        vd(a, c, d, e)
    }

    function Ad(a, b, c, d) {
        a = a.o;
        var e = Kc(a);
        Wc(e);
        var f = !!(e & 2),
            g = ud(a, e, b, 1);
        if (g !== Uc && G(g) & 4) {
            if (f) f = G(g), g = Ec(g), Ic(g, f), td(a, e, b, g);
            else {
                f = Object.isFrozen(g);
                var h = G(g);
                var k = h & -35;
                f && (g = Ec(g), h = 0, td(a, e, b, g));
                h !== k && Ic(g, k)
            }
            b = g
        } else {
            f = g;
            h = !!(e & 2);
            k = !!(G(f) & 2);
            g = f;
            !h && k && (f = Ec(f));
            h = e | (k ? 2 : 0);
            k = k || void 0;
            for (var l = 0, m = 0; l < f.length; l++) {
                var n = cd(f[l], c, h);
                void 0 !== n && (k = k || Kc(n.o) & 2, f[m++] = n)
            }
            m < l && (f.length = m);
            k = !k;
            h = G(f);
            l = h | 5;
            k = k ? l | 8 : l & -9;
            h != k && (f = Lc(f, k));
            g !== f && td(a, e, b, f);
            b = f
        }
        c = null != d ? bd(d, c) :
            new c;
        b.push(c);
        G(c.o) & 2 && Jc(b, 8)
    }

    function Bd(a, b, c) {
        if (null != c && "number" !== typeof c) throw Error();
        I(a, b, c)
    }

    function Cd(a, b, c) {
        I(a, b, null == c ? c : Zc(c))
    }

    function K(a, b, c) {
        return I(a, b, $c(c))
    }

    function Dd(a, b) {
        var c = void 0 === c ? "" : c;
        a = ad(rd(a, b));
        return null != a ? a : c
    }

    function Ed(a, b) {
        b = xd(a, Fd, b);
        return ad(rd(a, b))
    };

    function L(a, b, c) {
        this.o = H(a, b, c)
    }
    L.prototype.toJSON = function() {
        if (Tc) var a = Gd(this, this.o, !1);
        else a = md(this.o, nd, void 0, void 0, !1, !1), a = Gd(this, a, !0);
        return a
    };

    function Hd(a) {
        Tc = !0;
        try {
            return JSON.stringify(a.toJSON(), fd)
        } finally {
            Tc = !1
        }
    }
    L.prototype.clone = function() {
        var a = this.o;
        return pd(this, a, Kc(a), !1)
    };
    L.prototype.Tb = Rc;
    L.prototype.toString = function() {
        return Gd(this, this.o, !1).toString()
    };

    function Gd(a, b, c) {
        var d = a.constructor.la,
            e = Kc(c ? a.o : b),
            f = Qc(e);
        e = !1;
        if (d) {
            if (!c) {
                b = Ec(b);
                var g;
                if (b.length && Sc(g = b[b.length - 1]))
                    for (e = 0; e < d.length; e++)
                        if (d[e] >= f) {
                            Object.assign(b[b.length - 1] = {}, g);
                            break
                        }
                e = !0
            }
            g = b;
            c = !c;
            f = Kc(a.o);
            a = Qc(f);
            f = (f >> 9 & 1) - 1;
            for (var h, k, l = 0; l < d.length; l++)
                if (k = d[l], k < a) {
                    k += f;
                    var m = g[k];
                    null == m ? g[k] = c ? Uc : Mc([]) : c && m !== Uc && Hc(m)
                } else h || (m = void 0, g.length && Sc(m = g[g.length - 1]) ? h = m : g.push(h = {})), m = h[k], null == h[k] ? h[k] = c ? Uc : Mc([]) : c && m !== Uc && Hc(m)
        }
        d = b.length;
        if (!d) return b;
        var n;
        if (Sc(h = b[d - 1])) {
            a: {
                var q = h;g = {};c = !1;
                for (var p in q) a = q[p],
                Array.isArray(a) && a != a && (c = !0),
                null != a ? g[p] = a : c = !0;
                if (c) {
                    for (var x in g) {
                        q = g;
                        break a
                    }
                    q = null
                }
            }
            q != h && (n = !0);d--
        }
        for (; 0 < d; d--) {
            h = b[d - 1];
            if (null != h) break;
            var y = !0
        }
        if (!n && !y) return b;
        var E;
        e ? E = b : E = Array.prototype.slice.call(b, 0, d);
        b = E;
        e && (b.length = d);
        q && b.push(q);
        return b
    };
    var Id = window;
    qb("csi.gstatic.com");
    qb("googleads.g.doubleclick.net");
    qb("partner.googleadservices.com");
    qb("pubads.g.doubleclick.net");
    qb("securepubads.g.doubleclick.net");
    qb("tpc.googlesyndication.com");

    function Jd(a, b) {
        this.width = a;
        this.height = b
    }
    r = Jd.prototype;
    r.clone = function() {
        return new Jd(this.width, this.height)
    };
    r.aspectRatio = function() {
        return this.width / this.height
    };
    r.Nb = function() {
        return !(this.width * this.height)
    };
    r.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    r.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    r.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function Kd() {
        var a = document;
        var b = "IFRAME";
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Ld(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    };

    function Md(a) {
        var b = C("window.location.href");
        null == a && (a = 'Unknown Error of type "null/undefined"');
        if ("string" === typeof a) return {
            message: a,
            name: "Unknown error",
            lineNumber: "Not available",
            fileName: b,
            stack: "Not available"
        };
        var c = !1;
        try {
            var d = a.lineNumber || a.line || "Not available"
        } catch (g) {
            d = "Not available", c = !0
        }
        try {
            var e = a.fileName || a.filename || a.sourceURL || B.$googDebugFname || b
        } catch (g) {
            e = "Not available", c = !0
        }
        b = Nd(a);
        if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
            c = a.message;
            if (null ==
                c) {
                if (a.constructor && a.constructor instanceof Function) {
                    if (a.constructor.name) c = a.constructor.name;
                    else if (c = a.constructor, Od[c]) c = Od[c];
                    else {
                        c = String(c);
                        if (!Od[c]) {
                            var f = /function\s+([^\(]+)/m.exec(c);
                            Od[c] = f ? f[1] : "[Anonymous]"
                        }
                        c = Od[c]
                    }
                    c = 'Unknown Error of type "' + c + '"'
                } else c = "Unknown Error of unknown type";
                "function" === typeof a.toString && Object.prototype.toString !== a.toString && (c += ": " + a.toString())
            }
            return {
                message: c,
                name: a.name || "UnknownError",
                lineNumber: d,
                fileName: e,
                stack: b || "Not available"
            }
        }
        a.stack =
            b;
        return {
            message: a.message,
            name: a.name,
            lineNumber: a.lineNumber,
            fileName: a.fileName,
            stack: a.stack
        }
    }

    function Nd(a, b) {
        b || (b = {});
        b[Pd(a)] = !0;
        var c = a.stack || "";
        (a = a.cause) && !b[Pd(a)] && (c += "\nCaused by: ", a.stack && 0 == a.stack.indexOf(a.toString()) || (c += "string" === typeof a ? a : a.message + "\n"), c += Nd(a, b));
        return c
    }

    function Pd(a) {
        var b = "";
        "function" === typeof a.toString && (b = "" + a);
        return b + a.stack
    }
    var Od = {};
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var Qd;
    try {
        new URL("s://g"), Qd = !0
    } catch (a) {
        Qd = !1
    }
    var Rd = Qd;

    function Sd() {
        throw Error("unknown trace type");
    };

    function Td(a, b) {
        a.removeAttribute("srcdoc");
        var c = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");
        a.setAttribute("sandbox", "");
        for (var d = 0; d < c.length; d++) a.sandbox.supports && !a.sandbox.supports(c[d]) || a.sandbox.add(c[d]);
        if (b instanceof Ab) b instanceof Ab && b.constructor === Ab ? b = b.g : (Ka(b), b = "type_error:SafeUrl");
        else {
            b: if (Rd) {
                try {
                    var e = new URL(b)
                } catch (f) {
                    c = "https:";
                    break b
                }
                c = e.protocol
            } else c: {
                c = document.createElement("a");
                try {
                    c.href = b
                } catch (f) {
                    c = void 0;
                    break c
                }
                c = c.protocol;c = ":" === c || "" === c ? "https:" : c
            }
            b = "javascript:" !== c ? b : void 0
        }
        void 0 !== b && (a.src = b)
    };

    function Ud(a) {
        this.gd = a
    }

    function Vd(a) {
        return new Ud(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var Wd = [Vd("data"), Vd("http"), Vd("https"), Vd("mailto"), Vd("ftp"), new Ud(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];

    function Xd(a, b) {
        b = void 0 === b ? Wd : b;
        for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d instanceof Ud && d.gd(a)) return new Ab(a, Bb)
        }
    }

    function Yd(a) {
        var b = void 0 === b ? Wd : b;
        return Xd(a, b) || Cb
    };

    function Zd(a) {
        var b = $d;
        if (b)
            for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && a(b[c], c, b)
    }

    function ae() {
        var a = [];
        Zd(function(b) {
            a.push(b)
        });
        return a
    }
    var $d = {
            vd: "allow-forms",
            wd: "allow-modals",
            xd: "allow-orientation-lock",
            yd: "allow-pointer-lock",
            zd: "allow-popups",
            Ad: "allow-popups-to-escape-sandbox",
            Bd: "allow-presentation",
            Cd: "allow-same-origin",
            Dd: "allow-scripts",
            Ed: "allow-top-navigation",
            Fd: "allow-top-navigation-by-user-activation"
        },
        be = Za(function() {
            return ae()
        });

    function ce() {
        var a = de(),
            b = {};
        cb(be(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }

    function de() {
        var a = void 0 === a ? document : a;
        return a.createElement("iframe")
    };
    var ee = (new Date).getTime();

    function fe(a) {
        if (!a) return "";
        if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
        a.startsWith("blob:") && (a = a.substring(5));
        a = a.split("#")[0].split("?")[0];
        a = a.toLowerCase();
        0 == a.indexOf("//") && (a = window.location.protocol + a);
        /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
        var b = a.substring(a.indexOf("://") + 3),
            c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
        c = a.substring(0, a.indexOf("://"));
        if (!c) throw Error("URI is missing protocol: " + a);
        if ("http" !== c && "https" !== c && "chrome-extension" !==
            c && "moz-extension" !== c && "file" !== c && "android-app" !== c && "chrome-search" !== c && "chrome-untrusted" !== c && "chrome" !== c && "app" !== c && "devtools" !== c) throw Error("Invalid URI scheme in origin: " + c);
        a = "";
        var d = b.indexOf(":");
        if (-1 != d) {
            var e = b.substring(d + 1);
            b = b.substring(0, d);
            if ("http" === c && "80" !== e || "https" === c && "443" !== e) a = ":" + e
        }
        return c + "://" + b + a
    };

    function ge() {
        function a() {
            e[0] = 1732584193;
            e[1] = 4023233417;
            e[2] = 2562383102;
            e[3] = 271733878;
            e[4] = 3285377520;
            m = l = 0
        }

        function b(n) {
            for (var q = g, p = 0; 64 > p; p += 4) q[p / 4] = n[p] << 24 | n[p + 1] << 16 | n[p + 2] << 8 | n[p + 3];
            for (p = 16; 80 > p; p++) n = q[p - 3] ^ q[p - 8] ^ q[p - 14] ^ q[p - 16], q[p] = (n << 1 | n >>> 31) & 4294967295;
            n = e[0];
            var x = e[1],
                y = e[2],
                E = e[3],
                O = e[4];
            for (p = 0; 80 > p; p++) {
                if (40 > p)
                    if (20 > p) {
                        var U = E ^ x & (y ^ E);
                        var Q = 1518500249
                    } else U = x ^ y ^ E, Q = 1859775393;
                else 60 > p ? (U = x & y | E & (x | y), Q = 2400959708) : (U = x ^ y ^ E, Q = 3395469782);
                U = ((n << 5 | n >>> 27) & 4294967295) + U + O + Q + q[p] & 4294967295;
                O = E;
                E = y;
                y = (x << 30 | x >>> 2) & 4294967295;
                x = n;
                n = U
            }
            e[0] = e[0] + n & 4294967295;
            e[1] = e[1] + x & 4294967295;
            e[2] =
                e[2] + y & 4294967295;
            e[3] = e[3] + E & 4294967295;
            e[4] = e[4] + O & 4294967295
        }

        function c(n, q) {
            if ("string" === typeof n) {
                n = unescape(encodeURIComponent(n));
                for (var p = [], x = 0, y = n.length; x < y; ++x) p.push(n.charCodeAt(x));
                n = p
            }
            q || (q = n.length);
            p = 0;
            if (0 == l)
                for (; p + 64 < q;) b(n.slice(p, p + 64)), p += 64, m += 64;
            for (; p < q;)
                if (f[l++] = n[p++], m++, 64 == l)
                    for (l = 0, b(f); p + 64 < q;) b(n.slice(p, p + 64)), p += 64, m += 64
        }

        function d() {
            var n = [],
                q = 8 * m;
            56 > l ? c(h, 56 - l) : c(h, 64 - (l - 56));
            for (var p = 63; 56 <= p; p--) f[p] = q & 255, q >>>= 8;
            b(f);
            for (p = q = 0; 5 > p; p++)
                for (var x = 24; 0 <= x; x -= 8) n[q++] = e[p] >> x & 255;
            return n
        }
        for (var e = [], f = [], g = [], h = [128], k = 1; 64 > k; ++k) h[k] = 0;
        var l, m;
        a();
        return {
            reset: a,
            update: c,
            digest: d,
            Rc: function() {
                for (var n = d(), q = "", p = 0; p < n.length; p++) q += "0123456789ABCDEF".charAt(Math.floor(n[p] / 16)) + "0123456789ABCDEF".charAt(n[p] % 16);
                return q
            }
        }
    };

    function he(a, b, c) {
        var d = String(B.location.href);
        return d && a && b ? [b, ie(fe(d), a, c || null)].join(" ") : null
    }

    function ie(a, b, c) {
        var d = [],
            e = [];
        if (1 == (Array.isArray(c) ? 2 : 1)) return e = [b, a], cb(d, function(h) {
            e.push(h)
        }), je(e.join(" "));
        var f = [],
            g = [];
        cb(c, function(h) {
            g.push(h.key);
            f.push(h.value)
        });
        c = Math.floor((new Date).getTime() / 1E3);
        e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
        cb(d, function(h) {
            e.push(h)
        });
        a = je(e.join(" "));
        a = [c, a];
        0 == g.length || a.push(g.join(""));
        return a.join("_")
    }

    function je(a) {
        var b = ge();
        b.update(a);
        return b.Rc().toLowerCase()
    };
    var ke = {};

    function le(a) {
        this.g = a || {
            cookie: ""
        }
    }
    r = le.prototype;
    r.isEnabled = function() {
        if (!B.navigator.cookieEnabled) return !1;
        if (!this.Nb()) return !0;
        this.set("TESTCOOKIESENABLED", "1", {
            Qb: 60
        });
        if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
        this.remove("TESTCOOKIESENABLED");
        return !0
    };
    r.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.fe;
            d = c.secure || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Qb
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        c = f ? ";domain=" + f : "";
        g = g ? ";path=" + g : "";
        d = d ? ";secure" : "";
        h = 0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString();
        this.g.cookie = a + "=" + b + c + g + h + d + (null != e ? ";samesite=" +
            e : "")
    };
    r.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = sb(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    r.remove = function(a, b, c) {
        var d = void 0 !== this.get(a);
        this.set(a, "", {
            Qb: 0,
            path: b,
            domain: c
        });
        return d
    };
    r.Nb = function() {
        return !this.g.cookie
    };
    r.clear = function() {
        for (var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = sb(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
    };
    var me = new le("undefined" == typeof document ? null : document);

    function ne(a) {
        return !!ke.FPA_SAMESITE_PHASE2_MOD || !(void 0 === a || !a)
    }

    function oe(a, b, c, d) {
        (a = B[a]) || "undefined" === typeof document || (a = (new le(document)).get(b));
        return a ? he(a, c, d) : null
    }

    function pe(a) {
        var b = void 0 === b ? !1 : b;
        var c = fe(String(B.location.href)),
            d = [];
        var e = b;
        e = void 0 === e ? !1 : e;
        var f = B.__SAPISID || B.__APISID || B.__3PSAPISID || B.__OVERRIDE_SID;
        ne(e) && (f = f || B.__1PSAPISID);
        if (f) e = !0;
        else {
            if ("undefined" !== typeof document) {
                var g = new le(document);
                f = g.get("SAPISID") || g.get("APISID") || g.get("__Secure-3PAPISID") || g.get("SID") || g.get("OSID");
                ne(e) && (f = f || g.get("__Secure-1PAPISID"))
            }
            e = !!f
        }
        e && (e = (c = 0 == c.indexOf("https:") || 0 == c.indexOf("chrome-extension:") || 0 == c.indexOf("moz-extension:")) ?
            B.__SAPISID : B.__APISID, e || "undefined" === typeof document || (e = new le(document), e = e.get(c ? "SAPISID" : "APISID") || e.get("__Secure-3PAPISID")), (e = e ? he(e, c ? "SAPISIDHASH" : "APISIDHASH", a) : null) && d.push(e), c && ne(b) && ((b = oe("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && d.push(b), (a = oe("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) && d.push(a)));
        return 0 == d.length ? null : d.join(" ")
    };
    "undefined" !== typeof TextDecoder && new TextDecoder;
    var qe = "undefined" !== typeof TextEncoder ? new TextEncoder : null,
        re = qe ? function(a) {
            return qe.encode(a)
        } : function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
            }
            a = new Uint8Array(b.length);
            for (c = 0; c < a.length; c++) a[c] = b[c];
            return a
        };

    function se() {
        this.i = this.i;
        this.s = this.s
    }
    se.prototype.i = !1;
    se.prototype.dispose = function() {
        this.i || (this.i = !0, this.Ga())
    };
    se.prototype.Ga = function() {
        if (this.s)
            for (; this.s.length;) this.s.shift()()
    };

    function te(a, b) {
        this.type = a;
        this.g = this.target = b;
        this.defaultPrevented = this.i = !1
    }
    te.prototype.stopPropagation = function() {
        this.i = !0
    };
    te.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    };
    var ue = function() {
        if (!B.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        try {
            var c = function() {};
            B.addEventListener("test", c, b);
            B.removeEventListener("test", c, b)
        } catch (d) {}
        return a
    }();

    function ve(a, b) {
        te.call(this, a ? a.type : "");
        this.relatedTarget = this.g = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.h = null;
        a && this.init(a, b)
    }
    Ua(ve, te);
    var we = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    ve.prototype.init = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.g = b;
        if (b = a.relatedTarget) {
            if (hc) {
                a: {
                    try {
                        dc(b.nodeName);
                        var e = !0;
                        break a
                    } catch (f) {}
                    e = !1
                }
                e || (b = null)
            }
        } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY ||
            0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : we[a.pointerType] || "";
        this.state = a.state;
        this.h = a;
        a.defaultPrevented && ve.ma.preventDefault.call(this)
    };
    ve.prototype.stopPropagation = function() {
        ve.ma.stopPropagation.call(this);
        this.h.stopPropagation ? this.h.stopPropagation() : this.h.cancelBubble = !0
    };
    ve.prototype.preventDefault = function() {
        ve.ma.preventDefault.call(this);
        var a = this.h;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    var xe = "closure_listenable_" + (1E6 * Math.random() | 0);
    var ye = 0;

    function ze(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.xb = e;
        this.key = ++ye;
        this.ob = this.sb = !1
    }

    function De(a) {
        a.ob = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.xb = null
    };

    function Ee(a) {
        this.src = a;
        this.listeners = {};
        this.g = 0
    }
    Ee.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.listeners[f];
        a || (a = this.listeners[f] = [], this.g++);
        var g = Fe(a, b, d, e); - 1 < g ? (b = a[g], c || (b.sb = !1)) : (b = new ze(b, this.src, f, !!d, e), b.sb = c, a.push(b));
        return b
    };
    Ee.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.listeners)) return !1;
        var e = this.listeners[a];
        b = Fe(e, b, c, d);
        return -1 < b ? (De(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.listeners[a], this.g--), !0) : !1
    };

    function Ge(a, b) {
        var c = b.type;
        c in a.listeners && db(a.listeners[c], b) && (De(b), 0 == a.listeners[c].length && (delete a.listeners[c], a.g--))
    }

    function Fe(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.ob && f.listener == b && f.capture == !!c && f.xb == d) return e
        }
        return -1
    };
    var He = "closure_lm_" + (1E6 * Math.random() | 0),
        Ie = {},
        Je = 0;

    function Ke(a, b, c, d, e) {
        if (d && d.once) Le(a, b, c, d, e);
        else if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) Ke(a, b[f], c, d, e);
        else c = Me(c), a && a[xe] ? a.Ka(b, c, Ma(d) ? !!d.capture : !!d, e) : Ne(a, b, c, !1, d, e)
    }

    function Ne(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var g = Ma(e) ? !!e.capture : !!e,
            h = Oe(a);
        h || (a[He] = h = new Ee(a));
        c = h.add(b, c, d, g, f);
        if (!c.proxy) {
            d = Pe();
            c.proxy = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) ue || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent) a.attachEvent(Qe(b.toString()), d);
            else if (a.addListener && a.removeListener) a.addListener(d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            Je++
        }
    }

    function Pe() {
        function a(c) {
            return b.call(a.src, a.listener, c)
        }
        var b = Re;
        return a
    }

    function Le(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) Le(a, b[f], c, d, e);
        else c = Me(c), a && a[xe] ? a.g.add(String(b), c, !0, Ma(d) ? !!d.capture : !!d, e) : Ne(a, b, c, !0, d, e)
    }

    function Se(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) Se(a, b[f], c, d, e);
        else(d = Ma(d) ? !!d.capture : !!d, c = Me(c), a && a[xe]) ? a.g.remove(String(b), c, d, e) : a && (a = Oe(a)) && (b = a.listeners[b.toString()], a = -1, b && (a = Fe(b, c, d, e)), (c = -1 < a ? b[a] : null) && Te(c))
    }

    function Te(a) {
        if ("number" !== typeof a && a && !a.ob) {
            var b = a.src;
            if (b && b[xe]) Ge(b.g, a);
            else {
                var c = a.type,
                    d = a.proxy;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Qe(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                Je--;
                (c = Oe(b)) ? (Ge(c, a), 0 == c.g && (c.src = null, b[He] = null)) : De(a)
            }
        }
    }

    function Qe(a) {
        return a in Ie ? Ie[a] : Ie[a] = "on" + a
    }

    function Re(a, b) {
        if (a.ob) a = !0;
        else {
            b = new ve(b, this);
            var c = a.listener,
                d = a.xb || a.src;
            a.sb && Te(a);
            a = c.call(d, b)
        }
        return a
    }

    function Oe(a) {
        a = a[He];
        return a instanceof Ee ? a : null
    }
    var Ue = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function Me(a) {
        if ("function" === typeof a) return a;
        a[Ue] || (a[Ue] = function(b) {
            return a.handleEvent(b)
        });
        return a[Ue]
    };

    function Ve() {
        se.call(this);
        this.g = new Ee(this);
        this.Pa = this;
        this.N = null
    }
    Ua(Ve, se);
    Ve.prototype[xe] = !0;
    Ve.prototype.addEventListener = function(a, b, c, d) {
        Ke(this, a, b, c, d)
    };
    Ve.prototype.removeEventListener = function(a, b, c, d) {
        Se(this, a, b, c, d)
    };

    function We(a, b) {
        var c = a.N;
        if (c) {
            var d = [];
            for (var e = 1; c; c = c.N) d.push(c), ++e
        }
        a = a.Pa;
        c = b.type || b;
        "string" === typeof b ? b = new te(b, a) : b instanceof te ? b.target = b.target || a : (e = b, b = new te(c, a), nb(b, e));
        e = !0;
        if (d)
            for (var f = d.length - 1; !b.i && 0 <= f; f--) {
                var g = b.g = d[f];
                e = Xe(g, c, !0, b) && e
            }
        b.i || (g = b.g = a, e = Xe(g, c, !0, b) && e, b.i || (e = Xe(g, c, !1, b) && e));
        if (d)
            for (f = 0; !b.i && f < d.length; f++) g = b.g = d[f], e = Xe(g, c, !1, b) && e
    }
    Ve.prototype.Ga = function() {
        Ve.ma.Ga.call(this);
        if (this.g) {
            var a = this.g,
                b = 0,
                c;
            for (c in a.listeners) {
                for (var d = a.listeners[c], e = 0; e < d.length; e++) ++b, De(d[e]);
                delete a.listeners[c];
                a.g--
            }
        }
        this.N = null
    };
    Ve.prototype.Ka = function(a, b, c, d) {
        return this.g.add(String(a), b, !1, c, d)
    };

    function Xe(a, b, c, d) {
        b = a.g.listeners[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.ob && g.capture == c) {
                var h = g.listener,
                    k = g.xb || g.src;
                g.sb && Ge(a.g, g);
                e = !1 !== h.call(k, d) && e
            }
        }
        return e && !d.defaultPrevented
    };

    function Ye(a) {
        Ve.call(this);
        var b = this;
        this.W = this.l = 0;
        this.ga = null != a ? a : {
            oa: function(e, f) {
                return setTimeout(e, f)
            },
            qa: function(e) {
                clearTimeout(e)
            }
        };
        var c, d;
        this.h = null != (d = null == (c = window.navigator) ? void 0 : c.onLine) ? d : !0;
        this.u = function() {
            return A(function(e) {
                return z(e, Ze(b), 0)
            })
        };
        window.addEventListener("offline", this.u);
        window.addEventListener("online", this.u);
        this.W || $e(this)
    }
    w(Ye, Ve);

    function af() {
        var a = bf;
        Ye.g || (Ye.g = new Ye(a));
        return Ye.g
    }
    Ye.prototype.dispose = function() {
        window.removeEventListener("offline", this.u);
        window.removeEventListener("online", this.u);
        this.ga.qa(this.W);
        delete Ye.g
    };
    Ye.prototype.ba = function() {
        return this.h
    };

    function $e(a) {
        a.W = a.ga.oa(function() {
            var b;
            return A(function(c) {
                if (1 == c.g) return a.h ? (null == (b = window.navigator) ? 0 : b.onLine) ? c.B(3) : z(c, Ze(a), 3) : z(c, Ze(a), 3);
                $e(a);
                c.g = 0
            })
        }, 3E4)
    }

    function Ze(a, b) {
        return a.H ? a.H : a.H = new Promise(function(c) {
            var d, e, f, g;
            return A(function(h) {
                switch (h.g) {
                    case 1:
                        return d = window.AbortController ? new window.AbortController : void 0, f = null == (e = d) ? void 0 : e.signal, g = !1, va(h, 2, 3), d && (a.l = a.ga.oa(function() {
                            d.abort()
                        }, b || 2E4)), z(h, fetch("/generate_204", {
                            method: "HEAD",
                            signal: f
                        }), 5);
                    case 5:
                        g = !0;
                    case 3:
                        h.W = [h.i];
                        h.s = 0;
                        h.u = 0;
                        a.H = void 0;
                        a.l && (a.ga.qa(a.l), a.l = 0);
                        g !== a.h && (a.h = g, a.h ? We(a, "networkstatus-online") : We(a, "networkstatus-offline"));
                        c(g);
                        xa(h);
                        break;
                    case 2:
                        wa(h), g = !1, h.B(3)
                }
            })
        })
    };

    function cf() {
        this.data = [];
        this.g = -1
    }
    cf.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && Number.isInteger(a) && this.data[a] !== b && (this.data[a] = b, this.g = -1)
    };
    cf.prototype.get = function(a) {
        return !!this.data[a]
    };

    function df(a) {
        -1 === a.g && (a.g = a.data.reduce(function(b, c, d) {
            return b + (c ? Math.pow(2, d) : 0)
        }, 0));
        return a.g
    };

    function ef(a) {
        this.o = H(a)
    }
    w(ef, L);

    function ff(a) {
        this.o = H(a)
    }
    w(ff, L);

    function gf(a, b) {
        return K(a, 2, b)
    }

    function hf(a, b) {
        return K(a, 3, b)
    }

    function jf(a, b) {
        return K(a, 4, b)
    }

    function kf(a, b) {
        return K(a, 5, b)
    }

    function lf(a, b) {
        return K(a, 9, b)
    }

    function mf(a, b) {
        var c = a.o,
            d = Kc(c);
        Wc(d);
        if (null != b) {
            for (var e = !!b.length, f = 0; f < b.length; f++) {
                var g = b[f];
                bd(g, ef);
                e = e && !(G(g.o) & 2)
            }
            f = G(b);
            g = f | 1;
            g = (e ? g | 8 : g & -9) | 4;
            g != f && (b = Lc(b, g))
        }
        null == b && (b = void 0);
        td(c, d, 10, b);
        return a
    }

    function nf(a, b) {
        return I(a, 11, null == b ? b : Yc(b))
    }

    function of (a, b) {
        return K(a, 1, b)
    }

    function pf(a, b) {
        return I(a, 7, null == b ? b : Yc(b))
    }
    ff.la = [10, 6];
    var qf = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function rf(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function sf(a) {
        var b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function tf() {
        var a = window;
        if (!sf(a)) return null;
        var b = rf(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(qf).then(function(c) {
            null != b.uach || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function uf(a) {
        var b;
        return nf(mf(kf(gf( of (jf(pf(lf(hf(new ff, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new ef;
            d = K(d, 1, c.brand);
            return K(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function vf() {
        var a, b;
        return null != (b = null == (a = tf()) ? void 0 : a.then(function(c) {
            return uf(c)
        })) ? b : null
    };

    function wf(a, b) {
        this.i = a;
        this.l = b;
        this.h = 0;
        this.g = null
    }
    wf.prototype.get = function() {
        if (0 < this.h) {
            this.h--;
            var a = this.g;
            this.g = a.next;
            a.next = null
        } else a = this.i();
        return a
    };

    function xf(a, b) {
        a.l(b);
        100 > a.h && (a.h++, b.next = a.g, a.g = b)
    };
    var yf;

    function zf() {
        var a = B.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !F("Presto") && (a = function() {
            var e = Kd();
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var g = "callImmediate" + Math.random(),
                h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = Ta(function(k) {
                if (("*" == h || k.origin == h) && k.data == g) this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, h)
                }
            }
        });
        if ("undefined" !== typeof a && !Qb()) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.ec;
                    c.ec = null;
                    e()
                }
            };
            return function(e) {
                d.next = {
                    ec: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            B.setTimeout(e, 0)
        }
    };

    function Af() {
        this.h = this.g = null
    }
    Af.prototype.add = function(a, b) {
        var c = Bf.get();
        c.set(a, b);
        this.h ? this.h.next = c : this.g = c;
        this.h = c
    };
    Af.prototype.remove = function() {
        var a = null;
        this.g && (a = this.g, this.g = this.g.next, this.g || (this.h = null), a.next = null);
        return a
    };
    var Bf = new wf(function() {
        return new Cf
    }, function(a) {
        return a.reset()
    });

    function Cf() {
        this.next = this.scope = this.g = null
    }
    Cf.prototype.set = function(a, b) {
        this.g = a;
        this.scope = b;
        this.next = null
    };
    Cf.prototype.reset = function() {
        this.next = this.scope = this.g = null
    };
    var Df, Ef = !1,
        Ff = new Af;

    function Gf(a, b) {
        Df || Hf();
        Ef || (Df(), Ef = !0);
        Ff.add(a, b)
    }

    function Hf() {
        if (B.Promise && B.Promise.resolve) {
            var a = B.Promise.resolve(void 0);
            Df = function() {
                a.then(If)
            }
        } else Df = function() {
            var b = If;
            "function" !== typeof B.setImmediate || B.Window && B.Window.prototype && (Pb() || !F("Edge")) && B.Window.prototype.setImmediate == B.setImmediate ? (yf || (yf = zf()), yf(b)) : B.setImmediate(b)
        }
    }

    function If() {
        for (var a; a = Ff.remove();) {
            try {
                a.g.call(a.scope)
            } catch (b) {
                bc(b)
            }
            xf(Bf, a)
        }
        Ef = !1
    };

    function Jf(a, b) {
        this.g = a[B.Symbol.iterator]();
        this.h = b
    }
    Jf.prototype[Symbol.iterator] = function() {
        return this
    };
    Jf.prototype.next = function() {
        var a = this.g.next();
        return {
            value: a.done ? void 0 : this.h.call(void 0, a.value),
            done: a.done
        }
    };

    function Kf(a, b) {
        return new Jf(a, b)
    };

    function Lf() {
        this.blockSize = -1
    };

    function Mf() {
        this.blockSize = -1;
        this.blockSize = 64;
        this.g = [];
        this.s = [];
        this.u = [];
        this.i = [];
        this.i[0] = 128;
        for (var a = 1; a < this.blockSize; ++a) this.i[a] = 0;
        this.l = this.h = 0;
        this.reset()
    }
    Ua(Mf, Lf);
    Mf.prototype.reset = function() {
        this.g[0] = 1732584193;
        this.g[1] = 4023233417;
        this.g[2] = 2562383102;
        this.g[3] = 271733878;
        this.g[4] = 3285377520;
        this.l = this.h = 0
    };

    function Nf(a, b, c) {
        c || (c = 0);
        var d = a.u;
        if ("string" === typeof b)
            for (var e = 0; 16 > e; e++) d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4;
        else
            for (e = 0; 16 > e; e++) d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = (f << 1 | f >>> 31) & 4294967295
        }
        b = a.g[0];
        c = a.g[1];
        var g = a.g[2],
            h = a.g[3],
            k = a.g[4];
        for (e = 0; 80 > e; e++) {
            if (40 > e)
                if (20 > e) {
                    f = h ^ c & (g ^ h);
                    var l = 1518500249
                } else f = c ^ g ^ h, l = 1859775393;
            else 60 > e ? (f = c & g | h & (c | g), l = 2400959708) :
                (f = c ^ g ^ h, l = 3395469782);
            f = (b << 5 | b >>> 27) + f + k + l + d[e] & 4294967295;
            k = h;
            h = g;
            g = (c << 30 | c >>> 2) & 4294967295;
            c = b;
            b = f
        }
        a.g[0] = a.g[0] + b & 4294967295;
        a.g[1] = a.g[1] + c & 4294967295;
        a.g[2] = a.g[2] + g & 4294967295;
        a.g[3] = a.g[3] + h & 4294967295;
        a.g[4] = a.g[4] + k & 4294967295
    }
    Mf.prototype.update = function(a, b) {
        if (null != a) {
            void 0 === b && (b = a.length);
            for (var c = b - this.blockSize, d = 0, e = this.s, f = this.h; d < b;) {
                if (0 == f)
                    for (; d <= c;) Nf(this, a, d), d += this.blockSize;
                if ("string" === typeof a)
                    for (; d < b;) {
                        if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.blockSize) {
                            Nf(this, e);
                            f = 0;
                            break
                        }
                    } else
                        for (; d < b;)
                            if (e[f] = a[d], ++f, ++d, f == this.blockSize) {
                                Nf(this, e);
                                f = 0;
                                break
                            }
            }
            this.h = f;
            this.l += b
        }
    };
    Mf.prototype.digest = function() {
        var a = [],
            b = 8 * this.l;
        56 > this.h ? this.update(this.i, 56 - this.h) : this.update(this.i, this.blockSize - (this.h - 56));
        for (var c = this.blockSize - 1; 56 <= c; c--) this.s[c] = b & 255, b /= 256;
        Nf(this, this.s);
        for (c = b = 0; 5 > c; c++)
            for (var d = 24; 0 <= d; d -= 8) a[b] = this.g[c] >> d & 255, ++b;
        return a
    };

    function Of() {}
    Of.prototype.next = function() {
        return Pf
    };
    var Pf = {
        done: !0,
        value: void 0
    };

    function Qf(a) {
        return {
            value: a,
            done: !1
        }
    }
    Of.prototype.ha = function() {
        return this
    };

    function Rf(a) {
        if (a instanceof Sf || a instanceof Tf || a instanceof Uf) return a;
        if ("function" == typeof a.next) return new Sf(function() {
            return a
        });
        if ("function" == typeof a[Symbol.iterator]) return new Sf(function() {
            return a[Symbol.iterator]()
        });
        if ("function" == typeof a.ha) return new Sf(function() {
            return a.ha()
        });
        throw Error("Not an iterator or iterable.");
    }

    function Sf(a) {
        this.h = a
    }
    Sf.prototype.ha = function() {
        return new Tf(this.h())
    };
    Sf.prototype[Symbol.iterator] = function() {
        return new Uf(this.h())
    };
    Sf.prototype.g = function() {
        return new Uf(this.h())
    };

    function Tf(a) {
        this.h = a
    }
    w(Tf, Of);
    Tf.prototype.next = function() {
        return this.h.next()
    };
    Tf.prototype[Symbol.iterator] = function() {
        return new Uf(this.h)
    };
    Tf.prototype.g = function() {
        return new Uf(this.h)
    };

    function Uf(a) {
        Sf.call(this, function() {
            return a
        });
        this.i = a
    }
    w(Uf, Sf);
    Uf.prototype.next = function() {
        return this.i.next()
    };

    function Vf(a, b) {
        this.h = {};
        this.g = [];
        this.i = this.size = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof Vf)
                for (c = Wf(a), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    }

    function Wf(a) {
        Xf(a);
        return a.g.concat()
    }
    r = Vf.prototype;
    r.has = function(a) {
        return Yf(this.h, a)
    };
    r.equals = function(a, b) {
        if (this === a) return !0;
        if (this.size != a.size) return !1;
        b = b || Zf;
        Xf(this);
        for (var c, d = 0; c = this.g[d]; d++)
            if (!b(this.get(c), a.get(c))) return !1;
        return !0
    };

    function Zf(a, b) {
        return a === b
    }
    r.Nb = function() {
        return 0 == this.size
    };
    r.clear = function() {
        this.h = {};
        this.i = this.size = this.g.length = 0
    };
    r.remove = function(a) {
        return this.delete(a)
    };
    r.delete = function(a) {
        return Yf(this.h, a) ? (delete this.h[a], --this.size, this.i++, this.g.length > 2 * this.size && Xf(this), !0) : !1
    };

    function Xf(a) {
        if (a.size != a.g.length) {
            for (var b = 0, c = 0; b < a.g.length;) {
                var d = a.g[b];
                Yf(a.h, d) && (a.g[c++] = d);
                b++
            }
            a.g.length = c
        }
        if (a.size != a.g.length) {
            var e = {};
            for (c = b = 0; b < a.g.length;) d = a.g[b], Yf(e, d) || (a.g[c++] = d, e[d] = 1), b++;
            a.g.length = c
        }
    }
    r.get = function(a, b) {
        return Yf(this.h, a) ? this.h[a] : b
    };
    r.set = function(a, b) {
        Yf(this.h, a) || (this.size += 1, this.g.push(a), this.i++);
        this.h[a] = b
    };
    r.forEach = function(a, b) {
        for (var c = Wf(this), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    r.clone = function() {
        return new Vf(this)
    };
    r.keys = function() {
        return Rf(this.ha(!0)).g()
    };
    r.values = function() {
        return Rf(this.ha(!1)).g()
    };
    r.entries = function() {
        var a = this;
        return Kf(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    r.ha = function(a) {
        Xf(this);
        var b = 0,
            c = this.i,
            d = this,
            e = new Of;
        e.next = function() {
            if (c != d.i) throw Error("The map has changed since the iterator was created");
            if (b >= d.g.length) return Pf;
            var f = d.g[b++];
            return Qf(a ? f : d.h[f])
        };
        return e
    };

    function Yf(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var $f = B.JSON.stringify;

    function ag() {
        var a = this;
        this.promise = new Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };

    function bg(a) {
        this.g = 0;
        this.H = void 0;
        this.l = this.h = this.i = null;
        this.s = this.u = !1;
        if (a != Ya) try {
            var b = this;
            a.call(void 0, function(c) {
                cg(b, 2, c)
            }, function(c) {
                cg(b, 3, c)
            })
        } catch (c) {
            cg(this, 3, c)
        }
    }

    function dg() {
        this.next = this.context = this.h = this.i = this.g = null;
        this.l = !1
    }
    dg.prototype.reset = function() {
        this.context = this.h = this.i = this.g = null;
        this.l = !1
    };
    var eg = new wf(function() {
        return new dg
    }, function(a) {
        a.reset()
    });

    function fg(a, b, c) {
        var d = eg.get();
        d.i = a;
        d.h = b;
        d.context = c;
        return d
    }
    bg.prototype.then = function(a, b, c) {
        return gg(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
    };
    bg.prototype.$goog_Thenable = !0;
    bg.prototype.cancel = function(a) {
        if (0 == this.g) {
            var b = new hg(a);
            Gf(function() {
                ig(this, b)
            }, this)
        }
    };

    function ig(a, b) {
        if (0 == a.g)
            if (a.i) {
                var c = a.i;
                if (c.h) {
                    for (var d = 0, e = null, f = null, g = c.h; g && (g.l || (d++, g.g == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                    e && (0 == c.g && 1 == d ? ig(c, b) : (f ? (d = f, d.next == c.l && (c.l = d), d.next = d.next.next) : jg(c), kg(c, e, 3, b)))
                }
                a.i = null
            } else cg(a, 3, b)
    }

    function lg(a, b) {
        a.h || 2 != a.g && 3 != a.g || mg(a);
        a.l ? a.l.next = b : a.h = b;
        a.l = b
    }

    function gg(a, b, c, d) {
        var e = fg(null, null, null);
        e.g = new bg(function(f, g) {
            e.i = b ? function(h) {
                try {
                    var k = b.call(d, h);
                    f(k)
                } catch (l) {
                    g(l)
                }
            } : f;
            e.h = c ? function(h) {
                try {
                    var k = c.call(d, h);
                    void 0 === k && h instanceof hg ? g(h) : f(k)
                } catch (l) {
                    g(l)
                }
            } : g
        });
        e.g.i = a;
        lg(a, e);
        return e.g
    }
    bg.prototype.W = function(a) {
        this.g = 0;
        cg(this, 2, a)
    };
    bg.prototype.Pa = function(a) {
        this.g = 0;
        cg(this, 3, a)
    };

    function cg(a, b, c) {
        if (0 == a.g) {
            a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
            a.g = 1;
            a: {
                var d = c,
                    e = a.W,
                    f = a.Pa;
                if (d instanceof bg) {
                    lg(d, fg(e || Ya, f || null, a));
                    var g = !0
                } else {
                    if (d) try {
                        var h = !!d.$goog_Thenable
                    } catch (l) {
                        h = !1
                    } else h = !1;
                    if (h) d.then(e, f, a), g = !0;
                    else {
                        if (Ma(d)) try {
                            var k = d.then;
                            if ("function" === typeof k) {
                                ng(d, k, e, f, a);
                                g = !0;
                                break a
                            }
                        } catch (l) {
                            f.call(a, l);
                            g = !0;
                            break a
                        }
                        g = !1
                    }
                }
            }
            g || (a.H = c, a.g = b, a.i = null, mg(a), 3 != b || c instanceof hg || og(a, c))
        }
    }

    function ng(a, b, c, d, e) {
        function f(k) {
            h || (h = !0, d.call(e, k))
        }

        function g(k) {
            h || (h = !0, c.call(e, k))
        }
        var h = !1;
        try {
            b.call(a, g, f)
        } catch (k) {
            f(k)
        }
    }

    function mg(a) {
        a.u || (a.u = !0, Gf(a.N, a))
    }

    function jg(a) {
        var b = null;
        a.h && (b = a.h, a.h = b.next, b.next = null);
        a.h || (a.l = null);
        return b
    }
    bg.prototype.N = function() {
        for (var a; a = jg(this);) kg(this, a, this.g, this.H);
        this.u = !1
    };

    function kg(a, b, c, d) {
        if (3 == c && b.h && !b.l)
            for (; a && a.s; a = a.i) a.s = !1;
        if (b.g) b.g.i = null, pg(b, c, d);
        else try {
            b.l ? b.i.call(b.context) : pg(b, c, d)
        } catch (e) {
            qg.call(null, e)
        }
        xf(eg, b)
    }

    function pg(a, b, c) {
        2 == b ? a.i.call(a.context, c) : a.h && a.h.call(a.context, c)
    }

    function og(a, b) {
        a.s = !0;
        Gf(function() {
            a.s && qg.call(null, b)
        })
    }
    var qg = bc;

    function hg(a) {
        Wa.call(this, a)
    }
    Ua(hg, Wa);
    hg.prototype.name = "cancel";

    function N(a) {
        se.call(this);
        this.H = 1;
        this.l = [];
        this.u = 0;
        this.g = [];
        this.h = {};
        this.N = !!a
    }
    Ua(N, se);
    r = N.prototype;
    r.subscribe = function(a, b, c) {
        var d = this.h[a];
        d || (d = this.h[a] = []);
        var e = this.H;
        this.g[e] = a;
        this.g[e + 1] = b;
        this.g[e + 2] = c;
        this.H = e + 3;
        d.push(e);
        return e
    };

    function rg(a, b, c) {
        var d = sg;
        if (a = d.h[a]) {
            var e = d.g;
            (a = a.find(function(f) {
                return e[f + 1] == b && e[f + 2] == c
            })) && d.qb(a)
        }
    }
    r.qb = function(a) {
        var b = this.g[a];
        if (b) {
            var c = this.h[b];
            0 != this.u ? (this.l.push(a), this.g[a + 1] = function() {}) : (c && db(c, a), delete this.g[a], delete this.g[a + 1], delete this.g[a + 2])
        }
        return !!b
    };
    r.bb = function(a, b) {
        var c = this.h[a];
        if (c) {
            for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
            if (this.N)
                for (e = 0; e < c.length; e++) {
                    var g = c[e];
                    tg(this.g[g + 1], this.g[g + 2], d)
                } else {
                    this.u++;
                    try {
                        for (e = 0, f = c.length; e < f && !this.i; e++) g = c[e], this.g[g + 1].apply(this.g[g + 2], d)
                    } finally {
                        if (this.u--, 0 < this.l.length && 0 == this.u)
                            for (; c = this.l.pop();) this.qb(c)
                    }
                }
            return 0 != e
        }
        return !1
    };

    function tg(a, b, c) {
        Gf(function() {
            a.apply(b, c)
        })
    }
    r.clear = function(a) {
        if (a) {
            var b = this.h[a];
            b && (b.forEach(this.qb, this), delete this.h[a])
        } else this.g.length = 0, this.h = {}
    };
    r.Ga = function() {
        N.ma.Ga.call(this);
        this.clear();
        this.l.length = 0
    };

    function ug(a) {
        this.g = a
    }
    ug.prototype.set = function(a, b) {
        void 0 === b ? this.g.remove(a) : this.g.set(a, $f(b))
    };
    ug.prototype.get = function(a) {
        try {
            var b = this.g.get(a)
        } catch (c) {
            return
        }
        if (null !== b) try {
            return JSON.parse(b)
        } catch (c) {
            throw "Storage: Invalid value was encountered";
        }
    };
    ug.prototype.remove = function(a) {
        this.g.remove(a)
    };

    function vg(a) {
        this.g = a
    }
    Ua(vg, ug);

    function wg(a) {
        this.data = a
    }

    function xg(a) {
        return void 0 === a || a instanceof wg ? a : new wg(a)
    }
    vg.prototype.set = function(a, b) {
        vg.ma.set.call(this, a, xg(b))
    };
    vg.prototype.h = function(a) {
        a = vg.ma.get.call(this, a);
        if (void 0 === a || a instanceof Object) return a;
        throw "Storage: Invalid value was encountered";
    };
    vg.prototype.get = function(a) {
        if (a = this.h(a)) {
            if (a = a.data, void 0 === a) throw "Storage: Invalid value was encountered";
        } else a = void 0;
        return a
    };

    function yg(a) {
        this.g = a
    }
    Ua(yg, vg);
    yg.prototype.set = function(a, b, c) {
        if (b = xg(b)) {
            if (c) {
                if (c < Date.now()) {
                    yg.prototype.remove.call(this, a);
                    return
                }
                b.expiration = c
            }
            b.creation = Date.now()
        }
        yg.ma.set.call(this, a, b)
    };
    yg.prototype.h = function(a) {
        var b = yg.ma.h.call(this, a);
        if (b) {
            var c = b.creation,
                d = b.expiration;
            if (d && d < Date.now() || c && c > Date.now()) yg.prototype.remove.call(this, a);
            else return b
        }
    };

    function zg() {};

    function Ag() {}
    Ua(Ag, zg);
    Ag.prototype[Symbol.iterator] = function() {
        return Rf(this.ha(!0)).g()
    };
    Ag.prototype.clear = function() {
        var a = Array.from(this);
        a = u(a);
        for (var b = a.next(); !b.done; b = a.next()) this.remove(b.value)
    };

    function Bg(a) {
        this.g = a
    }
    Ua(Bg, Ag);
    r = Bg.prototype;
    r.set = function(a, b) {
        try {
            this.g.setItem(a, b)
        } catch (c) {
            if (0 == this.g.length) throw "Storage mechanism: Storage disabled";
            throw "Storage mechanism: Quota exceeded";
        }
    };
    r.get = function(a) {
        a = this.g.getItem(a);
        if ("string" !== typeof a && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a
    };
    r.remove = function(a) {
        this.g.removeItem(a)
    };
    r.ha = function(a) {
        var b = 0,
            c = this.g,
            d = new Of;
        d.next = function() {
            if (b >= c.length) return Pf;
            var e = c.key(b++);
            if (a) return Qf(e);
            e = c.getItem(e);
            if ("string" !== typeof e) throw "Storage mechanism: Invalid value was encountered";
            return Qf(e)
        };
        return d
    };
    r.clear = function() {
        this.g.clear()
    };
    r.key = function(a) {
        return this.g.key(a)
    };

    function Cg() {
        var a = null;
        try {
            a = window.localStorage || null
        } catch (b) {}
        this.g = a
    }
    Ua(Cg, Bg);

    function Dg(a, b) {
        this.h = a;
        this.g = null;
        var c;
        if (c = fc) c = !(9 <= Number(vc));
        if (c) {
            Eg || (Eg = new Vf);
            this.g = Eg.get(a);
            this.g || (b ? this.g = document.getElementById(b) : (this.g = document.createElement("userdata"), this.g.addBehavior("#default#userData"), document.body.appendChild(this.g)), Eg.set(a, this.g));
            try {
                this.g.load(this.h)
            } catch (d) {
                this.g = null
            }
        }
    }
    Ua(Dg, Ag);
    var Fg = {
            ".": ".2E",
            "!": ".21",
            "~": ".7E",
            "*": ".2A",
            "'": ".27",
            "(": ".28",
            ")": ".29",
            "%": "."
        },
        Eg = null;

    function Gg(a) {
        return "_" + encodeURIComponent(a).replace(/[.!~*'()%]/g, function(b) {
            return Fg[b]
        })
    }
    r = Dg.prototype;
    r.set = function(a, b) {
        this.g.setAttribute(Gg(a), b);
        Hg(this)
    };
    r.get = function(a) {
        a = this.g.getAttribute(Gg(a));
        if ("string" !== typeof a && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a
    };
    r.remove = function(a) {
        this.g.removeAttribute(Gg(a));
        Hg(this)
    };
    r.ha = function(a) {
        var b = 0,
            c = this.g.XMLDocument.documentElement.attributes,
            d = new Of;
        d.next = function() {
            if (b >= c.length) return Pf;
            var e = c[b++];
            if (a) return Qf(decodeURIComponent(e.nodeName.replace(/\./g, "%")).slice(1));
            e = e.nodeValue;
            if ("string" !== typeof e) throw "Storage mechanism: Invalid value was encountered";
            return Qf(e)
        };
        return d
    };
    r.clear = function() {
        for (var a = this.g.XMLDocument.documentElement, b = a.attributes.length; 0 < b; b--) a.removeAttribute(a.attributes[b - 1].nodeName);
        Hg(this)
    };

    function Hg(a) {
        try {
            a.g.save(a.h)
        } catch (b) {
            throw "Storage mechanism: Quota exceeded";
        }
    };

    function Ig(a, b) {
        this.h = a;
        this.g = b + "::"
    }
    Ua(Ig, Ag);
    Ig.prototype.set = function(a, b) {
        this.h.set(this.g + a, b)
    };
    Ig.prototype.get = function(a) {
        return this.h.get(this.g + a)
    };
    Ig.prototype.remove = function(a) {
        this.h.remove(this.g + a)
    };
    Ig.prototype.ha = function(a) {
        var b = this.h[Symbol.iterator](),
            c = this,
            d = new Of;
        d.next = function() {
            var e = b.next();
            if (e.done) return e;
            for (e = e.value; e.slice(0, c.g.length) != c.g;) {
                e = b.next();
                if (e.done) return e;
                e = e.value
            }
            return Qf(a ? e.slice(c.g.length) : c.h.get(e))
        };
        return d
    };
    /*

     (The MIT License)

     Copyright (C) 2014 by Vitaly Puzrin

     Permission is hereby granted, free of charge, to any person obtaining a copy
     of this software and associated documentation files (the "Software"), to deal
     in the Software without restriction, including without limitation the rights
     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     copies of the Software, and to permit persons to whom the Software is
     furnished to do so, subject to the following conditions:

     The above copyright notice and this permission notice shall be included in
     all copies or substantial portions of the Software.

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     THE SOFTWARE.

     -----------------------------------------------------------------------------
     Ported from zlib, which is under the following license
     https://github.com/madler/zlib/blob/master/zlib.h

     zlib.h -- interface of the 'zlib' general purpose compression library
       version 1.2.8, April 28th, 2013
       Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
       This software is provided 'as-is', without any express or implied
       warranty.  In no event will the authors be held liable for any damages
       arising from the use of this software.
       Permission is granted to anyone to use this software for any purpose,
       including commercial applications, and to alter it and redistribute it
       freely, subject to the following restrictions:
       1. The origin of this software must not be misrepresented; you must not
          claim that you wrote the original software. If you use this software
          in a product, an acknowledgment in the product documentation would be
          appreciated but is not required.
       2. Altered source versions must be plainly marked as such, and must not be
          misrepresented as being the original software.
       3. This notice may not be removed or altered from any source distribution.
       Jean-loup Gailly        Mark Adler
       jloup@gzip.org          madler@alumni.caltech.edu
       The data format used by the zlib library is described by RFCs (Request for
       Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
       (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
    */
    var P = {},
        Jg = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Int32Array;
    P.assign = function(a) {
        for (var b = Array.prototype.slice.call(arguments, 1); b.length;) {
            var c = b.shift();
            if (c) {
                if ("object" !== typeof c) throw new TypeError(c + "must be non-object");
                for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
        }
        return a
    };
    P.Xb = function(a, b) {
        if (a.length === b) return a;
        if (a.subarray) return a.subarray(0, b);
        a.length = b;
        return a
    };
    var Kg = {
            Ra: function(a, b, c, d, e) {
                if (b.subarray && a.subarray) a.set(b.subarray(c, c + d), e);
                else
                    for (var f = 0; f < d; f++) a[e + f] = b[c + f]
            },
            jc: function(a) {
                var b, c;
                var d = c = 0;
                for (b = a.length; d < b; d++) c += a[d].length;
                var e = new Uint8Array(c);
                d = c = 0;
                for (b = a.length; d < b; d++) {
                    var f = a[d];
                    e.set(f, c);
                    c += f.length
                }
                return e
            }
        },
        Lg = {
            Ra: function(a, b, c, d, e) {
                for (var f = 0; f < d; f++) a[e + f] = b[c + f]
            },
            jc: function(a) {
                return [].concat.apply([], a)
            }
        };
    P.pd = function() {
        Jg ? (P.Qa = Uint8Array, P.na = Uint16Array, P.Jc = Int32Array, P.assign(P, Kg)) : (P.Qa = Array, P.na = Array, P.Jc = Array, P.assign(P, Lg))
    };
    P.pd();
    var Mg = !0;
    try {
        new Uint8Array(1)
    } catch (a) {
        Mg = !1
    }

    function Ng(a) {
        var b, c, d = a.length,
            e = 0;
        for (b = 0; b < d; b++) {
            var f = a.charCodeAt(b);
            if (55296 === (f & 64512) && b + 1 < d) {
                var g = a.charCodeAt(b + 1);
                56320 === (g & 64512) && (f = 65536 + (f - 55296 << 10) + (g - 56320), b++)
            }
            e += 128 > f ? 1 : 2048 > f ? 2 : 65536 > f ? 3 : 4
        }
        var h = new P.Qa(e);
        for (b = c = 0; c < e; b++) f = a.charCodeAt(b), 55296 === (f & 64512) && b + 1 < d && (g = a.charCodeAt(b + 1), 56320 === (g & 64512) && (f = 65536 + (f - 55296 << 10) + (g - 56320), b++)), 128 > f ? h[c++] = f : (2048 > f ? h[c++] = 192 | f >>> 6 : (65536 > f ? h[c++] = 224 | f >>> 12 : (h[c++] = 240 | f >>> 18, h[c++] = 128 | f >>> 12 & 63), h[c++] = 128 | f >>>
            6 & 63), h[c++] = 128 | f & 63);
        return h
    };
    var Og = {};
    Og = function(a, b, c, d) {
        var e = a & 65535 | 0;
        a = a >>> 16 & 65535 | 0;
        for (var f; 0 !== c;) {
            f = 2E3 < c ? 2E3 : c;
            c -= f;
            do e = e + b[d++] | 0, a = a + e | 0; while (--f);
            e %= 65521;
            a %= 65521
        }
        return e | a << 16 | 0
    };
    for (var Pg = {}, Qg, Rg = [], Sg = 0; 256 > Sg; Sg++) {
        Qg = Sg;
        for (var Tg = 0; 8 > Tg; Tg++) Qg = Qg & 1 ? 3988292384 ^ Qg >>> 1 : Qg >>> 1;
        Rg[Sg] = Qg
    }
    Pg = function(a, b, c, d) {
        c = d + c;
        for (a ^= -1; d < c; d++) a = a >>> 8 ^ Rg[(a ^ b[d]) & 255];
        return a ^ -1
    };
    var Ug = {};
    Ug = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version"
    };

    function Vg(a) {
        for (var b = a.length; 0 <= --b;) a[b] = 0
    }
    var Wg = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
        Xg = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
        Yg = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
        Zg = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        $g = Array(576);
    Vg($g);
    var ah = Array(60);
    Vg(ah);
    var bh = Array(512);
    Vg(bh);
    var ch = Array(256);
    Vg(ch);
    var dh = Array(29);
    Vg(dh);
    var eh = Array(30);
    Vg(eh);

    function fh(a, b, c, d, e) {
        this.Ec = a;
        this.Vc = b;
        this.Uc = c;
        this.Sc = d;
        this.ld = e;
        this.mc = a && a.length
    }
    var gh, hh, Dh;

    function Eh(a, b) {
        this.hc = a;
        this.Ya = 0;
        this.Ba = b
    }

    function Fh(a, b) {
        a.K[a.pending++] = b & 255;
        a.K[a.pending++] = b >>> 8 & 255
    }

    function Gh(a, b, c) {
        a.O > 16 - c ? (a.U |= b << a.O & 65535, Fh(a, a.U), a.U = b >> 16 - a.O, a.O += c - 16) : (a.U |= b << a.O & 65535, a.O += c)
    }

    function Hh(a, b, c) {
        Gh(a, c[2 * b], c[2 * b + 1])
    }

    function Ih(a, b) {
        var c = 0;
        do c |= a & 1, a >>>= 1, c <<= 1; while (0 < --b);
        return c >>> 1
    }

    function Jh(a, b, c) {
        var d = Array(16),
            e = 0,
            f;
        for (f = 1; 15 >= f; f++) d[f] = e = e + c[f - 1] << 1;
        for (c = 0; c <= b; c++) e = a[2 * c + 1], 0 !== e && (a[2 * c] = Ih(d[e]++, e))
    }

    function Kh(a) {
        var b;
        for (b = 0; 286 > b; b++) a.X[2 * b] = 0;
        for (b = 0; 30 > b; b++) a.Ha[2 * b] = 0;
        for (b = 0; 19 > b; b++) a.R[2 * b] = 0;
        a.X[512] = 1;
        a.va = a.cb = 0;
        a.ca = a.matches = 0
    }

    function Lh(a) {
        8 < a.O ? Fh(a, a.U) : 0 < a.O && (a.K[a.pending++] = a.U);
        a.U = 0;
        a.O = 0
    }

    function Mh(a, b, c) {
        Lh(a);
        Fh(a, c);
        Fh(a, ~c);
        P.Ra(a.K, a.window, b, c, a.pending);
        a.pending += c
    }

    function Nh(a, b, c, d) {
        var e = 2 * b,
            f = 2 * c;
        return a[e] < a[f] || a[e] === a[f] && d[b] <= d[c]
    }

    function Oh(a, b, c) {
        for (var d = a.L[c], e = c << 1; e <= a.ta;) {
            e < a.ta && Nh(b, a.L[e + 1], a.L[e], a.depth) && e++;
            if (Nh(b, d, a.L[e], a.depth)) break;
            a.L[c] = a.L[e];
            c = e;
            e <<= 1
        }
        a.L[c] = d
    }

    function Ph(a, b, c) {
        var d = 0;
        if (0 !== a.ca) {
            do {
                var e = a.K[a.hb + 2 * d] << 8 | a.K[a.hb + 2 * d + 1];
                var f = a.K[a.Pb + d];
                d++;
                if (0 === e) Hh(a, f, b);
                else {
                    var g = ch[f];
                    Hh(a, g + 256 + 1, b);
                    var h = Wg[g];
                    0 !== h && (f -= dh[g], Gh(a, f, h));
                    e--;
                    g = 256 > e ? bh[e] : bh[256 + (e >>> 7)];
                    Hh(a, g, c);
                    h = Xg[g];
                    0 !== h && (e -= eh[g], Gh(a, e, h))
                }
            } while (d < a.ca)
        }
        Hh(a, 256, b)
    }

    function Qh(a, b) {
        var c = b.hc,
            d = b.Ba.Ec,
            e = b.Ba.mc,
            f = b.Ba.Sc,
            g, h = -1;
        a.ta = 0;
        a.Ua = 573;
        for (g = 0; g < f; g++) 0 !== c[2 * g] ? (a.L[++a.ta] = h = g, a.depth[g] = 0) : c[2 * g + 1] = 0;
        for (; 2 > a.ta;) {
            var k = a.L[++a.ta] = 2 > h ? ++h : 0;
            c[2 * k] = 1;
            a.depth[k] = 0;
            a.va--;
            e && (a.cb -= d[2 * k + 1])
        }
        b.Ya = h;
        for (g = a.ta >> 1; 1 <= g; g--) Oh(a, c, g);
        k = f;
        do g = a.L[1], a.L[1] = a.L[a.ta--], Oh(a, c, 1), d = a.L[1], a.L[--a.Ua] = g, a.L[--a.Ua] = d, c[2 * k] = c[2 * g] + c[2 * d], a.depth[k] = (a.depth[g] >= a.depth[d] ? a.depth[g] : a.depth[d]) + 1, c[2 * g + 1] = c[2 * d + 1] = k, a.L[1] = k++, Oh(a, c, 1); while (2 <= a.ta);
        a.L[--a.Ua] =
            a.L[1];
        g = b.hc;
        k = b.Ya;
        d = b.Ba.Ec;
        e = b.Ba.mc;
        f = b.Ba.Vc;
        var l = b.Ba.Uc,
            m = b.Ba.ld,
            n, q = 0;
        for (n = 0; 15 >= n; n++) a.pa[n] = 0;
        g[2 * a.L[a.Ua] + 1] = 0;
        for (b = a.Ua + 1; 573 > b; b++) {
            var p = a.L[b];
            n = g[2 * g[2 * p + 1] + 1] + 1;
            n > m && (n = m, q++);
            g[2 * p + 1] = n;
            if (!(p > k)) {
                a.pa[n]++;
                var x = 0;
                p >= l && (x = f[p - l]);
                var y = g[2 * p];
                a.va += y * (n + x);
                e && (a.cb += y * (d[2 * p + 1] + x))
            }
        }
        if (0 !== q) {
            do {
                for (n = m - 1; 0 === a.pa[n];) n--;
                a.pa[n]--;
                a.pa[n + 1] += 2;
                a.pa[m]--;
                q -= 2
            } while (0 < q);
            for (n = m; 0 !== n; n--)
                for (p = a.pa[n]; 0 !== p;) d = a.L[--b], d > k || (g[2 * d + 1] !== n && (a.va += (n - g[2 * d + 1]) * g[2 * d], g[2 *
                    d + 1] = n), p--)
        }
        Jh(c, h, a.pa)
    }

    function Rh(a, b, c) {
        var d, e = -1,
            f = b[1],
            g = 0,
            h = 7,
            k = 4;
        0 === f && (h = 138, k = 3);
        b[2 * (c + 1) + 1] = 65535;
        for (d = 0; d <= c; d++) {
            var l = f;
            f = b[2 * (d + 1) + 1];
            ++g < h && l === f || (g < k ? a.R[2 * l] += g : 0 !== l ? (l !== e && a.R[2 * l]++, a.R[32]++) : 10 >= g ? a.R[34]++ : a.R[36]++, g = 0, e = l, 0 === f ? (h = 138, k = 3) : l === f ? (h = 6, k = 3) : (h = 7, k = 4))
        }
    }

    function Sh(a, b, c) {
        var d, e = -1,
            f = b[1],
            g = 0,
            h = 7,
            k = 4;
        0 === f && (h = 138, k = 3);
        for (d = 0; d <= c; d++) {
            var l = f;
            f = b[2 * (d + 1) + 1];
            if (!(++g < h && l === f)) {
                if (g < k) {
                    do Hh(a, l, a.R); while (0 !== --g)
                } else 0 !== l ? (l !== e && (Hh(a, l, a.R), g--), Hh(a, 16, a.R), Gh(a, g - 3, 2)) : 10 >= g ? (Hh(a, 17, a.R), Gh(a, g - 3, 3)) : (Hh(a, 18, a.R), Gh(a, g - 11, 7));
                g = 0;
                e = l;
                0 === f ? (h = 138, k = 3) : l === f ? (h = 6, k = 3) : (h = 7, k = 4)
            }
        }
    }

    function Th(a) {
        var b = 4093624447,
            c;
        for (c = 0; 31 >= c; c++, b >>>= 1)
            if (b & 1 && 0 !== a.X[2 * c]) return 0;
        if (0 !== a.X[18] || 0 !== a.X[20] || 0 !== a.X[26]) return 1;
        for (c = 32; 256 > c; c++)
            if (0 !== a.X[2 * c]) return 1;
        return 0
    }
    var Uh = !1;

    function Vh(a, b, c) {
        a.K[a.hb + 2 * a.ca] = b >>> 8 & 255;
        a.K[a.hb + 2 * a.ca + 1] = b & 255;
        a.K[a.Pb + a.ca] = c & 255;
        a.ca++;
        0 === b ? a.X[2 * c]++ : (a.matches++, b--, a.X[2 * (ch[c] + 256 + 1)]++, a.Ha[2 * (256 > b ? bh[b] : bh[256 + (b >>> 7)])]++);
        return a.ca === a.kb - 1
    };

    function Wh(a, b) {
        a.msg = Ug[b];
        return b
    }

    function Xh(a) {
        for (var b = a.length; 0 <= --b;) a[b] = 0
    }

    function Yh(a) {
        var b = a.state,
            c = b.pending;
        c > a.F && (c = a.F);
        0 !== c && (P.Ra(a.lb, b.K, b.nb, c, a.Za), a.Za += c, b.nb += c, a.Yb += c, a.F -= c, b.pending -= c, 0 === b.pending && (b.nb = 0))
    }

    function R(a, b) {
        var c = 0 <= a.Z ? a.Z : -1,
            d = a.j - a.Z,
            e = 0;
        if (0 < a.level) {
            2 === a.C.Kb && (a.C.Kb = Th(a));
            Qh(a, a.zb);
            Qh(a, a.vb);
            Rh(a, a.X, a.zb.Ya);
            Rh(a, a.Ha, a.vb.Ya);
            Qh(a, a.cc);
            for (e = 18; 3 <= e && 0 === a.R[2 * Zg[e] + 1]; e--);
            a.va += 3 * (e + 1) + 14;
            var f = a.va + 3 + 7 >>> 3;
            var g = a.cb + 3 + 7 >>> 3;
            g <= f && (f = g)
        } else f = g = d + 5;
        if (d + 4 <= f && -1 !== c) Gh(a, b ? 1 : 0, 3), Mh(a, c, d);
        else if (4 === a.strategy || g === f) Gh(a, 2 + (b ? 1 : 0), 3), Ph(a, $g, ah);
        else {
            Gh(a, 4 + (b ? 1 : 0), 3);
            c = a.zb.Ya + 1;
            d = a.vb.Ya + 1;
            e += 1;
            Gh(a, c - 257, 5);
            Gh(a, d - 1, 5);
            Gh(a, e - 4, 4);
            for (f = 0; f < e; f++) Gh(a, a.R[2 * Zg[f] +
                1], 3);
            Sh(a, a.X, c - 1);
            Sh(a, a.Ha, d - 1);
            Ph(a, a.X, a.Ha)
        }
        Kh(a);
        b && Lh(a);
        a.Z = a.j;
        Yh(a.C)
    }

    function S(a, b) {
        a.K[a.pending++] = b
    }

    function Zh(a, b) {
        a.K[a.pending++] = b >>> 8 & 255;
        a.K[a.pending++] = b & 255
    }

    function $h(a, b) {
        var c = a.uc,
            d = a.j,
            e = a.aa,
            f = a.wc,
            g = a.j > a.S - 262 ? a.j - (a.S - 262) : 0,
            h = a.window,
            k = a.Da,
            l = a.ka,
            m = a.j + 258,
            n = h[d + e - 1],
            q = h[d + e];
        a.aa >= a.lc && (c >>= 2);
        f > a.m && (f = a.m);
        do {
            var p = b;
            if (h[p + e] === q && h[p + e - 1] === n && h[p] === h[d] && h[++p] === h[d + 1]) {
                d += 2;
                for (p++; h[++d] === h[++p] && h[++d] === h[++p] && h[++d] === h[++p] && h[++d] === h[++p] && h[++d] === h[++p] && h[++d] === h[++p] && h[++d] === h[++p] && h[++d] === h[++p] && d < m;);
                p = 258 - (m - d);
                d = m - 258;
                if (p > e) {
                    a.Xa = b;
                    e = p;
                    if (p >= f) break;
                    n = h[d + e - 1];
                    q = h[d + e]
                }
            }
        } while ((b = l[b & k]) > g && 0 !== --c);
        return e <=
            a.m ? e : a.m
    }

    function ai(a) {
        var b = a.S,
            c;
        do {
            var d = a.Gc - a.m - a.j;
            if (a.j >= b + (b - 262)) {
                P.Ra(a.window, a.window, b, b, 0);
                a.Xa -= b;
                a.j -= b;
                a.Z -= b;
                var e = c = a.yb;
                do {
                    var f = a.head[--e];
                    a.head[e] = f >= b ? f - b : 0
                } while (--c);
                e = c = b;
                do f = a.ka[--e], a.ka[e] = f >= b ? f - b : 0; while (--c);
                d += b
            }
            if (0 === a.C.T) break;
            e = a.C;
            c = a.window;
            f = a.j + a.m;
            var g = e.T;
            g > d && (g = d);
            0 === g ? c = 0 : (e.T -= g, P.Ra(c, e.input, e.Na, g, f), 1 === e.state.wrap ? e.A = Og(e.A, c, g, f) : 2 === e.state.wrap && (e.A = Pg(e.A, c, g, f)), e.Na += g, e.Oa += g, c = g);
            a.m += c;
            if (3 <= a.m + a.Y)
                for (d = a.j - a.Y, a.D = a.window[d], a.D =
                    (a.D << a.sa ^ a.window[d + 1]) & a.ra; a.Y && !(a.D = (a.D << a.sa ^ a.window[d + 3 - 1]) & a.ra, a.ka[d & a.Da] = a.head[a.D], a.head[a.D] = d, d++, a.Y--, 3 > a.m + a.Y););
        } while (262 > a.m && 0 !== a.C.T)
    }

    function bi(a, b) {
        for (var c;;) {
            if (262 > a.m) {
                ai(a);
                if (262 > a.m && 0 === b) return 1;
                if (0 === a.m) break
            }
            c = 0;
            3 <= a.m && (a.D = (a.D << a.sa ^ a.window[a.j + 3 - 1]) & a.ra, c = a.ka[a.j & a.Da] = a.head[a.D], a.head[a.D] = a.j);
            0 !== c && a.j - c <= a.S - 262 && (a.G = $h(a, c));
            if (3 <= a.G)
                if (c = Vh(a, a.j - a.Xa, a.G - 3), a.m -= a.G, a.G <= a.Rb && 3 <= a.m) {
                    a.G--;
                    do a.j++, a.D = (a.D << a.sa ^ a.window[a.j + 3 - 1]) & a.ra, a.ka[a.j & a.Da] = a.head[a.D], a.head[a.D] = a.j; while (0 !== --a.G);
                    a.j++
                } else a.j += a.G, a.G = 0, a.D = a.window[a.j], a.D = (a.D << a.sa ^ a.window[a.j + 1]) & a.ra;
            else c = Vh(a, 0, a.window[a.j]),
                a.m--, a.j++;
            if (c && (R(a, !1), 0 === a.C.F)) return 1
        }
        a.Y = 2 > a.j ? a.j : 2;
        return 4 === b ? (R(a, !0), 0 === a.C.F ? 3 : 4) : a.ca && (R(a, !1), 0 === a.C.F) ? 1 : 2
    }

    function ci(a, b) {
        for (var c, d;;) {
            if (262 > a.m) {
                ai(a);
                if (262 > a.m && 0 === b) return 1;
                if (0 === a.m) break
            }
            c = 0;
            3 <= a.m && (a.D = (a.D << a.sa ^ a.window[a.j + 3 - 1]) & a.ra, c = a.ka[a.j & a.Da] = a.head[a.D], a.head[a.D] = a.j);
            a.aa = a.G;
            a.zc = a.Xa;
            a.G = 2;
            0 !== c && a.aa < a.Rb && a.j - c <= a.S - 262 && (a.G = $h(a, c), 5 >= a.G && (1 === a.strategy || 3 === a.G && 4096 < a.j - a.Xa) && (a.G = 2));
            if (3 <= a.aa && a.G <= a.aa) {
                d = a.j + a.m - 3;
                c = Vh(a, a.j - 1 - a.zc, a.aa - 3);
                a.m -= a.aa - 1;
                a.aa -= 2;
                do ++a.j <= d && (a.D = (a.D << a.sa ^ a.window[a.j + 3 - 1]) & a.ra, a.ka[a.j & a.Da] = a.head[a.D], a.head[a.D] = a.j); while (0 !==
                    --a.aa);
                a.La = 0;
                a.G = 2;
                a.j++;
                if (c && (R(a, !1), 0 === a.C.F)) return 1
            } else if (a.La) {
                if ((c = Vh(a, 0, a.window[a.j - 1])) && R(a, !1), a.j++, a.m--, 0 === a.C.F) return 1
            } else a.La = 1, a.j++, a.m--
        }
        a.La && (Vh(a, 0, a.window[a.j - 1]), a.La = 0);
        a.Y = 2 > a.j ? a.j : 2;
        return 4 === b ? (R(a, !0), 0 === a.C.F ? 3 : 4) : a.ca && (R(a, !1), 0 === a.C.F) ? 1 : 2
    }

    function di(a, b) {
        for (var c, d, e, f = a.window;;) {
            if (258 >= a.m) {
                ai(a);
                if (258 >= a.m && 0 === b) return 1;
                if (0 === a.m) break
            }
            a.G = 0;
            if (3 <= a.m && 0 < a.j && (d = a.j - 1, c = f[d], c === f[++d] && c === f[++d] && c === f[++d])) {
                for (e = a.j + 258; c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && d < e;);
                a.G = 258 - (e - d);
                a.G > a.m && (a.G = a.m)
            }
            3 <= a.G ? (c = Vh(a, 1, a.G - 3), a.m -= a.G, a.j += a.G, a.G = 0) : (c = Vh(a, 0, a.window[a.j]), a.m--, a.j++);
            if (c && (R(a, !1), 0 === a.C.F)) return 1
        }
        a.Y = 0;
        return 4 === b ? (R(a, !0), 0 === a.C.F ? 3 : 4) : a.ca &&
            (R(a, !1), 0 === a.C.F) ? 1 : 2
    }

    function ei(a, b) {
        for (var c;;) {
            if (0 === a.m && (ai(a), 0 === a.m)) {
                if (0 === b) return 1;
                break
            }
            a.G = 0;
            c = Vh(a, 0, a.window[a.j]);
            a.m--;
            a.j++;
            if (c && (R(a, !1), 0 === a.C.F)) return 1
        }
        a.Y = 0;
        return 4 === b ? (R(a, !0), 0 === a.C.F ? 3 : 4) : a.ca && (R(a, !1), 0 === a.C.F) ? 1 : 2
    }

    function fi(a, b, c, d, e) {
        this.Yc = a;
        this.kd = b;
        this.nd = c;
        this.jd = d;
        this.Wc = e
    }
    var gi;
    gi = [new fi(0, 0, 0, 0, function(a, b) {
            var c = 65535;
            for (c > a.da - 5 && (c = a.da - 5);;) {
                if (1 >= a.m) {
                    ai(a);
                    if (0 === a.m && 0 === b) return 1;
                    if (0 === a.m) break
                }
                a.j += a.m;
                a.m = 0;
                var d = a.Z + c;
                if (0 === a.j || a.j >= d)
                    if (a.m = a.j - d, a.j = d, R(a, !1), 0 === a.C.F) return 1;
                if (a.j - a.Z >= a.S - 262 && (R(a, !1), 0 === a.C.F)) return 1
            }
            a.Y = 0;
            if (4 === b) return R(a, !0), 0 === a.C.F ? 3 : 4;
            a.j > a.Z && R(a, !1);
            return 1
        }),
        new fi(4, 4, 8, 4, bi), new fi(4, 5, 16, 8, bi), new fi(4, 6, 32, 32, bi), new fi(4, 4, 16, 16, ci), new fi(8, 16, 32, 32, ci), new fi(8, 16, 128, 128, ci), new fi(8, 32, 128, 256, ci), new fi(32, 128, 258, 1024, ci), new fi(32, 258, 258, 4096, ci)
    ];

    function hi() {
        this.C = null;
        this.status = 0;
        this.K = null;
        this.wrap = this.pending = this.nb = this.da = 0;
        this.v = null;
        this.ea = 0;
        this.method = 8;
        this.Va = -1;
        this.Da = this.Zb = this.S = 0;
        this.window = null;
        this.Gc = 0;
        this.head = this.ka = null;
        this.wc = this.lc = this.strategy = this.level = this.Rb = this.uc = this.aa = this.m = this.Xa = this.j = this.La = this.zc = this.G = this.Z = this.sa = this.ra = this.Lb = this.yb = this.D = 0;
        this.X = new P.na(1146);
        this.Ha = new P.na(122);
        this.R = new P.na(78);
        Xh(this.X);
        Xh(this.Ha);
        Xh(this.R);
        this.cc = this.vb = this.zb = null;
        this.pa =
            new P.na(16);
        this.L = new P.na(573);
        Xh(this.L);
        this.Ua = this.ta = 0;
        this.depth = new P.na(573);
        Xh(this.depth);
        this.O = this.U = this.Y = this.matches = this.cb = this.va = this.hb = this.ca = this.kb = this.Pb = 0
    }

    function ii(a, b) {
        if (!a || !a.state || 5 < b || 0 > b) return a ? Wh(a, -2) : -2;
        var c = a.state;
        if (!a.lb || !a.input && 0 !== a.T || 666 === c.status && 4 !== b) return Wh(a, 0 === a.F ? -5 : -2);
        c.C = a;
        var d = c.Va;
        c.Va = b;
        if (42 === c.status)
            if (2 === c.wrap) a.A = 0, S(c, 31), S(c, 139), S(c, 8), c.v ? (S(c, (c.v.text ? 1 : 0) + (c.v.za ? 2 : 0) + (c.v.ya ? 4 : 0) + (c.v.name ? 8 : 0) + (c.v.comment ? 16 : 0)), S(c, c.v.time & 255), S(c, c.v.time >> 8 & 255), S(c, c.v.time >> 16 & 255), S(c, c.v.time >> 24 & 255), S(c, 9 === c.level ? 2 : 2 <= c.strategy || 2 > c.level ? 4 : 0), S(c, c.v.ee & 255), c.v.ya && c.v.ya.length && (S(c,
                c.v.ya.length & 255), S(c, c.v.ya.length >> 8 & 255)), c.v.za && (a.A = Pg(a.A, c.K, c.pending, 0)), c.ea = 0, c.status = 69) : (S(c, 0), S(c, 0), S(c, 0), S(c, 0), S(c, 0), S(c, 9 === c.level ? 2 : 2 <= c.strategy || 2 > c.level ? 4 : 0), S(c, 3), c.status = 113);
            else {
                var e = 8 + (c.Zb - 8 << 4) << 8;
                e |= (2 <= c.strategy || 2 > c.level ? 0 : 6 > c.level ? 1 : 6 === c.level ? 2 : 3) << 6;
                0 !== c.j && (e |= 32);
                c.status = 113;
                Zh(c, e + (31 - e % 31));
                0 !== c.j && (Zh(c, a.A >>> 16), Zh(c, a.A & 65535));
                a.A = 1
            }
        if (69 === c.status)
            if (c.v.ya) {
                for (e = c.pending; c.ea < (c.v.ya.length & 65535) && (c.pending !== c.da || (c.v.za && c.pending >
                        e && (a.A = Pg(a.A, c.K, c.pending - e, e)), Yh(a), e = c.pending, c.pending !== c.da));) S(c, c.v.ya[c.ea] & 255), c.ea++;
                c.v.za && c.pending > e && (a.A = Pg(a.A, c.K, c.pending - e, e));
                c.ea === c.v.ya.length && (c.ea = 0, c.status = 73)
            } else c.status = 73;
        if (73 === c.status)
            if (c.v.name) {
                e = c.pending;
                do {
                    if (c.pending === c.da && (c.v.za && c.pending > e && (a.A = Pg(a.A, c.K, c.pending - e, e)), Yh(a), e = c.pending, c.pending === c.da)) {
                        var f = 1;
                        break
                    }
                    f = c.ea < c.v.name.length ? c.v.name.charCodeAt(c.ea++) & 255 : 0;
                    S(c, f)
                } while (0 !== f);
                c.v.za && c.pending > e && (a.A = Pg(a.A, c.K, c.pending -
                    e, e));
                0 === f && (c.ea = 0, c.status = 91)
            } else c.status = 91;
        if (91 === c.status)
            if (c.v.comment) {
                e = c.pending;
                do {
                    if (c.pending === c.da && (c.v.za && c.pending > e && (a.A = Pg(a.A, c.K, c.pending - e, e)), Yh(a), e = c.pending, c.pending === c.da)) {
                        f = 1;
                        break
                    }
                    f = c.ea < c.v.comment.length ? c.v.comment.charCodeAt(c.ea++) & 255 : 0;
                    S(c, f)
                } while (0 !== f);
                c.v.za && c.pending > e && (a.A = Pg(a.A, c.K, c.pending - e, e));
                0 === f && (c.status = 103)
            } else c.status = 103;
        103 === c.status && (c.v.za ? (c.pending + 2 > c.da && Yh(a), c.pending + 2 <= c.da && (S(c, a.A & 255), S(c, a.A >> 8 & 255), a.A = 0,
            c.status = 113)) : c.status = 113);
        if (0 !== c.pending) {
            if (Yh(a), 0 === a.F) return c.Va = -1, 0
        } else if (0 === a.T && (b << 1) - (4 < b ? 9 : 0) <= (d << 1) - (4 < d ? 9 : 0) && 4 !== b) return Wh(a, -5);
        if (666 === c.status && 0 !== a.T) return Wh(a, -5);
        if (0 !== a.T || 0 !== c.m || 0 !== b && 666 !== c.status) {
            d = 2 === c.strategy ? ei(c, b) : 3 === c.strategy ? di(c, b) : gi[c.level].Wc(c, b);
            if (3 === d || 4 === d) c.status = 666;
            if (1 === d || 3 === d) return 0 === a.F && (c.Va = -1), 0;
            if (2 === d && (1 === b ? (Gh(c, 2, 3), Hh(c, 256, $g), 16 === c.O ? (Fh(c, c.U), c.U = 0, c.O = 0) : 8 <= c.O && (c.K[c.pending++] = c.U & 255, c.U >>= 8, c.O -=
                    8)) : 5 !== b && (Gh(c, 0, 3), Mh(c, 0, 0), 3 === b && (Xh(c.head), 0 === c.m && (c.j = 0, c.Z = 0, c.Y = 0))), Yh(a), 0 === a.F)) return c.Va = -1, 0
        }
        if (4 !== b) return 0;
        if (0 >= c.wrap) return 1;
        2 === c.wrap ? (S(c, a.A & 255), S(c, a.A >> 8 & 255), S(c, a.A >> 16 & 255), S(c, a.A >> 24 & 255), S(c, a.Oa & 255), S(c, a.Oa >> 8 & 255), S(c, a.Oa >> 16 & 255), S(c, a.Oa >> 24 & 255)) : (Zh(c, a.A >>> 16), Zh(c, a.A & 65535));
        Yh(a);
        0 < c.wrap && (c.wrap = -c.wrap);
        return 0 !== c.pending ? 0 : 1
    };
    var ji = {};
    ji = function() {
        this.input = null;
        this.Oa = this.T = this.Na = 0;
        this.lb = null;
        this.Yb = this.F = this.Za = 0;
        this.msg = "";
        this.state = null;
        this.Kb = 2;
        this.A = 0
    };
    var ki = Object.prototype.toString;

    function li(a) {
        if (!(this instanceof li)) return new li(a);
        a = this.options = P.assign({
            level: -1,
            method: 8,
            chunkSize: 16384,
            Ea: 15,
            md: 8,
            strategy: 0,
            Ca: ""
        }, a || {});
        a.raw && 0 < a.Ea ? a.Ea = -a.Ea : a.Zc && 0 < a.Ea && 16 > a.Ea && (a.Ea += 16);
        this.err = 0;
        this.msg = "";
        this.ended = !1;
        this.chunks = [];
        this.C = new ji;
        this.C.F = 0;
        var b = this.C;
        var c = a.level,
            d = a.method,
            e = a.Ea,
            f = a.md,
            g = a.strategy;
        if (b) {
            var h = 1; - 1 === c && (c = 6);
            0 > e ? (h = 0, e = -e) : 15 < e && (h = 2, e -= 16);
            if (1 > f || 9 < f || 8 !== d || 8 > e || 15 < e || 0 > c || 9 < c || 0 > g || 4 < g) b = Wh(b, -2);
            else {
                8 === e && (e = 9);
                var k = new hi;
                b.state = k;
                k.C = b;
                k.wrap = h;
                k.v = null;
                k.Zb = e;
                k.S = 1 << k.Zb;
                k.Da = k.S - 1;
                k.Lb = f + 7;
                k.yb = 1 << k.Lb;
                k.ra = k.yb - 1;
                k.sa = ~~((k.Lb + 3 - 1) / 3);
                k.window = new P.Qa(2 * k.S);
                k.head = new P.na(k.yb);
                k.ka = new P.na(k.S);
                k.kb = 1 << f + 6;
                k.da = 4 * k.kb;
                k.K = new P.Qa(k.da);
                k.hb = 1 * k.kb;
                k.Pb = 3 * k.kb;
                k.level = c;
                k.strategy = g;
                k.method = d;
                if (b && b.state) {
                    b.Oa = b.Yb = 0;
                    b.Kb = 2;
                    c = b.state;
                    c.pending = 0;
                    c.nb = 0;
                    0 > c.wrap && (c.wrap = -c.wrap);
                    c.status = c.wrap ? 42 : 113;
                    b.A = 2 === c.wrap ? 0 : 1;
                    c.Va = 0;
                    if (!Uh) {
                        d = Array(16);
                        for (f = g = 0; 28 > f; f++)
                            for (dh[f] = g, e = 0; e < 1 << Wg[f]; e++) ch[g++] =
                                f;
                        ch[g - 1] = f;
                        for (f = g = 0; 16 > f; f++)
                            for (eh[f] = g, e = 0; e < 1 << Xg[f]; e++) bh[g++] = f;
                        for (g >>= 7; 30 > f; f++)
                            for (eh[f] = g << 7, e = 0; e < 1 << Xg[f] - 7; e++) bh[256 + g++] = f;
                        for (e = 0; 15 >= e; e++) d[e] = 0;
                        for (e = 0; 143 >= e;) $g[2 * e + 1] = 8, e++, d[8]++;
                        for (; 255 >= e;) $g[2 * e + 1] = 9, e++, d[9]++;
                        for (; 279 >= e;) $g[2 * e + 1] = 7, e++, d[7]++;
                        for (; 287 >= e;) $g[2 * e + 1] = 8, e++, d[8]++;
                        Jh($g, 287, d);
                        for (e = 0; 30 > e; e++) ah[2 * e + 1] = 5, ah[2 * e] = Ih(e, 5);
                        gh = new fh($g, Wg, 257, 286, 15);
                        hh = new fh(ah, Xg, 0, 30, 15);
                        Dh = new fh([], Yg, 0, 19, 7);
                        Uh = !0
                    }
                    c.zb = new Eh(c.X, gh);
                    c.vb = new Eh(c.Ha, hh);
                    c.cc = new Eh(c.R,
                        Dh);
                    c.U = 0;
                    c.O = 0;
                    Kh(c);
                    c = 0
                } else c = Wh(b, -2);
                0 === c && (b = b.state, b.Gc = 2 * b.S, Xh(b.head), b.Rb = gi[b.level].kd, b.lc = gi[b.level].Yc, b.wc = gi[b.level].nd, b.uc = gi[b.level].jd, b.j = 0, b.Z = 0, b.m = 0, b.Y = 0, b.G = b.aa = 2, b.La = 0, b.D = 0);
                b = c
            }
        } else b = -2;
        if (0 !== b) throw Error(Ug[b]);
        a.header && (b = this.C) && b.state && 2 === b.state.wrap && (b.state.v = a.header);
        if (a.ib) {
            var l;
            "string" === typeof a.ib ? l = Ng(a.ib) : "[object ArrayBuffer]" === ki.call(a.ib) ? l = new Uint8Array(a.ib) : l = a.ib;
            a = this.C;
            f = l;
            g = f.length;
            if (a && a.state)
                if (l = a.state, b = l.wrap,
                    2 === b || 1 === b && 42 !== l.status || l.m) b = -2;
                else {
                    1 === b && (a.A = Og(a.A, f, g, 0));
                    l.wrap = 0;
                    g >= l.S && (0 === b && (Xh(l.head), l.j = 0, l.Z = 0, l.Y = 0), c = new P.Qa(l.S), P.Ra(c, f, g - l.S, l.S, 0), f = c, g = l.S);
                    c = a.T;
                    d = a.Na;
                    e = a.input;
                    a.T = g;
                    a.Na = 0;
                    a.input = f;
                    for (ai(l); 3 <= l.m;) {
                        f = l.j;
                        g = l.m - 2;
                        do l.D = (l.D << l.sa ^ l.window[f + 3 - 1]) & l.ra, l.ka[f & l.Da] = l.head[l.D], l.head[l.D] = f, f++; while (--g);
                        l.j = f;
                        l.m = 2;
                        ai(l)
                    }
                    l.j += l.m;
                    l.Z = l.j;
                    l.Y = l.m;
                    l.m = 0;
                    l.G = l.aa = 2;
                    l.La = 0;
                    a.Na = d;
                    a.input = e;
                    a.T = c;
                    l.wrap = b;
                    b = 0
                }
            else b = -2;
            if (0 !== b) throw Error(Ug[b]);
            this.Vd = !0
        }
    }
    li.prototype.push = function(a, b) {
        var c = this.C,
            d = this.options.chunkSize;
        if (this.ended) return !1;
        var e = b === ~~b ? b : !0 === b ? 4 : 0;
        "string" === typeof a ? c.input = Ng(a) : "[object ArrayBuffer]" === ki.call(a) ? c.input = new Uint8Array(a) : c.input = a;
        c.Na = 0;
        c.T = c.input.length;
        do {
            0 === c.F && (c.lb = new P.Qa(d), c.Za = 0, c.F = d);
            a = ii(c, e);
            if (1 !== a && 0 !== a) return mi(this, a), this.ended = !0, !1;
            if (0 === c.F || 0 === c.T && (4 === e || 2 === e))
                if ("string" === this.options.Ca) {
                    var f = P.Xb(c.lb, c.Za);
                    b = f;
                    f = f.length;
                    if (65537 > f && (b.subarray && Mg || !b.subarray)) b =
                        String.fromCharCode.apply(null, P.Xb(b, f));
                    else {
                        for (var g = "", h = 0; h < f; h++) g += String.fromCharCode(b[h]);
                        b = g
                    }
                    this.chunks.push(b)
                } else b = P.Xb(c.lb, c.Za), this.chunks.push(b)
        } while ((0 < c.T || 0 === c.F) && 1 !== a);
        if (4 === e) return (c = this.C) && c.state ? (d = c.state.status, 42 !== d && 69 !== d && 73 !== d && 91 !== d && 103 !== d && 113 !== d && 666 !== d ? a = Wh(c, -2) : (c.state = null, a = 113 === d ? Wh(c, -3) : 0)) : a = -2, mi(this, a), this.ended = !0, 0 === a;
        2 === e && (mi(this, 0), c.F = 0);
        return !0
    };

    function mi(a, b) {
        0 === b && (a.result = "string" === a.options.Ca ? a.chunks.join("") : P.jc(a.chunks));
        a.chunks = [];
        a.err = b;
        a.msg = a.C.msg
    };

    function ni(a) {
        this.name = a
    };
    var oi = new ni("rawColdConfigGroup");
    var pi = new ni("rawHotConfigGroup");

    function qi(a) {
        this.o = H(a)
    }
    w(qi, L);

    function ri(a) {
        this.o = H(a)
    }
    w(ri, L);

    function si(a) {
        this.o = H(a)
    }
    w(si, L);
    si.la = [2];

    function ti(a) {
        this.o = H(a)
    }
    w(ti, L);
    ti.prototype.getPlayerType = function() {
        var a = 0;
        a = void 0 === a ? 0 : a;
        var b = rd(this, 36);
        return null != b ? b : a
    };
    ti.prototype.setHomeGroupInfo = function(a) {
        return J(this, si, 81, a)
    };
    ti.la = [9, 66, 32, 86, 100, 101];

    function ui(a) {
        this.o = H(a)
    }
    w(ui, L);
    ui.prototype.getKey = function() {
        return Dd(this, 1)
    };
    ui.prototype.ia = function() {
        return Dd(this, xd(this, vi, 2))
    };
    var vi = [2, 3, 4, 5, 6];

    function wi(a) {
        this.o = H(a)
    }
    w(wi, L);
    wi.la = [15, 26, 28];

    function xi(a) {
        this.o = H(a)
    }
    w(xi, L);
    xi.la = [5];

    function yi(a) {
        this.o = H(a)
    }
    w(yi, L);

    function zi(a) {
        this.o = H(a)
    }
    w(zi, L);
    zi.prototype.setSafetyMode = function(a) {
        return I(this, 5, a)
    };
    zi.la = [12];

    function Ai(a) {
        this.o = H(a)
    }
    w(Ai, L);
    Ai.la = [12];
    var Bi = {
        Ud: "WEB_DISPLAY_MODE_UNKNOWN",
        Qd: "WEB_DISPLAY_MODE_BROWSER",
        Sd: "WEB_DISPLAY_MODE_MINIMAL_UI",
        Td: "WEB_DISPLAY_MODE_STANDALONE",
        Rd: "WEB_DISPLAY_MODE_FULLSCREEN"
    };

    function Ci(a) {
        this.o = H(a)
    }
    w(Ci, L);
    Ci.prototype.getKey = function() {
        return Dd(this, 1)
    };
    Ci.prototype.ia = function() {
        return Dd(this, 2)
    };

    function Di(a) {
        this.o = H(a)
    }
    w(Di, L);
    Di.la = [4, 5];

    function Ei(a) {
        this.o = H(a)
    }
    w(Ei, L);

    function Fi(a) {
        this.o = H(a)
    }
    w(Fi, L);
    var Gi = [2, 3, 4, 5];

    function Hi(a) {
        this.o = H(a)
    }
    w(Hi, L);

    function Ii(a) {
        this.o = H(a)
    }
    w(Ii, L);

    function Ji(a) {
        this.o = H(a)
    }
    w(Ji, L);

    function Ki(a) {
        this.o = H(a)
    }
    w(Ki, L);
    Ki.la = [10, 17];

    function Li(a) {
        this.o = H(a)
    }
    w(Li, L);

    function Mi(a) {
        this.o = H(a)
    }
    w(Mi, L);

    function Ni(a) {
        this.o = H(a)
    }
    w(Ni, L);

    function Oi(a) {
        this.o = H(a, 482)
    }
    w(Oi, L);
    var Pi = [2, 3, 5, 6, 7, 11, 13, 20, 21, 22, 23, 24, 28, 32, 37, 45, 59, 72, 73, 74, 76, 78, 79, 80, 85, 91, 97, 100, 102, 105, 111, 117, 119, 126, 127, 136, 146, 148, 151, 156, 157, 158, 159, 163, 164, 168, 176, 177, 178, 179, 184, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 208, 209, 215, 219, 222, 225, 226, 227, 229, 232, 233, 234, 240, 241, 244, 247, 248, 249, 251, 254, 255, 256, 257, 258, 259, 260, 261, 266, 270, 272, 278, 288, 291, 293, 300, 304, 308, 309, 310, 311, 313, 314, 319, 320, 321, 323, 324, 327, 328, 330, 331, 332, 334, 337, 338, 340, 344, 348, 350, 351, 352, 353, 354,
        355, 356, 357, 358, 361, 363, 364, 368, 369, 370, 373, 374, 375, 378, 380, 381, 383, 388, 389, 399, 402, 403, 410, 411, 412, 413, 414, 415, 416, 417, 418, 423, 424, 425, 426, 427, 429, 430, 431, 439, 441, 444, 448, 458, 469, 471, 473, 474, 480, 481
    ];

    function Qi(a) {
        this.o = H(a)
    }
    w(Qi, L);

    function Ri(a) {
        this.o = H(a)
    }
    w(Ri, L);
    Ri.prototype.getPlaylistId = function() {
        return Ed(this, 2)
    };
    var Fd = [1, 2];

    function Si(a) {
        this.o = H(a)
    }
    w(Si, L);
    Si.la = [3];
    var Ti = B.window,
        Ui, Vi, Wi = (null == Ti ? void 0 : null == (Ui = Ti.yt) ? void 0 : Ui.config_) || (null == Ti ? void 0 : null == (Vi = Ti.ytcfg) ? void 0 : Vi.data_) || {};
    D("yt.config_", Wi);

    function Xi() {
        var a = arguments;
        1 < a.length ? Wi[a[0]] = a[1] : 1 === a.length && Object.assign(Wi, a[0])
    }

    function T(a, b) {
        return a in Wi ? Wi[a] : b
    }

    function Yi() {
        return T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")
    }

    function Zi() {
        var a = Wi.EXPERIMENT_FLAGS;
        return a ? a.web_disable_gel_stp_ecatcher_killswitch : void 0
    };
    var $i = [];

    function aj(a) {
        $i.forEach(function(b) {
            return b(a)
        })
    }

    function bj(a) {
        return a && window.yterr ? function() {
            try {
                return a.apply(this, arguments)
            } catch (b) {
                cj(b)
            }
        } : a
    }

    function cj(a) {
        var b = C("yt.logging.errors.log");
        b ? b(a, "ERROR", void 0, void 0, void 0, void 0, void 0) : (b = T("ERRORS", []), b.push([a, "ERROR", void 0, void 0, void 0, void 0, void 0]), Xi("ERRORS", b));
        aj(a)
    }

    function dj(a, b, c, d, e) {
        var f = C("yt.logging.errors.log");
        f ? f(a, "WARNING", b, c, d, void 0, e) : (f = T("ERRORS", []), f.push([a, "WARNING", b, c, d, void 0, e]), Xi("ERRORS", f))
    };

    function V(a) {
        a = ej(a);
        return "string" === typeof a && "false" === a ? !1 : !!a
    }

    function fj(a, b) {
        a = ej(a);
        return void 0 === a && void 0 !== b ? b : Number(a || 0)
    }

    function ej(a) {
        var b = T("EXPERIMENTS_FORCED_FLAGS", {}) || {};
        return void 0 !== b[a] ? b[a] : T("EXPERIMENT_FLAGS", {})[a]
    }

    function gj() {
        for (var a = [], b = T("EXPERIMENTS_FORCED_FLAGS", {}), c = u(Object.keys(b)), d = c.next(); !d.done; d = c.next()) d = d.value, a.push({
            key: d,
            value: String(b[d])
        });
        c = T("EXPERIMENT_FLAGS", {});
        var e = u(Object.keys(c));
        for (d = e.next(); !d.done; d = e.next()) d = d.value, d.startsWith("force_") && void 0 === b[d] && a.push({
            key: d,
            value: String(c[d])
        });
        return a
    };
    var hj = 0;
    D("ytDomDomGetNextId", C("ytDomDomGetNextId") || function() {
        return ++hj
    });
    var ij = {
        stopImmediatePropagation: 1,
        stopPropagation: 1,
        preventMouseEvent: 1,
        preventManipulation: 1,
        preventDefault: 1,
        layerX: 1,
        layerY: 1,
        screenX: 1,
        screenY: 1,
        scale: 1,
        rotation: 1,
        webkitMovementX: 1,
        webkitMovementY: 1
    };

    function jj(a) {
        this.type = "";
        this.state = this.source = this.data = this.currentTarget = this.relatedTarget = this.target = null;
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.ctrlKey = this.altKey = !1;
        this.clientY = this.clientX = 0;
        this.changedTouches = this.touches = null;
        try {
            if (a = a || window.event) {
                this.event = a;
                for (var b in a) b in ij || (this[b] = a[b]);
                var c = a.target || a.srcElement;
                c && 3 == c.nodeType && (c = c.parentNode);
                this.target = c;
                var d = a.relatedTarget;
                if (d) try {
                    d = d.nodeName ? d : null
                } catch (e) {
                    d = null
                } else "mouseover" ==
                    this.type ? d = a.fromElement : "mouseout" == this.type && (d = a.toElement);
                this.relatedTarget = d;
                this.clientX = void 0 != a.clientX ? a.clientX : a.pageX;
                this.clientY = void 0 != a.clientY ? a.clientY : a.pageY;
                this.keyCode = a.keyCode ? a.keyCode : a.which;
                this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
                this.altKey = a.altKey;
                this.ctrlKey = a.ctrlKey;
                this.shiftKey = a.shiftKey;
                this.metaKey = a.metaKey
            }
        } catch (e) {}
    }
    jj.prototype.preventDefault = function() {
        this.event && (this.event.returnValue = !1, this.event.preventDefault && this.event.preventDefault())
    };
    jj.prototype.stopPropagation = function() {
        this.event && (this.event.cancelBubble = !0, this.event.stopPropagation && this.event.stopPropagation())
    };
    jj.prototype.stopImmediatePropagation = function() {
        this.event && (this.event.cancelBubble = !0, this.event.stopImmediatePropagation && this.event.stopImmediatePropagation())
    };
    var jb = B.ytEventsEventsListeners || {};
    D("ytEventsEventsListeners", jb);
    var kj = B.ytEventsEventsCounter || {
        count: 0
    };
    D("ytEventsEventsCounter", kj);

    function lj(a, b, c, d) {
        d = void 0 === d ? {} : d;
        a.addEventListener && ("mouseenter" != b || "onmouseenter" in document ? "mouseleave" != b || "onmouseenter" in document ? "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && (b = "MozMousePixelScroll") : b = "mouseout" : b = "mouseover");
        return ib(function(e) {
            var f = "boolean" === typeof e[4] && e[4] == !!d,
                g = Ma(e[4]) && Ma(d) && kb(e[4], d);
            return !!e.length && e[0] == a && e[1] == b && e[2] == c && (f || g)
        })
    }

    function mj(a) {
        a && ("string" == typeof a && (a = [a]), cb(a, function(b) {
            if (b in jb) {
                var c = jb[b],
                    d = c[0],
                    e = c[1],
                    f = c[3];
                c = c[4];
                d.removeEventListener ? nj() || "boolean" === typeof c ? d.removeEventListener(e, f, c) : d.removeEventListener(e, f, !!c.capture) : d.detachEvent && d.detachEvent("on" + e, f);
                delete jb[b]
            }
        }))
    }
    var nj = Za(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "capture", {
                get: function() {
                    a = !0
                }
            });
            window.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });

    function oj(a, b, c) {
        var d = void 0 === d ? {} : d;
        if (a && (a.addEventListener || a.attachEvent)) {
            var e = lj(a, b, c, d);
            if (!e) {
                e = ++kj.count + "";
                var f = !("mouseenter" != b && "mouseleave" != b || !a.addEventListener || "onmouseenter" in document);
                var g = f ? function(h) {
                    h = new jj(h);
                    if (!Ld(h.relatedTarget, function(k) {
                            return k == a
                        })) return h.currentTarget = a, h.type = b, c.call(a, h)
                } : function(h) {
                    h = new jj(h);
                    h.currentTarget = a;
                    return c.call(a, h)
                };
                g = bj(g);
                a.addEventListener ? ("mouseenter" == b && f ? b = "mouseover" : "mouseleave" == b && f ? b = "mouseout" : "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && (b = "MozMousePixelScroll"), nj() || "boolean" === typeof d ? a.addEventListener(b, g, d) : a.addEventListener(b, g, !!d.capture)) : a.attachEvent("on" + b, g);
                jb[e] = [a, b, c, g, d]
            }
        }
    };

    function pj(a, b) {
        "function" === typeof a && (a = bj(a));
        return window.setTimeout(a, b)
    }

    function qj(a) {
        "function" === typeof a && (a = bj(a));
        return window.setInterval(a, 250)
    };
    var rj = /^[\w.]*$/,
        sj = {
            q: !0,
            search_query: !0
        };

    function tj(a, b) {
        b = a.split(b);
        for (var c = {}, d = 0, e = b.length; d < e; d++) {
            var f = b[d].split("=");
            if (1 == f.length && f[0] || 2 == f.length) try {
                var g = uj(f[0] || ""),
                    h = uj(f[1] || "");
                g in c ? Array.isArray(c[g]) ? gb(c[g], h) : c[g] = [c[g], h] : c[g] = h
            } catch (n) {
                var k = n,
                    l = f[0],
                    m = String(tj);
                k.args = [{
                    key: l,
                    value: f[1],
                    query: a,
                    method: vj == m ? "unchanged" : m
                }];
                sj.hasOwnProperty(l) || dj(k)
            }
        }
        return c
    }
    var vj = String(tj);

    function wj(a) {
        var b = [];
        hb(a, function(c, d) {
            var e = encodeURIComponent(String(d)),
                f;
            Array.isArray(c) ? f = c : f = [c];
            cb(f, function(g) {
                "" == g ? b.push(e) : b.push(e + "=" + encodeURIComponent(String(g)))
            })
        });
        return b.join("&")
    }

    function xj(a) {
        "?" == a.charAt(0) && (a = a.substr(1));
        return tj(a, "&")
    }

    function yj(a, b, c) {
        var d = a.split("#", 2);
        a = d[0];
        d = 1 < d.length ? "#" + d[1] : "";
        var e = a.split("?", 2);
        a = e[0];
        e = xj(e[1] || "");
        for (var f in b) !c && null !== e && f in e || (e[f] = b[f]);
        b = a;
        a = Zb(e);
        a ? (c = b.indexOf("#"), 0 > c && (c = b.length), f = b.indexOf("?"), 0 > f || f > c ? (f = c, e = "") : e = b.substring(f + 1, c), b = [b.slice(0, f), e, b.slice(c)], c = b[1], b[1] = a ? c ? c + "&" + a : a : c, a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]) : a = b;
        return a + d
    }

    function zj(a) {
        if (!b) var b = window.location.href;
        var c = a.match(Ub)[1] || null,
            d = Wb(a);
        c && d ? (a = a.match(Ub), b = b.match(Ub), a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]) : a = d ? Wb(b) == d && (Number(b.match(Ub)[4] || null) || null) == (Number(a.match(Ub)[4] || null) || null) : !0;
        return a
    }

    function uj(a) {
        return a && a.match(rj) ? a : decodeURIComponent(a.replace(/\+/g, " "))
    };

    function Aj(a) {
        var b = Bj;
        a = void 0 === a ? C("yt.ads.biscotti.lastId_") || "" : a;
        var c = Object,
            d = c.assign,
            e = {};
        e.dt = ee;
        e.flash = "0";
        a: {
            try {
                var f = b.g.top.location.href
            } catch (da) {
                f = 2;
                break a
            }
            f = f ? f === b.h.location.href ? 0 : 1 : 2
        }
        e = (e.frm = f, e);
        try {
            e.u_tz = -(new Date).getTimezoneOffset();
            var g = void 0 === g ? Id : g;
            try {
                var h = g.history.length
            } catch (da) {
                h = 0
            }
            e.u_his = h;
            var k;
            e.u_h = null == (k = Id.screen) ? void 0 : k.height;
            var l;
            e.u_w = null == (l = Id.screen) ? void 0 : l.width;
            var m;
            e.u_ah = null == (m = Id.screen) ? void 0 : m.availHeight;
            var n;
            e.u_aw =
                null == (n = Id.screen) ? void 0 : n.availWidth;
            var q;
            e.u_cd = null == (q = Id.screen) ? void 0 : q.colorDepth
        } catch (da) {}
        h = b.g;
        try {
            var p = h.screenX;
            var x = h.screenY
        } catch (da) {}
        try {
            var y = h.outerWidth;
            var E = h.outerHeight
        } catch (da) {}
        try {
            var O = h.innerWidth;
            var U = h.innerHeight
        } catch (da) {}
        try {
            var Q = h.screenLeft;
            var Da = h.screenTop
        } catch (da) {}
        try {
            O = h.innerWidth, U = h.innerHeight
        } catch (da) {}
        try {
            var Pc = h.screen.availWidth;
            var Pa = h.screen.availTop
        } catch (da) {}
        p = [Q, Da, p, x, Pc, Pa, y, E, O, U];
        x = b.g.top;
        try {
            var Ea = (x || window).document,
                ea =
                "CSS1Compat" == Ea.compatMode ? Ea.documentElement : Ea.body;
            var ma = (new Jd(ea.clientWidth, ea.clientHeight)).round()
        } catch (da) {
            ma = new Jd(-12245933, -12245933)
        }
        Ea = ma;
        ma = {};
        var na = void 0 === na ? B : na;
        ea = new cf;
        "SVGElement" in na && "createElementNS" in na.document && ea.set(0);
        x = ce();
        x["allow-top-navigation-by-user-activation"] && ea.set(1);
        x["allow-popups-to-escape-sandbox"] && ea.set(2);
        na.crypto && na.crypto.subtle && ea.set(3);
        "TextDecoder" in na && "TextEncoder" in na && ea.set(4);
        na = df(ea);
        ma.bc = na;
        ma.bih = Ea.height;
        ma.biw =
            Ea.width;
        ma.brdim = p.join();
        b = b.h;
        b = (ma.vis = b.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[b.visibilityState || b.webkitVisibilityState || b.mozVisibilityState || ""] || 0, ma.wgl = !!Id.WebGLRenderingContext, ma);
        c = d.call(c, e, b);
        c.ca_type = "image";
        a && (c.bid = a);
        return c
    }
    var Bj = new function() {
        var a = window.document;
        this.g = window;
        this.h = a
    };
    D("yt.ads_.signals_.getAdSignalsString", function(a) {
        return wj(Aj(a))
    });
    Date.now();
    var Cj = "XMLHttpRequest" in B ? function() {
        return new XMLHttpRequest
    } : null;

    function Dj() {
        if (!Cj) return null;
        var a = Cj();
        return "open" in a ? a : null
    };
    var Ej = "client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");
    v(Ej);
    var Fj = {
            Authorization: "AUTHORIZATION",
            "X-Goog-EOM-Visitor-Id": "EOM_VISITOR_DATA",
            "X-Goog-Visitor-Id": "SANDBOXED_VISITOR_ID",
            "X-Youtube-Domain-Admin-State": "DOMAIN_ADMIN_STATE",
            "X-Youtube-Chrome-Connected": "CHROME_CONNECTED_HEADER",
            "X-YouTube-Client-Name": "INNERTUBE_CONTEXT_CLIENT_NAME",
            "X-YouTube-Client-Version": "INNERTUBE_CONTEXT_CLIENT_VERSION",
            "X-YouTube-Delegation-Context": "INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",
            "X-YouTube-Device": "DEVICE",
            "X-Youtube-Identity-Token": "ID_TOKEN",
            "X-YouTube-Page-CL": "PAGE_CL",
            "X-YouTube-Page-Label": "PAGE_BUILD_LABEL",
            "X-YouTube-Variants-Checksum": "VARIANTS_CHECKSUM",
            "X-Goog-AuthUser": "SESSION_INDEX",
            "X-Goog-PageId": "DELEGATED_SESSION_ID"
        },
        Gj = "app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(v(Ej)),
        Hj = !1;

    function Ij(a, b) {
        b = void 0 === b ? {} : b;
        var c = zj(a),
            d = V("web_ajax_ignore_global_headers_if_set"),
            e;
        for (e in Fj) {
            var f = T(Fj[e]),
                g = "X-Goog-AuthUser" === e || "X-Goog-PageId" === e;
            "X-Goog-Visitor-Id" !== e || f || (f = T("VISITOR_DATA"));
            !f || !c && Wb(a) || d && void 0 !== b[e] || (!V("move_vss_away_from_login_info_cookie") || "TVHTML5_UNPLUGGED" === T("INNERTUBE_CLIENT_NAME")) && g || (b[e] = f)
        }
        V("move_vss_away_from_login_info_cookie") && c && T("SESSION_INDEX") && "TVHTML5_UNPLUGGED" !== T("INNERTUBE_CLIENT_NAME") && (b["X-Yt-Auth-Test"] = "test");
        "X-Goog-EOM-Visitor-Id" in b && "X-Goog-Visitor-Id" in b && delete b["X-Goog-Visitor-Id"];
        if (c || !Wb(a)) b["X-YouTube-Utc-Offset"] = String(-(new Date).getTimezoneOffset());
        if (c || !Wb(a)) {
            try {
                var h = (new Intl.DateTimeFormat).resolvedOptions().timeZone
            } catch (k) {}
            h && (b["X-YouTube-Time-Zone"] = h)
        }
        document.location.hostname.endsWith("youtubeeducation.com") || !c && Wb(a) || (b["X-YouTube-Ad-Signals"] = wj(Aj()));
        return b
    }

    function Jj(a) {
        var b = window.location.search,
            c = Wb(a);
        V("debug_handle_relative_url_for_query_forward_killswitch") || !c && zj(a) && (c = document.location.hostname);
        var d = Vb(a.match(Ub)[5] || null);
        d = (c = c && (c.endsWith("youtube.com") || c.endsWith("youtube-nocookie.com"))) && d && d.startsWith("/api/");
        if (!c || d) return a;
        var e = xj(b),
            f = {};
        cb(Gj, function(g) {
            e[g] && (f[g] = e[g])
        });
        return yj(a, f || {}, !1)
    }

    function Kj(a, b) {
        var c = b.format || "JSON";
        a = Lj(a, b);
        var d = Mj(a, b),
            e = !1,
            f = Nj(a, function(k) {
                if (!e) {
                    e = !0;
                    h && window.clearTimeout(h);
                    a: switch (k && "status" in k ? k.status : -1) {
                        case 200:
                        case 201:
                        case 202:
                        case 203:
                        case 204:
                        case 205:
                        case 206:
                        case 304:
                            var l = !0;
                            break a;
                        default:
                            l = !1
                    }
                    var m = null,
                        n = 400 <= k.status && 500 > k.status,
                        q = 500 <= k.status && 600 > k.status;
                    if (l || n || q) m = Oj(a, c, k, b.convertToSafeHtml);
                    if (l) a: if (k && 204 == k.status) l = !0;
                        else {
                            switch (c) {
                                case "XML":
                                    l = 0 == parseInt(m && m.return_code, 10);
                                    break a;
                                case "RAW":
                                    l = !0;
                                    break a
                            }
                            l = !!m
                        }
                    m = m || {};
                    n = b.context || B;
                    l ? b.onSuccess && b.onSuccess.call(n, k, m) : b.onError && b.onError.call(n, k, m);
                    b.onFinish && b.onFinish.call(n, k, m)
                }
            }, b.method, d, b.headers, b.responseType, b.withCredentials);
        d = b.timeout || 0;
        if (b.onTimeout && 0 < d) {
            var g = b.onTimeout;
            var h = pj(function() {
                e || (e = !0, f.abort(), window.clearTimeout(h), g.call(b.context || B, f))
            }, d)
        }
        return f
    }

    function Lj(a, b) {
        b.includeDomain && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
        var c = T("XSRF_FIELD_NAME");
        if (b = b.urlParams) b[c] && delete b[c], a = yj(a, b || {}, !0);
        return a
    }

    function Mj(a, b) {
        var c = T("XSRF_FIELD_NAME"),
            d = T("XSRF_TOKEN"),
            e = b.postBody || "",
            f = b.postParams;
        var g = T("XSRF_FIELD_NAME");
        var h;
        b.headers && (h = b.headers["Content-Type"]);
        b.excludeXsrf || Wb(a) && !b.withCredentials && Wb(a) != document.location.hostname || "POST" != b.method || h && "application/x-www-form-urlencoded" != h || b.postParams && b.postParams[g] || (f || (f = {}), f[c] = d);
        (V("ajax_parse_query_data_only_when_filled") && f && 0 < Object.keys(f).length || f) && "string" === typeof e && (e = xj(e), nb(e, f), e = b.postBodyFormat && "JSON" == b.postBodyFormat ?
            JSON.stringify(e) : Zb(e));
        if (!(a = e) && (a = f)) {
            a: {
                for (var k in f) {
                    f = !1;
                    break a
                }
                f = !0
            }
            a = !f
        }!Hj && a && "POST" != b.method && (Hj = !0, cj(Error("AJAX request with postData should use POST")));
        return e
    }

    function Oj(a, b, c, d) {
        var e = null;
        switch (b) {
            case "JSON":
                try {
                    var f = c.responseText
                } catch (g) {
                    throw d = Error("Error reading responseText"), d.params = a, dj(d), g;
                }
                a = c.getResponseHeader("Content-Type") || "";
                f && 0 <= a.indexOf("json") && (")]}'\n" === f.substring(0, 5) && (f = f.substring(5)), e = JSON.parse(f));
                break;
            case "XML":
                if (a = (a = c.responseXML) ? Pj(a) : null) e = {}, cb(a.getElementsByTagName("*"), function(g) {
                    e[g.tagName] = Qj(g)
                })
        }
        d && Rj(e);
        return e
    }

    function Rj(a) {
        if (Ma(a))
            for (var b in a) {
                var c;
                (c = "html_content" == b) || (c = b.length - 5, c = 0 <= c && b.indexOf("_html", c) == c);
                if (c) {
                    c = b;
                    var d = a[b];
                    if (void 0 === ob) {
                        var e = null;
                        var f = B.trustedTypes;
                        if (f && f.createPolicy) {
                            try {
                                e = f.createPolicy("goog#html", {
                                    createHTML: Va,
                                    createScript: Va,
                                    createScriptURL: Va
                                })
                            } catch (g) {
                                B.console && B.console.error(g.message)
                            }
                            ob = e
                        } else ob = e
                    }
                    d = (e = ob) ? e.createHTML(d) : d;
                    a[c] = new Sb(d)
                } else Rj(a[b])
            }
    }

    function Pj(a) {
        return a ? (a = ("responseXML" in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : null : null
    }

    function Qj(a) {
        var b = "";
        cb(a.childNodes, function(c) {
            b += c.nodeValue
        });
        return b
    }

    function Sj(a, b) {
        b.method = "POST";
        b.postParams || (b.postParams = {});
        return Kj(a, b)
    }

    function Nj(a, b, c, d, e, f, g, h) {
        function k() {
            4 == (l && "readyState" in l ? l.readyState : 0) && b && bj(b)(l)
        }
        c = void 0 === c ? "GET" : c;
        d = void 0 === d ? "" : d;
        h = void 0 === h ? !1 : h;
        var l = Dj();
        if (!l) return null;
        "onloadend" in l ? l.addEventListener("loadend", k, !1) : l.onreadystatechange = k;
        V("debug_forward_web_query_parameters") && (a = Jj(a));
        l.open(c, a, !0);
        f && (l.responseType = f);
        g && (l.withCredentials = !0);
        c = "POST" == c && (void 0 === window.FormData || !(d instanceof FormData));
        if (e = Ij(a, e))
            for (var m in e) l.setRequestHeader(m, e[m]), "content-type" == m.toLowerCase() && (c = !1);
        c && l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        h && "setAttributionReporting" in XMLHttpRequest.prototype && l.setAttributionReporting({
            eventSourceEligible: !0,
            triggerEligible: !1
        });
        l.send(d);
        return l
    };
    var Tj = [{
        Sb: function(a) {
            return "Cannot read property '" + a.key + "'"
        },
        Db: {
            Error: [{
                regexp: /(Permission denied) to access property "([^']+)"/,
                groups: ["reason", "key"]
            }],
            TypeError: [{
                regexp: /Cannot read property '([^']+)' of (null|undefined)/,
                groups: ["key", "value"]
            }, {
                regexp: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
                groups: ["value", "key"]
            }, {
                regexp: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
                groups: ["value", "key"]
            }, {
                regexp: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
                groups: ["key"]
            }, {
                regexp: /Unable to get property '([^']+)' of (undefined or null) reference/,
                groups: ["key", "value"]
            }, {
                regexp: /(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,
                groups: ["value", "base", "key"]
            }]
        }
    }, {
        Sb: function(a) {
            return "Cannot call '" + a.key + "'"
        },
        Db: {
            TypeError: [{
                regexp: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
                groups: ["base", "key"]
            }, {
                regexp: /([^ ]+) called on (null or undefined)/,
                groups: ["key", "value"]
            }, {
                regexp: /Object (.*) has no method '([^ ]+)'/,
                groups: ["base", "key"]
            }, {
                regexp: /Object doesn't support property or method '([^ ]+)'/,
                groups: ["key"]
            }, {
                regexp: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
                groups: ["key"]
            }, {
                regexp: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
                groups: ["key"]
            }]
        }
    }, {
        Sb: function(a) {
            return a.key + " is not defined"
        },
        Db: {
            ReferenceError: [{
                regexp: /(.*) is not defined/,
                groups: ["key"]
            }, {
                regexp: /Can't find variable: (.*)/,
                groups: ["key"]
            }]
        }
    }];
    var Vj = {
        Aa: [],
        xa: [{
            gb: Uj,
            weight: 500
        }]
    };

    function Uj(a) {
        if ("JavaException" === a.name) return !0;
        a = a.stack;
        return a.includes("chrome://") || a.includes("chrome-extension://") || a.includes("moz-extension://")
    };

    function Wj() {
        this.xa = [];
        this.Aa = []
    }
    var Xj;

    function Yj() {
        if (!Xj) {
            var a = Xj = new Wj;
            a.Aa.length = 0;
            a.xa.length = 0;
            Vj.Aa && a.Aa.push.apply(a.Aa, Vj.Aa);
            Vj.xa && a.xa.push.apply(a.xa, Vj.xa)
        }
        return Xj
    };
    var Zj = new N;

    function ak(a) {
        function b() {
            return a.charCodeAt(d++)
        }
        var c = a.length,
            d = 0;
        do {
            var e = bk(b);
            if (Infinity === e) break;
            var f = e >> 3;
            switch (e & 7) {
                case 0:
                    e = bk(b);
                    if (2 === f) return e;
                    break;
                case 1:
                    if (2 === f) return;
                    d += 8;
                    break;
                case 2:
                    e = bk(b);
                    if (2 === f) return a.substr(d, e);
                    d += e;
                    break;
                case 5:
                    if (2 === f) return;
                    d += 4;
                    break;
                default:
                    return
            }
        } while (d < c)
    }

    function bk(a) {
        var b = a(),
            c = b & 127;
        if (128 > b) return c;
        b = a();
        c |= (b & 127) << 7;
        if (128 > b) return c;
        b = a();
        c |= (b & 127) << 14;
        if (128 > b) return c;
        b = a();
        return 128 > b ? c | (b & 127) << 21 : Infinity
    };

    function ck(a, b, c, d) {
        if (a)
            if (Array.isArray(a)) {
                var e = d;
                for (d = 0; d < a.length && !(a[d] && (e += dk(d, a[d], b, c), 500 < e)); d++);
                d = e
            } else if ("object" === typeof a)
            for (e in a) {
                if (a[e]) {
                    var f = a[e];
                    var g = b;
                    var h = c;
                    g = "string" !== typeof f || "clickTrackingParams" !== e && "trackingParams" !== e ? 0 : (f = ak(atob(f.replace(/-/g, "+").replace(/_/g, "/")))) ? dk(e + ".ve", f, g, h) : 0;
                    d += g;
                    d += dk(e, a[e], b, c);
                    if (500 < d) break
                }
            } else c[b] = ek(a), d += c[b].length;
        else c[b] = ek(a), d += c[b].length;
        return d
    }

    function dk(a, b, c, d) {
        c += "." + a;
        a = ek(b);
        d[c] = a;
        return c.length + a.length
    }

    function ek(a) {
        try {
            return ("string" === typeof a ? a : String(JSON.stringify(a))).substr(0, 500)
        } catch (b) {
            return "unable to serialize " + typeof a + " (" + b.message + ")"
        }
    };

    function fk() {};

    function gk() {
        if (!B.matchMedia) return "WEB_DISPLAY_MODE_UNKNOWN";
        try {
            return B.matchMedia("(display-mode: standalone)").matches ? "WEB_DISPLAY_MODE_STANDALONE" : B.matchMedia("(display-mode: minimal-ui)").matches ? "WEB_DISPLAY_MODE_MINIMAL_UI" : B.matchMedia("(display-mode: fullscreen)").matches ? "WEB_DISPLAY_MODE_FULLSCREEN" : B.matchMedia("(display-mode: browser)").matches ? "WEB_DISPLAY_MODE_BROWSER" : "WEB_DISPLAY_MODE_UNKNOWN"
        } catch (a) {
            return "WEB_DISPLAY_MODE_UNKNOWN"
        }
    };
    D("ytglobal.prefsUserPrefsPrefs_", C("ytglobal.prefsUserPrefsPrefs_") || {});
    var hk = {
            bluetooth: "CONN_DISCO",
            cellular: "CONN_CELLULAR_UNKNOWN",
            ethernet: "CONN_WIFI",
            none: "CONN_NONE",
            wifi: "CONN_WIFI",
            wimax: "CONN_CELLULAR_4G",
            other: "CONN_UNKNOWN",
            unknown: "CONN_UNKNOWN",
            "slow-2g": "CONN_CELLULAR_2G",
            "2g": "CONN_CELLULAR_2G",
            "3g": "CONN_CELLULAR_3G",
            "4g": "CONN_CELLULAR_4G"
        },
        ik = {
            CONN_DEFAULT: 0,
            CONN_UNKNOWN: 1,
            CONN_NONE: 2,
            CONN_WIFI: 3,
            CONN_CELLULAR_2G: 4,
            CONN_CELLULAR_3G: 5,
            CONN_CELLULAR_4G: 6,
            CONN_CELLULAR_UNKNOWN: 7,
            CONN_DISCO: 8,
            CONN_CELLULAR_5G: 9,
            CONN_WIFI_METERED: 10,
            CONN_CELLULAR_5G_SA: 11,
            CONN_CELLULAR_5G_NSA: 12,
            CONN_WIRED: 30,
            CONN_INVALID: 31
        },
        jk = {
            EFFECTIVE_CONNECTION_TYPE_UNKNOWN: 0,
            EFFECTIVE_CONNECTION_TYPE_OFFLINE: 1,
            EFFECTIVE_CONNECTION_TYPE_SLOW_2G: 2,
            EFFECTIVE_CONNECTION_TYPE_2G: 3,
            EFFECTIVE_CONNECTION_TYPE_3G: 4,
            EFFECTIVE_CONNECTION_TYPE_4G: 5
        },
        kk = {
            "slow-2g": "EFFECTIVE_CONNECTION_TYPE_SLOW_2G",
            "2g": "EFFECTIVE_CONNECTION_TYPE_2G",
            "3g": "EFFECTIVE_CONNECTION_TYPE_3G",
            "4g": "EFFECTIVE_CONNECTION_TYPE_4G"
        };

    function lk() {
        var a = B.navigator;
        return a ? a.connection : void 0
    };

    function mk(a) {
        var b = Ga.apply(1, arguments);
        var c = Error.call(this, a);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.args = [].concat(v(b))
    }
    w(mk, Error);

    function nk() {
        try {
            return ok(), !0
        } catch (a) {
            return !1
        }
    }

    function ok() {
        if (void 0 !== T("DATASYNC_ID")) return T("DATASYNC_ID");
        throw new mk("Datasync ID not set", "unknown");
    };

    function pk() {}

    function qk(a, b) {
        return rk(a, 0, b)
    }
    pk.prototype.oa = function(a, b) {
        return rk(a, 1, b)
    };

    function sk(a) {
        var b = C("yt.scheduler.instance.addImmediateJob");
        b ? b(a) : a()
    };

    function tk() {
        pk.apply(this, arguments)
    }
    w(tk, pk);

    function uk() {
        tk.g || (tk.g = new tk);
        return tk.g
    }

    function rk(a, b, c) {
        void 0 !== c && Number.isNaN(Number(c)) && (c = void 0);
        var d = C("yt.scheduler.instance.addJob");
        return d ? d(a, b, c) : void 0 === c ? (a(), NaN) : pj(a, c || 0)
    }
    tk.prototype.qa = function(a) {
        if (void 0 === a || !Number.isNaN(Number(a))) {
            var b = C("yt.scheduler.instance.cancelJob");
            b ? b(a) : window.clearTimeout(a)
        }
    };
    tk.prototype.start = function() {
        var a = C("yt.scheduler.instance.start");
        a && a()
    };
    var bf = uk();

    function vk(a) {
        var b = new Cg;
        if (b.g) try {
            b.g.setItem("__sak", "1");
            b.g.removeItem("__sak");
            var c = !0
        } catch (d) {
            c = !1
        } else c = !1;
        (b = c ? a ? new Ig(b, a) : b : null) || (a = new Dg(a || "UserDataSharedStore"), b = a.g ? a : null);
        this.g = (a = b) ? new yg(a) : null;
        this.h = document.domain || window.location.hostname
    }
    vk.prototype.set = function(a, b, c, d) {
        c = c || 31104E3;
        this.remove(a);
        if (this.g) try {
            this.g.set(a, b, Date.now() + 1E3 * c);
            return
        } catch (f) {}
        var e = "";
        if (d) try {
            e = escape($f(b))
        } catch (f) {
            return
        } else e = escape(b);
        b = this.h;
        me.set("" + a, e, {
            Qb: c,
            path: "/",
            domain: void 0 === b ? "youtube.com" : b,
            secure: !1
        })
    };
    vk.prototype.get = function(a, b) {
        var c = void 0,
            d = !this.g;
        if (!d) try {
            c = this.g.get(a)
        } catch (e) {
            d = !0
        }
        if (d && (c = me.get("" + a, void 0)) && (c = unescape(c), b)) try {
            c = JSON.parse(c)
        } catch (e) {
            this.remove(a), c = void 0
        }
        return c
    };
    vk.prototype.remove = function(a) {
        this.g && this.g.remove(a);
        var b = this.h;
        me.remove("" + a, "/", void 0 === b ? "youtube.com" : b)
    };
    var wk = function() {
        var a;
        return function() {
            a || (a = new vk("ytidb"));
            return a
        }
    }();

    function xk() {
        var a;
        return null == (a = wk()) ? void 0 : a.get("LAST_RESULT_ENTRY_KEY", !0)
    };
    var yk = [],
        zk = !1;

    function Ak(a) {
        zk || (yk.push({
            type: "ERROR",
            payload: a
        }), 10 < yk.length && yk.shift())
    }

    function Bk(a, b) {
        zk || (yk.push({
            type: "EVENT",
            eventType: a,
            payload: b
        }), 10 < yk.length && yk.shift())
    };

    function Ck(a) {
        if (0 <= a.indexOf(":")) throw Error("Database name cannot contain ':'");
    }

    function Dk(a) {
        return a.substr(0, a.indexOf(":")) || a
    };
    var Ek = wc || xc;
    var Fk = {},
        Gk = (Fk.AUTH_INVALID = "No user identifier specified.", Fk.EXPLICIT_ABORT = "Transaction was explicitly aborted.", Fk.IDB_NOT_SUPPORTED = "IndexedDB is not supported.", Fk.MISSING_INDEX = "Index not created.", Fk.MISSING_OBJECT_STORES = "Object stores not created.", Fk.DB_DELETED_BY_MISSING_OBJECT_STORES = "Database is deleted because expected object stores were not created.", Fk.DB_REOPENED_BY_MISSING_OBJECT_STORES = "Database is reopened because expected object stores were not created.", Fk.UNKNOWN_ABORT = "Transaction was aborted for unknown reasons.",
            Fk.QUOTA_EXCEEDED = "The current transaction exceeded its quota limitations.", Fk.QUOTA_MAYBE_EXCEEDED = "The current transaction may have failed because of exceeding quota limitations.", Fk.EXECUTE_TRANSACTION_ON_CLOSED_DB = "Can't start a transaction on a closed database", Fk.INCOMPATIBLE_DB_VERSION = "The binary is incompatible with the database version", Fk),
        Hk = {},
        Ik = (Hk.AUTH_INVALID = "ERROR", Hk.EXECUTE_TRANSACTION_ON_CLOSED_DB = "WARNING", Hk.EXPLICIT_ABORT = "IGNORED", Hk.IDB_NOT_SUPPORTED = "ERROR", Hk.MISSING_INDEX =
            "WARNING", Hk.MISSING_OBJECT_STORES = "ERROR", Hk.DB_DELETED_BY_MISSING_OBJECT_STORES = "WARNING", Hk.DB_REOPENED_BY_MISSING_OBJECT_STORES = "WARNING", Hk.QUOTA_EXCEEDED = "WARNING", Hk.QUOTA_MAYBE_EXCEEDED = "WARNING", Hk.UNKNOWN_ABORT = "WARNING", Hk.INCOMPATIBLE_DB_VERSION = "WARNING", Hk),
        Jk = {},
        Kk = (Jk.AUTH_INVALID = !1, Jk.EXECUTE_TRANSACTION_ON_CLOSED_DB = !1, Jk.EXPLICIT_ABORT = !1, Jk.IDB_NOT_SUPPORTED = !1, Jk.MISSING_INDEX = !1, Jk.MISSING_OBJECT_STORES = !1, Jk.DB_DELETED_BY_MISSING_OBJECT_STORES = !1, Jk.DB_REOPENED_BY_MISSING_OBJECT_STORES = !1, Jk.QUOTA_EXCEEDED = !1, Jk.QUOTA_MAYBE_EXCEEDED = !0, Jk.UNKNOWN_ABORT = !0, Jk.INCOMPATIBLE_DB_VERSION = !1, Jk);

    function X(a, b, c, d, e) {
        b = void 0 === b ? {} : b;
        c = void 0 === c ? Gk[a] : c;
        d = void 0 === d ? Ik[a] : d;
        e = void 0 === e ? Kk[a] : e;
        mk.call(this, c, Object.assign({}, {
            name: "YtIdbKnownError",
            isSw: void 0 === self.document,
            isIframe: self !== self.top,
            type: a
        }, b));
        this.type = a;
        this.message = c;
        this.level = d;
        this.g = e;
        Object.setPrototypeOf(this, X.prototype)
    }
    w(X, mk);

    function Lk(a, b) {
        X.call(this, "MISSING_OBJECT_STORES", {
            expectedObjectStores: b,
            foundObjectStores: a
        }, Gk.MISSING_OBJECT_STORES);
        Object.setPrototypeOf(this, Lk.prototype)
    }
    w(Lk, X);

    function Mk(a, b) {
        var c = Error.call(this);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.index = a;
        this.objectStore = b;
        Object.setPrototypeOf(this, Mk.prototype)
    }
    w(Mk, Error);
    var Nk = ["The database connection is closing", "Can't start a transaction on a closed database", "A mutation operation was attempted on a database that did not allow mutations"];

    function Ok(a, b, c, d) {
        b = Dk(b);
        var e = a instanceof Error ? a : Error("Unexpected error: " + a);
        if (e instanceof X) return e;
        a = {
            objectStoreNames: c,
            dbName: b,
            dbVersion: d
        };
        if ("QuotaExceededError" === e.name) return new X("QUOTA_EXCEEDED", a);
        if (yc && "UnknownError" === e.name) return new X("QUOTA_MAYBE_EXCEEDED", a);
        if (e instanceof Mk) return new X("MISSING_INDEX", Object.assign({}, a, {
            objectStore: e.objectStore,
            index: e.index
        }));
        if ("InvalidStateError" === e.name && Nk.some(function(f) {
                return e.message.includes(f)
            })) return new X("EXECUTE_TRANSACTION_ON_CLOSED_DB",
            a);
        if ("AbortError" === e.name) return new X("UNKNOWN_ABORT", a, e.message);
        e.args = [Object.assign({}, a, {
            name: "IdbError",
            de: e.name
        })];
        e.level = "WARNING";
        return e
    }

    function Pk(a, b, c) {
        var d = xk();
        return new X("IDB_NOT_SUPPORTED", {
            context: {
                caller: a,
                publicName: b,
                version: c,
                hasSucceededOnce: null == d ? void 0 : d.hasSucceededOnce
            }
        })
    };

    function Qk(a) {
        if (!a) throw Error();
        throw a;
    }

    function Rk(a) {
        return a
    }

    function Sk(a) {
        this.g = a
    }

    function Tk(a) {
        function b(e) {
            if ("PENDING" === d.state.status) {
                d.state = {
                    status: "REJECTED",
                    reason: e
                };
                e = u(d.h);
                for (var f = e.next(); !f.done; f = e.next()) f = f.value, f()
            }
        }

        function c(e) {
            if ("PENDING" === d.state.status) {
                d.state = {
                    status: "FULFILLED",
                    value: e
                };
                e = u(d.g);
                for (var f = e.next(); !f.done; f = e.next()) f = f.value, f()
            }
        }
        var d = this;
        this.state = {
            status: "PENDING"
        };
        this.g = [];
        this.h = [];
        a = a.g;
        try {
            a(c, b)
        } catch (e) {
            b(e)
        }
    }
    Tk.resolve = function(a) {
        return new Tk(new Sk(function(b, c) {
            a instanceof Tk ? a.then(b, c) : b(a)
        }))
    };
    Tk.reject = function(a) {
        return new Tk(new Sk(function(b, c) {
            c(a)
        }))
    };
    Tk.prototype.then = function(a, b) {
        var c = this,
            d = null != a ? a : Rk,
            e = null != b ? b : Qk;
        return new Tk(new Sk(function(f, g) {
            "PENDING" === c.state.status ? (c.g.push(function() {
                Uk(c, c, d, f, g)
            }), c.h.push(function() {
                Vk(c, c, e, f, g)
            })) : "FULFILLED" === c.state.status ? Uk(c, c, d, f, g) : "REJECTED" === c.state.status && Vk(c, c, e, f, g)
        }))
    };

    function Wk(a, b) {
        a.then(void 0, b)
    }

    function Uk(a, b, c, d, e) {
        try {
            if ("FULFILLED" !== a.state.status) throw Error("calling handleResolve before the promise is fulfilled.");
            var f = c(a.state.value);
            f instanceof Tk ? Xk(a, b, f, d, e) : d(f)
        } catch (g) {
            e(g)
        }
    }

    function Vk(a, b, c, d, e) {
        try {
            if ("REJECTED" !== a.state.status) throw Error("calling handleReject before the promise is rejected.");
            var f = c(a.state.reason);
            f instanceof Tk ? Xk(a, b, f, d, e) : d(f)
        } catch (g) {
            e(g)
        }
    }

    function Xk(a, b, c, d, e) {
        b === c ? e(new TypeError("Circular promise chain detected.")) : c.then(function(f) {
            f instanceof Tk ? Xk(a, b, f, d, e) : d(f)
        }, function(f) {
            e(f)
        })
    };

    function Yk(a, b, c) {
        function d() {
            c(a.error);
            f()
        }

        function e() {
            b(a.result);
            f()
        }

        function f() {
            try {
                a.removeEventListener("success", e), a.removeEventListener("error", d)
            } catch (g) {}
        }
        a.addEventListener("success", e);
        a.addEventListener("error", d)
    }

    function Zk(a) {
        return new Promise(function(b, c) {
            Yk(a, b, c)
        })
    }

    function $k(a) {
        return new Tk(new Sk(function(b, c) {
            Yk(a, b, c)
        }))
    };

    function al(a, b) {
        return new Tk(new Sk(function(c, d) {
            function e() {
                var f = a ? b(a) : null;
                f ? f.then(function(g) {
                    a = g;
                    e()
                }, d) : c()
            }
            e()
        }))
    };
    var bl = window,
        Y = bl.ytcsi && bl.ytcsi.now ? bl.ytcsi.now : bl.performance && bl.performance.timing && bl.performance.now && bl.performance.timing.navigationStart ? function() {
            return bl.performance.timing.navigationStart + bl.performance.now()
        } : function() {
            return (new Date).getTime()
        };

    function cl(a, b) {
        this.g = a;
        this.options = b;
        this.transactionCount = 0;
        this.i = Math.round(Y());
        this.h = !1
    }
    r = cl.prototype;
    r.add = function(a, b, c) {
        return dl(this, [a], {
            mode: "readwrite",
            V: !0
        }, function(d) {
            return d.objectStore(a).add(b, c)
        })
    };
    r.clear = function(a) {
        return dl(this, [a], {
            mode: "readwrite",
            V: !0
        }, function(b) {
            return b.objectStore(a).clear()
        })
    };
    r.close = function() {
        this.g.close();
        var a;
        (null == (a = this.options) ? 0 : a.closed) && this.options.closed()
    };

    function el(a, b, c) {
        a = a.g.createObjectStore(b, c);
        return new fl(a)
    }
    r.delete = function(a, b) {
        return dl(this, [a], {
            mode: "readwrite",
            V: !0
        }, function(c) {
            return c.objectStore(a).delete(b)
        })
    };
    r.get = function(a, b) {
        return dl(this, [a], {
            mode: "readonly",
            V: !0
        }, function(c) {
            return c.objectStore(a).get(b)
        })
    };

    function gl(a, b, c) {
        return dl(a, [b], {
            mode: "readwrite",
            V: !0
        }, function(d) {
            d = d.objectStore(b);
            return $k(d.g.put(c, void 0))
        })
    }
    r.objectStoreNames = function() {
        return Array.from(this.g.objectStoreNames)
    };

    function dl(a, b, c, d) {
        var e, f, g, h, k, l, m, n, q, p, x, y;
        return A(function(E) {
            switch (E.g) {
                case 1:
                    var O = {
                        mode: "readonly",
                        V: !1,
                        tag: "IDB_TRANSACTION_TAG_UNKNOWN"
                    };
                    "string" === typeof c ? O.mode = c : Object.assign(O, c);
                    e = O;
                    a.transactionCount++;
                    f = e.V ? 3 : 1;
                    g = 0;
                case 2:
                    if (h) {
                        E.B(4);
                        break
                    }
                    g++;
                    k = Math.round(Y());
                    va(E, 5);
                    l = a.g.transaction(b, e.mode);
                    O = new hl(l);
                    O = il(O, d);
                    return z(E, O, 7);
                case 7:
                    return m = E.h, n = Math.round(Y()), jl(a, k, n, g, void 0, b.join(), e), E.return(m);
                case 5:
                    q = wa(E);
                    p = Math.round(Y());
                    x = Ok(q, a.g.name, b.join(), a.g.version);
                    if ((y = x instanceof X && !x.g) || g >= f) jl(a, k, p, g, x, b.join(), e), h = x;
                    E.B(2);
                    break;
                case 4:
                    return E.return(Promise.reject(h))
            }
        })
    }

    function jl(a, b, c, d, e, f, g) {
        b = c - b;
        e ? (e instanceof X && ("QUOTA_EXCEEDED" === e.type || "QUOTA_MAYBE_EXCEEDED" === e.type) && Bk("QUOTA_EXCEEDED", {
            dbName: Dk(a.g.name),
            objectStoreNames: f,
            transactionCount: a.transactionCount,
            transactionMode: g.mode
        }), e instanceof X && "UNKNOWN_ABORT" === e.type && (c -= a.i, 0 > c && c >= Math.pow(2, 31) && (c = 0), Bk("TRANSACTION_UNEXPECTEDLY_ABORTED", {
            objectStoreNames: f,
            transactionDuration: b,
            transactionCount: a.transactionCount,
            dbDuration: c
        }), a.h = !0), kl(a, !1, d, f, b, g.tag), Ak(e)) : kl(a, !0, d, f, b, g.tag)
    }

    function kl(a, b, c, d, e, f) {
        Bk("TRANSACTION_ENDED", {
            objectStoreNames: d,
            connectionHasUnknownAbortedTransaction: a.h,
            duration: e,
            isSuccessful: b,
            tryCount: c,
            tag: void 0 === f ? "IDB_TRANSACTION_TAG_UNKNOWN" : f
        })
    }
    r.getName = function() {
        return this.g.name
    };

    function fl(a) {
        this.g = a
    }
    r = fl.prototype;
    r.add = function(a, b) {
        return $k(this.g.add(a, b))
    };
    r.autoIncrement = function() {
        return this.g.autoIncrement
    };
    r.clear = function() {
        return $k(this.g.clear()).then(function() {})
    };

    function ll(a, b, c) {
        a.g.createIndex(b, c, {
            unique: !1
        })
    }

    function ml(a, b) {
        return nl(a, {
            query: b
        }, function(c) {
            return c.delete().then(function() {
                return c.continue()
            })
        }).then(function() {})
    }
    r.delete = function(a) {
        return a instanceof IDBKeyRange ? ml(this, a) : $k(this.g.delete(a))
    };
    r.get = function(a) {
        return $k(this.g.get(a))
    };
    r.index = function(a) {
        try {
            return new ol(this.g.index(a))
        } catch (b) {
            if (b instanceof Error && "NotFoundError" === b.name) throw new Mk(a, this.g.name);
            throw b;
        }
    };
    r.getName = function() {
        return this.g.name
    };
    r.keyPath = function() {
        return this.g.keyPath
    };

    function nl(a, b, c) {
        a = a.g.openCursor(b.query, b.direction);
        return pl(a).then(function(d) {
            return al(d, c)
        })
    }

    function hl(a) {
        var b = this;
        this.g = a;
        this.i = new Map;
        this.h = !1;
        this.done = new Promise(function(c, d) {
            b.g.addEventListener("complete", function() {
                c()
            });
            b.g.addEventListener("error", function(e) {
                e.currentTarget === e.target && d(b.g.error)
            });
            b.g.addEventListener("abort", function() {
                var e = b.g.error;
                if (e) d(e);
                else if (!b.h) {
                    e = X;
                    for (var f = b.g.objectStoreNames, g = [], h = 0; h < f.length; h++) {
                        var k = f.item(h);
                        if (null === k) throw Error("Invariant: item in DOMStringList is null");
                        g.push(k)
                    }
                    e = new e("UNKNOWN_ABORT", {
                        objectStoreNames: g.join(),
                        dbName: b.g.db.name,
                        mode: b.g.mode
                    });
                    d(e)
                }
            })
        })
    }

    function il(a, b) {
        var c = new Promise(function(d, e) {
            try {
                Wk(b(a).then(function(f) {
                    d(f)
                }), e)
            } catch (f) {
                e(f), a.abort()
            }
        });
        return Promise.all([c, a.done]).then(function(d) {
            return u(d).next().value
        })
    }
    hl.prototype.abort = function() {
        this.g.abort();
        this.h = !0;
        throw new X("EXPLICIT_ABORT");
    };
    hl.prototype.objectStore = function(a) {
        a = this.g.objectStore(a);
        var b = this.i.get(a);
        b || (b = new fl(a), this.i.set(a, b));
        return b
    };

    function ol(a) {
        this.g = a
    }
    r = ol.prototype;
    r.delete = function(a) {
        return ql(this, {
            query: a
        }, function(b) {
            return b.delete().then(function() {
                return b.continue()
            })
        })
    };
    r.get = function(a) {
        return $k(this.g.get(a))
    };
    r.getKey = function(a) {
        return $k(this.g.getKey(a))
    };
    r.keyPath = function() {
        return this.g.keyPath
    };
    r.unique = function() {
        return this.g.unique
    };

    function ql(a, b, c) {
        a = a.g.openCursor(void 0 === b.query ? null : b.query, void 0 === b.direction ? "next" : b.direction);
        return pl(a).then(function(d) {
            return al(d, c)
        })
    }

    function rl(a, b) {
        this.request = a;
        this.cursor = b
    }

    function pl(a) {
        return $k(a).then(function(b) {
            return b ? new rl(a, b) : null
        })
    }
    r = rl.prototype;
    r.advance = function(a) {
        this.cursor.advance(a);
        return pl(this.request)
    };
    r.continue = function(a) {
        this.cursor.continue(a);
        return pl(this.request)
    };
    r.delete = function() {
        return $k(this.cursor.delete()).then(function() {})
    };
    r.getKey = function() {
        return this.cursor.key
    };
    r.ia = function() {
        return this.cursor.value
    };
    r.update = function(a) {
        return $k(this.cursor.update(a))
    };

    function sl(a, b, c) {
        return new Promise(function(d, e) {
            function f() {
                q || (q = new cl(g.result, {
                    closed: n
                }));
                return q
            }
            var g = void 0 !== b ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
            var h = c.Oc,
                k = c.Pc,
                l = c.qd,
                m = c.upgrade,
                n = c.closed,
                q;
            g.addEventListener("upgradeneeded", function(p) {
                try {
                    if (null === p.newVersion) throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
                    if (null === g.transaction) throw Error("Invariant: transaction on IDbOpenDbRequest is null");
                    p.dataLoss && "none" !== p.dataLoss && Bk("IDB_DATA_CORRUPTED", {
                        reason: p.dataLossMessage || "unknown reason",
                        dbName: Dk(a)
                    });
                    var x = f(),
                        y = new hl(g.transaction);
                    m &&
                        m(x, function(E) {
                            return p.oldVersion < E && p.newVersion >= E
                        }, y);
                    y.done.catch(function(E) {
                        e(E)
                    })
                } catch (E) {
                    e(E)
                }
            });
            g.addEventListener("success", function() {
                var p = g.result;
                k && p.addEventListener("versionchange", function() {
                    k(f())
                });
                p.addEventListener("close", function() {
                    Bk("IDB_UNEXPECTEDLY_CLOSED", {
                        dbName: Dk(a),
                        dbVersion: p.version
                    });
                    l && l()
                });
                d(f())
            });
            g.addEventListener("error", function() {
                e(g.error)
            });
            h && g.addEventListener("blocked", function() {
                h()
            })
        })
    }

    function tl(a, b, c) {
        c = void 0 === c ? {} : c;
        return sl(a, b, c)
    }

    function ul(a, b) {
        b = void 0 === b ? {} : b;
        var c, d, e, f;
        return A(function(g) {
            if (1 == g.g) return va(g, 2), c = self.indexedDB.deleteDatabase(a), d = b, (e = d.Oc) && c.addEventListener("blocked", function() {
                e()
            }), z(g, Zk(c), 4);
            if (2 != g.g) g.g = 0, g.s = 0;
            else throw f = wa(g), Ok(f, a, "", -1);
        })
    };

    function vl(a, b) {
        this.name = a;
        this.options = b;
        this.i = !0;
        this.s = this.l = 0
    }
    vl.prototype.h = function(a, b, c) {
        c = void 0 === c ? {} : c;
        return tl(a, b, c)
    };
    vl.prototype.delete = function(a) {
        a = void 0 === a ? {} : a;
        return ul(this.name, a)
    };

    function wl(a, b) {
        return new X("INCOMPATIBLE_DB_VERSION", {
            dbName: a.name,
            oldVersion: a.options.version,
            newVersion: b
        })
    }

    function xl(a, b) {
        if (!b) throw Pk("openWithToken", Dk(a.name));
        return yl(a)
    }

    function yl(a) {
        function b() {
            var f, g, h, k, l, m, n, q, p, x;
            return A(function(y) {
                switch (y.g) {
                    case 1:
                        return g = null != (f = Error().stack) ? f : "", va(y, 2), z(y, a.h(a.name, a.options.version, d), 4);
                    case 4:
                        h = y.h;
                        for (var E = a.options, O = [], U = u(Object.keys(E.ab)), Q = U.next(); !Q.done; Q = U.next()) {
                            Q = Q.value;
                            var Da = E.ab[Q],
                                Pc = void 0 === Da.od ? Number.MAX_VALUE : Da.od;
                            !(h.g.version >= Da.eb) || h.g.version >= Pc || h.g.objectStoreNames.contains(Q) || O.push(Q)
                        }
                        k = O;
                        if (0 === k.length) {
                            y.B(5);
                            break
                        }
                        l = Object.keys(a.options.ab);
                        m = h.objectStoreNames();
                        if (a.s < fj("ytidb_reopen_db_retries", 0)) return a.s++, h.close(), Ak(new X("DB_REOPENED_BY_MISSING_OBJECT_STORES", {
                            dbName: a.name,
                            expectedObjectStores: l,
                            foundObjectStores: m
                        })), y.return(b());
                        if (!(a.l < fj("ytidb_remake_db_retries", 1))) {
                            y.B(6);
                            break
                        }
                        a.l++;
                        return z(y, a.delete(), 7);
                    case 7:
                        return Ak(new X("DB_DELETED_BY_MISSING_OBJECT_STORES", {
                            dbName: a.name,
                            expectedObjectStores: l,
                            foundObjectStores: m
                        })), y.return(b());
                    case 6:
                        throw new Lk(m, l);
                    case 5:
                        return y.return(h);
                    case 2:
                        n = wa(y);
                        if (n instanceof DOMException ?
                            "VersionError" !== n.name : "DOMError" in self && n instanceof DOMError ? "VersionError" !== n.name : !(n instanceof Object && "message" in n) || "An attempt was made to open a database using a lower version than the existing version." !== n.message) {
                            y.B(8);
                            break
                        }
                        return z(y, a.h(a.name, void 0, Object.assign({}, d, {
                            upgrade: void 0
                        })), 9);
                    case 9:
                        q = y.h;
                        p = q.g.version;
                        if (void 0 !== a.options.version && p > a.options.version + 1) throw q.close(), a.i = !1, wl(a, p);
                        return y.return(q);
                    case 8:
                        throw c(), n instanceof Error && !V("ytidb_async_stack_killswitch") &&
                            (n.stack = n.stack + "\n" + g.substring(g.indexOf("\n") + 1)), Ok(n, a.name, "", null != (x = a.options.version) ? x : -1);
                }
            })
        }

        function c() {
            a.g === e && (a.g = void 0)
        }
        if (!a.i) throw wl(a);
        if (a.g) return a.g;
        var d = {
            Pc: function(f) {
                f.close()
            },
            closed: c,
            qd: c,
            upgrade: a.options.upgrade
        };
        var e = b();
        a.g = e;
        return a.g
    };
    var zl = new vl("YtIdbMeta", {
        ab: {
            databases: {
                eb: 1
            }
        },
        upgrade: function(a, b) {
            b(1) && el(a, "databases", {
                keyPath: "actualName"
            })
        }
    });

    function Al(a, b) {
        var c;
        return A(function(d) {
            if (1 == d.g) return z(d, xl(zl, b), 2);
            c = d.h;
            return d.return(dl(c, ["databases"], {
                V: !0,
                mode: "readwrite"
            }, function(e) {
                var f = e.objectStore("databases");
                return f.get(a.actualName).then(function(g) {
                    if (g ? a.actualName !== g.actualName || a.publicName !== g.publicName || a.userIdentifier !== g.userIdentifier : 1) return $k(f.g.put(a, void 0)).then(function() {})
                })
            }))
        })
    }

    function Bl(a, b) {
        var c;
        return A(function(d) {
            if (1 == d.g) return a ? z(d, xl(zl, b), 2) : d.return();
            c = d.h;
            return d.return(c.delete("databases", a))
        })
    }

    function Cl(a, b) {
        var c, d;
        return A(function(e) {
            return 1 == e.g ? (c = [], z(e, xl(zl, b), 2)) : 3 != e.g ? (d = e.h, z(e, dl(d, ["databases"], {
                V: !0,
                mode: "readonly"
            }, function(f) {
                c.length = 0;
                return nl(f.objectStore("databases"), {}, function(g) {
                    a(g.ia()) && c.push(g.ia());
                    return g.continue()
                })
            }), 3)) : e.return(c)
        })
    }

    function Dl(a) {
        return Cl(function(b) {
            return "LogsDatabaseV2" === b.publicName && void 0 !== b.userIdentifier
        }, a)
    };
    var El, Fl = new function() {}(new function() {});

    function Gl() {
        var a, b, c, d;
        return A(function(e) {
            switch (e.g) {
                case 1:
                    a = xk();
                    if (null == (b = a) ? 0 : b.hasSucceededOnce) return e.return(!0);
                    var f;
                    if (f = Ek) f = /WebKit\/([0-9]+)/.exec(Gb()), f = !!(f && 600 <= parseInt(f[1], 10));
                    f && (f = /WebKit\/([0-9]+)/.exec(Gb()), f = !(f && 602 <= parseInt(f[1], 10)));
                    if (f || gc) return e.return(!1);
                    try {
                        if (c = self, !(c.indexedDB && c.IDBIndex && c.IDBKeyRange && c.IDBObjectStore)) return e.return(!1)
                    } catch (g) {
                        return e.return(!1)
                    }
                    if (!("IDBTransaction" in self && "objectStoreNames" in IDBTransaction.prototype)) return e.return(!1);
                    va(e, 2);
                    d = {
                        actualName: "yt-idb-test-do-not-use",
                        publicName: "yt-idb-test-do-not-use",
                        userIdentifier: void 0
                    };
                    return z(e, Al(d, Fl), 4);
                case 4:
                    return z(e, Bl("yt-idb-test-do-not-use", Fl), 5);
                case 5:
                    return e.return(!0);
                case 2:
                    return wa(e), e.return(!1)
            }
        })
    }

    function Hl() {
        if (void 0 !== El) return El;
        zk = !0;
        return El = Gl().then(function(a) {
            zk = !1;
            var b;
            if (null != (b = wk()) && b.g) {
                var c;
                b = {
                    hasSucceededOnce: (null == (c = xk()) ? void 0 : c.hasSucceededOnce) || a
                };
                var d;
                null == (d = wk()) || d.set("LAST_RESULT_ENTRY_KEY", b, 2592E3, !0)
            }
            return a
        })
    }

    function Il() {
        return C("ytglobal.idbToken_") || void 0
    }

    function Jl() {
        var a = Il();
        return a ? Promise.resolve(a) : Hl().then(function(b) {
            (b = b ? Fl : void 0) && D("ytglobal.idbToken_", b);
            return b
        })
    };
    new ag;

    function Kl(a) {
        if (!nk()) throw a = new X("AUTH_INVALID", {
            dbName: a
        }), Ak(a), a;
        var b = ok();
        return {
            actualName: a + ":" + b,
            publicName: a,
            userIdentifier: b
        }
    }

    function Ll(a, b, c, d) {
        var e, f, g, h, k, l;
        return A(function(m) {
            switch (m.g) {
                case 1:
                    return f = null != (e = Error().stack) ? e : "", z(m, Jl(), 2);
                case 2:
                    g = m.h;
                    if (!g) throw h = Pk("openDbImpl", a, b), V("ytidb_async_stack_killswitch") || (h.stack = h.stack + "\n" + f.substring(f.indexOf("\n") + 1)), Ak(h), h;
                    Ck(a);
                    k = c ? {
                        actualName: a,
                        publicName: a,
                        userIdentifier: void 0
                    } : Kl(a);
                    va(m, 3);
                    return z(m, Al(k, g), 5);
                case 5:
                    return z(m, tl(k.actualName, b, d), 6);
                case 6:
                    return m.return(m.h);
                case 3:
                    return l = wa(m), va(m, 7), z(m, Bl(k.actualName, g), 9);
                case 9:
                    m.g =
                        8;
                    m.s = 0;
                    break;
                case 7:
                    wa(m);
                case 8:
                    throw l;
            }
        })
    }

    function Ml(a, b, c) {
        c = void 0 === c ? {} : c;
        return Ll(a, b, !1, c)
    }

    function Nl(a, b, c) {
        c = void 0 === c ? {} : c;
        return Ll(a, b, !0, c)
    }

    function xm(a, b) {
        b = void 0 === b ? {} : b;
        var c, d;
        return A(function(e) {
            if (1 == e.g) return z(e, Jl(), 2);
            if (3 != e.g) {
                c = e.h;
                if (!c) return e.return();
                Ck(a);
                d = Kl(a);
                return z(e, ul(d.actualName, b), 3)
            }
            return z(e, Bl(d.actualName, c), 0)
        })
    }

    function ym(a, b, c) {
        a = a.map(function(d) {
            return A(function(e) {
                return 1 == e.g ? z(e, ul(d.actualName, b), 2) : z(e, Bl(d.actualName, c), 0)
            })
        });
        return Promise.all(a).then(function() {})
    }

    function zm() {
        var a = void 0 === a ? {} : a;
        var b, c;
        return A(function(d) {
            if (1 == d.g) return z(d, Jl(), 2);
            if (3 != d.g) {
                b = d.h;
                if (!b) return d.return();
                Ck("LogsDatabaseV2");
                return z(d, Dl(b), 3)
            }
            c = d.h;
            return z(d, ym(c, a, b), 0)
        })
    }

    function Am(a, b) {
        b = void 0 === b ? {} : b;
        var c;
        return A(function(d) {
            if (1 == d.g) return z(d, Jl(), 2);
            if (3 != d.g) {
                c = d.h;
                if (!c) return d.return();
                Ck(a);
                return z(d, ul(a, b), 3)
            }
            return z(d, Bl(a, c), 0)
        })
    };

    function Bm(a, b) {
        vl.call(this, a, b);
        this.options = b;
        Ck(a)
    }
    w(Bm, vl);

    function Cm(a, b) {
        var c;
        return function() {
            c || (c = new Bm(a, b));
            return c
        }
    }
    Bm.prototype.h = function(a, b, c) {
        c = void 0 === c ? {} : c;
        return (this.options.Ib ? Nl : Ml)(a, b, Object.assign({}, c))
    };
    Bm.prototype.delete = function(a) {
        a = void 0 === a ? {} : a;
        return (this.options.Ib ? Am : xm)(this.name, a)
    };

    function Dm(a, b) {
        return Cm(a, b)
    };
    var Em = {},
        Fm = Dm("ytGcfConfig", {
            ab: (Em.coldConfigStore = {
                eb: 1
            }, Em.hotConfigStore = {
                eb: 1
            }, Em),
            Ib: !1,
            upgrade: function(a, b) {
                b(1) && (ll(el(a, "hotConfigStore", {
                    keyPath: "key",
                    autoIncrement: !0
                }), "hotTimestampIndex", "timestamp"), ll(el(a, "coldConfigStore", {
                    keyPath: "key",
                    autoIncrement: !0
                }), "coldTimestampIndex", "timestamp"))
            },
            version: 1
        });

    function Gm(a) {
        return xl(Fm(), a)
    }

    function Hm(a, b, c) {
        var d, e, f;
        return A(function(g) {
            switch (g.g) {
                case 1:
                    return d = {
                        config: a,
                        hashData: b,
                        timestamp: Y()
                    }, z(g, Gm(c), 2);
                case 2:
                    return e = g.h, z(g, e.clear("hotConfigStore"), 3);
                case 3:
                    return z(g, gl(e, "hotConfigStore", d), 4);
                case 4:
                    return f = g.h, g.return(f)
            }
        })
    }

    function Im(a, b, c, d) {
        var e, f, g;
        return A(function(h) {
            switch (h.g) {
                case 1:
                    return e = {
                        config: a,
                        hashData: b,
                        configData: c,
                        timestamp: Y()
                    }, z(h, Gm(d), 2);
                case 2:
                    return f = h.h, z(h, f.clear("coldConfigStore"), 3);
                case 3:
                    return z(h, gl(f, "coldConfigStore", e), 4);
                case 4:
                    return g = h.h, h.return(g)
            }
        })
    }

    function Jm(a) {
        var b, c;
        return A(function(d) {
            return 1 == d.g ? z(d, Gm(a), 2) : 3 != d.g ? (b = d.h, c = void 0, z(d, dl(b, ["coldConfigStore"], {
                mode: "readwrite",
                V: !0
            }, function(e) {
                return ql(e.objectStore("coldConfigStore").index("coldTimestampIndex"), {
                    direction: "prev"
                }, function(f) {
                    c = f.ia()
                })
            }), 3)) : d.return(c)
        })
    }

    function Km(a) {
        var b, c;
        return A(function(d) {
            return 1 == d.g ? z(d, Gm(a), 2) : 3 != d.g ? (b = d.h, c = void 0, z(d, dl(b, ["hotConfigStore"], {
                mode: "readwrite",
                V: !0
            }, function(e) {
                return ql(e.objectStore("hotConfigStore").index("hotTimestampIndex"), {
                    direction: "prev"
                }, function(f) {
                    c = f.ia()
                })
            }), 3)) : d.return(c)
        })
    };

    function Lm() {
        se.apply(this, arguments);
        this.g = []
    }
    w(Lm, se);
    Lm.prototype.Ga = function() {
        this.g.length = 0;
        se.prototype.Ga.call(this)
    };

    function Mm() {
        this.g = 0;
        this.h = new Lm
    }

    function Nm(a, b, c) {
        var d, e, f;
        return A(function(g) {
            switch (g.g) {
                case 1:
                    if (!V("start_client_gcf")) {
                        g.B(0);
                        break
                    }
                    c && (a.i = c, D("yt.gcf.config.hotConfigGroup", a.i || null));
                    a.hotHashData = b;
                    D("yt.gcf.config.hotHashData", a.hotHashData || null);
                    d = Il();
                    if (!d) {
                        g.B(3);
                        break
                    }
                    if (c) {
                        g.B(4);
                        break
                    }
                    return z(g, Km(d), 5);
                case 5:
                    e = g.h, c = null == (f = e) ? void 0 : f.config;
                case 4:
                    return z(g, Hm(c, b, d), 3);
                case 3:
                    if (c)
                        for (var h = c, k = u(a.h.g), l = k.next(); !l.done; l = k.next()) l = l.value, l(h);
                    g.g = 0
            }
        })
    }

    function Om(a, b, c) {
        var d, e, f, g;
        return A(function(h) {
            if (1 == h.g) {
                if (!V("start_client_gcf")) return h.B(0);
                a.coldHashData = b;
                D("yt.gcf.config.coldHashData", a.coldHashData || null);
                return (d = Il()) ? c ? h.B(4) : z(h, Jm(d), 5) : h.B(0)
            }
            4 != h.g && (e = h.h, c = null == (f = e) ? void 0 : f.config);
            if (!c) return h.B(0);
            g = c.configData;
            return z(h, Im(c, b, g, d), 0)
        })
    };

    function Pm() {
        return "INNERTUBE_API_KEY" in Wi && "INNERTUBE_API_VERSION" in Wi
    }

    function Qm() {
        return {
            ad: T("INNERTUBE_API_KEY"),
            bd: T("INNERTUBE_API_VERSION"),
            Mb: T("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
            nc: T("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
            cd: T("INNERTUBE_CONTEXT_CLIENT_NAME", 1),
            oc: T("INNERTUBE_CONTEXT_CLIENT_VERSION"),
            qc: T("INNERTUBE_CONTEXT_HL"),
            pc: T("INNERTUBE_CONTEXT_GL"),
            dd: T("INNERTUBE_HOST_OVERRIDE") || "",
            fd: !!T("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
            ed: !!T("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
            appInstallData: T("SERIALIZED_CLIENT_CONFIG_DATA")
        }
    }

    function Rm(a) {
        var b = {
            client: {
                hl: a.qc,
                gl: a.pc,
                clientName: a.nc,
                clientVersion: a.oc,
                configInfo: a.Mb
            }
        };
        navigator.userAgent && (b.client.userAgent = String(navigator.userAgent));
        var c = B.devicePixelRatio;
        c && 1 != c && (b.client.screenDensityFloat = String(c));
        c = T("EXPERIMENTS_TOKEN", "");
        "" !== c && (b.client.experimentsToken = c);
        c = gj();
        0 < c.length && (b.request = {
            internalExperimentFlags: c
        });
        Sm(a, void 0, b);
        Tm(void 0, b);
        Um(void 0, b);
        Vm(a, void 0, b);
        Wm(void 0, b);
        V("start_client_gcf") && Xm(void 0, b);
        T("DELEGATED_SESSION_ID") && !V("pageid_as_header_web") &&
            (b.user = {
                onBehalfOfUser: T("DELEGATED_SESSION_ID")
            });
        !V("fill_delegate_context_in_gel_killswitch") && (a = T("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) && (b.user = Object.assign({}, b.user, {
            serializedDelegationContext: a
        }));
        a = Object;
        c = a.assign;
        for (var d = b.client, e = {}, f = u(Object.entries(xj(T("DEVICE", "")))), g = f.next(); !g.done; g = f.next()) {
            var h = u(g.value);
            g = h.next().value;
            h = h.next().value;
            "cbrand" === g ? e.deviceMake = h : "cmodel" === g ? e.deviceModel = h : "cbr" === g ? e.browserName = h : "cbrver" === g ? e.browserVersion =
                h : "cos" === g ? e.osName = h : "cosver" === g ? e.osVersion = h : "cplatform" === g && (e.platform = h)
        }
        b.client = c.call(a, d, e);
        return b
    }

    function Ym(a) {
        var b = new Ai,
            c = new ti;
        K(c, 1, a.qc);
        K(c, 2, a.pc);
        I(c, 16, a.cd);
        K(c, 17, a.oc);
        if (a.Mb) {
            var d = a.Mb,
                e = new qi;
            d.coldConfigData && K(e, 1, d.coldConfigData);
            d.appInstallData && K(e, 6, d.appInstallData);
            d.coldHashData && K(e, 3, d.coldHashData);
            d.hotHashData && K(e, 5, d.hotHashData);
            J(c, qi, 62, e)
        }
        if ((d = B.devicePixelRatio) && 1 != d) {
            if (null != d && "number" !== typeof d) throw Error("Value of float/double field must be a number|null|undefined, found " + typeof d + ": " + d);
            I(c, 65, d)
        }
        d = T("EXPERIMENTS_TOKEN", "");
        "" !== d && K(c,
            54, d);
        d = gj();
        if (0 < d.length) {
            e = new wi;
            for (var f = 0; f < d.length; f++) {
                var g = new ui;
                K(g, 1, d[f].key);
                vd(g, 2, vi, $c(d[f].value));
                Ad(e, 15, ui, g)
            }
            J(b, wi, 5, e)
        }
        Sm(a, c);
        Tm(b);
        Um(c);
        Vm(a, c);
        Wm(c);
        V("start_client_gcf") && Xm(c);
        T("DELEGATED_SESSION_ID") && !V("pageid_as_header_web") && (a = new zi, K(a, 3, T("DELEGATED_SESSION_ID")));
        !V("fill_delegate_context_in_gel_killswitch") && (a = T("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) && (d = yd(b, zi, 3) || new zi, a = K(d, 18, a), J(b, zi, 3, a));
        a = u(Object.entries(xj(T("DEVICE", ""))));
        for (d =
            a.next(); !d.done; d = a.next()) e = u(d.value), d = e.next().value, e = e.next().value, "cbrand" === d ? K(c, 12, e) : "cmodel" === d ? K(c, 13, e) : "cbr" === d ? K(c, 87, e) : "cbrver" === d ? K(c, 88, e) : "cos" === d ? K(c, 18, e) : "cosver" === d ? K(c, 19, e) : "cplatform" === d && I(c, 42, e);
        J(b, ti, 1, c);
        return b
    }

    function Sm(a, b, c) {
        a = a.nc;
        if ("WEB" === a || "MWEB" === a || 1 === a || 2 === a)
            if (b) {
                c = yd(b, ri, 96) || new ri;
                var d = gk();
                d = Object.keys(Bi).indexOf(d);
                d = -1 === d ? null : d;
                null !== d && I(c, 3, d);
                J(b, ri, 96, c)
            } else c && (c.client.mainAppWebInfo = null != (d = c.client.mainAppWebInfo) ? d : {}, c.client.mainAppWebInfo.webDisplayMode = gk())
    }

    function Tm(a, b) {
        var c = C("yt.embedded_player.embed_url");
        c && (a ? (b = yd(a, xi, 7) || new xi, K(b, 4, c), J(a, xi, 7, b)) : b && (b.thirdParty = {
            embedUrl: c
        }))
    }

    function Um(a, b) {
        var c;
        if (V("web_log_memory_total_kbytes") && (null == (c = B.navigator) ? 0 : c.deviceMemory)) {
            var d;
            c = null == (d = B.navigator) ? void 0 : d.deviceMemory;
            a ? Cd(a, 95, 1E6 * c) : b && (b.client.memoryTotalKbytes = "" + 1E6 * c)
        }
    }

    function Vm(a, b, c) {
        if (a.appInstallData)
            if (b) {
                var d;
                c = null != (d = yd(b, qi, 62)) ? d : new qi;
                K(c, 6, a.appInstallData);
                J(b, qi, 62, c)
            } else c && (c.client.configInfo = c.client.configInfo || {}, c.client.configInfo.appInstallData = a.appInstallData)
    }

    function Wm(a, b) {
        a: {
            var c = lk();
            if (c) {
                var d = hk[c.type || "unknown"] || "CONN_UNKNOWN";
                c = hk[c.effectiveType || "unknown"] || "CONN_UNKNOWN";
                "CONN_CELLULAR_UNKNOWN" === d && "CONN_UNKNOWN" !== c && (d = c);
                if ("CONN_UNKNOWN" !== d) break a;
                if ("CONN_UNKNOWN" !== c) {
                    d = c;
                    break a
                }
            }
            d = void 0
        }
        d && (a ? I(a, 61, ik[d]) : b && (b.client.connectionType = d));V("web_log_effective_connection_type") && (d = lk(), d = null != d && d.effectiveType ? kk.hasOwnProperty(d.effectiveType) ? kk[d.effectiveType] : "EFFECTIVE_CONNECTION_TYPE_UNKNOWN" : void 0, d && (a ? I(a, 94, jk[d]) :
            b && (b.client.effectiveConnectionType = d)))
    }

    function Zm(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = {};
        T("EOM_VISITOR_DATA") ? d = {
            "X-Goog-EOM-Visitor-Id": T("EOM_VISITOR_DATA")
        } : d = {
            "X-Goog-Visitor-Id": c.visitorData || T("VISITOR_DATA", "")
        };
        if (b && b.includes("www.youtube-nocookie.com")) return d;
        b = c.Xd || T("AUTHORIZATION");
        if (!b)
            if (a) b = "Bearer " + C("gapi.auth.getToken")().Wd;
            else {
                fk.g || (fk.g = new fk);
                a = {};
                if (c = pe([])) a.Authorization = c, c = void 0, void 0 === c && (c = Number(T("SESSION_INDEX", 0)), c = isNaN(c) ? 0 : c), V("voice_search_auth_header_removal") || (a["X-Goog-AuthUser"] =
                    c.toString()), "INNERTUBE_HOST_OVERRIDE" in Wi || (a["X-Origin"] = window.location.origin), "DELEGATED_SESSION_ID" in Wi && (a["X-Goog-PageId"] = T("DELEGATED_SESSION_ID"));
                V("pageid_as_header_web") || delete a["X-Goog-PageId"];
                d = Object.assign({}, d, a)
            }
        b && (d.Authorization = b);
        return d
    }

    function Xm(a, b) {
        if (!Mm.g) {
            var c = new Mm;
            Mm.g = c
        }
        c = Mm.g;
        var d = Y() - c.g;
        if (0 !== c.g && d < fj("send_config_hash_timer")) c = void 0;
        else {
            d = C("yt.gcf.config.coldConfigData");
            var e = C("yt.gcf.config.hotHashData"),
                f = C("yt.gcf.config.coldHashData");
            d && e && f && (c.g = Y());
            c = {
                coldConfigData: d,
                hotHashData: e,
                coldHashData: f
            }
        }
        if (e = c)
            if (c = e.coldConfigData, d = e.coldHashData, e = e.hotHashData, c && d && e)
                if (a) {
                    var g;
                    b = null != (g = yd(a, qi, 62)) ? g : new qi;
                    K(b, 1, c);
                    K(b, 3, d);
                    K(b, 5, e);
                    J(a, qi, 62, b)
                } else b && (b.client.configInfo = b.client.configInfo || {}, b.client.configInfo.coldConfigData = c, b.client.configInfo.coldHashData = d, b.client.configInfo.hotHashData = e)
    };
    var $m = C("ytPubsub2Pubsub2Instance") || new N;
    N.prototype.subscribe = N.prototype.subscribe;
    N.prototype.unsubscribeByKey = N.prototype.qb;
    N.prototype.publish = N.prototype.bb;
    N.prototype.clear = N.prototype.clear;
    D("ytPubsub2Pubsub2Instance", $m);
    D("ytPubsub2Pubsub2SubscribedKeys", C("ytPubsub2Pubsub2SubscribedKeys") || {});
    D("ytPubsub2Pubsub2TopicToKeys", C("ytPubsub2Pubsub2TopicToKeys") || {});
    D("ytPubsub2Pubsub2IsAsync", C("ytPubsub2Pubsub2IsAsync") || {});
    D("ytPubsub2Pubsub2SkipSubKey", null);

    function an(a, b, c) {
        c = void 0 === c ? {
            sampleRate: .1
        } : c;
        Math.random() < Math.min(.02, c.sampleRate / 100) && (a = {
            je: a,
            ie: b
        }, (b = C("ytPubsub2Pubsub2Instance")) && b.publish.call(b, "meta_logging_csi_event".toString(), "meta_logging_csi_event", a))
    };
    var bn = fj("max_body_size_to_compress", 5E5),
        cn = fj("min_body_size_to_compress", 500),
        dn = !0,
        en = 0,
        fn = 0,
        gn = fj("compression_performance_threshold_lr", 250),
        hn = fj("slow_compressions_before_abandon_count", 4);

    function jn(a, b, c, d) {
        var e = Y(),
            f = {
                startTime: e,
                ticks: {},
                infos: {}
            };
        if (dn) try {
            try {
                var g = (new Blob(b.split(""))).size
            } catch (q) {
                dj(q), g = null
            }
            if (null == g || !(g > bn || g < cn)) {
                var h = re(b);
                var k = k || {};
                k.Zc = !0;
                var l = new li(k);
                l.push(h, !0);
                if (l.err) throw l.msg || Ug[l.err];
                var m = l.result;
                var n = Y();
                f.ticks.gelc = n;
                fn++;
                V("disable_compression_due_to_performance_degredation") && n - e >= gn && (en++, V("abandon_compression_after_N_slow_zips") ? fn === fj("compression_disable_point") && en > hn && (dn = !1) : dn = !1);
                V("gel_compression_csi_killswitch") ||
                    !V("log_gel_compression_latency") && !V("log_gel_compression_latency_lr") || an("gel_compression", f, {
                        sampleRate: .1
                    });
                c.headers || (c.headers = {});
                c.headers["Content-Encoding"] = "gzip";
                c.postBody = m;
                c.postParams = void 0
            }
            d(a, c)
        } catch (q) {
            dj(q), d(a, c)
        } else d(a, c)
    };

    function kn(a) {
        a = Object.assign({}, a);
        delete a.Authorization;
        var b = pe();
        if (b) {
            var c = new Mf;
            c.update(T("INNERTUBE_API_KEY"));
            c.update(b);
            a.hash = Bc(c.digest(), 3)
        }
        return a
    };
    var ln;

    function mn() {
        ln || (ln = new vk("yt.innertube"));
        return ln
    }

    function nn(a, b, c, d) {
        if (d) return null;
        d = mn().get("nextId", !0) || 1;
        var e = mn().get("requests", !0) || {};
        e[d] = {
            method: a,
            request: b,
            authState: kn(c),
            requestTime: Math.round(Y())
        };
        mn().set("nextId", d + 1, 86400, !0);
        mn().set("requests", e, 86400, !0);
        return d
    }

    function on(a) {
        var b = mn().get("requests", !0) || {};
        delete b[a];
        mn().set("requests", b, 86400, !0)
    }

    function pn(a) {
        var b = mn().get("requests", !0);
        if (b) {
            for (var c in b) {
                var d = b[c];
                if (!(6E4 > Math.round(Y()) - d.requestTime)) {
                    var e = d.authState,
                        f = kn(Zm(!1));
                    kb(e, f) && (e = d.request, "requestTimeMs" in e && (e.requestTimeMs = Math.round(Y())), qn(a, d.method, e, {}));
                    delete b[c]
                }
            }
            mn().set("requests", b, 86400, !0)
        }
    };

    function rn(a) {
        this.rb = this.g = !1;
        this.potentialEsfErrorCounter = this.h = 0;
        this.handleError = function() {};
        this.Ta = function() {};
        this.now = Date.now;
        this.jb = !1;
        var b;
        this.Fc = null != (b = a.Fc) ? b : 100;
        var c;
        this.Dc = null != (c = a.Dc) ? c : 1;
        var d;
        this.Bc = null != (d = a.Bc) ? d : 2592E6;
        var e;
        this.Ac = null != (e = a.Ac) ? e : 12E4;
        var f;
        this.Cc = null != (f = a.Cc) ? f : 5E3;
        var g;
        this.I = null != (g = a.I) ? g : void 0;
        this.wb = !!a.wb;
        var h;
        this.ub = null != (h = a.ub) ? h : .1;
        var k;
        this.Eb = null != (k = a.Eb) ? k : 10;
        a.handleError && (this.handleError = a.handleError);
        a.Ta && (this.Ta = a.Ta);
        a.jb && (this.jb = a.jb);
        a.rb && (this.rb = a.rb);
        this.J = a.J;
        this.ga = a.ga;
        this.M = a.M;
        this.P = a.P;
        this.wa = a.wa;
        this.Vb =
            a.Vb;
        this.Ub = a.Ub;
        sn(this) && (!this.J || this.J("networkless_logging")) && tn(this)
    }

    function tn(a) {
        sn(a) && !a.jb && (a.g = !0, a.wb && Math.random() <= a.ub && a.M.Qc(a.I), un(a), a.P.ba() && a.pb(), a.P.Ka(a.Vb, a.pb.bind(a)), a.P.Ka(a.Ub, a.dc.bind(a)))
    }
    r = rn.prototype;
    r.writeThenSend = function(a, b) {
        var c = this;
        b = void 0 === b ? {} : b;
        if (sn(this) && this.g) {
            var d = {
                url: a,
                options: b,
                timestamp: this.now(),
                status: "NEW",
                sendCount: 0
            };
            this.M.set(d, this.I).then(function(e) {
                d.id = e;
                c.P.ba() && vn(c, d)
            }).catch(function(e) {
                vn(c, d);
                wn(c, e)
            })
        } else this.wa(a, b)
    };
    r.sendThenWrite = function(a, b, c) {
        var d = this;
        b = void 0 === b ? {} : b;
        if (sn(this) && this.g) {
            var e = {
                url: a,
                options: b,
                timestamp: this.now(),
                status: "NEW",
                sendCount: 0
            };
            this.J && this.J("nwl_skip_retry") && (e.skipRetry = c);
            if (this.P.ba() || this.J && this.J("nwl_aggressive_send_then_write") && !e.skipRetry) {
                if (!e.skipRetry) {
                    var f = b.onError ? b.onError : function() {};
                    b.onError = function(g, h) {
                        return A(function(k) {
                            if (1 == k.g) return z(k, d.M.set(e, d.I).catch(function(l) {
                                wn(d, l)
                            }), 2);
                            f(g, h);
                            k.g = 0
                        })
                    }
                }
                this.wa(a, b, e.skipRetry)
            } else this.M.set(e, this.I).catch(function(g) {
                d.wa(a, b, e.skipRetry);
                wn(d, g)
            })
        } else this.wa(a, b, this.J && this.J("nwl_skip_retry") && c)
    };
    r.sendAndWrite = function(a, b) {
        var c = this;
        b = void 0 === b ? {} : b;
        if (sn(this) && this.g) {
            var d = {
                    url: a,
                    options: b,
                    timestamp: this.now(),
                    status: "NEW",
                    sendCount: 0
                },
                e = !1,
                f = b.onSuccess ? b.onSuccess : function() {};
            d.options.onSuccess = function(g, h) {
                void 0 !== d.id ? c.M.Sa(d.id, c.I) : e = !0;
                c.P.Ma && c.J && c.J("vss_network_hint") && c.P.Ma(!0);
                f(g, h)
            };
            this.wa(d.url, d.options);
            this.M.set(d, this.I).then(function(g) {
                d.id = g;
                e && c.M.Sa(d.id, c.I)
            }).catch(function(g) {
                wn(c, g)
            })
        } else this.wa(a, b)
    };
    r.pb = function() {
        var a = this;
        if (!sn(this)) throw Pk("throttleSend");
        this.h || (this.h = this.ga.oa(function() {
            var b;
            return A(function(c) {
                if (1 == c.g) return z(c, a.M.kc("NEW", a.I), 2);
                if (3 != c.g) return b = c.h, b ? z(c, vn(a, b), 3) : (a.dc(), c.return());
                a.h && (a.h = 0, a.pb());
                c.g = 0
            })
        }, this.Fc))
    };
    r.dc = function() {
        this.ga.qa(this.h);
        this.h = 0
    };

    function vn(a, b) {
        var c, d;
        return A(function(e) {
            switch (e.g) {
                case 1:
                    if (!sn(a)) throw c = Pk("immediateSend"), c;
                    if (void 0 === b.id) {
                        e.B(2);
                        break
                    }
                    return z(e, a.M.hd(b.id, a.I), 3);
                case 3:
                    (d = e.h) || a.Ta(Error("The request cannot be found in the database."));
                case 2:
                    if (xn(a, b, a.Bc)) {
                        e.B(4);
                        break
                    }
                    a.Ta(Error("Networkless Logging: Stored logs request expired age limit"));
                    if (void 0 === b.id) {
                        e.B(5);
                        break
                    }
                    return z(e, a.M.Sa(b.id, a.I), 5);
                case 5:
                    return e.return();
                case 4:
                    b.skipRetry || (b = yn(a, b));
                    if (!b) {
                        e.B(0);
                        break
                    }
                    if (!b.skipRetry ||
                        void 0 === b.id) {
                        e.B(8);
                        break
                    }
                    return z(e, a.M.Sa(b.id, a.I), 8);
                case 8:
                    a.wa(b.url, b.options, !!b.skipRetry), e.g = 0
            }
        })
    }

    function yn(a, b) {
        if (!sn(a)) throw Pk("updateRequestHandlers");
        var c = b.options.onError ? b.options.onError : function() {};
        b.options.onError = function(e, f) {
            var g, h, k, l;
            return A(function(m) {
                switch (m.g) {
                    case 1:
                        g = zn(f);
                        (h = An(f)) && a.J && a.J("web_enable_error_204") && a.handleError(Error("Request failed due to compression"), b.url, f);
                        if (!(a.J && a.J("nwl_consider_error_code") && g || a.J && !a.J("nwl_consider_error_code") && a.potentialEsfErrorCounter <= a.Eb)) {
                            m.B(2);
                            break
                        }
                        if (!a.P.Hb) {
                            m.B(3);
                            break
                        }
                        return z(m, a.P.Hb(), 3);
                    case 3:
                        if (a.P.ba()) {
                            m.B(2);
                            break
                        }
                        c(e, f);
                        if (!a.J || !a.J("nwl_consider_error_code") || void 0 === (null == (k = b) ? void 0 : k.id)) {
                            m.B(6);
                            break
                        }
                        return z(m, a.M.Wb(b.id, a.I, !1), 6);
                    case 6:
                        return m.return();
                    case 2:
                        if (a.J && a.J("nwl_consider_error_code") && !g && a.potentialEsfErrorCounter > a.Eb) return m.return();
                        a.potentialEsfErrorCounter++;
                        if (void 0 === (null == (l = b) ? void 0 : l.id)) {
                            m.B(8);
                            break
                        }
                        return b.sendCount < a.Dc ? z(m, a.M.Wb(b.id, a.I, !0, h ? !1 : void 0), 12) : z(m, a.M.Sa(b.id, a.I), 8);
                    case 12:
                        a.ga.oa(function() {
                            a.P.ba() && a.pb()
                        }, a.Cc);
                    case 8:
                        c(e, f), m.g = 0
                }
            })
        };
        var d = b.options.onSuccess ? b.options.onSuccess : function() {};
        b.options.onSuccess = function(e, f) {
            var g;
            return A(function(h) {
                if (1 == h.g) return void 0 === (null == (g = b) ? void 0 : g.id) ? h.B(2) : z(h, a.M.Sa(b.id, a.I), 2);
                a.P.Ma && a.J && a.J("vss_network_hint") && a.P.Ma(!0);
                d(e, f);
                h.g = 0
            })
        };
        return b
    }

    function xn(a, b, c) {
        b = b.timestamp;
        return a.now() - b >= c ? !1 : !0
    }

    function un(a) {
        if (!sn(a)) throw Pk("retryQueuedRequests");
        a.M.kc("QUEUED", a.I).then(function(b) {
            b && !xn(a, b, a.Ac) ? a.ga.oa(function() {
                return A(function(c) {
                    if (1 == c.g) return void 0 === b.id ? c.B(2) : z(c, a.M.Wb(b.id, a.I), 2);
                    un(a);
                    c.g = 0
                })
            }) : a.P.ba() && a.pb()
        })
    }

    function wn(a, b) {
        a.Hc && !a.P.ba() ? a.Hc(b) : a.handleError(b)
    }

    function sn(a) {
        return !!a.I || a.rb
    }

    function zn(a) {
        var b;
        return (a = null == a ? void 0 : null == (b = a.error) ? void 0 : b.code) && 400 <= a && 599 >= a ? !1 : !0
    }

    function An(a) {
        var b;
        a = null == a ? void 0 : null == (b = a.error) ? void 0 : b.code;
        return !(400 !== a && 415 !== a)
    };
    var Bn;

    function Cn() {
        if (Bn) return Bn();
        var a = {};
        Bn = Dm("LogsDatabaseV2", {
            ab: (a.LogsRequestsStore = {
                eb: 2
            }, a),
            Ib: !1,
            upgrade: function(b, c, d) {
                c(2) && el(b, "LogsRequestsStore", {
                    keyPath: "id",
                    autoIncrement: !0
                });
                c(3);
                c(5) && (d = d.objectStore("LogsRequestsStore"), d.g.indexNames.contains("newRequest") && d.g.deleteIndex("newRequest"), ll(d, "newRequestV2", ["status", "interface", "timestamp"]));
                c(7) && b.g.objectStoreNames.contains("sapisid") && b.g.deleteObjectStore("sapisid");
                c(9) && b.g.objectStoreNames.contains("SWHealthLog") && b.g.deleteObjectStore("SWHealthLog")
            },
            version: 9
        });
        return Bn()
    };

    function Dn(a) {
        return xl(Cn(), a)
    }

    function En(a, b) {
        var c, d, e, f;
        return A(function(g) {
            if (1 == g.g) return c = {
                startTime: Y(),
                infos: {
                    transactionType: "YT_IDB_TRANSACTION_TYPE_WRITE"
                },
                ticks: {}
            }, z(g, Dn(b), 2);
            if (3 != g.g) return d = g.h, e = Object.assign({}, a, {
                options: JSON.parse(JSON.stringify(a.options)),
                interface: T("INNERTUBE_CONTEXT_CLIENT_NAME", 0)
            }), z(g, gl(d, "LogsRequestsStore", e), 3);
            f = g.h;
            c.ticks.tc = Y();
            Fn(c);
            return g.return(f)
        })
    }

    function Gn(a, b) {
        var c, d, e, f, g, h, k;
        return A(function(l) {
            if (1 == l.g) return c = {
                startTime: Y(),
                infos: {
                    transactionType: "YT_IDB_TRANSACTION_TYPE_READ"
                },
                ticks: {}
            }, z(l, Dn(b), 2);
            if (3 != l.g) return d = l.h, e = T("INNERTUBE_CONTEXT_CLIENT_NAME", 0), f = [a, e, 0], g = [a, e, Y()], h = IDBKeyRange.bound(f, g), k = void 0, z(l, dl(d, ["LogsRequestsStore"], {
                mode: "readwrite",
                V: !0
            }, function(m) {
                return ql(m.objectStore("LogsRequestsStore").index("newRequestV2"), {
                    query: h,
                    direction: "prev"
                }, function(n) {
                    n.ia() && (k = n.ia(), "NEW" === a && (k.status = "QUEUED",
                        n.update(k)))
                })
            }), 3);
            c.ticks.tc = Y();
            Fn(c);
            return l.return(k)
        })
    }

    function Hn(a, b) {
        var c;
        return A(function(d) {
            if (1 == d.g) return z(d, Dn(b), 2);
            c = d.h;
            return d.return(dl(c, ["LogsRequestsStore"], {
                mode: "readwrite",
                V: !0
            }, function(e) {
                var f = e.objectStore("LogsRequestsStore");
                return f.get(a).then(function(g) {
                    if (g) return g.status = "QUEUED", $k(f.g.put(g, void 0)).then(function() {
                        return g
                    })
                })
            }))
        })
    }

    function In(a, b, c, d) {
        c = void 0 === c ? !0 : c;
        var e;
        return A(function(f) {
            if (1 == f.g) return z(f, Dn(b), 2);
            e = f.h;
            return f.return(dl(e, ["LogsRequestsStore"], {
                mode: "readwrite",
                V: !0
            }, function(g) {
                var h = g.objectStore("LogsRequestsStore");
                return h.get(a).then(function(k) {
                    return k ? (k.status = "NEW", c && (k.sendCount += 1), void 0 !== d && (k.options.compress = d), $k(h.g.put(k, void 0)).then(function() {
                        return k
                    })) : Tk.resolve(void 0)
                })
            }))
        })
    }

    function Jn(a, b) {
        var c;
        return A(function(d) {
            if (1 == d.g) return z(d, Dn(b), 2);
            c = d.h;
            return d.return(c.delete("LogsRequestsStore", a))
        })
    }

    function Kn(a) {
        var b, c;
        return A(function(d) {
            if (1 == d.g) return z(d, Dn(a), 2);
            b = d.h;
            c = Y() - 2592E6;
            return z(d, dl(b, ["LogsRequestsStore"], {
                mode: "readwrite",
                V: !0
            }, function(e) {
                return nl(e.objectStore("LogsRequestsStore"), {}, function(f) {
                    if (f.ia().timestamp <= c) return f.delete().then(function() {
                        return f.continue()
                    })
                })
            }), 0)
        })
    }

    function Ln() {
        A(function(a) {
            return z(a, zm(), 0)
        })
    }

    function Fn(a) {
        V("nwl_csi_killswitch") || an("networkless_performance", a, {
            sampleRate: 1
        })
    };
    var Mn = {
        accountStateChangeSignedIn: 23,
        accountStateChangeSignedOut: 24,
        delayedEventMetricCaptured: 11,
        latencyActionBaselined: 6,
        latencyActionInfo: 7,
        latencyActionTicked: 5,
        offlineTransferStatusChanged: 2,
        offlineImageDownload: 335,
        playbackStartStateChanged: 9,
        systemHealthCaptured: 3,
        mangoOnboardingCompleted: 10,
        mangoPushNotificationReceived: 230,
        mangoUnforkDbMigrationError: 121,
        mangoUnforkDbMigrationSummary: 122,
        mangoUnforkDbMigrationPreunforkDbVersionNumber: 133,
        mangoUnforkDbMigrationPhoneMetadata: 134,
        mangoUnforkDbMigrationPhoneStorage: 135,
        mangoUnforkDbMigrationStep: 142,
        mangoAsyncApiMigrationEvent: 223,
        mangoDownloadVideoResult: 224,
        mangoHomepageVideoCount: 279,
        mangoHomeV3State: 295,
        mangoImageClientCacheHitEvent: 273,
        sdCardStatusChanged: 98,
        framesDropped: 12,
        thumbnailHovered: 13,
        deviceRetentionInfoCaptured: 14,
        thumbnailLoaded: 15,
        backToAppEvent: 318,
        streamingStatsCaptured: 17,
        offlineVideoShared: 19,
        appCrashed: 20,
        youThere: 21,
        offlineStateSnapshot: 22,
        mdxSessionStarted: 25,
        mdxSessionConnected: 26,
        mdxSessionDisconnected: 27,
        bedrockResourceConsumptionSnapshot: 28,
        nextGenWatchWatchSwiped: 29,
        kidsAccountsSnapshot: 30,
        zeroStepChannelCreated: 31,
        tvhtml5SearchCompleted: 32,
        offlineSharePairing: 34,
        offlineShareUnlock: 35,
        mdxRouteDistributionSnapshot: 36,
        bedrockRepetitiveActionTimed: 37,
        unpluggedDegradationInfo: 229,
        uploadMp4HeaderMoved: 38,
        uploadVideoTranscoded: 39,
        uploadProcessorStarted: 46,
        uploadProcessorEnded: 47,
        uploadProcessorReady: 94,
        uploadProcessorRequirementPending: 95,
        uploadProcessorInterrupted: 96,
        uploadFrontendEvent: 241,
        assetPackDownloadStarted: 41,
        assetPackDownloaded: 42,
        assetPackApplied: 43,
        assetPackDeleted: 44,
        appInstallAttributionEvent: 459,
        playbackSessionStopped: 45,
        adBlockerMessagingShown: 48,
        distributionChannelCaptured: 49,
        dataPlanCpidRequested: 51,
        detailedNetworkTypeCaptured: 52,
        sendStateUpdated: 53,
        receiveStateUpdated: 54,
        sendDebugStateUpdated: 55,
        receiveDebugStateUpdated: 56,
        kidsErrored: 57,
        mdxMsnSessionStatsFinished: 58,
        appSettingsCaptured: 59,
        mdxWebSocketServerHttpError: 60,
        mdxWebSocketServer: 61,
        startupCrashesDetected: 62,
        coldStartInfo: 435,
        offlinePlaybackStarted: 63,
        liveChatMessageSent: 225,
        liveChatUserPresent: 434,
        liveChatBeingModerated: 457,
        liveCreationCameraUpdated: 64,
        liveCreationEncodingCaptured: 65,
        liveCreationError: 66,
        liveCreationHealthUpdated: 67,
        liveCreationVideoEffectsCaptured: 68,
        liveCreationStageOccured: 75,
        liveCreationBroadcastScheduled: 123,
        liveCreationArchiveReplacement: 149,
        liveCreationCostreamingConnection: 421,
        liveCreationStreamWebrtcStats: 288,
        mdxSessionRecoveryStarted: 69,
        mdxSessionRecoveryCompleted: 70,
        mdxSessionRecoveryStopped: 71,
        visualElementShown: 72,
        visualElementHidden: 73,
        visualElementGestured: 78,
        visualElementStateChanged: 208,
        screenCreated: 156,
        playbackAssociated: 202,
        visualElementAttached: 215,
        playbackContextEvent: 214,
        cloudCastingPlaybackStarted: 74,
        webPlayerApiCalled: 76,
        tvhtml5AccountDialogOpened: 79,
        foregroundHeartbeat: 80,
        foregroundHeartbeatScreenAssociated: 111,
        kidsOfflineSnapshot: 81,
        mdxEncryptionSessionStatsFinished: 82,
        playerRequestCompleted: 83,
        liteSchedulerStatistics: 84,
        mdxSignIn: 85,
        spacecastMetadataLookupRequested: 86,
        spacecastBatchLookupRequested: 87,
        spacecastSummaryRequested: 88,
        spacecastPlayback: 89,
        spacecastDiscovery: 90,
        tvhtml5LaunchUrlComponentChanged: 91,
        mdxBackgroundPlaybackRequestCompleted: 92,
        mdxBrokenAdditionalDataDeviceDetected: 93,
        tvhtml5LocalStorage: 97,
        tvhtml5DeviceStorageStatus: 147,
        autoCaptionsAvailable: 99,
        playbackScrubbingEvent: 339,
        flexyState: 100,
        interfaceOrientationCaptured: 101,
        mainAppBrowseFragmentCache: 102,
        offlineCacheVerificationFailure: 103,
        offlinePlaybackExceptionDigest: 217,
        vrCopresenceStats: 104,
        vrCopresenceSyncStats: 130,
        vrCopresenceCommsStats: 137,
        vrCopresencePartyStats: 153,
        vrCopresenceEmojiStats: 213,
        vrCopresenceEvent: 141,
        vrCopresenceFlowTransitEvent: 160,
        vrPlaybackEvent: 345,
        kidsAgeGateTracking: 105,
        offlineDelayAllowedTracking: 106,
        mainAppAutoOfflineState: 107,
        videoAsThumbnailDownload: 108,
        videoAsThumbnailPlayback: 109,
        liteShowMore: 110,
        renderingError: 118,
        kidsProfilePinGateTracking: 119,
        abrTrajectory: 124,
        scrollEvent: 125,
        streamzIncremented: 126,
        kidsProfileSwitcherTracking: 127,
        kidsProfileCreationTracking: 129,
        buyFlowStarted: 136,
        mbsConnectionInitiated: 138,
        mbsPlaybackInitiated: 139,
        mbsLoadChildren: 140,
        liteProfileFetcher: 144,
        mdxRemoteTransaction: 146,
        reelPlaybackError: 148,
        reachabilityDetectionEvent: 150,
        mobilePlaybackEvent: 151,
        courtsidePlayerStateChanged: 152,
        musicPersistentCacheChecked: 154,
        musicPersistentCacheCleared: 155,
        playbackInterrupted: 157,
        playbackInterruptionResolved: 158,
        fixFopFlow: 159,
        anrDetection: 161,
        backstagePostCreationFlowEnded: 162,
        clientError: 163,
        gamingAccountLinkStatusChanged: 164,
        liteHousewarming: 165,
        buyFlowEvent: 167,
        kidsParentalGateTracking: 168,
        kidsSignedOutSettingsStatus: 437,
        kidsSignedOutPauseHistoryFixStatus: 438,
        tvhtml5WatchdogViolation: 444,
        ypcUpgradeFlow: 169,
        yongleStudy: 170,
        ypcUpdateFlowStarted: 171,
        ypcUpdateFlowCancelled: 172,
        ypcUpdateFlowSucceeded: 173,
        ypcUpdateFlowFailed: 174,
        liteGrowthkitPromo: 175,
        paymentFlowStarted: 341,
        transactionFlowShowPaymentDialog: 405,
        transactionFlowStarted: 176,
        transactionFlowSecondaryDeviceStarted: 222,
        transactionFlowSecondaryDeviceSignedOutStarted: 383,
        transactionFlowCancelled: 177,
        transactionFlowPaymentCallBackReceived: 387,
        transactionFlowPaymentSubmitted: 460,
        transactionFlowPaymentSucceeded: 329,
        transactionFlowSucceeded: 178,
        transactionFlowFailed: 179,
        transactionFlowPlayBillingConnectionStartEvent: 428,
        transactionFlowSecondaryDeviceSuccess: 458,
        transactionFlowErrorEvent: 411,
        liteVideoQualityChanged: 180,
        watchBreakEnablementSettingEvent: 181,
        watchBreakFrequencySettingEvent: 182,
        videoEffectsCameraPerformanceMetrics: 183,
        adNotify: 184,
        startupTelemetry: 185,
        playbackOfflineFallbackUsed: 186,
        outOfMemory: 187,
        ypcPauseFlowStarted: 188,
        ypcPauseFlowCancelled: 189,
        ypcPauseFlowSucceeded: 190,
        ypcPauseFlowFailed: 191,
        uploadFileSelected: 192,
        ypcResumeFlowStarted: 193,
        ypcResumeFlowCancelled: 194,
        ypcResumeFlowSucceeded: 195,
        ypcResumeFlowFailed: 196,
        adsClientStateChange: 197,
        ypcCancelFlowStarted: 198,
        ypcCancelFlowCancelled: 199,
        ypcCancelFlowSucceeded: 200,
        ypcCancelFlowFailed: 201,
        ypcCancelFlowGoToPaymentProcessor: 402,
        ypcDeactivateFlowStarted: 320,
        ypcRedeemFlowStarted: 203,
        ypcRedeemFlowCancelled: 204,
        ypcRedeemFlowSucceeded: 205,
        ypcRedeemFlowFailed: 206,
        ypcFamilyCreateFlowStarted: 258,
        ypcFamilyCreateFlowCancelled: 259,
        ypcFamilyCreateFlowSucceeded: 260,
        ypcFamilyCreateFlowFailed: 261,
        ypcFamilyManageFlowStarted: 262,
        ypcFamilyManageFlowCancelled: 263,
        ypcFamilyManageFlowSucceeded: 264,
        ypcFamilyManageFlowFailed: 265,
        restoreContextEvent: 207,
        embedsAdEvent: 327,
        autoplayTriggered: 209,
        clientDataErrorEvent: 210,
        experimentalVssValidation: 211,
        tvhtml5TriggeredEvent: 212,
        tvhtml5FrameworksFieldTrialResult: 216,
        tvhtml5FrameworksFieldTrialStart: 220,
        musicOfflinePreferences: 218,
        watchTimeSegment: 219,
        appWidthLayoutError: 221,
        accountRegistryChange: 226,
        userMentionAutoCompleteBoxEvent: 227,
        downloadRecommendationEnablementSettingEvent: 228,
        musicPlaybackContentModeChangeEvent: 231,
        offlineDbOpenCompleted: 232,
        kidsFlowEvent: 233,
        kidsFlowCorpusSelectedEvent: 234,
        videoEffectsEvent: 235,
        unpluggedOpsEogAnalyticsEvent: 236,
        playbackAudioRouteEvent: 237,
        interactionLoggingDebugModeError: 238,
        offlineYtbRefreshed: 239,
        kidsFlowError: 240,
        musicAutoplayOnLaunchAttempted: 242,
        deviceContextActivityEvent: 243,
        deviceContextEvent: 244,
        templateResolutionException: 245,
        musicSideloadedPlaylistServiceCalled: 246,
        embedsStorageAccessNotChecked: 247,
        embedsHasStorageAccessResult: 248,
        embedsItpPlayedOnReload: 249,
        embedsRequestStorageAccessResult: 250,
        embedsShouldRequestStorageAccessResult: 251,
        embedsRequestStorageAccessState: 256,
        embedsRequestStorageAccessFailedState: 257,
        embedsItpWatchLaterResult: 266,
        searchSuggestDecodingPayloadFailure: 252,
        siriShortcutActivated: 253,
        tvhtml5KeyboardPerformance: 254,
        latencyActionSpan: 255,
        elementsLog: 267,
        ytbFileOpened: 268,
        tfliteModelError: 269,
        tvhtml5ApiTest: 270,
        yongleUsbSetup: 271,
        touStrikeInterstitialEvent: 272,
        liteStreamToSave: 274,
        appBundleClientEvent: 275,
        ytbFileCreationFailed: 276,
        adNotifyFailure: 278,
        ytbTransferFailed: 280,
        blockingRequestFailed: 281,
        liteAccountSelector: 282,
        liteAccountUiCallbacks: 283,
        dummyPayload: 284,
        browseResponseValidationEvent: 285,
        entitiesError: 286,
        musicIosBackgroundFetch: 287,
        mdxNotificationEvent: 289,
        layersValidationError: 290,
        musicPwaInstalled: 291,
        liteAccountCleanup: 292,
        html5PlayerHealthEvent: 293,
        watchRestoreAttempt: 294,
        liteAccountSignIn: 296,
        notaireEvent: 298,
        kidsVoiceSearchEvent: 299,
        adNotifyFilled: 300,
        delayedEventDropped: 301,
        analyticsSearchEvent: 302,
        systemDarkThemeOptOutEvent: 303,
        flowEvent: 304,
        networkConnectivityBaselineEvent: 305,
        ytbFileImported: 306,
        downloadStreamUrlExpired: 307,
        directSignInEvent: 308,
        lyricImpressionEvent: 309,
        accessibilityStateEvent: 310,
        tokenRefreshEvent: 311,
        genericAttestationExecution: 312,
        tvhtml5VideoSeek: 313,
        unpluggedAutoPause: 314,
        scrubbingEvent: 315,
        bedtimeReminderEvent: 317,
        tvhtml5UnexpectedRestart: 319,
        tvhtml5StabilityTraceEvent: 478,
        tvhtml5OperationHealth: 467,
        tvhtml5WatchKeyEvent: 321,
        voiceLanguageChanged: 322,
        tvhtml5LiveChatStatus: 323,
        parentToolsCorpusSelectedEvent: 324,
        offerAdsEnrollmentInitiated: 325,
        networkQualityIntervalEvent: 326,
        deviceStartupMetrics: 328,
        heartbeatActionPlayerTransitioned: 330,
        tvhtml5Lifecycle: 331,
        heartbeatActionPlayerHalted: 332,
        adaptiveInlineMutedSettingEvent: 333,
        mainAppLibraryLoadingState: 334,
        thirdPartyLogMonitoringEvent: 336,
        appShellAssetLoadReport: 337,
        tvhtml5AndroidAttestation: 338,
        tvhtml5StartupSoundEvent: 340,
        iosBackgroundRefreshTask: 342,
        iosBackgroundProcessingTask: 343,
        sliEventBatch: 344,
        postImpressionEvent: 346,
        musicSideloadedPlaylistExport: 347,
        idbUnexpectedlyClosed: 348,
        voiceSearchEvent: 349,
        mdxSessionCastEvent: 350,
        idbQuotaExceeded: 351,
        idbTransactionEnded: 352,
        idbTransactionAborted: 353,
        tvhtml5KeyboardLogging: 354,
        idbIsSupportedCompleted: 355,
        creatorStudioMobileEvent: 356,
        idbDataCorrupted: 357,
        parentToolsAppChosenEvent: 358,
        webViewBottomSheetResized: 359,
        activeStateControllerScrollPerformanceSummary: 360,
        navigatorValidation: 361,
        mdxSessionHeartbeat: 362,
        clientHintsPolyfillDiagnostics: 363,
        clientHintsPolyfillEvent: 364,
        proofOfOriginTokenError: 365,
        kidsAddedAccountSummary: 366,
        musicWearableDevice: 367,
        ypcRefundFlowEvent: 368,
        tvhtml5PlaybackMeasurementEvent: 369,
        tvhtml5WatermarkMeasurementEvent: 370,
        clientExpGcfPropagationEvent: 371,
        mainAppReferrerIntent: 372,
        leaderLockEnded: 373,
        leaderLockAcquired: 374,
        googleHatsEvent: 375,
        persistentLensLaunchEvent: 376,
        parentToolsChildWelcomeChosenEvent: 378,
        browseThumbnailPreloadEvent: 379,
        finalPayload: 380,
        mdxDialAdditionalDataUpdateEvent: 381,
        webOrchestrationTaskLifecycleRecord: 382,
        startupSignalEvent: 384,
        accountError: 385,
        gmsDeviceCheckEvent: 386,
        accountSelectorEvent: 388,
        accountUiCallbacks: 389,
        mdxDialAdditionalDataProbeEvent: 390,
        downloadsSearchIcingApiStats: 391,
        downloadsSearchIndexUpdatedEvent: 397,
        downloadsSearchIndexSnapshot: 398,
        dataPushClientEvent: 392,
        kidsCategorySelectedEvent: 393,
        mdxDeviceManagementSnapshotEvent: 394,
        prefetchRequested: 395,
        prefetchableCommandExecuted: 396,
        gelDebuggingEvent: 399,
        webLinkTtsPlayEnd: 400,
        clipViewInvalid: 401,
        persistentStorageStateChecked: 403,
        cacheWipeoutEvent: 404,
        playerEvent: 410,
        sfvEffectPipelineStartedEvent: 412,
        sfvEffectPipelinePausedEvent: 429,
        sfvEffectPipelineEndedEvent: 413,
        sfvEffectChosenEvent: 414,
        sfvEffectLoadedEvent: 415,
        sfvEffectUserInteractionEvent: 465,
        sfvEffectFirstFrameProcessedLatencyEvent: 416,
        sfvEffectAggregatedFramesProcessedLatencyEvent: 417,
        sfvEffectAggregatedFramesDroppedEvent: 418,
        sfvEffectPipelineErrorEvent: 430,
        sfvEffectGraphFrozenEvent: 419,
        sfvEffectGlThreadBlockedEvent: 420,
        mdeVideoChangedEvent: 442,
        mdePlayerPerformanceMetrics: 472,
        genericClientExperimentEvent: 423,
        homePreloadTaskScheduled: 424,
        homePreloadTaskExecuted: 425,
        homePreloadCacheHit: 426,
        polymerPropertyChangedInObserver: 427,
        applicationStarted: 431,
        networkCronetRttBatch: 432,
        networkCronetRttSummary: 433,
        repeatChapterLoopEvent: 436,
        seekCancellationEvent: 462,
        offlineTransferStarted: 4,
        musicOfflineMixtapePreferencesChanged: 16,
        mangoDailyNewVideosNotificationAttempt: 40,
        mangoDailyNewVideosNotificationError: 77,
        dtwsPlaybackStarted: 112,
        dtwsTileFetchStarted: 113,
        dtwsTileFetchCompleted: 114,
        dtwsTileFetchStatusChanged: 145,
        dtwsKeyframeDecoderBufferSent: 115,
        dtwsTileUnderflowedOnNonkeyframe: 116,
        dtwsBackfillFetchStatusChanged: 143,
        dtwsBackfillUnderflowed: 117,
        dtwsAdaptiveLevelChanged: 128,
        blockingVisitorIdTimeout: 277,
        liteSocial: 18,
        mobileJsInvocation: 297,
        biscottiBasedDetection: 439,
        coWatchStateChange: 440,
        embedsVideoDataDidChange: 441,
        shortsFirst: 443,
        cruiseControlEvent: 445,
        qoeClientLoggingContext: 446,
        atvRecommendationJobExecuted: 447,
        tvhtml5UserFeedback: 448,
        producerProjectCreated: 449,
        producerProjectOpened: 450,
        producerProjectDeleted: 451,
        producerProjectElementAdded: 453,
        producerProjectElementRemoved: 454,
        tvhtml5ShowClockEvent: 455,
        deviceCapabilityCheckMetrics: 456,
        youtubeClearcutEvent: 461,
        offlineBrowseFallbackEvent: 463,
        getCtvTokenEvent: 464,
        startupDroppedFramesSummary: 466,
        screenshotEvent: 468,
        miniAppPlayEvent: 469,
        elementsDebugCounters: 470,
        fontLoadEvent: 471,
        webKillswitchReceived: 473,
        webKillswitchExecuted: 474,
        cameraOpenEvent: 475,
        manualSmoothnessMeasurement: 476,
        tvhtml5AppQualityEvent: 477,
        polymerPropertyAccessEvent: 479,
        miniAppSdkUsage: 480,
        cobaltTelemetryEvent: 481
    };
    var Nn = {},
        On = Dm("ServiceWorkerLogsDatabase", {
            ab: (Nn.SWHealthLog = {
                eb: 1
            }, Nn),
            Ib: !0,
            upgrade: function(a, b) {
                b(1) && ll(el(a, "SWHealthLog", {
                    keyPath: "id",
                    autoIncrement: !0
                }), "swHealthNewRequest", ["interface", "timestamp"])
            },
            version: 1
        });

    function Pn(a) {
        return xl(On(), a)
    }

    function Qn(a) {
        var b, c;
        A(function(d) {
            if (1 == d.g) return z(d, Pn(a), 2);
            b = d.h;
            c = Y() - 2592E6;
            return z(d, dl(b, ["SWHealthLog"], {
                mode: "readwrite",
                V: !0
            }, function(e) {
                return nl(e.objectStore("SWHealthLog"), {}, function(f) {
                    if (f.ia().timestamp <= c) return f.delete().then(function() {
                        return f.continue()
                    })
                })
            }), 0)
        })
    }

    function Rn(a) {
        var b;
        return A(function(c) {
            if (1 == c.g) return z(c, Pn(a), 2);
            b = c.h;
            return z(c, b.clear("SWHealthLog"), 0)
        })
    };
    var Sn = {},
        Tn = 0;

    function Un(a) {
        var b = new Image,
            c = "" + Tn++;
        Sn[c] = b;
        b.onload = b.onerror = function() {
            delete Sn[c]
        };
        b.src = a
    };

    function Vn() {
        this.g = new Map;
        this.h = !1
    }

    function Wn() {
        if (!Vn.g) {
            var a = C("yt.networkRequestMonitor.instance") || new Vn;
            D("yt.networkRequestMonitor.instance", a);
            Vn.g = a
        }
        return Vn.g
    }
    Vn.prototype.requestComplete = function(a, b) {
        b && (this.h = !0);
        a = this.removeParams(a);
        this.g.get(a) || this.g.set(a, b)
    };
    Vn.prototype.isEndpointCFR = function(a) {
        a = this.removeParams(a);
        return (a = this.g.get(a)) ? !1 : !1 === a && this.h ? !0 : null
    };
    Vn.prototype.removeParams = function(a) {
        return a.split("?")[0]
    };
    Vn.prototype.removeParams = Vn.prototype.removeParams;
    Vn.prototype.isEndpointCFR = Vn.prototype.isEndpointCFR;
    Vn.prototype.requestComplete = Vn.prototype.requestComplete;
    Vn.getInstance = Wn;
    var Xn;

    function Yn() {
        Xn || (Xn = new vk("yt.offline"));
        return Xn
    }

    function Zn(a) {
        if (V("offline_error_handling")) {
            var b = Yn().get("errors", !0) || {};
            b[a.message] = {
                name: a.name,
                stack: a.stack
            };
            a.level && (b[a.message].level = a.level);
            Yn().set("errors", b, 2592E3, !0)
        }
    };

    function Z() {
        Ve.call(this);
        var a = this;
        this.l = !1;
        this.h = af();
        this.h.Ka("networkstatus-online", function() {
            if (a.l && V("offline_error_handling")) {
                var b = Yn().get("errors", !0);
                if (b) {
                    for (var c in b)
                        if (b[c]) {
                            var d = new mk(c, "sent via offline_errors");
                            d.name = b[c].name;
                            d.stack = b[c].stack;
                            d.level = b[c].level;
                            cj(d)
                        }
                    Yn().set("errors", {}, 2592E3, !0)
                }
            }
        })
    }
    w(Z, Ve);

    function $n() {
        if (!Z.g) {
            var a = C("yt.networkStatusManager.instance") || new Z;
            D("yt.networkStatusManager.instance", a);
            Z.g = a
        }
        return Z.g
    }
    r = Z.prototype;
    r.ba = function() {
        return this.h.ba()
    };
    r.Ma = function(a) {
        this.h.h = a
    };
    r.Xc = function() {
        var a = window.navigator.onLine;
        return void 0 === a ? !0 : a
    };
    r.Tc = function() {
        this.l = !0
    };
    r.Ka = function(a, b) {
        return this.h.Ka(a, b)
    };
    r.Hb = function(a) {
        a = Ze(this.h, a);
        a.then(function(b) {
            V("use_cfr_monitor") && Wn().requestComplete("generate_204", b)
        });
        return a
    };
    Z.prototype.sendNetworkCheckRequest = Z.prototype.Hb;
    Z.prototype.listen = Z.prototype.Ka;
    Z.prototype.enableErrorFlushing = Z.prototype.Tc;
    Z.prototype.getWindowStatus = Z.prototype.Xc;
    Z.prototype.networkStatusHint = Z.prototype.Ma;
    Z.prototype.isNetworkAvailable = Z.prototype.ba;
    Z.getInstance = $n;

    function ao(a) {
        a = void 0 === a ? {} : a;
        Ve.call(this);
        var b = this;
        this.h = this.H = 0;
        this.l = $n();
        var c = C("yt.networkStatusManager.instance.listen").bind(this.l);
        c && (a.Gb ? (this.Gb = a.Gb, c("networkstatus-online", function() {
            bo(b, "publicytnetworkstatus-online")
        }), c("networkstatus-offline", function() {
            bo(b, "publicytnetworkstatus-offline")
        })) : (c("networkstatus-online", function() {
            We(b, "publicytnetworkstatus-online")
        }), c("networkstatus-offline", function() {
            We(b, "publicytnetworkstatus-offline")
        })))
    }
    w(ao, Ve);
    ao.prototype.ba = function() {
        var a = C("yt.networkStatusManager.instance.isNetworkAvailable");
        return a ? a.bind(this.l)() : !0
    };
    ao.prototype.Ma = function(a) {
        var b = C("yt.networkStatusManager.instance.networkStatusHint").bind(this.l);
        b && b(a)
    };
    ao.prototype.Hb = function(a) {
        var b = this,
            c;
        return A(function(d) {
            c = C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.l);
            return V("skip_network_check_if_cfr") && Wn().isEndpointCFR("generate_204") ? d.return(new Promise(function(e) {
                var f;
                b.Ma((null == (f = window.navigator) ? void 0 : f.onLine) || !0);
                e(b.ba())
            })) : c ? d.return(c(a)) : d.return(!0)
        })
    };

    function bo(a, b) {
        a.Gb ? a.h ? (bf.qa(a.H), a.H = bf.oa(function() {
            a.u !== b && (We(a, b), a.u = b, a.h = Y())
        }, a.Gb - (Y() - a.h))) : (We(a, b), a.u = b, a.h = Y()) : We(a, b)
    };
    var co;

    function eo() {
        var a = rn.call;
        co || (co = new ao({
            be: !0,
            ae: !0
        }));
        a.call(rn, this, {
            M: {
                Qc: Kn,
                Sa: Jn,
                kc: Gn,
                hd: Hn,
                Wb: In,
                set: En
            },
            P: co,
            handleError: function(b, c, d) {
                var e, f = null == d ? void 0 : null == (e = d.error) ? void 0 : e.code;
                if (400 === f || 415 === f) {
                    var g;
                    dj(new mk(b.message, c, null == d ? void 0 : null == (g = d.error) ? void 0 : g.code), void 0, void 0, void 0, !0)
                } else cj(b)
            },
            Ta: dj,
            wa: fo,
            now: Y,
            Hc: Zn,
            ga: uk(),
            Vb: "publicytnetworkstatus-online",
            Ub: "publicytnetworkstatus-offline",
            wb: !0,
            ub: .1,
            Eb: fj("potential_esf_error_limit", 10),
            J: V,
            jb: !(nk() && "www.youtube-nocookie.com" !== Wb(document.location.toString()))
        });
        this.i = new ag;
        V("networkless_immediately_drop_all_requests") && Ln();
        Am("LogsDatabaseV2")
    }
    w(eo, rn);

    function go() {
        var a = C("yt.networklessRequestController.instance");
        a || (a = new eo, D("yt.networklessRequestController.instance", a), V("networkless_logging") && Jl().then(function(b) {
            a.I = b;
            tn(a);
            a.i.resolve();
            a.wb && Math.random() <= a.ub && a.I && Qn(a.I);
            V("networkless_immediately_drop_sw_health_store") && ho(a)
        }));
        return a
    }
    eo.prototype.writeThenSend = function(a, b) {
        b || (b = {});
        nk() || (this.g = !1);
        rn.prototype.writeThenSend.call(this, a, b)
    };
    eo.prototype.sendThenWrite = function(a, b, c) {
        b || (b = {});
        nk() || (this.g = !1);
        rn.prototype.sendThenWrite.call(this, a, b, c)
    };
    eo.prototype.sendAndWrite = function(a, b) {
        b || (b = {});
        nk() || (this.g = !1);
        rn.prototype.sendAndWrite.call(this, a, b)
    };
    eo.prototype.awaitInitialization = function() {
        return this.i.promise
    };

    function ho(a) {
        var b;
        A(function(c) {
            if (!a.I) throw b = Pk("clearSWHealthLogsDb"), b;
            return c.return(Rn(a.I).catch(function(d) {
                a.handleError(d)
            }))
        })
    }

    function fo(a, b, c) {
        b = V("web_fp_via_jspb") ? Object.assign({}, b) : b;
        V("use_cfr_monitor") && io(a, b);
        if (V("use_request_time_ms_header")) b.headers && (b.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round(Y())));
        else {
            var d;
            if (null == (d = b.postParams) ? 0 : d.requestTimeMs) b.postParams.requestTimeMs = Math.round(Y())
        }
        if (c && 0 === Object.keys(b).length) {
            var e = void 0 === e ? "" : e;
            var f = void 0 === f ? !1 : f;
            var g = void 0 === g ? !1 : g;
            if (a)
                if (e) Nj(a, void 0, "POST", e);
                else if (T("USE_NET_AJAX_FOR_PING_TRANSPORT", !1)) Nj(a, void 0, "GET",
                "", void 0, void 0, f, g);
            else {
                b: {
                    try {
                        var h = new Xa({
                            url: a
                        });
                        if (h.i && h.h || h.l) {
                            var k = Vb(a.match(Ub)[5] || null);
                            var l = !(!k || !k.endsWith("/aclk") || "1" !== ac(a, "ri"));
                            break b
                        }
                    } catch (n) {}
                    l = !1
                }
                if (l) {
                    b: {
                        try {
                            if (window.navigator && window.navigator.sendBeacon && window.navigator.sendBeacon(a, "")) {
                                var m = !0;
                                break b
                            }
                        } catch (n) {}
                        m = !1
                    }
                    c = m ? !0 : !1
                }
                else c = !1;c || Un(a)
            }
        } else b.compress ? b.postBody ? ("string" !== typeof b.postBody && (b.postBody = JSON.stringify(b.postBody)), jn(a, b.postBody, b, Kj)) : jn(a, JSON.stringify(b.postParams), b, Sj) :
            Kj(a, b)
    }

    function io(a, b) {
        var c = b.onError ? b.onError : function() {};
        b.onError = function(e, f) {
            Wn().requestComplete(a, !1);
            c(e, f)
        };
        var d = b.onSuccess ? b.onSuccess : function() {};
        b.onSuccess = function(e, f) {
            Wn().requestComplete(a, !0);
            d(e, f)
        }
    };
    var jo = B.ytNetworklessLoggingInitializationOptions || {
        isNwlInitialized: !1
    };
    D("ytNetworklessLoggingInitializationOptions", jo);

    function ko(a) {
        var b = this;
        this.config_ = null;
        a ? this.config_ = a : Pm() && (this.config_ = Qm());
        qk(function() {
            pn(b)
        }, 5E3)
    }
    ko.prototype.isReady = function() {
        !this.config_ && Pm() && (this.config_ = Qm());
        return !!this.config_
    };

    function qn(a, b, c, d) {
        function e(x) {
            x = void 0 === x ? !1 : x;
            var y;
            if (d.retry && "www.youtube-nocookie.com" != h && (x || V("skip_ls_gel_retry") || "application/json" !== g.headers["Content-Type"] || (y = nn(b, c, l, k)), y)) {
                var E = g.onSuccess,
                    O = g.onFetchSuccess;
                g.onSuccess = function(Q, Da) {
                    on(y);
                    E(Q, Da)
                };
                c.onFetchSuccess = function(Q, Da) {
                    on(y);
                    O(Q, Da)
                }
            }
            try {
                if (x && d.retry && !d.vc.bypassNetworkless) g.method = "POST", d.vc.writeThenSend ? go().writeThenSend(p, g) : go().sendAndWrite(p, g);
                else if (d.compress)
                    if (g.postBody) {
                        var U = g.postBody;
                        "string" !== typeof U && (U = JSON.stringify(g.postBody));
                        jn(p, U, g, Kj)
                    } else jn(p, JSON.stringify(g.postParams), g, Sj);
                else V("web_all_payloads_via_jspb") ? Kj(p, g) : Sj(p, g)
            } catch (Q) {
                if ("InvalidAccessError" == Q.name) y && (on(y), y = 0), dj(Error("An extension is blocking network request."));
                else throw Q;
            }
            y && qk(function() {
                pn(a)
            }, 5E3)
        }!T("VISITOR_DATA") && "visitor_id" !== b && .01 > Math.random() && dj(new mk("Missing VISITOR_DATA when sending innertube request.", b, c, d));
        if (!a.isReady()) {
            var f = new mk("innertube xhrclient not ready", b, c, d);
            cj(f);
            throw f;
        }
        var g = {
            headers: d.headers || {},
            method: "POST",
            postParams: c,
            postBody: d.postBody,
            postBodyFormat: d.postBodyFormat || "JSON",
            onTimeout: function() {
                d.onTimeout()
            },
            onFetchTimeout: d.onTimeout,
            onSuccess: function(x, y) {
                if (d.onSuccess) d.onSuccess(y)
            },
            onFetchSuccess: function(x) {
                if (d.onSuccess) d.onSuccess(x)
            },
            onError: function(x, y) {
                if (d.onError) d.onError(y)
            },
            onFetchError: function(x) {
                if (d.onError) d.onError(x)
            },
            timeout: d.timeout,
            withCredentials: !0,
            compress: d.compress
        };
        g.headers["Content-Type"] || (g.headers["Content-Type"] = "application/json");
        var h = "";
        (f = a.config_.dd) && (h = f);
        var k = a.config_.fd || !1,
            l = Zm(k, h, d);
        Object.assign(g.headers, l);
        (f = g.headers.Authorization) && !h && k && (g.headers["x-origin"] = window.location.origin);
        var m = "/youtubei/" + a.config_.bd + "/" + b,
            n = {
                alt: "json"
            },
            q = a.config_.ed && f;
        q = q && f.startsWith("Bearer");
        q || (n.key = a.config_.ad);
        var p = yj("" + h + m, n || {}, !0);
        C("ytNetworklessLoggingInitializationOptions") &&
            jo.isNwlInitialized ? Hl().then(function(x) {
                e(x)
            }) : e(!1)
    };

    function lo() {
        var a = C("_lact", window);
        return null == a ? -1 : Math.max(Date.now() - a, 0)
    };
    var mo = B.ytPubsubPubsubInstance || new N,
        no = B.ytPubsubPubsubSubscribedKeys || {},
        oo = B.ytPubsubPubsubTopicToKeys || {},
        po = B.ytPubsubPubsubIsSynchronous || {};
    N.prototype.subscribe = N.prototype.subscribe;
    N.prototype.unsubscribeByKey = N.prototype.qb;
    N.prototype.publish = N.prototype.bb;
    N.prototype.clear = N.prototype.clear;
    D("ytPubsubPubsubInstance", mo);
    D("ytPubsubPubsubTopicToKeys", oo);
    D("ytPubsubPubsubIsSynchronous", po);
    D("ytPubsubPubsubSubscribedKeys", no);
    var qo = Symbol("injectionDeps");

    function ro() {
        this.key = Mm
    }

    function so() {
        this.h = new Map;
        this.g = new Map
    }
    so.prototype.resolve = function(a) {
        return a instanceof ro ? to(this, a.key, [], !0) : to(this, a, [])
    };

    function to(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        if (-1 < c.indexOf(b)) throw Error("Deps cycle for: " + b);
        if (a.g.has(b)) return a.g.get(b);
        if (!a.h.has(b)) {
            if (d) return;
            throw Error("No provider for: " + b);
        }
        d = a.h.get(b);
        c.push(b);
        if (void 0 !== d.td) var e = d.td;
        else if (d.sd) e = d[qo] ? uo(a, d[qo], c) : [], e = d.sd.apply(d, v(e));
        else if (d.rd) {
            e = d.rd;
            var f = e[qo] ? uo(a, e[qo], c) : [];
            e = new(Function.prototype.bind.apply(e, [null].concat(v(f))))
        } else throw Error("Could not resolve providers for: " + b);
        c.pop();
        d.he || a.g.set(b, e);
        return e
    }

    function uo(a, b, c) {
        return b ? b.map(function(d) {
            return d instanceof ro ? to(a, d.key, c, !0) : to(a, d, c)
        }) : []
    };
    var vo;

    function wo() {
        vo || (vo = new so);
        return vo
    };
    var xo = window;

    function yo() {
        var a, b;
        return "h5vcc" in xo && (null == (a = xo.h5vcc.traceEvent) ? 0 : a.traceBegin) && (null == (b = xo.h5vcc.traceEvent) ? 0 : b.traceEnd) ? 1 : "performance" in xo && xo.performance.mark && xo.performance.measure ? 2 : 0
    }

    function zo(a) {
        switch (yo()) {
            case 1:
                xo.h5vcc.traceEvent.traceBegin("YTLR", a);
                break;
            case 2:
                xo.performance.mark(a + "-start");
                break;
            case 0:
                break;
            default:
                Sd()
        }
    }

    function Ao(a) {
        switch (yo()) {
            case 1:
                xo.h5vcc.traceEvent.traceEnd("YTLR", a);
                break;
            case 2:
                var b = a + "-start",
                    c = a + "-end";
                xo.performance.mark(c);
                xo.performance.measure(a, b, c);
                break;
            case 0:
                break;
            default:
                Sd()
        }
    };
    var Bo = V("web_enable_lifecycle_monitoring") && 0 !== yo(),
        Co = V("web_enable_lifecycle_monitoring");

    function Do(a) {
        var b = this;
        var c = void 0 === c ? 0 : c;
        var d = void 0 === d ? uk() : d;
        this.l = c;
        this.h = d;
        this.i = new ag;
        this.g = a;
        for (a = {
                Ia: 0
            }; a.Ia < this.g.length; a = {
                mb: a.mb,
                Ia: a.Ia
            }, a.Ia++) a.mb = this.g[a.Ia], c = function(e) {
            return function() {
                e.mb.Ob();
                b.g[e.Ia].Fb = !0;
                b.g.every(function(f) {
                    return !0 === f.Fb
                }) && b.i.resolve()
            }
        }(a), d = rk(c, Eo(this, a.mb)), this.g[a.Ia] = Object.assign({}, a.mb, {
            Ob: c,
            jobId: d
        })
    }

    function Fo(a) {
        var b = Array.from(a.g.keys()).sort(function(d, e) {
            return Eo(a, a.g[e]) - Eo(a, a.g[d])
        });
        b = u(b);
        for (var c = b.next(); !c.done; c = b.next()) c = a.g[c.value], void 0 === c.jobId || c.Fb || (a.h.qa(c.jobId), rk(c.Ob, 10))
    }
    Do.prototype.cancel = function() {
        for (var a = u(this.g), b = a.next(); !b.done; b = a.next()) b = b.value, void 0 === b.jobId || b.Fb || this.h.qa(b.jobId), b.Fb = !0;
        this.i.resolve()
    };

    function Eo(a, b) {
        var c;
        return null != (c = b.priority) ? c : a.l
    };

    function Go(a) {
        this.state = a;
        this.i = [];
        this.s = void 0;
        this.H = {};
        Bo && zo(this.state)
    }
    Go.prototype.install = function(a) {
        this.i.push(a);
        return this
    };

    function Ho(a) {
        Bo && Ao(a.state);
        var b = a.transitions.find(function(d) {
            return Array.isArray(d.from) ? d.from.find(function(e) {
                return e === a.state && "none" === d.Ca
            }) : d.from === a.state && "none" === d.Ca
        });
        if (b) {
            a.h && (Fo(a.h), a.h = void 0);
            Co && console.groupCollapsed && console.groupEnd && (console.groupCollapsed("[" + a.constructor.name + "] '" + a.state + "' to 'none'"), console.log("with message: ", void 0), console.groupEnd());
            a.state = "none";
            Bo && zo(a.state);
            b = b.action.bind(a);
            var c = a.i.filter(function(d) {
                return d.none
            }).map(function(d) {
                return d.none
            });
            b(Io(a, c), void 0)
        } else throw Error("no transition specified from " + a.state + " to none");
    }

    function Io(a, b) {
        var c = b.filter(function(e) {
                return 10 === Jo(a, e)
            }),
            d = b.filter(function(e) {
                return 10 !== Jo(a, e)
            });
        return a.H.ge ? function() {
            var e = Ga.apply(0, arguments);
            return A(function(f) {
                if (1 == f.g) return z(f, a.Pa.apply(a, [c].concat(v(e))), 2);
                a.u.apply(a, [d].concat(v(e)));
                f.g = 0
            })
        } : function() {
            var e = Ga.apply(0, arguments);
            a.Jb.apply(a, [c].concat(v(e)));
            a.u.apply(a, [d].concat(v(e)))
        }
    }
    Go.prototype.Jb = function(a) {
        var b = Ga.apply(1, arguments);
        uk();
        for (var c = u(a), d = c.next(), e = {}; !d.done; e = {
                Wa: e.Wa
            }, d = c.next()) e.Wa = d.value, sk(function(f) {
            return function() {
                Ko(f.Wa.name);
                f.Wa.gb.apply(f.Wa, v(b));
                Lo(f.Wa.name)
            }
        }(e))
    };
    Go.prototype.Pa = function(a) {
        var b = Ga.apply(1, arguments),
            c, d, e, f;
        return A(function(g) {
            1 == g.g && (uk(), c = u(a), d = c.next(), e = {});
            if (3 != g.g) {
                if (d.done) return g.B(0);
                e.Ja = d.value;
                e.fb = void 0;
                f = function(h) {
                    return function() {
                        Ko(h.Ja.name);
                        var k = h.Ja.gb.apply(h.Ja, v(b));
                        "function" === typeof(null == k ? void 0 : k.then) ? h.fb = k.then(function() {
                            Lo(h.Ja.name)
                        }): Lo(h.Ja.name)
                    }
                }(e);
                sk(f);
                return e.fb ? z(g, e.fb, 3) : g.B(3)
            }
            e = {
                Ja: e.Ja,
                fb: e.fb
            };
            d = c.next();
            return g.B(2)
        })
    };
    Go.prototype.u = function(a) {
        var b = Ga.apply(1, arguments),
            c = this,
            d = a.map(function(e) {
                return {
                    Ob: function() {
                        Ko(e.name);
                        e.gb.apply(e, v(b));
                        Lo(e.name)
                    },
                    priority: Jo(c, e)
                }
            });
        d.length && (this.h = new Do(d))
    };

    function Jo(a, b) {
        var c, d;
        return null != (d = null != (c = a.s) ? c : b.priority) ? d : 0
    }

    function Ko(a) {
        Bo && a && zo(a)
    }

    function Lo(a) {
        Bo && a && Ao(a)
    }
    fa.Object.defineProperties(Go.prototype, {
        l: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.state
            }
        }
    });

    function Mo(a) {
        Go.call(this, void 0 === a ? "none" : a);
        this.g = null;
        this.s = 10;
        this.transitions = [{
                from: "none",
                Ca: "application_navigating",
                action: this.N
            }, {
                from: "application_navigating",
                Ca: "none",
                action: this.W
            }, {
                from: "application_navigating",
                Ca: "application_navigating",
                action: function() {}
            },
            {
                from: "none",
                Ca: "none",
                action: function() {}
            }
        ]
    }
    var No;
    w(Mo, Go);
    Mo.prototype.N = function(a, b) {
        var c = this;
        this.g = qk(function() {
            "application_navigating" === c.l && Ho(c)
        }, 5E3);
        a(null == b ? void 0 : b.event)
    };
    Mo.prototype.W = function(a, b) {
        this.g && (bf.qa(this.g), this.g = null);
        a(null == b ? void 0 : b.event)
    };

    function Oo() {
        No || (No = new Mo);
        return No
    };

    function Po() {
        this.store = {};
        this.g = {}
    }
    Po.prototype.storePayload = function(a, b) {
        a = Qo(a);
        this.store[a] ? this.store[a].push(b) : (this.g = {}, this.store[a] = [b]);
        return a
    };
    Po.prototype.smartExtractMatchingEntries = function(a) {
        if (!a.keys.length) return [];
        for (var b = Ro(this, a.keys.splice(0, 1)[0]), c = [], d = 0; d < b.length; d++) this.store[b[d]] && a.sizeLimit && (this.store[b[d]].length <= a.sizeLimit ? (c.push.apply(c, v(this.store[b[d]])), delete this.store[b[d]]) : c.push.apply(c, v(this.store[b[d]].splice(0, a.sizeLimit))));
        (null == a ? 0 : a.sizeLimit) && c.length < (null == a ? void 0 : a.sizeLimit) && (a.sizeLimit -= c.length, c.push.apply(c, v(this.smartExtractMatchingEntries(a))));
        return c
    };
    Po.prototype.extractMatchingEntries = function(a) {
        a = Ro(this, a);
        for (var b = [], c = 0; c < a.length; c++) this.store[a[c]] && (b.push.apply(b, v(this.store[a[c]])), delete this.store[a[c]]);
        return b
    };
    Po.prototype.getSequenceCount = function(a) {
        a = Ro(this, a);
        for (var b = 0, c = 0; c < a.length; c++) {
            var d = void 0;
            b += (null == (d = this.store[a[c]]) ? void 0 : d.length) || 0
        }
        return b
    };

    function Ro(a, b) {
        var c = Qo(b);
        if (a.g[c]) return a.g[c];
        var d = Object.keys(a.store) || [];
        if (1 >= d.length && Qo(b) === d[0]) return d;
        for (var e = [], f = 0; f < d.length; f++) {
            var g = d[f].split("/");
            if (So(b.auth, g[0])) {
                var h = b.isJspb;
                So(void 0 === h ? "undefined" : h ? "true" : "false", g[1]) && So(b.cttAuthInfo, g[2]) && (h = b.tier, h = void 0 === h ? "undefined" : JSON.stringify(h), So(h, g[3]) && e.push(d[f]))
            }
        }
        return a.g[c] = e
    }

    function So(a, b) {
        return void 0 === a || "undefined" === a ? !0 : a === b
    }
    Po.prototype.getSequenceCount = Po.prototype.getSequenceCount;
    Po.prototype.extractMatchingEntries = Po.prototype.extractMatchingEntries;
    Po.prototype.smartExtractMatchingEntries = Po.prototype.smartExtractMatchingEntries;
    Po.prototype.storePayload = Po.prototype.storePayload;

    function Qo(a) {
        return [void 0 === a.auth ? "undefined" : a.auth, void 0 === a.isJspb ? "undefined" : a.isJspb, void 0 === a.cttAuthInfo ? "undefined" : a.cttAuthInfo, void 0 === a.tier ? "undefined" : a.tier].join("/")
    };
    var To = fj("initial_gel_batch_timeout", 2E3),
        Uo = fj("gel_queue_timeout_max_ms", 6E4),
        Vo = Math.pow(2, 16) - 1,
        Wo = fj("gel_min_batch_size", 5),
        Xo = void 0;

    function Yo() {
        this.l = this.g = this.h = 0;
        this.i = !1
    }
    var Zo = new Yo,
        $o = new Yo,
        ap = new Yo,
        bp = new Yo,
        cp, dp = !0,
        ep = B.ytLoggingTransportTokensToCttTargetIds_ || {};
    D("ytLoggingTransportTokensToCttTargetIds_", ep);
    var fp = B.ytLoggingTransportTokensToJspbCttTargetIds_ || {};
    D("ytLoggingTransportTokensToJspbCttTargetIds_", fp);
    var gp = {};

    function hp() {
        var a = C("yt.logging.ims");
        a || (a = new Po, D("yt.logging.ims", a));
        return a
    }

    function ip(a, b) {
        if ("log_event" === a.endpoint) {
            jp(a);
            var c = kp(a),
                d = lp(a.payload) || "",
                e = mp(d);
            400 === e ? np(a, b) : (gp[c] = !0, e = {
                cttAuthInfo: c,
                isJspb: !1,
                tier: e
            }, hp().storePayload(e, a.payload), op(b, c, !1, e, pp(d)))
        }
    }

    function qp(a, b, c) {
        if ("log_event" === b.endpoint) {
            jp(void 0, b);
            var d = kp(b, !0),
                e = mp(a);
            400 === e ? rp(a, b, c) : (gp[d] = !0, e = {
                cttAuthInfo: d,
                isJspb: !0,
                tier: e
            }, hp().storePayload(e, b.payload.toJSON()), op(c, d, !0, e, pp(a)))
        }
    }

    function op(a, b, c, d, e) {
        function f() {
            sp({
                writeThenSend: !0
            }, V("flush_only_full_queue") ? b : void 0, c, d.tier)
        }
        c = void 0 === c ? !1 : c;
        e = void 0 === e ? !1 : e;
        a && (Xo = new a);
        a = fj("tvhtml5_logging_max_batch_ads_fork") || fj("web_logging_max_batch") || 100;
        var g = Y(),
            h = tp(c, d.tier),
            k = h.l;
        e && (h.i = !0);
        e = 0;
        d && (e = hp().getSequenceCount(d));
        1E3 <= e ? f() : e >= a ? cp || (cp = up(function() {
            f();
            cp = void 0
        }, 0)) : 10 <= g - k && (vp(c, d.tier), h.l = g)
    }

    function np(a, b) {
        if ("log_event" === a.endpoint) {
            jp(a);
            var c = kp(a),
                d = new Map;
            d.set(c, [a.payload]);
            var e = lp(a.payload) || "";
            b && (Xo = new b);
            return new bg(function(f, g) {
                Xo && Xo.isReady() ? wp(d, Xo, f, g, {
                    bypassNetworkless: !0
                }, !0, pp(e)) : f()
            })
        }
    }

    function rp(a, b, c) {
        if ("log_event" === b.endpoint) {
            jp(void 0, b);
            var d = kp(b, !0),
                e = new Map;
            e.set(d, [b.payload.toJSON()]);
            c && (Xo = new c);
            return new bg(function(f) {
                Xo && Xo.isReady() ? xp(e, Xo, f, {
                    bypassNetworkless: !0
                }, !0, pp(a)) : f()
            })
        }
    }

    function kp(a, b) {
        var c = "";
        if (a.dangerousLogToVisitorSession) c = "visitorOnlyApprovedKey";
        else if (a.cttAuthInfo) {
            if (void 0 === b ? 0 : b) {
                b = a.cttAuthInfo.token;
                c = a.cttAuthInfo;
                var d = new Ri;
                c.videoId ? vd(d, 1, Fd, $c(c.videoId)) : c.playlistId && vd(d, 2, Fd, $c(c.playlistId));
                fp[b] = d
            } else b = a.cttAuthInfo, c = {}, b.videoId ? c.videoId = b.videoId : b.playlistId && (c.playlistId = b.playlistId), ep[a.cttAuthInfo.token] = c;
            c = a.cttAuthInfo.token
        }
        return c
    }

    function sp(a, b, c, d) {
        a = void 0 === a ? {} : a;
        c = void 0 === c ? !1 : c;
        new bg(function(e, f) {
            var g = tp(c, d),
                h = g.i;
            g.i = !1;
            yp(g.h);
            yp(g.g);
            g.g = 0;
            Xo && Xo.isReady() ? void 0 === d && V("enable_web_tiered_gel") ? zp(e, f, a, b, c, 300, h) : zp(e, f, a, b, c, d, h) : (vp(c, d), e())
        })
    }

    function zp(a, b, c, d, e, f, g) {
        var h = Xo;
        c = void 0 === c ? {} : c;
        e = void 0 === e ? !1 : e;
        f = void 0 === f ? 200 : f;
        g = void 0 === g ? !1 : g;
        var k = new Map,
            l = new Map,
            m = {
                isJspb: e,
                cttAuthInfo: d,
                tier: f
            },
            n = {
                isJspb: e,
                cttAuthInfo: d
            };
        if (void 0 !== d) e ? (b = V("enable_web_tiered_gel") ? hp().smartExtractMatchingEntries({
            keys: [m, n],
            sizeLimit: 1E3
        }) : hp().extractMatchingEntries(n), k.set(d, b), xp(k, h, a, c, !1, g)) : (k = V("enable_web_tiered_gel") ? hp().smartExtractMatchingEntries({
            keys: [m, n],
            sizeLimit: 1E3
        }) : hp().extractMatchingEntries(n), l.set(d, k), wp(l, h,
            a, b, c, !1, g));
        else if (e) {
            b = u(Object.keys(gp));
            for (d = b.next(); !d.done; d = b.next()) l = d.value, f = V("enable_web_tiered_gel") ? hp().smartExtractMatchingEntries({
                keys: [m, n],
                sizeLimit: 1E3
            }) : hp().extractMatchingEntries({
                isJspb: !0,
                cttAuthInfo: l
            }), 0 < f.length && k.set(l, f), (V("web_fp_via_jspb_and_json") && c.writeThenSend || !V("web_fp_via_jspb_and_json")) && delete gp[l];
            xp(k, h, a, c, !1, g)
        } else {
            k = u(Object.keys(gp));
            for (d = k.next(); !d.done; d = k.next()) m = d.value, n = V("enable_web_tiered_gel") ? hp().smartExtractMatchingEntries({
                keys: [{
                    isJspb: !1,
                    cttAuthInfo: m,
                    tier: f
                }, {
                    isJspb: !1,
                    cttAuthInfo: m
                }],
                sizeLimit: 1E3
            }) : hp().extractMatchingEntries({
                isJspb: !1,
                cttAuthInfo: m
            }), 0 < n.length && l.set(m, n), (V("web_fp_via_jspb_and_json") && c.writeThenSend || !V("web_fp_via_jspb_and_json")) && delete gp[m];
            wp(l, h, a, b, c, !1, g)
        }
    }

    function vp(a, b) {
        function c() {
            sp({
                writeThenSend: !0
            }, void 0, a, b)
        }
        a = void 0 === a ? !1 : a;
        b = void 0 === b ? 200 : b;
        var d = tp(a, b),
            e = d === bp || d === ap ? 5E3 : Uo;
        V("web_gel_timeout_cap") && !d.g && (e = up(function() {
            c()
        }, e), d.g = e);
        yp(d.h);
        e = T("LOGGING_BATCH_TIMEOUT", fj("web_gel_debounce_ms", 1E4));
        V("shorten_initial_gel_batch_timeout") && dp && (e = To);
        e = up(function() {
            0 < fj("gel_min_batch_size") ? hp().getSequenceCount({
                cttAuthInfo: void 0,
                isJspb: a,
                tier: b
            }) >= Wo && c() : c()
        }, e);
        d.h = e
    }

    function wp(a, b, c, d, e, f, g) {
        e = void 0 === e ? {} : e;
        var h = Math.round(Y()),
            k = a.size,
            l = Ap(g);
        a = u(a);
        var m = a.next();
        for (g = {}; !m.done; g = {
                Ab: g.Ab,
                Fa: g.Fa,
                dangerousLogToVisitorSession: g.dangerousLogToVisitorSession,
                Cb: g.Cb,
                Bb: g.Bb
            }, m = a.next()) {
            var n = u(m.value);
            m = n.next().value;
            n = n.next().value;
            g.Fa = lb({
                context: Rm(b.config_ || Qm())
            });
            if (!La(n) && !V("throw_err_when_logevent_malformed_killswitch")) {
                d();
                break
            }
            g.Fa.events = n;
            (n = ep[m]) && Bp(g.Fa, m, n);
            delete ep[m];
            g.dangerousLogToVisitorSession = "visitorOnlyApprovedKey" ===
                m;
            Cp(g.Fa, h, g.dangerousLogToVisitorSession);
            Dp(e);
            g.Cb = function(q) {
                V("start_client_gcf") && bf.oa(function() {
                    return A(function(p) {
                        return z(p, Ep(q), 0)
                    })
                });
                k--;
                k || c()
            };
            g.Ab = 0;
            g.Bb = function(q) {
                return function() {
                    q.Ab++;
                    if (e.bypassNetworkless && 1 === q.Ab) try {
                        qn(b, l, q.Fa, Fp({
                            writeThenSend: !0
                        }, q.dangerousLogToVisitorSession, q.Cb, q.Bb, f)), dp = !1
                    } catch (p) {
                        cj(p), d()
                    }
                    k--;
                    k || c()
                }
            }(g);
            try {
                qn(b, l, g.Fa, Fp(e, g.dangerousLogToVisitorSession, g.Cb, g.Bb, f)), dp = !1
            } catch (q) {
                cj(q), d()
            }
        }
    }

    function xp(a, b, c, d, e, f) {
        d = void 0 === d ? {} : d;
        var g = Math.round(Y()),
            h = a.size;
        f = Ap(f);
        var k = new Map([].concat(v(a)));
        k = u(k);
        for (var l = k.next(); !l.done; l = k.next()) {
            var m = u(l.value).next().value,
                n = a.get(m);
            l = new Si;
            var q = Ym(b.config_ || Qm());
            J(l, Ai, 1, q);
            n = n ? Gp(n) : [];
            n = u(n);
            for (q = n.next(); !q.done; q = n.next()) Ad(l, 3, Oi, q.value);
            (n = fp[m]) && Hp(l, m, n);
            delete fp[m];
            m = "visitorOnlyApprovedKey" === m;
            Ip(l, g, m);
            Dp(d);
            n = {
                startTime: Y(),
                ticks: {},
                infos: {}
            };
            l = Hd(l);
            n.ticks.geljspc = Y();
            V("log_jspb_serialize_latency") && an("gel_jspb_serialize",
                n, {
                    sampleRate: .1
                });
            m = Fp(d, m, function(p) {
                V("start_client_gcf") && bf.oa(function() {
                    return A(function(x) {
                        return z(x, Ep(p), 0)
                    })
                });
                h--;
                h || c()
            }, function() {
                h--;
                h || c()
            }, e);
            m.headers["Content-Type"] = "application/json+protobuf";
            m.postBodyFormat = "JSPB";
            m.postBody = l;
            qn(b, f, "", m);
            dp = !1
        }
    }

    function Dp(a) {
        V("always_send_and_write") && (a.writeThenSend = !1)
    }

    function Fp(a, b, c, d, e) {
        a = {
            retry: !0,
            onSuccess: c,
            onError: d,
            vc: a,
            dangerousLogToVisitorSession: b,
            Zd: !!e,
            headers: {},
            postBodyFormat: "",
            postBody: "",
            compress: V("compress_gel") || V("compress_gel_lr")
        };
        Jp() && (a.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round(Y())));
        return a
    }

    function Cp(a, b, c) {
        Jp() || (a.requestTimeMs = String(b));
        V("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
        !c && (b = T("EVENT_ID")) && (c = Kp(), a.serializedClientEventId = {
            serializedEventId: b,
            clientCounter: String(c)
        })
    }

    function Ip(a, b, c) {
        Jp() || Cd(a, 2, b);
        if (!c && (b = T("EVENT_ID"))) {
            c = Kp();
            var d = new Qi;
            K(d, 1, b);
            Cd(d, 2, c);
            J(a, Qi, 5, d)
        }
    }

    function Kp() {
        var a = T("BATCH_CLIENT_COUNTER") || 0;
        a || (a = Math.floor(Math.random() * Vo / 2));
        a++;
        a > Vo && (a = 1);
        Xi("BATCH_CLIENT_COUNTER", a);
        return a
    }

    function Bp(a, b, c) {
        if (c.videoId) var d = "VIDEO";
        else if (c.playlistId) d = "PLAYLIST";
        else return;
        a.credentialTransferTokenTargetId = c;
        a.context = a.context || {};
        a.context.user = a.context.user || {};
        a.context.user.credentialTransferTokens = [{
            token: b,
            scope: d
        }]
    }

    function Hp(a, b, c) {
        if (Ed(c, 1)) var d = 1;
        else if (c.getPlaylistId()) d = 2;
        else return;
        J(a, Ri, 4, c);
        a = yd(a, Ai, 1) || new Ai;
        c = yd(a, zi, 3) || new zi;
        var e = new yi;
        K(e, 2, b);
        I(e, 1, d);
        Ad(c, 12, yi, e);
        J(a, zi, 3, c)
    }

    function Gp(a) {
        for (var b = [], c = 0; c < a.length; c++) try {
            b.push(new Oi(a[c]))
        } catch (d) {
            cj(new mk("Transport failed to deserialize " + String(a[c])))
        }
        return b
    }

    function jp(a, b) {
        if (C("yt.logging.transport.enableScrapingForTest")) {
            var c = C("yt.logging.transport.scrapedPayloadsForTesting"),
                d = C("yt.logging.transport.payloadToScrape");
            b && (b = C("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)()) && c.push(b);
            if (d && 1 <= d.length)
                for (b = 0; b < d.length; b++)
                    if (a && a.payload[d[b]]) {
                        var e = void 0;
                        c.push((null == (e = a) ? void 0 : e.payload)[d[b]])
                    }
            D("yt.logging.transport.scrapedPayloadsForTesting", c)
        }
    }

    function Jp() {
        return V("use_request_time_ms_header") || V("lr_use_request_time_ms_header")
    }

    function up(a, b) {
        return V("transport_use_scheduler") ? V("logging_avoid_blocking_during_navigation") || V("lr_logging_avoid_blocking_during_navigation") ? qk(function() {
            if ("none" === Oo().l) a();
            else {
                var c = {};
                Oo().install((c.none = {
                    gb: a
                }, c))
            }
        }, b) : qk(a, b) : pj(a, b)
    }

    function yp(a) {
        V("transport_use_scheduler") ? bf.qa(a) : window.clearTimeout(a)
    }

    function Ep(a) {
        var b, c, d, e, f, g, h, k, l, m;
        return A(function(n) {
            if (1 == n.g) {
                d = null == (b = a) ? void 0 : null == (c = b.responseContext) ? void 0 : c.globalConfigGroup;
                var q = d ? d[pi.name] : void 0;
                e = q;
                g = null == (f = d) ? void 0 : f.hotHashData;
                q = d ? d[oi.name] : void 0;
                h = q;
                l = null == (k = d) ? void 0 : k.coldHashData;
                return (m = wo().resolve(new ro)) ? g ? e ? z(n, Nm(m, g, e), 2) : z(n, Nm(m, g), 2) : n.B(2) : n.return()
            }
            return l ? h ? z(n, Om(m, l, h), 0) : z(n, Om(m, l), 0) : n.B(0)
        })
    }

    function tp(a, b) {
        b = void 0 === b ? 200 : b;
        return a ? 300 === b ? bp : $o : 300 === b ? ap : Zo
    }

    function mp(a) {
        if (V("enable_web_tiered_gel")) {
            a = Mn[a || ""];
            var b, c;
            if (null == wo().resolve(new ro)) var d = void 0;
            else {
                var e = null != (d = C("yt.gcf.config.hotConfigGroup")) ? d : null;
                d = null == e ? void 0 : null == (b = e.loggingHotConfig) ? void 0 : null == (c = b.eventLoggingConfig) ? void 0 : c.payloadPolicies
            }
            if (b = d)
                for (c = 0; c < b.length; c++)
                    if (b[c].payloadNumber === a) return Lp(b[c].tier);
            return 200
        }
    }

    function lp(a) {
        a = Object.keys(a);
        a = u(a);
        for (var b = a.next(); !b.done; b = a.next())
            if (b = b.value, Mn[b]) return b
    }

    function Lp(a) {
        switch (a) {
            case "DELAYED_EVENT_TIER_UNSPECIFIED":
                return 0;
            case "DELAYED_EVENT_TIER_DEFAULT":
                return 100;
            case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":
                return 200;
            case "DELAYED_EVENT_TIER_FAST":
                return 300;
            case "DELAYED_EVENT_TIER_IMMEDIATE":
                return 400;
            default:
                return 200
        }
    }

    function pp(a) {
        return "gelDebuggingEvent" === a
    }

    function Ap(a) {
        return (void 0 === a ? 0 : a) && V("vss_through_gel_video_stats") ? "video_stats" : "log_event"
    };
    var Mp = B.ytLoggingGelSequenceIdObj_ || {};
    D("ytLoggingGelSequenceIdObj_", Mp);

    function Np(a, b, c, d) {
        d = void 0 === d ? {} : d;
        var e = {},
            f = Math.round(d.timestamp || Y());
        e.eventTimeMs = f < Number.MAX_SAFE_INTEGER ? f : 0;
        e[a] = b;
        a = lo();
        e.context = {
            lastActivityMs: String(d.timestamp || !isFinite(a) ? -1 : a)
        };
        d.sequenceGroup && !V("web_gel_sequence_info_killswitch") && (a = e.context, b = d.sequenceGroup, b = {
            index: Op(b),
            groupKey: b
        }, a.sequence = b, d.endOfSequence && delete Mp[d.sequenceGroup]);
        (d.sendIsolatedPayload ? np : ip)({
                endpoint: "log_event",
                payload: e,
                cttAuthInfo: d.cttAuthInfo,
                dangerousLogToVisitorSession: d.dangerousLogToVisitorSession
            },
            c)
    }

    function Pp(a) {
        sp(void 0, void 0, void 0 === a ? !1 : a)
    }

    function Op(a) {
        Mp[a] = a in Mp ? Mp[a] + 1 : 0;
        return Mp[a]
    };
    var Qp = [];

    function Rp(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = ko;
        T("ytLoggingEventsDefaultDisabled", !1) && ko === ko && (d = null);
        V("web_all_payloads_via_jspb") ? (c.timestamp || (c.lact = lo(), c.timestamp = Y()), Qp.push({
            xc: a,
            payload: b,
            options: c
        })) : Np(a, b, d, c)
    };
    var Sp = B.ytLoggingGelSequenceIdObj_ || {};
    D("ytLoggingGelSequenceIdObj_", Sp);

    function Tp(a, b) {
        var c = void 0;
        c = void 0 === c ? {} : c;
        var d = !1;
        T("ytLoggingEventsDefaultDisabled", !1) && (d = !0);
        d = d ? null : ko;
        c = void 0 === c ? {} : c;
        var e = Math.round(c.timestamp || Y());
        Cd(b, 1, e < Number.MAX_SAFE_INTEGER ? e : 0);
        e = new Ni;
        if (c.lact) Cd(e, 1, isFinite(c.lact) ? c.lact : -1);
        else if (c.timestamp) Cd(e, 1, -1);
        else {
            var f = lo();
            Cd(e, 1, isFinite(f) ? f : -1)
        }
        if (c.sequenceGroup && !V("web_gel_sequence_info_killswitch")) {
            f = c.sequenceGroup;
            var g = Op(f),
                h = new Mi;
            Cd(h, 2, g);
            K(h, 1, f);
            J(e, Mi, 3, h);
            c.endOfSequence && delete Sp[c.sequenceGroup]
        }
        J(b,
            Ni, 33, e);
        (c.sendIsolatedPayload ? rp : qp)(a, {
            endpoint: "log_event",
            payload: b,
            cttAuthInfo: c.cttAuthInfo,
            dangerousLogToVisitorSession: c.dangerousLogToVisitorSession
        }, d)
    };
    var Up = new Set,
        Vp = 0,
        Wp = 0,
        Xp = 0,
        Yp = [],
        Zp = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"];

    function $p(a) {
        try {
            Up.add(a.message)
        } catch (b) {}
        Vp++
    }

    function aq() {
        for (var a = u(Zp), b = a.next(); !b.done; b = a.next()) {
            var c = Gb();
            if (c && 0 <= c.toLowerCase().indexOf(b.value.toLowerCase())) return !0
        }
        return !1
    }

    function bq(a, b) {
        var c = b.params || {};
        a = {
            urlParams: {
                a: "logerror",
                t: "jserror",
                type: b.name,
                msg: b.message.substr(0, 250),
                line: b.lineNumber,
                level: a,
                "client.name": c.name
            },
            postParams: {
                url: T("PAGE_NAME", window.location.href),
                file: b.fileName
            },
            method: "POST"
        };
        c.version && (a["client.version"] = c.version);
        if (a.postParams) {
            b.stack && (a.postParams.stack = b.stack);
            b = u(Object.keys(c));
            for (var d = b.next(); !d.done; d = b.next()) d = d.value, a.postParams["client." + d] = c[d];
            if (c = Yi())
                for (b = u(Object.keys(c)), d = b.next(); !d.done; d = b.next()) d =
                    d.value, a.postParams[d] = c[d];
            c = T("SERVER_NAME");
            b = T("SERVER_VERSION");
            c && b && (a.postParams["server.name"] = c, a.postParams["server.version"] = b)
        }
        Kj(T("ECATCHER_REPORT_HOST", "") + "/error_204", a)
    };

    function cq() {
        var a;
        return A(function(b) {
            return (a = vf()) ? b.return(a.then(function(c) {
                c = Hd(c);
                for (var d = [], e = 0, f = 0; f < c.length; f++) {
                    var g = c.charCodeAt(f);
                    255 < g && (d[e++] = g & 255, g >>= 8);
                    d[e++] = g
                }
                return Bc(d, 3)
            })) : b.return(Promise.resolve(null))
        })
    };
    var dq = {};

    function eq(a) {
        return dq[a] || (dq[a] = String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        }))
    };
    var fq = {},
        gq = [],
        sg = new N,
        hq = {};

    function iq() {
        for (var a = u(gq), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    }

    function jq(a, b) {
        var c;
        "yt:" === a.tagName.toLowerCase().substr(0, 3) ? c = a.getAttribute(b) : c = a ? a.dataset ? a.dataset[eq(b)] : a.getAttribute("data-" + b) : null;
        return c
    }

    function kq(a) {
        sg.bb.apply(sg, arguments)
    };

    function lq(a) {
        this.g = a || {};
        a = [this.g, window.YTConfig || {}];
        for (var b = 0; b < a.length; b++) a[b].host && (a[b].host = a[b].host.toString().replace("http://", "https://"))
    }

    function mq(a, b) {
        a = [a.g, window.YTConfig || {}];
        for (var c = 0; c < a.length; c++) {
            var d = a[c][b];
            if (void 0 !== d) return d
        }
        return null
    }

    function nq(a, b, c) {
        oq || (oq = {}, pq = new Set, oj(window, "message", function(d) {
            a: if (pq.has(d.origin)) {
                try {
                    var e = JSON.parse(d.data)
                } catch (g) {
                    break a
                }
                var f = oq[e.id];
                f && d.origin === f.Nc && (d = f.ud, d.H = !0, d.H && (cb(d.u, d.sendMessage, d), d.u.length = 0), d.ac(e))
            }
        }));
        a = String(mq(a, "host"));
        oq[c] = {
            ud: b,
            Nc: a
        };
        pq.add(a)
    }
    var oq = null,
        pq = null;
    var qq = window;

    function rq(a, b, c) {
        this.s = this.g = this.h = null;
        this.i = 0;
        this.H = !1;
        this.u = [];
        this.l = null;
        this.W = {};
        if (!a) throw Error("YouTube player element ID required.");
        this.id = Na(this);
        this.N = c;
        c = document;
        if (a = "string" === typeof a ? c.getElementById(a) : a)
            if (c = "iframe" === a.tagName.toLowerCase(), b.host || (b.host = c ? Xb(a.src) : "https://www.youtube.com"), this.h = new lq(b), c || (b = sq(this, a), this.s = a, (c = a.parentNode) && c.replaceChild(b, a), a = b), this.g = a, this.g.id || (this.g.id = "widget" + Na(this.g)), fq[this.g.id] = this, window.postMessage) {
                this.l =
                    new N;
                tq(this);
                b = mq(this.h, "events");
                for (var d in b) b.hasOwnProperty(d) && this.addEventListener(d, b[d]);
                for (var e in hq) hq.hasOwnProperty(e) && uq(this, e)
            }
    }
    r = rq.prototype;
    r.setSize = function(a, b) {
        this.g.width = a.toString();
        this.g.height = b.toString();
        return this
    };
    r.getIframe = function() {
        return this.g
    };
    r.ac = function(a) {
        vq(this, a.event, a)
    };
    r.addEventListener = function(a, b) {
        var c = b;
        "string" === typeof b && (c = function() {
            window[b].apply(window, arguments)
        });
        if (!c) return this;
        this.l.subscribe(a, c);
        wq(this, a);
        return this
    };

    function uq(a, b) {
        b = b.split(".");
        if (2 === b.length) {
            var c = b[1];
            a.N === b[0] && wq(a, c)
        }
    }
    r.destroy = function() {
        this.g && this.g.id && (fq[this.g.id] = null);
        var a = this.l;
        a && "function" == typeof a.dispose && a.dispose();
        if (this.s) {
            a = this.g;
            var b = a.parentNode;
            b && b.replaceChild(this.s, a)
        } else(a = this.g) && a.parentNode && a.parentNode.removeChild(a);
        oq && (oq[this.id] = null);
        this.h = null;
        a = this.g;
        for (var c in jb) jb[c][0] == a && mj(c);
        this.s = this.g = null
    };
    r.fc = function() {
        return {}
    };

    function xq(a, b, c) {
        c = c || [];
        c = Array.prototype.slice.call(c);
        b = {
            event: "command",
            func: b,
            args: c
        };
        a.H ? a.sendMessage(b) : a.u.push(b)
    }

    function vq(a, b, c) {
        a.l.i || (c = {
            target: a,
            data: c
        }, a.l.bb(b, c), kq(a.N + "." + b, c))
    }

    function sq(a, b) {
        var c = document.createElement("iframe");
        b = b.attributes;
        for (var d = 0, e = b.length; d < e; d++) {
            var f = b[d].value;
            null != f && "" !== f && "null" !== f && c.setAttribute(b[d].name, f)
        }
        c.setAttribute("frameBorder", "0");
        c.setAttribute("allowfullscreen", "1");
        c.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
        c.setAttribute("title", "YouTube " + mq(a.h, "title"));
        (b = mq(a.h, "width")) && c.setAttribute("width", b.toString());
        (b = mq(a.h, "height")) &&
        c.setAttribute("height", b.toString());
        var g = a.fc();
        g.enablejsapi = window.postMessage ? 1 : 0;
        window.location.host && (g.origin = window.location.protocol + "//" + window.location.host);
        g.widgetid = a.id;
        window.location.href && cb(["debugjs", "debugcss"], function(k) {
            var l = ac(window.location.href, k);
            null !== l && (g[k] = l)
        });
        var h = "" + mq(a.h, "host") + ("/embed/" + mq(a.h, "videoId")) + "?" + Zb(g);
        qq.yt_embedsEnableUaChProbe ? cq().then(function(k) {
            var l = new URL(h),
                m = Number(l.searchParams.get("reloads"));
            isNaN(m) && (m = 0);
            l.searchParams.set("reloads", (m + 1).toString());
            k && l.searchParams.set("uach", k);
            l.searchParams.set("uats", Math.floor(window.performance.timeOrigin).toString());
            k = Xd(l.href).toString();
            Td(c, Yd(k));
            c.sandbox.add("allow-presentation", "allow-top-navigation");
            return k
        }) : qq.yt_embedsEnableIframeSrcWithIntent ? (Td(c, Yd(h)),
            c.sandbox.add("allow-presentation", "allow-top-navigation")) : c.src = h;
        return c
    }
    r.yc = function() {
        this.g && this.g.contentWindow ? this.sendMessage({
            event: "listening"
        }) : window.clearInterval(this.i)
    };

    function tq(a) {
        nq(a.h, a, a.id);
        a.i = qj(a.yc.bind(a));
        oj(a.g, "load", function() {
            window.clearInterval(a.i);
            a.i = qj(a.yc.bind(a))
        })
    }

    function wq(a, b) {
        a.W[b] || (a.W[b] = !0, xq(a, "addEventListener", [b]))
    }
    r.sendMessage = function(a) {
        a.id = this.id;
        a.channel = "widget";
        var b = JSON.stringify(a),
            c = [Xb(this.g.src || "").replace("http:", "https:")];
        if (this.g.contentWindow)
            for (var d = 0; d < c.length; d++) try {
                this.g.contentWindow.postMessage(b, c[d])
            } catch (nc) {
                if (nc.name && "SyntaxError" === nc.name) {
                    if (!(nc.message && 0 < nc.message.indexOf("target origin ''"))) {
                        var e = void 0,
                            f = nc;
                        e = void 0 === e ? {} : e;
                        e.name = T("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
                        e.version = T("INNERTUBE_CONTEXT_CLIENT_VERSION");
                        var g = "WARNING",
                            h = !1;
                        g = void 0 === g ? "ERROR" :
                            g;
                        h = void 0 === h ? !1 : h;
                        if (f) {
                            f.hasOwnProperty("level") && f.level && (g = f.level);
                            if (V("console_log_js_exceptions")) {
                                var k = f,
                                    l = [];
                                l.push("Name: " + k.name);
                                l.push("Message: " + k.message);
                                k.hasOwnProperty("params") && l.push("Error Params: " + JSON.stringify(k.params));
                                k.hasOwnProperty("args") && l.push("Error args: " + JSON.stringify(k.args));
                                l.push("File name: " + k.fileName);
                                l.push("Stacktrace: " + k.stack);
                                window.console.log(l.join("\n"), k)
                            }
                            if (!(5 <= Vp)) {
                                var m = void 0,
                                    n = void 0,
                                    q = f,
                                    p = e,
                                    x = Md(q),
                                    y = x.message || "Unknown Error",
                                    E = x.name || "UnknownError",
                                    O = x.stack || q.h || "Not available";
                                if (O.startsWith(E + ": " + y)) {
                                    var U = O.split("\n");
                                    U.shift();
                                    O = U.join("\n")
                                }
                                var Q = x.lineNumber || "Not available",
                                    Da = x.fileName || "Not available",
                                    Pc = O,
                                    Pa = 0;
                                if (q.hasOwnProperty("args") && q.args && q.args.length)
                                    for (var Ea = 0; Ea < q.args.length && !(Pa = ck(q.args[Ea], "params." + Ea, p, Pa), 500 <= Pa); Ea++);
                                else if (q.hasOwnProperty("params") && q.params) {
                                    var ea = q.params;
                                    if ("object" === typeof q.params)
                                        for (n in ea) {
                                            if (ea[n]) {
                                                var ma = "params." + n,
                                                    na = ek(ea[n]);
                                                p[ma] = na;
                                                Pa +=
                                                    ma.length + na.length;
                                                if (500 < Pa) break
                                            }
                                        } else p.params = ek(ea)
                                }
                                if (Yp.length)
                                    for (var da = 0; da < Yp.length && !(Pa = ck(Yp[da], "params.context." + da, p, Pa), 500 <= Pa); da++);
                                navigator.vendor && !p.hasOwnProperty("vendor") && (p["device.vendor"] = navigator.vendor);
                                var W = {
                                        message: y,
                                        name: E,
                                        lineNumber: Q,
                                        fileName: Da,
                                        stack: Pc,
                                        params: p,
                                        sampleWeight: 1
                                    },
                                    Ol = Number(q.columnNumber);
                                isNaN(Ol) || (W.lineNumber = W.lineNumber + ":" + Ol);
                                if ("IGNORED" === q.level) m = 0;
                                else a: {
                                    for (var Pl = Yj(), Ql = u(Pl.Aa), ih = Ql.next(); !ih.done; ih = Ql.next()) {
                                        var Rl =
                                            ih.value;
                                        if (W.message && W.message.match(Rl.ce)) {
                                            m = Rl.weight;
                                            break a
                                        }
                                    }
                                    for (var Sl = u(Pl.xa), jh = Sl.next(); !jh.done; jh = Sl.next()) {
                                        var Tl = jh.value;
                                        if (Tl.gb(W)) {
                                            m = Tl.weight;
                                            break a
                                        }
                                    }
                                    m = 1
                                }
                                W.sampleWeight = m;
                                for (var Ul = u(Tj), kh = Ul.next(); !kh.done; kh = Ul.next()) {
                                    var lh = kh.value;
                                    if (lh.Db[W.name])
                                        for (var Vl = u(lh.Db[W.name]), mh = Vl.next(); !mh.done; mh = Vl.next()) {
                                            var Wl = mh.value,
                                                Ae = W.message.match(Wl.regexp);
                                            if (Ae) {
                                                W.params["params.error.original"] = Ae[0];
                                                for (var nh = Wl.groups, Xl = {}, oc = 0; oc < nh.length; oc++) Xl[nh[oc]] = Ae[oc +
                                                    1], W.params["params.error." + nh[oc]] = Ae[oc + 1];
                                                W.message = lh.Sb(Xl);
                                                break
                                            }
                                        }
                                }
                                W.params || (W.params = {});
                                var Yl = Yj();
                                W.params["params.errorServiceSignature"] = "msg=" + Yl.Aa.length + "&cb=" + Yl.xa.length;
                                W.params["params.serviceWorker"] = "false";
                                B.document && B.document.querySelectorAll && (W.params["params.fscripts"] = String(document.querySelectorAll("script:not([nonce])").length));
                                qb("sample").constructor !== pb && (W.params["params.fconst"] = "true");
                                var gd = W;
                                window.yterr && "function" === typeof window.yterr && window.yterr(gd);
                                if (0 !== gd.sampleWeight && !Up.has(gd.message))
                                    if (h && V("web_enable_error_204")) {
                                        var Zl = gd;
                                        bq(void 0 === g ? "ERROR" : g, Zl);
                                        $p(Zl)
                                    } else {
                                        var oh = void 0,
                                            ph = void 0,
                                            $l = void 0,
                                            am = void 0,
                                            qh = void 0,
                                            M = gd,
                                            Jb = g;
                                        Jb = void 0 === Jb ? "ERROR" : Jb;
                                        if ("ERROR" === Jb) {
                                            Zj.bb("handleError", M);
                                            if (V("record_app_crashed_web") && 0 === Xp && 1 === M.sampleWeight)
                                                if (Xp++, V("errors_via_jspb")) {
                                                    var Dq = new Li;
                                                    qh = I(Dq, 1, 1);
                                                    if (!V("report_client_error_with_app_crash_ks")) {
                                                        var Eq = new Ki,
                                                            Fq = new Ji,
                                                            Gq = new Ii,
                                                            Hq = new Hi;
                                                        var Iq = K(Hq, 1, M.message);
                                                        var Jq = J(Gq,
                                                            Hi, 3, Iq);
                                                        am = J(Fq, Ii, 5, Jq);
                                                        $l = J(Eq, Ji, 9, am);
                                                        J(qh, Ki, 4, $l)
                                                    }
                                                    var bm = V("jspb_sparse_encoded_pivot") ? new Oi([{}]) : new Oi;
                                                    zd(bm, Li, 20, Pi, qh);
                                                    Tp("appCrashed", bm)
                                                } else {
                                                    var cm = {
                                                        appCrashType: "APP_CRASH_TYPE_BREAKPAD"
                                                    };
                                                    V("report_client_error_with_app_crash_ks") || (cm.systemHealth = {
                                                        crashData: {
                                                            clientError: {
                                                                logMessage: {
                                                                    message: M.message
                                                                }
                                                            }
                                                        }
                                                    });
                                                    Rp("appCrashed", cm)
                                                }
                                            Wp++
                                        } else "WARNING" === Jb && Zj.bb("handleWarning", M);
                                        if (V("kevlar_gel_error_routing")) a: {
                                            var hd = Jb;
                                            if (V("errors_via_jspb")) {
                                                if (aq()) ph = void 0;
                                                else {
                                                    var pc = new Ei;
                                                    K(pc, 1, M.stack);
                                                    M.fileName && K(pc, 4, M.fileName);
                                                    var ab = M.lineNumber && M.lineNumber.split ? M.lineNumber.split(":") : [];
                                                    0 !== ab.length && (1 !== ab.length || isNaN(Number(ab[0])) ? 2 !== ab.length || isNaN(Number(ab[0])) || isNaN(Number(ab[1])) || (Bd(pc, 2, Number(ab[0])), Bd(pc, 3, Number(ab[1]))) : Bd(pc, 2, Number(ab[0])));
                                                    var Kb = new Hi;
                                                    K(Kb, 1, M.message);
                                                    K(Kb, 3, M.name);
                                                    Bd(Kb, 6, M.sampleWeight);
                                                    "ERROR" === hd ? I(Kb, 2, 2) : "WARNING" === hd ? I(Kb, 2, 1) : I(Kb, 2, 0);
                                                    var rh = new Fi;
                                                    I(rh, 1, Yc(!0));
                                                    zd(rh, Ei, 3, Gi, pc);
                                                    var Lb = new Di;
                                                    K(Lb, 3, window.location.href);
                                                    for (var dm = T("FEXP_EXPERIMENTS", []), sh = 0; sh < dm.length; sh++) {
                                                        var Kq = Zc(dm[sh]),
                                                            em = Lb.o,
                                                            Lq = Kq,
                                                            fm = Kc(em);
                                                        Wc(fm);
                                                        ud(em, fm, 5, 2).push(Lq)
                                                    }
                                                    var th = Yi();
                                                    if (!Zi() && th)
                                                        for (var gm = u(Object.keys(th)), Mb = gm.next(); !Mb.done; Mb = gm.next()) {
                                                            var hm = Mb.value,
                                                                uh = new Ci;
                                                            K(uh, 1, hm);
                                                            K(uh, 2, String(th[hm]));
                                                            Ad(Lb, 4, Ci, uh)
                                                        }
                                                    var vh = M.params;
                                                    if (vh) {
                                                        var im = u(Object.keys(vh));
                                                        for (Mb = im.next(); !Mb.done; Mb = im.next()) {
                                                            var jm = Mb.value,
                                                                wh = new Ci;
                                                            K(wh, 1, "client." + jm);
                                                            K(wh, 2, String(vh[jm]));
                                                            Ad(Lb, 4, Ci, wh)
                                                        }
                                                    }
                                                    var km = T("SERVER_NAME"),
                                                        lm = T("SERVER_VERSION");
                                                    if (km && lm) {
                                                        var xh = new Ci;
                                                        K(xh, 1, "server.name");
                                                        K(xh, 2, km);
                                                        Ad(Lb, 4, Ci, xh);
                                                        var yh = new Ci;
                                                        K(yh, 1, "server.version");
                                                        K(yh, 2, lm);
                                                        Ad(Lb, 4, Ci, yh)
                                                    }
                                                    var Be = new Ii;
                                                    J(Be, Di, 1, Lb);
                                                    J(Be, Fi, 2, rh);
                                                    J(Be, Hi, 3, Kb);
                                                    ph = Be
                                                }
                                                var mm = ph;
                                                if (!mm) break a;
                                                var nm = V("jspb_sparse_encoded_pivot") ? new Oi([{}]) : new Oi;
                                                zd(nm, Ii, 163, Pi, mm);
                                                Tp("clientError", nm)
                                            } else {
                                                var Ha = void 0;
                                                Ha = void 0 === Ha ? {} : Ha;
                                                if (aq()) oh = void 0;
                                                else {
                                                    var id = {
                                                        stackTrace: M.stack
                                                    };
                                                    M.fileName && (id.filename = M.fileName);
                                                    var bb = M.lineNumber && M.lineNumber.split ? M.lineNumber.split(":") : [];
                                                    0 !== bb.length && (1 !== bb.length || isNaN(Number(bb[0])) ? 2 !== bb.length || isNaN(Number(bb[0])) || isNaN(Number(bb[1])) || (id.lineNumber = Number(bb[0]), id.columnNumber = Number(bb[1])) : id.lineNumber = Number(bb[0]));
                                                    var zh = {
                                                        level: "ERROR_LEVEL_UNKNOWN",
                                                        message: M.message,
                                                        errorClassName: M.name,
                                                        sampleWeight: M.sampleWeight
                                                    };
                                                    "ERROR" === hd ? zh.level = "ERROR_LEVEL_ERROR" : "WARNING" === hd && (zh.level = "ERROR_LEVEL_WARNNING");
                                                    var Mq = {
                                                        isObfuscated: !0,
                                                        browserStackInfo: id
                                                    };
                                                    Ha.pageUrl = window.location.href;
                                                    Ha.kvPairs = [];
                                                    T("FEXP_EXPERIMENTS") &&
                                                        (Ha.experimentIds = T("FEXP_EXPERIMENTS"));
                                                    var Ah = Yi();
                                                    if (!Zi() && Ah)
                                                        for (var om = u(Object.keys(Ah)), Nb = om.next(); !Nb.done; Nb = om.next()) {
                                                            var pm = Nb.value;
                                                            Ha.kvPairs.push({
                                                                key: pm,
                                                                value: String(Ah[pm])
                                                            })
                                                        }
                                                    var Bh = M.params;
                                                    if (Bh) {
                                                        var qm = u(Object.keys(Bh));
                                                        for (Nb = qm.next(); !Nb.done; Nb = qm.next()) {
                                                            var rm = Nb.value;
                                                            Ha.kvPairs.push({
                                                                key: "client." + rm,
                                                                value: String(Bh[rm])
                                                            })
                                                        }
                                                    }
                                                    var sm = T("SERVER_NAME"),
                                                        tm = T("SERVER_VERSION");
                                                    sm && tm && (Ha.kvPairs.push({
                                                        key: "server.name",
                                                        value: sm
                                                    }), Ha.kvPairs.push({
                                                        key: "server.version",
                                                        value: tm
                                                    }));
                                                    oh = {
                                                        errorMetadata: Ha,
                                                        stackTrace: Mq,
                                                        logMessage: zh
                                                    }
                                                }
                                                var um = oh;
                                                if (!um) break a;
                                                Rp("clientError", um)
                                            }
                                            if ("ERROR" === hd || V("errors_flush_gel_always_killswitch")) b: {
                                                if (V("web_fp_via_jspb")) {
                                                    var Ce = !0;
                                                    Ce = void 0 === Ce ? !1 : Ce;
                                                    var vm = Qp;
                                                    Qp = [];
                                                    if (vm)
                                                        for (var wm = u(vm), Ch = wm.next(); !Ch.done; Ch = wm.next()) {
                                                            var qc = Ch.value;
                                                            Ce ? Np(qc.xc, qc.payload, ko, qc.options) : Rp(qc.xc, qc.payload, qc.options)
                                                        }
                                                    Pp(!0);
                                                    if (!V("web_fp_via_jspb_and_json")) break b
                                                }
                                                Pp()
                                            }
                                        }
                                        V("suppress_error_204_logging") || bq(Jb, M);
                                        $p(M)
                                    }
                            }
                        }
                    }
                } else throw nc;
            } else console &&
                console.warn && console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")
    };

    function yq(a) {
        return (0 === a.search("cue") || 0 === a.search("load")) && "loadModule" !== a
    }

    function zq(a) {
        return 0 === a.search("get") || 0 === a.search("is")
    };

    function Aq(a, b) {
        rq.call(this, a, Object.assign({
            title: "video player",
            videoId: "",
            width: 640,
            height: 360
        }, b || {}), "player");
        this.ja = {};
        this.playerInfo = {};
        this.videoTitle = ""
    }
    w(Aq, rq);
    r = Aq.prototype;
    r.fc = function() {
        var a = mq(this.h, "playerVars");
        if (a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            a = b
        } else a = {};
        window !== window.top && document.referrer && (a.widget_referrer = document.referrer.substring(0, 256));
        if (c = mq(this.h, "embedConfig")) {
            if (Ma(c)) try {
                c = JSON.stringify(c)
            } catch (d) {
                console.error("Invalid embed config JSON", d)
            }
            a.embed_config = c
        }
        return a
    };
    r.ac = function(a) {
        var b = a.event;
        a = a.info;
        switch (b) {
            case "apiInfoDelivery":
                if (Ma(a))
                    for (var c in a) a.hasOwnProperty(c) && (this.ja[c] = a[c]);
                break;
            case "infoDelivery":
                Bq(this, a);
                break;
            case "initialDelivery":
                Ma(a) && (window.clearInterval(this.i), this.playerInfo = {}, this.ja = {}, Cq(this, a.apiInterface), Bq(this, a));
                break;
            default:
                vq(this, b, a)
        }
    };

    function Bq(a, b) {
        if (Ma(b)) {
            for (var c in b) b.hasOwnProperty(c) && (a.playerInfo[c] = b[c]);
            a.playerInfo.hasOwnProperty("videoData") && (b = a.playerInfo.videoData, b.hasOwnProperty("title") && b.title ? (b = b.title, b !== a.videoTitle && (a.videoTitle = b, a.g.setAttribute("title", b))) : (a.videoTitle = "", a.g.setAttribute("title", "YouTube " + mq(a.h, "title"))))
        }
    }

    function Cq(a, b) {
        cb(b, function(c) {
            this[c] || ("getCurrentTime" === c ? this[c] = function() {
                var d = this.playerInfo.currentTime;
                if (1 === this.playerInfo.playerState) {
                    var e = (Date.now() / 1E3 - this.playerInfo.currentTimeLastUpdated_) * this.playerInfo.playbackRate;
                    0 < e && (d += Math.min(e, 1))
                }
                return d
            } : yq(c) ? this[c] = function() {
                this.playerInfo = {};
                this.ja = {};
                xq(this, c, arguments);
                return this
            } : zq(c) ? this[c] = function() {
                var d = 0;
                0 === c.search("get") ? d = 3 : 0 === c.search("is") && (d = 2);
                return this.playerInfo[c.charAt(d).toLowerCase() + c.substr(d + 1)]
            } : this[c] = function() {
                xq(this, c, arguments);
                return this
            })
        }, a)
    }
    r.getVideoEmbedCode = function() {
        var a = mq(this.h, "host") + ("/embed/" + mq(this.h, "videoId")),
            b = Number(mq(this.h, "width")),
            c = Number(mq(this.h, "height"));
        if (isNaN(b) || isNaN(c)) throw Error("Invalid width or height property");
        b = Math.floor(b);
        c = Math.floor(c);
        var d = this.videoTitle;
        a = Tb(a);
        d = Tb(null != d ? d : "YouTube video player");
        return '<iframe width="' + b + '" height="' + c + '" src="' + a + '" title="' + (d + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
    };
    r.getOptions = function(a) {
        return this.ja.namespaces ? a ? this.ja[a] ? this.ja[a].options || [] : [] : this.ja.namespaces || [] : []
    };
    r.getOption = function(a, b) {
        if (this.ja.namespaces && a && b && this.ja[a]) return this.ja[a][b]
    };

    function Nq(a) {
        if ("iframe" !== a.tagName.toLowerCase()) {
            var b = jq(a, "videoid");
            b && (b = {
                videoId: b,
                width: jq(a, "width"),
                height: jq(a, "height")
            }, new Aq(a, b))
        }
    };
    D("YT.PlayerState.UNSTARTED", -1);
    D("YT.PlayerState.ENDED", 0);
    D("YT.PlayerState.PLAYING", 1);
    D("YT.PlayerState.PAUSED", 2);
    D("YT.PlayerState.BUFFERING", 3);
    D("YT.PlayerState.CUED", 5);
    D("YT.get", function(a) {
        return fq[a]
    });
    D("YT.scan", iq);
    D("YT.subscribe", function(a, b, c) {
        sg.subscribe(a, b, c);
        hq[a] = !0;
        for (var d in fq) fq.hasOwnProperty(d) && uq(fq[d], a)
    });
    D("YT.unsubscribe", function(a, b, c) {
        rg(a, b, c)
    });
    D("YT.Player", Aq);
    rq.prototype.destroy = rq.prototype.destroy;
    rq.prototype.setSize = rq.prototype.setSize;
    rq.prototype.getIframe = rq.prototype.getIframe;
    rq.prototype.addEventListener = rq.prototype.addEventListener;
    Aq.prototype.getVideoEmbedCode = Aq.prototype.getVideoEmbedCode;
    Aq.prototype.getOptions = Aq.prototype.getOptions;
    Aq.prototype.getOption = Aq.prototype.getOption;
    gq.push(function(a) {
        var b = a;
        b || (b = document);
        a = fb(b.getElementsByTagName("yt:player"));
        var c = b || document;
        if (c.querySelectorAll && c.querySelector) b = c.querySelectorAll(".yt-player");
        else {
            var d;
            c = document;
            b = b || c;
            if (b.querySelectorAll && b.querySelector) b = b.querySelectorAll(".yt-player");
            else if (b.getElementsByClassName) {
                var e = b.getElementsByClassName("yt-player");
                b = e
            } else {
                e = b.getElementsByTagName("*");
                var f = {};
                for (c = d = 0; b = e[c]; c++) {
                    var g = b.className,
                        h;
                    if (h = "function" == typeof g.split) h = 0 <= $a(g.split(/\s+/),
                        "yt-player");
                    h && (f[d++] = b)
                }
                f.length = d;
                b = f
            }
        }
        b = fb(b);
        cb(eb(a, b), Nq)
    });
    "undefined" != typeof YTConfig && YTConfig.parsetags && "onload" != YTConfig.parsetags || iq();
    var Oq = B.onYTReady;
    Oq && Oq();
    var Pq = B.onYouTubeIframeAPIReady;
    Pq && Pq();
    var Qq = B.onYouTubePlayerAPIReady;
    Qq && Qq();
}).call(this);