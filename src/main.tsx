import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import AppRoutes from './routes';
import './reset.css';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
