import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <section id="center">
        <div className="hero">
        </div>
        <div>
          <h1>Nazwell</h1>
          <p>
            My name is Nazwell...I'm a student developer. I have a passion for learning and creating. I am currently learning web development and I'm excited to see where this journey takes me. I hope to create amazing things and make a positive impact on the world through technology.
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => alert("WELCOME!!!!!!!!")}
        >
          Click me
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Check out my socials!</h2>
          <ul>
            <li>
              <a href="https://github.com/grassparker" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://discord.gg/4ABSHBb4vD" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
