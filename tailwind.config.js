/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         screens: {
            "2xs": "420px",
            "3xs": "520px",
            "3xl": "1910px",
         },
      },
   },
   plugins: [],
};
