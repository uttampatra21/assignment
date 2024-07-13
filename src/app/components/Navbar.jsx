import React from "react";
import { FaSearch, FaComments, FaChevronDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { IoMdArrowDropdownCircle } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex bg-white items-center justify-between gap-2 px-4 py-2 ">
      <div className="left none md:flex items-center gap-4">
        <p className="text-[12px] font-semibold">Payments</p>
        <p className="flex items-center gap-1 text-[12px]">
          <CiCircleQuestion className="text-[14px]" />
          How it works
        </p>
      </div>

      <div className="center flex items-center">
        <div
          className="searchBox w-full  md:w-[400px] flex items-center p-2 rounded-sm"
          style={{ backgroundColor: "#eee" }}
        >
          <CiSearch className="text-base mr-2" />
          <input
            type="text"
            placeholder="Search features, tutorials, etc."
            className="bg-transparent outline-none text-sm  w-full"
          />
        </div>
      </div>

      <div className="right flex items-center sm:gap-2  gap-4">
        <span className="p-2 rounded-full" style={{ backgroundColor: "#eee" }}>
          <IoChatboxEllipsesSharp className="text-base" />
        </span>

        <span className="p-2 rounded-full" style={{ backgroundColor: "#eee" }}>
          <IoMdArrowDropdownCircle className="text-base" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
