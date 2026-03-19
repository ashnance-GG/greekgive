import { NextResponse } from "next/server";

type Submission = {
  name: string;
  email: string;
  amount: string;
  chapter: string;
  source: string;
  timestamp: string;
};

const submissions: Submission[] = [];

export async function POST(req: Request) {
  const body = await req.json();

  submissions.push({
    name: body.name || "",
    email: body.email || "",
    amount: body.amount || "",
    chapter: body.chapter || "",
    source: body.source || "web",
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json({ success: true });
}

export function getSubmissions() {
  return submissions;
}
