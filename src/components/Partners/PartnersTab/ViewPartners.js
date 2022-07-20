import React,{useState,useEffect} from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from '../../../Firebase/firebase'
import './viewPartners.css'
import { Link } from 'react-router-dom';


const MERCHANT_NAME = 'Partners'

const ViewPartners = () => {


    const [partners,setPartners] = useState([])



    const fetchAllPartners = async ()=>{
        try {
            const mainData = []
            const q = query(collection(db, MERCHANT_NAME));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                mainData.push(doc.data())
            });
            console.log('all partners ==> ',mainData)
            setPartners(mainData)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(()=>{
        fetchAllPartners();
    },[])


  return (
    <div className='MainPartnercontainer'>
        
        {partners.map((item,i)=>(
            // <Link key={i} to={`../../PartnerDetails/${item.id}`}>
            <Link key={i} to={'../../PartnerDetails'}state={item}>

            <div  className='partnerContainer'>
                <div className='imagebox'>
                   <img src={item.storeBanner} className='storeImage' alt="storeBanner"/>
                </div>
                <div className='over'>
                <div className='businessName'>{item.businessName}</div>
                {item.approved?(
                    <div className='approved'>{item.approved?'':''}</div>
                ):(
                    <div className='notapproved'>{item.approved?'':''}</div>
                )}
                </div>
            </div>
            </Link>
        ))}
        
    </div>
  )
}

export default ViewPartners