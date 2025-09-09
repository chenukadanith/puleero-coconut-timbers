import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#why">Why Choose Us</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Products</h4>
          <ul>
            <li><a href="#products">Finishing Timber</a></li>
            <li><a href="#products">Tiles</a></li>
            <li><a href="#products">Sivilim</a></li>
            <li><a href="#products">Skirting</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <p>123 Main Street, Colombo, Sri Lanka</p>
          <p>Email: info@puleerotimbers.com</p>
          <p>Phone: +94 77 123 4567</p>
        </div>
      </div>

      <div className="socials">
        <a href="#">🌐</a>
        <a href="#">📘</a>
        <a href="#">🐦</a>
        <a href="#">📸</a>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Puleero Coconut Timbers. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
