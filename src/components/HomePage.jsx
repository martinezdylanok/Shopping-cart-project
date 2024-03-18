import React, { useState, useEffect } from "react";
import ShoppingCartSvg from "../assets/shopping_cart_FILL0_wght400_GRAD0_opsz24.svg";
import HamburgerMenuSvg from "../assets/menu_FILL0_wght400_GRAD0_opsz24.svg";
import BackgroundHeroImage from "../assets/malvestida-u79wy47kvVs-unsplash.jpg";

export default function HomePage() {
   const [showToggleMenu, setShowToggleMenu] = useState(false);

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth < 1024) {
            setShowToggleMenu(true);
         } else {
            setShowToggleMenu(false);
         }
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   return (
      <>
         {showToggleMenu && (
            <header className="flex justify-between items-center">
               <h1 className="font-semibold text-[1.4em] sm:text-2xl md:text-3xl lg: text-[#52489c]">Bob's Bizarre Bazaar</h1>
               <nav className="buttons-container flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4" aria-label="Primary Navigation">
                  <button type="button" aria-label="Toggle Menu" className="hamburger-button flex items-center justify-center size-9 border-2 border-[#f45b69]">
                     <img className="size-6" src={HamburgerMenuSvg} alt="hamburger-menu-icon" />
                  </button>
                  <button type="button" aria-label="Shopping Cart" className="cart-button flex items-center justify-center size-9 border-2 border-[#4062bb]">
                     <img className="size-6" src={ShoppingCartSvg} alt="cart-icon" />
                  </button>
               </nav>
            </header>
         )}
         {!showToggleMenu && (
            <header className="">
               <nav className="menu-items-container flex justify-evenly items-end" aria-label="Primary Navigation">
                  <a href="#" className="lg:text-xl xl:text-2xl text-gray-700 hover:text-[#f45b69]">
                     Home
                  </a>
                  <a href="#" className="lg:text-xl xl:text-2xl text-gray-700 hover:text-[#f45b69]">
                     Products
                  </a>
                  <h1 className="font-semibold lg:text-5xl xl:text-7xl text-[#52489c]">Bob's Bizarre Bazaar</h1>
                  <a href="#" className="lg:text-xl xl:text-2xl text-gray-700 hover:text-[#f45b69]">
                     About
                  </a>
                  <a href="#" className="lg:text-xl xl:text-2xl text-gray-700 hover:text-[#f45b69]">
                     Contact
                  </a>
                  <button type="button" aria-label="Shopping Cart" className="cart-button flex items-center justify-center size-9 border-2 border-[#4062bb]">
                     <img className="size-6" src={ShoppingCartSvg} alt="cart-icon" />
                  </button>
               </nav>
            </header>
         )}
         <section className="hero-container bg-cover bg-center my-5 sm:my-8 sm:-mx-8 lg:my-16 xl:my-14" style={{ backgroundImage: `url(${BackgroundHeroImage})` }}>
            <div className="hero-wrapper p-5 flex flex-col justify-center items-center gap-10 bg-gradient-to-r bg-[#52489c6f] sm:p-14 sm:gap-16 lg:p-32 xl:p-52">
               <h1 className="text-xl font-bold text-white sm:text-3xl lg:text-4xl">Welcome to the Emporium of Extravagant Eccentricities!</h1>
               <p className="text-justify text-white sm:text-xl sm:px-20">Gather 'round, seekers of splendid sensations and purveyors of peculiarity!</p>
               <button type="button" className=" bg-[#f45b69] text-white font-bold py-2 px-4 hover:bg-[#52489c] hover:transition duration-500 ease-in-out sm:py-4 sm:px-8">
                  <p className="text-xl font-light sm:font-semibold">SHOP NOW</p>
               </button>
            </div>
         </section>
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
