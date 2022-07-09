import React from "react";
import WebhooksTable from "../Webhooks/WebhooksTable";

const Webhooks = () => {
  const data = [
    {
      url: "Lorem ipsum",
      status: "Lorem ipsum",
    },
  ];
  return (
    <div className="w-full m-auto md:w-[36rem]">
      <div className="bg-white shadow-companyShadow p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Webhooks</h3>
          <button
            type="button"
            className="text-white flex bg-primary  font-normal rounded-md text-xs px-3 py-2.5 "
          >
            Add
          </button>
        </div>
        <WebhooksTable data={data} />
      </div>
    </div>
  );
};

export default Webhooks;
