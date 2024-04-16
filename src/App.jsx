import React, { useState, useEffect } from "react";
import ShopPage from "./components/ShopPage";
import fetchProduct from "./modules/fetchProduct";

function App() {
   const [windowsWidthState, setWindowsWidthState] = useState(false);
   const [products, setProducts] = useState([]);
   const [productsInShoppingCart, setProductsInShoppingCart] = useState([]);
   const [headerMenuIsOpen, setHeaderMenuIsOpen] = useState(false);
   const [footerMenuIsOpen, setFooterMenuIsOpen] = useState(false);

   const toggleMenu = (menuType) => {
      if (menuType === "header") {
         setHeaderMenuIsOpen(!headerMenuIsOpen);
      } else {
         setFooterMenuIsOpen(!footerMenuIsOpen);
      }
   };

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

   const addToCart = (product, quantity) => {
      const updatedCart = [...productsInShoppingCart, { product, quantity }];
      setProductsInShoppingCart(updatedCart);
   };

   return <ShopPage isDesktop={windowsWidthState} products={products} addToCart={addToCart} productsInShoppingCart={productsInShoppingCart} toggleMenu={toggleMenu} headerMenuIsOpen={headerMenuIsOpen} footerMenuIsOpen={footerMenuIsOpen} />;
}

export default App;
