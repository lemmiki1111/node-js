/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/views/**/*.ejs", //cho ejs
    "./src/client/**/*.{js,jsx,ts,tsx}", // cho React
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
