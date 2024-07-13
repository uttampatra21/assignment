import React from "react";
import TransactionsData from "./components/Transactions";
import Overview from "./components/Overview";

const Page: React.FC = (props) => {
  return (
    <div className="p-4 w-full h-[90vh] overflow-y-scroll">
      <Overview />
      <TransactionsData />
    </div>
  );
};

export default Page;
