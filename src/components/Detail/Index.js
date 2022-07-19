import React, { useState } from "react";
import { Tabs } from "flowbite-react";
import { ReactComponent as ChevronRight } from "../../assets/svgs/chevron-gray-right.svg";
import TransactionTable from "./TransactionTable";
import Details from "./Details";

const Transactions = () => {
  return (
    <div>
      <div className="flex items-center">
        lorem doorsit amet
      </div>
      <Tabs.Group aria-label="Tabs with underline" style="underline">
      <Tabs.Item active={true} title="details">
      <Details/>
      </Tabs.Item>
    </Tabs.Group>
      
    </div>
  );
};

export default Transactions;
