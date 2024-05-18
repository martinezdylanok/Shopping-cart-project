import { createContext, useContext } from "react";

export const FooterMenuIsOpenContext = createContext(false);

export const useFooterMenuIsOpen = () => useContext(FooterMenuIsOpenContext);
