import { Link } from 'react-router-dom'
import '../App.css'

const steps = [
  {
    title: '1. Create your workspace',
    description: 'Set up your account and choose your productivity goals so Rapid Resolve understands your priorities.',
    visual: '🧭',
  },
  {
    title: '2. Add your tasks',
    description: 'Enter deadlines, notes, and urgency so the system can build a clear plan around your real workload.',
    visual: '✅',
  },
  {
    title: '3. Follow the guided plan',
    description: 'Use the recommended next actions to stay ahead, reduce stress, and avoid last-minute scrambling.',
    visual: '⚡',
  },
]

function GuidedUse() {
  return (
    <main className="app-shell page-stack">
      <section className="section-heading">
        <span className="eyebrow">How to use Rapid Resolve</span>
        <h2>Simple guidance, clear steps, and a visual-first onboarding experience.</h2>
      </section>

      <section className="guide-grid">
        {steps.map((step) => (
          <article className="guide-card" key={step.title}>
            <div className="guide-visual" aria-hidden="true">{step.visual}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </section>

      <div className="page-cta">
        <Link to="/signup" className="primary-btn">
          Start your first workflow
        </Link>
      </div>
    </main>
  )
}

export default GuidedUse
