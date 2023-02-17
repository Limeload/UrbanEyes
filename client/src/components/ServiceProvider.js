import React, { useState, useEffect } from 'react';

function ServiceProvider(){
  const [serviceProviders, setServiceProviders] = useState([]);

  useEffect(() => {
    fetch('/service_providers')
    .then(res => res.json())
    .then(data => setServiceProviders(data))
 }, [])

  return (
    <div>
      <h2>Service Providers</h2>
      <ul>
        {serviceProviders.map((serviceProvider) => (
          <li key={serviceProvider.id}>{serviceProvider.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceProvider;
