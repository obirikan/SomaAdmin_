import React from "react";
import { Tabs } from "flowbite-react";
import Universites from "./Universities";
import Verifications from "./ViewUni";
const HomeTabs = () => {
  return (
    <Tabs.Group aria-label="Tabs with underline" style="underline">
      <Tabs.Item active={true} title="Add Universities">
        <Universites />
      </Tabs.Item>
      <Tabs.Item title="View Universites"><Verifications/></Tabs.Item>
    </Tabs.Group>
  );
};

export default HomeTabs;
