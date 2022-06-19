import React from "react";
import NavBarInput from "../Inputs/NavBarInput";

const NavBar = () => {
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
    <header className="header bg-white shadow py-4 px-4">
      <div className="header-content flex items-center flex-row">
        <span className=" font-semibold text-2xl">Home</span>
        <div className="flex ml-auto items-center">
          <div className="flex items-center justify-between">
            <span className="w-3 h-3 bg-appRed shadow-redShadow  rounded-full block mr-2"></span>
            <span className="font-medium">Test Mode</span>
          </div>
          <NavBarInput opts={options} />

          {/* <a href class="flex flex-row items-center">
            <img
              src="https://pbs.twimg.com/profile_images/378800000298815220/b567757616f720812125bfbac395ff54_normal.png"
              alt
              class="h-10 w-10 bg-gray-200 border rounded-full"
            />
            <span class="flex flex-col ml-2">
              <span class="truncate w-20 font-semibold tracking-wide leading-none">
                John Doe
              </span>
              <span class="truncate w-20 text-gray-500 text-xs leading-none mt-1">
                Manager
              </span>
            </span>
          </a> */}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
