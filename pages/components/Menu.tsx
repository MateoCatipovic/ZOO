import React from "react";
import Search from "./Search";
import { useState } from "react";

const Menu = () => {
  return (
    <div
      className="flex-col hidden lg:flex  max-w-[800px] w-full
     justify-between "
    >
      <Search />
      <div className="flex justify-between text-[#C1C2AD]">
        <a href="/">home</a>
        <a href="/plan_your_visit">plan your visit</a>
        <a href="/animals">animals</a>
        <a href="/blog">blog</a>
        <a href="/about_us">about us</a>
        <a href="/login">login</a>
      </div>
    </div>
  );
};

export default Menu;
