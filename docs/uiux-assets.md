# UI/UX 포트폴리오 이미지 파일 안내

아래 경로는 naseul-portfolio 프로젝트 기준입니다. 파일명은 영문 소문자와 하이픈을 그대로 사용해 주세요.

## 공통 아이콘

저장 폴더: `src/assets/icons/uiux/`

| 파일명 | 사용 위치 | 권장 PNG 크기 |
| --- | --- | --- |
| project.png | 프로젝트 유형 | 48 × 48 |
| period.png | 제작 기간 | 48 × 48 |
| role.png | 역할 | 48 × 48 |
| platform.png | 플랫폼 | 48 × 48 |
| problem.png | PROBLEM | 80 × 80 |
| solution.png | SOLUTION | 80 × 80 |
| process-research.png | 리서치 | 160 × 160 |
| process-architecture.png | 정보구조 | 160 × 160 |
| process-design.png | UI 디자인 | 160 × 160 |
| process-prototype.png | 프로토타입 | 160 × 160 |

투명 배경 PNG로 제작해 주세요. 기본 색상은 회색(#666666)을 권장합니다. 문제·해결 및 디자인 과정 아이콘의 바깥 원과 배경은 SCSS에서 만들므로 이미지에는 아이콘만 넣어 주세요. 상단 메타정보 아이콘은 다크 모드에서 흰색으로 자동 전환됩니다. 파일 추가 후 개발 서버가 다시 빌드하면 자동으로 반영됩니다. 파일이 없으면 기존 공통 SVG 아이콘을 임시로 사용합니다.

## 컴포즈 전용 이미지

저장 폴더: `src/assets/images/uiux/compose/`

| 파일명 | 내용 | 권장 기준 |
| --- | --- | --- |
| compose-logo.png | 컴포즈 앱/브랜드 로고 | 180 × 180 정사각형 |
| compose-feature-01.png | 메뉴 탐색 및 주문 화면 | 세로형 화면, 가로 300px 이상 |
| compose-feature-02.png | 멤버십 화면 | 세로형 화면, 가로 300px 이상 |
| compose-feature-03.png | 가입 및 개인화 화면 | 세로형 화면, 가로 300px 이상 |
| compose-feature-04.png | 주변 매장 지도 화면 | 세로형 화면, 가로 300px 이상 |
| compose-system-icons.png | DESIGN SYSTEM의 앱 아이콘 모음 | 투명 배경, 약 660 × 360 |

기능별 화면은 카드 오른쪽에 배치하며 카드 경계에서 아래쪽이 잘립니다. 중요한 화면 내용은 이미지 위쪽에 배치해 주세요.

이미 연결한 상단 이미지는 그대로 유지합니다.
- `[ui-pofol] compose-main-light.png`
- `[ui-pofol] compose-main-dark.png`

Figma 로고는 기존 `src/assets/icons/skills/figma.png`를 재사용합니다.

## 공통 구현 구조

- `src/components/UiuxProjectLayout.jsx`: 모든 UI/UX 상세 페이지에서 사용하는 공통 레이아웃
- `src/data/styles/pages/_uiux-detail.scss`: 상세 페이지 공통 SCSS 및 라이트·다크·반응형 스타일
- `src/data/uiuxDetails.js`: 컴포즈 제목, 본문, 메타정보, 기능, 디자인 과정, 색상, 버튼 및 다음 프로젝트 링크
- `src/pages/uiux/UiuxPage.jsx`: 목록 및 프로젝트별 데이터 선택

다른 프로젝트도 같은 형태의 데이터 객체를 전달하면 동일한 섹션을 사용할 수 있습니다. 데이터가 아직 없는 섹션은 숨겨지며, 내용을 임의로 채우지 않습니다. 프로젝트 색상은 designSystem에서 지정합니다.

`prototypeUrl`에 실제 Figma 공유 URL을 입력하면 하단 프로토타입 링크가 활성화됩니다. URL을 입력하기 전에는 ‘링크 준비 중’으로 표시합니다.
