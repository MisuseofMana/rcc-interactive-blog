import{u as h}from"./useSiteStore.DpxSRdPB.js";import{ch as S,ci as C,r as n,ao as p,ak as b,cj as v,ck as k,al as w}from"./entry.BEHNrUNK.js";const I=S({apiKey:"AIzaSyBveK6gIB_9MdjUlyi70KOyCo-dMO2yKHY",authDomain:"crickburrowarchives.firebaseapp.com",projectId:"crickburrowarchives",storageBucket:"crickburrowarchives.appspot.com",messagingSenderId:"708349315619",appId:"1:708349315619:web:5a599bfa7961f0bf217f96",measurementId:"G-CLXB8V1MH8"}),L=C(I),l=n([]),R=n("");async function N(t=15){const e=h();try{if(e.realmList.length){l.value=e.realmList;return}(await p(b(v(L,"realms"),k("title"),w(t)))).forEach(a=>{const{id:s}=a,{sigilImageLink:i,hasSemiotics:o,clearanceNeeded:c,abbTitle:m,subtitle:u,title:d,iconNames:g,slug:f,lastUpdated:y}=a.data();l.value.push({title:d,clearanceNeeded:c,id:s,subtitle:u,abbTitle:m,sigilImageLink:i,iconNames:g,hasSemiotics:o,slug:f,lastUpdated:y})}),e.realmList=l.value}catch(r){r&&(R.value=r)}}function M(){const t=h(),e=n([]);return(async()=>{let a=[];t.realmList.length?(t.realmList.forEach(s=>{a.push({title:s.title,value:s.id})}),e.value=a):((await p(b(v(L,"realms")))).forEach(i=>{a.push({title:i.data().title,value:i.id})}),t.realmNames=a,e.value=a)})(),{nameList:e}}function B(){const t=h(),e=n([]);return(async()=>{if(t.realmCredits.length)e.value=t.realmCredits;else{const a=await p(b(v(L,"realms"),k("title")));let s=[];a.forEach(i=>{const{id:o}=i,{sigilImageLink:c,title:m,abbTitle:u,audioAuthorLink:d,audioAuthorName:g,audioLicenseLink:f}=i.data();s.push({title:m,id:o,abbTitle:u,sigilImageLink:c,audioAuthorLink:d,audioAuthorName:g,audioLicenseLink:f})}),t.realmCredits=s,e.value=s}})(),{realmCredits:e}}async function K(){return await N(),{realmListData:l,realmListError:R}}export{M as a,K as b,B as u};