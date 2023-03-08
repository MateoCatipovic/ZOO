import React from "react";
import Image from "next/image";

interface ImageCardProps {
  image: any;
  name: string;
  date: string;
}

const Event_card = ({ image, name, date }: ImageCardProps) => {
  return (
    
    <div className=" w-[400px] h-[500px] rounded-[10px]  overflow-hidden">
      <Image className="h-[250px]" src={image} alt="slika" /> 
      <p className="mt-5">{name}</p>
      <p>{date}</p>

      <button className=" mt-[50px] bg-red-600 rounded-[5px] px-4 py-2  drop-shadow-4l">Buy tickets</button>
    </div>
  );
};

export default Event_card;
