import Image from "next/image";
import React from "react";
import mylogo from "../../images/logo.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={mylogo} alt="logo" width={100} height={75} />
    </Link>
  );
};

export default Logo;
