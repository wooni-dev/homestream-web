import { setRequestLocale } from "next-intl/server";
import { getLatestRelease } from "@/lib/github";
import HeroBand from "@/components/HeroBand";
import FeaturesBand from "@/components/FeaturesBand";
import HowItWorksBand from "@/components/HowItWorksBand";
import FooterBand from "@/components/FooterBand";

export const revalidate = 3600;

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const release = await getLatestRelease();

  return (
    <main>
      <HeroBand release={release} />
      <FeaturesBand />
      <HowItWorksBand />
      <FooterBand release={release} />
    </main>
  );
}
