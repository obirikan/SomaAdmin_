import React, { useEffect, useState } from "react";
import TextInput from "../../Inputs/TextInput";
import { useAuth } from "../../../context/authContext";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { collection, query, where, getDocs } from "firebase/firestore";
import { storage } from "../../../Firebase/firebase";
import { v4 } from 'uuid'
import { db } from '../../../Firebase/firebase'
import './partners.css'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const parnersFileDirectory = 'partnersImages/'

const InviteTeamForm = () => {
    const { RegisterPartners } = useAuth()
    const [url, seturl] = useState('')
    const [institution, setInstitution] = useState('')
    const [businessName, setBusinessName] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [establishment, setEstablishment] = useState('')
    const [storeLocation, setStoreLocation] = useState({})
    const [Universities, setUniversities] = useState([])
    const [loading,setLoading] = useState(false)
    const [description,setDescription] = useState('')





    const Fetchuniversity = async () => {
        try {
            const mainData = []
            const q = query(collection(db, 'schools'));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                mainData.push(doc.data())
            });
            setUniversities(mainData)
            console.log(mainData)
        } catch (error) {
            console.log(error)
        }
    }



    const send = async () => {
        setLoading(true)
        try {
            if (url == null) return
            const imgref = ref(storage, `${parnersFileDirectory}${url.name + v4()}`)
            await uploadBytes(imgref, url).then((snapshot) => {  
                getDownloadURL(snapshot.ref).then(async (icon) => {
                    await RegisterPartners(description,institution, businessName, password, userName, email, telephone, establishment, storeLocation, icon)
                })
                setLoading(false)
                setInstitution('')
                setBusinessName('')
                setPassword('')
                setUserName('')
                setEmail('')
                setTelephone('')
                setEstablishment('')
                setStoreLocation('')
               setLoading(false)
               alert("Data added successfully ")
            }).catch((err) => {
                alert(err.message)
            })
        } catch (error) {
            console.log(error.message)
        }
    }



    const GetCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            let data = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
            setStoreLocation(data)
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
        });
    }


    useEffect(() => {
        Fetchuniversity();
    }, [])






    return (
        <div className="mt-5">
            <h4>Select Institution</h4>
            <select  onChange={(e) => setInstitution(e.target.value)} className="input" >
                <option>Select Institution</option>
                {Universities.map((item, i) => (
                    <option key={i} value={item.University}>{item.University}</option>
                ))}
            </select>
            <br />
            <br />
            <h4>Select Establishment</h4>

            <select onChange={(e) => setEstablishment(e.target.value)} className="input" >
                <option>Select Establishment</option>
                <option value={"Restaurant"}>Restaurants</option>
                <option value={"Supermarket"}>Super Markets</option>
                <option value={"Groceries"}>Grocery</option>
            </select>
            <br />
            <br />

            <p>
                <input value={userName} onChange={(e) => setUserName(e.target.value)} className="input" type={'text'} placeholder="Enter User name" />
            </p>

            <p>
                <input value={businessName} onChange={(e) => setBusinessName(e.target.value)} className="input" type={'text'} placeholder="Enter Business Name" />
            </p>
            <p>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="input" type={'email'} placeholder="Enter Email adress" />
            </p>
            <p>
                <input value={telephone} onChange={(e) => setTelephone(e.target.value)} className="input" type={'text'} placeholder="Enter Phone Number" />
            </p>
            <p>
                <input value={password} onChange={(e) => setPassword(e.target.value)} className="input" type={'password'} placeholder="Enter Password" />
            </p>
            <p>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="input"   placeholder="Enter Store Description" ></textarea>
            </p>

            <p>
                <input  onChange={(e) => seturl(e.target.files[0])} className="input" type={'file'} placeholder="Enter Store Banner" />
            </p>


            <button
                style={{ width: 200, height: 40, border: '1px solid', borderRadius: 10 }}
                onClick={() => GetCurrentLocation()}>
                Get Current Location
            </button>
            <GooglePlacesAutocomplete  apiKey="AIzaSyCwFNzldPWPkTD1PrmgDZKNNwS6D6aYbXo" />



            <div>Lat : {storeLocation.lat} , Lng: {storeLocation.lng}</div>
            <br />
            <br />

            <div className="flex mt-10 mb-2">
                {loading?(
                     <button
                     onClick={send}
                     type="button"
                     className="text-white flex bg-primary  font-medium rounded-md text-sm px-3 py-2.5 mr-2 "
                 >
                     Uploading Data Please wait ...
                 </button>
                ):(
                    <button
                    onClick={send}
                    type="button"
                    className="text-white flex bg-primary  font-medium rounded-md text-sm px-3 py-2.5 mr-2 "
                >
                    ADD
                </button>
                )}
            
            </div>
        </div>
    );
};

export default InviteTeamForm;
