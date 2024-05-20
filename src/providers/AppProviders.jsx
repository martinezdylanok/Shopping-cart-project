import React from "react";
import ProductsInShoppingCartProvider from "./ProductsInShoppingCartProvider";
import HeaderMenuIsOpenProvider from "./HeaderMenuIsOpenProvider";
import FooterMenuIsOpenProvider from "./FooterMenuIsOpenProvider";
import ToggleMenuProvider from "./ToggleMenuProvider";
import AddToCartProvider from "./AddToCartProvider";
import RemoveFromCartProvider from "./RemoveFromCartProvider";

function AppProviders({ children }) {
   return (
      <ProductsInShoppingCartProvider>
         <HeaderMenuIsOpenProvider>
            <FooterMenuIsOpenProvider>
               <ToggleMenuProvider>
                  <AddToCartProvider>
                     <RemoveFromCartProvider>{children}</RemoveFromCartProvider>
                  </AddToCartProvider>
               </ToggleMenuProvider>
            </FooterMenuIsOpenProvider>
         </HeaderMenuIsOpenProvider>
      </ProductsInShoppingCartProvider>
   );
}

export default AppProviders;
