import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full h-[387px] bg-green pl-24 pt-8 flex justify-between items-start flex-wrap">
      <div className="flex-grow-1 w-[65%] h-full basis-[200]">
        <div className="w-[832px]">
          <div
            className="flex justify-start gap-2 items-center
        font-dm-sans text-darkgreen text-[28px] font-[700] leading-[34.72px]
        "
          >
            <p>12.12.12</p>
            <p>|</p>
            <p>Tokyo / Hachioji City</p>
          </div>

          <p className="text-darkgreen font-dm-sans text-[42px] font-[700] leading-[52.08px]">
            2024 Crossminton Hachioji Cup - Singles
          </p>
          <p className="text-darkgreen font-dm-sans text-[42px] font-[700] leading-[52.08px]">
            Tournament, Summer, Top League
          </p>
          <div className="w-full mt-20 flex justify-start gap-2 items-center flex-wrap">
            <p
              className="font-dm-sans text-darkgreen text-[16px] font-[500] leading-[19.84px]
          bg-white rounded-md p-2   "
            >
              Individual match
            </p>
            <p
              className="font-dm-sans text-darkgreen text-[16px] font-[500] leading-[19.84px]
          bg-white rounded-md p-2   "
            >
              Open
            </p>
            <p
              className="font-dm-sans text-darkgreen text-[16px] font-[500] leading-[19.84px]
          bg-white rounded-md p-2"
            >
              Entries are being accepted from Monday, May 12, 2024 to Friday,
              July 12, 2024
            </p>
            <p
              className="font-dm-sans text-darkgreen text-[16px] font-[500] leading-[19.84px]
          bg-white rounded-md p-2"
            >
              Guaranteed 2+ games
            </p>
            <p
              className="font-dm-sans text-darkgreen text-[16px] font-[500] leading-[19.84px]
          bg-white rounded-md p-2"
            >
              Beginner classes available
            </p>
          </div>
        </div>
      </div>

      <div className="w-[35%] flex-grow-1  h-full basis-[200]">
        <div className="flex flex-col gap-3 justify-start items-center">
          <p
            className="font-dm-sans text-darkgreen text-[16px] font-[500] leading-[19.84px]
          bg-white rounded-md p-2"
          >
            100 people like this
          </p>
          <Link className="bg-white text-darkgreen font-dm-sans text-[24px] font-[700] leading-[29.76px] p-4 rounded-md">
            Enter Now
          </Link>
        </div>
        
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
