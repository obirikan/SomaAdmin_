import React,{useState,useEffect} from "react";
import { db } from "../../Firebase/firebase";
import Pagination from "./Pagination";
import { collection,addDoc,onSnapshot,deleteDoc,doc } from '@firebase/firestore';

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

   const del=async (id)=>{
    // list.filter((a)=>a !== i)
    const filteredItems = data.filter(item => item !== id)
    setdata(filteredItems)
    const userupdate=doc(db,"schools",id)
    await deleteDoc(userupdate)
}

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
            <th scope="col" className="px-6 py-3 text-appGrey font-medium">
            
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
                <td className="px-6 py-4 text-black">
                <button
        type="button"
        className="text-white flex bg-primary ml-3 font-medium rounded-md text-sm px-4 py-1 mr-2 mb-0 "
        onClick={()=>del(ele.id)}
      >
        <span className="flex justify-center  items-center">
         x
        </span>
      </button>
                </td>
               </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
