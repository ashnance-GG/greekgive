"use client";

import { useState } from "react";

const BILLHIGHWAY_URL = "https://YOUR-BILLHIGHWAY-LINK"; // <-- paste your real link here

export default function Page() {
  const [tab, setTab] = useState<"donate" | "about">("donate");
  const [form, setForm] = useState({
    name: "",
    email: "",
    amount: "",
    chapter: "",
  });

  const downloadCSV = () => {
    const rows = [
      ["Timestamp", "Name", "Email", "Amount", "Chapter", "Source"],
      [
        new Date().toISOString(),
        form.name,
        form.email,
        form.amount,
        form.chapter,
        "web",
      ],
    ];

    const csv = rows
      .map((row) =>
        row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")
      )
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `greekgive-donations-${Date.now()}.csv`; // unique filename to avoid Excel caching
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleContinue = () => {
    // 1) Download local CSV row for chapter reporting
    downloadCSV();

    // 2) Redirect to BillHighway
    if (BILLHIGHWAY_URL && BILLHIGHWAY_URL.startsWith("http")) {
      window.location.href = BILLHIGHWAY_URL;
    } else {
      alert("BillHighway link is not set yet. Please add it in page.tsx.");
    }
  };

  return (
    <main className="page">
      <section className="card">
        <header className="header">
          <h1 className="brand">greekgive</h1>
          <p className="tagline">Fundraising, Made Simple.</p>
        </header>

        {/* Tabs */}
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

        {/* CONDITIONAL CONTENT */}
        {tab === "donate" ? (
          <div className="panel">
            {/* Preset amounts */}
            <div className="amounts">
              {["5", "10", "25"].map((val) => (
                <button
                  key={val}
                  type="button"
