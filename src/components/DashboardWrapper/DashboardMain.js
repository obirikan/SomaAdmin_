import React from "react";
import NavBar from "./NavBar";

const DashboardMain = () => {
  return (
    <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
      <NavBar />
      <div className="main-content flex flex-col flex-grow p-4">
        <h1 className="font-bold text-2xl text-gray-700">Dashboard</h1>
        <div className="flex flex-col flex-grow bg-white rounded mt-4">
          Main
        </div>
      </div>
    </main>
  );
};

export default DashboardMain;
