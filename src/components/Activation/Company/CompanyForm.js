import React from "react";
import SelectInput from "../../Inputs/SelectInput";
import Textarea from "../../Inputs/Textarea";
import TextInput from "../../Inputs/TextInput";

const CompanyForm = () => {
  const options = [
    {
      text: "Option One",
      value: "Option One",
    },
    {
      text: "Option Two",
      value: "Option Two",
    },
  ];
  return (
    <form>
      <div className="flex flex-wrap  mt-5">
        <SelectInput
          className="w-full md:w-1/2 md:mb-0  px-3 "
          label="What industry do you operate in?"
          opts={options}
        />
        <SelectInput
          className="w-full md:w-1/2 md:mb- px-3"
          label="Country of registration"
          opts={options}
        />
      </div>
      <div className="flex flex-wrap  mt-5">
        <TextInput
          className="w-full md:w-1/2 md:mb-0  px-3"
          placeholder="Enter registration number"
          label="Company registration number"
          type="text"
          id="last name"
        />
        <TextInput
          className="w-full md:w-1/2 md:mb-0  px-3"
          placeholder="Enter tax ID"
          label="Company Tax ID"
          type="text"
          id="last name"
        />
      </div>
      <div className="flex flex-wrap  mt-5">
        <SelectInput
          className="w-full md:w-1/2 md:mb-0  px-3"
          label="How many verifications do you expect per month?"
          opts={options}
        />
        <SelectInput
          className="w-full md:w-1/2 md:mb-0  px-3"
          label="What countries do you operate in?"
          opts={options}
        />
      </div>
      <Textarea
        label="Selected countries"
        placeholder="No countries selected"
      />
    </form>
  );
};

export default CompanyForm;
