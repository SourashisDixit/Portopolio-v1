import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Design Philosophy: Modern Tech-Forward Minimalism
 * - Deep navy base (#1a1f3a) with electric cyan accents (#00d9ff)
 * - Asymmetric grid layout with generous whitespace
 * - Animated tech stack visualizations and smooth scroll effects
 * - Code-style typography for metrics to reinforce technical expertise
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-primary">
            <span className="text-accent">A</span>R
          </div>
          <div className="flex items-center gap-8">
            <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">
              About
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-accent transition-colors">
              Skills
            </a>
            <a href="#experience" className="text-sm font-medium hover:text-accent transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage:
              'url("https://private-us-east-1.manuscdn.com/sessionFile/s0CYDlp0NaKsnnJN7YkI9t/sandbox/EnvLeELeIGMtvXZSkXkcIk-img-1_1770183870000_na1fn_aGVyby1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvczBDWURscDBOYUtzbm5KTjdZa0k5dC9zYW5kYm94L0VudkxlRUxlSUdNdHZYWlNrWGtjSWstaW1nLTFfMTc3MDE4Mzg3MDAwMF9uYTFmbl9hR1Z5YnkxaVp3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=tgGRMpOJAJClIpFPV7QVVDOWOR7dJzrrrg7O2wGWT4TqhItMYSiS8I2BUhT7N9OjahZ2oZhYR7FEMd337Y-LHzAKmwIGTRlT0T3Y39CnGC1TO1~W6RRregaDjXZiPCyaJMn81AsgNqcBl-B2Wl12qr~OKUsPijjC5jQY6zVbObWeVxqT7V6ka9fyvz9dv~O37CAZ4j8I9aD~m4Y~FkLOYqhtlF2xLiKrH~gh-I5nKP4h~NGqWLKlmYPPqb-An2A4u-bCdp5KBxT~WJFvvBwn2EGNLLfgAkB0V5s4HARAkEE4Q~RG13tP6ojYVwQpdurl1542e-QotnMFvBNjNqZKdg__")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-primary">Ankit</span>
                <br />
                <span className="text-accent">Rout</span>
              </h1>
              <p className="text-xl text-muted-foreground font-light">
                Full Stack Java Developer specializing in high-performance distributed systems
              </p>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed max-w-md">
              Crafting scalable, user-centric software solutions with expertise in microservices,
              cloud technologies, and modern development practices.
            </p>

            <div className="flex gap-4 pt-4">
              <Button
                className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get in Touch
              </Button>
              <a
                href="https://files.manuscdn.com/user_upload_by_module/session_file/310519663329899742/JJSReEiULtojpMad.pdf"
                download="Ankit_Rout_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="border-accent text-accent hover:bg-accent/10 px-8"
                  variant="outline"
                >
                  Download Resume
                  <Download className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <a
                href="https://linkedin.com/in/ankitrout07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/ankit-7i"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:ankitrout513151979@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="tel:+917682949708"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right: Tech Stack Visual */}
          <div className="hidden lg:flex justify-center animate-fade-in-delay">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/s0CYDlp0NaKsnnJN7YkI9t/sandbox/EnvLeELeIGMtvXZSkXkcIk-img-2_1770183867000_na1fn_dGVjaC1zdGFjay12aXN1YWw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvczBDWURscDBOYUtzbm5KTjdZa0k5dC9zYW5kYm94L0VudkxlRUxlSUdNdHZYWlNrWGtjSWstaW1nLTJfMTc3MDE4Mzg2NzAwMF9uYTFmbl9kR1ZqYUMxemRHRmpheTEyYVhOMVlXdy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Na6EtWWj0jZI2Nt1u0jWLE3jA6FzVZjLdVAGXST8sdrkc~XkgDICsRzGYvSMvHN5eHiTKNLS5yFE~OM2ok~g0pW6hnCYFV-fQ40jQAvnGkckhmqirc-Th5B5crp87nOpw3i0GNUbyAWzAMMKbMbcHSzXXe6yCJtwJcXBKYpLCuWnjLcHxAIdqNByFMKu5DAcPQWsO6qphI6wwyqvPugW-ZIZZ3JfjWXl8LobNa9fEMXqX8t6hMDuSJp38R-Zk4UBbXA1MGiqlgdrrE4d1e-XsauNd56whxP5dx1EG4RGVv39PUZvQFAz7qkpBYlJ2OolQXLtHoSyN2Y5KMke8OxMGA__"
              alt="Tech Stack"
              className="w-full max-w-sm hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-accent text-sm font-mono">↓ Scroll to explore</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Profile Image */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663329899742/mqdXjQLcGZSXCokH.jpeg"
                  alt="Ankit Rout Profile"
                  className="w-full max-w-sm rounded-lg shadow-2xl shadow-accent/30 hover:shadow-accent/50 transition-shadow duration-300"
                />
              </div>
            </div>

            {/* Right: About Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold mb-2">
                  About <span className="text-accent">Me</span>
                </h2>
                <div className="accent-line w-12" />
              </div>

              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm a passionate Full Stack Java Developer based in Bhubaneswar, Odisha, currently
                pursuing my Master of Computer Application (MCA) at Kalinga Institute of Industrial
                Technology with a CGPA of 8.23.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                With expertise in high-performance distributed systems, microservices architecture,
                and cloud technologies, I specialize in architecting RESTful APIs, optimizing
                databases, and streamlining deployments. I'm dedicated to delivering scalable,
                user-centric software solutions using modern development practices and Agile
                methodologies.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <div className="code-metric text-2xl">8.23</div>
                  <p className="text-sm text-muted-foreground">MCA CGPA</p>
                </div>
                <div className="space-y-2">
                  <div className="code-metric text-2xl">8.46</div>
                  <p className="text-sm text-muted-foreground">BSc CGPA</p>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-2">
                  <span className="font-semibold">Location:</span> Bhubaneswar, Odisha
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">Education:</span> MCA (Aug 2023 - Oct 2025) at
                  KIIT
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-background">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-2">
              Technical <span className="text-accent">Skills</span>
            </h2>
            <div className="accent-line w-12" />
          </div>

          {/* Tech Stack Logos */}
          <div className="mb-12 bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-8 text-primary">Technology Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "Java", icon: "☕" },
                { name: "Spring Boot", icon: "🍃" },
                { name: "React", icon: "⚛️" },
                { name: "PostgreSQL", icon: "🐘" },
                { name: "Docker", icon: "🐳" },
                { name: "AWS", icon: "☁️" },
                { name: "Kubernetes", icon: "⛵" },
                { name: "Microservices", icon: "🔗" },
                { name: "REST API", icon: "🔌" },
                { name: "Hibernate", icon: "🏛️" },
                { name: "HTML5", icon: "📄" },
                { name: "CSS3", icon: "🎨" },
                { name: "JavaScript", icon: "✨" },
                { name: "Git", icon: "📦" },
                { name: "Linux", icon: "🐧" },
                { name: "Maven", icon: "🏗️" },
                { name: "MySQL", icon: "💾" },
                { name: "MongoDB", icon: "🍃" },
                { name: "Redis", icon: "⚡" },
                { name: "Kafka", icon: "📨" },
                { name: "Jenkins", icon: "🔧" },
                { name: "Nginx", icon: "⚙️" },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{tech.icon}</div>
                  <p className="text-sm font-semibold text-center text-foreground group-hover:text-accent transition-colors">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Languages */}
            <div className="bg-white p-6 rounded-lg border border-border hover:border-accent transition-colors">
              <h3 className="text-lg font-bold mb-4 text-primary">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["Java 21+", "JavaScript (ES6)", "TypeScript", "C"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="bg-white p-6 rounded-lg border border-border hover:border-accent transition-colors">
              <h3 className="text-lg font-bold mb-4 text-primary">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {["Spring Boot 3", "Spring Framework 6", "React.js"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="bg-white p-6 rounded-lg border border-border hover:border-accent transition-colors">
              <h3 className="text-lg font-bold mb-4 text-primary">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "MySQL", "Oracle", "MongoDB", "Redis"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Web Technologies */}
            <div className="bg-white p-6 rounded-lg border border-border hover:border-accent transition-colors">
              <h3 className="text-lg font-bold mb-4 text-primary">Web Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "REST APIs", "GraphQL", "JWT"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="bg-white p-6 rounded-lg border border-border hover:border-accent transition-colors">
              <h3 className="text-lg font-bold mb-4 text-primary">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Docker", "Kubernetes", "GitHub Actions", "Jenkins"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Methodologies */}
            <div className="bg-white p-6 rounded-lg border border-border hover:border-accent transition-colors">
              <h3 className="text-lg font-bold mb-4 text-primary">Tools & Methodologies</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "Postman", "Agile", "Scrum", "Microservices"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mt-12 bg-white p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-6 text-primary">Soft Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-accent mb-2">Communication</h4>
                <p className="text-foreground/80">
                  Verbal & Written Communication, Presentation Skills
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-2">Collaboration</h4>
                <p className="text-foreground/80">
                  Teamwork, Cross-functional Collaboration, Conflict Resolution
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-2">Problem-Solving</h4>
                <p className="text-foreground/80">
                  Critical Thinking, Analytical Skills, Troubleshooting
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-2">Adaptability</h4>
                <p className="text-foreground/80">Quick Learner, Flexibility, Resilience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-2">
              Professional <span className="text-accent">Experience</span>
            </h2>
            <div className="accent-line w-12" />
          </div>

          <div className="space-y-8">
            {/* Sparkradix Experience */}
            <div className="border-l-4 border-accent pl-6 py-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary">MERN Full-Stack Developer Intern</h3>
                  <p className="text-accent font-semibold mt-1">Sparkradix Technologies</p>
                </div>
                <p className="text-muted-foreground font-mono text-sm mt-2 md:mt-0">
                  Jan 2025 – Apr 2025
                </p>
              </div>
              <p className="text-foreground/80 mb-4">Bhubaneswar, India</p>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    Developed and deployed high-performance full-stack web applications using the
                    MERN stack, significantly improving user experience and operational efficiency
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    Engineered robust RESTful APIs and responsive React.js user interfaces, ensuring
                    seamless data exchange and intuitive front-end interactions
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    Managed and optimized MongoDB schemas for dynamic data storage, enhancing
                    application scalability and performance
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-background">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-2">
              Featured <span className="text-accent">Projects</span>
            </h2>
            <div className="accent-line w-12" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ForEver Project */}
            <div className="bg-white rounded-lg border border-border overflow-hidden hover:border-accent transition-all hover:shadow-lg">
              <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">ForEver</div>
                  <p className="text-sm text-muted-foreground">E-Commerce Platform</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-foreground/80">
                  A full-stack e-commerce application built with the MERN stack featuring scalable
                  architecture, responsive design, and secure payment integration.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-primary">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-accent/10 text-accent text-xs rounded font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 pt-4">
                  <a
                    href="https://github.com/ankit-7i/ForEver"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-accent text-accent hover:bg-accent/10"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* ElectroStore Project */}
            <div className="bg-white rounded-lg border border-border overflow-hidden hover:border-accent transition-all hover:shadow-lg">
              <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">ElectroStore</div>
                  <p className="text-sm text-muted-foreground">E-Commerce Platform</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-foreground/80">
                  A robust e-commerce platform engineered to improve online retail operations with
                  scalable backend architecture and dynamic JSP-based interfaces.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-primary">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Java", "JSP", "PostgreSQL", "Docker", "Tomcat"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-accent/10 text-accent text-xs rounded font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 pt-4">
                  <a
                    href="https://github.com/ankit-7i/ElectroStore"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-accent text-accent hover:bg-accent/10"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">
              Get in <span className="text-accent">Touch</span>
            </h2>
            <p className="text-lg text-foreground/80">
              I'm always interested in hearing about new opportunities and exciting projects.
            </p>
          </div>

          <div className="bg-background p-8 rounded-lg border border-border space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-primary">Email</p>
              <a
                href="mailto:ankitrout513151979@gmail.com"
                className="text-lg text-accent hover:underline"
              >
                ankitrout513151979@gmail.com
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-semibold text-primary">Phone</p>
              <a href="tel:+917682949708" className="text-lg text-accent hover:underline">
                +91 7682949708
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-semibold text-primary">Location</p>
              <p className="text-lg text-foreground/80">Bhubaneswar, Odisha, India</p>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-semibold text-primary">Connect</p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/ankitrout07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-primary rounded-lg hover:bg-accent/90 transition-colors font-semibold"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/ankit-7i"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-primary rounded-lg hover:bg-accent/90 transition-colors font-semibold"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container text-center">
          <p className="text-sm text-accent/80">
            © 2025 Ankit Rout. Crafted with precision and passion.
          </p>
        </div>
      </footer>
    </div>
  );
}
