import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div
      className="bg-[#5F6050] text-[#C1C2AD] rounded-[5px] placeholder-primary  w-[800px]"
      placeholder="  search..."
    >
      &nbsp;
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      &nbsp;&nbsp;
      <input
        className="bg-[#5F6050] text-[#C1C2AD] rounded-[5px] placeholder-primary"
        placeholder="  search..."
      ></input>
    </div>
  );
};

export default Search;
