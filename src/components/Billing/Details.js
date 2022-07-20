import React from "react";
import Pagination from "./Details";

const Details= () => {
  const data = [
    {
      date: "1 - 30 Jun, 2022",
      description: "Rattify Verification: 129 API calls",
      invoice: "YellowSolutions-06202201.pdf",
      amount: "$80.57",
    },
    {
      date: "1 - 31 May, 2022",
      description: "Rattify Verification: 403 API calls",
      invoice: "YellowSolutions-05202201.pdf",
      amount: "$347.90",
    },
    {
      date: "1 - 30 Apr, 2022",
      description: "Rattify Verification: 1,056 API calls",
      invoice: "YellowSolutions-04202201.pdf",
      amount: "$1,023.00",
    },
    {
      date: "1 - 31 Mar, 2022",
      description: "Rattify Verification: 300 API calls",
      invoice: "YellowSolutions-03202201.pdf",
      amount: "$245.50",
    },
    {
      date: "1 - 31 May, 2022",
      description: "Rattify Verification: 403 API calls",
      invoice: "YellowSolutions-05202201.pdf",
      amount: "$347.90",
    },
    {
      date: "1 - 28 Feb, 2022",
      description: "Rattify Verification: 2,800 API calls",
      invoice: "YellowSolutions-02202201.pdf",
      amount: "$1,950.60",
    },
    {
      date: "1 - 31 Jan, 2022",
      description: "1 - 31 Jan, 2022",
      invoice: "YellowSolutions-01202201.pdf",
      amount: "$680.57",
    },
  ];
  return (
    <div className="flex items-center relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
          <tr>
            <th scope="col" className="px-6 py-3 text-appGrey font-medium">
              name
            </th>
            <th scope="col" className="px-6 py-3 text-appGrey font-medium">
              university
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele, i) => {
            return (
              <tr className="bg-white ">
                <td className="px-6 py-4 text-black" scope="row">
                  {ele.date}
                </td>
                <td className="px-6 py-4 text-black">{ele.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Details;
