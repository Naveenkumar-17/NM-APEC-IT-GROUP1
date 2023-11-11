// src/Offers.js
import React from 'react';
import './Offers.css';
import { Link } from 'react-router-dom';
const Offers = () => {
  return (
    <div>
      <div className="navbar">
      <Link to="/Home" className="circular-button">Home</Link>
      </div>

      <div className="scrolling-cards">
        <div className="card">
          <h2>Mobile Recharge</h2>
          <p>Get 10% cashback on your first mobile recharge using our app. Limited time offer!</p>
        </div>
        {/* Repeat similar card structures for other offers */}
      </div>
    </div>
  );
};

export default Offers;
