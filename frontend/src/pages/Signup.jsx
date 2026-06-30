import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'

function Signup() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ username: '', password: '', email: '' })
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:8000/api/signup/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(form),
      })
      const data = await response.json()
      setMessage(data.message || data.error || 'Done')
      if (response.ok) {
        navigate('/verify-signup', { state: { email: form.email, username: form.username, password: form.password } })
      }
    } catch (error) {
      setMessage('Signup failed')
    }
  }

  return (
    <main className="app-shell auth-shell">
      <section className="auth-card">
        <h2>Create your account</h2>
        <p>Join Rapid Resolve and start building a calmer, smarter workflow.</p>
        <form onSubmit={handleSubmit} className="auth-form">
          <input name="username" placeholder="Username" onChange={handleChange} value={form.username} required />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} value={form.email} />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} value={form.password} required />
          <button type="submit" className="primary-btn">Sign up</button>
        </form>
        {message ? <p className="message-text">{message}</p> : null}
        <p className="auth-link"><Link to="/login">Already have an account? Log in</Link></p>
      </section>
    </main>
  )
}

export default Signup
