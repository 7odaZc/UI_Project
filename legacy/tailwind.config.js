// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    "./*.html",
    "./**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#49B784",
        "primary-hover": "#358E6A",
        "background-light": "#DFF6E4",
        "background-dark": "#082D23",
        "heading-text": "#DFF6E4",
        "body-text": "#BDEED0",
        "text-light": "#1E5E4A",
        "text-dark": "#BDEED0",
        "form-container-dark": "#1E5E4A",
        "input-background-dark": "#358E6A",
        "border-color": "#1E5E4A",
        "border-light": "#97E2B9",
        "border-focus-light": "#6FD3A1",
        "border-dark": "#358E6A",
        "border-focus-dark": "#49B784",
        "link-light": "#358E6A",
        "link-dark": "#6FD3A1",
        "error-light": "#B91C1C",
        "error-dark": "#F87171",
        "button-hover": "#6FD3A1",
        "placeholder-dark": "#BDEED0",
        "secondary-cta": "#358E6A",
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        full: "9999px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
