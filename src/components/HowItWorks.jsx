import "./HowItWorks.css";
import {
  FaUserPlus,
  FaFileInvoiceDollar,
  FaChartLine,
  FaSmile,
} from "react-icons/fa";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <FaUserPlus />,
      title: "Create Account",
      description:
        "Sign up and set up your business profile within a few minutes.",
    },
    {
      number: "02",
      icon: <FaFileInvoiceDollar />,
      title: "Generate Bills",
      description:
        "Create professional GST invoices and manage customer billing instantly.",
    },
    {
      number: "03",
      icon: <FaChartLine />,
      title: "Track Sales",
      description:
        "Monitor sales, inventory, reports and business performance in real time.",
    },
    {
      number: "04",
      icon: <FaSmile />,
      title: "Grow Business",
      description:
        "Make smarter decisions using powerful analytics and business reports.",
    },
  ];

  return (
    <section className="how-it-works">
      <span className="how-tag">⚙️ How It Works</span>

      <h2>Get Started in Just 4 Simple Steps</h2>

      <p className="how-subtitle">
        Smart Billing helps you manage billing, inventory and reports with a
        simple and user-friendly workflow.
      </p>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="step-number">{step.number}</div>

            <div className="step-icon">{step.icon}</div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;