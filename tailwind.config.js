/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        appBg: "#E5E5E5",
        primary: "#4361EE",
        primaryInactive: "#D0D7FA",
        sidebarColor: "#ECEFFD",
        appRed: "#EF4444",
        appGreen: "#22C55E",
        appYellow: "#EAB308",
        appGrey: "#B7B7B7",
        statusGreen: "#D3F3DF",
        statusYellow: "#FBF0CE",
        statusRed: "#FCDADA",
        appGray: "#898989",
        buttonRed: "#EF4444"
      },
      fontFamily: {
        sans: "'Inter', sans-serif",
      },
      container: {
        center: true,
      },
      boxShadow: {
        appShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
        redShadow: "0px 0px 8px rgba(239, 68, 68, 0.4);",
        companyShadow:
          " 0px 0px 4px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.06);",
        clientShadow:
          "0px 0px 4px rgba(0, 0, 0, 0.04), 0px 8px 16px rgba(0, 0, 0, 0.08)",
      },
    },
  },

  plugins: [require("flowbite/plugin")],
};
