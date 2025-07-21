module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class", // enables dark mode toggle via class
  plugins: [],
  corePlugins: {
    preflight: true, // optional: resets CSS
  },
};
