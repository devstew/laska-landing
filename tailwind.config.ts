/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // (Add './app/**/*.{js,ts,jsx,tsx}' if using the App Router)
  ],
  theme: {
    extend: {
      fontFamily: {
        rotonda: ["RotondaC", "sans-serif"],
      },
    },
  },
  plugins: [],
};
