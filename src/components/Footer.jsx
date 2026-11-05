import React, { useState, useEffect, useMemo } from "react";
import { BRAND } from "../shared";

export function Footer() {
  const col = (h, ls) => <div><h4>{h}</h4>{ls.map(l => <a key={l} href="#top">{l}</a>)}</div>;
  return (
    <footer>
      <div className="fr"><div><a href="#top">Customer Relationship Summaries</a><a href="#top">FINRA’s BrokerCheck</a></div><div className="soc">Follow us on{[0, 1, 2, 3, 4].map(i => <span key={i} />)}</div></div>
      <div className="g">
        {col("Product", ["Invest", "IPO Access", "Predict", "Strategies", "Agents", "Retirement", "Gold", "Crypto", "Legend", "Options", "Futures", "Banking", "Gold Card", "Platinum Card", "Concierge", "Learn", "Snacks"])}
        {col("Company", ["About us", "Blog", "Vendors", "Press", "Careers", "Investor Relations", "Support", "Sustainability", "Investor Index", "Merch"])}
        {col("Legal & Regulatory", ["Terms & Conditions", "Disclosures", "US User Privacy Statement", "Web Visitor Privacy Statement", "Law Enforcement Requests", "Your Privacy Choices"])}
        <div>
          <p><b>All investing involves risk.</b></p>
          <p>Brokerage services are offered through an affiliated registered broker-dealer, member SIPC. Securities are not FDIC insured, are not bank guaranteed, and may lose value. Demo recreation for learning purposes only — not a real brokerage.</p>
          <p>Options transactions carry significant risk and are not appropriate for all customers. Review the risk disclosures before trading.</p>
          <p>© 2026 {BRAND} demo. All rights reserved.</p>
        </div>
      </div>
      <div className="word" aria-hidden="true">{BRAND}</div>
    </footer>
  );
}
