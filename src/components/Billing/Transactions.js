import React, { useState } from "react";
import { Tabs } from "flowbite-react";
import TransactionTable from "./TransactionTable";

const Transactions = () => {
  return (
    <div>
      <div className="flex items-center">
        lorem doorsit amet
      </div>
      <Tabs.Group aria-label="Tabs with underline" style="underline">
      <Tabs.Item active={true} title="Users">
      <TransactionTable/>
      </Tabs.Item>
    </Tabs.Group>
      
    </div>
  );
};

export default Transactions;
