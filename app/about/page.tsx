"use client";

export default function AboutPage() {
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
            marginBottom: "20px",
          }}
        >
          Fundraising, made simple.
        </p>

        {/* DONATE / ABOUT TOGGLE */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "0 auto 28px auto",
            width: "70%",
            borderRadius: "14px",
            overflow: "hidden",
            border: "2px solid #818263",
          }}
        >
          {/* Donate */}
          <button
            onClick={() => (window.location.href = "/")}
            style={{
              flex: 1,
              padding: "8px 0",
              background: "#C2C395", // Avocado (inactive)
              color: "#4A4A3F",
              fontSize: "15px",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
            }}
          >
            Donate
          </button>

          {/* Divider */}
          <div
            style={{
              width: "2px",
              backgroundColor: "#818263",
            }}
          />

          {/* About (active) */}
          <button
            style={{
              flex: 1,
              padding: "8px 0",
              background: "#818263", // Sage (active)
              color: "white",
              fontSize: "15px",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
            }}
          >
            About
          </button>
        </div>

        {/* ABOUT CONTENT */}
        <section style={{ textAlign: "left" }}>
          <h2 style={{ color: "#818263", fontSize: "20px", fontWeight: 600 }}>
            Who We Are
          </h2>
          <p style={{ marginBottom: "20px", color: "#4A4A3F", fontSize: "17px" }}>
            GreekGive was created with the belief that fundraising should reflect
            the same intention and heart found in Greek life. Our platform
            supports chapters in their efforts to uplift others through service
            and philanthropy.
          </p>

          <h2 style={{ color: "#818263", fontSize: "20px", fontWeight: 600 }}>
            Our Mission
          </h2>
          <p style={{ marginBottom: "20px", color: "#4A4A3F", fontSize: "17px" }}>
            Our mission is to make giving easier, clearer, and more beautiful.
            GreekGive helps chapters honor their values of service, philanthropy,
            and community impact through a modern and intuitive experience.
          </p>

          <h2 style={{ color: "#818263", fontSize: "20px", fontWeight: 600 }}>
            Why We Exist
          </h2>
          <p style={{ marginBottom: "20px", color: "#4A4A3F", fontSize: "17px" }}>
            Philanthropy is at the heart of Greek life, yet fundraising tools can
            be difficult to navigate or lack transparency. GreekGive was created
            to offer:
          </p>

          <ul
            style={{
              color: "#4A4A3F",
              fontSize: "17px",
              paddingLeft: "20px",
              marginBottom: "20px",
            }}
          >
            <li>A secure and trustworthy giving experience</li>
            <li>Clear, intuitive tools that support purposeful fundraising</li>
            <li>A platform that reflects the warmth of Greek sisterhood</li>
            <li>
              Support for chapters committed to service, philanthropy, and
              meaningful community impact
            </li>
          </ul>

          <h2 style={{ color: "#818263", fontSize: "20px", fontWeight: 600 }}>
            What We Offer
          </h2>
          <ul
            style={{
              color: "#4A4A3F",
              fontSize: "17px",
              paddingLeft: "20px",
            }}
          >
            <li>Simple, elegant donation tools</li>
            <li>Quick preset giving options</li>
            <li>Easy sharing across platforms</li>
            <li>Secure admin-only reporting</li>
            <li>A warm, sorority-inspired design for every chapter</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
