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
        secondary: "#E0E0E0",
        primary: "#f0efee",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
