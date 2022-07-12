import React, { useState } from "react";
import TextInput from "../Inputs/TextInput";
import { UniversitySchema } from "../../Schema";
import { db } from "../../Firebase/firebase";
import { collection,addDoc,onSnapshot } from '@firebase/firestore';

const Universites = () => {
  const [University,setuniName]=useState('')
  const [code,setcode]=useState('')
  const [image,setimage]=useState('')

  const usercollection=collection(db,"schools")

  const add=async()=>{
    console.log(UniversitySchema(University,image,code))
    await addDoc(usercollection,UniversitySchema(University,image,code)).then(res=>{
      console.log(res)
    })
  }

  return (
<div className="bg-white shadow-companyShadow p-6 w-full m-auto md:w-[36rem] ">
      <h3 className="font-semibold mt-5 ml-2">Add University</h3>
      <TextInput
        className="w-full  md:mb-0  px-3 py-5"
        label="Name of University"
        placeholder="University of Cape Coast"
        type='text'
        required
        value={University}
        onChange={(e)=>setuniName(e.target.value)}
      />
      <div className="flex flex-wrap  mt-5 mb-5">
        <TextInput
          className="w-full md:w-1/2 md:mb-0  px-3"
          placeholder="UCC"
          label="School Code"
          type="text"
          onChange={(e)=>setcode(e.target.value)}
          required
          
        />
        <TextInput
          className="w-full md:w-1/2 md:mb-0  px-3"
          placeholder="https://www.facebook.com/capevars/"
          label="Image Url"
          type="text"
          onChange={(e)=>setimage(e.target.value)}
          required
        />
      </div>
      <button
        type="button"
        className="text-white flex bg-primary  font-normal rounded-md text-sm px-3 py-2.5 ml-4 mb-2 mt-10"
        onClick={add}
      >
        Add
      </button>
    </div>
  );
};

export default Universites;
