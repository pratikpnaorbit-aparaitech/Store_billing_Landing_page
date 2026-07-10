import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-box">
          <h2>SmartBilling</h2>

          <p>
            Smart Billing helps businesses manage billing,
            inventory, customers and reports efficiently.
          </p>

          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaTwitter />
          </div>
        </div>

        {/* Quick Links */}

        <div className="footer-box">

          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Features</li>
            <li>About</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>

        </div>

        {/* Services */}

        <div className="footer-box">

          <h3>Services</h3>

          <ul>
            <li>Billing</li>
            <li>Inventory</li>
            <li>Reports</li>
            <li>GST Invoice</li>
            <li>Cloud Backup</li>
          </ul>

        </div>

        {/* Contact */}

        <div className="footer-box">

          <h3>Contact</h3>

          <p><FaMapMarkerAlt /> Pune, Maharashtra</p>

          <p><FaPhoneAlt /> +91 9876543210</p>

          <p><FaEnvelope /> support@smartbilling.com</p>

        </div>

      </div>

      <hr />

      <div className="copyright">
        © 2026 SmartBilling. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;