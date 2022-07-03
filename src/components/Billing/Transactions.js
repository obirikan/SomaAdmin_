import React, { useState } from "react";
import { ReactComponent as ChevronRight } from "../../assets/svgs/chevron-gray-right.svg";
import { Dropdown } from "flowbite-react";
import TransactionTable from "./TransactionTable";

const Transactions = () => {
  const [time, setTime] = useState("Last 6 months");

  return (
    <div>
      <div className="flex items-center">
        <span className=" text-sm font-normal  mr-2 cursor-pointer pl-4 text-appGray">
          Billing overview
        </span>
        <ChevronRight />
        <span className=" text-sm font-normal  mr-2  pl-4 ">Transactions</span>
      </div>
      <Dropdown
        style={{ border: "1px solid black", marginTop: "60px" }}
        color="white"
        label={time}
      >
        <Dropdown.Item onClick={() => setTime("Last 6 months")}>
          Last 6 months
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setTime("Last 7 days")}>
          Last 7 days
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setTime("Last year")}>
          Last year
        </Dropdown.Item>
      </Dropdown>


      <TransactionTable/>
    </div>
  );
};

export default Transactions;
