import Image from "next/image";
import React from "react";
import mylogo from "../../images/logo.png";

const Logo = () => {
  return <Image src={mylogo} alt="logo" width={100} height={75} />;
};

export default Logo;
