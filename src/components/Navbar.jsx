import { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <a href="#home" className="logo">
          Smart<span>Billing</span>
        </a>

        {/* Navigation Links */}
        <ul className={menu ? "nav-links active" : "nav-links"}>
          <li>
            <a href="#home" onClick={() => setMenu(false)}>
              Home
            </a>
          </li>

          <li>
            <a href="#features" onClick={() => setMenu(false)}>
              Features
            </a>
          </li>

          <li>
            <a href="#about" onClick={() => setMenu(false)}>
              About
            </a>
          </li>

          <li>
            <a href="#pricing" onClick={() => setMenu(false)}>
              Pricing
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setMenu(false)}>
              Contact
            </a>
          </li>
        </ul>

        {/* Button */}
        <button className="nav-btn">
          Get Started
        </button>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={() => setMenu(!menu)}>
          {menu ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;