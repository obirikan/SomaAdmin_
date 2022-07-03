import React from "react";
import { ReactComponent as Lock } from "../../../assets/svgs/lock.svg";

const ResetPassword = () => {
  return (
    <div className="bg-white shadow-companyShadow p-6 mt-7">
      <h3 className="font-semibold mt-5">Reset Password</h3>
      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center">
          <Lock />
          <span className="ml-5 text-sm">••••••••••••</span>
        </div>
        <button
          type="button"
          className="text-white flex bg-primary  font-normal rounded-md text-sm px-3 py-2.5 "
        >
          Change
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
