import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import WhiteHamburguerMenuSvg from "../assets/menu_FILL0_wght400_GRAD0_opsz24 copy.svg";
import GitHubSvg from "../assets/github.svg";
import LinkedInSvg from "../assets/linkedin.svg";

export default function Footer({ isDesktop, footerMenuIsOpen, productsInShoppingCart, toggleMenu }) {
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
            <footer className="flex flex-col items-center gap-16 p-5 bg-[#f45b69]">
               <h1 className="font-semibold text-[1.4em] text-white">Bob&apos;s Bizarre Bazaar</h1>
               <div className="footer-main-section flex flex-col items-center gap-5">
                  {!footerMenuIsOpen && (
                     <button type="button" aria-label="Toggle Footer Menu" className="hamburger-button flex items-center justify-center size-9" onClick={() => toggleMenu("footer")}>
                        <img className="size-9 animate-[spin_5s_linear_infinite]" src={WhiteHamburguerMenuSvg} alt="hamburger-menu-icon" />
                     </button>
                  )}
                  {footerMenuIsOpen && (
                     <>
                        <button type="button" aria-label="Toggle Footer Menu" className="hamburger-button flex items-center justify-center size-9" onClick={() => toggleMenu("footer")}>
                           <img className="size-9 animate-[spin_5s_linear_infinite]" src={WhiteHamburguerMenuSvg} alt="hamburger-menu-icon" />
                        </button>
                        <ul className="menu-items bg-white flex flex-col gap-1 rounded-sm px-2 py-1">
                           <li>
                              <Link to="/">HOME</Link>
                           </li>
                           <li>
                              <Link to="/products">PRODUCTS</Link>
                           </li>
                           <li>
                              <Link to="/" onClick={scrollToAbout}>
                                 ABOUT
                              </Link>
                           </li>
                           <li>
                              <Link to="/" onClick={scrollToContact}>
                                 CONTACT
                              </Link>
                           </li>
                           <li>
                              <Link to="/cart">CART ({productsInShoppingCart.length})</Link>
                           </li>
                        </ul>
                     </>
                  )}
                  <div className="social-media-wrapper flex items-center justify-center">
                     <button type="button" aria-label="GitHub" className="github-button flex items-center justify-center size-9">
                        <img className="size-6" src={GitHubSvg} alt="gihub-icon" />
                     </button>
                     <button type="button" aria-label="LinkedIn" className="linkedin-button flex items-center justify-center size-9">
                        <img className="size-6" src={LinkedInSvg} alt="linkedin-icon" />
                     </button>
                  </div>
                  <span className="text-white text-xs">Made with ❤️ by DylanMartinezOk</span>
               </div>
               <span className="text-white">© 2024 Bob&apos;s Bizarre Bazaar</span>
            </footer>
         )}
         {isDesktop && (
            <footer className="flex flex-col gap-16 lg:gap-16 pt-16 pb-8 bg-[#f45b69]">
               <div className="main-footer-section flex justify-evenly">
                  <div className="main-footer-header">
                     <h1 className="font-semibold text-[1.4em] sm:text-3xl lg:text-4xl xl:text-5xl text-white">Bob&apos;s Bizarre Bazaar</h1>
                  </div>
                  <div className="main-footer-content flex flex-col items-center gap-2 xl:gap-5">
                     <h2 className="font-bold text-white mt-3 md:text-xl lg:text-2xl xl:text-3xl">Main links</h2>
                     <ul className="main-footer-list flex flex-col gap-1 xl:gap-2">
                        <li>
                           <Link to="/" className="font-semibold text-white hover:text-[#4062bb] lg:text-lg xl:text-xl" aria-label="Home">
                              HOME
                           </Link>
                        </li>
                        <li>
                           <Link to="/products" className="font-semibold hover:text-[#4062bb] text-white lg:text-lg xl:text-xl" aria-label="Products">
                              PRODUCTS
                           </Link>
                        </li>
                        <li>
                           <Link to="/" onClick={scrollToAbout} className="font-semibold text-white hover:text-[#4062bb] lg:text-lg xl:text-xl" aria-label="About">
                              ABOUT
                           </Link>
                        </li>
                        <li>
                           <Link to="/" onClick={scrollToContact} className="font-semibold text-white hover:text-[#4062bb] lg:text-lg xl:text-xl" aria-label="Contact">
                              CONTACT
                           </Link>
                        </li>
                        <li>
                           <Link to="/cart" className="font-semibold text-white lg:text-lg hover:text-[#4062bb] xl:text-xl" aria-label="Contact">
                              CART
                           </Link>
                        </li>
                     </ul>
                  </div>
                  <div className="main-footer-social-media flex flex-col items-center gap-2 xl:gap-5">
                     <h2 className="font-bold text-white mt-3 md:text-xl lg:text-2xl xl:text-3xl">Get in touch</h2>
                     <ul className="flex flex-col gap-1 xl:gap-2">
                        <li>
                           <a href="https://github.com/martinezdylanok" target="_blank" aria-label="GitHub" className="github-button flex items-center justify-center size-9 " rel="noreferrer">
                              <img className="size-6 lg:size-8 xl:size-10 hover:stroke-[#4062bb]" src={GitHubSvg} alt="gihub-icon" />
                           </a>
                        </li>
                        <li>
                           <a href="https://www.linkedin.com/in/martinezdylanok/" target="_blank" aria-label="LinkedIn" className="linkedin-button flex items-center justify-center size-9" rel="noreferrer">
                              <img className="size-6 lg:size-8 xl:size-10" src={LinkedInSvg} alt="linkedin-icon" />
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="final-footer-section self-center">
                  <span className="text-white text-sm md:text-base lg:text-lg xl:text-xl">© 2024 Bob&apos;s Bizarre Bazaar</span>
               </div>
            </footer>
         )}
      </>
   );
}

Footer.propTypes = {
   isDesktop: PropTypes.bool.isRequired,
   footerMenuIsOpen: PropTypes.bool.isRequired,
   productsInShoppingCart: PropTypes.instanceOf(Array).isRequired,
   toggleMenu: PropTypes.func.isRequired,
};
