import{u as l}from"./CdlJy9SV.js";import{d as m}from"./BMEhnFaW.js";import{b as h}from"./BCmT9JCq.js";import{r as t}from"./DAMA_ESs.js";function y(){const o=t(null),u=t(null);let n=[{},{},{},{}];const e=t([]);return m().then(({coverPhotosData:s})=>{e.value=[...s.value],n.forEach((i,r)=>{n[r]=e.value.splice(l(e.value.length),1)[0]}),o.value=n,u.value=n[l(n.length)]}),{questions:o,correct:u}}function C(){const o=t(null),u=t(null),n=t([]);let e=[{},{},{},{}];const s=t([]);return m().then(({coverPhotosData:i})=>{n.value=i.value,h().then(({realmListData:r})=>{s.value=[...r.value],e.forEach((p,v)=>{var c;const a=s.value.splice(l(s.value.length),1)[0];e[v]={...a,icons:a==null?void 0:a.iconNames.split(","),coverImage:(c=n.value.find(f=>f.realmId===(a==null?void 0:a.id)))==null?void 0:c.imageLink}}),o.value=e,u.value=e[l(e.length)]})}),{questions:o,correct:u}}export{y as a,C as u};
