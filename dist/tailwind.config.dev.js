"use strict";

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    placeholderColor: {
      primary: "#C1C2AD",
      secondary: "#ffed4a",
      danger: "#e3342f",
      home: "#C4C4C4"
    },
    extend: {
      fontFamily: {
        averia: ["Averia Libre"]
      },
      colors: {
        mammals_color: "#978853",
        reptils_color: "#78AA6C",
        water_animals_color: "#88BEC6C7",
        birds_color: "#2A92F1C7",
        e1: "#5DACB7"
      },
      dropShadow: {
        "4l": "4px 4px 4px rgba(0, 0, 0, 0.5)",
        "5l": "0px 6px 6px rgba(0, 0, 0, 0.75)"
      }
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px" // => @media (min-width: 1536px) { ... }

    },
    plugins: {}
  }
};