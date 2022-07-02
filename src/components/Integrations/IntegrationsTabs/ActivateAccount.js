import React from "react";
import { ReactComponent as BlueArrow } from "../../../assets/svgs/blue-arrow.svg";

const ActivateAccount = () => {
  return (
    <div className="w-full m-auto md:w-[24rem] mt-10">
      <span className="flex items-center">
        <BlueArrow />
        <span className="text-primary ml-2 text-sm cursor-pointer x">Back</span>
      </span>
      <h3 className="font-semibold mt-5">
        Activate your production environment
      </h3>
      <p className="mt-5 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut.
      </p>
      <button
        type="button"
        className="text-white flex bg-primary  font-normal rounded-md text-sm px-3 py-2.5 mr-2 mb-2 mt-10"
      >
        <span className="flex justify-center items-center">Get started</span>
      </button>
    </div>
  );
};

export default ActivateAccount;
