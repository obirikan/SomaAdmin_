import React from "react";
import { ReactComponent as Google } from "../../../assets/svgs/google.svg";
const TwoFactor = () => {
  return (
    <div className="bg-white shadow-companyShadow p-6 mt-7">
      <h3 className="font-semibold mt-5">Personal information</h3>
      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center">
          <Google />
          <span className="ml-5 text-sm">Google Authenticator App</span>
        </div>
        <button
          type="button"
          className="text-white flex bg-primary  font-normal rounded-md text-sm px-3 py-2.5 "
        >
          Activate
        </button>
      </div>
    </div>
  );
};

export default TwoFactor;
