import { getLatestRelease } from "@/lib/github";
import HeroBand from "@/components/HeroBand";
import FeaturesBand from "@/components/FeaturesBand";
import HowItWorksBand from "@/components/HowItWorksBand";
import FooterBand from "@/components/FooterBand";

export const revalidate = 3600; // GitHub Releases 1시간마다 재검증

export default async function Home() {
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
