const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: "#8B47CD",
          white: "#FFFFFF",
          darkGreen: "#5DD18A",
          green: "#3AB76E",
          lightgreen: "#CDEFDB",
          lightBlue: "#ECF3F9",
          black: "#636363",
          yellow: "#FFCF18",
          darkYellow: "##EFC900",
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
