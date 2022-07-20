import React, { useState } from "react";
import { Tabs } from "flowbite-react";
import Details from "./Details";
import TransactionTable from "../Billing/TransactionTable";

const Index = () => {
  return (
    <div>
      <Tabs.Group aria-label="Tabs with underline" style="underline">
      <Tabs.Item active={true} title="Details">
        <Details/>
      </Tabs.Item>
      {/* <Tabs.Item active={true} title="Users">
        <Details/>
      </Tabs.Item> */}
    </Tabs.Group>
    </div>
  );
};

export default Index;
