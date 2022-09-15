import{Q as F}from"./QPage.d0363454.js";import{B as T,r as L,E as w,L as S,I as e,G as a,av as q,Q as v,H as c,az as B,aA as y,a1 as b,F as D,aB as I,N as x,O as p,c as V,k,aC as u,q as z,p as M,a0 as P,aD as g,D as A,J as Q}from"./index.42606acb.js";import{u as N}from"./use-fullscreen.d71d4cf3.js";import{Q as E}from"./QBadge.b97fd85c.js";import{Q as m,a as s}from"./selection.96396454.js";import{Q as j,a as U}from"./QTable.c4bdfd0f.js";import{a as C,Q as f}from"./QList.272928c8.js";import"./notify.hook.52a25033.js";import"./rtl.4b414a6d.js";import"./QMenu.a843bec7.js";const $={class:"q-pa-md"},G={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},H={class:"text-subtitle1"},J={class:"text-subtitle2"},R=p(" Certificado de profesionalidad "),W=p("Lugar"),X=p("Puesto"),Y=["innerHTML"],K=T({__name:"ExperiencesMasonry",props:{rows:{type:Array,default:[],required:!0},loading:{type:Boolean,default:!1}},setup(r){const t=L(""),o=[{name:"title",required:!0,label:"T\xEDtulo",align:"left",field:n=>n.title,format:n=>`${n}`,sortable:!0},{name:"code",label:"C\xF3digo",field:"code",sortable:!0},{name:"jobTitle",label:"Cargo",field:"jobTitle"},{name:"place",label:"Lugar",field:"place"},{name:"comments",label:"Comentarios",field:"comments"},{name:"province",label:"Provincia",field:"province"},{name:"dateStart",label:"Fecha de inicio",field:"dateStart"},{name:"dateEnd",label:"Fecha de finalizaci\xF3n",field:"dateEnd"},{name:"idDoc",required:!1,label:"Identificador",field:"idDoc"}],i=n=>n.toDate().toLocaleDateString(),d=(n,_,l)=>`${l} registros`;return(n,_)=>(w(),S("div",$,[e(U,{loading:r.loading,"loading-label":"Esperando la carga de datos...",grid:"","card-class":"bg-primary text-white",title:"Experiencia laboral",rows:r.rows,columns:o,filter:t.value,"row-key":"idDoc","rows-per-page-options":[0],"pagination-label":d},{"top-right":a(()=>[e(q,{borderless:"",dense:"",debounce:"300",modelValue:t.value,"onUpdate:modelValue":_[0]||(_[0]=l=>t.value=l),placeholder:"Buscar"},{append:a(()=>[e(v,{name:"search"})]),_:1},8,["modelValue"])]),item:a(l=>[c("div",G,[e(B,{bordered:""},{default:a(()=>[e(y,{class:"bg-primary text-white"},{default:a(()=>[e(C,null,{default:a(()=>[e(m,null,{default:a(()=>[e(s,null,{default:a(()=>[c("h2",H,b(l.row.title),1),c("span",null,[e(E,{style:{display:"inline-block"},color:"orange",label:i(l.row.dateStart)},null,8,["label"])])]),_:2},1024)]),_:2},1024),e(m,null,{default:a(()=>[e(s,null,{default:a(()=>[e(f,null,{default:a(()=>{var h;return[c("span",J,b(l.row.code),1),(h=l.row)!=null&&h.is_certificado_profesionalidad?(w(),D(j,{key:0,size:"xs",dense:"",class:"glossy",color:"white","text-color":"red",icon:"star"},{default:a(()=>[R]),_:1})):I("",!0)]}),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(x),e(y,null,{default:a(()=>[e(C,null,{default:a(()=>[e(m,null,{default:a(()=>[e(s,null,{default:a(()=>[e(f,null,{default:a(()=>[W]),_:1}),e(f,{caption:""},{default:a(()=>[p(b(l.row.place),1)]),_:2},1024)]),_:2},1024),e(s,{side:"",top:""},{default:a(()=>[e(E,{color:"teal",label:l.row.province},{default:a(()=>[e(v,{name:"location_on",size:"14px",class:"q-ml-xs"})]),_:2},1032,["label"])]),_:2},1024)]),_:2},1024),e(x,{spaced:"",inset:""}),e(m,null,{default:a(()=>[e(s,null,{default:a(()=>[e(f,null,{default:a(()=>[X]),_:1}),e(f,{caption:""},{default:a(()=>[p(b(l.row.jobTitle),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(x,{spaced:"",inset:""}),e(m,null,{default:a(()=>[e(s,null,{default:a(()=>[c("div",{class:"experience text-body1",innerHTML:l.row.comments},null,8,Y)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)])]),_:1},8,["loading","rows","filter"])]))}});function O(r){{const t={active:!0};if(typeof r=="function"){const o=V(r);t.val=o.value,k(o,i=>{t.val=i,t.active===!0&&u()})}else t.val=r;g.push(t),u(),z(()=>{t.active=!0,u()}),M(()=>{t.active=!1,u()}),P(()=>{g.splice(g.indexOf(t),1),u()})}}const Z=({title:r="Programador y dise\xF1ador web",descriptionContent:t="",keywordsContent:o=""})=>{Array.isArray(o)&&(o=o.join()),O({title:r,titleTemplate:d=>`${d} - WebFerrol`,meta:{description:{name:"description",content:t},keywords:{name:"keywords",content:o},equiv:{"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}},noscript:{default:"This is content for browsers with no JS (or disabled JS)"}})},ce=T({__name:"WorkExperience",setup(r){Z({title:"Experiencia laboral",descriptionContent:"Curriculum Vitae de Xurxo Gonz\xE1lez Tenreiro. Programador y dise\xF1ador web",keywordsContent:["Curriculum Vitae","experiencia laborar de Xurxo Gonz\xE1lez Tenreiro","Programador","programador web","dise\xF1ador web","gestor de contenidos"]});const t=N(),{setExperiencesFromCloud:o}=t;o();const{experiences:i,loading:d}=A(t);return(n,_)=>(w(),D(F,{padding:""},{default:a(()=>[e(K,{loading:Q(d),rows:Q(i)},null,8,["loading","rows"])]),_:1}))}});export{ce as default};
