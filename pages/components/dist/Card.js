"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var Card = function (_a) {
    var image = _a.image, name = _a.name, species = _a.species;
    return (react_1["default"].createElement("div", { className: " relative bg-center bg-cover  text-[35px] w-[400px] h-[500px]  drop-shadow-4l" },
        react_1["default"].createElement(image_1["default"], { className: "h-full rounded-[4px]", src: image, alt: "slika" }),
        react_1["default"].createElement("p", { className: "absolute bottom-[74px] left-[10%] right-[10%]  " }, name),
        react_1["default"].createElement("p", { className: "absolute bottom-[34px] left-[10%] right-[10%]  text-[22px] " }, species)));
};
exports["default"] = Card;
