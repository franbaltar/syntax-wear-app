import { useEffect, useState } from "react";
import type { Product } from "../interfaces/product";
import { CartContext } from "./CartContext";

interface CartProviderProps {
  children: React.ReactNode;
}

export interface ProductCart extends Product {
  quantity: number;
}

const localStorageKey = "@SyntaxWear:cart";

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<ProductCart[]>(() => {
    const cartFromLocalStorage = localStorage.getItem(localStorageKey);

    return cartFromLocalStorage !== null
      ? JSON.parse(cartFromLocalStorage)
      : [];
  });
  const [cartIsOpen, setCartIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(cart));
  }, [cart]);

  function add(product: Product): void {
    const productExistsInCart = cart.find(
      (itemInCart) => itemInCart.id === product.id,
    );

    let newCart;

    if (productExistsInCart) {
      newCart = cart.map((itemInCart) =>
        itemInCart.id === product.id
          ? { ...itemInCart, quantity: itemInCart.quantity + 1 }
          : itemInCart,
      );
    } else {
      newCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(newCart);
  }

  function remove(productId: number): void {
    setCart(cart.filter((itemInCart) => itemInCart.id !== productId));
  }

  function increment(product: ProductCart): void {
    updateProductQuantity(product, product.quantity + 1);
  }
  function decrement(product: ProductCart): void {
    updateProductQuantity(product, product.quantity - 1);
  }

  function openCart(): void {
    setCartIsOpen(true);
  }

  function closeCart(): void {
    setCartIsOpen(false);
  }

  function updateProductQuantity(
    product: ProductCart,
    newQuantity: number,
  ): void {
    if (newQuantity <= 0) return;

    const productExistsInCart = cart.find(
      (itemInCart) => itemInCart.id === product.id,
    );

    if (!productExistsInCart) return;

    const newCart = cart.map((itemInCart) =>
      itemInCart.id === product.id
        ? { ...itemInCart, quantity: newQuantity }
        : itemInCart,
    );

    setCart(newCart);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        add,
        remove,
        increment,
        decrement,
        cartIsOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
