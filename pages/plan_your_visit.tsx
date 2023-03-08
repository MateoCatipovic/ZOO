import React from "react";
import { NextPage } from "next";
import Navbar from "./components/Navbar";
import Image from "next/image";
import prices_pic from "../images/prices.png";
import Event_card from "./components/Event_card";
import whale_show from "../images/whale_show.jpeg";
import elephant_show from "../images/elephant_show.png";
import crocodile_show from "../images/crocodile_show.jpeg";
import parking_pic from "../images/parking.jpeg";
import zoo_map from "../images/zoo_map.jpeg";
import tiger_footer from "../images/tiger_footer.jpeg";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

const plan_your_visit: NextPage = () => {
  return (
    <>
      {/* Working hours */}
      <div className=" bg-[#A9A181] bg-no-repeat bg-center bg-cover w-full h-auto pb-[150px] border-b-[2px] border-white">
        <Navbar />
        <p className="pt-[200px] text-center text-white font-[Pacifico] text-[50px]">
          working hours
        </p>
        <div className="flex flex-row px-14 justify-around text-[30px] pt-[70px]">
          <p className="text-white font-averia text-center">
            Working hours: <br />
            <br />
            Mon - Sat <br />
            08:00 - 19:00 <br />
            <br />
            Sunday <br />
            08:00 - 16:00
          </p>
          <p className="text-white font-averia text-center">
            Zoo ticket shop: <br />
            <br />
            Mon - Sat <br />
            08:00 - 16:00 <br />
            <br />
            Sunday <br />
            08:00 - 12:00
          </p>
        </div>
      </div>

      {/* Prices */}
      <div className=" bg-[#A9A181] bg-no-repeat bg-center bg-cover w-full h-auto py-[150px] border-b-[2px] border-white">
        <p className=" text-center text-white font-[Pacifico] text-[50px]">
          prices
        </p>
        <div className="flex flex-col md:flex-row px-14 justify-around text-[30px] pt-[70px]">
          <div className="text-white font-averia text-center">
            Prices: <br />
            <br />
            <ul>
              <li className="flex justify-between">
                <span>Adults</span> <span>$10</span>
              </li>
              <li className="flex justify-between">
                <span>Students</span> <span>$7</span>
              </li>
              <li className="flex justify-between">
                <span>Seniors (65+)</span> <span>$6</span>
              </li>
              <li className="flex justify-between">
                <span>Kids</span> <span>$5</span>
              </li>
              <br />
              <li>
                <span>Group (4-10)</span> &nbsp; <span> $8/per person</span>
              </li>
              <li>
                <span>Group (10+)</span>&nbsp;&nbsp;&nbsp;{" "}
                <span>$7/per person</span>
              </li>
            </ul>
          </div>
          <Image
            className="rounded-[10px]  "
            src={prices_pic}
            alt="prices_img"
            width={400}
          />
        </div>
      </div>

      {/* Events */}
      <div className=" bg-[#A9A181] bg-no-repeat bg-center bg-cover w-full h-auto py-[150px] border-b-[2px] border-white">
        <p className=" text-center text-white font-[Pacifico] text-[50px]">
          events
        </p>
        <div className="flex flex-col md:flex-row px-14 justify-around text-[30px] pt-[70px] text-white font-averia text-center">
          <div className="bg-e1 rounded-[10px] drop-shadow-4l">
            <Event_card
              image={whale_show}
              name="Orca whale show"
              date="March 24th, 2023."
            />
          </div>
          <div className="bg-[#809272] rounded-[10px] drop-shadow-4l">
            <Event_card
              image={crocodile_show}
              name="Crocodile show"
              date="April 16th, 2023."
            />
          </div>
          <div className="bg-[#A78463] rounded-[10px] drop-shadow-4l">
            <Event_card
              image={elephant_show}
              name="Elephant show"
              date="August 7th, 2023."
            />
          </div>
        </div>
      </div>

      {/* Directions & parking */}

      <div className=" bg-[#A9A181] bg-no-repeat bg-center bg-cover w-full h-auto py-[150px] border-b-[2px] border-white">
        <p className=" text-center text-white font-[Pacifico] text-[50px]">
          directions & parking
        </p>
        <div className="flex justify-between px-14 pt-[70px]">
          <Image
            className=" rounded-[10px] h-[500px] w-[400px]"
            src={parking_pic}
            alt="parking"
          />
          <div className="w-[800px] text-white flex flex-col text-center justify-around font-averia ">
            <p className="text-[30px]">Marjanska ulica 12, Dicmo, Croatia </p>
            <p className="text-[20px]">
              Directions from airport: From airport take the State road D1,
              proceed east to Solin,exit at roundabout (direction Sinj) and
              follow the signs in Dicmo to the Zoo parking.
            </p>
            <p className="text-[20px]">
              Directions from highway: Get off the highway at Dugopolje exit, on
              roundabout take third exit (direction Sinj) and follow the signs
              in Dicmo to the Zoo parking.
            </p>
            <p className="text-[20px]">
              Public transportation: For more information about bus schedules,
              please call +385 (0)21 329-180 (Bus station Split information
              service) or visit www.ak-split.hr.{" "}
            </p>
            <p className="text-[20px]">
              Parking informations: 200 parking spots Prices: $1/per hour Daily
              ticket - $5
            </p>
          </div>
        </div>
      </div>

      {/* Zoo map */}

      <div className=" bg-[#A9A181] bg-no-repeat bg-center bg-cover w-full h-auto py-[150px]  bg-gradient-to-b from-[#A9A181] to-[#0A2229]">
        <p className=" text-center text-white font-[Pacifico] text-[50px]">
          zoo map
        </p>
        <div className="flex justify-between px-14 pt-[70px]">
          <Image
            className=" rounded-[10px] h-[550px] w-[700px]"
            src={zoo_map}
            alt="zoo map"
          />
          <div className=" text-white flex flex-col text-center justify-around font-averia items-center">
            <p className="text-[30px]">
              View the Zoo Center’s classic illustrated map on your mobile or
              desktop browser. Find your favorite wildlife, plan your visit, and
              check out all the Zoo Center has to offer.
            </p>
            <button className="w-[350px] text-[30px] rounded-[5px] px-8 py-4 bg-red-600">
              Download PDF <FontAwesomeIcon icon={faDownload} />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className=" relative bg-[url('../images/tiger_footer.jpeg')] w-full h-[1200px] bg-no-repeat bg-center bg-cover font-averia  pt-[150px] text-[25px] px-14 text-[#C1C2AD] ">
       
        <div>
          <p className="absolute bottom-[38px]">All rights reserved @FESB</p>
          <div className="absolute  space-x-7 space-between bottom-[38px] right-14">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
        </div>
      </div>
    </>
  );
};

export default plan_your_visit;
