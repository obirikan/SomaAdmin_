import React from "react";
import BillingOverview from "../components/Billing/BillingOverview";
import DashboardMain from "../components/DashboardWrapper/DashboardMain";

const Billings = () => {
  return (
    <DashboardMain title="Billing">
        <BillingOverview/>
    </DashboardMain>
  );
};

export default Billings;
