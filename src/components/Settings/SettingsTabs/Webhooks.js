import React from "react";
import WebhooksTable from "../Webhooks/WebhooksTable";
import { useAuth } from "../../../context/authContext";

const Webhooks = () => {
  const {logout}=useAuth()
  const data = [
    {
      url: "Lorem ipsum",
      status: "Lorem ipsum",
    },
  ];

  const handle=async()=>{
    try {
        await logout()
    } catch (error) {
        console.log(error)
    }
}

  return (
    <div className="w-full m-auto md:w-[36rem]">
      <div className="bg-white shadow-companyShadow p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">logOut</h3>
          <button
            type="button"
            className="text-white flex bg-primary  font-normal rounded-md text-xs px-3 py-2.5 "
            onClick={handle}
          >
            logout
          </button>
        </div>
        <WebhooksTable data={data} />
      </div>
    </div>
  );
};

export default Webhooks;
