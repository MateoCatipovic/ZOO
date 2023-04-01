"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Search_1 = require("./Search");
var Menu = function () {
    return (react_1["default"].createElement("div", { className: "flex-col hidden lg:flex  max-w-[800px] w-full\r\n     justify-between " },
        react_1["default"].createElement(Search_1["default"], null),
        react_1["default"].createElement("div", { className: "flex justify-between text-[#C1C2AD]" },
            react_1["default"].createElement("a", { href: "/" }, "home"),
            react_1["default"].createElement("a", { href: "/plan_your_visit" }, "plan your visit"),
            react_1["default"].createElement("a", { href: "/animals" }, "animals"),
            react_1["default"].createElement("a", { href: "/blog" }, "blog"),
            react_1["default"].createElement("a", { href: "/about_us" }, "about us"),
            react_1["default"].createElement("a", { href: "/login" }, "login"))));
};
exports["default"] = Menu;
