export default function formatProductData(product) {
   const limitedTitle = product.title.length > 50 ? `${product.title.substring(0, 50)}...` : product.title;
   const limitedDescription = product.description.length > 100 ? `${product.description.substring(0, 100)}...` : product.description;

   return {
      productObjectName: limitedTitle,
      productObjectDescription: limitedDescription,
      productObjectPrice: product.price,
      productObjectImage: product.image,
      productObjectQuantity: product.quantity,
   };
}
