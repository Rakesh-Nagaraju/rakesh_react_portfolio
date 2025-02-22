/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // <-- IMPORTANT
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    // add other folders if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
