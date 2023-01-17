"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var Card = function (_a) {
    var image = _a.image, name = _a.name, species = _a.species;
    return (react_1["default"].createElement("div", { className: " bg-center bg-cover  text-[35px] w-[100px] h-[200px]" },
        react_1["default"].createElement(image_1["default"], { src: image, alt: "slika" }),
        react_1["default"].createElement("p", { className: "font-[AveriaLibre]" }, name),
        react_1["default"].createElement("p", { className: "font-[AveriaLibre] text-[20px]" }, species)));
};
exports["default"] = Card;
