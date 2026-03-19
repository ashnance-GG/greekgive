"use client";

import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState<"donate" | "about">("donate");
  const [form, setForm] = useState({
    name: "",
    email: "",
    amount: "",
    chapter: "",
  });

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

        {tab === "donate" && (
          <form className="form">
            {/* Preset amounts */}
            <div className="amounts">
              {["5", "10", "25"].map((val) => (
                <button
                  key={val}
                  type="button"
                  className={form.amount === val ? "amount active" : "amount"}
                  onClick={() => setForm({ ...form, amount: val })}
                >
                  ${val}
                </button>
              ))}
            </div>

            <input
              className="input"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              className="input"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <input
              className="input"
              placeholder="Donation Amount (minimum $5)"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
            />

            <input
              className="input"
              placeholder="Your Chapter (optional)"
              value={form.chapter}
              onChange={(e) => setForm({ ...form, chapter: e.target.value })}
            />

            <button
              type="button"
              className="primary"
              onClick={async () => {
                await fetch("/api/submit", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    ...form,
                    source: "web",
                  }),
                });

                alert("Submission saved. Payment integration coming next.");
              }}
            >
              Continue to Payment
            </button>
          </form>
        )}

        {tab === "about" && (
          <div className="about">
            <p>
              greekgive helps Greek organizations raise funds in a way that is
              calm, transparent, and easy for donors.
            </p>
            <p>
              Donor information is collected separately from payment processing
              to ensure security and compliance.
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
