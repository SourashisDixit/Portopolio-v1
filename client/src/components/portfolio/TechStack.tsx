import { ArrowUpRight } from "lucide-react";
const root="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const chips=[["C#","csharp/csharp-original.svg"],[".NET","dotnetcore/dotnetcore-original.svg"],["Azure","azure/azure-original.svg"],["SQL Server","microsoftsqlserver/microsoftsqlserver-original.svg"],["React","react/react-original.svg"],["JavaScript","javascript/javascript-original.svg"],["PostgreSQL","postgresql/postgresql-original.svg"],["Git","git/git-original.svg"]];
const cards=[
  ["Backend Dev","C# · ASP.NET Core · REST","csharp/csharp-original.svg"],["Cloud & AI","Azure · Azure OpenAI · LLMs","azure/azure-original.svg"],
  ["Databases","PostgreSQL · MySQL · SQL Server","postgresql/postgresql-original.svg"],["Frontend","React · JavaScript · HTML/CSS","react/react-original.svg"],
  ["Testing & Quality","xUnit · NUnit · Postman","dotnetcore/dotnetcore-original.svg"],["Integrations & Tools","Graph API · Swagger · Git","git/git-original.svg"]
];
function Logo({path}:{path:string}){return <img src={`${root}/${path}`} alt="" aria-hidden="true" loading="lazy" onError={e=>{e.currentTarget.style.visibility="hidden"}} data-cursor/>}
export default function TechStack(){return <section className="pf-techstack pf-section" id="skills" data-section>
  <div className="pf-matrix-title" data-reveal><p className="pf-eyebrow">CAPABILITY MATRIX</p><h2>Tech <span>Stack</span></h2></div>
  <div className="pf-matrix-grid"><div className="pf-matrix-copy" data-reveal>
    <p>I build full stack applications with <strong>.NET Core</strong>, <strong>ASP.NET Core Web API</strong>, MVC, and <em>React</em> — connecting clean service layers to responsive interfaces.</p>
    <p>I design relational data layers with <strong>PostgreSQL</strong>, <strong>MySQL</strong>, and SQL Server, and validate core behavior with unit and API tests.</p>
    <p>My CloudShot Bot project brings <em>Azure OpenAI</em> and Microsoft Graph API together to answer project questions inside Microsoft Teams.</p>
    <div className="pf-logo-chips">{chips.map(([label,path])=><span key={label}><Logo path={path}/><b>{label}</b></span>)}</div>
  </div><div className="pf-capability-grid">{cards.map(([title,subtitle,icon],i)=><article className="pf-capability-card" key={title} data-reveal style={{transitionDelay:`${i*65}ms`}}><Logo path={icon}/><div><h3>{title}</h3><p>{subtitle}</p></div><ArrowUpRight size={15}/></article>)}</div></div>
</section>}