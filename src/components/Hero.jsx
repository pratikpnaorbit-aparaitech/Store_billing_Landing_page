import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

function Hero({ onLogin }) {
  const [showDemo, setShowDemo] = useState(false);
useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section id="home" className="hero">

      <div className="hero-content" data-aos="fade-right">

        <span className="hero-tag">
          🚀 India's Smart Billing Software
        </span>

        <h1 className="hero-title">
          Smart Billing
          <br />

          <span className="title-highlight">
            <TypeAnimation
              sequence={[
                "Made Simpler!",
                2000,
                "Made Smarter!",
                2000,
                "Made Faster!",
                2000,
              ]}
              
              
            />
          </span>
        </h1>

        <p className="hero-text">
          Manage Billing, GST, Inventory, Customers and Reports
          <br />
          from one powerful dashboard designed for modern businesses.
        </p>

       <div className="hero-btns">

<button
  className="primary"
  onClick={onLogin}
>
  Get Started →
</button>

<button
  className="secondary"
  onClick={() => setShowDemo(true)}
>
  ▶ Live Demo
</button>

</div>

        <div className="hero-rating">

          <div className="rating-box">
            ⭐ ⭐ ⭐ ⭐ ⭐
          </div>

          <div className="rating-text">
            <h4>4.9/5 Rating</h4>
            <p>Trusted by 500+ Businesses</p>
          </div>

        </div>

      </div>


      {/* RIGHT DASHBOARD */}

      <div className="hero-image" data-aos="fade-left">

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
      {/* DEMO MODAL */}

      {showDemo && (
        <div
          className="demo-overlay"
          onClick={() => setShowDemo(false)}
        >

          <div
            className="demo-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="demo-close"
              onClick={() => setShowDemo(false)}
            >
              ×
            </button>

            <div className="demo-header">
              <div>
                <span>SMARTBILLING</span>
                <h2>Business Dashboard</h2>
              </div>

              <div className="demo-status">
                ● Live Preview
              </div>
            </div>

            <div className="demo-stats">

              <div className="demo-card">
                <p>Total Revenue</p>
                <h3>₹54,231</h3>
                <span>↑ 12.5%</span>
              </div>

              <div className="demo-card">
                <p>Customers</p>
                <h3>1,423</h3>
                <span>↑ 15%</span>
              </div>

              <div className="demo-card">
                <p>Total Orders</p>
                <h3>245</h3>
                <span>18 Pending</span>
              </div>

              <div className="demo-card">
                <p>Inventory</p>
                <h3>89%</h3>
                <span>Healthy Stock</span>
              </div>

            </div>

            <div className="demo-chart">

              <div className="chart-heading">
                <h3>Sales Overview</h3>
                <span>2026 ▾</span>
              </div>

              <div className="chart-line">
                <svg viewBox="0 0 700 220">

                  <polyline
                    points="0,180 70,155 140,165 210,110 280,125 350,75 420,95 490,50 560,70 630,30 700,45"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="5"
                  />

                </svg>
              </div>

            </div>

          </div>

        </div>
      )}
      {showDemo && (
  <div
    className="demo-overlay"
    onClick={() => setShowDemo(false)}
  >

    <div
      className="demo-modal"
      onClick={(e) => e.stopPropagation()}
    >

      <button
        className="demo-close"
        onClick={() => setShowDemo(false)}
      >
        ×
      </button>

      <div className="demo-header">
        <div>
          <span>SmartBilling</span>
          <h2>Business Dashboard</h2>
        </div>

        <div className="demo-status">
          ● Live
        </div>
      </div>

      <div className="demo-stats">

        <div className="demo-stat">
          <p>Total Revenue</p>
          <h3>₹54,231</h3>
          <span>+12.5%</span>
        </div>

        <div className="demo-stat">
          <p>Customers</p>
          <h3>1,423</h3>
          <span>+15%</span>
        </div>

        <div className="demo-stat">
          <p>Total Orders</p>
          <h3>245</h3>
          <span>+8.2%</span>
        </div>

      </div>

      <div className="demo-content">

        <div className="demo-chart">
          <h3>Sales Overview</h3>

          <div className="chart-bars">
            <span style={{ height: "45%" }}></span>
            <span style={{ height: "70%" }}></span>
            <span style={{ height: "55%" }}></span>
            <span style={{ height: "85%" }}></span>
            <span style={{ height: "65%" }}></span>
            <span style={{ height: "95%" }}></span>
            <span style={{ height: "75%" }}></span>
          </div>
        </div>

        <div className="demo-orders">
          <h3>Recent Orders</h3>

          <p>🧾 Invoice #1024 <b>₹4,500</b></p>
          <p>🧾 Invoice #1023 <b>₹2,850</b></p>
          <p>🧾 Invoice #1022 <b>₹7,200</b></p>
          <p>🧾 Invoice #1021 <b>₹1,450</b></p>
        </div>

      </div>

    </div>

  </div>
)}
    </section>
  );
}

export default Hero;