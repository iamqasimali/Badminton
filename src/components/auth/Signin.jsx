import React from "react";
import Logo from "../../assets/images/logo.png";

const Signin = () => {
  return (
    <div>
      <div className="w-screen h-screen hidden sm:flex">
        <div className="bg-green w-1/2 h-full flex items-center justify-center">
          <img src={Logo} />
        </div>
        <div className="bg-white w-1/2 h-full flex items-center justify-center ">
          <div>
            <div className="mb-24">
              <p className="text-3xl font-sans text-black text-center">
                Welcome Back!
              </p>
              <p className="text-xs font-sans text-gray-400 text-center">
                Please Enter your details
              </p>
            </div>
            <div className="w-[335px]">
              <p className="text-xl font-sans text-black text-center">
                Please Signin To Continue
              </p>
              <p className="text-xs font-sans text-gray-400 text-center">
                Please enter your details below
              </p>

              <form>
                <div className="my-2">
                  <input
                    type="text"
                    className="bg-gray rounded-md text-lg px-3 py-2 w-full"
                    placeholder="abc@example.com"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="password"
                    className="bg-gray rounded-md text-lg px-3 py-2 w-full"
                    placeholder=".........."
                  />
                </div>
              </form>
            </div>

            <button className="w-full bg-green text-white text-lg font-sans rounded-md text-center px-3 py-2 mt-2 mb-2 shadow-custom">
              Sign in
            </button>
          </div>
        </div>
      </div>

      {/* MobileScreen */}
      <div className="h-screen w-screen bg-green flex flex-col  sm:hidden">
        <div className="w-full h-3/4 flex items-center justify-center ">
          <img src={Logo} className="w-[275px] h-[60px]" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-sans font-thin text-sm leading-normal text-center">
            Welcome
          </p>
          <p className="font-sans font-thin text-center text-3xl">
            Step into reality
          </p>
          <p className="font-sans font-thin text-center text-3xl">
            Badminton App
          </p>

          <button className="rounded-md bg-white text-green text-center w-4/5 h-[44px] my-2 cursor-pointer">
            Create An Account
          </button>
          <button className="rounded-md  text-black border-black border-2 text-center w-4/5 h-[44px] my-2 cursor-pointer">
            Signin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
