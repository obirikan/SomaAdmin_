import TextInput from "../components/Inputs/TextInput";
import React,{useState,useEffect} from 'react'
import { useAuth } from "../context/authContext";
import { useNavigate } from 'react-router-dom'



const Login = () => {
  const [email,setemail]=useState()
  const [password,setpassword]=useState()
  const {login,current}=useAuth()
  
  const submit=()=>{
    login(email,password)
}

  const history=useNavigate()
  useEffect(()=>{
    if(current){
      history('/home')
    }
},[])

  return (
    <div className="container px-4 py-5  bg-appBg w-full m-auto md:w-[36rem] ">
      <h2 className="text-primary font-bold text-center py-10 text-3xl">
        SOMA
      </h2>
      <div className="sign-up-wrapper bg-white rounded-md shadow-appShadow mx-auto py-5 px-6">
        <TextInput label="Email address" type="email" id="email" onChange={(e)=>setemail(e.target.value)}/>
        <TextInput label="Password" type="password" id="password" onChange={(e)=>setpassword(e.target.value)}/>
      </div>
      <div>
        <button onClick={submit}>submit</button>
      </div>
    </div>
  );
};

export default Login;
