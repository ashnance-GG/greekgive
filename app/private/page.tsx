"use client";

import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("greekgive_admin");
    if (!loggedIn) {
      window.location.href = "/private/login";
    }
  }, []);

  const handleExport = () => {
    const csvContent =
      "data:text/csv;charset=utf-8,Name,Email,Amount,Chapter\n";
    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = "greekgive-donations.csv";
    link.click();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://greekgive.org");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
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
      <div
        style={{
          backgroundColor: "#F7EFE7", // Oat Latte
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
            fontSize: "54px",
            color: "#818263",
            marginBottom: "4px",
          }}
        >
          greekgive
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#818263",
            marginBottom: "32px",
          }}
        >
          Admin Dashboard
        </p>

        {/* COPY FUNDRAISER LINK */}
        <button
          onClick={handleCopyLink}
          style={{
            width: "100%",
            background: "#C2C395",
            padding: "12px",
            borderRadius: "12px",
            fontSize: "17px",
            border: "2px solid #818263",
            color: "#4A4A3F",
            cursor: "pointer",
            marginBottom: "20px",
            fontWeight: 600,
          }}
        >
          {copied ? "Link Copied!" : "Copy Fundraiser Link"}
        </button>

        {/* STATS / TOTALS */}
        <div
          style={{
            background: "#ffffffcc",
            padding: "16px",
            borderRadius: "14px",
            border: "1px solid #d8d8d8",
            marginBottom: "28px",
            textAlign: "left",
          }}
        >
          <h3
            style={{
              color: "#818263",
              fontSize: "20px",
              marginBottom: "10px",
              fontWeight: 600,
            }}
          >
            Fundraiser Stats
          </h3>
          <p style={{ marginBottom: "6px", color: "#4A4A3F" }}>
            Total Donations: <strong>—</strong>
          </p>
          <p style={{ marginBottom: "6px", color: "#4A4A3F" }}>
            Total Amount Raised: <strong>—</strong>
          </p>
          <p style={{ marginBottom: "6px", color: "#4A4A3F" }}>
            Highest Donation: <strong>—</strong>
          </p>
        </div>

        {/* VIEW DONATIONS TABLE (placeholder) */}
        <div
          style={{
            background: "#ffffffcc",
            padding: "16px",
            borderRadius: "14px",
            border: "1px solid #d8d8d8",
            marginBottom: "28px",
            textAlign: "left",
          }}
        >
          <h3
            style={{
              color: "#818263",
              fontSize: "20px",
              marginBottom: "10px",
              fontWeight: 600,
            }}
          >
            Donation Records
          </h3>

          <p style={{ fontSize: "15px", opacity: 0.7, marginBottom: "10px" }}>
            (Full donation log coming soon)
          </p>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "15px",
            }}
          >
            <thead>
              <tr style={{ background: "#F7EFE7" }}>
                <th style={{ padding: "6px", borderBottom: "1px solid #ccc" }}>
                  Name
                </th>
                <th style={{ padding: "6px", borderBottom: "1px solid #ccc" }}>
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    padding: "8px",
                    borderBottom: "1px solid #e6e6e6",
                  }}
                >
                  —
                </td>
                <td
                  style={{
                    padding: "8px",
                    borderBottom: "1px solid #e6e6e6",
                  }}
                >
                  —
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* EXPORT */}
        <button
          onClick={handleExport}
          style={{
            width: "100%",
            background: "#818263",
            padding: "14px",
            borderRadius: "14px",
            fontSize: "18px",
            fontWeight: 600,
            border: "none",
            color: "white",
            cursor: "pointer",
            marginBottom: "30px",
          }}
        >
          Export to Excel
        </button>

        {/* QR LINK */}
        <button
          onClick={() => (window.location.href = "/qr")}
          style={{
            width: "100%",
            background: "#C2C395",
            padding: "12px",
            borderRadius: "12px",
            fontSize: "17px",
            fontWeight: 600,
            border: "2px solid #818263",
            color: "#4A4A3F",
            cursor: "pointer",
            marginBottom: "34px",
          }}
        >
          Open QR Page
        </button>

        {/* RETURN HOME */}
        <button
          onClick={() => (window.location.href = "/")}
          style={{
            background: "transparent",
            border: "none",
            color: "#818263",
            fontSize: "16px",
            textDecoration: "underline",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          return to homepage
        </button>

        {/* SCRIPT FOOTER LOGO */}
        <h2
          style={{
            fontFamily: "Zeyada, cursive",
            fontSize: "40px",
            color: "#818263",
            marginBottom: "20px",
          }}
        >
          greekgive
        </h2>

        {/* LOGOUT */}
        <button
          onClick={() => {
            localStorage.removeItem("greekgive_admin");
            window.location.href = "/";
          }}
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
          logout
        </button>
      </div>
    </div>
  );
}
