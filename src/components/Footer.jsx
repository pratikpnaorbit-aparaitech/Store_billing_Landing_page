import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}

        <div className="footer-brand">

          <h2>
            Smart<span>Billing</span>
          </h2>

          <p>
            Smart billing solutions designed to help your
            business grow faster and smarter.
          </p>

          <div className="social-icons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

          </div>

        </div>

        {/* Product */}

        <div className="footer-column">

          <h3>
            Product
          </h3>

          <a href="#features">
            Features
          </a>

          <a href="#pricing">
            Pricing
          </a>

          <a href="#analytics">
            Analytics
          </a>

          <a href="#features">
            Billing
          </a>

        </div>

        {/* Company */}

        <div className="footer-column">

          <h3>
            Company
          </h3>

          <a href="#about">
            About Us
          </a>

          <a href="#contact">
            Contact
          </a>

          <a href="#">
            Careers
          </a>

          <a href="#">
            Privacy Policy
          </a>

        </div>

        {/* Newsletter */}

        <div className="footer-newsletter">

          <h3>
            Stay Updated 🚀
          </h3>

          <p>
            Get the latest updates and smart business tips.
          </p>

          <div className="newsletter-box">

            <input
              type="email"
              placeholder="Your email address"
            />

            <button>
              →
            </button>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="footer-bottom">

        <p>
          © 2026 SmartBilling. All rights reserved.
        </p>

        <p>
          Made with ❤️ for smart businesses
        </p>

      </div>

    </footer>
  );
}

export default Footer;