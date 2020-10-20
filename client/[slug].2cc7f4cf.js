import{S as t,i as s,s as a,e,a as o,t as r,b as n,d as c,f as l,c as i,g as h,h as m,n as p,m as u,j as f}from"./client.4765e4f2.js";function v(t){var s,a,u,f,v,d,g,E,w,$,b;return{c(){s=e("div"),a=e("img"),u=o(),f=e("p"),v=r("Hi, I'm "),d=e("strong"),g=r("Zeno"),E=r(". I'm a fullstack software engineer and consultant from the United States.\n    Check out some of my public work on "),w=e("a"),$=r("GitHub"),b=r("."),this.h()},l(t){s=n(t,"DIV",{class:!0},!1);var e=c(s);a=n(e,"IMG",{src:!0,alt:!0,class:!0},!1),c(a).forEach(l),u=i(e,"\n  "),f=n(e,"P",{class:!0},!1);var o=c(f);v=i(o,"Hi, I'm "),d=n(o,"STRONG",{},!1);var r=c(d);g=i(r,"Zeno"),r.forEach(l),E=i(o,". I'm a fullstack software engineer and consultant from the United States.\n    Check out some of my public work on "),w=n(o,"A",{href:!0,target:!0},!1);var h=c(w);$=i(h,"GitHub"),h.forEach(l),b=i(o,"."),o.forEach(l),e.forEach(l),this.h()},h(){a.src="undraw_a_moment_to_relax_bbpa.svg",a.alt="Zenohm",a.className="svelte-1ulceh0",w.href="https://www.github.com/Zenohm",w.target="_blank",f.className="svelte-1ulceh0",s.className="svelte-1ulceh0"},m(t,e){h(t,s,e),m(s,a),m(s,u),m(s,f),m(f,v),m(f,d),m(d,g),m(f,E),m(f,w),m(w,$),m(f,b)},p:p,i:p,o:p,d(t){t&&l(s)}}}class d extends t{constructor(t){super(),s(this,t,null,v,a,[])}}function g(t){var s,a,p,v,g,E,w,$,b,H,N,I,k,R,T,_,x,y,D,j=t.post.printDate,G=t.post.printReadingTime,S=t.post.title,Z=t.post.html;document.title=s=t.post.title;var A=new d({});return{c(){a=o(),p=e("header"),v=e("p"),g=r(j),E=r(" ~ "),w=r(G),$=o(),b=e("h1"),H=r(S),N=o(),I=e("hr"),k=o(),R=e("div"),T=e("article"),_=o(),x=e("hr"),y=o(),A.$$.fragment.c(),this.h()},l(t){a=i(t,"\n\n"),p=n(t,"HEADER",{class:!0},!1);var s=c(p);v=n(s,"P",{class:!0},!1);var e=c(v);g=i(e,j),E=i(e," ~ "),w=i(e,G),e.forEach(l),$=i(s,"\n  "),b=n(s,"H1",{class:!0},!1);var o=c(b);H=i(o,S),o.forEach(l),N=i(s,"\n  "),I=n(s,"HR",{class:!0},!1),c(I).forEach(l),s.forEach(l),k=i(t,"\n"),R=n(t,"DIV",{class:!0},!1);var r=c(R);T=n(r,"ARTICLE",{class:!0},!1),c(T).forEach(l),_=i(r,"\n  "),x=n(r,"HR",{},!1),c(x).forEach(l),y=i(r,"\n  "),A.$$.fragment.l(r),r.forEach(l),this.h()},h(){v.className="svelte-1uh130i",b.className="svelte-1uh130i",I.className="svelte-1uh130i",p.className="svelte-1uh130i",T.className="content",R.className="container"},m(t,s){h(t,a,s),h(t,p,s),m(p,v),m(v,g),m(v,E),m(v,w),m(p,$),m(p,b),m(b,H),m(p,N),m(p,I),h(t,k,s),h(t,R,s),m(R,T),T.innerHTML=Z,m(R,_),m(R,x),m(R,y),u(A,R,null),D=!0},p(t,a){D&&!t.post||s===(s=a.post.title)||(document.title=s),D&&!t.post||j===(j=a.post.printDate)||f(g,j),D&&!t.post||G===(G=a.post.printReadingTime)||f(w,G),D&&!t.post||S===(S=a.post.title)||f(H,S),D&&!t.post||Z===(Z=a.post.html)||(T.innerHTML=Z)},i(t){D||(A.$$.fragment.i(t),D=!0)},o(t){A.$$.fragment.o(t),D=!1},d(t){t&&(l(a),l(p),l(k),l(R)),A.$destroy()}}}async function E({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function w(t,s,a){let{post:e}=s;return t.$set=t=>{"post"in t&&a("post",e=t.post)},{post:e}}export default class extends t{constructor(t){super(),s(this,t,w,g,a,["post"])}}export{E as preload};
