const config = require("@acme/tailwind-config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...config,
  content: [
    "../../packages/acme-core/src/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.stories.{js,ts,jsx,tsx}",
  ],
};
