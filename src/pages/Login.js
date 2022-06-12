import React from "react";
import SelectInput from "../components/Inputs/SelectInput";
import SubmitButton from "../components/Inputs/SubmitButton";
import TextInput from "../components/Inputs/TextInput";

const Login = () => {
  return (
    <div className="container px-4 py-5  bg-appBg">
      <h2 className="text-activeButton font-bold text-center py-10 text-3xl">
        RATTIFY
      </h2>
      <div className="sign-up-wrapper bg-white rounded-md shadow-appShadow mx-auto py-5 px-6">
        <h1 className="font-semibold text-2xl text-center mb-5">Sign In</h1>
        <TextInput label="Email address" type="email" id="email" />
        <TextInput label="Password" type="password" id="password" />

        <SubmitButton text="Sign In" />
        <p className="text-sm text-center mt-5 font-medium">
          <a href="/">Don’t have an account yet? Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
