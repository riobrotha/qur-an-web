/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        lg: "1024px",
      },
    },
    fontFamily: {
      sans: ["Source Sans Pro", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
