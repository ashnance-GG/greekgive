"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (password === "dovelove1874") {
      localStorage.setItem("greekgive_admin", "true");
      router.push("/private");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#EFD7CF", // Peach Protein
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "Arapey, serif",
      }}
    >
      <div
        style={{
          background: "#DCD4C1", // Oat Latte
          padding: "32px",
          borderRadius: "14px",
          maxWidth: "400px",
          width: "100%",
          boxShadow: "0 4px 8px rgba(0,0,0,0.08)",
        }}
      >
        {/* HEADER */}
        <h1
          style={{
            fontFamily: "Zeyada, cursive",
            fontSize: "46px",
            textAlign: "center",
            marginBottom: "6px",
            color: "#818263", // Savory Sage
          }}
        >
          greekgive
        </h1>

        <h2
          style={{
            textAlign: "center",
            fontSize: "20px",
            color: "#818263",
            marginBottom: "24px",
          }}
        >
          greekgive admin access
        </h2>

        {/* PASSWORD INPUT */}
        <label style={{ fontWeight: 600, color: "#818263" }}>
          Enter Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #b8b4a6",
            marginTop: "6px",
            marginBottom: "16px",
            fontSize: "16px",
          }}
        />

        {/* ERROR MESSAGE */}
        {error && (
          <p style={{ color: "#a94442", marginBottom: "12px" }}>{error}</p>
        )}

        {/* LOGIN BUTTON */}
        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            background: "#818263", // Savory Sage
            border: "none",
            borderRadius: "8px",
            padding: "12px",
            fontSize: "18px",
            color: "white",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </main>
  );
}
