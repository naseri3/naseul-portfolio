import heroLight from "../../assets/images/uiux/compose/[ui-pofol] compose-main-light.png";
import heroDark from "../../assets/images/uiux/compose/[ui-pofol] compose-main-dark.png";
import yveningHeroLight from "../../assets/images/uiux/yvening/[ui-pofo] yvning-main-light.png";
import yveningHeroDark from "../../assets/images/uiux/yvening/[ui-pofo] yvning-main-dark.png";
import herbalHeroLight from "../../assets/images/uiux/herbalFaceFood/[ui-pofo] herbal-main-light.png";
import herbalHeroDark from "../../assets/images/uiux/herbalFaceFood/[ui-pofo] herbal-main-dark.png";
import aptJobHeroLight from "../../assets/images/uiux/aptJob/[ui-pofo] aptJob-main-light.png";
import aptJobHeroDark from "../../assets/images/uiux/aptJob/[ui-pofo] aptJob-main-dark.png";
import todoHeroLight from "../../assets/images/uiux/todoList/[ui-pofo] todolist-main-light.png";
import todoHeroDark from "../../assets/images/uiux/todoList/[ui-pofo] todolist-main-dark.png";

export const composeDetail = {
  id: "compose", title: "Compose", category: "MOBILE APP · 2024",
  headline: "커피 메뉴 탐색부터 주문, 멤버십 혜택, 가까운 매장 찾기까지 한 번에 연결하다",
  description: "다양한 메뉴를 탐색하고 간편하게 주문하며, 멤버십 혜택과 포인트를 관리하고 주변 매장까지 손쉽게 찾을 수 있는 올인원 커피 앱을 설계했습니다.",
  heroLight, heroDark, logo: "compose-logo.png", contribution: "100%",
  tags: ["UX 설계", "UI 디자인", "프로토타입"],
  metadata: [
    { icon: "project", label: "프로젝트", value: "개인 프로젝트" },
    { icon: "period", label: "제작 기간", value: "약 2주" },
    { icon: "role", label: "역할", value: "UX/UI Designer" },
    { icon: "platform", label: "플랫폼", value: "Application" },
  ],
  problem: "기존 컴포즈 앱의 화면 구성과 주요 기능을 분석하고, 메뉴 탐색부터 주문, 멤버십, 매장 찾기까지의 흐름을 더 직관적으로 재구성하는 것을 목표로 했습니다.",
  solution: "핵심 기능의 정보 구조와 화면 위계를 정리하고, 사용자가 필요한 기능에 빠르게 접근할 수 있도록 모바일 주문 경험을 리디자인했습니다.",
  features: [
    { title: "간편한 메뉴 탐색과 주문", text: "카테고리와 추천 메뉴로 원하는 음료를 빠르게 찾고, 간편하게 주문할 수 있습니다.", image: "compose-feature-01.png" },
    { title: "멤버십 혜택", text: "스탬프 적립과 쿠폰, 포인트를 한눈에 확인하고 다양한 혜택을 누릴 수 있습니다.", image: "compose-feature-02.png" },
    { title: "빠른 가입과 개인화", text: "간편 가입으로 빠르게 시작하고, 개인 맞춤 추천과 최근 주문으로 더 편리하게 이용할 수 있습니다.", image: "compose-feature-03.png" },
    { title: "가까운 매장 찾기", text: "지도 기반으로 주변 매장을 쉽게 찾고, 운영시간과 길찾기까지 바로 확인합니다.", image: "compose-feature-04.png" },
  ],
  process: [
    { icon: "process-research", title: "리서치", text: "기존 앱의 메뉴 탐색, 주문, 멤버십과 매장 찾기 흐름을 살펴봤습니다." },
    { icon: "process-architecture", title: "정보구조", text: "주문과 멤버십, 매장 찾기를 주요 기능으로 구분하고 접근 경로를 정리했습니다." },
    { icon: "process-design", title: "UI 디자인", text: "브라운과 옐로 컬러로 브랜드를 표현하고, 메뉴와 주문 버튼이 구분되도록 디자인했습니다." },
    { icon: "process-prototype", title: "프로토타입", text: "메뉴 탐색과 주문, 멤버십 확인, 매장 찾기의 주요 화면을 연결했습니다." },
  ],
  designSystem: { colors: ["#361706", "#FEC303", "#F0F0F0", "#000000"], font: "Malgun Gothic", primary: "#361706", secondary: "#FEC303", icons: ["compose-icons-1.png", "compose-icons-2.png"] },
  // 실제 Figma 프로토타입 URL을 넣으면 하단 링크가 활성화됩니다.
  prototypeUrl: "https://www.figma.com/design/WL62J5bz5DKHoe0Ec3cUZk/compose?node-id=0-1&t=srnBABpIYbPk6Trl-1",
  next: { to: "/uiux/yvening", title: "Yvening" },
};

