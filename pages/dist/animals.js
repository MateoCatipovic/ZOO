"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Navbar_1 = require("./components/Navbar");
var Animals_card_1 = require("./components/Animals_card");
var lion_card_jpeg_1 = require("../images/lion_card.jpeg");
var elephant_card_jpeg_1 = require("../images/elephant_card.jpeg");
var siberian_tiger_jpeg_1 = require("../images/siberian_tiger.jpeg");
var giraffe_jpeg_1 = require("../images/giraffe.jpeg");
var wild_buffalo_jpeg_1 = require("../images/wild_buffalo.jpeg");
var koala_jpeg_1 = require("../images/koala.jpeg");
var crocodile_png_1 = require("../images/crocodile.png");
var anaconda_png_1 = require("../images/anaconda.png");
var iguana_png_1 = require("../images/iguana.png");
var turtle_png_1 = require("../images/turtle.png");
var butterfly_png_1 = require("../images/butterfly.png");
var Scorpion_scaled_jpg_1 = require("../images/Scorpion-scaled.jpg");
var great_white_shark_south_africa_png_1 = require("../images/great_white_shark_south_africa.png");
var killer_whale_1_jpg_1 = require("../images/killer-whale-1.jpg");
var tuna_png_1 = require("../images/tuna.png");
var lobster_png_1 = require("../images/lobster.png");
var octopus_png_1 = require("../images/octopus.png");
var sea_horse_png_1 = require("../images/sea_horse.png");
var penguin_png_1 = require("../images/penguin.png");
var emu_png_1 = require("../images/emu.png");
var raven_png_1 = require("../images/raven.png");
var flamingo_png_1 = require("../images/flamingo.png");
var grey_parrot_png_1 = require("../images/grey_parrot.png");
var eagle_card_png_1 = require("../images/eagle_card.png");
var link_1 = require("next/link");
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var animals = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: " bg-[#A9A181]  bg-no-repeat bg-center bg-cover w-full h-auto  " },
            react_1["default"].createElement(Navbar_1["default"], null),
            react_1["default"].createElement("div", { className: "bg-[#A9A181]  text-white  font-[Pacifico] text-center pt-[150px] text-[50px] px-14  pb-[80px] " },
                "mammals",
                react_1["default"].createElement("div", { className: "flex flex-col md:flex-row justify-between h-[500px] mt-[60px] font-averia" },
                    react_1["default"].createElement(link_1["default"], { href: "/lion" },
                        react_1["default"].createElement(Animals_card_1["default"], { image: lion_card_jpeg_1["default"], name: "lion", color: "mammals_color" })),
                    react_1["default"].createElement(link_1["default"], { href: "/animals" },
                        react_1["default"].createElement(Animals_card_1["default"], { image: elephant_card_jpeg_1["default"], name: "elephant", color: "mammals_color" })),
                    react_1["default"].createElement(link_1["default"], { href: "/animals" },
                        react_1["default"].createElement(Animals_card_1["default"], { image: siberian_tiger_jpeg_1["default"], name: "siberian tiger ", color: "mammals_color" }))),
                react_1["default"].createElement("div", { className: "flex flex-col md:flex-row justify-between h-[500px] mt-[200px] font-averia" },
                    react_1["default"].createElement(link_1["default"], { href: "/animals" },
                        react_1["default"].createElement(Animals_card_1["default"], { image: giraffe_jpeg_1["default"], name: "giraffe", color: "mammals_color" })),
                    react_1["default"].createElement(link_1["default"], { href: "/animals" },
                        react_1["default"].createElement(Animals_card_1["default"], { image: wild_buffalo_jpeg_1["default"], name: "wild buffalo", color: "mammals_color" })),
                    react_1["default"].createElement(link_1["default"], { href: "/animals" },
                        react_1["default"].createElement(Animals_card_1["default"], { image: koala_jpeg_1["default"], name: "koala", color: "mammals_color" })))),
            react_1["default"].createElement("div", { className: "bg-reptils_color  text-white  font-[Pacifico] text-center pt-[60px] text-[50px] px-14  pb-[80px]" },
                "reptiles & insects",
                react_1["default"].createElement("div", { className: "flex flex-col md:flex-row justify-between h-[500px] mt-[60px] font-averia" },
                    react_1["default"].createElement(link_1["default"], { href: "/animals" },
                        react_1["default"].createElement(Animals_card_1["default"], { image: crocodile_png_1["default"], name: "crocodile", color: "reptils_color" })),
                    react_1["default"].createElement(link_1["default"], { href: "/animals" },
                        react_1["default"].createElement(Animals_card_1["default"], { image: anaconda_png_1["default"], name: "anaconda", color: "reptils_color" })),
                    react_1["default"].createElement(link_1["default"], { href: "/animals" },
                        react_1["default"].createElement(Animals_card_1["default"], { image: iguana_png_1["default"], name: "green iguana", color: "reptils_color" }))),
                react_1["default"].createElement("div", { className: "flex flex-col md:flex-row justify-between h-[500px] mt-[200px] font-averia" },
                    react_1["default"].createElement(link_1["default"], { href: "/animals" },
                        react_1["default"].createElement(Animals_card_1["default"], { image: turtle_png_1["default"], name: "snapping turtle", color: "reptils_color" })),
                    react_1["default"].createElement(link_1["default"], { href: "/animals" },
                        react_1["default"].createElement(Animals_card_1["default"], { image: butterfly_png_1["default"], name: "monarch butterfly", color: "reptils_color" })),
                    react_1["default"].createElement(link_1["default"], { href: "/animals" },
                        react_1["default"].createElement(Animals_card_1["default"], { image: Scorpion_scaled_jpg_1["default"], name: "scorpion", color: "reptils_color" })))),
            react_1["default"].createElement("div", { className: "bg-water_animals_color  text-white  font-[Pacifico] text-center pt-[60px] text-[50px] px-14  pb-[80px]" },
                "water animals",
                react_1["default"].createElement("div", { className: "flex flex-col md:flex-row justify-between h-[500px] mt-[60px] font-averia" },
                    react_1["default"].createElement(link_1["default"], { href: "/animals" },
                        react_1["default"].createElement(Animals_card_1["default"], { image: great_white_shark_south_africa_png_1["default"], name: "great white shark", color: "reptils_color" })),
                    react_1["default"].createElement(link_1["default"], { href: "/animals" },
                        react_1["default"].createElement(Animals_card_1["default"], { image: killer_whale_1_jpg_1["default"], name: "orca", color: "reptils_color" })),
                    react_1["default"].createElement(link_1["default"], { href: "/animals" },
                        react_1["default"].createElement(Animals_card_1["default"], { image: tuna_png_1["default"], name: "tuna", color: "reptils_color" }))),
                react_1["default"].createElement("div", { className: "flex flex-col md:flex-row justify-between h-[500px] mt-[200px] font-averia" },
                    react_1["default"].createElement(link_1["default"], { href: "/animals" },
                        react_1["default"].createElement(Animals_card_1["default"], { image: lobster_png_1["default"], name: "lobster", color: "reptils_color" })),
                    react_1["default"].createElement(link_1["default"], { href: "/animals" },
                        react_1["default"].createElement(Animals_card_1["default"], { image: octopus_png_1["default"], name: "octopus", color: "reptils_color" })),
                    react_1["default"].createElement(link_1["default"], { href: "/animals" },
                        react_1["default"].createElement(Animals_card_1["default"], { image: sea_horse_png_1["default"], name: "sea horse", color: "reptils_color" })))),
            react_1["default"].createElement("div", { className: "bg-birds_color  text-white  font-[Pacifico] text-center pt-[60px] text-[50px] px-14  pb-[80px]" },
                "birds",
                react_1["default"].createElement("div", { className: "flex flex-col md:flex-row justify-between h-[500px] mt-[60px] font-averia" },
                    react_1["default"].createElement(link_1["default"], { href: "/animals" },
                        react_1["default"].createElement(Animals_card_1["default"], { image: penguin_png_1["default"], name: "penguin", color: "reptils_color" })),
                    react_1["default"].createElement(link_1["default"], { href: "/animals" },
                        react_1["default"].createElement(Animals_card_1["default"], { image: eagle_card_png_1["default"], name: "white-tailed eagle", color: "reptils_color" })),
                    react_1["default"].createElement(link_1["default"], { href: "/animals" },
                        react_1["default"].createElement(Animals_card_1["default"], { image: emu_png_1["default"], name: "emu", color: "reptils_color" }))),
                react_1["default"].createElement("div", { className: "flex flex-col md:flex-row justify-between h-[500px] mt-[200px] font-averia" },
                    react_1["default"].createElement(link_1["default"], { href: "/animals" },
                        react_1["default"].createElement(Animals_card_1["default"], { image: raven_png_1["default"], name: "common raven", color: "reptils_color" })),
                    react_1["default"].createElement(link_1["default"], { href: "/animals" },
                        react_1["default"].createElement(Animals_card_1["default"], { image: flamingo_png_1["default"], name: "falmingo", color: "reptils_color" })),
                    react_1["default"].createElement(link_1["default"], { href: "/animals" },
                        react_1["default"].createElement(Animals_card_1["default"], { image: grey_parrot_png_1["default"], name: "grey parrot", color: "reptils_color" })))),
            react_1["default"].createElement("div", { className: " relative bg-[url('../images/penguin_footer.png')] w-full h-[1200px] bg-no-repeat bg-center bg-cover font-averia  pt-[150px] text-[25px] px-14 text-[#C1C2AD] " },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("p", { className: "absolute bottom-[38px]" }, "All rights reserved @FESB"),
                    react_1["default"].createElement("div", { className: "absolute  space-x-7 space-between bottom-[38px] right-14" },
                        react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faFacebook }),
                        react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faInstagram }),
                        react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faTwitter }),
                        react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faLinkedinIn })))))));
};
exports["default"] = animals;
