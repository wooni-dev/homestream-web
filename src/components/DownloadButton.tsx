"use client";

import { useTranslations } from "next-intl";

export default function DownloadButton() {
  const t = useTranslations("DownloadButton");
  const href = "/api/download";
  const label = t("download");

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
      {label}
    </a>
  );
}
