import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
function Hero() {
  return (
   <section id="home" className="hero">
      
     {/* Left Side */}
<div className="hero-content">
        <span className="hero-tag">
          🚀 India's Smart Billing Software
        </span>

        <h1 className="hero-title">
          <TypeAnimation
            sequence={["Smart Billing\nSystem", 3000]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            style={{ whiteSpace: "pre-line" }}
          />
        </h1>

        <p className="hero-text">
          Manage Billing, GST, Inventory, Customers and Reports
          from one powerful dashboard designed for modern businesses.
        </p>

        <div className="hero-btns">
          <button className="primary">
            Get Started →
          </button>

          <button className="secondary">
            ▶ Live Demo
          </button>
        </div>

        <div className="hero-rating">
          <div className="rating-box">
            ⭐⭐⭐⭐⭐
          </div>

          <div className="rating-text">
            <h4>4.9/5 Rating</h4>
            <p>Trusted by 500+ Businesses</p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="hero-image">
        <img
          src="/dashboard.png"
          alt="Smart Billing Dashboard"
        />

        <div className="dashboard-grid">
          <div className="dash-box">
            <h4>Revenue</h4>
            <h2>₹54,231</h2>
            <p>+12.5%</p>
          </div>

          <div className="dash-box">
            <h4>Customers</h4>
            <h2>1,423</h2>
            <p>+15%</p>
          </div>

          <div className="dash-box">
            <h4>Orders</h4>
            <h2>245</h2>
            <p>18 Pending</p>
          </div>

          <div className="dash-box">
            <h4>Inventory</h4>
            <h2>89%</h2>
            <p>Healthy Stock</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;