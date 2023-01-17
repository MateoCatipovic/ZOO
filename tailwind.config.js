module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    placeholderColor: (theme) => theme("colors"),
    placeholderColor: {
      primary: "#C1C2AD",
      secondary: "#ffed4a",
      danger: "#e3342f",
      home: "#C4C4C4",
    },
    extend: {
      fontFamily: {
        averia: ["Averia Libre"],
      },
    },

    plugins: {},
  },
};
