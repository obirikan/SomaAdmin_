import React from "react";

const WebhooksTable = ({ data }) => {
  const labels = ["Url", "Status"];

  return (
    <table className="w-full text-sm text-left text-gray-500 ">
      <thead className="text-xs text-gray-700 uppercase  border-b">
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
              <td className="px-6 py-4 text-black">{ele.url}</td>
              <td className="px-6 py-4 text-black">{ele.status}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default WebhooksTable;
