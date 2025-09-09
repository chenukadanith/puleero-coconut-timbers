import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      title: "Premium Coconut Timber",
      subtitle: "Sustainable Excellence",
      description: "Transform your space with our eco-friendly coconut wood products that combine sustainability with exceptional craftsmanship.",
      primaryCta: "Explore Products",
      secondaryCta: "Learn More",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2016&q=80",
      overlay: "rgba(139, 69, 19, 0.7)"
    },
    {
      title: "Expert Craftsmanship",
      subtitle: "Built to Last",
      description: "Our skilled artisans combine traditional techniques with modern innovation to create timeless, durable furniture pieces.",
      primaryCta: "View Gallery",
      secondaryCta: "Our Story",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      overlay: "rgba(160, 82, 45, 0.7)"
    },
    {
      title: "Transform Your Space",
      subtitle: "Nature Meets Design",
      description: "Create stunning interiors with our versatile coconut timber furniture and architectural elements.",
      primaryCta: "Get Quote",
      secondaryCta: "Contact Us",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80",
      overlay: "rgba(205, 133, 63, 0.7)"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length, isTransitioning]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    // Simple transition
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 150);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    // Simple transition
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 150);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="carousel">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div 
              className="slide-background"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div 
                className="background-overlay"
                // style={{ backgroundColor: slide.overlay }}
              ></div>
            </div>
            
            <div className="slide-content">
              <div className="slide-text">
                <h1 className="slide-title">{slide.title}</h1>
                <h2 className="slide-subtitle">{slide.subtitle}</h2>
                <p className="slide-description">{slide.description}</p>
                
                <div className="slide-buttons">
                  <button 
                    className="btn btn-primary"
                    onClick={() => scrollToSection('products')}
                  >
                    {slide.primaryCta}
                  </button>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => scrollToSection('about')}
                  >
                    {slide.secondaryCta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* White transition overlay */}
        <div className={`transition-overlay ${isTransitioning ? 'active' : ''}`}></div>
        
        <button className="carousel-btn prev" onClick={prevSlide}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <button className="carousel-btn next" onClick={nextSlide}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
        
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => {
                if (!isTransitioning && index !== currentSlide) {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentSlide(index);
                    setTimeout(() => {
                      setIsTransitioning(false);
                    }, 100);
                  }, 150);
                }
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Carousel;