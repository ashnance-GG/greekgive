export default function QRPage() {
  const url = "https://greekgive.org";

  return (
    <main className="page">
      <section className="card" style={{ textAlign: "center" }}>
        <h1 className="brand">greekgive</h1>
        <p className="tagline">Fundraising, made simple.</p>

        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
            url
          )}`}
          alt="GreekGive QR Code"
          style={{ marginTop: 24 }}
        />

        <p style={{ marginTop: 16, fontSize: 13 }}>
          Scan to support our philanthropy
        </p>
      </section>
    </main>
  );
}