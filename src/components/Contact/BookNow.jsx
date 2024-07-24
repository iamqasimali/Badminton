import React from "react";
import BookNowImg from "../../assets/images/Tournament/booknow.png";

const BookNow = () => {
  return (
    <>
      <div className="mx-24 flex justify-evenly items-center my-36">
        <div className="w-[550px]">
          <h1 className="text-darkgreen font-dm-sans font-[700] text-[36px] leading-[44.64px]">
            Book meetings like Calendly
          </h1>
          <p className="text-gray-400 text-[16px] font-dm-sans font-[400] leading-[22.08px] my-3">
            Lorem ipsum dolor sit amet consectetur.faretra dignissim brandit
            kiss org. . Proin mattis Phasellus Phasellus facilis vulputate
            dictumst non-consequat. . Fringilla of elite bellproinhendrerit
            adipisingeget.
          </p>
          <button className=" bg-darkgreen text-white px-5 py-3 my-7 rounded-full">
            Book Now
          </button>
        </div>
        <div className="">
          <img src={BookNowImg} width="420" height="400" alt="Book now" />
        </div>
      </div>
    </>
  );
};

export default BookNow;
