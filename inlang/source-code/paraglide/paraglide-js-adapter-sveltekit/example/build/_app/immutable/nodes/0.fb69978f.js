import{s as B,n as R,u as re,c as ne,g as le,v as oe,w as ue,x as ie,y as ce}from"../chunks/scheduler.7edaed9b.js";import{S as J,i as M,e as d,g,h as m,k as _,l as k,z as fe,A as _e,f as w,j as L,B as pe,n as f,o as P,c as V,p as S,a as F,q as i,m as G,s as he,t as N,b as j,d as K}from"../chunks/index.1c5b1dac.js";import{e as Z,P as de}from"../chunks/ParaglideJS.b7e88b90.js";import{g as ge}from"../chunks/entry.84e9c53e.js";import{i as x}from"../chunks/i18n.9d2db182.js";import{f as ee,g as me,h as $e,c as ve,u as be}from"../chunks/messages.25f179b5.js";import{p as se}from"../chunks/stores.69ea243b.js";function te(u,e,o){const t=u.slice();return t[3]=e[o],t}function ae(u){let e,o=u[1][u[3]]+"",t;return{c(){e=d("option"),t=w(o),this.h()},l(n){e=g(n,"OPTION",{});var r=m(e);t=L(r,o),r.forEach(_),this.h()},h(){e.__value=u[3],pe(e,e.__value),e.selected=me()===u[3]},m(n,r){k(n,e,r),f(e,t)},p:R,d(n){n&&_(e)}}}function Ee(u){let e,o,t,n=Z(ee),r=[];for(let a=0;a<n.length;a+=1)r[a]=ae(te(u,n,a));return{c(){e=d("select");for(let a=0;a<r.length;a+=1)r[a].c()},l(a){e=g(a,"SELECT",{});var l=m(e);for(let s=0;s<r.length;s+=1)r[s].l(l);l.forEach(_)},m(a,l){k(a,e,l);for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(e,null);o||(t=fe(e,"change",u[2]),o=!0)},p(a,[l]){if(l&2){n=Z(ee);let s;for(s=0;s<n.length;s+=1){const E=te(a,n,s);r[s]?r[s].p(E,l):(r[s]=ae(E),r[s].c(),r[s].m(e,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},i:R,o:R,d(a){a&&_(e),_e(r,a),o=!1,t()}}}function Ae(u){function e(n){const r=x.route(re(se).url.pathname),a=x.resolveRoute(r,n);ge(a)}return[e,{en:"🇬🇧 English",de:"🇩🇪 Deutsch"},n=>e(n.target.value)]}class ye extends J{constructor(e){super(),M(this,e,Ae,Ee,B,{})}}function we(u){let e,o,t,n=$e()+"",r,a,l,s,E=ve()+"",C,T,q,h,Q=be()+"",z,D,I,A,y=u[0].url.pathname+"",H,O,v,$;return v=new ye({}),{c(){e=d("header"),o=d("nav"),t=d("a"),r=w(n),l=P(),s=d("a"),C=w(E),q=P(),h=d("a"),z=w(Q),I=P(),A=d("span"),H=w(y),O=P(),V(v.$$.fragment),this.h()},l(c){e=g(c,"HEADER",{class:!0});var p=m(e);o=g(p,"NAV",{class:!0});var b=m(o);t=g(b,"A",{href:!0,"aria-current":!0,class:!0});var U=m(t);r=L(U,n),U.forEach(_),l=S(b),s=g(b,"A",{href:!0,"aria-current":!0,class:!0});var W=m(s);C=L(W,E),W.forEach(_),q=S(b),h=g(b,"A",{href:!0,"aria-current":!0,class:!0});var X=m(h);z=L(X,Q),X.forEach(_),b.forEach(_),I=S(p),A=g(p,"SPAN",{});var Y=m(A);H=L(Y,y),Y.forEach(_),O=S(p),F(v.$$.fragment,p),p.forEach(_),this.h()},h(){i(t,"href",u[1]("/",void 0)),i(t,"aria-current",a=u[0].route.id==="/"?"page":void 0),i(t,"class","svelte-s2iux"),i(s,"href",u[1]("/about/",void 0)),i(s,"aria-current",T=u[0].route.id==="/about"?"page":void 0),i(s,"class","svelte-s2iux"),i(h,"href",u[1]("/users/1",void 0)),i(h,"aria-current",D=u[0].route.id==="/users/[id]"?"page":void 0),i(h,"class","svelte-s2iux"),i(o,"class","svelte-s2iux"),i(e,"class","svelte-s2iux")},m(c,p){k(c,e,p),f(e,o),f(o,t),f(t,r),f(o,l),f(o,s),f(s,C),f(o,q),f(o,h),f(h,z),f(e,I),f(e,A),f(A,H),f(e,O),G(v,e,null),$=!0},p(c,[p]){(!$||p&1&&a!==(a=c[0].route.id==="/"?"page":void 0))&&i(t,"aria-current",a),(!$||p&1&&T!==(T=c[0].route.id==="/about"?"page":void 0))&&i(s,"aria-current",T),(!$||p&1&&D!==(D=c[0].route.id==="/users/[id]"?"page":void 0))&&i(h,"aria-current",D),(!$||p&1)&&y!==(y=c[0].url.pathname+"")&&he(H,y)},i(c){$||(N(v.$$.fragment,c),$=!0)},o(c){j(v.$$.fragment,c),$=!1},d(c){c&&_(e),K(v)}}}function Le(u,e,o){let t;ne(u,se,a=>o(0,t=a));const n=le("$paraglide-adapter-sveltekit:context");function r(a,l){return typeof a!="string"||!n?a:n.translateHref(a,l)}return[t,r]}class Pe extends J{constructor(e){super(),M(this,e,Le,we,B,{})}}function Se(u){let e,o,t,n;e=new Pe({});const r=u[0].default,a=oe(r,u,u[1],null);return{c(){V(e.$$.fragment),o=P(),t=d("main"),a&&a.c(),this.h()},l(l){F(e.$$.fragment,l),o=S(l),t=g(l,"MAIN",{class:!0});var s=m(t);a&&a.l(s),s.forEach(_),this.h()},h(){i(t,"class","svelte-xep7oz")},m(l,s){G(e,l,s),k(l,o,s),k(l,t,s),a&&a.m(t,null),n=!0},p(l,s){a&&a.p&&(!n||s&2)&&ue(a,r,l,l[1],n?ce(r,l[1],s,null):ie(l[1]),null)},i(l){n||(N(e.$$.fragment,l),N(a,l),n=!0)},o(l){j(e.$$.fragment,l),j(a,l),n=!1},d(l){l&&(_(o),_(t)),K(e,l),a&&a.d(l)}}}function ke(u){let e,o;return e=new de({props:{i18n:x,$$slots:{default:[Se]},$$scope:{ctx:u}}}),{c(){V(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,n){G(e,t,n),o=!0},p(t,[n]){const r={};n&2&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){o||(N(e.$$.fragment,t),o=!0)},o(t){j(e.$$.fragment,t),o=!1},d(t){K(e,t)}}}function Te(u,e,o){let{$$slots:t={},$$scope:n}=e;return u.$$set=r=>{"$$scope"in r&&o(1,n=r.$$scope)},[t,n]}class Ie extends J{constructor(e){super(),M(this,e,Te,ke,B,{})}}export{Ie as component};