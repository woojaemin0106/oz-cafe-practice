import { useContext, createContext, useState } from "react";

const cartContext = createContext();

export function CartPorvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (options, quantity, id) => {
    setCart([...cart, { options, quantity, id }]);
  };
  const removefromCart = (id) => {
    setCart(cart.filter((el) => el.id !== id));
  };
  return (
    <cartContext.Provider value={{ cart, setCart, addToCart, removefromCart }}>
      {children}
    </cartContext.Provider>
  );
}

export function useCart() {
  return useContext(cartContext);
}
