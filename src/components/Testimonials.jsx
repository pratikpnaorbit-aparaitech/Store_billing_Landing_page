import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonial-container">

        <h2>What Our Customers Say</h2>

        <div className="testimonial-card">
          <p>
            "This billing software made my business easier and faster."
          </p>
          <h4>Rahul Patil</h4>
        </div>

        <div className="testimonial-card">
          <p>
            "Easy to use and very helpful for daily billing."
          </p>
          <h4>Priya Sharma</h4>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;