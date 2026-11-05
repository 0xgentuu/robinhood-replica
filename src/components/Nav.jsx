import React, { useState, useEffect, useMemo } from "react";
import { BRAND, OFFER, CRYPTO, Dd } from "../shared";

export function Nav() {
  return (
    <nav>
      <a className="logo" href="#top"><i />{BRAND}</a>
      <div className="links"><Dd t="What We Offer" items={OFFER} /><a href="#top">Agents</a><Dd t="Crypto" items={CRYPTO} />{["Predict", "Gold", "Legend", "Learn", "Support"].map(l => <a key={l} href="#top">{l}</a>)}</div>
      <div className="r"><span>◍ US ▾</span><a className="pill" href="#top">Log in</a><a className="pill fill" href="#join">Sign up</a></div>
    </nav>
  );
}
