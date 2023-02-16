import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card , CardGroup} from 'react-bootstrap';
import '../App.css'
import cover from '../images/cover.png';

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
        <h1>Urbaneyes</h1>
        <p>We are a community of citizens and service providers working
            together to make our city a better place.</p>
            <img className='cover' src={cover} alt="cover" />
        {/* <Link to="/getstarted"><Button variant="warning">Get Started</Button></Link> */}
      </div>
      <CardGroup className='landing-page-body'>
      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Our Services</Card.Title>
          <Card.Text>Smart City provides a range of services to make your city more livable, sustainable and efficient. From waste management to traffic control, we have got you covered.</Card.Text>
          <Link to="/services"><Button variant="primary">View Services</Button></Link>
        </Card.Body>
      </Card>
      <br />
      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Our Vision</Card.Title>
          <Card.Text>Our vision is to create sustainable, efficient, and technologically advanced cities that make the lives of their citizens better.</Card.Text>
          <br />
          <Link to="/about"><Button variant="primary">Learn More</Button></Link>
        </Card.Body>
      </Card>
      <br />
      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Our Community</Card.Title>
          <Card.Text>Join our community of citizens, service providers and city officials to create a better future for our cities. Sign up and start making a difference today.</Card.Text>
          <br />
          { currentUser ?
                            <>
                                <Link to="/login" onClick={handleLogOut}><Button variant="primary">Log out</Button></Link>
                            </>
                            :
                                <Link to="/login"><Button variant="warning">Log in / Register</Button></Link>
                        }
                { currentUser ? <Button variant="info">Signed in as {currentUser.username}</Button> : null }
        </Card.Body>
      </Card>
      </CardGroup>
        </div>
  );
};

export default LandingPage;
