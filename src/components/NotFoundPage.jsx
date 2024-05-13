import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiphyFetch } from "@giphy/js-fetch-api";

export default function NotFoundPage() {
   const [gifUrl, setGifUrl] = useState("");

   useEffect(() => {
      async function fetchGif() {
         try {
            const gf = new GiphyFetch("wKXpOjRC2bbTrBrQNVCiGI7fQOxsRhzI");
            const { data: gifs } = await gf.search("lost", { sort: "relevant", lang: "es", limit: 1, type: "stickers" });
            if (gifs && gifs.length > 0) {
               setGifUrl(gifs[0].images.original.url);
            }
         } catch (error) {
            console.error("Error fetching GIF:", error);
         }
      }
      fetchGif();
   }, []);

   return (
      <div className="flex flex-col justify-center items-center gap-2">
         {gifUrl && <img alt="gif" src={gifUrl} />}
         <h1 className="font-bold text-2xl">404 Error: Bob can't find your page</h1>
         <button className="" type="button">
            <Link to="/">
               Click here to go back to the <b className="text-[#f45b69]">Home page</b>
            </Link>
         </button>
      </div>
   );
}
