import { Checkbox } from "flowbite-react";
import React from "react";
import { ReactComponent as BlueArrow } from "../../../assets/svgs/blue-arrow.svg";
import SelectInput from "../../Inputs/SelectInput";
import TextInput from "../../Inputs/TextInput";

const ActivateWebhooks = () => {
  const hooks = [
    "Verification completed",
    "Verification reviewed",
    "Datapoint updated",
  ];

  const code = `
  {
    "event": "VERIFICATION_COMPLETED",
    "key": "b76e244e-26a3-49ef-9c72-3e599bf0b5f2",
    "status": "pending",
    "created": 1582628711,
    "updated": 1582628999,
    "processed": 1582628999,
  }`;

  const options = [
    {
      text: "application/json",
      value: "json",
    },
    {
      text: "application/content",
      value: "html",
    },
  ];
  return (
    <div className="w-full m-auto md:w-[35rem] ">
      <div>
        <span className="flex items-center">
          <BlueArrow />
          <span className="text-primary ml-2 text-sm cursor-pointer  x">
            Back
          </span>
        </span>
        <h3 className="font-semibold mt-5">
          Set up webhooks to receive updates about your verifications
        </h3>
        <p className="mt-5 text-sm font-medium">
          Choose the webhook events you want to receive
        </p>
        <div className="flex justify-evenly  mt-6 mb-10">
          {hooks.map((ele, i) => {
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
      <p className="mt-5 text-sm font-medium mb-10">Webhook payload example</p>
      <div className="bg-white shadow-companyShadow p-6 ">
        <span className="code-content ml-5">{`{`}</span>
        <span className="code-content ml-5">{`"event": "VERIFICATION_COMPLETED",`}</span>
        <span className="code-content ml-5">{`"key": "b76e244e-26a3-49ef-9c72-3e599bf0b5f2",`}</span>
        <span className="code-content ml-5">{`"status": "pending"`}</span>
        <span className="code-content ml-5">{`"created": 1582628711`}</span>
        <span className="code-content ml-5">{`"updated": 1582628999`}</span>
        <span className="code-content ml-5">{`"processed": 1582628999`}</span>
        <span className="code-content ml-5">{`}`}</span>
      </div>

      <div className="bg-white shadow-companyShadow p-6  mt-10">
        <TextInput
          className="w-full"
          placeholder="https://www.yourcompany.com/webhooks"
          label="Webhook endpoint (POST)"
          type="url"
        />
        <TextInput
          className="w-full"
          placeholder="secret"
          label="Webhook secret (optional)"
          type="text"
        />
        <SelectInput
          className="w-full "
          label="Webhook secret (optional)"
          opts={options}
        />
        <Checkbox />
        <span className="text-appGray text-xs ml-2">Active</span>
        <div className="flex mt-10 mb-2">
          <button
            type="button"
            className="text-white flex bg-primary  font-medium rounded-md text-sm px-3 py-2.5 mr-2 "
          >
            Create
          </button>
          <button
            type="button"
            className=" flex bg-none text-black  font-medium rounded-md text-sm px-3 py-2.5 mrl-2"
          >
            Skip this step
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivateWebhooks;
