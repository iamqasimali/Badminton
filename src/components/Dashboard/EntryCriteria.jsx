import React from "react";
import PlayerCriteria from "../../assets/images/Dashboard/player_criteria.png";
import Affordable from "../../assets/images/svgs/affordddable.svg";
import MobilePhone from "../../assets/images/svgs/phone.svg";
import PlayerFriendly from "../../assets/images/svgs/palyer_friendly.svg";
import Maintenance from "../../assets/images/svgs/maintenance.svg";
import EasyToUse from "../../assets/images/svgs/easy_to_use.svg";
import AccessAll from "../../assets/images/svgs/access_all.svg";

const EntryCriteria = () => {
  return (
    <div className="w-full h-[70%] flex justify-between items-center bg-radial-gradient mb-5">
      <div className="w-1/2 h-full flex justify-center items-center">
        <div className="w-[68%]">
          <p className="text-darkgreen font-dm-sans text-[36px] font-[400] leading-[44.64px] text-left">
            Lorem ipsum dolor sit amet consectetur. Natok Premium ID when
            sitting.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="col-span-1 flex justify-start items-center gap-4">
              <img src={Affordable} />
              <p className="text-darkgreen font-dm-sans text-[20px] font-[400] leading-5">
                Affordable price
              </p>
            </div>

            <div className="col-span-1 flex justify-start items-center gap-4">
              <img src={MobilePhone} />

              <p className="text-darkgreen font-dm-sans text-[20px] font-[400] leading-5">
                IOS & Android Apps
              </p>
            </div>
            <div className="col-span-1 flex justify-start items-center gap-4">
              <img src={PlayerFriendly} />
              <p className="text-darkgreen font-dm-sans text-[20px] font-[400] leading-5">
                Player Friendly
              </p>
            </div>
            <div className="col-span-1 flex justify-start items-center gap-4">
              <img src={Maintenance} />
              <p className="text-darkgreen font-dm-sans text-[20px] font-[400] leading-5">
                Maintenance
              </p>
            </div>

            <div className="col-span-1 flex justify-start items-center gap-4">
              <img src={EasyToUse} />
              <p className="text-darkgreen font-dm-sans text-[20px] font-[400] leading-5">
                Easy to Use
              </p>
            </div>

            <div className="col-span-1 flex justify-start items-center gap-4">
              <img src={EasyToUse} />
              <p className="text-darkgreen font-dm-sans text-[20px] font-[400] leading-5">
                Access All Features
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full flex justify-end items-center my-10 py-7   ">
        <img src={PlayerCriteria} alt="" />
      </div>
    </div>
  );
};

export default EntryCriteria;
