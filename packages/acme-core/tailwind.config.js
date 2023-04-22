/** @type {import('tailwindcss').Config} */
const config = require("@acme/tailwind-config");

module.exports = {
  ...config,
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
};
