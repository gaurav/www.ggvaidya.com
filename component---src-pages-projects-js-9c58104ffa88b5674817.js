(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"16l3":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return D}));var r=n("q1tI"),a=n.n(r),i=n("ExVU"),o=(n("Wbzz"),n("NmYn")),s=n.n(o),c=n("uKGf"),l=(n("GROH"),n("T/XA")),m=(n("+0Gm"),n("snnE")),d=n("trxo"),u=n("Bl7J"),p=n("EqzN"),f=n.n(p),T=n("y5q0"),E=n("sSte"),j=n("7q6O");function D(){var e=new d.a;e.addEntitiesFromData(E),e.addEntitiesFromData(j);var t=e.fillReferences(T).projects.map((function(e){var t=Object.assign({},e);return t.startTime=i.DateTime.fromISO(t.startDate),t.endTime=i.DateTime.fromISO(t.endDate),t.products=(t.products||[]).map((function(e){var t=Object.assign({},e);return t.startTime=i.DateTime.fromISO(t.startDate),t.endTime=i.DateTime.fromISO(t.endDate),t})).sort((function(e,t){return t.endTime.toMillis()-e.endTime.toMillis()})),t})).sort((function(e,t){return t.endTime.toMillis()-e.endTime.toMillis()}));return a.a.createElement(u.a,{title:"Projects"},t.map((function(e,t){var n=s()(e.name);return a.a.createElement("div",null,a.a.createElement("div",{id:n,class:f.a.projectTitle},a.a.createElement("a",{class:"section-link",href:"#"+n},"§"),c.a(e.startTime,e.endTime)," ","•"," ",a.a.createElement("strong",null,e.name)),e.description&&m.a(e.description,!0),a.a.createElement("ul",{class:"uncompressed"},e.products.map((function(e){return a.a.createElement("li",null,l.a(e,n))}))),a.a.createElement("hr",{class:f.a.projectEndHR}))})))}},EqzN:function(e,t,n){e.exports={projectTitle:"projects-module--projectTitle--154kd",projectEndHR:"projects-module--projectEndHR--28ObJ"}}}]);
//# sourceMappingURL=component---src-pages-projects-js-9c58104ffa88b5674817.js.map