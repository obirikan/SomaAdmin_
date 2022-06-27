import React from "react";
import BillingForm from "../Billing/BillingForm";
import { ReactComponent as BlueArrow } from "../../../assets/svgs/blue-arrow.svg";

const Billing = () => {
  return (
    <div className="w-full m-auto md:w-[50rem] bg-white shadow-companyShadow p-6 ">
      <span className="flex items-center">
        <BlueArrow />
        <span className="text-primary ml-2 text-sm cursor-pointer  x">
          Back
        </span>
      </span>
      <h3 className="font-semibold mt-5">Add your billing information and address</h3>
      <p className="mt-5 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <BillingForm />
    </div>
  );
};

export default Billing;
