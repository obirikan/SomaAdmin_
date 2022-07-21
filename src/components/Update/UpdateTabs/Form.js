import TextInput from "../../Inputs/TextInput";
import { ReactComponent as WhiteArrowRight } from "../../../assets/svgs/white-arrow-right.svg";
import React, { useState,useEffect } from 'react'
import { collection, doc, query, getDocs, where, updateDoc ,onSnapshot} from '@firebase/firestore';
import { ReactComponent as Close } from "../../../assets/svgs/close.svg";
import { db } from "../../../Firebase/firebase";
import { updateSchema } from "../../../Schema";
import { updateTableName } from "../../../Schema";
import '../../../App.css'

const Form = () => {
    const [list,setlist] = useState([])
    const [item, setitem] = useState('')
    const [link, setlink] = useState('')
    const [value, setvalue] = useState('')
    const [title, settitle] = useState('')
    const [msg, setmsg] = useState('')
    const [img, setimg] = useState('')
    const usercollection = collection(db, updateTableName)
    const [data,setdata]=useState([])
    const usercollection_1=collection(db,"Updates")

  const options = [
    {
      text: "Button",
      value: "Button",
    },
    {
      text: "Link",
      value: "Link",
    },
  ];


  const addlist = () => {
    list.push(item)
    console.log(list)
    setitem('')
  }


  const submit = async () => {
    const q = query(usercollection, where("id", "===", "Updates"));
    const action = {
      type: link,
      value: value
    }
    const result = await getDocs(usercollection)
    result.forEach(async (res) => {
      const que = doc(collection(db,updateTableName), res.id)
      console.log(que)
      await updateDoc(que,updateSchema(list,title,action,msg,img))

    })

  }

  const del=(i)=>{
      const filteredItems = list.filter(item => item !== i)
      setlist(filteredItems)
     
  }

 
  useEffect(()=>{

    
    const getusers=async()=>{
      onSnapshot(usercollection_1,(snapshot)=>{
          setdata(snapshot.docs.map(doc=>({...doc.data(),id:doc.id})))
          const dat=snapshot.docs.map(doc=>({...doc.data(),id:doc.id}))
          setlist(dat[0].list)
          // setd(snapshot.docs.map(doc=>(doc.data())))
         
          // console.log(list)
      })
      setlist(data[0].list)
      setlink(data[0].action.type)
    }
    getusers()

   },[])
  

  return (
    <form>
      <div className="flex flex-wrap  mt-5">
        <TextInput
          className="w-full md:w-1/2 md:mb-0  px-3"
          value={data[0]&&data[0].title}
          label="Title"
          type="text"
          onChange={e=>settitle(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap  mt-5">
        <TextInput
          className="w-full md:w-1/2 md:mb-0  px-3"
          label="Message "
          type="text"
          value={data[0]&&data[0].message}
          onChange={e=>setmsg(e.target.value)}
        />
        <TextInput
          className="w-full md:w-1/2 md:mb-0  px-3"
          placeholder="Image Link"
          label="Image Link"
          type="text"
          onChange={e=>setimg(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap  mt-5">
        <select onChange={(e) => setlink(e.target.value)} className="w-full h-10 mt-7 md:w-1/2 md:mb-0 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-primary block w-full  " >
           <option value='---'>select option</option>
           <option value="link">Link</option>
           <option value="button">Button</option>
        </select>

        <TextInput
          className="w-full md:w-1/2 md:mb-0  px-3"
          placeholder="value"
          label="Value"
          type="text"
          value={data[0]&&data[0].action.value}
          onChange={e=>setvalue(e.target.value)}
        />
      </div>
      <h3 className="font-semibold ml-3 mt-5">Add List Of Features</h3>
      <div className="flex flex-wrap  mt-5 mb-5">
        <TextInput
          className="w-full md:w-1/2 md:mb-0  px-3"
          placeholder="add list of features"
          label="List"
          type="text"
          onChange={(e)=>setitem(e.target.value)}
        />
        <button
        type="button"
        className="text-white flex bg-primary font-normal rounded-md text-sm px-3 py-2.5  mb-2 mt-7"
        onClick={addlist}
      >
        Add
      </button>

      </div>
      <div className="ml-3 mt-2 mb-5">
        {data[0]&&
         list.map((all,i)=>(
             <ul className="list-disc">
             <li className="bg-sidebarColor p-3 py-2 flex w-fit items-center rounded mr-2 mb-3">
              {all} <Close className="ml-4 cursor-pointer" onClick={()=>del(all)}/></li>
           </ul>
        ))}
      </div>
      <button
        type="button"
        className="text-white flex bg-primary ml-3 font-medium rounded-md text-sm px-3 py-2.5 mr-2 mb-0 "
        onClick={submit}
      >
        <span className="flex justify-center  items-center">
          Submit<WhiteArrowRight className="ml-2"/>
        </span>
      </button>
    </form>
  );
};

export default Form;
