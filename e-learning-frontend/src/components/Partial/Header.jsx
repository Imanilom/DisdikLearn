import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import logo from '../../assets/logo_yayasan.png';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-white p-3 text-black shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="cursor-pointer" onClick={() => navigate('/')}>
          <img
            src={logo}
            alt="Platform Logo"
            className="h-10"
          />
        </div>

        {user && (
          <div className="hidden lg:flex flex-1 justify-center items-center space-x-4">
            <button
              className="px-2 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-200"
              onClick={() => navigate('/dashboard')}
            >
              Dashboard 
            </button>
            <button
              className="px-2 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-200"
              onClick={() => navigate('/AboutUs')}
            >
              About 
            </button>
            <button
              className="px-2 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-200"
              onClick={() => navigate('/Services')}
            >
              Services 
            </button>
            <button
              className="px-2 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-200"
              onClick={() => navigate('/Team')}
            >
              Team
            </button>
          </div>
        )}

        <button
          className="lg:hidden p-2 rounded-md focus:outline-none"
          onClick={toggleSidebar}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        <nav className="hidden lg:flex space-x-4 justify-end">
          {user ? (
            <>
              <button
                className="hover:bg-blue-100 font-bold px-3 py-2 rounded-md"
                onClick={() => navigate('/profile')}
              >
                {user.name}
              </button>
            </>
          ) : (
            <>
              <button
                className="hover:bg-blue-100 font-bold px-3 py-2 rounded-md"
                onClick={() => navigate('/login')}
              >
                Login
              </button>
              <button
                className="hover:bg-blue-100 font-bold px-3 py-2 rounded-md"
                onClick={() => navigate('/register')}
              >
                Register
              </button>
            </>
          )}
        </nav>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col h-full p-4">
          <button className="self-end p-2 focus:outline-none" onClick={toggleSidebar}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          {/* Logo di atas profil */}
          <div className="flex justify-center mb-6">
            <img
              src={logo}
              alt="Platform Logo"
              className="h-16"
            />
          </div>

          <nav className="mt-4">
            <button
              className="block w-full text-left px-4 py-2 text-black rounded-md transition-transform duration-300 ease-in-out transform hover:shadow-lg hover:scale-105"
              onClick={() => { navigate('/Profil'); toggleSidebar(); }}
            >
              Profil
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-black rounded-md transition-transform duration-300 ease-in-out transform hover:shadow-lg hover:scale-105"
              onClick={() => { navigate('/dashboard'); toggleSidebar(); }}
            >
              Dashboard
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-black rounded-md transition-transform duration-300 ease-in-out transform hover:shadow-lg hover:scale-105"
              onClick={() => { navigate('/AboutUs'); toggleSidebar(); }}
            >
              About
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-black rounded-md transition-transform duration-300 ease-in-out transform hover:shadow-lg hover:scale-105"
              onClick={() => { navigate('/Services'); toggleSidebar(); }}
            >
              Services
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-black rounded-md transition-transform duration-300 ease-in-out transform hover:shadow-lg hover:scale-105"
              onClick={() => { navigate('/Team'); toggleSidebar(); }}
            >
              Team
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