export const yveningDetail = {
  id: "yvening", title: "Yvening", category: "MOBILE COMMERCE · 2024",
  headline: "향수부터 스킨케어까지, 나를 위한 뷰티 경험을 한곳에",
  description: "페르몬 향수를 중심으로 세럼, 팩 등 다양한 여성 뷰티 제품을 탐색하고 비교·구매할 수 있도록 설계한 모바일 커머스 앱입니다.",
  heroLight: yveningHeroLight, heroDark: yveningHeroDark, logo: "yvening-logo.png", contribution: "100%",
  tags: ["UI 설계", "커머스 UX", "프로토타입"],
  metadata: [
    { icon: "project", label: "프로젝트", value: "개인 프로젝트" },
    { icon: "period", label: "제작 기간", value: "약 1주" },
    { icon: "role", label: "역할", value: "UX/UI Designer" },
    { icon: "platform", label: "플랫폼", value: "Application" },
  ],
  problem: "페르몬 향수와 세럼, 팩 등 다양한 뷰티 제품이 함께 제공되어 사용자가 자신의 목적에 맞는 상품을 빠르게 탐색하고 비교하기 어려울 수 있습니다. 상품 정보와 혜택, 구매 과정이 분산되면 브랜드의 다양한 제품군을 자연스럽게 경험하기 어렵습니다.",
  solution: "향수와 스킨케어 제품군을 목적과 카테고리 중심으로 재정리하고, 상품 탐색부터 상세 정보 확인, 장바구니와 구매까지의 흐름을 간결하게 설계했습니다. 멤버십 혜택과 커뮤니티 기능을 함께 연결해 제품 구매 이후에도 브랜드와 지속적으로 관계를 이어갈 수 있도록 구성했습니다.",
  features: [
    { title: "향수와 뷰티 제품을 한눈에", text: "페르몬 향수부터 세럼, 팩까지 카테고리별로 정리해 다양한 제품을 쉽게 둘러볼 수 있도록 구성했습니다.", image: "yvening-feature-01.png" },
    { title: "목적에 맞는 제품 탐색", text: "향, 피부 고민, 제품 유형 등 사용 목적에 따라 원하는 상품을 빠르게 찾고 비교할 수 있도록 설계했습니다.", image: "yvening-feature-02.png" },
    { title: "구매 과정을 더 간단하게", text: "상품 상세 정보 확인부터 옵션 선택, 장바구니, 결제까지 핵심 구매 흐름을 간결하게 정리했습니다.", image: "yvening-feature-03.png" },
    { title: "멤버십과 브랜드 경험을 한곳에", text: "등급별 혜택과 적립금, 이벤트, 커뮤니티 콘텐츠를 연결해 구매 이후에도 브랜드 경험이 이어지도록 구성했습니다.", image: "yvening-feature-04.png" },
  ],
  process: [
    { icon: "process-research", title: "리서치", text: "향수와 스킨케어 제품의 기존 분류와 상품 정보 구성을 살펴봤습니다." },
    { icon: "process-architecture", title: "정보구조", text: "제품 유형별 탐색부터 상세 정보 확인과 장바구니까지 구매 흐름을 정리했습니다." },
    { icon: "process-design", title: "UI 디자인", text: "보라색 계열로 브랜드 분위기를 표현하고, 상품 이미지와 가격을 쉽게 비교하도록 배치했습니다." },
    { icon: "process-prototype", title: "프로토타입", text: "상품 탐색부터 상세 확인과 장바구니까지 주요 구매 화면을 연결했습니다." },
  ],
  designSystem: { colors: ["#4C365C", "#8C7AC0", "#D9D9D9", "#151515"], font: "Noto Sans", primary: "#8C7AC0", secondary: "#FFFFFF", icons: ["yvening-icons-1.png", "yvening-icons-2.png"] },
  prototypeUrl: "https://www.figma.com/design/jacbxHFqS2tUa9y6iGlT17/YVNING?node-id=46-977&t=REiEDrfBZ6cqK2qn-1",
  next: { to: "/uiux/herbal-face-food", title: "Herbal Face Food" },
};

