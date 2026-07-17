import { useState } from "react";
import "./Contact.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.business ||
      !formData.message
    ) {
      setSuccess("Please fill in all fields ⚠️");
      return;
    }

    setSuccess("Message sent successfully 🎉");

    setFormData({
      name: "",
      email: "",
      business: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-content">

          <span className="pricing-tag">
            📞 Contact Us
          </span>

          <h2>
            Let's Grow Your Business Together
          </h2>

          <p>
            Have questions about Smart Billing System?
            Contact our team and we'll help you choose the
            perfect solution for your business.
          </p>

          <div className="contact-info">
            <div className="info-box">
  <div className="info-icon">
    <FaWhatsapp />
  </div>

  <div>
    <h4>WhatsApp</h4>
    <p>+91 98765 43210</p>
  </div>
</div>

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

        {/* Right Side */}
        <div className="contact-form">

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="business"
              placeholder="Business Name"
              value={formData.business}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            {success && (
              <p className="contact-success">
                {success}
              </p>
            )}

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