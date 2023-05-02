"use strict";
exports.__esModule = true;
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var react_1 = require("react");
var Navbar_1 = require("./components/Navbar");
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
var about_us = function () {
    return (react_1["default"].createElement("div", { className: " bg-[#A9A181]   h-auto text-white font-averia   " },
        react_1["default"].createElement(Navbar_1["default"], null),
        react_1["default"].createElement("div", { className: "text-[75px]  pt-[96px]" },
            react_1["default"].createElement("div", { className: "relative  bg-[url('../images/donkey_3.jpg')]  bg-no-repeat   bg-center bg-cover  h-[719px]  border-b-[2px] border-white" }),
            react_1["default"].createElement("div", { className: "absolute bottom-[15%] left-[80%] right-[10%]" },
                react_1["default"].createElement("div", { className: "flex flex-col  drop-shadow-4l font-[Pacifico]" },
                    react_1["default"].createElement("a", null, "meet"),
                    " ",
                    react_1["default"].createElement("a", { className: "text-red-500" }, "Mateo"),
                    " ",
                    react_1["default"].createElement("a", null, "and"),
                    " ",
                    react_1["default"].createElement("a", { className: "text-red-500" }, "Mario"))),
            react_1["default"].createElement("div", { className: "px-14" },
                react_1["default"].createElement("p", { className: "font-[Pacifico] text-center text-[48px] mt-[60px]" }, "the begginig"),
                react_1["default"].createElement("p", { className: "text-[30px] mt-[80px]" },
                    "It all started as a university project of two friends. As the time passed by and an idea grew stronger, our zoo was born.",
                    react_1["default"].createElement("br", null),
                    react_1["default"].createElement("br", null),
                    "What started as a simple school obligation, ended up to be our biggest love and passion.",
                    react_1["default"].createElement("br", null),
                    react_1["default"].createElement("br", null),
                    "We are inviting you to be a part of our adventure.",
                    react_1["default"].createElement("br", null),
                    "We promise to keep you entertained.")),
            react_1["default"].createElement("div", { className: "px-14" },
                react_1["default"].createElement("form", { action: "mailto:mateocatipovic763@gmail.com" },
                    react_1["default"].createElement("div", { className: "flex flex-col " },
                        react_1["default"].createElement("div", { className: "flex mt-[250px] justify-around" },
                            react_1["default"].createElement("p", { className: "font-[Pacifico] text-[48px] " },
                                "send us a",
                                react_1["default"].createElement("br", null),
                                " ",
                                react_1["default"].createElement("a", { className: "text-red-500" }, "message")),
                            react_1["default"].createElement("div", { className: "flex flex-col" },
                                react_1["default"].createElement("textarea", { className: "text-[30px] w-[450px] h-[250px] px-7 pb-[150px] mb-6 italic text-[#A9A181]", type: "text", name: "send message...", placeholder: "start writing..." }),
                                react_1["default"].createElement("button", { className: "w-[205px] h-[74px] text-black rounded-[25px] bg-[#2A92F1C7] text-[32px] px-12 py-3  drop-shadow-4l" }, "send")))))),
            react_1["default"].createElement("div", { className: "flex flex-row justify-between text-[25px] font-averia mt-[160px] px-14 pb-[38px]" },
                react_1["default"].createElement("p", { className: " " }, "All rights reserved @FESB"),
                react_1["default"].createElement("div", { className: "  space-x-7 space-between  right-14" },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faFacebook }),
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faInstagram }),
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faTwitter }),
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faLinkedinIn }))))));
};
exports["default"] = about_us;
