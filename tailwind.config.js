/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        ottheme: {
          primary: "#936EE3",
          secondary: "#1B2430",
          accent: "#080D33",
          neutral: "#161D27",
          grey: "#7AC2DC",
          dark: "#1B2430",
          "base-100": "#F5FFFE",
        },
      },
      "dark",
      "cupcake",
    ],
  },

  plugins: [require("daisyui")],
}