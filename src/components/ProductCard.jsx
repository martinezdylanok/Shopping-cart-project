import React, { useState } from "react";
import formatProductData from "../modules/formatProductData";
import handleQuantityChange from "../modules/handleQuantityChange";
import calculateTotalPrice from "../modules/calculateTotalPrice";

export default function ProductCard({ isDesktop, product, addToCart }) {
   const [quantity, setQuantity] = useState(1);

   if (!product) {
      return <span className="flex justify-center">Loading a lovely product...</span>;
   }

   const formattedProductData = formatProductData(product);

   const { productName, productDescription, productPrice, productImage } = formattedProductData;

   const handleQuantityChangeHandler = (event) => {
      setQuantity(handleQuantityChange(event.target.value));
   };

   const handleAddToCart = (e) => {
      e.preventDefault();
      addToCart(product, quantity);
      setQuantity(1);
   };

   const totalPrice = calculateTotalPrice(productPrice, quantity);

   return (
      <>
         {isDesktop && (
            <div className="product-card flex flex-col gap-5 lg:gap-16 xl:gap-24 w-64 sm:w-44 lg:w-48" aria-label="Product Card">
               <div className="product-card-upper-part flex flex-col gap-1 xl:gap-5">
                  <img className="rounded-sm size-64 sm:size-32 lg:size-48 xl:size-56 bg-contain" src={productImage} alt="Product" />
                  <h1 className="font-semibold text-lg sm:text-base lg:text-lg xl:text-xl sm:size-32 lg:w-48">{productName}</h1>
                  <p className="italic sm:text-sm lg:text-lg xl:text-xl sm:size-32 lg:w-48">{productDescription}</p>
               </div>
               <div className="product-card-lower-part flex flex-col gap-1">
                  <span className="font-bold text-lg sm:text-base lg:text-lg xl:text-xl">{totalPrice}</span>
                  <form className="flex gap-5" action="">
                     <div className="left-side-form flex flex-col">
                        <input className="text-lg sm:text-base lg:text-lg xl:text-xl size-[38px] sm:size-[34px] lg:size-[38px] pl-1 bg-[#4063bb63] border border-black rounded" type="number" value={quantity} onChange={handleQuantityChangeHandler} />
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
                  <img className="rounded-sm size-64 bg-contain" src={productImage} alt="Product" />
                  <h1 className="font-semibold text-lg">{productName}</h1>
                  <p className="italic">{productDescription}</p>
               </div>
               <div className="product-card-lower-part flex flex-col gap-1">
                  <span className="font-bold text-lg">{totalPrice}</span>
                  <form className="flex justify-center items-center gap-5" action="">
                     <div className="left-side-form flex flex-col">
                        <input className="text-lg size-[38px] pl-1 bg-[#4063bb63] border border-black rounded" type="number" value={quantity} onChange={handleQuantityChangeHandler} />
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
