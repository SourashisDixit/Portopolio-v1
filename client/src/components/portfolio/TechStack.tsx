import { useState, type KeyboardEvent, type MouseEvent, type PointerEvent } from "react";
import { ChevronDown } from "lucide-react";

const iconRoot = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const categories = ["All", "Backend", "Frontend", "Cloud", "Database", "Tools"] as const;
type Category = (typeof categories)[number];

const technologies = [
  { name: "C#", category: "Backend", isCore: true, level: 4, note: "Wrote application logic for the ASP.NET Core cloudshot Bot.", projects: ["cloudshot Bot"], icon: "csharp/csharp-original.svg" },
  { name: ".NET", category: "Backend", isCore: true, level: 4, note: "Built ASP.NET Core API services for the cloudshot Bot assistant.", projects: ["cloudshot Bot"], icon: "dotnetcore/dotnetcore-original.svg" },
  { name: "React", category: "Frontend", isCore: true, level: 3, note: "Built the cloudshot Bot configuration interface in React.", projects: ["cloudshot Bot"], icon: "react/react-original.svg" },
  { name: "Azure", category: "Cloud", isCore: true, level: 3, note: "Connected Azure OpenAI with Microsoft Teams through Graph API.", projects: ["cloudshot Bot"], icon: "azure/azure-original.svg" },
  { name: "PostgreSQL", category: "Database", isCore: true, level: 3, note: "Designed PostgreSQL storage for cloudshot Bot project data.", projects: ["cloudshot Bot", "Tech Blog"], icon: "postgresql/postgresql-original.svg" },
  { name: "JavaScript", category: "Frontend", isCore: false, level: 3, note: "Built responsive interfaces with JavaScript during a web development internship.", projects: [], icon: "javascript/javascript-original.svg" },
  { name: "Git", category: "Tools", isCore: false, level: 3, note: "Used Git and GitHub for version control and collaborative development.", projects: ["cloudshot Bot", "Tech Blog", "Power Billing Solution"], icon: "git/git-original.svg" },
  { name: "SQL Server", category: "Database", isCore: false, level: 2, note: "Use SQL Server for relational data modeling and SQL query work.", projects: [], icon: "microsoftsqlserver/microsoftsqlserver-original.svg" },
  { name: "MySQL", category: "Database", isCore: false, level: 3, note: "Connected the Power Billing workflow to MySQL using JDBC.", projects: ["Power Billing Solution"], icon: "mysql/mysql-original.svg" },
  { name: "Java", category: "Backend", isCore: false, level: 2, note: "Built server-side logic for the Tech Blog and Power Billing applications.", projects: ["Tech Blog", "Power Billing Solution"], icon: "java/java-original.svg" },
  { name: "Spring Boot", category: "Backend", isCore: false, level: 2, note: "Built REST endpoints for the Tech Blog with Spring Boot.", projects: ["Tech Blog"], icon: "spring/spring-original.svg" },
  { name: "Hibernate", category: "Backend", isCore: false, level: 2, note: "Used Hibernate and JPA to persist Tech Blog data in PostgreSQL.", projects: ["Tech Blog"], icon: "hibernate/hibernate-original.svg" },
  { name: "Spring AI", category: "Backend", isCore: false, level: 1, note: "Learning to connect AI features with Java services using Spring AI.", projects: [], icon: "spring/spring-original.svg" },
  { name: "Oracle", category: "Database", isCore: false, level: 1, note: "Building familiarity with Oracle relational databases.", projects: [], icon: "oracle/oracle-original.svg" },
  { name: "REST APIs", category: "Backend", isCore: false, level: 3, note: "Designed REST APIs with .NET and Spring Boot and connected React clients.", projects: ["cloudshot Bot", "Tech Blog"], icon: "swagger/swagger-original.svg" },
  { name: "Microservices", category: "Backend", isCore: false, level: 1, note: "Exploring service boundaries and communication patterns.", projects: [], icon: "kubernetes/kubernetes-original.svg" },
] as const;

const levelLabels = ["Learning", "Comfortable", "Confident", "Daily driver"] as const;

function setSpotlight(event: MouseEvent<HTMLButtonElement>) {
  const bounds = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--x", `${event.clientX - bounds.left}px`);
  event.currentTarget.style.setProperty("--y", `${event.clientY - bounds.top}px`);
}

function stopCursorRing(event: PointerEvent<HTMLDivElement>) {
  if (event.pointerType === "mouse") document.body.classList.add("pf-tech-card-hover");
}

