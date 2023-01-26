
import Image from "next/image";
import React from "react";

interface ImageCardProps {
  image: any;
  name: string;
  species: string;
}

const Card = ({ image, name, species }: ImageCardProps) => {
  return (
    <div className=" relative bg-center bg-cover  text-[35px] w-[400px] h-[500px]  drop-shadow-[4px_4px_4px_rgba(0,0,0,0.5)]">
      <Image className="h-full rounded-[4px]" src={image} alt="slika"/>
      <p className="absolute bottom-[74px] left-[10%] right-[10%]  ">{name}</p>
      <p className="absolute bottom-[34px] left-[10%] right-[10%]  text-[22px] ">{species}</p>
    </div>
  );
};

export default Card;
