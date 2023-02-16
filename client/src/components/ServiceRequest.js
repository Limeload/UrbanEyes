import React, { useState, useEffect } from 'react';

function ServiceRequest(){
  const [serviceRequests, setServiceRequests] = useState([]);

  useEffect(() => {
   fetch('/service_requests')
      .then((response) => {
        setServiceRequests(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Service Requests</h2>
      <ul>
        {serviceRequests.map((serviceRequest) => (
          <li key={serviceRequest.id}>{serviceRequest.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceRequest;
