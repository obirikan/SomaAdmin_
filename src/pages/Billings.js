import React from "react";
import BillingOverview from "../components/Billing/BillingOverview";
import Transactions from "../components/Billing/Transactions";
import DashboardMain from "../components/DashboardWrapper/DashboardMain";

const Billings = () => {
  return (
    <DashboardMain title="Billing">
        {/* <BillingOverview/> */}
        <Transactions/>
    </DashboardMain>
  );
};

export default Billings;
