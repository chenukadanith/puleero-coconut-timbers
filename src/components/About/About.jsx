import React from "react";
import "./About.css";

const About = () => {
  const features = [
    {
      icon: "🌲",
      title: "Sustainable Sourcing",
      description: "We source our coconut timber from responsibly managed plantations, ensuring minimal environmental impact."
    },
    {
      icon: "🔨",
      title: "Expert Craftsmanship",
      description: "Our skilled artisans bring decades of experience to create beautiful, durable products from coconut wood."
    },
    {
      icon: "🌍",
      title: "Eco-Friendly Process",
      description: "Our production methods are designed to be environmentally conscious and carbon-neutral."
    },
    {
      icon: "👥",
      title: "Community Impact",
      description: "We support local communities by providing fair wages and sustainable employment opportunities."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers", icon: "😊" },
    { number: "10+", label: "Years Experience", icon: "⭐" },
    { number: "50+", label: "Product Varieties", icon: "🛠️" },
    { number: "100%", label: "Sustainable Sourcing", icon: "🌱" }
  ];

  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-header">
          <h2 id="about-heading" className="section-title fade-in-up">
            About Puleero Coconut Timbers
          </h2>
          <p className="section-subtitle fade-in-up">
            Pioneering sustainable furniture manufacturing with premium coconut timber
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-story-column">
            <div className="about-story">
              <h3 className="fade-in-up">Our Story</h3>
              <p className="fade-in-up">
                For over a decade, Puleero Coconut Timbers has been at the forefront of sustainable 
                furniture manufacturing in Sri Lanka. We specialize in transforming coconut timber 
                into premium furniture, flooring, and decorative elements that combine natural beauty 
                with exceptional durability and modern design aesthetics.
              </p>
              <p className="fade-in-up">
                Our commitment to sustainability goes beyond just using eco-friendly materials. 
                We work directly with local coconut farmers, ensuring fair trade practices and 
                supporting rural communities. Every piece we create tells a story of environmental 
                responsibility, traditional craftsmanship, and innovative design.
              </p>
            </div>
            
            <div className="stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item fade-in-left" role="img" aria-label={`${stat.number} ${stat.label}`}>
                  <div className="stat-icon">{stat.icon}</div>
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-features-column">
            <h3 className="features-title fade-in-up">Why Choose Our Products</h3>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card fade-in-right" role="article" aria-labelledby={`feature-${index}`}>
                  <div className="feature-icon" aria-hidden="true">{feature.icon}</div>
                  <h4 id={`feature-${index}`} className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
