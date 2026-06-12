# homestream-web

## 프로젝트 배경

`homestream`은 같은 Wi-Fi에 연결된 휴대폰 브라우저에서 PC 영상을 스트리밍할 수 있는 로컬 서버 앱입니다.
Python + Tkinter로 만든 단일 실행파일(`.exe`)로 배포되며, 소스 코드는 별도 저장소(`d:\projects\tv`)에 있습니다.

이 프로젝트(`homestream-web`)는 그 실행파일을 일반 사용자가 다운로드할 수 있는 **웹사이트**입니다.

## 목표

- 실행파일 다운로드 링크 제공 (GitHub Releases 연동)
- SEO 최적화 — 검색엔진에서 잘 노출되어야 함
- 서비스 품질을 고려한 빠른 로딩, 안정적인 배포

## 기술 스택 결정

| 항목 | 선택 | 이유 |
|------|------|------|
| 프레임워크 | Next.js | SSG/SSR로 SEO 대응, 메타태그·OG·sitemap 관리 용이 |
| 배포 | Vercel | 엣지 CDN, 빠른 TTFB, push 시 자동 배포, 확장 가능 |
| 저장소 | 별도 (`homestream-web`) | 앱 코드와 분리, Vercel 루트 디렉토리 연동 간편 |

GitHub Pages는 포트폴리오 용도로 이미 사용 중이라 제외했습니다.

## 다운로드 파일 관리

실행파일은 `homestream` 앱 저장소의 **GitHub Releases**에 업로드됩니다.
이 웹사이트는 해당 Releases 링크를 연결하는 방식으로 운영합니다.
