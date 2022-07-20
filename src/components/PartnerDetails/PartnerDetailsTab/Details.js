import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import './Detail.css'
// import
const MERCHANT_NAME = 'Partners'

const Details = (props) => {

    const location = useLocation();
    const data = location.state

    console.log('daaaa*******=>', data)

    return (
        <div className="mt-5">
            <div className='imageContainer'>
                <img src={data.storeBanner} className="storeImage" alt="banner" />
            </div>

        </div>
    )
}

export default Details