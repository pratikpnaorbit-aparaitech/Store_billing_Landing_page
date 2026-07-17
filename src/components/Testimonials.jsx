import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Testimonials.css";

import {
  FaStar,
  FaQuoteLeft,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

function Testimonials() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const testimonials = [
    {
      name: "Rajesh Patil",
      role: "Retail Business Owner",
      initials: "RP",
      review:
        "SmartBilling has completely changed the way we manage our business. Billing and inventory are now much faster.",
    },
    {
      name: "Sneha Kulkarni",
      role: "Fashion Store Owner",
      initials: "SK",
      review:
        "The reports and customer management features are amazing. Everything feels simple and professional.",
    },
    {
      name: "Amit Sharma",
      role: "Wholesale Business",
      initials: "AS",
      review:
        "A powerful billing solution for growing businesses. It saves us a lot of time every single day.",
    },
  ];

  return (
    <section className="testimonials">

      <div className="testimonial-heading" data-aos="fade-up">

        <span className="testimonial-tag">
          💬 Customer Stories
        </span>

        <h2>
          What Our <span>Customers Say</span>
        </h2>

        <p>
          Trusted by businesses that are growing smarter every day.
        </p>

      </div>

      <div className="testimonial-wrapper">

        <button className="testimonial-arrow">
          <FaArrowLeft />
        </button>

        <div className="testimonial-grid">

          {testimonials.map((item, index) => (

            <div
              className="testimonial-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >

              <FaQuoteLeft className="quote-icon" />

              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="testimonial-review">
                "{item.review}"
              </p>

              <div className="customer">

                <div className="avatar">
                  {item.initials}
                </div>

                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>

              </div>

            </div>

          ))}

        </div>

        <button className="testimonial-arrow">
          <FaArrowRight />
        </button>

      </div>

      <div className="testimonial-trust">
        <strong>4.9/5</strong>
        <span>Average Customer Rating</span>
      </div>

    </section>
  );
}

export default Testimonials;