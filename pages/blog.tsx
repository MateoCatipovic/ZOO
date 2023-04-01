import React from "react";
import Navbar from "./components/Navbar";
import Link from "next/link";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";

const blog: NextPage = () => {
  return (
    <>
      <div className=" bg-black  bg-no-repeat bg-center bg-cover w-full h-auto   ">
        <Navbar />
        <div className="text-white  font-averia text-center pt-[120px] text-[75px]  pb-[38px] ">
          
            <div className="relative bg-[url('../images/blog1.png')] hover:opacity-75 transition-all  bg-no-repeat  bg-cover bg-center h-[650px] mb-[50px]">
              <p className="absolute bottom-[40%] left-[10%] right-[10%] drop-shadow-4l">
                popular water animals
              </p>
            </div>
          


          <Link href="/articles/tiger_article">
          <div className="relative bg-[url('../images/blog2.png')]  hover:opacity-75 transition-all  bg-no-repeat  bg-cover bg-center  h-[700px] mb-[50px]">
            <p className="absolute bottom-[40%] left-[10%] right-[10%] drop-shadow-4l">
              fascinating facts about Siberian tiger
            </p>
          </div>
          </Link>

          
          <div className="relative bg-[url('../images/blog3_lion.png')] hover:opacity-75 transition-all  bg-no-repeat  bg-cover bg-center h-[700px] mb-[50px]">
            <p className="absolute bottom-[40%] left-[10%] right-[10%] drop-shadow-4l">
              king of the jungle = king of the zoo
            </p>
          </div>

          <div className="relative bg-[url('../images/blog4_penguin.png')] hover:opacity-75 transition-all  bg-no-repeat bg-cover bg-center h-[700px] mb-[50px]">
            <p className="absolute bottom-[40%] left-[10%] right-[10%] drop-shadow-4l">
              this year’s newcomers
            </p>
          </div>

          <div className="relative bg-[url('../images/blog5_rhino.png')] hover:opacity-75 transition-all  bg-no-repeat bg-cover bg-center h-[700px] mb-[50px]">
            <p className="absolute bottom-[40%] left-[10%] right-[10%] drop-shadow-4l">
              animals you must visit
            </p>
          </div>


{/* Footer */}
          <div className="flex flex-row justify-between text-[25px] font-averia mt-[160px] px-14">
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
    </>
  );
};

export default blog;
