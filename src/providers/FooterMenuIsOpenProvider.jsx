import React, { useState } from "react";
import { FooterMenuIsOpenContext } from "../contexts/FooterMenuIsOpenContext";

function HeaderMenuIsOpenProvider({ children }) {
   const [footerMenuIsOpen, setFooterMenuIsOpen] = useState(false);

   return <FooterMenuIsOpenContext.Provider value={{ footerMenuIsOpen, setFooterMenuIsOpen }}>{children}</FooterMenuIsOpenContext.Provider>;
}

export default HeaderMenuIsOpenProvider;
