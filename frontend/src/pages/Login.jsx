import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Login() {
  const [form, setForm] = useState({ username: '', password: '' })
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(form),
      })
      const data = await response.json()
      setMessage(data.message || data.error || 'Done')
    } catch (error) {
      setMessage('Login failed')
    }
  }

  return (
    <main className="app-shell auth-shell">
      <section className="auth-card">
        <h2>Welcome back</h2>
        <p>Log in to continue your guided workflow.</p>
        <form onSubmit={handleSubmit} className="auth-form">
          <input name="username" placeholder="Username" onChange={handleChange} value={form.username} required />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} value={form.password} required />
          <button type="submit" className="primary-btn">Log in</button>
        </form>
        {message ? <p className="message-text">{message}</p> : null}
        <p className="auth-link"><Link to="/signup">Need an account? Sign up</Link></p>
      </section>
    </main>
  )
}

export default Login
