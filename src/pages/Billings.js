import React from "react";

import Transactions from "../components/Billing/Transactions";
import DashboardMain from "../components/DashboardWrapper/DashboardMain";
import Details from "../components/Billing/Details";

const Billings = () => {
  return (
    <DashboardMain title="Billing">
        <Transactions/>
    </DashboardMain>
  );
};

export default Billings;
