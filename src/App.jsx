import React, { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import fetchProduct from "./modules/fetchProduct";
import HomePage from "./components/HomePage";
import ProductsPage from "./components/ProductsPage";
import CartPage from "./components/CartPage";
import NotFoundPage from "./components/NotFoundPage";

function App() {
   const [windowsWidthState, setWindowsWidthState] = useState(false);
   const [products, setProducts] = useState([]);
   const [subTotalPrice, setSubTotalPrice] = useState(0);

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
      async function fetchProducts(fetchedProducts = []) {
         try {
            const product = await fetchProduct();
            if (!product || fetchedProducts.length >= 9) {
               setProducts(await Promise.all(fetchedProducts));
               return;
            }
            const productWithQuantity = { ...product, quantity: 1 };
            fetchProducts([...fetchedProducts, productWithQuantity]);
         } catch (error) {
            console.error("Error fetching products:", error);
         }
      }
      fetchProducts();
   }, []);

   const router = createBrowserRouter([
      {
         path: "/",
         element: <HomePage isDesktop={windowsWidthState} />,
         errorElement: <NotFoundPage />,
      },
      {
         path: "/products",
         element: <ProductsPage isDesktop={windowsWidthState} products={products} setSubTotalPrice={setSubTotalPrice} />,
         errorElement: <NotFoundPage />,
      },
      {
         path: "/cart",
         element: <CartPage isDesktop={windowsWidthState} subTotalPrice={subTotalPrice} setSubTotalPrice={setSubTotalPrice} />,
         errorElement: <NotFoundPage />,
      },
   ]);

   return (
      <React.StrictMode>
         <RouterProvider router={router} />
      </React.StrictMode>
   );
}
export default App;
