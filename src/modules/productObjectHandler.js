const fetchedProductsIds = [];

export default async function fetchProductObject() {
   try {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      const product = products[Math.floor(Math.random() * products.length)];
      if (fetchedProductsIds.includes(product.id) && fetchedProductsIds.length < 10) {
         return fetchProductObject();
      }
      fetchedProductsIds.push(product.id);

      const limitedTitle = product.title.length > 50 ? `${product.title.substring(0, 50)}...` : product.title;
      const limitedDescription = product.description.length > 100 ? `${product.description.substring(0, 100)}...` : product.description;
      return {
         productName: limitedTitle,
         productDescription: limitedDescription,
         productPrice: `$${product.price}`,
         productImage: product.image,
      };
   } catch (error) {
      console.error("Error fetching product:", error);
      return null;
   }
}
