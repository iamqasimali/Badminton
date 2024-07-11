import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const AccountCreated = () => {
  return (
    <div>
      <div className="w-screen h-screen hidden sm:flex">
        <div className="bg-green w-1/2 h-full flex items-center justify-center">
          <img src={Logo} />
        </div>
        <div className="bg-white w-1/2 h-full flex items-center justify-center ">
          <div className="flex flex-col justify-center items-center">
            <p className="text-[20px] font-sans font-thin text-gray-400 text-center uppercase my-3">
              Successful creation of an Account
            </p>
            <p className="text-[40px] font-sans font-bold leading-[52.08px] text-black text-center y-4">
              You Guys Are Ready!   
            </p>
            <Link to="/selectRole" className="w-[335px] bg-green text-white text-xl font-sans font-thin rounded-md text-center px-3 py-2 mt-4 mb-4 drop-shadow-sm cursor-pointer shadow-custom flex justify-between items-center ">
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
      </div>

      {/* MobileScreen */}
      <div className="h-screen w-screen bg-green flex flex-col  sm:hidden">
        <div className="w-full h-3/4 flex items-center justify-center ">
          <img src={Logo} className="w-[275px] h-[60px]" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-sans font-thin text-sm leading-normal uppercase my-2">
            Successful creation of an Account
          </p>
          <p className="font-sans font-bold text-center text-3xl">
            You Guys Are Ready!
          </p>

          <Link to="/selectRole" className="rounded-md bg-white text-darkgreen text-center w-4/5 h-[44px] my-2 cursor-pointer shadow-custom mt-12 flex justify-between items-center p-3">
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

export default AccountCreated;
