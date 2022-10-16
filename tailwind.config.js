/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "black-tail": "url('/src/assets/bg.png')",
      },
      fontFamily: {
        base: ["Cormorant Upright", "serif"],
      },
    },
  },
  plugins: [],
};
