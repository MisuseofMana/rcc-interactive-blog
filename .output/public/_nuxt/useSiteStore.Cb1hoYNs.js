import{r as e,L as p,ck as D,bU as l,a7 as S}from"./entry.ChAOt23L.js";function U(o){const a=e("..."),n=e(!1),t=e(0);if(o!==void 0){const r=new Date().getTime(),c=new Date(o.toDate()).getTime(),s=Math.ceil((r-c)/(60*60*1e3));t.value=Math.ceil((r-c)/(1e3*3600*24)),a.value=s+"h",s>=24&&(a.value=Math.floor(s/24)+"d"),t.value>=365&&(a.value=(t.value/365).toFixed(2)+"y"),n.value=t.value<30}return{lastUpdated:a,isRecent:n,dPassed:t}}const L=p(),x=D("site",()=>{const o=e([]),a=e(""),n=e(!1),t=e(!1),r=e([]),c=e([]),s=e({}),u=l({}),i=l({}),m=l([]),f=e([]),v=S(()=>{var d;const{lastUpdated:h}=U((d=u[L.params.realm])==null?void 0:d.lastUpdated);return h.value});return{hasInteracted:n,examAutoStart:t,realmNames:r,realmList:c,realmData:u,realmLastUpdated:v,realmPhotosData:i,realmCoverPhotos:m,audioSequences:o,currentSound:a,realmArtifacts:s,realmCredits:f}});export{U as a,x as u};
