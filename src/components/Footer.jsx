import React from "react";
import WhiteHamburguerMenuSvg from "../assets/menu_FILL0_wght400_GRAD0_opsz24 copy.svg";
import GitHubSvg from "../assets/github.svg";
import LinkedInSvg from "../assets/linkedin.svg";

export default function Footer({ isDesktop }) {
   return (
      <>
         {!isDesktop && (
            <footer className="flex flex-col items-center gap-16 p-5 bg-[#f45b69]">
               <h1 className="font-semibold text-[1.4em] text-white">Bob's Bizarre Bazaar</h1>
               <div className="footer-main-section flex flex-col items-center gap-5">
                  <button type="button" aria-label="Toggle Menu" className="hamburger-button flex items-center justify-center size-9">
                     <img className="size-9" src={WhiteHamburguerMenuSvg} alt="hamburger-menu-icon" />
                  </button>
                  <div className="social-media-wrapper flex items-center justify-center">
                     <button type="button" aria-label="GitHub" className="github-button flex items-center justify-center size-9">
                        <img className="size-6" src={GitHubSvg} alt="gihub-icon" />
                     </button>
                     <button type="button" aria-label="LinkedIn" className="linkedin-button flex items-center justify-center size-9">
                        <img className="size-6" src={LinkedInSvg} alt="linkedin-icon" />
                     </button>
                  </div>
                  <span className="text-white text-xs">Made with ❤️ by DylanMartinezOk</span>
               </div>
               <span className="text-white">© 2024 Bob's Bizarre Bazaar</span>
            </footer>
         )}
         {isDesktop && (
            <footer className="flex flex-col gap-16 lg:gap-16 py-16 bg-[#f45b69]">
               <div className="main-footer-section flex justify-evenly">
                  <div className="main-footer-header">
                     <h1 className="font-semibold text-[1.4em] sm:text-3xl lg:text-4xl xl:text-5xl text-white">Bob's Bizarre Bazaar</h1>
                  </div>
                  <div className="main-footer-content flex flex-col items-center gap-2 xl:gap-5">
                     <h2 className="font-bold text-white mt-3 md:text-xl lg:text-2xl xl:text-3xl">Main links</h2>
                     <ul className="main-footer-list flex flex-col gap-1 xl:gap-2">
                        <li>
                           <a className="font-semibold text-white lg:text-lg xl:text-xl" aria-label="Home" href="">
                              HOME
                           </a>
                        </li>
                        <li>
                           <a className="font-semibold text-white lg:text-lg xl:text-xl" aria-label="Products" href="">
                              PRODUCTS
                           </a>
                        </li>
                        <li>
                           <a className="font-semibold text-white lg:text-lg xl:text-xl" aria-label="About" href="">
                              ABOUT
                           </a>
                        </li>
                        <li>
                           <a className="font-semibold text-white lg:text-lg xl:text-xl" aria-label="Contact" href="">
                              CONTACT
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div className="main-footer-social-media flex flex-col items-center gap-2 xl:gap-5">
                     <h2 className="font-bold text-white mt-3 md:text-xl lg:text-2xl xl:text-3xl">Get in touch</h2>
                     <ul className="flex flex-col gap-1 xl:gap-2">
                        <li>
                           <button type="button" aria-label="GitHub" className="github-button flex items-center justify-center size-9">
                              <img className="size-6 lg:size-8 xl:size-10" src={GitHubSvg} alt="gihub-icon" />
                           </button>
                        </li>
                        <li>
                           <button type="button" aria-label="LinkedIn" className="linkedin-button flex items-center justify-center size-9">
                              <img className="size-6 lg:size-8 xl:size-10" src={LinkedInSvg} alt="linkedin-icon" />
                           </button>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="final-footer-section self-center">
                  <span className="text-white text-sm md:text-base lg:text-lg xl:text-xl">© 2024 Bob's Bizarre Bazaar</span>
               </div>
            </footer>
         )}
      </>
   );
}
