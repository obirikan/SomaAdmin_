import React from "react";
import { useNavigate } from "react-router-dom";

const SubmitButton = ({ text }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/complete-signup");
  };
  return (
    <button
      onClick={handleClick}
      type="button"
      className="text-white w-full bg-activeButton hover:bg-inactiveButton  font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2"
    >
      {text}
    </button>
  );
};

export default SubmitButton;
