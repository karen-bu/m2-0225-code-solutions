import { useContext } from 'react';
import { CartContext } from './CartContext';

export function useCart() {
  if (!CartContext)
    throw new Error('hook can only be used inside CartProvider tree');
  return useContext(CartContext);
}
