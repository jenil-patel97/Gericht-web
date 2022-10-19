import React from "react";

import { images } from "../constants";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Gallery = () => {
  return (
    <div name="dishes" className="lg:grid grid-cols-2 justify-center items-center bg-[#0c0c0c] py-[4rem] px-[6rem]">
      <div>
        <p className="text-white font-base lg:text-[23px] text-[33px] cursor-default">
          Cuisines
        </p>
        <img src={images.spoon} alt="spoon" />
        <p className="text-[#e2c55a] font-base lg:text-[60px] text-[28px] lg:mt-2 mt-4 cursor-default">
          Some Of Our Best Dishes
        </p>
        <p className="text-gray-300 font-base lg:text-[18px] text-[20px] mt-3 cursor-default">
          A 2% ZFP Restore the Planet fee is added to your bill to help restore
          the planet and combat climate change. You can opt out of this fee if
          you’d like, just let us know when you place your order.
        </p>
      </div>

      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        className="lg:h-[445px] lg:w-[320px] lg:ml-[200px] w-[260px] -ml-6  mt-14 hover:scale-105 duration-500 cursor-pointer"
      >
        <div>
          <img src={images.pizza} alt="img" />
        </div>
        <div>
          <img src={images.gallery02} alt="img" />
        </div>
        <div>
          <img src={images.burger} alt="img" />
        </div>
        <div>
          <img src={images.gallery04} alt="img" />
        </div>
        <div>
          <img src={images.sandwich} alt="img" />
        </div>
      </Carousel>
    </div>
  );
};

export default Gallery;
