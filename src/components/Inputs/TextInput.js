import React from "react";

const TextInput = ({ type, placeholder, label, id, value,className ,onChange}) => {
  return (
    <div className={`mb-6 ${className}`}>
      <label
        htmlFor="id"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="outline-none border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-primary block w-full p-2.5   "
        placeholder={placeholder}
        required
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default TextInput;
