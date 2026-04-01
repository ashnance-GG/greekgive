"use client";

import { useEffect, useState } from "react";

const PAYMENT_FLAG_KEY = "greekgive_enable_payment";

export default function AdminPage() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const flag = localStorage.getItem(PAYMENT_FLAG_KEY);
    setEnabled(flag === "true");
  }, []);

  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    localStorage.setItem(PAYMENT_FLAG_KEY, String(next));
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "Arapey, serif", backgroundColor: "#FBF2EA" }}>
      <div style={{ background: "#F4ECE3", padding: "32px", borderRadius: "18px", width: "100%", maxWidth: "420px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "Zeyada, cursive", fontSize: "48px", color: "#818263" }}>Admin Controls</h1>
        <p style={{ marginBottom: "20px" }}>Direct Payment Redirect</p>

        <button onClick={toggle} style={{ width: "100%", padding: "14px", borderRadius: "14px", border: "none", fontSize: "16px", fontWeight: 600, background: enabled ? "#8B8F6A" : "#C9CFA1", color: "#4A4A3F" }}>
          {enabled ? "Disable Payment Redirect" : "Enable Payment Redirect"}
        </button>

        <p style={{ marginTop: "16px", fontSize: "14px", color: "#6B6B5F" }}>
          {enabled ? "Donors will be redirected to BillHighway after submitting." : "Donors will only submit data (no redirect)."}
        </p>
      </div>
    </div>
  );
}
