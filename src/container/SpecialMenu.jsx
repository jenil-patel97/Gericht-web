import React from "react";

import SubHeading from "../components/SubHeading";
import MenuItem from "../components/MenuItem";

import { images, data } from "../constants";

const SpecialMenu = () => (
  <div className="text-white bg-[#0c0c0c] text-center h-[220vh] lg:h-[180vh] w-full">
    <SubHeading title="Menu that fits your soul" />
    <img
      src={images.spoon}
      alt="spoon"
      className="lg:ml-[660px] lg:-mt-[110px] -mt-[110px] ml-[180px]"
    />
    <p className="text-[#e2c55a] font-base text-5xl mt-4 lg:text-[64px] lg:mt-3 cursor-default">
      Today’s Special
    </p>

    <div name="menu" className="lg:grid grid-cols-3">
      <div className="mt-8">
        <p className="font-base lg:text-[45px] text-[35px] cursor-default">Wine & Beer</p>
        {data.wines.map((wine, index) => (
          <MenuItem
            key={wine.title + index}
            title={wine.title}
            price={wine.price}
            tags={wine.tags}
          />
        ))}
      </div>
      <div>
        <img
          src={images.wine}
          alt="menu"
          className="lg:mt-[120px] lg:h-[410px] w-[350px] ml-6 mt-5 lg:w-[450px] cursor-pointer hover:scale-105 duration-500"
        />
      </div>
      <div className="mt-10 bg-[#0c0c0c]">
        <p className="font-base lg:text-[45px] text-[35px] cursor-default">Cocktails</p>
        {data.cocktails.map((cocktail, index) => (
          <MenuItem
            key={cocktail.title + index}
            title={cocktail.title}
            price={cocktail.price}
            tags={cocktail.tags}
          />
        ))}
      </div>
    </div>

    <button className="text-black bg-[#e2c55a] hover:scale-110 duration-500 lg:mt-8 mt-[40px] mb-[150px] hover:bg-[#e2c046] lg:ml-3 ml-9 text-sm lg:text-[18px] px-8 py-2 font-base font-bold">
      View More
    </button>
  </div>
);

export default SpecialMenu;
