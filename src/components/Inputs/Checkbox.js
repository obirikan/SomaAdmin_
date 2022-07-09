import React from "react";

const Checkbox = ({ text, color }) => {
  return (
    <div class="flex items-center mr-4 mt-3">
      <input
        type="checkbox"
        value=""
        className={`w-4 h-4 bg-gray-100 rounded border-gray-300 focus:outline-none text-${color}`}
      />
      <label
        for="red-checkbox"
        class="ml-2 text-sm text-gray-900 dark:text-gray-300"
      >
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
