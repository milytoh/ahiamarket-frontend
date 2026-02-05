/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // primary: "#0c1d19",
        // "background-light": "#f6f7f8",
        // "background-dark": "#101c22",
        primary: "#05b384",
        "background-light": "#F9F9F9",
        "background-dark": "#0f231d",
        "brand-green": "#00A859",
        "brand-orange": "#F7941D",
        "text-main": "#333333",
        "border-light": "#E0E0E0",
        "accent-orange": "#ff6f00",
      },
      fontFamily: {
        display: ["Work Sans"],
        manrope: ["Manrope", "sans-serif"],
        noto: ["Noto Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },

  plugins: [],
};
