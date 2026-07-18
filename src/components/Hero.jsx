import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import {
  FaChartLine,
  FaUsers,
  FaShoppingCart,
  FaBoxes,
} from "react-icons/fa";

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

      {/* LEFT CONTENT */}

      <div
        className="hero-content"
        data-aos="fade-right"
      >

        <span className="hero-tag">
          🚀 India's Smart Billing Software
        </span>

        <h1 className="hero-title">

          Smart Billing

          <br />

          <span className="title-highlight">

            <TypeAnimation
  sequence={[
    "Made Smarter!",
    1000,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
  cursor={false}
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

            <h4>
              4.9/5 Rating
            </h4>

            <p>
              Trusted by 500+ Businesses
            </p>

          </div>

        </div>

      </div>


      {/* RIGHT DASHBOARD */}

      <div
        className="hero-image"
        data-aos="fade-left"
      >
<div className="dashboard-grid">

  <div className="dash-box">

    <FaChartLine className="dash-icon revenue-icon" />

    <h4>
      Revenue
    </h4>

    <h2>
      ₹54,231
    </h2>

    <p>
      +12.5%
    </p>

  </div>


  <div className="dash-box">

    <FaUsers className="dash-icon customer-icon" />

    <h4>
      Customers
    </h4>

    <h2>
      1,423
    </h2>

    <p>
      +15%
    </p>

  </div>


  <div className="dash-box">

    <FaShoppingCart className="dash-icon order-icon" />

    <h4>
      Orders
    </h4>

    <h2>
      245
    </h2>

    <p>
      18 Pending
    </p>

  </div>


  <div className="dash-box">

    <FaBoxes className="dash-icon inventory-icon" />

    <h4>
      Inventory
    </h4>

    <h2>
      89%
    </h2>

    <p>
      Healthy Stock
    </p>

  </div>

</div>

      </div>


      {/* LIVE DEMO MODAL */}

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

                <span>
                  SmartBilling
                </span>

                <h2>
                  Business Dashboard
                </h2>

              </div>

              <div className="demo-status">
                ● Live Preview
              </div>

            </div>


            {/* STATS */}

            <div className="demo-stats">

              <div className="demo-stat">

                <p>
                  Total Revenue
                </p>

                <h3>
                  ₹54,231
                </h3>

                <span>
                  ↑ 12.5%
                </span>

              </div>

              <div className="demo-stat">

                <p>
                  Customers
                </p>

                <h3>
                  1,423
                </h3>

                <span>
                  ↑ 15%
                </span>

              </div>

              <div className="demo-stat">

                <p>
                  Total Orders
                </p>

                <h3>
                  245
                </h3>

                <span>
                  ↑ 8.2%
                </span>

              </div>

            </div>


            {/* DASHBOARD CONTENT */}

            <div className="demo-content">

              {/* SALES CHART */}

              <div className="demo-chart">

                <h3>
                  Sales Overview
                </h3>

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


              {/* RECENT ORDERS */}

              <div className="demo-orders">

                <h3>
                  Recent Orders
                </h3>

                <p>
                  🧾 Invoice #1024
                  <b>
                    ₹4,500
                  </b>
                </p>

                <p>
                  🧾 Invoice #1023
                  <b>
                    ₹2,850
                  </b>
                </p>

                <p>
                  🧾 Invoice #1022
                  <b>
                    ₹7,200
                  </b>
                </p>

                <p>
                  🧾 Invoice #1021
                  <b>
                    ₹1,450
                  </b>
                </p>

              </div>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default Hero;