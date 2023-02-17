import React, { useState, useEffect } from 'react';
import DropDown from './DropDown';

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
          <DropDown service ={service} />
        ))}
      </ul>
    </div>
  );
};

export default Services;
