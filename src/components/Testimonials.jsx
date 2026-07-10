import { FaStar } from "react-icons/fa";

function Testimonials() {
  return (
    <section className="testimonials">

      <div className="section-title">
        <h2>What Our Customers Say</h2>
        <p>Trusted by hundreds of businesses across India.</p>
      </div>

      <div className="testimonial-grid">

        <div className="testimonial-card">
          <div className="stars">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>

          <p>
            Smart Billing has made our billing process faster and more
            accurate. Highly recommended!
          </p>

          <h3>Rahul Patil</h3>
          <span>Supermarket Owner</span>
        </div>

        <div className="testimonial-card">
          <div className="stars">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>

          <p>
            Inventory tracking and reports have helped us grow our
            business efficiently.
          </p>

          <h3>Priya Sharma</h3>
          <span>Retail Store</span>
        </div>

        <div className="testimonial-card">
          <div className="stars">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>

          <p>
            Easy to use, secure and saves us hours every day.
          </p>

          <h3>Amit Deshmukh</h3>
          <span>Medical Shop</span>
        </div>

      </div>

    </section>
  );
}

export default Testimonials;