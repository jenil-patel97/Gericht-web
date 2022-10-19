import React from "react";

import { images } from "../constants";

const FindUs = () => (
  <div
    name="contact"
    className="bg-black-tail lg:grid grid-cols-2 bg-center bg-cover bg-repeat bg-fixed justify-center items-center lg:h-[130vh] h-[145vh] py-5 px-[80px] lg:py-[10rem] lg:px-[6rem]"
  >
    <div className="lg:ml-[90px] ml-[50px] mt-[120px]">
      <p className="text-white font-base lg:text-[28px] text-[40px] ml-5 lg:-ml-1 cursor-default">
        Contact
      </p>
      <img src={images.spoon} alt="spoon" className="ml-14 lg:-ml-[2px]" />
      <h1 className="lg:text-[42px] text-[38px] font-base font-semibold lg:-ml-1 ml-4 lg:mt-1 mt-3 text-[#DCCA87] cursor-default">
        Find Us
      </h1>

      <p className="text-[#cfcdcd] font-base lg:text-[19px] text-[21px] lg:mt-2 mt-4 cursor-default">
        Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CA.
      </p>
      <p className="text-[#DCCA87] font-base mt-4 cursor-default lg:text-[23px] text-[25px]">
        Opening Hours :
      </p>
      <p className="text-[#cfcdcd] font-base lg:text-[20px] text-[23px] lg:mt-4 mt-2 cursor-default">
        Mon - Fri: 10:00 Am - 11:00 Pm <br />
        Sat - Sun: 10:00 Am - 12:00 Am
      </p>
      <button className="bg-[#e2c55a] hover:scale-110 duration-500 lg:mt-8 mt-[50px] mb-[150px] lg:ml-3 ml-2 text-base lg:text-[18px] px-10 py-2 font-base font-bold hover:bg-[#e2c046] ">
        Visit Us
      </button>
    </div>

    <div className="mt-[25px]">
      <img
        src={images.findus}
        alt="find"
        className="w-[300px] h-[330px] lg:w-[390px] lg:h-[415px] lg:ml-[120px] lg:-mt-[150px] relative"
      />
    </div>
  </div>
);

export default FindUs;
