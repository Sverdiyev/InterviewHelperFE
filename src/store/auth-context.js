import { createContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({
  isAuth: false,
  name: { firstName: '', lastName: '' },
  popupIsVisible: false,
  logIn() {},
  logOut() {},
  togglePopup() {}
});

const ACTIONS = {
  LOG_OUT: 'logout',
  LOG_IN: 'login',
  TOGGLE_POPUP: 'logglePopup'
};

const initialState = {
  isAuth: false,
  name: { firstName: '', lastName: '' },
  popupIsVisible: false
};

const reducer = (state, action) => {
  const newState = {};

  if (action.type === ACTIONS.LOG_IN) {
    newState.isAuth = true;
    newState.name = { ...action.name };
  } else if (action.type === ACTIONS.LOG_OUT) {
    newState.isAuth = false;
    newState.name = { firstName: '', lastName: '' };
  } else if (action.type === ACTIONS.TOGGLE_POPUP) {
    newState.popupIsVisible = !state.popupIsVisible;
  }

  return {
    ...state,
    ...newState
  };
};

export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const logIn = () => {
    dispatch({ type: ACTIONS.LOG_IN });
    dispatch({ type: ACTIONS.TOGGLE_POPUP });

    navigate('/');
  };
  const logOut = () => {
    dispatch({ type: ACTIONS.LOG_OUT });
    navigate('/');
  };
  const togglePopup = () => dispatch({ type: ACTIONS.TOGGLE_POPUP });

  const contextValue = {
    logIn,
    logOut,
    togglePopup,
    ...state
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

export default AuthContext;