export const herbalFaceFoodDetail = {
  id: "herbal-face-food", assetFolder: "herbalFaceFood", title: "Herbal Face Food", category: "MOBILE COMMERCE · 2024",
  headline: "자연 유래 스킨케어를 더 쉽게 탐색하다",
  description: "제품 탐색부터 브랜드 소개, 구매, 회원 서비스까지 건강한 스킨케어 경험을 하나의 흐름으로 구성한 모바일 커머스 앱입니다.",
  heroLight: herbalHeroLight, heroDark: herbalHeroDark, logo: "herbalFaceFood-logo.png", contribution: "100%",
  tags: ["UX 설계", "UI 디자인", "브랜드 경험"],
  metadata: [
    { icon: "project", label: "프로젝트", value: "개인 프로젝트" },
    { icon: "period", label: "제작 기간", value: "약 1주" },
    { icon: "role", label: "역할", value: "UX/UI Designer" },
    { icon: "platform", label: "플랫폼", value: "Application" },
  ],
  problem: "스킨케어 제품을 찾는 사용자는 제품의 성분과 특징, 브랜드가 전달하는 가치, 구매 정보 등을 함께 확인해야 합니다. 하지만 제품 탐색, 브랜드 콘텐츠, 구매와 회원 서비스가 분리되어 있으면 원하는 정보를 찾고 다음 행동으로 이어가는 과정이 복잡해질 수 있습니다.",
  solution: "제품 카테고리와 브랜드 콘텐츠의 정보 구조를 정리해 사용자가 관심 있는 제품을 쉽게 탐색할 수 있도록 구성했습니다. 상품 상세 확인부터 장바구니, 구매, 이벤트와 리뷰, 회원 서비스까지의 흐름을 자연스럽게 연결해 일관된 모바일 커머스 경험을 설계했습니다.",
  features: [
    { title: "제품 탐색을 더 직관적으로", text: "카테고리와 제품 유형을 정리해 사용자가 원하는 스킨케어 제품을 빠르게 찾고 비교할 수 있도록 구성했습니다.", image: "herbalFaceFood-feature-01.jpg" },
    { title: "브랜드 스토리와 신뢰를 함께", text: "브랜드 소개와 제품 정보를 함께 보여주어, 제품의 특징과 브랜드가 추구하는 가치를 자연스럽게 이해할 수 있도록 했습니다.", image: "herbalFaceFood-feature-02.jpg" },
    { title: "구매 과정을 더 간단하게", text: "상품 상세 확인부터 옵션 선택, 장바구니, 결제까지 핵심 구매 흐름을 간결하게 정리했습니다.", image: "herbalFaceFood-feature-03.jpg" },
    { title: "회원 경험과 이벤트를 한곳에", text: "리뷰, 이벤트, 회원 혜택을 연결해 구매 이후에도 브랜드와 지속적으로 관계를 이어갈 수 있도록 구성했습니다.", image: "herbalFaceFood-feature-04.jpg" },
  ],
  process: [
    { icon: "process-research", title: "리서치", text: "기존 화면에서 제품 정보와 브랜드 소개가 어떻게 제공되는지 살펴봤습니다." },
    { icon: "process-architecture", title: "정보구조", text: "제품 탐색과 브랜드 소개를 구분하고, 구매와 회원 서비스로 이어지는 경로를 정리했습니다." },
    { icon: "process-design", title: "UI 디자인", text: "옐로와 크림 컬러로 밝은 분위기를 표현하고, 제품과 브랜드 콘텐츠가 구분되도록 구성했습니다." },
    { icon: "process-prototype", title: "프로토타입", text: "제품 목록과 상세, 장바구니를 연결하고 이벤트와 회원 서비스의 이동 흐름을 구성했습니다." },
  ],
  designSystem: { colors: ["#FFAE00", "#FFFAE7", "#5B5B5B", "#FFFFFF"], font: "Inter", primary: "#FFAE00", secondary: "#FFFFFF", secondaryText: "#888888", secondaryLabel: "서브 버튼 >", iconWidth: "120px", icons: ["herbal-icons-1.png"] },
  prototypeUrl: "https://www.figma.com/design/59gyeOjI53mvg9hxI2SCrW/Herbal-Face-Food?node-id=14-390&t=XM4aDbTOEICZdykk-1",
  next: { to: "/uiux/apt-job", title: "APT Job" },
};

