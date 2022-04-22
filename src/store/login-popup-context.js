import { createContext, useReducer } from 'react';

const LoginPopupCtx = createContext({
  popupIsVisible: false,
  hidePopup() {},
  showPopup() {}
});

const ACTIONS = {
  SHOW_POPUP: 'showPopup',
  HIDE_POPUP: 'hidePopup'
};

const initialState = {
  popupIsVisible: false
};

const reducer = (state, action) => {
  const newState = {};

  if (action.type === ACTIONS.SHOW_POPUP) {
    newState.popupIsVisible = true;
  } else if (action.type === ACTIONS.HIDE_POPUP) {
    newState.popupIsVisible = false;
  }

  return {
    ...state,
    ...newState
  };
};

export function LoginPopupCtxProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const hidePopup = () => dispatch({ type: ACTIONS.HIDE_POPUP });
  const showPopup = () => dispatch({ type: ACTIONS.SHOW_POPUP });

  const contextValue = {
    hidePopup,
    showPopup,
    ...state
  };

  return <LoginPopupCtx.Provider value={contextValue}>{children}</LoginPopupCtx.Provider>;
}

export default LoginPopupCtx;
