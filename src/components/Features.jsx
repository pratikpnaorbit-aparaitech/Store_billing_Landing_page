import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Features.css";

import {
  FaFileInvoiceDollar,
  FaBoxes,
  FaUsers,
  FaChartLine,
  FaMobileAlt,
  FaCloud,
} from "react-icons/fa";


function Features() {

  const features = [
    {
      icon: <FaFileInvoiceDollar />,
      title: "Smart GST Billing",
      description:
        "Generate GST invoices quickly with automatic tax calculations.",
    },
    {
      icon: <FaBoxes />,
      title: "Inventory Management",
      description:
        "Track stock levels, purchases, and sales in real time.",
    },
    {
      icon: <FaUsers />,
      title: "Customer Management",
      description:
        "Store customer details and purchase history securely.",
    },
    {
      icon: <FaChartLine />,
      title: "Business Reports",
      description:
        "View daily, monthly, and yearly sales reports instantly.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Friendly",
      description:
        "Access your billing software from any device anytime.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Backup",
      description:
        "Keep your business data safe with secure cloud backup.",
    },
  ];


  // Scroll Animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);


  return (
    <section id="features" className="features">

      <div className="container">

        <span className="section-tag">
          ✨ Features
        </span>


        <h2>
          Everything Your Business Needs
        </h2>


        <p className="section-text">
          Powerful billing software packed with smart features to simplify
          billing, inventory, reports, and customer management.
        </p>



        <div className="feature-grid">

          {features.map((feature, index) => (

            <div
              className="feature-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >

              <div className="feature-icon">
                {feature.icon}
              </div>


              <h3>
                {feature.title}
              </h3>


              <p>
                {feature.description}
              </p>


            </div>

          ))}

        </div>


      </div>

    </section>
  );
}


export default Features;