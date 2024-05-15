import React from "react";
import ProductsInShoppingCartProvider from "./ProductsInShoppingCartProvider";

function AppProviders({ children }) {
   return <ProductsInShoppingCartProvider>{children}</ProductsInShoppingCartProvider>;
}

export default AppProviders;
