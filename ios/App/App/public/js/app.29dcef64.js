(()=>{var e={2330:(e,t,r)=>{var o={"./pwa-action-sheet.entry.js":[2740,736],"./pwa-camera-modal-instance.entry.js":[7514,736],"./pwa-camera-modal.entry.js":[2800,736],"./pwa-camera.entry.js":[5153,736],"./pwa-toast.entry.js":[8250,736]};function n(e){if(!r.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],n=t[0];return r.e(t[1]).then((()=>r(n)))}n.keys=()=>Object.keys(o),n.id=2330,e.exports=n},4510:(e,t,r)=>{"use strict";r(7280),r(5363),r(71);var o=r(3675),n=r(9592),a=r(2494);const i={setup(e){return(e,t)=>{const r=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(r)}}},s=i;var u=r(8466),c=r(7083),l=r(9582);const d=[{name:"baseRoute",path:"/",component:()=>Promise.all([r.e(736),r.e(146)]).then(r.bind(r,6146)),children:[{name:"homePage",path:"",component:()=>Promise.all([r.e(736),r.e(618)]).then(r.bind(r,4618)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(530)]).then(r.bind(r,5530))},{path:"/add",component:()=>Promise.all([r.e(736),r.e(194)]).then(r.bind(r,8194))}]},{name:"loginRoute",path:"/login",component:()=>r.e(118).then(r.bind(r,118))},{name:"scheduleRoute",path:"/schedule",component:()=>Promise.all([r.e(736),r.e(799)]).then(r.bind(r,9799)),meta:{requiresAuth:!0}},{name:"camRoute",path:"/cam",component:()=>Promise.all([r.e(736),r.e(105)]).then(r.bind(r,5105))}]},{path:"/:catchAll(.*)*",component:()=>r.e(645).then(r.bind(r,645))}],f=d,p=(0,c.BC)((function({store:e}){const t=l.r5,r=(0,l.p7)({scrollBehavior:()=>({left:0,top:0}),routes:f,history:t("")});return r.beforeEach(((t,r,o)=>{t.matched.some((e=>e.meta.requireAuth))&&!e.state.auth.isAuthenticated?o("login"):o()})),r}));async function h(e,t){const o="function"===typeof u.default?await(0,u.default)({}):u.default,{storeKey:a}=await Promise.resolve().then(r.bind(r,8466)),i="function"===typeof p?await p({store:o}):p;o.$router=i;const c=e(s);return c.use(n.Z,t),{app:c,store:o,storeKey:a,router:i}}var m=r(4434),v=r(6249);const b={config:{notify:{},brand:{primary:"#b80000",secondary:"#f0d551",accent:"#ff0303",dark:"#2e2e2e",positive:"#00a100",negative:"#ff0000",info:"#3280ed",warning:"#ffa629"},loading:{color:"primary"}},plugins:{Notify:m.Z,Loading:v.Z}},g="";async function y({app:e,router:t,store:r,storeKey:o},n){let a=!1;const i=e=>{a=!0;const r=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=r},s=window.location.href.replace(window.location.origin,"");for(let c=0;!1===a&&c<n.length;c++)try{await n[c]({app:e,router:t,store:r,ssrContext:null,redirect:i,urlPath:s,publicPath:g})}catch(u){return u&&u.url?void(window.location.href=u.url):void console.error("[Quasar] boot error:",u)}!0!==a&&(e.use(t),e.use(r,o),e.mount("#q-app"))}h(o.ri,b).then((e=>Promise.all([Promise.resolve().then(r.bind(r,4112)),Promise.resolve().then(r.bind(r,5474)),Promise.resolve().then(r.bind(r,5954)),Promise.resolve().then(r.bind(r,2490)),Promise.resolve().then(r.bind(r,6714))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));y(e,r)}))))},5474:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s,api:()=>i});var o=r(7083),n=r(52),a=r.n(n);const i=a().create({baseURL:"http://api.graymatterf0rge.com"}),s=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},5954:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var o=r(7226);const n=()=>{(0,o.q)(window)}},2490:(e,t,r)=>{"use strict";r.r(t),r.d(t,{firebase:()=>o.Z,auth:()=>i,db:()=>s,ui:()=>c,storage:()=>u});var o=r(5720),n=(r(4479),r(4010),r(904),r(1271),r(261));const a={apiKey:"AIzaSyBAblkasvMFM--wfKICNR9pfO-3zeB1Sa0",authDomain:"petsboutiqueauth.firebaseapp.com",databaseURL:"https://petsboutiqueauth-default-rtdb.firebaseio.com",projectId:"petsboutiqueauth",storageBucket:"petsboutiqueauth.appspot.com",messagingSenderId:"541145669017",appId:"1:541145669017:web:24f20e0985753ac967c708",measurementId:"G-LRQMH2C52G"};o.Z.initializeApp(a);const i=o.Z.auth(),s=o.Z.firestore(),u=o.Z.storage();i.useEmulator("http://localhost:9092"),s.useEmulator("localhost",9090),o.Z.functions().useEmulator("localhost",9093),u.useEmulator("localhost",9096);const c=new n.I.AuthUI(i)},4112:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u,i18n:()=>s});var o=r(7083),n=r(5948);const a={failed:"Action failed",success:"Action was successful"},i={"en-US":a},s=(0,n.o)({locale:"en-US",messages:i}),u=(0,o.xr)((({app:e})=>{e.use(s)}))},6714:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v});var o=r(7083),n=r(4832),a=r.n(n),i=r(8167),s=r.n(i),u=r(775),c=r.n(u),l=r(7228),d=r.n(l),f=r(4494),p=r.n(f),h=r(3962),m=r.n(h);const v=(0,o.xr)((({app:e})=>{e.use(s()),e.use(a()),e.use(c()),e.use(d()),e.use(p()),e.use(m())}))},8891:()=>{},8466:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var o={};r.r(o),r.d(o,{authenticate_user:()=>c,sign_out:()=>l});var n={};r.r(n),r.d(n,{userSignOff:()=>p,userSignOn:()=>f});var a=r(7083),i=r(7874);function s(){return{isAuthenticated:!1,user:null}}var u=r(8891);function c(e,t){e.isAuthenticated=!0,e.user=t}function l(e){e.isAuthenticated=!1,e.user=null}var d=r(2490);function f({commit:e},t){e("authenticate_user",t)}function p({commit:e}){d.firebase.auth().signOut(),e("sign_out")}const h={namespaced:!0,state:s,getters:u,mutations:o,actions:n},m=(0,a.h)((function(){const e=(0,i.MT)({modules:{auth:h},strict:!1});return e}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{r.amdD=function(){throw new Error("define cannot be used indirect")}})(),(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(l=0;l<e.length;l++){for(var[o,n,a]=e[l],s=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[u])))?o.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"===typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"===typeof o.then)return o}var a=Object.create(null);r.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&n&&o;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>i[e]=()=>o[e]));return i["default"]=()=>o,r.d(a,i),a}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{105:"6437be6d",118:"de5d13e8",146:"db1713a3",194:"6f50fcdd",530:"b82b39ea",618:"f3a59712",645:"c15c349c",799:"65ea359a"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{618:"1127ba91",736:"db42ce08"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="PetBoutique:";r.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[n];var f=(t,r)=>{s.onerror=s.onload=null,clearTimeout(p);var n=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(r))),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=a=>{if(n.onerror=n.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,n.parentNode.removeChild(n),o(u)}};return n.onerror=n.onload=a,n.href=t,document.head.appendChild(n),n},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){n=i[o],a=n.getAttribute("data-href");if(a===e||a===t)return n}},o=o=>new Promise(((n,a)=>{var i=r.miniCssF(o),s=r.p+i;if(t(i,s))return n();e(o,s,n,a)})),n={143:0};r.f.miniCss=(e,t)=>{var r={618:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var i=r.p+r.u(t),s=new Error,u=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}};r.l(i,u,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,s,u]=o,c=0;for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(u)var l=u(r);for(t&&t(o);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[i[c]]=0;return r.O(l)},o=self["webpackChunkPetBoutique"]=self["webpackChunkPetBoutique"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(4510)));o=r.O(o)})();