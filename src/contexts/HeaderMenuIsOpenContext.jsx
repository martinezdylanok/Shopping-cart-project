import { createContext, useContext } from "react";

export const HeaderMenuIsOpenContext = createContext(false);

export const useHeaderMenuIsOpen = () => useContext(HeaderMenuIsOpenContext);
