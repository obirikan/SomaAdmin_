import React from "react";
import DashboardMain from "../components/DashboardWrapper/DashboardMain";
import HomeTabs from "../components/UniversityTabs";

const Home = () => {
  return (
    <DashboardMain title="Universities">
      <HomeTabs />
    </DashboardMain>
  );
};

export default Home;
