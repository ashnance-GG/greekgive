"use client";

import { useState } from "react";

export default function Page() {
  const [tab, setTab] = useState<"donate" | "about">("donate");
  const [form, setForm] = useState({
    name: "",
    email: "",
    amount: "",
    chapter: "",
  });

  const downloadCSV = () => {
    // 🔍 Force visible values so we can diagnose
    const safeForm = {
      name: form.name || "TEST_NAME",
      email: form.email || "test@email.com",
      amount: form.amount || "10",
      chapter: form.chapter || "TEST_CHAPTER",
    };

    const rows = [
      ["Timestamp", "Name", "Email", "Amount", "Chapter", "Source"],
      [
        new Date().toISOString(),
        safeForm.name,
        safeForm.email,
        safeForm.amount,
        safeForm.chapter,
        "web",
      ],
    ];

    const csv = rows
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `greekgive-donations-${Date.now()}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    alert("CSV downloaded. This file MUST contain a data row.");
  };

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
          <div className="panel">
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
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              className="input"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <input
              className="input"
              placeholder="Donation Amount (minimum $5)"
              value={form.amount}
              onChange={(e) =>
                setForm({ ...form, amount: e.target.value })
              }
            />

            <input
              className="input"
              placeholder="Your Chapter (optional)"
              value={form.chapter}
              onChange={(e) =>
                setForm({ ...form, chapter: e.target.value })
              }
            />

            <button
              type="button"
              className="primary"
              onClick={downloadCSV}
            >
              Continue to Payment
            </button>

            {/* 🔍 DEBUG PANEL (temporary) */}
            <pre style={{ marginTop: 16, fontSize: 12 }}>
              {JSON.stringify(form, null, 2)}
            </pre>
          </div>
        )}

        {tab === "about" && (
          <div className="panel about">
            <p>
              greekgive helps Greek organizations raise funds in a calm,
              transparent, and accessible way.
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
