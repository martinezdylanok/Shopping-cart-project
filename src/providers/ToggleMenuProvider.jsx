import React, { useMemo } from "react";
import { useHeaderMenuIsOpen } from "../contexts/HeaderMenuIsOpenContext";
import { useFooterMenuIsOpen } from "../contexts/FooterMenuIsOpenContext";
import { ToggleMenuContext } from "../contexts/ToggleMenuContext";

export default function ToggleMenuProvider({ children }) {
   const headerMenuIsOpenContext = useHeaderMenuIsOpen();
   const footerMenuIsOpenContext = useFooterMenuIsOpen();

   const toggleMenu = (menuType) => {
      if (menuType === "header") {
         headerMenuIsOpenContext.setHeaderMenuIsOpen(!headerMenuIsOpenContext.headerMenuIsOpen);
         footerMenuIsOpenContext.setFooterMenuIsOpen(false);
      } else if (menuType === "footer") {
         footerMenuIsOpenContext.setFooterMenuIsOpen(!footerMenuIsOpenContext.footerMenuIsOpen);
         headerMenuIsOpenContext.setHeaderMenuIsOpen(false);
      }
   };

   const contextValue = useMemo(
      () => ({
         toggleMenu,
         headerMenuIsOpen: headerMenuIsOpenContext.headerMenuIsOpen,
         footerMenuIsOpen: footerMenuIsOpenContext.footerMenuIsOpen,
      }),
      [toggleMenu, headerMenuIsOpenContext.headerMenuIsOpen, footerMenuIsOpenContext.footerMenuIsOpen],
   );

   return <ToggleMenuContext.Provider value={contextValue}>{children}</ToggleMenuContext.Provider>;
}
