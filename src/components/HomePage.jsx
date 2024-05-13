import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BackgroundHeroImage from "../assets/malvestida-u79wy47kvVs-unsplash.jpg";
import LeatherBackpack from "../assets/alvaro-serrano-pFLNV4gkXsc-unsplash.jpg";
import HeadPhones from "../assets/c-d-x-PDX_a_82obo-unsplash.jpg";
import CocaCola from "../assets/daria-nepriakhina-Av-esLsvDvs-unsplash.jpg";
import MakeUp from "../assets/nataliya-melnychuk-PdzMmdHqN2c-unsplash.jpg";
import Bob from "../assets/jonas-kakaroto-KIPqvvTOC1s-unsplash.jpg";

export default function HomePage({ isDesktop, headerMenuIsOpen, footerMenuIsOpen, productsInShoppingCart, toggleMenu }) {
   const [messageSent, setMessageSent] = useState(false);

   const handleSubmit = (event) => {
      event.preventDefault();
      setMessageSent(true);
   };

   return (
      <>
         <Header isDesktop={isDesktop} headerMenuIsOpen={headerMenuIsOpen} productsInShoppingCart={productsInShoppingCart} toggleMenu={toggleMenu} />
         <section className="hero-container bg-cover bg-center" aria-label="Products Background Image" style={{ backgroundImage: `url(${BackgroundHeroImage})` }}>
            <div className="hero-wrapper p-5 flex flex-col justify-center items-center gap-10 bg-gradient-to-r bg-[#52489c6f] sm:p-14 sm:gap-16 lg:p-32 xl:p-52">
               <h1 className="text-xl text-center font-bold text-white sm:text-3xl lg:text-4xl">Welcome to the Emporium of Extravagant Eccentricities!</h1>
               <p className="text-justify text-white sm:text-xl sm:px-20 lg:px-5">Gather &apos;round, seekers of splendid sensations and purveyors of peculiarity!</p>
               <button type="button" aria-label="Shop" className=" bg-[#f45b69] text-white font-bold py-2 px-4 hover:bg-[#4062bb] hover:transition duration-500 ease-in-out sm:py-4 sm:px-8">
                  <Link to="/products" aria-label="Products" className="text-xl font-bold">
                     SHOP NOW
                  </Link>
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
            <section id="about" className="about-container my-20 sm:my-40 lg:my-60 lg:flex 3xl:my-20" aria-label="About Section">
               <div className="bob-image lg:flex lg:items-center lg:justify-center lg:w-1/2">
                  <img className="lg:h-[480px] lg:object-cover xl:h-[640px]" aria-label="Bob" src={Bob} alt="Bob" />
               </div>
               <div className="about-wrapper flex flex-col justify-center items-center gap-10 p-5 sm:p-10 lg:p-5 lg:w-1/2 3xl:px-40 bg-gradient-to-r bg-[#f45b69]">
                  <h1 className="text-xl font-bold text-white sm:text-3xl 3xl:text-4xl">Who the f**k is Bob?</h1>
                  <p className="text-justify text-white sm:text-lg lg:text-xl 3xl:text-2xl">Meet Bob, a jovial chap with a penchant for pranks. One day, he launched &quot;Bob&apos;s Bizarre Bazaar&quot; as a joke, showcasing absurd products like glow-in-the-dark socks and inflatable bowties. To his surprise, orders poured in for these ridiculous items. Soon, Bob found himself unintentionally running a thriving online store. From bacon-scented candles to inflatable unicorn horns for cats, Bob's jest became an internet sensation, proving that laughter knows no bounds.</p>
               </div>
            </section>
            {isDesktop && (
               <section id="contact" className="contact-container flex flex-col justify-center items-center gap-24 md:gap-14 3xl:gap-24 bg-[#4062bb24] py-10 px-5 3xl:py-24" aria-label="Contact Section">
                  <h1 className="text-xl font-bold sm:text-3xl 3xl:text-4xl">Wanna say something?</h1>
                  {!messageSent && (
                     <form onSubmit={handleSubmit} className="flex flex-col items-start gap-5 bg-white shadow-md rounded p-8">
                        <div className="form-wrapper flex gap-10">
                           <div className="left-side-form flex flex-col gap-10">
                              <input className="sm:text-xl xl:text-2xl shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" aria-label="Name" type="text" id="name" name="name" placeholder="Name" required />
                              <input className="sm:text-xl xl:text-2xl shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" aria-label="Email" type="email" id="email" name="email" placeholder="Email address" required />
                           </div>
                           <div className="right-side-form">
                              <textarea className="sm:text-xl xl:text-2xl shadow appearance-none border rounded w-full py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" aria-label="Message" id="message" name="message" rows="4" cols="30" placeholder="Write your message..." required />
                           </div>
                        </div>
                        <button className=" bg-[#4062bb] text-white font-bold py-2 px-4 mt-5 hover:bg-[#f45b69] hover:transition duration-500 ease-in-out sm:text-xl" aria-label="Submit" type="submit">
                           SUBMIT
                        </button>
                     </form>
                  )}
                  {messageSent && <div className="text-xl text-[#f45b69] font-bold sm:text-3xl 3xl:text-4xl">Message sent! Bob will contact you soon.</div>}
               </section>
            )}
            {!isDesktop && (
               <section id="contact" className="contact-container flex flex-col gap-5 sm:gap-10 bg-[#4062bb24] px-5 py-10" aria-label="Contact Section">
                  <h1 className="text-xl text-center font-bold sm:text-4xl">Wanna say something?</h1>
                  <form className="flex flex-col gap-5 sm:gap-10">
                     <input className="sm:text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" aria-label="Name" type="text" id="name" name="name" placeholder="Name" required />
                     <input className="sm:text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" aria-label="Email" type="email" id="email" name="email" placeholder="Email address" required />
                     <textarea className="sm:text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" aria-label="Message" id="message" name="message" rows="10" cols="30" placeholder="Write your message..." required />
                     <button className="p-10 bg-[#4062bb] text-white font-bold py-2 px-4 hover:bg-[#f45b69] hover:transition duration-500 ease-in-out sm:text-2xl" aria-label="Submit" type="submit">
                        SUBMIT
                     </button>
                  </form>
               </section>
            )}
         </main>
         <Footer isDesktop={isDesktop} footerMenuIsOpen={footerMenuIsOpen} productsInShoppingCart={productsInShoppingCart} toggleMenu={toggleMenu} />
      </>
   );
}

HomePage.propTypes = {
   isDesktop: PropTypes.bool.isRequired,
   productsInShoppingCart: PropTypes.instanceOf(Array).isRequired,
   toggleMenu: PropTypes.func.isRequired,
   headerMenuIsOpen: PropTypes.bool.isRequired,
   footerMenuIsOpen: PropTypes.bool.isRequired,
};
