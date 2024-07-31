import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const userData = action.payload;
      state.user = userData;
      const expirationDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000; // 1 week
      localStorage.setItem('user', JSON.stringify({ ...userData, expiration: expirationDate }));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
    checkSession: (state) => {
      const storedData = JSON.parse(localStorage.getItem('user'));
      if (storedData) {
        const now = new Date().getTime();
        if (now > storedData.expiration) {
          // Session expired
          localStorage.removeItem('user');
          state.user = null;
        } else {
          state.user = storedData;
        }
      }
    },
  },
});

export const { login, logout, checkSession } = authSlice.actions;
export default authSlice.reducer;
