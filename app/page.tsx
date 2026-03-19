
"use client";

import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState<"donate" | "about">("donate");

  return (
    <main className="page">
      <section className="card">
        <header className="header">
          <h1 className="brand">greekgive</h1>
          <p className="tagline">Fundraising, made simple.</p>
        </header>

        <div className="tabs">
          <button
            className={tab === "donate" ? "tab active" : "tab"}
            onClick={() => setTab("donate")}
          >
            Donate
          </button>
          <button
            className={tab === "about" ? "tab active" : "tab"}
            onClick={() => setTab("about")}
          >
            About
          </button>
        </div>

        {tab === "donate" && (
          <form className="form">
            <input className="input" placeholder="Your Name" />
            <input className="input" placeholder="Email Address" />
            <input
              className="input"
              placeholder="Donation Amount (minimum $5)"
            />
            <input className="input" placeholder="Your Chapter (optional)" />

            <button type="button" className="primary">
              Continue to Payment
            </button>
          </form>
        )}

        {tab === "about" && (
          <div className="about">
            <p>
              greekgive was created to make fundraising easier, calmer, and more
              transparent for Greek organizations and the people who support
              them.
            </p>
            <p>
              Our goal is to remove friction from giving while maintaining
              compliance with university and national policies.
            </p>
            <p className="accent">
              Built by Greek women, for Greek organizations.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
