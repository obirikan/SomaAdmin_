import React, { useState, useEffect } from 'react'
import { doc, updateDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../../Firebase/firebase'
import { useLocation } from 'react-router-dom';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from "../../../Firebase/firebase";
import { v4 } from 'uuid'
import { ReactComponent as Close } from "../../../assets/svgs/close.svg";
import TextInput from "../../Inputs/TextInput";
import Textarea from "../../Inputs/Textarea";


const MERCHANT_NAME = 'Partners'
const parnersFileDirectory = 'MenuImages'




const Menu = () => {

    const location = useLocation();
    const data = location.state

    // console.log('daaaa******* from menu=>', data)

    const [CategoryName, setCategoryName] = useState('')
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    const [updated, setUpdated] = useState(false)
    const [FoodName, setFoodName] = useState('')
    const [FoodPrice, setFoodPrice] = useState('')
    const [FoodDescription, setFoodDescription] = useState('')
    const [urls, seturl2] = useState('')
    const [prevOrderList, setPrevOrderList] = useState([])
    const [sidePrice, setSidePrice] = useState('')
    const [sideMenuName, setSideMenuName] = useState('')
    const [prevOptionList, setPrevOptionList] = useState([])



    const SelectInput = ({ label, opts, className }) => {
        return (
            <div className={`mb-6 ${className}`}>
                <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    {label}
                </label>
                <select
                    id="countries"
                    className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-primary block w-full p-2.5 "
                    onChange={(e) => setCategoryName(e.target.value)}
                >
                    {opts.map((ele, i) => {
                        return <option key={i}>{ele}</option>;
                    })}
                </select>
            </div>
        );
    };



const TeamTable = ({ data }) => {
    const labels = ["Name", "Price  (GHS)", "Action"];
    return (
        <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase  border-b">
                <tr>
                    {labels?.map((ele, i) => {
                        return (
                            <th
                                key={i}
                                scope="col"
                                className="px-6 py-3 text-appGrey font-medium"
                            >
                                {ele}
                            </th>
                        );
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((ele, i) => {
                    return (
                        <tr key={i} className="bg-white ">
                            <td className="px-6 py-4 text-black">{ele.name}</td>
                            <td className="px-6 py-4 text-black">{ele.value}</td>
                            <td className="px-6 py-4 text-black">
                                <span onClick={() => deleteSideMenu(ele)} className="text-xs p-2 border-2 rounded cursor-pointer border-appGrey">
                                    Delete
                                </span>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};


    const AddList = () => {
        setCategories(prev => [...prev, CategoryName])
        console.log('upd--->', categories)
    }

    const AddOptions = () => {
        let data = {
            id: v4(),
            name: sideMenuName,
            value: sidePrice,
        }
        setPrevOptionList(prev => [...prev, data])
        console.log('options list --->', prevOptionList)

    }


    const AddCategory = async () => {
        if (CategoryName === '') {
            alert('Empty category Name')
        } else {
            setLoading(true)

            try {
                const q = query(collection(db, MERCHANT_NAME), where("id", "==", data.id));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach(async (res) => {
                    const que = doc(collection(db, MERCHANT_NAME), res.id)
                    await updateDoc(que,
                        {
                            categories: categories
                        }
                    )
                });
                setLoading(false)
                setUpdated(!updated)
                console.log('Merchant Updated successfully')
            } catch (error) {
                console.log('Unable to Updated ')

            }
        }
    }

    const deletecategories = async (item) => {

        let FilteredItems = categories.filter(x => x !== item)
        setCategories(FilteredItems)

        if (FilteredItems) {
            try {
                const q = query(collection(db, MERCHANT_NAME), where("id", "==", data.id));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach(async (res) => {
                    const que = doc(collection(db, MERCHANT_NAME), res.id)
                    await updateDoc(que,
                        {
                            categories: FilteredItems
                        }
                    )
                });
                setLoading(false)
                setUpdated(!updated)
                setSideMenuName('')
                setSidePrice('')
                console.log('Merchant Updated successfully')
            } catch (error) {
                console.log('Unable to Updated ')

            }
        }

    }

    const fetchUpdatedData = async () => {
        try {
            const mainData = []

            const q = query(collection(db, MERCHANT_NAME), where("id", "==", data.id));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                mainData.push(doc.data())
            });
            setCategories(mainData[0].categories)
            setPrevOrderList(mainData[0].orderList)
            setPrevOptionList(mainData[0].options)
            console.log('Updated Category', mainData[0].categories)
            console.log('Order List Prev:', mainData[0].orderList)
            console.log('Updated Option list', mainData[0].options)

        } catch (error) {
            console.log(error, 'Unable to add institution');
        }

    }


    const deleteSideMenu = async (item) => {

        let FilteredItems = prevOptionList.filter(x => x.id !== item.id)
        setPrevOptionList(FilteredItems)

        if (FilteredItems) {
            try {
                const q = query(collection(db, MERCHANT_NAME), where("id", "==", data.id));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach(async (res) => {
                    const que = doc(collection(db, MERCHANT_NAME), res.id)
                    await updateDoc(que,
                        {
                            options: FilteredItems
                        }
                    )
                });
                setLoading(false)
                setUpdated(!updated)
                setSideMenuName('')
                setSidePrice('')
                console.log('Merchant Updated successfully')
            } catch (error) {
                console.log('Unable to Updated ')

            }
        }

    }



    const AddSideMenu = async () => {
        if (sideMenuName === '') {
            alert('Empty category Name')
        } else {
            setLoading(true)
            try {
                const q = query(collection(db, MERCHANT_NAME), where("id", "==", data.id));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach(async (res) => {
                    const que = doc(collection(db, MERCHANT_NAME), res.id)
                    await updateDoc(que,
                        {
                            options: prevOptionList
                        }
                    )
                });
                setLoading(false)
                setUpdated(!updated)
                setSideMenuName('')
                setSidePrice('')
                console.log('Merchant Updated successfully')
            } catch (error) {
                console.log('Unable to Updated ')

            }
        }
    }



    const UpdateMenu = async (FoodName, FoodPrice, FoodDescription, CategoryName, icon) => {
        try {
            const q = query(collection(db, MERCHANT_NAME), where("id", "==", data.id));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach(async (res) => {
                const que = doc(collection(db, MERCHANT_NAME), res.id)
                let dataOrder = {
                    title: CategoryName,
                    item: [
                        {
                            id: v4(),
                            title: FoodName,
                            price: FoodPrice,
                            description: FoodDescription,
                            image: icon
                        }
                    ]
                }
                let targetItem = prevOrderList.find(y => y.title === CategoryName)
                let newData = prevOrderList.filter(x => x.title !== CategoryName)
                if (targetItem) {
                    console.log('target data ', targetItem)
                    console.log('reduced data', newData)
                    // update target 
                    targetItem.title = dataOrder.title
                    targetItem.item.push(dataOrder.item[0])
                    console.log('updated target data:', targetItem)
                    newData.push(targetItem)
                    console.log('Over all data to send :', newData)

                    await updateDoc(que,
                        {
                            orderList: newData

                        }
                    )
                } else {
                    await updateDoc(que,
                        {
                            orderList: [...prevOrderList, dataOrder]
                        }
                    )
                }
            });
            setLoading(false)
            setFoodDescription('')
            setFoodName('')
            setFoodPrice('')
            seturl2('')
            setLoading(false)
            setUpdated(!updated)
            console.log('Merchant Updated successfully')
        } catch (error) {
            console.log('Unable to Updated ')

        }
    }


    const send = async () => {
        setLoading(true)
        try {
            if (urls == null) return
            const imgref = ref(storage, `${parnersFileDirectory}${urls.name + v4()}`)
            await uploadBytes(imgref, urls).then((snapshot) => {
                getDownloadURL(snapshot.ref).then(async (icon) => {
                    UpdateMenu(FoodName, FoodPrice, FoodDescription, CategoryName, icon)
                })

                alert("Data added successfully ")
            }).catch((err) => {
                alert(err.message)
            })
        } catch (error) {
            console.log(error.message)
        }
    }






    useEffect(() => {
        fetchUpdatedData()
    }, [updated])

    return (
        <div className="bg-white w-md">
            {loading ? <span>Updating Categories ...</span> : null}

            <div className="bg-white shadow-companyShadow  p-4">
                <h3 className="font-semibold mt-5">Create Category</h3>
                <TextInput
                    className="w-full mt-2   p-0"
                    placeholder="Category"
                    label="Enter Category"
                    type="text"
                    value={CategoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                />
                <button
                    onClick={AddList}
                    type="button"
                    className="text-white flex bg-primary  font-normal rounded-md text-sm px-3 py-2.5 mr-2 mb-2 mt-5"
                >
                    Add category list
                </button>
                <div className="border rounded flex flex-wrap p-2 ">
                    {categories.map((items, i) => (
                        <span
                            key={i}
                            className="bg-sidebarColor p-3 py-2 flex w-fit items-center rounded mr-2 mb-2"
                        >
                            <span className="mx-2">{items}</span>
                            <Close className="ml-2 cursor-pointer" onClick={() => deletecategories(items)} />
                        </span>
                    ))}
                </div>
                {categories.find(x => x === CategoryName) ? (
                    <button
                        onClick={AddCategory}
                        type="button"
                        className="w-md text-white flex bg-black  font-normal rounded-md text-sm px-3 py-2.5 mr-2 mb-2 mt-5">
                        Submit Category Added +
                    </button>
                ) : null}

            </div>



            {/* End of categories */}




            <div className="bg-white mt-50 shadow-companyShadow p-4 ">

                <h3 className="font-bold  mt-5">Side Menu</h3>
                <TextInput
                    className="w-full mt-2   p-0"
                    placeholder="Name"
                    label="Enter Name"
                    type="text"
                    value={sideMenuName}
                    onChange={(e) => setSideMenuName(e.target.value)}
                />
                <TextInput
                    className="w-full mt-2   p-0"
                    placeholder="Price"
                    label="Enter Price"
                    type={"number"}
                    value={sidePrice}
                    onChange={(e) => setSidePrice(e.target.value)}
                />
                <button
                    onClick={AddOptions}
                    type="button"
                    className="text-white flex bg-primary  font-normal rounded-md text-sm px-3 py-2.5 mr-2 mb-2 mt-5"
                >
                    Add Side menu  list +
                </button>
                <TeamTable data={prevOptionList} />
                <hr />
                {prevOptionList.find(x => x.name === sideMenuName) ? (
                    <button
                        onClick={AddSideMenu}
                        type="button"
                        className="w-md text-white flex bg-black  font-normal rounded-md text-sm px-3 py-2.5 mr-2 mb-2 mt-5">
                        Submit Slide Menu List +
                    </button>
                ) : null}

            </div>




            <div className="bg-white mt-50 shadow-companyShadow p-4 ">
                <h2 className="font-bold  mt-5">Main menu</h2>
                <SelectInput className="w-full  mt-5" label="Select Category" opts={categories} />
                <TextInput
                    className="w-full mt-2   p-0"
                    placeholder="Enter Food Name"
                    label="Enter Food Name"
                    type="text"
                    value={FoodName}
                    onChange={(e) => setFoodName(e.target.value)}
                />

                <TextInput
                    className="w-full mt-2   p-0"
                    placeholder="Enter Food Price"
                    label="Enter Food Price"
                    type="number"
                    value={FoodPrice}
                    onChange={(e) => setFoodPrice(e.target.value)}
                />

                <Textarea
                    label="Enter Food Description"
                    placeholder="Enter Food Description"
                    value={FoodDescription}
                    onChange={(e) => setFoodDescription(e.target.value)}
                />

                <p>
                    <h3>Food Image</h3>

                    <input onChange={(e) => seturl2(e.target.files[0])} className="input" type={'file'} placeholder="Enter Store Banner" />
                </p>

                <button
                    onClick={send}
                    type="button"
                    className="w-full text-white flex bg-black  font-normal rounded-md text-sm px-3 py-2.5 mr-2 mb-2 mt-5">
                    Add Data
                </button>
            </div>




        </div>
    )
}

export default Menu