const fetchedProductsIds = [];

export default async function fetchProduct() {
   try {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      const uniqueProducts = products.filter((product) => !fetchedProductsIds.includes(product.id));

      if (uniqueProducts.length === 0 || fetchedProductsIds.length >= 10) {
         return [];
      }

      const selectedProduct = uniqueProducts[Math.floor(Math.random() * uniqueProducts.length)];
      fetchedProductsIds.push(selectedProduct.id);

      return selectedProduct;
   } catch (error) {
      console.error("Error fetching products:", error);
      return null;
   }
}
