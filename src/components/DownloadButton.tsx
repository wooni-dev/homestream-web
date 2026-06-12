"use client";

import type { Release } from "@/lib/github";

type Asset = { name: string; browser_download_url: string; size: number } | null;

export default function DownloadButton({
  release,
  asset,
}: {
  release: Release | null;
  asset: Asset;
}) {
  const href = asset?.browser_download_url ?? release?.html_url ?? "#";
  const sizeMB = asset ? (asset.size / 1024 / 1024).toFixed(1) : null;

  return (
    <a
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        backgroundColor: "var(--primary)",
        color: "var(--on-primary)",
        fontSize: "18px",
        fontWeight: 700,
        letterSpacing: "0.45px",
        padding: "12px 28px",
        borderRadius: "9999px",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
          "var(--primary-pressed)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
          "var(--primary)";
      }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 13L6 9h3V3h2v6h3l-4 4zM3 15h14v2H3v-2z"
          fill="currentColor"
        />
      </svg>
      {release ? `다운로드${sizeMB ? ` (${sizeMB} MB)` : ""}` : "GitHub에서 다운로드"}
    </a>
  );
}
