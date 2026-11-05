import React, { useState, useEffect, useMemo } from "react";
import { Clip } from "./Clip";
import { CLIP_A} from "../shared";

export function Scene({ phase }) {
  const dots = [[16, 24], [30, 14], [47, 10], [64, 24], [80, 15], [56, 40], [90, 36]];
  const ico = (r) => <svg className={"ico" + (r ? " r" : "")} style={{ left: r ? "69%" : "30%" }} viewBox="0 0 24 24">{r ? <><circle cx="12" cy="12" r="9" /><path d="M15 9a4 4 0 100 6" /></> : <path d="M3 18l6-7 4 4 8-10M15 5h6v6" />}</svg>;
  return (
    <div className="scene" aria-hidden="true">
      <Clip src={CLIP_A} on={phase === "A"} />
      {phase === "A" && dots.map(([x, y], k) => <i className="sdot" key={k} style={{ left: x + "%", top: y + "%", animationDelay: -k * 0.7 + "s" }} />)}
      <div className="shade" />
      {phase === "B" && <>{ico(false)}{ico(true)}</>}
    </div>
  );
}
