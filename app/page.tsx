const projects = [
  {
    number: "01",
    title: "Quick Commerce Analytics",
    category: "POWER BI · BUSINESS INTELLIGENCE",
    description:
      "A Power BI data story exploring customer behavior, delivery performance, revenue, payment patterns, sentiment and campaign performance across India's quick-commerce ecosystem.",
    tags: ["Power BI", "SQL", "Analytics"],
    github: "https://github.com/Nk-987/quick-commerce-addiction-india",
    visual: "dashboard",
  },
  {
    number: "02",
    title: "Customer Intelligence Platform",
    category: "DATA · BACKEND · FULL STACK",
    description:
      "A customer-focused platform combining data processing, analytics and backend APIs to turn customer information into useful business insights.",
    tags: ["Python", "FastAPI", "REST API"],
    github: "https://github.com/Nk-987/customer-intelligence-platform",
    visual: "platform",
  },
  {
    number: "03",
    title: "Customer Churn Prediction",
    category: "MACHINE LEARNING",
    description:
      "A classification workflow for identifying customers at risk of churn through preprocessing, exploratory analysis, feature engineering and model evaluation.",
    tags: ["Python", "Pandas", "Scikit-learn"],
    github: "https://github.com/Nk-987/customer-churn-prediction",
    visual: "model",
  },
  {
    number: "04",
    title: "House Rent Prediction",
    category: "MACHINE LEARNING · DEPLOYMENT",
    description:
      "A rental-price prediction system using 4,000+ housing records, model comparison and an interactive application layer with FastAPI, Streamlit and Docker.",
    tags: ["XGBoost", "LightGBM", "FastAPI"],
    github: "https://github.com/Nk-987/house-price-prediction",
    visual: "prediction",
  },
  {
    number: "05",
    title: "RedBus Booking Platform",
    category: "FULL STACK DEVELOPMENT",
    description:
      "A full-stack bus booking application demonstrating frontend workflows, backend APIs, database integration and booking functionality.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Nk-987/red-bus-master",
    visual: "booking",
  },
  {
    number: "06",
    title: "MERN Bookstore",
    category: "FULL STACK · MERN",
    description:
      "A responsive bookstore application with React, REST APIs, JWT authentication, CRUD operations and MongoDB integration.",
    tags: ["MongoDB", "Express", "React"],
    github: "https://github.com/Nk-987/bookstore-mern-stack",
    visual: "store",
  },
];

const skillGroups = [
  {
    label: "01",
    title: "Data Analytics",
    text: "Turning raw datasets into clean, explainable insights.",
    skills: ["Python", "SQL", "Pandas", "NumPy", "EDA", "Excel"],
  },
  {
    label: "02",
    title: "Business Intelligence",
    text: "Building KPI-driven dashboards that help teams make decisions.",
    skills: ["Power BI", "DAX", "Tableau", "KPI Reporting", "Visualization"],
  },
  {
    label: "03",
    title: "Machine Learning",
    text: "Developing practical predictive workflows from data to evaluation.",
    skills: [
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "PyTorch",
      "Feature Engineering",
    ],
  },
  {
    label: "04",
    title: "Software Engineering",
    text: "Building APIs and modern web applications around real use cases.",
    skills: ["React", "Next.js", "Node.js", "NestJS", "FastAPI", "MongoDB"],
  },
];

