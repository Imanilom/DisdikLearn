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
import ForumPostList from './components/Forum/ForumList';
import Forum from './components/Forum/Forum';
import Comments from './components/Forum/Comments';
import Leaderboard from './components/Badges/Leaderboard';
<<<<<<< HEAD:e-learning-frontend/src/routes.jsx
import LmsPKBM from './components/Partial/LmsPKBM';
import LKP from './components/Partial/LKP'
import Team from './components/Partial/Team';
import PaketA from './components/Partial/PaketA';
import PaketB from './components/Partial/PaketB';
import PaketC from './components/Partial/PaketC';
import Marketing from './components/Partial/Marketing';
import Printing from './components/Partial/Printing';
import Menjahit from './components/Partial/Menjahit';
import Pendidikan from './components/Partial/Pendidikan';
=======

// Admin
import Kurikulum from './pages/AdminPage/KurikulumPage';

>>>>>>> 3ec14d4b42b48d29f8daf920d6c17ed7f4b0b375:client/src/routes.jsx
const AppRoutes = () => {

  return (
    <Router>
      <Header />
      <div className=""> {/* Container with left and right padding */}
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/lmspkbm" element={<LmsPKBM />} />
          <Route path="/Lkp" element={<LKP/>} />
          <Route path="/Team" element={<Team />} />
          <Route path="/PaketA" element={<PaketA />} />
          <Route path="/PaketB" element={<PaketB />} />
          <Route path="/PaketC" element={<PaketC />} />
          <Route path="/Marketing" element={<Marketing />} />
          <Route path="/Printing" element={<Printing />} />
          <Route path="/Menjahit" element={<Menjahit />} />
          <Route path="/Pendidikan" element={<Pendidikan />} />
          <Route element={<PrivateRoute roles={['student', 'instructor', 'admin']} />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<CourseList />} /> {/* List all courses */}
            <Route path="/courses/:id" element={<CourseDetails />} /> {/* Course details */}
            <Route path="/courses/:courseId/lessons" element={<LessonList />} /> {/* List lessons */}
            <Route path="/courses/:courseId/lessons/:lessonId" element={<LessonDetails />} /> {/* Lesson details */}
            <Route path="/courses/:courseId/quizzes" element={<QuizList />} /> {/* List quizzes */}
            <Route path="/courses/:courseId/quizzes/:quizId" element={<QuizDetails />} /> {/* Quiz details */}
            <Route path="/courses/:courseId/forumslist" element={<ForumPostList />} /> {/* Forum for a course */}
            <Route path="/courses/:courseId/forums/:postId" element={<Forum />} /> {/* Forum for a course */}
            <Route path="/courses/:courseId/forums/:postId/comments" element={<Comments />} /> {/* Comments details */}
            <Route path="/Leaderboard" element={<Leaderboard />} />
          </Route>
          
          <Route element={<PrivateRoute roles={['admin']} />}>
            <Route path="/admin" element={<AdminPage />} /> {/* Admin user list */}
            <Route path="/kurikulum" element={<Kurikulum />} />         
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
