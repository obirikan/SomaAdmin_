import React from "react";
import TextInput from "../../Inputs/TextInput";

const PersonalInformation = () => {
  return (
    <div className="bg-white shadow-companyShadow p-6">
      <h3 className="font-semibold mt-5">Personal information</h3>
      <div className="flex flex-wrap  mt-5 mb-5">
        <TextInput
          className="w-full md:w-1/2 md:mb-0  px-3"
          placeholder="John"
          label="First name"
          type="text"
        />
        <TextInput
          className="w-full md:w-1/2 md:mb-0  px-3"
          placeholder="Last name"
          label="Doe"
          type="text"
        />
      </div>
      <TextInput
        className="w-full  md:mb-0  px-3"
        placeholder="john@yellow.com"
        label="Email address"
        type="email"
      />
      <button
        type="button"
        className="text-white flex bg-primary  font-normal rounded-md text-sm px-3 py-2.5 mr-2 mb-2 mt-10"
      >
        Update
      </button>
    </div>
  );
};

export default PersonalInformation;
