import React from "react";
import Checkbox from "../components/Inputs/Checkbox";
import SelectInput from "../components/Inputs/SelectInput";
import SubmitButton from "../components/Inputs/SubmitButton";
import TextInput from "../components/Inputs/TextInput";
import "./styles.css";
const SignUp = () => {
  const country = [
    {
      text: "Ghana",
      value: "Ghana",
    },
    {
      text: "US",
      value: "US",
    },
    {
      text: "UK",
      value: "UK",
    },
  ];
  const options = [
    {
      text: "Yes",
      value: "Yes",
    },
    {
      text: "No",
      value: "No",
    },
  ];
  const consent = `I consent to the collection and processing of my personal data inline with data regulations as described in the`;
  return (
    <div className="container px-4 py-5  bg-appBg">
      <h2 className="text-activeButton font-bold text-center py-10 text-3xl">
        RATTIFY
      </h2>

      <div className="sign-up-wrapper bg-white rounded-md shadow-appShadow mx-auto py-5 px-6">
        <h1 className="font-semibold text-2xl text-center mb-5">
          Create Account
        </h1>
        <SelectInput label="Country" opts={country} />
        <TextInput
          placeholder="Enter name of business"
          label="Business name"
          type="text"
          id="business"
        />
        <TextInput
          placeholder="Enter your first name"
          label="First name"
          type="text"
          id="first name"
        />
        <TextInput
          placeholder="Enter your last name"
          label="Last name"
          type="text"
          id="last name"
        />
        <TextInput
          placeholder="Enter your business phone number"
          label="Phone number"
          type="tel"
          id="phone"
        />
        <SelectInput label="Are you a software developer?" opts={options} />
        <Checkbox text={consent} />
        <SubmitButton text="Sign up" />
        <p className="text-sm text-center mt-5 font-medium">
          <a href="/login">Already have an account? Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
