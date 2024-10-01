import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import { FaBell } from 'react-icons/fa'; // Import ikon notifikasi
import logo from '../../assets/logo_yayasan.png';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false); // State untuk modal notifikasi

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

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

<<<<<<< HEAD:e-learning-frontend/src/components/Partial/Header.jsx
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';
=======
  const isAdmin = user?.role === 'admin';
>>>>>>> 3ec14d4b42b48d29f8daf920d6c17ed7f4b0b375:client/src/components/Partial/Header.jsx

  return (
    <header className="bg-white p-3 text-black shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="cursor-pointer" onClick={() => navigate('/')}>
          <img src={logo} alt="Platform Logo" className="h-10" />
        </div>

<<<<<<< HEAD:e-learning-frontend/src/components/Partial/Header.jsx
        <div className="hidden lg:flex flex-1 justify-center items-center space-x-4">
          {!isLoginPage && !isRegisterPage && (
            <>
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
            </>
          )}
        </div>

        <div className="flex items-center space-x-4">
          {isLoginPage || isRegisterPage ? (
            <>
              <button
                className="px-4 py-2 text-black rounded-md transition-colors duration-300 ease-in-out hover:bg-slate-200"
                onClick={() => navigate('/login')}
              >
                Login
              </button>
              <button
                className="px-4 py-2 text-black rounded-md transition-colors duration-300 ease-in-out hover:bg-slate-200"
                onClick={() => navigate('/register')}
              >
                Register
              </button>
            </>
          ) : user && (
            <div className="relative flex items-center">
              {/* Ikon Notifikasi */}
              <button className="relative focus:outline-none mr-4" onClick={toggleNotification}>
                <FaBell className="text-gray-700 w-5 h-5" />
                <span className="absolute top-0 right-0 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 rounded-full"></span>
              </button>

              {/* Modal Notifikasi */}
              {isNotificationOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                  <div className="bg-white rounded-lg shadow-lg w-80 p-6 relative">
                    <h2 className="text-lg font-bold mb-4">Notifikasi</h2>
                    <div className="flex justify-center items-center mb-4">
                    </div>
                    <h3 className="text-center text-xl font-semibold">Hooray! You're up to date</h3>
                    <p className="text-center text-gray-500 mt-2">
                      Kami akan segera memberi tahu Anda apabila ada informasi baru
                    </p>
                    <button 
                      className="mt-4 w-full text-blue-500 font-semibold hover:underline text-sm text-center"
                      onClick={() => { setIsNotificationOpen(false); navigate('/notifikasi'); }}
                    >
                      Lihat semua notifikasi
                    </button>
                    <button 
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                      onClick={toggleNotification}
                    >
                      &times;
                    </button>
                  </div>
                </div>
              )}

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
                <div className="absolute right-0 mt-60 w-48 bg-white rounded-md shadow-lg z-50">
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
                    onClick={() => { navigate('/Leaderboard'); setIsDropdownOpen(false); }}
                  >
                    Rangking
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
        </div>
=======
        {/* Centered menu items */}
        {!isAdmin && (
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
        )}

        {/* Profile dropdown or login button */}
        {user ? (
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
                  onClick={() => { navigate('/Leaderboard'); setIsDropdownOpen(false); }}
                >
                  Rangking
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
        ) : (
          <button
            className="block text-left px-4 py-2 text-black rounded-md transition-transform duration-300 ease-in-out transform hover:shadow-lg hover:scale-105"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        )}
>>>>>>> 3ec14d4b42b48d29f8daf920d6c17ed7f4b0b375:client/src/components/Partial/Header.jsx

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

            <div className="flex justify-center mb-6">
              <img src={logo} alt="Platform Logo" className="h-16" />
            </div>

            <nav className="mt-4">
<<<<<<< HEAD:e-learning-frontend/src/components/Partial/Header.jsx
              {isLoginPage || isRegisterPage ? (
                <>
                  <button
                    className="block w-full text-left px-4 py-2 text-black rounded-md transition-transform duration-300 ease-in-out transform hover:shadow-lg hover:scale-105"
                    onClick={() => { navigate('/login'); toggleSidebar(); }}
                  >
                    Login
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-black rounded-md transition-transform duration-300 ease-in-out transform hover:shadow-lg hover:scale-105"
                    onClick={() => { navigate('/register'); toggleSidebar(); }}
                  >
                    Register
                  </button>
                </>
              ) : (
=======
              {!isAdmin && (
>>>>>>> 3ec14d4b42b48d29f8daf920d6c17ed7f4b0b375:client/src/components/Partial/Header.jsx
                <>
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
                </>
              )}
            </nav>

            <div className="mt-auto text-center text-gray-500">
              <p className="text-sm">by Yayasan Pendidikan</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
