import TextInput from "../components/Inputs/TextInput";
import React, { useState, useEffect } from 'react'
import { useAuth } from "../context/authContext";
import { useNavigate } from 'react-router-dom'
import './logincss/index.css'
import logo from '../assets/logo-green.png'
import logowhite from '../assets/logo-white.png'


const Login = () => {
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const { login, current } = useAuth()
  const [loading,setLoading] = useState(false)

  const submit = () => {
    setLoading(true)
    login(email, password)
    setLoading(false)
  }

  const history = useNavigate()
  useEffect(() => {
    if (current) {
      history('/home')
    }
  }, [])

  return (
    <div className="maincontainer">
      <div className={'header'}>
        <div className={'titlebox'}>
          <div className={'bb2'}>
            <img src={logowhite} alt="logo" />
          </div>
          <div className={'title2'}>
            Soma
          </div>
        </div>
      </div>

      <div className={'logcontainer'}>
        <div className={'bb'}>
          <img src={logo} style={{height:100,width:80}} alt="logo" />
        </div>
        <div className={'title'}>
          Soma Admin Dashboard Portal
        </div>
        <input
          onChange={(e) => setemail(e.target.value)}
          className="input"
          type="text"
          placeholder="Enter Email address"
        />

        <input
          onChange={(e) => setpassword(e.target.value)}
          className="input"
          type="password"
          placeholder="Enter Password"
        />

        <div className={'terms'}>
          By proceeding, you consent to get calls, WhatsApp or SMS messages,
          including by automated means, from Soma and its affiliates to the number provided.
        </div>

        <div onClick={submit} className="butt">
          <div className="butttext">submit</div>
          {loading?(
          <div className="butttext">please wait ...</div>
          ):null}
        </div>

        <div className={'disclosure'}>
          This site is protected by the soma Security architecture team .
          incase you find your self here by mistake kindly go back to our home page.
        </div>

      </div>

    </div>
  );
};

export default Login;
