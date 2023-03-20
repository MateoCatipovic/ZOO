import React from "react";
import Navbar from "./components/Navbar";
import Animal_card from "./components/Animals_card";
import lion from "../images/lion_card.jpeg";
import elephant from "../images/elephant_card.jpeg";
import siberian_tiger from "../images/siberian_tiger.jpeg";
import giraffe from "../images/giraffe.jpeg";
import wild_buffalo from "../images/wild_buffalo.jpeg";
import koala from "../images/koala.jpeg";
import crocodile from "../images/crocodile.png";
import anaconda from "../images/anaconda.png";
import green_iguana from "../images/iguana.png";
import turtle from "../images/turtle.png";
import butterfly from "../images/butterfly.png";
import scorpion from "../images/Scorpion-scaled.jpg";
import great_shark from "../images/great_white_shark_south_africa.png";
import orca from "../images/killer-whale-1.jpg";
import tuna from "../images/tuna.png";
import lobster from "../images/lobster.png";
import octopus from "../images/octopus.png";
import sea_horse from "../images/sea_horse.png";
import penguin from "../images/penguin.png";
import emu from "../images/emu.png";
import raven from "../images/raven.png";
import flamingo from "../images/flamingo.png";
import parrot from "../images/grey_parrot.png";
import eagle from "../images/eagle_card.png";
import Link from "next/link";
import { NextPage } from "next";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const animals: NextPage = () => {
  return (
    <>
      <div className=" bg-[#A9A181]  bg-no-repeat bg-center bg-cover w-full h-auto  ">
        <Navbar />

        {/* Mammals */}
        <div className="bg-[#A9A181]  text-white  font-[Pacifico] text-center pt-[150px] text-[50px] px-14  pb-[80px] ">
          mammals
          <div className="flex flex-col md:flex-row justify-between h-[500px] mt-[60px] font-averia">
            <Link href="/lion">
              <Animal_card image={lion} name="lion" color="mammals_color" />
            </Link>
            <Link href="/animals">
              <Animal_card
                image={elephant}
                name="elephant"
                color="mammals_color"
              />
            </Link>
            <Link href="/animals">
              <Animal_card
                image={siberian_tiger}
                name="siberian tiger "
                color="mammals_color"
              />
            </Link>
          </div>
          <div className="flex flex-col md:flex-row justify-between h-[500px] mt-[200px] font-averia">
            <Link href="/animals">
              <Animal_card
                image={giraffe}
                name="giraffe"
                color="mammals_color"
              />
            </Link>
            <Link href="/animals">
              <Animal_card
                image={wild_buffalo}
                name="wild buffalo"
                color="mammals_color"
              />
            </Link>
            <Link href="/animals">
              <Animal_card image={koala} name="koala" color="mammals_color" />
            </Link>
          </div>
        </div>

        {/* reptiles & insects */}
        <div className="bg-reptils_color  text-white  font-[Pacifico] text-center pt-[60px] text-[50px] px-14  pb-[80px]">
          reptiles & insects
          <div className="flex flex-col md:flex-row justify-between h-[500px] mt-[60px] font-averia">
            <Link href="/animals">
              <Animal_card
                image={crocodile}
                name="crocodile"
                color="reptils_color"
              />
            </Link>
            <Link href="/animals">
              <Animal_card
                image={anaconda}
                name="anaconda"
                color="reptils_color"
              />
            </Link>
            <Link href="/animals">
              <Animal_card
                image={green_iguana}
                name="green iguana"
                color="reptils_color"
              />
            </Link>
          </div>
          <div className="flex flex-col md:flex-row justify-between h-[500px] mt-[200px] font-averia">
            <Link href="/animals">
              <Animal_card
                image={turtle}
                name="snapping turtle"
                color="reptils_color"
              />
            </Link>
            <Link href="/animals">
              <Animal_card
                image={butterfly}
                name="monarch butterfly"
                color="reptils_color"
              />
            </Link>
            <Link href="/animals">
              <Animal_card
                image={scorpion}
                name="scorpion"
                color="reptils_color"
              />
            </Link>
          </div>
        </div>

        {/* water animals */}
        <div className="bg-water_animals_color  text-white  font-[Pacifico] text-center pt-[60px] text-[50px] px-14  pb-[80px]">
          water animals
          <div className="flex flex-col md:flex-row justify-between h-[500px] mt-[60px] font-averia">
            <Link href="/animals">
              <Animal_card
                image={great_shark}
                name="great white shark"
                color="reptils_color"
              />
            </Link>
            <Link href="/animals">
              <Animal_card image={orca} name="orca" color="reptils_color" />
            </Link>
            <Link href="/animals">
              <Animal_card image={tuna} name="tuna" color="reptils_color" />
            </Link>
          </div>
          <div className="flex flex-col md:flex-row justify-between h-[500px] mt-[200px] font-averia">
            <Link href="/animals">
              <Animal_card
                image={lobster}
                name="lobster"
                color="reptils_color"
              />
            </Link>
            <Link href="/animals">
              <Animal_card
                image={octopus}
                name="octopus"
                color="reptils_color"
              />
            </Link>
            <Link href="/animals">
              <Animal_card
                image={sea_horse}
                name="sea horse"
                color="reptils_color"
              />
            </Link>
          </div>
        </div>

        {/* birds */}
        <div className="bg-birds_color  text-white  font-[Pacifico] text-center pt-[60px] text-[50px] px-14  pb-[80px]">
          birds
          <div className="flex flex-col md:flex-row justify-between h-[500px] mt-[60px] font-averia">
            <Link href="/animals">
              <Animal_card
                image={penguin}
                name="penguin"
                color="reptils_color"
              />
            </Link>
            <Link href="/animals">
              <Animal_card
                image={eagle}
                name="white-tailed eagle"
                color="reptils_color"
              />
            </Link>
            <Link href="/animals">
              <Animal_card image={emu} name="emu" color="reptils_color" />
            </Link>
          </div>
          <div className="flex flex-col md:flex-row justify-between h-[500px] mt-[200px] font-averia">
            <Link href="/animals">
              <Animal_card
                image={raven}
                name="common raven"
                color="reptils_color"
              />
            </Link>
            <Link href="/animals">
              <Animal_card
                image={flamingo}
                name="falmingo"
                color="reptils_color"
              />
            </Link>
            <Link href="/animals">
              <Animal_card
                image={parrot}
                name="grey parrot"
                color="reptils_color"
              />
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className=" relative bg-[url('../images/penguin_footer.png')] w-full h-[1200px] bg-no-repeat bg-center bg-cover font-averia  pt-[150px] text-[25px] px-14 text-[#C1C2AD] ">
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
      </div>
    </>
  );
};

export default animals;
