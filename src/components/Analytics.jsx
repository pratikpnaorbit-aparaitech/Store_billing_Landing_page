import "./Analytics.css";
import {
  FaChartLine,
  FaUsers,
  FaBoxes,
  FaRupeeSign,
} from "react-icons/fa";

function Analytics() {
  const stats = [
    {
      icon: <FaRupeeSign />,
      number: "₹12.5L+",
      title: "Monthly Sales",
    },
    {
      icon: <FaUsers />,
      number: "10K+",
      title: "Happy Customers",
    },
    {
      icon: <FaBoxes />,
      number: "5K+",
      title: "Products Managed",
    },
    {
      icon: <FaChartLine />,
      number: "99.9%",
      title: "System Accuracy",
    },
  ];

  return (
    <section className="analytics">
      <div className="analytics-container">

        <div className="analytics-content">

          <span className="analytics-tag">
            📊 Analytics
          </span>

          <h2>
            Grow Your Business with Smart Analytics
          </h2>

          <p>
            Get complete insights into your sales, inventory,
            customers, profits and business performance with
            easy-to-understand reports.
          </p>

          <div className="analytics-stats">

            {stats.map((item, index) => (

              <div className="analytics-card" key={index}>

                <div className="step-icon">
                  {item.icon}
                </div>

                <h3>{item.number}</h3>

                <p>{item.title}</p>

              </div>

            ))}

          </div>

          <a href="#pricing" className="analytics-btn">
            View Pricing →
          </a>

        </div>

        <div className="analytics-image">

          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
            alt="Analytics Dashboard"
          />

        </div>

      </div>
    </section>
  );
}

export default Analytics;