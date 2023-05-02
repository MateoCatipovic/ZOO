import React from "react";
import Navbar from "./components/Navbar";
import { NextPage } from "next";

const login: NextPage = () =>{
  return (
    <>
      <div className=" bg-[url('../images/login-bg.jpg')]  bg-no-repeat bg-center bg-cover w-full h-[2000px]  ">
        <Navbar />
      </div>
    </>
  );
};

export default login;
