export async function onRequest() {
  const res = await fetch(
    "https://api.github.com/repos/wooni-dev/homestream/releases/latest",
    {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "homestream-web",
      },
    }
  );

  if (!res.ok) {
    return new Response("Release not found", { status: 404 });
  }

  const release = await res.json();
  const asset = release.assets?.find((a) => a.name.endsWith(".exe"));

  if (!asset) {
    return new Response("No Windows release found", { status: 404 });
  }

  return Response.redirect(asset.browser_download_url, 302);
}
