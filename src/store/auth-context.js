import { createContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUserRequest, loginRequest, logOutRequest } from '../services/api-requests/auth.js';
import Cookies from 'js-cookie';

const AuthContext = createContext({
  isAuth: false,
  name: { firstName: '', lastName: '' },
  logIn() {},
  register() {},
  logOut() {}
});

const ACTIONS = {
  LOG_OUT: 'logout',
  LOG_IN: 'login',
  REGISTER: 'register'
};

const initialState = {
  isAuth: !!Cookies.get('jwt'),
  name:
    Cookies.get('user') !== undefined
      ? JSON.parse(Cookies.get('user'))
      : { firstName: '', lastName: '' }
};

const reducer = (state, action) => {
  const newState = {};

  if (action.type === ACTIONS.LOG_IN) {
    newState.isAuth = true;
    newState.name = { ...action.user };
  } else if (action.type === ACTIONS.LOG_OUT) {
    newState.isAuth = false;
    newState.name = { firstName: '', lastName: '' };
  } else if (action.type === ACTIONS.REGISTER) {
    newState.isAuth = true;
    newState.name = { ...action.user };
  }

  return {
    ...state,
    ...newState
  };
};

export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const logIn = async (loginData) => {
    const user = await loginRequest(loginData);
    if (user) {
      dispatch({ type: ACTIONS.LOG_IN, user });
      navigate('/');
      return true;
    }
    return false;
  };

  const logOut = () => {
    logOutRequest();
    dispatch({ type: ACTIONS.LOG_OUT });
    navigate('/');
  };

  const register = (data) => {
    addUserRequest(data).then((res) => {
      if (res) {
        dispatch({ type: ACTIONS.REGISTER, user: { firstName: data.name, lastName: 'Verdiyev' } });
        navigate('/');
        return true;
      }
      return false;
    });
  };

  const contextValue = {
    logIn,
    logOut,
    register,
    ...state
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

export default AuthContext;
