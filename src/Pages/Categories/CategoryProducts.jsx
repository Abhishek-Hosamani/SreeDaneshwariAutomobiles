import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import TrolleyImg from '../../Assets/trolley Spares.png'
import Tubeimg from '../../Assets/TubelessTyre.png'
import ItemCard from '../../Components/ItemCard'
import Footer from '../../Components/Footer'
// import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Categories = () => {
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(true);
    const params = useParams();
    const categoryName = params.catName;
    useEffect(() => {

        fetch(`http://localhost:5000/category/${categoryName}`, { method: "GET" }).then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();

        }).then((data) => {
            setdata(data);
            setloading(false);
        })
    }, [])

    console.log(data);


    return (
        <div className=''>
            <Header />

            <div className='' >
                <h1 className='text-xs sm:text-base text-[#0286D0] font-semibold  sm:ml-32 ml-8 my-2'>Home &gt;  {categoryName}</h1>
            </div>
            <div className='pd-2 sm:mx-20 flex flex-row justify-around flex-wrap items-center mx-auto '>
                {
                    loading ? (<p>loading</p>) : (data.map((d) => {
                        return (
                            <>
                                <ItemCard Name={d.productName} image={d.image} desc={d.description} />
                            </>
                        )
                    })

                    )
                }
            </div>

            <Footer />

        </div>
    )
}

export default Categories;