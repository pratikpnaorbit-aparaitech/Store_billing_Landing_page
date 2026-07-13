import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-content">

          <span className="pricing-tag">
            📞 Contact Us
          </span>

          <h2>Let's Grow Your Business Together</h2>

          <p>
            Have questions about Smart Billing System?
            Contact our team and we'll help you choose the
            perfect solution for your business.
          </p>

          <div className="contact-info">

            <div className="info-box">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h4>Our Office</h4>
                <p>Pune, Maharashtra, India</p>
              </div>
            </div>

            <div className="info-box">
              <div className="info-icon">
                <FaPhoneAlt />
              </div>

              <div>
                <h4>Phone</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="info-box">
              <div className="info-icon">
                <FaEnvelope />
              </div>

              <div>
                <h4>Email</h4>
                <p>support@smartbilling.com</p>
              </div>
            </div>

          </div>

        </div>

        {/* Right Side Form */}
        <div className="contact-form">

          <form>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="text"
              placeholder="Business Name"
            />

            <textarea
              placeholder="Your Message"
            ></textarea>

            <button
              type="submit"
              className="contact-btn"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;