export const aptJobDetail = {
  id: "apt-job", assetFolder: "aptJob", title: "APT Job", category: "WEB · MOBILE · 2026",
  headline: "아파트 채용의 모든 것, 쉽고 빠르게",
  description: "아파트 관리 분야의 채용 정보를 탐색하고, 이력서 작성부터 지원 현황 관리까지 한곳에서 진행할 수 있도록 설계한 채용 플랫폼입니다.",
  heroLight: aptJobHeroLight, heroDark: aptJobHeroDark, logo: "aptJob-logo.png", contribution: "100%",
  tags: ["정보구조 설계", "UI 디자인", "UX 설계"],
  metadata: [
    { icon: "project", label: "프로젝트", value: "실무 프로젝트 · UI/UX" },
    { icon: "period", label: "기간", value: "2026.02 - Present" },
    { icon: "role", label: "역할", value: "UX/UI Designer" },
    { icon: "platform", label: "플랫폼", value: "Web · Mobile" },
  ],
  problem: "아파트 관리 분야의 채용 정보는 여러 공고에 흩어져 있어, 사용자가 자신의 조건에 맞는 일자리를 빠르게 찾기 어렵습니다. 또한 공고 확인, 기업 정보 탐색, 이력서 작성, 지원 현황 관리가 분리되어 있으면 지원 과정 전체를 편리하게 관리하기 어렵습니다.",
  solution: "직무, 지역, 경력 등 다양한 조건으로 채용 공고를 탐색할 수 있도록 검색 구조를 정리했습니다. 공고와 기업 정보를 한 화면에서 확인하고, 이력서 작성부터 지원 완료 후 현황 관리까지 이어지는 흐름을 구성해 보다 간결한 채용 경험을 만들었습니다.",
  features: [
    { title: "조건에 맞는 채용공고 탐색", text: "직무, 지역, 경력, 급여 등 다양한 조건을 활용해 원하는 채용 공고를 빠르게 찾을 수 있도록 구성했습니다.", image: "aptJob-feature-01.png" },
    { title: "공고와 기업 정보를 한눈에", text: "상세 공고 내용과 기업 정보, 모집 조건을 함께 보여주어 지원 전 필요한 정보를 쉽게 확인할 수 있도록 했습니다.", image: "aptJob-feature-02.png" },
    { title: "이력서 작성부터 지원까지", text: "간편한 이력서 작성 흐름을 제공하고, 작성한 이력서를 선택해 원하는 공고에 바로 지원할 수 있도록 구성했습니다.", image: "aptJob-feature-03.png" },
    { title: "지원 공고와 지원 현황 관리", text: "마이페이지에서 지원한 공고와 진행 상태를 확인하고, 필요한 경우 지원 내역을 편리하게 관리할 수 있도록 했습니다.", image: "aptJob-feature-04.png" },
  ],
  process: [
    { icon: "process-research", title: "리서치", text: "채용공고 검색과 상세 확인, 이력서 작성과 지원 관리에 필요한 정보를 살펴봤습니다." },
    { icon: "process-architecture", title: "정보구조", text: "검색 조건과 공고 정보를 정리하고, 이력서 작성부터 지원 현황 확인까지 흐름을 구성했습니다." },
    { icon: "process-design", title: "UI 디자인", text: "공고의 핵심 조건을 구분하고, PC와 모바일에서 정보의 우선순위가 유지되도록 디자인했습니다." },
    { icon: "process-prototype", title: "프로토타입", text: "공고 탐색부터 상세 확인과 지원, 마이페이지의 지원 현황까지 주요 화면을 연결했습니다." },
  ],
  designSystem: { colors: ["#EBEFFF", "#0763F8", "#0A1C40", "#FFDFEA"], font: "Malgun Gothic", primary: "#0763F8", secondary: "#EBEFFF", icons: ["aptJob-icons-1.png", "aptJob-icons-2.png"] },
  prototypeUrl: "https://www.figma.com/design/wQjz9qj30C1NauuYduPvir/APT-Job?node-id=2-6306&t=B5myloQgpgSISo2v-1",
  next: { to: "/uiux/todo-list", title: "Todo List" },
};

