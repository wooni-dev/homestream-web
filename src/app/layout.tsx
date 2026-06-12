import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

const BASE_URL = "https://homestream.wooni.dev";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "HomeStream — PC 영상을 폰으로 바로 스트리밍",
  description:
    "같은 Wi-Fi에 연결된 스마트폰 브라우저에서 PC의 영상을 바로 스트리밍하세요. 별도 앱 설치 없이, 단일 실행파일(.exe)로 바로 시작.",
  keywords: ["홈스트림", "로컬 스트리밍", "PC 영상", "Wi-Fi", "스마트폰", "HomeStream"],
  openGraph: {
    title: "HomeStream — PC 영상을 폰으로 바로 스트리밍",
    description:
      "같은 Wi-Fi에 연결된 스마트폰 브라우저에서 PC의 영상을 바로 스트리밍하세요. 별도 앱 설치 없이, 단일 실행파일로 시작.",
    url: BASE_URL,
    siteName: "HomeStream",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "HomeStream — PC 영상을 폰으로 바로 스트리밍",
    description:
      "같은 Wi-Fi에 연결된 스마트폰 브라우저에서 PC의 영상을 바로 스트리밍하세요.",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={roboto.variable}>{children}</body>
    </html>
  );
}
