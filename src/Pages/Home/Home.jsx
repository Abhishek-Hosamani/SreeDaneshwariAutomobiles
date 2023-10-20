import React from 'react'
import { Header } from '../../Components/Header'
import TrolleyImg from '../../Assets/trolley Spares.png'
import Tubeimg from '../../Assets/TubelessTyre.png'
import CategoryCard from '../../Components/CategoryCard'
export const Home = () => {

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
            <h2 className='text-center font-semibold text-xs sm:text-base'>Shop by Categories</h2>

            <div className='pd-2 sm:mx-20 flex flex-row justify-around flex-wrap items-center sm:mx-20 '>
                {
                    Categories.map(cat => {
                        return (
                            <CategoryCard Name={cat.Name} image={cat.Img} />
                        )
                    })
                }
            </div>

        </div>
    )
}
