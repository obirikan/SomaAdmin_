import React from 'react'
import TextInput from "../../Inputs/TextInput";
import SelectInput from '../../Inputs/SelectInput';

const CompanyInformation = () => {
    const options = [
        {
          text: "USA",
          value: "USA",
        },
        {
          text: "Canada",
          value: "Canada",
        },
      ];
  return (
<div className="bg-white shadow-companyShadow p-6">
      <h3 className="font-semibold mt-5 ml-2">Company information</h3>
      <SelectInput
        className="w-full  md:mb-0  px-3 py-5"
        opts={options}
        label="Country of registeration"
      />
      <div className="flex flex-wrap  mt-5 mb-5">
        <TextInput
          className="w-full md:w-1/2 md:mb-0  px-3"
          placeholder="Yellow solutions"
          label="Company name"
          type="text"
        />
        <TextInput
          className="w-full md:w-1/2 md:mb-0  px-3"
          placeholder="http://yellow.com"
          label="Comapany website"
          type="text"
        />
      </div>
      <TextInput
        className="w-full  md:mb-0  px-3 py-5"
        placeholder="Enter company address"
        label="Company address"
        type="email"
      />
            <div className="flex flex-wrap  mt-5 mb-5">
        <TextInput
          className="w-full md:w-1/2 md:mb-0  px-3"
          placeholder="Enter city"
          label="City"
          type="text"
        />
        <TextInput
          className="w-full md:w-1/2 md:mb-0  px-3"
          placeholder=" Enter zip code"
          label="Zip Code"
          type="text"
        />
      </div>
      <TextInput
        className="w-full  md:mb-0  px-3 py-5"
        placeholder="CE12345678"
        label="Company Tax ID"
        type="Text"
      />
      <button
        type="button"
        className="text-white flex bg-primary  font-normal rounded-md text-sm px-3 py-2.5 ml-4 mb-2 mt-10"
      >
        Update
      </button>
    </div>
  )
}

export default CompanyInformation