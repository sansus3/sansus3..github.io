import{a7 as s,a8 as a,a9 as d,b as c}from"./index.42606acb.js";function p(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var u=s({name:"close-popup",beforeMount(e,{value:t}){const o={depth:p(t),handler(r){o.depth!==0&&setTimeout(()=>{const n=a(e);n!==void 0&&d(n,r,o.depth)})},handlerKey(r){c(r,13)===!0&&o.handler(r)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:t,oldValue:o}){t!==o&&(e.__qclosepopup.depth=p(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});export{u as C};
