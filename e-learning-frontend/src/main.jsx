import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './services/store';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Find the root DOM node
const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Render the application with Provider
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);