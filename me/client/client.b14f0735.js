function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function s(e){e.forEach(n)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e,n,r){return e[1]?t({},t(n.$$scope.ctx,e[1](r?r(n):{}))):n.$$scope.ctx}function l(e,t){e.appendChild(t)}function i(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode.removeChild(e)}function f(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function p(e){return document.createElement(e)}function m(e){return document.createTextNode(e)}function h(){return m(" ")}function d(){return m("")}function g(e){return Array.from(e.childNodes)}function $(e,t,n,r){for(let r=0;r<e.length;r+=1){const s=e[r];if(s.nodeName===t){for(let e=0;e<s.attributes.length;e+=1){const t=s.attributes[e];n[t.name]||s.removeAttribute(t.name)}return e.splice(r,1)[0]}}return r?function(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}(t):p(t)}function v(e,t){for(let n=0;n<e.length;n+=1){const r=e[n];if(3===r.nodeType)return r.data=t,e.splice(n,1)[0]}return m(t)}function b(e,t){t=""+t,e.data!==t&&(e.data=t)}let y;function w(e){y=e}function E(){if(!y)throw new Error("Function called outside component initialization");return y}const _=[],S=Promise.resolve();let x=!1;const N=[],R=[],P=[];function A(e){R.push(e)}function C(){const e=new Set;do{for(;_.length;){const e=_.shift();w(e),L(e.$$)}for(;N.length;)N.shift()();for(;R.length;){const t=R.pop();e.has(t)||(t(),e.add(t))}}while(_.length);for(;P.length;)P.pop()();x=!1}function L(e){e.fragment&&(e.update(e.dirty),s(e.before_render),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_render.forEach(A))}let q;function j(){q={remaining:0,callbacks:[]}}function k(){q.remaining||s(q.callbacks)}function O(e){q.callbacks.push(e)}function U(e,t){const n={},r={},s={$$scope:1};let o=e.length;for(;o--;){const a=e[o],c=t[o];if(c){for(const e in a)e in c||(r[e]=1);for(const e in c)s[e]||(n[e]=c[e],s[e]=1);e[o]=c}else for(const e in a)s[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function D(e,t,r){const{fragment:a,on_mount:c,on_destroy:l,after_render:i}=e.$$;a.m(t,r),A(()=>{const t=c.map(n).filter(o);l?l.push(...t):s(t),e.$$.on_mount=[]}),i.forEach(A)}function I(e,t){e.$$.dirty||(_.push(e),x||(x=!0,S.then(C)),e.$$.dirty=r()),e.$$.dirty[t]=!0}function T(t,n,o,a,c,l){const i=y;w(t);const u=n.props||{},f=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(i?i.$$.context:[]),callbacks:r(),dirty:null};let p=!1;f.ctx=o?o(t,u,(e,n)=>{f.ctx&&c(f.ctx[e],f.ctx[e]=n)&&(f.bound[e]&&f.bound[e](n),p&&I(t,e))}):u,f.update(),p=!0,s(f.before_render),f.fragment=a(f.ctx),n.target&&(n.hydrate?f.fragment.l(g(n.target)):f.fragment.c(),n.intro&&t.$$.fragment.i&&t.$$.fragment.i(),D(t,n.target,n.anchor),C()),w(i)}class B{$destroy(){var t,n;n=!0,(t=this).$$&&(s(t.$$.on_destroy),t.$$.fragment.d(n),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={}),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function H(t,n=e){let r;const s=[];function o(e){if(a(t,e)){if(t=e,!r)return;s.forEach(e=>e[1]()),s.forEach(e=>e[0](t))}}return{set:o,update:function(e){o(e(t))},subscribe:function(a,c=e){const l=[a,c];return s.push(l),1===s.length&&(r=n(o)||e),a(t),()=>{const e=s.indexOf(l);-1!==e&&s.splice(e,1),0===s.length&&r()}}}}const F={},M=()=>({});function V(t){var n,r;return{c(){n=p("a"),r=p("img"),this.h()},l(e){var t=g(n=$(e,"A",{href:!0},!1));g(r=$(t,"IMG",{alt:!0,src:!0,class:!0},!1)).forEach(u),t.forEach(u),this.h()},h(){r.alt="Sapper",r.src="logo-192.png",r.className="svelte-nsstmh",n.href="/"},m(e,t){i(e,n,t),l(n,r)},p:e,i:e,o:e,d(e){e&&u(n)}}}class Y extends B{constructor(e){super(),T(this,e,null,V,a,[])}}function J(t){var n,r,s,o,a,c,f,d,b,y,w,E;return{c(){n=p("nav"),r=p("a"),s=m("home"),a=h(),c=p("a"),f=m("about"),b=h(),y=p("a"),w=m("blog"),this.h()},l(e){var t=g(n=$(e,"NAV",{class:!0},!1)),o=g(r=$(t,"A",{class:!0,href:!0},!1));s=v(o,"home"),o.forEach(u),a=v(t,"\n  ");var l=g(c=$(t,"A",{class:!0,href:!0},!1));f=v(l,"about"),l.forEach(u),b=v(t,"\n  ");var i=g(y=$(t,"A",{rel:!0,class:!0,href:!0},!1));w=v(i,"blog"),i.forEach(u),t.forEach(u),this.h()},h(){r.className=o=(void 0===t.segment?"selected":"")+" svelte-16fnwww",r.href=".",c.className=d=("about"===t.segment?"selected":"")+" svelte-16fnwww",c.href="about",y.rel="prefetch",y.className=E=("blog"===t.segment?"selected":"")+" svelte-16fnwww",y.href="blog",n.className="svelte-16fnwww"},m(e,t){i(e,n,t),l(n,r),l(r,s),l(n,a),l(n,c),l(c,f),l(n,b),l(n,y),l(y,w)},p(e,t){e.segment&&o!==(o=(void 0===t.segment?"selected":"")+" svelte-16fnwww")&&(r.className=o),e.segment&&d!==(d=("about"===t.segment?"selected":"")+" svelte-16fnwww")&&(c.className=d),e.segment&&E!==(E=("blog"===t.segment?"selected":"")+" svelte-16fnwww")&&(y.className=E)},i:e,o:e,d(e){e&&u(n)}}}function K(e,t,n){let{segment:r}=t;return e.$set=e=>{"segment"in e&&n("segment",r=e.segment)},{segment:r}}class G extends B{constructor(e){super(),T(this,e,K,J,a,["segment"])}}function z(e){var t,n,r,s=new Y({}),o=new G({props:{segment:e.segment}});return{c(){t=p("header"),s.$$.fragment.c(),n=h(),o.$$.fragment.c(),this.h()},l(e){var r=g(t=$(e,"HEADER",{class:!0},!1));s.$$.fragment.l(r),n=v(r,"\n  "),o.$$.fragment.l(r),r.forEach(u),this.h()},h(){t.className="svelte-y9ah38"},m(e,a){i(e,t,a),D(s,t,null),l(t,n),D(o,t,null),r=!0},p(e,t){var n={};e.segment&&(n.segment=t.segment),o.$set(n)},i(e){r||(s.$$.fragment.i(e),o.$$.fragment.i(e),r=!0)},o(e){s.$$.fragment.o(e),o.$$.fragment.o(e),r=!1},d(e){e&&u(t),s.$destroy(),o.$destroy()}}}function W(e,t,n){let{segment:r}=t;return e.$set=e=>{"segment"in e&&n("segment",r=e.segment)},{segment:r}}class X extends B{constructor(e){super(),T(this,e,W,z,a,["segment"])}}function Q(e){var n,r,s,o,a,f,d,b,y,w,E,_,S,x,N,R,P=(new Date).getFullYear(),A=new X({props:{segment:e.segment}});const C=e.$$slots.default,L=function(e,t,n){if(e){const r=c(e,t,n);return e[0](r)}}(C,e,null);return{c(){n=p("div"),A.$$.fragment.c(),r=h(),s=p("main"),L&&L.c(),o=h(),a=p("footer"),f=p("span"),d=m("© "),b=m(P),y=m(" Your Blog.\n      Powered by "),w=p("a"),E=m("Sapper"),_=m(".\n      Template by "),S=p("a"),x=m("Maxi Ferreira"),N=m("."),this.h()},l(e){var t=g(n=$(e,"DIV",{class:!0},!1));A.$$.fragment.l(t),r=v(t,"\n\n  ");var c=g(s=$(t,"MAIN",{class:!0},!1));L&&L.l(c),c.forEach(u),o=v(t,"\n\n  ");var l=g(a=$(t,"FOOTER",{class:!0},!1)),i=g(f=$(l,"SPAN",{},!1));d=v(i,"© "),b=v(i,P),y=v(i," Your Blog.\n      Powered by ");var p=g(w=$(i,"A",{href:!0,target:!0},!1));E=v(p,"Sapper"),p.forEach(u),_=v(i,".\n      Template by ");var m=g(S=$(i,"A",{href:!0,target:!0},!1));x=v(m,"Maxi Ferreira"),m.forEach(u),N=v(i,"."),i.forEach(u),l.forEach(u),t.forEach(u),this.h()},h(){s.className="svelte-v25qrq",w.href="https://sapper.svelte.dev",w.target="_blank",S.href="https://www.twitter.com/Charca",S.target="_blank",a.className="svelte-v25qrq",n.className="layout svelte-v25qrq"},m(e,t){i(e,n,t),D(A,n,null),l(n,r),l(n,s),L&&L.m(s,null),l(n,o),l(n,a),l(a,f),l(f,d),l(f,b),l(f,y),l(f,w),l(w,E),l(f,_),l(f,S),l(S,x),l(f,N),R=!0},p(e,n){var r={};e.segment&&(r.segment=n.segment),A.$set(r),L&&L.p&&e.$$scope&&L.p(function(e,n,r,s){return e[1]?t({},t(n.$$scope.changed||{},e[1](s?s(r):{}))):n.$$scope.changed||{}}(C,n,e,null),c(C,n,null))},i(e){R||(A.$$.fragment.i(e),L&&L.i&&L.i(e),R=!0)},o(e){A.$$.fragment.o(e),L&&L.o&&L.o(e),R=!1},d(e){e&&u(n),A.$destroy(),L&&L.d(e)}}}function Z(e,t,n){let{segment:r}=t,{$$slots:s={},$$scope:o}=t;return e.$set=e=>{"segment"in e&&n("segment",r=e.segment),"$$scope"in e&&n("$$scope",o=e.$$scope)},{segment:r,$$slots:s,$$scope:o}}class ee extends B{constructor(e){super(),T(this,e,Z,Q,a,["segment"])}}function te(e){var t,n,r=e.error.stack;return{c(){t=p("pre"),n=m(r)},l(e){var s=g(t=$(e,"PRE",{},!1));n=v(s,r),s.forEach(u)},m(e,r){i(e,t,r),l(t,n)},p(e,t){e.error&&r!==(r=t.error.stack)&&b(n,r)},d(e){e&&u(t)}}}function ne(t){var n,r,s,o,a,c,f,y,w,E=t.error.message;document.title=n=t.status;var _=t.dev&&t.error.stack&&te(t);return{c(){r=h(),s=p("h1"),o=m(t.status),a=h(),c=p("p"),f=m(E),y=h(),_&&_.c(),w=d(),this.h()},l(e){r=v(e,"\n\n");var n=g(s=$(e,"H1",{class:!0},!1));o=v(n,t.status),n.forEach(u),a=v(e,"\n\n");var l=g(c=$(e,"P",{class:!0},!1));f=v(l,E),l.forEach(u),y=v(e,"\n\n"),_&&_.l(e),w=d(),this.h()},h(){s.className="svelte-8od9u6",c.className="svelte-8od9u6"},m(e,t){i(e,r,t),i(e,s,t),l(s,o),i(e,a,t),i(e,c,t),l(c,f),i(e,y,t),_&&_.m(e,t),i(e,w,t)},p(e,t){e.status&&n!==(n=t.status)&&(document.title=n),e.status&&b(o,t.status),e.error&&E!==(E=t.error.message)&&b(f,E),t.dev&&t.error.stack?_?_.p(e,t):((_=te(t)).c(),_.m(w.parentNode,w)):_&&(_.d(1),_=null)},i:e,o:e,d(e){e&&(u(r),u(s),u(a),u(c),u(y)),_&&_.d(e),e&&u(w)}}}function re(e,t,n){let{status:r,error:s}=t;return e.$set=e=>{"status"in e&&n("status",r=e.status),"error"in e&&n("error",s=e.error)},{status:r,error:s,dev:false}}class se extends B{constructor(e){super(),T(this,e,re,ne,a,["status","error"])}}function oe(e){var n,r,s=[e.level1.props],o=e.level1.component;function a(e){let n={};for(var r=0;r<s.length;r+=1)n=t(n,s[r]);return{props:n}}if(o)var c=new o(a());return{c(){c&&c.$$.fragment.c(),n=d()},l(e){c&&c.$$.fragment.l(e),n=d()},m(e,t){c&&D(c,e,t),i(e,n,t),r=!0},p(e,t){var r=e.level1?U(s,[t.level1.props]):{};if(o!==(o=t.level1.component)){if(c){j();const e=c;O(()=>{e.$destroy()}),e.$$.fragment.o(1),k()}o?((c=new o(a())).$$.fragment.c(),c.$$.fragment.i(1),D(c,n.parentNode,n)):c=null}else o&&c.$set(r)},i(e){r||(c&&c.$$.fragment.i(e),r=!0)},o(e){c&&c.$$.fragment.o(e),r=!1},d(e){e&&u(n),c&&c.$destroy(e)}}}function ae(e){var t,n=new se({props:{error:e.error,status:e.status}});return{c(){n.$$.fragment.c()},l(e){n.$$.fragment.l(e)},m(e,r){D(n,e,r),t=!0},p(e,t){var r={};e.error&&(r.error=t.error),e.status&&(r.status=t.status),n.$set(r)},i(e){t||(n.$$.fragment.i(e),t=!0)},o(e){n.$$.fragment.o(e),t=!1},d(e){n.$destroy(e)}}}function ce(e){var t,n,r,s,o=[ae,oe],a=[];function c(e){return e.error?0:1}return t=c(e),n=a[t]=o[t](e),{c(){n.c(),r=d()},l(e){n.l(e),r=d()},m(e,n){a[t].m(e,n),i(e,r,n),s=!0},p(e,s){var l=t;(t=c(s))===l?a[t].p(e,s):(j(),O(()=>{a[l].d(1),a[l]=null}),n.o(1),k(),(n=a[t])||(n=a[t]=o[t](s)).c(),n.i(1),n.m(r.parentNode,r))},i(e){s||(n&&n.i(),s=!0)},o(e){n&&n.o(),s=!1},d(e){a[t].d(e),e&&u(r)}}}function le(e){var n,r=[{segment:e.segments[0]},e.level0.props];let s={$$slots:{default:[ce]},$$scope:{ctx:e}};for(var o=0;o<r.length;o+=1)s=t(s,r[o]);var a=new ee({props:s});return{c(){a.$$.fragment.c()},l(e){a.$$.fragment.l(e)},m(e,t){D(a,e,t),n=!0},p(e,t){var n=e.segments||e.level0?U(r,[e.segments&&{segment:t.segments[0]},e.level0&&t.level0.props]):{};(e.$$scope||e.error||e.status||e.level1)&&(n.$$scope={changed:e,ctx:t}),a.$set(n)},i(e){n||(a.$$.fragment.i(e),n=!0)},o(e){a.$$.fragment.o(e),n=!1},d(e){a.$destroy(e)}}}function ie(e,t,n){let{stores:r,error:s,status:o,segments:a,level0:c,level1:l=null,notify:i}=t;var u,f,p;return u=i,E().$$.after_render.push(u),f=F,p=r,E().$$.context.set(f,p),e.$set=e=>{"stores"in e&&n("stores",r=e.stores),"error"in e&&n("error",s=e.error),"status"in e&&n("status",o=e.status),"segments"in e&&n("segments",a=e.segments),"level0"in e&&n("level0",c=e.level0),"level1"in e&&n("level1",l=e.level1),"notify"in e&&n("notify",i=e.notify)},{stores:r,error:s,status:o,segments:a,level0:c,level1:l,notify:i}}class ue extends B{constructor(e){super(),T(this,e,ie,le,a,["stores","error","status","segments","level0","level1","notify"])}}const fe=[/^\/blog\.json$/,/^\/blog\/posts\/markdown-test\/?$/,/^\/blog\/posts\/hello-world\/?$/,/^\/blog\/([^\/]+?)\.json$/],pe=[{js:()=>import("./index.ae0da6f6.js"),css:[]},{js:()=>import("./about.65cf9ef4.js"),css:[]},{js:()=>import("./index.8d32bf65.js"),css:[]},{js:()=>import("./[slug].903e59cb.js"),css:[]}],me=(he=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:e=>({slug:he(e[1])})}]}]);var he;const de="undefined"!=typeof __SAPPER__&&__SAPPER__;let ge,$e,ve,be=!1,ye=[],we="{}";const Ee={page:function(e){const t=H(e);let n=!0;return{notify:function(){n=!0,t.update(e=>e)},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe(t=>{(void 0===r||n&&t!==r)&&e(r=t)})}}}({}),preloading:H(null),session:H(de&&de.session)};let _e,Se;Ee.session.subscribe(async e=>{if(_e=e,!be)return;Se=!0;const t=qe(new URL(location.href)),n=$e={},{redirect:r,props:s,branch:o}=await Ue(t);n===$e&&await Oe(r,o,s,t.page)});let xe,Ne=null;let Re,Pe=1;const Ae="undefined"!=typeof history?history:{pushState:(e,t,n)=>{},replaceState:(e,t,n)=>{},scrollRestoration:""},Ce={};function Le(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[n]&&(t[n]=[t[n]]),"object"==typeof t[n]?t[n].push(r):t[n]=r}),t}function qe(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(de.baseUrl))return null;let t=e.pathname.slice(de.baseUrl.length);if(""===t&&(t="/"),!fe.some(e=>e.test(t)))for(let n=0;n<me.length;n+=1){const r=me[n],s=r.pattern.exec(t);if(s){const n=Le(e.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:t,query:n,params:a};return{href:e.href,route:r,match:s,page:c}}}}function je(){return{x:pageXOffset,y:pageYOffset}}async function ke(e,t,n,r){if(t)Re=t;else{const e=je();Ce[Re]=e,t=Re=++Pe,Ce[Re]=n?e:{x:0,y:0}}Re=t,ge&&Ee.preloading.set(!0);const s=Ne&&Ne.href===e.href?Ne.promise:Ue(e);Ne=null;const o=$e={},{redirect:a,props:c,branch:l}=await s;if(o===$e&&(await Oe(a,l,c,e.page),document.activeElement&&document.activeElement.blur(),!n)){let e=Ce[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top+scrollY})}Ce[Re]=e,e&&scrollTo(e.x,e.y)}}async function Oe(e,t,n,r){if(e)return function(e,t={replaceState:!1}){const n=qe(new URL(e,document.baseURI));return n?(Ae[t.replaceState?"replaceState":"pushState"]({id:Re},"",e),ke(n,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(Ee.page.set(r),Ee.preloading.set(!1),ge)ge.$set(n);else{n.stores={page:{subscribe:Ee.page.subscribe},preloading:{subscribe:Ee.preloading.subscribe},session:Ee.session},n.level0={props:await ve},n.notify=Ee.page.notify;const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)Ie(e.nextSibling);Ie(e),Ie(t)}ge=new ue({target:xe,props:n,hydrate:!0})}ye=t,we=JSON.stringify(r.query),be=!0,Se=!1}async function Ue(e){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(s&&(s.statusCode!==e||s.location!==t))throw new Error("Conflicting redirects");s={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};let c;ve||(ve=de.preloaded[0]||M.call(a,{host:n.host,path:n.path,query:n.query,params:{}},_e));let l=1;try{const s=JSON.stringify(n.query),i=t.pattern.exec(n.path);let u=!1;c=await Promise.all(t.parts.map(async(t,c)=>{const f=r[c];if(function(e,t,n,r){if(r!==we)return!0;const s=ye[e];return!!s&&(t!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(c,f,i,s)&&(u=!0),o.segments[l]=r[c+1],!t)return{segment:f};const p=l++;if(!Se&&!u&&ye[c]&&ye[c].part===t.i)return ye[c];u=!1;const{default:m,preload:h}=await function(e){const t="string"==typeof e.css?[]:e.css.map(De);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(pe[t.i]);let d;return d=be||!de.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},_e):{}:de.preloaded[c+1],o["level"+p]={component:m,props:d,segment:f,match:i,part:t.i}}))}catch(e){o.error=e,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}function De(e){const t="client/"+e;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=()=>e(),r.onerror=n,document.head.appendChild(r)})}function Ie(e){e.parentNode.removeChild(e)}function Te(e){const t=qe(new URL(e,document.baseURI));if(t)return Ne&&e===Ne.href||function(e,t){Ne={href:e,promise:t}}(e,Ue(t)),Ne.promise}let Be;function He(e){clearTimeout(Be),Be=setTimeout(()=>{Fe(e)},20)}function Fe(e){const t=Ve(e.target);t&&"prefetch"===t.rel&&Te(t.href)}function Me(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=Ve(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=qe(s);if(o){ke(o,null,t.hasAttribute("sapper-noscroll"),s.hash),e.preventDefault(),Ae.pushState({id:Re},"",s.href)}}function Ve(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function Ye(e){if(Ce[Re]=je(),e.state){const t=qe(new URL(location.href));t?ke(t,e.state.id):location.href=location.href}else Pe=Pe+1,function(e){Re=e}(Pe),Ae.replaceState({id:Re},"",location.href)}var Je;Je={target:document.querySelector("#sapper")},"scrollRestoration"in Ae&&(Ae.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Ae.scrollRestoration="auto"}),addEventListener("load",()=>{Ae.scrollRestoration="manual"}),function(e){xe=e}(Je.target),addEventListener("click",Me),addEventListener("popstate",Ye),addEventListener("touchstart",Fe),addEventListener("mousemove",He),Promise.resolve().then(()=>{const{hash:e,href:t}=location;Ae.replaceState({id:Pe},"",t);const n=new URL(location.href);if(de.error)return function(e){const{host:t,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=de;ve||(ve=o&&o[0]),Oe(null,[],{error:c,status:a,session:s,level0:{props:ve},level1:{props:{status:a,error:c},component:se},segments:o},{host:t,path:n,query:Le(r),params:{}})}();const r=qe(n);return r?ke(r,Pe,!0,e):void 0});export{B as S,h as a,$ as b,v as c,g as d,p as e,u as f,i as g,l as h,T as i,b as j,f as k,D as m,e as n,a as s,m as t};
