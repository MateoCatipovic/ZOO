import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div
      className="flex flex-row items-center bg-[#5F6050] text-[#C1C2AD] rounded-[5px] pl-[10px] placeholder-primary  "
     
    >
      {/* &nbsp; */}
      <FontAwesomeIcon icon={faMagnifyingGlass} />
     {/*  &nbsp;&nbsp; */}
      <input
        className="bg-[#5F6050] text-[#C1C2AD] rounded-[5px] placeholder-primary flex-1 ml-[10px]  "
        placeholder="  search..."
      ></input>
    </div>
  );
};

export default Search;
