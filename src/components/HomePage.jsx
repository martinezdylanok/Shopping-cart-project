import React from "react";

export default function HomePage() {
   return (
      <>
         <header>
            <h1>Shopping Web</h1>
         </header>
         <main>
            <div className="interactive-buttons">
               <button type="button" className="current-page-button">
                  <p>Current Page</p>
               </button>
               <button type="button" className="shopping-cart-button">
                  <img alt="shop-cart-icon" />
               </button>
            </div>
            <div className="text-container">
               <h1 />
               <p />
               <div className="images-carousel" />
            </div>
         </main>
         <footer>
            <p />
         </footer>
      </>
   );
}
