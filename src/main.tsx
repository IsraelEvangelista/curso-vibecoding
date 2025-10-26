import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { initializeTheme } from '@/lib/theme';

// Initialize theme before rendering
initializeTheme();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
