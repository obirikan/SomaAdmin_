import React from "react";
import DashboardMain from "../components/DashboardWrapper/DashboardMain";
import ActivationTabs from '../components/Activation/ActivationTabs'
const Activation = () => {
  return (
    <DashboardMain title="Activation">
      <ActivationTabs />
    </DashboardMain>
  );
};

export default Activation;
