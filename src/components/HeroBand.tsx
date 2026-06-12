import type { Release } from "@/lib/github";
import { getExeAsset } from "@/lib/github";
import DownloadButton from "./DownloadButton";

export default function HeroBand({ release }: { release: Release | null }) {
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
            HomeStream
          </p>
          <h1
            style={{
              color: "var(--on-dark)",
              fontSize: "clamp(32px, 5vw, 54px)",
              fontWeight: 300,
              lineHeight: 1.25,
              letterSpacing: "-0.1px",
            }}
            className="mb-6"
          >
            PC 영상을<br />
            폰으로 바로 스트리밍
          </h1>
          <p
            style={{
              color: "var(--body-dark)",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: 1.5,
            }}
            className="mb-10"
          >
            같은 Wi-Fi에 연결된 스마트폰 브라우저에서<br />
            PC의 영상 파일을 바로 재생하세요.<br />
            별도 앱 설치 없이, 단일 실행파일로 시작.
          </p>

          <DownloadButton release={release} asset={asset} />

          {release && (
            <p
              style={{ color: "var(--body-dark)", fontSize: "14px" }}
              className="mt-4"
            >
              최신 버전: {release.tag_name} &nbsp;·&nbsp; Windows
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
