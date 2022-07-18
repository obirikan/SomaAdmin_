import React from "react";
import DashboardMain from "../components/DashboardWrapper/DashboardMain";
import PartnerTabs from '../components/Partners/PartnersTab'
const Logs = () => {
  return (
    <DashboardMain title="Partners">
      <PartnerTabs />
    </DashboardMain>
  );
};

export default Logs;
