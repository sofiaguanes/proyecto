import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="main-title">
        <h1>Coders<br />Blog</h1>
      </div>
      <div className="subtitle-container">
        <h2>Share and improve your code with the community</h2>
      </div>
      <Link to="/blog">
        <button className="floating-button">Read More</button>
      </Link>
    </div>
  );
};

export default HomePage;
