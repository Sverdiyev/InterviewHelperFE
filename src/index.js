import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import App from './App';
import { AuthContextProvider } from './store/auth-context.js';
import { CartContextProvider } from './store/cart-context.js';
import { createTheme, ThemeProvider } from '@mui/material';

const queryClient = new QueryClient();

export const DARK_GREEN = '#1c311d';
export const GREEN = '#2f4f4f';
const theme = createTheme({
  palette: {
    primary: { main: '#1c311d' },
    secondary: { main: '#1c311d' }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <CartContextProvider>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </QueryClientProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