export const todoListDetail = {
  id: "todo-list", assetFolder: "todoList", title: "Todo List", category: "MOBILE APP · 2026",
  headline: "할 일을 더 쉽게 정리하고, 하루를 더 가볍게",
  description: "매일 반복되는 할 일을 리스트로 관리하고, 중요도와 진행 상태, 폴더, 계정 정보를 한곳에서 정리할 수 있도록 설계한 모바일 할 일 관리 앱입니다.",
  heroLight: todoHeroLight, heroDark: todoHeroDark, logo: "todoList-logo.png", contribution: "100%",
  tags: ["프로토 타입", "UI 디자인", "UX 설계"],
  metadata: [
    { icon: "project", label: "프로젝트", value: "개인 프로젝트" },
    { icon: "period", label: "제작 기간", value: "약 3주" },
    { icon: "role", label: "역할", value: "UX/UI Designer" },
    { icon: "platform", label: "플랫폼", value: "Application" },
  ],
  problem: "일정과 할 일이 여러 곳에 흩어져 있으면 해야 할 일의 우선순위와 진행 상태를 한눈에 파악하기 어렵습니다. 또한 개인, 업무, 학업처럼 성격이 다른 할 일을 구분하고 관리할 수 있는 명확한 구조가 필요합니다.",
  solution: "리스트 중심의 화면 구조를 바탕으로 중요도와 진행 상태를 빠르게 확인할 수 있도록 구성했습니다. 폴더별 분류와 계정 관리 기능을 함께 제공해 사용자가 자신의 할 일 상황에 맞게 정리하고 관리할 수 있도록 설계했습니다.",
  features: [
    { title: "리스트로 할 일을 체계적으로", text: "반복되는 업무와 개인 일정을 리스트로 정리해, 해야 할 일을 빠르게 확인하고 관리할 수 있도록 구성했습니다.", image: "todoList-feature-01.png" },
    { title: "중요도와 진행 상태를 한눈에", text: "할 일의 중요도와 진행 상태를 시각적으로 구분해, 우선순위를 판단하고 현재 상태를 쉽게 파악할 수 있도록 했습니다.", image: "todoList-feature-02.png" },
    { title: "폴더 컬러로 빠르게 구분", text: "업무, 개인, 학업 등 성격이 다른 할 일을 폴더와 컬러로 분류해 필요한 목록을 빠르게 찾을 수 있도록 했습니다.", image: "todoList-feature-03.png" },
    { title: "계정과 데이터를 안전하게 관리", text: "프로필과 계정 정보를 관리하고, 회원 탈퇴와 같은 주요 설정도 명확하게 확인할 수 있도록 구성했습니다.", image: "todoList-feature-04.png" },
  ],
  process: [
    { icon: "process-research", title: "리서치", text: "할 일을 분류하고 관리하는 데 필요한 폴더, 중요도와 진행 상태 항목을 정리했습니다." },
    { icon: "process-architecture", title: "정보구조", text: "폴더 목록과 할 일 상세를 구분하고, 등록·수정과 상태 변경 경로를 설계했습니다." },
    { icon: "process-design", title: "UI 디자인", text: "폴더 컬러와 상태 표시를 구분해, 할 일의 분류와 진행 상황을 확인하도록 디자인했습니다." },
    { icon: "process-prototype", title: "프로토타입", text: "폴더 생성부터 할 일 등록과 수정, 완료 처리까지 주요 관리 흐름을 연결했습니다." },
  ],
  designSystem: { colors: ["#708BFF", "#EFF2FE", "#252525", "#FFFFFF"], font: "Inter", primary: "#708BFF", secondary: "#EFF2FE", icons: ["todoList-icons-1.png", "todoList-icons-2.png"] },
  prototypeUrl: "https://www.figma.com/design/1XBpCRdUGDz2Nx26TfKr6F/Todo-List?node-id=44-288&t=h6z9W23YY9jH8B5Y-1",
  next: { to: "/uiux/compose", title: "Compose" },
};

