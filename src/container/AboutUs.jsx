import React from "react";

import images from "../constants/images";

const AboutUs = () => (
  <div
    name="about"
    className="bg-black-tail lg:grid grid-cols-2 bg-center bg-cover bg-repeat bg-fixed justify-center items-center h-[140vh] px-[4rem] py-[150px]"
  >
    <div className="lg:ml-[90px] ml-[50px] mt-[120px]">
      <h1 className="lg:text-[80px] text-[60px] font-base font-semibold lg:ml-4 -ml-6 -mt-2 text-[#DCCA87] cursor-default">
        About Us
      </h1>
      <img src={images.spoon} alt="spoon" className="lg:ml-4 -ml-4" />
      <p className="text-[#cfcdcd] font-base lg:text-[22px] text-[16px] mt-5 lg:ml-3 -ml-6 cursor-default">
        Since our modest beginnings in 2005 with a little space in Toronto’s
        stylish Yorkville locale, <span className="text-white">‘Gerichts’ </span> has been enlivened
        with the energy to cook and serve rich cuisine , cocktails , Wine , Beer
        and many more...
      </p>
      <button className="bg-[#e2c55a] hover:scale-110 duration-500 lg:mt-8 mt-[40px] mb-[150px] hover:bg-[#e2c046] lg:ml-3 ml-9 text-sm lg:text-[18px] px-8 py-2 font-base font-bold">
        Know More
      </button>
    </div>

    <div className="mt-[35px]">
      <img
        src={images.G}
        alt="G"
        className="w-[300px] h-[280px] lg:w-[390px] lg:h-[415px] lg:ml-[120px] lg:-mt-[150px] relative"
      />
      <img
        src={images.knife}
        alt="knife"
        className="w-[50px] h-[390px] -mt-[330px] ml-[130px] lg:w-[64px] lg:h-[520px] lg:ml-[290px] lg:-mt-[480px] absolute"
      />
    </div>
  </div>
);

export default AboutUs;
