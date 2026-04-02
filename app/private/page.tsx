"use client";

import { useEffect, useState } from "react";

const PAYMENT_FLAG_KEY = "greekgive_enable_payment";

export default function AdminDashboard() {
  const [donations, setDonations] = useState([]);
  const [paymentsEnabled, setPaymentsEnabled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loggedIn = localStorage.getItem("greekgive_admin");
    if (!loggedIn) {
      window.location.href = "/private/login";
      return;
    }

    const flag = localStorage.getItem(PAYMENT_FLAG_KEY);
    setPaymentsEnabled(flag === "true");

    async function load() {
      try {
        const res = await fetch("/api/submit");
        const data = await res.json();
        setDonations(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const togglePayments = () => {
    const next = !paymentsEnabled;
    setPaymentsEnabled(next);
    localStorage.setItem(PAYMENT_FLAG_KEY, String(next));
  };

  const exportCSV = () => {
    window.location.href = "/api/export";
  };

  const totalAmount = donations.reduce((sum, d) => sum + Number(d.amount || 0), 0);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#FBF2EA", padding: "40px 20px", fontFamily: "Arapey, serif" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontFamily: "Zeyada, cursive", fontSize: "56px", color: "#818263", textAlign: "center" }}>greekgive</h1>
        <p style={{ textAlign: "center", color: "#818263", fontSize: "22px", marginBottom: "30px" }}>Admin Dashboard</p>

        {/* Payment Toggle */}
        <div style={{ background: "#F4ECE3", borderRadius: "18px", padding: "24px", marginBottom: "30px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <strong>Direct Payment Redirect</strong>
            <p style={{ fontSize: "14px", color: "#6B6B5F" }}>
              {paymentsEnabled ? "Redirecting donors to BillHighway" : "Collecting data only (no redirect)"}
            </p>
          </div>
          <label style={{ position: "relative", display: "inline-block", width: "54px", height: "28px" }}>
            <input type="checkbox" checked={paymentsEnabled} onChange={togglePayments} style={{ opacity: 0, width: 0, height: 0 }} />
            <span style={{ position: "absolute", cursor: "pointer", inset: 0, backgroundColor: paymentsEnabled ? "#8B8F6A" : "#ccc", borderRadius: "28px", transition: ".4s" }}>
              <span style={{ position: "absolute", height: "22px", width: "22px", left: paymentsEnabled ? "28px" : "4px", bottom: "3px", backgroundColor: "white", borderRadius: "50%", transition: ".4s" }} />
            </span>
          </label>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "20px", marginBottom: "30px", flexWrap: "wrap" }}>
          <div style={statCard}>Total Donations<br /><strong>{donations.length}</strong></div>
          <div style={statCard}>Total Amount<br /><strong>${totalAmount}</strong></div>
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
          <button onClick={exportCSV} style={actionButton}>Export CSV</button>
          <button onClick={() => (window.location.href = "/")} style={actionButton}>Return to Homepage</button>
        </div>

        {/* Table */}
        <div style={{ background: "#ffffff", borderRadius: "14px", padding: "16px", overflowX: "auto" }}>
          {loading ? (
            <p>Loading…</p>
          ) : (
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ textAlign: "left", borderBottom: "2px solid #eee" }}>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Chapter</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {donations.map((d, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #eee" }}>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>{d.chapter}</td>
                    <td>${d.amount}</td>
                    <td>{new Date(d.timestamp).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Logout */}
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button onClick={() => { localStorage.removeItem("greekgive_admin"); window.location.href = "/"; }} style={{ background: "transparent", border: "none", color: "#9B948A", textDecoration: "underline" }}>
            logout
          </button>
        </div>
      </div>
    </div>
  );
}

const statCard = {
  background: "#F4ECE3",
  borderRadius: "16px",
  padding: "20px",
  flex: 1,
  minWidth: "200px",
  color: "#4A4A3F",
  fontWeight: 600,
};

const actionButton = {
  background: "#C9CFA1",
  border: "none",
  padding: "12px 18px",
  borderRadius: "12px",
  fontWeight: 600,
};
