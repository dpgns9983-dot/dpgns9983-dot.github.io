import React, { useMemo, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  BookOpen,
  BrainCircuit,
  CalendarDays,
  Code2,
  Coffee,
  Database,
  FileText,
  Github,
  Hotel,
  Mail,
  MapPinned,
  MonitorSmartphone,
  NotebookText,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const notionUrl = "https://app.notion.com/p/373072f1778b811384a0e164f79b91ab";
const githubUrl = "https://github.com/dpgns9983-dot";
const portfolioRepoUrl = "https://github.com/dpgns9983-dot/dpgns9983-dot.github.io";

const links = [
  { label: "Notion", value: "포트폴리오 v2", icon: NotebookText, href: notionUrl },
  { label: "GitHub", value: "dpgns9983-dot", icon: Github, href: githubUrl },
  { label: "Site Repo", value: "portfolio site", icon: Code2, href: portfolioRepoUrl },
  { label: "PDF", value: "작성 예정", icon: FileText, href: "#contact", pending: true },
  { label: "Email", value: "작성 예정", icon: Mail, href: "#contact", pending: true },
];

const careerCards = [
  {
    title: "HDC AI 과정",
    period: "2026",
    body: "Python 기초부터 데이터 분석, DB, ML/DL, Agent/RAG, 서비스 개발까지 이어지는 실무형 학습 흐름",
    icon: BookOpen,
  },
  {
    title: "데이터 분석 기반",
    period: "Python / pandas / SQL",
    body: "공공데이터와 운영 데이터 수집, 정제, 병합, 대시보드와 노트북 결과물 정리",
    icon: BarChart3,
  },
  {
    title: "AI 서비스 연결",
    period: "Agent / RAG / Frontend",
    body: "모델 실험에서 끝나지 않는 AI 기능, 사용자가 따라갈 수 있는 화면 흐름과 서비스 시나리오 연결",
    icon: BrainCircuit,
  },
  {
    title: "최종 프로젝트",
    period: "진행 전",
    body: "진행 전 placeholder, 완성 후 대표 프로젝트 1순위 교체 예정",
    icon: CalendarDays,
  },
];

const projects = [
  {
    id: "seoul-crime",
    title: "서울 범죄 통계 대시보드",
    label: "대표 프로젝트 1",
    type: "Data Dashboard",
    period: "2026",
    role: "요일별 데이터 전처리, week 화면 구성, 매핑 테이블 연결",
    outcome: "공공 범죄 데이터를 기준이 맞는 탐색형 대시보드 흐름으로 정리",
    situation: "서울 범죄 통계 공공데이터 기반 지역, 유형, 요일별 흐름 탐색 대시보드 프로젝트",
    problem: "원본 데이터 기준과 표현 방식 불일치, 단순 표 중심 결과로는 요일별 흐름 설명 어려움",
    action: "요일별 데이터 구조 정리, 기준 연결용 매핑 테이블 구성, week 화면 탐색 흐름 설계",
    result: "범죄 유형과 요일 흐름을 사용자가 직접 탐색 가능한 대시보드 결과물로 정리",
    artifacts: "전처리 코드, 매핑 테이블, week 테이블, Streamlit 대시보드 화면, 발표자료",
    lesson: "차트 개수보다 데이터 기준 정렬과 사용자 질문 흐름 설계의 중요성 확인",
    boundary: "별도 경찰/범죄 데이터 분석 프로젝트가 아닌 서울 범죄 통계 대시보드 내부 작업",
    interviewLine: "기준 불일치 공공데이터 정리, 요일별 탐색 흐름 설계, Streamlit 대시보드 구현",
    stack: ["Python", "pandas", "SQL", "Streamlit"],
    asset: "assets/seoul-crime-dashboard.png",
    accent: "red",
    icon: ShieldCheck,
  },
  {
    id: "smart-mirror",
    title: "Smart Mirror AIoT",
    label: "대표 프로젝트 2",
    type: "AIoT Frontend",
    period: "2026",
    role: "React/Tauri 기반 PC1 프론트엔드와 사용자 운동 흐름 구성",
    outcome: "프로필 선택부터 기준 촬영, 운동 세션, 결과 확인까지 이어지는 PC1 서비스 흐름",
    situation: "PC1 화면, PC3 자세 분석 서버, PC2 RAG 코칭 서버로 역할이 나뉜 Smart Mirror AIoT 팀 프로젝트",
    problem: "기능 분산으로 인한 사용자 흐름 불명확, 거울 앞 사용 순서가 보이지 않는 단순 기능 모음 위험",
    action: "프로필 선택, 기본 정보 입력, 기준 촬영, 루틴 확인, 운동 세션, 결과 확인, 히스토리 확인 7단계 화면 흐름 구성",
    result: "프로필, 기준 촬영, 운동 분석, 결과 코칭을 하나의 PC1 Smart Mirror 서비스 흐름으로 연결",
    artifacts: "PC1 UI, React/Tauri 화면 흐름, AppContext 상태 관리 구조, 카메라 입력 화면, WebSocket 피드백 화면, 구조도와 발표자료",
    lesson: "프론트엔드의 역할을 화면 제작이 아닌 서버 데이터와 사용자 행동을 잇는 서비스 순서 설계로 이해",
    boundary: "직접 수행 범위는 PC1 프론트엔드 중심, 자세 분석 서버와 RAG 서버 전체 단독 구현 아님",
    interviewLine: "React/Tauri 기반 PC1 프론트엔드 담당, 프로필 선택부터 기준 촬영, 운동 세션, 결과 확인까지 서비스 흐름 연결",
    stack: ["React", "Tauri", "TypeScript", "WebSocket"],
    asset: null,
    accent: "cyan",
    icon: MonitorSmartphone,
  },
  {
    id: "air-quality",
    title: "미세먼지와 서울 야외활동 분석",
    label: "미니 프로젝트 1",
    type: "Public Data Analysis",
    period: "2026",
    role: "미세먼지, 기온, 한강공원, 따릉이, 이비인후과 데이터 병합과 시각화",
    outcome: "서로 다른 공공데이터를 월/날짜 기준으로 맞춰 상관관계를 탐색",
    situation: "서울 미세먼지, 기온, 한강공원, 따릉이, 이비인후과 데이터 기반 야외활동·건강 지표 탐색",
    problem: "출처별 날짜 단위, 월 기준, 컬럼명 차이로 인한 병합과 비교 어려움",
    action: "날짜와 월 기준 데이터 정리, 야외활동 지표와 건강 관련 지표 병합, 시각화와 상관관계 분석",
    result: "미세먼지 외 기온 등 다른 요인이 야외활동 지표에 함께 작용할 가능성 확인",
    artifacts: "Jupyter Notebook, 병합 데이터, 시각화 결과, 상관관계 분석표, 발표자료",
    lesson: "공공데이터 분석에서 모델보다 선행되는 기준 통일과 해석 가능성 확보의 중요성 확인",
    boundary: "인과관계 증명이 아닌 공공데이터 기반 상관관계 분석",
    interviewLine: "여러 공공데이터의 날짜 기준 병합, 미세먼지와 야외활동·건강 지표 관계의 상관관계 분석",
    stack: ["Python", "pandas", "Visualization"],
    asset: null,
    accent: "green",
    icon: Activity,
  },
  {
    id: "hotel",
    title: "호텔 프로젝트",
    label: "미니 프로젝트 2",
    type: "DB Modeling",
    period: "2026",
    role: "고객, 객실, 예약 구조 분리와 SQLite/SQLAlchemy 기반 구현",
    outcome: "호텔 예약 흐름을 테이블 구조와 노트북 코드로 정리",
    situation: "호텔 예약과 운영 흐름을 데이터베이스 구조로 표현하는 학습용 미니 프로젝트",
    problem: "고객, 객실, 예약 정보를 어떤 테이블로 나누고 어떻게 연결할지에 대한 초기 설계 필요",
    action: "고객, 객실, 예약 정보 분리, 테이블 컬럼과 연결 방식 설계, Jupyter Notebook과 SQLite DB 구현",
    result: "예약 관리 흐름의 테이블 구조화, DB 설계와 SQLAlchemy 구현 흐름 이해",
    artifacts: "Jupyter Notebook, SQLite DB, 테이블 구조 이미지, SQLAlchemy 구현 코드",
    lesson: "서비스 기능 구현 전 데이터 저장 단위와 연결 구조 설계의 필요성 확인",
    boundary: "실제 배포 서비스가 아닌 학습용 DB 설계 및 분석소스 프로젝트",
    interviewLine: "호텔 예약 흐름의 고객·객실·예약 테이블 분리, SQLite와 SQLAlchemy 기반 DB 설계 실습",
    stack: ["SQLite", "SQLAlchemy", "Jupyter"],
    asset: "assets/hotel-table.jpg",
    accent: "navy",
    icon: Hotel,
  },
  {
    id: "subscription",
    title: "구독관리 에이전트",
    label: "미니 프로젝트 3",
    type: "Agent Service",
    period: "2026",
    role: "서비스 시나리오 점검, 시연 흐름 정리, 차별점 정리",
    outcome: "디스코드 기반 구독관리 에이전트의 사용 흐름과 화면 결과 정리",
    situation: "여러 구독 서비스를 한곳에서 확인하고 관리하는 디스코드 기반 에이전트 미니 프로젝트",
    problem: "구독 서비스 증가에 따른 결제 주기, 비용, 사용 여부 파악 어려움과 누락 지출 가능성",
    action: "디스코드 구독 정보 확인·관리 시나리오 정리, 발표 시연 문제 점검, 서비스 차별점 정리",
    result: "구독 관리 불편을 줄이는 에이전트 사용 흐름과 화면 결과 제시",
    artifacts: "디스코드 시연 흐름, 대시보드 화면, 에이전트 구조 설명, 발표자료",
    lesson: "Agent 프로젝트에서 모델 성능만큼 중요한 사용자 상황, 명령 입력, 결과 반환 흐름 확인",
    boundary: "백엔드와 LLM 처리 전체 단독 구현이 아닌 시연 흐름과 서비스 정리 역할 중심",
    interviewLine: "구독 관리 불편을 디스코드 기반 에이전트 흐름으로 정리, 시연 시나리오와 서비스 차별점 구체화",
    stack: ["Agent", "Discord", "FastAPI"],
    asset: "assets/subscription-dashboard.png",
    altAsset: "assets/subscription-discord.png",
    accent: "purple",
    icon: Workflow,
  },
  {
    id: "coffee",
    title: "커피 원두 품질/로스팅 판별",
    label: "미니 프로젝트 4",
    type: "Computer Vision",
    period: "2026",
    role: "품질 검수 문제 정의, 이미지 기반 판별 가능성 실험, 대시보드 흐름 정리",
    outcome: "소규모 로스팅 업체의 품질 검수 문제를 가정한 이미지 판별 실험",
    situation: "소규모 로스팅 업체의 품질 검수 문제를 가정한 이미지 기반 판별 가능성 실험",
    problem: "결점두와 로스팅 상태 수작업 확인에 따른 시간 부담과 판별 기준 일관성 문제",
    action: "결점두 판별과 EfficientNet-B0 실험 흐름 정리, 판별 결과를 확인하는 대시보드 구조 설계",
    result: "이미지 기반 품질 검수 가능성 확인, 실제 적용 전 필요한 데이터와 한계 정리",
    artifacts: "모델 실험 코드, 대시보드 화면, 결과 이미지, 발표 Q&A 정리",
    lesson: "정확도 중심 설명보다 현장 문제 가정, 적용 가능성, 데이터 한계 병행 설명의 중요성 확인",
    boundary: "완성된 상용 모델이 아닌 제한된 데이터셋 기반 가능성 검토 프로젝트",
    interviewLine: "소규모 로스팅 업체 품질 검수 문제 가정, 결점두와 로스팅 상태의 이미지 기반 판별 가능성 실험",
    stack: ["Python", "EfficientNet", "Vision"],
    asset: "assets/coffee-broken-01.jpg",
    accent: "brown",
    icon: Coffee,
  },
];

const learningFlow = [
  "Python 기초",
  "데이터 분석",
  "DB/SQL",
  "ML/DL",
  "Agent/RAG",
  "서비스 개발",
];

function App() {
  const [selectedId, setSelectedId] = useState("smart-mirror");
  const selected = useMemo(
    () => projects.find((project) => project.id === selectedId) ?? projects[0],
    [selectedId],
  );

  return (
    <div className="site">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="HDC AI Portfolio 홈">
          HDC AI Portfolio
        </a>
        <nav aria-label="주요 섹션">
          <a href="#home">HOME</a>
          <a href="#career">CAREER</a>
          <a href="#projects">PROJECTS</a>
          <a href="#star">STAR</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">HDC AI 과정 포트폴리오 2026</p>
            <h1>AI Service Developer</h1>
            <p className="hero-subtitle">
              데이터 분석과 AI 기능을 사용자가 이해할 수 있는 서비스 흐름으로 연결하는 개발자 지망생
            </p>
            <p className="hero-description">
              비전공자 관점의 Python, DB, 대시보드, Agent/RAG, 프론트엔드 프로토타입 학습
              프로젝트별 문제 정의, 내 역할, 결과물, 과장 금지 범위 분리 정리
            </p>

            <div className="link-strip" aria-label="문서와 프로필 링크">
              {links.map(({ label, value, icon: Icon, href, pending }) => (
                <a
                  className={`link-button${pending ? " is-pending" : ""}`}
                  href={href}
                  key={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-disabled={pending ? "true" : undefined}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                  <small>{value}</small>
                </a>
              ))}
            </div>
          </div>

          <aside className="hero-profile" aria-label="프로필 요약">
            <div className="profile-mark">AI</div>
            <div>
              <span>목표 직무</span>
              <strong>AI 서비스 개발자</strong>
            </div>
            <ul>
              <li>데이터 분석 결과를 화면과 서비스 흐름으로 정리</li>
              <li>PC1 프론트엔드, 대시보드, Agent 시나리오 경험</li>
              <li>면접용 STAR 경험 카드와 프로젝트 근거 파일 정리 중</li>
            </ul>
          </aside>
        </section>

        <section className="career section" id="career">
          <SectionTitle
            title="Career"
            caption="과정과 경험을 면접관이 빠르게 읽을 수 있는 흐름으로 정리"
          />
          <div className="career-grid">
            {careerCards.map(({ title, period, body, icon: Icon }) => (
              <article className="career-card" key={title}>
                <Icon size={28} />
                <h3>{title}</h3>
                <span>{period}</span>
                <p>{body}</p>
              </article>
            ))}
          </div>

          <div className="learning-flow" aria-label="학습 흐름">
            {learningFlow.map((item, index) => (
              <React.Fragment key={item}>
                <span>{item}</span>
                {index < learningFlow.length - 1 ? <i aria-hidden="true" /> : null}
              </React.Fragment>
            ))}
          </div>
        </section>

        <section className="projects section" id="projects">
          <SectionTitle
            title="Selected Projects"
            caption="카드 선택 시 문제, 역할, 결과 중심 상세 내용 표시"
          />
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                active={project.id === selectedId}
                onSelect={() => setSelectedId(project.id)}
              />
            ))}
          </div>

          <ProjectDetail project={selected} />
        </section>

        <section className="star section" id="star">
          <SectionTitle
            title="STAR"
            caption="선택 프로젝트를 문제 해결 경험으로 말하기 위한 STAR 분해"
          />
          <article className="star-panel">
            <div className="star-heading">
              <Sparkles size={22} />
              <div>
                <span>{selected.label}</span>
                <h3>{selected.title}</h3>
              </div>
            </div>
            <div className="star-grid">
              <ExperienceBlock title="상황" body={selected.situation} />
              <ExperienceBlock title="문제" body={selected.problem} />
              <ExperienceBlock title="내 역할" body={selected.role} />
              <ExperienceBlock title="행동" body={selected.action} />
              <ExperienceBlock title="결과" body={selected.result} />
              <ExperienceBlock title="결과물" body={selected.artifacts} />
              <ExperienceBlock title="배운 점" body={selected.lesson} />
              <ExperienceBlock title="과장 금지" body={selected.boundary} />
            </div>
            <div className="interview-line">
              <strong>면접 30초 답변</strong>
              <p>{selected.interviewLine}</p>
            </div>
          </article>
        </section>

        <section className="contact section" id="contact">
          <SectionTitle
            title="Next"
            caption="공개 전 마지막으로 채워야 하는 항목"
          />
          <div className="todo-grid">
            <Todo icon={Github} title="GitHub 링크 연결" body="6개 프로젝트 README와 공개 가능한 코드 정리 후 연결" />
            <Todo icon={BadgeCheck} title="보안 점검" body="API 키, 개인정보, 강의 원본, 대용량 원천 데이터 공개 제외 확인" />
            <Todo icon={FileText} title="PDF 제출본" body="웹사이트와 Notion 정리 후 3~5페이지 PDF 요약" />
          </div>
        </section>
      </main>
    </div>
  );
}

