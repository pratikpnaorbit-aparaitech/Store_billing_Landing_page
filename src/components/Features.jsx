import {
  FaFileInvoiceDollar,
  FaChartLine,
  FaBoxOpen,
  FaUsers,
  FaShieldAlt,
  FaMobileAlt,
} from "react-icons/fa";

function Features() {
  return (
    <section className="features">

      <div className="section-title">
        <h2>Our Features</h2>
        <p>
          Everything you need to manage your business smarter.
        </p>
      </div>

      <div className="feature-grid">

        <div className="feature-card">
          <FaFileInvoiceDollar className="icon" />
          <h3>Smart Billing</h3>
          <p>
            Generate invoices instantly with GST support.
          </p>
        </div>

        <div className="feature-card">
          <FaChartLine className="icon" />
          <h3>Sales Analytics</h3>
          <p>
            Track daily, weekly and monthly sales reports.
          </p>
        </div>

        <div className="feature-card">
          <FaBoxOpen className="icon" />
          <h3>Inventory</h3>
          <p>
            Manage stock automatically and avoid shortages.
          </p>
        </div>

        <div className="feature-card">
          <FaUsers className="icon" />
          <h3>Customers</h3>
          <p>
            Store customer history and purchase details.
          </p>
        </div>

        <div className="feature-card">
          <FaShieldAlt className="icon" />
          <h3>Secure Data</h3>
          <p>
            Cloud backup with complete security.
          </p>
        </div>

        <div className="feature-card">
          <FaMobileAlt className="icon" />
          <h3>Mobile Friendly</h3>
          <p>
            Access your business anywhere on any device.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;