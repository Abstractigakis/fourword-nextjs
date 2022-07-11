// const colors = require("tailwindcss/colors");

module.exports = {
  dark: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: process.env.BASE_RL == "http://localhost:3000",
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
