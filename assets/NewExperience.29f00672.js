import{B as f,D as v,r as c,E as b,F as x,G as d,I as o,S as l,J as i,bq as E,H as S}from"./index.64cc4690.js";import{a as U}from"./QBtnDropdown.9c6bb289.js";import{Q as _}from"./QForm.1039961a.js";import{Q as T}from"./QPage.a7e31bdc.js";import{u as s}from"./use-fullscreen.82a685f6.js";import{_ as j}from"./FormExperience.2a73bdd2.js";import"./QMenu.95c2d008.js";import"./selection.5d2e53af.js";import"./notify.hook.f33a760a.js";import"./QItem.9b8fe882.js";const B=S("h1",{class:"text-h5"},"Nueva experiencia",-1),$=f({__name:"NewExperience",setup(Q){const{addExperience:p}=s(),{experience:u,loading:r}=v(s()),n={code:"",title:"",jobTitle:"",dateStart:"",dateEnd:"",place:"",province:"",comments:"",is_certificado_profesionalidad:!1},e=c({...n}),m=()=>{e.value={...n}};return(g,t)=>(b(),x(T,{padding:""},{default:d(()=>[B,o(_,{autofocus:"",onReset:m,onSubmit:t[9]||(t[9]=E(a=>i(p)({...i(u),...e.value}),["prevent"]))},{default:d(()=>[o(j,{code:e.value.code,"onUpdate:code":t[0]||(t[0]=a=>e.value.code=a),title:e.value.title,"onUpdate:title":t[1]||(t[1]=a=>e.value.title=a),jobTitle:e.value.jobTitle,"onUpdate:jobTitle":t[2]||(t[2]=a=>e.value.jobTitle=a),dateStart:e.value.dateStart,"onUpdate:dateStart":t[3]||(t[3]=a=>e.value.dateStart=a),dateEnd:e.value.dateEnd,"onUpdate:dateEnd":t[4]||(t[4]=a=>e.value.dateEnd=a),place:e.value.place,"onUpdate:place":t[5]||(t[5]=a=>e.value.place=a),province:e.value.province,"onUpdate:province":t[6]||(t[6]=a=>e.value.province=a),comments:e.value.comments,"onUpdate:comments":t[7]||(t[7]=a=>e.value.comments=a),is_certificado_profesionalidad:e.value.is_certificado_profesionalidad,"onUpdate:is_certificado_profesionalidad":t[8]||(t[8]=a=>e.value.is_certificado_profesionalidad=a)},null,8,["code","title","jobTitle","dateStart","dateEnd","place","province","comments","is_certificado_profesionalidad"]),o(U,{push:"",class:"q-mt-xl"},{default:d(()=>[o(l,{icon:"add",loading:i(r),disable:i(r),label:"Nueva experiencia",type:"submit",color:"primary"},null,8,["loading","disable"]),o(l,{icon:"restart_alt",label:"Reiniciar",type:"reset",color:"secondary"})]),_:1})]),_:1})]),_:1}))}});export{$ as default};