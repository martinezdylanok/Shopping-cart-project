import { createContext, useContext } from "react";

export const RemoveFromCartContext = createContext(false);

export const useRemoveFromCart = () => useContext(RemoveFromCartContext);
