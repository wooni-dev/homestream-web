export async function onRequest(context) {
  try {
    const bucket = context.env.BUCKET;
    if (!bucket) {
      return new Response("BUCKET binding missing", { status: 500 });
    }
    const list = await bucket.list({ prefix: "releases/latest/", limit: 10 });
    const keys = list.objects.map((o) => o.key);
    return new Response(JSON.stringify({ keys }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(String(e), { status: 500 });
  }
}
