import React, { useEffect, useState, useContext, createContext } from "react"
import { useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { db } from "../Firebase/firebase";
import { auth } from "../Firebase/firebase";
import { collection, addDoc } from '@firebase/firestore';
import { CategorySchema } from "../Schema";
import { RegisterSchema, parnerTableName } from "../Schema";




const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}


export const AuthProvider = ({children}) => {
    const [current,setcurrent]=useState()
    const [loading,setloading]=useState(false)
    const usercollection=collection(db,'Categories')


    const history=useNavigate()
    //
      
      //login
      const login=async(email, password)=> {
        try {
            await signInWithEmailAndPassword(auth,email,password)
            history('/home')
            return
        } catch (error) {
            console.log(error.message)
        }
        
      }
     //logout
      const logout=async()=> {
        try {
             await signOut(auth)
            history('/')
            return
        } catch (error) {
            console.log(error.message)
        }
        
      }
      
    //submit
      const sub=async(category,icon)=> {
        try {
            await addDoc(usercollection,CategorySchema(category,icon))
        } catch (error) {
            console.log(error.message)
        }
        
      }
     
      const RegisterPartners = async (description,institution, businessName, password, userName, email, telephone, establishment, storeLocation, Cimage) => {
        try {
           await addDoc(collection(db, parnerTableName),
           RegisterSchema(description,institution, businessName, password, userName, email, telephone, establishment, storeLocation, Cimage))
          console.log('status :', true)
        } catch (error) {
          console.log('status :', false)
        }
    
      }

    useEffect(()=>{
     const unsubscribe= auth.onAuthStateChanged(user=>{
        setcurrent(user)
        setloading(true)
      })
      return unsubscribe
    },[])

    const value={
        current,
        login,
        logout,
        sub,
        RegisterPartners,
    }

    return (
      <AuthContext.Provider value={value}>
        {loading && children}
      </AuthContext.Provider>
    )
  }
 

