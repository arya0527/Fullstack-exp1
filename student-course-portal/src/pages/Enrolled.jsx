import React from "react";
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Enrolled({ enrolledCourses }) {
  if (enrolledCourses.length === 0) {
    return (
      <div className="bg-light min-vh-100 py-5">
        <Container>
          <div className="text-center mt-5">
            <h1 className="display-5 fw-bold mb-4">My Courses</h1>
            <Alert variant="info">
              <h4>No courses enrolled yet</h4>
              <p>
                Start exploring courses and enroll to see them here!
              </p>
            </Alert>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-light min-vh-100 py-5">
      <Container>
        <div className="mb-5">
          <h1 className="display-5 fw-bold mb-3">My Enrolled Courses</h1>
          <p className="text-muted lead">
            You have enrolled in {enrolledCourses.length} course
            {enrolledCourses.length !== 1 ? "s" : ""}
          </p>
        </div>

        <Row className="g-4">
          {enrolledCourses.map((course) => (
            <Col md={6} lg={4} key={course.id}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="fw-bold mb-3">{course.title}</Card.Title>

                  <div className="mb-3">
                    <p className="text-muted mb-2">
                      <strong>Instructor:</strong> {course.instructor}
                    </p>
                    <p className="text-muted mb-2">
                      <strong>Duration:</strong> {course.duration}
                    </p>
                    <p className="text-muted mb-2">
                      <strong>Level:</strong> {course.level}
                    </p>
                  </div>

                  <Card.Text className="mb-4">{course.description}</Card.Text>

                  <div className="d-grid gap-2">
                    <Button variant="primary" size="sm">
                      Continue Learning
                    </Button>
                    <Button variant="outline-secondary" size="sm">
                      View Progress
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
