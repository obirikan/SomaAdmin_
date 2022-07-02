import React from "react";
import { ReactComponent as BlueCopy } from "../../../assets/svgs/blue-copy.svg";

const VerificationLink = () => {
  return (
    <div className="bg-white shadow-clientShadow relative p-6 mt-5">
      <h3 className="font-semibold ">Your Personal Verification Link</h3>
      <p className="mt-5 text-sm">
        Rather than integrating with your product, you can use this personal
        link to let users go through verification. Just copy and open it in your
        browser to try it out yourself.
      </p>

      <p className="text-appGray text-sm mt-4 font-normal">Personal link</p>
      <div className="bg-sidebarColor rounded p-4 mt-2 cursor-pointer flex justify-between">
        <span>verify.rattify.com/yellow-f4a9806d</span>
        <span className="text-primary text-sm font-medium flex items-center justify-between">
          <BlueCopy className="mr-1" />
          Copy
        </span>
      </div>
    </div>
  );
};

export default VerificationLink;
