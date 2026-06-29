import{o as e,t}from"./jsx-runtime-DVpe7PXp.js";import{t as n}from"./react-ByFLoWig.js";import{t as r}from"./clsx-CjueKrWZ.js";import{A as i,C as a,K as o,M as s,W as c,c as l,d as u,i as d,l as f,t as p,w as m}from"./utils-DU-cbQBf.js";import{t as h}from"./useId-_3Uy1TOF.js";import{t as g}from"./createSimplePaletteValueFilter-Bt9IjErz.js";var _=h,v=e(n(),1);function y(e){return m(`MuiCircularProgress`,e)}a(`MuiCircularProgress`,[`root`,`determinate`,`indeterminate`,`colorPrimary`,`colorSecondary`,`svg`,`track`,`circle`,`circleDisableShrink`]);var b=t(),x=44,S=s`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,C=s`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,w=typeof S==`string`?null:i`
        animation: ${S} 1.4s linear infinite;
      `,T=typeof C==`string`?null:i`
        animation: ${C} 1.4s ease-in-out infinite;
      `,E=e=>{let{classes:t,variant:n,color:r,disableShrink:i}=e;return o({root:[`root`,n,`color${c(r)}`],svg:[`svg`],track:[`track`],circle:[`circle`,i&&`circleDisableShrink`]},y,t)},D=u(`span`,{name:`MuiCircularProgress`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],t[`color${c(n.color)}`]]}})(l(({theme:e})=>{let t=p(e,{animation:`none`});return{display:`inline-block`,variants:[{props:{variant:`determinate`},style:{...d(e,`transform`)}},{props:{variant:`indeterminate`},style:w||{animation:`${S} 1.4s linear infinite`}},...t?[{props:{variant:`indeterminate`},style:t}]:[],...Object.entries(e.palette).filter(g()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}}))]}})),O=u(`svg`,{name:`MuiCircularProgress`,slot:`Svg`})({display:`block`}),k=u(`circle`,{name:`MuiCircularProgress`,slot:`Circle`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.circle,n.disableShrink&&t.circleDisableShrink]}})(l(({theme:e})=>{let t=p(e,{animation:`none`});return{stroke:`currentColor`,variants:[{props:{variant:`determinate`},style:{...d(e,`stroke-dashoffset`)}},{props:{variant:`indeterminate`},style:{strokeDasharray:`80px, 200px`,strokeDashoffset:0}},{props:({ownerState:e})=>e.variant===`indeterminate`&&!e.disableShrink,style:T||{animation:`${C} 1.4s ease-in-out infinite`}},...t?[{props:({ownerState:e})=>e.variant===`indeterminate`&&!e.disableShrink,style:t}]:[]]}})),A=u(`circle`,{name:`MuiCircularProgress`,slot:`Track`})(l(({theme:e})=>({stroke:`currentColor`,opacity:(e.vars||e).palette.action.activatedOpacity}))),j=v.forwardRef(function(e,t){let n=f({props:e,name:`MuiCircularProgress`}),{className:i,color:a=`primary`,disableShrink:o=!1,enableTrackSlot:s=!1,min:c,max:l,size:u=40,style:d,thickness:p=3.6,value:m=n.min??0,variant:h=`indeterminate`,...g}=n,_=c??0,v=l??100,y={...n,color:a,disableShrink:o,size:u,thickness:p,value:m,variant:h,enableTrackSlot:s},S=E(y),C={},w={},T={};if(h===`determinate`){let e=2*Math.PI*((x-p)/2),t=v-_;C.strokeDasharray=e.toFixed(3),C.strokeDashoffset=t>0?`${((v-m)/t*e).toFixed(3)}px`:`${e.toFixed(3)}px`,w.transform=`rotate(-90deg)`,T[`aria-valuenow`]=m,T[`aria-valuemin`]=_,T[`aria-valuemax`]=v}return(0,b.jsx)(D,{className:r(S.root,i),style:{width:u,height:u,...w,...d},ownerState:y,ref:t,role:`progressbar`,...T,...g,children:(0,b.jsxs)(O,{className:S.svg,ownerState:y,viewBox:`${x/2} ${x/2} ${x} ${x}`,children:[s?(0,b.jsx)(A,{className:S.track,ownerState:y,cx:x,cy:x,r:(x-p)/2,fill:`none`,strokeWidth:p,"aria-hidden":`true`}):null,(0,b.jsx)(k,{className:S.circle,style:C,ownerState:y,cx:x,cy:x,r:(x-p)/2,fill:`none`,strokeWidth:p})]})})});export{_ as n,j as t};