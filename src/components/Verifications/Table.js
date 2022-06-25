import React from "react";
import Pagination from "./Pagination";

const Table = () => {
  const data = [
    {
      update: "4 Dec 23:17",
      name: "John Doe",
      country: "Ghana",
      doc: "Passport",
      status: "approved",
      id: "i9/56jkl*n30921",
    },
    {
      update: "3 Dec 10:34",
      name: "Macus Perez",
      country: "Spain",
      doc: "Passport",
      status: "Resubmission",
      id: "A;w}4Kd(ec!mh",
    },
    {
      update: "2 Dec 12:43",
      name: "Michael Molenaar",
      country: "Germany",
      doc: "Driver’s License",
      status: "Declined",
      id: "&npv&dnLQ23tA",
    },
    {
      update: "2 Dec 11:25",
      name: "Emilia Wozciack",
      country: "Poland",
      doc: "Passport",
      status: "Approved",
      id: "MUH%ucSY6tDO;",
    },
    {
      update: "1 Dec 14:04",
      name: "Oluwaseun Tinubu",
      country: "Nigeria",
      doc: "National ID",
      status: "Resubmission",
      id: "CHP[L^mN46.Z1",
    },
    {
      update: "29 Nov 22:10",
      name: "Ulf Ubershaer",
      country: "Belgium",
      doc: "Driver’s License",
      status: "Declined",
      id: "PFdCK$~F[nT}x",
    },

    {
      update: "28 Nov 13:56",
      name: "Seth Barnes",
      country: "Ghana",
      doc: "National ID",
      status: "Approved",
      id: "6lCJF)ISAvHah",
    },
    {
      update: "27 Nov 18:50",
      name: "Ida Goor",
      country: "United Kingdom",
      doc: "Passport",
      status: "Approved",
      id: "hZRif).Dg!nm!",
    },
    {
      update: "27 Nov 18:50",
      name: "Ida Goor",
      country: "United Kingdom",
      doc: "Passport",
      status: "Approved",
      id: "hZRif).Dg!nm!",
    },
  ];
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
          <tr>
            <th scope="col" className="px-6 py-3 text-appGrey font-medium">
              Last Update
            </th>
            <th scope="col" className="px-6 py-3 text-appGrey font-medium">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-appGrey font-medium">
              Country
            </th>
            <th scope="col" className="px-6 py-3 text-appGrey font-medium">
              Document
            </th>
            <th scope="col" className="px-6 py-3 text-appGrey font-medium">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-appGrey font-medium">
              Event Id
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele, i) => {
            return (
              <tr className="bg-white ">
                <td className="px-6 py-4 text-black" scope="row">
                  {ele.update}
                </td>
                <td className="px-6 py-4 text-black">{ele.name}</td>
                <td className="px-6 py-4 text-black">{ele.country}</td>
                <td className="px-6 py-4 text-black">{ele.doc}</td>
                <td className="px-6 py-4 text-black">
                  <span
                    className={`px-3 py-2 rounded-3xl flex items-center justify-center w-fit capitalize text-sm ${
                      ele.status.toLowerCase() === "approved"
                        ? "bg-statusGreen"
                        : ele.status.toLowerCase() === "declined"
                        ? "bg-statusRed"
                        : "bg-statusYellow"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full mr-2 block ${
                        ele.status.toLowerCase() === "approved"
                          ? "bg-appGreen"
                          : ele.status.toLowerCase() === "declined"
                          ? "bg-appRed"
                          : "bg-appYellow"
                      }`}
                    ></span>
                    {ele.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-black">{ele.id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Table;
