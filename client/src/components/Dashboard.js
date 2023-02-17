import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RequestForm from './RequestForm';
// import UserRequests from './UserRequests';
import smart_city from '../images/smartcity.png';
// import DropDown from './DropDown';
// import Services from './Services';
// import ServiceProvider from './ServiceProvider';
// import ServiceRequest from './ServiceRequest';


function Dashboard({currentUser, onLogOut}){
  function handleLogOut() {
    fetch('/logout', {
        method: 'DELETE'
    })
        .then(() => onLogOut())
}
  return (
    <div className='dash-form'>
      <div className='content'>
      <h1 className='text-1'>Welcome <h3>{currentUser.username}</h3></h1>
      <br />
      <Link to="/login" onClick={handleLogOut}><Button variant="warning">Log out</Button></Link>
      {/* <UserRequests /> */}
     </div>
     <div className='request-form'>
     <img className='city' src={smart_city} alt={smart_city} />
      <RequestForm />
      {/* <DropDown /> */}
     </div>
    </div>
  );
};

export default Dashboard;
