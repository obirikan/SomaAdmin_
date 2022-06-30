import React from "react";
import { Tabs } from "flowbite-react";

import GetStarted from "./GetStarted";
import InviteTeam from "./InviteTeam";
import ActivateWebhooks from "./ActivateWebhooks";
import ApiIntegration from "./ApiIntegration";
import ActivateAccount from "./ActivateAccount";
const index = () => {
  return (
    <Tabs.Group aria-label="Tabs with underline" style="underline">
      <Tabs.Item active={true} title="Get started">
        <GetStarted />
      </Tabs.Item>
      <Tabs.Item title="Invite team">
        <InviteTeam />
      </Tabs.Item>
      <Tabs.Item title="Activate webhooks">
        <ActivateWebhooks />
      </Tabs.Item>
      <Tabs.Item title="API integration">
        <ApiIntegration />
      </Tabs.Item>
      <Tabs.Item title="Activate account">
        <ActivateAccount />
      </Tabs.Item>
    </Tabs.Group>
  );
};

export default index;
