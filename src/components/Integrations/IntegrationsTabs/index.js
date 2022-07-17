import React from "react";
import { Tabs } from "flowbite-react";

import InviteTeam from "./InviteTeam";
import ViewCategory from './ViewCategory'

const index = () => {
  return (
    <Tabs.Group aria-label="Tabs with underline" style="underline">
      <Tabs.Item title="Add Category">
        <InviteTeam />
      </Tabs.Item>
      <Tabs.Item title="View Category">
        <ViewCategory/>
      </Tabs.Item>
    </Tabs.Group>
  );
};

export default index;
