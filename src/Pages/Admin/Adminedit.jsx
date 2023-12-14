import React, { useEffect, useState } from 'react'
import axios from "axios"
import DeleteCard from '../../Components/DeleteCard'
const Adminedit = () => {
    const [data, setdata] = useState([]);


    const getDatafordelete = async () => {
        const config = {
            method: "get",
            url: `https://sda-backend-mfeu.onrender.com/api/getProducts`,
            headers: {
                "Content-Type": "application/json",
            },
        };
        await axios(config).then((data) => {
            setdata(data.data.data);

        }).catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        getDatafordelete();
    }, [])

    const handleDeleteCallback = () => {
        getDatafordelete();
    };

    console.log(data)
    return (
        <>
            <div className='flex flex-row flex-wrap mx-auto px-2'>
                {
                    data.map(item => {
                        return (
                            <div className='w-full sm:w-1/2 '>
                                <DeleteCard Name={item.productName} id={item._id} img={item.image} onDelete={handleDeleteCallback} />
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Adminedit