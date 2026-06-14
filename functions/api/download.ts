/// <reference types="@cloudflare/workers-types" />

interface Env {
  BUCKET: R2Bucket;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const object = await context.env.BUCKET.get("releases/latest/windows/HomeStream.exe");

  if (!object) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(object.body, {
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Disposition": 'attachment; filename="HomeStream.exe"',
      "Content-Length": object.size.toString(),
    },
  });
};
