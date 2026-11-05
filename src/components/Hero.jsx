import React from "react";
import { BRAND } from "../shared";

export function Hero() {
  return (
    <header className="hero stk" id="top">
      <video className="hero-bg" src="/hero.mp4" autoPlay muted loop playsInline preload="auto" />
      <div className="hero-inner">
        <h1>Trade All<br />in One Place</h1>
        <p className="sub">Manage your portfolio on {BRAND}: stocks, ETFs, crypto, options, futures, and prediction markets. Get started with as little as $1.</p>
        <a className="pill fill" href="#join">Get started</a>
      </div>
    </header>
  );
}
