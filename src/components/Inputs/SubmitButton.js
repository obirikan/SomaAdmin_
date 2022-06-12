import React from "react";

const SubmitButton = ({text}) => {
  return (
    <button
      type="button"
      class="text-white w-full bg-activeButton hover:bg-inactiveButton  font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2"
    >
      {text}
    </button>
  );
};

export default SubmitButton;
