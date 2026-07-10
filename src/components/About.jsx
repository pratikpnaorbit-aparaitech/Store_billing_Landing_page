import { FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <section className="about">

      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop"
          alt="About Smart Billing"
        />
      </div>

      <div className="about-content">

        <span className="about-tag">
          Why Choose Us
        </span>

        <h2>
          Complete Smart Billing Solution For Every Business
        </h2>

        <p>
          Manage billing, customers, inventory and reports from one
          powerful dashboard. Save time, reduce mistakes and grow your
          business faster.
        </p>

        <div className="about-list">

          <div>
            <FaCheckCircle className="check" />
            Fast Invoice Generation
          </div>

          <div>
            <FaCheckCircle className="check" />
            Inventory Management
          </div>

          <div>
            <FaCheckCircle className="check" />
            Sales Reports & Analytics
          </div>

          <div>
            <FaCheckCircle className="check" />
            Secure Cloud Backup
          </div>

        </div>

        <button className="primary">
          Learn More
        </button>

      </div>

    </section>
  );
}

export default About;