import React from "react";

import SubHeading from "../components/SubHeading";
import images from "../constants/images";

const Header = () => {
  return (
    <div
      name="header"
      className="bg-[#0c0c0c] items-center lg:grid grid-cols-2 h-[150vh] px-[4rem] py-[150px]"
    >
      <div>
        <SubHeading title="Chase the new flavour" />
        <h1 className="lg:text-[90px] text-[55px] font-base font-bold ml-3 -mt-2 text-[#DCCA87] cursor-default">
          The Key To <br /> Fine Dining
        </h1>
        <p className="text-white lg:text-[20px] mt-[20px] ml-3 lg:mt-1 lg:ml-3 cursor-default">
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus{" "}
        </p>
        <button className="bg-[#e2c55a] hover:scale-110 duration-500 lg:mt-5 mt-[40px] mb-[150px] hover:bg-[#e2c046] ml-4 text-sm lg:text-[16px] px-6 py-2 font-base font-bold">
          Explore Menu
        </button>
      </div>

      <div>
        <img
          src={images.welcome}
          alt="header"
          className="lg:w-[70%] lg:-mt-[130px] -mt-8 lg:ml-[80px]"
        />
      </div>
    </div>
  );
};

export default Header;
