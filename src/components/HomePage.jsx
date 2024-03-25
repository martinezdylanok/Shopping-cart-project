import React, { useState, useEffect } from "react";
import ShoppingCartSvg from "../assets/shopping_cart_FILL0_wght400_GRAD0_opsz24.svg";
import HamburgerMenuSvg from "../assets/menu_FILL0_wght400_GRAD0_opsz24.svg";
import BackgroundHeroImage from "../assets/malvestida-u79wy47kvVs-unsplash.jpg";
import LeatherBackpack from "../assets/alvaro-serrano-pFLNV4gkXsc-unsplash.jpg";
import HeadPhones from "../assets/c-d-x-PDX_a_82obo-unsplash.jpg";
import CocaCola from "../assets/daria-nepriakhina-Av-esLsvDvs-unsplash.jpg";
import MakeUp from "../assets/nataliya-melnychuk-PdzMmdHqN2c-unsplash.jpg";
import Bob from "../assets/jonas-kakaroto-KIPqvvTOC1s-unsplash.jpg";

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
         <section className="hero-container bg-cover bg-center mt-5 sm:mt-8 sm:-mx-8 lg:mt-16 xl:mt-14" style={{ backgroundImage: `url(${BackgroundHeroImage})` }}>
            <div className="hero-wrapper p-5 flex flex-col justify-center items-center gap-10 bg-gradient-to-r bg-[#52489c6f] sm:p-14 sm:gap-16 lg:p-32 xl:p-52">
               <h1 className="text-xl font-bold text-white sm:text-3xl lg:text-4xl">Welcome to the Emporium of Extravagant Eccentricities!</h1>
               <p className="text-justify text-white sm:text-xl sm:px-20 lg:px-5">Gather 'round, seekers of splendid sensations and purveyors of peculiarity!</p>
               <button type="button" className=" bg-[#f45b69] text-white font-bold py-2 px-4 hover:bg-[#52489c] hover:transition duration-500 ease-in-out sm:py-4 sm:px-8">
                  <p className="text-xl font-light sm:font-semibold">SHOP NOW</p>
               </button>
            </div>
         </section>
         <main className="flex flex-col my-20 sm:my-40 lg:my-60">
            <section className="products-container">
               <div className="products-grid grid grid-rows-3 grid-cols-3 gap-5 sm:gap-16 lg:gap-24">
                  <span className="row-start-1 row-end-2 col-start-1 col-end-2 flex justify-center items-center text-xl sm:text-2xl lg:text-3xl font-semibold bg-[#52489c] hover:bg-[#f45b69] hover:transition duration-500 ease-in-out hover:cursor-pointer">BUY</span>
                  <div className="product-card  row-start-1 row-end-2 col-start-2 col-end-3 flex justify-center items-center">
                     <img className="size-16 sm:size-24 lg:size-32 rounded-full object-cover" src={LeatherBackpack} alt="Leather Backpack" />
                  </div>
                  <div className="product-card row-start-2 row-end-3 col-start-1 col-end-2 flex justify-center items-center">
                     <img className="size-16 sm:size-24 lg:size-32 rounded-full object-cover" src={HeadPhones} alt="Headphones" />
                  </div>
                  <span className="row-start-2 row-end-3 col-start-2 col-end-3 flex justify-center items-center text-xl sm:text-2xl lg:text-3xl font-semibold">THEM</span>
                  <div className="product-card row-start-2 row-end-3 col-start-3 col-end-4 flex justify-center items-center">
                     <img className="size-16 sm:size-24 lg:size-32 rounded-full object-cover" src={CocaCola} alt="Coca Cola" />
                  </div>
                  <div className="product-card row-start-3 row-end-4 col-start-2 col-end-3 flex justify-center items-center">
                     <img className="size-16 sm:size-24 lg:size-32 rounded-full object-cover" src={MakeUp} alt="Make Up" />
                  </div>
                  <span className="row-start-3 row-end-4 col-start-3 col-end-4 flex justify-center items-center text-xl sm:text-2xl lg:text-3xl font-semibold bg-[#f45b69] hover:bg-[#52489c] hover:transition duration-500 ease-in-out hover:cursor-pointer">ALL</span>
               </div>
               <div className="products-description mt-5 sm:mt-16 lg:mt-24">
                  <h2 className="text-2xl lg:text-3xl font-bold text-center">This is your CHANCE.</h2>
               </div>
            </section>
            <section className="about-container my-20 sm:my-40 lg:my-60 lg:flex">
               <div className="bob-image lg:flex lg:items-center lg:justify-center lg:w-1/2">
                  <img className="lg:h-[480px] lg:object-cover" src={Bob} alt="Bob" />
               </div>
               <div className="about-wrapper flex flex-col justify-center items-center gap-10 p-5 sm:p-10 lg:p-5 lg:w-1/2 bg-gradient-to-r bg-[#f45b69]">
                  <h1 className="text-xl font-bold text-white sm:text-4xl lg:text-3xl">Who the f**k is Bob?</h1>
                  {/* Add a secondary text for 320px width sizes */}
                  <p className="text-justify text-white sm:text-xl lg:text-xl">Meet Bob, a jovial chap with a penchant for pranks. One day, he launched "Bob's Bizarre Bazaar" as a joke, showcasing absurd products like glow-in-the-dark socks and inflatable bowties. To his surprise, orders poured in for these ridiculous items. Soon, Bob found himself unintentionally running a thriving online store. From bacon-scented candles to inflatable unicorn horns for cats, Bob's jest became an internet sensation, proving that laughter knows no bounds.</p>
               </div>
            </section>
         </main>
         <footer>
            <p />
         </footer>
      </>
   );
}
