import React from "react";
import "./LocationMap.css";

const LocationMap = () => {
  // Default: Colombo 03 – Galle Road area (safe central landmark)
  const mapEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.922896930099!2d79.84885!3d6.927148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2591d1e8b7e4b%3A0x7bb3b7a00b0c7a0!2sGalle%20Rd%2C%20Colombo%20003!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk";

  return (
    <section id="location" className="location-section">
      <div className="location-header">
        <h2>Contact Us</h2>
        <p>Showroom around Galle Road, Colombo 03 — easy access by bus and train.</p>
      </div>
      <div className="modern-map-wrapper">
        <iframe
          title="Business location map"
          src={mapEmbedSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default LocationMap;
