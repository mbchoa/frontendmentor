const defaultConfig = require("tailwindcss/defaultConfig");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      ...defaultConfig.theme.fontFamily,
      outfit: ["Outfit", ...defaultConfig.theme.fontFamily.sans],
      "hanken-grotesk": [
        "Hanken Grotesk",
        ...defaultConfig.theme.fontFamily.sans,
      ],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
