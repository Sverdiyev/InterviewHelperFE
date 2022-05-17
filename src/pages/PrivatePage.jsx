import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../store/auth-context.js';

function PrivatePage({ children }) {
  const { isAuth } = useContext(AuthContext);
  if (!isAuth) return <Navigate to="/login" />;
  return children;
}

export default PrivatePage;
