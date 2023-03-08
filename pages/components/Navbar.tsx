import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [menu_bar, setMenu_bar] = useState(false);
  return (
    <div className="fixed w-full z-10">
      <div className="flex   justify-between h-[120px] px-14 py-6 bg-black">
        <Logo />
        <Menu />
        <div className="lg:hidden">
          <FontAwesomeIcon
            icon={faBars}
            fixedWidth
            className=" text-[78px] text-[#C1C2AD] "
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
