import React from "react";
import WhiteHamburguerMenuSvg from "../assets/menu_FILL0_wght400_GRAD0_opsz24 copy.svg";
import ShoppingCartSvg from "../assets/shopping_cart_FILL0_wght400_GRAD0_opsz24.svg";

export default function Header({ isDesktop }) {
   return (
      <>
         {!isDesktop && (
            <header className="flex justify-between items-center px-2 py-5 bg-[#f45b69]">
               <h1 className="font-semibold text-[1.4em] sm:text-2xl md:text-3xl lg: text-white">Bob's Bizarre Bazaar</h1>
               <button type="button" aria-label="Web Sections" className="hamburger-button flex items-center justify-center size-9 border-2 border-white">
                  <img className="size-6" src={WhiteHamburguerMenuSvg} alt="hamburger-menu-icon" />
               </button>
            </header>
         )}
         {isDesktop && (
            <header className="px-2 py-7 3xl: bg-[#f45b69]">
               <nav className="menu-items-container flex justify-evenly items-end 3xl:justify-center 3xl:gap-10" aria-label="Primary Navigation">
                  <a aria-label="Home" href="#" className="sm:font-semibold lg:text-xl xl:text-2xl text-white hover:text-[#4062bb]">
                     Home
                  </a>
                  <a aria-label="Products" href="#" className="sm:font-semibold lg:text-xl xl:text-2xl text-white hover:text-[#4062bb]">
                     Products
                  </a>
                  <h1 className="font-semibold sm:text-3xl lg:text-5xl xl:text-7xl text-white">Bob's Bizarre Bazaar</h1>
                  <a aria-label="About" href="#" className="sm:font-semibold lg:text-xl xl:text-2xl text-white hover:text-[#4062bb]">
                     About
                  </a>
                  <a aria-label="Contact" href="#" className="sm:font-semibold lg:text-xl xl:text-2xl text-white hover:text-[#4062bb]">
                     Contact
                  </a>
                  <button type="button" aria-label="Shopping Cart" className="cart-button flex items-center justify-center size-6 lg:size-8 border whitespace-normal">
                     <img className="size-6 lg:size-8" src={ShoppingCartSvg} alt="cart-icon" />
                  </button>
               </nav>
            </header>
         )}
      </>
   );
}
