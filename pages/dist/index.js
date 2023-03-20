"use strict";
exports.__esModule = true;
var Navbar_1 = require("./components/Navbar");
var link_1 = require("next/link");
var image_1 = require("next/image");
var panda_png_1 = require("../images/panda.png");
var Card_1 = require("./components/Card");
var lion_card_jpeg_1 = require("../images/lion_card.jpeg");
var elephant_card_jpeg_1 = require("../images/elephant_card.jpeg");
var eagle_card_png_1 = require("../images/eagle_card.png");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_2 = require("@fortawesome/free-solid-svg-icons");
var free_solid_svg_icons_3 = require("@fortawesome/free-solid-svg-icons");
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
var Home = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null,
            React.createElement("div", { className: "bg-[url('../images/dark_cover.png')] bg-no-repeat bg-center bg-cover w-full h-[1200px]" },
                React.createElement(Navbar_1["default"], null)),
            React.createElement("div", { className: "bg-[#A9A181] h-[1200px] text-white font-[Pacifico] flex-row text-center pt-[150px] text-[50px] border-b-[2px] border-white" },
                "discover our world",
                React.createElement("div", { className: "pt-[7%] flex flex-col md:flex-row md:justify-between px-14" },
                    React.createElement(image_1["default"], { className: "rounded-[10px] ", src: panda_png_1["default"], alt: "panda_pic", width: 600, height: 600 }),
                    React.createElement("p", { className: "text-[30px] font-averia ml-12" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."))),
            React.createElement("div", { className: "bg-[#A9A181] h-[1200px] text-white  font-[Pacifico] text-center  text-[50px] px-14 pt-[150px] border-b-[2px] border-white" },
                "most popular animals",
                React.createElement("div", { className: "flex flex-col md:flex-row justify-between h-[500px] mt-[200px] font-averia" },
                    React.createElement(link_1["default"], { href: "/animals" },
                        React.createElement(Card_1["default"], { image: lion_card_jpeg_1["default"], name: "lion", species: "mammals" })),
                    React.createElement(link_1["default"], { href: "/animals" },
                        React.createElement(Card_1["default"], { image: elephant_card_jpeg_1["default"], name: "elephant", species: "mammals" })),
                    React.createElement(link_1["default"], { href: "/animals" },
                        React.createElement(Card_1["default"], { image: eagle_card_png_1["default"], name: "white-tailed eagle", species: "birds" }))),
                React.createElement(link_1["default"], { href: "/animals" },
                    React.createElement("p", { className: "text-white font-averia text-right mt-[28px] text-[25px]  drop-shadow-4l rounded-[10px]" },
                        "ANIMALS ",
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faAnglesRight })))),
            React.createElement("div", { className: " relative bg-[url('../images/footer.png')] w-full h-[1200px] bg-no-repeat bg-center bg-cover font-averia  pt-[150px] text-[25px] px-14 text-[#C1C2AD] " },
                React.createElement("div", { className: "flex-col text-left justify-end text-black" },
                    React.createElement("p", { className: "flex justify-end items-center" },
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_2.faLocationDot }),
                        " \u00A0\u00A0 Marjanska ulica 12, Dicmo"),
                    React.createElement("br", null),
                    React.createElement("p", { className: "flex justify-end items-center" },
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_3.faPhone }),
                        " \u00A0 00385951128899")),
                React.createElement("div", { className: "" },
                    React.createElement("p", { className: "absolute bottom-[38px]" }, "All rights reserved @FESB"),
                    React.createElement("div", { className: "absolute  space-x-7 space-between bottom-[38px] right-14" },
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faFacebook }),
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faInstagram }),
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faTwitter }),
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faLinkedinIn })))))));
};
exports["default"] = Home;
