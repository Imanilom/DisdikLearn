import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PrivateRoute from './context/PrivateRoute';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './components/User/Profile';
import UserList from './components/User/UserList';
import Home from './pages/Home';

const AppRoutes = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute roles={['student', 'instructor', 'admin']} />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<PrivateRoute roles={['admin']} />}>
          <Route path="/users" element={<UserList />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
