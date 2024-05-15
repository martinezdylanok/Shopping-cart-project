import { createContext, useContext } from "react";

export const ProductsInShoppingCartContext = createContext([]);

export const useProductsInShoppingCart = () => useContext(ProductsInShoppingCartContext);
