"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaHome,
  FaShoppingCart,
  FaBox,
  FaTruck,
  FaBullhorn,
  FaToolbox,
  FaTags,
  FaUsers,
  FaBrush,
  FaPlug,
  FaWallet,
  FaChevronDown,
} from "react-icons/fa";

import { IoWalletOutline } from "react-icons/io5";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const menuItems = [
    { icon: FaHome, label: "Home", route: "/" },
    { icon: FaShoppingCart, label: "Orders", route: "../orders" },
    { icon: FaBox, label: "Products", route: "/products" },
    { icon: FaTruck, label: "Delivery", route: "/delivery" },
    { icon: FaBullhorn, label: "Marketing", route: "/marketing" },
    { icon: FaToolbox, label: "Tools", route: "/tools" },
    { icon: FaTags, label: "Discounts", route: "/discounts" },
    { icon: FaUsers, label: "Audience", route: "/audience" },
    { icon: FaBrush, label: "Appearance", route: "/appearance" },
    { icon: FaPlug, label: "Plugins", route: "/plugins" },
  ];

  return (
    <div
      className="w-full relative h-full text-white px-2 py-2"
      style={{ backgroundColor: "rgb(30, 35, 60)" }}
    >
      <div className="profile flex items-center justify-between gap-4">
        <Link href="/store" className="left flex items-center gap-2">
          <img
            className="w-[50px] rounded-md"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlie4MsQ9pJSSKY7DoEpxn3uBAq-rT7in1sA&s"
            alt=""
          />
          <div className="name hidden md:inline">
            <h3 className="text-[16px] font-bold ">Nishyan</h3>
            <u className="text-[12px]">Visit store</u>
          </div>
        </Link>
        <div className="right px-2 hidden md:inline">
          <FaChevronDown />
        </div>
      </div>

      <div className="lists mt-8">
        {menuItems.map((item) => (
          <Link href={item.route} key={item.label}>
            <div
              className={`flex mb-1 items-center gap-3 p-2 rounded cursor-pointer ${
                activeItem === item.label ? "bg-[#373755]" : ""
              }`}
              onClick={() => setActiveItem(item.label)}
            >
              <item.icon size={20} />
              <span className="hidden md:inline">{item.label}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="bottom absolute left-0 px-2 bottom-2 w-full flex items-center justify-center gap-3">
        <div
          className="flex bottomBox gap-3 items-center justify-center rounded-md w-full px-4 py-1.5"
          style={{ backgroundColor: "#373755" }}
        >
          <div
            className="icon p-2 rounded-md"
            style={{ backgroundColor: "#3f3f62f5" }}
          >
            <IoWalletOutline />
          </div>
          <div className="text none md:block">
            <p className="text-[12px] mb-1">Available credits</p>
            <h4 className="font-bold text-[14px]">222.10</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
