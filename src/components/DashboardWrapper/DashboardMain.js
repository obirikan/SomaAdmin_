import React from "react";
import NavBar from "./NavBar";

const DashboardMain = () => {
  return (
    <main class="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
      <NavBar />
      <div class="main-content flex flex-col flex-grow p-4">
        <h1 class="font-bold text-2xl text-gray-700">Dashboard</h1>
        <div class="flex flex-col flex-grow bg-white rounded mt-4">
          Main
        </div>
      </div>
    </main>
  );
};

export default DashboardMain;
