import { useReducer, createContext, ReactElement } from "react";
import { cartReducer, cartInitialState } from "../reducers/cart.js";
import { Book } from "../models";

// @ts-ignore
export const CartContext = createContext();

const useCartReducer = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (book: Book) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: book,
    });

  const removeFromCart = (book: Book) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: book,
    });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return { state, addToCart, removeFromCart, clearCart };
};

export function CartProvider({ children }: { children: ReactElement }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