function SectionTitle({ title, caption }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <p>{caption}</p>
    </div>
  );
}

function ProjectCard({ project, active, onSelect }) {
  const Icon = project.icon;

  return (
    <button
      className={`project-card accent-${project.accent}${active ? " is-active" : ""}`}
      type="button"
      onClick={onSelect}
    >
      <ProjectVisual project={project} compact />
      <div className="card-body">
        <span>{project.label}</span>
        <h3>{project.title}</h3>
        <p>{project.outcome}</p>
        <div className="card-footer">
          <Icon size={18} />
          <small>{project.type}</small>
        </div>
      </div>
    </button>
  );
}

function ProjectDetail({ project }) {
  return (
    <article className={`project-detail accent-${project.accent}`}>
      <div className="detail-copy">
        <span className="detail-label">{project.label}</span>
        <h3>{project.title}</h3>
        <p>{project.outcome}</p>
        <dl>
          <div>
            <dt>상황</dt>
            <dd>{project.situation}</dd>
          </div>
          <div>
            <dt>내 역할</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>해결한 문제</dt>
            <dd>{project.problem}</dd>
          </div>
          <div>
            <dt>행동</dt>
            <dd>{project.action}</dd>
          </div>
          <div>
            <dt>결과</dt>
            <dd>{project.result}</dd>
          </div>
          <div>
            <dt>대표 결과물</dt>
            <dd>{project.artifacts}</dd>
          </div>
          <div>
            <dt>배운 점</dt>
            <dd>{project.lesson}</dd>
          </div>
          <div>
            <dt>과장 금지</dt>
            <dd>{project.boundary}</dd>
          </div>
        </dl>
        <div className="detail-interview-line">
          <strong>면접 30초 답변</strong>
          <p>{project.interviewLine}</p>
        </div>
        <div className="stack-list">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <ProjectVisual project={project} />
    </article>
  );
}

