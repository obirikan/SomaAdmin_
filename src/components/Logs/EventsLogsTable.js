import React from "react";

const EventsLogsTable = ({ data }) => {
  const labels = ["Event ID", "Date", "Event type", "Event", "Details"];

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
                  {ele.eventId}
                </td>
                <td className="px-6 py-4 text-black">{ele.date}</td>
                <td className="px-6 py-4 text-black">{ele.eventType}</td>
                <td className="px-6 py-4 text-black">{ele.event}</td>
                <td className="px-6 py-4 text-black">{ele.details}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <Pagination /> */}
    </div>
  );
};

export default EventsLogsTable;
