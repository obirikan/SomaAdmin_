import React from "react";
import DashboardMain from "../components/DashboardWrapper/DashboardMain";
import HomeTabs from "../components/HomeTabs";

const Home = () => {
  return (
    <DashboardMain title="Universities">
      <HomeTabs />
    </DashboardMain>
  );
};

export default Home;
