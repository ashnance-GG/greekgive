"use client";

import { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const handleExport = () => {
    const data = [
      ["Donation Amount"],
      [amount],
    ];

    const csvContent =
      "data:text/csv;charset=utf-8," +
      data.map((e) => e.join(",")).join("\n");

    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = "greekgive-donations.csv";
    link.click();
  };

  const handleContinue = () => {
    setShowThankYou(true);
    // Later: add BillHighway redirect here
  };

  return (
    <main
      style={{
        maxWidth: "480px",
        margin: "0 auto",
        padding: "24px",
        fontFamily: "Arapey, serif",
        color: "#2f4f2f",
      }}
    >
      {/* HEADER */}
      <h1
        style={{
          fontFamily: "Zeyada, cursive",
          fontSize: "48px",
          color: "#2f4f2f",
          textAlign: "center",
          marginBottom: "8px",
        }}
      >
        greekgive
      </h1>

      <p
        style={{
          textAlign: "center",
          fontSize: "20px",
          marginBottom: "28px",
        }}
      >
        Fundraising, Made Simple.
      </p>

