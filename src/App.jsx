// src/App.js
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Offers from './Offers';
import Contact from './Contact';
import Feedback from './Feedback';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Login />
      <Offers />
      <Contact />
      <Feedback />
    </div>
  );
}

export default App;
