import { FaRupeeSign, FaShoppingCart, FaUsers } from "react-icons/fa";

function Analytics() {
  return (
    <section className="analytics">

      <div className="analytics-left">

        <span className="about-tag">Analytics</span>

        <h2>Grow Your Business With Smart Analytics</h2>

        <p>
          Monitor your sales, customers, orders and revenue in one
          powerful dashboard with real-time insights.
        </p>

        <button className="primary">View Dashboard</button>

      </div>

      <div className="analytics-right">

        <div className="stats-card">
          <FaRupeeSign className="stats-icon" />
          <h3>₹5.4L</h3>
          <p>Total Revenue</p>
        </div>

        <div className="stats-card">
          <FaShoppingCart className="stats-icon" />
          <h3>1,250</h3>
          <p>Orders</p>
        </div>

        <div className="stats-card">
          <FaUsers className="stats-icon" />
          <h3>890</h3>
          <p>Customers</p>
        </div>

      </div>

    </section>
  );
}

export default Analytics;