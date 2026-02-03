import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <h1 className="logo">MySPA</h1>

      <nav>
        <NavLink to="/">🏠 Home</NavLink>
        <NavLink to="/about">ℹ️ About</NavLink>
        <NavLink to="/contact">📞 Contact</NavLink>
      </nav>
    </header>
  )
}

export default Navbar
