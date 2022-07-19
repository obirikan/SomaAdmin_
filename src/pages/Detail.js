import React from "react";

import Transactions from "../components/Billing/Transactions";
import DashboardMain from "../components/DashboardWrapper/DashboardMain";
import Index from '../components/Detail/Index'

const Detail= () => {
  return (
    <DashboardMain title="User Detail">
         <Index/>
    </DashboardMain>
  );
};

export default Detail;