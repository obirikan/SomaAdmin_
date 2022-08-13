import React from "react";
import CompanyForm from '../Company/CompanyForm'
const Company = () => {
  return (
    <div className="w-full m-auto md:w-[50rem] bg-white shadow-companyShadow p-6 ">
      <h3 className="font-semibold mt-5">Let us know about your company</h3>
      <p className="mt-5 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <CompanyForm/>
    </div>
  );
};

export default Company;
