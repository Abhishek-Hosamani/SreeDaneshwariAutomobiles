import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import TrolleyImg from '../../Assets/trolley Spares.png'
import Tubeimg from '../../Assets/TubelessTyre.png'
import ItemCard from '../../Components/ItemCard'
import Footer from '../../Components/Footer'
// import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from "axios"

const Categories = () => {
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(true);
    const params = useParams();
    const categoryName = params.catName;

    const getData = async () => {
        const config = {
            method: "get",
            url: `https://sda-backend-mfeu.onrender.com/api/category?categoryName=${categoryName}`,
            headers: {
                "Content-Type": "application/json",
            },
        };
        await axios(config).then((data) => {
            setdata(data.data);
            setloading(false);
        }).catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        getData();

    }, [])

    console.log(data);


    return (
        <div className=''>
            <Header />

            <div className='' >
                <h1 className='text-xs sm:text-base text-[#0286D0] font-semibold  sm:ml-32 ml-8 my-2'>Home &gt;  {categoryName}</h1>
            </div>
            <div className='pd-2 sm:mx-20 flex flex-row justify-around flex-wrap items-center mx-auto '>
                {loading ? (
                    <p className='text-[#0286D0] font-semibold text-lg mt-8'>Loading...</p>
                ) : (
                    data && data.length ? (
                        data.map((d) => (
                            <ItemCard key={d._id} Name={d.productName} image={d.image} desc={d.description} />
                        ))
                    ) : (
                        <p className='text-[#0286D0] font-semibold text-lg mt-8'>No data found.</p>
                    )
                )}
            </div>

            <Footer />

        </div>
    )
}

export default Categories;