import{_ as t,a as s,b as a,c as n,i as e,s as r,d as o,S as c,f as i,e as u,t as l,h as f,j as h,k as p,g as m,l as v,m as d,n as g,q as b,r as E,u as w,o as k}from"./client.e36f078d.js";function H(t){var s,a,n,e,r,o,c,b,E,w,k;return{c:function(){s=i("div"),a=i("img"),n=u(),e=i("p"),r=l("Hi, I'm "),o=i("strong"),c=l("Zeno"),b=l(". I'm a fullstack software engineer and consultant from the United States.\n    Check out some of my public work on "),E=i("a"),w=l("GitHub"),k=l("."),this.h()},l:function(t){s=f(t,"DIV",{class:!0},!1);var i=h(s);a=f(i,"IMG",{src:!0,alt:!0,class:!0},!1),h(a).forEach(p),n=m(i,"\n  "),e=f(i,"P",{class:!0},!1);var u=h(e);r=m(u,"Hi, I'm "),o=f(u,"STRONG",{},!1);var l=h(o);c=m(l,"Zeno"),l.forEach(p),b=m(u,". I'm a fullstack software engineer and consultant from the United States.\n    Check out some of my public work on "),E=f(u,"A",{href:!0,target:!0},!1);var v=h(E);w=m(v,"GitHub"),v.forEach(p),k=m(u,"."),u.forEach(p),i.forEach(p),this.h()},h:function(){a.src="undraw_a_moment_to_relax_bbpa.svg",a.alt="Zenohm",a.className="svelte-1rfwbtq",E.href="https://www.github.com/Zenohm",E.target="_blank",e.className="svelte-1rfwbtq",s.className="svelte-1rfwbtq"},m:function(t,i){v(t,s,i),d(s,a),d(s,n),d(s,e),d(e,r),d(e,o),d(o,c),d(e,b),d(e,E),d(E,w),d(e,k)},p:g,i:g,o:g,d:function(t){t&&p(s)}}}var N=function(i){function u(t){var c;return s(this,u),c=a(this,n(u).call(this)),e(o(c),t,null,H,r,[]),c}return t(u,c),u}();function $(t){var s,a,n,e,r,o,c,g,b,E,H,$,I,x,R,_,y,T,q,D=t.post.printDate,j=t.post.printReadingTime,G=t.post.title,S=t.post.html;document.title=s=t.post.title;var Z=new N({});return{c:function(){a=u(),n=i("header"),e=i("p"),r=l(D),o=l(" ~ "),c=l(j),g=u(),b=i("h1"),E=l(G),H=u(),$=i("hr"),I=u(),x=i("div"),R=i("article"),_=u(),y=i("hr"),T=u(),Z.$$.fragment.c(),this.h()},l:function(t){a=m(t,"\n\n"),n=f(t,"HEADER",{class:!0},!1);var s=h(n);e=f(s,"P",{class:!0},!1);var i=h(e);r=m(i,D),o=m(i," ~ "),c=m(i,j),i.forEach(p),g=m(s,"\n  "),b=f(s,"H1",{class:!0},!1);var u=h(b);E=m(u,G),u.forEach(p),H=m(s,"\n  "),$=f(s,"HR",{class:!0},!1),h($).forEach(p),s.forEach(p),I=m(t,"\n"),x=f(t,"DIV",{class:!0},!1);var l=h(x);R=f(l,"ARTICLE",{class:!0},!1),h(R).forEach(p),_=m(l,"\n  "),y=f(l,"HR",{},!1),h(y).forEach(p),T=m(l,"\n  "),Z.$$.fragment.l(l),l.forEach(p),this.h()},h:function(){e.className="svelte-1uh130i",b.className="svelte-1uh130i",$.className="svelte-1uh130i",n.className="svelte-1uh130i",R.className="content",x.className="container"},m:function(t,s){v(t,a,s),v(t,n,s),d(n,e),d(e,r),d(e,o),d(e,c),d(n,g),d(n,b),d(b,E),d(n,H),d(n,$),v(t,I,s),v(t,x,s),d(x,R),R.innerHTML=S,d(x,_),d(x,y),d(x,T),w(Z,x,null),q=!0},p:function(t,a){q&&!t.post||s===(s=a.post.title)||(document.title=s),q&&!t.post||D===(D=a.post.printDate)||k(r,D),q&&!t.post||j===(j=a.post.printReadingTime)||k(c,j),q&&!t.post||G===(G=a.post.title)||k(E,G),q&&!t.post||S===(S=a.post.html)||(R.innerHTML=S)},i:function(t){q||(Z.$$.fragment.i(t),q=!0)},o:function(t){Z.$$.fragment.o(t),q=!1},d:function(t){t&&(p(a),p(n),p(I),p(x)),Z.$destroy()}}}function I(t){return x.apply(this,arguments)}function x(){return(x=b(E.mark((function t(s){var a,n,e;return E.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=s.params,s.query,t.next=3,this.fetch("blog/".concat(a.slug,".json"));case 3:return n=t.sent,t.next=6,n.json();case 6:if(e=t.sent,200!==n.status){t.next=11;break}return t.abrupt("return",{post:e});case 11:this.error(n.status,e.message);case 12:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function R(t,s,a){var n=s.post;return t.$set=function(t){"post"in t&&a("post",n=t.post)},{post:n}}var _=function(i){function u(t){var c;return s(this,u),c=a(this,n(u).call(this)),e(o(c),t,R,$,r,["post"]),c}return t(u,c),u}();export default _;export{I as preload};
