import React, { useState, useMemo } from "react";
import { SubTotalPriceContext } from "../contexts/SubTotalPriceContext";

function SubTotalPriceProvider({ children }) {
   const [subTotalPrice, setSubTotalPrice] = useState(0);

   const contextValue = useMemo(() => ({ subTotalPrice, setSubTotalPrice }), [subTotalPrice, setSubTotalPrice]);

   return <SubTotalPriceContext.Provider value={contextValue}>{children}</SubTotalPriceContext.Provider>;
}

export default SubTotalPriceProvider;
