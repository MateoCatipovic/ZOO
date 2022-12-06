import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="flex justify-between h-[120px] px-14 py-6">
      <Logo />

      <Menu />
    </div>
  );
};

export default Navbar;