function restoreCursorRing() {
  document.body.classList.remove("pf-tech-card-hover");
}

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [openTechnology, setOpenTechnology] = useState<string | null>(null);

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft" && event.key !== "Home" && event.key !== "End") return;
    event.preventDefault();
    const currentIndex = categories.indexOf(activeCategory);
    const nextIndex = event.key === "Home" ? 0 : event.key === "End" ? categories.length - 1 : (currentIndex + (event.key === "ArrowRight" ? 1 : categories.length - 1)) % categories.length;
    const nextCategory = categories[nextIndex];
    setActiveCategory(nextCategory);
    document.getElementById(`tech-tab-${nextCategory.toLowerCase()}`)?.focus();
  }

  function renderCards(isCore: boolean) {
    return <div className={`pf-tech-grid${isCore ? " pf-tech-grid-core" : " pf-tech-grid-secondary"}`}>
      {technologies.filter((technology) => technology.isCore === isCore).map((technology) => {
        const isDimmed = activeCategory !== "All" && technology.category !== activeCategory;
        const isOpen = openTechnology === technology.name;
        const levelLabel = levelLabels[technology.level - 1];

        return <div className={`pf-tech-card-shell${isOpen ? " is-open" : ""}${isDimmed ? " is-dimmed" : ""}`} data-category={technology.category.toLowerCase()} key={technology.name} onPointerEnter={stopCursorRing} onPointerLeave={restoreCursorRing}>
          <button
            className="pf-tech-card"
            type="button"
            aria-expanded={isOpen}
            aria-controls={`tech-details-${technology.name.replaceAll(" ", "-").replaceAll(".", "dot")}`}
            onClick={() => setOpenTechnology(isOpen ? null : technology.name)}
            onMouseMove={setSpotlight}
          >
            <span className="pf-tech-icon" aria-hidden="true"><img src={`${iconRoot}/${technology.icon}`} alt="" loading="lazy" onError={(event) => { event.currentTarget.style.visibility = "hidden"; }} /></span>
            <span className="pf-tech-card-name">{technology.name}</span>
            <span className="pf-tech-card-category">{technology.category}</span>
            <ChevronDown className="pf-tech-card-chevron" size={17} aria-hidden="true" />
          </button>
          <div className="pf-tech-details" id={`tech-details-${technology.name.replaceAll(" ", "-").replaceAll(".", "dot")}`} hidden={!isOpen}>
            <p>{technology.note}</p>
            <div className="pf-tech-level" role="img" aria-label={`Skill level: ${levelLabel}, ${technology.level} of 4`}>
              <div className="pf-tech-level-meter" aria-hidden="true">{levelLabels.map((label, index) => <span className={index < technology.level ? "is-filled" : ""} key={label} />)}</div>
              <span>{levelLabel}</span>
            </div>
            <div className="pf-tech-projects"><span className="pf-tech-detail-label">RELATED PROJECTS</span>
              {technology.projects.length > 0
                ? technology.projects.map((project) => <a href="#projects" key={project}>{project}<span aria-hidden="true"> ↗</span></a>)
                : <span className="pf-tech-no-project">No linked project yet</span>}
            </div>
          </div>
        </div>;
      })}
    </div>;
  }

  return <section className="pf-techstack pf-section" id="skills" data-section aria-labelledby="tech-stack-title" onPointerLeave={restoreCursorRing}>
    <div className="pf-tech-heading">
      <p className="pf-eyebrow">CAPABILITY MATRIX</p>
      <h2 id="tech-stack-title">Tech <span>Stack</span></h2>
      <p className="pf-tech-intro">I build with <strong>.NET Core</strong> and <strong>PostgreSQL</strong>, create interfaces in <em>React</em>, and deploy cloud solutions on <em>Azure</em>.</p>
    </div>
    <div className="pf-tech-tabs" role="tablist" aria-label="Filter technologies by category">
      {categories.map((category) => <button
        className="pf-tech-tab"
        id={`tech-tab-${category.toLowerCase()}`}
        key={category}
        type="button"
        role="tab"
        aria-selected={activeCategory === category}
        aria-controls="tech-catalogue"
        tabIndex={activeCategory === category ? 0 : -1}
        onKeyDown={handleTabKeyDown}
        onClick={() => setActiveCategory(category)}
      >{category}</button>)}
    </div>
    <div id="tech-catalogue" role="tabpanel" aria-labelledby={`tech-tab-${activeCategory.toLowerCase()}`}>
      <h3 className="pf-tech-tier-title">Core stack</h3>
      {renderCards(true)}
      <h3 className="pf-tech-tier-title pf-tech-tier-secondary">Also work with</h3>
      {renderCards(false)}
    </div>
  </section>;
}
