import React, { useState } from "react";
import PropTypes from "prop-types";
import formatProductData from "../modules/formatProductData";

export default function ProductCard({ isDesktop, product, addToCart, setSubTotalPrice }) {
   const [productCardQuantity, setProductCardQuantity] = useState(1);

   if (!product) {
      return <span className="flex justify-center">Loading a lovely product...</span>;
   }

   const formattedProductObject = formatProductData(product);

   const { productObjectName, productObjectDescription, productObjectPrice, productObjectImage } = formattedProductObject;

   const handleProductCardQuantityChange = (event) => {
      if (event.target.value <= "0") {
         return;
      }
      const newQuantityValue = parseFloat(event.target.value);
      setProductCardQuantity(newQuantityValue);
   };

   const handleAddToCart = (event) => {
      event.preventDefault();
      const updatedProduct = { ...product, quantity: productCardQuantity };
      addToCart(updatedProduct);
      const productCardTotalPrice = productObjectPrice * productCardQuantity;
      setSubTotalPrice((prev) => prev + productCardTotalPrice);
      setProductCardQuantity(1);
   };

   const productCardTotalPrice = (productObjectPrice * productCardQuantity).toFixed(2);

   return (
      <>
         {isDesktop && (
            <div className="product-card flex flex-col gap-5 lg:gap-16 xl:gap-24 w-64 sm:w-44 lg:w-48" aria-label="Product Card">
               <div className="product-card-upper-part flex flex-col gap-1 xl:gap-5">
                  <img className="rounded-sm size-64 sm:size-32 lg:size-48 xl:size-56 bg-contain" src={productObjectImage} alt="Product" />
                  <h1 className="font-semibold text-lg sm:text-base lg:text-lg xl:text-xl sm:size-32 lg:w-48">{productObjectName}</h1>
                  <p className="italic sm:text-sm lg:text-lg xl:text-xl sm:size-32 lg:w-48">{productObjectDescription}</p>
               </div>
               <div className="product-card-lower-part flex flex-col gap-1">
                  <span className="font-bold text-lg sm:text-base lg:text-lg xl:text-xl">${productCardTotalPrice}</span>
                  <form className="flex gap-5">
                     <div className="left-side-form flex flex-col">
                        <input className="text-lg sm:text-base lg:text-lg xl:text-xl size-[38px] sm:size-[34px] lg:size-[38px] pl-1 bg-[#4063bb63] border border-black rounded" type="number" value={productCardQuantity} onChange={handleProductCardQuantityChange} />
                     </div>
                     <div className="right-side-form">
                        <button className="font-semibold text-lg sm:text-base lg:text-lg xl:text-xl border border-black rounded p-1 bg-[#4062bb]" type="submit" onClick={handleAddToCart}>
                           Add to cart
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         )}
         {!isDesktop && (
            <div className="product-card flex flex-col justify-center items-start gap-5 w-64" aria-label="Product Card">
               <div className="product-card-upper-part flex flex-col gap-1">
                  <img className="rounded-sm size-64 bg-contain" src={productObjectImage} alt="Product" />
                  <h1 className="font-semibold text-lg">{productObjectName}</h1>
                  <p className="italic">{productObjectDescription}</p>
               </div>
               <div className="product-card-lower-part flex flex-col gap-1">
                  <span className="font-bold text-lg">{productCardTotalPrice}</span>
                  <form className="flex justify-center items-center gap-5" action="">
                     <div className="left-side-form flex flex-col">
                        <input className="text-lg size-[38px] pl-1 bg-[#4063bb63] border border-black rounded" type="number" value={productCardQuantity} onChange={handleProductCardQuantityChange} />
                     </div>
                     <div className="right-side-form">
                        <button className="font-semibold text-lg border border-black rounded p-1 bg-[#4062bb]" type="submit" onClick={handleAddToCart}>
                           Add to cart
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         )}
      </>
   );
}

ProductCard.propTypes = {
   isDesktop: PropTypes.bool.isRequired,
   addToCart: PropTypes.func.isRequired,
   setSubTotalPrice: PropTypes.func.isRequired,
};
