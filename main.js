(()=>{"use strict";var n={16:(n,e,t)=>{t.d(e,{A:()=>d});var r=t(354),o=t.n(r),a=t(314),i=t.n(a),c=t(417),s=t.n(c),A=new URL(t(780),t.b),l=i()(o()),u=s()(A);l.push([n.id,`/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\np {\n  text-wrap: pretty;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n\n/* My Css */\n:root {\n  --snow-background-color: white;\n  --snow-font-color: black;\n  --partially-cloudy-background-color: navy;\n  --partially-cloudy-font-color: white;\n  --overcast-background-color: grey;\n  --overcast-font-color: black;\n  --clear-background-color: skyblue;\n  --clear-font-color: white;\n  --rain-background-color: black;\n  --rain-font-color: white;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: minmax(50px, 1.5fr) minmax(500px, 85vh) minmax(30px, 1fr);\n}\n\nheader,\nfooter {\n  display: grid;\n  place-items: center;\n  font-weight: bold;\n}\n\nheader {\n  font-size: 2rem;\n  grid-template-columns: minmax(100px, 10vw) minmax(300px, 1fr) minmax(100px, 10vw);\n}\n\n.heading {\n  grid-column: 2;\n}\n\n.degree-buttons {\n  display: flex;\n  height: 50%;\n  font-size: 1rem;\n  align-items: center;\n  font-weight: normal;\n}\n\n.degree-button {\n  appearance: none;\n  border: none;\n}\n\n.degree-button:hover {\n  background-color: grey;\n  border: 1px solid grey;\n  font-weight: bold;\n}\n\n.container {\n  background-image: url(${u});\n  opacity: 0.8;\n  display: grid;\n  place-content: center;\n  grid-template: auto minmax(250px, 25vh) / minmax(325px, 20vw);\n}\n\n.container * {\n  opacity: 1;\n}\n\n.content {\n  background-color: rgba(255, 255, 255, 0.6);\n  border-radius: 5px;\n  padding: 2em;\n  display: grid;\n  grid-template-areas:\n    "logo temperature"\n    "condition condition"\n    "prediction prediction";\n  box-shadow: 2px 2px 5px black;\n  grid-template-columns: minmax(20px, 1fr) minmax(30px, 3fr);\n  grid-template-rows: minmax(50px, 2fr) repeat(2, minmax(15px, 1fr));\n  align-items: center;\n}\n\n.logo-container {\n  grid-area: logo;\n}\n\n.temperature-container {\n  font-size: 2rem;\n  grid-area: temperature;\n  justify-self: end;\n  display: flex;\n  align-items: center;\n  gap: 0.2em;\n  font-weight: bold;\n}\n\n.current-condition {\n  grid-area: condition;\n}\n\n.average-condition {\n  grid-area: prediction;\n}\n\nform {\n  display: flex;\n  justify-content: space-between;\n  padding: 1em;\n  border-radius: 5px;\n  box-shadow: 2px -1px 5px black;\n}`,"",{version:3,sources:["webpack://./src/css/style.css"],names:[],mappings:"AAAA;;;CAGC;;AAED;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,mCAAmC;AACrC;;AAEA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;;AAEA;;;;EAIE,aAAa;AACf;;AAEA;;;;;;;EAOE,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;AACnB;AACA;;;;;;EAME,kBAAkB;AACpB;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA,WAAW;AACX;EACE,8BAA8B;EAC9B,wBAAwB;EACxB,yCAAyC;EACzC,oCAAoC;EACpC,iCAAiC;EACjC,4BAA4B;EAC5B,iCAAiC;EACjC,yBAAyB;EACzB,8BAA8B;EAC9B,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,aAAa;EACb,6EAA6E;AAC/E;;AAEA;;EAEE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,iFAAiF;AACnF;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,eAAe;EACf,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,yDAA2C;EAC3C,YAAY;EACZ,aAAa;EACb,qBAAqB;EACrB,6DAA6D;AAC/D;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,0CAA0C;EAC1C,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb;;;2BAGyB;EACzB,6BAA6B;EAC7B,0DAA0D;EAC1D,kEAAkE;EAClE,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,YAAY;EACZ,kBAAkB;EAClB,8BAA8B;AAChC",sourcesContent:['/*\n  Josh\'s Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\np {\n  text-wrap: pretty;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n\n/* My Css */\n:root {\n  --snow-background-color: white;\n  --snow-font-color: black;\n  --partially-cloudy-background-color: navy;\n  --partially-cloudy-font-color: white;\n  --overcast-background-color: grey;\n  --overcast-font-color: black;\n  --clear-background-color: skyblue;\n  --clear-font-color: white;\n  --rain-background-color: black;\n  --rain-font-color: white;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: minmax(50px, 1.5fr) minmax(500px, 85vh) minmax(30px, 1fr);\n}\n\nheader,\nfooter {\n  display: grid;\n  place-items: center;\n  font-weight: bold;\n}\n\nheader {\n  font-size: 2rem;\n  grid-template-columns: minmax(100px, 10vw) minmax(300px, 1fr) minmax(100px, 10vw);\n}\n\n.heading {\n  grid-column: 2;\n}\n\n.degree-buttons {\n  display: flex;\n  height: 50%;\n  font-size: 1rem;\n  align-items: center;\n  font-weight: normal;\n}\n\n.degree-button {\n  appearance: none;\n  border: none;\n}\n\n.degree-button:hover {\n  background-color: grey;\n  border: 1px solid grey;\n  font-weight: bold;\n}\n\n.container {\n  background-image: url("../img/default.jpg");\n  opacity: 0.8;\n  display: grid;\n  place-content: center;\n  grid-template: auto minmax(250px, 25vh) / minmax(325px, 20vw);\n}\n\n.container * {\n  opacity: 1;\n}\n\n.content {\n  background-color: rgba(255, 255, 255, 0.6);\n  border-radius: 5px;\n  padding: 2em;\n  display: grid;\n  grid-template-areas:\n    "logo temperature"\n    "condition condition"\n    "prediction prediction";\n  box-shadow: 2px 2px 5px black;\n  grid-template-columns: minmax(20px, 1fr) minmax(30px, 3fr);\n  grid-template-rows: minmax(50px, 2fr) repeat(2, minmax(15px, 1fr));\n  align-items: center;\n}\n\n.logo-container {\n  grid-area: logo;\n}\n\n.temperature-container {\n  font-size: 2rem;\n  grid-area: temperature;\n  justify-self: end;\n  display: flex;\n  align-items: center;\n  gap: 0.2em;\n  font-weight: bold;\n}\n\n.current-condition {\n  grid-area: condition;\n}\n\n.average-condition {\n  grid-area: prediction;\n}\n\nform {\n  display: flex;\n  justify-content: space-between;\n  padding: 1em;\n  border-radius: 5px;\n  box-shadow: 2px -1px 5px black;\n}'],sourceRoot:""}]);const d=l},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var A=0;A<n.length;A++){var l=[].concat(n[A]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],A=r.base?s[0]+r.base:s[0],l=a[A]||0,u="".concat(A," ").concat(l);a[A]=l+1;var d=t(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(p);else{var h=o(p,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),A=0;A<a.length;A++){var l=t(a[A]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},780:(n,e,t)=>{n.exports=t.p+"6e680d89739bcdc79210.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),c=t(659),s=t.n(c),A=t(56),l=t.n(A),u=t(540),d=t.n(u),p=t(113),h=t.n(p),m=t(16),g={};g.styleTagTransform=h(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=d(),o()(m.A,g),m.A&&m.A.locals&&m.A.locals;class f{static#n=(()=>new Map([["celsius-fahrenheit",n=>1.8*n+32],["fahrenheit-celsius",n=>5/9*(n-32)],["celsius-kelvin",n=>n+273.15],["kelvin-celsius",n=>n-273.15],["fahrenheit-kelvin",n=>5/9*(n-32)+273.15],["kelvin-fahrenheit",n=>1.8*(n-273.15)+32]]))();static convertTemperature(n,e,t){const r=`${e}-${t}`;if(this.#n.has(r))return this.#n.get(r)(n)}}const C=f;new class{#e;#t=(()=>document.querySelector(".current-condition"))();#r=(()=>document.querySelector(".current-temperature"))();#o=(()=>document.querySelector(".temperature-scale"))();#a=(()=>document.querySelector(".average-condition"))();#i=(()=>document.querySelector(".logo-container"))();#c=(()=>document.querySelector("form"))();#s=(()=>document.querySelector("input[type='text']"))();#A=(()=>document.querySelector(".fahrenheit-button"))();#l=(()=>document.querySelector(".celsius-button"))();#u=(()=>document.querySelectorAll(".background-color-update"))();#d=(()=>document.querySelectorAll(".font-color-update"))();#p=(()=>new Map([["Partially cloudy",{image:"../img/partially-cloudy-day.jpg",icon:document.querySelector(".partially-cloudy-icon")}],["Clear",{image:"../img/clear-day.jpg",icon:document.querySelector(".clear-icon")}],["Overcast",{image:"../img/overcast-day.jpg",icon:document.querySelector(".overcast-icon")}],["Rain",{image:"../img/rainy-day.jpg",icon:document.querySelector(".rainy-icon")}],["Snow",{image:"../img/snowy-day.jpg",icon:document.querySelector(".snowy-icon")}],["Default",{image:"../img/default.jpg"}]]))();constructor(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.#e=n}async updateScreen(n){const{currentCondition:e,temperature:t,prediction:r}=await this.#e.getWeather(n);return this.#v(e).#b(t).#y(e).#E(r).#C(e).#f(e).#g().#m().#h(),this}#y(n){return this.#p.has(n)&&this.#i.firstElementChild.replaceWith(this.#p.get(n).icon.cloneNode(!0)),this}#b(n){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"F";return this.#r.textContent=n,this.#o.textContent=e,this}#v(n){return this.#t.textContent=n,this}#E(n){return this.#a.textContent=n,this}#C(n){const e=n.toLowerCase().split(" ").join("-");return this.#u.forEach((n=>{n.style.backgroundColor=`var(--${e}-background-color)`})),this}#f(n){const e=n.toLowerCase().split(" ").join("-");return this.#d.forEach((n=>{n.style.color=`var(--${e}-font-color)`})),this}#g(){return this.#c.addEventListener("submit",(n=>{this.#x(n)})),this}#x(n){n.preventDefault();const e=this.#s.value;this.updateScreen(e)}#h(){return this.#A.addEventListener("click",(()=>{this.#B()})),this}#B(){if("C"===this.#o.textContent){const n=C.convertTemperature(Number.parseInt(this.#r.textContent),"celsius","fahrenheit");this.#r.textContent=n.toFixed(1),this.#o.textContent="F"}}#m(){return this.#l.addEventListener("click",(()=>{this.#w()})),this}#w(){if("F"===this.#o.textContent){const n=C.convertTemperature(Number.parseInt(this.#r.textContent),"fahrenheit","celsius");this.#r.textContent=n.toFixed(1),this.#o.textContent="C"}}}(new class{#k="AA3Z9X7MHFBAEXUF7FKNDL7VE";#S="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";#T(n){return`${this.#S}${n}?key=${this.#k}`}async getWeather(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Yangon";try{const e=this.#T(n),t=await fetch(e);if(200!==t.status)return"Coundn't get the weather for desired locations.";const r=await t.json();return{currentCondition:r.currentConditions.conditions,temperature:r.currentConditions.temp,prediction:r.description}}catch(n){return"Error Caught"}}}).updateScreen("Yangon")})();
//# sourceMappingURL=main.js.map