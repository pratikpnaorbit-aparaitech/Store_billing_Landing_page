import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Features.css";

import {
  FaFileInvoiceDollar,
  FaBoxes,
  FaUsers,
  FaChartLine,
  FaMobileAlt,
  FaCloud,
} from "react-icons/fa";

function Features() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      icon: <FaFileInvoiceDollar />,
      title: "Smart GST Billing",
      description:
        "Generate GST invoices quickly with automatic tax calculations.",

      details:
        "Create accurate GST invoices in seconds with automatic tax calculations. Smart Billing reduces manual work and helps you generate professional invoices faster.",

      benefits: [
        "Automatic GST calculations",
        "Professional GST invoices",
        "Fast invoice generation",
        "Easy invoice sharing",
      ],
    },

    {
      icon: <FaBoxes />,
      title: "Inventory Management",
      description:
        "Track stock levels, purchases, and sales in real time.",

      details:
        "Manage your complete inventory from one powerful dashboard. Track stock, purchases and sales in real time so you always know what is available.",

      benefits: [
        "Real-time stock tracking",
        "Low stock alerts",
        "Purchase management",
        "Sales inventory tracking",
      ],
    },

    {
      icon: <FaUsers />,
      title: "Customer Management",
      description:
        "Store customer details and purchase history securely.",

      details:
        "Keep all your customer information organized in one place. Easily access customer details and their complete purchase history whenever you need it.",

      benefits: [
        "Customer profiles",
        "Purchase history",
        "Customer tracking",
        "Secure customer data",
      ],
    },

    {
      icon: <FaChartLine />,
      title: "Business Reports",
      description:
        "View daily, monthly, and yearly sales reports instantly.",

      details:
        "Get powerful insights into your business performance with easy-to-understand reports and analytics.",

      benefits: [
        "Daily sales reports",
        "Monthly business reports",
        "Yearly performance reports",
        "Business insights",
      ],
    },

    {
      icon: <FaMobileAlt />,
      title: "Mobile Friendly",
      description:
        "Access your billing software from any device anytime.",

      details:
        "Manage your business from anywhere. Smart Billing works smoothly across mobile, tablet and desktop devices.",

      benefits: [
        "Mobile responsive",
        "Tablet support",
        "Desktop access",
        "Work from anywhere",
      ],
    },

    {
      icon: <FaCloud />,
      title: "Cloud Backup",
      description:
        "Keep your business data safe with secure cloud backup.",

      details:
        "Your important business data stays protected with secure cloud backup. Access your information whenever you need it.",

      benefits: [
        "Secure cloud backup",
        "Data protection",
        "Easy data access",
        "Reliable business storage",
      ],
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section id="features" className="features">

      <div className="container">

        <span className="section-tag">
          ✨ Features
        </span>

        <h2>
          Everything Your Business Needs
        </h2>

        <p className="section-text">
          Powerful billing software packed with smart features to simplify
          billing, inventory, reports, and customer management.
        </p>

        <div className="feature-grid">

          {features.map((feature, index) => (

            <div
              className="feature-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >

              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>
                {feature.title}
              </h3>

              <p>
                {feature.description}
              </p>

              <button
                className="feature-link"
                onClick={() => setSelectedFeature(feature)}
              >
                Learn More <span>→</span>
              </button>

            </div>

          ))}

        </div>

      </div>


      {/* FEATURE DETAILS POPUP */}

      {selectedFeature && (

        <div
          className="feature-modal-overlay"
          onClick={() => setSelectedFeature(null)}
        >

          <div
            className="feature-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="feature-modal-close"
              onClick={() => setSelectedFeature(null)}
            >
              ×
            </button>

            <div className="feature-modal-icon">
              {selectedFeature.icon}
            </div>

            <h2>
              {selectedFeature.title}
            </h2>

            <p className="feature-modal-details">
              {selectedFeature.details}
            </p>

            <h3>
              Key Benefits
            </h3>

            <div className="feature-benefits">

              {selectedFeature.benefits.map((benefit, index) => (

                <div
                  className="benefit-item"
                  key={index}
                >
                  <span>✓</span>
                  {benefit}
                </div>

              ))}

            </div>

            <button
              className="feature-modal-btn"
              onClick={() => setSelectedFeature(null)}
            >
              Explore Feature →
            </button>

          </div>

        </div>

      )}

    </section>
  );
}

export default Features;