import React from "react";

const Checkbox = ({ text }) => {
  return (
    <div class="flex items-center mb-4">
      <input
        checked
        id="checkbox-1"
        type="checkbox"
        value=""
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        for="checkbox-1"
        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {text}{" "}
        <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">
          Rattify Privacy Policy and Terms & Conditions
        </a>
        .
      </label>
    </div>
  );
};

export default Checkbox;
