import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import Logo from "../../assets/images/logo.png";

const Welcome = ({}) => {
  return (
    <div>
      <div className="w-screen h-screen hidden sm:flex">
        <div className="bg-green w-1/2 h-full flex items-center justify-center">
          <img src={Logo} />
        </div>
        <div className="sm:bg-white w-1/2 h-full flex flex-col items-center justify-center ">
          <p className="text-3xl font-sans font-thin text-black text-center">
            Step Into Reality
          </p>
          <p className="text-3xl font-sans font-thin text-black text-center">
            Badminton App
          </p>

          <Link to="/signup" className="w-[335px] bg-green text-white text-xl font-sans font-thin rounded-md text-center px-3 py-2 mt-4 mb-4 drop-shadow-sm cursor-pointer shadow-custom">
            Create An Account
          </Link>

          <Link to="/signin" className="w-[335px] bg-white text-green border-2 border-green font-thin text-center  text-xl font-sans rounded-md px-3 py-2 cursor-pointer">
            Sign in
          </Link>
        </div>
      </div>

      {/* MobileScreen */}
      <div className="h-screen w-screen bg-green flex flex-col  sm:hidden">
        <div className="w-full h-3/4 flex items-center justify-center ">
          <img src={Logo} className="w-[275px] h-[60px]" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-sans font-thin text-sm leading-normal text-center">
            Welcome
          </p>
          <p className="font-sans font-thin text-center text-3xl">
            Step into reality
          </p>
          <p className="font-sans font-thin text-center text-3xl">
            Badminton App
          </p>

          <button className="rounded-md bg-white text-green text-center w-4/5 h-[44px] my-2 cursor-pointer shadow-custom">
            Create An Account
          </button>
          <button className="rounded-md  text-black border-black border-2 text-center w-4/5 h-[44px] my-2 cursor-pointer shadow-custom">
            Signin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
