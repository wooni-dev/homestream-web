/// <reference types="@cloudflare/workers-types" />

interface Env {
  BUCKET: R2Bucket;
}

const CANDIDATE_PATHS = [
  "releases/latest/windows/HomeStream.exe",
  "releases/latest/stream_server.exe",
];

export const onRequest: PagesFunction<Env> = async (context) => {
  let object: R2ObjectBody | null = null;
  for (const path of CANDIDATE_PATHS) {
    object = await context.env.BUCKET.get(path);
    if (object) break;
  }

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
