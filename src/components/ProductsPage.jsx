import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import HeaderBackgroundImage from "../assets/daria-nepriakhina-zNU3ErDAbAw-unsplash.jpg";
import ProductCard from "./ProductCard";

export default function ProductsPage({ isDesktop, products, addToCart, setSubTotalPrice }) {
   return (
      <>
         <Header isDesktop={isDesktop} />
         {isDesktop && (
            <>
               <section className="hero-container sm:h-[456px] md:h-[428px] lg:h-[552px] xl:h-[712px] 2xl:h-[672px] bg-cover bg-center" aria-label="Products Background Image" style={{ backgroundImage: `url(${HeaderBackgroundImage})` }}>
                  <div className="hero-wrapper p-5 flex flex-col justify-center items-center gap-10 sm:p-14 sm:gap-16 lg:p-32 xl:p-52">
                     <h1 className="text-xl text-center font-bold text-white sm:text-3xl lg:text-4xl">Here is where you can find all the good staff</h1>
                     <p className="text-justify text-white sm:text-xl sm:px-20 lg:px-5">Take a look to all the things we have found for you!</p>
                  </div>
               </section>
               <main className="my-20">
                  <section className="products-container flex flex-col justify-center items-center gap-20">
                     <h1 className="text-center text-2xl font-bold sm:text-4xl lg:text-6xl xl:text-8xl">Our products</h1>
                     <div className="products-grid grid grid-rows-3 grid-cols-3 gap-y-10 gap-x-5 lg:gap-20 xl:gap-32" aria-label="Products Grid">
                        {products.map((product, index) => (
                           <ProductCard isDesktop={isDesktop} product={product} addToCart={addToCart} setSubTotalPrice={setSubTotalPrice} key={index} />
                        ))}{" "}
                     </div>
                  </section>
               </main>
            </>
         )}
         {!isDesktop && (
            <>
               <section className="hero-container bg-cover bg-center sm:mt-8 lg:mt-16 xl:mt-14 3xl:mt-0" aria-label="Products Background Image" style={{ backgroundImage: `url(${HeaderBackgroundImage})` }}>
                  <div className="hero-wrapper p-5 h-[320px] flex flex-col justify-center items-center gap-10 bg-gradient-to-r bg-[#52489c6f] sm:p-14 sm:gap-16 lg:p-32 xl:p-52">
                     <h1 className="text-xl text-center font-bold text-white sm:text-3xl lg:text-4xl">Here is where you can find all the good staff</h1>
                     <p className="text-justify text-white sm:text-xl sm:px-20 lg:px-5">Take a look to all the things we have found for you!</p>
                  </div>
               </section>
               <main className="my-20">
                  <section className="products-container flex flex-col items-center justify-center gap-16" aria-label="Products Section">
                     <h1 className="text-center text-2xl font-bold sm:text-4xl lg:text-6xl xl:text-8xl">Our products</h1>
                     <div className="products-grid grid mx-5 grid-rows-9 grid-cols-1 gap-10" aria-label="Products Grid">
                        {products.map((product, index) => (
                           <ProductCard isDesktop={isDesktop} product={product} addToCart={addToCart} setSubTotalPrice={setSubTotalPrice} key={index} />
                        ))}{" "}
                     </div>
                  </section>
               </main>
            </>
         )}
         <Footer isDesktop={isDesktop} />
      </>
   );
}

ProductsPage.propTypes = {
   isDesktop: PropTypes.bool.isRequired,
   products: PropTypes.instanceOf(Array).isRequired,
   addToCart: PropTypes.func.isRequired,
   setSubTotalPrice: PropTypes.func.isRequired,
};
