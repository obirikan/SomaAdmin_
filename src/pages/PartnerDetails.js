import React from "react";
import DashboardMain from "../components/DashboardWrapper/DashboardMain";
import PartnerDetails from '../components/PartnerDetails/PartnerDetailsTab'
const Logs = () => {
  return (
    <DashboardMain title="Partners Details">
      <PartnerDetails />
    </DashboardMain>
  );
};

export default Logs;
