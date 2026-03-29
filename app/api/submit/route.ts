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
  const list = data.result?.map((raw: string) => JSON.parse(raw)) || [];

  return NextResponse.json(list);
}
``
