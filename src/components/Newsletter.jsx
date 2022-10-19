import React from "react";

import { images } from "../constants";

const Newsletter = () => (
  <div className="bg-[#0c0c0c] h-[55vh] justify-center items-center lg:px-[250px] lg:py-7 py-[60px]">
    <div className="border border-[#e2c55a] lg:h-[290px] h-[320px] lg:py-3 py-5">
      <p className="text-[#cfcdcd] font-base font-bold lg:text-[25px] text-[22px] text-center cursor-default">
        Newsletter
      </p>
      <img
        src={images.spoon}
        alt="spoon"
        className="lg:ml-[400px] ml-[178px] mt-1"
      />
      <p className="text-[#e2c55a] lg:text-[64px] text-[31px] font-base text-center cursor-default">
        Subscribe to Our Newsletter
      </p>
      <p className="text-[#cfcdcd] text-[22px] font-base text-center mt-4 lg:mt-2 cursor-default">
        And never miss latest Updates!
      </p>
      <div className="text-center lg:-mt-2 mt-4">
        <input
          type="email"
          placeholder="Enter your Email"
          className="bg-black lg:text-end border rounded-lg cursor-default font-base text-white border-[#e2c046] lg:px-40 px-10 py-2"
        />
        <button className="bg-[#e2c55a] rounded-md hover:scale-110 duration-500 lg:mt-8 mt-[25px] lg:mb-[150px] mb-2 lg:ml-3 ml-2 text-base lg:text-[18px] px-10 py-2 font-base font-bold hover:bg-[#e2c046] ">
          Subscribe
        </button>
      </div>
    </div>
  </div>
);

export default Newsletter;
