import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  // Sample data for cards
  const [cards] = useState([
    {
      id: 1,
      title: 'React',
      description: 'A JavaScript library for building user interfaces with reusable components.',
      image: '⚛️',
      color: 'primary'
    },
    {
      id: 2,
      title: 'Bootstrap',
      description: 'A popular CSS framework for responsive web design and UI components.',
      image: '🎨',
      color: 'success'
    },
    {
      id: 3,
      title: 'JavaScript',
      description: 'A versatile programming language that powers interactive web experiences.',
      image: '✨',
      color: 'warning'
    },
    {
      id: 4,
      title: 'Web Design',
      description: 'Creating beautiful and functional user interfaces for modern web applications.',
      image: '🖌️',
      color: 'danger'
    },
    {
      id: 5,
      title: 'Responsive Layout',
      description: 'Building layouts that adapt seamlessly to different screen sizes and devices.',
      image: '📱',
      color: 'info'
    },
    {
      id: 6,
      title: 'Grid System',
      description: 'Using Bootstrap\'s powerful grid system for flexible and responsive designs.',
      image: '🔲',
      color: 'secondary'
    }
  ]);

  return (
    <div className="App">
      <header className="bg-primary text-white py-5 mb-5 text-center">
        <h1>Card-Based Layout Using Bootstrap</h1>
        <p className="lead">Displaying multiple cards dynamically with Bootstrap Grid System</p>
      </header>

      <Container fluid className="pb-5">
        <Row className="g-4">
          {cards.map((card) => (
            <Col key={card.id} xs={12} sm={6} lg={4}>
              <Card className="h-100 shadow-sm border-0 hover-card">
                <Card.Body className="text-center">
                  <div className="card-icon mb-3">{card.image}</div>
                  <Card.Title className="fw-bold mb-3">{card.title}</Card.Title>
                  <Card.Text className="text-muted">{card.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-transparent border-top-0">
                  <Button variant={card.color} className="w-100">
                    Learn More
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <footer className="bg-dark text-white text-center py-4 mt-5">
        <p>&copy; 2026 Bootstrap Card Layout Experiment. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
