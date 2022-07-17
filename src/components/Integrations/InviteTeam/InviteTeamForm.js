import React from "react";
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
        placeholder="Grocery"
        label="Category name"
        type="text"
      />
      <TextInput
        className="w-full"
        placeholder="employee@company.com"
        label="Email address"
        type="text"
      />
      <div className="flex mt-10 mb-2">
        <button
          type="button"
          className="text-white flex bg-primary  font-medium rounded-md text-sm px-3 py-2.5 mr-2 "
        >
          ADD
        </button>
      </div>
    </form>
  );
};

export default InviteTeamForm;
