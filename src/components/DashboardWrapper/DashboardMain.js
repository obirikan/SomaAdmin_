import React from "react";
import HomeTabs from "../HomeTabs";
import NavBar from "./NavBar";

const DashboardMain = ({ children, title }) => {
  return (
    <main className="main flex flex-col flex-grow -ml-64 md:ml-64 transition-all duration-150 ease-in">
      <NavBar title={title}/>
      <div className="main-content flex flex-col flex-grow p-4">
        <div className="flex flex-col flex-grow bg-white rounded mt-4">
          {children}
        </div>
      </div>
    </main>
  );
};

export default DashboardMain;
