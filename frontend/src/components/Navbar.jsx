import { NavLink } from 'react-router-dom'
import '../App.css'

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="brand">
        Rapid Resolve
      </NavLink>
      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/features">Features</NavLink>
        <NavLink to="/guided-use">How to use</NavLink>
        <NavLink to="/signup">Sign up</NavLink>
        <NavLink to="/login">Log in</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
