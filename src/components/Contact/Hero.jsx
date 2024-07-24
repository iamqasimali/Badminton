import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[387px] bg-green grid grid-cols-6 items-center">
      <div className="col-span-3 col-start-2">
        <h1 className="font-dm-sans text-[64px] font-[700] leading-[71.68px] text-darkgreen">
          inquiry!
        </h1>
        <p className="font-dm-sans text-darkgreen font-[700] text-[16px] leading-[22.08px] py-2">
          Lorem ipsum dolor sit amet consectetur. Magnis placerat eros id
          adipiscing non. Egestas pellentesque sed aliquam dolor quis.
        </p>
      </div>
    </div>
  );
};

export default Hero;
