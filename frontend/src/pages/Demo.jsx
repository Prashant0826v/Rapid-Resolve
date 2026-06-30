import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const tasks = [
  { title: 'Prepare client pitch', deadline: 'Today · 4:00 PM', impact: 'High' },
  { title: 'Review expenses', deadline: 'Tomorrow · 11:00 AM', impact: 'Medium' },
  { title: 'Plan weekly goals', deadline: 'Friday · 6:00 PM', impact: 'Low' },
]

function Demo() {
  const [priority, setPriority] = useState('Submit budget proposal')

  const handlePrioritize = () => {
    const highest = [...tasks].sort((a, b) => {
      const score = { High: 3, Medium: 2, Low: 1 }
      return score[b.impact] - score[a.impact]
    })[0]
    setPriority(highest.title)
  }

  return (
    <main className="app-shell page-stack">
      <section className="section-heading">
        <span className="eyebrow">Interactive demo</span>
        <h2>See how Rapid Resolve surfaces the next best action.</h2>
      </section>

      <section className="demo-card demo-layout">
        <div className="demo-copy">
          <h2>Start with the task that matters most.</h2>
          <p>Our assistant evaluates urgency, impact, and effort to recommend what to focus on next.</p>
          <div className="recommendation-box">
            <p>Current recommendation</p>
            <h3>{priority}</h3>
          </div>
        </div>

        <div className="demo-panel">
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
          <button type="button" className="primary-btn" onClick={handlePrioritize}>
            Let AI prioritize
          </button>
        </div>
      </section>

      <div className="page-cta">
        <Link to="/about" className="secondary-btn">
          Learn more about the idea
        </Link>
      </div>
    </main>
  )
}

export default Demo
