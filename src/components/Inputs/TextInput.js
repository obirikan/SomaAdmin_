import React from "react";

const TextInput = ({ type, placeholder, label, id }) => {
  return (
    <div className="mb-6">
      <label
        for="id"
        className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-activeButton block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required=""
      />
    </div>
  );
};

export default TextInput;
