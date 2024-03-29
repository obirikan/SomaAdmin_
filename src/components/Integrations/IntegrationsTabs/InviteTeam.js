import React from "react";
import { ReactComponent as BlueArrow } from "../../../assets/svgs/blue-arrow.svg";
import InviteTeamForm from "../InviteTeam/InviteTeamForm";

const InviteTeam = () => {
  return (
    <div className="w-full m-auto md:w-[25rem] bg-white shadow-companyShadow p-6 ">
      <h3 className="font-semibold mt-5">Add Categories</h3>
      <p className="mt-3 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut.
      </p>
      <InviteTeamForm/>
    </div>
  );
};

export default InviteTeam;
