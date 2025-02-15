(() => {
  "use strict";
  var e = {
      16: (e, n, t) => {
        t.d(n, { A: () => c });
        var r = t(354),
          o = t.n(r),
          a = t(314),
          i = t.n(a)()(o());
        i.push([
          e.id,
          '/*\n  Josh\'s Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\np {\n  text-wrap: pretty;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n\n/* My Css */\n:root {\n  --snow-background-color: white;\n  --snow-font-color: black;\n  --partially-cloudy-background-color: navy;\n  --partially-cloudy-font-color: white;\n  --overcast-background-color: grey;\n  --overcast-font-color: black;\n  --clear-background-color: skyblue;\n  --clear-font-color: white;\n  --rain-background-color: black;\n  --rain-font-color: white;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: minmax(50px, 1.5fr) minmax(500px, 85vh) minmax(30px, 1fr);\n}\n\nheader,\nfooter {\n  display: grid;\n  place-items: center;\n  font-weight: bold;\n}\n\nheader {\n  font-size: 2rem;\n  grid-template-columns: minmax(100px, 10vw) minmax(300px, 1fr) minmax(100px, 10vw);\n}\n\n.heading {\n  grid-column: 2;\n}\n\n.degree-buttons {\n  display: flex;\n  height: 50%;\n  font-size: 1rem;\n  align-items: center;\n  font-weight: normal;\n}\n\n.degree-button {\n  appearance: none;\n  border: none;\n}\n\n.degree-button:hover {\n  background-color: grey;\n  border: 1px solid grey;\n  font-weight: bold;\n}\n\n.container {\n  opacity: 0.8;\n  display: grid;\n  place-content: center;\n  grid-template: auto minmax(250px, 25vh) / minmax(325px, 20vw);\n}\n\n.container * {\n  opacity: 1;\n}\n\n.content {\n  background-color: rgba(255, 255, 255, 0.6);\n  border-radius: 5px;\n  padding: 1em 2em 2em;\n  display: grid;\n  grid-template-areas:\n    "address address"\n    "logo temperature"\n    "condition condition"\n    "prediction prediction";\n  box-shadow: 2px 2px 5px black;\n  grid-template-columns: minmax(20px, 1fr) minmax(30px, 3fr);\n  grid-template-rows: minmax(30px, 1fr) minmax(50px, 2fr) repeat(2, minmax(15px, 1fr));\n  align-items: center;\n}\n\n.address {\n  grid-area: address;\n}\n\n.logo-container {\n  grid-area: logo;\n}\n\n.temperature-container {\n  font-size: 2rem;\n  grid-area: temperature;\n  justify-self: end;\n  display: flex;\n  align-items: center;\n  gap: 0.2em;\n  font-weight: bold;\n}\n\n.current-condition {\n  grid-area: condition;\n}\n\n.average-condition {\n  grid-area: prediction;\n}\n\nform {\n  display: flex;\n  justify-content: space-between;\n  padding: 1em;\n  border-radius: 5px;\n  box-shadow: 2px -1px 5px black;\n}',
          "",
          {
            version: 3,
            sources: ["webpack://./src/css/style.css"],
            names: [],
            mappings:
              "AAAA;;;CAGC;;AAED;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,mCAAmC;AACrC;;AAEA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;;AAEA;;;;EAIE,aAAa;AACf;;AAEA;;;;;;;EAOE,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;AACnB;AACA;;;;;;EAME,kBAAkB;AACpB;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA,WAAW;AACX;EACE,8BAA8B;EAC9B,wBAAwB;EACxB,yCAAyC;EACzC,oCAAoC;EACpC,iCAAiC;EACjC,4BAA4B;EAC5B,iCAAiC;EACjC,yBAAyB;EACzB,8BAA8B;EAC9B,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,aAAa;EACb,6EAA6E;AAC/E;;AAEA;;EAEE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,iFAAiF;AACnF;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,eAAe;EACf,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,qBAAqB;EACrB,6DAA6D;AAC/D;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,0CAA0C;EAC1C,kBAAkB;EAClB,oBAAoB;EACpB,aAAa;EACb;;;;2BAIyB;EACzB,6BAA6B;EAC7B,0DAA0D;EAC1D,oFAAoF;EACpF,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,YAAY;EACZ,kBAAkB;EAClB,8BAA8B;AAChC",
            sourcesContent: [
              '/*\n  Josh\'s Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\np {\n  text-wrap: pretty;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n\n/* My Css */\n:root {\n  --snow-background-color: white;\n  --snow-font-color: black;\n  --partially-cloudy-background-color: navy;\n  --partially-cloudy-font-color: white;\n  --overcast-background-color: grey;\n  --overcast-font-color: black;\n  --clear-background-color: skyblue;\n  --clear-font-color: white;\n  --rain-background-color: black;\n  --rain-font-color: white;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: minmax(50px, 1.5fr) minmax(500px, 85vh) minmax(30px, 1fr);\n}\n\nheader,\nfooter {\n  display: grid;\n  place-items: center;\n  font-weight: bold;\n}\n\nheader {\n  font-size: 2rem;\n  grid-template-columns: minmax(100px, 10vw) minmax(300px, 1fr) minmax(100px, 10vw);\n}\n\n.heading {\n  grid-column: 2;\n}\n\n.degree-buttons {\n  display: flex;\n  height: 50%;\n  font-size: 1rem;\n  align-items: center;\n  font-weight: normal;\n}\n\n.degree-button {\n  appearance: none;\n  border: none;\n}\n\n.degree-button:hover {\n  background-color: grey;\n  border: 1px solid grey;\n  font-weight: bold;\n}\n\n.container {\n  opacity: 0.8;\n  display: grid;\n  place-content: center;\n  grid-template: auto minmax(250px, 25vh) / minmax(325px, 20vw);\n}\n\n.container * {\n  opacity: 1;\n}\n\n.content {\n  background-color: rgba(255, 255, 255, 0.6);\n  border-radius: 5px;\n  padding: 1em 2em 2em;\n  display: grid;\n  grid-template-areas:\n    "address address"\n    "logo temperature"\n    "condition condition"\n    "prediction prediction";\n  box-shadow: 2px 2px 5px black;\n  grid-template-columns: minmax(20px, 1fr) minmax(30px, 3fr);\n  grid-template-rows: minmax(30px, 1fr) minmax(50px, 2fr) repeat(2, minmax(15px, 1fr));\n  align-items: center;\n}\n\n.address {\n  grid-area: address;\n}\n\n.logo-container {\n  grid-area: logo;\n}\n\n.temperature-container {\n  font-size: 2rem;\n  grid-area: temperature;\n  justify-self: end;\n  display: flex;\n  align-items: center;\n  gap: 0.2em;\n  font-weight: bold;\n}\n\n.current-condition {\n  grid-area: condition;\n}\n\n.average-condition {\n  grid-area: prediction;\n}\n\nform {\n  display: flex;\n  justify-content: space-between;\n  padding: 1em;\n  border-radius: 5px;\n  box-shadow: 2px -1px 5px black;\n}',
            ],
            sourceRoot: "",
          },
        ]);
        const c = i;
      },
      314: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = "",
                  r = void 0 !== n[5];
                return (
                  n[4] && (t += "@supports (".concat(n[4], ") {")),
                  n[2] && (t += "@media ".concat(n[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {",
                    )),
                  (t += e(n)),
                  r && (t += "}"),
                  n[2] && (t += "}"),
                  n[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (n.i = function (e, t, r, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var A = 0; A < e.length; A++) {
                var d = [].concat(e[A]);
                (r && i[d[0]]) ||
                  (void 0 !== a &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = a)),
                  t &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = t))
                      : (d[2] = t)),
                  o &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = o))
                      : (d[4] = "".concat(o))),
                  n.push(d));
              }
            }),
            n
          );
        };
      },
      354: (e) => {
        e.exports = function (e) {
          var n = e[1],
            t = e[3];
          if (!t) return n;
          if ("function" == typeof btoa) {
            var r = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
              o =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  r,
                ),
              a = "/*# ".concat(o, " */");
            return [n].concat([a]).join("\n");
          }
          return [n].join("\n");
        };
      },
      72: (e) => {
        var n = [];
        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }
        function r(e, r) {
          for (var a = {}, i = [], c = 0; c < e.length; c++) {
            var s = e[c],
              A = r.base ? s[0] + r.base : s[0],
              d = a[A] || 0,
              u = "".concat(A, " ").concat(d);
            a[A] = d + 1;
            var l = t(u),
              p = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== l) n[l].references++, n[l].updater(p);
            else {
              var m = o(p, r);
              (r.byIndex = c),
                n.splice(c, 0, { identifier: u, updater: m, references: 1 });
            }
            i.push(u);
          }
          return i;
        }
        function o(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var c = t(a[i]);
              n[c].references--;
            }
            for (var s = r(e, o), A = 0; A < a.length; A++) {
              var d = t(a[A]);
              0 === n[d].references && (n[d].updater(), n.splice(d, 1));
            }
            a = s;
          };
        };
      },
      659: (e) => {
        var n = {};
        e.exports = function (e, t) {
          var r = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(t);
        };
      },
      540: (e) => {
        e.exports = function (e) {
          var n = document.createElement("style");
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      56: (e, n, t) => {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute("nonce", n);
        };
      },
      825: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {",
                  )),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var a = t.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */",
                    )),
                  n.styleTagTransform(r, e, n.options);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      113: (e) => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    n = {};
  function t(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var a = (n[r] = { id: r, exports: {} });
    return e[r](a, a.exports, t), a.exports;
  }
  (t.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return t.d(n, { a: n }), n;
  }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (t.nc = void 0);
  var r = t(72),
    o = t.n(r),
    a = t(825),
    i = t.n(a),
    c = t(659),
    s = t.n(c),
    A = t(56),
    d = t.n(A),
    u = t(540),
    l = t.n(u),
    p = t(113),
    m = t.n(p),
    h = t(16),
    g = {};
  (g.styleTagTransform = m()),
    (g.setAttributes = d()),
    (g.insert = s().bind(null, "head")),
    (g.domAPI = i()),
    (g.insertStyleElement = l()),
    o()(h.A, g),
    h.A && h.A.locals && h.A.locals;
  class C {
    static #e = (() =>
      new Map([
        ["celsius-fahrenheit", (e) => 1.8 * e + 32],
        ["fahrenheit-celsius", (e) => (5 / 9) * (e - 32)],
        ["celsius-kelvin", (e) => e + 273.15],
        ["kelvin-celsius", (e) => e - 273.15],
        ["fahrenheit-kelvin", (e) => (5 / 9) * (e - 32) + 273.15],
        ["kelvin-fahrenheit", (e) => 1.8 * (e - 273.15) + 32],
      ]))();
    static convertTemperature(e, n, t) {
      const r = `${n}-${t}`;
      if (this.#e.has(r)) return this.#e.get(r)(e);
    }
  }
  const f = C;
  new (class {
    #n;
    #t = (() => document.querySelector(".container"))();
    #r = (() => document.querySelector(".current-condition"))();
    #o = (() => document.querySelector(".current-temperature"))();
    #a = (() => document.querySelector(".temperature-scale"))();
    #i = (() => document.querySelector(".average-condition"))();
    #c = (() => document.querySelector(".logo-container"))();
    #s = (() => document.querySelector("form"))();
    #A = (() => document.querySelector("#location"))();
    #d = (() => document.querySelector(".address"))();
    #u = (() => document.querySelector(".fahrenheit-button"))();
    #l = (() => document.querySelector(".celsius-button"))();
    #p = (() => document.querySelectorAll(".background-color-update"))();
    #m = (() => document.querySelectorAll(".font-color-update"))();
    #h = (() =>
      new Map([
        [
          "Partially cloudy",
          {
            image: document.querySelector(".partially-cloudy-day-image"),
            icon: document.querySelector(".partially-cloudy-icon"),
          },
        ],
        [
          "Clear",
          {
            image: document.querySelector(".clear-day-image"),
            icon: document.querySelector(".clear-icon"),
          },
        ],
        [
          "Overcast",
          {
            image: document.querySelector(".overcast-day-image"),
            icon: document.querySelector(".overcast-icon"),
          },
        ],
        [
          "Rain",
          {
            image: document.querySelector(".rainy-day-image"),
            icon: document.querySelector(".rainy-icon"),
          },
        ],
        [
          "Snow",
          {
            image: document.querySelector(".snowy-day-image"),
            icon: document.querySelector(".snowy-icon"),
          },
        ],
      ]))();
    constructor() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      this.#n = e;
    }
    async updateScreen(e) {
      try {
        const {
          currentCondition: n,
          temperature: t,
          prediction: r,
          address: o,
        } = await this.#n.getWeather(e);
        return (
          this.#k(n).#w(o).#b(n).#v(t).#x(n).#B(r).#y(n).#E(n).#f().#C().#g(),
          this
        );
      } catch (e) {
        return alert("No such country"), null;
      }
    }
    #k(e) {
      return (
        this.#h.has(e) &&
          (this.#t.style.backgroundImage = `url(${this.#h.get(e).image.src})`),
        this
      );
    }
    #w(e) {
      return (this.#d.textContent = e), this;
    }
    #x(e) {
      return (
        this.#h.has(e) &&
          this.#c.firstElementChild.replaceWith(
            this.#h.get(e).icon.cloneNode(!0),
          ),
        this
      );
    }
    #v(e) {
      let n =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "F";
      return (this.#o.textContent = e), (this.#a.textContent = n), this;
    }
    #b(e) {
      return (this.#r.textContent = e), this;
    }
    #B(e) {
      return (this.#i.textContent = e), this;
    }
    #y(e) {
      const n = e.toLowerCase().split(" ").join("-");
      return (
        this.#p.forEach((e) => {
          e.style.backgroundColor = `var(--${n}-background-color)`;
        }),
        this
      );
    }
    #E(e) {
      const n = e.toLowerCase().split(" ").join("-");
      return (
        this.#m.forEach((e) => {
          e.style.color = `var(--${n}-font-color)`;
        }),
        this
      );
    }
    #f() {
      return (
        this.#s.addEventListener("submit", (e) => {
          this.#S(e);
        }),
        this
      );
    }
    #S(e) {
      e.preventDefault();
      const n = this.#A.value;
      this.updateScreen(n);
    }
    #g() {
      return (
        this.#u.addEventListener("click", () => {
          this.#F();
        }),
        this
      );
    }
    #F() {
      if ("C" === this.#a.textContent) {
        const e = f.convertTemperature(
          Number.parseInt(this.#o.textContent),
          "celsius",
          "fahrenheit",
        );
        (this.#o.textContent = e.toFixed(1)), (this.#a.textContent = "F");
      }
    }
    #C() {
      return (
        this.#l.addEventListener("click", () => {
          this.#T();
        }),
        this
      );
    }
    #T() {
      if ("F" === this.#a.textContent) {
        const e = f.convertTemperature(
          Number.parseInt(this.#o.textContent),
          "fahrenheit",
          "celsius",
        );
        (this.#o.textContent = e.toFixed(1)), (this.#a.textContent = "C");
      }
    }
  })(
    new (class {
      #q = "AA3Z9X7MHFBAEXUF7FKNDL7VE";
      #I =
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
      #U(e) {
        return `${this.#I}${e}?key=${this.#q}`;
      }
      async getWeather() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "Yangon";
        try {
          const n = this.#U(e),
            t = await fetch(n);
          if (200 !== t.status)
            return "Coundn't get the weather for desired locations.";
          const r = await t.json();
          return {
            currentCondition: r.currentConditions.conditions,
            temperature: r.currentConditions.temp,
            prediction: r.description,
            address: r.resolvedAddress,
          };
        } catch (e) {
          return "Error Caught";
        }
      }
    })(),
  ).updateScreen("Taunggyi");
})();
//# sourceMappingURL=main.js.map
