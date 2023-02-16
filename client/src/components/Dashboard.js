import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Table } from 'react-bootstrap';
import axios from 'axios';

function Dashboard({user}){
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    const res = await axios.get('/api/services');
    setServices(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/service_requests', {
        service_id: selectedService,
        citizen_id: user.id,
        city_id: user.city_id,
        description: description,
      });
      console.log(res.data);
      setSelectedService('');
      setDescription('');
      fetchServices();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <h1>Dashboard</h1>
      <h2>Welcome {user.name}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Select a Service:</Form.Label>
          <Form.Control
            as="select"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
          >
            <option value="">Select a Service</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Description:</Form.Label>
          <Form.Control
            as="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
      <br />
      <h3>My Service Requests</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {user.service_requests.map((request) => (
            <tr key={request.id}>
              <td>{request.service.name}</td>
              <td>{request.description}</td>
              <td>{request.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Dashboard;
