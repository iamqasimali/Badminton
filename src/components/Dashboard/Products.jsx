import React from "react";
import Racket from "../../assets/images/svgs/racket.svg";

const Products = () => {
  return (
    <div className="w-full mt-[15%]">
      <p className="text-darkgreen font-dm-sans text-[44px] font-[700] leading-[57.29px] text-center">
        Impressive new products
      </p>
      <div className="flex gap-5 justify-evenly items-center py-4">
        <div className=" w-[369.88px] h-[306px] py-[30px] gap-[15px] rounded-tl-[20px] flex flex-col items-center justify-center bg-lime-50">
          <img src={Racket} />
          <p className="text-darkgreen font-dm-sans text-[21.92px] font-[700] leading-[28.49px]  text-center ">
            Store Name
          </p>
          <p className="text-green font-dm-sans text-[21.92px] font-[400] leading-[28.49px] text-center">
            Item Name
          </p>
        </div>
        <div className=" w-[369.88px] h-[306px] py-[30px] gap-[15px] rounded-tl-[20px] flex flex-col items-center justify-center bg-lime-50">
          <img src={Racket} />
          <p className="text-darkgreen font-dm-sans text-[21.92px] font-[700] leading-[28.49px]  text-center ">
            Store Name
          </p>
          <p className="text-green font-dm-sans text-[21.92px] font-[400] leading-[28.49px] text-center">
            Item Name
          </p>
        </div>
        <div className=" w-[369.88px] h-[306px] py-[30px] gap-[15px] rounded-tl-[20px] flex flex-col items-center justify-center bg-lime-50">
          <img src={Racket} />
          <p className="text-darkgreen font-dm-sans text-[21.92px] font-[700] leading-[28.49px]  text-center ">
            Store Name
          </p>
          <p className="text-green font-dm-sans text-[21.92px] font-[400] leading-[28.49px] text-center">
            Item Name
          </p>
        </div>
      </div>
      <div className="flex gap-5 justify-evenly items-center py-4">
        <div className=" w-[369.88px] h-[306px] py-[30px] gap-[15px] rounded-tl-[20px] flex flex-col items-center justify-center bg-lime-50">
          <img src={Racket} />
          <p className="text-darkgreen font-dm-sans text-[21.92px] font-[700] leading-[28.49px]  text-center ">
            Store Name
          </p>
          <p className="text-green font-dm-sans text-[21.92px] font-[400] leading-[28.49px] text-center">
            Item Name
          </p>
        </div>
        <div className=" w-[369.88px] h-[306px] py-[30px] gap-[15px] rounded-tl-[20px] flex flex-col items-center justify-center bg-lime-50">
          <img src={Racket} />
          <p className="text-darkgreen font-dm-sans text-[21.92px] font-[700] leading-[28.49px]  text-center ">
            Store Name
          </p>
          <p className="text-green font-dm-sans text-[21.92px] font-[400] leading-[28.49px] text-center">
            Item Name
          </p>
        </div>
        <div className=" w-[369.88px] h-[306px] py-[30px] gap-[15px] rounded-tl-[20px] flex flex-col items-center justify-center bg-lime-50">
          <img src={Racket} />
          <p className="text-darkgreen font-dm-sans text-[21.92px] font-[700] leading-[28.49px]  text-center ">
            Store Name
          </p>
          <p className="text-green font-dm-sans text-[21.92px] font-[400] leading-[28.49px] text-center">
            Item Name
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;