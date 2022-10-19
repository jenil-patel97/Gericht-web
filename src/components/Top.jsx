import React, { useState, useEffect } from "react";

import { BiUpArrowAlt } from "react-icons/bi";
import { animateScroll as scroll } from "react-scroll";

const Top = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    show && (
      <button
        onClick={() => scrollToTop()}
        className="bg-white w-16 h-16 rounded-full fixed right-1 bottom-[110px] lg:right-[40px] lg:bottom-[20px] flex justify-center items-center transition-all text-black hover:bg-[#e2c55a] hover:scale-110 duration-500"
      >
        <BiUpArrowAlt className="w-8 h-8" />
      </button>
    )
  );
};

export default Top;
