import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function CodeSigningPolicy({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isKo = locale === "ko";

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--surface)",
        color: "var(--on-surface)",
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <Link
          href="/"
          style={{
            fontSize: "14px",
            color: "var(--primary)",
            textDecoration: "none",
            display: "inline-block",
            marginBottom: "40px",
          }}
        >
          ← HomeStream
        </Link>

        <h1
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 300,
            marginBottom: "40px",
            lineHeight: 1.2,
          }}
        >
          {isKo ? "코드 사이닝 정책" : "Code Signing Policy"}
        </h1>

        <section style={{ marginBottom: "40px" }}>
          <p style={{ fontSize: "15px", lineHeight: 1.8, opacity: 0.85 }}>
            {isKo
              ? "HomeStream의 Windows 실행파일(.exe)은 SignPath Foundation이 제공하는 무료 코드 사이닝 서비스를 통해 서명됩니다."
              : "The HomeStream Windows executable (.exe) is signed using the free code signing service provided by SignPath Foundation."}
          </p>
          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.8,
              opacity: 0.6,
              marginTop: "12px",
            }}
          >
            Free code signing provided by{" "}
            <a
              href="https://signpath.io"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--primary)" }}
            >
              SignPath.io
            </a>
            , certificate by{" "}
            <a
              href="https://signpath.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--primary)" }}
            >
              SignPath Foundation
            </a>
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "18px",
              fontWeight: 500,
              marginBottom: "16px",
            }}
          >
            {isKo ? "팀 구성" : "Team Roles"}
          </h2>
          <table
            style={{
              width: "100%",
              fontSize: "14px",
              borderCollapse: "collapse",
              lineHeight: 1.8,
            }}
          >
            <tbody>
              {[
                {
                  role: isKo ? "개발자 / 리뷰어" : "Authors / Reviewers",
                  member: "wooni-dev",
                  link: "https://github.com/wooni-dev",
                },
                {
                  role: isKo ? "릴리즈 승인자" : "Approvers",
                  member: "wooni-dev",
                  link: "https://github.com/wooni-dev",
                },
              ].map(({ role, member, link }) => (
                <tr
                  key={role}
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <td
                    style={{
                      padding: "12px 0",
                      opacity: 0.6,
                      width: "180px",
                    }}
                  >
                    {role}
                  </td>
                  <td style={{ padding: "12px 0" }}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--primary)" }}
                    >
                      {member}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "18px",
              fontWeight: 500,
              marginBottom: "16px",
            }}
          >
            {isKo ? "소스코드" : "Source Code"}
          </h2>
          <p style={{ fontSize: "14px", lineHeight: 1.8, opacity: 0.85 }}>
            {isKo
              ? "HomeStream은 MIT 라이선스 오픈소스 프로젝트입니다. 소스코드와 빌드 스크립트는 아래 저장소에서 확인할 수 있습니다."
              : "HomeStream is an open source project licensed under the MIT License. Source code and build scripts are available at the repository below."}
          </p>
          <a
            href="https://github.com/wooni-dev/homestream"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "12px",
              fontSize: "14px",
              color: "var(--primary)",
            }}
          >
            github.com/wooni-dev/homestream ↗
          </a>
        </section>

        <section>
          <h2
            style={{
              fontSize: "18px",
              fontWeight: 500,
              marginBottom: "16px",
            }}
          >
            {isKo ? "개인정보 처리방침" : "Privacy Policy"}
          </h2>
          <p style={{ fontSize: "14px", lineHeight: 1.8, opacity: 0.85 }}>
            {isKo
              ? "HomeStream은 사용자가 명시적으로 요청하지 않는 한 어떠한 정보도 외부 네트워크 시스템으로 전송하지 않습니다. 모든 스트리밍은 로컬 Wi-Fi 내에서만 이루어지며, 인터넷 연결이 필요하지 않습니다."
              : "This program will not transfer any information to other networked systems unless specifically requested by the user or the person installing or operating it. All streaming occurs within the local Wi-Fi network only and does not require an internet connection."}
          </p>
        </section>
      </div>
    </main>
  );
}
