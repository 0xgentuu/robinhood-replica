import React, { useState, useEffect, useMemo } from "react";
import { BRAND, ICONS } from "../shared";

export function Protection() {
  const t = ["We work hard to keep your data safe and secure.", "We protect your account from unauthorized activity.", "We provide multi-factor authentication on all accounts.", "We’ve got your back. We’re available to you 24/7."];
  return (
    <section className="prot">
      <h2>{BRAND} Protection<br />Guarantee</h2>
      <div className="tiles">{t.map((x, i) => <div className="tile" key={i}>{ICONS[i]}<p>{x}</p></div>)}</div>
    </section>
  );
}
