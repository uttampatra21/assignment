"use client";

import React, { useEffect, useState } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

const Transactions = () => {
  const [XLSX, setXLSX] = useState(null);

  //  ------------------------- STATIC DATA

  const initialTableData = [
    {
      orderId: "#9876543",
      status: "Successful",
      transactionId: "231234567890",
      refundDate: "20 Jul 2023, 11:30 AM",
      orderAmount: "₹2,300.00",
    },
    {
      orderId: "#4567890",
      status: "Successful",
      transactionId: "231234567891",
      refundDate: "21 Jul 2023, 12:45 PM",
      orderAmount: "₹1,450.00",
    },
    {
      orderId: "#1234567",
      status: "Successful",
      transactionId: "231234567892",
      refundDate: "22 Jul 2023, 01:15 PM",
      orderAmount: "₹3,750.00",
    },
    {
      orderId: "#7890123",
      status: "Successful",
      transactionId: "231234567893",
      refundDate: "23 Jul 2023, 02:00 PM",
      orderAmount: "₹4,800.00",
    },
    {
      orderId: "#3456789",
      status: "Processing",
      transactionId: "231234567894",
      refundDate: "24 Jul 2023, 03:30 PM",
      orderAmount: "₹2,600.00",
    },
    {
      orderId: "#9012345",
      status: "Successful",
      transactionId: "231234567895",
      refundDate: "25 Jul 2023, 04:45 PM",
      orderAmount: "₹5,000.00",
    },
    {
      orderId: "#2345678",
      status: "Processing",
      transactionId: "231234567896",
      refundDate: "26 Jul 2023, 05:15 PM",
      orderAmount: "₹2,900.00",
    },
    {
      orderId: "#6789012",
      status: "Successful",
      transactionId: "231234567897",
      refundDate: "27 Jul 2023, 06:30 PM",
      orderAmount: "₹1,750.00",
    },
    {
      orderId: "#0123456",
      status: "Successful",
      transactionId: "231234567898",
      refundDate: "28 Jul 2023, 07:00 PM",
      orderAmount: "₹3,300.00",
    },
    {
      orderId: "#3456789",
      status: "Processing",
      transactionId: "231234567899",
      refundDate: "29 Jul 2023, 08:15 PM",
      orderAmount: "₹4,400.00",
    },
    {
      orderId: "#6543210",
      status: "Successful",
      transactionId: "231234567800",
      refundDate: "30 Jul 2023, 09:00 PM",
      orderAmount: "₹2,500.00",
    },
    {
      orderId: "#9870123",
      status: "Processing",
      transactionId: "231234567801",
      refundDate: "31 Jul 2023, 10:45 PM",
      orderAmount: "₹1,850.00",
    },
    {
      orderId: "#4567890",
      status: "Successful",
      transactionId: "231234567802",
      refundDate: "01 Aug 2023, 11:30 PM",
      orderAmount: "₹3,200.00",
    },
    {
      orderId: "#3210987",
      status: "Successful",
      transactionId: "231234567803",
      refundDate: "02 Aug 2023, 12:15 AM",
      orderAmount: "₹5,300.00",
    },
    {
      orderId: "#2109876",
      status: "Processing",
      transactionId: "231234567804",
      refundDate: "03 Aug 2023, 01:00 AM",
      orderAmount: "₹2,700.00",
    },
    {
      orderId: "#1098765",
      status: "Successful",
      transactionId: "231234567805",
      refundDate: "04 Aug 2023, 01:45 AM",
      orderAmount: "₹4,100.00",
    },
    {
      orderId: "#0987654",
      status: "Processing",
      transactionId: "231234567806",
      refundDate: "05 Aug 2023, 02:30 AM",
      orderAmount: "₹2,200.00",
    },
    {
      orderId: "#8765432",
      status: "Failed",
      transactionId: "231234567807",
      refundDate: "06 Aug 2023, 03:15 AM",
      orderAmount: "₹1,950.00",
    },
    {
      orderId: "#7654321",
      status: "Successful",
      transactionId: "231234567808",
      refundDate: "07 Aug 2023, 04:00 AM",
      orderAmount: "₹3,500.00",
    },
    {
      orderId: "#6543210",
      status: "Processing",
      transactionId: "231234567809",
      refundDate: "08 Aug 2023, 04:45 AM",
      orderAmount: "₹4,600.00",
    },
  ];

  const [tableData, setTableData] = useState(initialTableData);
  const [originalData] = useState(initialTableData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  //  ------------------------- DOWNLOAD

  useEffect(() => {
    const loadXLSX = async () => {
      const xlsx = await import("xlsx");
      setXLSX(xlsx);
    };

    if (typeof window !== "undefined") {
      loadXLSX();
    }
  }, []);

  const handleDownload = () => {
    if (XLSX) {
      const worksheet = XLSX.utils.json_to_sheet(tableData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");
      XLSX.writeFile(workbook, "TransactionsData.xlsx");
    }
  };

  //  ------------------------- SEARCHING

  const handleSearch = (e) => {
    const searchVal = e.target.value.toLowerCase();
    const filteredData = originalData.filter((item) =>
      item.orderId.includes(searchVal)
    );
    setTableData(filteredData);
    setCurrentPage(1);
  };

  //  ------------------------- SORTING

  const handleSort = (e) => {
    const sortVal = e.target.value;
    let sortedData = [...tableData];

    switch (sortVal) {
      case "Low to High":
        sortedData.sort(
          (a, b) =>
            parseFloat(a.orderAmount.replace(/[^\d.-]/g, "")) -
            parseFloat(b.orderAmount.replace(/[^\d.-]/g, ""))
        );

        break;
      case "High to Low":
        sortedData.sort(
          (a, b) =>
            parseFloat(b.orderAmount.replace(/[^\d.-]/g, "")) -
            parseFloat(a.orderAmount.replace(/[^\d.-]/g, ""))
        );
        break;
      case "Latest to Oldest":
        sortedData.sort(
          (a, b) => new Date(b.refundDate) - new Date(a.refundDate)
        );
        break;
      case "Oldest to Latest":
        sortedData.sort(
          (a, b) => new Date(a.refundDate) - new Date(b.refundDate)
        );
        break;
      default:
        break;
    }

    setTableData(sortedData);
    setCurrentPage(1);
  };

  //  ------------------------- PAGINATION

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="transtion  md:p-6 bg-gray-50">
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between flex-col gap mb-4">
          <h2
            className="text-[18px] text-gray-800 mb-4"
            style={{ fontWeight: "550" }}
          >
            Transactions | This Month
          </h2>
          <div className="flex items-center gap-2">
            <button className="py-1 text-[12px] px-3 bg-gray-200 rounded-full">
              Payouts (22)
            </button>
            <button
              className="py-1 text-[12px] px-3 text-white rounded-full"
              style={{ backgroundColor: "rgb(15 110 180)" }}
            >
              Refunds (6)
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mb-4">
          <input
            onChange={(e) => handleSearch(e)}
            type="number"
            placeholder="Search by order ID..."
            className="w-full md:w-[250px] searchBox px-3 py-2 border rounded-sm cursor-pointer outline-none"
          />
          <div className="flex items-center gap-2">
            <div className="filterBox flex items-center">
              <select
                onChange={(e) => handleSort(e)}
                className="cursor-pointer border border-gray-300 text-gray-700 text-[12px] px-3 py-2 rounded-sm outline-none hover:shadow-md transition-shadow duration-200"
              >
                <option>Sort</option>
                <option value="Low to High">Low to High</option>
                <option value="High to Low">High to Low</option>
                <option value="Latest to Oldest">Latest to Oldest</option>
                <option value="Oldest to Latest">Oldest to Latest</option>
              </select>
            </div>
            <div
              title="Download"
              onClick={handleDownload}
              className="downloadBtn cursor-pointer rounded-sm "
            >
              <MdOutlineFileDownload />
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b">Order ID</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Transaction ID</th>
                <th className="py-2 px-4 border-b">Refund date</th>
                <th className="py-2 px-4 border-b">Order amount</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="py-2 px-4 border-b text-blue-500">
                    {item.orderId}
                  </td>
                  <td className="py-2 px-4 border-b flex items-center gap-2">
                    <span
                      className={`flex items-center gap-1 ${
                        item.status === "Processing"
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 ${
                          item.status === "Processing"
                            ? "bg-red-500"
                            : "bg-green-500"
                        }  rounded-full`}
                      ></span>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b">{item.transactionId}</td>
                  <td className="py-2 px-4 border-b">{item.refundDate}</td>
                  <td className="py-2 px-4 border-b">{item.orderAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end gap-2 items-center mt-4">
          <button
            onClick={handlePrevPage}
            className="rounded-full transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === 1}
          >
            <FaArrowCircleLeft />
          </button>
          <span
            className="text-[12px] text-gray-600"
            style={{ fontWeight: "550" }}
          >
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            className="rounded-full shadow transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === totalPages}
          >
            <FaArrowCircleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
