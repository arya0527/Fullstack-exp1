import React from 'react'
import './App.css'
import aryaImg from './assets/arya.svg'

function App() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Git']

  return (
    <div className="app-root">
      {/* Navbar */}
      <header className="site-nav">
        <div className="nav-inner">
          <h1 className="brand">My Portfolio</h1>
          <nav className="nav-links">
            <a href="#profile">Profile</a>
            <a href="#skills">Skills</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero / Profile */}
        <section id="profile" className="hero">
          <div className="profile-card">
            <img
              src={aryaImg}
              alt="Arya Bhat"
              className="profile-img"
            />
            <h2 className="profile-name">Arya Bhat</h2>
            <p className="profile-role">
              Frontend Developer | React Learner
            </p>
            <p className="profile-bio">
              I am a passionate frontend developer focused on building clean,
              responsive, and user-friendly web applications using React.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="skills-section">
          <h2 className="skills-title">My Skills</h2>
          <div className="skills-list">
            {skills.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        © {new Date().getFullYear()} Arya Bhat. All rights reserved.
      </footer>
    </div>
  )
}

export default App
