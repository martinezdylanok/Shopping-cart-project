import React, { useState, useEffect } from "react";
import ShoppingCartSvg from "../assets/shopping_cart_FILL0_wght400_GRAD0_opsz24.svg";
import BackgroundHeroImage from "../assets/malvestida-u79wy47kvVs-unsplash.jpg";
import LeatherBackpack from "../assets/alvaro-serrano-pFLNV4gkXsc-unsplash.jpg";
import HeadPhones from "../assets/c-d-x-PDX_a_82obo-unsplash.jpg";
import CocaCola from "../assets/daria-nepriakhina-Av-esLsvDvs-unsplash.jpg";
import MakeUp from "../assets/nataliya-melnychuk-PdzMmdHqN2c-unsplash.jpg";
import Bob from "../assets/jonas-kakaroto-KIPqvvTOC1s-unsplash.jpg";
import GitHubSvg from "../assets/github.svg";
import LinkedInSvg from "../assets/linkedin.svg";
import WhiteHamburguerMenuSvg from "../assets/menu_FILL0_wght400_GRAD0_opsz24 copy.svg";

export default function HomePage() {
   const [changeHeaderDisplay, setChangeHeaderDisplay] = useState(false);
   const [changeFormDisplay, setChangeFormDisplay] = useState(false);
   const [changeFooterDisplay, setChangeFooterDisplay] = useState(false);

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth < 641) {
            setChangeHeaderDisplay(false);
            setChangeFormDisplay(false);
            setChangeFooterDisplay(false);
         } else {
            setChangeHeaderDisplay(true);
            setChangeFormDisplay(true);
            setChangeFooterDisplay(true);
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
         {!changeHeaderDisplay && (
            <header className="flex justify-between items-center px-2 py-5 bg-[#f45b69]">
               <h1 className="font-semibold text-[1.4em] sm:text-2xl md:text-3xl lg: text-white">Bob's Bizarre Bazaar</h1>
               <button type="button" aria-label="Web Sections" className="hamburger-button flex items-center justify-center size-9 border-2 border-white">
                  <img className="size-6" src={WhiteHamburguerMenuSvg} alt="hamburger-menu-icon" />
               </button>
            </header>
         )}
         {changeHeaderDisplay && (
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
         <section className="hero-container bg-cover bg-center sm:mt-8 lg:mt-16 xl:mt-14 3xl:mt-0" aria-label="Products Background Image" style={{ backgroundImage: `url(${BackgroundHeroImage})` }}>
            <div className="hero-wrapper p-5 flex flex-col justify-center items-center gap-10 bg-gradient-to-r bg-[#52489c6f] sm:p-14 sm:gap-16 lg:p-32 xl:p-52">
               <h1 className="text-xl text-center font-bold text-white sm:text-3xl lg:text-4xl">Welcome to the Emporium of Extravagant Eccentricities!</h1>
               <p className="text-justify text-white sm:text-xl sm:px-20 lg:px-5">Gather 'round, seekers of splendid sensations and purveyors of peculiarity!</p>
               <button type="button" aria-label="Shop" className=" bg-[#f45b69] text-white font-bold py-2 px-4 hover:bg-[#4062bb] hover:transition duration-500 ease-in-out sm:py-4 sm:px-8">
                  <p className="text-xl font-bold">SHOP NOW</p>
               </button>
            </div>
         </section>
         <main className="flex flex-col my-20 sm:my-40 lg:my-60 3xl:my-20">
            <section className="products-container p-5" aria-label="Products Section">
               <div className="products-grid grid grid-rows-3 grid-cols-3 gap-5 sm:gap-16 lg:gap-24" aria-label="Products Grid">
                  <span className="row-start-1 row-end-2 col-start-1 col-end-2 flex justify-center items-center text-xl sm:text-2xl lg:text-3xl font-semibold bg-[#4062bb] hover:bg-[#f45b69] hover:transition duration-500 ease-in-out hover:cursor-pointer">BUY</span>
                  <div className="product-card  row-start-1 row-end-2 col-start-2 col-end-3 flex justify-center items-center">
                     <img className="size-16 sm:size-24 lg:size-32 rounded-full object-cover" aria-label="Leather Backpack" src={LeatherBackpack} alt="Leather Backpack" />
                  </div>
                  <div className="product-card row-start-2 row-end-3 col-start-1 col-end-2 flex justify-center items-center">
                     <img className="size-16 sm:size-24 lg:size-32 rounded-full object-cover" aria-label="Headphones" src={HeadPhones} alt="Headphones" />
                  </div>
                  <span className="row-start-2 row-end-3 col-start-2 col-end-3 flex justify-center items-center text-xl sm:text-2xl lg:text-3xl font-semibold">THEM</span>
                  <div className="product-card row-start-2 row-end-3 col-start-3 col-end-4 flex justify-center items-center">
                     <img className="size-16 sm:size-24 lg:size-32 rounded-full object-cover" aria-label="Coca Cola" src={CocaCola} alt="Coca Cola" />
                  </div>
                  <div className="product-card row-start-3 row-end-4 col-start-2 col-end-3 flex justify-center items-center">
                     <img className="size-16 sm:size-24 lg:size-32 rounded-full object-cover" aria-label="Makeup" src={MakeUp} alt="Makeup" />
                  </div>
                  <span className="row-start-3 row-end-4 col-start-3 col-end-4 flex justify-center items-center text-xl sm:text-2xl lg:text-3xl font-semibold bg-[#f45b69] hover:bg-[#4062bb] hover:transition duration-500 ease-in-out hover:cursor-pointer">ALL</span>
               </div>
               <div className="products-description mt-5 sm:mt-16 lg:mt-24">
                  <h2 className="text-2xl lg:text-3xl font-bold text-center">This is your CHANCE.</h2>
               </div>
            </section>
            <section className="about-container my-20 sm:my-40 lg:my-60 lg:flex 3xl:my-20" aria-label="About Section">
               <div className="bob-image lg:flex lg:items-center lg:justify-center lg:w-1/2">
                  <img className="lg:h-[480px] lg:object-cover xl:h-[640px]" aria-label="Bob" src={Bob} alt="Bob" />
               </div>
               <div className="about-wrapper flex flex-col justify-center items-center gap-10 p-5 sm:p-10 lg:p-5 lg:w-1/2 3xl:px-40 bg-gradient-to-r bg-[#f45b69]">
                  <h1 className="text-xl font-bold text-white sm:text-3xl 3xl:text-4xl">Who the f**k is Bob?</h1>
                  <p className="text-justify text-white sm:text-lg lg:text-xl 3xl:text-2xl">Meet Bob, a jovial chap with a penchant for pranks. One day, he launched "Bob's Bizarre Bazaar" as a joke, showcasing absurd products like glow-in-the-dark socks and inflatable bowties. To his surprise, orders poured in for these ridiculous items. Soon, Bob found himself unintentionally running a thriving online store. From bacon-scented candles to inflatable unicorn horns for cats, Bob's jest became an internet sensation, proving that laughter knows no bounds.</p>
               </div>
            </section>
            {changeFormDisplay && (
               <section className="contact-container flex flex-col justify-center items-center gap-24 md:gap-14 3xl:gap-24 bg-[#4062bb24] py-10 px-5 3xl:py-24" aria-label="Contact Section">
                  <h1 className="text-xl font-bold sm:text-3xl 3xl:text-4xl">Wanna say something?</h1>
                  <form className="flex flex-col items-start gap-5 bg-white shadow-md rounded p-8">
                     <div className="form-wrapper flex gap-10">
                        <div className="left-side-form flex flex-col gap-10">
                           <input className="sm:text-xl xl:text-2xl shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" aria-label="Name" type="text" id="name" name="name" placeholder="Name" required />
                           <input className="sm:text-xl xl:text-2xl shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" aria-label="Email" type="email" id="email" name="email" placeholder="Email adress" required />
                        </div>
                        <div className="right-side-form">
                           <textarea className="sm:text-xl xl:text-2xl shadow appearance-none border rounded w-full py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" aria-label="Message" id="message" name="message" rows="4" cols="30" placeholder="Write your message..." required />
                        </div>
                     </div>
                     <button className=" bg-[#4062bb] text-white font-bold py-2 px-4 mt-5 hover:bg-[#f45b69] hover:transition duration-500 ease-in-out sm:text-xl" aria-label="Submit" type="submit">
                        SUBMIT
                     </button>
                  </form>
               </section>
            )}
            {!changeFormDisplay && (
               <section className="contact-container flex flex-col gap-5 sm:gap-10 bg-[#4062bb24] px-5 py-10" aria-label="Contact Section">
                  <h1 className="text-xl text-center font-bold sm:text-4xl">Wanna say something?</h1>
                  <form className="flex flex-col gap-5 sm:gap-10">
                     <input className="sm:text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" aria-label="Name" type="text" id="name" name="name" placeholder="Name" required />
                     <input className="sm:text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" aria-label="Email" type="email" id="email" name="email" placeholder="Email adress" required />
                     <textarea className="sm:text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" aria-label="Message" id="message" name="message" rows="10" cols="30" placeholder="Write your message..." required />
                     <button className="p-10 bg-[#4062bb] text-white font-bold py-2 px-4 hover:bg-[#f45b69] hover:transition duration-500 ease-in-out sm:text-2xl" aria-label="Submit" type="submit">
                        SUBMIT
                     </button>
                  </form>
               </section>
            )}
         </main>
         {!changeFooterDisplay && (
            <footer className="flex flex-col items-center gap-16 p-5 bg-[#f45b69]">
               <h1 className="font-semibold text-[1.4em] text-white">Bob's Bizarre Bazaar</h1>
               <div className="footer-main-section flex flex-col items-center gap-5">
                  <button type="button" aria-label="Toggle Menu" className="hamburger-button flex items-center justify-center size-9">
                     <img className="size-9" src={WhiteHamburguerMenuSvg} alt="hamburger-menu-icon" />
                  </button>
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
               <span className="text-white">© 2024 Bob's Bizarre Bazaar</span>
            </footer>
         )}
         {changeFooterDisplay && (
            <footer className="flex flex-col gap-16 lg:gap-16 py-16 bg-[#f45b69]">
               <div className="main-footer-section flex justify-evenly">
                  <div className="main-footer-header">
                     <h1 className="font-semibold text-[1.4em] sm:text-3xl lg:text-4xl xl:text-5xl text-white">Bob's Bizarre Bazaar</h1>
                  </div>
                  <div className="main-footer-content flex flex-col items-center gap-2 xl:gap-5">
                     <h2 className="font-bold text-white mt-3 md:text-xl lg:text-2xl xl:text-3xl">Main links</h2>
                     <ul className="main-footer-list flex flex-col gap-1 xl:gap-2">
                        <li>
                           <a className="font-semibold text-white lg:text-lg xl:text-xl" aria-label="Home" href="">
                              HOME
                           </a>
                        </li>
                        <li>
                           <a className="font-semibold text-white lg:text-lg xl:text-xl" aria-label="Products" href="">
                              PRODUCTS
                           </a>
                        </li>
                        <li>
                           <a className="font-semibold text-white lg:text-lg xl:text-xl" aria-label="About" href="">
                              ABOUT
                           </a>
                        </li>
                        <li>
                           <a className="font-semibold text-white lg:text-lg xl:text-xl" aria-label="Contact" href="">
                              CONTACT
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div className="main-footer-social-media flex flex-col items-center gap-2 xl:gap-5">
                     <h2 className="font-bold text-white mt-3 md:text-xl lg:text-2xl xl:text-3xl">Get in touch</h2>
                     <ul className="flex flex-col gap-1 xl:gap-2">
                        <li>
                           <button type="button" aria-label="GitHub" className="github-button flex items-center justify-center size-9">
                              <img className="size-6 lg:size-8 xl:size-10" src={GitHubSvg} alt="gihub-icon" />
                           </button>
                        </li>
                        <li>
                           <button type="button" aria-label="LinkedIn" className="linkedin-button flex items-center justify-center size-9">
                              <img className="size-6 lg:size-8 xl:size-10" src={LinkedInSvg} alt="linkedin-icon" />
                           </button>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="final-footer-section self-center">
                  <span className="text-white text-sm md:text-base lg:text-lg xl:text-xl">© 2024 Bob's Bizarre Bazaar</span>
               </div>
            </footer>
         )}
      </>
   );
}
