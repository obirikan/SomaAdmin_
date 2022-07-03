import React from "react";
import DashboardMain from "../components/DashboardWrapper/DashboardMain";
import LogsTabs from '../components/Logs/LogsTabs'
const Logs = () => {
  return (
    <DashboardMain title="Logs">
      <LogsTabs />
    </DashboardMain>
  );
};

export default Logs;
