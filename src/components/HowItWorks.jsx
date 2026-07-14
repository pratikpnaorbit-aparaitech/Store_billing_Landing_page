import { useEffect } from "react";
import "./HowItWorks.css";

import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaUserPlus,
  FaBoxes,
  FaFileInvoiceDollar,
  FaChartLine,
} from "react-icons/fa";

function HowItWorks() {
  const steps = [
    {
      icon: <FaUserPlus />,
      title: "Register",
      description:
        "Create your account in just a few clicks and set up your business profile.",
    },
    {
      icon: <FaBoxes />,
      title: "Add Products",
      description:
        "Add your products, prices, GST details, and manage inventory easily.",
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: "Generate Bills",
      description:
        "Create professional GST invoices instantly and share them with customers.",
    },
    {
      icon: <FaChartLine />,
      title: "Track Reports",
      description:
        "Monitor sales, inventory, and business performance with powerful reports.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <span
          className="how-tag"
          data-aos="fade-down"
        >
          ⚡ PROCESS
        </span>

        <h2 data-aos="fade-up">
          How It Works
        </h2>

        <p
          className="how-text"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Start using our Smart Billing Software in just four simple
          steps and grow your business faster.
        </p>

        <div className="steps">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-card"
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
            >
              <div className="step-icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;