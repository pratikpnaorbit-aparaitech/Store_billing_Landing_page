import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="section-title">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you.</p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <div className="info-box">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h3>Address</h3>
              <p>Pune, Maharashtra, India</p>
            </div>
          </div>

          <div className="info-box">
            <FaPhoneAlt className="contact-icon" />
            <div>
              <h3>Phone</h3>
              <p>+91 9876543210</p>
            </div>
          </div>

          <div className="info-box">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p>support@smartbilling.com</p>
            </div>
          </div>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;