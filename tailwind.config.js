/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      screens: {
        tall: { max: "1188px" },
      },
      colors: {
        header: "#4C3398",
        primary: "#5d3ebc",
        secondary: "#7849f7",
        "primary-light": "#f3f0fe",
        "color-danger": "#db471e",
        "color-warning": "#ddf300",
        "color-success": "#188977",
        "color-info": "#4eb5eb",
        gray_bg: "#fafafa",
        border: "#E1DBD3",
        "brand-yellow": "#ffd300",
        "yellow-hover": "#ffe430",
        "card-gray":  "#697488",
        "text-black": "#191919",
      },
      backgroundImage: {
        "hero-bg": "linear-gradient( 90deg, #5d3ebc 0%, transparent 100% )",
        "ads-bg":
          "url('https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png')",
      },
    },
  },
  plugins: [],
};
