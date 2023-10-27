import React from 'react'
import { Header } from '../../Components/Header'
import TrolleyImg from '../../Assets/trolley Spares.png'
import Tubeimg from '../../Assets/TubelessTyre.png'
import CategoryCard from '../../Components/CategoryCard'
import Carousel from '../../Components/Carousel'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'
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

            <Carousel />
            <h2 className='text-center mt-4 font-semibold text-xs sm:text-base'>Shop by Categories</h2>

            <div className='pd-2 sm:mx-20 flex flex-row justify-around flex-wrap items-center sm:mx-20 '>
                {
                    Categories.map(cat => {
                        return (
                            <Link to='category'><CategoryCard Name={cat.Name} image={cat.Img} /></Link>
                        )
                    })
                }
            </div>
            <h2 className='text-center font-semibold text-xs sm:text-base hidden sm:block'>Products</h2>

            <div className='pd-2 sm:mx-20 flex flex-row justify-around flex-wrap items-center sm:mx-20 hidden sm:flex'>
                {
                    Categories.map(cat => {
                        return (
                            <CategoryCard Name={cat.Name} image={cat.Img} />
                        )
                    })
                }
            </div>


            <Footer />

        </div>
    )
}
