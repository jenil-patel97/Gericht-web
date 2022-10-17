import React from "react";

import SubHeading from "../components/SubHeading";
import images from "../constants/images";

const Header = () => {
  return (
    <div
      name="header"
      className="bg-[#0c0c0c] items-center lg:grid grid-cols-2 h-[120vh] px-[4rem] "
    >
      <div className="lg:ml-5">
        <SubHeading title="Chase the new flavour" />
        <img src={images.spoon} alt="spoon" className="ml-2 mb-1 lg:-mt-[110px] -mt-[110px]" />
        <h1 className="lg:text-[90px] text-[55px] font-base font-bold ml-3 -mt-2 text-[#DCCA87] cursor-default">
          The Key To <br /> Fine Dining
        </h1>
        <p className="text-white font-base lg:text-[18px] mt-[20px] ml-3 lg:mt-1 lg:ml-3 cursor-default">
          Influenced by Canada's rich bounty and curated by Toronto's grand
          downtown manor house, REIGN serves sophisticated cuisine, prestigious
          wine, and inspiring moments at the heart of a city landmark.
        </p>
        <button className="bg-[#e2c55a] hover:scale-110 duration-500 lg:mt-5 mt-[40px] mb-[150px] hover:bg-[#e2c046] ml-4 text-sm lg:text-[18px] px-6 py-2 font-base font-bold">
          Explore Menu
        </button>
      </div>

      <div>
        <img
          src={images.welcome}
          alt="header"
          className="lg:w-[70%] lg:-mt-[80px] -mt-8 lg:ml-[80px]"
        />
      </div>
    </div>
  );
};

export default Header;
