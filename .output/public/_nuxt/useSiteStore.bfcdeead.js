import{r as t,E as h,bb as p,as as i,j as D}from"./entry.af4b25f0.js";function S(n){const s=t("..."),l=t(!1),a=t("...");if(n!==void 0){const r=new Date().getTime(),c=new Date(n.toDate()).getTime(),o=Math.ceil((r-c)/(60*60*1e3)),e=Math.ceil((r-c)/(1e3*3600*24));s.value=o+"h",o>=24&&(s.value=Math.floor(o/24)+"d"),e>=365&&(s.value="~"+(e/365).toFixed(2)+"y"),e<=3?a.value="Emergent":4<=e<=6?a.value="Adjusting":7<=e<=10?a.value="Balancing":11<=e<=15?a.value="Settling":16<=e<=20?a.value="Docile":21<=e<=30?a.value="Stagnating":e>=31&&(a.value="Dormant"),l.value=e<30}return{lastUpdated:s,isRecent:l,designation:a}}const U=h(),x=p("site",()=>{const n=t([]),s=t(""),l=t(!1),a=t(!1),r=t([]),c=t([]),o=t({}),e=i({}),d=i({}),f=i([]),m=t([]),v=D(()=>{var u;const{lastUpdated:g}=S((u=e[U.params.realm])==null?void 0:u.lastUpdated);return g.value});return{hasInteracted:l,examAutoStart:a,realmNames:r,realmList:c,realmData:e,realmLastUpdated:v,realmPhotosData:d,realmCoverPhotos:f,audioSequences:n,currentSound:s,realmArtifacts:o,realmCredits:m}});export{S as a,x as u};
