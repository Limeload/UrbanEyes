import React, { useState, useEffect } from 'react';

function Services(){
  const [services, setServices] = useState([]);

  useEffect(() => {
   fetch('/services')
   .then(res => res.json())
   .then(data => setServices(data))
}, [])

  return (
    <div>
      <h2>Services</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id}>{service.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
