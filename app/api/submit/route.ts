import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

type Submission = {
  name: string;
  email: string;
  amount: string;
  chapter: string;
  source: string;
  timestamp: string;
};

// JSON file used as a mini "database"
const filePath = path.join(process.cwd(), "data", "submissions.json");

// ✅ Ensure data folder + file exist
async function ensureDataFile() {
  try {
    await fs.access(filePath);
  } catch (e) {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, JSON.stringify([]));
  }
}

// ✅ GET — return all submissions
export async function GET() {
  await ensureDataFile();
  const data = await fs.readFile(filePath, "utf8");
  return NextResponse.json(JSON.parse(data));
}

// ✅ POST — save a new submission
export async function POST(req: Request) {
  await ensureDataFile();
  const body = await req.json();

  const newEntry: Submission = {
    name: body.name || "",
    email: body.email || "",
    amount: body.amount || "",
    chapter: body.chapter || "",
    source: body.source || "Homepage",
    timestamp: new Date().toISOString(),
  };

  // Read existing submissions
  const existing = JSON.parse(await fs.readFile(filePath, "utf8"));
  existing.push(newEntry);

  // Save updated array
  await fs.writeFile(filePath, JSON.stringify(existing, null, 2));

  return NextResponse.json({ success: true });
}

// ✅ Used by /api/export
export async function getSubmissions() {
  await ensureDataFile();
  const data = await fs.readFile(filePath, "utf8");
  return JSON.parse(data);
}
