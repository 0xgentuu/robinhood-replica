import React, { useState, useEffect, useMemo } from "react";


export function Clip({ src, on }) {
  const r = React.useRef(null);
  useEffect(() => {
    const v = r.current; if (!v) return;
    if (on) { v.currentTime = 0; const p = v.play(); if (p && p.catch) p.catch(() => {}); } else v.pause();
  }, [on]);
  return <video ref={r} src={src} muted playsInline preload="auto" style={{ opacity: on ? 1 : 0 }} />;
}
