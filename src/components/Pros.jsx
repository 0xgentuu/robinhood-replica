import React, { useState, useEffect, useMemo } from "react";
import { BRAND } from "../shared";

export function Pros() {
  return (
    <section className="pros stk"><div className="wrap">
      <div>
        <div className="kick serif"><span className="logo"><i /></span>{BRAND} Strategies</div>
        <h2 style={{ fontFamily: "var(--sans)", fontSize: 34, fontWeight: 500, letterSpacing: "-.02em" }}>Your portfolio, handled by the pros</h2>
        <p className="sub">Get timely market insights with an expert-managed portfolio that proactively adjusts your investments. Members get zero management fees on every dollar over $100K.</p>
        <a className="pill fill" href="#join">Explore Strategies now</a>
        <p className="fine" style={{ marginBottom: 56 }}>Illustrative purposes only. Terms apply. Membership subscription fees may apply.</p>
      </div>
      <div className="phone">
        <div className="gauge" />
        <b>We added 10% to value stocks</b>
        <p>We believe these sectors are currently undervalued and may recover faster.</p>
      </div>
    </div></section>
  );
}
