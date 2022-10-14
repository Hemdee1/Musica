/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#1e1e1e",
        "secondary-dark": "#1a1e1f",
        "secondary-light": "#efeee0",
        "primary-yellow": "#facd66",
      },
      fontFamily: {
        Quicksand: "Quicksand, sans-serif",
      },
    },
  },
  plugins: [],
};
