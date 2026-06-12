import { getTranslations } from "next-intl/server";
import type { Release } from "@/lib/github";
import { getExeAsset } from "@/lib/github";
import DownloadButton from "./DownloadButton";


export default async function HeroBand({ release }: { release: Release | null }) {
  const t = await getTranslations("Hero");
  const asset = release ? getExeAsset(release) : null;

  return (
    <section
      style={{ backgroundColor: "var(--canvas-dark)" }}
      className="min-h-screen flex flex-col justify-center px-6 py-24 md:px-12"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="max-w-xl">
          <p
            style={{ color: "var(--primary)", fontSize: "14px", fontWeight: 700, letterSpacing: "0.1em" }}
            className="uppercase mb-4"
          >
            {t("badge")}
          </p>
          <h1
            style={{
              color: "var(--on-dark)",
              fontSize: "clamp(32px, 5vw, 54px)",
              fontWeight: 300,
              lineHeight: 1.25,
              letterSpacing: "-0.1px",
              whiteSpace: "pre-line",
            }}
            className="mb-6"
          >
            {t("title")}
          </h1>
          <p
            style={{
              color: "var(--body-dark)",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: 1.5,
              whiteSpace: "pre-line",
            }}
            className="mb-10"
          >
            {t("description")}
          </p>

          <DownloadButton release={release} asset={asset} />

          {release && (
            <p
              style={{ color: "var(--body-dark)", fontSize: "14px" }}
              className="mt-4"
            >
              {t("version", { version: release.tag_name })}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
