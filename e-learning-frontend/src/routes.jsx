import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PrivateRoute from './context/PrivateRoute';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './components/User/Profile';
import Dashboard from './pages/Dashboard';
import UserList from './components/User/UserList';
import Home from './pages/Home';
import Header from './components/Partial/Header';
import CourseList from './components/Course/CourseList';
import CourseDetails from './components/Course/CourseDetails';
import EditCourse from './components/Course/EditCourse';
import LessonList from './components/Lessons/LessonList';       // Import new components
import LessonDetails from './components/Lessons/LessonDetails'; // Import new components
import CreateLesson from './components/Lessons/CreateLesson';   // Import new components
import EditLesson from './components/Lessons/EditLesson';       // Import new components

const AppRoutes = () => {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute roles={['student', 'instructor', 'admin']} />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<CourseList />} /> {/* Updated path */}
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/courses/:id/edit" element={<EditCourse />} />
          <Route path="/courses/:courseId/lessons" element={<LessonList />} /> {/* Updated path */}
          <Route path="/courses/:courseId/lessons/:lessonId" element={<LessonDetails />} />
          <Route path="/courses/:courseId/lessons/create" element={<CreateLesson />} /> {/* Updated path */}
          <Route path="/courses/:courseId/lessons/:lessonId/edit" element={<EditLesson />} /> {/* Updated path */}
        </Route>
        <Route element={<PrivateRoute roles={['admin']} />}>
          <Route path="/users" element={<UserList />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
