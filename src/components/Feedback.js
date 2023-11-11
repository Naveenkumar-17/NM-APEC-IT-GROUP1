 // src/Feedback.js
import React from 'react';
import './Feedback.css';
import { Link } from 'react-router-dom';


const Feedback = () => {
  return (
    <div>
      <div className="navbar">
      <Link to="/Home" className="circular-button">Home</Link>
      </div>

      <div className="container">
        <h2>Customer Feedback Form</h2>
        <form>
          <div className="form-group">
            <label htmlFor="customerID">Customer ID:</label>
            <input type="text" id="customerID" name="customerID" required />
          </div>

          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>

          <div className="form-group">
            <label htmlFor="feedback">Feedback:</label>
            <textarea id="feedback" name="feedback" rows="4" required></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="rating">Service Rating:</label>
            <select id="rating" name="rating" required>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Average">Average</option>
              <option value="Poor">Poor</option>
              <option value="Very Poor">Very Poor</option>
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
