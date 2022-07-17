import React,{useState} from "react";
import TextInput from "../../Inputs/TextInput";
import { useAuth } from "../../../context/authContext";
import {ref,uploadBytes,getDownloadURL} from 'firebase/storage'
import { storage } from "../../../Firebase/firebase";
import {v4} from 'uuid'

const InviteTeamForm = () => {
  const {sub}=useAuth()
  const [category,setcategory]=useState('')
  const [url,seturl]=useState('')
  
  const send=async()=>{
    try {
      if(url==null) return
        const imgref=ref(storage,`images/${url.name+ v4()}`)
       await  uploadBytes(imgref,url).then((snapshot)=>{
          getDownloadURL(snapshot.ref).then(async (icon)=>{
            await sub(category,icon).then(()=>{
              setcategory('')
            })
          })
            alert('file uploaded')
        }).catch((err)=>{
             alert(err.message)
        })
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <form className="mt-5">
      <TextInput
        className="w-full"
        placeholder="Grocery"
        label="Category name"
        type="text"
        onChange={(e)=>setcategory(e.target.value)} 
      />
      <input
        className="w-full"
        label="add image icon"
        type="file"
        onChange={(e)=>seturl(e.target.files[0])} 
      />
      <div className="flex mt-10 mb-2">
        <button
          onClick={send}
          type="button"
          className="text-white flex bg-primary  font-medium rounded-md text-sm px-3 py-2.5 mr-2 "
        >
          ADD
        </button>
      </div>
    </form>
  );
};

export default InviteTeamForm;
