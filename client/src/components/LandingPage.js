import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage({currentUser, onLogOut}) {
  function handleLogOut() {
    fetch('/logout', {
        method: 'DELETE'
    })
        .then(() => onLogOut())
}
  return (
    <div className="landing-page">
      <div className="landing-page-header">
        <h1>Welcome to Smart City!</h1>
        <p>Make your city more livable and sustainable with Smart City.</p>
        <Link to="/login" className="landing-page-button">Get Started</Link>
      </div>
      <div className="landing-page-body">
        <div className="landing-page-card">
          <h2>Our Services</h2>
          <p>Smart City provides a range of services to make your city more livable, sustainable and efficient. From waste management to traffic control, we have got you covered.</p>
          <Link to="/services" className="landing-page-button">View Services</Link>
        </div>
        <div className="landing-page-card">
          <h2>Our Vision</h2>
          <p>Our vision is to create sustainable, efficient, and technologically advanced cities that make the lives of their citizens better. Join us in this journey towards a better future.</p>
          <Link to="/about" className="landing-page-button">Learn More</Link>
        </div>
        <div className="landing-page-card">
          <h2>Our Community</h2>
          <p>Join our community of citizens, service providers and city officials to create a better future for our cities. Sign up and start making a difference today.</p>
          {/* <Link to="/login" className="landing-page-button">Sign Up</Link> */}
          { currentUser ?
                            <>
                                <Link to="/login" onClick={handleLogOut}>Log Out</Link>
                            </>
                            :
                                <Link to="/login">Log In / Register</Link>
                        }
                { currentUser ? <p class="navbar-text">Signed in as {currentUser.username}</p> : null }
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
