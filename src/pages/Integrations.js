import React from "react";
import DashboardMain from "../components/DashboardWrapper/DashboardMain";
import IntegrationsTabs from "../components/Integrations/IntegrationsTabs";
const Integrations = () => {
  return (
    <DashboardMain title="Integrations">
      <IntegrationsTabs />
    </DashboardMain>
  );
};

export default Integrations;
