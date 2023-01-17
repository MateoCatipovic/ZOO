import { NextPage } from "next";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Link from "next/link";
import Image from "next/image";
import panda from "../images/panda.png";
import Card from "./components/Card";
import lion_card from "../images/lion_card.jpeg";
import elephant_card from "../images/elephant_card.jpeg";
import eagle_card from "../images/eagle_card.png";


const Home: NextPage = () => {
  return (
    <>
      <div>
        <div className="bg-[url('../images/dark_cover.png')] bg-no-repeat bg-center bg-cover  h-[1200px]">
          <Navbar />
        </div>
        <div className="bg-[#A9A181] h-[1300px] text-white font-[Pacifico] flex-row text-center pt-[150px] text-[50px] border-b-[2px] border-white">
          discover our world
          <div className="pt-[7%] flex flex-row justify-between px-14">
            <Image
              className="rounded-[10px] "
              src={panda}
              alt="panda_pic"
              width={700}
              height={700}
            />
            <p className="text-[30px] font-averia ml-[40px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
        <div className="bg-[#A9A181] h-[1300px] text-white  font-[Pacifico] text-center pt-[150px] text-[50px] px-14 pt-[150px] border-b-[2px] border-white">
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
        </div>
      </div>
    </>
  );
};

export default Home;
