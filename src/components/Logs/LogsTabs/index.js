import React from "react";
import { Tabs } from "flowbite-react";
import ApiLogs from "./ApiLogs";
import Webhooks from "./Webhooks";
import Events from "./Events";

const index = () => {
  return (
    <Tabs.Group aria-label="Tabs with underline" style="underline">
      <Tabs.Item active={true} title="Api Logs">
        <ApiLogs />
      </Tabs.Item>
      <Tabs.Item title="Webhooks">
        <Webhooks />
      </Tabs.Item>
      <Tabs.Item title="Events">
        <Events />
      </Tabs.Item>
    </Tabs.Group>
  );
};

export default index;
