import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'lightblue': '#91d3cc',
        'burnt_rose': '#D3AB91', //main
        'misty_rose': '#FFE4E1',
        'black': '#000000',
        'white': '#FCFCFC',
        'beige': '#EBDEC6',
        'opacity-gray':'rgba(100,80,57,0.1)'
      }
    },
  },
  plugins: [

  ],
};
export default config;
