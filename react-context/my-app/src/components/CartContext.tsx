import { type Product } from '../lib';
import React, { createContext, useState } from 'react';

export type CartValue = {
  cart: Product[];
  addToCart: (product: Product) => void;
};

export const CartContext = createContext<CartValue>({
  cart: [],
  addToCart: () => undefined,
});

export type Children = {
  children: React.ReactNode;
};

export function CartProvider({ children }: Children) {
  const [cart, setCart] = useState<Product[]>([]);

  function addToCart(product: Product) {
    const newCartcontents = [...cart, product];
    setCart(newCartcontents);
  }

  const cartContextValues = { cart, addToCart };

  return (
    <CartContext.Provider value={cartContextValues}>
      {children}
    </CartContext.Provider>
  );
}
