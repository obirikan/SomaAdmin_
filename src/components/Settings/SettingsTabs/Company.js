import React from 'react'
import BillingContact from '../Company/BillingContact'
import CompanyInformation from '../Company/CompanyInformation'

const Company = () => {
  return (
    <>
    <div className="w-full m-auto md:w-[35rem]  ">
     <CompanyInformation/>
    </div>
    <div className="w-full mt-5 m-auto md:w-[35rem]  ">
     <BillingContact/>
    </div>
    </>

  )
}

export default Company