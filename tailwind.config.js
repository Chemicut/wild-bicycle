/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2e5422",
        background: "#eeebdc",
        secondary: "#83814f",
        accent: "#facc15", // Giallo per hover e dettagli
        dark: "#1a1a1a", // Colore scuro per testi e sfondi scuri
        light: "#f8f9fa", // Colore chiaro per contrasto con dark mode
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        "fade-in": "fade-in 2.5s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
