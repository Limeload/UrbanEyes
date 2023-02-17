import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Services from './Services';
import ServiceProvider from './ServiceProvider';
import ServiceRequest from './ServiceRequest';


function Dashboard({currentUser, onLogOut}){
  function handleLogOut() {
    fetch('/logout', {
        method: 'DELETE'
    })
        .then(() => onLogOut())
}

  return (
    <div className='login-form'>
      <div className='form'>
      <h1 className='text-1'>Welcome {currentUser.username}</h1>
      <Link to="/login" onClick={handleLogOut}><Button variant="warning">Log out</Button></Link>
      </div>
      <Container>
      <Services />
      <ServiceProvider />
      <ServiceRequest />
    </Container>
    </div>
  );
};

export default Dashboard;
