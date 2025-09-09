import React from 'react';
import './WhatsAppButton.css';

const phoneNumber = '+94768421578';
const whatsappLink = `https://wa.me/${phoneNumber.replace(/[^\d]/g, '')}`;

const WhatsAppButton = () => (
  <a
    href={whatsappLink}
    className="whatsapp-float"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
    >
      <circle cx="24" cy="24" r="24" fill="#25D366" />
      <path d="M34.6 29.2c-.5-.2-2.9-1.4-3.3-1.6-.4-.2-.7-.2-1 .2-.3.4-1.1 1.3-1.3 1.5-.2.2-.5.3-.9.1-.5-.2-2-0.7-3.8-2.2-1.4-1.2-2.3-2.7-2.6-3.1-.3-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.2-.4.3-.7.1-.3 0-.5 0-.7 0-.2-.9-2.2-1.2-3-.3-.7-.6-.6-.9-.6-.2 0-.5 0-.7 0-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.7 1.2 3.3 1.4 3.5.2.2 2.3 3.6 5.7 4.9 3.4 1.3 3.4.9 4 .8.6-.1 2-0.8 2.3-1.6.3-.8.3-1.5.2-1.6-.1-.1-.4-.2-.9-.4z" fill="#fff"/>
    </svg>
  </a>
);

export default WhatsAppButton;
