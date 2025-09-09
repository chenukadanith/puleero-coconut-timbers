import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: "🌱",
      title: "100% Sustainable Sourcing",
      description: "We source our coconut timber exclusively from responsibly managed plantations and fallen trees, ensuring zero deforestation impact.",
      stats: "Zero Carbon Footprint"
    },
    {
      icon: "🎯",
      title: "Expert Craftsmanship",
      description: "Our master craftsmen bring decades of experience, combining traditional techniques with modern innovation for superior quality.",
      stats: "15+ Years Experience"
    },
    {
      icon: "🛡️",
      title: "Premium Quality Guarantee",
      description: "Every product undergoes rigorous quality testing. We offer comprehensive warranties and satisfaction guarantees on all our items.",
      stats: "5-Year Warranty"
    },
    {
      icon: "👥",
      title: "Community Impact",
      description: "We support local communities by providing fair wages, sustainable employment, and contributing to rural development programs.",
      stats: "200+ Local Jobs"
    },
    {
      icon: "🚚",
      title: "Nationwide Delivery",
      description: "Free delivery across Sri Lanka with professional installation services. We ensure your products arrive safely and are properly set up.",
      stats: "Free Island-wide Delivery"
    },
    {
      icon: "💬",
      title: "Personalized Service",
      description: "From consultation to after-sales support, our dedicated team provides personalized service tailored to your specific needs.",
      stats: "24/7 Customer Support"
    }
  ];

  return (
    <section id="why" className="why-choose-us">
      <div className="container">
        <div className="why-header">
          <h2 className="fade-in-up">Why Choose Puleero Coconut Timbers?</h2>
          <p className="fade-in-up">
            We're not just a furniture company – we're your partners in creating sustainable, 
            beautiful spaces that stand the test of time.
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card fade-in-up">
              <div className="reason-icon">
                <div className="icon-wrapper">{reason.icon}</div>
              </div>
              <div className="reason-content">
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
                <div className="reason-stats">
                  <span className="stats-badge">{reason.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="why-cta fade-in-up">
          <div className="cta-content">
            <h3>Ready to Experience the Difference?</h3>
            <p>Join thousands of satisfied customers who have transformed their spaces with our premium coconut timber products.</p>
            <div className="cta-buttons">
              <button className="btn">View Our Products</button>
              <button className="btn btn-secondary">Get Free Consultation</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
