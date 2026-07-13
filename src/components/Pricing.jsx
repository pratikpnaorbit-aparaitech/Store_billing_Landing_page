import "./Pricing.css";
import { FaCheckCircle } from "react-icons/fa";

function Pricing() {
  const plans = [
    {
      title: "Basic",
      price: "₹499",
      duration: "/month",
      description: "Perfect for small shops",
      features: [
        "GST Billing",
        "Inventory Management",
        "100 Customers",
        "Sales Reports",
      ],
      popular: false,
    },
    {
      title: "Professional",
      price: "₹999",
      duration: "/month",
      description: "Best for growing businesses",
      features: [
        "Unlimited GST Billing",
        "Inventory + Barcode",
        "Unlimited Customers",
        "Advanced Reports",
        "Cloud Backup",
        "Priority Support",
      ],
      popular: true,
    },
    {
      title: "Enterprise",
      price: "₹1999",
      duration: "/month",
      description: "For large businesses",
      features: [
        "Everything in Professional",
        "Multi Branch",
        "Employee Management",
        "Custom Reports",
        "API Access",
        "24×7 Premium Support",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="pricing">

      <span className="pricing-tag">
        💳 Pricing Plans
      </span>

      <h2>Choose the Perfect Plan</h2>

      <p className="pricing-subtitle">
        Flexible pricing for every business. Upgrade anytime as your business grows.
      </p>

      <div className="pricing-container">

        {plans.map((plan, index) => (

          <div
            key={index}
            className={plan.popular ? "price-card popular" : "price-card"}
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
                  <FaCheckCircle color="#22c55e" /> {feature}
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