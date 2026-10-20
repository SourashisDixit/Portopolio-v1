import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
export default function ReticleCursor() {
  const [enabled, setEnabled] = useState(() => typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  useEffect(() => {
    if (!matchMedia("(pointer: fine)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const dot = document.querySelector<HTMLElement>(".pf-reticle-dot");
    const ring = document.querySelector<HTMLElement>(".pf-reticle-ring");
    if (!dot || !ring) return;
    document.body.classList.add("has-reticle-cursor"); setEnabled(true);
    let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y, frame = 0;
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      x = event.clientX; y = event.clientY;
      dot.style.transform = `translate3d(${x - 4}px,${y - 4}px,0)`;
      dot.style.opacity = ring.style.opacity = "1";
      const target = event.target instanceof Element ? event.target : null;
      const hovering = Boolean(target?.closest("a,button,[data-cursor],.pf-capability-card,.pf-project-card,.pf-logo-tile,.pf-education-grid article,.pf-job")); ring.classList.toggle("is-hovering", hovering); dot.classList.toggle("is-hovering", hovering);
    };
    const animate = () => { rx += (x-rx)*.15; ry += (y-ry)*.15; ring.style.transform = `translate3d(${rx-26}px,${ry-26}px,0)`; frame = requestAnimationFrame(animate); };
    const hide = () => { dot.style.opacity = ring.style.opacity = "0"; };
    const down = () => ring.classList.add("is-pressed"), up = () => ring.classList.remove("is-pressed");
    addEventListener("pointermove", move); addEventListener("pointerdown", down); addEventListener("pointerup", up); addEventListener("blur", hide); document.documentElement.addEventListener("mouseleave", hide);
    frame = requestAnimationFrame(animate);
    return () => { cancelAnimationFrame(frame); removeEventListener("pointermove", move); removeEventListener("pointerdown", down); removeEventListener("pointerup", up); removeEventListener("blur", hide); document.documentElement.removeEventListener("mouseleave", hide); document.body.classList.remove("has-reticle-cursor"); };
  }, []);
  if (!enabled) return null;
  return createPortal(<><div className="pf-reticle-dot" aria-hidden="true"/><div className="pf-reticle-ring" aria-hidden="true"><svg viewBox="0 0 44 44"><circle className="pf-ring-base" cx="22" cy="22" r="18"/><circle className="pf-ring-cyan" cx="22" cy="22" r="18"/><circle className="pf-ring-orange" cx="22" cy="22" r="18"/></svg></div></>, document.body);
}
