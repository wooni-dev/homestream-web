# homestream-web 인계 문서

## 현재 상황

### 완료된 작업
- GitHub 릴리즈 `v1.0.0` 생성 완료 (`stream_server.exe` 11.23MB 첨부)
- URL: https://github.com/wooni-dev/homestream/releases/tag/v1.0.0
- Vercel 재배포 트리거 완료

### 문제
`wooni-dev/homestream` 레포가 **Private**이라 GitHub API 인증 필요.
`src/lib/github.ts` fetch에 Authorization 헤더가 없어 릴리즈를 못 가져옴.
→ 웹사이트 버튼이 "GitHub에서 다운로드" (fallback) 상태.

---

## 해야 할 작업

### Step 1 — `src/lib/github.ts` 수정

```ts
// 변경 전
headers: { Accept: "application/vnd.github+json" },

// 변경 후
headers: {
  Accept: "application/vnd.github+json",
  ...(process.env.GITHUB_TOKEN && {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  }),
},
```

토큰은 서버사이드(`process.env`)에서만 사용되므로 브라우저에 노출되지 않음.

### Step 2 — GitHub Fine-grained Token 발급 (사용자 직접)
1. https://github.com/settings/tokens 접속
2. Fine-grained token 생성
   - Repository: `wooni-dev/homestream`
   - Permission: `Contents` → Read-only
3. 발급된 토큰 복사

### Step 3 — Vercel 환경변수 추가 (사용자 직접)
1. Vercel 대시보드 → `homestream-web` 프로젝트 → Settings → Environment Variables
2. `GITHUB_TOKEN` = (발급한 토큰값) 추가
3. Redeploy

### 완료 기준
https://homestream-web.vercel.app/ 버튼이 **"다운로드 (11.2 MB)"** 로 표시되면 완료.

---

## 파일 구조 참고

```
src/
├── app/
│   ├── layout.tsx       # SEO 메타데이터 (OG, Twitter, canonical)
│   ├── page.tsx         # 메인 페이지 (ISR revalidate: 3600)
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── DownloadButton.tsx
│   ├── HeroBand.tsx
│   ├── FeaturesBand.tsx
│   ├── HowItWorksBand.tsx
│   └── FooterBand.tsx
└── lib/
    └── github.ts        # ← 수정 대상
```
