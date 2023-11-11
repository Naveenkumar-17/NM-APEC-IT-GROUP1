// src/Home.js
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <label className="navbar-brand" href="#">Instant Pay</label>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
            <Link to="/Home" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
            <Link to="/Login" className="nav-link">Sign-in</Link>
            </li>
            <li className="nav-item">
            <Link to="/Offers" className="nav-link">Offers</Link>
            </li>
            <li className="nav-item">
               <Link to="/Feedback" className="nav-link">Customer Services</Link>
            </li>
            <li className="nav-item">
            <Link to="/Contacts" className="nav-link">Contact</Link>
            </li>
            <li>
              <div className="card" id="profile">
                <img className="logo" />
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <form action="/search" method="get">
        <input type="text" name="q" placeholder="Search..." />
        <input type="submit" value="Search" />
      </form>
      <div className="card-container">
        <div className="card">
          <img src="./img/mobile rc.jpg" alt="mobile" />
          <p>Mobile Recharge</p>
        </div>
        <div className="card">
          <img src="./img/download (1).png" alt="Electricity" />
          <p>Electricity Bills</p>
        </div>
        <div className="card">
          <img src="./img/mv.png" alt="movie" />
          <p> Movie Tickets</p>
        </div>
        <div className="card">
          <img src="./img/dth.png" alt="dth" />
          <p> DTH Recharge</p>
        </div>
        <div className="card">
          <img src="./img/flight.jpeg" alt="flight" />
          <p>Flight Tickets</p>
        </div>
      </div>
      <div className="card" id="card1">
        <img src="./img/contact.png" alt="contact" />
        <p>Pay Your Contacts</p>
      </div>
      <div className="btn">
        <button className="first" name="Pay Bills Instantly">Pay Bills Instantly</button>
      </div>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </div>
  );
};

export default Home;
