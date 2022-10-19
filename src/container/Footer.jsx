import React from "react";

import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { images } from "../constants";

const Footer = () => (
  <div
    name="footer"
    className="bg-black-tail lg:grid grid-cols-3 bg-center bg-cover bg-repeat bg-fixed lg:h-[60vh] h-[90vh] py-[100px]"
  >
    <div className="text-center flex-1 cursor-default">
      <h1 className="lg:text-[35px] text-[22px] text-white font-base">
        Contact Us
      </h1>
      <p className="text-[#e2c55a] font-base lg:text-[19px] text-[20px] mt-1">
        Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CANADA.
      </p>
      <p className="text-[#e2c55a] font-base text-[19px]  lg:mt-2 mt-1">
        support@gerícht.com
      </p>
      <p className="text-[#e2c55a] font-base lg:text-[19px] text-[21px] lg:mt-2 mt-1 mb-12">
        +1 212-555-1230
      </p>
    </div>

    <div className="text-center flex-1 cursor-default">
      <img
        className="lg:w-[240px] w-[220px] ml-[85px] lg:-mt-5"
        src={images.gericht}
        alt="logo"
      />
      <p className="text-[#e2c55a] font-base lg:text-[21px] text-[20px] mt-1">
        "The best way to find yourself is to lose yourself in the service of
        others.”
      </p>
      <div>
        <p className="text-[#e2c55a] text-center font-base lg:text-[19px] text-[20px] lg:mt-[100px] mt-[50px]">
          © 2022 Gerícht by Jenil.&nbsp; All Rights reserved.
        </p>
      </div>
    </div>

    <div className="text-white text-center flex-1 cursor-default">
      <h1 className="lg:text-[35px] text-[22px] font-base mt-6 lg:-mt-2">
        Follow Us
      </h1>
      <div className="flex space-x-14 mt-5 justify-center items-center">
        <FiFacebook className="w-8 h-12 hover:text-[#e2c55a] cursor-pointer" />
        <FiTwitter className="w-8 h-12 hover:text-[#e2c55a] cursor-pointer" />
        <FiInstagram className="w-8 h-12 hover:text-[#e2c55a] cursor-pointer" />
      </div>
    </div>
  </div>
);

export default Footer;
