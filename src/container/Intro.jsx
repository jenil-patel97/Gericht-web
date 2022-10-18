import React, { useRef, useState } from "react";

import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../constants";

const Intro = () => {
  const [play, setPlay] = useState(false);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlay((prevPlayVideo) => !prevPlayVideo);

    if (play) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="h-screen relative">
      <video
        className="w-[100%] h-[100%] object-cover"
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />

      <div className="absolute inset-0 bg-[rgba(0,0,0,.65)] flex justify-center items-center">
        <div
          onClick={handleVideo}
          className="cursor-pointer border-[1px] border-[#e2c55a] w-[100px] h-[100px] rounded-[50%]"
        >
          {play ? (
            <BsPauseFill
              size={45}
              color="white"
              className="ml-[26px] mt-[25px]"
            />
          ) : (
            <BsFillPlayFill
              color="white"
              className="ml-[26px] mt-[25px]"
              size={45}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
