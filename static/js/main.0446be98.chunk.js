(this["webpackJsonpreactstrap-sidebare"]=this["webpackJsonpreactstrap-sidebare"]||[]).push([[0],{34:function(e,t,a){e.exports=a(47)},39:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(11),o=a.n(c),l=a(15),i=(a(24),a(39),a(9)),u=a(12),s=a(3),m=a(2),p=a.n(m),g=a(5),f=function(e){var t=Object(n.useState)(!0),a=Object(l.a)(t,2),c=a[0],o=a[1],u=e.icon,m=e.title,f=e.items;return r.a.createElement("div",null,r.a.createElement(s.j,{onClick:function(){return o(!c)},className:p()({"menu-open":!c})},r.a.createElement(s.k,{className:"dropdown-toggle"},r.a.createElement(i.a,{icon:u,className:"mr-2"}),m)),r.a.createElement(s.g,{isOpen:!c,navbar:!0,className:p()("items-menu",{"mb-1":!c})},f.map((function(e,t){return r.a.createElement(s.j,{key:t,className:"pl-4"},r.a.createElement(s.k,{tag:g.b,to:e.target},e.title))}))))},E=[[{title:"Home 1",target:"Home-1"},{title:"Home 2",target:"Home-2"},{itle:"Home 3",target:"Home-3"}],[{title:"Page 1",target:"Page-1"},{title:"Page 2",target:"Page-2"}]],b=function(e){return r.a.createElement("div",{className:p()("sidebar",{"is-open":e.isOpen})},r.a.createElement("div",{className:"sidebar-header"},r.a.createElement("span",{color:"dark",onClick:e.toggle,style:{color:"#fff"}},"\xd7"),r.a.createElement("h3",null,"Youtube")),r.a.createElement("div",{className:"side-menu"},r.a.createElement(s.i,{vertical:!0,className:"list-unstyled pb-3"},r.a.createElement("p",null,"Youtube channel "),r.a.createElement(f,{title:"Home",icon:u.d,items:E[0]}),r.a.createElement(s.j,null,r.a.createElement(s.k,{tag:g.b,to:"/about"},r.a.createElement(i.a,{icon:u.b,className:"mr-2"}),"About")),r.a.createElement(f,{title:"Pages",icon:u.c,items:E[1]}),r.a.createElement(s.j,null,r.a.createElement(s.k,{tag:g.b,to:"/faq"},r.a.createElement(i.a,{icon:u.f,className:"mr-2"}),"FAQ")),r.a.createElement(s.j,null,r.a.createElement(s.k,{tag:g.b,to:"/contact"},r.a.createElement(i.a,{icon:u.e,className:"mr-2"}),"Contact")))))},h=function(e){var t=Object(n.useState)(!0),a=Object(l.a)(t,2),c=a[0],o=a[1];return r.a.createElement(s.l,{color:"light",light:!0,className:"navbar shadow-sm p-3 mb-5 bg-white rounded",expand:"md"},r.a.createElement(s.a,{color:"dark",onClick:e.toggle},r.a.createElement(i.a,{icon:u.a})),r.a.createElement(s.m,{onClick:function(){return o(!c)}}),r.a.createElement(s.g,{isOpen:c,navbar:!0},r.a.createElement(s.i,{className:"ml-auto",navbar:!0},r.a.createElement(s.j,null,r.a.createElement(s.k,{tag:g.b,to:"/page-1"},"page 1")),r.a.createElement(s.j,null,r.a.createElement(s.k,{tag:g.b,to:"/page-2"},"page 2")),r.a.createElement(s.j,null,r.a.createElement(s.k,{tag:g.b,to:"/page-3"},"page 3")),r.a.createElement(s.j,null,r.a.createElement(s.k,{tag:g.b,to:"/page-4"},"page 4")))))},v=a(10),d=a(29),w=a(30),k=a(32),x=a(31),S=a(33),N=function(e){return r.a.createElement("div",{className:"m-2 ",style:{height:"auto",width:300}},r.a.createElement(s.b,null,r.a.createElement("iframe",{width:"295",height:"200",src:e.url,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}),r.a.createElement(s.c,null,r.a.createElement(s.f,null,e.title," "),r.a.createElement(s.d,null,e.subtitle),r.a.createElement(s.e,null,e.text))))},O=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(k.a)(this,Object(x.a)(t).call(this,e))).state={videos:[{url:"https://www.youtube.com/embed/W6NZfCO5SIk",title:"JavaScript Tutorial for Beginners",subtitle:"1\u202f674\u202f448 vues\u202223 avr. 2018",text:"Watch this JavaScript tutorial for beginners to learn JavaScript basics in one hour. "},{url:"https://www.youtube.com/embed/W6NZfCO5SIk",title:"JavaScript Tutorial for Beginners",subtitle:"1\u202f674\u202f448 vues\u202223 avr. 2018",text:"Watch this JavaScript tutorial for beginners to learn JavaScript basics in one hour. "},{url:"https://www.youtube.com/embed/W6NZfCO5SIk",title:"JavaScript Tutorial for Beginners",subtitle:"1\u202f674\u202f448 vues\u202223 avr. 2018",text:"Watch this JavaScript tutorial for beginners to learn JavaScript basics in one hour. "},{url:"https://www.youtube.com/embed/W6NZfCO5SIk",title:"JavaScript Tutorial for Beginners",subtitle:"1\u202f674\u202f448 vues\u202223 avr. 2018",text:"Watch this JavaScript tutorial for beginners to learn JavaScript basics in one hour. "},{url:"https://www.youtube.com/embed/W6NZfCO5SIk",title:"JavaScript Tutorial for Beginners",subtitle:"1\u202f674\u202f448 vues\u202223 avr. 2018",text:"Watch this JavaScript tutorial for beginners to learn JavaScript basics in one hour. "},{url:"https://www.youtube.com/embed/W6NZfCO5SIk",title:"JavaScript Tutorial for Beginners",subtitle:"1\u202f674\u202f448 vues\u202223 avr. 2018",text:"Watch this JavaScript tutorial for beginners to learn JavaScript basics in one hour. "}]},a}return Object(S.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:" d-flex flex-wrap justify-content-center mt-5 container-fluid"},this.state.videos.map((function(e,t){return r.a.createElement(N,{url:e.url,title:e.title,subtitle:e.subtitle,text:e.text})})))}}]),t}(n.Component),j=function(e){return r.a.createElement(s.h,{fluid:!0,className:p()("content",{"is-open":e.isOpen})},r.a.createElement(h,{toggle:e.toggle}),r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/",component:function(){return r.a.createElement(O,null)}}),r.a.createElement(v.a,{exact:!0,path:"/about",component:function(){return r.a.createElement(O,null)}}),r.a.createElement(v.a,{exact:!0,path:"/Pages",component:function(){return r.a.createElement(O,null)}}),r.a.createElement(v.a,{exact:!0,path:"/faq",component:function(){return"FAQ"}}),r.a.createElement(v.a,{exact:!0,path:"/contact",component:function(){return r.a.createElement(O,null)}}),r.a.createElement(v.a,{exact:!0,path:"/Home-1",component:function(){return r.a.createElement(O,null)}}),r.a.createElement(v.a,{exact:!0,path:"/Home-2",component:function(){return r.a.createElement(O,null)}}),r.a.createElement(v.a,{exact:!0,path:"/Home-3",component:function(){return r.a.createElement(O,null)}}),r.a.createElement(v.a,{exact:!0,path:"/Page-1",component:function(){return r.a.createElement(O,null)}}),r.a.createElement(v.a,{exact:!0,path:"/Page-2",component:function(){return r.a.createElement(O,null)}}),r.a.createElement(v.a,{exact:!0,path:"/page-1",component:function(){return r.a.createElement(O,null)}}),r.a.createElement(v.a,{exact:!0,path:"/page-2",component:function(){return r.a.createElement(O,null)}}),r.a.createElement(v.a,{exact:!0,path:"/page-3",component:function(){return r.a.createElement(O,null)}}),r.a.createElement(v.a,{exact:!0,path:"/page-4",component:function(){return r.a.createElement(O,null)}})))},y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement((function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),a=t[0],c=t[1],o=function(){return c(!a)};return r.a.createElement(g.a,null,r.a.createElement("div",{className:"App wrapper"},r.a.createElement(b,{toggle:o,isOpen:a}),r.a.createElement(j,{toggle:o,isOpen:a})))}),null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/youtubeApplication",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/youtubeApplication","/service-worker.js");y?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):J(e)}))}}()}},[[34,1,2]]]);
//# sourceMappingURL=main.0446be98.chunk.js.map