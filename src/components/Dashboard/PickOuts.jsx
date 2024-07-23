import React from "react";
import { Link } from "react-router-dom";
import T1 from "../../assets/images/Tournament/t1.png";
import T2 from "../../assets/images/Tournament/t2.png";
import T3 from "../../assets/images/Tournament/t3.png";

const TournamentData = [
  {
    title: "2024 Shimane Club Cup Badminton New Year's Izumo Tournament",
    image: T1,
  },
  {
    title: "2024 Shimane Club Cup Badminton New Year's Izumo Tournament",
    image: T2,
  },
  {
    title: "2024 Shimane Club Cup Badminton New Year's Izumo Tournament",
    image: T3,
  },
];
const PickOuts = () => {
  return (
    <div class="mx-24 p-8">
      <div className="my-6">
        <p className="text-green text-[16px] font-dm-sans font-[700] leading-[20px]">
        Pick up competition
        </p>
        <div>
          <div className="flex justify-between items-center">
            <p className="text-darkgreen text-[34px] font-dm-sans font-[700] leading-[34px] py-2">
            Pick Out
            </p>
            <p className="font-dm-sans text-[14px] text-darkgreen font-[700] leading-[25.62px] border-b-2 border-darkgreen cursor-pointer">
              See all
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap w-full gap-5 ">
        {TournamentData.map((t) => {
          return (
            <div className="w-[350px] h-[510px] flex-grow-1 basis-[200]">
              <img src={t.image} className="" width={"350px"} height="205" />
              <div className="w-[75%] py-2">
                <Link
                  to="/tournament-details"
                  className="font-dm-sans text-darkgreen text-[18.67px] font-[700] leading-[26.13px] py-2"
                >
                  {t.title}
                </Link>
              </div>

              <div className="w-[80%] my-7">
                <hr />
              </div>
              <div className="flex justify-start items-center gap-3">
                <p className="text-green font-dm-sans text-[14px] font-[500] leading-[24.89px]">
                  Dates
                </p>
                <p className="text-darkgreen font-dm-sans text-[14px] font-[500] leading-[24.89px]">
                  Sunday, January 21, 2024
                </p>
              </div>
              <div className="flex justify-start items-center gap-3">
                <p className="text-green font-dm-sans text-[14px] font-[500] leading-[24.89px]">
                  Meeting place
                </p>
                <p className="text-darkgreen font-dm-sans text-[14px] font-[500] leading-[24.89px]">
                  Hirata Gymnasium
                </p>
              </div>
              <div className="flex justify-start items-center gap-3">
                <p className="text-green font-dm-sans text-[14px] font-[500] leading-[24.89px]">
                  Tournament Classification
                </p>
                <p className="text-darkgreen font-dm-sans text-[14px] font-[500] leading-[24.89px]">
                  Team Competition (Open)
                </p>
              </div>
              <div className="flex justify-start items-center gap-3 my-3">
                <p className="text-darkgreen font-dm-sans text-[14px] font-[500] leading-[24.89px] border-2 border-gray-200 rounded-md px-3 py-1 ">
                  Deadline: 10 days left
                </p>
                <p className="text-darkgreen font-dm-sans text-[14px] font-[500] leading-[24.89px] border-2 border-gray-200 rounded-md px-3 py-1">
                  Available: Extra room
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-[15%] float justify-start items-center cursor-pointer">
        <p className=" bg-darkgreen text-white font-dm-sans text-[22px] font-[700] leading-[21px] text-center rounded-full py-5 px-3 ">
          See all
        </p>
      </div>
    </div>
  );
  
};

export default PickOuts;
