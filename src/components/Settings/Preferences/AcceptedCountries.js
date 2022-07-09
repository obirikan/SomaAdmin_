import React from "react";
import SelectInput from "../../Inputs/SelectInput";
import { ReactComponent as Ghana } from "../../../assets/svgs/ghana.svg";
import { ReactComponent as Close } from "../../../assets/svgs/close.svg";
import { ReactComponent as Netherlands } from "../../../assets/svgs/netherlands.svg";
import { ReactComponent as France } from "../../../assets/svgs/france.svg";
import { ReactComponent as Nigeria } from "../../../assets/svgs/nigeria.svg";


const AcceptedCountries = () => {
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

  const countries = [
    {
      flag: <Ghana />,
      country: "Ghana",
    },
    {
      flag: <Netherlands />,
      country: "Netherlands",
    },
    {
      flag: <Ghana />,
      country: "Ghana",
    },
    {
      flag: <Nigeria />,
      country: "Nigeria",
    },
    {
      flag: <France />,
      country: "France",
    },
    {
      flag: <France />,
      country: "France",
    },
    {
      flag: <France />,
      country: "France",
    },
    {
      flag: <Ghana />,
      country: "Ghana",
    },
  ];

  return (
    <div className="bg-white shadow-companyShadow p-4">
      <h3 className="font-semibold mt-5">Accepted countries</h3>
      <p className="mt-2 mb-5 text-sm">
        You currently accept verification from 6 countries. 178 are excluded.
      </p>

      <SelectInput className="w-full  " label="Select country" opts={options} />
      <div className="h-[6.3rem] border rounded flex flex-wrap p-2 overflow-y-scroll scrollbar">
        {countries.map((ele, i) => {
          return (
            <span
              key={i}
              className="bg-sidebarColor p-3 py-2 flex w-fit items-center rounded mr-2 mb-2"
            >
              {ele.flag}
              <span className="mx-2">{ele.country}</span>
              <Close className="ml-2 cursor-pointer" />
            </span>
          );
        })}
      </div>
      <button
        type="button"
        className="text-white flex bg-primary  font-normal rounded-md text-sm px-3 py-2.5 mr-2 mb-2 mt-10"
      >
        Update
      </button>
    </div>
  );
};

export default AcceptedCountries;
