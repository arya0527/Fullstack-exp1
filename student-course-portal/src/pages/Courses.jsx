import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const COURSES_DATA = [
  {
    id: 1,
    title: "Introduction to React",
    instructor: "Sarah Johnson",
    category: "Web Development",
    description:
      "Learn the fundamentals of React.js and build modern web applications.",
    duration: "8 weeks",
    level: "Beginner",
    students: 2450,
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    instructor: "Mike Chen",
    category: "Programming",
    description:
      "Master advanced JavaScript concepts including closures, async/await, and ES6+.",
    duration: "10 weeks",
    level: "Advanced",
    students: 1890,
  },
  {
    id: 3,
    title: "Web Design Masterclass",
    instructor: "Emma Davis",
    category: "Design",
    description:
      "Create beautiful and responsive web designs with modern design principles.",
    duration: "12 weeks",
    level: "Intermediate",
    students: 3200,
  },
  {
    id: 4,
    title: "Node.js Backend Development",
    instructor: "Alex Kumar",
    category: "Backend",
    description:
      "Build scalable backend applications using Node.js and Express.",
    duration: "10 weeks",
    level: "Intermediate",
    students: 2100,
  },
  {
    id: 5,
    title: "Python for Data Science",
    instructor: "Lisa Wang",
    category: "Data Science",
    description:
      "Learn Python programming for data analysis and visualization.",
    duration: "9 weeks",
    level: "Beginner",
    students: 3500,
  },
  {
    id: 6,
    title: "Mobile App Development",
    instructor: "James Wilson",
    category: "Mobile",
    description:
      "Build cross-platform mobile applications with React Native.",
    duration: "11 weeks",
    level: "Intermediate",
    students: 2700,
  },
];

export default function Courses({ enrollCourse }) {
  const [enrolledCourseIds, setEnrolledCourseIds] = useState([]);

  const handleEnroll = (course) => {
    enrollCourse(course);
    setEnrolledCourseIds([...enrolledCourseIds, course.id]);
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "Beginner":
        return "success";
      case "Intermediate":
        return "warning";
      case "Advanced":
        return "danger";
      default:
        return "secondary";
    }
  };

  return (
    <div className="bg-light min-vh-100 py-5">
      <Container>
        <div className="mb-5">
          <h1 className="display-5 fw-bold mb-3">Available Courses</h1>
          <p className="text-muted lead">
            Explore our comprehensive collection of courses
          </p>
        </div>

        <Row className="g-4">
          {COURSES_DATA.map((course) => (
            <Col md={6} lg={4} key={course.id}>
              <Card className="h-100 shadow-sm border-0 hover-shadow">
                <Card.Body>
                  <div className="mb-3">
                    <Badge bg={getLevelColor(course.level)}>
                      {course.level}
                    </Badge>
                    <Badge bg="info ms-2">{course.category}</Badge>
                  </div>

                  <Card.Title className="fw-bold mb-2">{course.title}</Card.Title>

                  <p className="text-muted small mb-3">
                    📖 {course.instructor}
                  </p>

                  <Card.Text className="mb-3">{course.description}</Card.Text>

                  <div className="mb-3 text-muted small">
                    <p className="mb-1">⏱️ Duration: {course.duration}</p>
                    <p className="mb-1">👥 {course.students} students</p>
                  </div>

                  <Button
                    variant={
                      enrolledCourseIds.includes(course.id)
                        ? "secondary"
                        : "primary"
                    }
                    className="w-100"
                    onClick={() => handleEnroll(course)}
                    disabled={enrolledCourseIds.includes(course.id)}
                  >
                    {enrolledCourseIds.includes(course.id)
                      ? "Enrolled ✓"
                      : "Enroll Now"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <style>{`
        .hover-shadow {
          transition: box-shadow 0.3s ease;
        }
        .hover-shadow:hover {
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15) !important;
        }
      `}</style>
    </div>
  );
}
