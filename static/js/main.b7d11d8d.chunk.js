(this.webpackJsonprecipehero=this.webpackJsonprecipehero||[]).push([[0],{16:function(e,t,n){},17:function(e){e.exports=JSON.parse('{"todos":[{"id":1,"text":"sample todo task 1","date":"May 7th at 1:30pm","status":"todo"},{"id":2,"text":"sample task 2 Do the homework!","date":"May 7th at 8:30pm","status":"todo"},{"id":3,"text":"sample task 3 Take pills","date":"May 4th at 12.05am","status":"todo"}],"dones":[{"id":1,"text":"sample done task 1","date":"May 7th at 1:30pm","status":"done"},{"id":2,"text":"sample done task 2","date":"May 7th at 1:30pm","status":"done"}]}')},37:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(21),o=n.n(s),r=(n(16),n(18)),i=n(2),d=n(13),l=n(7),j=n(8),u=n(0),b=function(e){var t=e.text,n=e.onClick;return Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:n,className:"btn",children:t})})},h=function(e){var t=e.onAdd,n=e.showAddTask;return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("h1",{children:"To-Do"}),Object(u.jsx)(b,{onClick:t,text:n?"Close":"Add"})]})},O=n(20),x=function(e){var t=e.task,n=e.onDelete,c=e.onToggle,a=e.onFinish;return Object(u.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(u.jsxs)("h3",{children:[t.text,Object(u.jsx)(O.b,{style:{color:"grey",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(u.jsx)("p",{children:t.date}),"todo"===t.status?Object(u.jsx)(O.a,{onClick:function(){return a(t.id)}}):""]})},p=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle,a=e.onFinish;return Object(u.jsx)(u.Fragment,{children:t.map((function(e){return Object(u.jsx)(x,{task:e,onDelete:n,onToggle:c,onFinish:a},e.id)}))})},f=function(e){var t=e.onAdd,n=Object(c.useState)(""),a=Object(j.a)(n,2),s=a[0],o=a[1],r=Object(c.useState)(""),i=Object(j.a)(r,2),d=i[0],l=i[1],b=Object(c.useState)(!1),h=Object(j.a)(b,2),O=h[0],x=h[1];return Object(u.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),s?(t({text:s,date:d,reminder:O,status:"todo"}),o(""),l(""),x(!1)):alert("Please add task")},children:[Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Task"}),Object(u.jsx)("input",{type:"text",placeholder:"Add Task",value:s,onChange:function(e){return o(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Date"}),Object(u.jsx)("input",{type:"text",placeholder:"Add Date",value:d,onChange:function(e){return l(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Reminder"}),Object(u.jsx)("input",{type:"checkbox",value:O,onChange:function(e){return x(e.currentTarget.checked)}})]}),Object(u.jsx)("input",{className:"btn",type:"submit",value:"Add task"})]})},m=function(){return Object(u.jsx)("div",{className:"header",children:Object(u.jsx)("h1",{children:"Done"})})},k=n(17);var g=function(){var e,t,n=Object(c.useState)(!1),a=Object(j.a)(n,2),s=a[0],o=a[1],r=Object(c.useState)(Object(l.a)(k.todos)),i=Object(j.a)(r,2),b=i[0],O=i[1],x=Object(c.useState)(Object(l.a)(k.dones)),g=Object(j.a)(x,2),v=g[0],y=g[1];(e=console).log.apply(e,Object(l.a)(b)),(t=console).log.apply(t,Object(l.a)(v));var T=function(e){var t;O(b.filter((function(t){return t.id!==e})));var n=0!==v.length?v.slice(-1)[0].id+1:0,c=b.filter((function(t){return t.id===e}));c[0].id=n,c[0].status="done",(t=console).log.apply(t,Object(l.a)(c)),y([].concat(Object(l.a)(v),Object(l.a)(c))),console.log(v)};return Object(u.jsxs)("div",{className:"todo",children:[Object(u.jsx)(h,{onAdd:function(){return o(!s)},showAddTask:s,todos:b}),s&&Object(u.jsx)(f,{onAdd:function(e){var t=0!==b.length?b.slice(-1)[0].id+1:0,n=Object(d.a)({id:t},e);O([].concat(Object(l.a)(b),[n]))}}),b.length>0?Object(u.jsx)(p,{tasks:b,onDelete:function(e){O(b.filter((function(t){return t.id!==e}))),console.log(Object(l.a)(b),Object(l.a)(v))},onToggle:function(e){O(b.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{reminder:!t.reminder}):t})))},onFinish:T}):"No Task currently, click Add to create a new task",Object(u.jsx)(m,{dones:v}),v.length>0?Object(u.jsx)(p,{tasks:v,onDelete:function(e){y(v.filter((function(t){return t.id!==e})))},onToggle:null,onFinish:T}):"No Task currently, click Add to create a new task"]})};n.p;var v=function(){return Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(r.a,{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("nav",{className:"nav",children:Object(u.jsx)("ul",{className:"nav-btn",children:Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/",children:"ToDo"})})})}),Object(u.jsx)(i.c,{children:Object(u.jsx)(i.a,{path:"/",component:g,children:Object(u.jsx)(y,{})})})]}),Object(u.jsxs)("footer",{children:[Object(u.jsx)("h5",{children:"Epic Byte"}),Object(u.jsx)("p",{children:"Yuan, Beamish, Wozniak, Hollingworth "}),Object(u.jsxs)("p",{children:["CDU HIT226 | \xa9 2021 |"," ",Object(u.jsx)("a",{href:"https://epicbyte-cdu.bitbucket.io/project/pages/index.html",children:"Home page"})]})]})]})})};function y(){return g()}var T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),T()}},[[37,1,2]]]);
//# sourceMappingURL=main.b7d11d8d.chunk.js.map