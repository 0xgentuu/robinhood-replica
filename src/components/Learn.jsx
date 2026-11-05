import React, { useState, useEffect, useMemo } from "react";
import { BRAND } from "../shared";

export function Learn() {
  return (
    <section className="learn">
      <h2>Become a better investor<br />on the go, right in the app</h2>
      <p className="sub">Here’s a preview of the things you can learn when you sign up.</p>
      <a className="pill dark" href="#join">Sign up to access {BRAND} Learn</a>
      <div className="cards">
        <div className="card"><div><b>What’s the stock market?</b><span>Here are some common terms that you’ll hear</span></div>›</div>
        <div className="card"><div><b>What are your goals?</b><span>How soon are you hoping to invest</span></div>›</div>
        <div className="card" style={{ height: 36 }} />
      </div>
    </section>
  );
}
