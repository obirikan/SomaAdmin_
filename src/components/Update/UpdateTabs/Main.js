import React from "react";
import Form from "./Form";

const Main= () => {
  return (
    <div className="w-full m-auto md:w-[50rem] bg-white shadow-companyShadow p-6 ">
      <h3 className="font-semibold mt-5 ml-3">Update info in your company</h3>
      <p className="mt-5 text-sm ml-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Form/>
    </div>
  );
};

export default Main;
