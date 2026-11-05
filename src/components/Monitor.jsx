import React, { useState, useEffect, useMemo } from "react";
import { walk } from "../shared";

export function Monitor() {
  const a = useMemo(() => walk(40, 5, 1.2), []), b = useMemo(() => walk(40, 9, -.4), []);
  const p = arr => arr.map((y, i) => `${i ? "L" : "M"}${i * 25},${y}`).join(" ");
  return (
    <div className="monitor" role="img" aria-label="Trading chart on a monitor">
      <svg viewBox="0 0 1000 250" preserveAspectRatio="none">
        {[50, 100, 150, 200].map(y => <line key={y} x1="0" x2="1000" y1={y} y2={y} stroke="#1f2128" />)}
        <path d={p(a)} fill="none" stroke="#ff9d3c" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        <path d={p(b)} fill="none" stroke="#4aa3ff" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        {a.map((y, i) => i % 2 ? <rect key={i} x={i * 25 - 3} y={y - 8} width="6" height="16" fill="#3ecf8e" /> : null)}
      </svg>
    </div>
  );
}
