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
    const timestamp = new Date().toISOString();

    const rows = [
      ["Timestamp", "Name", "Email", "Amount", "Chapter", "Source"],
      [
        timestamp,
        form.name,
        form.email,
        form.amount,
        form.chapter,
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

    // ✅ UNIQUE filename so Excel cannot reuse the old file
    link.download = `greekgive-donations-${Date.now()}.csv`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    alert("Donation info saved. A new CSV file was downloaded.");
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
            <div className="amounts">
              {["5", "10", "25"].map((val) => (
                <button
                  key={val}
                  type="button"
                  className={
                    form.amount === val ? "amount active" : "amount"
                  }
                  onClick={() =>
                    setForm({ ...form, amount: val })
                  }
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
          </div>
        )}

        {tab === "about" && (
          <div className="panel about">
            <p>
              greekgive helps Greek organizations raise funds in a calm,
              transparent, and accessible way.
            </p>
            <p>
              Donor information is collected separately from payment processing
              to support compliance and trust.
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
