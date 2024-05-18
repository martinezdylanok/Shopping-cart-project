import React from "react";
import PropTypes from "prop-types";
import ProductsCartSection from "./ProductsCartSection";
import Header from "./Header";
import Footer from "./Footer";

export default function CartPage({ isDesktop, addToCart, removeFromCart, setProductsInShoppingCart, subTotalPrice, setSubTotalPrice }) {
   return (
      <>
         <Header isDesktop={isDesktop} />
         <ProductsCartSection isDesktop={isDesktop} addToCart={addToCart} removeFromCart={removeFromCart} setProductsInShoppingCart={setProductsInShoppingCart} subTotalPrice={subTotalPrice} setSubTotalPrice={setSubTotalPrice} />
         <Footer isDesktop={isDesktop} />
      </>
   );
}

CartPage.propTypes = {
   isDesktop: PropTypes.bool.isRequired,
   addToCart: PropTypes.func.isRequired,
   removeFromCart: PropTypes.func.isRequired,
   setProductsInShoppingCart: PropTypes.func.isRequired,
   subTotalPrice: PropTypes.number.isRequired,
   setSubTotalPrice: PropTypes.func.isRequired,
};
