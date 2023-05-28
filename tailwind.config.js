/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
      fontFamily: {
        wedding: ["Wedding", "sans-serif"],
        alex: ["Alex Brush", "sans-serif"],
        jack: ["Black Jack", "sans-serif"],
        dancing: ["Dancing Script OT", "sans-serif"],
        great: ["Great Vibes", "sans-serif"],
        inter: ["Inter Thin", "sans-serif"],
        nature: ["Nature Beauty Personal Use", "sans-serif"],
        opensan: ["Open Sans Light", "sans-serif"],
        ptmono: ["PT Mono", "sans-serif"],
        weday: ["Weddingday Personal Use Regular", "sans-serif"],
        dream: ["White Dream", "sans-serif"],
      },
    },
  },
  plugins: [require("@fortawesome/fontawesome-free")],
};
