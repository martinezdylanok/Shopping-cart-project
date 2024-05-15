import React from "react";
import PropTypes from "prop-types";
import ProductsCartSection from "./ProductsCartSection";

import Header from "./Header";
import Footer from "./Footer";

export default function CartPage({ isDesktop, headerMenuIsOpen, footerMenuIsOpen, addToCart, removeFromCart, setProductsInShoppingCart, subTotalPrice, setSubTotalPrice, toggleMenu }) {
   return (
      <>
         <Header isDesktop={isDesktop} headerMenuIsOpen={headerMenuIsOpen} footerMenuIsOpen={footerMenuIsOpen} toggleMenu={toggleMenu} />
         <ProductsCartSection isDesktop={isDesktop} addToCart={addToCart} removeFromCart={removeFromCart} setProductsInShoppingCart={setProductsInShoppingCart} subTotalPrice={subTotalPrice} setSubTotalPrice={setSubTotalPrice} />
         <Footer isDesktop={isDesktop} headerMenuIsOpen={headerMenuIsOpen} footerMenuIsOpen={footerMenuIsOpen} toggleMenu={toggleMenu} />
      </>
   );
}

CartPage.propTypes = {
   isDesktop: PropTypes.bool.isRequired,
   headerMenuIsOpen: PropTypes.bool.isRequired,
   footerMenuIsOpen: PropTypes.bool.isRequired,
   addToCart: PropTypes.func.isRequired,
   removeFromCart: PropTypes.func.isRequired,
   setProductsInShoppingCart: PropTypes.func.isRequired,
   subTotalPrice: PropTypes.number.isRequired,
   setSubTotalPrice: PropTypes.func.isRequired,
   toggleMenu: PropTypes.func.isRequired,
};
