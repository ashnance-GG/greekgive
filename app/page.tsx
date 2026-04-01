"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [chapter, setChapter] = useState("");
  const [amount, setAmount] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const handleDonate = async () => {
    setShowThankYou(true);
    await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, chapter, amount }),
    });
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "https://greekgive.org";

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#FBF2EA", display: "flex", justifyContent: "center", padding: "40px 20px", fontFamily: "Arapey, serif" }}>
      <div style={{ backgroundColor: "#FBF2EA", maxWidth: "520px", width: "100%" }}>

        <h1 style={{ fontFamily: "Zeyada, cursive", fontSize: "58px", color: "#818263", textAlign: "center", marginBottom: "10px" }}>greekgive</h1>

        <label style={{ fontWeight: 600, color: "#818263", fontSize: "16px" }}>Donation Amount</label>
        <input
          placeholder="$0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: "100%", padding: "14px", borderRadius: "12px", border: "1px solid #D8CFC4", fontSize: "17px", marginTop: "6px", marginBottom: "12px" }}
        />

        <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
          {[5, 10, 25].map((v) => (
            <button key={v} onClick={() => setAmount(String(v))} style={{ flex: 1, background: "#8B8F6A", color: "white", padding: "10px 0", borderRadius: "10px", border: "none", fontWeight: 600 }}>
              ${v}
            </button>
          ))}
        </div>

        <button onClick={handleDonate} style={{ width: "100%", background: "#C9CFA1", color: "#4A4A3F", padding: "14px", borderRadius: "14px", border: "none", fontSize: "18px", fontWeight: 600, marginBottom: "24px" }}>
          Donate Now
        </button>

        <div style={{ background: "#F4ECE3", borderRadius: "18px", padding: "20px", textAlign: "center", marginBottom: "30px" }}>
          <p style={{ color: "#818263", fontSize: "17px", fontWeight: 600, marginBottom: "14px" }}>Share this fundraiser</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
            <button onClick={() => window.open("https://www.instagram.com/", "_blank")} style={{ background: "#E6C7B8", border: "2px solid #8B8F6A", padding: "10px 18px", borderRadius: "12px", fontWeight: 600 }}>Instagram</button>
            <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, "_blank")} style={{ background: "#E6C7B8", border: "2px solid #8B8F6A", padding: "10px 18px", borderRadius: "12px", fontWeight: 600 }}>Facebook</button>
            <button onClick={() => navigator.clipboard.writeText(shareUrl)} style={{ background: "#E6C7B8", border: "2px solid #8B8F6A", padding: "10px 18px", borderRadius: "12px", fontWeight: 600 }}>Copy Link</button>
          </div>
        </div>

        {showThankYou && (
          <p style={{ textAlign: "center", color: "#4A4A3F", fontWeight: 600 }}>Thank you for supporting our chapter 💜</p>
        )}

        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <button onClick={() => (window.location.href = "/private/login")} style={{ background: "transparent", border: "none", color: "#9B948A", textDecoration: "underline" }}>admin login</button>
        </div>
      </div>
    </div>
  );
}
