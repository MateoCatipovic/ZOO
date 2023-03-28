"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Navbar_1 = require("./components/Navbar");
var link_1 = require("next/link");
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var blog = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: " bg-black  bg-no-repeat bg-center bg-cover w-full h-auto   " },
            react_1["default"].createElement(Navbar_1["default"], null),
            react_1["default"].createElement("div", { className: "text-white  font-averia text-center pt-[120px] text-[75px]  pb-[38px] " },
                react_1["default"].createElement(link_1["default"], { href: "/" },
                    react_1["default"].createElement("div", { className: "relative bg-[url('../images/blog1.png')] hover:opacity-75 transition-all  bg-no-repeat  bg-cover bg-center h-[650px] mb-[50px]" },
                        react_1["default"].createElement("p", { className: "absolute bottom-[40%] left-[10%] right-[10%] drop-shadow-4l" }, "popular water animals"))),
                react_1["default"].createElement("div", { className: "relative bg-[url('../images/blog2.png')]  hover:opacity-75 transition-all  bg-no-repeat  bg-cover bg-center  h-[700px] mb-[50px]" },
                    react_1["default"].createElement("p", { className: "absolute bottom-[40%] left-[10%] right-[10%] drop-shadow-4l" }, "fascinating facts about Siberian tiger")),
                react_1["default"].createElement("div", { className: "relative bg-[url('../images/blog3_lion.png')] hover:opacity-75 transition-all  bg-no-repeat  bg-cover bg-center h-[700px] mb-[50px]" },
                    react_1["default"].createElement("p", { className: "absolute bottom-[40%] left-[10%] right-[10%] drop-shadow-4l" }, "king of the jungle = king of the zoo")),
                react_1["default"].createElement("div", { className: "relative bg-[url('../images/blog4_penguin.png')] hover:opacity-75 transition-all  bg-no-repeat bg-cover bg-center h-[700px] mb-[50px]" },
                    react_1["default"].createElement("p", { className: "absolute bottom-[40%] left-[10%] right-[10%] drop-shadow-4l" }, "this year\u2019s newcomers")),
                react_1["default"].createElement("div", { className: "relative bg-[url('../images/blog5_rhino.png')] hover:opacity-75 transition-all  bg-no-repeat bg-cover bg-center h-[700px] mb-[50px]" },
                    react_1["default"].createElement("p", { className: "absolute bottom-[40%] left-[10%] right-[10%] drop-shadow-4l" }, "animals you must visit")),
                react_1["default"].createElement("div", { className: "flex flex-row justify-between text-[25px] font-averia mt-[160px] px-14" },
                    react_1["default"].createElement("p", { className: " " }, "All rights reserved @FESB"),
                    react_1["default"].createElement("div", { className: "  space-x-7 space-between  right-14" },
                        react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faFacebook }),
                        react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faInstagram }),
                        react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faTwitter }),
                        react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faLinkedinIn })))))));
};
exports["default"] = blog;
