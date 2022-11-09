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
        primary: "#4ade80",
        secondary: "#64748b",
        dark: "#1e293b",
        btnGreen: "#4ade80",
        third: "#dcfce7",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
