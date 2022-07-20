import React from "react";
import { Tabs } from "flowbite-react";
import Universites from "./Universities";
import Verifications from "./ViewUni";
import TransactionTable from "./TransactionTable";
import Details from "./Details";
const HomeTabs = () => {
  return (
    <Tabs.Group aria-label="Tabs with underline" style="underline">
      <Tabs.Item active={true} title="Users">
      <TransactionTable/>
      </Tabs.Item>
      <Tabs.Item title="View Universites">
        <Details/>
      </Tabs.Item>
    </Tabs.Group>
  );
};

export default HomeTabs;
