import { Link } from 'react-router-dom'
import '../App.css'

function Features() {
  return (
    <main className="app-shell page-stack">
      <section className="section-heading">
        <span className="eyebrow">Features</span>
        <h2>Everything needed to move from overwhelmed to organized.</h2>
      </section>

      <div className="feature-grid large-grid">
        <article className="feature-card">
          <h3>AI Task Prioritization</h3>
          <p>Instantly identifies what deserves attention first based on urgency and importance.</p>
        </article>
        <article className="feature-card">
          <h3>Smart Scheduling</h3>
          <p>Recommends a realistic plan for the day, week, or deadline window.</p>
        </article>
        <article className="feature-card">
          <h3>Personalized Productivity Tips</h3>
          <p>Offers suggestions that fit the user’s habits, workload, and pace.</p>
        </article>
        <article className="feature-card">
          <h3>Context-Aware Reminders</h3>
          <p>Reminds users at the right moment with better timing and less noise.</p>
        </article>
        <article className="feature-card">
          <h3>Calendar Integration</h3>
          <p>Helps users place deadlines and commitments into a manageable flow.</p>
        </article>
        <article className="feature-card">
          <h3>Goal and Habit Tracking</h3>
          <p>Turns big goals into small actions with clear momentum.</p>
        </article>
      </div>

      <div className="page-cta">
        <Link to="/demo" className="primary-btn">
          View the interactive demo
        </Link>
      </div>
    </main>
  )
}

export default Features
