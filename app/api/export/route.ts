import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    `${process.env.KV_REST_API_URL}/lrange/donations/0/-1`,
    {
      headers: {
        Authorization: `Bearer ${process.env.KV_REST_API_READ_ONLY_TOKEN}`,
      },
    }
  );

  const rows = (await res.json()).result?.map((r: string) =>
    JSON.parse(r)
  ) || [];

  const header = [
    "Timestamp",
    "Name",
    "Email",
    "Amount",
    "Chapter",
    "Source",
  ];

  const csv = [
    header.join(","),
    ...rows.map((r) =>
      [
        r.timestamp,
        `"${r.name}"`,
        `"${r.email}"`,
        r.amount,
        `"${r.chapter}"`,
        r.source,
      ].join(",")
    ),
  ].join("\n");

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": "attachment; filename=greekgive-donations.csv",
    },
  });
}
