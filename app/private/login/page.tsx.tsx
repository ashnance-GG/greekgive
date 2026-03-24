"use client";

import { useState } from "react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const correctPassword = "dovelove1874";

  const handleLogin = () => {
    if (password === correctPassword) {
      localStorage.setItem("greekgive_admin", "true");
      window.location.href = "/private";
    } else {
      setError("Incorrect password. Please try again.");
    }
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
          backgroundColor: "#F7EFE7", // Light Oat Latte
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
            marginBottom: "4px",
          }}
        >
          greekgive
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#818263",
            marginBottom: "26px",
          }}
        >
          Admin Access
        </p>

        {/* PASSWORD LABEL */}
        <label
          style={{
            fontWeight: 600,
            color: "#818263",
            fontSize: "17px",
            display: "block",
            textAlign: "left",
            marginBottom: "6px",
          }}
        >
          Password
        </label>

        {/* PASSWORD INPUT */}
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #b8b4a6",
            fontSize: "17px",
            marginBottom: "18px",
          }}
        />

        {/* ERROR MESSAGE */}
        {error && (
          <p
            style={{
              color: "#a94442",
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            {error}
          </p>
        )}

        {/* LOGIN BUTTON */}
        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            background: "#818263", // Savory Sage
            padding: "14px",
            borderRadius: "14px",
            fontSize: "19px",
            fontWeight: 600,
            border: "none",
            color: "white",
            cursor: "pointer",
            marginBottom: "26px",
          }}
        >
          Login
        </button>

        {/* BACK LINK */}
        <button
          onClick={() => (window.location.href = "/")}
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
          return to site
        </button>
      </div>
    </div>
  );
}