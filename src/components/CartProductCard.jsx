import React, { useState } from "react";
import PropTypes from "prop-types";
import formatProductData from "../modules/formatProductData";
import { useAddToCart } from "../contexts/AddToCartContext";
import { useRemoveFromCart } from "../contexts/RemoveFromCartContext";
import { useSubTotalPrice } from "../contexts/SubTotalPriceContext";

export default function CartProductCard({ isDesktop, product }) {
   const [cartProductCardQuantity, setCartProductCardQuantity] = useState(product.quantity);
   const { addToCart } = useAddToCart();
   const { removeFromCart } = useRemoveFromCart();
   const { setSubTotalPrice } = useSubTotalPrice();

   if (!product) {
      return <span className="flex justify-center">Loading a lovely product...</span>;
   }

   const formattedProductObject = formatProductData(product);

   const { productObjectName, productObjectDescription, productObjectPrice, productObjectImage } = formattedProductObject;

   const handleAddToCart = (event, difference) => {
      event.preventDefault();
      const updatedProduct = { ...product, quantity: difference };
      addToCart(updatedProduct);
   };

   const handleRemoveFromCart = (event) => {
      event.preventDefault();
      const removedProductTotalPrice = productObjectPrice * cartProductCardQuantity;
      setSubTotalPrice((prev) => prev - removedProductTotalPrice);
      removeFromCart(product.id);
   };

   const handleCartProductCardQuantityChange = (event) => {
      if (event.target.value <= "0") {
         return;
      }
      const newQuantityValue = parseFloat(event.target.value);
      const difference = newQuantityValue - cartProductCardQuantity;
      setCartProductCardQuantity(newQuantityValue);
      const priceDifference = productObjectPrice * difference;
      if (difference > 0) {
         // If the difference is positive, increment the subtotal
         setSubTotalPrice((prev) => prev + priceDifference);
      } else if (difference < 0) {
         // If the difference is negative, decrement the subtotal
         setSubTotalPrice((prev) => prev - Math.abs(priceDifference));
      }
      handleAddToCart(event, difference);
   };

   const cartProductCardTotalPrice = (productObjectPrice * cartProductCardQuantity).toFixed(2);

   return (
      <>
         {!isDesktop && (
            <div className="cart-product-card flex flex-col gap-5 lg:gap-16 xl:gap-24 w-64 sm:w-44 lg:w-48 border-2 p-2" aria-label="Product Card">
               <div className="product-card-upper-part flex flex-col gap-1 xl:gap-5">
                  <img className="rounded-sm size-64 bg-contain" src={productObjectImage} alt="Product" />
                  <h1 className="font-semibold text-lg sm:text-base lg:text-lg xl:text-xl sm:size-32 lg:w-48">{productObjectName}</h1>
                  <p className="italic sm:text-sm lg:text-lg xl:text-xl sm:size-32 lg:w-48">{productObjectDescription}</p>
               </div>
               <div className="product-card-lower-part flex flex-col gap-1">
                  <span className="font-bold text-lg sm:text-base lg:text-lg xl:text-xl">${cartProductCardTotalPrice}</span>
                  <form className="flex gap-5" action="">
                     <div className="left-side-form flex flex-col">
                        <input className="text-lg sm:text-base lg:text-lg xl:text-xl size-[38px] sm:size-[34px] lg:size-[38px] pl-1 bg-[#4063bb63] border border-black rounded" type="number" value={cartProductCardQuantity} onChange={handleCartProductCardQuantityChange} />
                     </div>
                     <div className="right-side-form">
                        <button className="font-semibold text-lg sm:text-base lg:text-lg xl:text-xl border border-black rounded p-1 bg-[#4062bb]" type="submit" onClick={handleRemoveFromCart}>
                           Remove
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         )}
         {isDesktop && (
            <div className="cart-product-card flex gap-5 my-5 border-2" aria-label="Product Card">
               <img className="rounded-sm size-64 bg-contain border-r-2" src={productObjectImage} alt="Product" />
               <div className="cart-product-card-wrapper flex flex-col gap-5 p-2">
                  <h1 className="font-semibold text-xl">{product.title}</h1>
                  <p className="font-light italic w-56 md:w-80 lg:w-96 xl:w-full">{productObjectDescription}</p>
                  <div className="quantity-and-price-wrapper flex items-center gap-5">
                     <input className="text-lg size-[38px] pl-1 bg-[#4063bb63] border border-black rounded" type="number" value={cartProductCardQuantity} onChange={handleCartProductCardQuantityChange} />
                     <span className="font-bold text-2xl">${cartProductCardTotalPrice}</span>
                  </div>
                  <button className="font-semibold w-fit text-lg text-white border border-black rounded p-1 bg-[#4062bb]" type="submit" onClick={handleRemoveFromCart}>
                     Remove
                  </button>
               </div>
            </div>
         )}
      </>
   );
}

CartProductCard.propTypes = {
   isDesktop: PropTypes.bool.isRequired,
};
