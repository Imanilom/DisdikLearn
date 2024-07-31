import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth';

export const login = async (data) => {
  const response = await axios.post(`http://localhost:3000/api/auth/login`, data);
  // Handle storing the JWT token, etc.
  return response.data;
};

export const register = async (data) => {
  const response = await axios.post(`${API_URL}/register`, data);
  return response.data;
};

// Additional functions for profile management, logout, etc.
