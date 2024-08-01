// components/Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <header className="bg-gray-700 p-1 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold cursor-pointer" onClick={() => navigate('/')}>
          E-learning Platform
        </div>
        <nav className="flex space-x-4">
          {user ? (
            <>
              <button
                className="hover:bg-gray-500 px-3 py-2 rounded-md"
                onClick={() => navigate('/profile')}
              >
                {user.name}
              </button>
              <button
                className="hover:bg-gray-500 px-3 py-2 rounded-md"
                onClick={() => navigate('/dashboard')}
              >
                Dashboard ({user.role})
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
