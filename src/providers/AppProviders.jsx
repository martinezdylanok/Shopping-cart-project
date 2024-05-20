import React from "react";
import ProductsInShoppingCartProvider from "./ProductsInShoppingCartProvider";
import HeaderMenuIsOpenProvider from "./HeaderMenuIsOpenProvider";
import FooterMenuIsOpenProvider from "./FooterMenuIsOpenProvider";
import ToggleMenuProvider from "./ToggleMenuProvider";
import AddToCartProvider from "./AddToCartProvider";
import RemoveFromCartProvider from "./RemoveFromCartProvider";
import SubTotalPriceProvider from "./SubTotalPriceProvider";

function AppProviders({ children }) {
   return (
      <ProductsInShoppingCartProvider>
         <HeaderMenuIsOpenProvider>
            <FooterMenuIsOpenProvider>
               <ToggleMenuProvider>
                  <AddToCartProvider>
                     <RemoveFromCartProvider>
                        <SubTotalPriceProvider>{children}</SubTotalPriceProvider>
                     </RemoveFromCartProvider>
                  </AddToCartProvider>
               </ToggleMenuProvider>
            </FooterMenuIsOpenProvider>
         </HeaderMenuIsOpenProvider>
      </ProductsInShoppingCartProvider>
   );
}

export default AppProviders;
