import React, { useMemo } from "react";
import { RemoveFromCartContext } from "../contexts/RemoveFromCartContext";
import { useProductsInShoppingCart } from "../contexts/ProductsInShoppingCartContext";

export default function RemoveFromCartProvider({ children }) {
   const productsInShoppingCartContext = useProductsInShoppingCart();

   const removeFromCart = (productId) => {
      const updatedCart = productsInShoppingCartContext.productsInShoppingCart.filter((product) => product.id !== productId);
      productsInShoppingCartContext.setProductsInShoppingCart(updatedCart);
   };

   const contextValue = useMemo(() => ({ removeFromCart }), [removeFromCart]);

   return <RemoveFromCartContext.Provider value={contextValue}>{children}</RemoveFromCartContext.Provider>;
}
