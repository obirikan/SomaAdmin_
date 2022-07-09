import React from "react";
import TeamTable from "../Team/TeamTable";

const Team = () => {
  const data = [
    {
      email: "john@yellow.com",
      role: "Admin",
    },
  ];
  return (
    <div className="w-full m-auto md:w-[35rem] ">
      <div className="bg-white shadow-companyShadow p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Team</h3>
          <button
            type="button"
            className="text-white flex bg-primary  font-normal rounded-md text-xs px-3 py-2.5 "
          >
            Update
          </button>
        </div>
        <TeamTable data={data} />
      </div>
    </div>
  );
};

export default Team;
