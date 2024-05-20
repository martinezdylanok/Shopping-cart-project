import React from "react";
import PropTypes from "prop-types";
import ProductsCartSection from "./ProductsCartSection";
import Header from "./Header";
import Footer from "./Footer";

export default function CartPage({ isDesktop, subTotalPrice, setSubTotalPrice }) {
   return (
      <>
         <Header isDesktop={isDesktop} />
         <ProductsCartSection isDesktop={isDesktop} subTotalPrice={subTotalPrice} setSubTotalPrice={setSubTotalPrice} />
         <Footer isDesktop={isDesktop} />
      </>
   );
}

CartPage.propTypes = {
   isDesktop: PropTypes.bool.isRequired,
   subTotalPrice: PropTypes.number.isRequired,
   setSubTotalPrice: PropTypes.func.isRequired,
};
