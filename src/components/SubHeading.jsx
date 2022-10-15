import React from "react";

import images from "../constants/images";

const SubHeading = ({ title }) => (
  <div className="mb-[1rem]">
    <p className="font-base text-white -mt-2 lg:text-[23px] text-[18px] ml-2 font-semibold cursor-default">
      {title}
    </p>
    <img src={images.spoon} alt="spoon" className="ml-2" />
  </div>
);

export default SubHeading;
