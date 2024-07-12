import React from "react";
import Logo from "../../assets/images/logo.png";
import BlackLogo from "../../assets/images/BlackLogo.png";
import { Link } from "react-router-dom";

const PlayerInfo = () => {
  return (
    <div className="w-screen h-screen bg-custom bg-cover bg-center bg-no-repeat relative">
      <div className="w-full h-full flex">
        {/* Left side */}
        <div className="bg-green w-1/2 h-full hidden sm:flex items-center justify-center">
          <img src={Logo} />
        </div>
        {/* Right side */}
        <div className="bg-white w-full sm:w-1/2 h-full sm:flex sm:flex-col sm:items-center sm:justify-center ">
          <div className="mb-3 text-center">
            <p className="text-black font-dm-sans text-[20px] sm:text-[32px] font-bold leading-[41.66px]">
              Next, Let's Find Out
            </p>
            <p className="text-xs text-gray-400 font-dm-sans text-[15px] font-normal leading-[18.23px]">
              Creating a personalized profile allows you to tailor it to your
              customers' preferences
            </p>
          </div>
          <div>
            <form className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-4">
                <input
                  type="text"
                  className="bg-gray-50 rounded-md text-lg font-dm-sans px-10 outline-green py-2 h-[50px] my-2 border"
                  placeholder="Real Name"
                />
                <input
                  type="text"
                  className="bg-gray-50 rounded-md text-lg font-dm-sans px-10 outline-green py-2 h-[50px] my-2 border"
                  placeholder="Pet Name"
                />
                <input
                  type="text"
                  className="bg-gray-50 rounded-md text-lg font-dm-sans px-10 outline-green py-2 h-[50px] my-2 border"
                  placeholder="Telephone Number"
                />
                <input
                  type="text"
                  className="bg-gray-50 rounded-md text-lg font-dm-sans px-10 outline-green py-2 h-[50px] my-2 border"
                  placeholder="Prefecture"
                />
                <input
                  type="text"
                  className="bg-gray-50 rounded-md text-lg font-dm-sans px-10 outline-green py-2 h-[50px] my-2 border"
                  placeholder="City/Town"
                />

                <input
                  type="text"
                  className="bg-gray-50 rounded-md text-lg font-dm-sans px-10 outline-green py-2 h-[50px] my-2 border"
                  placeholder="Gender"
                />

                <input
                  type="text"
                  className="bg-gray-50 rounded-md text-lg font-dm-sans px-10 outline-green py-2 h-[50px] my-2 border"
                  placeholder="Date of Birth"
                />
                <input
                  type="text"
                  className="bg-gray-50 rounded-md text-lg font-dm-sans px-10 outline-green py-2 h-[50px] my-2 border"
                  placeholder="Years of Experience (optional)"
                />

                <input
                  type="text"
                  className="bg-gray-50 rounded-md text-lg font-dm-sans px-10 outline-green py-2 h-[50px] my-2 border" 
                  placeholder="My Racket (optional)"
                />
              </div>
              <div className="grid grid-cols-4 m-2">
                <Link
                  to="/congrats"
                  className="rounded-md  bg-green  text-darkgreen sm:text- text-center col-span-4 sm:col-span-2 sm:col-start-3  h-[54px] my-2 cursor-pointer shadow-custom mt-12 flex justify-between items-center p-3"
                >
                  <p>Continue</p>
                  <svg
                    className="block sm:hidden"
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
                  <svg
                    className="sm:block hidden"
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};  

export default PlayerInfo;
