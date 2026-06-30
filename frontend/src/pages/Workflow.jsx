import { Link } from 'react-router-dom'
import '../App.css'

function Workflow() {
  return (
    <main className="app-shell page-stack">
      <section className="section-heading">
        <span className="eyebrow">How it works</span>
        <h2>From plan to action in three simple steps.</h2>
      </section>

      <div className="feature-grid large-grid">
        <article className="feature-card">
          <h3>1. Create your account</h3>
          <p>Sign up and build your personal productivity workspace with your goals and deadlines.</p>
        </article>
        <article className="feature-card">
          <h3>2. Add your priorities</h3>
          <p>Upload or enter tasks, deadlines, and notes so the assistant understands what matters.</p>
        </article>
        <article className="feature-card">
          <h3>3. Follow the guided plan</h3>
          <p>Rapid Resolve recommends what to do next, helping you stay ahead instead of scrambling.</p>
        </article>
      </div>

      <div className="page-cta">
        <Link to="/signup" className="primary-btn">
          Start using Rapid Resolve
        </Link>
      </div>
    </main>
  )
}

export default Workflow
