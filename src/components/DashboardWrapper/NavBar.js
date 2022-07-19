import React from "react";


const NavBar = ({ title }) => {
  return (
    <header className=" bg-black text-white shadow py-6 px-4 ">
      <div className="header-content flex items-center flex-row">
        <span className=" font-semibold text-2xl">{title}</span>
      </div>
    </header>
  );
};

export default NavBar;
