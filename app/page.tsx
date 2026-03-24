"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [chapter, setChapter] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const handleContinue = () => {
    setShowThankYou(true);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#EFD7CF", // Peach Protein
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "40px 20px",
        fontFamily: "Arapey, serif",
      }}
    >
      {/* MAIN ROUNDED PANEL */}
      <div
        style={{
          backgroundColor: "#F7EFE7", // ✅ LIGHTER OAT LATTE (matches QR page)
          borderRadius: "22px",
          padding: "50px 30px 70px 30px",
          width: "100%",
          maxWidth: "520px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        {/* HEADER */}
        <h1
          style={{
            fontFamily: "Zeyada, cursive",
            fontSize: "58px",
            color: "#818263",
            marginBottom: "10px",
          }}
        >
          greekgive
        </h1>

        <p
          style={{
            fontSize: "23px",
            color: "#818263",
            marginBottom: "40px",
          }}
        >
          Fundraising, made simple.
        </p>

        {/* NAME */}
        <label
          style={{
            fontWeight: 600,
            color: "#818263",
            fontSize: "18px",
            display: "block",
            textAlign: "left",
            marginBottom: "6px",
          }}
        >
          Name
        </label>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #b8b4a6",
            fontSize: "18px",
            marginBottom: "20px",
          }}
        />

        {/* EMAIL */}
        <label
          style={{
            fontWeight: 600,
            color: "#818263",
            fontSize: "18px",
            display: "block",
            textAlign: "left",
            marginBottom: "6px",
          }}
        >
          Email
        </label>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #b8b4a6",
            fontSize: "18px",
            marginBottom: "20px",
          }}
        />

        {/* DONATION AMOUNT */}
        <label
          style={{
            fontWeight: 600,
            color: "#818263",
            fontSize: "18px",
            display: "block",
            textAlign: "left",
            marginBottom: "6px",
          }}
        >
          Donation Amount
        </label>
        <input
          type="number"
          placeholder="$0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #b8b4a6",
            fontSize: "18px",
            marginBottom: "20px",
          }}
        />

        {/* PRESET BUTTONS */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          {[5, 10, 25].map((val) => (
            <button
              key={val}
              onClick={() => setAmount(String(val))}
              style={{
                flex: 1,
                background: "#818263",
                borderRadius: "10px",
                padding: "12px 0",
                color: "white",
                fontSize: "17px",
                border: "none",
                cursor: "pointer",
              }}
            >
              ${val}
            </button>
          ))}
        </div>

        {/* CHAPTER NAME (OPTIONAL) */}
        <label
          style={{
            fontWeight: 600,
            color: "#818263",
            fontSize: "18px",
            display: "block",
            textAlign: "left",
            marginBottom: "6px",
          }}
        >
          Chapter Name (Optional)
        </label>
        <input
          type="text"
          placeholder="e.g., Beta Zeta"
          value={chapter}
          onChange={(e) => setChapter(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #b8b4a6",
            fontSize: "18px",
            marginBottom: "26px",
          }}
        />

        {/* CONTINUE BUTTON */}
        <button
          onClick={handleContinue}
          style={{
            width: "100%",
            background: "#C2C395", // Avocado Smoothie
            padding: "16px",
            borderRadius: "14px",
            fontSize: "20px",
            fontWeight: 600,
            border: "none",
            color: "#4A4A3F",
            cursor: "pointer",
            marginBottom: "30px",
          }}
        >
          Continue to Payment
        </button>

        {/* THANK YOU */}
        {showThankYou && (
          <div
            style={{
              background: "#e9f5e3",
              borderRadius: "14px",
              padding: "18px",
              border: "1px solid #b5d6a3",
              marginBottom: "32px",
            }}
          >
            <p style={{ fontSize: "19px", fontWeight: 600, color: "#4A4A3F" }}>
              Thank you so much for supporting our chapter! 💜
            </p>
          </div>
        )}

        {/* SHARE BLOCK */}
        <div
          style={{
            backgroundColor: "#F7EFE7", // ✅ LIGHTER OAT LATTE, matches panel
            padding: "20px",
            borderRadius: "14px",
            marginTop: "10px",
            border: "1px solid #e2dacb",
          }}
        >
          <p
            style={{
              color: "#818263",
              fontSize: "18px",
              fontWeight: 600,
              marginBottom: "14px",
            }}
          >
            Share this fundraiser
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                window.open("https://www.instagram.com/", "_blank");
              }}
              style={{
                background: "#818263",
                color: "white",
                padding: "12px 20px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Instagram
            </button>

            <button
              onClick={() => {
                const url = encodeURIComponent(window.location.href);
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${url}`,
                  "_blank"
                );
              }}
              style={{
                background: "#818263",
                color: "white",
                padding: "12px 20px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Facebook
            </button>

            <button
              onClick={() => navigator.clipboard.writeText(window.location.href)}
              style={{
                background: "#818263",
                color: "white",
                padding: "12px 20px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Copy Link
            </button>
          </div>
        </div>

        {/* ADMIN LOGIN LINK */}
        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <button
            onClick={() => (window.location.href = "/private/login")}
            style={{
              background: "transparent",
              border: "none",
              color: "#818263",
              fontSize: "14px",
              textDecoration: "underline",
              cursor: "pointer",
              opacity: 0.7,
            }}
          >
            admin login
          </button>
        </div>
      </div>
    </div>
  );
}
