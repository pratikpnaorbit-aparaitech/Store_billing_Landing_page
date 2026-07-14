import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Pricing.css";
import { FaCheckCircle } from "react-icons/fa";

function Pricing() {
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
    price: "₹0",
    duration: "/month",
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
    price: "₹749",
    duration: "/month",
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
    price: "₹1499",
    duration: "/month",
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
    price: "₹2999",
    duration: "/month",
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
    price: "₹4999",
    duration: "/month",
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
    price: "₹7999",
    duration: "/month",
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

      <div className="pricing-container">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={plan.popular ? "price-card popular" : "price-card"}
            data-aos={plan.popular ? "zoom-in" : "flip-left"}
            data-aos-delay={index * 200}
          >
            {plan.popular && (
              <div className="popular-badge">
                Most Popular
              </div>
            )}

            <h3>{plan.title}</h3>

            <div className="price">
              {plan.price}
              <span>{plan.duration}</span>
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

            <a href="#contact" className="price-btn">
              Get Started
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;