import React from "react";
import { Tabs } from "flowbite-react";
import Profile from "./Profile";
import Company from "./Company";
import Team from "./Team";
import Preferences from "./Preferences";
import Webhooks from "./Webhooks";



const SettingsTabs = () => {
  return (
    <Tabs.Group aria-label="Tabs with underline" style="underline">
      <Tabs.Item active={true} title="Profile">
        <Profile />
      </Tabs.Item>
      <Tabs.Item title="Company">
        <Company />
      </Tabs.Item>
      <Tabs.Item title="Team">
        <Team />
      </Tabs.Item>
      <Tabs.Item title="Preferences">
        <Preferences />
      </Tabs.Item>
      <Tabs.Item title="Webhooks">
        <Webhooks />
      </Tabs.Item>
    </Tabs.Group>
  );
};

export default SettingsTabs;
