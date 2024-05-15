import React, { useState } from "react";
import { ProductsInShoppingCartContext } from "../contexts/ProductsInShoppingCartContext";

function ProductsInShoppingCartProvider({ children }) {
   const [productsInShoppingCart, setProductsInShoppingCart] = useState([]);

   return <ProductsInShoppingCartContext.Provider value={{ productsInShoppingCart, setProductsInShoppingCart }}>{children}</ProductsInShoppingCartContext.Provider>;
}

export default ProductsInShoppingCartProvider;
