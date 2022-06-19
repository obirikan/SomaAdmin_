/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        appBg: "#E5E5E5",
        activeButton: "#23574c",
        inactiveButton: "#91aba5",
        sidebarColor: "#ECEFFD"
      },
      fontFamily: {
        sans: "'Inter', sans-serif",
      },
      container: {
        center: true,
      },
      boxShadow: {
        appShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
