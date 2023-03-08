import React from "react";
import Navbar from "./components/Navbar";
import Animal_card from "./components/Animals_card";
import lion from "../images/lion_card.jpeg";
import elephant from "../images/elephant_card.jpeg";
import siberian_tiger from "../images/siberian_tiger.jpeg";
import giraffe from "../images/giraffe.jpeg";
import wild_buffalo from "../images/wild_buffalo.jpeg";
import koala from "../images/koala.jpeg";
import Link from "next/link";

const animals = () => {
  return (
    <div className=" bg-[#A9A181] bg-no-repeat bg-center bg-cover w-full h-[1200px]">
      <Navbar />
      

      {/* Mammals */}
      <div className="bg-[#A9A181]  text-white  font-[Pacifico] text-center pt-[150px] text-[50px] px-14 pt-[150px] border-b-[2px] border-white">
        mammals
        greška triba izbrisat navbar i stavit ga ispod puno divova
        <div className="flex flex-col md:flex-row justify-between h-[500px] mt-[200px] font-averia">
          <Link href="/animals">
            <Animal_card image={lion} name="lion" />
          </Link>
          <Link href="/animals">
            <Animal_card image={elephant} name="elephant" />
          </Link>
          <Link href="/animals">
            <Animal_card image={siberian_tiger} name="siberian tiger" />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-between h-[500px] mt-[200px] font-averia">
          <Link href="/animals">
            <Animal_card image={giraffe} name="giraffe" />
          </Link>
          <Link href="/animals">
            <Animal_card image={wild_buffalo} name="wild buffalo" />
          </Link>
          <Link href="/animals">
            <Animal_card image={koala} name="koala" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default animals;
