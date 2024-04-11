export default function calculateTotalPrice(price, quantity) {
   return (parseFloat(price.slice(1)) * quantity).toFixed(2);
}
