import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PasswordProvider from './components/PasswordProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PasswordProvider>
    <App />
  </PasswordProvider>
);