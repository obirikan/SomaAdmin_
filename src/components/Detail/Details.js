import React,{useState} from "react";
import { useLocation } from "react-router-dom";


const Details= () => {
  const location=useLocation()

  
  const [details]=useState(location.state.ele)
  console.log(details)

  return (
    <div className=" relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
          <tr>
            <th scope="col" className="px-6 py-3 text-appGrey font-medium">
              name
            </th>
            <th scope="col" className="px-6 py-3 text-appGrey font-medium">
              phone
            </th>
            <th scope="col" className="px-6 py-3 text-appGrey font-medium">
              institution
            </th>
            <th scope="col" className="px-6 py-3 text-appGrey font-medium">
              bonus
            </th>
          </tr>
        </thead>
        <tbody>
              <tr className="bg-white ">
              <td className="px-6 py-4 text-black" scope="row">
               {details.name}  
                </td>
              <td className="px-6 py-4 text-black" scope="row">
              {details.phone}
                </td>
                <td className="px-6 py-4 text-black" scope="row">
                 {details.institutionData.University}
                </td>
                <td className="px-6 py-4 text-black">
               {details.bonus===''?'no bonuses yet':details.bonus}
                </td>
              </tr>

        </tbody>
      </table>
    </div>
  );
};

export default Details;
