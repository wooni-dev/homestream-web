const REPO = "wooni-dev/homestream";
export const RELEASES_URL = `https://github.com/${REPO}/releases`;

export type Release = {
  tag_name: string;
  name: string;
  html_url: string;
  assets: { name: string; browser_download_url: string; size: number }[];
  published_at: string;
};

export async function getLatestRelease(): Promise<Release | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${REPO}/releases/latest`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export function getExeAsset(release: Release) {
  return release.assets.find((a) => a.name.endsWith(".exe")) ?? null;
}
