var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function i(t,e,n){t.$$.on_destroy.push(s(e,n))}function l(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function c(t,e,n,o,r,a,s){const i=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,a);if(i){const r=l(e,n,o,s);t.p(r,i)}}function u(t,e){t.appendChild(e)}function m(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function d(){return p(" ")}function h(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let x;function y(t){x=t}function w(){if(!x)throw new Error("Function called outside component initialization");return x}function v(t,e){w().$$.context.set(t,e)}function k(t){return w().$$.context.get(t)}const _=[],C=[],j=[],S=[],A=Promise.resolve();let T=!1;function B(t){j.push(t)}let E=!1;const M=new Set;function L(){if(!E){E=!0;do{for(let t=0;t<_.length;t+=1){const e=_[t];y(e),I(e.$$)}for(y(null),_.length=0;C.length;)C.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];M.has(e)||(M.add(e),e())}j.length=0}while(_.length);for(;S.length;)S.pop()();T=!1,E=!1,M.clear()}}function I(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}const H=new Set;function D(t,e){t&&t.i&&(H.delete(t),t.i(e))}function P(t,e,n,o){if(t&&t.o){if(H.has(t))return;H.add(t),undefined.c.push((()=>{H.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function O(t){t&&t.c()}function R(t,n,a){const{fragment:s,on_mount:i,on_destroy:l,after_update:c}=t.$$;s&&s.m(n,a),B((()=>{const n=i.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]})),c.forEach(B)}function z(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function N(t,e){-1===t.$$.dirty[0]&&(_.push(t),T||(T=!0,A.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function U(e,r,a,s,i,l,c=[-1]){const u=x;y(e);const m=r.props||{},g=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:c,skip_bound:!1};let p=!1;if(g.ctx=a?a(e,m,((t,n,...o)=>{const r=o.length?o[0]:n;return g.ctx&&i(g.ctx[t],g.ctx[t]=r)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](r),p&&N(e,t)),n})):[],g.update(),p=!0,o(g.before_update),g.fragment=!!s&&s(g.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);g.fragment&&g.fragment.l(t),t.forEach(f)}else g.fragment&&g.fragment.c();r.intro&&D(e.$$.fragment),R(e,r.target,r.anchor),L()}y(u)}class q{$destroy(){z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function G(e){let n;return{c(){n=g("header"),n.innerHTML='<div class="logo font-semibold"><div class="bg-purple-400 w-4 h-4 mr-3 inline-block"></div> \n        <a href="#home" class="hover:no-underline inline-block"><p class="text-gray-800">Ng Bob Shoaun</p></a></div> \n    <div class="links flex justify-between items-center space-x-10"><a href="#about">About</a> \n        <a href="#web-development">Web dev</a> \n        <a href="#graphic-design">Design</a> \n        <a href="#game-development">Game dev</a> \n        <a href="#contact">Contact</a></div>',b(n,"class","flex items-center justify-between px-10 py-5 bg-white shadow-md fixed w-full z-50")},m(t,e){m(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class V extends q{constructor(t){super(),U(this,t,null,G,a,{})}}function W(e){let n;return{c(){n=g("main"),n.innerHTML='<div class="background absolute bg-gray-100 svelte-f2ubiv"></div> \n\n\t<section class="main min-h-screen flex"><div class="my-auto"><div class="bg-purple-400 w-12 h-3 ml-0.5 mb-2"></div> \n\t\t<h1 class="text-7xl font-semibold text-gray-600 mb-2">Hello there.</h1> \n\t\t<p class="text-2xl mb-10 text-gray-500 ml-1">I am Ng Bob Shoaun. I write good code with good designs.</p> \n\n\t\t<a type="button" href="/images/resume.pdf" target="_blank" class="ml-1 py-2 px-4 border-green-400 border bg-green-200 hover:bg-green-300 rounded-none mr-3"><p class="text-gray-700 font-mono">View resume</p></a> \n\t\t<a type="button" href="#contact" class="py-2 px-4 border-blue-400 border bg-blue-200 hover:bg-blue-300 rounded-none"><p class="text-gray-700 font-mono">Let&#39;s talk</p></a></div></section>',b(n,"id","home"),b(n,"class","relative")},m(t,e){m(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class F extends q{constructor(t){super(),U(this,t,null,W,a,{})}}function J(e){let n,o,r,a,s,i,l,c,p,h,$;return{c(){n=g("main"),o=g("div"),r=g("div"),s=d(),i=g("div"),c=d(),p=g("img"),b(r,"class",a="absolute w-5 h-5 right-0 "+e[2]+" svelte-1b7385d"),b(i,"class",l="absolute w-5 h-5 bottom-0 "+e[2]+" svelte-1b7385d"),p.src!==(h=e[0])&&b(p,"src",h),b(p,"class",$=(e[3]?"image-inverted":"image")+" object-contain svelte-1b7385d"),b(p,"alt",e[1]),b(o,"class","relative h-auto w-auto"),b(n,"class","")},m(t,e){m(t,n,e),u(n,o),u(o,r),u(o,s),u(o,i),u(o,c),u(o,p)},p(t,[e]){4&e&&a!==(a="absolute w-5 h-5 right-0 "+t[2]+" svelte-1b7385d")&&b(r,"class",a),4&e&&l!==(l="absolute w-5 h-5 bottom-0 "+t[2]+" svelte-1b7385d")&&b(i,"class",l),1&e&&p.src!==(h=t[0])&&b(p,"src",h),8&e&&$!==($=(t[3]?"image-inverted":"image")+" object-contain svelte-1b7385d")&&b(p,"class",$),2&e&&b(p,"alt",t[1])},i:t,o:t,d(t){t&&f(n)}}}function Y(t,e,n){let{src:o="images/pathforge.png"}=e,{alt:r="this is an image"}=e,{cornerColor:a="bg-white"}=e,{inverted:s=!1}=e;return t.$$set=t=>{"src"in t&&n(0,o=t.src),"alt"in t&&n(1,r=t.alt),"cornerColor"in t&&n(2,a=t.cornerColor),"inverted"in t&&n(3,s=t.inverted)},[o,r,a,s]}class K extends q{constructor(t){super(),U(this,t,Y,J,a,{src:0,alt:1,cornerColor:2,inverted:3})}}function Q(e){let n,o,r,a,s;return o=new K({props:{src:"images/me.jpg",alt:"me",inverted:!0,cornerColor:"bg-gray-100"}}),{c(){n=g("main"),O(o.$$.fragment),r=d(),a=g("div"),a.innerHTML='<h1 class="text-5xl font-semibold mb-6 text-gray-600">About me</h1> \n\t\t<p class="text-gray-500 text-lg">Hi, I’m Bob, a passionate software developer currently earning my degree in University of\n\t\t\tToronto, alongside a part-time job as a web developer.\n\t\t\t<br/><br/>\n\t\t\tI have started coding since the age of 14 and have since been driven to create and design\n\t\t\tquality, intuitive softwares for others to use. My expertise in software development lies in Unity\n\t\t\tgame engine, C#, Python, and Vue. Besides coding, my hobbies include graphic designing, building computers and playing the drums.</p>',b(a,"class","my-auto max-w-1/2"),b(n,"id","about"),b(n,"class","main bg-gray-100 flex justify-between space-x-32")},m(t,e){m(t,n,e),R(o,n,null),u(n,r),u(n,a),s=!0},p:t,i(t){s||(D(o.$$.fragment,t),s=!0)},o(t){P(o.$$.fragment,t),s=!1},d(t){t&&f(n),z(o)}}}class X extends q{constructor(t){super(),U(this,t,null,Q,a,{})}}function Z(t){let e,n;return{c(){e=g("a"),n=g("i"),b(n,"class","text-gray-800 fa-lg fab fa-md fa-github mr-4"),b(e,"href",t[5]),b(e,"target","_blank")},m(t,o){m(t,e,o),u(e,n)},p(t,n){32&n&&b(e,"href",t[5])},d(t){t&&f(e)}}}function tt(t){let e,n;return{c(){e=g("a"),n=g("i"),b(n,"class","text-gray-800 fa-lg fas fa-external-link-alt"),b(e,"href",t[6]),b(e,"target","_blank")},m(t,o){m(t,e,o),u(e,n)},p(t,n){64&n&&b(e,"href",t[6])},d(t){t&&f(e)}}}function et(t){let e,n,o,r,a,s,i,l,c,h,x,y,w,v,k,_,C,j,S,A=t[4].join(" // ")+"";n=new K({props:{src:t[0],alt:t[1]}});let T=t[5]&&Z(t),B=t[6]&&tt(t);return{c(){e=g("main"),O(n.$$.fragment),o=d(),r=g("div"),a=g("h1"),s=p(t[1]),i=d(),l=g("p"),c=p(t[2]),h=d(),x=g("p"),y=p(t[3]),w=d(),v=g("p"),k=p(A),_=d(),T&&T.c(),C=d(),B&&B.c(),b(a,"class","font-bold text-3xl"),b(l,"class","font-bold font-mono text-sm text-purple-700 mb-3"),b(x,"class","text-md mb-4 text-gray-700"),b(v,"class","text-lg font-mono font-semibold mb-6"),b(r,"class",j=t[7]?"order-first pr-28":"pl-28"),b(e,"class","flex items-center justify-around py-16")},m(t,f){m(t,e,f),R(n,e,null),u(e,o),u(e,r),u(r,a),u(a,s),u(r,i),u(r,l),u(l,c),u(r,h),u(r,x),u(x,y),u(r,w),u(r,v),u(v,k),u(r,_),T&&T.m(r,null),u(r,C),B&&B.m(r,null),S=!0},p(t,[e]){const o={};1&e&&(o.src=t[0]),2&e&&(o.alt=t[1]),n.$set(o),(!S||2&e)&&$(s,t[1]),(!S||4&e)&&$(c,t[2]),(!S||8&e)&&$(y,t[3]),(!S||16&e)&&A!==(A=t[4].join(" // ")+"")&&$(k,A),t[5]?T?T.p(t,e):(T=Z(t),T.c(),T.m(r,C)):T&&(T.d(1),T=null),t[6]?B?B.p(t,e):(B=tt(t),B.c(),B.m(r,null)):B&&(B.d(1),B=null),(!S||128&e&&j!==(j=t[7]?"order-first pr-28":"pl-28"))&&b(r,"class",j)},i(t){S||(D(n.$$.fragment,t),S=!0)},o(t){P(n.$$.fragment,t),S=!1},d(t){t&&f(e),z(n),T&&T.d(),B&&B.d()}}}function nt(t,e,n){let{image:o="images/doodle jump.gif"}=e,{name:r="awesome game"}=e,{collaborators:a="with some people"}=e,{description:s="none."}=e,{technologies:i=["unity","c#"]}=e,{github:l=null}=e,{website:c=null}=e,{right:u=!1}=e;return t.$$set=t=>{"image"in t&&n(0,o=t.image),"name"in t&&n(1,r=t.name),"collaborators"in t&&n(2,a=t.collaborators),"description"in t&&n(3,s=t.description),"technologies"in t&&n(4,i=t.technologies),"github"in t&&n(5,l=t.github),"website"in t&&n(6,c=t.website),"right"in t&&n(7,u=t.right)},[o,r,a,s,i,l,c,u]}class ot extends q{constructor(t){super(),U(this,t,nt,et,a,{image:0,name:1,collaborators:2,description:3,technologies:4,github:5,website:6,right:7})}}function rt(e){let n,o,r,a,s,i,l,c,p,$,x,y,w,v,k;return i=new ot({props:{image:"images/pathforge.png",name:"Pathforge",collaborators:"with pathforge team",description:"An elearning site that aims to redefine the self learning experience. It provides a community for online learners to help eachother out and step through the materials together.",technologies:["vue","buefy","graphql","postgres"],website:null}}),c=new ot({props:{image:"images/course-checker 2.png",name:"ADP Timetabler (aka Course Checker)",collaborators:"by myself",description:"A web application for students in the ADP program of Taylor’s university to generate a visually appealing timetable based on courses they want to take for their next semester.",technologies:["html","css","unity","c#","webGL"],github:"https://github.com/BobShoaun/Course-Checker",website:"https://bobshoaun.github.io/Course-Checker/",right:!0}}),$=new ot({props:{image:"images/todo app 2.png",name:"things to do",collaborators:"by myself",description:"A simple and elegant to do list application built as practice while learning the vue framework and firebase firestore.",technologies:["vue","tailwind css","firebase"],github:"https://github.com/BobShoaun/Vue-Todo-App",website:"https://bobshoaun.github.io/Vue-Todo-App/#/"}}),{c(){n=g("main"),o=g("h1"),o.textContent="Web development",r=d(),a=g("p"),a.textContent="Here are some web development projects i have worked on.",s=d(),O(i.$$.fragment),l=d(),O(c.$$.fragment),p=d(),O($.$$.fragment),x=d(),y=g("button"),y.textContent="See More",b(o,"class","text-5xl font-semibold text-gray-600 mb-3"),b(a,"class","text-gray-500 text-xl"),b(y,"class","py-2 px-4 bg-purple-400 text-white rounded-none block mx-auto mt-10"),b(n,"id","web-development"),b(n,"class","main")},m(t,e){m(t,n,e),u(n,o),u(n,r),u(n,a),u(n,s),R(i,n,null),u(n,l),R(c,n,null),u(n,p),R($,n,null),u(n,x),u(n,y),w=!0,v||(k=h(y,"click",at),v=!0)},p:t,i(t){w||(D(i.$$.fragment,t),D(c.$$.fragment,t),D($.$$.fragment,t),w=!0)},o(t){P(i.$$.fragment,t),P(c.$$.fragment,t),P($.$$.fragment,t),w=!1},d(t){t&&f(n),z(i),z(c),z($),v=!1,k()}}}function at(){alert("more coming soon!")}class st extends q{constructor(t){super(),U(this,t,null,rt,a,{})}}function it(e){let n;return{c(){n=g("main"),n.innerHTML='<h1 class="text-5xl font-semibold text-gray-600 mb-3">Graphic design</h1> \n    <p class="text-gray-500 text-xl mb-20">I enjoy graphic design like designing posters and such.</p> \n\n    <h2 class="text-gray-500 text-3xl text-center">Coming soon!</h2>',b(n,"id","graphic-design"),b(n,"class","main bg-gray-100")},m(t,e){m(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class lt extends q{constructor(t){super(),U(this,t,null,it,a,{})}}function ct(t){let e,n;return{c(){e=g("a"),n=g("i"),b(n,"class","text-gray-800 fab fa-lg fa-github mr-4"),b(e,"href",t[5]),b(e,"target","_blank")},m(t,o){m(t,e,o),u(e,n)},p(t,n){32&n&&b(e,"href",t[5])},d(t){t&&f(e)}}}function ut(t){let e,n;return{c(){e=g("a"),n=g("i"),b(n,"class","text-gray-800 fas fa-lg fa-external-link-alt"),b(e,"href",t[6]),b(e,"target","_blank")},m(t,o){m(t,e,o),u(e,n)},p(t,n){64&n&&b(e,"href",t[6])},d(t){t&&f(e)}}}function mt(t){let e,n,o,r,a,s,i,l,c,h,x,y,w,v,k,_,C,j,S,A=t[4].join(" // ")+"";o=new K({props:{src:t[0],alt:t[1]}});let T=t[5]&&ct(t),B=t[6]&&ut(t);return{c(){e=g("main"),n=g("div"),O(o.$$.fragment),r=d(),a=g("div"),s=g("h1"),i=p(t[1]),l=d(),c=g("p"),h=p(t[2]),x=d(),y=g("p"),w=p(t[3]),v=d(),k=g("p"),_=p(A),C=d(),T&&T.c(),j=d(),B&&B.c(),b(n,"class","mb-10"),b(s,"class","font-bold text-3xl"),b(c,"class","font-bold font-mono text-sm text-purple-700 mb-3"),b(y,"class","text-md mb-4 text-gray-700"),b(k,"class","text-lg font-semibold font-mono mb-6"),b(a,"class","ml-5"),b(e,"class","py-16 max-w-1/2")},m(t,f){m(t,e,f),u(e,n),R(o,n,null),u(e,r),u(e,a),u(a,s),u(s,i),u(a,l),u(a,c),u(c,h),u(a,x),u(a,y),u(y,w),u(a,v),u(a,k),u(k,_),u(a,C),T&&T.m(a,null),u(a,j),B&&B.m(a,null),S=!0},p(t,[e]){const n={};1&e&&(n.src=t[0]),2&e&&(n.alt=t[1]),o.$set(n),(!S||2&e)&&$(i,t[1]),(!S||4&e)&&$(h,t[2]),(!S||8&e)&&$(w,t[3]),(!S||16&e)&&A!==(A=t[4].join(" // ")+"")&&$(_,A),t[5]?T?T.p(t,e):(T=ct(t),T.c(),T.m(a,j)):T&&(T.d(1),T=null),t[6]?B?B.p(t,e):(B=ut(t),B.c(),B.m(a,null)):B&&(B.d(1),B=null)},i(t){S||(D(o.$$.fragment,t),S=!0)},o(t){P(o.$$.fragment,t),S=!1},d(t){t&&f(e),z(o),T&&T.d(),B&&B.d()}}}function ft(t,e,n){let{image:o="images/pathforge.png"}=e,{name:r="awesome website"}=e,{collaborators:a="with some people"}=e,{description:s="none."}=e,{technologies:i=["svelte","tailwind css"]}=e,{github:l=null}=e,{website:c=null}=e;return t.$$set=t=>{"image"in t&&n(0,o=t.image),"name"in t&&n(1,r=t.name),"collaborators"in t&&n(2,a=t.collaborators),"description"in t&&n(3,s=t.description),"technologies"in t&&n(4,i=t.technologies),"github"in t&&n(5,l=t.github),"website"in t&&n(6,c=t.website)},[o,r,a,s,i,l,c]}class gt extends q{constructor(t){super(),U(this,t,ft,mt,a,{image:0,name:1,collaborators:2,description:3,technologies:4,github:5,website:6})}}function pt(e){let n,o,r,a,s,i,l,c,p,$,x,y,w,v,k,_,C;return l=new gt({props:{image:"images/doodle jump.gif",name:"Assembly Doodle Jump",collaborators:"by myself",description:"Doodle jump game recreated using assembly language. It features different types of platforms, and powerups like springs and jetpacks. This was a final project for my CSC258 course.",technologies:["mips assembly","mars simulator"],github:"https://github.com/BobShoaun/Assembly-Doodle-Jump"}}),p=new gt({props:{image:"images/maze-runner.jpg",name:"Maze Runner",collaborators:"with some friends",description:"A game made entirely with ascii graphics to display in the console, with the help of a console game engine. The game features local multiplayer with two players, a runner and a chaser.",technologies:["c++","visual studio"],github:"https://github.com/BobShoaun/Maze-Runner"}}),y=new gt({props:{image:"images/doxel-core.png",name:"Doxel Core Unity Package",collaborators:"by myself",description:"A unity package that provides a framework for serializing data easily. It also contains many frequently used utility classes, functions and extension methods.",technologies:["unity","c#"],github:"https://github.com/BobShoaun/Doxel-Core"}}),{c(){n=g("main"),o=g("h1"),o.textContent="Game development",r=d(),a=g("p"),a.textContent="Fun fact: game development was what got me into coding in the first place.",s=d(),i=g("div"),O(l.$$.fragment),c=d(),O(p.$$.fragment),$=d(),x=g("div"),O(y.$$.fragment),w=d(),v=g("button"),v.textContent="See More",b(o,"class","text-5xl font-semibold text-gray-600 mb-3"),b(a,"class","text-gray-500 text-xl"),b(i,"class","flex justify-between space-x-28"),b(x,"class","flex justify-center"),b(v,"class","py-2 px-4 bg-purple-400 text-white rounded-none block mx-auto mt-10"),b(n,"id","game-development"),b(n,"class","main")},m(t,e){m(t,n,e),u(n,o),u(n,r),u(n,a),u(n,s),u(n,i),R(l,i,null),u(i,c),R(p,i,null),u(n,$),u(n,x),R(y,x,null),u(n,w),u(n,v),k=!0,_||(C=h(v,"click",dt),_=!0)},p:t,i(t){k||(D(l.$$.fragment,t),D(p.$$.fragment,t),D(y.$$.fragment,t),k=!0)},o(t){P(l.$$.fragment,t),P(p.$$.fragment,t),P(y.$$.fragment,t),k=!1},d(t){t&&f(n),z(l),z(p),z(y),_=!1,C()}}}function dt(){alert("more coming soon!")}class ht extends q{constructor(t){super(),U(this,t,null,pt,a,{})}}function bt(e){let n;return{c(){n=g("main"),n.innerHTML='<h1 class="text-5xl font-semibold text-gray-600 mb-3">Contact me</h1> \n\t<p class="text-gray-500 text-xl mb-10">What are you waiting for? Shoot me a message and I will get back to you as soon as I can. <br/>\n\t\tMy email is <a href="mailto:ngbobshoaun2000@gmail.com">ngbobshoaun2000@gmail.com</a>.</p> \n\t<input class="w-full mb-2 px-4 py-2" type="text" placeholder="Your email"/> \n\t<textarea class="w-full px-4 py-2 mb-3 min-h-1/4" placeholder="Hey..." name="fsdfs" id="" rows="10"></textarea> \n\t<button class="bg-green-200 py-2 px-4 float-right rounded-none">Send</button>',b(n,"id","contact"),b(n,"class","main bg-gray-100")},m(t,e){m(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class $t extends q{constructor(t){super(),U(this,t,null,bt,a,{})}}function xt(e){let n;return{c(){n=g("main"),n.innerHTML='<div class="text-center space-x-5 mb-10"><a href="https://github.com/BobShoaun" target="_blank"><i class="text-gray-800 fab fa-github fa-lg"></i></a> \n\t\t<a href="https://www.linkedin.com/in/ngbobshoaun/" target="_blank"><i class="text-gray-800 fab fa-linkedin-in fa-lg"></i></a> \n\n\t\t<a href="https://www.instagram.com/n.bob.s/" target="_blank"><i class="text-gray-800 fab fa-instagram fa-lg"></i></a> \n\n\t\t<a href="https://www.linkedin.com/in/ngbobshoaun/" target="_blank"><i class="text-gray-800 fab fa-codepen fa-lg"></i></a></div> \n\n\t<h2 class="text-medium text-center mb-8">Designed and built by Ng Bob Shoaun. © 2021</h2> \n\t<h2 class="text-medium text-center">This site is still a work in progress.</h2>',b(n,"class","main bg-gray-100")},m(t,e){m(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class yt extends q{constructor(t){super(),U(this,t,null,xt,a,{})}}const wt=[];function vt(e,n=t){let o;const r=[];function s(t){if(a(e,t)&&(e=t,o)){const t=!wt.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),wt.push(n,e)}if(t){for(let t=0;t<wt.length;t+=2)wt[t][0](wt[t+1]);wt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,i=t){const l=[a,i];return r.push(l),1===r.length&&(o=n(s)||t),a(e),()=>{const t=r.indexOf(l);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function kt(e,n,a){const i=!Array.isArray(e),l=i?[e]:e,c=n.length<2;return{subscribe:vt(a,(e=>{let a=!1;const u=[];let m=0,f=t;const g=()=>{if(m)return;f();const o=n(i?u[0]:u,e);c?e(o):f=r(o)?o:t},p=l.map(((t,e)=>s(t,(t=>{u[e]=t,m&=~(1<<e),a&&g()}),(()=>{m|=1<<e}))));return a=!0,g(),function(){o(p),f()}})).subscribe}}const _t={},Ct={};function jt(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}const St=function(t,e){const n=[];let o=jt(t);return{get location(){return o},listen(e){n.push(e);const r=()=>{o=jt(t),e({location:o,action:"POP"})};return t.addEventListener("popstate",r),()=>{t.removeEventListener("popstate",r);const o=n.indexOf(e);n.splice(o,1)}},navigate(e,{state:r,replace:a=!1}={}){r={...r,key:Date.now()+""};try{a?t.history.replaceState(r,null,e):t.history.pushState(r,null,e)}catch(n){t.location[a?"replace":"assign"](e)}o=jt(t),n.forEach((t=>t({location:o,action:"PUSH"})))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(t="/"){let e=0;const n=[{pathname:t,search:""}],o=[];return{get location(){return n[e]},addEventListener(t,e){},removeEventListener(t,e){},history:{get entries(){return n},get index(){return e},get state(){return o[e]},pushState(t,r,a){const[s,i=""]=a.split("?");e++,n.push({pathname:s,search:i}),o.push(t)},replaceState(t,r,a){const[s,i=""]=a.split("?");n[e]={pathname:s,search:i},o[e]=t}}}}()),At=/^:(.+)/;function Tt(t){return"*"===t[0]}function Bt(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function Et(t){return t.replace(/(^\/+|\/+$)/g,"")}function Mt(t,e){return{route:t,score:t.default?0:Bt(t.path).reduce(((t,e)=>(t+=4,!function(t){return""===t}(e)?!function(t){return At.test(t)}(e)?Tt(e)?t-=5:t+=3:t+=2:t+=1,t)),0),index:e}}function Lt(t,e){let n,o;const[r]=e.split("?"),a=Bt(r),s=""===a[0],i=function(t){return t.map(Mt).sort(((t,e)=>t.score<e.score?1:t.score>e.score?-1:t.index-e.index))}(t);for(let t=0,r=i.length;t<r;t++){const r=i[t].route;let l=!1;if(r.default){o={route:r,params:{},uri:e};continue}const c=Bt(r.path),u={},m=Math.max(a.length,c.length);let f=0;for(;f<m;f++){const t=c[f],e=a[f];if(void 0!==t&&Tt(t)){u["*"===t?"*":t.slice(1)]=a.slice(f).map(decodeURIComponent).join("/");break}if(void 0===e){l=!0;break}let n=At.exec(t);if(n&&!s){const t=decodeURIComponent(e);u[n[1]]=t}else if(t!==e){l=!0;break}}if(!l){n={route:r,params:u,uri:"/"+a.slice(0,f).join("/")};break}}return n||o||null}function It(t,e){return`${Et("/"===e?t:`${Et(t)}/${Et(e)}`)}/`}function Ht(t){let e;const n=t[9].default,o=function(t,e,n,o){if(t){const r=l(t,e,n,o);return t[0](r)}}(n,t,t[8],null);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,[e]){o&&o.p&&256&e&&c(o,n,t,t[8],e,null,null)},i(t){e||(D(o,t),e=!0)},o(t){P(o,t),e=!1},d(t){o&&o.d(t)}}}function Dt(t,e,n){let o,r,a,{$$slots:s={},$$scope:l}=e,{basepath:c="/"}=e,{url:u=null}=e;const m=k(_t),f=k(Ct),g=vt([]);i(t,g,(t=>n(7,a=t)));const p=vt(null);let d=!1;const h=m||vt(u?{pathname:u}:St.location);i(t,h,(t=>n(6,r=t)));const b=f?f.routerBase:vt({path:c,uri:c});i(t,b,(t=>n(5,o=t)));const $=kt([b,p],(([t,e])=>{if(null===e)return t;const{path:n}=t,{route:o,uri:r}=e;return{path:o.default?n:o.path.replace(/\*.*$/,""),uri:r}}));var x;return m||(x=()=>St.listen((t=>{h.set(t.location)})),w().$$.on_mount.push(x),v(_t,h)),v(Ct,{activeRoute:p,base:b,routerBase:$,registerRoute:function(t){const{path:e}=o;let{path:n}=t;if(t._path=n,t.path=It(e,n),"undefined"==typeof window){if(d)return;const e=function(t,e){return Lt([t],e)}(t,r.pathname);e&&(p.set(e),d=!0)}else g.update((e=>(e.push(t),e)))},unregisterRoute:function(t){g.update((e=>{const n=e.indexOf(t);return e.splice(n,1),e}))}}),t.$$set=t=>{"basepath"in t&&n(3,c=t.basepath),"url"in t&&n(4,u=t.url),"$$scope"in t&&n(8,l=t.$$scope)},t.$$.update=()=>{if(32&t.$$.dirty){const{path:t}=o;g.update((e=>(e.forEach((e=>e.path=It(t,e._path))),e)))}if(192&t.$$.dirty){const t=Lt(a,r.pathname);p.set(t)}},[g,h,b,c,u,o,r,a,l,s]}class Pt extends q{constructor(t){super(),U(this,t,Dt,Ht,a,{basepath:3,url:4})}}function Ot(t){let e;return{c(){e=g("div")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Rt(t){let e,n,o,r,a,s,i,l,c,p,h,$,x,y,w,v,k,_,C;return e=new Pt({props:{url:t[0],$$slots:{default:[Ot]},$$scope:{ctx:t}}}),r=new V({}),s=new F({}),l=new X({}),p=new st({}),$=new lt({}),y=new ht({}),v=new $t({}),_=new yt({}),{c(){O(e.$$.fragment),n=d(),o=g("main"),O(r.$$.fragment),a=d(),O(s.$$.fragment),i=d(),O(l.$$.fragment),c=d(),O(p.$$.fragment),h=d(),O($.$$.fragment),x=d(),O(y.$$.fragment),w=d(),O(v.$$.fragment),k=d(),O(_.$$.fragment),b(o,"class","")},m(t,f){R(e,t,f),m(t,n,f),m(t,o,f),R(r,o,null),u(o,a),R(s,o,null),u(o,i),R(l,o,null),u(o,c),R(p,o,null),u(o,h),R($,o,null),u(o,x),R(y,o,null),u(o,w),R(v,o,null),u(o,k),R(_,o,null),C=!0},p(t,[n]){const o={};1&n&&(o.url=t[0]),2&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){C||(D(e.$$.fragment,t),D(r.$$.fragment,t),D(s.$$.fragment,t),D(l.$$.fragment,t),D(p.$$.fragment,t),D($.$$.fragment,t),D(y.$$.fragment,t),D(v.$$.fragment,t),D(_.$$.fragment,t),C=!0)},o(t){P(e.$$.fragment,t),P(r.$$.fragment,t),P(s.$$.fragment,t),P(l.$$.fragment,t),P(p.$$.fragment,t),P($.$$.fragment,t),P(y.$$.fragment,t),P(v.$$.fragment,t),P(_.$$.fragment,t),C=!1},d(t){z(e,t),t&&f(n),t&&f(o),z(r),z(s),z(l),z(p),z($),z(y),z(v),z(_)}}}function zt(t,e,n){let{url:o=""}=e;return t.$$set=t=>{"url"in t&&n(0,o=t.url)},[o]}return new class extends q{constructor(t){super(),U(this,t,zt,Rt,a,{url:0})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map