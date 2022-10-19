import React, { useState } from "react";

import { FaBars } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link } from "react-scroll";

import images from "../constants/images";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className="lg:fixed w-full h-[80px] flex justify-between items-center bg-[#0C0C0C] px-[1rem] py-[1rem]">
      <div>
        <img
          src={images.gericht}
          alt="logo"
          className=" lg:w-[150px] lg:ml-5 w-[120px]"
        />
      </div>

      {/* Menu */}
      <ul className="hidden lg:flex space-x-8 text-white">
        <li className="hover:text-gray-200 hover:border-b-[1px] border-b-[#DCCA87] cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-gray-200 hover:border-b-[1px] border-b-[#DCCA87] cursor-pointer">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-gray-200 hover:border-b-[1px] border-b-[#DCCA87] cursor-pointer">
          <Link to="menu" smooth={true} duration={500}>
            Menu
          </Link>
        </li>
        <li className="hover:text-gray-200 hover:border-b-[1px] border-b-[#DCCA87] cursor-pointer">
          <Link to="dishes" smooth={true} duration={500}>
            Dishes
          </Link>
        </li>
        <li className="hover:text-gray-200 hover:border-b-[1px] border-b-[#DCCA87] cursor-pointer">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="hidden lg:flex  text-white space-x-6 items-center">
        <a href="#login" className="hover:border-b-[1px] border-b-[#DCCA87]">
          Log In / Register
        </a>
        <img src={images.line} alt="line" />
        <a href="/" className="hover:border-b-[1px] border-b-[#DCCA87]">
          Book Table
        </a>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="lg:hidden z-10">
        {!nav ? (
          <FaBars className="text-white" size={28} />
        ) : (
          <MdOutlineRestaurantMenu className="text-[#DCCA87]" size={32} />
        )}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0C0C0C] text-[#DCCA87] font-base flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl hover:text-white">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-white">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-white">
          <Link onClick={handleClick} to="menu" smooth={true} duration={500}>
            Menu
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-white">
          <Link onClick={handleClick} to="dishes" smooth={true} duration={500}>
            Dishes
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-white">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
