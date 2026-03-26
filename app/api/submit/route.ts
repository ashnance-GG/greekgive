import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const entry = {
    name: body.name || "",
    email: body.email || "",
    amount: body.amount || "",
    chapter: body.chapter || "",
    source: "Homepage",
    timestamp: new Date().toISOString(),
  };

  // Save entry into Upstash Redis List "donations"
  await fetch(`${process.env.KV_REST_API_URL}/lpush/donations`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify([JSON.stringify(entry)]),
  });

  return NextResponse.json({ success: true });
}

export async function GET() {
  const res = await fetch(
    `${process.env.KV_REST_API_URL}/lrange/donations/0/-1`,
    {
      headers: {
        Authorization: `Bearer ${process.env.KV_REST_API_READ_ONLY_TOKEN}`,
      },
    }
  );

  const data = await res.json();
  const list =
    data.result?.map((raw: string) => JSON.parse(raw)) || [];

  return NextResponse.json(list);
}
