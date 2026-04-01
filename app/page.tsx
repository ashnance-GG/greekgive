"use client";

import { useState } from "react";

// ✅ Placeholder BillHighway URL — safe to replace later
const BILLHIGHWAY_PLACEHOLDER_URL = "https://example.com";

export default function Home() {
  const [activeTab, setActiveTab] = useState("donate");
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
      body: JSON.stringify({
        name,
        email,
        chapter,
        amount,
        source: "Homepage",
      }),
    });

    // ✅ Redirect AFTER saving data
    window.location.href = BILLHIGHWAY_PLACEHOLDER_URL;
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "https://greekgive.org";

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#FBF2EA", display: "flex", justifyContent: "center", padding: "40px 20px", fontFamily: "Arapey, serif" }}>
      <div style={{ maxWidth: "520px", width: "100%" }}>

        {/* HEADER */}
        <h1 style={{ fontFamily: "Zeyada, cursive", fontSize: "58px", color: "#818263", textAlign: "center", marginBottom: "6px" }}>
          greekgive
        </h1>
        <p style={{ fontSize: "22px", color: "#818263", textAlign: "center", marginBottom: "26px" }}>
          Fundraising, made simple.
        </p>

        {/* DONATE / ABOUT TABS */}
        <div style={{ display: "flex", justifyContent: "center", margin: "0 auto 32px", width: "70%", borderRadius: "14px", overflow: "hidden", border: "2px solid #818263" }}>
          <button onClick={() => setActiveTab("donate")} style={{ flex: 1, padding: "8px 0", background: activeTab === "donate" ? "#818263" : "#C2C395", color: activeTab === "donate" ? "white" : "#4A4A3F", fontSize: "15px", fontWeight: 600, border: "none" }}>
            Donate
          </button>
          <div style={{ width: "2px", backgroundColor: "#818263" }} />
          <button onClick={() => (window.location.href = "/about")} style={{ flex: 1, padding: "8px 0", background: activeTab === "about" ? "#818263" : "#C2C395", color: activeTab === "about" ? "white" : "#4A4A3F", fontSize: "15px", fontWeight: 600, border: "none" }}>
            About
          </button>
        </div>

        {activeTab === "donate" && (
          <>
            <label>Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />

            <label>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />

            <label>Chapter (Optional)</label>
            <input value={chapter} onChange={(e) => setChapter(e.target.value)} style={inputStyle} />

            <label>Donation Amount</label>
            <input placeholder="$0.00" value={amount} onChange={(e) => setAmount(e.target.value)} style={{ ...inputStyle, marginBottom: "12px" }} />

            {/* PRESET BUTTONS */}
            <div style={{ display: "flex", gap: "12px", marginBottom: "22px" }}>
              {[5, 10, 25].map((v) => (
                <button key={v} onClick={() => setAmount(String(v))} style={{ flex: 1, background: "#8B8F6A", color: "white", padding: "10px 0", borderRadius: "10px", border: "none", fontWeight: 600 }}>
                  ${v}
                </button>
              ))}
            </div>

            {/* DONATE NOW */}
            <button onClick={handleDonate} style={{ width: "100%", background: "#C9CFA1", color: "#4A4A3F", padding: "14px", borderRadius: "14px", border: "none", fontSize: "18px", fontWeight: 600, marginBottom: "24px" }}>
              Donate Now
            </button>

            {/* SHARE */}
            <div style={{ background: "#F4ECE3", borderRadius: "18px", padding: "20px", textAlign: "center", marginBottom: "26px" }}>
              <p style={{ fontWeight: 600, color: "#818263" }}>Share this fundraiser</p>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                <button onClick={() => window.open("https://www.instagram.com/", "_blank")} style={shareButton}>Instagram</button>
                <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, "_blank")} style={shareButton}>Facebook</button>
                <button onClick={() => navigator.clipboard.writeText(shareUrl)} style={shareButton}>Copy Link</button>
              </div>
            </div>

            {showThankYou && <p style={{ textAlign: "center", fontWeight: 600 }}>Thank you for supporting our chapter 💜</p>}
          </>
        )}

        {/* ADMIN LOGIN */}
        <div style={{ textAlign: "center" }}>
          <button onClick={() => (window.location.href = "/private/login")} style={{ background: "transparent", border: "none", color: "#9B948A", textDecoration: "underline" }}>
            admin login
          </button>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid #D8CFC4",
  marginBottom: "18px",
};

const shareButton = {
  background: "#E6C7B8",
  border: "2px solid #8B8F6A",
  padding: "10px 18px",
  borderRadius: "12px",
  fontWeight: 600,
};
