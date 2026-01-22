import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className="bg-light min-vh-100">
      <Container className="py-5">
        {/* Hero Section */}
        <Row className="mb-5 text-center">
          <Col>
            <h1 className="display-4 fw-bold mb-3">Welcome to StudyHub</h1>
            <p className="lead text-muted mb-4">
              Discover and enroll in amazing courses to expand your knowledge
            </p>
            <Link to="/courses">
              <Button variant="primary" size="lg">
                Explore Courses
              </Button>
            </Link>
          </Col>
        </Row>

        {/* Features Section */}
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body className="text-center">
                <div className="fs-1 mb-3">🎓</div>
                <Card.Title>Diverse Courses</Card.Title>
                <Card.Text>
                  Access a wide range of courses across different subjects and
                  skill levels
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body className="text-center">
                <div className="fs-1 mb-3">✨</div>
                <Card.Title>Learn at Your Pace</Card.Title>
                <Card.Text>
                  Enroll in courses and learn at your own convenience whenever
                  you want
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body className="text-center">
                <div className="fs-1 mb-3">💬</div>
                <Card.Title>Share Feedback</Card.Title>
                <Card.Text>
                  Provide valuable feedback to help us improve your learning
                  experience
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Call to Action */}
        <Row className="mt-5 text-center">
          <Col>
            <div className="bg-primary text-white p-5 rounded">
              <h2 className="mb-3">Ready to Start Learning?</h2>
              <p className="mb-4">
                Join thousands of students already learning on StudyHub
              </p>
              <Link to="/register">
                <Button variant="light" size="lg" className="me-2">
                  Register Now
                </Button>
              </Link>
              <Link to="/courses">
                <Button variant="outline-light" size="lg">
                  Browse Courses
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
