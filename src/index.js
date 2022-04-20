import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

import App from './App';
import { LoginPopupCtxProvider } from './store/login-popup-context.js';
import { AuthContextProvider } from './store/auth-context.js';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <LoginPopupCtxProvider>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </LoginPopupCtxProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
