import React from "react";
import { ReactComponent as Settings } from "../../assets/svgs/settings.svg";
import { ReactComponent as Visa } from "../../assets/svgs/visa.svg";
import { ReactComponent as Download } from "../../assets/svgs/blue-download.svg";

const BillingOverview = () => {
  const data = [
    {
      date: "1 Jun - 30 Jun 2022",
      amount: "$80.57",
    },
    {
      date: "1 May - 30 May 2022",
      amount: "$125.90",
    },
    {
      date: "1 Apr - 30 Apr 2022",
      amount: "$192.80",
    },
  ];
  return (
    <div>
      <p className=" text-sm font-normal mb-5">Billing overview</p>
      <div className="flex flex-wrap  mt-5 mb-5">
        <div className="w-full md:w-1/2 md:mb-0 px-4 mb-5">
          <div className="shadow-companyShadow p-4 rounded">
            <p className="font-semibold text-sm mb-4">Your balance</p>
            <div className="flex justify-between">
              <span className="text-xs">July, 2022</span>
              <span className="text-xs">API Calls: 189</span>
            </div>
            <div className="flex justify-between mt-14">
              <span className="text-3xl font-bold">$182.54</span>
              <button
                type="button"
                className="text-white flex bg-primary  font-medium rounded-md text-sm px-3 py-2.5 mr-2 "
              >
                Pay early
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:mb-0 px-4 mb-5">
          <div className="shadow-companyShadow p-4 rounded">
            <div className="flex justify-between">
              <span className="font-semibold text-sm mb-4">Payment method</span>
              <Settings className="cursor-pointer" />
            </div>

            <div className="flex justify-between">
              <div className="text-xs flex items-center">
                <Visa className="mr-2" />
                <div>
                  <p className="font-semibold">VISA •••• 6701</p>
                  <p className="font-normal ">Expiry 07/2024</p>
                </div>
              </div>
              <span className="text-xs p-2 border-2 rounded cursor-pointer border-appGrey">
                Edit
              </span>
            </div>
            <hr className="mt-10" />
            <span className="text-xs text-primary font-medium cursor-pointer mt-4 inline-block">
              + Add new payment method
            </span>
          </div>
        </div>

        <div className="w-full md:w-1/2 md:mt-5 px-4 mt-0 ">
          <div className="shadow-companyShadow p-4 rounded">
            <div className="flex justify-between">
              <span className="font-semibold text-sm mb-4">Transactions</span>
            </div>
            <ul>
              {data.map((ele, i) => {
                return (
                  <li className="flex justify-between text-xs mb-3">
                    <div>{ele.date}</div>
                    <div className="flex">
                      {ele.amount}
                      <Download className="ml-3 cursor-pointer" />
                    </div>
                  </li>
                );
              })}
            </ul>

            <span className="text-xs text-primary font-medium cursor-pointer mt-4 inline-block">
              View all transactions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingOverview;