function ProjectVisual({ project, compact = false }) {
  if (project.asset) {
    return (
      <div className={`project-visual image-visual${compact ? " compact" : ""}`}>
        <img src={project.asset} alt={`${project.title} 대표 화면`} />
        {project.altAsset ? <img src={project.altAsset} alt="" className="secondary-shot" /> : null}
      </div>
    );
  }

  if (project.id === "smart-mirror") {
    return (
      <div className={`project-visual mirror-visual${compact ? " compact" : ""}`}>
        <div className="mirror-screen">
          <div className="screen-top">
            <span>운동 1 / 2</span>
            <strong>스쿼트</strong>
          </div>
          <div className="count-ring">
            <b>0</b>
            <small>실시간 카운트</small>
          </div>
          <div className="screen-bottom">
            <span>프로필</span>
            <span>기준 촬영</span>
            <span>결과</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`project-visual chart-visual${compact ? " compact" : ""}`}>
      <div className="chart-card">
        <MapPinned size={26} />
        <div className="line-chart" />
        <div className="chart-tags">
          <span>PM10</span>
          <span>기온</span>
          <span>따릉이</span>
        </div>
      </div>
    </div>
  );
}

function ExperienceBlock({ title, body }) {
  return (
    <section>
      <h4>{title}</h4>
      <p>{body}</p>
    </section>
  );
}

function Todo({ icon: Icon, title, body }) {
  return (
    <article>
      <Icon size={24} />
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

export default App;
