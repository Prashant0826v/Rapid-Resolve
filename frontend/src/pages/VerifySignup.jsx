import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import '../App.css'

function VerifySignup() {
  const location = useLocation()
  const email = location.state?.email || ''
  const [otp, setOtp] = useState('')
  const [message, setMessage] = useState('')
  const [form, setForm] = useState({ username: location.state?.username || '', password: location.state?.password || '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:8000/api/verify-signup/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, otp, username: form.username, password: form.password }),
      })
      const data = await response.json()
      setMessage(data.message || data.error || 'Verification complete')
    } catch (error) {
      setMessage('Verification failed')
    }
  }

  return (
    <main className="app-shell auth-shell">
      <section className="auth-card">
        <h2>Verify your email</h2>
        <p>We sent a secure one-time code to {email || 'your inbox'}.</p>
        <form onSubmit={handleSubmit} className="auth-form">
          <input placeholder="6-digit OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required />
          <button type="submit" className="primary-btn">Verify account</button>
        </form>
        {message ? <p className="message-text">{message}</p> : null}
        <p className="auth-link"><Link to="/login">Already verified? Log in</Link></p>
      </section>
    </main>
  )
}

export default VerifySignup
