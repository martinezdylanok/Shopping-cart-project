import React, { useState } from "react";
import { HeaderMenuIsOpenContext } from "../contexts/HeaderMenuIsOpenContext";

function HeaderMenuIsOpenProvider({ children }) {
   const [headerMenuIsOpen, setHeaderMenuIsOpen] = useState(false);

   return <HeaderMenuIsOpenContext.Provider value={{ headerMenuIsOpen, setHeaderMenuIsOpen }}>{children}</HeaderMenuIsOpenContext.Provider>;
}

export default HeaderMenuIsOpenProvider;
