import { getTranslations } from "next-intl/server";
import type { Release } from "@/lib/github";
import DownloadButton from "./DownloadButton";
import { Link } from "@/i18n/navigation";

export default async function FooterBand({ release }: { release: Release | null }) {
  const t = await getTranslations("Footer");

  return (
    <footer
      style={{ backgroundColor: "var(--primary)" }}
      className="px-6 py-16 md:px-12"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p
            style={{
              color: "var(--on-primary)",
              fontSize: "clamp(22px, 3vw, 35px)",
              fontWeight: 300,
              lineHeight: 1.25,
            }}
          >
            {t("cta")}
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "16px",
              marginTop: "8px",
            }}
          >
            {t("subtitle")}
          </p>
        </div>
        <DownloadButton />
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.2)",
          marginTop: "48px",
          paddingTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px" }}>
          {t("copyright")}
        </p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Link
            href="/code-signing-policy"
            style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", textDecoration: "none" }}
          >
            {t("codeSigningPolicy")}
          </Link>
          {release && (
            <a
              href={release.html_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", textDecoration: "none" }}
            >
              {t("releases")}
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
