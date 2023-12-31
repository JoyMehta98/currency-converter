/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        danger: "#FF0000",
        primary: "#000000",
        secondary: "#ffffff",
      },
    },
  },
  plugins: [],
});
