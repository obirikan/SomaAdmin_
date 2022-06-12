import React from "react";

const Login = () => {
  return (
    <div className="container px-4 py-5  bg-appBg">
      <h2 className="text-activeButton font-bold text-center py-10 text-3xl">
        RATTIFY
      </h2>
      <div className="sign-up-wrapper bg-white rounded-md shadow-appShadow mx-auto py-5 px-6">
        <h1 className="font-semibold text-2xl text-center mb-5">
          Create password
        </h1>
        <SelectInput label="Country" opts={country} />
        <TextInput label="Password" type="password" id="password" />
        <TextInput
          label="Confirm Password"
          type="password"
          id="confirm password"
        />
        <SubmitButton text="Complete sign up" />
        <p className="text-sm text-center mt-5 font-medium">
          <a href="/login">Go back</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
