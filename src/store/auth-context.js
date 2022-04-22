import { createContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({
  isAuth: false,
  name: { firstName: '', lastName: '' },
  logIn() {},
  logOut() {}
});

const ACTIONS = {
  LOG_OUT: 'logout',
  LOG_IN: 'login'
};

const initialState = {
  isAuth: false,
  name: { firstName: '', lastName: '' }
};

const reducer = (state, action) => {
  const newState = {};

  if (action.type === ACTIONS.LOG_IN) {
    newState.isAuth = true;
    newState.name = { ...action.name };
  } else if (action.type === ACTIONS.LOG_OUT) {
    newState.isAuth = false;
    newState.name = { firstName: '', lastName: '' };
  }

  return {
    ...state,
    ...newState
  };
};

export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const logIn = (name) => {
    dispatch({ type: ACTIONS.LOG_IN, name });

    navigate('/');
  };
  const logOut = () => {
    dispatch({ type: ACTIONS.LOG_OUT });
    navigate('/');
  };

  const contextValue = {
    logIn,
    logOut,
    ...state
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

export default AuthContext;
