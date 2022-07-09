import React from "react";
import Checkbox from "../../Inputs/Checkbox";
const EmailNotification = () => {
  return (
    <div className="bg-white shadow-companyShadow p-4 mt-7">
      <h3 className="font-semibold mt-5">Email notifications</h3>
      <div className="mt-5">
        <Checkbox text="New verifications" color="appBlack" />
        <Checkbox text="Weekly summaries" color="appBlack" />
        <Checkbox text="Product updates & marketing messages" color="appBlack" />
      </div>
      <button
        type="button"
        className="text-white flex bg-primary  font-normal rounded-md text-sm px-3 py-2.5 mr-2 mb-2 mt-10"
      >
        Update
      </button>
    </div>
  );
};

export default EmailNotification;
