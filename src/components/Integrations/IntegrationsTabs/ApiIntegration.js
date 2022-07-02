import React from "react";
import { ReactComponent as BlueArrow } from "../../../assets/svgs/blue-arrow.svg";
import { ReactComponent as BlueCopy } from "../../../assets/svgs/blue-copy.svg";

const ApiIntegration = () => {
  const langs = ["Node", "Python", "Java", "Go", "Ruby", "PHP"];

  const code = `
  {
    "event": "VERIFICATION_COMPLETED",
    "key": "b76e244e-26a3-49ef-9c72-3e599bf0b5f2",
    "status": "pending",
    "created": 1582628711,
    "updated": 1582628999,
    "processed": 1582628999,
  }`;

  return (
    <div className="w-full m-auto md:w-[41rem] ">
      <div>
        <span className="flex items-center">
          <BlueArrow />
          <span className="text-primary ml-2 text-sm cursor-pointer  x">
            Back
          </span>
        </span>
        <h3 className="font-semibold mt-5">
          Get started with server-side SDKs
        </h3>
        <p className="mt-5 text-sm font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut.
        </p>
        <div className="flex justify-evenly  mt-6 mb-10">
          {langs.map((ele, i) => {
            return (
              <span
                key={i}
                className="p-2 bg-white shadow-clientShadow text-sm inline-block rounded cursor-pointer"
              >
                {ele}
              </span>
            );
          })}
        </div>
      </div>
      <p className="mt-5 text-sm font-medium mb-5">
        {` 1. Add @rattify/node npm package to your package.json. Rattify has no
        dependency but expects node version to be >=12.x`}
      </p>
      <div className="bg-white shadow-companyShadow p-6 mb-10">
        <span className="code-content ml-5">{`{`}</span>
        <span className="code-content ml-5">{`"event": "VERIFICATION_COMPLETED",`}</span>
        <span className="code-content ml-5">{`"key": "b76e244e-26a3-49ef-9c72-3e599bf0b5f2",`}</span>
        <span className="code-content ml-5">{`"status": "pending"`}</span>
        <span className="code-content ml-5">{`"created": 1582628711`}</span>
        <span className="code-content ml-5">{`"updated": 1582628999`}</span>
        <span className="code-content ml-5">{`"processed": 1582628999`}</span>
        <span className="code-content ml-5">{`}`}</span>
      </div>

      <p className="mt-5 text-sm font-medium mb-5">
        2. Import RattifyClient, RattifyConfiguration from @rattify/node in your
        app
      </p>
      <div className="bg-white shadow-companyShadow p-6 relative">
        <span className="absolute right-10 p-2 text-primary font-medium flex items-center w-fit bg-white shadow-companyShadow rounded cursor-pointer">
          <BlueCopy className="mr-2" />
          Code
        </span>
        <span className="code-content ml-5">{`{`}</span>
        <span className="code-content ml-5">{`"event": "VERIFICATION_COMPLETED",`}</span>
        <span className="code-content ml-5">{`"key": "b76e244e-26a3-49ef-9c72-3e599bf0b5f2",`}</span>
        <span className="code-content ml-5">{`"status": "pending"`}</span>
        <span className="code-content ml-5">{`"created": 1582628711`}</span>
        <span className="code-content ml-5">{`"updated": 1582628999`}</span>
        <span className="code-content ml-5">{`"processed": 1582628999`}</span>
        <span className="code-content ml-5">{`}`}</span>
      </div>

      <button
        type="button"
        className="text-white flex bg-primary  font-medium rounded-md text-sm px-3 py-2.5 mr-2 mt-10 "
      >
        Create
      </button>
    </div>
  );
};

export default ApiIntegration;
