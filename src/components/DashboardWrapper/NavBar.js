import React from "react";
import NavBarInput from "../Inputs/NavBarInput";

const NavBar = ({ title }) => {
  const options = [
    {
      text: "Yellow Solution",
      value: "yellow",
    },
    {
      text: "Red Solution",
      value: "red",
    },
    {
      text: "Black Solution",
      value: "black",
    },
  ];
  return (
    <header className="header bg-white shadow py-4 px-4 ">
      <div className="header-content flex items-center flex-row">
        <span className=" font-semibold text-2xl">{title}</span>
        <div className="flex ml-auto items-center">
          <div className="flex items-center justify-between">
            <span className="w-3 h-3 bg-appRed shadow-redShadow  rounded-full block mr-2"></span>
            <span className="font-medium">Test Mode</span>
          </div>
          <NavBarInput opts={options} />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
