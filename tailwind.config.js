module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // Add this if your files are inside /src
  ],
  darkMode: "class", // 👈 Enable class-based dark mode
  theme: {
    extend: {},
  },
  plugins: [],
};
