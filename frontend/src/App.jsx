import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Features from './pages/Features'
import GuidedUse from './pages/GuidedUse'
import Signup from './pages/Signup'
import VerifySignup from './pages/VerifySignup'
import Login from './pages/Login'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/guided-use" element={<GuidedUse />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-signup" element={<VerifySignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
