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
    themes: [
      {
        mytheme: {
          primary: "#fcdf47",
          secondary: "#ffffff",
          accent: "#F3CC30",
          neutral: "#20134E",
          "base-100": "#111827",
          info: "#53C0F3",
          success: "#169c49",
          warning: "#F3CC30",
          error: "#dc2626",
          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-text-case": "uppercase", // set default text transform for buttons
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
    ],
    base: true,
    utils: true,
    logs: process.env.BASE_RL == "http://localhost:3000",
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
