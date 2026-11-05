import React, { useState, useEffect, useMemo } from "react";
import { Crypto } from "./components/Crypto";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Intuitive } from "./components/Intuitive";
import { Join } from "./components/Join";
import { Learn } from "./components/Learn";
import { Nav } from "./components/Nav";
import { Pros } from "./components/Pros";
import { Protection } from "./components/Protection";

export default function App() {
  return (
    <>
      
      <Nav /><div className="promo"><b>Sweepstakes</b>: <a href="#join">Trade eligible crypto for a chance to win a share of $700K in crypto prizes—including a $100K crypto grand prize</a>. Ends November 22, 2026. Free entry available. Terms apply.</div><Hero /><Intuitive /><Crypto /><Pros /><Protection /><Learn /><Join /><Footer />
    </>
  );
}
