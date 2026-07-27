import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheckCircle, FaShieldAlt } from "react-icons/fa";
import "./Pricing.css";

function Pricing() {
  useEffect(() => {
    AOS.init({ duration: 850, once: true, offset: 80 });
  }, []);

  return (
    <section id="pricing" className="pricing">
      <span className="pricing-tag" data-aos="fade-down">Simple pricing</span>
      <h2 data-aos="fade-up">7 days free. Then ₹300/month.</h2>
      <p className="pricing-subtitle" data-aos="fade-up">
        One complete plan for every Smart Billing user. No feature tiers and no surprise charges.
      </p>

      <div className="single-price-card" data-aos="zoom-in">
        <div className="trial-ribbon">7-DAY FREE TRIAL</div>
        <div className="single-price-copy">
          <span>SMART BILLING MONTHLY</span>
          <h3><strong>₹300</strong><small>/month</small></h3>
          <p>Your trial starts automatically after verified registration in the mobile app. Payment is required only after day 7.</p>
        </div>
        <ul>
          {[
            "Unlimited GST billing",
            "Products and inventory",
            "Customer management",
            "Reports and printable receipts",
            "Secure cloud account",
            "Automatic recurring payment via Razorpay",
          ].map((feature) => <li key={feature}><FaCheckCircle />{feature}</li>)}
        </ul>
        <div className="pricing-action">
          <div><FaShieldAlt /><span><strong>No payment during trial</strong><small>Register in the Smart Billing app to begin</small></span></div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
