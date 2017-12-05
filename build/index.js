!function(_){function T(i){Object.defineProperty(this,i,{enumerable:!0,get:function(){return this[t][i]}})}function g(i){if("undefined"!=typeof System&&System.isModule?System.isModule(i):"[object Module]"===Object.prototype.toString.call(i))return i;var a={default:i,__useDefault:i};if(i&&i.__esModule)for(var t in i)Object.hasOwnProperty.call(i,t)&&(a[t]=i[t]);return new h(a)}function h(i){Object.defineProperty(this,t,{value:i}),Object.keys(i).forEach(T,this)}function b(t){return"@node/"===t.substr(0,6)?u(t,g(p(t.substr(6))),{}):a[t]}function r(i){var e=b(i);if(!e)throw new Error("Module \""+i+"\" expected, but not contained in build.");if(e.module)return e.module;var a=e.linkRecord;return n(e,a),s(e,a,[]),e.module}function n(a,e){if(!e.depLoads){e.declare&&i(a,e),e.depLoads=[];for(var t=0,r;t<e.deps.length;t++){r=b(e.deps[t]),e.depLoads.push(r),r.linkRecord&&n(r,r.linkRecord);var o=e.setters&&e.setters[t];o&&(o(r.module||r.linkRecord.moduleObj),r.importerSetters.push(o))}return a}}function i(e,t){var a=t.moduleObj,r=e.importerSetters,n=!1,o=t.declare.call(_,function(o,s){if(!n){if("object"==typeof o)for(var t in o)"__useDefault"!==t&&(a[t]=o[t]);else a[o]=s;n=!0;for(var l=0;l<r.length;l++)r[l](a);return n=!1,s}},{id:e.key});"function"==typeof o?(t.setters=[],t.execute=o):(t.setters=o.setters,t.execute=o.execute)}function o(i,n,o){return a[i]={key:i,module:void 0,importerSetters:[],linkRecord:{deps:n,depLoads:void 0,declare:o,setters:void 0,execute:void 0,moduleObj:{}}}}function d(i,s,l,d){var _={};return a[i]={key:i,module:void 0,importerSetters:[],linkRecord:{deps:s,depLoads:void 0,declare:void 0,execute:d,executingRequire:l,moduleObj:{default:_,__useDefault:_},setters:void 0}}}function e(a,e,t){return function(r){for(var o=0;o<a.length;o++)if(a[o]===r){var n=e[o],i=n.linkRecord,l;return l=i?-1===t.indexOf(n)?s(n,i,t):i.moduleObj:n.module,"__useDefault"in l?l.__useDefault:l}}}function s(a,t,r){if(r.push(a),a.module)return a.module;var n;if(t.setters){for(var o=0;o<t.deps.length;o++){var i=t.depLoads[o],d=i.linkRecord;d&&-1===r.indexOf(i)&&(n=s(i,d,d.setters?r:[]))}t.execute.call(S)}else{var l={id:a.key},u=t.moduleObj;Object.defineProperty(l,"exports",{configurable:!0,set:function(t){u.default=u.__useDefault=t},get:function(){return u.__useDefault}});var c=e(t.deps,t.depLoads,r);if(!t.executingRequire)for(var o=0;o<t.deps.length;o++)c(t.deps[o]);var p=t.execute.call(_,c,u.__useDefault,l);void 0===p?l.exports!==u.__useDefault&&(u.default=u.__useDefault=l.exports):u.default=u.__useDefault=p;var T=u.__useDefault;if(T&&T.__esModule)for(var m in T)Object.hasOwnProperty.call(T,m)&&(u[m]=T[m])}var l=a.module=new h(t.moduleObj);if(!t.setters)for(var o=0;o<a.importerSetters.length;o++)a.importerSetters[o](l);return l}function u(i,n){return a[i]={key:i,module:n,importerSetters:[],linkRecord:void 0}}var a={},t="undefined"==typeof Symbol?"@@baseObject":Symbol();h.prototype=Object.create(null),"undefined"!=typeof Symbol&&Symbol.toStringTag&&(h.prototype[Symbol.toStringTag]="Module");var p="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,S={};return Object.freeze&&Object.freeze(S),function(s,e,t,n){return function(i){i(function(){u("@empty",new h({}));for(var i=0;i<e.length;i++)u(e[i],g(arguments[i],{}));n({_nodeRequire:p,register:o,registerDynamic:d,registry:{get:function(t){return a[t].module},set:u},newModule:function(t){return new h(t)}});var _=r(s[0]);if(1<s.length)for(var i=1;i<s.length;i++)r(s[i]);return t?_.__useDefault:(_ instanceof h&&Object.defineProperty(_,"__esModule",{value:!0}),_)})}}}("undefined"==typeof self?"undefined"==typeof global?this:global:self)(["a"],[],!1,function(s){var e=Math.pow,i=Math.tan,n=Math.sin,r=Math.cos,t=Math.max,o=Math.sqrt,l=Math.PI,a=Math.abs,_=Math.round,p=Math.min,d=this.require,c=this.exports,m=this.module;!function(d){function e(t,e){for(var i=t.split(".");i.length;)e=e[i.shift()];return e}function _(i){if("string"==typeof i)return e(i,d);if(!(i instanceof Array))throw new Error("Global exports must be a string or array.");for(var a={},t=0;t<i.length;t++)a[i[t].split(".").pop()]=e(i[t],d);return a}function n(e){if(-1===i.indexOf(e)){try{var t=d[e]}catch(t){i.push(e)}this(e,t)}}var t=s,i=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"],p;t.registry.set("@@global-helpers",t.newModule({prepareGlobal:function(e,t,r){var o=d.define;d.define=void 0;var m;if(r)for(var a in m={},r)m[a]=d[a],d[a]=r[a];return t||(p={},Object.keys(d).forEach(n,function(t,e){p[t]=e})),function(){var s=t?_(t):{},a=!!t,l;if(t||Object.keys(d).forEach(n,function(i,e){p[i]!==e&&void 0!==e&&(t||(s[i]=e,void 0==l?l=e:a||l===e||(a=!0)))}),s=a?s:l,m)for(var e in m)d[e]=m[e];return d.define=o,s}}}))}("undefined"==typeof self?global:self),s.registerDynamic("b",[],!1,function(e,t,i){var a=s.registry.get("@@global-helpers").prepareGlobal(i.id,null,null);return function(){(function(){"use strict";function i(e){var t=h.has(e);return e=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(e),!t&&e}function n(e){var t=e.isConnected;if(void 0!==t)return t;for(;e&&!(e.__CE_isImportDocument||e instanceof Document);)e=e.parentNode||(window.ShadowRoot&&e instanceof ShadowRoot?e.host:void 0);return e&&(e.__CE_isImportDocument||e instanceof Document)}function r(e,t){for(;t&&t!==e&&!t.nextSibling;)t=t.parentNode;return t&&t!==e?t.nextSibling:null}function o(t,i,a){a=a?a:new Set;for(var n=t;n;){if(n.nodeType===Node.ELEMENT_NODE){var s=n;i(s);var e=s.localName;if("link"===e&&"import"===s.getAttribute("rel")){if(n=s.import,n instanceof Node&&!a.has(n))for(a.add(n),n=n.firstChild;n;n=n.nextSibling)o(n,i,a);n=r(t,s);continue}else if("template"===e){n=r(t,s);continue}if(s=s.__CE_shadowRoot)for(s=s.firstChild;s;s=s.nextSibling)o(s,i,a)}n=n.firstChild?n.firstChild:r(t,n)}}function e(e,t,i){e[t]=i}function t(){this.a=new Map,this.o=new Map,this.f=[],this.b=!1}function s(e,t,i){e.a.set(t,i),e.o.set(i.constructor,i)}function l(e,t){e.b=!0,e.f.push(t)}function _(e,t){e.b&&o(t,function(t){return p(e,t)})}function p(e,t){if(e.b&&!t.__CE_patched){t.__CE_patched=!0;for(var i=0;i<e.f.length;i++)e.f[i](t)}}function u(e,t){var i=[];for(o(t,function(e){return i.push(e)}),t=0;t<i.length;t++){var a=i[t];1===a.__CE_state?e.connectedCallback(a):y(e,a)}}function g(e,t){var i=[];for(o(t,function(e){return i.push(e)}),t=0;t<i.length;t++){var a=i[t];1===a.__CE_state&&e.disconnectedCallback(a)}}function m(t,i,a){a=a?a:{};var n=a.w||new Set,r=a.s||function(e){return y(t,e)},s=[];if(o(i,function(i){if("link"===i.localName&&"import"===i.getAttribute("rel")){var a=i.import;a instanceof Node&&(a.__CE_isImportDocument=!0,a.__CE_hasRegistry=!0),a&&"complete"===a.readyState?a.__CE_documentLoadHandled=!0:i.addEventListener("load",function(){var a=i.import;if(!a.__CE_documentLoadHandled){a.__CE_documentLoadHandled=!0;var o=new Set(n);o.delete(a),m(t,a,{w:o,s:r})}})}else s.push(i)},n),t.b)for(i=0;i<s.length;i++)p(t,s[i]);for(i=0;i<s.length;i++)r(s[i])}function y(t,i){if(void 0===i.__CE_state){var a=i.ownerDocument;if((a.defaultView||a.__CE_isImportDocument&&a.__CE_hasRegistry)&&(a=t.a.get(i.localName))){a.constructionStack.push(i);var r=a.constructor;try{try{if(new r!==i)throw Error("The custom element constructor did not produce the element being upgraded.")}finally{a.constructionStack.pop()}}catch(e){throw i.__CE_state=2,e}if(i.__CE_state=1,i.__CE_definition=a,a.attributeChangedCallback)for(a=a.observedAttributes,r=0;r<a.length;r++){var o=a[r],e=i.getAttribute(o);null!==e&&t.attributeChangedCallback(i,o,null,e,null)}n(i)&&t.connectedCallback(i)}}}function a(e,t){this.c=e,this.a=t,this.b=void 0,m(this.c,this.a),"loading"===this.a.readyState&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}))}function f(e){e.b&&e.b.disconnect()}function d(){var e=this;this.b=this.a=void 0,this.f=new Promise(function(t){e.b=t,e.a&&t(e.a)})}function c(e){if(e.a)throw Error("Already resolved.");e.a=void 0,e.b&&e.b(void 0)}function b(e){this.i=!1,this.c=e,this.m=new Map,this.j=function(e){return e()},this.g=!1,this.l=[],this.u=new a(e,document)}function v(t){if(!1!==t.g){t.g=!1;for(var i=t.l,n=[],r=new Map,a=0;a<i.length;a++)r.set(i[a].localName,[]);for(m(t.c,document,{s:function(i){if(void 0===i.__CE_state){var a=i.localName,e=r.get(a);e?e.push(i):t.c.a.get(a)&&n.push(i)}}}),a=0;a<n.length;a++)y(t.c,n[a]);for(;0<i.length;){for(var e=i.shift(),a=e.localName,e=r.get(e.localName),o=0;o<e.length;o++)y(t.c,e[o]);(a=t.m.get(a))&&c(a)}}}function A(){var t=le;window.HTMLElement=function(){function e(){var i=this.constructor,n=t.o.get(i);if(!n)throw Error("The custom element being constructed was not registered with `customElements`.");var r=n.constructionStack;if(!r.length)return r=D.call(document,n.localName),Object.setPrototypeOf(r,i.prototype),r.__CE_state=1,r.__CE_definition=n,p(t,r),r;var n=r.length-1,e=r[n];if(e===B)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");return r[n]=B,Object.setPrototypeOf(e,i.prototype),p(t,e),e}return e.prototype=re.prototype,e}()}function x(t,e,i){function a(e){return function(){for(var i=[],a=0;a<arguments.length;++a)i[a-0]=arguments[a];for(var a=[],o=[],s=0,l;s<i.length;s++)if(l=i[s],l instanceof Element&&n(l)&&o.push(l),l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)a.push(l);else a.push(l);for(e.apply(this,i),i=0;i<o.length;i++)g(t,o[i]);if(n(this))for(i=0;i<a.length;i++)o=a[i],o instanceof Element&&u(t,o)}}i.h&&(e.prepend=a(i.h)),i.append&&(e.append=a(i.append))}function C(){var t=le;e(Document.prototype,"createElement",function(e){if(this.__CE_hasRegistry){var i=t.a.get(e);if(i)return new i.constructor}return e=D.call(this,e),p(t,e),e}),e(Document.prototype,"importNode",function(e,i){return e=H.call(this,e,i),this.__CE_hasRegistry?m(t,e):_(t,e),e}),e(Document.prototype,"createElementNS",function(e,i){if(this.__CE_hasRegistry&&(null===e||"http://www.w3.org/1999/xhtml"===e)){var a=t.a.get(i);if(a)return new a.constructor}return e=k.call(this,e,i),p(t,e),e}),x(t,Document.prototype,{h:F,append:z})}function w(){function t(e,t){Object.defineProperty(e,"textContent",{enumerable:t.enumerable,configurable:!0,get:t.get,set:function(r){if(this.nodeType===Node.TEXT_NODE)t.set.call(this,r);else{var a;if(this.firstChild){var o=this.childNodes,e=o.length;if(0<e&&n(this))for(var a=Array(e),s=0;s<e;s++)a[s]=o[s]}if(t.set.call(this,r),a)for(r=0;r<a.length;r++)g(i,a[r])}}})}var i=le;e(Node.prototype,"insertBefore",function(e,t){if(e instanceof DocumentFragment){var a=Array.prototype.slice.apply(e.childNodes);if(e=J.call(this,e,t),n(this))for(t=0;t<a.length;t++)u(i,a[t]);return e}return a=n(e),t=J.call(this,e,t),a&&g(i,e),n(this)&&u(i,e),t}),e(Node.prototype,"appendChild",function(t){if(t instanceof DocumentFragment){var a=Array.prototype.slice.apply(t.childNodes);if(t=I.call(this,t),n(this))for(var r=0;r<a.length;r++)u(i,a[r]);return t}return a=n(t),r=I.call(this,t),a&&g(i,t),n(this)&&u(i,t),r}),e(Node.prototype,"cloneNode",function(e){return e=q.call(this,e),this.ownerDocument.__CE_hasRegistry?m(i,e):_(i,e),e}),e(Node.prototype,"removeChild",function(t){var a=n(t),r=K.call(this,t);return a&&g(i,t),r}),e(Node.prototype,"replaceChild",function(t,a){if(t instanceof DocumentFragment){var r=Array.prototype.slice.apply(t.childNodes);if(t=L.call(this,t,a),n(this))for(g(i,a),a=0;a<r.length;a++)u(i,r[a]);return t}var r=n(t),e=L.call(this,t,a),o=n(this);return o&&g(i,a),r&&g(i,t),o&&u(i,t),e}),M&&M.get?t(Node.prototype,M):l(i,function(e){t(e,{enumerable:!0,configurable:!0,get:function(){for(var e=[],t=0;t<this.childNodes.length;t++)e.push(this.childNodes[t].textContent);return e.join("")},set:function(e){for(;this.firstChild;)K.call(this,this.firstChild);I.call(this,document.createTextNode(e))}})})}function E(t){function i(e){return function(){for(var i=[],a=0;a<arguments.length;++a)i[a-0]=arguments[a];for(var a=[],r=[],o=0,s;o<i.length;o++)if(s=i[o],s instanceof Element&&n(s)&&r.push(s),s instanceof DocumentFragment)for(s=s.firstChild;s;s=s.nextSibling)a.push(s);else a.push(s);for(e.apply(this,i),i=0;i<r.length;i++)g(t,r[i]);if(n(this))for(i=0;i<a.length;i++)r=a[i],r instanceof Element&&u(t,r)}}var r=Element.prototype;ie&&(r.before=i(ie)),ie&&(r.after=i(V)),ae&&e(r,"replaceWith",function(){for(var e=[],i=0;i<arguments.length;++i)e[i-0]=arguments[i];for(var i=[],a=[],r=0,o;r<e.length;r++)if(o=e[r],o instanceof Element&&n(o)&&a.push(o),o instanceof DocumentFragment)for(o=o.firstChild;o;o=o.nextSibling)i.push(o);else i.push(o);for(r=n(this),ae.apply(this,e),e=0;e<a.length;e++)g(t,a[e]);if(r)for(g(t,this),e=0;e<i.length;e++)a=i[e],a instanceof Element&&u(t,a)}),ne&&e(r,"remove",function(){var e=n(this);ne.call(this),e&&g(t,this)})}function G(){function t(e,t){Object.defineProperty(e,"innerHTML",{enumerable:t.enumerable,configurable:!0,get:t.get,set:function(i){var s=this,l;if(n(this)&&(l=[],o(this,function(e){e!==s&&l.push(e)})),t.set.call(this,i),l)for(var e=0,a;e<l.length;e++)a=l[e],1===a.__CE_state&&r.disconnectedCallback(a);return this.ownerDocument.__CE_hasRegistry?m(r,this):_(r,this),i}})}function i(t,i){e(t,"insertAdjacentElement",function(t,a){var o=n(a);return t=i.call(this,t,a),o&&g(r,a),n(t)&&u(r,a),t})}var r=le;N&&e(Element.prototype,"attachShadow",function(e){return this.__CE_shadowRoot=e=N.call(this,e)}),O&&O.get?t(Element.prototype,O):oe&&oe.get?t(HTMLElement.prototype,oe):l(r,function(e){t(e,{enumerable:!0,configurable:!0,get:function(){return q.call(this,!0).innerHTML},set:function(e){var t="template"===this.localName,i=t?this.content:this,a=D.call(document,this.localName);for(a.innerHTML=e;0<i.childNodes.length;)K.call(i,i.childNodes[0]);for(e=t?a.content:a;0<e.childNodes.length;)I.call(i,e.childNodes[0])}})}),e(Element.prototype,"setAttribute",function(e,t){if(1!==this.__CE_state)return Q.call(this,e,t);var i=P.call(this,e);Q.call(this,e,t),t=P.call(this,e),r.attributeChangedCallback(this,e,i,t,null)}),e(Element.prototype,"setAttributeNS",function(e,t,i){if(1!==this.__CE_state)return T.call(this,e,t,i);var a=S.call(this,e,t);T.call(this,e,t,i),i=S.call(this,e,t),r.attributeChangedCallback(this,t,a,i,e)}),e(Element.prototype,"removeAttribute",function(e){if(1!==this.__CE_state)return R.call(this,e);var t=P.call(this,e);R.call(this,e),null!==t&&r.attributeChangedCallback(this,e,t,null,null)}),e(Element.prototype,"removeAttributeNS",function(t,i){if(1!==this.__CE_state)return U.call(this,t,i);var a=S.call(this,t,i);U.call(this,t,i);var n=S.call(this,t,i);a!==n&&r.attributeChangedCallback(this,i,a,n,t)}),W?i(HTMLElement.prototype,W):$?i(Element.prototype,$):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched."),x(r,Element.prototype,{h:ee,append:te}),E(r)}var B=new function(){},h=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]);t.prototype.connectedCallback=function(e){var t=e.__CE_definition;t.connectedCallback&&t.connectedCallback.call(e)},t.prototype.disconnectedCallback=function(e){var t=e.__CE_definition;t.disconnectedCallback&&t.disconnectedCallback.call(e)},t.prototype.attributeChangedCallback=function(t,i,a,n,r){var e=t.__CE_definition;e.attributeChangedCallback&&-1<e.observedAttributes.indexOf(i)&&e.attributeChangedCallback.call(t,i,a,n,r)},a.prototype.f=function(e){var t=this.a.readyState;for("interactive"!==t&&"complete"!==t||f(this),t=0;t<e.length;t++)for(var i=e[t].addedNodes,a=0;a<i.length;a++)m(this.c,i[a])},b.prototype.define=function(t,n){var r=this;if(!(n instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!i(t))throw new SyntaxError("The element name '"+t+"' is not valid.");if(this.c.a.get(t))throw Error("A custom element with name '"+t+"' has already been defined.");if(this.i)throw Error("A custom element is already being defined.");this.i=!0;var o,_,p,c,u;try{var T=function(e){var t=g[e];if(void 0!==t&&!(t instanceof Function))throw Error("The '"+e+"' callback must be a function.");return t},g=n.prototype;if(!(g instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");o=T("connectedCallback"),_=T("disconnectedCallback"),p=T("adoptedCallback"),c=T("attributeChangedCallback"),u=n.observedAttributes||[]}catch(e){return}finally{this.i=!1}n={localName:t,constructor:n,connectedCallback:o,disconnectedCallback:_,adoptedCallback:p,attributeChangedCallback:c,observedAttributes:u,constructionStack:[]},s(this.c,t,n),this.l.push(n),this.g||(this.g=!0,this.j(function(){return v(r)}))},b.prototype.get=function(e){if(e=this.c.a.get(e))return e.constructor},b.prototype.whenDefined=function(e){if(!i(e))return Promise.reject(new SyntaxError("'"+e+"' is not a valid custom element name."));var t=this.m.get(e);return t?t.f:(t=new d,this.m.set(e,t),this.c.a.get(e)&&!this.l.some(function(t){return t.localName===e})&&c(t),t.f)},b.prototype.v=function(e){f(this.u);var t=this.j;this.j=function(i){return e(function(){return t(i)})}},window.CustomElementRegistry=b,b.prototype.define=b.prototype.define,b.prototype.get=b.prototype.get,b.prototype.whenDefined=b.prototype.whenDefined,b.prototype.polyfillWrapFlushCallback=b.prototype.v;var D=window.Document.prototype.createElement,k=window.Document.prototype.createElementNS,H=window.Document.prototype.importNode,F=window.Document.prototype.prepend,z=window.Document.prototype.append,j=window.DocumentFragment.prototype.prepend,Y=window.DocumentFragment.prototype.append,q=window.Node.prototype.cloneNode,I=window.Node.prototype.appendChild,J=window.Node.prototype.insertBefore,K=window.Node.prototype.removeChild,L=window.Node.prototype.replaceChild,M=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),N=window.Element.prototype.attachShadow,O=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),P=window.Element.prototype.getAttribute,Q=window.Element.prototype.setAttribute,R=window.Element.prototype.removeAttribute,S=window.Element.prototype.getAttributeNS,T=window.Element.prototype.setAttributeNS,U=window.Element.prototype.removeAttributeNS,$=window.Element.prototype.insertAdjacentElement,ee=window.Element.prototype.prepend,te=window.Element.prototype.append,ie=window.Element.prototype.before,V=window.Element.prototype.after,ae=window.Element.prototype.replaceWith,ne=window.Element.prototype.remove,re=window.HTMLElement,oe=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),W=window.HTMLElement.prototype.insertAdjacentElement,se=window.customElements;if(!se||se.forcePolyfill||"function"!=typeof se.define||"function"!=typeof se.get){var le=new t;A(),C(),x(le,DocumentFragment.prototype,{h:j,append:Y}),w(),G(),document.__CE_hasRegistry=!0;var X=new b(le);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:X})}}).call(self)}(this),a()}),s.registerDynamic("c",[],!0,function(e,t,r){var i=this||self;(function(t,e){"use strict";var o={},n=t.document,s=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!s.TweenLite){var l=function(e){var t=e.split("."),a=s,n;for(n=0;n<t.length;n++)a[t[n]]=a=a[t[n]]||{};return a},d=l("com.greensock"),c=1e-10,m=function(e){var t=[],a=e.length,n;for(n=0;n!==a;t.push(e[n++]));return t},u=function(){},T=function(){var e=Object.prototype.toString,t=e.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&e.call(i)===t)}}(),g={},f=function(t,a,d,_){this.sc=g[t]?g[t].sc:[],g[t]=this,this.gsClass=null,this.func=d;var p=[];this.check=function(c){for(var m=a.length,i=m,u,T,b,n;-1<--m;)(u=g[a[m]]||new f(a[m],[])).gsClass?(p[m]=u.gsClass,i--):c&&u.sc.push(this);if(0===i&&d){if(T=("com.greensock."+t).split("."),b=T.pop(),n=l(T.join("."))[b]=this.gsClass=d.apply(d,p),_)if(s[b]=o[b]=n,!("undefined"!=typeof r&&r.exports));else if(t===e)for(m in r.exports=o[e]=n,o)n[m]=o[m];else o[e]&&(o[e][b]=n);for(m=0;m<this.sc.length;m++)this.sc[m].check()}},this.check(!0)},b=t._gsDefine=function(e,t,i,a){return new f(e,t,i,a)},h=d._class=function(e,t,i){return t=t||function(){},b(e,[],function(){return t},i),t},S,a,i,y,P;b.globals=s;var v=[0,0,1,1],A=h("easing.Ease",function(e,t,i,a){this._func=e,this._type=i||0,this._power=a||0,this._params=t?v.concat(t):v},!0),x=A.map={},C=A.register=function(t,a,n,r){for(var o=a.split(","),s=o.length,i=(n||"easeIn,easeOut,easeInOut").split(","),l,e,_,p;-1<--s;)for(e=o[s],l=r?h("easing."+e,null,!0):d.easing[e]||{},_=i.length;-1<--_;)p=i[_],x[e+"."+p]=x[p+e]=l[p]=t.getRatio?t:t[p]||new t};for(i=A.prototype,i._calcEnd=!1,i.getRatio=function(e){if(this._func)return this._params[0]=e,this._func.apply(null,this._params);var i=this._type,t=this._power,a=1===i?1-e:2===i?e:0.5>e?2*e:2*(1-e);return 1===t?a*=a:2===t?a*=a*a:3===t?a*=a*a*a:4===t&&(a*=a*a*a*a),1===i?1-a:2===i?a:0.5>e?a/2:1-a/2},S=["Linear","Quad","Cubic","Quart","Quint,Strong"],a=S.length;-1<--a;)i=S[a]+",Power"+a,C(new A(null,null,1,a),i,"easeOut",!0),C(new A(null,null,2,a),i,"easeIn"+(0===a?",easeNone":"")),C(new A(null,null,3,a),i,"easeInOut");x.linear=d.easing.Linear.easeIn,x.swing=d.easing.Quad.easeInOut;var M=h("events.EventDispatcher",function(e){this._listeners={},this._eventTarget=e||this});i=M.prototype,i.addEventListener=function(e,t,a,n,r){r=r||0;var o=this._listeners[e],s=0,l,d;for(this!==y||P||y.wake(),null==o&&(this._listeners[e]=o=[]),d=o.length;-1<--d;)l=o[d],l.c===t&&l.s===a?o.splice(d,1):0==s&&l.pr<r&&(s=d+1);o.splice(s,0,{c:t,s:a,up:n,pr:r})},i.removeEventListener=function(e,t){var a=this._listeners[e],n;if(a)for(n=a.length;-1<--n;)if(a[n].c===t)return void a.splice(n,1)},i.dispatchEvent=function(e){var a=this._listeners[e],n,i,r;if(a)for(n=a.length,1<n&&(a=a.slice(0)),i=this._eventTarget;-1<--n;)r=a[n],r&&(r.up?r.c.call(r.s||i,{type:e,target:i}):r.c.call(r.s||i))};var w=t.requestAnimationFrame,E=t.cancelAnimationFrame,G=Date.now||function(){return new Date().getTime()},B=G();for(S=["ms","moz","webkit","o"],a=S.length;-1<--a&&!w;)w=t[S[a]+"RequestAnimationFrame"],E=t[S[a]+"CancelAnimationFrame"]||t[S[a]+"CancelRequestAnimationFrame"];h("Ticker",function(e,t){var i=this,a=G(),r=!1!==t&&w&&"auto",o=500,s=33,l=function(e){var t=G()-B,n,r;t>o&&(a+=t-s),B+=t,i.time=(B-a)/1e3,n=i.time-g,(!d||0<n||!0===e)&&(i.frame++,g+=n+(n>=T?4e-3:T-n),r=!0),!0!==e&&(m=_(l)),r&&i.dispatchEvent("tick")},d,_,m,T,g;M.call(i),i.time=i.frame=0,i.tick=function(){l(!0)},i.lagSmoothing=function(e,t){return arguments.length?void(o=e||1/c,s=p(t,o,0)):o<1/c},i.sleep=function(){null==m||(r&&E?E(m):clearTimeout(m),_=u,m=null,i===y&&(P=!1))},i.wake=function(e){null===m?e?a+=-B+(B=G()):10<i.frame&&(B=G()-o+5):i.sleep(),_=0===d?u:r&&w?w:function(e){return setTimeout(e,0|1e3*(g-i.time)+1)},i===y&&(P=!0),l(2)},i.fps=function(e){return arguments.length?void(d=e,T=1/(d||60),g=this.time+T,i.wake()):d},i.useRAF=function(e){return arguments.length?void(i.sleep(),r=e,i.fps(d)):r},i.fps(e),setTimeout(function(){"auto"===r&&5>i.frame&&"hidden"!==n.visibilityState&&i.useRAF(!1)},1500)}),i=d.Ticker.prototype=new d.events.EventDispatcher,i.constructor=d.Ticker;var D=h("core.Animation",function(e,t){if(this.vars=t=t||{},this._duration=this._totalDuration=e||0,this._delay=+t.delay||0,this._timeScale=1,this._active=!0===t.immediateRender,this.data=t.data,this._reversed=!0===t.reversed,!!J){P||y.wake();var i=this.vars.useFrames?q:J;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});y=D.ticker=new d.Ticker,i=D.prototype,i._dirty=i._gc=i._initted=i._paused=!1,i._totalTime=i._time=0,i._rawPrevTime=-1,i._next=i._last=i._onUpdate=i._timeline=i.timeline=null,i._paused=!1;var k=function(){P&&2e3<G()-B&&("hidden"!==n.visibilityState||!y.lagSmoothing())&&y.wake();var e=setTimeout(k,2e3);e.unref&&e.unref()};k(),i.play=function(e,t){return null!=e&&this.seek(e,t),this.reversed(!1).paused(!1)},i.pause=function(e,t){return null!=e&&this.seek(e,t),this.paused(!0)},i.resume=function(e,t){return null!=e&&this.seek(e,t),this.paused(!1)},i.seek=function(e,t){return this.totalTime(+e,!1!==t)},i.restart=function(e,t){return this.reversed(!1).paused(!1).totalTime(e?-this._delay:0,!1!==t,!0)},i.reverse=function(e,t){return null!=e&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},i.render=function(){},i.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},i.isActive=function(){var e=this._timeline,t=this._startTime,i;return!e||!this._gc&&!this._paused&&e.isActive()&&(i=e.rawTime(!0))>=t&&i<t+this.totalDuration()/this._timeScale-1e-7},i._enabled=function(e,t){return P||y.wake(),this._gc=!e,this._active=this.isActive(),!0!==t&&(e&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!e&&this.timeline&&this._timeline._remove(this,!0)),!1},i._kill=function(){return this._enabled(!1,!1)},i.kill=function(e,t){return this._kill(e,t),this},i._uncache=function(e){for(var t=e?this:this.timeline;t;)t._dirty=!0,t=t.timeline;return this},i._swapSelfInParams=function(e){for(var t=e.length,i=e.concat();-1<--t;)"{self}"===e[t]&&(i[t]=this);return i},i._callback=function(e){var t=this.vars,i=t[e],a=t[e+"Params"],n=t[e+"Scope"]||t.callbackScope||this,r=a?a.length:0;0===r?i.call(n):1===r?i.call(n,a[0]):2===r?i.call(n,a[0],a[1]):i.apply(n,a)},i.eventCallback=function(e,t,i,a){if("on"===(e||"").substr(0,2)){var n=this.vars;if(1===arguments.length)return n[e];null==t?delete n[e]:(n[e]=t,n[e+"Params"]=T(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,n[e+"Scope"]=a),"onUpdate"===e&&(this._onUpdate=t)}return this},i.delay=function(e){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+e-this._delay),this._delay=e,this):this._delay},i.duration=function(e){return arguments.length?(this._duration=this._totalDuration=e,this._uncache(!0),this._timeline.smoothChildTiming&&0<this._time&&this._time<this._duration&&0!==e&&this.totalTime(this._totalTime*(e/this._duration),!0),this):(this._dirty=!1,this._duration)},i.totalDuration=function(e){return this._dirty=!1,arguments.length?this.duration(e):this._totalDuration},i.time=function(e,t){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(e>this._duration?this._duration:e,t)):this._time},i.totalTime=function(e,t,i){if(P||y.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>e&&!i&&(e+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var a=this._totalDuration,n=this._timeline;if(e>a&&!i&&(e=a),this._startTime=(this._paused?this._pauseTime:n._time)-(this._reversed?a-e:e)/this._timeScale,n._dirty||this._uncache(!1),n._timeline)for(;n._timeline;)n._timeline._time!==(n._startTime+n._totalTime)/n._timeScale&&n.totalTime(n._totalTime,!0),n=n._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==e||0===this._duration)&&(L.length&&ee(),this.render(e,t,!1),L.length&&ee())}return this},i.progress=i.totalProgress=function(e,t){var i=this.duration();return arguments.length?this.totalTime(i*e,t):i?this._time/i:this.ratio},i.startTime=function(e){return arguments.length?(e!==this._startTime&&(this._startTime=e,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,e-this._delay)),this):this._startTime},i.endTime=function(e){return this._startTime+(!1==e?this.duration():this.totalDuration())/this._timeScale},i.timeScale=function(e){if(!arguments.length)return this._timeScale;var i,a;for(e=e||c,this._timeline&&this._timeline.smoothChildTiming&&(i=this._pauseTime,a=i||0===i?i:this._timeline.totalTime(),this._startTime=a-(a-this._startTime)*this._timeScale/e),this._timeScale=e,a=this.timeline;a&&a.timeline;)a._dirty=!0,a.totalDuration(),a=a.timeline;return this},i.reversed=function(e){return arguments.length?(e!=this._reversed&&(this._reversed=e,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},i.paused=function(e){if(!arguments.length)return this._paused;var t=this._timeline,i,a;return e!=this._paused&&t&&(!P&&!e&&y.wake(),i=t.rawTime(),a=i-this._pauseTime,!e&&t.smoothChildTiming&&(this._startTime+=a,this._uncache(!1)),this._pauseTime=e?i:null,this._paused=e,this._active=this.isActive(),!e&&0!==a&&this._initted&&this.duration()&&(i=t.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,this.render(i,i===this._totalTime,!0))),this._gc&&!e&&this._enabled(!0,!1),this};var R=h("core.SimpleTimeline",function(e){D.call(this,0,e),this.autoRemoveChildren=this.smoothChildTiming=!0});i=R.prototype=new D,i.constructor=R,i.kill()._gc=!1,i._first=i._last=i._recent=null,i._sortChildren=!1,i.add=i.insert=function(e,t){var i,a;if(e._startTime=+(t||0)+e._delay,e._paused&&this!==e._timeline&&(e._pauseTime=e._startTime+(this.rawTime()-e._startTime)/e._timeScale),e.timeline&&e.timeline._remove(e,!0),e.timeline=e._timeline=this,e._gc&&e._enabled(!0,!0),i=this._last,this._sortChildren)for(a=e._startTime;i&&i._startTime>a;)i=i._prev;return i?(e._next=i._next,i._next=e):(e._next=this._first,this._first=e),e._next?e._next._prev=e:this._last=e,e._prev=i,this._recent=e,this._timeline&&this._uncache(!0),this},i._remove=function(e,t){return e.timeline===this&&(!t&&e._enabled(!1,!0),e._prev?e._prev._next=e._next:this._first===e&&(this._first=e._next),e._next?e._next._prev=e._prev:this._last===e&&(this._last=e._prev),e._next=e._prev=e.timeline=null,e===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},i.render=function(e,t,i){var a=this._first,n;for(this._totalTime=this._time=this._rawPrevTime=e;a;)n=a._next,(a._active||e>=a._startTime&&!a._paused&&!a._gc)&&(a._reversed?a.render((a._dirty?a.totalDuration():a._totalDuration)-(e-a._startTime)*a._timeScale,t,i):a.render((e-a._startTime)*a._timeScale,t,i)),a=n},i.rawTime=function(){return P||y.wake(),this._totalTime};var O=h("TweenLite",function(e,a,n){if(D.call(this,a,n),this.render=O.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"==typeof e?O.selector(e)||e:e;var r=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),o=this.vars.overwrite,s,i,l;if(this._overwrite=o=null==o?Z[O.defaultOverwrite]:"number"==typeof o?o>>0:Z[o],(r||e instanceof Array||e.push&&T(e))&&"number"!=typeof e[0])for(this._targets=l=m(e),this._propLookup=[],this._siblings=[],s=0;s<l.length;s++){if(i=l[s],!i){l.splice(s--,1);continue}else if("string"==typeof i){i=l[s--]=O.selector(i),"string"==typeof i&&l.splice(s+1,1);continue}else if(i.length&&i!==t&&i[0]&&(i[0]===t||i[0].nodeType&&i[0].style&&!i.nodeType)){l.splice(s--,1),this._targets=l=l.concat(m(i));continue}this._siblings[s]=te(i,this,!1),1===o&&1<this._siblings[s].length&&ae(i,this,null,1,this._siblings[s])}else this._propLookup={},this._siblings=te(e,this,!1),1===o&&1<this._siblings.length&&ae(e,this,null,1,this._siblings);(this.vars.immediateRender||0===a&&0===this._delay&&!1!==this.vars.immediateRender)&&(this._time=-c,this.render(p(0,-this._delay)))},!0),H=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},I=function(e,t){var i={},a;for(a in e)Q[a]||a in t&&"transform"!==a&&"x"!==a&&"y"!==a&&"width"!==a&&"height"!==a&&"className"!==a&&"border"!==a||j[a]&&(!j[a]||!j[a]._autoCSS)||(i[a]=e[a],delete e[a]);e.css=i};i=O.prototype=new D,i.constructor=O,i.kill()._gc=!1,i.ratio=0,i._firstPT=i._targets=i._overwrittenProps=i._startAt=null,i._notifyPluginsOfEnabled=i._lazy=!1,O.version="1.20.3",O.defaultEase=i._ease=new A(null,null,1,1),O.defaultOverwrite="auto",O.ticker=y,O.autoSleep=120,O.lagSmoothing=function(e,t){y.lagSmoothing(e,t)},O.selector=t.$||t.jQuery||function(i){var e=t.$||t.jQuery;return e?(O.selector=e,e(i)):"undefined"==typeof n?i:n.querySelectorAll?n.querySelectorAll(i):n.getElementById("#"===i.charAt(0)?i.substr(1):i)};var L=[],N={},V=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,F=/[\+-]=-?[\.\d]/,X=function(e){for(var t=this._firstPT,i=1e-6,a;t;)a=t.blob?1===e&&null!=this.end?this.end:e?this.join(""):this.start:t.c*e+t.s,t.m?a=t.m(a,this._target||t.t):a<i&&a>-i&&!t.blob&&(a=0),t.f?t.fp?t.t[t.p](t.fp,a):t.t[t.p](a):t.t[t.p]=a,t=t._next},U=function(e,t,n,r){var o=[],d=0,p="",s=0,c,m,u,T,g,l,f;for(o.start=e,o.end=t,e=o[0]=e+"",t=o[1]=t+"",n&&(n(o),e=o[0],t=o[1]),o.length=0,c=e.match(V)||[],m=t.match(V)||[],r&&(r._next=null,r.blob=1,o._firstPT=o._applyPT=r),g=m.length,T=0;T<g;T++)f=m[T],l=t.substr(d,t.indexOf(f,d)-d),p+=l||!T?l:",",d+=l.length,s?s=(s+1)%5:"rgba("===l.substr(-5)&&(s=1),f===c[T]||c.length<=T?p+=f:(p&&(o.push(p),p=""),u=parseFloat(c[T]),o.push(u),o._firstPT={_next:o._firstPT,t:o,p:o.length-1,s:u,c:("="===f.charAt(1)?parseInt(f.charAt(0)+"1",10)*parseFloat(f.substr(2)):parseFloat(f)-u)||0,f:0,m:s&&4>s?_:0}),d+=f.length;return p+=t.substr(d),p&&o.push(p),o.setRatio=X,F.test(t)&&(o.end=null),o},z=function(e,t,i,a,n,r,o,l,d){"function"==typeof a&&(a=a(d||0,e));var p=typeof e[t],c="function"==p?t.indexOf("set")||"function"!=typeof e["get"+t.substr(3)]?t:"get"+t.substr(3):"",m="get"===i?c?o?e[c](o):e[c]():e[t]:i,u="string"==typeof a&&"="===a.charAt(1),T={t:e,p:t,s:m,f:"function"==p,pg:0,n:n||t,m:r?"function"==typeof r?r:_:0,pr:0,c:u?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-m||0},g;if("number"==typeof m&&("number"==typeof a||u)||(o||isNaN(m)||!u&&isNaN(a)||"boolean"==typeof m||"boolean"==typeof a?(T.fp=o,g=U(m,u?parseFloat(T.s)+T.c:a,l||O.defaultStringFilter,T),T={t:g,p:"setRatio",s:0,c:1,f:2,pg:0,n:n||t,pr:0,m:0}):(T.s=parseFloat(m),!u&&(T.c=parseFloat(a)-T.s||0))),T.c)return(T._next=this._firstPT)&&(T._next._prev=T),this._firstPT=T,T},W=O._internals={isArray:T,isSelector:H,lazyTweens:L,blobDif:U},j=O._plugins={},K=W.tweenLookup={},Y=0,Q=W.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1,yoyoEase:1},Z={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,true:1,false:0},q=D._rootFramesTimeline=new R,J=D._rootTimeline=new R,$=30,ee=W.lazyRender=function(){var e=L.length,t;for(N={};-1<--e;)t=L[e],t&&!1!==t._lazy&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);L.length=0};J._startTime=y.time,q._startTime=y.frame,J._active=q._active=!0,setTimeout(ee,1),D._updateRoot=O.render=function(){var e,t,i;if(L.length&&ee(),J.render((y.time-J._startTime)*J._timeScale,!1,!1),q.render((y.frame-q._startTime)*q._timeScale,!1,!1),L.length&&ee(),y.frame>=$){for(i in $=y.frame+(parseInt(O.autoSleep,10)||120),K){for(t=K[i].tweens,e=t.length;-1<--e;)t[e]._gc&&t.splice(e,1);0===t.length&&delete K[i]}if(i=J._first,(!i||i._paused)&&O.autoSleep&&!q._first&&1===y._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||y.sleep()}}},y.addEventListener("tick",D._updateRoot);var te=function(e,t,n){var r=e._gsTweenID,o,a;if(K[r||(e._gsTweenID=r="t"+Y++)]||(K[r]={target:e,tweens:[]}),t&&(o=K[r].tweens,o[a=o.length]=t,n))for(;-1<--a;)o[a]===t&&o.splice(a,1);return K[r].tweens},ie=function(e,t,i,a){var n=e.vars.onOverwrite,r,o;return n&&(r=n(e,t,i,a)),n=O.onOverwrite,n&&(o=n(e,t,i,a)),!1!==r&&!1!==o},ae=function(e,t,a,n,r){var o,i,s,d;if(1===n||4<=n){for(d=r.length,o=0;o<d;o++)if((s=r[o])!==t)!s._gc&&s._kill(null,e,t)&&(i=!0);else if(5===n)break;return i}var l=t._startTime+c,_=[],p=0,m=0===t._duration,u;for(o=r.length;-1<--o;)if((s=r[o])===t||s._gc||s._paused);else s._timeline===t._timeline?s._startTime<=l&&s._startTime+s.totalDuration()/s._timeScale>l&&((m||!s._initted)&&2e-10>=l-s._startTime||(_[p++]=s)):(u=u||ne(t,0,m),0===ne(s,u,m)&&(_[p++]=s));for(o=p;-1<--o;)if(s=_[o],2===n&&s._kill(a,e,t)&&(i=!0),2!==n||!s._firstPT&&s._initted){if(2!==n&&!ie(s,t))continue;s._enabled(!1,!1)&&(i=!0)}return i},ne=function(e,i,a){for(var n=e._timeline,r=n._timeScale,o=e._startTime;n._timeline;){if(o+=n._startTime,r*=n._timeScale,n._paused)return-100;n=n._timeline}return o/=r,o>i?o-i:a&&o===i||!e._initted&&o-i<2*c?c:(o+=e.totalDuration()/e._timeScale/r)>i+c?0:o-i-c};i._init=function(){var e=this.vars,t=this._overwrittenProps,a=this._duration,n=!!e.immediateRender,r=e.ease,o,i,s,d,_,p;if(e.startAt){for(d in this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),_={},e.startAt)_[d]=e.startAt[d];if(_.data="isStart",_.overwrite=!1,_.immediateRender=!0,_.lazy=n&&!1!==e.lazy,_.startAt=_.delay=null,_.onUpdate=e.onUpdate,_.onUpdateParams=e.onUpdateParams,_.onUpdateScope=e.onUpdateScope||e.callbackScope||this,this._startAt=O.to(this.target,0,_),n)if(0<this._time)this._startAt=null;else if(0!==a)return}else if(e.runBackwards&&0!==a)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{for(d in 0!==this._time&&(n=!1),s={},e)Q[d]&&"autoCSS"!==d||(s[d]=e[d]);if(s.overwrite=0,s.data="isFromStart",s.lazy=n&&!1!==e.lazy,s.immediateRender=n,this._startAt=O.to(this.target,0,s),!n)this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null);else if(0===this._time)return}if(this._ease=r=r?r instanceof A?r:"function"==typeof r?new A(r,e.easeParams):x[r]||O.defaultEase:O.defaultEase,e.easeParams instanceof Array&&r.config&&(this._ease=r.config.apply(r,e.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(p=this._targets.length,o=0;o<p;o++)this._initProps(this._targets[o],this._propLookup[o]={},this._siblings[o],t?t[o]:null,o)&&(i=!0);else i=this._initProps(this.target,this._propLookup,this._siblings,t,0);if(i&&O._onPluginEvent("_onInitAllProps",this),t&&!this._firstPT&&"function"!=typeof this.target&&this._enabled(!1,!1),e.runBackwards)for(s=this._firstPT;s;)s.s+=s.c,s.c=-s.c,s=s._next;this._onUpdate=e.onUpdate,this._initted=!0},i._initProps=function(e,a,n,r,o){var s,l,i,d,_,p;if(null==e)return!1;for(s in N[e._gsTweenID]&&ee(),!this.vars.css&&e.style&&e!==t&&e.nodeType&&j.css&&!1!==this.vars.autoCSS&&I(this.vars,e),this.vars)if(p=this.vars[s],Q[s])p&&(p instanceof Array||p.push&&T(p))&&-1!==p.join("").indexOf("{self}")&&(this.vars[s]=p=this._swapSelfInParams(p,this));else if(j[s]&&(d=new j[s])._onInitTween(e,this.vars[s],this,o)){for(this._firstPT=_={_next:this._firstPT,t:d,p:"setRatio",s:0,c:1,f:1,n:s,pg:1,pr:d._priority,m:0},l=d._overwriteProps.length;-1<--l;)a[d._overwriteProps[l]]=this._firstPT;(d._priority||d._onInitAllProps)&&(i=!0),(d._onDisable||d._onEnable)&&(this._notifyPluginsOfEnabled=!0),_._next&&(_._next._prev=_)}else a[s]=z.call(this,e,s,"get",p,s,0,null,this.vars.stringFilter,o);return r&&this._kill(r,e)?this._initProps(e,a,n,r,o):1<this._overwrite&&this._firstPT&&1<n.length&&ae(e,this,a,this._overwrite,n)?(this._kill(a,e),this._initProps(e,a,n,r,o)):(this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration)&&(N[e._gsTweenID]=!0),i)},i.render=function(e,t,i){var a=this._time,n=this._duration,o=this._rawPrevTime,s,l,d,_;if(e>=n-1e-7&&0<=e)this._totalTime=this._time=n,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,l="onComplete",i=i||this._timeline.autoRemoveChildren),0===n&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(e=0),(0>o||0>=e&&-1e-7<=e||o===c&&"isPause"!==this.data)&&o!==e&&(i=!0,o>c&&(l="onReverseComplete")),this._rawPrevTime=_=!t||e||o===e?e:c);else if(1e-7>e)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==a||0===n&&0<o)&&(l="onReverseComplete",s=this._reversed),0>e&&(this._active=!1,0===n&&(this._initted||!this.vars.lazy||i)&&(0<=o&&(o!==c||"isPause"!==this.data)&&(i=!0),this._rawPrevTime=_=!t||e||o===e?e:c)),(!this._initted||this._startAt&&this._startAt.progress())&&(i=!0);else if(this._totalTime=this._time=e,this._easeType){var p=e/n,r=this._easeType,m=this._easePower;(1===r||3===r&&0.5<=p)&&(p=1-p),3===r&&(p*=2),1===m?p*=p:2===m?p*=p*p:3===m?p*=p*p*p:4===m&&(p*=p*p*p*p),this.ratio=1===r?1-p:2===r?p:0.5>e/n?p/2:1-p/2}else this.ratio=this._ease.getRatio(e/n);if(this._time!==a||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=a,this._rawPrevTime=o,L.push(this),void(this._lazy=[e,t]);this._time&&!s?this.ratio=this._ease.getRatio(this._time/n):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(!1!==this._lazy&&(this._lazy=!1),this._active||this._paused||this._time===a||!(0<=e)||(this._active=!0),0===a&&(this._startAt&&(0<=e?this._startAt.render(e,!0,i):!l&&(l="_dummyGS")),this.vars.onStart&&(0!==this._time||0===n)&&!t&&this._callback("onStart")),d=this._firstPT;d;)d.f?d.t[d.p](d.c*this.ratio+d.s):d.t[d.p]=d.c*this.ratio+d.s,d=d._next;this._onUpdate&&(0>e&&this._startAt&&-1e-4!==e&&this._startAt.render(e,!0,i),!t&&(this._time!==a||s||i)&&this._callback("onUpdate")),l&&(!this._gc||i)&&(0>e&&this._startAt&&!this._onUpdate&&-1e-4!==e&&this._startAt.render(e,!0,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!t&&this.vars[l]&&this._callback(l),0===n&&this._rawPrevTime===c&&_!==c&&(this._rawPrevTime=0))}},i._kill=function(e,t,a){if("all"===e&&(e=null),null==e&&(null==t||t===this.target))return this._lazy=!1,this._enabled(!1,!1);t="string"==typeof t?O.selector(t)||t:t||this._targets||this.target;var n=a&&this._time&&a._startTime===this._startTime&&this._timeline===a._timeline,r,i,o,s,l,d,_,p,c;if((T(t)||H(t))&&"number"!=typeof t[0])for(r=t.length;-1<--r;)this._kill(e,t[r],a)&&(d=!0);else{if(this._targets){for(r=this._targets.length;-1<--r;)if(t===this._targets[r]){l=this._propLookup[r]||{},this._overwrittenProps=this._overwrittenProps||[],i=this._overwrittenProps[r]=e?this._overwrittenProps[r]||{}:"all";break}}else{if(t!==this.target)return!1;l=this._propLookup,i=this._overwrittenProps=e?this._overwrittenProps||{}:"all"}if(l){if(_=e||l,p=e!==i&&"all"!==i&&e!==l&&("object"!=typeof e||!e._tempKill),a&&(O.onOverwrite||this.vars.onOverwrite)){for(o in _)l[o]&&(c||(c=[]),c.push(o));if((c||!e)&&!ie(this,a,t,c))return!1}for(o in _)(s=l[o])&&(n&&(s.f?s.t[s.p](s.s):s.t[s.p]=s.s,d=!0),s.pg&&s.t._kill(_)&&(d=!0),(!s.pg||0===s.t._overwriteProps.length)&&(s._prev?s._prev._next=s._next:s===this._firstPT&&(this._firstPT=s._next),s._next&&(s._next._prev=s._prev),s._next=s._prev=null),delete l[o]),p&&(i[o]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return d},i.invalidate=function(){return this._notifyPluginsOfEnabled&&O._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],D.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-c,this.render(p(0,-this._delay))),this},i._enabled=function(e,t){if(P||y.wake(),e&&this._gc){var a=this._targets,n;if(a)for(n=a.length;-1<--n;)this._siblings[n]=te(a[n],this,!0);else this._siblings=te(this.target,this,!0)}return D.prototype._enabled.call(this,e,t),this._notifyPluginsOfEnabled&&this._firstPT&&O._onPluginEvent(e?"_onEnable":"_onDisable",this)},O.to=function(e,t,i){return new O(e,t,i)},O.from=function(e,t,i){return i.runBackwards=!0,i.immediateRender=!1!=i.immediateRender,new O(e,t,i)},O.fromTo=function(e,t,i,a){return a.startAt=i,a.immediateRender=!1!=a.immediateRender&&!1!=i.immediateRender,new O(e,t,a)},O.delayedCall=function(e,t,i,a,n){return new O(t,0,{delay:e,onComplete:t,onCompleteParams:i,callbackScope:a,onReverseComplete:t,onReverseCompleteParams:i,immediateRender:!1,lazy:!1,useFrames:n,overwrite:0})},O.set=function(e,t){return new O(e,0,t)},O.getTweensOf=function(e,n){if(null==e)return[];e="string"==typeof e?O.selector(e)||e:e;var r,i,a,o;if((T(e)||H(e))&&"number"!=typeof e[0]){for(r=e.length,i=[];-1<--r;)i=i.concat(O.getTweensOf(e[r],n));for(r=i.length;-1<--r;)for(o=i[r],a=r;-1<--a;)o===i[a]&&i.splice(r,1)}else if(e._gsTweenID)for(i=te(e).concat(),r=i.length;-1<--r;)(i[r]._gc||n&&!i[r].isActive())&&i.splice(r,1);return i||[]},O.killTweensOf=O.killDelayedCallsTo=function(e,t,n){"object"==typeof t&&(n=t,t=!1);for(var r=O.getTweensOf(e,t),a=r.length;-1<--a;)r[a]._kill(n,e)};var re=h("plugins.TweenPlugin",function(e,t){this._overwriteProps=(e||"").split(","),this._propName=this._overwriteProps[0],this._priority=t||0,this._super=re.prototype},!0);if(i=re.prototype,re.version="1.19.0",re.API=2,i._firstPT=null,i._addTween=z,i.setRatio=X,i._kill=function(e){var t=this._overwriteProps,a=this._firstPT,n;if(null!=e[this._propName])this._overwriteProps=[];else for(n=t.length;-1<--n;)null!=e[t[n]]&&t.splice(n,1);for(;a;)null!=e[a.n]&&(a._next&&(a._next._prev=a._prev),a._prev?(a._prev._next=a._next,a._prev=null):this._firstPT===a&&(this._firstPT=a._next)),a=a._next;return!1},i._mod=i._roundProps=function(e){for(var t=this._firstPT,i;t;)i=e[this._propName]||null!=t.n&&e[t.n.split(this._propName+"_").join("")],i&&"function"==typeof i&&(2===t.f?t.t._applyPT.m=i:t.m=i),t=t._next},O._onPluginEvent=function(e,t){var i=t._firstPT,a,n,r,o,s;if("_onInitAllProps"===e){for(;i;){for(s=i._next,n=r;n&&n.pr>i.pr;)n=n._next;(i._prev=n?n._prev:o)?i._prev._next=i:r=i,(i._next=n)?n._prev=i:o=i,i=s}i=t._firstPT=r}for(;i;)i.pg&&"function"==typeof i.t[e]&&i.t[e]()&&(a=!0),i=i._next;return a},re.activate=function(e){for(var t=e.length;-1<--t;)e[t].API===re.API&&(j[new e[t]()._propName]=e[t]);return!0},b.plugin=function(e){if(!e||!e.propName||!e.init||!e.API)throw"illegal plugin definition.";var t=e.propName,i=e.priority||0,a=e.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},r=h("plugins."+t.charAt(0).toUpperCase()+t.substr(1)+"Plugin",function(){re.call(this,t,i),this._overwriteProps=a||[]},!0===e.global),o=r.prototype=new re(t),s;for(s in o.constructor=r,r.API=e.API,n)"function"==typeof e[s]&&(o[n[s]]=e[s]);return r.version=e.version,re.activate([r]),r},S=t._gsQueue,S){for(a=0;a<S.length;a++)S[a]();for(i in g)g[i].func||t.console.log("GSAP encountered missing dependency: "+i)}P=!1}})("undefined"!=typeof r&&r.exports&&"undefined"!=typeof i?i:t||window,"TweenLite")}),s.registerDynamic("d",[],!0,function(e,t,i){var a=this||self;!function(e,t){e(function(){"use strict";function i(e,t){return null!=e&&null!=t&&e.toLowerCase()===t.toLowerCase()}function a(t,i){var a=t.length,n,r;if(!a||!i)return!1;for(n=i.toLowerCase(),r=0;r<a;++r)if(n===t[r].toLowerCase())return!0;return!1}function n(e){for(var t in e)s.call(e,t)&&(e[t]=new RegExp(e[t],"i"))}function r(e,t){this.ua=e||"",this._cache={},this.maxPhoneWidth=t||600}var o={mobileDetectRules:{phones:{iPhone:"\\biPhone\\b|\\biPod\\b",BlackBerry:"BlackBerry|\\bBB10\\b|rim[0-9]+",HTC:"HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m",Nexus:"Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",Dell:"Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",Motorola:"Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b",Samsung:"\\bSamsung\\b|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C",LG:"\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323)",Sony:"SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",Asus:"Asus.*Galaxy|PadFone.*Mobile",NokiaLumia:"Lumia [0-9]{3,4}",Micromax:"Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",Palm:"PalmSource|Palm",Vertu:"Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",Pantech:"PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",Fly:"IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",Wiko:"KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",iMobile:"i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",SimValley:"\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",Wolfgang:"AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",Alcatel:"Alcatel",Nintendo:"Nintendo 3DS",Amoi:"Amoi",INQ:"INQ",GenericPhone:"Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"},tablets:{iPad:"iPad|iPad.*Mobile",NexusTablet:"Android.*Nexus[\\s]+(7|9|10)",SamsungTablet:"SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y",Kindle:"Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",SurfaceTablet:"Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",HPTablet:"HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",AsusTablet:"^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b",BlackBerryTablet:"PlayBook|RIM Tablet",HTCtablet:"HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",MotorolaTablet:"xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",NookTablet:"Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",AcerTablet:"Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",ToshibaTablet:"Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",LGTablet:"\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",FujitsuTablet:"Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",PrestigioTablet:"PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",LenovoTablet:"Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)",DellTablet:"Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",YarvikTablet:"Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",MedionTablet:"Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",ArnovaTablet:"97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",IntensoTablet:"INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",IRUTablet:"M702pro",MegafonTablet:"MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",EbodaTablet:"E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",AllViewTablet:"Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",ArchosTablet:"\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",AinolTablet:"NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",NokiaLumiaTablet:"Lumia 2520",SonyTablet:"Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|SOT31",PhilipsTablet:"\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",CubeTablet:"Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",CobyTablet:"MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",MIDTablet:"M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",MSITablet:"MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",SMiTTablet:"Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",RockChipTablet:"Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",FlyTablet:"IQ310|Fly Vision",bqTablet:"Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris [E|M]10)|Maxwell.*Lite|Maxwell.*Plus",HuaweiTablet:"MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim",NecTablet:"\\bN-06D|\\bN-08D",PantechTablet:"Pantech.*P4100",BronchoTablet:"Broncho.*(N701|N708|N802|a710)",VersusTablet:"TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",ZyncTablet:"z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",PositivoTablet:"TB07STA|TB10STA|TB07FTA|TB10FTA",NabiTablet:"Android.*\\bNabi",KoboTablet:"Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",DanewTablet:"DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",TexetTablet:"NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",PlaystationTablet:"Playstation.*(Portable|Vita)",TrekstorTablet:"ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",PyleAudioTablet:"\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",AdvanTablet:"Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",DanyTechTablet:"Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",GalapadTablet:"Android.*\\bG1\\b",MicromaxTablet:"Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",KarbonnTablet:"Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",AllFineTablet:"Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",PROSCANTablet:"\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",YONESTablet:"BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",ChangJiaTablet:"TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",GUTablet:"TX-A1301|TX-M9002|Q702|kf026",PointOfViewTablet:"TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",OvermaxTablet:"OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)",HCLTablet:"HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",DPSTablet:"DPS Dream 9|DPS Dual 7",VistureTablet:"V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",CrestaTablet:"CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",MediatekTablet:"\\bMT8125|MT8389|MT8135|MT8377\\b",ConcordeTablet:"Concorde([ ]+)?Tab|ConCorde ReadMan",GoCleverTablet:"GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",ModecomTablet:"FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",VoninoTablet:"\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",ECSTablet:"V07OT2|TM105A|S10OT1|TR10CS1",StorexTablet:"eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",VodafoneTablet:"SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497",EssentielBTablet:"Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",RossMoorTablet:"RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",iMobileTablet:"i-mobile i-note",TolinoTablet:"tolino tab [0-9.]+|tolino shine",AudioSonicTablet:"\\bC-22Q|T7-QC|T-17B|T-17P\\b",AMPETablet:"Android.* A78 ",SkkTablet:"Android.* (SKYPAD|PHOENIX|CYCLOPS)",TecnoTablet:"TECNO P9",JXDTablet:"Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",iJoyTablet:"Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",FX2Tablet:"FX2 PAD7|FX2 PAD10",XoroTablet:"KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",ViewsonicTablet:"ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",OdysTablet:"LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",CaptivaTablet:"CAPTIVA PAD",IconbitTablet:"NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",TeclastTablet:"T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",OndaTablet:"\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+",JaytechTablet:"TPC-PA762",BlaupunktTablet:"Endeavour 800NG|Endeavour 1010",DigmaTablet:"\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",EvolioTablet:"ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",LavaTablet:"QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",AocTablet:"MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",MpmanTablet:"MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",CelkonTablet:"CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",WolderTablet:"miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",MiTablet:"\\bMI PAD\\b|\\bHM NOTE 1W\\b",NibiruTablet:"Nibiru M1|Nibiru Jupiter One",NexoTablet:"NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",LeaderTablet:"TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",UbislateTablet:"UbiSlate[\\s]?7C",PocketBookTablet:"Pocketbook",KocasoTablet:"\\b(TB-1207)\\b",HisenseTablet:"\\b(F5281|E2371)\\b",Hudl:"Hudl HT7S3|Hudl 2",TelstraTablet:"T-Hub2",GenericTablet:"Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b"},oss:{AndroidOS:"Android",BlackBerryOS:"blackberry|\\bBB10\\b|rim tablet os",PalmOS:"PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",SymbianOS:"Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",WindowsMobileOS:"Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",WindowsPhoneOS:"Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",iOS:"\\biPhone.*Mobile|\\biPod|\\biPad",MeeGoOS:"MeeGo",MaemoOS:"Maemo",JavaOS:"J2ME/|\\bMIDP\\b|\\bCLDC\\b",webOS:"webOS|hpwOS",badaOS:"\\bBada\\b",BREWOS:"BREW"},uas:{Chrome:"\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",Dolfin:"\\bDolfin\\b",Opera:"Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+|Coast/[0-9.]+",Skyfire:"Skyfire",Edge:"Mobile Safari/[.0-9]* Edge",IE:"IEMobile|MSIEMobile",Firefox:"fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",Bolt:"bolt",TeaShark:"teashark",Blazer:"Blazer",Safari:"Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",UCBrowser:"UC.*Browser|UCWEB",baiduboxapp:"baiduboxapp",baidubrowser:"baidubrowser",DiigoBrowser:"DiigoBrowser",Puffin:"Puffin",Mercury:"\\bMercury\\b",ObigoBrowser:"Obigo",NetFront:"NF-Browser",GenericBrowser:"NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",PaleMoon:"Android.*PaleMoon|Mobile.*PaleMoon"},props:{Mobile:"Mobile/[VER]",Build:"Build/[VER]",Version:"Version/[VER]",VendorID:"VendorID/[VER]",iPad:"iPad.*CPU[a-z ]+[VER]",iPhone:"iPhone.*CPU[a-z ]+[VER]",iPod:"iPod.*CPU[a-z ]+[VER]",Kindle:"Kindle/[VER]",Chrome:["Chrome/[VER]","CriOS/[VER]","CrMo/[VER]"],Coast:["Coast/[VER]"],Dolfin:"Dolfin/[VER]",Firefox:["Firefox/[VER]","FxiOS/[VER]"],Fennec:"Fennec/[VER]",Edge:"Edge/[VER]",IE:["IEMobile/[VER];","IEMobile [VER]","MSIE [VER];","Trident/[0-9.]+;.*rv:[VER]"],NetFront:"NetFront/[VER]",NokiaBrowser:"NokiaBrowser/[VER]",Opera:[" OPR/[VER]","Opera Mini/[VER]","Version/[VER]"],"Opera Mini":"Opera Mini/[VER]","Opera Mobi":"Version/[VER]","UC Browser":"UC Browser[VER]",MQQBrowser:"MQQBrowser/[VER]",MicroMessenger:"MicroMessenger/[VER]",baiduboxapp:"baiduboxapp/[VER]",baidubrowser:"baidubrowser/[VER]",SamsungBrowser:"SamsungBrowser/[VER]",Iron:"Iron/[VER]",Safari:["Version/[VER]","Safari/[VER]"],Skyfire:"Skyfire/[VER]",Tizen:"Tizen/[VER]",Webkit:"webkit[ /][VER]",PaleMoon:"PaleMoon/[VER]",Gecko:"Gecko/[VER]",Trident:"Trident/[VER]",Presto:"Presto/[VER]",Goanna:"Goanna/[VER]",iOS:" \\bi?OS\\b [VER][ ;]{1}",Android:"Android [VER]",BlackBerry:["BlackBerry[\\w]+/[VER]","BlackBerry.*Version/[VER]","Version/[VER]"],BREW:"BREW [VER]",Java:"Java/[VER]","Windows Phone OS":["Windows Phone OS [VER]","Windows Phone [VER]"],"Windows Phone":"Windows Phone [VER]","Windows CE":"Windows CE/[VER]","Windows NT":"Windows NT [VER]",Symbian:["SymbianOS/[VER]","Symbian/[VER]"],webOS:["webOS/[VER]","hpwOS/[VER];"]},utils:{Bot:"Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",MobileBot:"Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",DesktopMode:"WPDesktop",TV:"SonyDTV|HbbTV",WebKit:"(webkit)[ /]([\\w.]+)",Console:"\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",Watch:"SM-V700"}},detectMobileBrowsers:{fullPattern:/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,shortPattern:/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,tabletPattern:/android|ipad|playbook|silk/i}},s=Object.prototype.hasOwnProperty,l;return o.FALLBACK_PHONE="UnknownPhone",o.FALLBACK_TABLET="UnknownTablet",o.FALLBACK_MOBILE="UnknownMobile",l="isArray"in Array?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},function(){var t=o.mobileDetectRules,r,a,d,_,e,i;for(r in t.props)if(s.call(t.props,r)){for(a=t.props[r],l(a)||(a=[a]),e=a.length,_=0;_<e;++_)d=a[_],i=d.indexOf("[VER]"),0<=i&&(d=d.substring(0,i)+"([\\w._\\+]+)"+d.substring(i+5)),a[_]=new RegExp(d,"i");t.props[r]=a}n(t.oss),n(t.phones),n(t.tablets),n(t.uas),n(t.utils),t.oss0={WindowsPhoneOS:t.oss.WindowsPhoneOS,WindowsMobileOS:t.oss.WindowsMobileOS}}(),o.findMatch=function(e,t){for(var i in e)if(s.call(e,i)&&e[i].test(t))return i;return null},o.findMatches=function(e,t){var i=[];for(var a in e)s.call(e,a)&&e[a].test(t)&&i.push(a);return i},o.getVersionStr=function(t,a){var n=o.mobileDetectRules.props,i,r,l,e;if(s.call(n,t))for(i=n[t],l=i.length,r=0;r<l;++r)if(e=i[r].exec(a),null!==e)return e[1];return null},o.getVersion=function(e,t){var i=o.getVersionStr(e,t);return i?o.prepareVersionNo(i):NaN},o.prepareVersionNo=function(e){var t;return t=e.split(/[a-z._ \/\-]/i),1===t.length&&(e=t[0]),1<t.length&&(e=t[0]+".",t.shift(),e+=t.join("")),+e},o.isMobileFallback=function(e){return o.detectMobileBrowsers.fullPattern.test(e)||o.detectMobileBrowsers.shortPattern.test(e.substr(0,4))},o.isTabletFallback=function(e){return o.detectMobileBrowsers.tabletPattern.test(e)},o.prepareDetectionCache=function(e,a,n){if(e.mobile===t){var s,l,d;return(l=o.findMatch(o.mobileDetectRules.tablets,a))?(e.mobile=e.tablet=l,void(e.phone=null)):(s=o.findMatch(o.mobileDetectRules.phones,a))?(e.mobile=e.phone=s,void(e.tablet=null)):void(o.isMobileFallback(a)?(d=r.isPhoneSized(n),d===t?(e.mobile=o.FALLBACK_MOBILE,e.tablet=e.phone=null):d?(e.mobile=e.phone=o.FALLBACK_PHONE,e.tablet=null):(e.mobile=e.tablet=o.FALLBACK_TABLET,e.phone=null)):o.isTabletFallback(a)?(e.mobile=e.tablet=o.FALLBACK_TABLET,e.phone=null):e.mobile=e.tablet=e.phone=null)}},o.mobileGrade=function(e){var t=null!==e.mobile();return e.os("iOS")&&4.3<=e.version("iPad")||e.os("iOS")&&3.1<=e.version("iPhone")||e.os("iOS")&&3.1<=e.version("iPod")||2.1<e.version("Android")&&e.is("Webkit")||7<=e.version("Windows Phone OS")||e.is("BlackBerry")&&6<=e.version("BlackBerry")||e.match("Playbook.*Tablet")||1.4<=e.version("webOS")&&e.match("Palm|Pre|Pixi")||e.match("hp.*TouchPad")||e.is("Firefox")&&12<=e.version("Firefox")||e.is("Chrome")&&e.is("AndroidOS")&&4<=e.version("Android")||e.is("Skyfire")&&4.1<=e.version("Skyfire")&&e.is("AndroidOS")&&2.3<=e.version("Android")||e.is("Opera")&&11<e.version("Opera Mobi")&&e.is("AndroidOS")||e.is("MeeGoOS")||e.is("Tizen")||e.is("Dolfin")&&2<=e.version("Bada")||(e.is("UC Browser")||e.is("Dolfin"))&&2.3<=e.version("Android")||e.match("Kindle Fire")||e.is("Kindle")&&3<=e.version("Kindle")||e.is("AndroidOS")&&e.is("NookTablet")||11<=e.version("Chrome")&&!t||5<=e.version("Safari")&&!t||4<=e.version("Firefox")&&!t||7<=e.version("MSIE")&&!t||10<=e.version("Opera")&&!t?"A":e.os("iOS")&&4.3>e.version("iPad")||e.os("iOS")&&3.1>e.version("iPhone")||e.os("iOS")&&3.1>e.version("iPod")||e.is("Blackberry")&&5<=e.version("BlackBerry")&&6>e.version("BlackBerry")||5<=e.version("Opera Mini")&&6.5>=e.version("Opera Mini")&&(2.3<=e.version("Android")||e.is("iOS"))||e.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3")||11<=e.version("Opera Mobi")&&e.is("SymbianOS")?"B":(5>e.version("BlackBerry")||e.match("MSIEMobile|Windows CE.*Mobile")||5.2>=e.version("Windows Mobile"),"C")},o.detectOS=function(e){return o.findMatch(o.mobileDetectRules.oss0,e)||o.findMatch(o.mobileDetectRules.oss,e)},o.getDeviceSmallerSide=function(){return window.screen.width<window.screen.height?window.screen.width:window.screen.height},r.prototype={constructor:r,mobile:function(){return o.prepareDetectionCache(this._cache,this.ua,this.maxPhoneWidth),this._cache.mobile},phone:function(){return o.prepareDetectionCache(this._cache,this.ua,this.maxPhoneWidth),this._cache.phone},tablet:function(){return o.prepareDetectionCache(this._cache,this.ua,this.maxPhoneWidth),this._cache.tablet},userAgent:function(){return this._cache.userAgent===t&&(this._cache.userAgent=o.findMatch(o.mobileDetectRules.uas,this.ua)),this._cache.userAgent},userAgents:function(){return this._cache.userAgents===t&&(this._cache.userAgents=o.findMatches(o.mobileDetectRules.uas,this.ua)),this._cache.userAgents},os:function(){return this._cache.os===t&&(this._cache.os=o.detectOS(this.ua)),this._cache.os},version:function(e){return o.getVersion(e,this.ua)},versionStr:function(e){return o.getVersionStr(e,this.ua)},is:function(e){return a(this.userAgents(),e)||i(e,this.os())||i(e,this.phone())||i(e,this.tablet())||a(o.findMatches(o.mobileDetectRules.utils,this.ua),e)},match:function(e){return e instanceof RegExp||(e=new RegExp(e,"i")),e.test(this.ua)},isPhoneSized:function(e){return r.isPhoneSized(e||this.maxPhoneWidth)},mobileGrade:function(){return this._cache.grade===t&&(this._cache.grade=o.mobileGrade(this)),this._cache.grade}},r.isPhoneSized="undefined"!=typeof window&&window.screen?function(e){return 0>e?t:o.getDeviceSmallerSide()<=e}:function(){},r._impl=o,r.version="1.3.7 2017-09-06",r})}(function(){if("undefined"!=typeof i&&i.exports)return function(e){i.exports=e()};if("undefined"!=typeof window)return function(e){window.MobileDetect=e()};throw new Error("unknown environment")}())}),s.registerDynamic("e",[],!0,function(s,d,c){var m=this||self,u="undefined"!=typeof c&&c.exports&&"undefined"!=typeof m?m:d||window;(u._gsQueue||(u._gsQueue=[])).push(function(){"use strict";var s=Math.atan2;u._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(e,t,n){var r=function(e){var t=[],a=e.length,n;for(n=0;n!==a;t.push(e[n++]));return t},o=function(e,t,a){var i=e.cycle,n,r;for(n in i)r=i[n],e[n]="function"==typeof r?r(a,t[a]):r[a%r.length];delete e.cycle},s=function(e,t,i){n.call(this,e,t,i),this._cycle=0,this._yoyo=!0===this.vars.yoyo||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._repeat&&this._uncache(!0),this.render=s.prototype.render},i=1e-10,d=n._internals,_=d.isSelector,c=d.isArray,a=s.prototype=n.to({},0.1,{}),l=[];s.version="1.20.3",a.constructor=s,a.kill()._gc=!1,s.killTweensOf=s.killDelayedCallsTo=n.killTweensOf,s.getTweensOf=n.getTweensOf,s.lagSmoothing=n.lagSmoothing,s.ticker=n.ticker,s.render=n.render,a.invalidate=function(){return this._yoyo=!0===this.vars.yoyo||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._yoyoEase=null,this._uncache(!0),n.prototype.invalidate.call(this)},a.updateTo=function(e,t){var i=this.ratio,a=this.vars.immediateRender||e.immediateRender,r;for(r in t&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay)),e)this.vars[r]=e[r];if(this._initted||a)if(t)this._initted=!1,a&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&n._onPluginEvent("_onDisable",this),0.998<this._time/this._duration){var o=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(o,!0,!1)}else if(this._initted=!1,this._init(),0<this._time||a)for(var s=this._firstPT,l;s;)l=s.s+s.c,s.c*=1/(1-i),s.s=l-s.c,s=s._next;return this},a.render=function(e,t,a){!this._initted&&0===this._duration&&this.vars.repeat&&this.invalidate();var o=this._dirty?this.totalDuration():this._totalDuration,s=this._time,l=this._totalTime,_=this._cycle,p=this._duration,c=this._rawPrevTime,m,u,T,g,f,r,b,h,S;if(e>=o-1e-7&&0<=e?(this._totalTime=o,this._cycle=this._repeat,this._yoyo&&0!=(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=p,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),!this._reversed&&(m=!0,u="onComplete",a=a||this._timeline.autoRemoveChildren),0===p&&(this._initted||!this.vars.lazy||a)&&(this._startTime===this._timeline._duration&&(e=0),(0>c||0>=e&&-1e-7<=e||c===i&&"isPause"!==this.data)&&c!==e&&(a=!0,c>i&&(u="onReverseComplete")),this._rawPrevTime=h=!t||e||c===e?e:i)):1e-7>e?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==l||0===p&&0<c)&&(u="onReverseComplete",m=this._reversed),0>e&&(this._active=!1,0===p&&(this._initted||!this.vars.lazy||a)&&(0<=c&&(a=!0),this._rawPrevTime=h=!t||e||c===e?e:i)),!this._initted&&(a=!0)):(this._totalTime=this._time=e,0!==this._repeat&&(g=p+this._repeatDelay,this._cycle=this._totalTime/g>>0,0!==this._cycle&&this._cycle===this._totalTime/g&&l<=e&&this._cycle--,this._time=this._totalTime-this._cycle*g,this._yoyo&&0!=(1&this._cycle)&&(this._time=p-this._time,S=this._yoyoEase||this.vars.yoyoEase,S&&(!this._yoyoEase&&(!0!==S||this._initted?this._yoyoEase=S=!0===S?this._ease:S instanceof Ease?S:Ease.map[S]:(S=this.vars.ease,this._yoyoEase=S=S?S instanceof Ease?S:"function"==typeof S?new Ease(S,this.vars.easeParams):Ease.map[S]||n.defaultEase:n.defaultEase)),this.ratio=S?1-S.getRatio((p-this._time)/p):0)),this._time>p?this._time=p:0>this._time&&(this._time=0)),this._easeType&&!S?(f=this._time/p,r=this._easeType,b=this._easePower,(1===r||3===r&&0.5<=f)&&(f=1-f),3===r&&(f*=2),1===b?f*=f:2===b?f*=f*f:3===b?f*=f*f*f:4===b&&(f*=f*f*f*f),this.ratio=1===r?1-f:2===r?f:0.5>this._time/p?f/2:1-f/2):!S&&(this.ratio=this._ease.getRatio(this._time/p))),s===this._time&&!a&&_===this._cycle)return void(l!==this._totalTime&&this._onUpdate&&!t&&this._callback("onUpdate"));if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!a&&this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration))return this._time=s,this._totalTime=l,this._rawPrevTime=c,this._cycle=_,d.lazyTweens.push(this),void(this._lazy=[e,t]);!this._time||m||S?m&&this._ease._calcEnd&&!S&&(this.ratio=this._ease.getRatio(0===this._time?0:1)):this.ratio=this._ease.getRatio(this._time/p)}for(!1!==this._lazy&&(this._lazy=!1),this._active||this._paused||this._time===s||!(0<=e)||(this._active=!0),0===l&&(2===this._initted&&0<e&&this._init(),this._startAt&&(0<=e?this._startAt.render(e,!0,a):!u&&(u="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===p)&&!t&&this._callback("onStart")),T=this._firstPT;T;)T.f?T.t[T.p](T.c*this.ratio+T.s):T.t[T.p]=T.c*this.ratio+T.s,T=T._next;this._onUpdate&&(0>e&&this._startAt&&this._startTime&&this._startAt.render(e,!0,a),!t&&(this._totalTime!==l||u)&&this._callback("onUpdate")),this._cycle===_||t||this._gc||!this.vars.onRepeat||this._callback("onRepeat"),u&&(!this._gc||a)&&(0>e&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(e,!0,a),m&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!t&&this.vars[u]&&this._callback(u),0===p&&this._rawPrevTime===i&&h!==i&&(this._rawPrevTime=0))},s.to=function(e,t,i){return new s(e,t,i)},s.from=function(e,t,i){return i.runBackwards=!0,i.immediateRender=!1!=i.immediateRender,new s(e,t,i)},s.fromTo=function(e,t,i,a){return a.startAt=i,a.immediateRender=!1!=a.immediateRender&&!1!=i.immediateRender,new s(e,t,a)},s.staggerTo=s.allTo=function(e,t,d,m,u,T,g){m=m||0;var f=0,b=[],a=function(){d.onComplete&&d.onComplete.apply(d.onCompleteScope||this,arguments),u.apply(g||d.callbackScope||this,T||l)},h=d.cycle,S=d.startAt&&d.startAt.cycle,y,P,v,i;for(c(e)||("string"==typeof e&&(e=n.selector(e)||e),_(e)&&(e=r(e))),e=e||[],0>m&&(e=r(e),e.reverse(),m*=-1),y=e.length-1,v=0;v<=y;v++){for(i in P={},d)P[i]=d[i];if(h&&(o(P,e,v),null!=P.duration&&(t=P.duration,delete P.duration)),S){for(i in S=P.startAt={},d.startAt)S[i]=d.startAt[i];o(P.startAt,e,v)}P.delay=f+(P.delay||0),v===y&&u&&(P.onComplete=a),b[v]=new s(e[v],t,P),f+=m}return b},s.staggerFrom=s.allFrom=function(e,t,i,a,n,r,o){return i.runBackwards=!0,i.immediateRender=!1!=i.immediateRender,s.staggerTo(e,t,i,a,n,r,o)},s.staggerFromTo=s.allFromTo=function(e,t,i,a,n,r,o,l){return a.startAt=i,a.immediateRender=!1!=a.immediateRender&&!1!=i.immediateRender,s.staggerTo(e,t,a,n,r,o,l)},s.delayedCall=function(e,t,i,a,n){return new s(t,0,{delay:e,onComplete:t,onCompleteParams:i,callbackScope:a,onReverseComplete:t,onReverseCompleteParams:i,immediateRender:!1,useFrames:n,overwrite:0})},s.set=function(e,t){return new s(e,0,t)},s.isTweening=function(e){return 0<n.getTweensOf(e,!0).length};var p=function(e,t){for(var i=[],a=0,r=e._first;r;)r instanceof n?i[a++]=r:(t&&(i[a++]=r),i=i.concat(p(r,t)),a=i.length),r=r._next;return i},m=s.getAllTweens=function(t){return p(e._rootTimeline,t).concat(p(e._rootFramesTimeline,t))};s.killAll=function(e,n,r,o){null==n&&(n=!0),null==r&&(r=!0);var s=m(!1!=o),a=s.length,l=n&&r&&o,d,_,p;for(p=0;p<a;p++)_=s[p],(l||_ instanceof t||(d=_.target===_.vars.onComplete)&&r||n&&!d)&&(e?_.totalTime(_._reversed?0:_.totalDuration()):_._enabled(!1,!1))},s.killChildTweensOf=function(e,t){if(null!=e){var o=d.tweenLookup,m,a,u,p,i;if("string"==typeof e&&(e=n.selector(e)||e),_(e)&&(e=r(e)),c(e)){for(p=e.length;-1<--p;)s.killChildTweensOf(e[p],t);return}for(u in m=[],o)for(a=o[u].target.parentNode;a;)a===e&&(m=m.concat(o[u].tweens)),a=a.parentNode;for(i=m.length,p=0;p<i;p++)t&&m[p].totalTime(m[p].totalDuration()),m[p]._enabled(!1,!1)}};var u=function(e,n,r,o){n=!1!==n,r=!1!==r,o=!1!==o;for(var s=m(o),a=n&&r&&o,l=s.length,i,d;-1<--l;)d=s[l],(a||d instanceof t||(i=d.target===d.vars.onComplete)&&r||n&&!i)&&d.paused(e)};return s.pauseAll=function(e,t,i){u(!0,e,t,i)},s.resumeAll=function(e,t,i){u(!1,e,t,i)},s.globalTimeScale=function(a){var r=e._rootTimeline,o=n.ticker.time;return arguments.length?(a=a||i,r._startTime=o-(o-r._startTime)*r._timeScale/a,r=e._rootFramesTimeline,o=n.ticker.frame,r._startTime=o-(o-r._startTime)*r._timeScale/a,r._timeScale=e._rootTimeline._timeScale=a,a):r._timeScale},a.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!=(1&this._cycle)?1-e:e)+this._cycle*(this._duration+this._repeatDelay),t):this._time/this.duration()},a.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this._totalTime/this.totalDuration()},a.time=function(e,t){return arguments.length?(this._dirty&&this.totalDuration(),e>this._duration&&(e=this._duration),this._yoyo&&0!=(1&this._cycle)?e=this._duration-e+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(e+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(e,t)):this._time},a.duration=function(t){return arguments.length?e.prototype.duration.call(this,t):this._duration},a.totalDuration=function(e){return arguments.length?-1===this._repeat?this:this.duration((e-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},a.repeat=function(e){return arguments.length?(this._repeat=e,this._uncache(!0)):this._repeat},a.repeatDelay=function(e){return arguments.length?(this._repeatDelay=e,this._uncache(!0)):this._repeatDelay},a.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},s},!0),u._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(e,t,n){var a=function(e){t.call(this,e),this._labels={},this.autoRemoveChildren=!0===this.vars.autoRemoveChildren,this.smoothChildTiming=!0===this.vars.smoothChildTiming,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i=this.vars,a,n;for(n in i)a=i[n],d(a)&&-1!==a.join("").indexOf("{self}")&&(i[n]=this._swapSelfInParams(a));d(i.tweens)&&this.add(i.tweens,0,i.align,i.stagger)},i=1e-10,r=n._internals,o=a._internals={},s=r.isSelector,d=r.isArray,l=r.lazyTweens,_=r.lazyRender,c=u._gsDefine.globals,m=function(e){var t={},i;for(i in e)t[i]=e[i];return t},T=function(e,t,a){var i=e.cycle,n,r;for(n in i)r=i[n],e[n]="function"==typeof r?r(a,t[a]):r[a%r.length];delete e.cycle},g=o.pauseCallback=function(){},f=function(e){var t=[],a=e.length,n;for(n=0;n!==a;t.push(e[n++]));return t},b=a.prototype=new t;return a.version="1.20.3",b.constructor=a,b.kill()._gc=b._forcingPlayhead=b._hasPause=!1,b.to=function(e,t,i,a){var r=i.repeat&&c.TweenMax||n;return t?this.add(new r(e,t,i),a):this.set(e,i,a)},b.from=function(e,t,i,a){return this.add((i.repeat&&c.TweenMax||n).from(e,t,i),a)},b.fromTo=function(e,t,i,a,r){var o=a.repeat&&c.TweenMax||n;return t?this.add(o.fromTo(e,t,i,a),r):this.set(e,a,r)},b.staggerTo=function(e,t,r,o,l,d,_,p){var c=new a({onComplete:d,onCompleteParams:_,callbackScope:p,smoothChildTiming:this.smoothChildTiming}),u=r.cycle,g,b;for("string"==typeof e&&(e=n.selector(e)||e),e=e||[],s(e)&&(e=f(e)),o=o||0,0>o&&(e=f(e),e.reverse(),o*=-1),b=0;b<e.length;b++)g=m(r),g.startAt&&(g.startAt=m(g.startAt),g.startAt.cycle&&T(g.startAt,e,b)),u&&(T(g,e,b),null!=g.duration&&(t=g.duration,delete g.duration)),c.to(e[b],t,g,b*o);return this.add(c,l)},b.staggerFrom=function(e,t,i,a,n,r,o,s){return i.immediateRender=!1!=i.immediateRender,i.runBackwards=!0,this.staggerTo(e,t,i,a,n,r,o,s)},b.staggerFromTo=function(e,t,i,a,n,r,o,s,l){return a.startAt=i,a.immediateRender=!1!=a.immediateRender&&!1!=i.immediateRender,this.staggerTo(e,t,a,n,r,o,s,l)},b.call=function(e,t,i,a){return this.add(n.delayedCall(0,e,t,i),a)},b.set=function(e,t,i){return i=this._parseTimeOrLabel(i,0,!0),null==t.immediateRender&&(t.immediateRender=i===this._time&&!this._paused),this.add(new n(e,0,t),i)},a.exportRoot=function(e,t){e=e||{},null==e.smoothChildTiming&&(e.smoothChildTiming=!0);var i=new a(e),r=i._timeline,o,s,l,d;for(null==t&&(t=!0),r._remove(i,!0),i._startTime=0,i._rawPrevTime=i._time=i._totalTime=r._time,l=r._first;l;)d=l._next,t&&l instanceof n&&l.target===l.vars.onComplete||(s=l._startTime-l._delay,0>s&&(o=1),i.add(l,s)),l=d;return r.add(i,0),o&&i.totalDuration(),i},b.add=function(r,o,s,_){var p,c,l,i,m,u;if("number"!=typeof o&&(o=this._parseTimeOrLabel(o,0,!0,r)),!(r instanceof e)){if(r instanceof Array||r&&r.push&&d(r)){for(s=s||"normal",_=_||0,p=o,c=r.length,l=0;l<c;l++)d(i=r[l])&&(i=new a({tweens:i})),this.add(i,p),"string"!=typeof i&&"function"!=typeof i&&("sequence"===s?p=i._startTime+i.totalDuration()/i._timeScale:"start"===s&&(i._startTime-=i.delay())),p+=_;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,o);if("function"==typeof r)r=n.delayedCall(0,r);else throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string."}if(t.prototype.add.call(this,r,o),r._time&&r.render((this.rawTime()-r._startTime)*r._timeScale,!1,!1),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(m=this,u=m.rawTime()>r._startTime;m._timeline;)u&&m._timeline.smoothChildTiming?m.totalTime(m._totalTime,!0):m._gc&&m._enabled(!0,!1),m=m._timeline;return this},b.remove=function(t){if(t instanceof e){this._remove(t,!1);var a=t._timeline=t.vars.useFrames?e._rootFramesTimeline:e._rootTimeline;return t._startTime=(t._paused?t._pauseTime:a._time)-(t._reversed?t.totalDuration()-t._totalTime:t._totalTime)/t._timeScale,this}if(t instanceof Array||t&&t.push&&d(t)){for(var n=t.length;-1<--n;)this.remove(t[n]);return this}return"string"==typeof t?this.removeLabel(t):this.kill(null,t)},b._remove=function(e,i){t.prototype._remove.call(this,e,i);var a=this._last;return a?this._time>this.duration()&&(this._time=this._duration,this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},b.append=function(e,t){return this.add(e,this._parseTimeOrLabel(null,t,!0,e))},b.insert=b.insertMultiple=function(e,t,i,a){return this.add(e,t||0,i,a)},b.appendMultiple=function(e,t,i,a){return this.add(e,this._parseTimeOrLabel(null,t,!0,e),i,a)},b.addLabel=function(e,t){return this._labels[e]=this._parseTimeOrLabel(t),this},b.addPause=function(e,i,a,r){var o=n.delayedCall(0,g,a,r||this);return o.vars.onComplete=o.vars.onReverseComplete=i,o.data="isPause",this._hasPause=!0,this.add(o,e)},b.removeLabel=function(e){return delete this._labels[e],this},b.getLabelTime=function(e){return null==this._labels[e]?-1:this._labels[e]},b._parseTimeOrLabel=function(t,a,n,r){var o,s;if(r instanceof e&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&d(r)))for(s=r.length;-1<--s;)r[s]instanceof e&&r[s].timeline===this&&this.remove(r[s]);if(o="number"!=typeof t||a?99999999999<this.duration()?this.recent().endTime(!1):this._duration:0,"string"==typeof a)return this._parseTimeOrLabel(a,n&&"number"==typeof t&&null==this._labels[a]?t-o:0,n);if(a=a||0,"string"==typeof t&&(isNaN(t)||null!=this._labels[t])){if(s=t.indexOf("="),-1===s)return null==this._labels[t]?n?this._labels[t]=o+a:a:this._labels[t]+a;a=parseInt(t.charAt(s-1)+"1",10)*+t.substr(s+1),t=1<s?this._parseTimeOrLabel(t.substr(0,s-1),0,n):o}else null==t&&(t=o);return+t+a},b.seek=function(e,t){return this.totalTime("number"==typeof e?e:this._parseTimeOrLabel(e),!1!==t)},b.stop=function(){return this.paused(!0)},b.gotoAndPlay=function(e,t){return this.play(e,t)},b.gotoAndStop=function(e,t){return this.pause(e,t)},b.render=function(e,t,a){this._gc&&this._enabled(!0,!1);var n=this._time,r=this._dirty?this.totalDuration():this._totalDuration,o=this._startTime,s=this._timeScale,d=this._paused,p,c,m,u,T,g,f;if(n!==this._time&&(e+=this._time-n),e>=r-1e-7&&0<=e)this._totalTime=this._time=r,this._reversed||this._hasPausedChild()||(c=!0,u="onComplete",T=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=e&&-1e-7<=e||0>this._rawPrevTime||this._rawPrevTime===i)&&this._rawPrevTime!==e&&this._first&&(T=!0,this._rawPrevTime>i&&(u="onReverseComplete"))),this._rawPrevTime=this._duration||!t||e||this._rawPrevTime===e?e:i,e=r+1e-4;else if(!(1e-7>e)){if(this._hasPause&&!this._forcingPlayhead&&!t){if(e>=n)for(p=this._first;p&&p._startTime<=e&&!g;)p._duration||"isPause"!==p.data||p.ratio||0===p._startTime&&0===this._rawPrevTime||(g=p),p=p._next;else for(p=this._last;p&&p._startTime>=e&&!g;)!p._duration&&"isPause"===p.data&&0<p._rawPrevTime&&(g=p),p=p._prev;g&&(this._time=e=g._startTime,this._totalTime=e+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=e}else if(this._totalTime=this._time=0,(0!==n||0===this._duration&&this._rawPrevTime!==i&&(0<this._rawPrevTime||0>e&&0<=this._rawPrevTime))&&(u="onReverseComplete",c=this._reversed),0>e)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(T=c=!0,u="onReverseComplete"):0<=this._rawPrevTime&&this._first&&(T=!0),this._rawPrevTime=e;else{if(this._rawPrevTime=this._duration||!t||e||this._rawPrevTime===e?e:i,0===e&&c)for(p=this._first;p&&0===p._startTime;)p._duration||(c=!1),p=p._next;e=0,this._initted||(T=!0)}if(this._time!==n&&this._first||a||T||g){if(this._initted||(this._initted=!0),this._active||this._paused||this._time===n||!(0<e)||(this._active=!0),0!==n||!this.vars.onStart||0===this._time&&this._duration||t||this._callback("onStart"),f=this._time,f>=n)for(p=this._first;p&&(m=p._next,f===this._time&&(!this._paused||d));)(p._active||p._startTime<=f&&!p._paused&&!p._gc)&&(g===p&&this.pause(),p._reversed?p.render((p._dirty?p.totalDuration():p._totalDuration)-(e-p._startTime)*p._timeScale,t,a):p.render((e-p._startTime)*p._timeScale,t,a)),p=m;else for(p=this._last;p&&(m=p._prev,f===this._time&&(!this._paused||d));){if(p._active||p._startTime<=n&&!p._paused&&!p._gc){if(g===p){for(g=p._prev;g&&g.endTime()>this._time;)g.render(g._reversed?g.totalDuration()-(e-g._startTime)*g._timeScale:(e-g._startTime)*g._timeScale,t,a),g=g._prev;g=null,this.pause()}p._reversed?p.render((p._dirty?p.totalDuration():p._totalDuration)-(e-p._startTime)*p._timeScale,t,a):p.render((e-p._startTime)*p._timeScale,t,a)}p=m}this._onUpdate&&!t&&(l.length&&_(),this._callback("onUpdate")),u&&!this._gc&&(o===this._startTime||s!==this._timeScale)&&(0===this._time||r>=this.totalDuration())&&(c&&(l.length&&_(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!t&&this.vars[u]&&this._callback(u))}},b._hasPausedChild=function(){for(var e=this._first;e;){if(e._paused||e instanceof a&&e._hasPausedChild())return!0;e=e._next}return!1},b.getChildren=function(e,t,i,r){r=r||-9999999999;for(var o=[],a=this._first,s=0;a;)a._startTime<r||(a instanceof n?!1!==t&&(o[s++]=a):(!1!==i&&(o[s++]=a),!1!==e&&(o=o.concat(a.getChildren(!0,t,i)),s=o.length))),a=a._next;return o},b.getTweensOf=function(e,t){var r=this._gc,o=[],a=0,s,l;for(r&&this._enabled(!0,!0),s=n.getTweensOf(e),l=s.length;-1<--l;)(s[l].timeline===this||t&&this._contains(s[l]))&&(o[a++]=s[l]);return r&&this._enabled(!1,!0),o},b.recent=function(){return this._recent},b._contains=function(e){for(var t=e.timeline;t;){if(t===this)return!0;t=t.timeline}return!1},b.shiftChildren=function(e,t,i){i=i||0;for(var a=this._first,n=this._labels,r;a;)a._startTime>=i&&(a._startTime+=e),a=a._next;if(t)for(r in n)n[r]>=i&&(n[r]+=e);return this._uncache(!0)},b._kill=function(e,t){if(!e&&!t)return this._enabled(!1,!1);for(var a=t?this.getTweensOf(t):this.getChildren(!0,!0,!1),n=a.length,i=!1;-1<--n;)a[n]._kill(e,t)&&(i=!0);return i},b.clear=function(e){var t=this.getChildren(!1,!0,!0),a=t.length;for(this._time=this._totalTime=0;-1<--a;)t[a]._enabled(!1,!1);return!1!==e&&(this._labels={}),this._uncache(!0)},b.invalidate=function(){for(var t=this._first;t;)t.invalidate(),t=t._next;return e.prototype.invalidate.call(this)},b._enabled=function(e,i){if(e===this._gc)for(var a=this._first;a;)a._enabled(e,!0),a=a._next;return t.prototype._enabled.call(this,e,i)},b.totalTime=function(){this._forcingPlayhead=!0;var t=e.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,t},b.duration=function(e){return arguments.length?(0!==this.duration()&&0!==e&&this.timeScale(this._duration/e),this):(this._dirty&&this.totalDuration(),this._duration)},b.totalDuration=function(e){if(!arguments.length){if(this._dirty){for(var t=0,i=this._last,a=999999999999,n,r;i;)n=i._prev,i._dirty&&i.totalDuration(),i._startTime>a&&this._sortChildren&&!i._paused&&!this._calculatingDuration?(this._calculatingDuration=1,this.add(i,i._startTime-i._delay),this._calculatingDuration=0):a=i._startTime,0>i._startTime&&!i._paused&&(t-=i._startTime,this._timeline.smoothChildTiming&&(this._startTime+=i._startTime/this._timeScale,this._time-=i._startTime,this._totalTime-=i._startTime,this._rawPrevTime-=i._startTime),this.shiftChildren(-i._startTime,!1,-9999999999),a=0),r=i._startTime+i._totalDuration/i._timeScale,r>t&&(t=r),i=n;this._duration=this._totalDuration=t,this._dirty=!1}return this._totalDuration}return e&&this.totalDuration()?this.timeScale(this._totalDuration/e):this},b.paused=function(t){if(!t)for(var i=this._first,a=this._time;i;)i._startTime===a&&"isPause"===i.data&&(i._rawPrevTime=0),i=i._next;return e.prototype.paused.apply(this,arguments)},b.usesFrames=function(){for(var t=this._timeline;t._timeline;)t=t._timeline;return t===e._rootFramesTimeline},b.rawTime=function(e){return e&&(this._paused||this._repeat&&0<this.time()&&1>this.totalProgress())?this._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(e)-this._startTime)*this._timeScale},a},!0),u._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(e,i,t){var n=function(t){e.call(this,t),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=!0===this.vars.yoyo,this._dirty=!0},r=1e-10,o=i._internals,s=o.lazyTweens,l=o.lazyRender,d=u._gsDefine.globals,_=new t(null,null,1,0),c=n.prototype=new e;return c.constructor=n,c.kill()._gc=!1,n.version="1.20.3",c.invalidate=function(){return this._yoyo=!0===this.vars.yoyo,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),e.prototype.invalidate.call(this)},c.addCallback=function(e,t,a,n){return this.add(i.delayedCall(0,e,a,n),t)},c.removeCallback=function(e,t){if(e)if(null==t)this._kill(null,e);else for(var n=this.getTweensOf(e,!1),a=n.length,i=this._parseTimeOrLabel(t);-1<--a;)n[a]._startTime===i&&n[a]._enabled(!1,!1);return this},c.removePause=function(t){return this.removeCallback(e._internals.pauseCallback,t)},c.tweenTo=function(e,n){n=n||{};var r={ease:_,useFrames:this.usesFrames(),immediateRender:!1},o=n.repeat&&d.TweenMax||i,s,l,p;for(l in n)r[l]=n[l];return r.time=this._parseTimeOrLabel(e),s=a(+r.time-this._time)/this._timeScale||1e-3,p=new o(this,s,r),r.onStart=function(){p.target.paused(!0),p.vars.time!==p.target.time()&&s===p.duration()&&p.duration(a(p.vars.time-p.target.time())/p.target._timeScale),n.onStart&&n.onStart.apply(n.onStartScope||n.callbackScope||p,n.onStartParams||[])},p},c.tweenFromTo=function(e,i,n){n=n||{},e=this._parseTimeOrLabel(e),n.startAt={onComplete:this.seek,onCompleteParams:[e],callbackScope:this},n.immediateRender=!1!==n.immediateRender;var r=this.tweenTo(i,n);return r.duration(a(r.vars.time-e)/this._timeScale||1e-3)},c.render=function(e,t,i){this._gc&&this._enabled(!0,!1);var a=this._time,n=this._dirty?this.totalDuration():this._totalDuration,o=this._duration,d=this._totalTime,_=this._startTime,p=this._timeScale,c=this._rawPrevTime,m=this._paused,u=this._cycle,T,g,f,b,h,S,y,P;if(a!==this._time&&(e+=this._time-a),e>=n-1e-7&&0<=e)this._locked||(this._totalTime=n,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(g=!0,b="onComplete",h=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=e&&-1e-7<=e||0>c||c===r)&&c!==e&&this._first&&(h=!0,c>r&&(b="onReverseComplete"))),this._rawPrevTime=this._duration||!t||e||this._rawPrevTime===e?e:r,this._yoyo&&0!=(1&this._cycle)?this._time=e=0:(this._time=o,e=o+1e-4);else if(1e-7>e){if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==a||0===o&&c!==r&&(0<c||0>e&&0<=c)&&!this._locked)&&(b="onReverseComplete",g=this._reversed),0>e)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(h=g=!0,b="onReverseComplete"):0<=c&&this._first&&(h=!0),this._rawPrevTime=e;else{if(this._rawPrevTime=o||!t||e||this._rawPrevTime===e?e:r,0===e&&g)for(T=this._first;T&&0===T._startTime;)T._duration||(g=!1),T=T._next;e=0,this._initted||(h=!0)}}else if(0===o&&0>c&&(h=!0),this._time=this._rawPrevTime=e,this._locked||(this._totalTime=e,0!==this._repeat&&(S=o+this._repeatDelay,this._cycle=this._totalTime/S>>0,0!==this._cycle&&this._cycle===this._totalTime/S&&d<=e&&this._cycle--,this._time=this._totalTime-this._cycle*S,this._yoyo&&0!=(1&this._cycle)&&(this._time=o-this._time),this._time>o?(this._time=o,e=o+1e-4):0>this._time?this._time=e=0:e=this._time)),this._hasPause&&!this._forcingPlayhead&&!t){if(e=this._time,e>=a||this._repeat&&u!==this._cycle)for(T=this._first;T&&T._startTime<=e&&!y;)T._duration||"isPause"!==T.data||T.ratio||0===T._startTime&&0===this._rawPrevTime||(y=T),T=T._next;else for(T=this._last;T&&T._startTime>=e&&!y;)!T._duration&&"isPause"===T.data&&0<T._rawPrevTime&&(y=T),T=T._prev;y&&y._startTime<o&&(this._time=e=y._startTime,this._totalTime=e+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==u&&!this._locked){var v=this._yoyo&&0!=(1&u),A=v===(this._yoyo&&0!=(1&this._cycle)),x=this._totalTime,C=this._cycle,M=this._rawPrevTime,w=this._time;if(this._totalTime=u*o,this._cycle<u?v=!v:this._totalTime+=o,this._time=a,this._rawPrevTime=0===o?c-1e-4:c,this._cycle=u,this._locked=!0,a=v?0:o,this.render(a,t,0===o),t||this._gc||!this.vars.onRepeat||(this._cycle=C,this._locked=!1,this._callback("onRepeat")),a!==this._time)return;if(A&&(this._cycle=u,this._locked=!0,a=v?o+1e-4:-1e-4,this.render(a,!0,!1)),this._locked=!1,this._paused&&!m)return;this._time=w,this._totalTime=x,this._cycle=C,this._rawPrevTime=M}if((this._time===a||!this._first)&&!i&&!h&&!y)return void(d!==this._totalTime&&this._onUpdate&&!t&&this._callback("onUpdate"));if(this._initted||(this._initted=!0),this._active||this._paused||this._totalTime===d||!(0<e)||(this._active=!0),0!==d||!this.vars.onStart||0===this._totalTime&&this._totalDuration||t||this._callback("onStart"),P=this._time,P>=a)for(T=this._first;T&&(f=T._next,P===this._time&&(!this._paused||m));)(T._active||T._startTime<=this._time&&!T._paused&&!T._gc)&&(y===T&&this.pause(),T._reversed?T.render((T._dirty?T.totalDuration():T._totalDuration)-(e-T._startTime)*T._timeScale,t,i):T.render((e-T._startTime)*T._timeScale,t,i)),T=f;else for(T=this._last;T&&(f=T._prev,P===this._time&&(!this._paused||m));){if(T._active||T._startTime<=a&&!T._paused&&!T._gc){if(y===T){for(y=T._prev;y&&y.endTime()>this._time;)y.render(y._reversed?y.totalDuration()-(e-y._startTime)*y._timeScale:(e-y._startTime)*y._timeScale,t,i),y=y._prev;y=null,this.pause()}T._reversed?T.render((T._dirty?T.totalDuration():T._totalDuration)-(e-T._startTime)*T._timeScale,t,i):T.render((e-T._startTime)*T._timeScale,t,i)}T=f}this._onUpdate&&!t&&(s.length&&l(),this._callback("onUpdate")),b&&!this._locked&&!this._gc&&(_===this._startTime||p!==this._timeScale)&&(0===this._time||n>=this.totalDuration())&&(g&&(s.length&&l(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!t&&this.vars[b]&&this._callback(b))},c.getActive=function(e,t,n){null==e&&(e=!0),null==t&&(t=!0),null==n&&(n=!1);var r=[],a=this.getChildren(e,t,n),o=0,s=a.length,l,i;for(l=0;l<s;l++)i=a[l],i.isActive()&&(r[o++]=i);return r},c.getLabelAfter=function(e){e||0===e||(e=this._time);var t=this.getLabelsArray(),a=t.length,n;for(n=0;n<a;n++)if(t[n].time>e)return t[n].name;return null},c.getLabelBefore=function(e){null==e&&(e=this._time);for(var t=this.getLabelsArray(),a=t.length;-1<--a;)if(t[a].time<e)return t[a].name;return null},c.getLabelsArray=function(){var e=[],t=0,i;for(i in this._labels)e[t++]={time:this._labels[i],name:i};return e.sort(function(e,t){return e.time-t.time}),e},c.invalidate=function(){return this._locked=!1,e.prototype.invalidate.call(this)},c.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!=(1&this._cycle)?1-e:e)+this._cycle*(this._duration+this._repeatDelay),t):this._time/this.duration()||0},c.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this._totalTime/this.totalDuration()||0},c.totalDuration=function(t){return arguments.length?-1!==this._repeat&&t?this.timeScale(this.totalDuration()/t):this:(this._dirty&&(e.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},c.time=function(e,t){return arguments.length?(this._dirty&&this.totalDuration(),e>this._duration&&(e=this._duration),this._yoyo&&0!=(1&this._cycle)?e=this._duration-e+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(e+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(e,t)):this._time},c.repeat=function(e){return arguments.length?(this._repeat=e,this._uncache(!0)):this._repeat},c.repeatDelay=function(e){return arguments.length?(this._repeatDelay=e,this._uncache(!0)):this._repeatDelay},c.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},c.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.getLabelBefore(this._time+1e-8)},n},!0),function(){var e=[],t=[],n=[],d={},i=u._gsDefine.globals,r=function(e,t,i,a){i===a&&(i=a-(a-t)/1e6),e===t&&(t=e+(i-e)/1e6),this.a=e,this.b=t,this.c=i,this.d=a,this.da=a-e,this.ca=i-e,this.ba=t-e},_=function(e,t,i,n){var r={a:e},o={},s={},l={c:n},_=(e+t)/2,p=(t+i)/2,c=(i+n)/2,m=(_+p)/2,u=(p+c)/2,T=(u-m)/8;return r.b=_+(e-_)/4,o.b=m+T,r.c=o.a=(r.b+o.b)/2,o.c=s.a=(m+u)/2,s.b=u-T,l.b=c+(n-c)/4,s.c=l.a=(s.b+l.b)/2,[r,o,s,l]},c=function(r,a,o,s,d){var p=r.length-1,l=0,c=r[0].a,m,i,u,T,g,f,b,h,S,y,P,v,A;for(m=0;m<p;m++)g=r[l],i=g.a,u=g.d,T=r[l+1].d,d?(P=e[m],v=t[m],A=0.25*((v+P)*a)/(s?0.5:n[m]||0.5),f=u-(u-i)*(s?0.5*a:0===P?0:A/P),b=u+(T-u)*(s?0.5*a:0===v?0:A/v),h=u-(f+((b-f)*(3*P/(P+v)+0.5)/4||0))):(f=u-0.5*((u-i)*a),b=u+0.5*((T-u)*a),h=u-(f+b)/2),f+=h,b+=h,g.c=S=f,g.b=0===m?c=g.a+0.6*(g.c-g.a):c,g.da=u-i,g.ca=S-i,g.ba=c-i,o?(y=_(i,c,S,u),r.splice(l,1,y[0],y[1],y[2],y[3]),l+=4):l++,c=b;g=r[l],g.b=c,g.c=c+0.4*(g.d-c),g.da=g.d-g.a,g.ca=g.c-g.a,g.ba=c-g.a,o&&(y=_(g.a,c,g.c,g.d),r.splice(l,1,y[0],y[1],y[2],y[3]))},m=function(n,o,s,d){var _=[],a,l,i,p,c,m;if(d)for(n=[d].concat(n),l=n.length;-1<--l;)"string"==typeof(m=n[l][o])&&"="===m.charAt(1)&&(n[l][o]=d[o]+ +(m.charAt(0)+m.substr(2)));if(a=n.length-2,0>a)return _[0]=new r(n[0][o],0,0,n[0][o]),_;for(l=0;l<a;l++)i=n[l][o],p=n[l+1][o],_[l]=new r(i,0,0,p),s&&(c=n[l+2][o],e[l]=(e[l]||0)+(p-i)*(p-i),t[l]=(t[l]||0)+(c-p)*(c-p));return _[l]=new r(n[l][o],0,0,n[l+1][o]),_},T=function(s,_,u,T,g,f){var b={},h=[],S=f||s[0],y,i,p,P,v,r,l,A;for(i in g="string"==typeof g?","+g+",":",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",null==_&&(_=1),s[0])h.push(i);if(1<s.length){for(A=s[s.length-1],l=!0,y=h.length;-1<--y;)if(i=h[y],0.05<a(S[i]-A[i])){l=!1;break}l&&(s=s.concat(),f&&s.unshift(f),s.push(s[1]),f=s[s.length-3])}for(e.length=t.length=n.length=0,y=h.length;-1<--y;)i=h[y],d[i]=-1!==g.indexOf(","+i+","),b[i]=m(s,i,d[i],f);for(y=e.length;-1<--y;)e[y]=o(e[y]),t[y]=o(t[y]);if(!T){for(y=h.length;-1<--y;)if(d[i])for(p=b[h[y]],r=p.length-1,P=0;P<r;P++)v=p[P+1].da/t[P]+p[P].da/e[P]||0,n[P]=(n[P]||0)+v*v;for(y=n.length;-1<--y;)n[y]=o(n[y])}for(y=h.length,P=u?4:1;-1<--y;)i=h[y],p=b[i],c(p,_,u,T,d[i]),l&&(p.splice(0,P),p.splice(p.length-P,P));return b},g=function(e,t,n){t=t||"soft";var o={},s="cubic"===t?3:2,_="soft"===t,m=[],u,a,T,c,d,g,i,f,l,p,b;if(_&&n&&(e=[n].concat(e)),null==e||e.length<s+1)throw"invalid Bezier data";for(l in e[0])m.push(l);for(g=m.length;-1<--g;){for(l=m[g],o[l]=d=[],p=0,f=e.length,i=0;i<f;i++)u=null==n?e[i][l]:"string"==typeof(b=e[i][l])&&"="===b.charAt(1)?n[l]+ +(b.charAt(0)+b.substr(2)):+b,_&&1<i&&i<f-1&&(d[p++]=(u+d[p-2])/2),d[p++]=u;for(f=p-s+1,p=0,i=0;i<f;i+=s)u=d[i],a=d[i+1],T=d[i+2],c=2==s?0:d[i+3],d[p++]=b=3==s?new r(u,a,T,c):new r(u,(2*a+u)/3,(2*a+T)/3,T);d.length=p}return o},f=function(e,t,a){for(var n=e.length,r,o,l,s,d,_,c,p,i,m,u;-1<--n;)for(m=e[n],l=m.a,s=m.d-l,d=m.c-l,_=m.b-l,r=o=0,p=1;p<=a;p++)c=1/a*p,i=1-c,r=o-(o=(c*c*s+3*i*(c*d+i*_))*c),u=n*a+p-1,t[u]=(t[u]||0)+r*r},b=function(e,t){t=t>>0||6;var n=[],a=[],r=0,s=0,d=t-1,_=[],c=[],m,p,i,l;for(m in e)f(e[m],n,t);for(i=n.length,p=0;p<i;p++)r+=o(n[p]),l=p%t,c[l]=r,l===d&&(s+=r,l=p/t>>0,_[l]=c,a[l]=s,r=0,c=[]);return{length:s,lengths:a,segments:_}},h=u._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.8",API:2,global:!0,init:function(e,t,a){this._target=e,t instanceof Array&&(t={values:t}),this._func={},this._mod={},this._props=[],this._timeRes=null==t.timeResolution?6:parseInt(t.timeResolution,10);var n=t.values||[],r={},o=n[0],s=t.autoRotate||a.vars.orientToBezier,l,d,_,i,p;for(l in this._autoRotate=s?s instanceof Array?s:[["x","y","rotation",!0===s?0:+s||0]]:null,o)this._props.push(l);for(_=this._props.length;-1<--_;)l=this._props[_],this._overwriteProps.push(l),d=this._func[l]="function"==typeof e[l],r[l]=d?e[l.indexOf("set")||"function"!=typeof e["get"+l.substr(3)]?l:"get"+l.substr(3)]():parseFloat(e[l]),p||r[l]===n[0][l]||(p=r);if(this._beziers="cubic"!==t.type&&"quadratic"!==t.type&&"soft"!==t.type?T(n,isNaN(t.curviness)?1:t.curviness,!1,"thruBasic"===t.type,t.correlate,p):g(n,t.type,r),this._segCount=this._beziers[l].length,this._timeRes){var c=b(this._beziers,this._timeRes);this._length=c.length,this._lengths=c.lengths,this._segments=c.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(s=this._autoRotate)for(this._initialRotations=[],s[0]instanceof Array||(this._autoRotate=s=[s]),_=s.length;-1<--_;){for(i=0;3>i;i++)l=s[_][i],this._func[l]="function"==typeof e[l]&&e[l.indexOf("set")||"function"!=typeof e["get"+l.substr(3)]?l:"get"+l.substr(3)];l=s[_][2],this._initialRotations[_]=(this._func[l]?this._func[l].call(this._target):this._target[l])||0,this._overwriteProps.push(l)}return this._startRatio=a.vars.runBackwards?1:0,!0},set:function(e){var a=this._segCount,n=this._func,r=this._target,o=e!==this._startRatio,d,_,c,i,p,m,t,u,T,g;if(!this._timeRes)d=0>e?0:1<=e?a-1:a*e>>0,m=(e-d*(1/a))*a;else{if(T=this._lengths,g=this._curSeg,e*=this._length,c=this._li,e>this._l2&&c<a-1){for(u=a-1;c<u&&(this._l2=T[++c])<=e;);this._l1=T[c-1],this._li=c,this._curSeg=g=this._segments[c],this._s2=g[this._s1=this._si=0]}else if(e<this._l1&&0<c){for(;0<c&&(this._l1=T[--c])>=e;);0===c&&e<this._l1?this._l1=0:c++,this._l2=T[c],this._li=c,this._curSeg=g=this._segments[c],this._s1=g[(this._si=g.length-1)-1]||0,this._s2=g[this._si]}if(d=c,e-=this._l1,c=this._si,e>this._s2&&c<g.length-1){for(u=g.length-1;c<u&&(this._s2=g[++c])<=e;);this._s1=g[c-1],this._si=c}else if(e<this._s1&&0<c){for(;0<c&&(this._s1=g[--c])>=e;);0===c&&e<this._s1?this._s1=0:c++,this._s2=g[c],this._si=c}m=(c+(e-this._s1)/(this._s2-this._s1))*this._prec||0}for(_=1-m,c=this._props.length;-1<--c;)i=this._props[c],p=this._beziers[i][d],t=(m*m*p.da+3*_*(m*p.ca+_*p.ba))*m+p.a,this._mod[i]&&(t=this._mod[i](t,r)),n[i]?r[i](t):r[i]=t;if(this._autoRotate){var f=this._autoRotate,b,h,S,y,P,v,A;for(c=f.length;-1<--c;)i=f[c][2],v=f[c][3]||0,A=!0===f[c][4]?1:180/l,p=this._beziers[f[c][0]],b=this._beziers[f[c][1]],p&&b&&(p=p[d],b=b[d],h=p.a+(p.b-p.a)*m,y=p.b+(p.c-p.b)*m,h+=(y-h)*m,y+=(p.c+(p.d-p.c)*m-y)*m,S=b.a+(b.b-b.a)*m,P=b.b+(b.c-b.b)*m,S+=(P-S)*m,P+=(b.c+(b.d-b.c)*m-P)*m,t=o?s(P-S,y-h)*A+v:this._initialRotations[c],this._mod[i]&&(t=this._mod[i](t,r)),n[i]?r[i](t):r[i]=t)}}}),S=h.prototype;h.bezierThrough=T,h.cubicToQuadratic=_,h._autoCSS=!0,h.quadraticToCubic=function(e,t,i){return new r(e,(2*t+e)/3,(2*t+i)/3,i)},h._cssRegister=function(){var e=i.CSSPlugin;if(e){var t=e._internals,a=t._parseToProxy,n=t._setPluginRatio,r=t.CSSPropTween;t._registerComplexSpecialProp("bezier",{parser:function(o,t,s,d,_,c){t instanceof Array&&(t={values:t}),c=new h;var m=t.values,u=m.length-1,l=[],T={},g,i,p;if(0>u)return _;for(g=0;g<=u;g++)p=a(o,m[g],d,_,c,u!==g),l[g]=p.end;for(i in t)T[i]=t[i];return T.values=l,_=new r(o,"bezier",0,0,p.pt,2),_.data=p,_.plugin=c,_.setRatio=n,0===T.autoRotate&&(T.autoRotate=!0),T.autoRotate&&!(T.autoRotate instanceof Array)&&(g=!0===T.autoRotate?0:+T.autoRotate,T.autoRotate=null==p.end.left?null!=p.end.x&&[["x","y","rotation",g,!1]]:[["left","top","rotation",g,!1]]),T.autoRotate&&(!d._transform&&d._enableTransforms(!1),p.autoRotate=d._target._gsTransform,p.proxy.rotation=p.autoRotate.rotation||0,d._overwriteProps.push("rotation")),c._onInitTween(p.proxy,T,d._tween),_}})}},S._mod=function(e){for(var t=this._overwriteProps,a=t.length,i;-1<--a;)i=e[t[a]],i&&"function"==typeof i&&(this._mod[t[a]]=i)},S._kill=function(e){var t=this._props,a,n;for(a in this._beziers)if(a in e)for(delete this._beziers[a],delete this._func[a],n=t.length;-1<--n;)t[n]===a&&t.splice(n,1);if(t=this._autoRotate,t)for(n=t.length;-1<--n;)e[t[n][2]]&&t.splice(n,1);return this._super._kill.call(this,e)}}(),u._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(e,T){var g=function(){e.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},d=u._gsDefine.globals,c={},m=g.prototype=new e("css"),f,b,S,h;m.constructor=g,g.version="1.20.3",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,m="px",g.suffixMap={top:m,right:m,bottom:m,left:m,width:m,height:m,fontSize:m,padding:m,margin:m,perspective:m,lineHeight:""};var y=/(?:\-|\.|\b)(\d|\.|e\-)+/g,P=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,A=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,C=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,x=/(?:\d|\-|\+|=|#|\.)*/g,M=/opacity *= *([^)]*)/i,w=/opacity:([^;]*)/i,E=/alpha\(opacity *=.+?\)/i,v=/^(rgb|hsl)/,G=/([A-Z])/g,B=/-([a-z])/gi,D=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,k=function(e,t){return t.toUpperCase()},R=/(?:Left|Right|Width)/i,O=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,H=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,I=/,(?=[^\)]*(?:\(|$))/gi,L=/[\s,\(]/i,N=l/180,V=180/l,F={},X={style:{}},U=u.document||{createElement:function(){return X}},z=function(e,t){return U.createElementNS?U.createElementNS(t||"http://www.w3.org/1999/xhtml",e):U.createElement(e)},W=z("div"),j=z("img"),K=g._internals={_specialProps:c},Y=(u.navigator||{}).userAgent||"",Q=function(){var e=Y.indexOf("Android"),t=z("a");return(ye=-1!==Y.indexOf("Safari")&&-1===Y.indexOf("Chrome")&&(-1===e||3<parseFloat(Y.substr(e+8,2))),ve=ye&&6>parseFloat(Y.substr(Y.indexOf("Version/")+8,2)),Pe=-1!==Y.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y))&&(Ae=parseFloat(RegExp.$1)),!!t)&&(t.style.cssText="top:1px;opacity:.55;",/^0.55/.test(t.style.opacity))}(),Z=function(e){return M.test("string"==typeof e?e:(e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?parseFloat(RegExp.$1)/100:1},q=function(e){u.console&&console.log(e)},J="",$="",ee=function(t,n){n=n||W;var e=n.style,r,a;if(void 0!==e[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),r=["O","Moz","ms","Ms","Webkit"],a=5;-1<--a&&void 0===e[r[a]+t];);return 0<=a?($=3===a?"ms":r[a],J="-"+$.toLowerCase()+"-",$+t):null},te=U.defaultView?U.defaultView.getComputedStyle:function(){},ie=g.getStyle=function(e,t,i,a,n){var r;return Q||"opacity"!==t?(!a&&e.style[t]?r=e.style[t]:(i=i||te(e))?r=i[t]||i.getPropertyValue(t)||i.getPropertyValue(t.replace(G,"-$1").toLowerCase()):e.currentStyle&&(r=e.currentStyle[t]),null==n||r&&"none"!==r&&"auto"!==r&&"auto auto"!==r?r:n):Z(e)},ae=K.convertToPixels=function(e,t,i,a,n){if("px"===a||!a&&"lineHeight"!==t)return i;if("auto"===a||!i)return 0;var r=R.test(t),o=e,s=W.style,l=0>i,d=1===i,_,p,c;if(l&&(i=-i),d&&(i*=100),"lineHeight"===t&&!a)p=te(e).lineHeight,e.style.lineHeight=i,_=parseFloat(te(e).lineHeight),e.style.lineHeight=p;else if("%"===a&&-1!==t.indexOf("border"))_=i/100*(r?e.clientWidth:e.clientHeight);else{if(s.cssText="border:0 solid red;position:"+ie(e,"position")+";line-height:0;","%"===a||!o.appendChild||"v"===a.charAt(0)||"rem"===a){if(o=e.parentNode||U.body,-1!==ie(o,"display").indexOf("flex")&&(s.position="absolute"),p=o._gsCache,c=T.ticker.frame,p&&r&&p.time===c)return p.width*i/100;s[r?"width":"height"]=i+a}else s[r?"borderLeftWidth":"borderTopWidth"]=i+a;o.appendChild(W),_=parseFloat(W[r?"offsetWidth":"offsetHeight"]),o.removeChild(W),r&&"%"===a&&!1!==g.cacheWidths&&(p=o._gsCache=o._gsCache||{},p.time=c,p.width=100*(_/i)),0!==_||n||(_=ae(e,t,i,a,!0))}return d&&(_/=100),l?-_:_},ne=K.calculateOffset=function(e,t,i){if("absolute"!==ie(e,"position",i))return 0;var a="left"===t?"Left":"Top",n=ie(e,"margin"+a,i);return e["offset"+a]-(ae(e,t,parseFloat(n),n.replace(x,""))||0)},re=function(e,t){var a={},n,i,r;if(t=t||te(e,null)){if(n=t.length)for(;-1<--n;)r=t[n],(-1===r.indexOf("-transform")||Fe===r)&&(a[r.replace(B,k)]=t.getPropertyValue(r));else for(n in t)(-1===n.indexOf("Transform")||Ve===n)&&(a[n]=t[n]);}else if(t=e.currentStyle||e.style)for(n in t)"string"==typeof n&&void 0===a[n]&&(a[n.replace(B,k)]=t[n]);return Q||(a.opacity=Z(e)),i=tt(e,t,!1),a.rotation=i.rotation,a.skewX=i.skewX,a.scaleX=i.scaleX,a.scaleY=i.scaleY,a.x=i.x,a.y=i.y,Ue&&(a.z=i.z,a.rotationX=i.rotationX,a.rotationY=i.rotationY,a.scaleZ=i.scaleZ),a.filters&&delete a.filters,a},oe=function(e,t,i,a,n){var r={},o=e.style,s,l,d;for(l in i)"cssText"!==l&&"length"!==l&&isNaN(l)&&(t[l]!==(s=i[l])||n&&n[l])&&-1===l.indexOf("Origin")&&("number"==typeof s||"string"==typeof s)&&(r[l]="auto"===s&&("left"===l||"top"===l)?ne(e,l):(""===s||"auto"===s||"none"===s)&&"string"==typeof t[l]&&""!==t[l].replace(C,"")?0:s,void 0!==o[l]&&(d=new Ge(o,l,o[l],d)));if(a)for(l in a)"className"!==l&&(r[l]=a[l]);return{difs:r,firstMPT:d}},se={width:["Left","Right"],height:["Top","Bottom"]},le=["marginLeft","marginRight","marginTop","marginBottom"],de=function(e,t,n){if("svg"===(e.nodeName+"").toLowerCase())return(n||te(e))[t]||0;if(e.getCTM&&Je(e))return e.getBBox()[t]||0;var r=parseFloat("width"===t?e.offsetWidth:e.offsetHeight),o=se[t],a=o.length;for(n=n||te(e,null);-1<--a;)r-=parseFloat(ie(e,"padding"+o[a],n,!0))||0,r-=parseFloat(ie(e,"border"+o[a]+"Width",n,!0))||0;return r},_e=function(e,t){if("contain"===e||"auto"===e||"auto auto"===e)return e+" ";(null==e||""===e)&&(e="0 0");var n=e.split(" "),a=-1===e.indexOf("left")?-1===e.indexOf("right")?n[0]:"100%":"0%",r=-1===e.indexOf("top")?-1===e.indexOf("bottom")?n[1]:"100%":"0%",o;if(3<n.length&&!t){for(n=e.split(", ").join(",").split(","),e=[],o=0;o<n.length;o++)e.push(_e(n[o]));return e.join(",")}return null==r?r="center"===a?"50%":"0":"center"===r&&(r="50%"),("center"===a||isNaN(parseFloat(a))&&-1===(a+"").indexOf("="))&&(a="50%"),e=a+" "+r+(2<n.length?" "+n[2]:""),t&&(t.oxp=-1!==a.indexOf("%"),t.oyp=-1!==r.indexOf("%"),t.oxr="="===a.charAt(1),t.oyr="="===r.charAt(1),t.ox=parseFloat(a.replace(C,"")),t.oy=parseFloat(r.replace(C,"")),t.v=e),t||e},pe=function(t,i){return"function"==typeof t&&(t=t(Ce,xe)),"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(i)||0},ce=function(e,t){return"function"==typeof e&&(e=e(Ce,xe)),null==e?t:"string"==typeof e&&"="===e.charAt(1)?parseInt(e.charAt(0)+"1",10)*parseFloat(e.substr(2))+t:parseFloat(e)||0},me=function(e,t,i,a){var n=1e-6,r,o,s,l,d;return"function"==typeof e&&(e=e(Ce,xe)),null==e?l=t:"number"==typeof e?l=e:(r=360,o=e.split("_"),d="="===e.charAt(1),s=(d?parseInt(e.charAt(0)+"1",10)*parseFloat(o[0].substr(2)):parseFloat(o[0]))*(-1===e.indexOf("rad")?1:V)-(d?0:t),o.length&&(a&&(a[i]=t+s),-1!==e.indexOf("short")&&(s%=r,s!==s%(r/2)&&(s=0>s?s+r:s-r)),-1!==e.indexOf("_cw")&&0>s?s=(s+9999999999*r)%r-(0|s/r)*r:-1!==e.indexOf("ccw")&&0<s&&(s=(s-9999999999*r)%r-(0|s/r)*r)),l=t+s),l<n&&l>-n&&(l=0),l},ue={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},Te=function(e,t,i){return e=0>e?e+1:1<e?e-1:e,0|255*(1>6*e?t+6*((i-t)*e):0.5>e?i:2>3*e?t+6*((i-t)*(2/3-e)):t)+0.5},ge=g.parseColor=function(e,i){var n,a,r,o,_,c,s,l,m,u,d;if(!e)n=ue.black;else if("number"==typeof e)n=[e>>16,255&e>>8,255&e];else{if(","===e.charAt(e.length-1)&&(e=e.substr(0,e.length-1)),ue[e])n=ue[e];else if("#"===e.charAt(0))4===e.length&&(a=e.charAt(1),r=e.charAt(2),o=e.charAt(3),e="#"+a+a+r+r+o+o),e=parseInt(e.substr(1),16),n=[e>>16,255&e>>8,255&e];else if("hsl"!==e.substr(0,3))n=e.match(y)||ue.transparent;else if(n=d=e.match(y),!i)_=+n[0]%360/360,c=+n[1]/100,s=+n[2]/100,r=0.5>=s?s*(c+1):s+c-s*c,a=2*s-r,3<n.length&&(n[3]=+n[3]),n[0]=Te(_+1/3,a,r),n[1]=Te(_,a,r),n[2]=Te(_-1/3,a,r);else if(-1!==e.indexOf("="))return e.match(P);n[0]=+n[0],n[1]=+n[1],n[2]=+n[2],3<n.length&&(n[3]=+n[3])}return i&&!d&&(a=n[0]/255,r=n[1]/255,o=n[2]/255,l=t(a,r,o),m=p(a,r,o),s=(l+m)/2,l===m?_=c=0:(u=l-m,c=0.5<s?u/(2-l-m):u/(l+m),_=l===a?(r-o)/u+(r<o?6:0):l===r?(o-a)/u+2:(a-r)/u+4,_*=60),n[0]=0|_+0.5,n[1]=0|100*c+0.5,n[2]=0|100*s+0.5),n},fe=function(e,t){var a=e.match(be)||[],n=0,r="",o,i,s;if(!a.length)return e;for(o=0;o<a.length;o++)i=a[o],s=e.substr(n,e.indexOf(i,n)-n),n+=s.length+i.length,i=ge(i,t),3===i.length&&i.push(1),r+=s+(t?"hsla("+i[0]+","+i[1]+"%,"+i[2]+"%,"+i[3]:"rgba("+i.join(","))+")";return r+e.substr(n)},be="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b",he,Se,ye,Pe,ve,Ae,xe,Ce;for(m in ue)be+="|"+m+"\\b";be=new RegExp(be+")","gi"),g.colorStringFilter=function(e){var t=e[0]+" "+e[1],i;be.test(t)&&(i=-1!==t.indexOf("hsl(")||-1!==t.indexOf("hsla("),e[0]=fe(e[0],i),e[1]=fe(e[1],i)),be.lastIndex=0},T.defaultStringFilter||(T.defaultStringFilter=g.colorStringFilter);var Me=function(e,t,a,n){if(null==e)return function(e){return e};var r=t?(e.match(be)||[""])[0]:"",o=e.split(r).join("").match(A)||[],s=e.substr(0,e.indexOf(o[0])),l=")"===e.charAt(e.length-1)?")":"",d=-1===e.indexOf(" ")?",":" ",_=o.length,p=0<_?o[0].replace(y,""):"",c;return _?t?(c=function(e){var t,m,u,i;if("number"==typeof e)e+=p;else if(n&&I.test(e)){for(i=e.replace(I,"|").split("|"),u=0;u<i.length;u++)i[u]=c(i[u]);return i.join(",")}if(t=(e.match(be)||[r])[0],m=e.split(t).join("").match(A)||[],u=m.length,_>u--)for(;++u<_;)m[u]=a?m[0|(u-1)/2]:o[u];return s+m.join(d)+d+t+l+(-1===e.indexOf("inset")?"":" inset")},c):(c=function(e){var t,r,m;if("number"==typeof e)e+=p;else if(n&&I.test(e)){for(r=e.replace(I,"|").split("|"),m=0;m<r.length;m++)r[m]=c(r[m]);return r.join(",")}if(t=e.match(A)||[],m=t.length,_>m--)for(;++m<_;)t[m]=a?t[0|(m-1)/2]:o[m];return s+t.join(d)+l},c):function(e){return e}},we=function(e){return e=e.split(","),function(n,t,r,o,s,l,d){var _=(t+"").split(" "),a;for(d={},a=0;4>a;a++)d[e[a]]=_[a]=_[a]||_[(a-1)/2>>0];return o.parse(n,d,s,l)}},Ee=K._setPluginRatio=function(e){this.plugin.setRatio(e);for(var t=this.data,a=t.proxy,n=t.firstMPT,r=1e-6,o,s,l,i,d;n;)o=a[n.v],n.r?o=_(o):o<r&&o>-r&&(o=0),n.t[n.p]=o,n=n._next;if(t.autoRotate&&(t.autoRotate.rotation=t.mod?t.mod(a.rotation,this.t):a.rotation),1===e||0===e)for(n=t.firstMPT,d=1===e?"e":"b";n;){if(s=n.t,!s.type)s[d]=s.s+s.xs0;else if(1===s.type){for(i=s.xs0+s.s+s.xs1,l=1;l<s.l;l++)i+=s["xn"+l]+s["xs"+(l+1)];s[d]=i}n=n._next}},Ge=function(e,t,i,a,n){this.t=e,this.p=t,this.v=i,this.r=n,a&&(a._prev=this,this._next=a)},Be=K._parseToProxy=function(e,t,a,n,r,o){var s=n,l={},d={},_=a._transform,c=F,m,i,p,u,T;for(a._transform=null,F=t,n=T=a.parse(e,t,n,r),F=c,o&&(a._transform=_,s&&(s._prev=null,s._prev&&(s._prev._next=null)));n&&n!==s;){if(1>=n.type&&(i=n.p,d[i]=n.s+n.c,l[i]=n.s,o||(u=new Ge(n,"s",i,u,n.r),n.c=0),1===n.type))for(m=n.l;0<--m;)p="xn"+m,i=n.p+"_"+p,d[i]=n.data[p],l[i]=n[p],o||(u=new Ge(n,p,i,u,n.rxp[p]));n=n._next}return{proxy:l,end:d,firstMPT:u,pt:T}},De=K.CSSPropTween=function(i,t,a,o,s,l,d,n,r,_,p){this.t=i,this.p=t,this.s=a,this.c=o,this.n=d||t,i instanceof De||h.push(this.n),this.r=n,this.type=l||0,r&&(this.pr=r,f=!0),this.b=void 0===_?a:_,this.e=void 0===p?a+o:p,s&&(this._next=s,s._prev=this)},ke=function(e,t,i,a,n,r){var o=new De(e,t,i,a-i,n,-1,r);return o.b=i,o.e=o.xs0=a,o},Re=g.parseComplex=function(a,t,n,r,o,s,d,_,p,c){n=n||s||"","function"==typeof r&&(r=r(Ce,xe)),d=new De(a,t,0,0,d,c?2:1,null,!1,_,n,r),r+="",o&&be.test(r+n)&&(r=[n,r],g.colorStringFilter(r),n=r[0],r=r[1]);var m=n.split(", ").join(",").split(" "),u=r.split(", ").join(",").split(" "),T=m.length,l=!1!==he,f,i,b,h,S,v,A,x,C,M,w,E,G;for((-1!==r.indexOf(",")||-1!==n.indexOf(","))&&(-1!==(r+n).indexOf("rgb")||-1!==(r+n).indexOf("hsl")?(m=m.join(" ").replace(I,", ").split(" "),u=u.join(" ").replace(I,", ").split(" ")):(m=m.join(" ").split(",").join(", ").split(" "),u=u.join(" ").split(",").join(", ").split(" ")),T=m.length),T!==u.length&&(m=(s||"").split(" "),T=m.length),d.plugin=p,d.setRatio=c,be.lastIndex=0,f=0;f<T;f++)if(h=m[f],S=u[f],x=parseFloat(h),x||0===x)d.appendXtra("",x,pe(S,x),S.replace(P,""),l&&-1!==S.indexOf("px"),!0);else if(o&&be.test(h))E=S.indexOf(")")+1,E=")"+(E?S.substr(E):""),G=-1!==S.indexOf("hsl")&&Q,M=S,h=ge(h,G),S=ge(S,G),C=6<h.length+S.length,C&&!Q&&0===S[3]?(d["xs"+d.l]+=d.l?" transparent":"transparent",d.e=d.e.split(u[f]).join("transparent")):(!Q&&(C=!1),G?d.appendXtra(M.substr(0,M.indexOf("hsl"))+(C?"hsla(":"hsl("),h[0],pe(S[0],h[0]),",",!1,!0).appendXtra("",h[1],pe(S[1],h[1]),"%,",!1).appendXtra("",h[2],pe(S[2],h[2]),C?"%,":"%"+E,!1):d.appendXtra(M.substr(0,M.indexOf("rgb"))+(C?"rgba(":"rgb("),h[0],S[0]-h[0],",",!0,!0).appendXtra("",h[1],S[1]-h[1],",",!0).appendXtra("",h[2],S[2]-h[2],C?",":E,!0),C&&(h=4>h.length?1:h[3],d.appendXtra("",h,(4>S.length?1:S[3])-h,E,!1))),be.lastIndex=0;else if(v=h.match(y),!v)d["xs"+d.l]+=d.l||d["xs"+d.l]?" "+S:S;else{if(A=S.match(P),!A||A.length!==v.length)return d;for(b=0,i=0;i<v.length;i++)w=v[i],M=h.indexOf(w,b),d.appendXtra(h.substr(b,M-b),+w,pe(A[i],w),"",l&&"px"===h.substr(M+w.length,2),0===i),b=M+w.length;d["xs"+d.l]+=h.substr(b)}if(-1!==r.indexOf("=")&&d.data){for(E=d.xs0+d.data.s,f=1;f<d.l;f++)E+=d["xs"+f]+d.data["xn"+f];d.e=E+d["xs"+f]}return d.l||(d.type=-1,d.xs0=d.e),d.xfirst||d},Oe=9;for(m=De.prototype,m.l=m.pr=0;0<--Oe;)m["xn"+Oe]=0,m["xs"+Oe]="";m.xs0="",m._next=m._prev=m.xfirst=m.data=m.plugin=m.setRatio=m.rxp=null,m.appendXtra=function(e,t,i,a,n,r){var o=this,s=o.l;return(o["xs"+s]+=r&&(s||o["xs"+s])?" "+e:e||"",!i&&0!==s&&!o.plugin)?(o["xs"+s]+=t+(a||""),o):(o.l++,o.type=o.setRatio?2:1,o["xs"+o.l]=a||"",0<s)?(o.data["xn"+s]=t+i,o.rxp["xn"+s]=n,o["xn"+s]=t,o.plugin||(o.xfirst=new De(o,"xn"+s,t,i,o.xfirst||o,0,o.n,n,o.pr),o.xfirst.xs0=0),o):(o.data={s:t+i},o.rxp={},o.s=t,o.c=i,o.r=n,o)};var He=function(e,t){t=t||{},this.p=t.prefix?ee(e)||e:e,c[e]=c[this.p]=this,this.format=t.formatter||Me(t.defaultValue,t.color,t.collapsible,t.multi),t.parser&&(this.parse=t.parser),this.clrs=t.color,this.multi=t.multi,this.keyword=t.keyword,this.dflt=t.defaultValue,this.pr=t.priority||0},Ie=K._registerComplexSpecialProp=function(e,t,n){"object"!=typeof t&&(t={parser:n});var r=e.split(","),a=t.defaultValue,o,i;for(n=n||[a],o=0;o<r.length;o++)t.prefix=0===o&&t.prefix,t.defaultValue=n[o]||a,i=new He(r[o],t)},Le=K._registerPluginProp=function(e){if(!c[e]){var i=e.charAt(0).toUpperCase()+e.substr(1)+"Plugin";Ie(e,{parser:function(a,t,e,n,r,o,s){var l=d.com.greensock.plugins[i];return l?(l._cssRegister(),c[e].parse(a,t,e,n,r,o,s)):(q("Error: "+i+" js file not loaded."),r)}})}};m=He.prototype,m.parseComplex=function(a,t,n,e,r,o){var s=this.keyword,d,i,_,p,l,c;if(this.multi&&(I.test(n)||I.test(t)?(i=t.replace(I,"|").split("|"),_=n.replace(I,"|").split("|")):s&&(i=[t],_=[n])),_){for(p=_.length>i.length?_.length:i.length,d=0;d<p;d++)t=i[d]=i[d]||this.dflt,n=_[d]=_[d]||this.dflt,s&&(l=t.indexOf(s),c=n.indexOf(s),l!==c&&(-1===c?i[d]=i[d].split(s).join(""):-1===l&&(i[d]+=" "+s)));t=i.join(", "),n=_.join(", ")}return Re(a,this.p,t,n,this.clrs,this.dflt,e,this.pr,r,o)},m.parse=function(i,t,e,a,n,r){return this.parseComplex(i.style,this.format(ie(i,this.p,S,!1,this.dflt)),this.format(t),n,r)},g.registerSpecialProp=function(e,i,a){Ie(e,{parser:function(n,t,e,r,o,s){var l=new De(n,e,0,0,o,2,e,!1,a);return l.plugin=s,l.setRatio=i(n,t,r._tween,e),l},priority:a})},g.useSVGTransformAttr=!0;var Ne=["scaleX","scaleY","scaleZ","x","y","z","skewX","skewY","rotation","rotationX","rotationY","perspective","xPercent","yPercent"],Ve=ee("transform"),Fe=J+"transform",Xe=ee("transformOrigin"),Ue=null!==ee("perspective"),ze=K.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=!1!==g.defaultForce3D&&Ue&&(g.defaultForce3D||"auto")},We=u.SVGElement,je=function(e,t,i){var a=U.createElementNS("http://www.w3.org/2000/svg",e),n=/([a-z])([A-Z])/g,r;for(r in i)a.setAttributeNS(null,r.replace(n,"$1-$2").toLowerCase(),i[r]);return t.appendChild(a),a},Ke=U.documentElement||{},Ye=function(){var e=Ae||/Android/i.test(Y)&&!u.chrome,t,i,a;return U.createElementNS&&!e&&(t=je("svg",Ke),i=je("rect",t,{width:100,height:50,x:100}),a=i.getBoundingClientRect().width,i.style[Xe]="50% 50%",i.style[Ve]="scaleX(0.5)",e=a===i.getBoundingClientRect().width&&!(Pe&&Ue),Ke.removeChild(t)),e}(),Qe=function(t,e,i,n,r,o){var s=t._gsTransform,l=et(t,!0),_,p,m,u,T,f,a,h,S,d,y,P,v,A;s&&(v=s.xOrigin,A=s.yOrigin),(!n||2>(_=n.split(" ")).length)&&(a=t.getBBox(),0===a.x&&0===a.y&&0===a.width+a.height&&(a={x:parseFloat(t.hasAttribute("x")?t.getAttribute("x"):t.hasAttribute("cx")?t.getAttribute("cx"):0)||0,y:parseFloat(t.hasAttribute("y")?t.getAttribute("y"):t.hasAttribute("cy")?t.getAttribute("cy"):0)||0,width:0,height:0}),e=_e(e).split(" "),_=[(-1===e[0].indexOf("%")?parseFloat(e[0]):parseFloat(e[0])/100*a.width)+a.x,(-1===e[1].indexOf("%")?parseFloat(e[1]):parseFloat(e[1])/100*a.height)+a.y]),i.xOrigin=u=parseFloat(_[0]),i.yOrigin=T=parseFloat(_[1]),n&&l!==$e&&(f=l[0],a=l[1],h=l[2],S=l[3],d=l[4],y=l[5],P=f*S-a*h,P&&(p=u*(S/P)+T*(-h/P)+(h*y-S*d)/P,m=u*(-a/P)+T*(f/P)-(f*y-a*d)/P,u=i.xOrigin=_[0]=p,T=i.yOrigin=_[1]=m)),s&&(o&&(i.xOffset=s.xOffset,i.yOffset=s.yOffset,s=i),r||!1!==r&&!1!==g.defaultSmoothOrigin?(p=u-v,m=T-A,s.xOffset+=p*l[0]+m*l[2]-p,s.yOffset+=p*l[1]+m*l[3]-m):s.xOffset=s.yOffset=0),o||t.setAttribute("data-svg-origin",_.join(" "))},Ze=function(e){var t=z("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,a=this.nextSibling,n=this.style.cssText,r;if(Ke.appendChild(t),t.appendChild(this),this.style.display="block",e)try{r=this.getBBox(),this._originalGetBBox=this.getBBox,this.getBBox=Ze}catch(t){}else this._originalGetBBox&&(r=this._originalGetBBox());return a?i.insertBefore(this,a):i.appendChild(this),Ke.removeChild(t),this.style.cssText=n,r},qe=function(t){try{return t.getBBox()}catch(e){return Ze.call(t,!0)}},Je=function(t){return!!(We&&t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&qe(t))},$e=[1,0,0,1,0,0],et=function(t,e){var i=t._gsTransform||new ze,a=1e5,r=t.style,o,l,d,_,n,p;if(Ve?l=ie(t,Fe,null,!0):t.currentStyle&&(l=t.currentStyle.filter.match(O),l=l&&4===l.length?[l[0].substr(4),+l[2].substr(4),+l[1].substr(4),l[3].substr(4),i.x||0,i.y||0].join(","):""),o=!l||"none"===l||"matrix(1, 0, 0, 1, 0, 0)"===l,Ve&&((p=!te(t)||"none"===te(t).display)||!t.parentNode)&&(p&&(_=r.display,r.display="block"),!t.parentNode&&(n=1,Ke.appendChild(t)),l=ie(t,Fe,null,!0),o=!l||"none"===l||"matrix(1, 0, 0, 1, 0, 0)"===l,_?r.display=_:p&&ot(r,"display"),n&&Ke.removeChild(t)),(i.svg||t.getCTM&&Je(t))&&(o&&-1!==(r[Ve]+"").indexOf("matrix")&&(l=r[Ve],o=0),d=t.getAttribute("transform"),o&&d&&(-1===d.indexOf("matrix")?-1!==d.indexOf("translate")&&(l="matrix(1,0,0,1,"+d.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",o=0):(l=d,o=0))),o)return $e;for(d=(l||"").match(y)||[],Oe=d.length;-1<--Oe;)_=+d[Oe],d[Oe]=(n=_-(_|=0))?(0|n*a+(0>n?-0.5:0.5))/a+_:_;return e&&6<d.length?[d[0],d[1],d[4],d[5],d[12],d[13]]:d},tt=K.getTransform=function(e,t,l,_){if(e._gsTransform&&l&&!_)return e._gsTransform;var p=l?e._gsTransform||new ze:new ze,u=0>p.scaleX,f=2e-5,h=1e5,S=Ue?parseFloat(ie(e,Xe,t,!1,"0 0 0").split(" ")[2])||p.zOrigin||0:0,y=parseFloat(g.defaultTransformPerspective)||0,P,m,i,v,A,x;if(p.svg=!!(e.getCTM&&Je(e)),p.svg&&(Qe(e,ie(e,Xe,t,!1,"50% 50%")+"",p,e.getAttribute("data-svg-origin")),nt=g.useSVGTransformAttr||Ye),P=et(e),P!==$e){if(16===P.length){var C=P[0],M=P[1],w=P[2],E=P[3],G=P[4],B=P[5],D=P[6],R=P[7],O=P[8],H=P[9],I=P[10],L=P[12],N=P[13],F=P[14],X=P[11],U=s(D,I),z,W,j,K,Y;p.zOrigin&&(F=-p.zOrigin,L=O*F-P[12],N=H*F-P[13],F=I*F+p.zOrigin-P[14]),p.rotationX=U*V,U&&(K=r(-U),Y=n(-U),z=G*K+O*Y,W=B*K+H*Y,j=D*K+I*Y,O=G*-Y+O*K,H=B*-Y+H*K,I=D*-Y+I*K,X=R*-Y+X*K,G=z,B=W,D=j),U=s(-w,I),p.rotationY=U*V,U&&(K=r(-U),Y=n(-U),z=C*K-O*Y,W=M*K-H*Y,j=w*K-I*Y,H=M*Y+H*K,I=w*Y+I*K,X=E*Y+X*K,C=z,M=W,w=j),U=s(M,C),p.rotation=U*V,U&&(K=r(U),Y=n(U),z=C*K+M*Y,W=G*K+B*Y,j=O*K+H*Y,M=M*K-C*Y,B=B*K-G*Y,H=H*K-O*Y,C=z,G=W,O=j),p.rotationX&&359.9<a(p.rotationX)+a(p.rotation)&&(p.rotationX=p.rotation=0,p.rotationY=180-p.rotationY),U=s(G,B),p.scaleX=(0|o(C*C+M*M+w*w)*h+0.5)/h,p.scaleY=(0|o(B*B+D*D)*h+0.5)/h,p.scaleZ=(0|o(O*O+H*H+I*I)*h+0.5)/h,C/=p.scaleX,G/=p.scaleY,M/=p.scaleX,B/=p.scaleY,a(U)>f?(p.skewX=U*V,G=0,"simple"!==p.skewType&&(p.scaleY*=1/r(U))):p.skewX=0,p.perspective=X?1/(0>X?-X:X):0,p.x=L,p.y=N,p.z=F,p.svg&&(p.x-=p.xOrigin-(p.xOrigin*C-p.yOrigin*G),p.y-=p.yOrigin-(p.yOrigin*M-p.xOrigin*B))}else if(!Ue||_||!P.length||p.x!==P[4]||p.y!==P[5]||!p.rotationX&&!p.rotationY){var Q=6<=P.length,k=Q?P[0]:1,Z=P[1]||0,b=P[2]||0,c=Q?P[3]:1;p.x=P[4]||0,p.y=P[5]||0,i=o(k*k+Z*Z),v=o(c*c+b*b),A=k||Z?s(Z,k)*V:p.rotation||0,x=b||c?s(b,c)*V+A:p.skewX||0,p.scaleX=i,p.scaleY=v,p.rotation=A,p.skewX=x,Ue&&(p.rotationX=p.rotationY=p.z=0,p.perspective=y,p.scaleZ=1),p.svg&&(p.x-=p.xOrigin-(p.xOrigin*k+p.yOrigin*b),p.y-=p.yOrigin-(p.xOrigin*Z+p.yOrigin*c))}for(m in 90<a(p.skewX)&&270>a(p.skewX)&&(u?(p.scaleX*=-1,p.skewX+=0>=p.rotation?180:-180,p.rotation+=0>=p.rotation?180:-180):(p.scaleY*=-1,p.skewX+=0>=p.skewX?180:-180)),p.zOrigin=S,p)p[m]<f&&p[m]>-f&&(p[m]=0)}return l&&(e._gsTransform=p,p.svg&&(nt&&e.style[Ve]?T.delayedCall(1e-3,function(){ot(e.style,Ve)}):!nt&&e.getAttribute("transform")&&T.delayedCall(1e-3,function(){e.removeAttribute("transform")}))),p},it=function(e){var i=this.data,t=-i.rotation*N,o=t+i.skewX*N,s=1e5,l=(0|r(t)*i.scaleX*s)/s,p=(0|n(t)*i.scaleX*s)/s,u=(0|n(o)*-i.scaleY*s)/s,T=(0|r(o)*i.scaleY*s)/s,g=this.t.style,f=this.t.currentStyle,S,y;if(f){y=p,p=-u,u=-y,S=f.filter,g.filter="";var P=this.t.offsetWidth,v=this.t.offsetHeight,h="absolute"!==f.position,A="progid:DXImageTransform.Microsoft.Matrix(M11="+l+", M12="+p+", M21="+u+", M22="+T,m=i.x+P*i.xPercent/100,C=i.y+v*i.yPercent/100,w,E;if(null!=i.ox&&(w=(i.oxp?0.01*(P*i.ox):i.ox)-P/2,E=(i.oyp?0.01*(v*i.oy):i.oy)-v/2,m+=w-(w*l+E*p),C+=E-(w*u+E*T)),h?(w=P/2,E=v/2,A+=", Dx="+(w-(w*l+E*p)+m)+", Dy="+(E-(w*u+E*T)+C)+")"):A+=", sizingMethod='auto expand')",g.filter=-1===S.indexOf("DXImageTransform.Microsoft.Matrix(")?A+" "+S:S.replace(H,A),0!==e&&1!==e||1!=l||0!=p||0!=u||1!=T||h&&-1===A.indexOf("Dx=0, Dy=0")||M.test(S)&&100!==parseFloat(RegExp.$1)||-1!==S.indexOf(S.indexOf("Alpha"))||g.removeAttribute("filter"),!h){var G=8>Ae?1:-1,B,D,k;for(w=i.ieOffsetX||0,E=i.ieOffsetY||0,i.ieOffsetX=_((P-((0>l?-l:l)*P+(0>p?-p:p)*v))/2+m),i.ieOffsetY=_((v-((0>T?-T:T)*v+(0>u?-u:u)*P))/2+C),Oe=0;4>Oe;Oe++)D=le[Oe],B=f[D],y=-1===B.indexOf("px")?ae(this.t,D,parseFloat(B),B.replace(x,""))||0:parseFloat(B),k=y===i[D]?2>Oe?w-i.ieOffsetX:E-i.ieOffsetY:2>Oe?-i.ieOffsetX:-i.ieOffsetY,g[D]=(i[D]=_(y-k*(0===Oe||2===Oe?1:G)))+"px"}}},at=K.set3DTransformRatio=K.setTransformRatio=function(e){var a=this.data,t=this.t.style,s=a.rotation,l=a.rotationX,d=a.rotationY,_=a.scaleX,p=a.scaleY,c=a.scaleZ,m=a.x,u=a.y,T=a.z,g=a.svg,f=a.perspective,b=a.force3D,h=a.skewY,S=a.skewX,y,P,v,A,x,C,M,w,E,G,B,D,k,R,O,H,I,L,V,F,X,U,W;if(h&&(S+=h,s+=h),((1===e||0===e)&&"auto"===b&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!b)&&!T&&!f&&!d&&!l&&1===c||nt&&g||!Ue)return void(s||S||g?(s*=N,U=S*N,W=1e5,P=r(s)*_,x=n(s)*_,v=n(s-U)*-p,C=r(s-U)*p,U&&"simple"===a.skewType&&(y=i(U-h*N),y=o(1+y*y),v*=y,C*=y,h&&(y=i(h*N),y=o(1+y*y),P*=y,x*=y)),g&&(m+=a.xOrigin-(a.xOrigin*P+a.yOrigin*v)+a.xOffset,u+=a.yOrigin-(a.xOrigin*x+a.yOrigin*C)+a.yOffset,nt&&(a.xPercent||a.yPercent)&&(O=this.t.getBBox(),m+=0.01*a.xPercent*O.width,u+=0.01*a.yPercent*O.height),O=1e-6,m<O&&m>-O&&(m=0),u<O&&u>-O&&(u=0)),V=(0|P*W)/W+","+(0|x*W)/W+","+(0|v*W)/W+","+(0|C*W)/W+","+m+","+u+")",g&&nt?this.t.setAttribute("transform","matrix("+V):t[Ve]=(a.xPercent||a.yPercent?"translate("+a.xPercent+"%,"+a.yPercent+"%) matrix(":"matrix(")+V):t[Ve]=(a.xPercent||a.yPercent?"translate("+a.xPercent+"%,"+a.yPercent+"%) matrix(":"matrix(")+_+",0,0,"+p+","+m+","+u+")");if(Pe&&(O=1e-4,_<O&&_>-O&&(_=c=2e-5),p<O&&p>-O&&(p=c=2e-5),f&&!a.z&&!a.rotationX&&!a.rotationY&&(f=0)),s||S)s*=N,H=P=r(s),I=x=n(s),S&&(s-=S*N,H=r(s),I=n(s),"simple"===a.skewType&&(y=i((S-h)*N),y=o(1+y*y),H*=y,I*=y,a.skewY&&(y=i(h*N),y=o(1+y*y),P*=y,x*=y))),v=-I,C=H;else{if(!d&&!l&&1===c&&!f&&!g)return void(t[Ve]=(a.xPercent||a.yPercent?"translate("+a.xPercent+"%,"+a.yPercent+"%) translate3d(":"translate3d(")+m+"px,"+u+"px,"+T+"px)"+(1!==_||1!==p?" scale("+_+","+p+")":""));P=C=1,v=x=0}G=1,A=M=w=E=B=D=0,k=f?-1/f:0,R=a.zOrigin,O=1e-6,F=",",X="0",s=d*N,s&&(H=r(s),I=n(s),w=-I,B=k*-I,A=P*I,M=x*I,G=H,k*=H,P*=H,x*=H),s=l*N,s&&(H=r(s),I=n(s),y=v*H+A*I,L=C*H+M*I,E=G*I,D=k*I,A=v*-I+A*H,M=C*-I+M*H,G*=H,k*=H,v=y,C=L),1!==c&&(A*=c,M*=c,G*=c,k*=c),1!==p&&(v*=p,C*=p,E*=p,D*=p),1!==_&&(P*=_,x*=_,w*=_,B*=_),(R||g)&&(R&&(m+=A*-R,u+=M*-R,T+=G*-R+R),g&&(m+=a.xOrigin-(a.xOrigin*P+a.yOrigin*v)+a.xOffset,u+=a.yOrigin-(a.xOrigin*x+a.yOrigin*C)+a.yOffset),m<O&&m>-O&&(m=X),u<O&&u>-O&&(u=X),T<O&&T>-O&&(T=0)),V=a.xPercent||a.yPercent?"translate("+a.xPercent+"%,"+a.yPercent+"%) matrix3d(":"matrix3d(",V+=(P<O&&P>-O?X:P)+F+(x<O&&x>-O?X:x)+F+(w<O&&w>-O?X:w),V+=F+(B<O&&B>-O?X:B)+F+(v<O&&v>-O?X:v)+F+(C<O&&C>-O?X:C),l||d||1!==c?(V+=F+(E<O&&E>-O?X:E)+F+(D<O&&D>-O?X:D)+F+(A<O&&A>-O?X:A),V+=F+(M<O&&M>-O?X:M)+F+(G<O&&G>-O?X:G)+F+(k<O&&k>-O?X:k)+F):V+=",0,0,0,0,1,0,",V+=m+F+u+F+T+F+(f?1+-T/f:1)+")",t[Ve]=V},nt;m=ze.prototype,m.x=m.y=m.z=m.skewX=m.skewY=m.rotation=m.rotationX=m.rotationY=m.zOrigin=m.xPercent=m.yPercent=m.xOffset=m.yOffset=0,m.scaleX=m.scaleY=m.scaleZ=1,Ie("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(a,t,e,n,o,s,l){if(n._lastParsedTransform===l)return o;n._lastParsedTransform=l;var d=l.scale&&"function"==typeof l.scale?l.scale:0,_;"function"==typeof l[e]&&(_=l[e],l[e]=t),d&&(l.scale=d(Ce,a));var c=a._gsTransform,m=a.style,u=1e-6,T=Ne.length,i=l,f={},b="transformOrigin",h=tt(a,S,!0,i.parseTransform),P=i.transform&&("function"==typeof i.transform?i.transform(Ce,xe):i.transform),A,C,M,w,E,G,x,y,B;if(h.skewType=i.skewType||h.skewType||g.defaultSkewType,n._transform=h,P&&"string"==typeof P&&Ve)C=W.style,C[Ve]=P,C.display="block",C.position="absolute",U.body.appendChild(W),A=tt(W,null,!1),"simple"===h.skewType&&(A.scaleY*=r(A.skewX*N)),h.svg&&(G=h.xOrigin,x=h.yOrigin,A.x-=h.xOffset,A.y-=h.yOffset,(i.transformOrigin||i.svgOrigin)&&(P={},Qe(a,_e(i.transformOrigin),P,i.svgOrigin,i.smoothOrigin,!0),G=P.xOrigin,x=P.yOrigin,A.x-=P.xOffset-h.xOffset,A.y-=P.yOffset-h.yOffset),(G||x)&&(y=et(W,!0),A.x-=G-(G*y[0]+x*y[2]),A.y-=x-(G*y[1]+x*y[3]))),U.body.removeChild(W),A.perspective||(A.perspective=h.perspective),null!=i.xPercent&&(A.xPercent=ce(i.xPercent,h.xPercent)),null!=i.yPercent&&(A.yPercent=ce(i.yPercent,h.yPercent));else if("object"==typeof i){if(A={scaleX:ce(null==i.scaleX?i.scale:i.scaleX,h.scaleX),scaleY:ce(null==i.scaleY?i.scale:i.scaleY,h.scaleY),scaleZ:ce(i.scaleZ,h.scaleZ),x:ce(i.x,h.x),y:ce(i.y,h.y),z:ce(i.z,h.z),xPercent:ce(i.xPercent,h.xPercent),yPercent:ce(i.yPercent,h.yPercent),perspective:ce(i.transformPerspective,h.perspective)},E=i.directionalRotation,null!=E)if("object"==typeof E)for(C in E)i[C]=E[C];else i.rotation=E;"string"==typeof i.x&&-1!==i.x.indexOf("%")&&(A.x=0,A.xPercent=ce(i.x,h.xPercent)),"string"==typeof i.y&&-1!==i.y.indexOf("%")&&(A.y=0,A.yPercent=ce(i.y,h.yPercent)),A.rotation=me("rotation"in i?i.rotation:"shortRotation"in i?i.shortRotation+"_short":"rotationZ"in i?i.rotationZ:h.rotation,h.rotation,"rotation",f),Ue&&(A.rotationX=me("rotationX"in i?i.rotationX:"shortRotationX"in i?i.shortRotationX+"_short":h.rotationX||0,h.rotationX,"rotationX",f),A.rotationY=me("rotationY"in i?i.rotationY:"shortRotationY"in i?i.shortRotationY+"_short":h.rotationY||0,h.rotationY,"rotationY",f)),A.skewX=me(i.skewX,h.skewX),A.skewY=me(i.skewY,h.skewY)}for(Ue&&null!=i.force3D&&(h.force3D=i.force3D,w=!0),M=h.force3D||h.z||h.rotationX||h.rotationY||A.z||A.rotationX||A.rotationY||A.perspective,M||null==i.scale||(A.scaleZ=1);-1<--T;)B=Ne[T],P=A[B]-h[B],(P>u||P<-u||null!=i[B]||null!=F[B])&&(w=!0,o=new De(h,B,h[B],P,o),B in f&&(o.e=f[B]),o.xs0=0,o.plugin=s,n._overwriteProps.push(o.n));return P=i.transformOrigin,h.svg&&(P||i.svgOrigin)&&(G=h.xOffset,x=h.yOffset,Qe(a,_e(P),A,i.svgOrigin,i.smoothOrigin),o=ke(h,"xOrigin",(c?h:A).xOrigin,A.xOrigin,o,b),o=ke(h,"yOrigin",(c?h:A).yOrigin,A.yOrigin,o,b),(G!==h.xOffset||x!==h.yOffset)&&(o=ke(h,"xOffset",c?G:h.xOffset,h.xOffset,o,b),o=ke(h,"yOffset",c?x:h.yOffset,h.yOffset,o,b)),P="0px 0px"),(P||Ue&&M&&h.zOrigin)&&(Ve?(w=!0,B=Xe,P=(P||ie(a,B,S,!1,"50% 50%"))+"",o=new De(m,B,0,0,o,-1,b),o.b=m[B],o.plugin=s,Ue?(C=h.zOrigin,P=P.split(" "),h.zOrigin=(2<P.length&&(0===C||"0px"!==P[2])?parseFloat(P[2]):C)||0,o.xs0=o.e=P[0]+" "+(P[1]||"50%")+" 0px",o=new De(h,"zOrigin",0,0,o,-1,o.n),o.b=C,o.xs0=o.e=h.zOrigin):o.xs0=o.e=P):_e(P+"",h)),w&&(n._transformType=!(h.svg&&nt)&&(M||3===this._transformType)?3:2),_&&(l[e]=_),d&&(l.scale=d),o},prefix:!0}),Ie("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),Ie("borderRadius",{defaultValue:"0px",parser:function(a,t,e,n,r){t=this.format(t);var o=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],s=a.style,l,d,i,_,p,c,m,u,T,g,f,h,y,P,v,A;for(T=parseFloat(a.offsetWidth),g=parseFloat(a.offsetHeight),l=t.split(" "),d=0;d<o.length;d++)this.p.indexOf("border")&&(o[d]=ee(o[d])),p=_=ie(a,o[d],S,!1,"0px"),-1!==p.indexOf(" ")&&(_=p.split(" "),p=_[0],_=_[1]),c=i=l[d],m=parseFloat(p),h=p.substr((m+"").length),y="="===c.charAt(1),y?(u=parseInt(c.charAt(0)+"1",10),c=c.substr(2),u*=parseFloat(c),f=c.substr((u+"").length-(0>u?1:0))||""):(u=parseFloat(c),f=c.substr((u+"").length)),""===f&&(f=b[e]||h),f!==h&&(P=ae(a,"borderLeft",m,h),v=ae(a,"borderTop",m,h),"%"===f?(p=100*(P/T)+"%",_=100*(v/g)+"%"):"em"===f?(A=ae(a,"borderLeft",1,"em"),p=P/A+"em",_=v/A+"em"):(p=P+"px",_=v+"px"),y&&(c=parseFloat(p)+u+f,i=parseFloat(_)+u+f)),r=Re(s,o[d],p+" "+_,c+" "+i,!1,"0px",r);return r},prefix:!0,formatter:Me("0px 0px 0px 0px",!1,!0)}),Ie("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(i,t,e,a,n){return Re(i.style,e,this.format(ie(i,e,S,!1,"0px 0px")),this.format(t),!1,"0px",n)},prefix:!0,formatter:Me("0px 0px",!1,!0)}),Ie("backgroundPosition",{defaultValue:"0 0",parser:function(a,t,e,n,r,o){var s="background-position",l=S||te(a,null),d=this.format((l?Ae?l.getPropertyValue(s+"-x")+" "+l.getPropertyValue(s+"-y"):l.getPropertyValue(s):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),_=this.format(t),p,c,m,i,u,T;if(-1!==d.indexOf("%")!=(-1!==_.indexOf("%"))&&2>_.split(",").length&&(T=ie(a,"backgroundImage").replace(D,""),T&&"none"!==T)){for(p=d.split(" "),c=_.split(" "),j.setAttribute("src",T),m=2;-1<--m;)d=p[m],i=-1!==d.indexOf("%"),i!==(-1!==c[m].indexOf("%"))&&(u=0===m?a.offsetWidth-j.width:a.offsetHeight-j.height,p[m]=i?parseFloat(d)/100*u+"px":100*(parseFloat(d)/u)+"%");d=p.join(" ")}return this.parseComplex(a.style,d,_,r,o)},formatter:_e}),Ie("backgroundSize",{defaultValue:"0 0",formatter:function(e){return e+="",_e(-1===e.indexOf(" ")?e+" "+e:e)}}),Ie("perspective",{defaultValue:"0px",prefix:!0}),Ie("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),Ie("transformStyle",{prefix:!0}),Ie("backfaceVisibility",{prefix:!0}),Ie("userSelect",{prefix:!0}),Ie("margin",{parser:we("marginTop,marginRight,marginBottom,marginLeft")}),Ie("padding",{parser:we("paddingTop,paddingRight,paddingBottom,paddingLeft")}),Ie("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(i,t,e,a,n,r){var o,s,l;return 9>Ae?(s=i.currentStyle,l=8>Ae?" ":",",o="rect("+s.clipTop+l+s.clipRight+l+s.clipBottom+l+s.clipLeft+")",t=this.format(t).split(",").join(l)):(o=this.format(ie(i,this.p,S,!1,this.dflt)),t=this.format(t)),this.parseComplex(i.style,o,t,n,r)}}),Ie("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),Ie("autoRound,strictUnits",{parser:function(i,t,e,a,n){return n}}),Ie("border",{defaultValue:"0px solid #000",parser:function(i,t,e,a,n,r){var o=ie(i,"borderTopWidth",S,!1,"0px"),s=this.format(t).split(" "),l=s[0].replace(x,"");return"px"!==l&&(o=parseFloat(o)/ae(i,"borderTopWidth",1,l)+l),this.parseComplex(i.style,this.format(o+" "+ie(i,"borderTopStyle",S,!1,"solid")+" "+ie(i,"borderTopColor",S,!1,"#000")),s.join(" "),n,r)},color:!0,formatter:function(e){var t=e.split(" ");return t[0]+" "+(t[1]||"solid")+" "+(e.match(be)||["#000"])[0]}}),Ie("borderWidth",{parser:we("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),Ie("float,cssFloat,styleFloat",{parser:function(i,t,e,a,n){var r=i.style,o="cssFloat"in r?"cssFloat":"styleFloat";return new De(r,o,0,0,n,-1,e,!1,0,r[o],t)}});var rt=function(e){var i=this.t,t=i.filter||ie(this.data,"filter")||"",a=0|this.s+this.c*e,n;100==a&&(-1===t.indexOf("atrix(")&&-1===t.indexOf("radient(")&&-1===t.indexOf("oader(")?(i.removeAttribute("filter"),n=!ie(this.data,"filter")):(i.filter=t.replace(E,""),n=!0)),n||(this.xn1&&(i.filter=t=t||"alpha(opacity="+a+")"),-1===t.indexOf("pacity")?(0!=a||!this.xn1)&&(i.filter=t+" alpha(opacity="+a+")"):i.filter=t.replace(M,"opacity="+a))};Ie("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(i,t,a,n,r,o){var s=parseFloat(ie(i,"opacity",S,!1,"1")),l=i.style,d="autoAlpha"===a;return"string"==typeof t&&"="===t.charAt(1)&&(t=("-"===t.charAt(0)?-1:1)*parseFloat(t.substr(2))+s),d&&1===s&&"hidden"===ie(i,"visibility",S)&&0!==t&&(s=0),Q?r=new De(l,"opacity",s,t-s,r):(r=new De(l,"opacity",100*s,100*(t-s),r),r.xn1=d?1:0,l.zoom=1,r.type=2,r.b="alpha(opacity="+r.s+")",r.e="alpha(opacity="+(r.s+r.c)+")",r.data=i,r.plugin=o,r.setRatio=rt),d&&(r=new De(l,"visibility",0,0,r,-1,null,!1,0,0===s?"hidden":"inherit",0===t?"hidden":"inherit"),r.xs0="inherit",n._overwriteProps.push(r.n),n._overwriteProps.push(a)),r}});var ot=function(e,t){t&&(e.removeProperty?(("ms"===t.substr(0,2)||"webkit"===t.substr(0,6))&&(t="-"+t),e.removeProperty(t.replace(G,"-$1").toLowerCase())):e.removeAttribute(t))},st=function(e){if(this.t._gsClassPT=this,1===e||0===e){this.t.setAttribute("class",0===e?this.b:this.e);for(var t=this.data,i=this.t.style;t;)t.v?i[t.p]=t.v:ot(i,t.p),t=t._next;1===e&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};Ie("className",{parser:function(i,t,e,a,n,r,o){var s=i.getAttribute("class")||"",l=i.style.cssText,d,_,p,c,m;if(n=a._classNamePT=new De(i,e,0,0,n,2),n.setRatio=st,n.pr=-11,f=!0,n.b=s,_=re(i,S),p=i._gsClassPT,p){for(c={},m=p.data;m;)c[m.p]=1,m=m._next;p.setRatio(1)}return i._gsClassPT=n,n.e="="===t.charAt(1)?s.replace(new RegExp("(?:\\s|^)"+t.substr(2)+"(?![\\w-])"),"")+("+"===t.charAt(0)?" "+t.substr(2):""):t,i.setAttribute("class",n.e),d=oe(i,_,re(i),o,c),i.setAttribute("class",s),n.data=d.firstMPT,i.style.cssText=l,n=n.xfirst=a.parse(i,d.difs,n,r),n}});var lt=function(e){if((1===e||0===e)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var t=this.t.style,n=c.transform.parse,r,a,o,i,s;if("all"===this.e)t.cssText="",i=!0;else for(r=this.e.split(" ").join("").split(","),o=r.length;-1<--o;)a=r[o],c[a]&&(c[a].parse===n?i=!0:a="transformOrigin"===a?Xe:c[a].p),ot(t,a);i&&(ot(t,Ve),s=this.t._gsTransform,s&&(s.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(Ie("clearProps",{parser:function(i,t,e,a,n){return n=new De(i,e,0,0,n,2),n.setRatio=lt,n.e=t,n.pr=-10,n.data=a._tween,f=!0,n}}),m=["bezier","throwProps","physicsProps","physics2D"],Oe=m.length;Oe--;)Le(m[Oe]);m=g.prototype,m._firstPT=m._lastParsedTransform=m._transform=null,m._onInitTween=function(e,t,i,a){if(!e.nodeType)return!1;this._target=xe=e,this._tween=i,this._vars=t,Ce=a,he=t.autoRound,f=!1,b=t.suffixMap||g.suffixMap,S=te(e,""),h=this._overwriteProps;var n=e.style,r,o,s,l,d,_,p,m,u;if(Se&&""===n.zIndex&&(r=ie(e,"zIndex",S),("auto"===r||""===r)&&this._addLazySet(n,"zIndex",0)),"string"==typeof t&&(l=n.cssText,r=re(e,S),n.cssText=l+";"+t,r=oe(e,r,re(e)).difs,!Q&&w.test(t)&&(r.opacity=parseFloat(RegExp.$1)),t=r,n.cssText=l),this._firstPT=t.className?o=c.className.parse(e,t.className,"className",this,null,null,t):o=this.parse(e,t,null),this._transformType){for(u=3===this._transformType,Ve?ye&&(Se=!0,""===n.zIndex&&(p=ie(e,"zIndex",S),("auto"===p||""===p)&&this._addLazySet(n,"zIndex",0)),ve&&this._addLazySet(n,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(u?"visible":"hidden"))):n.zoom=1,s=o;s&&s._next;)s=s._next;m=new De(e,"transform",0,0,null,2),this._linkCSSP(m,null,s),m.setRatio=Ve?at:it,m.data=this._transform||tt(e,S,!0),m.tween=i,m.pr=-1,h.pop()}if(f){for(;o;){for(_=o._next,s=l;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:d)?o._prev._next=o:l=o,(o._next=s)?s._prev=o:d=o,o=_}this._firstPT=l}return!0},m.parse=function(e,t,i,a){var n=e.style,r,o,s,l,d,_,p,m,u,T;for(r in t){if(_=t[r],"function"==typeof _&&(_=_(Ce,xe)),o=c[r],o)i=o.parse(e,_,r,this,i,a,t);else if("--"===r.substr(0,2)){this._tween._propLookup[r]=this._addTween.call(this._tween,e.style,"setProperty",te(e).getPropertyValue(r)+"",_+"",r,!1,r);continue}else d=ie(e,r,S)+"",u="string"==typeof _,"color"===r||"fill"===r||"stroke"===r||-1!==r.indexOf("Color")||u&&v.test(_)?(!u&&(_=ge(_),_=(3<_.length?"rgba(":"rgb(")+_.join(",")+")"),i=Re(n,r,d,_,!0,"transparent",i,0,a)):u&&L.test(_)?i=Re(n,r,d,_,!0,null,i,0,a):(s=parseFloat(d),p=s||0===s?d.substr((s+"").length):"",(""===d||"auto"===d)&&("width"===r||"height"===r?(s=de(e,r,S),p="px"):"left"===r||"top"===r?(s=ne(e,r,S),p="px"):(s="opacity"===r?1:0,p="")),T=u&&"="===_.charAt(1),T?(l=parseInt(_.charAt(0)+"1",10),_=_.substr(2),l*=parseFloat(_),m=_.replace(x,"")):(l=parseFloat(_),m=u?_.replace(x,""):""),""===m&&(m=r in b?b[r]:p),_=l||0===l?(T?l+s:l)+m:t[r],p!==m&&(""!==m||"lineHeight"===r)&&(l||0===l)&&s&&(s=ae(e,r,s,p),"%"===m?(s/=ae(e,r,100,"%")/100,!0!==t.strictUnits&&(d=s+"%")):"em"===m||"rem"===m||"vw"===m||"vh"===m?s/=ae(e,r,1,m):"px"!==m&&(l=ae(e,r,l,m),m="px"),T&&(l||0===l)&&(_=l+s+m)),T&&(l+=s),(s||0===s)&&(l||0===l)?(i=new De(n,r,s,l-s,i,0,r,!1!==he&&("px"===m||"zIndex"==r),0,d,_),i.xs0=m):void 0!==n[r]&&(_||_+"NaN"&&null!=_)?(i=new De(n,r,l||s||0,0,i,-1,r,!1,0,d,_),i.xs0="none"===_&&("display"===r||-1!==r.indexOf("Style"))?d:_):q("invalid "+r+" tween value: "+t[r]));a&&i&&!i.plugin&&(i.plugin=a)}return i},m.setRatio=function(e){var t=this._firstPT,a=1e-6,n,r,o;if(1===e&&(this._tween._time===this._tween._duration||0===this._tween._time))for(;t;){if(2===t.type)t.setRatio(e);else if(!(t.r&&-1!==t.type))t.t[t.p]=t.e;else if(n=_(t.s+t.c),!t.type)t.t[t.p]=n+t.xs0;else if(1===t.type){for(o=t.l,r=t.xs0+n+t.xs1,o=1;o<t.l;o++)r+=t["xn"+o]+t["xs"+(o+1)];t.t[t.p]=r}t=t._next}else if(e||this._tween._time!==this._tween._duration&&0!==this._tween._time||-1e-6===this._tween._rawPrevTime)for(;t;){if(n=t.c*e+t.s,t.r?n=_(n):n<a&&n>-a&&(n=0),!t.type)t.t[t.p]=n+t.xs0;else if(1!==t.type)-1===t.type?t.t[t.p]=t.xs0:t.setRatio&&t.setRatio(e);else if(o=t.l,2===o)t.t[t.p]=t.xs0+n+t.xs1+t.xn1+t.xs2;else if(3===o)t.t[t.p]=t.xs0+n+t.xs1+t.xn1+t.xs2+t.xn2+t.xs3;else if(4===o)t.t[t.p]=t.xs0+n+t.xs1+t.xn1+t.xs2+t.xn2+t.xs3+t.xn3+t.xs4;else if(5===o)t.t[t.p]=t.xs0+n+t.xs1+t.xn1+t.xs2+t.xn2+t.xs3+t.xn3+t.xs4+t.xn4+t.xs5;else{for(r=t.xs0+n+t.xs1,o=1;o<t.l;o++)r+=t["xn"+o]+t["xs"+(o+1)];t.t[t.p]=r}t=t._next}else for(;t;)2===t.type?t.setRatio(e):t.t[t.p]=t.b,t=t._next},m._enableTransforms=function(e){this._transform=this._transform||tt(this._target,S,!0),this._transformType=!(this._transform.svg&&nt)&&(e||3===this._transformType)?3:2};var dt=function(){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};m._addLazySet=function(e,t,i){var a=this._firstPT=new De(e,t,0,0,this._firstPT,2);a.e=i,a.setRatio=dt,a.data=this},m._linkCSSP=function(e,t,i,a){return e&&(t&&(t._prev=e),e._next&&(e._next._prev=e._prev),e._prev?e._prev._next=e._next:this._firstPT===e&&(this._firstPT=e._next,a=!0),i?i._next=e:!a&&null===this._firstPT&&(this._firstPT=e),e._next=t,e._prev=i),e},m._mod=function(e){for(var t=this._firstPT;t;)"function"==typeof e[t.p]&&e[t.p]===_&&(t.r=1),t=t._next},m._kill=function(t){var i=t,a,n,r;if(t.autoAlpha||t.alpha){for(n in i={},t)i[n]=t[n];i.opacity=1,i.autoAlpha&&(i.visibility=1)}for(t.className&&(a=this._classNamePT)&&(r=a.xfirst,r&&r._prev?this._linkCSSP(r._prev,a._next,r._prev._prev):r===this._firstPT&&(this._firstPT=a._next),a._next&&this._linkCSSP(a._next,a._next._next,r._prev),this._classNamePT=null),a=this._firstPT;a;)a.plugin&&a.plugin!==n&&a.plugin._kill&&(a.plugin._kill(t),n=a.plugin),a=a._next;return e.prototype._kill.call(this,i)};var _t=function(t,e,a){var n,r,i,o;if(t.slice){for(r=t.length;-1<--r;)_t(t[r],e,a);return}for(n=t.childNodes,r=n.length;-1<--r;)i=n[r],o=i.type,i.style&&(e.push(re(i)),a&&a.push(i)),(1===o||9===o||11===o)&&i.childNodes.length&&_t(i,e,a)};return g.cascadeTo=function(t,a,n){var r=T.to(t,a,n),o=[r],s=[],l=[],e=[],d=T._internals.reservedProps,_,i,c,p;for(t=r._targets||r.target,_t(t,s,e),r.render(a,!0,!0),_t(t,l),r.render(0,!0,!0),r._enabled(!0),_=e.length;-1<--_;)if(i=oe(e[_],s[_],l[_]),i.firstMPT){for(c in i=i.difs,n)d[c]&&(i[c]=n[c]);for(c in p={},i)p[c]=s[_][c];o.push(T.fromTo(e[_],a,p,i))}return o},e.activate([g]),g},!0),function(){var e=u._gsDefine.plugin({propName:"roundProps",version:"1.6.0",priority:-1,API:2,init:function(e,t,i){return this._tween=i,!0}}),t=function(e){for(;e;)e.f||e.blob||(e.m=_),e=e._next},i=e.prototype;i._onInitAllProps=function(){for(var e=this._tween,a=e.vars.roundProps.join?e.vars.roundProps:e.vars.roundProps.split(","),n=a.length,i={},r=e._propLookup.roundProps,o,s,l;-1<--n;)i[a[n]]=_;for(n=a.length;-1<--n;)for(o=a[n],s=e._firstPT;s;)l=s._next,s.pg?s.t._mod(i):s.n===o&&(2===s.f&&s.t?t(s.t._firstPT):(this._add(s.t,o,s.s,s.c),l&&(l._prev=s._prev),s._prev?s._prev._next=l:e._firstPT===s&&(e._firstPT=l),s._next=s._prev=null,e._propLookup[o]=r)),s=l;return!1},i._add=function(e,t,i,a){this._addTween(e,t,i,i+a,t,Math.round),this._overwriteProps.push(t)}}(),function(){u._gsDefine.plugin({propName:"attr",API:2,version:"0.6.1",init:function(e,t,i,a){var n,r;if("function"!=typeof e.setAttribute)return!1;for(n in t)r=t[n],"function"==typeof r&&(r=r(a,e)),this._addTween(e,"setAttribute",e.getAttribute(n)+"",r+"",n,!1,n),this._overwriteProps.push(n);return!0}})}(),u._gsDefine.plugin({propName:"directionalRotation",version:"0.3.1",API:2,init:function(e,t,i,a){"object"!=typeof t&&(t={rotation:t}),this.finals={};var n=!0===t.useRadians?2*l:360,r=1e-6,o,s,d,_,p,c;for(o in t)"useRadians"!==o&&(_=t[o],"function"==typeof _&&(_=_(a,e)),c=(_+"").split("_"),s=c[0],d=parseFloat("function"==typeof e[o]?e[o.indexOf("set")||"function"!=typeof e["get"+o.substr(3)]?o:"get"+o.substr(3)]():e[o]),_=this.finals[o]="string"==typeof s&&"="===s.charAt(1)?d+parseInt(s.charAt(0)+"1",10)*+s.substr(2):+s||0,p=_-d,c.length&&(s=c.join("_"),-1!==s.indexOf("short")&&(p%=n,p!==p%(n/2)&&(p=0>p?p+n:p-n)),-1!==s.indexOf("_cw")&&0>p?p=(p+9999999999*n)%n-(0|p/n)*n:-1!==s.indexOf("ccw")&&0<p&&(p=(p-9999999999*n)%n-(0|p/n)*n)),(p>r||p<-r)&&(this._addTween(e,o,d,d+p,o),this._overwriteProps.push(o)));return!0},set:function(e){var t;if(1!==e)this._super.setRatio.call(this,e);else for(t=this._firstPT;t;)t.f?t.t[t.p](this.finals[t.p]):t.t[t.p]=this.finals[t.p],t=t._next}})._autoCSS=!0,u._gsDefine("easing.Back",["easing.Ease"],function(t){var i=u.GreenSockGlobals||u,a=i.com.greensock,s=2*l,d=l/2,_=a._class,c=function(e,i){var a=_("easing."+e,function(){},!0),n=a.prototype=new t;return n.constructor=a,n.getRatio=i,a},m=t.register||function(){},T=function(e,t,i,a){var n=_("easing."+e,{easeOut:new t,easeIn:new i,easeInOut:new a},!0);return m(n,e),n},g=function(e,t,i){this.t=e,this.v=t,i&&(this.next=i,i.prev=this,this.c=i.v-t,this.gap=i.t-e)},f=function(e,i){var a=_("easing."+e,function(e){this._p1=e||0===e?e:1.70158,this._p2=1.525*this._p1},!0),n=a.prototype=new t;return n.constructor=a,n.getRatio=i,n.config=function(e){return new a(e)},a},b=T("Back",f("BackOut",function(e){return--e*e*((this._p1+1)*e+this._p1)+1}),f("BackIn",function(e){return e*e*((this._p1+1)*e-this._p1)}),f("BackInOut",function(e){return 1>(e*=2)?0.5*e*e*((this._p2+1)*e-this._p2):0.5*((e-=2)*e*((this._p2+1)*e+this._p2)+2)})),h=_("easing.SlowMo",function(e,t,i){t=t||0===t?t:0.7,null==e?e=0.7:1<e&&(e=1),this._p=1===e?0:t,this._p1=(1-e)/2,this._p2=e,this._p3=this._p1+this._p2,this._calcEnd=!0===i},!0),S=h.prototype=new t,p,y,P;return S.constructor=h,S.getRatio=function(e){var t=e+(0.5-e)*this._p;return e<this._p1?this._calcEnd?1-(e=1-e/this._p1)*e:t-(e=1-e/this._p1)*e*e*e*t:e>this._p3?this._calcEnd?1===e?0:1-(e=(e-this._p3)/this._p1)*e:t+(e-t)*(e=(e-this._p3)/this._p1)*e*e*e:this._calcEnd?1:t},h.ease=new h(0.7,0.7),S.config=h.config=function(e,t,i){return new h(e,t,i)},p=_("easing.SteppedEase",function(e,t){e=e||1,this._p1=1/e,this._p2=e+(t?0:1),this._p3=t?1:0},!0),S=p.prototype=new t,S.constructor=p,S.getRatio=function(e){return 0>e?e=0:1<=e&&(e=0.999999999),((0|this._p2*e)+this._p3)*this._p1},S.config=p.config=function(e,t){return new p(e,t)},y=_("easing.RoughEase",function(e){e=e||{};for(var n=e.taper||"none",r=[],a=0,o=0|(e.points||20),s=o,i=!1!==e.randomize,l=!0===e.clamp,d=e.template instanceof t?e.template:null,_="number"==typeof e.strength?0.4*e.strength:0.4,p,c,m,u,T,f;-1<--s;)p=i?Math.random():1/o*s,c=d?d.getRatio(p):p,"none"===n?m=_:"out"===n?(u=1-p,m=u*u*_):"in"===n?m=p*p*_:0.5>p?(u=2*p,m=0.5*(u*u)*_):(u=2*(1-p),m=0.5*(u*u)*_),i?c+=Math.random()*m-0.5*m:s%2?c+=0.5*m:c-=0.5*m,l&&(1<c?c=1:0>c&&(c=0)),r[a++]={x:p,y:c};for(r.sort(function(e,t){return e.x-t.x}),f=new g(1,1,null),s=o;-1<--s;)T=r[s],f=new g(T.x,T.y,f);this._prev=new g(0,0,0===f.t?f.next:f)},!0),S=y.prototype=new t,S.constructor=y,S.getRatio=function(e){var t=this._prev;if(e>t.t){for(;t.next&&e>=t.t;)t=t.next;t=t.prev}else for(;t.prev&&e<=t.t;)t=t.prev;return this._prev=t,t.v+(e-t.t)/t.gap*t.c},S.config=function(e){return new y(e)},y.ease=new y,T("Bounce",c("BounceOut",function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+0.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+0.9375:7.5625*(e-=2.625/2.75)*e+0.984375}),c("BounceIn",function(e){return(e=1-e)<1/2.75?1-7.5625*e*e:e<2/2.75?1-(7.5625*(e-=1.5/2.75)*e+0.75):e<2.5/2.75?1-(7.5625*(e-=2.25/2.75)*e+0.9375):1-(7.5625*(e-=2.625/2.75)*e+0.984375)}),c("BounceInOut",function(e){var t=0.5>e;return e=t?1-2*e:2*e-1,e=e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+0.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+0.9375:7.5625*(e-=2.625/2.75)*e+0.984375,t?0.5*(1-e):0.5*e+0.5})),T("Circ",c("CircOut",function(e){return o(1- --e*e)}),c("CircIn",function(e){return-(o(1-e*e)-1)}),c("CircInOut",function(e){return 1>(e*=2)?-0.5*(o(1-e*e)-1):0.5*(o(1-(e-=2)*e)+1)})),P=function(e,i,a){var n=_("easing."+e,function(e,t){this._p1=1<=e?e:1,this._p2=(t||a)/(1>e?e:1),this._p3=this._p2/s*(Math.asin(1/this._p1)||0),this._p2=s/this._p2},!0),r=n.prototype=new t;return r.constructor=n,r.getRatio=i,r.config=function(e,t){return new n(e,t)},n},T("Elastic",P("ElasticOut",function(t){return this._p1*e(2,-10*t)*n((t-this._p3)*this._p2)+1},0.3),P("ElasticIn",function(t){return-(this._p1*e(2,10*(t-=1))*n((t-this._p3)*this._p2))},0.3),P("ElasticInOut",function(t){return 1>(t*=2)?-0.5*(this._p1*e(2,10*(t-=1))*n((t-this._p3)*this._p2)):0.5*(this._p1*e(2,-10*(t-=1))*n((t-this._p3)*this._p2))+1},0.45)),T("Expo",c("ExpoOut",function(t){return 1-e(2,-10*t)}),c("ExpoIn",function(t){return e(2,10*(t-1))-1e-3}),c("ExpoInOut",function(t){return 1>(t*=2)?0.5*e(2,10*(t-1)):0.5*(2-e(2,-10*(t-1)))})),T("Sine",c("SineOut",function(e){return n(e*d)}),c("SineIn",function(e){return-r(e*d)+1}),c("SineInOut",function(e){return-0.5*(r(l*e)-1)})),_("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),m(i.SlowMo,"SlowMo","ease,"),m(y,"RoughEase","ease,"),m(p,"SteppedEase","ease,"),b},!0)}),u._gsDefine&&u._gsQueue.pop()(),function(t,e){"use strict";var r={},n=t.document,o=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!o.TweenLite){var s=function(e){var t=e.split("."),a=o,n;for(n=0;n<t.length;n++)a[t[n]]=a=a[t[n]]||{};return a},l=s("com.greensock"),d=1e-10,m=function(e){var t=[],a=e.length,n;for(n=0;n!==a;t.push(e[n++]));return t},u=function(){},T=function(){var e=Object.prototype.toString,t=e.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&e.call(i)===t)}}(),g={},f=function(t,a,l,d){this.sc=g[t]?g[t].sc:[],g[t]=this,this.gsClass=null,this.func=l;var _=[];this.check=function(p){for(var m=a.length,i=m,u,T,b,n;-1<--m;)(u=g[a[m]]||new f(a[m],[])).gsClass?(_[m]=u.gsClass,i--):p&&u.sc.push(this);if(0===i&&l){if(T=("com.greensock."+t).split("."),b=T.pop(),n=s(T.join("."))[b]=this.gsClass=l.apply(l,_),d)if(o[b]=r[b]=n,!("undefined"!=typeof c&&c.exports));else if(t===e)for(m in c.exports=r[e]=n,r)n[m]=r[m];else r[e]&&(r[e][b]=n);for(m=0;m<this.sc.length;m++)this.sc[m].check()}},this.check(!0)},b=t._gsDefine=function(e,t,i,a){return new f(e,t,i,a)},h=l._class=function(e,t,i){return t=t||function(){},b(e,[],function(){return t},i),t},S,a,i,y,P;b.globals=o;var v=[0,0,1,1],A=h("easing.Ease",function(e,t,i,a){this._func=e,this._type=i||0,this._power=a||0,this._params=t?v.concat(t):v},!0),x=A.map={},C=A.register=function(t,a,n,r){for(var o=a.split(","),s=o.length,i=(n||"easeIn,easeOut,easeInOut").split(","),d,e,_,p;-1<--s;)for(e=o[s],d=r?h("easing."+e,null,!0):l.easing[e]||{},_=i.length;-1<--_;)p=i[_],x[e+"."+p]=x[p+e]=d[p]=t.getRatio?t:t[p]||new t};for(i=A.prototype,i._calcEnd=!1,i.getRatio=function(e){if(this._func)return this._params[0]=e,this._func.apply(null,this._params);var i=this._type,t=this._power,a=1===i?1-e:2===i?e:0.5>e?2*e:2*(1-e);return 1===t?a*=a:2===t?a*=a*a:3===t?a*=a*a*a:4===t&&(a*=a*a*a*a),1===i?1-a:2===i?a:0.5>e?a/2:1-a/2},S=["Linear","Quad","Cubic","Quart","Quint,Strong"],a=S.length;-1<--a;)i=S[a]+",Power"+a,C(new A(null,null,1,a),i,"easeOut",!0),C(new A(null,null,2,a),i,"easeIn"+(0===a?",easeNone":"")),C(new A(null,null,3,a),i,"easeInOut");x.linear=l.easing.Linear.easeIn,x.swing=l.easing.Quad.easeInOut;var M=h("events.EventDispatcher",function(e){this._listeners={},this._eventTarget=e||this});i=M.prototype,i.addEventListener=function(e,t,a,n,r){r=r||0;var o=this._listeners[e],s=0,l,d;for(this!==y||P||y.wake(),null==o&&(this._listeners[e]=o=[]),d=o.length;-1<--d;)l=o[d],l.c===t&&l.s===a?o.splice(d,1):0==s&&l.pr<r&&(s=d+1);o.splice(s,0,{c:t,s:a,up:n,pr:r})},i.removeEventListener=function(e,t){var a=this._listeners[e],n;if(a)for(n=a.length;-1<--n;)if(a[n].c===t)return void a.splice(n,1)},i.dispatchEvent=function(e){var a=this._listeners[e],n,i,r;if(a)for(n=a.length,1<n&&(a=a.slice(0)),i=this._eventTarget;-1<--n;)r=a[n],r&&(r.up?r.c.call(r.s||i,{type:e,target:i}):r.c.call(r.s||i))};var w=t.requestAnimationFrame,E=t.cancelAnimationFrame,G=Date.now||function(){return new Date().getTime()},B=G();for(S=["ms","moz","webkit","o"],a=S.length;-1<--a&&!w;)w=t[S[a]+"RequestAnimationFrame"],E=t[S[a]+"CancelAnimationFrame"]||t[S[a]+"CancelRequestAnimationFrame"];h("Ticker",function(e,t){var i=this,a=G(),r=!1!==t&&w&&"auto",o=500,s=33,l=function(e){var t=G()-B,n,r;t>o&&(a+=t-s),B+=t,i.time=(B-a)/1e3,n=i.time-g,(!_||0<n||!0===e)&&(i.frame++,g+=n+(n>=T?4e-3:T-n),r=!0),!0!==e&&(m=c(l)),r&&i.dispatchEvent("tick")},_,c,m,T,g;M.call(i),i.time=i.frame=0,i.tick=function(){l(!0)},i.lagSmoothing=function(e,t){return arguments.length?void(o=e||1/d,s=p(t,o,0)):o<1/d},i.sleep=function(){null==m||(r&&E?E(m):clearTimeout(m),c=u,m=null,i===y&&(P=!1))},i.wake=function(e){null===m?e?a+=-B+(B=G()):10<i.frame&&(B=G()-o+5):i.sleep(),c=0===_?u:r&&w?w:function(e){return setTimeout(e,0|1e3*(g-i.time)+1)},i===y&&(P=!0),l(2)},i.fps=function(e){return arguments.length?void(_=e,T=1/(_||60),g=this.time+T,i.wake()):_},i.useRAF=function(e){return arguments.length?void(i.sleep(),r=e,i.fps(_)):r},i.fps(e),setTimeout(function(){"auto"===r&&5>i.frame&&"hidden"!==n.visibilityState&&i.useRAF(!1)},1500)}),i=l.Ticker.prototype=new l.events.EventDispatcher,i.constructor=l.Ticker;var D=h("core.Animation",function(e,t){if(this.vars=t=t||{},this._duration=this._totalDuration=e||0,this._delay=+t.delay||0,this._timeScale=1,this._active=!0===t.immediateRender,this.data=t.data,this._reversed=!0===t.reversed,!!J){P||y.wake();var i=this.vars.useFrames?q:J;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});y=D.ticker=new l.Ticker,i=D.prototype,i._dirty=i._gc=i._initted=i._paused=!1,i._totalTime=i._time=0,i._rawPrevTime=-1,i._next=i._last=i._onUpdate=i._timeline=i.timeline=null,i._paused=!1;var k=function(){P&&2e3<G()-B&&("hidden"!==n.visibilityState||!y.lagSmoothing())&&y.wake();var e=setTimeout(k,2e3);e.unref&&e.unref()};k(),i.play=function(e,t){return null!=e&&this.seek(e,t),this.reversed(!1).paused(!1)},i.pause=function(e,t){return null!=e&&this.seek(e,t),this.paused(!0)},i.resume=function(e,t){return null!=e&&this.seek(e,t),this.paused(!1)},i.seek=function(e,t){return this.totalTime(+e,!1!==t)},i.restart=function(e,t){return this.reversed(!1).paused(!1).totalTime(e?-this._delay:0,!1!==t,!0)},i.reverse=function(e,t){return null!=e&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},i.render=function(){},i.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},i.isActive=function(){var e=this._timeline,t=this._startTime,i;return!e||!this._gc&&!this._paused&&e.isActive()&&(i=e.rawTime(!0))>=t&&i<t+this.totalDuration()/this._timeScale-1e-7},i._enabled=function(e,t){return P||y.wake(),this._gc=!e,this._active=this.isActive(),!0!==t&&(e&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!e&&this.timeline&&this._timeline._remove(this,!0)),!1},i._kill=function(){return this._enabled(!1,!1)},i.kill=function(e,t){return this._kill(e,t),this},i._uncache=function(e){for(var t=e?this:this.timeline;t;)t._dirty=!0,t=t.timeline;return this},i._swapSelfInParams=function(e){for(var t=e.length,i=e.concat();-1<--t;)"{self}"===e[t]&&(i[t]=this);return i},i._callback=function(e){var t=this.vars,i=t[e],a=t[e+"Params"],n=t[e+"Scope"]||t.callbackScope||this,r=a?a.length:0;0===r?i.call(n):1===r?i.call(n,a[0]):2===r?i.call(n,a[0],a[1]):i.apply(n,a)},i.eventCallback=function(e,t,i,a){if("on"===(e||"").substr(0,2)){var n=this.vars;if(1===arguments.length)return n[e];null==t?delete n[e]:(n[e]=t,n[e+"Params"]=T(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,n[e+"Scope"]=a),"onUpdate"===e&&(this._onUpdate=t)}return this},i.delay=function(e){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+e-this._delay),this._delay=e,this):this._delay},i.duration=function(e){return arguments.length?(this._duration=this._totalDuration=e,this._uncache(!0),this._timeline.smoothChildTiming&&0<this._time&&this._time<this._duration&&0!==e&&this.totalTime(this._totalTime*(e/this._duration),!0),this):(this._dirty=!1,this._duration)},i.totalDuration=function(e){return this._dirty=!1,arguments.length?this.duration(e):this._totalDuration},i.time=function(e,t){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(e>this._duration?this._duration:e,t)):this._time},i.totalTime=function(e,t,i){if(P||y.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>e&&!i&&(e+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var a=this._totalDuration,n=this._timeline;if(e>a&&!i&&(e=a),this._startTime=(this._paused?this._pauseTime:n._time)-(this._reversed?a-e:e)/this._timeScale,n._dirty||this._uncache(!1),n._timeline)for(;n._timeline;)n._timeline._time!==(n._startTime+n._totalTime)/n._timeScale&&n.totalTime(n._totalTime,!0),n=n._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==e||0===this._duration)&&(L.length&&ee(),this.render(e,t,!1),L.length&&ee())}return this},i.progress=i.totalProgress=function(e,t){var i=this.duration();return arguments.length?this.totalTime(i*e,t):i?this._time/i:this.ratio},i.startTime=function(e){return arguments.length?(e!==this._startTime&&(this._startTime=e,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,e-this._delay)),this):this._startTime},i.endTime=function(e){return this._startTime+(!1==e?this.duration():this.totalDuration())/this._timeScale},i.timeScale=function(e){if(!arguments.length)return this._timeScale;var i,a;for(e=e||d,this._timeline&&this._timeline.smoothChildTiming&&(i=this._pauseTime,a=i||0===i?i:this._timeline.totalTime(),this._startTime=a-(a-this._startTime)*this._timeScale/e),this._timeScale=e,a=this.timeline;a&&a.timeline;)a._dirty=!0,a.totalDuration(),a=a.timeline;return this},i.reversed=function(e){return arguments.length?(e!=this._reversed&&(this._reversed=e,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},i.paused=function(e){if(!arguments.length)return this._paused;var t=this._timeline,i,a;return e!=this._paused&&t&&(!P&&!e&&y.wake(),i=t.rawTime(),a=i-this._pauseTime,!e&&t.smoothChildTiming&&(this._startTime+=a,this._uncache(!1)),this._pauseTime=e?i:null,this._paused=e,this._active=this.isActive(),!e&&0!==a&&this._initted&&this.duration()&&(i=t.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,this.render(i,i===this._totalTime,!0))),this._gc&&!e&&this._enabled(!0,!1),this};var R=h("core.SimpleTimeline",function(e){D.call(this,0,e),this.autoRemoveChildren=this.smoothChildTiming=!0});i=R.prototype=new D,i.constructor=R,i.kill()._gc=!1,i._first=i._last=i._recent=null,i._sortChildren=!1,i.add=i.insert=function(e,t){var i,a;if(e._startTime=+(t||0)+e._delay,e._paused&&this!==e._timeline&&(e._pauseTime=e._startTime+(this.rawTime()-e._startTime)/e._timeScale),e.timeline&&e.timeline._remove(e,!0),e.timeline=e._timeline=this,e._gc&&e._enabled(!0,!0),i=this._last,this._sortChildren)for(a=e._startTime;i&&i._startTime>a;)i=i._prev;return i?(e._next=i._next,i._next=e):(e._next=this._first,this._first=e),e._next?e._next._prev=e:this._last=e,e._prev=i,this._recent=e,this._timeline&&this._uncache(!0),this},i._remove=function(e,t){return e.timeline===this&&(!t&&e._enabled(!1,!0),e._prev?e._prev._next=e._next:this._first===e&&(this._first=e._next),e._next?e._next._prev=e._prev:this._last===e&&(this._last=e._prev),e._next=e._prev=e.timeline=null,e===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},i.render=function(e,t,i){var a=this._first,n;for(this._totalTime=this._time=this._rawPrevTime=e;a;)n=a._next,(a._active||e>=a._startTime&&!a._paused&&!a._gc)&&(a._reversed?a.render((a._dirty?a.totalDuration():a._totalDuration)-(e-a._startTime)*a._timeScale,t,i):a.render((e-a._startTime)*a._timeScale,t,i)),a=n},i.rawTime=function(){return P||y.wake(),this._totalTime};var O=h("TweenLite",function(e,a,n){if(D.call(this,a,n),this.render=O.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"==typeof e?O.selector(e)||e:e;var r=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),o=this.vars.overwrite,s,i,l;if(this._overwrite=o=null==o?Z[O.defaultOverwrite]:"number"==typeof o?o>>0:Z[o],(r||e instanceof Array||e.push&&T(e))&&"number"!=typeof e[0])for(this._targets=l=m(e),this._propLookup=[],this._siblings=[],s=0;s<l.length;s++){if(i=l[s],!i){l.splice(s--,1);continue}else if("string"==typeof i){i=l[s--]=O.selector(i),"string"==typeof i&&l.splice(s+1,1);continue}else if(i.length&&i!==t&&i[0]&&(i[0]===t||i[0].nodeType&&i[0].style&&!i.nodeType)){l.splice(s--,1),this._targets=l=l.concat(m(i));continue}this._siblings[s]=te(i,this,!1),1===o&&1<this._siblings[s].length&&ae(i,this,null,1,this._siblings[s])}else this._propLookup={},this._siblings=te(e,this,!1),1===o&&1<this._siblings.length&&ae(e,this,null,1,this._siblings);(this.vars.immediateRender||0===a&&0===this._delay&&!1!==this.vars.immediateRender)&&(this._time=-d,this.render(p(0,-this._delay)))},!0),H=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},I=function(e,t){var i={},a;for(a in e)Q[a]||a in t&&"transform"!==a&&"x"!==a&&"y"!==a&&"width"!==a&&"height"!==a&&"className"!==a&&"border"!==a||j[a]&&(!j[a]||!j[a]._autoCSS)||(i[a]=e[a],delete e[a]);e.css=i};i=O.prototype=new D,i.constructor=O,i.kill()._gc=!1,i.ratio=0,i._firstPT=i._targets=i._overwrittenProps=i._startAt=null,i._notifyPluginsOfEnabled=i._lazy=!1,O.version="1.20.3",O.defaultEase=i._ease=new A(null,null,1,1),O.defaultOverwrite="auto",O.ticker=y,O.autoSleep=120,O.lagSmoothing=function(e,t){y.lagSmoothing(e,t)},O.selector=t.$||t.jQuery||function(i){var e=t.$||t.jQuery;return e?(O.selector=e,e(i)):"undefined"==typeof n?i:n.querySelectorAll?n.querySelectorAll(i):n.getElementById("#"===i.charAt(0)?i.substr(1):i)};var L=[],N={},V=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,F=/[\+-]=-?[\.\d]/,X=function(e){for(var t=this._firstPT,i=1e-6,a;t;)a=t.blob?1===e&&null!=this.end?this.end:e?this.join(""):this.start:t.c*e+t.s,t.m?a=t.m(a,this._target||t.t):a<i&&a>-i&&!t.blob&&(a=0),t.f?t.fp?t.t[t.p](t.fp,a):t.t[t.p](a):t.t[t.p]=a,t=t._next},U=function(e,t,n,r){var o=[],d=0,p="",s=0,c,m,u,T,g,l,f;for(o.start=e,o.end=t,e=o[0]=e+"",t=o[1]=t+"",n&&(n(o),e=o[0],t=o[1]),o.length=0,c=e.match(V)||[],m=t.match(V)||[],r&&(r._next=null,r.blob=1,o._firstPT=o._applyPT=r),g=m.length,T=0;T<g;T++)f=m[T],l=t.substr(d,t.indexOf(f,d)-d),p+=l||!T?l:",",d+=l.length,s?s=(s+1)%5:"rgba("===l.substr(-5)&&(s=1),f===c[T]||c.length<=T?p+=f:(p&&(o.push(p),p=""),u=parseFloat(c[T]),o.push(u),o._firstPT={_next:o._firstPT,t:o,p:o.length-1,s:u,c:("="===f.charAt(1)?parseInt(f.charAt(0)+"1",10)*parseFloat(f.substr(2)):parseFloat(f)-u)||0,f:0,m:s&&4>s?_:0}),d+=f.length;return p+=t.substr(d),p&&o.push(p),o.setRatio=X,F.test(t)&&(o.end=null),o},z=function(e,t,i,a,n,r,o,l,d){"function"==typeof a&&(a=a(d||0,e));var p=typeof e[t],c="function"==p?t.indexOf("set")||"function"!=typeof e["get"+t.substr(3)]?t:"get"+t.substr(3):"",m="get"===i?c?o?e[c](o):e[c]():e[t]:i,u="string"==typeof a&&"="===a.charAt(1),T={t:e,p:t,s:m,f:"function"==p,pg:0,n:n||t,m:r?"function"==typeof r?r:_:0,pr:0,c:u?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-m||0},g;if("number"==typeof m&&("number"==typeof a||u)||(o||isNaN(m)||!u&&isNaN(a)||"boolean"==typeof m||"boolean"==typeof a?(T.fp=o,g=U(m,u?parseFloat(T.s)+T.c:a,l||O.defaultStringFilter,T),T={t:g,p:"setRatio",s:0,c:1,f:2,pg:0,n:n||t,pr:0,m:0}):(T.s=parseFloat(m),!u&&(T.c=parseFloat(a)-T.s||0))),T.c)return(T._next=this._firstPT)&&(T._next._prev=T),this._firstPT=T,T},W=O._internals={isArray:T,isSelector:H,lazyTweens:L,blobDif:U},j=O._plugins={},K=W.tweenLookup={},Y=0,Q=W.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1,yoyoEase:1},Z={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,true:1,false:0},q=D._rootFramesTimeline=new R,J=D._rootTimeline=new R,$=30,ee=W.lazyRender=function(){var e=L.length,t;for(N={};-1<--e;)t=L[e],t&&!1!==t._lazy&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);L.length=0};J._startTime=y.time,q._startTime=y.frame,J._active=q._active=!0,setTimeout(ee,1),D._updateRoot=O.render=function(){var e,t,i;if(L.length&&ee(),J.render((y.time-J._startTime)*J._timeScale,!1,!1),q.render((y.frame-q._startTime)*q._timeScale,!1,!1),L.length&&ee(),y.frame>=$){for(i in $=y.frame+(parseInt(O.autoSleep,10)||120),K){for(t=K[i].tweens,e=t.length;-1<--e;)t[e]._gc&&t.splice(e,1);0===t.length&&delete K[i]}if(i=J._first,(!i||i._paused)&&O.autoSleep&&!q._first&&1===y._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||y.sleep()}}},y.addEventListener("tick",D._updateRoot);var te=function(e,t,n){var r=e._gsTweenID,o,a;if(K[r||(e._gsTweenID=r="t"+Y++)]||(K[r]={target:e,tweens:[]}),t&&(o=K[r].tweens,o[a=o.length]=t,n))for(;-1<--a;)o[a]===t&&o.splice(a,1);return K[r].tweens},ie=function(e,t,i,a){var n=e.vars.onOverwrite,r,o;return n&&(r=n(e,t,i,a)),n=O.onOverwrite,n&&(o=n(e,t,i,a)),!1!==r&&!1!==o},ae=function(e,t,a,n,r){var o,i,s,_;if(1===n||4<=n){for(_=r.length,o=0;o<_;o++)if((s=r[o])!==t)!s._gc&&s._kill(null,e,t)&&(i=!0);else if(5===n)break;return i}var l=t._startTime+d,p=[],c=0,m=0===t._duration,u;for(o=r.length;-1<--o;)if((s=r[o])===t||s._gc||s._paused);else s._timeline===t._timeline?s._startTime<=l&&s._startTime+s.totalDuration()/s._timeScale>l&&((m||!s._initted)&&2e-10>=l-s._startTime||(p[c++]=s)):(u=u||ne(t,0,m),0===ne(s,u,m)&&(p[c++]=s));for(o=c;-1<--o;)if(s=p[o],2===n&&s._kill(a,e,t)&&(i=!0),2!==n||!s._firstPT&&s._initted){if(2!==n&&!ie(s,t))continue;s._enabled(!1,!1)&&(i=!0)}return i},ne=function(e,i,a){for(var n=e._timeline,r=n._timeScale,o=e._startTime;n._timeline;){if(o+=n._startTime,r*=n._timeScale,n._paused)return-100;n=n._timeline}return o/=r,o>i?o-i:a&&o===i||!e._initted&&o-i<2*d?d:(o+=e.totalDuration()/e._timeScale/r)>i+d?0:o-i-d};i._init=function(){var e=this.vars,t=this._overwrittenProps,a=this._duration,n=!!e.immediateRender,r=e.ease,o,i,s,d,_,p;if(e.startAt){for(d in this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),_={},e.startAt)_[d]=e.startAt[d];if(_.data="isStart",_.overwrite=!1,_.immediateRender=!0,_.lazy=n&&!1!==e.lazy,_.startAt=_.delay=null,_.onUpdate=e.onUpdate,_.onUpdateParams=e.onUpdateParams,_.onUpdateScope=e.onUpdateScope||e.callbackScope||this,this._startAt=O.to(this.target,0,_),n)if(0<this._time)this._startAt=null;else if(0!==a)return}else if(e.runBackwards&&0!==a)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{for(d in 0!==this._time&&(n=!1),s={},e)Q[d]&&"autoCSS"!==d||(s[d]=e[d]);if(s.overwrite=0,s.data="isFromStart",s.lazy=n&&!1!==e.lazy,s.immediateRender=n,this._startAt=O.to(this.target,0,s),!n)this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null);else if(0===this._time)return}if(this._ease=r=r?r instanceof A?r:"function"==typeof r?new A(r,e.easeParams):x[r]||O.defaultEase:O.defaultEase,e.easeParams instanceof Array&&r.config&&(this._ease=r.config.apply(r,e.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(p=this._targets.length,o=0;o<p;o++)this._initProps(this._targets[o],this._propLookup[o]={},this._siblings[o],t?t[o]:null,o)&&(i=!0);else i=this._initProps(this.target,this._propLookup,this._siblings,t,0);if(i&&O._onPluginEvent("_onInitAllProps",this),t&&!this._firstPT&&"function"!=typeof this.target&&this._enabled(!1,!1),e.runBackwards)for(s=this._firstPT;s;)s.s+=s.c,s.c=-s.c,s=s._next;this._onUpdate=e.onUpdate,this._initted=!0},i._initProps=function(e,a,n,r,o){var s,l,i,d,_,p;if(null==e)return!1;for(s in N[e._gsTweenID]&&ee(),!this.vars.css&&e.style&&e!==t&&e.nodeType&&j.css&&!1!==this.vars.autoCSS&&I(this.vars,e),this.vars)if(p=this.vars[s],Q[s])p&&(p instanceof Array||p.push&&T(p))&&-1!==p.join("").indexOf("{self}")&&(this.vars[s]=p=this._swapSelfInParams(p,this));else if(j[s]&&(d=new j[s])._onInitTween(e,this.vars[s],this,o)){for(this._firstPT=_={_next:this._firstPT,t:d,p:"setRatio",s:0,c:1,f:1,n:s,pg:1,pr:d._priority,m:0},l=d._overwriteProps.length;-1<--l;)a[d._overwriteProps[l]]=this._firstPT;(d._priority||d._onInitAllProps)&&(i=!0),(d._onDisable||d._onEnable)&&(this._notifyPluginsOfEnabled=!0),_._next&&(_._next._prev=_)}else a[s]=z.call(this,e,s,"get",p,s,0,null,this.vars.stringFilter,o);return r&&this._kill(r,e)?this._initProps(e,a,n,r,o):1<this._overwrite&&this._firstPT&&1<n.length&&ae(e,this,a,this._overwrite,n)?(this._kill(a,e),this._initProps(e,a,n,r,o)):(this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration)&&(N[e._gsTweenID]=!0),i)},i.render=function(e,t,i){var a=this._time,n=this._duration,o=this._rawPrevTime,s,l,_,p;if(e>=n-1e-7&&0<=e)this._totalTime=this._time=n,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,l="onComplete",i=i||this._timeline.autoRemoveChildren),0===n&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(e=0),(0>o||0>=e&&-1e-7<=e||o===d&&"isPause"!==this.data)&&o!==e&&(i=!0,o>d&&(l="onReverseComplete")),this._rawPrevTime=p=!t||e||o===e?e:d);else if(1e-7>e)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==a||0===n&&0<o)&&(l="onReverseComplete",s=this._reversed),0>e&&(this._active=!1,0===n&&(this._initted||!this.vars.lazy||i)&&(0<=o&&(o!==d||"isPause"!==this.data)&&(i=!0),this._rawPrevTime=p=!t||e||o===e?e:d)),(!this._initted||this._startAt&&this._startAt.progress())&&(i=!0);else if(this._totalTime=this._time=e,this._easeType){var c=e/n,r=this._easeType,m=this._easePower;(1===r||3===r&&0.5<=c)&&(c=1-c),3===r&&(c*=2),1===m?c*=c:2===m?c*=c*c:3===m?c*=c*c*c:4===m&&(c*=c*c*c*c),this.ratio=1===r?1-c:2===r?c:0.5>e/n?c/2:1-c/2}else this.ratio=this._ease.getRatio(e/n);if(this._time!==a||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=a,this._rawPrevTime=o,L.push(this),void(this._lazy=[e,t]);this._time&&!s?this.ratio=this._ease.getRatio(this._time/n):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(!1!==this._lazy&&(this._lazy=!1),this._active||this._paused||this._time===a||!(0<=e)||(this._active=!0),0===a&&(this._startAt&&(0<=e?this._startAt.render(e,!0,i):!l&&(l="_dummyGS")),this.vars.onStart&&(0!==this._time||0===n)&&!t&&this._callback("onStart")),_=this._firstPT;_;)_.f?_.t[_.p](_.c*this.ratio+_.s):_.t[_.p]=_.c*this.ratio+_.s,_=_._next;this._onUpdate&&(0>e&&this._startAt&&-1e-4!==e&&this._startAt.render(e,!0,i),!t&&(this._time!==a||s||i)&&this._callback("onUpdate")),l&&(!this._gc||i)&&(0>e&&this._startAt&&!this._onUpdate&&-1e-4!==e&&this._startAt.render(e,!0,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!t&&this.vars[l]&&this._callback(l),0===n&&this._rawPrevTime===d&&p!==d&&(this._rawPrevTime=0))}},i._kill=function(e,t,a){if("all"===e&&(e=null),null==e&&(null==t||t===this.target))return this._lazy=!1,this._enabled(!1,!1);t="string"==typeof t?O.selector(t)||t:t||this._targets||this.target;var n=a&&this._time&&a._startTime===this._startTime&&this._timeline===a._timeline,r,i,o,s,l,d,_,p,c;if((T(t)||H(t))&&"number"!=typeof t[0])for(r=t.length;-1<--r;)this._kill(e,t[r],a)&&(d=!0);else{if(this._targets){for(r=this._targets.length;-1<--r;)if(t===this._targets[r]){l=this._propLookup[r]||{},this._overwrittenProps=this._overwrittenProps||[],i=this._overwrittenProps[r]=e?this._overwrittenProps[r]||{}:"all";break}}else{if(t!==this.target)return!1;l=this._propLookup,i=this._overwrittenProps=e?this._overwrittenProps||{}:"all"}if(l){if(_=e||l,p=e!==i&&"all"!==i&&e!==l&&("object"!=typeof e||!e._tempKill),a&&(O.onOverwrite||this.vars.onOverwrite)){for(o in _)l[o]&&(c||(c=[]),c.push(o));if((c||!e)&&!ie(this,a,t,c))return!1}for(o in _)(s=l[o])&&(n&&(s.f?s.t[s.p](s.s):s.t[s.p]=s.s,d=!0),s.pg&&s.t._kill(_)&&(d=!0),(!s.pg||0===s.t._overwriteProps.length)&&(s._prev?s._prev._next=s._next:s===this._firstPT&&(this._firstPT=s._next),s._next&&(s._next._prev=s._prev),s._next=s._prev=null),delete l[o]),p&&(i[o]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return d},i.invalidate=function(){return this._notifyPluginsOfEnabled&&O._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],D.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-d,this.render(p(0,-this._delay))),this},i._enabled=function(e,t){if(P||y.wake(),e&&this._gc){var a=this._targets,n;if(a)for(n=a.length;-1<--n;)this._siblings[n]=te(a[n],this,!0);else this._siblings=te(this.target,this,!0)}return D.prototype._enabled.call(this,e,t),this._notifyPluginsOfEnabled&&this._firstPT&&O._onPluginEvent(e?"_onEnable":"_onDisable",this)},O.to=function(e,t,i){return new O(e,t,i)},O.from=function(e,t,i){return i.runBackwards=!0,i.immediateRender=!1!=i.immediateRender,new O(e,t,i)},O.fromTo=function(e,t,i,a){return a.startAt=i,a.immediateRender=!1!=a.immediateRender&&!1!=i.immediateRender,new O(e,t,a)},O.delayedCall=function(e,t,i,a,n){return new O(t,0,{delay:e,onComplete:t,onCompleteParams:i,callbackScope:a,onReverseComplete:t,onReverseCompleteParams:i,immediateRender:!1,lazy:!1,useFrames:n,overwrite:0})},O.set=function(e,t){return new O(e,0,t)},O.getTweensOf=function(e,n){if(null==e)return[];e="string"==typeof e?O.selector(e)||e:e;var r,i,a,o;if((T(e)||H(e))&&"number"!=typeof e[0]){for(r=e.length,i=[];-1<--r;)i=i.concat(O.getTweensOf(e[r],n));for(r=i.length;-1<--r;)for(o=i[r],a=r;-1<--a;)o===i[a]&&i.splice(r,1)}else if(e._gsTweenID)for(i=te(e).concat(),r=i.length;-1<--r;)(i[r]._gc||n&&!i[r].isActive())&&i.splice(r,1);return i||[]},O.killTweensOf=O.killDelayedCallsTo=function(e,t,n){"object"==typeof t&&(n=t,t=!1);for(var r=O.getTweensOf(e,t),a=r.length;-1<--a;)r[a]._kill(n,e)};var re=h("plugins.TweenPlugin",function(e,t){this._overwriteProps=(e||"").split(","),this._propName=this._overwriteProps[0],this._priority=t||0,this._super=re.prototype},!0);if(i=re.prototype,re.version="1.19.0",re.API=2,i._firstPT=null,i._addTween=z,i.setRatio=X,i._kill=function(e){var t=this._overwriteProps,a=this._firstPT,n;if(null!=e[this._propName])this._overwriteProps=[];else for(n=t.length;-1<--n;)null!=e[t[n]]&&t.splice(n,1);for(;a;)null!=e[a.n]&&(a._next&&(a._next._prev=a._prev),a._prev?(a._prev._next=a._next,a._prev=null):this._firstPT===a&&(this._firstPT=a._next)),a=a._next;return!1},i._mod=i._roundProps=function(e){for(var t=this._firstPT,i;t;)i=e[this._propName]||null!=t.n&&e[t.n.split(this._propName+"_").join("")],i&&"function"==typeof i&&(2===t.f?t.t._applyPT.m=i:t.m=i),t=t._next},O._onPluginEvent=function(e,t){var i=t._firstPT,a,n,r,o,s;if("_onInitAllProps"===e){for(;i;){for(s=i._next,n=r;n&&n.pr>i.pr;)n=n._next;(i._prev=n?n._prev:o)?i._prev._next=i:r=i,(i._next=n)?n._prev=i:o=i,i=s}i=t._firstPT=r}for(;i;)i.pg&&"function"==typeof i.t[e]&&i.t[e]()&&(a=!0),i=i._next;return a},re.activate=function(e){for(var t=e.length;-1<--t;)e[t].API===re.API&&(j[new e[t]()._propName]=e[t]);return!0},b.plugin=function(e){if(!e||!e.propName||!e.init||!e.API)throw"illegal plugin definition.";var t=e.propName,i=e.priority||0,a=e.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},r=h("plugins."+t.charAt(0).toUpperCase()+t.substr(1)+"Plugin",function(){re.call(this,t,i),this._overwriteProps=a||[]},!0===e.global),o=r.prototype=new re(t),s;for(s in o.constructor=r,r.API=e.API,n)"function"==typeof e[s]&&(o[n[s]]=e[s]);return r.version=e.version,re.activate([r]),r},S=t._gsQueue,S){for(a=0;a<S.length;a++)S[a]();for(i in g)g[i].func||t.console.log("GSAP encountered missing dependency: "+i)}P=!1}}("undefined"!=typeof c&&c.exports&&"undefined"!=typeof m?m:d||window,"TweenMax")}),s.register("a",["b","d","c","e"],function(){"use strict";var s;return{setters:[function(){},function(e){s=e.default},function(){},function(){}],execute:function(){function d(e){let t=e.toString(16);return 1==t.length?"0"+t:t}function c(e,t,i){return"#"+d(De(255*e))+d(De(255*t))+d(De(255*i))}function m(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16)/255,g:parseInt(t[2],16)/255,b:parseInt(t[3],16)/255}:null}function u(e,t){if("string"==typeof e)return t;let i=m(t);return void 0===e.r?void 0===e.x?[e[0],e[1],e[2]]=[i.r,i.g,i.b]:[e.x,e.y,e.z]=[i.r,i.g,i.b]:Object.assign(e,i),e}function T(e){return"string"==typeof e?e:c(e.r===void 0?e.x===void 0?e[0]:e.x:e.r,e.g===void 0?e.y===void 0?e[1]:e.y:e.g,e.b===void 0?e.z===void 0?e[2]:e.z:e.b)}function g(e){return`${e.toLowerCase().replace(/[^\w-]/g,"")}`}function f(){let e=new pt(2);return e[0]=0,e[1]=0,e}function b(e,t){return e[0]=t[0],e[1]=t[1],e}function h(e,t,i){return e[0]=t,e[1]=i,e}function S(e,t,i){return e[0]=t[0]+i[0],e[1]=t[1]+i[1],e}function y(e,t,i){return e[0]=t[0]-i[0],e[1]=t[1]-i[1],e}function P(e,t,i){return e[0]=t[0]*i,e[1]=t[1]*i,e}function v(e){var t=e[0],i=e[1];return o(t*t+i*i)}function A(e){var t=e[0],i=e[1];return t*t+i*i}function x(e,t){return e[0]=-t[0],e[1]=-t[1],e}function C(e,t){var i=t[0],a=t[1],n=i*i+a*a;return 0<n&&(n=1/o(n),e[0]=t[0]*n,e[1]=t[1]*n),e}function M(e,t){return e[0]*t[0]+e[1]*t[1]}function w(e,t,i){var a=t[0]*i[1]-t[1]*i[0];return e[0]=e[1]=0,e[2]=a,e}function E(e,i,a,n){var t=i[0],r=i[1];return e[0]=t+n*(a[0]-t),e[1]=r+n*(a[1]-r),e}function G(e,t,i){var a=t[0],n=t[1];return e[0]=i[0]*a+i[3]*n+i[6],e[1]=i[1]*a+i[4]*n+i[7],e}function B(e,t,i){let a=t[0],n=t[1];return e[0]=i[0]*a+i[4]*n+i[12],e[1]=i[1]*a+i[5]*n+i[13],e}function D(e,t){return e[0]===t[0]&&e[1]===t[1]}function k(){let e=new pt(3);return e[0]=0,e[1]=0,e[2]=0,e}function R(e){let t=e[0],i=e[1],a=e[2];return o(t*t+i*i+a*a)}function O(e,t,i){let a=new pt(3);return a[0]=e,a[1]=t,a[2]=i,a}function H(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function I(e,t,i,a){return e[0]=t,e[1]=i,e[2]=a,e}function L(e,t,i){return e[0]=t[0]+i[0],e[1]=t[1]+i[1],e[2]=t[2]+i[2],e}function N(e,t,i){return e[0]=t[0]-i[0],e[1]=t[1]-i[1],e[2]=t[2]-i[2],e}function V(e,t,i){return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e}function F(e){let t=e[0],i=e[1],a=e[2];return t*t+i*i+a*a}function X(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}function U(e,t){let i=t[0],a=t[1],n=t[2],r=i*i+a*a+n*n;return 0<r&&(r=1/o(r),e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r),e}function z(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function W(e,t,i){let a=t[0],n=t[1],r=t[2],o=i[0],s=i[1],l=i[2];return e[0]=n*l-r*s,e[1]=r*o-a*l,e[2]=a*s-n*o,e}function j(e,t,i){let a=t[0],n=t[1],r=t[2],o=i[3]*a+i[7]*n+i[11]*r+i[15];return o=o||1,e[0]=(i[0]*a+i[4]*n+i[8]*r+i[12])/o,e[1]=(i[1]*a+i[5]*n+i[9]*r+i[13])/o,e[2]=(i[2]*a+i[6]*n+i[10]*r+i[14])/o,e}function K(e,t){let i=O(e[0],e[1],e[2]),a=O(t[0],t[1],t[2]);U(i,i),U(a,a);let n=z(i,a);return 1<n?0:-1>n?l:Be(n)}function Y(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function Q(){let e=new pt(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e}function Z(e,t,i,a,n){return e[0]=t,e[1]=i,e[2]=a,e[3]=n,e}function q(){let e=new pt(9);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}function J(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e}function $(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function ee(e,t,i,a,n,r,o,s,l,d){return e[0]=t,e[1]=i,e[2]=a,e[3]=n,e[4]=r,e[5]=o,e[6]=s,e[7]=l,e[8]=d,e}function te(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}function ie(e,t){let i=t[0],a=t[1],n=t[2],r=t[3],o=t[4],s=t[5],l=t[6],d=t[7],_=t[8],p=_*o-s*d,c=-_*r+s*l,m=d*r-o*l,u=i*p+a*c+n*m;return u?(u=1/u,e[0]=p*u,e[1]=(-_*a+n*d)*u,e[2]=(s*a-n*o)*u,e[3]=c*u,e[4]=(_*i-n*l)*u,e[5]=(-s*i+n*r)*u,e[6]=m*u,e[7]=(-d*i+a*l)*u,e[8]=(o*i-a*r)*u,e):null}function ae(e,t,i){let a=t[0],n=t[1],r=t[2],o=t[3],s=t[4],l=t[5],d=t[6],_=t[7],p=t[8],c=i[0],m=i[1],u=i[2],T=i[3],g=i[4],f=i[5],b=i[6],h=i[7],S=i[8];return e[0]=c*a+m*o+u*d,e[1]=c*n+m*s+u*_,e[2]=c*r+m*l+u*p,e[3]=T*a+g*o+f*d,e[4]=T*n+g*s+f*_,e[5]=T*r+g*l+f*p,e[6]=b*a+h*o+S*d,e[7]=b*n+h*s+S*_,e[8]=b*r+h*l+S*p,e}function ne(e,t,i){let a=t[0],n=t[1],r=t[2],o=t[3],s=t[4],l=t[5],d=t[6],_=t[7],p=t[8],c=i[0],m=i[1];return e[0]=a,e[1]=n,e[2]=r,e[3]=o,e[4]=s,e[5]=l,e[6]=c*a+m*o+d,e[7]=c*n+m*s+_,e[8]=c*r+m*l+p,e}function re(e,t,i){let a=t[0],o=t[1],l=t[2],d=t[3],_=t[4],p=t[5],m=t[6],u=t[7],T=t[8],g=n(i),s=r(i);return e[0]=s*a+g*d,e[1]=s*o+g*_,e[2]=s*l+g*p,e[3]=s*d-g*a,e[4]=s*_-g*o,e[5]=s*p-g*l,e[6]=m,e[7]=u,e[8]=T,e}function oe(e,t,i){let a=i[0],n=i[1];return e[0]=a*t[0],e[1]=a*t[1],e[2]=a*t[2],e[3]=n*t[3],e[4]=n*t[4],e[5]=n*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function se(e,t){let i=t[0],a=t[1],n=t[2],r=t[3],o=i+i,s=a+a,l=n+n,d=i*o,_=a*o,p=a*s,c=n*o,m=n*s,u=n*l,T=r*o,g=r*s,f=r*l;return e[0]=1-p-u,e[3]=_-f,e[6]=c+g,e[1]=_+f,e[4]=1-d-u,e[7]=m-T,e[2]=c-g,e[5]=m+T,e[8]=1-d-p,e}function le(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function de(e,t,i,a,n,r,o,s,l,d,_,p,c,m,u,T,g){return e[0]=t,e[1]=i,e[2]=a,e[3]=n,e[4]=r,e[5]=o,e[6]=s,e[7]=l,e[8]=d,e[9]=_,e[10]=p,e[11]=c,e[12]=m,e[13]=u,e[14]=T,e[15]=g,e}function _e(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function pe(e,t){let i=t[0],a=t[1],n=t[2],r=t[3],o=t[4],s=t[5],l=t[6],d=t[7],_=t[8],p=t[9],c=t[10],m=t[11],u=t[12],T=t[13],g=t[14],f=t[15],b=i*s-a*o,h=i*l-n*o,S=i*d-r*o,y=a*l-n*s,P=a*d-r*s,v=n*d-r*l,A=_*T-p*u,x=_*g-c*u,C=_*f-m*u,M=p*g-c*T,w=p*f-m*T,E=c*f-m*g,G=b*E-h*w+S*M+y*C-P*x+v*A;return G?(G=1/G,e[0]=(s*E-l*w+d*M)*G,e[1]=(n*w-a*E-r*M)*G,e[2]=(T*v-g*P+f*y)*G,e[3]=(c*P-p*v-m*y)*G,e[4]=(l*C-o*E-d*x)*G,e[5]=(i*E-n*C+r*x)*G,e[6]=(g*S-u*v-f*h)*G,e[7]=(_*v-c*S+m*h)*G,e[8]=(o*w-s*C+d*A)*G,e[9]=(a*C-i*w-r*A)*G,e[10]=(u*P-T*S+f*b)*G,e[11]=(p*S-_*P-m*b)*G,e[12]=(s*x-o*M-l*A)*G,e[13]=(i*M-a*x+n*A)*G,e[14]=(T*h-u*y-g*b)*G,e[15]=(_*y-p*h+c*b)*G,e):null}function ce(e,t,i){let a=t[0],n=t[1],r=t[2],o=t[3],s=t[4],l=t[5],d=t[6],_=t[7],p=t[8],c=t[9],m=t[10],u=t[11],T=t[12],g=t[13],f=t[14],b=t[15],h=i[0],S=i[1],y=i[2],P=i[3];return e[0]=h*a+S*s+y*p+P*T,e[1]=h*n+S*l+y*c+P*g,e[2]=h*r+S*d+y*m+P*f,e[3]=h*o+S*_+y*u+P*b,h=i[4],S=i[5],y=i[6],P=i[7],e[4]=h*a+S*s+y*p+P*T,e[5]=h*n+S*l+y*c+P*g,e[6]=h*r+S*d+y*m+P*f,e[7]=h*o+S*_+y*u+P*b,h=i[8],S=i[9],y=i[10],P=i[11],e[8]=h*a+S*s+y*p+P*T,e[9]=h*n+S*l+y*c+P*g,e[10]=h*r+S*d+y*m+P*f,e[11]=h*o+S*_+y*u+P*b,h=i[12],S=i[13],y=i[14],P=i[15],e[12]=h*a+S*s+y*p+P*T,e[13]=h*n+S*l+y*c+P*g,e[14]=h*r+S*d+y*m+P*f,e[15]=h*o+S*_+y*u+P*b,e}function me(e,t,i){let a=i[0],n=i[1],r=i[2],o,s,l,d,_,p,c,m,u,T,g,f;return t===e?(e[12]=t[0]*a+t[4]*n+t[8]*r+t[12],e[13]=t[1]*a+t[5]*n+t[9]*r+t[13],e[14]=t[2]*a+t[6]*n+t[10]*r+t[14],e[15]=t[3]*a+t[7]*n+t[11]*r+t[15]):(o=t[0],s=t[1],l=t[2],d=t[3],_=t[4],p=t[5],c=t[6],m=t[7],u=t[8],T=t[9],g=t[10],f=t[11],e[0]=o,e[1]=s,e[2]=l,e[3]=d,e[4]=_,e[5]=p,e[6]=c,e[7]=m,e[8]=u,e[9]=T,e[10]=g,e[11]=f,e[12]=o*a+_*n+u*r+t[12],e[13]=s*a+p*n+T*r+t[13],e[14]=l*a+c*n+g*r+t[14],e[15]=d*a+m*n+f*r+t[15]),e}function ue(e,t,i){let a=i[0],n=i[1],r=i[2];return e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a,e[3]=t[3]*a,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*r,e[9]=t[9]*r,e[10]=t[10]*r,e[11]=t[11]*r,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function Te(e,t,i){let a=n(i),o=r(i),s=t[4],l=t[5],d=t[6],_=t[7],p=t[8],c=t[9],m=t[10],u=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=s*o+p*a,e[5]=l*o+c*a,e[6]=d*o+m*a,e[7]=_*o+u*a,e[8]=p*o-s*a,e[9]=c*o-l*a,e[10]=m*o-d*a,e[11]=u*o-_*a,e}function ge(e,t,i){let a=n(i),o=r(i),s=t[0],l=t[1],d=t[2],_=t[3],p=t[8],c=t[9],m=t[10],u=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=s*o-p*a,e[1]=l*o-c*a,e[2]=d*o-m*a,e[3]=_*o-u*a,e[8]=s*a+p*o,e[9]=l*a+c*o,e[10]=d*a+m*o,e[11]=_*a+u*o,e}function fe(e,t,i){let a=n(i),o=r(i),s=t[0],l=t[1],d=t[2],_=t[3],p=t[4],c=t[5],m=t[6],u=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=s*o+p*a,e[1]=l*o+c*a,e[2]=d*o+m*a,e[3]=_*o+u*a,e[4]=p*o-s*a,e[5]=c*o-l*a,e[6]=m*o-d*a,e[7]=u*o-_*a,e}function be(e,t){let i=t[0],a=t[1],n=t[2],r=t[3],o=i+i,s=a+a,l=n+n,d=i*o,_=a*o,p=a*s,c=n*o,m=n*s,u=n*l,T=r*o,g=r*s,f=r*l;return e[0]=1-p-u,e[1]=_+f,e[2]=c-g,e[3]=0,e[4]=_-f,e[5]=1-d-u,e[6]=m+T,e[7]=0,e[8]=c+g,e[9]=m-T,e[10]=1-d-p,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function he(e,t,a,n,r){let o=1/i(t/2),s=1/(n-r);return e[0]=o/a,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=o,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(r+n)*s,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*r*n*s,e[15]=0,e}function Se(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:null}function ye(){let e=new pt(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e}function Pe(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e}function ve(e,t,i){i*=0.5;let a=n(i);return e[0]=a*t[0],e[1]=a*t[1],e[2]=a*t[2],e[3]=r(i),e}function Ae(e,t,i){let a=t[0],n=t[1],r=t[2],o=t[3],s=i[0],l=i[1],d=i[2],_=i[3];return e[0]=a*_+o*s+n*d-r*l,e[1]=n*_+o*l+r*s-a*d,e[2]=r*_+o*d+a*l-n*s,e[3]=o*_-a*s-n*l-r*d,e}function xe(e,t,i){i*=0.5;let a=t[0],o=t[1],s=t[2],l=t[3],d=n(i),_=r(i);return e[0]=a*_+l*d,e[1]=o*_+s*d,e[2]=s*_-o*d,e[3]=l*_-a*d,e}function Ce(e,t,i){i*=0.5;let a=t[0],o=t[1],s=t[2],l=t[3],d=n(i),_=r(i);return e[0]=a*_-s*d,e[1]=o*_+l*d,e[2]=s*_+a*d,e[3]=l*_-o*d,e}function Me(e,t,i){i*=0.5;let a=t[0],o=t[1],s=t[2],l=t[3],d=n(i),_=r(i);return e[0]=a*_+o*d,e[1]=o*_-a*d,e[2]=s*_+l*d,e[3]=l*_-s*d,e}function we(e,i,a,r){let t=i[0],o=i[1],s=i[2],l=i[3],d=a[0],_=a[1],p=a[2],c=a[3],m,u,T,g,f;return u=t*d+o*_+s*p+l*c,0>u&&(u=-u,d=-d,_=-_,p=-p,c=-c),1e-6<1-u?(m=Be(u),T=n(m),g=n((1-r)*m)/T,f=n(r*m)/T):(g=1-r,f=r),e[0]=g*t+f*d,e[1]=g*o+f*_,e[2]=g*s+f*p,e[3]=g*l+f*c,e}function Ee(e,t){let i=t[0],a=t[1],n=t[2],r=t[3],o=i*i+a*a+n*n+r*r,s=o?1/o:0;return e[0]=-i*s,e[1]=-a*s,e[2]=-n*s,e[3]=r*s,e}function Ge(e,t){let i=t[0]+t[4]+t[8],a;if(0<i)a=o(i+1),e[3]=0.5*a,a=0.5/a,e[0]=(t[5]-t[7])*a,e[1]=(t[6]-t[2])*a,e[2]=(t[1]-t[3])*a;else{let n=0;t[4]>t[0]&&(n=1),t[8]>t[3*n+n]&&(n=2);let i=(n+1)%3,r=(n+2)%3;a=o(t[3*n+n]-t[3*i+i]-t[3*r+r]+1),e[n]=0.5*a,a=0.5/a,e[3]=(t[3*i+r]-t[3*r+i])*a,e[i]=(t[3*i+n]+t[3*n+i])*a,e[r]=(t[3*r+n]+t[3*n+r])*a}return e}var Be=Math.acos,De=Math.floor;const ke=new s(window.navigator.userAgent);let Re=!!ke.mobile()||/\bmobile\b/.test(window.location.search);class Oe{static get mobile(){return Re}}let He="";const Ie=new Map,Le=new Map,Ne=new Map([["text",new Set(["txt","html","css","js","svg"])],["json",new Set(["json"])],["binary",new Set(["bin"])]]);class Ve{static get onLoad(){return Promise.all(Ie.values())}static get promises(){return Ie}static get typeMap(){return Ne}static get(e){return Le.get(e)}static get baseURI(){return He}static set baseURI(e){He=e}static load(e){const t=e instanceof Array;t||(e=[e]);let i=[];for(let t of e){if(!t)continue;let e=new Promise(function(e){if(Ie.get(t))return void Ie.get(t).then(e);if(Ve.get(t))return void e(Ve.get(t));let i=(i)=>{Ie.delete(t),Le.set(t,i),e(i)},a;if("string"==typeof t){let e=/[\\/](.*)\.(.*)$/.exec(t)[2];if(/\.(png|jpg|gif)$/.test(t))a=document.createElement("img");else if(/\.(mp4|webm)$/.test(t))a=document.createElement("video");else if(/\.(mp3|ogg)$/.test(t))a=document.createElement("audio");else if(/\.(woff|woff2|ttf)$/.test(t)){let e=new FontFace(/([^\/]*)\.(woff|woff2|ttf)$/.exec(t)[1],`url("${t}")`);e.load().then(i),document.fonts.add(e)}else fetch(`${He}${t}`).then((t)=>{let i;return i=Ve.typeMap.get("json").has(e)?"json":Ve.typeMap.get("binary").has(e)?"arrayBuffer":Ve.typeMap.get("text").has(e)?"text":"blob",t[i]()}).then(i)}if(t instanceof HTMLElement&&(a=t),a){const e=`${He}${a.src||t}`,n=()=>{a.removeEventListener("canplaythrough",n),a.removeEventListener("load",n),i(a)};a.play?fetch(e).then(()=>{if(a.addEventListener("canplaythrough",n),a.play(),!a.autoplay){let e=function(){a.pause(),a.removeEventListener("playing",e)};a.addEventListener("playing",e)}}):a.addEventListener("load",n),a.src=e}});i.push(e),Ie.set(t,e)}return t?Promise.all(i):i[0]}}let Fe=new Set,Xe=new Map,Ue=!1,ze=!1,We=!0;const je=/mobi/.test(window.navigator.userAgent.toLowerCase());if(je){We=!1;let e=()=>{window.removeEventListener("touchend",e);for(let e of Fe)if(e._audio.play(),!e._audio.autoplay){let t=function(){e._audio.pause(),e._audio.removeEventListener("playing",t)};e._audio.addEventListener("playing",t)}We=!0};window.addEventListener("touchend",e)}class Ke{static set muted(e){Ue=e;for(let t of Fe)t.muted=t.muted}static get muted(){return Ue}static set loopMuted(e){ze=e;for(let t of Fe)t.muted=t.muted}static get loopMuted(){return ze}static add(e){let t=new Ke(e);return t}static get(e){return Xe.get(e)}constructor({src:e,name:t=/([^\\\/]*)\..*$/.exec(e)[1],amplification:i=1,volume:a=1,loop:n=!1,autoplay:r=!1}={}){this.name=t,Fe.add(this),this.name&&Xe.set(this.name,this),this._audio=document.createElement("audio"),this._audio.src=e,this.amplification=i,this.volume=a,this.loop=n,this.autoplay=r,this.muted=Ue}get src(){return this._audio.src}set src(e){this._audio.src=e}get muted(){return this._muted}set muted(e){this._muted=e,this._audio.muted=Ue||ze&&this.loop||e}get paused(){return this._audio.paused}get loop(){return this._audio.loop}set loop(e){this.muted=this.muted,this._audio.loop=e}get currentTime(){return this._audio.currentTime}set currentTime(e){this._audio.currentTime=e}get autoplay(){return this._audio.autoplay}set autoplay(e){this._audio.autoplay=e}get duration(){return this._audio.duration}set duration(e){this._audio.duration=e}get volume(){return this._volume}set volume(e){this._volume=e,this._audio.volume=this._volume*this.amplification}play(){We&&this._audio.play()}stop(){this.currentTime=0,this.pause()}pause(){this._audio.pause()}cloneNode(){let e=new Ke(this.src,{name:null,volume:this.volume,amplification:this.amplification});return e.muted=this.muted,e.loop=this.loop,e.currentTime=this.currentTime,e}}Ke.muted=/\bmuted\b/.test(window.location.search),Ke.loopMuted=/\bloopmuted\b/.test(window.location.search);class Ye extends Set{constructor(){super(),this._onceCallbacks=new Set}add(e,{once:t=!1}={}){t&&this._onceCallbacks.add(e),super.add(e)}dispatch(e){for(let t of this)t(e),this._onceCallbacks.has(t)&&(this._onceCallbacks.delete(t),this.delete(t))}}var Qe=new class extends Ye{constructor(){super(),this._updateBinded=this.update.bind(this),this._previousTimestamp=0,this.deltaTime=0,this.timeScale=1,this.update()}update(e){requestAnimationFrame(this._updateBinded);let t=window.performance?window.performance.now():Date.now();this.deltaTime=.001*(t-this._previousTimestamp),this.timeScale=this.deltaTime/.0166666667,this._previousTimestamp=t,this.dispatch(e)}};class Ze extends HTMLElement{constructor({autoplay:e=!0,background:t=!1}={}){super(),this._autoplay=e||this.hasAttribute("autoplay"),this._background=t||this.hasAttribute("background"),this.paused=!0,this._pausedByBlur=!0,this._updateBinded=this.update.bind(this)}connectedCallback(){this._background||(window.addEventListener("blur",this._onBlur=()=>{this._pausedByBlur=!this.paused,this.pause()}),window.addEventListener("focus",this._onFocus=()=>{this._pausedByBlur&&this.play()})),document.hasFocus()&&this._autoplay?this.play():this._pausedByBlur=this._autoplay}disconnectedCallback(){this.pause(),window.removeEventListener("blur",this._onBlur),window.removeEventListener("focus",this._onFocus)}play(){this.paused=!1,this._pausedByBlur=!1,Qe.add(this._updateBinded),this.dispatchEvent(new Event("playing"))}pause(){this.paused=!0,Qe.delete(this._updateBinded),this.dispatchEvent(new Event("pause"))}update(){}}window.customElements.define("dlib-loop",Ze);const qe=new Map;class Je extends window.WebSocket{constructor(){super(...arguments),qe.set(this,[]);const e=()=>{this.removeEventListener("open",e);for(let e of qe.get(this))this.send(e);qe.delete(this)};this.addEventListener("open",e)}send(e){this.readyState===Je.CONNECTING?qe.get(this).push(e):super.send(e)}}let $e=new Set,et=new Ye,tt=new Ye;class it{static get LEFT(){return 37}static get RIGHT(){return 39}static get UP(){return 38}static get DOWN(){return 40}static get SPACE(){return 32}static get SHIFT(){return 16}static hasKeyDown(e){return $e.has(e)}static addEventListener(e,t){"keydown"===e?et.add(t):"keyup"===e&&tt.add(t)}static removeEventListener(e,t){"keydown"===e?et.delete(t):"keyup"===e&&tt.delete(t)}}window.addEventListener("keydown",(t)=>{it.hasKeyDown(t.keyCode)||et.dispatch(t),$e.add(t.keyCode)}),window.addEventListener("keyup",(t)=>{$e.delete(t.keyCode),tt.dispatch(t)});let at=document.createElement("style");document.head.appendChild(at),at.sheet.insertRule(`
  dlib-guiinput {
    display: flex;
    position: relative;
    font-family: monospace;
    font-size: 12px;
    align-items: center;
    height: 20px;
  }
`,0),at.sheet.insertRule(`
  dlib-guiinput * {
    outline: none;
  }
`,0),at.sheet.insertRule(`
  dlib-guiinput label, dlib-guiinput input, dlib-guiinput select, dlib-gui textarea {
    display: flex;
    font-family: inherit;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 5px;
  }
`,0),at.sheet.insertRule(`
  dlib-guiinput label {
    flex: 1;
    min-width: 25%;
  }
`,0),at.sheet.insertRule(`
  dlib-guiinput label span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,0),at.sheet.insertRule(`
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
`,0),at.sheet.insertRule(`
  dlib-guiinput input, dlib-guiinput select, dlib-gui textarea {
    flex: 5;
  }
`,0),at.sheet.insertRule(`
  dlib-guiinput input.range {
    flex: 2;
  }
`,0),at.sheet.insertRule(`
  dlib-guiinput input[type="range"] {
    flex: 3.5;
  }
`,0),at.sheet.insertRule(`
  dlib-guiinput input.color {
    flex: 3.5;
  }
`,0);const nt=(e,t)=>_(e*(1/t))/(1/t);class rt extends HTMLElement{constructor(){super(),this._object=null,this._key="",this._type="",this._label="",this._inputs=[],this._options=[],this._step=0.01,this._min=0,this._max=Infinity,this._initialValue=void 0,this._onChangeBinded=this._onChange.bind(this),this._onClearBinded=this._onClear.bind(this)}set value(e){this.object[this.key]=e,this.update()}get value(){return this.object[this.key]}set object(e){this._object=e,this._updateHTML()}get object(){return this._object}set key(e){this._key=e,this._updateHTML()}get key(){return this._key}set type(e){this._type=e,this._updateHTML()}get type(){return this._type}set label(e){this._label=e,this._updateHTML()}get label(){return this._label}set step(e){this._step=e;for(let t of this._inputs)t.step=this._step;this.min=this.min,this.max=this.max}get step(){return this._step}set min(e){this._min=nt(e,this.step);for(let t of this._inputs)t.min=this._min}get min(){return this._min}set max(e){this._max=nt(e,this.step);for(let t of this._inputs)t.max=this._max}get max(){return this._max}set options(e){if(this._options=e,this._inputs[0]&&"SELECT"===this._inputs[0].tagName){this._inputs[0].options.length=0;for(let e of this._options){let t=document.createElement("option");t.value=e,t.innerText=e,t.selected=e===this.value,this._inputs[0].appendChild(t)}}}get options(){return this._options}update(){if("button"===this.type)return;let e=!1;for(let i of this._inputs){let a="checkbox"===i.type?"checked":"value",n=this.value;n="range"===i.type?p(t(n,this.min),this.max):n,n="checkbox"===i.type?n:n.toString(),n!==i[a]&&(i[a]=n,e=!0)}e&&this.dispatchEvent(new Event("change"))}_onChange(t){if(t.target instanceof HTMLInputElement&&"checkbox"===t.target.type)this.value=t.target.checked;else if("range"===t.target.type||"number"===t.target.type){if(t.target.valueAsNumber===void 0)return;this.value=t.target.valueAsNumber}else"button"===t.target.type?this.value():"color"===t.target.type?"change"===t.type&&(this.value=t.target.value):this.value=t.target.value}_onClear(){this.value=this._initialValue}_updateHTML(){if(this.object&&this.key&&this.type){if(void 0===this._initialValue&&(this._initialValue=this.value),this.removeEventListener("input",this._onChangeBinded),this.removeEventListener("change",this._onChangeBinded),this.removeEventListener("click",this._onChangeBinded),this.querySelector(".clear")&&this.querySelector(".clear").removeEventListener("click",this._onClearBinded),this.innerHTML=`
      <label title="${this.label}"><span>${this.label}</span></label>
      ${"select"===this.type?"<select></select>":"text"===this.type?`<textarea rows="1"></textarea>`:`<input type="${this.type}"/>`}
      ${"range"===this.type?"<input class=\"range\" type=\"number\"/>":""}
      ${"color"===this.type?"<input class=\"color\" type=\"text\"/>":""}
      <button class="clear">✕</button>
    `,this._inputs=[...this.querySelectorAll("input, select, textarea")],"range"===this.type){let t=e(10,a(parseInt(this.value)).toString().length);this.max=this.max===Infinity?0>this.value?0:1>a(this.value)?1:t:this.max,this.min=this.min||(0<=this.value?0:1>a(this.value)?-1:-t)}else"button"===this.type?this._inputs[0].value=this.label:"select"===this.type&&(this.options=this.options);this.step=this.step,this.querySelector(".clear").addEventListener("click",this._onClearBinded),"button"===this.type?this.addEventListener("click",this._onChangeBinded):(this.addEventListener("input",this._onChangeBinded),this.addEventListener("change",this._onChangeBinded)),this.update()}}}window.customElements.define("dlib-guiinput",rt);let ot=document.createElement("style"),st;document.head.appendChild(ot),ot.sheet.insertRule(`
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
`,0),ot.sheet.insertRule(`
  dlib-gui dlib-guiinput {
    margin: 5px 0;
  }
`,0),ot.sheet.insertRule(`
  dlib-gui details details {
    margin: 10px;
  }
`,0),ot.sheet.insertRule(`
  dlib-gui details summary {
    cursor: pointer;
  }
`,0),ot.sheet.insertRule(`
  dlib-gui details summary:focus {
    outline: none;
  }
`,0);const lt=/([#&]gui=)((%7B|{).*(%7D|}))([&?]*)/;let dt={};(function(){let e=lt.exec(window.location.hash);if(e){let t=e[2];t=t.replace(/”|%E2%80%9D/g,"%22"),window.location.hash=window.location.hash.replace(lt,`$1${t}$5`),dt=JSON.parse(decodeURI(t)),console.log("GUI data:",dt)}})();class _t extends HTMLElement{static _addStatic(){st||(st=document.createElement("dlib-gui"),document.body.appendChild(st))}static add(...e){return _t._addStatic(),st.add(...e)}static get element(){return st}static get data(){return dt}static set visible(e){_t._addStatic(),st.visible=e}static get visible(){return st.visible}static set open(e){_t._addStatic(),st.open=e}static get groups(){return st.groups}static get open(){return st.open}static get update(){return st.update}static set serverUrl(e){_t._addStatic(),st.serverUrl=e}constructor({serverUrl:e}={}){super(),this.serverUrl=e,this.groups=new Map,this._inputs=new Map,this._uids=new Set,this._container=document.createElement("details"),this._container.innerHTML="<summary>GUI</summary>",this.open=!0}set serverUrl(e){this._serverUrl=e,this._webSocket&&(this._webSocket.removeEventListener("message",this._onWebSocketMessage),this._webSocket.close(),this._webSocket=null);this._serverUrl&&(this._webSocket=new Je(this._serverUrl),this._onWebSocketMessage=(t)=>{let e=JSON.parse(t.data),i=this._inputs.get(e.uid);i._client&&("button"===i.type?i.value():i.value=e.value)},this._webSocket.addEventListener("message",this._onWebSocketMessage))}get serverUrl(){return this._serverUrl}set visible(e){this.style.display=e?"":"none"}get visible(){return"visible"===this.style.visibility}update(){for(let e of this._inputs.values())e.update()}set open(e){this._container.open=e}get open(){return this._container.open}add(e,t,{type:i,label:s=t,id:l=s,group:d="",reload:_=!1,remote:p=!1,client:c=p,onChange:m=()=>{},options:a,max:n,min:r,step:o}={}){const f="color"===i?T(e[t]):e[t];if(null===f||void 0===f)return void console.error(`GUI: ${l} must be defined.`);let b=g(l),h=g(d),S=h?`${h}/${b}`:b;if(this._uids.has(S))return void console.error(`GUI: An input with id ${l} already exist in the group ${d}`);if(this._uids.add(S),p&&!this.serverUrl&&(this._serverUrl=`wss://${location.hostname}:80`),i=i||(a?"select":""),!i)switch(typeof f){case"boolean":i="checkbox";break;case"string":i="text";break;case"function":i="button";break;default:i=typeof f;}this._container.parentNode||this.appendChild(this._container);let y=this._container;d&&(y=this.groups.get(d),!y&&(y=document.createElement("details"),y.open=!0,y.innerHTML=`<summary>${d}</summary>`,this.groups.set(d,y),this._container.appendChild(y)));let P=document.createElement("dlib-guiinput");P.object="color"===i?{value:"#000000"}:e,P.key="color"===i?"value":t,P.label=s,P.value=f,P._client=c,r&&(P.min=r),n&&(P.max=n),o&&(P.step=o),a&&(P.options=a),P.type=i,y.appendChild(P);const v=h&&dt[h]?dt[h][b]:dt[b];void 0!==v&&(P.value=v,"color"===i&&(e[t]=u(e[t],v)));const A=(e)=>{let t=h?dt[h]:dt;if(t||(t=dt[h]={}),P.value===f?(delete t[b],h&&!Object.keys(t).length&&delete dt[h]):t[b]=P.value,lt.test(window.location.hash))window.location.hash=window.location.hash.replace(lt,Object.keys(dt).length?`$1${encodeURI(JSON.stringify(dt))}$5`:"");else{let e=window.location.hash?"&":"#";window.location.hash+=`${e}gui=${encodeURI(JSON.stringify(dt))}`}p&&this._webSocket&&this._webSocket.send(JSON.stringify({uid:S,value:e})),_&&(it.hasKeyDown(it.SHIFT)?it.addEventListener("keyup",function e(){it.removeEventListener("keyup",e),window.location.reload()}):window.location.reload()),m(e)};if("button"===i)P.addEventListener("click",A);else{let a=-1;const n=()=>{cancelAnimationFrame(a),a=requestAnimationFrame(()=>{"color"===i?A(u(e[t],P.value)):A(P.value)})};"text"!==i&&"number"!==i&&P.addEventListener("input",n),P.addEventListener("change",n)}return m(e[t]),this._inputs.set(S,P),P}}window.customElements.define("dlib-gui",_t);let pt="undefined"==typeof Float32Array?Array:Float32Array;const ct=Math.random,mt=function(){let e=f();return function(t,a,n,r,o,s){let d,i;for(a||(a=2),n||(n=0),i=r?p(r*a+n,t.length):t.length,d=n;d<i;d+=a)e[0]=t[d],e[1]=t[d+1],o(e,e,s),t[d]=e[0],t[d+1]=e[1];return t}}();class ut extends Float32Array{constructor(e=0,t=0){return super(2),this.set(e,t),this}get x(){return this[0]}set x(e){this[0]=e}get y(){return this[1]}set y(e){this[1]=e}set(e,t){return h(this,e,t),this}copy(e){return b(this,e),this}add(e){return S(this,this,e),this}get size(){return v(this)}get squaredSize(){return A(this)}subtract(e){return y(this,this,e),this}negate(e=this){return x(this,e),this}cross(e,t){return w(this,e,t),this}scale(e){return P(this,this,e),this}normalize(){C(this,this)}dot(e){return M(this,e)}equals(e){return D(this,e)}applyMatrix3(e){return G(this,this,e),this}applyMatrix4(e){return B(this,this,e),this}lerp(e,t){E(this,this,e,t)}clone(){return new ut(this.x,this.y)}}let Tt=new Map;class gt extends ut{static get TOUCH_TYPE(){return"touchtype"}static get MOUSE_TYPE(){return"mousetype"}static get(e=window){let t=Tt.get(e);return t||(t=new gt(e)),t}get downed(){return this._downed}constructor(e=document.body){super(),this.domElement=e,this.type=gt.TOUCH_TYPE,this.velocity=new ut,this.dragOffset=new ut,this.centered=new ut,this.centeredFlippedY=new ut,this.normalized=new ut,this.normalizedFlippedY=new ut,this.normalizedCentered=new ut,this.normalizedCenteredFlippedY=new ut,this._downed=!1,Tt.set(this.domElement,this),this.onDown=new Ye,this.onMove=new Ye,this.onUp=new Ye,this.onClick=new Ye,this.onTypeChange=new Ye,this._preventMouseTypeChange=!1,this._onPointerMoveBinded=this._onPointerMove.bind(this),this._onPointerDownBinded=this._onPointerDown.bind(this),this._onPointerUpBinded=this._onPointerUp.bind(this),this._updateBinded=this._update.bind(this),this._resizeBinded=this.resize.bind(this),this.resize(),this._position=new ut(this._domElementBoundingRect.left+.5*this._domElementBoundingRect.width,this._domElementBoundingRect.top+.5*this._domElementBoundingRect.height),this.enable()}resize(){this._domElementBoundingRect=this.domElement===window?{top:0,left:0,width:window.innerWidth,height:window.innerHeight}:this.domElement.getBoundingClientRect()}_onPointerDown(t){"touchstart"===t.type&&(this._preventMouseTypeChange=!0,this._changeType(gt.TOUCH_TYPE)),this._downed=!0,this.dragOffset.set(0,0),this.copy(this._position),this._onPointerEvent(t),this._updatePositions(),this.onDown.dispatch(t)}_onPointerMove(t){if("mousemove"===t.type){if(this._preventMouseTypeChange)return;this._changeType(gt.MOUSE_TYPE)}this._onPointerEvent(t),this.onMove.dispatch(t)}_onPointerUp(t){this._downed=!1,this._onPointerEvent(t),this._updatePositions(),this.onUp.dispatch(t),4>this.dragOffset.length&&this.onClick.dispatch(t),clearTimeout(this._timeout),this._timeout=setTimeout(()=>{this._preventMouseTypeChange=!1},2e3)}_onPointerEvent(t){!!window.TouchEvent&&t instanceof window.TouchEvent&&("touchend"===t.type?t=t.changedTouches[0]:t=t.touches[0]),this._position.x=t.clientX-this._domElementBoundingRect.left,this._position.y=t.clientY-this._domElementBoundingRect.top}_changeType(e){this.type===e||(this.type=e,this.disable(),this.enable(),this.onTypeChange.dispatch(this.type))}_update(){(this.x||this.y)&&(this.velocity.x=this._position.x-this.x,this.velocity.y=this._position.y-this.y,this.downed&&this.dragOffset.add(this.velocity)),this._updatePositions()}_updatePositions(){this.x=this._position.x,this.y=this._position.y,this.centered.x=this.centeredFlippedY.x=this.x-.5*this._domElementBoundingRect.width,this.centered.y=this.centeredFlippedY.y=this.y-.5*this._domElementBoundingRect.height,this.centeredFlippedY.y*=-1,this.normalized.x=this.normalizedFlippedY.x=this.x/this._domElementBoundingRect.width,this.normalized.y=this.normalizedFlippedY.y=this.y/this._domElementBoundingRect.height,this.normalizedFlippedY.y=1-this.normalizedFlippedY.y,this.normalizedCentered.x=this.normalizedCenteredFlippedY.x=2*this.normalized.x-1,this.normalizedCentered.y=this.normalizedCenteredFlippedY.y=2*this.normalized.y-1,this.normalizedCenteredFlippedY.y*=-1}enable(){this.disable(),this.resize(),this.type===gt.TOUCH_TYPE?(this.domElement.addEventListener("touchmove",this._onPointerMoveBinded),window.addEventListener("touchend",this._onPointerUpBinded)):(this.domElement.addEventListener("mousedown",this._onPointerDownBinded),window.addEventListener("mouseup",this._onPointerUpBinded)),this.domElement.addEventListener("touchstart",this._onPointerDownBinded),this.domElement.addEventListener("mousemove",this._onPointerMoveBinded),window.addEventListener("resize",this._resizeBinded),Qe.add(this._updateBinded=this._updateBinded||this._update.bind(this))}disable(){Qe.delete(this._updateBinded),this.domElement.removeEventListener("touchstart",this._onPointerDownBinded),this.domElement.removeEventListener("mousedown",this._onPointerDownBinded),this.domElement.removeEventListener("touchmove",this._onPointerMoveBinded),this.domElement.removeEventListener("mousemove",this._onPointerMoveBinded),window.removeEventListener("touchend",this._onPointerUpBinded),window.removeEventListener("mouseup",this._onPointerUpBinded),window.removeEventListener("resize",this._resizeBinded)}}const ft=_t.add({value:!1},"value",{label:"Skip Intro",reload:!0}).value;Ve.load("src/intro/template.html").then((e)=>{let t=document.createElement("template");t.innerHTML=e,window.customElements.define("christmasxp-yolohero-intro",class extends Ze{connectedCallback(){let e=document.importNode(t.content,!0);this.appendChild(e),this.loading=!0,this._delay=0,this.querySelector("button").addEventListener("click",this.close.bind(this)),this._pointer=gt.get(this),this._logo=document.querySelector(".logo"),ft&&requestAnimationFrame(()=>{this.close()})}close(){this.classList.add("hide"),this.dispatchEvent(new Event("close")),this.pause()}set loading(e){const t=this.querySelector("button");t.disabled=e,t.textContent=e?"loading...":"Play! \u2603\uFE0F"}update(){this._delay+=.01,(this._pointer.velocity.x||this._pointer.velocity.y)&&.01<this._delay&&(this._delay=0,this._logo.style.backgroundImage=`url(src/intro/logo/${De(3*Math.random())+1}.svg)`)}})}),Ve.load("src/outro/template.html").then((e)=>{let t=document.createElement("template");t.innerHTML=e,window.customElements.define("christmasxp-yolohero-outro",class extends HTMLElement{connectedCallback(){this.visible=!1;let e=document.importNode(t.content,!0);this.appendChild(e)}set score(e){this._score=e}set visible(e){if(this.classList.toggle("hide",!e),e&&void 0!==this._score){this.querySelector(".content").innerHTML+=`
        <iframe id="soundcloud-player" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/129924353&amp;color=%23ffcf24&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
        `;const e=this.querySelector(".score");this.querySelector("textarea").value=`I’ve done a score of ${this._score} at Yolo Hero! 🚀 🎹 ✨ 🤘 ☃️
Can you do better???
Merry Christmas from Christmas Experiments!!!
${window.location}

by @damienmortini & @lonni_laura
for @christmasxp`;const t={value:0};TweenLite.to(t,4,{value:this._score,ease:Linear.easeInOut,onUpdate:()=>{e.textContent=`${De(t.value)}`}})}}})});class bt{constructor({gl:e,target:t=e.FRAMEBUFFER}={}){this.gl=e,this.target=t,this.colorTextures=[],this.depthTexture=null,this.stencilTexture=null,this._frameBuffer=this.gl.createFramebuffer()}attach({texture:e,attachment:t=this.gl.COLOR_ATTACHMENT0,target:i=this.target,textarget:a=this.gl.TEXTURE_2D}){this.bind({target:i}),t===this.gl.DEPTH_ATTACHMENT?this.depthTexture=e:t===this.gl.STENCIL_ATTACHMENT?this.stencilTexture=e:this.colorTextures[t-this.gl.COLOR_ATTACHMENT0]=e,this.gl.framebufferTexture2D(i,t,a,e._texture||e,0),this.unbind({target:i})}bind({target:e=this.target}={}){this.gl.bindFramebuffer(e,this._frameBuffer)}unbind({target:e=this.target}={}){this.gl.bindFramebuffer(e,null)}}class ht{constructor({gl:e,data:t=null,width:i=void 0,height:a=void 0,target:n=t&&t.length?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,level:r=0,internalformat:o=e.RGBA,format:s=e.RGBA,type:l=e.UNSIGNED_BYTE,minFilter:d=e.NEAREST_MIPMAP_LINEAR,magFilter:_=e.LINEAR,wrapS:p=e.REPEAT,wrapT:c=e.REPEAT}={}){this.gl=e,this._texture=this.gl.createTexture(),this._width=i,this._height=a,this._dataWidth=void 0,this._dataHeight=void 0,this._target=n,this.level=r,this.internalformat=o,this.format=s,this.type=l,this.minFilter=d,this.magFilter=_,this.wrapS=p,this.wrapT=c,(t||this._width&&this._height)&&(this.data=t)}generateMipmap(){this.bind(),this.gl.generateMipmap(this._target),this.unbind()}set data(e){this._data=e;const t=this._data&&this._data.length?this._data:[this._data];t[0]&&(this._dataWidth=t[0].width||t[0].videoWidth,this._dataHeight=t[0].height||t[0].videoHeight);const i=this._target===this.gl.TEXTURE_CUBE_MAP?6:1,a=this._target===this.gl.TEXTURE_CUBE_MAP?this.gl.TEXTURE_CUBE_MAP_POSITIVE_X:this._target;this.bind();for(let n=0;n<t.length;n++)this.gl instanceof WebGLRenderingContext&&this._dataWidth?this.gl.texImage2D(a+n,this.level,this.internalformat,this.format,this.type,t[n]):this.gl.texImage2D(a+n,this.level,this.internalformat,this.width,this.height,0,this.format,this.type,t[n]);this.unbind()}get data(){return this._data}get width(){return this._width||this._dataWidth}get height(){return this._height||this._dataHeight}set minFilter(e){this._minFilter===e||(this._minFilter=e,this.bind(),this.gl.texParameteri(this._target,this.gl.TEXTURE_MIN_FILTER,this._minFilter),this.unbind())}get minFilter(){return this._minFilter}set magFilter(e){this._magFilter===e||(this._magFilter=e,this.bind(),this.gl.texParameteri(this._target,this.gl.TEXTURE_MAG_FILTER,this._magFilter),this.unbind())}get magFilter(){return this._magFilter}set wrapS(e){this._wrapS===e||(this._wrapS=e,this.bind(),this.gl.texParameteri(this._target,this.gl.TEXTURE_WRAP_S,this._wrapS),this.unbind())}get wrapS(){return this._wrapS}set wrapT(e){this._wrapT===e||(this._wrapT=e,this.bind(),this.gl.texParameteri(this._target,this.gl.TEXTURE_WRAP_T,this._wrapT),this.unbind())}get wrapT(){return this._wrapT}bind({unit:e=0}={}){this.gl.activeTexture(this.gl[`TEXTURE${e}`]),this.gl.bindTexture(this._target,this._texture)}unbind(){this.gl.bindTexture(this._target,null)}}(function(){let e=k();return function(t,a,n,r,o,s){let d,i;for(a||(a=3),n||(n=0),i=r?p(r*a+n,t.length):t.length,d=n;d<i;d+=a)e[0]=t[d],e[1]=t[d+1],e[2]=t[d+2],o(e,e,s),t[d]=e[0],t[d+1]=e[1],t[d+2]=e[2];return t}})();class St extends Float32Array{constructor(e=[0,0,0]){return super(e),this}get x(){return this[0]}set x(e){this[0]=e}get y(){return this[1]}set y(e){this[1]=e}get z(){return this[2]}set z(e){this[2]=e}set(e,t,i){return I(this,e,t,i),this}copy(e){return H(this,e),this}add(e){return L(this,this,e),this}get size(){return R(this)}get squaredSize(){return F(this)}subtract(e){return N(this,this,e),this}negate(e=this){return X(this,e),this}cross(e,t){return W(this,e,t),this}scale(e){return V(this,this,e),this}normalize(){return U(this,this),this}dot(e){return z(this,e)}equals(e){return Y(this,e)}applyMatrix4(e){return j(this,this,e),this}angle(e){return K(this,e)}clone(){return new St(this.x,this.y,this.z)}}(function(){let e=Q();return function(t,a,n,r,o,s){let d,i;for(a||(a=4),n||(n=0),i=r?p(r*a+n,t.length):t.length,d=n;d<i;d+=a)e[0]=t[d],e[1]=t[d+1],e[2]=t[d+2],e[3]=t[d+3],o(e,e,s),t[d]=e[0],t[d+1]=e[1],t[d+2]=e[2],t[d+3]=e[3];return t}})();class yt extends Float32Array{constructor(e=[0,0,0,0]){return super(e),this}get x(){return this[0]}set x(e){this[0]=e}get y(){return this[1]}set y(e){this[1]=e}get z(){return this[2]}set z(e){this[2]=e}get w(){return this[3]}set w(e){this[3]=e}set(e,t,i,a){return Z(this,e,t,i,a),this}}class Pt extends Float32Array{constructor(e=[1,0,0,0,1,0,0,0,1]){return super(e),this}set(e,t,i,a,n,r,o,s,l){return ee(this,e,t,i,a,n,r,o,s,l),this}translate(e,t=this){return ne(this,t,e),this}rotate(e,t=this){return re(this,t,e),this}scale(e,t=this){return oe(this,t,e),this}multiply(e,t){return t?ae(this,e,t):ae(this,this,e),this}identity(){return te(this),this}copy(e){return $(this,e),this}fromMatrix4(e){return J(this,e),this}fromQuaternion(e){return se(this,e),this}fromBasis(e,t,i){return this.set(e[0],e[1],e[2],t[0],t[1],t[2],i[0],i[1],i[2]),this}invert(e=this){return ie(this,e),this}}class vt extends Float32Array{constructor(e=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]){return super(e),this}set x(e){this[12]=e}get x(){return this[12]}set y(e){this[13]=e}get y(){return this[13]}set z(e){this[14]=e}get z(){return this[14]}set w(e){this[15]=e}get w(){return this[15]}copy(e){return le(this,e),this}set(e,t,i,a,n,r,o,s,l,d,_,p,c,m,u,T){return e.length?this.copy(e):(de(this,e,t,i,a,n,r,o,s,l,d,_,p,c,m,u,T),this)}translate(e,t=this){return me(this,t,e),this}rotateX(e,t=this){return Te(this,t,e),this}rotateY(e,t=this){return ge(this,t,e),this}rotateZ(e,t=this){return fe(this,t,e),this}scale(e,t=this){return ue(this,t,"number"==typeof e?[e,e,e]:e),this}multiply(e,t){return t?ce(this,e,t):ce(this,this,e),this}identity(){return _e(this),this}copy(e){return le(this,e),this}fromPerspective({fov:e,aspectRatio:t,near:i,far:a}={}){return he(this,e,t,i,a),this}fromQuaternion(e){return be(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}invert(e=this){return pe(this,e),this}}class At{static add(e="void main() {}",t){for(let[i,a]of t)e="start"===i?e.replace(/(#version .*?)\n([\s\S]*)/,`$1\n${a}\n$2`):"end"===i?e.replace(/(}\s*$)/,`\n${a}\n$1`):"main"===i?e.replace(/(\bvoid\b +\bmain\b[\s\S]*?{\s*)/,`$1\n${a}\n`):e.replace(i,a);return e}constructor({vertexShader:e=`#version 300 es
    void main() {
      gl_Position = vec4(0., 0., 0., 1.);
    }
  `,fragmentShader:t=`#version 300 es
    precision highp float;

    out vec4 fragColor;

    void main() {
      fragColor = vec4(1.);
    }
  `,uniforms:i=[],vertexShaderChunks:a=[],fragmentShaderChunks:n=[],shaders:r=[]}={}){this.uniforms=new Map,this._glslUniformTypes=new Map,this.vertexShader=e,this.fragmentShader=t,this._vertexShaderChunks=[],this._fragmentShaderChunks=[],this.add({vertexShaderChunks:a,fragmentShaderChunks:n,uniforms:i});for(let o of r)this.add(o)}add({vertexShaderChunks:e=[],fragmentShaderChunks:t=[],uniforms:i=[]}={}){this.vertexShader=At.add(this.vertexShader,e),this._vertexShaderChunks.push(...e),this.fragmentShader=At.add(this.fragmentShader,t),this._fragmentShaderChunks.push(...t);for(let[a,n]of i)this.uniforms.set(a,n)}set vertexShader(e){this._vertexShader=e,this._parseUniforms(this._vertexShader)}get vertexShader(){return this._vertexShader}set fragmentShader(e){this._fragmentShader=e,this._parseUniforms(this._fragmentShader)}get fragmentShader(){return this._fragmentShader}get vertexShaderChunks(){return this._vertexShaderChunks}get fragmentShaderChunks(){return this._fragmentShaderChunks}_parseUniforms(e,t){t=Object.assign({Vector2:class extends Float32Array{constructor(){super(2)}},Vector3:class extends Float32Array{constructor(){super(3)}},Vector4:class extends Float32Array{constructor(){super(4)}},Matrix3:class extends Float32Array{constructor(){super([1,0,0,0,1,0,0,0,1])}},Matrix4:class extends Float32Array{constructor(){super([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}},Texture:class{},TextureCube:class{}},t);for(let i=/^\s*uniform (.[^ ]+) (.[^ ;\[\]]+)\[? *(\d+)? *\]?/gm,a;a=i.exec(e);){let[,e,i,n]=a,r=parseInt(n);if(this.uniforms.has(i))continue;let o,s;if(this._glslUniformTypes.set(i,e),/float|double/.test(e))o=isNaN(r)?0:Array(r).fill(0);else if(/int|uint/.test(e))o=isNaN(r)?0:Array(r).fill(0);else if(/sampler2D/.test(e))o=isNaN(r)?new t.Texture:Array(r).fill().map(()=>new t.Texture);else if(/samplerCube/.test(e))o=isNaN(r)?new t.TextureCube:Array(r).fill().map(()=>new t.TextureCube);else if(s=/(.?)vec(\d)/.exec(e)){let e=s[2];o=isNaN(r)?new t[`Vector${e}`]:Array(r).fill().map(()=>new t[`Vector${e}`])}else if(s=/mat(\d)/.exec(e)){let e=s[1];o=isNaN(r)?new t[`Matrix${e}`]:Array(r).fill().map(()=>new t[`Matrix${e}`])}else o=void 0;this.uniforms.set(i,o)}}}class xt extends At{constructor({gl:e,vertexShader:t=void 0,fragmentShader:i=void 0,uniforms:a=void 0,attributes:n=void 0,vertexShaderChunks:r=void 0,fragmentShaderChunks:o=void 0,shaders:s=void 0}={}){super({vertexShader:t,fragmentShader:i,uniforms:a,attributes:n,vertexShaderChunks:r,fragmentShaderChunks:o,shaders:s}),this.gl=e,this._program=e.createProgram(),this._attachedShaders=new Map;const l=this;this._vertexAttribDivisor=function(){};const d=this.gl.getExtension("ANGLE_instanced_arrays");d?this._vertexAttribDivisor=d.vertexAttribDivisorANGLE.bind(d):this.gl.vertexAttribDivisor&&(this._vertexAttribDivisor=this.gl.vertexAttribDivisor.bind(this.gl)),this._attributesLocations=new Map;class _ extends Map{set(t,{buffer:i,location:n=l._attributesLocations.get(t),size:a,type:r=e.FLOAT,normalized:o=!1,stride:s=0,offset:d=0,divisor:_=0}={}){if(t instanceof Map){for(let[e,i]of t)this.set(e,i);return}i.bind(),n||(n=e.getAttribLocation(l._program,t),-1===n&&console.warn(`Attribute "${t}" is missing or never used`),l._attributesLocations.set(t,n)),e.enableVertexAttribArray(n),e.vertexAttribPointer(n,a,r,o,s,d),i.unbind(),l._vertexAttribDivisor(n,_),super.set(t,{buffer:i,size:a,type:r,normalized:o,stride:s,offset:d})}}this._uniformLocations=new Map,this._uniformTypes=new Map;class p extends Map{set(t,...i){let a=i[0];if(void 0===a)return;let n=l._uniformLocations.get(t);if(void 0===n&&(n=e.getUniformLocation(l._program,t),l._uniformLocations.set(t,n)),void 0===a.length){if(a instanceof Object){for(let e in a)l.uniforms.set(`${t}.${e}`,a[e]);return}1<i.length?(a=l.uniforms.get(t),a.set(...i)):a=i}else if(a[0]instanceof Object){for(let e=0;e<a.length;e++)if(a[0].length)l.uniforms.set(`${t}[${e}]`,a[e]);else for(let i in a[e])l.uniforms.set(`${t}[${e}].${i}`,a[e][i]);return}if(null===n)return;let r=l._uniformTypes.get(t);r||(r=/int|ivec|sampler2D|samplerCube/.test(l._glslUniformTypes.get(t))?"iv":"fv",l._uniformTypes.set(t,r)),4>=a.length?e[`uniform${a.length||1}${r}`](n,a):9===a.length?e.uniformMatrix3fv(n,!1,a):16===a.length&&e.uniformMatrix4fv(n,!1,a),super.set(t,a)}}this.vertexShader=this.vertexShader,this.fragmentShader=this.fragmentShader,this.use(),this.attributes=new _,this.uniforms=new p([...this.uniforms])}set vertexShader(e){super.vertexShader=e,this.gl&&this._updateShader(this.gl.VERTEX_SHADER,this.vertexShader)}get vertexShader(){return super.vertexShader}set fragmentShader(e){super.fragmentShader=e,this.gl&&this._updateShader(this.gl.FRAGMENT_SHADER,this.fragmentShader)}get fragmentShader(){return super.fragmentShader}use(){this.gl.useProgram(this._program)}_updateShader(e,t){if(t){if(this.gl instanceof WebGLRenderingContext)if(t=t.replace(/#version.*?\n/g,""),t=t.replace(/\btexture\b/g,"texture2D"),e===this.gl.VERTEX_SHADER)t=t.replace(/\bin\b/g,"attribute"),t=t.replace(/\bout\b/g,"varying");else{t=t.replace(/\bin\b/g,"varying");const e=/out vec4 (.*?);/.exec(t);if(e){const i=e[1];t=t.replace(/out.*?;/,""),t=t.replace(new RegExp(`\\b${i}\\b`,"g"),"gl_FragColor")}}const i=this.gl.createShader(e);this.gl.shaderSource(i,t),this.gl.compileShader(i);const a=this.gl.getShaderInfoLog(i);if(!this.gl.getShaderParameter(i,this.gl.COMPILE_STATUS)){const e=/ERROR: 0:(\d+):/.exec(a);if(e){const i=parseFloat(e[1]),n=t.split("\n");console.error(`${a}\nat: ${n[i-1].replace(/^\s*/,"")}`)}else console.error(a);return void this.gl.deleteShader(i)}a&&console.warn(a);const n=this._attachedShaders.get(e);if(n&&(this.gl.detachShader(this._program,n),this.gl.deleteShader(n)),this.gl.attachShader(this._program,i),this.gl.deleteShader(i),this._attachedShaders.set(e,i),2===this._attachedShaders.size){this.gl.linkProgram(this._program);const e=this.gl.getProgramInfoLog(this._program);this.gl.getProgramParameter(this._program,this.gl.LINK_STATUS)?e&&console.warn(e):console.error(e),this._attributesLocations=new Map,this._uniformLocations=new Map,this._uniformTypes=new Map}}}_parseUniforms(e){super._parseUniforms(e,{Vector2:ut,Vector3:St,Vector4:yt,Matrix3:Pt,Matrix4:vt,GLTexture:ht})}}class Ct{static shader({textureName:e="blurTexture",textureUnit:t=0,distance:i=[1,1]}={}){return{uniforms:[["blurDistance",i],[e,t]],vertexShaderChunks:[["start",`
          uniform vec2 blurDistance;
          ${Ct.computeBlurTextureCoordinates()}
        `],["end",`computeBlurTextureCoordinates(uv, blurDistance);`]],fragmentShaderChunks:[["start",`
          uniform sampler2D ${e};
          ${Ct.blur()}
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
    `}}class Mt{constructor({gl:e,size:t=0,data:i=new ArrayBuffer(t),target:a=e.ARRAY_BUFFER,usage:n=e.STATIC_DRAW}={}){this.gl=e,this._target=a,this._usage=n,this._buffer=this.gl.createBuffer(),this.data=i}set data(e){this._data=e,this.bind(),this.gl.bufferData(this._target,this._data,this._usage),this.unbind()}get data(){return this._data}bind(){this.gl.bindBuffer(this._target,this._buffer)}unbind(){this.gl.bindBuffer(this._target,null)}}class wt{constructor({gl:e,attributes:t,indiceData:i}={}){this.gl=e,this.gl.getExtension("OES_element_index_uint"),this._drawElementsInstanced=function(){},this._drawArraysInstanced=function(){};const a=this.gl.getExtension("ANGLE_instanced_arrays");a?(this._drawElementsInstanced=a.drawElementsInstancedANGLE.bind(a),this._drawArraysInstanced=a.drawArraysInstancedANGLE.bind(a)):this.gl.drawElementsInstanced&&(this._drawElementsInstanced=this.gl.drawElementsInstanced.bind(this.gl),this._drawArraysInstanced=this.gl.drawArraysInstanced.bind(this.gl)),this.attributes=new Map(t);for(let[a,n]of this.attributes)n.buffer=new Mt({gl:this.gl,data:n.data}),n.count=n.count||n.data.length/n.size;i&&(this.indices={buffer:new Mt({gl:this.gl,data:i,target:this.gl.ELEMENT_ARRAY_BUFFER}),type:i instanceof Uint8Array?this.gl.UNSIGNED_BYTE:i instanceof Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT,offset:0,count:i?i.length:0})}draw({mode:e=this.gl.TRIANGLES,elements:t=!!this.indices,count:i=t?this.indices.count:this.attributes.get("position").count,offset:a=this.indices?this.indices.offset:0,type:n=this.indices?this.indices.type:null,first:r=0,instanceCount:o=void 0}={}){t?o===void 0?this.gl.drawElements(e,i,n,a):this._drawElementsInstanced(e,i,n,a,o):o===void 0?this.gl.drawArrays(e,r,i):this._drawArraysInstanced(e,r,i,o)}}const Et=["#ffffff","#0d2fe9","#e7fc73","#ff22e0","#5aff79","#26293d"],Gt=256;class Bt{constructor({gl:e}){this.gl=e,this.video=document.createElement("video"),this.video.autoplay=!0,this.motionRatio=0,this.volume=0,this._mesh=new wt({gl:this.gl,attributes:[["position",{data:new Float32Array([-1,-1,-1,1,1,-1,1,1]),size:2}],["uv",{data:new Float32Array([0,1,0,0,1,1,1,0]),size:2}]]}),this.videoTexture=new ht({gl:this.gl}),this.videoTexture.minFilter=this.gl.LINEAR,this.videoTexture.wrapS=this.videoTexture.wrapT=this.gl.CLAMP_TO_EDGE,this.frameBuffers=[];for(let t=0;5>t;t++){const e=new bt({gl:this.gl});e.attach({texture:new ht({gl:this.gl,minFilter:this.gl.LINEAR,internalformat:4===t?this.gl.BGR8:this.gl.RGB,format:4===t?this.gl.RGBA:this.gl.RGB,width:4===t?1:Gt,height:4===t?1:Gt,wrapS:this.gl.MIRRORED_REPEAT,wrapT:this.gl.MIRRORED_REPEAT})}),this.frameBuffers.push(e)}this.program=new xt({gl:this.gl,vertexShaderChunks:[["start",`
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
        `]]}),this.program.attributes.set(this._mesh.attributes),this.blurProgram=new xt({gl:this.gl,vertexShaderChunks:[["start",`
          in vec2 position;
          in vec2 uv;
        `],["end",`
          vec2 uv = vec2(uv.x, 1. - uv.y);
          gl_Position = vec4(position, 0., 1.);
        `]],shaders:[Ct.shader(),{fragmentShaderChunks:[["start","precision highp float;"]]}]}),this.blurProgram.attributes.set(this._mesh.attributes),this.envMapProgram=new xt({gl:this.gl,vertexShaderChunks:[["start",`
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
        `]]}),this.envMapProgram.use(),this.envMapProgram.uniforms.set("colors",[Se(Et[1]),Se(Et[2]),Se(Et[3])]),this.envMapProgram.attributes.set(this._mesh.attributes),this.endProgram=new xt({gl:this.gl,vertexShaderChunks:[["start",`
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
        `]]}),this.endProgram.attributes.set(this._mesh.attributes),this.debugProgram=new xt({gl:this.gl,vertexShaderChunks:[["start",`
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
        `]]}),this.debugProgram.attributes.set(this._mesh.attributes),navigator.mediaDevices.getUserMedia({audio:!0,video:{width:320,height:240,facingMode:"user"}}).then((e)=>{this.video.srcObject=e,this.video.muted=!0;const t=new AudioContext,i=t.createMediaStreamSource(e);this._analyser=t.createAnalyser(),this._audioData=new Uint8Array(this._analyser.frequencyBinCount),i.connect(this._analyser)}).catch(function(){})}update(){if(this.video.readyState!==HTMLVideoElement.HAVE_ENOUGH_DATA)return;this.program.attributes.set(this._mesh.attributes),this.gl.disable(this.gl.CULL_FACE),this.gl.disable(this.gl.DEPTH_TEST),this.frameBuffers[0].bind(),this.videoTexture.data=this.video,this.videoTexture.bind(),this.program.use(),this.program.uniforms.set("videoTexture",0),this._draw({width:Gt,height:Gt}),this.frameBuffers[0].unbind();for(let e=0;e<2;e++)for(let e=0;2>e;e++)this.frameBuffers[(e+1)%2].bind(),this.blurProgram.use(),this.frameBuffers[e].colorTextures[0].bind(),this.blurProgram.uniforms.set("blurDistance",[(e+1)%2,e]),this._draw({width:Gt,height:Gt}),this.frameBuffers[(e+1)%2].unbind();this.frameBuffers[4].bind(),this.endProgram.use(),this.frameBuffers[1].colorTextures[0].bind(),this.endProgram.uniforms.set("frame",0),this.frameBuffers[2].colorTextures[0].bind({unit:1}),this.endProgram.uniforms.set("previousFrame",1),this._draw({width:1,height:1}),this.frameBuffers[4].unbind(),this.frameBuffers[3].bind(),this.envMapProgram.use(),this.frameBuffers[2].colorTextures[0].bind(),this.envMapProgram.uniforms.set("frame",0),this._draw({width:Gt,height:Gt}),this.frameBuffers[3].unbind(),[this.frameBuffers[1],this.frameBuffers[2]]=[this.frameBuffers[2],this.frameBuffers[1]];let e=0;this._analyser.getByteFrequencyData(this._audioData);for(var t=0;t<this._audioData.length;t++)e+=this._audioData[t];e/=this._audioData.length,this.volume=e/255,this.gl.enable(this.gl.CULL_FACE),this.gl.enable(this.gl.DEPTH_TEST),this.frameBuffers[4].bind();let i=0;const a=new Uint8Array(4);this.gl.readPixels(0,0,1,1,this.gl.RGBA,this.gl.UNSIGNED_BYTE,a),i=100*(a[0]/255),i=i||.8*this.motionRatio,this.motionRatio+=.1*(i-this.motionRatio),this.frameBuffers[4].unbind()}get frameTexture(){return this.frameBuffers[2].colorTextures[0]}get envMap(){return this.frameBuffers[3].colorTextures[0]}_draw({width:e=this.gl.canvas.width,height:t=this.gl.canvas.height}={}){this.gl.viewport(0,0,e,t),this._mesh.draw({mode:this.gl.TRIANGLE_STRIP,count:4})}}class Dt{constructor({gl:e,textContent:t="",font:i="100px sans-serif",fillStyle:a="black",textAlign:n="start",shadowColor:r="rgba(0, 0, 0 ,0)",shadowBlur:o=0,shadowOffsetX:s=0,shadowOffsetY:l=0,paddingPercentageWidth:d=0,paddingPercentageHeight:_=0,offsetXPercentage:p=0,offsetYPercentage:c=0,textScale:m=1}={}){this.gl=e,this._textScale=m,this._scaleOffset=[1,1,0,0],this._canvas=document.createElement("canvas"),this._context=this._canvas.getContext("2d"),this.transform=new vt,this.textContent=t,this.font=i,this.fillStyle=a,this.textAlign=n,this.shadowColor=r,this.shadowBlur=o,this.shadowOffsetX=s,this.shadowOffsetY=l,this.paddingPercentageWidth=d,this.paddingPercentageHeight=_,this.offsetXPercentage=p,this.offsetYPercentage=c,this.lock=!1,this._initGL(),this._update()}_initGL(){this._texture=new ht({gl:this.gl,wrapS:this.gl.CLAMP_TO_EDGE,wrapT:this.gl.CLAMP_TO_EDGE}),this.mesh=new wt({gl:this.gl,attributes:[["position",{data:new Float32Array([-1,1,-1,-1,1,1,1,-1]),size:2}],["uv",{data:new Float32Array([0,0,0,1,1,0,1,1]),size:2}]]}),this.program=new xt({gl:this.gl,uniforms:[["transform",this.transform],["projectionView",new vt],["scaleOffset",this._scaleOffset]],vertexShader:`#version 300 es
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
      `})}_update(){if(!this._texture||this.lock)return;let e=this._context.measureText(this.textContent).width,i=parseFloat(/\b(\d*)px/.exec(this._context.font)[1]);const n=e*this.paddingPercentageWidth,r=i*this.paddingPercentageHeight,o=e*this.offsetXPercentage,s=i*this.offsetYPercentage,l=this.shadowOffsetX-this.shadowBlur,d=this.shadowOffsetY-this.shadowBlur;e*=1+2*this.paddingPercentageWidth,i*=1+2*this.paddingPercentageHeight,e+=2*this.shadowBlur+a(this.shadowOffsetX),i+=2*this.shadowBlur+a(this.shadowOffsetY),(this._canvas.width!==e||this._canvas.height!==i)&&(this._canvas.width=e||1,this._canvas.height=i||1,this._context=this._canvas.getContext("2d"),this._context.font=this.font,this._context.fillStyle=this.fillStyle,this._context.shadowColor=this.shadowColor,this._context.shadowBlur=this.shadowBlur,this._context.shadowOffsetX=this.shadowOffsetX,this._context.shadowOffsetY=this.shadowOffsetY,this._context.textBaseline="ideographic"),this._scaleOffset[3]=.01*(.5*-d),this._scaleOffset[2]="start"===this.textAlign||"left"===this.textAlign?.01*(.5*this._canvas.width+p(0,l)):"end"===this.textAlign||"right"===this.textAlign?.01*(.5*-this._canvas.width+t(0,l)):.01*(.5*l),this._scaleOffset[0]=.01*(this._canvas.width*this._textScale),this._scaleOffset[1]=.01*(this._canvas.height*this._textScale),this._context.clearRect(0,0,this._canvas.width,this._canvas.height),this._context.globalAlpha=0.01,this._context.fillRect(0,0,this._canvas.width,this._canvas.height),this._context.globalAlpha=1,this._context.fillText(this._textContent,(0>l?a(l):0)+n+o,this._canvas.height-(0<d?a(d):0)-r+s),this._texture.data=this._canvas,this._texture.generateMipmap()}draw({camera:e}={}){this.program.use(),this.program.attributes.set(this.mesh.attributes),e&&this.program.uniforms.set("projectionView",e.projectionView),this.program.uniforms.set("scaleOffset",this._scaleOffset),this.program.uniforms.set("transform",this.transform),this._texture.bind(),this.mesh.draw({mode:this.gl.TRIANGLE_STRIP,count:4})}set textContent(e){this._textContent=e,this._update()}get textContent(){return this._textContent}set font(e){this._context.font=this._font=e,this._update()}get font(){return this._font}set fillStyle(e){this._context.fillStyle=this._fillStyle=e,this._update()}get fillStyle(){return this._fillStyle}set textAlign(e){this._textAlign=e,this._update()}get textAlign(){return this._textAlign}set shadowColor(e){this._context.shadowColor=this._shadowColor=e,this._update()}get shadowColor(){return this._shadowColor}set shadowBlur(e){this._context.shadowBlur=this._shadowBlur=e,this._update()}get shadowBlur(){return this._shadowBlur}set shadowOffsetX(e){this._context.shadowOffsetX=this._shadowOffsetX=e,this._update()}get shadowOffsetX(){return this._shadowOffsetX}set shadowOffsetY(e){this._context.shadowOffsetY=this._shadowOffsetY=e,this._update()}get shadowOffsetY(){return this._shadowOffsetY}}class kt{constructor({near:e=0.01,far:t=1e3,aspectRatio:i=1,fov:a=l/3}={}){this._near=e,this._far=t,this._aspectRatio=i,this._fov=a,this.transform=new vt,this._inverseTransform=new vt,this._projection=new vt,this._projectionView=new vt,this._updateProjection()}set near(e){this._near=e,this._updateProjection()}get near(){return this._near}set far(e){this._far=e,this._updateProjection()}get far(){return this._far}set fov(e){this._fov=e,this._updateProjection()}get fov(){return this._fov}set aspectRatio(e){this._aspectRatio=e,this._updateProjection()}get aspectRatio(){return this._aspectRatio}get inverseTransform(){return this._inverseTransform.invert(this.transform)}get projection(){return this._projection}get projectionView(){return this._projectionView.copy(this.projection).multiply(this.inverseTransform)}_updateProjection(){this._projection.fromPerspective(this)}}Object.defineProperty(kt.prototype,"near",{enumerable:!0}),Object.defineProperty(kt.prototype,"far",{enumerable:!0}),Object.defineProperty(kt.prototype,"fov",{enumerable:!0}),Object.defineProperty(kt.prototype,"aspectRatio",{enumerable:!0}),Object.defineProperty(kt.prototype,"inverseTransform",{enumerable:!0}),Object.defineProperty(kt.prototype,"projection",{enumerable:!0}),Object.defineProperty(kt.prototype,"projectionView",{enumerable:!0});const Rt=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e},Ot=function(e,t){let i=t[0],a=t[1],n=t[2],r=t[3],s=i*i+a*a+n*n+r*r;return 0<s&&(s=1/o(s),e[0]=i*s,e[1]=a*s,e[2]=n*s,e[3]=r*s),e},Ht=function(){let e=k(),t=O(1,0,0),i=O(0,1,0);return function(n,r,a){let o=z(r,a);return-0.999999>o?(W(e,t,r),1e-6>R(e)&&W(e,i,r),U(e,e),ve(n,e,Math.PI),n):0.999999<o?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(W(e,r,a),n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=1+o,Ot(n,n))}}(),It=function(){let e=ye(),i=ye();return function(n,r,a,o,s,l){return we(e,r,s,l),we(i,a,o,l),we(n,e,i,2*l*(1-l)),n}}(),Lt=function(){let e=q();return function(t,i,a,n){return e[0]=a[0],e[3]=a[1],e[6]=a[2],e[1]=n[0],e[4]=n[1],e[7]=n[2],e[2]=-i[0],e[5]=-i[1],e[8]=-i[2],Ot(t,Ge(t,e))}}();class Nt extends Float32Array{constructor(e=0,t=0,i=0,a=1){return super(4),this.set(e,t,i,a),this}get x(){return this[0]}set x(e){this[0]=e}get y(){return this[1]}set y(e){this[1]=e}get z(){return this[2]}set z(e){this[2]=e}get w(){return this[3]}set w(e){this[3]=e}identity(){return Pe(this),this}set(e,t,i,a){return Z(this,e,t,i,a),this}rotateX(e){return xe(this,this,e),this}rotateY(e){return Ce(this,this,e),this}rotateZ(e){return Me(this,this,e),this}invert(e=this){return Ee(this,e),this}copy(e){return Rt(this,e),this}normalize(e=this){return Ot(this,this),this}multiply(e,t){return t?Ae(this,e,t):Ae(this,this,e),this}fromMatrix3(e){return Ge(this,e),this}}class Vt{constructor({matrix:e=new vt,domElement:t=document.body,distance:i=0,invertRotation:a=!0,rotationEaseRatio:n=.04,zoomSpeed:r=.1,zoomEaseRatio:o=.1,minDistance:s=0,maxDistance:l=Infinity,enabled:d=!0}={}){this.matrix=e,this._distance=i,this.invertRotation=a,this.rotationEaseRatio=n,this.maxDistance=l,this.minDistance=s,this.zoomSpeed=r,this.zoomEaseRatio=o,this._pointer=gt.get(t),this._nextDistance=this._distance,this._cachedQuaternion=new Nt,this._cachedMatrix=new vt,this._cachedVector3=new St,this._velocity=new ut,this._velocityOrigin=new ut,this._position=new St([this.matrix.x,this.matrix.y,this.matrix.z]),this._positionPrevious=this._position.clone(),this._positionOffset=new St,t.addEventListener("wheel",this.onWheel.bind(this)),this.enabled=!0,this.update(),this.enabled=d}set distance(e){this._distance=this._nextDistance=e}get distance(){return this._distance}onWheel(i){this.enabled&&(this._nextDistance+=i.deltaY*this.zoomSpeed,this._nextDistance=t(p(this._nextDistance,this.maxDistance),this.minDistance))}update(){this.enabled&&(this._cachedMatrix.identity(),this._cachedQuaternion.identity(),this._distance+=(this._nextDistance-this._distance)*this.zoomEaseRatio,this._position.set(this.matrix.x,this.matrix.y,this.matrix.z).subtract(this._positionOffset),this.matrix.x=0,this.matrix.y=0,this.matrix.z=0,this._pointer.downed&&this._velocity.copy(this._pointer.velocity).scale(.003),this._velocity.lerp(this._velocityOrigin,this.rotationEaseRatio),this._cachedQuaternion.rotateY(this.invertRotation?-this._velocity.x:this._velocity.x),this._cachedQuaternion.rotateX(this.invertRotation?-this._velocity.y:this._velocity.y),this._cachedMatrix.fromQuaternion(this._cachedQuaternion),this.matrix.multiply(this._cachedMatrix),this._positionOffset.set(0,0,1),this._positionOffset.applyMatrix4(this.matrix),this._positionOffset.scale(this._distance),this._cachedVector3.copy(this._position).add(this._positionOffset),this.matrix.x=this._cachedVector3.x,this.matrix.y=this._cachedVector3.y,this.matrix.z=this._cachedVector3.z)}}class Ft{static pack(){return`
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
    `}}class Xt{static PhysicallyBasedMaterial(){return`
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
    `}}class Ut{static common(){return`
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
    `}}class zt{static Ray(){return`
      struct Ray
      {
        vec3 origin;
        vec3 direction;
      };
    `}}class Wt{static Light(){return`
      struct Light
      {
        vec3 color;
        vec3 position;
        vec3 direction;
        float intensity;
      };
    `}}class jt extends Ve{static load(e){let t=/([\\/]?.*[\\/])/.exec(e)[1],i=new Map,a;jt.typeMap.get("json").add("gltf");let n=Ve.load(e).then((e)=>(a=e,Ve.load(a.buffers.map((e)=>`${t}${e.uri}`)))).then((e)=>{const t=JSON.parse(JSON.stringify(a));t.raw=a;for(let i of t.nodes)i.mesh=t.meshes[i.mesh];for(let i of t.bufferViews)i.buffer=e[i.buffer];for(let i of t.accessors)i.bufferView=t.bufferViews[i.bufferView];for(let i of t.meshes)for(let e of i.primitives){for(let i in e.attributes)e.attributes[i]=t.accessors[e.attributes[i]];e.indices=t.accessors[e.indices]}return t});return Ve.promises.set(e,n),n}}class Kt extends wt{constructor({gl:e,data:t,attributes:i}={}){super({gl:e,attributes:i});let a=t.primitives[0].attributes.POSITION;this.attributes.set("position",{buffer:new Mt({gl:this.gl,data:a.bufferView.buffer}),size:3,count:a.count,offset:a.bufferView.byteOffset,target:a.bufferView.target});let n=t.primitives[0].attributes.NORMAL;this.attributes.set("normal",{buffer:new Mt({gl:this.gl,data:n.bufferView.buffer}),size:3,count:n.count,offset:n.bufferView.byteOffset,target:n.bufferView.target});let r=t.primitives[0].attributes.TEXCOORD_0;r&&this.attributes.set("uv",{buffer:new Mt({gl:this.gl,data:r.bufferView.buffer}),size:2,count:r.count,offset:r.bufferView.byteOffset,target:r.bufferView.target});let o=t.primitives[0].indices;o&&(this.indices={buffer:new Mt({gl:this.gl,data:o.bufferView.buffer,target:this.gl.ELEMENT_ARRAY_BUFFER}),type:o.componentType,offset:o.bufferView.byteOffset,count:o.count})}}const Yt=["#ffffff","#0d2fe9","#e7fc73","#ff22e0","#5aff79","#26293d"];class Qt{constructor({gl:e,webcam:t}){this.gl=e,this.webcam=t,this.transform=new vt,this._time=0,jt.load("src/webgl/background/background.gltf").then((e)=>{this._mesh=new Kt({gl:this.gl,data:e.meshes[0]})}),this.program=new xt({gl:this.gl,uniforms:[["data",0]],vertexShader:`#version 300 es
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

        ${Wt.Light()}
        ${zt.Ray()}
        ${Xt.PhysicallyBasedMaterial()}
        ${Ut.random()}
        ${Xt.ggx()}
        ${Xt.computeGGXLighting()}
        ${Xt.computePBRLighting({pbrReflectionFromRay:`
            vec3 envMapTexel = texture(envMap, ray.direction.xy * .5 + .5).rgb;
            float grey = (envMapTexel.r + envMapTexel.g + envMapTexel.b) / 3.;
            vec3 color = .95 + vec3(grey) * .05;
            color = mix(color, envMapTexel, min(motion, 1.));

            // return .8 + vec3(step(.5, grey)) * .2;
            // return clamp(color, vec3(0.), vec3(1.));
            // return clamp(color, vec3(0.), vec3(1.));
            return envMapTexel;
          `})}

        ${Ft.bumpFromDepth({getDepth:`
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
      `}),this.program.use(),this.program.uniforms.set("colors",[Se(Yt[1]),Se(Yt[2]),Se(Yt[3]),Se(Yt[5])])}draw({camera:e}){this._mesh&&(this._time+=.1,this.program.use(),this.webcam.frameTexture.bind(),this.program.attributes.set(this._mesh.attributes),this.program.uniforms.set("projectionView",e.projectionView),this.program.uniforms.set("transform",this.transform),this.program.uniforms.set("resolution",[this.gl.canvas.width,this.gl.canvas.height]),this.program.uniforms.set("motion",this.webcam.motionRatio),this.program.uniforms.set("volume",this.webcam.volume),this.program.uniforms.set("time",this._time),this.webcam.envMap.bind({unit:2}),this.program.uniforms.set("envMap",2),this._mesh.indices.buffer.bind(),this._mesh.draw())}}class Zt{static Camera(){return`
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
    `}}let qt;const Jt=new vt,$t=.6,ei=new Map([["mouse",{rotation:0,position:-3,text:"Move mouse!",uvOffset:[0,0],color:Se(Yt[4])}],["keyboard",{rotation:0,position:-1,text:"Press keyboard!",uvOffset:[0.5,0],color:Se(Yt[3])}],["motion",{rotation:0,position:1,text:"Dance!",uvOffset:[0,0.5],color:Se(Yt[2])}],["sound",{rotation:0,position:3,text:"Shout/clap!",uvOffset:[0.5,0.5],color:Se(Yt[1])}]]);class ti{constructor({gl:e,player:t,actionsDetector:i,webcam:a}){this.gl=e,this.player=t,this.actionsDetector=i,this.transform=new vt,this._webcam=a,Promise.all([jt.load("src/webgl/button/buttons.gltf"),Ve.load("src/webgl/button/marble.jpg")]).then(([e,t])=>{this._patternTexture=new ht({gl:this.gl,data:t,minFilter:this.gl.LINEAR}),this._meshes=new Map;for(let i of e.meshes){const e=new Kt({gl:this.gl,data:i});this._meshes.set(i.name,e)}this.program=new xt({gl:this.gl,uniforms:[["patternTexture",1]],vertexShader:`#version 300 es
          ${Zt.Camera()}

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
            position.y *= 1. - max(-success - .2, 0.);
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
  
          ${Zt.Camera()}

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

          ${Wt.Light()}
          ${zt.Ray()}
          ${Zt.rayFromCamera()}
          ${Xt.PhysicallyBasedMaterial()}
          ${Ut.random()}
          ${Xt.ggx()}
          ${Xt.computeGGXLighting()}
          ${Xt.computePBRLighting({pbrReflectionFromRay:`
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
            color *= min(1., 1. + success + .5);

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
        `})}),qt||(qt=new Dt({gl:this.gl,textScale:1,textAlign:"center",textContent:"",fillStyle:"white",font:"40px 'Raleway', sans-serif",offsetYPercentage:window.chrome?.2:-.2,paddingPercentageWidth:.2,paddingPercentageHeight:.2})),this._actionObjects=new Map;for(let n of this.player.actions){if(!n.type)continue;const e=ei.get(n.type);this._actionObjects.set(n,{type:n.type,position:e.position,transform:new vt,opacity:0,success:0,rotation:e.rotation,color:e.color})}this._texturesData=new Map,this._socles=new Map,this._texts=new Map;for(let[n,r]of ei){const e=new ht({gl:this.gl,minFilter:this.gl.LINEAR,wrapS:this.gl.CLAMP_TO_EDGE,wrapT:this.gl.CLAMP_TO_EDGE});qt.textContent=r.text.toUpperCase(),e.data=qt._canvas,this._texturesData.set(n,{texture:e,scaleOffset:new yt(qt._scaleOffset)}),this._socles.set(n,{push:0})}this._typeSortedActionObjects=new Map;for(let n of this._actionObjects.values()){let e=this._typeSortedActionObjects.get(n.type);e||(e=[],this._typeSortedActionObjects.set(n.type,e)),e.push(n)}this.actionsDetector.onActionComplete.add(this.onActionComplete.bind(this)),this.actionsDetector.onAction.add(this.onAction.bind(this))}onAction({type:e}){TweenLite.to(this._socles.get(e),.1,{push:1})}onActionComplete({action:e}){const t=this._actionObjects.get(e);t&&TweenLite.to(t,.2,{success:e.success?1:-1})}resize({width:e,height:t}){this._width=e}draw({camera:i}={}){if(this.program){for(let i of this.player.actions){const n=this._actionObjects.get(i);if(!n)continue;const r=5*(this.player.currentTime-i.time);(n.opacity=t(0,1-a(r)*(0>r?.025:.2)),!!n.opacity)&&(n.transform.identity(),n.transform.rotateY(n.rotation-r),n.transform.x=n.position,n.transform.z=r,n.transform.scale($t),n.transform.scale(e(n.opacity,.2)),n.transform.multiply(this.transform,n.transform))}this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.program.use(),this.program.uniforms.set("text",0),this.program.uniforms.set("camera",i),this._patternTexture.bind({unit:1}),this._webcam.envMap.bind({unit:2}),this.program.uniforms.set("envMap",2);for(let[e,t]of this._typeSortedActionObjects){const i=ei.get(e);this.program.uniforms.set("uvOffset",i.uvOffset),this.program.uniforms.set("typeColor",i.color);const a=this._meshes.get(e);a.indices.buffer.bind(),this.program.attributes.set(a.attributes);for(let e of t)e.opacity&&(this.program.uniforms.set("success",e.success),this.program.uniforms.set("opacity",e.opacity),this.program.uniforms.set("transform",e.transform),a.draw())}for(let e of["socleoutside","socleinside"]){const t=this._meshes.get(e);t.indices.buffer.bind(),this.program.attributes.set(t.attributes),this.program.uniforms.set("text","socleoutside"===e?1:0);for(let[i,a]of ei){const n=this._texturesData.get(i);if(n.texture.bind(),this.program.uniforms.set("scaleOffset",n.scaleOffset),this.program.uniforms.set("opacity",1),this.program.uniforms.set("success",0),Jt.identity(),Jt.x=a.position,"socleinside"===e){const e=this._socles.get(i);e.push+=.2*-e.push,Jt.y=.3*(e.push-1)}Jt.scale($t),Jt.multiply(this.transform,Jt),this.program.uniforms.set("typeColor",a.color),this.program.uniforms.set("transform",Jt),t.draw()}}this.gl.disable(this.gl.BLEND)}}}const ii=["Amazing!","You're a star","Perfect","So good","Yeah!!!","Ace!","Fantastic!!!","Impressive!","Well done"],ai=["Ouch!","Too bad","Almost","Aie!","Be brave!","Not today","Oups!","Failed!","Nope!"];class ni extends Dt{constructor({gl:e,player:t,actionsDetector:i,noiseTexture:a}){super({gl:e,textAlign:"center",textContent:"",fillStyle:Yt[5],textScale:1/window.devicePixelRatio,font:`${50*window.devicePixelRatio}px calgary_script`,paddingPercentageWidth:.2,paddingPercentageHeight:.2,offsetYPercentage:window.chrome?.2:0}),this._scale=1,this._tweenedScale=1,this._opacity=1,this._noiseTexture=a,this.program.add({uniforms:[["noiseTexture",1]],fragmentShaderChunks:[["start",`
          precision highp float;

          uniform float opacity;
          uniform sampler2D noiseTexture;
          uniform vec4 scaleOffset;

          ${Ut.random()}
        `],["end",`
          fragColor.a = smoothstep(.01, 1., fragColor.a);
          vec4 noise = texture(noiseTexture, random(scaleOffset.x + scaleOffset.y) + vUv * scaleOffset.xy);
          // fragColor.a *= (-noise.r + opacity * 2.) * 10. ;
          // fragColor.rgb = (noise.rgb - opacity) * 20.;
          fragColor.a *= opacity;
          // fragColor.rgb = vec3(1., 0., 0.);
        `]]}),this.player=t,this.player.onActionChange.add(this.changeAction.bind(this)),i.onActionComplete.add(this.onActionComplete.bind(this))}onActionComplete({action:e}){const t=e.success?ii:ai;this.textContent=t[De(Math.random()*t.length)]}changeAction({action:e}){let t=e.text;t&&("string"==typeof t&&(t=[t]),t[0]&&(this._scale=t[1]||1,this.textContent=t[0],this._scale=1))}set textContent(e){super.textContent=e;const t=p(1,1e3/this._canvas.width)*(this._scale||1);TweenLite.killTweensOf(this),TweenLite.fromTo(this,.2,{_tweenedScale:0},{_tweenedScale:t,ease:Back.easeOut}),TweenLite.fromTo(this,.2,{_opacity:0},{_opacity:1}),TweenLite.to(this,.2,{_opacity:0,_tweenedScale:0,delay:2})}get textContent(){return super.textContent}draw({camera:e}={}){this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA);const t=this._tweenedScale||1e-4;this.transform.scale(t),this._noiseTexture.bind({unit:1}),this.program.use(),this.program.uniforms.set("opacity",this._opacity),super.draw({camera:e}),this.gl.disable(this.gl.BLEND),this.transform.scale(1/t)}}class ri{constructor({gl:e,player:t,webcam:i,noiseTexture:a}){this.gl=e,this.webcam=i,this._noiseTexture=a,this.transform=new vt;const n=10,r=40;this._time=0,this.mesh=new wt({gl:this.gl,attributes:[["position",{data:new Float32Array([.5*-n,0,-r,.5*-n,0,0,.5*n,0,-r,.5*n,0,0]),size:3}],["uv",{data:new Float32Array([0,1,0,0,1,1,1,0]),size:2}]]}),this.program=new xt({gl:this.gl,uniforms:[["data",0]],vertexShader:`#version 300 es
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
      `})}draw({camera:e}={}){this._time+=.1,this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this._noiseTexture.bind(),this.program.use(),this.program.uniforms.set("projectionView",e.projectionView),this.program.uniforms.set("transform",this.transform),this.program.uniforms.set("volume",this.webcam.volume),this.program.uniforms.set("motion",this.webcam.motionRatio),this.program.uniforms.set("time",this._time),this.program.attributes.set(this.mesh.attributes),this.mesh.draw({mode:this.gl.TRIANGLE_STRIP,count:4}),this.gl.disable(this.gl.BLEND)}}class oi extends Dt{constructor({gl:e}){super({gl:e,textScale:1/window.devicePixelRatio,textAlign:"center",textContent:"0",fillStyle:Yt[5],font:`${80*window.devicePixelRatio}px calgary_script`,paddingPercentageWidth:.2,paddingPercentageHeight:.2,offsetYPercentage:window.chrome?.2:0}),this._scale=1,this.program.add({fragmentShaderChunks:[["start",`
          precision highp float;
        `],["end",`
          // fragColor += .5;
        `]]})}draw({camera:e}={}){this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.transform.scale(this._scale),this.program.use(),super.draw({camera:e}),this.gl.disable(this.gl.BLEND),this.transform.scale(1/this._scale)}}const si=500,li=new Map([["mouse",{position:-3,color:Se(Yt[4])}],["keyboard",{position:-1,color:Se(Yt[3])}],["motion",{position:1,color:Se(Yt[2])}],["sound",{position:3,color:Se(Yt[1])}]]);class di{constructor({gl:e,webcam:t,noiseTexture:i,actionsDetector:a}){this.gl=e,this.webcam=t,this.noiseTexture=i,this.actionsDetector=a,this.transform=new vt,this._time=0,jt.load("src/webgl/objects/objects.gltf").then((e)=>{for(const t of e.meshes)"cube"===t.name&&(this._mesh=new Kt({gl:this.gl,data:t}))}),this.program=new xt({gl:this.gl,uniforms:[["instanceCount",si]],vertexShader:`#version 300 es
        ${Zt.Camera()}

        uniform mat4 transform;
        uniform Camera camera;
        uniform float instanceCount;
        uniform float time;
        uniform float progress;
        uniform float seed;
        uniform sampler2D noiseTexture;

        in vec3 position;
        in vec3 normal;
        in vec2 uv;

        out vec3 vPosition;
        out vec4 vGLPosition;
        out vec3 vNormal;
        out vec2 vUv;

        ${Ut.random()}
        ${Ut.common()}
        ${Ut.simplexNoise()}
        ${Ut.curlNoise()}

        vec3 rotateByQuaternion(vec3 position, vec4 quaternion) { 
          return position + 2.0 * cross(quaternion.xyz, cross(quaternion.xyz, position) + quaternion.w * position);
        }

        void main() {
          vec3 position = position; 
          float id = float(gl_InstanceID);
          float randomSeed = random(id + seed);
          position += random(randomSeed + position.x + position.y + position.z) * 2. - 1.;          
          position *= .1;
          vec4 randomTexelFromId = texture(noiseTexture, vec2(randomSeed));
          vec3 curl = texture(noiseTexture, randomTexelFromId.xy + seed * 3. + progress * .1).rgb * 2. - 1.;
          vec3 positionId = vec3(id);
          vec4 quaternion = vec4(normalize(curl), 0.);
          position = rotateByQuaternion(position, quaternion);
          
          // float progress = smoothstep(0., 1., id * .002 + time * .1);
          float progress = smoothstep(0., 1., progress);
          
          position *= max(0., 1. - progress);
          position *= smoothstep(0., .1, progress);

          position.xz += curl.xz;
          // position.z += curl.x;
          // position.y += -curl.y * 2. + progress * 4.;
          position.y += curl.y * progress * 5.;

          vec3 normal = normal;
          normal = rotateByQuaternion(normal, quaternion);
          
          gl_Position = camera.projectionView * transform * vec4(position, 1.);
          vGLPosition = gl_Position;
          vPosition = position;
          vNormal = normal;
          vUv = uv;
        }
      `,fragmentShader:`#version 300 es
        precision highp float;

        ${Zt.Camera()}

        uniform sampler2D noiseTexture;
        uniform sampler2D envMapTexture;
        uniform vec3 diffuseColor;
        uniform float progress;
        uniform Camera camera;

        in vec3 vPosition;
        in vec3 vNormal;
        in vec2 vUv;
        in vec4 vGLPosition;

        out vec4 fragColor;

        ${Wt.Light()}
        ${zt.Ray()}
        ${Zt.rayFromCamera()}
        ${Xt.PhysicallyBasedMaterial()}
        ${Ut.random()}
        ${Xt.ggx()}
        ${Xt.computeGGXLighting()}
        ${Xt.computePBRLighting({pbrReflectionFromRay:`
            vec3 color = texture(envMapTexture, ray.direction.xz).rgb;
            color += max(0., pow(ray.direction.y, .1));
            return color;
          `})}

        void main() {
          Ray ray = rayFromCamera(vGLPosition.xy / vGLPosition.z, camera);
          vec4 envMap = texture(envMapTexture, normalize(vPosition + vNormal).xy);

          vec3 color = computePBRLighting(
            ray, 
            Light(vec3(1.), vec3(0.), vec3(-1.), .9),
            vPosition,
            vNormal,
            PhysicallyBasedMaterial(diffuseColor + progress, 0., 0., 1.)
            // PhysicallyBasedMaterial(diffuse * (1. - textTexel.a), pattern * .2, (1. - pattern), 1. - textTexel.a * .8)
            // PhysicallyBasedMaterial(diffuse * (1. - textTexel.a), 0., 1., 0.)
          );

          float opacity = 1.;
          fragColor = vec4(color, opacity);
        }
      `}),this.actionsDetector.onActionComplete.add(this.onActionComplete.bind(this)),this._objects=new Map;for(const[n,r]of li){let e=[];this._objects.set(n,e);for(let t=0;3>t;t++)e.push({progress:0,seed:Math.random()})}setTimeout(()=>{for(const e of li.keys())this.onActionComplete({action:{type:e,success:!0}})},1e3)}onActionComplete({action:e}){if(e.success)for(const t of this._objects.get(e.type))if(0===t.progress){t.seed=Math.random(),TweenLite.to(t,1,{progress:1,onComplete:()=>{t.progress=0}});break}}draw({camera:e}){if(this._mesh){this._time+=.1,this.program.attributes.set(this._mesh.attributes),this.program.use(),this.noiseTexture.bind(),this.program.uniforms.set("noiseTexture",0),this.webcam.envMap.bind({unit:1}),this.program.uniforms.set("envMapTexture",1),this.program.uniforms.set("time",this._time),this.program.uniforms.set("camera",e),this._mesh.indices.buffer.bind();for(const[e,t]of li){const i=this._objects.get(e);this.transform.x=t.position,this.program.uniforms.set("transform",this.transform),this.program.uniforms.set("diffuseColor",t.color);for(const e of i)!e.progress,this.program.uniforms.set("seed",e.seed),this.program.uniforms.set("progress",e.progress),this._mesh.draw({instanceCount:si})}}}}const _i=_t.add({value:!1},"value",{label:"Camera Controller",reload:!0}).value,pi=new Nt,ci=new St;class mi{constructor({gl:e,webcam:t,actionsDetector:i,player:a}={}){this.gl=e,this.webcam=t,this.player=a,this._pointer=gt.get(),this._cameraRotation=new ut,this._cameraTiltMaxAngle=.05,this._cameraTiltEasing=.02,this.gl.clearColor(1,1,1,1),this.gl.enable(this.gl.CULL_FACE),this.camera=new kt,this._noiseTexture=new ht({gl:this.gl,minFilter:this.gl.LINEAR}),Ve.load("src/webgl/noise.png").then((e)=>{this._noiseTexture.data=e,this._noiseTexture.generateMipmap()}),this.cameraController=new Vt({matrix:this.camera.transform,distance:10,enabled:_i}),this.background=new Qt({gl:this.gl,webcam:this.webcam}),this.background.transform.scale([116,44,44]),this.background.transform.rotateX(.1),this.background.transform.y=-2.8,this.background.transform.z=1.5,this.actionTexts=new ti({gl:this.gl,player:a,actionsDetector:i,webcam:t}),this.actionTexts.transform.rotateX(.1),this.actionTexts.transform.y=-2.8,this.actionTexts.transform.z=2.8,this.mainText=new ni({gl:this.gl,player:a,actionsDetector:i,noiseTexture:this._noiseTexture}),this.mainText.transform.y=2.5,this.ground=new ri({gl:this.gl,webcam:this.webcam,noiseTexture:this._noiseTexture,player:a}),this.ground.transform.rotateX(.1),this.ground.transform.y=-2.8,this.ground.transform.z=2.2,this.scoreText=new oi({gl:this.gl}),this.scoreText.transform.setPosition([0,4.5,0]),this.actionCubes=new di({gl:this.gl,webcam:this.webcam,noiseTexture:this._noiseTexture,actionsDetector:i}),this.actionCubes.transform.rotateX(.1),this.actionCubes.transform.y=-2.3,this.actionCubes.transform.z=2.8}resize({width:e,height:t}){this.camera.aspectRatio=e/t,this.actionTexts.resize({width:e,height:t}),this.update()}set score(e){this.scoreText.textContent=e}update(){this._noiseTexture.data&&(this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.cameraController.enabled?this.cameraController.update():(this._cameraRotation.x+=(this._pointer.normalizedCenteredFlippedY.x*this._cameraTiltMaxAngle-this._cameraRotation.x)*this._cameraTiltEasing,this._cameraRotation.y+=(-this._pointer.normalizedCenteredFlippedY.y*this._cameraTiltMaxAngle-this._cameraRotation.y)*this._cameraTiltEasing,pi.identity(),pi.rotateY(this._cameraRotation.x),pi.rotateX(this._cameraRotation.y),this.camera.transform.fromQuaternion(pi),ci.set(0,0,1),ci.applyMatrix4(this.camera.transform),this.camera.transform.setPosition(ci.scale(10))),this.gl.enable(this.gl.DEPTH_TEST),this.background.draw({camera:this.camera}),this.actionTexts.draw({camera:this.camera}),this.actionCubes.draw({camera:this.camera}),this.mainText.draw({camera:this.camera}),this.ground.draw({camera:this.camera}),this.scoreText.draw({camera:this.camera}))}}window.customElements.define("christmasxp-yolohero-webgl",class extends Ze{connectedCallback(){super.connectedCallback(),this.canvas=document.createElement("canvas"),this.appendChild(this.canvas),this.player=null,this.actionsDetector=null,this.canvas=this.querySelector("canvas"),this.gl=this.canvas.getContext(WebGL2RenderingContext?"webgl2":"webgl",{depth:!0,alpha:!1,antialias:!0}),this.webcam=new Bt({gl:this.gl}),window.addEventListener("resize",this._resizeBinded=this.resize.bind(this))}load(){return this.view=new mi({gl:this.gl,webcam:this.webcam,player:this.player,actionsDetector:this.actionsDetector}),this.resize(),Ve.onLoad}set score(e){this.view.score=e}disconnectedCallback(){window.removeEventListener("resize",this._resizeBinded)}resize(){let e=this.canvas.offsetWidth,t=this.canvas.offsetHeight;this.canvas.width=e*window.devicePixelRatio,this.canvas.height=t*window.devicePixelRatio,this.view.resize({width:e,height:t})}update(){this.view&&(this.view.update(),this.webcam.update())}});let ui;class Ti{static load(){return ui=ui||new Promise((e)=>{window.onYouTubeIframeAPIReady=()=>{e()};let t=document.createElement("script");t.src="//www.youtube.com/iframe_api",document.head.appendChild(t)}),ui}}let gi;class fi{static load(){return gi=gi||new Promise((e)=>{let t=document.createElement("script");t.onload=e,t.src="//w.soundcloud.com/player/api.js",document.head.appendChild(t)}),gi}}let bi=[];var hi={slices:new Map([["main",{startTime:.4,bpm:150,data:bi,timings:[]}]])};bi.push(["",["Move your mouse",2]],[""],[""],[""],[""],["mouse"],["mouse"],["mouse"],["mouse"],[""],["",["Now press any key on your keyboard",2]],[""],[""],[""],[""],[""],[""],["keyboard"],["keyboard"],["keyboard"],["keyboard"],[""],["",["Move your body and dance!",2]],[""],[""],[""],[""],[""],[""],["motion"],["motion"],["motion"],["motion"],[""],["",["And finally... Make some noise!!!",2]],[""],[""],[""],[""],[""],[""],["sound"],["sound"],["sound"],["sound"],["","Let's do this"],[""],[""],[""],["",["(sorry)",0.5]],[""],["keyboard"],[""],["keyboard"],[""],["keyboard"],[""],["keyboard"],[""],["keyboard"],[""],["mouse"],[""],["keyboard"],[""],["mouse"],[""],["keyboard"],[""],["mouse"],[""],["motion"],["motion"],["motion"],["motion"],[""],[""],[""],[""],["sound"],["sound"],["sound"],["sound"],["keyboard"],["keyboard"],["keyboard"],["keyboard"],[""],[""],[""],[""],["keyboard"],[""],["keyboard"],[""],["keyboard"],[""],["motion"],[""],["motion"],[""],["keyboard"],[""],["keyboard"],[""],["sound"],["sound"],["sound"],["motion"],["motion"],["motion"],["keyboard"],[""],["keyboard"],[""],["mouse"],["mouse"],["mouse"],["mouse"],["mouse"],["mouse"],["mouse"],["mouse"],["mouse"],["mouse"],[""],[""],[""],[""],[""],[""],["motion"],["motion"],["motion"],["motion"],["motion"],["motion"],["motion"],["motion"],["motion"],["motion"],[""],[""],[""],[""],[""],[""],["keyboard"],[""],[""],[""],["keyboard"],[""],[""],[""],[["keyboard","mouse"]],[""],[""],[""],[["keyboard","mouse"]],[""],[""],[""],[["motion","mouse"]],[""],[""],[""],[["motion","mouse"]],[""],[""],[""],[""],["sound"],[""],["keyboard"],["keyboard"],["keyboard"],["keyboard"],["sound"],["mouse"],["mouse"],["mouse"],["mouse"],["mouse"],["mouse"],["mouse"],["mouse"],["motion"],["motion"],["motion"],["motion"],["motion"],["motion"],["motion"],["motion"],["motion"],["motion"],[""],[""],[""],[""],[""],[""],[""],[""],["keyboard"],["keyboard"],[""],["keyboard"],["keyboard"],[""],["keyboard"],["keyboard"],[""],[""],["mouse"],[""],["keyboard"],[""],["motion"],[""],["sound"],[""],["keyboard"],["keyboard"],["mouse"],["mouse"],["motion"],["motion"],["motion"],["motion"],["keyboard"],[""],["keyboard"],[""],[""],[""],[""],[["keyboard","mouse"]],[""],[["keyboard","mouse"]],[""],[""],["sound"],[""],["motion"],["motion"],["motion"],["motion"],["mouse"],["mouse"],["mouse"],["mouse"],["keyboard"],[""],["keyboard"],[""],["keyboard"],[""],[["keyboard","sound"]],[""],["motion"],["motion"],["motion"],["motion"],[""],["keyboard"],["mouse"],[""],["motion"],["motion"],["motion"],["motion"],[""],[""],["mouse"],["mouse"],["mouse"],["mouse"],["mouse"],["mouse"],["mouse"],["mouse"],[""],[""],["keyboard"],["keyboard"],["motion"],["motion"],["sound"],["sound"],["mouse"],["mouse"],[["mouse","keyboard"]],[["mouse","keyboard"]],[["mouse","motion"]],[["mouse","motion"]],[["mouse","sound"]],[["mouse","sound"]],["keyboard"],[""],["keyboard"],[""],["sound"],["sound"],["keyboard"],[""],["keyboard"],["mouse"],["sound"],["keyboard"],["motion"],["keyboard"],[["sound","motion"]],["motion"],[["mouse","motion"]],[["keyboard","mouse"]],["motion"],[["sound","mouse"]],[["motion","keyboard"]],["motion"],[["mouse","keyboard","sound"]],[["mouse","keyboard","motion"]],[["motion","keyboard","sound"]],[["mouse","motion","sound","keyboard"]],[""],[""],[""],[""],[""],[""],[""],["sound"],[""],["sound"],["sound"],[""],["sound"],[""],["mouse"],["mouse"],["mouse"],["mouse"],["mouse"],["mouse"],["mouse"],["mouse"],[["motion","sound"]],[["motion","sound"]],[["motion","sound"]],[["motion","sound"]],[["motion","sound"]],[["motion","sound"]],[["motion","sound"]],[["motion","sound"]],["keyboard"],[""],["keyboard"],[""],["keyboard"],[""],["keyboard"],[""],[""],["keyboard"],["keyboard"],["keyboard"],["keyboard"],[""],["keyboard"],["keyboard"],[""],["keyboard"]);const Si=_t.add({value:!1},"value",{label:"Mute Music",reload:!0}).value,yi=_t.add({value:0},"value",{label:"Time Offset",reload:!0}).value,Pi=[...hi.slices.values()][0].startTime,vi=[];for(let e of hi.slices.values())for(let[t,i]of e.data.entries()){const a=i[0]instanceof Array?i[0]:[i[0]];for(let n=0;n<a.length;n++)vi.push({time:e.startTime+60*t/e.bpm-Pi,type:a[n],text:0===n?i[1]||"":"",success:!1})}Ve.load("src/player/template.html").then((e)=>{let i=document.createElement("template");i.innerHTML=e,window.customElements.define("christmasxp-yolohero-player",class extends Ze{constructor(){super({autoplay:!1})}connectedCallback(){super.connectedCallback();let e=document.importNode(i.content,!0);this.appendChild(e),this.onActionChange=new Ye,this.bpm=0,this.currentTime=0,this.action={time:0},this._previousBeatTime=0,this._currentSliceStartTime=0,this._currentSlice=null,this._volume=1,this._globalVolume=1}load(){return this._loadPromise=this._loadPromise||new Promise((e)=>{this.querySelector("#soundcloud-player")?fi.load().then(()=>{const t=SC.Widget(this.querySelector("iframe"));this._player={currentTime:0,set volume(e){t.setVolume(100*e)},play(){t.play()},pause(){t.pause()}},t.bind(SC.Widget.Events.FINISH,()=>{this.pause(),this.dispatchEvent(new Event("ended"))}),t.bind(SC.Widget.Events.READY,()=>{this.volume=Si?0:1,t.seekTo(1e3*yi),e()}),t.bind(SC.Widget.Events.PLAY_PROGRESS,(t)=>{this._player.currentTime+=.2*(.001*t.currentPosition-this._player.currentTime)})}):this.querySelector("#youtube-player")&&Ti.load().then(()=>{const t=new YT.Player("youtube-player",{height:"390",width:"640",videoId:"B-NckB3CQ9o",playerVars:{autoplay:1,start:De(Pi)},events:{onReady:()=>{Si&&t.mute(),e()}}});this._player={get currentTime(){return t.getCurrentTime?t.getCurrentTime():0},play(){t.playVideo()}}})}),this._loadPromise}set volume(e){e=Si?0:e,this._volume=e,this._player.volume=this._volume*this._globalVolume}get volume(){return this._volume}set globalVolume(e){this._globalVolume=e,this.volume=this.volume}get globalVolume(){return this._globalVolume}get actions(){return vi}play(){super.play(),this._player.play()}pause(){super.pause(),this._player.pause()}update(){if(this._player){const e=this._player.currentTime;for(let t of hi.slices.values())t.startTime<this._currentSliceStartTime||e<t.startTime||t===this._currentSlice||(this._currentSliceStartTime=t.startTime,this.bpm=t.bpm,this._previousBeatTime=this._currentSliceStartTime);this.currentTime=e-Pi,this.currentTime=t(this.currentTime,0);for(let e=0;e<this.actions.length;e++){const t=this.actions[e];t.time>=this.action.time&&t.time<=this.currentTime&&this.action!==t&&(this.action=t,this.onActionChange.dispatch({action:this.action}))}}}})}),Ve.load("src/fallback/template.html").then((e)=>{let t=document.createElement("template");t.innerHTML=e,window.customElements.define("christmasxp-yolohero-fallback",class extends HTMLElement{connectedCallback(){let e=document.importNode(t.content,!0);this.appendChild(e),this.classList.add(Oe.mobile?"mobile":"features")}})});class Ai{constructor({player:e}={}){this.webcam=null,this._player=e,this._pointer=gt.get(),this._actions=new Set(e.actions),this._currentActions=new Set,this.onAction=new Ye,this.onActionComplete=new Ye,it.addEventListener("keydown",this.onKeyDown.bind(this)),this._pointer.onDown.add(this.onPointerDown.bind(this))}onPointerDown(){for(let e of this._currentActions)"click"===e.type&&(e.success=!0,this._currentActions.delete(e),this.onActionComplete.dispatch({action:e}))}onKeyDown(){this.onAction.dispatch({type:"keyboard"});for(let e of this._currentActions)"keyboard"===e.type&&(e.success=!0,this._currentActions.delete(e),this._actions.delete(e),this.onActionComplete.dispatch({action:e}))}update(){for(let e of this._actions)e.type&&this._player.bpm&&a(e.time-this._player.currentTime)<30/this._player.bpm&&this._currentActions.add(e);let e=!1,t=!1;this.webcam&&(e=.3<this.webcam.volume,e&&this.onAction.dispatch({type:"sound"}),t=.5<this.webcam.motionRatio,t&&this.onAction.dispatch({type:"motion"}));const i=this._pointer.velocity.x&&this._pointer.velocity.y;i&&this.onAction.dispatch({type:"mouse"});for(let a of this._currentActions)this._player.currentTime-a.time>30/this._player.bpm&&(this._currentActions.delete(a),this._actions.delete(a),!a.success&&this.onActionComplete.dispatch({action:a})),"sound"===a.type&&e&&(a.success=!0,this.onActionComplete.dispatch({action:a}),this._currentActions.delete(a),this._actions.delete(a)),"motion"===a.type&&t&&(a.success=!0,this.onActionComplete.dispatch({action:a}),this._currentActions.delete(a),this._actions.delete(a)),"mouse"===a.type&&i&&(a.success=!0,this.onActionComplete.dispatch({action:a}),this._currentActions.delete(a),this._actions.delete(a))}}_t.add(Ke,"muted",{label:"Mute Sounds"});const xi=["173858__jivatma07__j1bonus-mono","213149__radiy__8bit-style-bonus-effect","253172__suntemple__retro-bonus-pickup-sfx","253177__suntemple__retro-accomplished-sfx","274177__littlerobotsoundfactory__jingle-win-synth-03","325805__wagna__collect","333489__robinhood76__06276-cash-bonus","341984__unadamlar__winning","345297__scrampunk__itemize","345299__scrampunk__okay"],Ci=["159408__noirenex__life-lost-game-over","333785__projectsu012__8-bit-failure-sound","350982__cabled-mess__lose-c-06","404743__owlstorm__retro-video-game-sfx-fail","wilhelm"];class Mi{constructor({actionsDetector:e}){for(let t of Ci)new Ke({src:`src/main/sounds/fail/${t}.mp3`});for(let t of xi)new Ke({src:`src/main/sounds/success/${t}.mp3`,volume:.3});e.onActionComplete.add(this.onActionComplete.bind(this))}onActionComplete({action:e}){const t=e.success?xi:Ci,i=Ke.get(t[De(Math.random()*t.length)]);i.stop(),i.play()}}_t.visible=/\bgui\b/.test(window.location.search),Ve.load(["src/main/template.html","src/intro/template.html","src/outro/template.html","src/player/template.html","src/calgary_script.woff2"]).then(([e])=>{let t=document.createElement("template");t.innerHTML=e,window.customElements.define("christmasxp-yolohero-main",class extends Ze{connectedCallback(){if(Oe.mobile||!window.WebGL2RenderingContext)return void(this.innerHTML="<christmasxp-yolohero-fallback></christmasxp-yolohero-fallback>");super.connectedCallback();let e=document.importNode(t.content,!0);this.appendChild(e),this.score=0,this.intro=document.querySelector("christmasxp-yolohero-intro"),this.outro=document.querySelector("christmasxp-yolohero-outro"),this.player=document.querySelector("christmasxp-yolohero-player"),this._actionsDetector=new Ai({player:this.player}),this._actionsDetector.onActionComplete.add(this.onActionComplete.bind(this)),this.webgl=document.querySelector("christmasxp-yolohero-webgl"),this.webgl.player=this.player,this.webgl.actionsDetector=this._actionsDetector,new Mi({actionsDetector:this._actionsDetector}),Promise.all([this.player.load(),this.webgl.load()]).then(()=>{this._actionsDetector.webcam=this.webgl.webcam,this.intro.loading=!1,this.player.addEventListener("ended",this.onPlayerEnded.bind(this))}),this.intro.addEventListener("close",()=>{this.player.load().then(()=>{this.player.play(),TweenLite.fromTo(this.player,5,{globalVolume:0},{globalVolume:1})})})}onPlayerEnded(){this.outro.score=this.score,this.outro.visible=!0}onActionComplete({action:e}){return e.success?void(this.score+=10,this.webgl.score=this.score):(TweenLite.to(this.player,.2,{volume:.3}),void TweenLite.to(this.player,1,{volume:1,delay:.5}))}update(){this._actionsDetector.update()}})})}}})})(function(e){"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&module.exports&&"function"==typeof require?module.exports=e():e()});