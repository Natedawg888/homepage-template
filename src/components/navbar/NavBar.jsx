import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; // or .module.css if you prefer CSS Modules

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* replace /logo.svg with your actual logo path */}
        <img
          src="/logo.svg"
          alt="My Company Logo"
          className="navbar-logo-img"
        />
        <span className="navbar-logo-text">My Company</span>
      </div>

      <ul className="navbar-menu">
        <li>
          <Link to="/menu1">Menu1</Link>
        </li>
        <li>
          <Link to="/menu2">Menu2</Link>
        </li>
        <li>
          <Link to="/menu3">Menu3</Link>
        </li>
      </ul>

      <button className="navbar-login">Login</button>
    </nav>
  );
}
