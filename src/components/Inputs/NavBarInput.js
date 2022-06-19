import React from "react";
import { ReactComponent as Activation } from "../../assets/svgs/activation.svg";

const NavBarInput = ({ opts }) => {
  return (
    <div className="ml-5 relative">
      <Activation className="absolute top-2.5 left-2.5" />
      <select className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-primary block w-full p-2.5  pl-10">
        {opts.map((ele, i) => {
          return <option key={i}>{ele.text}</option>;
        })}
      </select>
    </div>
  );
};

export default NavBarInput;
