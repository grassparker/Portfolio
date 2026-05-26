import { Link } from 'react-router-dom'
import { FaGithub, FaXTwitter, FaInstagram, FaDiscord, FaThreads } from 'react-icons/fa6'
import './App.css'

function Home() {
  return (
    <>
      {/* --- HERO SECTION --- */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h1>Nazwell</h1>
          <p className="hero-subtitle">
            Hi, I'm Nazwell. I'm a <strong>student developer</strong> and <strong>music producer</strong> with a passion for learning and creating. 
            Currently diving deep into web development and SwiftUI, I love blending clean code with creative design to make a positive impact through technology.
          </p>
          
          {/* Main Action Button */}
          <div className="cta-container">
            <Link to="/projects">
              <button type="button" className="cta-button">
                View My Projects
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- TOOLKIT SECTION --- */}
      <section id="toolkit" className="toolkit-section">
        <h2>My Toolkit</h2>
        
        <div className="toolkit-container">
          {/* Frontend*/}
          <div className="toolkit-category">
            <h3>Frontend Development</h3>
            <div className="badge-group">
              <span className="tech-item">React</span>
              <span className="tech-item">Tailwind CSS</span>
            </div>
          </div>

          {/* Mac*/}
          <div className="toolkit-category">
            <h3>Apple & System Ecosystem</h3>
            <div className="badge-group">
              <span className="tech-item">Xcode</span>
              <span className="tech-item">Swift</span>
              <span className="tech-item">SwiftUI</span>
              <span className="tech-item">Terminal</span>
            </div>
          </div>

          {/* Audio Category */}
          <div className="toolkit-category">
            <h3>Audio & Sound Production</h3>
            <div className="badge-group">
              <span className="tech-item">GarageBand</span>
              <span className="tech-item">Soundscaping</span>
              <span className="tech-item">Mixing & Mastering</span>
            </div>
          </div>

          {/* Basic web */}
          <div className="toolkit-category">
            <h3>Foundations</h3>
            <div className="badge-group">
              <span className="tech-item">HTML5</span>
              <span className="tech-item">CSS3</span>
              <span className="tech-item">JavaScript (ES6+)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Socials Footer */}
      <footer id="socials-footer">
        <div className="socials-container">
          <p className="socials-text">Let's connect:</p>
          <div className="socials-links">
            <a href="https://github.com/grassparker" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub size={20} className="button-icon" />
            </a>
            <a href="https://x.com/grassparkker" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
              <FaXTwitter size={20} className="button-icon" />
            </a>
            <a href="https://www.instagram.com/grassparkker/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram size={20} className="button-icon" />
            </a>
            <a href="https://www.threads.com/@grassparkker" target="_blank" rel="noreferrer" aria-label="Threads">
              <FaThreads size={20} className="button-icon" />
            </a>
            <a href="https://discord.gg/4ABSHBb4vD" target="_blank" rel="noreferrer" aria-label="Discord">
              <FaDiscord size={20} className="button-icon" />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home