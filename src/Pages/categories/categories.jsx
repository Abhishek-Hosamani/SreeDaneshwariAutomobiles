import React from 'react'
import { Header } from '../../Components/Header'
import TrolleyImg from '../../Assets/trolley Spares.png'
import Tubeimg from '../../Assets/TubelessTyre.png'
import ItemCard from '../../Components/ItemCard'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'

export const Categories = () => {

    const Categories = [
        {
            Name: "Trolley Spares",
            Img: TrolleyImg,
            id: 1
        },
        {
            Name: "Tubeless Tyres",
            Img: Tubeimg,
            cat: 2
        },
        {
            Name: "Trolley Spares",
            Img: TrolleyImg,
            cat: 3
        },
        {
            Name: "Tubeless Tyres",
            Img: Tubeimg,
            cat: 4
        },
        {
            Name: "Trolley Spares",
            Img: TrolleyImg,
            cat: 5
        }

    ]


    return (
        <div className=''>
            <Header />
            <div className='pd-2 sm:mx-20 flex flex-row justify-around flex-wrap items-center mx-auto '>
                {
                    Categories.map(cat => {
                        return (
                            <>
                                <Link to='product'><ItemCard Name={cat.Name} image={cat.Img} /></Link>
                            </>
                        )
                    })
                }
            </div>

            <Footer />

        </div>
    )
}
