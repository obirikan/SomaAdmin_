import React from "react";
import AcceptedCountries from "../Preferences/AcceptedCountries";
import EmailNotification from "../Preferences/EmailNotification";

const Preferences = () => {

  return (
    <div className="w-full m-auto md:w-[31rem]">
      <AcceptedCountries/>
      <EmailNotification/>
    </div>
  );
};

export default Preferences;
