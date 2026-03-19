"use client";

import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState<"donate" | "about">("donate");
  const [amount, setAmount] = useState("");

  return (
    <main className="page">
      <section className="card">
        <header className="header">
          <h1 className="brand">greekgive</h1>
          <p className="tagline">Fundraising, Made Simple.</p>
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

        <div className="panel">
          {tab === "donate" && (
            <form className="form">
              {/* Preset amounts */}
              <div className="amounts">
                {["5", "10", "25"].map((val) => (
                  <button
                    key={val}
                    type="button"
                    className={amount === val ? "amount active" : "amount"}
                    onClick={() => setAmount(val)}
                  >
                    ${val}
                  </button>
                ))}
              </div>

              <input className="input" placeholder="Your Name" />
              <input className="input" placeholder="Email Address" />
              <input
                className="input"
                placeholder="Donation Amount (minimum $5)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <input className="input" placeholder="Your Chapter (optional)" />

             <button
  type="button"
  className="primary"
  onClick={async () => {
    await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: document.querySelector<HTMLInputElement>(
          'input[placeholder="Your Name"]'
        )?.value,
        email: document.querySelector<HTMLInputElement>(
          'input[placeholder="Email Address"]'
        )?.value,
        amount: document.querySelector<HTMLInputElement>(
          'input[placeholder="Donation Amount (minimum $5)"]'
        )?.value,
        chapter: document.querySelector<HTMLInputElement>(
          'input[placeholder="Your Chapter (optional)"]'
        )?.value,
        source: "web",
      }),
    });

    alert("Submission saved! BillHighway will be connected next.");
  }}
>
  Continue to Payment
</button>
              >
                Continue to Payment
              </button>
            </form>
          )}

          {tab === "about" && (
            <div className="about">
              <p>
                greekgive makes philanthropy calmer, cleaner, and more accessible
                for Greek organizations and their supporters.
              </p>
              <p>
                Our goal is to remove friction from giving while keeping chapters
                compliant and donors confident.
              </p>
              <p className="accent">
                Built by Greek women, for Greek organizations.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
