import React from "react";
import ProductsInShoppingCartProvider from "./ProductsInShoppingCartProvider";
import HeaderMenuIsOpenProvider from "./HeaderMenuIsOpenProvider";
import FooterMenuIsOpenProvider from "./FooterMenuIsOpenProvider";
import ToggleMenuProvider from "./ToggleMenuProvider";

function AppProviders({ children }) {
   return (
      <ProductsInShoppingCartProvider>
         <HeaderMenuIsOpenProvider>
            <FooterMenuIsOpenProvider>
               <ToggleMenuProvider>{children}</ToggleMenuProvider>
            </FooterMenuIsOpenProvider>
         </HeaderMenuIsOpenProvider>
      </ProductsInShoppingCartProvider>
   );
}

export default AppProviders;
