import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Enrolled from "./pages/Enrolled";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Feedback from "./pages/Feedback";

export default function App() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enrollCourse = (course) => {
    const alreadyEnrolled = enrolledCourses.find((c) => c.id === course.id);
    if (!alreadyEnrolled) {
      setEnrolledCourses([...enrolledCourses, course]);
    }
  };

  return (
    <Router>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses enrollCourse={enrollCourse} />} />
        <Route path="/enrolled" element={<Enrolled enrolledCourses={enrolledCourses} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}
