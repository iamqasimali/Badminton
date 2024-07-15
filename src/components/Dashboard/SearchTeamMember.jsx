import React from "react";
import { Link } from "react-router-dom";

const SearchTeamMember = () => {
  return (
    <div className="w-[100%] h-[40%] bg-light-green-transparent">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <Link className="text-darkgreen font-dm-sans text-[44px] font-[700] leading-[57.29px] underline text-center cursor-pointer ">
          Team member search, pair matching
        </Link>

        <Link className="bg-darkgreen text-white font-dm-sans text-[24px] font-[700] leading-[31.25px] text-center rounded-full p-5 mt-9">
          Go to Team Member Search
        </Link>

        <div></div>
      </div>
    </div>
  );
};

export default SearchTeamMember;