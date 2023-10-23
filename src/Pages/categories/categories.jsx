import React from 'react'
import { Header } from '../../Components/Header'
import TrolleyImg from '../../Assets/trolley Spares.png'
import Tubeimg from '../../Assets/TubelessTyre.png'
import ItemCard from '../../Components/ItemCard'
import Footer from '../../Components/Footer'

export const Categories = () => {

    const Categories = [
        {
            Name: "Trolley Spares",
            Img: TrolleyImg,

        },
        {
            Name: "Tubeless Tyres",
            Img: Tubeimg,
        },
        {
            Name: "Trolley Spares",
            Img: TrolleyImg,
        },
        {
            Name: "Tubeless Tyres",
            Img: Tubeimg,
        },
        {
            Name: "Trolley Spares",
            Img: TrolleyImg,
        }

    ]


    return (
        <div className=''>
            <Header />
            <div className='pd-2 sm:mx-20 flex flex-row justify-around flex-wrap items-center sm:mx-20 '>
                {
                    Categories.map(cat => {
                        return (
                            <ItemCard Name={cat.Name} image={cat.Img} />
                        )
                    })
                }
            </div>
             
            <Footer />

        </div>
    )
}
