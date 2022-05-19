import { createContext, useReducer } from 'react';
// import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const CartContext = createContext({
  cartQuestions: [],
  addToCart: () => null,
  removeFromCart: () => null,
  clearCart: () => null,
  setCart: () => null,
  print: () => null
});

const ACTIONS = {
  ADD_TO_CART: 'add',
  REMOVE_FROM_CART: 'remove',
  CLEAR_CART: 'clear',
  SET_CART: 'setCart',
  PRINT_CART: 'print'
};

const initialState = {
  cartQuestions: Cookies.get('cart')?.split(',') || []
};

const reducer = (state, action) => {
  const newState = {};

  if (action.type === ACTIONS.ADD_TO_CART) {
    const uniqueItems = Array.from(new Set([...state.cartQuestions, action.questionId]));
    newState.cartQuestions = uniqueItems;
  } else if (action.type === ACTIONS.REMOVE_FROM_CART) {
    newState.cartQuestions = state.cartQuestions.filter((el) => el !== action.questionId);
  }

  return {
    ...state,
    ...newState
  };
};

export function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const navigate = useNavigate();

  const addToCart = (questionId) => {
    const uniqueItems = Array.from(new Set([...state.cartQuestions, questionId]));
    dispatch({ type: ACTIONS.ADD_TO_CART, questionId });
    Cookies.set('cart', uniqueItems);
  };
  const removeFromCart = (questionId) => {
    dispatch({ type: ACTIONS.ADD_TO_CART, questionId });
  };

  const contextValue = {
    addToCart,
    removeFromCart,
    ...state
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}

export default CartContext;
