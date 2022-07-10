"use strict";(self["webpackChunkPetBoutique"]=self["webpackChunkPetBoutique"]||[]).push([[480],{5480:(t,e,a)=>{a.r(e),a.d(e,{default:()=>R});var o=a(2494),s=a(9682),n=a(5626),r=a(8825),l=a(514),i=a(2490);const u={props:{uid:String},setup(t){const e=t,a=i.storage.ref();var s=0;const n=(0,r.Z)(),u=firebase.functions().httpsCallable("addPetPhoto"),c=async()=>{const t=await l.V1.getPhoto({quality:90,allowEditing:!0,width:300,height:300,resultType:l.dk.DataUrl}),o=t.dataUrl,r="pets/"+e.uid+".jpeg";var i=a.child(r).putString(o,"data_url");i.on("state_changed",(t=>{switch(n.loading.show({delay:400}),s=t.bytesTransferred/t.totalBytes*100,console.log("Upload is "+s+"% done"),t.state){case firebase.storage.TaskState.PAUSED:console.log("Upload is paused");break;case firebase.storage.TaskState.RUNNING:console.log("Upload is running");break}}),(t=>{n.loading.hide(),console.error("Error during upload:",t)}),(()=>{n.loading.hide(),console.log("Upload is complete"),a.child(r).getDownloadURL().then((t=>{u({uid:e.uid,photoURL:t}),n.notify({message:"Success!",color:"primary"})})).catch((t=>{n.notify({message:"Error!"+t,color:"yellow"})}))}))};return(t,e)=>{const a=(0,o.up)("q-btn");return(0,o.wg)(),(0,o.j4)(a,{fab:"",color:"primary",icon:"camera",padding:"sm",class:"absolute",style:{top:"0",right:"12px",transform:"translateY(-50%)"},onClick:c})}}};var c=a(8240),d=a(7518),p=a.n(d);const g=u;p()(u,"components",{QBtn:c.Z});const h={class:"absolute-bottom"},m={class:"text-h6"},f={class:"text-subtitle2"},w=(0,o.Uk)("Action 1"),U=(0,o.Uk)("Action 2"),b={props:{uid:String,name:String,age:String,photoURL:String},setup(t){return(e,a)=>{const s=(0,o.up)("q-img"),r=(0,o.up)("q-card-section"),l=(0,o.up)("q-btn"),i=(0,o.up)("q-card-actions"),u=(0,o.up)("q-card");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(u,{class:"my-card full-width"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{src:t.photoURL},{default:(0,o.w5)((()=>[(0,o._)("div",h,[(0,o._)("div",m,(0,n.zw)(t.name),1),(0,o._)("div",f,(0,n.zw)(t.age),1)])])),_:1},8,["src"]),(0,o.Wm)(r,null,{default:(0,o.w5)((()=>[(0,o.Wm)(g,{uid:t.uid},null,8,["uid"])])),_:1}),(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Wm)(l,{flat:""},{default:(0,o.w5)((()=>[w])),_:1}),(0,o.Wm)(l,{flat:""},{default:(0,o.w5)((()=>[U])),_:1})])),_:1})])),_:1})])}}};var y=a(151),k=a(4027),S=a(5589),v=a(9367);const _=b;p()(b,"components",{QCard:y.Z,QImg:k.Z,QCardSection:S.Z,QCardActions:v.Z,QBtn:c.Z});var q=a(7030);function L(){const{user:t}=(0,q.rn)("auth"),e=(0,i.getDocs)((0,i.getCollection)("users",t.uid,"pets"));return{petsList:e}}const C={setup(t){const{petsList:e}=L();return(t,a)=>((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,s.SU)(e),(t=>((0,o.wg)(),(0,o.iD)("div",{class:"pet-card",key:t},[(0,o.Wm)(_,{uid:t.id,name:t.name,age:t.age,photoURL:t.photoURL},null,8,["uid","name","age","photoURL"])])))),128))}},R=C}}]);