var th = e => {
    throw TypeError(e)
}
;
var Pl = (e, t, r) => t.has(e) || th("Cannot " + r);
var T = (e, t, r) => (Pl(e, t, "read from private field"),
r ? r.call(e) : t.get(e))
  , te = (e, t, r) => t.has(e) ? th("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r)
  , V = (e, t, r, n) => (Pl(e, t, "write to private field"),
n ? n.call(e, r) : t.set(e, r),
r)
  , Ie = (e, t, r) => (Pl(e, t, "access private method"),
r);
var go = (e, t, r, n) => ({
    set _(s) {
        V(e, t, s, r)
    },
    get _() {
        return T(e, t, n)
    }
});
function Qy(e, t) {
    for (var r = 0; r < t.length; r++) {
        const n = t[r];
        if (typeof n != "string" && !Array.isArray(n)) {
            for (const s in n)
                if (s !== "default" && !(s in e)) {
                    const i = Object.getOwnPropertyDescriptor(n, s);
                    i && Object.defineProperty(e, s, i.get ? i : {
                        enumerable: !0,
                        get: () => n[s]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        n(s);
    new MutationObserver(s => {
        for (const i of s)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && n(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function r(s) {
        const i = {};
        return s.integrity && (i.integrity = s.integrity),
        s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials" ? i.credentials = "include" : s.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function n(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const i = r(s);
        fetch(s.href, i)
    }
}
)();
function Pp(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Rp = {
    exports: {}
}
  , Ha = {}
  , Ap = {
    exports: {}
}
  , Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var no = Symbol.for("react.element")
  , Yy = Symbol.for("react.portal")
  , Xy = Symbol.for("react.fragment")
  , Zy = Symbol.for("react.strict_mode")
  , e0 = Symbol.for("react.profiler")
  , t0 = Symbol.for("react.provider")
  , r0 = Symbol.for("react.context")
  , n0 = Symbol.for("react.forward_ref")
  , s0 = Symbol.for("react.suspense")
  , i0 = Symbol.for("react.memo")
  , o0 = Symbol.for("react.lazy")
  , rh = Symbol.iterator;
function a0(e) {
    return e === null || typeof e != "object" ? null : (e = rh && e[rh] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Op = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Np = Object.assign
  , jp = {};
function Ds(e, t, r) {
    this.props = e,
    this.context = t,
    this.refs = jp,
    this.updater = r || Op
}
Ds.prototype.isReactComponent = {};
Ds.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Ds.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Ip() {}
Ip.prototype = Ds.prototype;
function Ic(e, t, r) {
    this.props = e,
    this.context = t,
    this.refs = jp,
    this.updater = r || Op
}
var Lc = Ic.prototype = new Ip;
Lc.constructor = Ic;
Np(Lc, Ds.prototype);
Lc.isPureReactComponent = !0;
var nh = Array.isArray
  , Lp = Object.prototype.hasOwnProperty
  , $c = {
    current: null
}
  , $p = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Dp(e, t, r) {
    var n, s = {}, i = null, o = null;
    if (t != null)
        for (n in t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            Lp.call(t, n) && !$p.hasOwnProperty(n) && (s[n] = t[n]);
    var a = arguments.length - 2;
    if (a === 1)
        s.children = r;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        s.children = l
    }
    if (e && e.defaultProps)
        for (n in a = e.defaultProps,
        a)
            s[n] === void 0 && (s[n] = a[n]);
    return {
        $$typeof: no,
        type: e,
        key: i,
        ref: o,
        props: s,
        _owner: $c.current
    }
}
function l0(e, t) {
    return {
        $$typeof: no,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Dc(e) {
    return typeof e == "object" && e !== null && e.$$typeof === no
}
function u0(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(r) {
        return t[r]
    })
}
var sh = /\/+/g;
function Rl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? u0("" + e.key) : t.toString(36)
}
function Ko(e, t, r, n, s) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null)
        o = !0;
    else
        switch (i) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case no:
            case Yy:
                o = !0
            }
        }
    if (o)
        return o = e,
        s = s(o),
        e = n === "" ? "." + Rl(o, 0) : n,
        nh(s) ? (r = "",
        e != null && (r = e.replace(sh, "$&/") + "/"),
        Ko(s, t, r, "", function(u) {
            return u
        })) : s != null && (Dc(s) && (s = l0(s, r + (!s.key || o && o.key === s.key ? "" : ("" + s.key).replace(sh, "$&/") + "/") + e)),
        t.push(s)),
        1;
    if (o = 0,
    n = n === "" ? "." : n + ":",
    nh(e))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var l = n + Rl(i, a);
            o += Ko(i, t, r, l, s)
        }
    else if (l = a0(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(i = e.next()).done; )
            i = i.value,
            l = n + Rl(i, a++),
            o += Ko(i, t, r, l, s);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function vo(e, t, r) {
    if (e == null)
        return e;
    var n = []
      , s = 0;
    return Ko(e, n, "", "", function(i) {
        return t.call(r, i, s++)
    }),
    n
}
function c0(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(r) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = r)
        }, function(r) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = r)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var We = {
    current: null
}
  , qo = {
    transition: null
}
  , d0 = {
    ReactCurrentDispatcher: We,
    ReactCurrentBatchConfig: qo,
    ReactCurrentOwner: $c
};
function Mp() {
    throw Error("act(...) is not supported in production builds of React.")
}
Y.Children = {
    map: vo,
    forEach: function(e, t, r) {
        vo(e, function() {
            t.apply(this, arguments)
        }, r)
    },
    count: function(e) {
        var t = 0;
        return vo(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return vo(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Dc(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
Y.Component = Ds;
Y.Fragment = Xy;
Y.Profiler = e0;
Y.PureComponent = Ic;
Y.StrictMode = Zy;
Y.Suspense = s0;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = d0;
Y.act = Mp;
Y.cloneElement = function(e, t, r) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var n = Np({}, e.props)
      , s = e.key
      , i = e.ref
      , o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        o = $c.current),
        t.key !== void 0 && (s = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            Lp.call(t, l) && !$p.hasOwnProperty(l) && (n[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        n.children = r;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        n.children = a
    }
    return {
        $$typeof: no,
        type: e.type,
        key: s,
        ref: i,
        props: n,
        _owner: o
    }
}
;
Y.createContext = function(e) {
    return e = {
        $$typeof: r0,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: t0,
        _context: e
    },
    e.Consumer = e
}
;
Y.createElement = Dp;
Y.createFactory = function(e) {
    var t = Dp.bind(null, e);
    return t.type = e,
    t
}
;
Y.createRef = function() {
    return {
        current: null
    }
}
;
Y.forwardRef = function(e) {
    return {
        $$typeof: n0,
        render: e
    }
}
;
Y.isValidElement = Dc;
Y.lazy = function(e) {
    return {
        $$typeof: o0,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: c0
    }
}
;
Y.memo = function(e, t) {
    return {
        $$typeof: i0,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
Y.startTransition = function(e) {
    var t = qo.transition;
    qo.transition = {};
    try {
        e()
    } finally {
        qo.transition = t
    }
}
;
Y.unstable_act = Mp;
Y.useCallback = function(e, t) {
    return We.current.useCallback(e, t)
}
;
Y.useContext = function(e) {
    return We.current.useContext(e)
}
;
Y.useDebugValue = function() {}
;
Y.useDeferredValue = function(e) {
    return We.current.useDeferredValue(e)
}
;
Y.useEffect = function(e, t) {
    return We.current.useEffect(e, t)
}
;
Y.useId = function() {
    return We.current.useId()
}
;
Y.useImperativeHandle = function(e, t, r) {
    return We.current.useImperativeHandle(e, t, r)
}
;
Y.useInsertionEffect = function(e, t) {
    return We.current.useInsertionEffect(e, t)
}
;
Y.useLayoutEffect = function(e, t) {
    return We.current.useLayoutEffect(e, t)
}
;
Y.useMemo = function(e, t) {
    return We.current.useMemo(e, t)
}
;
Y.useReducer = function(e, t, r) {
    return We.current.useReducer(e, t, r)
}
;
Y.useRef = function(e) {
    return We.current.useRef(e)
}
;
Y.useState = function(e) {
    return We.current.useState(e)
}
;
Y.useSyncExternalStore = function(e, t, r) {
    return We.current.useSyncExternalStore(e, t, r)
}
;
Y.useTransition = function() {
    return We.current.useTransition()
}
;
Y.version = "18.3.1";
Ap.exports = Y;
var b = Ap.exports;
const N = Pp(b)
  , Up = Qy({
    __proto__: null,
    default: N
}, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h0 = b
  , f0 = Symbol.for("react.element")
  , p0 = Symbol.for("react.fragment")
  , m0 = Object.prototype.hasOwnProperty
  , g0 = h0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , v0 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Fp(e, t, r) {
    var n, s = {}, i = null, o = null;
    r !== void 0 && (i = "" + r),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (n in t)
        m0.call(t, n) && !v0.hasOwnProperty(n) && (s[n] = t[n]);
    if (e && e.defaultProps)
        for (n in t = e.defaultProps,
        t)
            s[n] === void 0 && (s[n] = t[n]);
    return {
        $$typeof: f0,
        type: e,
        key: i,
        ref: o,
        props: s,
        _owner: g0.current
    }
}
Ha.Fragment = p0;
Ha.jsx = Fp;
Ha.jsxs = Fp;
Rp.exports = Ha;
var _ = Rp.exports
  , Bp = {
    exports: {}
}
  , lt = {}
  , zp = {
    exports: {}
}
  , Hp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(C, P) {
        var L = C.length;
        C.push(P);
        e: for (; 0 < L; ) {
            var q = L - 1 >>> 1
              , F = C[q];
            if (0 < s(F, P))
                C[q] = P,
                C[L] = F,
                L = q;
            else
                break e
        }
    }
    function r(C) {
        return C.length === 0 ? null : C[0]
    }
    function n(C) {
        if (C.length === 0)
            return null;
        var P = C[0]
          , L = C.pop();
        if (L !== P) {
            C[0] = L;
            e: for (var q = 0, F = C.length, Q = F >>> 1; q < Q; ) {
                var Z = 2 * (q + 1) - 1
                  , we = C[Z]
                  , je = Z + 1
                  , re = C[je];
                if (0 > s(we, L))
                    je < F && 0 > s(re, we) ? (C[q] = re,
                    C[je] = L,
                    q = je) : (C[q] = we,
                    C[Z] = L,
                    q = Z);
                else if (je < F && 0 > s(re, L))
                    C[q] = re,
                    C[je] = L,
                    q = je;
                else
                    break e
            }
        }
        return P
    }
    function s(C, P) {
        var L = C.sortIndex - P.sortIndex;
        return L !== 0 ? L : C.id - P.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var o = Date
          , a = o.now();
        e.unstable_now = function() {
            return o.now() - a
        }
    }
    var l = []
      , u = []
      , c = 1
      , d = null
      , f = 3
      , h = !1
      , y = !1
      , g = !1
      , w = typeof setTimeout == "function" ? setTimeout : null
      , m = typeof clearTimeout == "function" ? clearTimeout : null
      , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(C) {
        for (var P = r(u); P !== null; ) {
            if (P.callback === null)
                n(u);
            else if (P.startTime <= C)
                n(u),
                P.sortIndex = P.expirationTime,
                t(l, P);
            else
                break;
            P = r(u)
        }
    }
    function x(C) {
        if (g = !1,
        v(C),
        !y)
            if (r(l) !== null)
                y = !0,
                H(S);
            else {
                var P = r(u);
                P !== null && K(x, P.startTime - C)
            }
    }
    function S(C, P) {
        y = !1,
        g && (g = !1,
        m(R),
        R = -1),
        h = !0;
        var L = f;
        try {
            for (v(P),
            d = r(l); d !== null && (!(d.expirationTime > P) || C && !z()); ) {
                var q = d.callback;
                if (typeof q == "function") {
                    d.callback = null,
                    f = d.priorityLevel;
                    var F = q(d.expirationTime <= P);
                    P = e.unstable_now(),
                    typeof F == "function" ? d.callback = F : d === r(l) && n(l),
                    v(P)
                } else
                    n(l);
                d = r(l)
            }
            if (d !== null)
                var Q = !0;
            else {
                var Z = r(u);
                Z !== null && K(x, Z.startTime - P),
                Q = !1
            }
            return Q
        } finally {
            d = null,
            f = L,
            h = !1
        }
    }
    var k = !1
      , E = null
      , R = -1
      , O = 5
      , j = -1;
    function z() {
        return !(e.unstable_now() - j < O)
    }
    function D() {
        if (E !== null) {
            var C = e.unstable_now();
            j = C;
            var P = !0;
            try {
                P = E(!0, C)
            } finally {
                P ? J() : (k = !1,
                E = null)
            }
        } else
            k = !1
    }
    var J;
    if (typeof p == "function")
        J = function() {
            p(D)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var I = new MessageChannel
          , X = I.port2;
        I.port1.onmessage = D,
        J = function() {
            X.postMessage(null)
        }
    } else
        J = function() {
            w(D, 0)
        }
        ;
    function H(C) {
        E = C,
        k || (k = !0,
        J())
    }
    function K(C, P) {
        R = w(function() {
            C(e.unstable_now())
        }, P)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(C) {
        C.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        y || h || (y = !0,
        H(S))
    }
    ,
    e.unstable_forceFrameRate = function(C) {
        0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < C ? Math.floor(1e3 / C) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return r(l)
    }
    ,
    e.unstable_next = function(C) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var P = 3;
            break;
        default:
            P = f
        }
        var L = f;
        f = P;
        try {
            return C()
        } finally {
            f = L
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(C, P) {
        switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            C = 3
        }
        var L = f;
        f = C;
        try {
            return P()
        } finally {
            f = L
        }
    }
    ,
    e.unstable_scheduleCallback = function(C, P, L) {
        var q = e.unstable_now();
        switch (typeof L == "object" && L !== null ? (L = L.delay,
        L = typeof L == "number" && 0 < L ? q + L : q) : L = q,
        C) {
        case 1:
            var F = -1;
            break;
        case 2:
            F = 250;
            break;
        case 5:
            F = 1073741823;
            break;
        case 4:
            F = 1e4;
            break;
        default:
            F = 5e3
        }
        return F = L + F,
        C = {
            id: c++,
            callback: P,
            priorityLevel: C,
            startTime: L,
            expirationTime: F,
            sortIndex: -1
        },
        L > q ? (C.sortIndex = L,
        t(u, C),
        r(l) === null && C === r(u) && (g ? (m(R),
        R = -1) : g = !0,
        K(x, L - q))) : (C.sortIndex = F,
        t(l, C),
        y || h || (y = !0,
        H(S))),
        C
    }
    ,
    e.unstable_shouldYield = z,
    e.unstable_wrapCallback = function(C) {
        var P = f;
        return function() {
            var L = f;
            f = P;
            try {
                return C.apply(this, arguments)
            } finally {
                f = L
            }
        }
    }
}
)(Hp);
zp.exports = Hp;
var y0 = zp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var w0 = b
  , at = y0;
function A(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++)
        t += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Wp = new Set
  , Ei = {};
function jn(e, t) {
    Ps(e, t),
    Ps(e + "Capture", t)
}
function Ps(e, t) {
    for (Ei[e] = t,
    e = 0; e < t.length; e++)
        Wp.add(t[e])
}
var ur = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , pu = Object.prototype.hasOwnProperty
  , b0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , ih = {}
  , oh = {};
function x0(e) {
    return pu.call(oh, e) ? !0 : pu.call(ih, e) ? !1 : b0.test(e) ? oh[e] = !0 : (ih[e] = !0,
    !1)
}
function _0(e, t, r, n) {
    if (r !== null && r.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return n ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function S0(e, t, r, n) {
    if (t === null || typeof t > "u" || _0(e, t, r, n))
        return !0;
    if (n)
        return !1;
    if (r !== null)
        switch (r.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Ve(e, t, r, n, s, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = n,
    this.attributeNamespace = s,
    this.mustUseProperty = r,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = o
}
var Ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Ne[e] = new Ve(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Ne[t] = new Ve(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Ne[e] = new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Ne[e] = new Ve(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Ne[e] = new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Ne[e] = new Ve(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Ne[e] = new Ve(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Ne[e] = new Ve(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Ne[e] = new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Mc = /[\-:]([a-z])/g;
function Uc(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Mc, Uc);
    Ne[t] = new Ve(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Mc, Uc);
    Ne[t] = new Ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Mc, Uc);
    Ne[t] = new Ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Ne[e] = new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Ne.xlinkHref = new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Ne[e] = new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Fc(e, t, r, n) {
    var s = Ne.hasOwnProperty(t) ? Ne[t] : null;
    (s !== null ? s.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (S0(t, r, s, n) && (r = null),
    n || s === null ? x0(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : s.mustUseProperty ? e[s.propertyName] = r === null ? s.type === 3 ? !1 : "" : r : (t = s.attributeName,
    n = s.attributeNamespace,
    r === null ? e.removeAttribute(t) : (s = s.type,
    r = s === 3 || s === 4 && r === !0 ? "" : "" + r,
    n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))))
}
var mr = w0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , yo = Symbol.for("react.element")
  , Zn = Symbol.for("react.portal")
  , es = Symbol.for("react.fragment")
  , Bc = Symbol.for("react.strict_mode")
  , mu = Symbol.for("react.profiler")
  , Vp = Symbol.for("react.provider")
  , Kp = Symbol.for("react.context")
  , zc = Symbol.for("react.forward_ref")
  , gu = Symbol.for("react.suspense")
  , vu = Symbol.for("react.suspense_list")
  , Hc = Symbol.for("react.memo")
  , Cr = Symbol.for("react.lazy")
  , qp = Symbol.for("react.offscreen")
  , ah = Symbol.iterator;
function Gs(e) {
    return e === null || typeof e != "object" ? null : (e = ah && e[ah] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var pe = Object.assign, Al;
function ii(e) {
    if (Al === void 0)
        try {
            throw Error()
        } catch (r) {
            var t = r.stack.trim().match(/\n( *(at )?)/);
            Al = t && t[1] || ""
        }
    return `
` + Al + e
}
var Ol = !1;
function Nl(e, t) {
    if (!e || Ol)
        return "";
    Ol = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var n = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    n = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                n = u
            }
            e()
        }
    } catch (u) {
        if (u && n && typeof u.stack == "string") {
            for (var s = u.stack.split(`
`), i = n.stack.split(`
`), o = s.length - 1, a = i.length - 1; 1 <= o && 0 <= a && s[o] !== i[a]; )
                a--;
            for (; 1 <= o && 0 <= a; o--,
            a--)
                if (s[o] !== i[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--,
                            a--,
                            0 > a || s[o] !== i[a]) {
                                var l = `
` + s[o].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= o && 0 <= a);
                    break
                }
        }
    } finally {
        Ol = !1,
        Error.prepareStackTrace = r
    }
    return (e = e ? e.displayName || e.name : "") ? ii(e) : ""
}
function k0(e) {
    switch (e.tag) {
    case 5:
        return ii(e.type);
    case 16:
        return ii("Lazy");
    case 13:
        return ii("Suspense");
    case 19:
        return ii("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Nl(e.type, !1),
        e;
    case 11:
        return e = Nl(e.type.render, !1),
        e;
    case 1:
        return e = Nl(e.type, !0),
        e;
    default:
        return ""
    }
}
function yu(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case es:
        return "Fragment";
    case Zn:
        return "Portal";
    case mu:
        return "Profiler";
    case Bc:
        return "StrictMode";
    case gu:
        return "Suspense";
    case vu:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Kp:
            return (e.displayName || "Context") + ".Consumer";
        case Vp:
            return (e._context.displayName || "Context") + ".Provider";
        case zc:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Hc:
            return t = e.displayName || null,
            t !== null ? t : yu(e.type) || "Memo";
        case Cr:
            t = e._payload,
            e = e._init;
            try {
                return yu(e(t))
            } catch {}
        }
    return null
}
function E0(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return yu(t);
    case 8:
        return t === Bc ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Jr(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Gp(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function T0(e) {
    var t = Gp(e) ? "checked" : "value"
      , r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , n = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
        var s = r.get
          , i = r.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return s.call(this)
            },
            set: function(o) {
                n = "" + o,
                i.call(this, o)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: r.enumerable
        }),
        {
            getValue: function() {
                return n
            },
            setValue: function(o) {
                n = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function wo(e) {
    e._valueTracker || (e._valueTracker = T0(e))
}
function Jp(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var r = t.getValue()
      , n = "";
    return e && (n = Gp(e) ? e.checked ? "true" : "false" : e.value),
    e = n,
    e !== r ? (t.setValue(e),
    !0) : !1
}
function ua(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function wu(e, t) {
    var r = t.checked;
    return pe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: r ?? e._wrapperState.initialChecked
    })
}
function lh(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue
      , n = t.checked != null ? t.checked : t.defaultChecked;
    r = Jr(t.value != null ? t.value : r),
    e._wrapperState = {
        initialChecked: n,
        initialValue: r,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Qp(e, t) {
    t = t.checked,
    t != null && Fc(e, "checked", t, !1)
}
function bu(e, t) {
    Qp(e, t);
    var r = Jr(t.value)
      , n = t.type;
    if (r != null)
        n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
    else if (n === "submit" || n === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? xu(e, t.type, r) : t.hasOwnProperty("defaultValue") && xu(e, t.type, Jr(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function uh(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var n = t.type;
        if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        r || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    r = e.name,
    r !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    r !== "" && (e.name = r)
}
function xu(e, t, r) {
    (t !== "number" || ua(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r))
}
var oi = Array.isArray;
function ds(e, t, r, n) {
    if (e = e.options,
    t) {
        t = {};
        for (var s = 0; s < r.length; s++)
            t["$" + r[s]] = !0;
        for (r = 0; r < e.length; r++)
            s = t.hasOwnProperty("$" + e[r].value),
            e[r].selected !== s && (e[r].selected = s),
            s && n && (e[r].defaultSelected = !0)
    } else {
        for (r = "" + Jr(r),
        t = null,
        s = 0; s < e.length; s++) {
            if (e[s].value === r) {
                e[s].selected = !0,
                n && (e[s].defaultSelected = !0);
                return
            }
            t !== null || e[s].disabled || (t = e[s])
        }
        t !== null && (t.selected = !0)
    }
}
function _u(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(A(91));
    return pe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function ch(e, t) {
    var r = t.value;
    if (r == null) {
        if (r = t.children,
        t = t.defaultValue,
        r != null) {
            if (t != null)
                throw Error(A(92));
            if (oi(r)) {
                if (1 < r.length)
                    throw Error(A(93));
                r = r[0]
            }
            t = r
        }
        t == null && (t = ""),
        r = t
    }
    e._wrapperState = {
        initialValue: Jr(r)
    }
}
function Yp(e, t) {
    var r = Jr(t.value)
      , n = Jr(t.defaultValue);
    r != null && (r = "" + r,
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n)
}
function dh(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Xp(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Su(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Xp(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var bo, Zp = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, s) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, r, n, s)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (bo = bo || document.createElement("div"),
        bo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = bo.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Ti(e, t) {
    if (t) {
        var r = e.firstChild;
        if (r && r === e.lastChild && r.nodeType === 3) {
            r.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var di = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , C0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(di).forEach(function(e) {
    C0.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        di[t] = di[e]
    })
});
function em(e, t, r) {
    return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || di.hasOwnProperty(e) && di[e] ? ("" + t).trim() : t + "px"
}
function tm(e, t) {
    e = e.style;
    for (var r in t)
        if (t.hasOwnProperty(r)) {
            var n = r.indexOf("--") === 0
              , s = em(r, t[r], n);
            r === "float" && (r = "cssFloat"),
            n ? e.setProperty(r, s) : e[r] = s
        }
}
var P0 = pe({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function ku(e, t) {
    if (t) {
        if (P0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(A(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(A(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(A(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(A(62))
    }
}
function Eu(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Tu = null;
function Wc(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Cu = null
  , hs = null
  , fs = null;
function hh(e) {
    if (e = oo(e)) {
        if (typeof Cu != "function")
            throw Error(A(280));
        var t = e.stateNode;
        t && (t = Ga(t),
        Cu(e.stateNode, e.type, t))
    }
}
function rm(e) {
    hs ? fs ? fs.push(e) : fs = [e] : hs = e
}
function nm() {
    if (hs) {
        var e = hs
          , t = fs;
        if (fs = hs = null,
        hh(e),
        t)
            for (e = 0; e < t.length; e++)
                hh(t[e])
    }
}
function sm(e, t) {
    return e(t)
}
function im() {}
var jl = !1;
function om(e, t, r) {
    if (jl)
        return e(t, r);
    jl = !0;
    try {
        return sm(e, t, r)
    } finally {
        jl = !1,
        (hs !== null || fs !== null) && (im(),
        nm())
    }
}
function Ci(e, t) {
    var r = e.stateNode;
    if (r === null)
        return null;
    var n = Ga(r);
    if (n === null)
        return null;
    r = n[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (n = !n.disabled) || (e = e.type,
        n = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !n;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (r && typeof r != "function")
        throw Error(A(231, t, typeof r));
    return r
}
var Pu = !1;
if (ur)
    try {
        var Js = {};
        Object.defineProperty(Js, "passive", {
            get: function() {
                Pu = !0
            }
        }),
        window.addEventListener("test", Js, Js),
        window.removeEventListener("test", Js, Js)
    } catch {
        Pu = !1
    }
function R0(e, t, r, n, s, i, o, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(r, u)
    } catch (c) {
        this.onError(c)
    }
}
var hi = !1
  , ca = null
  , da = !1
  , Ru = null
  , A0 = {
    onError: function(e) {
        hi = !0,
        ca = e
    }
};
function O0(e, t, r, n, s, i, o, a, l) {
    hi = !1,
    ca = null,
    R0.apply(A0, arguments)
}
function N0(e, t, r, n, s, i, o, a, l) {
    if (O0.apply(this, arguments),
    hi) {
        if (hi) {
            var u = ca;
            hi = !1,
            ca = null
        } else
            throw Error(A(198));
        da || (da = !0,
        Ru = u)
    }
}
function In(e) {
    var t = e
      , r = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (r = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? r : null
}
function am(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function fh(e) {
    if (In(e) !== e)
        throw Error(A(188))
}
function j0(e) {
    var t = e.alternate;
    if (!t) {
        if (t = In(e),
        t === null)
            throw Error(A(188));
        return t !== e ? null : e
    }
    for (var r = e, n = t; ; ) {
        var s = r.return;
        if (s === null)
            break;
        var i = s.alternate;
        if (i === null) {
            if (n = s.return,
            n !== null) {
                r = n;
                continue
            }
            break
        }
        if (s.child === i.child) {
            for (i = s.child; i; ) {
                if (i === r)
                    return fh(s),
                    e;
                if (i === n)
                    return fh(s),
                    t;
                i = i.sibling
            }
            throw Error(A(188))
        }
        if (r.return !== n.return)
            r = s,
            n = i;
        else {
            for (var o = !1, a = s.child; a; ) {
                if (a === r) {
                    o = !0,
                    r = s,
                    n = i;
                    break
                }
                if (a === n) {
                    o = !0,
                    n = s,
                    r = i;
                    break
                }
                a = a.sibling
            }
            if (!o) {
                for (a = i.child; a; ) {
                    if (a === r) {
                        o = !0,
                        r = i,
                        n = s;
                        break
                    }
                    if (a === n) {
                        o = !0,
                        n = i,
                        r = s;
                        break
                    }
                    a = a.sibling
                }
                if (!o)
                    throw Error(A(189))
            }
        }
        if (r.alternate !== n)
            throw Error(A(190))
    }
    if (r.tag !== 3)
        throw Error(A(188));
    return r.stateNode.current === r ? e : t
}
function lm(e) {
    return e = j0(e),
    e !== null ? um(e) : null
}
function um(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = um(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var cm = at.unstable_scheduleCallback
  , ph = at.unstable_cancelCallback
  , I0 = at.unstable_shouldYield
  , L0 = at.unstable_requestPaint
  , ye = at.unstable_now
  , $0 = at.unstable_getCurrentPriorityLevel
  , Vc = at.unstable_ImmediatePriority
  , dm = at.unstable_UserBlockingPriority
  , ha = at.unstable_NormalPriority
  , D0 = at.unstable_LowPriority
  , hm = at.unstable_IdlePriority
  , Wa = null
  , Gt = null;
function M0(e) {
    if (Gt && typeof Gt.onCommitFiberRoot == "function")
        try {
            Gt.onCommitFiberRoot(Wa, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Nt = Math.clz32 ? Math.clz32 : B0
  , U0 = Math.log
  , F0 = Math.LN2;
function B0(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (U0(e) / F0 | 0) | 0
}
var xo = 64
  , _o = 4194304;
function ai(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function fa(e, t) {
    var r = e.pendingLanes;
    if (r === 0)
        return 0;
    var n = 0
      , s = e.suspendedLanes
      , i = e.pingedLanes
      , o = r & 268435455;
    if (o !== 0) {
        var a = o & ~s;
        a !== 0 ? n = ai(a) : (i &= o,
        i !== 0 && (n = ai(i)))
    } else
        o = r & ~s,
        o !== 0 ? n = ai(o) : i !== 0 && (n = ai(i));
    if (n === 0)
        return 0;
    if (t !== 0 && t !== n && !(t & s) && (s = n & -n,
    i = t & -t,
    s >= i || s === 16 && (i & 4194240) !== 0))
        return t;
    if (n & 4 && (n |= r & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= n; 0 < t; )
            r = 31 - Nt(t),
            s = 1 << r,
            n |= e[r],
            t &= ~s;
    return n
}
function z0(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function H0(e, t) {
    for (var r = e.suspendedLanes, n = e.pingedLanes, s = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var o = 31 - Nt(i)
          , a = 1 << o
          , l = s[o];
        l === -1 ? (!(a & r) || a & n) && (s[o] = z0(a, t)) : l <= t && (e.expiredLanes |= a),
        i &= ~a
    }
}
function Au(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function fm() {
    var e = xo;
    return xo <<= 1,
    !(xo & 4194240) && (xo = 64),
    e
}
function Il(e) {
    for (var t = [], r = 0; 31 > r; r++)
        t.push(e);
    return t
}
function so(e, t, r) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Nt(t),
    e[t] = r
}
function W0(e, t) {
    var r = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var n = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
        var s = 31 - Nt(r)
          , i = 1 << s;
        t[s] = 0,
        n[s] = -1,
        e[s] = -1,
        r &= ~i
    }
}
function Kc(e, t) {
    var r = e.entangledLanes |= t;
    for (e = e.entanglements; r; ) {
        var n = 31 - Nt(r)
          , s = 1 << n;
        s & t | e[n] & t && (e[n] |= t),
        r &= ~s
    }
}
var ne = 0;
function pm(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var mm, qc, gm, vm, ym, Ou = !1, So = [], Br = null, zr = null, Hr = null, Pi = new Map, Ri = new Map, Rr = [], V0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function mh(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Br = null;
        break;
    case "dragenter":
    case "dragleave":
        zr = null;
        break;
    case "mouseover":
    case "mouseout":
        Hr = null;
        break;
    case "pointerover":
    case "pointerout":
        Pi.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Ri.delete(t.pointerId)
    }
}
function Qs(e, t, r, n, s, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [s]
    },
    t !== null && (t = oo(t),
    t !== null && qc(t)),
    e) : (e.eventSystemFlags |= n,
    t = e.targetContainers,
    s !== null && t.indexOf(s) === -1 && t.push(s),
    e)
}
function K0(e, t, r, n, s) {
    switch (t) {
    case "focusin":
        return Br = Qs(Br, e, t, r, n, s),
        !0;
    case "dragenter":
        return zr = Qs(zr, e, t, r, n, s),
        !0;
    case "mouseover":
        return Hr = Qs(Hr, e, t, r, n, s),
        !0;
    case "pointerover":
        var i = s.pointerId;
        return Pi.set(i, Qs(Pi.get(i) || null, e, t, r, n, s)),
        !0;
    case "gotpointercapture":
        return i = s.pointerId,
        Ri.set(i, Qs(Ri.get(i) || null, e, t, r, n, s)),
        !0
    }
    return !1
}
function wm(e) {
    var t = pn(e.target);
    if (t !== null) {
        var r = In(t);
        if (r !== null) {
            if (t = r.tag,
            t === 13) {
                if (t = am(r),
                t !== null) {
                    e.blockedOn = t,
                    ym(e.priority, function() {
                        gm(r)
                    });
                    return
                }
            } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Go(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var r = Nu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (r === null) {
            r = e.nativeEvent;
            var n = new r.constructor(r.type,r);
            Tu = n,
            r.target.dispatchEvent(n),
            Tu = null
        } else
            return t = oo(r),
            t !== null && qc(t),
            e.blockedOn = r,
            !1;
        t.shift()
    }
    return !0
}
function gh(e, t, r) {
    Go(e) && r.delete(t)
}
function q0() {
    Ou = !1,
    Br !== null && Go(Br) && (Br = null),
    zr !== null && Go(zr) && (zr = null),
    Hr !== null && Go(Hr) && (Hr = null),
    Pi.forEach(gh),
    Ri.forEach(gh)
}
function Ys(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Ou || (Ou = !0,
    at.unstable_scheduleCallback(at.unstable_NormalPriority, q0)))
}
function Ai(e) {
    function t(s) {
        return Ys(s, e)
    }
    if (0 < So.length) {
        Ys(So[0], e);
        for (var r = 1; r < So.length; r++) {
            var n = So[r];
            n.blockedOn === e && (n.blockedOn = null)
        }
    }
    for (Br !== null && Ys(Br, e),
    zr !== null && Ys(zr, e),
    Hr !== null && Ys(Hr, e),
    Pi.forEach(t),
    Ri.forEach(t),
    r = 0; r < Rr.length; r++)
        n = Rr[r],
        n.blockedOn === e && (n.blockedOn = null);
    for (; 0 < Rr.length && (r = Rr[0],
    r.blockedOn === null); )
        wm(r),
        r.blockedOn === null && Rr.shift()
}
var ps = mr.ReactCurrentBatchConfig
  , pa = !0;
function G0(e, t, r, n) {
    var s = ne
      , i = ps.transition;
    ps.transition = null;
    try {
        ne = 1,
        Gc(e, t, r, n)
    } finally {
        ne = s,
        ps.transition = i
    }
}
function J0(e, t, r, n) {
    var s = ne
      , i = ps.transition;
    ps.transition = null;
    try {
        ne = 4,
        Gc(e, t, r, n)
    } finally {
        ne = s,
        ps.transition = i
    }
}
function Gc(e, t, r, n) {
    if (pa) {
        var s = Nu(e, t, r, n);
        if (s === null)
            Wl(e, t, n, ma, r),
            mh(e, n);
        else if (K0(s, e, t, r, n))
            n.stopPropagation();
        else if (mh(e, n),
        t & 4 && -1 < V0.indexOf(e)) {
            for (; s !== null; ) {
                var i = oo(s);
                if (i !== null && mm(i),
                i = Nu(e, t, r, n),
                i === null && Wl(e, t, n, ma, r),
                i === s)
                    break;
                s = i
            }
            s !== null && n.stopPropagation()
        } else
            Wl(e, t, n, null, r)
    }
}
var ma = null;
function Nu(e, t, r, n) {
    if (ma = null,
    e = Wc(n),
    e = pn(e),
    e !== null)
        if (t = In(e),
        t === null)
            e = null;
        else if (r = t.tag,
        r === 13) {
            if (e = am(t),
            e !== null)
                return e;
            e = null
        } else if (r === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return ma = e,
    null
}
function bm(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch ($0()) {
        case Vc:
            return 1;
        case dm:
            return 4;
        case ha:
        case D0:
            return 16;
        case hm:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Mr = null
  , Jc = null
  , Jo = null;
function xm() {
    if (Jo)
        return Jo;
    var e, t = Jc, r = t.length, n, s = "value"in Mr ? Mr.value : Mr.textContent, i = s.length;
    for (e = 0; e < r && t[e] === s[e]; e++)
        ;
    var o = r - e;
    for (n = 1; n <= o && t[r - n] === s[i - n]; n++)
        ;
    return Jo = s.slice(e, 1 < n ? 1 - n : void 0)
}
function Qo(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function ko() {
    return !0
}
function vh() {
    return !1
}
function ut(e) {
    function t(r, n, s, i, o) {
        this._reactName = r,
        this._targetInst = s,
        this.type = n,
        this.nativeEvent = i,
        this.target = o,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (r = e[a],
            this[a] = r ? r(i) : i[a]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ko : vh,
        this.isPropagationStopped = vh,
        this
    }
    return pe(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var r = this.nativeEvent;
            r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            this.isDefaultPrevented = ko)
        },
        stopPropagation: function() {
            var r = this.nativeEvent;
            r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            this.isPropagationStopped = ko)
        },
        persist: function() {},
        isPersistent: ko
    }),
    t
}
var Ms = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Qc = ut(Ms), io = pe({}, Ms, {
    view: 0,
    detail: 0
}), Q0 = ut(io), Ll, $l, Xs, Va = pe({}, io, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Yc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Xs && (Xs && e.type === "mousemove" ? (Ll = e.screenX - Xs.screenX,
        $l = e.screenY - Xs.screenY) : $l = Ll = 0,
        Xs = e),
        Ll)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : $l
    }
}), yh = ut(Va), Y0 = pe({}, Va, {
    dataTransfer: 0
}), X0 = ut(Y0), Z0 = pe({}, io, {
    relatedTarget: 0
}), Dl = ut(Z0), ew = pe({}, Ms, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), tw = ut(ew), rw = pe({}, Ms, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), nw = ut(rw), sw = pe({}, Ms, {
    data: 0
}), wh = ut(sw), iw = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, ow = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, aw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function lw(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = aw[e]) ? !!t[e] : !1
}
function Yc() {
    return lw
}
var uw = pe({}, io, {
    key: function(e) {
        if (e.key) {
            var t = iw[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Qo(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ow[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Yc,
    charCode: function(e) {
        return e.type === "keypress" ? Qo(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Qo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , cw = ut(uw)
  , dw = pe({}, Va, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , bh = ut(dw)
  , hw = pe({}, io, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Yc
})
  , fw = ut(hw)
  , pw = pe({}, Ms, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , mw = ut(pw)
  , gw = pe({}, Va, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , vw = ut(gw)
  , yw = [9, 13, 27, 32]
  , Xc = ur && "CompositionEvent"in window
  , fi = null;
ur && "documentMode"in document && (fi = document.documentMode);
var ww = ur && "TextEvent"in window && !fi
  , _m = ur && (!Xc || fi && 8 < fi && 11 >= fi)
  , xh = " "
  , _h = !1;
function Sm(e, t) {
    switch (e) {
    case "keyup":
        return yw.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function km(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var ts = !1;
function bw(e, t) {
    switch (e) {
    case "compositionend":
        return km(t);
    case "keypress":
        return t.which !== 32 ? null : (_h = !0,
        xh);
    case "textInput":
        return e = t.data,
        e === xh && _h ? null : e;
    default:
        return null
    }
}
function xw(e, t) {
    if (ts)
        return e === "compositionend" || !Xc && Sm(e, t) ? (e = xm(),
        Jo = Jc = Mr = null,
        ts = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return _m && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var _w = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Sh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!_w[e.type] : t === "textarea"
}
function Em(e, t, r, n) {
    rm(n),
    t = ga(t, "onChange"),
    0 < t.length && (r = new Qc("onChange","change",null,r,n),
    e.push({
        event: r,
        listeners: t
    }))
}
var pi = null
  , Oi = null;
function Sw(e) {
    $m(e, 0)
}
function Ka(e) {
    var t = ss(e);
    if (Jp(t))
        return e
}
function kw(e, t) {
    if (e === "change")
        return t
}
var Tm = !1;
if (ur) {
    var Ml;
    if (ur) {
        var Ul = "oninput"in document;
        if (!Ul) {
            var kh = document.createElement("div");
            kh.setAttribute("oninput", "return;"),
            Ul = typeof kh.oninput == "function"
        }
        Ml = Ul
    } else
        Ml = !1;
    Tm = Ml && (!document.documentMode || 9 < document.documentMode)
}
function Eh() {
    pi && (pi.detachEvent("onpropertychange", Cm),
    Oi = pi = null)
}
function Cm(e) {
    if (e.propertyName === "value" && Ka(Oi)) {
        var t = [];
        Em(t, Oi, e, Wc(e)),
        om(Sw, t)
    }
}
function Ew(e, t, r) {
    e === "focusin" ? (Eh(),
    pi = t,
    Oi = r,
    pi.attachEvent("onpropertychange", Cm)) : e === "focusout" && Eh()
}
function Tw(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Ka(Oi)
}
function Cw(e, t) {
    if (e === "click")
        return Ka(t)
}
function Pw(e, t) {
    if (e === "input" || e === "change")
        return Ka(t)
}
function Rw(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var It = typeof Object.is == "function" ? Object.is : Rw;
function Ni(e, t) {
    if (It(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var r = Object.keys(e)
      , n = Object.keys(t);
    if (r.length !== n.length)
        return !1;
    for (n = 0; n < r.length; n++) {
        var s = r[n];
        if (!pu.call(t, s) || !It(e[s], t[s]))
            return !1
    }
    return !0
}
function Th(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Ch(e, t) {
    var r = Th(e);
    e = 0;
    for (var n; r; ) {
        if (r.nodeType === 3) {
            if (n = e + r.textContent.length,
            e <= t && n >= t)
                return {
                    node: r,
                    offset: t - e
                };
            e = n
        }
        e: {
            for (; r; ) {
                if (r.nextSibling) {
                    r = r.nextSibling;
                    break e
                }
                r = r.parentNode
            }
            r = void 0
        }
        r = Th(r)
    }
}
function Pm(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Pm(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Rm() {
    for (var e = window, t = ua(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var r = typeof t.contentWindow.location.href == "string"
        } catch {
            r = !1
        }
        if (r)
            e = t.contentWindow;
        else
            break;
        t = ua(e.document)
    }
    return t
}
function Zc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Aw(e) {
    var t = Rm()
      , r = e.focusedElem
      , n = e.selectionRange;
    if (t !== r && r && r.ownerDocument && Pm(r.ownerDocument.documentElement, r)) {
        if (n !== null && Zc(r)) {
            if (t = n.start,
            e = n.end,
            e === void 0 && (e = t),
            "selectionStart"in r)
                r.selectionStart = t,
                r.selectionEnd = Math.min(e, r.value.length);
            else if (e = (t = r.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var s = r.textContent.length
                  , i = Math.min(n.start, s);
                n = n.end === void 0 ? i : Math.min(n.end, s),
                !e.extend && i > n && (s = n,
                n = i,
                i = s),
                s = Ch(r, i);
                var o = Ch(r, n);
                s && o && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                t.setStart(s.node, s.offset),
                e.removeAllRanges(),
                i > n ? (e.addRange(t),
                e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = r; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof r.focus == "function" && r.focus(),
        r = 0; r < t.length; r++)
            e = t[r],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Ow = ur && "documentMode"in document && 11 >= document.documentMode
  , rs = null
  , ju = null
  , mi = null
  , Iu = !1;
function Ph(e, t, r) {
    var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Iu || rs == null || rs !== ua(n) || (n = rs,
    "selectionStart"in n && Zc(n) ? n = {
        start: n.selectionStart,
        end: n.selectionEnd
    } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(),
    n = {
        anchorNode: n.anchorNode,
        anchorOffset: n.anchorOffset,
        focusNode: n.focusNode,
        focusOffset: n.focusOffset
    }),
    mi && Ni(mi, n) || (mi = n,
    n = ga(ju, "onSelect"),
    0 < n.length && (t = new Qc("onSelect","select",null,t,r),
    e.push({
        event: t,
        listeners: n
    }),
    t.target = rs)))
}
function Eo(e, t) {
    var r = {};
    return r[e.toLowerCase()] = t.toLowerCase(),
    r["Webkit" + e] = "webkit" + t,
    r["Moz" + e] = "moz" + t,
    r
}
var ns = {
    animationend: Eo("Animation", "AnimationEnd"),
    animationiteration: Eo("Animation", "AnimationIteration"),
    animationstart: Eo("Animation", "AnimationStart"),
    transitionend: Eo("Transition", "TransitionEnd")
}
  , Fl = {}
  , Am = {};
ur && (Am = document.createElement("div").style,
"AnimationEvent"in window || (delete ns.animationend.animation,
delete ns.animationiteration.animation,
delete ns.animationstart.animation),
"TransitionEvent"in window || delete ns.transitionend.transition);
function qa(e) {
    if (Fl[e])
        return Fl[e];
    if (!ns[e])
        return e;
    var t = ns[e], r;
    for (r in t)
        if (t.hasOwnProperty(r) && r in Am)
            return Fl[e] = t[r];
    return e
}
var Om = qa("animationend")
  , Nm = qa("animationiteration")
  , jm = qa("animationstart")
  , Im = qa("transitionend")
  , Lm = new Map
  , Rh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function tn(e, t) {
    Lm.set(e, t),
    jn(t, [e])
}
for (var Bl = 0; Bl < Rh.length; Bl++) {
    var zl = Rh[Bl]
      , Nw = zl.toLowerCase()
      , jw = zl[0].toUpperCase() + zl.slice(1);
    tn(Nw, "on" + jw)
}
tn(Om, "onAnimationEnd");
tn(Nm, "onAnimationIteration");
tn(jm, "onAnimationStart");
tn("dblclick", "onDoubleClick");
tn("focusin", "onFocus");
tn("focusout", "onBlur");
tn(Im, "onTransitionEnd");
Ps("onMouseEnter", ["mouseout", "mouseover"]);
Ps("onMouseLeave", ["mouseout", "mouseover"]);
Ps("onPointerEnter", ["pointerout", "pointerover"]);
Ps("onPointerLeave", ["pointerout", "pointerover"]);
jn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
jn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
jn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
jn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
jn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var li = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Iw = new Set("cancel close invalid load scroll toggle".split(" ").concat(li));
function Ah(e, t, r) {
    var n = e.type || "unknown-event";
    e.currentTarget = r,
    N0(n, t, void 0, e),
    e.currentTarget = null
}
function $m(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
        var n = e[r]
          , s = n.event;
        n = n.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = n.length - 1; 0 <= o; o--) {
                    var a = n[o]
                      , l = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    l !== i && s.isPropagationStopped())
                        break e;
                    Ah(s, a, u),
                    i = l
                }
            else
                for (o = 0; o < n.length; o++) {
                    if (a = n[o],
                    l = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    l !== i && s.isPropagationStopped())
                        break e;
                    Ah(s, a, u),
                    i = l
                }
        }
    }
    if (da)
        throw e = Ru,
        da = !1,
        Ru = null,
        e
}
function le(e, t) {
    var r = t[Uu];
    r === void 0 && (r = t[Uu] = new Set);
    var n = e + "__bubble";
    r.has(n) || (Dm(t, e, 2, !1),
    r.add(n))
}
function Hl(e, t, r) {
    var n = 0;
    t && (n |= 4),
    Dm(r, e, n, t)
}
var To = "_reactListening" + Math.random().toString(36).slice(2);
function ji(e) {
    if (!e[To]) {
        e[To] = !0,
        Wp.forEach(function(r) {
            r !== "selectionchange" && (Iw.has(r) || Hl(r, !1, e),
            Hl(r, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[To] || (t[To] = !0,
        Hl("selectionchange", !1, t))
    }
}
function Dm(e, t, r, n) {
    switch (bm(t)) {
    case 1:
        var s = G0;
        break;
    case 4:
        s = J0;
        break;
    default:
        s = Gc
    }
    r = s.bind(null, t, r, e),
    s = void 0,
    !Pu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0),
    n ? s !== void 0 ? e.addEventListener(t, r, {
        capture: !0,
        passive: s
    }) : e.addEventListener(t, r, !0) : s !== void 0 ? e.addEventListener(t, r, {
        passive: s
    }) : e.addEventListener(t, r, !1)
}
function Wl(e, t, r, n, s) {
    var i = n;
    if (!(t & 1) && !(t & 2) && n !== null)
        e: for (; ; ) {
            if (n === null)
                return;
            var o = n.tag;
            if (o === 3 || o === 4) {
                var a = n.stateNode.containerInfo;
                if (a === s || a.nodeType === 8 && a.parentNode === s)
                    break;
                if (o === 4)
                    for (o = n.return; o !== null; ) {
                        var l = o.tag;
                        if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo,
                        l === s || l.nodeType === 8 && l.parentNode === s))
                            return;
                        o = o.return
                    }
                for (; a !== null; ) {
                    if (o = pn(a),
                    o === null)
                        return;
                    if (l = o.tag,
                    l === 5 || l === 6) {
                        n = i = o;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            n = n.return
        }
    om(function() {
        var u = i
          , c = Wc(r)
          , d = [];
        e: {
            var f = Lm.get(e);
            if (f !== void 0) {
                var h = Qc
                  , y = e;
                switch (e) {
                case "keypress":
                    if (Qo(r) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    h = cw;
                    break;
                case "focusin":
                    y = "focus",
                    h = Dl;
                    break;
                case "focusout":
                    y = "blur",
                    h = Dl;
                    break;
                case "beforeblur":
                case "afterblur":
                    h = Dl;
                    break;
                case "click":
                    if (r.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    h = yh;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    h = X0;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    h = fw;
                    break;
                case Om:
                case Nm:
                case jm:
                    h = tw;
                    break;
                case Im:
                    h = mw;
                    break;
                case "scroll":
                    h = Q0;
                    break;
                case "wheel":
                    h = vw;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    h = nw;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    h = bh
                }
                var g = (t & 4) !== 0
                  , w = !g && e === "scroll"
                  , m = g ? f !== null ? f + "Capture" : null : f;
                g = [];
                for (var p = u, v; p !== null; ) {
                    v = p;
                    var x = v.stateNode;
                    if (v.tag === 5 && x !== null && (v = x,
                    m !== null && (x = Ci(p, m),
                    x != null && g.push(Ii(p, x, v)))),
                    w)
                        break;
                    p = p.return
                }
                0 < g.length && (f = new h(f,y,null,r,c),
                d.push({
                    event: f,
                    listeners: g
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover",
                h = e === "mouseout" || e === "pointerout",
                f && r !== Tu && (y = r.relatedTarget || r.fromElement) && (pn(y) || y[cr]))
                    break e;
                if ((h || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window,
                h ? (y = r.relatedTarget || r.toElement,
                h = u,
                y = y ? pn(y) : null,
                y !== null && (w = In(y),
                y !== w || y.tag !== 5 && y.tag !== 6) && (y = null)) : (h = null,
                y = u),
                h !== y)) {
                    if (g = yh,
                    x = "onMouseLeave",
                    m = "onMouseEnter",
                    p = "mouse",
                    (e === "pointerout" || e === "pointerover") && (g = bh,
                    x = "onPointerLeave",
                    m = "onPointerEnter",
                    p = "pointer"),
                    w = h == null ? f : ss(h),
                    v = y == null ? f : ss(y),
                    f = new g(x,p + "leave",h,r,c),
                    f.target = w,
                    f.relatedTarget = v,
                    x = null,
                    pn(c) === u && (g = new g(m,p + "enter",y,r,c),
                    g.target = v,
                    g.relatedTarget = w,
                    x = g),
                    w = x,
                    h && y)
                        t: {
                            for (g = h,
                            m = y,
                            p = 0,
                            v = g; v; v = zn(v))
                                p++;
                            for (v = 0,
                            x = m; x; x = zn(x))
                                v++;
                            for (; 0 < p - v; )
                                g = zn(g),
                                p--;
                            for (; 0 < v - p; )
                                m = zn(m),
                                v--;
                            for (; p--; ) {
                                if (g === m || m !== null && g === m.alternate)
                                    break t;
                                g = zn(g),
                                m = zn(m)
                            }
                            g = null
                        }
                    else
                        g = null;
                    h !== null && Oh(d, f, h, g, !1),
                    y !== null && w !== null && Oh(d, w, y, g, !0)
                }
            }
            e: {
                if (f = u ? ss(u) : window,
                h = f.nodeName && f.nodeName.toLowerCase(),
                h === "select" || h === "input" && f.type === "file")
                    var S = kw;
                else if (Sh(f))
                    if (Tm)
                        S = Pw;
                    else {
                        S = Tw;
                        var k = Ew
                    }
                else
                    (h = f.nodeName) && h.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (S = Cw);
                if (S && (S = S(e, u))) {
                    Em(d, S, r, c);
                    break e
                }
                k && k(e, f, u),
                e === "focusout" && (k = f._wrapperState) && k.controlled && f.type === "number" && xu(f, "number", f.value)
            }
            switch (k = u ? ss(u) : window,
            e) {
            case "focusin":
                (Sh(k) || k.contentEditable === "true") && (rs = k,
                ju = u,
                mi = null);
                break;
            case "focusout":
                mi = ju = rs = null;
                break;
            case "mousedown":
                Iu = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Iu = !1,
                Ph(d, r, c);
                break;
            case "selectionchange":
                if (Ow)
                    break;
            case "keydown":
            case "keyup":
                Ph(d, r, c)
            }
            var E;
            if (Xc)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var R = "onCompositionStart";
                        break e;
                    case "compositionend":
                        R = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        R = "onCompositionUpdate";
                        break e
                    }
                    R = void 0
                }
            else
                ts ? Sm(e, r) && (R = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (R = "onCompositionStart");
            R && (_m && r.locale !== "ko" && (ts || R !== "onCompositionStart" ? R === "onCompositionEnd" && ts && (E = xm()) : (Mr = c,
            Jc = "value"in Mr ? Mr.value : Mr.textContent,
            ts = !0)),
            k = ga(u, R),
            0 < k.length && (R = new wh(R,e,null,r,c),
            d.push({
                event: R,
                listeners: k
            }),
            E ? R.data = E : (E = km(r),
            E !== null && (R.data = E)))),
            (E = ww ? bw(e, r) : xw(e, r)) && (u = ga(u, "onBeforeInput"),
            0 < u.length && (c = new wh("onBeforeInput","beforeinput",null,r,c),
            d.push({
                event: c,
                listeners: u
            }),
            c.data = E))
        }
        $m(d, t)
    })
}
function Ii(e, t, r) {
    return {
        instance: e,
        listener: t,
        currentTarget: r
    }
}
function ga(e, t) {
    for (var r = t + "Capture", n = []; e !== null; ) {
        var s = e
          , i = s.stateNode;
        s.tag === 5 && i !== null && (s = i,
        i = Ci(e, r),
        i != null && n.unshift(Ii(e, i, s)),
        i = Ci(e, t),
        i != null && n.push(Ii(e, i, s))),
        e = e.return
    }
    return n
}
function zn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Oh(e, t, r, n, s) {
    for (var i = t._reactName, o = []; r !== null && r !== n; ) {
        var a = r
          , l = a.alternate
          , u = a.stateNode;
        if (l !== null && l === n)
            break;
        a.tag === 5 && u !== null && (a = u,
        s ? (l = Ci(r, i),
        l != null && o.unshift(Ii(r, l, a))) : s || (l = Ci(r, i),
        l != null && o.push(Ii(r, l, a)))),
        r = r.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var Lw = /\r\n?/g
  , $w = /\u0000|\uFFFD/g;
function Nh(e) {
    return (typeof e == "string" ? e : "" + e).replace(Lw, `
`).replace($w, "")
}
function Co(e, t, r) {
    if (t = Nh(t),
    Nh(e) !== t && r)
        throw Error(A(425))
}
function va() {}
var Lu = null
  , $u = null;
function Du(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Mu = typeof setTimeout == "function" ? setTimeout : void 0
  , Dw = typeof clearTimeout == "function" ? clearTimeout : void 0
  , jh = typeof Promise == "function" ? Promise : void 0
  , Mw = typeof queueMicrotask == "function" ? queueMicrotask : typeof jh < "u" ? function(e) {
    return jh.resolve(null).then(e).catch(Uw)
}
: Mu;
function Uw(e) {
    setTimeout(function() {
        throw e
    })
}
function Vl(e, t) {
    var r = t
      , n = 0;
    do {
        var s = r.nextSibling;
        if (e.removeChild(r),
        s && s.nodeType === 8)
            if (r = s.data,
            r === "/$") {
                if (n === 0) {
                    e.removeChild(s),
                    Ai(t);
                    return
                }
                n--
            } else
                r !== "$" && r !== "$?" && r !== "$!" || n++;
        r = s
    } while (r);
    Ai(t)
}
function Wr(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Ih(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var r = e.data;
            if (r === "$" || r === "$!" || r === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                r === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Us = Math.random().toString(36).slice(2)
  , Kt = "__reactFiber$" + Us
  , Li = "__reactProps$" + Us
  , cr = "__reactContainer$" + Us
  , Uu = "__reactEvents$" + Us
  , Fw = "__reactListeners$" + Us
  , Bw = "__reactHandles$" + Us;
function pn(e) {
    var t = e[Kt];
    if (t)
        return t;
    for (var r = e.parentNode; r; ) {
        if (t = r[cr] || r[Kt]) {
            if (r = t.alternate,
            t.child !== null || r !== null && r.child !== null)
                for (e = Ih(e); e !== null; ) {
                    if (r = e[Kt])
                        return r;
                    e = Ih(e)
                }
            return t
        }
        e = r,
        r = e.parentNode
    }
    return null
}
function oo(e) {
    return e = e[Kt] || e[cr],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function ss(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(A(33))
}
function Ga(e) {
    return e[Li] || null
}
var Fu = []
  , is = -1;
function rn(e) {
    return {
        current: e
    }
}
function ue(e) {
    0 > is || (e.current = Fu[is],
    Fu[is] = null,
    is--)
}
function oe(e, t) {
    is++,
    Fu[is] = e.current,
    e.current = t
}
var Qr = {}
  , Ue = rn(Qr)
  , Qe = rn(!1)
  , Cn = Qr;
function Rs(e, t) {
    var r = e.type.contextTypes;
    if (!r)
        return Qr;
    var n = e.stateNode;
    if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
        return n.__reactInternalMemoizedMaskedChildContext;
    var s = {}, i;
    for (i in r)
        s[i] = t[i];
    return n && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = s),
    s
}
function Ye(e) {
    return e = e.childContextTypes,
    e != null
}
function ya() {
    ue(Qe),
    ue(Ue)
}
function Lh(e, t, r) {
    if (Ue.current !== Qr)
        throw Error(A(168));
    oe(Ue, t),
    oe(Qe, r)
}
function Mm(e, t, r) {
    var n = e.stateNode;
    if (t = t.childContextTypes,
    typeof n.getChildContext != "function")
        return r;
    n = n.getChildContext();
    for (var s in n)
        if (!(s in t))
            throw Error(A(108, E0(e) || "Unknown", s));
    return pe({}, r, n)
}
function wa(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Qr,
    Cn = Ue.current,
    oe(Ue, e),
    oe(Qe, Qe.current),
    !0
}
function $h(e, t, r) {
    var n = e.stateNode;
    if (!n)
        throw Error(A(169));
    r ? (e = Mm(e, t, Cn),
    n.__reactInternalMemoizedMergedChildContext = e,
    ue(Qe),
    ue(Ue),
    oe(Ue, e)) : ue(Qe),
    oe(Qe, r)
}
var sr = null
  , Ja = !1
  , Kl = !1;
function Um(e) {
    sr === null ? sr = [e] : sr.push(e)
}
function zw(e) {
    Ja = !0,
    Um(e)
}
function nn() {
    if (!Kl && sr !== null) {
        Kl = !0;
        var e = 0
          , t = ne;
        try {
            var r = sr;
            for (ne = 1; e < r.length; e++) {
                var n = r[e];
                do
                    n = n(!0);
                while (n !== null)
            }
            sr = null,
            Ja = !1
        } catch (s) {
            throw sr !== null && (sr = sr.slice(e + 1)),
            cm(Vc, nn),
            s
        } finally {
            ne = t,
            Kl = !1
        }
    }
    return null
}
var os = []
  , as = 0
  , ba = null
  , xa = 0
  , ft = []
  , pt = 0
  , Pn = null
  , or = 1
  , ar = "";
function cn(e, t) {
    os[as++] = xa,
    os[as++] = ba,
    ba = e,
    xa = t
}
function Fm(e, t, r) {
    ft[pt++] = or,
    ft[pt++] = ar,
    ft[pt++] = Pn,
    Pn = e;
    var n = or;
    e = ar;
    var s = 32 - Nt(n) - 1;
    n &= ~(1 << s),
    r += 1;
    var i = 32 - Nt(t) + s;
    if (30 < i) {
        var o = s - s % 5;
        i = (n & (1 << o) - 1).toString(32),
        n >>= o,
        s -= o,
        or = 1 << 32 - Nt(t) + s | r << s | n,
        ar = i + e
    } else
        or = 1 << i | r << s | n,
        ar = e
}
function ed(e) {
    e.return !== null && (cn(e, 1),
    Fm(e, 1, 0))
}
function td(e) {
    for (; e === ba; )
        ba = os[--as],
        os[as] = null,
        xa = os[--as],
        os[as] = null;
    for (; e === Pn; )
        Pn = ft[--pt],
        ft[pt] = null,
        ar = ft[--pt],
        ft[pt] = null,
        or = ft[--pt],
        ft[pt] = null
}
var it = null
  , st = null
  , de = !1
  , Ot = null;
function Bm(e, t) {
    var r = mt(5, null, null, 0);
    r.elementType = "DELETED",
    r.stateNode = t,
    r.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [r],
    e.flags |= 16) : t.push(r)
}
function Dh(e, t) {
    switch (e.tag) {
    case 5:
        var r = e.type;
        return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        it = e,
        st = Wr(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        it = e,
        st = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (r = Pn !== null ? {
            id: or,
            overflow: ar
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: r,
            retryLane: 1073741824
        },
        r = mt(18, null, null, 0),
        r.stateNode = t,
        r.return = e,
        e.child = r,
        it = e,
        st = null,
        !0) : !1;
    default:
        return !1
    }
}
function Bu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function zu(e) {
    if (de) {
        var t = st;
        if (t) {
            var r = t;
            if (!Dh(e, t)) {
                if (Bu(e))
                    throw Error(A(418));
                t = Wr(r.nextSibling);
                var n = it;
                t && Dh(e, t) ? Bm(n, r) : (e.flags = e.flags & -4097 | 2,
                de = !1,
                it = e)
            }
        } else {
            if (Bu(e))
                throw Error(A(418));
            e.flags = e.flags & -4097 | 2,
            de = !1,
            it = e
        }
    }
}
function Mh(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    it = e
}
function Po(e) {
    if (e !== it)
        return !1;
    if (!de)
        return Mh(e),
        de = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Du(e.type, e.memoizedProps)),
    t && (t = st)) {
        if (Bu(e))
            throw zm(),
            Error(A(418));
        for (; t; )
            Bm(e, t),
            t = Wr(t.nextSibling)
    }
    if (Mh(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(A(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var r = e.data;
                    if (r === "/$") {
                        if (t === 0) {
                            st = Wr(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        r !== "$" && r !== "$!" && r !== "$?" || t++
                }
                e = e.nextSibling
            }
            st = null
        }
    } else
        st = it ? Wr(e.stateNode.nextSibling) : null;
    return !0
}
function zm() {
    for (var e = st; e; )
        e = Wr(e.nextSibling)
}
function As() {
    st = it = null,
    de = !1
}
function rd(e) {
    Ot === null ? Ot = [e] : Ot.push(e)
}
var Hw = mr.ReactCurrentBatchConfig;
function Zs(e, t, r) {
    if (e = r.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (r._owner) {
            if (r = r._owner,
            r) {
                if (r.tag !== 1)
                    throw Error(A(309));
                var n = r.stateNode
            }
            if (!n)
                throw Error(A(147, e));
            var s = n
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
                var a = s.refs;
                o === null ? delete a[i] : a[i] = o
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(A(284));
        if (!r._owner)
            throw Error(A(290, e))
    }
    return e
}
function Ro(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Uh(e) {
    var t = e._init;
    return t(e._payload)
}
function Hm(e) {
    function t(m, p) {
        if (e) {
            var v = m.deletions;
            v === null ? (m.deletions = [p],
            m.flags |= 16) : v.push(p)
        }
    }
    function r(m, p) {
        if (!e)
            return null;
        for (; p !== null; )
            t(m, p),
            p = p.sibling;
        return null
    }
    function n(m, p) {
        for (m = new Map; p !== null; )
            p.key !== null ? m.set(p.key, p) : m.set(p.index, p),
            p = p.sibling;
        return m
    }
    function s(m, p) {
        return m = Gr(m, p),
        m.index = 0,
        m.sibling = null,
        m
    }
    function i(m, p, v) {
        return m.index = v,
        e ? (v = m.alternate,
        v !== null ? (v = v.index,
        v < p ? (m.flags |= 2,
        p) : v) : (m.flags |= 2,
        p)) : (m.flags |= 1048576,
        p)
    }
    function o(m) {
        return e && m.alternate === null && (m.flags |= 2),
        m
    }
    function a(m, p, v, x) {
        return p === null || p.tag !== 6 ? (p = Zl(v, m.mode, x),
        p.return = m,
        p) : (p = s(p, v),
        p.return = m,
        p)
    }
    function l(m, p, v, x) {
        var S = v.type;
        return S === es ? c(m, p, v.props.children, x, v.key) : p !== null && (p.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Cr && Uh(S) === p.type) ? (x = s(p, v.props),
        x.ref = Zs(m, p, v),
        x.return = m,
        x) : (x = na(v.type, v.key, v.props, null, m.mode, x),
        x.ref = Zs(m, p, v),
        x.return = m,
        x)
    }
    function u(m, p, v, x) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== v.containerInfo || p.stateNode.implementation !== v.implementation ? (p = eu(v, m.mode, x),
        p.return = m,
        p) : (p = s(p, v.children || []),
        p.return = m,
        p)
    }
    function c(m, p, v, x, S) {
        return p === null || p.tag !== 7 ? (p = En(v, m.mode, x, S),
        p.return = m,
        p) : (p = s(p, v),
        p.return = m,
        p)
    }
    function d(m, p, v) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = Zl("" + p, m.mode, v),
            p.return = m,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case yo:
                return v = na(p.type, p.key, p.props, null, m.mode, v),
                v.ref = Zs(m, null, p),
                v.return = m,
                v;
            case Zn:
                return p = eu(p, m.mode, v),
                p.return = m,
                p;
            case Cr:
                var x = p._init;
                return d(m, x(p._payload), v)
            }
            if (oi(p) || Gs(p))
                return p = En(p, m.mode, v, null),
                p.return = m,
                p;
            Ro(m, p)
        }
        return null
    }
    function f(m, p, v, x) {
        var S = p !== null ? p.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return S !== null ? null : a(m, p, "" + v, x);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case yo:
                return v.key === S ? l(m, p, v, x) : null;
            case Zn:
                return v.key === S ? u(m, p, v, x) : null;
            case Cr:
                return S = v._init,
                f(m, p, S(v._payload), x)
            }
            if (oi(v) || Gs(v))
                return S !== null ? null : c(m, p, v, x, null);
            Ro(m, v)
        }
        return null
    }
    function h(m, p, v, x, S) {
        if (typeof x == "string" && x !== "" || typeof x == "number")
            return m = m.get(v) || null,
            a(p, m, "" + x, S);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case yo:
                return m = m.get(x.key === null ? v : x.key) || null,
                l(p, m, x, S);
            case Zn:
                return m = m.get(x.key === null ? v : x.key) || null,
                u(p, m, x, S);
            case Cr:
                var k = x._init;
                return h(m, p, v, k(x._payload), S)
            }
            if (oi(x) || Gs(x))
                return m = m.get(v) || null,
                c(p, m, x, S, null);
            Ro(p, x)
        }
        return null
    }
    function y(m, p, v, x) {
        for (var S = null, k = null, E = p, R = p = 0, O = null; E !== null && R < v.length; R++) {
            E.index > R ? (O = E,
            E = null) : O = E.sibling;
            var j = f(m, E, v[R], x);
            if (j === null) {
                E === null && (E = O);
                break
            }
            e && E && j.alternate === null && t(m, E),
            p = i(j, p, R),
            k === null ? S = j : k.sibling = j,
            k = j,
            E = O
        }
        if (R === v.length)
            return r(m, E),
            de && cn(m, R),
            S;
        if (E === null) {
            for (; R < v.length; R++)
                E = d(m, v[R], x),
                E !== null && (p = i(E, p, R),
                k === null ? S = E : k.sibling = E,
                k = E);
            return de && cn(m, R),
            S
        }
        for (E = n(m, E); R < v.length; R++)
            O = h(E, m, R, v[R], x),
            O !== null && (e && O.alternate !== null && E.delete(O.key === null ? R : O.key),
            p = i(O, p, R),
            k === null ? S = O : k.sibling = O,
            k = O);
        return e && E.forEach(function(z) {
            return t(m, z)
        }),
        de && cn(m, R),
        S
    }
    function g(m, p, v, x) {
        var S = Gs(v);
        if (typeof S != "function")
            throw Error(A(150));
        if (v = S.call(v),
        v == null)
            throw Error(A(151));
        for (var k = S = null, E = p, R = p = 0, O = null, j = v.next(); E !== null && !j.done; R++,
        j = v.next()) {
            E.index > R ? (O = E,
            E = null) : O = E.sibling;
            var z = f(m, E, j.value, x);
            if (z === null) {
                E === null && (E = O);
                break
            }
            e && E && z.alternate === null && t(m, E),
            p = i(z, p, R),
            k === null ? S = z : k.sibling = z,
            k = z,
            E = O
        }
        if (j.done)
            return r(m, E),
            de && cn(m, R),
            S;
        if (E === null) {
            for (; !j.done; R++,
            j = v.next())
                j = d(m, j.value, x),
                j !== null && (p = i(j, p, R),
                k === null ? S = j : k.sibling = j,
                k = j);
            return de && cn(m, R),
            S
        }
        for (E = n(m, E); !j.done; R++,
        j = v.next())
            j = h(E, m, R, j.value, x),
            j !== null && (e && j.alternate !== null && E.delete(j.key === null ? R : j.key),
            p = i(j, p, R),
            k === null ? S = j : k.sibling = j,
            k = j);
        return e && E.forEach(function(D) {
            return t(m, D)
        }),
        de && cn(m, R),
        S
    }
    function w(m, p, v, x) {
        if (typeof v == "object" && v !== null && v.type === es && v.key === null && (v = v.props.children),
        typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case yo:
                e: {
                    for (var S = v.key, k = p; k !== null; ) {
                        if (k.key === S) {
                            if (S = v.type,
                            S === es) {
                                if (k.tag === 7) {
                                    r(m, k.sibling),
                                    p = s(k, v.props.children),
                                    p.return = m,
                                    m = p;
                                    break e
                                }
                            } else if (k.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Cr && Uh(S) === k.type) {
                                r(m, k.sibling),
                                p = s(k, v.props),
                                p.ref = Zs(m, k, v),
                                p.return = m,
                                m = p;
                                break e
                            }
                            r(m, k);
                            break
                        } else
                            t(m, k);
                        k = k.sibling
                    }
                    v.type === es ? (p = En(v.props.children, m.mode, x, v.key),
                    p.return = m,
                    m = p) : (x = na(v.type, v.key, v.props, null, m.mode, x),
                    x.ref = Zs(m, p, v),
                    x.return = m,
                    m = x)
                }
                return o(m);
            case Zn:
                e: {
                    for (k = v.key; p !== null; ) {
                        if (p.key === k)
                            if (p.tag === 4 && p.stateNode.containerInfo === v.containerInfo && p.stateNode.implementation === v.implementation) {
                                r(m, p.sibling),
                                p = s(p, v.children || []),
                                p.return = m,
                                m = p;
                                break e
                            } else {
                                r(m, p);
                                break
                            }
                        else
                            t(m, p);
                        p = p.sibling
                    }
                    p = eu(v, m.mode, x),
                    p.return = m,
                    m = p
                }
                return o(m);
            case Cr:
                return k = v._init,
                w(m, p, k(v._payload), x)
            }
            if (oi(v))
                return y(m, p, v, x);
            if (Gs(v))
                return g(m, p, v, x);
            Ro(m, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
        p !== null && p.tag === 6 ? (r(m, p.sibling),
        p = s(p, v),
        p.return = m,
        m = p) : (r(m, p),
        p = Zl(v, m.mode, x),
        p.return = m,
        m = p),
        o(m)) : r(m, p)
    }
    return w
}
var Os = Hm(!0)
  , Wm = Hm(!1)
  , _a = rn(null)
  , Sa = null
  , ls = null
  , nd = null;
function sd() {
    nd = ls = Sa = null
}
function id(e) {
    var t = _a.current;
    ue(_a),
    e._currentValue = t
}
function Hu(e, t, r) {
    for (; e !== null; ) {
        var n = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
        e === r)
            break;
        e = e.return
    }
}
function ms(e, t) {
    Sa = e,
    nd = ls = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Je = !0),
    e.firstContext = null)
}
function vt(e) {
    var t = e._currentValue;
    if (nd !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        ls === null) {
            if (Sa === null)
                throw Error(A(308));
            ls = e,
            Sa.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            ls = ls.next = e;
    return t
}
var mn = null;
function od(e) {
    mn === null ? mn = [e] : mn.push(e)
}
function Vm(e, t, r, n) {
    var s = t.interleaved;
    return s === null ? (r.next = r,
    od(t)) : (r.next = s.next,
    s.next = r),
    t.interleaved = r,
    dr(e, n)
}
function dr(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t),
    r = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        r = e.alternate,
        r !== null && (r.childLanes |= t),
        r = e,
        e = e.return;
    return r.tag === 3 ? r.stateNode : null
}
var Pr = !1;
function ad(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Km(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function lr(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Vr(e, t, r) {
    var n = e.updateQueue;
    if (n === null)
        return null;
    if (n = n.shared,
    ee & 2) {
        var s = n.pending;
        return s === null ? t.next = t : (t.next = s.next,
        s.next = t),
        n.pending = t,
        dr(e, r)
    }
    return s = n.interleaved,
    s === null ? (t.next = t,
    od(n)) : (t.next = s.next,
    s.next = t),
    n.interleaved = t,
    dr(e, r)
}
function Yo(e, t, r) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (r & 4194240) !== 0)) {
        var n = t.lanes;
        n &= e.pendingLanes,
        r |= n,
        t.lanes = r,
        Kc(e, r)
    }
}
function Fh(e, t) {
    var r = e.updateQueue
      , n = e.alternate;
    if (n !== null && (n = n.updateQueue,
    r === n)) {
        var s = null
          , i = null;
        if (r = r.firstBaseUpdate,
        r !== null) {
            do {
                var o = {
                    eventTime: r.eventTime,
                    lane: r.lane,
                    tag: r.tag,
                    payload: r.payload,
                    callback: r.callback,
                    next: null
                };
                i === null ? s = i = o : i = i.next = o,
                r = r.next
            } while (r !== null);
            i === null ? s = i = t : i = i.next = t
        } else
            s = i = t;
        r = {
            baseState: n.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: i,
            shared: n.shared,
            effects: n.effects
        },
        e.updateQueue = r;
        return
    }
    e = r.lastBaseUpdate,
    e === null ? r.firstBaseUpdate = t : e.next = t,
    r.lastBaseUpdate = t
}
function ka(e, t, r, n) {
    var s = e.updateQueue;
    Pr = !1;
    var i = s.firstBaseUpdate
      , o = s.lastBaseUpdate
      , a = s.shared.pending;
    if (a !== null) {
        s.shared.pending = null;
        var l = a
          , u = l.next;
        l.next = null,
        o === null ? i = u : o.next = u,
        o = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        a = c.lastBaseUpdate,
        a !== o && (a === null ? c.firstBaseUpdate = u : a.next = u,
        c.lastBaseUpdate = l))
    }
    if (i !== null) {
        var d = s.baseState;
        o = 0,
        c = u = l = null,
        a = i;
        do {
            var f = a.lane
              , h = a.eventTime;
            if ((n & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: h,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var y = e
                      , g = a;
                    switch (f = t,
                    h = r,
                    g.tag) {
                    case 1:
                        if (y = g.payload,
                        typeof y == "function") {
                            d = y.call(h, d, f);
                            break e
                        }
                        d = y;
                        break e;
                    case 3:
                        y.flags = y.flags & -65537 | 128;
                    case 0:
                        if (y = g.payload,
                        f = typeof y == "function" ? y.call(h, d, f) : y,
                        f == null)
                            break e;
                        d = pe({}, d, f);
                        break e;
                    case 2:
                        Pr = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                f = s.effects,
                f === null ? s.effects = [a] : f.push(a))
            } else
                h = {
                    eventTime: h,
                    lane: f,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                c === null ? (u = c = h,
                l = d) : c = c.next = h,
                o |= f;
            if (a = a.next,
            a === null) {
                if (a = s.shared.pending,
                a === null)
                    break;
                f = a,
                a = f.next,
                f.next = null,
                s.lastBaseUpdate = f,
                s.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = d),
        s.baseState = l,
        s.firstBaseUpdate = u,
        s.lastBaseUpdate = c,
        t = s.shared.interleaved,
        t !== null) {
            s = t;
            do
                o |= s.lane,
                s = s.next;
            while (s !== t)
        } else
            i === null && (s.shared.lanes = 0);
        An |= o,
        e.lanes = o,
        e.memoizedState = d
    }
}
function Bh(e, t, r) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var n = e[t]
              , s = n.callback;
            if (s !== null) {
                if (n.callback = null,
                n = r,
                typeof s != "function")
                    throw Error(A(191, s));
                s.call(n)
            }
        }
}
var ao = {}
  , Jt = rn(ao)
  , $i = rn(ao)
  , Di = rn(ao);
function gn(e) {
    if (e === ao)
        throw Error(A(174));
    return e
}
function ld(e, t) {
    switch (oe(Di, t),
    oe($i, e),
    oe(Jt, ao),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Su(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Su(t, e)
    }
    ue(Jt),
    oe(Jt, t)
}
function Ns() {
    ue(Jt),
    ue($i),
    ue(Di)
}
function qm(e) {
    gn(Di.current);
    var t = gn(Jt.current)
      , r = Su(t, e.type);
    t !== r && (oe($i, e),
    oe(Jt, r))
}
function ud(e) {
    $i.current === e && (ue(Jt),
    ue($i))
}
var he = rn(0);
function Ea(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var r = t.memoizedState;
            if (r !== null && (r = r.dehydrated,
            r === null || r.data === "$?" || r.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var ql = [];
function cd() {
    for (var e = 0; e < ql.length; e++)
        ql[e]._workInProgressVersionPrimary = null;
    ql.length = 0
}
var Xo = mr.ReactCurrentDispatcher
  , Gl = mr.ReactCurrentBatchConfig
  , Rn = 0
  , fe = null
  , _e = null
  , Te = null
  , Ta = !1
  , gi = !1
  , Mi = 0
  , Ww = 0;
function Le() {
    throw Error(A(321))
}
function dd(e, t) {
    if (t === null)
        return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
        if (!It(e[r], t[r]))
            return !1;
    return !0
}
function hd(e, t, r, n, s, i) {
    if (Rn = i,
    fe = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Xo.current = e === null || e.memoizedState === null ? Gw : Jw,
    e = r(n, s),
    gi) {
        i = 0;
        do {
            if (gi = !1,
            Mi = 0,
            25 <= i)
                throw Error(A(301));
            i += 1,
            Te = _e = null,
            t.updateQueue = null,
            Xo.current = Qw,
            e = r(n, s)
        } while (gi)
    }
    if (Xo.current = Ca,
    t = _e !== null && _e.next !== null,
    Rn = 0,
    Te = _e = fe = null,
    Ta = !1,
    t)
        throw Error(A(300));
    return e
}
function fd() {
    var e = Mi !== 0;
    return Mi = 0,
    e
}
function Ft() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Te === null ? fe.memoizedState = Te = e : Te = Te.next = e,
    Te
}
function yt() {
    if (_e === null) {
        var e = fe.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = _e.next;
    var t = Te === null ? fe.memoizedState : Te.next;
    if (t !== null)
        Te = t,
        _e = e;
    else {
        if (e === null)
            throw Error(A(310));
        _e = e,
        e = {
            memoizedState: _e.memoizedState,
            baseState: _e.baseState,
            baseQueue: _e.baseQueue,
            queue: _e.queue,
            next: null
        },
        Te === null ? fe.memoizedState = Te = e : Te = Te.next = e
    }
    return Te
}
function Ui(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Jl(e) {
    var t = yt()
      , r = t.queue;
    if (r === null)
        throw Error(A(311));
    r.lastRenderedReducer = e;
    var n = _e
      , s = n.baseQueue
      , i = r.pending;
    if (i !== null) {
        if (s !== null) {
            var o = s.next;
            s.next = i.next,
            i.next = o
        }
        n.baseQueue = s = i,
        r.pending = null
    }
    if (s !== null) {
        i = s.next,
        n = n.baseState;
        var a = o = null
          , l = null
          , u = i;
        do {
            var c = u.lane;
            if ((Rn & c) === c)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                n = u.hasEagerState ? u.eagerState : e(n, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = d,
                o = n) : l = l.next = d,
                fe.lanes |= c,
                An |= c
            }
            u = u.next
        } while (u !== null && u !== i);
        l === null ? o = n : l.next = a,
        It(n, t.memoizedState) || (Je = !0),
        t.memoizedState = n,
        t.baseState = o,
        t.baseQueue = l,
        r.lastRenderedState = n
    }
    if (e = r.interleaved,
    e !== null) {
        s = e;
        do
            i = s.lane,
            fe.lanes |= i,
            An |= i,
            s = s.next;
        while (s !== e)
    } else
        s === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch]
}
function Ql(e) {
    var t = yt()
      , r = t.queue;
    if (r === null)
        throw Error(A(311));
    r.lastRenderedReducer = e;
    var n = r.dispatch
      , s = r.pending
      , i = t.memoizedState;
    if (s !== null) {
        r.pending = null;
        var o = s = s.next;
        do
            i = e(i, o.action),
            o = o.next;
        while (o !== s);
        It(i, t.memoizedState) || (Je = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        r.lastRenderedState = i
    }
    return [i, n]
}
function Gm() {}
function Jm(e, t) {
    var r = fe
      , n = yt()
      , s = t()
      , i = !It(n.memoizedState, s);
    if (i && (n.memoizedState = s,
    Je = !0),
    n = n.queue,
    pd(Xm.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || i || Te !== null && Te.memoizedState.tag & 1) {
        if (r.flags |= 2048,
        Fi(9, Ym.bind(null, r, n, s, t), void 0, null),
        Ce === null)
            throw Error(A(349));
        Rn & 30 || Qm(r, t, s)
    }
    return s
}
function Qm(e, t, r) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: r
    },
    t = fe.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    fe.updateQueue = t,
    t.stores = [e]) : (r = t.stores,
    r === null ? t.stores = [e] : r.push(e))
}
function Ym(e, t, r, n) {
    t.value = r,
    t.getSnapshot = n,
    Zm(t) && eg(e)
}
function Xm(e, t, r) {
    return r(function() {
        Zm(t) && eg(e)
    })
}
function Zm(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var r = t();
        return !It(e, r)
    } catch {
        return !0
    }
}
function eg(e) {
    var t = dr(e, 1);
    t !== null && jt(t, e, 1, -1)
}
function zh(e) {
    var t = Ft();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ui,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = qw.bind(null, fe, e),
    [t.memoizedState, e]
}
function Fi(e, t, r, n) {
    return e = {
        tag: e,
        create: t,
        destroy: r,
        deps: n,
        next: null
    },
    t = fe.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    fe.updateQueue = t,
    t.lastEffect = e.next = e) : (r = t.lastEffect,
    r === null ? t.lastEffect = e.next = e : (n = r.next,
    r.next = e,
    e.next = n,
    t.lastEffect = e)),
    e
}
function tg() {
    return yt().memoizedState
}
function Zo(e, t, r, n) {
    var s = Ft();
    fe.flags |= e,
    s.memoizedState = Fi(1 | t, r, void 0, n === void 0 ? null : n)
}
function Qa(e, t, r, n) {
    var s = yt();
    n = n === void 0 ? null : n;
    var i = void 0;
    if (_e !== null) {
        var o = _e.memoizedState;
        if (i = o.destroy,
        n !== null && dd(n, o.deps)) {
            s.memoizedState = Fi(t, r, i, n);
            return
        }
    }
    fe.flags |= e,
    s.memoizedState = Fi(1 | t, r, i, n)
}
function Hh(e, t) {
    return Zo(8390656, 8, e, t)
}
function pd(e, t) {
    return Qa(2048, 8, e, t)
}
function rg(e, t) {
    return Qa(4, 2, e, t)
}
function ng(e, t) {
    return Qa(4, 4, e, t)
}
function sg(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function ig(e, t, r) {
    return r = r != null ? r.concat([e]) : null,
    Qa(4, 4, sg.bind(null, t, e), r)
}
function md() {}
function og(e, t) {
    var r = yt();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && dd(t, n[1]) ? n[0] : (r.memoizedState = [e, t],
    e)
}
function ag(e, t) {
    var r = yt();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && dd(t, n[1]) ? n[0] : (e = e(),
    r.memoizedState = [e, t],
    e)
}
function lg(e, t, r) {
    return Rn & 21 ? (It(r, t) || (r = fm(),
    fe.lanes |= r,
    An |= r,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Je = !0),
    e.memoizedState = r)
}
function Vw(e, t) {
    var r = ne;
    ne = r !== 0 && 4 > r ? r : 4,
    e(!0);
    var n = Gl.transition;
    Gl.transition = {};
    try {
        e(!1),
        t()
    } finally {
        ne = r,
        Gl.transition = n
    }
}
function ug() {
    return yt().memoizedState
}
function Kw(e, t, r) {
    var n = qr(e);
    if (r = {
        lane: n,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    cg(e))
        dg(t, r);
    else if (r = Vm(e, t, r, n),
    r !== null) {
        var s = He();
        jt(r, e, n, s),
        hg(r, t, n)
    }
}
function qw(e, t, r) {
    var n = qr(e)
      , s = {
        lane: n,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (cg(e))
        dg(t, s);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var o = t.lastRenderedState
                  , a = i(o, r);
                if (s.hasEagerState = !0,
                s.eagerState = a,
                It(a, o)) {
                    var l = t.interleaved;
                    l === null ? (s.next = s,
                    od(t)) : (s.next = l.next,
                    l.next = s),
                    t.interleaved = s;
                    return
                }
            } catch {} finally {}
        r = Vm(e, t, s, n),
        r !== null && (s = He(),
        jt(r, e, n, s),
        hg(r, t, n))
    }
}
function cg(e) {
    var t = e.alternate;
    return e === fe || t !== null && t === fe
}
function dg(e, t) {
    gi = Ta = !0;
    var r = e.pending;
    r === null ? t.next = t : (t.next = r.next,
    r.next = t),
    e.pending = t
}
function hg(e, t, r) {
    if (r & 4194240) {
        var n = t.lanes;
        n &= e.pendingLanes,
        r |= n,
        t.lanes = r,
        Kc(e, r)
    }
}
var Ca = {
    readContext: vt,
    useCallback: Le,
    useContext: Le,
    useEffect: Le,
    useImperativeHandle: Le,
    useInsertionEffect: Le,
    useLayoutEffect: Le,
    useMemo: Le,
    useReducer: Le,
    useRef: Le,
    useState: Le,
    useDebugValue: Le,
    useDeferredValue: Le,
    useTransition: Le,
    useMutableSource: Le,
    useSyncExternalStore: Le,
    useId: Le,
    unstable_isNewReconciler: !1
}
  , Gw = {
    readContext: vt,
    useCallback: function(e, t) {
        return Ft().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: vt,
    useEffect: Hh,
    useImperativeHandle: function(e, t, r) {
        return r = r != null ? r.concat([e]) : null,
        Zo(4194308, 4, sg.bind(null, t, e), r)
    },
    useLayoutEffect: function(e, t) {
        return Zo(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Zo(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var r = Ft();
        return t = t === void 0 ? null : t,
        e = e(),
        r.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, r) {
        var n = Ft();
        return t = r !== void 0 ? r(t) : t,
        n.memoizedState = n.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        n.queue = e,
        e = e.dispatch = Kw.bind(null, fe, e),
        [n.memoizedState, e]
    },
    useRef: function(e) {
        var t = Ft();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: zh,
    useDebugValue: md,
    useDeferredValue: function(e) {
        return Ft().memoizedState = e
    },
    useTransition: function() {
        var e = zh(!1)
          , t = e[0];
        return e = Vw.bind(null, e[1]),
        Ft().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, r) {
        var n = fe
          , s = Ft();
        if (de) {
            if (r === void 0)
                throw Error(A(407));
            r = r()
        } else {
            if (r = t(),
            Ce === null)
                throw Error(A(349));
            Rn & 30 || Qm(n, t, r)
        }
        s.memoizedState = r;
        var i = {
            value: r,
            getSnapshot: t
        };
        return s.queue = i,
        Hh(Xm.bind(null, n, i, e), [e]),
        n.flags |= 2048,
        Fi(9, Ym.bind(null, n, i, r, t), void 0, null),
        r
    },
    useId: function() {
        var e = Ft()
          , t = Ce.identifierPrefix;
        if (de) {
            var r = ar
              , n = or;
            r = (n & ~(1 << 32 - Nt(n) - 1)).toString(32) + r,
            t = ":" + t + "R" + r,
            r = Mi++,
            0 < r && (t += "H" + r.toString(32)),
            t += ":"
        } else
            r = Ww++,
            t = ":" + t + "r" + r.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Jw = {
    readContext: vt,
    useCallback: og,
    useContext: vt,
    useEffect: pd,
    useImperativeHandle: ig,
    useInsertionEffect: rg,
    useLayoutEffect: ng,
    useMemo: ag,
    useReducer: Jl,
    useRef: tg,
    useState: function() {
        return Jl(Ui)
    },
    useDebugValue: md,
    useDeferredValue: function(e) {
        var t = yt();
        return lg(t, _e.memoizedState, e)
    },
    useTransition: function() {
        var e = Jl(Ui)[0]
          , t = yt().memoizedState;
        return [e, t]
    },
    useMutableSource: Gm,
    useSyncExternalStore: Jm,
    useId: ug,
    unstable_isNewReconciler: !1
}
  , Qw = {
    readContext: vt,
    useCallback: og,
    useContext: vt,
    useEffect: pd,
    useImperativeHandle: ig,
    useInsertionEffect: rg,
    useLayoutEffect: ng,
    useMemo: ag,
    useReducer: Ql,
    useRef: tg,
    useState: function() {
        return Ql(Ui)
    },
    useDebugValue: md,
    useDeferredValue: function(e) {
        var t = yt();
        return _e === null ? t.memoizedState = e : lg(t, _e.memoizedState, e)
    },
    useTransition: function() {
        var e = Ql(Ui)[0]
          , t = yt().memoizedState;
        return [e, t]
    },
    useMutableSource: Gm,
    useSyncExternalStore: Jm,
    useId: ug,
    unstable_isNewReconciler: !1
};
function Et(e, t) {
    if (e && e.defaultProps) {
        t = pe({}, t),
        e = e.defaultProps;
        for (var r in e)
            t[r] === void 0 && (t[r] = e[r]);
        return t
    }
    return t
}
function Wu(e, t, r, n) {
    t = e.memoizedState,
    r = r(n, t),
    r = r == null ? t : pe({}, t, r),
    e.memoizedState = r,
    e.lanes === 0 && (e.updateQueue.baseState = r)
}
var Ya = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? In(e) === e : !1
    },
    enqueueSetState: function(e, t, r) {
        e = e._reactInternals;
        var n = He()
          , s = qr(e)
          , i = lr(n, s);
        i.payload = t,
        r != null && (i.callback = r),
        t = Vr(e, i, s),
        t !== null && (jt(t, e, s, n),
        Yo(t, e, s))
    },
    enqueueReplaceState: function(e, t, r) {
        e = e._reactInternals;
        var n = He()
          , s = qr(e)
          , i = lr(n, s);
        i.tag = 1,
        i.payload = t,
        r != null && (i.callback = r),
        t = Vr(e, i, s),
        t !== null && (jt(t, e, s, n),
        Yo(t, e, s))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var r = He()
          , n = qr(e)
          , s = lr(r, n);
        s.tag = 2,
        t != null && (s.callback = t),
        t = Vr(e, s, n),
        t !== null && (jt(t, e, n, r),
        Yo(t, e, n))
    }
};
function Wh(e, t, r, n, s, i, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Ni(r, n) || !Ni(s, i) : !0
}
function fg(e, t, r) {
    var n = !1
      , s = Qr
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = vt(i) : (s = Ye(t) ? Cn : Ue.current,
    n = t.contextTypes,
    i = (n = n != null) ? Rs(e, s) : Qr),
    t = new t(r,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Ya,
    e.stateNode = t,
    t._reactInternals = e,
    n && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = s,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function Vh(e, t, r, n) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && Ya.enqueueReplaceState(t, t.state, null)
}
function Vu(e, t, r, n) {
    var s = e.stateNode;
    s.props = r,
    s.state = e.memoizedState,
    s.refs = {},
    ad(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? s.context = vt(i) : (i = Ye(t) ? Cn : Ue.current,
    s.context = Rs(e, i)),
    s.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (Wu(e, t, i, r),
    s.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state,
    typeof s.componentWillMount == "function" && s.componentWillMount(),
    typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(),
    t !== s.state && Ya.enqueueReplaceState(s, s.state, null),
    ka(e, r, s, n),
    s.state = e.memoizedState),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308)
}
function js(e, t) {
    try {
        var r = ""
          , n = t;
        do
            r += k0(n),
            n = n.return;
        while (n);
        var s = r
    } catch (i) {
        s = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: s,
        digest: null
    }
}
function Yl(e, t, r) {
    return {
        value: e,
        source: null,
        stack: r ?? null,
        digest: t ?? null
    }
}
function Ku(e, t) {
    try {
        console.error(t.value)
    } catch (r) {
        setTimeout(function() {
            throw r
        })
    }
}
var Yw = typeof WeakMap == "function" ? WeakMap : Map;
function pg(e, t, r) {
    r = lr(-1, r),
    r.tag = 3,
    r.payload = {
        element: null
    };
    var n = t.value;
    return r.callback = function() {
        Ra || (Ra = !0,
        rc = n),
        Ku(e, t)
    }
    ,
    r
}
function mg(e, t, r) {
    r = lr(-1, r),
    r.tag = 3;
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
        var s = t.value;
        r.payload = function() {
            return n(s)
        }
        ,
        r.callback = function() {
            Ku(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (r.callback = function() {
        Ku(e, t),
        typeof n != "function" && (Kr === null ? Kr = new Set([this]) : Kr.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    r
}
function Kh(e, t, r) {
    var n = e.pingCache;
    if (n === null) {
        n = e.pingCache = new Yw;
        var s = new Set;
        n.set(t, s)
    } else
        s = n.get(t),
        s === void 0 && (s = new Set,
        n.set(t, s));
    s.has(r) || (s.add(r),
    e = db.bind(null, e, t, r),
    t.then(e, e))
}
function qh(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Gh(e, t, r, n, s) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = s,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    r.flags |= 131072,
    r.flags &= -52805,
    r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = lr(-1, 1),
    t.tag = 2,
    Vr(r, t, 1))),
    r.lanes |= 1),
    e)
}
var Xw = mr.ReactCurrentOwner
  , Je = !1;
function Be(e, t, r, n) {
    t.child = e === null ? Wm(t, null, r, n) : Os(t, e.child, r, n)
}
function Jh(e, t, r, n, s) {
    r = r.render;
    var i = t.ref;
    return ms(t, s),
    n = hd(e, t, r, n, i, s),
    r = fd(),
    e !== null && !Je ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~s,
    hr(e, t, s)) : (de && r && ed(t),
    t.flags |= 1,
    Be(e, t, n, s),
    t.child)
}
function Qh(e, t, r, n, s) {
    if (e === null) {
        var i = r.type;
        return typeof i == "function" && !Sd(i) && i.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        gg(e, t, i, n, s)) : (e = na(r.type, null, n, t, t.mode, s),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & s)) {
        var o = i.memoizedProps;
        if (r = r.compare,
        r = r !== null ? r : Ni,
        r(o, n) && e.ref === t.ref)
            return hr(e, t, s)
    }
    return t.flags |= 1,
    e = Gr(i, n),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function gg(e, t, r, n, s) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Ni(i, n) && e.ref === t.ref)
            if (Je = !1,
            t.pendingProps = n = i,
            (e.lanes & s) !== 0)
                e.flags & 131072 && (Je = !0);
            else
                return t.lanes = e.lanes,
                hr(e, t, s)
    }
    return qu(e, t, r, n, s)
}
function vg(e, t, r) {
    var n = t.pendingProps
      , s = n.children
      , i = e !== null ? e.memoizedState : null;
    if (n.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            oe(cs, tt),
            tt |= r;
        else {
            if (!(r & 1073741824))
                return e = i !== null ? i.baseLanes | r : r,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                oe(cs, tt),
                tt |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            n = i !== null ? i.baseLanes : r,
            oe(cs, tt),
            tt |= n
        }
    else
        i !== null ? (n = i.baseLanes | r,
        t.memoizedState = null) : n = r,
        oe(cs, tt),
        tt |= n;
    return Be(e, t, s, r),
    t.child
}
function yg(e, t) {
    var r = t.ref;
    (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512,
    t.flags |= 2097152)
}
function qu(e, t, r, n, s) {
    var i = Ye(r) ? Cn : Ue.current;
    return i = Rs(t, i),
    ms(t, s),
    r = hd(e, t, r, n, i, s),
    n = fd(),
    e !== null && !Je ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~s,
    hr(e, t, s)) : (de && n && ed(t),
    t.flags |= 1,
    Be(e, t, r, s),
    t.child)
}
function Yh(e, t, r, n, s) {
    if (Ye(r)) {
        var i = !0;
        wa(t)
    } else
        i = !1;
    if (ms(t, s),
    t.stateNode === null)
        ea(e, t),
        fg(t, r, n),
        Vu(t, r, n, s),
        n = !0;
    else if (e === null) {
        var o = t.stateNode
          , a = t.memoizedProps;
        o.props = a;
        var l = o.context
          , u = r.contextType;
        typeof u == "object" && u !== null ? u = vt(u) : (u = Ye(r) ? Cn : Ue.current,
        u = Rs(t, u));
        var c = r.getDerivedStateFromProps
          , d = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== n || l !== u) && Vh(t, o, n, u),
        Pr = !1;
        var f = t.memoizedState;
        o.state = f,
        ka(t, n, o, s),
        l = t.memoizedState,
        a !== n || f !== l || Qe.current || Pr ? (typeof c == "function" && (Wu(t, r, c, n),
        l = t.memoizedState),
        (a = Pr || Wh(t, r, a, n, f, l, u)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = n,
        t.memoizedState = l),
        o.props = n,
        o.state = l,
        o.context = u,
        n = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        n = !1)
    } else {
        o = t.stateNode,
        Km(e, t),
        a = t.memoizedProps,
        u = t.type === t.elementType ? a : Et(t.type, a),
        o.props = u,
        d = t.pendingProps,
        f = o.context,
        l = r.contextType,
        typeof l == "object" && l !== null ? l = vt(l) : (l = Ye(r) ? Cn : Ue.current,
        l = Rs(t, l));
        var h = r.getDerivedStateFromProps;
        (c = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== d || f !== l) && Vh(t, o, n, l),
        Pr = !1,
        f = t.memoizedState,
        o.state = f,
        ka(t, n, o, s);
        var y = t.memoizedState;
        a !== d || f !== y || Qe.current || Pr ? (typeof h == "function" && (Wu(t, r, h, n),
        y = t.memoizedState),
        (u = Pr || Wh(t, r, u, n, f, y, l) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(n, y, l),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(n, y, l)),
        typeof o.componentDidUpdate == "function" && (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = n,
        t.memoizedState = y),
        o.props = n,
        o.state = y,
        o.context = l,
        n = u) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        n = !1)
    }
    return Gu(e, t, r, n, i, s)
}
function Gu(e, t, r, n, s, i) {
    yg(e, t);
    var o = (t.flags & 128) !== 0;
    if (!n && !o)
        return s && $h(t, r, !1),
        hr(e, t, i);
    n = t.stateNode,
    Xw.current = t;
    var a = o && typeof r.getDerivedStateFromError != "function" ? null : n.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = Os(t, e.child, null, i),
    t.child = Os(t, null, a, i)) : Be(e, t, a, i),
    t.memoizedState = n.state,
    s && $h(t, r, !0),
    t.child
}
function wg(e) {
    var t = e.stateNode;
    t.pendingContext ? Lh(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Lh(e, t.context, !1),
    ld(e, t.containerInfo)
}
function Xh(e, t, r, n, s) {
    return As(),
    rd(s),
    t.flags |= 256,
    Be(e, t, r, n),
    t.child
}
var Ju = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Qu(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function bg(e, t, r) {
    var n = t.pendingProps, s = he.current, i = !1, o = (t.flags & 128) !== 0, a;
    if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    a ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1),
    oe(he, s & 1),
    e === null)
        return zu(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (o = n.children,
        e = n.fallback,
        i ? (n = t.mode,
        i = t.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(n & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = o) : i = el(o, n, 0, null),
        e = En(e, n, r, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = Qu(r),
        t.memoizedState = Ju,
        e) : gd(t, o));
    if (s = e.memoizedState,
    s !== null && (a = s.dehydrated,
    a !== null))
        return Zw(e, t, o, n, a, s, r);
    if (i) {
        i = n.fallback,
        o = t.mode,
        s = e.child,
        a = s.sibling;
        var l = {
            mode: "hidden",
            children: n.children
        };
        return !(o & 1) && t.child !== s ? (n = t.child,
        n.childLanes = 0,
        n.pendingProps = l,
        t.deletions = null) : (n = Gr(s, l),
        n.subtreeFlags = s.subtreeFlags & 14680064),
        a !== null ? i = Gr(a, i) : (i = En(i, o, r, null),
        i.flags |= 2),
        i.return = t,
        n.return = t,
        n.sibling = i,
        t.child = n,
        n = i,
        i = t.child,
        o = e.child.memoizedState,
        o = o === null ? Qu(r) : {
            baseLanes: o.baseLanes | r,
            cachePool: null,
            transitions: o.transitions
        },
        i.memoizedState = o,
        i.childLanes = e.childLanes & ~r,
        t.memoizedState = Ju,
        n
    }
    return i = e.child,
    e = i.sibling,
    n = Gr(i, {
        mode: "visible",
        children: n.children
    }),
    !(t.mode & 1) && (n.lanes = r),
    n.return = t,
    n.sibling = null,
    e !== null && (r = t.deletions,
    r === null ? (t.deletions = [e],
    t.flags |= 16) : r.push(e)),
    t.child = n,
    t.memoizedState = null,
    n
}
function gd(e, t) {
    return t = el({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Ao(e, t, r, n) {
    return n !== null && rd(n),
    Os(t, e.child, null, r),
    e = gd(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Zw(e, t, r, n, s, i, o) {
    if (r)
        return t.flags & 256 ? (t.flags &= -257,
        n = Yl(Error(A(422))),
        Ao(e, t, o, n)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = n.fallback,
        s = t.mode,
        n = el({
            mode: "visible",
            children: n.children
        }, s, 0, null),
        i = En(i, s, o, null),
        i.flags |= 2,
        n.return = t,
        i.return = t,
        n.sibling = i,
        t.child = n,
        t.mode & 1 && Os(t, e.child, null, o),
        t.child.memoizedState = Qu(o),
        t.memoizedState = Ju,
        i);
    if (!(t.mode & 1))
        return Ao(e, t, o, null);
    if (s.data === "$!") {
        if (n = s.nextSibling && s.nextSibling.dataset,
        n)
            var a = n.dgst;
        return n = a,
        i = Error(A(419)),
        n = Yl(i, n, void 0),
        Ao(e, t, o, n)
    }
    if (a = (o & e.childLanes) !== 0,
    Je || a) {
        if (n = Ce,
        n !== null) {
            switch (o & -o) {
            case 4:
                s = 2;
                break;
            case 16:
                s = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                s = 32;
                break;
            case 536870912:
                s = 268435456;
                break;
            default:
                s = 0
            }
            s = s & (n.suspendedLanes | o) ? 0 : s,
            s !== 0 && s !== i.retryLane && (i.retryLane = s,
            dr(e, s),
            jt(n, e, s, -1))
        }
        return _d(),
        n = Yl(Error(A(421))),
        Ao(e, t, o, n)
    }
    return s.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = hb.bind(null, e),
    s._reactRetry = t,
    null) : (e = i.treeContext,
    st = Wr(s.nextSibling),
    it = t,
    de = !0,
    Ot = null,
    e !== null && (ft[pt++] = or,
    ft[pt++] = ar,
    ft[pt++] = Pn,
    or = e.id,
    ar = e.overflow,
    Pn = t),
    t = gd(t, n.children),
    t.flags |= 4096,
    t)
}
function Zh(e, t, r) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t),
    Hu(e.return, t, r)
}
function Xl(e, t, r, n, s) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: s
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = n,
    i.tail = r,
    i.tailMode = s)
}
function xg(e, t, r) {
    var n = t.pendingProps
      , s = n.revealOrder
      , i = n.tail;
    if (Be(e, t, n.children, r),
    n = he.current,
    n & 2)
        n = n & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Zh(e, r, t);
                else if (e.tag === 19)
                    Zh(e, r, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        n &= 1
    }
    if (oe(he, n),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (s) {
        case "forwards":
            for (r = t.child,
            s = null; r !== null; )
                e = r.alternate,
                e !== null && Ea(e) === null && (s = r),
                r = r.sibling;
            r = s,
            r === null ? (s = t.child,
            t.child = null) : (s = r.sibling,
            r.sibling = null),
            Xl(t, !1, s, r, i);
            break;
        case "backwards":
            for (r = null,
            s = t.child,
            t.child = null; s !== null; ) {
                if (e = s.alternate,
                e !== null && Ea(e) === null) {
                    t.child = s;
                    break
                }
                e = s.sibling,
                s.sibling = r,
                r = s,
                s = e
            }
            Xl(t, !0, r, null, i);
            break;
        case "together":
            Xl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function ea(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function hr(e, t, r) {
    if (e !== null && (t.dependencies = e.dependencies),
    An |= t.lanes,
    !(r & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(A(153));
    if (t.child !== null) {
        for (e = t.child,
        r = Gr(e, e.pendingProps),
        t.child = r,
        r.return = t; e.sibling !== null; )
            e = e.sibling,
            r = r.sibling = Gr(e, e.pendingProps),
            r.return = t;
        r.sibling = null
    }
    return t.child
}
function eb(e, t, r) {
    switch (t.tag) {
    case 3:
        wg(t),
        As();
        break;
    case 5:
        qm(t);
        break;
    case 1:
        Ye(t.type) && wa(t);
        break;
    case 4:
        ld(t, t.stateNode.containerInfo);
        break;
    case 10:
        var n = t.type._context
          , s = t.memoizedProps.value;
        oe(_a, n._currentValue),
        n._currentValue = s;
        break;
    case 13:
        if (n = t.memoizedState,
        n !== null)
            return n.dehydrated !== null ? (oe(he, he.current & 1),
            t.flags |= 128,
            null) : r & t.child.childLanes ? bg(e, t, r) : (oe(he, he.current & 1),
            e = hr(e, t, r),
            e !== null ? e.sibling : null);
        oe(he, he.current & 1);
        break;
    case 19:
        if (n = (r & t.childLanes) !== 0,
        e.flags & 128) {
            if (n)
                return xg(e, t, r);
            t.flags |= 128
        }
        if (s = t.memoizedState,
        s !== null && (s.rendering = null,
        s.tail = null,
        s.lastEffect = null),
        oe(he, he.current),
        n)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        vg(e, t, r)
    }
    return hr(e, t, r)
}
var _g, Yu, Sg, kg;
_g = function(e, t) {
    for (var r = t.child; r !== null; ) {
        if (r.tag === 5 || r.tag === 6)
            e.appendChild(r.stateNode);
        else if (r.tag !== 4 && r.child !== null) {
            r.child.return = r,
            r = r.child;
            continue
        }
        if (r === t)
            break;
        for (; r.sibling === null; ) {
            if (r.return === null || r.return === t)
                return;
            r = r.return
        }
        r.sibling.return = r.return,
        r = r.sibling
    }
}
;
Yu = function() {}
;
Sg = function(e, t, r, n) {
    var s = e.memoizedProps;
    if (s !== n) {
        e = t.stateNode,
        gn(Jt.current);
        var i = null;
        switch (r) {
        case "input":
            s = wu(e, s),
            n = wu(e, n),
            i = [];
            break;
        case "select":
            s = pe({}, s, {
                value: void 0
            }),
            n = pe({}, n, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            s = _u(e, s),
            n = _u(e, n),
            i = [];
            break;
        default:
            typeof s.onClick != "function" && typeof n.onClick == "function" && (e.onclick = va)
        }
        ku(r, n);
        var o;
        r = null;
        for (u in s)
            if (!n.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
                if (u === "style") {
                    var a = s[u];
                    for (o in a)
                        a.hasOwnProperty(o) && (r || (r = {}),
                        r[o] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ei.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in n) {
            var l = n[u];
            if (a = s != null ? s[u] : void 0,
            n.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (o in a)
                            !a.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (r || (r = {}),
                            r[o] = "");
                        for (o in l)
                            l.hasOwnProperty(o) && a[o] !== l[o] && (r || (r = {}),
                            r[o] = l[o])
                    } else
                        r || (i || (i = []),
                        i.push(u, r)),
                        r = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ei.hasOwnProperty(u) ? (l != null && u === "onScroll" && le("scroll", e),
                    i || a === l || (i = [])) : (i = i || []).push(u, l))
        }
        r && (i = i || []).push("style", r);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
kg = function(e, t, r, n) {
    r !== n && (t.flags |= 4)
}
;
function ei(e, t) {
    if (!de)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var r = null; t !== null; )
                t.alternate !== null && (r = t),
                t = t.sibling;
            r === null ? e.tail = null : r.sibling = null;
            break;
        case "collapsed":
            r = e.tail;
            for (var n = null; r !== null; )
                r.alternate !== null && (n = r),
                r = r.sibling;
            n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null
        }
}
function $e(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , r = 0
      , n = 0;
    if (t)
        for (var s = e.child; s !== null; )
            r |= s.lanes | s.childLanes,
            n |= s.subtreeFlags & 14680064,
            n |= s.flags & 14680064,
            s.return = e,
            s = s.sibling;
    else
        for (s = e.child; s !== null; )
            r |= s.lanes | s.childLanes,
            n |= s.subtreeFlags,
            n |= s.flags,
            s.return = e,
            s = s.sibling;
    return e.subtreeFlags |= n,
    e.childLanes = r,
    t
}
function tb(e, t, r) {
    var n = t.pendingProps;
    switch (td(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return $e(t),
        null;
    case 1:
        return Ye(t.type) && ya(),
        $e(t),
        null;
    case 3:
        return n = t.stateNode,
        Ns(),
        ue(Qe),
        ue(Ue),
        cd(),
        n.pendingContext && (n.context = n.pendingContext,
        n.pendingContext = null),
        (e === null || e.child === null) && (Po(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Ot !== null && (ic(Ot),
        Ot = null))),
        Yu(e, t),
        $e(t),
        null;
    case 5:
        ud(t);
        var s = gn(Di.current);
        if (r = t.type,
        e !== null && t.stateNode != null)
            Sg(e, t, r, n, s),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!n) {
                if (t.stateNode === null)
                    throw Error(A(166));
                return $e(t),
                null
            }
            if (e = gn(Jt.current),
            Po(t)) {
                n = t.stateNode,
                r = t.type;
                var i = t.memoizedProps;
                switch (n[Kt] = t,
                n[Li] = i,
                e = (t.mode & 1) !== 0,
                r) {
                case "dialog":
                    le("cancel", n),
                    le("close", n);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    le("load", n);
                    break;
                case "video":
                case "audio":
                    for (s = 0; s < li.length; s++)
                        le(li[s], n);
                    break;
                case "source":
                    le("error", n);
                    break;
                case "img":
                case "image":
                case "link":
                    le("error", n),
                    le("load", n);
                    break;
                case "details":
                    le("toggle", n);
                    break;
                case "input":
                    lh(n, i),
                    le("invalid", n);
                    break;
                case "select":
                    n._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    le("invalid", n);
                    break;
                case "textarea":
                    ch(n, i),
                    le("invalid", n)
                }
                ku(r, i),
                s = null;
                for (var o in i)
                    if (i.hasOwnProperty(o)) {
                        var a = i[o];
                        o === "children" ? typeof a == "string" ? n.textContent !== a && (i.suppressHydrationWarning !== !0 && Co(n.textContent, a, e),
                        s = ["children", a]) : typeof a == "number" && n.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && Co(n.textContent, a, e),
                        s = ["children", "" + a]) : Ei.hasOwnProperty(o) && a != null && o === "onScroll" && le("scroll", n)
                    }
                switch (r) {
                case "input":
                    wo(n),
                    uh(n, i, !0);
                    break;
                case "textarea":
                    wo(n),
                    dh(n);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (n.onclick = va)
                }
                n = s,
                t.updateQueue = n,
                n !== null && (t.flags |= 4)
            } else {
                o = s.nodeType === 9 ? s : s.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Xp(r)),
                e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = o.createElement(r, {
                    is: n.is
                }) : (e = o.createElement(r),
                r === "select" && (o = e,
                n.multiple ? o.multiple = !0 : n.size && (o.size = n.size))) : e = o.createElementNS(e, r),
                e[Kt] = t,
                e[Li] = n,
                _g(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = Eu(r, n),
                    r) {
                    case "dialog":
                        le("cancel", e),
                        le("close", e),
                        s = n;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        le("load", e),
                        s = n;
                        break;
                    case "video":
                    case "audio":
                        for (s = 0; s < li.length; s++)
                            le(li[s], e);
                        s = n;
                        break;
                    case "source":
                        le("error", e),
                        s = n;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        le("error", e),
                        le("load", e),
                        s = n;
                        break;
                    case "details":
                        le("toggle", e),
                        s = n;
                        break;
                    case "input":
                        lh(e, n),
                        s = wu(e, n),
                        le("invalid", e);
                        break;
                    case "option":
                        s = n;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!n.multiple
                        },
                        s = pe({}, n, {
                            value: void 0
                        }),
                        le("invalid", e);
                        break;
                    case "textarea":
                        ch(e, n),
                        s = _u(e, n),
                        le("invalid", e);
                        break;
                    default:
                        s = n
                    }
                    ku(r, s),
                    a = s;
                    for (i in a)
                        if (a.hasOwnProperty(i)) {
                            var l = a[i];
                            i === "style" ? tm(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && Zp(e, l)) : i === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && Ti(e, l) : typeof l == "number" && Ti(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ei.hasOwnProperty(i) ? l != null && i === "onScroll" && le("scroll", e) : l != null && Fc(e, i, l, o))
                        }
                    switch (r) {
                    case "input":
                        wo(e),
                        uh(e, n, !1);
                        break;
                    case "textarea":
                        wo(e),
                        dh(e);
                        break;
                    case "option":
                        n.value != null && e.setAttribute("value", "" + Jr(n.value));
                        break;
                    case "select":
                        e.multiple = !!n.multiple,
                        i = n.value,
                        i != null ? ds(e, !!n.multiple, i, !1) : n.defaultValue != null && ds(e, !!n.multiple, n.defaultValue, !0);
                        break;
                    default:
                        typeof s.onClick == "function" && (e.onclick = va)
                    }
                    switch (r) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        n = !!n.autoFocus;
                        break e;
                    case "img":
                        n = !0;
                        break e;
                    default:
                        n = !1
                    }
                }
                n && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return $e(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            kg(e, t, e.memoizedProps, n);
        else {
            if (typeof n != "string" && t.stateNode === null)
                throw Error(A(166));
            if (r = gn(Di.current),
            gn(Jt.current),
            Po(t)) {
                if (n = t.stateNode,
                r = t.memoizedProps,
                n[Kt] = t,
                (i = n.nodeValue !== r) && (e = it,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Co(n.nodeValue, r, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Co(n.nodeValue, r, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n),
                n[Kt] = t,
                t.stateNode = n
        }
        return $e(t),
        null;
    case 13:
        if (ue(he),
        n = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (de && st !== null && t.mode & 1 && !(t.flags & 128))
                zm(),
                As(),
                t.flags |= 98560,
                i = !1;
            else if (i = Po(t),
            n !== null && n.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(A(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(A(317));
                    i[Kt] = t
                } else
                    As(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                $e(t),
                i = !1
            } else
                Ot !== null && (ic(Ot),
                Ot = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = r,
        t) : (n = n !== null,
        n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || he.current & 1 ? ke === 0 && (ke = 3) : _d())),
        t.updateQueue !== null && (t.flags |= 4),
        $e(t),
        null);
    case 4:
        return Ns(),
        Yu(e, t),
        e === null && ji(t.stateNode.containerInfo),
        $e(t),
        null;
    case 10:
        return id(t.type._context),
        $e(t),
        null;
    case 17:
        return Ye(t.type) && ya(),
        $e(t),
        null;
    case 19:
        if (ue(he),
        i = t.memoizedState,
        i === null)
            return $e(t),
            null;
        if (n = (t.flags & 128) !== 0,
        o = i.rendering,
        o === null)
            if (n)
                ei(i, !1);
            else {
                if (ke !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = Ea(e),
                        o !== null) {
                            for (t.flags |= 128,
                            ei(i, !1),
                            n = o.updateQueue,
                            n !== null && (t.updateQueue = n,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            n = r,
                            r = t.child; r !== null; )
                                i = r,
                                e = n,
                                i.flags &= 14680066,
                                o = i.alternate,
                                o === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = o.childLanes,
                                i.lanes = o.lanes,
                                i.child = o.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = o.memoizedProps,
                                i.memoizedState = o.memoizedState,
                                i.updateQueue = o.updateQueue,
                                i.type = o.type,
                                e = o.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                r = r.sibling;
                            return oe(he, he.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && ye() > Is && (t.flags |= 128,
                n = !0,
                ei(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!n)
                if (e = Ea(o),
                e !== null) {
                    if (t.flags |= 128,
                    n = !0,
                    r = e.updateQueue,
                    r !== null && (t.updateQueue = r,
                    t.flags |= 4),
                    ei(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !o.alternate && !de)
                        return $e(t),
                        null
                } else
                    2 * ye() - i.renderingStartTime > Is && r !== 1073741824 && (t.flags |= 128,
                    n = !0,
                    ei(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (o.sibling = t.child,
            t.child = o) : (r = i.last,
            r !== null ? r.sibling = o : t.child = o,
            i.last = o)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = ye(),
        t.sibling = null,
        r = he.current,
        oe(he, n ? r & 1 | 2 : r & 1),
        t) : ($e(t),
        null);
    case 22:
    case 23:
        return xd(),
        n = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== n && (t.flags |= 8192),
        n && t.mode & 1 ? tt & 1073741824 && ($e(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : $e(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(A(156, t.tag))
}
function rb(e, t) {
    switch (td(t),
    t.tag) {
    case 1:
        return Ye(t.type) && ya(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Ns(),
        ue(Qe),
        ue(Ue),
        cd(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return ud(t),
        null;
    case 13:
        if (ue(he),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(A(340));
            As()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ue(he),
        null;
    case 4:
        return Ns(),
        null;
    case 10:
        return id(t.type._context),
        null;
    case 22:
    case 23:
        return xd(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Oo = !1
  , Me = !1
  , nb = typeof WeakSet == "function" ? WeakSet : Set
  , $ = null;
function us(e, t) {
    var r = e.ref;
    if (r !== null)
        if (typeof r == "function")
            try {
                r(null)
            } catch (n) {
                ve(e, t, n)
            }
        else
            r.current = null
}
function Xu(e, t, r) {
    try {
        r()
    } catch (n) {
        ve(e, t, n)
    }
}
var ef = !1;
function sb(e, t) {
    if (Lu = pa,
    e = Rm(),
    Zc(e)) {
        if ("selectionStart"in e)
            var r = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                r = (r = e.ownerDocument) && r.defaultView || window;
                var n = r.getSelection && r.getSelection();
                if (n && n.rangeCount !== 0) {
                    r = n.anchorNode;
                    var s = n.anchorOffset
                      , i = n.focusNode;
                    n = n.focusOffset;
                    try {
                        r.nodeType,
                        i.nodeType
                    } catch {
                        r = null;
                        break e
                    }
                    var o = 0
                      , a = -1
                      , l = -1
                      , u = 0
                      , c = 0
                      , d = e
                      , f = null;
                    t: for (; ; ) {
                        for (var h; d !== r || s !== 0 && d.nodeType !== 3 || (a = o + s),
                        d !== i || n !== 0 && d.nodeType !== 3 || (l = o + n),
                        d.nodeType === 3 && (o += d.nodeValue.length),
                        (h = d.firstChild) !== null; )
                            f = d,
                            d = h;
                        for (; ; ) {
                            if (d === e)
                                break t;
                            if (f === r && ++u === s && (a = o),
                            f === i && ++c === n && (l = o),
                            (h = d.nextSibling) !== null)
                                break;
                            d = f,
                            f = d.parentNode
                        }
                        d = h
                    }
                    r = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    r = null
            }
        r = r || {
            start: 0,
            end: 0
        }
    } else
        r = null;
    for ($u = {
        focusedElem: e,
        selectionRange: r
    },
    pa = !1,
    $ = t; $ !== null; )
        if (t = $,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            $ = e;
        else
            for (; $ !== null; ) {
                t = $;
                try {
                    var y = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var g = y.memoizedProps
                                  , w = y.memoizedState
                                  , m = t.stateNode
                                  , p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? g : Et(t.type, g), w);
                                m.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(A(163))
                        }
                } catch (x) {
                    ve(t, t.return, x)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    $ = e;
                    break
                }
                $ = t.return
            }
    return y = ef,
    ef = !1,
    y
}
function vi(e, t, r) {
    var n = t.updateQueue;
    if (n = n !== null ? n.lastEffect : null,
    n !== null) {
        var s = n = n.next;
        do {
            if ((s.tag & e) === e) {
                var i = s.destroy;
                s.destroy = void 0,
                i !== void 0 && Xu(t, r, i)
            }
            s = s.next
        } while (s !== n)
    }
}
function Xa(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var r = t = t.next;
        do {
            if ((r.tag & e) === e) {
                var n = r.create;
                r.destroy = n()
            }
            r = r.next
        } while (r !== t)
    }
}
function Zu(e) {
    var t = e.ref;
    if (t !== null) {
        var r = e.stateNode;
        switch (e.tag) {
        case 5:
            e = r;
            break;
        default:
            e = r
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Eg(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Eg(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Kt],
    delete t[Li],
    delete t[Uu],
    delete t[Fw],
    delete t[Bw])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Tg(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function tf(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Tg(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function ec(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6)
        e = e.stateNode,
        t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode,
        t.insertBefore(e, r)) : (t = r,
        t.appendChild(e)),
        r = r._reactRootContainer,
        r != null || t.onclick !== null || (t.onclick = va));
    else if (n !== 4 && (e = e.child,
    e !== null))
        for (ec(e, t, r),
        e = e.sibling; e !== null; )
            ec(e, t, r),
            e = e.sibling
}
function tc(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6)
        e = e.stateNode,
        t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (n !== 4 && (e = e.child,
    e !== null))
        for (tc(e, t, r),
        e = e.sibling; e !== null; )
            tc(e, t, r),
            e = e.sibling
}
var Ae = null
  , At = !1;
function Sr(e, t, r) {
    for (r = r.child; r !== null; )
        Cg(e, t, r),
        r = r.sibling
}
function Cg(e, t, r) {
    if (Gt && typeof Gt.onCommitFiberUnmount == "function")
        try {
            Gt.onCommitFiberUnmount(Wa, r)
        } catch {}
    switch (r.tag) {
    case 5:
        Me || us(r, t);
    case 6:
        var n = Ae
          , s = At;
        Ae = null,
        Sr(e, t, r),
        Ae = n,
        At = s,
        Ae !== null && (At ? (e = Ae,
        r = r.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : Ae.removeChild(r.stateNode));
        break;
    case 18:
        Ae !== null && (At ? (e = Ae,
        r = r.stateNode,
        e.nodeType === 8 ? Vl(e.parentNode, r) : e.nodeType === 1 && Vl(e, r),
        Ai(e)) : Vl(Ae, r.stateNode));
        break;
    case 4:
        n = Ae,
        s = At,
        Ae = r.stateNode.containerInfo,
        At = !0,
        Sr(e, t, r),
        Ae = n,
        At = s;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Me && (n = r.updateQueue,
        n !== null && (n = n.lastEffect,
        n !== null))) {
            s = n = n.next;
            do {
                var i = s
                  , o = i.destroy;
                i = i.tag,
                o !== void 0 && (i & 2 || i & 4) && Xu(r, t, o),
                s = s.next
            } while (s !== n)
        }
        Sr(e, t, r);
        break;
    case 1:
        if (!Me && (us(r, t),
        n = r.stateNode,
        typeof n.componentWillUnmount == "function"))
            try {
                n.props = r.memoizedProps,
                n.state = r.memoizedState,
                n.componentWillUnmount()
            } catch (a) {
                ve(r, t, a)
            }
        Sr(e, t, r);
        break;
    case 21:
        Sr(e, t, r);
        break;
    case 22:
        r.mode & 1 ? (Me = (n = Me) || r.memoizedState !== null,
        Sr(e, t, r),
        Me = n) : Sr(e, t, r);
        break;
    default:
        Sr(e, t, r)
    }
}
function rf(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var r = e.stateNode;
        r === null && (r = e.stateNode = new nb),
        t.forEach(function(n) {
            var s = fb.bind(null, e, n);
            r.has(n) || (r.add(n),
            n.then(s, s))
        })
    }
}
function _t(e, t) {
    var r = t.deletions;
    if (r !== null)
        for (var n = 0; n < r.length; n++) {
            var s = r[n];
            try {
                var i = e
                  , o = t
                  , a = o;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        Ae = a.stateNode,
                        At = !1;
                        break e;
                    case 3:
                        Ae = a.stateNode.containerInfo,
                        At = !0;
                        break e;
                    case 4:
                        Ae = a.stateNode.containerInfo,
                        At = !0;
                        break e
                    }
                    a = a.return
                }
                if (Ae === null)
                    throw Error(A(160));
                Cg(i, o, s),
                Ae = null,
                At = !1;
                var l = s.alternate;
                l !== null && (l.return = null),
                s.return = null
            } catch (u) {
                ve(s, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Pg(t, e),
            t = t.sibling
}
function Pg(e, t) {
    var r = e.alternate
      , n = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (_t(t, e),
        Mt(e),
        n & 4) {
            try {
                vi(3, e, e.return),
                Xa(3, e)
            } catch (g) {
                ve(e, e.return, g)
            }
            try {
                vi(5, e, e.return)
            } catch (g) {
                ve(e, e.return, g)
            }
        }
        break;
    case 1:
        _t(t, e),
        Mt(e),
        n & 512 && r !== null && us(r, r.return);
        break;
    case 5:
        if (_t(t, e),
        Mt(e),
        n & 512 && r !== null && us(r, r.return),
        e.flags & 32) {
            var s = e.stateNode;
            try {
                Ti(s, "")
            } catch (g) {
                ve(e, e.return, g)
            }
        }
        if (n & 4 && (s = e.stateNode,
        s != null)) {
            var i = e.memoizedProps
              , o = r !== null ? r.memoizedProps : i
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && i.type === "radio" && i.name != null && Qp(s, i),
                    Eu(a, o);
                    var u = Eu(a, i);
                    for (o = 0; o < l.length; o += 2) {
                        var c = l[o]
                          , d = l[o + 1];
                        c === "style" ? tm(s, d) : c === "dangerouslySetInnerHTML" ? Zp(s, d) : c === "children" ? Ti(s, d) : Fc(s, c, d, u)
                    }
                    switch (a) {
                    case "input":
                        bu(s, i);
                        break;
                    case "textarea":
                        Yp(s, i);
                        break;
                    case "select":
                        var f = s._wrapperState.wasMultiple;
                        s._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        h != null ? ds(s, !!i.multiple, h, !1) : f !== !!i.multiple && (i.defaultValue != null ? ds(s, !!i.multiple, i.defaultValue, !0) : ds(s, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    s[Li] = i
                } catch (g) {
                    ve(e, e.return, g)
                }
        }
        break;
    case 6:
        if (_t(t, e),
        Mt(e),
        n & 4) {
            if (e.stateNode === null)
                throw Error(A(162));
            s = e.stateNode,
            i = e.memoizedProps;
            try {
                s.nodeValue = i
            } catch (g) {
                ve(e, e.return, g)
            }
        }
        break;
    case 3:
        if (_t(t, e),
        Mt(e),
        n & 4 && r !== null && r.memoizedState.isDehydrated)
            try {
                Ai(t.containerInfo)
            } catch (g) {
                ve(e, e.return, g)
            }
        break;
    case 4:
        _t(t, e),
        Mt(e);
        break;
    case 13:
        _t(t, e),
        Mt(e),
        s = e.child,
        s.flags & 8192 && (i = s.memoizedState !== null,
        s.stateNode.isHidden = i,
        !i || s.alternate !== null && s.alternate.memoizedState !== null || (wd = ye())),
        n & 4 && rf(e);
        break;
    case 22:
        if (c = r !== null && r.memoizedState !== null,
        e.mode & 1 ? (Me = (u = Me) || c,
        _t(t, e),
        Me = u) : _t(t, e),
        Mt(e),
        n & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for ($ = e,
                c = e.child; c !== null; ) {
                    for (d = $ = c; $ !== null; ) {
                        switch (f = $,
                        h = f.child,
                        f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            vi(4, f, f.return);
                            break;
                        case 1:
                            us(f, f.return);
                            var y = f.stateNode;
                            if (typeof y.componentWillUnmount == "function") {
                                n = f,
                                r = f.return;
                                try {
                                    t = n,
                                    y.props = t.memoizedProps,
                                    y.state = t.memoizedState,
                                    y.componentWillUnmount()
                                } catch (g) {
                                    ve(n, r, g)
                                }
                            }
                            break;
                        case 5:
                            us(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                sf(d);
                                continue
                            }
                        }
                        h !== null ? (h.return = f,
                        $ = h) : sf(d)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            d = e; ; ) {
                if (d.tag === 5) {
                    if (c === null) {
                        c = d;
                        try {
                            s = d.stateNode,
                            u ? (i = s.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = d.stateNode,
                            l = d.memoizedProps.style,
                            o = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = em("display", o))
                        } catch (g) {
                            ve(e, e.return, g)
                        }
                    }
                } else if (d.tag === 6) {
                    if (c === null)
                        try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (g) {
                            ve(e, e.return, g)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e)
                        break e;
                    c === d && (c = null),
                    d = d.return
                }
                c === d && (c = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        _t(t, e),
        Mt(e),
        n & 4 && rf(e);
        break;
    case 21:
        break;
    default:
        _t(t, e),
        Mt(e)
    }
}
function Mt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var r = e.return; r !== null; ) {
                    if (Tg(r)) {
                        var n = r;
                        break e
                    }
                    r = r.return
                }
                throw Error(A(160))
            }
            switch (n.tag) {
            case 5:
                var s = n.stateNode;
                n.flags & 32 && (Ti(s, ""),
                n.flags &= -33);
                var i = tf(e);
                tc(e, i, s);
                break;
            case 3:
            case 4:
                var o = n.stateNode.containerInfo
                  , a = tf(e);
                ec(e, a, o);
                break;
            default:
                throw Error(A(161))
            }
        } catch (l) {
            ve(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function ib(e, t, r) {
    $ = e,
    Rg(e)
}
function Rg(e, t, r) {
    for (var n = (e.mode & 1) !== 0; $ !== null; ) {
        var s = $
          , i = s.child;
        if (s.tag === 22 && n) {
            var o = s.memoizedState !== null || Oo;
            if (!o) {
                var a = s.alternate
                  , l = a !== null && a.memoizedState !== null || Me;
                a = Oo;
                var u = Me;
                if (Oo = o,
                (Me = l) && !u)
                    for ($ = s; $ !== null; )
                        o = $,
                        l = o.child,
                        o.tag === 22 && o.memoizedState !== null ? of(s) : l !== null ? (l.return = o,
                        $ = l) : of(s);
                for (; i !== null; )
                    $ = i,
                    Rg(i),
                    i = i.sibling;
                $ = s,
                Oo = a,
                Me = u
            }
            nf(e)
        } else
            s.subtreeFlags & 8772 && i !== null ? (i.return = s,
            $ = i) : nf(e)
    }
}
function nf(e) {
    for (; $ !== null; ) {
        var t = $;
        if (t.flags & 8772) {
            var r = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Me || Xa(5, t);
                        break;
                    case 1:
                        var n = t.stateNode;
                        if (t.flags & 4 && !Me)
                            if (r === null)
                                n.componentDidMount();
                            else {
                                var s = t.elementType === t.type ? r.memoizedProps : Et(t.type, r.memoizedProps);
                                n.componentDidUpdate(s, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && Bh(t, i, n);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (r = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    r = t.child.stateNode;
                                    break;
                                case 1:
                                    r = t.child.stateNode
                                }
                            Bh(t, o, r)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (r === null && t.flags & 4) {
                            r = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && r.focus();
                                break;
                            case "img":
                                l.src && (r.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && Ai(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(A(163))
                    }
                Me || t.flags & 512 && Zu(t)
            } catch (f) {
                ve(t, t.return, f)
            }
        }
        if (t === e) {
            $ = null;
            break
        }
        if (r = t.sibling,
        r !== null) {
            r.return = t.return,
            $ = r;
            break
        }
        $ = t.return
    }
}
function sf(e) {
    for (; $ !== null; ) {
        var t = $;
        if (t === e) {
            $ = null;
            break
        }
        var r = t.sibling;
        if (r !== null) {
            r.return = t.return,
            $ = r;
            break
        }
        $ = t.return
    }
}
function of(e) {
    for (; $ !== null; ) {
        var t = $;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var r = t.return;
                try {
                    Xa(4, t)
                } catch (l) {
                    ve(t, r, l)
                }
                break;
            case 1:
                var n = t.stateNode;
                if (typeof n.componentDidMount == "function") {
                    var s = t.return;
                    try {
                        n.componentDidMount()
                    } catch (l) {
                        ve(t, s, l)
                    }
                }
                var i = t.return;
                try {
                    Zu(t)
                } catch (l) {
                    ve(t, i, l)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    Zu(t)
                } catch (l) {
                    ve(t, o, l)
                }
            }
        } catch (l) {
            ve(t, t.return, l)
        }
        if (t === e) {
            $ = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            $ = a;
            break
        }
        $ = t.return
    }
}
var ob = Math.ceil
  , Pa = mr.ReactCurrentDispatcher
  , vd = mr.ReactCurrentOwner
  , gt = mr.ReactCurrentBatchConfig
  , ee = 0
  , Ce = null
  , xe = null
  , Oe = 0
  , tt = 0
  , cs = rn(0)
  , ke = 0
  , Bi = null
  , An = 0
  , Za = 0
  , yd = 0
  , yi = null
  , Ge = null
  , wd = 0
  , Is = 1 / 0
  , tr = null
  , Ra = !1
  , rc = null
  , Kr = null
  , No = !1
  , Ur = null
  , Aa = 0
  , wi = 0
  , nc = null
  , ta = -1
  , ra = 0;
function He() {
    return ee & 6 ? ye() : ta !== -1 ? ta : ta = ye()
}
function qr(e) {
    return e.mode & 1 ? ee & 2 && Oe !== 0 ? Oe & -Oe : Hw.transition !== null ? (ra === 0 && (ra = fm()),
    ra) : (e = ne,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : bm(e.type)),
    e) : 1
}
function jt(e, t, r, n) {
    if (50 < wi)
        throw wi = 0,
        nc = null,
        Error(A(185));
    so(e, r, n),
    (!(ee & 2) || e !== Ce) && (e === Ce && (!(ee & 2) && (Za |= r),
    ke === 4 && Ar(e, Oe)),
    Xe(e, n),
    r === 1 && ee === 0 && !(t.mode & 1) && (Is = ye() + 500,
    Ja && nn()))
}
function Xe(e, t) {
    var r = e.callbackNode;
    H0(e, t);
    var n = fa(e, e === Ce ? Oe : 0);
    if (n === 0)
        r !== null && ph(r),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = n & -n,
    e.callbackPriority !== t) {
        if (r != null && ph(r),
        t === 1)
            e.tag === 0 ? zw(af.bind(null, e)) : Um(af.bind(null, e)),
            Mw(function() {
                !(ee & 6) && nn()
            }),
            r = null;
        else {
            switch (pm(n)) {
            case 1:
                r = Vc;
                break;
            case 4:
                r = dm;
                break;
            case 16:
                r = ha;
                break;
            case 536870912:
                r = hm;
                break;
            default:
                r = ha
            }
            r = Dg(r, Ag.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = r
    }
}
function Ag(e, t) {
    if (ta = -1,
    ra = 0,
    ee & 6)
        throw Error(A(327));
    var r = e.callbackNode;
    if (gs() && e.callbackNode !== r)
        return null;
    var n = fa(e, e === Ce ? Oe : 0);
    if (n === 0)
        return null;
    if (n & 30 || n & e.expiredLanes || t)
        t = Oa(e, n);
    else {
        t = n;
        var s = ee;
        ee |= 2;
        var i = Ng();
        (Ce !== e || Oe !== t) && (tr = null,
        Is = ye() + 500,
        kn(e, t));
        do
            try {
                ub();
                break
            } catch (a) {
                Og(e, a)
            }
        while (!0);
        sd(),
        Pa.current = i,
        ee = s,
        xe !== null ? t = 0 : (Ce = null,
        Oe = 0,
        t = ke)
    }
    if (t !== 0) {
        if (t === 2 && (s = Au(e),
        s !== 0 && (n = s,
        t = sc(e, s))),
        t === 1)
            throw r = Bi,
            kn(e, 0),
            Ar(e, n),
            Xe(e, ye()),
            r;
        if (t === 6)
            Ar(e, n);
        else {
            if (s = e.current.alternate,
            !(n & 30) && !ab(s) && (t = Oa(e, n),
            t === 2 && (i = Au(e),
            i !== 0 && (n = i,
            t = sc(e, i))),
            t === 1))
                throw r = Bi,
                kn(e, 0),
                Ar(e, n),
                Xe(e, ye()),
                r;
            switch (e.finishedWork = s,
            e.finishedLanes = n,
            t) {
            case 0:
            case 1:
                throw Error(A(345));
            case 2:
                dn(e, Ge, tr);
                break;
            case 3:
                if (Ar(e, n),
                (n & 130023424) === n && (t = wd + 500 - ye(),
                10 < t)) {
                    if (fa(e, 0) !== 0)
                        break;
                    if (s = e.suspendedLanes,
                    (s & n) !== n) {
                        He(),
                        e.pingedLanes |= e.suspendedLanes & s;
                        break
                    }
                    e.timeoutHandle = Mu(dn.bind(null, e, Ge, tr), t);
                    break
                }
                dn(e, Ge, tr);
                break;
            case 4:
                if (Ar(e, n),
                (n & 4194240) === n)
                    break;
                for (t = e.eventTimes,
                s = -1; 0 < n; ) {
                    var o = 31 - Nt(n);
                    i = 1 << o,
                    o = t[o],
                    o > s && (s = o),
                    n &= ~i
                }
                if (n = s,
                n = ye() - n,
                n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * ob(n / 1960)) - n,
                10 < n) {
                    e.timeoutHandle = Mu(dn.bind(null, e, Ge, tr), n);
                    break
                }
                dn(e, Ge, tr);
                break;
            case 5:
                dn(e, Ge, tr);
                break;
            default:
                throw Error(A(329))
            }
        }
    }
    return Xe(e, ye()),
    e.callbackNode === r ? Ag.bind(null, e) : null
}
function sc(e, t) {
    var r = yi;
    return e.current.memoizedState.isDehydrated && (kn(e, t).flags |= 256),
    e = Oa(e, t),
    e !== 2 && (t = Ge,
    Ge = r,
    t !== null && ic(t)),
    e
}
function ic(e) {
    Ge === null ? Ge = e : Ge.push.apply(Ge, e)
}
function ab(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var r = t.updateQueue;
            if (r !== null && (r = r.stores,
            r !== null))
                for (var n = 0; n < r.length; n++) {
                    var s = r[n]
                      , i = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!It(i(), s))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (r = t.child,
        t.subtreeFlags & 16384 && r !== null)
            r.return = t,
            t = r;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Ar(e, t) {
    for (t &= ~yd,
    t &= ~Za,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var r = 31 - Nt(t)
          , n = 1 << r;
        e[r] = -1,
        t &= ~n
    }
}
function af(e) {
    if (ee & 6)
        throw Error(A(327));
    gs();
    var t = fa(e, 0);
    if (!(t & 1))
        return Xe(e, ye()),
        null;
    var r = Oa(e, t);
    if (e.tag !== 0 && r === 2) {
        var n = Au(e);
        n !== 0 && (t = n,
        r = sc(e, n))
    }
    if (r === 1)
        throw r = Bi,
        kn(e, 0),
        Ar(e, t),
        Xe(e, ye()),
        r;
    if (r === 6)
        throw Error(A(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    dn(e, Ge, tr),
    Xe(e, ye()),
    null
}
function bd(e, t) {
    var r = ee;
    ee |= 1;
    try {
        return e(t)
    } finally {
        ee = r,
        ee === 0 && (Is = ye() + 500,
        Ja && nn())
    }
}
function On(e) {
    Ur !== null && Ur.tag === 0 && !(ee & 6) && gs();
    var t = ee;
    ee |= 1;
    var r = gt.transition
      , n = ne;
    try {
        if (gt.transition = null,
        ne = 1,
        e)
            return e()
    } finally {
        ne = n,
        gt.transition = r,
        ee = t,
        !(ee & 6) && nn()
    }
}
function xd() {
    tt = cs.current,
    ue(cs)
}
function kn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var r = e.timeoutHandle;
    if (r !== -1 && (e.timeoutHandle = -1,
    Dw(r)),
    xe !== null)
        for (r = xe.return; r !== null; ) {
            var n = r;
            switch (td(n),
            n.tag) {
            case 1:
                n = n.type.childContextTypes,
                n != null && ya();
                break;
            case 3:
                Ns(),
                ue(Qe),
                ue(Ue),
                cd();
                break;
            case 5:
                ud(n);
                break;
            case 4:
                Ns();
                break;
            case 13:
                ue(he);
                break;
            case 19:
                ue(he);
                break;
            case 10:
                id(n.type._context);
                break;
            case 22:
            case 23:
                xd()
            }
            r = r.return
        }
    if (Ce = e,
    xe = e = Gr(e.current, null),
    Oe = tt = t,
    ke = 0,
    Bi = null,
    yd = Za = An = 0,
    Ge = yi = null,
    mn !== null) {
        for (t = 0; t < mn.length; t++)
            if (r = mn[t],
            n = r.interleaved,
            n !== null) {
                r.interleaved = null;
                var s = n.next
                  , i = r.pending;
                if (i !== null) {
                    var o = i.next;
                    i.next = s,
                    n.next = o
                }
                r.pending = n
            }
        mn = null
    }
    return e
}
function Og(e, t) {
    do {
        var r = xe;
        try {
            if (sd(),
            Xo.current = Ca,
            Ta) {
                for (var n = fe.memoizedState; n !== null; ) {
                    var s = n.queue;
                    s !== null && (s.pending = null),
                    n = n.next
                }
                Ta = !1
            }
            if (Rn = 0,
            Te = _e = fe = null,
            gi = !1,
            Mi = 0,
            vd.current = null,
            r === null || r.return === null) {
                ke = 1,
                Bi = t,
                xe = null;
                break
            }
            e: {
                var i = e
                  , o = r.return
                  , a = r
                  , l = t;
                if (t = Oe,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , c = a
                      , d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue,
                        c.memoizedState = f.memoizedState,
                        c.lanes = f.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var h = qh(o);
                    if (h !== null) {
                        h.flags &= -257,
                        Gh(h, o, a, i, t),
                        h.mode & 1 && Kh(i, u, t),
                        t = h,
                        l = u;
                        var y = t.updateQueue;
                        if (y === null) {
                            var g = new Set;
                            g.add(l),
                            t.updateQueue = g
                        } else
                            y.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Kh(i, u, t),
                            _d();
                            break e
                        }
                        l = Error(A(426))
                    }
                } else if (de && a.mode & 1) {
                    var w = qh(o);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256),
                        Gh(w, o, a, i, t),
                        rd(js(l, a));
                        break e
                    }
                }
                i = l = js(l, a),
                ke !== 4 && (ke = 2),
                yi === null ? yi = [i] : yi.push(i),
                i = o;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var m = pg(i, l, t);
                        Fh(i, m);
                        break e;
                    case 1:
                        a = l;
                        var p = i.type
                          , v = i.stateNode;
                        if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Kr === null || !Kr.has(v)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var x = mg(i, a, t);
                            Fh(i, x);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            Ig(r)
        } catch (S) {
            t = S,
            xe === r && r !== null && (xe = r = r.return);
            continue
        }
        break
    } while (!0)
}
function Ng() {
    var e = Pa.current;
    return Pa.current = Ca,
    e === null ? Ca : e
}
function _d() {
    (ke === 0 || ke === 3 || ke === 2) && (ke = 4),
    Ce === null || !(An & 268435455) && !(Za & 268435455) || Ar(Ce, Oe)
}
function Oa(e, t) {
    var r = ee;
    ee |= 2;
    var n = Ng();
    (Ce !== e || Oe !== t) && (tr = null,
    kn(e, t));
    do
        try {
            lb();
            break
        } catch (s) {
            Og(e, s)
        }
    while (!0);
    if (sd(),
    ee = r,
    Pa.current = n,
    xe !== null)
        throw Error(A(261));
    return Ce = null,
    Oe = 0,
    ke
}
function lb() {
    for (; xe !== null; )
        jg(xe)
}
function ub() {
    for (; xe !== null && !I0(); )
        jg(xe)
}
function jg(e) {
    var t = $g(e.alternate, e, tt);
    e.memoizedProps = e.pendingProps,
    t === null ? Ig(e) : xe = t,
    vd.current = null
}
function Ig(e) {
    var t = e;
    do {
        var r = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (r = rb(r, t),
            r !== null) {
                r.flags &= 32767,
                xe = r;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                ke = 6,
                xe = null;
                return
            }
        } else if (r = tb(r, t, tt),
        r !== null) {
            xe = r;
            return
        }
        if (t = t.sibling,
        t !== null) {
            xe = t;
            return
        }
        xe = t = e
    } while (t !== null);
    ke === 0 && (ke = 5)
}
function dn(e, t, r) {
    var n = ne
      , s = gt.transition;
    try {
        gt.transition = null,
        ne = 1,
        cb(e, t, r, n)
    } finally {
        gt.transition = s,
        ne = n
    }
    return null
}
function cb(e, t, r, n) {
    do
        gs();
    while (Ur !== null);
    if (ee & 6)
        throw Error(A(327));
    r = e.finishedWork;
    var s = e.finishedLanes;
    if (r === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    r === e.current)
        throw Error(A(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = r.lanes | r.childLanes;
    if (W0(e, i),
    e === Ce && (xe = Ce = null,
    Oe = 0),
    !(r.subtreeFlags & 2064) && !(r.flags & 2064) || No || (No = !0,
    Dg(ha, function() {
        return gs(),
        null
    })),
    i = (r.flags & 15990) !== 0,
    r.subtreeFlags & 15990 || i) {
        i = gt.transition,
        gt.transition = null;
        var o = ne;
        ne = 1;
        var a = ee;
        ee |= 4,
        vd.current = null,
        sb(e, r),
        Pg(r, e),
        Aw($u),
        pa = !!Lu,
        $u = Lu = null,
        e.current = r,
        ib(r),
        L0(),
        ee = a,
        ne = o,
        gt.transition = i
    } else
        e.current = r;
    if (No && (No = !1,
    Ur = e,
    Aa = s),
    i = e.pendingLanes,
    i === 0 && (Kr = null),
    M0(r.stateNode),
    Xe(e, ye()),
    t !== null)
        for (n = e.onRecoverableError,
        r = 0; r < t.length; r++)
            s = t[r],
            n(s.value, {
                componentStack: s.stack,
                digest: s.digest
            });
    if (Ra)
        throw Ra = !1,
        e = rc,
        rc = null,
        e;
    return Aa & 1 && e.tag !== 0 && gs(),
    i = e.pendingLanes,
    i & 1 ? e === nc ? wi++ : (wi = 0,
    nc = e) : wi = 0,
    nn(),
    null
}
function gs() {
    if (Ur !== null) {
        var e = pm(Aa)
          , t = gt.transition
          , r = ne;
        try {
            if (gt.transition = null,
            ne = 16 > e ? 16 : e,
            Ur === null)
                var n = !1;
            else {
                if (e = Ur,
                Ur = null,
                Aa = 0,
                ee & 6)
                    throw Error(A(331));
                var s = ee;
                for (ee |= 4,
                $ = e.current; $ !== null; ) {
                    var i = $
                      , o = i.child;
                    if ($.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for ($ = u; $ !== null; ) {
                                    var c = $;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        vi(8, c, i)
                                    }
                                    var d = c.child;
                                    if (d !== null)
                                        d.return = c,
                                        $ = d;
                                    else
                                        for (; $ !== null; ) {
                                            c = $;
                                            var f = c.sibling
                                              , h = c.return;
                                            if (Eg(c),
                                            c === u) {
                                                $ = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = h,
                                                $ = f;
                                                break
                                            }
                                            $ = h
                                        }
                                }
                            }
                            var y = i.alternate;
                            if (y !== null) {
                                var g = y.child;
                                if (g !== null) {
                                    y.child = null;
                                    do {
                                        var w = g.sibling;
                                        g.sibling = null,
                                        g = w
                                    } while (g !== null)
                                }
                            }
                            $ = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null)
                        o.return = i,
                        $ = o;
                    else
                        e: for (; $ !== null; ) {
                            if (i = $,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    vi(9, i, i.return)
                                }
                            var m = i.sibling;
                            if (m !== null) {
                                m.return = i.return,
                                $ = m;
                                break e
                            }
                            $ = i.return
                        }
                }
                var p = e.current;
                for ($ = p; $ !== null; ) {
                    o = $;
                    var v = o.child;
                    if (o.subtreeFlags & 2064 && v !== null)
                        v.return = o,
                        $ = v;
                    else
                        e: for (o = p; $ !== null; ) {
                            if (a = $,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Xa(9, a)
                                    }
                                } catch (S) {
                                    ve(a, a.return, S)
                                }
                            if (a === o) {
                                $ = null;
                                break e
                            }
                            var x = a.sibling;
                            if (x !== null) {
                                x.return = a.return,
                                $ = x;
                                break e
                            }
                            $ = a.return
                        }
                }
                if (ee = s,
                nn(),
                Gt && typeof Gt.onPostCommitFiberRoot == "function")
                    try {
                        Gt.onPostCommitFiberRoot(Wa, e)
                    } catch {}
                n = !0
            }
            return n
        } finally {
            ne = r,
            gt.transition = t
        }
    }
    return !1
}
function lf(e, t, r) {
    t = js(r, t),
    t = pg(e, t, 1),
    e = Vr(e, t, 1),
    t = He(),
    e !== null && (so(e, 1, t),
    Xe(e, t))
}
function ve(e, t, r) {
    if (e.tag === 3)
        lf(e, e, r);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                lf(t, e, r);
                break
            } else if (t.tag === 1) {
                var n = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Kr === null || !Kr.has(n))) {
                    e = js(r, e),
                    e = mg(t, e, 1),
                    t = Vr(t, e, 1),
                    e = He(),
                    t !== null && (so(t, 1, e),
                    Xe(t, e));
                    break
                }
            }
            t = t.return
        }
}
function db(e, t, r) {
    var n = e.pingCache;
    n !== null && n.delete(t),
    t = He(),
    e.pingedLanes |= e.suspendedLanes & r,
    Ce === e && (Oe & r) === r && (ke === 4 || ke === 3 && (Oe & 130023424) === Oe && 500 > ye() - wd ? kn(e, 0) : yd |= r),
    Xe(e, t)
}
function Lg(e, t) {
    t === 0 && (e.mode & 1 ? (t = _o,
    _o <<= 1,
    !(_o & 130023424) && (_o = 4194304)) : t = 1);
    var r = He();
    e = dr(e, t),
    e !== null && (so(e, t, r),
    Xe(e, r))
}
function hb(e) {
    var t = e.memoizedState
      , r = 0;
    t !== null && (r = t.retryLane),
    Lg(e, r)
}
function fb(e, t) {
    var r = 0;
    switch (e.tag) {
    case 13:
        var n = e.stateNode
          , s = e.memoizedState;
        s !== null && (r = s.retryLane);
        break;
    case 19:
        n = e.stateNode;
        break;
    default:
        throw Error(A(314))
    }
    n !== null && n.delete(t),
    Lg(e, r)
}
var $g;
$g = function(e, t, r) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Qe.current)
            Je = !0;
        else {
            if (!(e.lanes & r) && !(t.flags & 128))
                return Je = !1,
                eb(e, t, r);
            Je = !!(e.flags & 131072)
        }
    else
        Je = !1,
        de && t.flags & 1048576 && Fm(t, xa, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var n = t.type;
        ea(e, t),
        e = t.pendingProps;
        var s = Rs(t, Ue.current);
        ms(t, r),
        s = hd(null, t, n, e, s, r);
        var i = fd();
        return t.flags |= 1,
        typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Ye(n) ? (i = !0,
        wa(t)) : i = !1,
        t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
        ad(t),
        s.updater = Ya,
        t.stateNode = s,
        s._reactInternals = t,
        Vu(t, n, e, r),
        t = Gu(null, t, n, !0, i, r)) : (t.tag = 0,
        de && i && ed(t),
        Be(null, t, s, r),
        t = t.child),
        t;
    case 16:
        n = t.elementType;
        e: {
            switch (ea(e, t),
            e = t.pendingProps,
            s = n._init,
            n = s(n._payload),
            t.type = n,
            s = t.tag = mb(n),
            e = Et(n, e),
            s) {
            case 0:
                t = qu(null, t, n, e, r);
                break e;
            case 1:
                t = Yh(null, t, n, e, r);
                break e;
            case 11:
                t = Jh(null, t, n, e, r);
                break e;
            case 14:
                t = Qh(null, t, n, Et(n.type, e), r);
                break e
            }
            throw Error(A(306, n, ""))
        }
        return t;
    case 0:
        return n = t.type,
        s = t.pendingProps,
        s = t.elementType === n ? s : Et(n, s),
        qu(e, t, n, s, r);
    case 1:
        return n = t.type,
        s = t.pendingProps,
        s = t.elementType === n ? s : Et(n, s),
        Yh(e, t, n, s, r);
    case 3:
        e: {
            if (wg(t),
            e === null)
                throw Error(A(387));
            n = t.pendingProps,
            i = t.memoizedState,
            s = i.element,
            Km(e, t),
            ka(t, n, null, r);
            var o = t.memoizedState;
            if (n = o.element,
            i.isDehydrated)
                if (i = {
                    element: n,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    s = js(Error(A(423)), t),
                    t = Xh(e, t, n, r, s);
                    break e
                } else if (n !== s) {
                    s = js(Error(A(424)), t),
                    t = Xh(e, t, n, r, s);
                    break e
                } else
                    for (st = Wr(t.stateNode.containerInfo.firstChild),
                    it = t,
                    de = !0,
                    Ot = null,
                    r = Wm(t, null, n, r),
                    t.child = r; r; )
                        r.flags = r.flags & -3 | 4096,
                        r = r.sibling;
            else {
                if (As(),
                n === s) {
                    t = hr(e, t, r);
                    break e
                }
                Be(e, t, n, r)
            }
            t = t.child
        }
        return t;
    case 5:
        return qm(t),
        e === null && zu(t),
        n = t.type,
        s = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        o = s.children,
        Du(n, s) ? o = null : i !== null && Du(n, i) && (t.flags |= 32),
        yg(e, t),
        Be(e, t, o, r),
        t.child;
    case 6:
        return e === null && zu(t),
        null;
    case 13:
        return bg(e, t, r);
    case 4:
        return ld(t, t.stateNode.containerInfo),
        n = t.pendingProps,
        e === null ? t.child = Os(t, null, n, r) : Be(e, t, n, r),
        t.child;
    case 11:
        return n = t.type,
        s = t.pendingProps,
        s = t.elementType === n ? s : Et(n, s),
        Jh(e, t, n, s, r);
    case 7:
        return Be(e, t, t.pendingProps, r),
        t.child;
    case 8:
        return Be(e, t, t.pendingProps.children, r),
        t.child;
    case 12:
        return Be(e, t, t.pendingProps.children, r),
        t.child;
    case 10:
        e: {
            if (n = t.type._context,
            s = t.pendingProps,
            i = t.memoizedProps,
            o = s.value,
            oe(_a, n._currentValue),
            n._currentValue = o,
            i !== null)
                if (It(i.value, o)) {
                    if (i.children === s.children && !Qe.current) {
                        t = hr(e, t, r);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var a = i.dependencies;
                        if (a !== null) {
                            o = i.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === n) {
                                    if (i.tag === 1) {
                                        l = lr(-1, r & -r),
                                        l.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? l.next = l : (l.next = c.next,
                                            c.next = l),
                                            u.pending = l
                                        }
                                    }
                                    i.lanes |= r,
                                    l = i.alternate,
                                    l !== null && (l.lanes |= r),
                                    Hu(i.return, r, t),
                                    a.lanes |= r;
                                    break
                                }
                                l = l.next
                            }
                        } else if (i.tag === 10)
                            o = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (o = i.return,
                            o === null)
                                throw Error(A(341));
                            o.lanes |= r,
                            a = o.alternate,
                            a !== null && (a.lanes |= r),
                            Hu(o, r, t),
                            o = i.sibling
                        } else
                            o = i.child;
                        if (o !== null)
                            o.return = i;
                        else
                            for (o = i; o !== null; ) {
                                if (o === t) {
                                    o = null;
                                    break
                                }
                                if (i = o.sibling,
                                i !== null) {
                                    i.return = o.return,
                                    o = i;
                                    break
                                }
                                o = o.return
                            }
                        i = o
                    }
            Be(e, t, s.children, r),
            t = t.child
        }
        return t;
    case 9:
        return s = t.type,
        n = t.pendingProps.children,
        ms(t, r),
        s = vt(s),
        n = n(s),
        t.flags |= 1,
        Be(e, t, n, r),
        t.child;
    case 14:
        return n = t.type,
        s = Et(n, t.pendingProps),
        s = Et(n.type, s),
        Qh(e, t, n, s, r);
    case 15:
        return gg(e, t, t.type, t.pendingProps, r);
    case 17:
        return n = t.type,
        s = t.pendingProps,
        s = t.elementType === n ? s : Et(n, s),
        ea(e, t),
        t.tag = 1,
        Ye(n) ? (e = !0,
        wa(t)) : e = !1,
        ms(t, r),
        fg(t, n, s),
        Vu(t, n, s, r),
        Gu(null, t, n, !0, e, r);
    case 19:
        return xg(e, t, r);
    case 22:
        return vg(e, t, r)
    }
    throw Error(A(156, t.tag))
}
;
function Dg(e, t) {
    return cm(e, t)
}
function pb(e, t, r, n) {
    this.tag = e,
    this.key = r,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = n,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function mt(e, t, r, n) {
    return new pb(e,t,r,n)
}
function Sd(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function mb(e) {
    if (typeof e == "function")
        return Sd(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === zc)
            return 11;
        if (e === Hc)
            return 14
    }
    return 2
}
function Gr(e, t) {
    var r = e.alternate;
    return r === null ? (r = mt(e.tag, t, e.key, e.mode),
    r.elementType = e.elementType,
    r.type = e.type,
    r.stateNode = e.stateNode,
    r.alternate = e,
    e.alternate = r) : (r.pendingProps = t,
    r.type = e.type,
    r.flags = 0,
    r.subtreeFlags = 0,
    r.deletions = null),
    r.flags = e.flags & 14680064,
    r.childLanes = e.childLanes,
    r.lanes = e.lanes,
    r.child = e.child,
    r.memoizedProps = e.memoizedProps,
    r.memoizedState = e.memoizedState,
    r.updateQueue = e.updateQueue,
    t = e.dependencies,
    r.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    r.sibling = e.sibling,
    r.index = e.index,
    r.ref = e.ref,
    r
}
function na(e, t, r, n, s, i) {
    var o = 2;
    if (n = e,
    typeof e == "function")
        Sd(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case es:
            return En(r.children, s, i, t);
        case Bc:
            o = 8,
            s |= 8;
            break;
        case mu:
            return e = mt(12, r, t, s | 2),
            e.elementType = mu,
            e.lanes = i,
            e;
        case gu:
            return e = mt(13, r, t, s),
            e.elementType = gu,
            e.lanes = i,
            e;
        case vu:
            return e = mt(19, r, t, s),
            e.elementType = vu,
            e.lanes = i,
            e;
        case qp:
            return el(r, s, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Vp:
                    o = 10;
                    break e;
                case Kp:
                    o = 9;
                    break e;
                case zc:
                    o = 11;
                    break e;
                case Hc:
                    o = 14;
                    break e;
                case Cr:
                    o = 16,
                    n = null;
                    break e
                }
            throw Error(A(130, e == null ? e : typeof e, ""))
        }
    return t = mt(o, r, t, s),
    t.elementType = e,
    t.type = n,
    t.lanes = i,
    t
}
function En(e, t, r, n) {
    return e = mt(7, e, n, t),
    e.lanes = r,
    e
}
function el(e, t, r, n) {
    return e = mt(22, e, n, t),
    e.elementType = qp,
    e.lanes = r,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Zl(e, t, r) {
    return e = mt(6, e, null, t),
    e.lanes = r,
    e
}
function eu(e, t, r) {
    return t = mt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = r,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function gb(e, t, r, n, s) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Il(0),
    this.expirationTimes = Il(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Il(0),
    this.identifierPrefix = n,
    this.onRecoverableError = s,
    this.mutableSourceEagerHydrationData = null
}
function kd(e, t, r, n, s, i, o, a, l) {
    return e = new gb(e,t,r,a,l),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = mt(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: n,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    ad(i),
    e
}
function vb(e, t, r) {
    var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Zn,
        key: n == null ? null : "" + n,
        children: e,
        containerInfo: t,
        implementation: r
    }
}
function Mg(e) {
    if (!e)
        return Qr;
    e = e._reactInternals;
    e: {
        if (In(e) !== e || e.tag !== 1)
            throw Error(A(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Ye(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(A(171))
    }
    if (e.tag === 1) {
        var r = e.type;
        if (Ye(r))
            return Mm(e, r, t)
    }
    return t
}
function Ug(e, t, r, n, s, i, o, a, l) {
    return e = kd(r, n, !0, e, s, i, o, a, l),
    e.context = Mg(null),
    r = e.current,
    n = He(),
    s = qr(r),
    i = lr(n, s),
    i.callback = t ?? null,
    Vr(r, i, s),
    e.current.lanes = s,
    so(e, s, n),
    Xe(e, n),
    e
}
function tl(e, t, r, n) {
    var s = t.current
      , i = He()
      , o = qr(s);
    return r = Mg(r),
    t.context === null ? t.context = r : t.pendingContext = r,
    t = lr(i, o),
    t.payload = {
        element: e
    },
    n = n === void 0 ? null : n,
    n !== null && (t.callback = n),
    e = Vr(s, t, o),
    e !== null && (jt(e, s, o, i),
    Yo(e, s, o)),
    o
}
function Na(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function uf(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var r = e.retryLane;
        e.retryLane = r !== 0 && r < t ? r : t
    }
}
function Ed(e, t) {
    uf(e, t),
    (e = e.alternate) && uf(e, t)
}
function yb() {
    return null
}
var Fg = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Td(e) {
    this._internalRoot = e
}
rl.prototype.render = Td.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(A(409));
    tl(e, t, null, null)
}
;
rl.prototype.unmount = Td.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        On(function() {
            tl(null, e, null, null)
        }),
        t[cr] = null
    }
}
;
function rl(e) {
    this._internalRoot = e
}
rl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = vm();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var r = 0; r < Rr.length && t !== 0 && t < Rr[r].priority; r++)
            ;
        Rr.splice(r, 0, e),
        r === 0 && wm(e)
    }
}
;
function Cd(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function nl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function cf() {}
function wb(e, t, r, n, s) {
    if (s) {
        if (typeof n == "function") {
            var i = n;
            n = function() {
                var u = Na(o);
                i.call(u)
            }
        }
        var o = Ug(t, n, e, 0, null, !1, !1, "", cf);
        return e._reactRootContainer = o,
        e[cr] = o.current,
        ji(e.nodeType === 8 ? e.parentNode : e),
        On(),
        o
    }
    for (; s = e.lastChild; )
        e.removeChild(s);
    if (typeof n == "function") {
        var a = n;
        n = function() {
            var u = Na(l);
            a.call(u)
        }
    }
    var l = kd(e, 0, !1, null, null, !1, !1, "", cf);
    return e._reactRootContainer = l,
    e[cr] = l.current,
    ji(e.nodeType === 8 ? e.parentNode : e),
    On(function() {
        tl(t, l, r, n)
    }),
    l
}
function sl(e, t, r, n, s) {
    var i = r._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof s == "function") {
            var a = s;
            s = function() {
                var l = Na(o);
                a.call(l)
            }
        }
        tl(t, o, e, s)
    } else
        o = wb(r, t, e, s, n);
    return Na(o)
}
mm = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var r = ai(t.pendingLanes);
            r !== 0 && (Kc(t, r | 1),
            Xe(t, ye()),
            !(ee & 6) && (Is = ye() + 500,
            nn()))
        }
        break;
    case 13:
        On(function() {
            var n = dr(e, 1);
            if (n !== null) {
                var s = He();
                jt(n, e, 1, s)
            }
        }),
        Ed(e, 1)
    }
}
;
qc = function(e) {
    if (e.tag === 13) {
        var t = dr(e, 134217728);
        if (t !== null) {
            var r = He();
            jt(t, e, 134217728, r)
        }
        Ed(e, 134217728)
    }
}
;
gm = function(e) {
    if (e.tag === 13) {
        var t = qr(e)
          , r = dr(e, t);
        if (r !== null) {
            var n = He();
            jt(r, e, t, n)
        }
        Ed(e, t)
    }
}
;
vm = function() {
    return ne
}
;
ym = function(e, t) {
    var r = ne;
    try {
        return ne = e,
        t()
    } finally {
        ne = r
    }
}
;
Cu = function(e, t, r) {
    switch (t) {
    case "input":
        if (bu(e, r),
        t = r.name,
        r.type === "radio" && t != null) {
            for (r = e; r.parentNode; )
                r = r.parentNode;
            for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < r.length; t++) {
                var n = r[t];
                if (n !== e && n.form === e.form) {
                    var s = Ga(n);
                    if (!s)
                        throw Error(A(90));
                    Jp(n),
                    bu(n, s)
                }
            }
        }
        break;
    case "textarea":
        Yp(e, r);
        break;
    case "select":
        t = r.value,
        t != null && ds(e, !!r.multiple, t, !1)
    }
}
;
sm = bd;
im = On;
var bb = {
    usingClientEntryPoint: !1,
    Events: [oo, ss, Ga, rm, nm, bd]
}
  , ti = {
    findFiberByHostInstance: pn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , xb = {
    bundleType: ti.bundleType,
    version: ti.version,
    rendererPackageName: ti.rendererPackageName,
    rendererConfig: ti.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: mr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = lm(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: ti.findFiberByHostInstance || yb,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var jo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!jo.isDisabled && jo.supportsFiber)
        try {
            Wa = jo.inject(xb),
            Gt = jo
        } catch {}
}
lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bb;
lt.createPortal = function(e, t) {
    var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Cd(t))
        throw Error(A(200));
    return vb(e, t, null, r)
}
;
lt.createRoot = function(e, t) {
    if (!Cd(e))
        throw Error(A(299));
    var r = !1
      , n = ""
      , s = Fg;
    return t != null && (t.unstable_strictMode === !0 && (r = !0),
    t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    t = kd(e, 1, !1, null, null, r, !1, n, s),
    e[cr] = t.current,
    ji(e.nodeType === 8 ? e.parentNode : e),
    new Td(t)
}
;
lt.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","),
        Error(A(268, e)));
    return e = lm(t),
    e = e === null ? null : e.stateNode,
    e
}
;
lt.flushSync = function(e) {
    return On(e)
}
;
lt.hydrate = function(e, t, r) {
    if (!nl(t))
        throw Error(A(200));
    return sl(null, e, t, !0, r)
}
;
lt.hydrateRoot = function(e, t, r) {
    if (!Cd(e))
        throw Error(A(405));
    var n = r != null && r.hydratedSources || null
      , s = !1
      , i = ""
      , o = Fg;
    if (r != null && (r.unstable_strictMode === !0 && (s = !0),
    r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
    r.onRecoverableError !== void 0 && (o = r.onRecoverableError)),
    t = Ug(t, null, e, 1, r ?? null, s, !1, i, o),
    e[cr] = t.current,
    ji(e),
    n)
        for (e = 0; e < n.length; e++)
            r = n[e],
            s = r._getVersion,
            s = s(r._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, s] : t.mutableSourceEagerHydrationData.push(r, s);
    return new rl(t)
}
;
lt.render = function(e, t, r) {
    if (!nl(t))
        throw Error(A(200));
    return sl(null, e, t, !1, r)
}
;
lt.unmountComponentAtNode = function(e) {
    if (!nl(e))
        throw Error(A(40));
    return e._reactRootContainer ? (On(function() {
        sl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[cr] = null
        })
    }),
    !0) : !1
}
;
lt.unstable_batchedUpdates = bd;
lt.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
    if (!nl(r))
        throw Error(A(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(A(38));
    return sl(e, t, r, !1, n)
}
;
lt.version = "18.3.1-next-f1338f8080-20240426";
function Bg() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bg)
        } catch (e) {
            console.error(e)
        }
}
Bg(),
Bp.exports = lt;
var lo = Bp.exports;
const zg = Pp(lo);
var Hg, df = lo;
Hg = df.createRoot,
df.hydrateRoot;
var il = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , ol = typeof window > "u" || "Deno"in globalThis;
function Tt() {}
function _b(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Sb(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function kb(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function oc(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Eb(e, t) {
    return typeof e == "function" ? e(t) : e
}
function hf(e, t) {
    const {type: r="all", exact: n, fetchStatus: s, predicate: i, queryKey: o, stale: a} = e;
    if (o) {
        if (n) {
            if (t.queryHash !== Pd(o, t.options))
                return !1
        } else if (!Hi(t.queryKey, o))
            return !1
    }
    if (r !== "all") {
        const l = t.isActive();
        if (r === "active" && !l || r === "inactive" && l)
            return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || s && s !== t.state.fetchStatus || i && !i(t))
}
function ff(e, t) {
    const {exact: r, status: n, predicate: s, mutationKey: i} = e;
    if (i) {
        if (!t.options.mutationKey)
            return !1;
        if (r) {
            if (zi(t.options.mutationKey) !== zi(i))
                return !1
        } else if (!Hi(t.options.mutationKey, i))
            return !1
    }
    return !(n && t.state.status !== n || s && !s(t))
}
function Pd(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || zi)(e)
}
function zi(e) {
    return JSON.stringify(e, (t, r) => ac(r) ? Object.keys(r).sort().reduce( (n, s) => (n[s] = r[s],
    n), {}) : r)
}
function Hi(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(r => Hi(e[r], t[r])) : !1
}
function Wg(e, t) {
    if (e === t)
        return e;
    const r = pf(e) && pf(t);
    if (r || ac(e) && ac(t)) {
        const n = r ? e : Object.keys(e)
          , s = n.length
          , i = r ? t : Object.keys(t)
          , o = i.length
          , a = r ? [] : {}
          , l = new Set(n);
        let u = 0;
        for (let c = 0; c < o; c++) {
            const d = r ? c : i[c];
            (!r && l.has(d) || r) && e[d] === void 0 && t[d] === void 0 ? (a[d] = void 0,
            u++) : (a[d] = Wg(e[d], t[d]),
            a[d] === e[d] && e[d] !== void 0 && u++)
        }
        return s === o && u === s ? e : a
    }
    return t
}
function pf(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function ac(e) {
    if (!mf(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const r = t.prototype;
    return !(!mf(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function mf(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function Tb(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function Cb(e, t, r) {
    return typeof r.structuralSharing == "function" ? r.structuralSharing(e, t) : r.structuralSharing !== !1 ? Wg(e, t) : t
}
function Pb(e, t, r=0) {
    const n = [...e, t];
    return r && n.length > r ? n.slice(1) : n
}
function Rb(e, t, r=0) {
    const n = [t, ...e];
    return r && n.length > r ? n.slice(0, -1) : n
}
var Rd = Symbol();
function Vg(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Rd ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var yn, jr, bs, bp, Ab = (bp = class extends il {
    constructor() {
        super();
        te(this, yn);
        te(this, jr);
        te(this, bs);
        V(this, bs, t => {
            if (!ol && window.addEventListener) {
                const r = () => t();
                return window.addEventListener("visibilitychange", r, !1),
                () => {
                    window.removeEventListener("visibilitychange", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        T(this, jr) || this.setEventListener(T(this, bs))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = T(this, jr)) == null || t.call(this),
        V(this, jr, void 0))
    }
    setEventListener(t) {
        var r;
        V(this, bs, t),
        (r = T(this, jr)) == null || r.call(this),
        V(this, jr, t(n => {
            typeof n == "boolean" ? this.setFocused(n) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        T(this, yn) !== t && (V(this, yn, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(r => {
            r(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof T(this, yn) == "boolean" ? T(this, yn) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
yn = new WeakMap,
jr = new WeakMap,
bs = new WeakMap,
bp), Kg = new Ab, xs, Ir, _s, xp, Ob = (xp = class extends il {
    constructor() {
        super();
        te(this, xs, !0);
        te(this, Ir);
        te(this, _s);
        V(this, _s, t => {
            if (!ol && window.addEventListener) {
                const r = () => t(!0)
                  , n = () => t(!1);
                return window.addEventListener("online", r, !1),
                window.addEventListener("offline", n, !1),
                () => {
                    window.removeEventListener("online", r),
                    window.removeEventListener("offline", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        T(this, Ir) || this.setEventListener(T(this, _s))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = T(this, Ir)) == null || t.call(this),
        V(this, Ir, void 0))
    }
    setEventListener(t) {
        var r;
        V(this, _s, t),
        (r = T(this, Ir)) == null || r.call(this),
        V(this, Ir, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        T(this, xs) !== t && (V(this, xs, t),
        this.listeners.forEach(n => {
            n(t)
        }
        ))
    }
    isOnline() {
        return T(this, xs)
    }
}
,
xs = new WeakMap,
Ir = new WeakMap,
_s = new WeakMap,
xp), ja = new Ob;
function Nb() {
    let e, t;
    const r = new Promise( (s, i) => {
        e = s,
        t = i
    }
    );
    r.status = "pending",
    r.catch( () => {}
    );
    function n(s) {
        Object.assign(r, s),
        delete r.resolve,
        delete r.reject
    }
    return r.resolve = s => {
        n({
            status: "fulfilled",
            value: s
        }),
        e(s)
    }
    ,
    r.reject = s => {
        n({
            status: "rejected",
            reason: s
        }),
        t(s)
    }
    ,
    r
}
function jb(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function qg(e) {
    return (e ?? "online") === "online" ? ja.isOnline() : !0
}
var Gg = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function tu(e) {
    return e instanceof Gg
}
function Jg(e) {
    let t = !1, r = 0, n = !1, s;
    const i = Nb()
      , o = g => {
        var w;
        n || (f(new Gg(g)),
        (w = e.abort) == null || w.call(e))
    }
      , a = () => {
        t = !0
    }
      , l = () => {
        t = !1
    }
      , u = () => Kg.isFocused() && (e.networkMode === "always" || ja.isOnline()) && e.canRun()
      , c = () => qg(e.networkMode) && e.canRun()
      , d = g => {
        var w;
        n || (n = !0,
        (w = e.onSuccess) == null || w.call(e, g),
        s == null || s(),
        i.resolve(g))
    }
      , f = g => {
        var w;
        n || (n = !0,
        (w = e.onError) == null || w.call(e, g),
        s == null || s(),
        i.reject(g))
    }
      , h = () => new Promise(g => {
        var w;
        s = m => {
            (n || u()) && g(m)
        }
        ,
        (w = e.onPause) == null || w.call(e)
    }
    ).then( () => {
        var g;
        s = void 0,
        n || (g = e.onContinue) == null || g.call(e)
    }
    )
      , y = () => {
        if (n)
            return;
        let g;
        const w = r === 0 ? e.initialPromise : void 0;
        try {
            g = w ?? e.fn()
        } catch (m) {
            g = Promise.reject(m)
        }
        Promise.resolve(g).then(d).catch(m => {
            var k;
            if (n)
                return;
            const p = e.retry ?? (ol ? 0 : 3)
              , v = e.retryDelay ?? jb
              , x = typeof v == "function" ? v(r, m) : v
              , S = p === !0 || typeof p == "number" && r < p || typeof p == "function" && p(r, m);
            if (t || !S) {
                f(m);
                return
            }
            r++,
            (k = e.onFail) == null || k.call(e, r, m),
            Tb(x).then( () => u() ? void 0 : h()).then( () => {
                t ? f(m) : y()
            }
            )
        }
        )
    }
    ;
    return {
        promise: i,
        cancel: o,
        continue: () => (s == null || s(),
        i),
        cancelRetry: a,
        continueRetry: l,
        canStart: c,
        start: () => (c() ? y() : h().then(y),
        i)
    }
}
var Ib = e => setTimeout(e, 0);
function Lb() {
    let e = []
      , t = 0
      , r = a => {
        a()
    }
      , n = a => {
        a()
    }
      , s = Ib;
    const i = a => {
        t ? e.push(a) : s( () => {
            r(a)
        }
        )
    }
      , o = () => {
        const a = e;
        e = [],
        a.length && s( () => {
            n( () => {
                a.forEach(l => {
                    r(l)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: a => {
            let l;
            t++;
            try {
                l = a()
            } finally {
                t--,
                t || o()
            }
            return l
        }
        ,
        batchCalls: a => (...l) => {
            i( () => {
                a(...l)
            }
            )
        }
        ,
        schedule: i,
        setNotifyFunction: a => {
            r = a
        }
        ,
        setBatchNotifyFunction: a => {
            n = a
        }
        ,
        setScheduler: a => {
            s = a
        }
    }
}
var ze = Lb(), wn, _p, Qg = (_p = class {
    constructor() {
        te(this, wn)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        Sb(this.gcTime) && V(this, wn, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (ol ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        T(this, wn) && (clearTimeout(T(this, wn)),
        V(this, wn, void 0))
    }
}
,
wn = new WeakMap,
_p), Ss, bn, ht, xn, De, to, _n, Pt, er, Sp, $b = (Sp = class extends Qg {
    constructor(t) {
        super();
        te(this, Pt);
        te(this, Ss);
        te(this, bn);
        te(this, ht);
        te(this, xn);
        te(this, De);
        te(this, to);
        te(this, _n);
        V(this, _n, !1),
        V(this, to, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        V(this, xn, t.client),
        V(this, ht, T(this, xn).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        V(this, Ss, Mb(this.options)),
        this.state = t.state ?? T(this, Ss),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = T(this, De)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...T(this, to),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && T(this, ht).remove(this)
    }
    setData(t, r) {
        const n = Cb(this.state.data, t, this.options);
        return Ie(this, Pt, er).call(this, {
            data: n,
            type: "success",
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual
        }),
        n
    }
    setState(t, r) {
        Ie(this, Pt, er).call(this, {
            type: "setState",
            state: t,
            setStateOptions: r
        })
    }
    cancel(t) {
        var n, s;
        const r = (n = T(this, De)) == null ? void 0 : n.promise;
        return (s = T(this, De)) == null || s.cancel(t),
        r ? r.then(Tt).catch(Tt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(T(this, Ss))
    }
    isActive() {
        return this.observers.some(t => Eb(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Rd || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => oc(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !kb(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var r;
        const t = this.observers.find(n => n.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (r = T(this, De)) == null || r.continue()
    }
    onOnline() {
        var r;
        const t = this.observers.find(n => n.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (r = T(this, De)) == null || r.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        T(this, ht).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(r => r !== t),
        this.observers.length || (T(this, De) && (T(this, _n) ? T(this, De).cancel({
            revert: !0
        }) : T(this, De).cancelRetry()),
        this.scheduleGc()),
        T(this, ht).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Ie(this, Pt, er).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, r) {
        var u, c, d;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (r != null && r.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (T(this, De))
                return T(this, De).continueRetry(),
                T(this, De).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const f = this.observers.find(h => h.options.queryFn);
            f && this.setOptions(f.options)
        }
        const n = new AbortController
          , s = f => {
            Object.defineProperty(f, "signal", {
                enumerable: !0,
                get: () => (V(this, _n, !0),
                n.signal)
            })
        }
          , i = () => {
            const f = Vg(this.options, r)
              , y = ( () => {
                const g = {
                    client: T(this, xn),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return s(g),
                g
            }
            )();
            return V(this, _n, !1),
            this.options.persister ? this.options.persister(f, y, this) : f(y)
        }
          , a = ( () => {
            const f = {
                fetchOptions: r,
                options: this.options,
                queryKey: this.queryKey,
                client: T(this, xn),
                state: this.state,
                fetchFn: i
            };
            return s(f),
            f
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(a, this),
        V(this, bn, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = a.fetchOptions) == null ? void 0 : c.meta)) && Ie(this, Pt, er).call(this, {
            type: "fetch",
            meta: (d = a.fetchOptions) == null ? void 0 : d.meta
        });
        const l = f => {
            var h, y, g, w;
            tu(f) && f.silent || Ie(this, Pt, er).call(this, {
                type: "error",
                error: f
            }),
            tu(f) || ((y = (h = T(this, ht).config).onError) == null || y.call(h, f, this),
            (w = (g = T(this, ht).config).onSettled) == null || w.call(g, this.state.data, f, this)),
            this.scheduleGc()
        }
        ;
        return V(this, De, Jg({
            initialPromise: r == null ? void 0 : r.initialPromise,
            fn: a.fetchFn,
            abort: n.abort.bind(n),
            onSuccess: f => {
                var h, y, g, w;
                if (f === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(f)
                } catch (m) {
                    l(m);
                    return
                }
                (y = (h = T(this, ht).config).onSuccess) == null || y.call(h, f, this),
                (w = (g = T(this, ht).config).onSettled) == null || w.call(g, f, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (f, h) => {
                Ie(this, Pt, er).call(this, {
                    type: "failed",
                    failureCount: f,
                    error: h
                })
            }
            ,
            onPause: () => {
                Ie(this, Pt, er).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Ie(this, Pt, er).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: a.options.retry,
            retryDelay: a.options.retryDelay,
            networkMode: a.options.networkMode,
            canRun: () => !0
        })),
        T(this, De).start()
    }
}
,
Ss = new WeakMap,
bn = new WeakMap,
ht = new WeakMap,
xn = new WeakMap,
De = new WeakMap,
to = new WeakMap,
_n = new WeakMap,
Pt = new WeakSet,
er = function(t) {
    const r = n => {
        switch (t.type) {
        case "failed":
            return {
                ...n,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...n,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...n,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...n,
                ...Db(n.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return V(this, bn, void 0),
            {
                ...n,
                data: t.data,
                dataUpdateCount: n.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const s = t.error;
            return tu(s) && s.revert && T(this, bn) ? {
                ...T(this, bn),
                fetchStatus: "idle"
            } : {
                ...n,
                error: s,
                errorUpdateCount: n.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: n.fetchFailureCount + 1,
                fetchFailureReason: s,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...n,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...n,
                ...t.state
            }
        }
    }
    ;
    this.state = r(this.state),
    ze.batch( () => {
        this.observers.forEach(n => {
            n.onQueryUpdate()
        }
        ),
        T(this, ht).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Sp);
function Db(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: qg(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function Mb(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , r = t !== void 0
      , n = r ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: r ? n ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: r ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var zt, kp, Ub = (kp = class extends il {
    constructor(t={}) {
        super();
        te(this, zt);
        this.config = t,
        V(this, zt, new Map)
    }
    build(t, r, n) {
        const s = r.queryKey
          , i = r.queryHash ?? Pd(s, r);
        let o = this.get(i);
        return o || (o = new $b({
            client: t,
            queryKey: s,
            queryHash: i,
            options: t.defaultQueryOptions(r),
            state: n,
            defaultOptions: t.getQueryDefaults(s)
        }),
        this.add(o)),
        o
    }
    add(t) {
        T(this, zt).has(t.queryHash) || (T(this, zt).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const r = T(this, zt).get(t.queryHash);
        r && (t.destroy(),
        r === t && T(this, zt).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        ze.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return T(this, zt).get(t)
    }
    getAll() {
        return [...T(this, zt).values()]
    }
    find(t) {
        const r = {
            exact: !0,
            ...t
        };
        return this.getAll().find(n => hf(r, n))
    }
    findAll(t={}) {
        const r = this.getAll();
        return Object.keys(t).length > 0 ? r.filter(n => hf(t, n)) : r
    }
    notify(t) {
        ze.batch( () => {
            this.listeners.forEach(r => {
                r(t)
            }
            )
        }
        )
    }
    onFocus() {
        ze.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        ze.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
zt = new WeakMap,
kp), Ht, Fe, Sn, Wt, Tr, Ep, Fb = (Ep = class extends Qg {
    constructor(t) {
        super();
        te(this, Wt);
        te(this, Ht);
        te(this, Fe);
        te(this, Sn);
        this.mutationId = t.mutationId,
        V(this, Fe, t.mutationCache),
        V(this, Ht, []),
        this.state = t.state || Bb(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        T(this, Ht).includes(t) || (T(this, Ht).push(t),
        this.clearGcTimeout(),
        T(this, Fe).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        V(this, Ht, T(this, Ht).filter(r => r !== t)),
        this.scheduleGc(),
        T(this, Fe).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        T(this, Ht).length || (this.state.status === "pending" ? this.scheduleGc() : T(this, Fe).remove(this))
    }
    continue() {
        var t;
        return ((t = T(this, Sn)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var i, o, a, l, u, c, d, f, h, y, g, w, m, p, v, x, S, k, E, R;
        const r = () => {
            Ie(this, Wt, Tr).call(this, {
                type: "continue"
            })
        }
        ;
        V(this, Sn, Jg({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (O, j) => {
                Ie(this, Wt, Tr).call(this, {
                    type: "failed",
                    failureCount: O,
                    error: j
                })
            }
            ,
            onPause: () => {
                Ie(this, Wt, Tr).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: r,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => T(this, Fe).canRun(this)
        }));
        const n = this.state.status === "pending"
          , s = !T(this, Sn).canStart();
        try {
            if (n)
                r();
            else {
                Ie(this, Wt, Tr).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: s
                }),
                await ((o = (i = T(this, Fe).config).onMutate) == null ? void 0 : o.call(i, t, this));
                const j = await ((l = (a = this.options).onMutate) == null ? void 0 : l.call(a, t));
                j !== this.state.context && Ie(this, Wt, Tr).call(this, {
                    type: "pending",
                    context: j,
                    variables: t,
                    isPaused: s
                })
            }
            const O = await T(this, Sn).start();
            return await ((c = (u = T(this, Fe).config).onSuccess) == null ? void 0 : c.call(u, O, t, this.state.context, this)),
            await ((f = (d = this.options).onSuccess) == null ? void 0 : f.call(d, O, t, this.state.context)),
            await ((y = (h = T(this, Fe).config).onSettled) == null ? void 0 : y.call(h, O, null, this.state.variables, this.state.context, this)),
            await ((w = (g = this.options).onSettled) == null ? void 0 : w.call(g, O, null, t, this.state.context)),
            Ie(this, Wt, Tr).call(this, {
                type: "success",
                data: O
            }),
            O
        } catch (O) {
            try {
                throw await ((p = (m = T(this, Fe).config).onError) == null ? void 0 : p.call(m, O, t, this.state.context, this)),
                await ((x = (v = this.options).onError) == null ? void 0 : x.call(v, O, t, this.state.context)),
                await ((k = (S = T(this, Fe).config).onSettled) == null ? void 0 : k.call(S, void 0, O, this.state.variables, this.state.context, this)),
                await ((R = (E = this.options).onSettled) == null ? void 0 : R.call(E, void 0, O, t, this.state.context)),
                O
            } finally {
                Ie(this, Wt, Tr).call(this, {
                    type: "error",
                    error: O
                })
            }
        } finally {
            T(this, Fe).runNext(this)
        }
    }
}
,
Ht = new WeakMap,
Fe = new WeakMap,
Sn = new WeakMap,
Wt = new WeakSet,
Tr = function(t) {
    const r = n => {
        switch (t.type) {
        case "failed":
            return {
                ...n,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...n,
                isPaused: !0
            };
        case "continue":
            return {
                ...n,
                isPaused: !1
            };
        case "pending":
            return {
                ...n,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...n,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...n,
                data: void 0,
                error: t.error,
                failureCount: n.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = r(this.state),
    ze.batch( () => {
        T(this, Ht).forEach(n => {
            n.onMutationUpdate(t)
        }
        ),
        T(this, Fe).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Ep);
function Bb() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var ir, Rt, ro, Tp, zb = (Tp = class extends il {
    constructor(t={}) {
        super();
        te(this, ir);
        te(this, Rt);
        te(this, ro);
        this.config = t,
        V(this, ir, new Set),
        V(this, Rt, new Map),
        V(this, ro, 0)
    }
    build(t, r, n) {
        const s = new Fb({
            mutationCache: this,
            mutationId: ++go(this, ro)._,
            options: t.defaultMutationOptions(r),
            state: n
        });
        return this.add(s),
        s
    }
    add(t) {
        T(this, ir).add(t);
        const r = Io(t);
        if (typeof r == "string") {
            const n = T(this, Rt).get(r);
            n ? n.push(t) : T(this, Rt).set(r, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (T(this, ir).delete(t)) {
            const r = Io(t);
            if (typeof r == "string") {
                const n = T(this, Rt).get(r);
                if (n)
                    if (n.length > 1) {
                        const s = n.indexOf(t);
                        s !== -1 && n.splice(s, 1)
                    } else
                        n[0] === t && T(this, Rt).delete(r)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const r = Io(t);
        if (typeof r == "string") {
            const n = T(this, Rt).get(r)
              , s = n == null ? void 0 : n.find(i => i.state.status === "pending");
            return !s || s === t
        } else
            return !0
    }
    runNext(t) {
        var n;
        const r = Io(t);
        if (typeof r == "string") {
            const s = (n = T(this, Rt).get(r)) == null ? void 0 : n.find(i => i !== t && i.state.isPaused);
            return (s == null ? void 0 : s.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        ze.batch( () => {
            T(this, ir).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            T(this, ir).clear(),
            T(this, Rt).clear()
        }
        )
    }
    getAll() {
        return Array.from(T(this, ir))
    }
    find(t) {
        const r = {
            exact: !0,
            ...t
        };
        return this.getAll().find(n => ff(r, n))
    }
    findAll(t={}) {
        return this.getAll().filter(r => ff(t, r))
    }
    notify(t) {
        ze.batch( () => {
            this.listeners.forEach(r => {
                r(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(r => r.state.isPaused);
        return ze.batch( () => Promise.all(t.map(r => r.continue().catch(Tt))))
    }
}
,
ir = new WeakMap,
Rt = new WeakMap,
ro = new WeakMap,
Tp);
function Io(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function gf(e) {
    return {
        onFetch: (t, r) => {
            var c, d, f, h, y;
            const n = t.options
              , s = (f = (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : f.direction
              , i = ((h = t.state.data) == null ? void 0 : h.pages) || []
              , o = ((y = t.state.data) == null ? void 0 : y.pageParams) || [];
            let a = {
                pages: [],
                pageParams: []
            }
              , l = 0;
            const u = async () => {
                let g = !1;
                const w = v => {
                    Object.defineProperty(v, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? g = !0 : t.signal.addEventListener("abort", () => {
                            g = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , m = Vg(t.options, t.fetchOptions)
                  , p = async (v, x, S) => {
                    if (g)
                        return Promise.reject();
                    if (x == null && v.pages.length)
                        return Promise.resolve(v);
                    const E = ( () => {
                        const z = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: x,
                            direction: S ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return w(z),
                        z
                    }
                    )()
                      , R = await m(E)
                      , {maxPages: O} = t.options
                      , j = S ? Rb : Pb;
                    return {
                        pages: j(v.pages, R, O),
                        pageParams: j(v.pageParams, x, O)
                    }
                }
                ;
                if (s && i.length) {
                    const v = s === "backward"
                      , x = v ? Hb : vf
                      , S = {
                        pages: i,
                        pageParams: o
                    }
                      , k = x(n, S);
                    a = await p(S, k, v)
                } else {
                    const v = e ?? i.length;
                    do {
                        const x = l === 0 ? o[0] ?? n.initialPageParam : vf(n, a);
                        if (l > 0 && x == null)
                            break;
                        a = await p(a, x),
                        l++
                    } while (l < v)
                }
                return a
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var g, w;
                return (w = (g = t.options).persister) == null ? void 0 : w.call(g, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, r)
            }
            : t.fetchFn = u
        }
    }
}
function vf(e, {pages: t, pageParams: r}) {
    const n = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[n], t, r[n], r) : void 0
}
function Hb(e, {pages: t, pageParams: r}) {
    var n;
    return t.length > 0 ? (n = e.getPreviousPageParam) == null ? void 0 : n.call(e, t[0], t, r[0], r) : void 0
}
var me, Lr, $r, ks, Es, Dr, Ts, Cs, Cp, Wb = (Cp = class {
    constructor(e={}) {
        te(this, me);
        te(this, Lr);
        te(this, $r);
        te(this, ks);
        te(this, Es);
        te(this, Dr);
        te(this, Ts);
        te(this, Cs);
        V(this, me, e.queryCache || new Ub),
        V(this, Lr, e.mutationCache || new zb),
        V(this, $r, e.defaultOptions || {}),
        V(this, ks, new Map),
        V(this, Es, new Map),
        V(this, Dr, 0)
    }
    mount() {
        go(this, Dr)._++,
        T(this, Dr) === 1 && (V(this, Ts, Kg.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            T(this, me).onFocus())
        }
        )),
        V(this, Cs, ja.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            T(this, me).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        go(this, Dr)._--,
        T(this, Dr) === 0 && ((e = T(this, Ts)) == null || e.call(this),
        V(this, Ts, void 0),
        (t = T(this, Cs)) == null || t.call(this),
        V(this, Cs, void 0))
    }
    isFetching(e) {
        return T(this, me).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return T(this, Lr).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var r;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (r = T(this, me).get(t.queryHash)) == null ? void 0 : r.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , r = T(this, me).build(this, t)
          , n = r.state.data;
        return n === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && r.isStaleByTime(oc(t.staleTime, r)) && this.prefetchQuery(t),
        Promise.resolve(n))
    }
    getQueriesData(e) {
        return T(this, me).findAll(e).map( ({queryKey: t, state: r}) => {
            const n = r.data;
            return [t, n]
        }
        )
    }
    setQueryData(e, t, r) {
        const n = this.defaultQueryOptions({
            queryKey: e
        })
          , s = T(this, me).get(n.queryHash)
          , i = s == null ? void 0 : s.state.data
          , o = _b(t, i);
        if (o !== void 0)
            return T(this, me).build(this, n).setData(o, {
                ...r,
                manual: !0
            })
    }
    setQueriesData(e, t, r) {
        return ze.batch( () => T(this, me).findAll(e).map( ({queryKey: n}) => [n, this.setQueryData(n, t, r)]))
    }
    getQueryState(e) {
        var r;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (r = T(this, me).get(t.queryHash)) == null ? void 0 : r.state
    }
    removeQueries(e) {
        const t = T(this, me);
        ze.batch( () => {
            t.findAll(e).forEach(r => {
                t.remove(r)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const r = T(this, me);
        return ze.batch( () => (r.findAll(e).forEach(n => {
            n.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const r = {
            revert: !0,
            ...t
        }
          , n = ze.batch( () => T(this, me).findAll(e).map(s => s.cancel(r)));
        return Promise.all(n).then(Tt).catch(Tt)
    }
    invalidateQueries(e, t={}) {
        return ze.batch( () => (T(this, me).findAll(e).forEach(r => {
            r.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const r = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , n = ze.batch( () => T(this, me).findAll(e).filter(s => !s.isDisabled() && !s.isStatic()).map(s => {
            let i = s.fetch(void 0, r);
            return r.throwOnError || (i = i.catch(Tt)),
            s.state.fetchStatus === "paused" ? Promise.resolve() : i
        }
        ));
        return Promise.all(n).then(Tt)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const r = T(this, me).build(this, t);
        return r.isStaleByTime(oc(t.staleTime, r)) ? r.fetch(t) : Promise.resolve(r.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(Tt).catch(Tt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = gf(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Tt).catch(Tt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = gf(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return ja.isOnline() ? T(this, Lr).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return T(this, me)
    }
    getMutationCache() {
        return T(this, Lr)
    }
    getDefaultOptions() {
        return T(this, $r)
    }
    setDefaultOptions(e) {
        V(this, $r, e)
    }
    setQueryDefaults(e, t) {
        T(this, ks).set(zi(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...T(this, ks).values()]
          , r = {};
        return t.forEach(n => {
            Hi(e, n.queryKey) && Object.assign(r, n.defaultOptions)
        }
        ),
        r
    }
    setMutationDefaults(e, t) {
        T(this, Es).set(zi(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...T(this, Es).values()]
          , r = {};
        return t.forEach(n => {
            Hi(e, n.mutationKey) && Object.assign(r, n.defaultOptions)
        }
        ),
        r
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...T(this, $r).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = Pd(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === Rd && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...T(this, $r).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        T(this, me).clear(),
        T(this, Lr).clear()
    }
}
,
me = new WeakMap,
Lr = new WeakMap,
$r = new WeakMap,
ks = new WeakMap,
Es = new WeakMap,
Dr = new WeakMap,
Ts = new WeakMap,
Cs = new WeakMap,
Cp), Vb = b.createContext(void 0), Kb = ({client: e, children: t}) => (b.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
_.jsx(Vb.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Wi() {
    return Wi = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    Wi.apply(this, arguments)
}
var Fr;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Fr || (Fr = {}));
const yf = "popstate";
function qb(e) {
    e === void 0 && (e = {});
    function t(n, s) {
        let {pathname: i, search: o, hash: a} = n.location;
        return lc("", {
            pathname: i,
            search: o,
            hash: a
        }, s.state && s.state.usr || null, s.state && s.state.key || "default")
    }
    function r(n, s) {
        return typeof s == "string" ? s : Xg(s)
    }
    return Jb(t, r, null, e)
}
function Ee(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Yg(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function Gb() {
    return Math.random().toString(36).substr(2, 8)
}
function wf(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function lc(e, t, r, n) {
    return r === void 0 && (r = null),
    Wi({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Fs(t) : t, {
        state: r,
        key: t && t.key || n || Gb()
    })
}
function Xg(e) {
    let {pathname: t="/", search: r="", hash: n=""} = e;
    return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
    n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n),
    t
}
function Fs(e) {
    let t = {};
    if (e) {
        let r = e.indexOf("#");
        r >= 0 && (t.hash = e.substr(r),
        e = e.substr(0, r));
        let n = e.indexOf("?");
        n >= 0 && (t.search = e.substr(n),
        e = e.substr(0, n)),
        e && (t.pathname = e)
    }
    return t
}
function Jb(e, t, r, n) {
    n === void 0 && (n = {});
    let {window: s=document.defaultView, v5Compat: i=!1} = n
      , o = s.history
      , a = Fr.Pop
      , l = null
      , u = c();
    u == null && (u = 0,
    o.replaceState(Wi({}, o.state, {
        idx: u
    }), ""));
    function c() {
        return (o.state || {
            idx: null
        }).idx
    }
    function d() {
        a = Fr.Pop;
        let w = c()
          , m = w == null ? null : w - u;
        u = w,
        l && l({
            action: a,
            location: g.location,
            delta: m
        })
    }
    function f(w, m) {
        a = Fr.Push;
        let p = lc(g.location, w, m);
        u = c() + 1;
        let v = wf(p, u)
          , x = g.createHref(p);
        try {
            o.pushState(v, "", x)
        } catch (S) {
            if (S instanceof DOMException && S.name === "DataCloneError")
                throw S;
            s.location.assign(x)
        }
        i && l && l({
            action: a,
            location: g.location,
            delta: 1
        })
    }
    function h(w, m) {
        a = Fr.Replace;
        let p = lc(g.location, w, m);
        u = c();
        let v = wf(p, u)
          , x = g.createHref(p);
        o.replaceState(v, "", x),
        i && l && l({
            action: a,
            location: g.location,
            delta: 0
        })
    }
    function y(w) {
        let m = s.location.origin !== "null" ? s.location.origin : s.location.href
          , p = typeof w == "string" ? w : Xg(w);
        return p = p.replace(/ $/, "%20"),
        Ee(m, "No window.location.(origin|href) available to create URL for href: " + p),
        new URL(p,m)
    }
    let g = {
        get action() {
            return a
        },
        get location() {
            return e(s, o)
        },
        listen(w) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return s.addEventListener(yf, d),
            l = w,
            () => {
                s.removeEventListener(yf, d),
                l = null
            }
        },
        createHref(w) {
            return t(s, w)
        },
        createURL: y,
        encodeLocation(w) {
            let m = y(w);
            return {
                pathname: m.pathname,
                search: m.search,
                hash: m.hash
            }
        },
        push: f,
        replace: h,
        go(w) {
            return o.go(w)
        }
    };
    return g
}
var bf;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(bf || (bf = {}));
function Qb(e, t, r) {
    return r === void 0 && (r = "/"),
    Yb(e, t, r, !1)
}
function Yb(e, t, r, n) {
    let s = typeof t == "string" ? Fs(t) : t
      , i = tv(s.pathname || "/", r);
    if (i == null)
        return null;
    let o = Zg(e);
    Xb(o);
    let a = null;
    for (let l = 0; a == null && l < o.length; ++l) {
        let u = ux(i);
        a = ax(o[l], u, n)
    }
    return a
}
function Zg(e, t, r, n) {
    t === void 0 && (t = []),
    r === void 0 && (r = []),
    n === void 0 && (n = "");
    let s = (i, o, a) => {
        let l = {
            relativePath: a === void 0 ? i.path || "" : a,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: o,
            route: i
        };
        l.relativePath.startsWith("/") && (Ee(l.relativePath.startsWith(n), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + n + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(n.length));
        let u = Tn([n, l.relativePath])
          , c = r.concat(l);
        i.children && i.children.length > 0 && (Ee(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        Zg(i.children, t, c, u)),
        !(i.path == null && !i.index) && t.push({
            path: u,
            score: ix(u, i.index),
            routesMeta: c
        })
    }
    ;
    return e.forEach( (i, o) => {
        var a;
        if (i.path === "" || !((a = i.path) != null && a.includes("?")))
            s(i, o);
        else
            for (let l of ev(i.path))
                s(i, o, l)
    }
    ),
    t
}
function ev(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[r,...n] = t
      , s = r.endsWith("?")
      , i = r.replace(/\?$/, "");
    if (n.length === 0)
        return s ? [i, ""] : [i];
    let o = ev(n.join("/"))
      , a = [];
    return a.push(...o.map(l => l === "" ? i : [i, l].join("/"))),
    s && a.push(...o),
    a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function Xb(e) {
    e.sort( (t, r) => t.score !== r.score ? r.score - t.score : ox(t.routesMeta.map(n => n.childrenIndex), r.routesMeta.map(n => n.childrenIndex)))
}
const Zb = /^:[\w-]+$/
  , ex = 3
  , tx = 2
  , rx = 1
  , nx = 10
  , sx = -2
  , xf = e => e === "*";
function ix(e, t) {
    let r = e.split("/")
      , n = r.length;
    return r.some(xf) && (n += sx),
    t && (n += tx),
    r.filter(s => !xf(s)).reduce( (s, i) => s + (Zb.test(i) ? ex : i === "" ? rx : nx), n)
}
function ox(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (n, s) => n === t[s]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function ax(e, t, r) {
    let {routesMeta: n} = e
      , s = {}
      , i = "/"
      , o = [];
    for (let a = 0; a < n.length; ++a) {
        let l = n[a]
          , u = a === n.length - 1
          , c = i === "/" ? t : t.slice(i.length) || "/"
          , d = _f({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: u
        }, c)
          , f = l.route;
        if (!d && u && r && !n[n.length - 1].route.index && (d = _f({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, c)),
        !d)
            return null;
        Object.assign(s, d.params),
        o.push({
            params: s,
            pathname: Tn([i, d.pathname]),
            pathnameBase: mx(Tn([i, d.pathnameBase])),
            route: f
        }),
        d.pathnameBase !== "/" && (i = Tn([i, d.pathnameBase]))
    }
    return o
}
function _f(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[r,n] = lx(e.path, e.caseSensitive, e.end)
      , s = t.match(r);
    if (!s)
        return null;
    let i = s[0]
      , o = i.replace(/(.)\/+$/, "$1")
      , a = s.slice(1);
    return {
        params: n.reduce( (u, c, d) => {
            let {paramName: f, isOptional: h} = c;
            if (f === "*") {
                let g = a[d] || "";
                o = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1")
            }
            const y = a[d];
            return h && !y ? u[f] = void 0 : u[f] = (y || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: i,
        pathnameBase: o,
        pattern: e
    }
}
function lx(e, t, r) {
    t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    Yg(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let n = []
      , s = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, a, l) => (n.push({
        paramName: a,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (n.push({
        paramName: "*"
    }),
    s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? s += "\\/*$" : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s,t ? void 0 : "i"), n]
}
function ux(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Yg(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function tv(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let r = t.endsWith("/") ? t.length - 1 : t.length
      , n = e.charAt(r);
    return n && n !== "/" ? null : e.slice(r) || "/"
}
function cx(e, t) {
    t === void 0 && (t = "/");
    let {pathname: r, search: n="", hash: s=""} = typeof e == "string" ? Fs(e) : e;
    return {
        pathname: r ? r.startsWith("/") ? r : dx(r, t) : t,
        search: gx(n),
        hash: vx(s)
    }
}
function dx(e, t) {
    let r = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(s => {
        s === ".." ? r.length > 1 && r.pop() : s !== "." && r.push(s)
    }
    ),
    r.length > 1 ? r.join("/") : "/"
}
function ru(e, t, r, n) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function hx(e) {
    return e.filter( (t, r) => r === 0 || t.route.path && t.route.path.length > 0)
}
function fx(e, t) {
    let r = hx(e);
    return t ? r.map( (n, s) => s === r.length - 1 ? n.pathname : n.pathnameBase) : r.map(n => n.pathnameBase)
}
function px(e, t, r, n) {
    n === void 0 && (n = !1);
    let s;
    typeof e == "string" ? s = Fs(e) : (s = Wi({}, e),
    Ee(!s.pathname || !s.pathname.includes("?"), ru("?", "pathname", "search", s)),
    Ee(!s.pathname || !s.pathname.includes("#"), ru("#", "pathname", "hash", s)),
    Ee(!s.search || !s.search.includes("#"), ru("#", "search", "hash", s)));
    let i = e === "" || s.pathname === "", o = i ? "/" : s.pathname, a;
    if (o == null)
        a = r;
    else {
        let d = t.length - 1;
        if (!n && o.startsWith("..")) {
            let f = o.split("/");
            for (; f[0] === ".."; )
                f.shift(),
                d -= 1;
            s.pathname = f.join("/")
        }
        a = d >= 0 ? t[d] : "/"
    }
    let l = cx(s, a)
      , u = o && o !== "/" && o.endsWith("/")
      , c = (i || o === ".") && r.endsWith("/");
    return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"),
    l
}
const Tn = e => e.join("/").replace(/\/\/+/g, "/")
  , mx = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , gx = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , vx = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function yx(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const rv = ["post", "put", "patch", "delete"];
new Set(rv);
const wx = ["get", ...rv];
new Set(wx);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Vi() {
    return Vi = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    Vi.apply(this, arguments)
}
const Ad = b.createContext(null)
  , bx = b.createContext(null)
  , al = b.createContext(null)
  , ll = b.createContext(null)
  , Bs = b.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , nv = b.createContext(null);
function ul() {
    return b.useContext(ll) != null
}
function cl() {
    return ul() || Ee(!1),
    b.useContext(ll).location
}
function sv(e) {
    b.useContext(al).static || b.useLayoutEffect(e)
}
function Od() {
    let {isDataRoute: e} = b.useContext(Bs);
    return e ? jx() : xx()
}
function xx() {
    ul() || Ee(!1);
    let e = b.useContext(Ad)
      , {basename: t, future: r, navigator: n} = b.useContext(al)
      , {matches: s} = b.useContext(Bs)
      , {pathname: i} = cl()
      , o = JSON.stringify(fx(s, r.v7_relativeSplatPath))
      , a = b.useRef(!1);
    return sv( () => {
        a.current = !0
    }
    ),
    b.useCallback(function(u, c) {
        if (c === void 0 && (c = {}),
        !a.current)
            return;
        if (typeof u == "number") {
            n.go(u);
            return
        }
        let d = px(u, JSON.parse(o), i, c.relative === "path");
        e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : Tn([t, d.pathname])),
        (c.replace ? n.replace : n.push)(d, c.state, c)
    }, [t, n, o, i, e])
}
function _x(e, t) {
    return Sx(e, t)
}
function Sx(e, t, r, n) {
    ul() || Ee(!1);
    let {navigator: s} = b.useContext(al)
      , {matches: i} = b.useContext(Bs)
      , o = i[i.length - 1]
      , a = o ? o.params : {};
    o && o.pathname;
    let l = o ? o.pathnameBase : "/";
    o && o.route;
    let u = cl(), c;
    if (t) {
        var d;
        let w = typeof t == "string" ? Fs(t) : t;
        l === "/" || (d = w.pathname) != null && d.startsWith(l) || Ee(!1),
        c = w
    } else
        c = u;
    let f = c.pathname || "/"
      , h = f;
    if (l !== "/") {
        let w = l.replace(/^\//, "").split("/");
        h = "/" + f.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let y = Qb(e, {
        pathname: h
    })
      , g = Px(y && y.map(w => Object.assign({}, w, {
        params: Object.assign({}, a, w.params),
        pathname: Tn([l, s.encodeLocation ? s.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? l : Tn([l, s.encodeLocation ? s.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), i, r, n);
    return t && g ? b.createElement(ll.Provider, {
        value: {
            location: Vi({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: Fr.Pop
        }
    }, g) : g
}
function kx() {
    let e = Nx()
      , t = yx(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , r = e instanceof Error ? e.stack : null
      , s = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return b.createElement(b.Fragment, null, b.createElement("h2", null, "Unexpected Application Error!"), b.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), r ? b.createElement("pre", {
        style: s
    }, r) : null, null)
}
const Ex = b.createElement(kx, null);
class Tx extends b.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, r) {
        return r.location !== t.location || r.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : r.error,
            location: r.location,
            revalidation: t.revalidation || r.revalidation
        }
    }
    componentDidCatch(t, r) {
        console.error("React Router caught the following error during render", t, r)
    }
    render() {
        return this.state.error !== void 0 ? b.createElement(Bs.Provider, {
            value: this.props.routeContext
        }, b.createElement(nv.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function Cx(e) {
    let {routeContext: t, match: r, children: n} = e
      , s = b.useContext(Ad);
    return s && s.static && s.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = r.route.id),
    b.createElement(Bs.Provider, {
        value: t
    }, n)
}
function Px(e, t, r, n) {
    var s;
    if (t === void 0 && (t = []),
    r === void 0 && (r = null),
    n === void 0 && (n = null),
    e == null) {
        var i;
        if (!r)
            return null;
        if (r.errors)
            e = r.matches;
        else if ((i = n) != null && i.v7_partialHydration && t.length === 0 && !r.initialized && r.matches.length > 0)
            e = r.matches;
        else
            return null
    }
    let o = e
      , a = (s = r) == null ? void 0 : s.errors;
    if (a != null) {
        let c = o.findIndex(d => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0);
        c >= 0 || Ee(!1),
        o = o.slice(0, Math.min(o.length, c + 1))
    }
    let l = !1
      , u = -1;
    if (r && n && n.v7_partialHydration)
        for (let c = 0; c < o.length; c++) {
            let d = o[c];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
            d.route.id) {
                let {loaderData: f, errors: h} = r
                  , y = d.route.loader && f[d.route.id] === void 0 && (!h || h[d.route.id] === void 0);
                if (d.route.lazy || y) {
                    l = !0,
                    u >= 0 ? o = o.slice(0, u + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight( (c, d, f) => {
        let h, y = !1, g = null, w = null;
        r && (h = a && d.route.id ? a[d.route.id] : void 0,
        g = d.route.errorElement || Ex,
        l && (u < 0 && f === 0 ? (y = !0,
        w = null) : u === f && (y = !0,
        w = d.route.hydrateFallbackElement || null)));
        let m = t.concat(o.slice(0, f + 1))
          , p = () => {
            let v;
            return h ? v = g : y ? v = w : d.route.Component ? v = b.createElement(d.route.Component, null) : d.route.element ? v = d.route.element : v = c,
            b.createElement(Cx, {
                match: d,
                routeContext: {
                    outlet: c,
                    matches: m,
                    isDataRoute: r != null
                },
                children: v
            })
        }
        ;
        return r && (d.route.ErrorBoundary || d.route.errorElement || f === 0) ? b.createElement(Tx, {
            location: r.location,
            revalidation: r.revalidation,
            component: g,
            error: h,
            children: p(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            }
        }) : p()
    }
    , null)
}
var iv = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(iv || {})
  , Ia = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(Ia || {});
function Rx(e) {
    let t = b.useContext(Ad);
    return t || Ee(!1),
    t
}
function Ax(e) {
    let t = b.useContext(bx);
    return t || Ee(!1),
    t
}
function Ox(e) {
    let t = b.useContext(Bs);
    return t || Ee(!1),
    t
}
function ov(e) {
    let t = Ox()
      , r = t.matches[t.matches.length - 1];
    return r.route.id || Ee(!1),
    r.route.id
}
function Nx() {
    var e;
    let t = b.useContext(nv)
      , r = Ax(Ia.UseRouteError)
      , n = ov(Ia.UseRouteError);
    return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n]
}
function jx() {
    let {router: e} = Rx(iv.UseNavigateStable)
      , t = ov(Ia.UseNavigateStable)
      , r = b.useRef(!1);
    return sv( () => {
        r.current = !0
    }
    ),
    b.useCallback(function(s, i) {
        i === void 0 && (i = {}),
        r.current && (typeof s == "number" ? e.navigate(s) : e.navigate(s, Vi({
            fromRouteId: t
        }, i)))
    }, [e, t])
}
function Ix(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function sa(e) {
    Ee(!1)
}
function Lx(e) {
    let {basename: t="/", children: r=null, location: n, navigationType: s=Fr.Pop, navigator: i, static: o=!1, future: a} = e;
    ul() && Ee(!1);
    let l = t.replace(/^\/*/, "/")
      , u = b.useMemo( () => ({
        basename: l,
        navigator: i,
        static: o,
        future: Vi({
            v7_relativeSplatPath: !1
        }, a)
    }), [l, a, i, o]);
    typeof n == "string" && (n = Fs(n));
    let {pathname: c="/", search: d="", hash: f="", state: h=null, key: y="default"} = n
      , g = b.useMemo( () => {
        let w = tv(c, l);
        return w == null ? null : {
            location: {
                pathname: w,
                search: d,
                hash: f,
                state: h,
                key: y
            },
            navigationType: s
        }
    }
    , [l, c, d, f, h, y, s]);
    return g == null ? null : b.createElement(al.Provider, {
        value: u
    }, b.createElement(ll.Provider, {
        children: r,
        value: g
    }))
}
function $x(e) {
    let {children: t, location: r} = e;
    return _x(uc(t), r)
}
new Promise( () => {}
);
function uc(e, t) {
    t === void 0 && (t = []);
    let r = [];
    return b.Children.forEach(e, (n, s) => {
        if (!b.isValidElement(n))
            return;
        let i = [...t, s];
        if (n.type === b.Fragment) {
            r.push.apply(r, uc(n.props.children, i));
            return
        }
        n.type !== sa && Ee(!1),
        !n.props.index || !n.props.children || Ee(!1);
        let o = {
            id: n.props.id || i.join("-"),
            caseSensitive: n.props.caseSensitive,
            element: n.props.element,
            Component: n.props.Component,
            index: n.props.index,
            path: n.props.path,
            loader: n.props.loader,
            action: n.props.action,
            errorElement: n.props.errorElement,
            ErrorBoundary: n.props.ErrorBoundary,
            hasErrorBoundary: n.props.ErrorBoundary != null || n.props.errorElement != null,
            shouldRevalidate: n.props.shouldRevalidate,
            handle: n.props.handle,
            lazy: n.props.lazy
        };
        n.props.children && (o.children = uc(n.props.children, i)),
        r.push(o)
    }
    ),
    r
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function cc(e) {
    return e === void 0 && (e = ""),
    new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce( (t, r) => {
        let n = e[r];
        return t.concat(Array.isArray(n) ? n.map(s => [r, s]) : [[r, n]])
    }
    , []))
}
function Dx(e, t) {
    let r = cc(e);
    return t && t.forEach( (n, s) => {
        r.has(s) || t.getAll(s).forEach(i => {
            r.append(s, i)
        }
        )
    }
    ),
    r
}
const Mx = "6";
try {
    window.__reactRouterVersion = Mx
} catch {}
const Ux = "startTransition"
  , Sf = Up[Ux];
function Fx(e) {
    let {basename: t, children: r, future: n, window: s} = e
      , i = b.useRef();
    i.current == null && (i.current = qb({
        window: s,
        v5Compat: !0
    }));
    let o = i.current
      , [a,l] = b.useState({
        action: o.action,
        location: o.location
    })
      , {v7_startTransition: u} = n || {}
      , c = b.useCallback(d => {
        u && Sf ? Sf( () => l(d)) : l(d)
    }
    , [l, u]);
    return b.useLayoutEffect( () => o.listen(c), [o, c]),
    b.useEffect( () => Ix(n), [n]),
    b.createElement(Lx, {
        basename: t,
        children: r,
        location: a.location,
        navigationType: a.action,
        navigator: o,
        future: n
    })
}
var kf;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(kf || (kf = {}));
var Ef;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Ef || (Ef = {}));
function Bx(e) {
    let t = b.useRef(cc(e))
      , r = b.useRef(!1)
      , n = cl()
      , s = b.useMemo( () => Dx(n.search, r.current ? null : t.current), [n.search])
      , i = Od()
      , o = b.useCallback( (a, l) => {
        const u = cc(typeof a == "function" ? a(s) : a);
        r.current = !0,
        i("?" + u, l)
    }
    , [i, s]);
    return [s, o]
}
var Tf = ["light", "dark"]
  , zx = "(prefers-color-scheme: dark)"
  , Hx = b.createContext(void 0)
  , Wx = {
    setTheme: e => {}
    ,
    themes: []
}
  , Vx = () => {
    var e;
    return (e = b.useContext(Hx)) != null ? e : Wx
}
;
b.memo( ({forcedTheme: e, storageKey: t, attribute: r, enableSystem: n, enableColorScheme: s, defaultTheme: i, value: o, attrs: a, nonce: l}) => {
    let u = i === "system"
      , c = r === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map(y => `'${y}'`).join(",")})`};` : `var d=document.documentElement,n='${r}',s='setAttribute';`
      , d = s ? Tf.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , f = (y, g=!1, w=!0) => {
        let m = o ? o[y] : y
          , p = g ? y + "|| ''" : `'${m}'`
          , v = "";
        return s && w && !g && Tf.includes(y) && (v += `d.style.colorScheme = '${y}';`),
        r === "class" ? g || m ? v += `c.add(${p})` : v += "null" : m && (v += `d[s](n,${p})`),
        v
    }
      , h = e ? `!function(){${c}${f(e)}}()` : n ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${zx}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${f(o ? "x[e]" : "e", !0)}}${u ? "" : "else{" + f(i, !1, !1) + "}"}${d}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${f(o ? "x[e]" : "e", !0)}}else{${f(i, !1, !1)};}${d}}catch(t){}}();`;
    return b.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: h
        }
    })
}
);
var Kx = e => {
    switch (e) {
    case "success":
        return Jx;
    case "info":
        return Yx;
    case "warning":
        return Qx;
    case "error":
        return Xx;
    default:
        return null
    }
}
  , qx = Array(12).fill(0)
  , Gx = ({visible: e, className: t}) => N.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, N.createElement("div", {
    className: "sonner-spinner"
}, qx.map( (r, n) => N.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${n}`
}))))
  , Jx = N.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, N.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , Qx = N.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, N.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , Yx = N.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, N.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , Xx = N.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, N.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , Zx = N.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, N.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), N.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , e_ = () => {
    let[e,t] = N.useState(document.hidden);
    return N.useEffect( () => {
        let r = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", r),
        () => window.removeEventListener("visibilitychange", r)
    }
    , []),
    e
}
  , dc = 1
  , t_ = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: r, ...n} = e
              , s = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : dc++
              , i = this.toasts.find(a => a.id === s)
              , o = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(s) && this.dismissedToasts.delete(s),
            i ? this.toasts = this.toasts.map(a => a.id === s ? (this.publish({
                ...a,
                ...e,
                id: s,
                title: r
            }),
            {
                ...a,
                ...e,
                id: s,
                dismissible: o,
                title: r
            }) : a) : this.addToast({
                title: r,
                ...n,
                dismissible: o,
                id: s
            }),
            s
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(r => r({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let r;
            t.loading !== void 0 && (r = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let n = e instanceof Promise ? e : e(), s = r !== void 0, i, o = n.then(async l => {
                if (i = ["resolve", l],
                N.isValidElement(l))
                    s = !1,
                    this.create({
                        id: r,
                        type: "default",
                        message: l
                    });
                else if (n_(l) && !l.ok) {
                    s = !1;
                    let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error
                      , c = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
                    this.create({
                        id: r,
                        type: "error",
                        message: u,
                        description: c
                    })
                } else if (t.success !== void 0) {
                    s = !1;
                    let u = typeof t.success == "function" ? await t.success(l) : t.success
                      , c = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: r,
                        type: "success",
                        message: u,
                        description: c
                    })
                }
            }
            ).catch(async l => {
                if (i = ["reject", l],
                t.error !== void 0) {
                    s = !1;
                    let u = typeof t.error == "function" ? await t.error(l) : t.error
                      , c = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: r,
                        type: "error",
                        message: u,
                        description: c
                    })
                }
            }
            ).finally( () => {
                var l;
                s && (this.dismiss(r),
                r = void 0),
                (l = t.finally) == null || l.call(t)
            }
            ), a = () => new Promise( (l, u) => o.then( () => i[0] === "reject" ? u(i[1]) : l(i[1])).catch(u));
            return typeof r != "string" && typeof r != "number" ? {
                unwrap: a
            } : Object.assign(r, {
                unwrap: a
            })
        }
        ,
        this.custom = (e, t) => {
            let r = (t == null ? void 0 : t.id) || dc++;
            return this.create({
                jsx: e(r),
                id: r,
                ...t
            }),
            r
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , qe = new t_
  , r_ = (e, t) => {
    let r = (t == null ? void 0 : t.id) || dc++;
    return qe.addToast({
        title: e,
        ...t,
        id: r
    }),
    r
}
  , n_ = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , s_ = r_
  , i_ = () => qe.toasts
  , o_ = () => qe.getActiveToasts();
Object.assign(s_, {
    success: qe.success,
    info: qe.info,
    warning: qe.warning,
    error: qe.error,
    custom: qe.custom,
    message: qe.message,
    promise: qe.promise,
    dismiss: qe.dismiss,
    loading: qe.loading
}, {
    getHistory: i_,
    getToasts: o_
});
function a_(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let r = document.head || document.getElementsByTagName("head")[0]
      , n = document.createElement("style");
    n.type = "text/css",
    t === "top" && r.firstChild ? r.insertBefore(n, r.firstChild) : r.appendChild(n),
    n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e))
}
a_(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Lo(e) {
    return e.label !== void 0
}
var l_ = 3
  , u_ = "32px"
  , c_ = "16px"
  , Cf = 4e3
  , d_ = 356
  , h_ = 14
  , f_ = 20
  , p_ = 200;
function St(...e) {
    return e.filter(Boolean).join(" ")
}
function m_(e) {
    let[t,r] = e.split("-")
      , n = [];
    return t && n.push(t),
    r && n.push(r),
    n
}
var g_ = e => {
    var t, r, n, s, i, o, a, l, u, c, d;
    let {invert: f, toast: h, unstyled: y, interacting: g, setHeights: w, visibleToasts: m, heights: p, index: v, toasts: x, expanded: S, removeToast: k, defaultRichColors: E, closeButton: R, style: O, cancelButtonStyle: j, actionButtonStyle: z, className: D="", descriptionClassName: J="", duration: I, position: X, gap: H, loadingIcon: K, expandByDefault: C, classNames: P, icons: L, closeButtonAriaLabel: q="Close toast", pauseWhenPageIsHidden: F} = e
      , [Q,Z] = N.useState(null)
      , [we,je] = N.useState(null)
      , [re,$n] = N.useState(!1)
      , [vr,sn] = N.useState(!1)
      , [yr,Dn] = N.useState(!1)
      , [wr,fo] = N.useState(!1)
      , [kl,po] = N.useState(!1)
      , [El,Ks] = N.useState(0)
      , [Mn,Jd] = N.useState(0)
      , qs = N.useRef(h.duration || I || Cf)
      , Qd = N.useRef(null)
      , on = N.useRef(null)
      , By = v === 0
      , zy = v + 1 <= m
      , dt = h.type
      , Un = h.dismissible !== !1
      , Hy = h.className || ""
      , Wy = h.descriptionClassName || ""
      , mo = N.useMemo( () => p.findIndex(W => W.toastId === h.id) || 0, [p, h.id])
      , Vy = N.useMemo( () => {
        var W;
        return (W = h.closeButton) != null ? W : R
    }
    , [h.closeButton, R])
      , Yd = N.useMemo( () => h.duration || I || Cf, [h.duration, I])
      , Tl = N.useRef(0)
      , Fn = N.useRef(0)
      , Xd = N.useRef(0)
      , Bn = N.useRef(null)
      , [Ky,qy] = X.split("-")
      , Zd = N.useMemo( () => p.reduce( (W, se, ce) => ce >= mo ? W : W + se.height, 0), [p, mo])
      , eh = e_()
      , Gy = h.invert || f
      , Cl = dt === "loading";
    Fn.current = N.useMemo( () => mo * H + Zd, [mo, Zd]),
    N.useEffect( () => {
        qs.current = Yd
    }
    , [Yd]),
    N.useEffect( () => {
        $n(!0)
    }
    , []),
    N.useEffect( () => {
        let W = on.current;
        if (W) {
            let se = W.getBoundingClientRect().height;
            return Jd(se),
            w(ce => [{
                toastId: h.id,
                height: se,
                position: h.position
            }, ...ce]),
            () => w(ce => ce.filter(wt => wt.toastId !== h.id))
        }
    }
    , [w, h.id]),
    N.useLayoutEffect( () => {
        if (!re)
            return;
        let W = on.current
          , se = W.style.height;
        W.style.height = "auto";
        let ce = W.getBoundingClientRect().height;
        W.style.height = se,
        Jd(ce),
        w(wt => wt.find(bt => bt.toastId === h.id) ? wt.map(bt => bt.toastId === h.id ? {
            ...bt,
            height: ce
        } : bt) : [{
            toastId: h.id,
            height: ce,
            position: h.position
        }, ...wt])
    }
    , [re, h.title, h.description, w, h.id]);
    let br = N.useCallback( () => {
        sn(!0),
        Ks(Fn.current),
        w(W => W.filter(se => se.toastId !== h.id)),
        setTimeout( () => {
            k(h)
        }
        , p_)
    }
    , [h, k, w, Fn]);
    N.useEffect( () => {
        if (h.promise && dt === "loading" || h.duration === 1 / 0 || h.type === "loading")
            return;
        let W;
        return S || g || F && eh ? ( () => {
            if (Xd.current < Tl.current) {
                let se = new Date().getTime() - Tl.current;
                qs.current = qs.current - se
            }
            Xd.current = new Date().getTime()
        }
        )() : qs.current !== 1 / 0 && (Tl.current = new Date().getTime(),
        W = setTimeout( () => {
            var se;
            (se = h.onAutoClose) == null || se.call(h, h),
            br()
        }
        , qs.current)),
        () => clearTimeout(W)
    }
    , [S, g, h, dt, F, eh, br]),
    N.useEffect( () => {
        h.delete && br()
    }
    , [br, h.delete]);
    function Jy() {
        var W, se, ce;
        return L != null && L.loading ? N.createElement("div", {
            className: St(P == null ? void 0 : P.loader, (W = h == null ? void 0 : h.classNames) == null ? void 0 : W.loader, "sonner-loader"),
            "data-visible": dt === "loading"
        }, L.loading) : K ? N.createElement("div", {
            className: St(P == null ? void 0 : P.loader, (se = h == null ? void 0 : h.classNames) == null ? void 0 : se.loader, "sonner-loader"),
            "data-visible": dt === "loading"
        }, K) : N.createElement(Gx, {
            className: St(P == null ? void 0 : P.loader, (ce = h == null ? void 0 : h.classNames) == null ? void 0 : ce.loader),
            visible: dt === "loading"
        })
    }
    return N.createElement("li", {
        tabIndex: 0,
        ref: on,
        className: St(D, Hy, P == null ? void 0 : P.toast, (t = h == null ? void 0 : h.classNames) == null ? void 0 : t.toast, P == null ? void 0 : P.default, P == null ? void 0 : P[dt], (r = h == null ? void 0 : h.classNames) == null ? void 0 : r[dt]),
        "data-sonner-toast": "",
        "data-rich-colors": (n = h.richColors) != null ? n : E,
        "data-styled": !(h.jsx || h.unstyled || y),
        "data-mounted": re,
        "data-promise": !!h.promise,
        "data-swiped": kl,
        "data-removed": vr,
        "data-visible": zy,
        "data-y-position": Ky,
        "data-x-position": qy,
        "data-index": v,
        "data-front": By,
        "data-swiping": yr,
        "data-dismissible": Un,
        "data-type": dt,
        "data-invert": Gy,
        "data-swipe-out": wr,
        "data-swipe-direction": we,
        "data-expanded": !!(S || C && re),
        style: {
            "--index": v,
            "--toasts-before": v,
            "--z-index": x.length - v,
            "--offset": `${vr ? El : Fn.current}px`,
            "--initial-height": C ? "auto" : `${Mn}px`,
            ...O,
            ...h.style
        },
        onDragEnd: () => {
            Dn(!1),
            Z(null),
            Bn.current = null
        }
        ,
        onPointerDown: W => {
            Cl || !Un || (Qd.current = new Date,
            Ks(Fn.current),
            W.target.setPointerCapture(W.pointerId),
            W.target.tagName !== "BUTTON" && (Dn(!0),
            Bn.current = {
                x: W.clientX,
                y: W.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var W, se, ce, wt;
            if (wr || !Un)
                return;
            Bn.current = null;
            let bt = Number(((W = on.current) == null ? void 0 : W.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , xr = Number(((se = on.current) == null ? void 0 : se.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , an = new Date().getTime() - ((ce = Qd.current) == null ? void 0 : ce.getTime())
              , xt = Q === "x" ? bt : xr
              , _r = Math.abs(xt) / an;
            if (Math.abs(xt) >= f_ || _r > .11) {
                Ks(Fn.current),
                (wt = h.onDismiss) == null || wt.call(h, h),
                je(Q === "x" ? bt > 0 ? "right" : "left" : xr > 0 ? "down" : "up"),
                br(),
                fo(!0),
                po(!1);
                return
            }
            Dn(!1),
            Z(null)
        }
        ,
        onPointerMove: W => {
            var se, ce, wt, bt;
            if (!Bn.current || !Un || ((se = window.getSelection()) == null ? void 0 : se.toString().length) > 0)
                return;
            let xr = W.clientY - Bn.current.y
              , an = W.clientX - Bn.current.x
              , xt = (ce = e.swipeDirections) != null ? ce : m_(X);
            !Q && (Math.abs(an) > 1 || Math.abs(xr) > 1) && Z(Math.abs(an) > Math.abs(xr) ? "x" : "y");
            let _r = {
                x: 0,
                y: 0
            };
            Q === "y" ? (xt.includes("top") || xt.includes("bottom")) && (xt.includes("top") && xr < 0 || xt.includes("bottom") && xr > 0) && (_r.y = xr) : Q === "x" && (xt.includes("left") || xt.includes("right")) && (xt.includes("left") && an < 0 || xt.includes("right") && an > 0) && (_r.x = an),
            (Math.abs(_r.x) > 0 || Math.abs(_r.y) > 0) && po(!0),
            (wt = on.current) == null || wt.style.setProperty("--swipe-amount-x", `${_r.x}px`),
            (bt = on.current) == null || bt.style.setProperty("--swipe-amount-y", `${_r.y}px`)
        }
    }, Vy && !h.jsx ? N.createElement("button", {
        "aria-label": q,
        "data-disabled": Cl,
        "data-close-button": !0,
        onClick: Cl || !Un ? () => {}
        : () => {
            var W;
            br(),
            (W = h.onDismiss) == null || W.call(h, h)
        }
        ,
        className: St(P == null ? void 0 : P.closeButton, (s = h == null ? void 0 : h.classNames) == null ? void 0 : s.closeButton)
    }, (i = L == null ? void 0 : L.close) != null ? i : Zx) : null, h.jsx || b.isValidElement(h.title) ? h.jsx ? h.jsx : typeof h.title == "function" ? h.title() : h.title : N.createElement(N.Fragment, null, dt || h.icon || h.promise ? N.createElement("div", {
        "data-icon": "",
        className: St(P == null ? void 0 : P.icon, (o = h == null ? void 0 : h.classNames) == null ? void 0 : o.icon)
    }, h.promise || h.type === "loading" && !h.icon ? h.icon || Jy() : null, h.type !== "loading" ? h.icon || (L == null ? void 0 : L[dt]) || Kx(dt) : null) : null, N.createElement("div", {
        "data-content": "",
        className: St(P == null ? void 0 : P.content, (a = h == null ? void 0 : h.classNames) == null ? void 0 : a.content)
    }, N.createElement("div", {
        "data-title": "",
        className: St(P == null ? void 0 : P.title, (l = h == null ? void 0 : h.classNames) == null ? void 0 : l.title)
    }, typeof h.title == "function" ? h.title() : h.title), h.description ? N.createElement("div", {
        "data-description": "",
        className: St(J, Wy, P == null ? void 0 : P.description, (u = h == null ? void 0 : h.classNames) == null ? void 0 : u.description)
    }, typeof h.description == "function" ? h.description() : h.description) : null), b.isValidElement(h.cancel) ? h.cancel : h.cancel && Lo(h.cancel) ? N.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: h.cancelButtonStyle || j,
        onClick: W => {
            var se, ce;
            Lo(h.cancel) && Un && ((ce = (se = h.cancel).onClick) == null || ce.call(se, W),
            br())
        }
        ,
        className: St(P == null ? void 0 : P.cancelButton, (c = h == null ? void 0 : h.classNames) == null ? void 0 : c.cancelButton)
    }, h.cancel.label) : null, b.isValidElement(h.action) ? h.action : h.action && Lo(h.action) ? N.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: h.actionButtonStyle || z,
        onClick: W => {
            var se, ce;
            Lo(h.action) && ((ce = (se = h.action).onClick) == null || ce.call(se, W),
            !W.defaultPrevented && br())
        }
        ,
        className: St(P == null ? void 0 : P.actionButton, (d = h == null ? void 0 : h.classNames) == null ? void 0 : d.actionButton)
    }, h.action.label) : null))
}
;
function Pf() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function v_(e, t) {
    let r = {};
    return [e, t].forEach( (n, s) => {
        let i = s === 1
          , o = i ? "--mobile-offset" : "--offset"
          , a = i ? c_ : u_;
        function l(u) {
            ["top", "right", "bottom", "left"].forEach(c => {
                r[`${o}-${c}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof n == "number" || typeof n == "string" ? l(n) : typeof n == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            n[u] === void 0 ? r[`${o}-${u}`] = a : r[`${o}-${u}`] = typeof n[u] == "number" ? `${n[u]}px` : n[u]
        }
        ) : l(a)
    }
    ),
    r
}
var y_ = b.forwardRef(function(e, t) {
    let {invert: r, position: n="bottom-right", hotkey: s=["altKey", "KeyT"], expand: i, closeButton: o, className: a, offset: l, mobileOffset: u, theme: c="light", richColors: d, duration: f, style: h, visibleToasts: y=l_, toastOptions: g, dir: w=Pf(), gap: m=h_, loadingIcon: p, icons: v, containerAriaLabel: x="Notifications", pauseWhenPageIsHidden: S} = e
      , [k,E] = N.useState([])
      , R = N.useMemo( () => Array.from(new Set([n].concat(k.filter(F => F.position).map(F => F.position)))), [k, n])
      , [O,j] = N.useState([])
      , [z,D] = N.useState(!1)
      , [J,I] = N.useState(!1)
      , [X,H] = N.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , K = N.useRef(null)
      , C = s.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , P = N.useRef(null)
      , L = N.useRef(!1)
      , q = N.useCallback(F => {
        E(Q => {
            var Z;
            return (Z = Q.find(we => we.id === F.id)) != null && Z.delete || qe.dismiss(F.id),
            Q.filter( ({id: we}) => we !== F.id)
        }
        )
    }
    , []);
    return N.useEffect( () => qe.subscribe(F => {
        if (F.dismiss) {
            E(Q => Q.map(Z => Z.id === F.id ? {
                ...Z,
                delete: !0
            } : Z));
            return
        }
        setTimeout( () => {
            zg.flushSync( () => {
                E(Q => {
                    let Z = Q.findIndex(we => we.id === F.id);
                    return Z !== -1 ? [...Q.slice(0, Z), {
                        ...Q[Z],
                        ...F
                    }, ...Q.slice(Z + 1)] : [F, ...Q]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    N.useEffect( () => {
        if (c !== "system") {
            H(c);
            return
        }
        if (c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? H("dark") : H("light")),
        typeof window > "u")
            return;
        let F = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            F.addEventListener("change", ({matches: Q}) => {
                H(Q ? "dark" : "light")
            }
            )
        } catch {
            F.addListener( ({matches: Z}) => {
                try {
                    H(Z ? "dark" : "light")
                } catch (we) {
                    console.error(we)
                }
            }
            )
        }
    }
    , [c]),
    N.useEffect( () => {
        k.length <= 1 && D(!1)
    }
    , [k]),
    N.useEffect( () => {
        let F = Q => {
            var Z, we;
            s.every(je => Q[je] || Q.code === je) && (D(!0),
            (Z = K.current) == null || Z.focus()),
            Q.code === "Escape" && (document.activeElement === K.current || (we = K.current) != null && we.contains(document.activeElement)) && D(!1)
        }
        ;
        return document.addEventListener("keydown", F),
        () => document.removeEventListener("keydown", F)
    }
    , [s]),
    N.useEffect( () => {
        if (K.current)
            return () => {
                P.current && (P.current.focus({
                    preventScroll: !0
                }),
                P.current = null,
                L.current = !1)
            }
    }
    , [K.current]),
    N.createElement("section", {
        ref: t,
        "aria-label": `${x} ${C}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, R.map( (F, Q) => {
        var Z;
        let[we,je] = F.split("-");
        return k.length ? N.createElement("ol", {
            key: F,
            dir: w === "auto" ? Pf() : w,
            tabIndex: -1,
            ref: K,
            className: a,
            "data-sonner-toaster": !0,
            "data-theme": X,
            "data-y-position": we,
            "data-lifted": z && k.length > 1 && !i,
            "data-x-position": je,
            style: {
                "--front-toast-height": `${((Z = O[0]) == null ? void 0 : Z.height) || 0}px`,
                "--width": `${d_}px`,
                "--gap": `${m}px`,
                ...h,
                ...v_(l, u)
            },
            onBlur: re => {
                L.current && !re.currentTarget.contains(re.relatedTarget) && (L.current = !1,
                P.current && (P.current.focus({
                    preventScroll: !0
                }),
                P.current = null))
            }
            ,
            onFocus: re => {
                re.target instanceof HTMLElement && re.target.dataset.dismissible === "false" || L.current || (L.current = !0,
                P.current = re.relatedTarget)
            }
            ,
            onMouseEnter: () => D(!0),
            onMouseMove: () => D(!0),
            onMouseLeave: () => {
                J || D(!1)
            }
            ,
            onDragEnd: () => D(!1),
            onPointerDown: re => {
                re.target instanceof HTMLElement && re.target.dataset.dismissible === "false" || I(!0)
            }
            ,
            onPointerUp: () => I(!1)
        }, k.filter(re => !re.position && Q === 0 || re.position === F).map( (re, $n) => {
            var vr, sn;
            return N.createElement(g_, {
                key: re.id,
                icons: v,
                index: $n,
                toast: re,
                defaultRichColors: d,
                duration: (vr = g == null ? void 0 : g.duration) != null ? vr : f,
                className: g == null ? void 0 : g.className,
                descriptionClassName: g == null ? void 0 : g.descriptionClassName,
                invert: r,
                visibleToasts: y,
                closeButton: (sn = g == null ? void 0 : g.closeButton) != null ? sn : o,
                interacting: J,
                position: F,
                style: g == null ? void 0 : g.style,
                unstyled: g == null ? void 0 : g.unstyled,
                classNames: g == null ? void 0 : g.classNames,
                cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle,
                actionButtonStyle: g == null ? void 0 : g.actionButtonStyle,
                removeToast: q,
                toasts: k.filter(yr => yr.position == re.position),
                heights: O.filter(yr => yr.position == re.position),
                setHeights: j,
                expandByDefault: i,
                gap: m,
                loadingIcon: p,
                expanded: z,
                pauseWhenPageIsHidden: S,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const w_ = ({...e}) => {
    const {theme: t="system"} = Vx();
    return _.jsx(y_, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
  , b_ = 1
  , x_ = 1e6;
let nu = 0;
function __() {
    return nu = (nu + 1) % Number.MAX_SAFE_INTEGER,
    nu.toString()
}
const su = new Map
  , Rf = e => {
    if (su.has(e))
        return;
    const t = setTimeout( () => {
        su.delete(e),
        bi({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , x_);
    su.set(e, t)
}
  , S_ = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, b_)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(r => r.id === t.toast.id ? {
                ...r,
                ...t.toast
            } : r)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: r} = t;
            return r ? Rf(r) : e.toasts.forEach(n => {
                Rf(n.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(n => n.id === r || r === void 0 ? {
                    ...n,
                    open: !1
                } : n)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(r => r.id !== t.toastId)
        }
    }
}
  , ia = [];
let oa = {
    toasts: []
};
function bi(e) {
    oa = S_(oa, e),
    ia.forEach(t => {
        t(oa)
    }
    )
}
function k_({...e}) {
    const t = __()
      , r = s => bi({
        type: "UPDATE_TOAST",
        toast: {
            ...s,
            id: t
        }
    })
      , n = () => bi({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return bi({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: s => {
                s || n()
            }
        }
    }),
    {
        id: t,
        dismiss: n,
        update: r
    }
}
function E_() {
    const [e,t] = b.useState(oa);
    return b.useEffect( () => (ia.push(t),
    () => {
        const r = ia.indexOf(t);
        r > -1 && ia.splice(r, 1)
    }
    ), [e]),
    {
        ...e,
        toast: k_,
        dismiss: r => bi({
            type: "DISMISS_TOAST",
            toastId: r
        })
    }
}
function Se(e, t, {checkForDefaultPrevented: r=!0}={}) {
    return function(s) {
        if (e == null || e(s),
        r === !1 || !s.defaultPrevented)
            return t == null ? void 0 : t(s)
    }
}
function Af(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function av(...e) {
    return t => {
        let r = !1;
        const n = e.map(s => {
            const i = Af(s, t);
            return !r && typeof i == "function" && (r = !0),
            i
        }
        );
        if (r)
            return () => {
                for (let s = 0; s < n.length; s++) {
                    const i = n[s];
                    typeof i == "function" ? i() : Af(e[s], null)
                }
            }
    }
}
function Lt(...e) {
    return b.useCallback(av(...e), e)
}
function dl(e, t=[]) {
    let r = [];
    function n(i, o) {
        const a = b.createContext(o)
          , l = r.length;
        r = [...r, o];
        const u = d => {
            var m;
            const {scope: f, children: h, ...y} = d
              , g = ((m = f == null ? void 0 : f[e]) == null ? void 0 : m[l]) || a
              , w = b.useMemo( () => y, Object.values(y));
            return _.jsx(g.Provider, {
                value: w,
                children: h
            })
        }
        ;
        u.displayName = i + "Provider";
        function c(d, f) {
            var g;
            const h = ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[l]) || a
              , y = b.useContext(h);
            if (y)
                return y;
            if (o !== void 0)
                return o;
            throw new Error(`\`${d}\` must be used within \`${i}\``)
        }
        return [u, c]
    }
    const s = () => {
        const i = r.map(o => b.createContext(o));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || i;
            return b.useMemo( () => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
    ;
    return s.scopeName = e,
    [n, T_(s, ...t)]
}
function T_(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const r = () => {
        const n = e.map(s => ({
            useScope: s(),
            scopeName: s.scopeName
        }));
        return function(i) {
            const o = n.reduce( (a, {useScope: l, scopeName: u}) => {
                const d = l(i)[`__scope${u}`];
                return {
                    ...a,
                    ...d
                }
            }
            , {});
            return b.useMemo( () => ({
                [`__scope${t.scopeName}`]: o
            }), [o])
        }
    }
    ;
    return r.scopeName = t.scopeName,
    r
}
function hc(e) {
    const t = C_(e)
      , r = b.forwardRef( (n, s) => {
        const {children: i, ...o} = n
          , a = b.Children.toArray(i)
          , l = a.find(R_);
        if (l) {
            const u = l.props.children
              , c = a.map(d => d === l ? b.Children.count(u) > 1 ? b.Children.only(null) : b.isValidElement(u) ? u.props.children : null : d);
            return _.jsx(t, {
                ...o,
                ref: s,
                children: b.isValidElement(u) ? b.cloneElement(u, void 0, c) : null
            })
        }
        return _.jsx(t, {
            ...o,
            ref: s,
            children: i
        })
    }
    );
    return r.displayName = `${e}.Slot`,
    r
}
function C_(e) {
    const t = b.forwardRef( (r, n) => {
        const {children: s, ...i} = r;
        if (b.isValidElement(s)) {
            const o = O_(s)
              , a = A_(i, s.props);
            return s.type !== b.Fragment && (a.ref = n ? av(n, o) : o),
            b.cloneElement(s, a)
        }
        return b.Children.count(s) > 1 ? b.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var lv = Symbol("radix.slottable");
function P_(e) {
    const t = ({children: r}) => _.jsx(_.Fragment, {
        children: r
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = lv,
    t
}
function R_(e) {
    return b.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === lv
}
function A_(e, t) {
    const r = {
        ...t
    };
    for (const n in t) {
        const s = e[n]
          , i = t[n];
        /^on[A-Z]/.test(n) ? s && i ? r[n] = (...a) => {
            const l = i(...a);
            return s(...a),
            l
        }
        : s && (r[n] = s) : n === "style" ? r[n] = {
            ...s,
            ...i
        } : n === "className" && (r[n] = [s, i].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...r
    }
}
function O_(e) {
    var n, s;
    let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get
      , r = t && "isReactWarning"in t && t.isReactWarning;
    return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get,
    r = t && "isReactWarning"in t && t.isReactWarning,
    r ? e.props.ref : e.props.ref || e.ref)
}
function N_(e) {
    const t = e + "CollectionProvider"
      , [r,n] = dl(t)
      , [s,i] = r(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , o = g => {
        const {scope: w, children: m} = g
          , p = N.useRef(null)
          , v = N.useRef(new Map).current;
        return _.jsx(s, {
            scope: w,
            itemMap: v,
            collectionRef: p,
            children: m
        })
    }
    ;
    o.displayName = t;
    const a = e + "CollectionSlot"
      , l = hc(a)
      , u = N.forwardRef( (g, w) => {
        const {scope: m, children: p} = g
          , v = i(a, m)
          , x = Lt(w, v.collectionRef);
        return _.jsx(l, {
            ref: x,
            children: p
        })
    }
    );
    u.displayName = a;
    const c = e + "CollectionItemSlot"
      , d = "data-radix-collection-item"
      , f = hc(c)
      , h = N.forwardRef( (g, w) => {
        const {scope: m, children: p, ...v} = g
          , x = N.useRef(null)
          , S = Lt(w, x)
          , k = i(c, m);
        return N.useEffect( () => (k.itemMap.set(x, {
            ref: x,
            ...v
        }),
        () => void k.itemMap.delete(x))),
        _.jsx(f, {
            [d]: "",
            ref: S,
            children: p
        })
    }
    );
    h.displayName = c;
    function y(g) {
        const w = i(e + "CollectionConsumer", g);
        return N.useCallback( () => {
            const p = w.collectionRef.current;
            if (!p)
                return [];
            const v = Array.from(p.querySelectorAll(`[${d}]`));
            return Array.from(w.itemMap.values()).sort( (k, E) => v.indexOf(k.ref.current) - v.indexOf(E.ref.current))
        }
        , [w.collectionRef, w.itemMap])
    }
    return [{
        Provider: o,
        Slot: u,
        ItemSlot: h
    }, y, n]
}
var j_ = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , Ze = j_.reduce( (e, t) => {
    const r = hc(`Primitive.${t}`)
      , n = b.forwardRef( (s, i) => {
        const {asChild: o, ...a} = s
          , l = o ? r : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        _.jsx(l, {
            ...a,
            ref: i
        })
    }
    );
    return n.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: n
    }
}
, {});
function uv(e, t) {
    e && lo.flushSync( () => e.dispatchEvent(t))
}
function Yr(e) {
    const t = b.useRef(e);
    return b.useEffect( () => {
        t.current = e
    }
    ),
    b.useMemo( () => (...r) => {
        var n;
        return (n = t.current) == null ? void 0 : n.call(t, ...r)
    }
    , [])
}
function I_(e, t=globalThis == null ? void 0 : globalThis.document) {
    const r = Yr(e);
    b.useEffect( () => {
        const n = s => {
            s.key === "Escape" && r(s)
        }
        ;
        return t.addEventListener("keydown", n, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", n, {
            capture: !0
        })
    }
    , [r, t])
}
var L_ = "DismissableLayer", fc = "dismissableLayer.update", $_ = "dismissableLayer.pointerDownOutside", D_ = "dismissableLayer.focusOutside", Of, cv = b.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), Nd = b.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: r=!1, onEscapeKeyDown: n, onPointerDownOutside: s, onFocusOutside: i, onInteractOutside: o, onDismiss: a, ...l} = e
      , u = b.useContext(cv)
      , [c,d] = b.useState(null)
      , f = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,h] = b.useState({})
      , y = Lt(t, E => d(E))
      , g = Array.from(u.layers)
      , [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , m = g.indexOf(w)
      , p = c ? g.indexOf(c) : -1
      , v = u.layersWithOutsidePointerEventsDisabled.size > 0
      , x = p >= m
      , S = U_(E => {
        const R = E.target
          , O = [...u.branches].some(j => j.contains(R));
        !x || O || (s == null || s(E),
        o == null || o(E),
        E.defaultPrevented || a == null || a())
    }
    , f)
      , k = F_(E => {
        const R = E.target;
        [...u.branches].some(j => j.contains(R)) || (i == null || i(E),
        o == null || o(E),
        E.defaultPrevented || a == null || a())
    }
    , f);
    return I_(E => {
        p === u.layers.size - 1 && (n == null || n(E),
        !E.defaultPrevented && a && (E.preventDefault(),
        a()))
    }
    , f),
    b.useEffect( () => {
        if (c)
            return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Of = f.body.style.pointerEvents,
            f.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            Nf(),
            () => {
                r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Of)
            }
    }
    , [c, f, r, u]),
    b.useEffect( () => () => {
        c && (u.layers.delete(c),
        u.layersWithOutsidePointerEventsDisabled.delete(c),
        Nf())
    }
    , [c, u]),
    b.useEffect( () => {
        const E = () => h({});
        return document.addEventListener(fc, E),
        () => document.removeEventListener(fc, E)
    }
    , []),
    _.jsx(Ze.div, {
        ...l,
        ref: y,
        style: {
            pointerEvents: v ? x ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: Se(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: Se(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: Se(e.onPointerDownCapture, S.onPointerDownCapture)
    })
}
);
Nd.displayName = L_;
var M_ = "DismissableLayerBranch"
  , dv = b.forwardRef( (e, t) => {
    const r = b.useContext(cv)
      , n = b.useRef(null)
      , s = Lt(t, n);
    return b.useEffect( () => {
        const i = n.current;
        if (i)
            return r.branches.add(i),
            () => {
                r.branches.delete(i)
            }
    }
    , [r.branches]),
    _.jsx(Ze.div, {
        ...e,
        ref: s
    })
}
);
dv.displayName = M_;
function U_(e, t=globalThis == null ? void 0 : globalThis.document) {
    const r = Yr(e)
      , n = b.useRef(!1)
      , s = b.useRef( () => {}
    );
    return b.useEffect( () => {
        const i = a => {
            if (a.target && !n.current) {
                let l = function() {
                    hv($_, r, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: a
                };
                a.pointerType === "touch" ? (t.removeEventListener("click", s.current),
                s.current = l,
                t.addEventListener("click", s.current, {
                    once: !0
                })) : l()
            } else
                t.removeEventListener("click", s.current);
            n.current = !1
        }
          , o = window.setTimeout( () => {
            t.addEventListener("pointerdown", i)
        }
        , 0);
        return () => {
            window.clearTimeout(o),
            t.removeEventListener("pointerdown", i),
            t.removeEventListener("click", s.current)
        }
    }
    , [t, r]),
    {
        onPointerDownCapture: () => n.current = !0
    }
}
function F_(e, t=globalThis == null ? void 0 : globalThis.document) {
    const r = Yr(e)
      , n = b.useRef(!1);
    return b.useEffect( () => {
        const s = i => {
            i.target && !n.current && hv(D_, r, {
                originalEvent: i
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", s),
        () => t.removeEventListener("focusin", s)
    }
    , [t, r]),
    {
        onFocusCapture: () => n.current = !0,
        onBlurCapture: () => n.current = !1
    }
}
function Nf() {
    const e = new CustomEvent(fc);
    document.dispatchEvent(e)
}
function hv(e, t, r, {discrete: n}) {
    const s = r.originalEvent.target
      , i = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: r
    });
    t && s.addEventListener(e, t, {
        once: !0
    }),
    n ? uv(s, i) : s.dispatchEvent(i)
}
var B_ = Nd
  , z_ = dv
  , Xr = globalThis != null && globalThis.document ? b.useLayoutEffect : () => {}
  , H_ = "Portal"
  , fv = b.forwardRef( (e, t) => {
    var a;
    const {container: r, ...n} = e
      , [s,i] = b.useState(!1);
    Xr( () => i(!0), []);
    const o = r || s && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
    return o ? zg.createPortal(_.jsx(Ze.div, {
        ...n,
        ref: t
    }), o) : null
}
);
fv.displayName = H_;
function W_(e, t) {
    return b.useReducer( (r, n) => t[r][n] ?? r, e)
}
var jd = e => {
    const {present: t, children: r} = e
      , n = V_(t)
      , s = typeof r == "function" ? r({
        present: n.isPresent
    }) : b.Children.only(r)
      , i = Lt(n.ref, K_(s));
    return typeof r == "function" || n.isPresent ? b.cloneElement(s, {
        ref: i
    }) : null
}
;
jd.displayName = "Presence";
function V_(e) {
    const [t,r] = b.useState()
      , n = b.useRef(null)
      , s = b.useRef(e)
      , i = b.useRef("none")
      , o = e ? "mounted" : "unmounted"
      , [a,l] = W_(o, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return b.useEffect( () => {
        const u = $o(n.current);
        i.current = a === "mounted" ? u : "none"
    }
    , [a]),
    Xr( () => {
        const u = n.current
          , c = s.current;
        if (c !== e) {
            const f = i.current
              , h = $o(u);
            e ? l("MOUNT") : h === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && f !== h ? "ANIMATION_OUT" : "UNMOUNT"),
            s.current = e
        }
    }
    , [e, l]),
    Xr( () => {
        if (t) {
            let u;
            const c = t.ownerDocument.defaultView ?? window
              , d = h => {
                const g = $o(n.current).includes(h.animationName);
                if (h.target === t && g && (l("ANIMATION_END"),
                !s.current)) {
                    const w = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = c.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w)
                    }
                    )
                }
            }
              , f = h => {
                h.target === t && (i.current = $o(n.current))
            }
            ;
            return t.addEventListener("animationstart", f),
            t.addEventListener("animationcancel", d),
            t.addEventListener("animationend", d),
            () => {
                c.clearTimeout(u),
                t.removeEventListener("animationstart", f),
                t.removeEventListener("animationcancel", d),
                t.removeEventListener("animationend", d)
            }
        } else
            l("ANIMATION_END")
    }
    , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: b.useCallback(u => {
            n.current = u ? getComputedStyle(u) : null,
            r(u)
        }
        , [])
    }
}
function $o(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function K_(e) {
    var n, s;
    let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get
      , r = t && "isReactWarning"in t && t.isReactWarning;
    return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get,
    r = t && "isReactWarning"in t && t.isReactWarning,
    r ? e.props.ref : e.props.ref || e.ref)
}
var q_ = Up[" useInsertionEffect ".trim().toString()] || Xr;
function G_({prop: e, defaultProp: t, onChange: r= () => {}
, caller: n}) {
    const [s,i,o] = J_({
        defaultProp: t,
        onChange: r
    })
      , a = e !== void 0
      , l = a ? e : s;
    {
        const c = b.useRef(e !== void 0);
        b.useEffect( () => {
            const d = c.current;
            d !== a && console.warn(`${n} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            c.current = a
        }
        , [a, n])
    }
    const u = b.useCallback(c => {
        var d;
        if (a) {
            const f = Q_(c) ? c(e) : c;
            f !== e && ((d = o.current) == null || d.call(o, f))
        } else
            i(c)
    }
    , [a, e, i, o]);
    return [l, u]
}
function J_({defaultProp: e, onChange: t}) {
    const [r,n] = b.useState(e)
      , s = b.useRef(r)
      , i = b.useRef(t);
    return q_( () => {
        i.current = t
    }
    , [t]),
    b.useEffect( () => {
        var o;
        s.current !== r && ((o = i.current) == null || o.call(i, r),
        s.current = r)
    }
    , [r, s]),
    [r, n, i]
}
function Q_(e) {
    return typeof e == "function"
}
var Y_ = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , X_ = "VisuallyHidden"
  , hl = b.forwardRef( (e, t) => _.jsx(Ze.span, {
    ...e,
    ref: t,
    style: {
        ...Y_,
        ...e.style
    }
}));
hl.displayName = X_;
var Z_ = hl
  , Id = "ToastProvider"
  , [Ld,eS,tS] = N_("Toast")
  , [pv,cP] = dl("Toast", [tS])
  , [rS,fl] = pv(Id)
  , mv = e => {
    const {__scopeToast: t, label: r="Notification", duration: n=5e3, swipeDirection: s="right", swipeThreshold: i=50, children: o} = e
      , [a,l] = b.useState(null)
      , [u,c] = b.useState(0)
      , d = b.useRef(!1)
      , f = b.useRef(!1);
    return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${Id}\`. Expected non-empty \`string\`.`),
    _.jsx(Ld.Provider, {
        scope: t,
        children: _.jsx(rS, {
            scope: t,
            label: r,
            duration: n,
            swipeDirection: s,
            swipeThreshold: i,
            toastCount: u,
            viewport: a,
            onViewportChange: l,
            onToastAdd: b.useCallback( () => c(h => h + 1), []),
            onToastRemove: b.useCallback( () => c(h => h - 1), []),
            isFocusedToastEscapeKeyDownRef: d,
            isClosePausedRef: f,
            children: o
        })
    })
}
;
mv.displayName = Id;
var gv = "ToastViewport"
  , nS = ["F8"]
  , pc = "toast.viewportPause"
  , mc = "toast.viewportResume"
  , vv = b.forwardRef( (e, t) => {
    const {__scopeToast: r, hotkey: n=nS, label: s="Notifications ({hotkey})", ...i} = e
      , o = fl(gv, r)
      , a = eS(r)
      , l = b.useRef(null)
      , u = b.useRef(null)
      , c = b.useRef(null)
      , d = b.useRef(null)
      , f = Lt(t, d, o.onViewportChange)
      , h = n.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , y = o.toastCount > 0;
    b.useEffect( () => {
        const w = m => {
            var v;
            n.length !== 0 && n.every(x => m[x] || m.code === x) && ((v = d.current) == null || v.focus())
        }
        ;
        return document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
    }
    , [n]),
    b.useEffect( () => {
        const w = l.current
          , m = d.current;
        if (y && w && m) {
            const p = () => {
                if (!o.isClosePausedRef.current) {
                    const k = new CustomEvent(pc);
                    m.dispatchEvent(k),
                    o.isClosePausedRef.current = !0
                }
            }
              , v = () => {
                if (o.isClosePausedRef.current) {
                    const k = new CustomEvent(mc);
                    m.dispatchEvent(k),
                    o.isClosePausedRef.current = !1
                }
            }
              , x = k => {
                !w.contains(k.relatedTarget) && v()
            }
              , S = () => {
                w.contains(document.activeElement) || v()
            }
            ;
            return w.addEventListener("focusin", p),
            w.addEventListener("focusout", x),
            w.addEventListener("pointermove", p),
            w.addEventListener("pointerleave", S),
            window.addEventListener("blur", p),
            window.addEventListener("focus", v),
            () => {
                w.removeEventListener("focusin", p),
                w.removeEventListener("focusout", x),
                w.removeEventListener("pointermove", p),
                w.removeEventListener("pointerleave", S),
                window.removeEventListener("blur", p),
                window.removeEventListener("focus", v)
            }
        }
    }
    , [y, o.isClosePausedRef]);
    const g = b.useCallback( ({tabbingDirection: w}) => {
        const p = a().map(v => {
            const x = v.ref.current
              , S = [x, ...gS(x)];
            return w === "forwards" ? S : S.reverse()
        }
        );
        return (w === "forwards" ? p.reverse() : p).flat()
    }
    , [a]);
    return b.useEffect( () => {
        const w = d.current;
        if (w) {
            const m = p => {
                var S, k, E;
                const v = p.altKey || p.ctrlKey || p.metaKey;
                if (p.key === "Tab" && !v) {
                    const R = document.activeElement
                      , O = p.shiftKey;
                    if (p.target === w && O) {
                        (S = u.current) == null || S.focus();
                        return
                    }
                    const D = g({
                        tabbingDirection: O ? "backwards" : "forwards"
                    })
                      , J = D.findIndex(I => I === R);
                    iu(D.slice(J + 1)) ? p.preventDefault() : O ? (k = u.current) == null || k.focus() : (E = c.current) == null || E.focus()
                }
            }
            ;
            return w.addEventListener("keydown", m),
            () => w.removeEventListener("keydown", m)
        }
    }
    , [a, g]),
    _.jsxs(z_, {
        ref: l,
        role: "region",
        "aria-label": s.replace("{hotkey}", h),
        tabIndex: -1,
        style: {
            pointerEvents: y ? void 0 : "none"
        },
        children: [y && _.jsx(gc, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const w = g({
                    tabbingDirection: "forwards"
                });
                iu(w)
            }
        }), _.jsx(Ld.Slot, {
            scope: r,
            children: _.jsx(Ze.ol, {
                tabIndex: -1,
                ...i,
                ref: f
            })
        }), y && _.jsx(gc, {
            ref: c,
            onFocusFromOutsideViewport: () => {
                const w = g({
                    tabbingDirection: "backwards"
                });
                iu(w)
            }
        })]
    })
}
);
vv.displayName = gv;
var yv = "ToastFocusProxy"
  , gc = b.forwardRef( (e, t) => {
    const {__scopeToast: r, onFocusFromOutsideViewport: n, ...s} = e
      , i = fl(yv, r);
    return _.jsx(hl, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...s,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: o => {
            var u;
            const a = o.relatedTarget;
            !((u = i.viewport) != null && u.contains(a)) && n()
        }
    })
}
);
gc.displayName = yv;
var uo = "Toast"
  , sS = "toast.swipeStart"
  , iS = "toast.swipeMove"
  , oS = "toast.swipeCancel"
  , aS = "toast.swipeEnd"
  , wv = b.forwardRef( (e, t) => {
    const {forceMount: r, open: n, defaultOpen: s, onOpenChange: i, ...o} = e
      , [a,l] = G_({
        prop: n,
        defaultProp: s ?? !0,
        onChange: i,
        caller: uo
    });
    return _.jsx(jd, {
        present: r || a,
        children: _.jsx(cS, {
            open: a,
            ...o,
            ref: t,
            onClose: () => l(!1),
            onPause: Yr(e.onPause),
            onResume: Yr(e.onResume),
            onSwipeStart: Se(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: Se(e.onSwipeMove, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`)
            }
            ),
            onSwipeCancel: Se(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: Se(e.onSwipeEnd, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`),
                l(!1)
            }
            )
        })
    })
}
);
wv.displayName = uo;
var [lS,uS] = pv(uo, {
    onClose() {}
})
  , cS = b.forwardRef( (e, t) => {
    const {__scopeToast: r, type: n="foreground", duration: s, open: i, onClose: o, onEscapeKeyDown: a, onPause: l, onResume: u, onSwipeStart: c, onSwipeMove: d, onSwipeCancel: f, onSwipeEnd: h, ...y} = e
      , g = fl(uo, r)
      , [w,m] = b.useState(null)
      , p = Lt(t, I => m(I))
      , v = b.useRef(null)
      , x = b.useRef(null)
      , S = s || g.duration
      , k = b.useRef(0)
      , E = b.useRef(S)
      , R = b.useRef(0)
      , {onToastAdd: O, onToastRemove: j} = g
      , z = Yr( () => {
        var X;
        (w == null ? void 0 : w.contains(document.activeElement)) && ((X = g.viewport) == null || X.focus()),
        o()
    }
    )
      , D = b.useCallback(I => {
        !I || I === 1 / 0 || (window.clearTimeout(R.current),
        k.current = new Date().getTime(),
        R.current = window.setTimeout(z, I))
    }
    , [z]);
    b.useEffect( () => {
        const I = g.viewport;
        if (I) {
            const X = () => {
                D(E.current),
                u == null || u()
            }
              , H = () => {
                const K = new Date().getTime() - k.current;
                E.current = E.current - K,
                window.clearTimeout(R.current),
                l == null || l()
            }
            ;
            return I.addEventListener(pc, H),
            I.addEventListener(mc, X),
            () => {
                I.removeEventListener(pc, H),
                I.removeEventListener(mc, X)
            }
        }
    }
    , [g.viewport, S, l, u, D]),
    b.useEffect( () => {
        i && !g.isClosePausedRef.current && D(S)
    }
    , [i, S, g.isClosePausedRef, D]),
    b.useEffect( () => (O(),
    () => j()), [O, j]);
    const J = b.useMemo( () => w ? Tv(w) : null, [w]);
    return g.viewport ? _.jsxs(_.Fragment, {
        children: [J && _.jsx(dS, {
            __scopeToast: r,
            role: "status",
            "aria-live": n === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: J
        }), _.jsx(lS, {
            scope: r,
            onClose: z,
            children: lo.createPortal(_.jsx(Ld.ItemSlot, {
                scope: r,
                children: _.jsx(B_, {
                    asChild: !0,
                    onEscapeKeyDown: Se(a, () => {
                        g.isFocusedToastEscapeKeyDownRef.current || z(),
                        g.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: _.jsx(Ze.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": g.swipeDirection,
                        ...y,
                        ref: p,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: Se(e.onKeyDown, I => {
                            I.key === "Escape" && (a == null || a(I.nativeEvent),
                            I.nativeEvent.defaultPrevented || (g.isFocusedToastEscapeKeyDownRef.current = !0,
                            z()))
                        }
                        ),
                        onPointerDown: Se(e.onPointerDown, I => {
                            I.button === 0 && (v.current = {
                                x: I.clientX,
                                y: I.clientY
                            })
                        }
                        ),
                        onPointerMove: Se(e.onPointerMove, I => {
                            if (!v.current)
                                return;
                            const X = I.clientX - v.current.x
                              , H = I.clientY - v.current.y
                              , K = !!x.current
                              , C = ["left", "right"].includes(g.swipeDirection)
                              , P = ["left", "up"].includes(g.swipeDirection) ? Math.min : Math.max
                              , L = C ? P(0, X) : 0
                              , q = C ? 0 : P(0, H)
                              , F = I.pointerType === "touch" ? 10 : 2
                              , Q = {
                                x: L,
                                y: q
                            }
                              , Z = {
                                originalEvent: I,
                                delta: Q
                            };
                            K ? (x.current = Q,
                            Do(iS, d, Z, {
                                discrete: !1
                            })) : jf(Q, g.swipeDirection, F) ? (x.current = Q,
                            Do(sS, c, Z, {
                                discrete: !1
                            }),
                            I.target.setPointerCapture(I.pointerId)) : (Math.abs(X) > F || Math.abs(H) > F) && (v.current = null)
                        }
                        ),
                        onPointerUp: Se(e.onPointerUp, I => {
                            const X = x.current
                              , H = I.target;
                            if (H.hasPointerCapture(I.pointerId) && H.releasePointerCapture(I.pointerId),
                            x.current = null,
                            v.current = null,
                            X) {
                                const K = I.currentTarget
                                  , C = {
                                    originalEvent: I,
                                    delta: X
                                };
                                jf(X, g.swipeDirection, g.swipeThreshold) ? Do(aS, h, C, {
                                    discrete: !0
                                }) : Do(oS, f, C, {
                                    discrete: !0
                                }),
                                K.addEventListener("click", P => P.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), g.viewport)
        })]
    }) : null
}
)
  , dS = e => {
    const {__scopeToast: t, children: r, ...n} = e
      , s = fl(uo, t)
      , [i,o] = b.useState(!1)
      , [a,l] = b.useState(!1);
    return pS( () => o(!0)),
    b.useEffect( () => {
        const u = window.setTimeout( () => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    a ? null : _.jsx(fv, {
        asChild: !0,
        children: _.jsx(hl, {
            ...n,
            children: i && _.jsxs(_.Fragment, {
                children: [s.label, " ", r]
            })
        })
    })
}
  , hS = "ToastTitle"
  , bv = b.forwardRef( (e, t) => {
    const {__scopeToast: r, ...n} = e;
    return _.jsx(Ze.div, {
        ...n,
        ref: t
    })
}
);
bv.displayName = hS;
var fS = "ToastDescription"
  , xv = b.forwardRef( (e, t) => {
    const {__scopeToast: r, ...n} = e;
    return _.jsx(Ze.div, {
        ...n,
        ref: t
    })
}
);
xv.displayName = fS;
var _v = "ToastAction"
  , Sv = b.forwardRef( (e, t) => {
    const {altText: r, ...n} = e;
    return r.trim() ? _.jsx(Ev, {
        altText: r,
        asChild: !0,
        children: _.jsx($d, {
            ...n,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${_v}\`. Expected non-empty \`string\`.`),
    null)
}
);
Sv.displayName = _v;
var kv = "ToastClose"
  , $d = b.forwardRef( (e, t) => {
    const {__scopeToast: r, ...n} = e
      , s = uS(kv, r);
    return _.jsx(Ev, {
        asChild: !0,
        children: _.jsx(Ze.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: Se(e.onClick, s.onClose)
        })
    })
}
);
$d.displayName = kv;
var Ev = b.forwardRef( (e, t) => {
    const {__scopeToast: r, altText: n, ...s} = e;
    return _.jsx(Ze.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": n || void 0,
        ...s,
        ref: t
    })
}
);
function Tv(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(n => {
        if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent),
        mS(n)) {
            const s = n.ariaHidden || n.hidden || n.style.display === "none"
              , i = n.dataset.radixToastAnnounceExclude === "";
            if (!s)
                if (i) {
                    const o = n.dataset.radixToastAnnounceAlt;
                    o && t.push(o)
                } else
                    t.push(...Tv(n))
        }
    }
    ),
    t
}
function Do(e, t, r, {discrete: n}) {
    const s = r.originalEvent.currentTarget
      , i = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: r
    });
    t && s.addEventListener(e, t, {
        once: !0
    }),
    n ? uv(s, i) : s.dispatchEvent(i)
}
var jf = (e, t, r=0) => {
    const n = Math.abs(e.x)
      , s = Math.abs(e.y)
      , i = n > s;
    return t === "left" || t === "right" ? i && n > r : !i && s > r
}
;
function pS(e= () => {}
) {
    const t = Yr(e);
    Xr( () => {
        let r = 0
          , n = 0;
        return r = window.requestAnimationFrame( () => n = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(r),
            window.cancelAnimationFrame(n)
        }
    }
    , [t])
}
function mS(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function gS(e) {
    const t = []
      , r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: n => {
            const s = n.tagName === "INPUT" && n.type === "hidden";
            return n.disabled || n.hidden || s ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; r.nextNode(); )
        t.push(r.currentNode);
    return t
}
function iu(e) {
    const t = document.activeElement;
    return e.some(r => r === t ? !0 : (r.focus(),
    document.activeElement !== t))
}
var vS = mv
  , Cv = vv
  , Pv = wv
  , Rv = bv
  , Av = xv
  , Ov = Sv
  , Nv = $d;
function jv(e) {
    var t, r, n = "";
    if (typeof e == "string" || typeof e == "number")
        n += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var s = e.length;
            for (t = 0; t < s; t++)
                e[t] && (r = jv(e[t])) && (n && (n += " "),
                n += r)
        } else
            for (r in e)
                e[r] && (n && (n += " "),
                n += r);
    return n
}
function Iv() {
    for (var e, t, r = 0, n = "", s = arguments.length; r < s; r++)
        (e = arguments[r]) && (t = jv(e)) && (n && (n += " "),
        n += t);
    return n
}
const If = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , Lf = Iv
  , yS = (e, t) => r => {
    var n;
    if ((t == null ? void 0 : t.variants) == null)
        return Lf(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
    const {variants: s, defaultVariants: i} = t
      , o = Object.keys(s).map(u => {
        const c = r == null ? void 0 : r[u]
          , d = i == null ? void 0 : i[u];
        if (c === null)
            return null;
        const f = If(c) || If(d);
        return s[u][f]
    }
    )
      , a = r && Object.entries(r).reduce( (u, c) => {
        let[d,f] = c;
        return f === void 0 || (u[d] = f),
        u
    }
    , {})
      , l = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce( (u, c) => {
        let {class: d, className: f, ...h} = c;
        return Object.entries(h).every(y => {
            let[g,w] = y;
            return Array.isArray(w) ? w.includes({
                ...i,
                ...a
            }[g]) : {
                ...i,
                ...a
            }[g] === w
        }
        ) ? [...u, d, f] : u
    }
    , []);
    return Lf(e, o, l, r == null ? void 0 : r.class, r == null ? void 0 : r.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wS = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Lv = (...e) => e.filter( (t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var bS = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xS = b.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: r=2, absoluteStrokeWidth: n, className: s="", children: i, iconNode: o, ...a}, l) => b.createElement("svg", {
    ref: l,
    ...bS,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: n ? Number(r) * 24 / Number(t) : r,
    className: Lv("lucide", s),
    ...a
}, [...o.map( ([u,c]) => b.createElement(u, c)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ct = (e, t) => {
    const r = b.forwardRef( ({className: n, ...s}, i) => b.createElement(xS, {
        ref: i,
        iconNode: t,
        className: Lv(`lucide-${wS(e)}`, n),
        ...s
    }));
    return r.displayName = `${e}`,
    r
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _S = ct("ArrowLeft", [["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
}], ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SS = ct("Banknote", [["rect", {
    width: "20",
    height: "12",
    x: "2",
    y: "6",
    rx: "2",
    key: "9lu3g6"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "2",
    key: "1c9p78"
}], ["path", {
    d: "M6 12h.01M18 12h.01",
    key: "113zkx"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kS = ct("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ES = ct("CircleCheckBig", [["path", {
    d: "M21.801 10A10 10 0 1 1 17 3.335",
    key: "yps3ct"
}], ["path", {
    d: "m9 11 3 3L22 4",
    key: "1pflzl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TS = ct("CircleX", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "m15 9-6 6",
    key: "1uzhvr"
}], ["path", {
    d: "m9 9 6 6",
    key: "z0biqf"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CS = ct("CreditCard", [["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "5",
    rx: "2",
    key: "ynyp8z"
}], ["line", {
    x1: "2",
    x2: "22",
    y1: "10",
    y2: "10",
    key: "1b3vmo"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PS = ct("LoaderCircle", [["path", {
    d: "M21 12a9 9 0 1 1-6.219-8.56",
    key: "13zald"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RS = ct("Lock", [["rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2",
    ry: "2",
    key: "1w4ew1"
}], ["path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4",
    key: "fwvmzm"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AS = ct("Rocket", [["path", {
    d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
    key: "m3kijz"
}], ["path", {
    d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
    key: "1fmvmk"
}], ["path", {
    d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
    key: "1f8sc4"
}], ["path", {
    d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
    key: "qeys4"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $v = ct("Smartphone", [["rect", {
    width: "14",
    height: "20",
    x: "5",
    y: "2",
    rx: "2",
    ry: "2",
    key: "1yt0o3"
}], ["path", {
    d: "M12 18h.01",
    key: "mhygvu"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pl = ct("Wifi", [["path", {
    d: "M12 20h.01",
    key: "zekei9"
}], ["path", {
    d: "M2 8.82a15 15 0 0 1 20 0",
    key: "dnpr2z"
}], ["path", {
    d: "M5 12.859a10 10 0 0 1 14 0",
    key: "1x1e6c"
}], ["path", {
    d: "M8.5 16.429a5 5 0 0 1 7 0",
    key: "1bycff"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OS = ct("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dv = ct("Zap", [["path", {
    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
    key: "1xq2db"
}]])
  , Dd = "-"
  , NS = e => {
    const t = IS(e)
      , {conflictingClassGroups: r, conflictingClassGroupModifiers: n} = e;
    return {
        getClassGroupId: o => {
            const a = o.split(Dd);
            return a[0] === "" && a.length !== 1 && a.shift(),
            Mv(a, t) || jS(o)
        }
        ,
        getConflictingClassGroupIds: (o, a) => {
            const l = r[o] || [];
            return a && n[o] ? [...l, ...n[o]] : l
        }
    }
}
  , Mv = (e, t) => {
    var o;
    if (e.length === 0)
        return t.classGroupId;
    const r = e[0]
      , n = t.nextPart.get(r)
      , s = n ? Mv(e.slice(1), n) : void 0;
    if (s)
        return s;
    if (t.validators.length === 0)
        return;
    const i = e.join(Dd);
    return (o = t.validators.find( ({validator: a}) => a(i))) == null ? void 0 : o.classGroupId
}
  , $f = /^\[(.+)\]$/
  , jS = e => {
    if ($f.test(e)) {
        const t = $f.exec(e)[1]
          , r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (r)
            return "arbitrary.." + r
    }
}
  , IS = e => {
    const {theme: t, prefix: r} = e
      , n = {
        nextPart: new Map,
        validators: []
    };
    return $S(Object.entries(e.classGroups), r).forEach( ([i,o]) => {
        vc(o, n, i, t)
    }
    ),
    n
}
  , vc = (e, t, r, n) => {
    e.forEach(s => {
        if (typeof s == "string") {
            const i = s === "" ? t : Df(t, s);
            i.classGroupId = r;
            return
        }
        if (typeof s == "function") {
            if (LS(s)) {
                vc(s(n), t, r, n);
                return
            }
            t.validators.push({
                validator: s,
                classGroupId: r
            });
            return
        }
        Object.entries(s).forEach( ([i,o]) => {
            vc(o, Df(t, i), r, n)
        }
        )
    }
    )
}
  , Df = (e, t) => {
    let r = e;
    return t.split(Dd).forEach(n => {
        r.nextPart.has(n) || r.nextPart.set(n, {
            nextPart: new Map,
            validators: []
        }),
        r = r.nextPart.get(n)
    }
    ),
    r
}
  , LS = e => e.isThemeGetter
  , $S = (e, t) => t ? e.map( ([r,n]) => {
    const s = n.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map( ([o,a]) => [t + o, a])) : i);
    return [r, s]
}
) : e
  , DS = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , r = new Map
      , n = new Map;
    const s = (i, o) => {
        r.set(i, o),
        t++,
        t > e && (t = 0,
        n = r,
        r = new Map)
    }
    ;
    return {
        get(i) {
            let o = r.get(i);
            if (o !== void 0)
                return o;
            if ((o = n.get(i)) !== void 0)
                return s(i, o),
                o
        },
        set(i, o) {
            r.has(i) ? r.set(i, o) : s(i, o)
        }
    }
}
  , Uv = "!"
  , MS = e => {
    const {separator: t, experimentalParseClassName: r} = e
      , n = t.length === 1
      , s = t[0]
      , i = t.length
      , o = a => {
        const l = [];
        let u = 0, c = 0, d;
        for (let w = 0; w < a.length; w++) {
            let m = a[w];
            if (u === 0) {
                if (m === s && (n || a.slice(w, w + i) === t)) {
                    l.push(a.slice(c, w)),
                    c = w + i;
                    continue
                }
                if (m === "/") {
                    d = w;
                    continue
                }
            }
            m === "[" ? u++ : m === "]" && u--
        }
        const f = l.length === 0 ? a : a.substring(c)
          , h = f.startsWith(Uv)
          , y = h ? f.substring(1) : f
          , g = d && d > c ? d - c : void 0;
        return {
            modifiers: l,
            hasImportantModifier: h,
            baseClassName: y,
            maybePostfixModifierPosition: g
        }
    }
    ;
    return r ? a => r({
        className: a,
        parseClassName: o
    }) : o
}
  , US = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let r = [];
    return e.forEach(n => {
        n[0] === "[" ? (t.push(...r.sort(), n),
        r = []) : r.push(n)
    }
    ),
    t.push(...r.sort()),
    t
}
  , FS = e => ({
    cache: DS(e.cacheSize),
    parseClassName: MS(e),
    ...NS(e)
})
  , BS = /\s+/
  , zS = (e, t) => {
    const {parseClassName: r, getClassGroupId: n, getConflictingClassGroupIds: s} = t
      , i = []
      , o = e.trim().split(BS);
    let a = "";
    for (let l = o.length - 1; l >= 0; l -= 1) {
        const u = o[l]
          , {modifiers: c, hasImportantModifier: d, baseClassName: f, maybePostfixModifierPosition: h} = r(u);
        let y = !!h
          , g = n(y ? f.substring(0, h) : f);
        if (!g) {
            if (!y) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            if (g = n(f),
            !g) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            y = !1
        }
        const w = US(c).join(":")
          , m = d ? w + Uv : w
          , p = m + g;
        if (i.includes(p))
            continue;
        i.push(p);
        const v = s(g, y);
        for (let x = 0; x < v.length; ++x) {
            const S = v[x];
            i.push(m + S)
        }
        a = u + (a.length > 0 ? " " + a : a)
    }
    return a
}
;
function HS() {
    let e = 0, t, r, n = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (r = Fv(t)) && (n && (n += " "),
        n += r);
    return n
}
const Fv = e => {
    if (typeof e == "string")
        return e;
    let t, r = "";
    for (let n = 0; n < e.length; n++)
        e[n] && (t = Fv(e[n])) && (r && (r += " "),
        r += t);
    return r
}
;
function WS(e, ...t) {
    let r, n, s, i = o;
    function o(l) {
        const u = t.reduce( (c, d) => d(c), e());
        return r = FS(u),
        n = r.cache.get,
        s = r.cache.set,
        i = a,
        a(l)
    }
    function a(l) {
        const u = n(l);
        if (u)
            return u;
        const c = zS(l, r);
        return s(l, c),
        c
    }
    return function() {
        return i(HS.apply(null, arguments))
    }
}
const ae = e => {
    const t = r => r[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , Bv = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , VS = /^\d+\/\d+$/
  , KS = new Set(["px", "full", "screen"])
  , qS = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , GS = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , JS = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , QS = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , YS = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , Zt = e => vs(e) || KS.has(e) || VS.test(e)
  , kr = e => zs(e, "length", i1)
  , vs = e => !!e && !Number.isNaN(Number(e))
  , ou = e => zs(e, "number", vs)
  , ri = e => !!e && Number.isInteger(Number(e))
  , XS = e => e.endsWith("%") && vs(e.slice(0, -1))
  , G = e => Bv.test(e)
  , Er = e => qS.test(e)
  , ZS = new Set(["length", "size", "percentage"])
  , e1 = e => zs(e, ZS, zv)
  , t1 = e => zs(e, "position", zv)
  , r1 = new Set(["image", "url"])
  , n1 = e => zs(e, r1, a1)
  , s1 = e => zs(e, "", o1)
  , ni = () => !0
  , zs = (e, t, r) => {
    const n = Bv.exec(e);
    return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1
}
  , i1 = e => GS.test(e) && !JS.test(e)
  , zv = () => !1
  , o1 = e => QS.test(e)
  , a1 = e => YS.test(e)
  , l1 = () => {
    const e = ae("colors")
      , t = ae("spacing")
      , r = ae("blur")
      , n = ae("brightness")
      , s = ae("borderColor")
      , i = ae("borderRadius")
      , o = ae("borderSpacing")
      , a = ae("borderWidth")
      , l = ae("contrast")
      , u = ae("grayscale")
      , c = ae("hueRotate")
      , d = ae("invert")
      , f = ae("gap")
      , h = ae("gradientColorStops")
      , y = ae("gradientColorStopPositions")
      , g = ae("inset")
      , w = ae("margin")
      , m = ae("opacity")
      , p = ae("padding")
      , v = ae("saturate")
      , x = ae("scale")
      , S = ae("sepia")
      , k = ae("skew")
      , E = ae("space")
      , R = ae("translate")
      , O = () => ["auto", "contain", "none"]
      , j = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , z = () => ["auto", G, t]
      , D = () => [G, t]
      , J = () => ["", Zt, kr]
      , I = () => ["auto", vs, G]
      , X = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , H = () => ["solid", "dashed", "dotted", "double", "none"]
      , K = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , C = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , P = () => ["", "0", G]
      , L = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , q = () => [vs, G];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [ni],
            spacing: [Zt, kr],
            blur: ["none", "", Er, G],
            brightness: q(),
            borderColor: [e],
            borderRadius: ["none", "", "full", Er, G],
            borderSpacing: D(),
            borderWidth: J(),
            contrast: q(),
            grayscale: P(),
            hueRotate: q(),
            invert: P(),
            gap: D(),
            gradientColorStops: [e],
            gradientColorStopPositions: [XS, kr],
            inset: z(),
            margin: z(),
            opacity: q(),
            padding: D(),
            saturate: q(),
            scale: q(),
            sepia: P(),
            skew: q(),
            space: D(),
            translate: D()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", G]
            }],
            container: ["container"],
            columns: [{
                columns: [Er]
            }],
            "break-after": [{
                "break-after": L()
            }],
            "break-before": [{
                "break-before": L()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...X(), G]
            }],
            overflow: [{
                overflow: j()
            }],
            "overflow-x": [{
                "overflow-x": j()
            }],
            "overflow-y": [{
                "overflow-y": j()
            }],
            overscroll: [{
                overscroll: O()
            }],
            "overscroll-x": [{
                "overscroll-x": O()
            }],
            "overscroll-y": [{
                "overscroll-y": O()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [g]
            }],
            "inset-x": [{
                "inset-x": [g]
            }],
            "inset-y": [{
                "inset-y": [g]
            }],
            start: [{
                start: [g]
            }],
            end: [{
                end: [g]
            }],
            top: [{
                top: [g]
            }],
            right: [{
                right: [g]
            }],
            bottom: [{
                bottom: [g]
            }],
            left: [{
                left: [g]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", ri, G]
            }],
            basis: [{
                basis: z()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", G]
            }],
            grow: [{
                grow: P()
            }],
            shrink: [{
                shrink: P()
            }],
            order: [{
                order: ["first", "last", "none", ri, G]
            }],
            "grid-cols": [{
                "grid-cols": [ni]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", ri, G]
                }, G]
            }],
            "col-start": [{
                "col-start": I()
            }],
            "col-end": [{
                "col-end": I()
            }],
            "grid-rows": [{
                "grid-rows": [ni]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [ri, G]
                }, G]
            }],
            "row-start": [{
                "row-start": I()
            }],
            "row-end": [{
                "row-end": I()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", G]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", G]
            }],
            gap: [{
                gap: [f]
            }],
            "gap-x": [{
                "gap-x": [f]
            }],
            "gap-y": [{
                "gap-y": [f]
            }],
            "justify-content": [{
                justify: ["normal", ...C()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...C(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...C(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [p]
            }],
            px: [{
                px: [p]
            }],
            py: [{
                py: [p]
            }],
            ps: [{
                ps: [p]
            }],
            pe: [{
                pe: [p]
            }],
            pt: [{
                pt: [p]
            }],
            pr: [{
                pr: [p]
            }],
            pb: [{
                pb: [p]
            }],
            pl: [{
                pl: [p]
            }],
            m: [{
                m: [w]
            }],
            mx: [{
                mx: [w]
            }],
            my: [{
                my: [w]
            }],
            ms: [{
                ms: [w]
            }],
            me: [{
                me: [w]
            }],
            mt: [{
                mt: [w]
            }],
            mr: [{
                mr: [w]
            }],
            mb: [{
                mb: [w]
            }],
            ml: [{
                ml: [w]
            }],
            "space-x": [{
                "space-x": [E]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [E]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", G, t]
            }],
            "min-w": [{
                "min-w": [G, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [G, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [Er]
                }, Er]
            }],
            h: [{
                h: [G, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [G, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", Er, kr]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ou]
            }],
            "font-family": [{
                font: [ni]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", G]
            }],
            "line-clamp": [{
                "line-clamp": ["none", vs, ou]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Zt, G]
            }],
            "list-image": [{
                "list-image": ["none", G]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", G]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [m]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [m]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...H(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", Zt, kr]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", Zt, G]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: D()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", G]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", G]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [m]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...X(), t1]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", e1]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, n1]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [y]
            }],
            "gradient-via-pos": [{
                via: [y]
            }],
            "gradient-to-pos": [{
                to: [y]
            }],
            "gradient-from": [{
                from: [h]
            }],
            "gradient-via": [{
                via: [h]
            }],
            "gradient-to": [{
                to: [h]
            }],
            rounded: [{
                rounded: [i]
            }],
            "rounded-s": [{
                "rounded-s": [i]
            }],
            "rounded-e": [{
                "rounded-e": [i]
            }],
            "rounded-t": [{
                "rounded-t": [i]
            }],
            "rounded-r": [{
                "rounded-r": [i]
            }],
            "rounded-b": [{
                "rounded-b": [i]
            }],
            "rounded-l": [{
                "rounded-l": [i]
            }],
            "rounded-ss": [{
                "rounded-ss": [i]
            }],
            "rounded-se": [{
                "rounded-se": [i]
            }],
            "rounded-ee": [{
                "rounded-ee": [i]
            }],
            "rounded-es": [{
                "rounded-es": [i]
            }],
            "rounded-tl": [{
                "rounded-tl": [i]
            }],
            "rounded-tr": [{
                "rounded-tr": [i]
            }],
            "rounded-br": [{
                "rounded-br": [i]
            }],
            "rounded-bl": [{
                "rounded-bl": [i]
            }],
            "border-w": [{
                border: [a]
            }],
            "border-w-x": [{
                "border-x": [a]
            }],
            "border-w-y": [{
                "border-y": [a]
            }],
            "border-w-s": [{
                "border-s": [a]
            }],
            "border-w-e": [{
                "border-e": [a]
            }],
            "border-w-t": [{
                "border-t": [a]
            }],
            "border-w-r": [{
                "border-r": [a]
            }],
            "border-w-b": [{
                "border-b": [a]
            }],
            "border-w-l": [{
                "border-l": [a]
            }],
            "border-opacity": [{
                "border-opacity": [m]
            }],
            "border-style": [{
                border: [...H(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [a]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [a]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [m]
            }],
            "divide-style": [{
                divide: H()
            }],
            "border-color": [{
                border: [s]
            }],
            "border-color-x": [{
                "border-x": [s]
            }],
            "border-color-y": [{
                "border-y": [s]
            }],
            "border-color-s": [{
                "border-s": [s]
            }],
            "border-color-e": [{
                "border-e": [s]
            }],
            "border-color-t": [{
                "border-t": [s]
            }],
            "border-color-r": [{
                "border-r": [s]
            }],
            "border-color-b": [{
                "border-b": [s]
            }],
            "border-color-l": [{
                "border-l": [s]
            }],
            "divide-color": [{
                divide: [s]
            }],
            "outline-style": [{
                outline: ["", ...H()]
            }],
            "outline-offset": [{
                "outline-offset": [Zt, G]
            }],
            "outline-w": [{
                outline: [Zt, kr]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: J()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [m]
            }],
            "ring-offset-w": [{
                "ring-offset": [Zt, kr]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", Er, s1]
            }],
            "shadow-color": [{
                shadow: [ni]
            }],
            opacity: [{
                opacity: [m]
            }],
            "mix-blend": [{
                "mix-blend": [...K(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": K()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [r]
            }],
            brightness: [{
                brightness: [n]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", Er, G]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [c]
            }],
            invert: [{
                invert: [d]
            }],
            saturate: [{
                saturate: [v]
            }],
            sepia: [{
                sepia: [S]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [r]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [n]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [c]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [d]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [m]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [v]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [S]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [o]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [o]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [o]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", G]
            }],
            duration: [{
                duration: q()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", G]
            }],
            delay: [{
                delay: q()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", G]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [x]
            }],
            "scale-x": [{
                "scale-x": [x]
            }],
            "scale-y": [{
                "scale-y": [x]
            }],
            rotate: [{
                rotate: [ri, G]
            }],
            "translate-x": [{
                "translate-x": [R]
            }],
            "translate-y": [{
                "translate-y": [R]
            }],
            "skew-x": [{
                "skew-x": [k]
            }],
            "skew-y": [{
                "skew-y": [k]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", G]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", G]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": D()
            }],
            "scroll-mx": [{
                "scroll-mx": D()
            }],
            "scroll-my": [{
                "scroll-my": D()
            }],
            "scroll-ms": [{
                "scroll-ms": D()
            }],
            "scroll-me": [{
                "scroll-me": D()
            }],
            "scroll-mt": [{
                "scroll-mt": D()
            }],
            "scroll-mr": [{
                "scroll-mr": D()
            }],
            "scroll-mb": [{
                "scroll-mb": D()
            }],
            "scroll-ml": [{
                "scroll-ml": D()
            }],
            "scroll-p": [{
                "scroll-p": D()
            }],
            "scroll-px": [{
                "scroll-px": D()
            }],
            "scroll-py": [{
                "scroll-py": D()
            }],
            "scroll-ps": [{
                "scroll-ps": D()
            }],
            "scroll-pe": [{
                "scroll-pe": D()
            }],
            "scroll-pt": [{
                "scroll-pt": D()
            }],
            "scroll-pr": [{
                "scroll-pr": D()
            }],
            "scroll-pb": [{
                "scroll-pb": D()
            }],
            "scroll-pl": [{
                "scroll-pl": D()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", G]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [Zt, kr, ou]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , u1 = WS(l1);
function Ln(...e) {
    return u1(Iv(e))
}
const c1 = vS
  , Hv = b.forwardRef( ({className: e, ...t}, r) => _.jsx(Cv, {
    ref: r,
    className: Ln("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
Hv.displayName = Cv.displayName;
const d1 = yS("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , Wv = b.forwardRef( ({className: e, variant: t, ...r}, n) => _.jsx(Pv, {
    ref: n,
    className: Ln(d1({
        variant: t
    }), e),
    ...r
}));
Wv.displayName = Pv.displayName;
const h1 = b.forwardRef( ({className: e, ...t}, r) => _.jsx(Ov, {
    ref: r,
    className: Ln("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
h1.displayName = Ov.displayName;
const Vv = b.forwardRef( ({className: e, ...t}, r) => _.jsx(Nv, {
    ref: r,
    className: Ln("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: _.jsx(OS, {
        className: "h-4 w-4"
    })
}));
Vv.displayName = Nv.displayName;
const Kv = b.forwardRef( ({className: e, ...t}, r) => _.jsx(Rv, {
    ref: r,
    className: Ln("text-sm font-semibold", e),
    ...t
}));
Kv.displayName = Rv.displayName;
const qv = b.forwardRef( ({className: e, ...t}, r) => _.jsx(Av, {
    ref: r,
    className: Ln("text-sm opacity-90", e),
    ...t
}));
qv.displayName = Av.displayName;
function f1() {
    const {toasts: e} = E_();
    return _.jsxs(c1, {
        children: [e.map(function({id: t, title: r, description: n, action: s, ...i}) {
            return _.jsxs(Wv, {
                ...i,
                children: [_.jsxs("div", {
                    className: "grid gap-1",
                    children: [r && _.jsx(Kv, {
                        children: r
                    }), n && _.jsx(qv, {
                        children: n
                    })]
                }), s, _.jsx(Vv, {})]
            }, t)
        }), _.jsx(Hv, {})]
    })
}
const p1 = ["top", "right", "bottom", "left"]
  , Zr = Math.min
  , rt = Math.max
  , La = Math.round
  , Mo = Math.floor
  , Qt = e => ({
    x: e,
    y: e
})
  , m1 = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , g1 = {
    start: "end",
    end: "start"
};
function yc(e, t, r) {
    return rt(e, Zr(t, r))
}
function fr(e, t) {
    return typeof e == "function" ? e(t) : e
}
function pr(e) {
    return e.split("-")[0]
}
function Hs(e) {
    return e.split("-")[1]
}
function Md(e) {
    return e === "x" ? "y" : "x"
}
function Ud(e) {
    return e === "y" ? "height" : "width"
}
const v1 = new Set(["top", "bottom"]);
function qt(e) {
    return v1.has(pr(e)) ? "y" : "x"
}
function Fd(e) {
    return Md(qt(e))
}
function y1(e, t, r) {
    r === void 0 && (r = !1);
    const n = Hs(e)
      , s = Fd(e)
      , i = Ud(s);
    let o = s === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (o = $a(o)),
    [o, $a(o)]
}
function w1(e) {
    const t = $a(e);
    return [wc(e), t, wc(t)]
}
function wc(e) {
    return e.replace(/start|end/g, t => g1[t])
}
const Mf = ["left", "right"]
  , Uf = ["right", "left"]
  , b1 = ["top", "bottom"]
  , x1 = ["bottom", "top"];
function _1(e, t, r) {
    switch (e) {
    case "top":
    case "bottom":
        return r ? t ? Uf : Mf : t ? Mf : Uf;
    case "left":
    case "right":
        return t ? b1 : x1;
    default:
        return []
    }
}
function S1(e, t, r, n) {
    const s = Hs(e);
    let i = _1(pr(e), r === "start", n);
    return s && (i = i.map(o => o + "-" + s),
    t && (i = i.concat(i.map(wc)))),
    i
}
function $a(e) {
    return e.replace(/left|right|bottom|top/g, t => m1[t])
}
function k1(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function Gv(e) {
    return typeof e != "number" ? k1(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function Da(e) {
    const {x: t, y: r, width: n, height: s} = e;
    return {
        width: n,
        height: s,
        top: r,
        left: t,
        right: t + n,
        bottom: r + s,
        x: t,
        y: r
    }
}
function Ff(e, t, r) {
    let {reference: n, floating: s} = e;
    const i = qt(t)
      , o = Fd(t)
      , a = Ud(o)
      , l = pr(t)
      , u = i === "y"
      , c = n.x + n.width / 2 - s.width / 2
      , d = n.y + n.height / 2 - s.height / 2
      , f = n[a] / 2 - s[a] / 2;
    let h;
    switch (l) {
    case "top":
        h = {
            x: c,
            y: n.y - s.height
        };
        break;
    case "bottom":
        h = {
            x: c,
            y: n.y + n.height
        };
        break;
    case "right":
        h = {
            x: n.x + n.width,
            y: d
        };
        break;
    case "left":
        h = {
            x: n.x - s.width,
            y: d
        };
        break;
    default:
        h = {
            x: n.x,
            y: n.y
        }
    }
    switch (Hs(t)) {
    case "start":
        h[o] -= f * (r && u ? -1 : 1);
        break;
    case "end":
        h[o] += f * (r && u ? -1 : 1);
        break
    }
    return h
}
const E1 = async (e, t, r) => {
    const {placement: n="bottom", strategy: s="absolute", middleware: i=[], platform: o} = r
      , a = i.filter(Boolean)
      , l = await (o.isRTL == null ? void 0 : o.isRTL(t));
    let u = await o.getElementRects({
        reference: e,
        floating: t,
        strategy: s
    })
      , {x: c, y: d} = Ff(u, n, l)
      , f = n
      , h = {}
      , y = 0;
    for (let g = 0; g < a.length; g++) {
        const {name: w, fn: m} = a[g]
          , {x: p, y: v, data: x, reset: S} = await m({
            x: c,
            y: d,
            initialPlacement: n,
            placement: f,
            strategy: s,
            middlewareData: h,
            rects: u,
            platform: o,
            elements: {
                reference: e,
                floating: t
            }
        });
        c = p ?? c,
        d = v ?? d,
        h = {
            ...h,
            [w]: {
                ...h[w],
                ...x
            }
        },
        S && y <= 50 && (y++,
        typeof S == "object" && (S.placement && (f = S.placement),
        S.rects && (u = S.rects === !0 ? await o.getElementRects({
            reference: e,
            floating: t,
            strategy: s
        }) : S.rects),
        {x: c, y: d} = Ff(u, f, l)),
        g = -1)
    }
    return {
        x: c,
        y: d,
        placement: f,
        strategy: s,
        middlewareData: h
    }
}
;
async function Ki(e, t) {
    var r;
    t === void 0 && (t = {});
    const {x: n, y: s, platform: i, rects: o, elements: a, strategy: l} = e
      , {boundary: u="clippingAncestors", rootBoundary: c="viewport", elementContext: d="floating", altBoundary: f=!1, padding: h=0} = fr(t, e)
      , y = Gv(h)
      , w = a[f ? d === "floating" ? "reference" : "floating" : d]
      , m = Da(await i.getClippingRect({
        element: (r = await (i.isElement == null ? void 0 : i.isElement(w))) == null || r ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
        boundary: u,
        rootBoundary: c,
        strategy: l
    }))
      , p = d === "floating" ? {
        x: n,
        y: s,
        width: o.floating.width,
        height: o.floating.height
    } : o.reference
      , v = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating))
      , x = await (i.isElement == null ? void 0 : i.isElement(v)) ? await (i.getScale == null ? void 0 : i.getScale(v)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , S = Da(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: p,
        offsetParent: v,
        strategy: l
    }) : p);
    return {
        top: (m.top - S.top + y.top) / x.y,
        bottom: (S.bottom - m.bottom + y.bottom) / x.y,
        left: (m.left - S.left + y.left) / x.x,
        right: (S.right - m.right + y.right) / x.x
    }
}
const T1 = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: r, y: n, placement: s, rects: i, platform: o, elements: a, middlewareData: l} = t
          , {element: u, padding: c=0} = fr(e, t) || {};
        if (u == null)
            return {};
        const d = Gv(c)
          , f = {
            x: r,
            y: n
        }
          , h = Fd(s)
          , y = Ud(h)
          , g = await o.getDimensions(u)
          , w = h === "y"
          , m = w ? "top" : "left"
          , p = w ? "bottom" : "right"
          , v = w ? "clientHeight" : "clientWidth"
          , x = i.reference[y] + i.reference[h] - f[h] - i.floating[y]
          , S = f[h] - i.reference[h]
          , k = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u));
        let E = k ? k[v] : 0;
        (!E || !await (o.isElement == null ? void 0 : o.isElement(k))) && (E = a.floating[v] || i.floating[y]);
        const R = x / 2 - S / 2
          , O = E / 2 - g[y] / 2 - 1
          , j = Zr(d[m], O)
          , z = Zr(d[p], O)
          , D = j
          , J = E - g[y] - z
          , I = E / 2 - g[y] / 2 + R
          , X = yc(D, I, J)
          , H = !l.arrow && Hs(s) != null && I !== X && i.reference[y] / 2 - (I < D ? j : z) - g[y] / 2 < 0
          , K = H ? I < D ? I - D : I - J : 0;
        return {
            [h]: f[h] + K,
            data: {
                [h]: X,
                centerOffset: I - X - K,
                ...H && {
                    alignmentOffset: K
                }
            },
            reset: H
        }
    }
})
  , C1 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var r, n;
            const {placement: s, middlewareData: i, rects: o, initialPlacement: a, platform: l, elements: u} = t
              , {mainAxis: c=!0, crossAxis: d=!0, fallbackPlacements: f, fallbackStrategy: h="bestFit", fallbackAxisSideDirection: y="none", flipAlignment: g=!0, ...w} = fr(e, t);
            if ((r = i.arrow) != null && r.alignmentOffset)
                return {};
            const m = pr(s)
              , p = qt(a)
              , v = pr(a) === a
              , x = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
              , S = f || (v || !g ? [$a(a)] : w1(a))
              , k = y !== "none";
            !f && k && S.push(...S1(a, g, y, x));
            const E = [a, ...S]
              , R = await Ki(t, w)
              , O = [];
            let j = ((n = i.flip) == null ? void 0 : n.overflows) || [];
            if (c && O.push(R[m]),
            d) {
                const I = y1(s, o, x);
                O.push(R[I[0]], R[I[1]])
            }
            if (j = [...j, {
                placement: s,
                overflows: O
            }],
            !O.every(I => I <= 0)) {
                var z, D;
                const I = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1
                  , X = E[I];
                if (X && (!(d === "alignment" ? p !== qt(X) : !1) || j.every(C => C.overflows[0] > 0 && qt(C.placement) === p)))
                    return {
                        data: {
                            index: I,
                            overflows: j
                        },
                        reset: {
                            placement: X
                        }
                    };
                let H = (D = j.filter(K => K.overflows[0] <= 0).sort( (K, C) => K.overflows[1] - C.overflows[1])[0]) == null ? void 0 : D.placement;
                if (!H)
                    switch (h) {
                    case "bestFit":
                        {
                            var J;
                            const K = (J = j.filter(C => {
                                if (k) {
                                    const P = qt(C.placement);
                                    return P === p || P === "y"
                                }
                                return !0
                            }
                            ).map(C => [C.placement, C.overflows.filter(P => P > 0).reduce( (P, L) => P + L, 0)]).sort( (C, P) => C[1] - P[1])[0]) == null ? void 0 : J[0];
                            K && (H = K);
                            break
                        }
                    case "initialPlacement":
                        H = a;
                        break
                    }
                if (s !== H)
                    return {
                        reset: {
                            placement: H
                        }
                    }
            }
            return {}
        }
    }
};
function Bf(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function zf(e) {
    return p1.some(t => e[t] >= 0)
}
const P1 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: r} = t
              , {strategy: n="referenceHidden", ...s} = fr(e, t);
            switch (n) {
            case "referenceHidden":
                {
                    const i = await Ki(t, {
                        ...s,
                        elementContext: "reference"
                    })
                      , o = Bf(i, r.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: o,
                            referenceHidden: zf(o)
                        }
                    }
                }
            case "escaped":
                {
                    const i = await Ki(t, {
                        ...s,
                        altBoundary: !0
                    })
                      , o = Bf(i, r.floating);
                    return {
                        data: {
                            escapedOffsets: o,
                            escaped: zf(o)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , Jv = new Set(["left", "top"]);
async function R1(e, t) {
    const {placement: r, platform: n, elements: s} = e
      , i = await (n.isRTL == null ? void 0 : n.isRTL(s.floating))
      , o = pr(r)
      , a = Hs(r)
      , l = qt(r) === "y"
      , u = Jv.has(o) ? -1 : 1
      , c = i && l ? -1 : 1
      , d = fr(t, e);
    let {mainAxis: f, crossAxis: h, alignmentAxis: y} = typeof d == "number" ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis
    };
    return a && typeof y == "number" && (h = a === "end" ? y * -1 : y),
    l ? {
        x: h * c,
        y: f * u
    } : {
        x: f * u,
        y: h * c
    }
}
const A1 = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var r, n;
            const {x: s, y: i, placement: o, middlewareData: a} = t
              , l = await R1(t, e);
            return o === ((r = a.offset) == null ? void 0 : r.placement) && (n = a.arrow) != null && n.alignmentOffset ? {} : {
                x: s + l.x,
                y: i + l.y,
                data: {
                    ...l,
                    placement: o
                }
            }
        }
    }
}
  , O1 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: r, y: n, placement: s} = t
              , {mainAxis: i=!0, crossAxis: o=!1, limiter: a={
                fn: w => {
                    let {x: m, y: p} = w;
                    return {
                        x: m,
                        y: p
                    }
                }
            }, ...l} = fr(e, t)
              , u = {
                x: r,
                y: n
            }
              , c = await Ki(t, l)
              , d = qt(pr(s))
              , f = Md(d);
            let h = u[f]
              , y = u[d];
            if (i) {
                const w = f === "y" ? "top" : "left"
                  , m = f === "y" ? "bottom" : "right"
                  , p = h + c[w]
                  , v = h - c[m];
                h = yc(p, h, v)
            }
            if (o) {
                const w = d === "y" ? "top" : "left"
                  , m = d === "y" ? "bottom" : "right"
                  , p = y + c[w]
                  , v = y - c[m];
                y = yc(p, y, v)
            }
            const g = a.fn({
                ...t,
                [f]: h,
                [d]: y
            });
            return {
                ...g,
                data: {
                    x: g.x - r,
                    y: g.y - n,
                    enabled: {
                        [f]: i,
                        [d]: o
                    }
                }
            }
        }
    }
}
  , N1 = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: r, y: n, placement: s, rects: i, middlewareData: o} = t
              , {offset: a=0, mainAxis: l=!0, crossAxis: u=!0} = fr(e, t)
              , c = {
                x: r,
                y: n
            }
              , d = qt(s)
              , f = Md(d);
            let h = c[f]
              , y = c[d];
            const g = fr(a, t)
              , w = typeof g == "number" ? {
                mainAxis: g,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...g
            };
            if (l) {
                const v = f === "y" ? "height" : "width"
                  , x = i.reference[f] - i.floating[v] + w.mainAxis
                  , S = i.reference[f] + i.reference[v] - w.mainAxis;
                h < x ? h = x : h > S && (h = S)
            }
            if (u) {
                var m, p;
                const v = f === "y" ? "width" : "height"
                  , x = Jv.has(pr(s))
                  , S = i.reference[d] - i.floating[v] + (x && ((m = o.offset) == null ? void 0 : m[d]) || 0) + (x ? 0 : w.crossAxis)
                  , k = i.reference[d] + i.reference[v] + (x ? 0 : ((p = o.offset) == null ? void 0 : p[d]) || 0) - (x ? w.crossAxis : 0);
                y < S ? y = S : y > k && (y = k)
            }
            return {
                [f]: h,
                [d]: y
            }
        }
    }
}
  , j1 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var r, n;
            const {placement: s, rects: i, platform: o, elements: a} = t
              , {apply: l= () => {}
            , ...u} = fr(e, t)
              , c = await Ki(t, u)
              , d = pr(s)
              , f = Hs(s)
              , h = qt(s) === "y"
              , {width: y, height: g} = i.floating;
            let w, m;
            d === "top" || d === "bottom" ? (w = d,
            m = f === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (m = d,
            w = f === "end" ? "top" : "bottom");
            const p = g - c.top - c.bottom
              , v = y - c.left - c.right
              , x = Zr(g - c[w], p)
              , S = Zr(y - c[m], v)
              , k = !t.middlewareData.shift;
            let E = x
              , R = S;
            if ((r = t.middlewareData.shift) != null && r.enabled.x && (R = v),
            (n = t.middlewareData.shift) != null && n.enabled.y && (E = p),
            k && !f) {
                const j = rt(c.left, 0)
                  , z = rt(c.right, 0)
                  , D = rt(c.top, 0)
                  , J = rt(c.bottom, 0);
                h ? R = y - 2 * (j !== 0 || z !== 0 ? j + z : rt(c.left, c.right)) : E = g - 2 * (D !== 0 || J !== 0 ? D + J : rt(c.top, c.bottom))
            }
            await l({
                ...t,
                availableWidth: R,
                availableHeight: E
            });
            const O = await o.getDimensions(a.floating);
            return y !== O.width || g !== O.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function ml() {
    return typeof window < "u"
}
function Ws(e) {
    return Qv(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function ot(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Xt(e) {
    var t;
    return (t = (Qv(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function Qv(e) {
    return ml() ? e instanceof Node || e instanceof ot(e).Node : !1
}
function $t(e) {
    return ml() ? e instanceof Element || e instanceof ot(e).Element : !1
}
function Yt(e) {
    return ml() ? e instanceof HTMLElement || e instanceof ot(e).HTMLElement : !1
}
function Hf(e) {
    return !ml() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ot(e).ShadowRoot
}
const I1 = new Set(["inline", "contents"]);
function co(e) {
    const {overflow: t, overflowX: r, overflowY: n, display: s} = Dt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !I1.has(s)
}
const L1 = new Set(["table", "td", "th"]);
function $1(e) {
    return L1.has(Ws(e))
}
const D1 = [":popover-open", ":modal"];
function gl(e) {
    return D1.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
const M1 = ["transform", "translate", "scale", "rotate", "perspective"]
  , U1 = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , F1 = ["paint", "layout", "strict", "content"];
function Bd(e) {
    const t = zd()
      , r = $t(e) ? Dt(e) : e;
    return M1.some(n => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || U1.some(n => (r.willChange || "").includes(n)) || F1.some(n => (r.contain || "").includes(n))
}
function B1(e) {
    let t = en(e);
    for (; Yt(t) && !Ls(t); ) {
        if (Bd(t))
            return t;
        if (gl(t))
            return null;
        t = en(t)
    }
    return null
}
function zd() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const z1 = new Set(["html", "body", "#document"]);
function Ls(e) {
    return z1.has(Ws(e))
}
function Dt(e) {
    return ot(e).getComputedStyle(e)
}
function vl(e) {
    return $t(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function en(e) {
    if (Ws(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || Hf(e) && e.host || Xt(e);
    return Hf(t) ? t.host : t
}
function Yv(e) {
    const t = en(e);
    return Ls(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Yt(t) && co(t) ? t : Yv(t)
}
function qi(e, t, r) {
    var n;
    t === void 0 && (t = []),
    r === void 0 && (r = !0);
    const s = Yv(e)
      , i = s === ((n = e.ownerDocument) == null ? void 0 : n.body)
      , o = ot(s);
    if (i) {
        const a = bc(o);
        return t.concat(o, o.visualViewport || [], co(s) ? s : [], a && r ? qi(a) : [])
    }
    return t.concat(s, qi(s, [], r))
}
function bc(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function Xv(e) {
    const t = Dt(e);
    let r = parseFloat(t.width) || 0
      , n = parseFloat(t.height) || 0;
    const s = Yt(e)
      , i = s ? e.offsetWidth : r
      , o = s ? e.offsetHeight : n
      , a = La(r) !== i || La(n) !== o;
    return a && (r = i,
    n = o),
    {
        width: r,
        height: n,
        $: a
    }
}
function Hd(e) {
    return $t(e) ? e : e.contextElement
}
function ys(e) {
    const t = Hd(e);
    if (!Yt(t))
        return Qt(1);
    const r = t.getBoundingClientRect()
      , {width: n, height: s, $: i} = Xv(t);
    let o = (i ? La(r.width) : r.width) / n
      , a = (i ? La(r.height) : r.height) / s;
    return (!o || !Number.isFinite(o)) && (o = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    {
        x: o,
        y: a
    }
}
const H1 = Qt(0);
function Zv(e) {
    const t = ot(e);
    return !zd() || !t.visualViewport ? H1 : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function W1(e, t, r) {
    return t === void 0 && (t = !1),
    !r || t && r !== ot(e) ? !1 : t
}
function Nn(e, t, r, n) {
    t === void 0 && (t = !1),
    r === void 0 && (r = !1);
    const s = e.getBoundingClientRect()
      , i = Hd(e);
    let o = Qt(1);
    t && (n ? $t(n) && (o = ys(n)) : o = ys(e));
    const a = W1(i, r, n) ? Zv(i) : Qt(0);
    let l = (s.left + a.x) / o.x
      , u = (s.top + a.y) / o.y
      , c = s.width / o.x
      , d = s.height / o.y;
    if (i) {
        const f = ot(i)
          , h = n && $t(n) ? ot(n) : n;
        let y = f
          , g = bc(y);
        for (; g && n && h !== y; ) {
            const w = ys(g)
              , m = g.getBoundingClientRect()
              , p = Dt(g)
              , v = m.left + (g.clientLeft + parseFloat(p.paddingLeft)) * w.x
              , x = m.top + (g.clientTop + parseFloat(p.paddingTop)) * w.y;
            l *= w.x,
            u *= w.y,
            c *= w.x,
            d *= w.y,
            l += v,
            u += x,
            y = ot(g),
            g = bc(y)
        }
    }
    return Da({
        width: c,
        height: d,
        x: l,
        y: u
    })
}
function Wd(e, t) {
    const r = vl(e).scrollLeft;
    return t ? t.left + r : Nn(Xt(e)).left + r
}
function ey(e, t, r) {
    r === void 0 && (r = !1);
    const n = e.getBoundingClientRect()
      , s = n.left + t.scrollLeft - (r ? 0 : Wd(e, n))
      , i = n.top + t.scrollTop;
    return {
        x: s,
        y: i
    }
}
function V1(e) {
    let {elements: t, rect: r, offsetParent: n, strategy: s} = e;
    const i = s === "fixed"
      , o = Xt(n)
      , a = t ? gl(t.floating) : !1;
    if (n === o || a && i)
        return r;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = Qt(1);
    const c = Qt(0)
      , d = Yt(n);
    if ((d || !d && !i) && ((Ws(n) !== "body" || co(o)) && (l = vl(n)),
    Yt(n))) {
        const h = Nn(n);
        u = ys(n),
        c.x = h.x + n.clientLeft,
        c.y = h.y + n.clientTop
    }
    const f = o && !d && !i ? ey(o, l, !0) : Qt(0);
    return {
        width: r.width * u.x,
        height: r.height * u.y,
        x: r.x * u.x - l.scrollLeft * u.x + c.x + f.x,
        y: r.y * u.y - l.scrollTop * u.y + c.y + f.y
    }
}
function K1(e) {
    return Array.from(e.getClientRects())
}
function q1(e) {
    const t = Xt(e)
      , r = vl(e)
      , n = e.ownerDocument.body
      , s = rt(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth)
      , i = rt(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
    let o = -r.scrollLeft + Wd(e);
    const a = -r.scrollTop;
    return Dt(n).direction === "rtl" && (o += rt(t.clientWidth, n.clientWidth) - s),
    {
        width: s,
        height: i,
        x: o,
        y: a
    }
}
function G1(e, t) {
    const r = ot(e)
      , n = Xt(e)
      , s = r.visualViewport;
    let i = n.clientWidth
      , o = n.clientHeight
      , a = 0
      , l = 0;
    if (s) {
        i = s.width,
        o = s.height;
        const u = zd();
        (!u || u && t === "fixed") && (a = s.offsetLeft,
        l = s.offsetTop)
    }
    return {
        width: i,
        height: o,
        x: a,
        y: l
    }
}
const J1 = new Set(["absolute", "fixed"]);
function Q1(e, t) {
    const r = Nn(e, !0, t === "fixed")
      , n = r.top + e.clientTop
      , s = r.left + e.clientLeft
      , i = Yt(e) ? ys(e) : Qt(1)
      , o = e.clientWidth * i.x
      , a = e.clientHeight * i.y
      , l = s * i.x
      , u = n * i.y;
    return {
        width: o,
        height: a,
        x: l,
        y: u
    }
}
function Wf(e, t, r) {
    let n;
    if (t === "viewport")
        n = G1(e, r);
    else if (t === "document")
        n = q1(Xt(e));
    else if ($t(t))
        n = Q1(t, r);
    else {
        const s = Zv(e);
        n = {
            x: t.x - s.x,
            y: t.y - s.y,
            width: t.width,
            height: t.height
        }
    }
    return Da(n)
}
function ty(e, t) {
    const r = en(e);
    return r === t || !$t(r) || Ls(r) ? !1 : Dt(r).position === "fixed" || ty(r, t)
}
function Y1(e, t) {
    const r = t.get(e);
    if (r)
        return r;
    let n = qi(e, [], !1).filter(a => $t(a) && Ws(a) !== "body")
      , s = null;
    const i = Dt(e).position === "fixed";
    let o = i ? en(e) : e;
    for (; $t(o) && !Ls(o); ) {
        const a = Dt(o)
          , l = Bd(o);
        !l && a.position === "fixed" && (s = null),
        (i ? !l && !s : !l && a.position === "static" && !!s && J1.has(s.position) || co(o) && !l && ty(e, o)) ? n = n.filter(c => c !== o) : s = a,
        o = en(o)
    }
    return t.set(e, n),
    n
}
function X1(e) {
    let {element: t, boundary: r, rootBoundary: n, strategy: s} = e;
    const o = [...r === "clippingAncestors" ? gl(t) ? [] : Y1(t, this._c) : [].concat(r), n]
      , a = o[0]
      , l = o.reduce( (u, c) => {
        const d = Wf(t, c, s);
        return u.top = rt(d.top, u.top),
        u.right = Zr(d.right, u.right),
        u.bottom = Zr(d.bottom, u.bottom),
        u.left = rt(d.left, u.left),
        u
    }
    , Wf(t, a, s));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function Z1(e) {
    const {width: t, height: r} = Xv(e);
    return {
        width: t,
        height: r
    }
}
function ek(e, t, r) {
    const n = Yt(t)
      , s = Xt(t)
      , i = r === "fixed"
      , o = Nn(e, !0, i, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = Qt(0);
    function u() {
        l.x = Wd(s)
    }
    if (n || !n && !i)
        if ((Ws(t) !== "body" || co(s)) && (a = vl(t)),
        n) {
            const h = Nn(t, !0, i, t);
            l.x = h.x + t.clientLeft,
            l.y = h.y + t.clientTop
        } else
            s && u();
    i && !n && s && u();
    const c = s && !n && !i ? ey(s, a) : Qt(0)
      , d = o.left + a.scrollLeft - l.x - c.x
      , f = o.top + a.scrollTop - l.y - c.y;
    return {
        x: d,
        y: f,
        width: o.width,
        height: o.height
    }
}
function au(e) {
    return Dt(e).position === "static"
}
function Vf(e, t) {
    if (!Yt(e) || Dt(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let r = e.offsetParent;
    return Xt(e) === r && (r = r.ownerDocument.body),
    r
}
function ry(e, t) {
    const r = ot(e);
    if (gl(e))
        return r;
    if (!Yt(e)) {
        let s = en(e);
        for (; s && !Ls(s); ) {
            if ($t(s) && !au(s))
                return s;
            s = en(s)
        }
        return r
    }
    let n = Vf(e, t);
    for (; n && $1(n) && au(n); )
        n = Vf(n, t);
    return n && Ls(n) && au(n) && !Bd(n) ? r : n || B1(e) || r
}
const tk = async function(e) {
    const t = this.getOffsetParent || ry
      , r = this.getDimensions
      , n = await r(e.floating);
    return {
        reference: ek(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: n.width,
            height: n.height
        }
    }
};
function rk(e) {
    return Dt(e).direction === "rtl"
}
const nk = {
    convertOffsetParentRelativeRectToViewportRelativeRect: V1,
    getDocumentElement: Xt,
    getClippingRect: X1,
    getOffsetParent: ry,
    getElementRects: tk,
    getClientRects: K1,
    getDimensions: Z1,
    getScale: ys,
    isElement: $t,
    isRTL: rk
};
function ny(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function sk(e, t) {
    let r = null, n;
    const s = Xt(e);
    function i() {
        var a;
        clearTimeout(n),
        (a = r) == null || a.disconnect(),
        r = null
    }
    function o(a, l) {
        a === void 0 && (a = !1),
        l === void 0 && (l = 1),
        i();
        const u = e.getBoundingClientRect()
          , {left: c, top: d, width: f, height: h} = u;
        if (a || t(),
        !f || !h)
            return;
        const y = Mo(d)
          , g = Mo(s.clientWidth - (c + f))
          , w = Mo(s.clientHeight - (d + h))
          , m = Mo(c)
          , v = {
            rootMargin: -y + "px " + -g + "px " + -w + "px " + -m + "px",
            threshold: rt(0, Zr(1, l)) || 1
        };
        let x = !0;
        function S(k) {
            const E = k[0].intersectionRatio;
            if (E !== l) {
                if (!x)
                    return o();
                E ? o(!1, E) : n = setTimeout( () => {
                    o(!1, 1e-7)
                }
                , 1e3)
            }
            E === 1 && !ny(u, e.getBoundingClientRect()) && o(),
            x = !1
        }
        try {
            r = new IntersectionObserver(S,{
                ...v,
                root: s.ownerDocument
            })
        } catch {
            r = new IntersectionObserver(S,v)
        }
        r.observe(e)
    }
    return o(!0),
    i
}
function ik(e, t, r, n) {
    n === void 0 && (n = {});
    const {ancestorScroll: s=!0, ancestorResize: i=!0, elementResize: o=typeof ResizeObserver == "function", layoutShift: a=typeof IntersectionObserver == "function", animationFrame: l=!1} = n
      , u = Hd(e)
      , c = s || i ? [...u ? qi(u) : [], ...qi(t)] : [];
    c.forEach(m => {
        s && m.addEventListener("scroll", r, {
            passive: !0
        }),
        i && m.addEventListener("resize", r)
    }
    );
    const d = u && a ? sk(u, r) : null;
    let f = -1
      , h = null;
    o && (h = new ResizeObserver(m => {
        let[p] = m;
        p && p.target === u && h && (h.unobserve(t),
        cancelAnimationFrame(f),
        f = requestAnimationFrame( () => {
            var v;
            (v = h) == null || v.observe(t)
        }
        )),
        r()
    }
    ),
    u && !l && h.observe(u),
    h.observe(t));
    let y, g = l ? Nn(e) : null;
    l && w();
    function w() {
        const m = Nn(e);
        g && !ny(g, m) && r(),
        g = m,
        y = requestAnimationFrame(w)
    }
    return r(),
    () => {
        var m;
        c.forEach(p => {
            s && p.removeEventListener("scroll", r),
            i && p.removeEventListener("resize", r)
        }
        ),
        d == null || d(),
        (m = h) == null || m.disconnect(),
        h = null,
        l && cancelAnimationFrame(y)
    }
}
const ok = A1
  , ak = O1
  , lk = C1
  , uk = j1
  , ck = P1
  , Kf = T1
  , dk = N1
  , hk = (e, t, r) => {
    const n = new Map
      , s = {
        platform: nk,
        ...r
    }
      , i = {
        ...s.platform,
        _c: n
    };
    return E1(e, t, {
        ...s,
        platform: i
    })
}
;
var fk = typeof document < "u"
  , pk = function() {}
  , aa = fk ? b.useLayoutEffect : pk;
function Ma(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let r, n, s;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (r = e.length,
            r !== t.length)
                return !1;
            for (n = r; n-- !== 0; )
                if (!Ma(e[n], t[n]))
                    return !1;
            return !0
        }
        if (s = Object.keys(e),
        r = s.length,
        r !== Object.keys(t).length)
            return !1;
        for (n = r; n-- !== 0; )
            if (!{}.hasOwnProperty.call(t, s[n]))
                return !1;
        for (n = r; n-- !== 0; ) {
            const i = s[n];
            if (!(i === "_owner" && e.$$typeof) && !Ma(e[i], t[i]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function sy(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function qf(e, t) {
    const r = sy(e);
    return Math.round(t * r) / r
}
function lu(e) {
    const t = b.useRef(e);
    return aa( () => {
        t.current = e
    }
    ),
    t
}
function mk(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: r="absolute", middleware: n=[], platform: s, elements: {reference: i, floating: o}={}, transform: a=!0, whileElementsMounted: l, open: u} = e
      , [c,d] = b.useState({
        x: 0,
        y: 0,
        strategy: r,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [f,h] = b.useState(n);
    Ma(f, n) || h(n);
    const [y,g] = b.useState(null)
      , [w,m] = b.useState(null)
      , p = b.useCallback(C => {
        C !== k.current && (k.current = C,
        g(C))
    }
    , [])
      , v = b.useCallback(C => {
        C !== E.current && (E.current = C,
        m(C))
    }
    , [])
      , x = i || y
      , S = o || w
      , k = b.useRef(null)
      , E = b.useRef(null)
      , R = b.useRef(c)
      , O = l != null
      , j = lu(l)
      , z = lu(s)
      , D = lu(u)
      , J = b.useCallback( () => {
        if (!k.current || !E.current)
            return;
        const C = {
            placement: t,
            strategy: r,
            middleware: f
        };
        z.current && (C.platform = z.current),
        hk(k.current, E.current, C).then(P => {
            const L = {
                ...P,
                isPositioned: D.current !== !1
            };
            I.current && !Ma(R.current, L) && (R.current = L,
            lo.flushSync( () => {
                d(L)
            }
            ))
        }
        )
    }
    , [f, t, r, z, D]);
    aa( () => {
        u === !1 && R.current.isPositioned && (R.current.isPositioned = !1,
        d(C => ({
            ...C,
            isPositioned: !1
        })))
    }
    , [u]);
    const I = b.useRef(!1);
    aa( () => (I.current = !0,
    () => {
        I.current = !1
    }
    ), []),
    aa( () => {
        if (x && (k.current = x),
        S && (E.current = S),
        x && S) {
            if (j.current)
                return j.current(x, S, J);
            J()
        }
    }
    , [x, S, J, j, O]);
    const X = b.useMemo( () => ({
        reference: k,
        floating: E,
        setReference: p,
        setFloating: v
    }), [p, v])
      , H = b.useMemo( () => ({
        reference: x,
        floating: S
    }), [x, S])
      , K = b.useMemo( () => {
        const C = {
            position: r,
            left: 0,
            top: 0
        };
        if (!H.floating)
            return C;
        const P = qf(H.floating, c.x)
          , L = qf(H.floating, c.y);
        return a ? {
            ...C,
            transform: "translate(" + P + "px, " + L + "px)",
            ...sy(H.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: r,
            left: P,
            top: L
        }
    }
    , [r, a, H.floating, c.x, c.y]);
    return b.useMemo( () => ({
        ...c,
        update: J,
        refs: X,
        elements: H,
        floatingStyles: K
    }), [c, J, X, H, K])
}
const gk = e => {
    function t(r) {
        return {}.hasOwnProperty.call(r, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(r) {
            const {element: n, padding: s} = typeof e == "function" ? e(r) : e;
            return n && t(n) ? n.current != null ? Kf({
                element: n.current,
                padding: s
            }).fn(r) : {} : n ? Kf({
                element: n,
                padding: s
            }).fn(r) : {}
        }
    }
}
  , vk = (e, t) => ({
    ...ok(e),
    options: [e, t]
})
  , yk = (e, t) => ({
    ...ak(e),
    options: [e, t]
})
  , wk = (e, t) => ({
    ...dk(e),
    options: [e, t]
})
  , bk = (e, t) => ({
    ...lk(e),
    options: [e, t]
})
  , xk = (e, t) => ({
    ...uk(e),
    options: [e, t]
})
  , _k = (e, t) => ({
    ...ck(e),
    options: [e, t]
})
  , Sk = (e, t) => ({
    ...gk(e),
    options: [e, t]
});
var kk = "Arrow"
  , iy = b.forwardRef( (e, t) => {
    const {children: r, width: n=10, height: s=5, ...i} = e;
    return _.jsx(Ze.svg, {
        ...i,
        ref: t,
        width: n,
        height: s,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? r : _.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
iy.displayName = kk;
var Ek = iy;
function Tk(e) {
    const [t,r] = b.useState(void 0);
    return Xr( () => {
        if (e) {
            r({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const n = new ResizeObserver(s => {
                if (!Array.isArray(s) || !s.length)
                    return;
                const i = s[0];
                let o, a;
                if ("borderBoxSize"in i) {
                    const l = i.borderBoxSize
                      , u = Array.isArray(l) ? l[0] : l;
                    o = u.inlineSize,
                    a = u.blockSize
                } else
                    o = e.offsetWidth,
                    a = e.offsetHeight;
                r({
                    width: o,
                    height: a
                })
            }
            );
            return n.observe(e, {
                box: "border-box"
            }),
            () => n.unobserve(e)
        } else
            r(void 0)
    }
    , [e]),
    t
}
var oy = "Popper"
  , [ay,ly] = dl(oy)
  , [dP,uy] = ay(oy)
  , cy = "PopperAnchor"
  , dy = b.forwardRef( (e, t) => {
    const {__scopePopper: r, virtualRef: n, ...s} = e
      , i = uy(cy, r)
      , o = b.useRef(null)
      , a = Lt(t, o);
    return b.useEffect( () => {
        i.onAnchorChange((n == null ? void 0 : n.current) || o.current)
    }
    ),
    n ? null : _.jsx(Ze.div, {
        ...s,
        ref: a
    })
}
);
dy.displayName = cy;
var Vd = "PopperContent"
  , [Ck,Pk] = ay(Vd)
  , hy = b.forwardRef( (e, t) => {
    var re, $n, vr, sn, yr, Dn;
    const {__scopePopper: r, side: n="bottom", sideOffset: s=0, align: i="center", alignOffset: o=0, arrowPadding: a=0, avoidCollisions: l=!0, collisionBoundary: u=[], collisionPadding: c=0, sticky: d="partial", hideWhenDetached: f=!1, updatePositionStrategy: h="optimized", onPlaced: y, ...g} = e
      , w = uy(Vd, r)
      , [m,p] = b.useState(null)
      , v = Lt(t, wr => p(wr))
      , [x,S] = b.useState(null)
      , k = Tk(x)
      , E = (k == null ? void 0 : k.width) ?? 0
      , R = (k == null ? void 0 : k.height) ?? 0
      , O = n + (i !== "center" ? "-" + i : "")
      , j = typeof c == "number" ? c : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...c
    }
      , z = Array.isArray(u) ? u : [u]
      , D = z.length > 0
      , J = {
        padding: j,
        boundary: z.filter(Ak),
        altBoundary: D
    }
      , {refs: I, floatingStyles: X, placement: H, isPositioned: K, middlewareData: C} = mk({
        strategy: "fixed",
        placement: O,
        whileElementsMounted: (...wr) => ik(...wr, {
            animationFrame: h === "always"
        }),
        elements: {
            reference: w.anchor
        },
        middleware: [vk({
            mainAxis: s + R,
            alignmentAxis: o
        }), l && yk({
            mainAxis: !0,
            crossAxis: !1,
            limiter: d === "partial" ? wk() : void 0,
            ...J
        }), l && bk({
            ...J
        }), xk({
            ...J,
            apply: ({elements: wr, rects: fo, availableWidth: kl, availableHeight: po}) => {
                const {width: El, height: Ks} = fo.reference
                  , Mn = wr.floating.style;
                Mn.setProperty("--radix-popper-available-width", `${kl}px`),
                Mn.setProperty("--radix-popper-available-height", `${po}px`),
                Mn.setProperty("--radix-popper-anchor-width", `${El}px`),
                Mn.setProperty("--radix-popper-anchor-height", `${Ks}px`)
            }
        }), x && Sk({
            element: x,
            padding: a
        }), Ok({
            arrowWidth: E,
            arrowHeight: R
        }), f && _k({
            strategy: "referenceHidden",
            ...J
        })]
    })
      , [P,L] = my(H)
      , q = Yr(y);
    Xr( () => {
        K && (q == null || q())
    }
    , [K, q]);
    const F = (re = C.arrow) == null ? void 0 : re.x
      , Q = ($n = C.arrow) == null ? void 0 : $n.y
      , Z = ((vr = C.arrow) == null ? void 0 : vr.centerOffset) !== 0
      , [we,je] = b.useState();
    return Xr( () => {
        m && je(window.getComputedStyle(m).zIndex)
    }
    , [m]),
    _.jsx("div", {
        ref: I.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...X,
            transform: K ? X.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: we,
            "--radix-popper-transform-origin": [(sn = C.transformOrigin) == null ? void 0 : sn.x, (yr = C.transformOrigin) == null ? void 0 : yr.y].join(" "),
            ...((Dn = C.hide) == null ? void 0 : Dn.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: _.jsx(Ck, {
            scope: r,
            placedSide: P,
            onArrowChange: S,
            arrowX: F,
            arrowY: Q,
            shouldHideArrow: Z,
            children: _.jsx(Ze.div, {
                "data-side": P,
                "data-align": L,
                ...g,
                ref: v,
                style: {
                    ...g.style,
                    animation: K ? void 0 : "none"
                }
            })
        })
    })
}
);
hy.displayName = Vd;
var fy = "PopperArrow"
  , Rk = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , py = b.forwardRef(function(t, r) {
    const {__scopePopper: n, ...s} = t
      , i = Pk(fy, n)
      , o = Rk[i.placedSide];
    return _.jsx("span", {
        ref: i.onArrowChange,
        style: {
            position: "absolute",
            left: i.arrowX,
            top: i.arrowY,
            [o]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[i.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[i.placedSide],
            visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: _.jsx(Ek, {
            ...s,
            ref: r,
            style: {
                ...s.style,
                display: "block"
            }
        })
    })
});
py.displayName = fy;
function Ak(e) {
    return e !== null
}
var Ok = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, m, p;
        const {placement: r, rects: n, middlewareData: s} = t
          , o = ((w = s.arrow) == null ? void 0 : w.centerOffset) !== 0
          , a = o ? 0 : e.arrowWidth
          , l = o ? 0 : e.arrowHeight
          , [u,c] = my(r)
          , d = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[c]
          , f = (((m = s.arrow) == null ? void 0 : m.x) ?? 0) + a / 2
          , h = (((p = s.arrow) == null ? void 0 : p.y) ?? 0) + l / 2;
        let y = ""
          , g = "";
        return u === "bottom" ? (y = o ? d : `${f}px`,
        g = `${-l}px`) : u === "top" ? (y = o ? d : `${f}px`,
        g = `${n.floating.height + l}px`) : u === "right" ? (y = `${-l}px`,
        g = o ? d : `${h}px`) : u === "left" && (y = `${n.floating.width + l}px`,
        g = o ? d : `${h}px`),
        {
            data: {
                x: y,
                y: g
            }
        }
    }
});
function my(e) {
    const [t,r="center"] = e.split("-");
    return [t, r]
}
var Nk = dy
  , jk = hy
  , Ik = py
  , [yl,hP] = dl("Tooltip", [ly])
  , Kd = ly()
  , gy = "TooltipProvider"
  , Lk = 700
  , Gf = "tooltip.open"
  , [$k,vy] = yl(gy)
  , yy = e => {
    const {__scopeTooltip: t, delayDuration: r=Lk, skipDelayDuration: n=300, disableHoverableContent: s=!1, children: i} = e
      , o = b.useRef(!0)
      , a = b.useRef(!1)
      , l = b.useRef(0);
    return b.useEffect( () => {
        const u = l.current;
        return () => window.clearTimeout(u)
    }
    , []),
    _.jsx($k, {
        scope: t,
        isOpenDelayedRef: o,
        delayDuration: r,
        onOpen: b.useCallback( () => {
            window.clearTimeout(l.current),
            o.current = !1
        }
        , []),
        onClose: b.useCallback( () => {
            window.clearTimeout(l.current),
            l.current = window.setTimeout( () => o.current = !0, n)
        }
        , [n]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: b.useCallback(u => {
            a.current = u
        }
        , []),
        disableHoverableContent: s,
        children: i
    })
}
;
yy.displayName = gy;
var wy = "Tooltip"
  , [fP,wl] = yl(wy)
  , xc = "TooltipTrigger"
  , Dk = b.forwardRef( (e, t) => {
    const {__scopeTooltip: r, ...n} = e
      , s = wl(xc, r)
      , i = vy(xc, r)
      , o = Kd(r)
      , a = b.useRef(null)
      , l = Lt(t, a, s.onTriggerChange)
      , u = b.useRef(!1)
      , c = b.useRef(!1)
      , d = b.useCallback( () => u.current = !1, []);
    return b.useEffect( () => () => document.removeEventListener("pointerup", d), [d]),
    _.jsx(Nk, {
        asChild: !0,
        ...o,
        children: _.jsx(Ze.button, {
            "aria-describedby": s.open ? s.contentId : void 0,
            "data-state": s.stateAttribute,
            ...n,
            ref: l,
            onPointerMove: Se(e.onPointerMove, f => {
                f.pointerType !== "touch" && !c.current && !i.isPointerInTransitRef.current && (s.onTriggerEnter(),
                c.current = !0)
            }
            ),
            onPointerLeave: Se(e.onPointerLeave, () => {
                s.onTriggerLeave(),
                c.current = !1
            }
            ),
            onPointerDown: Se(e.onPointerDown, () => {
                s.open && s.onClose(),
                u.current = !0,
                document.addEventListener("pointerup", d, {
                    once: !0
                })
            }
            ),
            onFocus: Se(e.onFocus, () => {
                u.current || s.onOpen()
            }
            ),
            onBlur: Se(e.onBlur, s.onClose),
            onClick: Se(e.onClick, s.onClose)
        })
    })
}
);
Dk.displayName = xc;
var Mk = "TooltipPortal"
  , [pP,Uk] = yl(Mk, {
    forceMount: void 0
})
  , $s = "TooltipContent"
  , by = b.forwardRef( (e, t) => {
    const r = Uk($s, e.__scopeTooltip)
      , {forceMount: n=r.forceMount, side: s="top", ...i} = e
      , o = wl($s, e.__scopeTooltip);
    return _.jsx(jd, {
        present: n || o.open,
        children: o.disableHoverableContent ? _.jsx(xy, {
            side: s,
            ...i,
            ref: t
        }) : _.jsx(Fk, {
            side: s,
            ...i,
            ref: t
        })
    })
}
)
  , Fk = b.forwardRef( (e, t) => {
    const r = wl($s, e.__scopeTooltip)
      , n = vy($s, e.__scopeTooltip)
      , s = b.useRef(null)
      , i = Lt(t, s)
      , [o,a] = b.useState(null)
      , {trigger: l, onClose: u} = r
      , c = s.current
      , {onPointerInTransitChange: d} = n
      , f = b.useCallback( () => {
        a(null),
        d(!1)
    }
    , [d])
      , h = b.useCallback( (y, g) => {
        const w = y.currentTarget
          , m = {
            x: y.clientX,
            y: y.clientY
        }
          , p = Vk(m, w.getBoundingClientRect())
          , v = Kk(m, p)
          , x = qk(g.getBoundingClientRect())
          , S = Jk([...v, ...x]);
        a(S),
        d(!0)
    }
    , [d]);
    return b.useEffect( () => () => f(), [f]),
    b.useEffect( () => {
        if (l && c) {
            const y = w => h(w, c)
              , g = w => h(w, l);
            return l.addEventListener("pointerleave", y),
            c.addEventListener("pointerleave", g),
            () => {
                l.removeEventListener("pointerleave", y),
                c.removeEventListener("pointerleave", g)
            }
        }
    }
    , [l, c, h, f]),
    b.useEffect( () => {
        if (o) {
            const y = g => {
                const w = g.target
                  , m = {
                    x: g.clientX,
                    y: g.clientY
                }
                  , p = (l == null ? void 0 : l.contains(w)) || (c == null ? void 0 : c.contains(w))
                  , v = !Gk(m, o);
                p ? f() : v && (f(),
                u())
            }
            ;
            return document.addEventListener("pointermove", y),
            () => document.removeEventListener("pointermove", y)
        }
    }
    , [l, c, o, u, f]),
    _.jsx(xy, {
        ...e,
        ref: i
    })
}
)
  , [Bk,zk] = yl(wy, {
    isInside: !1
})
  , Hk = P_("TooltipContent")
  , xy = b.forwardRef( (e, t) => {
    const {__scopeTooltip: r, children: n, "aria-label": s, onEscapeKeyDown: i, onPointerDownOutside: o, ...a} = e
      , l = wl($s, r)
      , u = Kd(r)
      , {onClose: c} = l;
    return b.useEffect( () => (document.addEventListener(Gf, c),
    () => document.removeEventListener(Gf, c)), [c]),
    b.useEffect( () => {
        if (l.trigger) {
            const d = f => {
                const h = f.target;
                h != null && h.contains(l.trigger) && c()
            }
            ;
            return window.addEventListener("scroll", d, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", d, {
                capture: !0
            })
        }
    }
    , [l.trigger, c]),
    _.jsx(Nd, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: o,
        onFocusOutside: d => d.preventDefault(),
        onDismiss: c,
        children: _.jsxs(jk, {
            "data-state": l.stateAttribute,
            ...u,
            ...a,
            ref: t,
            style: {
                ...a.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [_.jsx(Hk, {
                children: n
            }), _.jsx(Bk, {
                scope: r,
                isInside: !0,
                children: _.jsx(Z_, {
                    id: l.contentId,
                    role: "tooltip",
                    children: s || n
                })
            })]
        })
    })
}
);
by.displayName = $s;
var _y = "TooltipArrow"
  , Wk = b.forwardRef( (e, t) => {
    const {__scopeTooltip: r, ...n} = e
      , s = Kd(r);
    return zk(_y, r).isInside ? null : _.jsx(Ik, {
        ...s,
        ...n,
        ref: t
    })
}
);
Wk.displayName = _y;
function Vk(e, t) {
    const r = Math.abs(t.top - e.y)
      , n = Math.abs(t.bottom - e.y)
      , s = Math.abs(t.right - e.x)
      , i = Math.abs(t.left - e.x);
    switch (Math.min(r, n, s, i)) {
    case i:
        return "left";
    case s:
        return "right";
    case r:
        return "top";
    case n:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function Kk(e, t, r=5) {
    const n = [];
    switch (t) {
    case "top":
        n.push({
            x: e.x - r,
            y: e.y + r
        }, {
            x: e.x + r,
            y: e.y + r
        });
        break;
    case "bottom":
        n.push({
            x: e.x - r,
            y: e.y - r
        }, {
            x: e.x + r,
            y: e.y - r
        });
        break;
    case "left":
        n.push({
            x: e.x + r,
            y: e.y - r
        }, {
            x: e.x + r,
            y: e.y + r
        });
        break;
    case "right":
        n.push({
            x: e.x - r,
            y: e.y - r
        }, {
            x: e.x - r,
            y: e.y + r
        });
        break
    }
    return n
}
function qk(e) {
    const {top: t, right: r, bottom: n, left: s} = e;
    return [{
        x: s,
        y: t
    }, {
        x: r,
        y: t
    }, {
        x: r,
        y: n
    }, {
        x: s,
        y: n
    }]
}
function Gk(e, t) {
    const {x: r, y: n} = e;
    let s = !1;
    for (let i = 0, o = t.length - 1; i < t.length; o = i++) {
        const a = t[i]
          , l = t[o]
          , u = a.x
          , c = a.y
          , d = l.x
          , f = l.y;
        c > n != f > n && r < (d - u) * (n - c) / (f - c) + u && (s = !s)
    }
    return s
}
function Jk(e) {
    const t = e.slice();
    return t.sort( (r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0),
    Qk(t)
}
function Qk(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let n = 0; n < e.length; n++) {
        const s = e[n];
        for (; t.length >= 2; ) {
            const i = t[t.length - 1]
              , o = t[t.length - 2];
            if ((i.x - o.x) * (s.y - o.y) >= (i.y - o.y) * (s.x - o.x))
                t.pop();
            else
                break
        }
        t.push(s)
    }
    t.pop();
    const r = [];
    for (let n = e.length - 1; n >= 0; n--) {
        const s = e[n];
        for (; r.length >= 2; ) {
            const i = r[r.length - 1]
              , o = r[r.length - 2];
            if ((i.x - o.x) * (s.y - o.y) >= (i.y - o.y) * (s.x - o.x))
                r.pop();
            else
                break
        }
        r.push(s)
    }
    return r.pop(),
    t.length === 1 && r.length === 1 && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r)
}
var Yk = yy
  , Sy = by;
const Xk = Yk
  , Zk = b.forwardRef( ({className: e, sideOffset: t=4, ...r}, n) => _.jsx(Sy, {
    ref: n,
    sideOffset: t,
    className: Ln("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...r
}));
Zk.displayName = Sy.displayName;
const eE = () => _.jsx("nav", {
    className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30",
    children: _.jsxs("div", {
        className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between",
        children: [_.jsxs("a", {
            href: "/",
            className: "flex items-center gap-2",
            children: [_.jsx(pl, {
                className: "w-6 h-6 text-primary"
            }), _.jsx("span", {
                className: "font-display font-bold text-lg text-foreground",
                children: "STARLINK KENYA"
            })]
        }), _.jsxs("div", {
            className: "hidden md:flex items-center gap-8 font-body text-sm text-muted-foreground",
            children: [_.jsx("a", {
                href: "#bundles",
                className: "hover:text-primary transition-colors",
                children: "Bundles"
            }), _.jsx("a", {
                href: "#how-it-works",
                className: "hover:text-primary transition-colors",
                children: "How It Works"
            })]
        }), _.jsx("a", {
            href: "#bundles",
            className: "px-5 py-2 rounded-lg bg-cta-gradient font-display text-xs font-semibold uppercase tracking-wider text-accent-foreground hover:opacity-90 transition-opacity",
            children: "Buy Now"
        })]
    })
})
  , tE = "/assets/hero-starlink-BUDDvbSu.jpg"
  , rE = () => _.jsxs("section", {
    className: "relative min-h-[55vh] flex items-center justify-center overflow-hidden",
    children: [_.jsx("img", {
        src: tE,
        alt: "Starlink satellite dish connecting to space",
        className: "absolute inset-0 w-full h-full object-cover opacity-40",
        width: 1920,
        height: 1080
    }), _.jsx("div", {
        className: "absolute inset-0 bg-hero opacity-80"
    }), _.jsxs("div", {
        className: "relative z-10 text-center max-w-4xl mx-auto px-6",
        children: [_.jsxs("div", {
            className: "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8",
            children: [_.jsx(pl, {
                className: "w-4 h-4 text-primary"
            }), _.jsx("span", {
                className: "text-sm font-body text-primary",
                children: "Powered by Starlink Satellite Internet"
            })]
        }), _.jsxs("h1", {
            className: "text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight",
            children: [_.jsx("span", {
                className: "text-foreground",
                children: "Safaricom"
            }), " ", _.jsx("span", {
                className: "text-gradient",
                children: "Bundles"
            })]
        }), _.jsx("p", {
            className: "text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-10",
            children: "Get blazing-fast Starlink internet delivered straight to your Safaricom line. Browse, stream, and work without limits."
        }), _.jsxs("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center",
            children: [_.jsxs("a", {
                href: "#bundles",
                className: "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-cta-gradient font-display font-semibold text-sm tracking-wider uppercase text-accent-foreground hover:opacity-90 transition-opacity",
                children: [_.jsx(Dv, {
                    className: "w-5 h-5"
                }), "View Bundles"]
            }), _.jsx("a", {
                href: "#how-it-works",
                className: "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-primary/30 font-display font-semibold text-sm tracking-wider uppercase text-primary hover:bg-primary/10 transition-colors",
                children: "How It Works"
            })]
        })]
    }), _.jsx("div", {
        className: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"
    })]
})
  , nE = ({name: e, data: t, price: r, validity: n, features: s, popular: i}) => {
    const o = Od()
      , a = () => {
        const l = r.replace(/,/g, "");
        o(`/pay?bundle=${encodeURIComponent(e)}&data=${encodeURIComponent(t)}&amount=${l}`)
    }
    ;
    return _.jsxs("div", {
        className: `relative rounded-2xl p-[1px] transition-transform hover:scale-105 duration-300 ${i ? "glow-border-green" : "glow-border"}`,
        children: [i && _.jsx("div", {
            className: "absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-cta-gradient rounded-full text-xs font-display font-bold uppercase tracking-wider text-accent-foreground",
            children: "Most Popular"
        }), _.jsxs("div", {
            className: "bg-card-gradient rounded-2xl p-8 h-full flex flex-col",
            children: [_.jsx("h3", {
                className: "font-display text-lg font-semibold text-primary mb-1",
                children: e
            }), _.jsx("p", {
                className: "text-sm text-muted-foreground font-body mb-6",
                children: n
            }), _.jsx("div", {
                className: "mb-6",
                children: _.jsx("span", {
                    className: "text-5xl font-display font-bold text-foreground",
                    children: t
                })
            }), _.jsxs("div", {
                className: "text-3xl font-display font-bold text-gradient mb-8",
                children: ["KES ", r]
            }), _.jsx("ul", {
                className: "space-y-3 mb-8 flex-grow",
                children: s.map( (l, u) => _.jsxs("li", {
                    className: "flex items-center gap-3 text-sm text-muted-foreground font-body",
                    children: [_.jsx(kS, {
                        className: "w-4 h-4 text-secondary flex-shrink-0"
                    }), l]
                }, u))
            }), _.jsxs("button", {
                onClick: a,
                className: `w-full py-3 rounded-lg font-display font-semibold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${i ? "bg-cta-gradient text-accent-foreground hover:opacity-90" : "border border-primary/30 text-primary hover:bg-primary/10"}`,
                children: [_.jsx(Dv, {
                    className: "w-4 h-4"
                }), "Buy Now"]
            })]
        })]
    })
}
  , sE = [{
    name: "Starter",
    data: "10GB",
    price: "150",
    validity: "30 Days",
    features: ["Starlink speeds up to 50Mbps", "Works on all Safaricom SIMs", "Auto-activation via Starlink Kenya", "24/7 customer support"]
}, {
    name: "Power",
    data: "20GB",
    price: "300",
    validity: "30 Days",
    features: ["Starlink speeds up to 100Mbps", "Works on all Safaricom SIMs", "Auto-activation via Starlink Kenya", "Priority support", "Carry-over unused data"],
    popular: !0
}, {
    name: "Ultra",
    data: "50GB",
    price: "500",
    validity: "30 Days",
    features: ["Starlink speeds up to 200Mbps", "Works on all Safaricom SIMs", "Auto-activation via Starlink Kenya", "Dedicated support line", "Unlimited carry-over", "Free bonus 5GB"]
}, {
    name: "Unlimited",
    data: "∞",
    price: "1,000",
    validity: "30 Days",
    features: ["Truly unlimited data", "Starlink max speeds", "Works on all Safaricom SIMs", "Auto-activation via Starlink Kenya", "VIP support", "Fair usage: 200GB/month"]
}]
  , iE = () => _.jsx("section", {
    id: "bundles",
    className: "pt-24 pb-12 px-6",
    children: _.jsxs("div", {
        className: "max-w-7xl mx-auto",
        children: [_.jsxs("div", {
            className: "text-center mb-16",
            children: [_.jsxs("h2", {
                className: "text-3xl md:text-5xl font-display font-bold text-foreground mb-4",
                children: ["Choose Your ", _.jsx("span", {
                    className: "text-gradient",
                    children: "Bundle"
                })]
            }), _.jsx("p", {
                className: "text-muted-foreground font-body text-lg max-w-xl mx-auto",
                children: "Affordable Starlink-powered data bundles for your Safaricom line. Pay via Starlink Kenya."
            })]
        }), _.jsx("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
            children: sE.map(e => _.jsx(nE, {
                ...e
            }, e.name))
        })]
    })
})
  , oE = [{
    icon: $v,
    title: "Enter Your Number",
    desc: "Provide your Safaricom phone number"
}, {
    icon: CS,
    title: "Pay via Starlink Kenya",
    desc: "Complete payment through Starlink Kenya"
}, {
    icon: pl,
    title: "Get Connected",
    desc: "Bundle activates instantly on your line"
}, {
    icon: AS,
    title: "Enjoy Speed",
    desc: "Browse at Starlink satellite speeds"
}]
  , aE = () => _.jsx("section", {
    id: "how-it-works",
    className: "pt-12 pb-24 px-6 bg-muted/30",
    children: _.jsxs("div", {
        className: "max-w-5xl mx-auto",
        children: [_.jsxs("div", {
            className: "text-center mb-16",
            children: [_.jsxs("h2", {
                className: "text-3xl md:text-5xl font-display font-bold text-foreground mb-4",
                children: ["How It ", _.jsx("span", {
                    className: "text-gradient",
                    children: "Works"
                })]
            }), _.jsx("p", {
                className: "text-muted-foreground font-body text-lg",
                children: "Four simple steps to get online"
            })]
        }), _.jsx("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",
            children: oE.map( (e, t) => _.jsxs("div", {
                className: "text-center group",
                children: [_.jsx("div", {
                    className: "w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:glow-border transition-all duration-300",
                    children: _.jsx(e.icon, {
                        className: "w-7 h-7 text-primary"
                    })
                }), _.jsxs("div", {
                    className: "font-display text-xs text-primary mb-2 tracking-widest uppercase",
                    children: ["Step ", t + 1]
                }), _.jsx("h3", {
                    className: "font-display text-lg font-semibold text-foreground mb-2",
                    children: e.title
                }), _.jsx("p", {
                    className: "text-sm text-muted-foreground font-body",
                    children: e.desc
                })]
            }, t))
        })]
    })
})
  , lE = () => _.jsx("footer", {
    className: "border-t border-border/30 py-12 px-6 bg-muted/20",
    children: _.jsxs("div", {
        className: "max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4",
        children: [_.jsxs("div", {
            className: "flex items-center gap-2",
            children: [_.jsx(pl, {
                className: "w-5 h-5 text-primary"
            }), _.jsx("span", {
                className: "font-display font-bold text-lg text-foreground",
                children: "STARLINK KENYA"
            })]
        }), _.jsxs("div", {
            className: "flex items-center gap-6 font-body text-sm text-muted-foreground",
            children: [_.jsx("a", {
                href: "#bundles",
                className: "hover:text-primary transition-colors",
                children: "Bundles"
            }), _.jsx("a", {
                href: "#how-it-works",
                className: "hover:text-primary transition-colors",
                children: "How It Works"
            })]
        }), _.jsx("p", {
            className: "text-xs text-muted-foreground font-body",
            children: "© 2026 STARLINK KENYA. All rights reserved."
        })]
    })
})
  , uE = () => _.jsxs("div", {
    className: "min-h-screen bg-background",
    children: [_.jsx(eE, {}), _.jsx(rE, {}), _.jsx(iE, {}), _.jsx(aE, {}), _.jsx(lE, {})]
});
function bl(e, t) {
    var r = {};
    for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++)
            t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]]);
    return r
}
function cE(e, t, r, n) {
    function s(i) {
        return i instanceof r ? i : new r(function(o) {
            o(i)
        }
        )
    }
    return new (r || (r = Promise))(function(i, o) {
        function a(c) {
            try {
                u(n.next(c))
            } catch (d) {
                o(d)
            }
        }
        function l(c) {
            try {
                u(n.throw(c))
            } catch (d) {
                o(d)
            }
        }
        function u(c) {
            c.done ? i(c.value) : s(c.value).then(a, l)
        }
        u((n = n.apply(e, t || [])).next())
    }
    )
}
const dE = e => e ? (...t) => e(...t) : (...t) => fetch(...t);
class qd extends Error {
    constructor(t, r="FunctionsError", n) {
        super(t),
        this.name = r,
        this.context = n
    }
}
class hE extends qd {
    constructor(t) {
        super("Failed to send a request to the Edge Function", "FunctionsFetchError", t)
    }
}
class Jf extends qd {
    constructor(t) {
        super("Relay Error invoking the Edge Function", "FunctionsRelayError", t)
    }
}
class Qf extends qd {
    constructor(t) {
        super("Edge Function returned a non-2xx status code", "FunctionsHttpError", t)
    }
}
var _c;
(function(e) {
    e.Any = "any",
    e.ApNortheast1 = "ap-northeast-1",
    e.ApNortheast2 = "ap-northeast-2",
    e.ApSouth1 = "ap-south-1",
    e.ApSoutheast1 = "ap-southeast-1",
    e.ApSoutheast2 = "ap-southeast-2",
    e.CaCentral1 = "ca-central-1",
    e.EuCentral1 = "eu-central-1",
    e.EuWest1 = "eu-west-1",
    e.EuWest2 = "eu-west-2",
    e.EuWest3 = "eu-west-3",
    e.SaEast1 = "sa-east-1",
    e.UsEast1 = "us-east-1",
    e.UsWest1 = "us-west-1",
    e.UsWest2 = "us-west-2"
}
)(_c || (_c = {}));
class fE {
    constructor(t, {headers: r={}, customFetch: n, region: s=_c.Any}={}) {
        this.url = t,
        this.headers = r,
        this.region = s,
        this.fetch = dE(n)
    }
    setAuth(t) {
        this.headers.Authorization = `Bearer ${t}`
    }
    invoke(t) {
        return cE(this, arguments, void 0, function*(r, n={}) {
            var s;
            let i, o;
            try {
                const {headers: a, method: l, body: u, signal: c, timeout: d} = n;
                let f = {}
                  , {region: h} = n;
                h || (h = this.region);
                const y = new URL(`${this.url}/${r}`);
                h && h !== "any" && (f["x-region"] = h,
                y.searchParams.set("forceFunctionRegion", h));
                let g;
                u && (a && !Object.prototype.hasOwnProperty.call(a, "Content-Type") || !a) ? typeof Blob < "u" && u instanceof Blob || u instanceof ArrayBuffer ? (f["Content-Type"] = "application/octet-stream",
                g = u) : typeof u == "string" ? (f["Content-Type"] = "text/plain",
                g = u) : typeof FormData < "u" && u instanceof FormData ? g = u : (f["Content-Type"] = "application/json",
                g = JSON.stringify(u)) : u && typeof u != "string" && !(typeof Blob < "u" && u instanceof Blob) && !(u instanceof ArrayBuffer) && !(typeof FormData < "u" && u instanceof FormData) ? g = JSON.stringify(u) : g = u;
                let w = c;
                d && (o = new AbortController,
                i = setTimeout( () => o.abort(), d),
                c ? (w = o.signal,
                c.addEventListener("abort", () => o.abort())) : w = o.signal);
                const m = yield this.fetch(y.toString(), {
                    method: l || "POST",
                    headers: Object.assign(Object.assign(Object.assign({}, f), this.headers), a),
                    body: g,
                    signal: w
                }).catch(S => {
                    throw new hE(S)
                }
                )
                  , p = m.headers.get("x-relay-error");
                if (p && p === "true")
                    throw new Jf(m);
                if (!m.ok)
                    throw new Qf(m);
                let v = ((s = m.headers.get("Content-Type")) !== null && s !== void 0 ? s : "text/plain").split(";")[0].trim(), x;
                return v === "application/json" ? x = yield m.json() : v === "application/octet-stream" || v === "application/pdf" ? x = yield m.blob() : v === "text/event-stream" ? x = m : v === "multipart/form-data" ? x = yield m.formData() : x = yield m.text(),
                {
                    data: x,
                    error: null,
                    response: m
                }
            } catch (a) {
                return {
                    data: null,
                    error: a,
                    response: a instanceof Qf || a instanceof Jf ? a.context : void 0
                }
            } finally {
                i && clearTimeout(i)
            }
        })
    }
}
var pE = class extends Error {
    constructor(e) {
        super(e.message),
        this.name = "PostgrestError",
        this.details = e.details,
        this.hint = e.hint,
        this.code = e.code
    }
}
  , mE = class {
    constructor(e) {
        var t, r, n;
        this.shouldThrowOnError = !1,
        this.method = e.method,
        this.url = e.url,
        this.headers = new Headers(e.headers),
        this.schema = e.schema,
        this.body = e.body,
        this.shouldThrowOnError = (t = e.shouldThrowOnError) !== null && t !== void 0 ? t : !1,
        this.signal = e.signal,
        this.isMaybeSingle = (r = e.isMaybeSingle) !== null && r !== void 0 ? r : !1,
        this.urlLengthLimit = (n = e.urlLengthLimit) !== null && n !== void 0 ? n : 8e3,
        e.fetch ? this.fetch = e.fetch : this.fetch = fetch
    }
    throwOnError() {
        return this.shouldThrowOnError = !0,
        this
    }
    setHeader(e, t) {
        return this.headers = new Headers(this.headers),
        this.headers.set(e, t),
        this
    }
    then(e, t) {
        var r = this;
        this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers.set("Accept-Profile", this.schema) : this.headers.set("Content-Profile", this.schema)),
        this.method !== "GET" && this.method !== "HEAD" && this.headers.set("Content-Type", "application/json");
        const n = this.fetch;
        let s = n(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal
        }).then(async i => {
            let o = null
              , a = null
              , l = null
              , u = i.status
              , c = i.statusText;
            if (i.ok) {
                var d, f;
                if (r.method !== "HEAD") {
                    var h;
                    const m = await i.text();
                    m === "" || (r.headers.get("Accept") === "text/csv" || r.headers.get("Accept") && (!((h = r.headers.get("Accept")) === null || h === void 0) && h.includes("application/vnd.pgrst.plan+text")) ? a = m : a = JSON.parse(m))
                }
                const g = (d = r.headers.get("Prefer")) === null || d === void 0 ? void 0 : d.match(/count=(exact|planned|estimated)/)
                  , w = (f = i.headers.get("content-range")) === null || f === void 0 ? void 0 : f.split("/");
                g && w && w.length > 1 && (l = parseInt(w[1])),
                r.isMaybeSingle && r.method === "GET" && Array.isArray(a) && (a.length > 1 ? (o = {
                    code: "PGRST116",
                    details: `Results contain ${a.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                    hint: null,
                    message: "JSON object requested, multiple (or no) rows returned"
                },
                a = null,
                l = null,
                u = 406,
                c = "Not Acceptable") : a.length === 1 ? a = a[0] : a = null)
            } else {
                var y;
                const g = await i.text();
                try {
                    o = JSON.parse(g),
                    Array.isArray(o) && i.status === 404 && (a = [],
                    o = null,
                    u = 200,
                    c = "OK")
                } catch {
                    i.status === 404 && g === "" ? (u = 204,
                    c = "No Content") : o = {
                        message: g
                    }
                }
                if (o && r.isMaybeSingle && (!(o == null || (y = o.details) === null || y === void 0) && y.includes("0 rows")) && (o = null,
                u = 200,
                c = "OK"),
                o && r.shouldThrowOnError)
                    throw new pE(o)
            }
            return {
                error: o,
                data: a,
                count: l,
                status: u,
                statusText: c
            }
        }
        );
        return this.shouldThrowOnError || (s = s.catch(i => {
            var o;
            let a = ""
              , l = ""
              , u = "";
            const c = i == null ? void 0 : i.cause;
            if (c) {
                var d, f, h, y;
                const m = (d = c == null ? void 0 : c.message) !== null && d !== void 0 ? d : ""
                  , p = (f = c == null ? void 0 : c.code) !== null && f !== void 0 ? f : "";
                a = `${(h = i == null ? void 0 : i.name) !== null && h !== void 0 ? h : "FetchError"}: ${i == null ? void 0 : i.message}`,
                a += `

Caused by: ${(y = c == null ? void 0 : c.name) !== null && y !== void 0 ? y : "Error"}: ${m}`,
                p && (a += ` (${p})`),
                c != null && c.stack && (a += `
${c.stack}`)
            } else {
                var g;
                a = (g = i == null ? void 0 : i.stack) !== null && g !== void 0 ? g : ""
            }
            const w = this.url.toString().length;
            return (i == null ? void 0 : i.name) === "AbortError" || (i == null ? void 0 : i.code) === "ABORT_ERR" ? (u = "",
            l = "Request was aborted (timeout or manual cancellation)",
            w > this.urlLengthLimit && (l += `. Note: Your request URL is ${w} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)) : ((c == null ? void 0 : c.name) === "HeadersOverflowError" || (c == null ? void 0 : c.code) === "UND_ERR_HEADERS_OVERFLOW") && (u = "",
            l = "HTTP headers exceeded server limits (typically 16KB)",
            w > this.urlLengthLimit && (l += `. Your request URL is ${w} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),
            {
                error: {
                    message: `${(o = i == null ? void 0 : i.name) !== null && o !== void 0 ? o : "FetchError"}: ${i == null ? void 0 : i.message}`,
                    details: a,
                    hint: l,
                    code: u
                },
                data: null,
                count: null,
                status: 0,
                statusText: ""
            }
        }
        )),
        s.then(e, t)
    }
    returns() {
        return this
    }
    overrideTypes() {
        return this
    }
}
  , gE = class extends mE {
    select(e) {
        let t = !1;
        const r = (e ?? "*").split("").map(n => /\s/.test(n) && !t ? "" : (n === '"' && (t = !t),
        n)).join("");
        return this.url.searchParams.set("select", r),
        this.headers.append("Prefer", "return=representation"),
        this
    }
    order(e, {ascending: t=!0, nullsFirst: r, foreignTable: n, referencedTable: s=n}={}) {
        const i = s ? `${s}.order` : "order"
          , o = this.url.searchParams.get(i);
        return this.url.searchParams.set(i, `${o ? `${o},` : ""}${e}.${t ? "asc" : "desc"}${r === void 0 ? "" : r ? ".nullsfirst" : ".nullslast"}`),
        this
    }
    limit(e, {foreignTable: t, referencedTable: r=t}={}) {
        const n = typeof r > "u" ? "limit" : `${r}.limit`;
        return this.url.searchParams.set(n, `${e}`),
        this
    }
    range(e, t, {foreignTable: r, referencedTable: n=r}={}) {
        const s = typeof n > "u" ? "offset" : `${n}.offset`
          , i = typeof n > "u" ? "limit" : `${n}.limit`;
        return this.url.searchParams.set(s, `${e}`),
        this.url.searchParams.set(i, `${t - e + 1}`),
        this
    }
    abortSignal(e) {
        return this.signal = e,
        this
    }
    single() {
        return this.headers.set("Accept", "application/vnd.pgrst.object+json"),
        this
    }
    maybeSingle() {
        return this.method === "GET" ? this.headers.set("Accept", "application/json") : this.headers.set("Accept", "application/vnd.pgrst.object+json"),
        this.isMaybeSingle = !0,
        this
    }
    csv() {
        return this.headers.set("Accept", "text/csv"),
        this
    }
    geojson() {
        return this.headers.set("Accept", "application/geo+json"),
        this
    }
    explain({analyze: e=!1, verbose: t=!1, settings: r=!1, buffers: n=!1, wal: s=!1, format: i="text"}={}) {
        var o;
        const a = [e ? "analyze" : null, t ? "verbose" : null, r ? "settings" : null, n ? "buffers" : null, s ? "wal" : null].filter(Boolean).join("|")
          , l = (o = this.headers.get("Accept")) !== null && o !== void 0 ? o : "application/json";
        return this.headers.set("Accept", `application/vnd.pgrst.plan+${i}; for="${l}"; options=${a};`),
        i === "json" ? this : this
    }
    rollback() {
        return this.headers.append("Prefer", "tx=rollback"),
        this
    }
    returns() {
        return this
    }
    maxAffected(e) {
        return this.headers.append("Prefer", "handling=strict"),
        this.headers.append("Prefer", `max-affected=${e}`),
        this
    }
}
;
const Yf = new RegExp("[,()]");
var Jn = class extends gE {
    eq(e, t) {
        return this.url.searchParams.append(e, `eq.${t}`),
        this
    }
    neq(e, t) {
        return this.url.searchParams.append(e, `neq.${t}`),
        this
    }
    gt(e, t) {
        return this.url.searchParams.append(e, `gt.${t}`),
        this
    }
    gte(e, t) {
        return this.url.searchParams.append(e, `gte.${t}`),
        this
    }
    lt(e, t) {
        return this.url.searchParams.append(e, `lt.${t}`),
        this
    }
    lte(e, t) {
        return this.url.searchParams.append(e, `lte.${t}`),
        this
    }
    like(e, t) {
        return this.url.searchParams.append(e, `like.${t}`),
        this
    }
    likeAllOf(e, t) {
        return this.url.searchParams.append(e, `like(all).{${t.join(",")}}`),
        this
    }
    likeAnyOf(e, t) {
        return this.url.searchParams.append(e, `like(any).{${t.join(",")}}`),
        this
    }
    ilike(e, t) {
        return this.url.searchParams.append(e, `ilike.${t}`),
        this
    }
    ilikeAllOf(e, t) {
        return this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`),
        this
    }
    ilikeAnyOf(e, t) {
        return this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`),
        this
    }
    regexMatch(e, t) {
        return this.url.searchParams.append(e, `match.${t}`),
        this
    }
    regexIMatch(e, t) {
        return this.url.searchParams.append(e, `imatch.${t}`),
        this
    }
    is(e, t) {
        return this.url.searchParams.append(e, `is.${t}`),
        this
    }
    isDistinct(e, t) {
        return this.url.searchParams.append(e, `isdistinct.${t}`),
        this
    }
    in(e, t) {
        const r = Array.from(new Set(t)).map(n => typeof n == "string" && Yf.test(n) ? `"${n}"` : `${n}`).join(",");
        return this.url.searchParams.append(e, `in.(${r})`),
        this
    }
    notIn(e, t) {
        const r = Array.from(new Set(t)).map(n => typeof n == "string" && Yf.test(n) ? `"${n}"` : `${n}`).join(",");
        return this.url.searchParams.append(e, `not.in.(${r})`),
        this
    }
    contains(e, t) {
        return typeof t == "string" ? this.url.searchParams.append(e, `cs.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`) : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`),
        this
    }
    containedBy(e, t) {
        return typeof t == "string" ? this.url.searchParams.append(e, `cd.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`) : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`),
        this
    }
    rangeGt(e, t) {
        return this.url.searchParams.append(e, `sr.${t}`),
        this
    }
    rangeGte(e, t) {
        return this.url.searchParams.append(e, `nxl.${t}`),
        this
    }
    rangeLt(e, t) {
        return this.url.searchParams.append(e, `sl.${t}`),
        this
    }
    rangeLte(e, t) {
        return this.url.searchParams.append(e, `nxr.${t}`),
        this
    }
    rangeAdjacent(e, t) {
        return this.url.searchParams.append(e, `adj.${t}`),
        this
    }
    overlaps(e, t) {
        return typeof t == "string" ? this.url.searchParams.append(e, `ov.${t}`) : this.url.searchParams.append(e, `ov.{${t.join(",")}}`),
        this
    }
    textSearch(e, t, {config: r, type: n}={}) {
        let s = "";
        n === "plain" ? s = "pl" : n === "phrase" ? s = "ph" : n === "websearch" && (s = "w");
        const i = r === void 0 ? "" : `(${r})`;
        return this.url.searchParams.append(e, `${s}fts${i}.${t}`),
        this
    }
    match(e) {
        return Object.entries(e).filter( ([t,r]) => r !== void 0).forEach( ([t,r]) => {
            this.url.searchParams.append(t, `eq.${r}`)
        }
        ),
        this
    }
    not(e, t, r) {
        return this.url.searchParams.append(e, `not.${t}.${r}`),
        this
    }
    or(e, {foreignTable: t, referencedTable: r=t}={}) {
        const n = r ? `${r}.or` : "or";
        return this.url.searchParams.append(n, `(${e})`),
        this
    }
    filter(e, t, r) {
        return this.url.searchParams.append(e, `${t}.${r}`),
        this
    }
}
  , vE = class {
    constructor(e, {headers: t={}, schema: r, fetch: n, urlLengthLimit: s=8e3}) {
        this.url = e,
        this.headers = new Headers(t),
        this.schema = r,
        this.fetch = n,
        this.urlLengthLimit = s
    }
    cloneRequestState() {
        return {
            url: new URL(this.url.toString()),
            headers: new Headers(this.headers)
        }
    }
    select(e, t) {
        const {head: r=!1, count: n} = t ?? {}
          , s = r ? "HEAD" : "GET";
        let i = !1;
        const o = (e ?? "*").split("").map(u => /\s/.test(u) && !i ? "" : (u === '"' && (i = !i),
        u)).join("")
          , {url: a, headers: l} = this.cloneRequestState();
        return a.searchParams.set("select", o),
        n && l.append("Prefer", `count=${n}`),
        new Jn({
            method: s,
            url: a,
            headers: l,
            schema: this.schema,
            fetch: this.fetch,
            urlLengthLimit: this.urlLengthLimit
        })
    }
    insert(e, {count: t, defaultToNull: r=!0}={}) {
        var n;
        const s = "POST"
          , {url: i, headers: o} = this.cloneRequestState();
        if (t && o.append("Prefer", `count=${t}`),
        r || o.append("Prefer", "missing=default"),
        Array.isArray(e)) {
            const a = e.reduce( (l, u) => l.concat(Object.keys(u)), []);
            if (a.length > 0) {
                const l = [...new Set(a)].map(u => `"${u}"`);
                i.searchParams.set("columns", l.join(","))
            }
        }
        return new Jn({
            method: s,
            url: i,
            headers: o,
            schema: this.schema,
            body: e,
            fetch: (n = this.fetch) !== null && n !== void 0 ? n : fetch,
            urlLengthLimit: this.urlLengthLimit
        })
    }
    upsert(e, {onConflict: t, ignoreDuplicates: r=!1, count: n, defaultToNull: s=!0}={}) {
        var i;
        const o = "POST"
          , {url: a, headers: l} = this.cloneRequestState();
        if (l.append("Prefer", `resolution=${r ? "ignore" : "merge"}-duplicates`),
        t !== void 0 && a.searchParams.set("on_conflict", t),
        n && l.append("Prefer", `count=${n}`),
        s || l.append("Prefer", "missing=default"),
        Array.isArray(e)) {
            const u = e.reduce( (c, d) => c.concat(Object.keys(d)), []);
            if (u.length > 0) {
                const c = [...new Set(u)].map(d => `"${d}"`);
                a.searchParams.set("columns", c.join(","))
            }
        }
        return new Jn({
            method: o,
            url: a,
            headers: l,
            schema: this.schema,
            body: e,
            fetch: (i = this.fetch) !== null && i !== void 0 ? i : fetch,
            urlLengthLimit: this.urlLengthLimit
        })
    }
    update(e, {count: t}={}) {
        var r;
        const n = "PATCH"
          , {url: s, headers: i} = this.cloneRequestState();
        return t && i.append("Prefer", `count=${t}`),
        new Jn({
            method: n,
            url: s,
            headers: i,
            schema: this.schema,
            body: e,
            fetch: (r = this.fetch) !== null && r !== void 0 ? r : fetch,
            urlLengthLimit: this.urlLengthLimit
        })
    }
    delete({count: e}={}) {
        var t;
        const r = "DELETE"
          , {url: n, headers: s} = this.cloneRequestState();
        return e && s.append("Prefer", `count=${e}`),
        new Jn({
            method: r,
            url: n,
            headers: s,
            schema: this.schema,
            fetch: (t = this.fetch) !== null && t !== void 0 ? t : fetch,
            urlLengthLimit: this.urlLengthLimit
        })
    }
}
;
function Gi(e) {
    "@babel/helpers - typeof";
    return Gi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    Gi(e)
}
function yE(e, t) {
    if (Gi(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Gi(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function wE(e) {
    var t = yE(e, "string");
    return Gi(t) == "symbol" ? t : t + ""
}
function bE(e, t, r) {
    return (t = wE(t))in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function Xf(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(s) {
            return Object.getOwnPropertyDescriptor(e, s).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function Uo(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Xf(Object(r), !0).forEach(function(n) {
            bE(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xf(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
var xE = class ky {
    constructor(t, {headers: r={}, schema: n, fetch: s, timeout: i, urlLengthLimit: o=8e3}={}) {
        this.url = t,
        this.headers = new Headers(r),
        this.schemaName = n,
        this.urlLengthLimit = o;
        const a = s ?? globalThis.fetch;
        i !== void 0 && i > 0 ? this.fetch = (l, u) => {
            const c = new AbortController
              , d = setTimeout( () => c.abort(), i)
              , f = u == null ? void 0 : u.signal;
            if (f) {
                if (f.aborted)
                    return clearTimeout(d),
                    a(l, u);
                const h = () => {
                    clearTimeout(d),
                    c.abort()
                }
                ;
                return f.addEventListener("abort", h, {
                    once: !0
                }),
                a(l, Uo(Uo({}, u), {}, {
                    signal: c.signal
                })).finally( () => {
                    clearTimeout(d),
                    f.removeEventListener("abort", h)
                }
                )
            }
            return a(l, Uo(Uo({}, u), {}, {
                signal: c.signal
            })).finally( () => clearTimeout(d))
        }
        : this.fetch = a
    }
    from(t) {
        if (!t || typeof t != "string" || t.trim() === "")
            throw new Error("Invalid relation name: relation must be a non-empty string.");
        return new vE(new URL(`${this.url}/${t}`),{
            headers: new Headers(this.headers),
            schema: this.schemaName,
            fetch: this.fetch,
            urlLengthLimit: this.urlLengthLimit
        })
    }
    schema(t) {
        return new ky(this.url,{
            headers: this.headers,
            schema: t,
            fetch: this.fetch,
            urlLengthLimit: this.urlLengthLimit
        })
    }
    rpc(t, r={}, {head: n=!1, get: s=!1, count: i}={}) {
        var o;
        let a;
        const l = new URL(`${this.url}/rpc/${t}`);
        let u;
        const c = h => h !== null && typeof h == "object" && (!Array.isArray(h) || h.some(c))
          , d = n && Object.values(r).some(c);
        d ? (a = "POST",
        u = r) : n || s ? (a = n ? "HEAD" : "GET",
        Object.entries(r).filter( ([h,y]) => y !== void 0).map( ([h,y]) => [h, Array.isArray(y) ? `{${y.join(",")}}` : `${y}`]).forEach( ([h,y]) => {
            l.searchParams.append(h, y)
        }
        )) : (a = "POST",
        u = r);
        const f = new Headers(this.headers);
        return d ? f.set("Prefer", i ? `count=${i},return=minimal` : "return=minimal") : i && f.set("Prefer", `count=${i}`),
        new Jn({
            method: a,
            url: l,
            headers: f,
            schema: this.schemaName,
            body: u,
            fetch: (o = this.fetch) !== null && o !== void 0 ? o : fetch,
            urlLengthLimit: this.urlLengthLimit
        })
    }
}
;
class _E {
    constructor() {}
    static detectEnvironment() {
        var t;
        if (typeof WebSocket < "u")
            return {
                type: "native",
                constructor: WebSocket
            };
        if (typeof globalThis < "u" && typeof globalThis.WebSocket < "u")
            return {
                type: "native",
                constructor: globalThis.WebSocket
            };
        if (typeof global < "u" && typeof global.WebSocket < "u")
            return {
                type: "native",
                constructor: global.WebSocket
            };
        if (typeof globalThis < "u" && typeof globalThis.WebSocketPair < "u" && typeof globalThis.WebSocket > "u")
            return {
                type: "cloudflare",
                error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
                workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
            };
        if (typeof globalThis < "u" && globalThis.EdgeRuntime || typeof navigator < "u" && (!((t = navigator.userAgent) === null || t === void 0) && t.includes("Vercel-Edge")))
            return {
                type: "unsupported",
                error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
                workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
            };
        const r = globalThis.process;
        if (r) {
            const n = r.versions;
            if (n && n.node) {
                const s = n.node
                  , i = parseInt(s.replace(/^v/, "").split(".")[0]);
                return i >= 22 ? typeof globalThis.WebSocket < "u" ? {
                    type: "native",
                    constructor: globalThis.WebSocket
                } : {
                    type: "unsupported",
                    error: `Node.js ${i} detected but native WebSocket not found.`,
                    workaround: "Provide a WebSocket implementation via the transport option."
                } : {
                    type: "unsupported",
                    error: `Node.js ${i} detected without native WebSocket support.`,
                    workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`
                }
            }
        }
        return {
            type: "unsupported",
            error: "Unknown JavaScript runtime without WebSocket support.",
            workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
        }
    }
    static getWebSocketConstructor() {
        const t = this.detectEnvironment();
        if (t.constructor)
            return t.constructor;
        let r = t.error || "WebSocket not supported in this environment.";
        throw t.workaround && (r += `

Suggested solution: ${t.workaround}`),
        new Error(r)
    }
    static isWebSocketSupported() {
        try {
            const t = this.detectEnvironment();
            return t.type === "native" || t.type === "ws"
        } catch {
            return !1
        }
    }
}
const SE = "2.100.0"
  , kE = `realtime-js/${SE}`
  , EE = "1.0.0"
  , Ey = "2.0.0"
  , TE = Ey
  , CE = 1e4
  , PE = 100
  , Or = {
    closed: "closed",
    errored: "errored",
    joined: "joined",
    joining: "joining",
    leaving: "leaving"
}
  , Ty = {
    close: "phx_close",
    error: "phx_error",
    join: "phx_join",
    reply: "phx_reply",
    leave: "phx_leave",
    access_token: "access_token"
}
  , Sc = {
    connecting: "connecting",
    open: "open",
    closing: "closing",
    closed: "closed"
};
class RE {
    constructor(t) {
        this.HEADER_LENGTH = 1,
        this.USER_BROADCAST_PUSH_META_LENGTH = 6,
        this.KINDS = {
            userBroadcastPush: 3,
            userBroadcast: 4
        },
        this.BINARY_ENCODING = 0,
        this.JSON_ENCODING = 1,
        this.BROADCAST_EVENT = "broadcast",
        this.allowedMetadataKeys = [],
        this.allowedMetadataKeys = t ?? []
    }
    encode(t, r) {
        if (t.event === this.BROADCAST_EVENT && !(t.payload instanceof ArrayBuffer) && typeof t.payload.event == "string")
            return r(this._binaryEncodeUserBroadcastPush(t));
        let n = [t.join_ref, t.ref, t.topic, t.event, t.payload];
        return r(JSON.stringify(n))
    }
    _binaryEncodeUserBroadcastPush(t) {
        var r;
        return this._isArrayBuffer((r = t.payload) === null || r === void 0 ? void 0 : r.payload) ? this._encodeBinaryUserBroadcastPush(t) : this._encodeJsonUserBroadcastPush(t)
    }
    _encodeBinaryUserBroadcastPush(t) {
        var r, n;
        const s = (n = (r = t.payload) === null || r === void 0 ? void 0 : r.payload) !== null && n !== void 0 ? n : new ArrayBuffer(0);
        return this._encodeUserBroadcastPush(t, this.BINARY_ENCODING, s)
    }
    _encodeJsonUserBroadcastPush(t) {
        var r, n;
        const s = (n = (r = t.payload) === null || r === void 0 ? void 0 : r.payload) !== null && n !== void 0 ? n : {}
          , o = new TextEncoder().encode(JSON.stringify(s)).buffer;
        return this._encodeUserBroadcastPush(t, this.JSON_ENCODING, o)
    }
    _encodeUserBroadcastPush(t, r, n) {
        var s, i;
        const o = t.topic
          , a = (s = t.ref) !== null && s !== void 0 ? s : ""
          , l = (i = t.join_ref) !== null && i !== void 0 ? i : ""
          , u = t.payload.event
          , c = this.allowedMetadataKeys ? this._pick(t.payload, this.allowedMetadataKeys) : {}
          , d = Object.keys(c).length === 0 ? "" : JSON.stringify(c);
        if (l.length > 255)
            throw new Error(`joinRef length ${l.length} exceeds maximum of 255`);
        if (a.length > 255)
            throw new Error(`ref length ${a.length} exceeds maximum of 255`);
        if (o.length > 255)
            throw new Error(`topic length ${o.length} exceeds maximum of 255`);
        if (u.length > 255)
            throw new Error(`userEvent length ${u.length} exceeds maximum of 255`);
        if (d.length > 255)
            throw new Error(`metadata length ${d.length} exceeds maximum of 255`);
        const f = this.USER_BROADCAST_PUSH_META_LENGTH + l.length + a.length + o.length + u.length + d.length
          , h = new ArrayBuffer(this.HEADER_LENGTH + f);
        let y = new DataView(h)
          , g = 0;
        y.setUint8(g++, this.KINDS.userBroadcastPush),
        y.setUint8(g++, l.length),
        y.setUint8(g++, a.length),
        y.setUint8(g++, o.length),
        y.setUint8(g++, u.length),
        y.setUint8(g++, d.length),
        y.setUint8(g++, r),
        Array.from(l, m => y.setUint8(g++, m.charCodeAt(0))),
        Array.from(a, m => y.setUint8(g++, m.charCodeAt(0))),
        Array.from(o, m => y.setUint8(g++, m.charCodeAt(0))),
        Array.from(u, m => y.setUint8(g++, m.charCodeAt(0))),
        Array.from(d, m => y.setUint8(g++, m.charCodeAt(0)));
        var w = new Uint8Array(h.byteLength + n.byteLength);
        return w.set(new Uint8Array(h), 0),
        w.set(new Uint8Array(n), h.byteLength),
        w.buffer
    }
    decode(t, r) {
        if (this._isArrayBuffer(t)) {
            let n = this._binaryDecode(t);
            return r(n)
        }
        if (typeof t == "string") {
            const n = JSON.parse(t)
              , [s,i,o,a,l] = n;
            return r({
                join_ref: s,
                ref: i,
                topic: o,
                event: a,
                payload: l
            })
        }
        return r({})
    }
    _binaryDecode(t) {
        const r = new DataView(t)
          , n = r.getUint8(0)
          , s = new TextDecoder;
        switch (n) {
        case this.KINDS.userBroadcast:
            return this._decodeUserBroadcast(t, r, s)
        }
    }
    _decodeUserBroadcast(t, r, n) {
        const s = r.getUint8(1)
          , i = r.getUint8(2)
          , o = r.getUint8(3)
          , a = r.getUint8(4);
        let l = this.HEADER_LENGTH + 4;
        const u = n.decode(t.slice(l, l + s));
        l = l + s;
        const c = n.decode(t.slice(l, l + i));
        l = l + i;
        const d = n.decode(t.slice(l, l + o));
        l = l + o;
        const f = t.slice(l, t.byteLength)
          , h = a === this.JSON_ENCODING ? JSON.parse(n.decode(f)) : f
          , y = {
            type: this.BROADCAST_EVENT,
            event: c,
            payload: h
        };
        return o > 0 && (y.meta = JSON.parse(d)),
        {
            join_ref: null,
            ref: null,
            topic: u,
            event: this.BROADCAST_EVENT,
            payload: y
        }
    }
    _isArrayBuffer(t) {
        var r;
        return t instanceof ArrayBuffer || ((r = t == null ? void 0 : t.constructor) === null || r === void 0 ? void 0 : r.name) === "ArrayBuffer"
    }
    _pick(t, r) {
        return !t || typeof t != "object" ? {} : Object.fromEntries(Object.entries(t).filter( ([n]) => r.includes(n)))
    }
}
var ie;
(function(e) {
    e.abstime = "abstime",
    e.bool = "bool",
    e.date = "date",
    e.daterange = "daterange",
    e.float4 = "float4",
    e.float8 = "float8",
    e.int2 = "int2",
    e.int4 = "int4",
    e.int4range = "int4range",
    e.int8 = "int8",
    e.int8range = "int8range",
    e.json = "json",
    e.jsonb = "jsonb",
    e.money = "money",
    e.numeric = "numeric",
    e.oid = "oid",
    e.reltime = "reltime",
    e.text = "text",
    e.time = "time",
    e.timestamp = "timestamp",
    e.timestamptz = "timestamptz",
    e.timetz = "timetz",
    e.tsrange = "tsrange",
    e.tstzrange = "tstzrange"
}
)(ie || (ie = {}));
const Zf = (e, t, r={}) => {
    var n;
    const s = (n = r.skipTypes) !== null && n !== void 0 ? n : [];
    return t ? Object.keys(t).reduce( (i, o) => (i[o] = AE(o, e, t, s),
    i), {}) : {}
}
  , AE = (e, t, r, n) => {
    const s = t.find(a => a.name === e)
      , i = s == null ? void 0 : s.type
      , o = r[e];
    return i && !n.includes(i) ? Cy(i, o) : kc(o)
}
  , Cy = (e, t) => {
    if (e.charAt(0) === "_") {
        const r = e.slice(1, e.length);
        return IE(t, r)
    }
    switch (e) {
    case ie.bool:
        return OE(t);
    case ie.float4:
    case ie.float8:
    case ie.int2:
    case ie.int4:
    case ie.int8:
    case ie.numeric:
    case ie.oid:
        return NE(t);
    case ie.json:
    case ie.jsonb:
        return jE(t);
    case ie.timestamp:
        return LE(t);
    case ie.abstime:
    case ie.date:
    case ie.daterange:
    case ie.int4range:
    case ie.int8range:
    case ie.money:
    case ie.reltime:
    case ie.text:
    case ie.time:
    case ie.timestamptz:
    case ie.timetz:
    case ie.tsrange:
    case ie.tstzrange:
        return kc(t);
    default:
        return kc(t)
    }
}
  , kc = e => e
  , OE = e => {
    switch (e) {
    case "t":
        return !0;
    case "f":
        return !1;
    default:
        return e
    }
}
  , NE = e => {
    if (typeof e == "string") {
        const t = parseFloat(e);
        if (!Number.isNaN(t))
            return t
    }
    return e
}
  , jE = e => {
    if (typeof e == "string")
        try {
            return JSON.parse(e)
        } catch {
            return e
        }
    return e
}
  , IE = (e, t) => {
    if (typeof e != "string")
        return e;
    const r = e.length - 1
      , n = e[r];
    if (e[0] === "{" && n === "}") {
        let i;
        const o = e.slice(1, r);
        try {
            i = JSON.parse("[" + o + "]")
        } catch {
            i = o ? o.split(",") : []
        }
        return i.map(a => Cy(t, a))
    }
    return e
}
  , LE = e => typeof e == "string" ? e.replace(" ", "T") : e
  , Py = e => {
    const t = new URL(e);
    return t.protocol = t.protocol.replace(/^ws/i, "http"),
    t.pathname = t.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, ""),
    t.pathname === "" || t.pathname === "/" ? t.pathname = "/api/broadcast" : t.pathname = t.pathname + "/api/broadcast",
    t.href
}
;
var xi = e => typeof e == "function" ? e : function() {
    return e
}
  , $E = typeof self < "u" ? self : null
  , Qn = typeof window < "u" ? window : null
  , Bt = $E || Qn || globalThis
  , DE = "2.0.0"
  , ME = 1e4
  , UE = 1e3
  , Vt = {
    connecting: 0,
    open: 1,
    closing: 2,
    closed: 3
}
  , Ke = {
    closed: "closed",
    errored: "errored",
    joined: "joined",
    joining: "joining",
    leaving: "leaving"
}
  , rr = {
    close: "phx_close",
    error: "phx_error",
    join: "phx_join",
    reply: "phx_reply",
    leave: "phx_leave"
}
  , Ec = {
    longpoll: "longpoll",
    websocket: "websocket"
}
  , FE = {
    complete: 4
}
  , Tc = "base64url.bearer.phx."
  , Fo = class {
    constructor(e, t, r, n) {
        this.channel = e,
        this.event = t,
        this.payload = r || function() {
            return {}
        }
        ,
        this.receivedResp = null,
        this.timeout = n,
        this.timeoutTimer = null,
        this.recHooks = [],
        this.sent = !1,
        this.ref = void 0
    }
    resend(e) {
        this.timeout = e,
        this.reset(),
        this.send()
    }
    send() {
        this.hasReceived("timeout") || (this.startTimeout(),
        this.sent = !0,
        this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload(),
            ref: this.ref,
            join_ref: this.channel.joinRef()
        }))
    }
    receive(e, t) {
        return this.hasReceived(e) && t(this.receivedResp.response),
        this.recHooks.push({
            status: e,
            callback: t
        }),
        this
    }
    reset() {
        this.cancelRefEvent(),
        this.ref = null,
        this.refEvent = null,
        this.receivedResp = null,
        this.sent = !1
    }
    destroy() {
        this.cancelRefEvent(),
        this.cancelTimeout()
    }
    matchReceive({status: e, response: t, _ref: r}) {
        this.recHooks.filter(n => n.status === e).forEach(n => n.callback(t))
    }
    cancelRefEvent() {
        this.refEvent && this.channel.off(this.refEvent)
    }
    cancelTimeout() {
        clearTimeout(this.timeoutTimer),
        this.timeoutTimer = null
    }
    startTimeout() {
        this.timeoutTimer && this.cancelTimeout(),
        this.ref = this.channel.socket.makeRef(),
        this.refEvent = this.channel.replyEventName(this.ref),
        this.channel.on(this.refEvent, e => {
            this.cancelRefEvent(),
            this.cancelTimeout(),
            this.receivedResp = e,
            this.matchReceive(e)
        }
        ),
        this.timeoutTimer = setTimeout( () => {
            this.trigger("timeout", {})
        }
        , this.timeout)
    }
    hasReceived(e) {
        return this.receivedResp && this.receivedResp.status === e
    }
    trigger(e, t) {
        this.channel.trigger(this.refEvent, {
            status: e,
            response: t
        })
    }
}
  , Ry = class {
    constructor(e, t) {
        this.callback = e,
        this.timerCalc = t,
        this.timer = void 0,
        this.tries = 0
    }
    reset() {
        this.tries = 0,
        clearTimeout(this.timer)
    }
    scheduleTimeout() {
        clearTimeout(this.timer),
        this.timer = setTimeout( () => {
            this.tries = this.tries + 1,
            this.callback()
        }
        , this.timerCalc(this.tries + 1))
    }
}
  , BE = class {
    constructor(e, t, r) {
        this.state = Ke.closed,
        this.topic = e,
        this.params = xi(t || {}),
        this.socket = r,
        this.bindings = [],
        this.bindingRef = 0,
        this.timeout = this.socket.timeout,
        this.joinedOnce = !1,
        this.joinPush = new Fo(this,rr.join,this.params,this.timeout),
        this.pushBuffer = [],
        this.stateChangeRefs = [],
        this.rejoinTimer = new Ry( () => {
            this.socket.isConnected() && this.rejoin()
        }
        ,this.socket.rejoinAfterMs),
        this.stateChangeRefs.push(this.socket.onError( () => this.rejoinTimer.reset())),
        this.stateChangeRefs.push(this.socket.onOpen( () => {
            this.rejoinTimer.reset(),
            this.isErrored() && this.rejoin()
        }
        )),
        this.joinPush.receive("ok", () => {
            this.state = Ke.joined,
            this.rejoinTimer.reset(),
            this.pushBuffer.forEach(n => n.send()),
            this.pushBuffer = []
        }
        ),
        this.joinPush.receive("error", n => {
            this.state = Ke.errored,
            this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, n),
            this.socket.isConnected() && this.rejoinTimer.scheduleTimeout()
        }
        ),
        this.onClose( () => {
            this.rejoinTimer.reset(),
            this.socket.hasLogger() && this.socket.log("channel", `close ${this.topic}`),
            this.state = Ke.closed,
            this.socket.remove(this)
        }
        ),
        this.onError(n => {
            this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, n),
            this.isJoining() && this.joinPush.reset(),
            this.state = Ke.errored,
            this.socket.isConnected() && this.rejoinTimer.scheduleTimeout()
        }
        ),
        this.joinPush.receive("timeout", () => {
            this.socket.hasLogger() && this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout),
            new Fo(this,rr.leave,xi({}),this.timeout).send(),
            this.state = Ke.errored,
            this.joinPush.reset(),
            this.socket.isConnected() && this.rejoinTimer.scheduleTimeout()
        }
        ),
        this.on(rr.reply, (n, s) => {
            this.trigger(this.replyEventName(s), n)
        }
        )
    }
    join(e=this.timeout) {
        if (this.joinedOnce)
            throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
        return this.timeout = e,
        this.joinedOnce = !0,
        this.rejoin(),
        this.joinPush
    }
    teardown() {
        this.pushBuffer.forEach(e => e.destroy()),
        this.pushBuffer = [],
        this.rejoinTimer.reset(),
        this.joinPush.destroy(),
        this.state = Ke.closed,
        this.bindings = []
    }
    onClose(e) {
        this.on(rr.close, e)
    }
    onError(e) {
        return this.on(rr.error, t => e(t))
    }
    on(e, t) {
        let r = this.bindingRef++;
        return this.bindings.push({
            event: e,
            ref: r,
            callback: t
        }),
        r
    }
    off(e, t) {
        this.bindings = this.bindings.filter(r => !(r.event === e && (typeof t > "u" || t === r.ref)))
    }
    canPush() {
        return this.socket.isConnected() && this.isJoined()
    }
    push(e, t, r=this.timeout) {
        if (t = t || {},
        !this.joinedOnce)
            throw new Error(`tried to push '${e}' to '${this.topic}' before joining. Use channel.join() before pushing events`);
        let n = new Fo(this,e,function() {
            return t
        }
        ,r);
        return this.canPush() ? n.send() : (n.startTimeout(),
        this.pushBuffer.push(n)),
        n
    }
    leave(e=this.timeout) {
        this.rejoinTimer.reset(),
        this.joinPush.cancelTimeout(),
        this.state = Ke.leaving;
        let t = () => {
            this.socket.hasLogger() && this.socket.log("channel", `leave ${this.topic}`),
            this.trigger(rr.close, "leave")
        }
          , r = new Fo(this,rr.leave,xi({}),e);
        return r.receive("ok", () => t()).receive("timeout", () => t()),
        r.send(),
        this.canPush() || r.trigger("ok", {}),
        r
    }
    onMessage(e, t, r) {
        return t
    }
    filterBindings(e, t, r) {
        return !0
    }
    isMember(e, t, r, n) {
        return this.topic !== e ? !1 : n && n !== this.joinRef() ? (this.socket.hasLogger() && this.socket.log("channel", "dropping outdated message", {
            topic: e,
            event: t,
            payload: r,
            joinRef: n
        }),
        !1) : !0
    }
    joinRef() {
        return this.joinPush.ref
    }
    rejoin(e=this.timeout) {
        this.isLeaving() || (this.socket.leaveOpenTopic(this.topic),
        this.state = Ke.joining,
        this.joinPush.resend(e))
    }
    trigger(e, t, r, n) {
        let s = this.onMessage(e, t, r, n);
        if (t && !s)
            throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
        let i = this.bindings.filter(o => o.event === e && this.filterBindings(o, t, r));
        for (let o = 0; o < i.length; o++)
            i[o].callback(s, r, n || this.joinRef())
    }
    replyEventName(e) {
        return `chan_reply_${e}`
    }
    isClosed() {
        return this.state === Ke.closed
    }
    isErrored() {
        return this.state === Ke.errored
    }
    isJoined() {
        return this.state === Ke.joined
    }
    isJoining() {
        return this.state === Ke.joining
    }
    isLeaving() {
        return this.state === Ke.leaving
    }
}
  , Ua = class {
    static request(e, t, r, n, s, i, o) {
        if (Bt.XDomainRequest) {
            let a = new Bt.XDomainRequest;
            return this.xdomainRequest(a, e, t, n, s, i, o)
        } else if (Bt.XMLHttpRequest) {
            let a = new Bt.XMLHttpRequest;
            return this.xhrRequest(a, e, t, r, n, s, i, o)
        } else {
            if (Bt.fetch && Bt.AbortController)
                return this.fetchRequest(e, t, r, n, s, i, o);
            throw new Error("No suitable XMLHttpRequest implementation found")
        }
    }
    static fetchRequest(e, t, r, n, s, i, o) {
        let a = {
            method: e,
            headers: r,
            body: n
        }
          , l = null;
        return s && (l = new AbortController,
        setTimeout( () => l.abort(), s),
        a.signal = l.signal),
        Bt.fetch(t, a).then(u => u.text()).then(u => this.parseJSON(u)).then(u => o && o(u)).catch(u => {
            u.name === "AbortError" && i ? i() : o && o(null)
        }
        ),
        l
    }
    static xdomainRequest(e, t, r, n, s, i, o) {
        return e.timeout = s,
        e.open(t, r),
        e.onload = () => {
            let a = this.parseJSON(e.responseText);
            o && o(a)
        }
        ,
        i && (e.ontimeout = i),
        e.onprogress = () => {}
        ,
        e.send(n),
        e
    }
    static xhrRequest(e, t, r, n, s, i, o, a) {
        e.open(t, r, !0),
        e.timeout = i;
        for (let[l,u] of Object.entries(n))
            e.setRequestHeader(l, u);
        return e.onerror = () => a && a(null),
        e.onreadystatechange = () => {
            if (e.readyState === FE.complete && a) {
                let l = this.parseJSON(e.responseText);
                a(l)
            }
        }
        ,
        o && (e.ontimeout = o),
        e.send(s),
        e
    }
    static parseJSON(e) {
        if (!e || e === "")
            return null;
        try {
            return JSON.parse(e)
        } catch {
            return console && console.log("failed to parse JSON response", e),
            null
        }
    }
    static serialize(e, t) {
        let r = [];
        for (var n in e) {
            if (!Object.prototype.hasOwnProperty.call(e, n))
                continue;
            let s = t ? `${t}[${n}]` : n
              , i = e[n];
            typeof i == "object" ? r.push(this.serialize(i, s)) : r.push(encodeURIComponent(s) + "=" + encodeURIComponent(i))
        }
        return r.join("&")
    }
    static appendParams(e, t) {
        if (Object.keys(t).length === 0)
            return e;
        let r = e.match(/\?/) ? "&" : "?";
        return `${e}${r}${this.serialize(t)}`
    }
}
  , zE = e => {
    let t = ""
      , r = new Uint8Array(e)
      , n = r.byteLength;
    for (let s = 0; s < n; s++)
        t += String.fromCharCode(r[s]);
    return btoa(t)
}
  , Hn = class {
    constructor(e, t) {
        t && t.length === 2 && t[1].startsWith(Tc) && (this.authToken = atob(t[1].slice(Tc.length))),
        this.endPoint = null,
        this.token = null,
        this.skipHeartbeat = !0,
        this.reqs = new Set,
        this.awaitingBatchAck = !1,
        this.currentBatch = null,
        this.currentBatchTimer = null,
        this.batchBuffer = [],
        this.onopen = function() {}
        ,
        this.onerror = function() {}
        ,
        this.onmessage = function() {}
        ,
        this.onclose = function() {}
        ,
        this.pollEndpoint = this.normalizeEndpoint(e),
        this.readyState = Vt.connecting,
        setTimeout( () => this.poll(), 0)
    }
    normalizeEndpoint(e) {
        return e.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + Ec.websocket), "$1/" + Ec.longpoll)
    }
    endpointURL() {
        return Ua.appendParams(this.pollEndpoint, {
            token: this.token
        })
    }
    closeAndRetry(e, t, r) {
        this.close(e, t, r),
        this.readyState = Vt.connecting
    }
    ontimeout() {
        this.onerror("timeout"),
        this.closeAndRetry(1005, "timeout", !1)
    }
    isActive() {
        return this.readyState === Vt.open || this.readyState === Vt.connecting
    }
    poll() {
        const e = {
            Accept: "application/json"
        };
        this.authToken && (e["X-Phoenix-AuthToken"] = this.authToken),
        this.ajax("GET", e, null, () => this.ontimeout(), t => {
            if (t) {
                var {status: r, token: n, messages: s} = t;
                if (r === 410 && this.token !== null) {
                    this.onerror(410),
                    this.closeAndRetry(3410, "session_gone", !1);
                    return
                }
                this.token = n
            } else
                r = 0;
            switch (r) {
            case 200:
                s.forEach(i => {
                    setTimeout( () => this.onmessage({
                        data: i
                    }), 0)
                }
                ),
                this.poll();
                break;
            case 204:
                this.poll();
                break;
            case 410:
                this.readyState = Vt.open,
                this.onopen({}),
                this.poll();
                break;
            case 403:
                this.onerror(403),
                this.close(1008, "forbidden", !1);
                break;
            case 0:
            case 500:
                this.onerror(500),
                this.closeAndRetry(1011, "internal server error", 500);
                break;
            default:
                throw new Error(`unhandled poll status ${r}`)
            }
        }
        )
    }
    send(e) {
        typeof e != "string" && (e = zE(e)),
        this.currentBatch ? this.currentBatch.push(e) : this.awaitingBatchAck ? this.batchBuffer.push(e) : (this.currentBatch = [e],
        this.currentBatchTimer = setTimeout( () => {
            this.batchSend(this.currentBatch),
            this.currentBatch = null
        }
        , 0))
    }
    batchSend(e) {
        this.awaitingBatchAck = !0,
        this.ajax("POST", {
            "Content-Type": "application/x-ndjson"
        }, e.join(`
`), () => this.onerror("timeout"), t => {
            this.awaitingBatchAck = !1,
            !t || t.status !== 200 ? (this.onerror(t && t.status),
            this.closeAndRetry(1011, "internal server error", !1)) : this.batchBuffer.length > 0 && (this.batchSend(this.batchBuffer),
            this.batchBuffer = [])
        }
        )
    }
    close(e, t, r) {
        for (let s of this.reqs)
            s.abort();
        this.readyState = Vt.closed;
        let n = Object.assign({
            code: 1e3,
            reason: void 0,
            wasClean: !0
        }, {
            code: e,
            reason: t,
            wasClean: r
        });
        this.batchBuffer = [],
        clearTimeout(this.currentBatchTimer),
        this.currentBatchTimer = null,
        typeof CloseEvent < "u" ? this.onclose(new CloseEvent("close",n)) : this.onclose(n)
    }
    ajax(e, t, r, n, s) {
        let i, o = () => {
            this.reqs.delete(i),
            n()
        }
        ;
        i = Ua.request(e, this.endpointURL(), t, r, this.timeout, o, a => {
            this.reqs.delete(i),
            this.isActive() && s(a)
        }
        ),
        this.reqs.add(i)
    }
}
  , HE = class ui {
    constructor(t, r={}) {
        let n = r.events || {
            state: "presence_state",
            diff: "presence_diff"
        };
        this.state = {},
        this.pendingDiffs = [],
        this.channel = t,
        this.joinRef = null,
        this.caller = {
            onJoin: function() {},
            onLeave: function() {},
            onSync: function() {}
        },
        this.channel.on(n.state, s => {
            let {onJoin: i, onLeave: o, onSync: a} = this.caller;
            this.joinRef = this.channel.joinRef(),
            this.state = ui.syncState(this.state, s, i, o),
            this.pendingDiffs.forEach(l => {
                this.state = ui.syncDiff(this.state, l, i, o)
            }
            ),
            this.pendingDiffs = [],
            a()
        }
        ),
        this.channel.on(n.diff, s => {
            let {onJoin: i, onLeave: o, onSync: a} = this.caller;
            this.inPendingSyncState() ? this.pendingDiffs.push(s) : (this.state = ui.syncDiff(this.state, s, i, o),
            a())
        }
        )
    }
    onJoin(t) {
        this.caller.onJoin = t
    }
    onLeave(t) {
        this.caller.onLeave = t
    }
    onSync(t) {
        this.caller.onSync = t
    }
    list(t) {
        return ui.list(this.state, t)
    }
    inPendingSyncState() {
        return !this.joinRef || this.joinRef !== this.channel.joinRef()
    }
    static syncState(t, r, n, s) {
        let i = this.clone(t)
          , o = {}
          , a = {};
        return this.map(i, (l, u) => {
            r[l] || (a[l] = u)
        }
        ),
        this.map(r, (l, u) => {
            let c = i[l];
            if (c) {
                let d = u.metas.map(g => g.phx_ref)
                  , f = c.metas.map(g => g.phx_ref)
                  , h = u.metas.filter(g => f.indexOf(g.phx_ref) < 0)
                  , y = c.metas.filter(g => d.indexOf(g.phx_ref) < 0);
                h.length > 0 && (o[l] = u,
                o[l].metas = h),
                y.length > 0 && (a[l] = this.clone(c),
                a[l].metas = y)
            } else
                o[l] = u
        }
        ),
        this.syncDiff(i, {
            joins: o,
            leaves: a
        }, n, s)
    }
    static syncDiff(t, r, n, s) {
        let {joins: i, leaves: o} = this.clone(r);
        return n || (n = function() {}
        ),
        s || (s = function() {}
        ),
        this.map(i, (a, l) => {
            let u = t[a];
            if (t[a] = this.clone(l),
            u) {
                let c = t[a].metas.map(f => f.phx_ref)
                  , d = u.metas.filter(f => c.indexOf(f.phx_ref) < 0);
                t[a].metas.unshift(...d)
            }
            n(a, u, l)
        }
        ),
        this.map(o, (a, l) => {
            let u = t[a];
            if (!u)
                return;
            let c = l.metas.map(d => d.phx_ref);
            u.metas = u.metas.filter(d => c.indexOf(d.phx_ref) < 0),
            s(a, u, l),
            u.metas.length === 0 && delete t[a]
        }
        ),
        t
    }
    static list(t, r) {
        return r || (r = function(n, s) {
            return s
        }
        ),
        this.map(t, (n, s) => r(n, s))
    }
    static map(t, r) {
        return Object.getOwnPropertyNames(t).map(n => r(n, t[n]))
    }
    static clone(t) {
        return JSON.parse(JSON.stringify(t))
    }
}
  , Bo = {
    HEADER_LENGTH: 1,
    META_LENGTH: 4,
    KINDS: {
        push: 0,
        reply: 1,
        broadcast: 2
    },
    encode(e, t) {
        if (e.payload.constructor === ArrayBuffer)
            return t(this.binaryEncode(e));
        {
            let r = [e.join_ref, e.ref, e.topic, e.event, e.payload];
            return t(JSON.stringify(r))
        }
    },
    decode(e, t) {
        if (e.constructor === ArrayBuffer)
            return t(this.binaryDecode(e));
        {
            let[r,n,s,i,o] = JSON.parse(e);
            return t({
                join_ref: r,
                ref: n,
                topic: s,
                event: i,
                payload: o
            })
        }
    },
    binaryEncode(e) {
        let {join_ref: t, ref: r, event: n, topic: s, payload: i} = e
          , o = this.META_LENGTH + t.length + r.length + s.length + n.length
          , a = new ArrayBuffer(this.HEADER_LENGTH + o)
          , l = new DataView(a)
          , u = 0;
        l.setUint8(u++, this.KINDS.push),
        l.setUint8(u++, t.length),
        l.setUint8(u++, r.length),
        l.setUint8(u++, s.length),
        l.setUint8(u++, n.length),
        Array.from(t, d => l.setUint8(u++, d.charCodeAt(0))),
        Array.from(r, d => l.setUint8(u++, d.charCodeAt(0))),
        Array.from(s, d => l.setUint8(u++, d.charCodeAt(0))),
        Array.from(n, d => l.setUint8(u++, d.charCodeAt(0)));
        var c = new Uint8Array(a.byteLength + i.byteLength);
        return c.set(new Uint8Array(a), 0),
        c.set(new Uint8Array(i), a.byteLength),
        c.buffer
    },
    binaryDecode(e) {
        let t = new DataView(e)
          , r = t.getUint8(0)
          , n = new TextDecoder;
        switch (r) {
        case this.KINDS.push:
            return this.decodePush(e, t, n);
        case this.KINDS.reply:
            return this.decodeReply(e, t, n);
        case this.KINDS.broadcast:
            return this.decodeBroadcast(e, t, n)
        }
    },
    decodePush(e, t, r) {
        let n = t.getUint8(1)
          , s = t.getUint8(2)
          , i = t.getUint8(3)
          , o = this.HEADER_LENGTH + this.META_LENGTH - 1
          , a = r.decode(e.slice(o, o + n));
        o = o + n;
        let l = r.decode(e.slice(o, o + s));
        o = o + s;
        let u = r.decode(e.slice(o, o + i));
        o = o + i;
        let c = e.slice(o, e.byteLength);
        return {
            join_ref: a,
            ref: null,
            topic: l,
            event: u,
            payload: c
        }
    },
    decodeReply(e, t, r) {
        let n = t.getUint8(1)
          , s = t.getUint8(2)
          , i = t.getUint8(3)
          , o = t.getUint8(4)
          , a = this.HEADER_LENGTH + this.META_LENGTH
          , l = r.decode(e.slice(a, a + n));
        a = a + n;
        let u = r.decode(e.slice(a, a + s));
        a = a + s;
        let c = r.decode(e.slice(a, a + i));
        a = a + i;
        let d = r.decode(e.slice(a, a + o));
        a = a + o;
        let f = e.slice(a, e.byteLength)
          , h = {
            status: d,
            response: f
        };
        return {
            join_ref: l,
            ref: u,
            topic: c,
            event: rr.reply,
            payload: h
        }
    },
    decodeBroadcast(e, t, r) {
        let n = t.getUint8(1)
          , s = t.getUint8(2)
          , i = this.HEADER_LENGTH + 2
          , o = r.decode(e.slice(i, i + n));
        i = i + n;
        let a = r.decode(e.slice(i, i + s));
        i = i + s;
        let l = e.slice(i, e.byteLength);
        return {
            join_ref: null,
            ref: null,
            topic: o,
            event: a,
            payload: l
        }
    }
}
  , WE = class {
    constructor(e, t={}) {
        this.stateChangeCallbacks = {
            open: [],
            close: [],
            error: [],
            message: []
        },
        this.channels = [],
        this.sendBuffer = [],
        this.ref = 0,
        this.fallbackRef = null,
        this.timeout = t.timeout || ME,
        this.transport = t.transport || Bt.WebSocket || Hn,
        this.conn = void 0,
        this.primaryPassedHealthCheck = !1,
        this.longPollFallbackMs = t.longPollFallbackMs,
        this.fallbackTimer = null,
        this.sessionStore = t.sessionStorage || Bt && Bt.sessionStorage,
        this.establishedConnections = 0,
        this.defaultEncoder = Bo.encode.bind(Bo),
        this.defaultDecoder = Bo.decode.bind(Bo),
        this.closeWasClean = !0,
        this.disconnecting = !1,
        this.binaryType = t.binaryType || "arraybuffer",
        this.connectClock = 1,
        this.pageHidden = !1,
        this.encode = void 0,
        this.decode = void 0,
        this.transport !== Hn ? (this.encode = t.encode || this.defaultEncoder,
        this.decode = t.decode || this.defaultDecoder) : (this.encode = this.defaultEncoder,
        this.decode = this.defaultDecoder);
        let r = null;
        Qn && Qn.addEventListener && (Qn.addEventListener("pagehide", n => {
            this.conn && (this.disconnect(),
            r = this.connectClock)
        }
        ),
        Qn.addEventListener("pageshow", n => {
            r === this.connectClock && (r = null,
            this.connect())
        }
        ),
        Qn.addEventListener("visibilitychange", () => {
            document.visibilityState === "hidden" ? this.pageHidden = !0 : (this.pageHidden = !1,
            !this.isConnected() && !this.closeWasClean && this.teardown( () => this.connect()))
        }
        )),
        this.heartbeatIntervalMs = t.heartbeatIntervalMs || 3e4,
        this.autoSendHeartbeat = t.autoSendHeartbeat ?? !0,
        this.heartbeatCallback = t.heartbeatCallback ?? ( () => {}
        ),
        this.rejoinAfterMs = n => t.rejoinAfterMs ? t.rejoinAfterMs(n) : [1e3, 2e3, 5e3][n - 1] || 1e4,
        this.reconnectAfterMs = n => t.reconnectAfterMs ? t.reconnectAfterMs(n) : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][n - 1] || 5e3,
        this.logger = t.logger || null,
        !this.logger && t.debug && (this.logger = (n, s, i) => {
            console.log(`${n}: ${s}`, i)
        }
        ),
        this.longpollerTimeout = t.longpollerTimeout || 2e4,
        this.params = xi(t.params || {}),
        this.endPoint = `${e}/${Ec.websocket}`,
        this.vsn = t.vsn || DE,
        this.heartbeatTimeoutTimer = null,
        this.heartbeatTimer = null,
        this.heartbeatSentAt = null,
        this.pendingHeartbeatRef = null,
        this.reconnectTimer = new Ry( () => {
            if (this.pageHidden) {
                this.log("Not reconnecting as page is hidden!"),
                this.teardown();
                return
            }
            this.teardown(async () => {
                t.beforeReconnect && await t.beforeReconnect(),
                this.connect()
            }
            )
        }
        ,this.reconnectAfterMs),
        this.authToken = t.authToken
    }
    getLongPollTransport() {
        return Hn
    }
    replaceTransport(e) {
        this.connectClock++,
        this.closeWasClean = !0,
        clearTimeout(this.fallbackTimer),
        this.reconnectTimer.reset(),
        this.conn && (this.conn.close(),
        this.conn = null),
        this.transport = e
    }
    protocol() {
        return location.protocol.match(/^https/) ? "wss" : "ws"
    }
    endPointURL() {
        let e = Ua.appendParams(Ua.appendParams(this.endPoint, this.params()), {
            vsn: this.vsn
        });
        return e.charAt(0) !== "/" ? e : e.charAt(1) === "/" ? `${this.protocol()}:${e}` : `${this.protocol()}://${location.host}${e}`
    }
    disconnect(e, t, r) {
        this.connectClock++,
        this.disconnecting = !0,
        this.closeWasClean = !0,
        clearTimeout(this.fallbackTimer),
        this.reconnectTimer.reset(),
        this.teardown( () => {
            this.disconnecting = !1,
            e && e()
        }
        , t, r)
    }
    connect(e) {
        e && (console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),
        this.params = xi(e)),
        !(this.conn && !this.disconnecting) && (this.longPollFallbackMs && this.transport !== Hn ? this.connectWithFallback(Hn, this.longPollFallbackMs) : this.transportConnect())
    }
    log(e, t, r) {
        this.logger && this.logger(e, t, r)
    }
    hasLogger() {
        return this.logger !== null
    }
    onOpen(e) {
        let t = this.makeRef();
        return this.stateChangeCallbacks.open.push([t, e]),
        t
    }
    onClose(e) {
        let t = this.makeRef();
        return this.stateChangeCallbacks.close.push([t, e]),
        t
    }
    onError(e) {
        let t = this.makeRef();
        return this.stateChangeCallbacks.error.push([t, e]),
        t
    }
    onMessage(e) {
        let t = this.makeRef();
        return this.stateChangeCallbacks.message.push([t, e]),
        t
    }
    onHeartbeat(e) {
        this.heartbeatCallback = e
    }
    ping(e) {
        if (!this.isConnected())
            return !1;
        let t = this.makeRef()
          , r = Date.now();
        this.push({
            topic: "phoenix",
            event: "heartbeat",
            payload: {},
            ref: t
        });
        let n = this.onMessage(s => {
            s.ref === t && (this.off([n]),
            e(Date.now() - r))
        }
        );
        return !0
    }
    transportName(e) {
        switch (e) {
        case Hn:
            return "LongPoll";
        default:
            return e.name
        }
    }
    transportConnect() {
        this.connectClock++,
        this.closeWasClean = !1;
        let e;
        this.authToken && (e = ["phoenix", `${Tc}${btoa(this.authToken).replace(/=/g, "")}`]),
        this.conn = new this.transport(this.endPointURL(),e),
        this.conn.binaryType = this.binaryType,
        this.conn.timeout = this.longpollerTimeout,
        this.conn.onopen = () => this.onConnOpen(),
        this.conn.onerror = t => this.onConnError(t),
        this.conn.onmessage = t => this.onConnMessage(t),
        this.conn.onclose = t => this.onConnClose(t)
    }
    getSession(e) {
        return this.sessionStore && this.sessionStore.getItem(e)
    }
    storeSession(e, t) {
        this.sessionStore && this.sessionStore.setItem(e, t)
    }
    connectWithFallback(e, t=2500) {
        clearTimeout(this.fallbackTimer);
        let r = !1, n = !0, s, i, o = this.transportName(e), a = l => {
            this.log("transport", `falling back to ${o}...`, l),
            this.off([s, i]),
            n = !1,
            this.replaceTransport(e),
            this.transportConnect()
        }
        ;
        if (this.getSession(`phx:fallback:${o}`))
            return a("memorized");
        this.fallbackTimer = setTimeout(a, t),
        i = this.onError(l => {
            this.log("transport", "error", l),
            n && !r && (clearTimeout(this.fallbackTimer),
            a(l))
        }
        ),
        this.fallbackRef && this.off([this.fallbackRef]),
        this.fallbackRef = this.onOpen( () => {
            if (r = !0,
            !n) {
                let l = this.transportName(e);
                return this.primaryPassedHealthCheck || this.storeSession(`phx:fallback:${l}`, "true"),
                this.log("transport", `established ${l} fallback`)
            }
            clearTimeout(this.fallbackTimer),
            this.fallbackTimer = setTimeout(a, t),
            this.ping(l => {
                this.log("transport", "connected to primary after", l),
                this.primaryPassedHealthCheck = !0,
                clearTimeout(this.fallbackTimer)
            }
            )
        }
        ),
        this.transportConnect()
    }
    clearHeartbeats() {
        clearTimeout(this.heartbeatTimer),
        clearTimeout(this.heartbeatTimeoutTimer)
    }
    onConnOpen() {
        this.hasLogger() && this.log("transport", `connected to ${this.endPointURL()}`),
        this.closeWasClean = !1,
        this.disconnecting = !1,
        this.establishedConnections++,
        this.flushSendBuffer(),
        this.reconnectTimer.reset(),
        this.autoSendHeartbeat && this.resetHeartbeat(),
        this.triggerStateCallbacks("open")
    }
    heartbeatTimeout() {
        if (this.pendingHeartbeatRef) {
            this.pendingHeartbeatRef = null,
            this.heartbeatSentAt = null,
            this.hasLogger() && this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
            try {
                this.heartbeatCallback("timeout")
            } catch (e) {
                this.log("error", "error in heartbeat callback", e)
            }
            this.triggerChanError(),
            this.closeWasClean = !1,
            this.teardown( () => this.reconnectTimer.scheduleTimeout(), UE, "heartbeat timeout")
        }
    }
    resetHeartbeat() {
        this.conn && this.conn.skipHeartbeat || (this.pendingHeartbeatRef = null,
        this.clearHeartbeats(),
        this.heartbeatTimer = setTimeout( () => this.sendHeartbeat(), this.heartbeatIntervalMs))
    }
    teardown(e, t, r) {
        if (!this.conn)
            return e && e();
        const n = this.conn;
        this.waitForBufferDone(n, () => {
            t ? n.close(t, r || "") : n.close(),
            this.waitForSocketClosed(n, () => {
                this.conn === n && (this.conn.onopen = function() {}
                ,
                this.conn.onerror = function() {}
                ,
                this.conn.onmessage = function() {}
                ,
                this.conn.onclose = function() {}
                ,
                this.conn = null),
                e && e()
            }
            )
        }
        )
    }
    waitForBufferDone(e, t, r=1) {
        if (r === 5 || !e.bufferedAmount) {
            t();
            return
        }
        setTimeout( () => {
            this.waitForBufferDone(e, t, r + 1)
        }
        , 150 * r)
    }
    waitForSocketClosed(e, t, r=1) {
        if (r === 5 || e.readyState === Vt.closed) {
            t();
            return
        }
        setTimeout( () => {
            this.waitForSocketClosed(e, t, r + 1)
        }
        , 150 * r)
    }
    onConnClose(e) {
        this.conn && (this.conn.onclose = () => {}
        ),
        this.hasLogger() && this.log("transport", "close", e),
        this.triggerChanError(),
        this.clearHeartbeats(),
        this.closeWasClean || this.reconnectTimer.scheduleTimeout(),
        this.triggerStateCallbacks("close", e)
    }
    onConnError(e) {
        this.hasLogger() && this.log("transport", e);
        let t = this.transport
          , r = this.establishedConnections;
        this.triggerStateCallbacks("error", e, t, r),
        (t === this.transport || r > 0) && this.triggerChanError()
    }
    triggerChanError() {
        this.channels.forEach(e => {
            e.isErrored() || e.isLeaving() || e.isClosed() || e.trigger(rr.error)
        }
        )
    }
    connectionState() {
        switch (this.conn && this.conn.readyState) {
        case Vt.connecting:
            return "connecting";
        case Vt.open:
            return "open";
        case Vt.closing:
            return "closing";
        default:
            return "closed"
        }
    }
    isConnected() {
        return this.connectionState() === "open"
    }
    remove(e) {
        this.off(e.stateChangeRefs),
        this.channels = this.channels.filter(t => t !== e)
    }
    off(e) {
        for (let t in this.stateChangeCallbacks)
            this.stateChangeCallbacks[t] = this.stateChangeCallbacks[t].filter( ([r]) => e.indexOf(r) === -1)
    }
    channel(e, t={}) {
        let r = new BE(e,t,this);
        return this.channels.push(r),
        r
    }
    push(e) {
        if (this.hasLogger()) {
            let {topic: t, event: r, payload: n, ref: s, join_ref: i} = e;
            this.log("push", `${t} ${r} (${i}, ${s})`, n)
        }
        this.isConnected() ? this.encode(e, t => this.conn.send(t)) : this.sendBuffer.push( () => this.encode(e, t => this.conn.send(t)))
    }
    makeRef() {
        let e = this.ref + 1;
        return e === this.ref ? this.ref = 0 : this.ref = e,
        this.ref.toString()
    }
    sendHeartbeat() {
        if (!this.isConnected()) {
            try {
                this.heartbeatCallback("disconnected")
            } catch (e) {
                this.log("error", "error in heartbeat callback", e)
            }
            return
        }
        if (this.pendingHeartbeatRef) {
            this.heartbeatTimeout();
            return
        }
        this.pendingHeartbeatRef = this.makeRef(),
        this.heartbeatSentAt = Date.now(),
        this.push({
            topic: "phoenix",
            event: "heartbeat",
            payload: {},
            ref: this.pendingHeartbeatRef
        });
        try {
            this.heartbeatCallback("sent")
        } catch (e) {
            this.log("error", "error in heartbeat callback", e)
        }
        this.heartbeatTimeoutTimer = setTimeout( () => this.heartbeatTimeout(), this.heartbeatIntervalMs)
    }
    flushSendBuffer() {
        this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(e => e()),
        this.sendBuffer = [])
    }
    onConnMessage(e) {
        this.decode(e.data, t => {
            let {topic: r, event: n, payload: s, ref: i, join_ref: o} = t;
            if (i && i === this.pendingHeartbeatRef) {
                const a = this.heartbeatSentAt ? Date.now() - this.heartbeatSentAt : void 0;
                this.clearHeartbeats();
                try {
                    this.heartbeatCallback(s.status === "ok" ? "ok" : "error", a)
                } catch (l) {
                    this.log("error", "error in heartbeat callback", l)
                }
                this.pendingHeartbeatRef = null,
                this.heartbeatSentAt = null,
                this.autoSendHeartbeat && (this.heartbeatTimer = setTimeout( () => this.sendHeartbeat(), this.heartbeatIntervalMs))
            }
            this.hasLogger() && this.log("receive", `${s.status || ""} ${r} ${n} ${i && "(" + i + ")" || ""}`.trim(), s);
            for (let a = 0; a < this.channels.length; a++) {
                const l = this.channels[a];
                l.isMember(r, n, s, o) && l.trigger(n, s, i, o)
            }
            this.triggerStateCallbacks("message", t)
        }
        )
    }
    triggerStateCallbacks(e, ...t) {
        try {
            this.stateChangeCallbacks[e].forEach( ([r,n]) => {
                try {
                    n(...t)
                } catch (s) {
                    this.log("error", `error in ${e} callback`, s)
                }
            }
            )
        } catch (r) {
            this.log("error", `error triggering ${e} callbacks`, r)
        }
    }
    leaveOpenTopic(e) {
        let t = this.channels.find(r => r.topic === e && (r.isJoined() || r.isJoining()));
        t && (this.hasLogger() && this.log("transport", `leaving duplicate topic "${e}"`),
        t.leave())
    }
}
;
class _i {
    constructor(t, r) {
        const n = KE(r);
        this.presence = new HE(t.getChannel(),n),
        this.presence.onJoin( (s, i, o) => {
            const a = _i.onJoinPayload(s, i, o);
            t.getChannel().trigger("presence", a)
        }
        ),
        this.presence.onLeave( (s, i, o) => {
            const a = _i.onLeavePayload(s, i, o);
            t.getChannel().trigger("presence", a)
        }
        ),
        this.presence.onSync( () => {
            t.getChannel().trigger("presence", {
                event: "sync"
            })
        }
        )
    }
    get state() {
        return _i.transformState(this.presence.state)
    }
    static transformState(t) {
        return t = VE(t),
        Object.getOwnPropertyNames(t).reduce( (r, n) => {
            const s = t[n];
            return r[n] = la(s),
            r
        }
        , {})
    }
    static onJoinPayload(t, r, n) {
        const s = ep(r)
          , i = la(n);
        return {
            event: "join",
            key: t,
            currentPresences: s,
            newPresences: i
        }
    }
    static onLeavePayload(t, r, n) {
        const s = ep(r)
          , i = la(n);
        return {
            event: "leave",
            key: t,
            currentPresences: s,
            leftPresences: i
        }
    }
}
function la(e) {
    return e.metas.map(t => (t.presence_ref = t.phx_ref,
    delete t.phx_ref,
    delete t.phx_ref_prev,
    t))
}
function VE(e) {
    return JSON.parse(JSON.stringify(e))
}
function KE(e) {
    return (e == null ? void 0 : e.events) && {
        events: e.events
    }
}
function ep(e) {
    return e != null && e.metas ? la(e) : []
}
var tp;
(function(e) {
    e.SYNC = "sync",
    e.JOIN = "join",
    e.LEAVE = "leave"
}
)(tp || (tp = {}));
class qE {
    get state() {
        return this.presenceAdapter.state
    }
    constructor(t, r) {
        this.channel = t,
        this.presenceAdapter = new _i(this.channel.channelAdapter,r)
    }
}
class GE {
    constructor(t, r, n) {
        const s = JE(n);
        this.channel = t.getSocket().channel(r, s),
        this.socket = t
    }
    get state() {
        return this.channel.state
    }
    set state(t) {
        this.channel.state = t
    }
    get joinedOnce() {
        return this.channel.joinedOnce
    }
    get joinPush() {
        return this.channel.joinPush
    }
    get rejoinTimer() {
        return this.channel.rejoinTimer
    }
    on(t, r) {
        return this.channel.on(t, r)
    }
    off(t, r) {
        this.channel.off(t, r)
    }
    subscribe(t) {
        return this.channel.join(t)
    }
    unsubscribe(t) {
        return this.channel.leave(t)
    }
    teardown() {
        this.channel.teardown()
    }
    onClose(t) {
        this.channel.onClose(t)
    }
    onError(t) {
        return this.channel.onError(t)
    }
    push(t, r, n) {
        let s;
        try {
            s = this.channel.push(t, r, n)
        } catch {
            throw `tried to push '${t}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`
        }
        if (this.channel.pushBuffer.length > PE) {
            const i = this.channel.pushBuffer.shift();
            i.cancelTimeout(),
            this.socket.log("channel", `discarded push due to buffer overflow: ${i.event}`, i.payload())
        }
        return s
    }
    updateJoinPayload(t) {
        const r = this.channel.joinPush.payload();
        this.channel.joinPush.payload = () => Object.assign(Object.assign({}, r), t)
    }
    canPush() {
        return this.socket.isConnected() && this.state === Or.joined
    }
    isJoined() {
        return this.state === Or.joined
    }
    isJoining() {
        return this.state === Or.joining
    }
    isClosed() {
        return this.state === Or.closed
    }
    isLeaving() {
        return this.state === Or.leaving
    }
    updateFilterBindings(t) {
        this.channel.filterBindings = t
    }
    updatePayloadTransform(t) {
        this.channel.onMessage = t
    }
    getChannel() {
        return this.channel
    }
}
function JE(e) {
    return {
        config: Object.assign({
            broadcast: {
                ack: !1,
                self: !1
            },
            presence: {
                key: "",
                enabled: !1
            },
            private: !1
        }, e.config)
    }
}
var rp;
(function(e) {
    e.ALL = "*",
    e.INSERT = "INSERT",
    e.UPDATE = "UPDATE",
    e.DELETE = "DELETE"
}
)(rp || (rp = {}));
var Si;
(function(e) {
    e.BROADCAST = "broadcast",
    e.PRESENCE = "presence",
    e.POSTGRES_CHANGES = "postgres_changes",
    e.SYSTEM = "system"
}
)(Si || (Si = {}));
var nr;
(function(e) {
    e.SUBSCRIBED = "SUBSCRIBED",
    e.TIMED_OUT = "TIMED_OUT",
    e.CLOSED = "CLOSED",
    e.CHANNEL_ERROR = "CHANNEL_ERROR"
}
)(nr || (nr = {}));
class ki {
    get state() {
        return this.channelAdapter.state
    }
    set state(t) {
        this.channelAdapter.state = t
    }
    get joinedOnce() {
        return this.channelAdapter.joinedOnce
    }
    get timeout() {
        return this.socket.timeout
    }
    get joinPush() {
        return this.channelAdapter.joinPush
    }
    get rejoinTimer() {
        return this.channelAdapter.rejoinTimer
    }
    constructor(t, r={
        config: {}
    }, n) {
        var s, i;
        if (this.topic = t,
        this.params = r,
        this.socket = n,
        this.bindings = {},
        this.subTopic = t.replace(/^realtime:/i, ""),
        this.params.config = Object.assign({
            broadcast: {
                ack: !1,
                self: !1
            },
            presence: {
                key: "",
                enabled: !1
            },
            private: !1
        }, r.config),
        this.channelAdapter = new GE(this.socket.socketAdapter,t,this.params),
        this.presence = new qE(this),
        this._onClose( () => {
            this.socket._remove(this)
        }
        ),
        this._updateFilterTransform(),
        this.broadcastEndpointURL = Py(this.socket.socketAdapter.endPointURL()),
        this.private = this.params.config.private || !1,
        !this.private && (!((i = (s = this.params.config) === null || s === void 0 ? void 0 : s.broadcast) === null || i === void 0) && i.replay))
            throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`
    }
    subscribe(t, r=this.timeout) {
        var n, s, i;
        if (this.socket.isConnected() || this.socket.connect(),
        this.channelAdapter.isClosed()) {
            const {config: {broadcast: o, presence: a, private: l}} = this.params
              , u = (s = (n = this.bindings.postgres_changes) === null || n === void 0 ? void 0 : n.map(h => h.filter)) !== null && s !== void 0 ? s : []
              , c = !!this.bindings[Si.PRESENCE] && this.bindings[Si.PRESENCE].length > 0 || ((i = this.params.config.presence) === null || i === void 0 ? void 0 : i.enabled) === !0
              , d = {}
              , f = {
                broadcast: o,
                presence: Object.assign(Object.assign({}, a), {
                    enabled: c
                }),
                postgres_changes: u,
                private: l
            };
            this.socket.accessTokenValue && (d.access_token = this.socket.accessTokenValue),
            this._onError(h => {
                t == null || t(nr.CHANNEL_ERROR, h)
            }
            ),
            this._onClose( () => t == null ? void 0 : t(nr.CLOSED)),
            this.updateJoinPayload(Object.assign({
                config: f
            }, d)),
            this._updateFilterMessage(),
            this.channelAdapter.subscribe(r).receive("ok", async ({postgres_changes: h}) => {
                if (this.socket._isManualToken() || this.socket.setAuth(),
                h === void 0) {
                    t == null || t(nr.SUBSCRIBED);
                    return
                }
                this._updatePostgresBindings(h, t)
            }
            ).receive("error", h => {
                this.state = Or.errored,
                t == null || t(nr.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(h).join(", ") || "error")))
            }
            ).receive("timeout", () => {
                t == null || t(nr.TIMED_OUT)
            }
            )
        }
        return this
    }
    _updatePostgresBindings(t, r) {
        var n;
        const s = this.bindings.postgres_changes
          , i = (n = s == null ? void 0 : s.length) !== null && n !== void 0 ? n : 0
          , o = [];
        for (let a = 0; a < i; a++) {
            const l = s[a]
              , {filter: {event: u, schema: c, table: d, filter: f}} = l
              , h = t && t[a];
            if (h && h.event === u && ki.isFilterValueEqual(h.schema, c) && ki.isFilterValueEqual(h.table, d) && ki.isFilterValueEqual(h.filter, f))
                o.push(Object.assign(Object.assign({}, l), {
                    id: h.id
                }));
            else {
                this.unsubscribe(),
                this.state = Or.errored,
                r == null || r(nr.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
                return
            }
        }
        this.bindings.postgres_changes = o,
        this.state != Or.errored && r && r(nr.SUBSCRIBED)
    }
    presenceState() {
        return this.presence.state
    }
    async track(t, r={}) {
        return await this.send({
            type: "presence",
            event: "track",
            payload: t
        }, r.timeout || this.timeout)
    }
    async untrack(t={}) {
        return await this.send({
            type: "presence",
            event: "untrack"
        }, t)
    }
    on(t, r, n) {
        if (this.channelAdapter.isJoined() && t === Si.PRESENCE)
            throw this.socket.log("channel", `cannot add presence callbacks for ${this.topic} after joining.`),
            new Error("cannot add presence callbacks after joining a channel");
        return this._on(t, r, n)
    }
    async httpSend(t, r, n={}) {
        var s;
        if (r == null)
            return Promise.reject("Payload is required for httpSend()");
        const i = {
            apikey: this.socket.apiKey ? this.socket.apiKey : "",
            "Content-Type": "application/json"
        };
        this.socket.accessTokenValue && (i.Authorization = `Bearer ${this.socket.accessTokenValue}`);
        const o = {
            method: "POST",
            headers: i,
            body: JSON.stringify({
                messages: [{
                    topic: this.subTopic,
                    event: t,
                    payload: r,
                    private: this.private
                }]
            })
        }
          , a = await this._fetchWithTimeout(this.broadcastEndpointURL, o, (s = n.timeout) !== null && s !== void 0 ? s : this.timeout);
        if (a.status === 202)
            return {
                success: !0
            };
        let l = a.statusText;
        try {
            const u = await a.json();
            l = u.error || u.message || l
        } catch {}
        return Promise.reject(new Error(l))
    }
    async send(t, r={}) {
        var n, s;
        if (!this.channelAdapter.canPush() && t.type === "broadcast") {
            console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");
            const {event: i, payload: o} = t
              , a = {
                apikey: this.socket.apiKey ? this.socket.apiKey : "",
                "Content-Type": "application/json"
            };
            this.socket.accessTokenValue && (a.Authorization = `Bearer ${this.socket.accessTokenValue}`);
            const l = {
                method: "POST",
                headers: a,
                body: JSON.stringify({
                    messages: [{
                        topic: this.subTopic,
                        event: i,
                        payload: o,
                        private: this.private
                    }]
                })
            };
            try {
                const u = await this._fetchWithTimeout(this.broadcastEndpointURL, l, (n = r.timeout) !== null && n !== void 0 ? n : this.timeout);
                return await ((s = u.body) === null || s === void 0 ? void 0 : s.cancel()),
                u.ok ? "ok" : "error"
            } catch (u) {
                return u.name === "AbortError" ? "timed out" : "error"
            }
        } else
            return new Promise(i => {
                var o, a, l;
                const u = this.channelAdapter.push(t.type, t, r.timeout || this.timeout);
                t.type === "broadcast" && !(!((l = (a = (o = this.params) === null || o === void 0 ? void 0 : o.config) === null || a === void 0 ? void 0 : a.broadcast) === null || l === void 0) && l.ack) && i("ok"),
                u.receive("ok", () => i("ok")),
                u.receive("error", () => i("error")),
                u.receive("timeout", () => i("timed out"))
            }
            )
    }
    updateJoinPayload(t) {
        this.channelAdapter.updateJoinPayload(t)
    }
    async unsubscribe(t=this.timeout) {
        return new Promise(r => {
            this.channelAdapter.unsubscribe(t).receive("ok", () => r("ok")).receive("timeout", () => r("timed out")).receive("error", () => r("error"))
        }
        )
    }
    teardown() {
        this.channelAdapter.teardown()
    }
    async _fetchWithTimeout(t, r, n) {
        const s = new AbortController
          , i = setTimeout( () => s.abort(), n)
          , o = await this.socket.fetch(t, Object.assign(Object.assign({}, r), {
            signal: s.signal
        }));
        return clearTimeout(i),
        o
    }
    _on(t, r, n) {
        const s = t.toLocaleLowerCase()
          , i = this.channelAdapter.on(t, n)
          , o = {
            type: s,
            filter: r,
            callback: n,
            ref: i
        };
        return this.bindings[s] ? this.bindings[s].push(o) : this.bindings[s] = [o],
        this._updateFilterMessage(),
        this
    }
    _onClose(t) {
        this.channelAdapter.onClose(t)
    }
    _onError(t) {
        this.channelAdapter.onError(t)
    }
    _updateFilterMessage() {
        this.channelAdapter.updateFilterBindings( (t, r, n) => {
            var s, i, o, a, l, u, c;
            const d = t.event.toLocaleLowerCase();
            if (this._notThisChannelEvent(d, n))
                return !1;
            const f = (s = this.bindings[d]) === null || s === void 0 ? void 0 : s.find(h => h.ref === t.ref);
            if (!f)
                return !0;
            if (["broadcast", "presence", "postgres_changes"].includes(d))
                if ("id"in f) {
                    const h = f.id
                      , y = (i = f.filter) === null || i === void 0 ? void 0 : i.event;
                    return h && ((o = r.ids) === null || o === void 0 ? void 0 : o.includes(h)) && (y === "*" || (y == null ? void 0 : y.toLocaleLowerCase()) === ((a = r.data) === null || a === void 0 ? void 0 : a.type.toLocaleLowerCase()))
                } else {
                    const h = (u = (l = f == null ? void 0 : f.filter) === null || l === void 0 ? void 0 : l.event) === null || u === void 0 ? void 0 : u.toLocaleLowerCase();
                    return h === "*" || h === ((c = r == null ? void 0 : r.event) === null || c === void 0 ? void 0 : c.toLocaleLowerCase())
                }
            else
                return f.type.toLocaleLowerCase() === d
        }
        )
    }
    _notThisChannelEvent(t, r) {
        const {close: n, error: s, leave: i, join: o} = Ty;
        return r && [n, s, i, o].includes(t) && r !== this.joinPush.ref
    }
    _updateFilterTransform() {
        this.channelAdapter.updatePayloadTransform( (t, r, n) => {
            if (typeof r == "object" && "ids"in r) {
                const s = r.data
                  , {schema: i, table: o, commit_timestamp: a, type: l, errors: u} = s;
                return Object.assign(Object.assign({}, {
                    schema: i,
                    table: o,
                    commit_timestamp: a,
                    eventType: l,
                    new: {},
                    old: {},
                    errors: u
                }), this._getPayloadRecords(s))
            }
            return r
        }
        )
    }
    static isFilterValueEqual(t, r) {
        return (t ?? void 0) === (r ?? void 0)
    }
    _getPayloadRecords(t) {
        const r = {
            new: {},
            old: {}
        };
        return (t.type === "INSERT" || t.type === "UPDATE") && (r.new = Zf(t.columns, t.record)),
        (t.type === "UPDATE" || t.type === "DELETE") && (r.old = Zf(t.columns, t.old_record)),
        r
    }
}
class QE {
    constructor(t, r) {
        this.socket = new WE(t,r)
    }
    get timeout() {
        return this.socket.timeout
    }
    get endPoint() {
        return this.socket.endPoint
    }
    get transport() {
        return this.socket.transport
    }
    get heartbeatIntervalMs() {
        return this.socket.heartbeatIntervalMs
    }
    get heartbeatCallback() {
        return this.socket.heartbeatCallback
    }
    set heartbeatCallback(t) {
        this.socket.heartbeatCallback = t
    }
    get heartbeatTimer() {
        return this.socket.heartbeatTimer
    }
    get pendingHeartbeatRef() {
        return this.socket.pendingHeartbeatRef
    }
    get reconnectTimer() {
        return this.socket.reconnectTimer
    }
    get vsn() {
        return this.socket.vsn
    }
    get encode() {
        return this.socket.encode
    }
    get decode() {
        return this.socket.decode
    }
    get reconnectAfterMs() {
        return this.socket.reconnectAfterMs
    }
    get sendBuffer() {
        return this.socket.sendBuffer
    }
    get stateChangeCallbacks() {
        return this.socket.stateChangeCallbacks
    }
    connect() {
        this.socket.connect()
    }
    disconnect(t, r, n, s=1e4) {
        return new Promise(i => {
            setTimeout( () => i("timeout"), s),
            this.socket.disconnect( () => {
                t(),
                i("ok")
            }
            , r, n)
        }
        )
    }
    push(t) {
        this.socket.push(t)
    }
    log(t, r, n) {
        this.socket.log(t, r, n)
    }
    makeRef() {
        return this.socket.makeRef()
    }
    onOpen(t) {
        this.socket.onOpen(t)
    }
    onClose(t) {
        this.socket.onClose(t)
    }
    onError(t) {
        this.socket.onError(t)
    }
    onMessage(t) {
        this.socket.onMessage(t)
    }
    isConnected() {
        return this.socket.isConnected()
    }
    isConnecting() {
        return this.socket.connectionState() == Sc.connecting
    }
    isDisconnecting() {
        return this.socket.connectionState() == Sc.closing
    }
    connectionState() {
        return this.socket.connectionState()
    }
    endPointURL() {
        return this.socket.endPointURL()
    }
    sendHeartbeat() {
        this.socket.sendHeartbeat()
    }
    getSocket() {
        return this.socket
    }
}
const YE = {
    HEARTBEAT_INTERVAL: 25e3,
    RECONNECT_DELAY: 10,
    HEARTBEAT_TIMEOUT_FALLBACK: 100
}
  , XE = [1e3, 2e3, 5e3, 1e4]
  , ZE = 1e4
  , eT = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class tT {
    get endPoint() {
        return this.socketAdapter.endPoint
    }
    get timeout() {
        return this.socketAdapter.timeout
    }
    get transport() {
        return this.socketAdapter.transport
    }
    get heartbeatCallback() {
        return this.socketAdapter.heartbeatCallback
    }
    get heartbeatIntervalMs() {
        return this.socketAdapter.heartbeatIntervalMs
    }
    get heartbeatTimer() {
        return this.worker ? this._workerHeartbeatTimer : this.socketAdapter.heartbeatTimer
    }
    get pendingHeartbeatRef() {
        return this.worker ? this._pendingWorkerHeartbeatRef : this.socketAdapter.pendingHeartbeatRef
    }
    get reconnectTimer() {
        return this.socketAdapter.reconnectTimer
    }
    get vsn() {
        return this.socketAdapter.vsn
    }
    get encode() {
        return this.socketAdapter.encode
    }
    get decode() {
        return this.socketAdapter.decode
    }
    get reconnectAfterMs() {
        return this.socketAdapter.reconnectAfterMs
    }
    get sendBuffer() {
        return this.socketAdapter.sendBuffer
    }
    get stateChangeCallbacks() {
        return this.socketAdapter.stateChangeCallbacks
    }
    constructor(t, r) {
        var n;
        if (this.channels = new Array,
        this.accessTokenValue = null,
        this.accessToken = null,
        this.apiKey = null,
        this.httpEndpoint = "",
        this.headers = {},
        this.params = {},
        this.ref = 0,
        this.serializer = new RE,
        this._manuallySetToken = !1,
        this._authPromise = null,
        this._workerHeartbeatTimer = void 0,
        this._pendingWorkerHeartbeatRef = null,
        this._resolveFetch = i => i ? (...o) => i(...o) : (...o) => fetch(...o),
        !(!((n = r == null ? void 0 : r.params) === null || n === void 0) && n.apikey))
            throw new Error("API key is required to connect to Realtime");
        this.apiKey = r.params.apikey;
        const s = this._initializeOptions(r);
        this.socketAdapter = new QE(t,s),
        this.httpEndpoint = Py(t),
        this.fetch = this._resolveFetch(r == null ? void 0 : r.fetch)
    }
    connect() {
        if (!(this.isConnecting() || this.isDisconnecting() || this.isConnected())) {
            this.accessToken && !this._authPromise && this._setAuthSafely("connect"),
            this._setupConnectionHandlers();
            try {
                this.socketAdapter.connect()
            } catch (t) {
                const r = t.message;
                throw r.includes("Node.js") ? new Error(`${r}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`) : new Error(`WebSocket not available: ${r}`)
            }
            this._handleNodeJsRaceCondition()
        }
    }
    endpointURL() {
        return this.socketAdapter.endPointURL()
    }
    async disconnect(t, r) {
        return this.isDisconnecting() ? "ok" : await this.socketAdapter.disconnect( () => {
            clearInterval(this._workerHeartbeatTimer),
            this._terminateWorker()
        }
        , t, r)
    }
    getChannels() {
        return this.channels
    }
    async removeChannel(t) {
        const r = await t.unsubscribe();
        return r === "ok" && t.teardown(),
        this.channels.length === 0 && this.disconnect(),
        r
    }
    async removeAllChannels() {
        const t = this.channels.map(async n => {
            const s = await n.unsubscribe();
            return n.teardown(),
            s
        }
        )
          , r = await Promise.all(t);
        return this.disconnect(),
        r
    }
    log(t, r, n) {
        this.socketAdapter.log(t, r, n)
    }
    connectionState() {
        return this.socketAdapter.connectionState() || Sc.closed
    }
    isConnected() {
        return this.socketAdapter.isConnected()
    }
    isConnecting() {
        return this.socketAdapter.isConnecting()
    }
    isDisconnecting() {
        return this.socketAdapter.isDisconnecting()
    }
    channel(t, r={
        config: {}
    }) {
        const n = `realtime:${t}`
          , s = this.getChannels().find(i => i.topic === n);
        if (s)
            return s;
        {
            const i = new ki(`realtime:${t}`,r,this);
            return this.channels.push(i),
            i
        }
    }
    push(t) {
        this.socketAdapter.push(t)
    }
    async setAuth(t=null) {
        this._authPromise = this._performAuth(t);
        try {
            await this._authPromise
        } finally {
            this._authPromise = null
        }
    }
    _isManualToken() {
        return this._manuallySetToken
    }
    async sendHeartbeat() {
        this.socketAdapter.sendHeartbeat()
    }
    onHeartbeat(t) {
        this.socketAdapter.heartbeatCallback = this._wrapHeartbeatCallback(t)
    }
    _makeRef() {
        return this.socketAdapter.makeRef()
    }
    _remove(t) {
        this.channels = this.channels.filter(r => r.topic !== t.topic)
    }
    async _performAuth(t=null) {
        let r, n = !1;
        if (t)
            r = t,
            n = !0;
        else if (this.accessToken)
            try {
                r = await this.accessToken()
            } catch (s) {
                this.log("error", "Error fetching access token from callback", s),
                r = this.accessTokenValue
            }
        else
            r = this.accessTokenValue;
        n ? this._manuallySetToken = !0 : this.accessToken && (this._manuallySetToken = !1),
        this.accessTokenValue != r && (this.accessTokenValue = r,
        this.channels.forEach(s => {
            const i = {
                access_token: r,
                version: kE
            };
            r && s.updateJoinPayload(i),
            s.joinedOnce && s.channelAdapter.isJoined() && s.channelAdapter.push(Ty.access_token, {
                access_token: r
            })
        }
        ))
    }
    async _waitForAuthIfNeeded() {
        this._authPromise && await this._authPromise
    }
    _setAuthSafely(t="general") {
        this._isManualToken() || this.setAuth().catch(r => {
            this.log("error", `Error setting auth in ${t}`, r)
        }
        )
    }
    _setupConnectionHandlers() {
        this.socketAdapter.onOpen( () => {
            (this._authPromise || (this.accessToken && !this.accessTokenValue ? this.setAuth() : Promise.resolve())).catch(r => {
                this.log("error", "error waiting for auth on connect", r)
            }
            ),
            this.worker && !this.workerRef && this._startWorkerHeartbeat()
        }
        ),
        this.socketAdapter.onClose( () => {
            this.worker && this.workerRef && this._terminateWorker()
        }
        ),
        this.socketAdapter.onMessage(t => {
            t.ref && t.ref === this._pendingWorkerHeartbeatRef && (this._pendingWorkerHeartbeatRef = null)
        }
        )
    }
    _handleNodeJsRaceCondition() {
        this.socketAdapter.isConnected() && this.socketAdapter.getSocket().onConnOpen()
    }
    _wrapHeartbeatCallback(t) {
        return (r, n) => {
            r == "sent" && this._setAuthSafely(),
            t && t(r, n)
        }
    }
    _startWorkerHeartbeat() {
        this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
        const t = this._workerObjectUrl(this.workerUrl);
        this.workerRef = new Worker(t),
        this.workerRef.onerror = r => {
            this.log("worker", "worker error", r.message),
            this._terminateWorker(),
            this.disconnect()
        }
        ,
        this.workerRef.onmessage = r => {
            r.data.event === "keepAlive" && this.sendHeartbeat()
        }
        ,
        this.workerRef.postMessage({
            event: "start",
            interval: this.heartbeatIntervalMs
        })
    }
    _terminateWorker() {
        this.workerRef && (this.log("worker", "terminating worker"),
        this.workerRef.terminate(),
        this.workerRef = void 0)
    }
    _workerObjectUrl(t) {
        let r;
        if (t)
            r = t;
        else {
            const n = new Blob([eT],{
                type: "application/javascript"
            });
            r = URL.createObjectURL(n)
        }
        return r
    }
    _initializeOptions(t) {
        var r, n, s, i, o, a, l, u, c;
        this.worker = (r = t == null ? void 0 : t.worker) !== null && r !== void 0 ? r : !1,
        this.accessToken = (n = t == null ? void 0 : t.accessToken) !== null && n !== void 0 ? n : null;
        const d = {};
        d.timeout = (s = t == null ? void 0 : t.timeout) !== null && s !== void 0 ? s : CE,
        d.heartbeatIntervalMs = (i = t == null ? void 0 : t.heartbeatIntervalMs) !== null && i !== void 0 ? i : YE.HEARTBEAT_INTERVAL,
        d.transport = (o = t == null ? void 0 : t.transport) !== null && o !== void 0 ? o : _E.getWebSocketConstructor(),
        d.params = t == null ? void 0 : t.params,
        d.logger = t == null ? void 0 : t.logger,
        d.heartbeatCallback = this._wrapHeartbeatCallback(t == null ? void 0 : t.heartbeatCallback),
        d.reconnectAfterMs = (a = t == null ? void 0 : t.reconnectAfterMs) !== null && a !== void 0 ? a : g => XE[g - 1] || ZE;
        let f, h;
        const y = (l = t == null ? void 0 : t.vsn) !== null && l !== void 0 ? l : TE;
        switch (y) {
        case EE:
            f = (g, w) => w(JSON.stringify(g)),
            h = (g, w) => w(JSON.parse(g));
            break;
        case Ey:
            f = this.serializer.encode.bind(this.serializer),
            h = this.serializer.decode.bind(this.serializer);
            break;
        default:
            throw new Error(`Unsupported serializer version: ${d.vsn}`)
        }
        if (d.vsn = y,
        d.encode = (u = t == null ? void 0 : t.encode) !== null && u !== void 0 ? u : f,
        d.decode = (c = t == null ? void 0 : t.decode) !== null && c !== void 0 ? c : h,
        d.beforeReconnect = this._reconnectAuth.bind(this),
        (t != null && t.logLevel || t != null && t.log_level) && (this.logLevel = t.logLevel || t.log_level,
        d.params = Object.assign(Object.assign({}, d.params), {
            log_level: this.logLevel
        })),
        this.worker) {
            if (typeof window < "u" && !window.Worker)
                throw new Error("Web Worker is not supported");
            this.workerUrl = t == null ? void 0 : t.workerUrl,
            d.autoSendHeartbeat = !this.worker
        }
        return d
    }
    async _reconnectAuth() {
        await this._waitForAuthIfNeeded(),
        this.isConnected() || this.connect()
    }
}
var Ji = class extends Error {
    constructor(e, t) {
        var r;
        super(e),
        this.name = "IcebergError",
        this.status = t.status,
        this.icebergType = t.icebergType,
        this.icebergCode = t.icebergCode,
        this.details = t.details,
        this.isCommitStateUnknown = t.icebergType === "CommitStateUnknownException" || [500, 502, 504].includes(t.status) && ((r = t.icebergType) == null ? void 0 : r.includes("CommitState")) === !0
    }
    isNotFound() {
        return this.status === 404
    }
    isConflict() {
        return this.status === 409
    }
    isAuthenticationTimeout() {
        return this.status === 419
    }
}
;
function rT(e, t, r) {
    const n = new URL(t,e);
    if (r)
        for (const [s,i] of Object.entries(r))
            i !== void 0 && n.searchParams.set(s, i);
    return n.toString()
}
async function nT(e) {
    return !e || e.type === "none" ? {} : e.type === "bearer" ? {
        Authorization: `Bearer ${e.token}`
    } : e.type === "header" ? {
        [e.name]: e.value
    } : e.type === "custom" ? await e.getHeaders() : {}
}
function sT(e) {
    const t = e.fetchImpl ?? globalThis.fetch;
    return {
        async request({method: r, path: n, query: s, body: i, headers: o}) {
            const a = rT(e.baseUrl, n, s)
              , l = await nT(e.auth)
              , u = await t(a, {
                method: r,
                headers: {
                    ...i ? {
                        "Content-Type": "application/json"
                    } : {},
                    ...l,
                    ...o
                },
                body: i ? JSON.stringify(i) : void 0
            })
              , c = await u.text()
              , d = (u.headers.get("content-type") || "").includes("application/json")
              , f = d && c ? JSON.parse(c) : c;
            if (!u.ok) {
                const h = d ? f : void 0
                  , y = h == null ? void 0 : h.error;
                throw new Ji((y == null ? void 0 : y.message) ?? `Request failed with status ${u.status}`,{
                    status: u.status,
                    icebergType: y == null ? void 0 : y.type,
                    icebergCode: y == null ? void 0 : y.code,
                    details: h
                })
            }
            return {
                status: u.status,
                headers: u.headers,
                data: f
            }
        }
    }
}
function zo(e) {
    return e.join("")
}
var iT = class {
    constructor(e, t="") {
        this.client = e,
        this.prefix = t
    }
    async listNamespaces(e) {
        const t = e ? {
            parent: zo(e.namespace)
        } : void 0;
        return (await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces`,
            query: t
        })).data.namespaces.map(n => ({
            namespace: n
        }))
    }
    async createNamespace(e, t) {
        const r = {
            namespace: e.namespace,
            properties: t == null ? void 0 : t.properties
        };
        return (await this.client.request({
            method: "POST",
            path: `${this.prefix}/namespaces`,
            body: r
        })).data
    }
    async dropNamespace(e) {
        await this.client.request({
            method: "DELETE",
            path: `${this.prefix}/namespaces/${zo(e.namespace)}`
        })
    }
    async loadNamespaceMetadata(e) {
        return {
            properties: (await this.client.request({
                method: "GET",
                path: `${this.prefix}/namespaces/${zo(e.namespace)}`
            })).data.properties
        }
    }
    async namespaceExists(e) {
        try {
            return await this.client.request({
                method: "HEAD",
                path: `${this.prefix}/namespaces/${zo(e.namespace)}`
            }),
            !0
        } catch (t) {
            if (t instanceof Ji && t.status === 404)
                return !1;
            throw t
        }
    }
    async createNamespaceIfNotExists(e, t) {
        try {
            return await this.createNamespace(e, t)
        } catch (r) {
            if (r instanceof Ji && r.status === 409)
                return;
            throw r
        }
    }
}
;
function Wn(e) {
    return e.join("")
}
var oT = class {
    constructor(e, t="", r) {
        this.client = e,
        this.prefix = t,
        this.accessDelegation = r
    }
    async listTables(e) {
        return (await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces/${Wn(e.namespace)}/tables`
        })).data.identifiers
    }
    async createTable(e, t) {
        const r = {};
        return this.accessDelegation && (r["X-Iceberg-Access-Delegation"] = this.accessDelegation),
        (await this.client.request({
            method: "POST",
            path: `${this.prefix}/namespaces/${Wn(e.namespace)}/tables`,
            body: t,
            headers: r
        })).data.metadata
    }
    async updateTable(e, t) {
        const r = await this.client.request({
            method: "POST",
            path: `${this.prefix}/namespaces/${Wn(e.namespace)}/tables/${e.name}`,
            body: t
        });
        return {
            "metadata-location": r.data["metadata-location"],
            metadata: r.data.metadata
        }
    }
    async dropTable(e, t) {
        await this.client.request({
            method: "DELETE",
            path: `${this.prefix}/namespaces/${Wn(e.namespace)}/tables/${e.name}`,
            query: {
                purgeRequested: String((t == null ? void 0 : t.purge) ?? !1)
            }
        })
    }
    async loadTable(e) {
        const t = {};
        return this.accessDelegation && (t["X-Iceberg-Access-Delegation"] = this.accessDelegation),
        (await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces/${Wn(e.namespace)}/tables/${e.name}`,
            headers: t
        })).data.metadata
    }
    async tableExists(e) {
        const t = {};
        this.accessDelegation && (t["X-Iceberg-Access-Delegation"] = this.accessDelegation);
        try {
            return await this.client.request({
                method: "HEAD",
                path: `${this.prefix}/namespaces/${Wn(e.namespace)}/tables/${e.name}`,
                headers: t
            }),
            !0
        } catch (r) {
            if (r instanceof Ji && r.status === 404)
                return !1;
            throw r
        }
    }
    async createTableIfNotExists(e, t) {
        try {
            return await this.createTable(e, t)
        } catch (r) {
            if (r instanceof Ji && r.status === 409)
                return await this.loadTable({
                    namespace: e.namespace,
                    name: t.name
                });
            throw r
        }
    }
}
  , aT = class {
    constructor(e) {
        var n;
        let t = "v1";
        e.catalogName && (t += `/${e.catalogName}`);
        const r = e.baseUrl.endsWith("/") ? e.baseUrl : `${e.baseUrl}/`;
        this.client = sT({
            baseUrl: r,
            auth: e.auth,
            fetchImpl: e.fetch
        }),
        this.accessDelegation = (n = e.accessDelegation) == null ? void 0 : n.join(","),
        this.namespaceOps = new iT(this.client,t),
        this.tableOps = new oT(this.client,t,this.accessDelegation)
    }
    async listNamespaces(e) {
        return this.namespaceOps.listNamespaces(e)
    }
    async createNamespace(e, t) {
        return this.namespaceOps.createNamespace(e, t)
    }
    async dropNamespace(e) {
        await this.namespaceOps.dropNamespace(e)
    }
    async loadNamespaceMetadata(e) {
        return this.namespaceOps.loadNamespaceMetadata(e)
    }
    async listTables(e) {
        return this.tableOps.listTables(e)
    }
    async createTable(e, t) {
        return this.tableOps.createTable(e, t)
    }
    async updateTable(e, t) {
        return this.tableOps.updateTable(e, t)
    }
    async dropTable(e, t) {
        await this.tableOps.dropTable(e, t)
    }
    async loadTable(e) {
        return this.tableOps.loadTable(e)
    }
    async namespaceExists(e) {
        return this.namespaceOps.namespaceExists(e)
    }
    async tableExists(e) {
        return this.tableOps.tableExists(e)
    }
    async createNamespaceIfNotExists(e, t) {
        return this.namespaceOps.createNamespaceIfNotExists(e, t)
    }
    async createTableIfNotExists(e, t) {
        return this.tableOps.createTableIfNotExists(e, t)
    }
}
  , xl = class extends Error {
    constructor(e, t="storage", r, n) {
        super(e),
        this.__isStorageError = !0,
        this.namespace = t,
        this.name = t === "vectors" ? "StorageVectorsError" : "StorageError",
        this.status = r,
        this.statusCode = n
    }
}
;
function _l(e) {
    return typeof e == "object" && e !== null && "__isStorageError"in e
}
var Cc = class extends xl {
    constructor(e, t, r, n="storage") {
        super(e, n, t, r),
        this.name = n === "vectors" ? "StorageVectorsApiError" : "StorageApiError",
        this.status = t,
        this.statusCode = r
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            statusCode: this.statusCode
        }
    }
}
  , Ay = class extends xl {
    constructor(e, t, r="storage") {
        super(e, r),
        this.name = r === "vectors" ? "StorageVectorsUnknownError" : "StorageUnknownError",
        this.originalError = t
    }
}
;
const lT = e => e ? (...t) => e(...t) : (...t) => fetch(...t)
  , uT = e => {
    if (typeof e != "object" || e === null)
        return !1;
    const t = Object.getPrototypeOf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}
  , Pc = e => {
    if (Array.isArray(e))
        return e.map(r => Pc(r));
    if (typeof e == "function" || e !== Object(e))
        return e;
    const t = {};
    return Object.entries(e).forEach( ([r,n]) => {
        const s = r.replace(/([-_][a-z])/gi, i => i.toUpperCase().replace(/[-_]/g, ""));
        t[s] = Pc(n)
    }
    ),
    t
}
  , cT = e => !e || typeof e != "string" || e.length === 0 || e.length > 100 || e.trim() !== e || e.includes("/") || e.includes("\\") ? !1 : /^[\w!.\*'() &$@=;:+,?-]+$/.test(e);
function Qi(e) {
    "@babel/helpers - typeof";
    return Qi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    Qi(e)
}
function dT(e, t) {
    if (Qi(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Qi(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function hT(e) {
    var t = dT(e, "string");
    return Qi(t) == "symbol" ? t : t + ""
}
function fT(e, t, r) {
    return (t = hT(t))in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function np(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(s) {
            return Object.getOwnPropertyDescriptor(e, s).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function B(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? np(Object(r), !0).forEach(function(n) {
            fT(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : np(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
const sp = e => {
    var t;
    return e.msg || e.message || e.error_description || (typeof e.error == "string" ? e.error : (t = e.error) === null || t === void 0 ? void 0 : t.message) || JSON.stringify(e)
}
  , pT = async (e, t, r, n) => {
    if (e !== null && typeof e == "object" && typeof e.json == "function") {
        const s = e;
        let i = parseInt(s.status, 10);
        Number.isFinite(i) || (i = 500),
        s.json().then(o => {
            const a = (o == null ? void 0 : o.statusCode) || (o == null ? void 0 : o.code) || i + "";
            t(new Cc(sp(o),i,a,n))
        }
        ).catch( () => {
            const o = i + "";
            t(new Cc(s.statusText || `HTTP ${i} error`,i,o,n))
        }
        )
    } else
        t(new Ay(sp(e),e,n))
}
  , mT = (e, t, r, n) => {
    const s = {
        method: e,
        headers: (t == null ? void 0 : t.headers) || {}
    };
    return e === "GET" || e === "HEAD" || !n ? B(B({}, s), r) : (uT(n) ? (s.headers = B({
        "Content-Type": "application/json"
    }, t == null ? void 0 : t.headers),
    s.body = JSON.stringify(n)) : s.body = n,
    t != null && t.duplex && (s.duplex = t.duplex),
    B(B({}, s), r))
}
;
async function si(e, t, r, n, s, i, o) {
    return new Promise( (a, l) => {
        e(r, mT(t, n, s, i)).then(u => {
            if (!u.ok)
                throw u;
            if (n != null && n.noResolveJson)
                return u;
            if (o === "vectors") {
                const c = u.headers.get("content-type");
                if (u.headers.get("content-length") === "0" || u.status === 204)
                    return {};
                if (!c || !c.includes("application/json"))
                    return {}
            }
            return u.json()
        }
        ).then(u => a(u)).catch(u => pT(u, l, n, o))
    }
    )
}
function Oy(e="storage") {
    return {
        get: async (t, r, n, s) => si(t, "GET", r, n, s, void 0, e),
        post: async (t, r, n, s, i) => si(t, "POST", r, s, i, n, e),
        put: async (t, r, n, s, i) => si(t, "PUT", r, s, i, n, e),
        head: async (t, r, n, s) => si(t, "HEAD", r, B(B({}, n), {}, {
            noResolveJson: !0
        }), s, void 0, e),
        remove: async (t, r, n, s, i) => si(t, "DELETE", r, s, i, n, e)
    }
}
const gT = Oy("storage")
  , {get: Yi, post: Ct, put: Rc, head: vT, remove: Gd} = gT
  , nt = Oy("vectors");
var Vs = class {
    constructor(e, t={}, r, n="storage") {
        this.shouldThrowOnError = !1,
        this.url = e,
        this.headers = t,
        this.fetch = lT(r),
        this.namespace = n
    }
    throwOnError() {
        return this.shouldThrowOnError = !0,
        this
    }
    setHeader(e, t) {
        return this.headers = B(B({}, this.headers), {}, {
            [e]: t
        }),
        this
    }
    async handleOperation(e) {
        var t = this;
        try {
            return {
                data: await e(),
                error: null
            }
        } catch (r) {
            if (t.shouldThrowOnError)
                throw r;
            if (_l(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
}
  , yT = class {
    constructor(e, t) {
        this.downloadFn = e,
        this.shouldThrowOnError = t
    }
    then(e, t) {
        return this.execute().then(e, t)
    }
    async execute() {
        var e = this;
        try {
            return {
                data: (await e.downloadFn()).body,
                error: null
            }
        } catch (t) {
            if (e.shouldThrowOnError)
                throw t;
            if (_l(t))
                return {
                    data: null,
                    error: t
                };
            throw t
        }
    }
}
;
let Ny;
Ny = Symbol.toStringTag;
var wT = class {
    constructor(e, t) {
        this.downloadFn = e,
        this.shouldThrowOnError = t,
        this[Ny] = "BlobDownloadBuilder",
        this.promise = null
    }
    asStream() {
        return new yT(this.downloadFn,this.shouldThrowOnError)
    }
    then(e, t) {
        return this.getPromise().then(e, t)
    }
    catch(e) {
        return this.getPromise().catch(e)
    }
    finally(e) {
        return this.getPromise().finally(e)
    }
    getPromise() {
        return this.promise || (this.promise = this.execute()),
        this.promise
    }
    async execute() {
        var e = this;
        try {
            return {
                data: await (await e.downloadFn()).blob(),
                error: null
            }
        } catch (t) {
            if (e.shouldThrowOnError)
                throw t;
            if (_l(t))
                return {
                    data: null,
                    error: t
                };
            throw t
        }
    }
}
;
const bT = {
    limit: 100,
    offset: 0,
    sortBy: {
        column: "name",
        order: "asc"
    }
}
  , ip = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1
};
var xT = class extends Vs {
    constructor(e, t={}, r, n) {
        super(e, t, n, "storage"),
        this.bucketId = r
    }
    async uploadOrUpdate(e, t, r, n) {
        var s = this;
        return s.handleOperation(async () => {
            let i;
            const o = B(B({}, ip), n);
            let a = B(B({}, s.headers), e === "POST" && {
                "x-upsert": String(o.upsert)
            });
            const l = o.metadata;
            typeof Blob < "u" && r instanceof Blob ? (i = new FormData,
            i.append("cacheControl", o.cacheControl),
            l && i.append("metadata", s.encodeMetadata(l)),
            i.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (i = r,
            i.has("cacheControl") || i.append("cacheControl", o.cacheControl),
            l && !i.has("metadata") && i.append("metadata", s.encodeMetadata(l))) : (i = r,
            a["cache-control"] = `max-age=${o.cacheControl}`,
            a["content-type"] = o.contentType,
            l && (a["x-metadata"] = s.toBase64(s.encodeMetadata(l))),
            (typeof ReadableStream < "u" && i instanceof ReadableStream || i && typeof i == "object" && "pipe"in i && typeof i.pipe == "function") && !o.duplex && (o.duplex = "half")),
            n != null && n.headers && (a = B(B({}, a), n.headers));
            const u = s._removeEmptyFolders(t)
              , c = s._getFinalPath(u)
              , d = await (e == "PUT" ? Rc : Ct)(s.fetch, `${s.url}/object/${c}`, i, B({
                headers: a
            }, o != null && o.duplex ? {
                duplex: o.duplex
            } : {}));
            return {
                path: u,
                id: d.Id,
                fullPath: d.Key
            }
        }
        )
    }
    async upload(e, t, r) {
        return this.uploadOrUpdate("POST", e, t, r)
    }
    async uploadToSignedUrl(e, t, r, n) {
        var s = this;
        const i = s._removeEmptyFolders(e)
          , o = s._getFinalPath(i)
          , a = new URL(s.url + `/object/upload/sign/${o}`);
        return a.searchParams.set("token", t),
        s.handleOperation(async () => {
            let l;
            const u = B({
                upsert: ip.upsert
            }, n)
              , c = B(B({}, s.headers), {
                "x-upsert": String(u.upsert)
            });
            return typeof Blob < "u" && r instanceof Blob ? (l = new FormData,
            l.append("cacheControl", u.cacheControl),
            l.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (l = r,
            l.append("cacheControl", u.cacheControl)) : (l = r,
            c["cache-control"] = `max-age=${u.cacheControl}`,
            c["content-type"] = u.contentType),
            {
                path: i,
                fullPath: (await Rc(s.fetch, a.toString(), l, {
                    headers: c
                })).Key
            }
        }
        )
    }
    async createSignedUploadUrl(e, t) {
        var r = this;
        return r.handleOperation(async () => {
            let n = r._getFinalPath(e);
            const s = B({}, r.headers);
            t != null && t.upsert && (s["x-upsert"] = "true");
            const i = await Ct(r.fetch, `${r.url}/object/upload/sign/${n}`, {}, {
                headers: s
            })
              , o = new URL(r.url + i.url)
              , a = o.searchParams.get("token");
            if (!a)
                throw new xl("No token returned by API");
            return {
                signedUrl: o.toString(),
                path: e,
                token: a
            }
        }
        )
    }
    async update(e, t, r) {
        return this.uploadOrUpdate("PUT", e, t, r)
    }
    async move(e, t, r) {
        var n = this;
        return n.handleOperation(async () => await Ct(n.fetch, `${n.url}/object/move`, {
            bucketId: n.bucketId,
            sourceKey: e,
            destinationKey: t,
            destinationBucket: r == null ? void 0 : r.destinationBucket
        }, {
            headers: n.headers
        }))
    }
    async copy(e, t, r) {
        var n = this;
        return n.handleOperation(async () => ({
            path: (await Ct(n.fetch, `${n.url}/object/copy`, {
                bucketId: n.bucketId,
                sourceKey: e,
                destinationKey: t,
                destinationBucket: r == null ? void 0 : r.destinationBucket
            }, {
                headers: n.headers
            })).Key
        }))
    }
    async createSignedUrl(e, t, r) {
        var n = this;
        return n.handleOperation(async () => {
            let s = n._getFinalPath(e);
            const i = typeof (r == null ? void 0 : r.transform) == "object" && r.transform !== null && Object.keys(r.transform).length > 0;
            let o = await Ct(n.fetch, `${n.url}/object/sign/${s}`, B({
                expiresIn: t
            }, i ? {
                transform: r.transform
            } : {}), {
                headers: n.headers
            });
            const a = r != null && r.download ? `&download=${r.download === !0 ? "" : r.download}` : ""
              , l = i && o.signedURL.includes("/object/sign/") ? o.signedURL.replace("/object/sign/", "/render/image/sign/") : o.signedURL;
            return {
                signedUrl: encodeURI(`${n.url}${l}${a}`)
            }
        }
        )
    }
    async createSignedUrls(e, t, r) {
        var n = this;
        return n.handleOperation(async () => {
            const s = await Ct(n.fetch, `${n.url}/object/sign/${n.bucketId}`, {
                expiresIn: t,
                paths: e
            }, {
                headers: n.headers
            })
              , i = r != null && r.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
            return s.map(o => B(B({}, o), {}, {
                signedUrl: o.signedURL ? encodeURI(`${n.url}${o.signedURL}${i}`) : null
            }))
        }
        )
    }
    download(e, t, r) {
        const n = typeof (t == null ? void 0 : t.transform) < "u" ? "render/image/authenticated" : "object"
          , s = this.transformOptsToQueryString((t == null ? void 0 : t.transform) || {})
          , i = s ? `?${s}` : ""
          , o = this._getFinalPath(e)
          , a = () => Yi(this.fetch, `${this.url}/${n}/${o}${i}`, {
            headers: this.headers,
            noResolveJson: !0
        }, r);
        return new wT(a,this.shouldThrowOnError)
    }
    async info(e) {
        var t = this;
        const r = t._getFinalPath(e);
        return t.handleOperation(async () => Pc(await Yi(t.fetch, `${t.url}/object/info/${r}`, {
            headers: t.headers
        })))
    }
    async exists(e) {
        var t = this;
        const r = t._getFinalPath(e);
        try {
            return await vT(t.fetch, `${t.url}/object/${r}`, {
                headers: t.headers
            }),
            {
                data: !0,
                error: null
            }
        } catch (s) {
            if (t.shouldThrowOnError)
                throw s;
            if (_l(s)) {
                var n;
                const i = s instanceof Cc ? s.status : s instanceof Ay ? (n = s.originalError) === null || n === void 0 ? void 0 : n.status : void 0;
                if (i !== void 0 && [400, 404].includes(i))
                    return {
                        data: !1,
                        error: s
                    }
            }
            throw s
        }
    }
    getPublicUrl(e, t) {
        const r = this._getFinalPath(e)
          , n = []
          , s = t != null && t.download ? `download=${t.download === !0 ? "" : t.download}` : "";
        s !== "" && n.push(s);
        const i = typeof (t == null ? void 0 : t.transform) < "u" ? "render/image" : "object"
          , o = this.transformOptsToQueryString((t == null ? void 0 : t.transform) || {});
        o !== "" && n.push(o);
        let a = n.join("&");
        return a !== "" && (a = `?${a}`),
        {
            data: {
                publicUrl: encodeURI(`${this.url}/${i}/public/${r}${a}`)
            }
        }
    }
    async remove(e) {
        var t = this;
        return t.handleOperation(async () => await Gd(t.fetch, `${t.url}/object/${t.bucketId}`, {
            prefixes: e
        }, {
            headers: t.headers
        }))
    }
    async list(e, t, r) {
        var n = this;
        return n.handleOperation(async () => {
            const s = B(B(B({}, bT), t), {}, {
                prefix: e || ""
            });
            return await Ct(n.fetch, `${n.url}/object/list/${n.bucketId}`, s, {
                headers: n.headers
            }, r)
        }
        )
    }
    async listV2(e, t) {
        var r = this;
        return r.handleOperation(async () => {
            const n = B({}, e);
            return await Ct(r.fetch, `${r.url}/object/list-v2/${r.bucketId}`, n, {
                headers: r.headers
            }, t)
        }
        )
    }
    encodeMetadata(e) {
        return JSON.stringify(e)
    }
    toBase64(e) {
        return typeof Buffer < "u" ? Buffer.from(e).toString("base64") : btoa(e)
    }
    _getFinalPath(e) {
        return `${this.bucketId}/${e.replace(/^\/+/, "")}`
    }
    _removeEmptyFolders(e) {
        return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/")
    }
    transformOptsToQueryString(e) {
        const t = [];
        return e.width && t.push(`width=${e.width}`),
        e.height && t.push(`height=${e.height}`),
        e.resize && t.push(`resize=${e.resize}`),
        e.format && t.push(`format=${e.format}`),
        e.quality && t.push(`quality=${e.quality}`),
        t.join("&")
    }
}
;
const _T = "2.100.0"
  , ho = {
    "X-Client-Info": `storage-js/${_T}`
};
var ST = class extends Vs {
    constructor(e, t={}, r, n) {
        const s = new URL(e);
        n != null && n.useNewHostname && /supabase\.(co|in|red)$/.test(s.hostname) && !s.hostname.includes("storage.supabase.") && (s.hostname = s.hostname.replace("supabase.", "storage.supabase."));
        const i = s.href.replace(/\/$/, "")
          , o = B(B({}, ho), t);
        super(i, o, r, "storage")
    }
    async listBuckets(e) {
        var t = this;
        return t.handleOperation(async () => {
            const r = t.listBucketOptionsToQueryString(e);
            return await Yi(t.fetch, `${t.url}/bucket${r}`, {
                headers: t.headers
            })
        }
        )
    }
    async getBucket(e) {
        var t = this;
        return t.handleOperation(async () => await Yi(t.fetch, `${t.url}/bucket/${e}`, {
            headers: t.headers
        }))
    }
    async createBucket(e, t={
        public: !1
    }) {
        var r = this;
        return r.handleOperation(async () => await Ct(r.fetch, `${r.url}/bucket`, {
            id: e,
            name: e,
            type: t.type,
            public: t.public,
            file_size_limit: t.fileSizeLimit,
            allowed_mime_types: t.allowedMimeTypes
        }, {
            headers: r.headers
        }))
    }
    async updateBucket(e, t) {
        var r = this;
        return r.handleOperation(async () => await Rc(r.fetch, `${r.url}/bucket/${e}`, {
            id: e,
            name: e,
            public: t.public,
            file_size_limit: t.fileSizeLimit,
            allowed_mime_types: t.allowedMimeTypes
        }, {
            headers: r.headers
        }))
    }
    async emptyBucket(e) {
        var t = this;
        return t.handleOperation(async () => await Ct(t.fetch, `${t.url}/bucket/${e}/empty`, {}, {
            headers: t.headers
        }))
    }
    async deleteBucket(e) {
        var t = this;
        return t.handleOperation(async () => await Gd(t.fetch, `${t.url}/bucket/${e}`, {}, {
            headers: t.headers
        }))
    }
    listBucketOptionsToQueryString(e) {
        const t = {};
        return e && ("limit"in e && (t.limit = String(e.limit)),
        "offset"in e && (t.offset = String(e.offset)),
        e.search && (t.search = e.search),
        e.sortColumn && (t.sortColumn = e.sortColumn),
        e.sortOrder && (t.sortOrder = e.sortOrder)),
        Object.keys(t).length > 0 ? "?" + new URLSearchParams(t).toString() : ""
    }
}
  , kT = class extends Vs {
    constructor(e, t={}, r) {
        const n = e.replace(/\/$/, "")
          , s = B(B({}, ho), t);
        super(n, s, r, "storage")
    }
    async createBucket(e) {
        var t = this;
        return t.handleOperation(async () => await Ct(t.fetch, `${t.url}/bucket`, {
            name: e
        }, {
            headers: t.headers
        }))
    }
    async listBuckets(e) {
        var t = this;
        return t.handleOperation(async () => {
            const r = new URLSearchParams;
            (e == null ? void 0 : e.limit) !== void 0 && r.set("limit", e.limit.toString()),
            (e == null ? void 0 : e.offset) !== void 0 && r.set("offset", e.offset.toString()),
            e != null && e.sortColumn && r.set("sortColumn", e.sortColumn),
            e != null && e.sortOrder && r.set("sortOrder", e.sortOrder),
            e != null && e.search && r.set("search", e.search);
            const n = r.toString()
              , s = n ? `${t.url}/bucket?${n}` : `${t.url}/bucket`;
            return await Yi(t.fetch, s, {
                headers: t.headers
            })
        }
        )
    }
    async deleteBucket(e) {
        var t = this;
        return t.handleOperation(async () => await Gd(t.fetch, `${t.url}/bucket/${e}`, {}, {
            headers: t.headers
        }))
    }
    from(e) {
        var t = this;
        if (!cT(e))
            throw new xl("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");
        const r = new aT({
            baseUrl: this.url,
            catalogName: e,
            auth: {
                type: "custom",
                getHeaders: async () => t.headers
            },
            fetch: this.fetch
        })
          , n = this.shouldThrowOnError;
        return new Proxy(r,{
            get(s, i) {
                const o = s[i];
                return typeof o != "function" ? o : async (...a) => {
                    try {
                        return {
                            data: await o.apply(s, a),
                            error: null
                        }
                    } catch (l) {
                        if (n)
                            throw l;
                        return {
                            data: null,
                            error: l
                        }
                    }
                }
            }
        })
    }
}
  , ET = class extends Vs {
    constructor(e, t={}, r) {
        const n = e.replace(/\/$/, "")
          , s = B(B({}, ho), {}, {
            "Content-Type": "application/json"
        }, t);
        super(n, s, r, "vectors")
    }
    async createIndex(e) {
        var t = this;
        return t.handleOperation(async () => await nt.post(t.fetch, `${t.url}/CreateIndex`, e, {
            headers: t.headers
        }) || {})
    }
    async getIndex(e, t) {
        var r = this;
        return r.handleOperation(async () => await nt.post(r.fetch, `${r.url}/GetIndex`, {
            vectorBucketName: e,
            indexName: t
        }, {
            headers: r.headers
        }))
    }
    async listIndexes(e) {
        var t = this;
        return t.handleOperation(async () => await nt.post(t.fetch, `${t.url}/ListIndexes`, e, {
            headers: t.headers
        }))
    }
    async deleteIndex(e, t) {
        var r = this;
        return r.handleOperation(async () => await nt.post(r.fetch, `${r.url}/DeleteIndex`, {
            vectorBucketName: e,
            indexName: t
        }, {
            headers: r.headers
        }) || {})
    }
}
  , TT = class extends Vs {
    constructor(e, t={}, r) {
        const n = e.replace(/\/$/, "")
          , s = B(B({}, ho), {}, {
            "Content-Type": "application/json"
        }, t);
        super(n, s, r, "vectors")
    }
    async putVectors(e) {
        var t = this;
        if (e.vectors.length < 1 || e.vectors.length > 500)
            throw new Error("Vector batch size must be between 1 and 500 items");
        return t.handleOperation(async () => await nt.post(t.fetch, `${t.url}/PutVectors`, e, {
            headers: t.headers
        }) || {})
    }
    async getVectors(e) {
        var t = this;
        return t.handleOperation(async () => await nt.post(t.fetch, `${t.url}/GetVectors`, e, {
            headers: t.headers
        }))
    }
    async listVectors(e) {
        var t = this;
        if (e.segmentCount !== void 0) {
            if (e.segmentCount < 1 || e.segmentCount > 16)
                throw new Error("segmentCount must be between 1 and 16");
            if (e.segmentIndex !== void 0 && (e.segmentIndex < 0 || e.segmentIndex >= e.segmentCount))
                throw new Error(`segmentIndex must be between 0 and ${e.segmentCount - 1}`)
        }
        return t.handleOperation(async () => await nt.post(t.fetch, `${t.url}/ListVectors`, e, {
            headers: t.headers
        }))
    }
    async queryVectors(e) {
        var t = this;
        return t.handleOperation(async () => await nt.post(t.fetch, `${t.url}/QueryVectors`, e, {
            headers: t.headers
        }))
    }
    async deleteVectors(e) {
        var t = this;
        if (e.keys.length < 1 || e.keys.length > 500)
            throw new Error("Keys batch size must be between 1 and 500 items");
        return t.handleOperation(async () => await nt.post(t.fetch, `${t.url}/DeleteVectors`, e, {
            headers: t.headers
        }) || {})
    }
}
  , CT = class extends Vs {
    constructor(e, t={}, r) {
        const n = e.replace(/\/$/, "")
          , s = B(B({}, ho), {}, {
            "Content-Type": "application/json"
        }, t);
        super(n, s, r, "vectors")
    }
    async createBucket(e) {
        var t = this;
        return t.handleOperation(async () => await nt.post(t.fetch, `${t.url}/CreateVectorBucket`, {
            vectorBucketName: e
        }, {
            headers: t.headers
        }) || {})
    }
    async getBucket(e) {
        var t = this;
        return t.handleOperation(async () => await nt.post(t.fetch, `${t.url}/GetVectorBucket`, {
            vectorBucketName: e
        }, {
            headers: t.headers
        }))
    }
    async listBuckets(e={}) {
        var t = this;
        return t.handleOperation(async () => await nt.post(t.fetch, `${t.url}/ListVectorBuckets`, e, {
            headers: t.headers
        }))
    }
    async deleteBucket(e) {
        var t = this;
        return t.handleOperation(async () => await nt.post(t.fetch, `${t.url}/DeleteVectorBucket`, {
            vectorBucketName: e
        }, {
            headers: t.headers
        }) || {})
    }
}
  , PT = class extends CT {
    constructor(e, t={}) {
        super(e, t.headers || {}, t.fetch)
    }
    from(e) {
        return new RT(this.url,this.headers,e,this.fetch)
    }
    async createBucket(e) {
        var t = () => super.createBucket
          , r = this;
        return t().call(r, e)
    }
    async getBucket(e) {
        var t = () => super.getBucket
          , r = this;
        return t().call(r, e)
    }
    async listBuckets(e={}) {
        var t = () => super.listBuckets
          , r = this;
        return t().call(r, e)
    }
    async deleteBucket(e) {
        var t = () => super.deleteBucket
          , r = this;
        return t().call(r, e)
    }
}
  , RT = class extends ET {
    constructor(e, t, r, n) {
        super(e, t, n),
        this.vectorBucketName = r
    }
    async createIndex(e) {
        var t = () => super.createIndex
          , r = this;
        return t().call(r, B(B({}, e), {}, {
            vectorBucketName: r.vectorBucketName
        }))
    }
    async listIndexes(e={}) {
        var t = () => super.listIndexes
          , r = this;
        return t().call(r, B(B({}, e), {}, {
            vectorBucketName: r.vectorBucketName
        }))
    }
    async getIndex(e) {
        var t = () => super.getIndex
          , r = this;
        return t().call(r, r.vectorBucketName, e)
    }
    async deleteIndex(e) {
        var t = () => super.deleteIndex
          , r = this;
        return t().call(r, r.vectorBucketName, e)
    }
    index(e) {
        return new AT(this.url,this.headers,this.vectorBucketName,e,this.fetch)
    }
}
  , AT = class extends TT {
    constructor(e, t, r, n, s) {
        super(e, t, s),
        this.vectorBucketName = r,
        this.indexName = n
    }
    async putVectors(e) {
        var t = () => super.putVectors
          , r = this;
        return t().call(r, B(B({}, e), {}, {
            vectorBucketName: r.vectorBucketName,
            indexName: r.indexName
        }))
    }
    async getVectors(e) {
        var t = () => super.getVectors
          , r = this;
        return t().call(r, B(B({}, e), {}, {
            vectorBucketName: r.vectorBucketName,
            indexName: r.indexName
        }))
    }
    async listVectors(e={}) {
        var t = () => super.listVectors
          , r = this;
        return t().call(r, B(B({}, e), {}, {
            vectorBucketName: r.vectorBucketName,
            indexName: r.indexName
        }))
    }
    async queryVectors(e) {
        var t = () => super.queryVectors
          , r = this;
        return t().call(r, B(B({}, e), {}, {
            vectorBucketName: r.vectorBucketName,
            indexName: r.indexName
        }))
    }
    async deleteVectors(e) {
        var t = () => super.deleteVectors
          , r = this;
        return t().call(r, B(B({}, e), {}, {
            vectorBucketName: r.vectorBucketName,
            indexName: r.indexName
        }))
    }
}
  , OT = class extends ST {
    constructor(e, t={}, r, n) {
        super(e, t, r, n)
    }
    from(e) {
        return new xT(this.url,this.headers,e,this.fetch)
    }
    get vectors() {
        return new PT(this.url + "/vector",{
            headers: this.headers,
            fetch: this.fetch
        })
    }
    get analytics() {
        return new kT(this.url + "/iceberg",this.headers,this.fetch)
    }
}
;
const jy = "2.100.0"
  , Yn = 30 * 1e3
  , Ac = 3
  , uu = Ac * Yn
  , NT = "http://localhost:9999"
  , jT = "supabase.auth.token"
  , IT = {
    "X-Client-Info": `gotrue-js/${jy}`
}
  , Oc = "X-Supabase-Api-Version"
  , Iy = {
    "2024-01-01": {
        timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
        name: "2024-01-01"
    }
}
  , LT = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i
  , $T = 10 * 60 * 1e3;
class Xi extends Error {
    constructor(t, r, n) {
        super(t),
        this.__isAuthError = !0,
        this.name = "AuthError",
        this.status = r,
        this.code = n
    }
}
function M(e) {
    return typeof e == "object" && e !== null && "__isAuthError"in e
}
class DT extends Xi {
    constructor(t, r, n) {
        super(t, r, n),
        this.name = "AuthApiError",
        this.status = r,
        this.code = n
    }
}
function MT(e) {
    return M(e) && e.name === "AuthApiError"
}
class fn extends Xi {
    constructor(t, r) {
        super(t),
        this.name = "AuthUnknownError",
        this.originalError = r
    }
}
class gr extends Xi {
    constructor(t, r, n, s) {
        super(t, n, s),
        this.name = r,
        this.status = n
    }
}
class et extends gr {
    constructor() {
        super("Auth session missing!", "AuthSessionMissingError", 400, void 0)
    }
}
function cu(e) {
    return M(e) && e.name === "AuthSessionMissingError"
}
class Vn extends gr {
    constructor() {
        super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0)
    }
}
class Ho extends gr {
    constructor(t) {
        super(t, "AuthInvalidCredentialsError", 400, void 0)
    }
}
class Wo extends gr {
    constructor(t, r=null) {
        super(t, "AuthImplicitGrantRedirectError", 500, void 0),
        this.details = null,
        this.details = r
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        }
    }
}
function UT(e) {
    return M(e) && e.name === "AuthImplicitGrantRedirectError"
}
class op extends gr {
    constructor(t, r=null) {
        super(t, "AuthPKCEGrantCodeExchangeError", 500, void 0),
        this.details = null,
        this.details = r
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        }
    }
}
class FT extends gr {
    constructor() {
        super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.", "AuthPKCECodeVerifierMissingError", 400, "pkce_code_verifier_not_found")
    }
}
class Nc extends gr {
    constructor(t, r) {
        super(t, "AuthRetryableFetchError", r, void 0)
    }
}
function du(e) {
    return M(e) && e.name === "AuthRetryableFetchError"
}
class ap extends gr {
    constructor(t, r, n) {
        super(t, "AuthWeakPasswordError", r, "weak_password"),
        this.reasons = n
    }
}
class jc extends gr {
    constructor(t) {
        super(t, "AuthInvalidJwtError", 400, "invalid_jwt")
    }
}
const Fa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split("")
  , lp = ` 	
\r=`.split("")
  , BT = ( () => {
    const e = new Array(128);
    for (let t = 0; t < e.length; t += 1)
        e[t] = -1;
    for (let t = 0; t < lp.length; t += 1)
        e[lp[t].charCodeAt(0)] = -2;
    for (let t = 0; t < Fa.length; t += 1)
        e[Fa[t].charCodeAt(0)] = t;
    return e
}
)();
function up(e, t, r) {
    if (e !== null)
        for (t.queue = t.queue << 8 | e,
        t.queuedBits += 8; t.queuedBits >= 6; ) {
            const n = t.queue >> t.queuedBits - 6 & 63;
            r(Fa[n]),
            t.queuedBits -= 6
        }
    else if (t.queuedBits > 0)
        for (t.queue = t.queue << 6 - t.queuedBits,
        t.queuedBits = 6; t.queuedBits >= 6; ) {
            const n = t.queue >> t.queuedBits - 6 & 63;
            r(Fa[n]),
            t.queuedBits -= 6
        }
}
function Ly(e, t, r) {
    const n = BT[e];
    if (n > -1)
        for (t.queue = t.queue << 6 | n,
        t.queuedBits += 6; t.queuedBits >= 8; )
            r(t.queue >> t.queuedBits - 8 & 255),
            t.queuedBits -= 8;
    else {
        if (n === -2)
            return;
        throw new Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)
    }
}
function cp(e) {
    const t = []
      , r = o => {
        t.push(String.fromCodePoint(o))
    }
      , n = {
        utf8seq: 0,
        codepoint: 0
    }
      , s = {
        queue: 0,
        queuedBits: 0
    }
      , i = o => {
        WT(o, n, r)
    }
    ;
    for (let o = 0; o < e.length; o += 1)
        Ly(e.charCodeAt(o), s, i);
    return t.join("")
}
function zT(e, t) {
    if (e <= 127) {
        t(e);
        return
    } else if (e <= 2047) {
        t(192 | e >> 6),
        t(128 | e & 63);
        return
    } else if (e <= 65535) {
        t(224 | e >> 12),
        t(128 | e >> 6 & 63),
        t(128 | e & 63);
        return
    } else if (e <= 1114111) {
        t(240 | e >> 18),
        t(128 | e >> 12 & 63),
        t(128 | e >> 6 & 63),
        t(128 | e & 63);
        return
    }
    throw new Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)
}
function HT(e, t) {
    for (let r = 0; r < e.length; r += 1) {
        let n = e.charCodeAt(r);
        if (n > 55295 && n <= 56319) {
            const s = (n - 55296) * 1024 & 65535;
            n = (e.charCodeAt(r + 1) - 56320 & 65535 | s) + 65536,
            r += 1
        }
        zT(n, t)
    }
}
function WT(e, t, r) {
    if (t.utf8seq === 0) {
        if (e <= 127) {
            r(e);
            return
        }
        for (let n = 1; n < 6; n += 1)
            if (!(e >> 7 - n & 1)) {
                t.utf8seq = n;
                break
            }
        if (t.utf8seq === 2)
            t.codepoint = e & 31;
        else if (t.utf8seq === 3)
            t.codepoint = e & 15;
        else if (t.utf8seq === 4)
            t.codepoint = e & 7;
        else
            throw new Error("Invalid UTF-8 sequence");
        t.utf8seq -= 1
    } else if (t.utf8seq > 0) {
        if (e <= 127)
            throw new Error("Invalid UTF-8 sequence");
        t.codepoint = t.codepoint << 6 | e & 63,
        t.utf8seq -= 1,
        t.utf8seq === 0 && r(t.codepoint)
    }
}
function ws(e) {
    const t = []
      , r = {
        queue: 0,
        queuedBits: 0
    }
      , n = s => {
        t.push(s)
    }
    ;
    for (let s = 0; s < e.length; s += 1)
        Ly(e.charCodeAt(s), r, n);
    return new Uint8Array(t)
}
function VT(e) {
    const t = [];
    return HT(e, r => t.push(r)),
    new Uint8Array(t)
}
function vn(e) {
    const t = []
      , r = {
        queue: 0,
        queuedBits: 0
    }
      , n = s => {
        t.push(s)
    }
    ;
    return e.forEach(s => up(s, r, n)),
    up(null, r, n),
    t.join("")
}
function KT(e) {
    return Math.round(Date.now() / 1e3) + e
}
function qT() {
    return Symbol("auth-callback")
}
const Re = () => typeof window < "u" && typeof document < "u"
  , ln = {
    tested: !1,
    writable: !1
}
  , $y = () => {
    if (!Re())
        return !1;
    try {
        if (typeof globalThis.localStorage != "object")
            return !1
    } catch {
        return !1
    }
    if (ln.tested)
        return ln.writable;
    const e = `lswt-${Math.random()}${Math.random()}`;
    try {
        globalThis.localStorage.setItem(e, e),
        globalThis.localStorage.removeItem(e),
        ln.tested = !0,
        ln.writable = !0
    } catch {
        ln.tested = !0,
        ln.writable = !1
    }
    return ln.writable
}
;
function GT(e) {
    const t = {}
      , r = new URL(e);
    if (r.hash && r.hash[0] === "#")
        try {
            new URLSearchParams(r.hash.substring(1)).forEach( (s, i) => {
                t[i] = s
            }
            )
        } catch {}
    return r.searchParams.forEach( (n, s) => {
        t[s] = n
    }
    ),
    t
}
const Dy = e => e ? (...t) => e(...t) : (...t) => fetch(...t)
  , JT = e => typeof e == "object" && e !== null && "status"in e && "ok"in e && "json"in e && typeof e.json == "function"
  , Xn = async (e, t, r) => {
    await e.setItem(t, JSON.stringify(r))
}
  , un = async (e, t) => {
    const r = await e.getItem(t);
    if (!r)
        return null;
    try {
        return JSON.parse(r)
    } catch {
        return r
    }
}
  , Pe = async (e, t) => {
    await e.removeItem(t)
}
;
class Sl {
    constructor() {
        this.promise = new Sl.promiseConstructor( (t, r) => {
            this.resolve = t,
            this.reject = r
        }
        )
    }
}
Sl.promiseConstructor = Promise;
function Vo(e) {
    const t = e.split(".");
    if (t.length !== 3)
        throw new jc("Invalid JWT structure");
    for (let n = 0; n < t.length; n++)
        if (!LT.test(t[n]))
            throw new jc("JWT not in base64url format");
    return {
        header: JSON.parse(cp(t[0])),
        payload: JSON.parse(cp(t[1])),
        signature: ws(t[2]),
        raw: {
            header: t[0],
            payload: t[1]
        }
    }
}
async function QT(e) {
    return await new Promise(t => {
        setTimeout( () => t(null), e)
    }
    )
}
function YT(e, t) {
    return new Promise( (n, s) => {
        (async () => {
            for (let i = 0; i < 1 / 0; i++)
                try {
                    const o = await e(i);
                    if (!t(i, null, o)) {
                        n(o);
                        return
                    }
                } catch (o) {
                    if (!t(i, o)) {
                        s(o);
                        return
                    }
                }
        }
        )()
    }
    )
}
function XT(e) {
    return ("0" + e.toString(16)).substr(-2)
}
function ZT() {
    const t = new Uint32Array(56);
    if (typeof crypto > "u") {
        const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~"
          , n = r.length;
        let s = "";
        for (let i = 0; i < 56; i++)
            s += r.charAt(Math.floor(Math.random() * n));
        return s
    }
    return crypto.getRandomValues(t),
    Array.from(t, XT).join("")
}
async function eC(e) {
    const r = new TextEncoder().encode(e)
      , n = await crypto.subtle.digest("SHA-256", r)
      , s = new Uint8Array(n);
    return Array.from(s).map(i => String.fromCharCode(i)).join("")
}
async function tC(e) {
    if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
        return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),
        e;
    const r = await eC(e);
    return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}
async function Kn(e, t, r=!1) {
    const n = ZT();
    let s = n;
    r && (s += "/PASSWORD_RECOVERY"),
    await Xn(e, `${t}-code-verifier`, s);
    const i = await tC(n);
    return [i, n === i ? "plain" : "s256"]
}
const rC = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function nC(e) {
    const t = e.headers.get(Oc);
    if (!t || !t.match(rC))
        return null;
    try {
        return new Date(`${t}T00:00:00.0Z`)
    } catch {
        return null
    }
}
function sC(e) {
    if (!e)
        throw new Error("Missing exp claim");
    const t = Math.floor(Date.now() / 1e3);
    if (e <= t)
        throw new Error("JWT has expired")
}
function iC(e) {
    switch (e) {
    case "RS256":
        return {
            name: "RSASSA-PKCS1-v1_5",
            hash: {
                name: "SHA-256"
            }
        };
    case "ES256":
        return {
            name: "ECDSA",
            namedCurve: "P-256",
            hash: {
                name: "SHA-256"
            }
        };
    default:
        throw new Error("Invalid alg claim")
    }
}
const oC = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function qn(e) {
    if (!oC.test(e))
        throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")
}
function hu() {
    const e = {};
    return new Proxy(e,{
        get: (t, r) => {
            if (r === "__isUserNotAvailableProxy")
                return !0;
            if (typeof r == "symbol") {
                const n = r.toString();
                if (n === "Symbol(Symbol.toPrimitive)" || n === "Symbol(Symbol.toStringTag)" || n === "Symbol(util.inspect.custom)")
                    return
            }
            throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`)
        }
        ,
        set: (t, r) => {
            throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)
        }
        ,
        deleteProperty: (t, r) => {
            throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)
        }
    })
}
function aC(e, t) {
    return new Proxy(e,{
        get: (r, n, s) => {
            if (n === "__isInsecureUserWarningProxy")
                return !0;
            if (typeof n == "symbol") {
                const i = n.toString();
                if (i === "Symbol(Symbol.toPrimitive)" || i === "Symbol(Symbol.toStringTag)" || i === "Symbol(util.inspect.custom)" || i === "Symbol(nodejs.util.inspect.custom)")
                    return Reflect.get(r, n, s)
            }
            return !t.value && typeof n == "string" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),
            t.value = !0),
            Reflect.get(r, n, s)
        }
    })
}
function dp(e) {
    return JSON.parse(JSON.stringify(e))
}
const hn = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e)
  , lC = [502, 503, 504];
async function hp(e) {
    var t;
    if (!JT(e))
        throw new Nc(hn(e),0);
    if (lC.includes(e.status))
        throw new Nc(hn(e),e.status);
    let r;
    try {
        r = await e.json()
    } catch (i) {
        throw new fn(hn(i),i)
    }
    let n;
    const s = nC(e);
    if (s && s.getTime() >= Iy["2024-01-01"].timestamp && typeof r == "object" && r && typeof r.code == "string" ? n = r.code : typeof r == "object" && r && typeof r.error_code == "string" && (n = r.error_code),
    n) {
        if (n === "weak_password")
            throw new ap(hn(r),e.status,((t = r.weak_password) === null || t === void 0 ? void 0 : t.reasons) || []);
        if (n === "session_not_found")
            throw new et
    } else if (typeof r == "object" && r && typeof r.weak_password == "object" && r.weak_password && Array.isArray(r.weak_password.reasons) && r.weak_password.reasons.length && r.weak_password.reasons.reduce( (i, o) => i && typeof o == "string", !0))
        throw new ap(hn(r),e.status,r.weak_password.reasons);
    throw new DT(hn(r),e.status || 500,n)
}
const uC = (e, t, r, n) => {
    const s = {
        method: e,
        headers: (t == null ? void 0 : t.headers) || {}
    };
    return e === "GET" ? s : (s.headers = Object.assign({
        "Content-Type": "application/json;charset=UTF-8"
    }, t == null ? void 0 : t.headers),
    s.body = JSON.stringify(n),
    Object.assign(Object.assign({}, s), r))
}
;
async function U(e, t, r, n) {
    var s;
    const i = Object.assign({}, n == null ? void 0 : n.headers);
    i[Oc] || (i[Oc] = Iy["2024-01-01"].name),
    n != null && n.jwt && (i.Authorization = `Bearer ${n.jwt}`);
    const o = (s = n == null ? void 0 : n.query) !== null && s !== void 0 ? s : {};
    n != null && n.redirectTo && (o.redirect_to = n.redirectTo);
    const a = Object.keys(o).length ? "?" + new URLSearchParams(o).toString() : ""
      , l = await cC(e, t, r + a, {
        headers: i,
        noResolveJson: n == null ? void 0 : n.noResolveJson
    }, {}, n == null ? void 0 : n.body);
    return n != null && n.xform ? n == null ? void 0 : n.xform(l) : {
        data: Object.assign({}, l),
        error: null
    }
}
async function cC(e, t, r, n, s, i) {
    const o = uC(t, n, s, i);
    let a;
    try {
        a = await e(r, Object.assign({}, o))
    } catch (l) {
        throw console.error(l),
        new Nc(hn(l),0)
    }
    if (a.ok || await hp(a),
    n != null && n.noResolveJson)
        return a;
    try {
        return await a.json()
    } catch (l) {
        await hp(l)
    }
}
function kt(e) {
    var t;
    let r = null;
    fC(e) && (r = Object.assign({}, e),
    e.expires_at || (r.expires_at = KT(e.expires_in)));
    const n = (t = e.user) !== null && t !== void 0 ? t : e;
    return {
        data: {
            session: r,
            user: n
        },
        error: null
    }
}
function fp(e) {
    const t = kt(e);
    return !t.error && e.weak_password && typeof e.weak_password == "object" && Array.isArray(e.weak_password.reasons) && e.weak_password.reasons.length && e.weak_password.message && typeof e.weak_password.message == "string" && e.weak_password.reasons.reduce( (r, n) => r && typeof n == "string", !0) && (t.data.weak_password = e.weak_password),
    t
}
function Nr(e) {
    var t;
    return {
        data: {
            user: (t = e.user) !== null && t !== void 0 ? t : e
        },
        error: null
    }
}
function dC(e) {
    return {
        data: e,
        error: null
    }
}
function hC(e) {
    const {action_link: t, email_otp: r, hashed_token: n, redirect_to: s, verification_type: i} = e
      , o = bl(e, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"])
      , a = {
        action_link: t,
        email_otp: r,
        hashed_token: n,
        redirect_to: s,
        verification_type: i
    }
      , l = Object.assign({}, o);
    return {
        data: {
            properties: a,
            user: l
        },
        error: null
    }
}
function pp(e) {
    return e
}
function fC(e) {
    return e.access_token && e.refresh_token && e.expires_in
}
const fu = ["global", "local", "others"];
class pC {
    constructor({url: t="", headers: r={}, fetch: n}) {
        this.url = t,
        this.headers = r,
        this.fetch = Dy(n),
        this.mfa = {
            listFactors: this._listFactors.bind(this),
            deleteFactor: this._deleteFactor.bind(this)
        },
        this.oauth = {
            listClients: this._listOAuthClients.bind(this),
            createClient: this._createOAuthClient.bind(this),
            getClient: this._getOAuthClient.bind(this),
            updateClient: this._updateOAuthClient.bind(this),
            deleteClient: this._deleteOAuthClient.bind(this),
            regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this)
        },
        this.customProviders = {
            listProviders: this._listCustomProviders.bind(this),
            createProvider: this._createCustomProvider.bind(this),
            getProvider: this._getCustomProvider.bind(this),
            updateProvider: this._updateCustomProvider.bind(this),
            deleteProvider: this._deleteCustomProvider.bind(this)
        }
    }
    async signOut(t, r=fu[0]) {
        if (fu.indexOf(r) < 0)
            throw new Error(`@supabase/auth-js: Parameter scope must be one of ${fu.join(", ")}`);
        try {
            return await U(this.fetch, "POST", `${this.url}/logout?scope=${r}`, {
                headers: this.headers,
                jwt: t,
                noResolveJson: !0
            }),
            {
                data: null,
                error: null
            }
        } catch (n) {
            if (M(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
    async inviteUserByEmail(t, r={}) {
        try {
            return await U(this.fetch, "POST", `${this.url}/invite`, {
                body: {
                    email: t,
                    data: r.data
                },
                headers: this.headers,
                redirectTo: r.redirectTo,
                xform: Nr
            })
        } catch (n) {
            if (M(n))
                return {
                    data: {
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async generateLink(t) {
        try {
            const {options: r} = t
              , n = bl(t, ["options"])
              , s = Object.assign(Object.assign({}, n), r);
            return "newEmail"in n && (s.new_email = n == null ? void 0 : n.newEmail,
            delete s.newEmail),
            await U(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                body: s,
                headers: this.headers,
                xform: hC,
                redirectTo: r == null ? void 0 : r.redirectTo
            })
        } catch (r) {
            if (M(r))
                return {
                    data: {
                        properties: null,
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async createUser(t) {
        try {
            return await U(this.fetch, "POST", `${this.url}/admin/users`, {
                body: t,
                headers: this.headers,
                xform: Nr
            })
        } catch (r) {
            if (M(r))
                return {
                    data: {
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async listUsers(t) {
        var r, n, s, i, o, a, l;
        try {
            const u = {
                nextPage: null,
                lastPage: 0,
                total: 0
            }
              , c = await U(this.fetch, "GET", `${this.url}/admin/users`, {
                headers: this.headers,
                noResolveJson: !0,
                query: {
                    page: (n = (r = t == null ? void 0 : t.page) === null || r === void 0 ? void 0 : r.toString()) !== null && n !== void 0 ? n : "",
                    per_page: (i = (s = t == null ? void 0 : t.perPage) === null || s === void 0 ? void 0 : s.toString()) !== null && i !== void 0 ? i : ""
                },
                xform: pp
            });
            if (c.error)
                throw c.error;
            const d = await c.json()
              , f = (o = c.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0
              , h = (l = (a = c.headers.get("link")) === null || a === void 0 ? void 0 : a.split(",")) !== null && l !== void 0 ? l : [];
            return h.length > 0 && (h.forEach(y => {
                const g = parseInt(y.split(";")[0].split("=")[1].substring(0, 1))
                  , w = JSON.parse(y.split(";")[1].split("=")[1]);
                u[`${w}Page`] = g
            }
            ),
            u.total = parseInt(f)),
            {
                data: Object.assign(Object.assign({}, d), u),
                error: null
            }
        } catch (u) {
            if (M(u))
                return {
                    data: {
                        users: []
                    },
                    error: u
                };
            throw u
        }
    }
    async getUserById(t) {
        qn(t);
        try {
            return await U(this.fetch, "GET", `${this.url}/admin/users/${t}`, {
                headers: this.headers,
                xform: Nr
            })
        } catch (r) {
            if (M(r))
                return {
                    data: {
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async updateUserById(t, r) {
        qn(t);
        try {
            return await U(this.fetch, "PUT", `${this.url}/admin/users/${t}`, {
                body: r,
                headers: this.headers,
                xform: Nr
            })
        } catch (n) {
            if (M(n))
                return {
                    data: {
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async deleteUser(t, r=!1) {
        qn(t);
        try {
            return await U(this.fetch, "DELETE", `${this.url}/admin/users/${t}`, {
                headers: this.headers,
                body: {
                    should_soft_delete: r
                },
                xform: Nr
            })
        } catch (n) {
            if (M(n))
                return {
                    data: {
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async _listFactors(t) {
        qn(t.userId);
        try {
            const {data: r, error: n} = await U(this.fetch, "GET", `${this.url}/admin/users/${t.userId}/factors`, {
                headers: this.headers,
                xform: s => ({
                    data: {
                        factors: s
                    },
                    error: null
                })
            });
            return {
                data: r,
                error: n
            }
        } catch (r) {
            if (M(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
    async _deleteFactor(t) {
        qn(t.userId),
        qn(t.id);
        try {
            return {
                data: await U(this.fetch, "DELETE", `${this.url}/admin/users/${t.userId}/factors/${t.id}`, {
                    headers: this.headers
                }),
                error: null
            }
        } catch (r) {
            if (M(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
    async _listOAuthClients(t) {
        var r, n, s, i, o, a, l;
        try {
            const u = {
                nextPage: null,
                lastPage: 0,
                total: 0
            }
              , c = await U(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
                headers: this.headers,
                noResolveJson: !0,
                query: {
                    page: (n = (r = t == null ? void 0 : t.page) === null || r === void 0 ? void 0 : r.toString()) !== null && n !== void 0 ? n : "",
                    per_page: (i = (s = t == null ? void 0 : t.perPage) === null || s === void 0 ? void 0 : s.toString()) !== null && i !== void 0 ? i : ""
                },
                xform: pp
            });
            if (c.error)
                throw c.error;
            const d = await c.json()
              , f = (o = c.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0
              , h = (l = (a = c.headers.get("link")) === null || a === void 0 ? void 0 : a.split(",")) !== null && l !== void 0 ? l : [];
            return h.length > 0 && (h.forEach(y => {
                const g = parseInt(y.split(";")[0].split("=")[1].substring(0, 1))
                  , w = JSON.parse(y.split(";")[1].split("=")[1]);
                u[`${w}Page`] = g
            }
            ),
            u.total = parseInt(f)),
            {
                data: Object.assign(Object.assign({}, d), u),
                error: null
            }
        } catch (u) {
            if (M(u))
                return {
                    data: {
                        clients: []
                    },
                    error: u
                };
            throw u
        }
    }
    async _createOAuthClient(t) {
        try {
            return await U(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
                body: t,
                headers: this.headers,
                xform: r => ({
                    data: r,
                    error: null
                })
            })
        } catch (r) {
            if (M(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
    async _getOAuthClient(t) {
        try {
            return await U(this.fetch, "GET", `${this.url}/admin/oauth/clients/${t}`, {
                headers: this.headers,
                xform: r => ({
                    data: r,
                    error: null
                })
            })
        } catch (r) {
            if (M(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
    async _updateOAuthClient(t, r) {
        try {
            return await U(this.fetch, "PUT", `${this.url}/admin/oauth/clients/${t}`, {
                body: r,
                headers: this.headers,
                xform: n => ({
                    data: n,
                    error: null
                })
            })
        } catch (n) {
            if (M(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
    async _deleteOAuthClient(t) {
        try {
            return await U(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${t}`, {
                headers: this.headers,
                noResolveJson: !0
            }),
            {
                data: null,
                error: null
            }
        } catch (r) {
            if (M(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
    async _regenerateOAuthClientSecret(t) {
        try {
            return await U(this.fetch, "POST", `${this.url}/admin/oauth/clients/${t}/regenerate_secret`, {
                headers: this.headers,
                xform: r => ({
                    data: r,
                    error: null
                })
            })
        } catch (r) {
            if (M(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
    async _listCustomProviders(t) {
        try {
            const r = {};
            return t != null && t.type && (r.type = t.type),
            await U(this.fetch, "GET", `${this.url}/admin/custom-providers`, {
                headers: this.headers,
                query: r,
                xform: n => {
                    var s;
                    return {
                        data: {
                            providers: (s = n == null ? void 0 : n.providers) !== null && s !== void 0 ? s : []
                        },
                        error: null
                    }
                }
            })
        } catch (r) {
            if (M(r))
                return {
                    data: {
                        providers: []
                    },
                    error: r
                };
            throw r
        }
    }
    async _createCustomProvider(t) {
        try {
            return await U(this.fetch, "POST", `${this.url}/admin/custom-providers`, {
                body: t,
                headers: this.headers,
                xform: r => ({
                    data: r,
                    error: null
                })
            })
        } catch (r) {
            if (M(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
    async _getCustomProvider(t) {
        try {
            return await U(this.fetch, "GET", `${this.url}/admin/custom-providers/${t}`, {
                headers: this.headers,
                xform: r => ({
                    data: r,
                    error: null
                })
            })
        } catch (r) {
            if (M(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
    async _updateCustomProvider(t, r) {
        try {
            return await U(this.fetch, "PUT", `${this.url}/admin/custom-providers/${t}`, {
                body: r,
                headers: this.headers,
                xform: n => ({
                    data: n,
                    error: null
                })
            })
        } catch (n) {
            if (M(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
    async _deleteCustomProvider(t) {
        try {
            return await U(this.fetch, "DELETE", `${this.url}/admin/custom-providers/${t}`, {
                headers: this.headers,
                noResolveJson: !0
            }),
            {
                data: null,
                error: null
            }
        } catch (r) {
            if (M(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
}
function mp(e={}) {
    return {
        getItem: t => e[t] || null,
        setItem: (t, r) => {
            e[t] = r
        }
        ,
        removeItem: t => {
            delete e[t]
        }
    }
}
const Ut = {
    debug: !!(globalThis && $y() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class My extends Error {
    constructor(t) {
        super(t),
        this.isAcquireTimeout = !0
    }
}
class gp extends My {
}
async function mC(e, t, r) {
    Ut.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
    const n = new globalThis.AbortController;
    let s;
    t > 0 && (s = setTimeout( () => {
        n.abort(),
        Ut.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", e)
    }
    , t)),
    await Promise.resolve();
    try {
        return await globalThis.navigator.locks.request(e, t === 0 ? {
            mode: "exclusive",
            ifAvailable: !0
        } : {
            mode: "exclusive",
            signal: n.signal
        }, async i => {
            if (i) {
                clearTimeout(s),
                Ut.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", e, i.name);
                try {
                    return await r()
                } finally {
                    Ut.debug && console.log("@supabase/gotrue-js: navigatorLock: released", e, i.name)
                }
            } else {
                if (t === 0)
                    throw Ut.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", e),
                    new gp(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);
                if (Ut.debug)
                    try {
                        const o = await globalThis.navigator.locks.query();
                        console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(o, null, "  "))
                    } catch (o) {
                        console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", o)
                    }
                return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),
                clearTimeout(s),
                await r()
            }
        }
        )
    } catch (i) {
        if (t > 0 && clearTimeout(s),
        (i == null ? void 0 : i.name) === "AbortError" && t > 0) {
            if (n.signal.aborted)
                return Ut.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire timeout, recovering by stealing lock", e),
                console.warn(`@supabase/gotrue-js: Lock "${e}" was not released within ${t}ms. This may indicate an orphaned lock from a component unmount (e.g., React Strict Mode). Forcefully acquiring the lock to recover.`),
                await Promise.resolve().then( () => globalThis.navigator.locks.request(e, {
                    mode: "exclusive",
                    steal: !0
                }, async o => {
                    if (o) {
                        Ut.debug && console.log("@supabase/gotrue-js: navigatorLock: recovered (stolen)", e, o.name);
                        try {
                            return await r()
                        } finally {
                            Ut.debug && console.log("@supabase/gotrue-js: navigatorLock: released (stolen)", e, o.name)
                        }
                    } else
                        return console.warn("@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true"),
                        await r()
                }
                ));
            throw Ut.debug && console.log("@supabase/gotrue-js: navigatorLock: lock was stolen by another request", e),
            new gp(`Lock "${e}" was released because another request stole it`)
        }
        throw i
    }
}
function gC() {
    if (typeof globalThis != "object")
        try {
            Object.defineProperty(Object.prototype, "__magic__", {
                get: function() {
                    return this
                },
                configurable: !0
            }),
            __magic__.globalThis = __magic__,
            delete Object.prototype.__magic__
        } catch {
            typeof self < "u" && (self.globalThis = self)
        }
}
function Uy(e) {
    if (!/^0x[a-fA-F0-9]{40}$/.test(e))
        throw new Error(`@supabase/auth-js: Address "${e}" is invalid.`);
    return e.toLowerCase()
}
function vC(e) {
    return parseInt(e, 16)
}
function yC(e) {
    const t = new TextEncoder().encode(e);
    return "0x" + Array.from(t, n => n.toString(16).padStart(2, "0")).join("")
}
function wC(e) {
    var t;
    const {chainId: r, domain: n, expirationTime: s, issuedAt: i=new Date, nonce: o, notBefore: a, requestId: l, resources: u, scheme: c, uri: d, version: f} = e;
    {
        if (!Number.isInteger(r))
            throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${r}`);
        if (!n)
            throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');
        if (o && o.length < 8)
            throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${o}`);
        if (!d)
            throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');
        if (f !== "1")
            throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${f}`);
        if (!((t = e.statement) === null || t === void 0) && t.includes(`
`))
            throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`)
    }
    const h = Uy(e.address)
      , y = c ? `${c}://${n}` : n
      , g = e.statement ? `${e.statement}
` : ""
      , w = `${y} wants you to sign in with your Ethereum account:
${h}

${g}`;
    let m = `URI: ${d}
Version: ${f}
Chain ID: ${r}${o ? `
Nonce: ${o}` : ""}
Issued At: ${i.toISOString()}`;
    if (s && (m += `
Expiration Time: ${s.toISOString()}`),
    a && (m += `
Not Before: ${a.toISOString()}`),
    l && (m += `
Request ID: ${l}`),
    u) {
        let p = `
Resources:`;
        for (const v of u) {
            if (!v || typeof v != "string")
                throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${v}`);
            p += `
- ${v}`
        }
        m += p
    }
    return `${w}
${m}`
}
class be extends Error {
    constructor({message: t, code: r, cause: n, name: s}) {
        var i;
        super(t, {
            cause: n
        }),
        this.__isWebAuthnError = !0,
        this.name = (i = s ?? (n instanceof Error ? n.name : void 0)) !== null && i !== void 0 ? i : "Unknown Error",
        this.code = r
    }
}
class Ba extends be {
    constructor(t, r) {
        super({
            code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
            cause: r,
            message: t
        }),
        this.name = "WebAuthnUnknownError",
        this.originalError = r
    }
}
function bC({error: e, options: t}) {
    var r, n, s;
    const {publicKey: i} = t;
    if (!i)
        throw Error("options was missing required publicKey property");
    if (e.name === "AbortError") {
        if (t.signal instanceof AbortSignal)
            return new be({
                message: "Registration ceremony was sent an abort signal",
                code: "ERROR_CEREMONY_ABORTED",
                cause: e
            })
    } else if (e.name === "ConstraintError") {
        if (((r = i.authenticatorSelection) === null || r === void 0 ? void 0 : r.requireResidentKey) === !0)
            return new be({
                message: "Discoverable credentials were required but no available authenticator supported it",
                code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
                cause: e
            });
        if (t.mediation === "conditional" && ((n = i.authenticatorSelection) === null || n === void 0 ? void 0 : n.userVerification) === "required")
            return new be({
                message: "User verification was required during automatic registration but it could not be performed",
                code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
                cause: e
            });
        if (((s = i.authenticatorSelection) === null || s === void 0 ? void 0 : s.userVerification) === "required")
            return new be({
                message: "User verification was required but no available authenticator supported it",
                code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
                cause: e
            })
    } else {
        if (e.name === "InvalidStateError")
            return new be({
                message: "The authenticator was previously registered",
                code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
                cause: e
            });
        if (e.name === "NotAllowedError")
            return new be({
                message: e.message,
                code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
                cause: e
            });
        if (e.name === "NotSupportedError")
            return i.pubKeyCredParams.filter(a => a.type === "public-key").length === 0 ? new be({
                message: 'No entry in pubKeyCredParams was of type "public-key"',
                code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
                cause: e
            }) : new be({
                message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
                code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
                cause: e
            });
        if (e.name === "SecurityError") {
            const o = window.location.hostname;
            if (Fy(o)) {
                if (i.rp.id !== o)
                    return new be({
                        message: `The RP ID "${i.rp.id}" is invalid for this domain`,
                        code: "ERROR_INVALID_RP_ID",
                        cause: e
                    })
            } else
                return new be({
                    message: `${window.location.hostname} is an invalid domain`,
                    code: "ERROR_INVALID_DOMAIN",
                    cause: e
                })
        } else if (e.name === "TypeError") {
            if (i.user.id.byteLength < 1 || i.user.id.byteLength > 64)
                return new be({
                    message: "User ID was not between 1 and 64 characters",
                    code: "ERROR_INVALID_USER_ID_LENGTH",
                    cause: e
                })
        } else if (e.name === "UnknownError")
            return new be({
                message: "The authenticator was unable to process the specified options, or could not create a new credential",
                code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
                cause: e
            })
    }
    return new be({
        message: "a Non-Webauthn related error has occurred",
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: e
    })
}
function xC({error: e, options: t}) {
    const {publicKey: r} = t;
    if (!r)
        throw Error("options was missing required publicKey property");
    if (e.name === "AbortError") {
        if (t.signal instanceof AbortSignal)
            return new be({
                message: "Authentication ceremony was sent an abort signal",
                code: "ERROR_CEREMONY_ABORTED",
                cause: e
            })
    } else {
        if (e.name === "NotAllowedError")
            return new be({
                message: e.message,
                code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
                cause: e
            });
        if (e.name === "SecurityError") {
            const n = window.location.hostname;
            if (Fy(n)) {
                if (r.rpId !== n)
                    return new be({
                        message: `The RP ID "${r.rpId}" is invalid for this domain`,
                        code: "ERROR_INVALID_RP_ID",
                        cause: e
                    })
            } else
                return new be({
                    message: `${window.location.hostname} is an invalid domain`,
                    code: "ERROR_INVALID_DOMAIN",
                    cause: e
                })
        } else if (e.name === "UnknownError")
            return new be({
                message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
                code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
                cause: e
            })
    }
    return new be({
        message: "a Non-Webauthn related error has occurred",
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: e
    })
}
class _C {
    createNewAbortSignal() {
        if (this.controller) {
            const r = new Error("Cancelling existing WebAuthn API call for new one");
            r.name = "AbortError",
            this.controller.abort(r)
        }
        const t = new AbortController;
        return this.controller = t,
        t.signal
    }
    cancelCeremony() {
        if (this.controller) {
            const t = new Error("Manually cancelling existing WebAuthn API call");
            t.name = "AbortError",
            this.controller.abort(t),
            this.controller = void 0
        }
    }
}
const SC = new _C;
function kC(e) {
    if (!e)
        throw new Error("Credential creation options are required");
    if (typeof PublicKeyCredential < "u" && "parseCreationOptionsFromJSON"in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function")
        return PublicKeyCredential.parseCreationOptionsFromJSON(e);
    const {challenge: t, user: r, excludeCredentials: n} = e
      , s = bl(e, ["challenge", "user", "excludeCredentials"])
      , i = ws(t).buffer
      , o = Object.assign(Object.assign({}, r), {
        id: ws(r.id).buffer
    })
      , a = Object.assign(Object.assign({}, s), {
        challenge: i,
        user: o
    });
    if (n && n.length > 0) {
        a.excludeCredentials = new Array(n.length);
        for (let l = 0; l < n.length; l++) {
            const u = n[l];
            a.excludeCredentials[l] = Object.assign(Object.assign({}, u), {
                id: ws(u.id).buffer,
                type: u.type || "public-key",
                transports: u.transports
            })
        }
    }
    return a
}
function EC(e) {
    if (!e)
        throw new Error("Credential request options are required");
    if (typeof PublicKeyCredential < "u" && "parseRequestOptionsFromJSON"in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function")
        return PublicKeyCredential.parseRequestOptionsFromJSON(e);
    const {challenge: t, allowCredentials: r} = e
      , n = bl(e, ["challenge", "allowCredentials"])
      , s = ws(t).buffer
      , i = Object.assign(Object.assign({}, n), {
        challenge: s
    });
    if (r && r.length > 0) {
        i.allowCredentials = new Array(r.length);
        for (let o = 0; o < r.length; o++) {
            const a = r[o];
            i.allowCredentials[o] = Object.assign(Object.assign({}, a), {
                id: ws(a.id).buffer,
                type: a.type || "public-key",
                transports: a.transports
            })
        }
    }
    return i
}
function TC(e) {
    var t;
    if ("toJSON"in e && typeof e.toJSON == "function")
        return e.toJSON();
    const r = e;
    return {
        id: e.id,
        rawId: e.id,
        response: {
            attestationObject: vn(new Uint8Array(e.response.attestationObject)),
            clientDataJSON: vn(new Uint8Array(e.response.clientDataJSON))
        },
        type: "public-key",
        clientExtensionResults: e.getClientExtensionResults(),
        authenticatorAttachment: (t = r.authenticatorAttachment) !== null && t !== void 0 ? t : void 0
    }
}
function CC(e) {
    var t;
    if ("toJSON"in e && typeof e.toJSON == "function")
        return e.toJSON();
    const r = e
      , n = e.getClientExtensionResults()
      , s = e.response;
    return {
        id: e.id,
        rawId: e.id,
        response: {
            authenticatorData: vn(new Uint8Array(s.authenticatorData)),
            clientDataJSON: vn(new Uint8Array(s.clientDataJSON)),
            signature: vn(new Uint8Array(s.signature)),
            userHandle: s.userHandle ? vn(new Uint8Array(s.userHandle)) : void 0
        },
        type: "public-key",
        clientExtensionResults: n,
        authenticatorAttachment: (t = r.authenticatorAttachment) !== null && t !== void 0 ? t : void 0
    }
}
function Fy(e) {
    return e === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e)
}
function vp() {
    var e, t;
    return !!(Re() && "PublicKeyCredential"in window && window.PublicKeyCredential && "credentials"in navigator && typeof ((e = navigator == null ? void 0 : navigator.credentials) === null || e === void 0 ? void 0 : e.create) == "function" && typeof ((t = navigator == null ? void 0 : navigator.credentials) === null || t === void 0 ? void 0 : t.get) == "function")
}
async function PC(e) {
    try {
        const t = await navigator.credentials.create(e);
        return t ? t instanceof PublicKeyCredential ? {
            data: t,
            error: null
        } : {
            data: null,
            error: new Ba("Browser returned unexpected credential type",t)
        } : {
            data: null,
            error: new Ba("Empty credential response",t)
        }
    } catch (t) {
        return {
            data: null,
            error: bC({
                error: t,
                options: e
            })
        }
    }
}
async function RC(e) {
    try {
        const t = await navigator.credentials.get(e);
        return t ? t instanceof PublicKeyCredential ? {
            data: t,
            error: null
        } : {
            data: null,
            error: new Ba("Browser returned unexpected credential type",t)
        } : {
            data: null,
            error: new Ba("Empty credential response",t)
        }
    } catch (t) {
        return {
            data: null,
            error: xC({
                error: t,
                options: e
            })
        }
    }
}
const AC = {
    hints: ["security-key"],
    authenticatorSelection: {
        authenticatorAttachment: "cross-platform",
        requireResidentKey: !1,
        userVerification: "preferred",
        residentKey: "discouraged"
    },
    attestation: "direct"
}
  , OC = {
    userVerification: "preferred",
    hints: ["security-key"],
    attestation: "direct"
};
function za(...e) {
    const t = s => s !== null && typeof s == "object" && !Array.isArray(s)
      , r = s => s instanceof ArrayBuffer || ArrayBuffer.isView(s)
      , n = {};
    for (const s of e)
        if (s)
            for (const i in s) {
                const o = s[i];
                if (o !== void 0)
                    if (Array.isArray(o))
                        n[i] = o;
                    else if (r(o))
                        n[i] = o;
                    else if (t(o)) {
                        const a = n[i];
                        t(a) ? n[i] = za(a, o) : n[i] = za(o)
                    } else
                        n[i] = o
            }
    return n
}
function NC(e, t) {
    return za(AC, e, t || {})
}
function jC(e, t) {
    return za(OC, e, t || {})
}
class IC {
    constructor(t) {
        this.client = t,
        this.enroll = this._enroll.bind(this),
        this.challenge = this._challenge.bind(this),
        this.verify = this._verify.bind(this),
        this.authenticate = this._authenticate.bind(this),
        this.register = this._register.bind(this)
    }
    async _enroll(t) {
        return this.client.mfa.enroll(Object.assign(Object.assign({}, t), {
            factorType: "webauthn"
        }))
    }
    async _challenge({factorId: t, webauthn: r, friendlyName: n, signal: s}, i) {
        var o;
        try {
            const {data: a, error: l} = await this.client.mfa.challenge({
                factorId: t,
                webauthn: r
            });
            if (!a)
                return {
                    data: null,
                    error: l
                };
            const u = s ?? SC.createNewAbortSignal();
            if (a.webauthn.type === "create") {
                const {user: c} = a.webauthn.credential_options.publicKey;
                if (!c.name) {
                    const d = n;
                    if (d)
                        c.name = `${c.id}:${d}`;
                    else {
                        const h = (await this.client.getUser()).data.user
                          , y = ((o = h == null ? void 0 : h.user_metadata) === null || o === void 0 ? void 0 : o.name) || (h == null ? void 0 : h.email) || (h == null ? void 0 : h.id) || "User";
                        c.name = `${c.id}:${y}`
                    }
                }
                c.displayName || (c.displayName = c.name)
            }
            switch (a.webauthn.type) {
            case "create":
                {
                    const c = NC(a.webauthn.credential_options.publicKey, i == null ? void 0 : i.create)
                      , {data: d, error: f} = await PC({
                        publicKey: c,
                        signal: u
                    });
                    return d ? {
                        data: {
                            factorId: t,
                            challengeId: a.id,
                            webauthn: {
                                type: a.webauthn.type,
                                credential_response: d
                            }
                        },
                        error: null
                    } : {
                        data: null,
                        error: f
                    }
                }
            case "request":
                {
                    const c = jC(a.webauthn.credential_options.publicKey, i == null ? void 0 : i.request)
                      , {data: d, error: f} = await RC(Object.assign(Object.assign({}, a.webauthn.credential_options), {
                        publicKey: c,
                        signal: u
                    }));
                    return d ? {
                        data: {
                            factorId: t,
                            challengeId: a.id,
                            webauthn: {
                                type: a.webauthn.type,
                                credential_response: d
                            }
                        },
                        error: null
                    } : {
                        data: null,
                        error: f
                    }
                }
            }
        } catch (a) {
            return M(a) ? {
                data: null,
                error: a
            } : {
                data: null,
                error: new fn("Unexpected error in challenge",a)
            }
        }
    }
    async _verify({challengeId: t, factorId: r, webauthn: n}) {
        return this.client.mfa.verify({
            factorId: r,
            challengeId: t,
            webauthn: n
        })
    }
    async _authenticate({factorId: t, webauthn: {rpId: r=typeof window < "u" ? window.location.hostname : void 0, rpOrigins: n=typeof window < "u" ? [window.location.origin] : void 0, signal: s}={}}, i) {
        if (!r)
            return {
                data: null,
                error: new Xi("rpId is required for WebAuthn authentication")
            };
        try {
            if (!vp())
                return {
                    data: null,
                    error: new fn("Browser does not support WebAuthn",null)
                };
            const {data: o, error: a} = await this.challenge({
                factorId: t,
                webauthn: {
                    rpId: r,
                    rpOrigins: n
                },
                signal: s
            }, {
                request: i
            });
            if (!o)
                return {
                    data: null,
                    error: a
                };
            const {webauthn: l} = o;
            return this._verify({
                factorId: t,
                challengeId: o.challengeId,
                webauthn: {
                    type: l.type,
                    rpId: r,
                    rpOrigins: n,
                    credential_response: l.credential_response
                }
            })
        } catch (o) {
            return M(o) ? {
                data: null,
                error: o
            } : {
                data: null,
                error: new fn("Unexpected error in authenticate",o)
            }
        }
    }
    async _register({friendlyName: t, webauthn: {rpId: r=typeof window < "u" ? window.location.hostname : void 0, rpOrigins: n=typeof window < "u" ? [window.location.origin] : void 0, signal: s}={}}, i) {
        if (!r)
            return {
                data: null,
                error: new Xi("rpId is required for WebAuthn registration")
            };
        try {
            if (!vp())
                return {
                    data: null,
                    error: new fn("Browser does not support WebAuthn",null)
                };
            const {data: o, error: a} = await this._enroll({
                friendlyName: t
            });
            if (!o)
                return await this.client.mfa.listFactors().then(c => {
                    var d;
                    return (d = c.data) === null || d === void 0 ? void 0 : d.all.find(f => f.factor_type === "webauthn" && f.friendly_name === t && f.status !== "unverified")
                }
                ).then(c => c ? this.client.mfa.unenroll({
                    factorId: c == null ? void 0 : c.id
                }) : void 0),
                {
                    data: null,
                    error: a
                };
            const {data: l, error: u} = await this._challenge({
                factorId: o.id,
                friendlyName: o.friendly_name,
                webauthn: {
                    rpId: r,
                    rpOrigins: n
                },
                signal: s
            }, {
                create: i
            });
            return l ? this._verify({
                factorId: o.id,
                challengeId: l.challengeId,
                webauthn: {
                    rpId: r,
                    rpOrigins: n,
                    type: l.webauthn.type,
                    credential_response: l.webauthn.credential_response
                }
            }) : {
                data: null,
                error: u
            }
        } catch (o) {
            return M(o) ? {
                data: null,
                error: o
            } : {
                data: null,
                error: new fn("Unexpected error in register",o)
            }
        }
    }
}
gC();
const LC = {
    url: NT,
    storageKey: jT,
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    headers: IT,
    flowType: "implicit",
    debug: !1,
    hasCustomAuthorizationHeader: !1,
    throwOnError: !1,
    lockAcquireTimeout: 5e3,
    skipAutoInitialize: !1
};
async function yp(e, t, r) {
    return await r()
}
const Gn = {};
class Zi {
    get jwks() {
        var t, r;
        return (r = (t = Gn[this.storageKey]) === null || t === void 0 ? void 0 : t.jwks) !== null && r !== void 0 ? r : {
            keys: []
        }
    }
    set jwks(t) {
        Gn[this.storageKey] = Object.assign(Object.assign({}, Gn[this.storageKey]), {
            jwks: t
        })
    }
    get jwks_cached_at() {
        var t, r;
        return (r = (t = Gn[this.storageKey]) === null || t === void 0 ? void 0 : t.cachedAt) !== null && r !== void 0 ? r : Number.MIN_SAFE_INTEGER
    }
    set jwks_cached_at(t) {
        Gn[this.storageKey] = Object.assign(Object.assign({}, Gn[this.storageKey]), {
            cachedAt: t
        })
    }
    constructor(t) {
        var r, n, s;
        this.userStorage = null,
        this.memoryStorage = null,
        this.stateChangeEmitters = new Map,
        this.autoRefreshTicker = null,
        this.autoRefreshTickTimeout = null,
        this.visibilityChangedCallback = null,
        this.refreshingDeferred = null,
        this.initializePromise = null,
        this.detectSessionInUrl = !0,
        this.hasCustomAuthorizationHeader = !1,
        this.suppressGetSessionWarning = !1,
        this.lockAcquired = !1,
        this.pendingInLock = [],
        this.broadcastChannel = null,
        this.logger = console.log;
        const i = Object.assign(Object.assign({}, LC), t);
        if (this.storageKey = i.storageKey,
        this.instanceID = (r = Zi.nextInstanceID[this.storageKey]) !== null && r !== void 0 ? r : 0,
        Zi.nextInstanceID[this.storageKey] = this.instanceID + 1,
        this.logDebugMessages = !!i.debug,
        typeof i.debug == "function" && (this.logger = i.debug),
        this.instanceID > 0 && Re()) {
            const o = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
            console.warn(o),
            this.logDebugMessages && console.trace(o)
        }
        if (this.persistSession = i.persistSession,
        this.autoRefreshToken = i.autoRefreshToken,
        this.admin = new pC({
            url: i.url,
            headers: i.headers,
            fetch: i.fetch
        }),
        this.url = i.url,
        this.headers = i.headers,
        this.fetch = Dy(i.fetch),
        this.lock = i.lock || yp,
        this.detectSessionInUrl = i.detectSessionInUrl,
        this.flowType = i.flowType,
        this.hasCustomAuthorizationHeader = i.hasCustomAuthorizationHeader,
        this.throwOnError = i.throwOnError,
        this.lockAcquireTimeout = i.lockAcquireTimeout,
        i.lock ? this.lock = i.lock : this.persistSession && Re() && (!((n = globalThis == null ? void 0 : globalThis.navigator) === null || n === void 0) && n.locks) ? this.lock = mC : this.lock = yp,
        this.jwks || (this.jwks = {
            keys: []
        },
        this.jwks_cached_at = Number.MIN_SAFE_INTEGER),
        this.mfa = {
            verify: this._verify.bind(this),
            enroll: this._enroll.bind(this),
            unenroll: this._unenroll.bind(this),
            challenge: this._challenge.bind(this),
            listFactors: this._listFactors.bind(this),
            challengeAndVerify: this._challengeAndVerify.bind(this),
            getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
            webauthn: new IC(this)
        },
        this.oauth = {
            getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
            approveAuthorization: this._approveAuthorization.bind(this),
            denyAuthorization: this._denyAuthorization.bind(this),
            listGrants: this._listOAuthGrants.bind(this),
            revokeGrant: this._revokeOAuthGrant.bind(this)
        },
        this.persistSession ? (i.storage ? this.storage = i.storage : $y() ? this.storage = globalThis.localStorage : (this.memoryStorage = {},
        this.storage = mp(this.memoryStorage)),
        i.userStorage && (this.userStorage = i.userStorage)) : (this.memoryStorage = {},
        this.storage = mp(this.memoryStorage)),
        Re() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
            try {
                this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey)
            } catch (o) {
                console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", o)
            }
            (s = this.broadcastChannel) === null || s === void 0 || s.addEventListener("message", async o => {
                this._debug("received broadcast notification from other tab or client", o);
                try {
                    await this._notifyAllSubscribers(o.data.event, o.data.session, !1)
                } catch (a) {
                    this._debug("#broadcastChannel", "error", a)
                }
            }
            )
        }
        i.skipAutoInitialize || this.initialize().catch(o => {
            this._debug("#initialize()", "error", o)
        }
        )
    }
    isThrowOnErrorEnabled() {
        return this.throwOnError
    }
    _returnResult(t) {
        if (this.throwOnError && t && t.error)
            throw t.error;
        return t
    }
    _logPrefix() {
        return `GoTrueClient@${this.storageKey}:${this.instanceID} (${jy}) ${new Date().toISOString()}`
    }
    _debug(...t) {
        return this.logDebugMessages && this.logger(this._logPrefix(), ...t),
        this
    }
    async initialize() {
        return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(this.lockAcquireTimeout, async () => await this._initialize()))(),
        await this.initializePromise)
    }
    async _initialize() {
        var t;
        try {
            let r = {}
              , n = "none";
            if (Re() && (r = GT(window.location.href),
            this._isImplicitGrantCallback(r) ? n = "implicit" : await this._isPKCECallback(r) && (n = "pkce")),
            Re() && this.detectSessionInUrl && n !== "none") {
                const {data: s, error: i} = await this._getSessionFromURL(r, n);
                if (i) {
                    if (this._debug("#_initialize()", "error detecting session from URL", i),
                    UT(i)) {
                        const l = (t = i.details) === null || t === void 0 ? void 0 : t.code;
                        if (l === "identity_already_exists" || l === "identity_not_found" || l === "single_identity_not_deletable")
                            return {
                                error: i
                            }
                    }
                    return {
                        error: i
                    }
                }
                const {session: o, redirectType: a} = s;
                return this._debug("#_initialize()", "detected session in URL", o, "redirect type", a),
                await this._saveSession(o),
                setTimeout(async () => {
                    a === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", o) : await this._notifyAllSubscribers("SIGNED_IN", o)
                }
                , 0),
                {
                    error: null
                }
            }
            return await this._recoverAndRefresh(),
            {
                error: null
            }
        } catch (r) {
            return M(r) ? this._returnResult({
                error: r
            }) : this._returnResult({
                error: new fn("Unexpected error during initialization",r)
            })
        } finally {
            await this._handleVisibilityChange(),
            this._debug("#_initialize()", "end")
        }
    }
    async signInAnonymously(t) {
        var r, n, s;
        try {
            const i = await U(this.fetch, "POST", `${this.url}/signup`, {
                headers: this.headers,
                body: {
                    data: (n = (r = t == null ? void 0 : t.options) === null || r === void 0 ? void 0 : r.data) !== null && n !== void 0 ? n : {},
                    gotrue_meta_security: {
                        captcha_token: (s = t == null ? void 0 : t.options) === null || s === void 0 ? void 0 : s.captchaToken
                    }
                },
                xform: kt
            })
              , {data: o, error: a} = i;
            if (a || !o)
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: a
                });
            const l = o.session
              , u = o.user;
            return o.session && (await this._saveSession(o.session),
            await this._notifyAllSubscribers("SIGNED_IN", l)),
            this._returnResult({
                data: {
                    user: u,
                    session: l
                },
                error: null
            })
        } catch (i) {
            if (M(i))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: i
                });
            throw i
        }
    }
    async signUp(t) {
        var r, n, s;
        try {
            let i;
            if ("email"in t) {
                const {email: c, password: d, options: f} = t;
                let h = null
                  , y = null;
                this.flowType === "pkce" && ([h,y] = await Kn(this.storage, this.storageKey)),
                i = await U(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    redirectTo: f == null ? void 0 : f.emailRedirectTo,
                    body: {
                        email: c,
                        password: d,
                        data: (r = f == null ? void 0 : f.data) !== null && r !== void 0 ? r : {},
                        gotrue_meta_security: {
                            captcha_token: f == null ? void 0 : f.captchaToken
                        },
                        code_challenge: h,
                        code_challenge_method: y
                    },
                    xform: kt
                })
            } else if ("phone"in t) {
                const {phone: c, password: d, options: f} = t;
                i = await U(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    body: {
                        phone: c,
                        password: d,
                        data: (n = f == null ? void 0 : f.data) !== null && n !== void 0 ? n : {},
                        channel: (s = f == null ? void 0 : f.channel) !== null && s !== void 0 ? s : "sms",
                        gotrue_meta_security: {
                            captcha_token: f == null ? void 0 : f.captchaToken
                        }
                    },
                    xform: kt
                })
            } else
                throw new Ho("You must provide either an email or phone number and a password");
            const {data: o, error: a} = i;
            if (a || !o)
                return await Pe(this.storage, `${this.storageKey}-code-verifier`),
                this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: a
                });
            const l = o.session
              , u = o.user;
            return o.session && (await this._saveSession(o.session),
            await this._notifyAllSubscribers("SIGNED_IN", l)),
            this._returnResult({
                data: {
                    user: u,
                    session: l
                },
                error: null
            })
        } catch (i) {
            if (await Pe(this.storage, `${this.storageKey}-code-verifier`),
            M(i))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: i
                });
            throw i
        }
    }
    async signInWithPassword(t) {
        try {
            let r;
            if ("email"in t) {
                const {email: i, password: o, options: a} = t;
                r = await U(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        email: i,
                        password: o,
                        gotrue_meta_security: {
                            captcha_token: a == null ? void 0 : a.captchaToken
                        }
                    },
                    xform: fp
                })
            } else if ("phone"in t) {
                const {phone: i, password: o, options: a} = t;
                r = await U(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        phone: i,
                        password: o,
                        gotrue_meta_security: {
                            captcha_token: a == null ? void 0 : a.captchaToken
                        }
                    },
                    xform: fp
                })
            } else
                throw new Ho("You must provide either an email or phone number and a password");
            const {data: n, error: s} = r;
            if (s)
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: s
                });
            if (!n || !n.session || !n.user) {
                const i = new Vn;
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: i
                })
            }
            return n.session && (await this._saveSession(n.session),
            await this._notifyAllSubscribers("SIGNED_IN", n.session)),
            this._returnResult({
                data: Object.assign({
                    user: n.user,
                    session: n.session
                }, n.weak_password ? {
                    weakPassword: n.weak_password
                } : null),
                error: s
            })
        } catch (r) {
            if (M(r))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: r
                });
            throw r
        }
    }
    async signInWithOAuth(t) {
        var r, n, s, i;
        return await this._handleProviderSignIn(t.provider, {
            redirectTo: (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo,
            scopes: (n = t.options) === null || n === void 0 ? void 0 : n.scopes,
            queryParams: (s = t.options) === null || s === void 0 ? void 0 : s.queryParams,
            skipBrowserRedirect: (i = t.options) === null || i === void 0 ? void 0 : i.skipBrowserRedirect
        })
    }
    async exchangeCodeForSession(t) {
        return await this.initializePromise,
        this._acquireLock(this.lockAcquireTimeout, async () => this._exchangeCodeForSession(t))
    }
    async signInWithWeb3(t) {
        const {chain: r} = t;
        switch (r) {
        case "ethereum":
            return await this.signInWithEthereum(t);
        case "solana":
            return await this.signInWithSolana(t);
        default:
            throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`)
        }
    }
    async signInWithEthereum(t) {
        var r, n, s, i, o, a, l, u, c, d, f;
        let h, y;
        if ("message"in t)
            h = t.message,
            y = t.signature;
        else {
            const {chain: g, wallet: w, statement: m, options: p} = t;
            let v;
            if (Re())
                if (typeof w == "object")
                    v = w;
                else {
                    const O = window;
                    if ("ethereum"in O && typeof O.ethereum == "object" && "request"in O.ethereum && typeof O.ethereum.request == "function")
                        v = O.ethereum;
                    else
                        throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")
                }
            else {
                if (typeof w != "object" || !(p != null && p.url))
                    throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
                v = w
            }
            const x = new URL((r = p == null ? void 0 : p.url) !== null && r !== void 0 ? r : window.location.href)
              , S = await v.request({
                method: "eth_requestAccounts"
            }).then(O => O).catch( () => {
                throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")
            }
            );
            if (!S || S.length === 0)
                throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");
            const k = Uy(S[0]);
            let E = (n = p == null ? void 0 : p.signInWithEthereum) === null || n === void 0 ? void 0 : n.chainId;
            if (!E) {
                const O = await v.request({
                    method: "eth_chainId"
                });
                E = vC(O)
            }
            const R = {
                domain: x.host,
                address: k,
                statement: m,
                uri: x.href,
                version: "1",
                chainId: E,
                nonce: (s = p == null ? void 0 : p.signInWithEthereum) === null || s === void 0 ? void 0 : s.nonce,
                issuedAt: (o = (i = p == null ? void 0 : p.signInWithEthereum) === null || i === void 0 ? void 0 : i.issuedAt) !== null && o !== void 0 ? o : new Date,
                expirationTime: (a = p == null ? void 0 : p.signInWithEthereum) === null || a === void 0 ? void 0 : a.expirationTime,
                notBefore: (l = p == null ? void 0 : p.signInWithEthereum) === null || l === void 0 ? void 0 : l.notBefore,
                requestId: (u = p == null ? void 0 : p.signInWithEthereum) === null || u === void 0 ? void 0 : u.requestId,
                resources: (c = p == null ? void 0 : p.signInWithEthereum) === null || c === void 0 ? void 0 : c.resources
            };
            h = wC(R),
            y = await v.request({
                method: "personal_sign",
                params: [yC(h), k]
            })
        }
        try {
            const {data: g, error: w} = await U(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
                headers: this.headers,
                body: Object.assign({
                    chain: "ethereum",
                    message: h,
                    signature: y
                }, !((d = t.options) === null || d === void 0) && d.captchaToken ? {
                    gotrue_meta_security: {
                        captcha_token: (f = t.options) === null || f === void 0 ? void 0 : f.captchaToken
                    }
                } : null),
                xform: kt
            });
            if (w)
                throw w;
            if (!g || !g.session || !g.user) {
                const m = new Vn;
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: m
                })
            }
            return g.session && (await this._saveSession(g.session),
            await this._notifyAllSubscribers("SIGNED_IN", g.session)),
            this._returnResult({
                data: Object.assign({}, g),
                error: w
            })
        } catch (g) {
            if (M(g))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: g
                });
            throw g
        }
    }
    async signInWithSolana(t) {
        var r, n, s, i, o, a, l, u, c, d, f, h;
        let y, g;
        if ("message"in t)
            y = t.message,
            g = t.signature;
        else {
            const {chain: w, wallet: m, statement: p, options: v} = t;
            let x;
            if (Re())
                if (typeof m == "object")
                    x = m;
                else {
                    const k = window;
                    if ("solana"in k && typeof k.solana == "object" && ("signIn"in k.solana && typeof k.solana.signIn == "function" || "signMessage"in k.solana && typeof k.solana.signMessage == "function"))
                        x = k.solana;
                    else
                        throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")
                }
            else {
                if (typeof m != "object" || !(v != null && v.url))
                    throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
                x = m
            }
            const S = new URL((r = v == null ? void 0 : v.url) !== null && r !== void 0 ? r : window.location.href);
            if ("signIn"in x && x.signIn) {
                const k = await x.signIn(Object.assign(Object.assign(Object.assign({
                    issuedAt: new Date().toISOString()
                }, v == null ? void 0 : v.signInWithSolana), {
                    version: "1",
                    domain: S.host,
                    uri: S.href
                }), p ? {
                    statement: p
                } : null));
                let E;
                if (Array.isArray(k) && k[0] && typeof k[0] == "object")
                    E = k[0];
                else if (k && typeof k == "object" && "signedMessage"in k && "signature"in k)
                    E = k;
                else
                    throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
                if ("signedMessage"in E && "signature"in E && (typeof E.signedMessage == "string" || E.signedMessage instanceof Uint8Array) && E.signature instanceof Uint8Array)
                    y = typeof E.signedMessage == "string" ? E.signedMessage : new TextDecoder().decode(E.signedMessage),
                    g = E.signature;
                else
                    throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")
            } else {
                if (!("signMessage"in x) || typeof x.signMessage != "function" || !("publicKey"in x) || typeof x != "object" || !x.publicKey || !("toBase58"in x.publicKey) || typeof x.publicKey.toBase58 != "function")
                    throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
                y = [`${S.host} wants you to sign in with your Solana account:`, x.publicKey.toBase58(), ...p ? ["", p, ""] : [""], "Version: 1", `URI: ${S.href}`, `Issued At: ${(s = (n = v == null ? void 0 : v.signInWithSolana) === null || n === void 0 ? void 0 : n.issuedAt) !== null && s !== void 0 ? s : new Date().toISOString()}`, ...!((i = v == null ? void 0 : v.signInWithSolana) === null || i === void 0) && i.notBefore ? [`Not Before: ${v.signInWithSolana.notBefore}`] : [], ...!((o = v == null ? void 0 : v.signInWithSolana) === null || o === void 0) && o.expirationTime ? [`Expiration Time: ${v.signInWithSolana.expirationTime}`] : [], ...!((a = v == null ? void 0 : v.signInWithSolana) === null || a === void 0) && a.chainId ? [`Chain ID: ${v.signInWithSolana.chainId}`] : [], ...!((l = v == null ? void 0 : v.signInWithSolana) === null || l === void 0) && l.nonce ? [`Nonce: ${v.signInWithSolana.nonce}`] : [], ...!((u = v == null ? void 0 : v.signInWithSolana) === null || u === void 0) && u.requestId ? [`Request ID: ${v.signInWithSolana.requestId}`] : [], ...!((d = (c = v == null ? void 0 : v.signInWithSolana) === null || c === void 0 ? void 0 : c.resources) === null || d === void 0) && d.length ? ["Resources", ...v.signInWithSolana.resources.map(E => `- ${E}`)] : []].join(`
`);
                const k = await x.signMessage(new TextEncoder().encode(y), "utf8");
                if (!k || !(k instanceof Uint8Array))
                    throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
                g = k
            }
        }
        try {
            const {data: w, error: m} = await U(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
                headers: this.headers,
                body: Object.assign({
                    chain: "solana",
                    message: y,
                    signature: vn(g)
                }, !((f = t.options) === null || f === void 0) && f.captchaToken ? {
                    gotrue_meta_security: {
                        captcha_token: (h = t.options) === null || h === void 0 ? void 0 : h.captchaToken
                    }
                } : null),
                xform: kt
            });
            if (m)
                throw m;
            if (!w || !w.session || !w.user) {
                const p = new Vn;
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: p
                })
            }
            return w.session && (await this._saveSession(w.session),
            await this._notifyAllSubscribers("SIGNED_IN", w.session)),
            this._returnResult({
                data: Object.assign({}, w),
                error: m
            })
        } catch (w) {
            if (M(w))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: w
                });
            throw w
        }
    }
    async _exchangeCodeForSession(t) {
        const r = await un(this.storage, `${this.storageKey}-code-verifier`)
          , [n,s] = (r ?? "").split("/");
        try {
            if (!n && this.flowType === "pkce")
                throw new FT;
            const {data: i, error: o} = await U(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
                headers: this.headers,
                body: {
                    auth_code: t,
                    code_verifier: n
                },
                xform: kt
            });
            if (await Pe(this.storage, `${this.storageKey}-code-verifier`),
            o)
                throw o;
            if (!i || !i.session || !i.user) {
                const a = new Vn;
                return this._returnResult({
                    data: {
                        user: null,
                        session: null,
                        redirectType: null
                    },
                    error: a
                })
            }
            return i.session && (await this._saveSession(i.session),
            await this._notifyAllSubscribers("SIGNED_IN", i.session)),
            this._returnResult({
                data: Object.assign(Object.assign({}, i), {
                    redirectType: s ?? null
                }),
                error: o
            })
        } catch (i) {
            if (await Pe(this.storage, `${this.storageKey}-code-verifier`),
            M(i))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null,
                        redirectType: null
                    },
                    error: i
                });
            throw i
        }
    }
    async signInWithIdToken(t) {
        try {
            const {options: r, provider: n, token: s, access_token: i, nonce: o} = t
              , a = await U(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                headers: this.headers,
                body: {
                    provider: n,
                    id_token: s,
                    access_token: i,
                    nonce: o,
                    gotrue_meta_security: {
                        captcha_token: r == null ? void 0 : r.captchaToken
                    }
                },
                xform: kt
            })
              , {data: l, error: u} = a;
            if (u)
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: u
                });
            if (!l || !l.session || !l.user) {
                const c = new Vn;
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: c
                })
            }
            return l.session && (await this._saveSession(l.session),
            await this._notifyAllSubscribers("SIGNED_IN", l.session)),
            this._returnResult({
                data: l,
                error: u
            })
        } catch (r) {
            if (M(r))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: r
                });
            throw r
        }
    }
    async signInWithOtp(t) {
        var r, n, s, i, o;
        try {
            if ("email"in t) {
                const {email: a, options: l} = t;
                let u = null
                  , c = null;
                this.flowType === "pkce" && ([u,c] = await Kn(this.storage, this.storageKey));
                const {error: d} = await U(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        email: a,
                        data: (r = l == null ? void 0 : l.data) !== null && r !== void 0 ? r : {},
                        create_user: (n = l == null ? void 0 : l.shouldCreateUser) !== null && n !== void 0 ? n : !0,
                        gotrue_meta_security: {
                            captcha_token: l == null ? void 0 : l.captchaToken
                        },
                        code_challenge: u,
                        code_challenge_method: c
                    },
                    redirectTo: l == null ? void 0 : l.emailRedirectTo
                });
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: d
                })
            }
            if ("phone"in t) {
                const {phone: a, options: l} = t
                  , {data: u, error: c} = await U(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        phone: a,
                        data: (s = l == null ? void 0 : l.data) !== null && s !== void 0 ? s : {},
                        create_user: (i = l == null ? void 0 : l.shouldCreateUser) !== null && i !== void 0 ? i : !0,
                        gotrue_meta_security: {
                            captcha_token: l == null ? void 0 : l.captchaToken
                        },
                        channel: (o = l == null ? void 0 : l.channel) !== null && o !== void 0 ? o : "sms"
                    }
                });
                return this._returnResult({
                    data: {
                        user: null,
                        session: null,
                        messageId: u == null ? void 0 : u.message_id
                    },
                    error: c
                })
            }
            throw new Ho("You must provide either an email or phone number.")
        } catch (a) {
            if (await Pe(this.storage, `${this.storageKey}-code-verifier`),
            M(a))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: a
                });
            throw a
        }
    }
    async verifyOtp(t) {
        var r, n;
        try {
            let s, i;
            "options"in t && (s = (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo,
            i = (n = t.options) === null || n === void 0 ? void 0 : n.captchaToken);
            const {data: o, error: a} = await U(this.fetch, "POST", `${this.url}/verify`, {
                headers: this.headers,
                body: Object.assign(Object.assign({}, t), {
                    gotrue_meta_security: {
                        captcha_token: i
                    }
                }),
                redirectTo: s,
                xform: kt
            });
            if (a)
                throw a;
            if (!o)
                throw new Error("An error occurred on token verification.");
            const l = o.session
              , u = o.user;
            return l != null && l.access_token && (await this._saveSession(l),
            await this._notifyAllSubscribers(t.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", l)),
            this._returnResult({
                data: {
                    user: u,
                    session: l
                },
                error: null
            })
        } catch (s) {
            if (M(s))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: s
                });
            throw s
        }
    }
    async signInWithSSO(t) {
        var r, n, s, i, o;
        try {
            let a = null
              , l = null;
            this.flowType === "pkce" && ([a,l] = await Kn(this.storage, this.storageKey));
            const u = await U(this.fetch, "POST", `${this.url}/sso`, {
                body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId"in t ? {
                    provider_id: t.providerId
                } : null), "domain"in t ? {
                    domain: t.domain
                } : null), {
                    redirect_to: (n = (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo) !== null && n !== void 0 ? n : void 0
                }), !((s = t == null ? void 0 : t.options) === null || s === void 0) && s.captchaToken ? {
                    gotrue_meta_security: {
                        captcha_token: t.options.captchaToken
                    }
                } : null), {
                    skip_http_redirect: !0,
                    code_challenge: a,
                    code_challenge_method: l
                }),
                headers: this.headers,
                xform: dC
            });
            return !((i = u.data) === null || i === void 0) && i.url && Re() && !(!((o = t.options) === null || o === void 0) && o.skipBrowserRedirect) && window.location.assign(u.data.url),
            this._returnResult(u)
        } catch (a) {
            if (await Pe(this.storage, `${this.storageKey}-code-verifier`),
            M(a))
                return this._returnResult({
                    data: null,
                    error: a
                });
            throw a
        }
    }
    async reauthenticate() {
        return await this.initializePromise,
        await this._acquireLock(this.lockAcquireTimeout, async () => await this._reauthenticate())
    }
    async _reauthenticate() {
        try {
            return await this._useSession(async t => {
                const {data: {session: r}, error: n} = t;
                if (n)
                    throw n;
                if (!r)
                    throw new et;
                const {error: s} = await U(this.fetch, "GET", `${this.url}/reauthenticate`, {
                    headers: this.headers,
                    jwt: r.access_token
                });
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: s
                })
            }
            )
        } catch (t) {
            if (M(t))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: t
                });
            throw t
        }
    }
    async resend(t) {
        try {
            const r = `${this.url}/resend`;
            if ("email"in t) {
                const {email: n, type: s, options: i} = t
                  , {error: o} = await U(this.fetch, "POST", r, {
                    headers: this.headers,
                    body: {
                        email: n,
                        type: s,
                        gotrue_meta_security: {
                            captcha_token: i == null ? void 0 : i.captchaToken
                        }
                    },
                    redirectTo: i == null ? void 0 : i.emailRedirectTo
                });
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: o
                })
            } else if ("phone"in t) {
                const {phone: n, type: s, options: i} = t
                  , {data: o, error: a} = await U(this.fetch, "POST", r, {
                    headers: this.headers,
                    body: {
                        phone: n,
                        type: s,
                        gotrue_meta_security: {
                            captcha_token: i == null ? void 0 : i.captchaToken
                        }
                    }
                });
                return this._returnResult({
                    data: {
                        user: null,
                        session: null,
                        messageId: o == null ? void 0 : o.message_id
                    },
                    error: a
                })
            }
            throw new Ho("You must provide either an email or phone number and a type")
        } catch (r) {
            if (M(r))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: r
                });
            throw r
        }
    }
    async getSession() {
        return await this.initializePromise,
        await this._acquireLock(this.lockAcquireTimeout, async () => this._useSession(async r => r))
    }
    async _acquireLock(t, r) {
        this._debug("#_acquireLock", "begin", t);
        try {
            if (this.lockAcquired) {
                const n = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve()
                  , s = (async () => (await n,
                await r()))();
                return this.pendingInLock.push((async () => {
                    try {
                        await s
                    } catch {}
                }
                )()),
                s
            }
            return await this.lock(`lock:${this.storageKey}`, t, async () => {
                this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
                try {
                    this.lockAcquired = !0;
                    const n = r();
                    for (this.pendingInLock.push((async () => {
                        try {
                            await n
                        } catch {}
                    }
                    )()),
                    await n; this.pendingInLock.length; ) {
                        const s = [...this.pendingInLock];
                        await Promise.all(s),
                        this.pendingInLock.splice(0, s.length)
                    }
                    return await n
                } finally {
                    this._debug("#_acquireLock", "lock released for storage key", this.storageKey),
                    this.lockAcquired = !1
                }
            }
            )
        } finally {
            this._debug("#_acquireLock", "end")
        }
    }
    async _useSession(t) {
        this._debug("#_useSession", "begin");
        try {
            const r = await this.__loadSession();
            return await t(r)
        } finally {
            this._debug("#_useSession", "end")
        }
    }
    async __loadSession() {
        this._debug("#__loadSession()", "begin"),
        this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
        try {
            let t = null;
            const r = await un(this.storage, this.storageKey);
            if (this._debug("#getSession()", "session from storage", r),
            r !== null && (this._isValidSession(r) ? t = r : (this._debug("#getSession()", "session from storage is not valid"),
            await this._removeSession())),
            !t)
                return {
                    data: {
                        session: null
                    },
                    error: null
                };
            const n = t.expires_at ? t.expires_at * 1e3 - Date.now() < uu : !1;
            if (this._debug("#__loadSession()", `session has${n ? "" : " not"} expired`, "expires_at", t.expires_at),
            !n) {
                if (this.userStorage) {
                    const o = await un(this.userStorage, this.storageKey + "-user");
                    o != null && o.user ? t.user = o.user : t.user = hu()
                }
                if (this.storage.isServer && t.user && !t.user.__isUserNotAvailableProxy) {
                    const o = {
                        value: this.suppressGetSessionWarning
                    };
                    t.user = aC(t.user, o),
                    o.value && (this.suppressGetSessionWarning = !0)
                }
                return {
                    data: {
                        session: t
                    },
                    error: null
                }
            }
            const {data: s, error: i} = await this._callRefreshToken(t.refresh_token);
            return i ? this._returnResult({
                data: {
                    session: null
                },
                error: i
            }) : this._returnResult({
                data: {
                    session: s
                },
                error: null
            })
        } finally {
            this._debug("#__loadSession()", "end")
        }
    }
    async getUser(t) {
        if (t)
            return await this._getUser(t);
        await this.initializePromise;
        const r = await this._acquireLock(this.lockAcquireTimeout, async () => await this._getUser());
        return r.data.user && (this.suppressGetSessionWarning = !0),
        r
    }
    async _getUser(t) {
        try {
            return t ? await U(this.fetch, "GET", `${this.url}/user`, {
                headers: this.headers,
                jwt: t,
                xform: Nr
            }) : await this._useSession(async r => {
                var n, s, i;
                const {data: o, error: a} = r;
                if (a)
                    throw a;
                return !(!((n = o.session) === null || n === void 0) && n.access_token) && !this.hasCustomAuthorizationHeader ? {
                    data: {
                        user: null
                    },
                    error: new et
                } : await U(this.fetch, "GET", `${this.url}/user`, {
                    headers: this.headers,
                    jwt: (i = (s = o.session) === null || s === void 0 ? void 0 : s.access_token) !== null && i !== void 0 ? i : void 0,
                    xform: Nr
                })
            }
            )
        } catch (r) {
            if (M(r))
                return cu(r) && (await this._removeSession(),
                await Pe(this.storage, `${this.storageKey}-code-verifier`)),
                this._returnResult({
                    data: {
                        user: null
                    },
                    error: r
                });
            throw r
        }
    }
    async updateUser(t, r={}) {
        return await this.initializePromise,
        await this._acquireLock(this.lockAcquireTimeout, async () => await this._updateUser(t, r))
    }
    async _updateUser(t, r={}) {
        try {
            return await this._useSession(async n => {
                const {data: s, error: i} = n;
                if (i)
                    throw i;
                if (!s.session)
                    throw new et;
                const o = s.session;
                let a = null
                  , l = null;
                this.flowType === "pkce" && t.email != null && ([a,l] = await Kn(this.storage, this.storageKey));
                const {data: u, error: c} = await U(this.fetch, "PUT", `${this.url}/user`, {
                    headers: this.headers,
                    redirectTo: r == null ? void 0 : r.emailRedirectTo,
                    body: Object.assign(Object.assign({}, t), {
                        code_challenge: a,
                        code_challenge_method: l
                    }),
                    jwt: o.access_token,
                    xform: Nr
                });
                if (c)
                    throw c;
                return o.user = u.user,
                await this._saveSession(o),
                await this._notifyAllSubscribers("USER_UPDATED", o),
                this._returnResult({
                    data: {
                        user: o.user
                    },
                    error: null
                })
            }
            )
        } catch (n) {
            if (await Pe(this.storage, `${this.storageKey}-code-verifier`),
            M(n))
                return this._returnResult({
                    data: {
                        user: null
                    },
                    error: n
                });
            throw n
        }
    }
    async setSession(t) {
        return await this.initializePromise,
        await this._acquireLock(this.lockAcquireTimeout, async () => await this._setSession(t))
    }
    async _setSession(t) {
        try {
            if (!t.access_token || !t.refresh_token)
                throw new et;
            const r = Date.now() / 1e3;
            let n = r
              , s = !0
              , i = null;
            const {payload: o} = Vo(t.access_token);
            if (o.exp && (n = o.exp,
            s = n <= r),
            s) {
                const {data: a, error: l} = await this._callRefreshToken(t.refresh_token);
                if (l)
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: l
                    });
                if (!a)
                    return {
                        data: {
                            user: null,
                            session: null
                        },
                        error: null
                    };
                i = a
            } else {
                const {data: a, error: l} = await this._getUser(t.access_token);
                if (l)
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: l
                    });
                i = {
                    access_token: t.access_token,
                    refresh_token: t.refresh_token,
                    user: a.user,
                    token_type: "bearer",
                    expires_in: n - r,
                    expires_at: n
                },
                await this._saveSession(i),
                await this._notifyAllSubscribers("SIGNED_IN", i)
            }
            return this._returnResult({
                data: {
                    user: i.user,
                    session: i
                },
                error: null
            })
        } catch (r) {
            if (M(r))
                return this._returnResult({
                    data: {
                        session: null,
                        user: null
                    },
                    error: r
                });
            throw r
        }
    }
    async refreshSession(t) {
        return await this.initializePromise,
        await this._acquireLock(this.lockAcquireTimeout, async () => await this._refreshSession(t))
    }
    async _refreshSession(t) {
        try {
            return await this._useSession(async r => {
                var n;
                if (!t) {
                    const {data: o, error: a} = r;
                    if (a)
                        throw a;
                    t = (n = o.session) !== null && n !== void 0 ? n : void 0
                }
                if (!(t != null && t.refresh_token))
                    throw new et;
                const {data: s, error: i} = await this._callRefreshToken(t.refresh_token);
                return i ? this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: i
                }) : s ? this._returnResult({
                    data: {
                        user: s.user,
                        session: s
                    },
                    error: null
                }) : this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: null
                })
            }
            )
        } catch (r) {
            if (M(r))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: r
                });
            throw r
        }
    }
    async _getSessionFromURL(t, r) {
        try {
            if (!Re())
                throw new Wo("No browser detected.");
            if (t.error || t.error_description || t.error_code)
                throw new Wo(t.error_description || "Error in URL with unspecified error_description",{
                    error: t.error || "unspecified_error",
                    code: t.error_code || "unspecified_code"
                });
            switch (r) {
            case "implicit":
                if (this.flowType === "pkce")
                    throw new op("Not a valid PKCE flow url.");
                break;
            case "pkce":
                if (this.flowType === "implicit")
                    throw new Wo("Not a valid implicit grant flow url.");
                break;
            default:
            }
            if (r === "pkce") {
                if (this._debug("#_initialize()", "begin", "is PKCE flow", !0),
                !t.code)
                    throw new op("No code detected.");
                const {data: p, error: v} = await this._exchangeCodeForSession(t.code);
                if (v)
                    throw v;
                const x = new URL(window.location.href);
                return x.searchParams.delete("code"),
                window.history.replaceState(window.history.state, "", x.toString()),
                {
                    data: {
                        session: p.session,
                        redirectType: null
                    },
                    error: null
                }
            }
            const {provider_token: n, provider_refresh_token: s, access_token: i, refresh_token: o, expires_in: a, expires_at: l, token_type: u} = t;
            if (!i || !a || !o || !u)
                throw new Wo("No session defined in URL");
            const c = Math.round(Date.now() / 1e3)
              , d = parseInt(a);
            let f = c + d;
            l && (f = parseInt(l));
            const h = f - c;
            h * 1e3 <= Yn && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${h}s, should have been closer to ${d}s`);
            const y = f - d;
            c - y >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", y, f, c) : c - y < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", y, f, c);
            const {data: g, error: w} = await this._getUser(i);
            if (w)
                throw w;
            const m = {
                provider_token: n,
                provider_refresh_token: s,
                access_token: i,
                expires_in: d,
                expires_at: f,
                refresh_token: o,
                token_type: u,
                user: g.user
            };
            return window.location.hash = "",
            this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
            this._returnResult({
                data: {
                    session: m,
                    redirectType: t.type
                },
                error: null
            })
        } catch (n) {
            if (M(n))
                return this._returnResult({
                    data: {
                        session: null,
                        redirectType: null
                    },
                    error: n
                });
            throw n
        }
    }
    _isImplicitGrantCallback(t) {
        return typeof this.detectSessionInUrl == "function" ? this.detectSessionInUrl(new URL(window.location.href), t) : !!(t.access_token || t.error_description)
    }
    async _isPKCECallback(t) {
        const r = await un(this.storage, `${this.storageKey}-code-verifier`);
        return !!(t.code && r)
    }
    async signOut(t={
        scope: "global"
    }) {
        return await this.initializePromise,
        await this._acquireLock(this.lockAcquireTimeout, async () => await this._signOut(t))
    }
    async _signOut({scope: t}={
        scope: "global"
    }) {
        return await this._useSession(async r => {
            var n;
            const {data: s, error: i} = r;
            if (i && !cu(i))
                return this._returnResult({
                    error: i
                });
            const o = (n = s.session) === null || n === void 0 ? void 0 : n.access_token;
            if (o) {
                const {error: a} = await this.admin.signOut(o, t);
                if (a && !(MT(a) && (a.status === 404 || a.status === 401 || a.status === 403) || cu(a)))
                    return this._returnResult({
                        error: a
                    })
            }
            return t !== "others" && (await this._removeSession(),
            await Pe(this.storage, `${this.storageKey}-code-verifier`)),
            this._returnResult({
                error: null
            })
        }
        )
    }
    onAuthStateChange(t) {
        const r = qT()
          , n = {
            id: r,
            callback: t,
            unsubscribe: () => {
                this._debug("#unsubscribe()", "state change callback with id removed", r),
                this.stateChangeEmitters.delete(r)
            }
        };
        return this._debug("#onAuthStateChange()", "registered callback with id", r),
        this.stateChangeEmitters.set(r, n),
        (async () => (await this.initializePromise,
        await this._acquireLock(this.lockAcquireTimeout, async () => {
            this._emitInitialSession(r)
        }
        )))(),
        {
            data: {
                subscription: n
            }
        }
    }
    async _emitInitialSession(t) {
        return await this._useSession(async r => {
            var n, s;
            try {
                const {data: {session: i}, error: o} = r;
                if (o)
                    throw o;
                await ((n = this.stateChangeEmitters.get(t)) === null || n === void 0 ? void 0 : n.callback("INITIAL_SESSION", i)),
                this._debug("INITIAL_SESSION", "callback id", t, "session", i)
            } catch (i) {
                await ((s = this.stateChangeEmitters.get(t)) === null || s === void 0 ? void 0 : s.callback("INITIAL_SESSION", null)),
                this._debug("INITIAL_SESSION", "callback id", t, "error", i),
                console.error(i)
            }
        }
        )
    }
    async resetPasswordForEmail(t, r={}) {
        let n = null
          , s = null;
        this.flowType === "pkce" && ([n,s] = await Kn(this.storage, this.storageKey, !0));
        try {
            return await U(this.fetch, "POST", `${this.url}/recover`, {
                body: {
                    email: t,
                    code_challenge: n,
                    code_challenge_method: s,
                    gotrue_meta_security: {
                        captcha_token: r.captchaToken
                    }
                },
                headers: this.headers,
                redirectTo: r.redirectTo
            })
        } catch (i) {
            if (await Pe(this.storage, `${this.storageKey}-code-verifier`),
            M(i))
                return this._returnResult({
                    data: null,
                    error: i
                });
            throw i
        }
    }
    async getUserIdentities() {
        var t;
        try {
            const {data: r, error: n} = await this.getUser();
            if (n)
                throw n;
            return this._returnResult({
                data: {
                    identities: (t = r.user.identities) !== null && t !== void 0 ? t : []
                },
                error: null
            })
        } catch (r) {
            if (M(r))
                return this._returnResult({
                    data: null,
                    error: r
                });
            throw r
        }
    }
    async linkIdentity(t) {
        return "token"in t ? this.linkIdentityIdToken(t) : this.linkIdentityOAuth(t)
    }
    async linkIdentityOAuth(t) {
        var r;
        try {
            const {data: n, error: s} = await this._useSession(async i => {
                var o, a, l, u, c;
                const {data: d, error: f} = i;
                if (f)
                    throw f;
                const h = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, t.provider, {
                    redirectTo: (o = t.options) === null || o === void 0 ? void 0 : o.redirectTo,
                    scopes: (a = t.options) === null || a === void 0 ? void 0 : a.scopes,
                    queryParams: (l = t.options) === null || l === void 0 ? void 0 : l.queryParams,
                    skipBrowserRedirect: !0
                });
                return await U(this.fetch, "GET", h, {
                    headers: this.headers,
                    jwt: (c = (u = d.session) === null || u === void 0 ? void 0 : u.access_token) !== null && c !== void 0 ? c : void 0
                })
            }
            );
            if (s)
                throw s;
            return Re() && !(!((r = t.options) === null || r === void 0) && r.skipBrowserRedirect) && window.location.assign(n == null ? void 0 : n.url),
            this._returnResult({
                data: {
                    provider: t.provider,
                    url: n == null ? void 0 : n.url
                },
                error: null
            })
        } catch (n) {
            if (M(n))
                return this._returnResult({
                    data: {
                        provider: t.provider,
                        url: null
                    },
                    error: n
                });
            throw n
        }
    }
    async linkIdentityIdToken(t) {
        return await this._useSession(async r => {
            var n;
            try {
                const {error: s, data: {session: i}} = r;
                if (s)
                    throw s;
                const {options: o, provider: a, token: l, access_token: u, nonce: c} = t
                  , d = await U(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                    headers: this.headers,
                    jwt: (n = i == null ? void 0 : i.access_token) !== null && n !== void 0 ? n : void 0,
                    body: {
                        provider: a,
                        id_token: l,
                        access_token: u,
                        nonce: c,
                        link_identity: !0,
                        gotrue_meta_security: {
                            captcha_token: o == null ? void 0 : o.captchaToken
                        }
                    },
                    xform: kt
                })
                  , {data: f, error: h} = d;
                return h ? this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: h
                }) : !f || !f.session || !f.user ? this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: new Vn
                }) : (f.session && (await this._saveSession(f.session),
                await this._notifyAllSubscribers("USER_UPDATED", f.session)),
                this._returnResult({
                    data: f,
                    error: h
                }))
            } catch (s) {
                if (await Pe(this.storage, `${this.storageKey}-code-verifier`),
                M(s))
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: s
                    });
                throw s
            }
        }
        )
    }
    async unlinkIdentity(t) {
        try {
            return await this._useSession(async r => {
                var n, s;
                const {data: i, error: o} = r;
                if (o)
                    throw o;
                return await U(this.fetch, "DELETE", `${this.url}/user/identities/${t.identity_id}`, {
                    headers: this.headers,
                    jwt: (s = (n = i.session) === null || n === void 0 ? void 0 : n.access_token) !== null && s !== void 0 ? s : void 0
                })
            }
            )
        } catch (r) {
            if (M(r))
                return this._returnResult({
                    data: null,
                    error: r
                });
            throw r
        }
    }
    async _refreshAccessToken(t) {
        const r = `#_refreshAccessToken(${t.substring(0, 5)}...)`;
        this._debug(r, "begin");
        try {
            const n = Date.now();
            return await YT(async s => (s > 0 && await QT(200 * Math.pow(2, s - 1)),
            this._debug(r, "refreshing attempt", s),
            await U(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
                body: {
                    refresh_token: t
                },
                headers: this.headers,
                xform: kt
            })), (s, i) => {
                const o = 200 * Math.pow(2, s);
                return i && du(i) && Date.now() + o - n < Yn
            }
            )
        } catch (n) {
            if (this._debug(r, "error", n),
            M(n))
                return this._returnResult({
                    data: {
                        session: null,
                        user: null
                    },
                    error: n
                });
            throw n
        } finally {
            this._debug(r, "end")
        }
    }
    _isValidSession(t) {
        return typeof t == "object" && t !== null && "access_token"in t && "refresh_token"in t && "expires_at"in t
    }
    async _handleProviderSignIn(t, r) {
        const n = await this._getUrlForProvider(`${this.url}/authorize`, t, {
            redirectTo: r.redirectTo,
            scopes: r.scopes,
            queryParams: r.queryParams
        });
        return this._debug("#_handleProviderSignIn()", "provider", t, "options", r, "url", n),
        Re() && !r.skipBrowserRedirect && window.location.assign(n),
        {
            data: {
                provider: t,
                url: n
            },
            error: null
        }
    }
    async _recoverAndRefresh() {
        var t, r;
        const n = "#_recoverAndRefresh()";
        this._debug(n, "begin");
        try {
            const s = await un(this.storage, this.storageKey);
            if (s && this.userStorage) {
                let o = await un(this.userStorage, this.storageKey + "-user");
                !this.storage.isServer && Object.is(this.storage, this.userStorage) && !o && (o = {
                    user: s.user
                },
                await Xn(this.userStorage, this.storageKey + "-user", o)),
                s.user = (t = o == null ? void 0 : o.user) !== null && t !== void 0 ? t : hu()
            } else if (s && !s.user && !s.user) {
                const o = await un(this.storage, this.storageKey + "-user");
                o && (o != null && o.user) ? (s.user = o.user,
                await Pe(this.storage, this.storageKey + "-user"),
                await Xn(this.storage, this.storageKey, s)) : s.user = hu()
            }
            if (this._debug(n, "session from storage", s),
            !this._isValidSession(s)) {
                this._debug(n, "session is not valid"),
                s !== null && await this._removeSession();
                return
            }
            const i = ((r = s.expires_at) !== null && r !== void 0 ? r : 1 / 0) * 1e3 - Date.now() < uu;
            if (this._debug(n, `session has${i ? "" : " not"} expired with margin of ${uu}s`),
            i) {
                if (this.autoRefreshToken && s.refresh_token) {
                    const {error: o} = await this._callRefreshToken(s.refresh_token);
                    o && (console.error(o),
                    du(o) || (this._debug(n, "refresh failed with a non-retryable error, removing the session", o),
                    await this._removeSession()))
                }
            } else if (s.user && s.user.__isUserNotAvailableProxy === !0)
                try {
                    const {data: o, error: a} = await this._getUser(s.access_token);
                    !a && (o != null && o.user) ? (s.user = o.user,
                    await this._saveSession(s),
                    await this._notifyAllSubscribers("SIGNED_IN", s)) : this._debug(n, "could not get user data, skipping SIGNED_IN notification")
                } catch (o) {
                    console.error("Error getting user data:", o),
                    this._debug(n, "error getting user data, skipping SIGNED_IN notification", o)
                }
            else
                await this._notifyAllSubscribers("SIGNED_IN", s)
        } catch (s) {
            this._debug(n, "error", s),
            console.error(s);
            return
        } finally {
            this._debug(n, "end")
        }
    }
    async _callRefreshToken(t) {
        var r, n;
        if (!t)
            throw new et;
        if (this.refreshingDeferred)
            return this.refreshingDeferred.promise;
        const s = `#_callRefreshToken(${t.substring(0, 5)}...)`;
        this._debug(s, "begin");
        try {
            this.refreshingDeferred = new Sl;
            const {data: i, error: o} = await this._refreshAccessToken(t);
            if (o)
                throw o;
            if (!i.session)
                throw new et;
            await this._saveSession(i.session),
            await this._notifyAllSubscribers("TOKEN_REFRESHED", i.session);
            const a = {
                data: i.session,
                error: null
            };
            return this.refreshingDeferred.resolve(a),
            a
        } catch (i) {
            if (this._debug(s, "error", i),
            M(i)) {
                const o = {
                    data: null,
                    error: i
                };
                return du(i) || await this._removeSession(),
                (r = this.refreshingDeferred) === null || r === void 0 || r.resolve(o),
                o
            }
            throw (n = this.refreshingDeferred) === null || n === void 0 || n.reject(i),
            i
        } finally {
            this.refreshingDeferred = null,
            this._debug(s, "end")
        }
    }
    async _notifyAllSubscribers(t, r, n=!0) {
        const s = `#_notifyAllSubscribers(${t})`;
        this._debug(s, "begin", r, `broadcast = ${n}`);
        try {
            this.broadcastChannel && n && this.broadcastChannel.postMessage({
                event: t,
                session: r
            });
            const i = []
              , o = Array.from(this.stateChangeEmitters.values()).map(async a => {
                try {
                    await a.callback(t, r)
                } catch (l) {
                    i.push(l)
                }
            }
            );
            if (await Promise.all(o),
            i.length > 0) {
                for (let a = 0; a < i.length; a += 1)
                    console.error(i[a]);
                throw i[0]
            }
        } finally {
            this._debug(s, "end")
        }
    }
    async _saveSession(t) {
        this._debug("#_saveSession()", t),
        this.suppressGetSessionWarning = !0,
        await Pe(this.storage, `${this.storageKey}-code-verifier`);
        const r = Object.assign({}, t)
          , n = r.user && r.user.__isUserNotAvailableProxy === !0;
        if (this.userStorage) {
            !n && r.user && await Xn(this.userStorage, this.storageKey + "-user", {
                user: r.user
            });
            const s = Object.assign({}, r);
            delete s.user;
            const i = dp(s);
            await Xn(this.storage, this.storageKey, i)
        } else {
            const s = dp(r);
            await Xn(this.storage, this.storageKey, s)
        }
    }
    async _removeSession() {
        this._debug("#_removeSession()"),
        this.suppressGetSessionWarning = !1,
        await Pe(this.storage, this.storageKey),
        await Pe(this.storage, this.storageKey + "-code-verifier"),
        await Pe(this.storage, this.storageKey + "-user"),
        this.userStorage && await Pe(this.userStorage, this.storageKey + "-user"),
        await this._notifyAllSubscribers("SIGNED_OUT", null)
    }
    _removeVisibilityChangedCallback() {
        this._debug("#_removeVisibilityChangedCallback()");
        const t = this.visibilityChangedCallback;
        this.visibilityChangedCallback = null;
        try {
            t && Re() && (window != null && window.removeEventListener) && window.removeEventListener("visibilitychange", t)
        } catch (r) {
            console.error("removing visibilitychange callback failed", r)
        }
    }
    async _startAutoRefresh() {
        await this._stopAutoRefresh(),
        this._debug("#_startAutoRefresh()");
        const t = setInterval( () => this._autoRefreshTokenTick(), Yn);
        this.autoRefreshTicker = t,
        t && typeof t == "object" && typeof t.unref == "function" ? t.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(t);
        const r = setTimeout(async () => {
            await this.initializePromise,
            await this._autoRefreshTokenTick()
        }
        , 0);
        this.autoRefreshTickTimeout = r,
        r && typeof r == "object" && typeof r.unref == "function" ? r.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(r)
    }
    async _stopAutoRefresh() {
        this._debug("#_stopAutoRefresh()");
        const t = this.autoRefreshTicker;
        this.autoRefreshTicker = null,
        t && clearInterval(t);
        const r = this.autoRefreshTickTimeout;
        this.autoRefreshTickTimeout = null,
        r && clearTimeout(r)
    }
    async startAutoRefresh() {
        this._removeVisibilityChangedCallback(),
        await this._startAutoRefresh()
    }
    async stopAutoRefresh() {
        this._removeVisibilityChangedCallback(),
        await this._stopAutoRefresh()
    }
    async _autoRefreshTokenTick() {
        this._debug("#_autoRefreshTokenTick()", "begin");
        try {
            await this._acquireLock(0, async () => {
                try {
                    const t = Date.now();
                    try {
                        return await this._useSession(async r => {
                            const {data: {session: n}} = r;
                            if (!n || !n.refresh_token || !n.expires_at) {
                                this._debug("#_autoRefreshTokenTick()", "no session");
                                return
                            }
                            const s = Math.floor((n.expires_at * 1e3 - t) / Yn);
                            this._debug("#_autoRefreshTokenTick()", `access token expires in ${s} ticks, a tick lasts ${Yn}ms, refresh threshold is ${Ac} ticks`),
                            s <= Ac && await this._callRefreshToken(n.refresh_token)
                        }
                        )
                    } catch (r) {
                        console.error("Auto refresh tick failed with error. This is likely a transient error.", r)
                    }
                } finally {
                    this._debug("#_autoRefreshTokenTick()", "end")
                }
            }
            )
        } catch (t) {
            if (t.isAcquireTimeout || t instanceof My)
                this._debug("auto refresh token tick lock not available");
            else
                throw t
        }
    }
    async _handleVisibilityChange() {
        if (this._debug("#_handleVisibilityChange()"),
        !Re() || !(window != null && window.addEventListener))
            return this.autoRefreshToken && this.startAutoRefresh(),
            !1;
        try {
            this.visibilityChangedCallback = async () => {
                try {
                    await this._onVisibilityChanged(!1)
                } catch (t) {
                    this._debug("#visibilityChangedCallback", "error", t)
                }
            }
            ,
            window == null || window.addEventListener("visibilitychange", this.visibilityChangedCallback),
            await this._onVisibilityChanged(!0)
        } catch (t) {
            console.error("_handleVisibilityChange", t)
        }
    }
    async _onVisibilityChanged(t) {
        const r = `#_onVisibilityChanged(${t})`;
        this._debug(r, "visibilityState", document.visibilityState),
        document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(),
        t || (await this.initializePromise,
        await this._acquireLock(this.lockAcquireTimeout, async () => {
            if (document.visibilityState !== "visible") {
                this._debug(r, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
                return
            }
            await this._recoverAndRefresh()
        }
        ))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh()
    }
    async _getUrlForProvider(t, r, n) {
        const s = [`provider=${encodeURIComponent(r)}`];
        if (n != null && n.redirectTo && s.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),
        n != null && n.scopes && s.push(`scopes=${encodeURIComponent(n.scopes)}`),
        this.flowType === "pkce") {
            const [i,o] = await Kn(this.storage, this.storageKey)
              , a = new URLSearchParams({
                code_challenge: `${encodeURIComponent(i)}`,
                code_challenge_method: `${encodeURIComponent(o)}`
            });
            s.push(a.toString())
        }
        if (n != null && n.queryParams) {
            const i = new URLSearchParams(n.queryParams);
            s.push(i.toString())
        }
        return n != null && n.skipBrowserRedirect && s.push(`skip_http_redirect=${n.skipBrowserRedirect}`),
        `${t}?${s.join("&")}`
    }
    async _unenroll(t) {
        try {
            return await this._useSession(async r => {
                var n;
                const {data: s, error: i} = r;
                return i ? this._returnResult({
                    data: null,
                    error: i
                }) : await U(this.fetch, "DELETE", `${this.url}/factors/${t.factorId}`, {
                    headers: this.headers,
                    jwt: (n = s == null ? void 0 : s.session) === null || n === void 0 ? void 0 : n.access_token
                })
            }
            )
        } catch (r) {
            if (M(r))
                return this._returnResult({
                    data: null,
                    error: r
                });
            throw r
        }
    }
    async _enroll(t) {
        try {
            return await this._useSession(async r => {
                var n, s;
                const {data: i, error: o} = r;
                if (o)
                    return this._returnResult({
                        data: null,
                        error: o
                    });
                const a = Object.assign({
                    friendly_name: t.friendlyName,
                    factor_type: t.factorType
                }, t.factorType === "phone" ? {
                    phone: t.phone
                } : t.factorType === "totp" ? {
                    issuer: t.issuer
                } : {})
                  , {data: l, error: u} = await U(this.fetch, "POST", `${this.url}/factors`, {
                    body: a,
                    headers: this.headers,
                    jwt: (n = i == null ? void 0 : i.session) === null || n === void 0 ? void 0 : n.access_token
                });
                return u ? this._returnResult({
                    data: null,
                    error: u
                }) : (t.factorType === "totp" && l.type === "totp" && (!((s = l == null ? void 0 : l.totp) === null || s === void 0) && s.qr_code) && (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`),
                this._returnResult({
                    data: l,
                    error: null
                }))
            }
            )
        } catch (r) {
            if (M(r))
                return this._returnResult({
                    data: null,
                    error: r
                });
            throw r
        }
    }
    async _verify(t) {
        return this._acquireLock(this.lockAcquireTimeout, async () => {
            try {
                return await this._useSession(async r => {
                    var n;
                    const {data: s, error: i} = r;
                    if (i)
                        return this._returnResult({
                            data: null,
                            error: i
                        });
                    const o = Object.assign({
                        challenge_id: t.challengeId
                    }, "webauthn"in t ? {
                        webauthn: Object.assign(Object.assign({}, t.webauthn), {
                            credential_response: t.webauthn.type === "create" ? TC(t.webauthn.credential_response) : CC(t.webauthn.credential_response)
                        })
                    } : {
                        code: t.code
                    })
                      , {data: a, error: l} = await U(this.fetch, "POST", `${this.url}/factors/${t.factorId}/verify`, {
                        body: o,
                        headers: this.headers,
                        jwt: (n = s == null ? void 0 : s.session) === null || n === void 0 ? void 0 : n.access_token
                    });
                    return l ? this._returnResult({
                        data: null,
                        error: l
                    }) : (await this._saveSession(Object.assign({
                        expires_at: Math.round(Date.now() / 1e3) + a.expires_in
                    }, a)),
                    await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", a),
                    this._returnResult({
                        data: a,
                        error: l
                    }))
                }
                )
            } catch (r) {
                if (M(r))
                    return this._returnResult({
                        data: null,
                        error: r
                    });
                throw r
            }
        }
        )
    }
    async _challenge(t) {
        return this._acquireLock(this.lockAcquireTimeout, async () => {
            try {
                return await this._useSession(async r => {
                    var n;
                    const {data: s, error: i} = r;
                    if (i)
                        return this._returnResult({
                            data: null,
                            error: i
                        });
                    const o = await U(this.fetch, "POST", `${this.url}/factors/${t.factorId}/challenge`, {
                        body: t,
                        headers: this.headers,
                        jwt: (n = s == null ? void 0 : s.session) === null || n === void 0 ? void 0 : n.access_token
                    });
                    if (o.error)
                        return o;
                    const {data: a} = o;
                    if (a.type !== "webauthn")
                        return {
                            data: a,
                            error: null
                        };
                    switch (a.webauthn.type) {
                    case "create":
                        return {
                            data: Object.assign(Object.assign({}, a), {
                                webauthn: Object.assign(Object.assign({}, a.webauthn), {
                                    credential_options: Object.assign(Object.assign({}, a.webauthn.credential_options), {
                                        publicKey: kC(a.webauthn.credential_options.publicKey)
                                    })
                                })
                            }),
                            error: null
                        };
                    case "request":
                        return {
                            data: Object.assign(Object.assign({}, a), {
                                webauthn: Object.assign(Object.assign({}, a.webauthn), {
                                    credential_options: Object.assign(Object.assign({}, a.webauthn.credential_options), {
                                        publicKey: EC(a.webauthn.credential_options.publicKey)
                                    })
                                })
                            }),
                            error: null
                        }
                    }
                }
                )
            } catch (r) {
                if (M(r))
                    return this._returnResult({
                        data: null,
                        error: r
                    });
                throw r
            }
        }
        )
    }
    async _challengeAndVerify(t) {
        const {data: r, error: n} = await this._challenge({
            factorId: t.factorId
        });
        return n ? this._returnResult({
            data: null,
            error: n
        }) : await this._verify({
            factorId: t.factorId,
            challengeId: r.id,
            code: t.code
        })
    }
    async _listFactors() {
        var t;
        const {data: {user: r}, error: n} = await this.getUser();
        if (n)
            return {
                data: null,
                error: n
            };
        const s = {
            all: [],
            phone: [],
            totp: [],
            webauthn: []
        };
        for (const i of (t = r == null ? void 0 : r.factors) !== null && t !== void 0 ? t : [])
            s.all.push(i),
            i.status === "verified" && s[i.factor_type].push(i);
        return {
            data: s,
            error: null
        }
    }
    async _getAuthenticatorAssuranceLevel(t) {
        var r, n, s, i;
        if (t)
            try {
                const {payload: h} = Vo(t);
                let y = null;
                h.aal && (y = h.aal);
                let g = y;
                const {data: {user: w}, error: m} = await this.getUser(t);
                if (m)
                    return this._returnResult({
                        data: null,
                        error: m
                    });
                ((n = (r = w == null ? void 0 : w.factors) === null || r === void 0 ? void 0 : r.filter(x => x.status === "verified")) !== null && n !== void 0 ? n : []).length > 0 && (g = "aal2");
                const v = h.amr || [];
                return {
                    data: {
                        currentLevel: y,
                        nextLevel: g,
                        currentAuthenticationMethods: v
                    },
                    error: null
                }
            } catch (h) {
                if (M(h))
                    return this._returnResult({
                        data: null,
                        error: h
                    });
                throw h
            }
        const {data: {session: o}, error: a} = await this.getSession();
        if (a)
            return this._returnResult({
                data: null,
                error: a
            });
        if (!o)
            return {
                data: {
                    currentLevel: null,
                    nextLevel: null,
                    currentAuthenticationMethods: []
                },
                error: null
            };
        const {payload: l} = Vo(o.access_token);
        let u = null;
        l.aal && (u = l.aal);
        let c = u;
        ((i = (s = o.user.factors) === null || s === void 0 ? void 0 : s.filter(h => h.status === "verified")) !== null && i !== void 0 ? i : []).length > 0 && (c = "aal2");
        const f = l.amr || [];
        return {
            data: {
                currentLevel: u,
                nextLevel: c,
                currentAuthenticationMethods: f
            },
            error: null
        }
    }
    async _getAuthorizationDetails(t) {
        try {
            return await this._useSession(async r => {
                const {data: {session: n}, error: s} = r;
                return s ? this._returnResult({
                    data: null,
                    error: s
                }) : n ? await U(this.fetch, "GET", `${this.url}/oauth/authorizations/${t}`, {
                    headers: this.headers,
                    jwt: n.access_token,
                    xform: i => ({
                        data: i,
                        error: null
                    })
                }) : this._returnResult({
                    data: null,
                    error: new et
                })
            }
            )
        } catch (r) {
            if (M(r))
                return this._returnResult({
                    data: null,
                    error: r
                });
            throw r
        }
    }
    async _approveAuthorization(t, r) {
        try {
            return await this._useSession(async n => {
                const {data: {session: s}, error: i} = n;
                if (i)
                    return this._returnResult({
                        data: null,
                        error: i
                    });
                if (!s)
                    return this._returnResult({
                        data: null,
                        error: new et
                    });
                const o = await U(this.fetch, "POST", `${this.url}/oauth/authorizations/${t}/consent`, {
                    headers: this.headers,
                    jwt: s.access_token,
                    body: {
                        action: "approve"
                    },
                    xform: a => ({
                        data: a,
                        error: null
                    })
                });
                return o.data && o.data.redirect_url && Re() && !(r != null && r.skipBrowserRedirect) && window.location.assign(o.data.redirect_url),
                o
            }
            )
        } catch (n) {
            if (M(n))
                return this._returnResult({
                    data: null,
                    error: n
                });
            throw n
        }
    }
    async _denyAuthorization(t, r) {
        try {
            return await this._useSession(async n => {
                const {data: {session: s}, error: i} = n;
                if (i)
                    return this._returnResult({
                        data: null,
                        error: i
                    });
                if (!s)
                    return this._returnResult({
                        data: null,
                        error: new et
                    });
                const o = await U(this.fetch, "POST", `${this.url}/oauth/authorizations/${t}/consent`, {
                    headers: this.headers,
                    jwt: s.access_token,
                    body: {
                        action: "deny"
                    },
                    xform: a => ({
                        data: a,
                        error: null
                    })
                });
                return o.data && o.data.redirect_url && Re() && !(r != null && r.skipBrowserRedirect) && window.location.assign(o.data.redirect_url),
                o
            }
            )
        } catch (n) {
            if (M(n))
                return this._returnResult({
                    data: null,
                    error: n
                });
            throw n
        }
    }
    async _listOAuthGrants() {
        try {
            return await this._useSession(async t => {
                const {data: {session: r}, error: n} = t;
                return n ? this._returnResult({
                    data: null,
                    error: n
                }) : r ? await U(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
                    headers: this.headers,
                    jwt: r.access_token,
                    xform: s => ({
                        data: s,
                        error: null
                    })
                }) : this._returnResult({
                    data: null,
                    error: new et
                })
            }
            )
        } catch (t) {
            if (M(t))
                return this._returnResult({
                    data: null,
                    error: t
                });
            throw t
        }
    }
    async _revokeOAuthGrant(t) {
        try {
            return await this._useSession(async r => {
                const {data: {session: n}, error: s} = r;
                return s ? this._returnResult({
                    data: null,
                    error: s
                }) : n ? (await U(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
                    headers: this.headers,
                    jwt: n.access_token,
                    query: {
                        client_id: t.clientId
                    },
                    noResolveJson: !0
                }),
                {
                    data: {},
                    error: null
                }) : this._returnResult({
                    data: null,
                    error: new et
                })
            }
            )
        } catch (r) {
            if (M(r))
                return this._returnResult({
                    data: null,
                    error: r
                });
            throw r
        }
    }
    async fetchJwk(t, r={
        keys: []
    }) {
        let n = r.keys.find(a => a.kid === t);
        if (n)
            return n;
        const s = Date.now();
        if (n = this.jwks.keys.find(a => a.kid === t),
        n && this.jwks_cached_at + $T > s)
            return n;
        const {data: i, error: o} = await U(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
            headers: this.headers
        });
        if (o)
            throw o;
        return !i.keys || i.keys.length === 0 || (this.jwks = i,
        this.jwks_cached_at = s,
        n = i.keys.find(a => a.kid === t),
        !n) ? null : n
    }
    async getClaims(t, r={}) {
        try {
            let n = t;
            if (!n) {
                const {data: h, error: y} = await this.getSession();
                if (y || !h.session)
                    return this._returnResult({
                        data: null,
                        error: y
                    });
                n = h.session.access_token
            }
            const {header: s, payload: i, signature: o, raw: {header: a, payload: l}} = Vo(n);
            r != null && r.allowExpired || sC(i.exp);
            const u = !s.alg || s.alg.startsWith("HS") || !s.kid || !("crypto"in globalThis && "subtle"in globalThis.crypto) ? null : await this.fetchJwk(s.kid, r != null && r.keys ? {
                keys: r.keys
            } : r == null ? void 0 : r.jwks);
            if (!u) {
                const {error: h} = await this.getUser(n);
                if (h)
                    throw h;
                return {
                    data: {
                        claims: i,
                        header: s,
                        signature: o
                    },
                    error: null
                }
            }
            const c = iC(s.alg)
              , d = await crypto.subtle.importKey("jwk", u, c, !0, ["verify"]);
            if (!await crypto.subtle.verify(c, d, o, VT(`${a}.${l}`)))
                throw new jc("Invalid JWT signature");
            return {
                data: {
                    claims: i,
                    header: s,
                    signature: o
                },
                error: null
            }
        } catch (n) {
            if (M(n))
                return this._returnResult({
                    data: null,
                    error: n
                });
            throw n
        }
    }
}
Zi.nextInstanceID = {};
const $C = Zi
  , DC = "2.100.0";
let ci = "";
typeof Deno < "u" ? ci = "deno" : typeof document < "u" ? ci = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? ci = "react-native" : ci = "node";
const MC = {
    "X-Client-Info": `supabase-js-${ci}/${DC}`
}
  , UC = {
    headers: MC
}
  , FC = {
    schema: "public"
}
  , BC = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: "implicit"
}
  , zC = {};
function eo(e) {
    "@babel/helpers - typeof";
    return eo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    eo(e)
}
function HC(e, t) {
    if (eo(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (eo(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function WC(e) {
    var t = HC(e, "string");
    return eo(t) == "symbol" ? t : t + ""
}
function VC(e, t, r) {
    return (t = WC(t))in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function wp(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(s) {
            return Object.getOwnPropertyDescriptor(e, s).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function ge(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? wp(Object(r), !0).forEach(function(n) {
            VC(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wp(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
const KC = e => e ? (...t) => e(...t) : (...t) => fetch(...t)
  , qC = () => Headers
  , GC = (e, t, r) => {
    const n = KC(r)
      , s = qC();
    return async (i, o) => {
        var a;
        const l = (a = await t()) !== null && a !== void 0 ? a : e;
        let u = new s(o == null ? void 0 : o.headers);
        return u.has("apikey") || u.set("apikey", e),
        u.has("Authorization") || u.set("Authorization", `Bearer ${l}`),
        n(i, ge(ge({}, o), {}, {
            headers: u
        }))
    }
}
;
function JC(e) {
    return e.endsWith("/") ? e : e + "/"
}
function QC(e, t) {
    var r, n;
    const {db: s, auth: i, realtime: o, global: a} = e
      , {db: l, auth: u, realtime: c, global: d} = t
      , f = {
        db: ge(ge({}, l), s),
        auth: ge(ge({}, u), i),
        realtime: ge(ge({}, c), o),
        storage: {},
        global: ge(ge(ge({}, d), a), {}, {
            headers: ge(ge({}, (r = d == null ? void 0 : d.headers) !== null && r !== void 0 ? r : {}), (n = a == null ? void 0 : a.headers) !== null && n !== void 0 ? n : {})
        }),
        accessToken: async () => ""
    };
    return e.accessToken ? f.accessToken = e.accessToken : delete f.accessToken,
    f
}
function YC(e) {
    const t = e == null ? void 0 : e.trim();
    if (!t)
        throw new Error("supabaseUrl is required.");
    if (!t.match(/^https?:\/\//i))
        throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
    try {
        return new URL(JC(t))
    } catch {
        throw Error("Invalid supabaseUrl: Provided URL is malformed.")
    }
}
var XC = class extends $C {
    constructor(e) {
        super(e)
    }
}
  , ZC = class {
    constructor(e, t, r) {
        var n, s;
        this.supabaseUrl = e,
        this.supabaseKey = t;
        const i = YC(e);
        if (!t)
            throw new Error("supabaseKey is required.");
        this.realtimeUrl = new URL("realtime/v1",i),
        this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"),
        this.authUrl = new URL("auth/v1",i),
        this.storageUrl = new URL("storage/v1",i),
        this.functionsUrl = new URL("functions/v1",i);
        const o = `sb-${i.hostname.split(".")[0]}-auth-token`
          , a = {
            db: FC,
            realtime: zC,
            auth: ge(ge({}, BC), {}, {
                storageKey: o
            }),
            global: UC
        }
          , l = QC(r ?? {}, a);
        if (this.storageKey = (n = l.auth.storageKey) !== null && n !== void 0 ? n : "",
        this.headers = (s = l.global.headers) !== null && s !== void 0 ? s : {},
        l.accessToken)
            this.accessToken = l.accessToken,
            this.auth = new Proxy({},{
                get: (c, d) => {
                    throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(d)} is not possible`)
                }
            });
        else {
            var u;
            this.auth = this._initSupabaseAuthClient((u = l.auth) !== null && u !== void 0 ? u : {}, this.headers, l.global.fetch)
        }
        this.fetch = GC(t, this._getAccessToken.bind(this), l.global.fetch),
        this.realtime = this._initRealtimeClient(ge({
            headers: this.headers,
            accessToken: this._getAccessToken.bind(this)
        }, l.realtime)),
        this.accessToken && Promise.resolve(this.accessToken()).then(c => this.realtime.setAuth(c)).catch(c => console.warn("Failed to set initial Realtime auth token:", c)),
        this.rest = new xE(new URL("rest/v1",i).href,{
            headers: this.headers,
            schema: l.db.schema,
            fetch: this.fetch,
            timeout: l.db.timeout,
            urlLengthLimit: l.db.urlLengthLimit
        }),
        this.storage = new OT(this.storageUrl.href,this.headers,this.fetch,r == null ? void 0 : r.storage),
        l.accessToken || this._listenForAuthEvents()
    }
    get functions() {
        return new fE(this.functionsUrl.href,{
            headers: this.headers,
            customFetch: this.fetch
        })
    }
    from(e) {
        return this.rest.from(e)
    }
    schema(e) {
        return this.rest.schema(e)
    }
    rpc(e, t={}, r={
        head: !1,
        get: !1,
        count: void 0
    }) {
        return this.rest.rpc(e, t, r)
    }
    channel(e, t={
        config: {}
    }) {
        return this.realtime.channel(e, t)
    }
    getChannels() {
        return this.realtime.getChannels()
    }
    removeChannel(e) {
        return this.realtime.removeChannel(e)
    }
    removeAllChannels() {
        return this.realtime.removeAllChannels()
    }
    async _getAccessToken() {
        var e = this, t, r;
        if (e.accessToken)
            return await e.accessToken();
        const {data: n} = await e.auth.getSession();
        return (t = (r = n.session) === null || r === void 0 ? void 0 : r.access_token) !== null && t !== void 0 ? t : e.supabaseKey
    }
    _initSupabaseAuthClient({autoRefreshToken: e, persistSession: t, detectSessionInUrl: r, storage: n, userStorage: s, storageKey: i, flowType: o, lock: a, debug: l, throwOnError: u}, c, d) {
        const f = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`
        };
        return new XC({
            url: this.authUrl.href,
            headers: ge(ge({}, f), c),
            storageKey: i,
            autoRefreshToken: e,
            persistSession: t,
            detectSessionInUrl: r,
            storage: n,
            userStorage: s,
            flowType: o,
            lock: a,
            debug: l,
            throwOnError: u,
            fetch: d,
            hasCustomAuthorizationHeader: Object.keys(this.headers).some(h => h.toLowerCase() === "authorization")
        })
    }
    _initRealtimeClient(e) {
        return new tT(this.realtimeUrl.href,ge(ge({}, e), {}, {
            params: ge(ge({}, {
                apikey: this.supabaseKey
            }), e == null ? void 0 : e.params)
        }))
    }
    _listenForAuthEvents() {
        return this.auth.onAuthStateChange( (e, t) => {
            this._handleTokenChanged(e, "CLIENT", t == null ? void 0 : t.access_token)
        }
        )
    }
    _handleTokenChanged(e, t, r) {
        (e === "TOKEN_REFRESHED" || e === "SIGNED_IN") && this.changedAccessToken !== r ? (this.changedAccessToken = r,
        this.realtime.setAuth(r)) : e === "SIGNED_OUT" && (this.realtime.setAuth(),
        t == "STORAGE" && this.auth.signOut(),
        this.changedAccessToken = void 0)
    }
}
;
const eP = (e, t, r) => new ZC(e,t,r);
function tP() {
    if (typeof window < "u")
        return !1;
    const e = globalThis.process;
    if (!e)
        return !1;
    const t = e.version;
    if (t == null)
        return !1;
    const r = t.match(/^v(\d+)\./);
    return r ? parseInt(r[1], 10) <= 18 : !1
}
tP() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
const rP = "https://laiyyhclgztbpnbowfhj.supabase.co"
  , nP = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhaXl5aGNsZ3p0YnBuYm93ZmhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1MTg5MTMsImV4cCI6MjA5MDA5NDkxM30.VMh8qqY8s3d_gz0_zc84kEblGVQZpyNaQJKiPk_g8rI"
  , sP = eP(rP, nP, {
    auth: {
        storage: localStorage,
        persistSession: !0,
        autoRefreshToken: !0
    }
})
  , iP = () => {
    const [e] = Bx()
      , t = Od()
      , r = e.get("bundle") || ""
      , n = e.get("data") || ""
      , s = e.get("amount") || ""
      , [i,o] = b.useState("")
      , [a,l] = b.useState(s)
      , [u,c] = b.useState(!1)
      , [d,f] = b.useState(null)
      , h = async y => {
        var m;
        y.preventDefault(),
        f(null),
        c(!0);
        const g = i.replace(/\D/g, "");
        if (g.length !== 10) {
            f({
                text: "Please enter a valid 10-digit phone number",
                type: "error"
            }),
            c(!1);
            return
        }
        const w = parseInt(a);
        if (isNaN(w) || w < 1) {
            f({
                text: "Please enter a valid amount",
                type: "error"
            }),
            c(!1);
            return
        }
        try {
            const {data: p, error: v} = await sP.functions.invoke("nestlink-pay", {
                body: {
                    action: "pay",
                    phone: g,
                    amount: w,
                    local_id: `ORDER_${Date.now()}`,
                    transaction_desc: r ? `${r} ${n} bundle - KES ${w}` : `Payment for KES ${w}`
                }
            });
            if (v)
                throw v;
            if (p != null && p.status && (p == null ? void 0 : p.headers) === 200) {
                let x = p.msg || "Payment initiated successfully!";
                (m = p.data) != null && m.ResponseDescription && (x = `${p.msg}
${p.data.ResponseDescription}`),
                f({
                    text: "✓ " + x + " Please check your phone for the M-Pesa prompt.",
                    type: "success"
                }),
                o(""),
                l("")
            } else
                f({
                    text: (p == null ? void 0 : p.msg) || "Payment failed. Please try again.",
                    type: "error"
                })
        } catch (p) {
            console.error("Error:", p),
            f({
                text: "Network error. Please check your connection and try again.",
                type: "error"
            })
        } finally {
            c(!1)
        }
    }
    ;
    return _.jsx("div", {
        className: "min-h-screen flex items-center justify-center px-4 py-10 bg-hero",
        children: _.jsxs("div", {
            className: "w-full max-w-md rounded-3xl overflow-hidden shadow-2xl animate-in slide-in-from-bottom-4 duration-500",
            children: [_.jsxs("div", {
                className: "relative bg-cta-gradient px-8 py-10 text-center overflow-hidden",
                children: [_.jsx("div", {
                    className: "absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.15),transparent_70%)] animate-pulse-glow"
                }), _.jsx("h1", {
                    className: "relative z-10 font-display text-2xl font-bold text-accent-foreground tracking-wider",
                    children: "STARLINK KENYA"
                }), _.jsx("p", {
                    className: "relative z-10 text-accent-foreground/80 text-sm mt-1 font-body",
                    children: "Secure Payment Gateway"
                }), r && _.jsxs("div", {
                    className: "relative z-10 mt-4 inline-block px-4 py-1.5 bg-accent-foreground/20 rounded-full text-accent-foreground text-xs font-display font-semibold uppercase tracking-wider",
                    children: [r, " — ", n]
                })]
            }), _.jsxs("div", {
                className: "bg-card p-8",
                children: [d && _.jsxs("div", {
                    className: `flex items-start gap-3 p-4 rounded-xl mb-6 text-sm font-body animate-in slide-in-from-top-2 duration-300 ${d.type === "success" ? "bg-secondary/20 text-secondary border border-secondary/30" : "bg-destructive/20 text-destructive border border-destructive/30"}`,
                    children: [d.type === "success" ? _.jsx(ES, {
                        className: "w-5 h-5 flex-shrink-0 mt-0.5"
                    }) : _.jsx(TS, {
                        className: "w-5 h-5 flex-shrink-0 mt-0.5"
                    }), _.jsx("span", {
                        className: "whitespace-pre-line",
                        children: d.text
                    })]
                }), _.jsxs("form", {
                    onSubmit: h,
                    className: "space-y-6",
                    children: [_.jsxs("div", {
                        children: [_.jsx("label", {
                            className: "block text-xs font-display font-semibold text-foreground uppercase tracking-wider mb-2",
                            children: "Phone Number"
                        }), _.jsxs("div", {
                            className: "relative",
                            children: [_.jsx($v, {
                                className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary"
                            }), _.jsx("input", {
                                type: "tel",
                                value: i,
                                onChange: y => o(y.target.value.replace(/\D/g, "")),
                                placeholder: "e.g., 0703615240",
                                required: !0,
                                maxLength: 10,
                                className: "w-full pl-12 pr-4 py-4 rounded-xl border-2 border-border bg-muted/50 text-foreground font-body text-base focus:outline-none focus:border-primary focus:bg-card transition-all"
                            })]
                        }), _.jsx("p", {
                            className: "text-xs text-muted-foreground font-body mt-1.5",
                            children: "Enter the phone number where data bundles will be sent"
                        })]
                    }), _.jsxs("div", {
                        children: [_.jsx("label", {
                            className: "block text-xs font-display font-semibold text-foreground uppercase tracking-wider mb-2",
                            children: "Amount (KES)"
                        }), _.jsxs("div", {
                            className: "relative",
                            children: [_.jsx(SS, {
                                className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary"
                            }), _.jsx("input", {
                                type: "number",
                                value: a,
                                onChange: y => l(y.target.value),
                                placeholder: "Enter amount",
                                required: !0,
                                min: 1,
                                className: "w-full pl-12 pr-4 py-4 rounded-xl border-2 border-border bg-muted/50 text-foreground font-body text-base focus:outline-none focus:border-primary focus:bg-card transition-all"
                            })]
                        })]
                    }), _.jsx("button", {
                        type: "submit",
                        disabled: u,
                        className: "w-full py-4 rounded-xl bg-cta-gradient font-display font-bold text-base uppercase tracking-wider text-accent-foreground hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg",
                        children: u ? _.jsxs(_.Fragment, {
                            children: [_.jsx(PS, {
                                className: "w-5 h-5 animate-spin"
                            }), "Processing..."]
                        }) : "Complete Payment"
                    })]
                }), _.jsxs("button", {
                    onClick: () => t("/"),
                    className: "mt-4 flex items-center justify-center gap-2 w-full py-3 text-muted-foreground font-body text-sm hover:text-primary transition-colors",
                    children: [_.jsx(_S, {
                        className: "w-4 h-4"
                    }), "Back to Bundles"]
                }), _.jsx("div", {
                    className: "mt-6 text-center",
                    children: _.jsxs("div", {
                        className: "inline-flex items-center gap-1.5 text-primary text-xs font-body",
                        children: [_.jsx(RS, {
                            className: "w-3.5 h-3.5"
                        }), "Secure & Encrypted Payment"]
                    })
                })]
            })]
        })
    })
}
  , oP = () => {
    const e = cl();
    return b.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    _.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: _.jsxs("div", {
            className: "text-center",
            children: [_.jsx("h1", {
                className: "mb-4 text-4xl font-bold",
                children: "404"
            }), _.jsx("p", {
                className: "mb-4 text-xl text-muted-foreground",
                children: "Oops! Page not found"
            }), _.jsx("a", {
                href: "/",
                className: "text-primary underline hover:text-primary/90",
                children: "Return to Home"
            })]
        })
    })
}
  , aP = new Wb
  , lP = () => _.jsx(Kb, {
    client: aP,
    children: _.jsxs(Xk, {
        children: [_.jsx(f1, {}), _.jsx(w_, {}), _.jsx(Fx, {
            children: _.jsxs($x, {
                children: [_.jsx(sa, {
                    path: "/",
                    element: _.jsx(uE, {})
                }), _.jsx(sa, {
                    path: "/pay",
                    element: _.jsx(iP, {})
                }), _.jsx(sa, {
                    path: "*",
                    element: _.jsx(oP, {})
                })]
            })
        })]
    })
});
Hg(document.getElementById("root")).render(_.jsx(lP, {}));
