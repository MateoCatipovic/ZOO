import { NextPage } from "next/types";
import React from "react";
import Navbar from "./components/Navbar";
import lying_lion from "../images/lying_lion.png";
import lion_habitat from "../images/lion_habitat.png";
import Image from "next/image";
import { faFacebook, faInstagram, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const lion: NextPage = () => {
  return (
    <>
      <div className=" bg-[#A9A181]  bg-no-repeat bg-center bg-cover w-full h-auto   ">
        <Navbar />

        <div className="text-white  font-[Pacifico] text-center pt-[150px] text-[50px] px-14 pb-[38px]  ">
          lion
          {/* Description */}
          <div className="flex flex-row mt-[60px] ">
            <Image
              className=" "
              src={lying_lion}
              alt="lying_lion"
              width={600}
              height={500}
            />
            <p className="text-left text-[30px] font-averia ml-12">
              <i>Height:</i> 107-123cm <br />
              <i>Weight:</i> 122-192kg female and 150-225kg male <br />
              <i>Body lenght:</i> 172-250cm male and 158-192cm female <br />
              <i>Tail lenght:</i> 61-100cm <br />
              <i>Habitat:</i> Africa, south of the Sahara, savannahs, grassy
              plains and open woodlands
            </p>
          </div>
          {/* General */}
          <div className="flex flex-row mt-[160px] ">
            <p className="text-left text-[30px] font-averia mr-12">
              The lion has a muscular, broad-chested body, short, rounded head,
              round ears and a hairy tuft at the end of its tail. <br />
              <br />
              It is a social species, forming groups called prides. Pride
              consists of a few adult males, related females and cubs. <br />
              <br />
              Groups of female lions usually hunt together, preying mostly on
              large ungulates.
            </p>

            <Image
              className=" "
              src={lion_habitat}
              alt="lion_habitat"
              width={500}
              height={500}
            />
          </div>
          <div className="text-left mt-[60px]">
            Diet
            <p className="text-[30px] font-averia mt-6">
              Its prey consists mainly of mammals, particularly ungulates
              weighing 190-550kg with a preference for blue wildebeest, zebras,
              african buffalo and giraffe.
              <br /> <br />
              In typical hunts, each lioness has a favoured position in the
              group, either stalking prey on the “wing”, then attacking or
              moving a smaller distance in the centre of the group and capturing
              prey fleeing from other lionesses. <br />
              <br />
              An adult lioness requires an average of about 5kg of meat per day
              while males require about 7kg but they gorge themselves and eat up
              to 30kg in one session.
            </p>
          </div>
          <div className="text-left mt-[100px]">
            Reproduction
            <p className="text-[30px] font-averia mt-6">
              Most lionesses reproduce by the time they are 4 years of age.
              Generation legth of the lion is about seven years. The average
              gestation period is around 110 days. The female gives birth to a
              litter of between 1 and 4 cubs in a secluded den. <br />
              <br />
              Lion cubs are born blind, their eyes opening around 7 days after
              birth. They weigh 1.2-2.1kg at birth and are almost helpless,
              beggining to crawl a days or two after birth and walking around
              three weeks of age.
            </p>
          </div>
          <div className="text-left mt-[100px]">
            Lifetime & endangerment
            <p className="text-[30px] font-averia mt-6">
              Average male lion lives between 8 and 10 years in the wild while
              female lives between 15 and 17 years.<br/><br/> 
              Lions are losing their habitat due to the expansion of human activity (primarily
              agriculture) and human settlement. Lions are also hunted for sport
              and persecuted as a predator where they come into conflict with
              domestic cattle herds.
            </p>

            
            <div className="flex flex-row justify-between text-[25px] font-averia mt-[160px]">
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
      </div>
    </>
  );
};

export default lion;
