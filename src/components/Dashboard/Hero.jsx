import React from "react";
import Shuttle from "../../assets/images/Shuttle.png";
import Sponser_1 from "../../assets/images/Layer_1.png";
import Sponser_2 from "../../assets/images/layer.png";

import Sponser_3 from "../../assets/images/Frame.png";
import Sponser_4 from "../../assets/images/Frame_1.png";
import ToggleComponent from "./ToggleComponent";

const Hero = () => {
  return (
    <>
      <div className="w-full bg-green">
        <div className="w-full flex justify-evenly items-center py-7">
          <div className="w-[35%]">
            <div className="">
              <p className="max-w-[288px] text-darkgreen font-dm-sans text-[16px] font-[700] leading-[22.08px] border-2 rounded-[32px] border-white py-[6px] px-[9px] mb-4 text-center" >
                Limitless control on one platform
              </p>
              <h1 className="text-darkgreen text-[64px] font-[700] leading-[71.68px] font-dm-sans">
                The best Badminton app.
              </h1>
              <p className="py-4 text-darkgreen ">
                Lorem ipsum dolor sit amet consectetur.Faletra dignissim brandit
                kiss org. Proin mattis Phasellus Phasellus facilis vulputate
                dictumst non-consequat. Fringilla of elite bellproinhendrerit
                adipisingeget.
              </p>

              <ToggleComponent />

              <p className="text-darkgreen text-[16px] font-dm-sans font-[700] leading-[16.8px] mt-10 ">
                Approved by
              </p>

              <div className="flex justify-between items-center flex-wrap gap-2 mt-3 ">
                <img src={Sponser_1} />
                <img src={Sponser_2} />
                <img src={Sponser_3} />
                <img src={Sponser_4} />
              </div>
            </div>
          </div>
          <div className="w-[40%]">
            <img className="float-right" src={Shuttle} width="70%" height="70%" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
