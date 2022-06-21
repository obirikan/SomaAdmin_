import React, { useState } from "react";
import { Dropdown } from "flowbite-react";
import { ReactComponent as Export } from "../../assets/svgs/export.svg";
import SelectInput from "../Inputs/SelectInput";
import Indicators from "../Analytics/Indicators";

const Analytics = () => {
  const [time, setTime] = useState("Last 30 days");

  return (
   <div>
     <div className="flex justify-between">
      {/* <SelectInput  opts={days} /> */}
      <Dropdown
        style={{ border: "1px solid black" }}
        color="white"
        label={time}
      >
        <Dropdown.Item onClick={() => setTime("Last 30 days")}>
          Last 30 days
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setTime("Last 7 days")}>
          Last 7 days
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setTime("Last year")}>
          Last year
        </Dropdown.Item>
      </Dropdown>
      <button
        type="button"
        className="text-white flex bg-primary  font-medium rounded-md text-sm px-3 py-2.5 mr-2 mb-2"
      >
        <Export  className="w-3 mr-4"/>
        Export report
      </button>
    </div>
      <Indicators/>
   </div>
  );
};

export default Analytics;
