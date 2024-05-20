import React, { useMemo } from "react";
import { AddToCartContext } from "../contexts/AddToCartContext";
import { useProductsInShoppingCart } from "../contexts/ProductsInShoppingCartContext";

export default function AddToCartProvider({ children }) {
   const productsInShoppingCartContext = useProductsInShoppingCart();

   const addToCart = (product) => {
      const existingProductIndex = productsInShoppingCartContext.productsInShoppingCart.findIndex((item) => item.id === product.id);
      if (existingProductIndex !== -1) {
         const updatedCart = [...productsInShoppingCartContext.productsInShoppingCart];
         updatedCart[existingProductIndex].quantity += product.quantity;
         productsInShoppingCartContext.setProductsInShoppingCart(updatedCart);
      } else {
         const updatedCart = [...productsInShoppingCartContext.productsInShoppingCart, product];
         productsInShoppingCartContext.setProductsInShoppingCart(updatedCart);
      }
   };

   const contextValue = useMemo(() => ({ addToCart }), [addToCart]);

   return <AddToCartContext.Provider value={contextValue}>{children}</AddToCartContext.Provider>;
}
