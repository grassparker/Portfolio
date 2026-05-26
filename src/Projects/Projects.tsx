import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { LuPlay } from 'react-icons/lu'
import './Projects.css'
import projectList from './projectList.json'

function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2>Selected Works</h2>
        <p>A collection of applications/websites I've built and sonic environments I've designed.</p>
      </div>

      <div className="projects-grid">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <span className="project-category">{project.category}</span>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            {/* Tags */}
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="project-tag-badge">{tag}</span>
              ))}
            </div>

            {/* Project Origin */}
            <div className="go-to-project">
              {project.isApp && (
                <>
                  <Link to={project.links.github} target="_blank" rel="noreferrer" className="source view-app-link">
                    <FaGithub /> Source
                  </Link>
                </>
              )}

              {project.isAudio && (
                <Link to={project.links.audio} target="_blank" rel="noreferrer" className="source view-app-link audio">
                  <LuPlay /> Listen to Track
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="back-to-home">
        <Link to="/" className="source text-link">
          ← Back to Home
        </Link>
      </div>
    </section>
  )
}

export default Projects