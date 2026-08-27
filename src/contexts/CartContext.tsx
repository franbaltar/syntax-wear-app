import { createContext } from "react";
import type { ProductCart } from "./CartProvider";
import type { Product } from "../interfaces/product";

interface CartContextType {
  cart: ProductCart[];
  add: (product: Product) => void;
  remove: (productId: number) => void;
  increment: (product: ProductCart) => void;
  decrement: (product: ProductCart) => void;
}

export const CartContext = createContext({} as CartContextType);
