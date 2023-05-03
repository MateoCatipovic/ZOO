import React from "react";
import Navbar from "./components/Navbar";
import { NextPage } from "next";
import Image from "next/image";
import username_icon from "../images/username_icon.png";
import password_icon from "../images/password_icon.png";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const login: NextPage = () => {
  return (
    <>
      <div className="relative ">
        <Navbar />
        <div
          className="bg-[url('../images/login-bg.jpg')]  bg-no-repeat bg-center bg-[length:screen_500px]
          h-[2000px] pt-[200px] text-white text-center font-[Pacifico] text-[55px] px-14"
        >
          login
          <div>
            <form>
              <div className="flex flex-col w-full items-center mt-[100px] text-[19px] ">
                <div className="flex bg-[#C1C2AD]">
                  <Image
                    className="rounded-[10px] w-[55px]  "
                    src={username_icon}
                    alt="panda_pic"
                  />
                  <input
                    className="leading-[55px]  border-l-2 border-l-black bg-[#C1C2AD] text-black font-sans placeholder-black text-left w-[350px] italic pl-5"
                    placeholder="username"
                  />
                </div>

                <div className="flex bg-[#C1C2AD] mt-6">
                  <Image
                    className="rounded-[10px] w-[55px] h-[55px] "
                    src={password_icon}
                    alt="panda_pic"
                  />
                  <input
                    className="leading-[55px] border-l-2 border-l-black bg-[#C1C2AD] text-black font-sans placeholder-black text-left w-[350px] italic pl-5"
                    placeholder="password"
                  />
                </div>
                <button className="bg-[#2A92F1E5] mt-6 text-black rounded-[25px] w-[130px] h-[50px]  font-bold drop-shadow-4l font-sans">
                  sign in
                </button>
              </div>
            </form>
          </div>


          
          <p className="mt-6 font-averia text-[20px]">
            Don’t have an account yet?{" "}
            <a className="underline decoration-red-500">Register here.</a>
          </p>


          {/* Footer */}
          <div className=" text-[25px] text-[#C1C2AD]  font-averia">
            <p className="absolute bottom-[38px]">All rights reserved @FESB</p>
            <div className="absolute  space-x-7 space-between bottom-[38px] right-14">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
          </div>


          
        </div>
      </div>
    </>
  );
};

export default login;
