import { createContext, useContext } from "react";

export const ToggleMenuContext = createContext();

export const useToggleMenu = () => useContext(ToggleMenuContext);
