import { useEffect, useState } from "react";
const roles=["Building cloud-ready software",".NET API Engineer","React UI Craftsman","Azure + AI Builder"];
export default function Typewriter(){
  const [text,setText]=useState(roles[0]);
  useEffect(()=>{if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;let index=0,pos=roles[0].length,deleting=true,timer=0;const step=()=>{const role=roles[index];if(!deleting&&pos<role.length){setText(role.slice(0,++pos));timer=window.setTimeout(step,58)}else if(deleting&&pos>0){setText(role.slice(0,--pos));timer=window.setTimeout(step,30)}else if(deleting){index=(index+1)%roles.length;deleting=false;timer=window.setTimeout(step,260)}else{deleting=true;timer=window.setTimeout(step,1500)}};timer=window.setTimeout(step,1800);return()=>window.clearTimeout(timer)},[]);
  return <span className="pf-typewriter" aria-label={text}>{text}<span className="pf-caret" aria-hidden="true">▍</span></span>;
}