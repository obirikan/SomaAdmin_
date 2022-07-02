import React from "react";
import Integration from "../GetStarted/Integration";
import Sandbox from "../GetStarted/Sandbox";
import VerificationLink from "../GetStarted/VerificationLink";
import { ReactComponent as WhiteArrowRight } from "../../../assets/svgs/white-arrow-right.svg";

const GetStarted = () => {
  return (
    <div className="w-full m-auto md:w-[44rem] ">
      <Sandbox />
      <Integration />
      <VerificationLink />
      <button
        type="button"
        className="text-white flex bg-primary  font-medium rounded-md text-sm px-3 py-2.5 mr-2 mb-2 mt-10"
      >
        <span className="flex justify-center items-center">
          Next <WhiteArrowRight className="ml-2" />
        </span>
      </button>
    </div>
  );
};

export default GetStarted;
