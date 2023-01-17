"use strict";
exports.__esModule = true;
var head_1 = require("next/head");
var Navbar_1 = require("./components/Navbar");
var image_1 = require("next/image");
var panda_png_1 = require("../images/panda.png");
var Card_1 = require("./components/Card");
var lion_card_jpeg_1 = require("../images/lion_card.jpeg");
var elephant_card_jpeg_1 = require("../images/elephant_card.jpeg");
var eagle_card_png_1 = require("../images/eagle_card.png");
var Kard_1 = require("./components/Kard");
var Home = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1["default"], null,
            React.createElement("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
            React.createElement("link", { rel: "preconnect", href: "https://fonts.gstatic.com" }),
            React.createElement("link", { href: "https://fonts.googleapis.com/css2?family=Averia+Libre&family=Pacifico&display=swap", rel: "stylesheet" })),
        React.createElement("div", null,
            React.createElement("div", { className: "bg-[url('../images/dark_cover.png')] bg-no-repeat bg-center bg-cover  h-[1200px]" },
                React.createElement(Navbar_1["default"], null)),
            React.createElement("div", { className: "bg-[#A9A181] h-[1300px] text-white font-[Pacifico] flex-row text-center pt-[150px] text-[50px] border-b-[2px] border-white" },
                "discover our world",
                React.createElement("div", { className: "pt-[7%] flex flex-row justify-between px-14" },
                    React.createElement(image_1["default"], { className: "rounded-[10px] ", src: panda_png_1["default"], alt: "panda_pic", width: 700, height: 700 }),
                    React.createElement("p", { className: "text-[30px] font-[AveriaLibre] ml-[40px]" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."))),
            React.createElement("div", { className: "bg-[#A9A181] h-[1300px] text-white font-[Pacifico] text-center pt-[150px] text-[50px] px-14 pt-[150px] border-b-[2px] border-white" },
                "most popular animals",
                React.createElement("div", { className: "flex flex-row justify-evenly h-[500px] pt-[400px] " },
                    React.createElement(Card_1["default"], { image: lion_card_jpeg_1["default"], name: "lion", species: "mammals" }),
                    React.createElement(Card_1["default"], { image: elephant_card_jpeg_1["default"], name: "elephant", species: "mammals" }),
                    React.createElement(Card_1["default"], { image: eagle_card_png_1["default"], name: "eagle", species: "birds" }),
                    React.createElement(Kard_1["default"], { image: "https://cdn.britannica.com/55/2155-050-604F5A4A/lion.jpg" }))))));
};
exports["default"] = Home;
