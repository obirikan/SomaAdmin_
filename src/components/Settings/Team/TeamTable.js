import React from "react";

const TeamTable = ({ data }) => {
  const labels = ["Email", "Role", "Action"];
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
              <td className="px-6 py-4 text-black">{ele.email}</td>
              <td className="px-6 py-4 text-black">{ele.role}</td>
              <td className="px-6 py-4 text-black">
                <span className="text-xs p-2 border-2 rounded cursor-pointer border-appGrey">
                  Edit
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TeamTable;
