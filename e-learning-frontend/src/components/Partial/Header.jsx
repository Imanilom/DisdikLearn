// components/Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import logo from '../../assets/logo_yayasan.png'; // Import the logo image

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <header className="bg-white p-1 text-black shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="cursor-pointer" onClick={() => navigate('/')}>
          <img
            src={logo} // Use the imported logo 
            alt="Platform Logo"
            className="h-10" // Adjust size as needed
          />
        </div>
        <nav className="flex space-x-4 flex-grow flex justify-end">
          {user ? (
            <>
              <button
                className="hover:bg-gray-500 px-3 py-2 rounded-md"
                onClick={() => navigate('/dashboard')}
              >
                Dashboard ({user.role})
              </button>
              <button
                className="hover:bg-gray-500 px-3 py-2 rounded-md"
                onClick={() => navigate('/profile')}
              >
                {user.name}
              </button>
              <button
                className="hover:bg-gray-500 px-3 py-2 rounded-md"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                className="hover:bg-gray-500 px-3 py-2 rounded-md"
                onClick={() => navigate('/login')}
              >
                Login
              </button>
              <button
                className="hover:bg-gray-500 px-3 py-2 rounded-md"
                onClick={() => navigate('/register')}
              >
                Register
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
