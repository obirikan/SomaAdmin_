import React from "react";
import { ReactComponent as BlueCopy } from "../../../assets/svgs/blue-copy.svg";
import { ReactComponent as ChevronBlueRight } from "../../../assets/svgs/chevron-blue-right.svg";
const Sandbox = () => {
  return (
    <div>
      <h3 className="font-semibold mt-5">Get started in sandbox mode</h3>
      <p className="mt-5 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut.
      </p>
      <div className="bg-white shadow-companyShadow p-6 mt-5">
        <h3 className="font-semibold ">Your Sandbox Credentials</h3>
        <p className="text-appGray text-sm mt-4 font-normal">
          Publishable API Key
        </p>
        <div className="bg-sidebarColor rounded p-4 mt-2 cursor-pointer flex justify-between">
          <span>Ga7qtz1Qma26KKspVNxdZLZNu4XbKspVNxdZL...</span>
          <span className="text-primary text-sm font-medium flex items-center justify-between">
            <BlueCopy className="mr-1" />
            Copy
          </span>
        </div>
        <p className="text-appGray text-sm mt-4 font-normal">Secret API Key</p>
        <div className="bg-sidebarColor rounded p-4 mt-2 cursor-pointer flex justify-between">
          <span>••••••••••••••••••••••••••••••••••••••••••</span>
          <span className="text-primary text-sm font-medium flex items-center justify-between">
            <BlueCopy className="mr-1" />
            Copy
          </span>
        </div>
        <p className="mt-8 text-sm text-primary flex  items-center cursor-pointer">
          See Documentation
          <ChevronBlueRight className="ml-3" />
        </p>
      </div>
    </div>
  );
};

export default Sandbox;
