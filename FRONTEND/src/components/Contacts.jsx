// src/Contact.js
import React from 'react';
import './contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <div className="navbar">
      <Link to="/Home" className="circular-button">Home</Link>
          
      </div>

      <div className="center-card">
        <div className="sliding-card">
          <h2>Contact Us</h2>
          <p>
            <a className="face" href="https://www.facebook.com">
              Facebook
            </a>
            <br />
            <a className="Insta" href="https://www.instagram.com">
              Instagram
            </a>
            <br />
            <a className="linkedin" href="https://www.linkedin.com">
              LinkedIn
            </a>
            <br />
            Email: instantpay@example.com
            <br />
            Mobile: +1 (123) 456-7890
          </p>
        </div>
      </div>

      <div className="header-card">
        <h2>Head Office Address</h2>
        <p>
          123 Main Street
          <br />
          Cityville, State 12345
          <br />
          Country
        </p>
      </div>
    </div>
  );
};

export default Contact;
