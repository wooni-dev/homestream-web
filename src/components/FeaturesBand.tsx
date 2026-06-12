const features = [
  {
    icon: "📡",
    title: "Wi-Fi만 있으면 OK",
    desc: "같은 네트워크에 연결된 모든 기기의 브라우저에서 바로 접속.",
  },
  {
    icon: "📱",
    title: "앱 설치 없음",
    desc: "스마트폰 기본 브라우저에서 URL 하나로 바로 재생.",
  },
  {
    icon: "🎬",
    title: "로컬 파일 스트리밍",
    desc: "PC에 저장된 영상 파일을 그대로 스트리밍. 업로드 불필요.",
  },
  {
    icon: "⚡",
    title: "단일 실행파일",
    desc: "설치 과정 없음. exe 실행 한 번으로 서버 시작.",
  },
];

export default function FeaturesBand() {
  return (
    <section
      style={{ backgroundColor: "var(--canvas-light)" }}
      className="px-6 py-24 md:px-12"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          style={{
            color: "var(--ink)",
            fontSize: "clamp(28px, 3vw, 44px)",
            fontWeight: 300,
            lineHeight: 1.25,
            letterSpacing: "0.1px",
          }}
          className="mb-16"
        >
          왜 HomeStream인가
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                backgroundColor: "var(--surface-card)",
                borderRadius: "8px",
                padding: "32px",
              }}
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3
                style={{
                  color: "var(--ink)",
                  fontSize: "18px",
                  fontWeight: 600,
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  color: "var(--body-light)",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: 1.5,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
