import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheckCircle, FaShieldAlt } from "react-icons/fa";
import { fetchPublicPlans } from "../services/subscriptionApi";
import "./Pricing.css";

const FALLBACK_PLANS = [
  { id: "fallback-1", durationMonths: 1, amount: 1 },
  { id: "fallback-3", durationMonths: 3, amount: 2 },
  { id: "fallback-6", durationMonths: 6, amount: 3 },
];

function Pricing() {
  const [plans, setPlans] = useState(FALLBACK_PLANS);

  useEffect(() => {
    AOS.init({ duration: 850, once: true, offset: 80 });
    let active = true;
    fetchPublicPlans()
      .then((response) => {
        if (active && response.plans?.length) setPlans(response.plans);
      })
      .catch(() => {});
    return () => { active = false; };
  }, []);

  return (
    <section id="pricing" className="pricing">
      <span className="pricing-tag" data-aos="fade-down">Simple pricing</span>
      <h2 data-aos="fade-up">7 days free. Then choose your plan.</h2>
      <p className="pricing-subtitle" data-aos="fade-up">
        The complete Smart Billing experience in every plan. Prices shown here are controlled live by the administrator.
      </p>

      <div className="pricing-plan-grid" data-aos="zoom-in">
        {plans.map((plan) => (
          <article className="public-plan-card" key={plan.id}>
            {plan.durationMonths === 3 ? <span className="popular-plan">POPULAR</span> : null}
            <span>SMART BILLING</span>
            <h3>{plan.durationMonths} month{plan.durationMonths === 1 ? "" : "s"}</h3>
            <div className="public-plan-price">
              <strong>₹{Number(plan.amount).toLocaleString("en-IN")}</strong>
              <small>/ {plan.durationMonths === 1 ? "month" : `${plan.durationMonths} months`}</small>
            </div>
            <p>Recurring Razorpay billing begins only after your free trial ends.</p>
            <ul>
              {[
                "Unlimited GST billing",
                "Products and inventory",
                "Customer management",
                "Reports and receipts",
              ].map((feature) => <li key={feature}><FaCheckCircle />{feature}</li>)}
            </ul>
          </article>
        ))}
      </div>

      <div className="pricing-action" data-aos="fade-up">
        <div>
          <FaShieldAlt />
          <span>
            <strong>No payment during the 7-day trial</strong>
            <small>Register in the Smart Billing app to begin</small>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
