import React from "react";
import { Tabs } from "flowbite-react";
import Register from "./Register";
import ViewPartners from "./ViewPartners";

const index = () => {
  return (
    <Tabs.Group aria-label="Tabs with underline" style="underline">
       <Tabs.Item title="Register Partners">
        <Register />
      </Tabs.Item>
      <Tabs.Item title="View Registered Partners">
        <ViewPartners />
      </Tabs.Item>
    </Tabs.Group>
  );
};

export default index;
