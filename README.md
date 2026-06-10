# HDC AI Portfolio Site

HDC AI 과정 프로젝트를 근거형으로 정리한 포트폴리오 웹사이트

배포 주소: https://dpgns9983-dot.github.io/

## 구성

- 학습 흐름
- 대표 프로젝트 2개
- 미니 프로젝트 4개
- 프로젝트별 문제, 역할, 구현 내용, 결과물 정리
- GitHub / Notion / PDF / Email 연결 영역

## 포트폴리오 방향

작성 방향: `AI 서비스 개발자 지망생`

중심 메시지

- 데이터와 AI 기능을 사용자가 이해할 수 있는 서비스 흐름으로 연결
- Smart Mirror: PC1 화면 흐름, AI 코칭 결과 표시, 목데이터 기반 UI 검증
- 서울 범죄 대시보드: 공공데이터 전처리, 핫스팟-자치구 매핑, SQLite/ORM, Streamlit 대시보드

프로젝트 설명 구성

- 해결하려 한 문제
- 내가 맡은 역할
- 실제 구현 내용
- 대표 결과물
- 확인 가능한 코드, 노트북, DB, 화면 근거
- 다음 프로젝트에 가져갈 배운 점

## 프로젝트 목록

1. 서울 범죄 통계 대시보드
2. Smart Mirror AIoT
3. 미세먼지와 서울 야외활동 분석
4. 호텔 프로젝트
5. 구독관리 에이전트
6. 커피 원두 품질/로스팅 판별

## 표현 점검 메모

- 담당 범위와 협업 범위 구분
- 테스트 데이터 기준 결과와 실제 서비스 적용 범위 구분
- 원본 강의자료, 개인정보, API 키, 대용량 원천 데이터 공개 제외
- 로컬 절대경로와 민감 파일명 공개 화면 노출 제외

## 로컬 실행

```powershell
npm install
npm run dev
```

## 빌드

```powershell
npm run build
```

## GitHub Pages 배포

`main` 브랜치 push 시 GitHub Actions 자동 배포

GitHub repository `Settings > Pages` Source: `GitHub Actions`

## 공개 전 확인

- PDF 링크와 이메일을 실제 정보로 교체
- API 키, 개인정보, 강의 원본 자료 포함 여부 확인
- 프로젝트 이미지의 공개 가능 여부 확인
- 원본 프로젝트의 대용량 데이터와 민감 파일 직접 업로드 제외
