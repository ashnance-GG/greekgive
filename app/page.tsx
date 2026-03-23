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

      {/* DONATION AMOUNT FIELD */}
      <label style={{ fontWeight: 600 }}>Donation Amount</label>
      <input
        type="number"
        placeholder="$0.00"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #c9b8a8",
          marginTop: "8px",
          marginBottom: "16px",
        }}
      />

      {/* PRESET BUTTONS */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        {[5, 10, 25].map((val) => (
          <button
            key={val}
            onClick={() => setAmount(String(val))}
            style={{
              flex: 1,
              background: "#4a7c59",
              border: "none",
              borderRadius: "8px",
              padding: "10px 0",
              color: "white",
              cursor: "pointer",
            }}
          >
            ${val}
          </button>
        ))}
      </div>

      {/* CONTINUE BUTTON */}
      <button
        onClick={handleContinue}
        style={{
          width: "100%",
          background: "#d96f52",
          padding: "14px",
          borderRadius: "10px",
          border: "none",
          color: "white",
          fontSize: "18px",
          marginBottom: "20px",
          cursor: "pointer",
        }}
      >
        Continue to Payment
      </button>

      {/* THANK YOU MESSAGE */}
      {showThankYou && (
        <div
          style={{
            padding: "16px",
            background: "#e9f5e3",
            borderRadius: "10px",
            border: "1px solid #b5d6a3",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "18px", fontWeight: 600 }}>
            Thank you so much for supporting our chapter! 💜
          </p>
        </div>
      )}

      {/* EXPORT BUTTON */}
      <button
        onClick={handleExport}
        style={{
          width: "100%",
          background: "#2f4f2f",
          padding: "12px",
          borderRadius: "8px",
          border: "none",
          color: "white",
          fontSize: "16px",
          marginBottom: "32px",
          cursor: "pointer",
        }}
      >
        Export to Excel
      </button>

      {/* SOCIAL SHARE SECTION */}
      <div
        style={{
          marginTop: "10px",
          padding: "16px",
          background: "#FFEFE3",
          borderRadius: "12px",
          border: "1px solid #e4c3ad",
          textAlign: "center",
        }}
      >
        <p
          style={{
            marginBottom: "12px",
            fontWeight: 600,
            color: "#2F4F2F",
          }}
        >
          Share this fundraiser
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          {/* Instagram */}
          <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              window.open("https://www.instagram.com/", "_blank");
            }}
            style={{
              background: "#d96f52",
              color: "white",
              padding: "10px 16px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            📸 Instagram
          </button>

          {/* Facebook */}
          <button
            onClick={() => {
              const url = encodeURIComponent(window.location.href);
              window.open(
                `https://www.facebook.com/sharer/sharer.php?u=${url}`,
                "_blank"
              );
            }}
            style={{
              background: "#4a7c59",
              color: "white",
              padding: "10px 16px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            👍 Facebook
          </button>

          {/* Copy Link */}
          <button
            onClick={() =>
              navigator.clipboard.writeText(window.location.href)
            }
            style={{
              background: "#2F4F2F",
              color: "white",
              padding: "10px 16px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            🔗 Copy Link
          </button>
        </div>
      </div>
    </main>
  );
}
