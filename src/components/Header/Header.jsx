import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">
              <span className="logo-letter">C</span>
            </div>
            <div className="logo-text">
              <h1>CocoWood</h1>
              <span className="tagline">Natural Timber Solutions</span>
            </div>
          </div>
          
          <nav className="nav">
            <ul className="nav-list">
              <li><button onClick={() => scrollToSection('home')} className="nav-link">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="nav-link">About</button></li>
              <li><button onClick={() => scrollToSection('products')} className="nav-link">Products</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button></li>
            </ul>
          </nav>
          
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span className="contact-text">+94 77 123 4567</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span className="contact-text">info@puleerotimbers.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
