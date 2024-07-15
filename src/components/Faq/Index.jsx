import React from "react";

const index = () => {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-4 col-start-2">
        <h1 className="text-[48px] font-dm-sans font-[700] leading-[57.6px] text-darkgreen text-center my-6">
          FAQ
        </h1>

        <div>
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="border-2 border-green rounded-lg px-5 py-7 my-3"
            >
                 <details className="">
                <summary className="flex justify-between items-center">
                  <p className="text-darkgreen text-[25.37px] font-dm-sans font-[700] leading-[35.02px]">
                     Question {index + 1}
                  </p>
                  <p className="text-darkgreen text-[25.37px] font-dm-sans font-[700] leading-[35.02px]">
                    +
                  </p>
                </summary>
                <p className="text-darkgreen text-[19.73px] font-dm-sans font-[400] leading-[27.63px]">
                  Lorem ipsum dolor sit amet consectetur. Lacus lectus elementum
                  sollicitudin elementum tellus sed egestas. Nec amet felis sed
                  facilisi sed ut eros feugiat pretium. Volutpat bibendum odio
                  hac tincidunt sollicitudin aliquam. Sit laoreet eu id turpis
                  non non nisi quam. In vestibulum a nec rhoncus eget. Ridiculus
                  cras viverra nec mi justo euismod morbi. Mi praesent laoreet
                  auctor purus et auctor senectus in. Lacinia gravida nascetur
                  bibendum mattis at nunc. Nibh ac in sed enim aliquam viverra
                  tincidunt.
                </p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
