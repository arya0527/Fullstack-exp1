import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  NavDropdown,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Page Components
function Home() {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h1 className="display-4 fw-bold mb-4">Welcome Home</h1>
          <p className="lead mb-4">
            This is a responsive navigation bar example using Bootstrap and React Router.
            The navbar automatically adapts to different screen sizes with a hamburger menu on mobile.
          </p>
          <Button variant="primary" size="lg" className="me-2">
            Get Started
          </Button>
          <Button variant="outline-primary" size="lg">
            Learn More
          </Button>
        </Col>
        <Col md={6}>
          <div className="text-center">
            <span className="display-1">🏠</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

function About() {
  return (
    <Container className="py-5">
      <h1 className="display-5 fw-bold mb-4">About Us</h1>
      <Row className="g-4">
        <Col md={4}>
          <Card className="shadow-sm h-100">
            <Card.Body className="text-center">
              <div className="fs-1 mb-3">🎯</div>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                To provide high-quality, responsive components for modern web applications.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm h-100">
            <Card.Body className="text-center">
              <div className="fs-1 mb-3">💡</div>
              <Card.Title>Our Vision</Card.Title>
              <Card.Text>
                Making web development easier and more accessible for all developers.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm h-100">
            <Card.Body className="text-center">
              <div className="fs-1 mb-3">🚀</div>
              <Card.Title>Our Values</Card.Title>
              <Card.Text>
                Quality, innovation, and continuous improvement in everything we do.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

function Services() {
  const services = [
    { title: 'Web Design', description: 'Beautiful, modern web designs' },
    { title: 'Development', description: 'High-performance web applications' },
    { title: 'Consulting', description: 'Expert guidance for your projects' },
    { title: 'Support', description: '24/7 technical support' },
  ];

  return (
    <Container className="py-5">
      <h1 className="display-5 fw-bold mb-5">Our Services</h1>
      <Row className="g-4">
        {services.map((service, index) => (
          <Col md={6} lg={3} key={index}>
            <Card className="h-100 shadow-sm service-card">
              <Card.Body>
                <Card.Title className="fw-bold">{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Button variant="primary" size="sm">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

function Portfolio() {
  const projects = [
    { title: 'Project 1', status: 'Completed' },
    { title: 'Project 2', status: 'In Progress' },
    { title: 'Project 3', status: 'Completed' },
    { title: 'Project 4', status: 'Completed' },
    { title: 'Project 5', status: 'In Progress' },
    { title: 'Project 6', status: 'Completed' },
  ];

  return (
    <Container className="py-5">
      <h1 className="display-5 fw-bold mb-5">Portfolio</h1>
      <Row className="g-4">
        {projects.map((project, index) => (
          <Col md={4} key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <div className="text-center mb-3">
                  <span className="display-6">📁</span>
                </div>
                <Card.Title>{project.title}</Card.Title>
                <Badge
                  bg={project.status === 'Completed' ? 'success' : 'warning'}
                  className="mb-3"
                >
                  {project.status}
                </Badge>
                <Card.Text>
                  A showcase of our professional work and expertise.
                </Card.Text>
                <Button variant="outline-primary" size="sm">
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container className="py-5">
      <h1 className="display-5 fw-bold mb-5">Contact Us</h1>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-lg">
            <Card.Body className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-bold">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label fw-bold">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                <Button variant="primary" type="submit" size="lg" className="w-100">
                  Send Message
                </Button>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        {/* Responsive Navigation Bar */}
        <Navbar bg="dark" expand="lg" sticky="top" className="navbar-custom">
          <Container>
            <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
              🧭 NavBar Demo
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/" className="nav-link-custom">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about" className="nav-link-custom">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/services" className="nav-link-custom">
                  Services
                </Nav.Link>
                <Nav.Link as={Link} to="/portfolio" className="nav-link-custom">
                  Portfolio
                </Nav.Link>
                <NavDropdown title="More" id="basic-nav-dropdown" className="nav-link-custom">
                  <NavDropdown.Item as={Link} to="/contact">
                    Contact
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Settings</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5">Profile</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/contact" className="nav-link-custom">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Page Routes */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-dark text-white py-4 mt-5">
          <Container>
            <Row>
              <Col md={4} className="mb-3 mb-md-0">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/" className="text-decoration-none text-light">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-decoration-none text-light">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-decoration-none text-light">
                      Services
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col md={4} className="mb-3 mb-md-0">
                <h5>Contact Info</h5>
                <p>
                  Email: info@example.com
                  <br />
                  Phone: +1 (555) 123-4567
                </p>
              </Col>
              <Col md={4}>
                <h5>Follow Us</h5>
                <p>
                  <a href="#" className="text-decoration-none text-light me-2">
                    Facebook
                  </a>
                  <a href="#" className="text-decoration-none text-light me-2">
                    Twitter
                  </a>
                  <a href="#" className="text-decoration-none text-light">
                    LinkedIn
                  </a>
                </p>
              </Col>
            </Row>
            <hr className="my-4" />
            <Row>
              <Col className="text-center">
                <p>&copy; 2026 Navigation Bar Demo. All rights reserved.</p>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    </Router>
  );
}

export default App;
