import React from "react";
import { Tabs } from "flowbite-react";
const HomeTabs = () => {
  return (
    <Tabs.Group aria-label="Tabs with underline" style="underline">
      <Tabs.Item active={true}  title="Analytics">Analytics</Tabs.Item>
      <Tabs.Item title="Verifications">
        Verifications
      </Tabs.Item>
    </Tabs.Group>
  );
};

export default HomeTabs;
