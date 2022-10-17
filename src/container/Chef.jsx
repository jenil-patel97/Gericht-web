import React from "react";

import { images } from "../constants";

const Chef = () => (
  <div className="bg-black-tail lg:grid grid-cols-2 bg-center bg-cover bg-repeat bg-fixed justify-center items-center lg:h-[170vh] lg:py-[80px] px-[4rem] py-[140px]">
    <div className="lg:w-[60%] w-[350px] -ml-[35px] lg:mt-[180px] lg:ml-[100px]">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="py-[160px]">
      <p className="font-base font-semibold text-white lg:text-[25px] text-[32px] cursor-default">
        Chef’s Word
      </p>
      <img src={images.spoon} alt="spoon" />
      <h1 className="text-[#e2c55a] font-base text-[64px] mt-3 cursor-default">
        What We Believe In
      </h1>
      <p className="text-white mt-[20px] text-[19px] lg:text-[22px] font-base cursor-default">
        “The amount of work that it takes to both find great staff and then{" "}
        <br />
        train everybody so they're ready to put forth the vision you've created.{" "}
        <br />
        it’s an extremely dependent business, I think a lot of people that go{" "}
        <br />
        into opening restaurants are all about the food, which we also as well,
        but we learned very quickly that it's all about the people.”
      </p>
      <p className="font-base text-[#e2c55a] text-[32px] mt-[30px] cursor-default">
        Kevin Luo
      </p>
      <p className="text-white font-base text-[20px] cursor-default">
        chief chef
      </p>
      <img
        src={images.sign}
        alt="sign"
        className="lg:w-[40%] lg:mt-8 lg:-ml-6 w-[70%] mt-8 -ml-3"
      />
    </div>
  </div>
);

export default Chef;
