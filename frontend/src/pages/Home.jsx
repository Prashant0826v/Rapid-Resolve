import { Link } from 'react-router-dom'
import '../App.css'

const tasks = [
  {
    title: 'Submit budget proposal',
    deadline: 'Today · 6:00 PM',
    impact: 'High',
    effort: '30 min',
  },
  {
    title: 'Prepare interview notes',
    deadline: 'Tomorrow · 9:00 AM',
    impact: 'Medium',
    effort: '20 min',
  },
  {
    title: 'Review onboarding checklist',
    deadline: 'Friday · 5:00 PM',
    impact: 'Low',
    effort: '15 min',
  },
]

function Home() {
  return (
    <main className="app-shell">
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">AI Productivity Companion</span>
          <h1>Rapid Resolve helps you act before deadlines slip away.</h1>
          <p>
            Instead of passive reminders, our assistant prioritizes work, suggests the next best move,
            and keeps your day on track.
          </p>
          <div className="hero-actions">
            <Link to="/demo" className="primary-btn">
              See the demo
            </Link>
            <Link to="/features" className="secondary-btn">
              Explore features
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-header">
            <p>Today’s focus</p>
            <span className="status-pill">Live AI insight</span>
          </div>
          <h2>Submit budget proposal</h2>
          <div className="metric-grid">
            <div>
              <strong>Deadline</strong>
              <span>Today · 6:00 PM</span>
            </div>
            <div>
              <strong>Priority</strong>
              <span>High</span>
            </div>
            <div>
              <strong>Effort</strong>
              <span>30 min</span>
            </div>
          </div>
          <div className="recommendation-box">
            <p>Suggested next action</p>
            <h3>Start with the task that matters most and finish it first.</h3>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-heading">
          <span className="eyebrow">Why it stands out</span>
          <h2>Built for people who need action, not just alerts.</h2>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <h3>Smart prioritization</h3>
            <p>AI ranks tasks by urgency, impact, and time needed.</p>
          </article>
          <article className="feature-card">
            <h3>Adaptive scheduling</h3>
            <p>It recommends the best time to tackle each task.</p>
          </article>
          <article className="feature-card">
            <h3>Context-aware reminders</h3>
            <p>Notifications are delivered when action is actually needed.</p>
          </article>
        </div>
      </section>

      <section className="preview-strip">
        <div>
          <h3>3 tasks, 1 clear recommendation</h3>
          <p>Rapid Resolve turns noisy to-do lists into a calm action plan.</p>
        </div>
        <Link to="/demo" className="primary-btn">
          Try the experience
        </Link>
      </section>

      <section className="task-preview">
        <h3>Sample task list</h3>
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.title} className="task-item">
              <div>
                <strong>{task.title}</strong>
                <span>{task.deadline}</span>
              </div>
              <span className="task-badge">{task.impact}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Home
