"use strict";

var _theme;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: (_theme = {
    placeholderColor: function placeholderColor(theme) {
      return theme("colors");
    }
  }, _defineProperty(_theme, "placeholderColor", {
    primary: "#C1C2AD",
    secondary: "#ffed4a",
    danger: "#e3342f",
    home: "#C4C4C4"
  }), _defineProperty(_theme, "extend", {
    fontFamily: {
      pacifico: ["Pacifico"]
    }
  }), _defineProperty(_theme, "plugins", {}), _theme)
};