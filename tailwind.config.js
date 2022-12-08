/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          light: "var(--color-text-light)",
          muted: "var(--color-text-muted)",
        },
      },
      backgroundColor: {
        skin: {
          default: "var(--color-fill-default)",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
