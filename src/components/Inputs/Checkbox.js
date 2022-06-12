import React from "react";

const Checkbox = ({ text }) => {
  return (
    <div className="flex items-start mb-4">
      <input
        id="checkbox-1"
        type="checkbox"
        value=""
        className="w-10 h-10 outline-none text-blue-600 bg-gray-100 border-gray-300 rounded accent-black"
      />
      <label
        htmlFor="checkbox-1"
        className="ml-2 text-xs font-normal text-gray-900 dark:text-gray-300"
      >
        {text}{" "}
        <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
          Rattify Privacy Policy and Terms & Conditions
        </a>
        .
      </label>
    </div>
  );
};

export default Checkbox;
