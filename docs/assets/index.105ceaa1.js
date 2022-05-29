import{r as z,c as w,a as h,o as u,b as _,d as n,e as f,f as O,S as L,t as x,p as k,g as S,h as Y,i as K,j as W,k as F,l as X,w as $,m as I,n as Q,q as G,s as T,v as E,F as q,u as J,x as Z,y as ee}from"./vendor.1269b5c5.js";const te=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}};te();const p=z({user:{},account:{},gifts:[],giphys:[]});var b=(t,e)=>{for(const[o,s]of e)t[o]=s;return t};const oe={name:"App",setup(){return{appState:w(()=>p)}}},se={class:"container-fluid"},ne={class:"row"},re={class:"col-md-3 bg-success tall"},ae={class:"col-md-9"};function ie(t,e,o,s,r,a){const i=h("Sidebar"),c=h("router-view");return u(),_("main",se,[n("div",ne,[n("div",re,[f(i)]),n("div",ae,[f(c)])])])}var ce=b(oe,[["render",ie]]);const N=window.location.origin.includes("localhost"),P=N?"https://bcw-sandbox.herokuapp.com/":"",le="codeworksclassroom.auth0.com",ue="pOXw2OGv1LsYi7LEBmDF04RLkXQvldml",de="https://codeworksclassroom.com";function y(t,e){if(N)console[t](`[${t}] :: ${new Date().toLocaleTimeString()} :: `,...e);else{switch(t){case"log":case"assert":return}console[t](`[${t}] :: ${new Date().toLocaleTimeString()} :: `,...e)}}const l={log(){y("log",arguments)},error(){y("error",arguments)},warn(){y("warn",arguments)},assert(){y("assert",arguments)},trace(){y("trace",arguments)}},m=O.create({baseURL:P,timeout:8e3}),_e=O.create({baseURL:"http://api.giphy.com/v1/gifs",timeout:8e3});class pe{async get(){const e=await m.get("api/gifts");l.log(e.data),p.gifts=e.data}async openGift(e){const o=await m.put("api/gifts/"+e,{opened:!0});l.log(o.data);const s=p.gifts.findIndex(r=>r._id==e);p.gifts[s]=o.data}async create(e){const o=await m.post("api/gifts",e);l.log(o.data),p.gifts.unshift(o.data)}}const A=new pe;class g{static async confirm(e="Are you sure?",o="You won't be able to revert this!",s,r="Yes, delete it!"){try{return!!(await L.fire({title:e,text:o,imageUrl:s,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:r})).isConfirmed}catch{return!1}}static toast(e="Warning!",o="warning",s="top-end",r=3e3,a=!0){L.fire({title:e,icon:o,position:s,timer:r,timerProgressBar:a,toast:!0,showConfirmButton:!1})}}const ge={props:{gift:{type:Object,required:!0}},setup(t){return{async openGift(){try{await A.openGift(t.gift._id),g.toast("Enjoy your gift!","success")}catch(e){l.error(e),g.toast(e.message,"error")}}}}},me=t=>(k("data-v-59bbbab0"),t=t(),S(),t),he={class:"col-lg-4 col-sm-6 mb-3"},fe={key:0,class:"bg-light align-items-center shadow d-flex flex-column p-3"},be=["src"],ve={class:"text mt-3"},ye={class:"bg-grey bg-wide d-flex flex-column align-items-center p-3"},we=me(()=>n("i",{class:"text-center mt-3"},"Click to Open",-1));function xe(t,e,o,s,r,a){return u(),_("div",he,[o.gift.opened?(u(),_("div",fe,[n("img",{src:o.gift.url,alt:""},null,8,be),n("p",ve,x(o.gift.tag),1)])):(u(),_("div",{key:1,onClick:e[0]||(e[0]=i=>s.openGift()),class:"gift selectable shadow d-flex px-3 justify-content-center align-items-center",title:"Click to open your gift!"},[n("div",ye,[n("p",null,x(o.gift.tag),1),we])]))])}var ke=b(ge,[["render",xe],["__scopeId","data-v-59bbbab0"]]),Se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ke});const $e={props:{giphy:{type:Object,required:!0},editable:{type:Object,required:!0}},setup(t){return{setEditable(){t.editable.tag=t.giphy.tag,t.editable.url=t.giphy.url}}}},Te=["src"],Ee={class:"p-2"};function Ae(t,e,o,s,r,a){return u(),_("div",{class:"col-12 bg-light ps-0 mb-3 d-flex text-dark shadow rounded selectable",onClick:e[0]||(e[0]=i=>s.setEditable())},[n("img",{class:"rounded-start",src:o.giphy.url,alt:""},null,8,Te),n("p",Ee,x(o.giphy.tag),1)])}var Ce=b($e,[["render",Ae],["__scopeId","data-v-06952d5c"]]),Oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ce});const Le="modulepreload",R={},Ie="/",Ge=function(e,o){return!o||o.length===0?e():Promise.all(o.map(s=>{if(s=`${Ie}${s}`,s in R)return;R[s]=!0;const r=s.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":Le,r||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),r)return new Promise((c,M)=>{i.addEventListener("load",c),i.addEventListener("error",M)})})).then(()=>e())};function qe(t){switch(t){case"./pages/HomePage.vue":return Ge(()=>import("./HomePage.a9e19703.js"),["assets/HomePage.a9e19703.js","assets/vendor.1269b5c5.js"]);default:return new Promise(function(e,o){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function C(t){return()=>qe(`./pages/${t}.vue`)}const Ne=[{path:"/",name:"Home",component:C("HomePage")},{path:"/about",name:"About",component:C("AboutPage")},{path:"/account",name:"Account",component:C("AccountPage"),beforeEnter:W}],D=Y({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:K(),routes:Ne});class Pe{async getAccount(){try{const e=await m.get("/account");p.account=e.data}catch(e){l.error("HAVE YOU STARTED YOUR SERVER YET???",e)}}}const Re=new Pe,De={connection:"connection",connected:"connected",disconnect:"disconnect",authenticate:"authenticate",authenticated:"authenticated",userConnected:"userConnected",userDisconnected:"userDisconnected",error:"error"};class Ue{constructor(e=!1,o=P){}on(e,o){var s;return(s=this.socket)==null||s.on(e,o.bind(this)),this}onConnected(e){l.log("[SOCKET_CONNECTION]",e),this.connected=!0,this.playback()}onAuthenticated(e){l.log("[SOCKET_AUTHENTICATED]",e),this.authenticated=!0,this.playback()}authenticate(e){var o;(o=this.socket)==null||o.emit(De.authenticate,e)}onError(e){l.error("[SOCKET_ERROR]",e)}enqueue(e,o){l.log("[ENQUEING_ACTION]",{action:e,payload:o}),this.queue.push({action:e,payload:o})}playback(){l.log("[SOCKET_PLAYBACK]");const e=[...this.queue];this.queue=[],e.forEach(o=>{this.emit(o.action,o.payload)})}emit(e,o=void 0){if(this.requiresAuth&&!this.authenticated)return this.enqueue(e,o);if(!this.connected)return this.enqueue(e,o);this.socket.emit(e,o)}}class je extends Ue{constructor(){super();this.on("error",this.onError)}onError(e){g.toast(e.message,"error")}}const U=new je,d=F({domain:le,clientId:ue,audience:de,useRefreshTokens:!0,onRedirectCallback:t=>{D.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}});d.on(d.AUTH_EVENTS.AUTHENTICATED,async function(){m.defaults.headers.authorization=d.bearer,m.interceptors.request.use(He),p.user=d.user,await Re.getAccount(),U.authenticate(d.bearer)});async function He(t){if(!d.isAuthenticated)return t;const e=d.identity.exp*1e3,o=e<Date.now(),s=e<Date.now()+1e3*60*60*12;return o?await d.loginWithPopup():s&&(await d.getTokenSilently(),m.defaults.headers.authorization=d.bearer,U.authenticate(d.bearer)),t}const Be={setup(){return{user:w(()=>p.user),account:w(()=>p.account),async login(){d.loginWithPopup()},async logout(){d.logout({returnTo:window.location.origin})}}}},j=t=>(k("data-v-b5f30be8"),t=t(),S(),t),Ve={class:"navbar-text"},Me={key:1,class:"dropdown my-2 my-lg-0"},ze={class:"dropdown-toggle selectable","data-bs-toggle":"dropdown","aria-expanded":"false",id:"authDropdown"},Ye={key:0},Ke=["src"],We={class:"mx-3 text-success lighten-30"},Fe={class:"dropdown-menu p-0 list-group w-100","aria-labelledby":"authDropdown"},Xe=j(()=>n("div",{class:"list-group-item list-group-item-action hoverable"}," Manage Account ",-1)),Qe=j(()=>n("i",{class:"mdi mdi-logout"},null,-1)),Je=I(" logout "),Ze=[Qe,Je];function et(t,e,o,s,r,a){const i=h("router-link");return u(),_("span",Ve,[s.user.isAuthenticated?(u(),_("div",Me,[n("div",ze,[s.account.picture?(u(),_("div",Ye,[n("img",{src:s.account.picture,alt:"account photo",height:"40",class:"rounded"},null,8,Ke),n("span",We,x(s.account.name),1)])):X("",!0)]),n("div",Fe,[f(i,{to:{name:"Account"}},{default:$(()=>[Xe]),_:1}),n("div",{class:"list-group-item list-group-item-action hoverable text-danger",onClick:e[1]||(e[1]=(...c)=>s.logout&&s.logout(...c))},Ze)])])):(u(),_("button",{key:0,class:"btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0",onClick:e[0]||(e[0]=(...c)=>s.login&&s.login(...c))}," Login "))])}var tt=b(Be,[["render",et],["__scopeId","data-v-b5f30be8"]]),ot=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:tt}),st="/assets/cw-logo.71baeadb.png";const nt={setup(){return{}}},H=t=>(k("data-v-ad69b402"),t=t(),S(),t),rt={class:"navbar navbar-expand-lg navbar-dark bg-dark px-3"},at=H(()=>n("div",{class:"d-flex flex-column align-items-center"},[n("img",{alt:"logo",src:st,height:"45"})],-1)),it=H(()=>n("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[n("span",{class:"navbar-toggler-icon"})],-1)),ct={class:"collapse navbar-collapse",id:"navbarText"},lt={class:"navbar-nav me-auto"},ut=I(" About ");function dt(t,e,o,s,r,a){const i=h("router-link"),c=h("Login");return u(),_("nav",rt,[f(i,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:$(()=>[at]),_:1}),it,n("div",ct,[n("ul",lt,[n("li",null,[f(i,{to:{name:"About"},class:"btn text-success lighten-30 selectable text-uppercase"},{default:$(()=>[ut]),_:1})])]),f(c)])])}var _t=b(nt,[["render",dt],["__scopeId","data-v-ad69b402"]]),pt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_t});class gt{constructor(e){this.url=e.images.original.url,this.tag=e.title,this.id=e.id}}let B={api_key:"2oUH81wd4o03OHd1uxmkNxTX7x8L2bJ7",rating:"g",q:"",limit:10};class mt{async search(e){p.giphys=[],B.q=e;const o=await _e.get("search",{params:B});return l.log(o.data),p.giphys=o.data.data.map(s=>new gt(s)),o.data.pagination.total_count}}const ht=new mt;const ft={setup(){let t=Q({tag:"",url:""});return{editable:t,giphys:w(()=>p.giphys),async getGifts(){try{await A.get()}catch(e){l.error(e),g.toast(e.message,"error")}},async search(){try{const e=await ht.search(t.value.search);g.toast(e+" results found","info")}catch(e){l.error(e),g.toast(e.message,"error")}},async createGift(){if(await g.confirm('<i class="mdi mdi-arrow-up-thick"></i> You want to post this gift? <i class="mdi mdi-arrow-up-thick"></i>',"It had better be sick, okay?",t.value.url,"DO IT"))try{await A.create(t.value),t.value.tag="",t.value.url="",g.toast("Succesfully created a new gift!","success")}catch(e){l.error(e),g.toast(e.message,"error")}}}}},v=t=>(k("data-v-529060d2"),t=t(),S(),t),bt={class:"row"},vt={class:"col-12 d-flex flex-column"},yt=v(()=>n("h1",{class:"p-3"},"Gifted",-1)),wt={class:"my-3 px-2"},xt=v(()=>n("label",{for:"tag",class:"form-label ms-1"},"Tag",-1)),kt={class:"mb-5 px-2"},St=v(()=>n("label",{for:"url",class:"form-label ms-1"},"URL",-1)),$t=v(()=>n("button",{class:"btn btn-primary ms-3 mb-3 justify-self-end"}," Submit ",-1)),Tt=v(()=>n("label",{for:"url",class:"form-label top-line ms-2 pt-3 border-top border-light"},"Search Gifs",-1)),Et={class:"input-group mb-3 px-2"},At=v(()=>n("button",{class:"btn btn-primary",id:"button-addon2"},[n("i",{class:"mdi mdi-magnify"})],-1)),Ct={class:"row mx-1"};function Ot(t,e,o,s,r,a){const i=h("Giphy");return u(),_(q,null,[n("div",bt,[n("div",vt,[yt,n("form",{onSubmit:e[2]||(e[2]=G(c=>s.createGift(),["prevent"]))},[n("div",wt,[xt,T(n("input",{required:"",maxlength:"120",type:"text",class:"form-control",id:"tag","onUpdate:modelValue":e[0]||(e[0]=c=>s.editable.tag=c)},null,512),[[E,s.editable.tag]])]),n("div",kt,[St,T(n("input",{required:"",type:"text",class:"form-control",id:"url","onUpdate:modelValue":e[1]||(e[1]=c=>s.editable.url=c)},null,512),[[E,s.editable.url]])]),$t],32),Tt,n("form",{onSubmit:e[4]||(e[4]=G(c=>s.search(),["prevent"]))},[n("div",Et,[T(n("input",{required:"",for:"search",type:"text",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=c=>s.editable.search=c)},null,512),[[E,s.editable.search]]),At])],32)])]),n("div",Ct,[(u(!0),_(q,null,J(s.giphys,c=>(u(),Z(i,{key:c.id,giphy:c,editable:s.editable},null,8,["giphy","editable"]))),128))])],64)}var Lt=b(ft,[["render",Ot],["__scopeId","data-v-529060d2"]]),It=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Lt});function Gt(t){Object.entries({"./components/Gift.vue":Se,"./components/Giphy.vue":Oe,"./components/Login.vue":ot,"./components/Navbar.vue":pt,"./components/Sidebar.vue":It}).forEach(([o,s])=>{const r=s.name||o.substr(o.lastIndexOf("/")+1).replace(/\.\w+$/,"");t.component(r,s.default)})}const V=ee(ce);Gt(V);V.use(D).mount("#app");export{p as A,g as P,b as _,l,A as s};