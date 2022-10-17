import React from "react";

const MenuItem = ({ title, price, tags }) => (
  <div className="flex flex-col mt-8 cursor-default">
    <div className="flex justify-between items-center">
      <div className="flex-1">
        <p className="text-[#e2c55a] text-[25px] font-base">{title}</p>
      </div>

      <div className="w-[90px] h-[1px] bg-[#e2c55a] mx-2" />

      <div className=" mr-6 text-[23px]">
        <p className="font-base">{price}</p>
      </div>
    </div>

    <div className="lg:-ml-[110px]">
      <p className="text-[#AAAAAA] text-[17px] font-base">{tags}</p>
    </div>
  </div>
);

export default MenuItem;
