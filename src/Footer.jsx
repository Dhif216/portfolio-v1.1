import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="footer-logo">M.D</h2>
          <p className="footer-text">
            Designed & built by <span className="highlight">Mouadh Dhif</span>
          </p>
        </div>

        <div className="footer-right">
          <p className="footer-copy">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
