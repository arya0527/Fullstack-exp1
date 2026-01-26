import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Nav,
  Navbar,
  Alert,
  Badge,
  ListGroup,
  Modal,
  Dropdown,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '' });
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <Navbar bg="dark" expand="lg" sticky="top" className="navbar-custom">
        <Container>
          <Navbar.Brand href="#" className="fw-bold text-primary">
            🎨 Bootstrap UI
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#components" className="text-white">
                Components
              </Nav.Link>
              <Nav.Link href="#contact" className="text-white">
                Contact
              </Nav.Link>
              <Dropdown className="ms-2">
                <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                  Menu
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#action/3.1">Settings</Dropdown.Item>
                  <Dropdown.Item href="#action/3.2">Profile</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#action/3.4">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="hero-section bg-primary text-white py-5 mb-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4 fw-bold">Welcome to Bootstrap UI</h1>
              <p className="lead">
                A responsive single page application showcasing Bootstrap components
              </p>
              <Button
                variant="light"
                size="lg"
                className="me-2 fw-bold"
                onClick={() => setShowModal(true)}
              >
                Get Started
              </Button>
              <Button variant="outline-light" size="lg" className="fw-bold">
                Learn More
              </Button>
            </Col>
            <Col md={6}>
              <div className="text-center">
                <span className="display-1">🚀</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Components Section */}
      <section id="components" className="py-5 mb-5">
        <Container>
          <h2 className="display-5 fw-bold mb-5 text-center">
            Bootstrap Components
          </h2>

          <Row className="g-4 mb-5">
            {/* Card 1: Buttons */}
            <Col md={6} lg={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="fw-bold mb-3">
                    🔘 Buttons
                  </Card.Title>
                  <div className="d-grid gap-2">
                    <Button variant="primary">Primary Button</Button>
                    <Button variant="success">Success Button</Button>
                    <Button variant="warning">Warning Button</Button>
                    <Button variant="danger">Danger Button</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 2: Alerts */}
            <Col md={6} lg={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="fw-bold mb-3">
                    ⚠️ Alerts
                  </Card.Title>
                  <Alert variant="info" className="mb-2">
                    Info Alert
                  </Alert>
                  <Alert variant="success" className="mb-2">
                    Success Alert
                  </Alert>
                  <Alert variant="warning" className="mb-2">
                    Warning Alert
                  </Alert>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 3: Badges */}
            <Col md={6} lg={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="fw-bold mb-3">
                    🏷️ Badges
                  </Card.Title>
                  <div className="d-flex flex-wrap gap-2">
                    <Badge bg="primary">Primary</Badge>
                    <Badge bg="success">Success</Badge>
                    <Badge bg="warning" text="dark">
                      Warning
                    </Badge>
                    <Badge bg="danger">Danger</Badge>
                    <Badge bg="info">Info</Badge>
                    <Badge bg="secondary">Secondary</Badge>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 4: List Group */}
            <Col md={6} lg={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="fw-bold mb-3">
                    📝 List Group
                  </Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>React Component</ListGroup.Item>
                    <ListGroup.Item>Bootstrap Framework</ListGroup.Item>
                    <ListGroup.Item>Responsive Design</ListGroup.Item>
                    <ListGroup.Item>Reusable Components</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 5: Form Elements */}
            <Col md={6} lg={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="fw-bold mb-3">
                    📋 Forms
                  </Card.Title>
                  <Form.Group className="mb-3">
                    <Form.Label>Input Field</Form.Label>
                    <Form.Control type="text" placeholder="Enter text..." />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Select Option</Form.Label>
                    <Form.Select>
                      <option>Choose...</option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Check label="Accept terms" />
                </Card.Body>
              </Card>
            </Col>

            {/* Card 6: Progress */}
            <Col md={6} lg={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="fw-bold mb-3">
                    📊 Progress
                  </Card.Title>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-2">
                      <span>HTML</span>
                      <span className="text-muted">85%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-success"
                        style={{ width: '85%' }}
                      ></div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-2">
                      <span>CSS</span>
                      <span className="text-muted">90%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-info"
                        style={{ width: '90%' }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>JavaScript</span>
                      <span className="text-muted">75%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-warning"
                        style={{ width: '75%' }}
                      ></div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="bg-light py-5 mb-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <Card className="shadow-lg">
                <Card.Body className="p-4">
                  <h3 className="text-center fw-bold mb-4">Contact Us</h3>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold">Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Enter your message"
                        required
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit" size="lg" className="w-100 fw-bold">
                      Send Message
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Welcome!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            This is a comprehensive Bootstrap UI example showcasing various
            components and responsive design patterns. Explore all the features!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Get Started
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 text-center">
        <Container>
          <p className="mb-0">
            © 2026 Bootstrap UI. Built with React and Bootstrap.
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
