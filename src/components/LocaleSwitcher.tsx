"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggle = () => {
    router.replace(pathname, { locale: locale === "ko" ? "en" : "ko" });
  };

  return (
    <button
      onClick={toggle}
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 50,
        backgroundColor: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: "9999px",
        padding: "6px 14px",
        fontSize: "13px",
        fontWeight: 600,
        letterSpacing: "0.05em",
        color: "#ffffff",
        cursor: "pointer",
        transition: "background-color 0.15s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor =
          "rgba(255,255,255,0.2)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor =
          "rgba(255,255,255,0.1)";
      }}
    >
      {locale === "ko" ? "EN" : "한국어"}
    </button>
  );
}
