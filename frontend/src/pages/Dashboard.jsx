import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Dashboard() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState({ title: '', description: '', priority: 'medium' })
  const [message, setMessage] = useState('')

  const fetchTasks = async () => {
    const response = await fetch('http://localhost:8000/api/tasks/', { credentials: 'include' })
    const data = await response.json()
    setTasks(data)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch('http://localhost:8000/api/tasks/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(newTask),
    })
    setNewTask({ title: '', description: '', priority: 'medium' })
    setMessage('Task saved')
    fetchTasks()
  }

  return (
    <main className="app-shell page-stack">
      <section className="section-heading">
        <span className="eyebrow">Your workspace</span>
        <h2>Track tasks and keep your workflow moving.</h2>
      </section>

      <section className="dashboard-grid">
        <form onSubmit={handleSubmit} className="auth-card dashboard-card">
          <h3>Add a task</h3>
          <input value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} placeholder="Task title" required />
          <textarea value={newTask.description} onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} placeholder="What needs to be done?" />
          <select value={newTask.priority} onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button type="submit" className="primary-btn">Save task</button>
          {message ? <p className="message-text">{message}</p> : null}
        </form>

        <div className="auth-card dashboard-card">
          <h3>Current tasks</h3>
          {tasks.length === 0 ? <p>No tasks yet.</p> : tasks.map((task) => (
            <div key={task.id} className="task-item">
              <div>
                <strong>{task.title}</strong>
                <span>{task.description || 'No notes'}</span>
              </div>
              <span className="task-badge">{task.priority}</span>
            </div>
          ))}
          <div className="page-cta">
            <Link to="/workflow" className="secondary-btn">See the workflow</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Dashboard
