const fetchedProductsIds = new Set();

export default async function fetchProduct() {
   try {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      const uniqueProducts = products.filter((product) => !fetchedProductsIds.has(product.id));

      if (uniqueProducts.length === 0 || fetchedProductsIds.length >= 9) {
         return fetchProduct();
      }

      const selectedProduct = uniqueProducts[Math.floor(Math.random() * uniqueProducts.length)];
      fetchedProductsIds.add(selectedProduct.id);

      return selectedProduct;
   } catch (error) {
      console.error("Error fetching products:", error);
      return null;
   }
}
