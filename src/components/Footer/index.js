import React from 'react';
import './styles.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="logo.png" alt="Restaurant Logo" className="logo" />
          <span>HomeMade Restaurant</span>
        </div>
        <div className="footer-contact">
          <p className="contact-info">Contact us: homemade@email.com</p>
          <p className="contact-info">Phone: (+12) 34567890</p>
        </div>
      </div>
      <div className="footer-social">
        <a href="#" className="social-link">Facebook</a>
        <a href="#" className="social-link">Twitter</a>
        <a href="#" className="social-link">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;
