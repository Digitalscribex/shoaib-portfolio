import { useEffect, useState } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [typingText, setTypingText] = useState('')
  const [videoModal, setVideoModal] = useState({ open: false, src: '' })
  const [imageModal, setImageModal] = useState({ open: false, src: '' })

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section')
      let current = ''
      sections.forEach(section => {
        const sectionTop = section.offsetTop
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute('id')
        }
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const words = ['Quality!', 'Secure Web Apps!', 'Clean Code!', 'Scalable Solutions!']
    let wordIndex = 0
    let charIndex = 0
    let isDeleting = false
    let timeout

    const type = () => {
      const currentWord = words[wordIndex]
      if (isDeleting) {
        setTypingText(currentWord.substring(0, charIndex - 1))
        charIndex--
      } else {
        setTypingText(currentWord.substring(0, charIndex + 1))
        charIndex++
      }

      let speed = isDeleting ? 50 : 100

      if (!isDeleting && charIndex === currentWord.length) {
        speed = 2000
        isDeleting = true
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        wordIndex = (wordIndex + 1) % words.length
        speed = 500
      }
      timeout = setTimeout(type, speed)
    }

    timeout = setTimeout(type, 1000)
    return () => clearTimeout(timeout)
  }, [])

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsSidebarOpen(false)
  }

  return (
    <>
      {/* ==================== SIDEBAR ==================== */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="profile-img-container">
            <img src="/img/profile-img.png" alt="Profile" className="profile-img" />
            <div className="profile-glow"></div>
          </div>

          <h1 className="profile-name">MUHAMMAD SHOAIB UR<br />REHMAN</h1>

          <div className="profile-tags">
            WEB DEV • SQA • SECURITY
          </div>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/rehmandevelopers/" target="_blank" title="LinkedIn"><i className="bi bi-linkedin"></i></a>
            <a href="https://github.com/Digitalscribex" target="_blank" title="GitHub"><i className="bi bi-github"></i></a>
            <a href="mailto:sr9696015@gmail.com" title="Email"><i className="bi bi-envelope"></i></a>
            <a href="tel:03027999442" title="Phone"><i className="bi bi-telephone"></i></a>
          </div>
        </div>

        <nav className="sidebar-nav">
          <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollTo('home') }}>
            <i className="bi bi-house"></i> Home
          </a>
          <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollTo('about') }}>
            <i className="bi bi-person"></i> About
          </a>
          <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollTo('skills') }}>
            <i className="bi bi-code-slash"></i> Skills
          </a>
          <a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollTo('experience') }}>
            <i className="bi bi-briefcase"></i> Experience
          </a>
          <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollTo('projects') }}>
            <i className="bi bi-grid"></i> Projects
          </a>
          <a href="#netdev" className={`nav-link ${activeSection === 'netdev' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollTo('netdev') }}>
            <i className="bi bi-microsoft"></i> .NET Dev
          </a>
          <a href="#certifications" className={`nav-link ${activeSection === 'certifications' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollTo('certifications') }}>
            <i className="bi bi-award"></i> Certifications
          </a>
          <a href="#education" className={`nav-link ${activeSection === 'education' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollTo('education') }}>
            <i className="bi bi-mortarboard"></i> Education
          </a>
          <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollTo('contact') }}>
            <i className="bi bi-envelope-paper"></i> Contact
          </a>
        </nav>

        <button className="mobile-toggle d-md-none" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <i className={isSidebarOpen ? "bi bi-x" : "bi bi-list"}></i>
        </button>
      </aside>

      {/* ==================== MAIN CONTENT ==================== */}
      <main className="main-content">

        {/* HERO SECTION */}
        <section id="home" className="section">
          <div className="hero-container">
            <div className="hero-content">
              <span className="hello-badge">HELLO, I'M</span>
              <h1 className="hero-title">Muhammad<br /><span className="hero-name-accent">Shoaib Ur</span><br />Rehman</h1>
              <h2 className="hero-subtitle">I build – <span className="typing-text">{typingText}</span><span className="cursor">|</span></h2>
              <p className="hero-desc">
                BSCS Graduate • Web Developer • QA Engineer • Cybersecurity Professional<br />
                Building secure, scalable digital solutions. Open to full-time & remote roles.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollTo('contact') }}><i className="bi bi-envelope-fill"></i> Hire Me</a>
                <a href="/pdf/MUHAMMAD%20SHOAIB%20UR%20REHMAN%20ASP.NET%20Developer.pdf" download="Shoaib_Ur_Rehman_CV_NET.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline"><i className="bi bi-file-earmark-pdf"></i> 1-Page .NET CV</a>
                <a href="/pdf/CV%201%20PAGE%20DEVELOPER.pdf" download="Shoaib_Ur_Rehman_Full_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline"><i className="bi bi-download"></i> Full CV</a>
              </div>

              <div className="hero-stats">
                <div className="stat-box">
                  <h3>2+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-box">
                  <h3>15+</h3>
                  <p>Projects Built</p>
                </div>
                <div className="stat-box">
                  <h3>20+</h3>
                  <p>Certifications</p>
                </div>
                <div className="stat-box">
                  <h3>5</h3>
                  <p>Internships</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section">
          <div className="section-title-wrapper">
            <h2 className="section-title">About Me</h2>
            <div className="title-underline"></div>
          </div>

          <div className="about-container">
            <div className="row gx-5">
              <div className="col-lg-5">
                <div className="about-img-box">
                  <img src="/img/a1.png" alt="Shoaib Working" className="img-fluid rounded-4" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="info-grid row g-3">
                  <div className="col-md-6">
                    <div className="info-card glass-panel">
                      <span className="info-label">FULL NAME</span>
                      <span className="info-value">Muhammad Shoaib Ur Rehman</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-card glass-panel">
                      <span className="info-label">DEGREE</span>
                      <span className="info-value">BSCS — UAF Burewala (2026)</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-card glass-panel">
                      <span className="info-label">PHONE</span>
                      <span className="info-value accent-text">+92 302 7999442</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-card glass-panel">
                      <span className="info-label">EMAIL</span>
                      <span className="info-value accent-text">sr9696015@gmail.com</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-card glass-panel">
                      <span className="info-label">LOCATION</span>
                      <span className="info-value">Burewala, Punjab <span className="text-white-50">PK</span></span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-card glass-panel">
                      <span className="info-label">AVAILABILITY</span>
                      <span className="info-value text-success">✓ Open to Remote / On-site</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-card glass-panel">
                      <span className="info-label">FREELANCING</span>
                      <span className="info-value">Fiverr & Upwork — Active</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-card glass-panel">
                      <span className="info-label">LINKEDIN</span>
                      <span className="info-value"><a href="https://www.linkedin.com/in/rehmandevelopers/" target="_blank" className="accent-text">View Profile →</a></span>
                    </div>
                  </div>
                </div>

                <p className="about-bio mt-4">
                  I am a results-driven Computer Science graduate with hands-on experience across Web Development, Software Quality Assurance, and Cybersecurity. Proficient in full-stack development using PHP, Laravel, React, HTML/CSS/JS, and .NET. I have built 15+ real-world applications across multiple internships. My Google Cybersecurity Professional Certificate enables me to integrate security best practices throughout the SDLC. I am passionate about clean code, quality software, and continuous learning — ready to bring value to any team from day one.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section">
          <div className="section-title-wrapper">
            <h2 className="section-title">Technical Skills</h2>
            <div className="title-underline"></div>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="skill-category glass-panel h-100">
                <h3><i className="bi bi-window"></i> Frontend Development</h3>
                <div className="skill-tags">
                  <span>HTML5</span><span>CSS3</span><span>JavaScript (ES6+)</span>
                  <span>React.js</span><span>Bootstrap</span><span>Figma to Code</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="skill-category glass-panel h-100">
                <h3><i className="bi bi-server"></i> Backend Development</h3>
                <div className="skill-tags">
                  <span>PHP</span><span>Laravel</span><span>Node.js</span>
                  <span>Express.js</span><span>ASP.NET Core</span><span>C#</span><span>REST APIs</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="skill-category glass-panel h-100">
                <h3><i className="bi bi-check2-circle"></i> QA & Testing</h3>
                <div className="skill-tags">
                  <span>Manual Testing</span><span>Functional Testing</span><span>Regression Testing</span>
                  <span>Black Box Testing</span><span>Test Case Design</span><span>Postman (API)</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="skill-category glass-panel h-100">
                <h3><i className="bi bi-shield-check"></i> Cybersecurity</h3>
                <div className="skill-tags">
                  <span>Penetration Testing</span><span>Vulnerability Assessment</span><span>SQL Injection</span>
                  <span>XSS / CSRF</span><span>Secure Coding (SDLC)</span><span>OWASP Top 10</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="skill-category glass-panel h-100">
                <h3><i className="bi bi-tools"></i> Tools & Platforms</h3>
                <div className="skill-tags">
                  <span>Git / GitHub</span><span>MySQL</span><span>SQL Server</span>
                  <span>VS Code</span><span>Visual Studio</span><span>Jira</span><span>Figma</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="skill-category glass-panel h-100">
                <h3><i className="bi bi-chat-text"></i> Soft Skills</h3>
                <div className="skill-tags">
                  <span>Team Collaboration</span><span>Client Communication</span><span>Problem Solving</span>
                  <span>Time Management</span><span>Technical Writing</span><span>Remote Work</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="section">
          <div className="section-title-wrapper">
            <h2 className="section-title">Professional Experience</h2>
            <div className="title-underline"></div>
          </div>

          <div className="timeline-container">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-panel">
                <div className="timeline-date">Feb 2026 – April 2026 (3 Months)</div>
                <h3 className="timeline-title">.NET Developer, React, Node, Express as a Software Engineer</h3>
                <p className="timeline-company">Glosix — On-site</p>
                <ul className="timeline-list">
                  <li>Developed and maintained web applications using React.js for frontend interfaces.</li>
                  <li>Built and integrated backend APIs using Node.js, Express, .NET Framework, and C#.</li>
                  <li>Collaborated with cross-functional teams in an agile environment.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-panel">
                <div className="timeline-date">Jul 2025 – Sep 2025</div>
                <h3 className="timeline-title">Cybersecurity Intern</h3>
                <p className="timeline-company">DevelopHub.co — Virtual</p>
                <ul className="timeline-list">
                  <li>Conducted penetration testing on web apps and documented vulnerabilities.</li>
                  <li>Performed vulnerability assessments (DVWAP, SQL injection, XSS, CSRF).</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-panel">
                <div className="timeline-date">Mar 2025 – May 2025</div>
                <h3 className="timeline-title">Frontend Development Intern</h3>
                <p className="timeline-company">DevelopHub.co — Virtual</p>
                <ul className="timeline-list">
                  <li>Built a cybersecurity chatbot using HTML, CSS, and JS.</li>
                  <li>Converted Figma designs into fully responsive e-commerce websites.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-panel">
                <div className="timeline-date">Feb 2025 – May 2025</div>
                <h3 className="timeline-title">Web Development Intern</h3>
                <p className="timeline-company">Mar IT Solutions — Remote</p>
                <ul className="timeline-list">
                  <li>Built 6 full-stack web applications including Hotel Management and InDrive Clone.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section">
          <div className="section-title-wrapper">
            <h2 className="section-title">Projects</h2>
            <div className="title-underline"></div>
          </div>

          <div className="row g-4">
            <div className="col-lg-6">
              <div className="project-card glass-panel h-100">
                <div className="project-media">
                  <video src="/video/complete.mp4" muted loop className="project-video-preview" onMouseEnter={(e) => e.target.play()} onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}></video>
                  <div className="play-btn" onClick={() => setVideoModal({ open: true, src: '/video/complete.mp4' })}><i className="bi bi-play-fill"></i></div>
                </div>
                <div className="project-info">
                  <h3>E-Commerce Platform</h3>
                  <p>Full-stack e-commerce solution with product listings, cart system, user authentication and order management.</p>
                  <div className="project-tech"><span>PHP</span><span>MySQL</span><span>HTML/CSS/JS</span></div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="project-card glass-panel h-100">
                <div className="project-media">
                  <video src="/video/prochatbot.mp4" muted loop className="project-video-preview" onMouseEnter={(e) => e.target.play()} onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}></video>
                  <div className="play-btn" onClick={() => setVideoModal({ open: true, src: '/video/prochatbot.mp4' })}><i className="bi bi-play-fill"></i></div>
                </div>
                <div className="project-info">
                  <h3>Cybersecurity Chatbot</h3>
                  <p>Real-time security chatbot handling threat simulations and vulnerability queries with interactive UI.</p>
                  <div className="project-tech"><span>HTML</span><span>CSS</span><span>JS</span></div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="project-card glass-panel h-100">
                <div className="project-media">
                  <img src="/img/p1.png" alt="Hotel Management" className="project-img-preview" />
                </div>
                <div className="project-info">
                  <h3>Hotel Management System</h3>
                  <p>Complete hotel management solution with room booking, guest management, and billing.</p>
                  <a href="/pdf/hotel%20management%20system%20design.pdf" download="Hotel_Management_System_Design.pdf" target="_blank" rel="noopener noreferrer" className="project-doc"><i className="bi bi-file-pdf"></i> View Design Doc</a>
                  <div className="project-tech mt-2"><span>PHP</span><span>MySQL</span><span>Bootstrap</span></div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="project-card glass-panel h-100">
                <div className="project-media">
                  <video src="/video/project fyp.mp4" muted loop className="project-video-preview" onMouseEnter={(e) => e.target.play()} onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}></video>
                  <div className="play-btn" onClick={() => setVideoModal({ open: true, src: '/video/project fyp.mp4' })}><i className="bi bi-play-fill"></i></div>
                </div>
                <div className="project-info">
                  <h3>SOC Dashboard (SIEM & SOAR)</h3>
                  <p>Security Operations Center dashboard with threat monitoring, event management and incident analysis.</p>
                  <a href="/pdf/api%20intergration%20soc%20dashboard%20fyp%20final%20report.pdf" download="SOC_Dashboard_FYP_Report.pdf" target="_blank" rel="noopener noreferrer" className="project-doc"><i className="bi bi-file-pdf"></i> FYP Report</a>
                  <div className="project-tech mt-2"><span>React</span><span>Node.js</span><span>Cybersecurity</span></div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="project-card glass-panel h-100">
                <div className="project-media">
                  <video src="/video/homemanagementsystem.mp4" muted loop className="project-video-preview" onMouseEnter={(e) => e.target.play()} onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}></video>
                  <div className="play-btn" onClick={() => setVideoModal({ open: true, src: '/video/homemanagementsystem.mp4' })}><i className="bi bi-play-fill"></i></div>
                </div>
                <div className="project-info p-3">
                  <h4>Home Management</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="project-card glass-panel h-100">
                <div className="project-media">
                  <video src="/video/indrive car web.mp4" muted loop className="project-video-preview" onMouseEnter={(e) => e.target.play()} onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}></video>
                  <div className="play-btn" onClick={() => setVideoModal({ open: true, src: '/video/indrive car web.mp4' })}><i className="bi bi-play-fill"></i></div>
                </div>
                <div className="project-info p-3">
                  <h4>InDrive Clone</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="project-card glass-panel h-100">
                <div className="project-media">
                  <video src="/video/malware detection.mp4" muted loop className="project-video-preview" onMouseEnter={(e) => e.target.play()} onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}></video>
                  <div className="play-btn" onClick={() => setVideoModal({ open: true, src: '/video/malware detection.mp4' })}><i className="bi bi-play-fill"></i></div>
                </div>
                <div className="project-info p-3">
                  <h4>Malware Detection</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* .NET DEV SECTION */}
        <section id="netdev" className="section">
          <div className="section-title-wrapper">
            <h2 className="section-title">.NET Development</h2>
            <div className="title-underline"></div>
          </div>

          <div className="netdev-internship-container mt-4">
            <div className="row gx-5">
              <div className="col-lg-5">
                <div className="intern-doc-wrapper">
                  <div className="verified-badge"><i className="bi bi-check-circle-fill"></i> Verified Internship</div>
                  <img src="/img/vgf.png" alt="Internship Document" className="intern-doc-img" />
                  <div className="company-footer">
                    <span><i className="bi bi-building"></i> Glosix SMC (PVT) LTD</span>
                    <span><i className="bi bi-calendar3"></i> Feb 2026 - Apr 2026</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="intern-details">
                  <div className="intern-header">
                    <div className="net-icon"><i className="bi bi-windows"></i></div>
                    <div>
                      <h3>.NET Development Internship</h3>
                      <p className="accent-text">Glosix Systems • Lahore, Pakistan • On-site</p>
                    </div>
                  </div>

                  <p className="intern-desc">
                    Completed a hands-on internship in .NET Development where I was exposed to and assisted in various aspects of software development using the .NET framework. Worked under the supervision of <strong>Captain Mubashir Hussain (Retired)</strong>, COO at Glosix SMC (PVT) LTD.
                  </p>

                  <h4 className="key-resp-title"><i className="bi bi-list-task"></i> KEY RESPONSIBILITIES & LEARNINGS</h4>
                  <ul className="custom-list">
                    <li>Understood fundamentals of .NET Framework and C# programming</li>
                    <li>Assisted in developing web applications using ASP.NET</li>
                    <li>Gained knowledge of MVC architecture and software development lifecycle</li>
                    <li>Worked with databases and basic SQL Server operations</li>
                    <li>Debugged, tested, and maintained code quality</li>
                    <li>Understood version control practices and team collaboration</li>
                    <li>Exposure to professional coding standards and development practices</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-md-6">
              <div className="project-card glass-panel h-100 p-4">
                <h4 className="mb-3 text-white"><i className="bi bi-receipt"></i> Invoice & Billing System (FM4G)</h4>
                <p className="text-muted">Desktop-grade billing and invoice management with database connectivity and PDF report generation.</p>
                <a href="/pdf/design%20fms.pdf" download="Invoice_Billing_System_Design.pdf" target="_blank" rel="noopener noreferrer" className="accent-text text-decoration-none"><i className="bi bi-file-pdf"></i> View Design Document</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="project-card glass-panel h-100 p-4">
                <h4 className="mb-3 text-white"><i className="bi bi-book"></i> Library Management System</h4>
                <p className="text-muted">Book inventory, member management, borrowing/return tracking system with search functionality.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section id="certifications" className="section">
          <div className="section-title-wrapper">
            <h2 className="section-title">Certifications & Awards</h2>
            <div className="title-underline"></div>
          </div>

          <div className="cert-grid">
            {['/img/cet1.png', '/img/harvard .png', '/img/cet2.png', '/img/cet3.png', '/img/cet5.png', '/img/cet6.png', '/img/cet7.png', '/img/cert8.png', '/img/cert9.png', '/img/vgf.png', '/img/lor.png', '/img/r1.png', '/img/r2.png', '/img/r3.png', '/img/tkd.png', '/img/tkd1.png'].map((src, idx) => (
              <div key={idx} className="cert-card" onClick={() => setImageModal({ open: true, src })}>
                <img src={src} alt="Certification" />
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="section">
          <div className="section-title-wrapper">
            <h2 className="section-title">Education</h2>
            <div className="title-underline"></div>
          </div>

          <div className="row g-4 mt-2">
            <div className="col-md-6">
              <div className="glass-panel p-4 h-100 border-top-accent">
                <h3 className="text-white mb-2">Bachelor of Science in Computer Science</h3>
                <h5 className="accent-text mb-3">University of Agriculture Faisalabad (Burewala)</h5>
                <p className="text-white-50 small mb-3"><i className="bi bi-calendar3"></i> 2022 - 2026</p>
                <p className="text-muted">Currently pursuing BSCS with focus on software development, database management, cybersecurity, and software quality assurance.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="glass-panel p-4 h-100 border-top-accent">
                <h3 className="text-white mb-2">Intermediate – ICS</h3>
                <h5 className="accent-text mb-3">DC Burewala</h5>
                <p className="text-white-50 small mb-3"><i className="bi bi-calendar3"></i> 2016 - 2021</p>
                <p className="text-muted">Completed Intermediate with Computer Science as major subject, building a strong foundation in programming and logic.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section">
          <div className="section-title-wrapper">
            <h2 className="section-title">Contact Me</h2>
            <div className="title-underline"></div>
          </div>

          <div className="row g-4 mt-2">
            <div className="col-lg-5">
              <div className="contact-grid">
                <div className="contact-item glass-panel">
                  <i className="bi bi-telephone-fill"></i>
                  <div>
                    <span>Phone</span>
                    <a href="tel:03027999442">+92 302 7999442</a>
                  </div>
                </div>
                <div className="contact-item glass-panel">
                  <i className="bi bi-envelope-fill"></i>
                  <div>
                    <span>Email</span>
                    <a href="mailto:sr9696015@gmail.com">sr9696015@gmail.com</a>
                  </div>
                </div>
                <div className="contact-item glass-panel">
                  <i className="bi bi-linkedin"></i>
                  <div>
                    <span>LinkedIn</span>
                    <a href="https://www.linkedin.com/in/rehmandevelopers/" target="_blank">rehmandevelopers</a>
                  </div>
                </div>
                <div className="contact-item glass-panel">
                  <i className="bi bi-github"></i>
                  <div>
                    <span>GitHub</span>
                    <a href="https://github.com/Digitalscribex" target="_blank">Digitalscribex</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="glass-panel p-4 p-md-5">
                <h3 className="text-white mb-4">Send a Message</h3>
                <form name="contact" method="POST" data-netlify="true" onSubmit={(e) => {
                  e.preventDefault()
                  const btn = e.target.querySelector('button[type="submit"]')
                  btn.innerHTML = 'Sending...'
                  const formData = new FormData(e.target)
                  fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams(formData).toString()
                  }).then(() => {
                    alert('Thank you! Your message has been sent.')
                    e.target.reset()
                  }).finally(() => {
                    btn.innerHTML = 'Send Message'
                  })
                }}>
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input type="text" name="name" className="custom-input" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6">
                      <input type="email" name="email" className="custom-input" placeholder="Your Email" required />
                    </div>
                    <div className="col-12">
                      <input type="text" name="subject" className="custom-input" placeholder="Subject" />
                    </div>
                    <div className="col-12">
                      <textarea name="message" className="custom-input" rows="5" placeholder="Message" required></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary w-100 mt-2">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <footer className="mt-5 pt-4 border-top border-secondary text-center text-muted small">
            © 2026 Muhammad Shoaib Ur Rehman. Built with React & Vite.
          </footer>
        </section>

      </main>

      {/* Modals */}
      {videoModal.open && (
        <div className="media-modal active" onClick={() => setVideoModal({ open: false, src: '' })}>
          <span className="close-modal">&times;</span>
          <video src={videoModal.src} controls autoPlay onClick={(e) => e.stopPropagation()}></video>
        </div>
      )}

      {imageModal.open && (
        <div className="media-modal active" onClick={() => setImageModal({ open: false, src: '' })}>
          <span className="close-modal">&times;</span>
          <img src={imageModal.src} alt="Modal" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  )
}

export default App
