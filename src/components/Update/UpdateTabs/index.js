import React from "react";
import { Tabs } from "flowbite-react";
import Main from "./Main";

const HomeTabs = () => {
  return (
    <Tabs.Group aria-label="Tabs with underline" style="underline">
      <Tabs.Item title="Update">
        <Main />
      </Tabs.Item>
    </Tabs.Group>
  );
};

export default HomeTabs;