export default function AboutPage() {
  return (
    <main
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "32px 20px",
        fontFamily: "Arapey, serif",
        color: "#2F4F2F",
      }}
    >
      {/* Header */}
      <h1
        style={{
          fontFamily: "Zeyada, cursive",
          fontSize: "52px",
          textAlign: "center",
          marginBottom: "10px",
          color: "#818263", // Savory Sage
        }}
      >
        greekgive
      </h1>

      <p
        style={{
          textAlign: "center",
          fontSize: "22px",
          marginBottom: "40px",
          color: "#818263",
        }}
      >
        Fundraising, Made Simple.
      </p>

      {/* Section */}
      <section style={{ marginBottom: "32px" }}>
        <h2
          style={{
            fontSize: "26px",
            marginBottom: "12px",
            color: "#818263",
          }}
        >
          About GreekGive
        </h2>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          GreekGive was created with one purpose in mind — to make fundraising
          easier, clearer, and more empowering for sorority and fraternity
          communities. Chapters pour their hearts into philanthropy, service, and
          sisterhood, and your fundraising tools should support that work, not
          complicate it.
          <br />
          <br />
          GreekGive offers a simple, beautifully designed way to collect
          donations, share your chapter’s mission, and celebrate the impact
          you’re making.
        </p>
      </section>

      {/* Mission */}
      <section style={{ marginBottom: "32px" }}>
        <h2
          style={{
            fontSize: "26px",
            marginBottom: "12px",
            color: "#818263",
          }}
        >
          Our Mission
        </h2>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          To support Greek organizations by providing a modern, intuitive, and
          trustworthy fundraising experience that helps chapters raise more
          money, reach more donors, and focus on what truly matters — service,
          sisterhood, and strengthening their communities.
        </p>
      </section>

      {/* Why GG Matters */}
      <section style={{ marginBottom: "32px" }}>
        <h2
          style={{
            fontSize: "26px",
            marginBottom: "12px",
            color: "#818263",
          }}
        >
          Why GreekGive Matters
        </h2>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          Chapters work hard. Fundraising shouldn’t be the hard part.
          <br />
          <br />
          GreekGive was built because parents and alumnae want a safe,
          transparent way to give; chapters need a platform that is easy to
          share and looks professional; and officers deserve tools that simplify
          tracking and reporting. No student should have to rely on outdated or
          confusing systems.
        </p>
      </section>

      {/* What We Offer */}
      <section style={{ marginBottom: "32px" }}>
        <h2
          style={{
            fontSize: "26px",
            marginBottom: "12px",
            color: "#818263",
          }}
        >
          What We Offer
        </h2>
        <ul style={{ fontSize: "18px", lineHeight: 1.7 }}>
          <li>Simple donation tools anyone can use</li>
          <li>Preset giving amounts to speed up giving</li>
          <li>Shareable links for Instagram, Facebook, and text</li>
          <li>Automatic data exporting (admin-only access)</li>
          <li>Mobile‑friendly pages for easy giving</li>
          <li>Sorority‑inspired design your chapter will love to share</li>
        </ul>
      </section>

      {/* Closing */}
      <section>
        <h2
          style={{
            fontSize: "26px",
            marginBottom: "12px",
            color: "#818263",
          }}
        >
          Built for Chapters. Inspired by Service.
        </h2>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          No matter your philanthropy, no matter the size of your chapter —
          GreekGive is here to help you make a meaningful impact with ease,
          heart, and a touch of sorority charm.
        </p>
      </section>
    </main>
  );
}