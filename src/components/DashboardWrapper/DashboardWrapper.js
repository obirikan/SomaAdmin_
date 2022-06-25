import React from "react";
import DashboardMain from "./DashboardMain";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
const DashboardWrapper = () => {
  return (
    <div className="flex flex-row min-h-screen bg-white text-gray-800">
      <Sidebar />
      {/* <DashboardMain /> */}
      <Outlet />
    </div>
  );
};

export default DashboardWrapper;
