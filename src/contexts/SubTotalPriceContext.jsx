import { createContext, useContext } from "react";

export const SubTotalPriceContext = createContext(false);

export const useSubTotalPrice = () => useContext(SubTotalPriceContext);
