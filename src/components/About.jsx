import "./About.css";
import { FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=700"
            alt="Smart Billing"
          />
        </div>

        <div className="about-content">

          <span className="about-tag">
            About Us
          </span>

          <h2>
            Simplify Your Business Billing with Smart Technology
          </h2>

          <p>
            Smart Billing System is designed to help retailers,
            wholesalers, supermarkets and businesses manage
            billing, inventory, GST invoices and reports from
            one powerful dashboard.
          </p>

          <ul className="about-list">

            <li>
              <FaCheckCircle color="#2563eb" />
              Fast GST Invoice Generation
            </li>

            <li>
              <FaCheckCircle color="#2563eb" />
              Real-Time Inventory Tracking
            </li>

            <li>
              <FaCheckCircle color="#2563eb" />
              Customer & Supplier Management
            </li>

            <li>
              <FaCheckCircle color="#2563eb" />
              Daily & Monthly Reports
            </li>

            <li>
              <FaCheckCircle color="#2563eb" />
              Secure Cloud Backup
            </li>

          </ul>

          <a href="#pricing" className="about-btn">
            Explore Plans
          </a>

        </div>

      </div>
    </section>
  );
}

export default About;