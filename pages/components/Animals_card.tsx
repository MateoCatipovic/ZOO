import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

interface ImageCardProps {
  image: any;
  name: string;
}

const Animals_card = ({ image, name }: ImageCardProps) => {
  return (
    <div className=" relative bg-center bg-cover  text-[35px] w-[400px] h-[500px]  drop-shadow-4l">
      <Image className="h-full rounded-[4px]" src={image} alt="slika" />
      <p className="absolute bottom-[94px] left-[25%] right-[25%]  ">{name}</p>
      
        <button className=" absolute bottom-[34px] left-[25%] right-[25%] text-[20px] bg-[#978853]/75 rounded-[5px] px-2 py-2   drop-shadow-4l">
          LEARN MORE <FontAwesomeIcon icon={faAnglesRight} />
        </button>
     
    </div>
  );
};

export default Animals_card;
