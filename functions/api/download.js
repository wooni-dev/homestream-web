const CANDIDATE_PATHS = [
  "releases/latest/windows/HomeStream.exe",
  "releases/latest/stream_server.exe",
];

export async function onRequest(context) {
  let object = null;
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
      "Content-Length": String(object.size),
    },
  });
}
