import { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ onAdmin }) {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
   <nav className={scrolled ? "navbar scrolled" : "navbar"}>
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
          <li className="mobile-admin-link">
            <button onClick={() => { setMenu(false); onAdmin(); }}>
              Admin Panel
            </button>
          </li>

        </ul>

        {/* Admin Panel */}
        <button
          className="nav-btn"
          onClick={() => {
            setMenu(false);
            onAdmin();
          }}
        >
          Admin Panel
        </button>

        {/* Mobile Menu */}
        <div
          className="menu-icon"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
