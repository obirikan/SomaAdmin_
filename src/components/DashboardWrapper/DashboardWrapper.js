import React from "react";
import DashboardMain from "./DashboardMain";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";

const DashboardWrapper = () => {
  return (
    <div class="flex flex-row min-h-screen bg-white text-gray-800">
      <Sidebar />
      <DashboardMain />
    </div>
  );
};

export default DashboardWrapper;
