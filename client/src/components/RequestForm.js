import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const services = [
  { id: 1, name: "Plumbing", requests: ["Fix leaky faucet", "Unclog drain"], providers: ["John", "Jane", "Bob"] },
  { id: 2, name: "Electrical", requests: ["Install light fixture", "Repair outlet"], providers: ["Alice", "Charlie", "Dan"] },
  { id: 3, name: "HVAC", requests: ["AC repair", "Heater installation"], providers: ["Frank", "Grace", "Hannah"] },
];

const RequestForm = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [selectedProvider, setSelectedProvider] = useState(null);
  // const [selectedCity, setSelectedCity] = useState(null);

  // const handleCityChange = (event) => {
  //   const cityId = parseInt(event.target.value);
  //   const city = city.find((city) => city.id === cityId);
  //   setSelectedCity(city);
  //   setSelectedService(null);
  // };

  const handleServiceChange = (event) => {
    const serviceId = parseInt(event.target.value);
    const service = services.find((service) => service.id === serviceId);
    setSelectedService(service);
    setSelectedRequest(null);
    setSelectedProvider(null);
  };

  const handleRequestChange = (event) => {
    const request = event.target.value;
    setSelectedRequest(request);
    setSelectedProvider(null);
  };

  const handleProviderChange = (event) => {
    const provider = event.target.value;
    setSelectedProvider(provider);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Service: ", selectedService);
    console.log("Selected Request: ", selectedRequest);
    console.log("Selected Provider: ", selectedProvider);
    fetch('/requests')
    .then((response) => {
      console.log(response);
      alert('Thank you for submitting your request. Your request has been accepted and our customer care team will reach out to you shortly');
    })
    .catch((error) => {
      console.log(error);
      alert('There was an error submitting your request. Please try again.');
    });

    // you can add more code here to send the form data to the backend
  };


  return (
    <Container className="form">
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="service">
              <Form.Label>Service</Form.Label>
              <Form.Control as="select" onChange={handleServiceChange}>
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            {selectedService && (
              <>
                <Form.Group controlId="request">
                  <Form.Label>Request</Form.Label>
                  <Form.Control as="select" onChange={handleRequestChange}>
                    <option value="">Select a request</option>
                    {selectedService.requests.map((request) => (
                      <option key={request} value={request}>
                        {request}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="provider">
                  <Form.Label>Provider</Form.Label>
                  <Form.Control as="select" onChange={handleProviderChange}>
                    <option value="">Select a provider</option>
                    {selectedService.providers.map((provider) => (
                      <option key={provider} value={provider}>
                        {provider}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </>
            )}

            <Button variant="primary" type="submit" disabled={!selectedProvider}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RequestForm;
