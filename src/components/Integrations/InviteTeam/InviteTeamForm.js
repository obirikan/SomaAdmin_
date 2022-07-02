import React from "react";
import { ReactComponent as BlueArrow } from "../../../assets/svgs/blue-arrow.svg";
import SelectInput from "../../Inputs/SelectInput";
import TextInput from "../../Inputs/TextInput";

const InviteTeamForm = () => {
  const options = [
    {
      text: "Admin",
      value: "admin",
    },
    {
      text: "Viewer",
      value: "viewer",
    },
  ];
  return (
    <form className="mt-5">
      <TextInput
        className="w-full"
        placeholder="Enter full name"
        label="Full name"
        type="text"
      />
      <TextInput
        className="w-full"
        placeholder="employee@company.com"
        label="Email address"
        type="text"
      />
      <SelectInput className="w-full   " label="Role" opts={options} />
      <div className="flex mt-10 mb-2">
        <button
          type="button"
          className="text-white flex bg-primary  font-medium rounded-md text-sm px-3 py-2.5 mr-2 "
        >
          Send invite
        </button>
        <button
          type="button"
          className=" flex bg-none text-black  font-medium rounded-md text-sm px-3 py-2.5 mrl-2"
        >
          Skip this step
        </button>
      </div>
    </form>
  );
};

export default InviteTeamForm;
