import React from "react";
import ShoppingCartSvg from "../assets/shopping_cart_FILL0_wght400_GRAD0_opsz24.svg";

export default function HomePage() {
   return (
      <>
         <header>
            <h1 className="font-sans text-7xl font-bold text-slate-600">Shopping Web</h1>
         </header>
         <main className="flex flex-col">
            <div className="interactive-buttons flex justify-between items-center">
               <button type="button" className="current-page-button rounded-full bg-slate-600 size-20">
                  <p className="text-4xl text-stone-50">CP</p>
               </button>
               <button type="button" className="shopping-cart-button flex justify-center items-center rounded-full bg-slate-600 size-20">
                  <img src={ShoppingCartSvg} alt="shop-cart-icon" className="w-20 h-10" />
               </button>
            </div>
            <div className="text-container flex flex-col justify-center items-center border">
               <h2 className="text-4xl font-bold text-slate-500">Welcome to Our Website</h2>
               <p className="text-lg text-justify text-gray-700">We've been proudly serving customers for over 20 years, offering a wide range of products to meet your needs. Whether you're looking for electronics, clothing, home goods, or anything in between, we've got you covered. Shop with confidence knowing you're getting top-quality items and excellent customer service. Explore our website today and discover why customers have trusted us for decades.</p>
               <h2 className="text-4xl font-bold text-slate-500">Some of our beloved products</h2>
               <div className="images-carousel" />
               <div className="call-to-action bg-slate-200">
                  <h2 className="text-4xl font-bold text-slate-500">What are you waiting for? Check our products now</h2>
                  <button type="button" className="call-to-action-button bg-slate-500 text-stone-50 text-xl rounded">
                     Check products
                  </button>
               </div>
               <h2 className="text-4xl font-bold text-slate-500">What our customers say about us</h2>
               <div className="customer-reviews" />
            </div>
         </main>
         <footer>
            <p />
         </footer>
      </>
   );
}
