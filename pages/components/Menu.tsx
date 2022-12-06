import React from "react";
import Search from "./Search";

const Menu = () => {
  return (
    <div
      className="flex flex-col w-[800px]
     justify-between"
    >
      <Search />
      <div className="flex justify-between">
        <button>home</button>
        <button>plan your visit</button>
        <button>animals</button>
        <button>blog</button>
        <button>about us</button>
        <button>login</button>
      </div>
    </div>
  );
};

export default Menu;
