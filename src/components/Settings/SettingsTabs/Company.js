import React from "react";
import BillingContact from "../Company/BillingContact";
import CompanyInformation from "../Company/CompanyInformation";

const Company = () => {
  return (
    <div className="w-full m-auto md:w-[36rem]  ">
      <CompanyInformation />
      <BillingContact />
    </div>
  );
};

export default Company;
