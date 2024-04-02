import React, { useState, useEffect } from "react";
import HomePage from "./components/HomePage";

function App() {
   const [windowsWidthState, setWindowsWidthState] = useState(false);

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth < 641) {
            setWindowsWidthState(false);
         } else {
            setWindowsWidthState(true);
         }
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   return <HomePage isDesktop={windowsWidthState} />;
}

export default App;
