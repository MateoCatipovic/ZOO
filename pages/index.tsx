import { NextPage } from "next";
import Navbar from "./components/Navbar";
import Link from "next/link";
import Image from "next/image";
import panda from "../images/panda.png";
import Card from "./components/Card";
import lion_card from "../images/lion_card.jpeg";
import elephant_card from "../images/elephant_card.jpeg";
import eagle_card from "../images/eagle_card.png";

import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <div className="bg-[url('../images/dark_cover.png')] bg-no-repeat bg-center bg-cover w-full h-[1200px]">
          <Navbar />
        </div>
        <div className="bg-[#A9A181] h-[1200px] text-white font-[Pacifico] flex-row text-center pt-[150px] text-[50px] border-b-[2px] border-white">
          discover our world
          <div className="pt-[7%] flex-col justify-between px-14">
            <Image
              className="rounded-[10px] "
              src={panda}
              alt="panda_pic"
              width={700}
              height={700}
            />
            <p className="text-[30px] font-averia">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
        <div className="bg-[#A9A181] h-[1200px] text-white  font-[Pacifico] text-center pt-[150px] text-[50px] px-14 pt-[150px] border-b-[2px] border-white">
          most popular animals
          <div className="flex flex-row justify-between h-[500px] mt-[200px] font-averia">
            <Card image={lion_card} name="lion" species="mammals" />
            <Card image={elephant_card} name="elephant" species="mammals" />
            <Card
              image={eagle_card}
              name="white-tailed eagle"
              species="birds"
            />
          </div>
          <Link href="/animals">
            <p className="text-white font-averia text-right mt-[28px] text-[25px]  drop-shadow-[4px_4px_4px_rgba(0,0,0,0.5)] rounded-[4px]">
              ANIMALS <FontAwesomeIcon icon={faAnglesRight} />
            </p>
          </Link>
        </div>

        {/* Footer */}
        <div className=" relative bg-[url('../images/footer.png')] w-full h-[1200px] bg-no-repeat bg-center bg-cover font-averia  pt-[150px] text-[25px] px-14 text-[#C1C2AD] ">
          <div className="flex-col text-left justify-end text-black">
            <p className="flex justify-end items-center">
              <FontAwesomeIcon icon={faLocationDot} /> &nbsp;&nbsp; Marjanska
              ulica 12, Dicmo
            </p>
            <br></br>
            <p className="flex justify-end items-center">
              <FontAwesomeIcon icon={faPhone} /> &nbsp; 00385951128899
            </p>
          </div>
          <div className="">
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

export default Home;
