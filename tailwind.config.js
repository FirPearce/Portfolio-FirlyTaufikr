/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        dark: "#00224D",
        darklite: "#667A94",
        primary: "#496989",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
