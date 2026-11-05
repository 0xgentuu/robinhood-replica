import React from "react";

export function Join() {
  return (
    <section className="join" id="join">
      <video className="join-bg" autoPlay muted loop playsInline preload="auto">
        <source src="/join.webm" type="video/webm" />
        <source src="/join.mp4" type="video/mp4" />
      </video>
      <div>
        <h2>Join a new generation<br />of investors</h2>
        <a className="pill fill" href="#top">Get started</a>
      </div>
    </section>
  );
}
