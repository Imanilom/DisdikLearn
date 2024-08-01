// components/Dashboard.js
import React from 'react';
import { useSelector } from 'react-redux';
import CourseList from '../components/Course/CourseList';
import CreateCourse from '../components/Course/CreateCourse';

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="container mx-auto p-4">
      <h3 className="text-3xl font-bold mb-4">Dashboard</h3>
      {user && user.role === 'instructor' ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">Manage Courses</h2>
          <CreateCourse />
          <CourseList />
        </div>
      ) : (
        <p>You do not have permission to view this section.</p>
      )}
    </div>
  );
};

export default Dashboard;
