import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <h1 className="logo">MyApp</h1>

      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : undefined)}>
          🏠 Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : undefined)}>
          ℹ️ About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : undefined)}>
          📞 Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
