import React from 'react'
import TextInput from "../../Inputs/TextInput";

const BillingContact = () => {
  return (
    <div className="bg-white shadow-companyShadow p-6 mt-5">
      <h3 className="font-semibold ml-2 mt-5">Billing Contact</h3>
      <div className="flex flex-wrap  mt-5 mb-5">
        <TextInput
          className="w-full md:w-1/2 md:mb-0  px-3"
          placeholder="Enter full name"
          label="Full name"
          type="text"
        />
        <TextInput
          className="w-full md:w-1/2 md:mb-0  px-3"
          placeholder="Enter email address"
          label="Email"
          type="text"
        />
      </div>
      <button
        type="button"
        className="text-white flex bg-primary ml-3  font-normal rounded-md text-sm px-3 py-2.5 mr-2 mb-2 mt-10"
      >
        Update
      </button>
    </div>
  )
}

export default BillingContact