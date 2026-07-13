import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}
        <div className="footer-logo">

          <h2>
            Smart<span>Billing</span>
          </h2>

          <p>
            Smart Billing System helps retailers,
            wholesalers and businesses manage
            billing, inventory, GST invoices,
            customers and reports with ease.
          </p>

          <div className="footer-social">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

          </div>

        </div>

        {/* Quick Links */}
        <div className="footer-links">

          <h3>Quick Links</h3>

          <ul>

            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#features">Features</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#pricing">Pricing</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>

          </ul>

        </div>

        {/* Services */}
        <div className="footer-services">

          <h3>Services</h3>

          <ul>

            <li>
              <a href="#">GST Billing</a>
            </li>

            <li>
              <a href="#">Inventory</a>
            </li>

            <li>
              <a href="#">Reports</a>
            </li>

            <li>
              <a href="#">Cloud Backup</a>
            </li>

            <li>
              <a href="#">Customer Management</a>
            </li>

          </ul>

        </div>

        {/* Contact */}
        <div className="footer-contact">

          <h3>Contact</h3>

          <ul>

            <li>
              <FaMapMarkerAlt /> Pune, Maharashtra
            </li>

            <li>
              <FaPhoneAlt /> +91 98765 43210
            </li>

            <li>
              <FaEnvelope /> support@smartbilling.com
            </li>

          </ul>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Smart Billing System. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;