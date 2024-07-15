import React from "react";
import Logo from "../../assets/images/logo.png";
import BlackLogo from "../../assets/images/BlackLogo.png";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="w-screen h-screen bg-custom bg-cover bg-center bg-no-repeat relative">
      <div className="w-full h-full flex">
        <div className="bg-green w-1/2 h-full hidden sm:flex items-center justify-center">
          <img src={Logo} />
        </div>
        <div className="bg-white w-full sm:w-1/2 h-full flex items-center justify-center ">
          <div className="grid">
            <div className="mb-16  hidden sm:block">
              <p className=" text-black font-dm-sans text-[32px] font-bold leading-[41.66px] text-center">
                Welcome Back!
              </p>
              <p className="text-xs text-gray-400 font-dm-sans text-[15px] font-normal leading-[18.23px] text-center">
                Please Enter your details
              </p>
            </div>

            <div className="flex flex-col items-center justify-center  w-full sm:hidden mb-[90px]">
              <img className="" width="75" height="75" src={BlackLogo} />
              <p className="text-darkgreen font-dm-sans text-[38px] font-[700] leading-[26px] py-2 my-2 ">
                Badminton{" "}
              </p>
            </div>

            <div className="w-full sm:w-[365px]">
              <p className=" text-black font-dm-sans text-[20px]  leading-[26.04px] text-center">
                Please Signin To Continue
              </p>
              <p className="text-xs text-gray-400 font-dm-sans text-[15px] font-normal leading-[19.53px] text-center">
                Please enter your details below
              </p>

              <form className="flex flex-col">
                <div className="my-4 relative">
                  <svg
                    className="absolute left-3 top-2/4 transform -translate-y-2/4"
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 18C1.765 18 0 16.4115 0 9C0 6.96306 0.133318 5.36595 0.497629 4.12078C1.43044 5.03897 2.60755 6.1431 3.88606 7.12657C5.69935 8.52141 7.89544 9.81818 10 9.81818C12.1046 9.81818 14.3007 8.52141 16.1139 7.12657C17.3925 6.1431 18.5696 5.03897 19.5024 4.12078C19.8667 5.36595 20 6.96306 20 9C20 16.4115 18.235 18 10 18Z"
                      fill="#0B0B0B"
                      fill-opacity="0.3"
                    />
                    <path
                      d="M18.7761 2.51436C17.7997 3.49144 16.5045 4.74736 15.0861 5.83847C13.2993 7.21286 11.4954 8.18182 10 8.18182C8.50456 8.18182 6.70065 7.21286 4.91394 5.83847C3.4955 4.74736 2.20035 3.49144 1.22388 2.51436C2.54742 0.550308 5.153 0 10 0C14.847 0 17.4526 0.550308 18.7761 2.51436Z"
                      fill="#0B0B0B"
                      fill-opacity="0.3"
                    />
                  </svg>
                  <input
                    type="text"
                    className="bg-gray-100 rounded-md text-lg px-10 py-2 w-full h-[50px]"
                    placeholder="Email address"
                  />
                </div>

                <div className="mb-2 relative">
                  <svg
                    className="absolute left-3 top-2/4 transform -translate-y-2/4"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.33333 12.5C8.33333 13.4205 9.07952 14.1667 10 14.1667C10.9205 14.1667 11.6667 13.4205 11.6667 12.5C11.6667 11.5795 10.9205 10.8333 10 10.8333C9.07952 10.8333 8.33333 11.5795 8.33333 12.5Z"
                      fill="#0B0B0B"
                      fill-opacity="0.3"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.9911 1.46049C15.0403 2.39308 15.7358 3.74521 15.8238 5.46024C19.1407 6.24353 20 8.19054 20 12.5C20 18.6762 18.235 20 10 20C1.765 20 0 18.6762 0 12.5C0 8.19054 0.859291 6.24353 4.17615 5.46024C4.26423 3.74521 4.9597 2.39308 6.00886 1.46049C7.11764 0.474914 8.57244 0 10 0C11.4276 0 12.8824 0.474914 13.9911 1.46049ZM10 5C8.38793 5 7.02381 5.05073 5.87232 5.17865C6.00779 4.07798 6.48449 3.26764 7.11614 2.70617C7.88236 2.02509 8.92756 1.66667 10 1.66667C11.0724 1.66667 12.1176 2.02509 12.8839 2.70617C13.5155 3.26764 13.9922 4.07798 14.1277 5.17865C12.9762 5.05073 11.6121 5 10 5ZM6.66667 12.5C6.66667 14.3409 8.15905 15.8333 10 15.8333C11.8409 15.8333 13.3333 14.3409 13.3333 12.5C13.3333 10.6591 11.8409 9.16667 10 9.16667C8.15905 9.16667 6.66667 10.6591 6.66667 12.5Z"
                      fill="#0B0B0B"
                      fill-opacity="0.3"
                    />
                  </svg>

                  <input
                    type="password"
                    className="bg-gray-100 rounded-md text-lg px-10 py-2 w-full h-[50px]"
                    placeholder="Password"
                  />
                </div>

                <Link to="/accountCreated" className=" bg-green text-white text-lg font-sans rounded-md text-center px-3 py-2 mt-2 mb-2 shadow-custom">
                  Sign in
                </Link>
              </form>
            </div>

            <p className="font-dm-sans text-gray-400 text-center text-[15px] leading-[19.53px] font-normal py-4">
              or continue
            </p>

            <div className="flex items-center justify-around my-5">
              <div className="bg-gray-100 bg-custom-color rounded-full p-2 w-[55px] h-[55px] flex justify-center items-center">
                <svg
                  className=""
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 12.75C25 11.75 24.9375 11 24.75 10.1875H12.75V14.8125H19.75C19.625 15.9375 18.8125 17.6875 17.125 18.875V19L20.9375 21.875H21.1875C23.625 19.8125 25 16.5625 25 12.75Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12.75 25C16.1875 25 19.0625 23.875 21.1875 22L17.1875 18.9375C16.125 19.6875 14.6875 20.1875 12.75 20.1875C9.375 20.1875 6.5 18 5.5 15H5.375L1.4375 18L1.375 18.125C3.4375 22.1875 7.75 25 12.75 25Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.5 15C5.25 14.25 5.0625 13.375 5.0625 12.5C5.0625 11.625 5.1875 10.8125 5.5 10V9.8125L1.5 6.75L1.375 6.875C0.5 8.5625 0 10.5 0 12.5C0 14.5 0.5 16.4375 1.375 18.125L5.5 15Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.75 4.8125C15.125 4.8125 16.75 5.8125 17.6875 6.6875L21.3125 3.25C19.0625 1.25 16.1875 0 12.75 0C7.75 0 3.4375 2.8125 1.375 6.875L5.5 10C6.5 7 9.375 4.8125 12.75 4.8125Z"
                    fill="#EB4335"
                  />
                </svg>
              </div>

              <div className="bg-gray-100 rounded-full p-2 w-[55px] h-[55px] flex justify-center items-center">
                <svg
                  width="21"
                  height="25"
                  viewBox="0 0 21 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.4889 23.9933C16.1383 25.3093 14.6482 25.1041 13.2278 24.4836C11.7177 23.8506 10.3372 23.8106 8.74242 24.4836C6.75639 25.3443 5.70233 25.0941 4.50622 23.9933C-2.24678 17.0129 -1.25003 6.37985 6.42497 5.97955C8.28641 6.07963 9.58966 7.01284 10.6861 7.0904C12.3158 6.75764 13.8757 5.80442 15.62 5.92951C17.7157 6.09964 19.2831 6.93027 20.3297 8.42391C16.0187 11.0259 17.0404 16.7302 21 18.3314C20.2076 20.4205 19.1909 22.4846 17.4864 24.0108L17.4889 23.9933ZM10.5366 5.90449C10.3347 2.80213 12.8391 0.25019 15.7197 0C16.1159 3.57772 12.4802 6.25476 10.5366 5.90449Z"
                    fill="black"
                  />
                </svg>
              </div>

              <div className="bg-gray-100 rounded-full p-2 w-[55px] h-[55px] flex justify-center items-center">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 18.7391 4.57107 23.9104 10.5469 24.8481V16.1133H7.37305V12.5H10.5469V9.74609C10.5469 6.61328 12.4131 4.88281 15.2683 4.88281C16.6359 4.88281 18.0664 5.12695 18.0664 5.12695V8.20312H16.4902C14.9374 8.20312 14.4531 9.16667 14.4531 10.1552V12.5H17.9199L17.3657 16.1133H14.4531V24.8481C20.4289 23.9104 25 18.7391 25 12.5Z"
                    fill="#1877F2"
                  />
                  <path
                    d="M17.3657 16.1133L17.9199 12.5H14.4531V10.1552C14.4531 9.16667 14.9374 8.20312 16.4902 8.20312H18.0664V5.12695C18.0664 5.12695 16.6359 4.88281 15.2683 4.88281C12.4131 4.88281 10.5469 6.61328 10.5469 9.74609V12.5H7.37305V16.1133H10.5469V24.8481C11.8411 25.0506 13.1589 25.0506 14.4531 24.8481V16.1133H17.3657Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <Link to="/signup" className="font-dm-sans text-black text-center text-[15px] leading-[19.53px] font-normal my-6 hover:text-green">
              Don't have an account? Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
