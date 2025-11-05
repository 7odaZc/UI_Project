/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#12a171",
        "background-dark": "#082D23",  // page + navbar
        "navbar-dark": "#082D23",
        "card-dark": "#0E3D31",        // lighter card
        "border-dark": "#194E40",      // borders
        "text-primary-dark": "#e0e0e0",
        "text-secondary-dark": "#9db8af",
        "accent-dark": "#63bda3"
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")],
};
