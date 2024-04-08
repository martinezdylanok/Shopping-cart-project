import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HeaderBackgroundImage from "../assets/daria-nepriakhina-zNU3ErDAbAw-unsplash.jpg";
import ProductCard from "./ProductCard";

export default function ShopPage({ isDesktop }) {
   return (
      <>
         <Header isDesktop={isDesktop} />
         {isDesktop && (
            <>
               <section className="hero-container bg-cover bg-center" aria-label="Products Background Image" style={{ backgroundImage: `url(${HeaderBackgroundImage})` }}>
                  <div className="hero-wrapper flex flex-col justify-center items-center backdrop-blur-sm p-5 gap-16">
                     <h1 className="text-xl font-semibold text-white sm:text-3xl lg:text-4xl text-center">Month's top choice</h1>
                     <div className="group top-product-container p-5 flex flex-col justify-center items-center shadow-sm shadow-white rounded hover:bg-white hover:shadow-black transition duration-700 ease-in-out" aria-label="Top Product Card">
                        <h1 className="text-xl text-center font-semibold sm:text-3xl lg:text-4xl opacity-0 transition-opacity group-hover:opacity-100">Product name</h1>
                        <p className="text-justify sm:text-xl sm:px-20 lg:px-5 opacity-0 transition-opacity group-hover:opacity-100">Product description</p>
                     </div>
                  </div>
               </section>
               <main className="my-20">
                  <section className="products-container flex flex-col justify-center items-center gap-20">
                     <h1 className="text-center text-2xl font-bold sm:text-4xl lg:text-6xl xl:text-8xl">Our products</h1>
                     <div className="products-grid grid grid-rows-3 grid-cols-3 gap-5 lg:gap-20 xl:gap-32" aria-label="Products Grid">
                        <ProductCard isDesktop={isDesktop} />
                        <ProductCard isDesktop={isDesktop} />
                        <ProductCard isDesktop={isDesktop} />
                        <ProductCard isDesktop={isDesktop} />
                        <ProductCard isDesktop={isDesktop} />
                        <ProductCard isDesktop={isDesktop} />
                        <ProductCard isDesktop={isDesktop} />
                        <ProductCard isDesktop={isDesktop} />
                        <ProductCard isDesktop={isDesktop} />
                     </div>
                  </section>
               </main>
            </>
         )}
         {!isDesktop && (
            <>
               <section className="hero-container bg-cover bg-center" aria-label="Products Background Image" style={{ backgroundImage: `url(${HeaderBackgroundImage})` }}>
                  <div className="hero-wrapper flex flex-col justify-center items-center backdrop-blur-sm p-5 gap-16">
                     <h1 className="text-xl font-semibold text-white sm:text-3xl lg:text-4xl text-center">
                        Month's top
                        <br />
                        choice
                     </h1>
                     <div className="group top-product-container p-5 flex flex-col justify-center items-center shadow-sm shadow-white rounded hover:bg-white hover:shadow-black transition duration-700 ease-in-out" aria-label="Top Product Card">
                        <h1 className="text-xl text-center font-semibold sm:text-3xl lg:text-4xl opacity-0 transition-opacity group-hover:opacity-100">Product name</h1>
                        <p className="text-justify sm:text-xl sm:px-20 lg:px-5 opacity-0 transition-opacity group-hover:opacity-100">Product description</p>
                     </div>
                  </div>
               </section>
               <main className="my-20">
                  <section className="products-container flex flex-col items-center justify-center gap-16" aria-label="Products Section">
                     <h1 className="text-center text-2xl font-bold sm:text-4xl lg:text-6xl xl:text-8xl">Our products</h1>
                     <div className="products-grid grid mx-5 grid-rows-9 grid-cols-1 gap-10" aria-label="Products Grid">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                     </div>
                  </section>
               </main>
            </>
         )}
         <Footer isDesktop={isDesktop} />
      </>
   );
}
