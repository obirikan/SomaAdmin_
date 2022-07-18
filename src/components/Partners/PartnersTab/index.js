import React from "react";
import { Tabs } from "flowbite-react";
import Register from "./Register";

const index = () => {
  return (
    <Tabs.Group aria-label="Tabs with underline" style="underline">
    <Tabs.Item title="Register">
        <Register />
      </Tabs.Item>
      <Tabs.Item title="Register">
        <Register />
      </Tabs.Item>
      <Tabs.Item title="Register">
        <Register />
      </Tabs.Item>
    </Tabs.Group>
  );
};

export default index;
