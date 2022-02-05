(() => {
  var __pow = Math.pow;

  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var i;
  var t;
  var r;
  var o;
  var f;
  var e = {};
  var c = [];
  var s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function a(n2, l2) {
    for (var u3 in l2)
      n2[u3] = l2[u3];
    return n2;
  }
  function h(n2) {
    var l2 = n2.parentNode;
    l2 && l2.removeChild(n2);
  }
  function v(l2, u3, i3) {
    var t3, r3, o3, f3 = {};
    for (o3 in u3)
      o3 == "key" ? t3 = u3[o3] : o3 == "ref" ? r3 = u3[o3] : f3[o3] = u3[o3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), typeof l2 == "function" && l2.defaultProps != null)
      for (o3 in l2.defaultProps)
        f3[o3] === void 0 && (f3[o3] = l2.defaultProps[o3]);
    return y(l2, f3, t3, r3, null);
  }
  function y(n2, i3, t3, r3, o3) {
    var f3 = { type: n2, props: i3, key: t3, ref: r3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o3 == null ? ++u : o3 };
    return o3 == null && l.vnode != null && l.vnode(f3), f3;
  }
  function d(n2) {
    return n2.children;
  }
  function _(n2, l2) {
    this.props = n2, this.context = l2;
  }
  function k(n2, l2) {
    if (l2 == null)
      return n2.__ ? k(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l2 < n2.__k.length; l2++)
      if ((u3 = n2.__k[l2]) != null && u3.__e != null)
        return u3.__e;
    return typeof n2.type == "function" ? k(n2) : null;
  }
  function b(n2) {
    var l2, u3;
    if ((n2 = n2.__) != null && n2.__c != null) {
      for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
        if ((u3 = n2.__k[l2]) != null && u3.__e != null) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return b(n2);
    }
  }
  function m(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(g);
  }
  function g() {
    for (var n2; g.__r = t.length; )
      n2 = t.sort(function(n3, l2) {
        return n3.__v.__b - l2.__v.__b;
      }), t = [], n2.some(function(n3) {
        var l2, u3, i3, t3, r3, o3;
        n3.__d && (r3 = (t3 = (l2 = n3).__v).__e, (o3 = l2.__P) && (u3 = [], (i3 = a({}, t3)).__v = t3.__v + 1, j(o3, t3, i3, l2.__n, o3.ownerSVGElement !== void 0, t3.__h != null ? [r3] : null, u3, r3 == null ? k(t3) : r3, t3.__h), z(u3, t3), t3.__e != r3 && b(t3)));
      });
  }
  function w(n2, l2, u3, i3, t3, r3, o3, f3, s3, a3) {
    var h2, v3, p, _2, b3, m3, g3, w2 = i3 && i3.__k || c, A = w2.length;
    for (u3.__k = [], h2 = 0; h2 < l2.length; h2++)
      if ((_2 = u3.__k[h2] = (_2 = l2[h2]) == null || typeof _2 == "boolean" ? null : typeof _2 == "string" || typeof _2 == "number" || typeof _2 == "bigint" ? y(null, _2, null, null, _2) : Array.isArray(_2) ? y(d, { children: _2 }, null, null, null) : _2.__b > 0 ? y(_2.type, _2.props, _2.key, null, _2.__v) : _2) != null) {
        if (_2.__ = u3, _2.__b = u3.__b + 1, (p = w2[h2]) === null || p && _2.key == p.key && _2.type === p.type)
          w2[h2] = void 0;
        else
          for (v3 = 0; v3 < A; v3++) {
            if ((p = w2[v3]) && _2.key == p.key && _2.type === p.type) {
              w2[v3] = void 0;
              break;
            }
            p = null;
          }
        j(n2, _2, p = p || e, t3, r3, o3, f3, s3, a3), b3 = _2.__e, (v3 = _2.ref) && p.ref != v3 && (g3 || (g3 = []), p.ref && g3.push(p.ref, null, _2), g3.push(v3, _2.__c || b3, _2)), b3 != null ? (m3 == null && (m3 = b3), typeof _2.type == "function" && _2.__k === p.__k ? _2.__d = s3 = x(_2, s3, n2) : s3 = P(n2, _2, p, w2, b3, s3), typeof u3.type == "function" && (u3.__d = s3)) : s3 && p.__e == s3 && s3.parentNode != n2 && (s3 = k(p));
      }
    for (u3.__e = m3, h2 = A; h2--; )
      w2[h2] != null && (typeof u3.type == "function" && w2[h2].__e != null && w2[h2].__e == u3.__d && (u3.__d = k(i3, h2 + 1)), N(w2[h2], w2[h2]));
    if (g3)
      for (h2 = 0; h2 < g3.length; h2++)
        M(g3[h2], g3[++h2], g3[++h2]);
  }
  function x(n2, l2, u3) {
    for (var i3, t3 = n2.__k, r3 = 0; t3 && r3 < t3.length; r3++)
      (i3 = t3[r3]) && (i3.__ = n2, l2 = typeof i3.type == "function" ? x(i3, l2, u3) : P(u3, i3, i3, t3, i3.__e, l2));
    return l2;
  }
  function P(n2, l2, u3, i3, t3, r3) {
    var o3, f3, e3;
    if (l2.__d !== void 0)
      o3 = l2.__d, l2.__d = void 0;
    else if (u3 == null || t3 != r3 || t3.parentNode == null)
      n:
        if (r3 == null || r3.parentNode !== n2)
          n2.appendChild(t3), o3 = null;
        else {
          for (f3 = r3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 2)
            if (f3 == t3)
              break n;
          n2.insertBefore(t3, r3), o3 = r3;
        }
    return o3 !== void 0 ? o3 : t3.nextSibling;
  }
  function C(n2, l2, u3, i3, t3) {
    var r3;
    for (r3 in u3)
      r3 === "children" || r3 === "key" || r3 in l2 || H(n2, r3, null, u3[r3], i3);
    for (r3 in l2)
      t3 && typeof l2[r3] != "function" || r3 === "children" || r3 === "key" || r3 === "value" || r3 === "checked" || u3[r3] === l2[r3] || H(n2, r3, l2[r3], u3[r3], i3);
  }
  function $(n2, l2, u3) {
    l2[0] === "-" ? n2.setProperty(l2, u3) : n2[l2] = u3 == null ? "" : typeof u3 != "number" || s.test(l2) ? u3 : u3 + "px";
  }
  function H(n2, l2, u3, i3, t3) {
    var r3;
    n:
      if (l2 === "style")
        if (typeof u3 == "string")
          n2.style.cssText = u3;
        else {
          if (typeof i3 == "string" && (n2.style.cssText = i3 = ""), i3)
            for (l2 in i3)
              u3 && l2 in u3 || $(n2.style, l2, "");
          if (u3)
            for (l2 in u3)
              i3 && u3[l2] === i3[l2] || $(n2.style, l2, u3[l2]);
        }
      else if (l2[0] === "o" && l2[1] === "n")
        r3 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r3] = u3, u3 ? i3 || n2.addEventListener(l2, r3 ? T : I, r3) : n2.removeEventListener(l2, r3 ? T : I, r3);
      else if (l2 !== "dangerouslySetInnerHTML") {
        if (t3)
          l2 = l2.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if (l2 !== "href" && l2 !== "list" && l2 !== "form" && l2 !== "tabIndex" && l2 !== "download" && l2 in n2)
          try {
            n2[l2] = u3 == null ? "" : u3;
            break n;
          } catch (n3) {
          }
        typeof u3 == "function" || (u3 != null && (u3 !== false || l2[0] === "a" && l2[1] === "r") ? n2.setAttribute(l2, u3) : n2.removeAttribute(l2));
      }
  }
  function I(n2) {
    this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function T(n2) {
    this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function j(n2, u3, i3, t3, r3, o3, f3, e3, c3) {
    var s3, h2, v3, y3, p, k3, b3, m3, g3, x3, A, P2 = u3.type;
    if (u3.constructor !== void 0)
      return null;
    i3.__h != null && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, o3 = [e3]), (s3 = l.__b) && s3(u3);
    try {
      n:
        if (typeof P2 == "function") {
          if (m3 = u3.props, g3 = (s3 = P2.contextType) && t3[s3.__c], x3 = s3 ? g3 ? g3.props.value : s3.__ : t3, i3.__c ? b3 = (h2 = u3.__c = i3.__c).__ = h2.__E : ("prototype" in P2 && P2.prototype.render ? u3.__c = h2 = new P2(m3, x3) : (u3.__c = h2 = new _(m3, x3), h2.constructor = P2, h2.render = O), g3 && g3.sub(h2), h2.props = m3, h2.state || (h2.state = {}), h2.context = x3, h2.__n = t3, v3 = h2.__d = true, h2.__h = []), h2.__s == null && (h2.__s = h2.state), P2.getDerivedStateFromProps != null && (h2.__s == h2.state && (h2.__s = a({}, h2.__s)), a(h2.__s, P2.getDerivedStateFromProps(m3, h2.__s))), y3 = h2.props, p = h2.state, v3)
            P2.getDerivedStateFromProps == null && h2.componentWillMount != null && h2.componentWillMount(), h2.componentDidMount != null && h2.__h.push(h2.componentDidMount);
          else {
            if (P2.getDerivedStateFromProps == null && m3 !== y3 && h2.componentWillReceiveProps != null && h2.componentWillReceiveProps(m3, x3), !h2.__e && h2.shouldComponentUpdate != null && h2.shouldComponentUpdate(m3, h2.__s, x3) === false || u3.__v === i3.__v) {
              h2.props = m3, h2.state = h2.__s, u3.__v !== i3.__v && (h2.__d = false), h2.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), h2.__h.length && f3.push(h2);
              break n;
            }
            h2.componentWillUpdate != null && h2.componentWillUpdate(m3, h2.__s, x3), h2.componentDidUpdate != null && h2.__h.push(function() {
              h2.componentDidUpdate(y3, p, k3);
            });
          }
          h2.context = x3, h2.props = m3, h2.state = h2.__s, (s3 = l.__r) && s3(u3), h2.__d = false, h2.__v = u3, h2.__P = n2, s3 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s, h2.getChildContext != null && (t3 = a(a({}, t3), h2.getChildContext())), v3 || h2.getSnapshotBeforeUpdate == null || (k3 = h2.getSnapshotBeforeUpdate(y3, p)), A = s3 != null && s3.type === d && s3.key == null ? s3.props.children : s3, w(n2, Array.isArray(A) ? A : [A], u3, i3, t3, r3, o3, f3, e3, c3), h2.base = u3.__e, u3.__h = null, h2.__h.length && f3.push(h2), b3 && (h2.__E = h2.__ = null), h2.__e = false;
        } else
          o3 == null && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t3, r3, o3, f3, c3);
      (s3 = l.diffed) && s3(u3);
    } catch (n3) {
      u3.__v = null, (c3 || o3 != null) && (u3.__e = e3, u3.__h = !!c3, o3[o3.indexOf(e3)] = null), l.__e(n3, u3, i3);
    }
  }
  function z(n2, u3) {
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function L(l2, u3, i3, t3, r3, o3, f3, c3) {
    var s3, a3, v3, y3 = i3.props, p = u3.props, d3 = u3.type, _2 = 0;
    if (d3 === "svg" && (r3 = true), o3 != null) {
      for (; _2 < o3.length; _2++)
        if ((s3 = o3[_2]) && "setAttribute" in s3 == !!d3 && (d3 ? s3.localName === d3 : s3.nodeType === 3)) {
          l2 = s3, o3[_2] = null;
          break;
        }
    }
    if (l2 == null) {
      if (d3 === null)
        return document.createTextNode(p);
      l2 = r3 ? document.createElementNS("http://www.w3.org/2000/svg", d3) : document.createElement(d3, p.is && p), o3 = null, c3 = false;
    }
    if (d3 === null)
      y3 === p || c3 && l2.data === p || (l2.data = p);
    else {
      if (o3 = o3 && n.call(l2.childNodes), a3 = (y3 = i3.props || e).dangerouslySetInnerHTML, v3 = p.dangerouslySetInnerHTML, !c3) {
        if (o3 != null)
          for (y3 = {}, _2 = 0; _2 < l2.attributes.length; _2++)
            y3[l2.attributes[_2].name] = l2.attributes[_2].value;
        (v3 || a3) && (v3 && (a3 && v3.__html == a3.__html || v3.__html === l2.innerHTML) || (l2.innerHTML = v3 && v3.__html || ""));
      }
      if (C(l2, p, y3, r3, c3), v3)
        u3.__k = [];
      else if (_2 = u3.props.children, w(l2, Array.isArray(_2) ? _2 : [_2], u3, i3, t3, r3 && d3 !== "foreignObject", o3, f3, o3 ? o3[0] : i3.__k && k(i3, 0), c3), o3 != null)
        for (_2 = o3.length; _2--; )
          o3[_2] != null && h(o3[_2]);
      c3 || ("value" in p && (_2 = p.value) !== void 0 && (_2 !== y3.value || _2 !== l2.value || d3 === "progress" && !_2) && H(l2, "value", _2, y3.value, false), "checked" in p && (_2 = p.checked) !== void 0 && _2 !== l2.checked && H(l2, "checked", _2, y3.checked, false));
    }
    return l2;
  }
  function M(n2, u3, i3) {
    try {
      typeof n2 == "function" ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, i3);
    }
  }
  function N(n2, u3, i3) {
    var t3, r3;
    if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || M(t3, null, u3)), (t3 = n2.__c) != null) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      t3.base = t3.__P = null;
    }
    if (t3 = n2.__k)
      for (r3 = 0; r3 < t3.length; r3++)
        t3[r3] && N(t3[r3], u3, typeof n2.type != "function");
    i3 || n2.__e == null || h(n2.__e), n2.__e = n2.__d = void 0;
  }
  function O(n2, l2, u3) {
    return this.constructor(n2, u3);
  }
  function S(u3, i3, t3) {
    var r3, o3, f3;
    l.__ && l.__(u3, i3), o3 = (r3 = typeof t3 == "function") ? null : t3 && t3.__k || i3.__k, f3 = [], j(i3, u3 = (!r3 && t3 || i3).__k = v(d, null, [u3]), o3 || e, e, i3.ownerSVGElement !== void 0, !r3 && t3 ? [t3] : o3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, f3, !r3 && t3 ? t3 : o3 ? o3.__e : i3.firstChild, r3), z(f3, u3);
  }
  n = c.slice, l = { __e: function(n2, l2) {
    for (var u3, i3, t3; l2 = l2.__; )
      if ((u3 = l2.__c) && !u3.__)
        try {
          if ((i3 = u3.constructor) && i3.getDerivedStateFromError != null && (u3.setState(i3.getDerivedStateFromError(n2)), t3 = u3.__d), u3.componentDidCatch != null && (u3.componentDidCatch(n2), t3 = u3.__d), t3)
            return u3.__E = u3;
        } catch (l3) {
          n2 = l3;
        }
    throw n2;
  } }, u = 0, i = function(n2) {
    return n2 != null && n2.constructor === void 0;
  }, _.prototype.setState = function(n2, l2) {
    var u3;
    u3 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), typeof n2 == "function" && (n2 = n2(a({}, u3), this.props)), n2 && a(u3, n2), n2 != null && this.__v && (l2 && this.__h.push(l2), m(this));
  }, _.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), m(this));
  }, _.prototype.render = d, t = [], r = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, f = 0;

  // node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var u2;
  var r2;
  var o2 = 0;
  var i2 = [];
  var c2 = l.__b;
  var f2 = l.__r;
  var e2 = l.diffed;
  var a2 = l.__c;
  var v2 = l.unmount;
  function m2(t3, r3) {
    l.__h && l.__h(u2, t3, o2 || r3), o2 = 0;
    var i3 = u2.__H || (u2.__H = { __: [], __h: [] });
    return t3 >= i3.__.length && i3.__.push({}), i3.__[t3];
  }
  function y2(r3, o3) {
    var i3 = m2(t2++, 3);
    !l.__s && k2(i3.__H, o3) && (i3.__ = r3, i3.__H = o3, u2.__H.__h.push(i3));
  }
  function s2(n2) {
    return o2 = 5, d2(function() {
      return { current: n2 };
    }, []);
  }
  function d2(n2, u3) {
    var r3 = m2(t2++, 7);
    return k2(r3.__H, u3) && (r3.__ = n2(), r3.__H = u3, r3.__h = n2), r3.__;
  }
  function x2() {
    for (var t3; t3 = i2.shift(); )
      if (t3.__P)
        try {
          t3.__H.__h.forEach(g2), t3.__H.__h.forEach(j2), t3.__H.__h = [];
        } catch (u3) {
          t3.__H.__h = [], l.__e(u3, t3.__v);
        }
  }
  l.__b = function(n2) {
    u2 = null, c2 && c2(n2);
  }, l.__r = function(n2) {
    f2 && f2(n2), t2 = 0;
    var r3 = (u2 = n2.__c).__H;
    r3 && (r3.__h.forEach(g2), r3.__h.forEach(j2), r3.__h = []);
  }, l.diffed = function(t3) {
    e2 && e2(t3);
    var o3 = t3.__c;
    o3 && o3.__H && o3.__H.__h.length && (i2.push(o3) !== 1 && r2 === l.requestAnimationFrame || ((r2 = l.requestAnimationFrame) || function(n2) {
      var t4, u3 = function() {
        clearTimeout(r3), b2 && cancelAnimationFrame(t4), setTimeout(n2);
      }, r3 = setTimeout(u3, 100);
      b2 && (t4 = requestAnimationFrame(u3));
    })(x2)), u2 = null;
  }, l.__c = function(t3, u3) {
    u3.some(function(t4) {
      try {
        t4.__h.forEach(g2), t4.__h = t4.__h.filter(function(n2) {
          return !n2.__ || j2(n2);
        });
      } catch (r3) {
        u3.some(function(n2) {
          n2.__h && (n2.__h = []);
        }), u3 = [], l.__e(r3, t4.__v);
      }
    }), a2 && a2(t3, u3);
  }, l.unmount = function(t3) {
    v2 && v2(t3);
    var u3, r3 = t3.__c;
    r3 && r3.__H && (r3.__H.__.forEach(function(n2) {
      try {
        g2(n2);
      } catch (n3) {
        u3 = n3;
      }
    }), u3 && l.__e(u3, r3.__v));
  };
  var b2 = typeof requestAnimationFrame == "function";
  function g2(n2) {
    var t3 = u2, r3 = n2.__c;
    typeof r3 == "function" && (n2.__c = void 0, r3()), u2 = t3;
  }
  function j2(n2) {
    var t3 = u2;
    n2.__c = n2.__(), u2 = t3;
  }
  function k2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, u3) {
      return t4 !== n2[u3];
    });
  }

  // src/core/constants.ts
  var HOURS = 10;
  var RATIO = 100;
  var PERSECOND = ((PERSECOND2) => {
    PERSECOND2[PERSECOND2["SECOND"] = 1] = "SECOND";
    PERSECOND2[PERSECOND2["MINUTE"] = 1 / RATIO] = "MINUTE";
    PERSECOND2[PERSECOND2["HOUR"] = 1 / __pow(RATIO, 2)] = "HOUR";
    return PERSECOND2;
  })(PERSECOND || {});

  // src/views/helpers.ts
  var zeroPosition = Math.PI / 2;
  var fullCircle = Math.PI * 2;
  var fractionalArcLengthToXY = (fraction, center, radius) => {
    return {
      x: center - 15 + radius * Math.cos(zeroPosition + fraction * fullCircle),
      y: center + 15 + radius * Math.sin(zeroPosition + fraction * fullCircle)
    };
  };
  var canvasManager = function(ctx) {
    const center = ctx.canvas.clientWidth / 2;
    const circleFromCenter = function(radius) {
      ctx.arc(center, center, radius, 0, fullCircle);
      return this;
    };
    const loopAround = function(iterations, callback) {
      for (let i3 = 0; i3 < iterations; i3++) {
        ctx.arc(center, center, center, zeroPosition, zeroPosition + fullCircle * i3 / iterations);
        callback(ctx, i3);
      }
      return this;
    };
    const setStyle = function(styleObject) {
      ctx.beginPath();
      Object.assign(ctx, styleObject);
      return this;
    };
    const stroke = function() {
      ctx.stroke();
      return this;
    };
    const fill = function() {
      ctx.fill();
      return this;
    };
    return { setStyle, circleFromCenter, loopAround, stroke, fill };
  };

  // src/views/clock/face.tsx
  var ClockFace = ({ size }) => {
    const canvasRef = s2(null);
    y2(() => {
      if (!canvasRef.current)
        return;
      const ctx = canvasRef.current.getContext("2d");
      const center = size / 2;
      const radius = size / 2;
      canvasManager(ctx).setStyle({ lineWidth: 10, fillStyle: "white", strokeStyle: "grey" }).circleFromCenter(radius - 5).fill().stroke();
      canvasManager(ctx).setStyle({ lineWidth: 1 }).loopAround(RATIO, (ctx2) => ctx2.lineTo(center, center)).stroke();
      canvasManager(ctx).setStyle({ fillStyle: "white" }).circleFromCenter(radius * (7 / 8)).fill();
      canvasManager(ctx).setStyle({ lineWidth: 1 }).loopAround(HOURS, (ctx2) => ctx2.lineTo(center, center)).stroke();
      canvasManager(ctx).setStyle({ fillStyle: "white" }).circleFromCenter(radius * (9 / 11)).fill();
      canvasManager(ctx).setStyle({ fillStyle: "black" }).circleFromCenter(radius * (1 / 25)).fill();
      canvasManager(ctx).setStyle({ font: `${size / 180}rem Arial`, fillStyle: "black" }).loopAround(HOURS, (ctx2, i3) => {
        const { x: x3, y: y3 } = fractionalArcLengthToXY(i3 / HOURS, center, radius * 3 / 4);
        ctx2.fillText(i3.toString(), x3, y3);
      });
    }, [canvasRef.current]);
    return /* @__PURE__ */ v("canvas", {
      ref: canvasRef,
      width: size,
      height: size
    });
  };

  // src/views/clock/index.ts
  var clock_default = ClockFace;

  // src/views/index.tsx
  S(/* @__PURE__ */ v(clock_default, {
    size: 600
  }), document.getElementById("root"));
})();
