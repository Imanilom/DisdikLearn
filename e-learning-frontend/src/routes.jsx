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
import CreateCourse from './components/Course/CreateCourse';
import LessonList from './components/Lessons/LessonList';       
import LessonDetails from './components/Lessons/LessonDetails'; 
import CreateLesson from './components/Lessons/CreateLesson';   
import EditLesson from './components/Lessons/EditLesson';       
import QuizList from './components/Quiz/QuizList';               
import QuizDetails from './components/Quiz/QuizDetails';       
import CreateQuiz from './components/Quiz/CreateQuiz';         
import EditQuiz from './components/Quiz/EditQuiz';             
import Uploads from './components/Material/Uploads';
import AdminPage from './pages/Admin';
import Forum from './components/Forum/Forum';
import PostDetails from './components/Forum/Post';

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <div className=""> {/* Container with left and right padding */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoute roles={['student', 'instructor', 'admin']} />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<CourseList />} /> {/* List all courses */}
            <Route path="/courses/:id" element={<CourseDetails />} /> {/* Course details */}
            <Route path="/courses/:courseId/lessons" element={<LessonList />} /> {/* List lessons */}
            <Route path="/courses/:courseId/lessons/:lessonId" element={<LessonDetails />} /> {/* Lesson details */}
            <Route path="/courses/:courseId/quizzes" element={<QuizList />} /> {/* List quizzes */}
            <Route path="/courses/:courseId/quizzes/:quizId" element={<QuizDetails />} /> {/* Quiz details */}
            <Route path="/courses/:courseId/forums" element={<Forum />} /> {/* Forum for a course */}
            <Route path="/courses/:courseId/forums/:postId" element={<PostDetails />} /> {/* Post details */}
          </Route>
          
          <Route element={<PrivateRoute roles={['admin']} />}>
            <Route path="/admin" element={<AdminPage />} /> {/* Admin user list */}
          </Route>

          <Route element={<PrivateRoute roles={['instructor']} />}>
            <Route path="/courses/:id/edit" element={<EditCourse />} /> {/* Edit course */}
            <Route path="/courses/create" element={<CreateCourse />} /> {/* Create course */}
            <Route path="/courses/:courseId/lessons" element={<LessonList />} /> {/* List lessons */}
            <Route path="/courses/:courseId/lessons/:lessonId" element={<LessonDetails />} /> {/* Lesson details */}
            <Route path="/courses/:courseId/quizzes/create" element={<CreateQuiz />} /> {/* Create new quiz */}
            <Route path="/courses/:courseId/lessons/create" element={<CreateLesson />} /> {/* Create new lesson */}
            <Route path="/courses/:courseId/lessons/:lessonId/edit" element={<EditLesson />} /> {/* Edit lesson */}
            <Route path="/courses/:courseId/quizzes/:quizId/edit" element={<EditQuiz />} /> {/* Edit quiz */}
            <Route path="/courses/:courseId/material/" element={<Uploads />} /> {/* Add Material */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;
