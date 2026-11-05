import React, { useState, useEffect, useMemo } from "react";


export function Dashes() {
  const ref = React.useRef(null);
  useEffect(() => {
    const c = ref.current, g = c.getContext("2d"), dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0, H = 0, raf, mx = -999, my = -999, last = performance.now();
    const D = Array.from({ length: 80 }, () => ({}));
    const spawn = (d, fresh) => { d.x = Math.random() * W; d.y = Math.random() * H; d.len = 26 + Math.random() * 38; d.life = 4 + Math.random() * 5; d.age = fresh ? Math.random() * d.life : 0; d.v = 8 + Math.random() * 14; };
    const size = () => { const r = c.getBoundingClientRect(); W = r.width; H = r.height; c.width = W * dpr; c.height = H * dpr; g.setTransform(dpr, 0, 0, dpr, 0, 0); D.forEach(d => spawn(d, true)); };
    size();
    const p = c.parentElement;
    const mv = e => { const r = c.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top; };
    const lv = () => { mx = my = -999; };
    p.addEventListener("pointermove", mv); p.addEventListener("pointerleave", lv); window.addEventListener("resize", size);
    const frame = t => {
      const dt = Math.min(0.05, (t - last) / 1000); last = t;
      g.clearRect(0, 0, W, H); g.lineWidth = 1.6; g.lineCap = "round";
      for (const d of D) {
        d.age += dt; if (d.age > d.life) spawn(d, false);
        const ox = W / 2, oy = H / 2, rx = d.x - ox, ry = d.y - oy, r = Math.hypot(rx, ry) || 1;
        const w = 0.09 + 0.16 * Math.min(1, r / (W * 0.5));
        const ang = Math.atan2(ry, rx) + w * dt;
        d.x = ox + Math.cos(ang) * r; d.y = oy + Math.sin(ang) * r + 3 * dt;
        let a = Math.PI / 2 + ((d.x - W / 2) / W) * 0.25;
        const dx = mx - d.x, dy = my - d.y, dist = Math.hypot(dx, dy);
        if (dist < 220) { let df = Math.atan2(dy, dx) - a; df = Math.atan2(Math.sin(df), Math.cos(df)); a += df * (1 - dist / 220); }
        g.strokeStyle = `rgba(255,255,255,${0.8 * Math.sin(Math.PI * d.age / d.life)})`;
        g.beginPath(); g.moveTo(d.x, d.y); g.lineTo(d.x + Math.cos(a) * d.len, d.y + Math.sin(a) * d.len); g.stroke();
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); p.removeEventListener("pointermove", mv); p.removeEventListener("pointerleave", lv); window.removeEventListener("resize", size); };
  }, []);
  return <canvas ref={ref} className="cv" aria-hidden="true" />;
}
