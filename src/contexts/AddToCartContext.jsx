import { createContext, useContext } from "react";

export const AddToCartContext = createContext(false);

export const useAddToCart = () => useContext(AddToCartContext);
