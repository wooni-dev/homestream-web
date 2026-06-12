const steps = [
  { num: "01", title: "exe 실행", desc: "다운로드한 HomeStream.exe를 실행합니다." },
  { num: "02", title: "QR 코드 스캔", desc: "화면에 표시된 QR 코드를 스마트폰으로 스캔합니다." },
  { num: "03", title: "영상 선택 후 재생", desc: "브라우저가 열리면 원하는 영상 파일을 선택하여 바로 재생." },
];

export default function HowItWorksBand() {
  return (
    <section
      style={{ backgroundColor: "var(--surface-dark-elevated)" }}
      className="px-6 py-24 md:px-12"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          style={{
            color: "var(--on-dark)",
            fontSize: "clamp(28px, 3vw, 44px)",
            fontWeight: 300,
            lineHeight: 1.25,
            letterSpacing: "0.1px",
          }}
          className="mb-16"
        >
          시작하는 법
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {steps.map((s, i) => (
            <div key={s.num} className="flex-1 flex gap-6">
              <div>
                <span
                  style={{
                    color: "var(--primary)",
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                  }}
                >
                  {s.num}
                </span>
                {i < steps.length - 1 && (
                  <div
                    style={{
                      width: "1px",
                      height: "100%",
                      backgroundColor: "var(--hairline-dark)",
                      margin: "8px auto 0",
                    }}
                  />
                )}
              </div>
              <div>
                <h3
                  style={{
                    color: "var(--on-dark)",
                    fontSize: "18px",
                    fontWeight: 600,
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    color: "var(--body-dark)",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: 1.5,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
