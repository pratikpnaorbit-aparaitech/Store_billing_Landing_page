import { useEffect } from "react";
import "./Statistics.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaUsers,
  FaFileInvoiceDollar,
  FaStore,
  FaChartLine,
} from "react-icons/fa";

function Statistics() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

 const stats = [
    {
      icon: <FaUsers />,
      number: 10000,
      suffix: "+",
      title: "Happy Customers",
    },
    {
      icon: <FaFileInvoiceDollar />,
      number: 5000000,
      suffix: "+",
      title: "Invoices Generated",
    },
    {
      icon: <FaStore />,
      number: 2500,
      suffix: "+",
      title: "Businesses Using",
    },
    {
      icon: <FaChartLine />,
      number: 99.9,
      suffix: "%",
      title: "Uptime",
    },
  ];

  return (
    <section className="statistics">
      <div className="stats-overlay"></div>

      <div className="container">

        <span
          className="stats-tag"
          data-aos="fade-down"
        >
          📊 Statistics
        </span>

        <h2
          className="stats-heading"
          data-aos="fade-up"
        >
          Trusted By Thousands Of Businesses
        </h2>

        <p
          className="stats-subtitle"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Smart Billing Software helping businesses manage
          billing, inventory and sales effortlessly.
        </p>

        <div className="stats-grid">

          {stats.map((item, index) => (

            <div
              key={index}
              className="stat-card"
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
            >

              <div className="stat-icon">
                {item.icon}
              </div>

              <h3>
  {item.number}
  {item.suffix}
</h3>

              <p>{item.title}</p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Statistics;