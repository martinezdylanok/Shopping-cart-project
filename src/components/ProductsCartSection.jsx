import React, { useState } from "react";
import PropTypes from "prop-types";
import CartProductCard from "./CartProductCard";

export default function ProductsCartSection({ isDesktop, productsInShoppingCart, addToCart, removeFromCart, setProductsInShoppingCart, subTotalPrice, setSubTotalPrice }) {
   const [messageSent, setMessageSent] = useState(false);

   const handlePayment = (event) => {
      if (productsInShoppingCart.length === 0) {
         return;
      }
      event.preventDefault();
      setMessageSent(true);
      setProductsInShoppingCart([]);
   };

   const shippingCost = 10;
   const totalPrice = subTotalPrice + shippingCost;

   return (
      <>
         {!isDesktop && (
            <main className="product-cart-section flex flex-col gap-20 my-20">
               {messageSent && (
                  <div className="flex flex-col items-center justify-center my-40 gap-5">
                     <h1 className="text-center font-bold text-2xl">Thank you for your order!</h1>
                     <h2 className="text-center font-bold text-xl">Bob will be shipping it soon.</h2>
                  </div>
               )}
               {!messageSent && (
                  <>
                     <div className="products-wrapper flex flex-col items-center justify-center gap-5" aria-label="Products Section">
                        <h1 className="text-center font-bold text-2xl">Items in your Shopping cart ({productsInShoppingCart.length})</h1>
                        <hr />
                        <div className="products-grid flex flex-col gap-5" aria-label="Products Grid">
                           {productsInShoppingCart.map((product, index) => (
                              <CartProductCard isDesktop={isDesktop} product={product} addToCart={addToCart} removeFromCart={removeFromCart} setSubTotalPrice={setSubTotalPrice} key={index} />
                           ))}
                        </div>
                     </div>
                     <div className="payment-information border p-3">
                        <h1 className="font-semibold text-2xl">Payment information</h1>
                        <hr />
                        <div className="content-wrapper flex justify-between items-center my-5">
                           <div className="left-side-content flex flex-col gap-2">
                              <span className="italic text-lg">
                                 Total items: <b>{productsInShoppingCart.length}</b>
                              </span>
                              <span className="italic text-lg">
                                 Subtotal: $
                                 <b>
                                    <u>{subTotalPrice.toFixed(2)}</u>
                                 </b>
                              </span>
                              <span className="italic text-lg">
                                 Shipping cost: $<b>{shippingCost}</b>
                              </span>
                              <span className="italic text-lg">
                                 TOTAL: $
                                 <b>
                                    <u>{totalPrice.toFixed(2)}</u>
                                 </b>
                              </span>
                           </div>
                           <div className="right-side-content">
                              <button type="button" onClick={handlePayment} className=" bg-[#4062bb] text-white text-lg font-semibold p-2 hover:bg-[#f45b69] hover:transition duration-500 ease-in-out sm:py-4 sm:px-8">
                                 PAY NOW
                              </button>
                           </div>
                        </div>
                     </div>
                  </>
               )}
            </main>
         )}{" "}
         {isDesktop && (
            <main className="products-cart-section flex flex-col gap-5 my-10">
               {messageSent && (
                  <div className="flex flex-col items-center justify-center my-96 gap-5">
                     <h1 className="text-center font-bold text-2xl">Thank you for your order!</h1>
                     <h2 className="text-center font-bold text-xl">Bob will be shipping it soon.</h2>
                  </div>
               )}
               {!messageSent && (
                  <>
                     <div className="products-wrapper">
                        <h1 className="font-semibold text-[1.4em] sm:text-2xl md:text-3xl mx-3">Items in your Shopping Cart ({productsInShoppingCart.length})</h1>
                        <hr />
                        <div className="products-grid p-3">
                           {productsInShoppingCart.map((product, index) => (
                              <CartProductCard isDesktop={isDesktop} product={product} addToCart={addToCart} removeFromCart={removeFromCart} setSubTotalPrice={setSubTotalPrice} key={index} />
                           ))}
                        </div>
                     </div>
                     <div className="payment-information border p-3">
                        <h1 className="font-semibold text-[1.4em] sm:text-2xl md:text-3xl">Payment information</h1>
                        <hr />
                        <div className="content-wrapper flex justify-between items-center my-5">
                           <div className="left-side-content flex flex-col gap-2">
                              <span className="italic text-xl">
                                 Total items: <b>{productsInShoppingCart.length}</b>
                              </span>
                              <span className="italic text-xl">
                                 Subtotal: $
                                 <b>
                                    <u>{subTotalPrice.toFixed(2)}</u>
                                 </b>
                              </span>
                              <span className="italic text-xl">
                                 Shipping cost: $<b>{shippingCost}</b>
                              </span>
                              <span className="italic text-xl">
                                 TOTAL: $
                                 <b>
                                    <u>{totalPrice.toFixed(2)}</u>
                                 </b>
                              </span>
                           </div>
                           <div className="right-side-content">
                              <button type="button" onClick={handlePayment} className=" bg-[#4062bb] text-white text-lg font-semibold p-2 hover:bg-[#f45b69] hover:transition duration-500 ease-in-out sm:py-4 sm:px-8">
                                 PAY NOW
                              </button>
                           </div>
                        </div>
                     </div>
                  </>
               )}
            </main>
         )}
      </>
   );
}

ProductsCartSection.propTypes = {
   isDesktop: PropTypes.bool.isRequired,
   productsInShoppingCart: PropTypes.instanceOf(Array).isRequired,
   addToCart: PropTypes.func.isRequired,
   removeFromCart: PropTypes.func.isRequired,
   setProductsInShoppingCart: PropTypes.func.isRequired,
   subTotalPrice: PropTypes.number.isRequired,
   setSubTotalPrice: PropTypes.func.isRequired,
};
