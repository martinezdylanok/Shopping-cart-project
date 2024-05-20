import React from "react";
import PropTypes from "prop-types";
import ProductsCartSection from "./ProductsCartSection";
import Header from "./Header";
import Footer from "./Footer";

export default function CartPage({ isDesktop }) {
   return (
      <>
         <Header isDesktop={isDesktop} />
         <ProductsCartSection isDesktop={isDesktop} />
         <Footer isDesktop={isDesktop} />
      </>
   );
}

CartPage.propTypes = {
   isDesktop: PropTypes.bool.isRequired,
};
