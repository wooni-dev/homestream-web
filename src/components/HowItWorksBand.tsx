import { getTranslations } from "next-intl/server";

type Step = { num: string; title: string; desc: string };

export default async function HowItWorksBand() {
  const t = await getTranslations("HowItWorks");
  const steps = t.raw("steps") as Step[];

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
          {t("heading")}
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
