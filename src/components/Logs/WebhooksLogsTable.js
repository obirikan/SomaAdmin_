import React from "react";

const WebhooksLogsTable = ({ data = [], labels = [] }) => {
  // labels.map((ele)=> console.log(ele))
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
          <tr>
            {labels?.map((ele, i) => {
              return (
                <th
                  key={i}
                  scope="col"
                  className="px-6 py-3 text-appGrey font-medium"
                >
                  {ele}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((ele, i) => {
            return (
              <tr key={i} className="bg-white ">
                <td className="px-6 py-4 text-black" scope="row">
                  <span
                    className={`px-3 py-2 rounded-3xl flex items-center justify-center w-fit capitalize text-sm ${
                      ele.statusCode === 200 ? "bg-statusGreen" : "bg-statusRed"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full mr-2 block ${
                        ele.statusCode === 200 ? "bg-appGreen" : "bg-appRed"
                      }`}
                    ></span>
                    {ele.statusCode}
                  </span>
                </td>
                <td className="px-6 py-4 text-black">{ele.date}</td>
                <td className="px-6 py-4 text-black">
                  {ele.eventType}
                </td>
                <td className="px-6 py-4 text-black">
                  {ele.endpoint}
                </td>
                <td className="px-6 py-4 text-black">{ele.responseTime}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <Pagination /> */}
    </div>
  );
};

export default WebhooksLogsTable;
