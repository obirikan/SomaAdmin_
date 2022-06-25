import React from "react";
import DashboardMain from "../components/DashboardWrapper/DashboardMain";
import NavBar from "../components/DashboardWrapper/NavBar";
import HomeTabs from "../components/HomeTabs";

const Home = () => {
  return (
    <DashboardMain>
      <HomeTabs />
    </DashboardMain>
  );
};

export default Home;
