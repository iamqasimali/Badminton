import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo_sm.png";

const Header = () => {
  return (
    <div className="bg-darkgreen w-full h-[100px]">
      <div className="w-full h-full grid grid-cols-4 sm:grid-cols-10 gap-2 ">
        <Link
          to="/"
          className="col-span-2 flex flex-flex-wrap justify-center items-center"
        >
          <img src={Logo} width="128" height="40px" />
        </Link>

        <div className="sm:col-span-6 hidden sm:flex justify-around items-center">
          <Link
            to="/"
            className="text-white font-dm-sans text-[16px] font-[600px] leading-[22.08px] text-center"
          >
            Home
          </Link>
          <Link className="text-white font-dm-sans text-[16px] font-[600px] leading-[22.08px] text-center">
            About
          </Link>
          <Link className="text-white font-dm-sans text-[16px] font-[600px] leading-[22.08px] text-center">
            Service
          </Link>
          <Link
            to="/faqs"
            className="text-white font-dm-sans text-[16px] font-[600px] leading-[22.08px] text-center"
          >
            FAQ's
          </Link>
          <Link
            to="/privacy-policy"
            className="text-white font-dm-sans text-[16px] font-[600px] leading-[22.08px] text-center"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-and-services"
            className="text-white font-dm-sans text-[16px] font-[600px] leading-[22.08px] text-center"
          >
            Terms of Use
          </Link>
          <Link className="text-white font-dm-sans text-[16px] font-[600px] leading-[22.08px] text-center">
            Contact
          </Link>
        </div>
        <div className="col-span-2 col-start-4 sm:col-start-9 flex justify-center items-center ">
          <Link to="/welcome" className="hidden sm:block bg-darkgreen rounded-[28px] border-2 border-white py-[13px] px-[24px] text-white text-[16px] font-dm-sans font-[700px] leading-[22.08px] text-center ">
            Sign up Now
          </Link>
          <div className="block sm:hidden">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.33301 9.33337H9.33301M26.6663 9.33337H14.6663"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M26.667 22.6666H22.667M5.33366 22.6666L17.3337 22.6666"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M5.33301 16H9.33301L26.6663 16"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
