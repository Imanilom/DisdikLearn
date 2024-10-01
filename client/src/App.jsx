// App.jsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkSession } from './features/auth/authSlice';
import AppRoutes from './routes';


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkSession());
  }, [dispatch]);

  return <AppRoutes />;
};
  
  

export default App;
