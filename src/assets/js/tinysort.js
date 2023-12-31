/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
(function (a, c) {
    if (typeof define === 'function' && define.amd) {
        define('tinysort', b);
    } else {
        a.tinysort = c;
    }
    function b() {
        return c;
    }
})(
    this,
    (function () {
        var k = !1,
            d,
            m = null,
            i = window,
            o = i.document,
            b = parseFloat,
            c = /(-?\d+\.?\d*)\s*$/g,
            j = /(\d+\.?\d*)\s*$/g,
            f = [],
            a = 0,
            n = 0,
            e = {
                selector: m,
                order: 'asc',
                attr: m,
                data: m,
                useVal: k,
                place: 'org',
                returns: k,
                cases: k,
                forceStrings: k,
                ignoreDashes: k,
                sortFunction: m,
                useFlex: k,
                emptyEnd: k,
            };
        d;
        function p(L, t) {
            if (z(L)) {
                L = o.querySelectorAll(L);
            }
            if (L.length === 0) {
                console.warn('No elements to sort');
            }
            var q = o.createDocumentFragment(),
                A = [],
                G = [],
                D = [],
                v,
                w = [],
                x,
                y = true,
                H =
                    L.length &&
                    (t === d || t.useFlex !== false) &&
                    getComputedStyle(L[0].parentNode, null).display.indexOf('flex') !== -1;
            u.apply(m, Array.prototype.slice.call(arguments, 1));
            I();
            J();
            s();
            function u() {
                if (arguments.length === 0) {
                    K({});
                } else {
                    g(arguments, function (M) {
                        K(z(M) ? { selector: M } : M);
                    });
                }
                a = w.length;
            }
            function K(N) {
                var O = !!N.selector,
                    M = O && N.selector[0] === ':',
                    P = l(N || {}, e);
                w.push(
                    l(
                        {
                            hasSelector: O,
                            hasAttr: !(P.attr === m || P.attr === ''),
                            hasData: P.data !== m,
                            hasFilter: M,
                            sortReturnNumber: P.order === 'asc' ? 1 : -1,
                        },
                        P,
                    ),
                );
            }
            function I() {
                g(L, function (T, P) {
                    if (!x) {
                        x = T.parentNode;
                    } else {
                        if (x !== T.parentNode) {
                            y = false;
                        }
                    }
                    var S = w[0],
                        N = S.hasFilter,
                        M = S.selector,
                        Q = !M || (N && T.matchesSelector(M)) || (M && T.querySelector(M)),
                        O = Q ? G : D,
                        R = { elm: T, pos: P, posn: O.length };
                    A.push(R);
                    O.push(R);
                });
                v = G.slice(0);
            }
            function J() {
                G.sort(F);
            }
            function F(X, W) {
                var Q = 0;
                if (n !== 0) {
                    n = 0;
                }
                while (Q === 0 && n < a) {
                    var Y = w[n],
                        V = Y.ignoreDashes ? j : c;
                    g(f, function (aa) {
                        var ab = aa.prepare;
                        if (ab) {
                            ab(Y);
                        }
                    });
                    if (Y.sortFunction) {
                        Q = Y.sortFunction(X, W);
                    } else {
                        if (Y.order == 'rand') {
                            Q = Math.random() < 0.5 ? 1 : -1;
                        } else {
                            var O = k,
                                N = C(X, Y),
                                Z = C(W, Y),
                                U = N === '' || N === d,
                                S = Z === '' || Z === d;
                            if (N === Z) {
                                Q = 0;
                            } else {
                                if (Y.emptyEnd && (U || S)) {
                                    Q = U && S ? 0 : U ? 1 : -1;
                                } else {
                                    if (!Y.forceStrings) {
                                        var P = z(N) ? N && N.match(V) : k,
                                            M = z(Z) ? Z && Z.match(V) : k;
                                        if (P && M) {
                                            var T = N.substr(0, N.length - P[0].length),
                                                R = Z.substr(0, Z.length - M[0].length);
                                            if (T == R) {
                                                O = !k;
                                                N = b(P[0]);
                                                Z = b(M[0]);
                                            }
                                        }
                                    }
                                    if (N === d || Z === d) {
                                        Q = 0;
                                    } else {
                                        Q = N < Z ? -1 : N > Z ? 1 : 0;
                                    }
                                }
                            }
                        }
                    }
                    g(f, function (ab) {
                        var aa = ab.sort;
                        if (aa) {
                            Q = aa(Y, O, N, Z, Q);
                        }
                    });
                    Q *= Y.sortReturnNumber;
                    if (Q === 0) {
                        n++;
                    }
                }
                if (Q === 0) {
                    Q = X.pos > W.pos ? 1 : -1;
                }
                return Q;
            }
            function s() {
                var P = G.length === A.length;
                if (y && P) {
                    if (H) {
                        G.forEach(function (Z, Y) {
                            Z.elm.style.order = Y;
                        });
                    } else {
                        if (x) {
                            x.appendChild(E());
                        } else {
                            console.warn('parentNode has been removed');
                        }
                    }
                } else {
                    var X = w[0],
                        Q = X.place,
                        O = Q === 'org',
                        V = Q === 'start',
                        T = Q === 'end',
                        N = Q === 'first',
                        R = Q === 'last';
                    if (O) {
                        G.forEach(r);
                        G.forEach(function (Z, Y) {
                            B(v[Y], Z.elm);
                        });
                    } else {
                        if (V || T) {
                            var U = v[V ? 0 : v.length - 1],
                                M = U.elm.parentNode,
                                S = V ? M.firstChild : M.lastChild;
                            if (S !== U.elm) {
                                U = { elm: S };
                            }
                            r(U);
                            T && M.appendChild(U.ghost);
                            B(U, E());
                        } else {
                            if (N || R) {
                                var W = v[N ? 0 : v.length - 1];
                                B(r(W), E());
                            }
                        }
                    }
                }
            }
            function E() {
                G.forEach(function (M) {
                    q.appendChild(M.elm);
                });
                return q;
            }
            function r(N) {
                var M = N.elm,
                    O = o.createElement('div');
                N.ghost = O;
                M.parentNode.insertBefore(O, M);
                return N;
            }
            function B(M, P) {
                var O = M.ghost,
                    N = O.parentNode;
                N.insertBefore(P, O);
                N.removeChild(O);
                delete M.ghost;
            }
            function C(O, N) {
                var P,
                    M = O.elm;
                if (N.selector) {
                    if (N.hasFilter) {
                        if (!M.matchesSelector(N.selector)) {
                            M = m;
                        }
                    } else {
                        M = M.querySelector(N.selector);
                    }
                }
                if (N.hasAttr) {
                    P = M.getAttribute(N.attr);
                } else {
                    if (N.useVal) {
                        P = M.value || M.getAttribute('value');
                    } else {
                        if (N.hasData) {
                            P = M.getAttribute('data-' + N.data);
                        } else {
                            if (M) {
                                P = M.textContent;
                            }
                        }
                    }
                }
                if (z(P)) {
                    if (!N.cases) {
                        P = P.toLowerCase();
                    }
                    P = P.replace(/\s+/g, ' ');
                }
                return P;
            }
            function z(M) {
                return typeof M === 'string';
            }
            return G.map(function (M) {
                return M.elm;
            });
        }
        function g(u, t) {
            var q = u.length,
                s = q,
                r;
            while (s--) {
                r = q - s - 1;
                t(u[r], r);
            }
        }
        function l(u, r, q) {
            for (var t in r) {
                if (q || u[t] === d) {
                    u[t] = r[t];
                }
            }
            return u;
        }
        function h(q, r, s) {
            f.push({ prepare: q, sort: r, sortBy: s });
        }
        i.Element &&
            (function (q) {
                q.matchesSelector =
                    q.matchesSelector ||
                    q.mozMatchesSelector ||
                    q.msMatchesSelector ||
                    q.oMatchesSelector ||
                    q.webkitMatchesSelector ||
                    function (r) {
                        var u = this,
                            s = (u.parentNode || u.document).querySelectorAll(r),
                            t = -1;
                        while (s[++t] && s[t] != u) {}
                        return !!s[t];
                    };
            })(Element.prototype);
        l(h, { loop: g });
        return l(p, { plugin: h, defaults: e });
    })(),
);
