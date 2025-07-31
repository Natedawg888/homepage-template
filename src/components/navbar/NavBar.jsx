import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; // or .module.css if you prefer CSS Modules
import placeholder from "../../assets/Avatar-white.png";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img
          src={placeholder}
          alt="My Company Logo"
          className="navbar-logo-img"
        />
        <span className="navbar-logo-text">My Company</span>
      </div>

      {/* Main menu (desktop + mobile dropdown) */}
      <ul className={`navbar-menu${open ? " open" : ""}`}>
        <li>
          <Link to="/menu1">Menu1</Link>
        </li>
        <li>
          <Link to="/menu2">Menu2</Link>
        </li>
        <li>
          <Link to="/menu3">Menu3</Link>
        </li>

        {/* Login inside the mobile dropdown */}
        <li className="navbar-login-mobile">
          <button className="navbar-login">Login</button>
        </li>
      </ul>

      {/* Desktop‐only Login button */}
      <button className="navbar-login desktop-only">Login</button>

      {/* Hamburger (mobile only) */}
      <button
        className="navbar-hamburger"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
    </nav>
  );
}
