import React from "react";
import { Tabs } from "flowbite-react";
import GetStarted from "./GetStarted";
import Company from "./Company";
import CompleteActivation from "./CompleteActivation";
import Billing from "./Billing";
const HomeTabs = () => {
  return (
    <Tabs.Group aria-label="Tabs with underline" style="underline">
      <Tabs.Item active={true} title="Get started">
        <GetStarted />
      </Tabs.Item>
      <Tabs.Item title="Company">
        <Company />
      </Tabs.Item>
      <Tabs.Item title="Billing">
        <Billing />
      </Tabs.Item>
      <Tabs.Item title="Complete activation">
        <CompleteActivation />
      </Tabs.Item>
    </Tabs.Group>
  );
};

export default HomeTabs;
