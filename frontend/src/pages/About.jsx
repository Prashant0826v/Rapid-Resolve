import { Link } from 'react-router-dom'
import '../App.css'

function About() {
  return (
    <main className="app-shell page-stack">
      <section className="section-heading">
        <span className="eyebrow">About the idea</span>
        <h2>Rapid Resolve is designed for the last-minute rush.</h2>
      </section>

      <section className="feature-grid large-grid">
        <article className="feature-card">
          <h3>The problem</h3>
          <p>People miss deadlines not only because they forget, but because they are overwhelmed by too many choices.</p>
        </article>
        <article className="feature-card">
          <h3>The solution</h3>
          <p>A proactive AI assistant that helps users decide what matters now and what can wait.</p>
        </article>
        <article className="feature-card">
          <h3>The impact</h3>
          <p>It turns productivity from reactive reminders into smarter, calmer action.</p>
        </article>
      </section>

      <div className="page-cta">
        <Link to="/" className="primary-btn">
          Back to home
        </Link>
      </div>
    </main>
  )
}

export default About
