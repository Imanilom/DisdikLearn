// components/Home.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import HeroSection from '../components/Partial/HeroSection'; // Ensure the path is correct

const Home = () => {
  // Access user information from the Redux state
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <HeroSection />
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md mt-8">
          <h1 className="text-3xl font-bold mb-4 text-center">Welcome to the E-learning Platform</h1>
          {user ? (
            <div className="text-center">
              <p className="text-xl">Hello, {user.name}!</p>
              <p className="text-md text-gray-600">Email: {user.email}</p>
            </div>
          ) : (
            <p className="text-center text-red-500">You are not logged in.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
