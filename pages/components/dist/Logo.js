"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var logo_png_1 = require("../../images/logo.png");
var link_1 = require("next/link");
var Logo = function () {
    return (react_1["default"].createElement(link_1["default"], { href: "/" },
        react_1["default"].createElement(image_1["default"], { src: logo_png_1["default"], alt: "logo", width: 100, height: 75 })));
};
exports["default"] = Logo;
