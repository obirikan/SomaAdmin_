import React from "react";
import TextInput from "../components/Inputs/TextInput";

const Login = () => {
  return (
    <div className="container px-4 py-5  bg-appBg w-full m-auto md:w-[36rem] ">
      <h2 className="text-primary font-bold text-center py-10 text-3xl">
        SOMA
      </h2>
      <div className="sign-up-wrapper bg-white rounded-md shadow-appShadow mx-auto py-5 px-6">
        <TextInput label="Email address" type="email" id="email" />
        <TextInput label="Password" type="password" id="password" />
      </div>
    </div>
  );
};

export default Login;
