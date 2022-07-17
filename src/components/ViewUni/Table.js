import React,{useState,useEffect} from "react";
import { db } from "../../Firebase/firebase";
import Pagination from "./Pagination";
import { collection,addDoc,onSnapshot } from '@firebase/firestore';

const Table = () => {
  const [data,setdata]=useState([])
  const usercollection=collection(db,"schools")

  useEffect(()=>{

    
    const getusers=async()=>{
      onSnapshot(usercollection,(snapshot)=>{
          
          setdata(snapshot.docs.map(doc=>({...doc.data(),id:doc.id})))
          // setusers(snapshot.docs.map(doc=>(doc.data())))

      })

    }
    getusers()
   },[])

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
          <tr>
            <th scope="col" className="px-20 py-3 text-appGrey font-medium">
              Code
            </th>
            <th scope="col" className="px-6 py-3 text-appGrey font-medium">
              Universties
            </th>
            <th scope="col" className="px-6 py-3 text-appGrey font-medium">
              images
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele, i) => {
            return (
              <tr className="bg-white ">
                <td className="px-20 py-4 text-black" scope="row">
                  {ele.code}
                </td>
                <td className="px-6 py-4 text-black">{ele.University}</td>
                <td className="px-6 py-4 text-black"><img src={ele.image} className='pl-2' alt='him' style={{width:'40.50px'}}/></td>
               </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Table;
