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
  cartQuestions:
    Cookies.get('cart')
      ?.split(',')
      .map((item) => +item) || []
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

  const contextValue = {
    addToCart,
    removeFromCart,
    ...state
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}

export default CartContext;
