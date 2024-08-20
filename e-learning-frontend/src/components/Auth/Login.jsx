import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../features/auth/authSlice';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', { email, password });
      const userData = response.data.user; // Sesuaikan dengan respons API Anda
      const token = response.data.token;
      // Simpan token ke localStorage
      localStorage.setItem('token', token);

      dispatch(login(userData));
      navigate('/profile');
    } catch (error) {
      console.error(error);
      alert('Login gagal. Silakan periksa kembali kredensial Anda.');
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100"
      style={{ 
        backgroundImage: `url('../src/assets/Disdik.jpg ')`, // Ganti dengan path image Anda
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white shadow-md rounded-lg flex flex-col md:flex-row max-w-3xl">
        <div className="p-8 max-w-sm w-full md:w-1/2">
          <div className="text-center mb-4">
            <img
              src="../src/assets/logo_yayasan.png" // Ganti dengan path logo Anda
              alt="Logo Yayasan"
              className="w-20 mx-auto"
            />
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-200"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-200"
                required
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Masuk
              </button>
            </div>
            <div className="text-center">
              <a href="#" className="text-blue-600 hover:underline">
                Lupa Password?
              </a>
            </div>
          </form>
        </div>
        <div className="p-8 w-full md:w-1/2 flex flex-col justify-center ">
          <div className="text-center md:text-left">
            <p className="text-lg text-gray-600 mb-2 font-semibold">
              Selamat Datang di E-Learning Yayasan Pendidikan
            </p>
            <p className="text-sm text-gray-500">
              
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Untuk dapat mengakses laman ini, Anda harus terdaftar sebagai Pengguna/Guru Yayasan Pendidikan.
            </p>
          </div>
          <div className="mt-4 flex justify-center md:justify-start">
            <button
              className="flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg w-full hover:bg-gray-100"
            >
              <img
                src="../src/assets/google.jpg" // Ganti dengan path icon Google Anda
                alt="Google"
                className="w-15 h-5 mr-2"
              />
              Sign in with Google
            </button>
          </div>
          <div className="mt-4 text-center md:text-left text-sm text-gray-600">
            <a href="#" className="hover:underline">English (en)</a> &bull; <a href="#" className="hover:underline">Cookies notice</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
