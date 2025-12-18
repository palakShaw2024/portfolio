import { useState, useEffect } from "react";
import "./codes.css";
import guncat from "../assets/guncat.jpeg";
import batman from "../assets/batman.jpeg";
import lazy from "../assets/lazy.jpeg";
import corporate from "../assets/corporate.jpeg";
import pilot from "../assets/pilot.jpeg";
import rich from "../assets/rich.jpeg";
import apoclyps from "../assets/apoclyps.jpeg";
import resume from "../assets/resume.png";

function ViewPage() {
  const [expandedSkill, setExpandedSkill] = useState(null);
  const [selectedDay, setSelectedDay] = useState(() => {
    const saved = localStorage.getItem("portfolioTheme");
    return saved || new Date().toLocaleDateString("en-US", { weekday: "long" });
  });
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [comments, setComments] = useState(() => {
    const saved = localStorage.getItem("portfolioComments");
    return saved ? JSON.parse(saved) : [];
  });
  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    message: "",
    category: "suggestion",
  });

  const themes = {
    Monday: {
      primary: "#FF6B6B",
      secondary: "#FFE66D",
      image: guncat,
      mood: "Energetic Start",
    },
    Tuesday: {
      primary: "#4ECDC4",
      secondary: "#44AF69",
      image: batman,
      mood: "Fresh & Growth",
    },
    Wednesday: {
      primary: "#95E1D3",
      secondary: "#A8E6CF",
      image: lazy,
      mood: "Mid-week Balance",
    },
    Thursday: {
      primary: "#FFD93D",
      secondary: "#6BCF7F",
      image: corporate,
      mood: "Momentum",
    },
    Friday: {
      primary: "#A8D8EA",
      secondary: "#FFB7B2",
      image: pilot,
      mood: "Relaxed Vibes",
    },
    Saturday: {
      primary: "#FFB4D6",
      secondary: "#9B59B6",
      image: rich,
      mood: "Creative",
    },
    Sunday: {
      primary: "#9D84B7",
      secondary: "#D6A6FF",
      image: apoclyps,
      mood: "Chill & Reflect",
    },
  };

  useEffect(() => {
    const theme = themes[selectedDay];
    document.documentElement.style.setProperty("--primary-color", theme.primary);
    document.documentElement.style.setProperty("--secondary-color", theme.secondary);
    localStorage.setItem("portfolioTheme", selectedDay);
  }, [selectedDay, themes]);

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setCommentForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentForm.name && commentForm.email && commentForm.message) {
      const newComment = {
        id: Date.now(),
        ...commentForm,
        timestamp: new Date().toLocaleDateString(),
      };
      const updatedComments = [newComment, ...comments];
      setComments(updatedComments);
      localStorage.setItem("portfolioComments", JSON.stringify(updatedComments));
      setCommentForm({ name: "", email: "", message: "", category: "suggestion" });
    }
  };

  const projects = [
    {
      category: "Full-Stack (CRUD) Projects",
      items: [
        { name: "QuizNest", url: "https://quiznest-five.vercel.app/", icon: "📋" },
        { name: "E-learning App", url: "", icon: "📚" },
      ],
    },
    {
      category: "HTML/CSS & JavaScript Projects",
      items: [
        { name: "Financial Dashboard", url: "https://financial-dashboard-phi-wine.vercel.app/", icon: "📊" },
        { name: "Rock Paper Scissors", url: "https://github.com/palakShaw2024/rockpaperScissors", icon: "🎮" },
        { name: "To-do List", url: "https://to-do-list-pi-nine-28.vercel.app/", icon: "✅" },
        { name: "Typing Test", url: "https://typing-test-theta-five.vercel.app/", icon: "❓" },
        { name: "Tic-Tac-Toe", url: "", icon: "⭕" },
      ],
    },
    {
      category: "FreeCodeCamp Projects",
      items: [
        {
          name: "Survey Form",
          url: "surveyform.html",
          icon: "📝",
          image:
            "https://www.researchgate.net/profile/Derli-Angnes/post/How_do_you_get_variables_and_correct_questions_to_design_your_survey_questionnaires/attachment/60101328b425ca00016e4289/AS:984213599834120%401611666216856/download/Survey.jpg",
        },
        {
          name: "Product Landing Website",
          url: "surveyform.html",
          icon: "🛍️",
          image:
            "https://divilife.com/wp-content/uploads/2018/10/product-landing-page-layout-for-divi.jpg",
        },
        {
          name: "Tribute Page",
          url: "surveyform.html",
          icon: "🎭",
          image:
            "https://tse2.mm.bing.net/th?id=OIP._Q49hO_pnbRJQlIvs8m8hwHaEK&pid=Api&P=0&h=180",
        },
        {
          name: "Technical Documentation",
          url: "technicaldocumentationpage.html",
          icon: "📖",
          image:
            "https://global-uploads.webflow.com/5fda3048302e579473bfb454/645a5ace15854acb2158a473_software_technical_documentation_template.png",
        },
      ],
    },
  ];

  const skills = {
    "Frontend Languages": ["HTML", "CSS", "JavaScript", "React", "ThreeJs"],
    "Backend Languages": ["Python", "Node.js", "FastAPI"],
    Databases: ["Supabase", "SQL", "Firebase"],
    Tools: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "GoogleCollab"],
    "Liberaries": ["Numpy", "Pandas", "MatPlotLib", "Django"],
  };

  const skillInfo = {
    HTML: "Study Resource- freeCodeCamp",
    CSS: "Study Resource- freeCodeCamp",
    JavaScript: "Study Resource- Apna Collage",
    React: "Study Resource- GreatStack",
    Python:"Study Resource- CampusX",
    "Node.js": "Study Resource- freeCodeCamp ",
    SQL: "Study Resource- campusX",
    Git: "Study Resource- Apna Collage",
    GitHub: "Study Resource- Apna Collage",
    "VS Code": "Study Resource- My OWN",
    "Jupyter Notebook": "Study Resource - My OWN",
    Numpy: "Study Resource- CampusX",
    Pandas: "Study Resource- CampusX",
    MatPlotLib: "Study Resource- campusX",
    Django: "Study Resource- collage",
  };

  return (
    <div className="portfolio-container">
      <header className="header">
        <div className="header-content">
          <h1 className="heading">👨‍💻 Developer's Portfolio</h1>
          <div className="header-right">
            <div className="theme-selector">
              <span className="theme-label">Choose Day:</span>
              <div className="day-buttons">
                {Object.keys(themes).map((day) => (
                  <button
                    key={day}
                    className={`day-btn ${selectedDay === day ? "active" : ""}`}
                    onClick={() => setSelectedDay(day)}
                    title={`${themes[day].mood}`}
                  >
                    <img src={themes[day].image} alt={day} className="day-cat-image" />
                    <span className="day-name">{day.slice(0, 3)}</span>
                  </button>
                ))}
              </div>
            </div>
            <nav className="navbar">
              <a href="#profile" className="nav-link">Profile</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#resume" className="nav-link">Resume</a>
              <a href="#Certificates" className="nav-link">Certificates</a>
              <a href="#contact" className="nav-link">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Welcome Section */}
        <section className="welcome-section">
          <div className="welcome-content">
            <h1 className="welcome-text">Hey There! 👋</h1>
            <p className="welcome-subtitle">Welcome to my digital space</p>
            <blockquote className="profile-quote">
              "My approach is curious and experimental, grounded in a strong desire to learn and improve."
            </blockquote>
          </div>
        </section>

        {/* Profile Section */}
        <section id="profile" className="profile-section">
          <div className="profile-card">
            <div className="profile-avatar">
              <img src={themes[selectedDay].image} alt={`${selectedDay} Cat`} />
            </div>
            <h2 className="profile-name">This is Palak</h2>
            <blockquote className="profile-quote">
              "I write code. Sometimes it even compiles!"
            </blockquote>

            <div className="profile-info">
              <div className="info-item">
                <span className="info-icon">🎓</span>
                <p>BCA Graduate</p>
              </div>
              <div className="info-item">
                <span className="info-icon">🤖</span>
                <p>Interested in AI/ML & Data Work</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills-section">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items], index) => (
              <div
                key={category}
                className="skill-card"
                onClick={() =>
                  setExpandedSkill(
                    expandedSkill === category ? null : category
                  )
                }
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <h3 className="skill-category">{category}</h3>
                <div
                  className={`skill-items ${
                    expandedSkill === category ? "expanded" : ""
                  }`}
                >
                  {items.map((skill, idx) => (
                    <div
                      key={idx}
                      className="skill-badge-container"
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      onClick={() => setHoveredSkill(hoveredSkill === skill ? null : skill)}
                    >
                      <span className="skill-badge">
                        {skill}
                      </span>
                      {hoveredSkill === skill && (
                        <div className="skill-tooltip">
                          {skillInfo[skill] || "A valuable skill"}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <h2 className="section-title">My Projects</h2>

          {projects.map((projectGroup, groupIdx) => (
            <div key={groupIdx} className="project-group">
              <label className="project-category-label">
                {projectGroup.category}
              </label>
              <div className="projects-grid">
                {projectGroup.items.map((project, idx) => (
                  <a
                    key={idx}
                    href={project.url || "#"}
                    className="project-tile"
                    style={{
                      animationDelay: `${idx * 0.1}s`,
                    }}
                  >
                    <div className="project-content">
                      <span className="project-icon">{project.icon}</span>
                      <h3>{project.name}</h3>
                      {project.image && (
                        <img src={project.image} alt={project.name} />
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div className="coming-soon">
            <span>✨ More Projects Coming Soon... ✨</span>
          </div>
        </section>

        {/* Comments Section */}
        <section id="comments" className="comments-section">
          <h2 className="section-title">💬 Suggestions & Learning</h2>
          
          {/* Comment Form */}
          <div className="comment-form-container">
            <h3 className="form-subtitle">Share your thoughts, suggestions, or let me know what you'd like to learn!</h3>
            <form className="comment-form" onSubmit={handleCommentSubmit}>
              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={commentForm.message}
                  onChange={handleCommentChange}
                  placeholder="Share your thoughts..."
                  rows="5"
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                ✈️ Send Feedback
              </button>
            </form>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="resume-section">
          <h2 className="section-title">My Resume</h2>
          <div className="resume-content">
            <div className="resume-card">
              <div className="resume-header">
                
                <h3>📄 Professional Resume</h3>
                <p className="resume-subtitle">Download or view my complete resume</p>
              </div>
              <div className="resume-preview">
                <div className="resume-placeholder">
                  <span className="resume-icon">📑</span>
                  <p>Resume Document</p>
                </div>
              </div>
              <div className="resume-actions">
                <button 
                  className="resume-btn resume-btn-primary"
                  onClick={() => {
                    // Create a sample resume PDF or link
                    const resumeUrl = '/Palak_Shaw...pdf';
                    window.open(resumeUrl, '_blank');
                  }}
                >
                  📥 Download Resume
                </button>
                <button 
                  className="resume-btn resume-btn-secondary"
                  onClick={() => {
                    const resumeUrl = '/Palak_Shaw...pdf';
                    window.open(resumeUrl, '_blank');
                  }}
                >
                  👁️ View Online
                </button>
              </div>
              <div className="resume-summary">
                <h4>Quick Summary</h4>
                <ul className="resume-bullets">
                  <li><strong>Availability:</strong> Open for opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <h2 className="section-title">Let's Connect</h2>
          <div className="contact-content">
            <p className="contact-intro">
              Got a question or proposal? Feel free to reach out!
            </p>
            <div className="contact-links">
              <a href="mailto:palakshaw332@gmail.com" className="contact-link">
                <span className="contact-icon">📧</span>
                <span>Email</span>
              </a>
              <a href="https://github.com/Palakshaw2024" target="_blank" rel="noreferrer" className="contact-link">
                <span className="contact-icon">🐙</span>
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/palak-shaw-316527256" target="_blank" rel="noreferrer" className="contact-link">
                <span className="contact-icon">💼</span>
                <span>LinkedIn</span>
              </a>
               <a href="https://github.com/palakShaw2024" target="_blank" rel="noreferrer" className="contact-link">
                <span className="contact-icon">💼</span>
                <span>Github</span>
              </a> 
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2025 Palak Shaw. All rights reserved.</p>
          <p className="footer-emoji">✨ Made with care and Tech</p>
          <p>I am  aware of some the certificate section problm, will solve it soon!</p>
        </footer>
      </main>
    </div>
  );
}

export default ViewPage;