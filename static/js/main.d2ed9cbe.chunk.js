(this.webpackJsonpfiregram=this.webpackJsonpfiregram||[]).push([[0],{26:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(19),l=a.n(c),i=a(21),s=(a(26),a(4)),u=a(15),o=a(11);a(30),a(31);o.a.initializeApp({apiKey:"AIzaSyCl63zqMcojY4h7wdZJt-1AM6vPx0HW6Fk",authDomain:"photogram-dd2e8.firebaseapp.com",projectId:"photogram-dd2e8",storageBucket:"photogram-dd2e8.appspot.com",messagingSenderId:"220032081654",appId:"1:220032081654:web:83abd095cac32d28f616d7"});var m=o.a.storage(),d=o.a.firestore(),p=o.a.firestore.FieldValue.serverTimestamp,f=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var t=d.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(u.a)(Object(u.a)({},e.data()),{},{id:e.id}))})),c(t)}));return function(){return t()}}),[e]),{docs:r}},g=a(33),b=function(e){var t=e.setSelectedImg,a=f("images").docs;return console.log(a),r.a.createElement("div",{className:"img-grid"},a&&a.map((function(e){return r.a.createElement(g.a.div,{className:"img-wrap",key:e.id,layout:!0,whileHover:{opacity:1},onClick:function(){return t(e.url)}},r.a.createElement(g.a.img,{src:e.url,alt:"pictures",initial:{opacity:0},animate:{opacity:1},transition:{delay:.8}}))})))},v=function(e){var t=e.selectedImg,a=e.setSelectedImg;return r.a.createElement(g.a.div,{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&a(null)},initial:{opacity:0},animate:{opacity:1}},r.a.createElement(g.a.img,{src:t,alt:"highlighted",initial:{y:"-100vh"},animate:{y:0}}))},E=function(){return r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"Pictures"),r.a.createElement("h2",null,"Your Pictures"),r.a.createElement("p",null,"user bio"))},h=a(14),j=a.n(h),O=a(20),y=function(e){var t=Object(n.useState)(0),a=Object(s.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(null),i=Object(s.a)(l,2),u=i[0],o=i[1],f=Object(n.useState)(null),g=Object(s.a)(f,2),b=g[0],v=g[1];return Object(n.useEffect)((function(){var t=m.ref(e.name),a=d.collection("images");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;c(t)}),(function(e){o(e)}),Object(O.a)(j.a.mark((function e(){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:n=e.sent,r=p(),a.add({url:n,createdAt:r}),v(n);case 6:case"end":return e.stop()}}),e)}))))}),[e]),{progress:r,url:b,error:u}},S=function(e){var t=e.file,a=e.setFile,c=y(t),l=c.url,i=c.progress;return Object(n.useEffect)((function(){l&&a(null)}),[l,a]),r.a.createElement(g.a.div,{className:"progressbar",intital:{width:0},animate:{width:i+"%"}})},w=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),i=Object(s.a)(l,2),u=i[0],o=i[1],m=["image/png","image/jpeg"];return r.a.createElement("form",null,r.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files[0];c(t),null!==t&&m.includes(t.type)?(c(t),o("")):(c(null),o("Please upload an image file"))}}),r.a.createElement("div",{className:"output"},u&&r.a.createElement("div",{className:"error"}," ",u," "),a&&r.a.createElement("div",null," ",a.name," "),a&&r.a.createElement(S,{file:a,setFile:c})))};var I=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement(w,null),r.a.createElement(b,{setSelectedImg:c}),a&&r.a.createElement(v,{selectedImg:a,setSelectedImg:c}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{base:"/"},r.a.createElement(I,null))),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.d2ed9cbe.chunk.js.map