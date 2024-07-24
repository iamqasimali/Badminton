import React from "react";

const ContactOptions = () => {
  return (
    <div className="mx-24 flex flex-wrap items-center justify-center gap-20 my-20">
      <div className="bg-[#FAFEFB] w-[570px] flex justify-between items-center p-4 rounded-lg cursor-pointer">
        {/* leftSide */}
        <div className="flex justify-start gap-5 items-center">
          <div>
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_10786)">
                <path
                  d="M54.1406 0H5.85938C2.62383 0 0 2.62383 0 5.85938V41.0155C0 44.2511 2.62383 46.8749 5.85938 46.8749H16.4859V57.0643C16.4859 59.7128 19.7203 61.0018 21.5414 59.08L33.1066 46.8749H54.1406C57.3762 46.8749 60 44.2511 60 41.0155V5.85938C60 2.62383 57.3762 0 54.1406 0ZM16.8738 28.344C14.1633 28.344 11.9672 26.1479 11.9672 23.4374C11.9672 20.7268 14.1633 18.5307 16.8738 18.5307C19.5844 18.5307 21.7805 20.7268 21.7805 23.4374C21.7805 26.1479 19.5832 28.344 16.8738 28.344ZM30 28.344C27.2895 28.344 25.0934 26.1479 25.0934 23.4374C25.0934 20.7268 27.2895 18.5307 30 18.5307C32.7105 18.5307 34.9066 20.7268 34.9066 23.4374C34.9066 26.1479 32.7105 28.344 30 28.344ZM43.1262 28.344C40.4168 28.344 38.2195 26.1479 38.2195 23.4374C38.2195 20.7268 40.4168 18.5307 43.1262 18.5307C45.8355 18.5307 48.0328 20.7268 48.0328 23.4374C48.0328 26.1479 45.8367 28.344 43.1262 28.344Z"
                  fill="#387000"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_10786">
                  <rect width="60" height="60" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col items-start justify-center gap-2">
            <p className="text-darkgreen font-dm-sans text-[24px] font-[700] leading-[31.68px]">
              talk with us
            </p>
            <p className="text-gray-400 font-dm-sans text-[14px] font-[400] leading-[19.6px]">
              We are here for you in real time.
            </p>
          </div>
        </div>
        {/* rightside */}
        <div>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.41432 22.3543C6.61561 22.4643 6 23.1591 6 23.9998C6 24.9169 6.73262 25.6604 7.63636 25.6604H36.3999L26.0094 36.1627L25.8506 36.3486C25.3739 36.9977 25.4249 37.9204 26.0046 38.5112C26.6423 39.161 27.6784 39.1632 28.3188 38.516L41.4954 25.1992C41.5739 25.1229 41.6449 25.0388 41.7072 24.948C42.1533 24.2995 42.0904 23.3999 41.5187 22.8221L28.3187 9.48386L28.1348 9.32347C27.4932 8.84251 26.5842 8.89809 26.0045 9.48892C25.3668 10.1388 25.3691 11.1903 26.0095 11.8374L36.4025 22.3391L7.63636 22.3391L7.41432 22.3543Z"
              fill="#387000"
            />
          </svg>
        </div>
      </div>
      <div className="bg-[#FAFEFB] w-[570px] flex justify-between items-center p-4 rounded-lg cursor-pointer">
        {/* leftSide */}
        <div className="flex justify-start gap-5 items-center">
          <div>
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M56.3156 42.375C56.1619 42.2531 45 34.2075 41.9362 34.785C40.4737 35.0438 39.6375 36.0413 37.9594 38.0381C37.6894 38.3606 37.0406 39.1331 36.5363 39.6825C35.4757 39.3366 34.4412 38.9155 33.4406 38.4225C28.276 35.9081 24.1031 31.7353 21.5887 26.5706C21.0954 25.5702 20.6743 24.5356 20.3288 23.475C20.88 22.9688 21.6525 22.32 21.9825 22.0425C23.97 20.3737 24.9694 19.5375 25.2281 18.0712C25.7587 15.0337 17.7187 3.795 17.6344 3.69375C17.2696 3.17263 16.7935 2.73912 16.2406 2.42457C15.6877 2.11002 15.0718 1.9223 14.4375 1.875C11.1788 1.875 1.875 13.9444 1.875 15.9769C1.875 16.095 2.04563 28.1025 16.8525 43.1644C31.8994 57.9544 43.905 58.125 44.0231 58.125C46.0575 58.125 58.125 48.8212 58.125 45.5625C58.0782 44.9304 57.8916 44.3165 57.5787 43.7653C57.2658 43.2141 56.8344 42.7392 56.3156 42.375Z"
                fill="#387000"
              />
            </svg>
          </div>
          <div className="flex flex-col items-start justify-center gap-2">
            <p className="text-darkgreen font-dm-sans text-[24px] font-[700] leading-[31.68px]">
            Contact us by phone
            </p>
            <p className="text-gray-400 font-dm-sans text-[14px] font-[400] leading-[19.6px]">
            You can contact us 24 hours a day, 365 days a year.
            </p>
          </div>
        </div>
        {/* rightside */}
        <div>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.41432 22.3543C6.61561 22.4643 6 23.1591 6 23.9998C6 24.9169 6.73262 25.6604 7.63636 25.6604H36.3999L26.0094 36.1627L25.8506 36.3486C25.3739 36.9977 25.4249 37.9204 26.0046 38.5112C26.6423 39.161 27.6784 39.1632 28.3188 38.516L41.4954 25.1992C41.5739 25.1229 41.6449 25.0388 41.7072 24.948C42.1533 24.2995 42.0904 23.3999 41.5187 22.8221L28.3187 9.48386L28.1348 9.32347C27.4932 8.84251 26.5842 8.89809 26.0045 9.48892C25.3668 10.1388 25.3691 11.1903 26.0095 11.8374L36.4025 22.3391L7.63636 22.3391L7.41432 22.3543Z"
              fill="#387000"
            />
          </svg>
        </div>
      </div>
      <div className="bg-[#FAFEFB] w-[570px] flex justify-between items-center p-4 rounded-lg cursor-pointer">
        {/* leftSide */}
        <div className="flex justify-start gap-5 items-center">
          <div>
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M58.0205 13.3856C57.7762 11.7523 56.9547 10.2605 55.705 9.18072C54.4553 8.10096 52.8601 7.50469 51.2086 7.5H8.79234C7.14081 7.50469 5.54561 8.10096 4.29593 9.18072C3.04624 10.2605 2.22479 11.7523 1.98047 13.3856L30.0005 31.5169L58.0205 13.3856Z"
                fill="#387000"
              />
              <path
                d="M31.0181 35.325C30.7148 35.5212 30.3612 35.6255 30 35.6255C29.6388 35.6255 29.2852 35.5212 28.9819 35.325L1.875 17.7863V45.5831C1.87699 47.417 2.60636 49.1752 3.9031 50.4719C5.19983 51.7686 6.95802 52.498 8.79188 52.5H51.2081C53.042 52.498 54.8002 51.7686 56.0969 50.4719C57.3936 49.1752 58.123 47.417 58.125 45.5831V17.7844L31.0181 35.325Z"
                fill="#387000"
              />
            </svg>
          </div>
          <div className="flex flex-col items-start justify-center gap-2">
            <p className="text-darkgreen font-dm-sans text-[24px] font-[700] leading-[31.68px]">
            Please contact us by email
            </p>
            <p className="text-gray-400 font-dm-sans text-[14px] font-[400] leading-[19.6px]">
            You can contact us 24 hours a day, 365 days a year.
            </p>
          </div>
        </div>
        {/* rightside */}
        <div>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.41432 22.3543C6.61561 22.4643 6 23.1591 6 23.9998C6 24.9169 6.73262 25.6604 7.63636 25.6604H36.3999L26.0094 36.1627L25.8506 36.3486C25.3739 36.9977 25.4249 37.9204 26.0046 38.5112C26.6423 39.161 27.6784 39.1632 28.3188 38.516L41.4954 25.1992C41.5739 25.1229 41.6449 25.0388 41.7072 24.948C42.1533 24.2995 42.0904 23.3999 41.5187 22.8221L28.3187 9.48386L28.1348 9.32347C27.4932 8.84251 26.5842 8.89809 26.0045 9.48892C25.3668 10.1388 25.3691 11.1903 26.0095 11.8374L36.4025 22.3391L7.63636 22.3391L7.41432 22.3543Z"
              fill="#387000"
            />
          </svg>
        </div>
      </div>
      <div className="bg-[#FAFEFB] w-[570px] flex justify-between items-center p-4 rounded-lg cursor-pointer">
        {/* leftSide */}
        <div className="flex justify-start gap-5 items-center">
          <div>
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.0132 18.0328C35.7591 18.3103 37.1719 24.2297 34.2591 28.6641C30.1144 35.3953 24.3779 29.3072 24.2466 23.7994C24.2501 22.271 24.8587 20.8063 25.9394 19.7256C27.0201 18.6449 28.4849 18.0363 30.0132 18.0328ZM20.6588 33.8859C19.4856 35.368 18.6868 37.1109 18.3301 38.9672C18.1369 39.5934 18.9272 40.1128 19.2788 40.4991C20.3382 41.5677 21.5994 42.4152 22.9891 42.9923C24.3788 43.5694 25.8694 43.8647 27.3741 43.8609H32.6522C34.157 43.8639 35.6475 43.5683 37.0372 42.9912C38.427 42.4141 39.6884 41.5671 40.7485 40.4991C41.0804 40.1006 41.8885 39.5953 41.6972 38.9681C41.3452 37.1685 40.5834 35.4741 39.4711 34.0163C38.3587 32.5585 36.9256 31.3764 35.2829 30.5616C35.0994 30.4735 34.8924 30.447 34.6927 30.4858C34.4929 30.5247 34.311 30.6268 34.1738 30.7772C33.6754 31.4044 33.0417 31.9108 32.32 32.2586C31.5983 32.6064 30.8073 32.7866 30.0062 32.7857C29.2051 32.7848 28.4146 32.6028 27.6937 32.2534C26.9728 31.904 26.3402 31.3961 25.8432 30.7678C25.3904 30.2616 24.6976 30.5025 24.2185 30.8437C22.8347 31.6017 21.6228 32.6369 20.6588 33.8859ZM9.32256 33.2766C10.046 34.0043 10.9064 34.5815 11.8542 34.9748C12.802 35.3681 13.8183 35.5696 14.8444 35.5678H17.4469C18.4896 33.2581 20.1509 31.2818 22.2469 29.8575C23.6363 29.0541 23.4001 29.1591 22.3782 28.0256C21.7503 27.4044 21.0271 26.8875 20.236 26.4947C20.1122 26.4349 19.9725 26.4163 19.8374 26.4416C19.7023 26.4669 19.5788 26.5348 19.4851 26.6353C19.1449 27.064 18.7123 27.4103 18.2195 27.6484C17.7267 27.8864 17.1865 28.0101 16.6393 28.0101C16.092 28.0101 15.5518 27.8864 15.0591 27.6484C14.5663 27.4103 14.1337 27.064 13.7935 26.6353C13.6997 26.5346 13.576 26.4666 13.4407 26.4413C13.3054 26.416 13.1655 26.4347 13.0416 26.4947C11.9202 27.0507 10.942 27.8577 10.183 28.8531C9.42402 29.8485 8.9047 31.0054 8.66537 32.2341C8.54256 32.6587 9.08162 33.015 9.32256 33.2766ZM46.2057 26.6362C45.8666 27.065 45.4348 27.4114 44.9428 27.6495C44.4508 27.8877 43.9112 28.0114 43.3646 28.0114C42.818 28.0114 42.2784 27.8877 41.7864 27.6495C41.2944 27.4114 40.8626 27.065 40.5235 26.6362C40.4277 26.5354 40.3025 26.4674 40.1657 26.4422C40.029 26.4169 39.8877 26.4356 39.7622 26.4956C38.5231 27.1136 37.4626 28.0382 36.6816 29.1816C39.2826 30.6189 41.3486 32.8592 42.571 35.5678H45.1632C46.3019 35.5589 47.4258 35.3081 48.4603 34.8322C49.4949 34.3562 50.4165 33.6659 51.1641 32.8069C51.2384 32.7313 51.2934 32.6389 51.3244 32.5376C51.3554 32.4362 51.3616 32.3289 51.3422 32.2247C51.1011 30.9966 50.58 29.8408 49.8194 28.8469C49.0587 27.8531 48.0791 27.0482 46.9566 26.4947C46.8327 26.4354 46.6932 26.417 46.5582 26.4423C46.4232 26.4676 46.2997 26.5352 46.2057 26.6353V26.6362ZM16.8929 26.6269C19.6257 26.6269 21.5982 23.0578 21.5982 20.6531C21.5636 19.4381 21.0489 18.2864 20.1667 17.4501C19.2846 16.6139 18.1071 16.1613 16.8919 16.1916C15.678 16.1623 14.5021 16.6157 13.6219 17.4522C12.7418 18.2888 12.2293 19.4402 12.1969 20.6541C12.1969 23.0578 14.1694 26.6259 16.8929 26.6259V26.6269ZM43.1241 16.1925C41.912 16.1653 40.7384 16.6194 39.8603 17.4553C38.9821 18.2913 38.4709 19.4411 38.4385 20.6531C38.4385 23.0578 40.411 26.6269 43.1251 26.6269C45.8485 26.6269 47.8116 23.0578 47.8116 20.6531C47.7812 19.44 47.2703 18.2887 46.3914 17.4521C45.5124 16.6155 44.3372 16.163 43.1241 16.1925ZM14.4732 10.9237C23.2744 4.31437 36.1416 3.58312 44.9532 10.7053C45.1505 10.8523 45.3977 10.916 45.6415 10.8827C45.8853 10.8494 46.1063 10.7217 46.257 10.5272C46.4076 10.3327 46.476 10.0868 46.4473 9.8424C46.4186 9.59801 46.2951 9.37464 46.1035 9.22031C41.4852 5.66939 35.8219 3.74609 29.9962 3.75016C24.1706 3.75423 18.51 5.68545 13.8966 9.24281C13.7454 9.36459 13.6353 9.53002 13.5814 9.71659C13.5275 9.90315 13.5324 10.1018 13.5954 10.2855C13.6584 10.4692 13.7765 10.629 13.9335 10.7432C14.0906 10.8574 14.279 10.9204 14.4732 10.9237ZM52.0407 42.6384C51.8292 42.5072 51.5743 42.4651 51.3319 42.5214C51.0894 42.5776 50.8791 42.7275 50.7469 42.9384C41.5285 58.2037 18.4604 58.1869 9.26256 42.9066C9.12883 42.6996 8.91914 42.5535 8.67869 42.4997C8.43823 42.4459 8.18626 42.4887 7.97708 42.6189C7.7679 42.7491 7.61827 42.9563 7.56043 43.1959C7.50259 43.4354 7.54118 43.688 7.66787 43.8994C17.5744 60.3562 42.4172 60.3675 52.3407 43.9322C52.4724 43.7208 52.5148 43.4658 52.4585 43.2232C52.4023 42.9806 52.252 42.7703 52.0407 42.6384ZM12.7219 39.8419C12.5991 39.6251 12.3952 39.4659 12.155 39.3995C11.9149 39.333 11.6581 39.3647 11.4413 39.4875C11.2245 39.6103 11.0654 39.8142 10.9989 40.0544C10.9324 40.2946 10.9641 40.5513 11.0869 40.7681C19.2244 55.3612 40.7551 55.3734 48.9207 40.8019C48.9817 40.6946 49.0211 40.5764 49.0365 40.454C49.0519 40.3316 49.043 40.2073 49.0103 40.0883C48.9777 39.9693 48.9219 39.8579 48.8462 39.7604C48.7705 39.663 48.6764 39.5814 48.5691 39.5203C48.4619 39.4592 48.3437 39.4199 48.2212 39.4045C48.0988 39.3891 47.9745 39.398 47.8555 39.4307C47.7365 39.4633 47.6251 39.5191 47.5277 39.5948C47.4302 39.6705 47.3486 39.7646 47.2876 39.8719C39.8251 53.1891 20.1526 53.1712 12.7219 39.8419ZM42.8522 13.6153C42.9242 13.5151 42.9758 13.4017 43.0039 13.2816C43.032 13.1615 43.0362 13.037 43.0162 12.9153C42.9962 12.7936 42.9523 12.677 42.8872 12.5722C42.8221 12.4674 42.7369 12.3765 42.6366 12.3047C38.9438 9.68209 34.5259 8.27448 29.9966 8.27734C25.4672 8.28019 21.0512 9.69337 17.3616 12.3206C17.166 12.4687 17.036 12.6875 16.9994 12.9302C16.9628 13.1728 17.0226 13.4202 17.1659 13.6194C17.3092 13.8186 17.5247 13.9539 17.7663 13.9964C18.008 14.0389 18.2568 13.9852 18.4594 13.8469C21.8288 11.448 25.8614 10.1575 29.9975 10.1547C34.1336 10.1518 38.168 11.4367 41.5407 13.8309C41.6409 13.903 41.7544 13.9545 41.8746 13.9827C41.9948 14.0108 42.1193 14.015 42.2412 13.995C42.363 13.9749 42.4796 13.9311 42.5845 13.8659C42.6893 13.8008 42.7803 13.7156 42.8522 13.6153Z"
                fill="#387000"
              />
            </svg>
          </div>
          <div className="flex flex-col items-start justify-center gap-2">
            <p className="text-darkgreen font-dm-sans text-[24px] font-[700] leading-[31.68px]">
            Join our community
            </p>
            <p className="text-gray-400 font-dm-sans text-[14px] font-[400] leading-[19.6px]">
            You can contact us 24 hours a day, 365 days a year.


            </p>
          </div>
        </div>
        {/* rightside */}
        <div>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.41432 22.3543C6.61561 22.4643 6 23.1591 6 23.9998C6 24.9169 6.73262 25.6604 7.63636 25.6604H36.3999L26.0094 36.1627L25.8506 36.3486C25.3739 36.9977 25.4249 37.9204 26.0046 38.5112C26.6423 39.161 27.6784 39.1632 28.3188 38.516L41.4954 25.1992C41.5739 25.1229 41.6449 25.0388 41.7072 24.948C42.1533 24.2995 42.0904 23.3999 41.5187 22.8221L28.3187 9.48386L28.1348 9.32347C27.4932 8.84251 26.5842 8.89809 26.0045 9.48892C25.3668 10.1388 25.3691 11.1903 26.0095 11.8374L36.4025 22.3391L7.63636 22.3391L7.41432 22.3543Z"
              fill="#387000"
            />
          </svg>
        </div>
      </div>
      <div className="bg-[#FAFEFB] w-[570px] flex justify-between items-center p-4 rounded-lg cursor-pointer">
        {/* leftSide */}
        <div className="flex justify-start gap-5 items-center">
          <div>
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.641 56.25H12.0566C10.8136 56.2495 9.62159 55.7555 8.74263 54.8765C7.86366 53.9976 7.36964 52.8056 7.36914 51.5625V8.43752C7.36964 7.19447 7.86366 6.00248 8.74263 5.12351C9.62159 4.24454 10.8136 3.75052 12.0566 3.75002H25.9504C28.2446 3.74658 30.521 4.15296 32.6723 4.95002V11.7844C32.6742 13.027 33.1687 14.2181 34.0474 15.0968C34.926 15.9754 36.1172 16.4699 37.3598 16.4719H44.2129C45.0017 18.6284 45.4047 20.9069 45.4035 23.2031V32.5031C37.146 29.7094 28.1113 36.2597 28.2566 45C28.256 47.2674 28.844 49.4962 29.9631 51.4682C31.0822 53.4401 32.6941 55.0878 34.641 56.25ZM37.3598 14.5969H43.4066C41.4981 10.7594 38.3868 7.65135 34.5473 5.7469V11.7844C34.5495 12.5296 34.8465 13.2437 35.3735 13.7707C35.9004 14.2976 36.6145 14.5947 37.3598 14.5969ZM52.6316 45C52.6316 47.9837 51.4464 50.8452 49.3366 52.955C47.2268 55.0648 44.3653 56.25 41.3816 56.25C38.398 56.25 35.5365 55.0648 33.4267 52.955C31.3169 50.8452 30.1316 47.9837 30.1316 45C29.9845 37.2656 38.2598 31.6125 45.4035 34.4906C47.5296 35.3062 49.3585 36.7471 50.6489 38.6233C51.9393 40.4995 52.6306 42.7229 52.6316 45ZM46.5379 44.0625H42.3191V39.8438C42.3191 39.5951 42.2204 39.3567 42.0446 39.1809C41.8687 39.005 41.6303 38.9063 41.3816 38.9063C41.133 38.9063 40.8945 39.005 40.7187 39.1809C40.5429 39.3567 40.4441 39.5951 40.4441 39.8438V44.0625H36.2254C35.9767 44.0625 35.7383 44.1613 35.5625 44.3371C35.3867 44.5129 35.2879 44.7514 35.2879 45C35.2879 45.2487 35.3867 45.4871 35.5625 45.6629C35.7383 45.8387 35.9767 45.9375 36.2254 45.9375H40.4441V50.1563C40.4441 50.4049 40.5429 50.6434 40.7187 50.8192C40.8945 50.995 41.133 51.0938 41.3816 51.0938C41.6303 51.0938 41.8687 50.995 42.0446 50.8192C42.2204 50.6434 42.3191 50.4049 42.3191 50.1563V45.9375H46.5379C46.7865 45.9375 47.025 45.8387 47.2008 45.6629C47.3766 45.4871 47.4754 45.2487 47.4754 45C47.4754 44.7514 47.3766 44.5129 47.2008 44.3371C47.025 44.1613 46.7865 44.0625 46.5379 44.0625Z"
                fill="#387000"
              />
            </svg>
          </div>
          <div className="flex flex-col items-start justify-center gap-2">
            <p className="text-darkgreen font-dm-sans text-[24px] font-[700] leading-[31.68px]">
            file a complaint
            </p>
            <p className="text-gray-400 font-dm-sans text-[14px] font-[400] leading-[19.6px]">
            You can contact us 24 hours a day, 365 days a year.
            </p>
          </div>
        </div>
        {/* rightside */}
        <div>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.41432 22.3543C6.61561 22.4643 6 23.1591 6 23.9998C6 24.9169 6.73262 25.6604 7.63636 25.6604H36.3999L26.0094 36.1627L25.8506 36.3486C25.3739 36.9977 25.4249 37.9204 26.0046 38.5112C26.6423 39.161 27.6784 39.1632 28.3188 38.516L41.4954 25.1992C41.5739 25.1229 41.6449 25.0388 41.7072 24.948C42.1533 24.2995 42.0904 23.3999 41.5187 22.8221L28.3187 9.48386L28.1348 9.32347C27.4932 8.84251 26.5842 8.89809 26.0045 9.48892C25.3668 10.1388 25.3691 11.1903 26.0095 11.8374L36.4025 22.3391L7.63636 22.3391L7.41432 22.3543Z"
              fill="#387000"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ContactOptions;
