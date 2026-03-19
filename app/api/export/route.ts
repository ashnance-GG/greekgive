import { NextResponse } from "next/server";
import { getSubmissions } from "../submit/route";

export async function GET() {
  const rows = getSubmissions();

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
