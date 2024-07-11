import React from "react";
import Logo from "../../assets/images/logo.png";
import { useState } from "react";
import BlackLogo from "../../assets/images/BlackLogo.png";

const SelectRole = () => {
  const [role, setRole] = useState("");

  const handleClick = (id) => {
    setRole(id);
  };

  return (
    <div className="w-screen h-screen  bg-custom bg-cover bg-center bg-no-repeat">
      <div className="w-full h-full flex">
        <div className="bg-green w-1/2 h-full hidden sm:flex items-center justify-center">
          <img src={Logo} />
        </div>
        <div className="bg-custom sm:bg-custom-lg bg-cover bg-center bg-no-repeat relative w-full sm:w-1/2 h-full flex items-center justify-center ">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="mb-16">
              <p className=" text-black font-dm-sans sm:text-[32px] sm:font-[700px] sm:leading-[41.66px] text-[20px] leading-[26.04px] text-center">
                Welcome to the badminton app, John
              </p>
              <p className=" text-gray-500 font-dm-sans sm:text-[20px] font-[400px] sm:leading-[26.04px] text-[15px] leading-[26.04px] text-center my-2">
                Choose Your Role
              </p>
            </div>

            <div className="w-full flex justify-between items-center">
              <div
                className="w-full flex flex-col justify-center items-center cursor-pointer"
                onClick={() => handleClick("player")}
              >
                <div
                  className={`${
                    role == "player" ? "outline  outline-green" : ""
                  } sm:w-[175px] w-[120px] sm:h-[175px] h-[120px] bg-gray-100 rounded-full border-5 flex justify-center items-center`}
                >
                  <svg
                    width="111"
                    height="125"
                    viewBox="0 0 111 125"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_1_8365)">
                      <path
                        d="M55.5 61.7346C65.8658 61.7346 74.2693 53.5114 74.2693 43.3674C74.2693 33.2233 65.8658 25 55.5 25C45.134 25 36.7307 33.2233 36.7307 43.3674C36.7307 53.5114 45.134 61.7346 55.5 61.7346Z"
                        fill={` ${role == "player" ? "#A1D800" : "white" }`}
                      />
                      <path
                        d="M65.2756 69.3882H45.7244C34.3846 69.3882 25 78.5723 25 89.6689C25 92.3476 26.1731 94.6437 28.5192 95.7916C32.0384 97.7048 39.859 100 55.5 100C71.1412 100 78.9614 97.7048 82.4807 95.7916C84.4357 94.6437 86 92.3476 86 89.6689C86 78.1894 76.6155 69.3882 65.2756 69.3882Z"
                        fill={` ${role == "player" ? "#A1D800" : "white" }`}
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_1_8365"
                        x="0"
                        y="0"
                        width="111"
                        height="125"
                        filterUnit
                        s="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="12.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.647059 0 0 0 0 0.913725 0 0 0 0 0.380392 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1_8365"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1_8365"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <p className="font-dm-sans text-[20px] font-[700px] leading-[26.04px] text-center my-2">
                  Player
                </p>
              </div>

              <div className="w-full flex flex-col justify-center items-center cursor-pointer"
               onClick={() => handleClick("organizer")}
               >
                <div className={`${
                    role == "organizer" ? "outline  outline-green" : ""
                  } sm:w-[175px] w-[120px] sm:h-[175px] h-[120px] bg-gray-100 rounded-full border-5 flex justify-center items-center`}>
                  <svg
                    width="111"
                    height="125"
                    viewBox="0 0 111 125"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_1_8365)">
                      <path
                        d="M55.5 61.7346C65.8658 61.7346 74.2693 53.5114 74.2693 43.3674C74.2693 33.2233 65.8658 25 55.5 25C45.134 25 36.7307 33.2233 36.7307 43.3674C36.7307 53.5114 45.134 61.7346 55.5 61.7346Z"
                        
                        fill={` ${role == "organizer" ? "#A1D800" : "white" }`}
                      />
                      <path
                        d="M65.2756 69.3882H45.7244C34.3846 69.3882 25 78.5723 25 89.6689C25 92.3476 26.1731 94.6437 28.5192 95.7916C32.0384 97.7048 39.859 100 55.5 100C71.1412 100 78.9614 97.7048 82.4807 95.7916C84.4357 94.6437 86 92.3476 86 89.6689C86 78.1894 76.6155 69.3882 65.2756 69.3882Z"
                        fill={` ${role == "organizer" ? "#A1D800" : "white" }`}
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_1_8365"
                        x="0"
                        y="0"
                        width="111"
                        height="125"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="12.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.647059 0 0 0 0 0.913725 0 0 0 0 0.380392 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1_8365"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1_8365"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <p className="font-dm-sans text-[20px] font-[700px] leading-[26.04px] text-center my-2">
                  Tournament Organizer
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-full flex flex-col justify-center items-center cursor-pointer"
              onClick={() => handleClick("both")}
              >
                <div className={`${
                    role == "both" ? "outline outline-green" : ""
                  } sm:w-[175px] w-[120px] sm:h-[175px] h-[120px] bg-gray-100 rounded-full border-5 flex justify-center items-center`}>
                  <svg
                    width="111"
                    height="125"
                    viewBox="0 0 111 125"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_1_8365)">
                      <path
                        d="M55.5 61.7346C65.8658 61.7346 74.2693 53.5114 74.2693 43.3674C74.2693 33.2233 65.8658 25 55.5 25C45.134 25 36.7307 33.2233 36.7307 43.3674C36.7307 53.5114 45.134 61.7346 55.5 61.7346Z"
                        fill={` ${role == "both" ? "#A1D800" : "white" }`}
                      />
                      <path
                        d="M65.2756 69.3882H45.7244C34.3846 69.3882 25 78.5723 25 89.6689C25 92.3476 26.1731 94.6437 28.5192 95.7916C32.0384 97.7048 39.859 100 55.5 100C71.1412 100 78.9614 97.7048 82.4807 95.7916C84.4357 94.6437 86 92.3476 86 89.6689C86 78.1894 76.6155 69.3882 65.2756 69.3882Z"
                        fill={` ${role == "both" ? "#A1D800" : "white" }`}
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_1_8365"
                        x="0"
                        y="0"
                        width="111"
                        height="125"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="12.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.647059 0 0 0 0 0.913725 0 0 0 0 0.380392 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1_8365"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1_8365"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <p className="font-dm-sans text-[20px] font-[700px] leading-[26.04px] text-center my-2">
                  Both Sides
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectRole;
