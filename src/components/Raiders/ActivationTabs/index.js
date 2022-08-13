import React from "react";
import { Tabs } from "flowbite-react";
import Company from "./Company";
import Billing from "./Billing";
const HomeTabs = () => {
  return (
    <Tabs.Group aria-label="Tabs with underline" style="underline">
      <Tabs.Item title="Add Riders">
        <Company />
      </Tabs.Item>
      <Tabs.Item title="View Riders">
        <Billing />
      </Tabs.Item>
    </Tabs.Group>
  );
};

export default HomeTabs;
