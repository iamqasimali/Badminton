import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import CongratsLG from "../../assets/images/congrats_lg.png";
import CongratsSM from "../../assets/images/GreenCheck.png";

import Logo from "../../assets/images/logo.png";

const Congrats = ({}) => {
  return (
    <div>
      <div className="w-screen h-screen hidden sm:flex">
        <div className="bg-green w-1/2 h-full flex items-center justify-center">
          <img src={Logo} />
        </div>
        <div className="sm:bg-white w-1/2 h-full flex flex-col items-center justify-center ">
          <img className="my-4" src={CongratsLG} width="275" height="275" />
          <p className="text-[32px] font-sans font-[700px] leading-[40px] text-black text-center ">
            Congratulations
          </p>
          <p className="text-[32px] font-sans font-[700px] leading-[40px] text-black text-center">
            Qasim Ali Zahid
          </p>

          <p className="text-[24px] font-sans font-[400px] leading-[31.25px] text-gray-500   text-center">
            Your profile has been created.
          </p>

          <Link
            to="/selectRole"
            className="w-[335px] bg-green text-white text-xl font-sans font-thin rounded-md text-center px-3 py-2 mt-4 mb-4 drop-shadow-sm cursor-pointer shadow-custom flex justify-between items-center "
          >
            <p>Continue</p>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 15L15 8L8 1"
                stroke="white"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 8.00024L15 8.00024"
                stroke="white"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* MobileScreen */}
      <div className="h-screen w-screen bg-green flex flex-col  sm:hidden">
        <div className="w-full h-3/4 flex flex-col items-center justify-center ">
          <img src={CongratsSM} className="w-[125px] h-[125 px]" />
          <p className="text-[24px] font-sans font-[700px] leading-[40px] text-black text-center ">
            Congratulations
          </p>
          <p className="text-[24px] font-sans font-[700px] leading-[40px] text-black text-center">
            Qasim Ali Zahid
          </p>

          <p className="text-[15px  ] font-sans font-[400px] leading-[31.25px] text-gray-500   text-center">
            Your profile has been created.
          </p>
        </div>
        <div className="flex flex-wrap   justify-center items-center">
          <Link
            to="/selectRole"
            className="rounded-md bg-white text-darkgreen text-center w-4/5 h-[44px] my-2 cursor-pointer shadow-custom mt-12 flex justify-between items-center p-3"
          >
            <p>Continue</p>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 15L15 8L8 1"
                stroke="#387000"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 8.00024L15 8.00024"
                stroke="#387000"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Congrats;
