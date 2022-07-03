import React from "react";
import DashboardMain from "../components/DashboardWrapper/DashboardMain";
import SettingsTabs from "../components/Settings/SettingsTabs";

const Settings = () => {
  return (
    <DashboardMain title="Settings">
      <SettingsTabs/>
    </DashboardMain>
  );
};

export default Settings;
