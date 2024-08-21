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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white p-3 text-black shadow-sm ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="cursor-pointer" onClick={() => navigate('/')}>
          <img src={logo} alt="Platform Logo" className="h-10" />
        </div>

        {/* Centered menu items */}
        <div className="hidden lg:flex flex-1 justify-center items-center space-x-4">
          <button
            className="px-2 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-200"
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button
            className="px-2 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-200"
            onClick={() => scrollToSection('services')}
          >
            Services
          </button>
        </div>

        {/* Profile dropdown */}
        {user && (
          <div className="relative">
            <button
              className="flex items-center space-x-2 hover:bg-gray-100 font-bold px-3 py-2 rounded-md"
              onClick={toggleDropdown}
            >
              <span>{user.name}</span>
              <svg
                className={`w-4 h-4 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                <button
                  className="block w-full text-left px-4 py-2 text-black rounded-md hover:bg-gray-100"
                  onClick={() => { navigate('/profile'); setIsDropdownOpen(false); }}
                >
                  Profile
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-black rounded-md hover:bg-gray-100"
                  onClick={() => { navigate('/dashboard'); setIsDropdownOpen(false); }}
                >
                  Dashboard
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-black rounded-md hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}

        <button
          className="lg:hidden p-2 rounded-md focus:outline-none"
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col h-full p-4">
            <button className="self-end p-2 focus:outline-none" onClick={toggleSidebar}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Logo di atas profil */}
            <div className="flex justify-center mb-6">
              <img src={logo} alt="Platform Logo" className="h-16" />
            </div>

            <nav className="mt-4">
              <button
                className="block w-full text-left px-4 py-2 text-black rounded-md transition-transform duration-300 ease-in-out transform hover:shadow-lg hover:scale-105"
                onClick={() => { scrollToSection('about'); toggleSidebar(); }}
              >
                About
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-black rounded-md transition-transform duration-300 ease-in-out transform hover:shadow-lg hover:scale-105"
                onClick={() => { scrollToSection('services'); toggleSidebar(); }}
              >
                Services
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
