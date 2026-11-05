import React, { useState, useEffect, useMemo } from "react";

export const BRAND = "Robinhood"; // swap for your own brand name

export function walk(n, seed, drift) {
  let s = seed, y = 150, out = [];
  for (let i = 0; i < n; i++) {
    s = (s * 16807) % 2147483647;
    y += ((s % 1000) / 1000 - 0.5) * 46 - drift;
    y = Math.max(20, Math.min(215, y));
    out.push(y);
  }
  return out;
}

export const OFFER = ["Invest", "IPO Access", "Strategies", "Retirement", "Options", "Futures", "Trading", "Custodial", "Ventures", "Social", "Banking", "Gold Card", "Platinum Card", "Agentic Credit Card", "Concierge"];

export const CRYPTO = ["Crypto", "Earn", "Staking", "Wallet", "Chain", "Connect", "API"];

export const Dd = ({ t, items }) => <div className="dd"><a href="#top">{t} ▾</a><div className="menu">{items.map(i => <a key={i} href="#top">{i}</a>)}</div></div>;



export const ICONS = [
  <svg viewBox="0 0 80 80"><path d="M40 8 68 24v32L40 72 12 56V24zM12 24l28 16 28-16M40 40v32" /></svg>,
  <svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="30" /><circle cx="40" cy="40" r="20" /><path d="M10 40c10-18 50-18 60 0M10 40c10 18 50 18 60 0" /></svg>,
  <svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="30" /><circle cx="40" cy="40" r="8" /><path d="M40 10v22M40 48v22M10 40h22M48 40h22" /></svg>,
  <svg viewBox="0 0 80 80"><path d="M18 14c10-6 34-6 44 0 6 10 6 34 0 44-10 8-34 8-44 0-6-10-6-34 0-44zM28 30l12 12 14-18" /></svg>,
];
