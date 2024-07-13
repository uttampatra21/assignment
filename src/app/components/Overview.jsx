import React from "react";
import { CiCircleQuestion } from "react-icons/ci";

const Overview = () => {
  return (
    <div className="px-4 py-4 bg-gray-100">
      <div className="title mb-6 flex items-center justify-between">
        <h4 className="text-[18px] text-gray-800" style={{ fontWeight: "550" }}>
          Overview
        </h4>
        <div className="filterBox flex items-center">
          <select
            name=""
            id=""
            className="cursor-pointer border border-gray-300 text-gray-700 text-[12px] px-3 py-2 rounded-sm outline-none hover:shadow-md transition-shadow duration-200"
          >
            <option value="">This Month</option>
            <option value="">This Year</option>
          </select>
        </div>
      </div>

      <div className="payment-box grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          className="box text-white  pt-4 rounded-md shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
          style={{ backgroundColor: "rgb(15 110 180)" }}
        >
          <small className="flex px-4 items-center gap-2 text-[12px]">
            Next Payout <CiCircleQuestion className="text-[12px]" />
          </small>

          <div className="flex px-4 pb-4 justify-between items-center mt-3">
            <h1 className="text-[16px]" style={{ fontWeight: "550" }}>
              ₹2,312.23
            </h1>
            <u className="text-[11px]">23 Orders</u>
          </div>

          <div
            className="px-4 py-3 flex items-center justify-between"
            style={{ backgroundColor: "rgb(16 75 123)" }}
          >
            <small>Next payout date:</small>
            <p className="text-[12px] " style={{ fontWeight: "550" }}>
              Today, 04:00 PM
            </p>
          </div>
        </div>

        <div
          className="box text-white pt-4 rounded-lg cursor-pointer shadow-md overflow-hidden transform transition-transform hover:scale-105"
          style={{ backgroundColor: "rgb(15 110 180)" }}
        >
          <small className="flex px-4 items-center gap-2 text-[12px]">
            Amount Pending <CiCircleQuestion className="text-[12px]" />
          </small>

          <div className="flex px-4 pb-4 justify-between items-center mt-3">
            <h1 className="text-[16px]" style={{ fontWeight: "550" }}>
              ₹92,312.20
            </h1>
            <u className="text-[11px]">23 Orders</u>
          </div>
        </div>

        <div
          className="box text-white pt-4 cursor-pointer rounded-md shadow-lg overflow-hidden transform transition-transform hover:scale-105"
          style={{ backgroundColor: "rgb(15 110 180)" }}
        >
          <small className="flex px-4 items-center gap-2 text-[12px]">
            Total Sales <CiCircleQuestion className="text-[12px]" />
          </small>

          <div className="flex px-4 pb-4 justify-between items-center mt-3">
            <h1 className="text-[16px]" style={{ fontWeight: "550" }}>
              ₹23,92,312.19
            </h1>
            <u className="text-[11px]">23 Orders</u>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
