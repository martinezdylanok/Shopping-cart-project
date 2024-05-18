import React from "react";
import ProductsInShoppingCartProvider from "./ProductsInShoppingCartProvider";
import HeaderMenuIsOpenProvider from "./HeaderMenuIsOpenProvider";
import FooterMenuIsOpenProvider from "./FooterMenuIsOpenProvider";

function AppProviders({ children }) {
   return (
      <ProductsInShoppingCartProvider>
         <HeaderMenuIsOpenProvider>
            <FooterMenuIsOpenProvider>{children}</FooterMenuIsOpenProvider>
         </HeaderMenuIsOpenProvider>
      </ProductsInShoppingCartProvider>
   );
}

export default AppProviders;
