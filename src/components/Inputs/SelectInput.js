import React from "react";

const SelectInput = ({ label, opts, className }) => {
  return (
    <div className={`mb-6 ${className}`}>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <select
        id="countries"
        className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-primary block w-full p-2.5 "
      >
        {opts.map((ele, i) => {
          return <option key={i}>{ele.text}</option>;
        })}
      </select>
    </div>
  );
};

export default SelectInput;
