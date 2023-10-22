import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LoadingProvider } from './context/LoadingContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LoadingProvider>
      <App />
    </LoadingProvider>
  </React.StrictMode>
);
