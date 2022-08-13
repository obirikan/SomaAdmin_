import React,{useState} from "react";
import { useLocation } from "react-router-dom";
import TextInput from "../Inputs/TextInput";
import Textarea from "../Inputs/Textarea";
import SelectInput from "../Inputs/SelectInput";

const Details= () => {
  const location=useLocation()
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
  const [details]=useState(location.state.ele)
  console.log(details)

  return (
  <div className="w-full m-auto md:w-[50rem] bg-white shadow-companyShadow p-6 ">
    <form >
    <div className="flex flex-wrap  mt-5">
    <TextInput
        className="w-full md:w-1/2 md:mb-0  px-3"
        placeholder="Enter registration number"
        label="Name"
        type="text"
        id="last name"
      />
      <TextInput
        className="w-full md:w-1/2 md:mb-0  px-3"
        placeholder="Enter tax ID"
        label="Phone Number"
        type="text"
        id="last name"
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
    <TextInput
        className="w-full md:w-1/2 md:mb-0  px-3"
        placeholder="Enter registration number"
        label="Name"
        type="text"
        id="last name"
      />
      <TextInput
        className="w-full md:w-1/2 md:mb-0  px-3"
        placeholder="Enter tax ID"
        label=""
        type="text"
        id="last name"
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
    <button
      type="button"
      className="text-white flex bg-primary  font-medium rounded-md text-sm px-3 py-2.5 mr-2 mb-2 mt-10"
    >
      <span className="flex justify-center items-center">
        Next 
      </span>
    </button>
  </form>
</div>
  );
};

export default Details;
