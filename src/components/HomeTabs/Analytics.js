import React, { useState } from "react";
import { Dropdown } from "flowbite-react";
import { ReactComponent as Export } from "../../assets/svgs/export.svg";
import { ReactComponent as GreenArrow } from "../../assets/svgs/green-arrow.svg";
import { ReactComponent as GreyArrow } from "../../assets/svgs/grey-arrow.svg";
import SelectInput from "../Inputs/SelectInput";
import Indicators from "../Analytics/Indicators";
import Chart from "../Analytics/Chart";

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
          <Export className="w-3 mr-4" />
          Export report
        </button>
      </div>
      <Indicators />
      <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 mt-20">
        <div className="border-2 h-80 rounded">
          <div className="flex justify-between p-7 items-end">
            <p>
              <p>API Calls</p>
              <span className="font-semibold">182</span>
            </p>
            <p className="text-appGreen font-semibold flex items-center">
              <GreenArrow className="mr-2" />
              23%
            </p>
          </div>
          <Chart />
        </div>

        <div className="border-2 h-80 rounded">
          <div className="flex justify-between p-7 items-end">
            <p>
              <p>Cost Incurred</p>
              <span className="font-semibold">$808.57</span>
            </p>
            <p className="text-appGrey font-semibold flex items-center">
              <GreyArrow className="mr-2" />
              0%
            </p>
          </div>
          <Chart />
        </div>
      </div>
      <button
        type="button"
        className="text-white flex bg-primary  font-medium rounded-md text-sm px-3 py-2.5 mr-2 mb-2 mt-10"
      >
        See API Documentation
      </button>
    </div>
  );
};

export default Analytics;
