import { useState } from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
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

       

          <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    setShowPrivacy(true);
  }}
>
  Privacy Policy
</a>
         <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    setShowTerms(true);
  }}
>
  Terms & Conditions
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

  <div className="legal-links">

    <a href="#">
      Privacy Policy
    </a>

    <span>|</span>

    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        setShowTerms(true);
      }}
    >
      Terms & Conditions
    </a>

  </div>

  <p>
    Made with ❤️ for smart businesses
  </p>

</div>
{showTerms && (
  <div
    className="terms-overlay"
    onClick={() => setShowTerms(false)}
  >
    <div
      className="terms-modal"
      onClick={(e) => e.stopPropagation()}
    >

      <button
        className="terms-close"
        onClick={() => setShowTerms(false)}
      >
        ×
      </button>

      <div className="terms-logo">
        Smart<span>Billing</span>
      </div>

      <h2>
        Terms & Conditions
      </h2>

      <p className="terms-intro">
        Please read these terms carefully before using SmartBilling.
      </p>

      <div className="terms-content">

        <h3>1. Acceptance of Terms</h3>

        <p>
          By accessing and using SmartBilling, you agree to follow
          these Terms & Conditions and all applicable laws.
        </p>

        <h3>2. Use of Our Service</h3>

        <p>
          SmartBilling is designed to help businesses manage billing,
          inventory, customers, and business reports efficiently.
        </p>

        <h3>3. User Responsibility</h3>

        <p>
          Users are responsible for maintaining the accuracy and
          security of their account information.
        </p>

        <h3>4. Data & Security</h3>

        <p>
          We take reasonable steps to protect your business information
          and maintain a secure platform.
        </p>

        <h3>5. Service Updates</h3>

        <p>
          SmartBilling may improve, update, or modify its services
          from time to time.
        </p>

      </div>

      <button
        className="terms-btn"
        onClick={() => setShowTerms(false)}
      >
        I Understand
      </button>

    </div>
  </div>
)}
{showPrivacy && (
  <div
    className="terms-overlay"
    onClick={() => setShowPrivacy(false)}
  >
    <div
      className="terms-modal"
      onClick={(e) => e.stopPropagation()}
    >

      <button
        className="terms-close"
        onClick={() => setShowPrivacy(false)}
      >
        ×
      </button>

      <div className="terms-logo">
        Smart<span>Billing</span>
      </div>

      <h2>
        Privacy Policy
      </h2>

      <p className="terms-intro">
        Your privacy and business data security are important to us.
      </p>

      <div className="terms-content">

        <h3>1. Information We Collect</h3>

        <p>
          We may collect basic information such as your name, email
          address, and business details when you use our services.
        </p>

        <h3>2. How We Use Your Information</h3>

        <p>
          Your information helps us provide, improve, and personalize
          the SmartBilling experience.
        </p>

        <h3>3. Data Security</h3>

        <p>
          We take reasonable security measures to protect your business
          information from unauthorized access.
        </p>

        <h3>4. Your Information</h3>

        <p>
          We respect your privacy and do not sell your personal
          information to third parties.
        </p>

        <h3>5. Policy Updates</h3>

        <p>
          This Privacy Policy may be updated from time to time to
          reflect improvements in our services.
        </p>

      </div>

      <button
        className="terms-btn"
        onClick={() => setShowPrivacy(false)}
      >
        I Understand
      </button>

    </div>
  </div>
)}
    </footer>
  );
}

export default Footer;