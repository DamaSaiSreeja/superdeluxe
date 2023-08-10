/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';
var q, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = c.value;
    return a
};

function ba(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c
    }
    throw Error("Cannot find global object");
}
var ca = ba(this);

function da(a, b) {
    if (b) a: {
        var c = ca;a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e]
        }
        a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && aa(c, a, {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
}

function ea(a) {
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

function r(a) {
    return ea(a())
}

function fa(a, b) {
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
da("Array.prototype.values", function(a) {
    return a ? a : function() {
        return fa(this, function(b, c) {
            return c
        })
    }
});
da("Object.values", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
        return c
    }
});
da("Array.prototype.includes", function(a) {
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
da("Object.entries", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
        return c
    }
});
da("String.prototype.matchAll", function(a) {
    return a ? a : function(b) {
        if (b instanceof RegExp && !b.global) throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");
        var c = new RegExp(b, b instanceof RegExp ? void 0 : "g"),
            d = this,
            e = !1,
            f = {
                next: function() {
                    if (e) return {
                        value: void 0,
                        done: !0
                    };
                    var g = c.exec(d);
                    if (!g) return e = !0, {
                        value: void 0,
                        done: !0
                    };
                    "" === g[0] && (c.lastIndex += 1);
                    return {
                        value: g,
                        done: !1
                    }
                }
            };
        f[Symbol.iterator] = function() {
            return f
        };
        return f
    }
});
da("Promise.prototype.finally", function(a) {
    return a ? a : function(b) {
        return this.then(function(c) {
            return Promise.resolve(b()).then(function() {
                return c
            })
        }, function(c) {
            return Promise.resolve(b()).then(function() {
                throw c;
            })
        })
    }
});
var t = this || self;

function v(a, b) {
    a = a.split(".");
    b = b || t;
    for (var c = 0; c < a.length; c++)
        if (b = b[a[c]], null == b) return null;
    return b
}

function ha(a) {
    var b = typeof a;
    return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
}

function ia(a) {
    var b = ha(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}

function ja(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function ka(a, b, c) {
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

function la(a, b, c) {
    la = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : ka;
    return la.apply(null, arguments)
}

function x(a, b) {
    a = a.split(".");
    var c = t;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
}

function ma(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Ta = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.Sb = function(d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g)
    }
};

function na(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, na);
    else {
        const c = Error().stack;
        c && (this.stack = c)
    }
    a && (this.message = String(a));
    void 0 !== b && (this.cause = b)
}
ma(na, Error);
na.prototype.name = "CustomError";

function oa() {};

function pa(a, b) {
    Array.prototype.forEach.call(a, b, void 0)
}

function qa(a, b) {
    return Array.prototype.map.call(a, b, void 0)
}

function ra(a, b) {
    b = Array.prototype.indexOf.call(a, b, void 0);
    0 <= b && Array.prototype.splice.call(a, b, 1)
}

function sa(a, b) {
    for (let c = 1; c < arguments.length; c++) {
        const d = arguments[c];
        if (ia(d)) {
            const e = a.length || 0,
                f = d.length || 0;
            a.length = e + f;
            for (let g = 0; g < f; g++) a[e + g] = d[g]
        } else a.push(d)
    }
};

function ta(a) {
    for (const b in a) return !1;
    return !0
}

function ua(a) {
    if (!a || "object" !== typeof a) return a;
    if ("function" === typeof a.clone) return a.clone();
    if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
    if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
    if (a instanceof Date) return new Date(a.getTime());
    const b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length);
    for (const c in a) b[c] = ua(a[c]);
    return b
}
const va = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function wa(a, b) {
    let c, d;
    for (let e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (let f = 0; f < va.length; f++) c = va[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};

function xa() {}

function ya(a) {
    return new xa(za, a)
}
var za = {};
ya("");
var Aa = String.prototype.trim ? function(a) {
    return a.trim()
} : function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
};
var Ba, Ca = v("CLOSURE_FLAGS"),
    Da = Ca && Ca[610401301];
Ba = null != Da ? Da : !1;

function Ea() {
    var a = t.navigator;
    return a && (a = a.userAgent) ? a : ""
}
var Fa;
const Ga = t.navigator;
Fa = Ga ? Ga.userAgentData || null : null;

function Ha(a) {
    return Ba ? Fa ? Fa.brands.some(({
        brand: b
    }) => b && -1 != b.indexOf(a)) : !1 : !1
}

function y(a) {
    return -1 != Ea().indexOf(a)
};

function Ia() {
    return Ba ? !!Fa && 0 < Fa.brands.length : !1
}

function Ja() {
    return Ia() ? Ha("Chromium") : (y("Chrome") || y("CriOS")) && !(Ia() ? 0 : y("Edge")) || y("Silk")
};
var Ka = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

function La(a) {
    return a ? decodeURI(a) : a
}

function Ma(a, b, c) {
    if (Array.isArray(b))
        for (var d = 0; d < b.length; d++) Ma(a, String(b[d]), c);
    else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
}

function Na(a) {
    var b = [],
        c;
    for (c in a) Ma(c, a[c], b);
    return b.join("&")
};

function Oa() {
    this.j = this.j;
    this.l = this.l
}
Oa.prototype.j = !1;
Oa.prototype.dispose = function() {
    this.j || (this.j = !0, this.O())
};
Oa.prototype.O = function() {
    if (this.l)
        for (; this.l.length;) this.l.shift()()
};

function Pa(a) {
    var b = v("window.location.href");
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
        var e = a.fileName || a.filename || a.sourceURL || t.$googDebugFname || b
    } catch (g) {
        e = "Not available", c = !0
    }
    b = Qa(a);
    if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
        c = a.message;
        if (null ==
            c) {
            if (a.constructor && a.constructor instanceof Function) {
                if (a.constructor.name) c = a.constructor.name;
                else if (c = a.constructor, Ra[c]) c = Ra[c];
                else {
                    c = String(c);
                    if (!Ra[c]) {
                        var f = /function\s+([^\(]+)/m.exec(c);
                        Ra[c] = f ? f[1] : "[Anonymous]"
                    }
                    c = Ra[c]
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

function Qa(a, b) {
    b || (b = {});
    b[Sa(a)] = !0;
    var c = a.stack || "";
    (a = a.cause) && !b[Sa(a)] && (c += "\nCaused by: ", a.stack && 0 == a.stack.indexOf(a.toString()) || (c += "string" === typeof a ? a : a.message + "\n"), c += Qa(a, b));
    return c
}

function Sa(a) {
    var b = "";
    "function" === typeof a.toString && (b = "" + a);
    return b + a.stack
}
var Ra = {};
var Ta = Ia() ? !1 : y("Trident") || y("MSIE");

function Ua(a, b) {
    a.l(b);
    100 > a.i && (a.i++, b.next = a.h, a.h = b)
}
class Va {
    constructor(a, b) {
        this.j = a;
        this.l = b;
        this.i = 0;
        this.h = null
    }
    get() {
        let a;
        0 < this.i ? (this.i--, a = this.h, this.h = a.next, a.next = null) : a = this.j();
        return a
    }
};

function Xa(a) {
    t.setTimeout(() => {
        throw a;
    }, 0)
};
class Ya {
    constructor() {
        this.i = this.h = null
    }
    add(a, b) {
        const c = Za.get();
        c.set(a, b);
        this.i ? this.i.next = c : this.h = c;
        this.i = c
    }
    remove() {
        let a = null;
        this.h && (a = this.h, this.h = this.h.next, this.h || (this.i = null), a.next = null);
        return a
    }
}
var Za = new Va(() => new $a, a => a.reset());
class $a {
    constructor() {
        this.next = this.scope = this.h = null
    }
    set(a, b) {
        this.h = a;
        this.scope = b;
        this.next = null
    }
    reset() {
        this.next = this.scope = this.h = null
    }
};
let ab, bb = !1,
    cb = new Ya,
    eb = (a, b) => {
        ab || db();
        bb || (ab(), bb = !0);
        cb.add(a, b)
    },
    db = () => {
        const a = t.Promise.resolve(void 0);
        ab = () => {
            a.then(fb)
        }
    };
var fb = () => {
    let a;
    for (; a = cb.remove();) {
        try {
            a.h.call(a.scope)
        } catch (b) {
            Xa(b)
        }
        Ua(Za, a)
    }
    bb = !1
};

function z(a) {
    this.h = 0;
    this.A = void 0;
    this.l = this.i = this.j = null;
    this.m = this.s = !1;
    if (a != oa) try {
        var b = this;
        a.call(void 0, function(c) {
            gb(b, 2, c)
        }, function(c) {
            gb(b, 3, c)
        })
    } catch (c) {
        gb(this, 3, c)
    }
}

function hb() {
    this.next = this.context = this.i = this.j = this.h = null;
    this.l = !1
}
hb.prototype.reset = function() {
    this.context = this.i = this.j = this.h = null;
    this.l = !1
};
var ib = new Va(function() {
    return new hb
}, function(a) {
    a.reset()
});

function jb(a, b, c) {
    var d = ib.get();
    d.j = a;
    d.i = b;
    d.context = c;
    return d
}

function kb(a) {
    if (a instanceof z) return a;
    var b = new z(oa);
    gb(b, 2, a);
    return b
}
z.prototype.then = function(a, b, c) {
    return lb(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
};
z.prototype.$goog_Thenable = !0;
q = z.prototype;
q.Wa = function(a, b) {
    return lb(this, null, a, b)
};
q.catch = z.prototype.Wa;
q.cancel = function(a) {
    if (0 == this.h) {
        var b = new mb(a);
        eb(function() {
            nb(this, b)
        }, this)
    }
};

function nb(a, b) {
    if (0 == a.h)
        if (a.j) {
            var c = a.j;
            if (c.i) {
                for (var d = 0, e = null, f = null, g = c.i; g && (g.l || (d++, g.h == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                e && (0 == c.h && 1 == d ? nb(c, b) : (f ? (d = f, d.next == c.l && (c.l = d), d.next = d.next.next) : ob(c), pb(c, e, 3, b)))
            }
            a.j = null
        } else gb(a, 3, b)
}

function qb(a, b) {
    a.i || 2 != a.h && 3 != a.h || rb(a);
    a.l ? a.l.next = b : a.i = b;
    a.l = b
}

function lb(a, b, c, d) {
    var e = jb(null, null, null);
    e.h = new z(function(f, g) {
        e.j = b ? function(h) {
            try {
                var k = b.call(d, h);
                f(k)
            } catch (l) {
                g(l)
            }
        } : f;
        e.i = c ? function(h) {
            try {
                var k = c.call(d, h);
                void 0 === k && h instanceof mb ? g(h) : f(k)
            } catch (l) {
                g(l)
            }
        } : g
    });
    e.h.j = a;
    qb(a, e);
    return e.h
}
q.Xa = function(a) {
    this.h = 0;
    gb(this, 2, a)
};
q.Ya = function(a) {
    this.h = 0;
    gb(this, 3, a)
};

function gb(a, b, c) {
    if (0 == a.h) {
        a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
        a.h = 1;
        a: {
            var d = c,
                e = a.Xa,
                f = a.Ya;
            if (d instanceof z) {
                qb(d, jb(e || oa, f || null, a));
                var g = !0
            } else {
                if (d) try {
                    var h = !!d.$goog_Thenable
                } catch (l) {
                    h = !1
                } else h = !1;
                if (h) d.then(e, f, a), g = !0;
                else {
                    h = typeof d;
                    if ("object" == h && null != d || "function" == h) try {
                        var k = d.then;
                        if ("function" === typeof k) {
                            sb(d, k, e, f, a);
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
        g || (a.A = c, a.h = b, a.j = null, rb(a), 3 != b || c instanceof mb || tb(a, c))
    }
}

function sb(a, b, c, d, e) {
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

function rb(a) {
    a.s || (a.s = !0, eb(a.Ha, a))
}

function ob(a) {
    var b = null;
    a.i && (b = a.i, a.i = b.next, b.next = null);
    a.i || (a.l = null);
    return b
}
q.Ha = function() {
    for (var a; a = ob(this);) pb(this, a, this.h, this.A);
    this.s = !1
};

function pb(a, b, c, d) {
    if (3 == c && b.i && !b.l)
        for (; a && a.m; a = a.j) a.m = !1;
    if (b.h) b.h.j = null, ub(b, c, d);
    else try {
        b.l ? b.j.call(b.context) : ub(b, c, d)
    } catch (e) {
        vb.call(null, e)
    }
    Ua(ib, b)
}

function ub(a, b, c) {
    2 == b ? a.j.call(a.context, c) : a.i && a.i.call(a.context, c)
}

function tb(a, b) {
    a.m = !0;
    eb(function() {
        a.m && vb.call(null, b)
    })
}
var vb = Xa;

function mb(a) {
    na.call(this, a)
}
ma(mb, na);
mb.prototype.name = "cancel";

function wb() {
    throw Error("Invalid UTF8");
}

function xb(a, b) {
    b = String.fromCharCode.apply(null, b);
    return null == a ? b : a + b
}
let yb = void 0,
    zb;
const Ab = "undefined" !== typeof TextDecoder;
!y("Android") || Ja();
Ja();
var Bb = y("Safari") && !(Ja() || (Ia() ? 0 : y("Coast")) || (Ia() ? 0 : y("Opera")) || (Ia() ? 0 : y("Edge")) || (Ia() ? Ha("Microsoft Edge") : y("Edg/")) || (Ia() ? Ha("Opera") : y("OPR")) || y("Firefox") || y("FxiOS") || y("Silk") || y("Android")) && !(y("iPhone") && !y("iPod") && !y("iPad") || y("iPad") || y("iPod"));
var Cb = {},
    Db = null;

function Eb(a, b) {
    void 0 === b && (b = 0);
    Fb();
    b = Cb[b];
    const c = Array(Math.floor(a.length / 3)),
        d = b[64] || "";
    let e = 0,
        f = 0;
    for (; e < a.length - 2; e += 3) {
        var g = a[e],
            h = a[e + 1],
            k = a[e + 2],
            l = b[g >> 2];
        g = b[(g & 3) << 4 | h >> 4];
        h = b[(h & 15) << 2 | k >> 6];
        k = b[k & 63];
        c[f++] = "" + l + g + h + k
    }
    l = 0;
    k = d;
    switch (a.length - e) {
        case 2:
            l = a[e + 1], k = b[(l & 15) << 2] || d;
        case 1:
            a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
    }
    return c.join("")
}

function Gb(a) {
    var b = a.length,
        c = 3 * b / 4;
    c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
    var d = new Uint8Array(c),
        e = 0;
    Hb(a, function(f) {
        d[e++] = f
    });
    return e !== c ? d.subarray(0, e) : d
}

function Hb(a, b) {
    function c(k) {
        for (; d < a.length;) {
            var l = a.charAt(d++),
                m = Db[l];
            if (null != m) return m;
            if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
        }
        return k
    }
    Fb();
    for (var d = 0;;) {
        var e = c(-1),
            f = c(0),
            g = c(64),
            h = c(64);
        if (64 === h && -1 === e) break;
        b(e << 2 | f >> 4);
        64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
    }
}

function Fb() {
    if (!Db) {
        Db = {};
        for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
            var d = a.concat(b[c].split(""));
            Cb[c] = d;
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                void 0 === Db[f] && (Db[f] = e)
            }
        }
    }
};
var Ib = "undefined" !== typeof Uint8Array,
    Jb = !Ta && "function" === typeof btoa;

function Kb(a) {
    if (!Jb) return Eb(a);
    let b = "",
        c = 0;
    const d = a.length - 10240;
    for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
    b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
    return btoa(b)
}
const Lb = /[-_.]/g,
    Mb = {
        "-": "+",
        _: "/",
        ".": "="
    };

function Nb(a) {
    return Mb[a] || ""
}

function Ob(a) {
    if (!Jb) return Gb(a);
    Lb.test(a) && (a = a.replace(Lb, Nb));
    a = atob(a);
    const b = new Uint8Array(a.length);
    for (let c = 0; c < a.length; c++) b[c] = a.charCodeAt(c);
    return b
}

function Pb(a) {
    return Ib && null != a && a instanceof Uint8Array
}
let Qb;
var Rb = {};
let Sb;

function Tb(a) {
    if (a !== Rb) throw Error("illegal external caller");
}

function Ub() {
    return Sb || (Sb = new Vb(null, Rb))
}

function Wb(a) {
    Tb(Rb);
    var b = a.S;
    b = null == b || Pb(b) ? b : "string" === typeof b ? Ob(b) : null;
    return null == b ? b : a.S = b
}
var Vb = class {
    constructor(a, b) {
        Tb(b);
        this.S = a;
        if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    }
    qa() {
        return null == this.S
    }
    sizeBytes() {
        const a = Wb(this);
        return a ? a.length : 0
    }
};

function Xb(a, b) {
    return Error(`Invalid wire type: ${a} (at position ${b})`)
}

function Yb() {
    return Error("Failed to read varint, encoding is invalid.")
}

function $b(a, b) {
    return Error(`Tried to read past the end of the data ${b} > ${a}`)
};

function ac(a) {
    if ("string" === typeof a) return {
        buffer: Ob(a),
        I: !1
    };
    if (Array.isArray(a)) return {
        buffer: new Uint8Array(a),
        I: !1
    };
    if (a.constructor === Uint8Array) return {
        buffer: a,
        I: !1
    };
    if (a.constructor === ArrayBuffer) return {
        buffer: new Uint8Array(a),
        I: !1
    };
    if (a.constructor === Vb) return {
        buffer: Wb(a) || Qb || (Qb = new Uint8Array(0)),
        I: !0
    };
    if (a instanceof Uint8Array) return {
        buffer: new Uint8Array(a.buffer, a.byteOffset, a.byteLength),
        I: !1
    };
    throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
};
const bc = "function" === typeof Uint8Array.prototype.slice;

function cc(a, b) {
    a.h = b;
    if (b > a.i) throw $b(a.i, b);
}

function dc(a) {
    const b = a.j;
    let c = a.h,
        d = b[c++],
        e = d & 127;
    if (d & 128 && (d = b[c++], e |= (d & 127) << 7, d & 128 && (d = b[c++], e |= (d & 127) << 14, d & 128 && (d = b[c++], e |= (d & 127) << 21, d & 128 && (d = b[c++], e |= d << 28, d & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128))))) throw Yb();
    cc(a, c);
    return e
}

function ec(a, b) {
    if (0 > b) throw Error(`Tried to read a negative byte length: ${b}`);
    const c = a.h,
        d = c + b;
    if (d > a.i) throw $b(b, a.i - c);
    a.h = d;
    return c
}
var fc = class {
        constructor(a, b) {
            this.j = null;
            this.m = !1;
            this.h = this.i = this.l = 0;
            this.init(a, void 0, void 0, b)
        }
        init(a, b, c, {
            Y: d = !1
        } = {}) {
            this.Y = d;
            a && (a = ac(a), this.j = a.buffer, this.m = a.I, this.l = b || 0, this.i = void 0 !== c ? this.l + c : this.j.length, this.h = this.l)
        }
        clear() {
            this.j = null;
            this.m = !1;
            this.h = this.i = this.l = 0;
            this.Y = !1
        }
        reset() {
            this.h = this.l
        }
        advance(a) {
            cc(this, this.h + a)
        }
    },
    gc = [];

function hc(a, {
    na: b = !1
} = {}) {
    a.na = b
}

function ic(a) {
    var b = a.h;
    if (b.h == b.i) return !1;
    a.j = a.h.h;
    var c = dc(a.h) >>> 0;
    b = c >>> 3;
    c &= 7;
    if (!(0 <= c && 5 >= c)) throw Xb(c, a.j);
    if (1 > b) throw Error(`Invalid field number: ${b} (at position ${a.j})`);
    a.l = b;
    a.i = c;
    return !0
}

function jc(a) {
    switch (a.i) {
        case 0:
            if (0 != a.i) jc(a);
            else a: {
                a = a.h;
                var b = a.h;
                const c = b + 10,
                    d = a.j;
                for (; b < c;)
                    if (0 === (d[b++] & 128)) {
                        cc(a, b);
                        break a
                    }
                throw Yb();
            }
            break;
        case 1:
            a.h.advance(8);
            break;
        case 2:
            2 != a.i ? jc(a) : (b = dc(a.h) >>> 0, a.h.advance(b));
            break;
        case 5:
            a.h.advance(4);
            break;
        case 3:
            b = a.l;
            do {
                if (!ic(a)) throw Error("Unmatched start-group tag: stream EOF");
                if (4 == a.i) {
                    if (a.l != b) throw Error("Unmatched end-group tag");
                    break
                }
                jc(a)
            } while (1);
            break;
        default:
            throw Xb(a.i, a.j);
    }
}
var kc = class {
        constructor(a, b) {
            if (gc.length) {
                const c = gc.pop();
                c.init(a, void 0, void 0, b);
                a = c
            } else a = new fc(a, b);
            this.h = a;
            this.j = this.h.h;
            this.i = this.l = -1;
            hc(this, b)
        }
        reset() {
            this.h.reset();
            this.j = this.h.h;
            this.i = this.l = -1
        }
        advance(a) {
            this.h.advance(a)
        }
    },
    lc = [];
class mc {
    constructor(a) {
        this.h = a
    }
};

function nc(a) {
    return Array.prototype.slice.call(a)
};
const A = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0;
[...Object.values({
    Fb: 1,
    Eb: 2,
    Db: 4,
    Kb: 8,
    Jb: 16,
    Ib: 32,
    cb: 64,
    Ob: 128,
    ib: 256,
    hb: 512
})];
var oc = A ? (a, b) => {
    a[A] |= b
} : (a, b) => {
    void 0 !== a.C ? a.C |= b : Object.defineProperties(a, {
        C: {
            value: b,
            configurable: !0,
            writable: !0,
            enumerable: !1
        }
    })
};

function pc(a) {
    const b = C(a);
    1 !== (b & 1) && (Object.isFrozen(a) && (a = nc(a)), E(a, b | 1))
}
var qc = A ? (a, b) => {
        a[A] &= ~b
    } : (a, b) => {
        void 0 !== a.C && (a.C &= ~b)
    },
    C = A ? a => a[A] | 0 : a => a.C | 0,
    F = A ? a => a[A] : a => a.C,
    E = A ? (a, b) => {
        a[A] = b
    } : (a, b) => {
        void 0 !== a.C ? a.C = b : Object.defineProperties(a, {
            C: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    };

function rc(a) {
    oc(a, 1);
    return a
}

function sc(a, b) {
    E(b, (a | 0) & -255)
}

function tc(a, b) {
    E(b, (a | 34) & -221)
}

function uc(a) {
    a = a >> 10 & 1023;
    return 0 === a ? 536870912 : a
};
var vc = {};

function wc(a) {
    return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
}
let xc;

function yc(a, b, c) {
    if (!Array.isArray(a) || a.length) return !1;
    const d = C(a);
    if (d & 1) return !0;
    if (!b || !b.includes(c)) return !1;
    E(a, d | 1);
    return !0
}
var zc;
const Ac = [];
E(Ac, 39);
zc = Object.freeze(Ac);

function Bc(a) {
    if (a & 2) throw Error();
}
let Cc;

function Dc(a, b) {
    (b = Cc ? b[Cc] : void 0) && (a[Cc] = nc(b))
};

function Ec(a) {
    return a.displayName || a.name || "unknown type name"
}

function Fc(a) {
    return "number" === typeof a && !Number.isNaN(a) || !!a && "string" === typeof a && !isNaN(a)
}

function Gc(a) {
    if (null == a) return a;
    if ("string" === typeof a) {
        if (!a) return;
        a = +a
    }
    if ("number" === typeof a) return a
}

function Hc(a) {
    if (!Fc(a)) throw Error(`Expected an int64 value encoded as a number or a string but got ${a} a ${ha(a)}`);
    "string" === typeof a ? Fc(a) : Fc(a);
    return a
}

function Ic(a) {
    if (null != a && "string" !== typeof a) throw Error();
    return a
}

function Jc(a, b) {
    if (!(a instanceof b)) throw Error(`Expected instanceof ${Ec(b)} but got ${a&&Ec(a.constructor)}`);
    return a
}

function Kc(a, b, c) {
    var d = !1;
    if (null != a && "object" === typeof a && !(d = Array.isArray(a)) && a.ca === vc) return a;
    if (d) {
        var e = d = C(a);
        0 === e && (e |= c & 32);
        e |= c & 2;
        e !== d && E(a, e);
        return new b(a)
    }
};
let Lc;

function Mc(a) {
    switch (typeof a) {
        case "number":
            return 0 < a ? void 0 : [-a, void 0];
        case "string":
            return [0, a];
        case "object":
            return a
    }
}

function Nc(a, b, c) {
    null == a && (a = Lc);
    Lc = void 0;
    if (null == a) {
        var d = 96;
        c ? (a = [c], d |= 512) : a = [];
        b && (d = d & -1047553 | (b & 1023) << 10)
    } else {
        if (!Array.isArray(a)) throw Error();
        d = C(a);
        if (d & 64) return a;
        d |= 64;
        if (c && (d |= 512, c !== a[0])) throw Error();
        a: {
            c = a;
            var e = c.length;
            if (e) {
                const g = e - 1;
                var f = c[g];
                if (wc(f)) {
                    d |= 256;
                    b = (d >> 9 & 1) - 1;
                    e = g - b;
                    1024 <= e && (Oc(c, b, f), e = 1023);
                    d = d & -1047553 | (e & 1023) << 10;
                    break a
                }
            }
            b && (f = (d >> 9 & 1) - 1, b = Math.max(b, e - f), 1024 < b && (Oc(c, f, {}), d |= 256, b = 1023), d = d & -1047553 | (b & 1023) << 10)
        }
    }
    E(a, d);
    return a
}

function Oc(a, b, c) {
    const d = 1023 + b,
        e = a.length;
    for (let f = d; f < e; f++) {
        const g = a[f];
        null != g && g !== c && (c[f - b] = g)
    }
    a.length = d + 1;
    a[d] = c
};

function Pc(a, b) {
    return Qc(b)
}

function Qc(a) {
    switch (typeof a) {
        case "number":
            return isFinite(a) ? a : String(a);
        case "boolean":
            return a ? 1 : 0;
        case "object":
            if (a && !Array.isArray(a)) {
                if (Pb(a)) return Kb(a);
                if (a instanceof Vb) {
                    const b = a.S;
                    return null == b ? "" : "string" === typeof b ? b : a.S = Kb(b)
                }
            }
    }
    return a
};

function Rc(a, b, c) {
    const d = nc(a);
    var e = d.length;
    const f = b & 256 ? d[e - 1] : void 0;
    e += f ? -1 : 0;
    for (b = b & 512 ? 1 : 0; b < e; b++) d[b] = c(d[b]);
    if (f) {
        b = d[b] = {};
        for (const g in f) b[g] = c(f[g])
    }
    Dc(d, a);
    return d
}

function Sc(a, b, c, d, e, f) {
    if (null != a) {
        if (Array.isArray(a)) a = e && 0 == a.length && C(a) & 1 ? void 0 : f && C(a) & 2 ? a : Tc(a, b, c, void 0 !== d, e, f);
        else if (wc(a)) {
            const g = {};
            for (let h in a) g[h] = Sc(a[h], b, c, d, e, f);
            a = g
        } else a = b(a, d);
        return a
    }
}

function Tc(a, b, c, d, e, f) {
    const g = d || c ? C(a) : 0;
    d = d ? !!(g & 32) : void 0;
    const h = nc(a);
    for (let k = 0; k < h.length; k++) h[k] = Sc(h[k], b, c, d, e, f);
    c && (Dc(h, a), c(g, h));
    return h
}

function Uc(a) {
    return a.ca === vc ? a.toJSON() : Qc(a)
};

function Vc(a, b, c = tc) {
    if (null != a) {
        if (Ib && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
        if (Array.isArray(a)) {
            const d = C(a);
            return d & 2 ? a : !b || d & 68 || !(d & 32 || 0 === d) ? Tc(a, Vc, d & 4 ? tc : c, !0, !1, !0) : (E(a, d | 34), a)
        }
        a.ca === vc && (b = a.o, c = F(b), a = c & 2 ? a : Wc(a, b, c, !0));
        return a
    }
}

function Wc(a, b, c, d) {
    a = a.constructor;
    Lc = b = Xc(b, c, d);
    b = new a(b);
    Lc = void 0;
    return b
}

function Xc(a, b, c) {
    const d = c || b & 2 ? tc : sc,
        e = !!(b & 32);
    a = Rc(a, b, f => Vc(f, e, d));
    oc(a, 32 | (c ? 2 : 0));
    return a
}

function Yc(a) {
    const b = a.o,
        c = F(b);
    return c & 2 ? Wc(a, b, c, !1) : a
};

function Zc(a, b) {
    a = a.o;
    return $c(a, F(a), b)
}

function $c(a, b, c, d) {
    if (-1 === c) return null;
    if (c >= uc(b)) {
        if (b & 256) return a[a.length - 1][c]
    } else {
        var e = a.length;
        if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
        b = c + ((b >> 9 & 1) - 1);
        if (b < e) return a[b]
    }
}

function G(a, b, c, d) {
    const e = a.o,
        f = F(e);
    Bc(f);
    H(e, f, b, c, d);
    return a
}

function H(a, b, c, d, e) {
    var f = uc(b);
    if (c >= f || e) {
        e = b;
        if (b & 256) f = a[a.length - 1];
        else {
            if (null == d) return;
            f = a[f + ((b >> 9 & 1) - 1)] = {};
            e |= 256
        }
        f[c] = d;
        e !== b && E(a, e)
    } else a[c + ((b >> 9 & 1) - 1)] = d, b & 256 && (a = a[a.length - 1], c in a && delete a[c])
}

function ad(a, b, c, d) {
    var e = b & 2;
    let f = $c(a, b, c);
    Array.isArray(f) || (f = zc);
    const g = C(f);
    g & 1 || rc(f);
    if (e) g & 2 || oc(f, 34), d & 1 || Object.freeze(f);
    else {
        e = !(d & 2);
        const h = g & 2;
        d & 1 || !h ? e && g & 32 && !h && qc(f, 32) : (f = rc(nc(f)), H(a, b, c, f))
    }
    return f
}

function bd(a, b, c, d) {
    const e = a.o,
        f = F(e);
    Bc(f);
    (c = cd(e, f, c)) && c !== b && null != d && H(e, f, c);
    H(e, f, b, d);
    return a
}

function dd(a, b, c) {
    a = a.o;
    return cd(a, F(a), b) === c ? c : -1
}

function cd(a, b, c) {
    let d = 0;
    for (let e = 0; e < c.length; e++) {
        const f = c[e];
        null != $c(a, b, f) && (0 !== d && H(a, b, d), d = f)
    }
    return d
}

function ed(a, b, c) {
    var d = a.o,
        e = F(d),
        f = $c(d, e, c, !1);
    b = Kc(f, b, e);
    b !== f && null != b && H(d, e, c, b, !1);
    d = b;
    if (null == d) return d;
    a = a.o;
    e = F(a);
    e & 2 || (f = Yc(d), f !== d && (d = f, H(a, e, c, d, !1)));
    return d
}

function fd(a, b, c, d, e) {
    var f = !!(b & 2),
        g = ad(a, b, d, 1);
    if (g === zc || !(C(g) & 4)) {
        var h = g;
        g = !!(b & 2);
        var k = !!(C(h) & 2);
        f = h;
        !g && k && (h = nc(h));
        var l = b | (k ? 2 : 0);
        k = k || void 0;
        let m = 0,
            n = 0;
        for (; m < h.length; m++) {
            const u = Kc(h[m], c, l);
            void 0 !== u && (k = k || F(u.o) & 2, h[n++] = u)
        }
        n < m && (h.length = n);
        c = h;
        h = C(c);
        l = h | 5;
        k = k ? l & -9 : l | 8;
        h != k && (Object.isFrozen(c) && (c = nc(c)), E(c, k));
        h = c;
        f !== h && H(a, b, d, h);
        (g && 2 !== e || 1 === e) && Object.freeze(h);
        return h
    }
    if (3 === e) return g;
    f ? 2 === e && (e = C(g), g = nc(g), E(g, e), H(a, b, d, g)) : (f = Object.isFrozen(g), 1 === e ? f ||
        Object.freeze(g) : (e = C(g), c = e & -35, f && (g = nc(g), e = 0, H(a, b, d, g)), e !== c && E(g, c)));
    return g
}

function gd(a) {
    a = a.o;
    var b = F(a),
        c = !!(b & 2);
    a = fd(a, b, hd, 1, c ? 1 : 2);
    if (!(c || C(a) & 8)) {
        for (c = 0; c < a.length; c++) {
            b = a[c];
            const d = Yc(b);
            b !== d && (a[c] = d)
        }
        oc(a, 8)
    }
    return a
}

function I(a, b, c, d) {
    null != d ? Jc(d, b) : d = void 0;
    return G(a, c, d)
}

function id(a, b, c, d, e) {
    null != e ? Jc(e, b) : e = void 0;
    bd(a, c, d, e)
}

function jd(a, b, c, d) {
    a = a.o;
    const e = F(a);
    Bc(e);
    b = fd(a, e, c, b, 2);
    c = null != d ? Jc(d, c) : new c;
    b.push(c);
    c.I() && qc(b, 8)
}

function kd(a, b, c) {
    if (null != c && "number" !== typeof c) throw Error();
    return G(a, b, c)
}

function ld(a, b, c) {
    G(a, b, null == c ? c : Hc(c))
}

function md(a, b) {
    a = Zc(a, b);
    return null == a || "string" === typeof a ? a : void 0
}

function J(a, b, c) {
    return G(a, b, Ic(c))
}

function K(a, b) {
    a = md(a, b);
    return null != a ? a : ""
};
var L = class {
    constructor(a, b, c) {
        this.o = Nc(a, b, c)
    }
    toJSON() {
        if (xc) var a = nd(this, this.o, !1);
        else a = Tc(this.o, Uc, void 0, void 0, !1, !1), a = nd(this, a, !0);
        return a
    }
    clone() {
        const a = this.o;
        return Wc(this, a, F(a), !1)
    }
    I() {
        return !!(C(this.o) & 2)
    }
};
L.prototype.ca = vc;

function nd(a, b, c) {
    const d = a.constructor.v;
    var e = F(c ? a.o : b),
        f = uc(e),
        g = !1;
    if (d) {
        if (!c) {
            b = nc(b);
            var h;
            if (b.length && wc(h = b[b.length - 1]))
                for (g = 0; g < d.length; g++)
                    if (d[g] >= f) {
                        Object.assign(b[b.length - 1] = {}, h);
                        break
                    }
            g = !0
        }
        f = b;
        c = !c;
        h = F(a.o);
        a = uc(h);
        h = (h >> 9 & 1) - 1;
        var k;
        for (let P = 0; P < d.length; P++) {
            var l = d[P];
            if (l < a) {
                l += h;
                var m = f[l];
                null == m ? f[l] = c ? zc : rc([]) : c && m !== zc && pc(m)
            } else {
                if (!k) {
                    var n = void 0;
                    f.length && wc(n = f[f.length - 1]) ? k = n : f.push(k = {})
                }
                m = k[l];
                null == k[l] ? k[l] = c ? zc : rc([]) : c && m !== zc && pc(m)
            }
        }
    }
    k = b.length;
    if (!k) return b;
    let u, p;
    if (wc(n = b[k - 1])) {
        a: {
            var w = n;f = {};c = !1;
            for (var B in w) a = w[B],
            Array.isArray(a) && (h = a, yc(a, d, +B) && (a = null), a != h && (c = !0)),
            null != a ? f[B] = a : c = !0;
            if (c) {
                for (let P in f) {
                    w = f;
                    break a
                }
                w = null
            }
        }
        w != n && (u = !0);k--
    }
    for (e = (e >> 9 & 1) - 1; 0 < k; k--) {
        B = k - 1;
        n = b[B];
        if (null != n && !yc(n, d, B - e)) break;
        p = !0
    }
    if (!u && !p) return b;
    var D;
    g ? D = b : D = Array.prototype.slice.call(b, 0, k);
    b = D;
    g && (b.length = k);
    w && b.push(w);
    return b
};
const od = Symbol();

function pd(a) {
    let b = a[od];
    if (!b) {
        const c = qd(a),
            d = c.i;
        b = d ? (e, f) => d(e, f, c) : (e, f) => {
            for (; ic(f) && 4 != f.i;) {
                var g = f.l,
                    h = c[g];
                if (!h) {
                    var k = c.extensions;
                    k && (k = k[g]) && (h = c[g] = rd(k))
                }
                if (!h || !h(f, e, g)) {
                    h = f;
                    g = h.j;
                    jc(h);
                    if (h.na) h = void 0;
                    else {
                        k = h.h.h - g;
                        h.h.h = g;
                        b: {
                            h = h.h;g = k;
                            if (0 == g) {
                                h = Ub();
                                break b
                            }
                            const l = ec(h, g);h.Y && h.m ? g = h.j.subarray(l, l + g) : (h = h.j, k = l, g = l + g, g = k === g ? Qb || (Qb = new Uint8Array(0)) : bc ? h.slice(k, g) : new Uint8Array(h.subarray(k, g)));h = 0 == g.length ? Ub() : new Vb(g, Rb)
                        }
                    }
                    g = e;
                    h && (Cc || (Cc = Symbol()), (k = g[Cc]) ? k.push(h) : g[Cc] = [h])
                }
            }
        };
        a[od] = b
    }
    return b
}

function sd(a) {
    if (a = a.Da) return pd(a)
}

function rd(a) {
    const b = sd(a),
        c = a.fc.h;
    if (b) {
        const d = qd(a.Da).h;
        return (e, f, g) => c(e, f, g, d, b)
    }
    return (d, e, f) => c(d, e, f)
}

function td(a, b) {
    let c = a[b];
    "function" == typeof c && (c = c(), a[b] = c);
    (a = Array.isArray(c)) && !(a = ud in c || vd in c) && (a = 0 < c.length) && (a = c[0], b = Mc(a), null != b && b !== a && (c[0] = b), a = null != b);
    return a ? c : void 0
}
const vd = Symbol(),
    ud = Symbol();

function wd(a, b) {
    const c = a.h;
    return b ? (d, e, f) => c(d, e, f, b) : c
}

function xd(a, b, c) {
    const d = a.h;
    let e, f;
    return (g, h, k) => d(g, h, k, f || (f = qd(b).h), e || (e = pd(b)), c)
}

function qd(a) {
    var b = a[ud];
    if (b) return b;
    a: {
        b = a[ud] = {};
        var c = wd,
            d = xd;b.h = Mc(a[0]);
        let k = 1;
        if (a.length > k && "number" !== typeof a[k]) {
            var e = a[k++];
            if (Array.isArray(e)) {
                b.i = e[0];
                b.extensions = e[1];
                break a
            }
            b.extensions = e
        }
        for (e = 0; k < a.length;) {
            e += a[k++];
            for (var f = k + 1; f < a.length && "number" !== typeof a[f];) f++;
            const l = a[k++];
            f -= k;
            switch (f) {
                case 0:
                    b[e] = c(l);
                    break;
                case 1:
                    (f = td(a, k)) ? (k++, b[e] = d(l, f)) : b[e] = c(l, a[k++]);
                    break;
                case 2:
                    f = b;
                    var g = e;
                    var h = k++;
                    h = td(a, h);
                    f[g] = d(l, h, a[k++]);
                    break;
                default:
                    throw Error("unexpected number of binary field arguments: " +
                        f);
            }
        }
    }
    ud in a && vd in a && (a.length = 0);
    return b
}
var yd;
yd = new mc(function(a, b, c) {
    if (2 !== a.i) return !1;
    var d = dc(a.h) >>> 0;
    a = a.h;
    var e = ec(a, d);
    a = a.j;
    if (Ab) {
        var f = a,
            g;
        (g = zb) || (g = zb = new TextDecoder("utf-8", {
            fatal: !0
        }));
        a = e + d;
        f = 0 === e && a === f.length ? f : f.subarray(e, a);
        try {
            var h = g.decode(f)
        } catch (l) {
            if (void 0 === yb) {
                try {
                    g.decode(new Uint8Array([128]))
                } catch (m) {}
                try {
                    g.decode(new Uint8Array([97])), yb = !0
                } catch (m) {
                    yb = !1
                }
            }!yb && (zb = void 0);
            throw l;
        }
    } else {
        h = e;
        d = h + d;
        e = [];
        let l = null;
        let m;
        for (; h < d;) {
            var k = a[h++];
            128 > k ? e.push(k) : 224 > k ? h >= d ? wb() : (m = a[h++], 194 > k || 128 !== (m & 192) ?
                (h--, wb()) : e.push((k & 31) << 6 | m & 63)) : 240 > k ? h >= d - 1 ? wb() : (m = a[h++], 128 !== (m & 192) || 224 === k && 160 > m || 237 === k && 160 <= m || 128 !== ((f = a[h++]) & 192) ? (h--, wb()) : e.push((k & 15) << 12 | (m & 63) << 6 | f & 63)) : 244 >= k ? h >= d - 2 ? wb() : (m = a[h++], 128 !== (m & 192) || 0 !== (k << 28) + (m - 144) >> 30 || 128 !== ((f = a[h++]) & 192) || 128 !== ((g = a[h++]) & 192) ? (h--, wb()) : (k = (k & 7) << 18 | (m & 63) << 12 | (f & 63) << 6 | g & 63, k -= 65536, e.push((k >> 10 & 1023) + 55296, (k & 1023) + 56320))) : wb();
            8192 <= e.length && (l = xb(l, e), e.length = 0)
        }
        h = xb(l, e)
    }
    H(b, F(b), c, h);
    return !0
});
var zd;
zd = new mc(function(a, b, c, d, e) {
    if (2 !== a.i) return !1;
    d = Nc(void 0, d[0], d[1]);
    var f = F(b);
    Bc(f);
    var g = ad(b, f, c, 3);
    if (Object.isFrozen(g) || C(g) & 4) g = nc(g), H(b, f, c, g);
    g.push(d);
    b = a.h.i;
    c = dc(a.h) >>> 0;
    f = a.h.h + c;
    g = f - b;
    0 >= g && (a.h.i = f, e(d, a, void 0, void 0, void 0), g = f - a.h.h);
    if (g) throw Error("Message parsing ended unexpectedly. Expected to read " + `${c} bytes, instead read ${c-g} bytes, either the ` + "data ended unexpectedly or the message misreported its own length");
    a.h.h = f;
    a.h.i = b;
    return !0
});
ya("csi.gstatic.com");
ya("googleads.g.doubleclick.net");
ya("partner.googleadservices.com");
ya("pubads.g.doubleclick.net");
ya("securepubads.g.doubleclick.net");
ya("tpc.googlesyndication.com");

function Ad(a, b = `unexpected value ${a}!`) {
    throw Error(b);
};

function Bd(a) {
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

function Cd() {
    function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        m = l = 0
    }

    function b(n) {
        for (var u = g, p = 0; 64 > p; p += 4) u[p / 4] = n[p] << 24 | n[p + 1] << 16 | n[p + 2] << 8 | n[p + 3];
        for (p = 16; 80 > p; p++) n = u[p - 3] ^ u[p - 8] ^ u[p - 14] ^ u[p - 16], u[p] = (n << 1 | n >>> 31) & 4294967295;
        n = e[0];
        var w = e[1],
            B = e[2],
            D = e[3],
            P = e[4];
        for (p = 0; 80 > p; p++) {
            if (40 > p)
                if (20 > p) {
                    var Wa = D ^ w & (B ^ D);
                    var Zb = 1518500249
                } else Wa = w ^ B ^ D, Zb = 1859775393;
            else 60 > p ? (Wa = w & B | D & (w | B), Zb = 2400959708) : (Wa = w ^ B ^ D, Zb = 3395469782);
            Wa = ((n << 5 | n >>> 27) & 4294967295) + Wa + P + Zb + u[p] & 4294967295;
            P = D;
            D = B;
            B = (w << 30 | w >>> 2) & 4294967295;
            w = n;
            n = Wa
        }
        e[0] = e[0] + n & 4294967295;
        e[1] = e[1] + w & 4294967295;
        e[2] = e[2] + B & 4294967295;
        e[3] = e[3] + D & 4294967295;
        e[4] = e[4] + P & 4294967295
    }

    function c(n, u) {
        if ("string" === typeof n) {
            n = unescape(encodeURIComponent(n));
            for (var p = [], w = 0, B = n.length; w < B; ++w) p.push(n.charCodeAt(w));
            n = p
        }
        u || (u = n.length);
        p = 0;
        if (0 == l)
            for (; p + 64 < u;) b(n.slice(p, p + 64)), p += 64, m += 64;
        for (; p < u;)
            if (f[l++] = n[p++], m++, 64 == l)
                for (l = 0, b(f); p + 64 < u;) b(n.slice(p, p + 64)), p += 64, m += 64
    }

    function d() {
        var n = [],
            u = 8 * m;
        56 > l ? c(h, 56 - l) : c(h, 64 - (l - 56));
        for (var p = 63; 56 <= p; p--) f[p] = u & 255, u >>>= 8;
        b(f);
        for (p = u = 0; 5 > p; p++)
            for (var w = 24; 0 <= w; w -= 8) n[u++] = e[p] >> w & 255;
        return n
    }
    for (var e = [], f = [], g = [], h = [128], k = 1; 64 > k; ++k) h[k] = 0;
    var l, m;
    a();
    return {
        reset: a,
        update: c,
        digest: d,
        Ga: function() {
            for (var n = d(), u = "", p = 0; p < n.length; p++) u += "0123456789ABCDEF".charAt(Math.floor(n[p] / 16)) + "0123456789ABCDEF".charAt(n[p] % 16);
            return u
        }
    }
};

function Dd(a, b, c) {
    var d = String(t.location.href);
    return d && a && b ? [b, Ed(Bd(d), a, c || null)].join(" ") : null
}

function Ed(a, b, c) {
    var d = [],
        e = [];
    if (1 == (Array.isArray(c) ? 2 : 1)) return e = [b, a], pa(d, function(h) {
        e.push(h)
    }), Fd(e.join(" "));
    var f = [],
        g = [];
    pa(c, function(h) {
        g.push(h.key);
        f.push(h.value)
    });
    c = Math.floor((new Date).getTime() / 1E3);
    e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
    pa(d, function(h) {
        e.push(h)
    });
    a = Fd(e.join(" "));
    a = [c, a];
    0 == g.length || a.push(g.join(""));
    return a.join("_")
}

function Fd(a) {
    var b = Cd();
    b.update(a);
    return b.Ga().toLowerCase()
};
const Gd = {};

function Hd() {
    this.h = document || {
        cookie: ""
    }
}
q = Hd.prototype;
q.isEnabled = function() {
    if (!t.navigator.cookieEnabled) return !1;
    if (!this.qa()) return !0;
    this.set("TESTCOOKIESENABLED", "1", {
        ra: 60
    });
    if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
    this.remove("TESTCOOKIESENABLED");
    return !0
};
q.set = function(a, b, c) {
    let d, e, f, g = !1,
        h;
    "object" === typeof c && (h = c.kc, g = c.lc || !1, f = c.domain || void 0, e = c.path || void 0, d = c.ra);
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === d && (d = -1);
    this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
};
q.get = function(a, b) {
    const c = a + "=",
        d = (this.h.cookie || "").split(";");
    for (let e = 0, f; e < d.length; e++) {
        f = Aa(d[e]);
        if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
        if (f == a) return ""
    }
    return b
};
q.remove = function(a, b, c) {
    const d = void 0 !== this.get(a);
    this.set(a, "", {
        ra: 0,
        path: b,
        domain: c
    });
    return d
};
q.qa = function() {
    return !this.h.cookie
};
q.clear = function() {
    var a = (this.h.cookie || "").split(";");
    const b = [],
        c = [];
    let d, e;
    for (let f = 0; f < a.length; f++) e = Aa(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
};

function Id() {
    return !!Gd.FPA_SAMESITE_PHASE2_MOD || !1
}

function Jd(a, b, c, d) {
    (a = t[a]) || "undefined" === typeof document || (a = (new Hd).get(b));
    return a ? Dd(a, c, d) : null
};
"undefined" !== typeof TextDecoder && new TextDecoder;
"undefined" !== typeof TextEncoder && new TextEncoder;
const Kd = self;
class Ld {
    constructor() {
        this.promise = new Promise(a => {
            this.resolve = a
        })
    }
};

function M(a) {
    Oa.call(this);
    this.A = 1;
    this.m = [];
    this.s = 0;
    this.h = [];
    this.i = {};
    this.G = !!a
}
ma(M, Oa);
q = M.prototype;
q.za = function(a, b, c) {
    var d = this.i[a];
    d || (d = this.i[a] = []);
    var e = this.A;
    this.h[e] = a;
    this.h[e + 1] = b;
    this.h[e + 2] = c;
    this.A = e + 3;
    d.push(e);
    return e
};
q.fa = function(a) {
    var b = this.h[a];
    if (b) {
        var c = this.i[b];
        0 != this.s ? (this.m.push(a), this.h[a + 1] = () => {}) : (c && ra(c, a), delete this.h[a], delete this.h[a + 1], delete this.h[a + 2])
    }
    return !!b
};
q.da = function(a, b) {
    var c = this.i[a];
    if (c) {
        for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
        if (this.G)
            for (e = 0; e < c.length; e++) {
                var g = c[e];
                Md(this.h[g + 1], this.h[g + 2], d)
            } else {
                this.s++;
                try {
                    for (e = 0, f = c.length; e < f && !this.j; e++) g = c[e], this.h[g + 1].apply(this.h[g + 2], d)
                } finally {
                    if (this.s--, 0 < this.m.length && 0 == this.s)
                        for (; c = this.m.pop();) this.fa(c)
                }
            }
        return 0 != e
    }
    return !1
};

function Md(a, b, c) {
    eb(function() {
        a.apply(b, c)
    })
}
q.clear = function(a) {
    if (a) {
        var b = this.i[a];
        b && (b.forEach(this.fa, this), delete this.i[a])
    } else this.h.length = 0, this.i = {}
};
q.O = function() {
    M.Ta.O.call(this);
    this.clear();
    this.m.length = 0
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
let N = {};
var Nd = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Int32Array;
N.assign = function(a) {
    for (var b = Array.prototype.slice.call(arguments, 1); b.length;) {
        var c = b.shift();
        if (c) {
            if ("object" !== typeof c) throw new TypeError(c + "must be non-object");
            for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
        }
    }
    return a
};
N.oc = function(a, b) {
    if (a.length === b) return a;
    if (a.subarray) return a.subarray(0, b);
    a.length = b;
    return a
};
var Od = {
        Ca: function(a, b, c, d, e) {
            if (b.subarray && a.subarray) a.set(b.subarray(c, c + d), e);
            else
                for (var f = 0; f < d; f++) a[e + f] = b[c + f]
        },
        Ia: function(a) {
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
    Pd = {
        Ca: function(a, b, c, d, e) {
            for (var f = 0; f < d; f++) a[e + f] = b[c + f]
        },
        Ia: function(a) {
            return [].concat.apply([], a)
        }
    };
N.Sa = function() {
    Nd ? (N.xa = Uint8Array, N.va = Uint16Array, N.wa = Int32Array, N.assign(N, Od)) : (N.xa = Array, N.va = Array, N.wa = Array, N.assign(N, Pd))
};
N.Sa();
try {
    new Uint8Array(1)
} catch (a) {};

function Qd(a) {
    for (var b = a.length; 0 <= --b;) a[b] = 0
}
Qd(Array(576));
Qd(Array(60));
Qd(Array(512));
Qd(Array(256));
Qd(Array(29));
Qd(Array(30));
/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var Rd = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
var Sd = class {
    constructor(a) {
        this.name = a
    }
};
var Td = new Sd("rawColdConfigGroup");
var Ud = new Sd("rawHotConfigGroup");

function Vd(a, b) {
    return kd(a, 1, b)
}
var Wd = class extends L {
    constructor(a) {
        super(a)
    }
};
var Xd = class extends L {
    constructor(a) {
        super(a)
    }
};
Xd.v = [1];
var Yd = class extends L {
    constructor(a) {
        super(a)
    }
};
var Zd = class extends L {
    constructor(a) {
        super(a)
    }
};
var $d = class extends L {
    constructor(a) {
        super(a)
    }
};
$d.v = [2];
var ae = class extends L {
    constructor(a) {
        super(a)
    }
    getPlayerType() {
        var a = Zc(this, 36);
        return null != a ? a : 0
    }
    setHomeGroupInfo(a) {
        return I(this, $d, 81, a)
    }
    clearLocationPlayabilityToken() {
        return G(this, 89, void 0, !1)
    }
};
ae.v = [9, 66, 32, 86, 100, 101];
var ce = class extends L {
        constructor(a) {
            super(a)
        }
        getKey() {
            return K(this, 1)
        }
        K() {
            return K(this, dd(this, be, 2))
        }
    },
    be = [2, 3, 4, 5, 6];
var de = class extends L {
    constructor(a) {
        super(a)
    }
};
de.v = [15, 26, 28];
var ee = class extends L {
    constructor(a) {
        super(a)
    }
};
ee.v = [5];
var fe = class extends L {
    constructor(a) {
        super(a)
    }
};
var ge = class extends L {
    constructor(a) {
        super(a)
    }
    setSafetyMode(a) {
        return G(this, 5, a)
    }
};
ge.v = [12];
var he = class extends L {
    constructor(a) {
        super(a)
    }
    j(a) {
        return I(this, ae, 1, a)
    }
};
he.v = [12];
var ie = class extends L {
    constructor(a) {
        super(a)
    }
    getKey() {
        return K(this, 1)
    }
    K() {
        return K(this, 2)
    }
};
var je = class extends L {
    constructor(a) {
        super(a)
    }
};
je.v = [4, 5];
var ke = class extends L {
    constructor(a) {
        super(a)
    }
};
var le = class extends L {
        constructor(a) {
            super(a)
        }
    },
    me = [2, 3, 4, 5];
var ne = class extends L {
    constructor(a) {
        super(a)
    }
    getMessage() {
        return K(this, 1)
    }
};
var oe = class extends L {
    constructor(a) {
        super(a)
    }
};
var pe = class extends L {
    constructor(a) {
        super(a)
    }
};
var qe = class extends L {
    constructor(a) {
        super(a)
    }
};
qe.v = [10, 17];
var re = class extends L {
    constructor(a) {
        super(a)
    }
};
var se = class extends L {
    constructor(a) {
        super(a)
    }
};
var te = class extends L {
    constructor(a) {
        super(a)
    }
};
var ue = class extends L {
    constructor(a) {
        super(a)
    }
};
var ve = class extends L {
    constructor(a) {
        super(a)
    }
    getVideoData() {
        return ed(this, ue, 15)
    }
};
ve.v = [4];

function we(a, b) {
    I(a, se, 1, b)
}
var xe = class extends L {
    constructor(a) {
        super(a)
    }
};

function ye(a, b) {
    return I(a, se, 1, b)
}
var ze = class extends L {
    constructor(a) {
        super(a)
    }
    h(a) {
        return J(this, 2, a)
    }
};

function Ae(a, b) {
    return I(a, se, 2, b)
}
var Be = class extends L {
    constructor(a) {
        super(a)
    }
    h(a) {
        return J(this, 1, a)
    }
};
Be.v = [3];
var Ce = class extends L {
    constructor(a) {
        super(a)
    }
    h(a) {
        return J(this, 1, a)
    }
};
var De = class extends L {
    constructor(a) {
        super(a)
    }
    h(a) {
        return J(this, 1, a)
    }
};
var Ee = class extends L {
    constructor(a) {
        super(a)
    }
    h(a) {
        return J(this, 1, a)
    }
};
var Fe = class extends L {
    constructor(a) {
        super(a)
    }
    h(a) {
        return J(this, 1, a)
    }
};
var Ge = class extends L {
    constructor(a) {
        super(a)
    }
};
var He = class extends L {
    constructor(a) {
        super(a)
    }
};
var O = class extends L {
        constructor(a) {
            super(a, 482)
        }
    },
    Ie = [2, 3, 5, 6, 7, 11, 13, 20, 21, 22, 23, 24, 28, 32, 37, 45, 59, 72, 73, 74, 76, 78, 79, 80, 85, 91, 97, 100, 102, 105, 111, 117, 119, 126, 127, 136, 146, 148, 151, 156, 157, 158, 159, 163, 164, 168, 176, 177, 178, 179, 184, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 208, 209, 215, 219, 222, 225, 226, 227, 229, 232, 233, 234, 240, 241, 244, 247, 248, 249, 251, 254, 255, 256, 257, 258, 259, 260, 261, 266, 270, 272, 278, 288, 291, 293, 300, 304, 308, 309, 310, 311, 313, 314, 319, 320, 321, 323, 324, 327, 328, 330, 331,
        332, 334, 337, 338, 340, 344, 348, 350, 351, 352, 353, 354, 355, 356, 357, 358, 361, 363, 364, 368, 369, 370, 373, 374, 375, 378, 380, 381, 383, 388, 389, 399, 402, 403, 410, 411, 412, 413, 414, 415, 416, 417, 418, 423, 424, 425, 426, 427, 429, 430, 431, 439, 441, 444, 448, 458, 469, 471, 473, 474, 480, 481
    ];
var Je = {
    Cb: 0,
    jb: 1,
    pb: 2,
    qb: 4,
    wb: 8,
    rb: 16,
    sb: 32,
    Bb: 64,
    Ab: 128,
    lb: 256,
    nb: 512,
    ub: 1024,
    mb: 2048,
    ob: 4096,
    kb: 8192,
    tb: 16384,
    xb: 32768,
    vb: 65536,
    yb: 131072,
    zb: 262144
};
var Ke = class extends L {
    constructor(a) {
        super(a)
    }
};
var Me = class extends L {
        constructor(a) {
            super(a)
        }
        setVideoId(a) {
            return bd(this, 1, Le, Ic(a))
        }
        getPlaylistId() {
            return md(this, dd(this, Le, 2))
        }
    },
    Le = [1, 2];
var Ne = class extends L {
    constructor() {
        super()
    }
};
Ne.v = [3];
var Oe = new Sd("recordNotificationInteractionsEndpoint");
var Pe = ["notification/convert_endpoint_to_url"],
    Qe = ["notification/record_interactions"],
    Re = ["notification_registration/set_registration"];
var Se = a => self.btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(a)))).replace(/\+/g, "-").replace(/\//g, "_");
var Te = ["notifications_register", "notifications_check_registration"];
var Ue = class extends Error {
    constructor(a, ...b) {
        super(a);
        this.args = [...b]
    }
};
let Ve = null;

function Q(a, b) {
    const c = {};
    c.key = a;
    c.value = b;
    return We().then(d => new Promise((e, f) => {
        try {
            const g = d.transaction("swpushnotificationsstore", "readwrite").objectStore("swpushnotificationsstore").put(c);
            g.onsuccess = () => {
                e()
            };
            g.onerror = () => {
                f()
            }
        } catch (g) {
            f(g)
        }
    }))
}

function Xe() {
    return Q("IndexedDBCheck", "testing IndexedDB").then(() => Ye("IndexedDBCheck")).then(a => "testing IndexedDB" === a ? Promise.resolve() : Promise.reject()).then(() => !0).catch(() => !1)
}

function Ye(a) {
    const b = new Ue("Error accessing DB");
    return We().then(c => new Promise((d, e) => {
        try {
            const f = c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);
            f.onsuccess = () => {
                const g = f.result;
                d(g ? g.value : null)
            };
            f.onerror = () => {
                b.params = {
                    key: a,
                    source: "onerror"
                };
                e(b)
            }
        } catch (f) {
            b.params = {
                key: a,
                thrownError: String(f)
            }, e(b)
        }
    }), () => null)
}

function We() {
    return Ve ? Promise.resolve(Ve) : new Promise((a, b) => {
        const c = self.indexedDB.open("swpushnotificationsdb");
        c.onerror = b;
        c.onsuccess = () => {
            const d = c.result;
            if (d.objectStoreNames.contains("swpushnotificationsstore")) Ve = d, a(Ve);
            else return self.indexedDB.deleteDatabase("swpushnotificationsdb"), We()
        };
        c.onupgradeneeded = Ze
    })
}

function Ze(a) {
    a = a.target.result;
    a.objectStoreNames.contains("swpushnotificationsstore") && a.deleteObjectStore("swpushnotificationsstore");
    a.createObjectStore("swpushnotificationsstore", {
        keyPath: "key"
    })
};
const $e = {
    WEB_UNPLUGGED: "^unplugged/",
    WEB_UNPLUGGED_ONBOARDING: "^unplugged/",
    WEB_UNPLUGGED_OPS: "^unplugged/",
    WEB_UNPLUGGED_PUBLIC: "^unplugged/",
    WEB_CREATOR: "^creator/",
    WEB_KIDS: "^kids/",
    WEB_EXPERIMENTS: "^experiments/",
    WEB_MUSIC: "^music/",
    WEB_REMIX: "^music/",
    WEB_MUSIC_EMBEDDED_PLAYER: "^music/",
    WEB_MUSIC_EMBEDDED_PLAYER: "^main_app/|^sfv/"
};

function af(a) {
    if (1 === a.length) return a[0];
    var b = $e.UNKNOWN_INTERFACE;
    if (b) {
        b = new RegExp(b);
        for (var c of a)
            if (b.exec(c)) return c
    }
    const d = [];
    Object.entries($e).forEach(([e, f]) => {
        "UNKNOWN_INTERFACE" !== e && d.push(f)
    });
    c = new RegExp(d.join("|"));
    a.sort((e, f) => e.length - f.length);
    for (const e of a)
        if (!c.exec(e)) return e;
    return a[0]
}

function bf(a) {
    return `/youtubei/v1/${af(a)}`
};
var cf = class extends L {
    constructor(a) {
        super(a)
    }
};
var df = class extends L {
    constructor(a) {
        super(a, 0, "yt.sw.adr")
    }
};
const ef = t.window;
let ff, gf;
const hf = (null == ef ? void 0 : null == (ff = ef.yt) ? void 0 : ff.config_) || (null == ef ? void 0 : null == (gf = ef.ytcfg) ? void 0 : gf.data_) || {};
x("yt.config_", hf);

function R(...a) {
    a = arguments;
    1 < a.length ? hf[a[0]] = a[1] : 1 === a.length && Object.assign(hf, a[0])
}

function S(a, b) {
    return a in hf ? hf[a] : b
}

function jf() {
    return S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")
}

function kf() {
    const a = hf.EXPERIMENT_FLAGS;
    return a ? a.web_disable_gel_stp_ecatcher_killswitch : void 0
};
const lf = [];

function mf(a) {
    lf.forEach(b => b(a))
}

function nf(a) {
    return a && window.yterr ? function() {
        try {
            return a.apply(this, arguments)
        } catch (b) { of (b)
        }
    } : a
}

function of (a) {
    var b = v("yt.logging.errors.log");
    b ? b(a, "ERROR", void 0, void 0, void 0, void 0, void 0) : (b = S("ERRORS", []), b.push([a, "ERROR", void 0, void 0, void 0, void 0, void 0]), R("ERRORS", b));
    mf(a)
}

function pf(a) {
    var b = v("yt.logging.errors.log");
    b ? b(a, "WARNING", void 0, void 0, void 0, void 0, void 0) : (b = S("ERRORS", []), b.push([a, "WARNING", void 0, void 0, void 0, void 0, void 0]), R("ERRORS", b))
};
const qf = /^[\w.]*$/,
    rf = {
        q: !0,
        search_query: !0
    };

function sf(a, b) {
    b = a.split(b);
    const c = {};
    for (let f = 0, g = b.length; f < g; f++) {
        const h = b[f].split("=");
        if (1 == h.length && h[0] || 2 == h.length) try {
            const k = tf(h[0] || ""),
                l = tf(h[1] || "");
            k in c ? Array.isArray(c[k]) ? sa(c[k], l) : c[k] = [c[k], l] : c[k] = l
        } catch (k) {
            var d = k,
                e = h[0];
            const l = String(sf);
            d.args = [{
                key: e,
                value: h[1],
                query: a,
                method: uf == l ? "unchanged" : l
            }];
            rf.hasOwnProperty(e) || pf(d)
        }
    }
    return c
}
const uf = String(sf);

function vf(a) {
    "?" == a.charAt(0) && (a = a.substr(1));
    return sf(a, "&")
}

function wf(a, b, c) {
    var d = a.split("#", 2);
    a = d[0];
    d = 1 < d.length ? "#" + d[1] : "";
    var e = a.split("?", 2);
    a = e[0];
    e = vf(e[1] || "");
    for (var f in b) !c && null !== e && f in e || (e[f] = b[f]);
    b = a;
    a = Na(e);
    a ? (c = b.indexOf("#"), 0 > c && (c = b.length), f = b.indexOf("?"), 0 > f || f > c ? (f = c, e = "") : e = b.substring(f + 1, c), b = [b.slice(0, f), e, b.slice(c)], c = b[1], b[1] = a ? c ? c + "&" + a : a : c, a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]) : a = b;
    return a + d
}

function xf(a) {
    if (!b) var b = window.location.href;
    const c = a.match(Ka)[1] || null,
        d = La(a.match(Ka)[3] || null);
    c && d ? (a = a.match(Ka), b = b.match(Ka), a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]) : a = d ? La(b.match(Ka)[3] || null) == d && (Number(b.match(Ka)[4] || null) || null) == (Number(a.match(Ka)[4] || null) || null) : !0;
    return a
}

function tf(a) {
    return a && a.match(qf) ? a : decodeURIComponent(a.replace(/\+/g, " "))
};

function T(a) {
    a = yf(a);
    return "string" === typeof a && "false" === a ? !1 : !!a
}

function zf(a, b) {
    a = yf(a);
    return void 0 === a && void 0 !== b ? b : Number(a || 0)
}

function Af() {
    return S("EXPERIMENTS_TOKEN", "")
}

function yf(a) {
    const b = S("EXPERIMENTS_FORCED_FLAGS", {}) || {};
    return void 0 !== b[a] ? b[a] : S("EXPERIMENT_FLAGS", {})[a]
}

function Bf() {
    const a = [],
        b = S("EXPERIMENTS_FORCED_FLAGS", {});
    for (var c of Object.keys(b)) a.push({
        key: c,
        value: String(b[c])
    });
    c = S("EXPERIMENT_FLAGS", {});
    for (const d of Object.keys(c)) d.startsWith("force_") && void 0 === b[d] && a.push({
        key: d,
        value: String(c[d])
    });
    return a
};

function Cf(a, b) {
    "function" === typeof a && (a = nf(a));
    return window.setTimeout(a, b)
};
var Df = "client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" "),
    Ef = [...Df, "client_dev_set_cookie"];
[...Df];
let Ff = !1;

function Gf(a, b) {
    const c = {
        method: b.method || "GET",
        credentials: "same-origin"
    };
    b.headers && (c.headers = b.headers);
    a = Hf(a, b);
    const d = If(a, b);
    d && (c.body = d);
    b.withCredentials && (c.credentials = "include");
    const e = b.context || t;
    let f = !1,
        g;
    fetch(a, c).then(h => {
        if (!f) {
            f = !0;
            g && window.clearTimeout(g);
            var k = h.ok,
                l = m => {
                    m = m || {};
                    k ? b.onSuccess && b.onSuccess.call(e, m, h) : b.onError && b.onError.call(e, m, h);
                    b.onFinish && b.onFinish.call(e, m, h)
                };
            "JSON" == (b.format || "JSON") && (k || 400 <= h.status && 500 > h.status) ? h.json().then(l, function() {
                l(null)
            }): l(null)
        }
    }).catch(() => {
        b.onError && b.onError.call(e, {}, {})
    });
    a = b.timeout || 0;
    b.onFetchTimeout && 0 < a && (g = Cf(() => {
        f || (f = !0, window.clearTimeout(g), b.onFetchTimeout.call(b.context || t))
    }, a))
}

function Hf(a, b) {
    b.includeDomain && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
    const c = S("XSRF_FIELD_NAME");
    if (b = b.urlParams) b[c] && delete b[c], a = wf(a, b || {}, !0);
    return a
}

function If(a, b) {
    const c = S("XSRF_FIELD_NAME"),
        d = S("XSRF_TOKEN");
    var e = b.postBody || "",
        f = b.postParams;
    const g = S("XSRF_FIELD_NAME");
    let h;
    b.headers && (h = b.headers["Content-Type"]);
    b.excludeXsrf || La(a.match(Ka)[3] || null) && !b.withCredentials && La(a.match(Ka)[3] || null) != document.location.hostname || "POST" != b.method || h && "application/x-www-form-urlencoded" != h || b.postParams && b.postParams[g] || (f || (f = {}), f[c] = d);
    (T("ajax_parse_query_data_only_when_filled") && f && 0 < Object.keys(f).length || f) && "string" === typeof e &&
        (e = vf(e), wa(e, f), e = b.postBodyFormat && "JSON" == b.postBodyFormat ? JSON.stringify(e) : Na(e));
    f = e || f && !ta(f);
    !Ff && f && "POST" != b.method && (Ff = !0, of (Error("AJAX request with postData should use POST")));
    return e
};
const Jf = [{
    ba: a => `Cannot read property '${a.key}'`,
    V: {
        Error: [{
            u: /(Permission denied) to access property "([^']+)"/,
            groups: ["reason", "key"]
        }],
        TypeError: [{
            u: /Cannot read property '([^']+)' of (null|undefined)/,
            groups: ["key", "value"]
        }, {
            u: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
            groups: ["value", "key"]
        }, {
            u: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
            groups: ["value", "key"]
        }, {
            u: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
            groups: ["key"]
        }, {
            u: /Unable to get property '([^']+)' of (undefined or null) reference/,
            groups: ["key", "value"]
        }, {
            u: /(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,
            groups: ["value", "base", "key"]
        }]
    }
}, {
    ba: a => `Cannot call '${a.key}'`,
    V: {
        TypeError: [{
            u: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
            groups: ["base", "key"]
        }, {
            u: /([^ ]+) called on (null or undefined)/,
            groups: ["key", "value"]
        }, {
            u: /Object (.*) has no method '([^ ]+)'/,
            groups: ["base", "key"]
        }, {
            u: /Object doesn't support property or method '([^ ]+)'/,
            groups: ["key"]
        }, {
            u: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
            groups: ["key"]
        }, {
            u: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
            groups: ["key"]
        }]
    }
}, {
    ba: a => `${a.key} is not defined`,
    V: {
        ReferenceError: [{
            u: /(.*) is not defined/,
            groups: ["key"]
        }, {
            u: /Can't find variable: (.*)/,
            groups: ["key"]
        }]
    }
}];
var Lf = {
    F: [],
    D: [{
        callback: Kf,
        weight: 500
    }]
};

function Kf(a) {
    if ("JavaException" === a.name) return !0;
    a = a.stack;
    return a.includes("chrome://") || a.includes("chrome-extension://") || a.includes("moz-extension://")
};

function Mf() {
    if (!Nf) {
        var a = Nf = new Of;
        a.F.length = 0;
        a.D.length = 0;
        Pf(a, Lf)
    }
    return Nf
}

function Pf(a, b) {
    b.F && a.F.push.apply(a.F, b.F);
    b.D && a.D.push.apply(a.D, b.D)
}
var Of = class {
        constructor() {
            this.D = [];
            this.F = []
        }
    },
    Nf;
const Qf = new M;

function Rf(a) {
    const b = a.length;
    let c = 0;
    const d = () => a.charCodeAt(c++);
    do {
        var e = Sf(d);
        if (Infinity === e) break;
        const f = e >> 3;
        switch (e & 7) {
            case 0:
                e = Sf(d);
                if (2 === f) return e;
                break;
            case 1:
                if (2 === f) return;
                c += 8;
                break;
            case 2:
                e = Sf(d);
                if (2 === f) return a.substr(c, e);
                c += e;
                break;
            case 5:
                if (2 === f) return;
                c += 4;
                break;
            default:
                return
        }
    } while (c < b)
}

function Sf(a) {
    let b = a(),
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

function Tf(a, b, c, d) {
    if (a)
        if (Array.isArray(a)) {
            var e = d;
            for (d = 0; d < a.length && !(a[d] && (e += Uf(d, a[d], b, c), 500 < e)); d++);
            d = e
        } else if ("object" === typeof a)
        for (e in a) {
            if (a[e]) {
                var f = a[e];
                var g = b;
                var h = c;
                g = "string" !== typeof f || "clickTrackingParams" !== e && "trackingParams" !== e ? 0 : (f = Rf(atob(f.replace(/-/g, "+").replace(/_/g, "/")))) ? Uf(`${e}.ve`, f, g, h) : 0;
                d += g;
                d += Uf(e, a[e], b, c);
                if (500 < d) break
            }
        } else c[b] = Vf(a), d += c[b].length;
    else c[b] = Vf(a), d += c[b].length;
    return d
}

function Uf(a, b, c, d) {
    c += `.${a}`;
    a = Vf(b);
    d[c] = a;
    return c.length + a.length
}

function Vf(a) {
    try {
        return ("string" === typeof a ? a : String(JSON.stringify(a))).substr(0, 500)
    } catch (b) {
        return `unable to serialize ${typeof a} (${b.message})`
    }
};

function Wf() {
    Xf.h || (Xf.h = new Xf);
    return Xf.h
}

function Yf(a, b) {
    a = {};
    var c = [],
        d = Bd(String(t.location.href));
    var e = [];
    var f = t.__SAPISID || t.__APISID || t.__3PSAPISID || t.__OVERRIDE_SID;
    Id() && (f = f || t.__1PSAPISID);
    if (f) f = !0;
    else {
        if ("undefined" !== typeof document) {
            const g = new Hd;
            f = g.get("SAPISID") || g.get("APISID") || g.get("__Secure-3PAPISID") || g.get("SID") || g.get("OSID");
            Id() && (f = f || g.get("__Secure-1PAPISID"))
        }
        f = !!f
    }
    f && (f = (d = 0 == d.indexOf("https:") || 0 == d.indexOf("chrome-extension:") || 0 == d.indexOf("moz-extension:")) ? t.__SAPISID : t.__APISID, f || "undefined" ===
        typeof document || (f = new Hd, f = f.get(d ? "SAPISID" : "APISID") || f.get("__Secure-3PAPISID")), (f = f ? Dd(f, d ? "SAPISIDHASH" : "APISIDHASH", c) : null) && e.push(f), d && Id() && ((d = Jd("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", c)) && e.push(d), (c = Jd("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", c)) && e.push(c)));
    if (e = 0 == e.length ? null : e.join(" ")) a.Authorization = e, e = b = null == b ? void 0 : b.sessionIndex, void 0 === e && (e = Number(S("SESSION_INDEX", 0)), e = isNaN(e) ? 0 : e), T("voice_search_auth_header_removal") || (a["X-Goog-AuthUser"] =
        e.toString()), "INNERTUBE_HOST_OVERRIDE" in hf || (a["X-Origin"] = window.location.origin), void 0 === b && "DELEGATED_SESSION_ID" in hf && (a["X-Goog-PageId"] = S("DELEGATED_SESSION_ID"));
    return a
}
var Xf = class {
    constructor() {
        this.Ua = !0
    }
};
var Zf = {
    identityType: "UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"
};

function $f(a) {
    switch (a) {
        case "DESKTOP":
            return 1;
        case "UNKNOWN_PLATFORM":
            return 0;
        case "TV":
            return 2;
        case "GAME_CONSOLE":
            return 3;
        case "MOBILE":
            return 4;
        case "TABLET":
            return 5
    }
};
x("ytglobal.prefsUserPrefsPrefs_", v("ytglobal.prefsUserPrefsPrefs_") || {});

function ag() {
    if (void 0 !== S("DATASYNC_ID")) return S("DATASYNC_ID");
    throw new Ue("Datasync ID not set", "unknown");
};

function bg(a, b) {
    return cg(a, 0, b)
}

function dg(a) {
    const b = v("yt.scheduler.instance.addImmediateJob");
    b ? b(a) : a()
}
var eg = class {
    h(a) {
        cg(a, 1)
    }
};

function fg() {
    gg.h || (gg.h = new gg);
    return gg.h
}

function cg(a, b, c) {
    void 0 !== c && Number.isNaN(Number(c)) && (c = void 0);
    const d = v("yt.scheduler.instance.addJob");
    return d ? d(a, b, c) : void 0 === c ? (a(), NaN) : Cf(a, c || 0)
}
var gg = class extends eg {
        T(a) {
            if (void 0 === a || !Number.isNaN(Number(a))) {
                var b = v("yt.scheduler.instance.cancelJob");
                b ? b(a) : window.clearTimeout(a)
            }
        }
        start() {
            const a = v("yt.scheduler.instance.start");
            a && a()
        }
    },
    hg = fg();
const ig = [];
let jg, kg = !1;

function lg(a) {
    kg || (jg ? jg.handleError(a) : (ig.push({
        type: "ERROR",
        payload: a
    }), 10 < ig.length && ig.shift()))
}

function mg(a, b) {
    kg || (jg ? jg.U(a, b) : (ig.push({
        type: "EVENT",
        eventType: a,
        payload: b
    }), 10 < ig.length && ig.shift()))
};

function ng(a) {
    if (0 <= a.indexOf(":")) throw Error("Database name cannot contain ':'");
}

function og(a) {
    return a.substr(0, a.indexOf(":")) || a
};
const pg = {
        AUTH_INVALID: "No user identifier specified.",
        EXPLICIT_ABORT: "Transaction was explicitly aborted.",
        IDB_NOT_SUPPORTED: "IndexedDB is not supported.",
        MISSING_INDEX: "Index not created.",
        MISSING_OBJECT_STORES: "Object stores not created.",
        DB_DELETED_BY_MISSING_OBJECT_STORES: "Database is deleted because expected object stores were not created.",
        DB_REOPENED_BY_MISSING_OBJECT_STORES: "Database is reopened because expected object stores were not created.",
        UNKNOWN_ABORT: "Transaction was aborted for unknown reasons.",
        QUOTA_EXCEEDED: "The current transaction exceeded its quota limitations.",
        QUOTA_MAYBE_EXCEEDED: "The current transaction may have failed because of exceeding quota limitations.",
        EXECUTE_TRANSACTION_ON_CLOSED_DB: "Can't start a transaction on a closed database",
        INCOMPATIBLE_DB_VERSION: "The binary is incompatible with the database version"
    },
    qg = {
        AUTH_INVALID: "ERROR",
        EXECUTE_TRANSACTION_ON_CLOSED_DB: "WARNING",
        EXPLICIT_ABORT: "IGNORED",
        IDB_NOT_SUPPORTED: "ERROR",
        MISSING_INDEX: "WARNING",
        MISSING_OBJECT_STORES: "ERROR",
        DB_DELETED_BY_MISSING_OBJECT_STORES: "WARNING",
        DB_REOPENED_BY_MISSING_OBJECT_STORES: "WARNING",
        QUOTA_EXCEEDED: "WARNING",
        QUOTA_MAYBE_EXCEEDED: "WARNING",
        UNKNOWN_ABORT: "WARNING",
        INCOMPATIBLE_DB_VERSION: "WARNING"
    },
    rg = {
        AUTH_INVALID: !1,
        EXECUTE_TRANSACTION_ON_CLOSED_DB: !1,
        EXPLICIT_ABORT: !1,
        IDB_NOT_SUPPORTED: !1,
        MISSING_INDEX: !1,
        MISSING_OBJECT_STORES: !1,
        DB_DELETED_BY_MISSING_OBJECT_STORES: !1,
        DB_REOPENED_BY_MISSING_OBJECT_STORES: !1,
        QUOTA_EXCEEDED: !1,
        QUOTA_MAYBE_EXCEEDED: !0,
        UNKNOWN_ABORT: !0,
        INCOMPATIBLE_DB_VERSION: !1
    };
var U = class extends Ue {
        constructor(a, b = {}, c = pg[a], d = qg[a], e = rg[a]) {
            super(c, Object.assign({}, {
                name: "YtIdbKnownError",
                isSw: void 0 === self.document,
                isIframe: self !== self.top,
                type: a
            }, b));
            this.type = a;
            this.message = c;
            this.level = d;
            this.h = e;
            Object.setPrototypeOf(this, U.prototype)
        }
    },
    sg = class extends U {
        constructor(a, b) {
            super("MISSING_OBJECT_STORES", {
                expectedObjectStores: b,
                foundObjectStores: a
            }, pg.MISSING_OBJECT_STORES);
            Object.setPrototypeOf(this, sg.prototype)
        }
    },
    tg = class extends Error {
        constructor(a, b) {
            super();
            this.index =
                a;
            this.objectStore = b;
            Object.setPrototypeOf(this, tg.prototype)
        }
    };
const ug = ["The database connection is closing", "Can't start a transaction on a closed database", "A mutation operation was attempted on a database that did not allow mutations"];

function vg(a, b, c, d) {
    b = og(b);
    let e;
    e = a instanceof Error ? a : Error(`Unexpected error: ${a}`);
    if (e instanceof U) return e;
    a = {
        objectStoreNames: c,
        dbName: b,
        dbVersion: d
    };
    if ("QuotaExceededError" === e.name) return new U("QUOTA_EXCEEDED", a);
    if (Bb && "UnknownError" === e.name) return new U("QUOTA_MAYBE_EXCEEDED", a);
    if (e instanceof tg) return new U("MISSING_INDEX", Object.assign({}, a, {
        objectStore: e.objectStore,
        index: e.index
    }));
    if ("InvalidStateError" === e.name && ug.some(f => e.message.includes(f))) return new U("EXECUTE_TRANSACTION_ON_CLOSED_DB",
        a);
    if ("AbortError" === e.name) return new U("UNKNOWN_ABORT", a, e.message);
    e.args = [Object.assign({}, a, {
        name: "IdbError",
        bc: e.name
    })];
    e.level = "WARNING";
    return e
}

function wg(a, b, c) {
    return new U("IDB_NOT_SUPPORTED", {
        context: {
            caller: a,
            publicName: b,
            version: c,
            hasSucceededOnce: void 0
        }
    })
};

function xg(a) {
    if (!a) throw Error();
    throw a;
}

function yg(a) {
    return a
}
var zg = class {
    constructor(a) {
        this.h = a
    }
};

function Ag(a, b, c, d, e) {
    try {
        if ("FULFILLED" !== a.state.status) throw Error("calling handleResolve before the promise is fulfilled.");
        const f = c(a.state.value);
        f instanceof Bg ? Cg(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function Dg(a, b, c, d, e) {
    try {
        if ("REJECTED" !== a.state.status) throw Error("calling handleReject before the promise is rejected.");
        const f = c(a.state.reason);
        f instanceof Bg ? Cg(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function Cg(a, b, c, d, e) {
    b === c ? e(new TypeError("Circular promise chain detected.")) : c.then(f => {
        f instanceof Bg ? Cg(a, b, f, d, e) : d(f)
    }, f => {
        e(f)
    })
}
var Bg = class {
    constructor(a) {
        this.state = {
            status: "PENDING"
        };
        this.h = [];
        this.i = [];
        a = a.h;
        const b = d => {
                if ("PENDING" === this.state.status) {
                    this.state = {
                        status: "FULFILLED",
                        value: d
                    };
                    for (const e of this.h) e()
                }
            },
            c = d => {
                if ("PENDING" === this.state.status) {
                    this.state = {
                        status: "REJECTED",
                        reason: d
                    };
                    for (const e of this.i) e()
                }
            };
        try {
            a(b, c)
        } catch (d) {
            c(d)
        }
    }
    static all(a) {
        return new Bg(new zg((b, c) => {
            const d = [];
            let e = a.length;
            0 === e && b(d);
            for (let f = 0; f < a.length; ++f) Bg.resolve(a[f]).then(g => {
                d[f] = g;
                e--;
                0 === e && b(d)
            }).catch(g => {
                c(g)
            })
        }))
    }
    static resolve(a) {
        return new Bg(new zg((b, c) => {
            a instanceof Bg ? a.then(b, c) : b(a)
        }))
    }
    then(a, b) {
        const c = null != a ? a : yg,
            d = null != b ? b : xg;
        return new Bg(new zg((e, f) => {
            "PENDING" === this.state.status ? (this.h.push(() => {
                Ag(this, this, c, e, f)
            }), this.i.push(() => {
                Dg(this, this, d, e, f)
            })) : "FULFILLED" === this.state.status ? Ag(this, this, c, e, f) : "REJECTED" === this.state.status && Dg(this, this, d, e, f)
        }))
    } catch (a) {
        return this.then(void 0, a)
    }
};

function Eg(a, b, c) {
    const d = () => {
            try {
                a.removeEventListener("success", e), a.removeEventListener("error", f)
            } catch (g) {}
        },
        e = () => {
            b(a.result);
            d()
        },
        f = () => {
            c(a.error);
            d()
        };
    a.addEventListener("success", e);
    a.addEventListener("error", f)
}

function Fg(a) {
    return new Promise((b, c) => {
        Eg(a, b, c)
    })
}

function V(a) {
    return new Bg(new zg((b, c) => {
        Eg(a, b, c)
    }))
};

function Gg(a, b) {
    return new Bg(new zg((c, d) => {
        const e = () => {
            const f = a ? b(a) : null;
            f ? f.then(g => {
                a = g;
                e()
            }, d) : c()
        };
        e()
    }))
};
const Hg = window;
var W = Hg.ytcsi && Hg.ytcsi.now ? Hg.ytcsi.now : Hg.performance && Hg.performance.timing && Hg.performance.now && Hg.performance.timing.navigationStart ? () => Hg.performance.timing.navigationStart + Hg.performance.now() : () => (new Date).getTime();

function X(a, b, c, d) {
    return r(function*() {
        const e = {
            mode: "readonly",
            B: !1,
            tag: "IDB_TRANSACTION_TAG_UNKNOWN"
        };
        "string" === typeof c ? e.mode = c : Object.assign(e, c);
        a.transactionCount++;
        const f = e.B ? 3 : 1;
        let g = 0,
            h;
        for (; !h;) {
            g++;
            const l = Math.round(W());
            try {
                const m = a.h.transaction(b, e.mode);
                var k = d;
                const n = new Ig(m),
                    u = yield Jg(n, k), p = Math.round(W());
                Kg(a, l, p, g, void 0, b.join(), e);
                return u
            } catch (m) {
                k = Math.round(W());
                const n = vg(m, a.h.name, b.join(), a.h.version);
                if (n instanceof U && !n.h || g >= f) Kg(a, l, k, g, n, b.join(), e),
                    h = n
            }
        }
        return Promise.reject(h)
    })
}

function Lg(a, b, c) {
    a = a.h.createObjectStore(b, c);
    return new Mg(a)
}

function Ng(a, b, c, d) {
    return X(a, [b], {
        mode: "readwrite",
        B: !0
    }, e => {
        e = e.objectStore(b);
        return V(e.h.put(c, d))
    })
}

function Kg(a, b, c, d, e, f, g) {
    b = c - b;
    e ? (e instanceof U && ("QUOTA_EXCEEDED" === e.type || "QUOTA_MAYBE_EXCEEDED" === e.type) && mg("QUOTA_EXCEEDED", {
        dbName: og(a.h.name),
        objectStoreNames: f,
        transactionCount: a.transactionCount,
        transactionMode: g.mode
    }), e instanceof U && "UNKNOWN_ABORT" === e.type && (c -= a.j, 0 > c && c >= Math.pow(2, 31) && (c = 0), mg("TRANSACTION_UNEXPECTEDLY_ABORTED", {
        objectStoreNames: f,
        transactionDuration: b,
        transactionCount: a.transactionCount,
        dbDuration: c
    }), a.i = !0), Og(a, !1, d, f, b, g.tag), lg(e)) : Og(a, !0, d, f, b, g.tag)
}

function Og(a, b, c, d, e, f = "IDB_TRANSACTION_TAG_UNKNOWN") {
    mg("TRANSACTION_ENDED", {
        objectStoreNames: d,
        connectionHasUnknownAbortedTransaction: a.i,
        duration: e,
        isSuccessful: b,
        tryCount: c,
        tag: f
    })
}
var Pg = class {
    constructor(a, b) {
        this.h = a;
        this.options = b;
        this.transactionCount = 0;
        this.j = Math.round(W());
        this.i = !1
    }
    add(a, b, c) {
        return X(this, [a], {
            mode: "readwrite",
            B: !0
        }, d => d.objectStore(a).add(b, c))
    }
    clear(a) {
        return X(this, [a], {
            mode: "readwrite",
            B: !0
        }, b => b.objectStore(a).clear())
    }
    close() {
        this.h.close();
        let a;
        (null == (a = this.options) ? 0 : a.closed) && this.options.closed()
    }
    count(a, b) {
        return X(this, [a], {
            mode: "readonly",
            B: !0
        }, c => c.objectStore(a).count(b))
    }
    delete(a, b) {
        return X(this, [a], {
            mode: "readwrite",
            B: !0
        }, c => c.objectStore(a).delete(b))
    }
    get(a, b) {
        return X(this, [a], {
            mode: "readonly",
            B: !0
        }, c => c.objectStore(a).get(b))
    }
    getAll(a, b, c) {
        return X(this, [a], {
            mode: "readonly",
            B: !0
        }, d => d.objectStore(a).getAll(b, c))
    }
    objectStoreNames() {
        return Array.from(this.h.objectStoreNames)
    }
    getName() {
        return this.h.name
    }
};

function Qg(a, b, c) {
    a = a.h.openCursor(b.query, b.direction);
    return Rg(a).then(d => Gg(d, c))
}

function Sg(a, b) {
    return Qg(a, {
        query: b
    }, c => c.delete().then(() => c.continue())).then(() => {})
}

function Tg(a, b, c) {
    const d = [];
    return Qg(a, {
        query: b
    }, e => {
        if (!(void 0 !== c && d.length >= c)) return d.push(e.K()), e.continue()
    }).then(() => d)
}
var Mg = class {
    constructor(a) {
        this.h = a
    }
    add(a, b) {
        return V(this.h.add(a, b))
    }
    autoIncrement() {
        return this.h.autoIncrement
    }
    clear() {
        return V(this.h.clear()).then(() => {})
    }
    count(a) {
        return V(this.h.count(a))
    }
    delete(a) {
        return a instanceof IDBKeyRange ? Sg(this, a) : V(this.h.delete(a))
    }
    get(a) {
        return V(this.h.get(a))
    }
    getAll(a, b) {
        return "getAll" in IDBObjectStore.prototype ? V(this.h.getAll(a, b)) : Tg(this, a, b)
    }
    index(a) {
        try {
            return new Ug(this.h.index(a))
        } catch (b) {
            if (b instanceof Error && "NotFoundError" === b.name) throw new tg(a,
                this.h.name);
            throw b;
        }
    }
    getName() {
        return this.h.name
    }
    keyPath() {
        return this.h.keyPath
    }
};

function Jg(a, b) {
    const c = new Promise((d, e) => {
        try {
            b(a).then(f => {
                d(f)
            }).catch(e)
        } catch (f) {
            e(f), a.abort()
        }
    });
    return Promise.all([c, a.done]).then(([d]) => d)
}
var Ig = class {
    constructor(a) {
        this.h = a;
        this.j = new Map;
        this.i = !1;
        this.done = new Promise((b, c) => {
            this.h.addEventListener("complete", () => {
                b()
            });
            this.h.addEventListener("error", d => {
                d.currentTarget === d.target && c(this.h.error)
            });
            this.h.addEventListener("abort", () => {
                var d = this.h.error;
                if (d) c(d);
                else if (!this.i) {
                    d = U;
                    var e = this.h.objectStoreNames;
                    const f = [];
                    for (let g = 0; g < e.length; g++) {
                        const h = e.item(g);
                        if (null === h) throw Error("Invariant: item in DOMStringList is null");
                        f.push(h)
                    }
                    d = new d("UNKNOWN_ABORT", {
                        objectStoreNames: f.join(),
                        dbName: this.h.db.name,
                        mode: this.h.mode
                    });
                    c(d)
                }
            })
        })
    }
    abort() {
        this.h.abort();
        this.i = !0;
        throw new U("EXPLICIT_ABORT");
    }
    objectStore(a) {
        a = this.h.objectStore(a);
        let b = this.j.get(a);
        b || (b = new Mg(a), this.j.set(a, b));
        return b
    }
};

function Vg(a, b, c) {
    const {
        query: d = null,
        direction: e = "next"
    } = b;
    a = a.h.openCursor(d, e);
    return Rg(a).then(f => Gg(f, c))
}

function Wg(a, b, c) {
    const d = [];
    return Vg(a, {
        query: b
    }, e => {
        if (!(void 0 !== c && d.length >= c)) return d.push(e.K()), e.continue()
    }).then(() => d)
}
var Ug = class {
    constructor(a) {
        this.h = a
    }
    count(a) {
        return V(this.h.count(a))
    }
    delete(a) {
        return Vg(this, {
            query: a
        }, b => b.delete().then(() => b.continue()))
    }
    get(a) {
        return V(this.h.get(a))
    }
    getAll(a, b) {
        return "getAll" in IDBIndex.prototype ? V(this.h.getAll(a, b)) : Wg(this, a, b)
    }
    getKey(a) {
        return V(this.h.getKey(a))
    }
    keyPath() {
        return this.h.keyPath
    }
    unique() {
        return this.h.unique
    }
};

function Rg(a) {
    return V(a).then(b => b ? new Xg(a, b) : null)
}
var Xg = class {
    constructor(a, b) {
        this.request = a;
        this.cursor = b
    }
    advance(a) {
        this.cursor.advance(a);
        return Rg(this.request)
    }
    continue (a) {
        this.cursor.continue(a);
        return Rg(this.request)
    }
    delete() {
        return V(this.cursor.delete()).then(() => {})
    }
    getKey() {
        return this.cursor.key
    }
    K() {
        return this.cursor.value
    }
    update(a) {
        return V(this.cursor.update(a))
    }
};

function Yg(a, b, c) {
    return new Promise((d, e) => {
        let f;
        f = void 0 !== b ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
        const g = c.Ea,
            h = c.blocking,
            k = c.Va,
            l = c.upgrade,
            m = c.closed;
        let n;
        const u = () => {
            n || (n = new Pg(f.result, {
                closed: m
            }));
            return n
        };
        f.addEventListener("upgradeneeded", p => {
            try {
                if (null === p.newVersion) throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
                if (null === f.transaction) throw Error("Invariant: transaction on IDbOpenDbRequest is null");
                p.dataLoss && "none" !== p.dataLoss && mg("IDB_DATA_CORRUPTED", {
                    reason: p.dataLossMessage || "unknown reason",
                    dbName: og(a)
                });
                const w = u(),
                    B = new Ig(f.transaction);
                l && l(w, D => p.oldVersion < D && p.newVersion >= D, B);
                B.done.catch(D => {
                    e(D)
                })
            } catch (w) {
                e(w)
            }
        });
        f.addEventListener("success", () => {
            const p = f.result;
            h && p.addEventListener("versionchange", () => {
                h(u())
            });
            p.addEventListener("close", () => {
                mg("IDB_UNEXPECTEDLY_CLOSED", {
                    dbName: og(a),
                    dbVersion: p.version
                });
                k && k()
            });
            d(u())
        });
        f.addEventListener("error", () => {
            e(f.error)
        });
        g && f.addEventListener("blocked", () => {
            g()
        })
    })
}

function Zg(a, b, c = {}) {
    return Yg(a, b, c)
}

function $g(a, b = {}) {
    return r(function*() {
        try {
            const c = self.indexedDB.deleteDatabase(a),
                d = b.Ea;
            d && c.addEventListener("blocked", () => {
                d()
            });
            yield Fg(c)
        } catch (c) {
            throw vg(c, a, "", -1);
        }
    })
};

function ah(a, b) {
    return new U("INCOMPATIBLE_DB_VERSION", {
        dbName: a.name,
        oldVersion: a.options.version,
        newVersion: b
    })
}

function bh(a, b) {
    if (!b) throw wg("openWithToken", og(a.name));
    return a.open()
}
var ch = class {
    constructor(a, b) {
        this.name = a;
        this.options = b;
        this.j = !0;
        this.m = this.l = 0
    }
    i(a, b, c = {}) {
        return Zg(a, b, c)
    }
    delete(a = {}) {
        return $g(this.name, a)
    }
    open() {
        if (!this.j) throw ah(this);
        if (this.h) return this.h;
        let a;
        const b = () => {
                this.h === a && (this.h = void 0)
            },
            c = {
                blocking: e => {
                    e.close()
                },
                closed: b,
                Va: b,
                upgrade: this.options.upgrade
            },
            d = () => {
                const e = this;
                return r(function*() {
                    var f, g = null != (f = Error().stack) ? f : "";
                    try {
                        const k = yield e.i(e.name, e.options.version, c);
                        var h = e.options;
                        f = [];
                        for (const l of Object.keys(h.M)) {
                            const {
                                L: m,
                                hc: n = Number.MAX_VALUE
                            } = h.M[l];
                            !(k.h.version >= m) || k.h.version >= n || k.h.objectStoreNames.contains(l) || f.push(l)
                        }
                        if (0 !== f.length) {
                            const l = Object.keys(e.options.M),
                                m = k.objectStoreNames();
                            if (e.m < zf("ytidb_reopen_db_retries", 0)) return e.m++, k.close(), lg(new U("DB_REOPENED_BY_MISSING_OBJECT_STORES", {
                                dbName: e.name,
                                expectedObjectStores: l,
                                foundObjectStores: m
                            })), d();
                            if (e.l < zf("ytidb_remake_db_retries", 1)) return e.l++, yield e.delete(), lg(new U("DB_DELETED_BY_MISSING_OBJECT_STORES", {
                                dbName: e.name,
                                expectedObjectStores: l,
                                foundObjectStores: m
                            })), d();
                            throw new sg(m, l);
                        }
                        return k
                    } catch (k) {
                        if (k instanceof DOMException ? "VersionError" === k.name : "DOMError" in self && k instanceof DOMError ? "VersionError" === k.name : k instanceof Object && "message" in k && "An attempt was made to open a database using a lower version than the existing version." ===
                            k.message) {
                            g = yield e.i(e.name, void 0, Object.assign({}, c, {
                                upgrade: void 0
                            }));
                            h = g.h.version;
                            if (void 0 !== e.options.version && h > e.options.version + 1) throw g.close(), e.j = !1, ah(e, h);
                            return g
                        }
                        b();
                        k instanceof Error && !T("ytidb_async_stack_killswitch") && (k.stack = `${k.stack}\n${g.substring(g.indexOf("\n")+1)}`);
                        let l;
                        throw vg(k, e.name, "", null != (l = e.options.version) ? l : -1);
                    }
                })
            };
        return this.h = a = d()
    }
};
const dh = new ch("YtIdbMeta", {
    M: {
        databases: {
            L: 1
        }
    },
    upgrade(a, b) {
        b(1) && Lg(a, "databases", {
            keyPath: "actualName"
        })
    }
});

function eh(a, b) {
    return r(function*() {
        return X(yield bh(dh, b), ["databases"], {
            B: !0,
            mode: "readwrite"
        }, c => {
            const d = c.objectStore("databases");
            return d.get(a.actualName).then(e => {
                if (e ? a.actualName !== e.actualName || a.publicName !== e.publicName || a.userIdentifier !== e.userIdentifier : 1) return V(d.h.put(a, void 0)).then(() => {})
            })
        })
    })
}

function fh(a, b) {
    return r(function*() {
        if (a) return (yield bh(dh, b)).delete("databases", a)
    })
};
let gh;
const hh = new class {
    constructor() {}
}(new class {
    constructor() {}
});

function ih() {
    return r(function*() {
        return !0
    })
}

function jh() {
    if (void 0 !== gh) return gh;
    kg = !0;
    return gh = ih().then(a => {
        kg = !1;
        return a
    })
}

function kh() {
    return v("ytglobal.idbToken_") || void 0
}

function lh() {
    const a = kh();
    return a ? Promise.resolve(a) : jh().then(b => {
        (b = b ? hh : void 0) && x("ytglobal.idbToken_", b);
        return b
    })
};
new Ld;

function mh(a) {
    try {
        ag();
        var b = !0
    } catch (c) {
        b = !1
    }
    if (!b) throw a = new U("AUTH_INVALID", {
        dbName: a
    }), lg(a), a;
    b = ag();
    return {
        actualName: `${a}:${b}`,
        publicName: a,
        userIdentifier: b
    }
}

function nh(a, b, c, d) {
    return r(function*() {
        var e, f = null != (e = Error().stack) ? e : "";
        e = yield lh();
        if (!e) throw e = wg("openDbImpl", a, b), T("ytidb_async_stack_killswitch") || (e.stack = `${e.stack}\n${f.substring(f.indexOf("\n")+1)}`), lg(e), e;
        ng(a);
        f = c ? {
            actualName: a,
            publicName: a,
            userIdentifier: void 0
        } : mh(a);
        try {
            return yield eh(f, e), yield Zg(f.actualName, b, d)
        } catch (g) {
            try {
                yield fh(f.actualName, e)
            } catch (h) {}
            throw g;
        }
    })
}

function oh(a, b, c = {}) {
    return nh(a, b, !1, c)
}

function ph(a, b, c = {}) {
    return nh(a, b, !0, c)
}

function qh(a, b = {}) {
    return r(function*() {
        const c = yield lh();
        if (c) {
            ng(a);
            var d = mh(a);
            yield $g(d.actualName, b);
            yield fh(d.actualName, c)
        }
    })
}

function rh(a, b = {}) {
    return r(function*() {
        const c = yield lh();
        c && (ng(a), yield $g(a, b), yield fh(a, c))
    })
};

function sh(a, b) {
    let c;
    return () => {
        c || (c = new th(a, b));
        return c
    }
}
var th = class extends ch {
    constructor(a, b) {
        super(a, b);
        this.options = b;
        ng(a)
    }
    i(a, b, c = {}) {
        return (this.options.X ? ph : oh)(a, b, Object.assign({}, c))
    }
    delete(a = {}) {
        return (this.options.X ? rh : qh)(this.name, a)
    }
};

function uh(a, b) {
    return sh(a, b)
};
var vh = uh("ytGcfConfig", {
    M: {
        coldConfigStore: {
            L: 1
        },
        hotConfigStore: {
            L: 1
        }
    },
    X: !1,
    upgrade(a, b) {
        b(1) && (Lg(a, "hotConfigStore", {
            keyPath: "key",
            autoIncrement: !0
        }).h.createIndex("hotTimestampIndex", "timestamp", {
            unique: !1
        }), Lg(a, "coldConfigStore", {
            keyPath: "key",
            autoIncrement: !0
        }).h.createIndex("coldTimestampIndex", "timestamp", {
            unique: !1
        }))
    },
    version: 1
});

function wh(a) {
    return bh(vh(), a)
}

function xh(a, b, c) {
    return r(function*() {
        const d = {
                config: a,
                hashData: b,
                timestamp: W()
            },
            e = yield wh(c);
        yield e.clear("hotConfigStore");
        return yield Ng(e, "hotConfigStore", d)
    })
}

function yh(a, b, c, d) {
    return r(function*() {
        const e = {
                config: a,
                hashData: b,
                configData: c,
                timestamp: W()
            },
            f = yield wh(d);
        yield f.clear("coldConfigStore");
        return yield Ng(f, "coldConfigStore", e)
    })
}

function zh(a) {
    return r(function*() {
        let b = void 0;
        yield X(yield wh(a), ["coldConfigStore"], {
            mode: "readwrite",
            B: !0
        }, c => Vg(c.objectStore("coldConfigStore").index("coldTimestampIndex"), {
            direction: "prev"
        }, d => {
            b = d.K()
        }));
        return b
    })
}

function Ah(a) {
    return r(function*() {
        let b = void 0;
        yield X(yield wh(a), ["hotConfigStore"], {
            mode: "readwrite",
            B: !0
        }, c => Vg(c.objectStore("hotConfigStore").index("hotTimestampIndex"), {
            direction: "prev"
        }, d => {
            b = d.K()
        }));
        return b
    })
};
var Bh = class extends Oa {
    constructor() {
        super(...arguments);
        this.h = []
    }
    O() {
        this.h.length = 0;
        super.O()
    }
};

function Ch(a, b, c) {
    return r(function*() {
        if (T("start_client_gcf")) {
            c && (a.j = c, x("yt.gcf.config.hotConfigGroup", a.j || null));
            a.hotHashData = b;
            x("yt.gcf.config.hotHashData", a.hotHashData || null);
            var d = kh();
            if (d) {
                if (!c) {
                    var e;
                    c = null == (e = yield Ah(d)) ? void 0 : e.config
                }
                yield xh(c, b, d)
            }
            if (c) {
                d = a.i;
                e = c;
                for (const f of d.h) f(e)
            }
        }
    })
}

function Dh(a, b, c) {
    return r(function*() {
        if (T("start_client_gcf")) {
            a.coldHashData = b;
            x("yt.gcf.config.coldHashData", a.coldHashData || null);
            const d = kh();
            if (d) {
                if (!c) {
                    let e;
                    c = null == (e = yield zh(d)) ? void 0 : e.config
                }
                c && (yield yh(c, b, c.configData, d))
            }
        }
    })
}
var Eh = class {
    constructor() {
        this.h = 0;
        this.i = new Bh
    }
};

function Fh() {
    return "INNERTUBE_API_KEY" in hf && "INNERTUBE_API_VERSION" in hf
}

function Gh() {
    return {
        innertubeApiKey: S("INNERTUBE_API_KEY"),
        innertubeApiVersion: S("INNERTUBE_API_VERSION"),
        Z: S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
        Ja: S("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
        Ka: S("INNERTUBE_CONTEXT_CLIENT_NAME", 1),
        innertubeContextClientVersion: S("INNERTUBE_CONTEXT_CLIENT_VERSION"),
        pa: S("INNERTUBE_CONTEXT_HL"),
        oa: S("INNERTUBE_CONTEXT_GL"),
        La: S("INNERTUBE_HOST_OVERRIDE") || "",
        Na: !!S("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
        Ma: !!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
        appInstallData: S("SERIALIZED_CLIENT_CONFIG_DATA")
    }
}

function Hh(a) {
    const b = {
        client: {
            hl: a.pa,
            gl: a.oa,
            clientName: a.Ja,
            clientVersion: a.innertubeContextClientVersion,
            configInfo: a.Z
        }
    };
    navigator.userAgent && (b.client.userAgent = String(navigator.userAgent));
    var c = t.devicePixelRatio;
    c && 1 != c && (b.client.screenDensityFloat = String(c));
    c = Af();
    "" !== c && (b.client.experimentsToken = c);
    c = Bf();
    0 < c.length && (b.request = {
        internalExperimentFlags: c
    });
    Ih(void 0, b);
    Jh(a, void 0, b);
    T("start_client_gcf") && Kh(void 0, b);
    S("DELEGATED_SESSION_ID") && !T("pageid_as_header_web") && (b.user = {
        onBehalfOfUser: S("DELEGATED_SESSION_ID")
    });
    !T("fill_delegate_context_in_gel_killswitch") && (a = S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) && (b.user = Object.assign({}, b.user, {
        serializedDelegationContext: a
    }));
    a = Object;
    c = a.assign;
    var d = b.client,
        e = S("DEVICE", "");
    const f = {};
    for (const [g, h] of Object.entries(vf(e))) {
        e = g;
        const k = h;
        "cbrand" === e ? f.deviceMake = k : "cmodel" === e ? f.deviceModel = k : "cbr" === e ? f.browserName = k : "cbrver" === e ? f.browserVersion = k : "cos" === e ? f.osName = k : "cosver" === e ? f.osVersion = k : "cplatform" ===
            e && (f.platform = k)
    }
    b.client = c.call(a, d, f);
    return b
}

function Lh(a) {
    const b = new he,
        c = new ae;
    J(c, 1, a.pa);
    J(c, 2, a.oa);
    G(c, 16, a.Ka);
    J(c, 17, a.innertubeContextClientVersion);
    if (a.Z) {
        var d = a.Z,
            e = new Zd;
        d.coldConfigData && J(e, 1, d.coldConfigData);
        d.appInstallData && J(e, 6, d.appInstallData);
        d.coldHashData && J(e, 3, d.coldHashData);
        d.hotHashData && J(e, 5, d.hotHashData);
        I(c, Zd, 62, e)
    }
    if ((d = t.devicePixelRatio) && 1 != d) {
        if (null != d && "number" !== typeof d) throw Error(`Value of float/double field must be a number|null|undefined, found ${typeof d}: ${d}`);
        G(c, 65, d)
    }
    d = Af();
    "" !==
    d && J(c, 54, d);
    d = Bf();
    if (0 < d.length) {
        e = new de;
        for (let f = 0; f < d.length; f++) {
            const g = new ce;
            J(g, 1, d[f].key);
            bd(g, 2, be, Ic(d[f].value));
            jd(e, 15, ce, g)
        }
        I(b, de, 5, e)
    }
    Ih(b);
    Jh(a, c);
    T("start_client_gcf") && Kh(c);
    S("DELEGATED_SESSION_ID") && !T("pageid_as_header_web") && (a = new ge, J(a, 3, S("DELEGATED_SESSION_ID")));
    !T("fill_delegate_context_in_gel_killswitch") && (a = S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) && (d = ed(b, ge, 3) || new ge, a = J(d, 18, a), I(b, ge, 3, a));
    a = S("DEVICE", "");
    for (const [f, g] of Object.entries(vf(a))) a =
        f, d = g, "cbrand" === a ? J(c, 12, d) : "cmodel" === a ? J(c, 13, d) : "cbr" === a ? J(c, 87, d) : "cbrver" === a ? J(c, 88, d) : "cos" === a ? J(c, 18, d) : "cosver" === a ? J(c, 19, d) : "cplatform" === a && G(c, 42, $f(d));
    b.j(c);
    return b
}

function Ih(a, b) {
    const c = v("yt.embedded_player.embed_url");
    c && (a ? (b = ed(a, ee, 7) || new ee, J(b, 4, c), I(a, ee, 7, b)) : b && (b.thirdParty = {
        embedUrl: c
    }))
}

function Jh(a, b, c) {
    if (a.appInstallData)
        if (b) {
            let d;
            c = null != (d = ed(b, Zd, 62)) ? d : new Zd;
            J(c, 6, a.appInstallData);
            I(b, Zd, 62, c)
        } else c && (c.client.configInfo = c.client.configInfo || {}, c.client.configInfo.appInstallData = a.appInstallData)
}

function Mh(a, b, c = {}) {
    let d = {};
    S("EOM_VISITOR_DATA") ? d = {
        "X-Goog-EOM-Visitor-Id": S("EOM_VISITOR_DATA")
    } : d = {
        "X-Goog-Visitor-Id": c.visitorData || S("VISITOR_DATA", "")
    };
    if (b && b.includes("www.youtube-nocookie.com")) return d;
    b = c.Rb || S("AUTHORIZATION");
    b || (a ? b = `Bearer ${v("gapi.auth.getToken")().Qb}` : (a = Yf(Wf()), T("pageid_as_header_web") || delete a["X-Goog-PageId"], d = Object.assign({}, d, a)));
    b && (d.Authorization = b);
    return d
}

function Kh(a, b) {
    if (!Eh.h) {
        var c = new Eh;
        Eh.h = c
    }
    c = Eh.h;
    var d = W() - c.h;
    if (0 !== c.h && d < zf("send_config_hash_timer")) c = void 0;
    else {
        d = v("yt.gcf.config.coldConfigData");
        var e = v("yt.gcf.config.hotHashData"),
            f = v("yt.gcf.config.coldHashData");
        d && e && f && (c.h = W());
        c = {
            coldConfigData: d,
            hotHashData: e,
            coldHashData: f
        }
    }
    if (e = c)
        if (c = e.coldConfigData, d = e.coldHashData, e = e.hotHashData, c && d && e)
            if (a) {
                let g;
                b = null != (g = ed(a, Zd, 62)) ? g : new Zd;
                J(b, 1, c);
                J(b, 3, d);
                J(b, 5, e);
                I(a, Zd, 62, b)
            } else b && (b.client.configInfo = b.client.configInfo || {}, b.client.configInfo.coldConfigData = c, b.client.configInfo.coldHashData = d, b.client.configInfo.hotHashData = e)
};

function Nh(a) {
    this.version = 1;
    this.args = a
};

function Oh() {
    var a = Ph;
    this.topic = "screen-created";
    this.h = a
}
Oh.prototype.toString = function() {
    return this.topic
};
const Qh = v("ytPubsub2Pubsub2Instance") || new M;
M.prototype.subscribe = M.prototype.za;
M.prototype.unsubscribeByKey = M.prototype.fa;
M.prototype.publish = M.prototype.da;
M.prototype.clear = M.prototype.clear;
x("ytPubsub2Pubsub2Instance", Qh);
const Rh = v("ytPubsub2Pubsub2SubscribedKeys") || {};
x("ytPubsub2Pubsub2SubscribedKeys", Rh);
const Sh = v("ytPubsub2Pubsub2TopicToKeys") || {};
x("ytPubsub2Pubsub2TopicToKeys", Sh);
const Th = v("ytPubsub2Pubsub2IsAsync") || {};
x("ytPubsub2Pubsub2IsAsync", Th);
x("ytPubsub2Pubsub2SkipSubKey", null);

function Uh(a, b) {
    const c = Vh();
    c && c.publish.call(c, a.toString(), a, b)
}

function Wh(a) {
    var b = Xh;
    const c = Vh();
    if (!c) return 0;
    const d = c.subscribe(b.toString(), (e, f) => {
        var g = v("ytPubsub2Pubsub2SkipSubKey");
        g && g == d || (g = () => {
            if (Rh[d]) try {
                if (f && b instanceof Oh && b != e) try {
                    var h = b.h,
                        k = f;
                    if (!k.args || !k.version) throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");
                    try {
                        if (!h.ta) {
                            const p = new h;
                            h.ta = p.version
                        }
                        var l = h.ta
                    } catch (p) {}
                    if (!l || k.version != l) throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");
                    try {
                        l = Reflect;
                        var m = l.construct; {
                            var n = k.args;
                            const p = n.length;
                            if (0 < p) {
                                const w = Array(p);
                                for (k = 0; k < p; k++) w[k] = n[k];
                                var u = w
                            } else u = []
                        }
                        f = m.call(l, h, u)
                    } catch (p) {
                        throw p.message = "yt.pubsub2.Data.deserialize(): " + p.message, p;
                    }
                } catch (p) {
                    throw p.message = "yt.pubsub2.pubsub2 cross-binary conversion error for " + b.toString() + ": " + p.message, p;
                }
                a.call(window, f)
            } catch (p) { of (p)
            }
        }, Th[b.toString()] ? v("yt.scheduler.instance") ? hg.h(g) : Cf(g, 0) : g())
    });
    Rh[d] = !0;
    Sh[b.toString()] || (Sh[b.toString()] = []);
    Sh[b.toString()].push(d);
    return d
}

function Yh() {
    var a = Zh;
    const b = Wh(function(c) {
        a.apply(void 0, arguments);
        $h(b)
    });
    return b
}

function $h(a) {
    const b = Vh();
    b && ("number" === typeof a && (a = [a]), pa(a, c => {
        b.unsubscribeByKey(c);
        delete Rh[c]
    }))
}

function Vh() {
    return v("ytPubsub2Pubsub2Instance")
};
var ai = {
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
const bi = ["client.name", "client.version"];

function ci(a) {
    if (!a.errorMetadata || !a.errorMetadata.kvPairs) return a;
    a.errorMetadata.kvPairs = a.errorMetadata.kvPairs.filter(b => b.key ? bi.includes(b.key) : !1);
    return a
};
var di = uh("ServiceWorkerLogsDatabase", {
    M: {
        SWHealthLog: {
            L: 1
        }
    },
    X: !0,
    upgrade: (a, b) => {
        b(1) && Lg(a, "SWHealthLog", {
            keyPath: "id",
            autoIncrement: !0
        }).h.createIndex("swHealthNewRequest", ["interface", "timestamp"], {
            unique: !1
        })
    },
    version: 1
});

function ei(a, b) {
    return r(function*() {
        var c = yield bh(di(), b), d = S("INNERTUBE_CONTEXT_CLIENT_NAME", 0);
        const e = Object.assign({}, a);
        e.clientError && (e.clientError = ci(e.clientError));
        e.interface = d;
        return Ng(c, "SWHealthLog", e)
    })
};
x("ytNetworklessLoggingInitializationOptions", t.ytNetworklessLoggingInitializationOptions || {
    isNwlInitialized: !1
});

function fi(a, b, c, d) {
    !S("VISITOR_DATA") && "visitor_id" !== b && .01 > Math.random() && pf(new Ue("Missing VISITOR_DATA when sending innertube request.", b, c, d));
    if (!a.isReady()) throw a = new Ue("innertube xhrclient not ready", b, c, d), of (a), a;
    c = {
        headers: d.headers || {},
        method: "POST",
        postParams: c,
        postBody: d.postBody,
        postBodyFormat: d.postBodyFormat || "JSON",
        onTimeout: () => {
            d.onTimeout()
        },
        onFetchTimeout: d.onTimeout,
        onSuccess: (k, l) => {
            if (d.onSuccess) d.onSuccess(l)
        },
        onFetchSuccess: k => {
            if (d.onSuccess) d.onSuccess(k)
        },
        onError: (k, l) => {
            if (d.onError) d.onError(l)
        },
        onFetchError: k => {
            if (d.onError) d.onError(k)
        },
        timeout: d.timeout,
        withCredentials: !0,
        compress: d.compress
    };
    c.headers["Content-Type"] || (c.headers["Content-Type"] = "application/json");
    let e = "";
    var f = a.config_.La;
    f && (e = f);
    var g = a.config_.Na || !1;
    f = Mh(g, e, d);
    Object.assign(c.headers, f);
    (f = c.headers.Authorization) && !e && g && (c.headers["x-origin"] = window.location.origin);
    b = `/${"youtubei"}/${a.config_.innertubeApiVersion}/${b}`;
    g = {
        alt: "json"
    };
    let h = a.config_.Ma && f;
    h = h && f.startsWith("Bearer");
    h || (g.key = a.config_.innertubeApiKey);
    a = wf(`${e}${b}`, g || {}, !0);
    try {
        Gf(a,
            c)
    } catch (k) {
        if ("InvalidAccessError" == k.name) pf(Error("An extension is blocking network request."));
        else throw k;
    }
}
class gi {
    constructor(a) {
        this.config_ = null;
        a ? this.config_ = a : Fh() && (this.config_ = Gh())
    }
    isReady() {
        !this.config_ && Fh() && (this.config_ = Gh());
        return !!this.config_
    }
};
let hi = 0;
x("ytDomDomGetNextId", v("ytDomDomGetNextId") || (() => ++hi));
x("ytEventsEventsListeners", t.ytEventsEventsListeners || {});
x("ytEventsEventsCounter", t.ytEventsEventsCounter || {
    count: 0
});

function ii() {
    const a = v("_lact", window);
    return null == a ? -1 : Math.max(Date.now() - a, 0)
};
t.ytPubsubPubsubInstance || new M;
var ji = Symbol("injectionDeps"),
    ki = class {
        constructor() {
            this.name = "INNERTUBE_TRANSPORT_TOKEN"
        }
        toString() {
            return `InjectionToken(${this.name})`
        }
    },
    li = class {
        constructor() {
            this.key = Eh
        }
    };

function mi(a) {
    var b = {
        Qa: ni,
        sa: oi.h
    };
    a.i.set(b.Qa, b)
}

function pi(a, b, c, d = !1) {
    if (-1 < c.indexOf(b)) throw Error(`Deps cycle for: ${b}`);
    if (a.h.has(b)) return a.h.get(b);
    if (!a.i.has(b)) {
        if (d) return;
        throw Error(`No provider for: ${b}`);
    }
    d = a.i.get(b);
    c.push(b);
    if (void 0 !== d.sa) var e = d.sa;
    else if (d.ab) e = d[ji] ? qi(a, d[ji], c) : [], e = d.ab(...e);
    else if (d.Za) {
        e = d.Za;
        const f = e[ji] ? qi(a, e[ji], c) : [];
        e = new e(...f)
    } else throw Error(`Could not resolve providers for: ${b}`);
    c.pop();
    d.pc || a.h.set(b, e);
    return e
}

function qi(a, b, c) {
    return b ? b.map(d => d instanceof li ? pi(a, d.key, c, !0) : pi(a, d, c)) : []
}
var ri = class {
    constructor() {
        this.i = new Map;
        this.h = new Map
    }
    resolve(a) {
        return a instanceof li ? pi(this, a.key, [], !0) : pi(this, a, [])
    }
};
let si;

function ti() {
    si || (si = new ri);
    return si
};
let ui = window;

function vi() {
    let a, b;
    return "h5vcc" in ui && (null == (a = ui.h5vcc.traceEvent) ? 0 : a.traceBegin) && (null == (b = ui.h5vcc.traceEvent) ? 0 : b.traceEnd) ? 1 : "performance" in ui && ui.performance.mark && ui.performance.measure ? 2 : 0
}

function wi(a) {
    const b = vi();
    switch (b) {
        case 1:
            ui.h5vcc.traceEvent.traceBegin("YTLR", a);
            break;
        case 2:
            ui.performance.mark(`${a}-start`);
            break;
        case 0:
            break;
        default:
            Ad(b, "unknown trace type")
    }
}

function xi(a) {
    var b = vi();
    switch (b) {
        case 1:
            ui.h5vcc.traceEvent.traceEnd("YTLR", a);
            break;
        case 2:
            b = `${a}-start`;
            const c = `${a}-end`;
            ui.performance.mark(c);
            ui.performance.measure(a, b, c);
            break;
        case 0:
            break;
        default:
            Ad(b, "unknown trace type")
    }
};
var yi = T("web_enable_lifecycle_monitoring") && 0 !== vi(),
    zi = T("web_enable_lifecycle_monitoring");

function Ai(a) {
    let b;
    return null != (b = a.priority) ? b : 0
}

function Bi(a) {
    var b = Array.from(a.h.keys()).sort((c, d) => Ai(a.h[d]) - Ai(a.h[c]));
    for (const c of b) b = a.h[c], void 0 === b.jobId || b.W || (a.scheduler.T(b.jobId), cg(b.aa, 10))
}
var Ci = class {
    constructor(a) {
        this.scheduler = fg();
        this.i = new Ld;
        this.h = a;
        for (let b = 0; b < this.h.length; b++) {
            const c = this.h[b];
            a = () => {
                c.aa();
                this.h[b].W = !0;
                this.h.every(e => !0 === e.W) && this.i.resolve()
            };
            const d = cg(a, Ai(c));
            this.h[b] = Object.assign({}, c, {
                aa: a,
                jobId: d
            })
        }
    }
    cancel() {
        for (const a of this.h) void 0 === a.jobId || a.W || this.scheduler.T(a.jobId), a.W = !0;
        this.i.resolve()
    }
};

function Di(a, b, c) {
    zi && console.groupCollapsed && console.groupEnd && (console.groupCollapsed(`[${a.constructor.name}] '${a.state}' to '${b}'`), console.log("with message: ", c), console.groupEnd())
}

function Ei(a, b) {
    const c = b.filter(e => 10 === Fi(a, e)),
        d = b.filter(e => 10 !== Fi(a, e));
    return a.l.nc ? (...e) => r(function*() {
        yield Gi(c, ...e);
        Hi(a, d, ...e)
    }) : (...e) => {
        Ii(c, ...e);
        Hi(a, d, ...e)
    }
}

function Fi(a, b) {
    let c, d;
    return null != (d = null != (c = a.j) ? c : b.priority) ? d : 0
}

function Gi(a, ...b) {
    return r(function*() {
        fg();
        for (const c of a) {
            let d;
            dg(() => {
                Ji(c.name);
                const e = c.callback(...b);
                "function" === typeof(null == e ? void 0 : e.then) ? d = e.then(() => {
                    Ki(c.name)
                }): Ki(c.name)
            });
            d && (yield d)
        }
    })
}

function Hi(a, b, ...c) {
    b = b.map(d => ({
        aa: () => {
            Ji(d.name);
            d.callback(...c);
            Ki(d.name)
        },
        priority: Fi(a, d)
    }));
    b.length && (a.i = new Ci(b))
}

function Ii(a, ...b) {
    fg();
    for (const c of a) dg(() => {
        Ji(c.name);
        c.callback(...b);
        Ki(c.name)
    })
}

function Ji(a) {
    yi && a && wi(a)
}

function Ki(a) {
    yi && a && xi(a)
}
var Li = class {
    constructor() {
        this.state = "none";
        this.plugins = [];
        this.j = void 0;
        this.l = {};
        yi && wi(this.state)
    }
    get currentState() {
        return this.state
    }
    install(a) {
        this.plugins.push(a);
        return this
    }
    uninstall(...a) {
        a.forEach(b => {
            b = this.plugins.indexOf(b); - 1 < b && this.plugins.splice(b, 1)
        })
    }
    transition(a, b) {
        yi && xi(this.state);
        var c = this.transitions.find(d => Array.isArray(d.from) ? d.from.find(e => e === this.state && d.R === a) : d.from === this.state && d.R === a);
        if (c) {
            this.i && (Bi(this.i), this.i = void 0);
            Di(this, a, b);
            this.state = a;
            yi && wi(this.state);
            c = c.action.bind(this);
            const d = this.plugins.filter(e => e[a]).map(e => e[a]);
            c(Ei(this, d), b)
        } else throw Error(`no transition specified from ${this.state} to ${a}`);
    }
};

function Mi() {
    Ni || (Ni = new Oi);
    return Ni
}
var Oi = class extends Li {
        constructor() {
            super();
            this.h = null;
            this.j = 10;
            this.transitions = [{
                    from: "none",
                    R: "application_navigating",
                    action: this.m
                }, {
                    from: "application_navigating",
                    R: "none",
                    action: this.s
                }, {
                    from: "application_navigating",
                    R: "application_navigating",
                    action: () => {}
                },
                {
                    from: "none",
                    R: "none",
                    action: () => {}
                }
            ]
        }
        m(a, b) {
            this.h = bg(() => {
                "application_navigating" === this.currentState && this.transition("none")
            }, 5E3);
            a(null == b ? void 0 : b.event)
        }
        s(a, b) {
            this.h && (hg.T(this.h), this.h = null);
            a(null == b ? void 0 : b.event)
        }
    },
    Ni;

function Pi(a, b) {
    const c = Qi(b);
    if (a.h[c]) return a.h[c];
    const d = Object.keys(a.store) || [];
    if (1 >= d.length && Qi(b) === d[0]) return d;
    const e = [];
    for (let g = 0; g < d.length; g++) {
        const h = d[g].split("/");
        if (Ri(b.auth, h[0])) {
            var f = b.isJspb;
            Ri(void 0 === f ? "undefined" : f ? "true" : "false", h[1]) && Ri(b.cttAuthInfo, h[2]) && (f = b.tier, f = void 0 === f ? "undefined" : JSON.stringify(f), Ri(f, h[3]) && e.push(d[g]))
        }
    }
    return a.h[c] = e
}

function Ri(a, b) {
    return void 0 === a || "undefined" === a ? !0 : a === b
}
var Si = class {
    constructor() {
        this.store = {};
        this.h = {}
    }
    storePayload(a, b) {
        a = Qi(a);
        this.store[a] ? this.store[a].push(b) : (this.h = {}, this.store[a] = [b]);
        return a
    }
    smartExtractMatchingEntries(a) {
        if (!a.keys.length) return [];
        const b = Pi(this, a.keys.splice(0, 1)[0]),
            c = [];
        for (let d = 0; d < b.length; d++) this.store[b[d]] && a.sizeLimit && (this.store[b[d]].length <= a.sizeLimit ? (c.push(...this.store[b[d]]), delete this.store[b[d]]) : c.push(...this.store[b[d]].splice(0, a.sizeLimit)));
        (null == a ? 0 : a.sizeLimit) && c.length < (null == a ? void 0 :
            a.sizeLimit) && (a.sizeLimit -= c.length, c.push(...this.smartExtractMatchingEntries(a)));
        return c
    }
    extractMatchingEntries(a) {
        a = Pi(this, a);
        const b = [];
        for (let c = 0; c < a.length; c++) this.store[a[c]] && (b.push(...this.store[a[c]]), delete this.store[a[c]]);
        return b
    }
    getSequenceCount(a) {
        a = Pi(this, a);
        let b = 0;
        for (let c = 0; c < a.length; c++) {
            let d;
            b += (null == (d = this.store[a[c]]) ? void 0 : d.length) || 0
        }
        return b
    }
};
Si.prototype.getSequenceCount = Si.prototype.getSequenceCount;
Si.prototype.extractMatchingEntries = Si.prototype.extractMatchingEntries;
Si.prototype.smartExtractMatchingEntries = Si.prototype.smartExtractMatchingEntries;
Si.prototype.storePayload = Si.prototype.storePayload;

function Qi(a) {
    return [void 0 === a.auth ? "undefined" : a.auth, void 0 === a.isJspb ? "undefined" : a.isJspb, void 0 === a.cttAuthInfo ? "undefined" : a.cttAuthInfo, void 0 === a.tier ? "undefined" : a.tier].join("/")
};

function Ti(a, b) {
    if (a) return a[b.name]
};
const Ui = zf("initial_gel_batch_timeout", 2E3),
    Vi = zf("gel_queue_timeout_max_ms", 6E4),
    Wi = Math.pow(2, 16) - 1,
    Xi = zf("gel_min_batch_size", 5);
let Yi = void 0;
class Zi {
    constructor() {
        this.l = this.h = this.i = 0;
        this.j = !1
    }
}
const $i = new Zi,
    aj = new Zi,
    bj = new Zi,
    cj = new Zi;
let dj, ej = !0;
const fj = t.ytLoggingTransportTokensToCttTargetIds_ || {},
    gj = t.ytLoggingTransportTokensToJspbCttTargetIds_ || {};
let hj = {};

function ij() {
    let a = v("yt.logging.ims");
    a || (a = new Si, x("yt.logging.ims", a));
    return a
}

function jj(a, b) {
    if ("log_event" === a.endpoint) {
        var c = kj(a),
            d = lj(a.payload) || "",
            e = mj(d);
        400 === e ? nj(a, b) : (hj[c] = !0, e = {
            cttAuthInfo: c,
            isJspb: !1,
            tier: e
        }, ij().storePayload(e, a.payload), oj(b, c, !1, e, pj(d)))
    }
}

function qj(a, b, c) {
    if ("log_event" === b.endpoint) {
        var d = kj(b, !0),
            e = mj(a);
        400 === e ? rj(a, b, c) : (hj[d] = !0, e = {
            cttAuthInfo: d,
            isJspb: !0,
            tier: e
        }, ij().storePayload(e, b.payload.toJSON()), oj(c, d, !0, e, pj(a)))
    }
}

function oj(a, b, c = !1, d, e = !1) {
    a && (Yi = new a);
    a = zf("tvhtml5_logging_max_batch_ads_fork") || zf("web_logging_max_batch") || 100;
    const f = W(),
        g = sj(c, d.tier),
        h = g.l;
    e && (g.j = !0);
    e = 0;
    d && (e = ij().getSequenceCount(d));
    const k = () => {
        tj({
            writeThenSend: !0
        }, T("flush_only_full_queue") ? b : void 0, c, d.tier)
    };
    1E3 <= e ? k() : e >= a ? dj || (dj = uj(() => {
        k();
        dj = void 0
    }, 0)) : 10 <= f - h && (vj(c, d.tier), g.l = f)
}

function nj(a, b) {
    if ("log_event" === a.endpoint) {
        var c = kj(a),
            d = new Map;
        d.set(c, [a.payload]);
        var e = lj(a.payload) || "";
        b && (Yi = new b);
        return new z((f, g) => {
            Yi && Yi.isReady() ? wj(d, Yi, f, g, {
                bypassNetworkless: !0
            }, !0, pj(e)) : f()
        })
    }
}

function rj(a, b, c) {
    if ("log_event" === b.endpoint) {
        var d = kj(b, !0),
            e = new Map;
        e.set(d, [b.payload.toJSON()]);
        c && (Yi = new c);
        return new z(f => {
            Yi && Yi.isReady() ? xj(e, Yi, f, {
                bypassNetworkless: !0
            }, !0, pj(a)) : f()
        })
    }
}

function kj(a, b = !1) {
    var c = "";
    if (a.dangerousLogToVisitorSession) c = "visitorOnlyApprovedKey";
    else if (a.cttAuthInfo) {
        if (b) {
            b = a.cttAuthInfo.token;
            c = a.cttAuthInfo;
            const d = new Me;
            c.videoId ? d.setVideoId(c.videoId) : c.playlistId && bd(d, 2, Le, Ic(c.playlistId));
            gj[b] = d
        } else b = a.cttAuthInfo, c = {}, b.videoId ? c.videoId = b.videoId : b.playlistId && (c.playlistId = b.playlistId), fj[a.cttAuthInfo.token] = c;
        c = a.cttAuthInfo.token
    }
    return c
}

function tj(a = {}, b, c = !1, d) {
    new z((e, f) => {
        const g = sj(c, d),
            h = g.j;
        g.j = !1;
        yj(g.i);
        yj(g.h);
        g.h = 0;
        Yi && Yi.isReady() ? void 0 === d && T("enable_web_tiered_gel") ? zj(e, f, a, b, c, 300, h) : zj(e, f, a, b, c, d, h) : (vj(c, d), e())
    })
}

function zj(a, b, c = {}, d, e = !1, f = 200, g = !1) {
    var h = Yi,
        k = new Map;
    const l = new Map,
        m = {
            isJspb: e,
            cttAuthInfo: d,
            tier: f
        },
        n = {
            isJspb: e,
            cttAuthInfo: d
        };
    if (void 0 !== d) e ? (b = T("enable_web_tiered_gel") ? ij().smartExtractMatchingEntries({
        keys: [m, n],
        sizeLimit: 1E3
    }) : ij().extractMatchingEntries(n), k.set(d, b), xj(k, h, a, c, !1, g)) : (k = T("enable_web_tiered_gel") ? ij().smartExtractMatchingEntries({
        keys: [m, n],
        sizeLimit: 1E3
    }) : ij().extractMatchingEntries(n), l.set(d, k), wj(l, h, a, b, c, !1, g));
    else if (e) {
        for (const u of Object.keys(hj)) b = T("enable_web_tiered_gel") ?
            ij().smartExtractMatchingEntries({
                keys: [m, n],
                sizeLimit: 1E3
            }) : ij().extractMatchingEntries({
                isJspb: !0,
                cttAuthInfo: u
            }), 0 < b.length && k.set(u, b), (T("web_fp_via_jspb_and_json") && c.writeThenSend || !T("web_fp_via_jspb_and_json")) && delete hj[u];
        xj(k, h, a, c, !1, g)
    } else {
        for (const u of Object.keys(hj)) d = T("enable_web_tiered_gel") ? ij().smartExtractMatchingEntries({
            keys: [{
                isJspb: !1,
                cttAuthInfo: u,
                tier: f
            }, {
                isJspb: !1,
                cttAuthInfo: u
            }],
            sizeLimit: 1E3
        }) : ij().extractMatchingEntries({
            isJspb: !1,
            cttAuthInfo: u
        }), 0 < d.length && l.set(u,
            d), (T("web_fp_via_jspb_and_json") && c.writeThenSend || !T("web_fp_via_jspb_and_json")) && delete hj[u];
        wj(l, h, a, b, c, !1, g)
    }
}

function vj(a = !1, b = 200) {
    const c = () => {
            tj({
                writeThenSend: !0
            }, void 0, a, b)
        },
        d = sj(a, b);
    var e = d === cj || d === bj ? 5E3 : Vi;
    T("web_gel_timeout_cap") && !d.h && (e = uj(() => {
        c()
    }, e), d.h = e);
    yj(d.i);
    e = S("LOGGING_BATCH_TIMEOUT", zf("web_gel_debounce_ms", 1E4));
    T("shorten_initial_gel_batch_timeout") && ej && (e = Ui);
    e = uj(() => {
        0 < zf("gel_min_batch_size") ? ij().getSequenceCount({
            cttAuthInfo: void 0,
            isJspb: a,
            tier: b
        }) >= Xi && c() : c()
    }, e);
    d.i = e
}

function wj(a, b, c, d, e = {}, f, g) {
    const h = Math.round(W());
    let k = a.size;
    const l = Aj(g);
    for (const [m, n] of a) {
        a = m;
        g = n;
        const u = ua({
            context: Hh(b.config_ || Gh())
        });
        if (!ia(g) && !T("throw_err_when_logevent_malformed_killswitch")) {
            d();
            break
        }
        u.events = g;
        (g = fj[a]) && Bj(u, a, g);
        delete fj[a];
        const p = "visitorOnlyApprovedKey" === a;
        Cj(u, h, p);
        Dj(e);
        const w = P => {
            T("start_client_gcf") && hg.h(() => r(function*() {
                yield Ej(P)
            }));
            k--;
            k || c()
        };
        let B = 0;
        const D = () => {
            B++;
            if (e.bypassNetworkless && 1 === B) try {
                fi(b, l, u, Fj({
                    writeThenSend: !0
                }, p, w, D, f)), ej = !1
            } catch (P) { of (P), d()
            }
            k--;
            k || c()
        };
        try {
            fi(b, l, u, Fj(e, p, w, D, f)), ej = !1
        } catch (P) { of (P), d()
        }
    }
}

function xj(a, b, c, d = {}, e, f) {
    const g = Math.round(W());
    let h = a.size;
    f = Aj(f);
    var k = new Map([...a]);
    for (const [u] of k) {
        var l = u,
            m = a.get(l);
        k = new Ne;
        const p = Lh(b.config_ || Gh());
        I(k, he, 1, p);
        m = m ? Gj(m) : [];
        for (const w of m) jd(k, 3, O, w);
        (m = gj[l]) && Hj(k, l, m);
        delete gj[l];
        l = "visitorOnlyApprovedKey" === l;
        Ij(k, g, l);
        Dj(d);
        m = {
            startTime: W(),
            ticks: {},
            infos: {}
        };
        a: {
            xc = !0;
            try {
                var n = JSON.stringify(k.toJSON(), Pc);
                break a
            } finally {
                xc = !1
            }
            n = void 0
        }
        k = n;
        m.ticks.geljspc = W();
        T("log_jspb_serialize_latency") && .001 > Math.random() && Uh("meta_logging_csi_event", {
            timerName: "gel_jspb_serialize",
            qc: m
        });
        l = Fj(d, l, w => {
            T("start_client_gcf") && hg.h(() => r(function*() {
                yield Ej(w)
            }));
            h--;
            h || c()
        }, () => {
            h--;
            h || c()
        }, e);
        l.headers["Content-Type"] = "application/json+protobuf";
        l.postBodyFormat = "JSPB";
        l.postBody = k;
        fi(b, f, "", l);
        ej = !1
    }
}

function Dj(a) {
    T("always_send_and_write") && (a.writeThenSend = !1)
}

function Fj(a, b, c, d, e) {
    a = {
        retry: !0,
        onSuccess: c,
        onError: d,
        ac: a,
        dangerousLogToVisitorSession: b,
        Tb: !!e,
        headers: {},
        postBodyFormat: "",
        postBody: "",
        compress: T("compress_gel") || T("compress_gel_lr")
    };
    Jj() && (a.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round(W())));
    return a
}

function Cj(a, b, c) {
    Jj() || (a.requestTimeMs = String(b));
    T("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
    !c && (b = S("EVENT_ID")) && (c = Kj(), a.serializedClientEventId = {
        serializedEventId: b,
        clientCounter: String(c)
    })
}

function Ij(a, b, c) {
    Jj() || ld(a, 2, b);
    if (!c && (b = S("EVENT_ID"))) {
        c = Kj();
        const d = new Ke;
        J(d, 1, b);
        ld(d, 2, c);
        I(a, Ke, 5, d)
    }
}

function Kj() {
    let a = S("BATCH_CLIENT_COUNTER") || 0;
    a || (a = Math.floor(Math.random() * Wi / 2));
    a++;
    a > Wi && (a = 1);
    R("BATCH_CLIENT_COUNTER", a);
    return a
}

function Bj(a, b, c) {
    let d;
    if (c.videoId) d = "VIDEO";
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

function Hj(a, b, c) {
    let d;
    if (md(c, dd(c, Le, 1))) d = 1;
    else if (c.getPlaylistId()) d = 2;
    else return;
    I(a, Me, 4, c);
    a = ed(a, he, 1) || new he;
    c = ed(a, ge, 3) || new ge;
    const e = new fe;
    J(e, 2, b);
    G(e, 1, d);
    jd(c, 12, fe, e);
    I(a, ge, 3, c)
}

function Gj(a) {
    const b = [];
    for (let c = 0; c < a.length; c++) try {
        b.push(new O(a[c]))
    } catch (d) { of (new Ue("Transport failed to deserialize " + String(a[c])))
    }
    return b
}

function Jj() {
    return T("use_request_time_ms_header") || T("lr_use_request_time_ms_header")
}

function uj(a, b) {
    return T("transport_use_scheduler") ? T("logging_avoid_blocking_during_navigation") || T("lr_logging_avoid_blocking_during_navigation") ? bg(() => {
        "none" === Mi().currentState ? a() : Mi().install({
            none: {
                callback: a
            }
        })
    }, b) : bg(a, b) : Cf(a, b)
}

function yj(a) {
    T("transport_use_scheduler") ? hg.T(a) : window.clearTimeout(a)
}

function Ej(a) {
    return r(function*() {
        var b, c = null == a ? void 0 : null == (b = a.responseContext) ? void 0 : b.globalConfigGroup;
        b = Ti(c, Ud);
        const d = null == c ? void 0 : c.hotHashData,
            e = Ti(c, Td);
        c = null == c ? void 0 : c.coldHashData;
        const f = ti().resolve(new li);
        f && (d && (b ? yield Ch(f, d, b): yield Ch(f, d)), c && (e ? yield Dh(f, c, e): yield Dh(f, c)))
    })
}

function sj(a, b = 200) {
    return a ? 300 === b ? cj : aj : 300 === b ? bj : $i
}

function mj(a) {
    if (T("enable_web_tiered_gel")) {
        a = ai[a || ""];
        var b, c;
        if (null == ti().resolve(new li)) var d = void 0;
        else {
            var e = null != (d = v("yt.gcf.config.hotConfigGroup")) ? d : null;
            d = null == e ? void 0 : null == (b = e.loggingHotConfig) ? void 0 : null == (c = b.eventLoggingConfig) ? void 0 : c.payloadPolicies
        }
        if (b = d)
            for (c = 0; c < b.length; c++)
                if (b[c].payloadNumber === a) return Lj(b[c].tier);
        return 200
    }
}

function lj(a) {
    a = Object.keys(a);
    for (const b of a)
        if (ai[b]) return b
}

function Lj(a) {
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

function pj(a) {
    return "gelDebuggingEvent" === a
}

function Aj(a = !1) {
    return a && T("vss_through_gel_video_stats") ? "video_stats" : "log_event"
};
const Mj = t.ytLoggingGelSequenceIdObj_ || {};

function Nj(a, b, c, d = {}) {
    const e = {},
        f = Math.round(d.timestamp || W());
    e.eventTimeMs = f < Number.MAX_SAFE_INTEGER ? f : 0;
    e[a] = b;
    a = ii();
    e.context = {
        lastActivityMs: String(d.timestamp || !isFinite(a) ? -1 : a)
    };
    d.sequenceGroup && !T("web_gel_sequence_info_killswitch") && (a = e.context, b = d.sequenceGroup, b = {
        index: Oj(b),
        groupKey: b
    }, a.sequence = b, d.endOfSequence && delete Mj[d.sequenceGroup]);
    (d.sendIsolatedPayload ? nj : jj)({
        endpoint: "log_event",
        payload: e,
        cttAuthInfo: d.cttAuthInfo,
        dangerousLogToVisitorSession: d.dangerousLogToVisitorSession
    }, c)
}

function Pj(a = !1) {
    tj(void 0, void 0, a)
}

function Oj(a) {
    Mj[a] = a in Mj ? Mj[a] + 1 : 0;
    return Mj[a]
};
let Qj = gi,
    Rj = [];

function Y(a, b, c = {}) {
    let d = Qj;
    S("ytLoggingEventsDefaultDisabled", !1) && Qj === gi && (d = null);
    T("web_all_payloads_via_jspb") && !c.timestamp && (c.lact = ii(), c.timestamp = W());
    Nj(a, b, d, c)
};
const Sj = t.ytLoggingGelSequenceIdObj_ || {};

function Tj(a, b, c, d = {}) {
    var e = Math.round(d.timestamp || W());
    ld(b, 1, e < Number.MAX_SAFE_INTEGER ? e : 0);
    e = new He;
    if (d.lact) ld(e, 1, isFinite(d.lact) ? d.lact : -1);
    else if (d.timestamp) ld(e, 1, -1);
    else {
        var f = ii();
        ld(e, 1, isFinite(f) ? f : -1)
    }
    if (d.sequenceGroup && !T("web_gel_sequence_info_killswitch")) {
        f = d.sequenceGroup;
        const g = Oj(f),
            h = new Ge;
        ld(h, 2, g);
        J(h, 1, f);
        I(e, Ge, 3, h);
        d.endOfSequence && delete Sj[d.sequenceGroup]
    }
    I(b, He, 33, e);
    (d.sendIsolatedPayload ? rj : qj)(a, {
        endpoint: "log_event",
        payload: b,
        cttAuthInfo: d.cttAuthInfo,
        dangerousLogToVisitorSession: d.dangerousLogToVisitorSession
    }, c)
};

function Uj(a, b, c = {}) {
    let d = !1;
    S("ytLoggingEventsDefaultDisabled", !1) && (d = !0);
    Tj(a, b, d ? null : gi, c)
};

function Vj(a, b, c) {
    const d = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O;
    id(d, Ee, 72, Ie, a);
    c ? Tj("visualElementShown", d, c, b) : Uj("visualElementShown", d, b)
}

function Wj(a, b, c) {
    const d = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O;
    id(d, De, 73, Ie, a);
    c ? Tj("visualElementHidden", d, c, b) : Uj("visualElementHidden", d, b)
}

function Xj(a, b, c) {
    const d = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O;
    id(d, Ce, 78, Ie, a);
    c ? Tj("visualElementGestured", d, c, b) : Uj("visualElementGestured", d, b)
}

function Yj(a, b, c) {
    const d = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O;
    id(d, Fe, 208, Ie, a);
    c ? Tj("visualElementStateChanged", d, c, b) : Uj("visualElementStateChanged", d, b)
}

function Zj(a, b, c) {
    const d = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O;
    id(d, ze, 156, Ie, a);
    c ? Tj("screenCreated", d, c, b) : Uj("screenCreated", d, b)
}

function ak(a, b, c) {
    const d = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O;
    id(d, Be, 215, Ie, a);
    c ? Tj("visualElementAttached", d, c, b) : Uj("visualElementAttached", d, b)
};
var bk = new Set,
    ck = 0,
    dk = 0,
    ek = 0,
    fk = [];
const gk = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"];

function hk(a) {
    ik(a)
}

function jk(a) {
    ik(a, "WARNING")
}

function ik(a, b = "ERROR") {
    var c = {};
    c.name = S("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
    c.version = S("INNERTUBE_CONTEXT_CLIENT_VERSION");
    kk(a, c, b)
}

function kk(a, b, c = "ERROR") {
    if (a) {
        a.hasOwnProperty("level") && a.level && (c = a.level);
        if (T("console_log_js_exceptions")) {
            var d = [];
            d.push(`Name: ${a.name}`);
            d.push(`Message: ${a.message}`);
            a.hasOwnProperty("params") && d.push(`Error Params: ${JSON.stringify(a.params)}`);
            a.hasOwnProperty("args") && d.push(`Error args: ${JSON.stringify(a.args)}`);
            d.push(`File name: ${a.fileName}`);
            d.push(`Stacktrace: ${a.stack}`);
            window.console.log(d.join("\n"), a)
        }
        if (!(5 <= ck)) {
            d = fk;
            var e = Pa(a);
            const n = e.message || "Unknown Error",
                u = e.name || "UnknownError";
            var f = e.stack || a.i || "Not available";
            if (f.startsWith(`${u}: ${n}`)) {
                var g = f.split("\n");
                g.shift();
                f = g.join("\n")
            }
            g = e.lineNumber || "Not available";
            e = e.fileName || "Not available";
            let p = 0;
            if (a.hasOwnProperty("args") && a.args && a.args.length)
                for (var h = 0; h < a.args.length && !(p = Tf(a.args[h], `params.${h}`, b, p), 500 <= p); h++);
            else if (a.hasOwnProperty("params") && a.params) {
                const w = a.params;
                if ("object" === typeof a.params)
                    for (h in w) {
                        if (!w[h]) continue;
                        const B = `params.${h}`,
                            D = Vf(w[h]);
                        b[B] = D;
                        p +=
                            B.length + D.length;
                        if (500 < p) break
                    } else b.params = Vf(w)
            }
            if (d.length)
                for (h = 0; h < d.length && !(p = Tf(d[h], `params.context.${h}`, b, p), 500 <= p); h++);
            navigator.vendor && !b.hasOwnProperty("vendor") && (b["device.vendor"] = navigator.vendor);
            b = {
                message: n,
                name: u,
                lineNumber: g,
                fileName: e,
                stack: f,
                params: b,
                sampleWeight: 1
            };
            d = Number(a.columnNumber);
            isNaN(d) || (b.lineNumber = `${b.lineNumber}:${d}`);
            if ("IGNORED" === a.level) var k = 0;
            else a: {
                a = Mf();
                for (k of a.F)
                    if (b.message && b.message.match(k.Oa)) {
                        k = k.weight;
                        break a
                    }
                for (var l of a.D)
                    if (l.callback(b)) {
                        k =
                            l.weight;
                        break a
                    }
                k = 1
            }
            b.sampleWeight = k;
            k = b;
            for (var m of Jf)
                if (m.V[k.name]) {
                    l = m.V[k.name];
                    for (const w of l)
                        if (l = k.message.match(w.u)) {
                            k.params["params.error.original"] = l[0];
                            a = w.groups;
                            b = {};
                            for (d = 0; d < a.length; d++) b[a[d]] = l[d + 1], k.params[`params.error.${a[d]}`] = l[d + 1];
                            k.message = m.ba(b);
                            break
                        }
                }
            k.params || (k.params = {});
            m = Mf();
            k.params["params.errorServiceSignature"] = `msg=${m.F.length}&cb=${m.D.length}`;
            k.params["params.serviceWorker"] = "true";
            t.document && t.document.querySelectorAll && (k.params["params.fscripts"] =
                String(document.querySelectorAll("script:not([nonce])").length));
            ya("sample").constructor !== xa && (k.params["params.fconst"] = "true");
            window.yterr && "function" === typeof window.yterr && window.yterr(k);
            0 === k.sampleWeight || bk.has(k.message) || lk(k, c)
        }
    }
}

function lk(a, b = "ERROR") {
    if ("ERROR" === b) {
        Qf.da("handleError", a);
        if (T("record_app_crashed_web") && 0 === ek && 1 === a.sampleWeight)
            if (ek++, T("errors_via_jspb")) {
                var c = new re;
                c = G(c, 1, 1);
                if (!T("report_client_error_with_app_crash_ks")) {
                    var d = new qe;
                    var e = new pe;
                    var f = new oe;
                    var g = new ne;
                    g = J(g, 1, a.message);
                    f = I(f, ne, 3, g);
                    e = I(e, oe, 5, f);
                    d = I(d, pe, 9, e);
                    I(c, qe, 4, d)
                }
                d = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O;
                id(d, re, 20, Ie, c);
                Uj("appCrashed", d)
            } else c = {
                    appCrashType: "APP_CRASH_TYPE_BREAKPAD"
                }, T("report_client_error_with_app_crash_ks") ||
                (c.systemHealth = {
                    crashData: {
                        clientError: {
                            logMessage: {
                                message: a.message
                            }
                        }
                    }
                }), Y("appCrashed", c);
        dk++
    } else "WARNING" === b && Qf.da("handleWarning", a);
    a: {
        if (T("errors_via_jspb")) {
            if (mk()) var h = void 0;
            else {
                c = new ke;
                J(c, 1, a.stack);
                a.fileName && J(c, 4, a.fileName);
                var k = a.lineNumber && a.lineNumber.split ? a.lineNumber.split(":") : [];
                0 !== k.length && (1 !== k.length || isNaN(Number(k[0])) ? 2 !== k.length || isNaN(Number(k[0])) || isNaN(Number(k[1])) || (kd(c, 2, Number(k[0])), kd(c, 3, Number(k[1]))) : kd(c, 2, Number(k[0])));
                k = new ne;
                J(k,
                    1, a.message);
                J(k, 3, a.name);
                kd(k, 6, a.sampleWeight);
                "ERROR" === b ? G(k, 2, 2) : "WARNING" === b ? G(k, 2, 1) : G(k, 2, 0);
                var l = new le;
                G(l, 1, !0);
                id(l, ke, 3, me, c);
                c = new je;
                J(c, 3, window.location.href);
                d = S("FEXP_EXPERIMENTS", []);
                for (f = 0; f < d.length; f++) {
                    g = Hc(d[f]);
                    e = c.o;
                    const n = F(e);
                    Bc(n);
                    ad(e, n, 5, 2).push(g)
                }
                d = jf();
                if (!kf() && d)
                    for (var m of Object.keys(d)) e = new ie, J(e, 1, m), J(e, 2, String(d[m])), jd(c, 4, ie, e);
                if (m = a.params)
                    for (h of Object.keys(m)) d = new ie, J(d, 1, `client.${h}`), J(d, 2, String(m[h])), jd(c, 4, ie, d);
                m = S("SERVER_NAME");
                h = S("SERVER_VERSION");
                m && h && (d = new ie, J(d, 1, "server.name"), J(d, 2, m), jd(c, 4, ie, d), m = new ie, J(m, 1, "server.version"), J(m, 2, h), jd(c, 4, ie, m));
                h = new oe;
                I(h, je, 1, c);
                I(h, le, 2, l);
                I(h, ne, 3, k)
            }
            if (!h) break a;
            m = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O;
            id(m, oe, 163, Ie, h);
            Uj("clientError", m)
        } else {
            h = {};
            if (mk()) h = void 0;
            else {
                c = {
                    stackTrace: a.stack
                };
                a.fileName && (c.filename = a.fileName);
                m = a.lineNumber && a.lineNumber.split ? a.lineNumber.split(":") : [];
                0 !== m.length && (1 !== m.length || isNaN(Number(m[0])) ? 2 !== m.length ||
                    isNaN(Number(m[0])) || isNaN(Number(m[1])) || (c.lineNumber = Number(m[0]), c.columnNumber = Number(m[1])) : c.lineNumber = Number(m[0]));
                m = {
                    level: "ERROR_LEVEL_UNKNOWN",
                    message: a.message,
                    errorClassName: a.name,
                    sampleWeight: a.sampleWeight
                };
                "ERROR" === b ? m.level = "ERROR_LEVEL_ERROR" : "WARNING" === b && (m.level = "ERROR_LEVEL_WARNNING");
                c = {
                    isObfuscated: !0,
                    browserStackInfo: c
                };
                h.pageUrl = window.location.href;
                h.kvPairs = [];
                S("FEXP_EXPERIMENTS") && (h.experimentIds = S("FEXP_EXPERIMENTS"));
                d = jf();
                if (!kf() && d)
                    for (l of Object.keys(d)) h.kvPairs.push({
                        key: l,
                        value: String(d[l])
                    });
                if (l = a.params)
                    for (k of Object.keys(l)) h.kvPairs.push({
                        key: `client.${k}`,
                        value: String(l[k])
                    });
                k = S("SERVER_NAME");
                l = S("SERVER_VERSION");
                k && l && (h.kvPairs.push({
                    key: "server.name",
                    value: k
                }), h.kvPairs.push({
                    key: "server.version",
                    value: l
                }));
                h = {
                    errorMetadata: h,
                    stackTrace: c,
                    logMessage: m
                }
            }
            if (!h) break a;
            Y("clientError", h)
        }
        if ("ERROR" === b || T("errors_flush_gel_always_killswitch")) b: {
            if (T("web_fp_via_jspb")) {
                b = Rj;
                Rj = [];
                if (b)
                    for (const n of b) Nj(n.N, n.payload, Qj, n.options);
                Pj(!0);
                if (!T("web_fp_via_jspb_and_json")) break b
            }
            Pj()
        }
    }
    try {
        bk.add(a.message)
    } catch (n) {}
    ck++
}

function mk() {
    for (const a of gk) {
        const b = Ea();
        if (b && 0 <= b.toLowerCase().indexOf(a.toLowerCase())) return !0
    }
    return !1
}

function nk(a, ...b) {
    a.args || (a.args = []);
    a.args.push(...b)
};

function ok(a) {
    return r(function*() {
        var b = yield t.fetch(a.i);
        if (200 !== b.status) return Promise.reject("Server error when retrieving AmbientData");
        b = yield b.text();
        if (!b.startsWith(")]}'\n")) return Promise.reject("Incorrect JSPB formatting");
        a: {
            b = JSON.parse(b.substring(5));
            for (let c = 0; c < b.length; c++)
                if ("yt.sw.adr" === b[c][0]) {
                    b = new df(b[c]);
                    break a
                }
            b = null
        }
        return b ? b : Promise.reject("AmbientData missing from response")
    })
}

function pk(a = !1) {
    const b = qk.h;
    return r(function*() {
        if (a || !b.h) b.h = ok(b).then(b.j).catch(c => {
            delete b.h;
            ik(c)
        });
        return b.h
    })
}
var qk = class {
    constructor() {
        this.i = rk("/sw.js_data")
    }
    j(a) {
        const b = ed(a, cf, 2);
        if (b) {
            var c = K(b, 5);
            c && (t.__SAPISID = c);
            null != md(b, 10) ? R("EOM_VISITOR_DATA", K(b, 10)) : null != md(b, 7) && R("VISITOR_DATA", K(b, 7));
            if (null != Gc(Zc(b, 4))) {
                c = String;
                var d = Gc(Zc(b, 4));
                R("SESSION_INDEX", c(null != d ? d : 0))
            }
            null != md(b, 8) && R("DELEGATED_SESSION_ID", K(b, 8));
            null != md(b, 11) && R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT", K(b, 11))
        }
        return a
    }
};

function sk(a, b) {
    b.encryptedTokenJarContents && (a.h[b.encryptedTokenJarContents] = b, "string" === typeof b.expirationSeconds && setTimeout(() => {
        delete a.h[b.encryptedTokenJarContents]
    }, 1E3 * Number(b.expirationSeconds)))
}
var tk = class {
    constructor() {
        this.h = {}
    }
    handleResponse(a, b) {
        if (!b) throw Error("request needs to be passed into ConsistencyService");
        let c, d;
        b = (null == (c = b.H.context) ? void 0 : null == (d = c.request) ? void 0 : d.consistencyTokenJars) || [];
        let e;
        if (a = null == (e = a.responseContext) ? void 0 : e.consistencyTokenJar) {
            for (const f of b) delete this.h[f.encryptedTokenJarContents];
            sk(this, a)
        }
    }
};
let uk = Date.now().toString();

function vk() {
    const a = Array(16);
    for (var b = 0; 16 > b; b++) {
        var c = Date.now();
        for (let d = 0; d < c % 23; d++) a[b] = Math.random();
        a[b] = Math.floor(256 * Math.random())
    }
    if (uk)
        for (b = 1, c = 0; c < uk.length; c++) a[b % 16] = a[b % 16] ^ a[(b - 1) % 16] / 4 ^ uk.charCodeAt(c), b++;
    return a
}

function wk() {
    if (window.crypto && window.crypto.getRandomValues) try {
        const a = Array(16),
            b = new Uint8Array(16);
        window.crypto.getRandomValues(b);
        for (let c = 0; c < a.length; c++) a[c] = b[c];
        return a
    } catch (a) {}
    return vk()
};
let xk = t.ytLoggingDocDocumentNonce_;
if (!xk) {
    const a = wk(),
        b = [];
    for (let c = 0; c < a.length; c++) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c] & 63));
    xk = b.join("")
}
var yk = xk;
var zk = {
    fb: 0,
    bb: 1,
    eb: 2,
    Gb: 3,
    gb: 4,
    Pb: 5,
    Hb: 6,
    Nb: 7,
    Lb: 8,
    Mb: 9,
    0: "DEFAULT",
    1: "CHAT",
    2: "CONVERSATIONS",
    3: "MINIPLAYER",
    4: "DIALOG",
    5: "VOZ",
    6: "MUSIC_WATCH_TABS",
    7: "SHARE",
    8: "PUSH_NOTIFICATIONS",
    9: "RICH_GRID_WATCH"
};
let Ak = 1;

function Bk(a) {
    return new Ck({
        trackingParams: a
    })
}

function Dk(a) {
    const b = Ak++;
    return new Ck({
        veType: a,
        veCounter: b,
        elementIndex: void 0,
        dataElement: void 0,
        youtubeData: void 0,
        jspbYoutubeData: void 0,
        loggingDirectives: void 0
    })
}
var Ck = class {
    constructor(a) {
        this.h = a
    }
    getAsJson() {
        const a = {};
        void 0 !== this.h.trackingParams ? a.trackingParams = this.h.trackingParams : (a.veType = this.h.veType, void 0 !== this.h.veCounter && (a.veCounter = this.h.veCounter), void 0 !== this.h.elementIndex && (a.elementIndex = this.h.elementIndex));
        void 0 !== this.h.dataElement && (a.dataElement = this.h.dataElement.getAsJson());
        void 0 !== this.h.youtubeData && (a.youtubeData = this.h.youtubeData);
        this.h.isCounterfactual && (a.isCounterfactual = !0);
        return a
    }
    getAsJspb() {
        const a = new se;
        if (void 0 !== this.h.trackingParams) {
            var b = this.h.trackingParams;
            if (null != b)
                if ("string" === typeof b) b = b ? new Vb(b, Rb) : Ub();
                else if (b.constructor !== Vb)
                if (Pb(b)) b = b.length ? new Vb(new Uint8Array(b), Rb) : Ub();
                else throw Error();
            G(a, 1, b)
        } else void 0 !== this.h.veType && kd(a, 2, this.h.veType), void 0 !== this.h.veCounter && kd(a, 6, this.h.veCounter), void 0 !== this.h.elementIndex && kd(a, 3, this.h.elementIndex), this.h.isCounterfactual && G(a, 5, !0);
        void 0 !== this.h.dataElement && (b = this.h.dataElement.getAsJspb(), I(a, se, 7, b));
        void 0 !==
            this.h.youtubeData && I(a, Yd, 8, this.h.jspbYoutubeData);
        return a
    }
    toString() {
        return JSON.stringify(this.getAsJson())
    }
    isClientVe() {
        return !this.h.trackingParams && !!this.h.veType
    }
    getLoggingDirectives() {
        return this.h.loggingDirectives
    }
};

function Ek(a = 0) {
    return S("client-screen-nonce-store", {})[a]
}

function Fk(a, b = 0) {
    let c = S("client-screen-nonce-store");
    c || (c = {}, R("client-screen-nonce-store", c));
    c[b] = a
}

function Gk(a = 0) {
    return 0 === a ? "ROOT_VE_TYPE" : `${"ROOT_VE_TYPE"}.${a}`
}

function Hk(a = 0) {
    return S(Gk(a))
}

function Ik(a = 0) {
    return (a = Hk(a)) ? new Ck({
        veType: a,
        youtubeData: void 0,
        jspbYoutubeData: void 0
    }) : null
}

function Jk() {
    let a = S("csn-to-ctt-auth-info");
    a || (a = {}, R("csn-to-ctt-auth-info", a));
    return a
}

function Kk() {
    return Object.values(S("client-screen-nonce-store", {})).filter(a => void 0 !== a)
}

function Lk(a = 0) {
    a = Ek(a);
    if (!a && !S("USE_CSN_FALLBACK", !0)) return null;
    a || (a = "UNDEFINED_CSN");
    return a ? a : null
}

function Mk(a) {
    for (const b of Object.values(zk))
        if (Lk(b) === a) return !0;
    return !1
}

function Nk(a, b, c) {
    const d = Jk();
    (c = Lk(c)) && delete d[c];
    b && (d[a] = b)
}

function Ok(a) {
    return Jk()[a]
}

function Pk(a, b, c = 0, d) {
    if (a !== Ek(c) || b !== S(Gk(c)))
        if (Nk(a, d, c), Fk(a, c), R(Gk(c), b), b = () => {
                setTimeout(() => {
                    if (a)
                        if (T("web_time_via_jspb")) {
                            const e = new te;
                            J(e, 1, yk);
                            J(e, 2, a);
                            const f = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O;
                            id(f, te, 111, Ie, e);
                            Uj("foregroundHeartbeatScreenAssociated", f)
                        } else Y("foregroundHeartbeatScreenAssociated", {
                            clientDocumentNonce: yk,
                            clientScreenNonce: a
                        })
                }, 0)
            }, "requestAnimationFrame" in window) try {
            window.requestAnimationFrame(b)
        } catch (e) {
            b()
        } else b()
};

function Qk() {
    var a = S("INNERTUBE_CONTEXT");
    if (!a) return ik(Error("Error: No InnerTubeContext shell provided in ytconfig.")), {};
    a = ua(a);
    T("web_no_tracking_params_in_shell_killswitch") || delete a.clickTracking;
    a.client || (a.client = {});
    var b = a.client;
    b.utcOffsetMinutes = -Math.floor((new Date).getTimezoneOffset());
    var c = Af();
    c ? b.experimentsToken = c : delete b.experimentsToken;
    tk.h || (tk.h = new tk);
    b = tk.h.h;
    c = [];
    let d = 0;
    for (var e in b) c[d++] = b[e];
    a.request = Object.assign({}, a.request, {
        consistencyTokenJars: c
    });
    a.user = Object.assign({}, a.user);
    if (e = S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) a.user.serializedDelegationContext = e;
    return a
};

function Rk(a) {
    var b = a;
    if (a = S("INNERTUBE_HOST_OVERRIDE")) {
        a = String(a);
        var c = String,
            d = b.match(Ka);
        b = d[5];
        var e = d[6];
        d = d[7];
        var f = "";
        b && (f += b);
        e && (f += "?" + e);
        d && (f += "#" + d);
        b = a + c(f)
    }
    return b
};
var Sk = class {};
const Tk = {
    GET_DATASYNC_IDS: function(a) {
        return () => new a
    }(class extends Sk {})
};

function Uk(a = !0) {
    a = a ? wk() : vk();
    const b = [];
    for (let c = 0; c < a.length; c++) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c] & 63));
    return b.join("")
};
x("ytLoggingLatencyUsageStats_", t.ytLoggingLatencyUsageStats_ || {});
const Vk = window;
class Wk {
    constructor() {
        this.timing = {};
        this.clearResourceTimings = () => {};
        this.webkitClearResourceTimings = () => {};
        this.mozClearResourceTimings = () => {};
        this.msClearResourceTimings = () => {};
        this.oClearResourceTimings = () => {}
    }
}
var Xk = Vk.performance || Vk.mozPerformance || Vk.msPerformance || Vk.webkitPerformance || new Wk;
la(Xk.clearResourceTimings || Xk.webkitClearResourceTimings || Xk.mozClearResourceTimings || Xk.msClearResourceTimings || Xk.oClearResourceTimings || oa, Xk);
const Yk = ["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];

function Zk(a) {
    var b = {
            Vb: {}
        },
        c = Wf();
    if (void 0 !== oi.h) {
        const d = oi.h;
        a = [b !== d.m, a !== d.l, c !== d.j, !1, !1, !1, void 0 !== d.i];
        if (a.some(e => e)) throw new Ue("InnerTubeTransportService is already initialized", a);
    } else oi.h = new oi(b, a, c)
}

function $k(a, b) {
    return r(function*() {
        var c, d = {
            sessionIndex: null == a ? void 0 : null == (c = a.ka) ? void 0 : c.sessionIndex
        };
        c = yield kb(Yf(0, d));
        return Promise.resolve(Object.assign({}, al(b), c))
    })
}

function bl(a, b, c) {
    return r(function*() {
        var d;
        if (null == b ? 0 : null == (d = b.H) ? 0 : d.context) {
            d = b.H.context;
            for (var e of []) yield e.ec(d)
        }
        var f;
        if (null == (f = a.i) ? 0 : f.mc(b.input, b.H)) return yield a.i.Zb(b.input, b.H);
        var g;
        if ((f = null == (g = b.config) ? void 0 : g.ic) && a.h.has(f) && T("web_memoize_inflight_requests")) var h = a.h.get(f);
        else {
            g = JSON.stringify(b.H);
            let n;
            e = null != (n = null == (h = b.P) ? void 0 : h.headers) ? n : {};
            b.P = Object.assign({}, b.P, {
                headers: Object.assign({}, e, c)
            });
            h = Object.assign({}, b.P);
            "POST" === b.P.method && (h =
                Object.assign({}, h, {
                    body: g
                }));
            h = a.l.fetch(b.input, h, b.config);
            f && a.h.set(f, h)
        }
        h = yield h;
        var k;
        let l;
        if (h && "error" in h && (null == (k = h) ? 0 : null == (l = k.error) ? 0 : l.details)) {
            k = h.error.details;
            for (const n of k)(k = n["@type"]) && -1 < Yk.indexOf(k) && (delete n["@type"], h = n)
        }
        f && a.h.has(f) && a.h.delete(f);
        let m;
        !h && (null == (m = a.i) ? 0 : m.Ub(b.input, b.H)) && (h = yield a.i.Yb(b.input, b.H));
        return h || void 0
    })
}

function cl(a, b, c) {
    var d = {
        ka: {
            identity: Zf
        }
    };
    b.context || (b.context = Qk());
    return new z(e => r(function*() {
        var f = Rk(c);
        f = xf(f) ? "same-origin" : "cors";
        if (a.j.Ua) {
            var g, h = null == d ? void 0 : null == (g = d.ka) ? void 0 : g.sessionIndex;
            g = Yf(0, {
                sessionIndex: h
            });
            f = Object.assign({}, al(f), g)
        } else f = yield $k(d, f);
        g = Rk(c);
        h = {};
        S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT") && (null == f ? 0 : f.Authorization) || (h.key = S("INNERTUBE_API_KEY"));
        T("json_condensed_response") && (h.prettyPrint = "false");
        g = wf(g, h || {}, !1);
        h = {
            method: "POST",
            mode: xf(g) ? "same-origin" : "cors",
            credentials: xf(g) ? "same-origin" : "include"
        };
        var k = {};
        const l = {};
        for (const m of Object.keys(k)) k[m] && (l[m] = k[m]);
        0 < Object.keys(l).length && (h.headers = l);
        e(bl(a, {
            input: g,
            P: h,
            H: b,
            config: d
        }, f))
    }))
}

function al(a) {
    const b = {
        "Content-Type": "application/json"
    };
    S("EOM_VISITOR_DATA") ? b["X-Goog-EOM-Visitor-Id"] = S("EOM_VISITOR_DATA") : S("VISITOR_DATA") && (b["X-Goog-Visitor-Id"] = S("VISITOR_DATA"));
    b["X-Youtube-Bootstrap-Logged-In"] = S("LOGGED_IN", !1);
    "cors" !== a && ((a = S("INNERTUBE_CONTEXT_CLIENT_NAME")) && (b["X-Youtube-Client-Name"] = a), (a = S("INNERTUBE_CONTEXT_CLIENT_VERSION")) && (b["X-Youtube-Client-Version"] = a), (a = S("CHROME_CONNECTED_HEADER")) && (b["X-Youtube-Chrome-Connected"] = a), (a = S("DOMAIN_ADMIN_STATE")) &&
        (b["X-Youtube-Domain-Admin-State"] = a));
    return b
}
var oi = class {
    constructor(a, b, c) {
        this.m = a;
        this.l = b;
        this.j = c;
        this.i = void 0;
        this.h = new Map;
        a.ea || (a.ea = {});
        a.ea = Object.assign({}, Tk, a.ea)
    }
};
var ni = new ki;
let dl;

function el() {
    if (!dl) {
        const a = ti();
        Zk({
            fetch: (b, c) => kb(fetch(new Request(b, c)))
        });
        mi(a);
        dl = a.resolve(ni)
    }
    return dl
};

function fl(a) {
    return r(function*() {
        yield gl();
        jk(a)
    })
}

function hl(a) {
    return r(function*() {
        yield gl();
        ik(a)
    })
}

function il(a) {
    r(function*() {
        var b = yield lh();
        b ? yield ei(a, b): (yield pk(), b = {
            timestamp: a.timestamp
        }, b = a.appShellAssetLoadReport ? {
            N: "appShellAssetLoadReport",
            payload: a.appShellAssetLoadReport,
            options: b
        } : a.clientError ? {
            N: "clientError",
            payload: a.clientError,
            options: b
        } : void 0, b && Y(b.N, b.payload))
    })
}

function gl() {
    return r(function*() {
        try {
            yield pk()
        } catch (a) {}
    })
};
class Ph extends Nh {
    constructor(a) {
        super(arguments);
        this.csn = a
    }
}
const Xh = new Oh,
    jl = [];
let ll = kl,
    ml = 0;
const nl = new Map,
    ol = new Map,
    pl = new Map;

function ql(a, b, c, d, e, f, g, h) {
    const k = ll(),
        l = new Ck({
            veType: b,
            youtubeData: f,
            jspbYoutubeData: void 0
        });
    f = rl({}, k);
    e && (f.cttAuthInfo = e);
    var m = () => {
        jk(new Ue("newScreen() parent element does not have a VE - rootVe", b))
    };
    if (T("il_via_jspb")) {
        e = ye((new ze).h(k), l.getAsJspb());
        c && c.visualElement ? (m = new xe, c.clientScreenNonce && J(m, 2, c.clientScreenNonce), we(m, c.visualElement.getAsJspb()), g && G(m, 4, Je[g]), I(e, xe, 5, m)) : c && m();
        d && J(e, 3, d);
        if (T("expectation_logging") && h && h.screenCreatedLoggingExpectations) {
            c = new Xd;
            h = h.screenCreatedLoggingExpectations.expectedParentScreens || [];
            for (var n of h) n.screenVeType && (h = Vd(new Wd, n.screenVeType), jd(c, 1, Wd, h));
            I(e, Xd, 7, c)
        }
        Zj(e, f, a)
    } else n = {
            csn: k,
            pageVe: l.getAsJson()
        }, T("expectation_logging") &&
        h && h.screenCreatedLoggingExpectations && (n.screenCreatedLoggingExpectations = h.screenCreatedLoggingExpectations), c && c.visualElement ? (n.implicitGesture = {
            parentCsn: c.clientScreenNonce,
            gesturedVe: c.visualElement.getAsJson()
        }, g && (n.implicitGesture.gestureType = g)) : c && m(), d && (n.cloneCsn = d), a ? Nj("screenCreated", n, a, f) : Y("screenCreated", n, f);
    Uh(Xh, new Ph(k));
    nl.clear();
    ol.clear();
    pl.clear();
    return k
}

function sl(a, b, c, d, e = !1) {
    tl(a, b, c, [d], e)
}

function tl(a, b, c, d, e = !1) {
    const f = rl({
        cttAuthInfo: Ok(b) || void 0
    }, b);
    for (const h of d) {
        var g = h.getAsJson();
        (ta(g) || !g.trackingParams && !g.veType) && jk(Error("Child VE logged with no data"));
        if (T("no_client_ve_attach_unless_shown")) {
            const k = ul(h, b);
            if (g.veType && !ol.has(k) && !pl.has(k) && !e) {
                nl.set(k, [a, b, c, h]);
                return
            }
            g = ul(c, b);
            nl.has(g) ? vl(c, b) : pl.set(g, !0)
        }
    }
    d = d.filter(h => {
        h.csn !== b ? (h.csn = b, h = !0) : h = !1;
        return h
    });
    if (T("il_via_jspb")) {
        const h = Ae((new Be).h(b), c.getAsJspb());
        qa(d, k => {
            k = k.getAsJspb();
            jd(h, 3, se, k)
        });
        "UNDEFINED_CSN" === b ? Z("visualElementAttached", f, void 0, h) : ak(h, f, a)
    } else c = {
        csn: b,
        parentVe: c.getAsJson(),
        childVes: qa(d, h => h.getAsJson())
    }, "UNDEFINED_CSN" === b ? Z("visualElementAttached", f, c) : a ? Nj("visualElementAttached", c, a, f) : Y("visualElementAttached", c, f)
}

function wl(a, b, c, d, e, f) {
    xl(a, b, c, e, f)
}

function xl(a, b, c, d, e) {
    yl(c, b);
    const f = rl({
        cttAuthInfo: Ok(b) || void 0
    }, b);
    T("il_via_jspb") ? (d = (new Ee).h(b), c = c.getAsJspb(), c = I(d, se, 2, c), c = G(c, 4, 1), e && I(c, ve, 3, e), "UNDEFINED_CSN" === b ? Z("visualElementShown", f, void 0, c) : Vj(c, f, a)) : (e = {
        csn: b,
        ve: c.getAsJson(),
        eventType: 1
    }, d && (e.clientData = d), "UNDEFINED_CSN" === b ? Z("visualElementShown", f, e) : a ? Nj("visualElementShown", e, a, f) : Y("visualElementShown", e, f))
}

function zl(a, b, c, d = !1) {
    var e = d ? 16 : 8;
    const f = rl({
        cttAuthInfo: Ok(b) || void 0,
        endOfSequence: d
    }, b);
    T("il_via_jspb") ? (e = (new De).h(b), c = c.getAsJspb(), c = I(e, se, 2, c), G(c, 4, d ? 16 : 8), "UNDEFINED_CSN" === b ? Z("visualElementHidden", f, void 0, c) : Wj(c, f, a)) : (d = {
        csn: b,
        ve: c.getAsJson(),
        eventType: e
    }, "UNDEFINED_CSN" === b ? Z("visualElementHidden", f, d) : a ? Nj("visualElementHidden", d, a, f) : Y("visualElementHidden", d, f))
}

function Al(a, b, c, d) {
    var e = void 0;
    yl(c, b);
    e = e || "INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";
    const f = rl({
        cttAuthInfo: Ok(b) || void 0
    }, b);
    T("il_via_jspb") ? (d = (new Ce).h(b), c = c.getAsJspb(), c = I(d, se, 2, c), G(c, 4, Je[e]), "UNDEFINED_CSN" === b ? Z("visualElementGestured", f, void 0, c) : Xj(c, f, a)) : (e = {
        csn: b,
        ve: c.getAsJson(),
        gestureType: e
    }, d && (e.clientData = d), "UNDEFINED_CSN" === b ? Z("visualElementGestured", f, e) : a ? Nj("visualElementGestured", e, a, f) : Y("visualElementGestured", e, f))
}

function kl() {
    if (T("enable_web_96_bit_csn")) var a = Uk();
    else if (T("enable_web_96_bit_csn_no_crypto")) a = Uk(!1);
    else {
        a = Math.random() + "";
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        a = Eb(b, 3)
    }
    return a
}

function Z(a, b, c, d) {
    jl.push({
        N: a,
        payload: c,
        J: d,
        options: b
    });
    ml || (ml = Yh())
}

function Zh(a) {
    if (jl) {
        for (const b of jl)
            if (T("il_via_jspb") && b.J) switch (b.J.h(a.csn), b.N) {
                case "screenCreated":
                    Zj(b.J, b.options);
                    break;
                case "visualElementAttached":
                    ak(b.J, b.options);
                    break;
                case "visualElementShown":
                    Vj(b.J, b.options);
                    break;
                case "visualElementHidden":
                    Wj(b.J, b.options);
                    break;
                case "visualElementGestured":
                    Xj(b.J, b.options);
                    break;
                case "visualElementStateChanged":
                    Yj(b.J, b.options);
                    break;
                default:
                    jk(new Ue("flushQueue unable to map payloadName to JSPB setter"))
            } else b.payload && (b.payload.csn =
                a.csn, Y(b.N, b.payload, b.options));
        jl.length = 0
    }
    ml = 0
}

function ul(a, b) {
    return `${a.getAsJson().veType}${a.getAsJson().veCounter}${b}`
}

function yl(a, b) {
    if (T("no_client_ve_attach_unless_shown")) {
        var c = ul(a, b);
        ol.set(c, !0);
        vl(a, b)
    }
}

function vl(a, b) {
    a = ul(a, b);
    nl.has(a) && (b = nl.get(a) || [], sl(b[0], b[1], b[2], b[3], !0), nl.delete(a))
}

function rl(a, b) {
    T("log_sequence_info_on_gel_web") && (a.sequenceGroup = b);
    return a
};

function Bl() {
    Cl.h || (Cl.h = new Cl);
    return Cl.h
}

function Dl(a, b, c) {
    const d = Lk(c);
    return null === a.csn || d === a.csn || c ? d : (a = new Ue("VisibilityLogger called before newScreen", {
        caller: b.tagName,
        previous_csn: a.csn,
        current_csn: d
    }), jk(a), null)
}

function El(a) {
    return Math.floor(Number(a.data && a.data.loggingDirectives && a.data.loggingDirectives.visibility && a.data.loggingDirectives.visibility.types || "")) || 1
}
var Cl = class {
    constructor() {
        this.m = new Set;
        this.l = new Set;
        this.h = new Map;
        this.client = void 0;
        this.csn = null
    }
    j(a) {
        this.client = a
    }
    s() {
        this.clear();
        this.csn = Lk()
    }
    clear() {
        this.m.clear();
        this.l.clear();
        this.h.clear();
        this.csn = null
    }
    G(a, b, c) {
        b = this.i(a);
        var d = a.visualElement ? a.visualElement : b,
            e = this.m.has(d),
            f = this.h.get(d);
        this.m.add(d);
        this.h.set(d, !0);
        a.impressionLog && !e && a.impressionLog();
        if (b || a.visualElement)
            if (c = Dl(this, a, c)) {
                var g = !(!a.data || !a.data.loggingDirectives);
                if (El(a) || g) {
                    d = a.visualElement ?
                        a.visualElement : Bk(b);
                    var h = a.interactionLoggingClientData;
                    b = a.interactionLoggingClientDataJspbType;
                    g || e ? El(a) & 4 ? f || (a = this.client, yl(d, c), e = rl({
                            cttAuthInfo: Ok(c) || void 0
                        }, c), T("il_via_jspb") ? (f = (new Ee).h(c), d = d.getAsJspb(), f = I(f, se, 2, d), f = G(f, 4, 4), b && I(f, ve, 3, b), "UNDEFINED_CSN" === c ? Z("visualElementShown", e, void 0, f) : Vj(f, e, a)) : (b = {
                            csn: c,
                            ve: d.getAsJson(),
                            eventType: 4
                        }, h && (b.clientData = h), "UNDEFINED_CSN" === c ? Z("visualElementShown", e, b) : a ? Nj("visualElementShown", b, a, e) : Y("visualElementShown", b, e))) :
                        El(a) & 1 && !e && xl(this.client, c, d, h, b) : xl(this.client, c, d, h, b)
                }
            }
    }
    A(a, b, c) {
        var d = this.i(a),
            e = a.visualElement ? a.visualElement : d;
        b = this.l.has(e);
        const f = this.h.get(e);
        this.l.add(e);
        this.h.set(e, !1);
        if (!1 === f) return !0;
        if (!d && !a.visualElement) return !1;
        c = Dl(this, a, c);
        if (!c || !El(a) && a.data && a.data.loggingDirectives) return !1;
        d = a.visualElement ? a.visualElement : Bk(d);
        El(a) & 8 ? zl(this.client, c, d) : El(a) & 2 && !b && (a = this.client, b = rl({
            cttAuthInfo: Ok(c) || void 0
        }, c), T("il_via_jspb") ? (e = (new De).h(c), d = d.getAsJspb(), d =
            I(e, se, 2, d), d = G(d, 4, 2), "UNDEFINED_CSN" === c ? Z("visualElementHidden", b, void 0, d) : Wj(d, b, a)) : (d = {
            csn: c,
            ve: d.getAsJson(),
            eventType: 2
        }, "UNDEFINED_CSN" === c ? Z("visualElementHidden", b, d) : a ? Nj("visualElementHidden", d, a, b) : Y("visualElementHidden", d, b)));
        return !0
    }
    i(a) {
        let b;
        const c = a.data || (null == (b = a.props) ? void 0 : b.data);
        let d, e;
        if (T("il_use_view_model_logging_context") && (null == c ? 0 : null == (d = c.context) ? 0 : null == (e = d.loggingContext) ? 0 : e.loggingDirectives)) return c.context.loggingContext.loggingDirectives.trackingParams ||
            "";
        if (null == c ? 0 : c.loggingDirectives) return c.loggingDirectives.trackingParams || "";
        let f;
        return (null == (f = a.veContainer) ? 0 : f.trackingParams) ? a.veContainer.trackingParams : (null == c ? void 0 : c.trackingParams) || ""
    }
};

function Fl() {
    Gl.h || (Gl.h = new Gl)
}

function Hl(a) {
    Fl();
    nf(Bl().G).bind(Bl())(a, void 0, 8)
}

function Il(a) {
    Fl();
    nf(Bl().A).bind(Bl())(a, void 0, 8)
}
var Gl = class {
    j(a) {
        nf(Bl().j).bind(Bl())(a)
    }
    clear() {
        nf(Bl().clear).bind(Bl())()
    }
};

function Jl() {
    Kl.h || (Kl.h = new Kl);
    return Kl.h
}

function Ll(a, b, c = {}) {
    a.i.add(c.layer || 0);
    a.m = () => {
        Ml(a, b, c);
        const d = Ik(c.layer);
        if (d) {
            for (const e of a.G) Nl(a, e[0], e[1] || d, c.layer);
            for (const e of a.ga) Ol(a, e[0], e[1])
        }
    };
    Lk(c.layer) || a.m();
    if (c.ma)
        for (const d of c.ma) Pl(a, d, c.layer);
    else ik(Error("Delayed screen needs a data promise."))
}

function Ml(a, b, c = {}) {
    var d = void 0;
    c.layer || (c.layer = 0);
    d = void 0 !== c.Pa ? c.Pa : c.layer;
    const e = Lk(d);
    d = Ik(d);
    let f;
    d && (void 0 !== c.parentCsn ? f = {
        clientScreenNonce: c.parentCsn,
        visualElement: d
    } : e && "UNDEFINED_CSN" !== e && (f = {
        clientScreenNonce: e,
        visualElement: d
    }));
    let g;
    const h = S("EVENT_ID");
    "UNDEFINED_CSN" === e && h && (g = {
        servletData: {
            serializedServletEventId: h
        }
    });
    T("combine_ve_grafts") && e && Ql(a, e);
    T("no_client_ve_attach_unless_shown") && d && e && vl(d, e);
    let k;
    try {
        k = ql(a.client, b, f, c.la, c.cttAuthInfo, g, c.Xb, c.loggingExpectations)
    } catch (n) {
        nk(n, {
            jc: b,
            rootVe: d,
            dc: void 0,
            Wb: e,
            cc: f,
            la: c.la
        });
        ik(n);
        return
    }
    Pk(k, b, c.layer, c.cttAuthInfo);
    e && "UNDEFINED_CSN" !== e && d && !Mk(e) && zl(a.client, e, d, !0);
    a.h[a.h.length - 1] && !a.h[a.h.length - 1].csn && (a.h[a.h.length - 1].csn = k || "");
    Fl();
    nf(Bl().s).bind(Bl())();
    const l = Ik(c.layer);
    e && "UNDEFINED_CSN" !== e && l && (T("web_mark_root_visible") || T("music_web_mark_root_visible")) && nf(wl)(void 0, k, l, void 0, void 0, void 0);
    a.i.delete(c.layer || 0);
    a.m = void 0;
    let m;
    null == (m = a.ya.get(c.layer)) || m.forEach((n, u) => {
        n ? Nl(a, u, n, c.layer) :
            l && Nl(a, u, l, c.layer)
    });
    Rl(a)
}

function Sl(a) {
    var b = 28631,
        c = {
            layer: 8
        };
    nf(() => {
        [28631].includes(b) || (jk(new Ue("createClientScreen() called with a non-page VE", b)), b = 83769);
        c.isHistoryNavigation || a.h.push({
            rootVe: b,
            key: c.key || ""
        });
        a.G = [];
        a.ga = [];
        c.ma ? Ll(a, b, c) : Ml(a, b, c)
    })()
}

function Pl(a, b, c = 0) {
    nf(() => {
        b.then(d => {
            a.i.has(c) && a.m && a.m();
            const e = Lk(c),
                f = Ik(c);
            if (e && f) {
                var g;
                (null == d ? 0 : null == (g = d.response) ? 0 : g.trackingParams) && sl(a.client, e, f, Bk(d.response.trackingParams));
                var h;
                (null == d ? 0 : null == (h = d.playerResponse) ? 0 : h.trackingParams) && sl(a.client, e, f, Bk(d.playerResponse.trackingParams))
            }
        })
    })()
}

function Nl(a, b, c, d = 0) {
    nf(() => {
        if (a.i.has(d)) return a.G.push([b, c]), !0;
        const e = Lk(d),
            f = c || Ik(d);
        if (e && f) {
            if (T("combine_ve_grafts")) {
                const g = a.l.get(f.toString());
                g ? g.push(b) : (a.A.set(f.toString(), f), a.l.set(f.toString(), [b]));
                a.ia || (a.ia = bg(() => {
                    Ql(a, e)
                }, 1200))
            } else sl(a.client, e, f, b);
            return !0
        }
        return !1
    })()
}

function Tl(a, b) {
    return nf(() => {
        const c = Bk(b);
        Nl(a, c, void 0, 8);
        return c
    })()
}

function Ql(a, b) {
    if (void 0 === b) {
        const c = Kk();
        for (let d = 0; d < c.length; d++) void 0 !== c[d] && Ql(a, c[d])
    } else a.l.forEach((c, d) => {
        (d = a.A.get(d)) && tl(a.client, b, d, c)
    }), a.l.clear(), a.A.clear(), a.ia = void 0
}

function Ul(a, b, c = 0) {
    (c = Lk(c)) && Al(a.client, c, b)
}

function Vl(a, b, c, d = 0) {
    if (!b) return !1;
    d = Lk(d);
    if (!d) return !1;
    Al(a.client, d, Bk(b), c);
    return !0
}

function Wl(a, b) {
    const c = b.getScreenLayer && b.getScreenLayer();
    b.visualElement ? Ul(a, b.visualElement, c) : (Fl(), b = nf(Bl().i).bind(Bl())(b), Vl(a, b, void 0, c))
}

function Ol(a, b, c, d = 0) {
    const e = Lk(d);
    d = b || Ik(d);
    e && d && (a = a.client, b = rl({
        cttAuthInfo: Ok(e) || void 0
    }, e), T("il_via_jspb") ? (c = new Fe, c.h(e), d = d.getAsJspb(), I(c, se, 2, d), "UNDEFINED_CSN" === e ? Z("visualElementStateChanged", b, void 0, c) : Yj(c, b, a)) : (c = {
        csn: e,
        ve: d.getAsJson(),
        clientData: c
    }, "UNDEFINED_CSN" === e ? Z("visualElementStateChanged", b, c) : a ? Nj("visualElementStateChanged", c, a, b) : Y("visualElementStateChanged", c, b)))
}

function Rl(a) {
    for (var b = 0; b < a.s.length; b++) {
        var c = a.s[b];
        try {
            c()
        } catch (d) {
            ik(d)
        }
    }
    a.s.length = 0;
    for (b = 0; b < a.ha.length; b++) {
        c = a.ha[b];
        try {
            c()
        } catch (d) {
            ik(d)
        }
    }
}
var Kl = class {
    constructor() {
        this.G = [];
        this.ga = [];
        this.h = [];
        this.s = [];
        this.ha = [];
        this.l = new Map;
        this.A = new Map;
        this.i = new Set;
        this.ya = new Map
    }
    j(a) {
        this.client = a
    }
    clickCommand(a, b, c = 0) {
        return Vl(this, a.clickTrackingParams, b, c)
    }
    visualElementStateChanged(a, b, c = 0) {
        0 === c && this.i.has(c) ? this.ga.push([a, b]) : Ol(this, a, b, c)
    }
};
const Xl = {
        granted: "GRANTED",
        denied: "DENIED",
        unknown: "UNKNOWN"
    },
    Yl = RegExp("^(?:[a-z]+:)?//", "i");

function Zl(a) {
    var b = a.data;
    a = b.type;
    b = b.data;
    "notifications_register" === a ? (Q("IDToken", b), $l()) : "notifications_check_registration" === a && am(b)
}

function bm() {
    return self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    }).then(a => {
        if (a)
            for (const b of a) b.postMessage({
                type: "update_unseen_notifications_count_signal"
            })
    })
}

function cm(a) {
    const b = [];
    a.forEach(c => {
        b.push({
            key: c.key,
            value: c.value
        })
    });
    return b
}

function dm(a) {
    return r(function*() {
        const b = cm(a.payload.chrome.extraUrlParams),
            c = {
                recipientId: a.recipientId,
                endpoint: a.payload.chrome.endpoint,
                extraUrlParams: b
            },
            d = bf(Pe);
        return em().then(e => cl(e, c, d).then(f => {
            f.json().then(g => g && g.endpointUrl ? fm(a, g.endpointUrl) : Promise.resolve()).catch(g => {
                hl(g);
                Promise.reject(g)
            })
        }))
    })
}

function gm(a, b) {
    var c = Lk(8);
    if (null == c || !b) return a;
    a = Yl.test(a) ? new URL(a) : new URL(a, self.registration.scope);
    a.searchParams.set("parentCsn", c);
    a.searchParams.set("parentTrackingParams", b);
    return a.toString()
}

function fm(a, b) {
    a.deviceId && Q("DeviceId", a.deviceId);
    a.timestampSec && Q("TimestampLowerBound", a.timestampSec);
    const c = a.payload.chrome,
        d = Jl();
    Sl(d);
    var e;
    const f = null == (e = c.postedEndpoint) ? void 0 : e.clickTrackingParams;
    e = c.title;
    const g = {
        body: c.body,
        icon: c.iconUrl,
        data: {
            nav: gm(b, f),
            id: c.notificationId,
            attributionTag: c.attributionTag,
            clickEndpoint: c.clickEndpoint,
            postedEndpoint: c.postedEndpoint,
            clickTrackingParams: f,
            isDismissed: !0
        },
        tag: c.notificationTag || c.title + c.body + c.iconUrl,
        requireInteraction: !0
    };
    return self.registration.showNotification(e, g).then(() => {
        var h;
        (null == (h = g.data) ? 0 : h.postedEndpoint) && hm(g.data.postedEndpoint);
        let k;
        if (null == (k = g.data) ? 0 : k.clickTrackingParams) h = {
            screenLayer: 8,
            visualElement: Tl(d, g.data.clickTrackingParams)
        }, Hl(h);
        im(a.displayCap)
    }).catch(() => {})
}

function hm(a) {
    if (!Ti(a, Oe)) return Promise.reject();
    const b = {
            serializedRecordNotificationInteractionsRequest: Ti(a, Oe).serializedInteractionsRequest
        },
        c = bf(Qe);
    return em().then(d => cl(d, b, c)).then(d => d)
}

function im(a) {
    -1 !== a && self.registration.getNotifications().then(b => {
        for (let d = 0; d < b.length - a; d++) {
            b[d].data.isDismissed = !1;
            b[d].close();
            let e;
            if (null == (e = b[d].data) ? 0 : e.clickTrackingParams) {
                let f;
                var c = Bk(null == (f = b[d].data) ? void 0 : f.clickTrackingParams);
                const g = {
                        screenLayer: 8,
                        visualElement: c
                    },
                    h = Dk(82046),
                    k = Jl();
                Nl(k, h, c, 8);
                c = {
                    screenLayer: 8,
                    visualElement: h
                };
                Hl(c);
                Wl(k, c);
                Il(g)
            }
        }
    })
}

function am(a) {
    const b = [jm(a), Ye("RegistrationTimestamp").then(km), lm(), mm(), nm()];
    Promise.all(b).catch(() => {
        Q("IDToken", a);
        $l();
        return Promise.resolve()
    })
}

function km(a) {
    return 9E7 >= Date.now() - (a || 0) ? Promise.resolve() : Promise.reject()
}

function jm(a) {
    return Ye("IDToken").then(b => a === b ? Promise.resolve() : Promise.reject())
}

function lm() {
    return Ye("Permission").then(a => Notification.permission === a ? Promise.resolve() : Promise.reject())
}

function mm() {
    return Ye("Endpoint").then(a => om().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function nm() {
    return Ye("application_server_key").then(a => pm().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function qm() {
    var a = Notification.permission;
    if (Xl[a]) return Xl[a]
}

function $l() {
    Q("RegistrationTimestamp", 0);
    Promise.all([om(), rm(), sm(), pm()]).then(([a, b, c, d]) => {
        b = b ? Se(b) : null;
        c = c ? Se(c) : null;
        d = d ? Eb(new Uint8Array(d), 4) : null;
        tm(a, b, c, d)
    }).catch(() => {
        tm()
    })
}

function tm(a = null, b = null, c = null, d = null) {
    Xe().then(e => {
        e && (Q("Endpoint", a), Q("P256dhKey", b), Q("AuthKey", c), Q("application_server_key", d), Q("Permission", Notification.permission), Promise.all([Ye("DeviceId"), Ye("NotificationsDisabled")]).then(([f, g]) => {
            if (null != f) var h = f;
            else {
                f = [];
                var k;
                h = h || Rd.length;
                for (k = 0; 256 > k; k++) f[k] = Rd[0 | Math.random() * h];
                h = f.join("")
            }
            um(h, null != a ? a : void 0, null != b ? b : void 0, null != c ? c : void 0, null != d ? d : void 0, null != g ? g : void 0)
        }))
    })
}

function um(a, b, c, d, e, f) {
    r(function*() {
        const g = {
                notificationRegistration: {
                    chromeRegistration: {
                        deviceId: a,
                        pushParams: {
                            applicationServerKey: e,
                            authKey: d,
                            p256dhKey: c,
                            browserEndpoint: b
                        },
                        notificationsDisabledInApp: f,
                        permission: qm()
                    }
                }
            },
            h = bf(Re);
        return em().then(k => cl(k, g, h).then(() => {
            Q("DeviceId", a);
            Q("RegistrationTimestamp", Date.now());
            Q("TimestampLowerBound", Date.now())
        }, l => {
            fl(l)
        }))
    })
}

function om() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.endpoint) : Promise.resolve(null))
}

function rm() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("p256dh")) : Promise.resolve(null))
}

function sm() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("auth")) : Promise.resolve(null))
}

function pm() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.options.applicationServerKey) : Promise.resolve(null))
}

function em() {
    return r(function*() {
        try {
            return yield pk(!0), el()
        } catch (a) {
            return yield fl(a), Promise.reject(a)
        }
    })
};
let vm = self.location.origin + "/";

function rk(a) {
    let b = "undefined" !== typeof ServiceWorkerGlobalScope && self instanceof ServiceWorkerGlobalScope ? Kd.registration.scope : vm;
    b.endsWith("/") && (b = b.slice(0, -1));
    return b + a
};
let wm = void 0;

function xm(a) {
    return r(function*() {
        wm || (wm = yield a.open("yt-appshell-assets"));
        return wm
    })
}

function ym(a, b) {
    return r(function*() {
        const c = yield xm(a), d = b.map(e => zm(c, e));
        return Promise.all(d)
    })
}

function Am(a, b) {
    return r(function*() {
        let c;
        try {
            c = yield a.match(b, {
                cacheName: "yt-appshell-assets"
            })
        } catch (d) {}
        return c
    })
}

function Bm(a, b) {
    return r(function*() {
        const c = yield xm(a), d = (yield c.keys()).filter(e => !b.includes(e.url)).map(e => c.delete(e));
        return Promise.all(d)
    })
}

function Cm(a, b, c) {
    return r(function*() {
        yield(yield xm(a)).put(b, c)
    })
}

function Dm(a, b) {
    r(function*() {
        yield(yield xm(a)).delete(b)
    })
}

function zm(a, b) {
    return r(function*() {
        return (yield a.match(b)) ? Promise.resolve() : a.add(b)
    })
};
var Em = uh("yt-serviceworker-metadata", {
    M: {
        auth: {
            L: 1
        },
        ["resource-manifest-assets"]: {
            L: 2
        }
    },
    X: !0,
    upgrade(a, b) {
        b(1) && Lg(a, "resource-manifest-assets");
        b(2) && Lg(a, "auth")
    },
    version: 2
});
let Fm = null;

function Gm(a) {
    return bh(Em(), a)
}

function Hm() {
    return r(function*() {
        const a = yield lh();
        if (a) return Im.h || (Im.h = new Im(a)), Im.h
    })
}

function Jm(a, b) {
    return r(function*() {
        yield X(yield Gm(a.token), ["resource-manifest-assets"], "readwrite", c => {
            const d = c.objectStore("resource-manifest-assets"),
                e = Date.now();
            return V(d.h.put(b, e)).then(() => {
                Fm = e;
                let f = !0;
                return Qg(d, {
                    query: IDBKeyRange.bound(0, Date.now()),
                    direction: "prev"
                }, g => f ? (f = !1, g.advance(5)) : d.delete(g.getKey()).then(() => g.continue()))
            })
        })
    })
}

function Km(a, b) {
    return r(function*() {
        let c = !1,
            d = 0;
        yield X(yield Gm(a.token), ["resource-manifest-assets"], "readonly", e => Qg(e.objectStore("resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Date.now()),
            direction: "prev"
        }, f => {
            if (f.K().includes(b)) c = !0;
            else return d += 1, f.continue()
        }));
        return c ? d : -1
    })
}

function Lm(a) {
    return r(function*() {
        Fm || (yield X(yield Gm(a.token), ["resource-manifest-assets"], "readonly", b => Qg(b.objectStore("resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Date.now()),
            direction: "prev"
        }, c => {
            Fm = c.getKey()
        })));
        return Fm
    })
}
var Im = class {
    constructor(a) {
        this.token = a
    }
};

function Mm() {
    return r(function*() {
        const a = yield lh();
        if (a) return Nm.h || (Nm.h = new Nm(a)), Nm.h
    })
}

function Om(a, b) {
    return r(function*() {
        yield Ng(yield Gm(a.token), "auth", b, "shell_identifier_key")
    })
}

function Pm(a) {
    return r(function*() {
        return (yield(yield Gm(a.token)).get("auth", "shell_identifier_key")) || ""
    })
}

function Qm(a) {
    return r(function*() {
        yield(yield Gm(a.token)).clear("auth")
    })
}
var Nm = class {
    constructor(a) {
        this.token = a
    }
};

function Rm() {
    r(function*() {
        const a = yield Mm();
        a && (yield Qm(a))
    })
};
var hd = class extends L {
        constructor(a) {
            super(a)
        }
    },
    Sm = [0, 1, yd];
var Tm = class extends L {
    constructor(a) {
        super(a)
    }
};
Tm.v = [1];
var Um = function(a, b) {
    return (c, d) => {
        a: {
            if (lc.length) {
                const f = lc.pop();
                hc(f, d);
                f.h.init(c, void 0, void 0, d);
                c = f
            } else c = new kc(c, d);
            try {
                const f = new a;
                pd(b)(f.o, c);
                var e = f;
                break a
            } finally {
                c.h.clear(), c.l = -1, c.i = -1, 100 > lc.length && lc.push(c)
            }
            e = void 0
        }
        return e
    }
}(Tm, [0,
    1, zd, Sm
]);

function Vm(a) {
    return r(function*() {
        const b = a.headers.get("X-Resource-Manifest");
        return b ? Promise.resolve(Wm(b)) : Promise.reject(Error("No resource manifest header"))
    })
}

function Wm(a) {
    return gd(Um(decodeURIComponent(a))).reduce((b, c) => {
        (c = K(c, 1)) && b.push(c);
        return b
    }, [])
};

function Xm(a) {
    return r(function*() {
        const b = yield pk();
        if (b && null != md(b, 3)) {
            var c = yield Mm();
            c && (c = yield Pm(c), md(b, 3) !== c && (Dm(a.caches, a.h), Rm()))
        }
    })
}

function Ym(a) {
    return r(function*() {
        let b, c;
        try {
            c = yield Zm(a.i), b = yield Vm(c), yield ym(a.caches, b)
        } catch (d) {
            return Promise.reject(d)
        }
        try {
            yield $m(), yield Cm(a.caches, a.h, c)
        } catch (d) {
            return Promise.reject(d)
        }
        if (b) try {
            yield an(a, b, a.h)
        } catch (d) {}
        return Promise.resolve()
    })
}

function bn(a) {
    return r(function*() {
        yield Xm(a);
        return Ym(a)
    })
}

function Zm(a) {
    return r(function*() {
        try {
            return yield t.fetch(new Request(a))
        } catch (b) {
            return Promise.reject(b)
        }
    })
}

function $m() {
    return r(function*() {
        var a = yield pk();
        let b;
        a && null != md(a, 3) && (b = K(a, 3));
        return b ? (a = yield Mm()) ? Promise.resolve(Om(a, b)) : Promise.reject(Error("Could not get AuthMonitor instance")) : Promise.reject(Error("Could not get datasync ID"))
    })
}

function an(a, b, c) {
    return r(function*() {
        const d = yield Hm();
        if (d) try {
            yield Jm(d, b)
        } catch (e) {
            yield fl(e)
        }
        b.push(c);
        try {
            yield Bm(a.caches, b)
        } catch (e) {
            yield fl(e)
        }
        return Promise.resolve()
    })
}

function cn(a, b) {
    return r(function*() {
        return Am(a.caches, b)
    })
}

function dn(a) {
    return r(function*() {
        return Am(a.caches, a.h)
    })
}
var en = class {
    constructor() {
        var a = self.caches;
        let b = rk("/app_shell");
        T("service_worker_forward_exp_params") && (b += self.location.search);
        var c = rk("/app_shell_home");
        this.caches = a;
        this.i = b;
        this.h = c
    }
};
var fn = class {
    constructor() {
        const a = this;
        this.stream = new ReadableStream({
            start(b) {
                a.close = () => void b.close();
                a.h = c => {
                    const d = c.getReader();
                    return d.read().then(function h({
                        done: f,
                        value: g
                    }) {
                        if (f) return Promise.resolve();
                        b.enqueue(g);
                        return d.read().then(h)
                    })
                };
                a.i = () => {
                    const c = (new TextEncoder).encode("<script>if (window.fetchInitialData) { window.fetchInitialData(); } else { window.getInitialData = undefined; }\x3c/script>");
                    b.enqueue(c)
                }
            }
        })
    }
};

function gn(a, b) {
    return r(function*() {
        const c = b.request,
            d = yield cn(a.h, c.url);
        if (d) return il({
            appShellAssetLoadReport: {
                assetPath: c.url,
                cacheHit: !0
            },
            timestamp: W()
        }), d;
        hn(c);
        return jn(b)
    })
}

function kn(a, b) {
    return r(function*() {
        const c = yield ln(b);
        if (c.response && (c.response.ok || "opaqueredirect" === c.response.type || 429 === c.response.status || 303 === c.response.status || 300 <= c.response.status && 400 > c.response.status)) return c.response;
        const d = yield dn(a.h);
        if (d) return mn(a), nn(d, b);
        on(a);
        return c.response ? c.response : Promise.reject(c.error)
    })
}

function pn(a, b) {
    b = new URL(b);
    if (!a.config.ja.includes(b.pathname)) return !1;
    if (!b.search) return !0;
    b = new URLSearchParams(b.search);
    for (const c of a.config.Ba)
        if (a = b.get(c.key), void 0 === c.value || a === c.value)
            if (b.delete(c.key), !b.toString()) return !0;
    return !1
}

function qn(a, b) {
    return r(function*() {
        const c = yield dn(a.h);
        if (!c) return on(a), jn(b);
        mn(a);
        var d;
        a: {
            if (c.headers && (d = c.headers.get("date")) && (d = Date.parse(d), !isNaN(d))) {
                d = Math.round(W() - d);
                break a
            }
            d = -1
        }
        if (!(-1 < d && 7 <= d / 864E5)) return nn(c, b);
        d = yield ln(b);
        return d.response && d.response.ok ? d.response : nn(c, b)
    })
}

function jn(a) {
    return Promise.resolve(a.preloadResponse).then(b => b && !rn(b) ? b : t.fetch(a.request))
}

function hn(a) {
    const b = {
        assetPath: a.url,
        cacheHit: !1
    };
    Hm().then(c => {
        if (c) {
            var d = Lm(c).then(e => {
                e && (b.currentAppBundleTimestampSec = String(Math.floor(e / 1E3)))
            });
            c = Km(c, a.url).then(e => {
                b.appBundleVersionDiffCount = e
            });
            Promise.all([d, c]).catch(e => {
                fl(e)
            }).finally(() => {
                il({
                    appShellAssetLoadReport: b,
                    timestamp: W()
                })
            })
        } else il({
            appShellAssetLoadReport: b,
            timestamp: W()
        })
    })
}

function mn(a) {
    il({
        appShellAssetLoadReport: {
            assetPath: a.h.h,
            cacheHit: !0
        },
        timestamp: W()
    })
}

function on(a) {
    il({
        appShellAssetLoadReport: {
            assetPath: a.h.h,
            cacheHit: !1
        },
        timestamp: W()
    })
}

function nn(a, b) {
    if (!T("sw_nav_preload_pbj")) return a;
    const c = new fn,
        d = c.h(a.body);
    Promise.resolve(b.preloadResponse).then(e => {
        if (!e || !rn(e)) throw Error("no pbj preload response available");
        d.then(() => c.h(e.body)).then(() => void c.close())
    }).catch(() => {
        d.then(() => {
            c.i();
            c.close()
        })
    });
    return new Response(c.stream, {
        status: a.status,
        statusText: a.statusText,
        headers: a.headers
    })
}

function ln(a) {
    return r(function*() {
        try {
            return {
                response: yield jn(a)
            }
        } catch (b) {
            return {
                error: b
            }
        }
    })
}

function rn(a) {
    return "pbj" === a.headers.get("x-navigation-preload-response-type")
}
var An = class {
    constructor() {
        var a = sn;
        var b = {
            Fa: tn,
            Ra: un([vn, /\/signin/, /\/logout/]),
            ja: ["/", "/feed/downloads"],
            Ba: wn([{
                key: "feature",
                value: "ytca"
            }]),
            Aa: xn(T("kevlar_sw_app_wide_fallback") ? yn : zn)
        };
        this.h = a;
        this.config = b
    }
};
const Bn = /^\/$/,
    zn = [Bn, /^\/feed\/downloads$/],
    yn = [Bn, /^\/feed\/\w*/, /^\/results$/, /^\/playlist$/, /^\/watch$/, /^\/channel\/\w*/];

function xn(a) {
    return new RegExp(a.map(b => b.source).join("|"))
}
const Cn = /^https:\/\/([\w-]*\.)*youtube\.com.*/;

function un(a) {
    a = xn(a);
    return new RegExp(`${Cn.source}(${a.source})`)
}
const Dn = xn([/\.css$/, /\.js$/, /\.ico$/, /\/ytmweb\/_\/js\//, /\/ytmweb\/_\/ss\//, /\/kabuki\/_\/js\//, /\/kabuki\/_\/ss\//, /\/ytmainappweb\/_\/ss\//]),
    tn = new RegExp(`${Cn.source}(${Dn.source})`),
    vn = /purge_shell=1/;

function wn(a = []) {
    const b = [];
    for (const c of Ef) b.push({
        key: c
    });
    for (const c of a) b.push(c);
    return b
}
un([vn]);
wn();
var Fn = class {
    constructor() {
        var a = sn,
            b = En;
        this.h = self;
        this.i = a;
        this.m = b;
        this.G = Te
    }
    init() {
        this.h.oninstall = this.s.bind(this);
        this.h.onactivate = this.j.bind(this);
        this.h.onfetch = this.l.bind(this);
        this.h.onmessage = this.A.bind(this)
    }
    s(a) {
        this.h.skipWaiting();
        const b = bn(this.i).catch(c => {
            fl(c);
            return Promise.resolve()
        });
        a.waitUntil(b)
    }
    j(a) {
        const b = [this.h.clients.claim()],
            c = this.h.registration;
        c.navigationPreload && (b.push(c.navigationPreload.enable()), T("sw_nav_preload_pbj") && b.push(c.navigationPreload.setHeaderValue("pbj")));
        a.waitUntil(Promise.all(b))
    }
    l(a) {
        const b = this;
        return r(function*() {
            var c = b.m,
                d = !!b.h.registration.navigationPreload;
            const e = a.request;
            if (c.config.Ra.test(e.url)) qk.h && (delete qk.h.h, t.__SAPISID = void 0, R("VISITOR_DATA", void 0), R("SESSION_INDEX", void 0), R("DELEGATED_SESSION_ID", void 0), R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",
                void 0)), d = a.respondWith, c = c.h, Dm(c.caches, c.h), Rm(), c = jn(a), d.call(a, c);
            else if (c.config.Fa.test(e.url)) a.respondWith(gn(c, a));
            else if ("navigate" === e.mode) {
                const f = new URL(e.url),
                    g = c.config.ja;
                (!T("sw_nav_request_network_first") && g.includes(f.pathname) ? 0 : c.config.Aa.test(f.pathname)) ? a.respondWith(kn(c, a)): pn(c, e.url) ? a.respondWith(qn(c, a)) : d && a.respondWith(jn(a))
            }
        })
    }
    A(a) {
        const b = a.data;
        this.G.includes(b.type) ? Zl(a) : "refresh_shell" === b.type && Ym(this.i).catch(c => {
            fl(c)
        })
    }
};

function Gn() {
    let a = v("ytglobal.storage_");
    a || (a = new Hn, x("ytglobal.storage_", a));
    return a
}
var Hn = class {
    estimate() {
        return r(function*() {
            const a = navigator;
            let b;
            if (null == (b = a.storage) ? 0 : b.estimate) return a.storage.estimate();
            let c;
            if (null == (c = a.webkitTemporaryStorage) ? 0 : c.queryUsageAndQuota) return In()
        })
    }
};

function In() {
    const a = navigator;
    return new Promise((b, c) => {
        let d;
        null != (d = a.webkitTemporaryStorage) && d.queryUsageAndQuota ? a.webkitTemporaryStorage.queryUsageAndQuota((e, f) => {
            b({
                usage: e,
                quota: f
            })
        }, e => {
            c(e)
        }) : c(Error("webkitTemporaryStorage is not supported."))
    })
}
x("ytglobal.storageClass_", Hn);

function Jn(a, b) {
    Gn().estimate().then(c => {
        c = Object.assign({}, b, {
            isSw: void 0 === self.document,
            isIframe: self !== self.top,
            deviceStorageUsageMbytes: Kn(null == c ? void 0 : c.usage),
            deviceStorageQuotaMbytes: Kn(null == c ? void 0 : c.quota)
        });
        a.h("idbQuotaExceeded", c)
    })
}
class Ln {
    constructor() {
        var a = Mn;
        this.handleError = Nn;
        this.h = a;
        this.i = !1;
        void 0 === self.document || self.addEventListener("beforeunload", () => {
            this.i = !0
        });
        this.j = Math.random() <= zf("ytidb_transaction_ended_event_rate_limit_session", .2)
    }
    U(a, b) {
        switch (a) {
            case "IDB_DATA_CORRUPTED":
                T("idb_data_corrupted_killswitch") || this.h("idbDataCorrupted", b);
                break;
            case "IDB_UNEXPECTEDLY_CLOSED":
                this.h("idbUnexpectedlyClosed", b);
                break;
            case "IS_SUPPORTED_COMPLETED":
                T("idb_is_supported_completed_killswitch") || this.h("idbIsSupportedCompleted", b);
                break;
            case "QUOTA_EXCEEDED":
                Jn(this, b);
                break;
            case "TRANSACTION_ENDED":
                this.j && Math.random() <= zf("ytidb_transaction_ended_event_rate_limit_transaction",
                    .1) && this.h("idbTransactionEnded", b);
                break;
            case "TRANSACTION_UNEXPECTEDLY_ABORTED":
                a = Object.assign({}, b, {
                    hasWindowUnloaded: this.i
                }), this.h("idbTransactionAborted", a)
        }
    }
}

function Kn(a) {
    return "undefined" === typeof a ? "-1" : String(Math.ceil(a / 1048576))
};
Pf(Mf(), {
    F: [{
        Oa: /Failed to fetch/,
        weight: 500
    }],
    D: []
});
var {
    handleError: Nn = hk,
    U: Mn = Y
} = {
    handleError: hl,
    U: function(a, b) {
        return r(function*() {
            yield gl();
            Y(a, b)
        })
    }
};
for (jg = new Ln; 0 < ig.length;) {
    const a = ig.shift();
    switch (a.type) {
        case "ERROR":
            jg.handleError(a.payload);
            break;
        case "EVENT":
            jg.U(a.eventType, a.payload)
    }
}
qk.h = new qk;
self.onnotificationclick = function(a) {
    a.notification.close();
    const b = a.notification.data;
    b.isDismissed = !1;
    const c = self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    });
    c.then(d => {
        a: {
            var e = b.nav;
            for (const f of d)
                if (f.url === e) {
                    f.focus();
                    break a
                }
            self.clients.openWindow(e)
        }
    });
    a.waitUntil(c);
    a.waitUntil(hm(b.clickEndpoint))
};
self.onnotificationclose = function(a) {
    var b = a.notification.data;
    if (null == b ? 0 : b.clickTrackingParams) {
        var c = Bk(b.clickTrackingParams);
        a = {
            screenLayer: 8,
            visualElement: c
        };
        if (b.isDismissed) {
            const d = Dk(74726);
            b = Jl();
            Nl(b, d, c, 8);
            c = {
                screenLayer: 8,
                visualElement: d
            };
            Hl(c);
            Wl(b, c)
        }
        Il(a)
    }
};
self.onpush = function(a) {
    a.waitUntil(Ye("NotificationsDisabled").then(b => {
        if (b) return Promise.resolve();
        if (a.data && a.data.text().length) try {
            return dm(a.data.json())
        } catch (c) {
            return Promise.resolve(c.message)
        }
        return Promise.resolve()
    }));
    a.waitUntil(bm())
};
self.onpushsubscriptionchange = function() {
    $l()
};
const sn = new en,
    En = new An;
(new Fn).init();