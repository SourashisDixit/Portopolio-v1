import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
export default function Starfield() {
  const [paused, setPaused] = useState(false);
  const particles = useMemo(() => Array.from({length:64},(_,i)=>({x:(i*37+11)%100,y:(i*61+19)%100,size:i%13===0?2:1,duration:28+(i*17)%34,delay:-(i*7)%50,opacity:.15+(i%5)*.08})),[]);
  useEffect(()=>{const update=()=>setPaused(document.visibilityState!=="visible");document.addEventListener("visibilitychange",update);update();return()=>document.removeEventListener("visibilitychange",update)},[]);
  return <div className={`pf-starfield${paused?" is-paused":""}`} aria-hidden="true">{particles.map((p,i)=><i key={i} style={{left:`${p.x}%`,top:`${p.y}%`,width:p.size,height:p.size,opacity:p.opacity,animationDuration:`${p.duration}s`,animationDelay:`${p.delay}s`} as CSSProperties}/>)}</div>;
}