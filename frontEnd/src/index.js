import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthContextProvider } from './context/authContext';
import { LeavesContextProvider } from './context/leavesContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <LeavesContextProvider>
          <App />
        </LeavesContextProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>
);
