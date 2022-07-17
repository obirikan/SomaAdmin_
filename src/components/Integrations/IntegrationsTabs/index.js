import React from "react";
import { Tabs } from "flowbite-react";

import InviteTeam from "./InviteTeam";
const index = () => {
  return (
    <Tabs.Group aria-label="Tabs with underline" style="underline">
      <Tabs.Item title="Add Category">
        <InviteTeam />
      </Tabs.Item>
    </Tabs.Group>
  );
};

export default index;
