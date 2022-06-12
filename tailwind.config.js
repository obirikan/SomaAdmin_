/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        appBg: "#E5E5E5",
        activeButton: "#23574c",
        inactiveButton: "#91aba5",
      },
      fontFamily: {
        sans: "'Inter', sans-serif",
      },
    },
  },
  plugins: [],
};
