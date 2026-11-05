import React, { useState, useEffect, useMemo } from "react";
import { BRAND } from "../shared";

export function Crypto() {
  const c = [["BTC", 6, 8], ["ETH", 58, 2], ["SOL", 30, 38], ["DOGE", 70, 46], ["XRP", 8, 68], ["SHIB", 48, 74]];
  return (
    <section className="crypto stk"><div className="wrap">
      <div>
        <h2 style={{ fontSize: "clamp(40px,5.5vw,68px)" }}>Trade crypto 24/7</h2>
        <p className="sub">Start with as little as $1. Buy, sell, and transfer BTC, ETH, XRP, SOL, DOGE, SHIB, and more.</p>
        <a className="pill fill" href="#join">Learn more</a>
        <p className="fine">Crypto Risk Disclosures. Crypto offered through {BRAND} Crypto.</p>
      </div>
      <div className="coins" aria-hidden="true">{c.map(([s, l, t], i) => <div className="coin" key={s} style={{ left: l + "%", top: t + "%", animationDelay: -i * 1.1 + "s" }}>{s}</div>)}</div>
    </div></section>
  );
}
