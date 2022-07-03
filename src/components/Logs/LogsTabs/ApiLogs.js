import React, { useState } from "react";
import ApiLogsTable from "../ApiLogsTable";
import { Dropdown } from "flowbite-react";

const ApiLogs = () => {
  const [time, setTime] = useState("Last 6 months");
  const [code, setCode] = useState("All status codes");

  const data = [
    {
      statusCode: 200,
      date: "2022-06-24 18:09",
      request: "Lorem ipsum",
      details: "Lorem ipsum dolait",
    },

    {
      statusCode: 200,
      date: "2022-06-24 18:09",
      request: "Lorem ipsum",
      details: "Lorem ipsum dolait",
    },

    {
      statusCode: 400,
      date: "2022-06-24 18:09",
      request: "Lorem ipsum",
      details: "Lorem ipsum dolait",
    },

    {
      statusCode: 200,
      date: "2022-06-24 18:09",
      request: "Lorem ipsum",
      details: "Lorem ipsum dolait",
    },

    {
      statusCode: 200,
      date: "2022-06-24 18:09",
      request: "Lorem ipsum",
      details: "Lorem ipsum dolait",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">Requests (46)</p>
        <div className="flex">
          <div className="md:mb-0  px-3">
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
          </div>
          <div className="md:mb-0  px-3">
            <Dropdown
              style={{ border: "1px solid black" }}
              color="white"
              label={code}
            >
              <Dropdown.Item onClick={() => setCode("Last 30 days")}>
                Last 30 days
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setCode("Last 7 days")}>
                Last 7 days
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setCode("Last year")}>
                Last year
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </div>
      <ApiLogsTable data={data} />
    </div>
  );
};

export default ApiLogs;
