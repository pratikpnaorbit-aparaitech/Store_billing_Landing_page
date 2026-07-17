import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Pricing.css";
import { FaCheckCircle } from "react-icons/fa";

function Pricing() {
  const [billing, setBilling] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [signupSuccess, setSignupSuccess] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const plans = [
    {
      title: "Free",
      monthly: 0,
      yearly: 0,
      description: "Perfect for beginners",
      features: [
        "GST Billing",
        "50 Products",
        "50 Customers",
        "Basic Reports",
      ],
      popular: false,
    },
    {
      title: "Standard",
      monthly: 749,
      yearly: 599,
      description: "Best for small businesses",
      features: [
        "Unlimited Billing",
        "Inventory Management",
        "Barcode Support",
        "Sales Reports",
        "1000 Customers",
      ],
      popular: false,
    },
    {
      title: "Professional",
      monthly: 1499,
      yearly: 1199,
      description: "Most Popular Plan",
      features: [
        "Everything in Standard",
        "Cloud Backup",
        "Advanced Reports",
        "Unlimited Customers",
        "Priority Support",
      ],
      popular: true,
    },
    {
      title: "Premium",
      monthly: 2999,
      yearly: 2399,
      description: "For growing businesses",
      features: [
        "Everything in Professional",
        "Multi Branch",
        "Employee Management",
        "Analytics Dashboard",
        "WhatsApp Invoice",
      ],
      popular: false,
    },
    {
      title: "Elite",
      monthly: 4999,
      yearly: 3999,
      description: "Advanced business solution",
      features: [
        "Everything in Premium",
        "Custom Reports",
        "Role Management",
        "API Access",
        "Dedicated Support",
      ],
      popular: false,
    },
    {
      title: "Ultimate",
      monthly: 7999,
      yearly: 6399,
      description: "Complete enterprise solution",
      features: [
        "Unlimited Everything",
        "Multi Company",
        "AI Reports",
        "Custom Integrations",
        "24×7 Premium Support",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="pricing">

      <span
        className="pricing-tag"
        data-aos="fade-down"
      >
        💳 Pricing Plans
      </span>

      <h2 data-aos="fade-up">
        Choose the Perfect Plan
      </h2>

      <p
        className="pricing-subtitle"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Flexible pricing for every business. Upgrade anytime as your
        business grows.
      </p>

      {/* Billing Toggle */}

      <div
        className="billing-toggle"
        data-aos="fade-up"
      >

        <button
          className={billing === "monthly" ? "active" : ""}
          onClick={() => setBilling("monthly")}
        >
          Monthly
        </button>

        <button
          className={billing === "yearly" ? "active" : ""}
          onClick={() => setBilling("yearly")}
        >
          Yearly

          <span className="save-badge">
            Save 20%
          </span>
        </button>

      </div>

      {/* Pricing Cards */}

      <div className="pricing-container">

        <div className="pricing-track">

          {[...plans, ...plans].map((plan, index) => (

            <div
              key={index}
              className={
                plan.popular
                  ? "price-card popular"
                  : "price-card"
              }
            >

              {plan.popular && (
                <div className="popular-badge">
                  Most Popular
                </div>
              )}

              <h3>
                {plan.title}
              </h3>

              <div
                className={`price ${
                  billing === "yearly"
                    ? "yearly-price"
                    : ""
                }`}
              >

                ₹
                {billing === "monthly"
                  ? plan.monthly
                  : plan.yearly}

                <span>
                  /month
                </span>

              </div>

              <p className="price-desc">
                {plan.description}
              </p>

              <ul className="price-features">

                {plan.features.map((feature, i) => (

                  <li key={i}>

                    <FaCheckCircle color="#22c55e" />

                    {" "}

                    {feature}

                  </li>

                ))}

              </ul>

              <button
                className="price-btn"
                onClick={() => setSelectedPlan(plan)}
              >
                Get Started →
              </button>

            </div>

          ))}

        </div>

      </div>

      {/* Signup Popup */}

      {selectedPlan && (

        <div
          className="signup-overlay"
          onClick={() => setSelectedPlan(null)}
        >

          <div
            className="signup-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="signup-close"
              onClick={() => setSelectedPlan(null)}
            >
              ×
            </button>

            <div className="signup-logo">
              SmartBilling
            </div>

            <h2>
              Start Your Smart Journey 🚀
            </h2>

            <p className="signup-subtitle">
              Start with the {selectedPlan.title} plan
            </p>

            <div className="selected-plan">

              <span>
                Selected Plan
              </span>

              <strong>
                {selectedPlan.title}
              </strong>

              <b>

                ₹
                {billing === "monthly"
                  ? selectedPlan.monthly
                  : selectedPlan.yearly}

                <small>
                  /month
                </small>

              </b>

            </div>

            <input
              type="text"
              placeholder="Business Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="password"
              placeholder="Create Password"
            />

            <button
              className="signup-submit"
              onClick={() => setSignupSuccess(true)}
            >
              Start Free Trial →
            </button>

            <p className="signup-note">
              🔒 Your information is safe and secure
            </p>

            {signupSuccess && (

              <div className="success-screen">

                <div className="success-icon">
                  ✓
                </div>

                <h2>
                  You're All Set! 🎉
                </h2>

                <p>
                  Your {selectedPlan.title} plan has been selected successfully.
                </p>

                <button
                  className="success-btn"
                  onClick={() => {
                    setSignupSuccess(false);
                    setSelectedPlan(null);
                  }}
                >
                  Continue to SmartBilling →
                </button>

              </div>

            )}

          </div>

        </div>

      )}

    </section>
  );
}

export default Pricing;