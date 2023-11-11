// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Instant Pay</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/Home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Login">Sign-in</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Offers">Offers</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Feedback">Customer Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contact">Contact</Link>
          </li>
          <li>
            <div className="card" id="profile">
              <img className="logo" alt="logo" /> 
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
