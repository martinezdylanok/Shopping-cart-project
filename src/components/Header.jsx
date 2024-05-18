import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import WhiteHamburguerMenuSvg from "../assets/menu_FILL0_wght400_GRAD0_opsz24 copy.svg";
import ShoppingCartSvg from "../assets/shopping_cart_FILL0_wght400_GRAD0_opsz24.svg";
import { useProductsInShoppingCart } from "../contexts/ProductsInShoppingCartContext";
import { useHeaderMenuIsOpen } from "../contexts/HeaderMenuIsOpenContext";
import { useToggleMenu } from "../contexts/ToggleMenuContext";

export default function Header({ isDesktop }) {
   const { productsInShoppingCart } = useProductsInShoppingCart();
   const { headerMenuIsOpen } = useHeaderMenuIsOpen();
   const { toggleMenu } = useToggleMenu();

   const scrollToAbout = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
         aboutSection.scrollIntoView({ behavior: "smooth" });
      }
   };

   const scrollToContact = () => {
      const aboutSection = document.getElementById("contact");
      if (aboutSection) {
         aboutSection.scrollIntoView({ behavior: "smooth" });
      }
   };

   return (
      <>
         {!isDesktop && (
            <header className="flex justify-between items-center px-2 py-5 bg-[#f45b69]">
               {!headerMenuIsOpen && (
                  <>
                     <h1 className="font-semibold text-[1.4em] sm:text-2xl md:text-3xl lg: text-white">Bob&apos;s Bizarre Bazaar</h1>
                     <button type="button" aria-label="Toggle Header Menu" className="hamburger-button flex items-center justify-center size-9" onClick={() => toggleMenu("header")}>
                        <img className="size-9" src={WhiteHamburguerMenuSvg} alt="hamburger-menu-icon" />
                     </button>
                  </>
               )}
               {headerMenuIsOpen && (
                  <>
                     <h1 className="font-semibold text-[1.4em] sm:text-2xl md:text-3xl lg: text-white">Bob&apos;s Bizarre Bazaar</h1>
                     <button type="button" aria-label="Toggle Header Menu" className="hamburger-button flex items-center justify-center size-9" onClick={() => toggleMenu("header")}>
                        <img className="size-9" src={WhiteHamburguerMenuSvg} alt="hamburger-menu-icon" />
                     </button>
                     <ul className="menu-items bg-white flex flex-col gap-1 rounded-sm absolute top-7 left-[180px] 2xs:left-[280px] 3xs:left-[380px] px-2 py-1">
                        <li>
                           <Link to="/" aria-label="Home">
                              HOME
                           </Link>
                        </li>
                        <li>
                           <Link to="/products" aria-label="Products">
                              PRODUCTS
                           </Link>
                        </li>
                        <li>
                           <Link to="/" aria-label="About" onClick={scrollToAbout}>
                              ABOUT
                           </Link>
                        </li>
                        <li>
                           <Link to="/" aria-label="Contact" onClick={scrollToContact}>
                              CONTACT
                           </Link>
                        </li>
                        <li>
                           <Link to="/cart" aria-label="Cart">
                              CART ({productsInShoppingCart.length})
                           </Link>
                        </li>
                     </ul>
                  </>
               )}
            </header>
         )}
         {isDesktop && (
            <header className="px-2 py-7 3xl: bg-[#f45b69]">
               <nav className="menu-items-container flex justify-evenly items-end 3xl:justify-center 3xl:gap-10" aria-label="Primary Navigation">
                  <Link to="/" aria-label="Home" className="sm:font-semibold lg:text-xl xl:text-2xl text-white hover:text-[#4062bb]">
                     Home
                  </Link>
                  <Link to="/products" aria-label="Products" className="sm:font-semibold lg:text-xl xl:text-2xl text-white hover:text-[#4062bb]">
                     Products
                  </Link>
                  <h1 className="font-semibold sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl text-white">Bob&apos;s Bizarre Bazaar</h1>
                  <Link to="/" aria-label="About" onClick={scrollToAbout} className="sm:font-semibold lg:text-xl xl:text-2xl text-white hover:text-[#4062bb]">
                     About
                  </Link>
                  <Link to="/" aria-label="Contact" onClick={scrollToContact} className="sm:font-semibold lg:text-xl xl:text-2xl text-white hover:text-[#4062bb]">
                     Contact
                  </Link>
                  <button type="button" aria-label="Shopping Cart" className="cart-button flex items-center justify-center size-6 lg:size-10 lg:p-1">
                     <Link to="/cart">
                        {" "}
                        <img className="size-6 lg:size-8" src={ShoppingCartSvg} alt="cart-icon" />
                     </Link>
                  </button>
                  <span className="text-[#4062bb] font-semibold text-lg sm:-ml-6 sm:mb-3 md:-ml-8 lg:mb-5 xl:mb-6 2xl:-ml-12">{productsInShoppingCart.length}</span>
               </nav>
            </header>
         )}
      </>
   );
}

Header.propTypes = {
   isDesktop: PropTypes.bool.isRequired,
};
