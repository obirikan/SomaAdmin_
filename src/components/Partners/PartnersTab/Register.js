import React, { useEffect, useState } from "react";
import TextInput from "../../Inputs/TextInput";
import { useAuth } from "../../../context/authContext";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { collection, query, where, getDocs } from "firebase/firestore";
import { storage } from "../../../Firebase/firebase";
import { v4 } from 'uuid'
import { db } from '../../../Firebase/firebase'
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
        try {
            if (url == null) return
            const imgref = ref(storage, `${parnersFileDirectory}${url.name + v4()}`)
            await uploadBytes(imgref, url).then((snapshot) => {
                getDownloadURL(snapshot.ref).then(async (icon) => {
                    await RegisterPartners(institution, businessName, password, userName, email, telephone, establishment, storeLocation, icon).then(() => {
                        setInstitution('')
                        setBusinessName('')
                        setPassword('')
                        setUserName('')
                        setEmail('')
                        setTelephone('')
                        setEstablishment('')
                        setStoreLocation('')
                    })
                })
                alert('file uploaded')
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
            <select onChange={(e) => setInstitution(e.target.value)} className="w-full" >
                <option>Select Institution</option>
                {Universities.map((item, i) => (
                    <option key={i} value={item.University}>{item.University}</option>
                ))}
            </select>
            <br />
            <br />
            <h4>Select Establishment</h4>

            <select onChange={(e) => setEstablishment(e.target.value)} className="w-full" >
                <option>Select Establishment</option>
                <option value={"Restaurant"}>Restaurants</option>
                <option value={"Supermarket"}>Super Markets</option>
                <option value={"Groceries"}>Grocery</option>
            </select>
            <br />
            <br />
            <TextInput
                className="w-full"
                placeholder="Enter Username"
                label="Enter Username"
                type="text"
                onChange={(e) => setUserName(e.target.value)}
                reqired={false}

            />
            <TextInput
                className="w-full"
                placeholder="Enter Business Name"
                label="Enter Business Name"
                type="text"
                onChange={(e) => setBusinessName(e.target.value)}
                reqired={false}

            />
            <TextInput
                className="w-full"
                placeholder="Enter Email"
                label="Enter Email"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                reqired={false}

            />

            <TextInput
                className="w-full"
                placeholder="Enter telephone"
                label="Enter Telephone"
                type="number"
                onChange={(e) => setTelephone(e.target.value)}
                reqired={false}
            />


            <TextInput
                className="w-full"
                placeholder="Enter Password"
                label="Enter Password"
                type="password"
                onChange={(e) => setTelephone(e.target.value)}
                reqired={false}

            />
           
            <br />
            <br />
            <TextInput
                className="w-full"
                placeholder="Enter Phone"
                label="Enter Store Image"
                type="file"
                onChange={(e) => seturl(e.target.files[0])}
            />

            <button
                style={{ width: 200, height: 40, border: '1px solid', borderRadius: 10 }}
                onClick={() => GetCurrentLocation()}>
                Get Current Location
            </button>
            <div>Lat : {storeLocation.lat} , Lng: {storeLocation.lng}</div>
            <br />
            <br />

            <div className="flex mt-10 mb-2">
                <button
                    onClick={send}
                    type="button"
                    className="text-white flex bg-primary  font-medium rounded-md text-sm px-3 py-2.5 mr-2 "
                >
                    ADD
                </button>
            </div>
        </div>
    );
};

export default InviteTeamForm;
