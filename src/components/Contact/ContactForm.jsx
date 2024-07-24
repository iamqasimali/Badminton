import React from "react";

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center my-20 ">
      <div className="flex flex-col gap-5 items-center justify-center">
        <h1 className="text-[44px] font-[700] leading-[44.64px] font-dm-sans text-darkgreen text-center">
          Please fill out the form below
        </h1>
        <div className="flex justify-evenly items-center gap-2">
          <input
            name="Name"
            type="text"
            className="w-[260px] text-gray-500 font-dm-sans text-[16px] font-[400] leading-[22.08px] border-2 border-gray-100 rounded-xl p-2"
            placeholder="Full name *"
            required
          />
          <input
            name="email"
            type="text"
            className="w-[260px] text-gray-500 font-dm-sans text-[16px] font-[400] leading-[22.08px] border-2 border-gray-100 rounded-xl p-2"
            placeholder="Email Address *"
            required
          />
          <input
            name="name"
            type="text"
            className="w-[260px] text-gray-500 font-dm-sans text-[16px] font-[400] leading-[22.08px] border-2 border-gray-100 rounded-xl p-2"
            placeholder="Phone Number"
            required
          />
        </div>
        <div className="w-full">
          <textarea
            id="txtid"
            name="details"
            rows="8"
            cols="50"
            maxlength="200"
            className="w-full text-gray-500 font-dm-sans text-[16px] font-[400] leading-[22.08px] border-2 border-gray-100 rounded-2xl p-4"
            placeholder="How can we help? . *"
            required
          />
        </div>
        <button className="text-white text-[18px] bg-darkgreen font-dm-sans font-[700] leading-[24.84px] px-4 py-2 rounded-full">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