const resumes = [
  [
    "Data Analyst",
    "SQL · Python · Power BI · Excel",
    "/resume_Data_Analyst.pdf",
  ],
  [
    "Business Analyst",
    "KPI · Reporting · Business Intelligence",
    "/resume_Business_Analyst.pdf",
  ],
  [
    "Full Stack Developer",
    "React · Node.js · APIs · Databases",
    "/resume_Full_Stack_Developer.pdf",
  ],
  [
    "Frontend Developer",
    "React · Next.js · Angular · JavaScript",
    "/resume_Frontend.pdf",
  ],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ProjectVisual({ type }: { type: string }) {
  if (type === "dashboard") {
    return (
      <div className="visual dashboard-visual">
        <div className="visual-top">
          <span>QUICK COMMERCE</span>
          <b>2026</b>
        </div>
        <div className="metric-row">
          <i />
          <i />
          <i />
        </div>
        <div className="chart-row">
          <div className="bars">
            <b />
            <b />
            <b />
            <b />
            <b />
            <b />
          </div>
          <div className="donut" />
        </div>
        <div className="mini-lines">
          <i />
          <i />
          <i />
        </div>
      </div>
    );
  }
  if (type === "platform") {
    return (
      <div className="visual platform-visual">
        <div className="terminal-line">$ customer-insights</div>
        <div className="terminal-block">
          <span>customers</span>
          <b>15,284</b>
          <span>segments</span>
          <b>08</b>
        </div>
        <div className="api-line">GET /api/customers/insights</div>
      </div>
    );
  }
  if (type === "model") {
    return (
      <div className="visual model-visual">
        <div className="model-grid">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="model-score">
          <small>ROC AUC</small>
          <strong>0.764</strong>
        </div>
      </div>
    );
  }
  if (type === "prediction") {
    return (
      <div className="visual prediction-visual">
        <div className="prediction-title">RENT PREDICTION</div>
        <div className="prediction-value">
          ₹ 28,500<span>/month</span>
        </div>
        <div className="prediction-bar">
          <i />
        </div>
        <div className="prediction-foot">
          <span>XGBoost</span>
          <span>FastAPI</span>
          <span>Streamlit</span>
        </div>
      </div>
    );
  }
  if (type === "booking") {
    return (
      <div className="visual booking-visual">
        <div className="ticket">
          <span>DEL → DEL</span>
          <strong>06:45</strong>
          <small>AC · SEATER · 2 seats</small>
        </div>
        <div className="ticket-side">
          BOOK
          <br />
          NOW
        </div>
      </div>
    );
  }
  return (
    <div className="visual store-visual">
      <div className="book book-a" />
      <div className="book book-b" />
      <div className="book book-c" />
      <div className="store-copy">
        <small>BOOKSTORE</small>
        <strong>
          Browse.
          <br />
          Discover.
        </strong>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="container nav-inner">
          <a className="logo" href="#top">
            NK<span>.</span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#expertise">Expertise</a>
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#resume">Resume</a>
          </div>
          <a className="nav-cta" href="mailto:niteshk1407@gmail.com">
            Let&apos;s talk <Arrow />
          </a>
        </div>
      </nav>

      <section className="hero container" id="top">
        <div className="hero-copy">
          <div className="availability">
            <span /> Available for opportunities
          </div>
          <p className="kicker">
            DATA ANALYST · BUSINESS INTELLIGENCE · SOFTWARE
          </p>
          <h1>
            Data that makes sense.
            <br />
            <em>Software that works.</em>
          </h1>
          <p className="hero-text">
            I&apos;m Nitesh Kumar — a Computer Science graduate who combines
            data analytics, business intelligence, machine learning and
            full-stack engineering to solve practical problems.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#work">
              Explore my work <Arrow />
            </a>
            <a
              className="btn secondary"
              href="/resume_Data_Analyst.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View resume <Arrow />
            </a>
          </div>
          <div className="hero-stack">
            <span>Python</span>
            <span>SQL</span>
            <span>Power BI</span>
            <span>React</span>
            <span>Node.js</span>
            <span>FastAPI</span>
          </div>
        </div>
        <div className="hero-profile">
          <div className="profile-glow" />
          <div className="profile-photo">
            <img src="/profile.png" alt="Professional portrait" />
          </div>
          <div className="profile-info">
            <span>PROFILE</span>
            <strong>Nitesh Kumar</strong>
            <small>Data Analyst & Full Stack Developer</small>
          </div>
          <div className="profile-meta">
            <div>
              <span>EDUCATION</span>
              <b>B.Tech CSE · 2025</b>
            </div>
            <div>
              <span>CGPA</span>
              <b>7.6 / 10</b>
            </div>
          </div>
          <div className="profile-footer">
            <span>Faridabad, Haryana</span>
            <span>India</span>
          </div>
        </div>
      </section>

      <section className="trustbar">
        <div className="container trust-inner">
          <span>FOCUSED ON</span>
          <b>DATA ANALYTICS</b>
          <i>·</i>
          <b>BUSINESS INTELLIGENCE</b>
          <i>·</i>
          <b>BACKEND</b>
          <i>·</i>
          <b>FULL STACK</b>
        </div>
      </section>

      <section className="section container" id="about">
        <div className="section-label">
          <span>01</span>
          <p>ABOUT</p>
        </div>
        <div className="about-layout">
          <h2>
            I like solving problems where <em>data and software meet.</em>
          </h2>
          <div className="about-copy">
            <p>
              My work sits between analysis and engineering. I use SQL and
              Python to understand data, Power BI to communicate it, machine
              learning to model it, and modern web technologies to turn ideas
              into usable products.
            </p>
            <p>
              During my internships at Placify Technologies, I worked across
              Data Science & AI and Full Stack development — from
              image-processing workflows to an Angular/NestJS production
              application.
            </p>
            <a
              className="text-link"
              href="https://www.linkedin.com/in/nitesh-kumar-2b99b1269/"
              target="_blank"
              rel="noreferrer"
            >
              More about me <Arrow />
            </a>
          </div>
        </div>
        <div className="proof-grid">
          <div>
            <strong>2</strong>
            <span>Internship roles</span>
          </div>
          <div>
            <strong>10K+</strong>
            <span>Records analyzed in projects</span>
          </div>
          <div>
            <strong>5K+</strong>
            <span>AI image samples worked with</span>
          </div>
          <div>
            <strong>7.6</strong>
            <span>CGPA / 10</span>
          </div>
        </div>
      </section>

      <section className="section container" id="expertise">
        <div className="section-label">
          <span>02</span>
          <p>EXPERTISE</p>
        </div>
        <div className="section-intro">
          <h2>
            What I <em>do.</em>
          </h2>
          <p>
            Four areas that define how I approach a problem — from the first
            dataset to the final product.
          </p>
        </div>
        <div className="expertise-grid">
          {skillGroups.map((group) => (
            <article className="expertise-card" key={group.title}>
              <span className="card-no">{group.label}</span>
              <h3>{group.title}</h3>
              <p>{group.text}</p>
              <div>
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section container" id="work">
        <div className="section-label">
          <span>03</span>
          <p>SELECTED WORK</p>
        </div>
        <div className="section-intro work-intro">
          <h2>
            Projects with a <em>purpose.</em>
          </h2>
          <a
            className="text-link"
            href="https://github.com/Nk-987"
            target="_blank"
            rel="noreferrer"
          >
            View all on GitHub <Arrow />
          </a>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <a
                className="project-visual-link"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <ProjectVisual type={project.visual} />
              </a>
              <div className="project-body">
                <div className="project-top">
                  <span>{project.number}</span>
                  <span>{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-bottom">
                  <div>
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub <Arrow />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section container" id="experience">
        <div className="section-label">
          <span>04</span>
          <p>EXPERIENCE</p>
        </div>
        <div className="section-intro">
          <h2>
            Where I&apos;ve <em>worked.</em>
          </h2>
        </div>
        <div className="timeline">
          <article className="timeline-item">
            <div className="timeline-date">SEP 2024 — DEC 2024</div>
            <div className="timeline-dot" />
            <div className="timeline-main">
              <div className="role-head">
                <div>
                  <h3>Data Science & AI Intern</h3>
                  <p>Placify Technologies</p>
                </div>
                <span>01</span>
              </div>
              <p>
                Built machine-learning workflows for aerial imagery analysis
                across 5,000+ image samples, supporting detection,
                classification and segmentation. Optimized preprocessing
                pipelines by ~25% and worked with PyTorch, Git, GitHub, GitLab
                and Docker.
              </p>
              <div className="tags">
                <span>Python</span>
                <span>PyTorch</span>
                <span>Optuna</span>
                <span>Deep Learning</span>
              </div>
            </div>
          </article>
          <article className="timeline-item">
            <div className="timeline-date">FEB 2025 — AUG 2025</div>
            <div className="timeline-dot" />
            <div className="timeline-main">
              <div className="role-head">
                <div>
                  <h3>Full Stack Developer Intern</h3>
                  <p>Placify Technologies</p>
                </div>
                <span>02</span>
              </div>
              <p>
                Contributed to a production-level Angular and NestJS
                application, implementing image optimization that reduced page
                load time by ~30%, restructuring Strapi URLs for SEO, resolving
                10+ bugs and collaborating with 5+ developers.
              </p>
              <div className="tags">
                <span>Angular</span>
                <span>NestJS</span>
                <span>TypeScript</span>
                <span>SEO</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section container" id="education">
        <div className="section-label">
          <span>05</span>
          <p>EDUCATION</p>
        </div>
        <div className="education">
          <div>
            <span>2021 — 2025</span>
            <h2>B.Tech in Computer Science & Engineering</h2>
            <p>Bennett University · Greater Noida</p>
          </div>
          <div className="education-score">
            <small>CGPA</small>
            <strong>7.6</strong>
            <span>/ 10</span>
          </div>
        </div>
      </section>

      <section className="section container" id="resume">
        <div className="section-label">
          <span>06</span>
          <p>RESUME</p>
        </div>
        <div className="resume-head">
          <h2>
            Choose the profile
            <br />
            <em>that fits the role.</em>
          </h2>
          <p>
            I keep role-specific versions so recruiters can quickly see the
            experience most relevant to their opening.
          </p>
        </div>
        <div className="resume-list">
          {resumes.map(([title, subtitle, file], index) => (
            <div
              className={`resume-item ${index === 0 ? "featured" : ""}`}
              key={title}
            >
              <div className="resume-name">
                <span>0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{subtitle}</p>
                </div>
              </div>
              <div className="resume-actions">
                <a href={file} target="_blank" rel="noreferrer">
                  View <Arrow />
                </a>
                <a href={file} download>
                  Download ↓
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact container" id="contact">
        <div className="contact-inner">
          <div>
            <span className="contact-kicker">HAVE AN OPPORTUNITY?</span>
            <h2>
              Let&apos;s build something
              <br />
              <em>worth talking about.</em>
            </h2>
          </div>
          <div className="contact-links">
            <a href="mailto:niteshk1407@gmail.com">
              <span>Email</span>
              <b>niteshk1407@gmail.com</b>
              <Arrow />
            </a>
            <a
              href="https://www.linkedin.com/in/nitesh-kumar-2b99b1269/"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              <b>Connect with me</b>
              <Arrow />
            </a>
            <a
              href="https://github.com/Nk-987"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              <b>Explore my work</b>
              <Arrow />
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="logo" href="#top">
            NK<span>.</span>
          </a>
          <p>Data Analyst · Business Intelligence · Full Stack Developer</p>
          <span>© 2026 Nitesh Kumar</span>
        </div>
      </footer>
    </main>
  );
}
