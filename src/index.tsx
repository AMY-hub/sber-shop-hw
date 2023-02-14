import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { ContextProvider } from './context/AppContext';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />      
    </ContextProvider>
  </React.StrictMode>
);

