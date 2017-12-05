!function(_){function g(a){Object.defineProperty(this,a,{enumerable:!0,get:function(){return this[t][a]}})}function h(a){if("undefined"!=typeof System&&System.isModule?System.isModule(a):"[object Module]"===Object.prototype.toString.call(a))return a;var i={default:a,__useDefault:a};if(a&&a.__esModule)for(var t in a)Object.hasOwnProperty.call(a,t)&&(i[t]=a[t]);return new T(i)}function T(a){Object.defineProperty(this,t,{value:a}),Object.keys(a).forEach(g,this)}function b(t){return"@node/"===t.substr(0,6)?u(t,h(p(t.substr(6))),{}):a[t]}function r(a){var e=b(a);if(!e)throw new Error("Module \""+a+"\" expected, but not contained in build.");if(e.module)return e.module;var i=e.linkRecord;return n(e,i),s(e,i,[]),e.module}function n(a,e){if(!e.depLoads){e.declare&&i(a,e),e.depLoads=[];for(var t=0,r;t<e.deps.length;t++){r=b(e.deps[t]),e.depLoads.push(r),r.linkRecord&&n(r,r.linkRecord);var o=e.setters&&e.setters[t];o&&(o(r.module||r.linkRecord.moduleObj),r.importerSetters.push(o))}return a}}function i(e,t){var a=t.moduleObj,r=e.importerSetters,n=!1,o=t.declare.call(_,function(o,s){if(!n){if("object"==typeof o)for(var t in o)"__useDefault"!==t&&(a[t]=o[t]);else a[o]=s;n=!0;for(var l=0;l<r.length;l++)r[l](a);return n=!1,s}},{id:e.key});"function"==typeof o?(t.setters=[],t.execute=o):(t.setters=o.setters,t.execute=o.execute)}function o(i,n,o){return a[i]={key:i,module:void 0,importerSetters:[],linkRecord:{deps:n,depLoads:void 0,declare:o,setters:void 0,execute:void 0,moduleObj:{}}}}function d(i,s,l,d){var _={};return a[i]={key:i,module:void 0,importerSetters:[],linkRecord:{deps:s,depLoads:void 0,declare:void 0,execute:d,executingRequire:l,moduleObj:{default:_,__useDefault:_},setters:void 0}}}function e(a,e,t){return function(r){for(var o=0;o<a.length;o++)if(a[o]===r){var n=e[o],i=n.linkRecord,l;return l=i?-1===t.indexOf(n)?s(n,i,t):i.moduleObj:n.module,"__useDefault"in l?l.__useDefault:l}}}function s(a,t,r){if(r.push(a),a.module)return a.module;var n;if(t.setters){for(var o=0;o<t.deps.length;o++){var i=t.depLoads[o],d=i.linkRecord;d&&-1===r.indexOf(i)&&(n=s(i,d,d.setters?r:[]))}t.execute.call(v)}else{var l={id:a.key},u=t.moduleObj;Object.defineProperty(l,"exports",{configurable:!0,set:function(t){u.default=u.__useDefault=t},get:function(){return u.__useDefault}});var c=e(t.deps,t.depLoads,r);if(!t.executingRequire)for(var o=0;o<t.deps.length;o++)c(t.deps[o]);var p=t.execute.call(_,c,u.__useDefault,l);void 0===p?l.exports!==u.__useDefault&&(u.default=u.__useDefault=l.exports):u.default=u.__useDefault=p;var g=u.__useDefault;if(g&&g.__esModule)for(var m in g)Object.hasOwnProperty.call(g,m)&&(u[m]=g[m])}var l=a.module=new T(t.moduleObj);if(!t.setters)for(var o=0;o<a.importerSetters.length;o++)a.importerSetters[o](l);return l}function u(i,n){return a[i]={key:i,module:n,importerSetters:[],linkRecord:void 0}}var a={},t="undefined"==typeof Symbol?"@@baseObject":Symbol();T.prototype=Object.create(null),"undefined"!=typeof Symbol&&Symbol.toStringTag&&(T.prototype[Symbol.toStringTag]="Module");var p="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,v={};return Object.freeze&&Object.freeze(v),function(s,e,t,n){return function(i){i(function(){u("@empty",new T({}));for(var i=0;i<e.length;i++)u(e[i],h(arguments[i],{}));n({_nodeRequire:p,register:o,registerDynamic:d,registry:{get:function(t){return a[t].module},set:u},newModule:function(t){return new T(t)}});var _=r(s[0]);if(1<s.length)for(var i=1;i<s.length;i++)r(s[i]);return t?_.__useDefault:(_ instanceof T&&Object.defineProperty(_,"__esModule",{value:!0}),_)})}}}("undefined"==typeof self?"undefined"==typeof global?this:global:self)(["a"],[],!1,function(s){var e=Math.pow,a=Math.tan,n=Math.sin,r=Math.cos,t=Math.max,o=Math.sqrt,l=Math.PI,d=Math.abs,_=Math.round,p=Math.min,i=this.require,c=this.exports,m=this.module;!function(d){function e(t,e){for(var a=t.split(".");a.length;)e=e[a.shift()];return e}function _(a){if("string"==typeof a)return e(a,d);if(!(a instanceof Array))throw new Error("Global exports must be a string or array.");for(var i={},t=0;t<a.length;t++)i[a[t].split(".").pop()]=e(a[t],d);return i}function n(e){if(-1===i.indexOf(e)){try{var t=d[e]}catch(t){i.push(e)}this(e,t)}}var t=s,i=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"],p;t.registry.set("@@global-helpers",t.newModule({prepareGlobal:function(e,t,r){var o=d.define;d.define=void 0;var m;if(r)for(var a in m={},r)m[a]=d[a],d[a]=r[a];return t||(p={},Object.keys(d).forEach(n,function(t,e){p[t]=e})),function(){var s=t?_(t):{},a=!!t,l;if(t||Object.keys(d).forEach(n,function(i,e){p[i]!==e&&void 0!==e&&(t||(s[i]=e,void 0==l?l=e:a||l===e||(a=!0)))}),s=a?s:l,m)for(var e in m)d[e]=m[e];return d.define=o,s}}}))}("undefined"==typeof self?global:self),s.registerDynamic("b",[],!1,function(e,t,a){var i=s.registry.get("@@global-helpers").prepareGlobal(a.id,null,null);return function(){(function(){"use strict";function i(e){var t=h.has(e);return e=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(e),!t&&e}function n(e){var t=e.isConnected;if(void 0!==t)return t;for(;e&&!(e.__CE_isImportDocument||e instanceof Document);)e=e.parentNode||(window.ShadowRoot&&e instanceof ShadowRoot?e.host:void 0);return e&&(e.__CE_isImportDocument||e instanceof Document)}function r(e,t){for(;t&&t!==e&&!t.nextSibling;)t=t.parentNode;return t&&t!==e?t.nextSibling:null}function o(t,i,a){a=a?a:new Set;for(var n=t;n;){if(n.nodeType===Node.ELEMENT_NODE){var s=n;i(s);var e=s.localName;if("link"===e&&"import"===s.getAttribute("rel")){if(n=s.import,n instanceof Node&&!a.has(n))for(a.add(n),n=n.firstChild;n;n=n.nextSibling)o(n,i,a);n=r(t,s);continue}else if("template"===e){n=r(t,s);continue}if(s=s.__CE_shadowRoot)for(s=s.firstChild;s;s=s.nextSibling)o(s,i,a)}n=n.firstChild?n.firstChild:r(t,n)}}function e(e,t,a){e[t]=a}function t(){this.a=new Map,this.o=new Map,this.f=[],this.b=!1}function s(e,t,a){e.a.set(t,a),e.o.set(a.constructor,a)}function l(e,t){e.b=!0,e.f.push(t)}function _(e,t){e.b&&o(t,function(t){return p(e,t)})}function p(e,t){if(e.b&&!t.__CE_patched){t.__CE_patched=!0;for(var a=0;a<e.f.length;a++)e.f[a](t)}}function u(e,t){var a=[];for(o(t,function(e){return a.push(e)}),t=0;t<a.length;t++){var i=a[t];1===i.__CE_state?e.connectedCallback(i):y(e,i)}}function g(e,t){var a=[];for(o(t,function(e){return a.push(e)}),t=0;t<a.length;t++){var i=a[t];1===i.__CE_state&&e.disconnectedCallback(i)}}function m(t,i,a){a=a?a:{};var n=a.w||new Set,r=a.s||function(e){return y(t,e)},s=[];if(o(i,function(i){if("link"===i.localName&&"import"===i.getAttribute("rel")){var a=i.import;a instanceof Node&&(a.__CE_isImportDocument=!0,a.__CE_hasRegistry=!0),a&&"complete"===a.readyState?a.__CE_documentLoadHandled=!0:i.addEventListener("load",function(){var a=i.import;if(!a.__CE_documentLoadHandled){a.__CE_documentLoadHandled=!0;var o=new Set(n);o.delete(a),m(t,a,{w:o,s:r})}})}else s.push(i)},n),t.b)for(i=0;i<s.length;i++)p(t,s[i]);for(i=0;i<s.length;i++)r(s[i])}function y(t,i){if(void 0===i.__CE_state){var a=i.ownerDocument;if((a.defaultView||a.__CE_isImportDocument&&a.__CE_hasRegistry)&&(a=t.a.get(i.localName))){a.constructionStack.push(i);var r=a.constructor;try{try{if(new r!==i)throw Error("The custom element constructor did not produce the element being upgraded.")}finally{a.constructionStack.pop()}}catch(e){throw i.__CE_state=2,e}if(i.__CE_state=1,i.__CE_definition=a,a.attributeChangedCallback)for(a=a.observedAttributes,r=0;r<a.length;r++){var o=a[r],e=i.getAttribute(o);null!==e&&t.attributeChangedCallback(i,o,null,e,null)}n(i)&&t.connectedCallback(i)}}}function a(e,t){this.c=e,this.a=t,this.b=void 0,m(this.c,this.a),"loading"===this.a.readyState&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}))}function f(e){e.b&&e.b.disconnect()}function d(){var e=this;this.b=this.a=void 0,this.f=new Promise(function(t){e.b=t,e.a&&t(e.a)})}function c(e){if(e.a)throw Error("Already resolved.");e.a=void 0,e.b&&e.b(void 0)}function v(e){this.i=!1,this.c=e,this.m=new Map,this.j=function(e){return e()},this.g=!1,this.l=[],this.u=new a(e,document)}function b(t){if(!1!==t.g){t.g=!1;for(var i=t.l,n=[],r=new Map,a=0;a<i.length;a++)r.set(i[a].localName,[]);for(m(t.c,document,{s:function(i){if(void 0===i.__CE_state){var a=i.localName,e=r.get(a);e?e.push(i):t.c.a.get(a)&&n.push(i)}}}),a=0;a<n.length;a++)y(t.c,n[a]);for(;0<i.length;){for(var e=i.shift(),a=e.localName,e=r.get(e.localName),o=0;o<e.length;o++)y(t.c,e[o]);(a=t.m.get(a))&&c(a)}}}function x(){var t=le;window.HTMLElement=function(){function e(){var i=this.constructor,n=t.o.get(i);if(!n)throw Error("The custom element being constructed was not registered with `customElements`.");var r=n.constructionStack;if(!r.length)return r=B.call(document,n.localName),Object.setPrototypeOf(r,i.prototype),r.__CE_state=1,r.__CE_definition=n,p(t,r),r;var n=r.length-1,e=r[n];if(e===D)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");return r[n]=D,Object.setPrototypeOf(e,i.prototype),p(t,e),e}return e.prototype=re.prototype,e}()}function w(t,e,a){function i(e){return function(){for(var a=[],i=0;i<arguments.length;++i)a[i-0]=arguments[i];for(var i=[],o=[],s=0,l;s<a.length;s++)if(l=a[s],l instanceof Element&&n(l)&&o.push(l),l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)i.push(l);else i.push(l);for(e.apply(this,a),a=0;a<o.length;a++)g(t,o[a]);if(n(this))for(a=0;a<i.length;a++)o=i[a],o instanceof Element&&u(t,o)}}a.h&&(e.prepend=i(a.h)),a.append&&(e.append=i(a.append))}function C(){var t=le;e(Document.prototype,"createElement",function(e){if(this.__CE_hasRegistry){var a=t.a.get(e);if(a)return new a.constructor}return e=B.call(this,e),p(t,e),e}),e(Document.prototype,"importNode",function(e,a){return e=j.call(this,e,a),this.__CE_hasRegistry?m(t,e):_(t,e),e}),e(Document.prototype,"createElementNS",function(e,a){if(this.__CE_hasRegistry&&(null===e||"http://www.w3.org/1999/xhtml"===e)){var i=t.a.get(a);if(i)return new i.constructor}return e=z.call(this,e,a),p(t,e),e}),w(t,Document.prototype,{h:F,append:Y})}function k(){function t(e,t){Object.defineProperty(e,"textContent",{enumerable:t.enumerable,configurable:!0,get:t.get,set:function(r){if(this.nodeType===Node.TEXT_NODE)t.set.call(this,r);else{var a;if(this.firstChild){var o=this.childNodes,e=o.length;if(0<e&&n(this))for(var a=Array(e),s=0;s<e;s++)a[s]=o[s]}if(t.set.call(this,r),a)for(r=0;r<a.length;r++)g(i,a[r])}}})}var i=le;e(Node.prototype,"insertBefore",function(e,t){if(e instanceof DocumentFragment){var a=Array.prototype.slice.apply(e.childNodes);if(e=$.call(this,e,t),n(this))for(t=0;t<a.length;t++)u(i,a[t]);return e}return a=n(e),t=$.call(this,e,t),a&&g(i,e),n(this)&&u(i,e),t}),e(Node.prototype,"appendChild",function(t){if(t instanceof DocumentFragment){var a=Array.prototype.slice.apply(t.childNodes);if(t=I.call(this,t),n(this))for(var r=0;r<a.length;r++)u(i,a[r]);return t}return a=n(t),r=I.call(this,t),a&&g(i,t),n(this)&&u(i,t),r}),e(Node.prototype,"cloneNode",function(e){return e=q.call(this,e),this.ownerDocument.__CE_hasRegistry?m(i,e):_(i,e),e}),e(Node.prototype,"removeChild",function(t){var a=n(t),r=K.call(this,t);return a&&g(i,t),r}),e(Node.prototype,"replaceChild",function(t,a){if(t instanceof DocumentFragment){var r=Array.prototype.slice.apply(t.childNodes);if(t=L.call(this,t,a),n(this))for(g(i,a),a=0;a<r.length;a++)u(i,r[a]);return t}var r=n(t),e=L.call(this,t,a),o=n(this);return o&&g(i,a),r&&g(i,t),o&&u(i,t),e}),M&&M.get?t(Node.prototype,M):l(i,function(e){t(e,{enumerable:!0,configurable:!0,get:function(){for(var e=[],t=0;t<this.childNodes.length;t++)e.push(this.childNodes[t].textContent);return e.join("")},set:function(e){for(;this.firstChild;)K.call(this,this.firstChild);I.call(this,document.createTextNode(e))}})})}function E(t){function i(e){return function(){for(var a=[],i=0;i<arguments.length;++i)a[i-0]=arguments[i];for(var i=[],r=[],o=0,s;o<a.length;o++)if(s=a[o],s instanceof Element&&n(s)&&r.push(s),s instanceof DocumentFragment)for(s=s.firstChild;s;s=s.nextSibling)i.push(s);else i.push(s);for(e.apply(this,a),a=0;a<r.length;a++)g(t,r[a]);if(n(this))for(a=0;a<i.length;a++)r=i[a],r instanceof Element&&u(t,r)}}var r=Element.prototype;ae&&(r.before=i(ae)),ae&&(r.after=i(V)),ie&&e(r,"replaceWith",function(){for(var e=[],a=0;a<arguments.length;++a)e[a-0]=arguments[a];for(var a=[],i=[],r=0,o;r<e.length;r++)if(o=e[r],o instanceof Element&&n(o)&&i.push(o),o instanceof DocumentFragment)for(o=o.firstChild;o;o=o.nextSibling)a.push(o);else a.push(o);for(r=n(this),ie.apply(this,e),e=0;e<i.length;e++)g(t,i[e]);if(r)for(g(t,this),e=0;e<a.length;e++)i=a[e],i instanceof Element&&u(t,i)}),ne&&e(r,"remove",function(){var e=n(this);ne.call(this),e&&g(t,this)})}function A(){function t(e,t){Object.defineProperty(e,"innerHTML",{enumerable:t.enumerable,configurable:!0,get:t.get,set:function(r){var s=this,l;if(n(this)&&(l=[],o(this,function(e){e!==s&&l.push(e)})),t.set.call(this,r),l)for(var e=0,a;e<l.length;e++)a=l[e],1===a.__CE_state&&i.disconnectedCallback(a);return this.ownerDocument.__CE_hasRegistry?m(i,this):_(i,this),r}})}function a(t,r){e(t,"insertAdjacentElement",function(t,a){var o=n(a);return t=r.call(this,t,a),o&&g(i,a),n(t)&&u(i,a),t})}var i=le;N&&e(Element.prototype,"attachShadow",function(e){return this.__CE_shadowRoot=e=N.call(this,e)}),O&&O.get?t(Element.prototype,O):oe&&oe.get?t(HTMLElement.prototype,oe):l(i,function(e){t(e,{enumerable:!0,configurable:!0,get:function(){return q.call(this,!0).innerHTML},set:function(e){var t="template"===this.localName,a=t?this.content:this,i=B.call(document,this.localName);for(i.innerHTML=e;0<a.childNodes.length;)K.call(a,a.childNodes[0]);for(e=t?i.content:i;0<e.childNodes.length;)I.call(a,e.childNodes[0])}})}),e(Element.prototype,"setAttribute",function(e,t){if(1!==this.__CE_state)return Q.call(this,e,t);var a=P.call(this,e);Q.call(this,e,t),t=P.call(this,e),i.attributeChangedCallback(this,e,a,t,null)}),e(Element.prototype,"setAttributeNS",function(e,t,a){if(1!==this.__CE_state)return T.call(this,e,t,a);var n=S.call(this,e,t);T.call(this,e,t,a),a=S.call(this,e,t),i.attributeChangedCallback(this,t,n,a,e)}),e(Element.prototype,"removeAttribute",function(e){if(1!==this.__CE_state)return R.call(this,e);var t=P.call(this,e);R.call(this,e),null!==t&&i.attributeChangedCallback(this,e,t,null,null)}),e(Element.prototype,"removeAttributeNS",function(t,a){if(1!==this.__CE_state)return U.call(this,t,a);var n=S.call(this,t,a);U.call(this,t,a);var r=S.call(this,t,a);n!==r&&i.attributeChangedCallback(this,a,n,r,t)}),W?a(HTMLElement.prototype,W):J?a(Element.prototype,J):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched."),w(i,Element.prototype,{h:ee,append:te}),E(i)}var D=new function(){},h=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]);t.prototype.connectedCallback=function(e){var t=e.__CE_definition;t.connectedCallback&&t.connectedCallback.call(e)},t.prototype.disconnectedCallback=function(e){var t=e.__CE_definition;t.disconnectedCallback&&t.disconnectedCallback.call(e)},t.prototype.attributeChangedCallback=function(t,i,a,n,r){var e=t.__CE_definition;e.attributeChangedCallback&&-1<e.observedAttributes.indexOf(i)&&e.attributeChangedCallback.call(t,i,a,n,r)},a.prototype.f=function(e){var t=this.a.readyState;for("interactive"!==t&&"complete"!==t||f(this),t=0;t<e.length;t++)for(var a=e[t].addedNodes,i=0;i<a.length;i++)m(this.c,a[i])},v.prototype.define=function(t,n){var r=this;if(!(n instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!i(t))throw new SyntaxError("The element name '"+t+"' is not valid.");if(this.c.a.get(t))throw Error("A custom element with name '"+t+"' has already been defined.");if(this.i)throw Error("A custom element is already being defined.");this.i=!0;var o,_,p,c,u;try{var h=function(e){var t=g[e];if(void 0!==t&&!(t instanceof Function))throw Error("The '"+e+"' callback must be a function.");return t},g=n.prototype;if(!(g instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");o=h("connectedCallback"),_=h("disconnectedCallback"),p=h("adoptedCallback"),c=h("attributeChangedCallback"),u=n.observedAttributes||[]}catch(e){return}finally{this.i=!1}n={localName:t,constructor:n,connectedCallback:o,disconnectedCallback:_,adoptedCallback:p,attributeChangedCallback:c,observedAttributes:u,constructionStack:[]},s(this.c,t,n),this.l.push(n),this.g||(this.g=!0,this.j(function(){return b(r)}))},v.prototype.get=function(e){if(e=this.c.a.get(e))return e.constructor},v.prototype.whenDefined=function(e){if(!i(e))return Promise.reject(new SyntaxError("'"+e+"' is not a valid custom element name."));var t=this.m.get(e);return t?t.f:(t=new d,this.m.set(e,t),this.c.a.get(e)&&!this.l.some(function(t){return t.localName===e})&&c(t),t.f)},v.prototype.v=function(e){f(this.u);var t=this.j;this.j=function(a){return e(function(){return t(a)})}},window.CustomElementRegistry=v,v.prototype.define=v.prototype.define,v.prototype.get=v.prototype.get,v.prototype.whenDefined=v.prototype.whenDefined,v.prototype.polyfillWrapFlushCallback=v.prototype.v;var B=window.Document.prototype.createElement,z=window.Document.prototype.createElementNS,j=window.Document.prototype.importNode,F=window.Document.prototype.prepend,Y=window.Document.prototype.append,H=window.DocumentFragment.prototype.prepend,G=window.DocumentFragment.prototype.append,q=window.Node.prototype.cloneNode,I=window.Node.prototype.appendChild,$=window.Node.prototype.insertBefore,K=window.Node.prototype.removeChild,L=window.Node.prototype.replaceChild,M=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),N=window.Element.prototype.attachShadow,O=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),P=window.Element.prototype.getAttribute,Q=window.Element.prototype.setAttribute,R=window.Element.prototype.removeAttribute,S=window.Element.prototype.getAttributeNS,T=window.Element.prototype.setAttributeNS,U=window.Element.prototype.removeAttributeNS,J=window.Element.prototype.insertAdjacentElement,ee=window.Element.prototype.prepend,te=window.Element.prototype.append,ae=window.Element.prototype.before,V=window.Element.prototype.after,ie=window.Element.prototype.replaceWith,ne=window.Element.prototype.remove,re=window.HTMLElement,oe=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),W=window.HTMLElement.prototype.insertAdjacentElement,se=window.customElements;if(!se||se.forcePolyfill||"function"!=typeof se.define||"function"!=typeof se.get){var le=new t;x(),C(),w(le,DocumentFragment.prototype,{h:H,append:G}),k(),A(),document.__CE_hasRegistry=!0;var X=new v(le);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:X})}}).call(self)}(this),i()}),s.registerDynamic("c",[],!0,function(e,t,r){var a=this||self;(function(t,e){"use strict";var o={},n=t.document,s=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!s.TweenLite){var l=function(e){var t=e.split("."),a=s,n;for(n=0;n<t.length;n++)a[t[n]]=a=a[t[n]]||{};return a},d=l("com.greensock"),c=1e-10,m=function(e){var t=[],a=e.length,n;for(n=0;n!==a;t.push(e[n++]));return t},u=function(){},g=function(){var e=Object.prototype.toString,t=e.call([]);return function(a){return null!=a&&(a instanceof Array||"object"==typeof a&&!!a.push&&e.call(a)===t)}}(),f={},h=function(t,a,d,_){this.sc=f[t]?f[t].sc:[],f[t]=this,this.gsClass=null,this.func=d;var p=[];this.check=function(c){for(var m=a.length,i=m,u,g,y,n;-1<--m;)(u=f[a[m]]||new h(a[m],[])).gsClass?(p[m]=u.gsClass,i--):c&&u.sc.push(this);if(0===i&&d){if(g=("com.greensock."+t).split("."),y=g.pop(),n=l(g.join("."))[y]=this.gsClass=d.apply(d,p),_)if(s[y]=o[y]=n,!("undefined"!=typeof r&&r.exports));else if(t===e)for(m in r.exports=o[e]=n,o)n[m]=o[m];else o[e]&&(o[e][y]=n);for(m=0;m<this.sc.length;m++)this.sc[m].check()}},this.check(!0)},y=t._gsDefine=function(e,t,a,i){return new h(e,t,a,i)},v=d._class=function(e,t,a){return t=t||function(){},y(e,[],function(){return t},a),t},b,a,i,T,x;y.globals=s;var w=[0,0,1,1],P=v("easing.Ease",function(e,t,a,i){this._func=e,this._type=a||0,this._power=i||0,this._params=t?w.concat(t):w},!0),S=P.map={},C=P.register=function(t,a,n,r){for(var o=a.split(","),s=o.length,i=(n||"easeIn,easeOut,easeInOut").split(","),l,e,_,p;-1<--s;)for(e=o[s],l=r?v("easing."+e,null,!0):d.easing[e]||{},_=i.length;-1<--_;)p=i[_],S[e+"."+p]=S[p+e]=l[p]=t.getRatio?t:t[p]||new t};for(i=P.prototype,i._calcEnd=!1,i.getRatio=function(e){if(this._func)return this._params[0]=e,this._func.apply(null,this._params);var a=this._type,t=this._power,i=1===a?1-e:2===a?e:0.5>e?2*e:2*(1-e);return 1===t?i*=i:2===t?i*=i*i:3===t?i*=i*i*i:4===t&&(i*=i*i*i*i),1===a?1-i:2===a?i:0.5>e?i/2:1-i/2},b=["Linear","Quad","Cubic","Quart","Quint,Strong"],a=b.length;-1<--a;)i=b[a]+",Power"+a,C(new P(null,null,1,a),i,"easeOut",!0),C(new P(null,null,2,a),i,"easeIn"+(0===a?",easeNone":"")),C(new P(null,null,3,a),i,"easeInOut");S.linear=d.easing.Linear.easeIn,S.swing=d.easing.Quad.easeInOut;var k=v("events.EventDispatcher",function(e){this._listeners={},this._eventTarget=e||this});i=k.prototype,i.addEventListener=function(e,t,a,n,r){r=r||0;var o=this._listeners[e],s=0,l,d;for(this!==T||x||T.wake(),null==o&&(this._listeners[e]=o=[]),d=o.length;-1<--d;)l=o[d],l.c===t&&l.s===a?o.splice(d,1):0==s&&l.pr<r&&(s=d+1);o.splice(s,0,{c:t,s:a,up:n,pr:r})},i.removeEventListener=function(e,t){var a=this._listeners[e],n;if(a)for(n=a.length;-1<--n;)if(a[n].c===t)return void a.splice(n,1)},i.dispatchEvent=function(e){var a=this._listeners[e],n,i,r;if(a)for(n=a.length,1<n&&(a=a.slice(0)),i=this._eventTarget;-1<--n;)r=a[n],r&&(r.up?r.c.call(r.s||i,{type:e,target:i}):r.c.call(r.s||i))};var E=t.requestAnimationFrame,R=t.cancelAnimationFrame,A=Date.now||function(){return new Date().getTime()},O=A();for(b=["ms","moz","webkit","o"],a=b.length;-1<--a&&!E;)E=t[b[a]+"RequestAnimationFrame"],R=t[b[a]+"CancelAnimationFrame"]||t[b[a]+"CancelRequestAnimationFrame"];v("Ticker",function(e,t){var a=this,i=A(),r=!1!==t&&E&&"auto",o=500,s=33,l=function(e){var t=A()-O,n,r;t>o&&(i+=t-s),O+=t,a.time=(O-i)/1e3,n=a.time-h,(!d||0<n||!0===e)&&(a.frame++,h+=n+(n>=g?4e-3:g-n),r=!0),!0!==e&&(m=_(l)),r&&a.dispatchEvent("tick")},d,_,m,g,h;k.call(a),a.time=a.frame=0,a.tick=function(){l(!0)},a.lagSmoothing=function(e,t){return arguments.length?void(o=e||1/c,s=p(t,o,0)):o<1/c},a.sleep=function(){null==m||(r&&R?R(m):clearTimeout(m),_=u,m=null,a===T&&(x=!1))},a.wake=function(e){null===m?e?i+=-O+(O=A()):10<a.frame&&(O=A()-o+5):a.sleep(),_=0===d?u:r&&E?E:function(e){return setTimeout(e,0|1e3*(h-a.time)+1)},a===T&&(x=!0),l(2)},a.fps=function(e){return arguments.length?void(d=e,g=1/(d||60),h=this.time+g,a.wake()):d},a.useRAF=function(e){return arguments.length?void(a.sleep(),r=e,a.fps(d)):r},a.fps(e),setTimeout(function(){"auto"===r&&5>a.frame&&"hidden"!==n.visibilityState&&a.useRAF(!1)},1500)}),i=d.Ticker.prototype=new d.events.EventDispatcher,i.constructor=d.Ticker;var D=v("core.Animation",function(e,t){if(this.vars=t=t||{},this._duration=this._totalDuration=e||0,this._delay=+t.delay||0,this._timeScale=1,this._active=!0===t.immediateRender,this.data=t.data,this._reversed=!0===t.reversed,!!$){x||T.wake();var a=this.vars.useFrames?K:$;a.add(this,a._time),this.vars.paused&&this.paused(!0)}});T=D.ticker=new d.Ticker,i=D.prototype,i._dirty=i._gc=i._initted=i._paused=!1,i._totalTime=i._time=0,i._rawPrevTime=-1,i._next=i._last=i._onUpdate=i._timeline=i.timeline=null,i._paused=!1;var L=function(){x&&2e3<A()-O&&("hidden"!==n.visibilityState||!T.lagSmoothing())&&T.wake();var e=setTimeout(L,2e3);e.unref&&e.unref()};L(),i.play=function(e,t){return null!=e&&this.seek(e,t),this.reversed(!1).paused(!1)},i.pause=function(e,t){return null!=e&&this.seek(e,t),this.paused(!0)},i.resume=function(e,t){return null!=e&&this.seek(e,t),this.paused(!1)},i.seek=function(e,t){return this.totalTime(+e,!1!==t)},i.restart=function(e,t){return this.reversed(!1).paused(!1).totalTime(e?-this._delay:0,!1!==t,!0)},i.reverse=function(e,t){return null!=e&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},i.render=function(){},i.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},i.isActive=function(){var e=this._timeline,t=this._startTime,a;return!e||!this._gc&&!this._paused&&e.isActive()&&(a=e.rawTime(!0))>=t&&a<t+this.totalDuration()/this._timeScale-1e-7},i._enabled=function(e,t){return x||T.wake(),this._gc=!e,this._active=this.isActive(),!0!==t&&(e&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!e&&this.timeline&&this._timeline._remove(this,!0)),!1},i._kill=function(){return this._enabled(!1,!1)},i.kill=function(e,t){return this._kill(e,t),this},i._uncache=function(e){for(var t=e?this:this.timeline;t;)t._dirty=!0,t=t.timeline;return this},i._swapSelfInParams=function(e){for(var t=e.length,a=e.concat();-1<--t;)"{self}"===e[t]&&(a[t]=this);return a},i._callback=function(e){var t=this.vars,a=t[e],i=t[e+"Params"],n=t[e+"Scope"]||t.callbackScope||this,r=i?i.length:0;0===r?a.call(n):1===r?a.call(n,i[0]):2===r?a.call(n,i[0],i[1]):a.apply(n,i)},i.eventCallback=function(e,t,a,i){if("on"===(e||"").substr(0,2)){var n=this.vars;if(1===arguments.length)return n[e];null==t?delete n[e]:(n[e]=t,n[e+"Params"]=g(a)&&-1!==a.join("").indexOf("{self}")?this._swapSelfInParams(a):a,n[e+"Scope"]=i),"onUpdate"===e&&(this._onUpdate=t)}return this},i.delay=function(e){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+e-this._delay),this._delay=e,this):this._delay},i.duration=function(e){return arguments.length?(this._duration=this._totalDuration=e,this._uncache(!0),this._timeline.smoothChildTiming&&0<this._time&&this._time<this._duration&&0!==e&&this.totalTime(this._totalTime*(e/this._duration),!0),this):(this._dirty=!1,this._duration)},i.totalDuration=function(e){return this._dirty=!1,arguments.length?this.duration(e):this._totalDuration},i.time=function(e,t){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(e>this._duration?this._duration:e,t)):this._time},i.totalTime=function(e,t,a){if(x||T.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>e&&!a&&(e+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var i=this._totalDuration,n=this._timeline;if(e>i&&!a&&(e=i),this._startTime=(this._paused?this._pauseTime:n._time)-(this._reversed?i-e:e)/this._timeScale,n._dirty||this._uncache(!1),n._timeline)for(;n._timeline;)n._timeline._time!==(n._startTime+n._totalTime)/n._timeScale&&n.totalTime(n._totalTime,!0),n=n._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==e||0===this._duration)&&(M.length&&ee(),this.render(e,t,!1),M.length&&ee())}return this},i.progress=i.totalProgress=function(e,t){var a=this.duration();return arguments.length?this.totalTime(a*e,t):a?this._time/a:this.ratio},i.startTime=function(e){return arguments.length?(e!==this._startTime&&(this._startTime=e,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,e-this._delay)),this):this._startTime},i.endTime=function(e){return this._startTime+(!1==e?this.duration():this.totalDuration())/this._timeScale},i.timeScale=function(e){if(!arguments.length)return this._timeScale;var a,i;for(e=e||c,this._timeline&&this._timeline.smoothChildTiming&&(a=this._pauseTime,i=a||0===a?a:this._timeline.totalTime(),this._startTime=i-(i-this._startTime)*this._timeScale/e),this._timeScale=e,i=this.timeline;i&&i.timeline;)i._dirty=!0,i.totalDuration(),i=i.timeline;return this},i.reversed=function(e){return arguments.length?(e!=this._reversed&&(this._reversed=e,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},i.paused=function(e){if(!arguments.length)return this._paused;var t=this._timeline,a,i;return e!=this._paused&&t&&(!x&&!e&&T.wake(),a=t.rawTime(),i=a-this._pauseTime,!e&&t.smoothChildTiming&&(this._startTime+=i,this._uncache(!1)),this._pauseTime=e?a:null,this._paused=e,this._active=this.isActive(),!e&&0!==i&&this._initted&&this.duration()&&(a=t.smoothChildTiming?this._totalTime:(a-this._startTime)/this._timeScale,this.render(a,a===this._totalTime,!0))),this._gc&&!e&&this._enabled(!0,!1),this};var B=v("core.SimpleTimeline",function(e){D.call(this,0,e),this.autoRemoveChildren=this.smoothChildTiming=!0});i=B.prototype=new D,i.constructor=B,i.kill()._gc=!1,i._first=i._last=i._recent=null,i._sortChildren=!1,i.add=i.insert=function(e,t){var a,i;if(e._startTime=+(t||0)+e._delay,e._paused&&this!==e._timeline&&(e._pauseTime=e._startTime+(this.rawTime()-e._startTime)/e._timeScale),e.timeline&&e.timeline._remove(e,!0),e.timeline=e._timeline=this,e._gc&&e._enabled(!0,!0),a=this._last,this._sortChildren)for(i=e._startTime;a&&a._startTime>i;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=this._first,this._first=e),e._next?e._next._prev=e:this._last=e,e._prev=a,this._recent=e,this._timeline&&this._uncache(!0),this},i._remove=function(e,t){return e.timeline===this&&(!t&&e._enabled(!1,!0),e._prev?e._prev._next=e._next:this._first===e&&(this._first=e._next),e._next?e._next._prev=e._prev:this._last===e&&(this._last=e._prev),e._next=e._prev=e.timeline=null,e===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},i.render=function(e,t,a){var i=this._first,n;for(this._totalTime=this._time=this._rawPrevTime=e;i;)n=i._next,(i._active||e>=i._startTime&&!i._paused&&!i._gc)&&(i._reversed?i.render((i._dirty?i.totalDuration():i._totalDuration)-(e-i._startTime)*i._timeScale,t,a):i.render((e-i._startTime)*i._timeScale,t,a)),i=n},i.rawTime=function(){return x||T.wake(),this._totalTime};var z=v("TweenLite",function(e,a,n){if(D.call(this,a,n),this.render=z.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"==typeof e?z.selector(e)||e:e;var r=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),o=this.vars.overwrite,s,i,l;if(this._overwrite=o=null==o?Z[z.defaultOverwrite]:"number"==typeof o?o>>0:Z[o],(r||e instanceof Array||e.push&&g(e))&&"number"!=typeof e[0])for(this._targets=l=m(e),this._propLookup=[],this._siblings=[],s=0;s<l.length;s++){if(i=l[s],!i){l.splice(s--,1);continue}else if("string"==typeof i){i=l[s--]=z.selector(i),"string"==typeof i&&l.splice(s+1,1);continue}else if(i.length&&i!==t&&i[0]&&(i[0]===t||i[0].nodeType&&i[0].style&&!i.nodeType)){l.splice(s--,1),this._targets=l=l.concat(m(i));continue}this._siblings[s]=te(i,this,!1),1===o&&1<this._siblings[s].length&&ie(i,this,null,1,this._siblings[s])}else this._propLookup={},this._siblings=te(e,this,!1),1===o&&1<this._siblings.length&&ie(e,this,null,1,this._siblings);(this.vars.immediateRender||0===a&&0===this._delay&&!1!==this.vars.immediateRender)&&(this._time=-c,this.render(p(0,-this._delay)))},!0),N=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},I=function(e,t){var a={},i;for(i in e)Q[i]||i in t&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||G[i]&&(!G[i]||!G[i]._autoCSS)||(a[i]=e[i],delete e[i]);e.css=a};i=z.prototype=new D,i.constructor=z,i.kill()._gc=!1,i.ratio=0,i._firstPT=i._targets=i._overwrittenProps=i._startAt=null,i._notifyPluginsOfEnabled=i._lazy=!1,z.version="1.20.3",z.defaultEase=i._ease=new P(null,null,1,1),z.defaultOverwrite="auto",z.ticker=T,z.autoSleep=120,z.lagSmoothing=function(e,t){T.lagSmoothing(e,t)},z.selector=t.$||t.jQuery||function(a){var e=t.$||t.jQuery;return e?(z.selector=e,e(a)):"undefined"==typeof n?a:n.querySelectorAll?n.querySelectorAll(a):n.getElementById("#"===a.charAt(0)?a.substr(1):a)};var M=[],j={},F=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,U=/[\+-]=-?[\.\d]/,X=function(e){for(var t=this._firstPT,a=1e-6,i;t;)i=t.blob?1===e&&null!=this.end?this.end:e?this.join(""):this.start:t.c*e+t.s,t.m?i=t.m(i,this._target||t.t):i<a&&i>-a&&!t.blob&&(i=0),t.f?t.fp?t.t[t.p](t.fp,i):t.t[t.p](i):t.t[t.p]=i,t=t._next},Y=function(e,t,n,r){var o=[],d=0,p="",s=0,c,m,u,g,f,l,h;for(o.start=e,o.end=t,e=o[0]=e+"",t=o[1]=t+"",n&&(n(o),e=o[0],t=o[1]),o.length=0,c=e.match(F)||[],m=t.match(F)||[],r&&(r._next=null,r.blob=1,o._firstPT=o._applyPT=r),f=m.length,g=0;g<f;g++)h=m[g],l=t.substr(d,t.indexOf(h,d)-d),p+=l||!g?l:",",d+=l.length,s?s=(s+1)%5:"rgba("===l.substr(-5)&&(s=1),h===c[g]||c.length<=g?p+=h:(p&&(o.push(p),p=""),u=parseFloat(c[g]),o.push(u),o._firstPT={_next:o._firstPT,t:o,p:o.length-1,s:u,c:("="===h.charAt(1)?parseInt(h.charAt(0)+"1",10)*parseFloat(h.substr(2)):parseFloat(h)-u)||0,f:0,m:s&&4>s?_:0}),d+=h.length;return p+=t.substr(d),p&&o.push(p),o.setRatio=X,U.test(t)&&(o.end=null),o},V=function(e,t,a,i,n,r,o,l,d){"function"==typeof i&&(i=i(d||0,e));var p=typeof e[t],c="function"==p?t.indexOf("set")||"function"!=typeof e["get"+t.substr(3)]?t:"get"+t.substr(3):"",m="get"===a?c?o?e[c](o):e[c]():e[t]:a,u="string"==typeof i&&"="===i.charAt(1),g={t:e,p:t,s:m,f:"function"==p,pg:0,n:n||t,m:r?"function"==typeof r?r:_:0,pr:0,c:u?parseInt(i.charAt(0)+"1",10)*parseFloat(i.substr(2)):parseFloat(i)-m||0},f;if("number"==typeof m&&("number"==typeof i||u)||(o||isNaN(m)||!u&&isNaN(i)||"boolean"==typeof m||"boolean"==typeof i?(g.fp=o,f=Y(m,u?parseFloat(g.s)+g.c:i,l||z.defaultStringFilter,g),g={t:f,p:"setRatio",s:0,c:1,f:2,pg:0,n:n||t,pr:0,m:0}):(g.s=parseFloat(m),!u&&(g.c=parseFloat(i)-g.s||0))),g.c)return(g._next=this._firstPT)&&(g._next._prev=g),this._firstPT=g,g},H=z._internals={isArray:g,isSelector:N,lazyTweens:M,blobDif:Y},G=z._plugins={},W=H.tweenLookup={},q=0,Q=H.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1,yoyoEase:1},Z={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,true:1,false:0},K=D._rootFramesTimeline=new B,$=D._rootTimeline=new B,J=30,ee=H.lazyRender=function(){var e=M.length,t;for(j={};-1<--e;)t=M[e],t&&!1!==t._lazy&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);M.length=0};$._startTime=T.time,K._startTime=T.frame,$._active=K._active=!0,setTimeout(ee,1),D._updateRoot=z.render=function(){var e,t,a;if(M.length&&ee(),$.render((T.time-$._startTime)*$._timeScale,!1,!1),K.render((T.frame-K._startTime)*K._timeScale,!1,!1),M.length&&ee(),T.frame>=J){for(a in J=T.frame+(parseInt(z.autoSleep,10)||120),W){for(t=W[a].tweens,e=t.length;-1<--e;)t[e]._gc&&t.splice(e,1);0===t.length&&delete W[a]}if(a=$._first,(!a||a._paused)&&z.autoSleep&&!K._first&&1===T._listeners.tick.length){for(;a&&a._paused;)a=a._next;a||T.sleep()}}},T.addEventListener("tick",D._updateRoot);var te=function(e,t,n){var r=e._gsTweenID,o,a;if(W[r||(e._gsTweenID=r="t"+q++)]||(W[r]={target:e,tweens:[]}),t&&(o=W[r].tweens,o[a=o.length]=t,n))for(;-1<--a;)o[a]===t&&o.splice(a,1);return W[r].tweens},ae=function(e,t,a,i){var n=e.vars.onOverwrite,r,o;return n&&(r=n(e,t,a,i)),n=z.onOverwrite,n&&(o=n(e,t,a,i)),!1!==r&&!1!==o},ie=function(e,t,a,n,r){var o,i,s,d;if(1===n||4<=n){for(d=r.length,o=0;o<d;o++)if((s=r[o])!==t)!s._gc&&s._kill(null,e,t)&&(i=!0);else if(5===n)break;return i}var l=t._startTime+c,_=[],p=0,m=0===t._duration,u;for(o=r.length;-1<--o;)if((s=r[o])===t||s._gc||s._paused);else s._timeline===t._timeline?s._startTime<=l&&s._startTime+s.totalDuration()/s._timeScale>l&&((m||!s._initted)&&2e-10>=l-s._startTime||(_[p++]=s)):(u=u||ne(t,0,m),0===ne(s,u,m)&&(_[p++]=s));for(o=p;-1<--o;)if(s=_[o],2===n&&s._kill(a,e,t)&&(i=!0),2!==n||!s._firstPT&&s._initted){if(2!==n&&!ae(s,t))continue;s._enabled(!1,!1)&&(i=!0)}return i},ne=function(e,a,i){for(var n=e._timeline,r=n._timeScale,o=e._startTime;n._timeline;){if(o+=n._startTime,r*=n._timeScale,n._paused)return-100;n=n._timeline}return o/=r,o>a?o-a:i&&o===a||!e._initted&&o-a<2*c?c:(o+=e.totalDuration()/e._timeScale/r)>a+c?0:o-a-c};i._init=function(){var e=this.vars,t=this._overwrittenProps,a=this._duration,n=!!e.immediateRender,r=e.ease,o,i,s,d,_,p;if(e.startAt){for(d in this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),_={},e.startAt)_[d]=e.startAt[d];if(_.data="isStart",_.overwrite=!1,_.immediateRender=!0,_.lazy=n&&!1!==e.lazy,_.startAt=_.delay=null,_.onUpdate=e.onUpdate,_.onUpdateParams=e.onUpdateParams,_.onUpdateScope=e.onUpdateScope||e.callbackScope||this,this._startAt=z.to(this.target,0,_),n)if(0<this._time)this._startAt=null;else if(0!==a)return}else if(e.runBackwards&&0!==a)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{for(d in 0!==this._time&&(n=!1),s={},e)Q[d]&&"autoCSS"!==d||(s[d]=e[d]);if(s.overwrite=0,s.data="isFromStart",s.lazy=n&&!1!==e.lazy,s.immediateRender=n,this._startAt=z.to(this.target,0,s),!n)this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null);else if(0===this._time)return}if(this._ease=r=r?r instanceof P?r:"function"==typeof r?new P(r,e.easeParams):S[r]||z.defaultEase:z.defaultEase,e.easeParams instanceof Array&&r.config&&(this._ease=r.config.apply(r,e.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(p=this._targets.length,o=0;o<p;o++)this._initProps(this._targets[o],this._propLookup[o]={},this._siblings[o],t?t[o]:null,o)&&(i=!0);else i=this._initProps(this.target,this._propLookup,this._siblings,t,0);if(i&&z._onPluginEvent("_onInitAllProps",this),t&&!this._firstPT&&"function"!=typeof this.target&&this._enabled(!1,!1),e.runBackwards)for(s=this._firstPT;s;)s.s+=s.c,s.c=-s.c,s=s._next;this._onUpdate=e.onUpdate,this._initted=!0},i._initProps=function(e,a,n,r,o){var s,l,i,d,_,p;if(null==e)return!1;for(s in j[e._gsTweenID]&&ee(),!this.vars.css&&e.style&&e!==t&&e.nodeType&&G.css&&!1!==this.vars.autoCSS&&I(this.vars,e),this.vars)if(p=this.vars[s],Q[s])p&&(p instanceof Array||p.push&&g(p))&&-1!==p.join("").indexOf("{self}")&&(this.vars[s]=p=this._swapSelfInParams(p,this));else if(G[s]&&(d=new G[s])._onInitTween(e,this.vars[s],this,o)){for(this._firstPT=_={_next:this._firstPT,t:d,p:"setRatio",s:0,c:1,f:1,n:s,pg:1,pr:d._priority,m:0},l=d._overwriteProps.length;-1<--l;)a[d._overwriteProps[l]]=this._firstPT;(d._priority||d._onInitAllProps)&&(i=!0),(d._onDisable||d._onEnable)&&(this._notifyPluginsOfEnabled=!0),_._next&&(_._next._prev=_)}else a[s]=V.call(this,e,s,"get",p,s,0,null,this.vars.stringFilter,o);return r&&this._kill(r,e)?this._initProps(e,a,n,r,o):1<this._overwrite&&this._firstPT&&1<n.length&&ie(e,this,a,this._overwrite,n)?(this._kill(a,e),this._initProps(e,a,n,r,o)):(this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration)&&(j[e._gsTweenID]=!0),i)},i.render=function(e,t,a){var i=this._time,n=this._duration,o=this._rawPrevTime,s,l,d,_;if(e>=n-1e-7&&0<=e)this._totalTime=this._time=n,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,l="onComplete",a=a||this._timeline.autoRemoveChildren),0===n&&(this._initted||!this.vars.lazy||a)&&(this._startTime===this._timeline._duration&&(e=0),(0>o||0>=e&&-1e-7<=e||o===c&&"isPause"!==this.data)&&o!==e&&(a=!0,o>c&&(l="onReverseComplete")),this._rawPrevTime=_=!t||e||o===e?e:c);else if(1e-7>e)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==i||0===n&&0<o)&&(l="onReverseComplete",s=this._reversed),0>e&&(this._active=!1,0===n&&(this._initted||!this.vars.lazy||a)&&(0<=o&&(o!==c||"isPause"!==this.data)&&(a=!0),this._rawPrevTime=_=!t||e||o===e?e:c)),(!this._initted||this._startAt&&this._startAt.progress())&&(a=!0);else if(this._totalTime=this._time=e,this._easeType){var p=e/n,r=this._easeType,m=this._easePower;(1===r||3===r&&0.5<=p)&&(p=1-p),3===r&&(p*=2),1===m?p*=p:2===m?p*=p*p:3===m?p*=p*p*p:4===m&&(p*=p*p*p*p),this.ratio=1===r?1-p:2===r?p:0.5>e/n?p/2:1-p/2}else this.ratio=this._ease.getRatio(e/n);if(this._time!==i||a){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!a&&this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=i,this._rawPrevTime=o,M.push(this),void(this._lazy=[e,t]);this._time&&!s?this.ratio=this._ease.getRatio(this._time/n):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(!1!==this._lazy&&(this._lazy=!1),this._active||this._paused||this._time===i||!(0<=e)||(this._active=!0),0===i&&(this._startAt&&(0<=e?this._startAt.render(e,!0,a):!l&&(l="_dummyGS")),this.vars.onStart&&(0!==this._time||0===n)&&!t&&this._callback("onStart")),d=this._firstPT;d;)d.f?d.t[d.p](d.c*this.ratio+d.s):d.t[d.p]=d.c*this.ratio+d.s,d=d._next;this._onUpdate&&(0>e&&this._startAt&&-1e-4!==e&&this._startAt.render(e,!0,a),!t&&(this._time!==i||s||a)&&this._callback("onUpdate")),l&&(!this._gc||a)&&(0>e&&this._startAt&&!this._onUpdate&&-1e-4!==e&&this._startAt.render(e,!0,a),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!t&&this.vars[l]&&this._callback(l),0===n&&this._rawPrevTime===c&&_!==c&&(this._rawPrevTime=0))}},i._kill=function(e,t,a){if("all"===e&&(e=null),null==e&&(null==t||t===this.target))return this._lazy=!1,this._enabled(!1,!1);t="string"==typeof t?z.selector(t)||t:t||this._targets||this.target;var n=a&&this._time&&a._startTime===this._startTime&&this._timeline===a._timeline,r,i,o,s,l,d,_,p,c;if((g(t)||N(t))&&"number"!=typeof t[0])for(r=t.length;-1<--r;)this._kill(e,t[r],a)&&(d=!0);else{if(this._targets){for(r=this._targets.length;-1<--r;)if(t===this._targets[r]){l=this._propLookup[r]||{},this._overwrittenProps=this._overwrittenProps||[],i=this._overwrittenProps[r]=e?this._overwrittenProps[r]||{}:"all";break}}else{if(t!==this.target)return!1;l=this._propLookup,i=this._overwrittenProps=e?this._overwrittenProps||{}:"all"}if(l){if(_=e||l,p=e!==i&&"all"!==i&&e!==l&&("object"!=typeof e||!e._tempKill),a&&(z.onOverwrite||this.vars.onOverwrite)){for(o in _)l[o]&&(c||(c=[]),c.push(o));if((c||!e)&&!ae(this,a,t,c))return!1}for(o in _)(s=l[o])&&(n&&(s.f?s.t[s.p](s.s):s.t[s.p]=s.s,d=!0),s.pg&&s.t._kill(_)&&(d=!0),(!s.pg||0===s.t._overwriteProps.length)&&(s._prev?s._prev._next=s._next:s===this._firstPT&&(this._firstPT=s._next),s._next&&(s._next._prev=s._prev),s._next=s._prev=null),delete l[o]),p&&(i[o]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return d},i.invalidate=function(){return this._notifyPluginsOfEnabled&&z._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],D.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-c,this.render(p(0,-this._delay))),this},i._enabled=function(e,t){if(x||T.wake(),e&&this._gc){var a=this._targets,n;if(a)for(n=a.length;-1<--n;)this._siblings[n]=te(a[n],this,!0);else this._siblings=te(this.target,this,!0)}return D.prototype._enabled.call(this,e,t),this._notifyPluginsOfEnabled&&this._firstPT&&z._onPluginEvent(e?"_onEnable":"_onDisable",this)},z.to=function(e,t,a){return new z(e,t,a)},z.from=function(e,t,a){return a.runBackwards=!0,a.immediateRender=!1!=a.immediateRender,new z(e,t,a)},z.fromTo=function(e,t,a,i){return i.startAt=a,i.immediateRender=!1!=i.immediateRender&&!1!=a.immediateRender,new z(e,t,i)},z.delayedCall=function(e,t,a,i,n){return new z(t,0,{delay:e,onComplete:t,onCompleteParams:a,callbackScope:i,onReverseComplete:t,onReverseCompleteParams:a,immediateRender:!1,lazy:!1,useFrames:n,overwrite:0})},z.set=function(e,t){return new z(e,0,t)},z.getTweensOf=function(e,n){if(null==e)return[];e="string"==typeof e?z.selector(e)||e:e;var r,i,a,o;if((g(e)||N(e))&&"number"!=typeof e[0]){for(r=e.length,i=[];-1<--r;)i=i.concat(z.getTweensOf(e[r],n));for(r=i.length;-1<--r;)for(o=i[r],a=r;-1<--a;)o===i[a]&&i.splice(r,1)}else if(e._gsTweenID)for(i=te(e).concat(),r=i.length;-1<--r;)(i[r]._gc||n&&!i[r].isActive())&&i.splice(r,1);return i||[]},z.killTweensOf=z.killDelayedCallsTo=function(e,t,n){"object"==typeof t&&(n=t,t=!1);for(var r=z.getTweensOf(e,t),a=r.length;-1<--a;)r[a]._kill(n,e)};var re=v("plugins.TweenPlugin",function(e,t){this._overwriteProps=(e||"").split(","),this._propName=this._overwriteProps[0],this._priority=t||0,this._super=re.prototype},!0);if(i=re.prototype,re.version="1.19.0",re.API=2,i._firstPT=null,i._addTween=V,i.setRatio=X,i._kill=function(e){var t=this._overwriteProps,a=this._firstPT,n;if(null!=e[this._propName])this._overwriteProps=[];else for(n=t.length;-1<--n;)null!=e[t[n]]&&t.splice(n,1);for(;a;)null!=e[a.n]&&(a._next&&(a._next._prev=a._prev),a._prev?(a._prev._next=a._next,a._prev=null):this._firstPT===a&&(this._firstPT=a._next)),a=a._next;return!1},i._mod=i._roundProps=function(e){for(var t=this._firstPT,a;t;)a=e[this._propName]||null!=t.n&&e[t.n.split(this._propName+"_").join("")],a&&"function"==typeof a&&(2===t.f?t.t._applyPT.m=a:t.m=a),t=t._next},z._onPluginEvent=function(e,t){var a=t._firstPT,i,n,r,o,s;if("_onInitAllProps"===e){for(;a;){for(s=a._next,n=r;n&&n.pr>a.pr;)n=n._next;(a._prev=n?n._prev:o)?a._prev._next=a:r=a,(a._next=n)?n._prev=a:o=a,a=s}a=t._firstPT=r}for(;a;)a.pg&&"function"==typeof a.t[e]&&a.t[e]()&&(i=!0),a=a._next;return i},re.activate=function(e){for(var t=e.length;-1<--t;)e[t].API===re.API&&(G[new e[t]()._propName]=e[t]);return!0},y.plugin=function(e){if(!e||!e.propName||!e.init||!e.API)throw"illegal plugin definition.";var t=e.propName,a=e.priority||0,i=e.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},r=v("plugins."+t.charAt(0).toUpperCase()+t.substr(1)+"Plugin",function(){re.call(this,t,a),this._overwriteProps=i||[]},!0===e.global),o=r.prototype=new re(t),s;for(s in o.constructor=r,r.API=e.API,n)"function"==typeof e[s]&&(o[n[s]]=e[s]);return r.version=e.version,re.activate([r]),r},b=t._gsQueue,b){for(a=0;a<b.length;a++)b[a]();for(i in f)f[i].func||t.console.log("GSAP encountered missing dependency: "+i)}x=!1}})("undefined"!=typeof r&&r.exports&&"undefined"!=typeof a?a:t||window,"TweenLite")}),s.registerDynamic("d",[],!0,function(i,s,c){var m=this||self,u="undefined"!=typeof c&&c.exports&&"undefined"!=typeof m?m:s||window;(u._gsQueue||(u._gsQueue=[])).push(function(){"use strict";var s=Math.atan2;u._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(e,t,n){var r=function(e){var t=[],a=e.length,n;for(n=0;n!==a;t.push(e[n++]));return t},o=function(e,t,a){var i=e.cycle,n,r;for(n in i)r=i[n],e[n]="function"==typeof r?r(a,t[a]):r[a%r.length];delete e.cycle},s=function(e,t,a){n.call(this,e,t,a),this._cycle=0,this._yoyo=!0===this.vars.yoyo||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._repeat&&this._uncache(!0),this.render=s.prototype.render},a=1e-10,d=n._internals,_=d.isSelector,c=d.isArray,i=s.prototype=n.to({},0.1,{}),l=[];s.version="1.20.3",i.constructor=s,i.kill()._gc=!1,s.killTweensOf=s.killDelayedCallsTo=n.killTweensOf,s.getTweensOf=n.getTweensOf,s.lagSmoothing=n.lagSmoothing,s.ticker=n.ticker,s.render=n.render,i.invalidate=function(){return this._yoyo=!0===this.vars.yoyo||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._yoyoEase=null,this._uncache(!0),n.prototype.invalidate.call(this)},i.updateTo=function(e,t){var a=this.ratio,i=this.vars.immediateRender||e.immediateRender,r;for(r in t&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay)),e)this.vars[r]=e[r];if(this._initted||i)if(t)this._initted=!1,i&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&n._onPluginEvent("_onDisable",this),0.998<this._time/this._duration){var o=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(o,!0,!1)}else if(this._initted=!1,this._init(),0<this._time||i)for(var s=this._firstPT,l;s;)l=s.s+s.c,s.c*=1/(1-a),s.s=l-s.c,s=s._next;return this},i.render=function(e,t,i){!this._initted&&0===this._duration&&this.vars.repeat&&this.invalidate();var o=this._dirty?this.totalDuration():this._totalDuration,s=this._time,l=this._totalTime,_=this._cycle,p=this._duration,c=this._rawPrevTime,m,u,g,f,h,r,y,v,b;if(e>=o-1e-7&&0<=e?(this._totalTime=o,this._cycle=this._repeat,this._yoyo&&0!=(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=p,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),!this._reversed&&(m=!0,u="onComplete",i=i||this._timeline.autoRemoveChildren),0===p&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(e=0),(0>c||0>=e&&-1e-7<=e||c===a&&"isPause"!==this.data)&&c!==e&&(i=!0,c>a&&(u="onReverseComplete")),this._rawPrevTime=v=!t||e||c===e?e:a)):1e-7>e?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==l||0===p&&0<c)&&(u="onReverseComplete",m=this._reversed),0>e&&(this._active=!1,0===p&&(this._initted||!this.vars.lazy||i)&&(0<=c&&(i=!0),this._rawPrevTime=v=!t||e||c===e?e:a)),!this._initted&&(i=!0)):(this._totalTime=this._time=e,0!==this._repeat&&(f=p+this._repeatDelay,this._cycle=this._totalTime/f>>0,0!==this._cycle&&this._cycle===this._totalTime/f&&l<=e&&this._cycle--,this._time=this._totalTime-this._cycle*f,this._yoyo&&0!=(1&this._cycle)&&(this._time=p-this._time,b=this._yoyoEase||this.vars.yoyoEase,b&&(!this._yoyoEase&&(!0!==b||this._initted?this._yoyoEase=b=!0===b?this._ease:b instanceof Ease?b:Ease.map[b]:(b=this.vars.ease,this._yoyoEase=b=b?b instanceof Ease?b:"function"==typeof b?new Ease(b,this.vars.easeParams):Ease.map[b]||n.defaultEase:n.defaultEase)),this.ratio=b?1-b.getRatio((p-this._time)/p):0)),this._time>p?this._time=p:0>this._time&&(this._time=0)),this._easeType&&!b?(h=this._time/p,r=this._easeType,y=this._easePower,(1===r||3===r&&0.5<=h)&&(h=1-h),3===r&&(h*=2),1===y?h*=h:2===y?h*=h*h:3===y?h*=h*h*h:4===y&&(h*=h*h*h*h),this.ratio=1===r?1-h:2===r?h:0.5>this._time/p?h/2:1-h/2):!b&&(this.ratio=this._ease.getRatio(this._time/p))),s===this._time&&!i&&_===this._cycle)return void(l!==this._totalTime&&this._onUpdate&&!t&&this._callback("onUpdate"));if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration))return this._time=s,this._totalTime=l,this._rawPrevTime=c,this._cycle=_,d.lazyTweens.push(this),void(this._lazy=[e,t]);!this._time||m||b?m&&this._ease._calcEnd&&!b&&(this.ratio=this._ease.getRatio(0===this._time?0:1)):this.ratio=this._ease.getRatio(this._time/p)}for(!1!==this._lazy&&(this._lazy=!1),this._active||this._paused||this._time===s||!(0<=e)||(this._active=!0),0===l&&(2===this._initted&&0<e&&this._init(),this._startAt&&(0<=e?this._startAt.render(e,!0,i):!u&&(u="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===p)&&!t&&this._callback("onStart")),g=this._firstPT;g;)g.f?g.t[g.p](g.c*this.ratio+g.s):g.t[g.p]=g.c*this.ratio+g.s,g=g._next;this._onUpdate&&(0>e&&this._startAt&&this._startTime&&this._startAt.render(e,!0,i),!t&&(this._totalTime!==l||u)&&this._callback("onUpdate")),this._cycle===_||t||this._gc||!this.vars.onRepeat||this._callback("onRepeat"),u&&(!this._gc||i)&&(0>e&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(e,!0,i),m&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!t&&this.vars[u]&&this._callback(u),0===p&&this._rawPrevTime===a&&v!==a&&(this._rawPrevTime=0))},s.to=function(e,t,a){return new s(e,t,a)},s.from=function(e,t,a){return a.runBackwards=!0,a.immediateRender=!1!=a.immediateRender,new s(e,t,a)},s.fromTo=function(e,t,a,i){return i.startAt=a,i.immediateRender=!1!=i.immediateRender&&!1!=a.immediateRender,new s(e,t,i)},s.staggerTo=s.allTo=function(e,t,d,m,u,g,f){m=m||0;var h=0,y=[],a=function(){d.onComplete&&d.onComplete.apply(d.onCompleteScope||this,arguments),u.apply(f||d.callbackScope||this,g||l)},v=d.cycle,b=d.startAt&&d.startAt.cycle,T,x,w,i;for(c(e)||("string"==typeof e&&(e=n.selector(e)||e),_(e)&&(e=r(e))),e=e||[],0>m&&(e=r(e),e.reverse(),m*=-1),T=e.length-1,w=0;w<=T;w++){for(i in x={},d)x[i]=d[i];if(v&&(o(x,e,w),null!=x.duration&&(t=x.duration,delete x.duration)),b){for(i in b=x.startAt={},d.startAt)b[i]=d.startAt[i];o(x.startAt,e,w)}x.delay=h+(x.delay||0),w===T&&u&&(x.onComplete=a),y[w]=new s(e[w],t,x),h+=m}return y},s.staggerFrom=s.allFrom=function(e,t,a,i,n,r,o){return a.runBackwards=!0,a.immediateRender=!1!=a.immediateRender,s.staggerTo(e,t,a,i,n,r,o)},s.staggerFromTo=s.allFromTo=function(e,t,a,i,n,r,o,l){return i.startAt=a,i.immediateRender=!1!=i.immediateRender&&!1!=a.immediateRender,s.staggerTo(e,t,i,n,r,o,l)},s.delayedCall=function(e,t,a,i,n){return new s(t,0,{delay:e,onComplete:t,onCompleteParams:a,callbackScope:i,onReverseComplete:t,onReverseCompleteParams:a,immediateRender:!1,useFrames:n,overwrite:0})},s.set=function(e,t){return new s(e,0,t)},s.isTweening=function(e){return 0<n.getTweensOf(e,!0).length};var p=function(e,t){for(var i=[],a=0,r=e._first;r;)r instanceof n?i[a++]=r:(t&&(i[a++]=r),i=i.concat(p(r,t)),a=i.length),r=r._next;return i},m=s.getAllTweens=function(t){return p(e._rootTimeline,t).concat(p(e._rootFramesTimeline,t))};s.killAll=function(e,n,r,o){null==n&&(n=!0),null==r&&(r=!0);var s=m(!1!=o),a=s.length,l=n&&r&&o,d,_,p;for(p=0;p<a;p++)_=s[p],(l||_ instanceof t||(d=_.target===_.vars.onComplete)&&r||n&&!d)&&(e?_.totalTime(_._reversed?0:_.totalDuration()):_._enabled(!1,!1))},s.killChildTweensOf=function(e,t){if(null!=e){var o=d.tweenLookup,m,a,u,p,i;if("string"==typeof e&&(e=n.selector(e)||e),_(e)&&(e=r(e)),c(e)){for(p=e.length;-1<--p;)s.killChildTweensOf(e[p],t);return}for(u in m=[],o)for(a=o[u].target.parentNode;a;)a===e&&(m=m.concat(o[u].tweens)),a=a.parentNode;for(i=m.length,p=0;p<i;p++)t&&m[p].totalTime(m[p].totalDuration()),m[p]._enabled(!1,!1)}};var u=function(e,n,r,o){n=!1!==n,r=!1!==r,o=!1!==o;for(var s=m(o),a=n&&r&&o,l=s.length,i,d;-1<--l;)d=s[l],(a||d instanceof t||(i=d.target===d.vars.onComplete)&&r||n&&!i)&&d.paused(e)};return s.pauseAll=function(e,t,a){u(!0,e,t,a)},s.resumeAll=function(e,t,a){u(!1,e,t,a)},s.globalTimeScale=function(i){var r=e._rootTimeline,o=n.ticker.time;return arguments.length?(i=i||a,r._startTime=o-(o-r._startTime)*r._timeScale/i,r=e._rootFramesTimeline,o=n.ticker.frame,r._startTime=o-(o-r._startTime)*r._timeScale/i,r._timeScale=e._rootTimeline._timeScale=i,i):r._timeScale},i.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!=(1&this._cycle)?1-e:e)+this._cycle*(this._duration+this._repeatDelay),t):this._time/this.duration()},i.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this._totalTime/this.totalDuration()},i.time=function(e,t){return arguments.length?(this._dirty&&this.totalDuration(),e>this._duration&&(e=this._duration),this._yoyo&&0!=(1&this._cycle)?e=this._duration-e+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(e+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(e,t)):this._time},i.duration=function(t){return arguments.length?e.prototype.duration.call(this,t):this._duration},i.totalDuration=function(e){return arguments.length?-1===this._repeat?this:this.duration((e-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},i.repeat=function(e){return arguments.length?(this._repeat=e,this._uncache(!0)):this._repeat},i.repeatDelay=function(e){return arguments.length?(this._repeatDelay=e,this._uncache(!0)):this._repeatDelay},i.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},s},!0),u._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(e,t,n){var a=function(e){t.call(this,e),this._labels={},this.autoRemoveChildren=!0===this.vars.autoRemoveChildren,this.smoothChildTiming=!0===this.vars.smoothChildTiming,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var a=this.vars,i,n;for(n in a)i=a[n],d(i)&&-1!==i.join("").indexOf("{self}")&&(a[n]=this._swapSelfInParams(i));d(a.tweens)&&this.add(a.tweens,0,a.align,a.stagger)},i=1e-10,r=n._internals,o=a._internals={},s=r.isSelector,d=r.isArray,l=r.lazyTweens,_=r.lazyRender,c=u._gsDefine.globals,m=function(e){var t={},a;for(a in e)t[a]=e[a];return t},g=function(e,t,a){var i=e.cycle,n,r;for(n in i)r=i[n],e[n]="function"==typeof r?r(a,t[a]):r[a%r.length];delete e.cycle},f=o.pauseCallback=function(){},h=function(e){var t=[],a=e.length,n;for(n=0;n!==a;t.push(e[n++]));return t},y=a.prototype=new t;return a.version="1.20.3",y.constructor=a,y.kill()._gc=y._forcingPlayhead=y._hasPause=!1,y.to=function(e,t,a,i){var r=a.repeat&&c.TweenMax||n;return t?this.add(new r(e,t,a),i):this.set(e,a,i)},y.from=function(e,t,a,i){return this.add((a.repeat&&c.TweenMax||n).from(e,t,a),i)},y.fromTo=function(e,t,a,i,r){var o=i.repeat&&c.TweenMax||n;return t?this.add(o.fromTo(e,t,a,i),r):this.set(e,i,r)},y.staggerTo=function(e,t,r,o,l,d,_,p){var c=new a({onComplete:d,onCompleteParams:_,callbackScope:p,smoothChildTiming:this.smoothChildTiming}),u=r.cycle,f,y;for("string"==typeof e&&(e=n.selector(e)||e),e=e||[],s(e)&&(e=h(e)),o=o||0,0>o&&(e=h(e),e.reverse(),o*=-1),y=0;y<e.length;y++)f=m(r),f.startAt&&(f.startAt=m(f.startAt),f.startAt.cycle&&g(f.startAt,e,y)),u&&(g(f,e,y),null!=f.duration&&(t=f.duration,delete f.duration)),c.to(e[y],t,f,y*o);return this.add(c,l)},y.staggerFrom=function(e,t,a,i,n,r,o,s){return a.immediateRender=!1!=a.immediateRender,a.runBackwards=!0,this.staggerTo(e,t,a,i,n,r,o,s)},y.staggerFromTo=function(e,t,a,i,n,r,o,s,l){return i.startAt=a,i.immediateRender=!1!=i.immediateRender&&!1!=a.immediateRender,this.staggerTo(e,t,i,n,r,o,s,l)},y.call=function(e,t,a,i){return this.add(n.delayedCall(0,e,t,a),i)},y.set=function(e,t,a){return a=this._parseTimeOrLabel(a,0,!0),null==t.immediateRender&&(t.immediateRender=a===this._time&&!this._paused),this.add(new n(e,0,t),a)},a.exportRoot=function(e,t){e=e||{},null==e.smoothChildTiming&&(e.smoothChildTiming=!0);var i=new a(e),r=i._timeline,o,s,l,d;for(null==t&&(t=!0),r._remove(i,!0),i._startTime=0,i._rawPrevTime=i._time=i._totalTime=r._time,l=r._first;l;)d=l._next,t&&l instanceof n&&l.target===l.vars.onComplete||(s=l._startTime-l._delay,0>s&&(o=1),i.add(l,s)),l=d;return r.add(i,0),o&&i.totalDuration(),i},y.add=function(r,o,s,_){var p,c,l,i,m,u;if("number"!=typeof o&&(o=this._parseTimeOrLabel(o,0,!0,r)),!(r instanceof e)){if(r instanceof Array||r&&r.push&&d(r)){for(s=s||"normal",_=_||0,p=o,c=r.length,l=0;l<c;l++)d(i=r[l])&&(i=new a({tweens:i})),this.add(i,p),"string"!=typeof i&&"function"!=typeof i&&("sequence"===s?p=i._startTime+i.totalDuration()/i._timeScale:"start"===s&&(i._startTime-=i.delay())),p+=_;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,o);if("function"==typeof r)r=n.delayedCall(0,r);else throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string."}if(t.prototype.add.call(this,r,o),r._time&&r.render((this.rawTime()-r._startTime)*r._timeScale,!1,!1),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(m=this,u=m.rawTime()>r._startTime;m._timeline;)u&&m._timeline.smoothChildTiming?m.totalTime(m._totalTime,!0):m._gc&&m._enabled(!0,!1),m=m._timeline;return this},y.remove=function(t){if(t instanceof e){this._remove(t,!1);var a=t._timeline=t.vars.useFrames?e._rootFramesTimeline:e._rootTimeline;return t._startTime=(t._paused?t._pauseTime:a._time)-(t._reversed?t.totalDuration()-t._totalTime:t._totalTime)/t._timeScale,this}if(t instanceof Array||t&&t.push&&d(t)){for(var n=t.length;-1<--n;)this.remove(t[n]);return this}return"string"==typeof t?this.removeLabel(t):this.kill(null,t)},y._remove=function(e,a){t.prototype._remove.call(this,e,a);var i=this._last;return i?this._time>this.duration()&&(this._time=this._duration,this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},y.append=function(e,t){return this.add(e,this._parseTimeOrLabel(null,t,!0,e))},y.insert=y.insertMultiple=function(e,t,a,i){return this.add(e,t||0,a,i)},y.appendMultiple=function(e,t,a,i){return this.add(e,this._parseTimeOrLabel(null,t,!0,e),a,i)},y.addLabel=function(e,t){return this._labels[e]=this._parseTimeOrLabel(t),this},y.addPause=function(e,a,i,r){var o=n.delayedCall(0,f,i,r||this);return o.vars.onComplete=o.vars.onReverseComplete=a,o.data="isPause",this._hasPause=!0,this.add(o,e)},y.removeLabel=function(e){return delete this._labels[e],this},y.getLabelTime=function(e){return null==this._labels[e]?-1:this._labels[e]},y._parseTimeOrLabel=function(t,a,n,r){var o,s;if(r instanceof e&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&d(r)))for(s=r.length;-1<--s;)r[s]instanceof e&&r[s].timeline===this&&this.remove(r[s]);if(o="number"!=typeof t||a?99999999999<this.duration()?this.recent().endTime(!1):this._duration:0,"string"==typeof a)return this._parseTimeOrLabel(a,n&&"number"==typeof t&&null==this._labels[a]?t-o:0,n);if(a=a||0,"string"==typeof t&&(isNaN(t)||null!=this._labels[t])){if(s=t.indexOf("="),-1===s)return null==this._labels[t]?n?this._labels[t]=o+a:a:this._labels[t]+a;a=parseInt(t.charAt(s-1)+"1",10)*+t.substr(s+1),t=1<s?this._parseTimeOrLabel(t.substr(0,s-1),0,n):o}else null==t&&(t=o);return+t+a},y.seek=function(e,t){return this.totalTime("number"==typeof e?e:this._parseTimeOrLabel(e),!1!==t)},y.stop=function(){return this.paused(!0)},y.gotoAndPlay=function(e,t){return this.play(e,t)},y.gotoAndStop=function(e,t){return this.pause(e,t)},y.render=function(e,t,a){this._gc&&this._enabled(!0,!1);var n=this._time,r=this._dirty?this.totalDuration():this._totalDuration,o=this._startTime,s=this._timeScale,d=this._paused,p,c,m,u,g,f,h;if(n!==this._time&&(e+=this._time-n),e>=r-1e-7&&0<=e)this._totalTime=this._time=r,this._reversed||this._hasPausedChild()||(c=!0,u="onComplete",g=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=e&&-1e-7<=e||0>this._rawPrevTime||this._rawPrevTime===i)&&this._rawPrevTime!==e&&this._first&&(g=!0,this._rawPrevTime>i&&(u="onReverseComplete"))),this._rawPrevTime=this._duration||!t||e||this._rawPrevTime===e?e:i,e=r+1e-4;else if(!(1e-7>e)){if(this._hasPause&&!this._forcingPlayhead&&!t){if(e>=n)for(p=this._first;p&&p._startTime<=e&&!f;)p._duration||"isPause"!==p.data||p.ratio||0===p._startTime&&0===this._rawPrevTime||(f=p),p=p._next;else for(p=this._last;p&&p._startTime>=e&&!f;)!p._duration&&"isPause"===p.data&&0<p._rawPrevTime&&(f=p),p=p._prev;f&&(this._time=e=f._startTime,this._totalTime=e+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=e}else if(this._totalTime=this._time=0,(0!==n||0===this._duration&&this._rawPrevTime!==i&&(0<this._rawPrevTime||0>e&&0<=this._rawPrevTime))&&(u="onReverseComplete",c=this._reversed),0>e)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(g=c=!0,u="onReverseComplete"):0<=this._rawPrevTime&&this._first&&(g=!0),this._rawPrevTime=e;else{if(this._rawPrevTime=this._duration||!t||e||this._rawPrevTime===e?e:i,0===e&&c)for(p=this._first;p&&0===p._startTime;)p._duration||(c=!1),p=p._next;e=0,this._initted||(g=!0)}if(this._time!==n&&this._first||a||g||f){if(this._initted||(this._initted=!0),this._active||this._paused||this._time===n||!(0<e)||(this._active=!0),0!==n||!this.vars.onStart||0===this._time&&this._duration||t||this._callback("onStart"),h=this._time,h>=n)for(p=this._first;p&&(m=p._next,h===this._time&&(!this._paused||d));)(p._active||p._startTime<=h&&!p._paused&&!p._gc)&&(f===p&&this.pause(),p._reversed?p.render((p._dirty?p.totalDuration():p._totalDuration)-(e-p._startTime)*p._timeScale,t,a):p.render((e-p._startTime)*p._timeScale,t,a)),p=m;else for(p=this._last;p&&(m=p._prev,h===this._time&&(!this._paused||d));){if(p._active||p._startTime<=n&&!p._paused&&!p._gc){if(f===p){for(f=p._prev;f&&f.endTime()>this._time;)f.render(f._reversed?f.totalDuration()-(e-f._startTime)*f._timeScale:(e-f._startTime)*f._timeScale,t,a),f=f._prev;f=null,this.pause()}p._reversed?p.render((p._dirty?p.totalDuration():p._totalDuration)-(e-p._startTime)*p._timeScale,t,a):p.render((e-p._startTime)*p._timeScale,t,a)}p=m}this._onUpdate&&!t&&(l.length&&_(),this._callback("onUpdate")),u&&!this._gc&&(o===this._startTime||s!==this._timeScale)&&(0===this._time||r>=this.totalDuration())&&(c&&(l.length&&_(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!t&&this.vars[u]&&this._callback(u))}},y._hasPausedChild=function(){for(var e=this._first;e;){if(e._paused||e instanceof a&&e._hasPausedChild())return!0;e=e._next}return!1},y.getChildren=function(e,t,i,r){r=r||-9999999999;for(var o=[],a=this._first,s=0;a;)a._startTime<r||(a instanceof n?!1!==t&&(o[s++]=a):(!1!==i&&(o[s++]=a),!1!==e&&(o=o.concat(a.getChildren(!0,t,i)),s=o.length))),a=a._next;return o},y.getTweensOf=function(e,t){var r=this._gc,o=[],a=0,s,l;for(r&&this._enabled(!0,!0),s=n.getTweensOf(e),l=s.length;-1<--l;)(s[l].timeline===this||t&&this._contains(s[l]))&&(o[a++]=s[l]);return r&&this._enabled(!1,!0),o},y.recent=function(){return this._recent},y._contains=function(e){for(var t=e.timeline;t;){if(t===this)return!0;t=t.timeline}return!1},y.shiftChildren=function(e,t,a){a=a||0;for(var i=this._first,n=this._labels,r;i;)i._startTime>=a&&(i._startTime+=e),i=i._next;if(t)for(r in n)n[r]>=a&&(n[r]+=e);return this._uncache(!0)},y._kill=function(e,t){if(!e&&!t)return this._enabled(!1,!1);for(var a=t?this.getTweensOf(t):this.getChildren(!0,!0,!1),n=a.length,i=!1;-1<--n;)a[n]._kill(e,t)&&(i=!0);return i},y.clear=function(e){var t=this.getChildren(!1,!0,!0),a=t.length;for(this._time=this._totalTime=0;-1<--a;)t[a]._enabled(!1,!1);return!1!==e&&(this._labels={}),this._uncache(!0)},y.invalidate=function(){for(var t=this._first;t;)t.invalidate(),t=t._next;return e.prototype.invalidate.call(this)},y._enabled=function(e,a){if(e===this._gc)for(var i=this._first;i;)i._enabled(e,!0),i=i._next;return t.prototype._enabled.call(this,e,a)},y.totalTime=function(){this._forcingPlayhead=!0;var t=e.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,t},y.duration=function(e){return arguments.length?(0!==this.duration()&&0!==e&&this.timeScale(this._duration/e),this):(this._dirty&&this.totalDuration(),this._duration)},y.totalDuration=function(e){if(!arguments.length){if(this._dirty){for(var t=0,a=this._last,i=999999999999,n,r;a;)n=a._prev,a._dirty&&a.totalDuration(),a._startTime>i&&this._sortChildren&&!a._paused&&!this._calculatingDuration?(this._calculatingDuration=1,this.add(a,a._startTime-a._delay),this._calculatingDuration=0):i=a._startTime,0>a._startTime&&!a._paused&&(t-=a._startTime,this._timeline.smoothChildTiming&&(this._startTime+=a._startTime/this._timeScale,this._time-=a._startTime,this._totalTime-=a._startTime,this._rawPrevTime-=a._startTime),this.shiftChildren(-a._startTime,!1,-9999999999),i=0),r=a._startTime+a._totalDuration/a._timeScale,r>t&&(t=r),a=n;this._duration=this._totalDuration=t,this._dirty=!1}return this._totalDuration}return e&&this.totalDuration()?this.timeScale(this._totalDuration/e):this},y.paused=function(t){if(!t)for(var a=this._first,i=this._time;a;)a._startTime===i&&"isPause"===a.data&&(a._rawPrevTime=0),a=a._next;return e.prototype.paused.apply(this,arguments)},y.usesFrames=function(){for(var t=this._timeline;t._timeline;)t=t._timeline;return t===e._rootFramesTimeline},y.rawTime=function(e){return e&&(this._paused||this._repeat&&0<this.time()&&1>this.totalProgress())?this._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(e)-this._startTime)*this._timeScale},a},!0),u._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(e,a,t){var i=function(t){e.call(this,t),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=!0===this.vars.yoyo,this._dirty=!0},n=1e-10,r=a._internals,o=r.lazyTweens,s=r.lazyRender,l=u._gsDefine.globals,_=new t(null,null,1,0),c=i.prototype=new e;return c.constructor=i,c.kill()._gc=!1,i.version="1.20.3",c.invalidate=function(){return this._yoyo=!0===this.vars.yoyo,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),e.prototype.invalidate.call(this)},c.addCallback=function(e,t,i,n){return this.add(a.delayedCall(0,e,i,n),t)},c.removeCallback=function(e,t){if(e)if(null==t)this._kill(null,e);else for(var n=this.getTweensOf(e,!1),a=n.length,i=this._parseTimeOrLabel(t);-1<--a;)n[a]._startTime===i&&n[a]._enabled(!1,!1);return this},c.removePause=function(t){return this.removeCallback(e._internals.pauseCallback,t)},c.tweenTo=function(e,i){i=i||{};var n={ease:_,useFrames:this.usesFrames(),immediateRender:!1},r=i.repeat&&l.TweenMax||a,o,s,p;for(s in i)n[s]=i[s];return n.time=this._parseTimeOrLabel(e),o=d(+n.time-this._time)/this._timeScale||1e-3,p=new r(this,o,n),n.onStart=function(){p.target.paused(!0),p.vars.time!==p.target.time()&&o===p.duration()&&p.duration(d(p.vars.time-p.target.time())/p.target._timeScale),i.onStart&&i.onStart.apply(i.onStartScope||i.callbackScope||p,i.onStartParams||[])},p},c.tweenFromTo=function(e,a,i){i=i||{},e=this._parseTimeOrLabel(e),i.startAt={onComplete:this.seek,onCompleteParams:[e],callbackScope:this},i.immediateRender=!1!==i.immediateRender;var n=this.tweenTo(a,i);return n.duration(d(n.vars.time-e)/this._timeScale||1e-3)},c.render=function(e,t,a){this._gc&&this._enabled(!0,!1);var i=this._time,r=this._dirty?this.totalDuration():this._totalDuration,l=this._duration,d=this._totalTime,_=this._startTime,p=this._timeScale,c=this._rawPrevTime,m=this._paused,u=this._cycle,g,f,h,y,v,b,T,x;if(i!==this._time&&(e+=this._time-i),e>=r-1e-7&&0<=e)this._locked||(this._totalTime=r,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(f=!0,y="onComplete",v=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=e&&-1e-7<=e||0>c||c===n)&&c!==e&&this._first&&(v=!0,c>n&&(y="onReverseComplete"))),this._rawPrevTime=this._duration||!t||e||this._rawPrevTime===e?e:n,this._yoyo&&0!=(1&this._cycle)?this._time=e=0:(this._time=l,e=l+1e-4);else if(1e-7>e){if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==i||0===l&&c!==n&&(0<c||0>e&&0<=c)&&!this._locked)&&(y="onReverseComplete",f=this._reversed),0>e)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(v=f=!0,y="onReverseComplete"):0<=c&&this._first&&(v=!0),this._rawPrevTime=e;else{if(this._rawPrevTime=l||!t||e||this._rawPrevTime===e?e:n,0===e&&f)for(g=this._first;g&&0===g._startTime;)g._duration||(f=!1),g=g._next;e=0,this._initted||(v=!0)}}else if(0===l&&0>c&&(v=!0),this._time=this._rawPrevTime=e,this._locked||(this._totalTime=e,0!==this._repeat&&(b=l+this._repeatDelay,this._cycle=this._totalTime/b>>0,0!==this._cycle&&this._cycle===this._totalTime/b&&d<=e&&this._cycle--,this._time=this._totalTime-this._cycle*b,this._yoyo&&0!=(1&this._cycle)&&(this._time=l-this._time),this._time>l?(this._time=l,e=l+1e-4):0>this._time?this._time=e=0:e=this._time)),this._hasPause&&!this._forcingPlayhead&&!t){if(e=this._time,e>=i||this._repeat&&u!==this._cycle)for(g=this._first;g&&g._startTime<=e&&!T;)g._duration||"isPause"!==g.data||g.ratio||0===g._startTime&&0===this._rawPrevTime||(T=g),g=g._next;else for(g=this._last;g&&g._startTime>=e&&!T;)!g._duration&&"isPause"===g.data&&0<g._rawPrevTime&&(T=g),g=g._prev;T&&T._startTime<l&&(this._time=e=T._startTime,this._totalTime=e+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==u&&!this._locked){var w=this._yoyo&&0!=(1&u),P=w===(this._yoyo&&0!=(1&this._cycle)),S=this._totalTime,C=this._cycle,k=this._rawPrevTime,E=this._time;if(this._totalTime=u*l,this._cycle<u?w=!w:this._totalTime+=l,this._time=i,this._rawPrevTime=0===l?c-1e-4:c,this._cycle=u,this._locked=!0,i=w?0:l,this.render(i,t,0===l),t||this._gc||!this.vars.onRepeat||(this._cycle=C,this._locked=!1,this._callback("onRepeat")),i!==this._time)return;if(P&&(this._cycle=u,this._locked=!0,i=w?l+1e-4:-1e-4,this.render(i,!0,!1)),this._locked=!1,this._paused&&!m)return;this._time=E,this._totalTime=S,this._cycle=C,this._rawPrevTime=k}if((this._time===i||!this._first)&&!a&&!v&&!T)return void(d!==this._totalTime&&this._onUpdate&&!t&&this._callback("onUpdate"));if(this._initted||(this._initted=!0),this._active||this._paused||this._totalTime===d||!(0<e)||(this._active=!0),0!==d||!this.vars.onStart||0===this._totalTime&&this._totalDuration||t||this._callback("onStart"),x=this._time,x>=i)for(g=this._first;g&&(h=g._next,x===this._time&&(!this._paused||m));)(g._active||g._startTime<=this._time&&!g._paused&&!g._gc)&&(T===g&&this.pause(),g._reversed?g.render((g._dirty?g.totalDuration():g._totalDuration)-(e-g._startTime)*g._timeScale,t,a):g.render((e-g._startTime)*g._timeScale,t,a)),g=h;else for(g=this._last;g&&(h=g._prev,x===this._time&&(!this._paused||m));){if(g._active||g._startTime<=i&&!g._paused&&!g._gc){if(T===g){for(T=g._prev;T&&T.endTime()>this._time;)T.render(T._reversed?T.totalDuration()-(e-T._startTime)*T._timeScale:(e-T._startTime)*T._timeScale,t,a),T=T._prev;T=null,this.pause()}g._reversed?g.render((g._dirty?g.totalDuration():g._totalDuration)-(e-g._startTime)*g._timeScale,t,a):g.render((e-g._startTime)*g._timeScale,t,a)}g=h}this._onUpdate&&!t&&(o.length&&s(),this._callback("onUpdate")),y&&!this._locked&&!this._gc&&(_===this._startTime||p!==this._timeScale)&&(0===this._time||r>=this.totalDuration())&&(f&&(o.length&&s(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!t&&this.vars[y]&&this._callback(y))},c.getActive=function(e,t,n){null==e&&(e=!0),null==t&&(t=!0),null==n&&(n=!1);var r=[],a=this.getChildren(e,t,n),o=0,s=a.length,l,i;for(l=0;l<s;l++)i=a[l],i.isActive()&&(r[o++]=i);return r},c.getLabelAfter=function(e){e||0===e||(e=this._time);var t=this.getLabelsArray(),a=t.length,n;for(n=0;n<a;n++)if(t[n].time>e)return t[n].name;return null},c.getLabelBefore=function(e){null==e&&(e=this._time);for(var t=this.getLabelsArray(),a=t.length;-1<--a;)if(t[a].time<e)return t[a].name;return null},c.getLabelsArray=function(){var e=[],t=0,a;for(a in this._labels)e[t++]={time:this._labels[a],name:a};return e.sort(function(e,t){return e.time-t.time}),e},c.invalidate=function(){return this._locked=!1,e.prototype.invalidate.call(this)},c.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!=(1&this._cycle)?1-e:e)+this._cycle*(this._duration+this._repeatDelay),t):this._time/this.duration()||0},c.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this._totalTime/this.totalDuration()||0},c.totalDuration=function(t){return arguments.length?-1!==this._repeat&&t?this.timeScale(this.totalDuration()/t):this:(this._dirty&&(e.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},c.time=function(e,t){return arguments.length?(this._dirty&&this.totalDuration(),e>this._duration&&(e=this._duration),this._yoyo&&0!=(1&this._cycle)?e=this._duration-e+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(e+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(e,t)):this._time},c.repeat=function(e){return arguments.length?(this._repeat=e,this._uncache(!0)):this._repeat},c.repeatDelay=function(e){return arguments.length?(this._repeatDelay=e,this._uncache(!0)):this._repeatDelay},c.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},c.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.getLabelBefore(this._time+1e-8)},i},!0),function(){var e=[],t=[],n=[],_={},a=u._gsDefine.globals,r=function(e,t,a,i){a===i&&(a=i-(i-t)/1e6),e===t&&(t=e+(a-e)/1e6),this.a=e,this.b=t,this.c=a,this.d=i,this.da=i-e,this.ca=a-e,this.ba=t-e},c=function(e,t,i,n){var r={a:e},o={},s={},l={c:n},_=(e+t)/2,p=(t+i)/2,c=(i+n)/2,m=(_+p)/2,u=(p+c)/2,g=(u-m)/8;return r.b=_+(e-_)/4,o.b=m+g,r.c=o.a=(r.b+o.b)/2,o.c=s.a=(m+u)/2,s.b=u-g,l.b=c+(n-c)/4,s.c=l.a=(s.b+l.b)/2,[r,o,s,l]},m=function(r,a,o,s,d){var _=r.length-1,l=0,p=r[0].a,m,i,u,g,f,h,y,v,b,T,x,w,P;for(m=0;m<_;m++)f=r[l],i=f.a,u=f.d,g=r[l+1].d,d?(x=e[m],w=t[m],P=0.25*((w+x)*a)/(s?0.5:n[m]||0.5),h=u-(u-i)*(s?0.5*a:0===x?0:P/x),y=u+(g-u)*(s?0.5*a:0===w?0:P/w),v=u-(h+((y-h)*(3*x/(x+w)+0.5)/4||0))):(h=u-0.5*((u-i)*a),y=u+0.5*((g-u)*a),v=u-(h+y)/2),h+=v,y+=v,f.c=b=h,f.b=0===m?p=f.a+0.6*(f.c-f.a):p,f.da=u-i,f.ca=b-i,f.ba=p-i,o?(T=c(i,p,b,u),r.splice(l,1,T[0],T[1],T[2],T[3]),l+=4):l++,p=y;f=r[l],f.b=p,f.c=p+0.4*(f.d-p),f.da=f.d-f.a,f.ca=f.c-f.a,f.ba=p-f.a,o&&(T=c(f.a,p,f.c,f.d),r.splice(l,1,T[0],T[1],T[2],T[3]))},g=function(n,o,s,d){var _=[],a,l,i,p,c,m;if(d)for(n=[d].concat(n),l=n.length;-1<--l;)"string"==typeof(m=n[l][o])&&"="===m.charAt(1)&&(n[l][o]=d[o]+ +(m.charAt(0)+m.substr(2)));if(a=n.length-2,0>a)return _[0]=new r(n[0][o],0,0,n[0][o]),_;for(l=0;l<a;l++)i=n[l][o],p=n[l+1][o],_[l]=new r(i,0,0,p),s&&(c=n[l+2][o],e[l]=(e[l]||0)+(p-i)*(p-i),t[l]=(t[l]||0)+(c-p)*(c-p));return _[l]=new r(n[l][o],0,0,n[l+1][o]),_},f=function(s,c,u,f,h,y){var v={},b=[],T=y||s[0],x,i,p,a,w,r,l,P;for(i in h="string"==typeof h?","+h+",":",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",null==c&&(c=1),s[0])b.push(i);if(1<s.length){for(P=s[s.length-1],l=!0,x=b.length;-1<--x;)if(i=b[x],0.05<d(T[i]-P[i])){l=!1;break}l&&(s=s.concat(),y&&s.unshift(y),s.push(s[1]),y=s[s.length-3])}for(e.length=t.length=n.length=0,x=b.length;-1<--x;)i=b[x],_[i]=-1!==h.indexOf(","+i+","),v[i]=g(s,i,_[i],y);for(x=e.length;-1<--x;)e[x]=o(e[x]),t[x]=o(t[x]);if(!f){for(x=b.length;-1<--x;)if(_[i])for(p=v[b[x]],r=p.length-1,a=0;a<r;a++)w=p[a+1].da/t[a]+p[a].da/e[a]||0,n[a]=(n[a]||0)+w*w;for(x=n.length;-1<--x;)n[x]=o(n[x])}for(x=b.length,a=u?4:1;-1<--x;)i=b[x],p=v[i],m(p,c,u,f,_[i]),l&&(p.splice(0,a),p.splice(p.length-a,a));return v},h=function(e,t,n){t=t||"soft";var o={},s="cubic"===t?3:2,_="soft"===t,m=[],u,a,g,c,d,f,i,h,l,p,y;if(_&&n&&(e=[n].concat(e)),null==e||e.length<s+1)throw"invalid Bezier data";for(l in e[0])m.push(l);for(f=m.length;-1<--f;){for(l=m[f],o[l]=d=[],p=0,h=e.length,i=0;i<h;i++)u=null==n?e[i][l]:"string"==typeof(y=e[i][l])&&"="===y.charAt(1)?n[l]+ +(y.charAt(0)+y.substr(2)):+y,_&&1<i&&i<h-1&&(d[p++]=(u+d[p-2])/2),d[p++]=u;for(h=p-s+1,p=0,i=0;i<h;i+=s)u=d[i],a=d[i+1],g=d[i+2],c=2==s?0:d[i+3],d[p++]=y=3==s?new r(u,a,g,c):new r(u,(2*a+u)/3,(2*a+g)/3,g);d.length=p}return o},i=function(e,t,a){for(var n=e.length,r,o,l,s,d,_,c,p,i,m,u;-1<--n;)for(m=e[n],l=m.a,s=m.d-l,d=m.c-l,_=m.b-l,r=o=0,p=1;p<=a;p++)c=1/a*p,i=1-c,r=o-(o=(c*c*s+3*i*(c*d+i*_))*c),u=n*a+p-1,t[u]=(t[u]||0)+r*r},y=function(e,t){t=t>>0||6;var n=[],a=[],r=0,s=0,d=t-1,_=[],c=[],m,p,u,l;for(m in e)i(e[m],n,t);for(u=n.length,p=0;p<u;p++)r+=o(n[p]),l=p%t,c[l]=r,l===d&&(s+=r,l=p/t>>0,_[l]=c,a[l]=s,r=0,c=[]);return{length:s,lengths:a,segments:_}},b=u._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.8",API:2,global:!0,init:function(e,t,a){this._target=e,t instanceof Array&&(t={values:t}),this._func={},this._mod={},this._props=[],this._timeRes=null==t.timeResolution?6:parseInt(t.timeResolution,10);var n=t.values||[],r={},o=n[0],s=t.autoRotate||a.vars.orientToBezier,l,d,_,i,p;for(l in this._autoRotate=s?s instanceof Array?s:[["x","y","rotation",!0===s?0:+s||0]]:null,o)this._props.push(l);for(_=this._props.length;-1<--_;)l=this._props[_],this._overwriteProps.push(l),d=this._func[l]="function"==typeof e[l],r[l]=d?e[l.indexOf("set")||"function"!=typeof e["get"+l.substr(3)]?l:"get"+l.substr(3)]():parseFloat(e[l]),p||r[l]===n[0][l]||(p=r);if(this._beziers="cubic"!==t.type&&"quadratic"!==t.type&&"soft"!==t.type?f(n,isNaN(t.curviness)?1:t.curviness,!1,"thruBasic"===t.type,t.correlate,p):h(n,t.type,r),this._segCount=this._beziers[l].length,this._timeRes){var c=y(this._beziers,this._timeRes);this._length=c.length,this._lengths=c.lengths,this._segments=c.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(s=this._autoRotate)for(this._initialRotations=[],s[0]instanceof Array||(this._autoRotate=s=[s]),_=s.length;-1<--_;){for(i=0;3>i;i++)l=s[_][i],this._func[l]="function"==typeof e[l]&&e[l.indexOf("set")||"function"!=typeof e["get"+l.substr(3)]?l:"get"+l.substr(3)];l=s[_][2],this._initialRotations[_]=(this._func[l]?this._func[l].call(this._target):this._target[l])||0,this._overwriteProps.push(l)}return this._startRatio=a.vars.runBackwards?1:0,!0},set:function(e){var a=this._segCount,n=this._func,r=this._target,o=e!==this._startRatio,d,_,c,i,p,m,t,u,g,f;if(!this._timeRes)d=0>e?0:1<=e?a-1:a*e>>0,m=(e-d*(1/a))*a;else{if(g=this._lengths,f=this._curSeg,e*=this._length,c=this._li,e>this._l2&&c<a-1){for(u=a-1;c<u&&(this._l2=g[++c])<=e;);this._l1=g[c-1],this._li=c,this._curSeg=f=this._segments[c],this._s2=f[this._s1=this._si=0]}else if(e<this._l1&&0<c){for(;0<c&&(this._l1=g[--c])>=e;);0===c&&e<this._l1?this._l1=0:c++,this._l2=g[c],this._li=c,this._curSeg=f=this._segments[c],this._s1=f[(this._si=f.length-1)-1]||0,this._s2=f[this._si]}if(d=c,e-=this._l1,c=this._si,e>this._s2&&c<f.length-1){for(u=f.length-1;c<u&&(this._s2=f[++c])<=e;);this._s1=f[c-1],this._si=c}else if(e<this._s1&&0<c){for(;0<c&&(this._s1=f[--c])>=e;);0===c&&e<this._s1?this._s1=0:c++,this._s2=f[c],this._si=c}m=(c+(e-this._s1)/(this._s2-this._s1))*this._prec||0}for(_=1-m,c=this._props.length;-1<--c;)i=this._props[c],p=this._beziers[i][d],t=(m*m*p.da+3*_*(m*p.ca+_*p.ba))*m+p.a,this._mod[i]&&(t=this._mod[i](t,r)),n[i]?r[i](t):r[i]=t;if(this._autoRotate){var h=this._autoRotate,y,v,b,T,x,w,P;for(c=h.length;-1<--c;)i=h[c][2],w=h[c][3]||0,P=!0===h[c][4]?1:180/l,p=this._beziers[h[c][0]],y=this._beziers[h[c][1]],p&&y&&(p=p[d],y=y[d],v=p.a+(p.b-p.a)*m,T=p.b+(p.c-p.b)*m,v+=(T-v)*m,T+=(p.c+(p.d-p.c)*m-T)*m,b=y.a+(y.b-y.a)*m,x=y.b+(y.c-y.b)*m,b+=(x-b)*m,x+=(y.c+(y.d-y.c)*m-x)*m,t=o?s(x-b,T-v)*P+w:this._initialRotations[c],this._mod[i]&&(t=this._mod[i](t,r)),n[i]?r[i](t):r[i]=t)}}}),v=b.prototype;b.bezierThrough=f,b.cubicToQuadratic=c,b._autoCSS=!0,b.quadraticToCubic=function(e,t,a){return new r(e,(2*t+e)/3,(2*t+a)/3,a)},b._cssRegister=function(){var e=a.CSSPlugin;if(e){var t=e._internals,n=t._parseToProxy,r=t._setPluginRatio,o=t.CSSPropTween;t._registerComplexSpecialProp("bezier",{parser:function(a,t,s,d,_,c){t instanceof Array&&(t={values:t}),c=new b;var m=t.values,u=m.length-1,l=[],g={},f,i,p;if(0>u)return _;for(f=0;f<=u;f++)p=n(a,m[f],d,_,c,u!==f),l[f]=p.end;for(i in t)g[i]=t[i];return g.values=l,_=new o(a,"bezier",0,0,p.pt,2),_.data=p,_.plugin=c,_.setRatio=r,0===g.autoRotate&&(g.autoRotate=!0),g.autoRotate&&!(g.autoRotate instanceof Array)&&(f=!0===g.autoRotate?0:+g.autoRotate,g.autoRotate=null==p.end.left?null!=p.end.x&&[["x","y","rotation",f,!1]]:[["left","top","rotation",f,!1]]),g.autoRotate&&(!d._transform&&d._enableTransforms(!1),p.autoRotate=d._target._gsTransform,p.proxy.rotation=p.autoRotate.rotation||0,d._overwriteProps.push("rotation")),c._onInitTween(p.proxy,g,d._tween),_}})}},v._mod=function(e){for(var t=this._overwriteProps,a=t.length,i;-1<--a;)i=e[t[a]],i&&"function"==typeof i&&(this._mod[t[a]]=i)},v._kill=function(e){var t=this._props,a,n;for(a in this._beziers)if(a in e)for(delete this._beziers[a],delete this._func[a],n=t.length;-1<--n;)t[n]===a&&t.splice(n,1);if(t=this._autoRotate,t)for(n=t.length;-1<--n;)e[t[n][2]]&&t.splice(n,1);return this._super._kill.call(this,e)}}(),u._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(e,g){var f=function(){e.call(this,"css"),this._overwriteProps.length=0,this.setRatio=f.prototype.setRatio},c=u._gsDefine.globals,m={},h=f.prototype=new e("css"),y,b,T,x;h.constructor=f,f.version="1.20.3",f.API=2,f.defaultTransformPerspective=0,f.defaultSkewType="compensated",f.defaultSmoothOrigin=!0,h="px",f.suffixMap={top:h,right:h,bottom:h,left:h,width:h,height:h,fontSize:h,padding:h,margin:h,perspective:h,lineHeight:""};var w=/(?:\-|\.|\b)(\d|\.|e\-)+/g,P=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,S=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,C=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,k=/(?:\d|\-|\+|=|#|\.)*/g,E=/opacity *= *([^)]*)/i,R=/opacity:([^;]*)/i,A=/alpha\(opacity *=.+?\)/i,v=/^(rgb|hsl)/,O=/([A-Z])/g,D=/-([a-z])/gi,L=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,B=function(e,t){return t.toUpperCase()},z=/(?:Left|Right|Width)/i,N=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,I=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,M=/,(?=[^\)]*(?:\(|$))/gi,j=/[\s,\(]/i,F=l/180,U=180/l,X={},Y={style:{}},V=u.document||{createElement:function(){return Y}},H=function(e,t){return V.createElementNS?V.createElementNS(t||"http://www.w3.org/1999/xhtml",e):V.createElement(e)},G=H("div"),W=H("img"),q=f._internals={_specialProps:m},Q=(u.navigator||{}).userAgent||"",Z=function(){var e=Q.indexOf("Android"),t=H("a");return(xe=-1!==Q.indexOf("Safari")&&-1===Q.indexOf("Chrome")&&(-1===e||3<parseFloat(Q.substr(e+8,2))),Pe=xe&&6>parseFloat(Q.substr(Q.indexOf("Version/")+8,2)),we=-1!==Q.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Q)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Q))&&(Se=parseFloat(RegExp.$1)),!!t)&&(t.style.cssText="top:1px;opacity:.55;",/^0.55/.test(t.style.opacity))}(),K=function(e){return E.test("string"==typeof e?e:(e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?parseFloat(RegExp.$1)/100:1},$=function(e){u.console&&console.log(e)},J="",ee="",te=function(t,n){n=n||G;var e=n.style,r,a;if(void 0!==e[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),r=["O","Moz","ms","Ms","Webkit"],a=5;-1<--a&&void 0===e[r[a]+t];);return 0<=a?(ee=3===a?"ms":r[a],J="-"+ee.toLowerCase()+"-",ee+t):null},ae=V.defaultView?V.defaultView.getComputedStyle:function(){},ie=f.getStyle=function(e,t,a,i,n){var r;return Z||"opacity"!==t?(!i&&e.style[t]?r=e.style[t]:(a=a||ae(e))?r=a[t]||a.getPropertyValue(t)||a.getPropertyValue(t.replace(O,"-$1").toLowerCase()):e.currentStyle&&(r=e.currentStyle[t]),null==n||r&&"none"!==r&&"auto"!==r&&"auto auto"!==r?r:n):K(e)},ne=q.convertToPixels=function(e,t,a,i,n){if("px"===i||!i&&"lineHeight"!==t)return a;if("auto"===i||!a)return 0;var r=z.test(t),o=e,s=G.style,l=0>a,d=1===a,_,p,c;if(l&&(a=-a),d&&(a*=100),"lineHeight"===t&&!i)p=ae(e).lineHeight,e.style.lineHeight=a,_=parseFloat(ae(e).lineHeight),e.style.lineHeight=p;else if("%"===i&&-1!==t.indexOf("border"))_=a/100*(r?e.clientWidth:e.clientHeight);else{if(s.cssText="border:0 solid red;position:"+ie(e,"position")+";line-height:0;","%"===i||!o.appendChild||"v"===i.charAt(0)||"rem"===i){if(o=e.parentNode||V.body,-1!==ie(o,"display").indexOf("flex")&&(s.position="absolute"),p=o._gsCache,c=g.ticker.frame,p&&r&&p.time===c)return p.width*a/100;s[r?"width":"height"]=a+i}else s[r?"borderLeftWidth":"borderTopWidth"]=a+i;o.appendChild(G),_=parseFloat(G[r?"offsetWidth":"offsetHeight"]),o.removeChild(G),r&&"%"===i&&!1!==f.cacheWidths&&(p=o._gsCache=o._gsCache||{},p.time=c,p.width=100*(_/a)),0!==_||n||(_=ne(e,t,a,i,!0))}return d&&(_/=100),l?-_:_},re=q.calculateOffset=function(e,t,a){if("absolute"!==ie(e,"position",a))return 0;var i="left"===t?"Left":"Top",n=ie(e,"margin"+i,a);return e["offset"+i]-(ne(e,t,parseFloat(n),n.replace(k,""))||0)},oe=function(e,t){var a={},n,i,r;if(t=t||ae(e,null)){if(n=t.length)for(;-1<--n;)r=t[n],(-1===r.indexOf("-transform")||Ue===r)&&(a[r.replace(D,B)]=t.getPropertyValue(r));else for(n in t)(-1===n.indexOf("Transform")||Fe===n)&&(a[n]=t[n]);}else if(t=e.currentStyle||e.style)for(n in t)"string"==typeof n&&void 0===a[n]&&(a[n.replace(D,B)]=t[n]);return Z||(a.opacity=K(e)),i=tt(e,t,!1),a.rotation=i.rotation,a.skewX=i.skewX,a.scaleX=i.scaleX,a.scaleY=i.scaleY,a.x=i.x,a.y=i.y,Ye&&(a.z=i.z,a.rotationX=i.rotationX,a.rotationY=i.rotationY,a.scaleZ=i.scaleZ),a.filters&&delete a.filters,a},se=function(e,t,a,i,n){var r={},o=e.style,s,l,d;for(l in a)"cssText"!==l&&"length"!==l&&isNaN(l)&&(t[l]!==(s=a[l])||n&&n[l])&&-1===l.indexOf("Origin")&&("number"==typeof s||"string"==typeof s)&&(r[l]="auto"===s&&("left"===l||"top"===l)?re(e,l):(""===s||"auto"===s||"none"===s)&&"string"==typeof t[l]&&""!==t[l].replace(C,"")?0:s,void 0!==o[l]&&(d=new Oe(o,l,o[l],d)));if(i)for(l in i)"className"!==l&&(r[l]=i[l]);return{difs:r,firstMPT:d}},le={width:["Left","Right"],height:["Top","Bottom"]},de=["marginLeft","marginRight","marginTop","marginBottom"],_e=function(e,t,n){if("svg"===(e.nodeName+"").toLowerCase())return(n||ae(e))[t]||0;if(e.getCTM&&$e(e))return e.getBBox()[t]||0;var r=parseFloat("width"===t?e.offsetWidth:e.offsetHeight),o=le[t],a=o.length;for(n=n||ae(e,null);-1<--a;)r-=parseFloat(ie(e,"padding"+o[a],n,!0))||0,r-=parseFloat(ie(e,"border"+o[a]+"Width",n,!0))||0;return r},pe=function(e,t){if("contain"===e||"auto"===e||"auto auto"===e)return e+" ";(null==e||""===e)&&(e="0 0");var n=e.split(" "),a=-1===e.indexOf("left")?-1===e.indexOf("right")?n[0]:"100%":"0%",r=-1===e.indexOf("top")?-1===e.indexOf("bottom")?n[1]:"100%":"0%",o;if(3<n.length&&!t){for(n=e.split(", ").join(",").split(","),e=[],o=0;o<n.length;o++)e.push(pe(n[o]));return e.join(",")}return null==r?r="center"===a?"50%":"0":"center"===r&&(r="50%"),("center"===a||isNaN(parseFloat(a))&&-1===(a+"").indexOf("="))&&(a="50%"),e=a+" "+r+(2<n.length?" "+n[2]:""),t&&(t.oxp=-1!==a.indexOf("%"),t.oyp=-1!==r.indexOf("%"),t.oxr="="===a.charAt(1),t.oyr="="===r.charAt(1),t.ox=parseFloat(a.replace(C,"")),t.oy=parseFloat(r.replace(C,"")),t.v=e),t||e},ce=function(t,a){return"function"==typeof t&&(t=t(ke,Ce)),"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(a)||0},me=function(e,t){return"function"==typeof e&&(e=e(ke,Ce)),null==e?t:"string"==typeof e&&"="===e.charAt(1)?parseInt(e.charAt(0)+"1",10)*parseFloat(e.substr(2))+t:parseFloat(e)||0},ue=function(e,t,a,i){var n=1e-6,r,o,s,l,d;return"function"==typeof e&&(e=e(ke,Ce)),null==e?l=t:"number"==typeof e?l=e:(r=360,o=e.split("_"),d="="===e.charAt(1),s=(d?parseInt(e.charAt(0)+"1",10)*parseFloat(o[0].substr(2)):parseFloat(o[0]))*(-1===e.indexOf("rad")?1:U)-(d?0:t),o.length&&(i&&(i[a]=t+s),-1!==e.indexOf("short")&&(s%=r,s!==s%(r/2)&&(s=0>s?s+r:s-r)),-1!==e.indexOf("_cw")&&0>s?s=(s+9999999999*r)%r-(0|s/r)*r:-1!==e.indexOf("ccw")&&0<s&&(s=(s-9999999999*r)%r-(0|s/r)*r)),l=t+s),l<n&&l>-n&&(l=0),l},ge={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},fe=function(e,t,a){return e=0>e?e+1:1<e?e-1:e,0|255*(1>6*e?t+6*((a-t)*e):0.5>e?a:2>3*e?t+6*((a-t)*(2/3-e)):t)+0.5},he=f.parseColor=function(e,i){var n,a,r,o,_,c,s,l,m,u,d;if(!e)n=ge.black;else if("number"==typeof e)n=[e>>16,255&e>>8,255&e];else{if(","===e.charAt(e.length-1)&&(e=e.substr(0,e.length-1)),ge[e])n=ge[e];else if("#"===e.charAt(0))4===e.length&&(a=e.charAt(1),r=e.charAt(2),o=e.charAt(3),e="#"+a+a+r+r+o+o),e=parseInt(e.substr(1),16),n=[e>>16,255&e>>8,255&e];else if("hsl"!==e.substr(0,3))n=e.match(w)||ge.transparent;else if(n=d=e.match(w),!i)_=+n[0]%360/360,c=+n[1]/100,s=+n[2]/100,r=0.5>=s?s*(c+1):s+c-s*c,a=2*s-r,3<n.length&&(n[3]=+n[3]),n[0]=fe(_+1/3,a,r),n[1]=fe(_,a,r),n[2]=fe(_-1/3,a,r);else if(-1!==e.indexOf("="))return e.match(P);n[0]=+n[0],n[1]=+n[1],n[2]=+n[2],3<n.length&&(n[3]=+n[3])}return i&&!d&&(a=n[0]/255,r=n[1]/255,o=n[2]/255,l=t(a,r,o),m=p(a,r,o),s=(l+m)/2,l===m?_=c=0:(u=l-m,c=0.5<s?u/(2-l-m):u/(l+m),_=l===a?(r-o)/u+(r<o?6:0):l===r?(o-a)/u+2:(a-r)/u+4,_*=60),n[0]=0|_+0.5,n[1]=0|100*c+0.5,n[2]=0|100*s+0.5),n},ye=function(e,t){var a=e.match(ve)||[],n=0,r="",o,i,s;if(!a.length)return e;for(o=0;o<a.length;o++)i=a[o],s=e.substr(n,e.indexOf(i,n)-n),n+=s.length+i.length,i=he(i,t),3===i.length&&i.push(1),r+=s+(t?"hsla("+i[0]+","+i[1]+"%,"+i[2]+"%,"+i[3]:"rgba("+i.join(","))+")";return r+e.substr(n)},ve="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b",be,Te,xe,we,Pe,Se,Ce,ke;for(h in ge)ve+="|"+h+"\\b";ve=new RegExp(ve+")","gi"),f.colorStringFilter=function(e){var t=e[0]+" "+e[1],a;ve.test(t)&&(a=-1!==t.indexOf("hsl(")||-1!==t.indexOf("hsla("),e[0]=ye(e[0],a),e[1]=ye(e[1],a)),ve.lastIndex=0},g.defaultStringFilter||(g.defaultStringFilter=f.colorStringFilter);var Ee=function(e,t,a,n){if(null==e)return function(e){return e};var r=t?(e.match(ve)||[""])[0]:"",o=e.split(r).join("").match(S)||[],s=e.substr(0,e.indexOf(o[0])),l=")"===e.charAt(e.length-1)?")":"",d=-1===e.indexOf(" ")?",":" ",_=o.length,p=0<_?o[0].replace(w,""):"",c;return _?t?(c=function(e){var t,m,u,i;if("number"==typeof e)e+=p;else if(n&&M.test(e)){for(i=e.replace(M,"|").split("|"),u=0;u<i.length;u++)i[u]=c(i[u]);return i.join(",")}if(t=(e.match(ve)||[r])[0],m=e.split(t).join("").match(S)||[],u=m.length,_>u--)for(;++u<_;)m[u]=a?m[0|(u-1)/2]:o[u];return s+m.join(d)+d+t+l+(-1===e.indexOf("inset")?"":" inset")},c):(c=function(e){var t,r,m;if("number"==typeof e)e+=p;else if(n&&M.test(e)){for(r=e.replace(M,"|").split("|"),m=0;m<r.length;m++)r[m]=c(r[m]);return r.join(",")}if(t=e.match(S)||[],m=t.length,_>m--)for(;++m<_;)t[m]=a?t[0|(m-1)/2]:o[m];return s+t.join(d)+l},c):function(e){return e}},Re=function(e){return e=e.split(","),function(n,t,r,o,s,l,d){var _=(t+"").split(" "),a;for(d={},a=0;4>a;a++)d[e[a]]=_[a]=_[a]||_[(a-1)/2>>0];return o.parse(n,d,s,l)}},Ae=q._setPluginRatio=function(e){this.plugin.setRatio(e);for(var t=this.data,a=t.proxy,n=t.firstMPT,r=1e-6,o,s,l,i,d;n;)o=a[n.v],n.r?o=_(o):o<r&&o>-r&&(o=0),n.t[n.p]=o,n=n._next;if(t.autoRotate&&(t.autoRotate.rotation=t.mod?t.mod(a.rotation,this.t):a.rotation),1===e||0===e)for(n=t.firstMPT,d=1===e?"e":"b";n;){if(s=n.t,!s.type)s[d]=s.s+s.xs0;else if(1===s.type){for(i=s.xs0+s.s+s.xs1,l=1;l<s.l;l++)i+=s["xn"+l]+s["xs"+(l+1)];s[d]=i}n=n._next}},Oe=function(e,t,a,i,n){this.t=e,this.p=t,this.v=a,this.r=n,i&&(i._prev=this,this._next=i)},De=q._parseToProxy=function(e,t,a,n,r,o){var s=n,l={},d={},_=a._transform,c=X,m,i,p,u,g;for(a._transform=null,X=t,n=g=a.parse(e,t,n,r),X=c,o&&(a._transform=_,s&&(s._prev=null,s._prev&&(s._prev._next=null)));n&&n!==s;){if(1>=n.type&&(i=n.p,d[i]=n.s+n.c,l[i]=n.s,o||(u=new Oe(n,"s",i,u,n.r),n.c=0),1===n.type))for(m=n.l;0<--m;)p="xn"+m,i=n.p+"_"+p,d[i]=n.data[p],l[i]=n[p],o||(u=new Oe(n,p,i,u,n.rxp[p]));n=n._next}return{proxy:l,end:d,firstMPT:u,pt:g}},Le=q.CSSPropTween=function(a,t,i,o,s,l,d,n,r,_,p){this.t=a,this.p=t,this.s=i,this.c=o,this.n=d||t,a instanceof Le||x.push(this.n),this.r=n,this.type=l||0,r&&(this.pr=r,y=!0),this.b=void 0===_?i:_,this.e=void 0===p?i+o:p,s&&(this._next=s,s._prev=this)},Be=function(e,t,a,i,n,r){var o=new Le(e,t,a,i-a,n,-1,r);return o.b=a,o.e=o.xs0=i,o},ze=f.parseComplex=function(a,t,n,r,o,s,d,_,p,c){n=n||s||"","function"==typeof r&&(r=r(ke,Ce)),d=new Le(a,t,0,0,d,c?2:1,null,!1,_,n,r),r+="",o&&ve.test(r+n)&&(r=[n,r],f.colorStringFilter(r),n=r[0],r=r[1]);var m=n.split(", ").join(",").split(" "),u=r.split(", ").join(",").split(" "),g=m.length,l=!1!==be,h,i,y,v,b,T,x,S,C,k,E,R,A;for((-1!==r.indexOf(",")||-1!==n.indexOf(","))&&(-1!==(r+n).indexOf("rgb")||-1!==(r+n).indexOf("hsl")?(m=m.join(" ").replace(M,", ").split(" "),u=u.join(" ").replace(M,", ").split(" ")):(m=m.join(" ").split(",").join(", ").split(" "),u=u.join(" ").split(",").join(", ").split(" ")),g=m.length),g!==u.length&&(m=(s||"").split(" "),g=m.length),d.plugin=p,d.setRatio=c,ve.lastIndex=0,h=0;h<g;h++)if(v=m[h],b=u[h],S=parseFloat(v),S||0===S)d.appendXtra("",S,ce(b,S),b.replace(P,""),l&&-1!==b.indexOf("px"),!0);else if(o&&ve.test(v))R=b.indexOf(")")+1,R=")"+(R?b.substr(R):""),A=-1!==b.indexOf("hsl")&&Z,k=b,v=he(v,A),b=he(b,A),C=6<v.length+b.length,C&&!Z&&0===b[3]?(d["xs"+d.l]+=d.l?" transparent":"transparent",d.e=d.e.split(u[h]).join("transparent")):(!Z&&(C=!1),A?d.appendXtra(k.substr(0,k.indexOf("hsl"))+(C?"hsla(":"hsl("),v[0],ce(b[0],v[0]),",",!1,!0).appendXtra("",v[1],ce(b[1],v[1]),"%,",!1).appendXtra("",v[2],ce(b[2],v[2]),C?"%,":"%"+R,!1):d.appendXtra(k.substr(0,k.indexOf("rgb"))+(C?"rgba(":"rgb("),v[0],b[0]-v[0],",",!0,!0).appendXtra("",v[1],b[1]-v[1],",",!0).appendXtra("",v[2],b[2]-v[2],C?",":R,!0),C&&(v=4>v.length?1:v[3],d.appendXtra("",v,(4>b.length?1:b[3])-v,R,!1))),ve.lastIndex=0;else if(T=v.match(w),!T)d["xs"+d.l]+=d.l||d["xs"+d.l]?" "+b:b;else{if(x=b.match(P),!x||x.length!==T.length)return d;for(y=0,i=0;i<T.length;i++)E=T[i],k=v.indexOf(E,y),d.appendXtra(v.substr(y,k-y),+E,ce(x[i],E),"",l&&"px"===v.substr(k+E.length,2),0===i),y=k+E.length;d["xs"+d.l]+=v.substr(y)}if(-1!==r.indexOf("=")&&d.data){for(R=d.xs0+d.data.s,h=1;h<d.l;h++)R+=d["xs"+h]+d.data["xn"+h];d.e=R+d["xs"+h]}return d.l||(d.type=-1,d.xs0=d.e),d.xfirst||d},Ne=9;for(h=Le.prototype,h.l=h.pr=0;0<--Ne;)h["xn"+Ne]=0,h["xs"+Ne]="";h.xs0="",h._next=h._prev=h.xfirst=h.data=h.plugin=h.setRatio=h.rxp=null,h.appendXtra=function(e,t,a,i,n,r){var o=this,s=o.l;return(o["xs"+s]+=r&&(s||o["xs"+s])?" "+e:e||"",!a&&0!==s&&!o.plugin)?(o["xs"+s]+=t+(i||""),o):(o.l++,o.type=o.setRatio?2:1,o["xs"+o.l]=i||"",0<s)?(o.data["xn"+s]=t+a,o.rxp["xn"+s]=n,o["xn"+s]=t,o.plugin||(o.xfirst=new Le(o,"xn"+s,t,a,o.xfirst||o,0,o.n,n,o.pr),o.xfirst.xs0=0),o):(o.data={s:t+a},o.rxp={},o.s=t,o.c=a,o.r=n,o)};var Ie=function(e,t){t=t||{},this.p=t.prefix?te(e)||e:e,m[e]=m[this.p]=this,this.format=t.formatter||Ee(t.defaultValue,t.color,t.collapsible,t.multi),t.parser&&(this.parse=t.parser),this.clrs=t.color,this.multi=t.multi,this.keyword=t.keyword,this.dflt=t.defaultValue,this.pr=t.priority||0},i=q._registerComplexSpecialProp=function(e,t,n){"object"!=typeof t&&(t={parser:n});var r=e.split(","),a=t.defaultValue,o,i;for(n=n||[a],o=0;o<r.length;o++)t.prefix=0===o&&t.prefix,t.defaultValue=n[o]||a,i=new Ie(r[o],t)},Me=q._registerPluginProp=function(e){if(!m[e]){var a=e.charAt(0).toUpperCase()+e.substr(1)+"Plugin";i(e,{parser:function(i,t,e,n,r,o,s){var l=c.com.greensock.plugins[a];return l?(l._cssRegister(),m[e].parse(i,t,e,n,r,o,s)):($("Error: "+a+" js file not loaded."),r)}})}};h=Ie.prototype,h.parseComplex=function(a,t,n,e,r,o){var s=this.keyword,d,i,_,p,l,c;if(this.multi&&(M.test(n)||M.test(t)?(i=t.replace(M,"|").split("|"),_=n.replace(M,"|").split("|")):s&&(i=[t],_=[n])),_){for(p=_.length>i.length?_.length:i.length,d=0;d<p;d++)t=i[d]=i[d]||this.dflt,n=_[d]=_[d]||this.dflt,s&&(l=t.indexOf(s),c=n.indexOf(s),l!==c&&(-1===c?i[d]=i[d].split(s).join(""):-1===l&&(i[d]+=" "+s)));t=i.join(", "),n=_.join(", ")}return ze(a,this.p,t,n,this.clrs,this.dflt,e,this.pr,r,o)},h.parse=function(a,t,e,i,n,r){return this.parseComplex(a.style,this.format(ie(a,this.p,T,!1,this.dflt)),this.format(t),n,r)},f.registerSpecialProp=function(e,a,n){i(e,{parser:function(i,t,e,r,o,s){var l=new Le(i,e,0,0,o,2,e,!1,n);return l.plugin=s,l.setRatio=a(i,t,r._tween,e),l},priority:n})},f.useSVGTransformAttr=!0;var je=["scaleX","scaleY","scaleZ","x","y","z","skewX","skewY","rotation","rotationX","rotationY","perspective","xPercent","yPercent"],Fe=te("transform"),Ue=J+"transform",Xe=te("transformOrigin"),Ye=null!==te("perspective"),Ve=q.Transform=function(){this.perspective=parseFloat(f.defaultTransformPerspective)||0,this.force3D=!1!==f.defaultForce3D&&Ye&&(f.defaultForce3D||"auto")},He=u.SVGElement,Ge=function(e,t,a){var i=V.createElementNS("http://www.w3.org/2000/svg",e),n=/([a-z])([A-Z])/g,r;for(r in a)i.setAttributeNS(null,r.replace(n,"$1-$2").toLowerCase(),a[r]);return t.appendChild(i),i},We=V.documentElement||{},qe=function(){var e=Se||/Android/i.test(Q)&&!u.chrome,t,a,i;return V.createElementNS&&!e&&(t=Ge("svg",We),a=Ge("rect",t,{width:100,height:50,x:100}),i=a.getBoundingClientRect().width,a.style[Xe]="50% 50%",a.style[Fe]="scaleX(0.5)",e=i===a.getBoundingClientRect().width&&!(we&&Ye),We.removeChild(t)),e}(),Qe=function(t,e,i,n,r,o){var s=t._gsTransform,l=et(t,!0),_,p,m,u,g,h,a,y,v,d,T,x,w,P;s&&(w=s.xOrigin,P=s.yOrigin),(!n||2>(_=n.split(" ")).length)&&(a=t.getBBox(),0===a.x&&0===a.y&&0===a.width+a.height&&(a={x:parseFloat(t.hasAttribute("x")?t.getAttribute("x"):t.hasAttribute("cx")?t.getAttribute("cx"):0)||0,y:parseFloat(t.hasAttribute("y")?t.getAttribute("y"):t.hasAttribute("cy")?t.getAttribute("cy"):0)||0,width:0,height:0}),e=pe(e).split(" "),_=[(-1===e[0].indexOf("%")?parseFloat(e[0]):parseFloat(e[0])/100*a.width)+a.x,(-1===e[1].indexOf("%")?parseFloat(e[1]):parseFloat(e[1])/100*a.height)+a.y]),i.xOrigin=u=parseFloat(_[0]),i.yOrigin=g=parseFloat(_[1]),n&&l!==Je&&(h=l[0],a=l[1],y=l[2],v=l[3],d=l[4],T=l[5],x=h*v-a*y,x&&(p=u*(v/x)+g*(-y/x)+(y*T-v*d)/x,m=u*(-a/x)+g*(h/x)-(h*T-a*d)/x,u=i.xOrigin=_[0]=p,g=i.yOrigin=_[1]=m)),s&&(o&&(i.xOffset=s.xOffset,i.yOffset=s.yOffset,s=i),r||!1!==r&&!1!==f.defaultSmoothOrigin?(p=u-w,m=g-P,s.xOffset+=p*l[0]+m*l[2]-p,s.yOffset+=p*l[1]+m*l[3]-m):s.xOffset=s.yOffset=0),o||t.setAttribute("data-svg-origin",_.join(" "))},Ze=function(e){var t=H("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),a=this.parentNode,i=this.nextSibling,n=this.style.cssText,r;if(We.appendChild(t),t.appendChild(this),this.style.display="block",e)try{r=this.getBBox(),this._originalGetBBox=this.getBBox,this.getBBox=Ze}catch(t){}else this._originalGetBBox&&(r=this._originalGetBBox());return i?a.insertBefore(this,i):a.appendChild(this),We.removeChild(t),this.style.cssText=n,r},Ke=function(t){try{return t.getBBox()}catch(e){return Ze.call(t,!0)}},$e=function(t){return!!(He&&t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Ke(t))},Je=[1,0,0,1,0,0],et=function(t,e){var a=t._gsTransform||new Ve,i=1e5,r=t.style,o,l,d,_,n,p;if(Fe?l=ie(t,Ue,null,!0):t.currentStyle&&(l=t.currentStyle.filter.match(N),l=l&&4===l.length?[l[0].substr(4),+l[2].substr(4),+l[1].substr(4),l[3].substr(4),a.x||0,a.y||0].join(","):""),o=!l||"none"===l||"matrix(1, 0, 0, 1, 0, 0)"===l,Fe&&((p=!ae(t)||"none"===ae(t).display)||!t.parentNode)&&(p&&(_=r.display,r.display="block"),!t.parentNode&&(n=1,We.appendChild(t)),l=ie(t,Ue,null,!0),o=!l||"none"===l||"matrix(1, 0, 0, 1, 0, 0)"===l,_?r.display=_:p&&ot(r,"display"),n&&We.removeChild(t)),(a.svg||t.getCTM&&$e(t))&&(o&&-1!==(r[Fe]+"").indexOf("matrix")&&(l=r[Fe],o=0),d=t.getAttribute("transform"),o&&d&&(-1===d.indexOf("matrix")?-1!==d.indexOf("translate")&&(l="matrix(1,0,0,1,"+d.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",o=0):(l=d,o=0))),o)return Je;for(d=(l||"").match(w)||[],Ne=d.length;-1<--Ne;)_=+d[Ne],d[Ne]=(n=_-(_|=0))?(0|n*i+(0>n?-0.5:0.5))/i+_:_;return e&&6<d.length?[d[0],d[1],d[4],d[5],d[12],d[13]]:d},tt=q.getTransform=function(e,t,l,_){if(e._gsTransform&&l&&!_)return e._gsTransform;var p=l?e._gsTransform||new Ve:new Ve,u=0>p.scaleX,h=2e-5,y=1e5,v=Ye?parseFloat(ie(e,Xe,t,!1,"0 0 0").split(" ")[2])||p.zOrigin||0:0,T=parseFloat(f.defaultTransformPerspective)||0,x,m,i,w,P,S;if(p.svg=!!(e.getCTM&&$e(e)),p.svg&&(Qe(e,ie(e,Xe,t,!1,"50% 50%")+"",p,e.getAttribute("data-svg-origin")),nt=f.useSVGTransformAttr||qe),x=et(e),x!==Je){if(16===x.length){var C=x[0],E=x[1],R=x[2],A=x[3],O=x[4],D=x[5],L=x[6],B=x[7],z=x[8],N=x[9],I=x[10],M=x[12],j=x[13],F=x[14],X=x[11],Y=s(L,I),V,H,G,W,q;p.zOrigin&&(F=-p.zOrigin,M=z*F-x[12],j=N*F-x[13],F=I*F+p.zOrigin-x[14]),p.rotationX=Y*U,Y&&(W=r(-Y),q=n(-Y),V=O*W+z*q,H=D*W+N*q,G=L*W+I*q,z=O*-q+z*W,N=D*-q+N*W,I=L*-q+I*W,X=B*-q+X*W,O=V,D=H,L=G),Y=s(-R,I),p.rotationY=Y*U,Y&&(W=r(-Y),q=n(-Y),V=C*W-z*q,H=E*W-N*q,G=R*W-I*q,N=E*q+N*W,I=R*q+I*W,X=A*q+X*W,C=V,E=H,R=G),Y=s(E,C),p.rotation=Y*U,Y&&(W=r(Y),q=n(Y),V=C*W+E*q,H=O*W+D*q,G=z*W+N*q,E=E*W-C*q,D=D*W-O*q,N=N*W-z*q,C=V,O=H,z=G),p.rotationX&&359.9<d(p.rotationX)+d(p.rotation)&&(p.rotationX=p.rotation=0,p.rotationY=180-p.rotationY),Y=s(O,D),p.scaleX=(0|o(C*C+E*E+R*R)*y+0.5)/y,p.scaleY=(0|o(D*D+L*L)*y+0.5)/y,p.scaleZ=(0|o(z*z+N*N+I*I)*y+0.5)/y,C/=p.scaleX,O/=p.scaleY,E/=p.scaleX,D/=p.scaleY,d(Y)>h?(p.skewX=Y*U,O=0,"simple"!==p.skewType&&(p.scaleY*=1/r(Y))):p.skewX=0,p.perspective=X?1/(0>X?-X:X):0,p.x=M,p.y=j,p.z=F,p.svg&&(p.x-=p.xOrigin-(p.xOrigin*C-p.yOrigin*O),p.y-=p.yOrigin-(p.yOrigin*E-p.xOrigin*D))}else if(!Ye||_||!x.length||p.x!==x[4]||p.y!==x[5]||!p.rotationX&&!p.rotationY){var Q=6<=x.length,k=Q?x[0]:1,a=x[1]||0,b=x[2]||0,c=Q?x[3]:1;p.x=x[4]||0,p.y=x[5]||0,i=o(k*k+a*a),w=o(c*c+b*b),P=k||a?s(a,k)*U:p.rotation||0,S=b||c?s(b,c)*U+P:p.skewX||0,p.scaleX=i,p.scaleY=w,p.rotation=P,p.skewX=S,Ye&&(p.rotationX=p.rotationY=p.z=0,p.perspective=T,p.scaleZ=1),p.svg&&(p.x-=p.xOrigin-(p.xOrigin*k+p.yOrigin*b),p.y-=p.yOrigin-(p.xOrigin*a+p.yOrigin*c))}for(m in 90<d(p.skewX)&&270>d(p.skewX)&&(u?(p.scaleX*=-1,p.skewX+=0>=p.rotation?180:-180,p.rotation+=0>=p.rotation?180:-180):(p.scaleY*=-1,p.skewX+=0>=p.skewX?180:-180)),p.zOrigin=v,p)p[m]<h&&p[m]>-h&&(p[m]=0)}return l&&(e._gsTransform=p,p.svg&&(nt&&e.style[Fe]?g.delayedCall(1e-3,function(){ot(e.style,Fe)}):!nt&&e.getAttribute("transform")&&g.delayedCall(1e-3,function(){e.removeAttribute("transform")}))),p},at=function(e){var i=this.data,t=-i.rotation*F,o=t+i.skewX*F,s=1e5,l=(0|r(t)*i.scaleX*s)/s,p=(0|n(t)*i.scaleX*s)/s,u=(0|n(o)*-i.scaleY*s)/s,g=(0|r(o)*i.scaleY*s)/s,f=this.t.style,y=this.t.currentStyle,v,T;if(y){T=p,p=-u,u=-T,v=y.filter,f.filter="";var x=this.t.offsetWidth,w=this.t.offsetHeight,h="absolute"!==y.position,P="progid:DXImageTransform.Microsoft.Matrix(M11="+l+", M12="+p+", M21="+u+", M22="+g,m=i.x+x*i.xPercent/100,S=i.y+w*i.yPercent/100,C,R;if(null!=i.ox&&(C=(i.oxp?0.01*(x*i.ox):i.ox)-x/2,R=(i.oyp?0.01*(w*i.oy):i.oy)-w/2,m+=C-(C*l+R*p),S+=R-(C*u+R*g)),h?(C=x/2,R=w/2,P+=", Dx="+(C-(C*l+R*p)+m)+", Dy="+(R-(C*u+R*g)+S)+")"):P+=", sizingMethod='auto expand')",f.filter=-1===v.indexOf("DXImageTransform.Microsoft.Matrix(")?P+" "+v:v.replace(I,P),0!==e&&1!==e||1!=l||0!=p||0!=u||1!=g||h&&-1===P.indexOf("Dx=0, Dy=0")||E.test(v)&&100!==parseFloat(RegExp.$1)||-1!==v.indexOf(v.indexOf("Alpha"))||f.removeAttribute("filter"),!h){var A=8>Se?1:-1,O,D,L;for(C=i.ieOffsetX||0,R=i.ieOffsetY||0,i.ieOffsetX=_((x-((0>l?-l:l)*x+(0>p?-p:p)*w))/2+m),i.ieOffsetY=_((w-((0>g?-g:g)*w+(0>u?-u:u)*x))/2+S),Ne=0;4>Ne;Ne++)D=de[Ne],O=y[D],T=-1===O.indexOf("px")?ne(this.t,D,parseFloat(O),O.replace(k,""))||0:parseFloat(O),L=T===i[D]?2>Ne?C-i.ieOffsetX:R-i.ieOffsetY:2>Ne?-i.ieOffsetX:-i.ieOffsetY,f[D]=(i[D]=_(T-L*(0===Ne||2===Ne?1:A)))+"px"}}},it=q.set3DTransformRatio=q.setTransformRatio=function(e){var i=this.data,t=this.t.style,s=i.rotation,l=i.rotationX,d=i.rotationY,_=i.scaleX,p=i.scaleY,c=i.scaleZ,m=i.x,u=i.y,g=i.z,f=i.svg,h=i.perspective,y=i.force3D,v=i.skewY,b=i.skewX,T,x,w,P,S,C,k,E,R,A,O,D,L,B,N,I,M,j,U,X,Y,V,H;if(v&&(b+=v,s+=v),((1===e||0===e)&&"auto"===y&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!y)&&!g&&!h&&!d&&!l&&1===c||nt&&f||!Ye)return void(s||b||f?(s*=F,V=b*F,H=1e5,x=r(s)*_,S=n(s)*_,w=n(s-V)*-p,C=r(s-V)*p,V&&"simple"===i.skewType&&(T=a(V-v*F),T=o(1+T*T),w*=T,C*=T,v&&(T=a(v*F),T=o(1+T*T),x*=T,S*=T)),f&&(m+=i.xOrigin-(i.xOrigin*x+i.yOrigin*w)+i.xOffset,u+=i.yOrigin-(i.xOrigin*S+i.yOrigin*C)+i.yOffset,nt&&(i.xPercent||i.yPercent)&&(N=this.t.getBBox(),m+=0.01*i.xPercent*N.width,u+=0.01*i.yPercent*N.height),N=1e-6,m<N&&m>-N&&(m=0),u<N&&u>-N&&(u=0)),U=(0|x*H)/H+","+(0|S*H)/H+","+(0|w*H)/H+","+(0|C*H)/H+","+m+","+u+")",f&&nt?this.t.setAttribute("transform","matrix("+U):t[Fe]=(i.xPercent||i.yPercent?"translate("+i.xPercent+"%,"+i.yPercent+"%) matrix(":"matrix(")+U):t[Fe]=(i.xPercent||i.yPercent?"translate("+i.xPercent+"%,"+i.yPercent+"%) matrix(":"matrix(")+_+",0,0,"+p+","+m+","+u+")");if(we&&(N=1e-4,_<N&&_>-N&&(_=c=2e-5),p<N&&p>-N&&(p=c=2e-5),h&&!i.z&&!i.rotationX&&!i.rotationY&&(h=0)),s||b)s*=F,I=x=r(s),M=S=n(s),b&&(s-=b*F,I=r(s),M=n(s),"simple"===i.skewType&&(T=a((b-v)*F),T=o(1+T*T),I*=T,M*=T,i.skewY&&(T=a(v*F),T=o(1+T*T),x*=T,S*=T))),w=-M,C=I;else{if(!d&&!l&&1===c&&!h&&!f)return void(t[Fe]=(i.xPercent||i.yPercent?"translate("+i.xPercent+"%,"+i.yPercent+"%) translate3d(":"translate3d(")+m+"px,"+u+"px,"+g+"px)"+(1!==_||1!==p?" scale("+_+","+p+")":""));x=C=1,w=S=0}A=1,P=k=E=R=O=D=0,L=h?-1/h:0,B=i.zOrigin,N=1e-6,X=",",Y="0",s=d*F,s&&(I=r(s),M=n(s),E=-M,O=L*-M,P=x*M,k=S*M,A=I,L*=I,x*=I,S*=I),s=l*F,s&&(I=r(s),M=n(s),T=w*I+P*M,j=C*I+k*M,R=A*M,D=L*M,P=w*-M+P*I,k=C*-M+k*I,A*=I,L*=I,w=T,C=j),1!==c&&(P*=c,k*=c,A*=c,L*=c),1!==p&&(w*=p,C*=p,R*=p,D*=p),1!==_&&(x*=_,S*=_,E*=_,O*=_),(B||f)&&(B&&(m+=P*-B,u+=k*-B,g+=A*-B+B),f&&(m+=i.xOrigin-(i.xOrigin*x+i.yOrigin*w)+i.xOffset,u+=i.yOrigin-(i.xOrigin*S+i.yOrigin*C)+i.yOffset),m<N&&m>-N&&(m=Y),u<N&&u>-N&&(u=Y),g<N&&g>-N&&(g=0)),U=i.xPercent||i.yPercent?"translate("+i.xPercent+"%,"+i.yPercent+"%) matrix3d(":"matrix3d(",U+=(x<N&&x>-N?Y:x)+X+(S<N&&S>-N?Y:S)+X+(E<N&&E>-N?Y:E),U+=X+(O<N&&O>-N?Y:O)+X+(w<N&&w>-N?Y:w)+X+(C<N&&C>-N?Y:C),l||d||1!==c?(U+=X+(R<N&&R>-N?Y:R)+X+(D<N&&D>-N?Y:D)+X+(P<N&&P>-N?Y:P),U+=X+(k<N&&k>-N?Y:k)+X+(A<N&&A>-N?Y:A)+X+(L<N&&L>-N?Y:L)+X):U+=",0,0,0,0,1,0,",U+=m+X+u+X+g+X+(h?1+-g/h:1)+")",t[Fe]=U},nt;h=Ve.prototype,h.x=h.y=h.z=h.skewX=h.skewY=h.rotation=h.rotationX=h.rotationY=h.zOrigin=h.xPercent=h.yPercent=h.xOffset=h.yOffset=0,h.scaleX=h.scaleY=h.scaleZ=1,i("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(a,t,e,n,o,s,l){if(n._lastParsedTransform===l)return o;n._lastParsedTransform=l;var d=l.scale&&"function"==typeof l.scale?l.scale:0,_;"function"==typeof l[e]&&(_=l[e],l[e]=t),d&&(l.scale=d(ke,a));var c=a._gsTransform,m=a.style,u=1e-6,g=je.length,i=l,h={},b="transformOrigin",w=tt(a,T,!0,i.parseTransform),P=i.transform&&("function"==typeof i.transform?i.transform(ke,Ce):i.transform),S,C,k,E,R,A,x,y,O;if(w.skewType=i.skewType||w.skewType||f.defaultSkewType,n._transform=w,P&&"string"==typeof P&&Fe)C=G.style,C[Fe]=P,C.display="block",C.position="absolute",V.body.appendChild(G),S=tt(G,null,!1),"simple"===w.skewType&&(S.scaleY*=r(S.skewX*F)),w.svg&&(A=w.xOrigin,x=w.yOrigin,S.x-=w.xOffset,S.y-=w.yOffset,(i.transformOrigin||i.svgOrigin)&&(P={},Qe(a,pe(i.transformOrigin),P,i.svgOrigin,i.smoothOrigin,!0),A=P.xOrigin,x=P.yOrigin,S.x-=P.xOffset-w.xOffset,S.y-=P.yOffset-w.yOffset),(A||x)&&(y=et(G,!0),S.x-=A-(A*y[0]+x*y[2]),S.y-=x-(A*y[1]+x*y[3]))),V.body.removeChild(G),S.perspective||(S.perspective=w.perspective),null!=i.xPercent&&(S.xPercent=me(i.xPercent,w.xPercent)),null!=i.yPercent&&(S.yPercent=me(i.yPercent,w.yPercent));else if("object"==typeof i){if(S={scaleX:me(null==i.scaleX?i.scale:i.scaleX,w.scaleX),scaleY:me(null==i.scaleY?i.scale:i.scaleY,w.scaleY),scaleZ:me(i.scaleZ,w.scaleZ),x:me(i.x,w.x),y:me(i.y,w.y),z:me(i.z,w.z),xPercent:me(i.xPercent,w.xPercent),yPercent:me(i.yPercent,w.yPercent),perspective:me(i.transformPerspective,w.perspective)},R=i.directionalRotation,null!=R)if("object"==typeof R)for(C in R)i[C]=R[C];else i.rotation=R;"string"==typeof i.x&&-1!==i.x.indexOf("%")&&(S.x=0,S.xPercent=me(i.x,w.xPercent)),"string"==typeof i.y&&-1!==i.y.indexOf("%")&&(S.y=0,S.yPercent=me(i.y,w.yPercent)),S.rotation=ue("rotation"in i?i.rotation:"shortRotation"in i?i.shortRotation+"_short":"rotationZ"in i?i.rotationZ:w.rotation,w.rotation,"rotation",h),Ye&&(S.rotationX=ue("rotationX"in i?i.rotationX:"shortRotationX"in i?i.shortRotationX+"_short":w.rotationX||0,w.rotationX,"rotationX",h),S.rotationY=ue("rotationY"in i?i.rotationY:"shortRotationY"in i?i.shortRotationY+"_short":w.rotationY||0,w.rotationY,"rotationY",h)),S.skewX=ue(i.skewX,w.skewX),S.skewY=ue(i.skewY,w.skewY)}for(Ye&&null!=i.force3D&&(w.force3D=i.force3D,E=!0),k=w.force3D||w.z||w.rotationX||w.rotationY||S.z||S.rotationX||S.rotationY||S.perspective,k||null==i.scale||(S.scaleZ=1);-1<--g;)O=je[g],P=S[O]-w[O],(P>u||P<-u||null!=i[O]||null!=X[O])&&(E=!0,o=new Le(w,O,w[O],P,o),O in h&&(o.e=h[O]),o.xs0=0,o.plugin=s,n._overwriteProps.push(o.n));return P=i.transformOrigin,w.svg&&(P||i.svgOrigin)&&(A=w.xOffset,x=w.yOffset,Qe(a,pe(P),S,i.svgOrigin,i.smoothOrigin),o=Be(w,"xOrigin",(c?w:S).xOrigin,S.xOrigin,o,b),o=Be(w,"yOrigin",(c?w:S).yOrigin,S.yOrigin,o,b),(A!==w.xOffset||x!==w.yOffset)&&(o=Be(w,"xOffset",c?A:w.xOffset,w.xOffset,o,b),o=Be(w,"yOffset",c?x:w.yOffset,w.yOffset,o,b)),P="0px 0px"),(P||Ye&&k&&w.zOrigin)&&(Fe?(E=!0,O=Xe,P=(P||ie(a,O,T,!1,"50% 50%"))+"",o=new Le(m,O,0,0,o,-1,b),o.b=m[O],o.plugin=s,Ye?(C=w.zOrigin,P=P.split(" "),w.zOrigin=(2<P.length&&(0===C||"0px"!==P[2])?parseFloat(P[2]):C)||0,o.xs0=o.e=P[0]+" "+(P[1]||"50%")+" 0px",o=new Le(w,"zOrigin",0,0,o,-1,o.n),o.b=C,o.xs0=o.e=w.zOrigin):o.xs0=o.e=P):pe(P+"",w)),E&&(n._transformType=!(w.svg&&nt)&&(k||3===this._transformType)?3:2),_&&(l[e]=_),d&&(l.scale=d),o},prefix:!0}),i("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),i("borderRadius",{defaultValue:"0px",parser:function(a,t,e,n,r){t=this.format(t);var o=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],s=a.style,l,d,i,_,p,c,m,u,g,f,h,y,v,x,w,P;for(g=parseFloat(a.offsetWidth),f=parseFloat(a.offsetHeight),l=t.split(" "),d=0;d<o.length;d++)this.p.indexOf("border")&&(o[d]=te(o[d])),p=_=ie(a,o[d],T,!1,"0px"),-1!==p.indexOf(" ")&&(_=p.split(" "),p=_[0],_=_[1]),c=i=l[d],m=parseFloat(p),y=p.substr((m+"").length),v="="===c.charAt(1),v?(u=parseInt(c.charAt(0)+"1",10),c=c.substr(2),u*=parseFloat(c),h=c.substr((u+"").length-(0>u?1:0))||""):(u=parseFloat(c),h=c.substr((u+"").length)),""===h&&(h=b[e]||y),h!==y&&(x=ne(a,"borderLeft",m,y),w=ne(a,"borderTop",m,y),"%"===h?(p=100*(x/g)+"%",_=100*(w/f)+"%"):"em"===h?(P=ne(a,"borderLeft",1,"em"),p=x/P+"em",_=w/P+"em"):(p=x+"px",_=w+"px"),v&&(c=parseFloat(p)+u+h,i=parseFloat(_)+u+h)),r=ze(s,o[d],p+" "+_,c+" "+i,!1,"0px",r);return r},prefix:!0,formatter:Ee("0px 0px 0px 0px",!1,!0)}),i("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(a,t,e,i,n){return ze(a.style,e,this.format(ie(a,e,T,!1,"0px 0px")),this.format(t),!1,"0px",n)},prefix:!0,formatter:Ee("0px 0px",!1,!0)}),i("backgroundPosition",{defaultValue:"0 0",parser:function(a,t,e,n,r,o){var s="background-position",l=T||ae(a,null),d=this.format((l?Se?l.getPropertyValue(s+"-x")+" "+l.getPropertyValue(s+"-y"):l.getPropertyValue(s):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),_=this.format(t),p,c,m,i,u,g;if(-1!==d.indexOf("%")!=(-1!==_.indexOf("%"))&&2>_.split(",").length&&(g=ie(a,"backgroundImage").replace(L,""),g&&"none"!==g)){for(p=d.split(" "),c=_.split(" "),W.setAttribute("src",g),m=2;-1<--m;)d=p[m],i=-1!==d.indexOf("%"),i!==(-1!==c[m].indexOf("%"))&&(u=0===m?a.offsetWidth-W.width:a.offsetHeight-W.height,p[m]=i?parseFloat(d)/100*u+"px":100*(parseFloat(d)/u)+"%");d=p.join(" ")}return this.parseComplex(a.style,d,_,r,o)},formatter:pe}),i("backgroundSize",{defaultValue:"0 0",formatter:function(e){return e+="",pe(-1===e.indexOf(" ")?e+" "+e:e)}}),i("perspective",{defaultValue:"0px",prefix:!0}),i("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),i("transformStyle",{prefix:!0}),i("backfaceVisibility",{prefix:!0}),i("userSelect",{prefix:!0}),i("margin",{parser:Re("marginTop,marginRight,marginBottom,marginLeft")}),i("padding",{parser:Re("paddingTop,paddingRight,paddingBottom,paddingLeft")}),i("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,t,e,i,n,r){var o,s,l;return 9>Se?(s=a.currentStyle,l=8>Se?" ":",",o="rect("+s.clipTop+l+s.clipRight+l+s.clipBottom+l+s.clipLeft+")",t=this.format(t).split(",").join(l)):(o=this.format(ie(a,this.p,T,!1,this.dflt)),t=this.format(t)),this.parseComplex(a.style,o,t,n,r)}}),i("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),i("autoRound,strictUnits",{parser:function(a,t,e,i,n){return n}}),i("border",{defaultValue:"0px solid #000",parser:function(a,t,e,i,n,r){var o=ie(a,"borderTopWidth",T,!1,"0px"),s=this.format(t).split(" "),l=s[0].replace(k,"");return"px"!==l&&(o=parseFloat(o)/ne(a,"borderTopWidth",1,l)+l),this.parseComplex(a.style,this.format(o+" "+ie(a,"borderTopStyle",T,!1,"solid")+" "+ie(a,"borderTopColor",T,!1,"#000")),s.join(" "),n,r)},color:!0,formatter:function(e){var t=e.split(" ");return t[0]+" "+(t[1]||"solid")+" "+(e.match(ve)||["#000"])[0]}}),i("borderWidth",{parser:Re("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),i("float,cssFloat,styleFloat",{parser:function(a,t,e,i,n){var r=a.style,o="cssFloat"in r?"cssFloat":"styleFloat";return new Le(r,o,0,0,n,-1,e,!1,0,r[o],t)}});var rt=function(e){var a=this.t,t=a.filter||ie(this.data,"filter")||"",i=0|this.s+this.c*e,n;100==i&&(-1===t.indexOf("atrix(")&&-1===t.indexOf("radient(")&&-1===t.indexOf("oader(")?(a.removeAttribute("filter"),n=!ie(this.data,"filter")):(a.filter=t.replace(A,""),n=!0)),n||(this.xn1&&(a.filter=t=t||"alpha(opacity="+i+")"),-1===t.indexOf("pacity")?(0!=i||!this.xn1)&&(a.filter=t+" alpha(opacity="+i+")"):a.filter=t.replace(E,"opacity="+i))};i("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,t,i,n,r,o){var s=parseFloat(ie(a,"opacity",T,!1,"1")),l=a.style,d="autoAlpha"===i;return"string"==typeof t&&"="===t.charAt(1)&&(t=("-"===t.charAt(0)?-1:1)*parseFloat(t.substr(2))+s),d&&1===s&&"hidden"===ie(a,"visibility",T)&&0!==t&&(s=0),Z?r=new Le(l,"opacity",s,t-s,r):(r=new Le(l,"opacity",100*s,100*(t-s),r),r.xn1=d?1:0,l.zoom=1,r.type=2,r.b="alpha(opacity="+r.s+")",r.e="alpha(opacity="+(r.s+r.c)+")",r.data=a,r.plugin=o,r.setRatio=rt),d&&(r=new Le(l,"visibility",0,0,r,-1,null,!1,0,0===s?"hidden":"inherit",0===t?"hidden":"inherit"),r.xs0="inherit",n._overwriteProps.push(r.n),n._overwriteProps.push(i)),r}});var ot=function(e,t){t&&(e.removeProperty?(("ms"===t.substr(0,2)||"webkit"===t.substr(0,6))&&(t="-"+t),e.removeProperty(t.replace(O,"-$1").toLowerCase())):e.removeAttribute(t))},st=function(e){if(this.t._gsClassPT=this,1===e||0===e){this.t.setAttribute("class",0===e?this.b:this.e);for(var t=this.data,a=this.t.style;t;)t.v?a[t.p]=t.v:ot(a,t.p),t=t._next;1===e&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};i("className",{parser:function(a,t,e,i,n,r,o){var s=a.getAttribute("class")||"",l=a.style.cssText,d,_,p,c,m;if(n=i._classNamePT=new Le(a,e,0,0,n,2),n.setRatio=st,n.pr=-11,y=!0,n.b=s,_=oe(a,T),p=a._gsClassPT,p){for(c={},m=p.data;m;)c[m.p]=1,m=m._next;p.setRatio(1)}return a._gsClassPT=n,n.e="="===t.charAt(1)?s.replace(new RegExp("(?:\\s|^)"+t.substr(2)+"(?![\\w-])"),"")+("+"===t.charAt(0)?" "+t.substr(2):""):t,a.setAttribute("class",n.e),d=se(a,_,oe(a),o,c),a.setAttribute("class",s),n.data=d.firstMPT,a.style.cssText=l,n=n.xfirst=i.parse(a,d.difs,n,r),n}});var lt=function(e){if((1===e||0===e)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var t=this.t.style,n=m.transform.parse,r,a,o,i,s;if("all"===this.e)t.cssText="",i=!0;else for(r=this.e.split(" ").join("").split(","),o=r.length;-1<--o;)a=r[o],m[a]&&(m[a].parse===n?i=!0:a="transformOrigin"===a?Xe:m[a].p),ot(t,a);i&&(ot(t,Fe),s=this.t._gsTransform,s&&(s.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(i("clearProps",{parser:function(a,t,e,i,n){return n=new Le(a,e,0,0,n,2),n.setRatio=lt,n.e=t,n.pr=-10,n.data=i._tween,y=!0,n}}),h=["bezier","throwProps","physicsProps","physics2D"],Ne=h.length;Ne--;)Me(h[Ne]);h=f.prototype,h._firstPT=h._lastParsedTransform=h._transform=null,h._onInitTween=function(e,t,a,i){if(!e.nodeType)return!1;this._target=Ce=e,this._tween=a,this._vars=t,ke=i,be=t.autoRound,y=!1,b=t.suffixMap||f.suffixMap,T=ae(e,""),x=this._overwriteProps;var n=e.style,r,o,s,l,d,_,p,c,u;if(Te&&""===n.zIndex&&(r=ie(e,"zIndex",T),("auto"===r||""===r)&&this._addLazySet(n,"zIndex",0)),"string"==typeof t&&(l=n.cssText,r=oe(e,T),n.cssText=l+";"+t,r=se(e,r,oe(e)).difs,!Z&&R.test(t)&&(r.opacity=parseFloat(RegExp.$1)),t=r,n.cssText=l),this._firstPT=t.className?o=m.className.parse(e,t.className,"className",this,null,null,t):o=this.parse(e,t,null),this._transformType){for(u=3===this._transformType,Fe?xe&&(Te=!0,""===n.zIndex&&(p=ie(e,"zIndex",T),("auto"===p||""===p)&&this._addLazySet(n,"zIndex",0)),Pe&&this._addLazySet(n,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(u?"visible":"hidden"))):n.zoom=1,s=o;s&&s._next;)s=s._next;c=new Le(e,"transform",0,0,null,2),this._linkCSSP(c,null,s),c.setRatio=Fe?it:at,c.data=this._transform||tt(e,T,!0),c.tween=a,c.pr=-1,x.pop()}if(y){for(;o;){for(_=o._next,s=l;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:d)?o._prev._next=o:l=o,(o._next=s)?s._prev=o:d=o,o=_}this._firstPT=l}return!0},h.parse=function(e,t,a,i){var n=e.style,r,o,s,l,d,_,p,c,u,g;for(r in t){if(_=t[r],"function"==typeof _&&(_=_(ke,Ce)),o=m[r],o)a=o.parse(e,_,r,this,a,i,t);else if("--"===r.substr(0,2)){this._tween._propLookup[r]=this._addTween.call(this._tween,e.style,"setProperty",ae(e).getPropertyValue(r)+"",_+"",r,!1,r);continue}else d=ie(e,r,T)+"",u="string"==typeof _,"color"===r||"fill"===r||"stroke"===r||-1!==r.indexOf("Color")||u&&v.test(_)?(!u&&(_=he(_),_=(3<_.length?"rgba(":"rgb(")+_.join(",")+")"),a=ze(n,r,d,_,!0,"transparent",a,0,i)):u&&j.test(_)?a=ze(n,r,d,_,!0,null,a,0,i):(s=parseFloat(d),p=s||0===s?d.substr((s+"").length):"",(""===d||"auto"===d)&&("width"===r||"height"===r?(s=_e(e,r,T),p="px"):"left"===r||"top"===r?(s=re(e,r,T),p="px"):(s="opacity"===r?1:0,p="")),g=u&&"="===_.charAt(1),g?(l=parseInt(_.charAt(0)+"1",10),_=_.substr(2),l*=parseFloat(_),c=_.replace(k,"")):(l=parseFloat(_),c=u?_.replace(k,""):""),""===c&&(c=r in b?b[r]:p),_=l||0===l?(g?l+s:l)+c:t[r],p!==c&&(""!==c||"lineHeight"===r)&&(l||0===l)&&s&&(s=ne(e,r,s,p),"%"===c?(s/=ne(e,r,100,"%")/100,!0!==t.strictUnits&&(d=s+"%")):"em"===c||"rem"===c||"vw"===c||"vh"===c?s/=ne(e,r,1,c):"px"!==c&&(l=ne(e,r,l,c),c="px"),g&&(l||0===l)&&(_=l+s+c)),g&&(l+=s),(s||0===s)&&(l||0===l)?(a=new Le(n,r,s,l-s,a,0,r,!1!==be&&("px"===c||"zIndex"==r),0,d,_),a.xs0=c):void 0!==n[r]&&(_||_+"NaN"&&null!=_)?(a=new Le(n,r,l||s||0,0,a,-1,r,!1,0,d,_),a.xs0="none"===_&&("display"===r||-1!==r.indexOf("Style"))?d:_):$("invalid "+r+" tween value: "+t[r]));i&&a&&!a.plugin&&(a.plugin=i)}return a},h.setRatio=function(e){var t=this._firstPT,a=1e-6,n,r,o;if(1===e&&(this._tween._time===this._tween._duration||0===this._tween._time))for(;t;){if(2===t.type)t.setRatio(e);else if(!(t.r&&-1!==t.type))t.t[t.p]=t.e;else if(n=_(t.s+t.c),!t.type)t.t[t.p]=n+t.xs0;else if(1===t.type){for(o=t.l,r=t.xs0+n+t.xs1,o=1;o<t.l;o++)r+=t["xn"+o]+t["xs"+(o+1)];t.t[t.p]=r}t=t._next}else if(e||this._tween._time!==this._tween._duration&&0!==this._tween._time||-1e-6===this._tween._rawPrevTime)for(;t;){if(n=t.c*e+t.s,t.r?n=_(n):n<a&&n>-a&&(n=0),!t.type)t.t[t.p]=n+t.xs0;else if(1!==t.type)-1===t.type?t.t[t.p]=t.xs0:t.setRatio&&t.setRatio(e);else if(o=t.l,2===o)t.t[t.p]=t.xs0+n+t.xs1+t.xn1+t.xs2;else if(3===o)t.t[t.p]=t.xs0+n+t.xs1+t.xn1+t.xs2+t.xn2+t.xs3;else if(4===o)t.t[t.p]=t.xs0+n+t.xs1+t.xn1+t.xs2+t.xn2+t.xs3+t.xn3+t.xs4;else if(5===o)t.t[t.p]=t.xs0+n+t.xs1+t.xn1+t.xs2+t.xn2+t.xs3+t.xn3+t.xs4+t.xn4+t.xs5;else{for(r=t.xs0+n+t.xs1,o=1;o<t.l;o++)r+=t["xn"+o]+t["xs"+(o+1)];t.t[t.p]=r}t=t._next}else for(;t;)2===t.type?t.setRatio(e):t.t[t.p]=t.b,t=t._next},h._enableTransforms=function(e){this._transform=this._transform||tt(this._target,T,!0),this._transformType=!(this._transform.svg&&nt)&&(e||3===this._transformType)?3:2};var dt=function(){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};h._addLazySet=function(e,t,a){var i=this._firstPT=new Le(e,t,0,0,this._firstPT,2);i.e=a,i.setRatio=dt,i.data=this},h._linkCSSP=function(e,t,a,i){return e&&(t&&(t._prev=e),e._next&&(e._next._prev=e._prev),e._prev?e._prev._next=e._next:this._firstPT===e&&(this._firstPT=e._next,i=!0),a?a._next=e:!i&&null===this._firstPT&&(this._firstPT=e),e._next=t,e._prev=a),e},h._mod=function(e){for(var t=this._firstPT;t;)"function"==typeof e[t.p]&&e[t.p]===_&&(t.r=1),t=t._next},h._kill=function(t){var a=t,i,n,r;if(t.autoAlpha||t.alpha){for(n in a={},t)a[n]=t[n];a.opacity=1,a.autoAlpha&&(a.visibility=1)}for(t.className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),i=this._firstPT;i;)i.plugin&&i.plugin!==n&&i.plugin._kill&&(i.plugin._kill(t),n=i.plugin),i=i._next;return e.prototype._kill.call(this,a)};var _t=function(t,e,a){var n,r,i,o;if(t.slice){for(r=t.length;-1<--r;)_t(t[r],e,a);return}for(n=t.childNodes,r=n.length;-1<--r;)i=n[r],o=i.type,i.style&&(e.push(oe(i)),a&&a.push(i)),(1===o||9===o||11===o)&&i.childNodes.length&&_t(i,e,a)};return f.cascadeTo=function(t,a,n){var r=g.to(t,a,n),o=[r],s=[],l=[],e=[],d=g._internals.reservedProps,_,i,c,p;for(t=r._targets||r.target,_t(t,s,e),r.render(a,!0,!0),_t(t,l),r.render(0,!0,!0),r._enabled(!0),_=e.length;-1<--_;)if(i=se(e[_],s[_],l[_]),i.firstMPT){for(c in i=i.difs,n)d[c]&&(i[c]=n[c]);for(c in p={},i)p[c]=s[_][c];o.push(g.fromTo(e[_],a,p,i))}return o},e.activate([f]),f},!0),function(){var e=u._gsDefine.plugin({propName:"roundProps",version:"1.6.0",priority:-1,API:2,init:function(e,t,a){return this._tween=a,!0}}),t=function(e){for(;e;)e.f||e.blob||(e.m=_),e=e._next},a=e.prototype;a._onInitAllProps=function(){for(var e=this._tween,a=e.vars.roundProps.join?e.vars.roundProps:e.vars.roundProps.split(","),n=a.length,i={},r=e._propLookup.roundProps,o,s,l;-1<--n;)i[a[n]]=_;for(n=a.length;-1<--n;)for(o=a[n],s=e._firstPT;s;)l=s._next,s.pg?s.t._mod(i):s.n===o&&(2===s.f&&s.t?t(s.t._firstPT):(this._add(s.t,o,s.s,s.c),l&&(l._prev=s._prev),s._prev?s._prev._next=l:e._firstPT===s&&(e._firstPT=l),s._next=s._prev=null,e._propLookup[o]=r)),s=l;return!1},a._add=function(e,t,a,i){this._addTween(e,t,a,a+i,t,Math.round),this._overwriteProps.push(t)}}(),function(){u._gsDefine.plugin({propName:"attr",API:2,version:"0.6.1",init:function(e,t,a,i){var n,r;if("function"!=typeof e.setAttribute)return!1;for(n in t)r=t[n],"function"==typeof r&&(r=r(i,e)),this._addTween(e,"setAttribute",e.getAttribute(n)+"",r+"",n,!1,n),this._overwriteProps.push(n);return!0}})}(),u._gsDefine.plugin({propName:"directionalRotation",version:"0.3.1",API:2,init:function(e,t,a,i){"object"!=typeof t&&(t={rotation:t}),this.finals={};var n=!0===t.useRadians?2*l:360,r=1e-6,o,s,d,_,p,c;for(o in t)"useRadians"!==o&&(_=t[o],"function"==typeof _&&(_=_(i,e)),c=(_+"").split("_"),s=c[0],d=parseFloat("function"==typeof e[o]?e[o.indexOf("set")||"function"!=typeof e["get"+o.substr(3)]?o:"get"+o.substr(3)]():e[o]),_=this.finals[o]="string"==typeof s&&"="===s.charAt(1)?d+parseInt(s.charAt(0)+"1",10)*+s.substr(2):+s||0,p=_-d,c.length&&(s=c.join("_"),-1!==s.indexOf("short")&&(p%=n,p!==p%(n/2)&&(p=0>p?p+n:p-n)),-1!==s.indexOf("_cw")&&0>p?p=(p+9999999999*n)%n-(0|p/n)*n:-1!==s.indexOf("ccw")&&0<p&&(p=(p-9999999999*n)%n-(0|p/n)*n)),(p>r||p<-r)&&(this._addTween(e,o,d,d+p,o),this._overwriteProps.push(o)));return!0},set:function(e){var t;if(1!==e)this._super.setRatio.call(this,e);else for(t=this._firstPT;t;)t.f?t.t[t.p](this.finals[t.p]):t.t[t.p]=this.finals[t.p],t=t._next}})._autoCSS=!0,u._gsDefine("easing.Back",["easing.Ease"],function(t){var a=u.GreenSockGlobals||u,i=a.com.greensock,s=2*l,d=l/2,_=i._class,c=function(e,a){var i=_("easing."+e,function(){},!0),n=i.prototype=new t;return n.constructor=i,n.getRatio=a,i},m=t.register||function(){},g=function(e,t,a,i){var n=_("easing."+e,{easeOut:new t,easeIn:new a,easeInOut:new i},!0);return m(n,e),n},f=function(e,t,a){this.t=e,this.v=t,a&&(this.next=a,a.prev=this,this.c=a.v-t,this.gap=a.t-e)},h=function(e,a){var i=_("easing."+e,function(e){this._p1=e||0===e?e:1.70158,this._p2=1.525*this._p1},!0),n=i.prototype=new t;return n.constructor=i,n.getRatio=a,n.config=function(e){return new i(e)},i},y=g("Back",h("BackOut",function(e){return--e*e*((this._p1+1)*e+this._p1)+1}),h("BackIn",function(e){return e*e*((this._p1+1)*e-this._p1)}),h("BackInOut",function(e){return 1>(e*=2)?0.5*e*e*((this._p2+1)*e-this._p2):0.5*((e-=2)*e*((this._p2+1)*e+this._p2)+2)})),v=_("easing.SlowMo",function(e,t,a){t=t||0===t?t:0.7,null==e?e=0.7:1<e&&(e=1),this._p=1===e?0:t,this._p1=(1-e)/2,this._p2=e,this._p3=this._p1+this._p2,this._calcEnd=!0===a},!0),b=v.prototype=new t,p,T,x;return b.constructor=v,b.getRatio=function(e){var t=e+(0.5-e)*this._p;return e<this._p1?this._calcEnd?1-(e=1-e/this._p1)*e:t-(e=1-e/this._p1)*e*e*e*t:e>this._p3?this._calcEnd?1===e?0:1-(e=(e-this._p3)/this._p1)*e:t+(e-t)*(e=(e-this._p3)/this._p1)*e*e*e:this._calcEnd?1:t},v.ease=new v(0.7,0.7),b.config=v.config=function(e,t,a){return new v(e,t,a)},p=_("easing.SteppedEase",function(e,t){e=e||1,this._p1=1/e,this._p2=e+(t?0:1),this._p3=t?1:0},!0),b=p.prototype=new t,b.constructor=p,b.getRatio=function(e){return 0>e?e=0:1<=e&&(e=0.999999999),((0|this._p2*e)+this._p3)*this._p1},b.config=p.config=function(e,t){return new p(e,t)},T=_("easing.RoughEase",function(e){e=e||{};for(var n=e.taper||"none",r=[],a=0,o=0|(e.points||20),s=o,i=!1!==e.randomize,l=!0===e.clamp,d=e.template instanceof t?e.template:null,_="number"==typeof e.strength?0.4*e.strength:0.4,p,c,m,u,g,h;-1<--s;)p=i?Math.random():1/o*s,c=d?d.getRatio(p):p,"none"===n?m=_:"out"===n?(u=1-p,m=u*u*_):"in"===n?m=p*p*_:0.5>p?(u=2*p,m=0.5*(u*u)*_):(u=2*(1-p),m=0.5*(u*u)*_),i?c+=Math.random()*m-0.5*m:s%2?c+=0.5*m:c-=0.5*m,l&&(1<c?c=1:0>c&&(c=0)),r[a++]={x:p,y:c};for(r.sort(function(e,t){return e.x-t.x}),h=new f(1,1,null),s=o;-1<--s;)g=r[s],h=new f(g.x,g.y,h);this._prev=new f(0,0,0===h.t?h.next:h)},!0),b=T.prototype=new t,b.constructor=T,b.getRatio=function(e){var t=this._prev;if(e>t.t){for(;t.next&&e>=t.t;)t=t.next;t=t.prev}else for(;t.prev&&e<=t.t;)t=t.prev;return this._prev=t,t.v+(e-t.t)/t.gap*t.c},b.config=function(e){return new T(e)},T.ease=new T,g("Bounce",c("BounceOut",function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+0.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+0.9375:7.5625*(e-=2.625/2.75)*e+0.984375}),c("BounceIn",function(e){return(e=1-e)<1/2.75?1-7.5625*e*e:e<2/2.75?1-(7.5625*(e-=1.5/2.75)*e+0.75):e<2.5/2.75?1-(7.5625*(e-=2.25/2.75)*e+0.9375):1-(7.5625*(e-=2.625/2.75)*e+0.984375)}),c("BounceInOut",function(e){var t=0.5>e;return e=t?1-2*e:2*e-1,e=e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+0.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+0.9375:7.5625*(e-=2.625/2.75)*e+0.984375,t?0.5*(1-e):0.5*e+0.5})),g("Circ",c("CircOut",function(e){return o(1- --e*e)}),c("CircIn",function(e){return-(o(1-e*e)-1)}),c("CircInOut",function(e){return 1>(e*=2)?-0.5*(o(1-e*e)-1):0.5*(o(1-(e-=2)*e)+1)})),x=function(e,a,i){var n=_("easing."+e,function(e,t){this._p1=1<=e?e:1,this._p2=(t||i)/(1>e?e:1),this._p3=this._p2/s*(Math.asin(1/this._p1)||0),this._p2=s/this._p2},!0),r=n.prototype=new t;return r.constructor=n,r.getRatio=a,r.config=function(e,t){return new n(e,t)},n},g("Elastic",x("ElasticOut",function(t){return this._p1*e(2,-10*t)*n((t-this._p3)*this._p2)+1},0.3),x("ElasticIn",function(t){return-(this._p1*e(2,10*(t-=1))*n((t-this._p3)*this._p2))},0.3),x("ElasticInOut",function(t){return 1>(t*=2)?-0.5*(this._p1*e(2,10*(t-=1))*n((t-this._p3)*this._p2)):0.5*(this._p1*e(2,-10*(t-=1))*n((t-this._p3)*this._p2))+1},0.45)),g("Expo",c("ExpoOut",function(t){return 1-e(2,-10*t)}),c("ExpoIn",function(t){return e(2,10*(t-1))-1e-3}),c("ExpoInOut",function(t){return 1>(t*=2)?0.5*e(2,10*(t-1)):0.5*(2-e(2,-10*(t-1)))})),g("Sine",c("SineOut",function(e){return n(e*d)}),c("SineIn",function(e){return-r(e*d)+1}),c("SineInOut",function(e){return-0.5*(r(l*e)-1)})),_("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),m(a.SlowMo,"SlowMo","ease,"),m(T,"RoughEase","ease,"),m(p,"SteppedEase","ease,"),y},!0)}),u._gsDefine&&u._gsQueue.pop()(),function(t,e){"use strict";var r={},n=t.document,o=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!o.TweenLite){var s=function(e){var t=e.split("."),a=o,n;for(n=0;n<t.length;n++)a[t[n]]=a=a[t[n]]||{};return a},l=s("com.greensock"),d=1e-10,m=function(e){var t=[],a=e.length,n;for(n=0;n!==a;t.push(e[n++]));return t},u=function(){},g=function(){var e=Object.prototype.toString,t=e.call([]);return function(a){return null!=a&&(a instanceof Array||"object"==typeof a&&!!a.push&&e.call(a)===t)}}(),f={},h=function(t,a,l,d){this.sc=f[t]?f[t].sc:[],f[t]=this,this.gsClass=null,this.func=l;var _=[];this.check=function(p){for(var m=a.length,i=m,u,g,y,n;-1<--m;)(u=f[a[m]]||new h(a[m],[])).gsClass?(_[m]=u.gsClass,i--):p&&u.sc.push(this);if(0===i&&l){if(g=("com.greensock."+t).split("."),y=g.pop(),n=s(g.join("."))[y]=this.gsClass=l.apply(l,_),d)if(o[y]=r[y]=n,!("undefined"!=typeof c&&c.exports));else if(t===e)for(m in c.exports=r[e]=n,r)n[m]=r[m];else r[e]&&(r[e][y]=n);for(m=0;m<this.sc.length;m++)this.sc[m].check()}},this.check(!0)},y=t._gsDefine=function(e,t,a,i){return new h(e,t,a,i)},v=l._class=function(e,t,a){return t=t||function(){},y(e,[],function(){return t},a),t},b,a,i,T,x;y.globals=o;var w=[0,0,1,1],P=v("easing.Ease",function(e,t,a,i){this._func=e,this._type=a||0,this._power=i||0,this._params=t?w.concat(t):w},!0),S=P.map={},C=P.register=function(t,a,n,r){for(var o=a.split(","),s=o.length,i=(n||"easeIn,easeOut,easeInOut").split(","),d,e,_,p;-1<--s;)for(e=o[s],d=r?v("easing."+e,null,!0):l.easing[e]||{},_=i.length;-1<--_;)p=i[_],S[e+"."+p]=S[p+e]=d[p]=t.getRatio?t:t[p]||new t};for(i=P.prototype,i._calcEnd=!1,i.getRatio=function(e){if(this._func)return this._params[0]=e,this._func.apply(null,this._params);var a=this._type,t=this._power,i=1===a?1-e:2===a?e:0.5>e?2*e:2*(1-e);return 1===t?i*=i:2===t?i*=i*i:3===t?i*=i*i*i:4===t&&(i*=i*i*i*i),1===a?1-i:2===a?i:0.5>e?i/2:1-i/2},b=["Linear","Quad","Cubic","Quart","Quint,Strong"],a=b.length;-1<--a;)i=b[a]+",Power"+a,C(new P(null,null,1,a),i,"easeOut",!0),C(new P(null,null,2,a),i,"easeIn"+(0===a?",easeNone":"")),C(new P(null,null,3,a),i,"easeInOut");S.linear=l.easing.Linear.easeIn,S.swing=l.easing.Quad.easeInOut;var k=v("events.EventDispatcher",function(e){this._listeners={},this._eventTarget=e||this});i=k.prototype,i.addEventListener=function(e,t,a,n,r){r=r||0;var o=this._listeners[e],s=0,l,d;for(this!==T||x||T.wake(),null==o&&(this._listeners[e]=o=[]),d=o.length;-1<--d;)l=o[d],l.c===t&&l.s===a?o.splice(d,1):0==s&&l.pr<r&&(s=d+1);o.splice(s,0,{c:t,s:a,up:n,pr:r})},i.removeEventListener=function(e,t){var a=this._listeners[e],n;if(a)for(n=a.length;-1<--n;)if(a[n].c===t)return void a.splice(n,1)},i.dispatchEvent=function(e){var a=this._listeners[e],n,i,r;if(a)for(n=a.length,1<n&&(a=a.slice(0)),i=this._eventTarget;-1<--n;)r=a[n],r&&(r.up?r.c.call(r.s||i,{type:e,target:i}):r.c.call(r.s||i))};var E=t.requestAnimationFrame,R=t.cancelAnimationFrame,A=Date.now||function(){return new Date().getTime()},O=A();for(b=["ms","moz","webkit","o"],a=b.length;-1<--a&&!E;)E=t[b[a]+"RequestAnimationFrame"],R=t[b[a]+"CancelAnimationFrame"]||t[b[a]+"CancelRequestAnimationFrame"];v("Ticker",function(e,t){var a=this,i=A(),r=!1!==t&&E&&"auto",o=500,s=33,l=function(e){var t=A()-O,n,r;t>o&&(i+=t-s),O+=t,a.time=(O-i)/1e3,n=a.time-h,(!_||0<n||!0===e)&&(a.frame++,h+=n+(n>=g?4e-3:g-n),r=!0),!0!==e&&(m=c(l)),r&&a.dispatchEvent("tick")},_,c,m,g,h;k.call(a),a.time=a.frame=0,a.tick=function(){l(!0)},a.lagSmoothing=function(e,t){return arguments.length?void(o=e||1/d,s=p(t,o,0)):o<1/d},a.sleep=function(){null==m||(r&&R?R(m):clearTimeout(m),c=u,m=null,a===T&&(x=!1))},a.wake=function(e){null===m?e?i+=-O+(O=A()):10<a.frame&&(O=A()-o+5):a.sleep(),c=0===_?u:r&&E?E:function(e){return setTimeout(e,0|1e3*(h-a.time)+1)},a===T&&(x=!0),l(2)},a.fps=function(e){return arguments.length?void(_=e,g=1/(_||60),h=this.time+g,a.wake()):_},a.useRAF=function(e){return arguments.length?void(a.sleep(),r=e,a.fps(_)):r},a.fps(e),setTimeout(function(){"auto"===r&&5>a.frame&&"hidden"!==n.visibilityState&&a.useRAF(!1)},1500)}),i=l.Ticker.prototype=new l.events.EventDispatcher,i.constructor=l.Ticker;var D=v("core.Animation",function(e,t){if(this.vars=t=t||{},this._duration=this._totalDuration=e||0,this._delay=+t.delay||0,this._timeScale=1,this._active=!0===t.immediateRender,this.data=t.data,this._reversed=!0===t.reversed,!!$){x||T.wake();var a=this.vars.useFrames?K:$;a.add(this,a._time),this.vars.paused&&this.paused(!0)}});T=D.ticker=new l.Ticker,i=D.prototype,i._dirty=i._gc=i._initted=i._paused=!1,i._totalTime=i._time=0,i._rawPrevTime=-1,i._next=i._last=i._onUpdate=i._timeline=i.timeline=null,i._paused=!1;var L=function(){x&&2e3<A()-O&&("hidden"!==n.visibilityState||!T.lagSmoothing())&&T.wake();var e=setTimeout(L,2e3);e.unref&&e.unref()};L(),i.play=function(e,t){return null!=e&&this.seek(e,t),this.reversed(!1).paused(!1)},i.pause=function(e,t){return null!=e&&this.seek(e,t),this.paused(!0)},i.resume=function(e,t){return null!=e&&this.seek(e,t),this.paused(!1)},i.seek=function(e,t){return this.totalTime(+e,!1!==t)},i.restart=function(e,t){return this.reversed(!1).paused(!1).totalTime(e?-this._delay:0,!1!==t,!0)},i.reverse=function(e,t){return null!=e&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},i.render=function(){},i.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},i.isActive=function(){var e=this._timeline,t=this._startTime,a;return!e||!this._gc&&!this._paused&&e.isActive()&&(a=e.rawTime(!0))>=t&&a<t+this.totalDuration()/this._timeScale-1e-7},i._enabled=function(e,t){return x||T.wake(),this._gc=!e,this._active=this.isActive(),!0!==t&&(e&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!e&&this.timeline&&this._timeline._remove(this,!0)),!1},i._kill=function(){return this._enabled(!1,!1)},i.kill=function(e,t){return this._kill(e,t),this},i._uncache=function(e){for(var t=e?this:this.timeline;t;)t._dirty=!0,t=t.timeline;return this},i._swapSelfInParams=function(e){for(var t=e.length,a=e.concat();-1<--t;)"{self}"===e[t]&&(a[t]=this);return a},i._callback=function(e){var t=this.vars,a=t[e],i=t[e+"Params"],n=t[e+"Scope"]||t.callbackScope||this,r=i?i.length:0;0===r?a.call(n):1===r?a.call(n,i[0]):2===r?a.call(n,i[0],i[1]):a.apply(n,i)},i.eventCallback=function(e,t,a,i){if("on"===(e||"").substr(0,2)){var n=this.vars;if(1===arguments.length)return n[e];null==t?delete n[e]:(n[e]=t,n[e+"Params"]=g(a)&&-1!==a.join("").indexOf("{self}")?this._swapSelfInParams(a):a,n[e+"Scope"]=i),"onUpdate"===e&&(this._onUpdate=t)}return this},i.delay=function(e){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+e-this._delay),this._delay=e,this):this._delay},i.duration=function(e){return arguments.length?(this._duration=this._totalDuration=e,this._uncache(!0),this._timeline.smoothChildTiming&&0<this._time&&this._time<this._duration&&0!==e&&this.totalTime(this._totalTime*(e/this._duration),!0),this):(this._dirty=!1,this._duration)},i.totalDuration=function(e){return this._dirty=!1,arguments.length?this.duration(e):this._totalDuration},i.time=function(e,t){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(e>this._duration?this._duration:e,t)):this._time},i.totalTime=function(e,t,a){if(x||T.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>e&&!a&&(e+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var i=this._totalDuration,n=this._timeline;if(e>i&&!a&&(e=i),this._startTime=(this._paused?this._pauseTime:n._time)-(this._reversed?i-e:e)/this._timeScale,n._dirty||this._uncache(!1),n._timeline)for(;n._timeline;)n._timeline._time!==(n._startTime+n._totalTime)/n._timeScale&&n.totalTime(n._totalTime,!0),n=n._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==e||0===this._duration)&&(M.length&&ee(),this.render(e,t,!1),M.length&&ee())}return this},i.progress=i.totalProgress=function(e,t){var a=this.duration();return arguments.length?this.totalTime(a*e,t):a?this._time/a:this.ratio},i.startTime=function(e){return arguments.length?(e!==this._startTime&&(this._startTime=e,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,e-this._delay)),this):this._startTime},i.endTime=function(e){return this._startTime+(!1==e?this.duration():this.totalDuration())/this._timeScale},i.timeScale=function(e){if(!arguments.length)return this._timeScale;var a,i;for(e=e||d,this._timeline&&this._timeline.smoothChildTiming&&(a=this._pauseTime,i=a||0===a?a:this._timeline.totalTime(),this._startTime=i-(i-this._startTime)*this._timeScale/e),this._timeScale=e,i=this.timeline;i&&i.timeline;)i._dirty=!0,i.totalDuration(),i=i.timeline;return this},i.reversed=function(e){return arguments.length?(e!=this._reversed&&(this._reversed=e,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},i.paused=function(e){if(!arguments.length)return this._paused;var t=this._timeline,a,i;return e!=this._paused&&t&&(!x&&!e&&T.wake(),a=t.rawTime(),i=a-this._pauseTime,!e&&t.smoothChildTiming&&(this._startTime+=i,this._uncache(!1)),this._pauseTime=e?a:null,this._paused=e,this._active=this.isActive(),!e&&0!==i&&this._initted&&this.duration()&&(a=t.smoothChildTiming?this._totalTime:(a-this._startTime)/this._timeScale,this.render(a,a===this._totalTime,!0))),this._gc&&!e&&this._enabled(!0,!1),this};var B=v("core.SimpleTimeline",function(e){D.call(this,0,e),this.autoRemoveChildren=this.smoothChildTiming=!0});i=B.prototype=new D,i.constructor=B,i.kill()._gc=!1,i._first=i._last=i._recent=null,i._sortChildren=!1,i.add=i.insert=function(e,t){var a,i;if(e._startTime=+(t||0)+e._delay,e._paused&&this!==e._timeline&&(e._pauseTime=e._startTime+(this.rawTime()-e._startTime)/e._timeScale),e.timeline&&e.timeline._remove(e,!0),e.timeline=e._timeline=this,e._gc&&e._enabled(!0,!0),a=this._last,this._sortChildren)for(i=e._startTime;a&&a._startTime>i;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=this._first,this._first=e),e._next?e._next._prev=e:this._last=e,e._prev=a,this._recent=e,this._timeline&&this._uncache(!0),this},i._remove=function(e,t){return e.timeline===this&&(!t&&e._enabled(!1,!0),e._prev?e._prev._next=e._next:this._first===e&&(this._first=e._next),e._next?e._next._prev=e._prev:this._last===e&&(this._last=e._prev),e._next=e._prev=e.timeline=null,e===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},i.render=function(e,t,a){var i=this._first,n;for(this._totalTime=this._time=this._rawPrevTime=e;i;)n=i._next,(i._active||e>=i._startTime&&!i._paused&&!i._gc)&&(i._reversed?i.render((i._dirty?i.totalDuration():i._totalDuration)-(e-i._startTime)*i._timeScale,t,a):i.render((e-i._startTime)*i._timeScale,t,a)),i=n},i.rawTime=function(){return x||T.wake(),this._totalTime};var z=v("TweenLite",function(e,a,n){if(D.call(this,a,n),this.render=z.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"==typeof e?z.selector(e)||e:e;var r=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),o=this.vars.overwrite,s,i,l;if(this._overwrite=o=null==o?Z[z.defaultOverwrite]:"number"==typeof o?o>>0:Z[o],(r||e instanceof Array||e.push&&g(e))&&"number"!=typeof e[0])for(this._targets=l=m(e),this._propLookup=[],this._siblings=[],s=0;s<l.length;s++){if(i=l[s],!i){l.splice(s--,1);continue}else if("string"==typeof i){i=l[s--]=z.selector(i),"string"==typeof i&&l.splice(s+1,1);continue}else if(i.length&&i!==t&&i[0]&&(i[0]===t||i[0].nodeType&&i[0].style&&!i.nodeType)){l.splice(s--,1),this._targets=l=l.concat(m(i));continue}this._siblings[s]=te(i,this,!1),1===o&&1<this._siblings[s].length&&ie(i,this,null,1,this._siblings[s])}else this._propLookup={},this._siblings=te(e,this,!1),1===o&&1<this._siblings.length&&ie(e,this,null,1,this._siblings);(this.vars.immediateRender||0===a&&0===this._delay&&!1!==this.vars.immediateRender)&&(this._time=-d,this.render(p(0,-this._delay)))},!0),N=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},I=function(e,t){var a={},i;for(i in e)Q[i]||i in t&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||G[i]&&(!G[i]||!G[i]._autoCSS)||(a[i]=e[i],delete e[i]);e.css=a};i=z.prototype=new D,i.constructor=z,i.kill()._gc=!1,i.ratio=0,i._firstPT=i._targets=i._overwrittenProps=i._startAt=null,i._notifyPluginsOfEnabled=i._lazy=!1,z.version="1.20.3",z.defaultEase=i._ease=new P(null,null,1,1),z.defaultOverwrite="auto",z.ticker=T,z.autoSleep=120,z.lagSmoothing=function(e,t){T.lagSmoothing(e,t)},z.selector=t.$||t.jQuery||function(a){var e=t.$||t.jQuery;return e?(z.selector=e,e(a)):"undefined"==typeof n?a:n.querySelectorAll?n.querySelectorAll(a):n.getElementById("#"===a.charAt(0)?a.substr(1):a)};var M=[],j={},F=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,U=/[\+-]=-?[\.\d]/,X=function(e){for(var t=this._firstPT,a=1e-6,i;t;)i=t.blob?1===e&&null!=this.end?this.end:e?this.join(""):this.start:t.c*e+t.s,t.m?i=t.m(i,this._target||t.t):i<a&&i>-a&&!t.blob&&(i=0),t.f?t.fp?t.t[t.p](t.fp,i):t.t[t.p](i):t.t[t.p]=i,t=t._next},Y=function(e,t,n,r){var o=[],d=0,p="",s=0,c,m,u,g,f,l,h;for(o.start=e,o.end=t,e=o[0]=e+"",t=o[1]=t+"",n&&(n(o),e=o[0],t=o[1]),o.length=0,c=e.match(F)||[],m=t.match(F)||[],r&&(r._next=null,r.blob=1,o._firstPT=o._applyPT=r),f=m.length,g=0;g<f;g++)h=m[g],l=t.substr(d,t.indexOf(h,d)-d),p+=l||!g?l:",",d+=l.length,s?s=(s+1)%5:"rgba("===l.substr(-5)&&(s=1),h===c[g]||c.length<=g?p+=h:(p&&(o.push(p),p=""),u=parseFloat(c[g]),o.push(u),o._firstPT={_next:o._firstPT,t:o,p:o.length-1,s:u,c:("="===h.charAt(1)?parseInt(h.charAt(0)+"1",10)*parseFloat(h.substr(2)):parseFloat(h)-u)||0,f:0,m:s&&4>s?_:0}),d+=h.length;return p+=t.substr(d),p&&o.push(p),o.setRatio=X,U.test(t)&&(o.end=null),o},V=function(e,t,a,i,n,r,o,l,d){"function"==typeof i&&(i=i(d||0,e));var p=typeof e[t],c="function"==p?t.indexOf("set")||"function"!=typeof e["get"+t.substr(3)]?t:"get"+t.substr(3):"",m="get"===a?c?o?e[c](o):e[c]():e[t]:a,u="string"==typeof i&&"="===i.charAt(1),g={t:e,p:t,s:m,f:"function"==p,pg:0,n:n||t,m:r?"function"==typeof r?r:_:0,pr:0,c:u?parseInt(i.charAt(0)+"1",10)*parseFloat(i.substr(2)):parseFloat(i)-m||0},f;if("number"==typeof m&&("number"==typeof i||u)||(o||isNaN(m)||!u&&isNaN(i)||"boolean"==typeof m||"boolean"==typeof i?(g.fp=o,f=Y(m,u?parseFloat(g.s)+g.c:i,l||z.defaultStringFilter,g),g={t:f,p:"setRatio",s:0,c:1,f:2,pg:0,n:n||t,pr:0,m:0}):(g.s=parseFloat(m),!u&&(g.c=parseFloat(i)-g.s||0))),g.c)return(g._next=this._firstPT)&&(g._next._prev=g),this._firstPT=g,g},H=z._internals={isArray:g,isSelector:N,lazyTweens:M,blobDif:Y},G=z._plugins={},W=H.tweenLookup={},q=0,Q=H.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1,yoyoEase:1},Z={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,true:1,false:0},K=D._rootFramesTimeline=new B,$=D._rootTimeline=new B,J=30,ee=H.lazyRender=function(){var e=M.length,t;for(j={};-1<--e;)t=M[e],t&&!1!==t._lazy&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);M.length=0};$._startTime=T.time,K._startTime=T.frame,$._active=K._active=!0,setTimeout(ee,1),D._updateRoot=z.render=function(){var e,t,a;if(M.length&&ee(),$.render((T.time-$._startTime)*$._timeScale,!1,!1),K.render((T.frame-K._startTime)*K._timeScale,!1,!1),M.length&&ee(),T.frame>=J){for(a in J=T.frame+(parseInt(z.autoSleep,10)||120),W){for(t=W[a].tweens,e=t.length;-1<--e;)t[e]._gc&&t.splice(e,1);0===t.length&&delete W[a]}if(a=$._first,(!a||a._paused)&&z.autoSleep&&!K._first&&1===T._listeners.tick.length){for(;a&&a._paused;)a=a._next;a||T.sleep()}}},T.addEventListener("tick",D._updateRoot);var te=function(e,t,n){var r=e._gsTweenID,o,a;if(W[r||(e._gsTweenID=r="t"+q++)]||(W[r]={target:e,tweens:[]}),t&&(o=W[r].tweens,o[a=o.length]=t,n))for(;-1<--a;)o[a]===t&&o.splice(a,1);return W[r].tweens},ae=function(e,t,a,i){var n=e.vars.onOverwrite,r,o;return n&&(r=n(e,t,a,i)),n=z.onOverwrite,n&&(o=n(e,t,a,i)),!1!==r&&!1!==o},ie=function(e,t,a,n,r){var o,i,s,_;if(1===n||4<=n){for(_=r.length,o=0;o<_;o++)if((s=r[o])!==t)!s._gc&&s._kill(null,e,t)&&(i=!0);else if(5===n)break;return i}var l=t._startTime+d,p=[],c=0,m=0===t._duration,u;for(o=r.length;-1<--o;)if((s=r[o])===t||s._gc||s._paused);else s._timeline===t._timeline?s._startTime<=l&&s._startTime+s.totalDuration()/s._timeScale>l&&((m||!s._initted)&&2e-10>=l-s._startTime||(p[c++]=s)):(u=u||ne(t,0,m),0===ne(s,u,m)&&(p[c++]=s));for(o=c;-1<--o;)if(s=p[o],2===n&&s._kill(a,e,t)&&(i=!0),2!==n||!s._firstPT&&s._initted){if(2!==n&&!ae(s,t))continue;s._enabled(!1,!1)&&(i=!0)}return i},ne=function(e,a,i){for(var n=e._timeline,r=n._timeScale,o=e._startTime;n._timeline;){if(o+=n._startTime,r*=n._timeScale,n._paused)return-100;n=n._timeline}return o/=r,o>a?o-a:i&&o===a||!e._initted&&o-a<2*d?d:(o+=e.totalDuration()/e._timeScale/r)>a+d?0:o-a-d};i._init=function(){var e=this.vars,t=this._overwrittenProps,a=this._duration,n=!!e.immediateRender,r=e.ease,o,i,s,d,_,p;if(e.startAt){for(d in this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),_={},e.startAt)_[d]=e.startAt[d];if(_.data="isStart",_.overwrite=!1,_.immediateRender=!0,_.lazy=n&&!1!==e.lazy,_.startAt=_.delay=null,_.onUpdate=e.onUpdate,_.onUpdateParams=e.onUpdateParams,_.onUpdateScope=e.onUpdateScope||e.callbackScope||this,this._startAt=z.to(this.target,0,_),n)if(0<this._time)this._startAt=null;else if(0!==a)return}else if(e.runBackwards&&0!==a)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{for(d in 0!==this._time&&(n=!1),s={},e)Q[d]&&"autoCSS"!==d||(s[d]=e[d]);if(s.overwrite=0,s.data="isFromStart",s.lazy=n&&!1!==e.lazy,s.immediateRender=n,this._startAt=z.to(this.target,0,s),!n)this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null);else if(0===this._time)return}if(this._ease=r=r?r instanceof P?r:"function"==typeof r?new P(r,e.easeParams):S[r]||z.defaultEase:z.defaultEase,e.easeParams instanceof Array&&r.config&&(this._ease=r.config.apply(r,e.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(p=this._targets.length,o=0;o<p;o++)this._initProps(this._targets[o],this._propLookup[o]={},this._siblings[o],t?t[o]:null,o)&&(i=!0);else i=this._initProps(this.target,this._propLookup,this._siblings,t,0);if(i&&z._onPluginEvent("_onInitAllProps",this),t&&!this._firstPT&&"function"!=typeof this.target&&this._enabled(!1,!1),e.runBackwards)for(s=this._firstPT;s;)s.s+=s.c,s.c=-s.c,s=s._next;this._onUpdate=e.onUpdate,this._initted=!0},i._initProps=function(e,a,n,r,o){var s,l,i,d,_,p;if(null==e)return!1;for(s in j[e._gsTweenID]&&ee(),!this.vars.css&&e.style&&e!==t&&e.nodeType&&G.css&&!1!==this.vars.autoCSS&&I(this.vars,e),this.vars)if(p=this.vars[s],Q[s])p&&(p instanceof Array||p.push&&g(p))&&-1!==p.join("").indexOf("{self}")&&(this.vars[s]=p=this._swapSelfInParams(p,this));else if(G[s]&&(d=new G[s])._onInitTween(e,this.vars[s],this,o)){for(this._firstPT=_={_next:this._firstPT,t:d,p:"setRatio",s:0,c:1,f:1,n:s,pg:1,pr:d._priority,m:0},l=d._overwriteProps.length;-1<--l;)a[d._overwriteProps[l]]=this._firstPT;(d._priority||d._onInitAllProps)&&(i=!0),(d._onDisable||d._onEnable)&&(this._notifyPluginsOfEnabled=!0),_._next&&(_._next._prev=_)}else a[s]=V.call(this,e,s,"get",p,s,0,null,this.vars.stringFilter,o);return r&&this._kill(r,e)?this._initProps(e,a,n,r,o):1<this._overwrite&&this._firstPT&&1<n.length&&ie(e,this,a,this._overwrite,n)?(this._kill(a,e),this._initProps(e,a,n,r,o)):(this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration)&&(j[e._gsTweenID]=!0),i)},i.render=function(e,t,a){var i=this._time,n=this._duration,o=this._rawPrevTime,s,l,_,p;if(e>=n-1e-7&&0<=e)this._totalTime=this._time=n,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,l="onComplete",a=a||this._timeline.autoRemoveChildren),0===n&&(this._initted||!this.vars.lazy||a)&&(this._startTime===this._timeline._duration&&(e=0),(0>o||0>=e&&-1e-7<=e||o===d&&"isPause"!==this.data)&&o!==e&&(a=!0,o>d&&(l="onReverseComplete")),this._rawPrevTime=p=!t||e||o===e?e:d);else if(1e-7>e)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==i||0===n&&0<o)&&(l="onReverseComplete",s=this._reversed),0>e&&(this._active=!1,0===n&&(this._initted||!this.vars.lazy||a)&&(0<=o&&(o!==d||"isPause"!==this.data)&&(a=!0),this._rawPrevTime=p=!t||e||o===e?e:d)),(!this._initted||this._startAt&&this._startAt.progress())&&(a=!0);else if(this._totalTime=this._time=e,this._easeType){var c=e/n,r=this._easeType,m=this._easePower;(1===r||3===r&&0.5<=c)&&(c=1-c),3===r&&(c*=2),1===m?c*=c:2===m?c*=c*c:3===m?c*=c*c*c:4===m&&(c*=c*c*c*c),this.ratio=1===r?1-c:2===r?c:0.5>e/n?c/2:1-c/2}else this.ratio=this._ease.getRatio(e/n);if(this._time!==i||a){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!a&&this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=i,this._rawPrevTime=o,M.push(this),void(this._lazy=[e,t]);this._time&&!s?this.ratio=this._ease.getRatio(this._time/n):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(!1!==this._lazy&&(this._lazy=!1),this._active||this._paused||this._time===i||!(0<=e)||(this._active=!0),0===i&&(this._startAt&&(0<=e?this._startAt.render(e,!0,a):!l&&(l="_dummyGS")),this.vars.onStart&&(0!==this._time||0===n)&&!t&&this._callback("onStart")),_=this._firstPT;_;)_.f?_.t[_.p](_.c*this.ratio+_.s):_.t[_.p]=_.c*this.ratio+_.s,_=_._next;this._onUpdate&&(0>e&&this._startAt&&-1e-4!==e&&this._startAt.render(e,!0,a),!t&&(this._time!==i||s||a)&&this._callback("onUpdate")),l&&(!this._gc||a)&&(0>e&&this._startAt&&!this._onUpdate&&-1e-4!==e&&this._startAt.render(e,!0,a),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!t&&this.vars[l]&&this._callback(l),0===n&&this._rawPrevTime===d&&p!==d&&(this._rawPrevTime=0))}},i._kill=function(e,t,a){if("all"===e&&(e=null),null==e&&(null==t||t===this.target))return this._lazy=!1,this._enabled(!1,!1);t="string"==typeof t?z.selector(t)||t:t||this._targets||this.target;var n=a&&this._time&&a._startTime===this._startTime&&this._timeline===a._timeline,r,i,o,s,l,d,_,p,c;if((g(t)||N(t))&&"number"!=typeof t[0])for(r=t.length;-1<--r;)this._kill(e,t[r],a)&&(d=!0);else{if(this._targets){for(r=this._targets.length;-1<--r;)if(t===this._targets[r]){l=this._propLookup[r]||{},this._overwrittenProps=this._overwrittenProps||[],i=this._overwrittenProps[r]=e?this._overwrittenProps[r]||{}:"all";break}}else{if(t!==this.target)return!1;l=this._propLookup,i=this._overwrittenProps=e?this._overwrittenProps||{}:"all"}if(l){if(_=e||l,p=e!==i&&"all"!==i&&e!==l&&("object"!=typeof e||!e._tempKill),a&&(z.onOverwrite||this.vars.onOverwrite)){for(o in _)l[o]&&(c||(c=[]),c.push(o));if((c||!e)&&!ae(this,a,t,c))return!1}for(o in _)(s=l[o])&&(n&&(s.f?s.t[s.p](s.s):s.t[s.p]=s.s,d=!0),s.pg&&s.t._kill(_)&&(d=!0),(!s.pg||0===s.t._overwriteProps.length)&&(s._prev?s._prev._next=s._next:s===this._firstPT&&(this._firstPT=s._next),s._next&&(s._next._prev=s._prev),s._next=s._prev=null),delete l[o]),p&&(i[o]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return d},i.invalidate=function(){return this._notifyPluginsOfEnabled&&z._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],D.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-d,this.render(p(0,-this._delay))),this},i._enabled=function(e,t){if(x||T.wake(),e&&this._gc){var a=this._targets,n;if(a)for(n=a.length;-1<--n;)this._siblings[n]=te(a[n],this,!0);else this._siblings=te(this.target,this,!0)}return D.prototype._enabled.call(this,e,t),this._notifyPluginsOfEnabled&&this._firstPT&&z._onPluginEvent(e?"_onEnable":"_onDisable",this)},z.to=function(e,t,a){return new z(e,t,a)},z.from=function(e,t,a){return a.runBackwards=!0,a.immediateRender=!1!=a.immediateRender,new z(e,t,a)},z.fromTo=function(e,t,a,i){return i.startAt=a,i.immediateRender=!1!=i.immediateRender&&!1!=a.immediateRender,new z(e,t,i)},z.delayedCall=function(e,t,a,i,n){return new z(t,0,{delay:e,onComplete:t,onCompleteParams:a,callbackScope:i,onReverseComplete:t,onReverseCompleteParams:a,immediateRender:!1,lazy:!1,useFrames:n,overwrite:0})},z.set=function(e,t){return new z(e,0,t)},z.getTweensOf=function(e,n){if(null==e)return[];e="string"==typeof e?z.selector(e)||e:e;var r,i,a,o;if((g(e)||N(e))&&"number"!=typeof e[0]){for(r=e.length,i=[];-1<--r;)i=i.concat(z.getTweensOf(e[r],n));for(r=i.length;-1<--r;)for(o=i[r],a=r;-1<--a;)o===i[a]&&i.splice(r,1)}else if(e._gsTweenID)for(i=te(e).concat(),r=i.length;-1<--r;)(i[r]._gc||n&&!i[r].isActive())&&i.splice(r,1);return i||[]},z.killTweensOf=z.killDelayedCallsTo=function(e,t,n){"object"==typeof t&&(n=t,t=!1);for(var r=z.getTweensOf(e,t),a=r.length;-1<--a;)r[a]._kill(n,e)};var re=v("plugins.TweenPlugin",function(e,t){this._overwriteProps=(e||"").split(","),this._propName=this._overwriteProps[0],this._priority=t||0,this._super=re.prototype},!0);if(i=re.prototype,re.version="1.19.0",re.API=2,i._firstPT=null,i._addTween=V,i.setRatio=X,i._kill=function(e){var t=this._overwriteProps,a=this._firstPT,n;if(null!=e[this._propName])this._overwriteProps=[];else for(n=t.length;-1<--n;)null!=e[t[n]]&&t.splice(n,1);for(;a;)null!=e[a.n]&&(a._next&&(a._next._prev=a._prev),a._prev?(a._prev._next=a._next,a._prev=null):this._firstPT===a&&(this._firstPT=a._next)),a=a._next;return!1},i._mod=i._roundProps=function(e){for(var t=this._firstPT,a;t;)a=e[this._propName]||null!=t.n&&e[t.n.split(this._propName+"_").join("")],a&&"function"==typeof a&&(2===t.f?t.t._applyPT.m=a:t.m=a),t=t._next},z._onPluginEvent=function(e,t){var a=t._firstPT,i,n,r,o,s;if("_onInitAllProps"===e){for(;a;){for(s=a._next,n=r;n&&n.pr>a.pr;)n=n._next;(a._prev=n?n._prev:o)?a._prev._next=a:r=a,(a._next=n)?n._prev=a:o=a,a=s}a=t._firstPT=r}for(;a;)a.pg&&"function"==typeof a.t[e]&&a.t[e]()&&(i=!0),a=a._next;return i},re.activate=function(e){for(var t=e.length;-1<--t;)e[t].API===re.API&&(G[new e[t]()._propName]=e[t]);return!0},y.plugin=function(e){if(!e||!e.propName||!e.init||!e.API)throw"illegal plugin definition.";var t=e.propName,a=e.priority||0,i=e.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},r=v("plugins."+t.charAt(0).toUpperCase()+t.substr(1)+"Plugin",function(){re.call(this,t,a),this._overwriteProps=i||[]},!0===e.global),o=r.prototype=new re(t),s;for(s in o.constructor=r,r.API=e.API,n)"function"==typeof e[s]&&(o[n[s]]=e[s]);return r.version=e.version,re.activate([r]),r},b=t._gsQueue,b){for(a=0;a<b.length;a++)b[a]();for(i in f)f[i].func||t.console.log("GSAP encountered missing dependency: "+i)}x=!1}}("undefined"!=typeof c&&c.exports&&"undefined"!=typeof m?m:s||window,"TweenMax")}),s.register("a",["b","c","d"],function(){"use strict";return{setters:[function(){},function(){},function(){}],execute:function(){function i(e){let t=e.toString(16);return 1==t.length?"0"+t:t}function s(e,t,a){return"#"+i(Oe(255*e))+i(Oe(255*t))+i(Oe(255*a))}function c(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16)/255,g:parseInt(t[2],16)/255,b:parseInt(t[3],16)/255}:null}function m(e,t){if("string"==typeof e)return t;let a=c(t);return void 0===e.r?void 0===e.x?[e[0],e[1],e[2]]=[a.r,a.g,a.b]:[e.x,e.y,e.z]=[a.r,a.g,a.b]:Object.assign(e,a),e}function u(e){return"string"==typeof e?e:s(e.r===void 0?e.x===void 0?e[0]:e.x:e.r,e.g===void 0?e.y===void 0?e[1]:e.y:e.g,e.b===void 0?e.z===void 0?e[2]:e.z:e.b)}function g(e){return`${e.toLowerCase().replace(/[^\w-]/g,"")}`}function f(){let e=new st(2);return e[0]=0,e[1]=0,e}function h(e,t){return e[0]=t[0],e[1]=t[1],e}function v(e,t,a){return e[0]=t,e[1]=a,e}function y(e,t,a){return e[0]=t[0]+a[0],e[1]=t[1]+a[1],e}function b(e,t,a){return e[0]=t[0]-a[0],e[1]=t[1]-a[1],e}function T(e,t,a){return e[0]=t[0]*a,e[1]=t[1]*a,e}function x(e){var t=e[0],a=e[1];return o(t*t+a*a)}function w(e){var t=e[0],a=e[1];return t*t+a*a}function P(e,t){return e[0]=-t[0],e[1]=-t[1],e}function S(e,t){var a=t[0],i=t[1],n=a*a+i*i;return 0<n&&(n=1/o(n),e[0]=t[0]*n,e[1]=t[1]*n),e}function C(e,t){return e[0]*t[0]+e[1]*t[1]}function k(e,t,a){var i=t[0]*a[1]-t[1]*a[0];return e[0]=e[1]=0,e[2]=i,e}function E(e,i,a,n){var t=i[0],r=i[1];return e[0]=t+n*(a[0]-t),e[1]=r+n*(a[1]-r),e}function R(e,t,a){var i=t[0],n=t[1];return e[0]=a[0]*i+a[3]*n+a[6],e[1]=a[1]*i+a[4]*n+a[7],e}function A(e,t,a){let i=t[0],n=t[1];return e[0]=a[0]*i+a[4]*n+a[12],e[1]=a[1]*i+a[5]*n+a[13],e}function O(e,t){return e[0]===t[0]&&e[1]===t[1]}function D(){let e=new st(3);return e[0]=0,e[1]=0,e[2]=0,e}function L(e){let t=e[0],a=e[1],i=e[2];return o(t*t+a*a+i*i)}function B(e,t,a){let i=new st(3);return i[0]=e,i[1]=t,i[2]=a,i}function z(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function N(e,t,a,i){return e[0]=t,e[1]=a,e[2]=i,e}function I(e,t,a){return e[0]=t[0]+a[0],e[1]=t[1]+a[1],e[2]=t[2]+a[2],e}function M(e,t,a){return e[0]=t[0]-a[0],e[1]=t[1]-a[1],e[2]=t[2]-a[2],e}function j(e,t,a){return e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a,e}function F(e){let t=e[0],a=e[1],i=e[2];return t*t+a*a+i*i}function U(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}function X(e,t){let a=t[0],i=t[1],n=t[2],r=a*a+i*i+n*n;return 0<r&&(r=1/o(r),e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r),e}function Y(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function V(e,t,a){let i=t[0],n=t[1],r=t[2],o=a[0],s=a[1],l=a[2];return e[0]=n*l-r*s,e[1]=r*o-i*l,e[2]=i*s-n*o,e}function H(e,t,a){let i=t[0],n=t[1],r=t[2],o=a[3]*i+a[7]*n+a[11]*r+a[15];return o=o||1,e[0]=(a[0]*i+a[4]*n+a[8]*r+a[12])/o,e[1]=(a[1]*i+a[5]*n+a[9]*r+a[13])/o,e[2]=(a[2]*i+a[6]*n+a[10]*r+a[14])/o,e}function G(e,t){let a=B(e[0],e[1],e[2]),i=B(t[0],t[1],t[2]);X(a,a),X(i,i);let n=Y(a,i);return 1<n?0:-1>n?l:Ae(n)}function W(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function q(){let e=new st(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e}function Q(e,t,a,i,n){return e[0]=t,e[1]=a,e[2]=i,e[3]=n,e}function Z(){let e=new st(9);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}function K(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e}function $(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function J(e,t,a,i,n,r,o,s,l,d){return e[0]=t,e[1]=a,e[2]=i,e[3]=n,e[4]=r,e[5]=o,e[6]=s,e[7]=l,e[8]=d,e}function ee(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}function te(e,t){let a=t[0],i=t[1],n=t[2],r=t[3],o=t[4],s=t[5],l=t[6],d=t[7],_=t[8],p=_*o-s*d,c=-_*r+s*l,m=d*r-o*l,u=a*p+i*c+n*m;return u?(u=1/u,e[0]=p*u,e[1]=(-_*i+n*d)*u,e[2]=(s*i-n*o)*u,e[3]=c*u,e[4]=(_*a-n*l)*u,e[5]=(-s*a+n*r)*u,e[6]=m*u,e[7]=(-d*a+i*l)*u,e[8]=(o*a-i*r)*u,e):null}function ae(e,t,a){let i=t[0],n=t[1],r=t[2],o=t[3],s=t[4],l=t[5],d=t[6],_=t[7],p=t[8],c=a[0],m=a[1],u=a[2],g=a[3],f=a[4],h=a[5],y=a[6],v=a[7],b=a[8];return e[0]=c*i+m*o+u*d,e[1]=c*n+m*s+u*_,e[2]=c*r+m*l+u*p,e[3]=g*i+f*o+h*d,e[4]=g*n+f*s+h*_,e[5]=g*r+f*l+h*p,e[6]=y*i+v*o+b*d,e[7]=y*n+v*s+b*_,e[8]=y*r+v*l+b*p,e}function ie(e,t,a){let i=t[0],n=t[1],r=t[2],o=t[3],s=t[4],l=t[5],d=t[6],_=t[7],p=t[8],c=a[0],m=a[1];return e[0]=i,e[1]=n,e[2]=r,e[3]=o,e[4]=s,e[5]=l,e[6]=c*i+m*o+d,e[7]=c*n+m*s+_,e[8]=c*r+m*l+p,e}function ne(e,t,a){let i=t[0],o=t[1],l=t[2],d=t[3],_=t[4],p=t[5],m=t[6],u=t[7],g=t[8],f=n(a),s=r(a);return e[0]=s*i+f*d,e[1]=s*o+f*_,e[2]=s*l+f*p,e[3]=s*d-f*i,e[4]=s*_-f*o,e[5]=s*p-f*l,e[6]=m,e[7]=u,e[8]=g,e}function re(e,t,a){let i=a[0],n=a[1];return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=n*t[3],e[4]=n*t[4],e[5]=n*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function oe(e,t){let a=t[0],i=t[1],n=t[2],r=t[3],o=a+a,s=i+i,l=n+n,d=a*o,_=i*o,p=i*s,c=n*o,m=n*s,u=n*l,g=r*o,f=r*s,h=r*l;return e[0]=1-p-u,e[3]=_-h,e[6]=c+f,e[1]=_+h,e[4]=1-d-u,e[7]=m-g,e[2]=c-f,e[5]=m+g,e[8]=1-d-p,e}function se(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function le(e,t,a,i,n,r,o,s,l,d,_,p,c,m,u,g,f){return e[0]=t,e[1]=a,e[2]=i,e[3]=n,e[4]=r,e[5]=o,e[6]=s,e[7]=l,e[8]=d,e[9]=_,e[10]=p,e[11]=c,e[12]=m,e[13]=u,e[14]=g,e[15]=f,e}function de(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function _e(e,t){let a=t[0],i=t[1],n=t[2],r=t[3],o=t[4],s=t[5],l=t[6],d=t[7],_=t[8],p=t[9],c=t[10],m=t[11],u=t[12],g=t[13],f=t[14],h=t[15],y=a*s-i*o,v=a*l-n*o,b=a*d-r*o,T=i*l-n*s,x=i*d-r*s,w=n*d-r*l,P=_*g-p*u,S=_*f-c*u,C=_*h-m*u,k=p*f-c*g,E=p*h-m*g,R=c*h-m*f,A=y*R-v*E+b*k+T*C-x*S+w*P;return A?(A=1/A,e[0]=(s*R-l*E+d*k)*A,e[1]=(n*E-i*R-r*k)*A,e[2]=(g*w-f*x+h*T)*A,e[3]=(c*x-p*w-m*T)*A,e[4]=(l*C-o*R-d*S)*A,e[5]=(a*R-n*C+r*S)*A,e[6]=(f*b-u*w-h*v)*A,e[7]=(_*w-c*b+m*v)*A,e[8]=(o*E-s*C+d*P)*A,e[9]=(i*C-a*E-r*P)*A,e[10]=(u*x-g*b+h*y)*A,e[11]=(p*b-_*x-m*y)*A,e[12]=(s*S-o*k-l*P)*A,e[13]=(a*k-i*S+n*P)*A,e[14]=(g*v-u*T-f*y)*A,e[15]=(_*T-p*v+c*y)*A,e):null}function pe(e,t,a){let i=t[0],n=t[1],r=t[2],o=t[3],s=t[4],l=t[5],d=t[6],_=t[7],p=t[8],c=t[9],m=t[10],u=t[11],g=t[12],f=t[13],h=t[14],y=t[15],v=a[0],b=a[1],T=a[2],x=a[3];return e[0]=v*i+b*s+T*p+x*g,e[1]=v*n+b*l+T*c+x*f,e[2]=v*r+b*d+T*m+x*h,e[3]=v*o+b*_+T*u+x*y,v=a[4],b=a[5],T=a[6],x=a[7],e[4]=v*i+b*s+T*p+x*g,e[5]=v*n+b*l+T*c+x*f,e[6]=v*r+b*d+T*m+x*h,e[7]=v*o+b*_+T*u+x*y,v=a[8],b=a[9],T=a[10],x=a[11],e[8]=v*i+b*s+T*p+x*g,e[9]=v*n+b*l+T*c+x*f,e[10]=v*r+b*d+T*m+x*h,e[11]=v*o+b*_+T*u+x*y,v=a[12],b=a[13],T=a[14],x=a[15],e[12]=v*i+b*s+T*p+x*g,e[13]=v*n+b*l+T*c+x*f,e[14]=v*r+b*d+T*m+x*h,e[15]=v*o+b*_+T*u+x*y,e}function ce(e,t,a){let i=a[0],n=a[1],r=a[2],o,s,l,d,_,p,c,m,u,g,f,h;return t===e?(e[12]=t[0]*i+t[4]*n+t[8]*r+t[12],e[13]=t[1]*i+t[5]*n+t[9]*r+t[13],e[14]=t[2]*i+t[6]*n+t[10]*r+t[14],e[15]=t[3]*i+t[7]*n+t[11]*r+t[15]):(o=t[0],s=t[1],l=t[2],d=t[3],_=t[4],p=t[5],c=t[6],m=t[7],u=t[8],g=t[9],f=t[10],h=t[11],e[0]=o,e[1]=s,e[2]=l,e[3]=d,e[4]=_,e[5]=p,e[6]=c,e[7]=m,e[8]=u,e[9]=g,e[10]=f,e[11]=h,e[12]=o*i+_*n+u*r+t[12],e[13]=s*i+p*n+g*r+t[13],e[14]=l*i+c*n+f*r+t[14],e[15]=d*i+m*n+h*r+t[15]),e}function me(e,t,a){let i=a[0],n=a[1],r=a[2];return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=t[3]*i,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*r,e[9]=t[9]*r,e[10]=t[10]*r,e[11]=t[11]*r,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function ue(e,t,a){let i=n(a),o=r(a),s=t[4],l=t[5],d=t[6],_=t[7],p=t[8],c=t[9],m=t[10],u=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=s*o+p*i,e[5]=l*o+c*i,e[6]=d*o+m*i,e[7]=_*o+u*i,e[8]=p*o-s*i,e[9]=c*o-l*i,e[10]=m*o-d*i,e[11]=u*o-_*i,e}function ge(e,t,a){let i=n(a),o=r(a),s=t[0],l=t[1],d=t[2],_=t[3],p=t[8],c=t[9],m=t[10],u=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=s*o-p*i,e[1]=l*o-c*i,e[2]=d*o-m*i,e[3]=_*o-u*i,e[8]=s*i+p*o,e[9]=l*i+c*o,e[10]=d*i+m*o,e[11]=_*i+u*o,e}function fe(e,t,a){let i=n(a),o=r(a),s=t[0],l=t[1],d=t[2],_=t[3],p=t[4],c=t[5],m=t[6],u=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=s*o+p*i,e[1]=l*o+c*i,e[2]=d*o+m*i,e[3]=_*o+u*i,e[4]=p*o-s*i,e[5]=c*o-l*i,e[6]=m*o-d*i,e[7]=u*o-_*i,e}function he(e,t){let a=t[0],i=t[1],n=t[2],r=t[3],o=a+a,s=i+i,l=n+n,d=a*o,_=i*o,p=i*s,c=n*o,m=n*s,u=n*l,g=r*o,f=r*s,h=r*l;return e[0]=1-p-u,e[1]=_+h,e[2]=c-f,e[3]=0,e[4]=_-h,e[5]=1-d-u,e[6]=m+g,e[7]=0,e[8]=c+f,e[9]=m-g,e[10]=1-d-p,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function ye(e,t,i,n,r){let o=1/a(t/2),s=1/(n-r);return e[0]=o/i,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=o,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(r+n)*s,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*r*n*s,e[15]=0,e}function ve(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:null}function be(){let e=new st(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e}function Te(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e}function xe(e,t,a){a*=0.5;let i=n(a);return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=r(a),e}function we(e,t,a){let i=t[0],n=t[1],r=t[2],o=t[3],s=a[0],l=a[1],d=a[2],_=a[3];return e[0]=i*_+o*s+n*d-r*l,e[1]=n*_+o*l+r*s-i*d,e[2]=r*_+o*d+i*l-n*s,e[3]=o*_-i*s-n*l-r*d,e}function Pe(e,t,a){a*=0.5;let i=t[0],o=t[1],s=t[2],l=t[3],d=n(a),_=r(a);return e[0]=i*_+l*d,e[1]=o*_+s*d,e[2]=s*_-o*d,e[3]=l*_-i*d,e}function Se(e,t,a){a*=0.5;let i=t[0],o=t[1],s=t[2],l=t[3],d=n(a),_=r(a);return e[0]=i*_-s*d,e[1]=o*_+l*d,e[2]=s*_+i*d,e[3]=l*_-o*d,e}function Ce(e,t,a){a*=0.5;let i=t[0],o=t[1],s=t[2],l=t[3],d=n(a),_=r(a);return e[0]=i*_+o*d,e[1]=o*_-i*d,e[2]=s*_+l*d,e[3]=l*_-s*d,e}function ke(e,i,a,r){let t=i[0],o=i[1],s=i[2],l=i[3],d=a[0],_=a[1],p=a[2],c=a[3],m,u,g,f,h;return u=t*d+o*_+s*p+l*c,0>u&&(u=-u,d=-d,_=-_,p=-p,c=-c),1e-6<1-u?(m=Ae(u),g=n(m),f=n((1-r)*m)/g,h=n(r*m)/g):(f=1-r,h=r),e[0]=f*t+h*d,e[1]=f*o+h*_,e[2]=f*s+h*p,e[3]=f*l+h*c,e}function Ee(e,t){let a=t[0],i=t[1],n=t[2],r=t[3],o=a*a+i*i+n*n+r*r,s=o?1/o:0;return e[0]=-a*s,e[1]=-i*s,e[2]=-n*s,e[3]=r*s,e}function Re(e,t){let a=t[0]+t[4]+t[8],n;if(0<a)n=o(a+1),e[3]=0.5*n,n=0.5/n,e[0]=(t[5]-t[7])*n,e[1]=(t[6]-t[2])*n,e[2]=(t[1]-t[3])*n;else{let a=0;t[4]>t[0]&&(a=1),t[8]>t[3*a+a]&&(a=2);let i=(a+1)%3,r=(a+2)%3;n=o(t[3*a+a]-t[3*i+i]-t[3*r+r]+1),e[a]=0.5*n,n=0.5/n,e[3]=(t[3*i+r]-t[3*r+i])*n,e[i]=(t[3*i+a]+t[3*a+i])*n,e[r]=(t[3*r+a]+t[3*a+r])*n}return e}var Ae=Math.acos,Oe=Math.floor;let De="";const Le=new Map,Be=new Map,ze=new Map([["text",new Set(["txt","html","css","js","svg"])],["json",new Set(["json"])],["binary",new Set(["bin"])]]);class Ne{static get onLoad(){return Promise.all(Le.values())}static get promises(){return Le}static get typeMap(){return ze}static get(e){return Be.get(e)}static get baseURI(){return De}static set baseURI(e){De=e}static load(e){const t=e instanceof Array;t||(e=[e]);let a=[];for(let t of e){if(!t)continue;let e=new Promise(function(e){if(Le.get(t))return void Le.get(t).then(e);if(Ne.get(t))return void e(Ne.get(t));let a=(a)=>{Le.delete(t),Be.set(t,a),e(a)},i;if("string"==typeof t){let e=/[\\/](.*)\.(.*)$/.exec(t)[2];if(/\.(png|jpg|gif)$/.test(t))i=document.createElement("img");else if(/\.(mp4|webm)$/.test(t))i=document.createElement("video");else if(/\.(mp3|ogg)$/.test(t))i=document.createElement("audio");else if(/\.(woff|woff2|ttf)$/.test(t)){let e=new FontFace(/([^\/]*)\.(woff|woff2|ttf)$/.exec(t)[1],`url("${t}")`);e.load().then(a),document.fonts.add(e)}else fetch(`${De}${t}`).then((t)=>{let a;return a=Ne.typeMap.get("json").has(e)?"json":Ne.typeMap.get("binary").has(e)?"arrayBuffer":Ne.typeMap.get("text").has(e)?"text":"blob",t[a]()}).then(a)}if(t instanceof HTMLElement&&(i=t),i){const e=`${De}${i.src||t}`,n=()=>{i.removeEventListener("canplaythrough",n),i.removeEventListener("load",n),a(i)};i.play?fetch(e).then(()=>{if(i.addEventListener("canplaythrough",n),i.play(),!i.autoplay){let e=function(){i.pause(),i.removeEventListener("playing",e)};i.addEventListener("playing",e)}}):i.addEventListener("load",n),i.src=e}});a.push(e),Le.set(t,e)}return t?Promise.all(a):a[0]}}let Ie=new Set,Me=new Map,je=!1,Fe=!1,Ue=!0;const Xe=/mobi/.test(window.navigator.userAgent.toLowerCase());if(Xe){Ue=!1;let e=()=>{window.removeEventListener("touchend",e);for(let e of Ie)if(e._audio.play(),!e._audio.autoplay){let t=function(){e._audio.pause(),e._audio.removeEventListener("playing",t)};e._audio.addEventListener("playing",t)}Ue=!0};window.addEventListener("touchend",e)}class Ye{static set muted(e){je=e;for(let t of Ie)t.muted=t.muted}static get muted(){return je}static set loopMuted(e){Fe=e;for(let t of Ie)t.muted=t.muted}static get loopMuted(){return Fe}static add(e){let t=new Ye(e);return t}static get(e){return Me.get(e)}constructor({src:e,name:t=/([^\\\/]*)\..*$/.exec(e)[1],amplification:a=1,volume:i=1,loop:n=!1,autoplay:r=!1}={}){this.name=t,Ie.add(this),this.name&&Me.set(this.name,this),this._audio=document.createElement("audio"),this._audio.src=e,this.amplification=a,this.volume=i,this.loop=n,this.autoplay=r,this.muted=je}get src(){return this._audio.src}set src(e){this._audio.src=e}get muted(){return this._muted}set muted(e){this._muted=e,this._audio.muted=je||Fe&&this.loop||e}get paused(){return this._audio.paused}get loop(){return this._audio.loop}set loop(e){this.muted=this.muted,this._audio.loop=e}get currentTime(){return this._audio.currentTime}set currentTime(e){this._audio.currentTime=e}get autoplay(){return this._audio.autoplay}set autoplay(e){this._audio.autoplay=e}get duration(){return this._audio.duration}set duration(e){this._audio.duration=e}get volume(){return this._volume}set volume(e){this._volume=e,this._audio.volume=this._volume*this.amplification}play(){Ue&&this._audio.play()}stop(){this.currentTime=0,this.pause()}pause(){this._audio.pause()}cloneNode(){let e=new Ye(this.src,{name:null,volume:this.volume,amplification:this.amplification});return e.muted=this.muted,e.loop=this.loop,e.currentTime=this.currentTime,e}}Ye.muted=/\bmuted\b/.test(window.location.search),Ye.loopMuted=/\bloopmuted\b/.test(window.location.search);class Ve extends Set{constructor(){super(),this._onceCallbacks=new Set}add(e,{once:t=!1}={}){t&&this._onceCallbacks.add(e),super.add(e)}dispatch(e){for(let t of this)t(e),this._onceCallbacks.has(t)&&(this._onceCallbacks.delete(t),this.delete(t))}}var He=new class extends Ve{constructor(){super(),this._updateBinded=this.update.bind(this),this._previousTimestamp=0,this.deltaTime=0,this.timeScale=1,this.update()}update(e){requestAnimationFrame(this._updateBinded);let t=window.performance?window.performance.now():Date.now();this.deltaTime=.001*(t-this._previousTimestamp),this.timeScale=this.deltaTime/.0166666667,this._previousTimestamp=t,this.dispatch(e)}};class Ge extends HTMLElement{constructor({autoplay:e=!0,background:t=!1}={}){super(),this._autoplay=e||this.hasAttribute("autoplay"),this._background=t||this.hasAttribute("background"),this.paused=!0,this._pausedByBlur=!0,this._updateBinded=this.update.bind(this)}connectedCallback(){this._background||(window.addEventListener("blur",this._onBlur=()=>{this._pausedByBlur=!this.paused,this.pause()}),window.addEventListener("focus",this._onFocus=()=>{this._pausedByBlur&&this.play()})),document.hasFocus()&&this._autoplay?this.play():this._pausedByBlur=this._autoplay}disconnectedCallback(){this.pause(),window.removeEventListener("blur",this._onBlur),window.removeEventListener("focus",this._onFocus)}play(){this.paused=!1,this._pausedByBlur=!1,He.add(this._updateBinded),this.dispatchEvent(new Event("playing"))}pause(){this.paused=!0,He.delete(this._updateBinded),this.dispatchEvent(new Event("pause"))}update(){}}window.customElements.define("dlib-loop",Ge);const We=new Map;class qe extends window.WebSocket{constructor(){super(...arguments),We.set(this,[]);const e=()=>{this.removeEventListener("open",e);for(let e of We.get(this))this.send(e);We.delete(this)};this.addEventListener("open",e)}send(e){this.readyState===qe.CONNECTING?We.get(this).push(e):super.send(e)}}let Qe=new Set,Ze=new Ve,Ke=new Ve;class $e{static get LEFT(){return 37}static get RIGHT(){return 39}static get UP(){return 38}static get DOWN(){return 40}static get SPACE(){return 32}static get SHIFT(){return 16}static hasKeyDown(e){return Qe.has(e)}static addEventListener(e,t){"keydown"===e?Ze.add(t):"keyup"===e&&Ke.add(t)}static removeEventListener(e,t){"keydown"===e?Ze.delete(t):"keyup"===e&&Ke.delete(t)}}window.addEventListener("keydown",(t)=>{$e.hasKeyDown(t.keyCode)||Ze.dispatch(t),Qe.add(t.keyCode)}),window.addEventListener("keyup",(t)=>{Qe.delete(t.keyCode),Ke.dispatch(t)});let Je=document.createElement("style");document.head.appendChild(Je),Je.sheet.insertRule(`
  dlib-guiinput {
    display: flex;
    position: relative;
    font-family: monospace;
    font-size: 12px;
    align-items: center;
    height: 20px;
  }
`,0),Je.sheet.insertRule(`
  dlib-guiinput * {
    outline: none;
  }
`,0),Je.sheet.insertRule(`
  dlib-guiinput label, dlib-guiinput input, dlib-guiinput select, dlib-gui textarea {
    display: flex;
    font-family: inherit;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 5px;
  }
`,0),Je.sheet.insertRule(`
  dlib-guiinput label {
    flex: 1;
    min-width: 25%;
  }
`,0),Je.sheet.insertRule(`
  dlib-guiinput label span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,0),Je.sheet.insertRule(`
  dlib-guiinput button.clear {
    cursor: pointer;
    font-family: inherit;
    -webkit-appearance: none;
    border: none;
    font-size: 1em;
    padding: 0 5px;
    box-sizing: border-box;
    background: transparent;
    color: inherit;
  }
`,0),Je.sheet.insertRule(`
  dlib-guiinput input, dlib-guiinput select, dlib-gui textarea {
    flex: 5;
  }
`,0),Je.sheet.insertRule(`
  dlib-guiinput input.range {
    flex: 2;
  }
`,0),Je.sheet.insertRule(`
  dlib-guiinput input[type="range"] {
    flex: 3.5;
  }
`,0),Je.sheet.insertRule(`
  dlib-guiinput input.color {
    flex: 3.5;
  }
`,0);const et=(e,t)=>_(e*(1/t))/(1/t);class tt extends HTMLElement{constructor(){super(),this._object=null,this._key="",this._type="",this._label="",this._inputs=[],this._options=[],this._step=0.01,this._min=0,this._max=Infinity,this._initialValue=void 0,this._onChangeBinded=this._onChange.bind(this),this._onClearBinded=this._onClear.bind(this)}set value(e){this.object[this.key]=e,this.update()}get value(){return this.object[this.key]}set object(e){this._object=e,this._updateHTML()}get object(){return this._object}set key(e){this._key=e,this._updateHTML()}get key(){return this._key}set type(e){this._type=e,this._updateHTML()}get type(){return this._type}set label(e){this._label=e,this._updateHTML()}get label(){return this._label}set step(e){this._step=e;for(let t of this._inputs)t.step=this._step;this.min=this.min,this.max=this.max}get step(){return this._step}set min(e){this._min=et(e,this.step);for(let t of this._inputs)t.min=this._min}get min(){return this._min}set max(e){this._max=et(e,this.step);for(let t of this._inputs)t.max=this._max}get max(){return this._max}set options(e){if(this._options=e,this._inputs[0]&&"SELECT"===this._inputs[0].tagName){this._inputs[0].options.length=0;for(let e of this._options){let t=document.createElement("option");t.value=e,t.innerText=e,t.selected=e===this.value,this._inputs[0].appendChild(t)}}}get options(){return this._options}update(){if("button"===this.type)return;let e=!1;for(let a of this._inputs){let i="checkbox"===a.type?"checked":"value",n=this.value;n="range"===a.type?p(t(n,this.min),this.max):n,n="checkbox"===a.type?n:n.toString(),n!==a[i]&&(a[i]=n,e=!0)}e&&this.dispatchEvent(new Event("change"))}_onChange(t){if(t.target instanceof HTMLInputElement&&"checkbox"===t.target.type)this.value=t.target.checked;else if("range"===t.target.type||"number"===t.target.type){if(t.target.valueAsNumber===void 0)return;this.value=t.target.valueAsNumber}else"button"===t.target.type?this.value():"color"===t.target.type?"change"===t.type&&(this.value=t.target.value):this.value=t.target.value}_onClear(){this.value=this._initialValue}_updateHTML(){if(this.object&&this.key&&this.type){if(void 0===this._initialValue&&(this._initialValue=this.value),this.removeEventListener("input",this._onChangeBinded),this.removeEventListener("change",this._onChangeBinded),this.removeEventListener("click",this._onChangeBinded),this.querySelector(".clear")&&this.querySelector(".clear").removeEventListener("click",this._onClearBinded),this.innerHTML=`
      <label title="${this.label}"><span>${this.label}</span></label>
      ${"select"===this.type?"<select></select>":"text"===this.type?`<textarea rows="1"></textarea>`:`<input type="${this.type}"/>`}
      ${"range"===this.type?"<input class=\"range\" type=\"number\"/>":""}
      ${"color"===this.type?"<input class=\"color\" type=\"text\"/>":""}
      <button class="clear">✕</button>
    `,this._inputs=[...this.querySelectorAll("input, select, textarea")],"range"===this.type){let t=e(10,d(parseInt(this.value)).toString().length);this.max=this.max===Infinity?0>this.value?0:1>d(this.value)?1:t:this.max,this.min=this.min||(0<=this.value?0:1>d(this.value)?-1:-t)}else"button"===this.type?this._inputs[0].value=this.label:"select"===this.type&&(this.options=this.options);this.step=this.step,this.querySelector(".clear").addEventListener("click",this._onClearBinded),"button"===this.type?this.addEventListener("click",this._onChangeBinded):(this.addEventListener("input",this._onChangeBinded),this.addEventListener("change",this._onChangeBinded)),this.update()}}}window.customElements.define("dlib-guiinput",tt);let at=document.createElement("style"),it;document.head.appendChild(at),at.sheet.insertRule(`
  dlib-gui {
    display: block;
    position: absolute;
    resize: horizontal;
    top: 0;
    left: 0;
    width: 300px;
    max-width: 100%;
    padding: 5px;
    color: white;
    font-family: monospace;
    max-height: 100%;
    box-sizing: border-box;
    overflow: auto;
  }
`,0),at.sheet.insertRule(`
  dlib-gui dlib-guiinput {
    margin: 5px 0;
  }
`,0),at.sheet.insertRule(`
  dlib-gui details details {
    margin: 10px;
  }
`,0),at.sheet.insertRule(`
  dlib-gui details summary {
    cursor: pointer;
  }
`,0),at.sheet.insertRule(`
  dlib-gui details summary:focus {
    outline: none;
  }
`,0);const nt=/([#&]gui=)((%7B|{).*(%7D|}))([&?]*)/;let rt={};(function(){let e=nt.exec(window.location.hash);if(e){let t=e[2];t=t.replace(/”|%E2%80%9D/g,"%22"),window.location.hash=window.location.hash.replace(nt,`$1${t}$5`),rt=JSON.parse(decodeURI(t)),console.log("GUI data:",rt)}})();class ot extends HTMLElement{static _addStatic(){it||(it=document.createElement("dlib-gui"),document.body.appendChild(it))}static add(...e){return ot._addStatic(),it.add(...e)}static get element(){return it}static get data(){return rt}static set visible(e){ot._addStatic(),it.visible=e}static get visible(){return it.visible}static set open(e){ot._addStatic(),it.open=e}static get groups(){return it.groups}static get open(){return it.open}static get update(){return it.update}static set serverUrl(e){ot._addStatic(),it.serverUrl=e}constructor({serverUrl:e}={}){super(),this.serverUrl=e,this.groups=new Map,this._inputs=new Map,this._uids=new Set,this._container=document.createElement("details"),this._container.innerHTML="<summary>GUI</summary>",this.open=!0}set serverUrl(e){this._serverUrl=e,this._webSocket&&(this._webSocket.removeEventListener("message",this._onWebSocketMessage),this._webSocket.close(),this._webSocket=null);this._serverUrl&&(this._webSocket=new qe(this._serverUrl),this._onWebSocketMessage=(t)=>{let e=JSON.parse(t.data),a=this._inputs.get(e.uid);a._client&&("button"===a.type?a.value():a.value=e.value)},this._webSocket.addEventListener("message",this._onWebSocketMessage))}get serverUrl(){return this._serverUrl}set visible(e){this.style.display=e?"":"none"}get visible(){return"visible"===this.style.visibility}update(){for(let e of this._inputs.values())e.update()}set open(e){this._container.open=e}get open(){return this._container.open}add(e,t,{type:a,label:s=t,id:l=s,group:d="",reload:_=!1,remote:p=!1,client:c=p,onChange:f=()=>{},options:i,max:n,min:r,step:o}={}){const h="color"===a?u(e[t]):e[t];if(null===h||void 0===h)return void console.error(`GUI: ${l} must be defined.`);let y=g(l),v=g(d),b=v?`${v}/${y}`:y;if(this._uids.has(b))return void console.error(`GUI: An input with id ${l} already exist in the group ${d}`);if(this._uids.add(b),p&&!this.serverUrl&&(this._serverUrl=`wss://${location.hostname}:80`),a=a||(i?"select":""),!a)switch(typeof h){case"boolean":a="checkbox";break;case"string":a="text";break;case"function":a="button";break;default:a=typeof h;}this._container.parentNode||this.appendChild(this._container);let T=this._container;d&&(T=this.groups.get(d),!T&&(T=document.createElement("details"),T.open=!0,T.innerHTML=`<summary>${d}</summary>`,this.groups.set(d,T),this._container.appendChild(T)));let x=document.createElement("dlib-guiinput");x.object="color"===a?{value:"#000000"}:e,x.key="color"===a?"value":t,x.label=s,x.value=h,x._client=c,r&&(x.min=r),n&&(x.max=n),o&&(x.step=o),i&&(x.options=i),x.type=a,T.appendChild(x);const w=v&&rt[v]?rt[v][y]:rt[y];void 0!==w&&(x.value=w,"color"===a&&(e[t]=m(e[t],w)));const P=(e)=>{let t=v?rt[v]:rt;if(t||(t=rt[v]={}),x.value===h?(delete t[y],v&&!Object.keys(t).length&&delete rt[v]):t[y]=x.value,nt.test(window.location.hash))window.location.hash=window.location.hash.replace(nt,Object.keys(rt).length?`$1${encodeURI(JSON.stringify(rt))}$5`:"");else{let e=window.location.hash?"&":"#";window.location.hash+=`${e}gui=${encodeURI(JSON.stringify(rt))}`}p&&this._webSocket&&this._webSocket.send(JSON.stringify({uid:b,value:e})),_&&($e.hasKeyDown($e.SHIFT)?$e.addEventListener("keyup",function e(){$e.removeEventListener("keyup",e),window.location.reload()}):window.location.reload()),f(e)};if("button"===a)x.addEventListener("click",P);else{let i=-1;const n=()=>{cancelAnimationFrame(i),i=requestAnimationFrame(()=>{"color"===a?P(m(e[t],x.value)):P(x.value)})};"text"!==a&&"number"!==a&&x.addEventListener("input",n),x.addEventListener("change",n)}return f(e[t]),this._inputs.set(b,x),x}}window.customElements.define("dlib-gui",ot);let st="undefined"==typeof Float32Array?Array:Float32Array;const lt=Math.random,dt=function(){let e=f();return function(t,a,n,r,o,s){let d,i;for(a||(a=2),n||(n=0),i=r?p(r*a+n,t.length):t.length,d=n;d<i;d+=a)e[0]=t[d],e[1]=t[d+1],o(e,e,s),t[d]=e[0],t[d+1]=e[1];return t}}();class _t extends Float32Array{constructor(e=0,t=0){return super(2),this.set(e,t),this}get x(){return this[0]}set x(e){this[0]=e}get y(){return this[1]}set y(e){this[1]=e}set(e,t){return v(this,e,t),this}copy(e){return h(this,e),this}add(e){return y(this,this,e),this}get size(){return x(this)}get squaredSize(){return w(this)}subtract(e){return b(this,this,e),this}negate(e=this){return P(this,e),this}cross(e,t){return k(this,e,t),this}scale(e){return T(this,this,e),this}normalize(){S(this,this)}dot(e){return C(this,e)}equals(e){return O(this,e)}applyMatrix3(e){return R(this,this,e),this}applyMatrix4(e){return A(this,this,e),this}lerp(e,t){E(this,this,e,t)}clone(){return new _t(this.x,this.y)}}let pt=new Map;class ct extends _t{static get TOUCH_TYPE(){return"touchtype"}static get MOUSE_TYPE(){return"mousetype"}static get(e=window){let t=pt.get(e);return t||(t=new ct(e)),t}get downed(){return this._downed}constructor(e=document.body){super(),this.domElement=e,this.type=ct.TOUCH_TYPE,this.velocity=new _t,this.dragOffset=new _t,this.centered=new _t,this.centeredFlippedY=new _t,this.normalized=new _t,this.normalizedFlippedY=new _t,this.normalizedCentered=new _t,this.normalizedCenteredFlippedY=new _t,this._downed=!1,pt.set(this.domElement,this),this.onDown=new Ve,this.onMove=new Ve,this.onUp=new Ve,this.onClick=new Ve,this.onTypeChange=new Ve,this._preventMouseTypeChange=!1,this._onPointerMoveBinded=this._onPointerMove.bind(this),this._onPointerDownBinded=this._onPointerDown.bind(this),this._onPointerUpBinded=this._onPointerUp.bind(this),this._updateBinded=this._update.bind(this),this._resizeBinded=this.resize.bind(this),this.resize(),this._position=new _t(this._domElementBoundingRect.left+.5*this._domElementBoundingRect.width,this._domElementBoundingRect.top+.5*this._domElementBoundingRect.height),this.enable()}resize(){this._domElementBoundingRect=this.domElement===window?{top:0,left:0,width:window.innerWidth,height:window.innerHeight}:this.domElement.getBoundingClientRect()}_onPointerDown(t){"touchstart"===t.type&&(this._preventMouseTypeChange=!0,this._changeType(ct.TOUCH_TYPE)),this._downed=!0,this.dragOffset.set(0,0),this.copy(this._position),this._onPointerEvent(t),this._updatePositions(),this.onDown.dispatch(t)}_onPointerMove(t){if("mousemove"===t.type){if(this._preventMouseTypeChange)return;this._changeType(ct.MOUSE_TYPE)}this._onPointerEvent(t),this.onMove.dispatch(t)}_onPointerUp(t){this._downed=!1,this._onPointerEvent(t),this._updatePositions(),this.onUp.dispatch(t),4>this.dragOffset.length&&this.onClick.dispatch(t),clearTimeout(this._timeout),this._timeout=setTimeout(()=>{this._preventMouseTypeChange=!1},2e3)}_onPointerEvent(t){!!window.TouchEvent&&t instanceof window.TouchEvent&&("touchend"===t.type?t=t.changedTouches[0]:t=t.touches[0]),this._position.x=t.clientX-this._domElementBoundingRect.left,this._position.y=t.clientY-this._domElementBoundingRect.top}_changeType(e){this.type===e||(this.type=e,this.disable(),this.enable(),this.onTypeChange.dispatch(this.type))}_update(){(this.x||this.y)&&(this.velocity.x=this._position.x-this.x,this.velocity.y=this._position.y-this.y,this.downed&&this.dragOffset.add(this.velocity)),this._updatePositions()}_updatePositions(){this.x=this._position.x,this.y=this._position.y,this.centered.x=this.centeredFlippedY.x=this.x-.5*this._domElementBoundingRect.width,this.centered.y=this.centeredFlippedY.y=this.y-.5*this._domElementBoundingRect.height,this.centeredFlippedY.y*=-1,this.normalized.x=this.normalizedFlippedY.x=this.x/this._domElementBoundingRect.width,this.normalized.y=this.normalizedFlippedY.y=this.y/this._domElementBoundingRect.height,this.normalizedFlippedY.y=1-this.normalizedFlippedY.y,this.normalizedCentered.x=this.normalizedCenteredFlippedY.x=2*this.normalized.x-1,this.normalizedCentered.y=this.normalizedCenteredFlippedY.y=2*this.normalized.y-1,this.normalizedCenteredFlippedY.y*=-1}enable(){this.disable(),this.resize(),this.type===ct.TOUCH_TYPE?(this.domElement.addEventListener("touchmove",this._onPointerMoveBinded),window.addEventListener("touchend",this._onPointerUpBinded)):(this.domElement.addEventListener("mousedown",this._onPointerDownBinded),window.addEventListener("mouseup",this._onPointerUpBinded)),this.domElement.addEventListener("touchstart",this._onPointerDownBinded),this.domElement.addEventListener("mousemove",this._onPointerMoveBinded),window.addEventListener("resize",this._resizeBinded),He.add(this._updateBinded=this._updateBinded||this._update.bind(this))}disable(){He.delete(this._updateBinded),this.domElement.removeEventListener("touchstart",this._onPointerDownBinded),this.domElement.removeEventListener("mousedown",this._onPointerDownBinded),this.domElement.removeEventListener("touchmove",this._onPointerMoveBinded),this.domElement.removeEventListener("mousemove",this._onPointerMoveBinded),window.removeEventListener("touchend",this._onPointerUpBinded),window.removeEventListener("mouseup",this._onPointerUpBinded),window.removeEventListener("resize",this._resizeBinded)}}const mt=ot.add({value:!1},"value",{label:"Skip Intro",reload:!0}).value;Ne.load("src/intro/template.html").then((e)=>{let t=document.createElement("template");t.innerHTML=e,window.customElements.define("christmasxp-yolohero-intro",class extends Ge{connectedCallback(){let e=document.importNode(t.content,!0);this.appendChild(e),this.loading=!0,this._delay=0,this.querySelector("button").addEventListener("click",this.close.bind(this)),this._pointer=ct.get(this),this._logo=document.querySelector(".logo"),mt&&requestAnimationFrame(()=>{this.close()})}close(){this.classList.add("hide"),this.dispatchEvent(new Event("close")),this.pause()}set loading(e){const t=this.querySelector("button");t.disabled=e,t.textContent=e?"loading...":"Play! \u2603\uFE0F"}update(){this._delay+=.01,(this._pointer.velocity.x||this._pointer.velocity.y)&&.01<this._delay&&(this._delay=0,this._logo.style.backgroundImage=`url(src/intro/logo/${Oe(3*Math.random())+1}.svg)`)}})}),Ne.load("src/outro/template.html").then((e)=>{let t=document.createElement("template");t.innerHTML=e,window.customElements.define("christmasxp-yolohero-outro",class extends HTMLElement{connectedCallback(){this.visible=!1;let e=document.importNode(t.content,!0);this.appendChild(e)}set score(e){this._score=e}set visible(e){if(this.classList.toggle("hide",!e),e&&void 0!==this._score){this.querySelector(".content").innerHTML+=`
        <iframe id="soundcloud-player" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/129924353&amp;color=%23ffcf24&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
        `;const e=this.querySelector(".score");this.querySelector("textarea").value=`I’ve done a score of ${this._score} at Yolo Hero! 🚀 🎹 ✨ 🤘 ☃️
Can you do better???
Merry Christmas!!!
${window.location}

by @damienmortini & @lonni_laura
for @christmasxp`;const t={value:0};TweenLite.to(t,4,{value:this._score,ease:Linear.easeInOut,onUpdate:()=>{e.textContent=`${Oe(t.value)}`}})}}})});class ut{constructor({gl:e,target:t=e.FRAMEBUFFER}={}){this.gl=e,this.target=t,this.colorTextures=[],this.depthTexture=null,this.stencilTexture=null,this._frameBuffer=this.gl.createFramebuffer()}attach({texture:e,attachment:t=this.gl.COLOR_ATTACHMENT0,target:a=this.target,textarget:i=this.gl.TEXTURE_2D}){this.bind({target:a}),t===this.gl.DEPTH_ATTACHMENT?this.depthTexture=e:t===this.gl.STENCIL_ATTACHMENT?this.stencilTexture=e:this.colorTextures[t-this.gl.COLOR_ATTACHMENT0]=e,this.gl.framebufferTexture2D(a,t,i,e._texture||e,0),this.unbind({target:a})}bind({target:e=this.target}={}){this.gl.bindFramebuffer(e,this._frameBuffer)}unbind({target:e=this.target}={}){this.gl.bindFramebuffer(e,null)}}class gt{constructor({gl:e,data:t=null,width:a=void 0,height:i=void 0,target:n=t&&t.length?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,level:r=0,internalformat:o=e.RGBA,format:s=e.RGBA,type:l=e.UNSIGNED_BYTE,minFilter:d=e.NEAREST_MIPMAP_LINEAR,magFilter:_=e.LINEAR,wrapS:p=e.REPEAT,wrapT:c=e.REPEAT}={}){this.gl=e,this._texture=this.gl.createTexture(),this._width=a,this._height=i,this._dataWidth=void 0,this._dataHeight=void 0,this._target=n,this.level=r,this.internalformat=o,this.format=s,this.type=l,this.minFilter=d,this.magFilter=_,this.wrapS=p,this.wrapT=c,(t||this._width&&this._height)&&(this.data=t)}generateMipmap(){this.bind(),this.gl.generateMipmap(this._target),this.unbind()}set data(e){this._data=e;const t=this._data&&this._data.length?this._data:[this._data];t[0]&&(this._dataWidth=t[0].width||t[0].videoWidth,this._dataHeight=t[0].height||t[0].videoHeight);const a=this._target===this.gl.TEXTURE_CUBE_MAP?6:1,n=this._target===this.gl.TEXTURE_CUBE_MAP?this.gl.TEXTURE_CUBE_MAP_POSITIVE_X:this._target;this.bind();for(let a=0;a<t.length;a++)this.gl instanceof WebGLRenderingContext&&this._dataWidth?this.gl.texImage2D(n+a,this.level,this.internalformat,this.format,this.type,t[a]):this.gl.texImage2D(n+a,this.level,this.internalformat,this.width,this.height,0,this.format,this.type,t[a]);this.unbind()}get data(){return this._data}get width(){return this._width||this._dataWidth}get height(){return this._height||this._dataHeight}set minFilter(e){this._minFilter===e||(this._minFilter=e,this.bind(),this.gl.texParameteri(this._target,this.gl.TEXTURE_MIN_FILTER,this._minFilter),this.unbind())}get minFilter(){return this._minFilter}set magFilter(e){this._magFilter===e||(this._magFilter=e,this.bind(),this.gl.texParameteri(this._target,this.gl.TEXTURE_MAG_FILTER,this._magFilter),this.unbind())}get magFilter(){return this._magFilter}set wrapS(e){this._wrapS===e||(this._wrapS=e,this.bind(),this.gl.texParameteri(this._target,this.gl.TEXTURE_WRAP_S,this._wrapS),this.unbind())}get wrapS(){return this._wrapS}set wrapT(e){this._wrapT===e||(this._wrapT=e,this.bind(),this.gl.texParameteri(this._target,this.gl.TEXTURE_WRAP_T,this._wrapT),this.unbind())}get wrapT(){return this._wrapT}bind({unit:e=0}={}){this.gl.activeTexture(this.gl[`TEXTURE${e}`]),this.gl.bindTexture(this._target,this._texture)}unbind(){this.gl.bindTexture(this._target,null)}}(function(){let e=D();return function(t,a,n,r,o,s){let d,i;for(a||(a=3),n||(n=0),i=r?p(r*a+n,t.length):t.length,d=n;d<i;d+=a)e[0]=t[d],e[1]=t[d+1],e[2]=t[d+2],o(e,e,s),t[d]=e[0],t[d+1]=e[1],t[d+2]=e[2];return t}})();class ft extends Float32Array{constructor(e=[0,0,0]){return super(e),this}get x(){return this[0]}set x(e){this[0]=e}get y(){return this[1]}set y(e){this[1]=e}get z(){return this[2]}set z(e){this[2]=e}set(e,t,a){return N(this,e,t,a),this}copy(e){return z(this,e),this}add(e){return I(this,this,e),this}get size(){return L(this)}get squaredSize(){return F(this)}subtract(e){return M(this,this,e),this}negate(e=this){return U(this,e),this}cross(e,t){return V(this,e,t),this}scale(e){return j(this,this,e),this}normalize(){return X(this,this),this}dot(e){return Y(this,e)}equals(e){return W(this,e)}applyMatrix4(e){return H(this,this,e),this}angle(e){return G(this,e)}clone(){return new ft(this.x,this.y,this.z)}}(function(){let e=q();return function(t,a,n,r,o,s){let d,i;for(a||(a=4),n||(n=0),i=r?p(r*a+n,t.length):t.length,d=n;d<i;d+=a)e[0]=t[d],e[1]=t[d+1],e[2]=t[d+2],e[3]=t[d+3],o(e,e,s),t[d]=e[0],t[d+1]=e[1],t[d+2]=e[2],t[d+3]=e[3];return t}})();class ht extends Float32Array{constructor(e=[0,0,0,0]){return super(e),this}get x(){return this[0]}set x(e){this[0]=e}get y(){return this[1]}set y(e){this[1]=e}get z(){return this[2]}set z(e){this[2]=e}get w(){return this[3]}set w(e){this[3]=e}set(e,t,a,i){return Q(this,e,t,a,i),this}}class yt extends Float32Array{constructor(e=[1,0,0,0,1,0,0,0,1]){return super(e),this}set(e,t,a,i,n,r,o,s,l){return J(this,e,t,a,i,n,r,o,s,l),this}translate(e,t=this){return ie(this,t,e),this}rotate(e,t=this){return ne(this,t,e),this}scale(e,t=this){return re(this,t,e),this}multiply(e,t){return t?ae(this,e,t):ae(this,this,e),this}identity(){return ee(this),this}copy(e){return $(this,e),this}fromMatrix4(e){return K(this,e),this}fromQuaternion(e){return oe(this,e),this}fromBasis(e,t,a){return this.set(e[0],e[1],e[2],t[0],t[1],t[2],a[0],a[1],a[2]),this}invert(e=this){return te(this,e),this}}class vt extends Float32Array{constructor(e=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]){return super(e),this}set x(e){this[12]=e}get x(){return this[12]}set y(e){this[13]=e}get y(){return this[13]}set z(e){this[14]=e}get z(){return this[14]}set w(e){this[15]=e}get w(){return this[15]}copy(e){return se(this,e),this}set(e,t,a,i,n,r,o,s,l,d,_,p,c,m,u,g){return e.length?this.copy(e):(le(this,e,t,a,i,n,r,o,s,l,d,_,p,c,m,u,g),this)}translate(e,t=this){return ce(this,t,e),this}rotateX(e,t=this){return ue(this,t,e),this}rotateY(e,t=this){return ge(this,t,e),this}rotateZ(e,t=this){return fe(this,t,e),this}scale(e,t=this){return me(this,t,"number"==typeof e?[e,e,e]:e),this}multiply(e,t){return t?pe(this,e,t):pe(this,this,e),this}identity(){return de(this),this}copy(e){return se(this,e),this}fromPerspective({fov:e,aspectRatio:t,near:a,far:i}={}){return ye(this,e,t,a,i),this}fromQuaternion(e){return he(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}invert(e=this){return _e(this,e),this}}class bt{static add(e="void main() {}",t){for(let[a,i]of t)e="start"===a?e.replace(/(#version .*?)\n([\s\S]*)/,`$1\n${i}\n$2`):"end"===a?e.replace(/(}\s*$)/,`\n${i}\n$1`):"main"===a?e.replace(/(\bvoid\b +\bmain\b[\s\S]*?{\s*)/,`$1\n${i}\n`):e.replace(a,i);return e}constructor({vertexShader:e=`#version 300 es
    void main() {
      gl_Position = vec4(0., 0., 0., 1.);
    }
  `,fragmentShader:t=`#version 300 es
    precision highp float;

    out vec4 fragColor;

    void main() {
      fragColor = vec4(1.);
    }
  `,uniforms:a=[],vertexShaderChunks:i=[],fragmentShaderChunks:n=[],shaders:r=[]}={}){this.uniforms=new Map,this._glslUniformTypes=new Map,this.vertexShader=e,this.fragmentShader=t,this._vertexShaderChunks=[],this._fragmentShaderChunks=[],this.add({vertexShaderChunks:i,fragmentShaderChunks:n,uniforms:a});for(let o of r)this.add(o)}add({vertexShaderChunks:e=[],fragmentShaderChunks:t=[],uniforms:a=[]}={}){this.vertexShader=bt.add(this.vertexShader,e),this._vertexShaderChunks.push(...e),this.fragmentShader=bt.add(this.fragmentShader,t),this._fragmentShaderChunks.push(...t);for(let[i,n]of a)this.uniforms.set(i,n)}set vertexShader(e){this._vertexShader=e,this._parseUniforms(this._vertexShader)}get vertexShader(){return this._vertexShader}set fragmentShader(e){this._fragmentShader=e,this._parseUniforms(this._fragmentShader)}get fragmentShader(){return this._fragmentShader}get vertexShaderChunks(){return this._vertexShaderChunks}get fragmentShaderChunks(){return this._fragmentShaderChunks}_parseUniforms(e,t){t=Object.assign({Vector2:class extends Float32Array{constructor(){super(2)}},Vector3:class extends Float32Array{constructor(){super(3)}},Vector4:class extends Float32Array{constructor(){super(4)}},Matrix3:class extends Float32Array{constructor(){super([1,0,0,0,1,0,0,0,1])}},Matrix4:class extends Float32Array{constructor(){super([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}},Texture:class{},TextureCube:class{}},t);for(let a=/^\s*uniform (.[^ ]+) (.[^ ;\[\]]+)\[? *(\d+)? *\]?/gm,i;i=a.exec(e);){let[,e,a,n]=i,r=parseInt(n);if(this.uniforms.has(a))continue;let o,s;if(this._glslUniformTypes.set(a,e),/float|double/.test(e))o=isNaN(r)?0:Array(r).fill(0);else if(/int|uint/.test(e))o=isNaN(r)?0:Array(r).fill(0);else if(/sampler2D/.test(e))o=isNaN(r)?new t.Texture:Array(r).fill().map(()=>new t.Texture);else if(/samplerCube/.test(e))o=isNaN(r)?new t.TextureCube:Array(r).fill().map(()=>new t.TextureCube);else if(s=/(.?)vec(\d)/.exec(e)){let e=s[2];o=isNaN(r)?new t[`Vector${e}`]:Array(r).fill().map(()=>new t[`Vector${e}`])}else if(s=/mat(\d)/.exec(e)){let e=s[1];o=isNaN(r)?new t[`Matrix${e}`]:Array(r).fill().map(()=>new t[`Matrix${e}`])}else o=void 0;this.uniforms.set(a,o)}}}class Tt extends bt{constructor({gl:e,vertexShader:t=void 0,fragmentShader:a=void 0,uniforms:i=void 0,attributes:n=void 0,vertexShaderChunks:r=void 0,fragmentShaderChunks:o=void 0,shaders:s=void 0}={}){super({vertexShader:t,fragmentShader:a,uniforms:i,attributes:n,vertexShaderChunks:r,fragmentShaderChunks:o,shaders:s}),this.gl=e,this._program=e.createProgram(),this._attachedShaders=new Map;const l=this;this._vertexAttribDivisor=function(){};const d=this.gl.getExtension("ANGLE_instanced_arrays");d?this._vertexAttribDivisor=d.vertexAttribDivisorANGLE.bind(d):this.gl.vertexAttribDivisor&&(this._vertexAttribDivisor=this.gl.vertexAttribDivisor.bind(this.gl)),this._attributesLocations=new Map;class _ extends Map{set(t,{buffer:a,location:n=l._attributesLocations.get(t),size:i,type:r=e.FLOAT,normalized:o=!1,stride:s=0,offset:d=0,divisor:_=0}={}){if(t instanceof Map){for(let[e,a]of t)this.set(e,a);return}a.bind(),n||(n=e.getAttribLocation(l._program,t),-1===n&&console.warn(`Attribute "${t}" is missing or never used`),l._attributesLocations.set(t,n)),e.enableVertexAttribArray(n),e.vertexAttribPointer(n,i,r,o,s,d),a.unbind(),l._vertexAttribDivisor(n,_),super.set(t,{buffer:a,size:i,type:r,normalized:o,stride:s,offset:d})}}this._uniformLocations=new Map,this._uniformTypes=new Map;class p extends Map{set(t,...a){let n=a[0];if(void 0===n)return;let i=l._uniformLocations.get(t);if(void 0===i&&(i=e.getUniformLocation(l._program,t),l._uniformLocations.set(t,i)),void 0===n.length){if(n instanceof Object){for(let e in n)l.uniforms.set(`${t}.${e}`,n[e]);return}1<a.length?(n=l.uniforms.get(t),n.set(...a)):n=a}else if(n[0]instanceof Object){for(let e=0;e<n.length;e++)if(n[0].length)l.uniforms.set(`${t}[${e}]`,n[e]);else for(let a in n[e])l.uniforms.set(`${t}[${e}].${a}`,n[e][a]);return}if(null===i)return;let r=l._uniformTypes.get(t);r||(r=/int|ivec|sampler2D|samplerCube/.test(l._glslUniformTypes.get(t))?"iv":"fv",l._uniformTypes.set(t,r)),4>=n.length?e[`uniform${n.length||1}${r}`](i,n):9===n.length?e.uniformMatrix3fv(i,!1,n):16===n.length&&e.uniformMatrix4fv(i,!1,n),super.set(t,n)}}this.vertexShader=this.vertexShader,this.fragmentShader=this.fragmentShader,this.use(),this.attributes=new _,this.uniforms=new p([...this.uniforms])}set vertexShader(e){super.vertexShader=e,this.gl&&this._updateShader(this.gl.VERTEX_SHADER,this.vertexShader)}get vertexShader(){return super.vertexShader}set fragmentShader(e){super.fragmentShader=e,this.gl&&this._updateShader(this.gl.FRAGMENT_SHADER,this.fragmentShader)}get fragmentShader(){return super.fragmentShader}use(){this.gl.useProgram(this._program)}_updateShader(e,t){if(t){if(this.gl instanceof WebGLRenderingContext)if(t=t.replace(/#version.*?\n/g,""),t=t.replace(/\btexture\b/g,"texture2D"),e===this.gl.VERTEX_SHADER)t=t.replace(/\bin\b/g,"attribute"),t=t.replace(/\bout\b/g,"varying");else{t=t.replace(/\bin\b/g,"varying");const e=/out vec4 (.*?);/.exec(t);if(e){const a=e[1];t=t.replace(/out.*?;/,""),t=t.replace(new RegExp(`\\b${a}\\b`,"g"),"gl_FragColor")}}const a=this.gl.createShader(e);this.gl.shaderSource(a,t),this.gl.compileShader(a);const i=this.gl.getShaderInfoLog(a);if(!this.gl.getShaderParameter(a,this.gl.COMPILE_STATUS)){const e=/ERROR: 0:(\d+):/.exec(i);if(e){const a=parseFloat(e[1]),n=t.split("\n");console.error(`${i}\nat: ${n[a-1].replace(/^\s*/,"")}`)}else console.error(i);return void this.gl.deleteShader(a)}i&&console.warn(i);const n=this._attachedShaders.get(e);if(n&&(this.gl.detachShader(this._program,n),this.gl.deleteShader(n)),this.gl.attachShader(this._program,a),this.gl.deleteShader(a),this._attachedShaders.set(e,a),2===this._attachedShaders.size){this.gl.linkProgram(this._program);const e=this.gl.getProgramInfoLog(this._program);this.gl.getProgramParameter(this._program,this.gl.LINK_STATUS)?e&&console.warn(e):console.error(e),this._attributesLocations=new Map,this._uniformLocations=new Map,this._uniformTypes=new Map}}}_parseUniforms(e){super._parseUniforms(e,{Vector2:_t,Vector3:ft,Vector4:ht,Matrix3:yt,Matrix4:vt,GLTexture:gt})}}class xt{static shader({textureName:e="blurTexture",textureUnit:t=0,distance:a=[1,1]}={}){return{uniforms:[["blurDistance",a],[e,t]],vertexShaderChunks:[["start",`
          uniform vec2 blurDistance;
          ${xt.computeBlurTextureCoordinates()}
        `],["end",`computeBlurTextureCoordinates(uv, blurDistance);`]],fragmentShaderChunks:[["start",`
          uniform sampler2D ${e};
          ${xt.blur()}
        `],["end",`fragColor = blur(${e});`]]}}static computeBlurTextureCoordinates(){return`
      out vec2 blurTextureCoordinates[15];

      void computeBlurTextureCoordinates(vec2 uv, vec2 distance) {
        blurTextureCoordinates[0] = uv + distance * -.028;
        blurTextureCoordinates[1] = uv + distance * -.024;
        blurTextureCoordinates[2] = uv + distance * -.020;
        blurTextureCoordinates[3] = uv + distance * -.016;
        blurTextureCoordinates[4] = uv + distance * -.012;
        blurTextureCoordinates[5] = uv + distance * -.008;
        blurTextureCoordinates[6] = uv + distance * -.004;
        blurTextureCoordinates[7] = uv;
        blurTextureCoordinates[8] = uv + distance * .004;
        blurTextureCoordinates[9] = uv + distance * .008;
        blurTextureCoordinates[10] = uv + distance * .012;
        blurTextureCoordinates[11] = uv + distance * .016;
        blurTextureCoordinates[12] = uv + distance * .020;
        blurTextureCoordinates[13] = uv + distance * .024;
        blurTextureCoordinates[14] = uv + distance * .028;
      }
    `}static blur(){return`
      in vec2 blurTextureCoordinates[15];

      vec4 blur(sampler2D inTexture) {
        vec4 result = vec4(0.0);
        result += texture(inTexture, blurTextureCoordinates[0]) * 0.0044299121055113265;
        result += texture(inTexture, blurTextureCoordinates[1]) * 0.00895781211794;
        result += texture(inTexture, blurTextureCoordinates[2]) * 0.0215963866053;
        result += texture(inTexture, blurTextureCoordinates[3]) * 0.0443683338718;
        result += texture(inTexture, blurTextureCoordinates[4]) * 0.0776744219933;
        result += texture(inTexture, blurTextureCoordinates[5]) * 0.115876621105;
        result += texture(inTexture, blurTextureCoordinates[6]) * 0.147308056121;
        result += texture(inTexture, blurTextureCoordinates[7]) * 0.159576912161;
        result += texture(inTexture, blurTextureCoordinates[8]) * 0.147308056121;
        result += texture(inTexture, blurTextureCoordinates[9]) * 0.115876621105;
        result += texture(inTexture, blurTextureCoordinates[10]) * 0.0776744219933;
        result += texture(inTexture, blurTextureCoordinates[11]) * 0.0443683338718;
        result += texture(inTexture, blurTextureCoordinates[12]) * 0.0215963866053;
        result += texture(inTexture, blurTextureCoordinates[13]) * 0.00895781211794;
        result += texture(inTexture, blurTextureCoordinates[14]) * 0.0044299121055113265;
        return result;
      }
    `}}class wt{constructor({gl:e,size:t=0,data:a=new ArrayBuffer(t),target:i=e.ARRAY_BUFFER,usage:n=e.STATIC_DRAW}={}){this.gl=e,this._target=i,this._usage=n,this._buffer=this.gl.createBuffer(),this.data=a}set data(e){this._data=e,this.bind(),this.gl.bufferData(this._target,this._data,this._usage),this.unbind()}get data(){return this._data}bind(){this.gl.bindBuffer(this._target,this._buffer)}unbind(){this.gl.bindBuffer(this._target,null)}}class Pt{constructor({gl:e,attributes:t,indiceData:a}={}){this.gl=e,this.gl.getExtension("OES_element_index_uint"),this._drawElementsInstanced=function(){},this._drawArraysInstanced=function(){};const i=this.gl.getExtension("ANGLE_instanced_arrays");i?(this._drawElementsInstanced=i.drawElementsInstancedANGLE.bind(i),this._drawArraysInstanced=i.drawArraysInstancedANGLE.bind(i)):this.gl.drawElementsInstanced&&(this._drawElementsInstanced=this.gl.drawElementsInstanced.bind(this.gl),this._drawArraysInstanced=this.gl.drawArraysInstanced.bind(this.gl)),this.attributes=new Map(t);for(let[i,n]of this.attributes)n.buffer=new wt({gl:this.gl,data:n.data}),n.count=n.count||n.data.length/n.size;a&&(this.indices={buffer:new wt({gl:this.gl,data:a,target:this.gl.ELEMENT_ARRAY_BUFFER}),type:a instanceof Uint8Array?this.gl.UNSIGNED_BYTE:a instanceof Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT,offset:0,count:a?a.length:0})}draw({mode:e=this.gl.TRIANGLES,elements:t=!!this.indices,count:a=t?this.indices.count:this.attributes.get("position").count,offset:i=this.indices?this.indices.offset:0,type:n=this.indices?this.indices.type:null,first:r=0,instanceCount:o=void 0}={}){t?o===void 0?this.gl.drawElements(e,a,n,i):this._drawElementsInstanced(e,a,n,i,o):o===void 0?this.gl.drawArrays(e,r,a):this._drawArraysInstanced(e,r,a,o)}}const St=["#ffffff","#0d2fe9","#e7fc73","#ff22e0","#5aff79","#26293d"],Ct=256;class kt{constructor({gl:e}){this.gl=e,this.video=document.createElement("video"),this.video.autoplay=!0,this.motionRatio=0,this.volume=0,this._mesh=new Pt({gl:this.gl,attributes:[["position",{data:new Float32Array([-1,-1,-1,1,1,-1,1,1]),size:2}],["uv",{data:new Float32Array([0,1,0,0,1,1,1,0]),size:2}]]}),this.videoTexture=new gt({gl:this.gl}),this.videoTexture.minFilter=this.gl.LINEAR,this.videoTexture.wrapS=this.videoTexture.wrapT=this.gl.CLAMP_TO_EDGE,this.frameBuffers=[];for(let t=0;5>t;t++){const e=new ut({gl:this.gl});e.attach({texture:new gt({gl:this.gl,minFilter:this.gl.LINEAR,internalformat:4===t?this.gl.BGR8:this.gl.RGB,format:4===t?this.gl.RGBA:this.gl.RGB,width:4===t?1:Ct,height:4===t?1:Ct,wrapS:this.gl.MIRRORED_REPEAT,wrapT:this.gl.MIRRORED_REPEAT})}),this.frameBuffers.push(e)}this.program=new Tt({gl:this.gl,vertexShaderChunks:[["start",`
          in vec2 position;
          in vec2 uv;

          out vec2 vUv;
        `],["end",`
          vec2 uv = vec2(1. - uv.x, uv.y);
          vUv = uv;
          gl_Position = vec4(position, 0., 1.);
        `]],fragmentShaderChunks:[["start",`
          precision highp float;
          
          uniform sampler2D videoTexture;

          in vec2 vUv;
        `],["end",`
          fragColor = texture(videoTexture, vUv);
        `]]}),this.program.attributes.set(this._mesh.attributes),this.blurProgram=new Tt({gl:this.gl,vertexShaderChunks:[["start",`
          in vec2 position;
          in vec2 uv;
        `],["end",`
          vec2 uv = vec2(uv.x, 1. - uv.y);
          gl_Position = vec4(position, 0., 1.);
        `]],shaders:[xt.shader(),{fragmentShaderChunks:[["start","precision highp float;"]]}]}),this.blurProgram.attributes.set(this._mesh.attributes),this.envMapProgram=new Tt({gl:this.gl,vertexShaderChunks:[["start",`
          in vec2 position;
          in vec2 uv;

          out vec2 vUv;
        `],["end",`
          vec2 uv = vec2(uv.x, 1. - uv.y);
          vUv = uv;
          gl_Position = vec4(position, 0., 1.);
        `]],fragmentShaderChunks:[["start",`
          precision highp float;

          uniform sampler2D frame;
          uniform vec3 colors[3];

          in vec2 vUv;
        `],["end",`
          vec3 frameTexel = texture(frame, vUv).rgb;
          float grey = (frameTexel.r + frameTexel.g + frameTexel.b) / 3.;
          vec3 rainbow = mix(colors[0], colors[1], smoothstep(0., .33, grey));
          rainbow = mix(rainbow, colors[2], smoothstep(.33, .66, grey));
          fragColor.rgb = rainbow;
        `]]}),this.envMapProgram.use(),this.envMapProgram.uniforms.set("colors",[ve(St[1]),ve(St[2]),ve(St[3])]),this.envMapProgram.attributes.set(this._mesh.attributes),this.endProgram=new Tt({gl:this.gl,vertexShaderChunks:[["start",`
          in vec2 position;
          in vec2 uv;

          out vec2 vUv;
        `],["end",`
          vec2 uv = vec2(uv.x, 1. - uv.y);
          vUv = uv;
          gl_Position = vec4(position, 0., 1.);
        `]],fragmentShaderChunks:[["start",`
          precision highp float;

          uniform sampler2D frame;
          uniform sampler2D previousFrame;

          in vec2 vUv;
        `],["end",`
          float difference = texture(frame, vUv).r - texture(previousFrame, vUv).r;
          fragColor.rgb = vec3(difference);
        `]]}),this.endProgram.attributes.set(this._mesh.attributes),this.debugProgram=new Tt({gl:this.gl,vertexShaderChunks:[["start",`
          in vec2 position;
          in vec2 uv;

          out vec2 vUv;
        `],["end",`
          vec2 uv = vec2(uv.x, 1. - uv.y);
          vUv = uv;
          gl_Position = vec4(position, 0., 1.);
        `]],fragmentShaderChunks:[["start",`
          precision highp float;

          uniform sampler2D frame;

          in vec2 vUv;
        `],["end",`
          fragColor.rgb = texture(frame, vUv).rgb;
        `]]}),this.debugProgram.attributes.set(this._mesh.attributes),navigator.mediaDevices.getUserMedia({audio:!0,video:{width:320,height:240,facingMode:"user"}}).then((e)=>{this.video.srcObject=e,this.video.muted=!0;const t=new AudioContext,a=t.createMediaStreamSource(e);this._analyser=t.createAnalyser(),this._audioData=new Uint8Array(this._analyser.frequencyBinCount),a.connect(this._analyser)}).catch(function(){})}update(){if(this.video.readyState!==HTMLVideoElement.HAVE_ENOUGH_DATA)return;this.program.attributes.set(this._mesh.attributes),this.gl.disable(this.gl.CULL_FACE),this.gl.disable(this.gl.DEPTH_TEST),this.frameBuffers[0].bind(),this.videoTexture.data=this.video,this.videoTexture.bind(),this.program.use(),this.program.uniforms.set("videoTexture",0),this._draw({width:Ct,height:Ct}),this.frameBuffers[0].unbind();for(let e=0;e<2;e++)for(let e=0;2>e;e++)this.frameBuffers[(e+1)%2].bind(),this.blurProgram.use(),this.frameBuffers[e].colorTextures[0].bind(),this.blurProgram.uniforms.set("blurDistance",[(e+1)%2,e]),this._draw({width:Ct,height:Ct}),this.frameBuffers[(e+1)%2].unbind();this.frameBuffers[4].bind(),this.endProgram.use(),this.frameBuffers[1].colorTextures[0].bind(),this.endProgram.uniforms.set("frame",0),this.frameBuffers[2].colorTextures[0].bind({unit:1}),this.endProgram.uniforms.set("previousFrame",1),this._draw({width:1,height:1}),this.frameBuffers[4].unbind(),this.frameBuffers[3].bind(),this.envMapProgram.use(),this.frameBuffers[2].colorTextures[0].bind(),this.envMapProgram.uniforms.set("frame",0),this._draw({width:Ct,height:Ct}),this.frameBuffers[3].unbind(),[this.frameBuffers[1],this.frameBuffers[2]]=[this.frameBuffers[2],this.frameBuffers[1]];let e=0;this._analyser.getByteFrequencyData(this._audioData);for(var t=0;t<this._audioData.length;t++)e+=this._audioData[t];e/=this._audioData.length,this.volume=e/255,this.gl.enable(this.gl.CULL_FACE),this.gl.enable(this.gl.DEPTH_TEST),this._animationFrameId=requestAnimationFrame(()=>{cancelAnimationFrame(this._animationFrameId),this.frameBuffers[4].bind();let e=0;const t=new Uint8Array(4);this.gl.readPixels(0,0,1,1,this.gl.RGBA,this.gl.UNSIGNED_BYTE,t),e=100*(t[0]/255),e=e||.8*this.motionRatio,this.motionRatio+=.1*(e-this.motionRatio),this.frameBuffers[4].unbind()})}get frameTexture(){return this.frameBuffers[2].colorTextures[0]}get envMap(){return this.frameBuffers[3].colorTextures[0]}_draw({width:e=this.gl.canvas.width,height:t=this.gl.canvas.height}={}){this.gl.viewport(0,0,e,t),this._mesh.draw({mode:this.gl.TRIANGLE_STRIP,count:4})}}class Et{constructor({gl:e,textContent:t="",font:a="100px sans-serif",fillStyle:i="black",textAlign:n="start",shadowColor:r="rgba(0, 0, 0 ,0)",shadowBlur:o=0,shadowOffsetX:s=0,shadowOffsetY:l=0,paddingPercentageWidth:d=0,paddingPercentageHeight:_=0,offsetXPercentage:p=0,offsetYPercentage:c=0,textScale:m=1}={}){this.gl=e,this._textScale=m,this._scaleOffset=[1,1,0,0],this._canvas=document.createElement("canvas"),this._context=this._canvas.getContext("2d"),this.transform=new vt,this.textContent=t,this.font=a,this.fillStyle=i,this.textAlign=n,this.shadowColor=r,this.shadowBlur=o,this.shadowOffsetX=s,this.shadowOffsetY=l,this.paddingPercentageWidth=d,this.paddingPercentageHeight=_,this.offsetXPercentage=p,this.offsetYPercentage=c,this.lock=!1,this._initGL(),this._update()}_initGL(){this._texture=new gt({gl:this.gl,wrapS:this.gl.CLAMP_TO_EDGE,wrapT:this.gl.CLAMP_TO_EDGE}),this.mesh=new Pt({gl:this.gl,attributes:[["position",{data:new Float32Array([-1,1,-1,-1,1,1,1,-1]),size:2}],["uv",{data:new Float32Array([0,0,0,1,1,0,1,1]),size:2}]]}),this.program=new Tt({gl:this.gl,uniforms:[["transform",this.transform],["projectionView",new vt],["scaleOffset",this._scaleOffset]],vertexShader:`#version 300 es
        uniform mat4 transform;
        uniform mat4 projectionView;
        uniform vec4 scaleOffset;

        in vec2 position;
        in vec2 uv;

        out vec2 vUv;

        void main() {
          vec2 position = position;
          position *= scaleOffset.xy;
          position += scaleOffset.zw;
          gl_Position = projectionView * transform * vec4(position, 0., 1.);
          vUv = uv;
        }
      `,fragmentShader:`#version 300 es
        precision highp float;

        uniform sampler2D textTexture;

        in vec2 vUv;

        out vec4 fragColor;

        void main() {
          fragColor = texture(textTexture, vUv);
        }
      `})}_update(){if(!this._texture||this.lock)return;let e=this._context.measureText(this.textContent).width,a=parseFloat(/\b(\d*)px/.exec(this._context.font)[1]);const i=e*this.paddingPercentageWidth,n=a*this.paddingPercentageHeight,r=e*this.offsetXPercentage,o=a*this.offsetYPercentage,s=this.shadowOffsetX-this.shadowBlur,l=this.shadowOffsetY-this.shadowBlur;e*=1+2*this.paddingPercentageWidth,a*=1+2*this.paddingPercentageHeight,e+=2*this.shadowBlur+d(this.shadowOffsetX),a+=2*this.shadowBlur+d(this.shadowOffsetY),(this._canvas.width!==e||this._canvas.height!==a)&&(this._canvas.width=e||1,this._canvas.height=a||1,this._context=this._canvas.getContext("2d"),this._context.font=this.font,this._context.fillStyle=this.fillStyle,this._context.shadowColor=this.shadowColor,this._context.shadowBlur=this.shadowBlur,this._context.shadowOffsetX=this.shadowOffsetX,this._context.shadowOffsetY=this.shadowOffsetY,this._context.textBaseline="ideographic"),this._scaleOffset[3]=.01*(.5*-l),this._scaleOffset[2]="start"===this.textAlign||"left"===this.textAlign?.01*(.5*this._canvas.width+p(0,s)):"end"===this.textAlign||"right"===this.textAlign?.01*(.5*-this._canvas.width+t(0,s)):.01*(.5*s),this._scaleOffset[0]=.01*(this._canvas.width*this._textScale),this._scaleOffset[1]=.01*(this._canvas.height*this._textScale),this._context.clearRect(0,0,this._canvas.width,this._canvas.height),this._context.globalAlpha=0.01,this._context.fillRect(0,0,this._canvas.width,this._canvas.height),this._context.globalAlpha=1,this._context.fillText(this._textContent,(0>s?d(s):0)+i+r,this._canvas.height-(0<l?d(l):0)-n+o),this._texture.data=this._canvas,this._texture.generateMipmap()}draw({camera:e}={}){this.program.use(),this.program.attributes.set(this.mesh.attributes),e&&this.program.uniforms.set("projectionView",e.projectionView),this.program.uniforms.set("scaleOffset",this._scaleOffset),this.program.uniforms.set("transform",this.transform),this._texture.bind(),this.mesh.draw({mode:this.gl.TRIANGLE_STRIP,count:4})}set textContent(e){this._textContent=e,this._update()}get textContent(){return this._textContent}set font(e){this._context.font=this._font=e,this._update()}get font(){return this._font}set fillStyle(e){this._context.fillStyle=this._fillStyle=e,this._update()}get fillStyle(){return this._fillStyle}set textAlign(e){this._textAlign=e,this._update()}get textAlign(){return this._textAlign}set shadowColor(e){this._context.shadowColor=this._shadowColor=e,this._update()}get shadowColor(){return this._shadowColor}set shadowBlur(e){this._context.shadowBlur=this._shadowBlur=e,this._update()}get shadowBlur(){return this._shadowBlur}set shadowOffsetX(e){this._context.shadowOffsetX=this._shadowOffsetX=e,this._update()}get shadowOffsetX(){return this._shadowOffsetX}set shadowOffsetY(e){this._context.shadowOffsetY=this._shadowOffsetY=e,this._update()}get shadowOffsetY(){return this._shadowOffsetY}}class Rt{constructor({near:e=0.01,far:t=1e3,aspectRatio:a=1,fov:i=l/3}={}){this._near=e,this._far=t,this._aspectRatio=a,this._fov=i,this.transform=new vt,this._inverseTransform=new vt,this._projection=new vt,this._projectionView=new vt,this._updateProjection()}set near(e){this._near=e,this._updateProjection()}get near(){return this._near}set far(e){this._far=e,this._updateProjection()}get far(){return this._far}set fov(e){this._fov=e,this._updateProjection()}get fov(){return this._fov}set aspectRatio(e){this._aspectRatio=e,this._updateProjection()}get aspectRatio(){return this._aspectRatio}get inverseTransform(){return this._inverseTransform.invert(this.transform)}get projection(){return this._projection}get projectionView(){return this._projectionView.copy(this.projection).multiply(this.inverseTransform)}_updateProjection(){this._projection.fromPerspective(this)}}Object.defineProperty(Rt.prototype,"near",{enumerable:!0}),Object.defineProperty(Rt.prototype,"far",{enumerable:!0}),Object.defineProperty(Rt.prototype,"fov",{enumerable:!0}),Object.defineProperty(Rt.prototype,"aspectRatio",{enumerable:!0}),Object.defineProperty(Rt.prototype,"inverseTransform",{enumerable:!0}),Object.defineProperty(Rt.prototype,"projection",{enumerable:!0}),Object.defineProperty(Rt.prototype,"projectionView",{enumerable:!0});const At=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e},Ot=function(e,t){let a=t[0],i=t[1],n=t[2],r=t[3],s=a*a+i*i+n*n+r*r;return 0<s&&(s=1/o(s),e[0]=a*s,e[1]=i*s,e[2]=n*s,e[3]=r*s),e},Dt=function(){let e=D(),t=B(1,0,0),i=B(0,1,0);return function(n,r,a){let o=Y(r,a);return-0.999999>o?(V(e,t,r),1e-6>L(e)&&V(e,i,r),X(e,e),xe(n,e,Math.PI),n):0.999999<o?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(V(e,r,a),n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=1+o,Ot(n,n))}}(),Lt=function(){let e=be(),i=be();return function(n,r,a,o,s,l){return ke(e,r,s,l),ke(i,a,o,l),ke(n,e,i,2*l*(1-l)),n}}(),Bt=function(){let e=Z();return function(t,a,i,n){return e[0]=i[0],e[3]=i[1],e[6]=i[2],e[1]=n[0],e[4]=n[1],e[7]=n[2],e[2]=-a[0],e[5]=-a[1],e[8]=-a[2],Ot(t,Re(t,e))}}();class zt extends Float32Array{constructor(e=0,t=0,a=0,i=1){return super(4),this.set(e,t,a,i),this}get x(){return this[0]}set x(e){this[0]=e}get y(){return this[1]}set y(e){this[1]=e}get z(){return this[2]}set z(e){this[2]=e}get w(){return this[3]}set w(e){this[3]=e}identity(){return Te(this),this}set(e,t,a,i){return Q(this,e,t,a,i),this}rotateX(e){return Pe(this,this,e),this}rotateY(e){return Se(this,this,e),this}rotateZ(e){return Ce(this,this,e),this}invert(e=this){return Ee(this,e),this}copy(e){return At(this,e),this}normalize(e=this){return Ot(this,this),this}multiply(e,t){return t?we(this,e,t):we(this,this,e),this}fromMatrix3(e){return Re(this,e),this}}class Nt{constructor({matrix:e=new vt,domElement:t=document.body,distance:a=0,invertRotation:i=!0,rotationEaseRatio:n=.04,zoomSpeed:r=.1,zoomEaseRatio:o=.1,minDistance:s=0,maxDistance:l=Infinity,enabled:d=!0}={}){this.matrix=e,this._distance=a,this.invertRotation=i,this.rotationEaseRatio=n,this.maxDistance=l,this.minDistance=s,this.zoomSpeed=r,this.zoomEaseRatio=o,this._pointer=ct.get(t),this._nextDistance=this._distance,this._cachedQuaternion=new zt,this._cachedMatrix=new vt,this._cachedVector3=new ft,this._velocity=new _t,this._velocityOrigin=new _t,this._position=new ft([this.matrix.x,this.matrix.y,this.matrix.z]),this._positionPrevious=this._position.clone(),this._positionOffset=new ft,t.addEventListener("wheel",this.onWheel.bind(this)),this.enabled=!0,this.update(),this.enabled=d}set distance(e){this._distance=this._nextDistance=e}get distance(){return this._distance}onWheel(a){this.enabled&&(this._nextDistance+=a.deltaY*this.zoomSpeed,this._nextDistance=t(p(this._nextDistance,this.maxDistance),this.minDistance))}update(){this.enabled&&(this._cachedMatrix.identity(),this._cachedQuaternion.identity(),this._distance+=(this._nextDistance-this._distance)*this.zoomEaseRatio,this._position.set(this.matrix.x,this.matrix.y,this.matrix.z).subtract(this._positionOffset),this.matrix.x=0,this.matrix.y=0,this.matrix.z=0,this._pointer.downed&&this._velocity.copy(this._pointer.velocity).scale(.003),this._velocity.lerp(this._velocityOrigin,this.rotationEaseRatio),this._cachedQuaternion.rotateY(this.invertRotation?-this._velocity.x:this._velocity.x),this._cachedQuaternion.rotateX(this.invertRotation?-this._velocity.y:this._velocity.y),this._cachedMatrix.fromQuaternion(this._cachedQuaternion),this.matrix.multiply(this._cachedMatrix),this._positionOffset.set(0,0,1),this._positionOffset.applyMatrix4(this.matrix),this._positionOffset.scale(this._distance),this._cachedVector3.copy(this._position).add(this._positionOffset),this.matrix.x=this._cachedVector3.x,this.matrix.y=this._cachedVector3.y,this.matrix.z=this._cachedVector3.z)}}class It{static pack(){return`
      vec4 pack (float depth) {
        const vec4 bitSh = vec4(256 * 256 * 256, 256 * 256, 256, 1.0);
        const vec4 bitMsk = vec4(0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0);
        vec4 comp = fract(depth * bitSh);
        comp -= comp.xxyz * bitMsk;
        return comp;
      }
    `}static unpack(){return`
      float unpack (vec4 packedDepth) {
        const vec4 bitShifts = vec4(1.0 / (256.0 * 256.0 * 256.0), 1.0 / (256.0 * 256.0), 1.0 / 256.0, 1);
        return dot(packedDepth, bitShifts);
      }
    `}static bumpFromDepth({getDepth:e="return texture(depthTexture, uv).r;"}={}){return`
      float getDepth(sampler2D depthTexture, vec2 uv) {
        ${e}
      }
    
      vec4 bumpFromDepth(sampler2D depthTexture, vec2 uv, vec2 resolution, float scale) {
        vec2 step = 1. / resolution;
          
        float height = getDepth(depthTexture, uv);
          
        vec2 dxy = height - vec2(
            getDepth(depthTexture, uv + vec2(step.x, 0.)), 
            getDepth(depthTexture, uv + vec2(0., step.y))
        );
          
        return vec4(normalize(vec3(dxy * scale / step, 1.)), height);
      }
    `}}class Mt{static PhysicallyBasedMaterial(){return`
    struct PhysicallyBasedMaterial
    {
      vec3 albedo;
      float metalness;
      float roughness;
      float reflectance;
    };
    `}static ggx(){return`
    #define PI 3.1415926535897932384626433832795

    float G1V(float dotNV, float k)
    {
      return 1. / (dotNV * (1. - k) + k);
    }

    float ggx(vec3 N, vec3 V, vec3 L, float roughness, float F0)
    {
      roughness = .01 + roughness * .99;

      float alpha = roughness * roughness;

      vec3 H = normalize(V + L);

      float dotNL = clamp(dot(N, L), 0., 1.);
      float dotNV = clamp(dot(N, V), 0., 1.);
      float dotNH = clamp(dot(N, H), 0., 1.);
      float dotLH = clamp(dot(L, H), 0., 1.);

      float F, D, vis;

      // D
      float alphaSqr = alpha * alpha;
      float denom = dotNH * dotNH * (alphaSqr - 1.) + 1.;
      D = alphaSqr / (PI * denom * denom);

      // F
      float dotLH5 = pow(1. - dotLH, 5.);
      F = F0 + (1. - F0) * dotLH5;

      // V
      float k = alpha / 2.;
      vis = G1V(dotNL, k) * G1V(dotNV, k);

      float specular = dotNL * D * F * vis;
      return specular;
    }
    `}static computeGGXLighting(){return`
    vec3 computeGGXLighting (
      Ray ray,
      Light light,
      vec3 normal,
      PhysicallyBasedMaterial material
    ) {
      vec3 color = material.albedo;

      vec3 specular = light.color * ggx(normal, -ray.direction, -light.direction, material.roughness, material.reflectance);
      color += specular;

      return color;
    }
    `}static computePBRLighting({pbrReflectionFromRay:e=`return vec3(0.);`}={}){return`
    vec3 pbrReflectionFromRay(
      Ray ray,
      Light light
    ) {
      ${e}
    }

    vec3 computePBRLighting (
      Ray ray,
      Light light,
      vec3 position,
      vec3 normal,
      PhysicallyBasedMaterial material
    ) {
      light.color *= light.intensity;

      // fresnel
      float fresnel = max(1. - dot(mix(normal, -ray.direction, material.roughness), -ray.direction), material.metalness);

      // reflection
      vec3 roughnessRandomVector = normalize(vec3(random(position.x) * 2. - 1., random(position.y) * 2. - 1., random(position.z) * 2. - 1.)) * material.roughness;
      vec3 reflection = pbrReflectionFromRay(Ray(position, normalize(reflect(ray.direction, normal) + roughnessRandomVector * .3)), light);

      // diffuse
      vec3 color = mix(material.albedo, reflection, material.metalness);
      color = mix(color, reflection, fresnel);
      color *= light.color;

      // specular
      vec3 specular = light.color * ggx(normal, -ray.direction, -light.direction, material.roughness, material.reflectance);
      color += specular;

      return color;
    }
    `}}class jt{static common(){return`
      // Mod 289

      float mod289(float x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
      }

      vec2 mod289(vec2 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
      }

      vec3 mod289(vec3 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
      }

      vec4 mod289(vec4 x)
      {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
      }

      // Permute

      float permute(float x) {
        return mod289(((x*34.0)+1.0)*x);
      }

      vec3 permute(vec3 x) {
        return mod289(((x*34.0)+1.0)*x);
      }

      vec4 permute(vec4 x)
      {
        return mod289(((x*34.0)+1.0)*x);
      }

      // Taylor Inv Sqrt

      float taylorInvSqrt(float r)
      {
        return 1.79284291400159 - 0.85373472095314 * r;
      }

      vec4 taylorInvSqrt(vec4 r)
      {
        return 1.79284291400159 - 0.85373472095314 * r;
      }

      // Fade

      vec2 fade(vec2 t) {
        return t*t*t*(t*(t*6.0-15.0)+10.0);
      }

      vec3 fade(vec3 t) {
        return t*t*t*(t*(t*6.0-15.0)+10.0);
      }

      vec4 fade(vec4 t) {
        return t*t*t*(t*(t*6.0-15.0)+10.0);
      }

      // Grad 4

      vec4 grad4(float j, vec4 ip)
        {
        const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
        vec4 p,s;

        p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
        p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
        s = vec4(lessThan(p, vec4(0.0)));
        p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;

        return p;
      }

      // Hash

      vec2 hash( vec2 p ){
          p = vec2( dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3)));
          return fract(sin(p)*43758.5453);
      }
    `}static random(){return`
      float random(float n){return fract(sin(n) * 43758.5453123);}
      float random(vec2 co){return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);}
      float random(vec2 co, float l) {return random(vec2(random(co), l));}
      float random(vec2 co, float l, float t) {return random(vec2(random(co, l), t));}
    `}static noise(){return`
      float noise(float p){
        float fl = floor(p);
        float fc = fract(p);
        return mix(random(fl), random(fl + 1.0), fc);
      }

      float noise(vec2 p){
        vec2 ip = floor(p);
        vec2 u = fract(p);
        u = u*u*(3.0-2.0*u);

        float res = mix(
          mix(random(ip),random(ip+vec2(1.0,0.0)),u.x),
          mix(random(ip+vec2(0.0,1.0)),random(ip+vec2(1.0,1.0)),u.x),u.y);
        return res*res;
      }

      float noise(vec3 p){
        vec3 a = floor(p);
        vec3 d = p - a;
        d = d * d * (3.0 - 2.0 * d);

        vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
        vec4 k1 = permute(b.xyxy);
        vec4 k2 = permute(k1.xyxy + b.zzww);

        vec4 c = k2 + a.zzzz;
        vec4 k3 = permute(c);
        vec4 k4 = permute(c + 1.0);

        vec4 o1 = fract(k3 * (1.0 / 41.0));
        vec4 o2 = fract(k4 * (1.0 / 41.0));

        vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
        vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

        return o4.y * d.y + o4.x * (1.0 - d.y);
      }
    `}static perlinNoise(){return`
      float perlinNoise(vec2 P)
      {
        vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
        vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
        Pi = mod289(Pi); // To avoid truncation effects in permutation
        vec4 ix = Pi.xzxz;
        vec4 iy = Pi.yyww;
        vec4 fx = Pf.xzxz;
        vec4 fy = Pf.yyww;

        vec4 i = permute(permute(ix) + iy);

        vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0 ;
        vec4 gy = abs(gx) - 0.5 ;
        vec4 tx = floor(gx + 0.5);
        gx = gx - tx;

        vec2 g00 = vec2(gx.x,gy.x);
        vec2 g10 = vec2(gx.y,gy.y);
        vec2 g01 = vec2(gx.z,gy.z);
        vec2 g11 = vec2(gx.w,gy.w);

        vec4 norm = taylorInvSqrt(vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11)));
        g00 *= norm.x;
        g01 *= norm.y;
        g10 *= norm.z;
        g11 *= norm.w;

        float n00 = dot(g00, vec2(fx.x, fy.x));
        float n10 = dot(g10, vec2(fx.y, fy.y));
        float n01 = dot(g01, vec2(fx.z, fy.z));
        float n11 = dot(g11, vec2(fx.w, fy.w));

        vec2 fade_xy = fade(Pf.xy);
        vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
        float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
        return 2.3 * n_xy * .5 + .5;
      }

      float perlinNoise(vec3 P)
      {
        vec3 Pi0 = floor(P); // Integer part for indexing
        vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
        Pi0 = mod289(Pi0);
        Pi1 = mod289(Pi1);
        vec3 Pf0 = fract(P); // Fractional part for interpolation
        vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
        vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
        vec4 iy = vec4(Pi0.yy, Pi1.yy);
        vec4 iz0 = Pi0.zzzz;
        vec4 iz1 = Pi1.zzzz;

        vec4 ixy = permute(permute(ix) + iy);
        vec4 ixy0 = permute(ixy + iz0);
        vec4 ixy1 = permute(ixy + iz1);

        vec4 gx0 = ixy0 * (1.0 / 7.0);
        vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
        gx0 = fract(gx0);
        vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
        vec4 sz0 = step(gz0, vec4(0.0));
        gx0 -= sz0 * (step(0.0, gx0) - 0.5);
        gy0 -= sz0 * (step(0.0, gy0) - 0.5);

        vec4 gx1 = ixy1 * (1.0 / 7.0);
        vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
        gx1 = fract(gx1);
        vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
        vec4 sz1 = step(gz1, vec4(0.0));
        gx1 -= sz1 * (step(0.0, gx1) - 0.5);
        gy1 -= sz1 * (step(0.0, gy1) - 0.5);

        vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
        vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
        vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
        vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
        vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
        vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
        vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
        vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

        vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
        g000 *= norm0.x;
        g010 *= norm0.y;
        g100 *= norm0.z;
        g110 *= norm0.w;
        vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
        g001 *= norm1.x;
        g011 *= norm1.y;
        g101 *= norm1.z;
        g111 *= norm1.w;

        float n000 = dot(g000, Pf0);
        float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
        float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
        float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
        float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
        float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
        float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
        float n111 = dot(g111, Pf1);

        vec3 fade_xyz = fade(Pf0);
        vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
        vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
        float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
        return 2.2 * n_xyz * .5 + .5;
      }

      float perlinNoise(vec4 P)
      {
        vec4 Pi0 = floor(P); // Integer part for indexing
        vec4 Pi1 = Pi0 + 1.0; // Integer part + 1
        Pi0 = mod289(Pi0);
        Pi1 = mod289(Pi1);
        vec4 Pf0 = fract(P); // Fractional part for interpolation
        vec4 Pf1 = Pf0 - 1.0; // Fractional part - 1.0
        vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
        vec4 iy = vec4(Pi0.yy, Pi1.yy);
        vec4 iz0 = vec4(Pi0.zzzz);
        vec4 iz1 = vec4(Pi1.zzzz);
        vec4 iw0 = vec4(Pi0.wwww);
        vec4 iw1 = vec4(Pi1.wwww);

        vec4 ixy = permute(permute(ix) + iy);
        vec4 ixy0 = permute(ixy + iz0);
        vec4 ixy1 = permute(ixy + iz1);
        vec4 ixy00 = permute(ixy0 + iw0);
        vec4 ixy01 = permute(ixy0 + iw1);
        vec4 ixy10 = permute(ixy1 + iw0);
        vec4 ixy11 = permute(ixy1 + iw1);

        vec4 gx00 = ixy00 * (1.0 / 7.0);
        vec4 gy00 = floor(gx00) * (1.0 / 7.0);
        vec4 gz00 = floor(gy00) * (1.0 / 6.0);
        gx00 = fract(gx00) - 0.5;
        gy00 = fract(gy00) - 0.5;
        gz00 = fract(gz00) - 0.5;
        vec4 gw00 = vec4(0.75) - abs(gx00) - abs(gy00) - abs(gz00);
        vec4 sw00 = step(gw00, vec4(0.0));
        gx00 -= sw00 * (step(0.0, gx00) - 0.5);
        gy00 -= sw00 * (step(0.0, gy00) - 0.5);

        vec4 gx01 = ixy01 * (1.0 / 7.0);
        vec4 gy01 = floor(gx01) * (1.0 / 7.0);
        vec4 gz01 = floor(gy01) * (1.0 / 6.0);
        gx01 = fract(gx01) - 0.5;
        gy01 = fract(gy01) - 0.5;
        gz01 = fract(gz01) - 0.5;
        vec4 gw01 = vec4(0.75) - abs(gx01) - abs(gy01) - abs(gz01);
        vec4 sw01 = step(gw01, vec4(0.0));
        gx01 -= sw01 * (step(0.0, gx01) - 0.5);
        gy01 -= sw01 * (step(0.0, gy01) - 0.5);

        vec4 gx10 = ixy10 * (1.0 / 7.0);
        vec4 gy10 = floor(gx10) * (1.0 / 7.0);
        vec4 gz10 = floor(gy10) * (1.0 / 6.0);
        gx10 = fract(gx10) - 0.5;
        gy10 = fract(gy10) - 0.5;
        gz10 = fract(gz10) - 0.5;
        vec4 gw10 = vec4(0.75) - abs(gx10) - abs(gy10) - abs(gz10);
        vec4 sw10 = step(gw10, vec4(0.0));
        gx10 -= sw10 * (step(0.0, gx10) - 0.5);
        gy10 -= sw10 * (step(0.0, gy10) - 0.5);

        vec4 gx11 = ixy11 * (1.0 / 7.0);
        vec4 gy11 = floor(gx11) * (1.0 / 7.0);
        vec4 gz11 = floor(gy11) * (1.0 / 6.0);
        gx11 = fract(gx11) - 0.5;
        gy11 = fract(gy11) - 0.5;
        gz11 = fract(gz11) - 0.5;
        vec4 gw11 = vec4(0.75) - abs(gx11) - abs(gy11) - abs(gz11);
        vec4 sw11 = step(gw11, vec4(0.0));
        gx11 -= sw11 * (step(0.0, gx11) - 0.5);
        gy11 -= sw11 * (step(0.0, gy11) - 0.5);

        vec4 g0000 = vec4(gx00.x,gy00.x,gz00.x,gw00.x);
        vec4 g1000 = vec4(gx00.y,gy00.y,gz00.y,gw00.y);
        vec4 g0100 = vec4(gx00.z,gy00.z,gz00.z,gw00.z);
        vec4 g1100 = vec4(gx00.w,gy00.w,gz00.w,gw00.w);
        vec4 g0010 = vec4(gx10.x,gy10.x,gz10.x,gw10.x);
        vec4 g1010 = vec4(gx10.y,gy10.y,gz10.y,gw10.y);
        vec4 g0110 = vec4(gx10.z,gy10.z,gz10.z,gw10.z);
        vec4 g1110 = vec4(gx10.w,gy10.w,gz10.w,gw10.w);
        vec4 g0001 = vec4(gx01.x,gy01.x,gz01.x,gw01.x);
        vec4 g1001 = vec4(gx01.y,gy01.y,gz01.y,gw01.y);
        vec4 g0101 = vec4(gx01.z,gy01.z,gz01.z,gw01.z);
        vec4 g1101 = vec4(gx01.w,gy01.w,gz01.w,gw01.w);
        vec4 g0011 = vec4(gx11.x,gy11.x,gz11.x,gw11.x);
        vec4 g1011 = vec4(gx11.y,gy11.y,gz11.y,gw11.y);
        vec4 g0111 = vec4(gx11.z,gy11.z,gz11.z,gw11.z);
        vec4 g1111 = vec4(gx11.w,gy11.w,gz11.w,gw11.w);

        vec4 norm00 = taylorInvSqrt(vec4(dot(g0000, g0000), dot(g0100, g0100), dot(g1000, g1000), dot(g1100, g1100)));
        g0000 *= norm00.x;
        g0100 *= norm00.y;
        g1000 *= norm00.z;
        g1100 *= norm00.w;

        vec4 norm01 = taylorInvSqrt(vec4(dot(g0001, g0001), dot(g0101, g0101), dot(g1001, g1001), dot(g1101, g1101)));
        g0001 *= norm01.x;
        g0101 *= norm01.y;
        g1001 *= norm01.z;
        g1101 *= norm01.w;

        vec4 norm10 = taylorInvSqrt(vec4(dot(g0010, g0010), dot(g0110, g0110), dot(g1010, g1010), dot(g1110, g1110)));
        g0010 *= norm10.x;
        g0110 *= norm10.y;
        g1010 *= norm10.z;
        g1110 *= norm10.w;

        vec4 norm11 = taylorInvSqrt(vec4(dot(g0011, g0011), dot(g0111, g0111), dot(g1011, g1011), dot(g1111, g1111)));
        g0011 *= norm11.x;
        g0111 *= norm11.y;
        g1011 *= norm11.z;
        g1111 *= norm11.w;

        float n0000 = dot(g0000, Pf0);
        float n1000 = dot(g1000, vec4(Pf1.x, Pf0.yzw));
        float n0100 = dot(g0100, vec4(Pf0.x, Pf1.y, Pf0.zw));
        float n1100 = dot(g1100, vec4(Pf1.xy, Pf0.zw));
        float n0010 = dot(g0010, vec4(Pf0.xy, Pf1.z, Pf0.w));
        float n1010 = dot(g1010, vec4(Pf1.x, Pf0.y, Pf1.z, Pf0.w));
        float n0110 = dot(g0110, vec4(Pf0.x, Pf1.yz, Pf0.w));
        float n1110 = dot(g1110, vec4(Pf1.xyz, Pf0.w));
        float n0001 = dot(g0001, vec4(Pf0.xyz, Pf1.w));
        float n1001 = dot(g1001, vec4(Pf1.x, Pf0.yz, Pf1.w));
        float n0101 = dot(g0101, vec4(Pf0.x, Pf1.y, Pf0.z, Pf1.w));
        float n1101 = dot(g1101, vec4(Pf1.xy, Pf0.z, Pf1.w));
        float n0011 = dot(g0011, vec4(Pf0.xy, Pf1.zw));
        float n1011 = dot(g1011, vec4(Pf1.x, Pf0.y, Pf1.zw));
        float n0111 = dot(g0111, vec4(Pf0.x, Pf1.yzw));
        float n1111 = dot(g1111, Pf1);

        vec4 fade_xyzw = fade(Pf0);
        vec4 n_0w = mix(vec4(n0000, n1000, n0100, n1100), vec4(n0001, n1001, n0101, n1101), fade_xyzw.w);
        vec4 n_1w = mix(vec4(n0010, n1010, n0110, n1110), vec4(n0011, n1011, n0111, n1111), fade_xyzw.w);
        vec4 n_zw = mix(n_0w, n_1w, fade_xyzw.z);
        vec2 n_yzw = mix(n_zw.xy, n_zw.zw, fade_xyzw.y);
        float n_xyzw = mix(n_yzw.x, n_yzw.y, fade_xyzw.x);
        return 2.2 * n_xyzw * .5 + .5;
      }

      float perlinNoise(vec2 P, vec2 rep)
      {
        vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
        vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
        Pi = mod(Pi, rep.xyxy); // To create noise with explicit period
        Pi = mod289(Pi);        // To avoid truncation effects in permutation
        vec4 ix = Pi.xzxz;
        vec4 iy = Pi.yyww;
        vec4 fx = Pf.xzxz;
        vec4 fy = Pf.yyww;

        vec4 i = permute(permute(ix) + iy);

        vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0 ;
        vec4 gy = abs(gx) - 0.5 ;
        vec4 tx = floor(gx + 0.5);
        gx = gx - tx;

        vec2 g00 = vec2(gx.x,gy.x);
        vec2 g10 = vec2(gx.y,gy.y);
        vec2 g01 = vec2(gx.z,gy.z);
        vec2 g11 = vec2(gx.w,gy.w);

        vec4 norm = taylorInvSqrt(vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11)));
        g00 *= norm.x;
        g01 *= norm.y;
        g10 *= norm.z;
        g11 *= norm.w;

        float n00 = dot(g00, vec2(fx.x, fy.x));
        float n10 = dot(g10, vec2(fx.y, fy.y));
        float n01 = dot(g01, vec2(fx.z, fy.z));
        float n11 = dot(g11, vec2(fx.w, fy.w));

        vec2 fade_xy = fade(Pf.xy);
        vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
        float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
        return 2.3 * n_xy * .5 + .5;
      }

      float perlinNoise(vec3 P, vec3 rep)
      {
        vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
        vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
        Pi0 = mod289(Pi0);
        Pi1 = mod289(Pi1);
        vec3 Pf0 = fract(P); // Fractional part for interpolation
        vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
        vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
        vec4 iy = vec4(Pi0.yy, Pi1.yy);
        vec4 iz0 = Pi0.zzzz;
        vec4 iz1 = Pi1.zzzz;

        vec4 ixy = permute(permute(ix) + iy);
        vec4 ixy0 = permute(ixy + iz0);
        vec4 ixy1 = permute(ixy + iz1);

        vec4 gx0 = ixy0 * (1.0 / 7.0);
        vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
        gx0 = fract(gx0);
        vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
        vec4 sz0 = step(gz0, vec4(0.0));
        gx0 -= sz0 * (step(0.0, gx0) - 0.5);
        gy0 -= sz0 * (step(0.0, gy0) - 0.5);

        vec4 gx1 = ixy1 * (1.0 / 7.0);
        vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
        gx1 = fract(gx1);
        vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
        vec4 sz1 = step(gz1, vec4(0.0));
        gx1 -= sz1 * (step(0.0, gx1) - 0.5);
        gy1 -= sz1 * (step(0.0, gy1) - 0.5);

        vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
        vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
        vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
        vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
        vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
        vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
        vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
        vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

        vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
        g000 *= norm0.x;
        g010 *= norm0.y;
        g100 *= norm0.z;
        g110 *= norm0.w;
        vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
        g001 *= norm1.x;
        g011 *= norm1.y;
        g101 *= norm1.z;
        g111 *= norm1.w;

        float n000 = dot(g000, Pf0);
        float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
        float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
        float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
        float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
        float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
        float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
        float n111 = dot(g111, Pf1);

        vec3 fade_xyz = fade(Pf0);
        vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
        vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
        float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
        return 2.2 * n_xyz * .5 + .5;
      }

      float perlinNoise(vec4 P, vec4 rep)
      {
        vec4 Pi0 = mod(floor(P), rep); // Integer part modulo rep
        vec4 Pi1 = mod(Pi0 + 1.0, rep); // Integer part + 1 mod rep
        Pi0 = mod289(Pi0);
        Pi1 = mod289(Pi1);
        vec4 Pf0 = fract(P); // Fractional part for interpolation
        vec4 Pf1 = Pf0 - 1.0; // Fractional part - 1.0
        vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
        vec4 iy = vec4(Pi0.yy, Pi1.yy);
        vec4 iz0 = vec4(Pi0.zzzz);
        vec4 iz1 = vec4(Pi1.zzzz);
        vec4 iw0 = vec4(Pi0.wwww);
        vec4 iw1 = vec4(Pi1.wwww);

        vec4 ixy = permute(permute(ix) + iy);
        vec4 ixy0 = permute(ixy + iz0);
        vec4 ixy1 = permute(ixy + iz1);
        vec4 ixy00 = permute(ixy0 + iw0);
        vec4 ixy01 = permute(ixy0 + iw1);
        vec4 ixy10 = permute(ixy1 + iw0);
        vec4 ixy11 = permute(ixy1 + iw1);

        vec4 gx00 = ixy00 * (1.0 / 7.0);
        vec4 gy00 = floor(gx00) * (1.0 / 7.0);
        vec4 gz00 = floor(gy00) * (1.0 / 6.0);
        gx00 = fract(gx00) - 0.5;
        gy00 = fract(gy00) - 0.5;
        gz00 = fract(gz00) - 0.5;
        vec4 gw00 = vec4(0.75) - abs(gx00) - abs(gy00) - abs(gz00);
        vec4 sw00 = step(gw00, vec4(0.0));
        gx00 -= sw00 * (step(0.0, gx00) - 0.5);
        gy00 -= sw00 * (step(0.0, gy00) - 0.5);

        vec4 gx01 = ixy01 * (1.0 / 7.0);
        vec4 gy01 = floor(gx01) * (1.0 / 7.0);
        vec4 gz01 = floor(gy01) * (1.0 / 6.0);
        gx01 = fract(gx01) - 0.5;
        gy01 = fract(gy01) - 0.5;
        gz01 = fract(gz01) - 0.5;
        vec4 gw01 = vec4(0.75) - abs(gx01) - abs(gy01) - abs(gz01);
        vec4 sw01 = step(gw01, vec4(0.0));
        gx01 -= sw01 * (step(0.0, gx01) - 0.5);
        gy01 -= sw01 * (step(0.0, gy01) - 0.5);

        vec4 gx10 = ixy10 * (1.0 / 7.0);
        vec4 gy10 = floor(gx10) * (1.0 / 7.0);
        vec4 gz10 = floor(gy10) * (1.0 / 6.0);
        gx10 = fract(gx10) - 0.5;
        gy10 = fract(gy10) - 0.5;
        gz10 = fract(gz10) - 0.5;
        vec4 gw10 = vec4(0.75) - abs(gx10) - abs(gy10) - abs(gz10);
        vec4 sw10 = step(gw10, vec4(0.0));
        gx10 -= sw10 * (step(0.0, gx10) - 0.5);
        gy10 -= sw10 * (step(0.0, gy10) - 0.5);

        vec4 gx11 = ixy11 * (1.0 / 7.0);
        vec4 gy11 = floor(gx11) * (1.0 / 7.0);
        vec4 gz11 = floor(gy11) * (1.0 / 6.0);
        gx11 = fract(gx11) - 0.5;
        gy11 = fract(gy11) - 0.5;
        gz11 = fract(gz11) - 0.5;
        vec4 gw11 = vec4(0.75) - abs(gx11) - abs(gy11) - abs(gz11);
        vec4 sw11 = step(gw11, vec4(0.0));
        gx11 -= sw11 * (step(0.0, gx11) - 0.5);
        gy11 -= sw11 * (step(0.0, gy11) - 0.5);

        vec4 g0000 = vec4(gx00.x,gy00.x,gz00.x,gw00.x);
        vec4 g1000 = vec4(gx00.y,gy00.y,gz00.y,gw00.y);
        vec4 g0100 = vec4(gx00.z,gy00.z,gz00.z,gw00.z);
        vec4 g1100 = vec4(gx00.w,gy00.w,gz00.w,gw00.w);
        vec4 g0010 = vec4(gx10.x,gy10.x,gz10.x,gw10.x);
        vec4 g1010 = vec4(gx10.y,gy10.y,gz10.y,gw10.y);
        vec4 g0110 = vec4(gx10.z,gy10.z,gz10.z,gw10.z);
        vec4 g1110 = vec4(gx10.w,gy10.w,gz10.w,gw10.w);
        vec4 g0001 = vec4(gx01.x,gy01.x,gz01.x,gw01.x);
        vec4 g1001 = vec4(gx01.y,gy01.y,gz01.y,gw01.y);
        vec4 g0101 = vec4(gx01.z,gy01.z,gz01.z,gw01.z);
        vec4 g1101 = vec4(gx01.w,gy01.w,gz01.w,gw01.w);
        vec4 g0011 = vec4(gx11.x,gy11.x,gz11.x,gw11.x);
        vec4 g1011 = vec4(gx11.y,gy11.y,gz11.y,gw11.y);
        vec4 g0111 = vec4(gx11.z,gy11.z,gz11.z,gw11.z);
        vec4 g1111 = vec4(gx11.w,gy11.w,gz11.w,gw11.w);

        vec4 norm00 = taylorInvSqrt(vec4(dot(g0000, g0000), dot(g0100, g0100), dot(g1000, g1000), dot(g1100, g1100)));
        g0000 *= norm00.x;
        g0100 *= norm00.y;
        g1000 *= norm00.z;
        g1100 *= norm00.w;

        vec4 norm01 = taylorInvSqrt(vec4(dot(g0001, g0001), dot(g0101, g0101), dot(g1001, g1001), dot(g1101, g1101)));
        g0001 *= norm01.x;
        g0101 *= norm01.y;
        g1001 *= norm01.z;
        g1101 *= norm01.w;

        vec4 norm10 = taylorInvSqrt(vec4(dot(g0010, g0010), dot(g0110, g0110), dot(g1010, g1010), dot(g1110, g1110)));
        g0010 *= norm10.x;
        g0110 *= norm10.y;
        g1010 *= norm10.z;
        g1110 *= norm10.w;

        vec4 norm11 = taylorInvSqrt(vec4(dot(g0011, g0011), dot(g0111, g0111), dot(g1011, g1011), dot(g1111, g1111)));
        g0011 *= norm11.x;
        g0111 *= norm11.y;
        g1011 *= norm11.z;
        g1111 *= norm11.w;

        float n0000 = dot(g0000, Pf0);
        float n1000 = dot(g1000, vec4(Pf1.x, Pf0.yzw));
        float n0100 = dot(g0100, vec4(Pf0.x, Pf1.y, Pf0.zw));
        float n1100 = dot(g1100, vec4(Pf1.xy, Pf0.zw));
        float n0010 = dot(g0010, vec4(Pf0.xy, Pf1.z, Pf0.w));
        float n1010 = dot(g1010, vec4(Pf1.x, Pf0.y, Pf1.z, Pf0.w));
        float n0110 = dot(g0110, vec4(Pf0.x, Pf1.yz, Pf0.w));
        float n1110 = dot(g1110, vec4(Pf1.xyz, Pf0.w));
        float n0001 = dot(g0001, vec4(Pf0.xyz, Pf1.w));
        float n1001 = dot(g1001, vec4(Pf1.x, Pf0.yz, Pf1.w));
        float n0101 = dot(g0101, vec4(Pf0.x, Pf1.y, Pf0.z, Pf1.w));
        float n1101 = dot(g1101, vec4(Pf1.xy, Pf0.z, Pf1.w));
        float n0011 = dot(g0011, vec4(Pf0.xy, Pf1.zw));
        float n1011 = dot(g1011, vec4(Pf1.x, Pf0.y, Pf1.zw));
        float n0111 = dot(g0111, vec4(Pf0.x, Pf1.yzw));
        float n1111 = dot(g1111, Pf1);

        vec4 fade_xyzw = fade(Pf0);
        vec4 n_0w = mix(vec4(n0000, n1000, n0100, n1100), vec4(n0001, n1001, n0101, n1101), fade_xyzw.w);
        vec4 n_1w = mix(vec4(n0010, n1010, n0110, n1110), vec4(n0011, n1011, n0111, n1111), fade_xyzw.w);
        vec4 n_zw = mix(n_0w, n_1w, fade_xyzw.z);
        vec2 n_yzw = mix(n_zw.xy, n_zw.zw, fade_xyzw.y);
        float n_xyzw = mix(n_yzw.x, n_yzw.y, fade_xyzw.x);
        return 2.2 * n_xyzw * .5 + .5;
      }
    `}static simplexNoise(){return`
      float simplexNoise(vec2 v)
      {
        const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
        0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
        -0.577350269189626,  // -1.0 + 2.0 * C.x
        0.024390243902439); // 1.0 / 41.0
        // First corner
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);

        // Other corners
        vec2 i1;
        //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0
        //i1.y = 1.0 - i1.x;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        // x0 = x0 - 0.0 + 0.0 * C.xx ;
        // x1 = x0 - i1 + 1.0 * C.xx ;
        // x2 = x0 - 1.0 + 2.0 * C.xx ;
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;

        // Permutations
        i = mod289(i); // Avoid truncation effects in permutation
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));

        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;

        // Gradients: 41 points uniformly over a line, mapped onto a diamond.
        // The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)

        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;

        // Normalise gradients implicitly by scaling m
        // Approximation of: m *= inversesqrt( a0*a0 + h*h );
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

        // Compute final noise value at P
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      float simplexNoise(vec3 v)
      {
        const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
        const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

        // First corner
        vec3 i  = floor(v + dot(v, C.yyy) );
        vec3 x0 =   v - i + dot(i, C.xxx) ;

        // Other corners
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min( g.xyz, l.zxy );
        vec3 i2 = max( g.xyz, l.zxy );

        //   x0 = x0 - 0.0 + 0.0 * C.xxx;
        //   x1 = x0 - i1  + 1.0 * C.xxx;
        //   x2 = x0 - i2  + 2.0 * C.xxx;
        //   x3 = x0 - 1.0 + 3.0 * C.xxx;
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
        vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

        // Permutations
        i = mod289(i);
        vec4 p = permute( permute( permute(
          i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

        // Gradients: 7x7 points over a square, mapped onto an octahedron.
        // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
        float n_ = 0.142857142857; // 1.0/7.0
        vec3  ns = n_ * D.wyz - D.xzx;

        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);

        vec4 b0 = vec4( x.xy, y.xy );
        vec4 b1 = vec4( x.zw, y.zw );

        //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
        //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));

        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);

        //Normalise gradients
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;

        // Mix final noise value
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
        dot(p2,x2), dot(p3,x3) ) );
      }

      #define F4 0.309016994374947451

      float simplexNoise(vec4 v)
      {
        const vec4  C = vec4( 0.138196601125011,  // (5 - sqrt(5))/20  G4
        0.276393202250021,  // 2 * G4
        0.414589803375032,  // 3 * G4
        -0.447213595499958); // -1 + 4 * G4

        // First corner
        vec4 i  = floor(v + dot(v, vec4(F4)) );
        vec4 x0 = v -   i + dot(i, C.xxxx);

        // Other corners

        // Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)
        vec4 i0;
        vec3 isX = step( x0.yzw, x0.xxx );
        vec3 isYZ = step( x0.zww, x0.yyz );
        //  i0.x = dot( isX, vec3( 1.0 ) );
        i0.x = isX.x + isX.y + isX.z;
        i0.yzw = 1.0 - isX;
        //  i0.y += dot( isYZ.xy, vec2( 1.0 ) );
        i0.y += isYZ.x + isYZ.y;
        i0.zw += 1.0 - isYZ.xy;
        i0.z += isYZ.z;
        i0.w += 1.0 - isYZ.z;

        // i0 now contains the unique values 0,1,2,3 in each channel
        vec4 i3 = clamp( i0, 0.0, 1.0 );
        vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
        vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

        //  x0 = x0 - 0.0 + 0.0 * C.xxxx
        //  x1 = x0 - i1  + 1.0 * C.xxxx
        //  x2 = x0 - i2  + 2.0 * C.xxxx
        //  x3 = x0 - i3  + 3.0 * C.xxxx
        //  x4 = x0 - 1.0 + 4.0 * C.xxxx
        vec4 x1 = x0 - i1 + C.xxxx;
        vec4 x2 = x0 - i2 + C.yyyy;
        vec4 x3 = x0 - i3 + C.zzzz;
        vec4 x4 = x0 + C.wwww;

        // Permutations
        i = mod289(i);
        float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
        vec4 j1 = permute( permute( permute( permute (
          i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
          + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
          + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
          + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));

        // Gradients: 7x7x6 points over a cube, mapped onto a 4-cross polytope
        // 7*7*6 = 294, which is close to the ring size 17*17 = 289.
        vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

        vec4 p0 = grad4(j0,   ip);
        vec4 p1 = grad4(j1.x, ip);
        vec4 p2 = grad4(j1.y, ip);
        vec4 p3 = grad4(j1.z, ip);
        vec4 p4 = grad4(j1.w, ip);

        // Normalise gradients
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;
        p4 *= taylorInvSqrt(dot(p4,p4));

        // Mix contributions from the five corners
        vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
        vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);
        m0 = m0 * m0;
        m1 = m1 * m1;
        return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
        + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;
      }

      vec3 simplexNoise3( vec3 x ){
        float s  = simplexNoise(vec3( x ));
        float s1 = simplexNoise(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));
        float s2 = simplexNoise(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 ));
        vec3 c = vec3( s , s1 , s2 );
        return c;
      }
    `}static curlNoise(){return`
      vec3 curlNoise( vec3 p ){
        const float e = .1;
        vec3 dx = vec3( e   , 0.0 , 0.0 );
        vec3 dy = vec3( 0.0 , e   , 0.0 );
        vec3 dz = vec3( 0.0 , 0.0 , e   );

        vec3 p_x0 = simplexNoise3( p - dx );
        vec3 p_x1 = simplexNoise3( p + dx );
        vec3 p_y0 = simplexNoise3( p - dy );
        vec3 p_y1 = simplexNoise3( p + dy );
        vec3 p_z0 = simplexNoise3( p - dz );
        vec3 p_z1 = simplexNoise3( p + dz );

        float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;
        float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;
        float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;

        const float divisor = 1.0 / ( 2.0 * e );
        return normalize( vec3( x , y , z ) * divisor );
      }
    `}static voronoiNoise(){return`
      #define OCTAVES         1       // 7
      #define SWITCH_TIME     60.0   // seconds

      float voronoiNoise( in vec2 x, float time ){
        float t = time/SWITCH_TIME;
        float function          = mod(t,4.0);
        bool  multiply_by_F1    = mod(t,8.0)  >= 4.0;
        bool  inverse               = mod(t,16.0) >= 8.0;
        float distance_type = mod(t/16.0,4.0);

        vec2 n = floor( x );
        vec2 f = fract( x );

        float F1 = 8.0;
        float F2 = 8.0;

        for( int j=-1; j<=1; j++ )
        for( int i=-1; i<=1; i++ ){
          vec2 g = vec2(i,j);
          vec2 o = hash( n + g );

          o = 0.5 + 0.41*sin( time + 6.2831*o );
          vec2 r = g - f + o;

          float d =   distance_type < 1.0 ? dot(r,r)  :               // euclidean^2
          distance_type < 2.0 ? sqrt(dot(r,r)) :          // euclidean
          distance_type < 3.0 ? abs(r.x) + abs(r.y) :     // manhattan
          distance_type < 4.0 ? max(abs(r.x), abs(r.y)) : // chebyshev
          0.0;

          if( d<F1 ) {
            F2 = F1;
            F1 = d;
          } else if( d<F2 ) {
            F2 = d;
          }
        }

        float c = function < 1.0 ? F1 :
        function < 2.0 ? F2 :
        function < 3.0 ? F2-F1 :
        function < 4.0 ? (F1+F2)/2.0 :
        0.0;

        if( multiply_by_F1 )    c *= F1;
        if( inverse )           c = 1.0 - c;

        return c;
      }
    `}static fbm(){return`
      #define NUM_OCTAVES 5

      float fbm(float x) {
        float v = 0.0;
        float a = 0.5;
        float shift = float(100);
        for (int i = 0; i < NUM_OCTAVES; ++i) {
          v += a * noise(x);
          x = x * 2.0 + shift;
          a *= 0.5;
        }
        return v;
      }

      float fbm(vec2 x) {
        float v = 0.0;
        float a = 0.5;
        vec2 shift = vec2(100);
        // Rotate to reduce axial bias
        mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
        for (int i = 0; i < NUM_OCTAVES; ++i) {
          v += a * noise(x);
          x = rot * x * 2.0 + shift;
          a *= 0.5;
        }
        return v;
      }

      float fbm(vec3 x) {
        float v = 0.0;
        float a = 0.5;
        vec3 shift = vec3(100);
        for (int i = 0; i < NUM_OCTAVES; ++i) {
          v += a * noise(x);
          x = x * 2.0 + shift;
          a *= 0.5;
        }
        return v;
      }
    `}}class Ft{static Ray(){return`
      struct Ray
      {
        vec3 origin;
        vec3 direction;
      };
    `}}class Ut{static Light(){return`
      struct Light
      {
        vec3 color;
        vec3 position;
        vec3 direction;
        float intensity;
      };
    `}}class Xt extends Ne{static load(e){let t=/([\\/]?.*[\\/])/.exec(e)[1],a=new Map,i;Xt.typeMap.get("json").add("gltf");let n=Ne.load(e).then((e)=>(i=e,Ne.load(i.buffers.map((e)=>`${t}${e.uri}`)))).then((e)=>{const t=JSON.parse(JSON.stringify(i));t.raw=i;for(let a of t.nodes)a.mesh=t.meshes[a.mesh];for(let a of t.bufferViews)a.buffer=e[a.buffer];for(let a of t.accessors)a.bufferView=t.bufferViews[a.bufferView];for(let a of t.meshes)for(let e of a.primitives){for(let a in e.attributes)e.attributes[a]=t.accessors[e.attributes[a]];e.indices=t.accessors[e.indices]}return t});return Ne.promises.set(e,n),n}}class Yt extends Pt{constructor({gl:e,data:t,attributes:a}={}){super({gl:e,attributes:a});let i=t.primitives[0].attributes.POSITION;this.attributes.set("position",{buffer:new wt({gl:this.gl,data:i.bufferView.buffer}),size:3,count:i.count,offset:i.bufferView.byteOffset,target:i.bufferView.target});let n=t.primitives[0].attributes.NORMAL;this.attributes.set("normal",{buffer:new wt({gl:this.gl,data:n.bufferView.buffer}),size:3,count:n.count,offset:n.bufferView.byteOffset,target:n.bufferView.target});let r=t.primitives[0].attributes.TEXCOORD_0;r&&this.attributes.set("uv",{buffer:new wt({gl:this.gl,data:r.bufferView.buffer}),size:2,count:r.count,offset:r.bufferView.byteOffset,target:r.bufferView.target});let o=t.primitives[0].indices;o&&(this.indices={buffer:new wt({gl:this.gl,data:o.bufferView.buffer,target:this.gl.ELEMENT_ARRAY_BUFFER}),type:o.componentType,offset:o.bufferView.byteOffset,count:o.count})}}const Vt=["#ffffff","#0d2fe9","#e7fc73","#ff22e0","#5aff79","#26293d"];class Ht{constructor({gl:e,webcam:t}){this.gl=e,this.webcam=t,this.transform=new vt,this._time=0,Xt.load("src/webgl/background/background.gltf").then((e)=>{this._mesh=new Yt({gl:this.gl,data:e.meshes[0]})}),this.program=new Tt({gl:this.gl,uniforms:[["data",0]],vertexShader:`#version 300 es
        uniform mat4 transform;
        uniform mat4 projectionView;

        in vec3 position;
        in vec3 normal;
        in vec2 uv;

        out vec2 vPosition;
        out vec3 vNormal;
        out vec2 vUv;

        void main() {
          gl_Position = projectionView * transform * vec4(position, 1.);
          vNormal = normalize(mat3(transform) * normal);
          vPosition = position.xy;
          vUv = uv;
        }
      `,fragmentShader:`#version 300 es
        precision highp float;

        uniform vec3 colors[4];

        uniform vec2 resolution;
        uniform float motion;
        uniform float volume;
        uniform float time;
        uniform sampler2D envMap;
        uniform sampler2D webcamTexture;

        in vec2 vUv;
        in vec2 vPosition;
        in vec3 vNormal;

        out vec4 fragColor;

        ${Ut.Light()}
        ${Ft.Ray()}
        ${Mt.PhysicallyBasedMaterial()}
        ${jt.random()}
        ${Mt.ggx()}
        ${Mt.computeGGXLighting()}
        ${Mt.computePBRLighting({pbrReflectionFromRay:`
            vec3 envMapTexel = texture(envMap, ray.direction.xy * .5 + .5).rgb;
            float grey = (envMapTexel.r + envMapTexel.g + envMapTexel.b) / 3.;
            vec3 color = .95 + vec3(grey) * .05;
            color = mix(color, envMapTexel, min(motion, 1.));

            // return .8 + vec3(step(.5, grey)) * .2;
            // return clamp(color, vec3(0.), vec3(1.));
            // return clamp(color, vec3(0.), vec3(1.));
            return envMapTexel;
          `})}

        ${It.bumpFromDepth({getDepth:`
            // uv.y = 1. - uv.y;
            vec4 texel = texture(depthTexture, uv * 3.);
            return (texel.r + texel.g + texel.b) / 3.;
          `})}

        void main() {
          float roughness = 1. - smoothstep(0., .5, pow(vUv.y, 2.));

          float center = step(abs(vUv.x * 2. - 1.) + .0005, 5. / 58.) * roughness;

          vec4 bump = bumpFromDepth(webcamTexture, vUv, resolution * .01, .1 + .2 * motion + center * .2);
          bump = mix(bump, vec4(vNormal, 0.), (roughness + center) * .5);

          vec3 normal = normalize(vNormal + bump.xyz);

          // float displacementRatio = volume * pow(1. - abs(vUv.y * 2. - 1.), 1.);
          // float volumeDisplacement = cos(vUv.y * 40. + time * 10. + vUv.x * 3.14) * displacementRatio * .5;
          // volumeDisplacement *= center;

          float black = smoothstep(.01, .015, abs(fract((vUv.x + bump.x * bump.w * .1) * 58.) * 2. - 1.)) + center;
          black = min(black, 1.);
          black *= smoothstep(.02, .03, abs(fract((vUv.y + bump.y * bump.w * .1) * 58.) * 2. - 1.));

          vec3 diffuse = vec3(1.);
          // diffuse *= clamp(black + (1. - vUv.y), 0., 1.);
          black += center;
          diffuse = mix(colors[3], diffuse, black);

          vec3 color = computePBRLighting(
            Ray(vec3(0., 0., 1.), normalize(vec3(vPosition, -1.))), 
            Light(vec3(1.), vec3(0.), vec3(-1.), 1.),
            vec3(vPosition, 0.),
            bump.xyz,
            PhysicallyBasedMaterial(diffuse, 0., roughness + (1. - diffuse.r), diffuse.r)
          );

          // vec3 color = colors[0];
          // color = vec3(0.);
          // color = vec3(step(.4, bump.w));

          float light1 = max(0., dot(normalize(vec3(1., 0., 1.)), bump.xyz));
          // color = mix(color, colors[1], light1);
          // color += pow(light1, .5) * .5;
          
          float light2 = max(0., dot(normalize(vec3(-1., 1., 1.)), bump.xyz));
          // color = mix(color, colors[2], light2);
          // color += light2 * .1;

          fragColor = vec4(color, 1.);
          // fragColor = vec4(1., 0., 0., 1.);

          float side = smoothstep(.9, 1., vUv.y);
          side += smoothstep(.7, 1., abs(vUv.x * 2. - 1.));
          side = min(side, 1.);
          fragColor.rgb = mix(fragColor.rgb, vec3(1.), side);
        }
      `}),this.program.use(),this.program.uniforms.set("colors",[ve(Vt[1]),ve(Vt[2]),ve(Vt[3]),ve(Vt[5])])}draw({camera:e}){this._mesh&&(this._time+=.1,this.program.use(),this.webcam.frameTexture.bind(),this.program.attributes.set(this._mesh.attributes),this.program.uniforms.set("projectionView",e.projectionView),this.program.uniforms.set("transform",this.transform),this.program.uniforms.set("resolution",[this.gl.canvas.width,this.gl.canvas.height]),this.program.uniforms.set("motion",this.webcam.motionRatio),this.program.uniforms.set("volume",this.webcam.volume),this.program.uniforms.set("time",this._time),this.webcam.envMap.bind({unit:2}),this.program.uniforms.set("envMap",2),this._mesh.indices.buffer.bind(),this._mesh.draw())}}class Gt{static Camera(){return`
      struct Camera
      {
        float near;
        float far;
        float fov;
        float aspectRatio;
        mat4 transform;
        mat4 inverseTransform;
        mat4 projection;
        mat4 projectionView;
      };
    `}static rayFromCamera(){return`
      Ray rayFromCamera(vec2 position, Camera camera) {
        float fovScaleY = tan(camera.fov * .5);

        vec3 rayOrigin = -camera.inverseTransform[3].xyz * mat3(camera.inverseTransform);
        vec3 rayDirection = normalize(vec3(position.x * fovScaleY * camera.aspectRatio, position.y * fovScaleY, -1.0) * mat3(camera.inverseTransform));

        return Ray(rayOrigin, rayDirection);
      }
    `}}let Wt;const qt=new vt,Qt=.6,Zt=new Map([["mouse",{rotation:0,position:-3,text:"Move mouse!",uvOffset:[0,0],color:ve(Vt[4])}],["keyboard",{rotation:0,position:-1,text:"Press keyboard!",uvOffset:[0.5,0],color:ve(Vt[3])}],["motion",{rotation:0,position:1,text:"Dance!",uvOffset:[0,0.5],color:ve(Vt[2])}],["sound",{rotation:0,position:3,text:"Shout/clap!",uvOffset:[0.5,0.5],color:ve(Vt[1])}]]);class Kt{constructor({gl:e,player:t,actionsDetector:a,webcam:i}){this.gl=e,this.player=t,this.actionsDetector=a,this.transform=new vt,this._webcam=i,Promise.all([Xt.load("src/webgl/button/buttons.gltf"),Ne.load("src/webgl/button/marble.jpg")]).then(([e,t])=>{this._patternTexture=new gt({gl:this.gl,data:t,minFilter:this.gl.LINEAR}),this._meshes=new Map;for(let a of e.meshes){const e=new Yt({gl:this.gl,data:a});this._meshes.set(a.name,e)}this.program=new Tt({gl:this.gl,uniforms:[["patternTexture",1]],vertexShader:`#version 300 es
          ${Gt.Camera()}

          uniform mat4 transform;
          uniform Camera camera;
          uniform vec4 scaleOffset;
          uniform vec2 uvOffset;
          uniform float success;
  
          in vec3 position;
          in vec3 normal;
          in vec2 uv;
  
          out vec2 vUv;
          out vec2 vUv2;
          out vec3 vPosition;
          out vec3 vNormal;
          out vec4 vGLPosition;
  
          void main() {
            vec3 position = position;
            position.y *= 1. - max(-success, 0.);
            gl_Position = camera.projectionView * transform * vec4(position, 1.);
            vGLPosition = gl_Position;
            vPosition = position;

            // compute text uv
            vUv = uv;
            vUv = vUv * 2. - 1.;
            vUv.xy *= 1. / scaleOffset.xy;
            vUv.y *= .2;
            vUv *= 4.;
            vUv = vUv * .5 + .5;
            vNormal = normalize(mat3(transform) * normal);

            // vUv2 = fract(uv * .5 + uvOffset) * 20.;
            vUv2 = uv;
          }
        `,fragmentShader:`#version 300 es
          precision highp float;
  
          ${Gt.Camera()}

          uniform sampler2D textTexture;
          uniform sampler2D patternTexture;
          uniform sampler2D envMap;
          uniform float opacity;
          uniform float text;
          uniform vec3 typeColor;
          uniform Camera camera;
          uniform float success;
  
          in vec3 vNormal;
          in vec2 vUv;
          in vec2 vUv2;
          in vec4 vGLPosition;
          in vec3 vPosition;
  
          out vec4 fragColor;

          ${Ut.Light()}
          ${Ft.Ray()}
          ${Gt.rayFromCamera()}
          ${Mt.PhysicallyBasedMaterial()}
          ${jt.random()}
          ${Mt.ggx()}
          ${Mt.computeGGXLighting()}
          ${Mt.computePBRLighting({pbrReflectionFromRay:`
              vec3 color = texture(envMap, ray.direction.xz).rgb;
              color += max(0., pow(ray.direction.y, .1));
              return color;
            `})}
  
          void main() {

            Ray ray = rayFromCamera(vGLPosition.xy / vGLPosition.z, camera);
            
            vec3 color = vec3(0.);

            vec4 textTexel = texture(textTexture, vUv);
            vec4 patternTexel = texture(patternTexture, vUv2);

            float pattern = (patternTexel.r + patternTexel.g + patternTexel.b) / 3.;

            textTexel.a *= text;
            pattern *= 1. - text;

            vec3 diffuse = mix(typeColor, vec3(1.), (1. - pattern) * (1. - text));

            // color = diffuse;

            color += computePBRLighting(
              ray, 
              Light(vec3(1.), vec3(0.), vec3(-1.), .9),
              vPosition,
              vNormal,
              PhysicallyBasedMaterial(diffuse, 0., pattern, 1.)
              // PhysicallyBasedMaterial(diffuse * (1. - textTexel.a), pattern * .2, (1. - pattern), 1. - textTexel.a * .8)
              // PhysicallyBasedMaterial(diffuse * (1. - textTexel.a), 0., 1., 0.)
            );

            // color = mix(vec3(1.), diffuse, pattern);
            color *= min(1., 1. + success);

            fragColor.rgb = color;
            fragColor.rgb *= .2 + (1. - textTexel.a) * .8;
            fragColor.a = opacity;
            fragColor.a = 1.;

            float yRatio = vPosition.y / 5.;
            fragColor.a *= step(yRatio, 1. - success);

            if(fragColor.a <= 0.) {
              discard;
            }
          }
        `})}),Wt||(Wt=new Et({gl:this.gl,textScale:1,textAlign:"center",textContent:"",fillStyle:"white",font:"40px 'Raleway', sans-serif",offsetYPercentage:window.chrome?.2:-.2,paddingPercentageWidth:.2,paddingPercentageHeight:.2})),this._actionObjects=new Map;for(let n of this.player.actions){if(!n.type)continue;const e=Zt.get(n.type);this._actionObjects.set(n,{type:n.type,position:e.position,transform:new vt,opacity:0,success:0,rotation:e.rotation,color:e.color})}this._texturesData=new Map,this._socles=new Map,this._texts=new Map;for(let[n,r]of Zt){const e=new gt({gl:this.gl,minFilter:this.gl.LINEAR,wrapS:this.gl.CLAMP_TO_EDGE,wrapT:this.gl.CLAMP_TO_EDGE});Wt.textContent=r.text.toUpperCase(),e.data=Wt._canvas,this._texturesData.set(n,{texture:e,scaleOffset:new ht(Wt._scaleOffset)}),this._socles.set(n,{push:0})}this._typeSortedActionObjects=new Map;for(let n of this._actionObjects.values()){let e=this._typeSortedActionObjects.get(n.type);e||(e=[],this._typeSortedActionObjects.set(n.type,e)),e.push(n)}this.actionsDetector.onActionComplete.add(this.onActionComplete.bind(this)),this.actionsDetector.onAction.add(this.onAction.bind(this))}onAction({type:e}){TweenLite.to(this._socles.get(e),.1,{push:1})}onActionComplete({action:e}){const t=this._actionObjects.get(e);t&&TweenLite.to(t,.2,{success:e.success?1:-1})}resize({width:e,height:t}){this._width=e}draw({camera:a}={}){if(this.program){for(let a of this.player.actions){const i=this._actionObjects.get(a);if(!i)continue;const n=5*(this.player.currentTime-a.time);(i.opacity=t(0,1-d(n)*(0>n?.025:.2)),!!i.opacity)&&(i.transform.identity(),i.transform.rotateY(i.rotation-n),i.transform.x=i.position,i.transform.z=n,i.transform.scale(Qt),i.transform.scale(e(i.opacity,.2)),i.transform.multiply(this.transform,i.transform))}this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.program.use(),this.program.uniforms.set("text",0),this.program.uniforms.set("camera",a),this._patternTexture.bind({unit:1}),this._webcam.envMap.bind({unit:2}),this.program.uniforms.set("envMap",2);for(let[e,t]of this._typeSortedActionObjects){const a=Zt.get(e);this.program.uniforms.set("uvOffset",a.uvOffset),this.program.uniforms.set("typeColor",a.color);const i=this._meshes.get(e);i.indices.buffer.bind(),this.program.attributes.set(i.attributes);for(let e of t)e.opacity&&(this.program.uniforms.set("success",e.success),this.program.uniforms.set("opacity",e.opacity),this.program.uniforms.set("transform",e.transform),i.draw())}for(let e of["socleoutside","socleinside"]){const t=this._meshes.get(e);t.indices.buffer.bind(),this.program.attributes.set(t.attributes),this.program.uniforms.set("text","socleoutside"===e?1:0);for(let[a,i]of Zt){const n=this._texturesData.get(a);if(n.texture.bind(),this.program.uniforms.set("scaleOffset",n.scaleOffset),this.program.uniforms.set("opacity",1),this.program.uniforms.set("success",0),qt.identity(),qt.x=i.position,"socleinside"===e){const e=this._socles.get(a);e.push+=.2*-e.push,qt.y=.3*(e.push-1)}qt.scale(Qt),qt.multiply(this.transform,qt),this.program.uniforms.set("typeColor",i.color),this.program.uniforms.set("transform",qt),t.draw()}}this.gl.disable(this.gl.BLEND)}}}const $t=["Amazing!","You're a star","Perfect","So good","Yeah!!!","Ace!","Fantastic!!!","Impressive!","Well done"],Jt=["Ouch!","Too bad","Almost","Aie!","Be brave!","Not today","Oups!","Failed!","Nope!"];class ea extends Et{constructor({gl:e,player:t,actionsDetector:a,noiseTexture:i}){super({gl:e,textAlign:"center",textContent:"",fillStyle:Vt[5],textScale:1/window.devicePixelRatio,font:`${50*window.devicePixelRatio}px calgary_script`,paddingPercentageWidth:.2,paddingPercentageHeight:.2,offsetYPercentage:window.chrome?.2:0}),this._scale=1,this._tweenedScale=1,this._opacity=1,this._noiseTexture=i,this.program.add({uniforms:[["noiseTexture",1]],fragmentShaderChunks:[["start",`
          precision highp float;

          uniform float opacity;
          uniform sampler2D noiseTexture;
          uniform vec4 scaleOffset;

          ${jt.random()}
        `],["end",`
          fragColor.a = smoothstep(.01, 1., fragColor.a);
          vec4 noise = texture(noiseTexture, random(scaleOffset.x + scaleOffset.y) + vUv * scaleOffset.xy);
          // fragColor.a *= (-noise.r + opacity * 2.) * 10. ;
          // fragColor.rgb = (noise.rgb - opacity) * 20.;
          fragColor.a *= opacity;
          // fragColor.rgb = vec3(1., 0., 0.);
        `]]}),this.player=t,this.player.onActionChange.add(this.changeAction.bind(this)),a.onActionComplete.add(this.onActionComplete.bind(this))}onActionComplete({action:e}){const t=e.success?$t:Jt;this.textContent=t[Oe(Math.random()*t.length)]}changeAction({action:e}){let t=e.text;t&&("string"==typeof t&&(t=[t]),t[0]&&(this._scale=t[1]||1,this.textContent=t[0],this._scale=1))}set textContent(e){super.textContent=e;const t=p(1,1e3/this._canvas.width)*(this._scale||1);TweenLite.killTweensOf(this),TweenLite.fromTo(this,.2,{_tweenedScale:0},{_tweenedScale:t,ease:Back.easeOut}),TweenLite.fromTo(this,.2,{_opacity:0},{_opacity:1}),TweenLite.to(this,.2,{_opacity:0,_tweenedScale:0,delay:2})}get textContent(){return super.textContent}draw({camera:e}={}){this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA);const t=this._tweenedScale||1e-4;this.transform.scale(t),this._noiseTexture.bind({unit:1}),this.program.use(),this.program.uniforms.set("opacity",this._opacity),super.draw({camera:e}),this.gl.disable(this.gl.BLEND),this.transform.scale(1/t)}}class ta{constructor({gl:e,player:t,webcam:a,noiseTexture:i}){this.gl=e,this.webcam=a,this._noiseTexture=i,this.transform=new vt;const n=10,r=40;this._time=0,this.mesh=new Pt({gl:this.gl,attributes:[["position",{data:new Float32Array([.5*-n,0,-r,.5*-n,0,0,.5*n,0,-r,.5*n,0,0]),size:3}],["uv",{data:new Float32Array([0,1,0,0,1,1,1,0]),size:2}]]}),this.program=new Tt({gl:this.gl,uniforms:[["data",0]],vertexShader:`#version 300 es
        uniform mat4 projectionView;
        uniform mat4 transform;

        in vec3 position;
        in vec2 uv;

        out vec2 vUv;

        void main() {
          gl_Position = projectionView * transform * vec4(position, 1.);
          vUv = uv;
        }
      `,fragmentShader:`#version 300 es
        precision highp float;

        uniform float motion;
        uniform float volume;
        uniform float time;
        uniform sampler2D noiseTexture;

        in vec2 vUv;

        out vec4 fragColor;

        void main() {
          vec3 color = vec3(1.);
          float opacity = 1.;
          float displaced = vUv.x;
          vec4 noise = texture(noiseTexture, vec2(vUv.x, vUv.y * 4. + time * .3) * .2);
          float displacementRatio = volume * pow(1. - abs(vUv.y * 2. - 1.), 1.);
          displaced += cos(vUv.y * 40. + time * 10. + vUv.x * 3.14) * displacementRatio * .5;
          opacity = 1. - step(.01, fract(clamp(displaced, .05, .95) * 5. + .025));
          // opacity += (1. - step(.0005, vUv.y)) * (1. - pow(abs(vUv.x * 2. - 1.), 10.));
          opacity *= 1. - vUv.y;
          fragColor = vec4(color, opacity);
        }
      `})}draw({camera:e}={}){this._time+=.1,this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this._noiseTexture.bind(),this.program.use(),this.program.uniforms.set("projectionView",e.projectionView),this.program.uniforms.set("transform",this.transform),this.program.uniforms.set("volume",this.webcam.volume),this.program.uniforms.set("motion",this.webcam.motionRatio),this.program.uniforms.set("time",this._time),this.program.attributes.set(this.mesh.attributes),this.mesh.draw({mode:this.gl.TRIANGLE_STRIP,count:4}),this.gl.disable(this.gl.BLEND)}}class aa extends Et{constructor({gl:e}){super({gl:e,textScale:1/window.devicePixelRatio,textAlign:"center",textContent:"0",fillStyle:Vt[5],font:`${50*window.devicePixelRatio}px calgary_script`,paddingPercentageWidth:.2,paddingPercentageHeight:.2,offsetYPercentage:window.chrome?.2:0}),this._scale=1,this.program.add({fragmentShaderChunks:[["start",`
          precision highp float;
        `],["end",`
          // fragColor += .5;
        `]]})}draw({camera:e}={}){this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.transform.scale(this._scale),this.program.use(),super.draw({camera:e}),this.gl.disable(this.gl.BLEND),this.transform.scale(1/this._scale)}}const ia=ot.add({value:!1},"value",{label:"Camera Controller",reload:!0}).value,na=new zt,ra=new ft;class oa{constructor({gl:e,webcam:t,actionsDetector:a,player:i}={}){this.gl=e,this.webcam=t,this.player=i,this._pointer=ct.get(),this._cameraRotation=new _t,this._cameraTiltMaxAngle=.2,this._cameraTiltEasing=.02,this.gl.clearColor(1,1,1,1),this.gl.enable(this.gl.CULL_FACE),this.camera=new Rt,this._noiseTexture=new gt({gl:this.gl,minFilter:this.gl.LINEAR}),Ne.load("src/webgl/noise.png").then((e)=>{this._noiseTexture.data=e,this._noiseTexture.generateMipmap()}),this.cameraController=new Nt({matrix:this.camera.transform,distance:10,enabled:ia}),this.background=new Ht({gl:this.gl,webcam:this.webcam}),this.background.transform.scale([116,44,44]),this.background.transform.rotateX(.1),this.background.transform.y=-2.8,this.background.transform.z=1.5,this.actionTexts=new Kt({gl:this.gl,player:i,actionsDetector:a,webcam:t}),this.actionTexts.transform.rotateX(.1),this.actionTexts.transform.y=-2.8,this.actionTexts.transform.z=2.8,this.mainText=new ea({gl:this.gl,player:i,actionsDetector:a,noiseTexture:this._noiseTexture}),this.mainText.transform.y=3,this.ground=new ta({gl:this.gl,webcam:this.webcam,noiseTexture:this._noiseTexture,player:i}),this.ground.transform.rotateX(.1),this.ground.transform.y=-2.8,this.ground.transform.z=2.2,this.scoreText=new aa({gl:this.gl}),this.scoreText.transform.setPosition([5,0,0])}resize({width:e,height:t}){this.camera.aspectRatio=e/t,this.actionTexts.resize({width:e,height:t}),this.update()}set score(e){this.scoreText.textContent=e}update(){this._noiseTexture.data&&(this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.cameraController.enabled?this.cameraController.update():(this._cameraRotation.x+=(this._pointer.normalizedCenteredFlippedY.x*this._cameraTiltMaxAngle-this._cameraRotation.x)*this._cameraTiltEasing,this._cameraRotation.y+=(-this._pointer.normalizedCenteredFlippedY.y*this._cameraTiltMaxAngle-this._cameraRotation.y)*this._cameraTiltEasing,na.identity(),na.rotateY(this._cameraRotation.x),na.rotateX(this._cameraRotation.y),this.camera.transform.fromQuaternion(na),ra.set(0,0,1),ra.applyMatrix4(this.camera.transform),this.camera.transform.setPosition(ra.scale(10))),this.gl.enable(this.gl.DEPTH_TEST),this.background.draw({camera:this.camera}),this.actionTexts.draw({camera:this.camera}),this.mainText.draw({camera:this.camera}),this.ground.draw({camera:this.camera}),this.scoreText.draw({camera:this.camera}))}}window.customElements.define("christmasxp-yolohero-webgl",class extends Ge{connectedCallback(){super.connectedCallback(),this.canvas=document.createElement("canvas"),this.appendChild(this.canvas),this.player=null,this.actionsDetector=null,this.canvas=this.querySelector("canvas"),this.gl=this.canvas.getContext(WebGL2RenderingContext?"webgl2":"webgl",{depth:!0,alpha:!1,antialias:!0}),this.webcam=new kt({gl:this.gl}),window.addEventListener("resize",this._resizeBinded=this.resize.bind(this))}load(){return this.view=new oa({gl:this.gl,webcam:this.webcam,player:this.player,actionsDetector:this.actionsDetector}),this.resize(),Ne.onLoad}set score(e){this.view.score=e}disconnectedCallback(){window.removeEventListener("resize",this._resizeBinded)}resize(){let e=this.canvas.offsetWidth,t=this.canvas.offsetHeight;this.canvas.width=e*window.devicePixelRatio,this.canvas.height=t*window.devicePixelRatio,this.view.resize({width:e,height:t})}update(){this.view&&(this.view.update(),this.webcam.update())}});let sa;class la{static load(){return sa=sa||new Promise((e)=>{window.onYouTubeIframeAPIReady=()=>{e()};let t=document.createElement("script");t.src="//www.youtube.com/iframe_api",document.head.appendChild(t)}),sa}}let da;class _a{static load(){return da=da||new Promise((e)=>{let t=document.createElement("script");t.onload=e,t.src="//w.soundcloud.com/player/api.js",document.head.appendChild(t)}),da}}let pa=[];var ca={slices:new Map([["main",{startTime:.4,bpm:150,data:pa,timings:[]}]])};pa.push(["","Move your mouse"],[""],[""],[""],["mouse"],["mouse"],["mouse"],["mouse"],[""],[""],[""],["","Press any key"],[""],[""],[""],[""],["keyboard"],["keyboard"],["keyboard"],["keyboard"],[""],[""],[""],["","Time to dance!"],[""],[""],[""],[""],["motion","Shake your body!"],["motion"],["motion"],["motion"],[""],[""],[""],["","And... Make some noise!!!"],[""],[""],[""],[""],["sound"],["sound"],["sound"],["sound"],[""],["","Let's do this"],[""],[""],[""],["",["(sorry)",0.2]],[""],[""],[""],["keyboard"],[""],["keyboard"],[""],["keyboard"],[""],["keyboard"],[""],["keyboard"],[""],["mouse"],[""],["keyboard"],[""],["mouse"],[""],["motion"],["motion"],["motion"],["motion"],[["motion","mouse"]],[["motion","mouse"]],[["motion","mouse"]],[["motion","mouse"]],[""],[""]);const ma=ot.add({value:!1},"value",{label:"Mute Music",reload:!0}).value,ua=ot.add({value:0},"value",{label:"Time Offset",reload:!0}).value,ga=[...ca.slices.values()][0].startTime,fa=[];for(let e of ca.slices.values())for(let[t,a]of e.data.entries()){const i=a[0]instanceof Array?a[0]:[a[0]];for(let n=0;n<i.length;n++)fa.push({time:e.startTime+60*t/e.bpm-ga,type:i[n],text:0===n?a[1]||"":"",success:!1})}Ne.load("src/player/template.html").then((e)=>{let a=document.createElement("template");a.innerHTML=e,window.customElements.define("christmasxp-yolohero-player",class extends Ge{constructor(){super({autoplay:!1})}connectedCallback(){super.connectedCallback();let e=document.importNode(a.content,!0);this.appendChild(e),this.onActionChange=new Ve,this.bpm=0,this.currentTime=0,this.action={time:0},this._previousBeatTime=0,this._currentSliceStartTime=0,this._currentSlice=null,this._volume=1,this._globalVolume=1}load(){return this._loadPromise=this._loadPromise||new Promise((e)=>{this.querySelector("#soundcloud-player")?_a.load().then(()=>{const t=SC.Widget(this.querySelector("iframe"));this._player={currentTime:0,set volume(e){t.setVolume(100*e)},play(){t.play()},pause(){t.pause()}},t.bind(SC.Widget.Events.FINISH,()=>{this.pause(),this.dispatchEvent(new Event("ended"))}),t.bind(SC.Widget.Events.READY,()=>{this.volume=ma?0:1,t.seekTo(1e3*ua),e()}),t.bind(SC.Widget.Events.PLAY_PROGRESS,(t)=>{this._player.currentTime+=.2*(.001*t.currentPosition-this._player.currentTime)})}):this.querySelector("#youtube-player")&&la.load().then(()=>{const t=new YT.Player("youtube-player",{height:"390",width:"640",videoId:"B-NckB3CQ9o",playerVars:{autoplay:1,start:Oe(ga)},events:{onReady:()=>{ma&&t.mute(),e()}}});this._player={get currentTime(){return t.getCurrentTime?t.getCurrentTime():0},play(){t.playVideo()}}})}),this._loadPromise}set volume(e){e=ma?0:e,this._volume=e,this._player.volume=this._volume*this._globalVolume}get volume(){return this._volume}set globalVolume(e){this._globalVolume=e,this.volume=this.volume}get globalVolume(){return this._globalVolume}get actions(){return fa}play(){super.play(),this._player.play()}pause(){super.pause(),this._player.pause()}update(){if(this._player){const e=this._player.currentTime;for(let t of ca.slices.values())t.startTime<this._currentSliceStartTime||e<t.startTime||t===this._currentSlice||(this._currentSliceStartTime=t.startTime,this.bpm=t.bpm,this._previousBeatTime=this._currentSliceStartTime);this.currentTime=e-ga,this.currentTime=t(this.currentTime,0);for(let e=0;e<this.actions.length;e++){const t=this.actions[e];t.time>=this.action.time&&t.time<=this.currentTime&&this.action!==t&&(this.action=t,this.onActionChange.dispatch({action:this.action}))}}}})});class ha{constructor({player:e}={}){this.webcam=null,this._player=e,this._pointer=ct.get(),this._actions=new Set(e.actions),this._currentActions=new Set,this.onAction=new Ve,this.onActionComplete=new Ve,$e.addEventListener("keydown",this.onKeyDown.bind(this)),this._pointer.onDown.add(this.onPointerDown.bind(this))}onPointerDown(){for(let e of this._currentActions)"click"===e.type&&(e.success=!0,this._currentActions.delete(e),this.onActionComplete.dispatch({action:e}))}onKeyDown(){this.onAction.dispatch({type:"keyboard"});for(let e of this._currentActions)"keyboard"===e.type&&(e.success=!0,this._currentActions.delete(e),this._actions.delete(e),this.onActionComplete.dispatch({action:e}))}update(){for(let e of this._actions)e.type&&this._player.bpm&&d(e.time-this._player.currentTime)<30/this._player.bpm&&this._currentActions.add(e);let e=!1,t=!1;this.webcam&&(e=.4<this.webcam.volume,e&&this.onAction.dispatch({type:"sound"}),t=1<this.webcam.motionRatio,t&&this.onAction.dispatch({type:"motion"}));const a=this._pointer.velocity.x&&this._pointer.velocity.y;a&&this.onAction.dispatch({type:"mouse"});for(let i of this._currentActions)this._player.currentTime-i.time>30/this._player.bpm&&(this._currentActions.delete(i),this._actions.delete(i),!i.success&&this.onActionComplete.dispatch({action:i})),"sound"===i.type&&e&&(i.success=!0,this.onActionComplete.dispatch({action:i}),this._currentActions.delete(i),this._actions.delete(i)),"motion"===i.type&&t&&(i.success=!0,this.onActionComplete.dispatch({action:i}),this._currentActions.delete(i),this._actions.delete(i)),"mouse"===i.type&&a&&(i.success=!0,this.onActionComplete.dispatch({action:i}),this._currentActions.delete(i),this._actions.delete(i))}}ot.add(Ye,"muted",{label:"Mute Sounds"});const ya=["173858__jivatma07__j1bonus-mono","213149__radiy__8bit-style-bonus-effect","253172__suntemple__retro-bonus-pickup-sfx","253177__suntemple__retro-accomplished-sfx","274177__littlerobotsoundfactory__jingle-win-synth-03","325805__wagna__collect","333489__robinhood76__06276-cash-bonus","341984__unadamlar__winning","345297__scrampunk__itemize","345299__scrampunk__okay"],va=["159408__noirenex__life-lost-game-over","333785__projectsu012__8-bit-failure-sound","350982__cabled-mess__lose-c-06","404743__owlstorm__retro-video-game-sfx-fail","wilhelm"];class ba{constructor({actionsDetector:e}){for(let t of va)new Ye({src:`src/main/sounds/fail/${t}.mp3`});for(let t of ya)new Ye({src:`src/main/sounds/success/${t}.mp3`,volume:.3});e.onActionComplete.add(this.onActionComplete.bind(this))}onActionComplete({action:e}){const t=e.success?ya:va,a=Ye.get(t[Oe(Math.random()*t.length)]);a.stop(),a.play()}}ot.visible=/\bgui\b/.test(window.location.search),Ne.load(["src/main/template.html","src/intro/template.html","src/outro/template.html","src/player/template.html","src/calgary_script.woff2"]).then(([e])=>{let t=document.createElement("template");t.innerHTML=e,window.customElements.define("christmasxp-yolohero-main",class extends Ge{connectedCallback(){super.connectedCallback();let e=document.importNode(t.content,!0);this.appendChild(e),this.score=0,this.intro=document.querySelector("christmasxp-yolohero-intro"),this.outro=document.querySelector("christmasxp-yolohero-outro"),this.player=document.querySelector("christmasxp-yolohero-player"),this._actionsDetector=new ha({player:this.player}),this._actionsDetector.onActionComplete.add(this.onActionComplete.bind(this)),this.webgl=document.querySelector("christmasxp-yolohero-webgl"),this.webgl.player=this.player,this.webgl.actionsDetector=this._actionsDetector,new ba({actionsDetector:this._actionsDetector}),Promise.all([this.player.load(),this.webgl.load()]).then(()=>{this._actionsDetector.webcam=this.webgl.webcam,this.intro.loading=!1,this.player.addEventListener("ended",this.onPlayerEnded.bind(this))}),this.intro.addEventListener("close",()=>{this.player.load().then(()=>{this.player.play(),TweenLite.fromTo(this.player,5,{globalVolume:0},{globalVolume:1})})})}onPlayerEnded(){this.outro.score=this.score,this.outro.visible=!0}onActionComplete({action:e}){return e.success?void(this.score+=10,this.webgl.score=this.score):(TweenLite.to(this.player,.2,{volume:.3}),void TweenLite.to(this.player,1,{volume:1,delay:.5}))}update(){this._actionsDetector.update()}})})}}})})(function(e){"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&module.exports&&"function"==typeof require?module.exports=e():e()});