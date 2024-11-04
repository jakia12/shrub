/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

( () => {
    var DE = Object.create;
    var xr = Object.defineProperty;
    var ME = Object.getOwnPropertyDescriptor;
    var FE = Object.getOwnPropertyNames;
    var qE = Object.getPrototypeOf
      , XE = Object.prototype.hasOwnProperty;
    var Ee = (e, t) => () => (e && (t = e(e = 0)),
    t);
    var f = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t),
    t.exports)
      , Ce = (e, t) => {
        for (var r in t)
            xr(e, r, {
                get: t[r],
                enumerable: !0
            })
    }
      , aa = (e, t, r, n) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let i of FE(t))
                !XE.call(e, i) && i !== r && xr(e, i, {
                    get: () => t[i],
                    enumerable: !(n = ME(t, i)) || n.enumerable
                });
        return e
    }
    ;
    var ue = (e, t, r) => (r = e != null ? DE(qE(e)) : {},
    aa(t || !e || !e.__esModule ? xr(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e))
      , ze = e => aa(xr({}, "__esModule", {
        value: !0
    }), e);
    var kn = f( () => {
        "use strict";
        window.tram = function(e) {
            function t(c, y) {
                var I = new F.Bare;
                return I.init(c, y)
            }
            function r(c) {
                return c.replace(/[A-Z]/g, function(y) {
                    return "-" + y.toLowerCase()
                })
            }
            function n(c) {
                var y = parseInt(c.slice(1), 16)
                  , I = y >> 16 & 255
                  , A = y >> 8 & 255
                  , m = 255 & y;
                return [I, A, m]
            }
            function i(c, y, I) {
                return "#" + (1 << 24 | c << 16 | y << 8 | I).toString(16).slice(1)
            }
            function o() {}
            function a(c, y) {
                l("Type warning: Expected: [" + c + "] Got: [" + typeof y + "] " + y)
            }
            function s(c, y, I) {
                l("Units do not match [" + c + "]: " + y + ", " + I)
            }
            function u(c, y, I) {
                if (y !== void 0 && (I = y),
                c === void 0)
                    return I;
                var A = I;
                return gt.test(c) || !tt.test(c) ? A = parseInt(c, 10) : tt.test(c) && (A = 1e3 * parseFloat(c)),
                0 > A && (A = 0),
                A === A ? A : I
            }
            function l(c) {
                ce.debug && window && window.console.warn(c)
            }
            function E(c) {
                for (var y = -1, I = c ? c.length : 0, A = []; ++y < I; ) {
                    var m = c[y];
                    m && A.push(m)
                }
                return A
            }
            var p = function(c, y, I) {
                function A(re) {
                    return typeof re == "object"
                }
                function m(re) {
                    return typeof re == "function"
                }
                function w() {}
                function j(re, pe) {
                    function X() {
                        var Se = new ie;
                        return m(Se.init) && Se.init.apply(Se, arguments),
                        Se
                    }
                    function ie() {}
                    pe === I && (pe = re,
                    re = Object),
                    X.Bare = ie;
                    var ae, me = w[c] = re[c], We = ie[c] = X[c] = new w;
                    return We.constructor = X,
                    X.mixin = function(Se) {
                        return ie[c] = X[c] = j(X, Se)[c],
                        X
                    }
                    ,
                    X.open = function(Se) {
                        if (ae = {},
                        m(Se) ? ae = Se.call(X, We, me, X, re) : A(Se) && (ae = Se),
                        A(ae))
                            for (var Zt in ae)
                                y.call(ae, Zt) && (We[Zt] = ae[Zt]);
                        return m(We.init) || (We.init = re),
                        X
                    }
                    ,
                    X.open(pe)
                }
                return j
            }("prototype", {}.hasOwnProperty)
              , d = {
                ease: ["ease", function(c, y, I, A) {
                    var m = (c /= A) * c
                      , w = m * c;
                    return y + I * (-2.75 * w * m + 11 * m * m + -15.5 * w + 8 * m + .25 * c)
                }
                ],
                "ease-in": ["ease-in", function(c, y, I, A) {
                    var m = (c /= A) * c
                      , w = m * c;
                    return y + I * (-1 * w * m + 3 * m * m + -3 * w + 2 * m)
                }
                ],
                "ease-out": ["ease-out", function(c, y, I, A) {
                    var m = (c /= A) * c
                      , w = m * c;
                    return y + I * (.3 * w * m + -1.6 * m * m + 2.2 * w + -1.8 * m + 1.9 * c)
                }
                ],
                "ease-in-out": ["ease-in-out", function(c, y, I, A) {
                    var m = (c /= A) * c
                      , w = m * c;
                    return y + I * (2 * w * m + -5 * m * m + 2 * w + 2 * m)
                }
                ],
                linear: ["linear", function(c, y, I, A) {
                    return I * c / A + y
                }
                ],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(c, y, I, A) {
                    return I * (c /= A) * c + y
                }
                ],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(c, y, I, A) {
                    return -I * (c /= A) * (c - 2) + y
                }
                ],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(c, y, I, A) {
                    return (c /= A / 2) < 1 ? I / 2 * c * c + y : -I / 2 * (--c * (c - 2) - 1) + y
                }
                ],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(c, y, I, A) {
                    return I * (c /= A) * c * c + y
                }
                ],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(c, y, I, A) {
                    return I * ((c = c / A - 1) * c * c + 1) + y
                }
                ],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(c, y, I, A) {
                    return (c /= A / 2) < 1 ? I / 2 * c * c * c + y : I / 2 * ((c -= 2) * c * c + 2) + y
                }
                ],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(c, y, I, A) {
                    return I * (c /= A) * c * c * c + y
                }
                ],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(c, y, I, A) {
                    return -I * ((c = c / A - 1) * c * c * c - 1) + y
                }
                ],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(c, y, I, A) {
                    return (c /= A / 2) < 1 ? I / 2 * c * c * c * c + y : -I / 2 * ((c -= 2) * c * c * c - 2) + y
                }
                ],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(c, y, I, A) {
                    return I * (c /= A) * c * c * c * c + y
                }
                ],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(c, y, I, A) {
                    return I * ((c = c / A - 1) * c * c * c * c + 1) + y
                }
                ],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(c, y, I, A) {
                    return (c /= A / 2) < 1 ? I / 2 * c * c * c * c * c + y : I / 2 * ((c -= 2) * c * c * c * c + 2) + y
                }
                ],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(c, y, I, A) {
                    return -I * Math.cos(c / A * (Math.PI / 2)) + I + y
                }
                ],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(c, y, I, A) {
                    return I * Math.sin(c / A * (Math.PI / 2)) + y
                }
                ],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(c, y, I, A) {
                    return -I / 2 * (Math.cos(Math.PI * c / A) - 1) + y
                }
                ],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(c, y, I, A) {
                    return c === 0 ? y : I * Math.pow(2, 10 * (c / A - 1)) + y
                }
                ],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(c, y, I, A) {
                    return c === A ? y + I : I * (-Math.pow(2, -10 * c / A) + 1) + y
                }
                ],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(c, y, I, A) {
                    return c === 0 ? y : c === A ? y + I : (c /= A / 2) < 1 ? I / 2 * Math.pow(2, 10 * (c - 1)) + y : I / 2 * (-Math.pow(2, -10 * --c) + 2) + y
                }
                ],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(c, y, I, A) {
                    return -I * (Math.sqrt(1 - (c /= A) * c) - 1) + y
                }
                ],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(c, y, I, A) {
                    return I * Math.sqrt(1 - (c = c / A - 1) * c) + y
                }
                ],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(c, y, I, A) {
                    return (c /= A / 2) < 1 ? -I / 2 * (Math.sqrt(1 - c * c) - 1) + y : I / 2 * (Math.sqrt(1 - (c -= 2) * c) + 1) + y
                }
                ],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(c, y, I, A, m) {
                    return m === void 0 && (m = 1.70158),
                    I * (c /= A) * c * ((m + 1) * c - m) + y
                }
                ],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(c, y, I, A, m) {
                    return m === void 0 && (m = 1.70158),
                    I * ((c = c / A - 1) * c * ((m + 1) * c + m) + 1) + y
                }
                ],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(c, y, I, A, m) {
                    return m === void 0 && (m = 1.70158),
                    (c /= A / 2) < 1 ? I / 2 * c * c * (((m *= 1.525) + 1) * c - m) + y : I / 2 * ((c -= 2) * c * (((m *= 1.525) + 1) * c + m) + 2) + y
                }
                ]
            }
              , h = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            }
              , T = document
              , _ = window
              , S = "bkwld-tram"
              , v = /[\-\.0-9]/g
              , x = /[A-Z]/
              , O = "number"
              , C = /^(rgb|#)/
              , L = /(em|cm|mm|in|pt|pc|px)$/
              , R = /(em|cm|mm|in|pt|pc|px|%)$/
              , V = /(deg|rad|turn)$/
              , B = "unitless"
              , W = /(all|none) 0s ease 0s/
              , Y = /^(width|height)$/
              , te = " "
              , D = T.createElement("a")
              , b = ["Webkit", "Moz", "O", "ms"]
              , P = ["-webkit-", "-moz-", "-o-", "-ms-"]
              , H = function(c) {
                if (c in D.style)
                    return {
                        dom: c,
                        css: c
                    };
                var y, I, A = "", m = c.split("-");
                for (y = 0; y < m.length; y++)
                    A += m[y].charAt(0).toUpperCase() + m[y].slice(1);
                for (y = 0; y < b.length; y++)
                    if (I = b[y] + A,
                    I in D.style)
                        return {
                            dom: I,
                            css: P[y] + c
                        }
            }
              , G = t.support = {
                bind: Function.prototype.bind,
                transform: H("transform"),
                transition: H("transition"),
                backface: H("backface-visibility"),
                timing: H("transition-timing-function")
            };
            if (G.transition) {
                var J = G.timing.dom;
                if (D.style[J] = d["ease-in-back"][0],
                !D.style[J])
                    for (var ee in h)
                        d[ee][0] = h[ee]
            }
            var N = t.frame = function() {
                var c = _.requestAnimationFrame || _.webkitRequestAnimationFrame || _.mozRequestAnimationFrame || _.oRequestAnimationFrame || _.msRequestAnimationFrame;
                return c && G.bind ? c.bind(_) : function(y) {
                    _.setTimeout(y, 16)
                }
            }()
              , k = t.now = function() {
                var c = _.performance
                  , y = c && (c.now || c.webkitNow || c.msNow || c.mozNow);
                return y && G.bind ? y.bind(c) : Date.now || function() {
                    return +new Date
                }
            }()
              , z = p(function(c) {
                function y(Q, se) {
                    var ye = E(("" + Q).split(te))
                      , le = ye[0];
                    se = se || {};
                    var Oe = U[le];
                    if (!Oe)
                        return l("Unsupported property: " + le);
                    if (!se.weak || !this.props[le]) {
                        var qe = Oe[0]
                          , Re = this.props[le];
                        return Re || (Re = this.props[le] = new qe.Bare),
                        Re.init(this.$el, ye, Oe, se),
                        Re
                    }
                }
                function I(Q, se, ye) {
                    if (Q) {
                        var le = typeof Q;
                        if (se || (this.timer && this.timer.destroy(),
                        this.queue = [],
                        this.active = !1),
                        le == "number" && se)
                            return this.timer = new de({
                                duration: Q,
                                context: this,
                                complete: w
                            }),
                            void (this.active = !0);
                        if (le == "string" && se) {
                            switch (Q) {
                            case "hide":
                                X.call(this);
                                break;
                            case "stop":
                                j.call(this);
                                break;
                            case "redraw":
                                ie.call(this);
                                break;
                            default:
                                y.call(this, Q, ye && ye[1])
                            }
                            return w.call(this)
                        }
                        if (le == "function")
                            return void Q.call(this, this);
                        if (le == "object") {
                            var Oe = 0;
                            We.call(this, Q, function(_e, NE) {
                                _e.span > Oe && (Oe = _e.span),
                                _e.stop(),
                                _e.animate(NE)
                            }, function(_e) {
                                "wait"in _e && (Oe = u(_e.wait, 0))
                            }),
                            me.call(this),
                            Oe > 0 && (this.timer = new de({
                                duration: Oe,
                                context: this
                            }),
                            this.active = !0,
                            se && (this.timer.complete = w));
                            var qe = this
                              , Re = !1
                              , wr = {};
                            N(function() {
                                We.call(qe, Q, function(_e) {
                                    _e.active && (Re = !0,
                                    wr[_e.name] = _e.nextStyle)
                                }),
                                Re && qe.$el.css(wr)
                            })
                        }
                    }
                }
                function A(Q) {
                    Q = u(Q, 0),
                    this.active ? this.queue.push({
                        options: Q
                    }) : (this.timer = new de({
                        duration: Q,
                        context: this,
                        complete: w
                    }),
                    this.active = !0)
                }
                function m(Q) {
                    return this.active ? (this.queue.push({
                        options: Q,
                        args: arguments
                    }),
                    void (this.timer.complete = w)) : l("No active transition timer. Use start() or wait() before then().")
                }
                function w() {
                    if (this.timer && this.timer.destroy(),
                    this.active = !1,
                    this.queue.length) {
                        var Q = this.queue.shift();
                        I.call(this, Q.options, !0, Q.args)
                    }
                }
                function j(Q) {
                    this.timer && this.timer.destroy(),
                    this.queue = [],
                    this.active = !1;
                    var se;
                    typeof Q == "string" ? (se = {},
                    se[Q] = 1) : se = typeof Q == "object" && Q != null ? Q : this.props,
                    We.call(this, se, Se),
                    me.call(this)
                }
                function re(Q) {
                    j.call(this, Q),
                    We.call(this, Q, Zt, LE)
                }
                function pe(Q) {
                    typeof Q != "string" && (Q = "block"),
                    this.el.style.display = Q
                }
                function X() {
                    j.call(this),
                    this.el.style.display = "none"
                }
                function ie() {
                    this.el.offsetHeight
                }
                function ae() {
                    j.call(this),
                    e.removeData(this.el, S),
                    this.$el = this.el = null
                }
                function me() {
                    var Q, se, ye = [];
                    this.upstream && ye.push(this.upstream);
                    for (Q in this.props)
                        se = this.props[Q],
                        se.active && ye.push(se.string);
                    ye = ye.join(","),
                    this.style !== ye && (this.style = ye,
                    this.el.style[G.transition.dom] = ye)
                }
                function We(Q, se, ye) {
                    var le, Oe, qe, Re, wr = se !== Se, _e = {};
                    for (le in Q)
                        qe = Q[le],
                        le in ge ? (_e.transform || (_e.transform = {}),
                        _e.transform[le] = qe) : (x.test(le) && (le = r(le)),
                        le in U ? _e[le] = qe : (Re || (Re = {}),
                        Re[le] = qe));
                    for (le in _e) {
                        if (qe = _e[le],
                        Oe = this.props[le],
                        !Oe) {
                            if (!wr)
                                continue;
                            Oe = y.call(this, le)
                        }
                        se.call(this, Oe, qe)
                    }
                    ye && Re && ye.call(this, Re)
                }
                function Se(Q) {
                    Q.stop()
                }
                function Zt(Q, se) {
                    Q.set(se)
                }
                function LE(Q) {
                    this.$el.css(Q)
                }
                function Fe(Q, se) {
                    c[Q] = function() {
                        return this.children ? PE.call(this, se, arguments) : (this.el && se.apply(this, arguments),
                        this)
                    }
                }
                function PE(Q, se) {
                    var ye, le = this.children.length;
                    for (ye = 0; le > ye; ye++)
                        Q.apply(this.children[ye], se);
                    return this
                }
                c.init = function(Q) {
                    if (this.$el = e(Q),
                    this.el = this.$el[0],
                    this.props = {},
                    this.queue = [],
                    this.style = "",
                    this.active = !1,
                    ce.keepInherited && !ce.fallback) {
                        var se = q(this.el, "transition");
                        se && !W.test(se) && (this.upstream = se)
                    }
                    G.backface && ce.hideBackface && g(this.el, G.backface.css, "hidden")
                }
                ,
                Fe("add", y),
                Fe("start", I),
                Fe("wait", A),
                Fe("then", m),
                Fe("next", w),
                Fe("stop", j),
                Fe("set", re),
                Fe("show", pe),
                Fe("hide", X),
                Fe("redraw", ie),
                Fe("destroy", ae)
            })
              , F = p(z, function(c) {
                function y(I, A) {
                    var m = e.data(I, S) || e.data(I, S, new z.Bare);
                    return m.el || m.init(I),
                    A ? m.start(A) : m
                }
                c.init = function(I, A) {
                    var m = e(I);
                    if (!m.length)
                        return this;
                    if (m.length === 1)
                        return y(m[0], A);
                    var w = [];
                    return m.each(function(j, re) {
                        w.push(y(re, A))
                    }),
                    this.children = w,
                    this
                }
            })
              , M = p(function(c) {
                function y() {
                    var w = this.get();
                    this.update("auto");
                    var j = this.get();
                    return this.update(w),
                    j
                }
                function I(w, j, re) {
                    return j !== void 0 && (re = j),
                    w in d ? w : re
                }
                function A(w) {
                    var j = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(w);
                    return (j ? i(j[1], j[2], j[3]) : w).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var m = {
                    duration: 500,
                    ease: "ease",
                    delay: 0
                };
                c.init = function(w, j, re, pe) {
                    this.$el = w,
                    this.el = w[0];
                    var X = j[0];
                    re[2] && (X = re[2]),
                    K[X] && (X = K[X]),
                    this.name = X,
                    this.type = re[1],
                    this.duration = u(j[1], this.duration, m.duration),
                    this.ease = I(j[2], this.ease, m.ease),
                    this.delay = u(j[3], this.delay, m.delay),
                    this.span = this.duration + this.delay,
                    this.active = !1,
                    this.nextStyle = null,
                    this.auto = Y.test(this.name),
                    this.unit = pe.unit || this.unit || ce.defaultUnit,
                    this.angle = pe.angle || this.angle || ce.defaultAngle,
                    ce.fallback || pe.fallback ? this.animate = this.fallback : (this.animate = this.transition,
                    this.string = this.name + te + this.duration + "ms" + (this.ease != "ease" ? te + d[this.ease][0] : "") + (this.delay ? te + this.delay + "ms" : ""))
                }
                ,
                c.set = function(w) {
                    w = this.convert(w, this.type),
                    this.update(w),
                    this.redraw()
                }
                ,
                c.transition = function(w) {
                    this.active = !0,
                    w = this.convert(w, this.type),
                    this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()),
                    this.redraw()),
                    w == "auto" && (w = y.call(this))),
                    this.nextStyle = w
                }
                ,
                c.fallback = function(w) {
                    var j = this.el.style[this.name] || this.convert(this.get(), this.type);
                    w = this.convert(w, this.type),
                    this.auto && (j == "auto" && (j = this.convert(this.get(), this.type)),
                    w == "auto" && (w = y.call(this))),
                    this.tween = new Z({
                        from: j,
                        to: w,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                c.get = function() {
                    return q(this.el, this.name)
                }
                ,
                c.update = function(w) {
                    g(this.el, this.name, w)
                }
                ,
                c.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1,
                    this.nextStyle = null,
                    g(this.el, this.name, this.get()));
                    var w = this.tween;
                    w && w.context && w.destroy()
                }
                ,
                c.convert = function(w, j) {
                    if (w == "auto" && this.auto)
                        return w;
                    var re, pe = typeof w == "number", X = typeof w == "string";
                    switch (j) {
                    case O:
                        if (pe)
                            return w;
                        if (X && w.replace(v, "") === "")
                            return +w;
                        re = "number(unitless)";
                        break;
                    case C:
                        if (X) {
                            if (w === "" && this.original)
                                return this.original;
                            if (j.test(w))
                                return w.charAt(0) == "#" && w.length == 7 ? w : A(w)
                        }
                        re = "hex or rgb string";
                        break;
                    case L:
                        if (pe)
                            return w + this.unit;
                        if (X && j.test(w))
                            return w;
                        re = "number(px) or string(unit)";
                        break;
                    case R:
                        if (pe)
                            return w + this.unit;
                        if (X && j.test(w))
                            return w;
                        re = "number(px) or string(unit or %)";
                        break;
                    case V:
                        if (pe)
                            return w + this.angle;
                        if (X && j.test(w))
                            return w;
                        re = "number(deg) or string(angle)";
                        break;
                    case B:
                        if (pe || X && R.test(w))
                            return w;
                        re = "number(unitless) or string(unit or %)"
                    }
                    return a(re, w),
                    w
                }
                ,
                c.redraw = function() {
                    this.el.offsetHeight
                }
            })
              , $ = p(M, function(c, y) {
                c.init = function() {
                    y.init.apply(this, arguments),
                    this.original || (this.original = this.convert(this.get(), C))
                }
            })
              , oe = p(M, function(c, y) {
                c.init = function() {
                    y.init.apply(this, arguments),
                    this.animate = this.fallback
                }
                ,
                c.get = function() {
                    return this.$el[this.name]()
                }
                ,
                c.update = function(I) {
                    this.$el[this.name](I)
                }
            })
              , ne = p(M, function(c, y) {
                function I(A, m) {
                    var w, j, re, pe, X;
                    for (w in A)
                        pe = ge[w],
                        re = pe[0],
                        j = pe[1] || w,
                        X = this.convert(A[w], re),
                        m.call(this, j, X, re)
                }
                c.init = function() {
                    y.init.apply(this, arguments),
                    this.current || (this.current = {},
                    ge.perspective && ce.perspective && (this.current.perspective = ce.perspective,
                    g(this.el, this.name, this.style(this.current)),
                    this.redraw()))
                }
                ,
                c.set = function(A) {
                    I.call(this, A, function(m, w) {
                        this.current[m] = w
                    }),
                    g(this.el, this.name, this.style(this.current)),
                    this.redraw()
                }
                ,
                c.transition = function(A) {
                    var m = this.values(A);
                    this.tween = new et({
                        current: this.current,
                        values: m,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var w, j = {};
                    for (w in this.current)
                        j[w] = w in m ? m[w] : this.current[w];
                    this.active = !0,
                    this.nextStyle = this.style(j)
                }
                ,
                c.fallback = function(A) {
                    var m = this.values(A);
                    this.tween = new et({
                        current: this.current,
                        values: m,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                c.update = function() {
                    g(this.el, this.name, this.style(this.current))
                }
                ,
                c.style = function(A) {
                    var m, w = "";
                    for (m in A)
                        w += m + "(" + A[m] + ") ";
                    return w
                }
                ,
                c.values = function(A) {
                    var m, w = {};
                    return I.call(this, A, function(j, re, pe) {
                        w[j] = re,
                        this.current[j] === void 0 && (m = 0,
                        ~j.indexOf("scale") && (m = 1),
                        this.current[j] = this.convert(m, pe))
                    }),
                    w
                }
            })
              , Z = p(function(c) {
                function y(X) {
                    re.push(X) === 1 && N(I)
                }
                function I() {
                    var X, ie, ae, me = re.length;
                    if (me)
                        for (N(I),
                        ie = k(),
                        X = me; X--; )
                            ae = re[X],
                            ae && ae.render(ie)
                }
                function A(X) {
                    var ie, ae = e.inArray(X, re);
                    ae >= 0 && (ie = re.slice(ae + 1),
                    re.length = ae,
                    ie.length && (re = re.concat(ie)))
                }
                function m(X) {
                    return Math.round(X * pe) / pe
                }
                function w(X, ie, ae) {
                    return i(X[0] + ae * (ie[0] - X[0]), X[1] + ae * (ie[1] - X[1]), X[2] + ae * (ie[2] - X[2]))
                }
                var j = {
                    ease: d.ease[1],
                    from: 0,
                    to: 1
                };
                c.init = function(X) {
                    this.duration = X.duration || 0,
                    this.delay = X.delay || 0;
                    var ie = X.ease || j.ease;
                    d[ie] && (ie = d[ie][1]),
                    typeof ie != "function" && (ie = j.ease),
                    this.ease = ie,
                    this.update = X.update || o,
                    this.complete = X.complete || o,
                    this.context = X.context || this,
                    this.name = X.name;
                    var ae = X.from
                      , me = X.to;
                    ae === void 0 && (ae = j.from),
                    me === void 0 && (me = j.to),
                    this.unit = X.unit || "",
                    typeof ae == "number" && typeof me == "number" ? (this.begin = ae,
                    this.change = me - ae) : this.format(me, ae),
                    this.value = this.begin + this.unit,
                    this.start = k(),
                    X.autoplay !== !1 && this.play()
                }
                ,
                c.play = function() {
                    this.active || (this.start || (this.start = k()),
                    this.active = !0,
                    y(this))
                }
                ,
                c.stop = function() {
                    this.active && (this.active = !1,
                    A(this))
                }
                ,
                c.render = function(X) {
                    var ie, ae = X - this.start;
                    if (this.delay) {
                        if (ae <= this.delay)
                            return;
                        ae -= this.delay
                    }
                    if (ae < this.duration) {
                        var me = this.ease(ae, 0, 1, this.duration);
                        return ie = this.startRGB ? w(this.startRGB, this.endRGB, me) : m(this.begin + me * this.change),
                        this.value = ie + this.unit,
                        void this.update.call(this.context, this.value)
                    }
                    ie = this.endHex || this.begin + this.change,
                    this.value = ie + this.unit,
                    this.update.call(this.context, this.value),
                    this.complete.call(this.context),
                    this.destroy()
                }
                ,
                c.format = function(X, ie) {
                    if (ie += "",
                    X += "",
                    X.charAt(0) == "#")
                        return this.startRGB = n(ie),
                        this.endRGB = n(X),
                        this.endHex = X,
                        this.begin = 0,
                        void (this.change = 1);
                    if (!this.unit) {
                        var ae = ie.replace(v, "")
                          , me = X.replace(v, "");
                        ae !== me && s("tween", ie, X),
                        this.unit = ae
                    }
                    ie = parseFloat(ie),
                    X = parseFloat(X),
                    this.begin = this.value = ie,
                    this.change = X - ie
                }
                ,
                c.destroy = function() {
                    this.stop(),
                    this.context = null,
                    this.ease = this.update = this.complete = o
                }
                ;
                var re = []
                  , pe = 1e3
            })
              , de = p(Z, function(c) {
                c.init = function(y) {
                    this.duration = y.duration || 0,
                    this.complete = y.complete || o,
                    this.context = y.context,
                    this.play()
                }
                ,
                c.render = function(y) {
                    var I = y - this.start;
                    I < this.duration || (this.complete.call(this.context),
                    this.destroy())
                }
            })
              , et = p(Z, function(c, y) {
                c.init = function(I) {
                    this.context = I.context,
                    this.update = I.update,
                    this.tweens = [],
                    this.current = I.current;
                    var A, m;
                    for (A in I.values)
                        m = I.values[A],
                        this.current[A] !== m && this.tweens.push(new Z({
                            name: A,
                            from: this.current[A],
                            to: m,
                            duration: I.duration,
                            delay: I.delay,
                            ease: I.ease,
                            autoplay: !1
                        }));
                    this.play()
                }
                ,
                c.render = function(I) {
                    var A, m, w = this.tweens.length, j = !1;
                    for (A = w; A--; )
                        m = this.tweens[A],
                        m.context && (m.render(I),
                        this.current[m.name] = m.value,
                        j = !0);
                    return j ? void (this.update && this.update.call(this.context)) : this.destroy()
                }
                ,
                c.destroy = function() {
                    if (y.destroy.call(this),
                    this.tweens) {
                        var I, A = this.tweens.length;
                        for (I = A; I--; )
                            this.tweens[I].destroy();
                        this.tweens = null,
                        this.current = null
                    }
                }
            })
              , ce = t.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !G.transition,
                agentTests: []
            };
            t.fallback = function(c) {
                if (!G.transition)
                    return ce.fallback = !0;
                ce.agentTests.push("(" + c + ")");
                var y = new RegExp(ce.agentTests.join("|"),"i");
                ce.fallback = y.test(navigator.userAgent)
            }
            ,
            t.fallback("6.0.[2-5] Safari"),
            t.tween = function(c) {
                return new Z(c)
            }
            ,
            t.delay = function(c, y, I) {
                return new de({
                    complete: y,
                    duration: c,
                    context: I
                })
            }
            ,
            e.fn.tram = function(c) {
                return t.call(null, this, c)
            }
            ;
            var g = e.style
              , q = e.css
              , K = {
                transform: G.transform && G.transform.css
            }
              , U = {
                color: [$, C],
                background: [$, C, "background-color"],
                "outline-color": [$, C],
                "border-color": [$, C],
                "border-top-color": [$, C],
                "border-right-color": [$, C],
                "border-bottom-color": [$, C],
                "border-left-color": [$, C],
                "border-width": [M, L],
                "border-top-width": [M, L],
                "border-right-width": [M, L],
                "border-bottom-width": [M, L],
                "border-left-width": [M, L],
                "border-spacing": [M, L],
                "letter-spacing": [M, L],
                margin: [M, L],
                "margin-top": [M, L],
                "margin-right": [M, L],
                "margin-bottom": [M, L],
                "margin-left": [M, L],
                padding: [M, L],
                "padding-top": [M, L],
                "padding-right": [M, L],
                "padding-bottom": [M, L],
                "padding-left": [M, L],
                "outline-width": [M, L],
                opacity: [M, O],
                top: [M, R],
                right: [M, R],
                bottom: [M, R],
                left: [M, R],
                "font-size": [M, R],
                "text-indent": [M, R],
                "word-spacing": [M, R],
                width: [M, R],
                "min-width": [M, R],
                "max-width": [M, R],
                height: [M, R],
                "min-height": [M, R],
                "max-height": [M, R],
                "line-height": [M, B],
                "scroll-top": [oe, O, "scrollTop"],
                "scroll-left": [oe, O, "scrollLeft"]
            }
              , ge = {};
            G.transform && (U.transform = [ne],
            ge = {
                x: [R, "translateX"],
                y: [R, "translateY"],
                rotate: [V],
                rotateX: [V],
                rotateY: [V],
                scale: [O],
                scaleX: [O],
                scaleY: [O],
                skew: [V],
                skewX: [V],
                skewY: [V]
            }),
            G.transform && G.backface && (ge.z = [R, "translateZ"],
            ge.rotateZ = [V],
            ge.scaleZ = [O],
            ge.perspective = [L]);
            var gt = /ms/
              , tt = /s|\./;
            return e.tram = t
        }(window.jQuery)
    }
    );
    var ua = f( (aF, sa) => {
        "use strict";
        var GE = window.$
          , VE = kn() && GE.tram;
        sa.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {}
              , r = Array.prototype
              , n = Object.prototype
              , i = Function.prototype
              , o = r.push
              , a = r.slice
              , s = r.concat
              , u = n.toString
              , l = n.hasOwnProperty
              , E = r.forEach
              , p = r.map
              , d = r.reduce
              , h = r.reduceRight
              , T = r.filter
              , _ = r.every
              , S = r.some
              , v = r.indexOf
              , x = r.lastIndexOf
              , O = Array.isArray
              , C = Object.keys
              , L = i.bind
              , R = e.each = e.forEach = function(b, P, H) {
                if (b == null)
                    return b;
                if (E && b.forEach === E)
                    b.forEach(P, H);
                else if (b.length === +b.length) {
                    for (var G = 0, J = b.length; G < J; G++)
                        if (P.call(H, b[G], G, b) === t)
                            return
                } else
                    for (var ee = e.keys(b), G = 0, J = ee.length; G < J; G++)
                        if (P.call(H, b[ee[G]], ee[G], b) === t)
                            return;
                return b
            }
            ;
            e.map = e.collect = function(b, P, H) {
                var G = [];
                return b == null ? G : p && b.map === p ? b.map(P, H) : (R(b, function(J, ee, N) {
                    G.push(P.call(H, J, ee, N))
                }),
                G)
            }
            ,
            e.find = e.detect = function(b, P, H) {
                var G;
                return V(b, function(J, ee, N) {
                    if (P.call(H, J, ee, N))
                        return G = J,
                        !0
                }),
                G
            }
            ,
            e.filter = e.select = function(b, P, H) {
                var G = [];
                return b == null ? G : T && b.filter === T ? b.filter(P, H) : (R(b, function(J, ee, N) {
                    P.call(H, J, ee, N) && G.push(J)
                }),
                G)
            }
            ;
            var V = e.some = e.any = function(b, P, H) {
                P || (P = e.identity);
                var G = !1;
                return b == null ? G : S && b.some === S ? b.some(P, H) : (R(b, function(J, ee, N) {
                    if (G || (G = P.call(H, J, ee, N)))
                        return t
                }),
                !!G)
            }
            ;
            e.contains = e.include = function(b, P) {
                return b == null ? !1 : v && b.indexOf === v ? b.indexOf(P) != -1 : V(b, function(H) {
                    return H === P
                })
            }
            ,
            e.delay = function(b, P) {
                var H = a.call(arguments, 2);
                return setTimeout(function() {
                    return b.apply(null, H)
                }, P)
            }
            ,
            e.defer = function(b) {
                return e.delay.apply(e, [b, 1].concat(a.call(arguments, 1)))
            }
            ,
            e.throttle = function(b) {
                var P, H, G;
                return function() {
                    P || (P = !0,
                    H = arguments,
                    G = this,
                    VE.frame(function() {
                        P = !1,
                        b.apply(G, H)
                    }))
                }
            }
            ,
            e.debounce = function(b, P, H) {
                var G, J, ee, N, k, z = function() {
                    var F = e.now() - N;
                    F < P ? G = setTimeout(z, P - F) : (G = null,
                    H || (k = b.apply(ee, J),
                    ee = J = null))
                };
                return function() {
                    ee = this,
                    J = arguments,
                    N = e.now();
                    var F = H && !G;
                    return G || (G = setTimeout(z, P)),
                    F && (k = b.apply(ee, J),
                    ee = J = null),
                    k
                }
            }
            ,
            e.defaults = function(b) {
                if (!e.isObject(b))
                    return b;
                for (var P = 1, H = arguments.length; P < H; P++) {
                    var G = arguments[P];
                    for (var J in G)
                        b[J] === void 0 && (b[J] = G[J])
                }
                return b
            }
            ,
            e.keys = function(b) {
                if (!e.isObject(b))
                    return [];
                if (C)
                    return C(b);
                var P = [];
                for (var H in b)
                    e.has(b, H) && P.push(H);
                return P
            }
            ,
            e.has = function(b, P) {
                return l.call(b, P)
            }
            ,
            e.isObject = function(b) {
                return b === Object(b)
            }
            ,
            e.now = Date.now || function() {
                return new Date().getTime()
            }
            ,
            e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var B = /(.)^/
              , W = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }
              , Y = /\\|'|\r|\n|\u2028|\u2029/g
              , te = function(b) {
                return "\\" + W[b]
            }
              , D = /^\s*(\w|\$)+\s*$/;
            return e.template = function(b, P, H) {
                !P && H && (P = H),
                P = e.defaults({}, P, e.templateSettings);
                var G = RegExp([(P.escape || B).source, (P.interpolate || B).source, (P.evaluate || B).source].join("|") + "|$", "g")
                  , J = 0
                  , ee = "__p+='";
                b.replace(G, function(F, M, $, oe, ne) {
                    return ee += b.slice(J, ne).replace(Y, te),
                    J = ne + F.length,
                    M ? ee += `'+
((__t=(` + M + `))==null?'':_.escape(__t))+
'` : $ ? ee += `'+
((__t=(` + $ + `))==null?'':__t)+
'` : oe && (ee += `';
` + oe + `
__p+='`),
                    F
                }),
                ee += `';
`;
                var N = P.variable;
                if (N) {
                    if (!D.test(N))
                        throw new Error("variable is not a bare identifier: " + N)
                } else
                    ee = `with(obj||{}){
` + ee + `}
`,
                    N = "obj";
                ee = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + ee + `return __p;
`;
                var k;
                try {
                    k = new Function(P.variable || "obj","_",ee)
                } catch (F) {
                    throw F.source = ee,
                    F
                }
                var z = function(F) {
                    return k.call(this, F, e)
                };
                return z.source = "function(" + N + `){
` + ee + "}",
                z
            }
            ,
            e
        }()
    }
    );
    var Ve = f( (sF, Ea) => {
        "use strict";
        var fe = {}
          , bt = {}
          , At = []
          , Hn = window.Webflow || []
          , st = window.jQuery
          , Ge = st(window)
          , UE = st(document)
          , Ke = st.isFunction
          , Xe = fe._ = ua()
          , la = fe.tram = kn() && st.tram
          , Cr = !1
          , Wn = !1;
        la.config.hideBackface = !1;
        la.config.keepInherited = !0;
        fe.define = function(e, t, r) {
            bt[e] && da(bt[e]);
            var n = bt[e] = t(st, Xe, r) || {};
            return fa(n),
            n
        }
        ;
        fe.require = function(e) {
            return bt[e]
        }
        ;
        function fa(e) {
            fe.env() && (Ke(e.design) && Ge.on("__wf_design", e.design),
            Ke(e.preview) && Ge.on("__wf_preview", e.preview)),
            Ke(e.destroy) && Ge.on("__wf_destroy", e.destroy),
            e.ready && Ke(e.ready) && kE(e)
        }
        function kE(e) {
            if (Cr) {
                e.ready();
                return
            }
            Xe.contains(At, e.ready) || At.push(e.ready)
        }
        function da(e) {
            Ke(e.design) && Ge.off("__wf_design", e.design),
            Ke(e.preview) && Ge.off("__wf_preview", e.preview),
            Ke(e.destroy) && Ge.off("__wf_destroy", e.destroy),
            e.ready && Ke(e.ready) && BE(e)
        }
        function BE(e) {
            At = Xe.filter(At, function(t) {
                return t !== e.ready
            })
        }
        fe.push = function(e) {
            if (Cr) {
                Ke(e) && e();
                return
            }
            Hn.push(e)
        }
        ;
        fe.env = function(e) {
            var t = window.__wf_design
              , r = typeof t < "u";
            if (!e)
                return r;
            if (e === "design")
                return r && t;
            if (e === "preview")
                return r && !t;
            if (e === "slug")
                return r && window.__wf_slug;
            if (e === "editor")
                return window.WebflowEditor;
            if (e === "test")
                return window.__wf_test;
            if (e === "frame")
                return window !== window.top
        }
        ;
        var Rr = navigator.userAgent.toLowerCase()
          , pa = fe.env.touch = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch
          , HE = fe.env.chrome = /chrome/.test(Rr) && /Google/.test(navigator.vendor) && parseInt(Rr.match(/chrome\/(\d+)\./)[1], 10)
          , WE = fe.env.ios = /(ipod|iphone|ipad)/.test(Rr);
        fe.env.safari = /safari/.test(Rr) && !HE && !WE;
        var Bn;
        pa && UE.on("touchstart mousedown", function(e) {
            Bn = e.target
        });
        fe.validClick = pa ? function(e) {
            return e === Bn || st.contains(e, Bn)
        }
        : function() {
            return !0
        }
        ;
        var ga = "resize.webflow orientationchange.webflow load.webflow"
          , zE = "scroll.webflow " + ga;
        fe.resize = zn(Ge, ga);
        fe.scroll = zn(Ge, zE);
        fe.redraw = zn();
        function zn(e, t) {
            var r = []
              , n = {};
            return n.up = Xe.throttle(function(i) {
                Xe.each(r, function(o) {
                    o(i)
                })
            }),
            e && t && e.on(t, n.up),
            n.on = function(i) {
                typeof i == "function" && (Xe.contains(r, i) || r.push(i))
            }
            ,
            n.off = function(i) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = Xe.filter(r, function(o) {
                    return o !== i
                })
            }
            ,
            n
        }
        fe.location = function(e) {
            window.location = e
        }
        ;
        fe.env() && (fe.location = function() {}
        );
        fe.ready = function() {
            Cr = !0,
            Wn ? KE() : Xe.each(At, ca),
            Xe.each(Hn, ca),
            fe.resize.up()
        }
        ;
        function ca(e) {
            Ke(e) && e()
        }
        function KE() {
            Wn = !1,
            Xe.each(bt, fa)
        }
        var ht;
        fe.load = function(e) {
            ht.then(e)
        }
        ;
        function ha() {
            ht && (ht.reject(),
            Ge.off("load", ht.resolve)),
            ht = new st.Deferred,
            Ge.on("load", ht.resolve)
        }
        fe.destroy = function(e) {
            e = e || {},
            Wn = !0,
            Ge.triggerHandler("__wf_destroy"),
            e.domready != null && (Cr = e.domready),
            Xe.each(bt, da),
            fe.resize.off(),
            fe.scroll.off(),
            fe.redraw.off(),
            At = [],
            Hn = [],
            ht.state() === "pending" && ha()
        }
        ;
        st(fe.ready);
        ha();
        Ea.exports = window.Webflow = fe
    }
    );
    var ma = f( (uF, va) => {
        "use strict";
        var ya = Ve();
        ya.define("brand", va.exports = function(e) {
            var t = {}, r = document, n = e("html"), i = e("body"), o = ".w-webflow-badge", a = window.location, s = /PhantomJS/i.test(navigator.userAgent), u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange", l;
            t.ready = function() {
                var h = n.attr("data-wf-status")
                  , T = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(T) && a.hostname !== T && (h = !0),
                h && !s && (l = l || p(),
                d(),
                setTimeout(d, 500),
                e(r).off(u, E).on(u, E))
            }
            ;
            function E() {
                var h = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(l).attr("style", h ? "display: none !important;" : "")
            }
            function p() {
                var h = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs")
                  , T = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                    marginRight: "4px",
                    width: "26px"
                })
                  , _ = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return h.append(T, _),
                h[0]
            }
            function d() {
                var h = i.children(o)
                  , T = h.length && h.get(0) === l
                  , _ = ya.env("editor");
                if (T) {
                    _ && h.remove();
                    return
                }
                h.length && h.remove(),
                _ || i.append(l)
            }
            return t
        }
        )
    }
    );
    var Ia = f( (cF, _a) => {
        "use strict";
        var Kn = Ve();
        Kn.define("edit", _a.exports = function(e, t, r) {
            if (r = r || {},
            (Kn.env("test") || Kn.env("frame")) && !r.fixture && !jE())
                return {
                    exit: 1
                };
            var n = {}, i = e(window), o = e(document.documentElement), a = document.location, s = "hashchange", u, l = r.load || d, E = !1;
            try {
                E = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            E ? l() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && l() : i.on(s, p).triggerHandler(s);
            function p() {
                u || /\?edit/.test(a.hash) && l()
            }
            function d() {
                u = !0,
                window.WebflowEditor = !0,
                i.off(s, p),
                x(function(C) {
                    e.ajax({
                        url: v("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: o.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: h(C)
                    })
                })
            }
            function h(C) {
                return function(L) {
                    if (!L) {
                        console.error("Could not load editor data");
                        return
                    }
                    L.thirdPartyCookiesSupported = C,
                    T(S(L.scriptPath), function() {
                        window.WebflowEditor(L)
                    })
                }
            }
            function T(C, L) {
                e.ajax({
                    type: "GET",
                    url: C,
                    dataType: "script",
                    cache: !0
                }).then(L, _)
            }
            function _(C, L, R) {
                throw console.error("Could not load editor script: " + L),
                R
            }
            function S(C) {
                return C.indexOf("//") >= 0 ? C : v("https://editor-api.webflow.com" + C)
            }
            function v(C) {
                return C.replace(/([^:])\/\//g, "$1/")
            }
            function x(C) {
                var L = window.document.createElement("iframe");
                L.src = "https://webflow.com/site/third-party-cookie-check.html",
                L.style.display = "none",
                L.sandbox = "allow-scripts allow-same-origin";
                var R = function(V) {
                    V.data === "WF_third_party_cookies_unsupported" ? (O(L, R),
                    C(!1)) : V.data === "WF_third_party_cookies_supported" && (O(L, R),
                    C(!0))
                };
                L.onerror = function() {
                    O(L, R),
                    C(!1)
                }
                ,
                window.addEventListener("message", R, !1),
                window.document.body.appendChild(L)
            }
            function O(C, L) {
                window.removeEventListener("message", L, !1),
                C.remove()
            }
            return n
        }
        );
        function jE() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    }
    );
    var ba = f( (lF, Ta) => {
        "use strict";
        var YE = Ve();
        YE.define("focus-visible", Ta.exports = function() {
            function e(r) {
                var n = !0
                  , i = !1
                  , o = null
                  , a = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };
                function s(O) {
                    return !!(O && O !== document && O.nodeName !== "HTML" && O.nodeName !== "BODY" && "classList"in O && "contains"in O.classList)
                }
                function u(O) {
                    var C = O.type
                      , L = O.tagName;
                    return !!(L === "INPUT" && a[C] && !O.readOnly || L === "TEXTAREA" && !O.readOnly || O.isContentEditable)
                }
                function l(O) {
                    O.getAttribute("data-wf-focus-visible") || O.setAttribute("data-wf-focus-visible", "true")
                }
                function E(O) {
                    O.getAttribute("data-wf-focus-visible") && O.removeAttribute("data-wf-focus-visible")
                }
                function p(O) {
                    O.metaKey || O.altKey || O.ctrlKey || (s(r.activeElement) && l(r.activeElement),
                    n = !0)
                }
                function d() {
                    n = !1
                }
                function h(O) {
                    s(O.target) && (n || u(O.target)) && l(O.target)
                }
                function T(O) {
                    s(O.target) && O.target.hasAttribute("data-wf-focus-visible") && (i = !0,
                    window.clearTimeout(o),
                    o = window.setTimeout(function() {
                        i = !1
                    }, 100),
                    E(O.target))
                }
                function _() {
                    document.visibilityState === "hidden" && (i && (n = !0),
                    S())
                }
                function S() {
                    document.addEventListener("mousemove", x),
                    document.addEventListener("mousedown", x),
                    document.addEventListener("mouseup", x),
                    document.addEventListener("pointermove", x),
                    document.addEventListener("pointerdown", x),
                    document.addEventListener("pointerup", x),
                    document.addEventListener("touchmove", x),
                    document.addEventListener("touchstart", x),
                    document.addEventListener("touchend", x)
                }
                function v() {
                    document.removeEventListener("mousemove", x),
                    document.removeEventListener("mousedown", x),
                    document.removeEventListener("mouseup", x),
                    document.removeEventListener("pointermove", x),
                    document.removeEventListener("pointerdown", x),
                    document.removeEventListener("pointerup", x),
                    document.removeEventListener("touchmove", x),
                    document.removeEventListener("touchstart", x),
                    document.removeEventListener("touchend", x)
                }
                function x(O) {
                    O.target.nodeName && O.target.nodeName.toLowerCase() === "html" || (n = !1,
                    v())
                }
                document.addEventListener("keydown", p, !0),
                document.addEventListener("mousedown", d, !0),
                document.addEventListener("pointerdown", d, !0),
                document.addEventListener("touchstart", d, !0),
                document.addEventListener("visibilitychange", _, !0),
                S(),
                r.addEventListener("focus", h, !0),
                r.addEventListener("blur", T, !0)
            }
            function t() {
                if (typeof document < "u")
                    try {
                        document.querySelector(":focus-visible")
                    } catch {
                        e(document)
                    }
            }
            return {
                ready: t
            }
        }
        )
    }
    );
    var Oa = f( (fF, Sa) => {
        "use strict";
        var Aa = Ve();
        Aa.define("focus", Sa.exports = function() {
            var e = []
              , t = !1;
            function r(a) {
                t && (a.preventDefault(),
                a.stopPropagation(),
                a.stopImmediatePropagation(),
                e.unshift(a))
            }
            function n(a) {
                var s = a.target
                  , u = s.tagName;
                return /^a$/i.test(u) && s.href != null || /^(button|textarea)$/i.test(u) && s.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && s.controls === !0
            }
            function i(a) {
                n(a) && (t = !0,
                setTimeout( () => {
                    for (t = !1,
                    a.target.focus(); e.length > 0; ) {
                        var s = e.pop();
                        s.target.dispatchEvent(new MouseEvent(s.type,s))
                    }
                }
                , 0))
            }
            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Aa.env.safari && (document.addEventListener("mousedown", i, !0),
                document.addEventListener("mouseup", r, !0),
                document.addEventListener("click", r, !0))
            }
            return {
                ready: o
            }
        }
        )
    }
    );
    var Ra = f( (dF, xa) => {
        "use strict";
        var jn = window.jQuery
          , je = {}
          , Lr = []
          , wa = ".w-ix"
          , Pr = {
            reset: function(e, t) {
                t.__wf_intro = null
            },
            intro: function(e, t) {
                t.__wf_intro || (t.__wf_intro = !0,
                jn(t).triggerHandler(je.types.INTRO))
            },
            outro: function(e, t) {
                t.__wf_intro && (t.__wf_intro = null,
                jn(t).triggerHandler(je.types.OUTRO))
            }
        };
        je.triggers = {};
        je.types = {
            INTRO: "w-ix-intro" + wa,
            OUTRO: "w-ix-outro" + wa
        };
        je.init = function() {
            for (var e = Lr.length, t = 0; t < e; t++) {
                var r = Lr[t];
                r[0](0, r[1])
            }
            Lr = [],
            jn.extend(je.triggers, Pr)
        }
        ;
        je.async = function() {
            for (var e in Pr) {
                var t = Pr[e];
                Pr.hasOwnProperty(e) && (je.triggers[e] = function(r, n) {
                    Lr.push([t, n])
                }
                )
            }
        }
        ;
        je.async();
        xa.exports = je
    }
    );
    var $n = f( (pF, Pa) => {
        "use strict";
        var Yn = Ra();
        function Ca(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null),
            e.dispatchEvent(r)
        }
        var $E = window.jQuery
          , Nr = {}
          , La = ".w-ix"
          , QE = {
            reset: function(e, t) {
                Yn.triggers.reset(e, t)
            },
            intro: function(e, t) {
                Yn.triggers.intro(e, t),
                Ca(t, "COMPONENT_ACTIVE")
            },
            outro: function(e, t) {
                Yn.triggers.outro(e, t),
                Ca(t, "COMPONENT_INACTIVE")
            }
        };
        Nr.triggers = {};
        Nr.types = {
            INTRO: "w-ix-intro" + La,
            OUTRO: "w-ix-outro" + La
        };
        $E.extend(Nr.triggers, QE);
        Pa.exports = Nr
    }
    );
    var Qn = f( (gF, Na) => {
        var ZE = typeof global == "object" && global && global.Object === Object && global;
        Na.exports = ZE
    }
    );
    var Ue = f( (hF, Da) => {
        var JE = Qn()
          , ey = typeof self == "object" && self && self.Object === Object && self
          , ty = JE || ey || Function("return this")();
        Da.exports = ty
    }
    );
    var St = f( (EF, Ma) => {
        var ry = Ue()
          , ny = ry.Symbol;
        Ma.exports = ny
    }
    );
    var Ga = f( (yF, Xa) => {
        var Fa = St()
          , qa = Object.prototype
          , iy = qa.hasOwnProperty
          , oy = qa.toString
          , Jt = Fa ? Fa.toStringTag : void 0;
        function ay(e) {
            var t = iy.call(e, Jt)
              , r = e[Jt];
            try {
                e[Jt] = void 0;
                var n = !0
            } catch {}
            var i = oy.call(e);
            return n && (t ? e[Jt] = r : delete e[Jt]),
            i
        }
        Xa.exports = ay
    }
    );
    var Ua = f( (vF, Va) => {
        var sy = Object.prototype
          , uy = sy.toString;
        function cy(e) {
            return uy.call(e)
        }
        Va.exports = cy
    }
    );
    var ut = f( (mF, Ha) => {
        var ka = St()
          , ly = Ga()
          , fy = Ua()
          , dy = "[object Null]"
          , py = "[object Undefined]"
          , Ba = ka ? ka.toStringTag : void 0;
        function gy(e) {
            return e == null ? e === void 0 ? py : dy : Ba && Ba in Object(e) ? ly(e) : fy(e)
        }
        Ha.exports = gy
    }
    );
    var Zn = f( (_F, Wa) => {
        function hy(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        Wa.exports = hy
    }
    );
    var Jn = f( (IF, za) => {
        var Ey = Zn()
          , yy = Ey(Object.getPrototypeOf, Object);
        za.exports = yy
    }
    );
    var rt = f( (TF, Ka) => {
        function vy(e) {
            return e != null && typeof e == "object"
        }
        Ka.exports = vy
    }
    );
    var ei = f( (bF, Ya) => {
        var my = ut()
          , _y = Jn()
          , Iy = rt()
          , Ty = "[object Object]"
          , by = Function.prototype
          , Ay = Object.prototype
          , ja = by.toString
          , Sy = Ay.hasOwnProperty
          , Oy = ja.call(Object);
        function wy(e) {
            if (!Iy(e) || my(e) != Ty)
                return !1;
            var t = _y(e);
            if (t === null)
                return !0;
            var r = Sy.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && ja.call(r) == Oy
        }
        Ya.exports = wy
    }
    );
    var $a = f(ti => {
        "use strict";
        Object.defineProperty(ti, "__esModule", {
            value: !0
        });
        ti.default = xy;
        function xy(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"),
            r.observable = t) : t = "@@observable",
            t
        }
    }
    );
    var Qa = f( (ni, ri) => {
        "use strict";
        Object.defineProperty(ni, "__esModule", {
            value: !0
        });
        var Ry = $a()
          , Cy = Ly(Ry);
        function Ly(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Ot;
        typeof self < "u" ? Ot = self : typeof window < "u" ? Ot = window : typeof global < "u" ? Ot = global : typeof ri < "u" ? Ot = ri : Ot = Function("return this")();
        var Py = (0,
        Cy.default)(Ot);
        ni.default = Py
    }
    );
    var ii = f(er => {
        "use strict";
        er.__esModule = !0;
        er.ActionTypes = void 0;
        er.default = ts;
        var Ny = ei()
          , Dy = es(Ny)
          , My = Qa()
          , Za = es(My);
        function es(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Ja = er.ActionTypes = {
            INIT: "@@redux/INIT"
        };
        function ts(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t,
            t = void 0),
            typeof r < "u") {
                if (typeof r != "function")
                    throw new Error("Expected the enhancer to be a function.");
                return r(ts)(e, t)
            }
            if (typeof e != "function")
                throw new Error("Expected the reducer to be a function.");
            var i = e
              , o = t
              , a = []
              , s = a
              , u = !1;
            function l() {
                s === a && (s = a.slice())
            }
            function E() {
                return o
            }
            function p(_) {
                if (typeof _ != "function")
                    throw new Error("Expected listener to be a function.");
                var S = !0;
                return l(),
                s.push(_),
                function() {
                    if (S) {
                        S = !1,
                        l();
                        var x = s.indexOf(_);
                        s.splice(x, 1)
                    }
                }
            }
            function d(_) {
                if (!(0,
                Dy.default)(_))
                    throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof _.type > "u")
                    throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (u)
                    throw new Error("Reducers may not dispatch actions.");
                try {
                    u = !0,
                    o = i(o, _)
                } finally {
                    u = !1
                }
                for (var S = a = s, v = 0; v < S.length; v++)
                    S[v]();
                return _
            }
            function h(_) {
                if (typeof _ != "function")
                    throw new Error("Expected the nextReducer to be a function.");
                i = _,
                d({
                    type: Ja.INIT
                })
            }
            function T() {
                var _, S = p;
                return _ = {
                    subscribe: function(x) {
                        if (typeof x != "object")
                            throw new TypeError("Expected the observer to be an object.");
                        function O() {
                            x.next && x.next(E())
                        }
                        O();
                        var C = S(O);
                        return {
                            unsubscribe: C
                        }
                    }
                },
                _[Za.default] = function() {
                    return this
                }
                ,
                _
            }
            return d({
                type: Ja.INIT
            }),
            n = {
                dispatch: d,
                subscribe: p,
                getState: E,
                replaceReducer: h
            },
            n[Za.default] = T,
            n
        }
    }
    );
    var ai = f(oi => {
        "use strict";
        oi.__esModule = !0;
        oi.default = Fy;
        function Fy(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    }
    );
    var is = f(si => {
        "use strict";
        si.__esModule = !0;
        si.default = Uy;
        var rs = ii()
          , qy = ei()
          , wF = ns(qy)
          , Xy = ai()
          , xF = ns(Xy);
        function ns(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function Gy(e, t) {
            var r = t && t.type
              , n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }
        function Vy(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t]
                  , n = r(void 0, {
                    type: rs.ActionTypes.INIT
                });
                if (typeof n > "u")
                    throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                    type: i
                }) > "u")
                    throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + rs.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }
        function Uy(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                typeof e[i] == "function" && (r[i] = e[i])
            }
            var o = Object.keys(r);
            if (!1)
                var a;
            var s;
            try {
                Vy(r)
            } catch (u) {
                s = u
            }
            return function() {
                var l = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0]
                  , E = arguments[1];
                if (s)
                    throw s;
                if (!1)
                    var p;
                for (var d = !1, h = {}, T = 0; T < o.length; T++) {
                    var _ = o[T]
                      , S = r[_]
                      , v = l[_]
                      , x = S(v, E);
                    if (typeof x > "u") {
                        var O = Gy(_, E);
                        throw new Error(O)
                    }
                    h[_] = x,
                    d = d || x !== v
                }
                return d ? h : l
            }
        }
    }
    );
    var as = f(ui => {
        "use strict";
        ui.__esModule = !0;
        ui.default = ky;
        function os(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }
        function ky(e, t) {
            if (typeof e == "function")
                return os(e, t);
            if (typeof e != "object" || e === null)
                throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
                var o = r[i]
                  , a = e[o];
                typeof a == "function" && (n[o] = os(a, t))
            }
            return n
        }
    }
    );
    var li = f(ci => {
        "use strict";
        ci.__esModule = !0;
        ci.default = By;
        function By() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            if (t.length === 0)
                return function(o) {
                    return o
                }
                ;
            if (t.length === 1)
                return t[0];
            var n = t[t.length - 1]
              , i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(o, a) {
                    return a(o)
                }, n.apply(void 0, arguments))
            }
        }
    }
    );
    var ss = f(fi => {
        "use strict";
        fi.__esModule = !0;
        var Hy = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }
        ;
        fi.default = jy;
        var Wy = li()
          , zy = Ky(Wy);
        function Ky(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function jy() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return function(n) {
                return function(i, o, a) {
                    var s = n(i, o, a)
                      , u = s.dispatch
                      , l = []
                      , E = {
                        getState: s.getState,
                        dispatch: function(d) {
                            return u(d)
                        }
                    };
                    return l = t.map(function(p) {
                        return p(E)
                    }),
                    u = zy.default.apply(void 0, l)(s.dispatch),
                    Hy({}, s, {
                        dispatch: u
                    })
                }
            }
        }
    }
    );
    var di = f(Me => {
        "use strict";
        Me.__esModule = !0;
        Me.compose = Me.applyMiddleware = Me.bindActionCreators = Me.combineReducers = Me.createStore = void 0;
        var Yy = ii()
          , $y = wt(Yy)
          , Qy = is()
          , Zy = wt(Qy)
          , Jy = as()
          , ev = wt(Jy)
          , tv = ss()
          , rv = wt(tv)
          , nv = li()
          , iv = wt(nv)
          , ov = ai()
          , NF = wt(ov);
        function wt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Me.createStore = $y.default;
        Me.combineReducers = Zy.default;
        Me.bindActionCreators = ev.default;
        Me.applyMiddleware = rv.default;
        Me.compose = iv.default
    }
    );
    var ke, pi, Ye, av, sv, Dr, uv, gi = Ee( () => {
        "use strict";
        ke = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        },
        pi = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        },
        Ye = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        },
        av = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        },
        sv = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        },
        Dr = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        },
        uv = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    }
    );
    var Le, cv, Mr = Ee( () => {
        "use strict";
        Le = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        },
        cv = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    }
    );
    var lv, us = Ee( () => {
        "use strict";
        lv = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    }
    );
    var fv, dv, pv, gv, hv, Ev, yv, hi, cs = Ee( () => {
        "use strict";
        Mr();
        ({TRANSFORM_MOVE: fv, TRANSFORM_SCALE: dv, TRANSFORM_ROTATE: pv, TRANSFORM_SKEW: gv, STYLE_SIZE: hv, STYLE_FILTER: Ev, STYLE_FONT_VARIATION: yv} = Le),
        hi = {
            [fv]: !0,
            [dv]: !0,
            [pv]: !0,
            [gv]: !0,
            [hv]: !0,
            [Ev]: !0,
            [yv]: !0
        }
    }
    );
    var Ie = {};
    Ce(Ie, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => Dv,
        IX2_ANIMATION_FRAME_CHANGED: () => xv,
        IX2_CLEAR_REQUESTED: () => Sv,
        IX2_ELEMENT_STATE_CHANGED: () => Nv,
        IX2_EVENT_LISTENER_ADDED: () => Ov,
        IX2_EVENT_STATE_CHANGED: () => wv,
        IX2_INSTANCE_ADDED: () => Cv,
        IX2_INSTANCE_REMOVED: () => Pv,
        IX2_INSTANCE_STARTED: () => Lv,
        IX2_MEDIA_QUERIES_DEFINED: () => Fv,
        IX2_PARAMETER_CHANGED: () => Rv,
        IX2_PLAYBACK_REQUESTED: () => bv,
        IX2_PREVIEW_REQUESTED: () => Tv,
        IX2_RAW_DATA_IMPORTED: () => vv,
        IX2_SESSION_INITIALIZED: () => mv,
        IX2_SESSION_STARTED: () => _v,
        IX2_SESSION_STOPPED: () => Iv,
        IX2_STOP_REQUESTED: () => Av,
        IX2_TEST_FRAME_RENDERED: () => qv,
        IX2_VIEWPORT_WIDTH_CHANGED: () => Mv
    });
    var vv, mv, _v, Iv, Tv, bv, Av, Sv, Ov, wv, xv, Rv, Cv, Lv, Pv, Nv, Dv, Mv, Fv, qv, ls = Ee( () => {
        "use strict";
        vv = "IX2_RAW_DATA_IMPORTED",
        mv = "IX2_SESSION_INITIALIZED",
        _v = "IX2_SESSION_STARTED",
        Iv = "IX2_SESSION_STOPPED",
        Tv = "IX2_PREVIEW_REQUESTED",
        bv = "IX2_PLAYBACK_REQUESTED",
        Av = "IX2_STOP_REQUESTED",
        Sv = "IX2_CLEAR_REQUESTED",
        Ov = "IX2_EVENT_LISTENER_ADDED",
        wv = "IX2_EVENT_STATE_CHANGED",
        xv = "IX2_ANIMATION_FRAME_CHANGED",
        Rv = "IX2_PARAMETER_CHANGED",
        Cv = "IX2_INSTANCE_ADDED",
        Lv = "IX2_INSTANCE_STARTED",
        Pv = "IX2_INSTANCE_REMOVED",
        Nv = "IX2_ELEMENT_STATE_CHANGED",
        Dv = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        Mv = "IX2_VIEWPORT_WIDTH_CHANGED",
        Fv = "IX2_MEDIA_QUERIES_DEFINED",
        qv = "IX2_TEST_FRAME_RENDERED"
    }
    );
    var Ae = {};
    Ce(Ae, {
        ABSTRACT_NODE: () => Mm,
        AUTO: () => Am,
        BACKGROUND: () => vm,
        BACKGROUND_COLOR: () => ym,
        BAR_DELIMITER: () => wm,
        BORDER_COLOR: () => mm,
        BOUNDARY_SELECTOR: () => kv,
        CHILDREN: () => xm,
        COLON_DELIMITER: () => Om,
        COLOR: () => _m,
        COMMA_DELIMITER: () => Sm,
        CONFIG_UNIT: () => $v,
        CONFIG_VALUE: () => zv,
        CONFIG_X_UNIT: () => Kv,
        CONFIG_X_VALUE: () => Bv,
        CONFIG_Y_UNIT: () => jv,
        CONFIG_Y_VALUE: () => Hv,
        CONFIG_Z_UNIT: () => Yv,
        CONFIG_Z_VALUE: () => Wv,
        DISPLAY: () => Im,
        FILTER: () => pm,
        FLEX: () => Tm,
        FONT_VARIATION_SETTINGS: () => gm,
        HEIGHT: () => Em,
        HTML_ELEMENT: () => Nm,
        IMMEDIATE_CHILDREN: () => Rm,
        IX2_ID_DELIMITER: () => Xv,
        OPACITY: () => dm,
        PARENT: () => Lm,
        PLAIN_OBJECT: () => Dm,
        PRESERVE_3D: () => Pm,
        RENDER_GENERAL: () => qm,
        RENDER_PLUGIN: () => Gm,
        RENDER_STYLE: () => Xm,
        RENDER_TRANSFORM: () => Fm,
        ROTATE_X: () => am,
        ROTATE_Y: () => sm,
        ROTATE_Z: () => um,
        SCALE_3D: () => om,
        SCALE_X: () => rm,
        SCALE_Y: () => nm,
        SCALE_Z: () => im,
        SIBLINGS: () => Cm,
        SKEW: () => cm,
        SKEW_X: () => lm,
        SKEW_Y: () => fm,
        TRANSFORM: () => Qv,
        TRANSLATE_3D: () => tm,
        TRANSLATE_X: () => Zv,
        TRANSLATE_Y: () => Jv,
        TRANSLATE_Z: () => em,
        WF_PAGE: () => Gv,
        WIDTH: () => hm,
        WILL_CHANGE: () => bm,
        W_MOD_IX: () => Uv,
        W_MOD_JS: () => Vv
    });
    var Xv, Gv, Vv, Uv, kv, Bv, Hv, Wv, zv, Kv, jv, Yv, $v, Qv, Zv, Jv, em, tm, rm, nm, im, om, am, sm, um, cm, lm, fm, dm, pm, gm, hm, Em, ym, vm, mm, _m, Im, Tm, bm, Am, Sm, Om, wm, xm, Rm, Cm, Lm, Pm, Nm, Dm, Mm, Fm, qm, Xm, Gm, fs = Ee( () => {
        "use strict";
        Xv = "|",
        Gv = "data-wf-page",
        Vv = "w-mod-js",
        Uv = "w-mod-ix",
        kv = ".w-dyn-item",
        Bv = "xValue",
        Hv = "yValue",
        Wv = "zValue",
        zv = "value",
        Kv = "xUnit",
        jv = "yUnit",
        Yv = "zUnit",
        $v = "unit",
        Qv = "transform",
        Zv = "translateX",
        Jv = "translateY",
        em = "translateZ",
        tm = "translate3d",
        rm = "scaleX",
        nm = "scaleY",
        im = "scaleZ",
        om = "scale3d",
        am = "rotateX",
        sm = "rotateY",
        um = "rotateZ",
        cm = "skew",
        lm = "skewX",
        fm = "skewY",
        dm = "opacity",
        pm = "filter",
        gm = "font-variation-settings",
        hm = "width",
        Em = "height",
        ym = "backgroundColor",
        vm = "background",
        mm = "borderColor",
        _m = "color",
        Im = "display",
        Tm = "flex",
        bm = "willChange",
        Am = "AUTO",
        Sm = ",",
        Om = ":",
        wm = "|",
        xm = "CHILDREN",
        Rm = "IMMEDIATE_CHILDREN",
        Cm = "SIBLINGS",
        Lm = "PARENT",
        Pm = "preserve-3d",
        Nm = "HTML_ELEMENT",
        Dm = "PLAIN_OBJECT",
        Mm = "ABSTRACT_NODE",
        Fm = "RENDER_TRANSFORM",
        qm = "RENDER_GENERAL",
        Xm = "RENDER_STYLE",
        Gm = "RENDER_PLUGIN"
    }
    );
    var ds = {};
    Ce(ds, {
        ActionAppliesTo: () => cv,
        ActionTypeConsts: () => Le,
        EventAppliesTo: () => pi,
        EventBasedOn: () => Ye,
        EventContinuousMouseAxes: () => av,
        EventLimitAffectedElements: () => sv,
        EventTypeConsts: () => ke,
        IX2EngineActionTypes: () => Ie,
        IX2EngineConstants: () => Ae,
        InteractionTypeConsts: () => lv,
        QuickEffectDirectionConsts: () => uv,
        QuickEffectIds: () => Dr,
        ReducedMotionTypes: () => hi
    });
    var Pe = Ee( () => {
        "use strict";
        gi();
        Mr();
        us();
        cs();
        ls();
        fs();
        Mr();
        gi()
    }
    );
    var Vm, ps, gs = Ee( () => {
        "use strict";
        Pe();
        ({IX2_RAW_DATA_IMPORTED: Vm} = Ie),
        ps = (e=Object.freeze({}), t) => {
            switch (t.type) {
            case Vm:
                return t.payload.ixData || Object.freeze({});
            default:
                return e
            }
        }
    }
    );
    var xt = f(ve => {
        "use strict";
        Object.defineProperty(ve, "__esModule", {
            value: !0
        });
        var Um = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        ve.clone = qr;
        ve.addLast = ys;
        ve.addFirst = vs;
        ve.removeLast = ms;
        ve.removeFirst = _s;
        ve.insert = Is;
        ve.removeAt = Ts;
        ve.replaceAt = bs;
        ve.getIn = Xr;
        ve.set = Gr;
        ve.setIn = Vr;
        ve.update = Ss;
        ve.updateIn = Os;
        ve.merge = ws;
        ve.mergeDeep = xs;
        ve.mergeIn = Rs;
        ve.omit = Cs;
        ve.addDefaults = Ls;
        var hs = "INVALID_ARGS";
        function Es(e) {
            throw new Error(e)
        }
        function Ei(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var km = {}.hasOwnProperty;
        function qr(e) {
            if (Array.isArray(e))
                return e.slice();
            for (var t = Ei(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                r[i] = e[i]
            }
            return r
        }
        function Ne(e, t, r) {
            var n = r;
            n == null && Es(hs);
            for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++)
                a[s - 3] = arguments[s];
            for (var u = 0; u < a.length; u++) {
                var l = a[u];
                if (l != null) {
                    var E = Ei(l);
                    if (E.length)
                        for (var p = 0; p <= E.length; p++) {
                            var d = E[p];
                            if (!(e && n[d] !== void 0)) {
                                var h = l[d];
                                t && Fr(n[d]) && Fr(h) && (h = Ne(e, t, n[d], h)),
                                !(h === void 0 || h === n[d]) && (i || (i = !0,
                                n = qr(n)),
                                n[d] = h)
                            }
                        }
                }
            }
            return n
        }
        function Fr(e) {
            var t = typeof e > "u" ? "undefined" : Um(e);
            return e != null && (t === "object" || t === "function")
        }
        function ys(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }
        function vs(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }
        function ms(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }
        function _s(e) {
            return e.length ? e.slice(1) : e
        }
        function Is(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }
        function Ts(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }
        function bs(e, t, r) {
            if (e[t] === r)
                return e;
            for (var n = e.length, i = Array(n), o = 0; o < n; o++)
                i[o] = e[o];
            return i[t] = r,
            i
        }
        function Xr(e, t) {
            if (!Array.isArray(t) && Es(hs),
            e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (r = r?.[i],
                    r === void 0)
                        return r
                }
                return r
            }
        }
        function Gr(e, t, r) {
            var n = typeof t == "number" ? [] : {}
              , i = e ?? n;
            if (i[t] === r)
                return i;
            var o = qr(i);
            return o[t] = r,
            o
        }
        function As(e, t, r, n) {
            var i = void 0
              , o = t[n];
            if (n === t.length - 1)
                i = r;
            else {
                var a = Fr(e) && Fr(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
                i = As(a, t, r, n + 1)
            }
            return Gr(e, o, i)
        }
        function Vr(e, t, r) {
            return t.length ? As(e, t, r, 0) : r
        }
        function Ss(e, t, r) {
            var n = e?.[t]
              , i = r(n);
            return Gr(e, t, i)
        }
        function Os(e, t, r) {
            var n = Xr(e, t)
              , i = r(n);
            return Vr(e, t, i)
        }
        function ws(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
                s[u - 6] = arguments[u];
            return s.length ? Ne.call.apply(Ne, [null, !1, !1, e, t, r, n, i, o].concat(s)) : Ne(!1, !1, e, t, r, n, i, o)
        }
        function xs(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
                s[u - 6] = arguments[u];
            return s.length ? Ne.call.apply(Ne, [null, !1, !0, e, t, r, n, i, o].concat(s)) : Ne(!1, !0, e, t, r, n, i, o)
        }
        function Rs(e, t, r, n, i, o, a) {
            var s = Xr(e, t);
            s == null && (s = {});
            for (var u = void 0, l = arguments.length, E = Array(l > 7 ? l - 7 : 0), p = 7; p < l; p++)
                E[p - 7] = arguments[p];
            return E.length ? u = Ne.call.apply(Ne, [null, !1, !1, s, r, n, i, o, a].concat(E)) : u = Ne(!1, !1, s, r, n, i, o, a),
            Vr(e, t, u)
        }
        function Cs(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
                if (km.call(e, r[i])) {
                    n = !0;
                    break
                }
            if (!n)
                return e;
            for (var o = {}, a = Ei(e), s = 0; s < a.length; s++) {
                var u = a[s];
                r.indexOf(u) >= 0 || (o[u] = e[u])
            }
            return o
        }
        function Ls(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
                s[u - 6] = arguments[u];
            return s.length ? Ne.call.apply(Ne, [null, !0, !1, e, t, r, n, i, o].concat(s)) : Ne(!0, !1, e, t, r, n, i, o)
        }
        var Bm = {
            clone: qr,
            addLast: ys,
            addFirst: vs,
            removeLast: ms,
            removeFirst: _s,
            insert: Is,
            removeAt: Ts,
            replaceAt: bs,
            getIn: Xr,
            set: Gr,
            setIn: Vr,
            update: Ss,
            updateIn: Os,
            merge: ws,
            mergeDeep: xs,
            mergeIn: Rs,
            omit: Cs,
            addDefaults: Ls
        };
        ve.default = Bm
    }
    );
    var Ns, Hm, Wm, zm, Km, jm, Ps, Ds, Ms = Ee( () => {
        "use strict";
        Pe();
        Ns = ue(xt()),
        {IX2_PREVIEW_REQUESTED: Hm, IX2_PLAYBACK_REQUESTED: Wm, IX2_STOP_REQUESTED: zm, IX2_CLEAR_REQUESTED: Km} = Ie,
        jm = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        },
        Ps = Object.create(null, {
            [Hm]: {
                value: "preview"
            },
            [Wm]: {
                value: "playback"
            },
            [zm]: {
                value: "stop"
            },
            [Km]: {
                value: "clear"
            }
        }),
        Ds = (e=jm, t) => {
            if (t.type in Ps) {
                let r = [Ps[t.type]];
                return (0,
                Ns.setIn)(e, [r], {
                    ...t.payload
                })
            }
            return e
        }
    }
    );
    var we, Ym, $m, Qm, Zm, Jm, e_, t_, r_, n_, i_, Fs, o_, qs, Xs = Ee( () => {
        "use strict";
        Pe();
        we = ue(xt()),
        {IX2_SESSION_INITIALIZED: Ym, IX2_SESSION_STARTED: $m, IX2_TEST_FRAME_RENDERED: Qm, IX2_SESSION_STOPPED: Zm, IX2_EVENT_LISTENER_ADDED: Jm, IX2_EVENT_STATE_CHANGED: e_, IX2_ANIMATION_FRAME_CHANGED: t_, IX2_ACTION_LIST_PLAYBACK_CHANGED: r_, IX2_VIEWPORT_WIDTH_CHANGED: n_, IX2_MEDIA_QUERIES_DEFINED: i_} = Ie,
        Fs = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        },
        o_ = 20,
        qs = (e=Fs, t) => {
            switch (t.type) {
            case Ym:
                {
                    let {hasBoundaryNodes: r, reducedMotion: n} = t.payload;
                    return (0,
                    we.merge)(e, {
                        hasBoundaryNodes: r,
                        reducedMotion: n
                    })
                }
            case $m:
                return (0,
                we.set)(e, "active", !0);
            case Qm:
                {
                    let {payload: {step: r=o_}} = t;
                    return (0,
                    we.set)(e, "tick", e.tick + r)
                }
            case Zm:
                return Fs;
            case t_:
                {
                    let {payload: {now: r}} = t;
                    return (0,
                    we.set)(e, "tick", r)
                }
            case Jm:
                {
                    let r = (0,
                    we.addLast)(e.eventListeners, t.payload);
                    return (0,
                    we.set)(e, "eventListeners", r)
                }
            case e_:
                {
                    let {stateKey: r, newState: n} = t.payload;
                    return (0,
                    we.setIn)(e, ["eventState", r], n)
                }
            case r_:
                {
                    let {actionListId: r, isPlaying: n} = t.payload;
                    return (0,
                    we.setIn)(e, ["playbackState", r], n)
                }
            case n_:
                {
                    let {width: r, mediaQueries: n} = t.payload
                      , i = n.length
                      , o = null;
                    for (let a = 0; a < i; a++) {
                        let {key: s, min: u, max: l} = n[a];
                        if (r >= u && r <= l) {
                            o = s;
                            break
                        }
                    }
                    return (0,
                    we.merge)(e, {
                        viewportWidth: r,
                        mediaQueryKey: o
                    })
                }
            case i_:
                return (0,
                we.set)(e, "hasDefinedMediaQueries", !0);
            default:
                return e
            }
        }
    }
    );
    var Vs = f( (JF, Gs) => {
        function a_() {
            this.__data__ = [],
            this.size = 0
        }
        Gs.exports = a_
    }
    );
    var Ur = f( (e2, Us) => {
        function s_(e, t) {
            return e === t || e !== e && t !== t
        }
        Us.exports = s_
    }
    );
    var tr = f( (t2, ks) => {
        var u_ = Ur();
        function c_(e, t) {
            for (var r = e.length; r--; )
                if (u_(e[r][0], t))
                    return r;
            return -1
        }
        ks.exports = c_
    }
    );
    var Hs = f( (r2, Bs) => {
        var l_ = tr()
          , f_ = Array.prototype
          , d_ = f_.splice;
        function p_(e) {
            var t = this.__data__
              , r = l_(t, e);
            if (r < 0)
                return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : d_.call(t, r, 1),
            --this.size,
            !0
        }
        Bs.exports = p_
    }
    );
    var zs = f( (n2, Ws) => {
        var g_ = tr();
        function h_(e) {
            var t = this.__data__
              , r = g_(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        Ws.exports = h_
    }
    );
    var js = f( (i2, Ks) => {
        var E_ = tr();
        function y_(e) {
            return E_(this.__data__, e) > -1
        }
        Ks.exports = y_
    }
    );
    var $s = f( (o2, Ys) => {
        var v_ = tr();
        function m_(e, t) {
            var r = this.__data__
              , n = v_(r, e);
            return n < 0 ? (++this.size,
            r.push([e, t])) : r[n][1] = t,
            this
        }
        Ys.exports = m_
    }
    );
    var rr = f( (a2, Qs) => {
        var __ = Vs()
          , I_ = Hs()
          , T_ = zs()
          , b_ = js()
          , A_ = $s();
        function Rt(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Rt.prototype.clear = __;
        Rt.prototype.delete = I_;
        Rt.prototype.get = T_;
        Rt.prototype.has = b_;
        Rt.prototype.set = A_;
        Qs.exports = Rt
    }
    );
    var Js = f( (s2, Zs) => {
        var S_ = rr();
        function O_() {
            this.__data__ = new S_,
            this.size = 0
        }
        Zs.exports = O_
    }
    );
    var tu = f( (u2, eu) => {
        function w_(e) {
            var t = this.__data__
              , r = t.delete(e);
            return this.size = t.size,
            r
        }
        eu.exports = w_
    }
    );
    var nu = f( (c2, ru) => {
        function x_(e) {
            return this.__data__.get(e)
        }
        ru.exports = x_
    }
    );
    var ou = f( (l2, iu) => {
        function R_(e) {
            return this.__data__.has(e)
        }
        iu.exports = R_
    }
    );
    var $e = f( (f2, au) => {
        function C_(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        au.exports = C_
    }
    );
    var yi = f( (d2, su) => {
        var L_ = ut()
          , P_ = $e()
          , N_ = "[object AsyncFunction]"
          , D_ = "[object Function]"
          , M_ = "[object GeneratorFunction]"
          , F_ = "[object Proxy]";
        function q_(e) {
            if (!P_(e))
                return !1;
            var t = L_(e);
            return t == D_ || t == M_ || t == N_ || t == F_
        }
        su.exports = q_
    }
    );
    var cu = f( (p2, uu) => {
        var X_ = Ue()
          , G_ = X_["__core-js_shared__"];
        uu.exports = G_
    }
    );
    var du = f( (g2, fu) => {
        var vi = cu()
          , lu = function() {
            var e = /[^.]+$/.exec(vi && vi.keys && vi.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();
        function V_(e) {
            return !!lu && lu in e
        }
        fu.exports = V_
    }
    );
    var mi = f( (h2, pu) => {
        var U_ = Function.prototype
          , k_ = U_.toString;
        function B_(e) {
            if (e != null) {
                try {
                    return k_.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        pu.exports = B_
    }
    );
    var hu = f( (E2, gu) => {
        var H_ = yi()
          , W_ = du()
          , z_ = $e()
          , K_ = mi()
          , j_ = /[\\^$.*+?()[\]{}|]/g
          , Y_ = /^\[object .+?Constructor\]$/
          , $_ = Function.prototype
          , Q_ = Object.prototype
          , Z_ = $_.toString
          , J_ = Q_.hasOwnProperty
          , eI = RegExp("^" + Z_.call(J_).replace(j_, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        function tI(e) {
            if (!z_(e) || W_(e))
                return !1;
            var t = H_(e) ? eI : Y_;
            return t.test(K_(e))
        }
        gu.exports = tI
    }
    );
    var yu = f( (y2, Eu) => {
        function rI(e, t) {
            return e?.[t]
        }
        Eu.exports = rI
    }
    );
    var ct = f( (v2, vu) => {
        var nI = hu()
          , iI = yu();
        function oI(e, t) {
            var r = iI(e, t);
            return nI(r) ? r : void 0
        }
        vu.exports = oI
    }
    );
    var kr = f( (m2, mu) => {
        var aI = ct()
          , sI = Ue()
          , uI = aI(sI, "Map");
        mu.exports = uI
    }
    );
    var nr = f( (_2, _u) => {
        var cI = ct()
          , lI = cI(Object, "create");
        _u.exports = lI
    }
    );
    var bu = f( (I2, Tu) => {
        var Iu = nr();
        function fI() {
            this.__data__ = Iu ? Iu(null) : {},
            this.size = 0
        }
        Tu.exports = fI
    }
    );
    var Su = f( (T2, Au) => {
        function dI(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0,
            t
        }
        Au.exports = dI
    }
    );
    var wu = f( (b2, Ou) => {
        var pI = nr()
          , gI = "__lodash_hash_undefined__"
          , hI = Object.prototype
          , EI = hI.hasOwnProperty;
        function yI(e) {
            var t = this.__data__;
            if (pI) {
                var r = t[e];
                return r === gI ? void 0 : r
            }
            return EI.call(t, e) ? t[e] : void 0
        }
        Ou.exports = yI
    }
    );
    var Ru = f( (A2, xu) => {
        var vI = nr()
          , mI = Object.prototype
          , _I = mI.hasOwnProperty;
        function II(e) {
            var t = this.__data__;
            return vI ? t[e] !== void 0 : _I.call(t, e)
        }
        xu.exports = II
    }
    );
    var Lu = f( (S2, Cu) => {
        var TI = nr()
          , bI = "__lodash_hash_undefined__";
        function AI(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1,
            r[e] = TI && t === void 0 ? bI : t,
            this
        }
        Cu.exports = AI
    }
    );
    var Nu = f( (O2, Pu) => {
        var SI = bu()
          , OI = Su()
          , wI = wu()
          , xI = Ru()
          , RI = Lu();
        function Ct(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Ct.prototype.clear = SI;
        Ct.prototype.delete = OI;
        Ct.prototype.get = wI;
        Ct.prototype.has = xI;
        Ct.prototype.set = RI;
        Pu.exports = Ct
    }
    );
    var Fu = f( (w2, Mu) => {
        var Du = Nu()
          , CI = rr()
          , LI = kr();
        function PI() {
            this.size = 0,
            this.__data__ = {
                hash: new Du,
                map: new (LI || CI),
                string: new Du
            }
        }
        Mu.exports = PI
    }
    );
    var Xu = f( (x2, qu) => {
        function NI(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        qu.exports = NI
    }
    );
    var ir = f( (R2, Gu) => {
        var DI = Xu();
        function MI(e, t) {
            var r = e.__data__;
            return DI(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        Gu.exports = MI
    }
    );
    var Uu = f( (C2, Vu) => {
        var FI = ir();
        function qI(e) {
            var t = FI(this, e).delete(e);
            return this.size -= t ? 1 : 0,
            t
        }
        Vu.exports = qI
    }
    );
    var Bu = f( (L2, ku) => {
        var XI = ir();
        function GI(e) {
            return XI(this, e).get(e)
        }
        ku.exports = GI
    }
    );
    var Wu = f( (P2, Hu) => {
        var VI = ir();
        function UI(e) {
            return VI(this, e).has(e)
        }
        Hu.exports = UI
    }
    );
    var Ku = f( (N2, zu) => {
        var kI = ir();
        function BI(e, t) {
            var r = kI(this, e)
              , n = r.size;
            return r.set(e, t),
            this.size += r.size == n ? 0 : 1,
            this
        }
        zu.exports = BI
    }
    );
    var Br = f( (D2, ju) => {
        var HI = Fu()
          , WI = Uu()
          , zI = Bu()
          , KI = Wu()
          , jI = Ku();
        function Lt(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Lt.prototype.clear = HI;
        Lt.prototype.delete = WI;
        Lt.prototype.get = zI;
        Lt.prototype.has = KI;
        Lt.prototype.set = jI;
        ju.exports = Lt
    }
    );
    var $u = f( (M2, Yu) => {
        var YI = rr()
          , $I = kr()
          , QI = Br()
          , ZI = 200;
        function JI(e, t) {
            var r = this.__data__;
            if (r instanceof YI) {
                var n = r.__data__;
                if (!$I || n.length < ZI - 1)
                    return n.push([e, t]),
                    this.size = ++r.size,
                    this;
                r = this.__data__ = new QI(n)
            }
            return r.set(e, t),
            this.size = r.size,
            this
        }
        Yu.exports = JI
    }
    );
    var _i = f( (F2, Qu) => {
        var eT = rr()
          , tT = Js()
          , rT = tu()
          , nT = nu()
          , iT = ou()
          , oT = $u();
        function Pt(e) {
            var t = this.__data__ = new eT(e);
            this.size = t.size
        }
        Pt.prototype.clear = tT;
        Pt.prototype.delete = rT;
        Pt.prototype.get = nT;
        Pt.prototype.has = iT;
        Pt.prototype.set = oT;
        Qu.exports = Pt
    }
    );
    var Ju = f( (q2, Zu) => {
        var aT = "__lodash_hash_undefined__";
        function sT(e) {
            return this.__data__.set(e, aT),
            this
        }
        Zu.exports = sT
    }
    );
    var tc = f( (X2, ec) => {
        function uT(e) {
            return this.__data__.has(e)
        }
        ec.exports = uT
    }
    );
    var nc = f( (G2, rc) => {
        var cT = Br()
          , lT = Ju()
          , fT = tc();
        function Hr(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.__data__ = new cT; ++t < r; )
                this.add(e[t])
        }
        Hr.prototype.add = Hr.prototype.push = lT;
        Hr.prototype.has = fT;
        rc.exports = Hr
    }
    );
    var oc = f( (V2, ic) => {
        function dT(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
                if (t(e[r], r, e))
                    return !0;
            return !1
        }
        ic.exports = dT
    }
    );
    var sc = f( (U2, ac) => {
        function pT(e, t) {
            return e.has(t)
        }
        ac.exports = pT
    }
    );
    var Ii = f( (k2, uc) => {
        var gT = nc()
          , hT = oc()
          , ET = sc()
          , yT = 1
          , vT = 2;
        function mT(e, t, r, n, i, o) {
            var a = r & yT
              , s = e.length
              , u = t.length;
            if (s != u && !(a && u > s))
                return !1;
            var l = o.get(e)
              , E = o.get(t);
            if (l && E)
                return l == t && E == e;
            var p = -1
              , d = !0
              , h = r & vT ? new gT : void 0;
            for (o.set(e, t),
            o.set(t, e); ++p < s; ) {
                var T = e[p]
                  , _ = t[p];
                if (n)
                    var S = a ? n(_, T, p, t, e, o) : n(T, _, p, e, t, o);
                if (S !== void 0) {
                    if (S)
                        continue;
                    d = !1;
                    break
                }
                if (h) {
                    if (!hT(t, function(v, x) {
                        if (!ET(h, x) && (T === v || i(T, v, r, n, o)))
                            return h.push(x)
                    })) {
                        d = !1;
                        break
                    }
                } else if (!(T === _ || i(T, _, r, n, o))) {
                    d = !1;
                    break
                }
            }
            return o.delete(e),
            o.delete(t),
            d
        }
        uc.exports = mT
    }
    );
    var lc = f( (B2, cc) => {
        var _T = Ue()
          , IT = _T.Uint8Array;
        cc.exports = IT
    }
    );
    var dc = f( (H2, fc) => {
        function TT(e) {
            var t = -1
              , r = Array(e.size);
            return e.forEach(function(n, i) {
                r[++t] = [i, n]
            }),
            r
        }
        fc.exports = TT
    }
    );
    var gc = f( (W2, pc) => {
        function bT(e) {
            var t = -1
              , r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }),
            r
        }
        pc.exports = bT
    }
    );
    var mc = f( (z2, vc) => {
        var hc = St()
          , Ec = lc()
          , AT = Ur()
          , ST = Ii()
          , OT = dc()
          , wT = gc()
          , xT = 1
          , RT = 2
          , CT = "[object Boolean]"
          , LT = "[object Date]"
          , PT = "[object Error]"
          , NT = "[object Map]"
          , DT = "[object Number]"
          , MT = "[object RegExp]"
          , FT = "[object Set]"
          , qT = "[object String]"
          , XT = "[object Symbol]"
          , GT = "[object ArrayBuffer]"
          , VT = "[object DataView]"
          , yc = hc ? hc.prototype : void 0
          , Ti = yc ? yc.valueOf : void 0;
        function UT(e, t, r, n, i, o, a) {
            switch (r) {
            case VT:
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                    return !1;
                e = e.buffer,
                t = t.buffer;
            case GT:
                return !(e.byteLength != t.byteLength || !o(new Ec(e), new Ec(t)));
            case CT:
            case LT:
            case DT:
                return AT(+e, +t);
            case PT:
                return e.name == t.name && e.message == t.message;
            case MT:
            case qT:
                return e == t + "";
            case NT:
                var s = OT;
            case FT:
                var u = n & xT;
                if (s || (s = wT),
                e.size != t.size && !u)
                    return !1;
                var l = a.get(e);
                if (l)
                    return l == t;
                n |= RT,
                a.set(e, t);
                var E = ST(s(e), s(t), n, i, o, a);
                return a.delete(e),
                E;
            case XT:
                if (Ti)
                    return Ti.call(e) == Ti.call(t)
            }
            return !1
        }
        vc.exports = UT
    }
    );
    var Wr = f( (K2, _c) => {
        function kT(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n; )
                e[i + r] = t[r];
            return e
        }
        _c.exports = kT
    }
    );
    var Te = f( (j2, Ic) => {
        var BT = Array.isArray;
        Ic.exports = BT
    }
    );
    var bi = f( (Y2, Tc) => {
        var HT = Wr()
          , WT = Te();
        function zT(e, t, r) {
            var n = t(e);
            return WT(e) ? n : HT(n, r(e))
        }
        Tc.exports = zT
    }
    );
    var Ac = f( ($2, bc) => {
        function KT(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
                var a = e[r];
                t(a, r, e) && (o[i++] = a)
            }
            return o
        }
        bc.exports = KT
    }
    );
    var Ai = f( (Q2, Sc) => {
        function jT() {
            return []
        }
        Sc.exports = jT
    }
    );
    var Si = f( (Z2, wc) => {
        var YT = Ac()
          , $T = Ai()
          , QT = Object.prototype
          , ZT = QT.propertyIsEnumerable
          , Oc = Object.getOwnPropertySymbols
          , JT = Oc ? function(e) {
            return e == null ? [] : (e = Object(e),
            YT(Oc(e), function(t) {
                return ZT.call(e, t)
            }))
        }
        : $T;
        wc.exports = JT
    }
    );
    var Rc = f( (J2, xc) => {
        function eb(e, t) {
            for (var r = -1, n = Array(e); ++r < e; )
                n[r] = t(r);
            return n
        }
        xc.exports = eb
    }
    );
    var Lc = f( (eq, Cc) => {
        var tb = ut()
          , rb = rt()
          , nb = "[object Arguments]";
        function ib(e) {
            return rb(e) && tb(e) == nb
        }
        Cc.exports = ib
    }
    );
    var or = f( (tq, Dc) => {
        var Pc = Lc()
          , ob = rt()
          , Nc = Object.prototype
          , ab = Nc.hasOwnProperty
          , sb = Nc.propertyIsEnumerable
          , ub = Pc(function() {
            return arguments
        }()) ? Pc : function(e) {
            return ob(e) && ab.call(e, "callee") && !sb.call(e, "callee")
        }
        ;
        Dc.exports = ub
    }
    );
    var Fc = f( (rq, Mc) => {
        function cb() {
            return !1
        }
        Mc.exports = cb
    }
    );
    var zr = f( (ar, Nt) => {
        var lb = Ue()
          , fb = Fc()
          , Gc = typeof ar == "object" && ar && !ar.nodeType && ar
          , qc = Gc && typeof Nt == "object" && Nt && !Nt.nodeType && Nt
          , db = qc && qc.exports === Gc
          , Xc = db ? lb.Buffer : void 0
          , pb = Xc ? Xc.isBuffer : void 0
          , gb = pb || fb;
        Nt.exports = gb
    }
    );
    var Kr = f( (nq, Vc) => {
        var hb = 9007199254740991
          , Eb = /^(?:0|[1-9]\d*)$/;
        function yb(e, t) {
            var r = typeof e;
            return t = t ?? hb,
            !!t && (r == "number" || r != "symbol" && Eb.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        Vc.exports = yb
    }
    );
    var jr = f( (iq, Uc) => {
        var vb = 9007199254740991;
        function mb(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= vb
        }
        Uc.exports = mb
    }
    );
    var Bc = f( (oq, kc) => {
        var _b = ut()
          , Ib = jr()
          , Tb = rt()
          , bb = "[object Arguments]"
          , Ab = "[object Array]"
          , Sb = "[object Boolean]"
          , Ob = "[object Date]"
          , wb = "[object Error]"
          , xb = "[object Function]"
          , Rb = "[object Map]"
          , Cb = "[object Number]"
          , Lb = "[object Object]"
          , Pb = "[object RegExp]"
          , Nb = "[object Set]"
          , Db = "[object String]"
          , Mb = "[object WeakMap]"
          , Fb = "[object ArrayBuffer]"
          , qb = "[object DataView]"
          , Xb = "[object Float32Array]"
          , Gb = "[object Float64Array]"
          , Vb = "[object Int8Array]"
          , Ub = "[object Int16Array]"
          , kb = "[object Int32Array]"
          , Bb = "[object Uint8Array]"
          , Hb = "[object Uint8ClampedArray]"
          , Wb = "[object Uint16Array]"
          , zb = "[object Uint32Array]"
          , he = {};
        he[Xb] = he[Gb] = he[Vb] = he[Ub] = he[kb] = he[Bb] = he[Hb] = he[Wb] = he[zb] = !0;
        he[bb] = he[Ab] = he[Fb] = he[Sb] = he[qb] = he[Ob] = he[wb] = he[xb] = he[Rb] = he[Cb] = he[Lb] = he[Pb] = he[Nb] = he[Db] = he[Mb] = !1;
        function Kb(e) {
            return Tb(e) && Ib(e.length) && !!he[_b(e)]
        }
        kc.exports = Kb
    }
    );
    var Wc = f( (aq, Hc) => {
        function jb(e) {
            return function(t) {
                return e(t)
            }
        }
        Hc.exports = jb
    }
    );
    var Kc = f( (sr, Dt) => {
        var Yb = Qn()
          , zc = typeof sr == "object" && sr && !sr.nodeType && sr
          , ur = zc && typeof Dt == "object" && Dt && !Dt.nodeType && Dt
          , $b = ur && ur.exports === zc
          , Oi = $b && Yb.process
          , Qb = function() {
            try {
                var e = ur && ur.require && ur.require("util").types;
                return e || Oi && Oi.binding && Oi.binding("util")
            } catch {}
        }();
        Dt.exports = Qb
    }
    );
    var Yr = f( (sq, $c) => {
        var Zb = Bc()
          , Jb = Wc()
          , jc = Kc()
          , Yc = jc && jc.isTypedArray
          , eA = Yc ? Jb(Yc) : Zb;
        $c.exports = eA
    }
    );
    var wi = f( (uq, Qc) => {
        var tA = Rc()
          , rA = or()
          , nA = Te()
          , iA = zr()
          , oA = Kr()
          , aA = Yr()
          , sA = Object.prototype
          , uA = sA.hasOwnProperty;
        function cA(e, t) {
            var r = nA(e)
              , n = !r && rA(e)
              , i = !r && !n && iA(e)
              , o = !r && !n && !i && aA(e)
              , a = r || n || i || o
              , s = a ? tA(e.length, String) : []
              , u = s.length;
            for (var l in e)
                (t || uA.call(e, l)) && !(a && (l == "length" || i && (l == "offset" || l == "parent") || o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || oA(l, u))) && s.push(l);
            return s
        }
        Qc.exports = cA
    }
    );
    var $r = f( (cq, Zc) => {
        var lA = Object.prototype;
        function fA(e) {
            var t = e && e.constructor
              , r = typeof t == "function" && t.prototype || lA;
            return e === r
        }
        Zc.exports = fA
    }
    );
    var el = f( (lq, Jc) => {
        var dA = Zn()
          , pA = dA(Object.keys, Object);
        Jc.exports = pA
    }
    );
    var Qr = f( (fq, tl) => {
        var gA = $r()
          , hA = el()
          , EA = Object.prototype
          , yA = EA.hasOwnProperty;
        function vA(e) {
            if (!gA(e))
                return hA(e);
            var t = [];
            for (var r in Object(e))
                yA.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        tl.exports = vA
    }
    );
    var Et = f( (dq, rl) => {
        var mA = yi()
          , _A = jr();
        function IA(e) {
            return e != null && _A(e.length) && !mA(e)
        }
        rl.exports = IA
    }
    );
    var cr = f( (pq, nl) => {
        var TA = wi()
          , bA = Qr()
          , AA = Et();
        function SA(e) {
            return AA(e) ? TA(e) : bA(e)
        }
        nl.exports = SA
    }
    );
    var ol = f( (gq, il) => {
        var OA = bi()
          , wA = Si()
          , xA = cr();
        function RA(e) {
            return OA(e, xA, wA)
        }
        il.exports = RA
    }
    );
    var ul = f( (hq, sl) => {
        var al = ol()
          , CA = 1
          , LA = Object.prototype
          , PA = LA.hasOwnProperty;
        function NA(e, t, r, n, i, o) {
            var a = r & CA
              , s = al(e)
              , u = s.length
              , l = al(t)
              , E = l.length;
            if (u != E && !a)
                return !1;
            for (var p = u; p--; ) {
                var d = s[p];
                if (!(a ? d in t : PA.call(t, d)))
                    return !1
            }
            var h = o.get(e)
              , T = o.get(t);
            if (h && T)
                return h == t && T == e;
            var _ = !0;
            o.set(e, t),
            o.set(t, e);
            for (var S = a; ++p < u; ) {
                d = s[p];
                var v = e[d]
                  , x = t[d];
                if (n)
                    var O = a ? n(x, v, d, t, e, o) : n(v, x, d, e, t, o);
                if (!(O === void 0 ? v === x || i(v, x, r, n, o) : O)) {
                    _ = !1;
                    break
                }
                S || (S = d == "constructor")
            }
            if (_ && !S) {
                var C = e.constructor
                  , L = t.constructor;
                C != L && "constructor"in e && "constructor"in t && !(typeof C == "function" && C instanceof C && typeof L == "function" && L instanceof L) && (_ = !1)
            }
            return o.delete(e),
            o.delete(t),
            _
        }
        sl.exports = NA
    }
    );
    var ll = f( (Eq, cl) => {
        var DA = ct()
          , MA = Ue()
          , FA = DA(MA, "DataView");
        cl.exports = FA
    }
    );
    var dl = f( (yq, fl) => {
        var qA = ct()
          , XA = Ue()
          , GA = qA(XA, "Promise");
        fl.exports = GA
    }
    );
    var gl = f( (vq, pl) => {
        var VA = ct()
          , UA = Ue()
          , kA = VA(UA, "Set");
        pl.exports = kA
    }
    );
    var xi = f( (mq, hl) => {
        var BA = ct()
          , HA = Ue()
          , WA = BA(HA, "WeakMap");
        hl.exports = WA
    }
    );
    var Zr = f( (_q, Tl) => {
        var Ri = ll()
          , Ci = kr()
          , Li = dl()
          , Pi = gl()
          , Ni = xi()
          , Il = ut()
          , Mt = mi()
          , El = "[object Map]"
          , zA = "[object Object]"
          , yl = "[object Promise]"
          , vl = "[object Set]"
          , ml = "[object WeakMap]"
          , _l = "[object DataView]"
          , KA = Mt(Ri)
          , jA = Mt(Ci)
          , YA = Mt(Li)
          , $A = Mt(Pi)
          , QA = Mt(Ni)
          , yt = Il;
        (Ri && yt(new Ri(new ArrayBuffer(1))) != _l || Ci && yt(new Ci) != El || Li && yt(Li.resolve()) != yl || Pi && yt(new Pi) != vl || Ni && yt(new Ni) != ml) && (yt = function(e) {
            var t = Il(e)
              , r = t == zA ? e.constructor : void 0
              , n = r ? Mt(r) : "";
            if (n)
                switch (n) {
                case KA:
                    return _l;
                case jA:
                    return El;
                case YA:
                    return yl;
                case $A:
                    return vl;
                case QA:
                    return ml
                }
            return t
        }
        );
        Tl.exports = yt
    }
    );
    var Cl = f( (Iq, Rl) => {
        var Di = _i()
          , ZA = Ii()
          , JA = mc()
          , e0 = ul()
          , bl = Zr()
          , Al = Te()
          , Sl = zr()
          , t0 = Yr()
          , r0 = 1
          , Ol = "[object Arguments]"
          , wl = "[object Array]"
          , Jr = "[object Object]"
          , n0 = Object.prototype
          , xl = n0.hasOwnProperty;
        function i0(e, t, r, n, i, o) {
            var a = Al(e)
              , s = Al(t)
              , u = a ? wl : bl(e)
              , l = s ? wl : bl(t);
            u = u == Ol ? Jr : u,
            l = l == Ol ? Jr : l;
            var E = u == Jr
              , p = l == Jr
              , d = u == l;
            if (d && Sl(e)) {
                if (!Sl(t))
                    return !1;
                a = !0,
                E = !1
            }
            if (d && !E)
                return o || (o = new Di),
                a || t0(e) ? ZA(e, t, r, n, i, o) : JA(e, t, u, r, n, i, o);
            if (!(r & r0)) {
                var h = E && xl.call(e, "__wrapped__")
                  , T = p && xl.call(t, "__wrapped__");
                if (h || T) {
                    var _ = h ? e.value() : e
                      , S = T ? t.value() : t;
                    return o || (o = new Di),
                    i(_, S, r, n, o)
                }
            }
            return d ? (o || (o = new Di),
            e0(e, t, r, n, i, o)) : !1
        }
        Rl.exports = i0
    }
    );
    var Mi = f( (Tq, Nl) => {
        var o0 = Cl()
          , Ll = rt();
        function Pl(e, t, r, n, i) {
            return e === t ? !0 : e == null || t == null || !Ll(e) && !Ll(t) ? e !== e && t !== t : o0(e, t, r, n, Pl, i)
        }
        Nl.exports = Pl
    }
    );
    var Ml = f( (bq, Dl) => {
        var a0 = _i()
          , s0 = Mi()
          , u0 = 1
          , c0 = 2;
        function l0(e, t, r, n) {
            var i = r.length
              , o = i
              , a = !n;
            if (e == null)
                return !o;
            for (e = Object(e); i--; ) {
                var s = r[i];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0]in e))
                    return !1
            }
            for (; ++i < o; ) {
                s = r[i];
                var u = s[0]
                  , l = e[u]
                  , E = s[1];
                if (a && s[2]) {
                    if (l === void 0 && !(u in e))
                        return !1
                } else {
                    var p = new a0;
                    if (n)
                        var d = n(l, E, u, e, t, p);
                    if (!(d === void 0 ? s0(E, l, u0 | c0, n, p) : d))
                        return !1
                }
            }
            return !0
        }
        Dl.exports = l0
    }
    );
    var Fi = f( (Aq, Fl) => {
        var f0 = $e();
        function d0(e) {
            return e === e && !f0(e)
        }
        Fl.exports = d0
    }
    );
    var Xl = f( (Sq, ql) => {
        var p0 = Fi()
          , g0 = cr();
        function h0(e) {
            for (var t = g0(e), r = t.length; r--; ) {
                var n = t[r]
                  , i = e[n];
                t[r] = [n, i, p0(i)]
            }
            return t
        }
        ql.exports = h0
    }
    );
    var qi = f( (Oq, Gl) => {
        function E0(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        Gl.exports = E0
    }
    );
    var Ul = f( (wq, Vl) => {
        var y0 = Ml()
          , v0 = Xl()
          , m0 = qi();
        function _0(e) {
            var t = v0(e);
            return t.length == 1 && t[0][2] ? m0(t[0][0], t[0][1]) : function(r) {
                return r === e || y0(r, e, t)
            }
        }
        Vl.exports = _0
    }
    );
    var lr = f( (xq, kl) => {
        var I0 = ut()
          , T0 = rt()
          , b0 = "[object Symbol]";
        function A0(e) {
            return typeof e == "symbol" || T0(e) && I0(e) == b0
        }
        kl.exports = A0
    }
    );
    var en = f( (Rq, Bl) => {
        var S0 = Te()
          , O0 = lr()
          , w0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
          , x0 = /^\w*$/;
        function R0(e, t) {
            if (S0(e))
                return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || O0(e) ? !0 : x0.test(e) || !w0.test(e) || t != null && e in Object(t)
        }
        Bl.exports = R0
    }
    );
    var zl = f( (Cq, Wl) => {
        var Hl = Br()
          , C0 = "Expected a function";
        function Xi(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function")
                throw new TypeError(C0);
            var r = function() {
                var n = arguments
                  , i = t ? t.apply(this, n) : n[0]
                  , o = r.cache;
                if (o.has(i))
                    return o.get(i);
                var a = e.apply(this, n);
                return r.cache = o.set(i, a) || o,
                a
            };
            return r.cache = new (Xi.Cache || Hl),
            r
        }
        Xi.Cache = Hl;
        Wl.exports = Xi
    }
    );
    var jl = f( (Lq, Kl) => {
        var L0 = zl()
          , P0 = 500;
        function N0(e) {
            var t = L0(e, function(n) {
                return r.size === P0 && r.clear(),
                n
            })
              , r = t.cache;
            return t
        }
        Kl.exports = N0
    }
    );
    var $l = f( (Pq, Yl) => {
        var D0 = jl()
          , M0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
          , F0 = /\\(\\)?/g
          , q0 = D0(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""),
            e.replace(M0, function(r, n, i, o) {
                t.push(i ? o.replace(F0, "$1") : n || r)
            }),
            t
        });
        Yl.exports = q0
    }
    );
    var Gi = f( (Nq, Ql) => {
        function X0(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
                i[r] = t(e[r], r, e);
            return i
        }
        Ql.exports = X0
    }
    );
    var nf = f( (Dq, rf) => {
        var Zl = St()
          , G0 = Gi()
          , V0 = Te()
          , U0 = lr()
          , k0 = 1 / 0
          , Jl = Zl ? Zl.prototype : void 0
          , ef = Jl ? Jl.toString : void 0;
        function tf(e) {
            if (typeof e == "string")
                return e;
            if (V0(e))
                return G0(e, tf) + "";
            if (U0(e))
                return ef ? ef.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -k0 ? "-0" : t
        }
        rf.exports = tf
    }
    );
    var af = f( (Mq, of) => {
        var B0 = nf();
        function H0(e) {
            return e == null ? "" : B0(e)
        }
        of.exports = H0
    }
    );
    var fr = f( (Fq, sf) => {
        var W0 = Te()
          , z0 = en()
          , K0 = $l()
          , j0 = af();
        function Y0(e, t) {
            return W0(e) ? e : z0(e, t) ? [e] : K0(j0(e))
        }
        sf.exports = Y0
    }
    );
    var Ft = f( (qq, uf) => {
        var $0 = lr()
          , Q0 = 1 / 0;
        function Z0(e) {
            if (typeof e == "string" || $0(e))
                return e;
            var t = e + "";
            return t == "0" && 1 / e == -Q0 ? "-0" : t
        }
        uf.exports = Z0
    }
    );
    var tn = f( (Xq, cf) => {
        var J0 = fr()
          , eS = Ft();
        function tS(e, t) {
            t = J0(t, e);
            for (var r = 0, n = t.length; e != null && r < n; )
                e = e[eS(t[r++])];
            return r && r == n ? e : void 0
        }
        cf.exports = tS
    }
    );
    var rn = f( (Gq, lf) => {
        var rS = tn();
        function nS(e, t, r) {
            var n = e == null ? void 0 : rS(e, t);
            return n === void 0 ? r : n
        }
        lf.exports = nS
    }
    );
    var df = f( (Vq, ff) => {
        function iS(e, t) {
            return e != null && t in Object(e)
        }
        ff.exports = iS
    }
    );
    var gf = f( (Uq, pf) => {
        var oS = fr()
          , aS = or()
          , sS = Te()
          , uS = Kr()
          , cS = jr()
          , lS = Ft();
        function fS(e, t, r) {
            t = oS(t, e);
            for (var n = -1, i = t.length, o = !1; ++n < i; ) {
                var a = lS(t[n]);
                if (!(o = e != null && r(e, a)))
                    break;
                e = e[a]
            }
            return o || ++n != i ? o : (i = e == null ? 0 : e.length,
            !!i && cS(i) && uS(a, i) && (sS(e) || aS(e)))
        }
        pf.exports = fS
    }
    );
    var Ef = f( (kq, hf) => {
        var dS = df()
          , pS = gf();
        function gS(e, t) {
            return e != null && pS(e, t, dS)
        }
        hf.exports = gS
    }
    );
    var vf = f( (Bq, yf) => {
        var hS = Mi()
          , ES = rn()
          , yS = Ef()
          , vS = en()
          , mS = Fi()
          , _S = qi()
          , IS = Ft()
          , TS = 1
          , bS = 2;
        function AS(e, t) {
            return vS(e) && mS(t) ? _S(IS(e), t) : function(r) {
                var n = ES(r, e);
                return n === void 0 && n === t ? yS(r, e) : hS(t, n, TS | bS)
            }
        }
        yf.exports = AS
    }
    );
    var nn = f( (Hq, mf) => {
        function SS(e) {
            return e
        }
        mf.exports = SS
    }
    );
    var Vi = f( (Wq, _f) => {
        function OS(e) {
            return function(t) {
                return t?.[e]
            }
        }
        _f.exports = OS
    }
    );
    var Tf = f( (zq, If) => {
        var wS = tn();
        function xS(e) {
            return function(t) {
                return wS(t, e)
            }
        }
        If.exports = xS
    }
    );
    var Af = f( (Kq, bf) => {
        var RS = Vi()
          , CS = Tf()
          , LS = en()
          , PS = Ft();
        function NS(e) {
            return LS(e) ? RS(PS(e)) : CS(e)
        }
        bf.exports = NS
    }
    );
    var lt = f( (jq, Sf) => {
        var DS = Ul()
          , MS = vf()
          , FS = nn()
          , qS = Te()
          , XS = Af();
        function GS(e) {
            return typeof e == "function" ? e : e == null ? FS : typeof e == "object" ? qS(e) ? MS(e[0], e[1]) : DS(e) : XS(e)
        }
        Sf.exports = GS
    }
    );
    var Ui = f( (Yq, Of) => {
        var VS = lt()
          , US = Et()
          , kS = cr();
        function BS(e) {
            return function(t, r, n) {
                var i = Object(t);
                if (!US(t)) {
                    var o = VS(r, 3);
                    t = kS(t),
                    r = function(s) {
                        return o(i[s], s, i)
                    }
                }
                var a = e(t, r, n);
                return a > -1 ? i[o ? t[a] : a] : void 0
            }
        }
        Of.exports = BS
    }
    );
    var ki = f( ($q, wf) => {
        function HS(e, t, r, n) {
            for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
                if (t(e[o], o, e))
                    return o;
            return -1
        }
        wf.exports = HS
    }
    );
    var Rf = f( (Qq, xf) => {
        var WS = /\s/;
        function zS(e) {
            for (var t = e.length; t-- && WS.test(e.charAt(t)); )
                ;
            return t
        }
        xf.exports = zS
    }
    );
    var Lf = f( (Zq, Cf) => {
        var KS = Rf()
          , jS = /^\s+/;
        function YS(e) {
            return e && e.slice(0, KS(e) + 1).replace(jS, "")
        }
        Cf.exports = YS
    }
    );
    var on = f( (Jq, Df) => {
        var $S = Lf()
          , Pf = $e()
          , QS = lr()
          , Nf = 0 / 0
          , ZS = /^[-+]0x[0-9a-f]+$/i
          , JS = /^0b[01]+$/i
          , eO = /^0o[0-7]+$/i
          , tO = parseInt;
        function rO(e) {
            if (typeof e == "number")
                return e;
            if (QS(e))
                return Nf;
            if (Pf(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Pf(t) ? t + "" : t
            }
            if (typeof e != "string")
                return e === 0 ? e : +e;
            e = $S(e);
            var r = JS.test(e);
            return r || eO.test(e) ? tO(e.slice(2), r ? 2 : 8) : ZS.test(e) ? Nf : +e
        }
        Df.exports = rO
    }
    );
    var qf = f( (e1, Ff) => {
        var nO = on()
          , Mf = 1 / 0
          , iO = 17976931348623157e292;
        function oO(e) {
            if (!e)
                return e === 0 ? e : 0;
            if (e = nO(e),
            e === Mf || e === -Mf) {
                var t = e < 0 ? -1 : 1;
                return t * iO
            }
            return e === e ? e : 0
        }
        Ff.exports = oO
    }
    );
    var Bi = f( (t1, Xf) => {
        var aO = qf();
        function sO(e) {
            var t = aO(e)
              , r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        Xf.exports = sO
    }
    );
    var Vf = f( (r1, Gf) => {
        var uO = ki()
          , cO = lt()
          , lO = Bi()
          , fO = Math.max;
        function dO(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n)
                return -1;
            var i = r == null ? 0 : lO(r);
            return i < 0 && (i = fO(n + i, 0)),
            uO(e, cO(t, 3), i)
        }
        Gf.exports = dO
    }
    );
    var Hi = f( (n1, Uf) => {
        var pO = Ui()
          , gO = Vf()
          , hO = pO(gO);
        Uf.exports = hO
    }
    );
    var Hf = {};
    Ce(Hf, {
        ELEMENT_MATCHES: () => EO,
        FLEX_PREFIXED: () => Wi,
        IS_BROWSER_ENV: () => Be,
        TRANSFORM_PREFIXED: () => ft,
        TRANSFORM_STYLE_PREFIXED: () => sn,
        withBrowser: () => an
    });
    var Bf, Be, an, EO, Wi, ft, kf, sn, un = Ee( () => {
        "use strict";
        Bf = ue(Hi()),
        Be = typeof window < "u",
        an = (e, t) => Be ? e() : t,
        EO = an( () => (0,
        Bf.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)),
        Wi = an( () => {
            let e = document.createElement("i")
              , t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"]
              , r = "";
            try {
                let {length: n} = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i];
                    if (e.style.display = o,
                    e.style.display === o)
                        return o
                }
                return r
            } catch {
                return r
            }
        }
        , "flex"),
        ft = an( () => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"]
                  , r = "Transform"
                  , {length: n} = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i] + r;
                    if (e.style[o] !== void 0)
                        return o
                }
            }
            return "transform"
        }
        , "transform"),
        kf = ft.split("transform")[0],
        sn = kf ? kf + "TransformStyle" : "transformStyle"
    }
    );
    var zi = f( (i1, Yf) => {
        var yO = 4
          , vO = .001
          , mO = 1e-7
          , _O = 10
          , dr = 11
          , cn = 1 / (dr - 1)
          , IO = typeof Float32Array == "function";
        function Wf(e, t) {
            return 1 - 3 * t + 3 * e
        }
        function zf(e, t) {
            return 3 * t - 6 * e
        }
        function Kf(e) {
            return 3 * e
        }
        function ln(e, t, r) {
            return ((Wf(t, r) * e + zf(t, r)) * e + Kf(t)) * e
        }
        function jf(e, t, r) {
            return 3 * Wf(t, r) * e * e + 2 * zf(t, r) * e + Kf(t)
        }
        function TO(e, t, r, n, i) {
            var o, a, s = 0;
            do
                a = t + (r - t) / 2,
                o = ln(a, n, i) - e,
                o > 0 ? r = a : t = a;
            while (Math.abs(o) > mO && ++s < _O);
            return a
        }
        function bO(e, t, r, n) {
            for (var i = 0; i < yO; ++i) {
                var o = jf(t, r, n);
                if (o === 0)
                    return t;
                var a = ln(t, r, n) - e;
                t -= a / o
            }
            return t
        }
        Yf.exports = function(t, r, n, i) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
                throw new Error("bezier x values must be in [0, 1] range");
            var o = IO ? new Float32Array(dr) : new Array(dr);
            if (t !== r || n !== i)
                for (var a = 0; a < dr; ++a)
                    o[a] = ln(a * cn, t, n);
            function s(u) {
                for (var l = 0, E = 1, p = dr - 1; E !== p && o[E] <= u; ++E)
                    l += cn;
                --E;
                var d = (u - o[E]) / (o[E + 1] - o[E])
                  , h = l + d * cn
                  , T = jf(h, t, n);
                return T >= vO ? bO(u, h, t, n) : T === 0 ? h : TO(u, l, l + cn, t, n)
            }
            return function(l) {
                return t === r && n === i ? l : l === 0 ? 0 : l === 1 ? 1 : ln(s(l), r, i)
            }
        }
    }
    );
    var gr = {};
    Ce(gr, {
        bounce: () => ow,
        bouncePast: () => aw,
        ease: () => AO,
        easeIn: () => SO,
        easeInOut: () => wO,
        easeOut: () => OO,
        inBack: () => $O,
        inCirc: () => zO,
        inCubic: () => LO,
        inElastic: () => JO,
        inExpo: () => BO,
        inOutBack: () => ZO,
        inOutCirc: () => jO,
        inOutCubic: () => NO,
        inOutElastic: () => tw,
        inOutExpo: () => WO,
        inOutQuad: () => CO,
        inOutQuart: () => FO,
        inOutQuint: () => GO,
        inOutSine: () => kO,
        inQuad: () => xO,
        inQuart: () => DO,
        inQuint: () => qO,
        inSine: () => VO,
        outBack: () => QO,
        outBounce: () => YO,
        outCirc: () => KO,
        outCubic: () => PO,
        outElastic: () => ew,
        outExpo: () => HO,
        outQuad: () => RO,
        outQuart: () => MO,
        outQuint: () => XO,
        outSine: () => UO,
        swingFrom: () => nw,
        swingFromTo: () => rw,
        swingTo: () => iw
    });
    function xO(e) {
        return Math.pow(e, 2)
    }
    function RO(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }
    function CO(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }
    function LO(e) {
        return Math.pow(e, 3)
    }
    function PO(e) {
        return Math.pow(e - 1, 3) + 1
    }
    function NO(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }
    function DO(e) {
        return Math.pow(e, 4)
    }
    function MO(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }
    function FO(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }
    function qO(e) {
        return Math.pow(e, 5)
    }
    function XO(e) {
        return Math.pow(e - 1, 5) + 1
    }
    function GO(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }
    function VO(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }
    function UO(e) {
        return Math.sin(e * (Math.PI / 2))
    }
    function kO(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }
    function BO(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }
    function HO(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }
    function WO(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }
    function zO(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }
    function KO(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }
    function jO(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }
    function YO(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }
    function $O(e) {
        let t = nt;
        return e * e * ((t + 1) * e - t)
    }
    function QO(e) {
        let t = nt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }
    function ZO(e) {
        let t = nt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }
    function JO(e) {
        let t = nt
          , r = 0
          , n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
        n < 1 ? (n = 1,
        t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
        -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }
    function ew(e) {
        let t = nt
          , r = 0
          , n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
        n < 1 ? (n = 1,
        t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
        n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }
    function tw(e) {
        let t = nt
          , r = 0
          , n = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5),
        n < 1 ? (n = 1,
        t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
        e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }
    function rw(e) {
        let t = nt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }
    function nw(e) {
        let t = nt;
        return e * e * ((t + 1) * e - t)
    }
    function iw(e) {
        let t = nt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }
    function ow(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }
    function aw(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var pr, nt, AO, SO, OO, wO, Ki = Ee( () => {
        "use strict";
        pr = ue(zi()),
        nt = 1.70158,
        AO = (0,
        pr.default)(.25, .1, .25, 1),
        SO = (0,
        pr.default)(.42, 0, 1, 1),
        OO = (0,
        pr.default)(0, 0, .58, 1),
        wO = (0,
        pr.default)(.42, 0, .58, 1)
    }
    );
    var Qf = {};
    Ce(Qf, {
        applyEasing: () => uw,
        createBezierEasing: () => sw,
        optimizeFloat: () => hr
    });
    function hr(e, t=5, r=10) {
        let n = Math.pow(r, t)
          , i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0
    }
    function sw(e) {
        return (0,
        $f.default)(...e)
    }
    function uw(e, t, r) {
        return t === 0 ? 0 : t === 1 ? 1 : hr(r ? t > 0 ? r(t) : t : t > 0 && e && gr[e] ? gr[e](t) : t)
    }
    var $f, ji = Ee( () => {
        "use strict";
        Ki();
        $f = ue(zi())
    }
    );
    var ed = {};
    Ce(ed, {
        createElementState: () => Jf,
        ixElements: () => Tw,
        mergeActionState: () => Yi
    });
    function Jf(e, t, r, n, i) {
        let o = r === cw ? (0,
        qt.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0,
        qt.mergeIn)(e, [n], {
            id: n,
            ref: t,
            refId: o,
            refType: r
        })
    }
    function Yi(e, t, r, n, i) {
        let o = Aw(i);
        return (0,
        qt.mergeIn)(e, [t, Iw, r], n, o)
    }
    function Aw(e) {
        let {config: t} = e;
        return bw.reduce( (r, n) => {
            let i = n[0]
              , o = n[1]
              , a = t[i]
              , s = t[o];
            return a != null && s != null && (r[o] = s),
            r
        }
        , {})
    }
    var qt, a1, cw, s1, lw, fw, dw, pw, gw, hw, Ew, yw, vw, mw, _w, Zf, Iw, Tw, bw, td = Ee( () => {
        "use strict";
        qt = ue(xt());
        Pe();
        ({HTML_ELEMENT: a1, PLAIN_OBJECT: cw, ABSTRACT_NODE: s1, CONFIG_X_VALUE: lw, CONFIG_Y_VALUE: fw, CONFIG_Z_VALUE: dw, CONFIG_VALUE: pw, CONFIG_X_UNIT: gw, CONFIG_Y_UNIT: hw, CONFIG_Z_UNIT: Ew, CONFIG_UNIT: yw} = Ae),
        {IX2_SESSION_STOPPED: vw, IX2_INSTANCE_ADDED: mw, IX2_ELEMENT_STATE_CHANGED: _w} = Ie,
        Zf = {},
        Iw = "refState",
        Tw = (e=Zf, t={}) => {
            switch (t.type) {
            case vw:
                return Zf;
            case mw:
                {
                    let {elementId: r, element: n, origin: i, actionItem: o, refType: a} = t.payload
                      , {actionTypeId: s} = o
                      , u = e;
                    return (0,
                    qt.getIn)(u, [r, n]) !== n && (u = Jf(u, n, a, r, o)),
                    Yi(u, r, s, i, o)
                }
            case _w:
                {
                    let {elementId: r, actionTypeId: n, current: i, actionItem: o} = t.payload;
                    return Yi(e, r, n, i, o)
                }
            default:
                return e
            }
        }
        ;
        bw = [[lw, gw], [fw, hw], [dw, Ew], [pw, yw]]
    }
    );
    var rd = f($i => {
        "use strict";
        Object.defineProperty($i, "__esModule", {
            value: !0
        });
        function Sw(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }
        Sw($i, {
            clearPlugin: function() {
                return Pw
            },
            createPluginInstance: function() {
                return Cw
            },
            getPluginConfig: function() {
                return Ow
            },
            getPluginDestination: function() {
                return Rw
            },
            getPluginDuration: function() {
                return ww
            },
            getPluginOrigin: function() {
                return xw
            },
            renderPlugin: function() {
                return Lw
            }
        });
        var Ow = e => e.value
          , ww = (e, t) => {
            if (t.config.duration !== "auto")
                return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        }
          , xw = e => e || {
            value: 0
        }
          , Rw = e => ({
            value: e.value
        })
          , Cw = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(),
            t.setSubframe(!0),
            t
        }
          , Lw = (e, t, r) => {
            if (!e)
                return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        }
          , Pw = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        }
    }
    );
    var id = f(Qi => {
        "use strict";
        Object.defineProperty(Qi, "__esModule", {
            value: !0
        });
        function Nw(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }
        Nw(Qi, {
            clearPlugin: function() {
                return Bw
            },
            createPluginInstance: function() {
                return Uw
            },
            getPluginConfig: function() {
                return qw
            },
            getPluginDestination: function() {
                return Vw
            },
            getPluginDuration: function() {
                return Xw
            },
            getPluginOrigin: function() {
                return Gw
            },
            renderPlugin: function() {
                return kw
            }
        });
        var Dw = e => document.querySelector(`[data-w-id="${e}"]`)
          , Mw = () => window.Webflow.require("spline")
          , Fw = (e, t) => e.filter(r => !t.includes(r))
          , qw = (e, t) => e.value[t]
          , Xw = () => null
          , nd = Object.freeze({
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1
        })
          , Gw = (e, t) => {
            let r = t.config.value
              , n = Object.keys(r);
            if (e) {
                let o = Object.keys(e)
                  , a = Fw(n, o);
                return a.length ? a.reduce( (u, l) => (u[l] = nd[l],
                u), e) : e
            }
            return n.reduce( (o, a) => (o[a] = nd[a],
            o), {})
        }
          , Vw = e => e.value
          , Uw = (e, t) => {
            let r = t?.config?.target?.pluginElement;
            return r ? Dw(r) : null
        }
          , kw = (e, t, r) => {
            let n = Mw()
              , i = n.getInstance(e)
              , o = r.config.target.objectId
              , a = s => {
                if (!s)
                    throw new Error("Invalid spline app passed to renderSpline");
                let u = o && s.findObjectById(o);
                if (!u)
                    return;
                let {PLUGIN_SPLINE: l} = t;
                l.positionX != null && (u.position.x = l.positionX),
                l.positionY != null && (u.position.y = l.positionY),
                l.positionZ != null && (u.position.z = l.positionZ),
                l.rotationX != null && (u.rotation.x = l.rotationX),
                l.rotationY != null && (u.rotation.y = l.rotationY),
                l.rotationZ != null && (u.rotation.z = l.rotationZ),
                l.scaleX != null && (u.scale.x = l.scaleX),
                l.scaleY != null && (u.scale.y = l.scaleY),
                l.scaleZ != null && (u.scale.z = l.scaleZ)
            }
            ;
            i ? a(i.spline) : n.setLoadHandler(e, a)
        }
          , Bw = () => null
    }
    );
    var Ji = f(Zi => {
        "use strict";
        Object.defineProperty(Zi, "__esModule", {
            value: !0
        });
        Object.defineProperty(Zi, "normalizeColor", {
            enumerable: !0,
            get: function() {
                return Hw
            }
        });
        var od = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        };
        function Hw(e) {
            let t, r, n, i = 1, o = e.replace(/\s/g, "").toLowerCase(), s = (typeof od[o] == "string" ? od[o].toLowerCase() : null) || o;
            if (s.startsWith("#")) {
                let u = s.substring(1);
                u.length === 3 || u.length === 4 ? (t = parseInt(u[0] + u[0], 16),
                r = parseInt(u[1] + u[1], 16),
                n = parseInt(u[2] + u[2], 16),
                u.length === 4 && (i = parseInt(u[3] + u[3], 16) / 255)) : (u.length === 6 || u.length === 8) && (t = parseInt(u.substring(0, 2), 16),
                r = parseInt(u.substring(2, 4), 16),
                n = parseInt(u.substring(4, 6), 16),
                u.length === 8 && (i = parseInt(u.substring(6, 8), 16) / 255))
            } else if (s.startsWith("rgba")) {
                let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10),
                r = parseInt(u[1], 10),
                n = parseInt(u[2], 10),
                i = parseFloat(u[3])
            } else if (s.startsWith("rgb")) {
                let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10),
                r = parseInt(u[1], 10),
                n = parseInt(u[2], 10)
            } else if (s.startsWith("hsla")) {
                let u = s.match(/hsla\(([^)]+)\)/)[1].split(",")
                  , l = parseFloat(u[0])
                  , E = parseFloat(u[1].replace("%", "")) / 100
                  , p = parseFloat(u[2].replace("%", "")) / 100;
                i = parseFloat(u[3]);
                let d = (1 - Math.abs(2 * p - 1)) * E, h = d * (1 - Math.abs(l / 60 % 2 - 1)), T = p - d / 2, _, S, v;
                l >= 0 && l < 60 ? (_ = d,
                S = h,
                v = 0) : l >= 60 && l < 120 ? (_ = h,
                S = d,
                v = 0) : l >= 120 && l < 180 ? (_ = 0,
                S = d,
                v = h) : l >= 180 && l < 240 ? (_ = 0,
                S = h,
                v = d) : l >= 240 && l < 300 ? (_ = h,
                S = 0,
                v = d) : (_ = d,
                S = 0,
                v = h),
                t = Math.round((_ + T) * 255),
                r = Math.round((S + T) * 255),
                n = Math.round((v + T) * 255)
            } else if (s.startsWith("hsl")) {
                let u = s.match(/hsl\(([^)]+)\)/)[1].split(","), l = parseFloat(u[0]), E = parseFloat(u[1].replace("%", "")) / 100, p = parseFloat(u[2].replace("%", "")) / 100, d = (1 - Math.abs(2 * p - 1)) * E, h = d * (1 - Math.abs(l / 60 % 2 - 1)), T = p - d / 2, _, S, v;
                l >= 0 && l < 60 ? (_ = d,
                S = h,
                v = 0) : l >= 60 && l < 120 ? (_ = h,
                S = d,
                v = 0) : l >= 120 && l < 180 ? (_ = 0,
                S = d,
                v = h) : l >= 180 && l < 240 ? (_ = 0,
                S = h,
                v = d) : l >= 240 && l < 300 ? (_ = h,
                S = 0,
                v = d) : (_ = d,
                S = 0,
                v = h),
                t = Math.round((_ + T) * 255),
                r = Math.round((S + T) * 255),
                n = Math.round((v + T) * 255)
            }
            if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
                throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
            return {
                red: t,
                green: r,
                blue: n,
                alpha: i
            }
        }
    }
    );
    var ad = f(eo => {
        "use strict";
        Object.defineProperty(eo, "__esModule", {
            value: !0
        });
        function Ww(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }
        Ww(eo, {
            clearPlugin: function() {
                return Jw
            },
            createPluginInstance: function() {
                return Qw
            },
            getPluginConfig: function() {
                return Kw
            },
            getPluginDestination: function() {
                return $w
            },
            getPluginDuration: function() {
                return jw
            },
            getPluginOrigin: function() {
                return Yw
            },
            renderPlugin: function() {
                return Zw
            }
        });
        var zw = Ji()
          , Kw = (e, t) => e.value[t]
          , jw = () => null
          , Yw = (e, t) => {
            if (e)
                return e;
            let r = t.config.value
              , n = t.config.target.objectId
              , i = getComputedStyle(document.documentElement).getPropertyValue(n);
            if (r.size != null)
                return {
                    size: parseInt(i, 10)
                };
            if (r.red != null && r.green != null && r.blue != null)
                return (0,
                zw.normalizeColor)(i)
        }
          , $w = e => e.value
          , Qw = () => null
          , Zw = (e, t, r) => {
            let n = r.config.target.objectId, i = r.config.value.unit, {PLUGIN_VARIABLE: o} = t, {size: a, red: s, green: u, blue: l, alpha: E} = o, p;
            a != null && (p = a + i),
            s != null && l != null && u != null && E != null && (p = `rgba(${s}, ${u}, ${l}, ${E})`),
            p != null && document.documentElement.style.setProperty(n, p)
        }
          , Jw = (e, t) => {
            let r = t.config.target.objectId;
            document.documentElement.style.removeProperty(r)
        }
    }
    );
    var ud = f(no => {
        "use strict";
        Object.defineProperty(no, "__esModule", {
            value: !0
        });
        Object.defineProperty(no, "pluginMethodMap", {
            enumerable: !0,
            get: function() {
                return nx
            }
        });
        var to = (Pe(),
        ze(ds))
          , ex = ro(rd())
          , tx = ro(id())
          , rx = ro(ad());
        function sd(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (sd = function(n) {
                return n ? r : t
            }
            )(e)
        }
        function ro(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || typeof e != "object" && typeof e != "function")
                return {
                    default: e
                };
            var r = sd(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        var nx = new Map([[to.ActionTypeConsts.PLUGIN_LOTTIE, {
            ...ex
        }], [to.ActionTypeConsts.PLUGIN_SPLINE, {
            ...tx
        }], [to.ActionTypeConsts.PLUGIN_VARIABLE, {
            ...rx
        }]])
    }
    );
    var cd = {};
    Ce(cd, {
        clearPlugin: () => co,
        createPluginInstance: () => ox,
        getPluginConfig: () => oo,
        getPluginDestination: () => so,
        getPluginDuration: () => ix,
        getPluginOrigin: () => ao,
        isPluginType: () => vt,
        renderPlugin: () => uo
    });
    function vt(e) {
        return io.pluginMethodMap.has(e)
    }
    var io, mt, oo, ao, ix, so, ox, uo, co, lo = Ee( () => {
        "use strict";
        un();
        io = ue(ud());
        mt = e => t => {
            if (!Be)
                return () => null;
            let r = io.pluginMethodMap.get(t);
            if (!r)
                throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n)
                throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }
        ,
        oo = mt("getPluginConfig"),
        ao = mt("getPluginOrigin"),
        ix = mt("getPluginDuration"),
        so = mt("getPluginDestination"),
        ox = mt("createPluginInstance"),
        uo = mt("renderPlugin"),
        co = mt("clearPlugin")
    }
    );
    var fd = f( (g1, ld) => {
        function ax(e, t) {
            return e == null || e !== e ? t : e
        }
        ld.exports = ax
    }
    );
    var pd = f( (h1, dd) => {
        function sx(e, t, r, n) {
            var i = -1
              , o = e == null ? 0 : e.length;
            for (n && o && (r = e[++i]); ++i < o; )
                r = t(r, e[i], i, e);
            return r
        }
        dd.exports = sx
    }
    );
    var hd = f( (E1, gd) => {
        function ux(e) {
            return function(t, r, n) {
                for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
                    var u = a[e ? s : ++i];
                    if (r(o[u], u, o) === !1)
                        break
                }
                return t
            }
        }
        gd.exports = ux
    }
    );
    var yd = f( (y1, Ed) => {
        var cx = hd()
          , lx = cx();
        Ed.exports = lx
    }
    );
    var fo = f( (v1, vd) => {
        var fx = yd()
          , dx = cr();
        function px(e, t) {
            return e && fx(e, t, dx)
        }
        vd.exports = px
    }
    );
    var _d = f( (m1, md) => {
        var gx = Et();
        function hx(e, t) {
            return function(r, n) {
                if (r == null)
                    return r;
                if (!gx(r))
                    return e(r, n);
                for (var i = r.length, o = t ? i : -1, a = Object(r); (t ? o-- : ++o < i) && n(a[o], o, a) !== !1; )
                    ;
                return r
            }
        }
        md.exports = hx
    }
    );
    var po = f( (_1, Id) => {
        var Ex = fo()
          , yx = _d()
          , vx = yx(Ex);
        Id.exports = vx
    }
    );
    var bd = f( (I1, Td) => {
        function mx(e, t, r, n, i) {
            return i(e, function(o, a, s) {
                r = n ? (n = !1,
                o) : t(r, o, a, s)
            }),
            r
        }
        Td.exports = mx
    }
    );
    var Sd = f( (T1, Ad) => {
        var _x = pd()
          , Ix = po()
          , Tx = lt()
          , bx = bd()
          , Ax = Te();
        function Sx(e, t, r) {
            var n = Ax(e) ? _x : bx
              , i = arguments.length < 3;
            return n(e, Tx(t, 4), r, i, Ix)
        }
        Ad.exports = Sx
    }
    );
    var wd = f( (b1, Od) => {
        var Ox = ki()
          , wx = lt()
          , xx = Bi()
          , Rx = Math.max
          , Cx = Math.min;
        function Lx(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n)
                return -1;
            var i = n - 1;
            return r !== void 0 && (i = xx(r),
            i = r < 0 ? Rx(n + i, 0) : Cx(i, n - 1)),
            Ox(e, wx(t, 3), i, !0)
        }
        Od.exports = Lx
    }
    );
    var Rd = f( (A1, xd) => {
        var Px = Ui()
          , Nx = wd()
          , Dx = Px(Nx);
        xd.exports = Dx
    }
    );
    function Cd(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }
    function Mx(e, t) {
        if (Cd(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        let r = Object.keys(e)
          , n = Object.keys(t);
        if (r.length !== n.length)
            return !1;
        for (let i = 0; i < r.length; i++)
            if (!Object.hasOwn(t, r[i]) || !Cd(e[r[i]], t[r[i]]))
                return !1;
        return !0
    }
    var go, Ld = Ee( () => {
        "use strict";
        go = Mx
    }
    );
    var Yd = {};
    Ce(Yd, {
        cleanupHTMLElement: () => PR,
        clearAllStyles: () => LR,
        clearObjectCache: () => Zx,
        getActionListProgress: () => DR,
        getAffectedElements: () => mo,
        getComputedStyle: () => aR,
        getDestinationValues: () => pR,
        getElementId: () => rR,
        getInstanceId: () => eR,
        getInstanceOrigin: () => cR,
        getItemConfigByKey: () => dR,
        getMaxDurationItemIndex: () => jd,
        getNamespacedParameterId: () => qR,
        getRenderType: () => Wd,
        getStyleProp: () => gR,
        mediaQueriesEqual: () => GR,
        observeStore: () => oR,
        reduceListToGroup: () => MR,
        reifyState: () => nR,
        renderHTMLElement: () => hR,
        shallowEqual: () => go,
        shouldAllowMediaQuery: () => XR,
        shouldNamespaceEventParameter: () => FR,
        stringifyTarget: () => VR
    });
    function Zx() {
        fn.clear()
    }
    function eR() {
        return "i" + Jx++
    }
    function rR(e, t) {
        for (let r in e) {
            let n = e[r];
            if (n && n.ref === t)
                return n.id
        }
        return "e" + tR++
    }
    function nR({events: e, actionLists: t, site: r}={}) {
        let n = (0,
        hn.default)(e, (a, s) => {
            let {eventTypeId: u} = s;
            return a[u] || (a[u] = {}),
            a[u][s.id] = s,
            a
        }
        , {})
          , i = r && r.mediaQueries
          , o = [];
        return i ? o = i.map(a => a.key) : (i = [],
        console.warn("IX2 missing mediaQueries in site data")),
        {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: n,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }
    function oR({store: e, select: t, onChange: r, comparator: n=iR}) {
        let {getState: i, subscribe: o} = e
          , a = o(u)
          , s = t(i());
        function u() {
            let l = t(i());
            if (l == null) {
                a();
                return
            }
            n(l, s) || (s = l,
            r(s, e))
        }
        return a
    }
    function Dd(e) {
        let t = typeof e;
        if (t === "string")
            return {
                id: e
            };
        if (e != null && t === "object") {
            let {id: r, objectId: n, selector: i, selectorGuids: o, appliesTo: a, useEventTarget: s} = e;
            return {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: s
            }
        }
        return {}
    }
    function mo({config: e, event: t, eventTarget: r, elementRoot: n, elementApi: i}) {
        if (!i)
            throw new Error("IX2 missing elementApi");
        let {targets: o} = e;
        if (Array.isArray(o) && o.length > 0)
            return o.reduce( (D, b) => D.concat(mo({
                config: {
                    target: b
                },
                event: t,
                eventTarget: r,
                elementRoot: n,
                elementApi: i
            })), []);
        let {getValidDocument: a, getQuerySelector: s, queryDocument: u, getChildElements: l, getSiblingElements: E, matchSelector: p, elementContains: d, isSiblingNode: h} = i
          , {target: T} = e;
        if (!T)
            return [];
        let {id: _, objectId: S, selector: v, selectorGuids: x, appliesTo: O, useEventTarget: C} = Dd(T);
        if (S)
            return [fn.has(S) ? fn.get(S) : fn.set(S, {}).get(S)];
        if (O === pi.PAGE) {
            let D = a(_);
            return D ? [D] : []
        }
        let R = (t?.action?.config?.affectedElements ?? {})[_ || v] || {}, V = !!(R.id || R.selector), B, W, Y, te = t && s(Dd(t.target));
        if (V ? (B = R.limitAffectedElements,
        W = te,
        Y = s(R)) : W = Y = s({
            id: _,
            selector: v,
            selectorGuids: x
        }),
        t && C) {
            let D = r && (Y || C === !0) ? [r] : u(te);
            if (Y) {
                if (C === Yx)
                    return u(Y).filter(b => D.some(P => d(b, P)));
                if (C === Pd)
                    return u(Y).filter(b => D.some(P => d(P, b)));
                if (C === Nd)
                    return u(Y).filter(b => D.some(P => h(P, b)))
            }
            return D
        }
        return W == null || Y == null ? [] : Be && n ? u(Y).filter(D => n.contains(D)) : B === Pd ? u(W, Y) : B === jx ? l(u(W)).filter(p(Y)) : B === Nd ? E(u(W)).filter(p(Y)) : u(Y)
    }
    function aR({element: e, actionItem: t}) {
        if (!Be)
            return {};
        let {actionTypeId: r} = t;
        switch (r) {
        case kt:
        case Bt:
        case Ht:
        case Wt:
        case yn:
            return window.getComputedStyle(e);
        default:
            return {}
        }
    }
    function cR(e, t={}, r={}, n, i) {
        let {getStyle: o} = i
          , {actionTypeId: a} = n;
        if (vt(a))
            return ao(a)(t[a], n);
        switch (n.actionTypeId) {
        case Gt:
        case Vt:
        case Ut:
        case mr:
            return t[n.actionTypeId] || _o[n.actionTypeId];
        case _r:
            return sR(t[n.actionTypeId], n.config.filters);
        case Ir:
            return uR(t[n.actionTypeId], n.config.fontVariations);
        case kd:
            return {
                value: (0,
                it.default)(parseFloat(o(e, pn)), 1)
            };
        case kt:
            {
                let s = o(e, Qe), u = o(e, Ze), l, E;
                return n.config.widthUnit === dt ? l = Md.test(s) ? parseFloat(s) : parseFloat(r.width) : l = (0,
                it.default)(parseFloat(s), parseFloat(r.width)),
                n.config.heightUnit === dt ? E = Md.test(u) ? parseFloat(u) : parseFloat(r.height) : E = (0,
                it.default)(parseFloat(u), parseFloat(r.height)),
                {
                    widthValue: l,
                    heightValue: E
                }
            }
        case Bt:
        case Ht:
        case Wt:
            return xR({
                element: e,
                actionTypeId: n.actionTypeId,
                computedStyle: r,
                getStyle: o
            });
        case yn:
            return {
                value: (0,
                it.default)(o(e, gn), r.display)
            };
        case Qx:
            return t[n.actionTypeId] || {
                value: 0
            };
        default:
            return
        }
    }
    function pR({element: e, actionItem: t, elementApi: r}) {
        if (vt(t.actionTypeId))
            return so(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
        case Gt:
        case Vt:
        case Ut:
        case mr:
            {
                let {xValue: n, yValue: i, zValue: o} = t.config;
                return {
                    xValue: n,
                    yValue: i,
                    zValue: o
                }
            }
        case kt:
            {
                let {getStyle: n, setStyle: i, getProperty: o} = r
                  , {widthUnit: a, heightUnit: s} = t.config
                  , {widthValue: u, heightValue: l} = t.config;
                if (!Be)
                    return {
                        widthValue: u,
                        heightValue: l
                    };
                if (a === dt) {
                    let E = n(e, Qe);
                    i(e, Qe, ""),
                    u = o(e, "offsetWidth"),
                    i(e, Qe, E)
                }
                if (s === dt) {
                    let E = n(e, Ze);
                    i(e, Ze, ""),
                    l = o(e, "offsetHeight"),
                    i(e, Ze, E)
                }
                return {
                    widthValue: u,
                    heightValue: l
                }
            }
        case Bt:
        case Ht:
        case Wt:
            {
                let {rValue: n, gValue: i, bValue: o, aValue: a, globalSwatchId: s} = t.config;
                if (s && s.startsWith("--")) {
                    let {getStyle: u} = r
                      , l = u(e, s)
                      , E = (0,
                    Xd.normalizeColor)(l);
                    return {
                        rValue: E.red,
                        gValue: E.green,
                        bValue: E.blue,
                        aValue: E.alpha
                    }
                }
                return {
                    rValue: n,
                    gValue: i,
                    bValue: o,
                    aValue: a
                }
            }
        case _r:
            return t.config.filters.reduce(lR, {});
        case Ir:
            return t.config.fontVariations.reduce(fR, {});
        default:
            {
                let {value: n} = t.config;
                return {
                    value: n
                }
            }
        }
    }
    function Wd(e) {
        if (/^TRANSFORM_/.test(e))
            return Vd;
        if (/^STYLE_/.test(e))
            return yo;
        if (/^GENERAL_/.test(e))
            return Eo;
        if (/^PLUGIN_/.test(e))
            return Ud
    }
    function gR(e, t) {
        return e === yo ? t.replace("STYLE_", "").toLowerCase() : null
    }
    function hR(e, t, r, n, i, o, a, s, u) {
        switch (s) {
        case Vd:
            return _R(e, t, r, i, a);
        case yo:
            return RR(e, t, r, i, o, a);
        case Eo:
            return CR(e, i, a);
        case Ud:
            {
                let {actionTypeId: l} = i;
                if (vt(l))
                    return uo(l)(u, t, i)
            }
        }
    }
    function _R(e, t, r, n, i) {
        let o = mR.map(s => {
            let u = _o[s]
              , {xValue: l=u.xValue, yValue: E=u.yValue, zValue: p=u.zValue, xUnit: d="", yUnit: h="", zUnit: T=""} = t[s] || {};
            switch (s) {
            case Gt:
                return `${Xx}(${l}${d}, ${E}${h}, ${p}${T})`;
            case Vt:
                return `${Gx}(${l}${d}, ${E}${h}, ${p}${T})`;
            case Ut:
                return `${Vx}(${l}${d}) ${Ux}(${E}${h}) ${kx}(${p}${T})`;
            case mr:
                return `${Bx}(${l}${d}, ${E}${h})`;
            default:
                return ""
            }
        }
        ).join(" ")
          , {setStyle: a} = i;
        _t(e, ft, i),
        a(e, ft, o),
        bR(n, r) && a(e, sn, Hx)
    }
    function IR(e, t, r, n) {
        let i = (0,
        hn.default)(t, (a, s, u) => `${a} ${u}(${s}${vR(u, r)})`, "")
          , {setStyle: o} = n;
        _t(e, Er, n),
        o(e, Er, i)
    }
    function TR(e, t, r, n) {
        let i = (0,
        hn.default)(t, (a, s, u) => (a.push(`"${u}" ${s}`),
        a), []).join(", ")
          , {setStyle: o} = n;
        _t(e, yr, n),
        o(e, yr, i)
    }
    function bR({actionTypeId: e}, {xValue: t, yValue: r, zValue: n}) {
        return e === Gt && n !== void 0 || e === Vt && n !== void 0 || e === Ut && (t !== void 0 || r !== void 0)
    }
    function wR(e, t) {
        let r = e.exec(t);
        return r ? r[1] : ""
    }
    function xR({element: e, actionTypeId: t, computedStyle: r, getStyle: n}) {
        let i = vo[t]
          , o = n(e, i)
          , a = SR.test(o) ? o : r[i]
          , s = wR(OR, a).split(vr);
        return {
            rValue: (0,
            it.default)(parseInt(s[0], 10), 255),
            gValue: (0,
            it.default)(parseInt(s[1], 10), 255),
            bValue: (0,
            it.default)(parseInt(s[2], 10), 255),
            aValue: (0,
            it.default)(parseFloat(s[3]), 1)
        }
    }
    function RR(e, t, r, n, i, o) {
        let {setStyle: a} = o;
        switch (n.actionTypeId) {
        case kt:
            {
                let {widthUnit: s="", heightUnit: u=""} = n.config
                  , {widthValue: l, heightValue: E} = r;
                l !== void 0 && (s === dt && (s = "px"),
                _t(e, Qe, o),
                a(e, Qe, l + s)),
                E !== void 0 && (u === dt && (u = "px"),
                _t(e, Ze, o),
                a(e, Ze, E + u));
                break
            }
        case _r:
            {
                IR(e, r, n.config, o);
                break
            }
        case Ir:
            {
                TR(e, r, n.config, o);
                break
            }
        case Bt:
        case Ht:
        case Wt:
            {
                let s = vo[n.actionTypeId]
                  , u = Math.round(r.rValue)
                  , l = Math.round(r.gValue)
                  , E = Math.round(r.bValue)
                  , p = r.aValue;
                _t(e, s, o),
                a(e, s, p >= 1 ? `rgb(${u},${l},${E})` : `rgba(${u},${l},${E},${p})`);
                break
            }
        default:
            {
                let {unit: s=""} = n.config;
                _t(e, i, o),
                a(e, i, r.value + s);
                break
            }
        }
    }
    function CR(e, t, r) {
        let {setStyle: n} = r;
        switch (t.actionTypeId) {
        case yn:
            {
                let {value: i} = t.config;
                i === Wx && Be ? n(e, gn, Wi) : n(e, gn, i);
                return
            }
        }
    }
    function _t(e, t, r) {
        if (!Be)
            return;
        let n = Hd[t];
        if (!n)
            return;
        let {getStyle: i, setStyle: o} = r
          , a = i(e, Xt);
        if (!a) {
            o(e, Xt, n);
            return
        }
        let s = a.split(vr).map(Bd);
        s.indexOf(n) === -1 && o(e, Xt, s.concat(n).join(vr))
    }
    function zd(e, t, r) {
        if (!Be)
            return;
        let n = Hd[t];
        if (!n)
            return;
        let {getStyle: i, setStyle: o} = r
          , a = i(e, Xt);
        !a || a.indexOf(n) === -1 || o(e, Xt, a.split(vr).map(Bd).filter(s => s !== n).join(vr))
    }
    function LR({store: e, elementApi: t}) {
        let {ixData: r} = e.getState()
          , {events: n={}, actionLists: i={}} = r;
        Object.keys(n).forEach(o => {
            let a = n[o]
              , {config: s} = a.action
              , {actionListId: u} = s
              , l = i[u];
            l && Fd({
                actionList: l,
                event: a,
                elementApi: t
            })
        }
        ),
        Object.keys(i).forEach(o => {
            Fd({
                actionList: i[o],
                elementApi: t
            })
        }
        )
    }
    function Fd({actionList: e={}, event: t, elementApi: r}) {
        let {actionItemGroups: n, continuousParameterGroups: i} = e;
        n && n.forEach(o => {
            qd({
                actionGroup: o,
                event: t,
                elementApi: r
            })
        }
        ),
        i && i.forEach(o => {
            let {continuousActionGroups: a} = o;
            a.forEach(s => {
                qd({
                    actionGroup: s,
                    event: t,
                    elementApi: r
                })
            }
            )
        }
        )
    }
    function qd({actionGroup: e, event: t, elementApi: r}) {
        let {actionItems: n} = e;
        n.forEach(i => {
            let {actionTypeId: o, config: a} = i, s;
            vt(o) ? s = u => co(o)(u, i) : s = Kd({
                effect: NR,
                actionTypeId: o,
                elementApi: r
            }),
            mo({
                config: a,
                event: t,
                elementApi: r
            }).forEach(s)
        }
        )
    }
    function PR(e, t, r) {
        let {setStyle: n, getStyle: i} = r
          , {actionTypeId: o} = t;
        if (o === kt) {
            let {config: a} = t;
            a.widthUnit === dt && n(e, Qe, ""),
            a.heightUnit === dt && n(e, Ze, "")
        }
        i(e, Xt) && Kd({
            effect: zd,
            actionTypeId: o,
            elementApi: r
        })(e)
    }
    function NR(e, t, r) {
        let {setStyle: n} = r;
        zd(e, t, r),
        n(e, t, ""),
        t === ft && n(e, sn, "")
    }
    function jd(e) {
        let t = 0
          , r = 0;
        return e.forEach( (n, i) => {
            let {config: o} = n
              , a = o.delay + o.duration;
            a >= t && (t = a,
            r = i)
        }
        ),
        r
    }
    function DR(e, t) {
        let {actionItemGroups: r, useFirstGroupAsInitialState: n} = e
          , {actionItem: i, verboseTimeElapsed: o=0} = t
          , a = 0
          , s = 0;
        return r.forEach( (u, l) => {
            if (n && l === 0)
                return;
            let {actionItems: E} = u
              , p = E[jd(E)]
              , {config: d, actionTypeId: h} = p;
            i.id === p.id && (s = a + o);
            let T = Wd(h) === Eo ? 0 : d.duration;
            a += d.delay + T
        }
        ),
        a > 0 ? hr(s / a) : 0
    }
    function MR({actionList: e, actionItemId: t, rawData: r}) {
        let {actionItemGroups: n, continuousParameterGroups: i} = e
          , o = []
          , a = s => (o.push((0,
        En.mergeIn)(s, ["config"], {
            delay: 0,
            duration: 0
        })),
        s.id === t);
        return n && n.some( ({actionItems: s}) => s.some(a)),
        i && i.some(s => {
            let {continuousActionGroups: u} = s;
            return u.some( ({actionItems: l}) => l.some(a))
        }
        ),
        (0,
        En.setIn)(r, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: o
                }]
            }
        })
    }
    function FR(e, {basedOn: t}) {
        return e === ke.SCROLLING_IN_VIEW && (t === Ye.ELEMENT || t == null) || e === ke.MOUSE_MOVE && t === Ye.ELEMENT
    }
    function qR(e, t) {
        return e + $x + t
    }
    function XR(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }
    function GR(e, t) {
        return go(e && e.sort(), t && t.sort())
    }
    function VR(e) {
        if (typeof e == "string")
            return e;
        if (e.pluginElement && e.objectId)
            return e.pluginElement + ho + e.objectId;
        if (e.objectId)
            return e.objectId;
        let {id: t="", selector: r="", useEventTarget: n=""} = e;
        return t + ho + r + ho + n
    }
    var it, hn, dn, En, Xd, Fx, qx, Xx, Gx, Vx, Ux, kx, Bx, Hx, Wx, pn, Er, yr, Qe, Ze, Gd, zx, Kx, Pd, jx, Nd, Yx, gn, Xt, dt, vr, $x, ho, Vd, Eo, yo, Ud, Gt, Vt, Ut, mr, kd, _r, Ir, kt, Bt, Ht, Wt, yn, Qx, Bd, vo, Hd, fn, Jx, tR, iR, Md, sR, uR, lR, fR, dR, _o, ER, yR, vR, mR, AR, SR, OR, Kd, $d = Ee( () => {
        "use strict";
        it = ue(fd()),
        hn = ue(Sd()),
        dn = ue(Rd()),
        En = ue(xt());
        Pe();
        Ld();
        ji();
        Xd = ue(Ji());
        lo();
        un();
        ({BACKGROUND: Fx, TRANSFORM: qx, TRANSLATE_3D: Xx, SCALE_3D: Gx, ROTATE_X: Vx, ROTATE_Y: Ux, ROTATE_Z: kx, SKEW: Bx, PRESERVE_3D: Hx, FLEX: Wx, OPACITY: pn, FILTER: Er, FONT_VARIATION_SETTINGS: yr, WIDTH: Qe, HEIGHT: Ze, BACKGROUND_COLOR: Gd, BORDER_COLOR: zx, COLOR: Kx, CHILDREN: Pd, IMMEDIATE_CHILDREN: jx, SIBLINGS: Nd, PARENT: Yx, DISPLAY: gn, WILL_CHANGE: Xt, AUTO: dt, COMMA_DELIMITER: vr, COLON_DELIMITER: $x, BAR_DELIMITER: ho, RENDER_TRANSFORM: Vd, RENDER_GENERAL: Eo, RENDER_STYLE: yo, RENDER_PLUGIN: Ud} = Ae),
        {TRANSFORM_MOVE: Gt, TRANSFORM_SCALE: Vt, TRANSFORM_ROTATE: Ut, TRANSFORM_SKEW: mr, STYLE_OPACITY: kd, STYLE_FILTER: _r, STYLE_FONT_VARIATION: Ir, STYLE_SIZE: kt, STYLE_BACKGROUND_COLOR: Bt, STYLE_BORDER: Ht, STYLE_TEXT_COLOR: Wt, GENERAL_DISPLAY: yn, OBJECT_VALUE: Qx} = Le,
        Bd = e => e.trim(),
        vo = Object.freeze({
            [Bt]: Gd,
            [Ht]: zx,
            [Wt]: Kx
        }),
        Hd = Object.freeze({
            [ft]: qx,
            [Gd]: Fx,
            [pn]: pn,
            [Er]: Er,
            [Qe]: Qe,
            [Ze]: Ze,
            [yr]: yr
        }),
        fn = new Map;
        Jx = 1;
        tR = 1;
        iR = (e, t) => e === t;
        Md = /px/,
        sR = (e, t) => t.reduce( (r, n) => (r[n.type] == null && (r[n.type] = ER[n.type]),
        r), e || {}),
        uR = (e, t) => t.reduce( (r, n) => (r[n.type] == null && (r[n.type] = yR[n.type] || n.defaultValue || 0),
        r), e || {});
        lR = (e, t) => (t && (e[t.type] = t.value || 0),
        e),
        fR = (e, t) => (t && (e[t.type] = t.value || 0),
        e),
        dR = (e, t, r) => {
            if (vt(e))
                return oo(e)(r, t);
            switch (e) {
            case _r:
                {
                    let n = (0,
                    dn.default)(r.filters, ({type: i}) => i === t);
                    return n ? n.value : 0
                }
            case Ir:
                {
                    let n = (0,
                    dn.default)(r.fontVariations, ({type: i}) => i === t);
                    return n ? n.value : 0
                }
            default:
                return r[t]
            }
        }
        ;
        _o = {
            [Gt]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Vt]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [Ut]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [mr]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        },
        ER = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }),
        yR = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }),
        vR = (e, t) => {
            let r = (0,
            dn.default)(t.filters, ({type: n}) => n === e);
            if (r && r.unit)
                return r.unit;
            switch (e) {
            case "blur":
                return "px";
            case "hue-rotate":
                return "deg";
            default:
                return "%"
            }
        }
        ,
        mR = Object.keys(_o);
        AR = "\\(([^)]+)\\)",
        SR = /^rgb/,
        OR = RegExp(`rgba?${AR}`);
        Kd = ({effect: e, actionTypeId: t, elementApi: r}) => n => {
            switch (t) {
            case Gt:
            case Vt:
            case Ut:
            case mr:
                e(n, ft, r);
                break;
            case _r:
                e(n, Er, r);
                break;
            case Ir:
                e(n, yr, r);
                break;
            case kd:
                e(n, pn, r);
                break;
            case kt:
                e(n, Qe, r),
                e(n, Ze, r);
                break;
            case Bt:
            case Ht:
            case Wt:
                e(n, vo[t], r);
                break;
            case yn:
                e(n, gn, r);
                break
            }
        }
    }
    );
    var It = f(Io => {
        "use strict";
        Object.defineProperty(Io, "__esModule", {
            value: !0
        });
        function UR(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }
        UR(Io, {
            IX2BrowserSupport: function() {
                return kR
            },
            IX2EasingUtils: function() {
                return HR
            },
            IX2Easings: function() {
                return BR
            },
            IX2ElementsReducer: function() {
                return WR
            },
            IX2VanillaPlugins: function() {
                return zR
            },
            IX2VanillaUtils: function() {
                return KR
            }
        });
        var kR = zt((un(),
        ze(Hf)))
          , BR = zt((Ki(),
        ze(gr)))
          , HR = zt((ji(),
        ze(Qf)))
          , WR = zt((td(),
        ze(ed)))
          , zR = zt((lo(),
        ze(cd)))
          , KR = zt(($d(),
        ze(Yd)));
        function Qd(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (Qd = function(n) {
                return n ? r : t
            }
            )(e)
        }
        function zt(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || typeof e != "object" && typeof e != "function")
                return {
                    default: e
                };
            var r = Qd(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
    }
    );
    var mn, ot, jR, YR, $R, QR, ZR, JR, vn, Zd, eC, tC, To, rC, nC, iC, oC, Jd, ep = Ee( () => {
        "use strict";
        Pe();
        mn = ue(It()),
        ot = ue(xt()),
        {IX2_RAW_DATA_IMPORTED: jR, IX2_SESSION_STOPPED: YR, IX2_INSTANCE_ADDED: $R, IX2_INSTANCE_STARTED: QR, IX2_INSTANCE_REMOVED: ZR, IX2_ANIMATION_FRAME_CHANGED: JR} = Ie,
        {optimizeFloat: vn, applyEasing: Zd, createBezierEasing: eC} = mn.IX2EasingUtils,
        {RENDER_GENERAL: tC} = Ae,
        {getItemConfigByKey: To, getRenderType: rC, getStyleProp: nC} = mn.IX2VanillaUtils,
        iC = (e, t) => {
            let {position: r, parameterId: n, actionGroups: i, destinationKeys: o, smoothing: a, restingValue: s, actionTypeId: u, customEasingFn: l, skipMotion: E, skipToValue: p} = e
              , {parameters: d} = t.payload
              , h = Math.max(1 - a, .01)
              , T = d[n];
            T == null && (h = 1,
            T = s);
            let _ = Math.max(T, 0) || 0
              , S = vn(_ - r)
              , v = E ? p : vn(r + S * h)
              , x = v * 100;
            if (v === r && e.current)
                return e;
            let O, C, L, R;
            for (let B = 0, {length: W} = i; B < W; B++) {
                let {keyframe: Y, actionItems: te} = i[B];
                if (B === 0 && (O = te[0]),
                x >= Y) {
                    O = te[0];
                    let D = i[B + 1]
                      , b = D && x !== Y;
                    C = b ? D.actionItems[0] : null,
                    b && (L = Y / 100,
                    R = (D.keyframe - Y) / 100)
                }
            }
            let V = {};
            if (O && !C)
                for (let B = 0, {length: W} = o; B < W; B++) {
                    let Y = o[B];
                    V[Y] = To(u, Y, O.config)
                }
            else if (O && C && L !== void 0 && R !== void 0) {
                let B = (v - L) / R
                  , W = O.config.easing
                  , Y = Zd(W, B, l);
                for (let te = 0, {length: D} = o; te < D; te++) {
                    let b = o[te]
                      , P = To(u, b, O.config)
                      , J = (To(u, b, C.config) - P) * Y + P;
                    V[b] = J
                }
            }
            return (0,
            ot.merge)(e, {
                position: v,
                current: V
            })
        }
        ,
        oC = (e, t) => {
            let {active: r, origin: n, start: i, immediate: o, renderType: a, verbose: s, actionItem: u, destination: l, destinationKeys: E, pluginDuration: p, instanceDelay: d, customEasingFn: h, skipMotion: T} = e
              , _ = u.config.easing
              , {duration: S, delay: v} = u.config;
            p != null && (S = p),
            v = d ?? v,
            a === tC ? S = 0 : (o || T) && (S = v = 0);
            let {now: x} = t.payload;
            if (r && n) {
                let O = x - (i + v);
                if (s) {
                    let B = x - i
                      , W = S + v
                      , Y = vn(Math.min(Math.max(0, B / W), 1));
                    e = (0,
                    ot.set)(e, "verboseTimeElapsed", W * Y)
                }
                if (O < 0)
                    return e;
                let C = vn(Math.min(Math.max(0, O / S), 1))
                  , L = Zd(_, C, h)
                  , R = {}
                  , V = null;
                return E.length && (V = E.reduce( (B, W) => {
                    let Y = l[W]
                      , te = parseFloat(n[W]) || 0
                      , b = (parseFloat(Y) - te) * L + te;
                    return B[W] = b,
                    B
                }
                , {})),
                R.current = V,
                R.position = C,
                C === 1 && (R.active = !1,
                R.complete = !0),
                (0,
                ot.merge)(e, R)
            }
            return e
        }
        ,
        Jd = (e=Object.freeze({}), t) => {
            switch (t.type) {
            case jR:
                return t.payload.ixInstances || Object.freeze({});
            case YR:
                return Object.freeze({});
            case $R:
                {
                    let {instanceId: r, elementId: n, actionItem: i, eventId: o, eventTarget: a, eventStateKey: s, actionListId: u, groupIndex: l, isCarrier: E, origin: p, destination: d, immediate: h, verbose: T, continuous: _, parameterId: S, actionGroups: v, smoothing: x, restingValue: O, pluginInstance: C, pluginDuration: L, instanceDelay: R, skipMotion: V, skipToValue: B} = t.payload
                      , {actionTypeId: W} = i
                      , Y = rC(W)
                      , te = nC(Y, W)
                      , D = Object.keys(d).filter(P => d[P] != null && typeof d[P] != "string")
                      , {easing: b} = i.config;
                    return (0,
                    ot.set)(e, r, {
                        id: r,
                        elementId: n,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: p,
                        destination: d,
                        destinationKeys: D,
                        immediate: h,
                        verbose: T,
                        current: null,
                        actionItem: i,
                        actionTypeId: W,
                        eventId: o,
                        eventTarget: a,
                        eventStateKey: s,
                        actionListId: u,
                        groupIndex: l,
                        renderType: Y,
                        isCarrier: E,
                        styleProp: te,
                        continuous: _,
                        parameterId: S,
                        actionGroups: v,
                        smoothing: x,
                        restingValue: O,
                        pluginInstance: C,
                        pluginDuration: L,
                        instanceDelay: R,
                        skipMotion: V,
                        skipToValue: B,
                        customEasingFn: Array.isArray(b) && b.length === 4 ? eC(b) : void 0
                    })
                }
            case QR:
                {
                    let {instanceId: r, time: n} = t.payload;
                    return (0,
                    ot.mergeIn)(e, [r], {
                        active: !0,
                        complete: !1,
                        start: n
                    })
                }
            case ZR:
                {
                    let {instanceId: r} = t.payload;
                    if (!e[r])
                        return e;
                    let n = {}
                      , i = Object.keys(e)
                      , {length: o} = i;
                    for (let a = 0; a < o; a++) {
                        let s = i[a];
                        s !== r && (n[s] = e[s])
                    }
                    return n
                }
            case JR:
                {
                    let r = e
                      , n = Object.keys(e)
                      , {length: i} = n;
                    for (let o = 0; o < i; o++) {
                        let a = n[o]
                          , s = e[a]
                          , u = s.continuous ? iC : oC;
                        r = (0,
                        ot.set)(r, a, u(s, t))
                    }
                    return r
                }
            default:
                return e
            }
        }
    }
    );
    var aC, sC, uC, tp, rp = Ee( () => {
        "use strict";
        Pe();
        ({IX2_RAW_DATA_IMPORTED: aC, IX2_SESSION_STOPPED: sC, IX2_PARAMETER_CHANGED: uC} = Ie),
        tp = (e={}, t) => {
            switch (t.type) {
            case aC:
                return t.payload.ixParameters || {};
            case sC:
                return {};
            case uC:
                {
                    let {key: r, value: n} = t.payload;
                    return e[r] = n,
                    e
                }
            default:
                return e
            }
        }
    }
    );
    var op = {};
    Ce(op, {
        default: () => lC
    });
    var np, ip, cC, lC, ap = Ee( () => {
        "use strict";
        np = ue(di());
        gs();
        Ms();
        Xs();
        ip = ue(It());
        ep();
        rp();
        ({ixElements: cC} = ip.IX2ElementsReducer),
        lC = (0,
        np.combineReducers)({
            ixData: ps,
            ixRequest: Ds,
            ixSession: qs,
            ixElements: cC,
            ixInstances: Jd,
            ixParameters: tp
        })
    }
    );
    var up = f( (k1, sp) => {
        var fC = ut()
          , dC = Te()
          , pC = rt()
          , gC = "[object String]";
        function hC(e) {
            return typeof e == "string" || !dC(e) && pC(e) && fC(e) == gC
        }
        sp.exports = hC
    }
    );
    var lp = f( (B1, cp) => {
        var EC = Vi()
          , yC = EC("length");
        cp.exports = yC
    }
    );
    var dp = f( (H1, fp) => {
        var vC = "\\ud800-\\udfff"
          , mC = "\\u0300-\\u036f"
          , _C = "\\ufe20-\\ufe2f"
          , IC = "\\u20d0-\\u20ff"
          , TC = mC + _C + IC
          , bC = "\\ufe0e\\ufe0f"
          , AC = "\\u200d"
          , SC = RegExp("[" + AC + vC + TC + bC + "]");
        function OC(e) {
            return SC.test(e)
        }
        fp.exports = OC
    }
    );
    var Ip = f( (W1, _p) => {
        var gp = "\\ud800-\\udfff"
          , wC = "\\u0300-\\u036f"
          , xC = "\\ufe20-\\ufe2f"
          , RC = "\\u20d0-\\u20ff"
          , CC = wC + xC + RC
          , LC = "\\ufe0e\\ufe0f"
          , PC = "[" + gp + "]"
          , bo = "[" + CC + "]"
          , Ao = "\\ud83c[\\udffb-\\udfff]"
          , NC = "(?:" + bo + "|" + Ao + ")"
          , hp = "[^" + gp + "]"
          , Ep = "(?:\\ud83c[\\udde6-\\uddff]){2}"
          , yp = "[\\ud800-\\udbff][\\udc00-\\udfff]"
          , DC = "\\u200d"
          , vp = NC + "?"
          , mp = "[" + LC + "]?"
          , MC = "(?:" + DC + "(?:" + [hp, Ep, yp].join("|") + ")" + mp + vp + ")*"
          , FC = mp + vp + MC
          , qC = "(?:" + [hp + bo + "?", bo, Ep, yp, PC].join("|") + ")"
          , pp = RegExp(Ao + "(?=" + Ao + ")|" + qC + FC, "g");
        function XC(e) {
            for (var t = pp.lastIndex = 0; pp.test(e); )
                ++t;
            return t
        }
        _p.exports = XC
    }
    );
    var bp = f( (z1, Tp) => {
        var GC = lp()
          , VC = dp()
          , UC = Ip();
        function kC(e) {
            return VC(e) ? UC(e) : GC(e)
        }
        Tp.exports = kC
    }
    );
    var Sp = f( (K1, Ap) => {
        var BC = Qr()
          , HC = Zr()
          , WC = Et()
          , zC = up()
          , KC = bp()
          , jC = "[object Map]"
          , YC = "[object Set]";
        function $C(e) {
            if (e == null)
                return 0;
            if (WC(e))
                return zC(e) ? KC(e) : e.length;
            var t = HC(e);
            return t == jC || t == YC ? e.size : BC(e).length
        }
        Ap.exports = $C
    }
    );
    var wp = f( (j1, Op) => {
        var QC = "Expected a function";
        function ZC(e) {
            if (typeof e != "function")
                throw new TypeError(QC);
            return function() {
                var t = arguments;
                switch (t.length) {
                case 0:
                    return !e.call(this);
                case 1:
                    return !e.call(this, t[0]);
                case 2:
                    return !e.call(this, t[0], t[1]);
                case 3:
                    return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        Op.exports = ZC
    }
    );
    var So = f( (Y1, xp) => {
        var JC = ct()
          , eL = function() {
            try {
                var e = JC(Object, "defineProperty");
                return e({}, "", {}),
                e
            } catch {}
        }();
        xp.exports = eL
    }
    );
    var Oo = f( ($1, Cp) => {
        var Rp = So();
        function tL(e, t, r) {
            t == "__proto__" && Rp ? Rp(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        Cp.exports = tL
    }
    );
    var Pp = f( (Q1, Lp) => {
        var rL = Oo()
          , nL = Ur()
          , iL = Object.prototype
          , oL = iL.hasOwnProperty;
        function aL(e, t, r) {
            var n = e[t];
            (!(oL.call(e, t) && nL(n, r)) || r === void 0 && !(t in e)) && rL(e, t, r)
        }
        Lp.exports = aL
    }
    );
    var Mp = f( (Z1, Dp) => {
        var sL = Pp()
          , uL = fr()
          , cL = Kr()
          , Np = $e()
          , lL = Ft();
        function fL(e, t, r, n) {
            if (!Np(e))
                return e;
            t = uL(t, e);
            for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
                var u = lL(t[i])
                  , l = r;
                if (u === "__proto__" || u === "constructor" || u === "prototype")
                    return e;
                if (i != a) {
                    var E = s[u];
                    l = n ? n(E, u, s) : void 0,
                    l === void 0 && (l = Np(E) ? E : cL(t[i + 1]) ? [] : {})
                }
                sL(s, u, l),
                s = s[u]
            }
            return e
        }
        Dp.exports = fL
    }
    );
    var qp = f( (J1, Fp) => {
        var dL = tn()
          , pL = Mp()
          , gL = fr();
        function hL(e, t, r) {
            for (var n = -1, i = t.length, o = {}; ++n < i; ) {
                var a = t[n]
                  , s = dL(e, a);
                r(s, a) && pL(o, gL(a, e), s)
            }
            return o
        }
        Fp.exports = hL
    }
    );
    var Gp = f( (eX, Xp) => {
        var EL = Wr()
          , yL = Jn()
          , vL = Si()
          , mL = Ai()
          , _L = Object.getOwnPropertySymbols
          , IL = _L ? function(e) {
            for (var t = []; e; )
                EL(t, vL(e)),
                e = yL(e);
            return t
        }
        : mL;
        Xp.exports = IL
    }
    );
    var Up = f( (tX, Vp) => {
        function TL(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e))
                    t.push(r);
            return t
        }
        Vp.exports = TL
    }
    );
    var Bp = f( (rX, kp) => {
        var bL = $e()
          , AL = $r()
          , SL = Up()
          , OL = Object.prototype
          , wL = OL.hasOwnProperty;
        function xL(e) {
            if (!bL(e))
                return SL(e);
            var t = AL(e)
              , r = [];
            for (var n in e)
                n == "constructor" && (t || !wL.call(e, n)) || r.push(n);
            return r
        }
        kp.exports = xL
    }
    );
    var Wp = f( (nX, Hp) => {
        var RL = wi()
          , CL = Bp()
          , LL = Et();
        function PL(e) {
            return LL(e) ? RL(e, !0) : CL(e)
        }
        Hp.exports = PL
    }
    );
    var Kp = f( (iX, zp) => {
        var NL = bi()
          , DL = Gp()
          , ML = Wp();
        function FL(e) {
            return NL(e, ML, DL)
        }
        zp.exports = FL
    }
    );
    var Yp = f( (oX, jp) => {
        var qL = Gi()
          , XL = lt()
          , GL = qp()
          , VL = Kp();
        function UL(e, t) {
            if (e == null)
                return {};
            var r = qL(VL(e), function(n) {
                return [n]
            });
            return t = XL(t),
            GL(e, r, function(n, i) {
                return t(n, i[0])
            })
        }
        jp.exports = UL
    }
    );
    var Qp = f( (aX, $p) => {
        var kL = lt()
          , BL = wp()
          , HL = Yp();
        function WL(e, t) {
            return HL(e, BL(kL(t)))
        }
        $p.exports = WL
    }
    );
    var Jp = f( (sX, Zp) => {
        var zL = Qr()
          , KL = Zr()
          , jL = or()
          , YL = Te()
          , $L = Et()
          , QL = zr()
          , ZL = $r()
          , JL = Yr()
          , eP = "[object Map]"
          , tP = "[object Set]"
          , rP = Object.prototype
          , nP = rP.hasOwnProperty;
        function iP(e) {
            if (e == null)
                return !0;
            if ($L(e) && (YL(e) || typeof e == "string" || typeof e.splice == "function" || QL(e) || JL(e) || jL(e)))
                return !e.length;
            var t = KL(e);
            if (t == eP || t == tP)
                return !e.size;
            if (ZL(e))
                return !zL(e).length;
            for (var r in e)
                if (nP.call(e, r))
                    return !1;
            return !0
        }
        Zp.exports = iP
    }
    );
    var tg = f( (uX, eg) => {
        var oP = Oo()
          , aP = fo()
          , sP = lt();
        function uP(e, t) {
            var r = {};
            return t = sP(t, 3),
            aP(e, function(n, i, o) {
                oP(r, i, t(n, i, o))
            }),
            r
        }
        eg.exports = uP
    }
    );
    var ng = f( (cX, rg) => {
        function cP(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
                ;
            return e
        }
        rg.exports = cP
    }
    );
    var og = f( (lX, ig) => {
        var lP = nn();
        function fP(e) {
            return typeof e == "function" ? e : lP
        }
        ig.exports = fP
    }
    );
    var sg = f( (fX, ag) => {
        var dP = ng()
          , pP = po()
          , gP = og()
          , hP = Te();
        function EP(e, t) {
            var r = hP(e) ? dP : pP;
            return r(e, gP(t))
        }
        ag.exports = EP
    }
    );
    var cg = f( (dX, ug) => {
        var yP = Ue()
          , vP = function() {
            return yP.Date.now()
        };
        ug.exports = vP
    }
    );
    var dg = f( (pX, fg) => {
        var mP = $e()
          , wo = cg()
          , lg = on()
          , _P = "Expected a function"
          , IP = Math.max
          , TP = Math.min;
        function bP(e, t, r) {
            var n, i, o, a, s, u, l = 0, E = !1, p = !1, d = !0;
            if (typeof e != "function")
                throw new TypeError(_P);
            t = lg(t) || 0,
            mP(r) && (E = !!r.leading,
            p = "maxWait"in r,
            o = p ? IP(lg(r.maxWait) || 0, t) : o,
            d = "trailing"in r ? !!r.trailing : d);
            function h(R) {
                var V = n
                  , B = i;
                return n = i = void 0,
                l = R,
                a = e.apply(B, V),
                a
            }
            function T(R) {
                return l = R,
                s = setTimeout(v, t),
                E ? h(R) : a
            }
            function _(R) {
                var V = R - u
                  , B = R - l
                  , W = t - V;
                return p ? TP(W, o - B) : W
            }
            function S(R) {
                var V = R - u
                  , B = R - l;
                return u === void 0 || V >= t || V < 0 || p && B >= o
            }
            function v() {
                var R = wo();
                if (S(R))
                    return x(R);
                s = setTimeout(v, _(R))
            }
            function x(R) {
                return s = void 0,
                d && n ? h(R) : (n = i = void 0,
                a)
            }
            function O() {
                s !== void 0 && clearTimeout(s),
                l = 0,
                n = u = i = s = void 0
            }
            function C() {
                return s === void 0 ? a : x(wo())
            }
            function L() {
                var R = wo()
                  , V = S(R);
                if (n = arguments,
                i = this,
                u = R,
                V) {
                    if (s === void 0)
                        return T(u);
                    if (p)
                        return clearTimeout(s),
                        s = setTimeout(v, t),
                        h(u)
                }
                return s === void 0 && (s = setTimeout(v, t)),
                a
            }
            return L.cancel = O,
            L.flush = C,
            L
        }
        fg.exports = bP
    }
    );
    var gg = f( (gX, pg) => {
        var AP = dg()
          , SP = $e()
          , OP = "Expected a function";
        function wP(e, t, r) {
            var n = !0
              , i = !0;
            if (typeof e != "function")
                throw new TypeError(OP);
            return SP(r) && (n = "leading"in r ? !!r.leading : n,
            i = "trailing"in r ? !!r.trailing : i),
            AP(e, t, {
                leading: n,
                maxWait: t,
                trailing: i
            })
        }
        pg.exports = wP
    }
    );
    var Eg = {};
    Ce(Eg, {
        actionListPlaybackChanged: () => jt,
        animationFrameChanged: () => In,
        clearRequested: () => ZP,
        elementStateChanged: () => Mo,
        eventListenerAdded: () => _n,
        eventStateChanged: () => Po,
        instanceAdded: () => No,
        instanceRemoved: () => Do,
        instanceStarted: () => Tn,
        mediaQueriesDefined: () => qo,
        parameterChanged: () => Kt,
        playbackRequested: () => $P,
        previewRequested: () => YP,
        rawDataImported: () => xo,
        sessionInitialized: () => Ro,
        sessionStarted: () => Co,
        sessionStopped: () => Lo,
        stopRequested: () => QP,
        testFrameRendered: () => JP,
        viewportWidthChanged: () => Fo
    });
    var hg, xP, RP, CP, LP, PP, NP, DP, MP, FP, qP, XP, GP, VP, UP, kP, BP, HP, WP, zP, KP, jP, xo, Ro, Co, Lo, YP, $P, QP, ZP, _n, JP, Po, In, Kt, No, Tn, Do, Mo, jt, Fo, qo, bn = Ee( () => {
        "use strict";
        Pe();
        hg = ue(It()),
        {IX2_RAW_DATA_IMPORTED: xP, IX2_SESSION_INITIALIZED: RP, IX2_SESSION_STARTED: CP, IX2_SESSION_STOPPED: LP, IX2_PREVIEW_REQUESTED: PP, IX2_PLAYBACK_REQUESTED: NP, IX2_STOP_REQUESTED: DP, IX2_CLEAR_REQUESTED: MP, IX2_EVENT_LISTENER_ADDED: FP, IX2_TEST_FRAME_RENDERED: qP, IX2_EVENT_STATE_CHANGED: XP, IX2_ANIMATION_FRAME_CHANGED: GP, IX2_PARAMETER_CHANGED: VP, IX2_INSTANCE_ADDED: UP, IX2_INSTANCE_STARTED: kP, IX2_INSTANCE_REMOVED: BP, IX2_ELEMENT_STATE_CHANGED: HP, IX2_ACTION_LIST_PLAYBACK_CHANGED: WP, IX2_VIEWPORT_WIDTH_CHANGED: zP, IX2_MEDIA_QUERIES_DEFINED: KP} = Ie,
        {reifyState: jP} = hg.IX2VanillaUtils,
        xo = e => ({
            type: xP,
            payload: {
                ...jP(e)
            }
        }),
        Ro = ({hasBoundaryNodes: e, reducedMotion: t}) => ({
            type: RP,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }),
        Co = () => ({
            type: CP
        }),
        Lo = () => ({
            type: LP
        }),
        YP = ({rawData: e, defer: t}) => ({
            type: PP,
            payload: {
                defer: t,
                rawData: e
            }
        }),
        $P = ({actionTypeId: e=Le.GENERAL_START_ACTION, actionListId: t, actionItemId: r, eventId: n, allowEvents: i, immediate: o, testManual: a, verbose: s, rawData: u}) => ({
            type: NP,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: a,
                eventId: n,
                allowEvents: i,
                immediate: o,
                verbose: s,
                rawData: u
            }
        }),
        QP = e => ({
            type: DP,
            payload: {
                actionListId: e
            }
        }),
        ZP = () => ({
            type: MP
        }),
        _n = (e, t) => ({
            type: FP,
            payload: {
                target: e,
                listenerParams: t
            }
        }),
        JP = (e=1) => ({
            type: qP,
            payload: {
                step: e
            }
        }),
        Po = (e, t) => ({
            type: XP,
            payload: {
                stateKey: e,
                newState: t
            }
        }),
        In = (e, t) => ({
            type: GP,
            payload: {
                now: e,
                parameters: t
            }
        }),
        Kt = (e, t) => ({
            type: VP,
            payload: {
                key: e,
                value: t
            }
        }),
        No = e => ({
            type: UP,
            payload: {
                ...e
            }
        }),
        Tn = (e, t) => ({
            type: kP,
            payload: {
                instanceId: e,
                time: t
            }
        }),
        Do = e => ({
            type: BP,
            payload: {
                instanceId: e
            }
        }),
        Mo = (e, t, r, n) => ({
            type: HP,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        }),
        jt = ({actionListId: e, isPlaying: t}) => ({
            type: WP,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }),
        Fo = ({width: e, mediaQueries: t}) => ({
            type: zP,
            payload: {
                width: e,
                mediaQueries: t
            }
        }),
        qo = () => ({
            type: KP
        })
    }
    );
    var xe = {};
    Ce(xe, {
        elementContains: () => Vo,
        getChildElements: () => cN,
        getClosestElement: () => Tr,
        getProperty: () => iN,
        getQuerySelector: () => Go,
        getRefType: () => Uo,
        getSiblingElements: () => lN,
        getStyle: () => nN,
        getValidDocument: () => aN,
        isSiblingNode: () => uN,
        matchSelector: () => oN,
        queryDocument: () => sN,
        setStyle: () => rN
    });
    function rN(e, t, r) {
        e.style[t] = r
    }
    function nN(e, t) {
        return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
    }
    function iN(e, t) {
        return e[t]
    }
    function oN(e) {
        return t => t[Xo](e)
    }
    function Go({id: e, selector: t}) {
        if (e) {
            let r = e;
            if (e.indexOf(yg) !== -1) {
                let n = e.split(yg)
                  , i = n[0];
                if (r = n[1],
                i !== document.documentElement.getAttribute(mg))
                    return null
            }
            return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
        }
        return t
    }
    function aN(e) {
        return e == null || e === document.documentElement.getAttribute(mg) ? document : null
    }
    function sN(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }
    function Vo(e, t) {
        return e.contains(t)
    }
    function uN(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }
    function cN(e) {
        let t = [];
        for (let r = 0, {length: n} = e || []; r < n; r++) {
            let {children: i} = e[r]
              , {length: o} = i;
            if (o)
                for (let a = 0; a < o; a++)
                    t.push(i[a])
        }
        return t
    }
    function lN(e=[]) {
        let t = []
          , r = [];
        for (let n = 0, {length: i} = e; n < i; n++) {
            let {parentNode: o} = e[n];
            if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
                continue;
            r.push(o);
            let a = o.firstElementChild;
            for (; a != null; )
                e.indexOf(a) === -1 && t.push(a),
                a = a.nextElementSibling
        }
        return t
    }
    function Uo(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? eN : tN : null
    }
    var vg, Xo, yg, eN, tN, mg, Tr, _g = Ee( () => {
        "use strict";
        vg = ue(It());
        Pe();
        ({ELEMENT_MATCHES: Xo} = vg.IX2BrowserSupport),
        {IX2_ID_DELIMITER: yg, HTML_ELEMENT: eN, PLAIN_OBJECT: tN, WF_PAGE: mg} = Ae;
        Tr = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e))
                return null;
            let r = e;
            do {
                if (r[Xo] && r[Xo](t))
                    return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
    }
    );
    var ko = f( (yX, Tg) => {
        var fN = $e()
          , Ig = Object.create
          , dN = function() {
            function e() {}
            return function(t) {
                if (!fN(t))
                    return {};
                if (Ig)
                    return Ig(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0,
                r
            }
        }();
        Tg.exports = dN
    }
    );
    var An = f( (vX, bg) => {
        function pN() {}
        bg.exports = pN
    }
    );
    var On = f( (mX, Ag) => {
        var gN = ko()
          , hN = An();
        function Sn(e, t) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__chain__ = !!t,
            this.__index__ = 0,
            this.__values__ = void 0
        }
        Sn.prototype = gN(hN.prototype);
        Sn.prototype.constructor = Sn;
        Ag.exports = Sn
    }
    );
    var xg = f( (_X, wg) => {
        var Sg = St()
          , EN = or()
          , yN = Te()
          , Og = Sg ? Sg.isConcatSpreadable : void 0;
        function vN(e) {
            return yN(e) || EN(e) || !!(Og && e && e[Og])
        }
        wg.exports = vN
    }
    );
    var Lg = f( (IX, Cg) => {
        var mN = Wr()
          , _N = xg();
        function Rg(e, t, r, n, i) {
            var o = -1
              , a = e.length;
            for (r || (r = _N),
            i || (i = []); ++o < a; ) {
                var s = e[o];
                t > 0 && r(s) ? t > 1 ? Rg(s, t - 1, r, n, i) : mN(i, s) : n || (i[i.length] = s)
            }
            return i
        }
        Cg.exports = Rg
    }
    );
    var Ng = f( (TX, Pg) => {
        var IN = Lg();
        function TN(e) {
            var t = e == null ? 0 : e.length;
            return t ? IN(e, 1) : []
        }
        Pg.exports = TN
    }
    );
    var Mg = f( (bX, Dg) => {
        function bN(e, t, r) {
            switch (r.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, r[0]);
            case 2:
                return e.call(t, r[0], r[1]);
            case 3:
                return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        Dg.exports = bN
    }
    );
    var Xg = f( (AX, qg) => {
        var AN = Mg()
          , Fg = Math.max;
        function SN(e, t, r) {
            return t = Fg(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, i = -1, o = Fg(n.length - t, 0), a = Array(o); ++i < o; )
                    a[i] = n[t + i];
                i = -1;
                for (var s = Array(t + 1); ++i < t; )
                    s[i] = n[i];
                return s[t] = r(a),
                AN(e, this, s)
            }
        }
        qg.exports = SN
    }
    );
    var Vg = f( (SX, Gg) => {
        function ON(e) {
            return function() {
                return e
            }
        }
        Gg.exports = ON
    }
    );
    var Bg = f( (OX, kg) => {
        var wN = Vg()
          , Ug = So()
          , xN = nn()
          , RN = Ug ? function(e, t) {
            return Ug(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: wN(t),
                writable: !0
            })
        }
        : xN;
        kg.exports = RN
    }
    );
    var Wg = f( (wX, Hg) => {
        var CN = 800
          , LN = 16
          , PN = Date.now;
        function NN(e) {
            var t = 0
              , r = 0;
            return function() {
                var n = PN()
                  , i = LN - (n - r);
                if (r = n,
                i > 0) {
                    if (++t >= CN)
                        return arguments[0]
                } else
                    t = 0;
                return e.apply(void 0, arguments)
            }
        }
        Hg.exports = NN
    }
    );
    var Kg = f( (xX, zg) => {
        var DN = Bg()
          , MN = Wg()
          , FN = MN(DN);
        zg.exports = FN
    }
    );
    var Yg = f( (RX, jg) => {
        var qN = Ng()
          , XN = Xg()
          , GN = Kg();
        function VN(e) {
            return GN(XN(e, void 0, qN), e + "")
        }
        jg.exports = VN
    }
    );
    var Zg = f( (CX, Qg) => {
        var $g = xi()
          , UN = $g && new $g;
        Qg.exports = UN
    }
    );
    var eh = f( (LX, Jg) => {
        function kN() {}
        Jg.exports = kN
    }
    );
    var Bo = f( (PX, rh) => {
        var th = Zg()
          , BN = eh()
          , HN = th ? function(e) {
            return th.get(e)
        }
        : BN;
        rh.exports = HN
    }
    );
    var ih = f( (NX, nh) => {
        var WN = {};
        nh.exports = WN
    }
    );
    var Ho = f( (DX, ah) => {
        var oh = ih()
          , zN = Object.prototype
          , KN = zN.hasOwnProperty;
        function jN(e) {
            for (var t = e.name + "", r = oh[t], n = KN.call(oh, t) ? r.length : 0; n--; ) {
                var i = r[n]
                  , o = i.func;
                if (o == null || o == e)
                    return i.name
            }
            return t
        }
        ah.exports = jN
    }
    );
    var xn = f( (MX, sh) => {
        var YN = ko()
          , $N = An()
          , QN = 4294967295;
        function wn(e) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__dir__ = 1,
            this.__filtered__ = !1,
            this.__iteratees__ = [],
            this.__takeCount__ = QN,
            this.__views__ = []
        }
        wn.prototype = YN($N.prototype);
        wn.prototype.constructor = wn;
        sh.exports = wn
    }
    );
    var ch = f( (FX, uh) => {
        function ZN(e, t) {
            var r = -1
              , n = e.length;
            for (t || (t = Array(n)); ++r < n; )
                t[r] = e[r];
            return t
        }
        uh.exports = ZN
    }
    );
    var fh = f( (qX, lh) => {
        var JN = xn()
          , eD = On()
          , tD = ch();
        function rD(e) {
            if (e instanceof JN)
                return e.clone();
            var t = new eD(e.__wrapped__,e.__chain__);
            return t.__actions__ = tD(e.__actions__),
            t.__index__ = e.__index__,
            t.__values__ = e.__values__,
            t
        }
        lh.exports = rD
    }
    );
    var gh = f( (XX, ph) => {
        var nD = xn()
          , dh = On()
          , iD = An()
          , oD = Te()
          , aD = rt()
          , sD = fh()
          , uD = Object.prototype
          , cD = uD.hasOwnProperty;
        function Rn(e) {
            if (aD(e) && !oD(e) && !(e instanceof nD)) {
                if (e instanceof dh)
                    return e;
                if (cD.call(e, "__wrapped__"))
                    return sD(e)
            }
            return new dh(e)
        }
        Rn.prototype = iD.prototype;
        Rn.prototype.constructor = Rn;
        ph.exports = Rn
    }
    );
    var Eh = f( (GX, hh) => {
        var lD = xn()
          , fD = Bo()
          , dD = Ho()
          , pD = gh();
        function gD(e) {
            var t = dD(e)
              , r = pD[t];
            if (typeof r != "function" || !(t in lD.prototype))
                return !1;
            if (e === r)
                return !0;
            var n = fD(r);
            return !!n && e === n[0]
        }
        hh.exports = gD
    }
    );
    var _h = f( (VX, mh) => {
        var yh = On()
          , hD = Yg()
          , ED = Bo()
          , Wo = Ho()
          , yD = Te()
          , vh = Eh()
          , vD = "Expected a function"
          , mD = 8
          , _D = 32
          , ID = 128
          , TD = 256;
        function bD(e) {
            return hD(function(t) {
                var r = t.length
                  , n = r
                  , i = yh.prototype.thru;
                for (e && t.reverse(); n--; ) {
                    var o = t[n];
                    if (typeof o != "function")
                        throw new TypeError(vD);
                    if (i && !a && Wo(o) == "wrapper")
                        var a = new yh([],!0)
                }
                for (n = a ? n : r; ++n < r; ) {
                    o = t[n];
                    var s = Wo(o)
                      , u = s == "wrapper" ? ED(o) : void 0;
                    u && vh(u[0]) && u[1] == (ID | mD | _D | TD) && !u[4].length && u[9] == 1 ? a = a[Wo(u[0])].apply(a, u[3]) : a = o.length == 1 && vh(o) ? a[s]() : a.thru(o)
                }
                return function() {
                    var l = arguments
                      , E = l[0];
                    if (a && l.length == 1 && yD(E))
                        return a.plant(E).value();
                    for (var p = 0, d = r ? t[p].apply(this, l) : E; ++p < r; )
                        d = t[p].call(this, d);
                    return d
                }
            })
        }
        mh.exports = bD
    }
    );
    var Th = f( (UX, Ih) => {
        var AD = _h()
          , SD = AD();
        Ih.exports = SD
    }
    );
    var Ah = f( (kX, bh) => {
        function OD(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r),
            t !== void 0 && (e = e >= t ? e : t)),
            e
        }
        bh.exports = OD
    }
    );
    var Oh = f( (BX, Sh) => {
        var wD = Ah()
          , zo = on();
        function xD(e, t, r) {
            return r === void 0 && (r = t,
            t = void 0),
            r !== void 0 && (r = zo(r),
            r = r === r ? r : 0),
            t !== void 0 && (t = zo(t),
            t = t === t ? t : 0),
            wD(zo(e), t, r)
        }
        Sh.exports = xD
    }
    );
    var Mh, Fh, qh, Xh, RD, CD, LD, PD, ND, DD, MD, FD, qD, XD, GD, VD, UD, kD, BD, Gh, Vh, HD, WD, zD, Uh, KD, jD, kh, YD, Ko, Bh, wh, xh, Hh, Ar, $D, Je, Wh, QD, De, He, Sr, zh, jo, Rh, Yo, ZD, br, JD, eM, tM, Kh, Ch, rM, Lh, nM, iM, oM, Ph, Cn, Ln, Nh, Dh, jh, Yh = Ee( () => {
        "use strict";
        Mh = ue(Th()),
        Fh = ue(rn()),
        qh = ue(Oh());
        Pe();
        $o();
        bn();
        Xh = ue(It()),
        {MOUSE_CLICK: RD, MOUSE_SECOND_CLICK: CD, MOUSE_DOWN: LD, MOUSE_UP: PD, MOUSE_OVER: ND, MOUSE_OUT: DD, DROPDOWN_CLOSE: MD, DROPDOWN_OPEN: FD, SLIDER_ACTIVE: qD, SLIDER_INACTIVE: XD, TAB_ACTIVE: GD, TAB_INACTIVE: VD, NAVBAR_CLOSE: UD, NAVBAR_OPEN: kD, MOUSE_MOVE: BD, PAGE_SCROLL_DOWN: Gh, SCROLL_INTO_VIEW: Vh, SCROLL_OUT_OF_VIEW: HD, PAGE_SCROLL_UP: WD, SCROLLING_IN_VIEW: zD, PAGE_FINISH: Uh, ECOMMERCE_CART_CLOSE: KD, ECOMMERCE_CART_OPEN: jD, PAGE_START: kh, PAGE_SCROLL: YD} = ke,
        Ko = "COMPONENT_ACTIVE",
        Bh = "COMPONENT_INACTIVE",
        {COLON_DELIMITER: wh} = Ae,
        {getNamespacedParameterId: xh} = Xh.IX2VanillaUtils,
        Hh = e => t => typeof t == "object" && e(t) ? !0 : t,
        Ar = Hh( ({element: e, nativeEvent: t}) => e === t.target),
        $D = Hh( ({element: e, nativeEvent: t}) => e.contains(t.target)),
        Je = (0,
        Mh.default)([Ar, $D]),
        Wh = (e, t) => {
            if (t) {
                let {ixData: r} = e.getState()
                  , {events: n} = r
                  , i = n[t];
                if (i && !ZD[i.eventTypeId])
                    return i
            }
            return null
        }
        ,
        QD = ({store: e, event: t}) => {
            let {action: r} = t
              , {autoStopEventId: n} = r.config;
            return !!Wh(e, n)
        }
        ,
        De = ({store: e, event: t, element: r, eventStateKey: n}, i) => {
            let {action: o, id: a} = t
              , {actionListId: s, autoStopEventId: u} = o.config
              , l = Wh(e, u);
            return l && Yt({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + wh + n.split(wh)[1],
                actionListId: (0,
                Fh.default)(l, "action.config.actionListId")
            }),
            Yt({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }),
            Or({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }),
            i
        }
        ,
        He = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
        Sr = {
            handler: He(Je, De)
        },
        zh = {
            ...Sr,
            types: [Ko, Bh].join(" ")
        },
        jo = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }],
        Rh = "mouseover mouseout",
        Yo = {
            types: jo
        },
        ZD = {
            PAGE_START: kh,
            PAGE_FINISH: Uh
        },
        br = ( () => {
            let e = window.pageXOffset !== void 0
              , r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0,
                qh.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        }
        )(),
        JD = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top),
        eM = ({element: e, nativeEvent: t}) => {
            let {type: r, target: n, relatedTarget: i} = t
              , o = e.contains(n);
            if (r === "mouseover" && o)
                return !0;
            let a = e.contains(i);
            return !!(r === "mouseout" && o && a)
        }
        ,
        tM = e => {
            let {element: t, event: {config: r}} = e
              , {clientWidth: n, clientHeight: i} = br()
              , o = r.scrollOffsetValue
              , u = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return JD(t.getBoundingClientRect(), {
                left: 0,
                top: u,
                right: n,
                bottom: i - u
            })
        }
        ,
        Kh = e => (t, r) => {
            let {type: n} = t.nativeEvent
              , i = [Ko, Bh].indexOf(n) !== -1 ? n === Ko : r.isActive
              , o = {
                ...r,
                isActive: i
            };
            return (!r || o.isActive !== r.isActive) && e(t, o) || o
        }
        ,
        Ch = e => (t, r) => {
            let n = {
                elementHovered: eM(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }
        ,
        rM = e => (t, r) => {
            let n = {
                ...r,
                elementVisible: tM(t)
            };
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }
        ,
        Lh = e => (t, r={}) => {
            let {stiffScrollTop: n, scrollHeight: i, innerHeight: o} = br()
              , {event: {config: a, eventTypeId: s}} = t
              , {scrollOffsetValue: u, scrollOffsetUnit: l} = a
              , E = l === "PX"
              , p = i - o
              , d = Number((n / p).toFixed(2));
            if (r && r.percentTop === d)
                return r;
            let h = (E ? u : o * (u || 0) / 100) / p, T, _, S = 0;
            r && (T = d > r.percentTop,
            _ = r.scrollingDown !== T,
            S = _ ? d : r.anchorTop);
            let v = s === Gh ? d >= S + h : d <= S - h
              , x = {
                ...r,
                percentTop: d,
                inBounds: v,
                anchorTop: S,
                scrollingDown: T
            };
            return r && v && (_ || x.inBounds !== r.inBounds) && e(t, x) || x
        }
        ,
        nM = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom,
        iM = e => (t, r) => {
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t),
            n
        }
        ,
        oM = e => (t, r) => {
            let n = {
                started: !0
            };
            return r || e(t),
            n
        }
        ,
        Ph = e => (t, r={
            clickCount: 0
        }) => {
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }
        ,
        Cn = (e=!0) => ({
            ...zh,
            handler: He(e ? Je : Ar, Kh( (t, r) => r.isActive ? Sr.handler(t, r) : r))
        }),
        Ln = (e=!0) => ({
            ...zh,
            handler: He(e ? Je : Ar, Kh( (t, r) => r.isActive ? r : Sr.handler(t, r)))
        }),
        Nh = {
            ...Yo,
            handler: rM( (e, t) => {
                let {elementVisible: r} = t
                  , {event: n, store: i} = e
                  , {ixData: o} = i.getState()
                  , {events: a} = o;
                return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === Vh === r ? (De(e),
                {
                    ...t,
                    triggered: !0
                }) : t
            }
            )
        },
        Dh = .05,
        jh = {
            [qD]: Cn(),
            [XD]: Ln(),
            [FD]: Cn(),
            [MD]: Ln(),
            [kD]: Cn(!1),
            [UD]: Ln(!1),
            [GD]: Cn(),
            [VD]: Ln(),
            [jD]: {
                types: "ecommerce-cart-open",
                handler: He(Je, De)
            },
            [KD]: {
                types: "ecommerce-cart-close",
                handler: He(Je, De)
            },
            [RD]: {
                types: "click",
                handler: He(Je, Ph( (e, {clickCount: t}) => {
                    QD(e) ? t === 1 && De(e) : De(e)
                }
                ))
            },
            [CD]: {
                types: "click",
                handler: He(Je, Ph( (e, {clickCount: t}) => {
                    t === 2 && De(e)
                }
                ))
            },
            [LD]: {
                ...Sr,
                types: "mousedown"
            },
            [PD]: {
                ...Sr,
                types: "mouseup"
            },
            [ND]: {
                types: Rh,
                handler: He(Je, Ch( (e, t) => {
                    t.elementHovered && De(e)
                }
                ))
            },
            [DD]: {
                types: Rh,
                handler: He(Je, Ch( (e, t) => {
                    t.elementHovered || De(e)
                }
                ))
            },
            [BD]: {
                types: "mousemove mouseout scroll",
                handler: ({store: e, element: t, eventConfig: r, nativeEvent: n, eventStateKey: i}, o={
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {basedOn: a, selectedAxis: s, continuousParameterGroupId: u, reverse: l, restingState: E=0} = r
                      , {clientX: p=o.clientX, clientY: d=o.clientY, pageX: h=o.pageX, pageY: T=o.pageY} = n
                      , _ = s === "X_AXIS"
                      , S = n.type === "mouseout"
                      , v = E / 100
                      , x = u
                      , O = !1;
                    switch (a) {
                    case Ye.VIEWPORT:
                        {
                            v = _ ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(d, window.innerHeight) / window.innerHeight;
                            break
                        }
                    case Ye.PAGE:
                        {
                            let {scrollLeft: C, scrollTop: L, scrollWidth: R, scrollHeight: V} = br();
                            v = _ ? Math.min(C + h, R) / R : Math.min(L + T, V) / V;
                            break
                        }
                    case Ye.ELEMENT:
                    default:
                        {
                            x = xh(i, u);
                            let C = n.type.indexOf("mouse") === 0;
                            if (C && Je({
                                element: t,
                                nativeEvent: n
                            }) !== !0)
                                break;
                            let L = t.getBoundingClientRect()
                              , {left: R, top: V, width: B, height: W} = L;
                            if (!C && !nM({
                                left: p,
                                top: d
                            }, L))
                                break;
                            O = !0,
                            v = _ ? (p - R) / B : (d - V) / W;
                            break
                        }
                    }
                    return S && (v > 1 - Dh || v < Dh) && (v = Math.round(v)),
                    (a !== Ye.ELEMENT || O || O !== o.elementHovered) && (v = l ? 1 - v : v,
                    e.dispatch(Kt(x, v))),
                    {
                        elementHovered: O,
                        clientX: p,
                        clientY: d,
                        pageX: h,
                        pageY: T
                    }
                }
            },
            [YD]: {
                types: jo,
                handler: ({store: e, eventConfig: t}) => {
                    let {continuousParameterGroupId: r, reverse: n} = t
                      , {scrollTop: i, scrollHeight: o, clientHeight: a} = br()
                      , s = i / (o - a);
                    s = n ? 1 - s : s,
                    e.dispatch(Kt(r, s))
                }
            },
            [zD]: {
                types: jo,
                handler: ({element: e, store: t, eventConfig: r, eventStateKey: n}, i={
                    scrollPercent: 0
                }) => {
                    let {scrollLeft: o, scrollTop: a, scrollWidth: s, scrollHeight: u, clientHeight: l} = br()
                      , {basedOn: E, selectedAxis: p, continuousParameterGroupId: d, startsEntering: h, startsExiting: T, addEndOffset: _, addStartOffset: S, addOffsetValue: v=0, endOffsetValue: x=0} = r
                      , O = p === "X_AXIS";
                    if (E === Ye.VIEWPORT) {
                        let C = O ? o / s : a / u;
                        return C !== i.scrollPercent && t.dispatch(Kt(d, C)),
                        {
                            scrollPercent: C
                        }
                    } else {
                        let C = xh(n, d)
                          , L = e.getBoundingClientRect()
                          , R = (S ? v : 0) / 100
                          , V = (_ ? x : 0) / 100;
                        R = h ? R : 1 - R,
                        V = T ? V : 1 - V;
                        let B = L.top + Math.min(L.height * R, l)
                          , Y = L.top + L.height * V - B
                          , te = Math.min(l + Y, u)
                          , b = Math.min(Math.max(0, l - B), te) / te;
                        return b !== i.scrollPercent && t.dispatch(Kt(C, b)),
                        {
                            scrollPercent: b
                        }
                    }
                }
            },
            [Vh]: Nh,
            [HD]: Nh,
            [Gh]: {
                ...Yo,
                handler: Lh( (e, t) => {
                    t.scrollingDown && De(e)
                }
                )
            },
            [WD]: {
                ...Yo,
                handler: Lh( (e, t) => {
                    t.scrollingDown || De(e)
                }
                )
            },
            [Uh]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: He(Ar, iM(De))
            },
            [kh]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: He(Ar, oM(De))
            }
        }
    }
    );
    var dE = {};
    Ce(dE, {
        observeRequests: () => SM,
        startActionGroup: () => Or,
        startEngine: () => qn,
        stopActionGroup: () => Yt,
        stopAllActionGroups: () => cE,
        stopEngine: () => Xn
    });
    function SM(e) {
        Tt({
            store: e,
            select: ({ixRequest: t}) => t.preview,
            onChange: xM
        }),
        Tt({
            store: e,
            select: ({ixRequest: t}) => t.playback,
            onChange: RM
        }),
        Tt({
            store: e,
            select: ({ixRequest: t}) => t.stop,
            onChange: CM
        }),
        Tt({
            store: e,
            select: ({ixRequest: t}) => t.clear,
            onChange: LM
        })
    }
    function OM(e) {
        Tt({
            store: e,
            select: ({ixSession: t}) => t.mediaQueryKey,
            onChange: () => {
                Xn(e),
                oE({
                    store: e,
                    elementApi: xe
                }),
                qn({
                    store: e,
                    allowEvents: !0
                }),
                aE()
            }
        })
    }
    function wM(e, t) {
        let r = Tt({
            store: e,
            select: ({ixSession: n}) => n.tick,
            onChange: n => {
                t(n),
                r()
            }
        })
    }
    function xM({rawData: e, defer: t}, r) {
        let n = () => {
            qn({
                store: r,
                rawData: e,
                allowEvents: !0
            }),
            aE()
        }
        ;
        t ? setTimeout(n, 0) : n()
    }
    function aE() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }
    function RM(e, t) {
        let {actionTypeId: r, actionListId: n, actionItemId: i, eventId: o, allowEvents: a, immediate: s, testManual: u, verbose: l=!0} = e
          , {rawData: E} = e;
        if (n && i && E && s) {
            let p = E.actionLists[n];
            p && (E = gM({
                actionList: p,
                actionItemId: i,
                rawData: E
            }))
        }
        if (qn({
            store: t,
            rawData: E,
            allowEvents: a,
            testManual: u
        }),
        n && r === Le.GENERAL_START_ACTION || Qo(r)) {
            Yt({
                store: t,
                actionListId: n
            }),
            uE({
                store: t,
                actionListId: n,
                eventId: o
            });
            let p = Or({
                store: t,
                eventId: o,
                actionListId: n,
                immediate: s,
                verbose: l
            });
            l && p && t.dispatch(jt({
                actionListId: n,
                isPlaying: !s
            }))
        }
    }
    function CM({actionListId: e}, t) {
        e ? Yt({
            store: t,
            actionListId: e
        }) : cE({
            store: t
        }),
        Xn(t)
    }
    function LM(e, t) {
        Xn(t),
        oE({
            store: t,
            elementApi: xe
        })
    }
    function qn({store: e, rawData: t, allowEvents: r, testManual: n}) {
        let {ixSession: i} = e.getState();
        t && e.dispatch(xo(t)),
        i.active || (e.dispatch(Ro({
            hasBoundaryNodes: !!document.querySelector(Nn),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })),
        r && (qM(e),
        PM(),
        e.getState().ixSession.hasDefinedMediaQueries && OM(e)),
        e.dispatch(Co()),
        NM(e, n))
    }
    function PM() {
        let {documentElement: e} = document;
        e.className.indexOf($h) === -1 && (e.className += ` ${$h}`)
    }
    function NM(e, t) {
        let r = n => {
            let {ixSession: i, ixParameters: o} = e.getState();
            i.active && (e.dispatch(In(n, o)),
            t ? wM(e, r) : requestAnimationFrame(r))
        }
        ;
        r(window.performance.now())
    }
    function Xn(e) {
        let {ixSession: t} = e.getState();
        if (t.active) {
            let {eventListeners: r} = t;
            r.forEach(DM),
            vM(),
            e.dispatch(Lo())
        }
    }
    function DM({target: e, listenerParams: t}) {
        e.removeEventListener.apply(e, t)
    }
    function MM({store: e, eventStateKey: t, eventTarget: r, eventId: n, eventConfig: i, actionListId: o, parameterGroup: a, smoothing: s, restingValue: u}) {
        let {ixData: l, ixSession: E} = e.getState()
          , {events: p} = l
          , d = p[n]
          , {eventTypeId: h} = d
          , T = {}
          , _ = {}
          , S = []
          , {continuousActionGroups: v} = a
          , {id: x} = a;
        hM(h, i) && (x = EM(t, x));
        let O = E.hasBoundaryNodes && r ? Tr(r, Nn) : null;
        v.forEach(C => {
            let {keyframe: L, actionItems: R} = C;
            R.forEach(V => {
                let {actionTypeId: B} = V
                  , {target: W} = V.config;
                if (!W)
                    return;
                let Y = W.boundaryMode ? O : null
                  , te = mM(W) + Zo + B;
                if (_[te] = FM(_[te], L, V),
                !T[te]) {
                    T[te] = !0;
                    let {config: D} = V;
                    Dn({
                        config: D,
                        event: d,
                        eventTarget: r,
                        elementRoot: Y,
                        elementApi: xe
                    }).forEach(b => {
                        S.push({
                            element: b,
                            key: te
                        })
                    }
                    )
                }
            }
            )
        }
        ),
        S.forEach( ({element: C, key: L}) => {
            let R = _[L]
              , V = (0,
            at.default)(R, "[0].actionItems[0]", {})
              , {actionTypeId: B} = V
              , W = Fn(B) ? ea(B)(C, V) : null
              , Y = Jo({
                element: C,
                actionItem: V,
                elementApi: xe
            }, W);
            ta({
                store: e,
                element: C,
                eventId: n,
                actionListId: o,
                actionItem: V,
                destination: Y,
                continuous: !0,
                parameterId: x,
                actionGroups: R,
                smoothing: s,
                restingValue: u,
                pluginInstance: W
            })
        }
        )
    }
    function FM(e=[], t, r) {
        let n = [...e], i;
        return n.some( (o, a) => o.keyframe === t ? (i = a,
        !0) : !1),
        i == null && (i = n.length,
        n.push({
            keyframe: t,
            actionItems: []
        })),
        n[i].actionItems.push(r),
        n
    }
    function qM(e) {
        let {ixData: t} = e.getState()
          , {eventTypeMap: r} = t;
        sE(e),
        (0,
        $t.default)(r, (i, o) => {
            let a = jh[o];
            if (!a) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            BM({
                logic: a,
                store: e,
                events: i
            })
        }
        );
        let {ixSession: n} = e.getState();
        n.eventListeners.length && GM(e)
    }
    function GM(e) {
        let t = () => {
            sE(e)
        }
        ;
        XM.forEach(r => {
            window.addEventListener(r, t),
            e.dispatch(_n(window, [r, t]))
        }
        ),
        t()
    }
    function sE(e) {
        let {ixSession: t, ixData: r} = e.getState()
          , n = window.innerWidth;
        if (n !== t.viewportWidth) {
            let {mediaQueries: i} = r;
            e.dispatch(Fo({
                width: n,
                mediaQueries: i
            }))
        }
    }
    function BM({logic: e, store: t, events: r}) {
        HM(r);
        let {types: n, handler: i} = e
          , {ixData: o} = t.getState()
          , {actionLists: a} = o
          , s = VM(r, kM);
        if (!(0,
        Jh.default)(s))
            return;
        (0,
        $t.default)(s, (p, d) => {
            let h = r[d]
              , {action: T, id: _, mediaQueries: S=o.mediaQueryKeys} = h
              , {actionListId: v} = T.config;
            _M(S, o.mediaQueryKeys) || t.dispatch(qo()),
            T.actionTypeId === Le.GENERAL_CONTINUOUS_ACTION && (Array.isArray(h.config) ? h.config : [h.config]).forEach(O => {
                let {continuousParameterGroupId: C} = O
                  , L = (0,
                at.default)(a, `${v}.continuousParameterGroups`, [])
                  , R = (0,
                Zh.default)(L, ({id: W}) => W === C)
                  , V = (O.smoothing || 0) / 100
                  , B = (O.restingState || 0) / 100;
                R && p.forEach( (W, Y) => {
                    let te = _ + Zo + Y;
                    MM({
                        store: t,
                        eventStateKey: te,
                        eventTarget: W,
                        eventId: _,
                        eventConfig: O,
                        actionListId: v,
                        parameterGroup: R,
                        smoothing: V,
                        restingValue: B
                    })
                }
                )
            }
            ),
            (T.actionTypeId === Le.GENERAL_START_ACTION || Qo(T.actionTypeId)) && uE({
                store: t,
                actionListId: v,
                eventId: _
            })
        }
        );
        let u = p => {
            let {ixSession: d} = t.getState();
            UM(s, (h, T, _) => {
                let S = r[T]
                  , v = d.eventState[_]
                  , {action: x, mediaQueries: O=o.mediaQueryKeys} = S;
                if (!Mn(O, d.mediaQueryKey))
                    return;
                let C = (L={}) => {
                    let R = i({
                        store: t,
                        element: h,
                        event: S,
                        eventConfig: L,
                        nativeEvent: p,
                        eventStateKey: _
                    }, v);
                    IM(R, v) || t.dispatch(Po(_, R))
                }
                ;
                x.actionTypeId === Le.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(S.config) ? S.config : [S.config]).forEach(C) : C()
            }
            )
        }
          , l = (0,
        nE.default)(u, AM)
          , E = ({target: p=document, types: d, throttle: h}) => {
            d.split(" ").filter(Boolean).forEach(T => {
                let _ = h ? l : u;
                p.addEventListener(T, _),
                t.dispatch(_n(p, [T, _]))
            }
            )
        }
        ;
        Array.isArray(n) ? n.forEach(E) : typeof n == "string" && E(e)
    }
    function HM(e) {
        if (!bM)
            return;
        let t = {}
          , r = "";
        for (let n in e) {
            let {eventTypeId: i, target: o} = e[n]
              , a = Go(o);
            t[a] || (i === ke.MOUSE_CLICK || i === ke.MOUSE_SECOND_CLICK) && (t[a] = !0,
            r += a + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (r) {
            let n = document.createElement("style");
            n.textContent = r,
            document.body.appendChild(n)
        }
    }
    function uE({store: e, actionListId: t, eventId: r}) {
        let {ixData: n, ixSession: i} = e.getState()
          , {actionLists: o, events: a} = n
          , s = a[r]
          , u = o[t];
        if (u && u.useFirstGroupAsInitialState) {
            let l = (0,
            at.default)(u, "actionItemGroups[0].actionItems", [])
              , E = (0,
            at.default)(s, "mediaQueries", n.mediaQueryKeys);
            if (!Mn(E, i.mediaQueryKey))
                return;
            l.forEach(p => {
                let {config: d, actionTypeId: h} = p
                  , T = d?.target?.useEventTarget === !0 && d?.target?.objectId == null ? {
                    target: s.target,
                    targets: s.targets
                } : d
                  , _ = Dn({
                    config: T,
                    event: s,
                    elementApi: xe
                })
                  , S = Fn(h);
                _.forEach(v => {
                    let x = S ? ea(h)(v, p) : null;
                    ta({
                        destination: Jo({
                            element: v,
                            actionItem: p,
                            elementApi: xe
                        }, x),
                        immediate: !0,
                        store: e,
                        element: v,
                        eventId: r,
                        actionItem: p,
                        actionListId: t,
                        pluginInstance: x
                    })
                }
                )
            }
            )
        }
    }
    function cE({store: e}) {
        let {ixInstances: t} = e.getState();
        (0,
        $t.default)(t, r => {
            if (!r.continuous) {
                let {actionListId: n, verbose: i} = r;
                ra(r, e),
                i && e.dispatch(jt({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        }
        )
    }
    function Yt({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: i}) {
        let {ixInstances: o, ixSession: a} = e.getState()
          , s = a.hasBoundaryNodes && r ? Tr(r, Nn) : null;
        (0,
        $t.default)(o, u => {
            let l = (0,
            at.default)(u, "actionItem.config.target.boundaryMode")
              , E = n ? u.eventStateKey === n : !0;
            if (u.actionListId === i && u.eventId === t && E) {
                if (s && l && !Vo(s, u.element))
                    return;
                ra(u, e),
                u.verbose && e.dispatch(jt({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        }
        )
    }
    function Or({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: i, groupIndex: o=0, immediate: a, verbose: s}) {
        let {ixData: u, ixSession: l} = e.getState()
          , {events: E} = u
          , p = E[t] || {}
          , {mediaQueries: d=u.mediaQueryKeys} = p
          , h = (0,
        at.default)(u, `actionLists.${i}`, {})
          , {actionItemGroups: T, useFirstGroupAsInitialState: _} = h;
        if (!T || !T.length)
            return !1;
        o >= T.length && (0,
        at.default)(p, "config.loop") && (o = 0),
        o === 0 && _ && o++;
        let v = (o === 0 || o === 1 && _) && Qo(p.action?.actionTypeId) ? p.config.delay : void 0
          , x = (0,
        at.default)(T, [o, "actionItems"], []);
        if (!x.length || !Mn(d, l.mediaQueryKey))
            return !1;
        let O = l.hasBoundaryNodes && r ? Tr(r, Nn) : null
          , C = fM(x)
          , L = !1;
        return x.forEach( (R, V) => {
            let {config: B, actionTypeId: W} = R
              , Y = Fn(W)
              , {target: te} = B;
            if (!te)
                return;
            let D = te.boundaryMode ? O : null;
            Dn({
                config: B,
                event: p,
                eventTarget: r,
                elementRoot: D,
                elementApi: xe
            }).forEach( (P, H) => {
                let G = Y ? ea(W)(P, R) : null
                  , J = Y ? TM(W)(P, R) : null;
                L = !0;
                let ee = C === V && H === 0
                  , N = dM({
                    element: P,
                    actionItem: R
                })
                  , k = Jo({
                    element: P,
                    actionItem: R,
                    elementApi: xe
                }, G);
                ta({
                    store: e,
                    element: P,
                    actionItem: R,
                    eventId: t,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: ee,
                    computedStyle: N,
                    destination: k,
                    immediate: a,
                    verbose: s,
                    pluginInstance: G,
                    pluginDuration: J,
                    instanceDelay: v
                })
            }
            )
        }
        ),
        L
    }
    function ta(e) {
        let {store: t, computedStyle: r, ...n} = e, {element: i, actionItem: o, immediate: a, pluginInstance: s, continuous: u, restingValue: l, eventId: E} = n, p = !u, d = cM(), {ixElements: h, ixSession: T, ixData: _} = t.getState(), S = uM(h, i), {refState: v} = h[S] || {}, x = Uo(i), O = T.reducedMotion && hi[o.actionTypeId], C;
        if (O && u)
            switch (_.events[E]?.eventTypeId) {
            case ke.MOUSE_MOVE:
            case ke.MOUSE_MOVE_IN_VIEWPORT:
                C = l;
                break;
            default:
                C = .5;
                break
            }
        let L = pM(i, v, r, o, xe, s);
        if (t.dispatch(No({
            instanceId: d,
            elementId: S,
            origin: L,
            refType: x,
            skipMotion: O,
            skipToValue: C,
            ...n
        })),
        lE(document.body, "ix2-animation-started", d),
        a) {
            WM(t, d);
            return
        }
        Tt({
            store: t,
            select: ({ixInstances: R}) => R[d],
            onChange: fE
        }),
        p && t.dispatch(Tn(d, T.tick))
    }
    function ra(e, t) {
        lE(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {elementId: r, actionItem: n} = e
          , {ixElements: i} = t.getState()
          , {ref: o, refType: a} = i[r] || {};
        a === iE && yM(o, n, xe),
        t.dispatch(Do(e.id))
    }
    function lE(e, t, r) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, r),
        e.dispatchEvent(n)
    }
    function WM(e, t) {
        let {ixParameters: r} = e.getState();
        e.dispatch(Tn(t, 0)),
        e.dispatch(In(performance.now(), r));
        let {ixInstances: n} = e.getState();
        fE(n[t], e)
    }
    function fE(e, t) {
        let {active: r, continuous: n, complete: i, elementId: o, actionItem: a, actionTypeId: s, renderType: u, current: l, groupIndex: E, eventId: p, eventTarget: d, eventStateKey: h, actionListId: T, isCarrier: _, styleProp: S, verbose: v, pluginInstance: x} = e
          , {ixData: O, ixSession: C} = t.getState()
          , {events: L} = O
          , R = L && L[p] ? L[p] : {}
          , {mediaQueries: V=O.mediaQueryKeys} = R;
        if (Mn(V, C.mediaQueryKey) && (n || r || i)) {
            if (l || u === sM && i) {
                t.dispatch(Mo(o, s, l, a));
                let {ixElements: B} = t.getState()
                  , {ref: W, refType: Y, refState: te} = B[o] || {}
                  , D = te && te[s];
                (Y === iE || Fn(s)) && lM(W, te, D, p, a, S, xe, u, x)
            }
            if (i) {
                if (_) {
                    let B = Or({
                        store: t,
                        eventId: p,
                        eventTarget: d,
                        eventStateKey: h,
                        actionListId: T,
                        groupIndex: E + 1,
                        verbose: v
                    });
                    v && !B && t.dispatch(jt({
                        actionListId: T,
                        isPlaying: !1
                    }))
                }
                ra(e, t)
            }
        }
    }
    var Zh, at, Jh, eE, tE, rE, $t, nE, Pn, aM, Qo, Zo, Nn, iE, sM, $h, Dn, uM, Jo, Tt, cM, lM, oE, fM, dM, pM, gM, hM, EM, Mn, yM, vM, mM, _M, IM, Fn, ea, TM, Qh, bM, AM, XM, VM, UM, kM, $o = Ee( () => {
        "use strict";
        Zh = ue(Hi()),
        at = ue(rn()),
        Jh = ue(Sp()),
        eE = ue(Qp()),
        tE = ue(Jp()),
        rE = ue(tg()),
        $t = ue(sg()),
        nE = ue(gg());
        Pe();
        Pn = ue(It());
        bn();
        _g();
        Yh();
        aM = Object.keys(Dr),
        Qo = e => aM.includes(e),
        {COLON_DELIMITER: Zo, BOUNDARY_SELECTOR: Nn, HTML_ELEMENT: iE, RENDER_GENERAL: sM, W_MOD_IX: $h} = Ae,
        {getAffectedElements: Dn, getElementId: uM, getDestinationValues: Jo, observeStore: Tt, getInstanceId: cM, renderHTMLElement: lM, clearAllStyles: oE, getMaxDurationItemIndex: fM, getComputedStyle: dM, getInstanceOrigin: pM, reduceListToGroup: gM, shouldNamespaceEventParameter: hM, getNamespacedParameterId: EM, shouldAllowMediaQuery: Mn, cleanupHTMLElement: yM, clearObjectCache: vM, stringifyTarget: mM, mediaQueriesEqual: _M, shallowEqual: IM} = Pn.IX2VanillaUtils,
        {isPluginType: Fn, createPluginInstance: ea, getPluginDuration: TM} = Pn.IX2VanillaPlugins,
        Qh = navigator.userAgent,
        bM = Qh.match(/iPad/i) || Qh.match(/iPhone/),
        AM = 12;
        XM = ["resize", "orientationchange"];
        VM = (e, t) => (0,
        eE.default)((0,
        rE.default)(e, t), tE.default),
        UM = (e, t) => {
            (0,
            $t.default)(e, (r, n) => {
                r.forEach( (i, o) => {
                    let a = n + Zo + o;
                    t(i, n, a)
                }
                )
            }
            )
        }
        ,
        kM = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return Dn({
                config: t,
                elementApi: xe
            })
        }
    }
    );
    var hE = f(ia => {
        "use strict";
        Object.defineProperty(ia, "__esModule", {
            value: !0
        });
        function zM(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }
        zM(ia, {
            actions: function() {
                return YM
            },
            destroy: function() {
                return gE
            },
            init: function() {
                return JM
            },
            setEnv: function() {
                return ZM
            },
            store: function() {
                return Gn
            }
        });
        var KM = di()
          , jM = $M((ap(),
        ze(op)))
          , na = ($o(),
        ze(dE))
          , YM = QM((bn(),
        ze(Eg)));
        function $M(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function pE(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (pE = function(n) {
                return n ? r : t
            }
            )(e)
        }
        function QM(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || typeof e != "object" && typeof e != "function")
                return {
                    default: e
                };
            var r = pE(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        var Gn = (0,
        KM.createStore)(jM.default);
        function ZM(e) {
            e() && (0,
            na.observeRequests)(Gn)
        }
        function JM(e) {
            gE(),
            (0,
            na.startEngine)({
                store: Gn,
                rawData: e,
                allowEvents: !0
            })
        }
        function gE() {
            (0,
            na.stopEngine)(Gn)
        }
    }
    );
    var mE = f( (JX, vE) => {
        "use strict";
        var EE = Ve()
          , yE = hE();
        yE.setEnv(EE.env);
        EE.define("ix2", vE.exports = function() {
            return yE
        }
        )
    }
    );
    var IE = f( (eG, _E) => {
        "use strict";
        var Qt = Ve();
        Qt.define("links", _E.exports = function(e, t) {
            var r = {}, n = e(window), i, o = Qt.env(), a = window.location, s = document.createElement("a"), u = "w--current", l = /index\.(html|php)$/, E = /\/$/, p, d;
            r.ready = r.design = r.preview = h;
            function h() {
                i = o && Qt.env("design"),
                d = Qt.env("slug") || a.pathname || "",
                Qt.scroll.off(_),
                p = [];
                for (var v = document.links, x = 0; x < v.length; ++x)
                    T(v[x]);
                p.length && (Qt.scroll.on(_),
                _())
            }
            function T(v) {
                if (!v.getAttribute("hreflang")) {
                    var x = i && v.getAttribute("href-disabled") || v.getAttribute("href");
                    if (s.href = x,
                    !(x.indexOf(":") >= 0)) {
                        var O = e(v);
                        if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash))
                                return;
                            var C = e(s.hash);
                            C.length && p.push({
                                link: O,
                                sec: C,
                                active: !1
                            });
                            return
                        }
                        if (!(x === "#" || x === "")) {
                            var L = s.href === a.href || x === d || l.test(x) && E.test(d);
                            S(O, u, L)
                        }
                    }
                }
            }
            function _() {
                var v = n.scrollTop()
                  , x = n.height();
                t.each(p, function(O) {
                    if (!O.link.attr("hreflang")) {
                        var C = O.link
                          , L = O.sec
                          , R = L.offset().top
                          , V = L.outerHeight()
                          , B = x * .5
                          , W = L.is(":visible") && R + V - B >= v && R + B <= v + x;
                        O.active !== W && (O.active = W,
                        S(C, u, W))
                    }
                })
            }
            function S(v, x, O) {
                var C = v.hasClass(x);
                O && C || !O && !C || (O ? v.addClass(x) : v.removeClass(x))
            }
            return r
        }
        )
    }
    );
    var bE = f( (tG, TE) => {
        "use strict";
        var Vn = Ve();
        Vn.define("scroll", TE.exports = function(e) {
            var t = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll"
            }
              , r = window.location
              , n = T() ? null : window.history
              , i = e(window)
              , o = e(document)
              , a = e(document.body)
              , s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(D) {
                window.setTimeout(D, 15)
            }
              , u = Vn.env("editor") ? ".w-editor-body" : "body"
              , l = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])"
              , E = 'a[href="#"]'
              , p = 'a[href*="#"]:not(.w-tab-link):not(' + E + ")"
              , d = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
              , h = document.createElement("style");
            h.appendChild(document.createTextNode(d));
            function T() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var _ = /^#[a-zA-Z0-9][\w:.-]*$/;
            function S(D) {
                return _.test(D.hash) && D.host + D.pathname === r.host + r.pathname
            }
            let v = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
            function x() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || v.matches
            }
            function O(D, b) {
                var P;
                switch (b) {
                case "add":
                    P = D.attr("tabindex"),
                    P ? D.attr("data-wf-tabindex-swap", P) : D.attr("tabindex", "-1");
                    break;
                case "remove":
                    P = D.attr("data-wf-tabindex-swap"),
                    P ? (D.attr("tabindex", P),
                    D.removeAttr("data-wf-tabindex-swap")) : D.removeAttr("tabindex");
                    break
                }
                D.toggleClass("wf-force-outline-none", b === "add")
            }
            function C(D) {
                var b = D.currentTarget;
                if (!(Vn.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(b.className))) {
                    var P = S(b) ? b.hash : "";
                    if (P !== "") {
                        var H = e(P);
                        H.length && (D && (D.preventDefault(),
                        D.stopPropagation()),
                        L(P, D),
                        window.setTimeout(function() {
                            R(H, function() {
                                O(H, "add"),
                                H.get(0).focus({
                                    preventScroll: !0
                                }),
                                O(H, "remove")
                            })
                        }, D ? 0 : 300))
                    }
                }
            }
            function L(D) {
                if (r.hash !== D && n && n.pushState && !(Vn.env.chrome && r.protocol === "file:")) {
                    var b = n.state && n.state.hash;
                    b !== D && n.pushState({
                        hash: D
                    }, "", D)
                }
            }
            function R(D, b) {
                var P = i.scrollTop()
                  , H = V(D);
                if (P !== H) {
                    var G = B(D, P, H)
                      , J = Date.now()
                      , ee = function() {
                        var N = Date.now() - J;
                        window.scroll(0, W(P, H, N, G)),
                        N <= G ? s(ee) : typeof b == "function" && b()
                    };
                    s(ee)
                }
            }
            function V(D) {
                var b = e(l)
                  , P = b.css("position") === "fixed" ? b.outerHeight() : 0
                  , H = D.offset().top - P;
                if (D.data("scroll") === "mid") {
                    var G = i.height() - P
                      , J = D.outerHeight();
                    J < G && (H -= Math.round((G - J) / 2))
                }
                return H
            }
            function B(D, b, P) {
                if (x())
                    return 0;
                var H = 1;
                return a.add(D).each(function(G, J) {
                    var ee = parseFloat(J.getAttribute("data-scroll-time"));
                    !isNaN(ee) && ee >= 0 && (H = ee)
                }),
                (472.143 * Math.log(Math.abs(b - P) + 125) - 2e3) * H
            }
            function W(D, b, P, H) {
                return P > H ? b : D + (b - D) * Y(P / H)
            }
            function Y(D) {
                return D < .5 ? 4 * D * D * D : (D - 1) * (2 * D - 2) * (2 * D - 2) + 1
            }
            function te() {
                var {WF_CLICK_EMPTY: D, WF_CLICK_SCROLL: b} = t;
                o.on(b, p, C),
                o.on(D, E, function(P) {
                    P.preventDefault()
                }),
                document.head.insertBefore(h, document.head.firstChild)
            }
            return {
                ready: te
            }
        }
        )
    }
    );
    var SE = f( (rG, AE) => {
        "use strict";
        var eF = Ve();
        eF.define("touch", AE.exports = function(e) {
            var t = {}
              , r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            },
            t.init = function(o) {
                return o = typeof o == "string" ? e(o).get(0) : o,
                o ? new n(o) : null
            }
            ;
            function n(o) {
                var a = !1, s = !1, u = Math.min(Math.round(window.innerWidth * .04), 40), l, E;
                o.addEventListener("touchstart", p, !1),
                o.addEventListener("touchmove", d, !1),
                o.addEventListener("touchend", h, !1),
                o.addEventListener("touchcancel", T, !1),
                o.addEventListener("mousedown", p, !1),
                o.addEventListener("mousemove", d, !1),
                o.addEventListener("mouseup", h, !1),
                o.addEventListener("mouseout", T, !1);
                function p(S) {
                    var v = S.touches;
                    v && v.length > 1 || (a = !0,
                    v ? (s = !0,
                    l = v[0].clientX) : l = S.clientX,
                    E = l)
                }
                function d(S) {
                    if (a) {
                        if (s && S.type === "mousemove") {
                            S.preventDefault(),
                            S.stopPropagation();
                            return
                        }
                        var v = S.touches
                          , x = v ? v[0].clientX : S.clientX
                          , O = x - E;
                        E = x,
                        Math.abs(O) > u && r && String(r()) === "" && (i("swipe", S, {
                            direction: O > 0 ? "right" : "left"
                        }),
                        T())
                    }
                }
                function h(S) {
                    if (a && (a = !1,
                    s && S.type === "mouseup")) {
                        S.preventDefault(),
                        S.stopPropagation(),
                        s = !1;
                        return
                    }
                }
                function T() {
                    a = !1
                }
                function _() {
                    o.removeEventListener("touchstart", p, !1),
                    o.removeEventListener("touchmove", d, !1),
                    o.removeEventListener("touchend", h, !1),
                    o.removeEventListener("touchcancel", T, !1),
                    o.removeEventListener("mousedown", p, !1),
                    o.removeEventListener("mousemove", d, !1),
                    o.removeEventListener("mouseup", h, !1),
                    o.removeEventListener("mouseout", T, !1),
                    o = null
                }
                this.destroy = _
            }
            function i(o, a, s) {
                var u = e.Event(o, {
                    originalEvent: a
                });
                e(a.target).trigger(u, s)
            }
            return t.instance = t.init(document),
            t
        }
        )
    }
    );
    var OE = f(oa => {
        "use strict";
        Object.defineProperty(oa, "__esModule", {
            value: !0
        });
        Object.defineProperty(oa, "default", {
            enumerable: !0,
            get: function() {
                return tF
            }
        });
        function tF(e, t, r, n, i, o, a, s, u, l, E, p, d) {
            return function(h) {
                e(h);
                var T = h.form
                  , _ = {
                    name: T.attr("data-name") || T.attr("name") || "Untitled Form",
                    pageId: T.attr("data-wf-page-id") || "",
                    elementId: T.attr("data-wf-element-id") || "",
                    source: t.href,
                    test: r.env(),
                    fields: {},
                    fileUploads: {},
                    dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(T.html()),
                    trackingCookies: n()
                };
                let S = T.attr("data-wf-flow");
                S && (_.wfFlow = S),
                i(h);
                var v = o(T, _.fields);
                if (v)
                    return a(v);
                if (_.fileUploads = s(T),
                u(h),
                !l) {
                    E(h);
                    return
                }
                p.ajax({
                    url: d,
                    type: "POST",
                    data: _,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(x) {
                    x && x.code === 200 && (h.success = !0),
                    E(h)
                }).fail(function() {
                    E(h)
                })
            }
        }
    }
    );
    var xE = f( (iG, wE) => {
        "use strict";
        var Un = Ve();
        Un.define("forms", wE.exports = function(e, t) {
            var r = {}, n = e(document), i, o = window.location, a = window.XDomainRequest && !window.atob, s = ".w-form", u, l = /e(-)?mail/i, E = /^\S+@\S+$/, p = window.alert, d = Un.env(), h, T, _, S = /list-manage[1-9]?.com/i, v = t.debounce(function() {
                p("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);
            r.ready = r.design = r.preview = function() {
                x(),
                !d && !h && C()
            }
            ;
            function x() {
                u = e("html").attr("data-wf-site"),
                T = "https://webflow.com/api/v1/form/" + u,
                a && T.indexOf("https://webflow.com") >= 0 && (T = T.replace("https://webflow.com", "https://formdata.webflow.com")),
                _ = `${T}/signFile`,
                i = e(s + " form"),
                i.length && i.each(O)
            }
            function O(N, k) {
                var z = e(k)
                  , F = e.data(k, s);
                F || (F = e.data(k, s, {
                    form: z
                })),
                L(F);
                var M = z.closest("div.w-form");
                F.done = M.find("> .w-form-done"),
                F.fail = M.find("> .w-form-fail"),
                F.fileUploads = M.find(".w-file-upload"),
                F.fileUploads.each(function(ne) {
                    G(ne, F)
                });
                var $ = F.form.attr("aria-label") || F.form.attr("data-name") || "Form";
                F.done.attr("aria-label") || F.form.attr("aria-label", $),
                F.done.attr("tabindex", "-1"),
                F.done.attr("role", "region"),
                F.done.attr("aria-label") || F.done.attr("aria-label", $ + " success"),
                F.fail.attr("tabindex", "-1"),
                F.fail.attr("role", "region"),
                F.fail.attr("aria-label") || F.fail.attr("aria-label", $ + " failure");
                var oe = F.action = z.attr("action");
                if (F.handler = null,
                F.redirect = z.attr("data-redirect"),
                S.test(oe)) {
                    F.handler = b;
                    return
                }
                if (!oe) {
                    if (u) {
                        F.handler = ( () => {
                            let ne = OE().default;
                            return ne(L, o, Un, Y, H, V, p, B, R, u, P, e, T)
                        }
                        )();
                        return
                    }
                    v()
                }
            }
            function C() {
                h = !0,
                n.on("submit", s + " form", function(ne) {
                    var Z = e.data(this, s);
                    Z.handler && (Z.evt = ne,
                    Z.handler(Z))
                });
                let N = ".w-checkbox-input"
                  , k = ".w-radio-input"
                  , z = "w--redirected-checked"
                  , F = "w--redirected-focus"
                  , M = "w--redirected-focus-visible"
                  , $ = ":focus-visible, [data-wf-focus-visible]"
                  , oe = [["checkbox", N], ["radio", k]];
                n.on("change", s + ' form input[type="checkbox"]:not(' + N + ")", ne => {
                    e(ne.target).siblings(N).toggleClass(z)
                }
                ),
                n.on("change", s + ' form input[type="radio"]', ne => {
                    e(`input[name="${ne.target.name}"]:not(${N})`).map( (de, et) => e(et).siblings(k).removeClass(z));
                    let Z = e(ne.target);
                    Z.hasClass("w-radio-input") || Z.siblings(k).addClass(z)
                }
                ),
                oe.forEach( ([ne,Z]) => {
                    n.on("focus", s + ` form input[type="${ne}"]:not(` + Z + ")", de => {
                        e(de.target).siblings(Z).addClass(F),
                        e(de.target).filter($).siblings(Z).addClass(M)
                    }
                    ),
                    n.on("blur", s + ` form input[type="${ne}"]:not(` + Z + ")", de => {
                        e(de.target).siblings(Z).removeClass(`${F} ${M}`)
                    }
                    )
                }
                )
            }
            function L(N) {
                var k = N.btn = N.form.find(':input[type="submit"]');
                N.wait = N.btn.attr("data-wait") || null,
                N.success = !1,
                k.prop("disabled", !1),
                N.label && k.val(N.label)
            }
            function R(N) {
                var k = N.btn
                  , z = N.wait;
                k.prop("disabled", !0),
                z && (N.label = k.val(),
                k.val(z))
            }
            function V(N, k) {
                var z = null;
                return k = k || {},
                N.find(':input:not([type="submit"]):not([type="file"])').each(function(F, M) {
                    var $ = e(M)
                      , oe = $.attr("type")
                      , ne = $.attr("data-name") || $.attr("name") || "Field " + (F + 1);
                    ne = encodeURIComponent(ne);
                    var Z = $.val();
                    if (oe === "checkbox")
                        Z = $.is(":checked");
                    else if (oe === "radio") {
                        if (k[ne] === null || typeof k[ne] == "string")
                            return;
                        Z = N.find('input[name="' + $.attr("name") + '"]:checked').val() || null
                    }
                    typeof Z == "string" && (Z = e.trim(Z)),
                    k[ne] = Z,
                    z = z || te($, oe, ne, Z)
                }),
                z
            }
            function B(N) {
                var k = {};
                return N.find(':input[type="file"]').each(function(z, F) {
                    var M = e(F)
                      , $ = M.attr("data-name") || M.attr("name") || "File " + (z + 1)
                      , oe = M.attr("data-value");
                    typeof oe == "string" && (oe = e.trim(oe)),
                    k[$] = oe
                }),
                k
            }
            let W = {
                _mkto_trk: "marketo"
            };
            function Y() {
                return document.cookie.split("; ").reduce(function(k, z) {
                    let F = z.split("=")
                      , M = F[0];
                    if (M in W) {
                        let $ = W[M]
                          , oe = F.slice(1).join("=");
                        k[$] = oe
                    }
                    return k
                }, {})
            }
            function te(N, k, z, F) {
                var M = null;
                return k === "password" ? M = "Passwords cannot be submitted." : N.attr("required") ? F ? l.test(N.attr("type")) && (E.test(F) || (M = "Please enter a valid email address for: " + z)) : M = "Please fill out the required field: " + z : z === "g-recaptcha-response" && !F && (M = "Please confirm you\u2019re not a robot."),
                M
            }
            function D(N) {
                H(N),
                P(N)
            }
            function b(N) {
                L(N);
                var k = N.form
                  , z = {};
                if (/^https/.test(o.href) && !/^https/.test(N.action)) {
                    k.attr("method", "post");
                    return
                }
                H(N);
                var F = V(k, z);
                if (F)
                    return p(F);
                R(N);
                var M;
                t.each(z, function(Z, de) {
                    l.test(de) && (z.EMAIL = Z),
                    /^((full[ _-]?)?name)$/i.test(de) && (M = Z),
                    /^(first[ _-]?name)$/i.test(de) && (z.FNAME = Z),
                    /^(last[ _-]?name)$/i.test(de) && (z.LNAME = Z)
                }),
                M && !z.FNAME && (M = M.split(" "),
                z.FNAME = M[0],
                z.LNAME = z.LNAME || M[1]);
                var $ = N.action.replace("/post?", "/post-json?") + "&c=?"
                  , oe = $.indexOf("u=") + 2;
                oe = $.substring(oe, $.indexOf("&", oe));
                var ne = $.indexOf("id=") + 3;
                ne = $.substring(ne, $.indexOf("&", ne)),
                z["b_" + oe + "_" + ne] = "",
                e.ajax({
                    url: $,
                    data: z,
                    dataType: "jsonp"
                }).done(function(Z) {
                    N.success = Z.result === "success" || /already/.test(Z.msg),
                    N.success || console.info("MailChimp error: " + Z.msg),
                    P(N)
                }).fail(function() {
                    P(N)
                })
            }
            function P(N) {
                var k = N.form
                  , z = N.redirect
                  , F = N.success;
                if (F && z) {
                    Un.location(z);
                    return
                }
                N.done.toggle(F),
                N.fail.toggle(!F),
                F ? N.done.focus() : N.fail.focus(),
                k.toggle(!F),
                L(N)
            }
            function H(N) {
                N.evt && N.evt.preventDefault(),
                N.evt = null
            }
            function G(N, k) {
                if (!k.fileUploads || !k.fileUploads[N])
                    return;
                var z, F = e(k.fileUploads[N]), M = F.find("> .w-file-upload-default"), $ = F.find("> .w-file-upload-uploading"), oe = F.find("> .w-file-upload-success"), ne = F.find("> .w-file-upload-error"), Z = M.find(".w-file-upload-input"), de = M.find(".w-file-upload-label"), et = de.children(), ce = ne.find(".w-file-upload-error-msg"), g = oe.find(".w-file-upload-file"), q = oe.find(".w-file-remove-link"), K = g.find(".w-file-upload-file-name"), U = ce.attr("data-w-size-error"), ge = ce.attr("data-w-type-error"), gt = ce.attr("data-w-generic-error");
                if (d || de.on("click keydown", function(m) {
                    m.type === "keydown" && m.which !== 13 && m.which !== 32 || (m.preventDefault(),
                    Z.click())
                }),
                de.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
                q.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
                d)
                    Z.on("click", function(m) {
                        m.preventDefault()
                    }),
                    de.on("click", function(m) {
                        m.preventDefault()
                    }),
                    et.on("click", function(m) {
                        m.preventDefault()
                    });
                else {
                    q.on("click keydown", function(m) {
                        if (m.type === "keydown") {
                            if (m.which !== 13 && m.which !== 32)
                                return;
                            m.preventDefault()
                        }
                        Z.removeAttr("data-value"),
                        Z.val(""),
                        K.html(""),
                        M.toggle(!0),
                        oe.toggle(!1),
                        de.focus()
                    }),
                    Z.on("change", function(m) {
                        z = m.target && m.target.files && m.target.files[0],
                        z && (M.toggle(!1),
                        ne.toggle(!1),
                        $.toggle(!0),
                        $.focus(),
                        K.text(z.name),
                        A() || R(k),
                        k.fileUploads[N].uploading = !0,
                        J(z, y))
                    });
                    var tt = de.outerHeight();
                    Z.height(tt),
                    Z.width(1)
                }
                function c(m) {
                    var w = m.responseJSON && m.responseJSON.msg
                      , j = gt;
                    typeof w == "string" && w.indexOf("InvalidFileTypeError") === 0 ? j = ge : typeof w == "string" && w.indexOf("MaxFileSizeError") === 0 && (j = U),
                    ce.text(j),
                    Z.removeAttr("data-value"),
                    Z.val(""),
                    $.toggle(!1),
                    M.toggle(!0),
                    ne.toggle(!0),
                    ne.focus(),
                    k.fileUploads[N].uploading = !1,
                    A() || L(k)
                }
                function y(m, w) {
                    if (m)
                        return c(m);
                    var j = w.fileName
                      , re = w.postData
                      , pe = w.fileId
                      , X = w.s3Url;
                    Z.attr("data-value", pe),
                    ee(X, re, z, j, I)
                }
                function I(m) {
                    if (m)
                        return c(m);
                    $.toggle(!1),
                    oe.css("display", "inline-block"),
                    oe.focus(),
                    k.fileUploads[N].uploading = !1,
                    A() || L(k)
                }
                function A() {
                    var m = k.fileUploads && k.fileUploads.toArray() || [];
                    return m.some(function(w) {
                        return w.uploading
                    })
                }
            }
            function J(N, k) {
                var z = new URLSearchParams({
                    name: N.name,
                    size: N.size
                });
                e.ajax({
                    type: "GET",
                    url: `${_}?${z}`,
                    crossDomain: !0
                }).done(function(F) {
                    k(null, F)
                }).fail(function(F) {
                    k(F)
                })
            }
            function ee(N, k, z, F, M) {
                var $ = new FormData;
                for (var oe in k)
                    $.append(oe, k[oe]);
                $.append("file", z, F),
                e.ajax({
                    type: "POST",
                    url: N,
                    data: $,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    M(null)
                }).fail(function(ne) {
                    M(ne)
                })
            }
            return r
        }
        )
    }
    );
    var CE = f( (oG, RE) => {
        "use strict";
        var pt = Ve()
          , rF = $n()
          , be = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        };
        pt.define("navbar", RE.exports = function(e, t) {
            var r = {}, n = e.tram, i = e(window), o = e(document), a = t.debounce, s, u, l, E, p = pt.env(), d = '<div class="w-nav-overlay" data-wf-ignore />', h = ".w-nav", T = "w--open", _ = "w--nav-dropdown-open", S = "w--nav-dropdown-toggle-open", v = "w--nav-dropdown-list-open", x = "w--nav-link-open", O = rF.triggers, C = e();
            r.ready = r.design = r.preview = L,
            r.destroy = function() {
                C = e(),
                R(),
                u && u.length && u.each(Y)
            }
            ;
            function L() {
                l = p && pt.env("design"),
                E = pt.env("editor"),
                s = e(document.body),
                u = o.find(h),
                u.length && (u.each(W),
                R(),
                V())
            }
            function R() {
                pt.resize.off(B)
            }
            function V() {
                pt.resize.on(B)
            }
            function B() {
                u.each(M)
            }
            function W(g, q) {
                var K = e(q)
                  , U = e.data(q, h);
                U || (U = e.data(q, h, {
                    open: !1,
                    el: K,
                    config: {},
                    selectedIdx: -1
                })),
                U.menu = K.find(".w-nav-menu"),
                U.links = U.menu.find(".w-nav-link"),
                U.dropdowns = U.menu.find(".w-dropdown"),
                U.dropdownToggle = U.menu.find(".w-dropdown-toggle"),
                U.dropdownList = U.menu.find(".w-dropdown-list"),
                U.button = K.find(".w-nav-button"),
                U.container = K.find(".w-container"),
                U.overlayContainerId = "w-nav-overlay-" + g,
                U.outside = z(U);
                var ge = K.find(".w-nav-brand");
                ge && ge.attr("href") === "/" && ge.attr("aria-label") == null && ge.attr("aria-label", "home"),
                U.button.attr("style", "-webkit-user-select: text;"),
                U.button.attr("aria-label") == null && U.button.attr("aria-label", "menu"),
                U.button.attr("role", "button"),
                U.button.attr("tabindex", "0"),
                U.button.attr("aria-controls", U.overlayContainerId),
                U.button.attr("aria-haspopup", "menu"),
                U.button.attr("aria-expanded", "false"),
                U.el.off(h),
                U.button.off(h),
                U.menu.off(h),
                b(U),
                l ? (te(U),
                U.el.on("setting" + h, P(U))) : (D(U),
                U.button.on("click" + h, N(U)),
                U.menu.on("click" + h, "a", k(U)),
                U.button.on("keydown" + h, H(U)),
                U.el.on("keydown" + h, G(U))),
                M(g, q)
            }
            function Y(g, q) {
                var K = e.data(q, h);
                K && (te(K),
                e.removeData(q, h))
            }
            function te(g) {
                g.overlay && (ce(g, !0),
                g.overlay.remove(),
                g.overlay = null)
            }
            function D(g) {
                g.overlay || (g.overlay = e(d).appendTo(g.el),
                g.overlay.attr("id", g.overlayContainerId),
                g.parent = g.menu.parent(),
                ce(g, !0))
            }
            function b(g) {
                var q = {}
                  , K = g.config || {}
                  , U = q.animation = g.el.attr("data-animation") || "default";
                q.animOver = /^over/.test(U),
                q.animDirect = /left$/.test(U) ? -1 : 1,
                K.animation !== U && g.open && t.defer(ee, g),
                q.easing = g.el.attr("data-easing") || "ease",
                q.easing2 = g.el.attr("data-easing2") || "ease";
                var ge = g.el.attr("data-duration");
                q.duration = ge != null ? Number(ge) : 400,
                q.docHeight = g.el.attr("data-doc-height"),
                g.config = q
            }
            function P(g) {
                return function(q, K) {
                    K = K || {};
                    var U = i.width();
                    b(g),
                    K.open === !0 && de(g, !0),
                    K.open === !1 && ce(g, !0),
                    g.open && t.defer(function() {
                        U !== i.width() && ee(g)
                    })
                }
            }
            function H(g) {
                return function(q) {
                    switch (q.keyCode) {
                    case be.SPACE:
                    case be.ENTER:
                        return N(g)(),
                        q.preventDefault(),
                        q.stopPropagation();
                    case be.ESCAPE:
                        return ce(g),
                        q.preventDefault(),
                        q.stopPropagation();
                    case be.ARROW_RIGHT:
                    case be.ARROW_DOWN:
                    case be.HOME:
                    case be.END:
                        return g.open ? (q.keyCode === be.END ? g.selectedIdx = g.links.length - 1 : g.selectedIdx = 0,
                        J(g),
                        q.preventDefault(),
                        q.stopPropagation()) : (q.preventDefault(),
                        q.stopPropagation())
                    }
                }
            }
            function G(g) {
                return function(q) {
                    if (g.open)
                        switch (g.selectedIdx = g.links.index(document.activeElement),
                        q.keyCode) {
                        case be.HOME:
                        case be.END:
                            return q.keyCode === be.END ? g.selectedIdx = g.links.length - 1 : g.selectedIdx = 0,
                            J(g),
                            q.preventDefault(),
                            q.stopPropagation();
                        case be.ESCAPE:
                            return ce(g),
                            g.button.focus(),
                            q.preventDefault(),
                            q.stopPropagation();
                        case be.ARROW_LEFT:
                        case be.ARROW_UP:
                            return g.selectedIdx = Math.max(-1, g.selectedIdx - 1),
                            J(g),
                            q.preventDefault(),
                            q.stopPropagation();
                        case be.ARROW_RIGHT:
                        case be.ARROW_DOWN:
                            return g.selectedIdx = Math.min(g.links.length - 1, g.selectedIdx + 1),
                            J(g),
                            q.preventDefault(),
                            q.stopPropagation()
                        }
                }
            }
            function J(g) {
                if (g.links[g.selectedIdx]) {
                    var q = g.links[g.selectedIdx];
                    q.focus(),
                    k(q)
                }
            }
            function ee(g) {
                g.open && (ce(g, !0),
                de(g, !0))
            }
            function N(g) {
                return a(function() {
                    g.open ? ce(g) : de(g)
                })
            }
            function k(g) {
                return function(q) {
                    var K = e(this)
                      , U = K.attr("href");
                    if (!pt.validClick(q.currentTarget)) {
                        q.preventDefault();
                        return
                    }
                    U && U.indexOf("#") === 0 && g.open && ce(g)
                }
            }
            function z(g) {
                return g.outside && o.off("click" + h, g.outside),
                function(q) {
                    var K = e(q.target);
                    E && K.closest(".w-editor-bem-EditorOverlay").length || F(g, K)
                }
            }
            var F = a(function(g, q) {
                if (g.open) {
                    var K = q.closest(".w-nav-menu");
                    g.menu.is(K) || ce(g)
                }
            });
            function M(g, q) {
                var K = e.data(q, h)
                  , U = K.collapsed = K.button.css("display") !== "none";
                if (K.open && !U && !l && ce(K, !0),
                K.container.length) {
                    var ge = oe(K);
                    K.links.each(ge),
                    K.dropdowns.each(ge)
                }
                K.open && et(K)
            }
            var $ = "max-width";
            function oe(g) {
                var q = g.container.css($);
                return q === "none" && (q = ""),
                function(K, U) {
                    U = e(U),
                    U.css($, ""),
                    U.css($) === "none" && U.css($, q)
                }
            }
            function ne(g, q) {
                q.setAttribute("data-nav-menu-open", "")
            }
            function Z(g, q) {
                q.removeAttribute("data-nav-menu-open")
            }
            function de(g, q) {
                if (g.open)
                    return;
                g.open = !0,
                g.menu.each(ne),
                g.links.addClass(x),
                g.dropdowns.addClass(_),
                g.dropdownToggle.addClass(S),
                g.dropdownList.addClass(v),
                g.button.addClass(T);
                var K = g.config
                  , U = K.animation;
                (U === "none" || !n.support.transform || K.duration <= 0) && (q = !0);
                var ge = et(g)
                  , gt = g.menu.outerHeight(!0)
                  , tt = g.menu.outerWidth(!0)
                  , c = g.el.height()
                  , y = g.el[0];
                if (M(0, y),
                O.intro(0, y),
                pt.redraw.up(),
                l || o.on("click" + h, g.outside),
                q) {
                    m();
                    return
                }
                var I = "transform " + K.duration + "ms " + K.easing;
                if (g.overlay && (C = g.menu.prev(),
                g.overlay.show().append(g.menu)),
                K.animOver) {
                    n(g.menu).add(I).set({
                        x: K.animDirect * tt,
                        height: ge
                    }).start({
                        x: 0
                    }).then(m),
                    g.overlay && g.overlay.width(tt);
                    return
                }
                var A = c + gt;
                n(g.menu).add(I).set({
                    y: -A
                }).start({
                    y: 0
                }).then(m);
                function m() {
                    g.button.attr("aria-expanded", "true")
                }
            }
            function et(g) {
                var q = g.config
                  , K = q.docHeight ? o.height() : s.height();
                return q.animOver ? g.menu.height(K) : g.el.css("position") !== "fixed" && (K -= g.el.outerHeight(!0)),
                g.overlay && g.overlay.height(K),
                K
            }
            function ce(g, q) {
                if (!g.open)
                    return;
                g.open = !1,
                g.button.removeClass(T);
                var K = g.config;
                if ((K.animation === "none" || !n.support.transform || K.duration <= 0) && (q = !0),
                O.outro(0, g.el[0]),
                o.off("click" + h, g.outside),
                q) {
                    n(g.menu).stop(),
                    y();
                    return
                }
                var U = "transform " + K.duration + "ms " + K.easing2
                  , ge = g.menu.outerHeight(!0)
                  , gt = g.menu.outerWidth(!0)
                  , tt = g.el.height();
                if (K.animOver) {
                    n(g.menu).add(U).start({
                        x: gt * K.animDirect
                    }).then(y);
                    return
                }
                var c = tt + ge;
                n(g.menu).add(U).start({
                    y: -c
                }).then(y);
                function y() {
                    g.menu.height(""),
                    n(g.menu).set({
                        x: 0,
                        y: 0
                    }),
                    g.menu.each(Z),
                    g.links.removeClass(x),
                    g.dropdowns.removeClass(_),
                    g.dropdownToggle.removeClass(S),
                    g.dropdownList.removeClass(v),
                    g.overlay && g.overlay.children().length && (C.length ? g.menu.insertAfter(C) : g.menu.prependTo(g.parent),
                    g.overlay.attr("style", "").hide()),
                    g.el.triggerHandler("w-close"),
                    g.button.attr("aria-expanded", "false")
                }
            }
            return r
        }
        )
    }
    );
    ma();
    Ia();
    ba();
    Oa();
    $n();
    mE();
    IE();
    bE();
    SE();
    xE();
    CE();
}
)();
/*!
* tram.js v0.8.2-global
* Cross-browser CSS3 transitions in JavaScript
* https://github.com/bkwld/tram
* MIT License
*/
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e-11": {
            "id": "e-11",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-12"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".box-naw-link",
                "originalId": "66db6196aedd1f29a107fe24|b1a89289-a311-f25e-0418-d8070bad41fd",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".box-naw-link",
                "originalId": "66db6196aedd1f29a107fe24|b1a89289-a311-f25e-0418-d8070bad41fd",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725384438509
        },
        "e-12": {
            "id": "e-12",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-11"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".box-naw-link",
                "originalId": "66db6196aedd1f29a107fe24|b1a89289-a311-f25e-0418-d8070bad41fd",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".box-naw-link",
                "originalId": "66db6196aedd1f29a107fe24|b1a89289-a311-f25e-0418-d8070bad41fd",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725384438510
        },
        "e-13": {
            "id": "e-13",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-14"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".svg-soc",
                "originalId": "66db6196aedd1f29a107fe24|d873f1ee-1cc1-c302-4683-05f78fc67003",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".svg-soc",
                "originalId": "66db6196aedd1f29a107fe24|d873f1ee-1cc1-c302-4683-05f78fc67003",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725445140274
        },
        "e-14": {
            "id": "e-14",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-13"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".svg-soc",
                "originalId": "66db6196aedd1f29a107fe24|d873f1ee-1cc1-c302-4683-05f78fc67003",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".svg-soc",
                "originalId": "66db6196aedd1f29a107fe24|d873f1ee-1cc1-c302-4683-05f78fc67003",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725445140274
        },
        "e-15": {
            "id": "e-15",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-16"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".link-token",
                "originalId": "66db6196aedd1f29a107fe24|29d80df7-b288-a89f-0112-7d5bdae9aa78",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".link-token",
                "originalId": "66db6196aedd1f29a107fe24|29d80df7-b288-a89f-0112-7d5bdae9aa78",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725445852989
        },
        "e-16": {
            "id": "e-16",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-15"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".link-token",
                "originalId": "66db6196aedd1f29a107fe24|29d80df7-b288-a89f-0112-7d5bdae9aa78",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".link-token",
                "originalId": "66db6196aedd1f29a107fe24|29d80df7-b288-a89f-0112-7d5bdae9aa78",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725445852989
        },
        "e-19": {
            "id": "e-19",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66db6196aedd1f29a107fe24|08d33604-5f3f-8612-26c2-6b60e26df8b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66db6196aedd1f29a107fe24|08d33604-5f3f-8612-26c2-6b60e26df8b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-7-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1725446342093
        },
        "e-24": {
            "id": "e-24",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66db6196aedd1f29a107fe24|36fe0b17-0e8b-c180-8462-ffe5fd015d8a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66db6196aedd1f29a107fe24|36fe0b17-0e8b-c180-8462-ffe5fd015d8a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-10-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1725448434472
        },
        "e-25": {
            "id": "e-25",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-26"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66db6196aedd1f29a107fe24|defe1601-cf44-3e10-b99c-96f1af433546",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66db6196aedd1f29a107fe24|defe1601-cf44-3e10-b99c-96f1af433546",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725448924507
        },
        "e-27": {
            "id": "e-27",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66db6196aedd1f29a107fe24|8f7a612b-c80d-bf46-bc74-9c61c5b23340",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66db6196aedd1f29a107fe24|8f7a612b-c80d-bf46-bc74-9c61c5b23340",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-12-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1725449132979
        },
        "e-28": {
            "id": "e-28",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66db6196aedd1f29a107fe24|a05aa57c-4e55-0d59-1946-93c3ff50a263",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66db6196aedd1f29a107fe24|a05aa57c-4e55-0d59-1946-93c3ff50a263",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-13-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1725449555701
        },
        "e-29": {
            "id": "e-29",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66db6196aedd1f29a107fe24|3d8e6ccf-3bdd-c0e9-9514-7c1d0eaf9bd9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66db6196aedd1f29a107fe24|3d8e6ccf-3bdd-c0e9-9514-7c1d0eaf9bd9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-14-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1725450678869
        },
        "e-30": {
            "id": "e-30",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "JIGGLE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "jiggle",
                    "autoStopEventId": "e-31"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66db6196aedd1f29a107fe24|d87a5e4d-8688-ad99-8ecb-72784e61df35",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66db6196aedd1f29a107fe24|d87a5e4d-8688-ad99-8ecb-72784e61df35",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": 600,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725450733805
        },
        "e-32": {
            "id": "e-32",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-33"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66db6196aedd1f29a107fe24|b9a90e68-cf49-6e13-37be-ecfb1ae66126",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66db6196aedd1f29a107fe24|b9a90e68-cf49-6e13-37be-ecfb1ae66126",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725465983110
        },
        "e-34": {
            "id": "e-34",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "JIGGLE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "jiggle",
                    "autoStopEventId": "e-35"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66db6196aedd1f29a107fe24|a5c1d617-5cd7-fbd1-a561-f9a6c90ccb04",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66db6196aedd1f29a107fe24|a5c1d617-5cd7-fbd1-a561-f9a6c90ccb04",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 40,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725467005303
        },
        "e-36": {
            "id": "e-36",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-37"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66db6196aedd1f29a107fe24|320b5421-8bf4-20c6-1494-08a5dc6a75fe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66db6196aedd1f29a107fe24|320b5421-8bf4-20c6-1494-08a5dc6a75fe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725467764561
        },
        "e-38": {
            "id": "e-38",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "JIGGLE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "jiggle",
                    "autoStopEventId": "e-39"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66db6196aedd1f29a107fe24|47f92750-6ba3-954f-fc73-703d54f7de8d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66db6196aedd1f29a107fe24|47f92750-6ba3-954f-fc73-703d54f7de8d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 40,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725468020854
        },
        "e-40": {
            "id": "e-40",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-41"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66db6196aedd1f29a107fe24|6c701559-244c-1469-639d-56c4c81c569c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66db6196aedd1f29a107fe24|6c701559-244c-1469-639d-56c4c81c569c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725526798605
        },
        "e-42": {
            "id": "e-42",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "NAVBAR_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-43"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66db6196aedd1f29a107fe24|f3f44c31-1f0b-00a4-feb4-8abf5f2ed5b8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66db6196aedd1f29a107fe24|f3f44c31-1f0b-00a4-feb4-8abf5f2ed5b8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725543375414
        },
        "e-43": {
            "id": "e-43",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "NAVBAR_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-42"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66db6196aedd1f29a107fe24|f3f44c31-1f0b-00a4-feb4-8abf5f2ed5b8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66db6196aedd1f29a107fe24|f3f44c31-1f0b-00a4-feb4-8abf5f2ed5b8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725543375415
        },
        "e-44": {
            "id": "e-44",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-45"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66db6196aedd1f29a107fe24|1479cf39-cf2f-ccaa-8a03-47ce782dfa5c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66db6196aedd1f29a107fe24|1479cf39-cf2f-ccaa-8a03-47ce782dfa5c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725619102844
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "Hover-naw-link",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".naw-line-link",
                            "selectorGuids": ["9ae22484-3ee4-e6de-ed60-20b7a124b3fb"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".naw-line-link",
                            "selectorGuids": ["9ae22484-3ee4-e6de-ed60-20b7a124b3fb"]
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1725384461571
        },
        "a-2": {
            "id": "a-2",
            "title": "Hover-naw-link 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-2-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".naw-line-link",
                            "selectorGuids": ["9ae22484-3ee4-e6de-ed60-20b7a124b3fb"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1725384461571
        },
        "a-3": {
            "id": "a-3",
            "title": "Hover link-social",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-3-n-5",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".bg-soc",
                            "selectorGuids": ["f68aedee-7259-a944-4781-b9eb7e34cf1e"]
                        },
                        "globalSwatchId": "--red",
                        "rValue": 215,
                        "bValue": 56,
                        "gValue": 47,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-3-n-6",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".bg-soc",
                            "selectorGuids": ["f68aedee-7259-a944-4781-b9eb7e34cf1e"]
                        },
                        "globalSwatchId": "--yellow",
                        "rValue": 255,
                        "bValue": 0,
                        "gValue": 199,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1725445144664
        },
        "a-4": {
            "id": "a-4",
            "title": "Hover link-social 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-4-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".bg-soc",
                            "selectorGuids": ["f68aedee-7259-a944-4781-b9eb7e34cf1e"]
                        },
                        "globalSwatchId": "--red",
                        "rValue": 215,
                        "bValue": 56,
                        "gValue": 47,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1725445144664
        },
        "a-5": {
            "id": "a-5",
            "title": "Hower Link Token",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-5-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".svg-arrow",
                            "selectorGuids": ["fe349b39-3fe4-8211-8ccf-756b7f4b0475"]
                        },
                        "xValue": 0,
                        "xUnit": "rem",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".svg-arrow",
                            "selectorGuids": ["fe349b39-3fe4-8211-8ccf-756b7f4b0475"]
                        },
                        "xValue": 1,
                        "xUnit": "rem",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1725445857298
        },
        "a-6": {
            "id": "a-6",
            "title": "Hower Link Token 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-6-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".svg-arrow",
                            "selectorGuids": ["fe349b39-3fe4-8211-8ccf-756b7f4b0475"]
                        },
                        "xValue": 0,
                        "xUnit": "rem",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1725445857298
        },
        "a-7": {
            "id": "a-7",
            "title": "Scroll Hiro",
            "continuousParameterGroups": [{
                "id": "a-7-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-7-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "66db6196aedd1f29a107fe24|6ac9f3e4-cafa-c84e-78bf-ed274c6ab2e5"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 90,
                    "actionItems": [{
                        "id": "a-7-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "66db6196aedd1f29a107fe24|6ac9f3e4-cafa-c84e-78bf-ed274c6ab2e5"
                            },
                            "yValue": 5,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1725446357858
        },
        "a-10": {
            "id": "a-10",
            "title": "Scroll Wat Is",
            "continuousParameterGroups": [{
                "id": "a-10-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 25,
                    "actionItems": [{
                        "id": "a-10-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "66db6196aedd1f29a107fe24|43f21692-b50c-41d3-44d5-eb05e5455b0f"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-10-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "66db6196aedd1f29a107fe24|43f21692-b50c-41d3-44d5-eb05e5455b0f"
                            },
                            "yValue": 5,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1725448441075
        },
        "a-11": {
            "id": "a-11",
            "title": "Scroll How To Bye",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|fc98c25d-3d25-477b-087d-d51afeafe1f2"
                        },
                        "yValue": 7,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|fc98c25d-3d25-477b-087d-d51afeafe1f2"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|0991edcf-e54d-4274-f86d-579a90105d58"
                        },
                        "yValue": 7,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|0991edcf-e54d-4274-f86d-579a90105d58"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|08b84bda-a0fb-9707-75b1-7f9ea0d5468f"
                        },
                        "yValue": 7,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|08b84bda-a0fb-9707-75b1-7f9ea0d5468f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|4aa71380-1d98-9201-919b-ae682b6e7da1"
                        },
                        "yValue": 7,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|4aa71380-1d98-9201-919b-ae682b6e7da1"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|fc98c25d-3d25-477b-087d-d51afeafe1f2"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|fc98c25d-3d25-477b-087d-d51afeafe1f2"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "outSine",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|0991edcf-e54d-4274-f86d-579a90105d58"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "outSine",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|0991edcf-e54d-4274-f86d-579a90105d58"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-13",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "outSine",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|08b84bda-a0fb-9707-75b1-7f9ea0d5468f"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-14",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "outSine",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|08b84bda-a0fb-9707-75b1-7f9ea0d5468f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 600,
                        "easing": "outSine",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|4aa71380-1d98-9201-919b-ae682b6e7da1"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-16",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 600,
                        "easing": "outSine",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|4aa71380-1d98-9201-919b-ae682b6e7da1"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1725447792497
        },
        "a-12": {
            "id": "a-12",
            "title": "Scroll How To Bye",
            "continuousParameterGroups": [{
                "id": "a-12-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-12-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "66db6196aedd1f29a107fe24|77c3d0c0-c219-b5cb-1753-1ea060f0f3b3"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-12-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "66db6196aedd1f29a107fe24|29833a8f-23d9-beab-4616-154df5ebcb39"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-12-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "66db6196aedd1f29a107fe24|77c3d0c0-c219-b5cb-1753-1ea060f0f3b3"
                            },
                            "yValue": 10,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-12-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "66db6196aedd1f29a107fe24|29833a8f-23d9-beab-4616-154df5ebcb39"
                            },
                            "yValue": 10,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1725449137069
        },
        "a-13": {
            "id": "a-13",
            "title": "Scroll Art",
            "continuousParameterGroups": [{
                "id": "a-13-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 15,
                    "actionItems": [{
                        "id": "a-13-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "66db6196aedd1f29a107fe24|a05aa57c-4e55-0d59-1946-93c3ff50a270"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-13-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "66db6196aedd1f29a107fe24|a05aa57c-4e55-0d59-1946-93c3ff50a270"
                            },
                            "yValue": -10,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1725449559137
        },
        "a-14": {
            "id": "a-14",
            "title": "Scroll People",
            "continuousParameterGroups": [{
                "id": "a-14-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 48,
                    "actionItems": [{
                        "id": "a-14-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "66db6196aedd1f29a107fe24|58be2d76-9d05-80c0-dc39-96d7da2dcea1"
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }]
                }, {
                    "keyframe": 90,
                    "actionItems": [{
                        "id": "a-14-n-2",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "66db6196aedd1f29a107fe24|58be2d76-9d05-80c0-dc39-96d7da2dcea1"
                            },
                            "xValue": 1.1,
                            "yValue": 1.1,
                            "locked": true
                        }
                    }]
                }]
            }],
            "createdOn": 1725450683062
        },
        "a-15": {
            "id": "a-15",
            "title": "Click Big Btn",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-15-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".box-copied",
                            "selectorGuids": ["11b4b81d-9e04-7b44-02f8-9d32f7adbea6"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-15-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 100,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".box-copied",
                            "selectorGuids": ["11b4b81d-9e04-7b44-02f8-9d32f7adbea6"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-15-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 1000,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".box-copied",
                            "selectorGuids": ["11b4b81d-9e04-7b44-02f8-9d32f7adbea6"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1725465986806
        },
        "a-16": {
            "id": "a-16",
            "title": "Scroll Footer",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-16-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "66db6196aedd1f29a107fe24|696696a1-6047-58cf-5395-8a2d78bc1e92"
                        },
                        "yValue": 50,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-16-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "66db6196aedd1f29a107fe24|696696a1-6047-58cf-5395-8a2d78bc1e92"
                        },
                        "zValue": -90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-16-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "66db6196aedd1f29a107fe24|696696a1-6047-58cf-5395-8a2d78bc1e92"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-16-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "66db6196aedd1f29a107fe24|696696a1-6047-58cf-5395-8a2d78bc1e92"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-16-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "66db6196aedd1f29a107fe24|696696a1-6047-58cf-5395-8a2d78bc1e92"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-16-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "66db6196aedd1f29a107fe24|696696a1-6047-58cf-5395-8a2d78bc1e92"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1725467307258
        },
        "a-9": {
            "id": "a-9",
            "title": "Scroll Token",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|29d80df7-b288-a89f-0112-7d5bdae9aa78"
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|29d80df7-b288-a89f-0112-7d5bdae9aa78"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|b7a82d0c-5bd5-1bc0-a0c9-87a261254b8d"
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|b7a82d0c-5bd5-1bc0-a0c9-87a261254b8d"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|11a31403-77a9-0ef3-14f8-35dc74f8644d"
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|11a31403-77a9-0ef3-14f8-35dc74f8644d"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|a33292ad-3794-98d2-ee9d-fdf12ffd209b"
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|a33292ad-3794-98d2-ee9d-fdf12ffd209b"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|29d80df7-b288-a89f-0112-7d5bdae9aa78"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-16",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|29d80df7-b288-a89f-0112-7d5bdae9aa78"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-15",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|b7a82d0c-5bd5-1bc0-a0c9-87a261254b8d"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-14",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|b7a82d0c-5bd5-1bc0-a0c9-87a261254b8d"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-13",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|11a31403-77a9-0ef3-14f8-35dc74f8644d"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|11a31403-77a9-0ef3-14f8-35dc74f8644d"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 600,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|a33292ad-3794-98d2-ee9d-fdf12ffd209b"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 600,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|a33292ad-3794-98d2-ee9d-fdf12ffd209b"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1725447792497
        },
        "a-17": {
            "id": "a-17",
            "title": "Naw Open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-17-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|02204c1c-d04e-4040-f515-d3a7ddefe946"
                        },
                        "yValue": 0,
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "deg",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-17-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|beb737b1-178f-fd54-74ec-da7ccccab56e"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-17-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|beb737b1-178f-fd54-74ec-da7ccccab56e"
                        },
                        "yValue": 0,
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "deg",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-17-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|7de5c6eb-be6e-a2a0-aba0-313b3c15e142"
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-17-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|02204c1c-d04e-4040-f515-d3a7ddefe946"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-17-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|02204c1c-d04e-4040-f515-d3a7ddefe946"
                        },
                        "yValue": 0,
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "deg",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-17-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|02204c1c-d04e-4040-f515-d3a7ddefe946"
                        },
                        "yValue": 0.7,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-17-n-9",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|7de5c6eb-be6e-a2a0-aba0-313b3c15e142"
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-17-n-8",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|beb737b1-178f-fd54-74ec-da7ccccab56e"
                        },
                        "yValue": 0,
                        "zValue": -45,
                        "xUnit": "DEG",
                        "yUnit": "deg",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-17-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|beb737b1-178f-fd54-74ec-da7ccccab56e"
                        },
                        "yValue": -0.7,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1725543406759
        },
        "a-18": {
            "id": "a-18",
            "title": "Naw Close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-18-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|02204c1c-d04e-4040-f515-d3a7ddefe946"
                        },
                        "yValue": 0,
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "deg",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-18-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|beb737b1-178f-fd54-74ec-da7ccccab56e"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-18-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|beb737b1-178f-fd54-74ec-da7ccccab56e"
                        },
                        "yValue": 0,
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "deg",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-18-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|7de5c6eb-be6e-a2a0-aba0-313b3c15e142"
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-18-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "66db6196aedd1f29a107fe24|02204c1c-d04e-4040-f515-d3a7ddefe946"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1725543406759
        },
        "a-8": {
            "id": "a-8",
            "title": "Hiro-load",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-8-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": [0.165, 0.84, 0.44, 1],
                        "duration": 1000,
                        "target": {
                            "id": "66db6196aedd1f29a107fe24|95ea0b14-a11c-2327-e8c5-a84e8a45a64b"
                        },
                        "yValue": 50,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "66db6196aedd1f29a107fe24|2fccaea2-fc88-def8-09fc-523dad0878e5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-8-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "66db6196aedd1f29a107fe24|2fccaea2-fc88-def8-09fc-523dad0878e5"
                        },
                        "yValue": 16,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-11",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "66db6196aedd1f29a107fe24|2fccaea2-fc88-def8-09fc-523dad0878e5"
                        },
                        "zValue": 15,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-8-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "66db6196aedd1f29a107fe24|f58287f6-0cd7-da5d-fac6-230084f2c2a1"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-8-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "66db6196aedd1f29a107fe24|2e69d58a-2ad4-2bd8-220f-e2cbb28bf072"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-8-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": [0.165, 0.84, 0.44, 1],
                        "duration": 1000,
                        "target": {
                            "id": "66db6196aedd1f29a107fe24|b9a90e68-cf49-6e13-37be-ecfb1ae66126"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-8-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": [0.165, 0.84, 0.44, 1],
                        "duration": 1000,
                        "target": {
                            "id": "66db6196aedd1f29a107fe24|b9a90e68-cf49-6e13-37be-ecfb1ae66126"
                        },
                        "yValue": 7,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": [0.165, 0.84, 0.44, 1],
                        "duration": 1000,
                        "target": {
                            "id": "66db6196aedd1f29a107fe24|95ea0b14-a11c-2327-e8c5-a84e8a45a64b"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-13",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": [0.165, 0.84, 0.44, 1],
                        "duration": 1000,
                        "target": {
                            "id": "66db6196aedd1f29a107fe24|2fccaea2-fc88-def8-09fc-523dad0878e5"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-14",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": [0.165, 0.84, 0.44, 1],
                        "duration": 1000,
                        "target": {
                            "id": "66db6196aedd1f29a107fe24|2fccaea2-fc88-def8-09fc-523dad0878e5"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-8-n-16",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "id": "66db6196aedd1f29a107fe24|2fccaea2-fc88-def8-09fc-523dad0878e5"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-8-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "66db6196aedd1f29a107fe24|f58287f6-0cd7-da5d-fac6-230084f2c2a1"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-8-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "id": "66db6196aedd1f29a107fe24|2e69d58a-2ad4-2bd8-220f-e2cbb28bf072"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-8-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "ease",
                        "duration": 800,
                        "target": {
                            "id": "66db6196aedd1f29a107fe24|b9a90e68-cf49-6e13-37be-ecfb1ae66126"
                        },
                        "xValue": null,
                        "yValue": 0,
                        "xUnit": "px",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": [0.165, 0.84, 0.44, 1],
                        "duration": 200,
                        "target": {
                            "id": "66db6196aedd1f29a107fe24|b9a90e68-cf49-6e13-37be-ecfb1ae66126"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1725446667128
        },
        "jiggle": {
            "id": "jiggle",
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 100,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "zValue": -5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 100,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "zValue": 5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 100,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "zValue": -5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 100,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "zValue": 5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 100,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "zValue": -5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 100,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "zValue": 5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 100,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "zValue": -5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 100,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "zValue": 5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 100,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "zValue": -5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 100,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "zValue": 5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 100,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }]
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});
