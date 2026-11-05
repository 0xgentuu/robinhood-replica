import React, { useState, useEffect, useMemo } from "react";
import { BRAND } from "../shared";

export function Intuitive() {
  return (
    <section className="dusk stk"><div className="wrap">
      <img className="shot" src="/intuitive.jpeg" alt="Trader at a multi-monitor desk at dusk" />
      <div>
        <div className="eyebrow">Intuitive trading tools</div>
        <h2 style={{ fontFamily: "var(--sans)", fontSize: 30, letterSpacing: "-.01em" }}>Build your strategy and track market trends, seamlessly</h2>
        <p className="sub">Trade stocks, options, crypto, and more on {BRAND} Legend and the {BRAND} app.</p>
        <a className="pill fill" href="#join">Learn more</a>
        <p className="fine">Stocks & funds offered through {BRAND} Financial. Crypto offered through {BRAND} Crypto. See our Fee Schedule for more details.</p>
      </div>
    </div></section>
  );
}
