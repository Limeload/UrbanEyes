import React from 'react';
import {Card} from 'react-bootstrap';

function UserRequests({}){
  return (
    <div className='my-form'>
          <Card>
  <Card.Header>
    <Card.Title>My Requests</Card.Title>
  </Card.Header>
  <Card.Body>
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Request 1
        <span class="badge bg-primary rounded-pill">In Progress</span>
      </li>
      {/* <li class="list-group-item d-flex justify-content-between align-items-center">
        Request 2
        <span class="badge bg-success rounded-pill">Completed</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Request 3
        <span class="badge bg-warning rounded-pill">Pending</span>
      </li> */}
    </ul>
  </Card.Body>
</Card>
    <br />
    </div>
  );
};

export default UserRequests;
