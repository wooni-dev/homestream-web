import { getTranslations } from "next-intl/server";

type FeatureItem = { icon: string; title: string; desc: string };

export default async function FeaturesBand() {
  const t = await getTranslations("Features");
  const items = t.raw("items") as FeatureItem[];

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
          {t("heading")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((f) => (
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
