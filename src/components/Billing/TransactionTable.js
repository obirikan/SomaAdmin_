import React,{useState,useEffect} from "react";
import { Link,useLocation } from "react-router-dom";
import { collection,onSnapshot } from '@firebase/firestore';
import { db } from "../../Firebase/firebase";
const TransactionTable = () => {
  const [data,setdata]=useState([])

  
 const usercollection=collection(db,"Users")

 
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
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
          <tr>
            <th scope="col" className="px-6 py-3 text-appGrey font-medium">
              name
            </th>
            <th scope="col" className="px-6 py-3 text-appGrey font-medium">
              Date Created
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele, i) => {
            return (
              <tr className="bg-white ">
                <td className="px-6 py-4 text-black" scope="row">
                  <Link to={{pathname:`/details/${ele.id}`}} state={{ele}}>{ele.name}</Link>
                </td>
                <td className="px-6 py-4 text-black"></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
