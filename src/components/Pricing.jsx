import { FaCheckCircle } from "react-icons/fa";

function Pricing() {
  return (
    <section className="pricing" id="pricing">

      <div className="section-title">
        <h2>Choose Your Plan</h2>
        <p>Flexible pricing for every business.</p>
      </div>

      <div className="pricing-grid">

        <div className="price-card">
          <h3>Basic</h3>
          <h1>₹499</h1>
          <span>/month</span>

          <ul>
            <li><FaCheckCircle /> Billing</li>
            <li><FaCheckCircle /> Inventory</li>
            <li><FaCheckCircle /> Customer Records</li>
            <li><FaCheckCircle /> Email Support</li>
          </ul>

          <button>Choose Plan</button>
        </div>

        <div className="price-card popular">
          <div className="badge">Most Popular</div>

          <h3>Professional</h3>
          <h1>₹999</h1>
          <span>/month</span>

          <ul>
            <li><FaCheckCircle /> Unlimited Billing</li>
            <li><FaCheckCircle /> GST Reports</li>
            <li><FaCheckCircle /> Inventory</li>
            <li><FaCheckCircle /> Analytics</li>
            <li><FaCheckCircle /> Priority Support</li>
          </ul>

          <button>Choose Plan</button>
        </div>

        <div className="price-card">
          <h3>Enterprise</h3>
          <h1>₹1999</h1>
          <span>/month</span>

          <ul>
            <li><FaCheckCircle /> Everything Included</li>
            <li><FaCheckCircle /> Multi Store</li>
            <li><FaCheckCircle /> Cloud Backup</li>
            <li><FaCheckCircle /> Team Access</li>
          </ul>

          <button>Choose Plan</button>
        </div>

      </div>

    </section>
  );
}

export default Pricing;