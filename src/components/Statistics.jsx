import "./Statistics.css";
import {
  FaUsers,
  FaFileInvoiceDollar,
  FaStore,
  FaChartLine,
} from "react-icons/fa";

function Statistics() {
  const stats = [
    {
      icon: <FaUsers />,
      number: "10K+",
      title: "Happy Customers",
    },
    {
      icon: <FaFileInvoiceDollar />,
      number: "5M+",
      title: "Invoices Generated",
    },
    {
      icon: <FaStore />,
      number: "2500+",
      title: "Businesses Using",
    },
    {
      icon: <FaChartLine />,
      number: "99.9%",
      title: "Uptime",
    },
  ];

  return (
    <section className="statistics">

      <div className="statistics-container">

        {stats.map((item, index) => (

          <div className="stat-card" key={index}>

            <div className="stat-icon">
              {item.icon}
            </div>

            <h2>{item.number}</h2>

            <p>{item.title}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Statistics;