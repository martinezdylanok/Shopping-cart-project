import React, { useState, useEffect } from "react";
import ShopPage from "./components/ShopPage";
import fetchProduct from "./modules/fetchProduct";

function App() {
   const [windowsWidthState, setWindowsWidthState] = useState(false);
   const [products, setProducts] = useState([]);

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth < 640) {
            setWindowsWidthState(false);
         } else {
            setWindowsWidthState(true);
         }
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   useEffect(() => {
      async function fetchProducts() {
         try {
            const fetchedProducts = [];
            while (fetchedProducts.length < 9) {
               const product = fetchProduct();
               if (!product) {
                  break;
               }
               fetchedProducts.push(product);
            }
            setProducts(await Promise.all(fetchedProducts));
         } catch (error) {
            console.error("Error fetching products:", error);
         }
      }
      fetchProducts();
   }, []);

   return <ShopPage isDesktop={windowsWidthState} products={products} />;
}

export default App;
