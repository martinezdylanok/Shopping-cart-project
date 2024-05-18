import React, { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import fetchProduct from "./modules/fetchProduct";
import HomePage from "./components/HomePage";
import ProductsPage from "./components/ProductsPage";
import CartPage from "./components/CartPage";
import NotFoundPage from "./components/NotFoundPage";
import { useProductsInShoppingCart } from "./contexts/ProductsInShoppingCartContext";

function App() {
   const [windowsWidthState, setWindowsWidthState] = useState(false);
   const [products, setProducts] = useState([]);
   const [subTotalPrice, setSubTotalPrice] = useState(0);
   const productsInShoppingCartContext = useProductsInShoppingCart();

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

   const addToCart = (product) => {
      const existingProductIndex = productsInShoppingCartContext.productsInShoppingCart.findIndex((item) => item.id === product.id);
      if (existingProductIndex !== -1) {
         const updatedCart = [...productsInShoppingCartContext.productsInShoppingCart];
         updatedCart[existingProductIndex].quantity += product.quantity;
         productsInShoppingCartContext.setProductsInShoppingCart(updatedCart);
      } else {
         const updatedCart = [...productsInShoppingCartContext.productsInShoppingCart, product];
         productsInShoppingCartContext.setProductsInShoppingCart(updatedCart);
      }
   };

   const removeFromCart = (productId) => {
      const updatedCart = productsInShoppingCartContext.productsInShoppingCart.filter((product) => product.id !== productId);
      productsInShoppingCartContext.setProductsInShoppingCart(updatedCart);
   };

   const router = createBrowserRouter([
      {
         path: "/",
         element: <HomePage isDesktop={windowsWidthState} />,
         errorElement: <NotFoundPage />,
      },
      {
         path: "/products",
         element: <ProductsPage isDesktop={windowsWidthState} products={products} addToCart={addToCart} setSubTotalPrice={setSubTotalPrice} />,
         errorElement: <NotFoundPage />,
      },
      {
         path: "/cart",
         element: <CartPage isDesktop={windowsWidthState} addToCart={addToCart} removeFromCart={removeFromCart} setProductsInShoppingCart={productsInShoppingCartContext.setProductsInShoppingCart} subTotalPrice={subTotalPrice} setSubTotalPrice={setSubTotalPrice} />,
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
