import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Navbar from "./components/Navbar";
import { NextPage } from "next";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const about_us: NextPage = () => {
  return (
    <div className=" bg-[#A9A181]   h-auto text-white font-averia   ">
      <Navbar />
      <div className="text-[75px]  pt-[96px]">
        {/* smanji sliku magaraca */}
        <div className="relative  bg-[url('../images/donkey_3.jpg')]  bg-no-repeat   bg-center bg-cover  h-[719px]  border-b-[2px] border-white"></div>
        <div className="absolute bottom-[15%] left-[80%] right-[10%]">
          <div className="flex flex-col  drop-shadow-4l font-[Pacifico]">
            <a>meet</a> <a className="text-red-500">Mateo</a> <a>and</a>{" "}
            <a className="text-red-500">Mario</a>
          </div>
        </div>

        <div className="px-14">
          <p className="font-[Pacifico] text-center text-[48px] mt-[60px]">
            the begginig
          </p>
          <p className="text-[30px] mt-[80px]">
            It all started as a university project of two friends. As the time
            passed by and an idea grew stronger, our zoo was born.
            <br />
            <br />
            What started as a simple school obligation, ended up to be our
            biggest love and passion.
            <br />
            <br />
            We are inviting you to be a part of our adventure.
            <br />
            We promise to keep you entertained.
          </p>
        </div>

        {/* Send message */}

        <div className="px-14">
          <form action="mailto:mateocatipovic763@gmail.com">
            <div className="flex flex-col ">
              <div className="flex mt-[250px] justify-around">
                <p className="font-[Pacifico] text-[48px] ">
                  send us a<br /> <a className="text-red-500">message</a>
                </p>
                <div className="flex flex-col">
                  <textarea
                    className="text-[30px] w-[450px] h-[250px] px-7 pb-[150px] mb-6 italic text-[#A9A181]"
                    name="send message..."
                    placeholder="start writing..."
                  />
                  <button className="w-[205px] h-[74px] text-black rounded-[25px] bg-[#2A92F1C7] text-[32px] px-12 py-3  drop-shadow-4l">
                    send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Footer */}

        <div className="flex flex-row justify-between text-[25px] font-averia mt-[160px] px-14 pb-[38px]">
          <p className=" ">All rights reserved @FESB</p>
          <div className="  space-x-7 space-between  right-14">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default about_us;
