import{o as e,t}from"./jsx-runtime-DVpe7PXp.js";import{t as n}from"./react-ByFLoWig.js";import{t as r}from"./clsx-CjueKrWZ.js";import{A as i,C as a,K as o,M as s,d as c,f as l,l as u,w as d}from"./utils-DU-cbQBf.js";import{i as f,n as p,t as m}from"./useReducedMotion-C2RCxVR3.js";import{i as h,n as g,r as _}from"./useTimeout-CrH3S-vY.js";function v(e){try{return e.matches(`:focus-visible`)}catch{}return!1}var y=e(n(),1);function b(e){let{focusableWhenDisabled:t,disabled:n,composite:r=!1,tabIndex:i=0,isNativeButton:a}=e,o=r&&t!==!1,s=r&&t===!1;return y.useMemo(()=>{let e={onKeyDown(e){n&&t&&e.key!==`Tab`&&e.preventDefault()}};return r||(e.tabIndex=i,!a&&n&&(e.tabIndex=t?i:-1)),(a&&(t||o)||!a&&n)&&(e[`aria-disabled`]=n),a&&(!t||s)&&(e.disabled=n),e},[r,n,t,o,s,a,i])}var x={};function S(e){let{nativeButton:t,nativeButtonProp:n,internalNativeButton:r=t,allowInferredHostMismatch:i=!1,disabled:a,type:o,hasFormAction:s=!1,tabIndex:c=0,focusableWhenDisabled:l,stopEventPropagation:u=!1,onBeforeKeyDown:d,onBeforeKeyUp:f}=e,p=y.useRef(null),m=l===!0,h=b({focusableWhenDisabled:m,disabled:a,isNativeButton:t,tabIndex:c}),g=y.useCallback(()=>{let e=p.current;return e==null?t:e.tagName===`BUTTON`?!0:!!(e.tagName===`A`&&e.href)},[t]),_=y.useMemo(()=>{let e=m?{}:{tabIndex:a?-1:c};return t?(e.type=o===void 0&&!s?`button`:o,m||(e.disabled=a)):(e.role=`button`,!m&&a&&(e[`aria-disabled`]=a)),m?{...e,...h}:e},[a,m,h,s,t,c,o]);return{getButtonProps:y.useCallback((e=x)=>{let{onClick:t,onKeyDown:n,onKeyUp:r,...i}=e,o=e=>{if(u&&e.stopPropagation(),a){e.preventDefault();return}t?.(e)},s=e=>{if(m&&h.onKeyDown(e),!a&&(d?.(e),n?.(e),!(e.target!==e.currentTarget||g()))){if(e.key===` `){e.preventDefault();return}e.key===`Enter`&&(e.preventDefault(),e.currentTarget.click())}},c=e=>{a||(f?.(e),r?.(e),e.target===e.currentTarget&&!g()&&e.key===` `&&!e.defaultPrevented&&e.currentTarget.click())};return{..._,...i,onClick:o,onKeyDown:s,onKeyUp:c}},[_,a,m,h,g,d,f,u]),rootRef:p}}var C=class e{static create(){return new e}static use(){let t=p(e.create).current,[n,r]=y.useState(!1);return t.shouldMount=n,t.setShouldMount=r,y.useEffect(t.mountEffect,[n]),t}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=T(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...e){this.mount().then(()=>this.ref.current?.start(...e))}stop(...e){this.mount().then(()=>this.ref.current?.stop(...e))}pulsate(...e){this.mount().then(()=>this.ref.current?.pulsate(...e))}};function w(){return C.use()}function T(){let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n}var E=t();function D(e){let{className:t,classes:n,pulsate:i=!1,rippleX:a,rippleY:o,rippleSize:s,in:c,onExited:l,timeout:u}=e,[d,f]=y.useState(!1),p=g(),m=y.useRef(!1),h=y.useRef(l);h.current=l;let _=l!=null,v=r(t,n.ripple,n.rippleVisible,i&&n.ripplePulsate),b={width:s,height:s,top:-(s/2)+o,left:-(s/2)+a},x=r(n.child,d&&n.childLeaving,i&&n.childPulsate);return!c&&!d&&f(!0),y.useEffect(()=>{!c&&_?m.current||(m.current=!0,p.start(u,()=>{m.current=!1,h.current?.()})):(m.current=!1,p.clear())},[p,_,c,u]),(0,E.jsx)(`span`,{className:v,style:b,children:(0,E.jsx)(`span`,{className:x})})}var O=a(`MuiTouchRipple`,[`root`,`ripple`,`rippleVisible`,`ripplePulsate`,`child`,`childLeaving`,`childPulsate`]),k=550,A={},j=[],M=()=>{};function N(e,t){let n=new Set(t),r=new Map,i=[];for(let t of e)n.has(t)?i.length>0&&(r.set(t,i),i=[]):i.push(t);let a=[];for(let e of t){let t=r.get(e);t&&a.push(...t),a.push(e)}return a.push(...i),a}function P({event:e,element:t,center:n}){let r=t?t.getBoundingClientRect():{width:0,height:0,left:0,top:0},i,a;if(n||e===void 0||e.clientX===0&&e.clientY===0||!e.clientX&&!e.touches)i=Math.round(r.width/2),a=Math.round(r.height/2);else{let{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;i=Math.round(t-r.left),a=Math.round(n-r.top)}let o;if(n)o=Math.sqrt((2*r.width**2+r.height**2)/3),o%2==0&&(o+=1);else{let e=Math.max(Math.abs((t?t.clientWidth:0)-i),i)*2+2,n=Math.max(Math.abs((t?t.clientHeight:0)-a),a)*2+2;o=Math.sqrt(e**2+n**2)}return{rippleX:i,rippleY:a,rippleSize:o}}var F=s`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,I=s`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,L=s`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`;function R(e){if(e.motion.reducedMotion===`always`)return null;let t=i`
    &.${O.rippleVisible} {
      animation-name: ${F};
      animation-duration: ${k}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${O.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${O.childLeaving} {
      animation-name: ${I};
      animation-duration: ${k}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${O.childPulsate} {
      animation-name: ${L};
      animation-duration: 2500ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;return e.motion.reducedMotion===`system`?i`
      @media (prefers-reduced-motion: no-preference) {
        ${t}
      }
    `:t}var z=c(`span`,{name:`MuiTouchRipple`,slot:`Root`})({overflow:`hidden`,pointerEvents:`none`,position:`absolute`,zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:`inherit`}),B=c(D,{name:`MuiTouchRipple`,slot:`Ripple`})`
  opacity: 0;
  position: absolute;

  &.${O.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
  }

  /*
   * Order matters: 'child', 'childLeaving' and 'childPulsate' apply to the same
   * element with equal specificity, so the later rule wins. 'child' must come
   * before 'childLeaving' so the leaving 'opacity: 0' takes precedence. A focus
   * (pulsate) ripple keeps 'pulsateKeyframe' (no opacity animation) on exit, so
   * it relies on this static 'opacity: 0' to disappear on blur instead of
   * lingering until removal.
   */
  & .${O.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${O.childLeaving} {
    opacity: 0;
  }

  & .${O.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({theme:e})=>R(e)}
`,ee=y.forwardRef(function(e,t){let n=u({props:e,name:`MuiTouchRipple`}),i=m(l().motion.reducedMotion,!1),{center:a=!1,classes:o=A,className:s,...c}=n,[d,f]=y.useState({items:j,order:j}),p=d.items,v=y.useRef(0),b=y.useRef(null),x=y.useRef(!1);_(()=>(x.current=!0,()=>{x.current=!1})),y.useEffect(()=>{b.current&&=(b.current(),null)},[p]);let S=y.useRef(!1),C=g(),w=y.useRef(null),T=y.useRef(null),D=h(e=>{x.current&&f(t=>{let n=t.items.filter(t=>t.key!==e);return{items:n,order:N(t.order.filter(t=>t!==e),n.filter(e=>!e.exiting).map(e=>e.key))}})}),F=h(e=>{let{pulsate:t,rippleX:n,rippleY:r,rippleSize:i,cb:a}=e,o=v.current;v.current+=1,f(e=>{let a=[...e.items,{key:o,pulsate:t,rippleX:n,rippleY:r,rippleSize:i,exiting:!1}];return{items:a,order:N(e.order,a.filter(e=>!e.exiting).map(e=>e.key))}}),b.current=a}),I=h((e=A,t=A,n=M)=>{let{pulsate:r=!1,center:i=a||t.pulsate,fakeElement:o=!1}=t;if(e?.type===`mousedown`&&S.current){S.current=!1;return}e?.type===`touchstart`&&(S.current=!0);let{rippleX:s,rippleY:c,rippleSize:l}=P({event:e,element:o?null:T.current,center:i});e?.touches?w.current===null&&(w.current=()=>{F({pulsate:r,rippleX:s,rippleY:c,rippleSize:l,cb:n})},C.start(80,()=>{w.current&&=(w.current(),null)})):F({pulsate:r,rippleX:s,rippleY:c,rippleSize:l,cb:n})}),L=h(()=>{I(A,{pulsate:!0})}),R=h((e,t)=>{if(C.clear(),e?.type===`touchend`&&w.current){w.current(),w.current=null,C.start(0,()=>{R(e,t)});return}w.current=null,f(e=>{let t=e.items.findIndex(e=>!e.exiting);if(t===-1)return e;let n=e.items.slice();return n[t]={...n[t],exiting:!0},{items:n,order:N(e.order,n.filter(e=>!e.exiting).map(e=>e.key))}}),b.current=t});y.useImperativeHandle(t,()=>({pulsate:L,start:I,stop:R}),[L,I,R]);let ee=new Map(p.map(e=>[e.key,e])),V=d.order.map(e=>ee.get(e)).filter(Boolean);return(0,E.jsx)(z,{className:r(O.root,o.root,s),ref:T,...c,children:V.map(e=>(0,E.jsx)(B,{classes:{ripple:r(o.ripple,O.ripple),rippleVisible:r(o.rippleVisible,O.rippleVisible),ripplePulsate:r(o.ripplePulsate,O.ripplePulsate),child:r(o.child,O.child),childLeaving:r(o.childLeaving,O.childLeaving),childPulsate:r(o.childPulsate,O.childPulsate)},timeout:i.shouldReduceMotion?0:k,pulsate:e.pulsate,rippleX:e.rippleX,rippleY:e.rippleY,rippleSize:e.rippleSize,in:!e.exiting,onExited:()=>D(e.key)},e.key))})});function V(e){return d(`MuiButtonBase`,e)}var H=a(`MuiButtonBase`,[`root`,`disabled`,`focusVisible`]),te=e=>{let{disabled:t,focusVisible:n,focusVisibleClassName:r,suppressFocusVisible:i,classes:a}=e,s=o({root:[`root`,t&&`disabled`,n&&!i&&`focusVisible`]},V,a);return n&&!i&&r&&(s.root+=` ${r}`),s},ne=c(`button`,{name:`MuiButtonBase`,slot:`Root`})({display:`inline-flex`,alignItems:`center`,justifyContent:`center`,position:`relative`,boxSizing:`border-box`,WebkitTapHighlightColor:`transparent`,backgroundColor:`transparent`,outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:`pointer`,userSelect:`none`,verticalAlign:`middle`,MozAppearance:`none`,WebkitAppearance:`none`,textDecoration:`none`,color:`inherit`,"&::-moz-focus-inner":{borderStyle:`none`},[`&.${H.disabled}`]:{pointerEvents:`none`,cursor:`default`},"@media print":{colorAdjust:`exact`}}),U=y.forwardRef(function(e,t){let n=u({props:e,name:`MuiButtonBase`}),{action:i,centerRipple:a=!1,children:o,className:s,component:c=`button`,disabled:l=!1,disableRipple:d=!1,disableTouchRipple:p=!1,focusRipple:m=!1,focusVisibleClassName:g,focusableWhenDisabled:_,suppressFocusVisible:b=!1,internalNativeButton:x,LinkComponent:C=`a`,nativeButton:T,onBlur:D,onClick:O,onContextMenu:k,onDragLeave:A,onFocus:j,onFocusVisible:M,onKeyDown:N,onKeyUp:P,onMouseDown:F,onMouseLeave:I,onMouseUp:L,onTouchEnd:R,onTouchMove:z,onTouchStart:B,tabIndex:V=0,TouchRippleProps:H,touchRippleRef:U,type:re,...G}=n,K=!!(G.href||G.to),ie=!!G.formAction,q=c;q===`button`&&K&&(q=C);let J=typeof q==`string`?q===`button`:x??!1,ae=T??J,Y=w(),oe=f(Y.ref,U),[X,Z]=y.useState(!1);(l||b)&&X&&Z(!1);let se=h(e=>{m&&!e.repeat&&X&&e.key===` `&&Y.stop(e,()=>{Y.start(e)})}),ce=h(e=>{m&&e.key===` `&&X&&!e.defaultPrevented&&Y.stop(e,()=>{Y.pulsate(e)})}),{getButtonProps:le,rootRef:Q}=S({nativeButton:ae,nativeButtonProp:T,internalNativeButton:J,allowInferredHostMismatch:K||typeof q==`string`,disabled:l,type:re,hasFormAction:ie,tabIndex:V,onBeforeKeyDown:se,onBeforeKeyUp:ce}),{onClick:ue,onKeyDown:de,onKeyUp:fe,...pe}=le({onClick:O,onKeyDown:N,onKeyUp:P});y.useImperativeHandle(i,()=>({focusVisible:()=>{Z(!0),Q.current.focus()}}),[Q]);let me=Y.shouldMount&&!d&&!l;y.useEffect(()=>{X&&m&&!d&&Y.pulsate()},[d,m,X,Y]);let he=W(Y,`start`,F,p),ge=W(Y,`stop`,k,p),_e=W(Y,`stop`,A,p),ve=W(Y,`stop`,L,p),ye=W(Y,`stop`,e=>{X&&e.preventDefault(),I&&I(e)},p),be=W(Y,`start`,B,p),xe=W(Y,`stop`,R,p),Se=W(Y,`stop`,z,p),Ce=W(Y,`stop`,e=>{v(e.target)||Z(!1),D&&D(e)},!1),we=h(e=>{Q.current||=e.currentTarget,!b&&v(e.target)&&(Z(!0),M&&M(e)),j&&j(e)}),$={};K&&($.tabIndex=l?-1:V,l&&($[`aria-disabled`]=l),$.type=re);let Te=f(t,Q),Ee={...n,centerRipple:a,component:c,disabled:l,disableRipple:d,disableTouchRipple:p,focusRipple:m,suppressFocusVisible:b,tabIndex:V,focusVisible:X},De=te(Ee);return(0,E.jsxs)(ne,{as:q,className:r(De.root,s),ownerState:Ee,onBlur:Ce,onClick:ue,onContextMenu:ge,onFocus:we,onKeyDown:de,onKeyUp:fe,onMouseDown:he,onMouseLeave:ye,onMouseUp:ve,onDragLeave:_e,onTouchEnd:xe,onTouchMove:Se,onTouchStart:be,ref:Te,...K?$:pe,...G,children:[o,me?(0,E.jsx)(ee,{ref:oe,center:a,...H}):null]})});function W(e,t,n,r=!1){return h(i=>(n&&n(i),r||e[t](i),!0))}export{v as n,U as t};