"use strict";(self["webpackChunkpet_boutique"]=self["webpackChunkpet_boutique"]||[]).push([[480],{5480:(t,o,a)=>{a.r(o),a.d(o,{default:()=>R});var e=a(2494),s=a(9682),n=a(5626),l=a(8825),r=a(514),i=a(2490);const c={props:{uid:String},setup(t){const o=t,a=i.storage.ref();var n=0;const c=(0,l.Z)(),u=(0,i.httpsCallable)(i.functions,"addPetPhoto"),d=(0,i.httpsCallable)(i.functions,"addAdminClaims"),p=async()=>{const t=await r.V1.getPhoto({quality:90,allowEditing:!0,width:300,height:300,resultType:r.dk.DataUrl}),e=t.dataUrl,s="pets/"+o.uid+".jpeg";var l=a.child(s).putString(e,"data_url");l.on("state_changed",(t=>{switch(c.loading.show({delay:400}),n=t.bytesTransferred/t.totalBytes*100,console.log("Upload is "+n+"% done"),t.state){case i.firebase.storage.TaskState.PAUSED:console.log("Upload is paused");break;case i.firebase.storage.TaskState.RUNNING:console.log("Upload is running");break}}),(t=>{c.loading.hide(),console.error("Error during upload:",t)}),(()=>{c.loading.hide(),console.log("Upload is complete"),a.child(s).getDownloadURL().then((t=>{u({uid:o.uid,photoURL:t}),c.notify({message:"Success!",color:"primary"})})).catch((t=>{c.notify({message:"Error!"+t,color:"yellow"})}))}))};return(t,o)=>{const a=(0,e.up)("q-btn");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(a,{fab:"",color:"primary",icon:"camera",padding:"sm",class:"absolute",style:{top:"0",right:"12px",transform:"translateY(-50%)"},onClick:p}),(0,e.Wm)(a,{fab:"",color:"primary",icon:"manage_accounts",padding:"sm",class:"absolute",style:{top:"0",right:"12px",transform:"translateY(-50%)"},onClick:(0,s.SU)(d)},null,8,["onClick"])],64)}}};var u=a(8240),d=a(7518),p=a.n(d);const g=c;p()(c,"components",{QBtn:u.Z});const m={class:"absolute-bottom"},h={class:"text-h6"},f={class:"text-subtitle2"},w=(0,e.Uk)("Action 1"),b=(0,e.Uk)("Action 2"),U={props:{uid:String,name:String,age:String,photoURL:String},setup(t){return(o,a)=>{const s=(0,e.up)("q-img"),l=(0,e.up)("q-card-section"),r=(0,e.up)("q-btn"),i=(0,e.up)("q-card-actions"),c=(0,e.up)("q-card");return(0,e.wg)(),(0,e.iD)("div",null,[(0,e.Wm)(c,{class:"my-card full-width"},{default:(0,e.w5)((()=>[(0,e.Wm)(s,{src:t.photoURL},{default:(0,e.w5)((()=>[(0,e._)("div",m,[(0,e._)("div",h,(0,n.zw)(t.name),1),(0,e._)("div",f,(0,n.zw)(t.age),1)])])),_:1},8,["src"]),(0,e.Wm)(l,null,{default:(0,e.w5)((()=>[(0,e.Wm)(g,{uid:t.uid},null,8,["uid"])])),_:1}),(0,e.Wm)(i,null,{default:(0,e.w5)((()=>[(0,e.Wm)(r,{flat:""},{default:(0,e.w5)((()=>[w])),_:1}),(0,e.Wm)(r,{flat:""},{default:(0,e.w5)((()=>[b])),_:1})])),_:1})])),_:1})])}}};var y=a(151),k=a(4027),_=a(5589),S=a(9367);const v=U;p()(U,"components",{QCard:y.Z,QImg:k.Z,QCardSection:_.Z,QCardActions:S.Z,QBtn:u.Z});var C=a(486),W=a(6871);function q(){const{user:t}=(0,W.rn)("auth"),o=(0,C.C)(i.firestore.collection("users").doc(t.value.uid).collection("pets"));return{petsList:o}}const L={setup(t){const{petsList:o}=q();return console.log("petslist:",o),(t,a)=>((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)((0,s.SU)(o),(t=>((0,e.wg)(),(0,e.iD)("div",{class:"pet-card",key:t},[(0,e.Wm)(v,{uid:t.id,name:t.name,age:t.age,photoURL:t.photoURL},null,8,["uid","name","age","photoURL"])])))),128))}},R=L}}]);