"use client";

import { useState } from "react";

export default function Page() {
  const [tab, setTab] = useState<"donate" | "about">("donate");
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="gg-main">
      <div className="gg-container">
        {/* Header */}
        <header className="gg-header">
          <h1 className="brand">greekgive</h1>
          <p className="tagline">Fundraising, made simple.</p>
        </header>

        {/* Tabs */}
        <nav className="tabs">
          <button
            type="button"
            className={`tab ${tab === "donate" ? "active" : ""}`}
            onClick={() => {
              setTab("donate");
              setSubmitted(false);
            }}
          >
            Donate
          </button>
          <button
            type="button"
            className={`tab ${tab === "about" ? "active" : ""}`}
            onClick={() => {
              setTab("about");
              setSubmitted(false);
            }}
          >
            About
          </button>
        </nav>

        {/* DONATE TAB */}
        {tab === "donate" && !submitted && (
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <input
              placeholder="Your Name"
              className="input"
              aria-label="Your Name"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="input"
              aria-label="Email Address"
            />

            <input
              type="text"
              inputMode="numeric"
              placeholder="Donation Amount (minimum $5)"
              className="input"
              aria-label="Donation Amount"
            />

            <input
              placeholder="Your Chapter (for Panhellenic points, optional)"
              className="input"
              aria-label="Your Chapter (optional)"
            />

            <div className="payment">
              <p className="payment-title">Payment Method</p>

              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  defaultChecked
                  className="radio"
                  aria-label="BillHighway"
                />
                <span>Pay securely through BillHighway</span>
              </label>

              <label className="payment-option disabled">
                <input type="radio" name="payment" disabled className="radio" />
                <span>Apple Pay (coming soon)</span>
              </label>

              <label className="payment-option disabled">
                <input type="radio" name="payment" disabled className="radio" />
                <span>Venmo (coming soon)</span>
              </label>

              <p className="payment-note">
                Donations are routed directly through the chapter's verified
                BillHighway account to ensure transparency and prevent misuse of
                funds.
              </p>
            </div>

            <button
              type="button"
              className="primary"
              onClick={() => setSubmitted(true)}
            >
              Continue to Payment
            </button>
          </form>
        )}

        {/* THANK YOU */}
        {tab === "donate" && submitted && (
          <section className="thankyou">
            <p className="thankyou-head">
              Thank you for supporting our Philanthropy.
            </p>
            <p className="thankyou-copy">
              Your generosity helps our chapter make a meaningful impact through
              service and philanthropy.
            </p>
            <button
              type="button"
              className="linkbtn"
              onClick={() => setSubmitted(false)}
            >
              Make another donation
            </button>
          </section>
        )}

        {/* ABOUT TAB */}
        {tab === "about" && (
          <section className="about">
            <p>
              GreekGive was created because fundraising shouldn't 
              feel confusing, clunky, or time-consuming.
            </p>
            <p>
              Many chapters rely on platforms that are difficult to 
              navigate, hard to customize, and frustrating for both 
              members and donors. GreekGive was designed to offer a
              simpler, cleaner experience tailored specifically to 
              Greek organizations.
            </p>
            <p>
              GreekGive does not collect or hold funds. All donations 
              are routed directly through a chapter's verified BillHighway 
              account, helping ensure transparency, accountability, and 
              compliance with national financial policies.
            </p>
            <p className="about-accent">
              Built by Greek women, for Greek organizations — because
              philanthropy should feel empowering, not stressful.
            </p>
          </section>
        )}
      </div>
    </main>
  );
}
``