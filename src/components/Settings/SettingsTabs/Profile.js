import React from "react";
import PersonalInformation from "../Profile/PersonalInformation";
import ResetPassword from "../Profile/ResetPassword";
import TwoFactor from "../Profile/TwoFactor";

const Profile = () => {
  return (
    <div className="w-full m-auto md:w-[36rem]  ">
      <PersonalInformation />
      <TwoFactor />
      <ResetPassword />
      <button
        type="button"
        className="text-white flex bg-buttonRed  font-normal rounded-md text-sm px-3 py-2.5 mr-2 mb-2 mt-10"
      >
        Delete your Rattify account
      </button>
    </div>
  );
};

export default Profile;
