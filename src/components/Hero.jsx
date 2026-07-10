function Hero() {
  return (
    <section className="hero">

      <div className="overlay"></div>

      <div className="hero-content">

        
        <h1>
          Smart Billing
          <br />
          System
        </h1>

        <p>
          Manage invoices, customers,
          inventory and reports in one
          powerful platform.
        </p>

        <div className="hero-btns">
          <button className="primary">
            Get Started
          </button>

          <button className="secondary">
            Learn More
          </button>
        </div>

      </div>
<div className="floating-card sales-card">
  <h3>Today's Sales</h3>
  <h2>₹54,231</h2>
  <span>+12.5% This Month</span>
</div>

<div className="floating-card customer-card">
  <h3>Customers</h3>
  <h2>1,423</h2>
  <span>+15.3% Growth</span>
</div>

<div className="floating-card invoice-card">
  <h3>Invoices</h3>
  <h2>245</h2>
  <span>18 Pending</span>
</div>
    </section>
  );
}

export default Hero;