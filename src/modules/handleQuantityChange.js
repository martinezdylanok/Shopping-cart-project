export default function handleQuantityChange(value) {
   const newQuantity = parseInt(value, 10);
   if (!isNaN(newQuantity) && newQuantity >= 0) {
      return newQuantity;
   }
   return "";
}
