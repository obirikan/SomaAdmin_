import React,{useEffect,useState}from "react";
import { ReactComponent as Ghana } from "../../../assets/svgs/ghana.svg";
import { ReactComponent as Close } from "../../../assets/svgs/close.svg";
import { ReactComponent as Netherlands } from "../../../assets/svgs/netherlands.svg";
import { ReactComponent as France } from "../../../assets/svgs/france.svg";
import { ReactComponent as Nigeria } from "../../../assets/svgs/nigeria.svg";
import { db } from "../../../Firebase/firebase";
import { collection,query,getDocs,where,addDoc,updateDoc,doc,deleteDoc,onSnapshot } from '@firebase/firestore';
import '../../../App.css'

const ViewMenu = () => {
    const usercollection=collection(db,"Categories")
    const [categories,setcategory]=useState([])

  const countries = [
    {
      flag: <Ghana />,
      country: "Ghana",
    },
    {
      flag: <Netherlands />,
      country: "Netherlands",
    },
    {
      flag: <Ghana />,
      country: "Ghana",
    },
    {
      flag: <Nigeria />,
      country: "Nigeria",
    },
    {
      flag: <France />,
      country: "France",
    },
    {
      flag: <France />,
      country: "France",
    },
    {
      flag: <France />,
      country: "France",
    },
    {
      flag: <Ghana />,
      country: "Ghana",
    },
    {
        flag: <Ghana />,
        country: "Ghana",
      },
      {
        flag: <Ghana />,
        country: "Ghana",
      },
      {
        flag: <Ghana />,
        country: "Ghana",
      },
  ];

  
  useEffect(()=>{

    
    const getusers=async()=>{
        onSnapshot(usercollection,(snapshot)=>{
            setcategory(snapshot.docs.map(doc=>({...doc.data(),id:doc.id})))
            //  setcategory(snapshot.docs.map(doc=>(doc.data(),id:doc.id)))
            // setpost((perv)=>{...perv,snapshot.docs.map(doc=>(doc.data()))})

        })
  
      }
      getusers()
    
},[])
console.log(categories)

const del=async (id)=>{
    // list.filter((a)=>a !== i)
    const filteredItems = categories.filter(item => item !== id)
    setcategory(filteredItems)
    const userupdate=doc(db,"Categories",id)
    await deleteDoc(userupdate)
}

  return (
    <div className="bg-white shadow-companyShadow p-4">
    
   
      <h3 className="font-semibold mt-5">Added category</h3>
      <p className="mt-2 mb-5 text-sm">
         lorem dolor dispute amet ela 6 fafado 178 sium na excluded.
      </p>
      <div className=" border rounded flex flex-wrap p-2 ">
        {categories&&categories.map((ele, i) => {
          return (
            <span
              key={i}
              className="bg-sidebarColor p-3 py-2 flex w-fit items-center rounded mr-2 mb-2"
            >
              <img src={ele.icon} className='w' alt='kk'/>
              <span className="mx-2">{ele.category}</span>
              <Close className="ml-2 cursor-pointer" onClick={()=>del(ele.id)} />
            </span>
          );
        })}
      </div>
      <button
        type="button"
        className="text-white flex bg-primary  font-normal rounded-md text-sm px-3 py-2.5 mr-2 mb-2 mt-10"
      >
        Update
      </button>
    </div>
  );
};

export default ViewMenu;