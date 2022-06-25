import React from "react";
import { Tabs } from "flowbite-react";
import Analytics from "./Analytics";
import Verifications from "./Verifications";
const HomeTabs = () => {
  return (
    <Tabs.Group aria-label="Tabs with underline" style="underline">
      <Tabs.Item active={true} title="Analytics">
        <Analytics />
      </Tabs.Item>
      <Tabs.Item title="Verifications"><Verifications/></Tabs.Item>
    </Tabs.Group>
  );
};

export default HomeTabs;
