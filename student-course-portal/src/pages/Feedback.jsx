import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import { Rating } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Feedback() {
  const [feedbackData, setFeedbackData] = useState({
    name: "",
    email: "",
    courseRating: 0,
    overallRating: 0,
    courseName: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData({
      ...feedbackData,
      [name]: value,
    });
  };

  const handleRatingChange = (ratingType, value) => {
    setFeedbackData({
      ...feedbackData,
      [ratingType]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFeedbackData({
        name: "",
        email: "",
        courseRating: 0,
        overallRating: 0,
        courseName: "",
        message: "",
      });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="bg-light min-vh-100 py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={7}>
            <Card className="shadow-lg border-0">
              <Card.Body className="p-5">
                <h2 className="text-center fw-bold mb-2">Share Your Feedback</h2>
                <p className="text-center text-muted mb-4">
                  Help us improve your learning experience
                </p>

                {submitted && (
                  <Alert variant="success" className="mb-4">
                    Thank you! Your feedback has been submitted successfully.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Your name"
                          name="name"
                          value={feedbackData.name}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Your email"
                          name="email"
                          value={feedbackData.email}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Course Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Which course is this feedback for?"
                      name="courseName"
                      value={feedbackData.courseName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold">Course Rating</Form.Label>
                    <div className="mt-2">
                      <Rating
                        value={feedbackData.courseRating}
                        onChange={(e, value) =>
                          handleRatingChange("courseRating", value)
                        }
                        size="large"
                      />
                      <small className="text-muted ms-2">
                        {feedbackData.courseRating > 0 &&
                          `${feedbackData.courseRating} star${
                            feedbackData.courseRating !== 1 ? "s" : ""
                          }`}
                      </small>
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold">Overall Experience</Form.Label>
                    <div className="mt-2">
                      <Rating
                        value={feedbackData.overallRating}
                        onChange={(e, value) =>
                          handleRatingChange("overallRating", value)
                        }
                        size="large"
                      />
                      <small className="text-muted ms-2">
                        {feedbackData.overallRating > 0 &&
                          `${feedbackData.overallRating} star${
                            feedbackData.overallRating !== 1 ? "s" : ""
                          }`}
                      </small>
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold">Your Feedback</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Tell us what you think. What did you like? What could be improved?"
                      name="message"
                      value={feedbackData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    size="lg"
                    className="w-100 fw-bold"
                    type="submit"
                    disabled={submitted}
                  >
                    {submitted ? "Submitting..." : "Submit Feedback"}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
