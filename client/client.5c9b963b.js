function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function s(e){e.forEach(n)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e,n,r){return e[1]?t({},t(n.$$scope.ctx,e[1](r?r(n):{}))):n.$$scope.ctx}function l(e,t){e.appendChild(t)}function i(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode.removeChild(e)}function f(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function p(e){return document.createElement(e)}function m(e){return document.createTextNode(e)}function h(){return m(" ")}function d(){return m("")}function g(e){return Array.from(e.childNodes)}function $(e,t,n,r){for(let r=0;r<e.length;r+=1){const s=e[r];if(s.nodeName===t){for(let e=0;e<s.attributes.length;e+=1){const t=s.attributes[e];n[t.name]||s.removeAttribute(t.name)}return e.splice(r,1)[0]}}return r?function(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}(t):p(t)}function v(e,t){for(let n=0;n<e.length;n+=1){const r=e[n];if(3===r.nodeType)return r.data=t,e.splice(n,1)[0]}return m(t)}function y(e,t){t=""+t,e.data!==t&&(e.data=t)}let b;function E(e){b=e}function _(){if(!b)throw new Error("Function called outside component initialization");return b}const x=[],w=Promise.resolve();let S=!1;const N=[],R=[],P=[];function A(e){R.push(e)}function j(){const e=new Set;do{for(;x.length;){const e=x.shift();E(e),L(e.$$)}for(;N.length;)N.shift()();for(;R.length;){const t=R.pop();e.has(t)||(t(),e.add(t))}}while(x.length);for(;P.length;)P.pop()();S=!1}function L(e){e.fragment&&(e.update(e.dirty),s(e.before_render),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_render.forEach(A))}let q;function C(){q={remaining:0,callbacks:[]}}function k(){q.remaining||s(q.callbacks)}function O(e){q.callbacks.push(e)}function U(e,t){const n={},r={},s={$$scope:1};let o=e.length;for(;o--;){const a=e[o],c=t[o];if(c){for(const e in a)e in c||(r[e]=1);for(const e in c)s[e]||(n[e]=c[e],s[e]=1);e[o]=c}else for(const e in a)s[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function D(e,t,r){const{fragment:a,on_mount:c,on_destroy:l,after_render:i}=e.$$;a.m(t,r),A(()=>{const t=c.map(n).filter(o);l?l.push(...t):s(t),e.$$.on_mount=[]}),i.forEach(A)}function I(e,t){e.$$.dirty||(x.push(e),S||(S=!0,w.then(j)),e.$$.dirty=r()),e.$$.dirty[t]=!0}function B(t,n,o,a,c,l){const i=b;E(t);const u=n.props||{},f=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(i?i.$$.context:[]),callbacks:r(),dirty:null};let p=!1;f.ctx=o?o(t,u,(e,n)=>{f.ctx&&c(f.ctx[e],f.ctx[e]=n)&&(f.bound[e]&&f.bound[e](n),p&&I(t,e))}):u,f.update(),p=!0,s(f.before_render),f.fragment=a(f.ctx),n.target&&(n.hydrate?f.fragment.l(g(n.target)):f.fragment.c(),n.intro&&t.$$.fragment.i&&t.$$.fragment.i(),D(t,n.target,n.anchor),j()),E(i)}class H{$destroy(){var t,n;n=!0,(t=this).$$&&(s(t.$$.on_destroy),t.$$.fragment.d(n),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={}),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function T(t,n=e){let r;const s=[];function o(e){if(a(t,e)){if(t=e,!r)return;s.forEach(e=>e[1]()),s.forEach(e=>e[0](t))}}return{set:o,update:function(e){o(e(t))},subscribe:function(a,c=e){const l=[a,c];return s.push(l),1===s.length&&(r=n(o)||e),a(t),()=>{const e=s.indexOf(l);-1!==e&&s.splice(e,1),0===s.length&&r()}}}}const V={},J=()=>({});function F(t){var n,r;return{c(){n=p("a"),r=p("img"),this.h()},l(e){var t=g(n=$(e,"A",{href:!0},!1));g(r=$(t,"IMG",{alt:!0,src:!0,class:!0},!1)).forEach(u),t.forEach(u),this.h()},h(){r.alt="Zen",r.src="coloringknot.svg",r.className="svelte-nsstmh",n.href="/"},m(e,t){i(e,n,t),l(n,r)},p:e,i:e,o:e,d(e){e&&u(n)}}}class K extends H{constructor(e){super(),B(this,e,null,F,a,[])}}function M(t){var n,r,s,o,a,c,f,d,y,b,E,_;return{c(){n=p("nav"),r=p("a"),s=m("home"),a=h(),c=p("a"),f=m("about"),y=h(),b=p("a"),E=m("blog"),this.h()},l(e){var t=g(n=$(e,"NAV",{class:!0},!1)),o=g(r=$(t,"A",{class:!0,href:!0},!1));s=v(o,"home"),o.forEach(u),a=v(t,"\n  ");var l=g(c=$(t,"A",{class:!0,href:!0},!1));f=v(l,"about"),l.forEach(u),y=v(t,"\n  ");var i=g(b=$(t,"A",{rel:!0,class:!0,href:!0},!1));E=v(i,"blog"),i.forEach(u),t.forEach(u),this.h()},h(){r.className=o=(void 0===t.segment?"selected":"")+" svelte-3gxyji",r.href=".",c.className=d=("about"===t.segment?"selected":"")+" svelte-3gxyji",c.href="about",b.rel="prefetch",b.className=_=("blog"===t.segment?"selected":"")+" svelte-3gxyji",b.href="blog",n.className="svelte-3gxyji"},m(e,t){i(e,n,t),l(n,r),l(r,s),l(n,a),l(n,c),l(c,f),l(n,y),l(n,b),l(b,E)},p(e,t){e.segment&&o!==(o=(void 0===t.segment?"selected":"")+" svelte-3gxyji")&&(r.className=o),e.segment&&d!==(d=("about"===t.segment?"selected":"")+" svelte-3gxyji")&&(c.className=d),e.segment&&_!==(_=("blog"===t.segment?"selected":"")+" svelte-3gxyji")&&(b.className=_)},i:e,o:e,d(e){e&&u(n)}}}function Y(e,t,n){let{segment:r}=t;return e.$set=e=>{"segment"in e&&n("segment",r=e.segment)},{segment:r}}class Z extends H{constructor(e){super(),B(this,e,Y,M,a,["segment"])}}function G(e){var t,n,r,s=new K({}),o=new Z({props:{segment:e.segment}});return{c(){t=p("header"),s.$$.fragment.c(),n=h(),o.$$.fragment.c(),this.h()},l(e){var r=g(t=$(e,"HEADER",{class:!0},!1));s.$$.fragment.l(r),n=v(r,"\n  "),o.$$.fragment.l(r),r.forEach(u),this.h()},h(){t.className="svelte-y9ah38"},m(e,a){i(e,t,a),D(s,t,null),l(t,n),D(o,t,null),r=!0},p(e,t){var n={};e.segment&&(n.segment=t.segment),o.$set(n)},i(e){r||(s.$$.fragment.i(e),o.$$.fragment.i(e),r=!0)},o(e){s.$$.fragment.o(e),o.$$.fragment.o(e),r=!1},d(e){e&&u(t),s.$destroy(),o.$destroy()}}}function z(e,t,n){let{segment:r}=t;return e.$set=e=>{"segment"in e&&n("segment",r=e.segment)},{segment:r}}class W extends H{constructor(e){super(),B(this,e,z,G,a,["segment"])}}function X(e){var n,r,s,o,a,f,d,y,b,E,_,x,w,S=(new Date).getFullYear(),N=new W({props:{segment:e.segment}});const R=e.$$slots.default,P=function(e,t,n){if(e){const r=c(e,t,n);return e[0](r)}}(R,e,null);return{c(){n=p("div"),N.$$.fragment.c(),r=h(),s=p("main"),P&&P.c(),o=h(),a=p("footer"),f=p("span"),d=m("© "),y=m(S),b=m(" Zenohm's Blog.\n      Powered by "),E=p("a"),_=m("Sapper"),x=m("."),this.h()},l(e){var t=g(n=$(e,"DIV",{class:!0},!1));N.$$.fragment.l(t),r=v(t,"\n\n  ");var c=g(s=$(t,"MAIN",{class:!0},!1));P&&P.l(c),c.forEach(u),o=v(t,"\n\n  ");var l=g(a=$(t,"FOOTER",{class:!0},!1)),i=g(f=$(l,"SPAN",{},!1));d=v(i,"© "),y=v(i,S),b=v(i," Zenohm's Blog.\n      Powered by ");var p=g(E=$(i,"A",{href:!0,target:!0},!1));_=v(p,"Sapper"),p.forEach(u),x=v(i,"."),i.forEach(u),l.forEach(u),t.forEach(u),this.h()},h(){s.className="svelte-v25qrq",E.href="https://sapper.svelte.dev",E.target="_blank",a.className="svelte-v25qrq",n.className="layout svelte-v25qrq"},m(e,t){i(e,n,t),D(N,n,null),l(n,r),l(n,s),P&&P.m(s,null),l(n,o),l(n,a),l(a,f),l(f,d),l(f,y),l(f,b),l(f,E),l(E,_),l(f,x),w=!0},p(e,n){var r={};e.segment&&(r.segment=n.segment),N.$set(r),P&&P.p&&e.$$scope&&P.p(function(e,n,r,s){return e[1]?t({},t(n.$$scope.changed||{},e[1](s?s(r):{}))):n.$$scope.changed||{}}(R,n,e,null),c(R,n,null))},i(e){w||(N.$$.fragment.i(e),P&&P.i&&P.i(e),w=!0)},o(e){N.$$.fragment.o(e),P&&P.o&&P.o(e),w=!1},d(e){e&&u(n),N.$destroy(),P&&P.d(e)}}}function Q(e,t,n){let{segment:r}=t,{$$slots:s={},$$scope:o}=t;return e.$set=e=>{"segment"in e&&n("segment",r=e.segment),"$$scope"in e&&n("$$scope",o=e.$$scope)},{segment:r,$$slots:s,$$scope:o}}class ee extends H{constructor(e){super(),B(this,e,Q,X,a,["segment"])}}function te(e){var t,n,r=e.error.stack;return{c(){t=p("pre"),n=m(r)},l(e){var s=g(t=$(e,"PRE",{},!1));n=v(s,r),s.forEach(u)},m(e,r){i(e,t,r),l(t,n)},p(e,t){e.error&&r!==(r=t.error.stack)&&y(n,r)},d(e){e&&u(t)}}}function ne(t){var n,r,s,o,a,c,f,b,E,_=t.error.message;document.title=n=t.status;var x=t.dev&&t.error.stack&&te(t);return{c(){r=h(),s=p("h1"),o=m(t.status),a=h(),c=p("p"),f=m(_),b=h(),x&&x.c(),E=d(),this.h()},l(e){r=v(e,"\n\n");var n=g(s=$(e,"H1",{class:!0},!1));o=v(n,t.status),n.forEach(u),a=v(e,"\n\n");var l=g(c=$(e,"P",{class:!0},!1));f=v(l,_),l.forEach(u),b=v(e,"\n\n"),x&&x.l(e),E=d(),this.h()},h(){s.className="svelte-8od9u6",c.className="svelte-8od9u6"},m(e,t){i(e,r,t),i(e,s,t),l(s,o),i(e,a,t),i(e,c,t),l(c,f),i(e,b,t),x&&x.m(e,t),i(e,E,t)},p(e,t){e.status&&n!==(n=t.status)&&(document.title=n),e.status&&y(o,t.status),e.error&&_!==(_=t.error.message)&&y(f,_),t.dev&&t.error.stack?x?x.p(e,t):((x=te(t)).c(),x.m(E.parentNode,E)):x&&(x.d(1),x=null)},i:e,o:e,d(e){e&&(u(r),u(s),u(a),u(c),u(b)),x&&x.d(e),e&&u(E)}}}function re(e,t,n){let{status:r,error:s}=t;return e.$set=e=>{"status"in e&&n("status",r=e.status),"error"in e&&n("error",s=e.error)},{status:r,error:s,dev:false}}class se extends H{constructor(e){super(),B(this,e,re,ne,a,["status","error"])}}function oe(e){var n,r,s=[e.level1.props],o=e.level1.component;function a(e){let n={};for(var r=0;r<s.length;r+=1)n=t(n,s[r]);return{props:n}}if(o)var c=new o(a());return{c(){c&&c.$$.fragment.c(),n=d()},l(e){c&&c.$$.fragment.l(e),n=d()},m(e,t){c&&D(c,e,t),i(e,n,t),r=!0},p(e,t){var r=e.level1?U(s,[t.level1.props]):{};if(o!==(o=t.level1.component)){if(c){C();const e=c;O(()=>{e.$destroy()}),e.$$.fragment.o(1),k()}o?((c=new o(a())).$$.fragment.c(),c.$$.fragment.i(1),D(c,n.parentNode,n)):c=null}else o&&c.$set(r)},i(e){r||(c&&c.$$.fragment.i(e),r=!0)},o(e){c&&c.$$.fragment.o(e),r=!1},d(e){e&&u(n),c&&c.$destroy(e)}}}function ae(e){var t,n=new se({props:{error:e.error,status:e.status}});return{c(){n.$$.fragment.c()},l(e){n.$$.fragment.l(e)},m(e,r){D(n,e,r),t=!0},p(e,t){var r={};e.error&&(r.error=t.error),e.status&&(r.status=t.status),n.$set(r)},i(e){t||(n.$$.fragment.i(e),t=!0)},o(e){n.$$.fragment.o(e),t=!1},d(e){n.$destroy(e)}}}function ce(e){var t,n,r,s,o=[ae,oe],a=[];function c(e){return e.error?0:1}return t=c(e),n=a[t]=o[t](e),{c(){n.c(),r=d()},l(e){n.l(e),r=d()},m(e,n){a[t].m(e,n),i(e,r,n),s=!0},p(e,s){var l=t;(t=c(s))===l?a[t].p(e,s):(C(),O(()=>{a[l].d(1),a[l]=null}),n.o(1),k(),(n=a[t])||(n=a[t]=o[t](s)).c(),n.i(1),n.m(r.parentNode,r))},i(e){s||(n&&n.i(),s=!0)},o(e){n&&n.o(),s=!1},d(e){a[t].d(e),e&&u(r)}}}function le(e){var n,r=[{segment:e.segments[0]},e.level0.props];let s={$$slots:{default:[ce]},$$scope:{ctx:e}};for(var o=0;o<r.length;o+=1)s=t(s,r[o]);var a=new ee({props:s});return{c(){a.$$.fragment.c()},l(e){a.$$.fragment.l(e)},m(e,t){D(a,e,t),n=!0},p(e,t){var n=e.segments||e.level0?U(r,[e.segments&&{segment:t.segments[0]},e.level0&&t.level0.props]):{};(e.$$scope||e.error||e.status||e.level1)&&(n.$$scope={changed:e,ctx:t}),a.$set(n)},i(e){n||(a.$$.fragment.i(e),n=!0)},o(e){a.$$.fragment.o(e),n=!1},d(e){a.$destroy(e)}}}function ie(e,t,n){let{stores:r,error:s,status:o,segments:a,level0:c,level1:l=null,notify:i}=t;var u,f,p;return u=i,_().$$.after_render.push(u),f=V,p=r,_().$$.context.set(f,p),e.$set=e=>{"stores"in e&&n("stores",r=e.stores),"error"in e&&n("error",s=e.error),"status"in e&&n("status",o=e.status),"segments"in e&&n("segments",a=e.segments),"level0"in e&&n("level0",c=e.level0),"level1"in e&&n("level1",l=e.level1),"notify"in e&&n("notify",i=e.notify)},{stores:r,error:s,status:o,segments:a,level0:c,level1:l,notify:i}}class ue extends H{constructor(e){super(),B(this,e,ie,le,a,["stores","error","status","segments","level0","level1","notify"])}}const fe=[/^\/blog\.json$/,/^\/blog\/posts\/hello-world\/?$/,/^\/blog\/([^\/]+?)\.json$/],pe=[{js:()=>import("./index.785e1639.js"),css:[]},{js:()=>import("./about.d662014d.js"),css:[]},{js:()=>import("./index.939d7e07.js"),css:[]},{js:()=>import("./[slug].0987c2e1.js"),css:[]}],me=(he=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:e=>({slug:he(e[1])})}]}]);var he;const de="undefined"!=typeof __SAPPER__&&__SAPPER__;let ge,$e,ve,ye=!1,be=[],Ee="{}";const _e={page:function(e){const t=T(e);let n=!0;return{notify:function(){n=!0,t.update(e=>e)},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe(t=>{(void 0===r||n&&t!==r)&&e(r=t)})}}}({}),preloading:T(null),session:T(de&&de.session)};let xe,we;_e.session.subscribe(async e=>{if(xe=e,!ye)return;we=!0;const t=qe(new URL(location.href)),n=$e={},{redirect:r,props:s,branch:o}=await Ue(t);n===$e&&await Oe(r,o,s,t.page)});let Se,Ne=null;let Re,Pe=1;const Ae="undefined"!=typeof history?history:{pushState:(e,t,n)=>{},replaceState:(e,t,n)=>{},scrollRestoration:""},je={};function Le(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[n]&&(t[n]=[t[n]]),"object"==typeof t[n]?t[n].push(r):t[n]=r}),t}function qe(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(de.baseUrl))return null;let t=e.pathname.slice(de.baseUrl.length);if(""===t&&(t="/"),!fe.some(e=>e.test(t)))for(let n=0;n<me.length;n+=1){const r=me[n],s=r.pattern.exec(t);if(s){const n=Le(e.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:t,query:n,params:a};return{href:e.href,route:r,match:s,page:c}}}}function Ce(){return{x:pageXOffset,y:pageYOffset}}async function ke(e,t,n,r){if(t)Re=t;else{const e=Ce();je[Re]=e,t=Re=++Pe,je[Re]=n?e:{x:0,y:0}}Re=t,ge&&_e.preloading.set(!0);const s=Ne&&Ne.href===e.href?Ne.promise:Ue(e);Ne=null;const o=$e={},{redirect:a,props:c,branch:l}=await s;if(o===$e&&(await Oe(a,l,c,e.page),document.activeElement&&document.activeElement.blur(),!n)){let e=je[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top+scrollY})}je[Re]=e,e&&scrollTo(e.x,e.y)}}async function Oe(e,t,n,r){if(e)return function(e,t={replaceState:!1}){const n=qe(new URL(e,document.baseURI));return n?(Ae[t.replaceState?"replaceState":"pushState"]({id:Re},"",e),ke(n,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(_e.page.set(r),_e.preloading.set(!1),ge)ge.$set(n);else{n.stores={page:{subscribe:_e.page.subscribe},preloading:{subscribe:_e.preloading.subscribe},session:_e.session},n.level0={props:await ve},n.notify=_e.page.notify;const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)Ie(e.nextSibling);Ie(e),Ie(t)}ge=new ue({target:Se,props:n,hydrate:!0})}be=t,Ee=JSON.stringify(r.query),ye=!0,we=!1}async function Ue(e){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(s&&(s.statusCode!==e||s.location!==t))throw new Error("Conflicting redirects");s={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};let c;ve||(ve=de.preloaded[0]||J.call(a,{host:n.host,path:n.path,query:n.query,params:{}},xe));let l=1;try{const s=JSON.stringify(n.query),i=t.pattern.exec(n.path);let u=!1;c=await Promise.all(t.parts.map(async(t,c)=>{const f=r[c];if(function(e,t,n,r){if(r!==Ee)return!0;const s=be[e];return!!s&&(t!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(c,f,i,s)&&(u=!0),o.segments[l]=r[c+1],!t)return{segment:f};const p=l++;if(!we&&!u&&be[c]&&be[c].part===t.i)return be[c];u=!1;const{default:m,preload:h}=await function(e){const t="string"==typeof e.css?[]:e.css.map(De);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(pe[t.i]);let d;return d=ye||!de.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},xe):{}:de.preloaded[c+1],o["level"+p]={component:m,props:d,segment:f,match:i,part:t.i}}))}catch(e){o.error=e,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}function De(e){const t="client/"+e;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=()=>e(),r.onerror=n,document.head.appendChild(r)})}function Ie(e){e.parentNode.removeChild(e)}function Be(e){const t=qe(new URL(e,document.baseURI));if(t)return Ne&&e===Ne.href||function(e,t){Ne={href:e,promise:t}}(e,Ue(t)),Ne.promise}let He;function Te(e){clearTimeout(He),He=setTimeout(()=>{Ve(e)},20)}function Ve(e){const t=Fe(e.target);t&&"prefetch"===t.rel&&Be(t.href)}function Je(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=Fe(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=qe(s);if(o){ke(o,null,t.hasAttribute("sapper-noscroll"),s.hash),e.preventDefault(),Ae.pushState({id:Re},"",s.href)}}function Fe(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function Ke(e){if(je[Re]=Ce(),e.state){const t=qe(new URL(location.href));t?ke(t,e.state.id):location.href=location.href}else Pe=Pe+1,function(e){Re=e}(Pe),Ae.replaceState({id:Re},"",location.href)}var Me;Me={target:document.querySelector("#sapper")},"scrollRestoration"in Ae&&(Ae.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Ae.scrollRestoration="auto"}),addEventListener("load",()=>{Ae.scrollRestoration="manual"}),function(e){Se=e}(Me.target),addEventListener("click",Je),addEventListener("popstate",Ke),addEventListener("touchstart",Ve),addEventListener("mousemove",Te),Promise.resolve().then(()=>{const{hash:e,href:t}=location;Ae.replaceState({id:Pe},"",t);const n=new URL(location.href);if(de.error)return function(e){const{host:t,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=de;ve||(ve=o&&o[0]),Oe(null,[],{error:c,status:a,session:s,level0:{props:ve},level1:{props:{status:a,error:c},component:se},segments:o},{host:t,path:n,query:Le(r),params:{}})}();const r=qe(n);return r?ke(r,Pe,!0,e):void 0});export{H as S,h as a,$ as b,v as c,g as d,p as e,u as f,i as g,l as h,B as i,y as j,f as k,D as m,e as n,a as s,m as t};
