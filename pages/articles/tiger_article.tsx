import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import tiger_article_png from "../../images/tiger_article.jpeg";
import tiger_in_snow from "../../images/tiger-running-in-snow.jpg";
import two_tigers from "../../images/two_tigers.jpg";
import tiger_eating from "../../images/tiger_eating.jpg";
import tiger_in_water from "../../images/tiger_in_water.jpg";

const tiger_article: NextPage = () => {
  return (
    <>
      <div className=" bg-[#A9A181]   h-auto text-white font-averia   ">
        <Navbar />
        <div className="text-[75px]  pt-[120px]">
          <div className="relative  bg-[url('../images/blog2.png')]  bg-no-repeat   bg-center bg-cover  h-[700px]  border-b-[2px] border-white"></div>
          <p className="absolute bottom-[20%] left-[10%] right-[10%] drop-shadow-4l">
            fascinating facts about Siberian tiger
          </p>
        </div>

        {/* Text 1 */}
        <div className=" bg-[#A9A181]  border-b-[2px] border-white pb-[100px]">
          <p className="font-[Pacifico] text-[35px] mt-[100px] px-14">
            other facts you must know
          </p>
          <div className="flex flex-row  mt-[30px] px-14 ">
            <p className="text-left text-[20px] font-averia pt-[50px] mr-[150px]">
              The Siberian tiger is the world’s largest cat. An adult tiger
              averages 1.78-2.09m in head and body length, with the male being
              larger than the female tiger. The male averages 1.96m while the
              female averages 1.83m. <br />
              <br />
              Its long and flexible tail measures 0.99m in male and 0.91m in the
              female.
              <br />
              <br />A wild male Siberian tiger weighs 215kg while the female
              weighs 138kg. The second largest cat is lion, followed by jaguar,
              cougar and leopard.
            </p>

            <Image
              className="rounded-[10px] h-[400px] w-[450px] "
              src={tiger_article_png}
              alt="tiger"
            />
          </div>
        </div>

        {/* Text 2 */}
        <div className=" bg-[#A9A181]  border-b-[2px] border-white pb-[100px]">
          <p className="font-[Pacifico] text-[35px] mt-[100px] px-14">
            the only tiger that can survive in the snow
          </p>
          <div className="flex flex-row  mt-[30px] px-14 ">
            <Image
              className="rounded-[10px] h-[400px] w-[650px] "
              src={tiger_in_snow}
              alt="tiger"
            />
            <p className="text-left text-[20px] font-averia pt-[50px] ml-[150px]">
              The only subspecies of tiger that can survive in extremely cold
              areas.
              <br />
              <br />
              The tiger has a thick layer of fat that insulates the body against
              heat loss. Additionally, the thick, dense fur that covers its body
              keeps the animal warm, especially when it is extremely cold.
              <br />
              <br />
              The Siberian tiger is always on the move and does not idle for
              long. The constant movement ensures that the body generates a lot
              of heat to keep it warm.
            </p>
          </div>
        </div>

        {/* Text 3 */}
        <div className=" bg-[#A9A181]  border-b-[2px] border-white pb-[100px]">
          <p className="font-[Pacifico] text-[35px] mt-[100px] px-14">
            no two tigers have the same striped pattern
          </p>
          <div className="flex flex-row  mt-[30px] px-14 ">
            <p className="text-left text-[20px] font-averia pt-[50px] mr-[150px]">
              Just like humans with unique fingerprints, no two Siberian tigers
              have the same striped fur pattern. The striped pattern is unique
              for every tiger.
              <br />
              <br />
              Although the ground color of the pelage is generally pale, it
              varies in length, form and sometimes in color from one individual
              to the other.
              <br />
              <br />
              In general, the fur is moderately thick, sparse and coarse
              compared to other felids living in Russia.
            </p>

            <Image
              className="rounded-[10px] h-[400px] w-[650px] "
              src={two_tigers}
              alt="tiger"
            />
          </div>
        </div>

        {/* Text 4 */}
        <div className=" bg-[#A9A181]  border-b-[2px] border-white pb-[100px]">
          <p className="font-[Pacifico] text-[35px] mt-[100px] px-14">
            eats up to 27kg when hungry
          </p>
          <div className="flex flex-row  mt-[30px] px-14 ">
            <Image
              className="rounded-[10px] h-[400px] w-[650px] "
              src={tiger_eating}
              alt="tiger"
            />
            <p className="text-left text-[20px] font-averia pt-[50px] ml-[150px]">
              Although the Siberian tiger eats an average of 8-10 kg of meat in
              one sitting, it can consume up to 27kg when hungry.
              <br />
              <br />
              They are not always successful on their hunt mission. It can take
              20-30 min stalking its prey until it is closer enough to pounce on
              it. It uses its striped fur to camouflage and hides from its
              targeted prey.
              <br />
              <br />
              When successful, the tiger drags the captured prey to a secluded
              place before feasting on it. They mainly feed on hoofed animals
              such as bears, deer, boars, elk, fish, rabbits and hares.
            </p>
          </div>
        </div>

        {/* Text 5 */}
        <div className=" bg-[#A9A181]  border-b-[2px] border-white pb-[100px]">
          <p className="font-[Pacifico] text-[35px] mt-[100px] px-14">
            no two tigers have the same striped pattern
          </p>
          <div className="flex flex-row  mt-[30px] px-14 ">
            <p className="text-left text-[20px] font-averia pt-[50px] mr-[150px]">
              The Siberian tiger’s night vision is 6 times stronger than humans,
              meaning that it can go about its activities at night with little
              difficulties.
              <br />
              <br />
              The tiger is also an excellent swimmer and rarely move away from
              water sources. Its ability to swim makes it prey on fish.
              <br />
              <br />
              The Siberian tiger can attain a speed of 60 km/h and can jump up
              to a height of 5m and a length of 10m.
            </p>

            <Image
              className="rounded-[10px] h-[400px] w-[650px] "
              src={tiger_in_water}
              alt="tiger"
            />
          </div>
        </div>


      {/* Footer */}
      <div className=" relative bg-[url('../images/tiger_footer_article.jpg')]  w-full h-[1200px] bg-no-repeat bg-center bg-cover font-averia  pt-[150px] text-[25px] px-14 text-[#C1C2AD] ">
       
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

export default tiger_article;
