import { createContext, useReducer } from 'react';
// import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const CartContext = createContext({
  cartQuestions: [],
  addToCart: () => null,
  removeFromCart: () => null,
  clearCart: () => null,
  print: () => null,
  toggleCart: () => null,
  cartIsOpen: false
});

const ACTIONS = {
  ADD_TO_CART: 'add',
  REMOVE_FROM_CART: 'remove',
  CLEAR_CART: 'clear',
  SET_CART: 'setCart',
  PRINT_CART: 'print',
  TOGGLE_CART: 'toggle'
};

const initialState = {
  cartQuestions:
    Cookies.get('cart')
      ?.split(',')
      .map((item) => +item) || [],
  cartIsOpen: false
};

const reducer = (state, action) => {
  const newState = {};

  if (action.type === ACTIONS.ADD_TO_CART) {
    const uniqueItems = Array.from(new Set([...state.cartQuestions, action.questionId]));

    Cookies.set('cart', uniqueItems);
    newState.cartQuestions = uniqueItems;
  } else if (action.type === ACTIONS.REMOVE_FROM_CART) {
    const newItems = state.cartQuestions.filter((item) => item !== action.questionId);
    Cookies.set('cart', newItems);
    newState.cartQuestions = newItems;
  } else if (action.type === ACTIONS.CLEAR_CART) {
    Cookies.remove('cart');
    newState.cartQuestions = [];
  } else if (action.type === ACTIONS.TOGGLE_CART) {
    newState.cartIsOpen = !state.cartIsOpen;
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
    dispatch({ type: ACTIONS.ADD_TO_CART, questionId });
  };
  const removeFromCart = (questionId) => {
    dispatch({ type: ACTIONS.REMOVE_FROM_CART, questionId });
  };
  const clearCart = () => {
    dispatch({ type: ACTIONS.CLEAR_CART });
  };
  const toggleCart = () => {
    dispatch({ type: ACTIONS.TOGGLE_CART });
  };

  const contextValue = {
    addToCart,
    clearCart,
    removeFromCart,
    toggleCart,
    ...state
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}

export default CartContext;
