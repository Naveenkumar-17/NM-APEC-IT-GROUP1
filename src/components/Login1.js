 // src/Login1.js
import React from 'react';
import './Login1.css';
import { Link } from 'react-router-dom';
const Login1 = () => {
  return (
    <div>
     
      <html>
        <head>
          <title>User Information</title>
        </head>
        <body>
          <div className="home">
          <button><Link to="/home">Home</Link></button>
          </div>
          <div className="card">
            <h1>User Information</h1>
            <p><strong>Username:</strong> JohnDoe123</p>
            <p><strong>Credit Card Number:</strong> **** **** **** 1234</p>
            <p><strong>Account Details:</strong> Savings Account</p>
            <p><strong>Date of Birth:</strong> January 15, 1990</p>
            <p><strong>PAN Number:</strong> ABCDE1234F</p>
          </div>
        </body>
      </html>
    </div>
  );
};

export default Login1;
