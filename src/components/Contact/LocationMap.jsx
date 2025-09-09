import React from "react";
import "./LocationMap.css";

const LocationMap = () => {
  // Default: Colombo 03 – Galle Road area (safe central landmark)
  const mapEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.922896930099!2d79.84885!3d6.927148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2591d1e8b7e4b%3A0x7bb3b7a00b0c7a0!2sGalle%20Rd%2C%20Colombo%20003!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk";

  return (
    <section id="location" className="location-section">
      <div className="location-container">
        <div className="location-header">
          <h2>Find Us</h2>
          <p>Showroom around Galle Road, Colombo 03 — easy access by bus and train.</p>
        </div>

        <div className="location-grid">
          <div className="location-card">
            <div className="location-map">
              <iframe
                title="Business location map"
                src={mapEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="location-side">
            <div className="info-block">
              <div className="info-icon">📍</div>
              <div>
                <h4>Address</h4>
                <p>No. 45, Galle Road, Colombo 03</p>
              </div>
            </div>
            <div className="info-block">
              <div className="info-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p><a href="tel:+94771234567">+94 77 123 4567</a></p>
              </div>
            </div>
            <div className="info-block">
              <div className="info-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p><a href="mailto:info@cocowood.lk">info@cocowood.lk</a></p>
              </div>
            </div>
            <div className="actions">
              <a
                className="loc-btn primary"
                href="https://www.google.com/maps/dir//6.927148,79.84885"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
              <a className="loc-btn" href="tel:+94771234567">Call Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
